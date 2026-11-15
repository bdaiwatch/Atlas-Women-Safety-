import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  GraduationCap,
  Handshake,
  Search,
  ShieldCheck,
  Siren,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import { GeneralContactForm } from "../components/GeneralContactForm";
import "../homeEditorial.css";

const CHALLENGE_CARDS = [
  {
    number: "01",
    title: "AI-Enabled Harassment & Deepfake Abuse",
    description:
      "Generative image, audio, and video models lower the cost of producing non-consensual synthetic intimate imagery, voice cloning, and fabricated defamation—disproportionately targeting women students, journalists, professionals, and civic leaders.",
  },
  {
    number: "02",
    title: "Digital Impersonation & Online Exploitation",
    description:
      "Fake accounts, cloned identities, coordinated doxxing, and AI-assisted sextortion coerce and silence women online while outpacing conventional moderation and local awareness efforts.",
  },
  {
    number: "03",
    title: "Privacy Violations, Cyberstalking & Algorithmic Bias",
    description:
      "Opaque data collection, location-tracking abuse, and algorithmic amplification compound offline harm, while automated moderation frequently underperforms across non-English contexts.",
  },
] as const;

const STRATEGIC_PILLARS = [
  {
    number: "01",
    title: "AI & Digital Safety Education",
    description:
      "Structured, bilingual Foundation and Intermediate curricula that translate evolving digital threats into clear, step-by-step protective practices.",
  },
  {
    number: "02",
    title: "Deepfake and Image-Based Abuse Awareness",
    description:
      "Practical training on recognizing synthetic media, halting image-based blackmail escalation, and documenting digital evidence safely.",
  },
  {
    number: "03",
    title: "Digital Privacy and Cybersecurity",
    description:
      "Everyday account hardening, metadata hygiene, permission auditing, and personal boundary controls across social and messaging platforms.",
  },
  {
    number: "04",
    title: "Responsible AI Literacy",
    description:
      "Foundational literacy on how generative models, deepfakes, recommendation feeds, and algorithmic bias work—empowering informed digital citizenship.",
  },
  {
    number: "05",
    title: "Women's Digital Empowerment",
    description:
      "Equipping women and girls not only to defend against harm, but to participate confidently in online education, careers, research, and leadership.",
  },
  {
    number: "06",
    title: "Community Awareness and Advocacy",
    description:
      "Partnering with schools, colleges, faculty advisers, and community organizations to foster ethical norms and transparent local referral awareness.",
  },
] as const;

const THEORY_OF_CHANGE_STEPS = [
  {
    stage: "01 · Inputs & Foundations",
    title: "Evidence-Led Curriculum & Safeguards",
    description:
      "Bilingual educational modules, field manuals, public safety directories, and privacy-first platform rules developed with non-disclosure safeguarding at their core.",
  },
  {
    stage: "02 · Activities & Delivery",
    title: "Structured Learning & Campus Engagement",
    description:
      "Self-paced sequential modules with chapter exams, school and college safety club onboarding, educator briefings, and open reference guides.",
  },
  {
    stage: "03 · Direct Outcomes",
    title: "Measurable Skill & Safety Readiness",
    description:
      "Learners, educators, and communities gain verifiable skills to detect AI-driven manipulation, secure accounts, and navigate verified reporting channels.",
  },
  {
    stage: "04 · Long-Term Impact",
    title: "Inclusive Digital Participation",
    description:
      "Reduced vulnerability to technology-facilitated harm and safer, more equitable participation by women and girls in an AI-powered society.",
  },
] as const;

const SDG_ALIGNMENTS = [
  {
    code: "SDG 5 · Gender Equality",
    title: "Preventing Technology-Facilitated Gender-Based Harm",
    description:
      "Designed to contribute toward safer online participation, gender-responsive technology literacy, and equitable digital access aligned with global commitments to empower women and girls through ICT.",
  },
  {
    code: "SDG 4 · Quality Education",
    title: "Inclusive, Practical AI & Digital Citizenship Learning",
    description:
      "Delivers accessible, competency-checked curricula and open educational guides that help female learners, teachers, and academic campuses build applied digital literacy.",
  },
  {
    code: "SDG 9 · Industry, Innovation & Infrastructure",
    title: "Advancing Human-Centered, Responsible AI Adoption",
    description:
      "Strengthens societal readiness for emerging AI tools by addressing the trust, safety, and algorithmic literacy gaps that exclude marginalized users from innovation.",
  },
  {
    code: "SDG 16 · Peace, Justice & Strong Institutions",
    title: "Accountable Safeguarding & Transparent Navigation",
    description:
      "Encourages clear institutional safeguarding standards, source-attributed public helpline navigation, and lawful evidence literacy within schools and communities.",
  },
] as const;

const PROPOSED_IMPACT_INDICATORS = [
  {
    tag: "Proposed Pilot Target",
    value: "5,000+",
    label: "Learners Trained",
    detail:
      "Target reach for women and youth learners completing structured Foundation or Intermediate tracks (Year 1–2 pilot horizon).",
  },
  {
    tag: "Proposed Pilot Target",
    value: "250+",
    label: "Educators & Facilitators Engaged",
    detail:
      "Teachers, college faculty advisers, and community mentors trained in safeguarding-led digital safety instruction.",
  },
  {
    tag: "Proposed Pilot Target",
    value: "50+",
    label: "Institutional Chapters Reached",
    detail:
      "Schools, colleges, and community hubs piloting structured workshops and student safety clubs.",
  },
  {
    tag: "Proposed Evaluation Metric",
    value: "100%",
    label: "Assessment-Checked Progression",
    detail:
      "Chapter-by-chapter competency verification across 70 structured chapter exams prior to final certification.",
  },
] as const;

export default function Home() {
  return (
    <div className="home-shell">
      {/* 1. HERO SECTION */}
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero-copy">
          <p className="home-hero-eyebrow">
            An Atlas AI Institute Initiative · Education, Research &amp;
            Capacity Building
          </p>
          <h1 id="home-hero-title">Women Safety in the AI Era</h1>
          <p className="home-hero-subtitle">
            Building a Safer, More Inclusive Digital Future for Every Woman.
          </p>
          <p className="home-hero-mission">
            An international educational, awareness, research, and
            capacity-building initiative advancing women&apos;s safety, digital
            empowerment, and responsible participation in an AI-powered world—through
            bilingual structured learning, educator mobilization, and
            safeguarding-led institutional collaboration.
          </p>

          <div className="home-hero-actions">
            <a href="#program" className="button primary">
              Explore the Program <ArrowRight size={17} />
            </a>
            <a href="#funding" className="button secondary">
              Partner With Us <Handshake size={17} />
            </a>
          </div>

          <div className="home-hero-meta">
            <span>
              <ShieldCheck size={15} /> Privacy-first architecture · No intimate
              image collection
            </span>
            <span>
              <BookOpen size={15} /> Bilingual Foundation &amp; Intermediate tracks
            </span>
            <span>
              <Compass size={15} /> Source-attributed public helpline navigation
            </span>
          </div>
        </div>

        <aside className="home-hero-rail" aria-label="Program access pathways">
          <div className="home-hero-rail-head">
            <p>Program &amp; Safety Pathways</p>
            <strong>Direct access without barriers</strong>
          </div>

          <Link href="/courses" className="home-rail-link">
            <span className="home-rail-icon">
              <GraduationCap size={18} />
            </span>
            <span>
              <b>Learning Modules &amp; Certification</b>
              <small>
                Preview all Foundation &amp; Intermediate curricula; sign up to
                unlock Module 01 and chapter exams
              </small>
            </span>
            <ArrowRight size={16} />
          </Link>

          <Link href="/clubs/register" className="home-rail-link">
            <span className="home-rail-icon">
              <Users size={18} />
            </span>
            <span>
              <b>School, College &amp; Individual Registration</b>
              <small>
                Join institutional safety clubs or register as an educator,
                student, or community advocate
              </small>
            </span>
            <ArrowRight size={16} />
          </Link>

          <Link href="/support" className="home-rail-link">
            <span className="home-rail-icon">
              <Search size={18} />
            </span>
            <span>
              <b>Support &amp; Referral Directory</b>
              <small>
                Structured public directory distinguishing verified contacts
                from pending or illustrative entries
              </small>
            </span>
            <ArrowRight size={16} />
          </Link>

          <Link href="/emergency" className="home-rail-link is-urgent">
            <span className="home-rail-icon">
              <Siren size={18} />
            </span>
            <span>
              <b>Official Emergency Helplines</b>
              <small>
                Direct public emergency numbers clearly separated from
                educational referrals
              </small>
            </span>
            <ArrowRight size={16} />
          </Link>

          <div className="home-rail-note">
            Public safety guides and emergency listings require no registration.
            Atlas AI Institute is an educational and research initiative—not a
            law enforcement authority or crisis response agency.
          </div>
        </aside>
      </section>

      {/* 2. THE GLOBAL CHALLENGE */}
      <section
        id="challenge"
        className="home-section"
        aria-labelledby="challenge-heading"
      >
        <div className="section-index-row">
          <p className="section-kicker-label">01 · The Global Challenge</p>
          <div>
            <div className="section-head-stack">
              <h2 id="challenge-heading">
                Rapid AI adoption is reshaping digital risks faster than
                protective education can keep pace.
              </h2>
              <p className="section-lead">
                Artificial intelligence tools have transformed how information is
                created, distributed, and targeted. Across both emerging and
                established digital economies, women and girls face escalating
                technology-facilitated harms that threaten personal safety,
                academic continuity, economic opportunity, and civic voice.
              </p>
            </div>

            <div className="challenge-grid">
              {CHALLENGE_CARDS.map((item) => (
                <article className="challenge-card" key={item.number}>
                  <span className="challenge-card-num">
                    Risk Vector {item.number}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR MISSION & ABOUT */}
      <section
        id="about"
        className="home-section"
        aria-labelledby="mission-heading"
      >
        <div className="section-index-row">
          <p className="section-kicker-label">02 · Our Mission</p>
          <div>
            <div className="section-head-stack">
              <h2 id="mission-heading">
                Digital empowerment requires both practical protection and AI
                literacy.
              </h2>
              <p className="section-lead">
                Housed under Atlas AI Institute, Women Safety in the AI Era
                addresses an urgent structural gap: safety interventions often
                ignore how modern AI systems operate, while technology literacy
                initiatives rarely center women&apos;s lived digital risks. Our
                mandate integrates both into accessible, evidence-grounded
                education and institutional readiness.
              </p>
            </div>

            <div className="mission-grid">
              <div className="mission-block">
                <h3>Why Women&apos;s Safety &amp; Digital Literacy Matter</h3>
                <p>
                  When online abuse, deepfake threats, or privacy breaches force
                  women out of digital classrooms, workplaces, and public
                  discourse, society forfeits equal participation. Equipping
                  learners with clear operational defense transforms fear into
                  informed agency.
                </p>
              </div>
              <div className="mission-block">
                <h3>Why Responsible AI Awareness Matters</h3>
                <p>
                  Understanding synthetic media, prompt-based deception, data
                  footprints, and algorithmic bias enables women, educators, and
                  institutions to critically evaluate AI outputs, demand safer
                  platform practices, and participate in shaping inclusive
                  technology norms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROGRAM */}
      <section
        id="program"
        className="home-section is-tinted"
        aria-labelledby="program-heading"
      >
        <div className="home-section-inner section-index-row">
          <p className="section-kicker-label">03 · Our Program</p>
          <div>
            <div className="section-head-stack">
              <h2 id="program-heading">
                A multi-tier educational, institutional, and resource ecosystem.
              </h2>
              <p className="section-lead">
                Rather than offering a single standalone workshop, the program
                combines progressive self-paced coursework, applied AI literacy
                manuals, campus safety club frameworks, open-access public
                guides, and formal competency certification.
              </p>
            </div>

            <div className="program-components-grid">
              <article className="program-component-card">
                <div>
                  <p className="component-meta">
                    Level 1 · Foundation Track · 8 Modules / 40 Chapters
                  </p>
                  <h3>Core Digital Safety &amp; Rights Curriculum</h3>
                  <p>
                    Accessible bilingual instruction covering privacy settings,
                    synthetic media awareness, online harassment response,
                    consent, evidence documentation, and public support pathways—each
                    chapter paired with a 3-question mastery check.
                  </p>
                </div>
                <Link href="/courses" className="text-link">
                  Inspect Foundation Syllabus <ArrowRight size={15} />
                </Link>
              </article>

              <article className="program-component-card">
                <div>
                  <p className="component-meta">
                    Level 2 · Intermediate Manual · 10 Modules / 30 Chapters
                  </p>
                  <h3>70% Women Safety + 30% Applied AI Literacy</h3>
                  <p>
                    Advanced structured field manuals pairing threat modeling,
                    deepfake containment, anti-doxxing, and financial sextortion
                    defense with practical instruction on LLM risks, diffusion
                    forensics, algorithmic bias, and SIFT verification.
                  </p>
                </div>
                <Link href="/courses?level=intermediate" className="text-link">
                  Inspect Intermediate Manual <ArrowRight size={15} />
                </Link>
              </article>

              <article className="program-component-card">
                <div>
                  <p className="component-meta">
                    Campus &amp; Community Capacity Building
                  </p>
                  <h3>School, College &amp; Facilitator Networks</h3>
                  <p>
                    Structured onboarding pathways for secondary schools,
                    colleges, faculty coordinators, and individual educators to
                    host safeguarding-compliant digital safety clubs and peer
                    learning cohorts.
                  </p>
                </div>
                <Link href="/clubs/register" className="text-link">
                  Explore Institutional Onboarding <ArrowRight size={15} />
                </Link>
              </article>

              <article className="program-component-card">
                <div>
                  <p className="component-meta">
                    Open Knowledge &amp; Proctored Assessment
                  </p>
                  <h3>Field Guides, Directory Navigation &amp; Verification</h3>
                  <p>
                    In-page bilingual toolkits, verified public emergency
                    directories, 30-MCQ plus written final assessments (70% pass
                    threshold), and publicly auditable completion certificates.
                  </p>
                </div>
                <Link href="/resources" className="text-link">
                  Browse Open Resources <ArrowRight size={15} />
                </Link>
              </article>
            </div>

            <div className="beneficiaries-strip">
              <strong>Intended Beneficiaries</strong>
              <p>
                Young women and university learners, secondary school and college
                students, teachers and academic coordinators, parents and
                guardians, grassroots women&apos;s rights practitioners, and
                institutional safeguarding leads across South Asia and
                comparable emerging digital contexts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR STRATEGIC PILLARS */}
      <section
        id="pillars"
        className="home-section"
        aria-labelledby="pillars-heading"
      >
        <div className="section-index-row">
          <p className="section-kicker-label">04 · Strategic Pillars</p>
          <div>
            <div className="section-head-stack">
              <h2 id="pillars-heading">
                Six core domains guiding education, outreach, and research.
              </h2>
              <p className="section-lead">
                Every curriculum update, institutional toolkit, and community
                partnership aligns with six interdependent areas of practice.
              </p>
            </div>

            <div className="pillars-grid">
              {STRATEGIC_PILLARS.map((pillar) => (
                <article className="pillar-card" key={pillar.number}>
                  <span className="pillar-num">{pillar.number}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR THEORY OF CHANGE */}
      <section
        id="theory-of-change"
        className="home-section is-tinted"
        aria-labelledby="toc-heading"
      >
        <div className="home-section-inner section-index-row">
          <p className="section-kicker-label">05 · Theory of Change</p>
          <div>
            <div className="section-head-stack">
              <h2 id="toc-heading">
                Connecting structured education and institutional coordination to
                safer digital participation.
              </h2>
              <p className="section-lead">
                If women, students, and educators gain accessible AI literacy
                and operational safety skills—supported by safeguarded academic
                environments and clear referral pathways—they are significantly
                better positioned to prevent, contain, and report AI-era harm
                without retreating from digital life.
              </p>
            </div>

            <div className="toc-grid">
              {THEORY_OF_CHANGE_STEPS.map((step) => (
                <article className="toc-step" key={step.stage}>
                  <span className="toc-step-label">{step.stage}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. GLOBAL DEVELOPMENT ALIGNMENT */}
      <section
        id="impact"
        className="home-section is-navy"
        aria-labelledby="sdg-heading"
      >
        <div className="home-section-inner section-index-row">
          <p className="section-kicker-label">
            06 · Global Development Alignment
          </p>
          <div>
            <div className="section-head-stack">
              <h2 id="sdg-heading">
                Designed to contribute to the UN Sustainable Development Goals.
              </h2>
              <p className="section-lead">
                The program&apos;s educational architecture and safeguarding model
                align with four foundational Sustainable Development Goals. Note:
                SDG alignment reflects programmatic design intent and does not
                imply formal United Nations endorsement or institutional
                affiliation.
              </p>
            </div>

            <div className="sdg-grid">
              {SDG_ALIGNMENTS.map((sdg) => (
                <article className="sdg-card" key={sdg.code}>
                  <span className="sdg-code">{sdg.code}</span>
                  <h3>{sdg.title}</h3>
                  <p>{sdg.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. EXPECTED IMPACT & EVALUATION */}
      <section
        id="expected-impact"
        className="home-section"
        aria-labelledby="expected-impact-heading"
      >
        <div className="section-index-row">
          <p className="section-kicker-label">
            07 · Expected Impact &amp; Evaluation
          </p>
          <div>
            <div className="section-head-stack">
              <h2 id="expected-impact-heading">
                Proposed pilot targets and transparent measurement standards.
              </h2>
              <p className="section-lead">
                Grant-supported implementation will be tracked through
                competency assessments, educator participation, and institutional
                safeguarding reviews rather than vanity page-view figures.
              </p>
            </div>

            <div className="impact-disclaimer" role="note">
              <strong>Credibility &amp; Baseline Notice:</strong> The indicators
              below represent <strong>proposed pilot targets</strong> for funded
              program implementation (not completed or achieved historical
              results). Verified annual reach figures will be published only upon
              documented program delivery and audit.
            </div>

            <div className="impact-metrics-grid">
              {PROPOSED_IMPACT_INDICATORS.map((metric) => (
                <article className="impact-metric-card" key={metric.label}>
                  <span className="impact-metric-tag">{metric.tag}</span>
                  <span className="impact-metric-value">{metric.value}</span>
                  <h3>{metric.label}</h3>
                  <p>{metric.detail}</p>
                </article>
              ))}
            </div>

            <div className="evaluation-row">
              <strong>Monitoring &amp; Evaluation Plan</strong>
              <p>
                Progress is evaluated through pre- and post-training knowledge
                checks, per-chapter exam pass benchmarks, module completion
                analytics, faculty feedback cycles, and independent safeguarding
                compliance reviews. Data is aggregated anonymously—no personal
                case histories or victim disclosures are ever recorded as impact
                metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY PARTNER WITH US */}
      <section
        id="partnerships"
        className="home-section is-tinted"
        aria-labelledby="partner-why-heading"
      >
        <div className="home-section-inner section-index-row">
          <p className="section-kicker-label">08 · Why Partner With Us</p>
          <div>
            <div className="section-head-stack">
              <h2 id="partner-why-heading">
                Built for institutional rigor across philanthropy, academia,
                civil society, and technology.
              </h2>
              <p className="section-lead">
                Organizations seeking high-integrity partners in women&apos;s
                digital safety often face fragmented workshops without clear
                safeguarding or curriculum continuity. Atlas AI Institute provides
                an auditable educational framework ready for joint deployment.
              </p>
            </div>

            <div className="partner-audience-grid">
              <article className="partner-card">
                <h3>International Foundations &amp; Development Agencies</h3>
                <p>
                  Invest in a bilingual, replicable curriculum backed by a clear
                  Theory of Change, measurable chapter-level learning
                  verification, and strict child and adult safeguarding built
                  into platform code.
                </p>
              </article>

              <article className="partner-card">
                <h3>Corporate CSR &amp; ESG Programs</h3>
                <p>
                  Advance concrete gender-inclusive STEM readiness, workplace
                  digital safety, and responsible AI literacy initiatives with
                  transparent cohort reporting and verifiable certification.
                </p>
              </article>

              <article className="partner-card">
                <h3>Universities, Colleges &amp; Schools</h3>
                <p>
                  Deploy structured self-paced courses and campus safety clubs
                  backed by faculty coordination protocols, 70+ applied chapter
                  assessments, and non-disclosure learner rules.
                </p>
              </article>

              <article className="partner-card">
                <h3>Women&apos;s Rights, Digital Rights &amp; AI Safety Orgs</h3>
                <p>
                  Collaborate on contextual threat research, local language
                  deepfake defense guides, and vetted referral directory mapping
                  without duplicating existing frontline crisis infrastructure.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FUNDING & INSTITUTIONAL PARTNERSHIPS */}
      <section
        id="funding"
        className="home-section"
        aria-labelledby="funding-heading"
      >
        <div className="section-index-row">
          <p className="section-kicker-label">
            09 · Funding &amp; Institutional Partnerships
          </p>
          <div>
            <div className="section-head-stack">
              <h2 id="funding-heading">
                Structured investment pathways to scale safe digital education.
              </h2>
              <p className="section-lead">
                Atlas AI Institute welcomes grant funding, institutional
                sponsorship, applied research collaboration, and implementation
                partnerships to expand curriculum delivery, educator training,
                and community outreach.
              </p>
            </div>

            <div className="funding-split">
              <div className="funding-panel">
                <h3>How Funding Supports Implementation</h3>
                <ul className="funding-list">
                  <li>
                    <CheckCircle2 size={17} />
                    <span>
                      <strong>Curriculum Localization &amp; Platform Access:</strong>{" "}
                      Maintaining open-access bilingual modules, accessibility
                      improvements, and regional language expansion.
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={17} />
                    <span>
                      <strong>Educator Training &amp; Campus Pilots:</strong>{" "}
                      Training school teachers, college faculty advisers, and
                      student leaders to facilitate safeguarded workshops.
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={17} />
                    <span>
                      <strong>Applied AI Safety Research:</strong> Documenting
                      emerging deepfake abuse vectors, local-language moderation
                      gaps, and evidence-based prevention strategies.
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={17} />
                    <span>
                      <strong>Safeguarding &amp; Directory Verification:</strong>{" "}
                      Conducting regular source audits of support listings and
                      independent impact and security reviews.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="funding-panel">
                <h3>Ways Institutions Can Participate</h3>
                <ul className="funding-list">
                  <li>
                    <CheckCircle2 size={17} />
                    <span>
                      <strong>Programmatic Grant Funding:</strong> Underwrite
                      pilot cohorts across target districts, universities, or
                      community educator networks.
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={17} />
                    <span>
                      <strong>Institutional &amp; Campus Sponsorship:</strong>{" "}
                      Co-launch verified safety chapters across partner schools
                      and women&apos;s colleges.
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={17} />
                    <span>
                      <strong>Research &amp; Policy Collaboration:</strong>{" "}
                      Co-author technical briefs, curriculum evaluations, and AI
                      governance recommendations.
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={17} />
                    <span>
                      <strong>Directory &amp; Expert Network Participation:</strong>{" "}
                      Submit verified legal, cybersecurity, or academic expertise
                      for reviewed public listing.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <dl className="org-facts-dl" aria-label="Organizational governance summary">
              <div>
                <dt>Lead Initiative Host</dt>
                <dd>Atlas AI Institute — Women Safety in the AI Era</dd>
              </div>
              <div>
                <dt>Registration &amp; Legal Status</dt>
                <dd>
                  [Editable Placeholder: Insert verified legal registration /
                  tax-exempt / NGO status prior to formal grant submission]
                </dd>
              </div>
              <div>
                <dt>Current Operational Stage</dt>
                <dd>
                  Curriculum, assessment &amp; safety platform active; seeking
                  pilot implementation and research funding partners
                </dd>
              </div>
              <div>
                <dt>Governance &amp; Advisory Review</dt>
                <dd>
                  [Editable Placeholder: Insert Advisory Board &amp; External
                  Audit Schedule upon appointment]
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 11. SAFEGUARDING & ACCOUNTABILITY */}
      <section
        id="safeguarding"
        className="home-section"
        aria-labelledby="safeguarding-heading"
      >
        <div className="section-index-row">
          <p className="section-kicker-label">
            10 · Safeguarding &amp; Accountability
          </p>
          <div>
            <div className="section-head-stack">
              <h2 id="safeguarding-heading">
                Ethics, privacy, and participant safety engineered into every
                layer.
              </h2>
              <p className="section-lead">
                Working on technology-facilitated gender harm carries strict
                ethical obligations. Our platform enforces strict architectural
                boundaries so learning never creates secondary exposure or risk.
              </p>
            </div>

            <div className="safeguard-grid">
              <article className="safeguard-item">
                <h3>Participant Safety &amp; Zero-Disclosure</h3>
                <p>
                  All lessons and assessments use strictly fictional case
                  studies. Learners are never asked to share personal abuse
                  narratives or upload intimate media.
                </p>
              </article>

              <article className="safeguard-item">
                <h3>Informed Consent &amp; Data Minimization</h3>
                <p>
                  Institutional, educator, and learner registrations collect
                  only essential fields with explicit consent notices. Public
                  safety guides and emergency contacts remain un-gated.
                </p>
              </article>

              <article className="safeguard-item">
                <h3>Responsible AI &amp; Transparent Reporting</h3>
                <p>
                  Directory entries clearly distinguish verified public sources
                  from illustrative placeholders, and no unverified outcome
                  metrics or partner claims are ever published.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FINAL CALL TO ACTION & CONTACT */}
      <section
        id="contact"
        className="home-section is-navy"
        aria-labelledby="final-cta-heading"
      >
        <div className="home-section-inner final-cta-panel">
          <div>
            <p className="section-kicker-label">
              11 · Final Call to Action &amp; Contact
            </p>
            <div className="section-head-stack" style={{ marginTop: 14 }}>
              <h2 id="final-cta-heading">
                Together, We Can Build a Safer Digital Future.
              </h2>
              <p className="section-lead">
                Whether you represent a philanthropic foundation, academic
                institution, civil society network, corporate sustainability team,
                or are joining as an educator or learner—your collaboration
                directly strengthens women&apos;s digital safety and AI
                readiness.
              </p>
            </div>

            <div className="final-cta-actions">
              <a
                href="mailto:contact@atlasai.institute?subject=Grant%20%26%20Program%20Support%20-%20Women%20Safety%20in%20the%20AI%20Era"
                className="button cream"
              >
                Support Our Mission <ArrowRight size={17} />
              </a>
              <Link href="/clubs/register" className="button primary">
                Become an Institutional Partner <Handshake size={17} />
              </Link>
              <Link
                href="/courses"
                className="button secondary"
                style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.45)" }}
              >
                Join the Program <BookOpen size={17} />
              </Link>
            </div>
          </div>

          <div style={{ display: "grid", gap: "28px" }}>
            <div className="contact-desk-card">
              <h3>Partnerships &amp; Grants Desk</h3>
              <p>
                For concept notes, grant inquiries, academic pilot proposals, or
                corporate ESG collaborations, contact the Atlas AI Institute
                program team directly.
              </p>
              <div className="contact-desk-rows">
                <div>
                  <strong>Initiative:</strong> Women Safety in the AI Era (Atlas AI
                  Institute)
                </div>
                <div>
                  <strong>Official Email:</strong>{" "}
                  <a href="mailto:contact@atlasai.institute">
                    contact@atlasai.institute
                  </a>
                </div>
                <div>
                  <strong>Institute Portal:</strong>{" "}
                  <a
                    href="https://atlasai.institute"
                    target="_blank"
                    rel="noreferrer"
                  >
                    atlasai.institute
                  </a>
                </div>
                <div>
                  <strong>Institutional &amp; Expert Network:</strong>{" "}
                  <Link href="/network">Request Reviewer Verification</Link>
                </div>
                <div>
                  <strong>Public Registry &amp; Verification:</strong>{" "}
                  <Link href="/certificate">Verify Credentials</Link> ·{" "}
                  <Link href="/support">Support Directory</Link>
                </div>
              </div>
            </div>

            <GeneralContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
