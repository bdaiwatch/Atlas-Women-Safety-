export type FinalExamQuestion = {
  id: string;
  question: string;
  options: readonly string[];
  answer: number;
};

export type FinalWrittenQuestion = {
  id: string;
  question: string;
  prompt: string;
};

export const FINAL_EXAM_PASS_PERCENT = 70;

export const finalExamQuestions: readonly FinalExamQuestion[] = [
  { id: "q01", question: "গুরুত্বপূর্ণ account সুরক্ষিত রাখার ভালো পদ্ধতি কোনটি?", options: ["সব account-এ একই ছোট password ব্যবহার করা", "আলাদা দীর্ঘ password ব্যবহার করে 2FA চালু করা", "বন্ধুকে password বলা", "অচেনা link-এ click করা"], answer: 1 },
  { id: "q02", question: "OTP কার সঙ্গে ভাগ করা উচিত?", options: ["কেউ না", "শুধু online friend-এর সঙ্গে", "যে message পাঠিয়েছে তার সঙ্গে", "সবাইকে সতর্ক করতে"], answer: 0 },
  { id: "q03", question: "Phishing message-এর সাধারণ লক্ষণ কোনটি?", options: ["শান্তভাবে তথ্য যাচাই করার সুযোগ", "তাড়াহুড়ো করে code বা টাকা চাওয়া", "পরিচিত বইয়ের তালিকা", "offline class notice"], answer: 1 },
  { id: "q04", question: "অপরিচিত public Wi-Fi ব্যবহার করার সময় কী করবেন?", options: ["সব sensitive account-এ login করবেন", "password লিখে network-এ save করবেন", "বিশ্বাসযোগ্যতা যাচাই না করে sensitive কাজ এড়াবেন", "OTP প্রকাশ করবেন"], answer: 2 },
  { id: "q05", question: "Privacy setting-এর উদ্দেশ্য কী?", options: ["কে আপনার তথ্য দেখতে বা যোগাযোগ করতে পারবে তা নিয়ন্ত্রণ করা", "সব তথ্য সবার কাছে প্রকাশ করা", "সব account বন্ধ করা", "প্রতিটি message forward করা"], answer: 0 },
  { id: "q06", question: "কেউ online-এ হুমকি দিলে প্রথম অগ্রাধিকার কী?", options: ["তর্কে জেতা", "তাৎক্ষণিক নিরাপত্তা", "হুমকিটি share করে ছড়ানো", "একা দেখা করতে যাওয়া"], answer: 1 },
  { id: "q07", question: "Location sharing কখন review করা দরকার?", options: ["শুধু নতুন phone কিনলে", "যখনই privacy বা নিরাপত্তা নিয়ে প্রশ্ন থাকে", "কখনো নয়", "শুধু stranger চাইলে"], answer: 1 },
  { id: "q08", question: "কেউ private ছবি share করতে সম্মতি দিলেই কি তা public করা যায়?", options: ["হ্যাঁ", "শুধু group-এ", "না, নির্দিষ্ট সম্মতি ছাড়া নয়", "শুধু anonymous account-এ"], answer: 2 },
  { id: "q09", question: "Deepfake কী?", options: ["শুধু পুরোনো ছবি", "AI দিয়ে তৈরি বা বদলানো বাস্তবসম্মত media", "শুধু text message", "একটি password"], answer: 1 },
  { id: "q10", question: "চমকপ্রদ video দেখে প্রথমে কী করা ভালো?", options: ["সঙ্গে সঙ্গে forward করা", "pause করে claim ও source যাচাই করা", "অচেনা account-কে টাকা পাঠানো", "সব video সত্য ধরে নেওয়া"], answer: 1 },
  { id: "q11", question: "AI chatbot-কে কোন তথ্য না দেওয়াই নিরাপদ?", options: ["সাধারণ public topic", "password, identity document বা intimate image", "প্রকাশিত বইয়ের নাম", "সাধারণ weather question"], answer: 1 },
  { id: "q12", question: "AI-generated content ক্ষতিকর হলে কী করবেন?", options: ["আরও ছড়াবেন", "নিরাপদে report করবেন এবং trusted support নেবেন", "লক্ষ্যবস্তু ব্যক্তিকে দোষ দেবেন", "নিজে তদন্ত করতে যাবেন"], answer: 1 },
  { id: "q13", question: "Online stalking বলতে কী বোঝায়?", options: ["একবার public post দেখা", "বারবার monitor, contact বা track করে চাপ সৃষ্টি করা", "বন্ধুর post পড়া", "একটি class notice"], answer: 1 },
  { id: "q14", question: "Impersonation হলে কোন পদক্ষেপটি সহায়ক?", options: ["ভুয়া account-টি share করা", "profile link নিরাপদে রেখে report করা", "password প্রকাশ করা", "অপরিচিত ব্যক্তির সঙ্গে দেখা করা"], answer: 1 },
  { id: "q15", question: "Coordinated attack-এর সময় কোনটি ক্ষতি কমাতে পারে?", options: ["সব comment পড়ে সঙ্গে সঙ্গে reply করা", "notifications pause করে trusted support নেওয়া", "অভিযোগটি আবার repost করা", "target-কে দোষ দেওয়া"], answer: 1 },
  { id: "q16", question: "Bystander হিসেবে ক্ষতিকর image দেখলে কী করবেন?", options: ["warning দিয়ে হলেও forward করবেন", "download করে রাখবেন", "না ছড়িয়ে moderator-কে নিরাপদে জানাবেন", "target-এর পরিচয় খুঁজবেন"], answer: 2 },
  { id: "q17", question: "Sextortion বা blackmail-এর ক্ষেত্রে কোনটি করা উচিত নয়?", options: ["বিশ্বস্ত ব্যক্তিকে জানানো", "নিরাপদে তথ্য সংরক্ষণ", "চাপের কারণে আরও ছবি বা টাকা পাঠানো", "platform report ব্যবহার"], answer: 2 },
  { id: "q18", question: "Digital consent কেমন হওয়া উচিত?", options: ["একবার দিলে সব ব্যবহারের অনুমতি", "নির্দিষ্ট, বোঝাপড়াভিত্তিক এবং পরিবর্তনযোগ্য", "চুপ থাকা মানেই সম্মতি", "বন্ধুত্ব মানেই সম্মতি"], answer: 1 },
  { id: "q19", question: "ভুল তথ্য যাচাইয়ের প্রথম ধাপ কী?", options: ["শিরোনাম দেখে share করা", "দাবিটি স্পষ্ট করে original source খোঁজা", "রাগের comment লেখা", "শুধু logo দেখে বিশ্বাস করা"], answer: 1 },
  { id: "q20", question: "একটি claim যাচাই করতে কী সহায়ক?", options: ["একটি অচেনা forward", "দুই বা ততোধিক নির্ভরযোগ্য independent source", "শুধু বন্ধুর অনুমান", "শুধু video-এর music"], answer: 1 },
  { id: "q21", question: "Algorithmic bias কী করতে পারে?", options: ["সব সিদ্ধান্ত নিখুঁত করা", "কিছু মানুষ বা গোষ্ঠীর প্রতি অন্যায্য ফল তৈরি করা", "password শক্তিশালী করা", "device charge করা"], answer: 1 },
  { id: "q22", question: "Digital privacy রক্ষায় data minimisation বলতে কী বোঝায়?", options: ["প্রয়োজনের চেয়ে বেশি তথ্য না দেওয়া", "সব তথ্য public করা", "সব app-কে সব permission দেওয়া", "একই password ব্যবহার"], answer: 0 },
  { id: "q23", question: "Shared device ব্যবহার শেষে কী করবেন?", options: ["password save করবেন", "account থেকে sign out করবেন", "open tab রেখে যাবেন", "private file download করে রাখবেন"], answer: 1 },
  { id: "q24", question: "Private browsing কী নিশ্চয়তা দেয় না?", options: ["browser history কম দৃশ্যমান হতে পারে", "সব network বা device monitor-এর কাছ থেকে সম্পূর্ণ অদৃশ্য থাকা", "কিছু local history না রাখা", "সাধারণ browsing করা"], answer: 1 },
  { id: "q25", question: "Evidence log-এ কী রাখা উচিত?", options: ["password", "শুধু নিরাপদ ও প্রয়োজনীয় facts, date এবং URL", "ক্ষতিকর image-এর copy", "অভিযোগের অনুমান"], answer: 1 },
  { id: "q26", question: "Evidence সংগ্রহের আগে কোন বিষয়টি ভাববেন?", options: ["এতে ঝুঁকি বাড়বে কি না", "কীভাবে post viral করা যায়", "কাকে publicly shame করা যায়", "কীভাবে password share করা যায়"], answer: 0 },
  { id: "q27", question: "Report করার সময় কোন source বেশি নির্ভরযোগ্য?", options: ["পুরোনো anonymous post", "বর্তমান official platform বা সরকারি source", "অচেনা forwarded message", "গুজব"], answer: 1 },
  { id: "q28", question: "কেউ সাহায্য চাইলে supportive response কোনটি?", options: ["দোষ দেওয়া", "জোর করে confrontation করানো", "শোনা, বিশ্বাস করা এবং তার পছন্দকে সম্মান করা", "তার অনুমতি ছাড়া post করা"], answer: 2 },
  { id: "q29", question: "Personal safety plan-এ কী থাকতে পারে?", options: ["বিশ্বস্ত contact, নিরাপদ জায়গা ও check-in plan", "অচেনা ব্যক্তির সঙ্গে একা দেখা", "সব তথ্য public করা", "শুধু একটি password"], answer: 0 },
  { id: "q30", question: "তাৎক্ষণিক physical danger হলে কোনটি আগে করবেন?", options: ["website-এ reply-এর অপেক্ষা", "নিরাপদ জায়গায় গিয়ে trusted person বা উপযুক্ত emergency support নেওয়া", "হুমকিদাতার সঙ্গে একা দেখা", "কনটেন্ট repost করা"], answer: 1 },
];

export const finalWrittenQuestions: readonly FinalWrittenQuestion[] = [
  { id: "w01", question: "একটি phishing message চিনে আপনি কীভাবে নিরাপদে যাচাই করবেন?", prompt: "কমপক্ষে ২টি ধাপ লিখুন।" },
  { id: "w02", question: "Deepfake বা পরিবর্তিত ছবি ছড়িয়ে পড়লে target ব্যক্তিকে সহায়তা করার ২টি উপায় লিখুন।", prompt: "নিরাপত্তা, privacy ও report-এর কথা ভাবুন।" },
  { id: "w03", question: "নিজের একটি account নিরাপদ করার জন্য আপনি কোন ৩টি কাজ করবেন?", prompt: "Password, 2FA, privacy বা session review থেকে বেছে নিন।" },
  { id: "w04", question: "Online harassment-এর ক্ষেত্রে evidence রাখার সময় কোন safety boundary মানবেন?", prompt: "কী রাখবেন এবং কী share করবেন না—লিখুন।" },
  { id: "w05", question: "আপনার জন্য একটি ছোট personal safety plan-এর ৩টি অংশ লিখুন।", prompt: "Trusted person, safe place, check-in বা emergency support বিবেচনা করুন।" },
];
