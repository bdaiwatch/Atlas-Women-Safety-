import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import { useLocation, useSearch } from "wouter";
import { trpc } from "@/lib/trpc";
import { saveClientSessionToken, useAuth } from "@/_core/hooks/useAuth";

export default function AuthPage({
  defaultMode = "login",
}: {
  defaultMode?: "login" | "signup";
}) {
  const searchStr = useSearch();
  const [, setLocation] = useLocation();
  const { user, logout } = useAuth();
  const utils = trpc.useUtils();

  const params = new URLSearchParams(searchStr);
  const modeParam = params.get("mode");
  const redirectTarget = params.get("redirect") || "/courses";

  const [mode, setMode] = useState<"login" | "signup">(
    modeParam === "signup" || modeParam === "register" ? "signup" : defaultMode,
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (modeParam === "signup" || modeParam === "register") {
      setMode("signup");
    } else if (modeParam === "login") {
      setMode("login");
    } else {
      setMode(defaultMode);
    }
  }, [defaultMode, modeParam]);

  const loginMutation = trpc.auth.login.useMutation({
    onSuccess: async (data) => {
      saveClientSessionToken(data.sessionToken);
      utils.auth.me.setData(undefined, data.user);
      await utils.auth.me.invalidate();
      await utils.courseProgress.get.invalidate();
      setLocation(redirectTarget);
    },
    onError: (err) => {
      setErrorMsg(err.message || "লগইন সফল হয়নি। ইমেইল ও পাসওয়ার্ড পরীক্ষা করুন।");
    },
  });

  const registerMutation = trpc.auth.register.useMutation({
    onSuccess: async (data) => {
      saveClientSessionToken(data.sessionToken);
      utils.auth.me.setData(undefined, data.user);
      await utils.auth.me.invalidate();
      await utils.courseProgress.get.invalidate();
      setLocation(redirectTarget);
    },
    onError: (err) => {
      setErrorMsg(
        err.message || "অ্যাকাউন্ট তৈরি করা যায়নি। অনুগ্রহ করে তথ্য যাচাই করুন।",
      );
    },
  });

  const isBusy = loginMutation.isPending || registerMutation.isPending;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setErrorMsg(null);
    if (mode === "signup") {
      if (name.trim().length < 2) {
        setErrorMsg("অনুগ্রহ করে কমপক্ষে ২ অক্ষরের পূর্ণ নাম লিখুন।");
        return;
      }
      if (password.length < 6) {
        setErrorMsg("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।");
        return;
      }
      registerMutation.mutate({ name: name.trim(), email: email.trim(), password });
    } else {
      loginMutation.mutate({ email: email.trim(), password });
    }
  }

  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">
          Learner Account · {mode === "signup" ? "সাইন আপ" : "লগইন"}
        </p>
        <h1>
          {mode === "signup"
            ? "Create your free learner account · নতুন অ্যাকাউন্ট খুলুন"
            : "Sign in to continue learning · লগইন করুন"}
        </h1>
        <p>
          সাইন আপ বা লগইন করলে কোর্সের মডিউল ১ (প্রথম অধ্যায়) সরাসরি আনলক হবে।
          প্রতিটি অধ্যায় পড়ে সংক্ষিপ্ত পরীক্ষায় পাস করলে ধাপে ধাপে পরের অধ্যায় ও
          মডিউল খুলবে।
        </p>
      </section>

      <section className="content-wrap">
        <div className="auth-split">
          <div className="auth-card">
            {user ? (
              <div style={{ display: "grid", gap: "16px" }}>
                <p className="eyebrow">Signed in · লগইন করা আছে</p>
                <h2 style={{ margin: 0 }}>
                  স্বাগতম, {user.name || user.email}
                </h2>
                <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.65 }}>
                  আপনার লার্নার অ্যাকাউন্ট সক্রিয় রয়েছে। এখন আপনি কোর্সে গিয়ে আনলক
                  করা মডিউল ও অধ্যায়গুলো পড়তে এবং পরীক্ষা দিতে পারবেন।
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    className="button primary"
                    onClick={() => setLocation(redirectTarget)}
                  >
                    কোর্সে প্রবেশ করুন <ArrowRight size={16} />
                  </button>
                  <button
                    type="button"
                    className="button secondary"
                    onClick={() => logout()}
                  >
                    Log out · লগআউট
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="auth-tabs" role="tablist" aria-label="Authentication mode">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mode === "signup"}
                    className={`auth-tab-btn ${mode === "signup" ? "is-active" : ""}`}
                    onClick={() => {
                      setMode("signup");
                      setErrorMsg(null);
                    }}
                  >
                    Sign Up · সাইন আপ
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mode === "login"}
                    className={`auth-tab-btn ${mode === "login" ? "is-active" : ""}`}
                    onClick={() => {
                      setMode("login");
                      setErrorMsg(null);
                    }}
                  >
                    Log In · লগইন
                  </button>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                  {mode === "signup" && (
                    <label>
                      Full Name · পূর্ণ নাম (সার্টিফিকেটে এই নাম ব্যবহৃত হবে)
                      <input
                        type="text"
                        required
                        minLength={2}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="উদা: নুসরাত জাহান / Nusrat Jahan"
                      />
                    </label>
                  )}

                  <label>
                    Email Address · ইমেইল ঠিকানা
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                    />
                  </label>

                  <label>
                    Password · পাসওয়ার্ড{" "}
                    {mode === "signup" ? "(কমপক্ষে ৬ অক্ষর)" : ""}
                    <input
                      type="password"
                      required
                      minLength={mode === "signup" ? 6 : 1}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                    />
                  </label>

                  {errorMsg && (
                    <p className="auth-error" role="alert">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="button primary"
                    disabled={isBusy}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    {isBusy
                      ? "অপেক্ষা করুন…"
                      : mode === "signup"
                        ? "অ্যাকাউন্ট তৈরি ও মডিউল ১ আনলক করুন"
                        : "লগইন করুন"}{" "}
                    <ArrowRight size={16} />
                  </button>
                </form>

                <p
                  style={{
                    margin: "16px 0 0",
                    fontSize: "12.5px",
                    color: "var(--muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {mode === "signup" ? (
                    <>
                      আগেই অ্যাকাউন্ট আছে?{" "}
                      <button
                        type="button"
                        onClick={() => {
                          setMode("login");
                          setErrorMsg(null);
                        }}
                        style={{
                          border: 0,
                          background: "none",
                          padding: 0,
                          color: "var(--plum)",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        এখান থেকে লগইন করুন
                      </button>
                    </>
                  ) : (
                    <>
                      নতুন শিক্ষার্থী?{" "}
                      <button
                        type="button"
                        onClick={() => {
                          setMode("signup");
                          setErrorMsg(null);
                        }}
                        style={{
                          border: 0,
                          background: "none",
                          padding: 0,
                          color: "var(--plum)",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        বিনামূল্যে সাইন আপ করুন
                      </button>
                    </>
                  )}
                </p>
              </>
            )}
          </div>

          <aside className="auth-info-panel">
            <p className="eyebrow" style={{ color: "#f6c96c", margin: 0 }}>
              Step-by-step Course Progression
            </p>
            <h2>কিভাবে কোর্স আনলক হয়?</h2>
            <p>
              Women Safety in AI Era (Atlas AI Institute)-এর প্রতিটি কোর্স
              ধারাবাহিক অনুশীলন ও অধ্যায়-ভিত্তিক মূল্যায়নের মাধ্যমে সাজানো হয়েছে:
            </p>
            <div className="auth-steps-list">
              <div className="auth-step-box">
                <LockKeyhole size={20} style={{ flex: "none", color: "#f6c96c" }} />
                <div>
                  <strong>১. লগইন ছাড়া: শুধু সূচীপত্র দৃশ্যমান</strong>
                  <span>
                    লগইন বা সাইন আপ না করলে কোর্সের সম্পূর্ণ পাঠ লক থাকে—তবে
                    কোন মডিউলে কী শেখানো হবে তার সূচীপত্র দেখতে পারবেন।
                  </span>
                </div>
              </div>
              <div className="auth-step-box">
                <UserPlus size={20} style={{ flex: "none", color: "#f6c96c" }} />
                <div>
                  <strong>২. সাইন আপের পর: শুধু মডিউল ১ ওপেন হবে</strong>
                  <span>
                    নতুন অ্যাকাউন্ট খোলার সাথে সাথে Foundation এবং Intermediate উভয়
                    কোর্সের প্রথম মডিউলের প্রথম অধ্যায় সরাসরি খুলে যাবে।
                  </span>
                </div>
              </div>
              <div className="auth-step-box">
                <BookOpen size={20} style={{ flex: "none", color: "#f6c96c" }} />
                <div>
                  <strong>৩. প্রতি অধ্যায়ের পরে পরীক্ষা (Chapter Exam)</strong>
                  <span>
                    একটি অধ্যায় শেষ করে নিচে থাকা ৩ প্রশ্নের Chapter Exam-এ পাস
                    করলে (২/৩ বা তার বেশি) স্বয়ংক্রিয়ভাবে পরবর্তী অধ্যায় বা পরের
                    মডিউল আনলক হবে।
                  </span>
                </div>
              </div>
              <div className="auth-step-box">
                <ShieldCheck size={20} style={{ flex: "none", color: "#f6c96c" }} />
                <div>
                  <strong>৪. সম্পূর্ণ প্রাইভেসি সুরক্ষা</strong>
                  <span>
                    আপনার প্রোফাইলে কোনো ব্যক্তিগত ট্রমা বা সংবেদনশীল ছবি চাওয়া হয়
                    না; শুধু শেখার অগ্রগতি ও সার্টিফিকেট রেকর্ড সংরক্ষিত থাকে।
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "12.5px",
                color: "#f6c96c",
              }}
            >
              <CheckCircle2 size={16} /> সব কোর্স অগ্রগতি আপনার অ্যাকাউন্টে নিরাপদে
              সংরক্ষিত থাকে।
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
