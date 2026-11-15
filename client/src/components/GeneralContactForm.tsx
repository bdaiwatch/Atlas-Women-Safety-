import { useState } from "react";
import { Mail, CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export function GeneralContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [enquiryCategory, setEnquiryCategory] = useState("General Enquiry");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState(false);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formAttempted, setFormAttempted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormAttempted(true);

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ae6f8ffa-1ea5-4acf-b1c4-71ec3ce86a3c",
          subject: "New General Contact Enquiry — Atlas AI Institute",
          from_name: "Atlas AI Institute Website",
          name: name.trim(),
          email: email.trim(),
          enquiry_subject: subject.trim(),
          enquiry_category: enquiryCategory,
          message: message.trim(),
          botcheck: botcheck ? "spambot" : "",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          result.message ||
            "Your message could not be submitted. Please try again or contact us at contact@atlasai.institute."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Your message could not be submitted. Please try again or contact us at contact@atlasai.institute."
      );
    }
  };

  return (
    <div className="enquiry-form-card" style={{ background: "#fff", color: "var(--ink)", padding: "32px", borderRadius: "var(--radius)", border: "1px solid var(--line)" }}>
      <div className="form-subheading" style={{ display: "flex", alignItems: "center", gap: "8px", paddingBottom: "10px", borderBottom: "1px solid var(--line)", marginBottom: "16px", color: "var(--navy)", fontWeight: 700, fontSize: "15px" }}>
        <Mail size={18} style={{ color: "var(--plum)" }} />
        <span>Contact Atlas AI Institute</span>
      </div>
      <p style={{ fontSize: "13.5px", color: "var(--muted)", marginBottom: "20px", lineHeight: "1.5" }}>
        Have a question, suggestion or general enquiry? Send us a message and our team will review your enquiry.
      </p>

      {status === "success" ? (
        <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "24px", textAlign: "center", color: "#166534" }}>
          <CheckCircle2 size={36} style={{ margin: "0 auto 12px", color: "#22c55e" }} />
          <h4 style={{ fontWeight: 700, marginBottom: "8px", color: "#14532d" }}>Message Submitted Successfully</h4>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            Thank you for contacting Atlas AI Institute. Your message has been submitted successfully.
          </p>
          <button
            type="button"
            className="button primary small"
            style={{ marginTop: "16px" }}
            onClick={() => {
              setStatus("idle");
              setName("");
              setEmail("");
              setSubject("");
              setMessage("");
              setFormAttempted(false);
            }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
          {/* Honeypot */}
          <input
            type="checkbox"
            name="botcheck"
            checked={botcheck}
            onChange={(e) => setBotcheck(e.target.checked)}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <label style={{ display: "grid", gap: "6px", fontSize: "13px", fontWeight: 600, color: "var(--navy)" }}>
            Full Name *
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              style={{ border: "1px solid var(--line)", borderRadius: "11px", padding: "11px 13px", fontSize: "14px", outline: "none", color: "var(--ink)", background: "#fff" }}
            />
            {formAttempted && !name.trim() && <span className="field-error">Full name is required.</span>}
          </label>

          <label style={{ display: "grid", gap: "6px", fontSize: "13px", fontWeight: 600, color: "var(--navy)" }}>
            Email Address *
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{ border: "1px solid var(--line)", borderRadius: "11px", padding: "11px 13px", fontSize: "14px", outline: "none", color: "var(--ink)", background: "#fff" }}
            />
            {formAttempted && !email.trim() && <span className="field-error">Email address is required.</span>}
          </label>

          <label style={{ display: "grid", gap: "6px", fontSize: "13px", fontWeight: 600, color: "var(--navy)" }}>
            Subject *
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Brief subject of your enquiry"
              style={{ border: "1px solid var(--line)", borderRadius: "11px", padding: "11px 13px", fontSize: "14px", outline: "none", color: "var(--ink)", background: "#fff" }}
            />
            {formAttempted && !subject.trim() && <span className="field-error">Subject is required.</span>}
          </label>

          <label style={{ display: "grid", gap: "6px", fontSize: "13px", fontWeight: 600, color: "var(--navy)" }}>
            Enquiry Category (Optional)
            <select
              value={enquiryCategory}
              onChange={(e) => setEnquiryCategory(e.target.value)}
              style={{ border: "1px solid var(--line)", borderRadius: "11px", padding: "11px 13px", fontSize: "14px", background: "#fff", outline: "none", color: "var(--ink)" }}
            >
              <option value="General Enquiry">General Enquiry</option>
              <option value="Educational Programmes">Educational Programmes</option>
              <option value="Courses and Certification">Courses and Certification</option>
              <option value="Schools and Colleges">Schools and Colleges</option>
              <option value="Media and Communication">Media and Communication</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label style={{ display: "grid", gap: "6px", fontSize: "13px", fontWeight: 600, color: "var(--navy)" }}>
            Message *
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              style={{ border: "1px solid var(--line)", borderRadius: "11px", padding: "11px 13px", fontSize: "14.5px", outline: "none", resize: "vertical", color: "var(--ink)", background: "#fff" }}
            />
            {formAttempted && !message.trim() && <span className="field-error">Message is required.</span>}
          </label>

          {status === "error" && (
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", padding: "12px", color: "#991b1b", fontSize: "13px", display: "flex", gap: "8px", alignItems: "center" }}>
              <AlertCircle size={18} />
              <span>{errorMessage || "Your message could not be submitted. Please try again or contact us at contact@atlasai.institute."}</span>
            </div>
          )}

          <button
            type="submit"
            className="button primary"
            disabled={status === "submitting"}
            style={{ width: "100%", justifyContent: "center", marginTop: "6px" }}
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending Message...
              </>
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
