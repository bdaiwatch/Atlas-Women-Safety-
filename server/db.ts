import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { and, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  InsertUser,
  learnerProgress,
  type User,
  users,
} from "../drizzle/schema";
import { ENV } from "./_core/env";

let _db: ReturnType<typeof drizzle> | null = null;

export type TrackProgressState = {
  unlockedModuleIndex: number;
  unlockedChapterIndex: number;
  completedChapters: string[];
  completedModules: string[];
};

export type UserCourseProgress = {
  foundation: TrackProgressState;
  intermediate: TrackProgressState;
};

export function createInitialTrackProgress(): TrackProgressState {
  return {
    unlockedModuleIndex: 0,
    unlockedChapterIndex: 0,
    completedChapters: [],
    completedModules: [],
  };
}

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// Ephemeral in-memory fallback store used only when DATABASE_URL is not configured.
export type MemoryCertificateRecord = {
  id: number;
  certificateId: string;
  learnerId: number | null;
  learnerName: string;
  courseTitle: string;
  completionDate: Date;
  issuedAt: Date;
  verificationUrl: string | null;
  status: "VALID" | "REVOKED";
  revokedAt: Date | null;
  revokedBy: number | null;
  revocationReason: string | null;
};

export type MemorySchoolRecord = {
  id: number;
  institutionType: "School" | "College";
  name: string;
  address: string;
  division: string | null;
  district: string | null;
  contactEmail: string;
  contactPhone: string | null;
  approvalStatus: "Pending Approval" | "Verified School" | "Suspended";
  safeguardingContact: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type MemoryIndividualRecord = {
  id: number;
  fullName: string;
  email: string;
  phone: string | null;
  division: string | null;
  district: string | null;
  roleType:
    | "Student / Learner"
    | "Parent / Guardian"
    | "Educator / Mentor"
    | "Community Volunteer";
  preferredLanguage: string | null;
  participationNotes: string | null;
  status: "Pending Review" | "Approved Member" | "Suspended";
  createdAt: Date;
  updatedAt: Date;
};

export type MemoryProfessionalRecord = {
  id: number;
  name: string;
  designation: string | null;
  organisation: string | null;
  expertise: string | null;
  geographicCoverage: string | null;
  languages: string | null;
  officialContact: string | null;
  consentToPublish: boolean;
  status:
    | "Pending Verification"
    | "Verified Expert"
    | "Institutional Representative"
    | "Suspended";
  isSample: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type MemoryUserRecord = {
  id: number;
  openId: string;
  name: string | null;
  email: string | null;
  passwordHash: string | null;
  loginMethod: string | null;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
  lastSignedIn: Date;
};

export const memoryStore = {
  nextId: 1,
  users: [] as MemoryUserRecord[],
  learnerProgress: {} as Record<string, UserCourseProgress>,
  schools: [] as MemorySchoolRecord[],
  individuals: [] as MemoryIndividualRecord[],
  professionals: [] as MemoryProfessionalRecord[],
  certificates: [] as MemoryCertificateRecord[],
  clubs: [] as Array<{
    id: number;
    schoolId: number;
    name: string;
    status: "Draft" | "Active" | "Paused";
    createdAt: Date;
  }>,
};

const LOCAL_STORE_PATH = path.join(os.tmpdir(), "wsai-local-auth-store.json");

function hydrateLocalAuthStore() {
  if (process.env.VITEST || process.env.DATABASE_URL) return;
  try {
    if (!fs.existsSync(LOCAL_STORE_PATH)) return;
    const raw = JSON.parse(fs.readFileSync(LOCAL_STORE_PATH, "utf8"));
    if (typeof raw?.nextId === "number") {
      memoryStore.nextId = Math.max(memoryStore.nextId, raw.nextId);
    }
    if (Array.isArray(raw?.users)) {
      memoryStore.users = raw.users.map((u: MemoryUserRecord) => ({
        ...u,
        createdAt: new Date(u.createdAt),
        updatedAt: new Date(u.updatedAt),
        lastSignedIn: new Date(u.lastSignedIn),
      }));
    }
    if (raw?.learnerProgress && typeof raw.learnerProgress === "object") {
      memoryStore.learnerProgress = raw.learnerProgress;
    }
  } catch {
    // Ignore corrupt cache
  }
}

function persistLocalAuthStore() {
  if (process.env.VITEST || process.env.DATABASE_URL) return;
  try {
    fs.writeFileSync(
      LOCAL_STORE_PATH,
      JSON.stringify({
        nextId: memoryStore.nextId,
        users: memoryStore.users,
        learnerProgress: memoryStore.learnerProgress,
      }),
      "utf8",
    );
  } catch {
    // Ignore write failure
  }
}

hydrateLocalAuthStore();

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    const existing = memoryStore.users.find((u) => u.openId === user.openId);
    const now = new Date();
    if (existing) {
      if (user.name !== undefined) existing.name = user.name ?? null;
      if (user.email !== undefined) existing.email = user.email ?? null;
      if (user.loginMethod !== undefined) existing.loginMethod = user.loginMethod ?? null;
      if (user.passwordHash !== undefined) existing.passwordHash = user.passwordHash ?? null;
      if (user.role !== undefined) existing.role = user.role;
      existing.lastSignedIn = user.lastSignedIn ?? now;
      existing.updatedAt = now;
    } else {
      memoryStore.users.push({
        id: memoryStore.nextId++,
        openId: user.openId,
        name: user.name ?? null,
        email: user.email ?? null,
        passwordHash: user.passwordHash ?? null,
        loginMethod: user.loginMethod ?? null,
        role: user.role ?? (user.openId === ENV.ownerOpenId ? "admin" : "user"),
        createdAt: now,
        updatedAt: now,
        lastSignedIn: user.lastSignedIn ?? now,
      });
    }
    persistLocalAuthStore();
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod", "passwordHash"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = "admin";
      updateSet.role = "admin";
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string): Promise<User | undefined> {
  const db = await getDb();
  if (!db) {
    return memoryStore.users.find((u) => u.openId === openId);
  }

  const result = await db
    .select()
    .from(users)
    .where(eq(users.openId, openId))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const normalized = email.trim().toLowerCase();
  const db = await getDb();
  if (!db) {
    return memoryStore.users.find(
      (u) => (u.email ?? "").trim().toLowerCase() === normalized,
    );
  }

  const result = await db
    .select()
    .from(users)
    .where(eq(users.email, normalized))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function createLocalUser(input: {
  openId: string;
  name: string;
  email: string;
  passwordHash: string;
  role?: "user" | "admin";
}): Promise<User> {
  const normalizedEmail = input.email.trim().toLowerCase();
  const now = new Date();
  const db = await getDb();
  if (!db) {
    const record: MemoryUserRecord = {
      id: memoryStore.nextId++,
      openId: input.openId,
      name: input.name.trim(),
      email: normalizedEmail,
      passwordHash: input.passwordHash,
      loginMethod: "email",
      role: input.role ?? "user",
      createdAt: now,
      updatedAt: now,
      lastSignedIn: now,
    };
    memoryStore.users.push(record);
    memoryStore.learnerProgress[record.openId] = {
      foundation: createInitialTrackProgress(),
      intermediate: createInitialTrackProgress(),
    };
    persistLocalAuthStore();
    return record;
  }

  await db.insert(users).values({
    openId: input.openId,
    name: input.name.trim(),
    email: normalizedEmail,
    passwordHash: input.passwordHash,
    loginMethod: "email",
    role: input.role ?? "user",
    lastSignedIn: now,
  });
  const created = await getUserByOpenId(input.openId);
  if (!created) throw new Error("Failed to create user account");
  return created;
}

export async function getUserCourseProgress(
  user: Pick<User, "id" | "openId">,
): Promise<UserCourseProgress> {
  const db = await getDb();
  if (!db) {
    if (!memoryStore.learnerProgress[user.openId]) {
      memoryStore.learnerProgress[user.openId] = {
        foundation: createInitialTrackProgress(),
        intermediate: createInitialTrackProgress(),
      };
      persistLocalAuthStore();
    }
    return memoryStore.learnerProgress[user.openId];
  }

  const rows = await db
    .select()
    .from(learnerProgress)
    .where(eq(learnerProgress.userId, user.id));

  const result: UserCourseProgress = {
    foundation: createInitialTrackProgress(),
    intermediate: createInitialTrackProgress(),
  };
  for (const row of rows) {
    const parsedChapters = safeParseArray(row.completedChaptersJson);
    const parsedModules = safeParseArray(row.completedModulesJson);
    result[row.track] = {
      unlockedModuleIndex: row.unlockedModuleIndex,
      unlockedChapterIndex: row.unlockedChapterIndex,
      completedChapters: parsedChapters,
      completedModules: parsedModules,
    };
  }
  return result;
}

export async function saveUserCourseProgress(
  user: Pick<User, "id" | "openId">,
  track: "foundation" | "intermediate",
  progress: TrackProgressState,
): Promise<UserCourseProgress> {
  const db = await getDb();
  if (!db) {
    const current = await getUserCourseProgress(user);
    current[track] = progress;
    memoryStore.learnerProgress[user.openId] = current;
    persistLocalAuthStore();
    return current;
  }

  const existing = await db
    .select()
    .from(learnerProgress)
    .where(
      and(
        eq(learnerProgress.userId, user.id),
        eq(learnerProgress.track, track),
      ),
    )
    .limit(1);

  if (existing.length > 0) {
    await db
      .update(learnerProgress)
      .set({
        unlockedModuleIndex: progress.unlockedModuleIndex,
        unlockedChapterIndex: progress.unlockedChapterIndex,
        completedChaptersJson: JSON.stringify(progress.completedChapters),
        completedModulesJson: JSON.stringify(progress.completedModules),
      })
      .where(eq(learnerProgress.id, existing[0].id));
  } else {
    await db.insert(learnerProgress).values({
      userId: user.id,
      track,
      unlockedModuleIndex: progress.unlockedModuleIndex,
      unlockedChapterIndex: progress.unlockedChapterIndex,
      completedChaptersJson: JSON.stringify(progress.completedChapters),
      completedModulesJson: JSON.stringify(progress.completedModules),
    });
  }

  return getUserCourseProgress(user);
}

function safeParseArray(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}
