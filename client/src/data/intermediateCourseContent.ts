// Complete Intermediate Course: 70% Women Safety in the AI Era (7 Modules) + 30% AI Literacy Learning (3 Modules)
// Structured Manual Format: Conceptual Depth + Step-by-Step Field Protocols + Do/Avoid Matrices + Applied Bangladesh Case Studies
// Safeguarding: All scenarios are fictional & educational; learners are never asked for personal disclosures or intimate media.

export type IntermediatePillar = "safety" | "ai-literacy";

export type IntermediateLesson = {
  title_bn: string;
  title_en: string;
  duration: string;
  body_bn: string;
  body_en: string;
  manual_framework: {
    framework_title_bn: string;
    framework_title_en: string;
    steps_bn: readonly string[];
    steps_en: readonly string[];
    dos_bn: readonly string[];
    dos_en: readonly string[];
    donts_bn: readonly string[];
    donts_en: readonly string[];
  };
  example_bn: string;
  example_en: string;
};

export type IntermediateQuizQuestion = {
  question_bn: string;
  question_en: string;
  options_bn: readonly string[];
  options_en: readonly string[];
  answer: number;
  explanation_bn: string;
  explanation_en: string;
};

export type IntermediateModule = {
  id: string;
  pillar: IntermediatePillar;
  weightLabel_bn: string;
  weightLabel_en: string;
  estimatedTime: string;
  title_bn: string;
  title_en: string;
  intro_bn: string;
  intro_en: string;
  objectives: readonly { bn: string; en: string }[];
  lessons: readonly IntermediateLesson[];
  activity_bn: string;
  activity_en: string;
  quiz: readonly IntermediateQuizQuestion[];
  summary_bn: string;
  summary_en: string;
  terms: readonly { term: string; bn: string; en: string }[];
};

export const intermediateCourseModules: readonly IntermediateModule[] = [
  {
    id: "im1",
    pillar: "safety",
    weightLabel_bn: "Women Safety Core · মডিউল ১/৭",
    weightLabel_en: "Women Safety (70% Track · Module 1 of 7)",
    estimatedTime: "45 min",
    title_bn: "উন্নত ঝুঁকি বিশ্লেষণ ও AI-সক্ষম জেন্ডারভিত্তিক ক্ষতির শৃঙ্খল",
    title_en: "Advanced Threat Modeling & AI-Enabled Gender-Based Harm Chains",
    intro_bn:
      "ইন্টারমিডিয়েট স্তরের প্রথম মডিউলে আমরা শুধু ব্যক্তিগত ভুল এড়ানো নয়, বরং প্রযুক্তি কীভাবে আক্রমণের শৃঙ্খল (attack chain) তৈরি করে তা কাঠামোবদ্ধভাবে বিশ্লেষণ করতে শিখব। AI-সক্ষম লিঙ্গভিত্তিক সহিংসতা সাধারণত তথ্য সংগ্রহ, পরিচয় নকল, মানসিক চাপ সৃষ্টি এবং সামাজিক কলঙ্ককে অস্ত্র হিসেবে ব্যবহার করার একাধিক ধাপে ঘটে। এই মডিউলে থাকা স্ট্রাকচার্ড ম্যানুয়াল প্রোটোকল ব্যবহার করে আপনি নিজের, পরিবার বা ক্যাম্পাস ক্লাবের জন্য প্র্যাকটিক্যাল থ্রেট মডেল তৈরি করতে পারবেন।",
    intro_en:
      "In the opening Intermediate module, you move beyond basic caution to structured threat modeling. AI-enabled gender-based harm typically unfolds across connected stages: passive data harvesting, synthetic impersonation, psychological leverage, and social stigma amplification. Using the structured manual protocols in this module, you will learn how to map digital exposure surfaces safely for yourself, peers, or a campus safety club without relying on fear or victim-blaming.",
    objectives: [
      {
        bn: "হুমকি, দুর্বলতা ও ঝুঁকির মধ্যে পার্থক্য করে ৪-ধাপের ডিজিটাল থ্রেট মডেল তৈরি করতে পারা।",
        en: "Distinguish between threat, vulnerability, and risk to construct a 4-step personal or campus threat model.",
      },
      {
        bn: "পাবলিক প্রোফাইল থেকে AI কীভাবে অপ্রত্যাশিত ব্যক্তিগত প্যাটার্ন বের করে (data inference) তা শনাক্ত করতে পারা।",
        en: "Identify how AI tools infer sensitive patterns from seemingly harmless public posts and metadata.",
      },
      {
        bn: "ইন্টারসেকশনাল ঝুঁকি—যেমন নারী শিক্ষার্থী, কর্মজীবী নারী, সংখ্যালঘু ও প্রতিবন্ধী নারীর ওপর অতিরিক্ত চাপ—বুঝতে পারা।",
        en: "Analyze intersectional escalation factors affecting students, working women, and marginalized groups online.",
      },
      {
        bn: "আক্রমণের শৃঙ্খল শুরুর আগেই প্রতিরোধমূলক কন্ট্রোল (preventive controls) কার্যকর করতে পারা।",
        en: "Deploy proactive containment and privacy controls to interrupt harm chains early.",
      },
    ],
    lessons: [
      {
        title_bn: "১. ডিজিটাল থ্রেট মডেলিং: অ্যাসেট, থ্রেট ও এক্সপোজার ম্যাপ",
        title_en: "1. Structured Threat Modeling: Assets, Threats & Exposure Maps",
        duration: "15 min",
        body_bn:
          "সিকিউরিটি পেশাদাররা ‘সবকিছু লুকিয়ে রাখা’-র বদলে থ্রেট মডেলিং ব্যবহার করেন। এর অর্থ হলো চারটি প্রশ্নের স্পষ্ট উত্তর লেখা: (ক) আপনার কোন ডিজিটাল সম্পদ বা পরিচয় সুরক্ষিত রাখা জরুরি, (খ) কারা বা কোন ধরনের অপব্যবহার তা লক্ষ্যবস্তু করতে পারে, (গ) কোন দুর্বল পথ দিয়ে তথ্য বেরোতে পারে এবং (ঘ) সবচেয়ে কম কষ্টে কোন নিয়ন্ত্রণ ব্যবস্থা ঝুঁকি কমাবে।\n\nনারী ও তরুণীদের ক্ষেত্রে শুধু ব্যাংক অ্যাকাউন্টই অ্যাসেট নয়—কণ্ঠের রেকর্ডিং, ক্লাসের সময়সূচি, পরিবারের ফোন নম্বর, কর্মক্ষেত্রের ইমেইল এবং পুরনো প্রোফাইল ছবিও উচ্চ-মূল্যের অ্যাসেট, কারণ AI টুল এগুলো দিয়ে সিন্থেটিক কনটেন্ট বা সোশ্যাল ইঞ্জিনিয়ারিং আক্রমণ তৈরি করতে পারে।",
        body_en:
          "Security practitioners rely on structured threat modeling rather than blanket avoidance. It answers four concrete questions: (1) what digital assets and relationships require protection, (2) what threat actors or misuse patterns target them, (3) which exposure pathways exist, and (4) which low-friction safeguards disrupt the path.\n\nFor women and girls, high-value assets include not only financial logins, but also clear voice samples, recurring campus or commute routines, family contact links, and high-resolution portrait photos that generative models can misuse.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ১.১: ৪-ধাপের ব্যক্তিগত থ্রেট অডিট",
          framework_title_en: "Manual Protocol 1.1: 4-Step Personal Threat Audit",
          steps_bn: [
            "ধাপ ১ (Asset Inventory): আপনার ব্যবহৃত প্রধান ৩টি সোশ্যাল বা অ্যাকাডেমিক অ্যাকাউন্ট ও ২টি রিকভারি ইমেইল/নম্বর তালিকাভুক্ত করুন।",
            "ধাপ ২ (Exposure Check): প্রতিটি অ্যাকাউন্টে ‘View as Public’ মোড চালু করে দেখুন অচেনা মানুষ কী দেখতে পাচ্ছে (ছবি, বন্ধু তালিকা, কর্মস্থল/ক্যাম্পাস)।",
            "ধাপ ৩ (AI Misuse Lens): প্রশ্ন করুন—এই পাবলিক ছবি বা ভয়েস নোট দিয়ে কি কেউ আপনার পরিচয় নকল বা লোকেশন অনুমান করতে পারবে?",
            "ধাপ ৪ (Layered Control): সবার আগে ইমেইল ও মোবাইল সিম পিন সুরক্ষিত করুন, তারপর প্রোফাইল দৃশ্যমানতা সীমিত করুন।",
          ],
          steps_en: [
            "Step 1 (Asset Inventory): List your primary 3 social/academic accounts and the recovery email or SIM tied to them.",
            "Step 2 (Exposure Check): Use 'View as Public' mode to audit what strangers see—photos, friend lists, campus tags, and bio links.",
            "Step 3 (AI Misuse Lens): Ask whether exposed portraits, voice clips, or routine check-ins could enable cloning or location inference.",
            "Step 4 (Layered Control): Lock recovery email and SIM security first, then tighten public visibility on personal media.",
          ],
          dos_bn: [
            "প্রত্যেক গুরুত্বপূর্ণ অ্যাকাউন্টের জন্য আলাদা রিকভারি ইমেইল ও শক্তিশালী MFA ব্যবহার করুন।",
            "তিন মাস পরপর একবার পাবলিক প্রোফাইল ভিউ পরীক্ষা করুন।",
          ],
          dos_en: [
            "Protect primary recovery emails and enable app-based MFA before adjusting surface profile tweaks.",
            "Run a quarterly 'View as Public' audit across active platforms.",
          ],
          donts_bn: [
            "একই পাসওয়ার্ড বা জন্মতারিখভিত্তিক পিন সব অ্যাকাউন্টে রাখবেন না।",
            "ভয়ের কারণে জরুরি শিক্ষা বা ক্যারিয়ার প্ল্যাটফর্ম পুরোপুরি বন্ধ করে দেবেন না।",
          ],
          donts_en: [
            "Do not reuse passwords or predictable date-of-birth PINs across accounts.",
            "Do not abandon essential learning or career platforms out of fear; apply targeted controls instead.",
          ],
        },
        example_bn:
          "সিলেটের একটি বিশ্ববিদ্যালয়ের ছাত্রী নূপুর খেয়াল করল, তার পাবলিক ইনস্টাগ্রাম হাইলাইটস থেকে নিয়মিত হল, বাস রুট ও স্টাডি ক্যাফের নাম বোঝা যাচ্ছে। থ্রেট মডেলিং করে সে অ্যাকাউন্ট মুছে না দিয়ে শুধুমাত্র লোকেশন ট্যাগ সরিয়ে, প্রোফাইল ছবিতে ক্লোজ-আপ বাদ দিয়ে এবং ফ্রেন্ড লিস্ট প্রাইভেট করে ঝুঁকি উল্লেখযোগ্যভাবে কমিয়ে ফেলল।",
        example_en:
          "Nupur, a university student in Sylhet, noticed her public story highlights revealed her hostel gate, bus route, and regular study cafe. Instead of deleting her account, she applied a threat audit—removing recurring location tags, hiding her follower list, and locking her recovery email.",
      },
      {
        title_bn: "২. AI-সক্ষম আক্রমণের শৃঙ্খল (Kill Chain) ও ডেটা ইনফারেন্স",
        title_en: "2. Mapping the AI Harm Chain & Automated Data Inference",
        duration: "15 min",
        body_bn:
          "আগের যুগে অনলাইন হয়রানি করতে আক্রমণকারীকে ম্যানুয়ালি তথ্য খুঁজতে হতো। এখন ওপেন-সোর্স তথ্য ও AI স্ক্র্যাপিং মিলে কয়েক মিনিটে ‘ডিজিটাল ডসিয়ার’ বানানো সম্ভব। ভয়েস মেসেজ থেকে টোন সংগ্রহ, একাধিক প্ল্যাটফর্ম থেকে ছবি ম্যাচিং এবং রুটিন বিশ্লেষণ করে লক্ষ্যবস্তু নির্ধারণ করা হয়।\n\nসবচেয়ে গুরুত্বপূর্ণ বিষয় হলো: এই শৃঙ্খলের মাঝখানেই হস্তক্ষেপ করা যায়। প্রথম সংযোগস্থলে অর্থাৎ ‘তথ্য সংগ্রহ’ ও ‘বিশ্বাস অর্জন’ ধাপেই সন্দেহজনক আচরণ চিনতে পারলে বড় ক্ষতি প্রতিহত করা সহজ হয়।",
        body_en:
          "Previously, targeting someone online required slow manual searching. Today, automated scraping and AI cross-matching can assemble a profile across multiple platforms in minutes—linking campus tags, leaked phone directories, and voice snippets.\n\nCrucially, harm chains can be interrupted early. Disrupting passive data aggregation and refusing urgent trust-building prompts stops most attacks before extortion or synthetic impersonation begins.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ১.২: আক্রমণের ৫ ধাপ ও হস্তক্ষেপ বিন্দু",
          framework_title_en: "Manual Protocol 1.2: 5-Stage Harm Chain & Disruption Points",
          steps_bn: [
            "ধাপ ১ (Harvesting): পাবলিক পোস্ট/ট্যাগ থেকে তথ্য সংগ্রহ -> প্রতিরোধ: ট্যাগ রিভিউ চালু ও পুরনো পাবলিক অ্যালবাম সীমিত করা।",
            "ধাপ ২ (Synthesis): ছবি/কণ্ঠ দিয়ে নকল প্রোফাইল বা মিডিয়া তৈরি -> প্রতিরোধ: প্রোফাইল গার্ড ও দ্রুত ইম্পার্সোনেশন রিপোর্ট।",
            "ধাপ ৩ (Contact/Grooming): বিশ্বাসযোগ্য বা আতঙ্কমূলক মেসেজে যোগাযোগ -> প্রতিরোধ: অফলাইন বা ভেরিফায়েড চ্যানেলে যাচাই।",
            "ধাপ ৪ (Leverage/Escalation): ভয় দেখিয়ে টাকা, ছবি বা নীরবতা দাবি -> প্রতিরোধ: কোনো শর্তে সাড়া না দিয়ে প্রমাণ লগ করা।",
            "ধাপ ৫ (Support & Containment): বিশ্বস্ত নেটওয়ার্ক ও প্ল্যাটফর্ম টেকডাউন ব্যবহার করে নিয়ন্ত্রণ ফেরানো।",
          ],
          steps_en: [
            "Stage 1 (Harvesting): Collecting public tags/photos -> Disrupt via tag-approval and archiving old public albums.",
            "Stage 2 (Synthesis): Generating clones or fake profiles -> Disrupt via profile lock and rapid impersonation reports.",
            "Stage 3 (Contact): Urgent or flattering outreach -> Disrupt by verifying independently out-of-band.",
            "Stage 4 (Leverage): Extortion or intimidation -> Disrupt by refusing compliance and capturing safe log metadata.",
            "Stage 5 (Containment): Coordinated takedown requests and trusted adult/institutional support.",
          ],
          dos_bn: [
            "অচেনা কারও পাঠানো ‘তোমার নামে একটা লিংক দেখলাম’ জাতীয় মেসেজ আলাদা চ্যানেলে যাচাই করুন।",
            "গ্রুপ চ্যাটে নিজের ব্যক্তিগত ফোন নম্বরের বদলে ইউজারনেম বা আলাদা কমিউনিটি অ্যাকাউন্ট ব্যবহার করুন।",
          ],
          dos_en: [
            "Verify alarming 'look at this post about you' links via an independent browser session rather than clicking directly.",
            "Use platform usernames instead of exposing your personal SIM number in large public study groups.",
          ],
          donts_bn: [
            "আতঙ্কিত হয়ে অজানা শর্ট লিংকে নিজের পাসওয়ার্ড বা ওটিপি দেবেন না।",
            "কে আপনার তথ্য নিয়েছে তা খুঁজতে একা অপরিচিত অ্যাকাউন্টের সাথে তর্ক করবেন না।",
          ],
          donts_en: [
            "Never enter credentials on shortened verification links sent during an emotional scare.",
            "Do not confront suspicious accounts one-on-one to investigate their identity.",
          ],
        },
        example_bn:
          "ঢাকার একটি অনলাইন স্কিল ফোরামে অংশ নেওয়া তানহা হঠাৎ একটি মেসেজ পায়, যেখানে তার বিশ্ববিদ্যালয়ের ডিপার্টমেন্ট ও হলের নাম উল্লেখ করে ‘ক্যাম্পাস ভেরিফিকেশন ফর্ম’-এ ছবি ও এনআইডি আপলোড করতে বলা হয়। সে বুঝে নেয় এটি পাবলিক পোস্ট থেকে নেওয়া তথ্য দিয়ে তৈরি সোশ্যাল ইঞ্জিনিয়ারিং, তাই ফর্ম পূরণ না করে ডিপার্টমেন্টের অফিশিয়াল নোটিশ বোর্ডে যাচাই করে।",
        example_en:
          "Tanha received a DM referencing her exact university department and dorm name, urging her to upload an ID photo to a 'campus verification form.' Recognizing automated data inference, she verified via the official department notice board instead of submitting sensitive documents.",
      },
      {
        title_bn: "৩. ইন্টারসেকশনাল ঝুঁকি ও সামাজিক চাপ মোকাবিলার কৌশল",
        title_en: "3. Intersectional Risk Factors & Countering Social Stigma",
        duration: "15 min",
        body_bn:
          "ডিজিটাল সহিংসতার প্রভাব সবার ওপর সমান পড়ে না। বাংলাদেশের প্রেক্ষাপটে কিশোরী, নতুন কর্মজীবী নারী, প্রথম প্রজন্মের ইন্টারনেট ব্যবহারকারী বা যৌথ ডিভাইস ব্যবহারকারী নারীদের ওপর ‘পারিবারিক সম্মান’ বা ‘ফোন কেড়ে নেওয়ার ভয়’ কাজ করে। আক্রমণকারীরা ঠিক এই সামাজিক লজ্জা ও নীরবতার সুযোগ নেয়।\n\nইন্টারমিডিয়েট স্তরের নিরাপত্তা পরিকল্পনা মানে এমন বিকল্প পথ তৈরি করা, যাতে ক্ষতিগ্রস্ত ব্যক্তি বা তার পরিবার প্রযুক্তিকে দোষ না দিয়ে সমাধানমুখী পদক্ষেপ নিতে পারে।",
        body_en:
          "Online harm does not affect everyone equally. First-generation smartphone users, young students sharing family devices, or women in conservative workplaces often face heightened fear of device confiscation, victim-blaming, or reputational fallout. Perpetrators exploit this silence deliberately.\n\nIntermediate safety planning builds stigma-free response routines so learners and families respond constructively without disconnecting women from education or work.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ১.৩: স্ট্রাকচার্ড সেফটি বাফার",
          framework_title_en: "Manual Protocol 1.3: Stigma-Free Safety Buffer",
          steps_bn: [
            "ধাপ ১: আগে থেকেই দুজন বিশ্বস্ত ব্যক্তি ঠিক করুন (একজন পরিবারের/শিক্ষক, একজন সহপাঠী/সহকর্মী) যাঁরা জাজ না করে কথা শুনবেন।",
            "ধাপ ২: জরুরি সাহায্য লাইন ও প্ল্যাটফর্ম রিপোর্ট লিংক বুকমার্ক করে রাখুন।",
            "ধাপ ৩: পরিবার বা অভিভাবকের জন্য আগে থেকেই ‘ডিজিটাল নিরাপত্তা চুক্তি’ তৈরি করুন—অর্থাৎ কোনো সমস্যা হলে ফোন বন্ধ নয়, একসাথে সমাধান।",
          ],
          steps_en: [
            "Step 1: Pre-identify two non-judgmental allies (a trusted teacher/family member and a reliable peer).",
            "Step 2: Bookmark verified national helplines and platform reporting pages offline or in a private note.",
            "Step 3: Establish a 'support-first agreement' with guardians—focusing on troubleshooting rather than confiscating devices.",
          ],
          dos_bn: [
            "কেউ সাহায্যের জন্য এলে প্রথমে তার নিরাপত্তা নিশ্চিত করুন ও শান্তভাবে শুনুন।",
            "শেয়ার করা ফোনে আলাদা ব্রাউজার প্রোফাইল বা সেশন ব্যবহার শেষে সাইন আউট করুন।",
          ],
          dos_en: [
            "Lead with calm reassurance when a peer discloses harassment.",
            "Always sign out and clear sensitive sessions when using shared household or lab computers.",
          ],
          donts_bn: [
            "‘তুমি কেন ছবি তুলেছিলে’ বা ‘অনলাইনে কেন গিয়েছিলে’—এমন দোষারোপমূলক প্রশ্ন করবেন না।",
            "আত্মীয়স্বজন বা গ্রুপের মধ্যে আক্রান্তের পরিচয় ছড়িয়ে দেবেন না।",
          ],
          donts_en: [
            "Never ask 'why did you post that photo?'—blame belongs solely to the perpetrator.",
            "Never circulate a victim's name or screenshots to 'warn' wider groups.",
          ],
        },
        example_bn:
          "রংপুরের একটি কলেজের বিজ্ঞান ক্লাব অভিভাবকদের জন্য ২০ মিনিটের একটি ওরিয়েন্টেশন আয়োজন করে, যেখানে দেখানো হয় কীভাবে ভুয়া AI এডিট দিয়ে ছাত্রীদের ব্ল্যাকমেইল করার চেষ্টা হয় এবং কেন তখন মেয়ের ফোন কেড়ে না নিয়ে প্রমাণ রেখে রিপোর্ট করা জরুরি।",
        example_en:
          "A college science club in Rangpur held a 20-minute parent orientation showing how malicious AI edits work, building agreement that families would support reporting rather than confiscating a student's phone.",
      },
    ],
    activity_bn:
      "ম্যানুয়াল অনুশীলন (ব্যক্তিগত তথ্য ছাড়া): খাতায় একটি ৪-কলামের টেবিল আঁকুন—(১) ডিজিটাল অ্যাসেট, (২) সম্ভাব্য AI ঝুঁকি, (৩) বর্তমান দুর্বলতা, (৪) প্রতিরোধমূলক পদক্ষেপ। কাল্পনিক এক কলেজ ছাত্রীর ৩টি অ্যাকাউন্টের জন্য টেবিলটি পূরণ করুন এবং দেখুন কোন দুটি পদক্ষেপে ৮০% ঝুঁকি কমে যায়।",
    activity_en:
      "Manual Drill (No Personal Disclosures): Draw a 4-column table in your notebook—(1) Digital Asset, (2) Potential AI Misuse, (3) Current Exposure, (4) Preventive Control. Complete it for a fictional college student's email, messaging app, and campus portal to see which 2 steps eliminate most risk.",
    quiz: [
      {
        question_bn: "থ্রেট মডেলিংয়ের প্রথম ধাপ কোনটি?",
        question_en: "What is the first structured step in digital threat modeling?",
        options_bn: [
          "সব সোশ্যাল মিডিয়া স্থায়ীভাবে মুছে ফেলা",
          "সুরক্ষিত রাখতে হবে এমন গুরুত্বপূর্ণ অ্যাসেট ও অ্যাকাউন্ট তালিকাভুক্ত করা",
          "অপরিচিত অ্যাকাউন্টের সাথে তর্ক শুরু করা",
          "সব গ্রুপে পাসওয়ার্ড বদলের খবর পোস্ট করা",
        ],
        options_en: [
          "Deleting all social media permanently",
          "Listing key digital assets, accounts, and recovery channels needing protection",
          "Confronting unknown accounts directly",
          "Posting publicly that you changed your password",
        ],
        answer: 1,
        explanation_bn:
          "কার্যকর থ্রেট মডেলিং শুরু হয় কী কী গুরুত্বপূর্ণ অ্যাসেট ও রিকভারি চ্যানেল সুরক্ষিত রাখতে হবে তা চিহ্নিত করার মাধ্যমে।",
        explanation_en:
          "Structured threat modeling starts by identifying which accounts, media, and recovery channels matter most before selecting targeted controls.",
      },
      {
        question_bn: "নারী ও তরুণীদের ক্ষেত্রে শুধু লগইন ছাড়াও কোনটি উচ্চ-মূল্যের ডিজিটাল অ্যাসেট?",
        question_en: "Beyond login credentials, which asset poses high AI-era risk if publicly exposed?",
        options_bn: [
          "পাবলিক লাইব্রেরির বইয়ের তালিকা",
          "কণ্ঠের স্পষ্ট নমুনা, লোকেশন রুটিন ও উচ্চ-রেজল্যুশন মুখের ছবি",
          "সাধারণ আবহাওয়ার স্ক্রিনশট",
          "অফলাইন নোটবুকের কভার",
        ],
        options_en: [
          "Public library reading lists",
          "Clear voice samples, recurring commute tags, and high-res portrait photos",
          "Weather forecast screenshots",
          "Blank notebook covers",
        ],
        answer: 1,
        explanation_bn:
          "ভয়েস ক্লোনিং ও সিন্থেটিক ছবি তৈরির জন্য পরিষ্কার মুখের ছবি ও কণ্ঠের নমুনা ব্যবহৃত হতে পারে, আর লোকেশন ট্যাগ থেকে রুটিন অনুমান করা যায়।",
        explanation_en:
          "Clear portraits and voice clips can fuel synthetic cloning, while recurring tags allow automated location and routine inference.",
      },
      {
        question_bn: "AI-সক্ষম আক্রমণের শৃঙ্খলে (Kill Chain) তথ্য সংগ্রহ ধাপ ব্যাহত করার কার্যকর উপায় কোনটি?",
        question_en: "Which action best disrupts the early 'harvesting' stage of an AI harm chain?",
        options_bn: [
          "প্রতিটি পাবলিক পোস্টে ফোন নম্বর লিখে দেওয়া",
          "ট্যাগ রিভিউ চালু রাখা, ফ্রেন্ড লিস্ট প্রাইভেট করা ও পুরনো পাবলিক পোস্ট সীমিত করা",
          "সন্দেহজনক লিংকে ক্লিক করে দেখা",
          "সব ছবি পাবলিক অ্যালবামে রাখা",
        ],
        options_en: [
          "Putting your phone number in public bios",
          "Enabling tag review, hiding friend lists, and restricting old public albums",
          "Clicking unknown links to test them",
          "Leaving all photo albums set to Public",
        ],
        answer: 1,
        explanation_bn:
          "পাবলিক এক্সপোজার সীমিত করলে অটোমেটেড স্ক্র্যাপিং ও ক্রস-প্ল্যাটফর্ম ম্যাপিং কঠিন হয়ে যায়।",
        explanation_en:
          "Restricting tag visibility, friend lists, and archived albums sharply limits automated data harvesting.",
      },
      {
        question_bn: "কোনো কিশোরী বা তরুণী অনলাইন হয়রানির কথা জানালে সবচেয়ে নিরাপদ প্রথম প্রতিক্রিয়া কী?",
        question_en: "When a young learner reports online harassment, what is the safest first response?",
        options_bn: [
          "তার ফোনটি কেড়ে নিয়ে ইন্টারনেট বন্ধ করে দেওয়া",
          "শান্তভাবে শোনা, দোষারোপ না করা ও প্রমাণ রেখে নিরাপদ পদক্ষেপ নেওয়া",
          "অভিযুক্তের সাথে দেখা করতে পাঠানো",
          "অপমানজনক ছবিটি সতর্ক করতে গ্রুপে ফরওয়ার্ড করা",
        ],
        options_en: [
          "Confiscating her phone immediately",
          "Listening calmly without blame, preserving safe records, and planning containment",
          "Telling her to meet the harasser to settle it",
          "Forwarding the abusive content to warn others",
        ],
        answer: 1,
        explanation_bn:
          "ফোন কেড়ে নেওয়া বা দোষারোপ করলে ভুক্তভোগী ভবিষ্যতে চুপ থাকতে বাধ্য হন; সহায়তামূলক সমাধানই নিরাপত্তা নিশ্চিত করে।",
        explanation_en:
          "Punitive device confiscation drives silence. Calm, blame-free containment preserves evidence and trust.",
      },
    ],
    summary_bn:
      "ইন্টারমিডিয়েট থ্রেট মডেলিং মানে ভয় পাওয়া নয়, বরং চারটি বাস্তব প্রশ্নের মাধ্যমে নিজের অ্যাসেট, এক্সপোজার ও প্রতিরোধ ব্যবস্থা বোঝা। আক্রমণের শৃঙ্খল যত আগে থামানো যায় এবং সামাজিক লজ্জা যত কমানো যায়, ডিজিটাল পরিবেশ তত নিরাপদ হয়।",
    summary_en:
      "Intermediate threat modeling replaces anxiety with structured analysis: identify assets, audit public exposure, interrupt data harvesting early, and establish stigma-free support buffers.",
    terms: [
      {
        term: "Threat Modeling",
        bn: "কোন সম্পদ সুরক্ষিত রাখতে হবে, কী ধরনের হুমকি আছে এবং কোন নিয়ন্ত্রণে ঝুঁকি কমবে তা কাঠামোবদ্ধভাবে বিশ্লেষণ করার পদ্ধতি।",
        en: "A structured method to identify digital assets, likely threats, exposure paths, and priority safeguards.",
      },
      {
        term: "Data Inference",
        bn: "বিভিন্ন ছোট ও আপাত-নিরীহ পাবলিক তথ্য একত্র করে কোনো ব্যক্তির অবস্থান, অভ্যাস বা পরিচয় অনুমান করা।",
        en: "Deriving sensitive facts (like location or routine) by combining seemingly harmless public posts.",
      },
      {
        term: "Kill Chain / Harm Chain",
        bn: "তথ্য সংগ্রহ থেকে শুরু করে অনুকরণ, চাপ সৃষ্টি ও ক্ষতির প্রতিটি ধারাবাহিক ধাপ।",
        en: "The connected sequence of stages an attacker follows—from harvesting to coercion—each offering a disruption point.",
      },
      {
        term: "Support Buffer",
        bn: "ক্ষতি ঘটলে দোষারোপ ছাড়াই সহায়তা দেবে এমন আগে থেকে নির্ধারিত বিশ্বস্ত ব্যক্তি ও রিসোর্স নেটওয়ার্ক।",
        en: "A pre-planned circle of non-judgmental allies and verified resources ready before an incident occurs.",
      },
    ],
  },
  {
    id: "im2",
    pillar: "safety",
    weightLabel_bn: "Women Safety Core · মডিউল ২/৭",
    weightLabel_en: "Women Safety (70% Track · Module 2 of 7)",
    estimatedTime: "50 min",
    title_bn: "ডিপফেক শনাক্তকরণ, ভয়েস ক্লোনিং ও সিন্থেটিক মিডিয়া কন্টেইনমেন্ট",
    title_en: "Deepfake Forensics, Voice Cloning & Non-Consensual Media Containment",
    intro_bn:
      "এই মডিউলে আমরা সিন্থেটিক মিডিয়া—যেমন ফেস-সোয়াপ ভিডিও, নন-কনসেনসুয়াল ডিপফেক ছবি এবং কয়েক সেকেন্ডের অডিও দিয়ে তৈরি ভয়েস ক্লোন—কীভাবে তৈরি হয়, কোন কোন ফরেনসিক সূত্র দেখে সন্দেহ যাচাই করা যায় এবং সবচেয়ে গুরুত্বপূর্ণভাবে, এমন মিডিয়া ছড়িয়ে পড়লে তা পুনরায় শেয়ার না করে কীভাবে কন্টেইনমেন্ট (containment) ও হ্যাশ-ভিত্তিক প্রতিরোধ (যেমন StopNCII) ব্যবহার করতে হয় তার পূর্ণ ম্যানুয়াল শিখব।",
    intro_en:
      "This module provides an intermediate operational manual for synthetic media threats: face-swapped videos, non-consensual AI imagery, and few-second voice cloning scams. You will learn practical visual and audio verification cues, understand why automated 'AI detectors' are unreliable on their own, and master rapid containment—including safe evidence logging and hash-based prevention workflows without ever re-circulating harmful content.",
    objectives: [
      {
        bn: "ছবি, ভিডিও ও ক্লোনড ভয়েসের সূক্ষ্ম অসঙ্গতি ও কনটেক্সচুয়াল সূত্র (contextual cues) পরীক্ষা করতে পারা।",
        en: "Examine visual, acoustic, and contextual artifacts in suspected synthetic images, video, and cloned voice notes.",
      },
      {
        bn: "কেন স্বয়ংক্রিয় ‘AI Detector’ টুলের ওপর পুরোপুরি নির্ভর করা যায় না তা বুঝতে পারা।",
        en: "Explain the limitations of automated AI detection tools and why provenance verification matters more.",
      },
      {
        bn: "অন্তরঙ্গ বা ভুয়া ডিপফেক ছবি আপলোড না করেও StopNCII / হ্যাশ-ম্যাচিং ধারণা কীভাবে কাজ করে তা ব্যাখ্যা করতে পারা।",
        en: "Understand privacy-preserving hash-matching workflows (such as StopNCII) that block spread without uploading raw images.",
      },
      {
        bn: "ভয়েস-ক্লোন ইমার্জেন্সি স্ক্যাম ও নন-কনসেনসুয়াল সিন্থেটিক মিডিয়ার জন্য ১ ঘণ্টার কন্টেইনমেন্ট প্রোটোকল প্রয়োগ করতে পারা।",
        en: "Execute a structured first-hour containment protocol for voice-cloning scams and synthetic image attacks.",
      },
    ],
    lessons: [
      {
        title_bn: "১. ভিজ্যুয়াল ও অডিও ফরেনসিক সূত্র এবং সীমাবদ্ধতা",
        title_en: "1. Visual & Audio Verification Cues (and Their Limits)",
        duration: "17 min",
        body_bn:
          "নতুন প্রজন্মের জেনারেটিভ মডেল এখন আগের মতো সহজে ‘ছয় আঙুল’ বা বিকৃত চোখ তৈরি করে না। তাই শুধু পিক্সেল দেখে ডিপফেক নিশ্চিত হওয়া কঠিন। ইন্টারমিডিয়েট স্তরে আমরা দুটি স্তরে যাচাই করি: (১) সিগন্যাল ও ফিজিক্স সূত্র—যেমন কানের দুল বা চশমার ফ্রেম হঠাৎ মিলিয়ে যাওয়া, ঘাড় ও ত্বকের টেক্সচারের মধ্যে হঠাৎ পার্থক্য, বা কথা বলার সময় ঠোঁট ও দাঁতের অপ্রাকৃতিক মসৃণতা; এবং (২) কনটেক্সচুয়াল সূত্র—যেমন এই ভিডিওতে থাকা কণ্ঠস্বরের ছন্দ, শব্দচয়ন বা পটভূমি আসল ঘটনার সাথে মেলে কি না।\n\nভয়েস ক্লোনিংয়ের ক্ষেত্রে মাত্র ৩ থেকে ১০ সেকেন্ডের স্পষ্ট অডিও দিয়েই প্রতারকরা পরিবারের কারও কণ্ঠ নকল করতে পারে। এজন্য শ্বাস নেওয়ার অস্বাভাবিক বিরতি, যান্ত্রিক বা সমতল আবেগ এবং জরুরি টাকা পাঠানোর তাড়া—এই তিনটি লক্ষণ একসাথে দেখা দরকার।",
        body_en:
          "Modern diffusion and video models rarely leave obvious glitches like six fingers, so visual inspection alone is no longer sufficient. Intermediate verification combines two layers: (1) physics & boundary cues—flickering jewelry or glasses, mismatched lighting between face and neck, overly smoothed skin or teeth motion, and robotic breathing cadence in cloned audio; and (2) provenance & contextual cues—does the vocabulary, background acoustics, or timeline match reality?\n\nWith voice cloning requiring under 10 seconds of sample audio, combining a 'family safety code word' with calm out-of-band callbacks defeats most urgent voice-impersonation scams.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ২.১: ৫-পয়েন্ট সিন্থেটিক মিডিয়া চেকলিস্ট",
          framework_title_en: "Manual Protocol 2.1: 5-Point Synthetic Media Check",
          steps_bn: [
            "প্রশ্ন ১ (Source): মূল পোস্টটি কি ভেরিফায়েড বা মূল উৎস থেকে এসেছে, নাকি স্ক্রিন-রেকর্ডেড ফরওয়ার্ড?",
            "প্রশ্ন ২ (Boundary & Physics): চুল, কানের ধার, চশমা বা ছায়ার কোণ নড়াচড়ার সাথে বদলাচ্ছে কি?",
            "প্রশ্ন ৩ (Audio Cadence): কণ্ঠে কি স্বাভাবিক শ্বাস-প্রশ্বাস ও পরিচিত আঞ্চলিক বাচনভঙ্গি আছে, নাকি একটানা তাড়াহুড়ো?",
            "প্রশ্ন ৪ (Reverse Context): রিভার্স ইমেজ সার্চ বা মূল ঘটনার তারিখ মিলিয়ে দেখুন এটি পুরনো ছবি কি না।",
            "প্রশ্ন ৫ (Out-of-Band Verification): যে ব্যক্তির ছবি বা কণ্ঠ, সরাসরি অন্য পরিচিত নম্বরে কল করে যাচাই করুন।",
          ],
          steps_en: [
            "Check 1 (Source): Is this from an original verified channel or a re-compressed screen-recorded forward?",
            "Check 2 (Boundaries): Watch hairlines, earrings, eyeglasses, and shadow directions during head turns.",
            "Check 3 (Voice Cadence): Listen for natural breaths and familiar idioms versus flat urgency.",
            "Check 4 (Timeline): Cross-check dates, background signage, and whether an old real photo was cropped.",
            "Check 5 (Callback): Verify directly using the person's known, saved phone number before acting.",
          ],
          dos_bn: [
            "পরিবারের সদস্যদের সাথে জরুরি পরিস্থিতি যাচাইয়ের জন্য একটি অফলাইন ‘ফ্যামিলি কোড ওয়ার্ড’ ঠিক করে রাখুন।",
            "সন্দেহজনক অডিও শুনলে কল কেটে পরিচিত নম্বরে পাল্টা কল করুন।",
          ],
          dos_en: [
            "Agree on a simple offline 'family verification phrase' for urgent financial or safety requests.",
            "Hang up on suspicious urgent calls and dial the saved contact directly.",
          ],
          donts_bn: [
            "‘AI Detector ওয়েবসাইট’ ১০০% বললেই নির্দোষ ছবিকে আসল বা আসল ছবিকে ভুয়া ধরে নেবেন না।",
            "সন্দেহজনক মিডিয়া পাবলিক বা থার্ড-পার্টি অনির্ভরযোগ্য ওয়েবসাইটে আপলোড করে পরীক্ষা করবেন না।",
          ],
          donts_en: [
            "Do not treat free 'AI detector' scores as definitive proof; false positives and negatives are common.",
            "Never upload someone else's private or intimate photo into random online 'deepfake checker' sites.",
          ],
        },
        example_bn:
          "খুলনার এক মা তার মেয়ের কণ্ঠে হঠাৎ ফোন কল পান—‘আম্মু, রাস্তায় এক্সিডেন্ট হয়েছে, এক্ষুনি এই নম্বরে টাকা পাঠাও, আমার ফোন ভেঙে গেছে।’ মা আতঙ্কিত না হয়ে পরিবারের পূর্বনির্ধারিত নিরাপত্তা প্রশ্ন জিজ্ঞেস করলে কলটি কেটে যায়। পরে মেয়ের আসল নম্বরে কল করে জানা যায় সে ক্লাসেই ছিল।",
        example_en:
          "A mother in Khulna received an urgent call in her daughter's cloned voice asking for emergency money from an unfamiliar number. Remembering their offline family code question, she asked for it; the caller disconnected immediately, and a callback confirmed her daughter was safe in class.",
      },
      {
        title_bn: "২. নন-কনসেনসুয়াল ডিপফেক আক্রমণে ১ ঘণ্টার কন্টেইনমেন্ট প্রোটোকল",
        title_en: "2. First-Hour Containment Protocol for Non-Consensual Deepfakes",
        duration: "18 min",
        body_bn:
          "সম্মতি ছাড়া তৈরি সিন্থেটিক বা পরিবর্তিত যৌন ইঙ্গিতপূর্ণ ছবি (NCII/deepfake) ছড়ানোর হুমকি বা ঘটনা ঘটলে প্রথম এক ঘণ্টার সিদ্ধান্ত খুবই গুরুত্বপূর্ণ। সাধারণ ভুল হলো—আতঙ্কে ব্ল্যাকমেইলারকে টাকা দেওয়া, প্রোফাইল স্থায়ীভাবে মুছে ফেলে প্রমাণ হারানো, বা বন্ধুদের কাছে কনটেন্ট পাঠিয়ে সাহায্য চাওয়া।\n\nসঠিক কন্টেইনমেন্টের লক্ষ্য হলো: (১) ছড়ানোর গতি কমানো, (২) প্রোফাইল ও কন্টাক্ট লিস্ট সুরক্ষিত রাখা, (৩) নিজে কনটেন্ট শেয়ার না করে রিপোর্টিং ও হ্যাশ প্রিভেনশনের ব্যবস্থা নেওয়া।",
        body_en:
          "When non-consensual synthetic imagery (deepfake NCII) is threatened or shared, the first hour dictates containment success. Common pitfalls—paying extortionists, abruptly deleting one's own account (which destroys session logs), or forwarding images to ask friends what to do—escalate harm.\n\nA disciplined containment protocol limits circulation, protects contact lists from mass-tagging, and prepares hash-based blocking without copying harmful files.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ২.২: ১ ঘণ্টার ডিপফেক রেসপন্স ম্যানুয়াল",
          framework_title_en: "Manual Protocol 2.2: First-Hour Containment Workflow",
          steps_bn: [
            "মিনিট ০–১৫ (Stabilize): যোগাযোগ বিচ্ছিন্ন বা মিউট করুন, কোনো টাকা/শর্তে রাজি হবেন না, প্রোফাইলের ট্যাগিং ও ফ্রেন্ড-রিকোয়েস্ট বন্ধ করুন।",
            "মিনিট ১৫–৩০ (Safe Logging): মূল মেসেজের URL, ইউজারনেম, তারিখ ও সময় নোট করুন; ভিকটিমের নগ্ন বা সম্পাদিত ছবি ডাউনলোড/শেয়ার করবেন না।",
            "মিনিট ৩০–৪৫ (Platform Escalation): প্ল্যাটফর্মের ‘Non-consensual intimate imagery / Impersonation’ ক্যাটাগরিতে সরাসরি রিপোর্ট করুন।",
            "মিনিট ৪৫–৬০ (Trusted Escalation & StopNCII): বিশ্বস্ত শিক্ষক/অভিভাবক বা নারী সহায়তা সেলের সাথে যোগাযোগ করে টেকডাউন ও StopNCII.org (১৮+ হলে) বা NCMEC Take It Down (১৮ বছরের কম হলে) প্রযোজ্য পথ দেখুন।",
          ],
          steps_en: [
            "Min 0–15 (Stabilize): Stop negotiating, never pay extortion, restrict tagging/comments, and lock follower lists.",
            "Min 15–30 (Safe Logging): Record threat account URLs, handles, and timestamps; avoid downloading or circulating abusive images.",
            "Min 30–45 (Platform Reporting): Submit dedicated 'Non-consensual intimate imagery' or 'Synthetic impersonation' flags.",
            "Min 45–60 (External Safety Nets): Contact a trusted adult or women's cyber desk and review hash-matching tools like StopNCII (adults) or Take It Down (minors).",
          ],
          dos_bn: [
            "প্ল্যাটফর্ম রিপোর্টিংয়ের সময় স্পষ্টভাবে উল্লেখ করুন যে কনটেন্টটি সম্মতিবিহীন AI-জেনারেটেড।",
            "সার্চ ইঞ্জিন (যেমন Google) থেকে ছবি সরানোর অফিশিয়াল NCII রিমুভাল ফর্ম সম্পর্কে জানুন।",
          ],
          dos_en: [
            "Specify clearly in platform reports that the media is non-consensual and AI-synthesized.",
            "Use official search-engine non-consensual imagery removal portals to de-index links if needed.",
          ],
          donts_bn: [
            "ব্ল্যাকমেইলারকে ‘একবার টাকা দিলে ডিলিট করবে’ ভেবে কোনো অর্থ পাঠাবেন না—চাহিদা কেবল বাড়তেই থাকে।",
            "সাহায্য করার নামে অন্য কারও কাছে এডিটেড ছবিটি পাঠাবেন না।",
          ],
          donts_en: [
            "Never pay blackmail expecting deletion—extortion demands almost always escalate.",
            "Never forward edited media to peers or group chats to 'prove' it is fake.",
          ],
        },
        example_bn:
          "রাজশাহীর একটি কলেজের শিক্ষার্থী মেহজাবিনের প্রোফাইল ছবি ব্যবহার করে বানানো ভুয়া ছবি একটি ফেক আইডি থেকে ইনবক্সে পাঠিয়ে টাকা দাবি করা হয়। মেহজাবিন উত্তর না দিয়ে ট্যাগিং সীমিত করে, ফেক আইডির URL ও চ্যাট তারিখ নোট করে, এবং তার কাজিনের সহায়তায় পুলিশ সাইবার সাপোর্ট ফর উইমেন ও প্ল্যাটফর্মে রিপোর্ট করে। আইডিটি ২৪ ঘণ্টার মধ্যে সাসপেন্ড হয়।",
        example_en:
          "A fake account sent Mehjabin an AI-altered image made from her public avatar and demanded money. She refused to engage, locked account tagging, logged the profile URL and timestamps, and submitted reports alongside a trusted cousin to both the platform and Bangladesh's Women Cyber Support desk.",
      },
      {
        title_bn: "৩. হ্যাশ-ম্যাচিং (StopNCII / Take It Down) কীভাবে প্রাইভেসি রক্ষা করে কাজ করে",
        title_en: "3. How Privacy-Preserving Hash Matching Protects Without Uploading",
        duration: "15 min",
        body_bn:
          "অনেক শিক্ষার্থী ভয় পান যে প্ল্যাটফর্ম বা হেল্পলাইনকে ছবি না দিলে তারা কীভাবে ক্ষতিকর ছবি আটকাবে। এখানেই ক্রাইপ্টোগ্রাফিক ‘পার্শেপচুয়াল হ্যাশ’ (perceptual hash) প্রযুক্তি সাহায্য করে। StopNCII.org (প্রাপ্তবয়স্কদের জন্য) বা Take It Down (অপ্রাপ্তবয়স্কদের জন্য)-এর মতো বৈশ্বিক সেফটি টুল আপনার ডিভাইসেই ছবির একটি ডিজিটাল ফিঙ্গারপ্রিন্ট বা হ্যাশ কোড তৈরি করে। আসল ছবি আপনার ফোন থেকে সার্ভারে আপলোড হয় না—শুধুমাত্র ওই গাণিতিক কোডটি শেয়ার করা হয়।\n\nঅংশীদার প্ল্যাটফর্মগুলোতে কেউ ওই একই ছবি আপলোড করার চেষ্টা করলে সিস্টেম হ্যাশ মিলিয়ে স্বয়ংক্রিয়ভাবে আপলোড আটকে দেয়। তবে মনে রাখতে হবে, এই টুল শুধু ছবির বা ভিডিওর অংশগ্রহণকারী প্ল্যাটফর্মগুলোতেই কার্যকর—এজন্য স্থানীয় সাপোর্ট ও প্ল্যাটফর্ম রিপোর্ট একসাথে চালানো জরুরি।",
        body_en:
          "Many learners hesitate to seek takedown help because they rightly refuse to upload sensitive images to third parties. Privacy-preserving perceptual hashing solves this. Services like StopNCII.org (for adults) and Take It Down (for minors) compute a mathematical fingerprint (hash) locally inside your browser—your actual image never leaves your device.\n\nParticipating platforms then automatically detect and block matching uploads. While not every website participates, combining hash prevention with direct platform reports and search de-indexing creates a multi-layered defense.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ২.৩: হ্যাশ-সুরক্ষা ও মাল্টি-প্ল্যাটফর্ম ডিলিস্টিং",
          framework_title_en: "Manual Protocol 2.3: Multi-Layer Takedown Architecture",
          steps_bn: [
            "স্তর ১ (Platform Direct Report): যে অ্যাপে পোস্ট হয়েছে সেখানে গিয়ে ‘NCII / Impersonation’ রিপোর্ট করুন।",
            "স্তর ২ (Hash Prevention): ছবি বা ভিডিওটি নিজের কাছে থাকলে বিশ্বস্ত বয়স্ক বা নিজ ডিভাইস থেকে অফিশিয়াল StopNCII/Take It Down-এ হ্যাশ তৈরি করার প্রক্রিয়া জানুন (তৃতীয় পক্ষকে ছবি পাঠাবেন না)।",
            "স্তর ৩ (Search De-indexing): কোনো ওয়েব লিংক গুগলে এলে Google NCII removal request ব্যবহার করুন।",
            "স্তর ৪ (Record Keeping): প্রতিটি রিপোর্টের কেস নম্বর ও তারিখ নিরাপদ নোটবুকে সংরক্ষণ করুন।",
          ],
          steps_en: [
            "Layer 1 (Platform Flag): Report directly inside the host platform under NCII or Impersonation.",
            "Layer 2 (Hash Fingerprint): If eligible and safe, review official StopNCII (18+) or Take It Down (<18) local hashing—without handing files to strangers.",
            "Layer 3 (Search Removal): Request search de-indexing if any public web URL appears in search results.",
            "Layer 4 (Case Tracking): Save every ticket/reference number and submission date privately.",
          ],
          dos_bn: [
            "বয়স ১৮ বছরের নিচে হলে সর্বদা বাবা-মা, শিক্ষক বা অনুমোদিত সেফগার্ডিং ব্যক্তির সহায়তা নিন।",
            "প্রতিটি রিপোর্টের স্ক্রিনশট নয়, কেবল কেস রেফারেন্স নম্বর নোট করুন।",
          ],
          dos_en: [
            "Ensure minors involve a trusted parent, teacher, or safeguarding focal person.",
            "Record case reference numbers and timestamps in a private log.",
          ],
          donts_bn: [
            "ফেসবুক বা টেলিগ্রামে ‘পেইড হ্যাকার’ বা ‘ডিপফেক ডিলিট সার্ভিস’-এর বিজ্ঞাপনে বিশ্বাস করে টাকা ও ছবি দেবেন না—এগুলো দ্বিতীয় দফা প্রতারণা।",
          ],
          donts_en: [
            "Never trust 'paid deepfake removal hackers' on social media—those are almost always secondary extortion scams.",
          ],
        },
        example_bn:
          "বিশ্ববিদ্যালয়ের ডিজিটাল সেফটি ক্লাবের সেমিনারে প্রশিক্ষক ব্যাখ্যা করলেন কেন কোনো ভুয়া ‘ডিলিট এজেন্ট’-কে টাকা না দিয়ে সরাসরি প্ল্যাটফর্ম রিপোর্ট, সার্চ ডিলিস্টিং এবং অফিশিয়াল হ্যাশ-প্রিভেনশন টুল সম্পর্কে জানা নিরাপদ।",
        example_en:
          "During a university safety club workshop, facilitators showed how hash-based prevention blocks re-uploads without handing sensitive media to sketchy 'paid removal' accounts.",
      },
    ],
    activity_bn:
      "ম্যানুয়াল অনুশীলন: আপনার পরিবারের সাথে ব্যবহারের জন্য একটি ২-বাক্যের ‘ভয়েস-কল যাচাই প্রোটোকল’ লিখুন এবং ১ ঘণ্টার কন্টেইনমেন্ট চেকলিস্টের ৪টি ধাপ নিজের ভাষায় সাজান (কোনো ব্যক্তিগত ছবি বা ঘটনা ছাড়াই)।",
    activity_en:
      "Manual Drill: Draft a two-sentence 'Voice-Call Verification Protocol' to share with family members, and outline the 4 phases of the First-Hour Containment Checklist in your own words without referencing any personal incident.",
    quiz: [
      {
        question_bn: "পরিচিত কারও কণ্ঠে হঠাৎ নতুন নম্বর থেকে টাকা চাওয়ার ফোন এলে সবচেয়ে নির্ভরযোগ্য পদক্ষেপ কোনটি?",
        question_en: "If a familiar voice calls from an unknown number urgently demanding money, what is the safest response?",
        options_bn: [
          "কণ্ঠ মিলে যাওয়ায় সাথে সাথে টাকা পাঠানো",
          "ফোন কেটে দিয়ে পূর্বনির্ধারিত পরিচিত নম্বরে কল করে ও কোড ওয়ার্ডে যাচাই করা",
          "নম্বরটিতে ওটিপি পাঠিয়ে দেখা",
          "অচেনা নম্বরের কথা সবাইকে ফরওয়ার্ড করা",
        ],
        options_en: [
          "Send money immediately because the voice sounds identical",
          "Hang up, call the person's saved number directly, and verify using a family phrase",
          "Send an OTP to test the caller",
          "Forward the unknown number publicly",
        ],
        answer: 1,
        explanation_bn:
          "AI মাত্র কয়েক সেকেন্ডের অডিও থেকে কণ্ঠ ক্লোন করতে পারে; পরিচিত নম্বরে পাল্টা কল ও অফলাইন কোড প্রশ্ন প্রতারণা ভেস্তে দেয়।",
        explanation_en:
          "AI voice cloning only needs seconds of speech. Calling the saved number directly and checking an offline code defeats urgency scams.",
      },
      {
        question_bn: "StopNCII বা Take It Down-এর মতো হ্যাশ-প্রিভেনশন টুল কীভাবে প্রাইভেসি রক্ষা করে?",
        question_en: "How do hash-matching tools like StopNCII preserve user privacy?",
        options_bn: [
          "মূল ছবি সার্ভারে পাবলিক করে দেয়",
          "শুধুমাত্র ডিভাইসে তৈরি গাণিতিক ফিঙ্গারপ্রিন্ট (হ্যাশ) শেয়ার করে, মূল ছবি আপলোড করে না",
          "সবার চ্যাট হিস্টোরি পড়ে",
          "ভুক্তভোগীর নাম প্রকাশ করে দেয়",
        ],
        options_en: [
          "By publishing the original photo in a database",
          "By computing a local mathematical hash on your device so the raw image never leaves",
          "By reading private chat histories",
          "By displaying the victim's full name publicly",
        ],
        answer: 1,
        explanation_bn:
          "পার্সেপচুয়াল হ্যাশিং ডিভাইসেই তৈরি হয়; ফলে মূল সংবেদনশীল ছবি সার্ভারে না পাঠিয়েই অংশগ্রহণকারী প্ল্যাটফর্মে আপলোড আটকানো যায়।",
        explanation_en:
          "Perceptual hashes are generated locally on the user's device, enabling cross-platform blocking without uploading the sensitive image.",
      },
      {
        question_bn: "কোনো অনলাইন ‘পেইড এজেন্ট’ টাকা দিলে ডিপফেক ইন্টারনেট থেকে মুছে দেবে বলে দাবি করলে কী করবেন?",
        question_en: "What should you do if an online 'agent' offers to delete a deepfake for a fee?",
        options_bn: [
          "তাদেরকে টাকা ও আসল ছবি পাঠাবেন",
          "এড়িয়ে চলবেন—এগুলো প্রায়ই দ্বিতীয় দফার প্রতারণা; অফিশিয়াল প্ল্যাটফর্ম ও সরকারি সহায়তা পথ ব্যবহার করবেন",
          "নিজের অ্যাকাউন্টের পাসওয়ার্ড দেবেন",
          "বন্ধুদেরও টাকা দিতে বলবেন",
        ],
        options_en: [
          "Pay them and send more photos",
          "Refuse—these are often secondary extortion scams; use official platform and legal channels",
          "Share your login password so they can clean it",
          "Ask friends to pool money for the agent",
        ],
        answer: 1,
        explanation_bn:
          "অচেনা ‘হ্যাকার’ বা ‘রিমুভাল এজেন্ট’-রা অনেক সময় দ্বিতীয়বার ব্ল্যাকমেইল করে। সবসময় অফিশিয়াল রিপোর্টিং চ্যানেল ব্যবহার করুন।",
        explanation_en:
          "Self-proclaimed removal hackers frequently run secondary scams. Rely only on official platform takedowns and verified support.",
      },
      {
        question_bn: "কেবল স্বয়ংক্রিয় ‘AI Image Detector’ টুলের ওপর নির্ভর করা কেন ঝুঁকিপূর্ণ?",
        question_en: "Why is it risky to rely solely on automated 'AI detector' websites?",
        options_bn: [
          "এগুলো ইন্টারনেট ছাড়া চলে না",
          "এগুলোতে ভুল পজিটিভ ও ভুল নেগেটিভ অনেক হয় এবং আনভেরিফায়েড সাইটে ছবি আপলোডে প্রাইভেসি ঝুঁকি থাকে",
          "এগুলো বাংলা পড়তে পারে না",
          "এগুলো কেবল ভিডিওতে কাজ করে",
        ],
        options_en: [
          "They do not run offline",
          "They produce frequent false results and uploading private images to unverified sites risks leaks",
          "They cannot read Bangla captions",
          "They only scan audio clips",
        ],
        answer: 1,
        explanation_bn:
          "AI ডিটেক্টরগুলো কম্প্রেশন বা নতুন মডেলের কারণে সহজেই ভুল ফল দেয়; বরং উৎস, কনটেক্সট ও প্রোভেনেন্স যাচাই বেশি নির্ভরযোগ্য।",
        explanation_en:
          "Automated detectors struggle with recompressed social media files and newer models, and third-party uploads carry severe privacy risks.",
      },
    ],
    summary_bn:
      "সিন্থেটিক মিডিয়া মোকাবিলায় দৃশ্য-অডিও ও কনটেক্সচুয়াল যাচাই একসাথে করতে হয়। কোনো আক্রমণ ঘটলে প্রথম এক ঘণ্টায় শান্তভাবে অ্যাকাউন্ট সুরক্ষা, নিরাপদ লগিং, প্ল্যাটফর্ম রিপোর্ট ও হ্যাশ-ভিত্তিক প্রতিরোধ ব্যবহার করতে হয়—কখনোই ব্ল্যাকমেইল মানা বা ক্ষতিকর ছবি পুনরায় ছড়ানো যাবে না।",
    summary_en:
      "Defending against synthetic media blends multi-signal verification with rapid first-hour containment: lock down tagging, log URLs safely, report via official channels, and never pay extortion or re-share harmful media.",
    terms: [
      {
        term: "Perceptual Hash",
        bn: "ছবি বা ভিডিওর এমন গাণিতিক ফিঙ্গারপ্রিন্ট যা মূল ফাইল আপলোড না করেই একই কনটেন্ট শনাক্ত করতে সাহায্য করে।",
        en: "A compact mathematical fingerprint of an image or video used to block matching uploads without sharing the raw file.",
      },
      {
        term: "Voice Cloning",
        bn: "মাত্র কয়েক সেকেন্ডের অডিও নমুনা থেকে AI ব্যবহার করে কারও কণ্ঠস্বরের অনুরূপ কথা তৈরি করা।",
        en: "Using AI to synthesize speech mimicking a real person's voice from a short audio sample.",
      },
      {
        term: "NCII (Non-Consensual Intimate Imagery)",
        bn: "ব্যক্তির স্পষ্ট সম্মতি ছাড়া তৈরি, সম্পাদিত বা শেয়ার করা যেকোনো অন্তরঙ্গ ছবি বা ভিডিও।",
        en: "Any real or AI-synthesized intimate image or video shared without explicit consent.",
      },
      {
        term: "Out-of-Band Verification",
        bn: "যে মাধ্যমে সন্দেহজনক বার্তা এসেছে, তার বাইরে ভিন্ন ও আগে থেকে পরিচিত বিশ্বস্ত মাধ্যমে যাচাই করা।",
        en: "Confirming an urgent request through a separate, pre-verified communication channel.",
      },
    ],
  },
  {
    id: "im3",
    pillar: "safety",
    weightLabel_bn: "Women Safety Core · মডিউল ৩/৭",
    weightLabel_en: "Women Safety (70% Track · Module 3 of 7)",
    estimatedTime: "45 min",
    title_bn: "অনলাইন নজরদারি, ডক্সিং, ছদ্মবেশ ও সংগঠিত হয়রানি প্রতিরোধ",
    title_en: "Countering Stalking, Doxxing, Impersonation & Coordinated Brigading",
    intro_bn:
      "একটি ভুয়া অ্যাকাউন্ট থেকে শুরু হয়ে কীভাবে ডক্সিং (ব্যক্তিগত ঠিকানা বা ফোন নম্বর প্রকাশ) ও সংগঠিত দলবদ্ধ আক্রমণে (coordinated brigading) রূপ নেয়—এবং কীভাবে ম্যানুয়ালি প্রতিটি পর্যায় নিয়ন্ত্রণে আনতে হয়—তা এই মডিউলের মূল বিষয়। এখানে আপনি সেশন অডিট, অ্যান্টি-ডক্সিং হাইজিন ও কমেন্ট ফ্লাড থামানোর প্র্যাকটিক্যাল প্রোটোকল শিখবেন।",
    intro_en:
      "Harassment often escalates from covert surveillance and fake accounts into doxxing (publishing private addresses or phone numbers) and coordinated brigading across platforms. This module lays out concrete response manuals for OSINT footprint cleanup, active session lockdown, anti-doxxing remediation, and moderating coordinated waves without burning out.",
    objectives: [
      {
        bn: "অ্যাকাউন্ট হ্যাক বা গোপন নজরদারির লক্ষণ চিনে সম্পূর্ণ ‘লগইন ও সেশন অডিট’ করতে পারা।",
        en: "Detect unauthorized monitoring cues and perform a complete account session & connected-app audit.",
      },
      {
        bn: "ডক্সিংয়ের আগে পাবলিক OSINT পদচিহ্ন (ফোন নম্বর, পরিবারের লিংক, ঠিকানা) কমাতে পারা এবং ডক্সিং ঘটলে পদক্ষেপ নিতে পারা।",
        en: "Reduce public OSINT exposure before doxxing occurs and follow rapid takedown steps if personal data leaks.",
      },
      {
        bn: "সংগঠিত কমেন্ট অ্যাটাক বা মাস-রিপোর্টিংয়ে নোটিফিকেশন ম্যানেজমেন্ট ও মডারেটর নিয়ন্ত্রণ ব্যবহার করতে পারা।",
        en: "Apply comment throttling, keyword filters, and trusted moderator workflows during coordinated brigading.",
      },
      {
        bn: "ছদ্মবেশী অ্যাকাউন্ট (impersonation) দ্রুত বন্ধের জন্য বৈধ প্রমাণসহ রিপোর্ট তৈরি করতে পারা।",
        en: "Compile clean impersonation reports that meet platform verification requirements safely.",
      },
    ],
    lessons: [
      {
        title_bn: "১. সেশন অডিট, সংযুক্ত অ্যাপ ও স্টকারওয়্যার সূচক",
        title_en: "1. Session Audits, Connected Apps & Spyware Red Flags",
        duration: "15 min",
        body_bn:
          "অনেক সময় পাসওয়ার্ড বদলালেও আগে থেকে লগইন থাকা কোনো পুরনো ব্রাউজার বা অন্য ডিভাইসের সেশন সক্রিয় থেকে যায়। তাই ইন্টারমিডিয়েট নিরাপত্তায় শুধু পাসওয়ার্ড বদলানো যথেষ্ট নয়—সব সেশন থেকে ‘Log out of all devices’ করা, থার্ড-পার্টি অ্যাপ পারমিশন (Google/Facebook-এ সংযুক্ত গেম বা কুইজ অ্যাপ) বাতিল করা এবং ফরওয়ার্ডিং রুল (ইমেইল অটো-ফরওয়ার্ড) পরীক্ষা করা আবশ্যক।\n\nএছাড়া খুব কাছের কেউ অজানা তথ্য বারবার জেনে ফেললে, ব্যাটারি অস্বাভাবিক দ্রুত শেষ হলে বা ফোনে অচেনা অ্যাপ দেখা গেলে ডিভাইস শেয়ারিং বা স্টকারওয়্যার (stalkerware) ঝুঁকির কথা ভাবতে হবে। তবে তাড়াহুড়ো করে ফোন ফ্যাক্টরি রিসেট করার আগে যদি শারীরিক ঝুঁকি থাকে, বিশ্বস্ত কারও পরামর্শ নিয়ে নিরাপদ ডিভাইস ব্যবহার করাই উত্তম।",
        body_en:
          "Changing a password alone can leave existing logged-in sessions active on other devices or linked browsers. True lockdown requires revoking all active sessions, removing suspicious OAuth third-party apps, and checking email auto-forwarding rules.\n\nWatch also for covert surveillance signs: someone repeatedly knowing private offline plans, unexplained battery drain, or unfamiliar device-admin apps. If an abusive partner or controller monitors your device, check your physical safety before suddenly wiping or alerting them; seek help using a separate trusted device first.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৩.১: ৬-ধাপের অ্যাকাউন্ট লকডাউন রুটিন",
          framework_title_en: "Manual Protocol 3.1: 6-Step Account Lockdown",
          steps_bn: [
            "ধাপ ১ (Trusted Device): সন্দেহ থাকলে নিজের বদলে বিশ্বস্ত নিরাপদ ডিভাইস থেকে অডিট শুরু করুন।",
            "ধাপ ২ (Primary Email First): সবার আগে ইমেইলের পাসওয়ার্ড ও অটো-ফরওয়ার্ডিং ফিল্টার পরীক্ষা করুন।",
            "ধাপ ৩ (Sign Out All): সোশ্যাল ও ইমেইল সেটিংস থেকে ‘Where you’re logged in / Active Sessions’ দেখে সব অচেনা ডিভাইস সরান।",
            "ধাপ ৪ (Third-Party Apps): অপ্রয়োজনীয় অ্যাপ, ব্রাউজার এক্সটেনশন ও কুইজ পারমিশন রিমুভ করুন।",
            "ধাপ ৫ (App-based 2FA): SMS ওটিপির বদলে সম্ভব হলে Authenticator App বা Passkey চালু করুন।",
            "ধাপ ৬ (Recovery Check): রিকভারি ফোন ও ব্যাকআপ কোড নিজের নিয়ন্ত্রণে রাখুন।",
          ],
          steps_en: [
            "Step 1 (Clean Device): Run security checks from a trusted, uncompromised device if monitoring is suspected.",
            "Step 2 (Email Root First): Lock your primary email password and inspect Inbox Forwarding/Filter rules.",
            "Step 3 (Terminate Sessions): Use 'Log out of all active sessions' across email, messaging, and social apps.",
            "Step 4 (Revoke OAuth Apps): Remove unused connected apps, extensions, and game permissions.",
            "Step 5 (Upgrade 2FA): Switch from SMS codes to an Authenticator app or Passkey where supported.",
            "Step 6 (Recovery Check): Confirm only your trusted recovery email and SIM remain attached.",
          ],
          dos_bn: [
            "কোন কোন অ্যাপ লোকেশন ‘Always Allow’ পাচ্ছে তা ফোনের প্রাইভেসি ড্যাশবোর্ডে পরীক্ষা করুন।",
          ],
          dos_en: [
            "Audit 'Always Allow' location permissions inside phone OS privacy settings.",
          ],
          donts_bn: [
            "ব্যক্তিগত ডিভাইস শেয়ার করতে হলে স্ক্রিন লক ছাড়া বা লগইন অবস্থায় ফেলে রাখবেন না।",
          ],
          donts_en: [
            "Do not leave shared devices unlocked with sensitive recovery apps signed in.",
          ],
        },
        example_bn:
          "ঢাকার এক তরুণী বুঝতে পারল তার পুরনো ইমেইল থেকে অজান্তেই মেসেজ অন্য ঠিকানায় ফরওয়ার্ড হচ্ছে। সেশন অডিট ম্যানুয়াল মেনে সে প্রথমে ইমেইল ফরওয়ার্ডিং ফিল্টার মুছে দেয়, সব ডিভাইস থেকে সাইন আউট করে এবং পাসওয়ার্ড বদলে অ্যাপ-ভিত্তিক 2FA চালু করে।",
        example_en:
          "A young professional in Dhaka discovered an unauthorized email auto-forwarding filter set by an old account compromise. Following the 6-step lockdown, she deleted the filter, forced global sign-out, and switched to app-based 2FA.",
      },
      {
        title_bn: "২. অ্যান্টি-ডক্সিং হাইজিন ও ব্যক্তিগত তথ্য ফাঁস হলে করণীয়",
        title_en: "2. Anti-Doxxing Hygiene & Leak Remediation Manual",
        duration: "15 min",
        body_bn:
          "ডক্সিং হলো অনুমতি ছাড়া কারও বাসার ঠিকানা, ব্যক্তিগত মোবাইল নম্বর, শিক্ষাপ্রতিষ্ঠানের রোল বা পরিবারের তথ্য প্রকাশ করে ভয় দেখানো বা অন্যদের উসকে দেওয়া। প্রতিরোধের প্রথম নিয়ম হলো ‘ডিজিটাল বিচ্ছিন্নতা’ (compartmentalization): বড় পাবলিক বা কমিউনিটি প্ল্যাটফর্মের ইউজারনেম যেন আপনার ব্যক্তিগত ব্যাংকিং বা পারিবারিক ইমেইলের সাথে সরাসরি হুবহু মিলে না যায়।\n\nযদি ডক্সিং ঘটেই যায়, তবে দ্রুততম সময়ে প্রকাশকারী পোস্টটির ইউআরএল ও তারিখ সংরক্ষণ করে ‘Personal Information / Doxxing Violation’ হিসেবে রিপোর্ট করতে হয় এবং মোবাইল নম্বরে অবাঞ্ছিত কল এলে ট্রাস্টের বাইরে থাকা সিম সাময়িকভাবে ডাইভার্ট বা ‘Do Not Disturb’ প্রোফাইলে নেওয়া যায়।",
        body_en:
          "Doxxing weaponizes private contact details—home addresses, phone numbers, family identities, or workplace extensions—to trigger harassment or real-world fear. Effective prevention uses compartmentalization: keep public study/club handles separate from personal banking emails and private phone numbers.\n\nIf doxxing occurs, capture exact URLs before deletion, file immediate privacy/doxxing takedown tickets on both host platforms and search engines, and protect daily peace by enabling strict call-screening or trusted-contacts-only mode on your phone.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৩.২: ডক্সিং প্রতিরোধ ও প্রতিক্রিয়া ম্যাট্রিক্স",
          framework_title_en: "Manual Protocol 3.2: Doxxing Prevention & Response Matrix",
          steps_bn: [
            "কাজ ১ (Compartmentalize): পাবলিক ফোরাম, ক্লাব বা ফ্রিল্যান্সিংয়ে আলাদা কন্টাক্ট ইমেইল ব্যবহার করুন।",
            "কাজ ২ (Reverse Self-Check): সার্চ ইঞ্জিনে নিজের নাম ও ফোন নম্বর কোটেশনের মধ্যে দিয়ে খুঁজে দেখুন কোথাও অবাঞ্ছিতভাবে প্রকাশ পাচ্ছে কি না।",
            "কাজ ৩ (Takedown on Leak): কোনো সাইট বা পোস্টে নম্বর/ঠিকানা প্রকাশিত হলে সাথে সাথে প্ল্যাটফর্মের Privacy/Doxxing রিপোর্ট ফর্ম জমা দিন।",
            "কাজ ৪ (Offline Alert): নিরাপত্তা ঝুঁকি মনে হলে পরিবারের সদস্য, বাড়ির দারোয়ান বা ক্যাম্পাস সিকিউরিটিকে সংক্ষেপে সতর্ক রাখুন।",
          ],
          steps_en: [
            "Action 1 (Compartmentalize): Keep a separate email alias for public clubs, events, or creator pages.",
            "Action 2 (Self-Audit): Periodically search your own name and number in quotes to spot unexpected public listings.",
            "Action 3 (Takedown): Submit dedicated 'Exposed Private Information / Doxxing' flags immediately.",
            "Action 4 (Offline Alert): If physical address data leaked, discreetly inform family, hostel staff, or campus security.",
          ],
          dos_bn: [
            "ফোনে অজানা কল ব্লক করতে বিল্ট-ইন ‘Silence Unknown Callers’ বা নির্ভরযোগ্য ফিল্টার চালু রাখুন।",
          ],
          dos_en: [
            "Enable built-in 'Silence Unknown Callers' if your personal phone number is targeted.",
          ],
          donts_bn: [
            "অন্য কেউ ডক্সিং করলে পাল্টা ‘রিভেঞ্জ ডক্সিং’ করে প্রতিপক্ষের পরিবারের তথ্য প্রকাশ করবেন না—এটি আইনি ও নৈতিক ঝুঁকি বাড়ায়।",
          ],
          donts_en: [
            "Never engage in retaliatory doxxing; publishing anyone's private details compounds legal and safety harm.",
          ],
        },
        example_bn:
          "চট্টগ্রামের একটি ডিবেট ক্লাবের অর্গানাইজার রিফাতের ব্যক্তিগত ফোন নম্বর কেউ একটি পাবলিক পোস্টে লিখে দিল। রিফাত অচেনা কল সাইলেন্ট করে, পোস্টটির লিংক সেভ করে ডক্সিং রিপোর্ট দেয়, ক্লাব অ্যাডমিন দিয়ে পোস্ট সরানোর ব্যবস্থা করে এবং ভবিষ্যতে ক্লাবের পোস্টারে নিজের ব্যক্তিগত নম্বরের বদলে ক্লাবের অফিশিয়াল ইমেইল ব্যবহার করে।",
        example_en:
          "After someone posted Rifat's personal phone number in a debate group dispute, she enabled unknown-caller silencing, logged the post URL, filed a doxxing violation report, and switched club flyers to use an official club email alias.",
      },
      {
        title_bn: "৩. সংগঠিত কমেন্ট অ্যাটাক ও ছদ্মবেশী অ্যাকাউন্ট মোকাবিলা",
        title_en: "3. Managing Coordinated Brigading & Impersonation Accounts",
        duration: "15 min",
        body_bn:
          "সংগঠিত অনলাইন আক্রমণ (coordinated brigading) ও বট-চালিত কমেন্ট অ্যাটাকের উদ্দেশ্য থাকে ব্যক্তিকে মানসিকভাবে ভেঙে দেওয়া যাতে তিনি কথা বলা বা কাজ করা বন্ধ করেন। এক্ষেত্রে নিজের প্রতিটি কমেন্টের উত্তর দেওয়ার চেয়ে প্ল্যাটফর্মের ‘Shield / Limit Interactions’, নির্দিষ্ট আপত্তিকর শব্দ অটো-হাইড ফিল্টার এবং বিশ্বস্ত একজন বন্ধুকে অস্থায়ী মডারেটর হিসেবে দায়িত্ব দেওয়া অনেক বেশি কার্যকর।\n\nএভাবে আপনি নিজে ট্রমাটিক কনটেন্ট না পড়েই প্ল্যাটফর্মের অ্যালগরিদমিক অ্যামপ্লিফিকেশন থামাতে পারবেন।",
        body_en:
          "Coordinated brigading floods posts with repetitive insults or mass reports to overwhelm a woman into silence. Rather than reading or replying to every attack, intermediate defense relies on platform interaction shields: enabling 'Limit Interactions' to followers-only, setting custom blocked keyword lists, and assigning a trusted friend to triage notifications temporarily.\n\nFor impersonation accounts, direct reporting under 'Pretending to be me' paired with 2–3 peer confirmations accelerates takedown.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৩.৩: ব্রিগেডিং কন্ট্রোল ও ইম্পার্সোনেশন রিপোর্ট",
          framework_title_en: "Manual Protocol 3.3: Brigading Throttle & Impersonation Filing",
          steps_bn: [
            "ধাপ ১ (Throttle): পোস্টের কমেন্ট ও মেসেজ রিকোয়েস্ট সাময়িকভাবে ‘Followers/Connections Only’ করুন।",
            "ধাপ ২ (Keyword Shield): সাধারণ অপমানজনক শব্দ ও ইমোজি অটো-হাইড ফিল্টারে যোগ করুন।",
            "ধাপ ৩ (Delegate): চাইলে বিশ্বস্ত এক বন্ধু বা ক্লাব মডারেটরকে ২৪–৪৮ ঘণ্টা স্ক্রিনশট/লিংক সংগ্রহ ও হাইড করার দায়িত্ব দিন।",
            "ধাপ ৪ (Impersonation File): নকল প্রোফাইলের URL ও আসল প্রোফাইলের URL পাশাপাশি রেখে রিপোর্ট জমা দিন।",
          ],
          steps_en: [
            "Step 1 (Throttle): Switch comment and DM settings temporarily to 'Existing Followers Only.'",
            "Step 2 (Filter): Add abusive keywords and slur variations to hidden-word filters.",
            "Step 3 (Delegate): Ask a trusted friend to review and log links for 24–48 hours so you stay offline safely.",
            "Step 4 (Report Clone): File an official Impersonation ticket referencing both the fake and authentic URLs.",
          ],
          dos_bn: [
            "আক্রমণের সময় ‘Mute Notifications’ চালু রেখে নিজের মানসিক সুস্থতাকে অগ্রাধিকার দিন।",
          ],
          dos_en: [
            "Mute push notifications during an active wave to protect sleep and mental focus.",
          ],
          donts_bn: [
            "আক্রমণকারীদের স্ক্রিনশট নিয়ে পাল্টা ঝগড়া করলে অ্যালগরিদম সেই পোস্ট আরও বেশি মানুষের কাছে ছড়িয়ে দেয়।",
          ],
          donts_en: [
            "Avoid quote-posting trolls; engagement spikes push abusive threads into wider algorithmic feeds.",
          ],
        },
        example_bn:
          "একটি পরিবেশ-সচেতনতা ক্যাম্পেইন চালানোর পর বগুড়ার এক তরুণ স্বেচ্ছাসেবীর পোস্টে হঠাৎ ৩০টি নতুন ভুয়া অ্যাকাউন্ট থেকে অপমানজনক কমেন্ট আসতে থাকে। সে প্রতিটি কমেন্ট না পড়ে ‘Limit Comments’ চালু করে, কীওয়ার্ড ফিল্টার বসায় এবং তার টিমমেট রিপোর্টগুলো লগ করে নেয়।",
        example_en:
          "When 30 newly created accounts flooded a young volunteer's campaign post in Bogura, she switched comments to followers-only, activated custom word filters, and stepped away while a teammate logged the spam accounts.",
      },
    ],
    activity_bn:
      "ম্যানুয়াল অনুশীলন: আপনার সবচেয়ে বেশি ব্যবহৃত একটি অ্যাপ ও ইমেইল অ্যাকাউন্টে আজই (১) Active Sessions চেক করুন, (২) Connected Apps তালিকা দেখুন এবং (৩) Comment/Tag ফিল্টার সেটিংস রিভিউ করে নিজের খাতায় ‘Completed Check’ টিক দিন।",
    activity_en:
      "Manual Drill: Open your primary email and social app today to inspect (1) Active Logged-In Sessions, (2) Connected Third-Party Apps, and (3) Tag/Comment Filtering controls, noting completion privately.",
    quiz: [
      {
        question_bn: "শুধু পাসওয়ার্ড বদলানোর পরেও কেন ‘Log out of all active sessions’ করা জরুরি?",
        question_en: "Why is 'Log out of all active sessions' essential in addition to changing a password?",
        options_bn: [
          "নতুন পাসওয়ার্ড সেভ করার জন্য",
          "আগে থেকে লগইন থাকা অন্য ব্রাউজার বা ডিভাইসের সেশন তখনও সক্রিয় থাকতে পারে",
          "এতে ছবি পরিষ্কার হয়",
          "ইন্টারনেট স্পিড বাড়ানোর জন্য",
        ],
        options_en: [
          "To save the new password",
          "Previously authenticated sessions on other devices or browsers can remain open otherwise",
          "To enhance photo resolution",
          "To boost Wi-Fi speed",
        ],
        answer: 1,
        explanation_bn:
          "অনেক প্ল্যাটফর্মে পাসওয়ার্ড বদলালেও পুরনো লগইন টোকেন কিছুক্ষণ সক্রিয় থাকে; সেশন টার্মিনেট করলে সব অবাঞ্ছিত অ্যাক্সেস সাথে সাথে বন্ধ হয়।",
        explanation_en:
          "Active session tokens can persist briefly after a password reset; revoking all sessions forces immediate re-authentication everywhere.",
      },
      {
        question_bn: "কোনো পোস্টে আপনার বাসার ঠিকানা বা ব্যক্তিগত নম্বর ফাঁস হলে (Doxxing) কী করা উচিত নয়?",
        question_en: "If someone leaks your phone number or address (doxxing), which action should you AVOID?",
        options_bn: [
          "লিংক সেভ করে ডক্সিং রিপোর্ট করা",
          "পাল্টা প্রতিশোধ হিসেবে অন্য পক্ষের ব্যক্তিগত তথ্য প্রকাশ করা",
          "অচেনা কল সাইলেন্ট করা",
          "প্রয়োজনে পরিবারের সদস্য বা ক্যাম্পাস নিরাপত্তাকে জানানো",
        ],
        options_en: [
          "Logging the URL and filing a doxxing report",
          "Retaliating by leaking the other person's private data",
          "Enabling unknown-caller silencing",
          "Alerting family or campus security discreetly",
        ],
        answer: 1,
        explanation_bn:
          "রিভেঞ্জ ডক্সিং পরিস্থিতি আরও বিপজ্জনক করে এবং আইনগতভাবে আপনাকেও ঝুঁকিতে ফেলে।",
        explanation_en:
          "Retaliatory doxxing escalates real-world danger and creates legal liability.",
      },
      {
        question_bn: "সংগঠিত কমেন্ট আক্রমণের সময় প্রতিটি কমেন্টে তর্ক করলে কী হয়?",
        question_en: "What happens if you argue back under every comment during coordinated brigading?",
        options_bn: [
          "আক্রমণকারীরা সাথে সাথে মাফ চায়",
          "প্ল্যাটফর্মের অ্যালগরিদম হাই এনগেজমেন্ট দেখে পোস্টটি আরও বেশি মানুষের কাছে ছড়ায় এবং মানসিক চাপ বাড়ে",
          "অ্যাকাউন্ট স্বয়ংক্রিয়ভাবে ভেরিফায়েড হয়",
          "কমেন্ট মুছে যায়",
        ],
        options_en: [
          "Attackers immediately apologize",
          "Algorithmic engagement signals amplify the thread further while increasing emotional fatigue",
          "Your account gets verified",
          "All comments auto-delete",
        ],
        answer: 1,
        explanation_bn:
          "উত্তর বা তর্ক প্ল্যাটফর্ম অ্যালগরিদমে ‘জনপ্রিয় আলোচনা’ হিসেবে গণ্য হয়। ইন্টারঅ্যাকশন লিমিট ও কীওয়ার্ড ফিল্টার অনেক বেশি কার্যকর।",
        explanation_en:
          "Replies boost engagement metrics, causing algorithms to push hostile threads wider. Throttling interactions and filtering keywords cuts off amplification.",
      },
      {
        question_bn: "কাছের কেউ ফোনে গোপন নজরদারি করছে বলে সন্দেহ হলে এবং শারীরিক নিরাপত্তা নিয়ে শঙ্কা থাকলে প্রথম করণীয় কী?",
        question_en: "If you suspect covert device monitoring in a potentially unsafe home/relationship, what comes first?",
        options_bn: [
          "সাথে সাথে সেই ব্যক্তির সামনেই ফোন রিসেট করা",
          "নিজের নিরাপত্তা যাচাই করে আলাদা একটি বিশ্বস্ত ডিভাইস থেকে সাহায্য বা পরামর্শ নেওয়া",
          "সোশ্যাল মিডিয়ায় পোস্ট দিয়ে জানিয়ে দেওয়া",
          "সব অ্যাপ আনইনস্টল করে দেওয়া",
        ],
        options_en: [
          "Resetting the phone right in front of the suspected controller",
          "Assessing physical safety first and seeking support from a separate trusted device",
          "Posting an announcement publicly",
          "Deleting every app immediately without a backup plan",
        ],
        answer: 1,
        explanation_bn:
          "হঠাৎ ডিভাইস বদল বা রিসেট করলে নিয়ন্ত্রণকারী ব্যক্তি সতর্ক বা ক্ষুব্ধ হতে পারেন; তাই আগে নিরাপদ ডিভাইস ও সহায়তা নিশ্চিত করা জরুরি।",
        explanation_en:
          "Abruptly wiping a monitored device can alert a controller and trigger escalation; consult trusted support from an unmonitored device first.",
      },
    ],
    summary_bn:
      "নজরদারি, ডক্সিং ও দলবদ্ধ হয়রানি ঠেকাতে ইন্টারমিডিয়েট কৌশল হলো সেশন লকডাউন, পাবলিক ও পার্সোনাল পরিচয়ের বিভাজন, ডক্সিং টেকডাউন প্রোটোকল এবং অ্যালগরিদমিক কমেন্ট ফিল্টারিং।",
    summary_en:
      "Countering surveillance, doxxing, and brigading requires global session lockdown, compartmentalized public profiles, rapid privacy violation takedowns, and automated interaction throttling.",
    terms: [
      {
        term: "Doxxing",
        bn: "ভয় দেখানো বা ক্ষতির উদ্দেশ্যে অনুমতি ছাড়া কারও ব্যক্তিগত ঠিকানা, ফোন নম্বর বা পরিচয় প্রকাশ করা।",
        en: "Maliciously publishing private contact, address, or identifying details without consent.",
      },
      {
        term: "Coordinated Brigading",
        bn: "অনেকগুলো অ্যাকাউন্ট বা বট একসাথে জড়ো হয়ে কোনো ব্যক্তিকে অপমান, হুমকি বা ভুয়া রিপোর্টে ডুবিয়ে দেওয়া।",
        en: "A synchronized group effort using multiple accounts to flood a target with harassment or false flags.",
      },
      {
        term: "Compartmentalization",
        bn: "পাবলিক কাজ ও ব্যক্তিগত সংবেদনশীল অ্যাকাউন্টের জন্য আলাদা ইমেইল, নম্বর ও ইউজারনেম ব্যবহার করার অভ্যাস।",
        en: "Separating public-facing handles from private banking and recovery identities.",
      },
      {
        term: "Stalkerware",
        bn: "ব্যবহারকারীর অজান্তে কল, মেসেজ বা লোকেশন গোপনে নজরদারি করার জন্য ডিভাইসে বসানো সফটওয়্যার।",
        en: "Covert monitoring software installed on a device to track location, messages, or activity without consent.",
      },
    ],
  },
  {
    id: "im4",
    pillar: "safety",
    weightLabel_bn: "Women Safety Core · মডিউল ৪/৭",
    weightLabel_en: "Women Safety (70% Track · Module 4 of 7)",
    estimatedTime: "50 min",
    title_bn: "প্ল্যাটফর্ম টেকডাউন, আইনি সচেতনতা ও প্রমাণ সংরক্ষণ ম্যানুয়াল",
    title_en: "Platform Takedowns, Legal Literacy & Evidence Preservation Manual",
    intro_bn:
      "অনলাইনে অপরাধ বা হয়রানি ঘটলে ‘কী প্রমাণ রাখব’ আর ‘কোথায় রিপোর্ট করব’—এই দুটি জায়গায় বিভ্রান্তির কারণে অনেকেই ন্যায্য সহায়তা পান না। এই মডিউলে প্রাইভেসি-সম্মত ও আইন-সহায়ক প্রমাণ লগিং পদ্ধতি (ইউআরএল, UTC/স্থানীয় সময়, মেটাডেটা নোট), বাংলাদেশের সরকারি ও নির্ভরযোগ্য সহায়তা পথ (পুলিশ সাইবার সাপোর্ট ফর উইমেন, ৯৯৯, ১০৯, বিটিআরসি) এবং মূলনীতিভিত্তিক আইনি সচেতনতা কাঠামোবদ্ধভাবে সাজানো হয়েছে।",
    intro_en:
      "Clear documentation and knowing the exact escalation path often determine whether an online harm report succeeds. This structured manual teaches privacy-safe evidence preservation (exact URLs, timestamps, account IDs—without hoarding intimate media), walks through Bangladesh's formal reporting avenues, and builds practical legal literacy without offering individual legal advice.",
    objectives: [
      {
        bn: "আইনগত বা প্ল্যাটফর্ম রিপোর্টের উপযোগী ‘নিরাপদ এভিডেন্স লগ’ (URL, সময়, অ্যাকাউন্ট আইডি, কনটেক্সট) তৈরি করতে পারা।",
        en: "Build an actionable, privacy-safe evidence log recording URLs, timestamps, handles, and incident context.",
      },
      {
        bn: "স্ক্রিনশটের সীমাবদ্ধতা বুঝে পূর্ণ প্রোফাইল লিংক ও কন্টেক্সট সংরক্ষণ করতে পারা।",
        en: "Understand why cropped screenshots alone are weak and how to preserve full profile URLs and dates.",
      },
      {
        bn: "বাংলাদেশের জরুরি, সাইবার সাপোর্ট এবং আনুষ্ঠানিক রিপোর্টিং কাঠামোর ধাপগুলো আলাদা করতে পারা।",
        en: "Differentiate urgent emergency response, women's cyber support desks, and formal law-enforcement steps in Bangladesh.",
      },
      {
        bn: "গুজবের ওপর নির্ভর না করে বর্তমান সরকারি ও নির্ভরযোগ্য উৎস থেকে আইন ও নীতি যাচাই করতে পারা।",
        en: "Verify current legal and platform escalation policies through authoritative official channels rather than rumors.",
      },
    ],
    lessons: [
      {
        title_bn: "১. ফরেনসিক-সম্মত কিন্তু প্রাইভেসি-নিরাপদ প্রমাণ সংরক্ষণ",
        title_en: "1. Forensic-Ready Yet Privacy-Safe Evidence Preservation",
        duration: "18 min",
        body_bn:
          "কেউ গালিগালাজ বা হুমকি দিলে শুধু অর্ধেক কাটা স্ক্রিনশট রাখলে অনেক সময় তদন্তকারীরা বা প্ল্যাটফর্ম রিভিউয়াররা আসল অ্যাকাউন্ট শনাক্ত করতে পারেন না—কারণ নাম ও ছবি বদলে ফেলা যায়, কিন্তু মূল ইউজারনেম বা ইউজার আইডি URL সহজে বোঝা যায়।\n\nএজন্য স্ট্রাকচার্ড এভিডেন্স লগে অন্তত পাঁচটি ঘর থাকা উচিত: (১) ক্রমিক ও ঘটনার ধরন, (২) তারিখ ও সঠিক সময়, (৩) অভিযুক্ত প্রোফাইল বা পোস্টের পূর্ণ URL, (৪) সংক্ষিপ্ত বস্তুনিষ্ঠ বিবরণ, এবং (৫) কোথায় ও কবে রিপোর্ট করা হয়েছে। সবচেয়ে গুরুত্বপূর্ণ নিরাপত্তা নিয়ম: ভুক্তভোগী বা কিশোরীর কোনো অন্তরঙ্গ ছবি বা ভিডিও প্রমাণ হিসেবে অন্যের ফোনে বা পাবলিক ড্রাইভে রাখবেন না; কেবল মূল লিংক, তারিখ ও বার্তার নিরাপদ রেকর্ড রাখুন।",
        body_en:
          "Heavily cropped screenshots omit crucial context—account names and avatars change in seconds, whereas full profile URLs, numerical IDs, and exact timestamps anchor a report.\n\nA structured evidence log needs five clean fields: (1) incident type, (2) date and time with timezone, (3) full profile/post URL, (4) factual summary without assumptions, and (5) reporting ticket reference. Crucially, never store or circulate intimate images across shared drives or personal chats; log URLs and threat text while escalating safely.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৪.১: এভিডেন্স লগিং ফরম্যাট",
          framework_title_en: "Manual Protocol 4.1: Standard Evidence Log Fields",
          steps_bn: [
            "ফিল্ড ১ (Timestamp): তারিখ ও সঠিক সময় (যেমন ১৪ নভেম্বর, রাত ৯:১৫ BST)।",
            "ফিল্ড ২ (Exact URL): শুধু স্ক্রিনশট নয়, ‘Copy Link to Profile / Copy Link to Post’ করে পূর্ণ লিংক সেভ করুন।",
            "ফিল্ড ৩ (Full-Screen Capture): স্ক্রিনশট নিলে যেন ওপরের URL বার/ইউজারনেম ও সময় দেখা যায়।",
            "ফিল্ড ৪ (Safe Storage): লগটি পাসওয়ার্ড-সুরক্ষিত নিরাপদ জায়গায় রাখুন এবং সেখানে নিজের কোনো পাসওয়ার্ড লিখবেন না।",
          ],
          steps_en: [
            "Field 1 (Timestamp): Exact date and local time (e.g., 14 Nov, 21:15 BST).",
            "Field 2 (Exact URL): Copy the full profile or post URL—display names alone can be edited anytime.",
            "Field 3 (Un-cropped View): Keep usernames, dates, and surrounding message context visible in captures.",
            "Field 4 (Protected Folder): Store logs securely offline or in encrypted private storage—never store account passwords alongside them.",
          ],
          dos_bn: [
            "অন-পেজ ফিল্ড ম্যানুয়াল থেকে ‘Private Evidence Log Template (০৬)’ দেখে ধারাবাহিক রেকর্ড রাখুন।",
          ],
          dos_en: [
            "Follow the in-page 'Private Evidence Log Template (06)' for consistent incident logging.",
          ],
          donts_bn: [
            "ছবি-এডিটিং অ্যাপ দিয়ে স্ক্রিনশটের ওপর দাগাদাগি বা পরিবর্তন করবেন না—এতে আসল প্রমাণের গ্রহণযোগ্যতা নষ্ট হয়।",
          ],
          donts_en: [
            "Avoid editing, cropping, or drawing over original evidence captures; keep raw copies untouched.",
          ],
        },
        example_bn:
          "গাজীপুরের এক শিক্ষিকা হুমকির বার্তা পেলে প্রথমেই হুমকিদাতাকে ব্লক না করে ৩ সেকেন্ড সময় নিয়ে প্রোফাইলের পূর্ণ ‘Copy Link’ ও পুরো স্ক্রিনের তারিখ-সময়সহ ক্যাপচার সংরক্ষণ করেন, তারপর ব্লক ও রিপোর্ট করেন। ফলে পরবর্তী অফিশিয়াল আবেদনে অ্যাকাউন্টটি সহজে শনাক্ত করা সম্ভব হয়।",
        example_en:
          "Before blocking a threatening account, a teacher in Gazipur copied the exact profile URL and saved an uncropped capture showing date and handle. Having the permanent URL allowed support teams to locate the offending account even after it changed its display name.",
      },
      {
        title_bn: "২. বাংলাদেশের সহায়তা ও রিপোর্টিং কাঠামো নেভিগেশন",
        title_en: "2. Navigating Support & Formal Reporting Pathways in Bangladesh",
        duration: "17 min",
        body_bn:
          "সঠিক জায়গায় গেলে সহায়তা পাওয়া সহজ হয়। বাংলাদেশে পরিস্থিতির গুরুত্ব অনুযায়ী ধাপগুলো আলাদা: (ক) তাৎক্ষণিক শারীরিক বিপদ বা হুমকিতে ৯৯৯ (জাতীয় জরুরি সেবা) বা ১০৯ (নারী ও শিশু নির্যাতন প্রতিরোধ হেল্পলাইন); (খ) নারী-সংক্রান্ত অনলাইন হয়রানি, হ্যাকিং বা ব্ল্যাকমেইলের ক্ষেত্রে ‘Police Cyber Support for Women (PCSW)’-এর অফিশিয়াল হেল্পলাইন ও পেজ; এবং (গ) ক্ষতিকর লিংক বা কন্টেন্ট ব্লক/আইনগত পদক্ষেপের প্রয়োজনে নিকটস্থ থানায় জিডি (GD) বা বিটিআরসি (BTRC)/সাইবার ট্রাইব্যুনাল প্রক্রিয়া সম্পর্কে বর্তমান সরকারি নির্দেশনা জানা।\n\nএ ছাড়া মানসিক চাপ ও ট্রমা সামলাতে জাতীয় হেল্পলাইন বা স্বীকৃত মনস্তাত্ত্বিক সহায়তা সেবা (যেমন Kaan Pete Roi বা নারী ও শিশু হেল্পলাইন) সমানভাবে গুরুত্বপূর্ণ।",
        body_en:
          "Matching the situation to the right channel saves vital time. In Bangladesh, pathways divide cleanly by urgency: (a) immediate physical danger—National Emergency Service 999 or 109 (Violence Against Women & Children Helpline); (b) cyber harassment, blackmail, or account compromise—Police Cyber Support for Women (PCSW) official desk; and (c) formal GD (General Diary) at the nearest police station or BTRC/regulatory escalation when removal fails.\n\nAlongside technical action, confidential emotional support services help learners recover without stigma. Always verify current helpline numbers and cyber-law rules against official government portals, as procedures evolve.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৪.২: পরিস্থিতিভিত্তিক এস্কেলেশন ট্রি",
          framework_title_en: "Manual Protocol 4.2: Situation-Based Escalation Tree",
          steps_bn: [
            "রুট ১ (Immediate Danger): তাৎক্ষণিক শারীরিক বা বাড়ি/ক্যাম্পাস ঝুঁকি -> নিরাপদ স্থানে যান ও ৯৯৯ / ১০৯-এ কল করুন।",
            "রুট ২ (Cyber Harassment / Extortion): এভিডেন্স লগ নিয়ে বিশ্বস্ত প্রাপ্তবয়স্কসহ Police Cyber Support for Women (PCSW)-এ যোগাযোগ করুন।",
            "রুট ৩ (Platform Policy Breach): প্ল্যাটফর্ম রিপোর্ট + আপিল প্রক্রিয়া ব্যবহার করুন।",
            "রুট ৪ (Wellbeing & Legal Aid): BLAST, ASK বা সরকারি আইনগত সহায়তা (১৬৪৩০) ও মানসিক সাপোর্ট বিবেচনা করুন।",
          ],
          steps_en: [
            "Route 1 (Immediate Danger): Move to safety and contact 999 or 109 immediately.",
            "Route 2 (Cyber Threat / Blackmail): Bring your evidence log with a trusted adult to Police Cyber Support for Women (PCSW).",
            "Route 3 (Platform Breach): File platform takedowns and escalate unanswered tickets via appeal forms.",
            "Route 4 (Legal & Wellbeing): Consult verified legal aid (e.g., 16430 / BLAST / ASK) and counseling desks.",
          ],
          dos_bn: [
            "এই প্ল্যাটফর্মের ‘Support’ ও ‘Get help’ পাতা থেকে যাচাইকৃত নম্বরগুলো দেখুন।",
          ],
          dos_en: [
            "Check verified numbers directly from the platform's Support and Emergency pages.",
          ],
          donts_bn: [
            "অনলাইন কমেন্ট বা অপরিচিত ফেসবুক পেজের ‘নতুন আইন’ বা গুজবের ওপর ভিত্তি করে সিদ্ধান্ত নেবেন না।",
          ],
          donts_en: [
            "Do not rely on viral social posts claiming 'legal rules'; confirm procedures with official or legal-aid authorities.",
          ],
        },
        example_bn:
          "কলেজের একজন শিক্ষিকা ছাত্রীদের শেখান—সাইবার হেল্পলাইনে যোগাযোগ করার সময় কেবল কান্নাকাটি বা বিশৃঙ্খল মেসেজ না দিয়ে সংক্ষিপ্ত ৩টি তথ্য (ঘটনার সংক্ষিপ্ত বিবরণ, তারিখ ও প্রোফাইল URL) সাথে নিয়ে যোগাযোগ করলে সহায়তাকারী দল অনেক দ্রুত কাজ শুরু করতে পারে।",
        example_en:
          "A college mentor trained students that bringing a concise 3-part summary (what happened, dates, and exact offending URLs) helps support desks act much faster.",
      },
      {
        title_bn: "৩. আইনি সচেতনতা: অপরাধ, সম্মতি ও দায়মুক্তির সীমা",
        title_en: "3. Core Legal Literacy: Consent, Attribution & Safe Boundaries",
        duration: "15 min",
        body_bn:
          "আইনি সচেতনতা মানে নিজে উকিল বা বিচারক হয়ে যাওয়া নয়, বরং তিনটি মৌলিক অধিকার স্পষ্টভাবে বোঝা: (১) প্রতারণা, বিনা সম্মতিতে ব্যক্তিগত বা সম্পাদিত ছবি প্রকাশ, ও হুমকি দেওয়া দণ্ডনীয় অপরাধ—ভুক্তভোগীর সম্মতি একবার দিলে তা সারাজীবনের জন্য প্রযোজ্য থাকে না; (২) কেউ ভুয়া আইডি বা AI ব্যবহার করলে তা ‘বাকস্বাধীনতা’ নয়; এবং (৩) কোনো শিক্ষক, ক্লাব লিডার বা বন্ধু নিজে ‘অপরাধ তদন্ত’ বা ‘সন্দেহভাজনকে জেরা’ করবেন না—তার কাজ নিরাপদ রেফারেল ও প্রাইভেসি রক্ষা করা।\n\nএছাড়া কোনো আইনগত প্রশ্ন উঠলে সরকারি গেজেট, প্রযোজ্য সাইবার সুরক্ষা অধ্যাদেশ/আইন ও লাইসেন্সপ্রাপ্ত আইনজীবীর পরামর্শ নেওয়াই একমাত্র নিরাপদ পথ।",
        body_en:
          "Legal literacy does not mean investigating crimes yourself; it means knowing three clear guardrails: (1) non-consensual distribution of intimate or AI-altered media, extortion, and impersonation are actionable offenses—consent is specific and revocable; (2) hiding behind fake accounts or AI tools is not protected speech; and (3) peers, teachers, and club leaders must never conduct vigilante investigations or interrogate suspects.\n\nAlways consult current official statutes and qualified legal-aid professionals for specific legal questions.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৪.৩: দায়িত্ব ও সীমারেখার চেকলিস্ট",
          framework_title_en: "Manual Protocol 4.3: Safeguarding vs. Investigation Boundary",
          steps_bn: [
            "দায়িত্ব ১ (Believe & Support): ভুক্তভোগীকে শোনা ও তার পছন্দকে সম্মান করা।",
            "দায়িত্ব ২ (Refer Safely): অফিশিয়াল সাইবার সাপোর্ট, আইনগত সহায়তা ও মানসিক সেবার তথ্য দেওয়া।",
            "সীমারেখা (Never Investigate): নিজে হ্যাক, স্টিং অপারেশন বা প্রকাশ্য ‘নেম অ্যান্ড শেম’ না করা।",
          ],
          steps_en: [
            "Duty 1 (Listen & Respect): Believe disclosures without probing graphic details.",
            "Duty 2 (Safe Referral): Connect learners to verified cyber desks, legal aid, and health support.",
            "Boundary (No Vigilantism): Never attempt counter-hacking, sting traps, or public naming-and-shaming.",
          ],
          dos_bn: [
            "অপ্রাপ্তবয়স্ক শিক্ষার্থীদের ক্ষেত্রে অবশ্যই প্রতিষ্ঠানের নির্ধারিত সেফগার্ডিং ফোকাল পয়েন্ট ও অভিভাবককে যুক্ত করুন।",
          ],
          dos_en: [
            "For learners under 18, follow institutional child-safeguarding escalation immediately.",
          ],
          donts_bn: [
            "অনিশ্চিত সন্দেহের বশে কোনো সহপাঠীর নাম পাবলিক গ্রুপে ‘দোষী’ হিসেবে ছড়াবেন না।",
          ],
          donts_en: [
            "Never publicly accuse a peer based on unverified rumors or speculation.",
          ],
        },
        example_bn:
          "একটি স্কুলে ভুয়া পেজ তৈরি হলে ক্লাব সদস্যরা নিজেরা পেজটি কে চালায় তা বের করার জন্য ‘ফাঁদ’ পাতার পরিকল্পনা করছিল। টিচার অ্যাডভাইজার তাদের থামিয়ে বুঝিয়ে দেন যে এতে ঝুঁকি বাড়বে; বরং প্রোফাইল লিংক সংরক্ষণ করে স্কুলে ও PCSW-তে অফিশিয়াল রিপোর্ট করাই নিরাপদ।",
        example_en:
          "When an impersonation page appeared, student club members considered setting an online 'trap' to unmask the creator. Their Teacher Adviser stepped in, explaining why vigilante traps endanger students, and guided them through safe URL logging and formal reporting instead.",
      },
    ],
    activity_bn:
      "ম্যানুয়াল অনুশীলন: এই পাতার ফিল্ড ম্যানুয়াল অংশ থেকে ‘০৬. ব্যক্তিগত তথ্য ও প্রমাণ সংরক্ষণ কাঠামো’ এবং ‘০৭. সহায়তা ও রিপোর্টিং পরিকল্পনা’ পড়ে কাল্পনিক একটি অনলাইন ছদ্মবেশী ঘটনার জন্য ৪-লাইনের একটি সম্পূর্ণ এভিডেন্স লগ তৈরি করুন।",
    activity_en:
      "Manual Drill: Read sheets 06 and 07 in the in-page field manuals section above and draft a 4-line model evidence log for a fictional impersonation scenario (using fake URLs like example.org/fake-profile).",
    quiz: [
      {
        question_bn: "শুধু ছোট করে ক্রপ করা স্ক্রিনশট কেন আইনগত বা প্ল্যাটফর্ম রিপোর্টিংয়ের জন্য যথেষ্ট নয়?",
        question_en: "Why are tightly cropped screenshots often insufficient for formal or platform reports?",
        options_bn: [
          "কারণ স্ক্রিনশটের রঙ বোঝা যায় না",
          "কারণ এতে মূল অ্যাকাউন্ট URL, ইউজারনেম ও তারিখ-সময় হারিয়ে যায় যা নাম বদলানোর পরও অ্যাকাউন্ট শনাক্ত করতে দরকার",
          "কারণ স্ক্রিনশট সবসময় ডিপফেক হয়",
          "কারণ ফাইল সাইজ বড় হয়",
        ],
        options_en: [
          "Because colors look faded",
          "They omit permanent profile URLs, handles, and timestamps needed after display names change",
          "Screenshots are always deepfakes",
          "File sizes are too large",
        ],
        answer: 1,
        explanation_bn:
          "আক্রমণকারী যেকোনো সময় প্রোফাইল নাম ও ছবি বদলে ফেলতে পারে; কিন্তু পূর্ণ URL ও সময়-তারিখসহ ক্যাপচার রিপোর্টে মূল অ্যাকাউন্টকে ধরে রাখে।",
        explanation_en:
          "Perpetrators change display names quickly; preserving the exact profile URL and timestamps anchors the report.",
      },
      {
        question_bn: "হুমকি বা হয়রানির প্রমাণ হিসেবে কোনো ভিকটিমের অন্তরঙ্গ ছবি বা সম্পাদিত ছবি কীভাবে সংরক্ষণ করা উচিত?",
        question_en: "How should someone handle intimate or synthetic sexual imagery when preserving evidence?",
        options_bn: [
          "সকল বন্ধুর হোয়াটসঅ্যাপে পাঠিয়ে রাখা",
          "পাবলিক ক্লাউড ফোল্ডারে আপলোড করা",
          "নিজেদের মধ্যে ছবি ফরওয়ার্ড বা সংগ্রহ না করে প্রোফাইল/পোস্ট URL, তারিখ ও থ্রেট টেক্সট লগ করা এবং অফিশিয়াল সেফ ডেস্কে পরামর্শ নেওয়া",
          "প্রিন্ট করে নোটিশ বোর্ডে টানানো",
        ],
        options_en: [
          "Forward copies across friend group chats for backup",
          "Upload to public cloud folders",
          "Avoid re-sharing or hoarding intimate images; log offending URLs, dates, and threat text and consult official desks",
          "Print and distribute copies",
        ],
        answer: 2,
        explanation_bn:
          "অন্তরঙ্গ বা ভুয়া যৌন ছবি কপি ও ফরওয়ার্ড করলে তা ছড়ানোর ঝুঁকি ও আইনি জটিলতা বাড়ে; URL ও আনুষঙ্গিক মেটাডেটা রাখাই নিরাপদ।",
        explanation_en:
          "Copying or forwarding intimate media creates re-circulation and legal risks, especially for minors. Log URLs and metadata safely.",
      },
      {
        question_bn: "একজন স্কুল ক্লাব লিডার বা শিক্ষকের ভূমিকা কোনটি নয়?",
        question_en: "Which role does NOT belong to a school club leader or teacher adviser?",
        options_bn: [
          "ভুক্তভোগীর কথা শান্তভাবে শোনা",
          "অফিশিয়াল সহায়তা ও সেফগার্ডিং ফোকাল পয়েন্টে রেফার করা",
          "নিজে গোপন স্টিং অপারেশন চালিয়ে অভিযুক্তকে তদন্ত বা জেরা করা",
          "ব্যক্তিগত প্রাইভেসি রক্ষা করা",
        ],
        options_en: [
          "Listening calmly without judgment",
          "Referring safely to official safeguarding and support channels",
          "Running secret sting operations or interrogating suspected perpetrators",
          "Protecting learner privacy",
        ],
        answer: 2,
        explanation_bn:
          "অপরাধ তদন্ত ও জেরা করা আইনশৃঙ্খলা বাহিনীর কাজ; শিক্ষক বা ক্লাব সদস্যদের নিজে তদন্ত করলে নিরাপত্তা ঝুঁকি তৈরি হয়।",
        explanation_en:
          "Investigation and interrogation belong to trained authorities; vigilante stings endanger students and staff.",
      },
      {
        question_bn: "বাংলাদেশে তাৎক্ষণিক শারীরিক বিপদ বা নারী-সংক্রান্ত জরুরি সাইবার সহায়তার জন্য কোন পথগুলো নির্ভরযোগ্য?",
        question_en: "Which are verified primary reporting/emergency avenues in Bangladesh?",
        options_bn: [
          "ফেসবুকের অপরিচিত ‘হ্যাকার হেল্প’ পেজ",
          "তাৎক্ষণিক বিপদে ৯৯৯ / ১০৯ এবং সাইবার হয়রানিতে Police Cyber Support for Women (PCSW)",
          "কেবল বেনামী কমেন্ট বক্স",
          "রিভেঞ্জ পোস্ট গ্রুপ",
        ],
        options_en: [
          "Random 'hacker help' social pages",
          "999 / 109 for emergencies and Police Cyber Support for Women (PCSW) for cyber harassment",
          "Anonymous comment threads",
          "Revenge-post forums",
        ],
        answer: 1,
        explanation_bn:
          "৯৯৯, ১০৯ এবং Police Cyber Support for Women (PCSW) হলো বাংলাদেশের স্বীকৃত ও কার্যকর জরুরি ও সাইবার সহায়তা মাধ্যম।",
        explanation_en:
          "999, 109, and PCSW are verified official response and cyber-support channels in Bangladesh.",
      },
    ],
    summary_bn:
      "নিরাপদ প্রমাণ সংরক্ষণ মানে আসল লিংক, তারিখ ও কনটেক্সট রেকর্ড করা—ক্ষতিকর কনটেন্ট কপি বা ফরওয়ার্ড করা নয়। সঠিক পরিস্থিতিতে ৯৯৯, ১০৯, PCSW ও আইনি সহায়তার মতো যাচাইকৃত পথে এগোলে ভুক্তভোগীর মর্যাদা ও সুরক্ষা বজায় থাকে।",
    summary_en:
      "Privacy-safe documentation captures exact URLs, dates, and context without spreading harmful imagery. Pairing clean logs with verified national helplines (999, 109, PCSW) ensures dignified, effective support.",
    terms: [
      {
        term: "Evidence Log",
        bn: "কোনো ঘটনার তারিখ, সময়, পূর্ণ URL ও সংক্ষিপ্ত বিবরণ ধারাবাহিকভাবে রাখার নিরাপদ নোট।",
        en: "A chronological record of timestamps, full URLs, handles, and factual incident details.",
      },
      {
        term: "Safeguarding Referral",
        bn: "নিজে তদন্ত না করে প্রশিক্ষিত অনুমোদিত সেফগার্ডিং কর্মকর্তা বা সরকারি সহায়তা সেবার কাছে নিরাপদে সংযোগ করিয়ে দেওয়া।",
        en: "Connecting an affected person cleanly to trained safeguarding or official support services without investigating personally.",
      },
      {
        term: "Vigilantism Risk",
        bn: "প্রশিক্ষণ বা আইনি ক্ষমতা ছাড়া নিজেই অনলাইন ‘পাল্টা আক্রমণ’ বা তদন্ত করতে গিয়ে তৈরি হওয়া বিপদ।",
        en: "Danger arising when untrained individuals run counter-attacks, stings, or public accusations.",
      },
    ],
  },
  {
    id: "im5",
    pillar: "safety",
    weightLabel_bn: "Women Safety Core · মডিউল ৫/৭",
    weightLabel_en: "Women Safety (70% Track · Module 5 of 7)",
    estimatedTime: "45 min",
    title_bn: "AI-ভিত্তিক আর্থিক প্রতারণা, সেক্সটর্শন ও চাকরির ফাঁদ মোকাবিলা",
    title_en: "AI-Assisted Financial Scams, Sextortion & Fraudulent Job Engineering",
    intro_bn:
      "AI চ্যাটবট, স্বয়ংক্রিয় ফিশিং এবং নিখুঁত বাংলা/ইংরেজি অনুবাদের কারণে এখন ভুয়া রিমোট চাকরি, স্কলারশিপ, মোবাইল ওয়ালেট প্রতারণা ও সেক্সটর্শন-চক্র চেনা কঠিন হয়ে উঠছে। এই মডিউলে প্রতারকদের ‘আবেগ-নিয়ন্ত্রণ ও তাড়াহুড়োর স্ক্রিপ্ট’ ভেঙে বিশ্লেষণ করা এবং কীভাবে অটোপ্লেয়িং বট বা সেক্সটর্শনের বিরুদ্ধে দৃঢ় অবস্থান নিতে হয় তা ম্যানুয়াল আকারে দেওয়া হয়েছে।",
    intro_en:
      "Fluent AI translation and automated messaging scripts have supercharged romance scams, fake remote-job offers, mobile-wallet phishing, and financial sextortion across Bangladesh. This module breaks down social-engineering scripts and provides an intermediate non-compliance manual for defending finances and personal dignity.",
    objectives: [
      {
        bn: "AI-লিখিত ভুয়া চাকরি, স্কলারশিপ ও ইনভেস্টমেন্ট অফারের ৫টি সাধারণ প্যাটার্ন শনাক্ত করতে পারা।",
        en: "Spot the 5 structural red flags of AI-written fake job, scholarship, and investment scams.",
      },
      {
        bn: "ফিন্যান্সিয়াল সেক্সটর্শনের (আর্থিক ব্ল্যাকমেইল) মানসিক চাপের কৌশল বুঝে জিরো-পেমেন্ট নীতি অনুসরণ করতে পারা।",
        en: "Recognize psychological pressure tactics in financial sextortion and enforce a strict non-payment protocol.",
      },
      {
        bn: "সন্দেহজনক রিমোট জব ও ‘টাস্ক স্ক্যাম’ (টেলিগ্রাম/হোয়াটসঅ্যাপ টাস্ক) যাচাইয়ের ডোমেইন ও পেমেন্ট অডিট করতে পারা।",
        en: "Audit domains, official registries, and payment demands to expose Telegram/WhatsApp 'task scams.'",
      },
      {
        bn: "মোবাইল ওয়ালেট বা ব্যাংকিং তথ্য ঝুঁকিতে পড়লে তাৎক্ষণিক ফ্রিজ ও রিভার্সাল পদক্ষেপ নিতে পারা।",
        en: "Execute rapid financial containment steps if a mobile wallet or card is exposed.",
      },
    ],
    lessons: [
      {
        title_bn: "১. ভুয়া রিমোট জব, স্কলারশিপ ও AI-লিখিত ফিশিং স্ক্রিপ্ট",
        title_en: "1. Fake Remote Jobs, Scholarships & AI-Scripted Phishing",
        duration: "15 min",
        body_bn:
          "আগে প্রতারণামূলক ইমেইলগুলোতে ভাঙা ইংরেজি বা বানান ভুল দেখে সহজেই বোঝা যেত। এখন LLM ব্যবহার করে প্রতারকরা নির্ভুল বাংলা ও কর্পোরেট ইংরেজিতে বিশ্বাসযোগ্য অফার লেটার, নকল ইন্টারভিউ চ্যাট এবং ভুয়া প্রোডাক্ট রিভিউ ‘টাস্ক জব’ তৈরি করে। নারী শিক্ষার্থী ও ঘরে বসে কাজ খুঁজছেন এমন নারীদের প্রায়ই ‘পার্ট-টাইম ডেইলি ইনকাম’-এর প্রলোভনে ফেলে প্রথমে ছোট পেমেন্ট দিয়ে বিশ্বাস অর্জন করা হয়, এরপর ‘ভিআইপি টাস্ক আনলক’ করতে বড় অঙ্কের টাকা চাওয়া হয়।\n\nসহজ ম্যানুয়াল নিয়ম: বৈধ কোনো চাকরি বা স্কলারশিপ কখনোই কাজে যোগ দেওয়ার আগে ‘রেজিস্ট্রেশন ফি’, ‘সিকিউরিটি ডিপোজিট’ বা মোবাইল ওয়ালেট পিন/ওটিপি চায় না।",
        body_en:
          "Poor grammar is no longer a reliable scam clue. LLMs now produce polished Bangla and English interview scripts, forged PDF offer letters, and persuasive 'daily remote review task' campaigns targeting students and home-based earners.\n\nIn typical 'task scams,' victims receive one small payout to build trust, followed by demands to deposit larger sums to 'unlock VIP commissions.' Remember the ironclad manual rule: legitimate employers never require upfront deposits, registration fees, or OTPs before work.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৫.১: অফার ও জব যাচাই ম্যাট্রিক্স",
          framework_title_en: "Manual Protocol 5.1: 4-Step Offer Verification Audit",
          steps_bn: [
            "যাচাই ১ (Domain Inspection): ইমেইল কি `@company.com` থেকে এসেছে, নাকি `@gmail.com` বা `company-bd-careers.xyz` ধরনের ভুয়া ডোমেইন?",
            "যাচাই ২ (Upfront Money Rule): চাকরিতে ঢোকার বা টাস্ক আনলক করার জন্য কি টাকা জমা দিতে বলছে? -> সাথে সাথে স্ক্যাম ধরুন।",
            "যাচাই ৩ (Identity Proof Limit): প্রাইমারি চ্যাটেই কি NID, পাসপোর্ট বা মুখের সেলফি ভিডিও চাইছে? -> কখনো দেবেন না।",
            "যাচাই ৪ (Independent Search): প্রতিষ্ঠানের অফিশিয়াল ওয়েবসাইটের ‘Careers’ পাতায় পদটি আছে কি না সরাসরি দেখুন।",
          ],
          steps_en: [
            "Audit 1 (Domain): Verify the sender domain carefully—watch for lookalike `.xyz`/free domains instead of official corporate domains.",
            "Audit 2 (Upfront Fee Test): Any request to deposit money to 'unlock earnings' or pay processing fees is a scam.",
            "Audit 3 (PII Boundary): Refuse requests for NID scans or verification selfies over Telegram or WhatsApp.",
            "Audit 4 (Official Careers Page): Check the organization's real website independently.",
          ],
          dos_bn: [
            "বিশ্ববিদ্যালয়ের অ্যালামনাই বা পরিচিত পেশাজীবীর কাছে সন্দেহজনক অফারটি যাচাই করুন।",
          ],
          dos_en: [
            "Cross-check unfamiliar remote-work recruiters with campus career centers or trusted peers.",
          ],
          donts_bn: [
            "‘প্রথম টাস্কে ৩০০ টাকা পেয়েছি, তাই কোম্পানি সত্যি’—এই মানসিক ফাঁদে পা দিয়ে বড় টাকা পাঠাবেন না।",
          ],
          donts_en: [
            "Never treat a small initial payout as proof a task scheme is legitimate.",
          ],
        },
        example_bn:
          "ময়মনসিংহের এক স্নাতক শিক্ষার্থী রিমোট ডাটা-এন্ট্রি জবের বিজ্ঞাপন দেখে টেলিগ্রাম গ্রুপে যুক্ত হয়। প্রথম দিন ২টি সহজ কাজ করে ৩০০ টাকা পাওয়ার পর পরের ধাপে ২০০০ টাকা ডিপোজিট চাওয়া হয়। অফার যাচাই ম্যানুয়াল মনে পড়ায় সে ডিপোজিট না করে গ্রুপ থেকে বের হয়ে রিপোর্ট করে।",
        example_en:
          "A graduate student in Mymensingh joined a Telegram 'remote data task' group, received an initial 300 BDT payout, and was then asked to deposit 2,000 BDT for the next tier. Applying the upfront-fee rule, she exited immediately without losing money.",
      },
      {
        title_bn: "২. ফিন্যান্সিয়াল সেক্সটর্শন ও বট-চালিত গ্রুমিং ভাঙার কৌশল",
        title_en: "2. Breaking Financial Sextortion & Automated Grooming Loops",
        duration: "15 min",
        body_bn:
          "ফিন্যান্সিয়াল সেক্সটর্শন হলো যখন কোনো অ্যাকাউন্ট দ্রুত আবেগীয় বা বন্ধুত্বপূর্ণ সম্পর্ক তৈরি করে (অনেক সময় AI চ্যাটবট ও ভুয়া ভিডিও লুপ ব্যবহার করে) এবং পরে ভুয়া বা সংগ্রহ করা ছবি দেখিয়ে ‘সকল বন্ধু ও পরিবারের কাছে পাঠিয়ে দেব’ বলে টাকা দাবি করে। তারা স্ক্রিনশট দেখায় যে মেসেজ সেন্ড করার জন্য রেডি—এতে আক্রান্তের মনে হয় সব শেষ হয়ে যাচ্ছে।\n\nমনে রাখবেন: এই চক্রগুলো মুনাফা-ভিত্তিক। আপনি টাকা না দিয়ে যোগাযোগ বন্ধ করলে ও অ্যাকাউন্ট লক করলে অধিকাংশ সময় প্রতারকরা সময় নষ্ট না করে অন্য টার্গেটের দিকে চলে যায়; কিন্তু একবার টাকা দিলে তারা ‘পেমেন্ট করতে সক্ষম টার্গেট’ হিসেবে চিহ্নিত করে চাপ আরও বাড়ায়।",
        body_en:
          "Financial sextortion often begins with rapid AI-assisted grooming or fake pre-recorded video calls, followed by fabricated screenshots showing your contacts queued up to receive compromised or deepfake imagery unless you pay immediately.\n\nThese syndicates operate on speed and fear. Paying marks you as a lucrative target and guarantees more demands; cutting off contact, locking follower lists, and alerting a trusted ally removes their leverage.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৫.২: সেক্সটর্শন নন-কমপ্লায়েন্স স্টেপস",
          framework_title_en: "Manual Protocol 5.2: Sextortion Non-Compliance Protocol",
          steps_bn: [
            "ধাপ ১ (Zero Payment): কোনো অবস্থাতেই টাকা, গিফট কার্ড বা আরও ছবি পাঠাবেন না।",
            "ধাপ ২ (Cut Visibility): সাথে সাথে প্রোফাইল প্রাইভেট, ফ্রেন্ড লিস্ট লুকানো ও আননোন মেসেজ রিকোয়েস্ট বন্ধ করুন।",
            "ধাপ ৩ (Capture & Block): চ্যাট URL ও পেমেন্ট নম্বরের বিবরণ সংরক্ষণ করে প্রতারককে ব্লক ও রিপোর্ট করুন।",
            "ধাপ ৪ (Trusted Ally): লজ্জা না পেয়ে বিশ্বস্ত কারও কাছে বলুন—লজ্জা ভাঙলেই ব্ল্যাকমেইলের শক্তি শেষ হয়ে যায়।",
          ],
          steps_en: [
            "Step 1 (Zero Payment): Never send money, mobile banking transfers, or additional photos.",
            "Step 2 (Lock Audience): Immediately hide your friend/follower list and restrict who can tag or message you.",
            "Step 3 (Log & Block): Log the account URL and any mobile-wallet payment number requested, then block and report.",
            "Step 4 (Break Silence): Confide in a trusted family member, counselor, or safety desk—secrecy is the extortionist's main weapon.",
          ],
          dos_bn: [
            "প্রতারকের দেওয়া মোবাইল ওয়ালেট বা ব্যাংক অ্যাকাউন্ট নম্বর এভিডেন্স লগে আলাদা করে লিখে রাখুন—অপরাধী শনাক্তে এটি সহায়ক।",
          ],
          dos_en: [
            "Record any payment numbers or bank details demanded by the extortionist in your private evidence log.",
          ],
          donts_bn: [
            "‘শেষবারের মতো দিয়ে মিটিয়ে নিই’ ভেবে কখনোই প্রথম কিস্তি দেবেন না।",
          ],
          donts_en: [
            "Never pay 'just once to make it stop'—extortionists almost never delete material after payment.",
          ],
        },
        example_bn:
          "কাল্পনিক ঘটনায় এক তরুণকে ভুয়া প্রেম ও এডিটেড ভিডিও কল দেখিয়ে ৫০০০ টাকা দাবি করা হয়। সে টাকা না দিয়ে বন্ধুকে সাথে নিয়ে প্রোফাইলের ফ্রেন্ড লিস্ট লুকিয়ে ফেলে, প্রতারকের দেওয়া বিকাশ/রকেট নম্বর ও প্রোফাইল লিংক নোট করে প্ল্যাটফর্মে রিপোর্ট ও PCSW-তে জানায়। প্রতারক আর যোগাযোগ করতে পারেনি।",
        example_en:
          "Targeted with an edited video-call extortion threat, a young learner refused to pay, hid her follower list immediately, logged the requested payment number and profile link, and reported it with a trusted peer.",
      },
      {
        title_bn: "৩. মোবাইল ওয়ালেট বা ব্যাংক ঝুঁকিতে পড়লে তাৎক্ষণিক ফ্রিজ ম্যানুয়াল",
        title_en: "3. Rapid Containment If Mobile Wallets or Banking Details Leak",
        duration: "15 min",
        body_bn:
          "ভুল করে কেউ ফিশিং লিংকে পিন/ওটিপি দিয়ে ফেললে প্রথম ৫ মিনিটের মধ্যেই পদক্ষেপ নিলে অর্থ রক্ষা করা সম্ভব হতে পারে। মোবাইল ফিন্যান্সিয়াল সার্ভিস (যেমন bKash, Nagad, Rocket) বা ব্যাংকের ক্ষেত্রে সরাসরি অফিশিয়াল কাস্টমার কেয়ারে কল করে অ্যাকাউন্ট অস্থায়ীভাবে ফ্রিজ করা, সিম লক করা এবং সংশ্লিষ্ট ইমেইলের পাসওয়ার্ড বদলানো দরকার।\n\nপাশাপাশি প্রতিটি ট্রানজ্যাকশন আইডি ও প্রতারকের নম্বর নোট করে নিকটস্থ থানায় সাধারণ ডায়েরি (GD) এবং বাংলাদেশ ব্যাংকের অফিশিয়াল অভিযোগ সেল সম্পর্কে জেনে নেওয়া উচিত।",
        body_en:
          "If credentials or an OTP were accidentally entered on a phishing page, action within the first five minutes is vital. Contact your bank or mobile financial service provider's official hotline directly to freeze transfers, change PINs from an uncompromised device, and contact your telecom carrier if SIM-swap fraud is suspected.\n\nKeep all transaction IDs cleanly logged for formal police GD and banking dispute claims.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৫.৩: ৫-মিনিট ফিন্যান্সিয়াল লক",
          framework_title_en: "Manual Protocol 5.3: 5-Minute Financial Containment",
          steps_bn: [
            "মিনিট ১: অফিশিয়াল ব্যাংক/MFS হেল্পলাইন নম্বরে কল করে অ্যাকাউন্ট টেম্পোরারি ব্লক/ফ্রিজ অনুরোধ করুন।",
            "মিনিট ২: সিম কার্ডে অপ্রত্যাশিত নেটওয়ার্ক হারিয়ে গেলে অপারেটর অফিসে যোগাযোগ করুন (SIM-swap check)।",
            "মিনিট ৩: লেনদেন হয়ে থাকলে Transaction ID, সময় ও প্রাপক নম্বর লিখে রাখুন।",
            "মিনিট ৪: নিরাপদ ডিভাইস থেকে সংশ্লিষ্ট ইমেইল ও অ্যাপের পাসওয়ার্ড/পিন বদলান।",
          ],
          steps_en: [
            "Minute 1: Call your bank or MFS provider's official helpline directly to place an emergency freeze.",
            "Minute 2: Alert your mobile carrier immediately if signal drops unexpectedly (SIM-swap sign).",
            "Minute 3: Record exact Transaction IDs, timestamps, and recipient numbers.",
            "Minute 4: Update banking, MFS PINs, and linked email passwords from a clean device.",
          ],
          dos_bn: [
            "ব্যাংক ও মোবাইল ওয়ালেটের অফিশিয়াল হেল্পলাইন নম্বর আগে থেকেই ফোনে সেভ করে রাখুন।",
          ],
          dos_en: [
            "Save official banking and mobile-wallet support numbers in your contacts before any emergency.",
          ],
          donts_bn: [
            "গুগল সার্চের টপ বিজ্ঞাপনে থাকা অচেনা ‘হেল্পলাইন’ নম্বরে কল করবেন না—অফিশিয়াল অ্যাপ বা কার্ডের পেছনের নম্বর ব্যবহার করুন।",
          ],
          donts_en: [
            "Never call random 'customer care' numbers found in search ads; use numbers printed on your card or inside official apps.",
          ],
        },
        example_bn:
          "কুমিল্লার একজন ক্ষুদ্র নারী উদ্যোক্তা ভুয়া পার্সেল ডেলিভারি লিংকে কার্ডের তথ্য দেওয়ার ৩০ সেকেন্ডের মধ্যে ভুল বুঝতে পারেন। তিনি কার্ডের পেছনে লেখা ব্যাংকের অফিশিয়াল নম্বরে কল করে কার্ডটি লক করান এবং কোনো আর্থিক ক্ষতি ছাড়াই নিরাপদ থাকেন।",
        example_en:
          "Seconds after entering card details on a fake courier page, a woman entrepreneur in Cumilla realized the mistake, called the hotline printed on the back of her card to lock it immediately, and prevented unauthorized charges.",
      },
    ],
    activity_bn:
      "ম্যানুয়াল অনুশীলন: আপনার ফোনে ব্যবহৃত ব্যাংক বা মোবাইল ওয়ালেটের অফিশিয়াল হেল্পলাইন নম্বর যাচাই করে নোটবুকে লিখে রাখুন এবং একটি ভুয়া টেলিগ্রাম জব মেসেজের ৩টি রেড-ফ্ল্যাগ তালিকাভুক্ত করুন।",
    activity_en:
      "Manual Drill: Verify and record the official customer-care helpline for your primary banking or mobile-wallet app privately, and list 3 red flags you would check on any unsolicited remote-job offer.",
    quiz: [
      {
        question_bn: "কোনো অনলাইন রিমোট জবে প্রথমে ৩০০ টাকা দিয়ে পরে ‘ভিআইপি টাস্ক আনলক’ করার জন্য ২০০০ টাকা ডিপোজিট চাইলে সেটি কী?",
        question_en: "When an online job pays a small 300 BDT reward first and then demands a 2,000 BDT deposit to 'unlock VIP tasks,' what is it?",
        options_bn: [
          "স্বাভাবিক কর্পোরেট সিকিউরিটি ডিপোজিট",
          "একটি সুপরিচিত প্রিপেইড টাস্ক স্ক্যাম (Task Scam)",
          "সরকারি প্রশিক্ষণ প্রকল্প",
          "নিরাপদ ইনভেস্টমেন্ট",
        ],
        options_en: [
          "Standard corporate onboarding",
          "A classic prepaid 'task scam' designed to steal larger deposits",
          "A verified government grant",
          "A risk-free investment",
        ],
        answer: 1,
        explanation_bn:
          "ছোট পেমেন্ট দিয়ে বিশ্বাস তৈরি করে বড় অঙ্কের ডিপোজিট আদায় করা বর্তমান AI-সহায়িত জব স্ক্যামের সবচেয়ে প্রচলিত কৌশল।",
        explanation_en:
          "Giving a tiny initial payout to earn trust before demanding deposits is the hallmark of modern prepaid task scams.",
      },
      {
        question_bn: "ফিন্যান্সিয়াল সেক্সটর্শনের হুমকিতে টাকা দিলে সাধারণত কী ঘটে?",
        question_en: "What typically happens if a victim pays money to a financial sextortionist?",
        options_bn: [
          "প্রতারক সব ফাইল ডিলিট করে ক্ষমা চায়",
          "টাকা পাওয়ার পর আরও বড় অঙ্কের দাবি বাড়তেই থাকে",
          "অ্যাকাউন্ট সুরক্ষিত হয়ে যায়",
          "ফ্রেন্ড লিস্ট লুকিয়ে যায়",
        ],
        options_en: [
          "The extortionist deletes everything and leaves",
          "Demands usually escalate because you are marked as willing to pay",
          "The account becomes automatically protected",
          "Your friend list gets secured",
        ],
        answer: 1,
        explanation_bn:
          "সেক্সটর্শন চক্র আর্থিকভাবে লাভজনক টার্গেটের ওপর চাপ বাড়াতে থাকে; তাই জিরো-পেমেন্ট ও লকডাউন নীতি একমাত্র কার্যকর পথ।",
        explanation_en:
          "Extortion rings escalate demands once paid. Zero-payment, audience lockdown, and logging payment details break their leverage.",
      },
      {
        question_bn: "ব্যাংক বা মোবাইল ওয়ালেটের অফিশিয়াল কাস্টমার কেয়ার নম্বর কোথা থেকে নেওয়া সবচেয়ে নিরাপদ?",
        question_en: "Where should you look up your bank or mobile-wallet helpline during an emergency?",
        options_bn: [
          "সোশ্যাল মিডিয়ার অচেনা কমেন্ট থেকে",
          "অফিশিয়াল ব্যাংকিং অ্যাপ, অফিশিয়াল ওয়েবসাইট বা কার্ডের পেছনে প্রিন্ট করা নম্বর থেকে",
          "যেকোনো এসএমএস লিংক থেকে",
          "ভয়েস কলের বলা নম্বর থেকে",
        ],
        options_en: [
          "From random social media comments",
          "From inside the official app, verified website, or the back of your bank card",
          "From an unexpected SMS link",
          "From whatever number a caller reads out",
        ],
        answer: 1,
        explanation_bn:
          "গুগলের ভুয়া সার্চ বিজ্ঞাপন বা এসএমএস-এ প্রতারকরা নিজেদের নম্বর দেয়; মূল কার্ড বা অফিশিয়াল অ্যাপ থেকেই সঠিক নম্বর নিতে হয়।",
        explanation_en:
          "Scammers buy search ads and send fake helpline numbers via SMS. Always rely on official apps or printed card numbers.",
      },
      {
        question_bn: "চাকরির প্রাথমিক চ্যাটে কেউ NID স্ক্যান ও লাইভ সেলফি চাইলে কী করবেন?",
        question_en: "What should you do if an unverified recruiter demands your NID scan and a selfie in an initial chat?",
        options_bn: [
          "দ্রুত পাঠিয়ে দেবেন",
          "প্রাথমিক চ্যাটে সংবেদনশীল পরিচয়পত্র দেওয়া থেকে বিরত থেকে প্রতিষ্ঠানটি অফিশিয়ালি যাচাই করবেন",
          "পাসপোর্টও সাথে পাঠাবেন",
          "বন্ধুদের NID পাঠাবেন",
        ],
        options_en: [
          "Send them immediately",
          "Refuse to send sensitive IDs in unverified chats and confirm the employer independently",
          "Attach your passport too",
          "Send a friend's ID instead",
        ],
        answer: 1,
        explanation_bn:
          "সংবেদনশীল পরিচয়পত্র ও সেলফি দিলে প্রতারকরা তা দিয়ে অন্যের নামে ভুয়া ব্যাংক বা সিম অ্যাকাউন্ট খুলতে পারে।",
        explanation_en:
          "Leaked NIDs and selfies can be abused for identity theft and fraudulent financial accounts.",
      },
    ],
    summary_bn:
      "AI-লিখিত জব ও ফিন্যান্সিয়াল স্ক্যাম ঠেকানোর মূল মন্ত্র হলো ডোমেইন যাচাই, অগ্রিম টাকা না দেওয়ার নীতি, সেক্সটর্শনে জিরো-পেমেন্ট অবস্থান এবং ৫ মিনিটের জরুরি ফিন্যান্সিয়াল লক।",
    summary_en:
      "Defending against AI-assisted scams relies on verifying sender domains, rejecting upfront deposits, enforcing zero-payment against sextortion, and knowing the 5-minute financial freeze steps.",
    terms: [
      {
        term: "Task Scam",
        bn: "প্রথমে ছোট পারিশ্রমিক দিয়ে বিশ্বাস অর্জনের পর বড় ডিপোজিট দাবি করে টাকা হাতিয়ে নেওয়ার ভুয়া রিমোট কাজের ফাঁদ।",
        en: "A fraudulent remote-work scheme offering tiny initial payouts to lure victims into depositing larger sums.",
      },
      {
        term: "SIM Swap",
        bn: "প্রতারণার মাধ্যমে কারও মোবাইল নম্বর নতুন সিমে স্থানান্তর করে ওটিপি ও কল দখল করা।",
        en: "Hijacking a victim's phone number onto an attacker's SIM card to intercept SMS codes and calls.",
      },
      {
        term: "Zero-Payment Rule",
        bn: "সেক্সটর্শন বা ব্ল্যাকমেইলের ক্ষেত্রে কোনো অবস্থাতেই অর্থ না দেওয়ার সুস্পষ্ট প্রতিরোধ নীতি।",
        en: "Refusing all extortion payments while locking down visibility and preserving payment trails for authorities.",
      },
    ],
  },
  {
    id: "im6",
    pillar: "safety",
    weightLabel_bn: "Women Safety Core · মডিউল ৬/৭",
    weightLabel_en: "Women Safety (70% Track · Module 6 of 7)",
    estimatedTime: "45 min",
    title_bn: "প্রাইভেসি ইঞ্জিনিয়ারিং, ডিভাইস সুরক্ষা ও নিরাপদ AI ব্যবহারবিধি",
    title_en: "Privacy Engineering, Device Hardening & Safe AI Usage Hygiene",
    intro_bn:
      "এখানে আমরা দৈনন্দিন ব্যবহারের গভীরে গিয়ে ডিভাইসের ‘লুকানো তথ্য’ যেমন ছবির EXIF লোকেশন ডেটা, ব্রাউজার ট্র্যাকিং, ওয়াই-ফাই হস্টেল/ক্যাফে নিরাপত্তা এবং জনপ্রিয় AI চ্যাটবটে কী দেওয়া যাবে আর কী দেওয়া যাবে না—তা নিয়ে সম্পূর্ণ ম্যানুয়াল শিখব। আধুনিক প্রাইভেসি শুধু পাসওয়ার্ডে নয়, ডেটা মিনিমাইজেশন ও সেটিংস ইঞ্জিনিয়ারিংয়ে।",
    intro_en:
      "This module goes deeper into practical privacy engineering: hidden metadata inside photos (EXIF), browser permission control, shared campus/hostel Wi-Fi safety, and strict boundaries around what personal or third-party data should never enter public generative AI tools.",
    objectives: [
      {
        bn: "ছবির EXIF মেটাডেটা কীভাবে লোকেশন ও ডিভাইস মডেল ফাঁস করে এবং কীভাবে তা অপসারণ করতে হয় তা জানতে পারা।",
        en: "Understand how photo EXIF metadata leaks GPS coordinates and device models, and how to strip it safely.",
      },
      {
        bn: "Android/iOS-এ ‘Least Privilege’ বা ন্যূনতম অ্যাপ পারমিশন নীতি প্রয়োগ করতে পারা।",
        en: "Apply least-privilege permission controls for camera, microphone, contacts, and background location on mobile.",
      },
      {
        bn: "জনপ্রিয় জেনারেটিভ AI টুলে ব্যক্তিগত তথ্য, ক্লাসের ডাটা বা অন্যের ছবি না দেওয়ার (Safe Prompt Hygiene) নিয়ম মানতে পারা।",
        en: "Practice safe prompt hygiene—never entering PII, confidential records, or another person's photo into public AI chatbots.",
      },
      {
        bn: "হস্টেল, ক্যাফে বা ক্যাম্পাসের শেয়ার্ড ওয়াই-ফাইয়ে নিরাপদ ব্রাউজিং অভ্যাস গঠন করতে পারা।",
        en: "Apply safe browsing practices on shared campus, dorm, and cafe Wi-Fi networks.",
      },
    ],
    lessons: [
      {
        title_bn: "১. EXIF মেটাডেটা, ক্যামেরা পারমিশন ও মোবাইল হার্ডেনিং",
        title_en: "1. Stripping EXIF Metadata & Least-Privilege Mobile Hardening",
        duration: "15 min",
        body_bn:
          "যখন আপনি ফোনে ছবি তোলেন, তখন সেই ফাইলের ভেতরে অদৃশ্য মেটাডেটা (EXIF) জমা হতে পারে—যার মধ্যে থাকে ঠিক কোন GPS অক্ষাংশ-দ্রাঘিমাংশে ছবিটি তোলা হয়েছিল, কবে ও কটার সময় এবং কোন মডেলের ফোন দিয়ে তোলা হয়েছে। বেশিরভাগ বড় সোশ্যাল অ্যাপ আপলোডের সময় EXIF মুছে দিলেও ইমেইল অ্যাটাচমেন্ট, ডকুমেন্ট শেয়ারিং, ক্লাউড লিংক বা ফোরাম আপলোডে এই লোকেশন ডেটা থেকে যেতে পারে।\n\nএছাড়া মোবাইল অ্যাপগুলোতে ‘Least Privilege’ মানা মানে: একটি ক্যালকুলেটর বা ফ্ল্যাশলাইট অ্যাপের কোনোমতেই আপনার Contacts বা Microphone পারমিশন থাকার কথা নয়। শুধুমাত্র ব্যবহারের সময় (‘While Using the App’) লোকেশন চালু রাখুন।",
        body_en:
          "Digital photos often carry invisible EXIF metadata embedding exact GPS coordinates, timestamps, and device details. While major social feeds strip EXIF on upload, sending raw files as email attachments, messaging 'Documents,' or forum uploads can quietly leak your exact home or hostel location.\n\nPair metadata hygiene with 'least privilege' on mobile: regularly revoke Microphone, Contacts, and 'Always' Location access from apps that do not strictly require them.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৬.১: মোবাইল ও মেটাডেটা হার্ডেনিং ম্যানুয়াল",
          framework_title_en: "Manual Protocol 6.1: Device & Metadata Hardening Checklist",
          steps_bn: [
            "ধাপ ১ (Camera GPS Off): ক্যামেরা অ্যাপ সেটিংসে গিয়ে অপ্রয়োজনে ‘Save Location / Location Tags’ বন্ধ রাখুন।",
            "ধাপ ২ (Document Send Caution): কাউকে সাধারণ ছবি পাঠানোর সময় অরিজিনাল ‘Document’ ফাইলে না পাঠিয়ে স্ট্যান্ডার্ড কম্প্রেসড বা মেটাডেটা-মুক্ত ভার্সন পাঠান।",
            "ধাপ ৩ (App Permission Sweep): Settings -> Privacy -> Permission Manager-এ গিয়ে Camera, Mic ও Location চেক করুন।",
            "ধাপ ৪ (Auto Lock): ফোনের স্ক্রিন অটো-লক ৩০ সেকেন্ড বা ১ মিনিটে সেট রাখুন।",
          ],
          steps_en: [
            "Step 1 (Camera Tags): Disable unnecessary GPS Location Tags inside your default camera settings.",
            "Step 2 (Raw File Caution): Avoid sharing sensitive home photos as uncompressed email/messaging 'Documents' that preserve EXIF GPS data.",
            "Step 3 (Permission Audit): Review Phone Permission Manager for Camera, Microphone, and Contacts access monthly.",
            "Step 4 (Screen Timeout): Keep auto-lock set to 30–60 seconds with a strong non-guessable passcode.",
          ],
          dos_bn: [
            "অফিশিয়াল অ্যাপ স্টোর (Play Store / App Store) ছাড়া অচেনা `.apk` ফাইল ইনস্টল করা থেকে বিরত থাকুন।",
          ],
          dos_en: [
            "Install apps exclusively from official app stores and keep OS security updates current.",
          ],
          donts_bn: [
            "বাইরের কোনো ব্যক্তি বা অপরিচিত সার্ভিস সেন্টারে ফোন আনলক অবস্থায় দিয়ে আসবেন না।",
          ],
          donts_en: [
            "Never hand over an unlocked personal phone during repairs without enabling Repair/Guest Mode or backing up safely.",
          ],
        },
        example_bn:
          "ঢাকার একজন ফটোগ্রাফি শিক্ষার্থী নিয়ম করে রাখলেন যে যেকোনো অনলাইন কনটেস্ট বা ওপেন ড্রাইভে ছবি দেওয়ার আগে ফাইল প্রোপার্টিজ থেকে লোকেশন মেটাডেটা অপসারণ করে নেবেন, যাতে তার বাসার ঠিকানা প্রকাশ না পায়।",
        example_en:
          "A photography student in Dhaka adopted a rule of stripping GPS EXIF metadata from photos before submitting them to open contest drives, keeping her home neighborhood private.",
      },
      {
        title_bn: "২. AI টুলে নিরাপদ প্রম্পট হাইজিন (Safe AI Prompt Hygiene)",
        title_en: "2. Safe Prompt Hygiene When Using Public AI Tools",
        duration: "15 min",
        body_bn:
          "আজকাল পড়াশোনা, সিভি লেখা, ইমেইল ড্রাফট বা ছবি এডিটের জন্য শিক্ষার্থীরা প্রচুর AI টুল ব্যবহার করেন। কিন্তু অনেক ফ্রি AI সার্ভিস আপনার দেওয়া প্রম্পট ও আপলোড করা ছবি ভবিষ্যতে তাদের মডেল ট্রেইনিংয়ের জন্য সংরক্ষণ করতে পারে এবং মানব রিভিউয়াররা কোয়ালিটি চেকের জন্য তা দেখতেও পারেন।\n\nতাই ‘Safe Prompt Hygiene’-এর মূল নিয়ম: নিজের বা অন্য কারও আসল নাম, NID/স্টুডেন্ট আইডি, ফোন নম্বর, স্বাস্থ্য-রিপোর্ট, ব্যক্তিগত ডায়েরি, অফিসিয়াল গোপন ডকুমেন্ট বা কোনো ব্যক্তির ছবি—বিশেষ করে অনুমতি ছাড়া সহপাঠীর ছবি—পাবলিক AI টুলে কখনোই আপলোড বা পেস্ট করবেন না। প্র্যাকটিস বা লেখার সহায়তার জন্য সবসময় কাল্পনিক নাম বা প্লেসহোল্ডার (`[Name]`, `[University]`) ব্যবহার করুন।",
        body_en:
          "Students increasingly rely on generative AI for study summaries, resume drafts, and image tasks. However, many free AI platforms retain submitted prompts and uploads for model training or human safety review.\n\nSafe Prompt Hygiene means never pasting real names, NIDs, phone numbers, medical/personal disclosures, confidential workplace files, or someone else's photo into public AI apps. Always anonymize prompts with placeholders like `[Student A]` or `[Organization]` and review privacy toggles to opt out of model training.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৬.২: AI প্রম্পট প্রাইভেসি ৫-নিয়ম",
          framework_title_en: "Manual Protocol 6.2: 5 Rules for Safe AI Tool Use",
          steps_bn: [
            "নিয়ম ১ (Anonymize): সিভি বা চিঠি লেখাতে চাইলে নিজের নাম, ঠিকানা ও ফোন নম্বর বাদ দিয়ে ‘[MY NAME]’ লিখে প্রম্পট দিন; পরে নিজের ডিভাইসে নাম বসান।",
            "নিয়ম ২ (No Third-Party Photos): বন্ধুবান্ধব বা সহকর্মীর ছবি অনুমোদন ছাড়া ‘AI অ্যানিমে/হেডশট’ অ্যাপে আপলোড করবেন না।",
            "নিয়ম ৩ (Opt-out Settings): ব্যবহৃত AI অ্যাকাউন্টের Data Controls-এ গিয়ে ‘Improve the model for everyone’ বন্ধ করুন বা Temporary Chat ব্যবহার করুন।",
            "নিয়ম ৪ (No Crisis Disclosures): মানসিক কষ্ট বা সহিংসতার ব্যক্তিগত তথ্য পাবলিক চ্যাটবটে সেভ করবেন না—সাপোর্ট প্রফেশনালের সহায়তা নিন।",
          ],
          steps_en: [
            "Rule 1 (Anonymize): Replace names, addresses, and IDs with `[PLACEHOLDER]` before asking AI to draft letters or CVs.",
            "Rule 2 (Consent for Photos): Never upload friends' or students' photos into novelty AI avatar/filter apps without explicit permission.",
            "Rule 3 (Data Controls): Open AI settings -> Data Controls and disable 'Train on my content' or use Temporary Chat.",
            "Rule 4 (Not a Therapist): Do not rely on public chatbots as confidential crisis counselors; contact trained human support.",
          ],
          dos_bn: [
            "প্রতিটি নতুন AI অ্যাপ ইনস্টল করার আগে ডেভেলপারের প্রাইভেসি পলিসি দেখে নিন এটি ছবি সার্ভারে রাখে কি না।",
          ],
          dos_en: [
            "Check whether an AI photo app deletes uploads immediately or retains commercial rights before using it.",
          ],
          donts_bn: [
            "অফিশিয়াল বা গোপন পরীক্ষার প্রশ্ন, ভুক্তভোগীর বিবরণ বা কারও আর্থিক তথ্য চ্যাটবটে পেস্ট করবেন না।",
          ],
          donts_en: [
            "Never paste confidential institutional records, client info, or survivor disclosures into public AI prompts.",
          ],
        },
        example_bn:
          "সিভি রিভিউয়ের জন্য মালিহা AI চ্যাটবট ব্যবহার করার আগে তার পুরনো সিভি থেকে বাসার ঠিকানা, ফোন নম্বর ও এনআইডি তথ্য মুছে `[Address]` লিখে পেস্ট করল এবং ‘Temporary Chat’ চালু রাখল—ফলে সে দারুণ ফিডব্যাকও পেল, আবার কোনো ব্যক্তিগত তথ্যও ফাঁস হলো না।",
        example_en:
          "Before asking an AI assistant to polish her resume, Maliha replaced her home address and phone number with placeholders and enabled Temporary Chat—getting useful editing feedback without exposing personal data.",
      },
      {
        title_bn: "৩. ক্যাম্পাস, হস্টেল ও শেয়ার্ড ডিভাইস নিরাপত্তা",
        title_en: "3. Campus, Hostel Wi-Fi & Shared Computer Safety",
        duration: "15 min",
        body_bn:
          "বাংলাদেশের অনেক শিক্ষার্থী হস্টেল ওয়াই-ফাই, লাইব্রেরি কম্পিউটার বা ফ্যামিলি শেয়ার্ড ল্যাপটপ ব্যবহার করেন। এসব পরিবেশে দুটি বড় ঝুঁকি হলো: (১) শেয়ার্ড ব্রাউজারে পাসওয়ার্ড অটো-সেভ হয়ে থাকা, এবং (২) অবিশ্বস্ত পাবলিক ওয়াই-ফাইয়ে ‘Captive Portal’ বা ভুয়া আপডেট পপ-আপ।\n\nসবসময় শেয়ার্ড কম্পিউটারে ‘Incognito / Guest Profile’ ব্যবহার করা, নিজের ফোনে মোবাইল ডেটা দিয়ে ব্যাংকিং কাজ করা এবং কাজ শেষে সাইন আউট নিশ্চিত করা ঝুঁকি কমায়।",
        body_en:
          "Many learners share dorm Wi-Fi, campus lab PCs, or household laptops. Two major hazards in shared setups are leaving browser auto-sign-in active and encountering tampered 'free Wi-Fi update' popups on untrusted networks.\n\nAlways launch a Guest/Private window on shared computers, switch to cellular data for financial or recovery changes, and double-check account logout before stepping away.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৬.৩: শেয়ার্ড কম্পিউটার ও হস্টেল নেটওয়ার্ক নিয়ম",
          framework_title_en: "Manual Protocol 6.3: Shared Device & Network Protocol",
          steps_bn: [
            "ধাপ ১: ল্যাব বা সাইবার ক্যাফের কম্পিউটারে ব্রাউজারের ‘Guest Mode’ বা ‘Private Window’ খুলুন।",
            "ধাপ ২: ‘Keep me signed in’ বা ‘Save password’ পপ-আপ এলে কখনোই ‘Yes’ দেবেন না।",
            "ধাপ ৩: সংবেদনশীল ব্যাংকিং বা রিকভারি পরিবর্তনে পাবলিক ফ্রি ওয়াই-ফাইয়ের বদলে নিজস্ব মোবাইল ডেটা ব্যবহার করুন।",
            "ধাপ ৪: কাজ শেষে ব্রাউজার পুরোপুরি বন্ধ করুন ও ডাউনলোড ফোল্ডার থেকে নিজের ফাইল মুছে ফেলুন।",
          ],
          steps_en: [
            "Step 1: Open Guest Mode or a Private Window on any shared lab or household PC.",
            "Step 2: Always decline 'Save password' and uncheck 'Keep me signed in.'",
            "Step 3: Use personal cellular data rather than open public Wi-Fi for banking or security changes.",
            "Step 4: Delete downloaded personal files from the shared Downloads folder and close all browser windows.",
          ],
          dos_bn: [
            "শুধু HTTPS (তালা চিহ্নযুক্ত) ওয়েবসাইটে লগইন করুন।",
          ],
          dos_en: [
            "Confirm HTTPS encryption in the address bar before entering any password.",
          ],
          donts_bn: [
            "শেয়ার্ড ওয়াই-ফাইয়ে ‘Continue browsing? Install Browser Update’ জাতীয় ভুয়া পপ-আপে ক্লিক করবেন না।",
          ],
          donts_en: [
            "Never install sudden 'network plugin' or 'browser update' prompts on public Wi-Fi portals.",
          ],
        },
        example_bn:
          "কম্পিউটার ল্যাবে অ্যাসাইনমেন্ট জমা দেওয়ার পর সুমাইয়া খেয়াল করল সে সাধারণ মোডে ইমেইল খুলেছিল। সে সাথে সাথে সাইন আউট করে ডাউনলোড ফোল্ডার থেকে তার আইডি কার্ডের ফাইল মুছে ফেলল এবং নিজের ফোনে গিয়ে ল্যাবের সেশন রিমুভ করল।",
        example_en:
          "Realizing she had signed into email in a regular lab browser window, Sumaiya signed out, deleted her assignment PDF from the local Downloads folder, and revoked that lab session from her phone.",
      },
    ],
    activity_bn:
      "ম্যানুয়াল অনুশীলন: আপনার ব্যবহৃত প্রধান AI চ্যাটবটের Settings -> Data Controls পরীক্ষা করুন এবং ফোনের Permission Manager-এ গিয়ে অপ্রয়োজনীয় দুটি অ্যাপের Microphone বা Location অনুমতি বন্ধ করুন।",
    activity_en:
      "Manual Drill: Inspect Data Controls in your preferred AI tool to check training opt-out options, and revoke one unnecessary Microphone or Location permission on your phone.",
    quiz: [
      {
        question_bn: "ছবিতে থাকা EXIF মেটাডেটার মাধ্যমে অজান্তেই কী প্রকাশ পেতে পারে?",
        question_en: "What sensitive data can photo EXIF metadata unintentionally reveal?",
        options_bn: [
          "ব্যক্তির প্রিয় রঙ",
          "ছবি তোলার সঠিক GPS লোকেশন, তারিখ-সময় ও ডিভাইস মডেল",
          "সিম কার্ডের ব্যালেন্স",
          "ফেসবুকের পাসওয়ার্ড",
        ],
        options_en: [
          "Favorite colors",
          "Exact GPS coordinates, capture timestamp, and camera/phone model",
          "Mobile SIM balance",
          "Social media passwords",
        ],
        answer: 1,
        explanation_bn:
          "অরিজিনাল ছবি সরাসরি ডকুমেন্ট বা ইমেইল অ্যাটাচমেন্ট হিসেবে পাঠালে EXIF-এ থাকা GPS কো-অর্ডিনেট থেকে ঠিকানা জানা যেতে পারে।",
        explanation_en:
          "Sending unstripped photos as raw documents preserves EXIF GPS coordinates that can pinpoint where a photo was taken.",
      },
      {
        question_bn: "পাবলিক AI চ্যাটবটে সিভি বা চিঠি লিখতে চাইলে কোন অভ্যাসটি নিরাপদ?",
        question_en: "Which practice follows Safe Prompt Hygiene when drafting a CV with a public AI chatbot?",
        options_bn: [
          "আসল ঠিকানা, ফোন নম্বর ও এনআইডি নম্বরসহ পুরো ফাইল পেস্ট করা",
          "নাম, ফোন ও ঠিকানার জায়গায় `[NAME]` জাতীয় প্লেসহোল্ডার ব্যবহার করে পরে নিজের ডিভাইসে তা বসানো",
          "সহপাঠীর ছবি দিয়ে প্রোফাইল তৈরি করা",
          "গোপন ব্যাংক স্টেটমেন্ট আপলোড করা",
        ],
        options_en: [
          "Pasting your real address, phone, and NID number directly",
          "Using `[PLACEHOLDER]` tags for personal details and filling real info locally afterward",
          "Uploading a classmate's photo without asking",
          "Attaching private bank statements",
        ],
        answer: 1,
        explanation_bn:
          "প্লেসহোল্ডার ব্যবহার করলে AI-এর সহায়তা নেওয়া যায় অথচ ব্যক্তিগত পরিচয় বা PII সার্ভারে জমা হয় না।",
        explanation_en:
          "Anonymizing prompts with placeholders protects personally identifiable information from being logged or used in training.",
      },
      {
        question_bn: "শেয়ার্ড ল্যাব কম্পিউটারে জরুরি লগইন করতে হলে কোনটি সবচেয়ে নিরাপদ?",
        question_en: "What is the safest way to sign in on a shared campus lab computer?",
        options_bn: [
          "নিয়মিত ব্রাউজারে পাসওয়ার্ড সেভ করে রাখা",
          "Guest Mode বা Incognito/Private Window ব্যবহার করে শেষে সাইন আউট ও ফাইল মুছে ফেলা",
          "বন্ধুর ব্রাউজার প্রোফাইলে লগইন করা",
          "লগইন অবস্থায় চলে যাওয়া",
        ],
        options_en: [
          "Saving your password in the default browser",
          "Using Guest/Private mode, signing out fully, and clearing downloaded files afterward",
          "Using a classmate's logged-in profile",
          "Leaving tabs open when done",
        ],
        answer: 1,
        explanation_bn:
          "Guest/Private মোড সেশন কুকি বা হিস্টোরি রেখে যায় না এবং শেষে ফাইল মুছলে প্রাইভেসি নিশ্চিত হয়।",
        explanation_en:
          "Guest or Private sessions avoid caching credentials or browsing history on shared hardware.",
      },
      {
        question_bn: "একটি সাধারণ নোটপ্যাড বা টর্চলাইট অ্যাপ আপনার Contacts ও Microphone পারমিশন চাইলে কী করবেন?",
        question_en: "What should you do if a simple flashlight or calculator app requests Contacts and Microphone access?",
        options_bn: [
          "‘Allow Always’ দিয়ে দেবেন",
          "প্রয়োজন ছাড়া অতিরিক্ত পারমিশন প্রত্যাখ্যান করবেন ও অবিশ্বস্ত অ্যাপ সরিয়ে দেবেন",
          "ফোন রিস্টার্ট করবেন",
          "সব অ্যাপেই একই অনুমতি দেবেন",
        ],
        options_en: [
          "Grant 'Allow Always'",
          "Deny excessive permissions under Least Privilege and uninstall untrusted apps",
          "Simply restart the phone",
          "Allow all permissions uniformly",
        ],
        answer: 1,
        explanation_bn:
          "Least Privilege নীতি অনুযায়ী যে অ্যাপের যে কাজ, তার বাইরের সংবেদনশীল অনুমতি দেওয়া বিপজ্জনক।",
        explanation_en:
          "Least Privilege restricts apps strictly to permissions required for their stated purpose.",
      },
    ],
    summary_bn:
      "প্রাইভেসি ইঞ্জিনিয়ারিং মানে ছোট ছোট প্রযুক্তিগত নিয়ন্ত্রণ একসাথে ব্যবহার করা: ছবির EXIF মেটাডেটা সরানো, ফোনের অপ্রয়োজনীয় পারমিশন বন্ধ রাখা, AI প্রম্পটে আসল PII না দেওয়া এবং শেয়ার্ড ডিভাইসে Guest/Private মোড মানা।",
    summary_en:
      "Privacy engineering relies on layered technical hygiene: stripping EXIF GPS tags, enforcing least-privilege permissions, anonymizing AI prompts, and isolating shared-computer sessions.",
    terms: [
      {
        term: "EXIF Metadata",
        bn: "ছবি বা ভিডিও ফাইলের ভেতরে লুকিয়ে থাকা কারিগরি তথ্য, যাতে জিপিএস লোকেশন, সময় ও ডিভাইসের নাম থাকতে পারে।",
        en: "Embedded technical file tags inside images that can reveal GPS coordinates, timestamps, and device hardware.",
      },
      {
        term: "Least Privilege",
        bn: "কোনো অ্যাপ বা অ্যাকাউন্টকে তার কাজের জন্য ন্যূনতম প্রয়োজনীয় অনুমতির বেশি না দেওয়ার নীতি।",
        en: "Security principle granting apps only the minimum permissions necessary for their core function.",
      },
      {
        term: "Prompt Hygiene",
        bn: "AI টুলে ব্যক্তিগত, গোপন বা অন্যের সংবেদনশীল তথ্য না দিয়ে নিরাপদে প্রম্পট লেখার অভ্যাস।",
        en: "Habit of stripping PII and confidential records before submitting text or files to AI assistants.",
      },
    ],
  },
  {
    id: "im7",
    pillar: "safety",
    weightLabel_bn: "Women Safety Core · মডিউল ৭/৭",
    weightLabel_en: "Women Safety (70% Track · Module 7 of 7)",
    estimatedTime: "50 min",
    title_bn: "পিয়ার লিডারশিপ, ট্রমা-সচেতন সহায়তা ও ক্লাব ফ্যাসিলিটেশন ম্যানুয়াল",
    title_en: "Peer Leadership, Trauma-Informed Response & Club Facilitation Manual",
    intro_bn:
      "Women Safety-র শেষ ইন্টারমিডিয়েট মডিউলটি স্কুল-কলেজ ক্লাব লিডার, শিক্ষক ও কমিউনিটি স্বেচ্ছাসেবীদের জন্য একটি পূর্ণাঙ্গ ফ্যাসিলিটেশন ম্যানুয়াল। এখানে আপনি শিখবেন কীভাবে নিজের সীমারেখা বজায় রেখে ট্রমা-সচেতনভাবে (trauma-informed) সহপাঠীর পাশে দাঁড়ানো যায়, কীভাবে রিয়েল ভিকটিমের গল্প না টেনে কাল্পনিক কেস স্টাডি দিয়ে ওয়ার্কশপ পরিচালনা করা যায় এবং কীভাবে সেফগার্ডিং নিয়ম ভঙ্গ না করে কার্যকর অ্যাকশন ক্যাম্পেইন চালাতে হয়।",
    intro_en:
      "The seventh safety module equips peer leaders, college club coordinators, and mentors with a complete facilitation and trauma-informed response manual. You will learn clear boundaries between peer support and professional counseling, how to run engaging workshops using synthetic/fictional scenarios only, and how to escalate child or youth safeguarding concerns safely.",
    objectives: [
      {
        bn: "সহানুভূতিশীল ‘পিয়ার ট্রায়াজ’ (শোনা -> স্থির রাখা -> নিরাপদ রেফারেল) এবং প্রফেশনাল কাউন্সেলিংয়ের মধ্যে সীমারেখা বোঝা।",
        en: "Distinguish supportive peer triage (listen, stabilize, refer) from clinical counseling or legal investigation.",
      },
      {
        bn: "‘নো-ডিসক্লোজার ওয়ার্কশপ’ ডিজাইন করে স্কুল বা কলেজে ৪৫ মিনিটের নিরাপদ সেশন পরিচালনা করতে পারা।",
        en: "Facilitate a 45-minute school or college digital-safety session using fictional cases without soliciting personal disclosures.",
      },
      {
        bn: "বাইস্ট্যান্ডার হস্তক্ষেপ (Bystander 4D Model: Direct, Distract, Delegate, Document) প্রয়োগ করতে পারা।",
        en: "Apply the 4D Bystander Intervention model to interrupt online peer harm safely.",
      },
      {
        bn: "ক্লাবের বার্ষিক বা ষাণ্মাসিক সেফগার্ডিং অডিট এবং সমষ্টিগত (aggregate) রিপোর্টিং করতে পারা।",
        en: "Conduct club safeguarding reviews using aggregate attendance metrics without publishing student identities.",
      },
    ],
    lessons: [
      {
        title_bn: "১. ট্রমা-সচেতন পিয়ার সাপোর্ট ও রেফারেল সীমারেখা",
        title_en: "1. Trauma-Informed Peer Triage & Referral Boundaries",
        duration: "17 min",
        body_bn:
          "যখন কোনো বন্ধু বা সহপাঠী অনলাইন হয়রানির কারণে ভেঙে পড়েন, তখন সাহায্যকারীও অনেক সময় প্রচণ্ড চাপে পড়ে যান—বিশেষ করে যখন সাহায্যকারী মনে করেন ‘সব সমস্যা আমাকেই একা সমাধান করতে হবে’। ট্রমা-সচেতন (trauma-informed) সহায়তার চারটি স্তম্ভ হলো: নিরাপত্তা (Safety), বিশ্বাসযোগ্যতা (Trust), পছন্দ (Choice), এবং সহযোগিতা (Collaboration)।\n\nআপনার কাজ বিচার করা বা জেরা করা নয়, এবং এমন কোনো গোপনীয়তার মিথ্যা প্রতিশ্রুতি দেওয়া নয় যা রক্ষা করা যাবে না (যেমন কোনো অপ্রাপ্তবয়স্ক শিক্ষার্থী বড় বিপদে থাকলে শিক্ষিকা বা সেফগার্ডিং ফোকাল পয়েন্টকে জানানো বাধ্যতামূলক)।",
        body_en:
          "When a peer shares an upsetting online incident, helpers often feel pressured to solve everything personally. Trauma-informed peer support rests on four pillars: emotional safety, clear honesty, restoring the person's choices, and non-judgmental collaboration.\n\nCritically, never promise absolute secrecy if someone—especially a minor—faces severe danger or abuse; explain clearly who must be brought in under safeguarding rules.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৭.১: পিয়ার সাপোর্টের ‘৩-R’ কাঠামো",
          framework_title_en: "Manual Protocol 7.1: The 3-R Peer Triage Script",
          steps_bn: [
            "R1 (Reassure): ‘এটা তোমার দোষ নয়। আমি শুনছি, তাড়াহুড়োর কিছু নেই।’",
            "R2 (Respect Choice): ‘এখন প্রথমে কী করলে তোমার নিরাপদ লাগবে—অ্যাকাউন্ট প্রাইভেট করা নাকি বিশ্বস্ত বড় কারও সাথে কথা বলা?’",
            "R3 (Refer & Boundaries): নিজের সীমা স্পষ্ট করে অফিশিয়াল সাপোর্ট (শিক্ষক/অভিভাবক/PCSW/১০৯) সংযোগ করানো এবং ব্যক্তিগত ছবি না নেওয়া।",
          ],
          steps_en: [
            "R1 (Reassure): 'This is not your fault. Take your time—I am listening without judgment.'",
            "R2 (Respect Choice): 'What feels safest right now—locking down privacy settings or reaching out to a trusted adult together?'",
            "R3 (Refer Safely): Avoid taking copies of harmful media and connect clearly to safeguarding officers or verified helplines.",
          ],
          dos_bn: [
            "সহায়তা করার পর নিজের মানসিক চাপ কমাতে বিশ্বস্ত মেন্টর বা অ্যাডভাইজারের সাথে (ব্যক্তিগত নাম গোপন রেখে) ডিব্রিফ করুন।",
          ],
          dos_en: [
            "Debrief with a trusted club adviser (keeping learner identities confidential) if supporting a peer feels heavy.",
          ],
          donts_bn: [
            "কাউকে ‘কীভাবে ঘটনা ঘটল, সব বিস্তারিত ছবি পাঠিয়ে দেখাও’ বলবেন না।",
          ],
          donts_en: [
            "Never ask someone to forward explicit details or harmful photos so you can 'check if it is real.'",
          ],
        },
        example_bn:
          "কলেজ হোস্টেলে এক ছাত্রী কান্নায় ভেঙে পড়ে জানাল কেউ তাকে ফেক আইডি থেকে ভয় দেখাচ্ছে। তার রুমমেট ছবি না চেয়ে তাকে এক গ্লাস পানি দিল, ‘তুমি দায়ী নও’ বলল, এবং তার সম্মতি নিয়ে হোস্টেল সুপার ও টিচার অ্যাডভাইজারের সাথে কথা বলার সময় পাশে থাকল।",
        example_en:
          "When a dorm student broke down over threats from a fake account, her roommate did not ask to see explicit threats; she offered calm reassurance, respected her pace, and accompanied her to speak with the faculty safeguarding adviser.",
      },
      {
        title_bn: "২. ৪৫ মিনিটের নিরাপদ ক্লাব ওয়ার্কশপ ফ্যাসিলিটেশন গাইড",
        title_en: "2. 45-Minute Club Workshop Facilitation Guide (Zero-Disclosure)",
        duration: "18 min",
        body_bn:
          "স্কুল বা কলেজে ওয়ার্কশপ চালানোর সময় সবচেয়ে বড় ভুল হলো ক্লাসের মাঝে ‘কার সাথে কী খারাপ ঘটনা ঘটেছে হাত তোলো তো’ জিজ্ঞেস করা। এতে শিক্ষার্থীরা লজ্জা পেতে পারে বা রি-ট্রমাটাইজড হতে পারে।\n\nনিরাপদ ফ্যাসিলিটেশন ম্যানুয়াল অনুযায়ী সবসময় ‘তৃতীয় পক্ষের কাল্পনিক চরিত্র’ (যেমন: ‘ধরো রিমা বা সাদিয়ার ক্লাসে এমন একটি মেসেজ এলো’) ব্যবহার করে আলোচনা শুরু করতে হয়। এতে সবাই স্বাধীনভাবে নিরাপত্তা সমাধান নিয়ে ভাবতে পারে এবং ক্লাসরুমের পরিবেশও ইতিবাচক থাকে।",
        body_en:
          "A major workshop error is asking students in a group room to 'raise your hand if this has happened to you.' Public disclosure triggers shame, peer gossip, and distress.\n\nSafe club facilitation always uses fictional third-person case cards ('Suppose Rima in Class 11 receives...') so participants analyze practical defenses without putting personal experiences on display. Close every session by handing out verified emergency and support cards silently so anyone needing help can read privately.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৭.২: ৪৫-মিনিট ক্লাব সেশন রানশিট",
          framework_title_en: "Manual Protocol 7.2: 45-Minute Session Runsheet",
          steps_bn: [
            "মিনিট ০–৫ (Ground Rules): ক্লাসরুম চুক্তি—‘কোনো ব্যক্তিগত নাম বা ঘটনা নয়, শুধু সমাধান নিয়ে আলোচনা’।",
            "মিনিট ৫–১৫ (Concept Micro-Brief): আজকের বিষয় (যেমন Deepfake বা AI Literacy) সহজ ২টি উদাহরণে ব্যাখ্যা।",
            "মিনিট ১৫–৩০ (Fictional Case Lab): ছোট গ্রুপে কাল্পনিক কেস কার্ড দিয়ে ৪-ধাপের সমাধান তৈরি।",
            "মিনিট ৩০–৪০ (Group Debrief): প্রতিটি গ্রুপ তাদের কন্ট্রোল ও রিপোর্টিং কৌশল শেয়ার করবে।",
            "মিনিট ৪০–৪৫ (Silent Resource Exit): সবার হাতে হেল্পলাইন ও প্রাইভেসি চেকলিস্ট কার্ড তুলে দিয়ে সেশন সমাপ্তি।",
          ],
          steps_en: [
            "Min 0–5 (Ground Rules): Set the zero-disclosure agreement—no real names, no probing stories.",
            "Min 5–15 (Concept Brief): Teach one focused topic using 2 clear visual diagrams or definitions.",
            "Min 15–30 (Fictional Case Lab): Small teams solve a printed fictional scenario card together.",
            "Min 30–40 (Solution Share): Teams present practical privacy controls and reporting pathways.",
            "Min 40–45 (Quiet Resource Exit): Distribute support helpline bookmarks to everyone quietly.",
          ],
          dos_bn: [
            "সেশনে উপস্থিতির সংখ্যা (যেমন ৪০ জন অংশগ্রহণকারী) নোট করুন—শিক্ষার্থীদের নাম বা ফোন নম্বর পাবলিক করবেন না।",
          ],
          dos_en: [
            "Track aggregate attendance counts only; never publish participant lists or student profiles.",
          ],
          donts_bn: [
            "ক্লাবের অ্যাক্টিভিটি পোস্টে শিক্ষার্থীদের ক্লোজ-আপ ছবি অভিভাবক/শিক্ষার্থীর সম্মতি ছাড়া পাবলিক পেজে দেবেন না।",
          ],
          donts_en: [
            "Do not upload close-up student photos from workshops without explicit institutional consent.",
          ],
        },
        example_bn:
          "যশোরের একটি গার্লস স্কুলের অষ্টম-নবম শ্রেণির ক্লাব লিডাররা ‘নো-ডিসক্লোজার’ ম্যানুয়াল মেনে ৪৫ মিনিটের একটি ওয়ার্কশপ করে। শিক্ষার্থীরা কাল্পনিক একটি ফিশিং মেসেজ কার্ড বিশ্লেষণ করে নিজেরাই চেকলিস্ট তৈরি করে এবং শেষে প্রত্যেকে একটি করে অফলাইন হেল্পলাইন কার্ড পায়।",
        example_en:
          "Student club leaders at a girls' high school in Jashore ran a 45-minute zero-disclosure workshop using fictional phishing scenario cards and ended by handing every student a discreet helpline bookmark.",
      },
      {
        title_bn: "৩. বাইস্ট্যান্ডার হস্তক্ষেপের ৪D মডেল (অনলাইন ও অফলাইন)",
        title_en: "3. The 4D Bystander Intervention Model for Digital Spaces",
        duration: "15 min",
        body_bn:
          "অনলাইন গ্রুপ বা কমেন্ট সেকশনে কাউকে উত্ত্যক্ত করা হলে সাধারণত দর্শকেরা চুপ থাকেন, নাহলে উল্টো শেয়ার করেন। ইন্টারমিডিয়েট পিয়ার লিডাররা ‘4D Bystander Model’ ব্যবহার করে নিরাপদে হস্তক্ষেপ করতে পারেন: Direct (নিরাপদ হলে সরাসরি থামতে বলা বা ফ্যাক্ট বলা), Distract (আলোচনা অন্যদিকে ঘুরিয়ে ভিকটিমের ওপর চাপ কমানো), Delegate (মডারেটর বা শিক্ষককে জানানো), এবং Document (লিংক ও তারিখ নোট করে প্রাইভেট রাখা—রিশেয়ার না করে)।",
        body_en:
          "In group chats and comment threads, silent bystanders inadvertently normalize abuse while confrontational replies escalate drama. Peer leaders apply the 4D Bystander Model: Direct (calmly state group rules if safe), Distract (shift focus or interrupt harassment), Delegate (alert moderators or faculty advisers), and Document (capture URLs and timestamps privately without resharing).",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৭.৩: ৪D বাইস্ট্যান্ডার অ্যাকশন চয়েস",
          framework_title_en: "Manual Protocol 7.3: Applying 4D Safely Online",
          steps_bn: [
            "Direct: গ্রুপ চ্যাটে অশালীন মেমে এলে—‘এই গ্রুপে কারও ব্যক্তিগত ছবি নিয়ে মজা করা নিয়মবিরুদ্ধ।’",
            "Distract: সরাসরি তর্ক ঝুঁকিপূর্ণ হলে কাজের প্রসঙ্গ এনে পরিবেশ পাল্টানো এবং লক্ষ্যবস্তু বন্ধুকে প্রাইভেটলি সাপোর্ট দেওয়া।",
            "Delegate: সাথে সাথে গ্রুপ অ্যাডমিন, ক্লাব মডারেটর বা শিক্ষককে স্ক্রিনশট/লিংক না ছড়িয়ে সতর্ক করা।",
            "Document: শুধুই অফিশিয়াল রিপোর্টের জন্য লিংক/তারিখ নোট করা।",
          ],
          steps_en: [
            "Direct: If safe, reply neutrally: 'Mocking people with edited images violates our group rules.'",
            "Distract: Pivot group attention away while checking privately on the targeted peer.",
            "Delegate: Notify group admins, teachers, or platform moderators immediately to lock the thread.",
            "Document: Record private log metadata only—never re-post abusive media.",
          ],
          dos_bn: [
            "লক্ষ্যবস্তু ব্যক্তির ওপর বাড়তি নজর না দিয়ে প্রাইভেটভাবে ‘তুমি ঠিক আছ তো? দরকার হলে আমি অ্যাডমিনকে বলব’ জিজ্ঞেস করুন।",
          ],
          dos_en: [
            "Check in privately with the targeted peer rather than spotlighting them publicly.",
          ],
          donts_bn: [
            "বাইস্ট্যান্ডার হয়ে ভিকটিমের অনুমতি ছাড়া তার নাম ধরে পাবলিক পোস্ট দেবেন না।",
          ],
          donts_en: [
            "Do not call attention to the victim publicly without their consent.",
          ],
        },
        example_bn:
          "একটি কলেজের স্টাডি মেসেঞ্জার গ্রুপে এক ছাত্রীকে নিয়ে অপমানজনক স্টিকার দেওয়া শুরু হলে ক্লাস রিপ্রেজেন্টেটিভ ‘Delegate + Direct’ ব্যবহার করে লেখেন—‘এখানে শুধু ক্লাস নোট থাকবে’ এবং সাথে সাথে অ্যাডমিনকে মেসেজ দিয়ে স্টিকার ডিলিট করান।",
        example_en:
          "When offensive edited stickers targeted a student in a college study chat, the class representative used Direct + Delegate: reminding the group of academic-only rules while alerting admins to remove the stickers immediately.",
      },
    ],
    activity_bn:
      "ম্যানুয়াল অনুশীলন: আপনার স্কুল, কলেজ বা কমিউনিটি ক্লাবের জন্য ৪৫ মিনিটের একটি ওয়ার্কশপ আউটলাইন তৈরি করুন—যাতে একটি কাল্পনিক কেস স্টাডি ও ২টি ‘নো-ডিসক্লোজার’ নিয়ম স্পষ্টভাবে লেখা থাকে।",
    activity_en:
      "Manual Drill: Outline a 45-minute digital safety workshop plan for a school, college, or community circle including one fictional case scenario and two explicit zero-disclosure rules.",
    quiz: [
      {
        question_bn: "ক্লাসরুমে বা ক্লাব ওয়ার্কশপে ‘কার সাথে অনলাইন হয়রানি হয়েছে হাত তোলো’ বলা কেন নিষিদ্ধ?",
        question_en: "Why should facilitators NEVER ask students to 'raise hands if you experienced online harassment' in a workshop?",
        options_bn: [
          "সময় নষ্ট হয় বলে",
          "এতে প্রকাশ্যে লজ্জা, গুজব ও মানসিক আঘাতের (re-traumatization) ঝুঁকি তৈরি হয়",
          "সবাই উত্তর জানে বলে",
          "বোর্ডে লেখা যায় না বলে",
        ],
        options_en: [
          "It takes too much time",
          "Public disclosure risks stigma, peer gossip, and emotional distress",
          "Everyone already knows the answer",
          "It cannot be graded",
        ],
        answer: 1,
        explanation_bn:
          "নিরাপদ ফ্যাসিলিটেশন সবসময় কাল্পনিক চরিত্র ও উদাহরণ ব্যবহার করে শেখায় এবং গোপনে হেল্পলাইন রিসোর্স দেয়।",
        explanation_en:
          "Safe facilitation protects student dignity by using third-person fictional cases and offering confidential resource cards.",
      },
      {
        question_bn: "কোনো অপ্রাপ্তবয়স্ক শিক্ষার্থী বড় ধরনের হুমকি বা নির্যাতনের কথা জানালে একজন পিয়ার লিডার বা শিক্ষকের কী করা উচিত?",
        question_en: "If a minor discloses an ongoing severe threat or abuse, what must a peer leader or adviser avoid promising?",
        options_bn: [
          "মনোযোগ দিয়ে শোনা",
          "‘আমি কোনো শিক্ষক বা অভিভাবককেও বলব না’—এমন চরম গোপনীয়তার প্রতিশ্রুতি দেওয়া",
          "অফিশিয়াল সেফগার্ডিং ফোকাল পয়েন্টে রেফার করা",
          "ভুক্তভোগীকে দোষ না দেওয়া",
        ],
        options_en: [
          "Listening calmly",
          "Promising absolute secrecy that prevents alerting designated safeguarding authorities",
          "Following institutional safeguarding referral procedures",
          "Avoiding victim-blaming",
        ],
        answer: 1,
        explanation_bn:
          "সেফগার্ডিং নীতি অনুযায়ী অপ্রাপ্তবয়স্কের গুরুতর নিরাপত্তা ঝুঁকিতে নির্ধারিত অভিভাবক বা সেফগার্ডিং কর্মকর্তাকে যুক্ত করা জরুরি।",
        explanation_en:
          "Child-safeguarding rules require escalating severe threats involving minors to designated safeguarding focal persons.",
      },
      {
        question_bn: "4D Bystander Model-এর ‘Delegate’ ধাপ বলতে কী বোঝায়?",
        question_en: "What does the 'Delegate' step mean in the 4D Bystander Intervention model?",
        options_bn: [
          "ক্ষতিকর কনটেন্ট সবাইকে ফরওয়ার্ড করা",
          "নিরাপদভাবে গ্রুপ অ্যাডমিন, মডারেটর, শিক্ষক বা কর্তৃপক্ষকে ব্যবস্থা নিতে জানানো",
          "নিজেই হ্যাকার হয়ে প্রতিশোধ নেওয়া",
          "গ্রুপ থেকে চিরতরে বের হয়ে যাওয়া",
        ],
        options_en: [
          "Forwarding harmful media to peers",
          "Alerting group admins, moderators, teachers, or trusted authorities to step in safely",
          "Hacking the troll's account",
          "Deleting all study groups",
        ],
        answer: 1,
        explanation_bn:
          "সবসময় একা মুখোমুখি হওয়ার প্রয়োজন নেই; দায়িত্বশীল মডারেটর বা অ্যাডমিনকে যুক্ত করা অনেক নিরাপদ ও কার্যকর।",
        explanation_en:
          "Delegating activates moderators, faculty, or admins who hold platform control tools to shut down abuse quickly.",
      },
      {
        question_bn: "স্কুল বা কলেজ ক্লাবের বার্ষিক প্রতিবেদনে শিক্ষার্থীদের কোন তথ্য প্রকাশ করা উচিত নয়?",
        question_en: "What must NEVER be published in a public school or college safety club report?",
        options_bn: [
          "মোট কতটি সেশন হয়েছে",
          "উপস্থিতির মোট সংখ্যা",
          "অংশগ্রহণকারী বা ক্ষতিগ্রস্ত শিক্ষার্থীদের পরিচয়যোগ্য নাম ও ব্যক্তিগত বিবরণ",
          "আলোচনার মূল বিষয়বস্তু",
        ],
        options_en: [
          "Total sessions conducted",
          "Aggregate attendance counts",
          "Identifiable student names or incident disclosures",
          "General curriculum themes",
        ],
        answer: 2,
        explanation_bn:
          "সমষ্টিগত পরিসংখ্যান (aggregate metrics) প্রকাশ করা যায়, কিন্তু ব্যক্তিগত পরিচয় বা ঘটনার বিবরণ কখনোই পাবলিক করা যাবে না।",
        explanation_en:
          "Clubs should report aggregate numbers only, keeping student identities and disclosures strictly private.",
      },
    ],
    summary_bn:
      "দায়িত্বশীল পিয়ার লিডারশিপ মানে ‘৩-R’ ট্রায়াজ (শোনা, পছন্দকে সম্মান, নিরাপদ রেফারেল), নো-ডিসক্লোজার ওয়ার্কশপ কাঠামো এবং ৪D বাইস্ট্যান্ডার হস্তক্ষেপ—যাতে সাহায্যকারী ও শিক্ষার্থী উভয়েই নিরাপদ থাকেন।",
    summary_en:
      "Effective peer leadership combines 3-R trauma-informed triage, zero-disclosure workshop plans, and 4D bystander action while respecting strict safeguarding boundaries.",
    terms: [
      {
        term: "Trauma-Informed Support",
        bn: "ভুক্তভোগীকে দোষারোপ বা পুনরায় আঘাত না দিয়ে নিরাপত্তা, বিশ্বাস ও নিজের সিদ্ধান্তের অধিকারকে গুরুত্ব দেওয়া সহায়তা।",
        en: "Support prioritizing safety, trust, choice, and non-judgmental listening without forcing details.",
      },
      {
        term: "Zero-Disclosure Rule",
        bn: "প্রশিক্ষণ বা ওয়ার্কশপে ব্যক্তিগত নির্যাতনের গল্প নয়, কেবল কাল্পনিক উদাহরণ ব্যবহারের বাধ্যবাধকতা।",
        en: "Workshop safeguard ensuring learning relies on fictional cases rather than personal incident sharing.",
      },
      {
        term: "4D Bystander Model",
        bn: "Direct, Distract, Delegate, Document—এই চার উপায়ে নিরাপদে হয়রানি থামানোর কৌশল।",
        en: "A four-option toolkit (Direct, Distract, Delegate, Document) for interrupting harm safely.",
      },
    ],
  },
  {
    id: "im8",
    pillar: "ai-literacy",
    weightLabel_bn: "AI Literacy Core · মডিউল ১/৩ (৩০%)",
    weightLabel_en: "AI Literacy (30% Track · Module 1 of 3)",
    estimatedTime: "45 min",
    title_bn: "আধুনিক AI ও লার্জ ল্যাঙ্গুয়েজ মডেল (LLM) কীভাবে কাজ করে",
    title_en: "AI Literacy Core I: How Modern AI, Diffusion & LLMs Actually Work",
    intro_bn:
      "ইন্টারমিডিয়েট কোর্সের ৩০% অংশ হলো ব্যবহারিক AI Literacy—কারণ প্রযুক্তি ভেতর থেকে কীভাবে কাজ করে তা বুঝলে কেউ AI-কে জাদু বা অভ্রান্ত সত্য মনে করে ঠকবেন না। প্রথম AI লিটারেসি মডিউলে আমরা ট্রেনিং ডেটা, টোকেন প্রেডিকশন, ডিফিউশন ইমেজ জেনারেশন এবং কেন AI আত্মবিশ্বাসের সাথে ভুল তথ্য (Hallucination) তৈরি করে তা সহজভাবে ও স্ট্রাকচার্ড ম্যানুয়ালে বুঝব।",
    intro_en:
      "Thirty percent of this Intermediate course builds practical AI Literacy. When you understand how AI models actually process patterns, you stop treating confident outputs as infallible truth. This first AI Literacy module demystifies training data, token probability in Large Language Models (LLMs), diffusion image synthesis, and why AI hallucinations occur.",
    objectives: [
      {
        bn: "‘প্যাটার্ন প্রেডিকশন’ আর ‘মানবীয় বোঝাপড়া’-র মধ্যে মূল পার্থক্য ব্যাখ্যা করতে পারা।",
        en: "Explain the core difference between statistical token prediction and genuine human comprehension.",
      },
      {
        bn: "AI Hallucination কী এবং কেন চ্যাটবট ভুল আইন বা ভুয়া তথ্য উৎসসহ বানিয়ে দেয় তা বুঝতে পারা।",
        en: "Define AI hallucinations and explain why LLMs can fabricate plausible citations, laws, or medical claims.",
      },
      {
        bn: "জেনারেটিভ ইমেজ/ভিডিও মডেল (Diffusion) কীভাবে মুখ ও পটভূমি তৈরি করে তা মৌলিকভাবে বুঝতে পারা।",
        en: "Understand conceptually how diffusion models generate or modify faces and scenes from learned visual noise.",
      },
      {
        bn: "AI ব্যবহার করার সময় ফ্যাক্ট-চেক ও ক্রস-ভেরিফিকেশন ম্যানুয়াল প্রয়োগ করতে পারা।",
        en: "Apply a structured verification loop before trusting any AI-generated summary or advice.",
      },
    ],
    lessons: [
      {
        title_bn: "১. টোকেন প্রেডিকশন বনাম সত্য: LLM কীভাবে বাক্য তৈরি করে",
        title_en: "1. Token Prediction vs. Truth: Inside Large Language Models",
        duration: "15 min",
        body_bn:
          "ChatGPT বা Gemini-র মতো লার্জ ল্যাঙ্গুয়েজ মডেল মানুষের মতো ‘ভাবনা’ বা ‘বিবেক’ থেকে উত্তর দেয় না। ইন্টারনেট ও বইয়ের বিশাল ডেটাসেট থেকে তারা শিখেছে কোন শব্দের (বা শব্দের অংশ অর্থাৎ Token-এর) পর কোন শব্দটি আসার সম্ভাবনা (probability) সবচেয়ে বেশি।\n\nএটি গণিতভিত্তিক সম্ভাব্যতা, সত্য-মিথ্যা যাচাই নয়। তাই বাংলা কোনো আইনি ধারা বা হেল্পলাইন নম্বর জিজ্ঞাসা করলে মডেলটি এমন একটি নম্বর বা ধারা তৈরি করতে পারে যা শুনতে একদম আসলের মতো, কিন্তু বাস্তবে তা অস্তিত্বহীন। একে বলা হয় ‘AI Hallucination’।",
        body_en:
          "Large Language Models do not reason from lived experience, conscience, or an internal database of verified truth. Trained on massive text corpora, they predict the statistically most probable next token (word piece) in context.\n\nBecause fluency does not equal accuracy, an LLM asked for a specific Bangladesh helpline or legal section can invent a realistic-looking wrong number or nonexistent statute—a phenomenon called an AI Hallucination.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৮.১: AI উত্তর যাচাইয়ের ৩-স্তর",
          framework_title_en: "Manual Protocol 8.1: 3-Layer Output Fact-Check",
          steps_bn: [
            "স্তর ১ (High-Stakes Flag): স্বাস্থ্য, আইন, হেল্পলাইন নম্বর বা আর্থিক সিদ্ধান্ত হলে AI উত্তরকে কেবল খসড়া (draft) ধরুন।",
            "স্তর ২ (Citation Check): AI কোনো বই, রিসার্চ বা ওয়েব লিংক দিলে সেটি আসল ব্রাউজারে খুলে দেখুন—লিংকটি কাজ করে কি না।",
            "স্তর ৩ (Authoritative Cross-Check): সরকারি পোর্টাল বা অফিশিয়াল ডিরেক্টরিতে তথ্যটি সরাসরি মিলিয়ে নিন।",
          ],
          steps_en: [
            "Layer 1 (High-Stakes Rule): Treat AI answers on health, law, helplines, or money strictly as unverified drafts.",
            "Layer 2 (Verify Links): Open every cited study, statute, or URL independently—models can invent plausible citations.",
            "Layer 3 (Primary Source): Confirm details directly against official government or institutional directories.",
          ],
          dos_bn: [
            "কোনো বিষয় না বুঝলে AI-কে বলুন ‘কতটা নিশ্চিত নও তা জানাও’ এবং পরে অফিশিয়াল উৎসে যাচাই করুন।",
          ],
          dos_en: [
            "Use AI for brainstorming, outlining, and language translation while verifying facts externally.",
          ],
          donts_bn: [
            "‘AI তো এত সুন্দর করে লিখেছে, নিশ্চয়ই সত্যি’—এই ভাষাগত সাবলীলতাকে প্রমাণ ভাববেন না।",
          ],
          donts_en: [
            "Do not mistake fluent, polite grammar for factual accuracy.",
          ],
        },
        example_bn:
          "একজন শিক্ষার্থী তার অ্যাসাইনমেন্টের জন্য AI থেকে বাংলাদেশের সাইবার আইনের ধারা ও ৫টি গবেষণাপত্রের তালিকা নিল। যাচাই করে দেখা গেল ২টি গবেষণাপত্রের নাম ও লেখক বাস্তবে অস্তিত্বহীন (Hallucination)—সে তখন বিশ্ববিদ্যালয়ের লাইব্রেরি ডেটাবেজ থেকে আসল রেফারেন্স বের করল।",
        example_en:
          "When a student asked an AI tool for 5 citations on digital safety laws, two of the returned academic papers did not exist. Checking the actual library catalog saved her from submitting fabricated references.",
      },
      {
        title_bn: "২. ডিফিউশন ও মাল্টিমোডাল AI: কীভাবে ছবি ও ভিডিও সংশ্লেষিত হয়",
        title_en: "2. Diffusion & Multimodal AI: How Synthetic Visuals Are Built",
        duration: "15 min",
        body_bn:
          "আধুনিক AI ইমেজ ও ভিডিও জেনারেটরগুলো মূলত ‘Diffusion’ পদ্ধতিতে কাজ করে—অর্থাৎ এলোমেলো পিক্সেল নয়েজ (noise) থেকে ধাপে ধাপে এমন একটি ছবি তৈরি করে যা আপনার লেখা প্রম্পটের সাথে মেলে। যদি মডেলটিকে বলা হয় কারও ছবিতে শুধু পোশাক বা পটভূমি বদলে দিতে (Inpainting / Image-to-Image), তবে সেটি মূল ছবির মুখের অনুপাত ধরে রেখে বাকি অংশ সম্পূর্ণ নতুনভাবে আঁকতে পারে।\n\nএখানেই বোঝা জরুরি: একটি ভুয়া ছবি ‘ক্যামেরা দিয়ে তোলা প্রমাণ’ নয়, বরং পিক্সেল গণনার ফল। কোনো সাধারণ মানুষ বা শিক্ষার্থীর মুখের ছবি ব্যবহার করে অন্যের শরীরের সাথে জোড়া লাগানো যে কারিগরিভাবে সহজ—এই সচেতনতা থাকলে সমাজ ও পরিবার ভুয়া ছবি দেখে ভুক্তভোগীকে দোষারোপ করবে না।",
        body_en:
          "Modern image and video tools rely on diffusion processes—turning visual noise into coherent images matching text or reference inputs. Using inpainting or image-to-image edits, a model can preserve a real face from a public avatar while synthesizing an entirely fabricated setting or body around it.\n\nUnderstanding this mechanism empowers communities: a realistic-looking photo is no longer proof an event happened, dismantling victim-blaming when synthetic edits circulate.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৮.২: সিন্থেটিক মিডিয়া সাক্ষরতা ব্রিফ",
          framework_title_en: "Manual Protocol 8.2: Explaining Synthetic Edits Clearly",
          steps_bn: [
            "ধারণা ১: ‘Inpainting’ দিয়ে আসল ছবিতে থাকা যেকোনো পোশাক বা পটভূমি বদলানো সম্ভব।",
            "ধারণা ২: কোনো ছবি বাস্তবসম্মত দেখালেই তা ক্যামেরায় ধারণ করা প্রমাণ নয়।",
            "ধারণা ৩: তাই সমাজ ও ক্লাবে ‘ছবি সত্য হতেও পারে, নাও পারে—কোনো অবস্থাতেই শেয়ার নয়’ নীতি শেখানো জরুরি।",
          ],
          steps_en: [
            "Concept 1: 'Inpainting' lets models rewrite clothing or backgrounds around an existing face.",
            "Concept 2: Photorealism no longer equals photographic proof.",
            "Concept 3: Teach peers and parents not to trust or circulate unverified shocking images.",
          ],
          dos_bn: [
            "পরিবারকে বোঝান যে কারও মুখের সাধারণ প্রোফাইল ছবি দিয়েও ভুয়া ছবি বানানো যায়—এতে মেয়েটির কোনো দোষ নেই।",
          ],
          dos_en: [
            "Educate families that ordinary, modest profile portraits can be misused by synthetic tools through zero fault of the person.",
          ],
          donts_bn: [
            "‘ও নিশ্চয়ই এমন ছবি তুলেছিল’—এই পুরনো ধারণা পোষণ করবেন না।",
          ],
          donts_en: [
            "Reject the outdated assumption that a photo's existence proves a person posed for it.",
          ],
        },
        example_bn:
          "কলেজের অডিটোরিয়ামে এক শিক্ষার্থী একটি নিরীহ ল্যান্ডস্কেপ ছবিতে ডিফিউশন ইনপেইন্টিং কীভাবে কাজ করে তা (কোনো মানুষের ছবি ছাড়াই—শুধু একটি খালি বেঞ্চে কাল্পনিক ছাতা যোগ করে) দেখিয়ে অভিভাবকদের বোঝাল যে ছবির পিক্সেল বদলানো কত সহজ।",
        example_en:
          "In a college auditorium demo, a student used a harmless landscape photo of an empty park bench to show parents how AI inpainting adds objects—helping parents grasp why fake photos never prove guilt.",
      },
      {
        title_bn: "৩. ডেটা ও গোপন খরচ: ফ্রি AI মডেলের ইকোনমিক্স",
        title_en: "3. Data & The Hidden Cost of Free AI Platforms",
        duration: "15 min",
        body_bn:
          "বড় AI মডেল চালানোর জন্য বিপুল সার্ভার শক্তি ও ডেটার প্রয়োজন। তাই যখন কোনো অ্যাপ ‘সম্পূর্ণ ফ্রি’-তে হাই-কোয়ালিটি ফেস-সোয়াপ বা ভার্চুয়াল ফিল্টার দেয়, তখন প্রশ্ন করতে শিখুন: ‘এই অ্যাপটির আয়ের উৎস কী?’ অনেক সময় বিনামূল্যে ব্যবহারকারীর আপলোড করা ছবি, ভয়েস বা প্রম্পট পরবর্তী মডেল প্রশিক্ষণে বা তৃতীয় পক্ষের বিজ্ঞাপন প্রোফাইলিংয়ে ব্যবহৃত হয়।\n\nএজন্য বিশ্বস্ত ও স্বচ্ছ প্রতিষ্ঠানের AI টুল ব্যবহার এবং শর্তাবলি (Terms of Service) পড়া AI লিটারেসির অপরিহার্য অংশ।",
        body_en:
          "Running large neural networks requires massive compute. When an obscure free app offers instant face filters, voice cloning, or 'relationship advice,' ask: how is this funded? Often, user uploads—including portraits and personal prompts—feed secondary data brokers or training pipelines.\n\nChecking transparent privacy policies and choosing reputable providers are core AI literacy habits.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৮.৩: AI অ্যাপ গ্রহণের পূর্বে ৪-প্রশ্ন",
          framework_title_en: "Manual Protocol 8.3: 4 Questions Before Trying a New AI App",
          steps_bn: [
            "১. এই অ্যাপটির পেছনের কোম্পানি বা প্রতিষ্ঠান কে? তাদের অফিশিয়াল ওয়েবসাইট ও পরিচিতি আছে কি?",
            "২. অ্যাপটি কি অপ্রয়োজনে Contacts, SMS বা পুরো Photo Gallery অ্যাক্সেস চাইছে?",
            "৩. আমার আপলোড করা ছবি/চ্যাট ডিলিট করার স্পষ্ট ‘Delete Account & Data’ বোতাম আছে কি?",
            "৪. এটি ব্যবহার না করলে কি আমার পড়াশোনা বা কাজের কোনো বড় ক্ষতি হবে?",
          ],
          steps_en: [
            "1. Who built this tool, and is their organization transparent and verifiable?",
            "2. Is it asking for excessive device permissions (Contacts, full Photo Library, Microphone)?",
            "3. Is there an accessible 'Delete Data / Opt-out of Training' control?",
            "4. Is the utility worth exposing personal media?",
          ],
          dos_bn: [
            "অচেনা ভাইরাল ট্রেন্ডের AI ফটো অ্যাপে মুখের ছবি দেওয়ার আগে দুবার ভাবুন।",
          ],
          dos_en: [
            "Pause before joining viral AI portrait trends on unverified apps.",
          ],
          donts_bn: [
            "ছোটখাটো মজার অ্যাপে আপনার পুরো ফটো গ্যালারি (‘Allow Full Access’) দিয়ে দেবেন না।",
          ],
          donts_en: [
            "Never grant 'Allow Full Photo Library Access' to random novelty AI filter apps.",
          ],
        },
        example_bn:
          "একটি নতুন ‘ফিউচার লুক’ অ্যাপ সোশ্যাল মিডিয়ায় ভাইরাল হলে ফারহানা সাথে সাথে ছবি না দিয়ে আগে অ্যাপটির প্রাইভেসি লেবেল দেখল—অ্যাপটি ব্যবহারকারীর ছবির ওপর ‘অসীম বাণিজ্যিক লাইসেন্স’ দাবি করছিল। সে অ্যাপটি ইনস্টল করা থেকে বিরত থাকল।",
        example_en:
          "When a viral 'aging filter' app trended, Farhana checked its privacy summary first and saw it claimed broad perpetual rights over uploaded portraits—so she skipped it.",
      },
    ],
    activity_bn:
      "ম্যানুয়াল অনুশীলন: আপনার পছন্দের একটি AI চ্যাটবটকে একটি সাধারণ পড়াশোনার বিষয়ে (কোনো ব্যক্তিগত তথ্য ছাড়া) প্রশ্ন করে তার দেওয়া ২টি তথ্য অফিশিয়াল ওয়েবসাইট বা পাঠ্যবইয়ের সাথে মিলিয়ে যাচাই করুন।",
    activity_en:
      "Manual Drill: Ask an AI assistant a general educational question (no personal data), then fact-check two specific numbers or claims it produces against an authoritative textbook or official portal.",
    quiz: [
      {
        question_bn: "‘AI Hallucination’ বলতে কী বোঝায়?",
        question_en: "What is an 'AI Hallucination'?",
        options_bn: [
          "কম্পিউটারের স্ক্রিন ভেঙে যাওয়া",
          "AI মডেল যখন সম্ভাব্যতা অনুমান করে আত্মবিশ্বাসের সাথে ভুল তথ্য বা অস্তিত্বহীন সূত্র বানিয়ে উত্তর দেয়",
          "যখন ইন্টারনেট সংযোগ বিচ্ছিন্ন হয়",
          "যখন পাসওয়ার্ড ভুল হয়",
        ],
        options_en: [
          "A hardware screen glitch",
          "When an AI predicts plausible text that is factually wrong or invents nonexistent sources",
          "When Wi-Fi disconnects",
          "When a user types a wrong password",
        ],
        answer: 1,
        explanation_bn:
          "LLM সত্য যাচাই করে না, বরং পরবর্তী সম্ভাব্য শব্দ সাজায়; ফলে সে আত্মবিশ্বাসের সাথেও ভুল তথ্য বা ভুয়া রেফারেন্স দিতে পারে।",
        explanation_en:
          "LLMs predict probable tokens rather than verifying facts, allowing them to state false claims with high confidence.",
      },
      {
        question_bn: "ভাইরাল কোনো ফ্রি AI ফেস-ফিল্টার অ্যাপ ব্যবহারের আগে কোনটি দেখা সবচেয়ে জরুরি?",
        question_en: "What should you inspect before uploading your face to a free viral AI filter app?",
        options_bn: [
          "অ্যাপটির আইকন সুন্দর কি না",
          "অ্যাপটির ডেটা প্রাইভেসি নীতি, পারমিশন এবং তারা ছবি ট্রেইনিং বা বিজ্ঞাপনে ব্যবহার করে কি না",
          "কতজন সেলিব্রিটি পোস্ট করেছে",
          "ফিল্টারের রঙ",
        ],
        options_en: [
          "How colorful the app icon looks",
          "Privacy policies, photo access permissions, and whether uploads are stored or used for training",
          "How many influencers shared it",
          "Filter brightness options",
        ],
        answer: 1,
        explanation_bn:
          "অনেক ফ্রি AI ফিল্টার অ্যাপ ব্যবহারকারীর মুখের ছবি ডেটাবেজে সংরক্ষণ করে এবং বাণিজ্যিক অধিকার নিয়ে নেয়।",
        explanation_en:
          "Many unverified free AI apps retain uploaded faces for model training or secondary profiling.",
      },
      {
        question_bn: "‘Diffusion Inpainting’ বোঝার ফলে সমাজের কোন ভুল ধারণা দূর হয়?",
        question_en: "How does understanding 'Diffusion Inpainting' help fight victim-blaming?",
        options_bn: [
          "সব ছবি আসল বলে মনে হয়",
          "বোঝা যায় যে কারও সাধারণ মুখের ছবি দিয়েও কৃত্রিমভাবে ভুয়া দৃশ্য তৈরি করা সম্ভব—ভুক্তভোগীর দোষ নেই",
          "ক্যামেরা বন্ধ করতে হয়",
          "ছবি প্রিন্ট করা সহজ হয়",
        ],
        options_en: [
          "It proves every photo online is real",
          "It proves AI can fabricate scenes around an innocent face without the person ever being there",
          "It makes cameras obsolete",
          "It simplifies printing",
        ],
        answer: 1,
        explanation_bn:
          "কারিগরি প্রক্রিয়া জানলে পরিবার ও সমাজ বুঝতে পারে যে সিন্থেটিক ছবি থাকা মানেই ব্যক্তিটি তা তুলেছে এমন নয়।",
        explanation_en:
          "Knowing AI can repaint scenes around a single innocent portrait dispels myths that victims 'caused' fake images.",
      },
      {
        question_bn: "উচ্চ-ঝুঁকিপূর্ণ বিষয় (যেমন আইন বা জরুরি হেল্পলাইন) সম্পর্কে AI-এর উত্তর পেলে কী করা উচিত?",
        question_en: "How should you treat AI answers regarding laws, medical advice, or emergency helplines?",
        options_bn: [
          "যাচাই ছাড়াই চূড়ান্ত সত্য ধরা",
          "কেবল প্রাথমিক খসড়া হিসেবে দেখে অফিশিয়াল সরকারি বা বিশেষজ্ঞ উৎসে সরাসরি যাচাই করা",
          "সব গ্রুপে ফরওয়ার্ড করা",
          "চ্যাটবটের কথায় জরুরি চিকিৎসা নেওয়া",
        ],
        options_en: [
          "Accept them blindly as final fact",
          "Treat them only as a draft and verify directly with official government or expert sources",
          "Forward immediately to group chats",
          "Follow them without consulting professionals",
        ],
        answer: 1,
        explanation_bn:
          "AI ভুল হেল্পলাইন বা পুরনো আইন উল্লেখ করতে পারে; তাই গুরুত্বপূর্ণ তথ্যে সর্বদা অফিশিয়াল উৎস যাচাই বাধ্যতামূলক।",
        explanation_en:
          "AI models frequently misstate phone numbers or statutes; always verify critical data via official portals.",
      },
    ],
    summary_bn:
      "LLM-এর ভাষাগত সাবলীলতা মানেই সত্য নয়; এগুলো পরিসংখ্যানভিত্তিক টোকেন প্রেডিকশন, যাতে Hallucination ঘটতে পারে। আর ডিফিউশন প্রযুক্তি বোঝায় কেন বাস্তবসম্মত ছবিও কৃত্রিম হতে পারে। তাই AI-কে সবসময় যাচাই সাপেক্ষে ব্যবহার করতে হবে।",
    summary_en:
      "LLMs generate fluent text via probability—not verified truth—making hallucinations common. Diffusion tools explain why photorealistic images aren't automatic proof. Always verify high-stakes outputs externally.",
    terms: [
      {
        term: "Token Prediction",
        bn: "পূর্ববর্তী শব্দের ভিত্তিতে পরবর্তী শব্দ বা শব্দাংশ অনুমান করার গাণিতিক প্রক্রিয়া, যার মাধ্যমে LLM লেখে।",
        en: "Statistical process by which LLMs predict the next word piece in a sequence.",
      },
      {
        term: "AI Hallucination",
        bn: "AI মডেল যখন আত্মবিশ্বাসের সাথে এমন তথ্য, সংখ্যা বা সূত্র বানিয়ে বলে যা বাস্তবে ভুল বা অস্তিত্বহীন।",
        en: "Confident but factually incorrect or fabricated output generated by an AI model.",
      },
      {
        term: "Inpainting",
        bn: "ছবির নির্দিষ্ট অংশ রেখে বাকি অংশ (পোশাক বা পটভূমি) AI দিয়ে নতুন করে আঁকা বা পরিবর্তন করা।",
        en: "Selective AI image editing that replaces chosen regions while keeping surrounding features intact.",
      },
    ],
  },
  {
    id: "im9",
    pillar: "ai-literacy",
    weightLabel_bn: "AI Literacy Core · মডিউল ২/৩ (৩০%)",
    weightLabel_en: "AI Literacy (30% Track · Module 2 of 3)",
    estimatedTime: "45 min",
    title_bn: "রিকমেন্ডেশন অ্যালগরিদম, ফিল্টার বাবল ও জেন্ডার পক্ষপাত (AI Bias)",
    title_en: "AI Literacy Core II: Recommendation Algorithms, Filter Bubbles & Gender Bias",
    intro_bn:
      "সোশ্যাল মিডিয়ার ফিডে কী আসবে, চাকরির বাছাইয়ে কোন সিভি এগোবে এবং ইমেজ জেনারেটরে ‘লিডার’ বা ‘নার্স’ লিখলে কেমন ছবি আসবে—সবই অ্যালগরিদম ও ডেটার পক্ষপাতের সাথে জড়িত। এই দ্বিতীয় AI লিটারেসি মডিউলে আমরা এনগেজমেন্ট অ্যালগরিদম, ইকো চেম্বার, ডেটাসেট জেন্ডার বায়াস এবং কীভাবে সচেতনভাবে নিজের ফিড ‘রিসেট’ বা পুনর্গঠন করা যায় তা ম্যানুয়াল প্রোটোকলসহ শিখব।",
    intro_en:
      "Algorithms decide which posts appear in your feed, how hate speech spreads for engagement, and how AI tools portray women versus men across professions. This second AI Literacy module explains engagement optimization, algorithmic gender bias in training data, and how to audit and retrain your own digital information diet.",
    objectives: [
      {
        bn: "সোশ্যাল মিডিয়ার রিকমেন্ডেশন অ্যালগরিদম কীভাবে রাগ বা চমকপ্রদ কনটেন্ট (engagement bait) বাড়িয়ে দেয় তা ব্যাখ্যা করতে পারা।",
        en: "Explain why engagement-driven feeds amplify outrage, sensationalism, and polarizing content.",
      },
      {
        bn: "AI ট্রেনিং ডেটায় জেন্ডার ও সাংস্কৃতিক পক্ষপাত (gender & cultural bias) কীভাবে তৈরি হয় তা উদাহরণসহ বুঝতে পারা।",
        en: "Identify how historical biases in training data reproduce gender stereotypes in hiring, vision, and text AI.",
      },
      {
        bn: "‘ফিল্টার বাবল’ ও ‘ইকো চেম্বার’-এর মানসিক ও নিরাপত্তা প্রভাব চিহ্নিত করতে পারা।",
        en: "Recognize filter bubbles and echo chambers that distort perception or normalize online misogyny.",
      },
      {
        bn: "‘অ্যালগরিদমিক ফিড হাইজিন’ ব্যবহার করে নিজের টাইমলাইন সুস্থ ও তথ্যসমৃদ্ধ রাখতে পারা।",
        en: "Use algorithmic feed controls ('Not Interested', resets, chronological feeds) to regain control over information flow.",
      },
    ],
    lessons: [
      {
        title_bn: "১. এনগেজমেন্ট অ্যালগরিদম: কেন ক্ষতিকর বা উত্তেজক পোস্ট বেশি ছড়ায়?",
        title_en: "1. Engagement Algorithms: Why Outrage & Polarization Travel Fast",
        duration: "15 min",
        body_bn:
          "অধিকাংশ সোশ্যাল প্ল্যাটফর্মের রিকমেন্ডেশন অ্যালগরিদমের মূল লক্ষ্য ‘সত্য দেখানো’ নয়, বরং ‘Watch time ও Interaction বাড়ানো’। গবেষণা ও বাস্তব পর্যবেক্ষণে দেখা যায়, মানুষ শান্ত তথ্যের চেয়ে যে পোস্ট দেখে রাগ হয়, ভয় পায় বা তর্ক করতে থাকে—সেখানে বেশি সময় থামে (dwell time)। ফলে অ্যালগরিদম সেই বিতর্কিত বা নারীবিদ্বেষী ক্লিপটি আরও হাজার হাজার মানুষের ‘For You’ ফিডে পৌঁছে দেয়।\n\nএখানেই ইন্টারমিডিয়েট শিক্ষার্থীর শক্তি: আপনি যে ভিডিওর নিচে ক্ষুব্ধ হয়ে কমেন্ট করছেন বা কয়েকবার থেমে দেখছেন, সিস্টেম সেটিকে ‘হাই ইন্টারেস্ট’ ধরে নিয়ে পরদিন আরও ১০টি তেমন ভিডিও দেখাবে।",
        body_en:
          "Social recommendation engines optimize primarily for watch time and interaction, not truth or safety. Because content triggering anger, shock, or fear holds attention longer, algorithms routinely promote polarizing or misogynistic clips into wider 'For You' feeds.\n\nCrucially, arguing in comments or re-watching an offensive video signals 'high engagement' to the model—causing it to flood your feed with similar hostility the next day.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৯.১: অ্যালগরিদম ফিড রিসেট নিয়ম",
          framework_title_en: "Manual Protocol 9.1: Algorithmic Feed Reset",
          steps_bn: [
            "ধাপ ১ (Zero Dwell): ক্ষতিকর বা উত্তেজক ক্লিকবেইট দেখলে ভিডিও চালু রেখে কমেন্ট পড়বেন না—দ্রুত স্ক্রল করুন।",
            "ধাপ ২ (Not Interested Signal): ‘Three dots -> Not Interested / Don't recommend channel’ ব্যবহার করে নেতিবাচক সিগন্যাল দিন।",
            "ধাপ ৩ (Chronological / Following Tab): শুধু ‘For You’ না দেখে ‘Following’ বা ‘Subscriptions’ ট্যাবে পড়াশোনা ও বিশ্বস্ত পেজ দেখুন।",
            "ধাপ ৪ (Watch History Clean): ইউটিউব বা সোশ্যাল অ্যাপে ভুল সেশন জমে গেলে Watch History থেকে সেই ভিডিওগুলো সরিয়ে দিন।",
          ],
          steps_en: [
            "Step 1 (Zero Dwell): Do not linger on rage-bait or read hostile replies—scroll past immediately.",
            "Step 2 (Negative Signal): Tap 'Not Interested' or mute toxic channels proactively.",
            "Step 3 (Use Following Tab): Prefer chronological 'Following' feeds over algorithmic discovery feeds.",
            "Step 4 (Clear History): Remove accidental toxic recommendations from your Watch/Search History.",
          ],
          dos_bn: [
            "জ্ঞানমূলক, বিজ্ঞান, নিরাপত্তা ও ইতিবাচক শিক্ষামূলক কনটেন্টে লাইক বা সেভ দিলে ফিড সুস্থ থাকে।",
          ],
          dos_en: [
            "Deliberately search and save constructive educational channels to steer recommendations positively.",
          ],
          donts_bn: [
            "ট্রোলদের জবাব দিয়ে অ্যালগরিদমকে সেই পোস্ট বুস্ট করতে সাহায্য করবেন না।",
          ],
          donts_en: [
            "Do not boost hateful videos by leaving angry comments or quote-sharing.",
          ],
        },
        example_bn:
          "ঢাকার এক কলেজছাত্রীর রিলস ফিডে হঠাৎ নারী-বিরোধী কটূক্তিমূলক ভিডিও আসতে শুরু করে, কারণ সে দুদিন দুটি এমন ভিডিওর নিচে প্রতিবাদমূলক কমেন্ট করেছিল। ফিড রিসেট ম্যানুয়াল মেনে সে আর কমেন্ট না করে ‘Not Interested’ দিল এবং ওয়াচ হিস্টোরি পরিষ্কার করে ৩ দিনের মধ্যেই স্বাভাবিক শিক্ষামূলক ফিড ফিরে পেল।",
        example_en:
          "After defending someone in the comments of two hostile reels, a college student's feed filled with misogynistic clips. She stopped commenting, marked 'Not Interested,' cleared those clips from Watch History, and restored a clean educational feed within days.",
      },
      {
        title_bn: "২. ডেটাসেট জেন্ডার বায়াস: কেন AI স্টেরিওটাইপ পুনরাবৃত্তি করে?",
        title_en: "2. Gender & Cultural Bias in AI Training Data",
        duration: "15 min",
        body_bn:
          "অনেকে মনে করেন ‘কম্পিউটার তো মানুষ নয়, তাই AI নিরপেক্ষ’। কিন্তু AI শেখে মানুষের তৈরি অতীত ডেটা থেকে। যদি কোনো রিক্রুটিং বা চাকরির স্ক্রিনিং মডেলের পুরনো ডেটায় দেখা যায় বেশিরভাগ ইঞ্জিনিয়ার বা ম্যানেজার ছিলেন পুরুষ, তবে AI অজান্তেই নারীর সিভি কম নম্বর দিতে পারে। একইভাবে ইমেজ জেনারেটরে প্রম্পটে ‘CEO’ লিখলে বেশি পুরুষ ও ‘Nurse’ লিখলে বেশি নারীর ছবি তৈরি হতে পারে।\n\nএছাড়া অ-পাশ্চাত্য বা বাংলা ভাষা ও দক্ষিণ এশীয় নারীমুখ শনাক্তকরণ ও কনটেন্ট মডারেশনেও ডেটার অভাবে ভুল (bias) বেশি ঘটে—কখনো বাংলায় সাধারণ নারীবান্ধব পোস্ট ভুলবশত ব্লক হয়, আবার স্থানীয় গালিগালাজ মডারেশন ধরতে পারে না।",
        body_en:
          "Many assume algorithms are neutral because they run on math. In reality, AI learns directly from historical human records. If past hiring datasets under-represented women in engineering or leadership, an automated screening model can silently penalize women's resumes. Similarly, image generators routinely reproduce occupational gender stereotypes unless prompted explicitly.\n\nIn Bangla and South Asian contexts, under-represented training data also skews moderation—sometimes flagging harmless local safety discussions while missing dialect-specific harassment.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৯.২: AI বায়াস চিহ্নিতকরণ ও ভারসাম্য",
          framework_title_en: "Manual Protocol 9.2: Spotting & Countering AI Bias",
          steps_bn: [
            "চেক ১ (Representation Audit): ক্যারিয়ার, শিক্ষা বা চিত্র প্রজন্মে AI কি নির্দিষ্ট জেন্ডার বা গোষ্ঠীকে একচেটিয়াভাবে দেখাচ্ছে?",
            "চেক ২ (Prompt Specificity): নিজে কাজ করার সময় ‘inclusive, diverse, Bangladesh context’-এর মতো স্পষ্ট নির্দেশনা দিন।",
            "চেক ৩ (Moderation Appeal): বাংলা বা স্থানীয় প্রেক্ষাপটে বৈধ নিরাপত্তা পোস্ট ভুলবশত ফ্ল্যাগ হলে ‘Human Review / Appeal’ চাইতে দ্বিধা করবেন না।",
          ],
          steps_en: [
            "Check 1 (Representation): Notice whether generated text or visuals assume default male leadership or narrow stereotypes.",
            "Check 2 (Explicit Prompts): Specify inclusive, culturally accurate context when generating educational visuals or stories.",
            "Check 3 (Appeal Errors): Request human moderation review if legitimate educational safety content in Bangla is wrongly flagged.",
          ],
          dos_bn: [
            "চাকরি বা স্কলারশিপে সিভি দেওয়ার সময় জব ডেসক্রিপশনের আসল স্কিলগুলোর স্পষ্ট ও সরাসরি উল্লেখ রাখুন।",
          ],
          dos_en: [
            "Use clear, standardized skill keywords on resumes so automated screeners evaluate qualifications accurately.",
          ],
          donts_bn: [
            "কোনো AI টুলের আউটপুট বা অ্যালগরিদমিক র‍্যাংকিংকে ‘বৈজ্ঞানিকভাবে অভ্রান্ত’ ধরে নেবেন না।",
          ],
          donts_en: [
            "Never assume an automated score or ranking is bias-free simply because software produced it.",
          ],
        },
        example_bn:
          "একটি স্কুল প্রকল্পের পোস্টার বানানোর সময় শিক্ষার্থীরা দেখল শুধু ‘scientist working in lab’ লিখলে সব ছবিই পুরুষ বিজ্ঞানীর আসছে। তখন তারা প্রম্পটে স্পষ্টভাবে ‘Bangladeshi young woman scientist in laboratory’-লিখে সচেতনভাবে সঠিক প্রতিনিধিত্ব তৈরি করল।",
        example_en:
          "While making a science-fair poster, students noticed 'scientist in a lab' generated only male figures. By explicitly prompting for a Bangladeshi young woman scientist, they spotted and corrected dataset stereotyping.",
      },
      {
        title_bn: "৩. ফিল্টার বাবল ও তথ্যের বৈচিত্র্য বজায় রাখা",
        title_en: "3. Escaping Filter Bubbles & Maintaining Information Diversity",
        duration: "15 min",
        body_bn:
          "ফিল্টার বাবল হলো এমন একটি অদৃশ্য বৃত্ত, যেখানে অ্যালগরিদম আপনাকে কেবল আপনার আগের পছন্দের ও মতের অনুকূল কনটেন্টই দেখাতে থাকে—যেন পুরো পৃথিবী এমনই ভাবছে। এটি শুধু রাজনৈতিক বিষয়েই নয়, কিশোর-তরুণীদের শরীর, সৌন্দর্য, সম্পর্ক ও নিরাপত্তাবোধের ওপরেও ক্ষতিকর প্রভাব ফেলে (যেমন অবাস্তব বিউটি ফিল্টার বা ক্ষতিকর ‘হেলথ/ডায়েট’ ট্রেন্ডের অবিরাম ফিড)।\n\nফিল্টার বাবল ভাঙার সহজ ম্যানুয়াল উপায় হলো সরাসরি নিউজ পোর্টাল, সরকারি তথ্যভাণ্ডার ও বৈচিত্র্যময় শিক্ষামূলক সোর্স সরাসরি ব্রাউজারে বুকমার্ক করে পড়া—সকল খবরের জন্য সোশ্যাল ফিডের ওপর নির্ভর না করা।",
        body_en:
          "Filter bubbles occur when personalized feeds repeatedly mirror one narrow viewpoint or beauty/lifestyle ideal, distorting what feels normal. For young women, unchecked discovery algorithms often funnel unrealistic beauty standards, harmful body trends, or fear-inducing misinformation.\n\nBreaking the bubble means actively visiting direct institutional sources, libraries, and trusted journalism rather than letting an engagement feed curate your worldview.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ৯.৩: অ্যান্টি-বাবল ইনফরমেশন রুটিন",
          framework_title_en: "Manual Protocol 9.3: Anti-Bubble Reading Routine",
          steps_bn: [
            "রুটিন ১: খবর ও নিরাপত্তা আপডেটের জন্য অন্তত ৩টি বিশ্বস্ত ওয়েবসাইট সরাসরি ব্রাউজারে বুকমার্ক করুন।",
            "রুটিন ২: সৌন্দর্য বা স্বাস্থ্য বিষয়ে কোনো ভাইরাল ট্রেন্ড দেখলে ‘এটি কি আমাকে অপ্রয়োজনীয় চাপ বা নিরাপত্তাহীনতা দিচ্ছে?’ প্রশ্ন করুন।",
            "রুটিন ৩: অ্যাপগুলোর ‘Screen Time / Daily Limit’ চালু রাখুন যাতে গভীর রাতে ক্লান্ত অবস্থায় ক্লিকবেইটে না আটকান।",
          ],
          steps_en: [
            "Habit 1: Bookmark 3 trusted news, education, and safety portals directly instead of scrolling feeds for news.",
            "Habit 2: Question viral body or lifestyle trends: 'Is this commercialized pressure or verified health science?'",
            "Habit 3: Set app screen-time reminders to prevent late-night algorithmic rabbit holes.",
          ],
          dos_bn: [
            "ডিজিটাল ওয়েলবিয়িংয়ের জন্য সপ্তাহে একদিন অ-অ্যালগরিদমিক বই বা অফলাইন পড়াশোনায় সময় দিন।",
          ],
          dos_en: [
            "Balance algorithmic feeds with direct reading from books, verified portals, and offline discussions.",
          ],
          donts_bn: [
            "সোশ্যাল মিডিয়ার ‘ট্রেন্ডিং’ ট্যাগ দেখে সবকিছুকে সমাজের সংখ্যাগরিষ্ঠ মত ভেবে নেবেন না।",
          ],
          donts_en: [
            "Do not mistake viral 'trending' hashtags for real-world consensus.",
          ],
        },
        example_bn:
          "বরিশালের এক শিক্ষার্থী লক্ষ্য করল রাত ১১টার পর রিলস দেখতে থাকলে তার ফিডে কেবল দুশ্চিন্তা বাড়ানো পোস্ট ও ভুয়া স্কিন-কেয়ার বিজ্ঞাপন আসে। সে ফোনে রাত ১০টায় ‘App Timer’ সেট করে এবং নিরাপত্তা ও ক্যারিয়ার তথ্যের জন্য সরাসরি ২টি পোর্টাল বুকমার্ক করে।",
        example_en:
          "Noticing late-night reels pushed anxiety-inducing rumors and dubious skincare ads, a student in Barishal set a 10 PM app timer and bookmarked verified educational portals directly.",
      },
    ],
    activity_bn:
      "ম্যানুয়াল অনুশীলন: আপনার প্রধান ভিডিও বা সোশ্যাল অ্যাপে আজ অন্তত ৩টি অপ্রয়োজনীয়/নেতিবাচক রিকমেন্ডেশনে ‘Not Interested’ দিন এবং ২টি নির্ভরযোগ্য শিক্ষামূলক চ্যানেল সাবস্ক্রাইব/বুকমার্ক করে ফিডের পরিবর্তন লক্ষ্য করুন।",
    activity_en:
      "Manual Drill: Mark 'Not Interested' on 3 unhelpful recommendations in your main video/social app today and bookmark 2 trusted educational portals directly in your browser.",
    quiz: [
      {
        question_bn: "ক্ষতিকর বা বিরক্তিকর ভিডিওর নিচে ক্ষুব্ধ হয়ে কমেন্ট করলে অ্যালগরিদমে কী প্রভাব পড়ে?",
        question_en: "How does leaving an angry comment under an offensive video affect recommendation algorithms?",
        options_bn: [
          "ভিডিওটি সাথে সাথে ডিলিট হয়ে যায়",
          "অ্যালগরিদম এটিকে ‘হাই এনগেজমেন্ট’ ধরে নিয়ে পোস্টটি আরও বেশি মানুষের ফিডে ছড়ায়",
          "পোস্টদাতার অ্যাকাউন্ট বন্ধ হয়",
          "কমেন্ট মুছে যায়",
        ],
        options_en: [
          "The video is deleted automatically",
          "The algorithm reads high engagement and pushes the video to even wider feeds",
          "The uploader gets banned automatically",
          "Comments hide by default",
        ],
        answer: 1,
        explanation_bn:
          "রিকমেন্ডেশন সিস্টেম ভালোবাসা ও রাগের মধ্যে পার্থক্য করে না; উভয়কেই ‘আগ্রহ ও সময় ব্যয়’ হিসেবে ধরে নিয়ে পোস্ট বুস্ট করে।",
        explanation_en:
          "Engagement algorithms treat angry comments and re-watches as signals of high interest, amplifying the post further.",
      },
      {
        question_bn: "AI মডেলে ‘Gender Bias’ কেন তৈরি হয়?",
        question_en: "How does gender bias enter AI systems?",
        options_bn: [
          "কম্পিউটারের প্রসেসর গরম হয়ে গেলে",
          "ঐতিহাসিক ও অসম ডেটাসেটে থাকা জেন্ডার স্টেরিওটাইপ বা কম প্রতিনিধিত্ব মডেল শিখে ফেলে বলে",
          "ইন্টারনেট ধীর হলে",
          "পাসওয়ার্ড ছোট হলে",
        ],
        options_en: [
          "When processors overheat",
          "Models learn historical imbalances and stereotypes embedded in their training datasets",
          "When internet connections drop",
          "When passwords are short",
        ],
        answer: 1,
        explanation_bn:
          "পুরনো ডেটায় যে শ্রেণি বা জেন্ডারের উপস্থিতি কম বা পক্ষপাতদুষ্ট থাকে, AI কোনো প্রশ্ন ছাড়াই সেই প্যাটার্ন অনুকরণ করে।",
        explanation_en:
          "AI inherits statistical skews present in real-world training corpora unless developers and users actively audit for bias.",
      },
      {
        question_bn: "বাংলায় লেখা কোনো বৈধ নিরাপত্তা শিক্ষামূলক পোস্ট ভুলবশত অটোমেটেড মডারেশনে ব্লক হলে কী করতে পারেন?",
        question_en: "If an automated filter mistakenly flags a legitimate Bangla digital-safety post, what is the right step?",
        options_bn: [
          "একাধিক ভুয়া অ্যাকাউন্ট খোলা",
          "প্ল্যাটফর্মের ‘Request Human Review / Appeal’ অপশন ব্যবহার করা",
          "ভিন্ন ভাষায় গালি দেওয়া",
          "কোনো ব্যবস্থা না নেওয়া",
        ],
        options_en: [
          "Open fake accounts to repost it",
          "Use the platform's 'Request Human Review / Appeal' process",
          "Use abusive language",
          "Ignore safety education permanently",
        ],
        answer: 1,
        explanation_bn:
          "নন-ইংলিশ ভাষায় অটো-মডারেশনের ভুল (false positive) প্রায়ই ঘটে; হিউম্যান রিভিউর জন্য আপিল করলে অনেক সময় পোস্ট ফিরে আসে।",
        explanation_en:
          "Automated moderation often misreads non-English safety vocabulary; filing an appeal triggers human context review.",
      },
      {
        question_bn: "‘ফিল্টার বাবল’ ভেঙে নির্ভরযোগ্য তথ্য পাওয়ার ভালো উপায় কোনটি?",
        question_en: "What is an effective way to break out of an algorithmic filter bubble?",
        options_bn: [
          "কেবল ‘For You’ ফিডে স্ক্রল করা",
          "সরাসরি বিশ্বস্ত সংবাদ, সরকারি ও শিক্ষামূলক ওয়েবসাইট বুকমার্ক করে পড়া",
          "শুধু অচেনা ফরওয়ার্ডে বিশ্বাস করা",
          "সব নোটিফিকেশন চালু রাখা",
        ],
        options_en: [
          "Scrolling only the 'For You' tab",
          "Bookmarking and visiting trusted news, academic, and official portals directly",
          "Relying only on chat forwards",
          "Enabling every push alert",
        ],
        answer: 1,
        explanation_bn:
          "সরাসরি উৎসে গিয়ে পড়লে আপনি নিজে নির্ধারণ করেন কী পড়বেন—অ্যালগরিদম আপনার সিদ্ধান্ত চাপিয়ে দিতে পারে না।",
        explanation_en:
          "Direct navigation puts you in charge of your information diet instead of letting engagement algorithms decide.",
      },
    ],
    summary_bn:
      "অ্যালগরিদম নিরপেক্ষ নয়; এগুলো সময় ও উত্তেজনা বাড়ানোর জন্য তৈরি এবং ডেটার জেন্ডার বায়াস বহন করতে পারে। ‘Not Interested’, Following ট্যাব ও সরাসরি বুকমার্কিংয়ের মাধ্যমে আপনি নিজের ডিজিটাল পরিবেশের নিয়ন্ত্রণ ধরে রাখতে পারেন।",
    summary_en:
      "Algorithms optimize for attention and inherit dataset biases. By withholding engagement from outrage-bait, using negative feedback controls, and reading primary sources directly, you reclaim control over your feed.",
    terms: [
      {
        term: "Algorithmic Bias",
        bn: "প্রশিক্ষণ ডেটা বা ডিজাইনের ত্রুটির কারণে AI সিস্টেমের মাধ্যমে নির্দিষ্ট মানুষ বা লিঙ্গের প্রতি তৈরি হওয়া অন্যায্য ফল।",
        en: "Systematic unfairness in AI outputs stemming from skewed training data or design assumptions.",
      },
      {
        term: "Filter Bubble",
        bn: "ব্যক্তিগতকৃত অ্যালগরিদমের কারণে কেবল একই ধরনের ও সীমিত দৃষ্টিভঙ্গির তথ্যের ভেতর আটকে পড়া।",
        en: "An isolated information environment created when personalization hides diverse or corrective viewpoints.",
      },
      {
        term: "Engagement Optimization",
        bn: "সত্য বা নিরাপত্তার চেয়ে ব্যবহারকারী কতক্ষণ স্ক্রিনে থাকল বা কমেন্ট করল তা বাড়ানোর অ্যালগরিদমিক লক্ষ্য।",
        en: "Design prioritizing clicks, comments, and watch time regardless of content quality or harm.",
      },
    ],
  },
  {
    id: "im10",
    pillar: "ai-literacy",
    weightLabel_bn: "AI Literacy Core · মডিউল ৩/৩ (৩০%)",
    weightLabel_en: "AI Literacy (30% Track · Module 3 of 3)",
    estimatedTime: "45 min",
    title_bn: "সমালোচনামূলক AI যাচাই, অপতথ্য অডিট ও দায়িত্বশীল সহ-নির্মাণ",
    title_en: "AI Literacy Core III: Critical Evaluation, Disinformation Audits & Responsible Co-Creation",
    intro_bn:
      "ইন্টারমিডিয়েট কোর্সের দশম ও শেষ মডিউলে আমরা Women Safety এবং AI Literacy-কে একসাথে মিলিয়ে নিচ্ছি। এখানে আপনি শিখবেন কীভাবে SIFT পদ্ধতিতে AI-তৈরি গুজব বা জেন্ডারড অপতথ্য যাচাই করতে হয়, পড়াশোনা ও ক্যারিয়ার উন্নয়নে কীভাবে নৈতিক ও নিরাপদভাবে AI-কে সহকারী হিসেবে ব্যবহার করা যায়, এবং কীভাবে নিজের জন্য একটি টেকসই ৬-মাসের নিরাপত্তা ও AI সাক্ষরতা কর্মপরিকল্পনা তৈরি করতে হয়।",
    intro_en:
      "In the capstone module, we unite Women Safety and AI Literacy. You will master the SIFT verification method for auditing AI-assisted disinformation, adopt ethical guidelines for using AI productively in study and careers without plagiarism or privacy leaks, and build your personal 6-month Women Safety & AI Literacy Roadmap.",
    objectives: [
      {
        bn: "ভাইরাল দাবি বা জেন্ডারভিত্তিক অপতথ্য যাচাইয়ে ৪-ধাপের ‘SIFT’ পদ্ধতি প্রয়োগ করতে পারা।",
        en: "Apply the 4-step SIFT methodology (Stop, Investigate, Find better coverage, Trace) to audit viral claims.",
      },
      {
        bn: "নারী নেত্রী, শিক্ষার্থী বা কর্মজীবী নারীদের লক্ষ্য করে ছড়ানো ‘জেন্ডারড ডিসইনফরমেশন’ শনাক্ত করতে পারা।",
        en: "Recognize gendered disinformation campaigns designed to discredit women in public, campus, or work spaces.",
      },
      {
        bn: "প্রতারণা বা প্লেজারিজম না করে পড়াশোনা ও দক্ষতা উন্নয়নে AI-কে দায়িত্বশীলভাবে (ethical co-creation) ব্যবহার করতে পারা।",
        en: "Use generative AI ethically for learning, language support, and career preparation with clear transparency.",
      },
      {
        bn: "ইন্টারমিডিয়েট সার্টিফিকেট মূল্যায়নের জন্য প্রস্তুতি নিয়ে একটি টেকসই ব্যক্তিগত বা ক্লাব অ্যাকশন প্ল্যান সাজাতে পারা।",
        en: "Synthesize all 10 modules into a practical action plan and prepare for the Intermediate Final Assessment.",
      },
    ],
    lessons: [
      {
        title_bn: "১. জেন্ডারড ডিসইনফরমেশন অডিট: SIFT ম্যানুয়াল পদ্ধতি",
        title_en: "1. Auditing Gendered Disinformation Using the SIFT Manual",
        duration: "15 min",
        body_bn:
          "অনলাইনে নারীদের কণ্ঠস্বর দমাতে প্রায়ই ‘Gendered Disinformation’ ব্যবহৃত হয়—যেমন কোনো ছাত্রী প্রতিনিধি, নারী উদ্যোক্তা বা শিক্ষিকার নামে ভুয়া বক্তব্য বসানো কোট-কার্ড (quote card), প্রেক্ষাপটহীন পুরনো ছবি বা সিন্থেটিক অডিও ছড়িয়ে তার চরিত্রহনন করা।\n\nএসব পোস্ট দেখে সাথে সাথে প্রতিক্রিয়া না দিয়ে ৪-ধাপের ‘SIFT’ পদ্ধতি অনুসরণ করুন: S = Stop (থামুন ও আবেগ নিয়ন্ত্রণ করুন), I = Investigate the source (পোস্ট করা পেজটির আসল পরিচয় ও আগের ইতিহাস দেখুন), F = Find better coverage (অন্তত দুটি প্রতিষ্ঠিত সংবাদমাধ্যম বা অফিশিয়াল পেজে খবরটি আছে কি না খুঁজুন), T = Trace claims back (কোট বা ছবির একদম মূল উৎস খুঁজে বের করুন)।",
        body_en:
          "Gendered disinformation uses fabricated quotes, out-of-context photos, or synthetic rumors to discredit women in campus politics, professions, or public life.\n\nInstead of reacting emotionally, run the 4-step SIFT manual: S — Stop before sharing; I — Investigate who runs the posting page; F — Find better independent coverage across two reliable outlets; T — Trace quotes, images, or statistics back to their original primary source.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ১০.১: ৪-ধাপের SIFT ভেরিফিকেশন",
          framework_title_en: "Manual Protocol 10.1: SIFT Verification Checklist",
          steps_bn: [
            "S (Stop): চমক, রাগ বা আতঙ্ক জাগানো পোস্ট দেখলেই ১০ সেকেন্ড থামুন।",
            "I (Investigate the Source): পেজের ‘Page Transparency’ দেখে কবে খোলা ও কোথা থেকে পরিচালিত দেখুন।",
            "F (Find Better Coverage): গুগল নিউজ বা নির্ভরযোগ্য জাতীয় মাধ্যমে দাবিটি আছে কি না যাচাই করুন।",
            "T (Trace to Original): ভাইরাল কোট-কার্ডটি কি সেই ব্যক্তির অফিশিয়াল পেজ বা আসল সাক্ষাৎকারের সাথে মেলে?",
          ],
          steps_en: [
            "S (Stop): Pause 10 seconds whenever a post triggers sudden anger, fear, or outrage.",
            "I (Investigate Source): Inspect Page Transparency, account age, and past post quality.",
            "F (Find Better Coverage): Check whether at least two credible news outlets or official sources corroborate it.",
            "T (Trace Original): Locate the primary speech, video, or paper before believing an edited quote card.",
          ],
          dos_bn: [
            "কোনো কোট-কার্ড ভুয়া প্রমাণিত হলে সেটি রিশেয়ার না করে বরং প্ল্যাটফর্মে ‘False Information’ রিপোর্ট করুন।",
          ],
          dos_en: [
            "Report confirmed fake quote cards as 'False Information' rather than reposting them.",
          ],
          donts_bn: [
            "‘সত্যি হতেও পারে, তাই সবার সতর্কতার জন্য শেয়ার করলাম’—এই যুক্তিতে অযাচাইকৃত গুজব ছড়াবেন না।",
          ],
          donts_en: [
            "Never share unverified rumors 'just in case'—that amplifies disinformation.",
          ],
        },
        example_bn:
          "বিশ্ববিদ্যালয়ের ছাত্র সংসদ নির্বাচনের আগে এক নারী প্রার্থীর ছবি দিয়ে ভুয়া কোট-কার্ড ছড়ানো হলো। একজন শিক্ষার্থী SIFT ব্যবহার করে দেখল পেজটি মাত্র ৩ দিন আগে খোলা হয়েছে এবং কোনো জাতীয় দৈনিক বা প্রার্থীর অফিশিয়াল পেজে এমন কোনো বক্তব্য নেই। সে কোট-কার্ডটি শেয়ার না করে রিপোর্ট করল।",
        example_en:
          "Before a student election, a fake quote card targeted a woman candidate. Applying SIFT, a classmate spotted the page was created 3 days earlier and found zero corroboration in campus press—reporting the fake card without resharing it.",
      },
      {
        title_bn: "২. শিক্ষা ও ক্যারিয়ারে নৈতিক এবং নিরাপদ AI ব্যবহার",
        title_en: "2. Ethical & Safe AI Co-Creation for Study and Careers",
        duration: "15 min",
        body_bn:
          "AI-যুগে নারীর নিরাপত্তা মানে প্রযুক্তি থেকে দূরে থাকা নয়, বরং আত্মবিশ্বাস ও দক্ষতার সাথে প্রযুক্তিকে কাজে লাগানো। পড়াশোনা, কোডিং, ইংরেজি/বাংলা অনুশীলন বা ছোট ব্যবসার মার্কেটিংয়ে AI অসাধারণ সহায়ক হতে পারে—যদি তিনটি নৈতিক নিয়ম মানা হয়: (১) স্বচ্ছতা ও সততা (ক্লাস অ্যাসাইনমেন্টে AI লেখা হুবহু কপি করে নিজের বলে চালিয়ে না দেওয়া—বরং ধারণা ও ফিডব্যাকের জন্য ব্যবহার করা), (২) মানবীয় যাচাই (চূড়ান্ত লেখা নিজের বোধগম্যতা দিয়ে সম্পাদনা করা), এবং (৩) প্রাইভেসি রক্ষা (কোনো ব্যক্তির ডেটা বা ছবি অনুমতি ছাড়া ব্যবহার না করা)।",
        body_en:
          "Digital empowerment means confidently using AI for education, language growth, and entrepreneurship while staying safe and ethical. Three core principles guide healthy co-creation: (1) Integrity—use AI as a tutor or brainstorming partner rather than submitting unedited AI prose as original academic work; (2) Human Ownership—verify every fact and rewrite in your own voice; and (3) Consent & Privacy—never scrape or alter real people's likenesses without consent.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ১০.২: নৈতিক AI ব্যবহার ফ্রেমওয়ার্ক",
          framework_title_en: "Manual Protocol 10.2: Ethical Co-Creation Checklist",
          steps_bn: [
            "ব্যবহার ১ (Study Tutor): ‘এই কঠিন অধ্যায়টি সহজ উদাহরণসহ বোঝাও’—নিজের শেখা জোরদার করতে ব্যবহার করুন।",
            "ব্যবহার ২ (Skill Feedback): নিজের লেখা ড্রাফটে গ্রামার বা কাঠামো উন্নতির পরামর্শ নিন, হুবহু কপি করবেন না।",
            "ব্যবহার ৩ (Transparency): প্রতিষ্ঠান বা প্রজেক্ট চাইলে কীভাবে AI টুল সহায়তা নিয়েছেন তা স্পষ্ট উল্লেখ করুন।",
          ],
          steps_en: [
            "Use 1 (Tutor): Ask AI to explain hard concepts or quiz your understanding.",
            "Use 2 (Revision Aid): Draft your own work first, then ask for structural or grammar feedback.",
            "Use 3 (Transparency): Follow school or workplace AI-disclosure rules honestly.",
          ],
          dos_bn: [
            "ক্যাম্পাস ক্লাবে মেয়েদের জন্য নিরাপদ AI দক্ষতা (যেমন প্রম্পট ইঞ্জিনিয়ারিং ও প্রাইভেসি) নিয়ে স্টাডি সার্কেল করুন।",
          ],
          dos_en: [
            "Encourage women and girls to build practical AI fluency alongside safety skills.",
          ],
          donts_bn: [
            "কারও ছবি বা কণ্ঠ নিয়ে ‘মজা করার জন্য’ও অনুমতি ছাড়া AI ভিডিও বা ভয়েস ক্লোন বানাবেন না।",
          ],
          donts_en: [
            "Never generate deepfakes or voice clones of peers—even as a 'joke'—without explicit consent.",
          ],
        },
        example_bn:
          "রাজশাহীর একটি কলেজের কয়েকজন ছাত্রী মিলে AI টুল দিয়ে তাদের পড়াশোনার কঠিন বিজ্ঞান টার্মগুলো সহজ বাংলায় বোঝার প্রম্পট টেমপ্লেট বানাল—যেখানে তারা ঠিক করে নিল কোনো ব্যক্তিগত তথ্য প্রম্পটে থাকবে না এবং পরীক্ষার নোট নিজের ভাষায় লিখবে।",
        example_en:
          "College students in Rajshahi built anonymized study prompts to translate dense science concepts into clear Bangla—always keeping personal info out and writing final notes in their own words.",
      },
      {
        title_bn: "৩. আপনার ৬-মাসের Women Safety + AI Literacy কর্মপরিকল্পনা",
        title_en: "3. Building Your 6-Month Safety & AI Literacy Roadmap",
        duration: "15 min",
        body_bn:
          "এই ইন্টারমিডিয়েট কোর্সের ১০টি মডিউল (৭০% Women Safety + ৩০% AI Literacy) শেষ করার পর মূল অর্জন হলো বাস্তবে প্রয়োগযোগ্য একটি দীর্ঘমেয়াদি পরিকল্পনা। আপনি একা learner হোন, স্কুল/কলেজ ক্লাব সদস্য হোন বা শিক্ষক—প্রতি মাসে একটি ছোট টেকনিক্যাল চেক এবং একটি কমিউনিটি বা শেখার পদক্ষেপ ঠিক করলে তা স্থায়ী অভ্যাসে পরিণত হয়।",
        body_en:
          "Completing all 10 Intermediate modules (70% Women Safety + 30% AI Literacy) culminates in a sustainable 6-month roadmap. Whether you are learning independently, leading a college chapter, or mentoring peers, pairing one technical hygiene review with one AI-literacy or awareness action each month builds lasting digital resilience.",
        manual_framework: {
          framework_title_bn: "ম্যানুয়াল প্রোটোকল ১০.৩: ৬-মাসের সমন্বিত রোডম্যাপ",
          framework_title_en: "Manual Protocol 10.3: 6-Month Integrated Roadmap",
          steps_bn: [
            "মাস ১–২: অ্যাকাউন্ট লকডাউন, সেশন অডিট, পরিবারের ভয়েস-কল কোড ওয়ার্ড ও AI প্রম্পট প্রাইভেসি সেট করা।",
            "মাস ৩–৪: EXIF/পারমিশন অডিট, অ্যালগরিদম ফিড রিসেট এবং SIFT ফ্যাক্ট-চেক অনুশীলন।",
            "মাস ৫–৬: সহপাঠী বা পরিবারে একটি ‘নো-ডিসক্লোজার’ নিরাপত্তা সেশন শেয়ার করা এবং রিসোর্স বুকমার্ক আপডেট করা।",
          ],
          steps_en: [
            "Months 1–2: Complete global session audits, set family voice verification codes, and enable AI training opt-outs.",
            "Months 3–4: Run mobile permission/EXIF checks, reset feeds, and practice SIFT fact verification.",
            "Months 5–6: Lead or join a zero-disclosure safety circle and refresh verified support bookmarks.",
          ],
          dos_bn: [
            "ইন্টারমিডিয়েট কোর্সের সবগুলো মডিউল ‘সম্পন্ন’ হিসেবে চিহ্নিত করে চূড়ান্ত মূল্যায়নে অংশ নিন।",
          ],
          dos_en: [
            "Mark all 10 Intermediate modules complete and challenge the Intermediate Final Assessment for certification.",
          ],
          donts_bn: [
            "প্ল্যানটি অন্য কারও চাপে পাবলিক করবেন না—এটি আপনার ব্যক্তিগত বা ক্লাবের নিরাপদ নির্দেশিকা।",
          ],
          donts_en: [
            "Keep personal roadmap notes private; share only aggregate learnings with clubs.",
          ],
        },
        example_bn:
          "ইন্টারমিডিয়েট কোর্স শেষ করে তাসনিম তার কলেজের জুনিয়রদের জন্য ‘AI ও নিরাপত্তা’ বিষয়ে মাসে একটি করে ৩০ মিনিটের ওরিয়েন্টেশন ক্লাব প্ল্যান তৈরি করে, যা সম্পূর্ণ নো-ডিসক্লোজার ও ম্যানুয়াল প্রোটোকল অনুসরণ করে।",
        example_en:
          "After finishing the Intermediate course, Tasnim used the 6-month roadmap to schedule monthly 30-minute zero-disclosure 'AI & Safety' orientations for incoming college students.",
      },
    ],
    activity_bn:
      "ক্যাপস্টোন ম্যানুয়াল অনুশীলন: আপনার ব্যক্তিগত বা ক্লাবের জন্য ৩ ধাপের (মাস ১–২, ৩–৪, ৫–৬) একটি সংক্ষিপ্ত রোডম্যাপ লিখুন এবং এই পাতার অন-পেজ ম্যানুয়াল অংশ থেকে সব ইন্টারমিডিয়েট হ্যান্ডবুক রিভিউ করুন। এরপর ‘সার্টিফিকেট’ পাতায় গিয়ে ইন্টারমিডিয়েট চূড়ান্ত পরীক্ষায় অংশ নিন!",
    activity_en:
      "Capstone Manual Drill: Write a 3-phase (Months 1–2, 3–4, 5–6) safety & AI literacy plan in your private notebook, review the in-page Intermediate handbook sections above, and proceed to the Certificate page for the Intermediate Final Assessment.",
    quiz: [
      {
        question_bn: "SIFT ভেরিফিকেশন পদ্ধতির সঠিক পূর্ণরূপ কোনটি?",
        question_en: "What does the SIFT verification method stand for?",
        options_bn: [
          "Share, Ignore, Forward, Tag",
          "Stop, Investigate the source, Find better coverage, Trace to the original",
          "Save, Install, Filter, Trust",
          "Search, Imitate, Follow, Tell",
        ],
        options_en: [
          "Share, Ignore, Forward, Tag",
          "Stop, Investigate the source, Find better coverage, Trace to the original",
          "Save, Install, Filter, Trust",
          "Search, Imitate, Follow, Tell",
        ],
        answer: 1,
        explanation_bn:
          "SIFT পদ্ধতিতে শেয়ার করার আগে থামতে, উৎস পরীক্ষা করতে, অন্য নির্ভরযোগ্য উৎসে খুঁজতে এবং মূল প্রসঙ্গ ট্রেস করতে হয়।",
        explanation_en:
          "SIFT stands for Stop, Investigate the source, Find better coverage, and Trace claims to their original context.",
      },
      {
        question_bn: "‘Gendered Disinformation’-এর সাধারণ উদ্দেশ্য কী?",
        question_en: "What is the primary goal of gendered disinformation?",
        options_bn: [
          "সঠিক তথ্য ছড়ানো",
          "ভুয়া কোট-কার্ড বা অপপ্রচারের মাধ্যমে নারী নেতৃত্ব, পেশাজীবী বা ছাত্রীদের মর্যাদা ও অংশগ্রহণ নষ্ট করা",
          "ডিভাইস আপডেট করা",
          "ভাষা শেখানো",
        ],
        options_en: [
          "Sharing accurate public data",
          "Using fabricated quotes or rumors to discredit women and discourage public participation",
          "Updating software",
          "Teaching grammar",
        ],
        answer: 1,
        explanation_bn:
          "ভুয়া বক্তব্য বা চরিত্রহননমূলক গুজব ছড়িয়ে জনজীবন ও ডিজিটাল স্পেস থেকে নারীদের দূরে সরানোর চেষ্টা করাই এর লক্ষ্য।",
        explanation_en:
          "Gendered disinformation weaponizes fabricated narratives and stigma to push women out of public spaces.",
      },
      {
        question_bn: "শিক্ষা ও কর্মক্ষেত্রে নৈতিকভাবে AI ব্যবহার করার সঠিক উপায় কোনটি?",
        question_en: "Which describes ethical AI co-creation in school or college work?",
        options_bn: [
          "ব্যক্তিগত ডেটা আপলোড করে হুবহু কপি জমা দেওয়া",
          "ধারণা বোঝা ও রিভিশনের জন্য ব্যবহার করে নিজ ভাষায় লেখা, তথ্য যাচাই ও প্রাইভেসি মানা",
          "বন্ধুর ছবি দিয়ে মজার ডিপফেক বানানো",
          "উৎস যাচাই না করা",
        ],
        options_en: [
          "Uploading private data and submitting unedited AI text as original",
          "Using AI for tutoring/feedback while verifying facts, keeping PII out, and writing in your own voice",
          "Making prank deepfakes of classmates",
          "Skipping fact verification",
        ],
        answer: 1,
        explanation_bn:
          "শেখা, ফিডব্যাক ও বিশ্লেষণের সহকারী হিসেবে AI ব্যবহার করে নিজস্ব চিন্তা ও সত্য যাচাই বজায় রাখাই নৈতিক ব্যবহার।",
        explanation_en:
          "Ethical AI use treats models as learning assistants while maintaining human accountability, accuracy checks, and privacy.",
      },
      {
        question_bn: "কারও সম্মতি ছাড়া ‘মজা করার জন্য’ সহপাঠীর ছবি দিয়ে AI ডিপফেক তৈরি করা কেমন আচরণ?",
        question_en: "How should generating an AI deepfake of a peer 'just as a joke' without consent be treated?",
        options_bn: [
          "স্বাভাবিক রসিকতা",
          "অনুচিত ও ক্ষতিকর—সম্মতি ছাড়া সিন্থেটিক ছবি বা কণ্ঠ তৈরি প্রাইভেসি ও মর্যাদা লঙ্ঘন করে",
          "সৃজনশীল কাজ",
          "বাধ্যতামূলক ক্লাস অ্যাসাইনমেন্ট",
        ],
        options_en: [
          "Harmless humor",
          "Harmful and unacceptable—creating synthetic likenesses without consent violates dignity and safety",
          "A creative hobby",
          "A standard class task",
        ],
        answer: 1,
        explanation_bn:
          "‘মজা’ হলেও সম্মতিবিহীন সিন্থেটিক কনটেন্ট দ্রুত অপমান, ব্ল্যাকমেইল বা স্থায়ী মানসিক ক্ষতির কারণ হতে পারে।",
        explanation_en:
          "Even when labeled a joke, non-consensual synthetic media violates consent and easily escalates into abuse.",
      },
    ],
    summary_bn:
      "Women Safety-র ৭০% ব্যবহারিক প্রোটোকল এবং AI Literacy-র ৩০% কারিগরি বোধগম্যতা একসাথে আপনাকে শুধু নিরাপদ ব্যবহারকারী নয়, বরং সচেতন ডিজিটাল লিডার হিসেবে গড়ে তোলে। SIFT যাচাই, নৈতিক AI ব্যবহার ও ৬-মাসের রোডম্যাপ নিয়ে আপনি এখন ইন্টারমিডিয়েট মূল্যায়নের জন্য প্রস্তুত।",
    summary_en:
      "Combining 70% Women Safety protocols with 30% AI Literacy transforms you from a cautious user into an informed digital leader—equipped with SIFT auditing, ethical AI skills, and a 6-month resilience roadmap.",
    terms: [
      {
        term: "SIFT Method",
        bn: "Stop, Investigate, Find better coverage, Trace—ভুল তথ্য ও গুজব যাচাইয়ের ৪-ধাপের স্ট্যান্ডার্ড পদ্ধতি।",
        en: "A four-step verification protocol: Stop, Investigate the source, Find better coverage, and Trace claims.",
      },
      {
        term: "Gendered Disinformation",
        bn: "জনজীবন বা ডিজিটাল ক্ষেত্রে নারীদের কণ্ঠস্বর ও বিশ্বাসযোগ্যতা নষ্ট করতে ছড়ানো উদ্দেশ্যপ্রণোদিত মিথ্যা ও চরিত্রহননমূলক প্রচারণা।",
        en: "Targeted false narratives leveraging gender tropes to silence or discredit women online.",
      },
      {
        term: "Ethical Co-Creation",
        bn: "প্রাইভেসি, সত্য যাচাই ও স্বচ্ছতা বজায় রেখে শিক্ষা ও সৃজনশীল কাজে AI-এর দায়িত্বশীল ব্যবহার।",
        en: "Responsible collaboration with AI tools that preserves privacy, human accountability, and academic honesty.",
      },
    ],
  },
];
