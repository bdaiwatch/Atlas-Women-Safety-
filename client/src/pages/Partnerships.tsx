import { useEffect, useState, useMemo } from "react";
import { Link } from "wouter";
import {
  ShieldCheck,
  Building2,
  GraduationCap,
  Landmark,
  Cpu,
  School,
  HeartHandshake,
  Newspaper,
  Award,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Mail,
  Copy,
  ExternalLink,
  Info,
  Globe2,
  FileText,
  Clock,
  Sparkles,
  Users2,
  Lock,
  AlertCircle,
  Loader2,
} from "lucide-react";
import {
  whyPartnerData,
  partnershipCategoriesData,
  collaborationModelsData,
  thematicAreasData,
  partnershipStagesData,
  governancePrinciplesData,
  partnershipFAQsData,
  PartnershipCategory,
} from "../data/partnershipsData";

export default function Partnerships() {
  useEffect(() => {
    document.title = "Partnerships | Atlas AI Institute";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Category selection for the application form
  const [selectedCategory, setSelectedCategory] = useState<string>(
    partnershipCategoriesData[0].title
  );
  const [selectedThematicArea, setSelectedThematicArea] = useState<string>(
    thematicAreasData[0].title
  );

  // Form fields
  const [orgName, setOrgName] = useState("");
  const [orgType, setOrgType] = useState("International NGO");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [officialEmail, setOfficialEmail] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [designation, setDesignation] = useState("");
  const [collaborationSummary, setCollaborationSummary] = useState("");
  const [contribution, setContribution] = useState("");
  const [expectedImpact, setExpectedImpact] = useState("");
  const [timelineScope, setTimelineScope] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [authorizedConsent, setAuthorizedConsent] = useState(false);

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");
  const [botcheck, setBotcheck] = useState(false);

  // UI state
  const [copied, setCopied] = useState(false);
  const [formAttempted, setFormAttempted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(
    partnershipFAQsData[0].id
  );
  const [activeTabFilter, setActiveTabFilter] = useState<string>("All");

  const categoryIconMap: Record<string, React.ReactNode> = {
    "strategic-institutional": <Landmark size={24} />,
    "development-ngo": <Globe2 size={24} />,
    "academic-research": <GraduationCap size={24} />,
    "government-public-sector": <Building2 size={24} />,
    "technology-ai-industry": <Cpu size={24} />,
    "school-college-networks": <School size={24} />,
    "corporate-csr-impact": <HeartHandshake size={24} />,
    "media-knowledge-distribution": <Newspaper size={24} />,
    "expert-professional-networks": <Award size={24} />,
  };

  const handleSelectCategory = (cat: PartnershipCategory) => {
    setSelectedCategory(cat.title);
    const element = document.getElementById("enquiry-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isFormValid = useMemo(() => {
    return (
      orgName.trim() !== "" &&
      country.trim() !== "" &&
      website.trim() !== "" &&
      officialEmail.trim() !== "" &&
      contactPerson.trim() !== "" &&
      designation.trim() !== "" &&
      collaborationSummary.trim().length >= 20 &&
      contribution.trim() !== "" &&
      expectedImpact.trim() !== "" &&
      timelineScope.trim() !== "" &&
      authorizedConsent
    );
  }, [
    orgName,
    country,
    website,
    officialEmail,
    contactPerson,
    designation,
    collaborationSummary,
    contribution,
    expectedImpact,
    timelineScope,
    authorizedConsent,
  ]);

  const compiledProposalText = useMemo(() => {
    return `INSTITUTIONAL PARTNERSHIP ENQUIRY
Atlas AI Institute · Women Safety in the AI Era

1. ORGANIZATION DETAILS
Organization Name: ${orgName || "[Not Specified]"}
Organization Type: ${orgType}
Country / Jurisdiction: ${country || "[Not Specified]"}
Official Website: ${website || "[Not Specified]"}
Official Contact Email: ${officialEmail || "[Not Specified]"}
Primary Contact Person: ${contactPerson || "[Not Specified]"}
Designation / Title: ${designation || "[Not Specified]"}

2. PROPOSAL SPECIFICATIONS
Partnership Track: ${selectedCategory}
Primary Thematic Area: ${selectedThematicArea}
Proposed Timeline & Scope: ${timelineScope || "[Not Specified]"}

3. COLLABORATION SUMMARY
${collaborationSummary || "[No summary provided]"}

4. ANTICIPATED CONTRIBUTION / RESOURCES
${contribution || "[No contribution details specified]"}

5. EXPECTED IMPACT & BENEFICIARIES
${expectedImpact || "[No impact details specified]"}

6. ADDITIONAL INFORMATION
${additionalNotes || "None"}

Authorization Declaration: Confirmed authorized representation and acceptance of Atlas AI Institute safeguarding principles.`;
  }, [
    orgName,
    orgType,
    country,
    website,
    officialEmail,
    contactPerson,
    designation,
    selectedCategory,
    selectedThematicArea,
    timelineScope,
    collaborationSummary,
    contribution,
    expectedImpact,
    additionalNotes,
  ]);

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(
      `Partnership Enquiry: ${orgName || "Institutional Collaboration"} - ${selectedCategory}`
    );
    const body = encodeURIComponent(compiledProposalText);
    return `mailto:contact@atlasai.institute?subject=${subject}&body=${body}`;
  }, [orgName, selectedCategory, compiledProposalText]);

  const handleCopyProposal = () => {
    navigator.clipboard.writeText(compiledProposalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  };

  const handlePartnershipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormAttempted(true);

    if (!isFormValid) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ae6f8ffa-1ea5-4acf-b1c4-71ec3ce86a3c",
          subject: "New Institutional Partnership Proposal — Atlas AI Institute",
          from_name: "Atlas AI Institute Partnerships",
          organization_name: orgName.trim(),
          organization_type: orgType,
          country: country.trim(),
          website: website.trim(),
          email: officialEmail.trim(),
          contact_person: contactPerson.trim(),
          designation: designation.trim(),
          partnership_category: selectedCategory,
          thematic_areas: selectedThematicArea,
          proposed_collaboration: collaborationSummary.trim(),
          expected_contribution: contribution.trim(),
          expected_outcomes: expectedImpact.trim(),
          proposed_timeline: timelineScope.trim(),
          additional_information: additionalNotes.trim(),
          botcheck: botcheck ? "spambot" : "",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
        setSubmitErrorMessage(
          result.message ||
            "Your partnership proposal could not be submitted. Please try again or contact contact@atlasai.institute."
        );
      }
    } catch {
      setSubmitStatus("error");
      setSubmitErrorMessage(
        "Your partnership proposal could not be submitted. Please try again or contact contact@atlasai.institute."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredModels = useMemo(() => {
    if (activeTabFilter === "All") return collaborationModelsData;
    if (activeTabFilter === "Educational")
      return collaborationModelsData.filter((m) =>
        [
          "programme-partnership",
          "training-capacity-building",
          "educational-content-co-development",
          "expert-contributions-advisory",
        ].includes(m.id)
      );
    if (activeTabFilter === "Research & Tech")
      return collaborationModelsData.filter((m) =>
        [
          "research-evidence-generation",
          "institutional-knowledge-exchange",
          "technology-safety-innovation",
        ].includes(m.id)
      );
    if (activeTabFilter === "Advocacy & Support")
      return collaborationModelsData.filter((m) =>
        [
          "public-awareness-advocacy",
          "event-conference-collaboration",
          "resource-infrastructure-support",
          "funding-grant-collaboration",
        ].includes(m.id)
      );
    return collaborationModelsData;
  }, [activeTabFilter]);

  return (
    <div className="partnerships-page">
      {/* 1. HERO SECTION */}
      <section className="partnerships-hero">
        <div className="partnerships-hero-content">
          <p className="eyebrow">Institutional Collaboration · Atlas AI Institute</p>
          <h1>Building Partnerships for a Safer, More Inclusive Digital Future</h1>
          <p className="partnerships-hero-lead">
            Atlas AI Institute collaborates with international organizations, UN
            agencies, universities, schools, technology companies, civil
            society, and philanthropic foundations to build systemic digital
            safety, responsible AI literacy, and protective frameworks for women
            and youth across South Asia and globally.
          </p>

          <div className="hero-actions">
            <a href="#categories" className="button primary">
              Explore Partnership Categories <ArrowRight size={16} />
            </a>
            <a href="#enquiry-form" className="button secondary">
              Propose a Partnership
            </a>
          </div>

          <div className="hero-pillars">
            <div className="pillar-item">
              <ShieldCheck className="pillar-icon" />
              <div>
                <strong>Cross-Sector Coalition</strong>
                <span>Governments, NGOs, tech firms, universities &amp; schools</span>
              </div>
            </div>
            <div className="pillar-item">
              <FileText className="pillar-icon" />
              <div>
                <strong>Evidence-Grounded</strong>
                <span>Audited curricula, empirical research &amp; policy briefs</span>
              </div>
            </div>
            <div className="pillar-item">
              <Globe2 className="pillar-icon" />
              <div>
                <strong>Global &amp; Regional Relevance</strong>
                <span>Contextualized for Bangladesh, South Asia &amp; worldwide</span>
              </div>
            </div>
            <div className="pillar-item">
              <Lock className="pillar-icon" />
              <div>
                <strong>Safeguarding-First</strong>
                <span>Strict 'Do No Harm' ethics, privacy &amp; survivor protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY PARTNER WITH ATLAS AI INSTITUTE */}
      <section className="content-wrap partnerships-section" id="why-partner">
        <div className="section-header">
          <p className="eyebrow">Strategic Value</p>
          <h2>Why Partner with Atlas AI Institute</h2>
          <p className="section-subtitle">
            Translating international digital safety standards and responsible
            AI ethics into high-trust, grassroots education, empirical research,
            and institutional capacity.
          </p>
        </div>

        <div className="why-partner-grid">
          {whyPartnerData.map((item) => (
            <div className="why-card" key={item.id}>
              <div className="why-card-top">
                <span className="why-icon-badge">
                  <ShieldCheck size={20} />
                </span>
                <span className="why-tag">{item.title}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="why-card-sub">{item.subtitle}</p>
              <p className="why-card-desc">{item.description}</p>
              <ul className="why-card-highlights">
                {item.highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2 size={15} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PARTNERSHIP CATEGORIES */}
      <section className="partnerships-band" id="categories">
        <div className="content-wrap">
          <div className="section-header">
            <p className="eyebrow">Engagement Pathways</p>
            <h2>9 Partnership Categories</h2>
            <p className="section-subtitle">
              Structured collaboration pathways designed to align with the
              statutory, operational, and philanthropic goals of distinct
              institutions.
            </p>
          </div>

          <div className="categories-grid">
            {partnershipCategoriesData.map((cat) => (
              <article className="category-card" key={cat.id}>
                <div className="category-header">
                  <div className="category-icon-disc">
                    {categoryIconMap[cat.id] || <Users2 size={24} />}
                  </div>
                  <span className="category-audience-badge">
                    {cat.targetAudience.split(",")[0]}
                  </span>
                </div>
                <h3>{cat.title}</h3>
                <p className="category-audience-label">
                  <strong>Intended for:</strong> {cat.targetAudience}
                </p>
                <p className="category-desc">{cat.description}</p>

                <div className="category-focus-box">
                  <strong>Key Collaboration Areas:</strong>
                  <ul>
                    {cat.focusAreas.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="category-impact-box">
                  <strong>Expected Impact:</strong>
                  <p>{cat.tangibleImpact}</p>
                </div>

                <button
                  type="button"
                  className="button secondary category-action-btn"
                  onClick={() => handleSelectCategory(cat)}
                >
                  Propose in this track <ArrowRight size={14} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COLLABORATION MODELS */}
      <section className="content-wrap partnerships-section" id="models">
        <div className="section-header">
          <p className="eyebrow">Operational Formats</p>
          <h2>11 Collaboration Models</h2>
          <p className="section-subtitle">
            Flexible, transparent, and structured engagement formats engineered
            for mutual accountability and measurable outcomes.
          </p>

          <div className="models-filter-tabs">
            {["All", "Educational", "Research & Tech", "Advocacy & Support"].map(
              (tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`model-filter-btn ${
                    activeTabFilter === tab ? "is-active" : ""
                  }`}
                  onClick={() => setActiveTabFilter(tab)}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>

        <div className="models-grid">
          {filteredModels.map((model, idx) => (
            <div className="model-card" key={model.id}>
              <div className="model-card-top">
                <span className="model-number">{(idx + 1).toString().padStart(2, "0")}</span>
                <span className="model-scope-badge">{model.scope}</span>
              </div>
              <h3>{model.title}</h3>
              <p className="model-desc">{model.description}</p>
              <div className="model-outcomes">
                <strong>Expected Outcomes &amp; Deliverables:</strong>
                <ul>
                  {model.expectedOutcomes.map((outcome, oIdx) => (
                    <li key={oIdx}>
                      <CheckCircle2 size={14} />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THEMATIC AREAS */}
      <section className="partnerships-band" id="thematic-areas">
        <div className="content-wrap">
          <div className="section-header">
            <p className="eyebrow">Domain Priorities</p>
            <h2>11 Thematic Areas for Collaboration</h2>
            <p className="section-subtitle">
              Prioritized focus areas addressing the critical intersections of
              emerging artificial intelligence, gender safety, human rights, and
              institutional defense.
            </p>
          </div>

          <div className="thematic-grid">
            {thematicAreasData.map((theme) => (
              <div className="thematic-card" key={theme.id}>
                <div className="thematic-top">
                  <span className="theme-badge">{theme.badge}</span>
                </div>
                <h3>{theme.title}</h3>
                <p>{theme.description}</p>
                <div className="thematic-chips">
                  {theme.keyTopics.map((topic, tIdx) => (
                    <span className="topic-chip" key={tIdx}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW PARTNERSHIP WORKS (5 STAGES) */}
      <section className="content-wrap partnerships-section" id="process">
        <div className="section-header">
          <p className="eyebrow">Structured Engagement</p>
          <h2>The 5-Stage Partnership Process</h2>
          <p className="section-subtitle">
            A clear, phased methodology ensuring institutional alignment,
            safeguarding rigor, transparent governance, and sustained impact.
          </p>
        </div>

        <div className="stages-timeline">
          {partnershipStagesData.map((stage) => (
            <div className="stage-card" key={stage.stageNumber}>
              <div className="stage-left">
                <div className="stage-circle">
                  <span>{stage.stageNumber}</span>
                </div>
                <span className="stage-timeframe">
                  <Clock size={13} /> {stage.timeframe}
                </span>
              </div>
              <div className="stage-right">
                <h3>
                  Stage {stage.stageNumber}: {stage.title}
                </h3>
                <p className="stage-desc">{stage.description}</p>
                <div className="stage-milestones">
                  <strong>Key Milestones &amp; Checkpoints:</strong>
                  <ul>
                    {stage.keyMilestones.map((m, mIdx) => (
                      <li key={mIdx}>
                        <CheckCircle2 size={15} />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PARTNERSHIP PRINCIPLES & GOVERNANCE */}
      <section className="partnerships-band" id="principles">
        <div className="content-wrap">
          <div className="section-header">
            <p className="eyebrow">Institutional Integrity</p>
            <h2>12 Partnership Principles &amp; Governance</h2>
            <p className="section-subtitle">
              Every formal collaboration with Atlas AI Institute is anchored in
              ethical commitments that ensure survivor protection, academic
              independence, and transparent public trust.
            </p>
          </div>

          <div className="principles-grid">
            {governancePrinciplesData.map((p) => (
              <div className="principle-card" key={p.id}>
                <div className="principle-top">
                  <ShieldCheck size={18} className="principle-icon" />
                  <span className="principle-tagline">{p.tagline}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. APPLICATION & ENQUIRY FORM */}
      <section className="content-wrap partnerships-section" id="enquiry-form">
        <div className="enquiry-split">
          <div className="enquiry-form-card">
            <div className="form-heading">
              <div>
                <p className="eyebrow">Institutional Expression of Interest</p>
                <h2>Propose an Institutional Partnership</h2>
                <p>
                  Tell us about your organization and the collaboration you would
                  like to explore with Atlas AI Institute.
                </p>
              </div>
            </div>

            {submitStatus === "success" ? (
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "32px", textAlign: "center", color: "#166534", marginTop: "20px" }}>
                <CheckCircle2 size={42} style={{ margin: "0 auto 16px", color: "#22c55e" }} />
                <h3 style={{ fontWeight: 700, marginBottom: "12px", color: "#14532d" }}>Proposal Submitted Successfully</h3>
                <p style={{ fontSize: "14.5px", lineHeight: "1.7" }}>
                  Thank you for your interest in partnering with Atlas AI Institute. Your proposal has been submitted successfully for institutional review. Submission does not automatically establish a partnership.
                </p>
                <button
                  type="button"
                  className="button primary"
                  style={{ marginTop: "20px" }}
                  onClick={() => {
                    setSubmitStatus("idle");
                    setFormAttempted(false);
                  }}
                >
                  Submit Another Proposal
                </button>
              </div>
            ) : (
              <form onSubmit={handlePartnershipSubmit} noValidate>
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

                <div className="form-subheading">
                  <Building2 size={18} />
                  <span>1. Organization &amp; Institutional Profile</span>
                </div>

                <div className="form-grid">
                  <label>
                    Organization Name *
                    <input
                      type="text"
                      required
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      placeholder="e.g., Global Digital Rights Alliance"
                    />
                    {formAttempted && !orgName.trim() && (
                      <span className="field-error">Organization name is required.</span>
                    )}
                  </label>

                  <label>
                    Organization Type *
                    <select
                      value={orgType}
                      onChange={(e) => setOrgType(e.target.value)}
                    >
                      <option value="NGO / Nonprofit">NGO / Nonprofit</option>
                      <option value="Government Institution">Government Institution</option>
                      <option value="UN / International Organization">UN / International Organization</option>
                      <option value="University / Research Institution">University / Research Institution</option>
                      <option value="School / College">School / College</option>
                      <option value="Technology / AI Company">Technology / AI Company</option>
                      <option value="Corporate / CSR">Corporate / CSR</option>
                      <option value="Women's Rights Organization">Women&apos;s Rights Organization</option>
                      <option value="Digital Rights Organization">Digital Rights Organization</option>
                      <option value="Foundation / Development Organization">Foundation / Development Organization</option>
                      <option value="Media Organization">Media Organization</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label>
                    Country / Jurisdiction *
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="e.g., Bangladesh, United Kingdom, USA"
                    />
                    {formAttempted && !country.trim() && (
                      <span className="field-error">Country or jurisdiction is required.</span>
                    )}
                  </label>

                  <label>
                    Organization Website (Optional)
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://example.org"
                    />
                  </label>

                  <label>
                    Official Organization Email *
                    <input
                      type="email"
                      required
                      value={officialEmail}
                      onChange={(e) => setOfficialEmail(e.target.value)}
                      placeholder="partnerships@example.org"
                    />
                    {formAttempted && !officialEmail.trim() && (
                      <span className="field-error">Official organization email is required.</span>
                    )}
                  </label>

                  <label>
                    Contact Person&apos;s Name *
                    <input
                      type="text"
                      required
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      placeholder="Full name of representative"
                    />
                    {formAttempted && !contactPerson.trim() && (
                      <span className="field-error">Contact person&apos;s name is required.</span>
                    )}
                  </label>

                  <label className="wide">
                    Designation / Position *
                    <input
                      type="text"
                      required
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      placeholder="e.g., Director of Digital Rights, Head of CSR, Professor of Ethics"
                    />
                    {formAttempted && !designation.trim() && (
                      <span className="field-error">Designation / position is required.</span>
                    )}
                  </label>
                </div>

                <div className="form-subheading" style={{ marginTop: 28 }}>
                  <Sparkles size={18} />
                  <span>2. Proposal &amp; Collaboration Concept</span>
                </div>

                <div className="form-grid">
                  <label>
                    Partnership Category *
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="Strategic Institutional Partnership">Strategic Institutional Partnership</option>
                      <option value="Development Partnership">Development Partnership</option>
                      <option value="Academic and Research Collaboration">Academic and Research Collaboration</option>
                      <option value="Government and Public Sector Collaboration">Government and Public Sector Collaboration</option>
                      <option value="Technology and AI Collaboration">Technology and AI Collaboration</option>
                      <option value="School and College Partnership">School and College Partnership</option>
                      <option value="Corporate and CSR Partnership">Corporate and CSR Partnership</option>
                      <option value="Media and Knowledge Partnership">Media and Knowledge Partnership</option>
                      <option value="Expert and Professional Collaboration">Expert and Professional Collaboration</option>
                    </select>
                  </label>

                  <label>
                    Thematic Areas (Optional)
                    <select
                      value={selectedThematicArea}
                      onChange={(e) => setSelectedThematicArea(e.target.value)}
                    >
                      <option value="Women's Digital Safety">Women&apos;s Digital Safety</option>
                      <option value="AI Safety and Responsible AI">AI Safety and Responsible AI</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Digital Rights and Privacy">Digital Rights and Privacy</option>
                      <option value="Deepfake Awareness">Deepfake Awareness</option>
                      <option value="Research and Policy">Research and Policy</option>
                      <option value="Digital Literacy">Digital Literacy</option>
                      <option value="Education and Capacity Building">Education and Capacity Building</option>
                    </select>
                  </label>

                  <label className="wide">
                    Proposed Timeline (Optional)
                    <input
                      type="text"
                      value={timelineScope}
                      onChange={(e) => setTimelineScope(e.target.value)}
                      placeholder="e.g., 12-Month Pilot across Dhaka & Chittagong; Global 2-Year Research Grant"
                    />
                  </label>

                  <label className="wide">
                    Proposed Collaboration * (minimum 20 characters)
                    <textarea
                      required
                      rows={4}
                      value={collaborationSummary}
                      onChange={(e) => setCollaborationSummary(e.target.value)}
                      placeholder="Describe the nature of the partnership, joint activities, intended target groups, and core alignment with Women Safety in the AI Era."
                    />
                    {formAttempted && collaborationSummary.trim().length < 20 && (
                      <span className="field-error">
                        Please provide a clear proposed collaboration summary (at least 20 characters).
                      </span>
                    )}
                  </label>

                  <label className="wide">
                    Expected Contribution (Optional)
                    <textarea
                      rows={3}
                      value={contribution}
                      onChange={(e) => setContribution(e.target.value)}
                      placeholder="Detail the technical expertise, staff time, funding, venue access, or educational network your organization brings to this initiative."
                    />
                  </label>

                  <label className="wide">
                    Expected Outcomes (Optional)
                    <textarea
                      rows={3}
                      value={expectedImpact}
                      onChange={(e) => setExpectedImpact(e.target.value)}
                      placeholder="Specify target numbers of women/youth reached, schools onboarded, publications anticipated, or policy outcomes."
                    />
                  </label>

                  <label className="wide">
                    Additional Information (Optional)
                    <textarea
                      rows={2}
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      placeholder="Any relevant existing grants, previous collaborations, or special governance considerations."
                    />
                  </label>
                </div>

                <div className="form-consent-box">
                  <label className="consent">
                    <input
                      type="checkbox"
                      checked={authorizedConsent}
                      onChange={(e) => setAuthorizedConsent(e.target.checked)}
                    />
                    <span>
                      I confirm that the information provided is accurate and that I am authorized to submit this enquiry on behalf of the organization, where applicable.
                    </span>
                  </label>
                  {formAttempted && !authorizedConsent && (
                    <span className="field-error" style={{ display: "block", marginTop: 6 }}>
                      Confirmation and authorization are required to proceed.
                    </span>
                  )}
                </div>

                {submitStatus === "error" && (
                  <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", padding: "14px", color: "#991b1b", fontSize: "13.5px", display: "flex", gap: "10px", alignItems: "center", marginBottom: "20px" }}>
                    <AlertCircle size={20} />
                    <span>{submitErrorMessage || "Your partnership proposal could not be submitted. Please try again or contact contact@atlasai.institute."}</span>
                  </div>
                )}

                {/* Submission Dispatch Section */}
                <div className="submission-dispatch-box">
                  <div className="dispatch-notice">
                    <Info size={18} />
                    <div>
                      <strong>Direct Institutional Transmission</strong>
                      <p>
                        In adherence to Atlas AI Institute data sovereignty and
                        safeguarding guidelines, partnership proposals are
                        transmitted securely via Web3Forms to our official
                        institutional mailbox.
                      </p>
                    </div>
                  </div>

                  <div className="dispatch-actions" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="button primary"
                      style={{ flex: 1, justifyContent: "center" }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Submitting Proposal...
                        </>
                      ) : (
                        <>
                          Submit Partnership Proposal <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      className="button secondary"
                      onClick={handleCopyProposal}
                    >
                      <Copy size={16} />
                      {copied ? "Copied Proposal!" : "Copy Proposal Text"}
                    </button>
                  </div>

                  {copied && (
                    <p className="copy-success-message">
                      <CheckCircle2 size={16} /> All filled proposal details copied
                      to clipboard! You may also attach this directly in your official
                      institutional email to contact@atlasai.institute.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* SIDEBAR: CONTACT & SUMMARY */}
          <div className="enquiry-sidebar">
            {/* 9. OFFICIAL CONTACT & ENQUIRY CHANNEL */}
            <div className="official-contact-card">
              <div className="contact-badge">
                <Landmark size={20} />
                <span>Partnerships Directorate</span>
              </div>
              <h3>Direct Institutional Inquiries</h3>
              <p>
                For official communications, bilateral Memorandums of
                Understanding (MOUs), requests for proposals (RFPs), or
                philanthropic grant inquiries, contact our executive team
                directly.
              </p>

              <div className="official-contact-details">
                <div className="contact-line">
                  <Mail size={16} />
                  <div>
                    <small>Official Institutional Email</small>
                    <a href="mailto:contact@atlasai.institute">
                      contact@atlasai.institute
                    </a>
                  </div>
                </div>

                <div className="contact-line">
                  <Building2 size={16} />
                  <div>
                    <small>Institutional Entity</small>
                    <strong>Atlas AI Institute</strong>
                  </div>
                </div>

                <div className="contact-line">
                  <Clock size={16} />
                  <div>
                    <small>Review Response Timeline</small>
                    <strong>5 – 7 Business Days</strong>
                  </div>
                </div>
              </div>

              <div className="contact-note">
                <Info size={14} />
                <span>
                  Formal institutional letters of intent (LOIs) on official
                  letterhead may be transmitted as PDF attachments directly to{" "}
                  <b>contact@atlasai.institute</b>.
                </span>
              </div>
            </div>

            {/* LIVE PREVIEW CARD */}
            <div className="proposal-preview-card">
              <h4>Proposal Snapshot</h4>
              <p>
                Selected Track: <b>{selectedCategory}</b>
              </p>
              <p>
                Thematic Area: <b>{selectedThematicArea}</b>
              </p>
              <p>
                Organization: <b>{orgName || "Pending input..."}</b>
              </p>
              <p>
                Jurisdiction: <b>{country || "Pending input..."}</b>
              </p>
              <hr />
              <small>
                Ready to review our 10 FAQs or need immediate emergency help?
              </small>
              <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="#faq" className="text-link">
                  View FAQs <ArrowRight size={13} />
                </a>
                <Link href="/emergency" className="text-link" style={{ color: "var(--plum)" }}>
                  Emergency Help <ExternalLink size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. INSTITUTIONAL COLLABORATION DIRECTORY / SHOWCASE */}
      <section className="partnerships-band" id="directory">
        <div className="content-wrap">
          <div className="section-header">
            <p className="eyebrow">Public Accountability</p>
            <h2>Our Institutional Collaboration Network</h2>
            <p className="section-subtitle">
              Atlas AI Institute is dedicated to verified governance, transparent
              relationships, and zero artificial inflation of partnership
              credentials.
            </p>
          </div>

          <div className="directory-honest-empty-state">
            <div className="empty-state-badge">
              <ShieldCheck size={28} />
            </div>
            <h3>Formal Institutional Onboarding in Active Progress</h3>
            <p className="empty-state-text">
              Formal institutional partnerships are currently in active
              development, due diligence, and bilateral onboarding review. As
              Memorandums of Understanding (MOUs) and formal cooperation
              agreements are ratified by the governing board of Atlas AI
              Institute, verified institutional partners, academic affiliates,
              and contributing organizations will be cataloged here with full
              transparency.
            </p>
            <div className="empty-state-policy-note">
              <CheckCircle2 size={15} />
              <span>
                <strong>Zero Fabricated Credentials:</strong> Atlas AI Institute
                does not display prospective partner logos, unverified logos, or
                unratified relationships. All listings will reflect fully
                executed, auditable institutional agreements.
              </span>
            </div>
            <div className="empty-state-cta">
              <a href="#enquiry-form" className="button primary">
                Become an Inaugural Institutional Partner <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="content-wrap partnerships-section" id="faq">
        <div className="section-header">
          <p className="eyebrow">Clear Answers</p>
          <h2>Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Essential information regarding eligibility, governance, funding,
            safeguarding, and intellectual property.
          </p>
        </div>

        <div className="faq-list">
          {partnershipFAQsData.map((faq) => {
            const isOpen = expandedFaq === faq.id;
            return (
              <div
                className={`faq-card ${isOpen ? "is-open" : ""}`}
                key={faq.id}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-category-tag">{faq.category}</span>
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle-icon">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="partnerships-cta-band">
        <div className="content-wrap cta-wrap">
          <div>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>
              Take the Next Step
            </p>
            <h2>Ready to collaborate on women&apos;s digital safety?</h2>
            <p>
              Connect with Atlas AI Institute to advance responsible AI, protect
              adolescents in schools, and build verifiable cyber defense across
              South Asia and beyond.
            </p>
          </div>
          <div className="cta-actions">
            <a href="#enquiry-form" className="button primary">
              Submit Proposal <ArrowRight size={16} />
            </a>
            <a
              href="mailto:contact@atlasai.institute"
              className="button secondary"
              style={{ background: "transparent", color: "#fff", borderColor: "#fff" }}
            >
              Direct Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
