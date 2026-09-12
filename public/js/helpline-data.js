// Shared data for the Helplines list, the category pages, and the detail
// page. Keeping it in one place means the pages never drift apart.
window.HELPLINE_CATEGORIES = {
  "domestic-violence": "Domestic violence / abuse at home",
  "harassment": "Harassment (in person)",
  "cyber-harassment": "Online / cyber harassment",
  "womens-rights": "General women's rights support",
  "emergency": "Immediate emergency"
};

window.HELPLINE_DATA = {
  "bedari": {
    category: "domestic-violence",
    name: "Bedari Helpline",
    phone: "0300-5251717",
    hint: "Domestic violence, sexual harassment, forced/early marriage",
    description: "Bedari is an Islamabad-based organisation working on gender-based violence prevention. Their helpline offers guidance, counseling, and referrals for women and girls facing violence at home, and can help with next steps like legal aid or shelter.",
    mapQuery: "Bedari NGO Islamabad"
  },
  "national-dv": {
    category: "domestic-violence",
    name: "National Domestic Violence Helpline",
    phone: "1121",
    hint: "Toll-free, nationwide, 24/7",
    description: "A government-run national helpline — reachable from anywhere in Pakistan, any time, free of charge. Good first call if you're not sure who else to contact."
  },
  "madadgar": {
    category: "harassment",
    name: "Madadgar",
    phone: "1098 or 111-911-922",
    hint: "Helpline for women and children",
    description: "A national helpline for women and children in distress, offering guidance on legal options, police assistance, and referral to support services across Pakistan."
  },
  "rozan": {
    category: "harassment",
    name: "ROZAN Helpline",
    phone: "0800-22444",
    hint: "Toll-free, Mon–Sat 10am–6pm · in-person: 051-2890505-7",
    description: "ROZAN is an Islamabad-based organisation offering free, confidential counseling for violence, abuse, and emotional distress, over the phone or in person at their center.",
    mapQuery: "Rozan Islamabad"
  },
  "drf-cyber": {
    category: "cyber-harassment",
    name: "Digital Rights Foundation Cyber Harassment Helpline",
    phone: "0800-39393",
    hint: "Toll-free, 7 days, 9am–5pm",
    description: "Pakistan's first dedicated cyber-harassment helpline, run by the Digital Rights Foundation (based in Lahore). Offers free legal advice, digital security guidance, and psychological counseling for online abuse, blackmail, and harassment.",
    mapQuery: "Digital Rights Foundation Lahore"
  },
  "nccia": {
    category: "cyber-harassment",
    name: "NCCIA",
    link: { href: "https://complaint.nccia.gov.pk", label: "complaint.nccia.gov.pk ↗" },
    hint: "Pakistan's official cyber crime agency",
    description: "The National Cyber Crime Investigation Agency handles formal complaints about online harassment, blackmail, and cyber crime. File a complaint through their online portal — they have regional offices across major Pakistani cities."
  },
  "aurat-foundation": {
    category: "womens-rights",
    name: "Aurat Foundation",
    phone: "0800-22266",
    hint: "Toll-free · offices in Karachi, Lahore, Islamabad, Peshawar, Quetta, Faisalabad",
    description: "One of Pakistan's oldest women's rights organisations, working on legal aid, policy advocacy, and community outreach nationwide.",
    mapQuery: "Aurat Foundation Pakistan"
  },
  "police": {
    category: "emergency",
    name: "Police",
    phone: "15",
    description: "Call for any immediate safety threat or crime in progress. Free, nationwide."
  },
  "rescue-1122": {
    category: "emergency",
    name: "Rescue Service",
    phone: "1122",
    description: "Emergency response for accidents, medical crises, and rescue situations. Free, nationwide."
  },
  "edhi-ambulance": {
    category: "emergency",
    name: "Edhi Ambulance",
    phone: "115",
    description: "Free ambulance service run by the Edhi Foundation, available across most of Pakistan."
  }
};
