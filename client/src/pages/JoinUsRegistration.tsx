import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { Link, useLocation, useSearch } from "wouter";
import { trpc } from "../lib/trpc";

export type RegistrationType = "school" | "college" | "individual";

function normalizeType(raw: string | null): RegistrationType {
  if (raw === "college") return "college";
  if (raw === "individual") return "individual";
  return "school";
}

const DIVISIONS = [
  "Dhaka",
  "Chattogram",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
];

const INDIVIDUAL_ROLES = [
  "Student / Learner",
  "Parent / Guardian",
  "Educator / Mentor",
  "Community Volunteer",
] as const;

export default function JoinUsRegistration() {
  const search = useSearch();
  const [, setLocation] = useLocation();
  const urlType = normalizeType(new URLSearchParams(search).get("type"));

  const [activeType, setActiveType] = useState<RegistrationType>(urlType);
  const [sentType, setSentType] = useState<RegistrationType | null>(null);

  useEffect(() => {
    setActiveType(urlType);
    setSentType(null);
  }, [urlType]);

  const schoolMutation = trpc.schools.register.useMutation();
  const individualMutation = trpc.individuals.register.useMutation();

  const [institutionForm, setInstitutionForm] = useState({
    name: "",
    address: "",
    division: "",
    district: "",
    contactEmail: "",
    contactPhone: "",
    safeguardingContact: "",
  });

  const [individualForm, setIndividualForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    division: "",
    district: "",
    roleType: "Student / Learner" as (typeof INDIVIDUAL_ROLES)[number],
    preferredLanguage: "Bangla & English",
    participationNotes: "",
  });

  const updateInstitution = (key: keyof typeof institutionForm, value: string) =>
    setInstitutionForm((prev) => ({ ...prev, [key]: value }));

  const updateIndividual = (key: keyof typeof individualForm, value: string) =>
    setIndividualForm((prev) => ({ ...prev, [key]: value }));

  const switchTab = (next: RegistrationType) => {
    setActiveType(next);
    setSentType(null);
    schoolMutation.reset();
    individualMutation.reset();
    setLocation(`/clubs/register?type=${next}`, { replace: true });
  };

  const tabMeta: Record<
    RegistrationType,
    {
      kicker: string;
      title: string;
      lead: string;
      formTitle: string;
      formNotice: string;
      icon: typeof Building2;
    }
  > = {
    school: {
      kicker: "Join as a School · স্কুল নিবন্ধন",
      title: "Bring a safety club to your school.",
      lead: "Institutional registration is the first step for primary and secondary schools. We review every school before approval; this form never collects student names or private disclosures.",
      formTitle: "School registration request",
      formNotice:
        "Use an official school email and name an authorised safeguarding contact (Teacher Adviser or Head Teacher).",
      icon: Building2,
    },
    college: {
      kicker: "Join as a College · কলেজ নিবন্ধন",
      title: "Launch a campus safety chapter at your college.",
      lead: "Higher secondary, degree, and university colleges can register to host AI-era digital safety workshops, peer leadership sessions, and certified learning cohorts.",
      formTitle: "College registration request",
      formNotice:
        "Use an official college contact and designate a faculty coordinator or safeguarding focal point.",
      icon: GraduationCap,
    },
    individual: {
      kicker: "Join as an Individual · ব্যক্তিগত নিবন্ধন",
      title: "Join the Women Safety in AI Era community.",
      lead: "Learners, parents, educators, mentors, and community volunteers can register individually to join awareness drives, guided learning circles, and community updates.",
      formTitle: "Individual registration",
      formNotice:
        "Safeguarding rule: Do not submit personal crisis details, abuse disclosures, or private incident files here. Use the Support or Get help directory for urgent assistance.",
      icon: UserCheck,
    },
  };

  const currentMeta = tabMeta[activeType];
  const HeaderIcon = currentMeta.icon;

  const isCollege = activeType === "college";
  const isInstitution = activeType === "school" || activeType === "college";

  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">{currentMeta.kicker}</p>
        <h1>{currentMeta.title}</h1>
        <p>{currentMeta.lead}</p>
      </section>

      <section className="content-wrap school-registration-section">
        <div className="join-switcher-wrap">
          <div
            className="join-type-tabs"
            role="tablist"
            aria-label="Registration type"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeType === "school"}
              className={`join-type-tab ${activeType === "school" ? "is-active" : ""}`}
              onClick={() => switchTab("school")}
            >
              <Building2 size={17} aria-hidden="true" />
              <span>
                <strong>Join as a School</strong>
                <small>স্কুল হিসেবে যোগ দিন</small>
              </span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeType === "college"}
              className={`join-type-tab ${activeType === "college" ? "is-active" : ""}`}
              onClick={() => switchTab("college")}
            >
              <GraduationCap size={17} aria-hidden="true" />
              <span>
                <strong>Join as a College</strong>
                <small>কলেজ হিসেবে যোগ দিন</small>
              </span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeType === "individual"}
              className={`join-type-tab ${activeType === "individual" ? "is-active" : ""}`}
              onClick={() => switchTab("individual")}
            >
              <UserCheck size={17} aria-hidden="true" />
              <span>
                <strong>Individual</strong>
                <small>ব্যক্তিগতভাবে যোগ দিন</small>
              </span>
            </button>
          </div>
        </div>

        <datalist id="bd-divisions">
          {DIVISIONS.map((d) => (
            <option key={d} value={d} />
          ))}
        </datalist>

        <div className="form-card school-form" role="tabpanel">
          <div className="form-heading">
            <div>
              <p className="eyebrow">
                Women Safety in AI Era · Atlas AI Institute
              </p>
              <h2>{currentMeta.formTitle}</h2>
              <p>{currentMeta.formNotice}</p>
            </div>
            <HeaderIcon aria-hidden="true" />
          </div>

          {sentType === activeType ? (
            <div className="success-state">
              <CheckCircle2 />
              <h3>
                {activeType === "individual"
                  ? "Individual registration received."
                  : `${isCollege ? "College" : "School"} request received for review.`}
              </h3>
              <p>
                {activeType === "individual"
                  ? "Thank you for registering with Women Safety in AI Era at Atlas AI Institute. Your details are kept private and will only be used for programme coordination."
                  : `Your ${isCollege ? "college" : "school"} registration is pending institutional approval. Atlas AI Institute will not publish your institution until verification is complete.`}
              </p>
              <div className="success-actions">
                <Link href="/clubs" className="text-link">
                  Back to Join us directory <ArrowRight size={15} />
                </Link>
                <button
                  type="button"
                  className="text-link button-link"
                  onClick={() => setSentType(null)}
                >
                  Submit another registration
                </button>
              </div>
            </div>
          ) : isInstitution ? (
            <form
              key={activeType}
              onSubmit={(e) => {
                e.preventDefault();
                schoolMutation.mutate(
                  {
                    ...institutionForm,
                    institutionType: isCollege ? "College" : "School",
                  },
                  {
                    onSuccess: () => {
                      setSentType(activeType);
                      setInstitutionForm({
                        name: "",
                        address: "",
                        division: "",
                        district: "",
                        contactEmail: "",
                        contactPhone: "",
                        safeguardingContact: "",
                      });
                    },
                  }
                );
              }}
            >
              <div className="form-grid">
                <label>
                  {isCollege ? "College name" : "School name"}
                  <input
                    required
                    value={institutionForm.name}
                    onChange={(e) => updateInstitution("name", e.target.value)}
                    placeholder={
                      isCollege
                        ? "Official college or university name"
                        : "Official school name"
                    }
                  />
                </label>

                <label>
                  Official contact email
                  <input
                    required
                    type="email"
                    value={institutionForm.contactEmail}
                    onChange={(e) =>
                      updateInstitution("contactEmail", e.target.value)
                    }
                    placeholder={
                      isCollege ? "college@example.edu.bd" : "school@example.edu.bd"
                    }
                  />
                </label>

                <label className="wide">
                  {isCollege ? "College campus address" : "School address"}
                  <textarea
                    required
                    value={institutionForm.address}
                    onChange={(e) => updateInstitution("address", e.target.value)}
                    placeholder="Full institutional address"
                  />
                </label>

                <label>
                  Division · বিভাগ
                  <input
                    list="bd-divisions"
                    value={institutionForm.division}
                    onChange={(e) =>
                      updateInstitution("division", e.target.value)
                    }
                    placeholder="e.g. Dhaka"
                  />
                </label>

                <label>
                  District · জেলা
                  <input
                    value={institutionForm.district}
                    onChange={(e) =>
                      updateInstitution("district", e.target.value)
                    }
                    placeholder="e.g. Dhaka"
                  />
                </label>

                <label>
                  Official phone
                  <input
                    value={institutionForm.contactPhone}
                    onChange={(e) =>
                      updateInstitution("contactPhone", e.target.value)
                    }
                    placeholder="Published institutional number"
                  />
                </label>

                <label>
                  {isCollege
                    ? "Faculty / Safeguarding coordinator"
                    : "Safeguarding contact (Teacher / Head)"}
                  <input
                    required
                    value={institutionForm.safeguardingContact}
                    onChange={(e) =>
                      updateInstitution("safeguardingContact", e.target.value)
                    }
                    placeholder={
                      isCollege
                        ? "Name and designation of faculty focal person"
                        : "Name and role of authorised safeguarding contact"
                    }
                  />
                </label>
              </div>

              <label className="consent">
                <input required type="checkbox" />
                <span>
                  I confirm this is an authorised{" "}
                  {isCollege ? "college" : "school"} request, no student
                  personal identities are included, and institutional approval
                  is subject to verification.
                </span>
              </label>

              <button
                className="button primary"
                disabled={schoolMutation.isPending}
              >
                {schoolMutation.isPending
                  ? "Submitting…"
                  : isCollege
                    ? "Submit college registration"
                    : "Submit school registration"}{" "}
                <ArrowRight size={16} />
              </button>

              {schoolMutation.error && (
                <p className="error-text">
                  We could not submit this request. Please check your details
                  and try again.
                </p>
              )}
            </form>
          ) : (
            <form
              key="individual"
              onSubmit={(e) => {
                e.preventDefault();
                individualMutation.mutate(individualForm, {
                  onSuccess: () => {
                    setSentType("individual");
                    setIndividualForm({
                      fullName: "",
                      email: "",
                      phone: "",
                      division: "",
                      district: "",
                      roleType: "Student / Learner",
                      preferredLanguage: "Bangla & English",
                      participationNotes: "",
                    });
                  },
                });
              }}
            >
              <div className="form-grid">
                <label>
                  Full name · পুরো নাম
                  <input
                    required
                    value={individualForm.fullName}
                    onChange={(e) =>
                      updateIndividual("fullName", e.target.value)
                    }
                    placeholder="Your full name"
                  />
                </label>

                <label>
                  Email address · ইমেইল
                  <input
                    required
                    type="email"
                    value={individualForm.email}
                    onChange={(e) => updateIndividual("email", e.target.value)}
                    placeholder="you@example.com"
                  />
                </label>

                <label>
                  Role · কীভাবে যুক্ত হচ্ছেন
                  <select
                    value={individualForm.roleType}
                    onChange={(e) =>
                      updateIndividual("roleType", e.target.value)
                    }
                  >
                    {INDIVIDUAL_ROLES.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Preferred language · ভাষা
                  <select
                    value={individualForm.preferredLanguage}
                    onChange={(e) =>
                      updateIndividual("preferredLanguage", e.target.value)
                    }
                  >
                    <option value="Bangla & English">
                      Bangla & English · বাংলা ও ইংরেজি
                    </option>
                    <option value="Bangla">Bangla · বাংলা</option>
                    <option value="English">English</option>
                  </select>
                </label>

                <label>
                  Division · বিভাগ
                  <input
                    list="bd-divisions"
                    value={individualForm.division}
                    onChange={(e) =>
                      updateIndividual("division", e.target.value)
                    }
                    placeholder="e.g. Chattogram"
                  />
                </label>

                <label>
                  District · জেলা
                  <input
                    value={individualForm.district}
                    onChange={(e) =>
                      updateIndividual("district", e.target.value)
                    }
                    placeholder="e.g. Chattogram"
                  />
                </label>

                <label>
                  Phone number (optional) · ফোন নম্বর
                  <input
                    value={individualForm.phone}
                    onChange={(e) => updateIndividual("phone", e.target.value)}
                    placeholder="Optional contact number"
                  />
                </label>

                <label className="wide">
                  How would you like to participate? (Optional)
                  <textarea
                    value={individualForm.participationNotes}
                    onChange={(e) =>
                      updateIndividual("participationNotes", e.target.value)
                    }
                    placeholder="Share your interest in digital safety learning, workshops, or volunteering. Do not enter private incident or crisis details."
                  />
                </label>
              </div>

              <label className="consent">
                <input required type="checkbox" />
                <span>
                  I understand this registration is for community and learning
                  participation only (not a crisis helpline), and Atlas AI
                  Institute will keep my personal details private.
                </span>
              </label>

              <button
                className="button primary"
                disabled={individualMutation.isPending}
              >
                {individualMutation.isPending
                  ? "Submitting…"
                  : "Complete individual registration"}{" "}
                <ArrowRight size={16} />
              </button>

              {individualMutation.error && (
                <p className="error-text">
                  We could not submit your registration. Please check your
                  email and required fields, then try again.
                </p>
              )}
            </form>
          )}
        </div>

        <aside className="join-safeguarding-note">
          <ShieldCheck size={18} aria-hidden="true" />
          <p>
            Need immediate help with online harassment or an AI-related safety
            incident? Visit our{" "}
            <Link href="/emergency">Emergency help</Link> or{" "}
            <Link href="/support">Support directory</Link> instead of a
            registration form.
          </p>
        </aside>
      </section>
    </>
  );
}
