export type EmergencyContact = {
  name: string;
  localName: string;
  number?: string;
  email?: string;
  type: string;
  description: string;
  hours: string;
  source: string;
  sourceLabel: string;
  verifiedOn: string;
};

export const emergencyContacts: EmergencyContact[] = [
  { name: "National Emergency Service", localName: "জাতীয় জরুরি সেবা", number: "999", type: "Immediate emergency", description: "Police, fire and ambulance emergency assistance.", hours: "As published: emergency service", source: "https://www.police.gov.bd/en/hot_line_number", sourceLabel: "Bangladesh Police hotline list", verifiedOn: "06 Nov 2026" },
  { name: "Women and Children Helpline", localName: "নারী ও শিশু নির্যাতন", number: "109", type: "Women and child protection", description: "Support and guidance for violence against women and children.", hours: "Operating hours not stated on source page", source: "https://www.police.gov.bd/en/hot_line_number", sourceLabel: "Bangladesh Police hotline list", verifiedOn: "06 Nov 2026" },
  { name: "Child Helpline", localName: "শিশু সহায়তা", number: "1098", type: "Child protection", description: "Child-focused support and protection referral.", hours: "Operating hours not stated on source page", source: "https://www.police.gov.bd/en/hot_line_number", sourceLabel: "Bangladesh Police hotline list", verifiedOn: "06 Nov 2026" },
  { name: "Government Legal Aid", localName: "সরকারী আইন সেবা", number: "16430", type: "Legal information and aid", description: "Government legal service hotline listed by Bangladesh Police.", hours: "Operating hours not stated on source page", source: "https://www.police.gov.bd/en/hot_line_number", sourceLabel: "Bangladesh Police hotline list", verifiedOn: "06 Nov 2026" },
  { name: "Police Cyber Support for Women (PCSW)", localName: "নারীদের জন্য পুলিশ সাইবার সহায়তা", number: "01320000888", email: "cybersupport.women@police.gov.bd", type: "Cybercrime support for women", description: "Bangladesh Police service offering legal and technological assistance for women facing cybercrime.", hours: "Operating hours not stated on source page", source: "https://www.police.gov.bd/en/police_cyber_support_for_women", sourceLabel: "Bangladesh Police — PCSW", verifiedOn: "06 Nov 2026" },
];

export type SupportEntry = {
  id: string;
  name: string;
  category: string;
  division: string;
  mode: "Online" | "In-person";
  languages: string;
  status: "Verified" | "Sample — pending verification";
  description: string;
  note: string;
};

export const supportEntries: SupportEntry[] = [
  { id: "pcsw", name: "Police Cyber Support for Women (PCSW)", category: "Cybercrime support", division: "National", mode: "Online", languages: "Bangla, English", status: "Verified", description: "Official Bangladesh Police support for women facing cybercrime.", note: "Official source checked 06 Nov 2026." },
  { id: "legal-aid", name: "Government Legal Aid", category: "Legal aid", division: "National", mode: "Online", languages: "Bangla", status: "Verified", description: "Government legal service hotline listed by Bangladesh Police.", note: "Official hotline source checked 06 Nov 2026." },
  { id: "sample-counselling", name: "Sample counselling provider", category: "Psychological support", division: "Dhaka", mode: "In-person", languages: "Bangla, English", status: "Sample — pending verification", description: "Illustrative record showing the directory experience without presenting an unverified provider as real.", note: "Sample only. Not a referral partner. Do not rely on this entry." },
  { id: "sample-rights", name: "Sample digital rights organisation", category: "Digital rights and privacy", division: "National", mode: "Online", languages: "Bangla, English", status: "Sample — pending verification", description: "Illustrative record for future source-backed directory ingestion.", note: "Sample only. Verification and contact details are intentionally omitted." },
];

export const resourceTopics = [
  ["AI-enabled abuse", "AI ব্যবহার করে হয়রানি ও অপব্যবহার চিনে নিন"],
  ["Deepfake awareness", "ডিপফেক সম্পর্কে সচেতনতা"],
  ["Digital privacy", "ডিজিটাল গোপনীয়তা ও ব্যক্তিগত তথ্য"],
  ["Evidence preservation", "প্রমাণ নিরাপদে সংরক্ষণ"],
  ["Safe reporting", "নিরাপদে রিপোর্ট করার ধাপ"],
  ["Digital consent", "ডিজিটাল সম্মতি বুঝুন"],
  ["Account security", "অ্যাকাউন্ট সুরক্ষিত রাখুন"],
  ["Phishing and social engineering", "ফিশিং ও সামাজিক প্রকৌশল"],
  ["Bangladesh women's digital rights", "বাংলাদেশে নারীর ডিজিটাল অধিকার"],
];
