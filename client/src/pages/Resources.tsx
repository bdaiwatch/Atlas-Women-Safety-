import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FileText,
  Phone,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import { Link } from "wouter";
import {
  featuredGuideSteps,
  resourceGuides,
  toolkitDocuments,
  type ResourceCategory,
  type ResourceGuide,
} from "../data/resourcesLibrary";
import "../resourcesEditorial.css";

const categories: Array<"All" | ResourceCategory> = [
  "All",
  "AI & Deepfake",
  "Privacy & Accounts",
  "Evidence & Reporting",
  "Rights & Support",
];

export default function Resources() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | ResourceCategory
  >("All");
  const [protocolExpanded, setProtocolExpanded] = useState(true);
  const [activeGuide, setActiveGuide] = useState<ResourceGuide | null>(null);
  const [openToolkitIds, setOpenToolkitIds] = useState<string[]>(["tk-01", "tk-02"]);

  useEffect(() => {
    if (!activeGuide) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveGuide(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeGuide]);

  const filteredGuides = useMemo(() => {
    const q = search.trim().toLowerCase();
    return resourceGuides.filter((guide) => {
      const matchesCategory =
        selectedCategory === "All" || guide.category === selectedCategory;
      const matchesSearch =
        !q ||
        `${guide.titleEn} ${guide.summaryEn} ${guide.category}`
          .toLowerCase()
          .includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  const companionToolkit = useMemo(
    () =>
      activeGuide?.toolkitId
        ? toolkitDocuments.find((doc) => doc.id === activeGuide.toolkitId) ?? null
        : null,
    [activeGuide],
  );

  function toggleToolkitCard(id: string) {
    setOpenToolkitIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function openToolkitAndScroll(id: string) {
    setOpenToolkitIds((current) =>
      current.includes(id) ? current : [...current, id],
    );
    const el = document.getElementById(`toolkit-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">
          Digital Safety Resource Library
        </p>
        <h1>Practical Guidance for Safer Digital Decisions</h1>
        <p>
          A practical, source-informed learning library covering account security, AI-generated abuse, deepfake awareness, digital privacy, safe evidence preservation, online consent and responsible reporting. All guides and interactive checklists remain readable directly on this page without requiring downloads, registration or account sign-in.
        </p>
      </section>

      <section className="content-wrap resources-editorial-wrap">
        <div className="resources-utility-strip">
          <div className="resources-utility-meta">
            <span>Atlas AI Institute</span>
            <span aria-hidden="true">·</span>
            <span>9 Topic Guides</span>
            <span aria-hidden="true">·</span>
            <span>8 In-Page Checklists</span>
            <span aria-hidden="true">·</span>
            <span>Reviewed November 2026</span>
          </div>
          <div className="resources-utility-links">
            <a href="#toolkit-archive">
              <FileText size={14} /> Read checklists
            </a>
            <Link href="/courses">
              <BookOpen size={14} /> Open full course
            </Link>
          </div>
        </div>

        {/* Tier 1: Lead Action Brief + Urgent Helpline Margin Rail */}
        <div className="resource-lead-grid">
          <article className="resource-lead-card">
            <div>
              <p className="resource-lead-kicker">
                Featured Action Protocol
              </p>
              <h2>
                What to Do When an Intimate Image or AI-Generated Deepfake Is Shared Without Consent
              </h2>
              <p className="resource-lead-desc">
                Calm, step-by-step containment guidance designed so you can protect your accounts, preserve verifiable evidence references safely, and report incidents without disclosing personal trauma on public forms.
              </p>
            </div>

            <div>
              <div className="resource-lead-actions">
                <button
                  type="button"
                  className="button cream"
                  onClick={() => setProtocolExpanded((prev) => !prev)}
                >
                  {protocolExpanded ? (
                    <>
                      Hide 4-step protocol <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      Show 4-step protocol <ChevronDown size={16} />
                    </>
                  )}
                </button>
                <Link href="/courses" className="button secondary">
                  Study in full course <ArrowRight size={16} />
                </Link>
                <button
                  type="button"
                  className="button secondary"
                  onClick={() => openToolkitAndScroll("tk-02")}
                >
                  <FileText size={16} /> Read response card
                </button>
              </div>

              {protocolExpanded && (
                <div className="resource-protocol-panel">
                  {featuredGuideSteps.map((item) => (
                    <div className="protocol-step-item" key={item.step}>
                      <span className="protocol-step-num">
                        STEP {item.step}
                      </span>
                      <h3>{item.titleEn}</h3>
                      <p>{item.detailEn}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </article>

          <aside className="resource-margin-rail" aria-label="Quick official contacts">
            <div>
              <p className="eyebrow">Verified Escalation Pathways</p>
              <h3>Need Immediate Human or Legal Assistance?</h3>
              <p>
                Educational guides do not replace emergency services, police investigation, or legal counsel. Use these official Bangladesh helplines if someone is in immediate danger or facing active cyber extortion.
              </p>

              <div className="margin-helpline-list">
                <div className="margin-helpline-row">
                  <div>
                    <span>National Emergency</span>
                    <small>Police, fire & ambulance response</small>
                  </div>
                  <a href="tel:999">999</a>
                </div>
                <div className="margin-helpline-row">
                  <div>
                    <span>Women & Children Helpline</span>
                    <small>National protection & support helpline</small>
                  </div>
                  <a href="tel:109">109</a>
                </div>
                <div className="margin-helpline-row">
                  <div>
                    <span>Police Cyber Support for Women</span>
                    <small>Specialized Bangladesh Police unit</small>
                  </div>
                  <a href="tel:01320000888">01320000888</a>
                </div>
                <div className="margin-helpline-row">
                  <div>
                    <span>Government Legal Aid</span>
                    <small>National legal aid & information</small>
                  </div>
                  <a href="tel:16430">16430</a>
                </div>
              </div>
            </div>

            <div className="margin-rail-footer">
              <Link href="/emergency" className="text-link">
                <Phone size={14} /> All official contacts
              </Link>
              <Link href="/support" className="text-link">
                Support directory <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>

        {/* Tier 2: Searchable Topic Library */}
        <div className="resources-section-head">
          <div>
            <p className="eyebrow">Curated Library</p>
            <h2>Browse by Digital Safety Topic</h2>
            <p className="resources-section-sub">
              Open any topic right here to read practical steps and its companion safety checklist.
            </p>
          </div>
          <span className="resources-section-sub">
            Showing {filteredGuides.length} of {resourceGuides.length} guides
          </span>
        </div>

        <div className="resources-controls-bar">
          <div
            className="resources-category-tabs"
            role="tablist"
            aria-label="Filter resources by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                className={`category-tab-btn ${
                  selectedCategory === category ? "is-active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "All" ? "All Topics" : category}
              </button>
            ))}
          </div>

          <div className="resources-search-lang">
            <label className="resources-search-input">
              <Search size={16} aria-hidden="true" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search deepfake, privacy, accounts, reporting…"
                aria-label="Search safety resource guides"
              />
            </label>
          </div>
        </div>

        {filteredGuides.length === 0 ? (
          <div className="resources-empty-state">
            <p>
              No resource guides matched “{search}”. Try clearing the search or
              selecting “All Topics”.
            </p>
            <button
              type="button"
              className="button secondary"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="library-grid">
            {filteredGuides.map((guide) => (
              <article className="library-card" key={guide.id}>
                <div>
                  <div className="library-card-meta">
                    <span className="library-card-num">GUIDE {guide.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{guide.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{guide.readTime}</span>
                  </div>
                  <h3>{guide.titleEn}</h3>
                  <p className="library-card-summary">{guide.summaryEn}</p>
                </div>

                <div className="library-card-footer">
                  <button
                    type="button"
                    className="library-read-btn"
                    onClick={() => setActiveGuide(guide)}
                  >
                    Read guide & checklist <ArrowRight size={14} />
                  </button>
                  <span className="library-module-tag">{guide.courseModuleLabel}</span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Tier 3: In-Page Safety Checklists & Worksheets */}
        <section
          id="toolkit-archive"
          className="toolkit-archive-section"
          aria-labelledby="toolkit-archive-title"
        >
          <div className="resources-section-head">
            <div>
              <p className="eyebrow">
                In-Page Safety Toolkit
              </p>
              <h2 id="toolkit-archive-title">
                Read Worksheets & Checklists Directly Here
              </h2>
              <p className="resources-section-sub">
                Every checklist and worksheet is readable directly on this page—no file downloads or account sign-in required.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
              <button
                type="button"
                className="button secondary"
                onClick={() =>
                  setOpenToolkitIds((current) =>
                    current.length === toolkitDocuments.length
                      ? []
                      : toolkitDocuments.map((doc) => doc.id),
                  )
                }
              >
                {openToolkitIds.length === toolkitDocuments.length
                  ? "Collapse all checklists"
                  : "Expand all 8 checklists"}
              </button>
              <Link href="/courses" className="text-link">
                Full course & certificate <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="toolkit-archive-grid">
            {toolkitDocuments.map((doc) => {
              const isOpen = openToolkitIds.includes(doc.id);
              return (
                <article
                  className={`toolkit-row-card ${isOpen ? "is-open" : ""}`}
                  id={`toolkit-${doc.id}`}
                  key={doc.id}
                >
                  <div className="toolkit-row-header">
                    <div className="toolkit-row-info">
                      <span className="toolkit-row-num">{doc.number}</span>
                      <div>
                        <h3>{doc.titleEn}</h3>
                        <p className="toolkit-row-desc">{doc.descriptionEn}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="toolkit-toggle-btn"
                      aria-expanded={isOpen}
                      onClick={() => toggleToolkitCard(doc.id)}
                    >
                      {isOpen ? (
                        <>
                          Hide <ChevronUp size={14} />
                        </>
                      ) : (
                        <>
                          Read <ChevronDown size={14} />
                        </>
                      )}
                    </button>
                  </div>

                  {isOpen && (
                    <div className="toolkit-inline-body">
                      <p className="toolkit-notice">
                        <span>{doc.noticeEn}</span>
                      </p>

                      <ul className="toolkit-checklist-list">
                        {doc.items.map((item) => (
                          <li key={item.en}>
                            <CheckCircle2 size={15} aria-hidden="true" />
                            <span>{item.en}</span>
                          </li>
                        ))}
                      </ul>

                      {doc.reflectionPrompts.map((prompt) => (
                        <p className="toolkit-reflection" key={prompt.en}>
                          <span>{prompt.en}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* Safeguarding & Editorial Governance */}
        <div className="resources-safeguard-band">
          <div>
            <h3>
              <ShieldCheck
                size={18}
                style={{
                  display: "inline",
                  marginRight: 8,
                  verticalAlign: "-3px",
                  color: "var(--plum)",
                }}
              />
              Editorial & Safeguarding Standard
            </h3>
            <p>
              All guides use fictional educational examples and are published by Atlas AI Institute under privacy-first principles: no user registration required, no survivor profiling, and no uploads of intimate or sensitive imagery. Legal, statutory, and platform reporting procedures change over time; users should verify current procedures through official Bangladesh government channels and platform documentation. This educational material does not constitute emergency response, legal counsel, police investigation, or clinical medical support.
            </p>
          </div>
          <Link href="/school-programme" className="button secondary">
            School toolkit & clubs <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Accessible Modal Reader for Selected Topic Guide + Companion Checklist */}
      {activeGuide && (
        <div
          className="guide-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="active-guide-title"
          onClick={() => setActiveGuide(null)}
        >
          <div
            className="guide-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="guide-modal-top">
              <div>
                <div className="library-card-meta">
                  <span className="library-card-num">
                    GUIDE {activeGuide.number}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeGuide.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeGuide.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeGuide.status}</span>
                </div>
                <h2 id="active-guide-title">{activeGuide.titleEn}</h2>
              </div>
              <button
                type="button"
                className="guide-modal-close"
                aria-label="Close guide reader"
                onClick={() => setActiveGuide(null)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="guide-modal-summary">
              <p style={{ margin: 0 }}>{activeGuide.summaryEn}</p>
            </div>

            <div className="guide-modal-steps">
              {activeGuide.stepsEn.map((stepEn, idx) => (
                <div className="guide-modal-step" key={stepEn}>
                  <span className="guide-modal-step-num">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p>{stepEn}</p>
                  </div>
                </div>
              ))}
            </div>

            {companionToolkit && (
              <div className="modal-companion-checklist">
                <h3>{companionToolkit.titleEn}</h3>
                <ul className="toolkit-checklist-list">
                  {companionToolkit.items.map((item) => (
                    <li key={item.en}>
                      <CheckCircle2 size={15} aria-hidden="true" />
                      <span>{item.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="guide-modal-actions">
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--muted)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <FileText size={14} /> {activeGuide.courseModuleLabel}
              </span>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="button secondary"
                  onClick={() => setActiveGuide(null)}
                >
                  Close reader
                </button>
                <Link
                  href="/courses"
                  className="button primary"
                  onClick={() => setActiveGuide(null)}
                >
                  Open in course <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
