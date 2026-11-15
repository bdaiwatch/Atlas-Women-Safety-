import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  Clock3,
  Cpu,
  FileText,
  GraduationCap,
  Layers,
  ListChecks,
  LockKeyhole,
  LogIn,
  RotateCcw,
  ShieldCheck,
  Unlock,
  UserPlus,
} from "lucide-react";
import { Link, useLocation, useSearch } from "wouter";
import { useAuth } from "../_core/hooks/useAuth";
import {
  getChapterExamQuestions,
  type ChapterExamQuestion,
} from "../data/chapterExams";
import { courseModules, type CourseModule } from "../data/courseContent";
import {
  intermediateCourseModules,
  type IntermediateModule,
} from "../data/intermediateCourseContent";
import {
  intermediateManualDocuments,
  toolkitDocuments,
} from "../data/resourcesLibrary";
import { trpc } from "../lib/trpc";
import "../coursePathway.css";
import "../courseEditorial.css";

type CourseLevel = "foundation" | "intermediate";
type IntermediateFilter = "all" | "safety" | "ai-literacy";

type TrackProgress = {
  unlockedModuleIndex: number;
  unlockedChapterIndex: number;
  completedChapters: string[];
  completedModules: string[];
};

const DEFAULT_TRACK_PROGRESS: TrackProgress = {
  unlockedModuleIndex: 0,
  unlockedChapterIndex: 0,
  completedChapters: [],
  completedModules: [],
};

type ChapterExamBoxProps = {
  track: CourseLevel;
  moduleId: string;
  moduleIndex: number;
  chapterIndex: number;
  totalChaptersInModule: number;
  totalModulesInTrack: number;
  alreadyPassed: boolean;
  onPassComplete: (updatedTrack: TrackProgress) => void;
};

function ChapterExamBox({
  track,
  moduleId,
  moduleIndex,
  chapterIndex,
  totalChaptersInModule,
  totalModulesInTrack,
  alreadyPassed,
  onPassComplete,
}: ChapterExamBoxProps) {
  const questions: readonly ChapterExamQuestion[] = useMemo(
    () => getChapterExamQuestions(moduleId, chapterIndex),
    [moduleId, chapterIndex]
  );

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [serverError, setServerError] = useState("");
  const [serverPassed, setServerPassed] = useState(alreadyPassed);

  const utils = trpc.useUtils();
  const submitExamMutation =
    trpc.courseProgress.completeChapterExam.useMutation();

  useEffect(() => {
    setServerPassed(alreadyPassed);
  }, [alreadyPassed]);

  const passThreshold = Math.max(1, Math.ceil(questions.length * 0.65));
  const localScore = useMemo(
    () =>
      questions.reduce(
        (total, q, idx) => total + (answers[idx] === q.answer ? 1 : 0),
        0
      ),
    [answers, questions]
  );

  function choose(questionIdx: number, optionIdx: number) {
    setAnswers((current) => ({ ...current, [questionIdx]: optionIdx }));
    setChecked(false);
    setServerError("");
  }

  function reset() {
    setAnswers({});
    setChecked(false);
    setServerError("");
  }

  async function handleSubmit() {
    if (Object.keys(answers).length !== questions.length) return;
    setServerError("");
    setChecked(true);

    try {
      const response = await submitExamMutation.mutateAsync({
        track,
        moduleId,
        moduleIndex,
        chapterIndex,
        totalChaptersInModule,
        totalModulesInTrack,
        score: localScore,
        totalQuestions: questions.length,
      });

      if (response.passed) {
        setServerPassed(true);
        utils.courseProgress.get.setData(undefined, response.progress);
        onPassComplete(response.progress[track]);
      }
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Could not save exam result. Please verify your session and try again."
      );
    }
  }

  if (questions.length === 0) {
    return null;
  }

  const isLastChapter = chapterIndex + 1 >= totalChaptersInModule;
  const isLastModule = moduleIndex + 1 >= totalModulesInTrack;

  return (
    <section
      className="chapter-exam-box"
      aria-labelledby={`${moduleId}-ch${chapterIndex}-exam-title`}
    >
      <div className="chapter-exam-head">
        <div>
          <p className="eyebrow">
            Chapter {chapterIndex + 1} Assessment · অধ্যায় {chapterIndex + 1} পরীক্ষা
          </p>
          <h4 id={`${moduleId}-ch${chapterIndex}-exam-title`}>
            <span className="lang-en">
              Pass this {questions.length}-question chapter assessment (minimum{" "}
              {passThreshold}/{questions.length}) to unlock{" "}
              {isLastChapter
                ? isLastModule
                  ? "the Final Certificate Examination"
                  : `Module ${String(moduleIndex + 2).padStart(2, "0")}`
                : `Chapter ${chapterIndex + 2}`}
              .
            </span>
            <span className="bn-line">
              {isLastChapter
                ? isLastModule
                  ? `সার্টিফিকেট পরীক্ষার যোগ্যতা পেতে এই অধ্যায়ের ${questions.length}টি প্রশ্নের মধ্যে অন্তত ${passThreshold}টি সঠিক উত্তর দিন।`
                  : `মডিউল ${moduleIndex + 2} খুলতে এই অধ্যায়ের ${questions.length}টি প্রশ্নের মধ্যে অন্তত ${passThreshold}টি সঠিক উত্তর দিন।`
                : `পরবর্তী অধ্যায় (অধ্যায় ${chapterIndex + 2}) খুলতে ${questions.length}টি প্রশ্নের মধ্যে অন্তত ${passThreshold}টি সঠিক উত্তর দিন।`}
            </span>
          </h4>
        </div>
        <CircleHelp size={20} aria-hidden="true" />
      </div>

      <div className="quiz-items">
        {questions.map((question, qIndex) => (
          <fieldset
            className="quiz-item"
            key={`${moduleId}-ch${chapterIndex}-q${qIndex}`}
          >
            <legend>
              <span>
                {qIndex + 1}. {question.question_en || question.question_bn}
              </span>
              {question.question_en && (
                <span className="bn-line">{question.question_bn}</span>
              )}
            </legend>
            <div className="quiz-options">
              {question.options_bn.map((optionBn, optionIdx) => {
                const optionEn = question.options_en[optionIdx];
                const selected = answers[qIndex] === optionIdx;
                const isCorrect = checked && optionIdx === question.answer;
                const isWrong =
                  checked && selected && optionIdx !== question.answer;
                return (
                  <button
                    type="button"
                    key={`${moduleId}-ch${chapterIndex}-q${qIndex}-o${optionIdx}`}
                    className={`quiz-option${selected ? " selected" : ""}${
                      isCorrect ? " correct" : ""
                    }${isWrong ? " wrong" : ""}`}
                    onClick={() => choose(qIndex, optionIdx)}
                    aria-pressed={selected}
                  >
                    <span className="quiz-option-letter">
                      {String.fromCharCode(65 + optionIdx)}
                    </span>
                    <span>
                      <span>{optionEn || optionBn}</span>
                      {optionEn && <span className="bn-line">{optionBn}</span>}
                    </span>
                    {isCorrect && <Check size={16} aria-label="Correct" />}
                  </button>
                );
              })}
            </div>
            {checked && (
              <div
                className={`quiz-feedback ${
                  answers[qIndex] === question.answer
                    ? "positive"
                    : "supportive"
                }`}
              >
                <b>
                  {answers[qIndex] === question.answer
                    ? "Correct · সঠিক"
                    : "Review · আবার দেখুন"}
                </b>
                {question.explanation_en && <p>{question.explanation_en}</p>}
                <p className="bn-line">{question.explanation_bn}</p>
              </div>
            )}
          </fieldset>
        ))}
      </div>

      <div className="quiz-footer">
        <div className="quiz-actions">
          <button
            type="button"
            className="button primary small"
            onClick={handleSubmit}
            disabled={
              Object.keys(answers).length !== questions.length ||
              submitExamMutation.isPending
            }
          >
            {submitExamMutation.isPending
              ? "Submitting & Verifying…"
              : "Submit Chapter Assessment · অধ্যায় পরীক্ষা জমা দিন"}{" "}
            <CheckCircle2 size={16} />
          </button>
          <button type="button" className="button ghost small" onClick={reset}>
            <RotateCcw size={15} /> Reset Answers · আবার চেষ্টা
          </button>
        </div>
      </div>

      {serverError && (
        <div className="chapter-exam-result is-failed" role="alert">
          <strong>Error · ত্রুটি</strong>
          <span>{serverError}</span>
        </div>
      )}

      {(checked || serverPassed) && !serverError && (
        <div
          className={`chapter-exam-result ${
            checked
              ? localScore >= passThreshold
                ? "is-passed"
                : "is-failed"
              : "is-passed"
          }`}
          role="status"
          aria-live="polite"
        >
          {checked ? (
            localScore >= passThreshold ? (
              <>
                <strong>
                  Passed ({localScore}/{questions.length}) · Chapter{" "}
                  {chapterIndex + 1} Complete!
                </strong>
                <span>
                  {isLastChapter
                    ? isLastModule
                      ? "Congratulations! You have completed all course modules and chapter assessments—you are now eligible for the Final Certificate Examination."
                      : `Congratulations! Module ${String(moduleIndex + 1).padStart(2, "0")} complete. Module ${String(moduleIndex + 2).padStart(2, "0")} is now unlocked directly below.`
                    : `Chapter ${chapterIndex + 2} is now unlocked directly below.`}
                </span>
                <span className="bn-line">
                  {isLastChapter
                    ? isLastModule
                      ? "অভিনন্দন! এই মডিউল এবং পুরো কোর্স সম্পন্ন হয়েছে—এখন ফাইনাল সার্টিফিকেট পরীক্ষায় যেতে পারেন।"
                      : `অভিনন্দন! মডিউল ${String(moduleIndex + 1).padStart(2, "0")} শেষ হয়েছে এবং মডিউল ${String(moduleIndex + 2).padStart(2, "0")} খুলে গেছে।`
                    : `পরবর্তী অধ্যায় (অধ্যায় ${chapterIndex + 2}) এখন নিচেই আনলক হয়েছে।`}
                </span>
              </>
            ) : (
              <>
                <strong>
                  Score: {localScore}/{questions.length} · Minimum{" "}
                  {passThreshold}/{questions.length} Required to Pass
                </strong>
                <span>
                  Review the feedback above and retake the assessment to unlock
                  the next chapter.
                </span>
                <span className="bn-line">
                  উপরের ব্যাখ্যাগুলো পড়ে সঠিক উত্তর দিয়ে আবার পরীক্ষা দিন—পরের
                  অধ্যায়টি তখনই খুলবে।
                </span>
              </>
            )
          ) : (
            <>
              <strong>
                Completed · Chapter {chapterIndex + 1} Assessment Passed
              </strong>
              <span>
                You have already passed this chapter assessment. You may retake it anytime for practice.
              </span>
              <span className="bn-line">
                আপনি এই অধ্যায়টি আগে পাস করেছেন; চাইলে আবার অনুশীলনের জন্য
                পরীক্ষা দিতে পারেন।
              </span>
            </>
          )}
        </div>
      )}
    </section>
  );
}

function ResourceKit({
  level,
  isAuthenticated,
  redirectPath,
}: {
  level: CourseLevel;
  isAuthenticated: boolean;
  redirectPath: string;
}) {
  return (
    <section className="course-resources content-wrap" id="field-manuals">
      <div className="resource-header resource-header-wide">
        <div>
          <p className="eyebrow">
            {level === "intermediate"
              ? "Intermediate Structured Field Manuals · 12 In-Page Manuals"
              : "Practical Checklists & Field Sheets · 8 In-Page Sheets"}
          </p>
          <h2>
            {level === "intermediate"
              ? "Study the structured field manuals directly in-page."
              : "Review practical checklists and safety worksheets."}
          </h2>
          <p className="resource-lead">
            {isAuthenticated
              ? level === "intermediate"
                ? "All field manuals, threat audits, deepfake containment guides, and facilitation handbooks can be studied directly in-page without downloading files."
                : "All eight practical checklists and planning worksheets can be reviewed directly in-page—no external file downloads required."
              : "As part of our structured learning model, the checklist directory is previewable below. Create a free account or log in to unlock complete in-page manuals and interactive worksheets."}
          </p>
        </div>
        <FileText aria-hidden="true" />
      </div>

      <div className="resource-download-grid">
        {level === "intermediate" &&
          intermediateManualDocuments.map((manual) =>
            isAuthenticated ? (
              <details className="inpage-manual-card" key={manual.id}>
                <summary className="inpage-manual-summary">
                  <span className="download-number">{manual.number}</span>
                  <span className="download-copy">
                    <strong>
                      {manual.titleEn} · ({manual.moduleRef})
                    </strong>
                    <span className="bn-line">{manual.titleBn}</span>
                    <small>{manual.descriptionBn}</small>
                  </span>
                  <span className="inpage-manual-chevron" aria-hidden="true">
                    <ChevronDown size={18} />
                  </span>
                </summary>
                <div className="inpage-manual-body">
                  {manual.sections.map((section) => (
                    <div
                      className="inpage-manual-section"
                      key={section.headingEn}
                    >
                      <h4>
                        {section.headingEn} ·{" "}
                        <span className="bn-line">{section.headingBn}</span>
                      </h4>
                      <ul className="inpage-manual-list">
                        {section.points.map((point) => (
                          <li key={point.en}>
                            <CheckCircle2 size={15} aria-hidden="true" />
                            <span>
                              <span>{point.en}</span>
                              <span className="bn-line">{point.bn}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <p className="inpage-manual-note">
                    {manual.safetyNoteEn}{" "}
                    <span className="bn-line">{manual.safetyNoteBn}</span>
                  </p>
                </div>
              </details>
            ) : (
              <div className="field-manuals-locked-card" key={manual.id}>
                <span className="download-number">{manual.number}</span>
                <span className="download-copy" style={{ flex: 1 }}>
                  <strong>
                    {manual.titleEn} · ({manual.moduleRef})
                  </strong>
                  <span className="bn-line">{manual.titleBn}</span>
                  <small>{manual.descriptionBn}</small>
                </span>
                <Link
                  href={`/login?redirect=${encodeURIComponent(redirectPath)}`}
                  className="syllabus-chapter-lock"
                >
                  <LockKeyhole size={14} /> Locked (Account Required)
                </Link>
              </div>
            )
          )}

        {toolkitDocuments.map((doc) =>
          isAuthenticated ? (
            <details className="inpage-manual-card" key={doc.id}>
              <summary className="inpage-manual-summary">
                <span className="download-number">{doc.number}</span>
                <span className="download-copy">
                  <strong>{doc.titleEn}</strong>
                  <span className="bn-line">{doc.titleBn}</span>
                  <small>{doc.descriptionEn || doc.descriptionBn}</small>
                </span>
                <span className="inpage-manual-chevron" aria-hidden="true">
                  <ChevronDown size={18} />
                </span>
              </summary>
              <div className="inpage-manual-body">
                <p className="inpage-manual-note">
                  {doc.noticeEn}{" "}
                  <span className="bn-line">{doc.noticeBn}</span>
                </p>
                <ul className="inpage-manual-list">
                  {doc.items.map((item) => (
                    <li key={item.en}>
                      <CheckCircle2 size={15} aria-hidden="true" />
                      <span>
                        <span>{item.en}</span>
                        <span className="bn-line">{item.bn}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ) : (
            <div className="field-manuals-locked-card" key={doc.id}>
              <span className="download-number">{doc.number}</span>
              <span className="download-copy" style={{ flex: 1 }}>
                <strong>{doc.titleEn}</strong>
                <span className="bn-line">{doc.titleBn}</span>
                <small>{doc.descriptionEn || doc.descriptionBn}</small>
              </span>
              <Link
                href={`/login?redirect=${encodeURIComponent(redirectPath)}`}
                className="syllabus-chapter-lock"
              >
                <LockKeyhole size={14} /> Locked (Account Required)
              </Link>
            </div>
          )
        )}
      </div>
    </section>
  );
}

function LockedModuleSyllabusBody({
  moduleTitleEn,
  introEn,
  introBn,
  objectives,
  lessons,
  isGuest,
  moduleIndex,
  redirectPath,
}: {
  moduleTitleEn: string;
  introEn: string;
  introBn: string;
  objectives: readonly { en: string; bn: string }[];
  lessons: readonly {
    title_en: string;
    title_bn: string;
    duration?: string;
  }[];
  isGuest: boolean;
  moduleIndex: number;
  redirectPath: string;
}) {
  return (
    <div className="curriculum-body">
      <div className="locked-module-notice">
        <div className="locked-module-notice-copy">
          <LockKeyhole size={20} aria-hidden="true" />
          <div>
            <strong>
              {isGuest
                ? `Course Locked · ${moduleTitleEn} (Syllabus Preview)`
                : `Module ${String(moduleIndex + 1).padStart(
                    2,
                    "0"
                  )} Locked · Complete Previous Module to Unlock`}
            </strong>
            <p>
              {isGuest
                ? "Full lessons and chapter assessments for this module are available to registered learners. You can preview the syllabus and learning outcomes below—creating a free account opens Module 01 immediately."
                : `Pass each chapter assessment in Module ${String(moduleIndex).padStart(
                    2,
                    "0"
                  )} to automatically unlock this module.`}
            </p>
            <p className="bn-line">
              {isGuest
                ? "এই মডিউলের পূর্ণ পাঠ ও অধ্যায়-ভিত্তিক পরীক্ষা শুধু নিবন্ধিত শিক্ষার্থীদের জন্য উন্মুক্ত। নিচে শুধু সূচীপত্র ও শেখার বিষয়বস্তু দেখতে পাচ্ছেন—সাইন আপ করলে মডিউল ০১ সঙ্গে সঙ্গেই খুলে যাবে।"
                : `আগের মডিউলের (মডিউল ${String(moduleIndex).padStart(
                    2,
                    "0"
                  )}) প্রতিটি অধ্যায় পড়ে ও অধ্যায়-পরীক্ষায় পাস করলে এই মডিউলটি স্বয়ংক্রিয়ভাবে আনলক হবে।`}
            </p>
          </div>
        </div>
        {isGuest && (
          <div className="course-auth-gate-actions">
            <Link
              href={`/signup?redirect=${encodeURIComponent(redirectPath)}`}
              className="button primary small"
            >
              <UserPlus size={15} /> Sign Up to Start Module 01
            </Link>
            <Link
              href={`/login?redirect=${encodeURIComponent(redirectPath)}`}
              className="button ghost small"
            >
              <LogIn size={15} /> Log In
            </Link>
          </div>
        )}
      </div>

      <div className="module-intro-grid">
        <div>
          <p className="module-intro-copy">{introEn}</p>
          <p className="module-intro-copy bn-line">{introBn}</p>
        </div>
        <div className="objectives-card">
          <p className="eyebrow">Learning Outcomes · By the end of this module</p>
          <ul>
            {objectives.map((objective, idx) => (
              <li key={`syllabus-obj-${idx}`}>
                <span>{objective.en}</span>
                <span className="bn-line">{objective.bn}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="syllabus-chapter-list">
        <p className="syllabus-chapter-list-head">
          Chapter Structure Outline ({lessons.length} Chapters with Individual Assessments)
        </p>
        {lessons.map((lesson, idx) => (
          <div className="syllabus-chapter-item" key={`syllabus-ch-${idx}`}>
            <span className="syllabus-chapter-num">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <div className="syllabus-chapter-copy">
              <strong>{lesson.title_en}</strong>
              <span className="bn-line">{lesson.title_bn}</span>
            </div>
            <span className="syllabus-chapter-lock">
              <LockKeyhole size={13} aria-hidden="true" />
              {lesson.duration ? `${lesson.duration} · ` : ""}Locked
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CurriculumModule({
  module,
  index,
  totalModules,
  isGuest,
  progress,
  onExamPass,
  redirectPath,
}: {
  module: CourseModule;
  index: number;
  totalModules: number;
  isGuest: boolean;
  progress: TrackProgress;
  onExamPass: (updated: TrackProgress) => void;
  redirectPath: string;
}) {
  const isCompleted =
    !isGuest && progress.completedModules.includes(module.id);
  const isUnlocked = !isGuest && index <= progress.unlockedModuleIndex;
  const isCurrentActive =
    !isGuest && index === progress.unlockedModuleIndex && !isCompleted;

  const [isOpen, setIsOpen] = useState(index === 0 && isUnlocked);

  useEffect(() => {
    if (isCurrentActive) {
      setIsOpen(true);
    } else if (isGuest) {
      setIsOpen(index === 0);
    }
  }, [isCurrentActive, isGuest, index]);

  return (
    <details
      className={`curriculum-module module-tone-${(index % 4) + 1}`}
      id={`module-${module.id}`}
      open={isOpen}
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
    >
      <summary aria-expanded={isOpen}>
        <span className="module-summary-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="module-summary-copy">
          <span className="module-kicker">
            Module {String(index + 1).padStart(2, "0")} ·{" "}
            {module.lessons.length} Chapters with Individual Assessments
          </span>
          <strong>{module.title_en}</strong>
          <span className="bn-line">{module.title_bn}</span>
        </span>
        <span
          className={`module-status ${
            isCompleted
              ? "is-complete"
              : isUnlocked
              ? "is-unlocked"
              : "is-locked"
          }`}
        >
          {isCompleted ? (
            <>
              <Check size={15} /> Completed · সম্পন্ন
            </>
          ) : isUnlocked ? (
            <>
              <Unlock size={14} /> {isOpen ? "Available · খোলা আছে" : "Open Module · মডিউল খুলুন"}
            </>
          ) : (
            <>
              <LockKeyhole size={14} /> Syllabus Preview (Locked) · সূচী দেখুন
            </>
          )}
          <ChevronDown size={19} aria-hidden="true" />
        </span>
      </summary>

      {!isUnlocked ? (
        <LockedModuleSyllabusBody
          moduleTitleEn={module.title_en}
          introEn={module.intro_en}
          introBn={module.intro_bn}
          objectives={module.objectives}
          lessons={module.lessons}
          isGuest={isGuest}
          moduleIndex={index}
          redirectPath={redirectPath}
        />
      ) : (
        <div className="curriculum-body">
          <div className="module-intro-grid">
            <div>
              <p className="module-intro-copy">{module.intro_en}</p>
              <p className="module-intro-copy bn-line">{module.intro_bn}</p>
            </div>
            <div className="objectives-card">
              <p className="eyebrow">Learning Outcomes · By the end of this module</p>
              <ul>
                {module.objectives.map((objective, objectiveIndex) => (
                  <li key={`${module.id}-objective-${objectiveIndex}`}>
                    <span>{objective.en}</span>
                    <span className="bn-line">{objective.bn}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lesson-list">
            {module.lessons.map((lesson, lessonIndex) => {
              const chapterKey = `${module.id}:${lessonIndex}`;
              const chapterDone =
                progress.completedChapters.includes(chapterKey);
              const chapterUnlocked =
                index < progress.unlockedModuleIndex ||
                lessonIndex <= progress.unlockedChapterIndex ||
                chapterDone;

              return (
                <article
                  className={`chapter-card ${
                    chapterUnlocked ? "" : "is-locked"
                  }`}
                  key={`${module.id}-lesson-${lessonIndex}`}
                  id={`chapter-${module.id}-${lessonIndex}`}
                >
                  <div className="chapter-card-head">
                    <div className="lesson-label">
                      Chapter {lessonIndex + 1} · অধ্যায় {lessonIndex + 1}
                    </div>
                    <span
                      className={`chapter-badge ${
                        chapterDone
                          ? "is-done"
                          : chapterUnlocked
                          ? "is-open"
                          : "is-locked"
                      }`}
                    >
                      {chapterDone ? (
                        <>
                          <CheckCircle2 size={13} /> Completed · Assessment Passed
                        </>
                      ) : chapterUnlocked ? (
                        <>
                          <Unlock size={13} /> Available · Lesson & Assessment
                        </>
                      ) : (
                        <>
                          <LockKeyhole size={13} /> Locked Until Previous Chapter Is Completed
                        </>
                      )}
                    </span>
                  </div>

                  {!chapterUnlocked ? (
                    <div className="chapter-locked-box">
                      <LockKeyhole size={22} aria-hidden="true" />
                      <div>
                        <h3>{lesson.title_en}</h3>
                        <h4>{lesson.title_bn}</h4>
                        <p>
                          Pass the 3-question chapter assessment at the end of
                          Chapter {lessonIndex} (minimum 2/3) to automatically unlock Chapter {lessonIndex + 1}.
                        </p>
                        <p className="bn-line">
                          অধ্যায় {lessonIndex}-এর পাঠ পড়ে নিচের ৩ প্রশ্নের অধ্যায়
                          পরীক্ষায় পাস করলে অধ্যায় {lessonIndex + 1} খুলে যাবে।
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3>{lesson.title_en}</h3>
                      <h4>{lesson.title_bn}</h4>
                      <p className="lesson-copy">{lesson.body_en}</p>
                      <p className="lesson-copy bn-line">{lesson.body_bn}</p>
                      <div className="lesson-example">
                        <b>Fictional Scenario · কাল্পনিক উদাহরণ</b>
                        <p>{lesson.example_en}</p>
                        <p className="bn-line">{lesson.example_bn}</p>
                      </div>

                      <ChapterExamBox
                        track="foundation"
                        moduleId={module.id}
                        moduleIndex={index}
                        chapterIndex={lessonIndex}
                        totalChaptersInModule={module.lessons.length}
                        totalModulesInTrack={totalModules}
                        alreadyPassed={chapterDone}
                        onPassComplete={onExamPass}
                      />
                    </>
                  )}
                </article>
              );
            })}
          </div>

          <div className="module-recap-grid">
            <div className="module-recap">
              <p className="eyebrow">Module Summary & Practical Exercise · মডিউল সারাংশ ও অনুশীলন</p>
              <p>{module.summary_en}</p>
              <p className="bn-line">{module.summary_bn}</p>
              <p style={{ marginTop: 10 }}>
                <strong>Practical Exercise:</strong> {module.activity_en}
              </p>
              <p className="bn-line">
                <strong>ব্যক্তিগত অনুশীলন:</strong> {module.activity_bn}
              </p>
            </div>
            <div className="module-terms">
              <p className="eyebrow">Key Terms · মনে রাখার শব্দ</p>
              <dl>
                {module.terms.map((term) => (
                  <div key={`${module.id}-${term.term}`}>
                    <dt>{term.term}</dt>
                    <dd>{term.en}</dd>
                    <dd className="bn-line">{term.bn}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="module-complete-row">
            <div>
              <b>
                {isCompleted
                  ? "Module Completed! · মডিউল সম্পন্ন হয়েছে!"
                  : "Complete Each Chapter Assessment to Advance"}
              </b>
              <span>
                {isCompleted
                  ? index + 1 < totalModules
                    ? `Module ${String(index + 2).padStart(2, "0")} is now unlocked directly below.`
                    : "All 8 Foundation modules completed! You are now eligible for the Final Certificate Examination."
                  : "Achieve a passing score (minimum 2/3) on each chapter assessment in this module to automatically unlock the next chapter and module."}
              </span>
              <span className="bn-line">
                {isCompleted
                  ? index + 1 < totalModules
                    ? `পরবর্তী মডিউল (মডিউল ${String(index + 2).padStart(
                        2,
                        "0"
                      )}) এখন উন্মুক্ত।`
                    : "ফাউন্ডেশন কোর্সের সব ৮টি মডিউল সম্পন্ন! এখন ফাইনাল পরীক্ষায় অংশ নিন।"
                  : "এই মডিউলের প্রতিটি অধ্যায়ের শেষে থাকা পরীক্ষায় কমপক্ষে ২/৩ পেলেই স্বয়ংক্রিয়ভাবে পরবর্তী অধ্যায় ও মডিউল খুলবে।"}
              </span>
            </div>
            {isCompleted && index + 1 < totalModules ? (
              <a
                href={`#module-${courseModules[index + 1]?.id}`}
                className="button primary"
              >
                Proceed to Module {String(index + 2).padStart(2, "0")}{" "}
                <ArrowRight size={16} />
              </a>
            ) : isCompleted ? (
              <Link href="/certificate" className="button primary">
                Take Final Certificate Exam <GraduationCap size={16} />
              </Link>
            ) : (
              <span className="chapter-badge is-open">
                In Progress · চলমান
              </span>
            )}
          </div>
        </div>
      )}
    </details>
  );
}

function IntermediateCurriculumModule({
  module,
  index,
  totalModules,
  isGuest,
  progress,
  onExamPass,
  redirectPath,
}: {
  module: IntermediateModule;
  index: number;
  totalModules: number;
  isGuest: boolean;
  progress: TrackProgress;
  onExamPass: (updated: TrackProgress) => void;
  redirectPath: string;
}) {
  const isCompleted =
    !isGuest && progress.completedModules.includes(module.id);
  const isUnlocked = !isGuest && index <= progress.unlockedModuleIndex;
  const isCurrentActive =
    !isGuest && index === progress.unlockedModuleIndex && !isCompleted;

  const [isOpen, setIsOpen] = useState(index === 0 && isUnlocked);

  useEffect(() => {
    if (isCurrentActive) {
      setIsOpen(true);
    } else if (isGuest) {
      setIsOpen(index === 0);
    }
  }, [isCurrentActive, isGuest, index]);

  return (
    <details
      className={`curriculum-module module-tone-${
        module.pillar === "ai-literacy" ? 3 : (index % 2) + 1
      }`}
      id={`module-${module.id}`}
      open={isOpen}
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
    >
      <summary aria-expanded={isOpen}>
        <span className="module-summary-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="module-summary-copy">
          <span className="module-kicker">
            {module.weightLabel_en} · {module.lessons.length} Manual Chapters with Assessments · {module.estimatedTime}
          </span>
          <strong>{module.title_en}</strong>
          <span className="bn-line">{module.title_bn}</span>
        </span>
        <span
          className={`module-status ${
            isCompleted
              ? "is-complete"
              : isUnlocked
              ? "is-unlocked"
              : "is-locked"
          }`}
        >
          {isCompleted ? (
            <>
              <Check size={15} /> Completed · সম্পন্ন
            </>
          ) : isUnlocked ? (
            <>
              <Unlock size={14} /> {isOpen ? "Available · খোলা আছে" : "Open Module · মডিউল খুলুন"}
            </>
          ) : (
            <>
              <LockKeyhole size={14} /> Syllabus Preview (Locked) · সূচী দেখুন
            </>
          )}
          <ChevronDown size={19} aria-hidden="true" />
        </span>
      </summary>

      {!isUnlocked ? (
        <LockedModuleSyllabusBody
          moduleTitleEn={module.title_en}
          introEn={module.intro_en}
          introBn={module.intro_bn}
          objectives={module.objectives}
          lessons={module.lessons}
          isGuest={isGuest}
          moduleIndex={index}
          redirectPath={redirectPath}
        />
      ) : (
        <div className="curriculum-body">
          <div className="module-intro-grid">
            <div>
              <p className="module-intro-copy">{module.intro_en}</p>
              <p className="module-intro-copy bn-line">{module.intro_bn}</p>
            </div>
            <div className="objectives-card">
              <p className="eyebrow">
                Learning Outcomes · By the end of this module
              </p>
              <ul>
                {module.objectives.map((objective, objectiveIndex) => (
                  <li key={`${module.id}-objective-${objectiveIndex}`}>
                    <span>{objective.en}</span>
                    <span className="bn-line">{objective.bn}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lesson-list">
            {module.lessons.map((lesson, lessonIndex) => {
              const chapterKey = `${module.id}:${lessonIndex}`;
              const chapterDone =
                progress.completedChapters.includes(chapterKey);
              const chapterUnlocked =
                index < progress.unlockedModuleIndex ||
                lessonIndex <= progress.unlockedChapterIndex ||
                chapterDone;

              return (
                <article
                  className={`chapter-card ${
                    chapterUnlocked ? "" : "is-locked"
                  }`}
                  key={`${module.id}-lesson-${lessonIndex}`}
                  id={`chapter-${module.id}-${lessonIndex}`}
                >
                  <div className="chapter-card-head">
                    <div className="lesson-meta-row" style={{ marginBottom: 0 }}>
                      <div className="lesson-label">
                        {module.pillar === "ai-literacy"
                          ? "AI Literacy (30%)"
                          : "Women Safety (70%)"}{" "}
                        · Chapter {lessonIndex + 1} · অধ্যায় {lessonIndex + 1}
                      </div>
                      <span className="lesson-duration-tag">
                        {lesson.duration}
                      </span>
                    </div>
                    <span
                      className={`chapter-badge ${
                        chapterDone
                          ? "is-done"
                          : chapterUnlocked
                          ? "is-open"
                          : "is-locked"
                      }`}
                    >
                      {chapterDone ? (
                        <>
                          <CheckCircle2 size={13} /> Completed · Assessment Passed
                        </>
                      ) : chapterUnlocked ? (
                        <>
                          <Unlock size={13} /> Available · Manual & Assessment
                        </>
                      ) : (
                        <>
                          <LockKeyhole size={13} /> Locked Until Previous Chapter Is Completed
                        </>
                      )}
                    </span>
                  </div>

                  {!chapterUnlocked ? (
                    <div className="chapter-locked-box">
                      <LockKeyhole size={22} aria-hidden="true" />
                      <div>
                        <h3>{lesson.title_en}</h3>
                        <h4>{lesson.title_bn}</h4>
                        <p>
                          Pass the chapter assessment at the end of Chapter {lessonIndex} (minimum 2/3) to automatically unlock Chapter {lessonIndex + 1}.
                        </p>
                        <p className="bn-line">
                          অধ্যায় {lessonIndex}-এর ম্যানুয়াল পাঠ পড়ে অধ্যায়
                          পরীক্ষায় পাস করলে অধ্যায় {lessonIndex + 1} খুলে যাবে।
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3>{lesson.title_en}</h3>
                      <h4>{lesson.title_bn}</h4>
                      <p className="lesson-copy">{lesson.body_en}</p>
                      <p className="lesson-copy bn-line">{lesson.body_bn}</p>

                      <section
                        className="manual-protocol-box"
                        aria-label={lesson.manual_framework.framework_title_en}
                      >
                        <div className="manual-protocol-head">
                          <div>
                            <p className="eyebrow">
                              Structured Field Manual · ব্যবহারিক ম্যানুয়াল
                            </p>
                            <h5>
                              <span className="lang-en">
                                {lesson.manual_framework.framework_title_en}
                              </span>
                              <span className="bn-line">
                                {lesson.manual_framework.framework_title_bn}
                              </span>
                            </h5>
                          </div>
                          <ClipboardList size={20} aria-hidden="true" />
                        </div>

                        <ol className="manual-steps-list">
                          {lesson.manual_framework.steps_bn.map(
                            (stepBn, stepIndex) => {
                              const stepEn =
                                lesson.manual_framework.steps_en[stepIndex];
                              return (
                                <li
                                  key={`${module.id}-l${lessonIndex}-s${stepIndex}`}
                                >
                                  <span className="manual-step-num">
                                    {stepIndex + 1}
                                  </span>
                                  <div>
                                    {stepEn && (
                                      <span className="lang-en">{stepEn}</span>
                                    )}
                                    <span className="bn-line">{stepBn}</span>
                                  </div>
                                </li>
                              );
                            }
                          )}
                        </ol>

                        <div className="manual-matrix">
                          <div className="manual-matrix-col is-do">
                            <strong>Recommended Practice · করণীয় (Do)</strong>
                            <ul>
                              {lesson.manual_framework.dos_bn.map(
                                (itemBn, i) => (
                                  <li
                                    key={`${module.id}-l${lessonIndex}-do-${i}`}
                                  >
                                    <span className="lang-en">
                                      {lesson.manual_framework.dos_en[i]}
                                    </span>
                                    <span className="bn-line">{itemBn}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          <div className="manual-matrix-col is-avoid">
                            <strong>Practices to Avoid · বর্জনীয় (Avoid)</strong>
                            <ul>
                              {lesson.manual_framework.donts_bn.map(
                                (itemBn, i) => (
                                  <li
                                    key={`${module.id}-l${lessonIndex}-dont-${i}`}
                                  >
                                    <span className="lang-en">
                                      {lesson.manual_framework.donts_en[i]}
                                    </span>
                                    <span className="bn-line">{itemBn}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </section>

                      <div className="lesson-example">
                        <b>
                          Applied Bangladesh Scenario · বাংলাদেশের প্র্যাকটিক্যাল কেস
                        </b>
                        <p>{lesson.example_en}</p>
                        <p className="bn-line">{lesson.example_bn}</p>
                      </div>

                      <ChapterExamBox
                        track="intermediate"
                        moduleId={module.id}
                        moduleIndex={index}
                        chapterIndex={lessonIndex}
                        totalChaptersInModule={module.lessons.length}
                        totalModulesInTrack={totalModules}
                        alreadyPassed={chapterDone}
                        onPassComplete={onExamPass}
                      />
                    </>
                  )}
                </article>
              );
            })}
          </div>

          <div className="module-recap-grid">
            <div className="module-recap">
              <p className="eyebrow">Module Summary & Field Practice · মডিউল সারাংশ ও অনুশীলন</p>
              <p>{module.summary_en}</p>
              <p className="bn-line">{module.summary_bn}</p>
              <p className="bn-line" style={{ marginTop: 10 }}>
                <strong>Hands-on Drill:</strong> {module.activity_bn}
              </p>
            </div>
            <div className="module-terms">
              <p className="eyebrow">Key Terminology · মূল পরিভাষা</p>
              <dl>
                {module.terms.map((term) => (
                  <div key={`${module.id}-${term.term}`}>
                    <dt>{term.term}</dt>
                    <dd>{term.en}</dd>
                    <dd className="bn-line">{term.bn}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="module-complete-row">
            <div>
              <b>
                {isCompleted
                  ? "Intermediate Module Completed! · ইন্টারমিডিয়েট মডিউল সম্পন্ন!"
                  : "Complete Each Chapter Assessment to Advance"}
              </b>
              <span>
                {isCompleted
                  ? index + 1 < totalModules
                    ? `Module ${String(index + 2).padStart(2, "0")} is now unlocked directly below.`
                    : "All 10 Intermediate modules completed! You are now eligible for the Intermediate Examination."
                  : "Pass each chapter assessment in this module to automatically unlock subsequent chapters and modules."}
              </span>
              <span className="bn-line">
                {isCompleted
                  ? index + 1 < totalModules
                    ? `পরবর্তী মডিউল (মডিউল ${String(index + 2).padStart(
                        2,
                        "0"
                      )}) এখন উন্মুক্ত।`
                    : "১০টি ইন্টারমিডিয়েট মডিউল সম্পন্ন! এখন ফাইনাল পরীক্ষায় অংশ নিন।"
                  : "এই মডিউলের ৩টি অধ্যায়ের প্রতিটি পড়ে অধ্যায়-পরীক্ষায় পাস করলেই পরবর্তী মডিউল খুলে যাবে।"}
              </span>
            </div>
            {isCompleted && index + 1 < totalModules ? (
              <a
                href={`#module-${intermediateCourseModules[index + 1]?.id}`}
                className="button primary"
              >
                Proceed to Module {String(index + 2).padStart(2, "0")}{" "}
                <ArrowRight size={16} />
              </a>
            ) : isCompleted ? (
              <Link href="/certificate?track=intermediate" className="button primary">
                Take Intermediate Exam <GraduationCap size={16} />
              </Link>
            ) : (
              <span className="chapter-badge is-open">
                In Progress · চলমান
              </span>
            )}
          </div>
        </div>
      )}
    </details>
  );
}

export default function Course() {
  const search = useSearch();
  const [, setLocation] = useLocation();
  const { user, loading: authLoading } = useAuth();

  const rawLevel =
    new URLSearchParams(search).get("level") ||
    new URLSearchParams(search).get("track");
  const initialLevel: CourseLevel =
    rawLevel === "intermediate" ? "intermediate" : "foundation";

  const [courseLevel, setCourseLevel] = useState<CourseLevel>(initialLevel);
  const [pillarFilter, setPillarFilter] = useState<IntermediateFilter>("all");

  useEffect(() => {
    setCourseLevel(initialLevel);
  }, [initialLevel]);

  useEffect(() => {
    document.title = "Courses | Atlas AI Institute";
  }, []);

  const [languageFocus, setLanguageFocus] = useState<"both" | "bn" | "en">(
    () => {
      if (typeof window === "undefined") return "both";
      const saved =
        window.localStorage.getItem("wsai-course-language") ||
        window.localStorage.getItem("awsn-course-language");
      return saved === "bn" || saved === "en" ? saved : "both";
    }
  );

  useEffect(() => {
    window.localStorage.setItem("wsai-course-language", languageFocus);
  }, [languageFocus]);

  const progressQuery = trpc.courseProgress.get.useQuery(undefined, {
    enabled: Boolean(user),
    retry: false,
  });

  const foundationProgress: TrackProgress =
    progressQuery.data?.foundation ?? DEFAULT_TRACK_PROGRESS;
  const intermediateProgress: TrackProgress =
    progressQuery.data?.intermediate ?? DEFAULT_TRACK_PROGRESS;

  useEffect(() => {
    if (!user || !progressQuery.data) return;
    window.localStorage.setItem(
      "wsai-course-progress",
      JSON.stringify(progressQuery.data.foundation.completedModules)
    );
    window.localStorage.setItem(
      "wsai-intermediate-progress",
      JSON.stringify(progressQuery.data.intermediate.completedModules)
    );
  }, [user, progressQuery.data]);

  function handleExamPass(track: CourseLevel, updatedTrack: TrackProgress) {
    if (track === "foundation") {
      window.localStorage.setItem(
        "wsai-course-progress",
        JSON.stringify(updatedTrack.completedModules)
      );
    } else {
      window.localStorage.setItem(
        "wsai-intermediate-progress",
        JSON.stringify(updatedTrack.completedModules)
      );
    }
  }

  function switchLevel(next: CourseLevel) {
    setCourseLevel(next);
    setLocation(
      next === "intermediate" ? "/courses?level=intermediate" : "/courses",
      { replace: true }
    );
  }

  const isIntermediate = courseLevel === "intermediate";
  const currentCoursePath = isIntermediate
    ? "/courses?level=intermediate"
    : "/courses";
  const isGuest = !authLoading && !user;

  const foundationLessonCount = courseModules.reduce(
    (total, module) => total + module.lessons.length,
    0
  );
  const intermediateLessonCount = intermediateCourseModules.reduce(
    (total, module) => total + module.lessons.length,
    0
  );

  const visibleIntermediateModules = useMemo(() => {
    if (pillarFilter === "all") return intermediateCourseModules;
    return intermediateCourseModules.filter((m) => m.pillar === pillarFilter);
  }, [pillarFilter]);

  const activeProgress = isIntermediate
    ? intermediateProgress
    : foundationProgress;
  const activeCompletedCount = user ? activeProgress.completedModules.length : 0;
  const activeTotalCount = isIntermediate
    ? intermediateCourseModules.length
    : courseModules.length;
  const completionPercent = Math.round(
    (activeCompletedCount / activeTotalCount) * 100
  );

  return (
    <div
      className={`course-page course-focus-${languageFocus}`}
      data-course-language={languageFocus}
    >
      <section className="page-intro course-intro">
        <p className="eyebrow">
          {isIntermediate
            ? "COURSES · LEVEL 2 INTERMEDIATE"
            : "COURSES · LEVEL 1 FOUNDATION"}
        </p>
        <h1>
          {isIntermediate
            ? "Women's Safety and AI Literacy in the AI Era"
            : "Women's Safety in the AI Era"}
        </h1>
        <p className="course-subtitle">
          {isIntermediate
            ? "A Complete Intermediate Course & Field Manuals (70% Safety + 30% AI Literacy)"
            : "A Complete Foundation Course"}
        </p>
        <p>
          {isIntermediate
            ? "An advanced curriculum for learners, club facilitators, and educators: 70% in-depth digital safety protocols and 30% practical AI literacy. Pass each chapter assessment to sequentially unlock next chapters and modules."
            : "A structured, self-paced curriculum equipping women, girls, educators, and community champions with essential knowledge to recognize, prevent, and respond to AI-facilitated abuse, deepfakes, online harassment, privacy threats, and digital harms."}
        </p>

        <div
          className="course-level-switcher"
          role="tablist"
          aria-label="Course level selector"
        >
          <button
            type="button"
            role="tab"
            aria-selected={!isIntermediate}
            className={`course-level-btn ${!isIntermediate ? "is-active" : ""}`}
            onClick={() => switchLevel("foundation")}
          >
            <BookOpen size={20} aria-hidden="true" />
            <span>
              <strong>Level 1 · Foundation Course</strong>
              <small>8 Modules · 40 Chapters · Chapter Assessments</small>
            </span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={isIntermediate}
            className={`course-level-btn ${isIntermediate ? "is-active" : ""}`}
            onClick={() => switchLevel("intermediate")}
          >
            <Layers size={20} aria-hidden="true" />
            <span>
              <strong>Level 2 · Intermediate Course</strong>
              <small>10 Modules · 70% Safety + 30% AI Literacy · Field Manuals</small>
            </span>
          </button>
        </div>

        <div
          className="course-language-control"
          aria-label="Course chapter reading view"
        >
          <span>Reading Mode · পড়ার ধরন</span>
          <div
            className="course-language-options"
            role="group"
            aria-label="Choose course language display"
          >
            <button
              type="button"
              className={languageFocus === "both" ? "active" : ""}
              aria-pressed={languageFocus === "both"}
              onClick={() => setLanguageFocus("both")}
            >
              Bilingual · দ্বিভাষিক
            </button>
            <button
              type="button"
              className={languageFocus === "bn" ? "active" : ""}
              aria-pressed={languageFocus === "bn"}
              onClick={() => setLanguageFocus("bn")}
            >
              Bangla Only · শুধু বাংলা
            </button>
            <button
              type="button"
              className={languageFocus === "en" ? "active" : ""}
              aria-pressed={languageFocus === "en"}
              onClick={() => setLanguageFocus("en")}
            >
              English Companion
            </button>
          </div>
          <small>
            Choose how you prefer to study each chapter. This setting changes the lesson reading experience only. It does not affect your account, examination results or course progress.
          </small>
        </div>

        <div className="course-actions">
          {user ? (
            <a href="#modules" className="button primary">
              Start Learning <ArrowRight size={17} />
            </a>
          ) : (
            <Link
              href={`/signup?redirect=${encodeURIComponent(currentCoursePath)}`}
              className="button primary"
            >
              Sign Up to Start Module 01 <UserPlus size={17} />
            </Link>
          )}
          <a href="#modules" className="button secondary">
            View Course Syllabus <BookOpen size={17} />
          </a>
          <Link
            href={
              isIntermediate
                ? "/certificate?track=intermediate"
                : "/certificate"
            }
            className="button ghost"
          >
            View Certification <GraduationCap size={17} />
          </Link>
        </div>
      </section>

      <section className="course-overview content-wrap">
        <div className="course-overview-copy">
          <p className="eyebrow">
            {isIntermediate
              ? "70% Safety + 30% AI Literacy · Structured Intermediate Manual"
              : "Structured Learning Journey · ধাপে ধাপে শেখা ও পরীক্ষা"}
          </p>
          <h2>
            {isIntermediate
              ? "Integrated Technical Understanding and Field-Level Safety Protocols"
              : "Learn Step by Step. Pass Each Chapter. Unlock the Next."}
          </h2>
          {isIntermediate ? (
            <>
              <p>
                Built for learners, college students, club leaders, and
                educators ready to go deeper: 7 dedicated modules (70%) cover
                threat modeling, deepfake containment, anti-doxxing, financial
                sextortion defense, privacy engineering, and trauma-informed
                club facilitation, paired with 3 core AI Literacy modules (30%)
                on LLM mechanics, algorithmic bias, and SIFT verification.
              </p>
              <p className="bn-line">
                সাইন আপ করলে মডিউল ০১-এর প্রথম অধ্যায়টি ওপেন হবে। প্রতিটি
                অধ্যায় শেষে ৩ প্রশ্নের পরীক্ষায় অন্তত ২টি সঠিক উত্তর দিলে পরের
                অধ্যায় বা পরবর্তী মডিউল আনলক হবে। মোট ১০টি মডিউল ও{" "}
                {intermediateLessonCount.toLocaleString("bn-BD")}টি স্ট্রাকচার্ড
                ম্যানুয়াল অধ্যায় রয়েছে।
              </p>
              <div className="curriculum-balance-card">
                <div className="curriculum-balance-head">
                  <strong>Curriculum Design Split · পাঠ্যক্রমের কাঠামো</strong>
                  <span>
                    70% Women Safety (7 Modules) · 30% AI Literacy (3 Modules)
                  </span>
                </div>
                <div className="curriculum-balance-bar" aria-hidden="true">
                  <div className="balance-safety" />
                  <div className="balance-literacy" />
                </div>
                <div className="curriculum-balance-legend">
                  <span>
                    <i className="legend-dot safety" /> 70% Women Safety in AI
                    Era (Modules 01–07)
                  </span>
                  <span>
                    <i className="legend-dot literacy" /> 30% AI Literacy
                    Learning (Modules 08–10)
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <p>
                Our curriculum uses a gated sequential learning model designed
                to build genuine digital resilience. Anyone can preview the complete
                syllabus outline. To begin studying, create a free account. Module
                01, Chapter 01 will unlock immediately. Study each lesson, review
                real-world scenarios, and pass the short 3-question assessment at
                the end of each chapter (minimum 2/3 required) to automatically
                unlock the next chapter and subsequent modules.
              </p>
              <p className="bn-line">
                কোর্সের সূচী সবার জন্য উন্মুক্ত, তবে সাইন আপ করার আগে সব
                কোর্স লক করা থাকে। সাইন আপ করার পর কেবল মডিউল ০১-এর অধ্যায় ১
                খুলবে—প্রতিটি অধ্যায় শেষ করে অধ্যায়-পরীক্ষায় পাস করলেই পরবর্তী
                অধ্যায় ও মডিউলে যাওয়া যাবে। পুরো কোর্সে{" "}
                {foundationLessonCount.toLocaleString("bn-BD")}টি অধ্যায় এবং
                প্রতিটি অধ্যায়ের জন্য আলাদা পরীক্ষা রয়েছে।
              </p>
            </>
          )}
        </div>

        <div className="course-facts">
          <div>
            <Clock3 />
            <span>
              <b>{isIntermediate ? "8–10 Hours" : "4–6 Hours"}</b>
              <small>
                <span>Self-paced learning estimate</span>
              </small>
            </span>
          </div>
          <div>
            <BookOpen />
            <span>
              <b>{isIntermediate ? "10 Modules" : "8 Modules"}</b>
              <small>
                <span>
                  {isIntermediate
                    ? `${intermediateLessonCount} Chapters in total`
                    : `${foundationLessonCount} Chapters in total`}
                </span>
              </small>
            </span>
          </div>
          <div>
            <Cpu />
            <span>
              <b>
                {isIntermediate ? "70% + 30% Split" : "Chapter-by-Chapter"}
              </b>
              <small>
                <span>
                  {isIntermediate
                    ? "Safety + AI Literacy Core"
                    : "3 questions, pass mark 2/3"}
                </span>
              </small>
            </span>
          </div>
          <div>
            <ShieldCheck />
            <span>
              <b>{user ? "Module 01 Unlocked" : "Account Required"}</b>
              <small>
                <span>
                  {user ? `Signed in as ${user.name}` : "Syllabus preview available"}
                </span>
              </small>
            </span>
          </div>
        </div>
      </section>

      <section id="modules" className="content-wrap course-modules course-pathway">
        {isGuest && (
          <div className="course-auth-gate" role="region" aria-label="Course lock notice">
            <div className="course-auth-gate-copy">
              <p className="eyebrow">
                <LockKeyhole size={13} /> Free Account Required · কোর্স আনলক করুন
              </p>
              <h3>
                Explore the Course Syllabus — Create an Account to Start Learning
              </h3>
              <p>
                Below is the complete module and chapter syllabus outline of what
                you will learn. Course lessons and chapter assessments are unlocked sequentially
                for registered learners. Create a free account to unlock{" "}
                <strong>Module 01, Chapter 01 immediately</strong>, and
                passing each chapter&apos;s assessment unlocks the next step.
              </p>
              <p className="bn-line">
                নিচে পুরো কোর্সের মডিউল ও অধ্যায়ের সূচীপত্র দেওয়া আছে। সাইন
                আপ করলেই কেবল প্রথম মডিউল ওপেন হবে এবং প্রতিটি অধ্যায়ের
                পরীক্ষায় পাস করে পরের অধ্যায় ও মডিউলে যাওয়া যাবে।
              </p>
            </div>
            <div className="course-auth-gate-actions">
              <Link
                href={`/signup?redirect=${encodeURIComponent(currentCoursePath)}`}
                className="button primary"
              >
                <UserPlus size={16} /> Sign Up to Start Module 01
              </Link>
              <Link
                href={`/login?redirect=${encodeURIComponent(currentCoursePath)}`}
                className="button secondary"
              >
                <LogIn size={16} /> Log In to Continue
              </Link>
            </div>
          </div>
        )}

        {user && (
          <div className="course-learner-banner">
            <div>
              <strong>
                Welcome, {user.name || user.email} · Your Sequential Course Progress
              </strong>
              <span>
                Module {String(activeProgress.unlockedModuleIndex + 1).padStart(2, "0")}, Chapter{" "}
                {activeProgress.unlockedChapterIndex + 1} is currently available.
                Complete the lesson and achieve at least 2/3 on the chapter assessment to unlock the next chapter.
              </span>
              <span className="bn-line">
                মডিউল {String(activeProgress.unlockedModuleIndex + 1).padStart(2, "0")}{" "}
                -এর অধ্যায়{" "}
                {activeProgress.unlockedChapterIndex + 1} পর্যন্ত আনলক আছে।
                প্রতিটি অধ্যায়ের পাঠ পড়ে নিচের ৩-প্রশ্নের অধ্যায় পরীক্ষায় কমপক্ষে
                ২টি সঠিক উত্তর দিলে পরবর্তী অধ্যায় বা মডিউল খুলবে।
              </span>
            </div>
            <div className="course-learner-meta">
              <div className="course-learner-stat">
                <span>Available Module</span>
                <b>
                  {String(activeProgress.unlockedModuleIndex + 1).padStart(
                    2,
                    "0"
                  )}{" "}
                  / {String(activeTotalCount).padStart(2, "0")}
                </b>
              </div>
              <div className="course-learner-stat">
                <span>Completed Chapters</span>
                <b>
                  {activeProgress.completedChapters.length} /{" "}
                  {isIntermediate
                    ? intermediateLessonCount
                    : foundationLessonCount}
                </b>
              </div>
            </div>
          </div>
        )}

        <div className="resource-header resource-header-wide course-pathway-header">
          <div>
            <p className="eyebrow">
              {isGuest
                ? "Course Syllabus Structure · মডিউল ও অধ্যায়ের সূচীপত্র"
                : isIntermediate
                ? "Intermediate Learning Pathway · Intermediate Manual"
                : "Course Learning Pathway · কোর্সের শেখার পথ"}
            </p>
            <h2>
              {isIntermediate
                ? "Ten Structured Modules: Safety and AI Literacy."
                : "Explore the Complete Course Syllabus"}
            </h2>
            <p className="resource-lead">
              {isGuest
                ? "You can preview the complete syllabus outline below. Creating a free account unlocks Module 01, Chapter 01 immediately."
                : isIntermediate
                ? "Study each chapter sequentially, pass the chapter assessments, and advance through all ten intermediate modules."
                : "Eight modules, sequential chapters, and assessments. Pass each chapter assessment with a minimum score of 2/3 to unlock the next step."}
            </p>
          </div>
          <div
            className="course-progress"
            aria-label={`${completionPercent}% course completion`}
          >
            <span>
              <ListChecks size={18} /> {activeCompletedCount}/
              {activeTotalCount} Modules Completed
            </span>
            <span className="bn-line">{completionPercent}% সম্পন্ন</span>
            <div className="progress-track">
              <span style={{ width: `${completionPercent}%` }} />
            </div>
          </div>
        </div>

        {isIntermediate && (
          <div
            className="pillar-filter-row"
            role="group"
            aria-label="Filter intermediate modules by track"
          >
            <button
              type="button"
              className={`pillar-filter-btn ${
                pillarFilter === "all" ? "is-active" : ""
              }`}
              onClick={() => setPillarFilter("all")}
            >
              All Modules (10) · সব মডিউল
            </button>
            <button
              type="button"
              className={`pillar-filter-btn ${
                pillarFilter === "safety" ? "is-active" : ""
              }`}
              onClick={() => setPillarFilter("safety")}
            >
              70% Women Safety Core (7)
            </button>
            <button
              type="button"
              className={`pillar-filter-btn ${
                pillarFilter === "ai-literacy" ? "is-active" : ""
              }`}
              onClick={() => setPillarFilter("ai-literacy")}
            >
              30% AI Literacy Core (3)
            </button>
          </div>
        )}

        <div className="module-contents">
          {isIntermediate
            ? visibleIntermediateModules.map((module) => {
                const realIndex = intermediateCourseModules.findIndex(
                  (m) => m.id === module.id
                );
                return (
                  <IntermediateCurriculumModule
                    key={module.id}
                    module={module}
                    index={realIndex}
                    totalModules={intermediateCourseModules.length}
                    isGuest={!user}
                    progress={intermediateProgress}
                    onExamPass={(updated) =>
                      handleExamPass("intermediate", updated)
                    }
                    redirectPath={currentCoursePath}
                  />
                );
              })
            : courseModules.map((module, index) => (
                <CurriculumModule
                  key={module.id}
                  module={module}
                  index={index}
                  totalModules={courseModules.length}
                  isGuest={!user}
                  progress={foundationProgress}
                  onExamPass={(updated) =>
                    handleExamPass("foundation", updated)
                  }
                  redirectPath={currentCoursePath}
                />
              ))}
        </div>
      </section>

      <ResourceKit
        level={courseLevel}
        isAuthenticated={Boolean(user)}
        redirectPath={currentCoursePath}
      />

      <section className="course-assessment">
        <div>
          <p className="eyebrow">Assessment & Certification · মূল্যায়ন ও সার্টিফিকেট</p>
          <h2>Assess Your Learning and Earn Your Certificate</h2>
          <p>
            Every chapter concludes with a focused 3-question assessment (pass
            mark 2/3) so learners build mastery step-by-step before unlocking the
            next chapter or module. After completing all 8 modules and 40 chapter
            assessments, take the comprehensive Final Examination (30
            multiple-choice questions + 5 scenario-based written assessments, 70%
            passing threshold) to earn your verified certificate issued by Atlas
            AI Institute.
          </p>
          <p className="bn-line">
            প্রতিটি অধ্যায়ের শেষে ৩টি প্রশ্নের অধ্যায় পরীক্ষা রয়েছে। পরীক্ষা পাস
            করেই পরের অধ্যায়ে ও মডিউলে যাওয়া যাবে। সব মডিউল শেষ হলে ৭০%
            নম্বরের চূড়ান্ত পরীক্ষা দিয়ে সার্টিফিকেট অর্জন করুন।
          </p>
        </div>
        <div className="assessment-list">
          <div>
            <CheckCircle2 />
            <span>
              <b>Instant Access on Registration</b>
              Safe, free account creation unlocks Module 01, Chapter 01 immediately.
            </span>
          </div>
          <div>
            <CheckCircle2 />
            <span>
              <b>Sequential Chapter Assessments</b>
              3-question mastery checks at each step ensure deep comprehension before moving forward.
            </span>
          </div>
          <div>
            <CheckCircle2 />
            <span>
              <b>Verified Certificate (70% Pass Mark)</b>
              Comprehensive final exam with unique verification credential upon successful completion.
              <Link
                href={
                  isIntermediate
                    ? "/certificate?track=intermediate"
                    : "/certificate"
                }
                className="text-link"
                style={{ marginTop: 4 }}
              >
                {isIntermediate
                  ? "View Intermediate Exam"
                  : "View Certificate & Final Exam"}{" "}
                <ArrowRight size={14} />
              </Link>
            </span>
          </div>
        </div>
      </section>

      <section className="course-safeguard content-wrap">
        <div>
          <p className="eyebrow">Trust & Safeguarding · নিরাপদ শেখার অঙ্গীকার</p>
          <h2>Your Privacy Comes First</h2>
        </div>
        <div>
          <p>
            We use fictional, scenario-based examples exclusively throughout our
            course materials. The platform never asks learners to upload intimate
            imagery, investigate cybercrimes independently, identify alleged
            perpetrators, or disclose personal experiences of abuse. If you or
            someone you know is in immediate danger, please consult the official
            emergency helplines and support services available on this platform.
          </p>
          <p className="bn-line">
            এখানে শুধু কাল্পনিক উদাহরণ ব্যবহার করা হয়। শিক্ষার্থীদের অন্তরঙ্গ
            ছবি upload, অপরাধ নিজে তদন্ত বা ব্যক্তিগত নির্যাতনের অভিজ্ঞতা প্রকাশ
            করতে বলা হবে না। তাৎক্ষণিক বিপদে প্ল্যাটফর্মের emergency helpline
            ব্যবহার করুন।
          </p>
          {user ? (
            <a className="text-link" href="#modules">
              Continue Learning · শেখা চালিয়ে যান <ArrowRight size={15} />
            </a>
          ) : (
            <Link
              className="text-link"
              href={`/signup?redirect=${encodeURIComponent(currentCoursePath)}`}
            >
              Sign Up to Start Module 01 · সাইন আপ করে শুরু করুন <ArrowRight size={15} />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
