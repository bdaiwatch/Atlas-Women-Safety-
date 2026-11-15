import { afterEach, describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import { courseModules } from "../client/src/data/courseContent";
import { intermediateCourseModules } from "../client/src/data/intermediateCourseContent";
import { getChapterExamQuestions } from "../client/src/data/chapterExams";

function createTestContext(user: TrpcContext["user"] = null): {
  ctx: TrpcContext;
  cookiesSet: Array<{ name: string; value: string }>;
} {
  const cookiesSet: Array<{ name: string; value: string }> = [];
  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      cookie: (name: string, value: string) => {
        cookiesSet.push({ name, value });
      },
      clearCookie: () => {},
    } as unknown as TrpcContext["res"],
  };
  return { ctx, cookiesSet };
}

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("learner auth, module locking, and chapter exam progression", () => {
  it("contains 3-question chapter exams for all 40 Foundation and 30 Intermediate chapters", () => {
    for (const module of courseModules) {
      expect(module.lessons.length).toBeGreaterThan(0);
      for (let i = 0; i < module.lessons.length; i += 1) {
        const questions = getChapterExamQuestions(module.id, i);
        expect(questions.length).toBe(3);
        for (const q of questions) {
          expect(q.options_bn.length).toBeGreaterThanOrEqual(3);
          expect(q.answer).toBeGreaterThanOrEqual(0);
          expect(q.answer).toBeLessThan(q.options_bn.length);
        }
      }
    }

    for (const module of intermediateCourseModules) {
      expect(module.lessons.length).toBeGreaterThan(0);
      for (let i = 0; i < module.lessons.length; i += 1) {
        const questions = getChapterExamQuestions(module.id, i);
        expect(questions.length).toBe(3);
        for (const q of questions) {
          expect(q.options_bn.length).toBeGreaterThanOrEqual(3);
          expect(q.answer).toBeGreaterThanOrEqual(0);
          expect(q.answer).toBeLessThan(q.options_bn.length);
        }
      }
    }
  });

  it("blocks unauthenticated courseProgress access", async () => {
    const { ctx } = createTestContext(null);
    const caller = appRouter.createCaller(ctx);
    await expect(caller.courseProgress.get()).rejects.toThrow();
  });

  it("registers a learner, unlocks only Module 01 Chapter 1, and advances chapter-by-chapter after passing exams", async () => {
    vi.stubEnv("MANUS_PROJECT_ID", "wsai-test-project");
    vi.stubEnv("MANUS_JWT_SECRET", "unit-test-signing-key-never-deployed");

    const { ctx: anonCtx, cookiesSet } = createTestContext(null);
    const anonCaller = appRouter.createCaller(anonCtx);

    const uniqueEmail = `learner-${Date.now()}@example.com`;
    const registered = await anonCaller.auth.register({
      name: "Nusrat Jahan",
      email: uniqueEmail,
      password: "securePassword123",
    });

    expect(registered.user.email).toBe(uniqueEmail);
    expect(registered.user.name).toBe("Nusrat Jahan");
    expect((registered.user as Record<string, unknown>).passwordHash).toBeUndefined();
    expect(registered.sessionToken.length).toBeGreaterThan(10);
    expect(cookiesSet.length).toBe(1);

    await expect(
      anonCaller.auth.login({ email: uniqueEmail, password: "wrong-password" })
    ).rejects.toThrow();

    const loggedIn = await anonCaller.auth.login({
      email: uniqueEmail,
      password: "securePassword123",
    });
    expect(loggedIn.user.openId).toBe(registered.user.openId);

    const authedUser: NonNullable<TrpcContext["user"]> = {
      ...registered.user,
      passwordHash: null,
    };
    const { ctx: userCtx } = createTestContext(authedUser);
    const userCaller = appRouter.createCaller(userCtx);

    const initial = await userCaller.courseProgress.get();
    expect(initial.foundation).toEqual({
      unlockedModuleIndex: 0,
      unlockedChapterIndex: 0,
      completedChapters: [],
      completedModules: [],
    });
    expect(initial.intermediate).toEqual({
      unlockedModuleIndex: 0,
      unlockedChapterIndex: 0,
      completedChapters: [],
      completedModules: [],
    });

    // Failing chapter 1 exam keeps unlock at (0, 0)
    const failedAttempt = await userCaller.courseProgress.completeChapterExam({
      track: "intermediate",
      moduleId: "im1",
      moduleIndex: 0,
      chapterIndex: 0,
      totalChaptersInModule: 3,
      totalModulesInTrack: 10,
      score: 1,
      totalQuestions: 3,
    });
    expect(failedAttempt.passed).toBe(false);
    expect(failedAttempt.progress.intermediate.unlockedModuleIndex).toBe(0);
    expect(failedAttempt.progress.intermediate.unlockedChapterIndex).toBe(0);

    // Passing chapter 1 unlocks chapter 2
    const passCh1 = await userCaller.courseProgress.completeChapterExam({
      track: "intermediate",
      moduleId: "im1",
      moduleIndex: 0,
      chapterIndex: 0,
      totalChaptersInModule: 3,
      totalModulesInTrack: 10,
      score: 2,
      totalQuestions: 3,
    });
    expect(passCh1.passed).toBe(true);
    expect(passCh1.progress.intermediate.unlockedModuleIndex).toBe(0);
    expect(passCh1.progress.intermediate.unlockedChapterIndex).toBe(1);
    expect(passCh1.progress.intermediate.completedChapters).toContain("im1:0");

    // Passing chapter 2 & chapter 3 completes Module 1 and unlocks Module 2 Chapter 1
    await userCaller.courseProgress.completeChapterExam({
      track: "intermediate",
      moduleId: "im1",
      moduleIndex: 0,
      chapterIndex: 1,
      totalChaptersInModule: 3,
      totalModulesInTrack: 10,
      score: 3,
      totalQuestions: 3,
    });
    const passCh3 = await userCaller.courseProgress.completeChapterExam({
      track: "intermediate",
      moduleId: "im1",
      moduleIndex: 0,
      chapterIndex: 2,
      totalChaptersInModule: 3,
      totalModulesInTrack: 10,
      score: 2,
      totalQuestions: 3,
    });
    expect(passCh3.passed).toBe(true);
    expect(passCh3.progress.intermediate.completedModules).toContain("im1");
    expect(passCh3.progress.intermediate.unlockedModuleIndex).toBe(1);
    expect(passCh3.progress.intermediate.unlockedChapterIndex).toBe(0);
  });
});
