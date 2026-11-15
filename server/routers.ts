import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import { TRPCError } from "@trpc/server";
import { nanoid } from "nanoid";
import { getSessionCookieOptions } from "./_core/cookies";
import { hashPassword, verifyPassword } from "./_core/password";
import { sdk } from "./_core/sdk";
import { systemRouter } from "./_core/systemRouter";
import {
  adminProcedure,
  protectedProcedure,
  publicProcedure,
  router,
} from "./_core/trpc";
import {
  createLocalUser,
  getDb,
  getUserByEmail,
  getUserCourseProgress,
  memoryStore,
  saveUserCourseProgress,
  upsertUser,
} from "./db";
import {
  organisations,
  resources,
  professionals,
  schools,
  individualRegistrations,
  clubs,
  clubActivities,
  issuedCertificates,
  auditLogs,
  type User,
} from "../drizzle/schema";
import { and, asc, desc, eq } from "drizzle-orm";
import { z } from "zod";

function sanitizeUser(user: User) {
  return {
    id: user.id,
    openId: user.openId,
    name: user.name,
    email: user.email,
    loginMethod: user.loginMethod,
    role: user.role,
    createdAt: user.createdAt,
    lastSignedIn: user.lastSignedIn,
  };
}

const organisationInput = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().optional(),
  organisationType: z.string().optional(),
  division: z.string().optional(),
  district: z.string().optional(),
  serviceMode: z.enum(["Online", "In-person", "Both"]).optional(),
  languages: z.string().optional(),
  status: z
    .enum([
      "Verified",
      "Directly Confirmed",
      "Pending Verification",
      "Verification Expired",
      "Suspended",
      "Sample",
    ])
    .default("Pending Verification"),
  isSample: z.boolean().default(true),
  sourceUrl: z.string().url().optional(),
});

const resourceInput = z.object({
  title: z.string().min(2),
  titleBn: z.string().optional(),
  slug: z.string().min(2),
  topic: z.string().min(2),
  body: z.string().optional(),
  bodyBn: z.string().optional(),
  reviewStatus: z.enum(["Draft", "Reviewed", "Archived"]).default("Draft"),
  isPublished: z.boolean().default(false),
});

const schoolRegistrationInput = z.object({
  institutionType: z.enum(["School", "College"]).default("School"),
  name: z.string().min(3),
  address: z.string().min(5),
  division: z.string().optional(),
  district: z.string().optional(),
  contactEmail: z.string().email(),
  contactPhone: z.string().optional(),
  safeguardingContact: z.string().min(2),
});

const individualRegistrationInput = z.object({
  fullName: z.string().min(2).max(180),
  email: z.string().email(),
  phone: z.string().max(40).optional(),
  division: z.string().max(80).optional(),
  district: z.string().max(80).optional(),
  roleType: z.enum([
    "Student / Learner",
    "Parent / Guardian",
    "Educator / Mentor",
    "Community Volunteer",
  ]),
  preferredLanguage: z.string().max(60).optional(),
  participationNotes: z.string().max(1000).optional(),
});

const professionalApplicationInput = z.object({
  name: z.string().min(2),
  designation: z.string().min(2),
  organisation: z.string().min(2),
  expertise: z.string().min(2),
  geographicCoverage: z.string().min(2),
  languages: z.string().min(2),
  officialContact: z.string().min(3),
  consentToPublish: z.literal(true),
});

const clubInput = z.object({ schoolId: z.number(), name: z.string().min(3) });
const activityInput = z.object({
  clubId: z.number(),
  title: z.string().min(3),
  activityDate: z.coerce.date().optional(),
  attendanceCount: z.number().int().nonnegative().optional(),
  reportNotes: z.string().optional(),
});

const certificateIssueInput = z.object({
  certificateId: z.string().min(8).max(40),
  learnerName: z.string().min(2).max(255),
  courseTitle: z
    .string()
    .min(2)
    .max(255)
    .default("Women Safety in AI Era — Basic Foundation Course"),
  completionDate: z.coerce.date().optional(),
  verificationUrl: z.string().optional(),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) =>
      opts.ctx.user ? sanitizeUser(opts.ctx.user) : null
    ),
    register: publicProcedure
      .input(
        z.object({
          name: z.string().trim().min(2).max(120),
          email: z.string().trim().email().max(320),
          password: z.string().min(6).max(128),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const normalizedEmail = input.email.trim().toLowerCase();
        const existing = await getUserByEmail(normalizedEmail);
        if (existing) {
          throw new TRPCError({
            code: "CONFLICT",
            message:
              "An account with this email already exists. Please log in instead.",
          });
        }
        const openId = `local_${nanoid(16)}`;
        const passwordHash = hashPassword(input.password);
        const created = await createLocalUser({
          openId,
          name: input.name,
          email: normalizedEmail,
          passwordHash,
          role: "user",
        });
        const sessionToken = await sdk.createSessionToken(created.openId, {
          name: created.name ?? "",
          expiresInMs: ONE_YEAR_MS,
        });
        const cookieOptions = getSessionCookieOptions(ctx.req);
        ctx.res.cookie(COOKIE_NAME, sessionToken, {
          ...cookieOptions,
          maxAge: ONE_YEAR_MS,
        });
        return {
          user: sanitizeUser(created),
          sessionToken,
        };
      }),
    login: publicProcedure
      .input(
        z.object({
          email: z.string().trim().email().max(320),
          password: z.string().min(1).max(128),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const normalizedEmail = input.email.trim().toLowerCase();
        const user = await getUserByEmail(normalizedEmail);
        if (
          !user ||
          !user.passwordHash ||
          !verifyPassword(input.password, user.passwordHash)
        ) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Invalid email or password.",
          });
        }
        await upsertUser({
          openId: user.openId,
          lastSignedIn: new Date(),
        });
        const sessionToken = await sdk.createSessionToken(user.openId, {
          name: user.name ?? "",
          expiresInMs: ONE_YEAR_MS,
        });
        const cookieOptions = getSessionCookieOptions(ctx.req);
        ctx.res.cookie(COOKIE_NAME, sessionToken, {
          ...cookieOptions,
          maxAge: ONE_YEAR_MS,
        });
        return {
          user: sanitizeUser(user),
          sessionToken,
        };
      }),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  courseProgress: router({
    get: protectedProcedure.query(async ({ ctx }) => {
      return getUserCourseProgress(ctx.user);
    }),
    completeChapterExam: protectedProcedure
      .input(
        z.object({
          track: z.enum(["foundation", "intermediate"]),
          moduleId: z.string().min(2).max(20),
          moduleIndex: z.number().int().min(0),
          chapterIndex: z.number().int().min(0),
          totalChaptersInModule: z.number().int().min(1),
          totalModulesInTrack: z.number().int().min(1),
          score: z.number().int().min(0),
          totalQuestions: z.number().int().min(1),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const passScore = Math.max(1, Math.ceil(input.totalQuestions * 0.65));
        const passed = input.score >= passScore;
        const allProgress = await getUserCourseProgress(ctx.user);
        const trackState = {
          ...allProgress[input.track],
          completedChapters: [...allProgress[input.track].completedChapters],
          completedModules: [...allProgress[input.track].completedModules],
        };

        if (!passed) {
          return {
            passed: false,
            passScore,
            progress: allProgress,
          };
        }

        const chapterKey = `${input.moduleId}:${input.chapterIndex}`;
        if (!trackState.completedChapters.includes(chapterKey)) {
          trackState.completedChapters.push(chapterKey);
        }

        const isLastChapterInModule =
          input.chapterIndex + 1 >= input.totalChaptersInModule;

        if (isLastChapterInModule) {
          if (!trackState.completedModules.includes(input.moduleId)) {
            trackState.completedModules.push(input.moduleId);
          }
          const nextModuleIndex = Math.min(
            input.totalModulesInTrack - 1,
            input.moduleIndex + 1
          );
          if (nextModuleIndex > trackState.unlockedModuleIndex) {
            trackState.unlockedModuleIndex = nextModuleIndex;
            trackState.unlockedChapterIndex = 0;
          } else if (
            input.moduleIndex === trackState.unlockedModuleIndex &&
            input.moduleIndex + 1 >= input.totalModulesInTrack
          ) {
            trackState.unlockedChapterIndex = Math.max(
              trackState.unlockedChapterIndex,
              input.chapterIndex
            );
          }
        } else {
          const nextChapter = input.chapterIndex + 1;
          if (input.moduleIndex > trackState.unlockedModuleIndex) {
            trackState.unlockedModuleIndex = input.moduleIndex;
            trackState.unlockedChapterIndex = nextChapter;
          } else if (input.moduleIndex === trackState.unlockedModuleIndex) {
            trackState.unlockedChapterIndex = Math.max(
              trackState.unlockedChapterIndex,
              nextChapter
            );
          }
        }

        const updated = await saveUserCourseProgress(
          ctx.user,
          input.track,
          trackState
        );
        return {
          passed: true,
          passScore,
          progress: updated,
        };
      }),
  }),
  directory: router({
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      return db
        .select()
        .from(organisations)
        .orderBy(desc(organisations.updatedAt));
    }),
    create: adminProcedure
      .input(organisationInput)
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database is not available");
        return db.insert(organisations).values(input).$returningId();
      }),
    updateStatus: adminProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum([
            "Verified",
            "Directly Confirmed",
            "Pending Verification",
            "Verification Expired",
            "Suspended",
            "Sample",
          ]),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database is not available");
        await db
          .update(organisations)
          .set({ status: input.status, isSample: input.status === "Sample" })
          .where(eq(organisations.id, input.id));
        return { success: true };
      }),
  }),
  resources: router({
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      return db
        .select()
        .from(resources)
        .where(eq(resources.isPublished, true))
        .orderBy(desc(resources.updatedAt));
    }),
    create: adminProcedure.input(resourceInput).mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database is not available");
      return db.insert(resources).values(input);
    }),
  }),
  schools: router({
    register: publicProcedure
      .input(schoolRegistrationInput)
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          const id = memoryStore.nextId++;
          const now = new Date();
          memoryStore.schools.unshift({
            id,
            institutionType: input.institutionType,
            name: input.name,
            address: input.address,
            division: input.division ?? null,
            district: input.district ?? null,
            contactEmail: input.contactEmail,
            contactPhone: input.contactPhone ?? null,
            approvalStatus: "Pending Approval",
            safeguardingContact: input.safeguardingContact ?? null,
            createdAt: now,
            updatedAt: now,
          });
          return {
            success: true,
            id,
            institutionType: input.institutionType,
            status: "Pending Approval" as const,
          };
        }
        const result = await db.insert(schools).values(input);
        return {
          success: true,
          id: result[0].insertId,
          institutionType: input.institutionType,
          status: "Pending Approval" as const,
        };
      }),
    pending: adminProcedure.query(async () => {
      const db = await getDb();
      if (!db) return memoryStore.schools;
      return db.select().from(schools).orderBy(desc(schools.createdAt));
    }),
    updateStatus: adminProcedure
      .input(
        z.object({
          id: z.number(),
          approvalStatus: z.enum([
            "Pending Approval",
            "Verified School",
            "Suspended",
          ]),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          const item = memoryStore.schools.find((s) => s.id === input.id);
          if (item) item.approvalStatus = input.approvalStatus;
          return { success: true };
        }
        await db
          .update(schools)
          .set({ approvalStatus: input.approvalStatus })
          .where(eq(schools.id, input.id));
        return { success: true };
      }),
  }),
  individuals: router({
    register: publicProcedure
      .input(individualRegistrationInput)
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          const id = memoryStore.nextId++;
          const now = new Date();
          memoryStore.individuals.unshift({
            id,
            fullName: input.fullName,
            email: input.email,
            phone: input.phone ?? null,
            division: input.division ?? null,
            district: input.district ?? null,
            roleType: input.roleType,
            preferredLanguage: input.preferredLanguage ?? "Bangla & English",
            participationNotes: input.participationNotes ?? null,
            status: "Pending Review",
            createdAt: now,
            updatedAt: now,
          });
          return {
            success: true,
            id,
            status: "Pending Review" as const,
          };
        }
        const result = await db.insert(individualRegistrations).values({
          fullName: input.fullName,
          email: input.email,
          phone: input.phone ?? null,
          division: input.division ?? null,
          district: input.district ?? null,
          roleType: input.roleType,
          preferredLanguage: input.preferredLanguage ?? "Bangla & English",
          participationNotes: input.participationNotes ?? null,
          status: "Pending Review",
        });
        return {
          success: true,
          id: result[0].insertId,
          status: "Pending Review" as const,
        };
      }),
    pending: adminProcedure.query(async () => {
      const db = await getDb();
      if (!db) return memoryStore.individuals;
      return db
        .select()
        .from(individualRegistrations)
        .orderBy(desc(individualRegistrations.createdAt));
    }),
    updateStatus: adminProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["Pending Review", "Approved Member", "Suspended"]),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          const item = memoryStore.individuals.find((i) => i.id === input.id);
          if (item) item.status = input.status;
          return { success: true };
        }
        await db
          .update(individualRegistrations)
          .set({ status: input.status })
          .where(eq(individualRegistrations.id, input.id));
        return { success: true };
      }),
  }),
  professionals: router({
    submitApplication: publicProcedure
      .input(professionalApplicationInput)
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          const id = memoryStore.nextId++;
          const now = new Date();
          memoryStore.professionals.unshift({
            id,
            name: input.name,
            designation: input.designation,
            organisation: input.organisation,
            expertise: input.expertise,
            geographicCoverage: input.geographicCoverage,
            languages: input.languages,
            officialContact: input.officialContact,
            consentToPublish: true,
            status: "Pending Verification",
            isSample: false,
            createdAt: now,
            updatedAt: now,
          });
          return {
            success: true,
            id,
            status: "Pending Verification" as const,
          };
        }
        const result = await db
          .insert(professionals)
          .values({ ...input, isSample: false, status: "Pending Verification" });
        return {
          success: true,
          id: result[0].insertId,
          status: "Pending Verification" as const,
        };
      }),
    pending: adminProcedure.query(async () => {
      const db = await getDb();
      if (!db) return memoryStore.professionals;
      return db
        .select()
        .from(professionals)
        .orderBy(desc(professionals.createdAt));
    }),
    updateStatus: adminProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum([
            "Pending Verification",
            "Verified Expert",
            "Institutional Representative",
            "Suspended",
          ]),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          const item = memoryStore.professionals.find((p) => p.id === input.id);
          if (item) {
            item.status = input.status;
            item.isSample = false;
          }
          return { success: true };
        }
        await db
          .update(professionals)
          .set({ status: input.status, isSample: false })
          .where(eq(professionals.id, input.id));
        return { success: true };
      }),
  }),
  clubsDirectory: router({
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) {
        return memoryStore.clubs
          .filter((c) => c.status === "Active")
          .map((c) => {
            const school = memoryStore.schools.find(
              (s) => s.id === c.schoolId && s.approvalStatus === "Verified School"
            );
            if (!school) return null;
            return {
              id: c.id,
              clubName: c.name,
              schoolName: school.name,
              institutionType: school.institutionType,
              division: school.division,
              district: school.district,
            };
          })
          .filter((item): item is NonNullable<typeof item> => item !== null);
      }
      return db
        .select({
          id: clubs.id,
          clubName: clubs.name,
          schoolName: schools.name,
          institutionType: schools.institutionType,
          division: schools.division,
          district: schools.district,
        })
        .from(clubs)
        .innerJoin(schools, eq(clubs.schoolId, schools.id))
        .where(
          and(
            eq(clubs.status, "Active"),
            eq(schools.approvalStatus, "Verified School")
          )
        )
        .orderBy(asc(schools.name), asc(clubs.name));
    }),
  }),
  clubManagement: router({
    list: adminProcedure.query(async () => {
      const db = await getDb();
      if (!db) return memoryStore.clubs;
      return db.select().from(clubs).orderBy(desc(clubs.createdAt));
    }),
    create: adminProcedure.input(clubInput).mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database is not available");
      return db.insert(clubs).values({ ...input, status: "Draft" });
    }),
    reportActivity: adminProcedure
      .input(activityInput)
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database is not available");
        return db.insert(clubActivities).values(input);
      }),
  }),
  certificates: router({
    issue: publicProcedure
      .input(certificateIssueInput)
      .mutation(async ({ input }) => {
        const db = await getDb();
        const completionDate = input.completionDate ?? new Date();
        if (!db) {
          const existing = memoryStore.certificates.find(
            (c) => c.certificateId === input.certificateId
          );
          if (existing) return existing;
          const record = {
            id: memoryStore.nextId++,
            certificateId: input.certificateId,
            learnerId: null,
            learnerName: input.learnerName,
            courseTitle: input.courseTitle,
            completionDate,
            issuedAt: new Date(),
            verificationUrl: input.verificationUrl ?? `/verify/${input.certificateId}`,
            status: "VALID" as const,
            revokedAt: null,
            revokedBy: null,
            revocationReason: null,
          };
          memoryStore.certificates.unshift(record);
          return record;
        }
        const [existing] = await db
          .select()
          .from(issuedCertificates)
          .where(eq(issuedCertificates.certificateId, input.certificateId))
          .limit(1);
        if (existing) return existing;
        await db.insert(issuedCertificates).values({
          certificateId: input.certificateId,
          learnerName: input.learnerName,
          courseTitle: input.courseTitle,
          completionDate,
          verificationUrl: input.verificationUrl ?? `/verify/${input.certificateId}`,
          status: "VALID",
        });
        const [created] = await db
          .select()
          .from(issuedCertificates)
          .where(eq(issuedCertificates.certificateId, input.certificateId))
          .limit(1);
        return created ?? null;
      }),
    verify: publicProcedure
      .input(z.object({ certificateId: z.string().min(8).max(40) }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          const item = memoryStore.certificates.find(
            (c) => c.certificateId === input.certificateId
          );
          if (!item) return null;
          return {
            certificateId: item.certificateId,
            learnerName: item.learnerName,
            courseTitle: item.courseTitle,
            completionDate: item.completionDate,
            issuedAt: item.issuedAt,
            status: item.status,
            revokedAt: item.revokedAt,
          };
        }
        const rows = await db
          .select({
            certificateId: issuedCertificates.certificateId,
            learnerName: issuedCertificates.learnerName,
            courseTitle: issuedCertificates.courseTitle,
            completionDate: issuedCertificates.completionDate,
            issuedAt: issuedCertificates.issuedAt,
            status: issuedCertificates.status,
            revokedAt: issuedCertificates.revokedAt,
          })
          .from(issuedCertificates)
          .where(eq(issuedCertificates.certificateId, input.certificateId))
          .limit(1);
        return rows[0] ?? null;
      }),
    auditList: adminProcedure.query(async () => {
      const db = await getDb();
      if (!db) return memoryStore.certificates;
      return db
        .select()
        .from(issuedCertificates)
        .orderBy(desc(issuedCertificates.issuedAt));
    }),
    revoke: adminProcedure
      .input(z.object({ id: z.number(), reason: z.string().min(3).max(2000) }))
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) {
          const item = memoryStore.certificates.find((c) => c.id === input.id);
          if (item) {
            item.status = "REVOKED";
            item.revokedAt = new Date();
            item.revokedBy = ctx.user.id;
            item.revocationReason = input.reason;
          }
          return { success: true } as const;
        }
        await db
          .update(issuedCertificates)
          .set({
            status: "REVOKED",
            revokedAt: new Date(),
            revokedBy: ctx.user.id,
            revocationReason: input.reason,
          })
          .where(eq(issuedCertificates.id, input.id));
        await db.insert(auditLogs).values({
          actorId: ctx.user.id,
          action: "certificate.revoked",
          entityType: "issued_certificate",
          entityId: input.id,
          details: JSON.stringify({ reason: input.reason }),
        });
        return { success: true } as const;
      }),
  }),
  admin: router({
    status: protectedProcedure.query(({ ctx }) => ({
      isAdmin: ctx.user.role === "admin",
      role: ctx.user.role,
    })),
  }),
});

export type AppRouter = typeof appRouter;
