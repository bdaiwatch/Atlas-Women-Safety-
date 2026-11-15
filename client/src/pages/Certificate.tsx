import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  Download,
  LockKeyhole,
  LogIn,
  RotateCcw,
  ShieldCheck,
  UserPlus,
  XCircle,
} from "lucide-react";
import { Link, useLocation, useRoute, useSearch } from "wouter";
import { useAuth } from "../_core/hooks/useAuth";
import { courseModules } from "../data/courseContent";
import { intermediateCourseModules } from "../data/intermediateCourseContent";
import {
  FINAL_EXAM_PASS_PERCENT,
  finalExamQuestions,
  finalWrittenQuestions,
  type FinalExamQuestion,
  type FinalWrittenQuestion,
} from "../data/finalExam";
import {
  intermediateExamQuestions,
  intermediateWrittenQuestions,
} from "../data/intermediateFinalExam";
import { trpc } from "../lib/trpc";

type CourseTrack = "foundation" | "intermediate";

const TRACK_CONFIG = {
  foundation: {
    courseTitle: "Women Safety in AI Era — Basic Foundation Course",
    subtitle: "Basic Foundation Course",
    certKey: "wsai-certificate-record",
    legacyCertKey: "awsn-certificate-record",
    progressKey: "wsai-course-progress",
    legacyProgressKey: "awsn-course-progress",
    examKey: "wsai-final-exam-result",
    legacyExamKey: "awsn-final-exam-result",
    examStartKey: "wsai-final-exam-started-at",
    idPrefix: "AAI-WSAI",
    moduleCount: courseModules.length,
    mcqs: finalExamQuestions,
    written: finalWrittenQuestions,
    courseHref: "/courses",
  },
  intermediate: {
    courseTitle:
      "Women Safety in AI Era — Intermediate Course (70% Safety & 30% AI Literacy)",
    subtitle: "Intermediate Course · 70% Women Safety & 30% AI Literacy",
    certKey: "wsai-intermediate-certificate-record",
    legacyCertKey: "",
    progressKey: "wsai-intermediate-progress",
    legacyProgressKey: "",
    examKey: "wsai-intermediate-exam-result",
    legacyExamKey: "",
    examStartKey: "wsai-intermediate-exam-started-at",
    idPrefix: "AAI-WSAI-INT",
    moduleCount: intermediateCourseModules.length,
    mcqs: intermediateExamQuestions,
    written: intermediateWrittenQuestions,
    courseHref: "/courses?level=intermediate",
  },
} as const;

const EXAM_DURATION_SECONDS = 45 * 60;
const WRITTEN_MARKS = 4;

type CertificateRecord = {
  id: string;
  name: string;
  date: string;
  status: "VALID" | "REVOKED";
  examPercent?: number;
  courseTitle?: string;
};

type ExamResult = {
  score: number;
  total: number;
  percent: number;
  passed: boolean;
  submittedAt: string;
};

function readRecord(track: CourseTrack): CertificateRecord | null {
  if (typeof window === "undefined") return null;
  const cfg = TRACK_CONFIG[track];
  try {
    const raw =
      window.localStorage.getItem(cfg.certKey) ||
      (cfg.legacyCertKey ? window.localStorage.getItem(cfg.legacyCertKey) : null) ||
      "null";
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function readAnyLocalRecord(certificateId: string): CertificateRecord | null {
  if (typeof window === "undefined" || !certificateId) return null;
  const f = readRecord("foundation");
  if (f?.id === certificateId) return f;
  const i = readRecord("intermediate");
  if (i?.id === certificateId) return i;
  return null;
}

function readExamResult(track: CourseTrack): ExamResult | null {
  if (typeof window === "undefined") return null;
  const cfg = TRACK_CONFIG[track];
  try {
    const raw =
      window.localStorage.getItem(cfg.examKey) ||
      (cfg.legacyExamKey ? window.localStorage.getItem(cfg.legacyExamKey) : null) ||
      "null";
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function newId(prefix: string) {
  const bytes = crypto.getRandomValues(new Uint8Array(4));
  return `${prefix}-${new Date().getFullYear()}-${Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()}`;
}

function FinalExam({
  track,
  mcqs,
  writtenQuestions,
  examKey,
  legacyExamKey,
  examStartKey,
  result,
  onResult,
}: {
  track: CourseTrack;
  mcqs: readonly FinalExamQuestion[];
  writtenQuestions: readonly FinalWrittenQuestion[];
  examKey: string;
  legacyExamKey: string;
  examStartKey: string;
  result: ExamResult | null;
  onResult: (next: ExamResult | null) => void;
}) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [written, setWritten] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(() => {
    if (typeof window === "undefined") return EXAM_DURATION_SECONDS;
    const storedStart = Number(window.localStorage.getItem(examStartKey));
    const startedAt =
      Number.isFinite(storedStart) && storedStart > 0 ? storedStart : Date.now();
    if (!storedStart)
      window.localStorage.setItem(examStartKey, String(startedAt));
    return Math.max(
      0,
      Math.ceil((startedAt + EXAM_DURATION_SECONDS * 1000 - Date.now()) / 1000)
    );
  });

  useEffect(() => {
    setAnswers({});
    setWritten({});
    setSubmitted(false);
    if (typeof window === "undefined") return;
    const storedStart = Number(window.localStorage.getItem(examStartKey));
    const startedAt =
      Number.isFinite(storedStart) && storedStart > 0 ? storedStart : Date.now();
    if (!storedStart)
      window.localStorage.setItem(examStartKey, String(startedAt));
    setRemainingSeconds(
      Math.max(
        0,
        Math.ceil((startedAt + EXAM_DURATION_SECONDS * 1000 - Date.now()) / 1000)
      )
    );
  }, [track, examStartKey]);

  const totalMarks = mcqs.length + writtenQuestions.length * WRITTEN_MARKS;
  const answeredMcq = Object.keys(answers).length;
  const answeredWritten = writtenQuestions.filter(
    (question) => (written[question.id] || "").trim().length >= 20
  ).length;
  const ready =
    answeredMcq === mcqs.length && answeredWritten === writtenQuestions.length;
  const timerLabel = `${String(Math.floor(remainingSeconds / 60)).padStart(2, "0")}:${String(
    remainingSeconds % 60
  ).padStart(2, "0")}`;

  useEffect(() => {
    if (result || submitted) return;
    const timer = window.setInterval(() => {
      const startedAt = Number(window.localStorage.getItem(examStartKey));
      const next = Math.max(
        0,
        Math.ceil((startedAt + EXAM_DURATION_SECONDS * 1000 - Date.now()) / 1000)
      );
      setRemainingSeconds(next);
      if (next <= 0) submit(true);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [result, submitted, answers, written, examStartKey]);

  function submit(force = false) {
    if (!force && !ready) return;
    const mcqScore = mcqs.reduce(
      (score, question) =>
        score + (answers[question.id] === question.answer ? 1 : 0),
      0
    );
    const writtenScore = answeredWritten * WRITTEN_MARKS;
    const score = mcqScore + writtenScore;
    const percent = Math.round((score / totalMarks) * 100);
    const next: ExamResult = {
      score,
      total: totalMarks,
      percent,
      passed: percent >= FINAL_EXAM_PASS_PERCENT,
      submittedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(examKey, JSON.stringify(next));
    window.localStorage.removeItem(examStartKey);
    setSubmitted(false);
    onResult(next);
  }

  function retake() {
    window.localStorage.removeItem(examKey);
    if (legacyExamKey) window.localStorage.removeItem(legacyExamKey);
    window.localStorage.removeItem(examStartKey);
    window.localStorage.setItem(examStartKey, String(Date.now()));
    setRemainingSeconds(EXAM_DURATION_SECONDS);
    setAnswers({});
    setWritten({});
    setSubmitted(false);
    onResult(null);
  }

  if (result && !submitted) {
    return (
      <section
        className={`final-exam-result ${result.passed ? "is-passed" : "is-failed"}`}
      >
        <div className="final-exam-result-icon">
          {result.passed ? <Check size={25} /> : <XCircle size={25} />}
        </div>
        <div>
          <p className="eyebrow">Final exam result</p>
          <h3>{result.passed ? "Passed · উত্তীর্ণ" : "Failed · অনুত্তীর্ণ"}</h3>
          <p>
            You scored{" "}
            <strong>
              {result.score}/{result.total} ({result.percent}%)
            </strong>
            . The pass mark is {FINAL_EXAM_PASS_PERCENT}%.
          </p>
          <button
            type="button"
            className="button secondary small"
            onClick={retake}
          >
            <RotateCcw size={15} /> Retake exam · আবার দিন
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="final-exam">
      <div className="final-exam-heading">
        <div>
          <p className="eyebrow">
            {track === "intermediate"
              ? "Intermediate Final Assessment · ৭০% নিরাপত্তা + ৩০% AI সাক্ষরতা"
              : "Final assessment · চূড়ান্ত পরীক্ষা"}
          </p>
          <h2>Pass the exam before your certificate.</h2>
          <p>
            Answer ৩০টি MCQ and ৫টি short written questions. The exam is worth{" "}
            {totalMarks} marks; you need at least{" "}
            {Math.ceil((totalMarks * FINAL_EXAM_PASS_PERCENT) / 100)} marks (
            {FINAL_EXAM_PASS_PERCENT}%) to pass.
          </p>
          <p className="bn-line">
            ৩০টি MCQ এবং ৫টি short written question-এর উত্তর দিন। মোট {totalMarks}{" "}
            নম্বরের মধ্যে অন্তত{" "}
            {Math.ceil((totalMarks * FINAL_EXAM_PASS_PERCENT) / 100)} নম্বর পেলে
            (৭০%) আপনি উত্তীর্ণ হবেন।
          </p>
        </div>
        <ShieldCheck />
      </div>
      <div className="final-exam-progress">
        <span className={remainingSeconds < 300 ? "is-urgent" : ""}>
          সময় বাকি: {timerLabel}
        </span>
        <span>
          MCQ: {answeredMcq}/{mcqs.length}
        </span>
        <span>
          Written: {answeredWritten}/{writtenQuestions.length}
        </span>
      </div>
      <div className="final-exam-questions">
        <div className="final-exam-section-title">
          <span>Part A · অংশ ক</span>
          <h3>৩০টি MCQ</h3>
        </div>
        {mcqs.map((question, index) => (
          <fieldset className="final-question" key={question.id}>
            <legend>
              {index + 1}. {question.question}
            </legend>
            <div className="final-options">
              {question.options.map((option, optionIndex) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={question.id}
                    checked={answers[question.id] === optionIndex}
                    onChange={() =>
                      setAnswers((current) => ({
                        ...current,
                        [question.id]: optionIndex,
                      }))
                    }
                  />
                  <span>
                    {Char(optionIndex)}. {option}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      <div className="final-exam-written">
        <div className="final-exam-section-title">
          <span>Part B · অংশ খ</span>
          <h3>Short written questions · সংক্ষিপ্ত লিখিত প্রশ্ন</h3>
          <p>
            প্রতিটি উত্তরে অন্তত ২০টি অক্ষর লিখুন। স্থানীয়ভাবে প্রতিটি সম্পূর্ণ
            উত্তরের জন্য {WRITTEN_MARKS} নম্বর ধরা হবে; production LMS-এ শিক্ষক বা
            reviewer-এর মূল্যায়ন যুক্ত করা যাবে।
          </p>
        </div>
        {writtenQuestions.map((question, index) => (
          <label className="written-question" key={question.id}>
            <strong>
              {index + 1}. {question.question}
            </strong>
            <small>{question.prompt}</small>
            <textarea
              value={written[question.id] || ""}
              onChange={(event) =>
                setWritten((current) => ({
                  ...current,
                  [question.id]: event.target.value,
                }))
              }
              rows={4}
              placeholder="আপনার উত্তর লিখুন…"
            />
          </label>
        ))}
      </div>
      <div className="final-exam-submit">
        <span>
          {ready
            ? "সব উত্তর জমা দেওয়ার জন্য প্রস্তুত।"
            : "সব MCQ এবং লিখিত প্রশ্নের উত্তর দিন।"}
        </span>
        <button
          type="button"
          className="button primary"
          disabled={!ready}
          onClick={() => submit(false)}
        >
          Submit final exam <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

function Char(index: number) {
  return "কখগঘঙচছজঝঞ"[index] || String.fromCharCode(65 + index);
}

export default function Certificate({
  verification = false,
}: {
  verification?: boolean;
}) {
  const [, params] = useRoute("/verify/:id");
  const search = useSearch();
  const [, setLocation] = useLocation();
  const rawTrack = new URLSearchParams(search).get("track");
  const initialTrack: CourseTrack =
    rawTrack === "intermediate" ? "intermediate" : "foundation";

  const [track, setTrack] = useState<CourseTrack>(initialTrack);
  const [record, setRecord] = useState<CertificateRecord | null>(() =>
    readRecord(initialTrack)
  );
  const [examResult, setExamResult] = useState<ExamResult | null>(() =>
    readExamResult(initialTrack)
  );
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTrack(initialTrack);
    setRecord(readRecord(initialTrack));
    setExamResult(readExamResult(initialTrack));
    setCopied(false);
  }, [initialTrack]);

  function switchTrack(next: CourseTrack) {
    setTrack(next);
    setRecord(readRecord(next));
    setExamResult(readExamResult(next));
    setCopied(false);
    setLocation(
      next === "intermediate" ? "/certificate?track=intermediate" : "/certificate",
      { replace: true }
    );
  }

  const { user, loading: authLoading } = useAuth();
  const cfg = TRACK_CONFIG[track];
  const issueMutation = trpc.certificates.issue.useMutation();
  const verificationId = params?.id ?? "";
  const serverVerify = trpc.certificates.verify.useQuery(
    { certificateId: verificationId },
    { enabled: Boolean(verification && verificationId.length >= 8) }
  );
  const progressQuery = trpc.courseProgress.get.useQuery(undefined, {
    enabled: Boolean(user) && !verification,
    retry: false,
  });

  useEffect(() => {
    if (user?.name && !name) {
      setName(user.name);
    }
  }, [user?.name, name]);

  const completed = useMemo(() => {
    if (!user) return [] as string[];
    const serverModules = progressQuery.data?.[track]?.completedModules;
    if (serverModules) return serverModules;
    if (typeof window === "undefined") return [] as string[];
    try {
      const raw =
        window.localStorage.getItem(cfg.progressKey) ||
        (cfg.legacyProgressKey
          ? window.localStorage.getItem(cfg.legacyProgressKey)
          : null) ||
        "[]";
      return JSON.parse(raw) as string[];
    } catch {
      return [];
    }
  }, [user, progressQuery.data, track, cfg.progressKey, cfg.legacyProgressKey]);

  const modulesComplete = Boolean(user) && completed.length === cfg.moduleCount;
  const examPassed = Boolean(user) && examResult?.passed === true;
  const eligible = modulesComplete && examPassed;

  const localVerifiedRecord = verificationId
    ? readAnyLocalRecord(verificationId)
    : null;
  const verifiedRecord: CertificateRecord | null = serverVerify.data
    ? {
        id: serverVerify.data.certificateId,
        name: serverVerify.data.learnerName,
        date: new Date(serverVerify.data.completionDate)
          .toISOString()
          .slice(0, 10),
        status: serverVerify.data.status,
        courseTitle: serverVerify.data.courseTitle,
        examPercent: localVerifiedRecord?.examPercent,
      }
    : localVerifiedRecord;

  function issue() {
    if (!name.trim() || !eligible || record) return;
    const certId = newId(cfg.idPrefix);
    const completionDate = new Date().toISOString().slice(0, 10);
    const next: CertificateRecord = {
      id: certId,
      name: name.trim(),
      date: completionDate,
      status: "VALID",
      examPercent: examResult?.percent,
      courseTitle: cfg.courseTitle,
    };
    window.localStorage.setItem(cfg.certKey, JSON.stringify(next));
    setRecord(next);
    issueMutation.mutate({
      certificateId: certId,
      learnerName: next.name,
      courseTitle: cfg.courseTitle,
      completionDate: new Date(completionDate),
      verificationUrl: `${window.location.origin}/verify/${certId}`,
    });
  }

  if (verification) {
    return (
      <section className="certificate-page content-wrap">
        <div className="certificate-verify-card">
          <ShieldCheck size={35} />
          <p className="eyebrow">Public certificate verification</p>
          {serverVerify.isLoading && !localVerifiedRecord ? (
            <p>Checking certificate registry…</p>
          ) : verifiedRecord ? (
            <>
              <span
                className={`certificate-status ${
                  verifiedRecord.status === "REVOKED" ? "revoked" : "valid"
                }`}
              >
                {verifiedRecord.status}
              </span>
              <h1>
                {verifiedRecord.status === "REVOKED"
                  ? "Certificate revoked"
                  : "Certificate verified"}
              </h1>
              <p>
                Certificate of Completion for{" "}
                {verifiedRecord.courseTitle ||
                  "Women Safety in AI Era — Basic Foundation Course"}
                .
              </p>
              <dl>
                <div>
                  <dt>Learner</dt>
                  <dd>{verifiedRecord.name}</dd>
                </div>
                <div>
                  <dt>Issued by</dt>
                  <dd>Atlas AI Institute</dd>
                </div>
                <div>
                  <dt>Completion date</dt>
                  <dd>{verifiedRecord.date}</dd>
                </div>
                <div>
                  <dt>Certificate ID</dt>
                  <dd>{verifiedRecord.id}</dd>
                </div>
                <div>
                  <dt>Final exam score</dt>
                  <dd>
                    {verifiedRecord.examPercent != null
                      ? `${verifiedRecord.examPercent}%`
                      : "Score recorded as passed"}
                  </dd>
                </div>
                <div>
                  <dt>Result</dt>
                  <dd>
                    <span className="certificate-pass-badge">PASSED</span>
                  </dd>
                </div>
              </dl>
              <small>
                Only minimum verification information is displayed. No email,
                password or assessment answer is published.
              </small>
            </>
          ) : (
            <>
              <h1>Certificate Not Found</h1>
              <p>This certificate ID could not be verified.</p>
              <Link className="text-link" href="/certificate">
                Return to certificate page <ArrowRight size={15} />
              </Link>
            </>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="certificate-page content-wrap">
      <div className="certificate-heading">
        <div>
          <p className="eyebrow">Certificate of Completion · certificate</p>
          <h1>Your learning achievement.</h1>
          <p>
            {track === "intermediate"
              ? "Complete all 10 Intermediate modules (70% Women Safety + 30% AI Literacy) and pass the 30-MCQ plus written exam with at least 70% before issuing your Intermediate Certificate."
              : "Complete all 8 Foundation modules and pass the 30-MCQ plus written final exam with at least 70% before issuing a certificate."}
          </p>
          <p className="bn-line">
            {track === "intermediate"
              ? "১০টি ইন্টারমিডিয়েট মডিউল সম্পন্ন করে ৩০টি MCQ ও ৫টি কেস-ভিত্তিক লিখিত পরীক্ষায় অন্তত ৭০% পেলে ইন্টারমিডিয়েট সার্টিফিকেট issue করা যাবে।"
              : "৮টি ফাউন্ডেশন মডিউল সম্পন্ন করে ৩০টি MCQ ও লিখিত final exam-এ অন্তত ৭০% পেলে certificate issue করা যাবে।"}
          </p>
        </div>
        <LockKeyhole />
      </div>

      <div
        className="cert-track-switcher"
        role="tablist"
        aria-label="Certificate course track"
      >
        <button
          type="button"
          role="tab"
          aria-selected={track === "foundation"}
          className={`cert-track-btn ${track === "foundation" ? "is-active" : ""}`}
          onClick={() => switchTrack("foundation")}
        >
          Level 1 · Foundation Course (8 Modules)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={track === "intermediate"}
          className={`cert-track-btn ${track === "intermediate" ? "is-active" : ""}`}
          onClick={() => switchTrack("intermediate")}
        >
          Level 2 · Intermediate Course (10 Modules · 70/30)
        </button>
      </div>

      <div className="certificate-layout">
        <div className="certificate-requirements">
          {!authLoading && !user ? (
            <div className="course-auth-gate" style={{ marginBottom: 0 }}>
              <div className="course-auth-gate-copy">
                <p className="eyebrow">
                  <LockKeyhole size={13} /> Sign In Required · লগ ইন প্রয়োজন
                </p>
                <h3>ফাইনাল পরীক্ষা ও সার্টিফিকেটের জন্য লগ ইন করুন।</h3>
                <p>
                  Sign up or log in to verify your completed course modules and
                  chapter exams, take the 30-MCQ + written Final Exam, and issue
                  your official certificate.
                  <span className="bn-line">
                    আপনার সম্পন্ন করা মডিউল ও অধ্যায় পরীক্ষার তথ্য যাচাই করে
                    চূড়ান্ত পরীক্ষা দিতে ও সার্টিফিকেট নিতে সাইন আপ বা লগ ইন
                    করুন।
                  </span>
                </p>
              </div>
              <div className="course-auth-gate-actions">
                <Link
                  href={`/login?redirect=${encodeURIComponent(
                    track === "intermediate"
                      ? "/certificate?track=intermediate"
                      : "/certificate"
                  )}`}
                  className="button primary"
                >
                  <LogIn size={16} /> লগ ইন · Log In
                </Link>
                <Link
                  href={`/signup?redirect=${encodeURIComponent(
                    track === "intermediate"
                      ? "/certificate?track=intermediate"
                      : "/certificate"
                  )}`}
                  className="button secondary"
                >
                  <UserPlus size={16} /> সাইন আপ · Sign Up
                </Link>
              </div>
            </div>
          ) : (
            <>
              <h2>Eligibility · যোগ্যতা</h2>
              <div className={modulesComplete ? "requirement done" : "requirement"}>
                <CheckCircle2 />
                <span>
                  <b>
                    {track === "intermediate"
                      ? "১০টি ইন্টারমিডিয়েট মডিউল সম্পন্ন"
                      : "৮টি course module সম্পন্ন"}
                  </b>
                  <small>
                    {completed.length}/{cfg.moduleCount} module ও প্রতিটি অধ্যায়
                    পরীক্ষা সম্পন্ন হয়েছে
                  </small>
                </span>
              </div>
              <div className={examPassed ? "requirement done" : "requirement"}>
                <CheckCircle2 />
                <span>
                  <b>Final exam: ৭০% minimum</b>
                  <small>
                    {examResult
                      ? `${examResult.percent}% — ${
                          examResult.passed
                            ? "Passed · উত্তীর্ণ"
                            : "Failed · অনুত্তীর্ণ"
                        }`
                      : "Certificate-এর আগে final exam দিন"}
                  </small>
                </span>
              </div>
              {!modulesComplete && (
                <p className="certificate-note">
                  Certificate-এর আগে সব {cfg.moduleCount}টি module ও প্রতি
                  অধ্যায়ের পরীক্ষা সম্পন্ন করুন।{" "}
                  <Link href={cfg.courseHref}>কোর্সে ফিরে যান</Link>
                </p>
              )}
              {modulesComplete && !examPassed && (
                <FinalExam
                  track={track}
                  mcqs={cfg.mcqs}
                  writtenQuestions={cfg.written}
                  examKey={cfg.examKey}
                  legacyExamKey={cfg.legacyExamKey}
                  examStartKey={cfg.examStartKey}
                  result={examResult}
                  onResult={setExamResult}
                />
              )}
              {eligible && !record && (
                <div className="certificate-issue-form">
                  <label>
                    Learner full name
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter the registered full name"
                    />
                  </label>
                  <button
                    className="button primary"
                    onClick={issue}
                    disabled={!name.trim()}
                  >
                    Generate certificate ID <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        {record && (
          <div className="certificate-preview">
            <div className="certificate-paper">
              <p className="certificate-brand">ATLAS AI INSTITUTE</p>
              <p className="certificate-label">CERTIFICATE OF COMPLETION</p>
              <h2>WOMEN SAFETY IN AI ERA</h2>
              <p>{cfg.subtitle}</p>
              <span>This certificate is proudly presented to</span>
              <strong className="certificate-recipient-name">
                {record.name}
              </strong>
              <div className="certificate-score">
                <span>Final assessment score</span>
                <strong>
                  {record.examPercent != null ? `${record.examPercent}%` : "—"}
                </strong>
                <small>Pass mark: {FINAL_EXAM_PASS_PERCENT}% · PASSED</small>
              </div>
              <p>
                For successfully completing the{" "}
                {track === "intermediate"
                  ? "Intermediate Level Course (70% Women Safety in AI Era & 30% AI Literacy Learning)"
                  : "Basic Foundation Course"}{" "}
                and passing the final assessment with at least{" "}
                {FINAL_EXAM_PASS_PERCENT}%.
              </p>
              <div className="certificate-meta">
                <span>Date of completion: {record.date}</span>
                <span>Certificate ID: {record.id}</span>
              </div>
            </div>
            <div className="certificate-actions">
              <button
                className="button primary"
                onClick={() => window.print()}
              >
                <Download size={16} /> Print / Save as PDF
              </button>
              <button
                className="button secondary"
                onClick={() => {
                  navigator.clipboard?.writeText(
                    `${window.location.origin}/verify/${record.id}`
                  );
                  setCopied(true);
                }}
              >
                <Copy size={16} />{" "}
                {copied ? "Copied" : "Copy verification link"}
              </button>
              <Link className="button ghost" href={`/verify/${record.id}`}>
                View verification <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
