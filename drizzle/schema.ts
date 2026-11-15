import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  passwordHash: varchar("passwordHash", { length: 255 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const learnerProgress = mysqlTable("learner_progress", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  track: mysqlEnum("track", ["foundation", "intermediate"]).notNull(),
  unlockedModuleIndex: int("unlockedModuleIndex").default(0).notNull(),
  unlockedChapterIndex: int("unlockedChapterIndex").default(0).notNull(),
  completedChaptersJson: text("completedChaptersJson").notNull(),
  completedModulesJson: text("completedModulesJson").notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
export type LearnerProgressRow = typeof learnerProgress.$inferSelect;

export const organisations = mysqlTable("organisations", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(), slug: varchar("slug", { length: 160 }).notNull().unique(), description: text("description"), organisationType: varchar("organisationType", { length: 120 }), division: varchar("division", { length: 80 }), district: varchar("district", { length: 80 }), serviceMode: mysqlEnum("serviceMode", ["Online", "In-person", "Both"]), languages: varchar("languages", { length: 255 }), status: mysqlEnum("status", ["Verified", "Directly Confirmed", "Pending Verification", "Verification Expired", "Suspended", "Sample"]).default("Pending Verification").notNull(), isSample: boolean("isSample").default(true).notNull(), sourceUrl: text("sourceUrl"), createdAt: timestamp("createdAt").defaultNow().notNull(), updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
export const organisationContacts = mysqlTable("organisation_contacts", { id: int("id").autoincrement().primaryKey(), organisationId: int("organisationId").notNull(), phone: varchar("phone", { length: 40 }), email: varchar("email", { length: 320 }), website: text("website"), address: text("address") });
export const organisationServices = mysqlTable("organisation_services", { id: int("id").autoincrement().primaryKey(), organisationId: int("organisationId").notNull(), category: varchar("category", { length: 160 }).notNull(), eligibility: text("eligibility") });
export const organisationVerifications = mysqlTable("organisation_verifications", { id: int("id").autoincrement().primaryKey(), organisationId: int("organisationId").notNull(), verificationMethod: varchar("verificationMethod", { length: 120 }).notNull(), sourceUrl: text("sourceUrl").notNull(), officerId: int("officerId"), verifiedAt: timestamp("verifiedAt").defaultNow().notNull(), expiresAt: timestamp("expiresAt"), notes: text("notes") });
export const resources = mysqlTable("resources", { id: int("id").autoincrement().primaryKey(), title: varchar("title", { length: 255 }).notNull(), titleBn: varchar("titleBn", { length: 255 }), slug: varchar("slug", { length: 160 }).notNull().unique(), topic: varchar("topic", { length: 160 }).notNull(), body: text("body"), bodyBn: text("bodyBn"), reviewStatus: mysqlEnum("reviewStatus", ["Draft", "Reviewed", "Archived"]).default("Draft").notNull(), isPublished: boolean("isPublished").default(false).notNull(), createdAt: timestamp("createdAt").defaultNow().notNull(), updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull() });
export const auditLogs = mysqlTable("audit_logs", { id: int("id").autoincrement().primaryKey(), actorId: int("actorId"), action: varchar("action", { length: 120 }).notNull(), entityType: varchar("entityType", { length: 80 }).notNull(), entityId: int("entityId"), details: text("details"), createdAt: timestamp("createdAt").defaultNow().notNull() });
export const issuedCertificates = mysqlTable("issued_certificates", {
  id: int("id").autoincrement().primaryKey(),
  certificateId: varchar("certificateId", { length: 40 }).notNull().unique(),
  learnerId: int("learnerId"),
  learnerName: varchar("learnerName", { length: 255 }).notNull(),
  courseTitle: varchar("courseTitle", { length: 255 }).notNull(),
  completionDate: timestamp("completionDate").notNull(),
  issuedAt: timestamp("issuedAt").defaultNow().notNull(),
  verificationUrl: text("verificationUrl"),
  status: mysqlEnum("status", ["VALID", "REVOKED"]).default("VALID").notNull(),
  revokedAt: timestamp("revokedAt"),
  revokedBy: int("revokedBy"),
  revocationReason: text("revocationReason"),
});
export type IssuedCertificate = typeof issuedCertificates.$inferSelect;
export type InsertIssuedCertificate = typeof issuedCertificates.$inferInsert;

export const professionals = mysqlTable("professionals", {
  id: int("id").autoincrement().primaryKey(), name: varchar("name", { length: 180 }).notNull(), designation: varchar("designation", { length: 180 }), organisation: varchar("organisation", { length: 255 }), expertise: text("expertise"), geographicCoverage: varchar("geographicCoverage", { length: 255 }), languages: varchar("languages", { length: 255 }), officialContact: text("officialContact"), consentToPublish: boolean("consentToPublish").default(false).notNull(), status: mysqlEnum("status", ["Pending Verification", "Verified Expert", "Institutional Representative", "Suspended"]).default("Pending Verification").notNull(), isSample: boolean("isSample").default(true).notNull(), createdAt: timestamp("createdAt").defaultNow().notNull(), updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
export const professionalCredentials = mysqlTable("professional_credentials", { id: int("id").autoincrement().primaryKey(), professionalId: int("professionalId").notNull(), credentialType: varchar("credentialType", { length: 160 }).notNull(), verificationSource: text("verificationSource"), status: mysqlEnum("status", ["Pending", "Checked", "Rejected"]).default("Pending").notNull(), notes: text("notes") });
export const schools = mysqlTable("schools", { id: int("id").autoincrement().primaryKey(), institutionType: mysqlEnum("institutionType", ["School", "College"]).default("School").notNull(), name: varchar("name", { length: 255 }).notNull(), address: text("address").notNull(), division: varchar("division", { length: 80 }), district: varchar("district", { length: 80 }), contactEmail: varchar("contactEmail", { length: 320 }).notNull(), contactPhone: varchar("contactPhone", { length: 40 }), approvalStatus: mysqlEnum("approvalStatus", ["Pending Approval", "Verified School", "Suspended"]).default("Pending Approval").notNull(), safeguardingContact: varchar("safeguardingContact", { length: 180 }), createdAt: timestamp("createdAt").defaultNow().notNull(), updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull() });
export const individualRegistrations = mysqlTable("individual_registrations", {
  id: int("id").autoincrement().primaryKey(),
  fullName: varchar("fullName", { length: 180 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 40 }),
  division: varchar("division", { length: 80 }),
  district: varchar("district", { length: 80 }),
  roleType: mysqlEnum("roleType", ["Student / Learner", "Parent / Guardian", "Educator / Mentor", "Community Volunteer"]).default("Student / Learner").notNull(),
  preferredLanguage: varchar("preferredLanguage", { length: 60 }).default("Bangla & English"),
  participationNotes: text("participationNotes"),
  status: mysqlEnum("status", ["Pending Review", "Approved Member", "Suspended"]).default("Pending Review").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
export const schoolStaff = mysqlTable("school_staff", { id: int("id").autoincrement().primaryKey(), schoolId: int("schoolId").notNull(), name: varchar("name", { length: 180 }).notNull(), role: varchar("role", { length: 120 }).notNull(), email: varchar("email", { length: 320 }).notNull(), approvalStatus: mysqlEnum("approvalStatus", ["Pending", "Approved", "Suspended"]).default("Pending").notNull() });
export const clubs = mysqlTable("clubs", { id: int("id").autoincrement().primaryKey(), schoolId: int("schoolId").notNull(), name: varchar("name", { length: 255 }).notNull(), status: mysqlEnum("status", ["Draft", "Active", "Paused"]).default("Draft").notNull(), createdAt: timestamp("createdAt").defaultNow().notNull() });
export const clubMemberships = mysqlTable("club_memberships", { id: int("id").autoincrement().primaryKey(), clubId: int("clubId").notNull(), memberCode: varchar("memberCode", { length: 64 }).notNull(), memberType: mysqlEnum("memberType", ["Student Leader", "Teacher Adviser", "Staff"]).notNull(), status: mysqlEnum("status", ["Pending", "Active", "Removed"]).default("Pending").notNull(), createdAt: timestamp("createdAt").defaultNow().notNull() });
export const clubActivities = mysqlTable("club_activities", { id: int("id").autoincrement().primaryKey(), clubId: int("clubId").notNull(), title: varchar("title", { length: 255 }).notNull(), activityDate: timestamp("activityDate"), attendanceCount: int("attendanceCount"), reportNotes: text("reportNotes"), createdAt: timestamp("createdAt").defaultNow().notNull() });

