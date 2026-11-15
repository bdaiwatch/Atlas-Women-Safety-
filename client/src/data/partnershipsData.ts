export interface ValueProposition {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface PartnershipCategory {
  id: string;
  title: string;
  targetAudience: string;
  description: string;
  focusAreas: string[];
  tangibleImpact: string;
}

export interface CollaborationModel {
  id: string;
  title: string;
  scope: string;
  description: string;
  expectedOutcomes: string[];
}

export interface ThematicArea {
  id: string;
  title: string;
  badge: string;
  description: string;
  keyTopics: string[];
}

export interface PartnershipStage {
  stageNumber: number;
  title: string;
  timeframe: string;
  description: string;
  keyMilestones: string[];
}

export interface GovernancePrinciple {
  id: string;
  title: string;
  tagline: string;
  description: string;
}

export interface PartnershipFAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const whyPartnerData: ValueProposition[] = [
  {
    id: "digital-safety-education",
    title: "Digital Safety Education",
    subtitle: "Actionable, localized, and verifiable safety competencies",
    description:
      "Atlas AI Institute produces evidence-grounded, modular digital safety education engineered specifically for women, adolescent girls, students, and educators. Curricula combine defensive digital habits with verifiable competency milestones.",
    highlights: [
      "Modular self-paced and cohort-based curricula",
      "Cryptographically auditable certification frameworks",
      "Targeted for high school, college, and adult learners",
    ],
  },
  {
    id: "responsible-ai-awareness",
    title: "Responsible AI Awareness",
    subtitle: "Demystifying synthetic media, algorithmic abuse, and deepfakes",
    description:
      "As artificial intelligence tools become ubiquitous, new vectors of weaponization emerge. We provide specialized training on synthetic voice generation, deepfake detection, algorithmic impersonation, and personal forensic containment.",
    highlights: [
      "Deepfake forensics and verification techniques",
      "Algorithmic privacy and digital footprint containment",
      "Responsible AI deployment and ethics standards",
    ],
  },
  {
    id: "research-knowledge-development",
    title: "Research & Knowledge Development",
    subtitle: "Empirical studies, policy guidance, and threat intelligence",
    description:
      "We generate authoritative research on Technology-Facilitated Gender-Based Violence (TFGBV), AI safety vulnerabilities in emerging economies, and the socio-legal landscape of digital rights in South Asia and globally.",
    highlights: [
      "Empirical field surveys and vulnerability assessments",
      "Policy briefs for regulatory bodies and ministries",
      "Open-access toolkits and academic whitepapers",
    ],
  },
  {
    id: "institutional-capacity-building",
    title: "Institutional Capacity Building",
    subtitle: "Empowering educators, administrators, and civil society actors",
    description:
      "We prepare educational institutions, school administrators, community focal points, and civil society advocates to identify emerging cyber threats, manage student safeguarding, and implement structured safety clubs.",
    highlights: [
      "Train-the-Trainer (ToT) educator fellowships",
      "School leadership digital safeguarding frameworks",
      "Standard operating procedures for campus cyber incidents",
    ],
  },
  {
    id: "womens-digital-rights",
    title: "Women's Digital Rights & Safety",
    subtitle: "Promoting autonomy and dignity without exclusionary censorship",
    description:
      "We champion women's equal, unhindered participation in digital spaces. Our educational models reject paternalistic 'disconnect from the internet' approaches, cultivating digital sovereignty, agency, and proactive cyber defenses.",
    highlights: [
      "Defending digital privacy, expression, and autonomy",
      "Survivor-centered containment and evidence preservation",
      "Alignment with international human rights standards",
    ],
  },
  {
    id: "community-engagement-impact",
    title: "Community Engagement & Scalable Impact",
    subtitle: "Grassroots youth clubs, peer education, and institutional trust",
    description:
      "With active school and college digital safety clubs, localized student ambassador networks, and source-verified referral channels, we bridge high-level policy dialogue with grassroots community impact across urban and rural divisions.",
    highlights: [
      "School and college digital safety club networks",
      "Peer-to-peer student cyber safety ambassadors",
      "Source-verified referral and public service navigation",
    ],
  },
];

export const partnershipCategoriesData: PartnershipCategory[] = [
  {
    id: "strategic-institutional",
    title: "Strategic Institutional Partners",
    targetAudience: "Multilateral agencies, international development bodies, and global technology consortia",
    description:
      "Collaborate at an institutional scale on comprehensive digital safety initiatives, national policy alignment, and systemic capacity-building programs spanning multiple geographic regions.",
    focusAreas: [
      "Multi-year programmatic funding & grant execution",
      "Policy harmonization and legislative advisory",
      "Regional digital safety indices and assessments",
    ],
    tangibleImpact:
      "Systemic transformation of digital safety infrastructure, measurable reduction in cyber vulnerability, and accredited national educational implementations.",
  },
  {
    id: "development-ngo",
    title: "International Development & NGO Partners",
    targetAudience: "INGOs, local civil society organizations, human rights defenders, and women's rights networks",
    description:
      "Jointly implement community-level educational programs, gender-responsive digital safety interventions, and localized safety navigation frameworks across marginalized and vulnerable demographics.",
    focusAreas: [
      "Community-based digital safety workshops",
      "TFGBV prevention and survivor referral protocols",
      "Grassroots advocacy and digital rights mobilization",
    ],
    tangibleImpact:
      "Direct outreach to thousands of women and adolescent girls, fortified local civil society capacity, and documented survivor empowerment metrics.",
  },
  {
    id: "academic-research",
    title: "Academic & Research Institutions",
    targetAudience: "Universities, research centers, public policy think tanks, and technology ethics institutes",
    description:
      "Conduct collaborative empirical research, co-author peer-reviewed publications, design university-level curricula, and host academic symposia on AI ethics, cyber harassment, and gender in tech.",
    focusAreas: [
      "Joint empirical research studies and whitepapers",
      "Curriculum integration and student fellowships",
      "Scholarly symposia and academic exchanges",
    ],
    tangibleImpact:
      "Peer-reviewed academic contributions, evidence-grounded policy recommendations, and student researcher training in computational ethics.",
  },
  {
    id: "government-public-sector",
    title: "Government & Public Sector Bodies",
    targetAudience: "Ministries of Education, ICT/Telecommunications, Women & Children Affairs, and Cybercrime Units",
    description:
      "Support public institutions in strengthening national digital safety standards, embedding cyber safety in school curriculums, and establishing safe public reporting mechanisms.",
    focusAreas: [
      "National school digital safety standard development",
      "Capacity building for cyber investigators and educators",
      "Public interest digital awareness campaigns",
    ],
    tangibleImpact:
      "Standardized institutional safeguarding across secondary educational networks and enhanced public sector responsiveness to AI-driven cyber offenses.",
  },
  {
    id: "technology-ai-industry",
    title: "Technology & AI Industry Partners",
    targetAudience: "Artificial intelligence developers, social media platforms, cybersecurity enterprises, and software firms",
    description:
      "Partner on safety-by-design audits, synthetic media forensics, threat detection tools, educational API sandboxes, and corporate technical advisories.",
    focusAreas: [
      "Safety-by-Design and ethical AI reviews",
      "Synthetic media detection and mitigation tools",
      "Educational technology infrastructure and tooling",
    ],
    tangibleImpact:
      "Enhanced platform safety controls, real-world deployment of defensive verification tools, and corporate accountability in algorithmic deployment.",
  },
  {
    id: "school-college-networks",
    title: "School & College Networks",
    targetAudience: "Secondary education boards, school districts, universities, and educator associations",
    description:
      "Establish accredited Digital Safety Clubs, train designated faculty safeguarding officers, deliver structured student learning cohorts, and run cyber incident simulations.",
    focusAreas: [
      "Institutional Digital Safety Club establishment",
      "Teacher training and faculty safeguarding certification",
      "Student digital citizenship and safety workshops",
    ],
    tangibleImpact:
      "Protected campus digital environments, structured student leadership cohorts, and rapid school-level response to cyber harassment cases.",
  },
  {
    id: "corporate-csr-impact",
    title: "Corporate CSR & Impact Partners",
    targetAudience: "Corporate foundations, ESG programs, multinational enterprises, and social impact investors",
    description:
      "Sponsor dedicated student cohorts, underwrite school safety club kits, fund localized curriculum translation, and demonstrate tangible social governance impact.",
    focusAreas: [
      "Sponsored educational cohort scholarships",
      "Underwriting regional club resource toolkits",
      "Measurable ESG and gender-inclusion reporting",
    ],
    tangibleImpact:
      "High-visibility social impact, direct empowerment of young female learners, and audited compliance with corporate social responsibility mandates.",
  },
  {
    id: "media-knowledge-distribution",
    title: "Media & Knowledge Distribution Partners",
    targetAudience: "Press organizations, broadcast networks, investigative journalists, and digital content platforms",
    description:
      "Amplify verified cyber safety guidance, produce investigative reporting on emerging digital threats, debunk synthetic media viral disinfo, and foster public awareness.",
    focusAreas: [
      "Joint public interest editorial series",
      "Fact-checking and deepfake verification guides",
      "Digital safety public service announcements (PSAs)",
    ],
    tangibleImpact:
      "Mass public awareness, reduced susceptibility to viral synthetic disinformation, and elevated public literacy regarding technology risks.",
  },
  {
    id: "expert-professional-networks",
    title: "Expert & Professional Networks",
    targetAudience: "Cybersecurity practitioners, legal aid attorneys, clinical psychologists, and digital forensics specialists",
    description:
      "Join our verified professional advisory bench to review educational modules, provide expert commentary on technical cases, and guide institutional referral pathways.",
    focusAreas: [
      "Curriculum technical and legal peer review",
      "Guest lectures and specialized masterclasses",
      "Advisory input on referral directory standards",
    ],
    tangibleImpact:
      "Uncompromising academic and technical accuracy across all institute programs and robust multi-disciplinary safeguarding expertise.",
  },
];

export const collaborationModelsData: CollaborationModel[] = [
  {
    id: "programme-partnership",
    title: "Programme Partnership",
    scope: "Multi-month or multi-year joint programmatic delivery",
    description:
      "Bilateral operational partnership to implement complete digital safety programs, regional school club networks, or cohort-based educational fellowships with defined deliverables and joint steering committees.",
    expectedOutcomes: [
      "Joint program charter and governance framework",
      "Dedicated cohort tracking and quarterly progress reviews",
      "Comprehensive programmatic final impact report",
    ],
  },
  {
    id: "research-evidence-generation",
    title: "Research & Evidence Generation",
    scope: "Field investigations, analytical studies, and policy whitepapers",
    description:
      "Collaborative scientific or socio-legal research investigating synthetic media manipulation, online harassment trends, or digital literacy deficits among youth and women.",
    expectedOutcomes: [
      "Co-authored research monographs or journal papers",
      "Public dissemination webinar and policy roundtable",
      "Open-access empirical dataset release (anonymized)",
    ],
  },
  {
    id: "training-capacity-building",
    title: "Training & Capacity Building",
    scope: "Workshops, masterclasses, and Train-the-Trainer (ToT) programs",
    description:
      "Structured professional development curricula delivered to institutional staff, teachers, cyber law practitioners, or NGO field officers to build frontline cyber defense competencies.",
    expectedOutcomes: [
      "Certified institutional master trainers",
      "Customized institutional handbook and SOP documents",
      "Post-training operational competency evaluations",
    ],
  },
  {
    id: "educational-content-co-development",
    title: "Educational Content Co-Development",
    scope: "Curriculum authoring, localization, and interactive courseware",
    description:
      "Co-designing specialized course modules, localized language editions, video demonstrations, or interactive digital toolkits tailored to specific regional or industry audiences.",
    expectedOutcomes: [
      "Jointly branded curriculum units and student guides",
      "Digital courseware integration on the Atlas AI platform",
      "Open-source learning resources distributed to partners",
    ],
  },
  {
    id: "institutional-knowledge-exchange",
    title: "Institutional Knowledge Exchange",
    scope: "Bilateral technical exchange, peer review, and advisory dialogue",
    description:
      "Formal institutional mechanisms for bilateral knowledge transfer, shared threat intelligence, emerging AI vulnerability analysis, and governance consultations.",
    expectedOutcomes: [
      "Regular technical briefing sessions",
      "Curriculum and safety protocol peer reviews",
      "Joint institutional advisory memorandums",
    ],
  },
  {
    id: "public-awareness-advocacy",
    title: "Public Awareness & Advocacy Campaigns",
    scope: "Digital awareness campaigns, media drives, and civic mobilization",
    description:
      "Coordinated public communication drives addressing deepfake extortion, cyber harassment prevention, digital footprint hygiene, and safe internet usage for girls.",
    expectedOutcomes: [
      "Multi-channel multimedia campaign assets",
      "High-reach social and broadcast distribution",
      "Increased citizen utilization of verified emergency helplines",
    ],
  },
  {
    id: "technology-safety-innovation",
    title: "Technology & Safety Innovation",
    scope: "Technical prototyping, detection tooling, and platform sandboxes",
    description:
      "Joint technical projects exploring synthetic image detection, privacy-preserving incident reporting workflows, cryptographic credential verification, and safety tooling.",
    expectedOutcomes: [
      "Open-source safety verification tools or browser utilities",
      "Technical demonstration sandboxes for educators",
      "Published technical benchmarks and security audits",
    ],
  },
  {
    id: "expert-contributions-advisory",
    title: "Expert Contributions & Advisory",
    scope: "Curriculum advisory panels, guest lectures, and editorial review",
    description:
      "Subject-matter specialists lending verified domain expertise in law, digital forensics, ethics, or clinical counseling to elevate the rigor of learning materials.",
    expectedOutcomes: [
      "Expert-reviewed lesson modules and assessments",
      "Interactive expert Q&A webinars for certified learners",
      "Formally recorded advisory panel contributions",
    ],
  },
  {
    id: "event-conference-collaboration",
    title: "Event & Conference Collaboration",
    scope: "Symposia, policy summits, academic roundtables, and competitions",
    description:
      "Co-organizing international or national conferences, youth digital safety hackathons, policy dialogues, and educator symposiums focused on women in the AI era.",
    expectedOutcomes: [
      "High-profile public symposium or policy summit",
      "Published conference proceedings and communique",
      "Multi-stakeholder coalition building and networking",
    ],
  },
  {
    id: "resource-infrastructure-support",
    title: "Resource & Infrastructure Support",
    scope: "In-kind technical infrastructure, software licenses, and hosting",
    description:
      "Providing server infrastructure, cloud computing credits, cybersecurity tool licenses, or physical learning facilities to empower the initiative's operational delivery.",
    expectedOutcomes: [
      "Enhanced platform uptime, security, and computational capacity",
      "Access to advanced diagnostic tools for students and faculty",
      "Formally recognized institutional infrastructure patronage",
    ],
  },
  {
    id: "funding-grant-collaboration",
    title: "Funding & Grant-Based Collaboration",
    scope: "Bilateral grants, programmatic sponsorship, and donor contracts",
    description:
      "Formal financial partnership under philanthropic grants, institutional donor agreements, or corporate CSR contracts with full financial governance and audited reporting.",
    expectedOutcomes: [
      "Fully executed Grant Agreement and Milestone Schedule",
      "Quarterly fiscal and programmatic audit reports",
      "Independent monitoring, evaluation, and learning (MEL) briefs",
    ],
  },
];

export const thematicAreasData: ThematicArea[] = [
  {
    id: "womens-digital-safety",
    title: "Women's Digital Safety & Empowerment",
    badge: "Core Focus",
    description:
      "Equipping women and girls with sovereign digital agency, defensive operational security, and proactive safety practices to navigate online platforms without fear.",
    keyTopics: [
      "Account security & 2FA hardening",
      "Social engineering defense",
      "Digital sovereignty & agency",
    ],
  },
  {
    id: "ai-safety-ethics",
    title: "AI Safety, Ethics & Responsible AI",
    badge: "Emerging Risk",
    description:
      "Demystifying machine learning models, training data bias, automated surveillance, generative content systems, and ethical governance standards.",
    keyTopics: [
      "Algorithmic bias & discrimination",
      "Generative AI risk modeling",
      "Responsible deployment principles",
    ],
  },
  {
    id: "tfgbv",
    title: "Technology-Facilitated Gender-Based Violence (TFGBV)",
    badge: "Safeguarding",
    description:
      "Systematic analysis of digital violence patterns targeting women in public life, students, and professionals, paired with evidence preservation protocols.",
    keyTopics: [
      "Non-consensual image distribution",
      "Doxxing & privacy invasion",
      "Coordinated cyber-mobbing defense",
    ],
  },
  {
    id: "deepfake-synthetic-media",
    title: "Deepfake Abuse & Synthetic Media Forensics",
    badge: "Specialized",
    description:
      "Technical training on identifying synthetic audio, facial manipulation artifacts, voice cloning, and defensive workflows for rapid containment.",
    keyTopics: [
      "Synthetic media artifact analysis",
      "Digital provenance (C2PA/watermarking)",
      "Urgent containment standard procedures",
    ],
  },
  {
    id: "cybersecurity-cybercrime",
    title: "Cybersecurity & Cybercrime Prevention",
    badge: "Technical",
    description:
      "Foundational cybersecurity principles, malware hygiene, credential protection, network security, and understanding cybercrime legal classifications.",
    keyTopics: [
      "Phishing & credential harvesting",
      "Spyware & unauthorized tracking",
      "Legal avenues & cybercrime statutes",
    ],
  },
  {
    id: "digital-rights-privacy",
    title: "Digital Rights, Privacy & Online Freedom",
    badge: "Governance",
    description:
      "Advocating for international privacy standards, encryption defense, data minimization, and protecting free expression for women in digital spaces.",
    keyTopics: [
      "Data protection laws & GDPR/national acts",
      "End-to-end encryption defense",
      "Surveillance mitigation practices",
    ],
  },
  {
    id: "harassment-stalking-mitigation",
    title: "Online Harassment & Stalking Mitigation",
    badge: "Protective",
    description:
      "Practical strategies to neutralize persistent online harassment, cyberstalking, tracking devices, and abusive digital monitoring in interpersonal contexts.",
    keyTopics: [
      "Digital containment protocols",
      "Evidence preservation standards",
      "Secure communication channels",
    ],
  },
  {
    id: "digital-literacy-inclusion",
    title: "Digital Literacy & Digital Inclusion",
    badge: "Educational",
    description:
      "Closing the gender digital divide through accessible foundational digital competencies, critical thinking, and safe technology onboarding.",
    keyTopics: [
      "Foundational internet competencies",
      "Evaluating online credibility & news",
      "Multilingual regional learning resources",
    ],
  },
  {
    id: "youth-student-safety",
    title: "Youth & Student Digital Safety",
    badge: "Schools",
    description:
      "Campus-level safeguarding, peer-to-peer digital ethics, anti-cyberbullying frameworks, and age-appropriate online safety curriculum for adolescents.",
    keyTopics: [
      "Peer mediation & cyber ethics",
      "Student digital footprint awareness",
      "School leadership crisis guidelines",
    ],
  },
  {
    id: "ai-governance-public-awareness",
    title: "AI Governance & Public Awareness",
    badge: "Policy",
    description:
      "Informing citizens, regulators, and civic leaders about the societal impacts of AI technologies, synthetic manipulation risks, and policy levers.",
    keyTopics: [
      "Citizen AI literacy campaigns",
      "Regulatory policy submissions",
      "Multi-stakeholder public dialogues",
    ],
  },
  {
    id: "research-evidence-policy",
    title: "Research, Evidence & Policy Recommendations",
    badge: "Scientific",
    description:
      "Rigorous qualitative and quantitative research translating field insights into actionable policy briefs, legislative inputs, and academic scholarship.",
    keyTopics: [
      "Empirical field research methodologies",
      "Legislative input drafting",
      "Comparative regional policy analysis",
    ],
  },
];

export const partnershipStagesData: PartnershipStage[] = [
  {
    stageNumber: 1,
    title: "Initial Enquiry & Alignment Review",
    timeframe: "Week 1 – 2",
    description:
      "The prospective partner submits a formal partnership enquiry or institutional concept note. Our Partnerships Committee conducts an initial assessment to verify mission alignment, non-commercial ethics, and strategic relevance.",
    keyMilestones: [
      "Submission of institutional enquiry or proposal",
      "Initial screening against Atlas AI safeguarding criteria",
      "Formal acknowledgement and invitation to exploratory dialogue",
    ],
  },
  {
    stageNumber: 2,
    title: "Technical Assessment & Exploratory Dialogue",
    timeframe: "Week 2 – 4",
    description:
      "Leadership and technical teams convene for bilateral discussions. We explore joint objectives, geographic scope, target beneficiary groups, resource contributions, and technical feasibility.",
    keyMilestones: [
      "Bilateral consultative working session",
      "Clarification of programmatic objectives and roles",
      "Drafting of joint Concept Note or Terms of Reference (ToR)",
    ],
  },
  {
    stageNumber: 3,
    title: "Collaborative Scoping & Due Diligence",
    timeframe: "Week 4 – 6",
    description:
      "Both organizations complete institutional due diligence, verify safeguarding compliance, agree on data protection parameters, and formulate detailed work plans, milestone schedules, and resource commitments.",
    keyMilestones: [
      "Safeguarding and ethics compliance sign-off",
      "Resource allocation and budget/in-kind verification",
      "Drafting of formal agreement and review by legal counsel",
    ],
  },
  {
    stageNumber: 4,
    title: "Formal Agreement & Governance Setup",
    timeframe: "Week 6 – 8",
    description:
      "Execution of the formal bilateral agreement—such as a Memorandum of Understanding (MOU), Bilateral Programme Agreement, or Grant Charter—followed by the appointment of designated focal points and joint steering committees.",
    keyMilestones: [
      "Sign-off of MOU or Grant Agreement by authorized signatories",
      "Establishment of Joint Coordination Working Group",
      "Public announcement (where mutually agreed) and launch plan",
    ],
  },
  {
    stageNumber: 5,
    title: "Implementation, Monitoring & Impact Review",
    timeframe: "Ongoing Lifecycle",
    description:
      "Execution of planned activities in accordance with agreed milestones. Regular monitoring reviews, transparent reporting, independent impact evaluation, and annual partnership retrospective evaluations ensure sustained excellence.",
    keyMilestones: [
      "Operational launch of activities and cohort rollouts",
      "Quarterly operational milestones and status reviews",
      "Comprehensive annual impact report and renewal evaluation",
    ],
  },
];

export const governancePrinciplesData: GovernancePrinciple[] = [
  {
    id: "p1",
    title: "1. Mission Alignment",
    tagline: "Purpose-driven collaboration",
    description:
      "Every partnership must demonstrably advance digital safety, responsible AI literacy, women's empowerment, or child safeguarding. Collaborations that compromise or dilute this core mandate are strictly precluded.",
  },
  {
    id: "p2",
    title: "2. Institutional Independence",
    tagline: "Uncompromised academic and educational integrity",
    description:
      "Atlas AI Institute maintains full editorial, academic, and programmatic independence across all curricula, research publications, and public recommendations, free from commercial or political interference.",
  },
  {
    id: "p3",
    title: "3. Transparency & Accountability",
    tagline: "Open governance and clear accountability",
    description:
      "All formal institutional relationships, funding sources, and program parameters operate under transparent governance structures with clearly documented scopes, milestones, and deliverables.",
  },
  {
    id: "p4",
    title: "4. Safeguarding & 'Do No Harm'",
    tagline: "Survivor protection is non-negotiable",
    description:
      "All joint initiatives adhere to our strict safeguarding code: zero publication of survivor case details, no collection of intimate media, no re-traumatizing case displays, and zero exposure of vulnerable participants.",
  },
  {
    id: "p5",
    title: "5. Privacy & Data Protection",
    tagline: "Strict privacy-by-design and data minimization",
    description:
      "We practice rigorous data minimization. Learner and partner information is protected under international privacy standards. Under no circumstances is user or participant data monetized, sold, or shared with third parties.",
  },
  {
    id: "p6",
    title: "6. Responsible AI Adoption",
    tagline: "Ethical, human-centric technology deployment",
    description:
      "We advocate exclusively for artificial intelligence systems that uphold human dignity, non-discrimination, transparency, explainability, and safety. We reject predatory algorithmic surveillance or coercive tech.",
  },
  {
    id: "p7",
    title: "7. Non-Discrimination & Inclusion",
    tagline: "Equitable access across all backgrounds",
    description:
      "Partners must commit to non-discrimination on grounds of gender, race, religion, ethnicity, socio-economic status, disability, or sexual orientation. Our programs are designed to be universally accessible.",
  },
  {
    id: "p8",
    title: "8. Ethical Research & Academic Rigor",
    tagline: "Empirical integrity and voluntary informed consent",
    description:
      "All collaborative research follows international bioethics and human subject protections, requiring informed voluntary consent, peer review, and secure anonymization of empirical data.",
  },
  {
    id: "p9",
    title: "9. Clear Roles & Mutual Respect",
    tagline: "Equitable partnership and transparent responsibilities",
    description:
      "Collaborations are governed by well-defined terms of reference establishing equitable rights, mutual intellectual respect, realistic operational timelines, and open communication protocols.",
  },
  {
    id: "p10",
    title: "10. Conflict of Interest Disclosure",
    tagline: "Proactive identification and mitigation",
    description:
      "Both parties must proactively disclose real, potential, or perceived conflicts of interest prior to executing agreements. Clear mitigation protocols are established to preserve public trust.",
  },
  {
    id: "p11",
    title: "11. Documented & Structured Agreements",
    tagline: "Formal legal and operational footing",
    description:
      "All collaborative programs operate on documented legal footing (MOUs, Bilateral Agreements, or Grant Charters) specifying objectives, intellectual property terms, dispute resolution, and termination clauses.",
  },
  {
    id: "p12",
    title: "12. Evidence-Based Reporting & Impact",
    tagline: "Measurable, verifiable outcomes",
    description:
      "Partnerships are evaluated against quantifiable learning outcomes, verified safety competencies, institutional reach, and qualitative participant feedback rather than superficial vanity metrics.",
  },
];

export const partnershipFAQsData: PartnershipFAQ[] = [
  {
    id: "faq-1",
    category: "Eligibility",
    question: "Who is eligible to partner with Atlas AI Institute?",
    answer:
      "We welcome partnerships with registered non-governmental organizations, UN and multilateral agencies, accredited universities and research institutes, primary/secondary school boards, government ministries and cybercrime units, responsible technology companies, corporate CSR foundations, and verified independent domain experts who share our dedication to women's digital safety and responsible AI.",
  },
  {
    id: "faq-2",
    category: "Funding",
    question: "Is financial sponsorship or funding mandatory to become a partner?",
    answer:
      "No. Financial contribution is not mandatory for programmatic, research, educational, or knowledge-exchange partnerships. While philanthropic grants and CSR sponsorships enable us to scale student cohorts and underwrite school club toolkits, we actively collaborate with academic, NGO, government, and technical partners on an in-kind and mutual-benefit basis.",
  },
  {
    id: "faq-3",
    category: "Process",
    question: "How long does the partnership review and onboarding process typically take?",
    answer:
      "The end-to-end process generally takes between 4 to 8 weeks depending on the complexity of the collaboration model. Initial review of an enquiry occurs within 5–7 business days, followed by exploratory dialogue and mutual scoping. Streamlined knowledge-exchange or guest-lecture agreements can be finalized faster.",
  },
  {
    id: "faq-4",
    category: "Endorsement",
    question: "Does Atlas AI Institute endorse or certify partner commercial products or services?",
    answer:
      "No. To preserve our strict institutional independence and public trust, Atlas AI Institute does not endorse, market, or commercially certify third-party software, commercial platforms, or proprietary commercial goods. Collaboration with technology firms focuses strictly on safety research, threat analysis, educational sandboxes, and safety-by-design principles.",
  },
  {
    id: "faq-5",
    category: "Geography",
    question: "Can international organizations located outside Bangladesh enter into a partnership?",
    answer:
      "Yes, absolutely. While our current community fieldwork and student clubs have deep roots in Bangladesh and South Asia, Atlas AI Institute operates with an international scope. We actively welcome global research consortia, international development agencies, and cross-border digital rights coalitions from all regions.",
  },
  {
    id: "faq-6",
    category: "Intellectual Property",
    question: "How does Atlas AI Institute handle intellectual property, joint publications, and research data?",
    answer:
      "All intellectual property terms are clearly specified in the bilateral partnership agreement prior to project commencement. As an educational and research institution, we strongly champion open-access publication, Creative Commons licensing for public educational assets, and transparent co-authorship for collaborative research papers.",
  },
  {
    id: "faq-7",
    category: "Safeguarding",
    question: "What safeguarding standards and child protection protocols are required for educational partners?",
    answer:
      "All educational and youth-facing partners must formally commit to Atlas AI Institute's Safeguarding & 'Do No Harm' principles. This includes zero tolerance for intimate-image collection, mandatory faculty supervision for student clubs, verified parental/institutional consent for minors, and adherence to strict data minimization.",
  },
  {
    id: "faq-8",
    category: "Tech Collaboration",
    question: "Can commercial technology and artificial intelligence enterprises participate in safety research?",
    answer:
      "Yes. We collaborate with responsible technology companies on technical safety audits, synthetic media forensics research, red-teaming exercises, and educational tooling. However, all technical partnerships must adhere to non-commercial ethics and our core institutional independence principles.",
  },
  {
    id: "faq-9",
    category: "Evaluation",
    question: "How are partnership milestones, deliverables, and real-world impact evaluated?",
    answer:
      "Every formal partnership includes an agreed Monitoring, Evaluation, and Learning (MEL) framework. We evaluate progress against quantifiable metrics: number of learners completing verified safety certifications, active school clubs established, educator master trainers certified, empirical reports published, and verified community referral outcomes.",
  },
  {
    id: "faq-10",
    category: "Independent Experts",
    question: "How can individual researchers, digital forensics experts, or legal advocates collaborate?",
    answer:
      "Individual practitioners can contribute as expert advisors, peer reviewers, or guest lecturers. You may submit an enquiry through our Partnership form selecting 'Expert & Professional Networks' or apply via our Expert Network portal. All expert profiles undergo formal administrative credential verification prior to appointment.",
  },
];
