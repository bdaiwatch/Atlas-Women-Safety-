import { useMemo, useState } from "react";
import { Route, Switch, Link, useLocation } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Facebook,
  FileText,
  Globe2,
  Linkedin,
  LockKeyhole,
  Mail,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Siren,
  Users,
  X,
} from "lucide-react";
import { useAuth } from "./_core/hooks/useAuth";
import { isLoginConfigured, startLogin } from "./const";
import { trpc } from "./lib/trpc";
import { emergencyContacts, supportEntries } from "./data/awsn";
import { BrandLogo } from "./components/BrandLogo";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/Home";
import Course from "./pages/Course";
import Resources from "./pages/Resources";
import SchoolProgramme from "./pages/SchoolProgramme";
import ClubsDirectory from "./pages/ClubsDirectory";
import Certificate from "./pages/Certificate";
import CertificateAudit from "./pages/CertificateAudit";
import JoinUsRegistration from "./pages/JoinUsRegistration";
import AuthPage from "./pages/AuthPage";
import Partnerships from "./pages/Partnerships";
import "./index.css";
import "./phase2.css";
import "./schoolRegistration.css";

const navItems = [
  ["/", "Home"],
  ["/resources", "Resources"],
  ["/courses", "Courses · কোর্স"],
  ["/school-programme", "Schools · স্কুল"],
  ["/support", "Support"],
  ["/network", "About"],
  ["/partnerships", "Partnerships"],
  ["/clubs", "Join us"],
] as const;

const socialLinks = [
  {
    label: "Facebook Group",
    href: "https://www.facebook.com/share/g/1dt4ckjsrT/",
    icon: Facebook,
  },
  {
    label: "Facebook Page",
    href: "https://www.facebook.com/atlasaiinstitute",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/atlas-ai-institute/",
    icon: Linkedin,
  },
  {
    label: "Community Portal",
    href: "https://awsclub.atlasai.institute",
    icon: Globe2,
  },
];

const contactDetails = {
  institute: "Atlas AI Institute",
  email: "contact@atlasai.institute",
  website: "https://atlasai.institute",
};

function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { user, logout } = useAuth();
  return (
    <div className="site-shell">
      <div className="topline">
        <span>{contactDetails.institute}</span>
        <span>
          Bangla-first digital safety and support navigation for Bangladesh
        </span>
        <button
          className="safe-exit"
          onClick={() => {
            window.location.replace("https://www.google.com");
          }}
        >
          Safe exit
        </button>
      </div>
      <header className="site-header">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <BrandLogo />
        </Link>
        <button
          className="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav id="primary-navigation" className={open ? "nav open" : "nav"}>
          {navItems.map(([href, label]) => {
            const isActive =
              location === href ||
              (href === "/network" &&
                (location === "/about" || location === "/network/apply"));
            return (
              <Link
                key={href}
                href={href}
                className={isActive ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/emergency"
            className="emergency-link"
            onClick={() => setOpen(false)}
          >
            <Siren size={16} /> Get help
          </Link>
          <div className="nav-socials">
            <span>Connect with {contactDetails.institute}</span>
            <div>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
          <div className="nav-auth-mobile">
            {user ? (
              <>
                <span className="header-user-chip">
                  {user.name || user.email}
                </span>
                <button
                  type="button"
                  className="header-auth-btn"
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                >
                  Log out · লগআউট
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="header-auth-btn"
                  onClick={() => setOpen(false)}
                >
                  Log in · লগইন
                </Link>
                <Link
                  href="/signup"
                  className="header-auth-btn primary"
                  onClick={() => setOpen(false)}
                >
                  Sign up · সাইন আপ
                </Link>
              </>
            )}
          </div>
        </nav>
        <div className="header-actions">
          {user ? (
            <>
              <Link
                href="/courses"
                className="header-user-chip"
                title={user.email ?? undefined}
              >
                {user.name || user.email}
              </Link>
              <button
                type="button"
                className="header-auth-btn"
                onClick={() => logout()}
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="header-auth-btn">
                Log in
              </Link>
              <Link href="/signup" className="header-auth-btn primary">
                Sign up
              </Link>
            </>
          )}
          <Link href="/admin" className="admin-link">
            Admin <LockKeyhole size={14} />
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div>
          <div className="brand footer-brand">
            <BrandLogo inverted />
          </div>
          <p>
            Women Safety in the AI Era is an educational, research, and capacity-building
            initiative of {contactDetails.institute}. We are not an emergency response
            agency, police authority, legal service provider, or counselling organisation.
          </p>
          <div className="footer-contact">
            <a href={`mailto:${contactDetails.email}`}>
              <Mail
                size={13}
                style={{ display: "inline", marginRight: 5, verticalAlign: "-2px" }}
              />
              {contactDetails.email}
            </a>
            <a href={contactDetails.website} target="_blank" rel="noreferrer">
              {contactDetails.website.replace("https://", "")}
            </a>
          </div>
          <div className="footer-socials">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
              >
                <Icon size={18} />
                <span>{label}</span>
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <b>Programs &amp; Access</b>
          <Link href="/courses">Learning Modules</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/school-programme">Schools &amp; Colleges</Link>
          <Link href="/clubs/register">Join &amp; Register</Link>
          <Link href="/certificate">Certification</Link>
          <Link href="/support">Support Directory</Link>
          <Link href="/emergency">Emergency Help</Link>
        </div>
        <div className="footer-col">
          <b>Governance &amp; Trust</b>
          <span>No public victim profiles</span>
          <span>No intimate-image uploads</span>
          <span>Privacy-first by design</span>
          <Link href="/network">Expert &amp; Partner Network</Link>
          <Link href="/partnerships">Partnerships</Link>
          <Link href="/login">Learner Sign In</Link>
          <Link href="/admin">Admin Workspace</Link>
        </div>
      </footer>
    </div>
  );
}



function Emergency() {
  return (
    <Layout>
      <PageIntro
        kicker="Emergency help"
        title="Official contacts for urgent situations."
        lead="Use these public emergency and government contacts when you need immediate assistance or a formal public service. Women Safety in AI Era (Atlas AI Institute) is not an emergency response agency and cannot guarantee a response."
      />
      <section className="notice emergency-notice">
        <Siren />
        <div>
          <b>In immediate danger?</b>
          <span>
            Call 999. Do not wait for a website or referral pathway if you need
            emergency police, fire, or ambulance assistance.
          </span>
        </div>
      </section>
      <section className="content-wrap">
        <div className="source-note">
          <span className="verified-dot" /> Contacts below were checked against
          official Bangladesh Police or Police Headquarters pages on 06 Nov
          2026.
        </div>
        <div className="contact-list">
          {emergencyContacts.map((c) => (
            <article className="contact-card" key={c.name}>
              <div className="contact-icon">
                <Phone />
              </div>
              <div className="contact-main">
                <div className="contact-heading">
                  <div>
                    <p className="card-overline">{c.type}</p>
                    <h3>{c.name}</h3>
                    <p className="local-name">{c.localName}</p>
                  </div>
                  {c.number && (
                    <a className="number" href={`tel:${c.number}`}>
                      {c.number}
                    </a>
                  )}
                </div>
                <p>{c.description}</p>
                {c.email && (
                  <a className="email" href={`mailto:${c.email}`}>
                    {c.email}
                  </a>
                )}
                <div className="contact-meta">
                  <span>Hours: {c.hours}</span>
                  <span>Verified: {c.verifiedOn}</span>
                  <a href={c.source} target="_blank" rel="noreferrer">
                    {c.sourceLabel} <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="plain-band">
        <div>
          <p className="eyebrow">Important distinction</p>
          <h2>Emergency service is not the same as referral support.</h2>
        </div>
        <p>
          Calling an emergency number connects you to a public service. A
          directory listing or referral pathway may provide information or a next
          step, but it does not mean an organisation has accepted a referral or
          can respond immediately.
        </p>
      </section>
    </Layout>
  );
}

function PageIntro({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{kicker}</p>
      <h1>{title}</h1>
      <p>{lead}</p>
    </section>
  );
}

function Support() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [mode, setMode] = useState("All modes");
  const filtered = useMemo(
    () =>
      supportEntries.filter(
        (e) =>
          (!query ||
            `${e.name} ${e.category} ${e.description}`
              .toLowerCase()
              .includes(query.toLowerCase())) &&
          (category === "All categories" || e.category === category) &&
          (mode === "All modes" || e.mode === mode)
      ),
    [query, category, mode]
  );
  const cats = Array.from(new Set(supportEntries.map((e) => e.category)));
  return (
    <Layout>
      <PageIntro
        kicker="Find support"
        title="Start with the kind of help you need."
        lead="Search a structured directory of official and sample records. Every record carries its verification status; sample records are not referrals and should not be relied on."
      />
      <section className="content-wrap">
        <div className="directory-toolbar">
          <label className="search-box">
            <Search size={19} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cybercrime, legal aid, privacy…"
            />
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All categories</option>
            {cats.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option>All modes</option>
            <option>Online</option>
            <option>In-person</option>
          </select>
        </div>
        <div className="filter-row">
          <span>{filtered.length} records shown</span>
          <span>
            Filters: division · district · target group · age · language · fees{" "}
            <i>More filters coming in the next release</i>
          </span>
        </div>
        <div className="directory-list">
          {filtered.map((e) => (
            <article className="directory-card" key={e.id}>
              <div className="directory-status">
                <span
                  className={
                    e.status === "Verified" ? "status verified" : "status sample"
                  }
                >
                  {e.status === "Verified" ? (
                    <CheckCircle2 size={14} />
                  ) : (
                    <FileText size={14} />
                  )}
                  {e.status}
                </span>
                <span>{e.mode}</span>
              </div>
              <h3>{e.name}</h3>
              <p className="card-overline">
                {e.category} · {e.division} · {e.languages}
              </p>
              <p>{e.description}</p>
              <div className="directory-foot">
                <span>{e.note}</span>
                <Link href="/emergency" className="text-link">
                  View contacts <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="report-box">
          <div>
            <b>Found an incorrect directory detail?</b>
            <span>
              Public users cannot edit entries directly. Send a correction
              report to {contactDetails.email} so an administrator can review the
              source.
            </span>
          </div>
          <a
            href={`mailto:${contactDetails.email}?subject=Directory%20Correction%20Report`}
            className="button secondary"
          >
            Report information
          </a>
        </div>
      </section>
    </Layout>
  );
}

function Admin() {
  const { user, loading } = useAuth();
  const [authMessage, setAuthMessage] = useState<string | null>(null);

  if (loading)
    return (
      <Layout>
        <div className="loading-state">Checking secure access…</div>
      </Layout>
    );

  if (!user)
    return (
      <Layout>
        <section className="admin-gate">
          <LockKeyhole size={32} />
          <p className="eyebrow">Restricted administration</p>
          <h1>Manage Women Safety in AI Era content with care.</h1>
          <p>
            The CMS is for authorised Atlas AI Institute administrators and
            verified content reviewers. Sign in with your authorised reviewer
            account to continue.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/login?redirect=/admin" className="button primary">
              Sign in with email <ArrowRight size={17} />
            </Link>
            {isLoginConfigured() && (
              <button
                className="button secondary"
                onClick={() => {
                  if (!startLogin()) {
                    setAuthMessage("OAuth sign-in is unavailable.");
                  }
                }}
              >
                SSO Sign in <ArrowRight size={17} />
              </button>
            )}
          </div>
          {authMessage && <p className="error-text">{authMessage}</p>}
          <small>Public safety information never requires an account.</small>
        </section>
      </Layout>
    );

  return (
    <Layout>
      <section className="admin-dashboard">
        <div className="admin-heading">
          <div>
            <p className="eyebrow">Administration</p>
            <h1>Good to see you, {user.name || "reviewer"}.</h1>
            <p>
              Women Safety in AI Era · Atlas AI Institute content and
              verification workspace.
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href="/admin/certificates" className="button secondary">
              Certificate audit
            </Link>
            <Link href="/admin/phase2" className="button secondary">
              Phase 2 reviews
            </Link>
            <button
              className="button primary"
              onClick={() => location.reload()}
            >
              Refresh
            </button>
          </div>
        </div>
        <div className="admin-stats">
          <Stat n="5" label="Official emergency contacts" />
          <Stat n="2" label="Verified directory records" />
          <Stat n="2" label="Sample records to replace" />
          <Stat n="30 days" label="Default review interval" />
        </div>
        <div className="admin-panels">
          <div className="admin-panel">
            <div className="panel-head">
              <h3>Directory review queue</h3>
              <span>Phase 1</span>
            </div>
            <p>
              Records are never presented as referral partners unless a formal
              agreement exists. Verification history and source URLs belong on
              every organisation record.
            </p>
            <Link href="/admin/phase2" className="text-link">
              Open verification workspace <ArrowRight size={14} />
            </Link>
          </div>
          <div className="admin-panel">
            <div className="panel-head">
              <h3>Safety checklist</h3>
              <CheckCircle2 className="ok" />
            </div>
            <ul>
              <li>Role-based access enabled</li>
              <li>Public content separated from safeguarding data</li>
              <li>No intimate-image uploads</li>
              <li>Independent security review still required</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="stat">
      <strong>{n}</strong>
      <span>{label}</span>
    </div>
  );
}

function NetworkPhase2() {
  const mutation = trpc.professionals.submitApplication.useMutation();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    designation: "",
    organisation: "",
    expertise: "",
    geographicCoverage: "",
    languages: "",
    officialContact: "",
  });
  const update = (key: string, value: string) =>
    setForm((v) => ({ ...v, [key]: value }));

  return (
    <Layout>
      <PageIntro
        kicker="About the Initiative · Atlas AI Institute"
        title="About Women Safety in the AI Era."
        lead="Women Safety in the AI Era is an educational, research, awareness, and safety-navigation initiative established by Atlas AI Institute. The initiative equips women, youth learners, educators, and institutional partners with actionable knowledge to address emerging artificial intelligence risks—including AI-generated abuse, non-consensual deepfakes, synthetic media manipulation, digital impersonation, online harassment, cyberstalking, and privacy violations. By integrating practical digital safety training, responsible AI literacy, and structured referral navigation, the program empowers women and girls to participate safely, securely, and confidently in an increasingly AI-powered digital world."
      />
      <section className="content-wrap">
        <div className="network-split">
          <div className="future-grid single-column">
            <div className="future-card">
              <span className="icon-disc">
                <ShieldCheck />
              </span>
              <h3>Mission, vision, and core digital safety focus</h3>
              <p>
                Our mission is to advance women&apos;s digital safety, applied
                AI literacy, and responsible technology education through
                structured, evidence-grounded learning and safeguarding-first
                public navigation. Our vision is an inclusive, equitable digital
                society where every woman and girl can learn, work, communicate,
                and lead online without fear of AI-generated abuse,
                non-consensual deepfakes, coordinated harassment, algorithmic
                exploitation, or privacy violations. We focus on transforming
                complex artificial intelligence dynamics into practical personal
                defenses, institutional safeguards, and trusted community
                support.
              </p>
            </div>
            <div className="future-card">
              <span className="icon-disc">
                <FileText />
              </span>
              <h3>Educational programmes, awareness, and referral navigation</h3>
              <p>
                Our active educational programming includes self-paced
                Foundation and Intermediate learning modules, comprehensive
                in-page reading guides, and structured institutional onboarding
                for schools and colleges. To facilitate reliable support, the
                platform provides an independently cataloged directory that
                clearly distinguishes verified public helplines from illustrative
                sample records. Looking forward, proposed future
                initiatives—such as regional educator fellowships, institutional
                safety club cohorts, and multi-language curriculum
                localizations—are designed to scale systematically through
                dedicated grant funding and strategic institutional
                partnerships.
              </p>
            </div>
            <div className="future-card">
              <span className="icon-disc">
                <Users />
              </span>
              <h3>Expert and institutional network: verification before visibility</h3>
              <p>
                Through Phase 2, Women Safety in the AI Era operates a verified
                institutional network to connect learners, educators, and
                community organizations with qualified specialists. All
                professional and institutional applications undergo thorough
                administrative review to confirm organizational affiliation,
                professional credentials, subject-matter expertise, geographic
                coverage, language capability, and official contact details.
                Publication of any profile requires prior administrative
                validation and explicit written consent. Submitting an
                application initiates this formal review process and does not
                guarantee approval or public listing.
              </p>
            </div>
            <div className="future-card">
              <span className="icon-disc">
                <LockKeyhole />
              </span>
              <h3>Safeguarding, privacy, and honest service boundaries</h3>
              <p>
                Safety and ethics govern every dimension of this initiative. We
                strictly enforce core safeguarding boundaries: no public
                survivor profiles, no collection or uploading of intimate or
                sensitive images, no private messaging with trauma survivors,
                and no crisis case intake through professional applications. All
                platform interactions follow privacy-first data handling
                principles. Atlas AI Institute and the Women Safety in the AI
                Era initiative are dedicated to education, research, and referral
                navigation; we do not provide emergency response, police
                intervention, legal representation, or clinical psychological
                counseling.
              </p>
            </div>
            <div className="future-card">
              <span className="icon-disc">
                <Globe2 />
              </span>
              <h3>Potential alignment with SDGs 4, 5, 9, and 16</h3>
              <p>
                The initiative&apos;s educational curricula, institutional
                onboarding framework, and transparent referral mechanisms are
                designed to support global sustainable development objectives:
                advancing inclusive, quality digital education (SDG 4); promoting
                gender equality and women&apos;s empowerment by combating
                technology-facilitated gender-based violence (SDG 5); fostering
                responsible, human-centered technological innovation and digital
                resilience (SDG 9); and supporting accountable safeguarding
                practices and source-verified public resources (SDG 16). This
                conceptual alignment reflects programmatic intent and does not
                imply official United Nations accreditation, partnership, or
                endorsement.
              </p>
            </div>
            <div className="future-card">
              <span className="icon-disc">
                <Mail />
              </span>
              <h3>Collaboration, grants, and institutional contact</h3>
              <p>
                Atlas AI Institute actively welcomes collaboration with
                international foundations, grant-making organizations,
                universities, academic researchers, civil society coalitions,
                women&apos;s rights organizations, and corporate CSR/ESG
                initiatives. We invite engagement across programmatic grant
                funding, academic and technical research cooperation, curriculum
                localization, educator training partnerships, and institutional
                safety club sponsorships. To explore formal collaboration,
                request programmatic documentation, or discuss grant
                partnerships, contact our team at {contactDetails.email}.
              </p>
            </div>
          </div>
          <div className="form-card compact">
            <div className="form-heading">
              <div>
                <p className="eyebrow">Expert &amp; institutional application</p>
                <h2>Request a verification review</h2>
              </div>
              <Users />
            </div>
            {sent ? (
              <div className="success-state">
                <CheckCircle2 />
                <h3>Application queued for verification.</h3>
                <p>
                  Your application has been received and is queued for
                  verification. An authorized Atlas AI Institute reviewer will
                  inspect your credentials, institutional affiliation, official
                  contact details, and explicit consent before any information is
                  approved or published.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  mutation.mutate(
                    { ...form, consentToPublish: true },
                    { onSuccess: () => setSent(true) }
                  );
                }}
              >
                <div className="form-grid">
                  <label>
                    Full name
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                  </label>
                  <label>
                    Designation
                    <input
                      required
                      value={form.designation}
                      onChange={(e) => update("designation", e.target.value)}
                    />
                  </label>
                  <label>
                    Organisation
                    <input
                      required
                      value={form.organisation}
                      onChange={(e) => update("organisation", e.target.value)}
                    />
                  </label>
                  <label>
                    Languages
                    <input
                      required
                      value={form.languages}
                      onChange={(e) => update("languages", e.target.value)}
                      placeholder="English, Bangla"
                    />
                  </label>
                  <label className="wide">
                    Areas of expertise
                    <textarea
                      required
                      value={form.expertise}
                      onChange={(e) => update("expertise", e.target.value)}
                      placeholder="Describe relevant digital safety, legal, educational, or AI literacy expertise"
                    />
                  </label>
                  <label>
                    Geographic coverage
                    <input
                      required
                      value={form.geographicCoverage}
                      onChange={(e) =>
                        update("geographicCoverage", e.target.value)
                      }
                    />
                  </label>
                  <label>
                    Official professional contact
                    <input
                      required
                      value={form.officialContact}
                      onChange={(e) =>
                        update("officialContact", e.target.value)
                      }
                    />
                  </label>
                </div>
                <label className="consent">
                  <input required type="checkbox" /> I provide explicit consent
                  for profile review and potential publication following formal
                  Atlas AI Institute verification. I understand that submitting
                  this application does not guarantee approval, endorsement, or
                  directory listing.
                </label>
                <button className="button primary" disabled={mutation.isPending}>
                  {mutation.isPending ? "Submitting…" : "Request verification"}{" "}
                  <ArrowRight size={16} />
                </button>
                {mutation.error && (
                  <p className="error-text">
                    We could not submit this application. Please try again
                    later.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function AdminPhase2() {
  const { user, loading } = useAuth();
  const schools = trpc.schools.pending.useQuery(undefined, {
    enabled: Boolean(user),
  });
  const individuals = trpc.individuals.pending.useQuery(undefined, {
    enabled: Boolean(user),
  });
  const professionals = trpc.professionals.pending.useQuery(undefined, {
    enabled: Boolean(user),
  });
  const schoolStatus = trpc.schools.updateStatus.useMutation({
    onSuccess: () => schools.refetch(),
  });
  const individualStatus = trpc.individuals.updateStatus.useMutation({
    onSuccess: () => individuals.refetch(),
  });
  const professionalStatus = trpc.professionals.updateStatus.useMutation({
    onSuccess: () => professionals.refetch(),
  });

  if (loading)
    return (
      <Layout>
        <div className="loading-state">Checking secure access…</div>
      </Layout>
    );

  if (!user)
    return (
      <Layout>
        <section className="admin-gate">
          <LockKeyhole size={32} />
          <p className="eyebrow">Restricted review workspace</p>
          <h1>Authorised reviewers only.</h1>
          <p>
            Sign in through the admin entry point to review Phase 2
            applications.
          </p>
          <Link href="/admin" className="button primary">
            Go to admin sign in <ArrowRight size={17} />
          </Link>
        </section>
      </Layout>
    );

  return (
    <Layout>
      <section className="admin-dashboard">
        <div className="admin-heading">
          <div>
            <p className="eyebrow">Phase 2 review workspace</p>
            <h1>Verify before visibility.</h1>
            <p>
              Pending school, college, individual, and professional applications
              stay private until an authorised reviewer records a decision.
            </p>
          </div>
          <Link href="/admin" className="button secondary">
            Back to overview
          </Link>
        </div>
        <div className="review-grid">
          <div className="admin-panel">
            <div className="panel-head">
              <h3>School &amp; College registration queue</h3>
              <span>{schools.data?.length ?? 0} pending records</span>
            </div>
            {schools.data?.length ? (
              schools.data.map((s: any) => (
                <div className="review-row" key={s.id}>
                  <div>
                    <b>{s.name}</b>
                    <span>
                      {s.institutionType || "School"} ·{" "}
                      {s.district || "District not supplied"} · {s.contactEmail}
                    </span>
                  </div>
                  <select
                    value={s.approvalStatus}
                    onChange={(e) =>
                      schoolStatus.mutate({
                        id: s.id,
                        approvalStatus: e.target.value as any,
                      })
                    }
                  >
                    <option>Pending Approval</option>
                    <option>Verified School</option>
                    <option>Suspended</option>
                  </select>
                </div>
              ))
            ) : (
              <p className="empty-state">
                No school or college requests yet. New registrations will appear
                here for institutional review.
              </p>
            )}
          </div>
          <div className="admin-panel">
            <div className="panel-head">
              <h3>Individual registrations</h3>
              <span>{individuals.data?.length ?? 0} pending records</span>
            </div>
            {individuals.data?.length ? (
              individuals.data.map((ind: any) => (
                <div className="review-row" key={ind.id}>
                  <div>
                    <b>{ind.fullName}</b>
                    <span>
                      {ind.roleType} · {ind.district || "Location optional"} ·{" "}
                      {ind.email}
                    </span>
                  </div>
                  <select
                    value={ind.status}
                    onChange={(e) =>
                      individualStatus.mutate({
                        id: ind.id,
                        status: e.target.value as any,
                      })
                    }
                  >
                    <option>Pending Review</option>
                    <option>Approved Member</option>
                    <option>Suspended</option>
                  </select>
                </div>
              ))
            ) : (
              <p className="empty-state">
                No individual registrations yet. Community member sign-ups stay
                private.
              </p>
            )}
          </div>
          <div className="admin-panel">
            <div className="panel-head">
              <h3>Professional applications</h3>
              <span>{professionals.data?.length ?? 0} pending records</span>
            </div>
            {professionals.data?.length ? (
              professionals.data.map((p: any) => (
                <div className="review-row" key={p.id}>
                  <div>
                    <b>{p.name}</b>
                    <span>
                      {p.designation} · {p.organisation}
                    </span>
                  </div>
                  <select
                    value={p.status}
                    onChange={(e) =>
                      professionalStatus.mutate({
                        id: p.id,
                        status: e.target.value as any,
                      })
                    }
                  >
                    <option>Pending Verification</option>
                    <option>Verified Expert</option>
                    <option>Institutional Representative</option>
                    <option>Suspended</option>
                  </select>
                </div>
              ))
            ) : (
              <p className="empty-state">
                No professional applications yet. Profiles remain unpublished
                until consent and credentials are checked.
              </p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default function App() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><HomePage /></Layout>} />
      <Route path="/support" component={Support} />
      <Route path="/emergency" component={Emergency} />
      <Route path="/resources" component={() => <Layout><Resources /></Layout>} />
      <Route path="/courses" component={() => <Layout><Course /></Layout>} />
      <Route
        path="/school-programme"
        component={() => <Layout><SchoolProgramme /></Layout>}
      />
      <Route
        path="/certificate"
        component={() => <Layout><Certificate /></Layout>}
      />
      <Route
        path="/verify/:id"
        component={() => <Layout><Certificate verification /></Layout>}
      />
      <Route
        path="/clubs/register"
        component={() => <Layout><JoinUsRegistration /></Layout>}
      />
      <Route
        path="/join"
        component={() => <Layout><JoinUsRegistration /></Layout>}
      />
      <Route
        path="/clubs"
        component={() => <Layout><ClubsDirectory /></Layout>}
      />
      <Route path="/partnerships" component={() => <Layout><Partnerships /></Layout>} />
      <Route path="/about" component={NetworkPhase2} />
      <Route path="/network/apply" component={NetworkPhase2} />
      <Route path="/network" component={NetworkPhase2} />
      <Route path="/login" component={() => <Layout><AuthPage defaultMode="login" /></Layout>} />
      <Route path="/signup" component={() => <Layout><AuthPage defaultMode="signup" /></Layout>} />
      <Route path="/register" component={() => <Layout><AuthPage defaultMode="signup" /></Layout>} />
      <Route path="/auth" component={() => <Layout><AuthPage defaultMode="login" /></Layout>} />
      <Route path="/admin/certificates" component={CertificateAudit} />
      <Route path="/admin/phase2" component={AdminPhase2} />
      <Route path="/admin" component={Admin} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}
