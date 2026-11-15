export type ResourceCategory =
  | "AI & Deepfake"
  | "Privacy & Accounts"
  | "Evidence & Reporting"
  | "Rights & Support";

export type ChecklistLine = {
  en: string;
  bn: string;
};

export type ToolkitDocument = {
  id: string;
  number: string;
  titleEn: string;
  titleBn: string;
  descriptionBn: string;
  descriptionEn: string;
  noticeBn: string;
  noticeEn: string;
  items: readonly ChecklistLine[];
  reflectionPrompts: readonly ChecklistLine[];
};

export type IntermediateManualDocument = {
  id: string;
  number: string;
  moduleRef: string;
  titleEn: string;
  titleBn: string;
  descriptionBn: string;
  descriptionEn: string;
  sections: readonly {
    headingEn: string;
    headingBn: string;
    points: readonly ChecklistLine[];
  }[];
  safetyNoteEn: string;
  safetyNoteBn: string;
};

export type ResourceGuide = {
  id: string;
  number: string;
  category: ResourceCategory;
  readTime: string;
  status: "Reviewed" | "Guidance under review";
  titleEn: string;
  titleBn: string;
  summaryEn: string;
  summaryBn: string;
  stepsEn: string[];
  stepsBn: string[];
  courseModuleLabel: string;
  toolkitId?: string;
};

export const featuredGuideSteps = [
  {
    step: "01",
    titleEn: "Pause and Avoid Paying or Negotiating",
    titleBn: "থামুন এবং কোনো অর্থ প্রদান বা আপস করবেন না",
    detailEn:
      "Avoid responding impulsively to threats, sending money, or negotiating with suspected extortionists. Paying rarely stops harassment and frequently results in escalating demands. Take a calm pause and seek support from a trusted ally or verified channel before acting.",
    detailBn:
      "হুমকিতে তাৎক্ষণিক প্রতিক্রিয়া দেওয়া, অর্থ পাঠানো বা আপস করা থেকে বিরত থাকুন। অর্থ প্রদান হয়রানি বন্ধ করে না বরং নতুন দাবির ঝুঁকি তৈরি করে। শান্ত থাকুন এবং বিশ্বস্ত কারও সহায়তা নিন।",
  },
  {
    step: "02",
    titleEn: "Secure Your Accounts",
    titleBn: "নিজের অ্যাকাউন্টসমূহ সুরক্ষিত করুন",
    detailEn:
      "Using an uncompromised, trusted device, update passwords on your email, messaging, and social media accounts. Enable Multi-Factor Authentication (MFA), sign out of all active and unrecognized sessions, and review your account recovery email addresses and phone numbers.",
    detailBn:
      "নিরাপদ ডিভাইস ব্যবহার করে ইমেইল ও সোশ্যাল অ্যাকাউন্টের পাসওয়ার্ড পরিবর্তন করুন, MFA চালু করুন, অপরিচিত সেশন থেকে লগআউট করুন এবং রিকভারি তথ্য পরীক্ষা করুন।",
  },
  {
    step: "03",
    titleEn: "Preserve Safe Evidence References",
    titleBn: "নিরাপদ তথ্যের রেফারেন্স সংরক্ষণ করুন",
    detailEn:
      "Privately record relevant usernames, complete profile URLs, timestamps, and visible communication context in an offline notebook or secure folder. Never download, forward, or redistribute intimate or explicit imagery, and exercise heightened safeguarding caution whenever a minor may be involved.",
    detailBn:
      "অ্যাকাউন্টের ইউজারনেম, পূর্ণ URL, তারিখ-সময় ও বার্তা নিরাপদে লিখে রাখুন। অন্তরঙ্গ ছবি কখনোই ডাউনলোড, ফরোয়ার্ড বা পুনরায় শেয়ার করবেন না, বিশেষ করে অপ্রাপ্তবয়স্ক জড়িত থাকলে বাড়তি সতর্কতা নিন।",
  },
  {
    step: "04",
    titleEn: "Report Through Appropriate Channels",
    titleBn: "যথাযথ মাধ্যমে রিপোর্ট করুন",
    detailEn:
      "Submit reports through official in-platform reporting mechanisms and document case reference numbers. For non-consensual intimate imagery involving adults (18+), utilize StopNCII.org to generate privacy-preserving cryptographic hashes that help platforms detect and prevent resharing without uploading the image itself. For legal or cybercrime assistance in Bangladesh, contact Police Cyber Support for Women (PCSW: 01320000888) or the National Helpline (109).",
    detailBn:
      "প্ল্যাটফর্মের অফিশিয়াল রিপোর্ট টুলে রিপোর্ট করুন এবং রেফারেন্স নম্বর রাখুন। প্রাপ্তবয়স্কদের (১৮+) অন্তরঙ্গ ছবির ক্ষেত্রে ছবি আপলোড না করেই হ্যাশ তৈরির মাধ্যমে StopNCII.org ব্যবহার করা যায়। বাংলাদেশে সহায়তার জন্য PCSW (01320000888) বা ১০৯-এ যোগাযোগ করুন।",
  },
];

export const resourceGuides: ResourceGuide[] = [
  {
    id: "ai-enabled-abuse",
    number: "01",
    category: "AI & Deepfake",
    readTime: "5 min read",
    status: "Reviewed",
    titleEn: "AI-Enabled Abuse and Harassment",
    titleBn: "AI ব্যবহার করে হয়রানি ও অপব্যবহার চিনে নিন",
    summaryEn:
      "Understand how generative AI, voice cloning, and automated scraping are weaponized to harass, intimidate, or impersonate individuals online, and learn practical strategies to detect early warning signs.",
    summaryBn:
      "জেনারেটিভ AI, ভয়েস ক্লোনিং বা স্বয়ংক্রিয় টুল ব্যবহার করে কীভাবে অনলাইনে ভয় দেখানো বা ছদ্মবেশ ধারণ করা হয় তা চিনে নিন।",
    stepsEn: [
      "Verify unexpected voice notes, video requests, or urgent claims through a secondary, trusted communication channel.",
      "Restrict profile audience settings to prevent automated scraping of high-resolution personal photos and audio clips.",
      "Avoid submitting personal identification documents or private images into unverified third-party AI editing tools or bots.",
      "Privately document impersonation URLs, account handles, and timestamps before blocking or reporting abusive accounts.",
    ],
    stepsBn: [
      "অস্বাভাবিক ভয়েস মেসেজ বা ভিডিও কল এলে পরিচিত অন্য মাধ্যমে যাচাই করুন।",
      "সোশ্যাল প্রোফাইলে আপনার ছবি কে দেখতে বা ডাউনলোড করতে পারবে তা সীমিত করুন।",
      "অপরিচিত AI এডিটিং অ্যাপ বা বটে ব্যক্তিগত ছবি বা পরিচয়পত্র আপলোড করবেন না।",
      "ভুয়া প্রোফাইল ব্লক বা রিপোর্ট করার আগে লিংক, তারিখ ও সময় লিখে রাখুন।",
    ],
    courseModuleLabel: "Module 01 · AI & Digital Risk",
    toolkitId: "tk-02",
  },
  {
    id: "deepfake-awareness",
    number: "02",
    category: "AI & Deepfake",
    readTime: "4 min read",
    status: "Reviewed",
    titleEn: "Deepfake Awareness and Synthetic Media",
    titleBn: "ডিপফেক সম্পর্কে সচেতনতা ও যাচাই",
    summaryEn:
      "Learn practical visual, acoustic, and contextual verification techniques to identify manipulated media, paired with calm, survivor-centred responses if you or someone you know is targeted.",
    summaryBn:
      "বিকৃত বা কৃত্রিম ছবি-ভিডিও চেনার বাস্তব উপায় এবং কেউ ডিপফেকের শিকার হলে করণীয় ধাপগুলো জানুন।",
    stepsEn: [
      "Pause and avoid amplifying manipulated content: forwarding or public commentary increases exposure and viral reach.",
      "Inspect visual inconsistencies, unnatural lighting reflections, lip-sync latency, irregular hair boundaries, and missing source attribution.",
      "Affirm that targeted individuals are never responsible for non-consensual synthetic media created by abusive actors.",
      "Utilize platform-specific reporting channels for impersonation, non-consensual synthetic media, and copyright violations.",
    ],
    stepsBn: [
      "আতঙ্কিত হয়ে বা যাচাই না করে কোনো ভিডিও বা ছবি ফরওয়ার্ড করবেন না।",
      "আলো, ঠোঁটের নড়াচড়া, ছায়া এবং মূল উৎসের অসঙ্গতি লক্ষ্য করুন।",
      "মনে রাখবেন: অন্যের তৈরি কৃত্রিম কনটেন্টের জন্য ভুক্তভোগী দায়ী নন।",
      "প্ল্যাটফর্মের impersonation ও non-consensual media রিপোর্ট অপশন ব্যবহার করুন।",
    ],
    courseModuleLabel: "Module 02 · Deepfake Literacy",
    toolkitId: "tk-02",
  },
  {
    id: "digital-privacy",
    number: "03",
    category: "Privacy & Accounts",
    readTime: "6 min read",
    status: "Reviewed",
    titleEn: "Digital Privacy and Personal Boundaries",
    titleBn: "ডিজিটাল গোপনীয়তা ও ব্যক্তিগত তথ্য সুরক্ষা",
    summaryEn:
      "Audit location permissions, contact syncing, photo tags, and visibility settings across everyday applications to re-establish clear personal boundaries online.",
    summaryBn:
      "দৈনন্দিন অ্যাপে লোকেশন শেয়ারিং, কন্টাক্ট সিঙ্ক, ট্যাগ করা ছবি ও প্রোফাইলের দৃশ্যমানতা কীভাবে নিয়ন্ত্রণ করবেন।",
    stepsEn: [
      "Audit one application per session, systematically restricting who can view your posts, contact details, stories, and friends lists.",
      "Disable background location access for all non-essential applications that do not require continuous real-time navigation.",
      "Enable mandatory tag review so photos and posts uploaded by others require your explicit consent before appearing on your profile.",
      "Keep daily routines, school schedules, workplace landmarks, and home transit routes strictly off public social posts.",
    ],
    stepsBn: [
      "একবারে একটি অ্যাপ পরীক্ষা করুন: পোস্ট, ফোন নম্বর ও ইমেইল কে দেখবে তা ঠিক করুন।",
      "যে অ্যাপে প্রয়োজন নেই সেখানে ব্যাকগ্রাউন্ড লোকেশন অ্যাক্সেস বন্ধ রাখুন।",
      "অন্যের ট্যাগ করা ছবি আপনার অনুমোদন ছাড়া প্রোফাইলে না আসার সেটিং চালু করুন।",
      "যাতায়াতের পথ, স্কুলের সময়সূচি বা বাড়ির ঠিকানা পাবলিক পোস্টে দেবেন না।",
    ],
    courseModuleLabel: "Module 05 · Privacy Review",
    toolkitId: "tk-05",
  },
  {
    id: "evidence-preservation",
    number: "04",
    category: "Evidence & Reporting",
    readTime: "5 min read",
    status: "Reviewed",
    titleEn: "Safe Evidence Preservation",
    titleBn: "প্রমাণ নিরাপদে সংরক্ষণ",
    summaryEn:
      "Record essential evidentiary context—complete URLs, timestamps, account handles, and incident notes—safely and privately without alerting the perpetrator or violating privacy rules.",
    summaryBn:
      "অপরাধীকে সতর্ক না করে বা ব্যক্তিগত ঝুঁকি না বাড়িয়ে কীভাবে নিরাপদ উপায়ে তারিখ, URL ও তথ্য সংরক্ষণ করবেন।",
    stepsEn: [
      "Record full profile URLs and unique account identifiers rather than display names alone, which can be modified or spoofed.",
      "Note the exact local date, time, platform name, and visible message context in an objective, factual log.",
      "Store evidence logs in a password-protected personal archive or offline notebook rather than online group chats or public cloud drives.",
      "Never download, retain, or redistribute explicit or intimate imagery; document URLs, reference IDs, and text context instead.",
    ],
    stepsBn: [
      "শুধু প্রোফাইল নাম নয়, পূর্ণ প্রোফাইল লিংক (URL) লিখে রাখুন।",
      "সংরক্ষণে তারিখ, সময়, প্ল্যাটফর্ম ও প্রাসঙ্গিক বার্তা স্পষ্টভাবে রাখুন।",
      "সংরক্ষিত তথ্য পাবলিক চ্যাটে নয়, নিরাপদ পাসওয়ার্ডযুক্ত ফোল্ডার বা ব্যক্তিগত নোটবুকে রাখুন।",
      "অন্তরঙ্গ বা আপত্তিকর ফাইল ডাউনলোড বা শেয়ার না করে লিংক ও রেফারেন্স সংরক্ষণ করুন।",
    ],
    courseModuleLabel: "Module 06 · Evidence Log",
    toolkitId: "tk-06",
  },
  {
    id: "safe-reporting",
    number: "05",
    category: "Evidence & Reporting",
    readTime: "5 min read",
    status: "Reviewed",
    titleEn: "Safe Reporting Pathways",
    titleBn: "নিরাপদে রিপোর্ট করার ধাপ",
    summaryEn:
      "Evaluate in-platform escalation, trusted guardian or institutional reporting, and official Bangladesh cyber assistance channels to determine the safest next step.",
    summaryBn:
      "প্ল্যাটফর্ম রিপোর্ট, বিশ্বস্ত অভিভাবক বা স্কুল এবং বাংলাদেশের সরকারি সাইবার সহায়তা চ্যানেল সম্পর্কে পরিষ্কার ধারণা।",
    stepsEn: [
      "Clarify your primary objective: immediate account containment, content removal, emotional support, or formal statutory reporting.",
      "Submit reports through verified in-platform mechanisms and preserve all automated case or reference numbers for future reference.",
      "Involve a trusted teacher adviser, legal aid counselor, or safeguarding lead to support formal reporting without facing secondary trauma.",
      "Contact verified official support channels, including Police Cyber Support for Women (PCSW: 01320000888), National Helpline (109), or Emergency (999).",
    ],
    stepsBn: [
      "আগে ঠিক করুন আপনি কী চান: অ্যাকাউন্ট সুরক্ষা, কনটেন্ট অপসারণ, সহায়তা নাকি আইনি রিপোর্ট।",
      "প্ল্যাটফর্মের ভেতর থেকে রিপোর্ট করুন এবং রিপোর্ট রেফারেন্স নম্বর সংরক্ষণ করুন।",
      "প্রয়োজনে বিশ্বস্ত প্রাপ্তবয়স্ক, শিক্ষক বা সরকারি আইন সহায়তার মাধ্যমে রিপোর্ট করুন।",
      "Bangladesh Police PCSW (01320000888), ১০৯ বা ৯৯৯-এর মাধ্যমে সরকারি সহায়তা নিন।",
    ],
    courseModuleLabel: "Module 07 · Reporting Plan",
    toolkitId: "tk-07",
  },
  {
    id: "digital-consent",
    number: "06",
    category: "Rights & Support",
    readTime: "4 min read",
    status: "Reviewed",
    titleEn: "Understanding Digital Consent",
    titleBn: "ডিজিটাল সম্মতি বুঝুন",
    summaryEn:
      "Establish the foundational principles of consent in online interactions: private sharing of messages or imagery never authorizes redistribution, alteration, or coercive leverage.",
    summaryBn:
      "ব্যক্তিগত কোনো ছবি বা তথ্য শেয়ার করার সম্মতি মানে তা অন্য কোথাও প্রকাশ, পরিবর্তন বা হুমকির কাজে ব্যবহারের অনুমতি নয়।",
    stepsEn: [
      "Consent is specific, informed, freely given, and revocable at any moment across all digital communications.",
      "Demanding passwords, real-time geolocation, or private photos under duress constitutes digital coercion and control.",
      "Responsibility for non-consensual disclosure or manipulation rests solely on the individual who violated consent, never on the targeted person.",
      "Support targeted peers without judgment or victim-blaming by actively listening, respecting boundaries, and connecting them to trusted safety resources.",
    ],
    stepsBn: [
      "সম্মতি নির্দিষ্ট, সচেতন, স্বেচ্ছাপ্রণোদিত এবং যেকোনো সময় প্রত্যাহারযোগ্য।",
      "পাসওয়ার্ড, লাইভ লোকেশন বা ব্যক্তিগত ছবির জন্য চাপ দেওয়া ডিজিটাল নিয়ন্ত্রণ ও জবরদস্তি।",
      "সম্মতি ভঙ্গ হলে সম্পূর্ণ দায় সেই ব্যক্তির যিনি অনুমতি ছাড়া প্রকাশ বা বিকৃত করেছেন।",
      "সহপাঠী বা বন্ধুকে দোষারোপ না করে পাশে থাকুন ও নিরাপদ সহায়তার পথ দেখান।",
    ],
    courseModuleLabel: "Module 01 · Digital Boundaries",
    toolkitId: "tk-04",
  },
  {
    id: "account-security",
    number: "07",
    category: "Privacy & Accounts",
    readTime: "5 min read",
    status: "Reviewed",
    titleEn: "Account and Device Security Essentials",
    titleBn: "অ্যাকাউন্ট ও ডিভাইস সুরক্ষিত রাখুন",
    summaryEn:
      "Practical operational security measures including resilient passphrases, Multi-Factor Authentication (MFA), active session auditing, and verified recovery procedures.",
    summaryBn:
      "শক্তিশালী পাসফ্রেজ, টু-ফ্যাক্টর প্রমাণীকরণ (MFA), লগইন সেশন পরীক্ষা এবং রিকভারি নিরাপত্তা।",
    stepsEn: [
      "Implement unique, memorable passphrases of 12–16+ characters for primary email, communication, and banking accounts.",
      "Enable app-based or hardware Multi-Factor Authentication (MFA) instead of SMS-only verification whenever supported.",
      "Audit connected third-party applications, revoking permissions for services and extensions that are no longer actively used.",
      "Sign out completely and clear browser cache whenever using shared computers in schools, internet cafes, or public libraries.",
    ],
    stepsBn: [
      "ইমেইল ও প্রধান অ্যাকাউন্টে অন্তত ১২–১৬ অক্ষরের আলাদা ও শক্তিশালী পাসফ্রেজ ব্যবহার করুন।",
      "সম্ভব হলে SMS-এর বদলে authenticator app-ভিত্তিক MFA চালু করুন।",
      "অপ্রয়োজনীয় থার্ড-পার্টি অ্যাপ ও ব্রাউজার এক্সটেনশন সংযোগ বিচ্ছিন্ন করুন।",
      "শেয়ার করা স্কুল বা লাইব্রেরি কম্পিউটার ব্যবহারের পর অবশ্যই লগআউট করুন।",
    ],
    courseModuleLabel: "Module 01 · Safer Accounts",
    toolkitId: "tk-01",
  },
  {
    id: "phishing-social-engineering",
    number: "08",
    category: "Privacy & Accounts",
    readTime: "4 min read",
    status: "Reviewed",
    titleEn: "Phishing and Social Engineering Defence",
    titleBn: "ফিশিং ও সামাজিক প্রকৌশল প্রতিরোধ",
    summaryEn:
      "Recognize urgent OTP solicitations, fraudulent educational or employment opportunities, and impersonated support communications before disclosing credentials.",
    summaryBn:
      "ভুয়া OTP চাওয়া, স্কলারশিপ বা চাকরির প্রলোভন এবং জরুরি ভয়ের মেসেজ চিনে প্রতারণা থেকে বাঁচুন।",
    stepsEn: [
      "Never disclose OTPs, PINs, or password reset verification links—official support representatives will never request them.",
      "Pause whenever a communication invokes artificial urgency, imminent account suspension, or emotional coercion.",
      "Examine domain spelling and email sender headers closely rather than relying on brand logos or formatted display names.",
      "Navigate directly to official services by typing known URLs into your browser rather than clicking links in unsolicited messages.",
    ],
    stepsBn: [
      "কখনোই OTP, পিন বা পাসওয়ার্ড রিসেট লিংক দেবেন না—বৈধ প্রতিষ্ঠান এগুলো চায় না।",
      "তীব্র তাড়াহুড়ো বা ভয় দেখানো মেসেজ পেলে ক্লিক করার আগে থামুন।",
      "ডিসপ্লে নাম বা লোগো দেখে নয়, আসল ওয়েব ঠিকানার (domain) বানান পরীক্ষা করুন।",
      "ফরওয়ার্ড করা লিংকে ক্লিক না করে নিজে ব্রাউজারে অফিশিয়াল ঠিকানা লিখে প্রবেশ করুন।",
    ],
    courseModuleLabel: "Module 03 · Scam Pause",
    toolkitId: "tk-03",
  },
  {
    id: "bd-digital-rights",
    number: "09",
    category: "Rights & Support",
    readTime: "6 min read",
    status: "Guidance under review",
    titleEn: "Women's Digital Rights in Bangladesh",
    titleBn: "বাংলাদেশে নারীর ডিজিটাল অধিকার",
    summaryEn:
      "An objective overview of rights-based digital safety, institutional responsibilities, government legal aid (16430), and verified cyber support mechanisms in Bangladesh.",
    summaryBn:
      "বাংলাদেশে নারীর ডিজিটাল অধিকার, প্রাতিষ্ঠানিক দায়িত্ব, সরকারি আইন সহায়তা (১৬৪৩০) ও সাইবার সহায়তা পথের পরিচিতি।",
    stepsEn: [
      "Women and girls hold the fundamental right to learn, communicate, and participate in digital spaces free from intimidation, abuse, and harassment.",
      "The National Legal Aid Services Organization (16430) offers toll-free legal information, preliminary guidance, and institutional referrals.",
      "Police Cyber Support for Women (PCSW) operates a specialized cyber assistance helpline for female survivors at 01320000888.",
      "Statutory laws, regulations, and reporting mechanisms evolve; verify current legal procedures through official government portals or qualified counsel.",
    ],
    stepsBn: [
      "হয়রানি ও ভয়ভীতি ছাড়াই নিরাপদে অনলাইন শিক্ষা, কাজ ও মতপ্রকাশ নারীর অধিকার।",
      "সরকারি আইন সহায়তা হেল্পলাইন ১৬৪৩০ থেকে প্রাথমিক আইনগত তথ্য ও পরামর্শ পাওয়া যায়।",
      "নারীর সাইবার অপরাধ সহায়তার জন্য Police Cyber Support for Women (01320000888) রয়েছে।",
      "আইন ও প্রক্রিয়াগত সর্বশেষ তথ্যের জন্য অফিশিয়াল সরকারি উৎস বা আইনজীবীর পরামর্শ নিন।",
    ],
    courseModuleLabel: "Module 08 · Action Plan",
    toolkitId: "tk-08",
  },
];

export const toolkitDocuments: ToolkitDocument[] = [
  {
    id: "tk-01",
    number: "01",
    titleEn: "Safer Accounts Checklist",
    titleBn: "নিরাপদ অ্যাকাউন্টের তালিকা",
    descriptionBn: "পাসফ্রেজ, MFA, লগইন সেশন ও রিকভারি তথ্য পরীক্ষার ধাপ।",
    descriptionEn: "A practical checklist for reviewing passphrases, multi-factor authentication, active login sessions and account recovery settings.",
    noticeBn: "এই তালিকাটি নিজের অ্যাকাউন্টের জন্য ব্যবহার করুন। কোথাও পাসওয়ার্ড বা OTP লিখবেন না।",
    noticeEn: "Use this checklist privately to review your own accounts. Never record passwords, PINs, or one-time verification codes.",
    items: [
      {
        bn: "গুরুত্বপূর্ণ অ্যাকাউন্টে আলাদা ও দীর্ঘ passphrase (১২–১৬+ অক্ষর) ব্যবহার করছি।",
        en: "Use a unique, long passphrase (12–16+ characters) across each primary email, social media, and messaging account.",
      },
      {
        bn: "যেখানে সুবিধাটি আছে, multi-factor authentication (MFA/2FA) চালু করেছি।",
        en: "Enable app-based Multi-Factor Authentication (MFA/2FA) wherever supported across your services.",
      },
      {
        bn: "সাম্প্রতিক লগইন কার্যকলাপ দেখে অপরিচিত device থেকে sign out করেছি।",
        en: "Review active login sessions and sign out of all unfamiliar or outdated devices immediately.",
      },
      {
        bn: "নিরাপদ device থেকে recovery email ও phone details পরীক্ষা করেছি।",
        en: "Verify recovery email addresses and backup telephone numbers from an uncompromised, trusted device.",
      },
      {
        bn: "Location sharing, tagged photo, story audience এবং contact syncing পরীক্ষা করেছি।",
        en: "Audit location sharing, tag approval, story privacy, and contact synchronization settings.",
      },
      {
        bn: "আর ব্যবহার করি না—এমন পুরোনো app ও connected service সরিয়েছি।",
        en: "Revoke permissions for unneeded third-party applications and inactive connected services.",
      },
      {
        bn: "Official app store বা device settings থেকে system ও app update করেছি।",
        en: "Update device operating systems, browsers, and mobile applications strictly via official platform stores.",
      },
      {
        bn: "সাহায্যের জন্য অন্তত একজন বিশ্বস্ত মানুষের কথা নির্ধারণ করে রেখেছি।",
        en: "Identify at least one trusted adult, mentor, or peer ally to contact if security concerns arise.",
      },
    ],
    reflectionPrompts: [
      {
        bn: "আজ কোন account বা device পরীক্ষা করলাম এবং পরের নিরাপদ কাজ কী?",
        en: "Which account or device did you secure today, and what is your single priority action for tomorrow?",
      },
    ],
  },
  {
    id: "tk-02",
    number: "02",
    titleEn: "Deepfake Response Card",
    titleBn: "ডিপফেক বা পরিবর্তিত কনটেন্ট করণীয় কার্ড",
    descriptionBn: "ভুয়া বা পরিবর্তিত ছবি-ভিডিও দেখলে শান্তভাবে নেওয়ার ৭টি ধাপ।",
    descriptionEn: "Seven practical steps for responding calmly and safely when encountering manipulated or AI-generated images, videos or audio.",
    noticeBn: "কোনো video, image বা voice note বানানো বা বদলানো মনে হলে শান্তভাবে এই ৭টি ধাপ অনুসরণ করুন।",
    noticeEn: "If you encounter an altered image, manipulated video, or synthetic audio clip, follow these 7 calm containment steps.",
    items: [
      {
        bn: "১. থামুন। Forward করবেন না এবং একা কাউকে confront করবেন না।",
        en: "1. Pause. Do not forward the media or confront suspected perpetrators alone.",
      },
      {
        bn: "২. সংশ্লিষ্ট ব্যক্তির তাৎক্ষণিক নিরাপত্তা ও privacy-কে আগে গুরুত্ব দিন।",
        en: "2. Prioritize the targeted individual's immediate physical, emotional, and privacy safeguards.",
      },
      {
        bn: "৩. শুধু নিরাপদ ও দরকারি তথ্য রাখুন: account name, URL, তারিখ-সময় ও প্রাসঙ্গিক context।",
        en: "3. Record safe metadata only: profile handles, exact URLs, timestamps, and visible context.",
      },
      {
        bn: "৪. Intimate বা sexual material download বা ছড়াবেন না—বিশেষ করে অপ্রাপ্তবয়স্ক জড়িত থাকলে।",
        en: "4. Never download, save, or circulate intimate imagery—especially if a minor may be involved.",
      },
      {
        bn: "৫. Trusted adult-এর সহায়তায় platform-এর বর্তমান NCII / impersonation report route ব্যবহার করুন।",
        en: "5. Submit reports through official platform NCII, impersonation, or harassment reporting routes with a trusted adult.",
      },
      {
        bn: "৬. প্রয়োজনে StopNCII.org (১৮+) বা Take It Down (<১৮)-এর মতো hash-সুরক্ষা পদ্ধতি সম্পর্কে জানুন।",
        en: "6. Utilize privacy-preserving hash matching (StopNCII.org for adults 18+; Take It Down with a guardian for minors).",
      },
      {
        bn: "৭. মনে রাখুন: অন্যের abuse-এর জন্য targeted person কখনোই দায়ী নয়।",
        en: "7. Remember: the targeted individual is never responsible for abusive or non-consensual media created by others.",
      },
    ],
    reflectionPrompts: [
      {
        bn: "নিরাপদ supporter বা বিশ্বস্ত ব্যক্তি ও platform report reference নোট করার পরিকল্পনা তৈরি রাখুন।",
        en: "Maintain a private record of your trusted support contacts and all official platform report reference IDs.",
      },
    ],
  },
  {
    id: "tk-03",
    number: "03",
    titleEn: "Scam and Phishing Pause Checklist",
    titleBn: "ফিশিং ও প্রতারণা যাচাই তালিকা",
    descriptionBn: "সন্দেহজনক লিংক, OTP দাবি বা জরুরি মেসেজ যাচাইয়ের গাইড।",
    descriptionEn: "A guide to recognising suspicious links, unexpected requests, OTP scams and social engineering attempts.",
    noticeBn: "টাকা, link বা ব্যক্তিগত তথ্য দেওয়ার আগে নিচের ৬টি প্রশ্ন নিজেকে করুন।",
    noticeEn: "Pause and evaluate these 6 questions before clicking links, providing verification details, or transferring money.",
    items: [
      {
        bn: "কেউ কি তাড়াহুড়ো, ভয়, গোপনীয়তা বা মানসিক চাপ তৈরি করছে?",
        en: "Is the message creating artificial urgency, panic, secrecy, or immediate pressure?",
      },
      {
        bn: "অচেনা account বা অজানা number থেকে message এসেছে কি?",
        en: "Did the request originate from an unfamiliar account, unverified sender, or unsolicited number?",
      },
      {
        bn: "Password, OTP, PIN, টাকা বা অন্তরঙ্গ ছবি চাইছে কি?",
        en: "Is anyone requesting a password, OTP, security PIN, advance fee, or private imagery?",
      },
      {
        bn: "আলাদা ও trusted channel দিয়ে request-টি যাচাই করতে পারি কি?",
        en: "Can I independently verify this request through an official phone number or website?",
      },
      {
        bn: "Link বা domain address-এর বানান অস্বাভাবিক বা বিভ্রান্তিকর লাগছে কি?",
        en: "Does the domain spelling or sender address appear altered, misspelled, or slightly modified?",
      },
      {
        bn: "কোনো পদক্ষেপ নেওয়ার আগে একজন trusted person-কে দেখিয়েছি কি?",
        en: "Have I paused to consult a trusted mentor, teacher, or family member before taking action?",
      },
    ],
    reflectionPrompts: [
      {
        bn: "সন্দেহ হলে: থামুন, reply করবেন না, click করবেন না—সত্যিকারের কোনো প্রতিষ্ঠান আপনার OTP বা password চাইবে না।",
        en: "When in doubt: pause, do not reply, and do not tap links—legitimate organizations will never request your passwords or OTPs.",
      },
    ],
  },
  {
    id: "tk-04",
    number: "04",
    titleEn: "Source Verification Worksheet",
    titleBn: "তথ্য ও উৎস যাচাই ওয়ার্কশিট",
    descriptionBn: "অনলাইনে পাওয়া দাবি বা ছবি আসল কি না তা যাচাই করার অনুশীলনী।",
    descriptionEn: "A practical worksheet for checking online claims, images, sources and potentially manipulated information.",
    noticeBn: "যেকোনো ভাইরাল পোস্ট, quote card বা ছবি শেয়ার করার আগে এই ৬টি ধাপ যাচাই করুন।",
    noticeEn: "Run through these 6 source checks before believing, reacting to, or forwarding viral media or claims.",
    items: [
      {
        bn: "১. কে এটি প্রথম তৈরি বা প্রকাশ করেছে? Page Transparency বা author bio দেখুন।",
        en: "1. Who originally produced this content? Check Page Transparency, verified badges, and author history.",
      },
      {
        bn: "২. তারিখ এবং original source কী? পুরোনো ঘটনা কি নতুন বলে চালানো হচ্ছে?",
        en: "2. What is the original publication timestamp? Is archived footage being repurposed out of context?",
      },
      {
        bn: "৩. দ্বিতীয় কোনো নির্ভরযোগ্য ও স্বাধীন news source কি মূল তথ্যটি নিশ্চিত করে?",
        en: "3. Do two independent, reputable news or institutional sources corroborate the core assertion?",
      },
      {
        bn: "৪. Photo/video কি original context-এ ব্যবহার হয়েছে, নাকি AI-নির্মিত বা cropped?",
        en: "4. Is the photo or video shown in its genuine context rather than cropped, staged, or synthetically generated?",
      },
      {
        bn: "৫. ভাষা বা শিরোনাম কি আমাকে রাগ, ভয় বা তাড়াহুড়ো করে শেয়ার করতে প্ররোচিত করছে?",
        en: "5. Is the language deliberately engineered to provoke anger, fear, outrage, or hasty resharing?",
      },
      {
        bn: "৬. কোন তথ্য এখনো অজানা বা যাচাই করা বাকি আছে?",
        en: "6. What critical evidence or contextual facts remain unverified or missing from this claim?",
      },
    ],
    reflectionPrompts: [
      {
        bn: "সিদ্ধান্তের মানদণ্ড: প্রমাণিত না হলে অপেক্ষা করে যাচাই করুন অথবা share করা থেকে বিরত থাকুন।",
        en: "Decision guideline: Withhold judgment and refrain from sharing whenever essential contextual facts remain unverified.",
      },
    ],
  },
  {
    id: "tk-05",
    number: "05",
    titleEn: "App Privacy Review Checklist",
    titleBn: "অ্যাপ গোপনীয়তা পর্যালোচনা তালিকা",
    descriptionBn: "একবারে একটি অ্যাপ বা সোশ্যাল অ্যাকাউন্টের প্রাইভেসি পরীক্ষা করুন।",
    descriptionEn: "A step-by-step review of privacy permissions and security settings for an application or social media account.",
    noticeBn: "একবারে একটি app বা social account পরীক্ষা করুন। App-এর বর্তমান privacy menu দেখে সেটিংস মিলিয়ে নিন।",
    noticeEn: "Review one app per sitting. Platform menus update regularly, so verify settings directly within current application menus.",
    items: [
      {
        bn: "Profile visibility ('Public' vs 'Friends Only') আমার ইচ্ছামতো সীমিত আছে।",
        en: "Profile visibility is restricted to approved contacts rather than open to the general public.",
      },
      {
        bn: "যাদের বেছে নিই, শুধু তারাই story, post, tag ও friend/follower list দেখতে পারে।",
        en: "Only designated contacts can view stories, tagged photos, and follower or following lists.",
      },
      {
        bn: "দরকার না হলে location sharing, photo geotags ও live location বন্ধ আছে।",
        en: "Background location sharing, camera geotagging, and live tracking are disabled when not in use.",
      },
      {
        bn: "App-এর camera, microphone, contacts বা photo access প্রয়োজনের বেশি নয়।",
        en: "Camera, microphone, contacts, and photo storage permissions strictly observe least-privilege standards.",
      },
      {
        bn: "Active session ও connected third-party app তালিকা পরীক্ষা করেছি।",
        en: "Active login sessions and connected third-party integrations have been audited and pruned.",
      },
      {
        bn: "Recovery option (email/phone) updated ও private রাখা আছে।",
        en: "Account recovery emails and phone numbers are verified and concealed from public view.",
      },
      {
        bn: "Block, mute, restrict ও report টুল কোথায় আছে এবং কীভাবে ব্যবহার করতে হয় জানি।",
        en: "Familiarize yourself with the location of block, mute, restrict, keyword filter, and reporting controls.",
      },
    ],
    reflectionPrompts: [
      {
        bn: "আজকের অডিটে কোন একটি প্রাইভেসি সেটিংস পরিবর্তন করলে সবচেয়ে বেশি ঝুঁকি কমে?",
        en: "Which single privacy setting change will provide the greatest reduction in unwanted exposure on your device today?",
      },
    ],
  },
  {
    id: "tk-06",
    number: "06",
    titleEn: "Private Evidence Log Template",
    titleBn: "ব্যক্তিগত তথ্য ও প্রমাণ সংরক্ষণ কাঠামো",
    descriptionBn: "URL, তারিখ, সময় ও প্রাসঙ্গিক তথ্য নিরাপদে লিখে রাখার কাঠামো।",
    descriptionEn: "A secure documentation structure for recording relevant URLs, dates, times and incident-related information without publicly sharing sensitive material.",
    noticeBn: "তথ্যভিত্তিক ও private রাখুন। Password লিখবেন না এবং আপত্তিকর ছবি ডাউনলোড বা শেয়ার করবেন না।",
    noticeEn: "Keep notes factual, objective, and private. Never record passwords or download and redistribute intimate media.",
    items: [
      {
        bn: "১. তারিখ ও সময়: ঘটনাটি ঠিক কবে ও কয়টায় দেখা গেছে (local time সহ)।",
        en: "1. Exact Date & Local Time when the message, post, or profile was first observed.",
      },
      {
        bn: "২. Platform বা app: কোন প্ল্যাটফর্মে ঘটেছে (যেমন: Facebook, Instagram, WhatsApp, TikTok)।",
        en: "2. Platform or Application name where the incident occurred (e.g., Facebook, Instagram, WhatsApp, TikTok).",
      },
      {
        bn: "৩. দেখানো account name ও ID: display name বদলালেও যেন চেনা যায়।",
        en: "3. Account Handle and Unique Identifier shown, ensuring identification even if display names are changed.",
      },
      {
        bn: "৪. সঠিক URL বা post link: পূর্ণ লিংক কপি করে নোট করুন (অসম্পূর্ণ নয়)।",
        en: "4. Complete Profile URL or Post Link copied directly, avoiding incomplete or truncated links.",
      },
      {
        bn: "৫. কী ঘটেছে (শুধু facts): কোনো অনুমান ছাড়াই সংক্ষেপে ঘটনার বিবরণ।",
        en: "5. Objective Summary of what occurred—record observable facts without personal speculation.",
      },
      {
        bn: "৬. এরপর কী করেছি ও Report reference number: ব্লক, মিউট বা প্ল্যাটফর্ম রিপোর্ট নম্বর।",
        en: "6. Immediate Actions Taken and any in-platform report or ticket reference numbers received.",
      },
      {
        bn: "৭. নিরাপদে কে সাহায্য করতে পারেন: বিশ্বস্ত অভিভাবক, শিক্ষক বা PCSW/১০৯ রেফারেন্স।",
        en: "7. Trusted Support Contact or official agency engaged (e.g., guardian, teacher adviser, PCSW, or 109).",
      },
    ],
    reflectionPrompts: [
      {
        bn: "সুরক্ষা টিপস: এই নোটগুলো নিজের অফলাইন নোটবুক বা পাসওয়ার্ড-সুরক্ষিত ফোল্ডারে রাখুন; পাবলিক চ্যাটে নয়।",
        en: "Safeguarding guideline: Store incident logs in an encrypted offline notebook or secure folder—never in shared online chats.",
      },
    ],
  },
  {
    id: "tk-07",
    number: "07",
    titleEn: "Support and Reporting Plan",
    titleBn: "সহায়তা ও রিপোর্টিং পরিকল্পনা",
    descriptionBn: "বিশ্বস্ত মানুষ, প্ল্যাটফর্ম রিপোর্ট ও সরকারি সহায়তার পথ সাজান।",
    descriptionEn: "A planning tool for identifying trusted contacts, platform reporting options and official support pathways.",
    noticeBn: "জরুরি মুহূর্তে বিভ্রান্তি এড়াতে আগে থেকেই নিজের নিরাপদ সহায়তার পরিকল্পনা সাজিয়ে রাখুন।",
    noticeEn: "Prepare your support network and reporting pathways in advance so you can act decisively without distress.",
    items: [
      {
        bn: "তাৎক্ষণিক নিরাপত্তা পদক্ষেপ: অ্যাকাউন্ট লকডাউন, মেসেজ রিকোয়েস্ট সীমিত করা এবং যোগাযোগ বন্ধ রাখা।",
        en: "Immediate containment: restrict message requests, lock down account visibility, and cease direct communication with the abusive party.",
      },
      {
        bn: "প্রথম ও দ্বিতীয় বিশ্বস্ত supporter: প্রথমজন সাড়া দিতে না পারলে বিকল্প বিশ্বস্ত অভিভাবক বা শিক্ষক।",
        en: "Designated support network: identify a primary trusted adult or educator and a backup contact if the primary is unavailable.",
      },
      {
        bn: "Platform reporting route: সংশ্লিষ্ট অ্যাপের NCII, impersonation বা harassment রিপোর্ট ফর্ম।",
        en: "In-platform reporting pathways: locate current reporting forms for harassment, impersonation, or non-consensual intimate imagery.",
      },
      {
        bn: "বাংলাদেশের যাচাইকৃত সরকারি হেল্পলাইন: জরুরি বিপদ ৯৯৯, নারী ও শিশু সহায়তা ১০৯, PCSW 01320000888, আইনি সহায়তা ১৬৪৩০।",
        en: "Official Bangladesh support contacts: Emergency (999), Women & Children Helpline (109), PCSW (01320000888), Legal Aid (16430).",
      },
      {
        bn: "শান্তভাবে সাহায্য চাওয়ার বাক্য: “নিরাপদ plan করতে আমার সাহায্য দরকার। যতটুকু দরকার, তার বেশি share করতে চাই না।”",
        en: "Boundary script: 'I need assistance formulating a safety plan. I will only share necessary details at this time.'",
      },
    ],
    reflectionPrompts: [
      {
        bn: "তাৎক্ষণিক শারীরিক বিপদে নিরাপদ জায়গায় যান এবং বিশ্বস্ত মানুষের সাথে ৯৯৯ বা ১০৯ ব্যবহার করুন।",
        en: "In situations involving immediate physical danger, relocate to a secure environment and contact 999 or 109 with a trusted supporter.",
      },
    ],
  },
  {
    id: "tk-08",
    number: "08",
    titleEn: "30-Day Digital Safety Action Plan",
    titleBn: "৩০ দিনের ডিজিটাল নিরাপত্তা কর্মপরিকল্পনা",
    descriptionBn: "কোর্স শেষে নিজের সুবিধামতো বাস্তবসম্মত নিরাপত্তা পদক্ষেপের নোট।",
    descriptionEn: "A practical plan for developing sustainable digital safety habits after completing the course.",
    noticeBn: "এই পরিকল্পনা ছোট ও বাস্তবসম্মত কাজের জন্য। নিজের পরিস্থিতিতে যে ধাপ নিরাপদ, সেটিই শুরু করুন।",
    noticeEn: "Designed for manageable, private weekly milestones—progress at a pace appropriate to your circumstances.",
    items: [
      {
        bn: "সপ্তাহ ১: একটি গুরুত্বপূর্ণ অ্যাকাউন্ট (প্রাইমারি ইমেইল) review করুন এবং MFA/2FA চালু করুন।",
        en: "Week 1: Audit your primary email account and enable app-based Multi-Factor Authentication (MFA).",
      },
      {
        bn: "সপ্তাহ ১: Official store থেকে device ও browser update করুন এবং একজন trusted supporter নির্ধারণ করুন।",
        en: "Week 1: Update device operating systems and applications through official stores, and identify one trusted support ally.",
      },
      {
        bn: "সপ্তাহ ২–৩: Location, story, tag ও connected-app settings পরীক্ষা করুন।",
        en: "Weeks 2–3: Review location sharing, photo tagging permissions, story privacy, and third-party app access.",
      },
      {
        bn: "সপ্তাহ ২–৩: কাল্পনিক একটি message নিয়ে Scam Pause Checklist ও SIFT যাচাই অনুশীলন করুন।",
        en: "Weeks 2–3: Practice applying the Scam Pause Checklist and source verification techniques on sample scenarios.",
      },
      {
        bn: "সপ্তাহ ৪: কাল্পনিক দৃশ্যপটে একবার Private Evidence Log কাঠামো অনুশীলন করুন।",
        en: "Week 4: Practice drafting a brief, factual 4-line incident entry using the Private Evidence Log template on a hypothetical case.",
      },
      {
        bn: "সপ্তাহ ৪: অফিশিয়াল ৯৯৯, ১০৯, PCSW (01320000888) ও ১৬৪৩০ নম্বর নিরাপদে সংরক্ষণ করুন।",
        en: "Week 4: Safely store verified Bangladesh support contacts (999, 109, PCSW: 01320000888, 16430) on your device.",
      },
    ],
    reflectionPrompts: [
      {
        bn: "৩০ দিন শেষে পুনরায় নিজের নিরাপত্তা অভ্যাস পর্যালোচনা করে পরবর্তী ৬ মাসের লক্ষ্য ঠিক করুন।",
        en: "At the conclusion of 30 days, review your digital habits and define your safety priorities for the subsequent six months.",
      },
    ],
  },
];

export const intermediateManualDocuments: IntermediateManualDocument[] = [
  {
    id: "im-09",
    number: "09",
    moduleRef: "IM1 & IM3",
    titleEn: "Threat Modeling, Session Lockdown & Anti-Doxxing Manual",
    titleBn: "থ্রেট মডেলিং, সেশন লকডাউন ও অ্যান্টি-ডক্সিং ফিল্ড ম্যানুয়াল",
    descriptionEn: "4-step personal threat audit, 6-step session lockdown, and brigading defense.",
    descriptionBn: "৪-ধাপের থ্রেট অডিট, ৬-ধাপের গ্লোবাল সেশন লকডাউন ও ব্রিগেডিং প্রতিরোধ প্রোটোকল।",
    sections: [
      {
        headingEn: "Section 1 · 4-Step Personal & Campus Threat Audit",
        headingBn: "ধাপ ১ · ৪-ধাপের ব্যক্তিগত ও ক্যাম্পাস থ্রেট অডিট",
        points: [
          {
            en: "1. Asset Inventory: List 3 primary accounts + recovery email + SIM card, plus exposed clear portraits/voice clips.",
            bn: "১. অ্যাসেট তালিকা: ৩টি প্রধান অ্যাকাউন্ট, রিকভারি ইমেইল, সিম এবং পাবলিক ছবি/ভয়েস ক্লিপ চিহ্নিত করুন।",
          },
          {
            en: "2. Exposure Check ('View as Public'): Audit follower lists, tagged albums, phone visibility, and campus check-ins.",
            bn: "২. 'View as Public' অডিট: ফলোয়ার তালিকা, ট্যাগ অ্যালবাম, ফোন দৃশ্যমানতা ও ক্যাম্পাস চেক-ইন দেখুন।",
          },
          {
            en: "3. AI Misuse Lens: Ask whether exposed photos/audio could enable impersonation, voice cloning, or routine tracking.",
            bn: "৩. AI অপব্যবহার বিশ্লেষণ: এই ছবি বা অডিও দিয়ে ভয়েস ক্লোনিং, ছদ্মবেশ বা রুটিন অনুমান সম্ভব কি না দেখুন।",
          },
          {
            en: "4. Layered Control: Lock recovery email + SIM PIN first -> switch to app-based 2FA/passkeys -> tighten audience.",
            bn: "৪. স্তরভিত্তিক সুরক্ষা: রিকভারি ইমেইল ও সিম পিন লক করুন, তারপর অ্যাপ-ভিত্তিক 2FA ও অডিয়েন্স সীমিত করুন।",
          },
        ],
      },
      {
        headingEn: "Section 2 · 6-Step Global Session Lockdown & Anti-Doxxing",
        headingBn: "ধাপ ২ · ৬-ধাপের সেশন লকডাউন ও ব্রিগেডিং প্রতিরোধ",
        points: [
          {
            en: "Start from a clean trusted device, reset recovery email password, and delete unknown email forwarding rules.",
            bn: "নিরাপদ ডিভাইস থেকে রিকভারি ইমেইল পাসওয়ার্ড বদলান এবং অজানা Auto-Forwarding নিয়ম মুছে ফেলুন।",
          },
          {
            en: "Trigger 'Log out of all active sessions', revoke unused OAuth connected apps, and verify backup numbers.",
            bn: "সব অ্যাপে 'Log out of all sessions' করুন, অপ্রয়োজনীয় OAuth সংযোগ কাটুন এবং ব্যাকআপ নম্বর পরীক্ষা করুন।",
          },
          {
            en: "During brigading: switch replies to Followers Only, enable keyword filters, and never quote-post trolls.",
            bn: "ব্রিগেডিং হলে কমেন্ট 'Followers Only' করুন, কিওয়ার্ড ফিল্টার দিন এবং ট্রোল পোস্ট কোট করবেন না।",
          },
        ],
      },
    ],
    safetyNoteEn: "Keep personal security audits private. Never retaliate with counter-doxxing.",
    safetyNoteBn: "অডিট নোট ব্যক্তিগত রাখুন। প্রতিশোধমূলকভাবে কারও ব্যক্তিগত তথ্য প্রকাশ করবেন না।",
  },
  {
    id: "im-10",
    number: "10",
    moduleRef: "IM2, IM4 & IM5",
    titleEn: "First-Hour Deepfake Containment & Sextortion Manual",
    titleBn: "১ ঘণ্টার ডিপফেক কন্টেইনমেন্ট ও সেক্সটর্শন প্রতিরোধ ম্যানুয়াল",
    descriptionEn: "Zero-payment rule, StopNCII/Take It Down hash workflow, and Bangladesh escalation.",
    descriptionBn: "জিরো-পেমেন্ট নীতি, StopNCII হ্যাশ-সুরক্ষা ও বাংলাদেশের সরকারি সহায়তা প্রোটোকল।",
    sections: [
      {
        headingEn: "Minute 0–30 · Stabilize, Zero-Payment & Safe Metadata Logging",
        headingBn: "মিনিট ০–৩০ · জিরো-পেমেন্ট ও নিরাপদ মেটাডাটা সংরক্ষণ",
        points: [
          {
            en: "ZERO-PAYMENT RULE: Stop communicating immediately; paying extortionists escalates demands.",
            bn: "জিরো-পেমেন্ট নীতি: ব্ল্যাকমেইলারদের সাথে কথা বলা বন্ধ করুন; টাকা দিলে দাবি আরও বাড়ে।",
          },
          {
            en: "Capture ONLY factual metadata: exact Profile/Post URL, Date & Timestamp, and payment phone/wallet ID.",
            bn: "শুধু তথ্যগত মেটাডাটা সংরক্ষণ করুন: পূর্ণ URL, তারিখ-সময় ও আর্থিক প্রতারকের নম্বর/অ্যাকাউন্ট ID।",
          },
          {
            en: "CRITICAL: Never forward, upload, or hoard intimate or synthetic sexual imagery across chats.",
            bn: "সতর্কতা: অন্তরঙ্গ বা কৃত্রিম আপত্তিকর ছবি-ভিডিও কখনোই চ্যাটে ফরওয়ার্ড বা সংরক্ষণ করবেন না।",
          },
        ],
      },
      {
        headingEn: "Minute 30–60 · Takedowns, Hash Protection & Bangladesh Escalation",
        headingBn: "মিনিট ৩০–৬০ · টেকডাউন, হ্যাশ সুরক্ষা ও সরকারি সহায়তা",
        points: [
          {
            en: "Submit platform NCII / Synthetic Impersonation reports and learn StopNCII.org (18+) / Take It Down (<18 with guardian).",
            bn: "প্ল্যাটফর্মে NCII রিপোর্ট করুন এবং StopNCII.org (১৮+) বা Take It Down (<১৮) সম্পর্কে জানুন।",
          },
          {
            en: "Bangladesh Official Routes: Emergency 999 / 109, Police Cyber Support for Women (01320000888), Legal Aid 16430.",
            bn: "বাংলাদেশের যাচাইকৃত পথ: জরুরি ৯৯৯ / ১০৯, PCSW (01320000888), সরকারি আইন সহায়তা ১৬৪৩০।",
          },
          {
            en: "Never trust paid 'deepfake removal hackers' on social media—those are secondary scams.",
            bn: "সোশ্যাল মিডিয়ায় অর্থের বিনিময়ে 'ডিপফেক ডিলিট হ্যাকার'-দের বিশ্বাস করবেন না—এগুলো দ্বিতীয় স্তরের প্রতারণা।",
          },
        ],
      },
    ],
    safetyNoteEn: "For active financial phishing/fraud, immediately call the official helpline printed on the back of your bank card.",
    safetyNoteBn: "আর্থিক প্রতারণার শিকার হলে মুহূর্তের মধ্যে ব্যাংকের কার্ডের পেছনের অফিশিয়াল হেল্পলাইনে কল করে অ্যাকাউন্ট ফ্রিজ করুন।",
  },
  {
    id: "im-11",
    number: "11",
    moduleRef: "IM6, IM8, IM9 & IM10 (30% AI Literacy)",
    titleEn: "AI Literacy, Safe Prompt Hygiene & SIFT Verification Handbook",
    titleBn: "AI সাক্ষরতা, নিরাপদ প্রম্পট হাইজিন ও SIFT যাচাই হ্যান্ডবুক",
    descriptionEn: "LLM limits, diffusion inpainting, 5-rule prompt hygiene, and SIFT disinformation checks.",
    descriptionBn: "LLM ও ডিফিউশন ধারণা, ৫-সূত্রের প্রম্পট হাইজিন, ফিড অডিট ও SIFT যাচাই পদ্ধতি।",
    sections: [
      {
        headingEn: "Part A · How Modern AI Works & 5-Rule Safe Prompt Hygiene",
        headingBn: "অংশ ক · আধুনিক AI-এর কাজের ধরন ও ৫-সূত্রের প্রম্পট হাইজিন",
        points: [
          {
            en: "LLMs predict likely next tokens—they do NOT verify factual truth and can hallucinate fake legal sections or numbers.",
            bn: "LLM সম্ভাব্য পরবর্তী শব্দ অনুমান করে—সত্য যাচাই করে না; তাই ভুয়া আইন বা হেল্পলাইন নম্বর বানিয়ে দিতে পারে।",
          },
          {
            en: "Diffusion models reconstruct pixels from noise; photorealistic images are never automatic proof without context.",
            bn: "ডিফিউশন মডেল নয়েজ থেকে ছবি বানায়; তাই বাস্তবসম্মত দেখতে হলেও প্রসঙ্গ ছাড়া ছবি প্রমাণ নয়।",
          },
          {
            en: "Prompt Hygiene: Anonymize personal identifiers ([NAME], [COLLEGE]), turn off 'Train on my content', and never upload others' photos.",
            bn: "প্রম্পট হাইজিন: নাম/ঠিকানা বাদ দিন, 'Train on my content' বন্ধ রাখুন এবং অন্যের ছবি আপলোড করবেন না।",
          },
        ],
      },
      {
        headingEn: "Part B · Algorithmic Feed Hygiene & SIFT Verification",
        headingBn: "অংশ খ · অ্যালগরিদম ফিড রিসেট ও SIFT যাচাই পদ্ধতি",
        points: [
          {
            en: "Algorithms amplify outrage and watch time: use 'Not Interested' instead of arguing under hostile videos.",
            bn: "অ্যালগরিদম ক্ষোভ ও ওয়াচ-টাইম বাড়াতে চায়—ক্ষতিকর ভিডিওতে কমেন্ট না করে 'Not Interested' ব্যবহার করুন।",
          },
          {
            en: "SIFT Audit: [S] Stop -> [I] Investigate source/Page Transparency -> [F] Find better coverage -> [T] Trace original.",
            bn: "SIFT যাচাই: [S] থামুন -> [I] উৎস পরীক্ষা করুন -> [F] ভিন্ন নির্ভরযোগ্য সূত্র খুঁজুন -> [T] মূল উৎস ধরুন।",
          },
        ],
      },
    ],
    safetyNoteEn: "Never treat public AI chatbots as confidential crisis counselors or verified legal databases.",
    safetyNoteBn: "পাবলিক AI চ্যাটবটকে কখনোই গোপনীয় কাউন্সেলর বা চূড়ান্ত আইনি উৎস হিসেবে ব্যবহার করবেন না।",
  },
  {
    id: "im-12",
    number: "12",
    moduleRef: "IM7",
    titleEn: "Peer Leadership, 4D Bystander & Zero-Disclosure Club Manual",
    titleBn: "পিয়ার লিডারশিপ, ৪D বাইস্ট্যান্ডার ও ক্লাব ফ্যাসিলিটেশন ম্যানুয়াল",
    descriptionEn: "3-R trauma-informed peer triage, 45-min club workshop runsheet, and 4D bystander model.",
    descriptionBn: "৩-R ট্রমা-সচেতন ট্রায়াজ, ৪৫-মিনিটের নো-ডিসক্লোজার ওয়ার্কশপ রানশিট ও ৪D মডেল।",
    sections: [
      {
        headingEn: "Section 1 · 3-R Trauma-Informed Peer Triage & Minor Boundaries",
        headingBn: "অংশ ১ · ৩-R ট্রমা-সচেতন পিয়ার সহায়তা ও অপ্রাপ্তবয়স্ক নীতি",
        points: [
          {
            en: "R1 (Reassure): 'This is not your fault. I am listening without judgment.'",
            bn: "R1 (আশ্বস্ত করা): 'এতে তোমার কোনো দোষ নেই। আমি কোনো বিচার না করেই শুনছি।'",
          },
          {
            en: "R2 (Respect Choice) & R3 (Refer Safely): Ask what feels safest right now and connect to Teacher Adviser, PCSW, or 109.",
            bn: "R2 ও R3: কোন পদক্ষেপটি নিরাপদ মনে হচ্ছে তা জানুন এবং শিক্ষক উপদেষ্টা, PCSW বা ১০৯-এ যুক্ত করুন।",
          },
          {
            en: "Minor Safeguarding Rule: Never promise absolute secrecy if an under-18 peer faces severe threat or abuse; never view intimate photos as 'proof'.",
            bn: "অপ্রাপ্তবয়স্ক সুরক্ষা নীতি: ১৮ বছরের কম বয়সী ঝুঁকিতে থাকলে সম্পূর্ণ গোপনীয়তার প্রতিশ্রুতি দেবেন না এবং প্রমাণ হিসেবে অন্তরঙ্গ ছবি দেখবেন না।",
          },
        ],
      },
      {
        headingEn: "Section 2 · 45-Minute Zero-Disclosure Workshop & 4D Bystander",
        headingBn: "অংশ ২ · ৪৫-মিনিটের নো-ডিসক্লোজার ওয়ার্কশপ ও ৪D বাইস্ট্যান্ডার মডেল",
        points: [
          {
            en: "Runsheet: Min 0–5 Ground Rules (Fictional only) -> Min 5–15 Concept -> Min 15–30 Group Drill -> Min 30–40 Takeaways -> Min 40–45 Silent Helpline Exit.",
            bn: "রানশিট: ০–৫ মিনিট নিয়ম (শুধু কাল্পনিক) -> ৫–১৫ ধারণা -> ১৫–৩০ দলগত অনুশীলন -> ৩০–৪০ সারাংশ -> ৪০–৪৫ নীরব হেল্পলাইন বিতরণ।",
          },
          {
            en: "4D Bystander Online: Direct (calm boundary), Distract (shift attention & DM support), Delegate (alert moderator/adviser), Document (safe URL/timestamp).",
            bn: "৪D বাইস্ট্যান্ডার: Direct (শান্তভাবে সীমা জানানো), Distract (পাশে দাঁড়ানো), Delegate (মডারেটর/শিক্ষককে জানানো), Document (নিরাপদ URL নোট)।",
          },
        ],
      },
    ],
    safetyNoteEn: "Club reports must record aggregate session & attendance counts ONLY—never student identities or personal cases.",
    safetyNoteBn: "ক্লাব রিপোর্টে শুধু মোট সেশন ও উপস্থিতির সংখ্যা রাখুন—কখনোই শিক্ষার্থীর পরিচয় বা ব্যক্তিগত ঘটনা প্রকাশ করবেন না।",
  },
];
