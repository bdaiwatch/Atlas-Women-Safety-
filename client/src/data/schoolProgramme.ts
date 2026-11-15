export type MonthlyClubPlan = {
  month: string;
  title: string;
  focus: string;
  session: string;
  exercise: string;
  campaign: string;
  studentActivity: string;
  assessment: string;
  report: string;
};

export const clubRoles = [
  ["President", "Leads club meetings and coordinates approved educational activities under teacher supervision."],
  ["Vice President", "Assists the President and supports peer coordination across monthly awareness campaigns."],
  ["General Secretary", "Maintains aggregate club meeting records, schedules, and activity attendance logs."],
  ["AI Safety Lead", "Facilitates peer learning sessions on AI literacy, synthetic media, and deepfake verification."],
  ["Digital Safety Lead", "Guides practice account security reviews, passphrase hygiene, and privacy checklists."],
  ["Communications and Awareness Lead", "Coordinates school noticeboard campaigns and peer safety posters; does not handle crisis disclosures."],
  ["General Members", "Participate in monthly learning modules, peer workshops, and school-wide awareness projects."],
  ["Faculty Adviser / Teacher Coordinator", "Authorised school staff member providing mandatory adult supervision, policy alignment, and safeguarding escalation."],
] as const;

export const schoolToolkit = [
  "School Implementation Guide",
  "Club Constitution",
  "Club Establishment Letter",
  "Student Membership Form",
  "Teacher Adviser Handbook",
  "Student Digital Safety Handbook",
  "Monthly Activity Planner",
  "Digital Safety and Deepfake Awareness Posters",
  "Cybercrime Prevention Checklist",
  "Safe Reporting Guide",
  "Club Activity Reporting Template",
  "Six-Month Programme Calendar",
  "Student Safety Pledge",
] as const;

export const monthlyClubPlans: MonthlyClubPlan[] = [
  {
    month: "Month 01",
    title: "AI-Enabled Gender-Based Violence and Digital Safety",
    focus: "Understanding technology-facilitated gender-based violence (TFGBV), recognising online abuse, and adopting foundational digital safety habits.",
    session: "Use fictional scenarios to explore technology-facilitated gender-based violence (TFGBV), digital harassment, and account impersonation.",
    exercise: "Audit practice accounts for essential security hygiene: passphrase strength, Multi-Factor Authentication (MFA), screen locks, and location-sharing restrictions.",
    campaign: "Design a school noticeboard display or digital bulletin: 'Pause, Protect Your Accounts, and Connect with Trusted Adults.'",
    studentActivity: "Facilitate a student-led classroom orientation on safe digital habits without requesting or recording personal disclosures.",
    assessment: "Five-question knowledge check on warning signs of digital harassment, account security essentials, and safe help-seeking.",
    report: "Record aggregate student attendance, activity completion, and general learning reflections only—never record personal disclosures or incident details.",
  },
  {
    month: "Month 02",
    title: "Cybercrime, Harassment and Sextortion Awareness",
    focus: "Understanding cyberbullying, phishing scams, blackmail, sextortion risks, and safe containment strategies.",
    session: "Examine hypothetical scenarios illustrating social engineering, urgent phishing solicitations, cyberbullying, and digital blackmail.",
    exercise: "Practise the calm pause-and-respond framework: disengage immediately, preserve factual references safely, and consult a trusted adult or Teacher Adviser.",
    campaign: "Distribute a peer awareness bulletin: 'Never Share Verification OTPs or Intimate Imagery—Support Is Available.'",
    studentActivity: "Collaborate in small groups to map a safe decision-tree response for a fictional peer experiencing online intimidation.",
    assessment: "Scenario evaluation identifying safe vs. risky containment choices in four practical case studies.",
    report: "Confirm session delivery, campaign reach, and aggregate participation numbers; strictly exclude any personal incident reports.",
  },
  {
    month: "Month 03",
    title: "Deepfakes, Image-Based Abuse and Impersonation",
    focus: "Understanding synthetic media, artificial manipulation, non-consensual imagery risks, and responsible verification.",
    session: "Explain how generative AI creates synthetic audio, imagery, and video, discussing the ethical boundaries of digital media without blaming targets.",
    exercise: "Use a structured media verification checklist to evaluate source context, visual artifacts, and publication dates on non-explicit sample content.",
    campaign: "Produce a school-wide awareness poster highlighting the rule: 'Pause, Verify Context, and Never Forward or Amplify Manipulated Media.'",
    studentActivity: "Host a teacher-supervised media literacy quiz using synthetic educational media to demonstrate that AI detection tools are imperfect.",
    assessment: "Five-question assessment on synthetic media identification limits, privacy-preserving reporting routes, and ethical sharing standards.",
    report: "Document student participation counts and aggregated quiz outcomes, omitting names and personal images.",
  },
  {
    month: "Month 04",
    title: "Women's Digital Rights, Privacy and Personal Data",
    focus: "Establishing digital consent, personal boundaries, account privacy controls, data minimisation, and responsible communication.",
    session: "Discuss informed consent, digital boundaries, data minimisation, and the principle that private sharing never implies consent to redistribute.",
    exercise: "Conduct a step-by-step privacy audit on practice accounts, adjusting audience filters, tagged-photo review, and contact syncing permissions.",
    campaign: "Launch a school campaign: 'Your Data, Your Boundaries—Respecting Consent and Privacy Across Online Spaces.'",
    studentActivity: "Develop a privacy-by-design communications checklist for student club announcements and school social media notices.",
    assessment: "Practical exercise matching common digital privacy exposures with appropriate protective configurations.",
    report: "Record the number of students completing the practice audit and note teacher observations; never log private personal data.",
  },
  {
    month: "Month 05",
    title: "Misinformation and Manipulation Targeting Women",
    focus: "Addressing gendered misinformation, defamatory claims, source verification, and responsible information sharing.",
    session: "Examine how gendered misinformation, false allegations, and doctored screenshots spread online and how to verify claims objectively.",
    exercise: "Complete a source-verification worksheet analyzing publication date, author transparency, and independent secondary confirmation on sample posts.",
    campaign: "Coordinate a campus-wide awareness initiative: 'Verify Before You Believe—Check Sources, Dates, and Original Context.'",
    studentActivity: "Organize a structured, teacher-supervised fact-checking exercise using non-sensitive fictional claims.",
    assessment: "Categorize sample online communications into appropriate responses: verify independently, pause, report, or do not amplify.",
    report: "Summarize aggregate campaign visibility, student engagement levels, and learning reflections.",
  },
  {
    month: "Month 06",
    title: "Support, Reporting and Student-Led Safety Projects",
    focus: "Understanding safe reporting pathways, evidence preservation, referral awareness, and executing a culminating school safety project.",
    session: "Clarify institutional support channels and define the strict limits of school clubs: students and teachers do not act as investigators or counsellors.",
    exercise: "Draft a private, hypothetical support and escalation plan identifying trusted adult contacts, official helplines, and verified reporting tools.",
    campaign: "Showcase a culminating school-wide digital safety exhibition featuring student-developed awareness materials and posters.",
    studentActivity: "Present a student-led digital safety project reviewed and approved by the Teacher Adviser.",
    assessment: "Comprehensive final knowledge check and anonymous programme feedback survey evaluating key digital safety concepts.",
    report: "Submit an aggregate six-month programme completion summary and institutional safeguarding compliance confirmation.",
  },
];
