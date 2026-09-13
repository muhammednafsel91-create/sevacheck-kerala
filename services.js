// ==========================================
// SERVICE DATABASE (10 Core Services)
// ==========================================
const servicesData = [{
    id: "income-certificate",
    name: "Income Certificate",
    malayalamName: "വരുമാന സർട്ടിഫിക്കറ്റ്",
    category: "certificate",
    icon: "💰",
    summary: "Proof of annual family income required for scholarships, fee concessions, and state welfare schemes.",
    whoNeeds: "Students applying for fee reductions or scholarships, and citizens applying for government welfare schemes.",
    eligibility: "Kerala residents requiring proof of annual family income based on Revenue Department assessments.",
    documents: [
      "Aadhaar / Recognized Photo Identity Proof",
      "Ration Card copy",
      "Salary Certificate (for salaried applicants) or Form 16",
      "Land Tax receipt (Thandaper / Karam receipt) if land is owned",
      "Income declaration or self-declaration affidavit"
    ],
    additionalDocs: [
      "Pension payment order copy (for pensioners)",
      "Building tax receipt (if residing in municipality/corporation)"
    ],
    whereToApply: "Online via Kerala e-District portal or in-person at your local Akshaya Centre / Village Office.",
    mode: "Online & Offline",
    steps: [
      "Gather identity proof, ration card, and income proof (salary slip or land tax receipt).",
      "Login to Kerala e-District or visit the nearest Akshaya Centre.",
      "Fill out applicant details and upload scanned copies of documents.",
      "Submit application to the Village Officer.",
      "Track status online using the Application Number. Once approved, download the digitally signed certificate."
    ],
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: "Validity is usually 1 year from the date of issue unless specified otherwise by scheme rules.",
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "residence-certificate",
    name: "Residence Certificate",
    malayalamName: "താമസ സർട്ടിഫിക്കറ്റ്",
    category: "certificate",
    icon: "🏠",
    summary: "Confirms that an applicant currently resides at a specific address in a Kerala local body.",
    whoNeeds: "Individuals needing address validation for banking, utility connections, or local welfare schemes.",
    eligibility: "Any individual actively residing within the jurisdiction of the concerned Local Self Government (Panchayath / Municipality / Corporation) or Village.",
    documents: [
      "Aadhaar / Voter ID / Passport (Identity Proof)",
      "Ration Card or Residential Electricity Bill",
      "Recent Property Tax or Building Tax Receipt",
      "Self-declaration of residence duration"
    ],
    additionalDocs: [
      "Rent agreement or landlord certificate if living in a rented house"
    ],
    whereToApply: "Online through e-District Kerala / Citizen Portal, or local Village Office / Akshaya Centre.",
    mode: "Online & Offline",
    steps: [
      "Collect proof of address and property/rental records.",
      "Submit application via e-District portal or at an Akshaya centre.",
      "Field verification may be conducted by the Village Assistant if necessary.",
      "Download digitally signed certificate upon approval."
    ],
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: "Often distinct from Nativity Certificate; Residence proves current physical address.",
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "nativity-certificate",
    name: "Nativity Certificate",
    malayalamName: "നേറ്റിവിറ്റി സർട്ടിഫിക്കറ്റ്",
    category: "certificate",
    icon: "📍",
    summary: "Certifies that an applicant was born in Kerala or is a permanent native of the state.",
    whoNeeds: "Candidates applying for KEAM, admission to professional colleges, or state government quotas.",
    eligibility: "Persons born in Kerala or children of parents who are natives/permanent residents of Kerala.",
    documents: [
      "Applicant's Birth Certificate or School Transfer Certificate showing birthplace in Kerala",
      "Aadhaar / Recognized ID proof",
      "Ration Card copy",
      "Parent's School Certificate / SSLC showing native place in Kerala (if applicable)"
    ],
    additionalDocs: [
      "Village Officer inquiry report if birth occurred outside hospital"
    ],
    whereToApply: "Kerala e-District Portal or local Village Office / Akshaya Centre.",
    mode: "Online & Offline",
    steps: [
      "Prepare birth records and parent nativity evidence.",
      "Submit the request via e-District or an Akshaya desk.",
      "Tahsidlar / Village Officer verifies lineage and birthplace.",
      "Download digitally signed certificate from the e-District dashboard."
    ],
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: "Essential for state quota admissions like medical and engineering entrance seats.",
    lastVerified: "February 2026",
    verified: true
  },
  {
    id: "community-certificate",
    name: "Community Certificate",
    malayalamName: "കമ്മ്യൂണിറ്റി സർട്ടിഫിക്കറ്റ്",
    category: "certificate",
    icon: "👥",
    summary: "Certifies the specific religion and community of the applicant for educational or social benefits.",
    whoNeeds: "Students or job seekers claiming reservation or community quota benefits.",
    eligibility: "Citizens belonging to designated communities recognized in Kerala state registries.",
    documents: [
      "Aadhaar / Photo Identity Proof",
      "SSLC Book / 10th Certificate showing religion and community of applicant",
      "Parents' SSLC / School certificates showing community",
      "Ration Card"
    ],
    additionalDocs: [
      "Affidavit from community organization head (if requested by Village Officer)"
    ],
    whereToApply: "Kerala e-District Portal or Revenue Village Office.",
    mode: "Online & Offline",
    steps: [
      "Verify that school certificates clearly state the community.",
      "Apply on e-District with scanned copies of SSLC and ID.",
      "Village Officer cross-verifies with parents' records.",
      "Download approved certificate online."
    ],
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: "Distinct from Non-Creamy Layer Certificate; please confirm the exact requirement of the recruiting body.",
    lastVerified: "January 2026",
    verified: true
  },
  {
    id: "birth-certificate",
    name: "Birth Certificate",
    malayalamName: "ജനന സർട്ടിഫിക്കറ്റ്",
    category: "register",
    icon: "👶",
    summary: "Official record of a person's birth registered with the local Registrar of Births and Deaths.",
    whoNeeds: "Newborns, passport applicants, school admissions, and identity proof creation.",
    eligibility: "Any individual whose birth occurred within the geographical limits of a Kerala local body.",
    documents: [
      "Hospital Discharge Summary or Form 1 (Report of Birth)",
      "Parents' Identity Proofs (Aadhaar / Voter ID / Passport)",
      "Marriage Certificate of parents (for child registration)",
      "Consent letter / Application form"
    ],
    additionalDocs: [
      "Late registration order from Revenue Divisional Officer (RDO) if reporting after 1 year"
    ],
    whereToApply: "Sevana Civil Registrations portal (Kerala Local Self Government) or the concerned Grama Panchayath / Municipality / Municipal Corporation.",
    mode: "Online & Offline",
    steps: [
      "Hospitals usually report the birth directly to the Sevana portal.",
      "Visit the Sevana portal or local body to register child's name.",
      "Pay the prescribed nominal fee.",
      "Download or collect the stamped certificate from the local body."
    ],
    officialUrl: "https://cr.lsgkerala.gov.in",
    notes: "Timely registration within 21 days avoids delayed-registration penalty processes.",
    lastVerified: "February 2026",
    verified: true
  },
  {
    id: "marriage-certificate",
    name: "Marriage Certificate",
    malayalamName: "വിവാഹ സർട്ടിഫിക്കറ്റ്",
    category: "register",
    icon: "💍",
    summary: "Formal registration of marriage under the Kerala Common Marriage Rules or Special Marriage Act.",
    whoNeeds: "Couples requiring proof for spouse visa, joint banking, insurance nominee, or name change.",
    eligibility: "Spouses who solemnized marriage in Kerala, or where at least one party resides within the local body jurisdiction.",
    documents: [
      "Memorandum of Marriage (Form 1 under Common Rules)",
      "Age Proof of Bride and Groom (SSLC / Birth Certificate / Passport)",
      "Proof of solemnization (Certificate from religious institution / auditor / priest, or invitation card + photo)",
      "Address proof of both parties in the local jurisdiction",
      "Passport size photographs of bride and groom"
    ],
    additionalDocs: [
      "NOC from embassy if one party is a foreign national",
      "Divorce decree / Death certificate if previously married"
    ],
    whereToApply: "Local Self Government Sevana portal or the local body office where marriage took place.",
    mode: "Online submission followed by physical signing before the Registrar",
    steps: [
      "Submit Form 1 online via Sevana portal with photos and solemnization proofs.",
      "Take the printout of the generated application.",
      "Both spouses appear before the Local Registrar with two witnesses and original IDs.",
      "Sign the official register; certificate is issued post-verification."
    ],
    officialUrl: "https://cr.lsgkerala.gov.in",
    notes: "Physical presence of both bride and groom is mandatory before the registrar.",
    lastVerified: "February 2026",
    verified: true
  },
  {
    id: "caste-certificate",
    name: "Caste Certificate (SC/ST)",
    malayalamName: "ജാതി സർട്ടിഫിക്കറ്റ്",
    category: "certificate",
    icon: "📜",
    summary: "Official certificate confirming Scheduled Caste (SC) or Scheduled Tribe (ST) status.",
    whoNeeds: "Applicants claiming statutory reservation benefits under constitutional provisions in jobs and education.",
    eligibility: "Members of communities specified in the presidential order for the State of Kerala.",
    documents: [
      "Aadhaar / Photo Identity Proof",
      "SSLC Certificate of applicant displaying caste/religion",
      "SSLC / Caste certificate of parents or close paternal relatives",
      "Ration Card copy"
    ],
    additionalDocs: [
      "Kirtads verification report in doubtful or inter-caste cases"
    ],
    whereToApply: "Kerala e-District portal or local Tahsildar / Taluk Office / Akshaya Centre.",
    mode: "Online & Offline",
    steps: [
      "Submit application with lineage evidence via e-District.",
      "Verification is initiated by the Village Officer and forwarded to the Tahsildar.",
      "Once sanctioned by the Taluk administration, the digital certificate is issued."
    ],
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: "Strict scrutiny applies. Providing false caste information is an offense under state law.",
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "driving-licence",
    name: "Driving Licence (Learner's & Regular)",
    malayalamName: "ഡ്രൈവിംഗ് ലൈസൻസ്",
    category: "licence",
    icon: "🚗",
    summary: "Official authorization to operate motor vehicles in India, issued by Kerala Motor Vehicles Department.",
    whoNeeds: "Citizens age 18+ (or 16+ for gearless 50cc two-wheelers) wishing to drive on public roads.",
    eligibility: "Age requirement met, medically fit, and passing the learner's test and driving practical test.",
    documents: [
      "Age Proof (SSLC, Birth Certificate, or Passport)",
      "Address Proof (Aadhaar, Voter ID, or Rental Agreement)",
      "Medical Fitness Certificate (Form 1A signed by a registered doctor)",
      "Passport size photographs",
      "Existing Learner's Licence (for regular DL test)"
    ],
    additionalDocs: [
      "Form 5 from authorized driving school (for commercial transport categories)"
    ],
    whereToApply: "Parivahan Sarathi Portal (Central MVD system used by Kerala) or Sub-RTO office.",
    mode: "Online application + In-person test at RTO ground",
    steps: [
      "Apply for Learner's Licence (LL) on Parivahan portal and pass online theory test.",
      "Hold LL for mandatory minimum period (usually 30 days).",
      "Book practical driving slot on Parivahan.",
      "Attend ground test (H/8 track and road test) at the designated RTO ground.",
      "Licence is dispatched by post or made available in Digilocker upon passing."
    ],
    officialUrl: "https://sarathi.parivahan.gov.in",
    notes: "Slot availability varies by Sub-RTO. Book tests in advance.",
    lastVerified: "February 2026",
    verified: true
  },
  {
    id: "passport",
    name: "Passport (Fresh / Re-issue)",
    malayalamName: "പാസ്‌പോർട്ട്",
    category: "id",
    icon: "✈️",
    summary: "Official travel document issued by the Ministry of External Affairs, Government of India.",
    whoNeeds: "Indian citizens travelling abroad for education, employment, pilgrimage, or tourism.",
    eligibility: "Indian citizens with no prohibitive criminal record or travel ban proceedings.",
    documents: [
      "Proof of Date of Birth (Birth Certificate, Transfer Certificate, or SSLC)",
      "Photo ID and Address Proof (Aadhaar / Voter ID / Bank Passbook with photo)",
      "Educational Proof for Non-ECR status (10th standard SSLC or higher degree certificate)"
    ],
    additionalDocs: [
      "Old passport booklet in case of re-issue or renewal",
      "Marriage certificate or divorce decree (if applicable)"
    ],
    whereToApply: "Passport Seva Portal online, followed by in-person appointment at Passport Seva Kendra (PSK) or Post Office PSK (POPSK) in Kerala.",
    mode: "Online appointment booking + Mandatory physical verification at PSK",
    steps: [
      "Register and fill application on the official Passport Seva portal.",
      "Pay the official fee online and schedule appointment at nearest PSK (e.g., Kochi, Kozhikode, Thiruvananthapuram, Malappuram).",
      "Visit PSK with original documents for biometric capture and document verification.",
      "Local police verification takes place at your registered address.",
      "Passport is delivered via India Post Speed Post."
    ],
    officialUrl: "https://www.passportindia.gov.in",
    notes: "Beware of unofficial middleman websites charging fees for simple appointments. Only use passportindia.gov.in.",
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "pan-card",
    name: "PAN Card (Permanent Account Number)",
    malayalamName: "പാൻ കാർഡ്",
    category: "id",
    icon: "💳",
    summary: "10-character alphanumeric identity for tax tracking, banking, and financial transactions.",
    whoNeeds: "Taxpayers, individuals opening regular bank accounts, investors, and business operators.",
    eligibility: "All Indian citizens (including minors through guardian representation).",
    documents: [
      "Proof of Identity (Aadhaar, Voter ID, or Passport)",
      "Proof of Address (Aadhaar, utility bill, or bank statement)",
      "Proof of Date of Birth (Birth certificate, SSLC, or Aadhaar)"
    ],
    additionalDocs: [
      "Representative assessee documents in case of minor applicants"
    ],
    whereToApply: "Protean (formerly NSDL) / UTIITSL portals or via Aadhaar e-KYC instant PAN on Income Tax portal.",
    mode: "100% Online or via authorized TIN-FC centers",
    steps: [
      "Apply online via Protean or UTIITSL, or choose 'Instant e-PAN' on the Income Tax e-filing portal.",
      "Submit identity details via OTP e-sign or physical document dispatch.",
      "Pay nominal government processing fee (free for instant e-PAN).",
      "Digital e-PAN is delivered to email, physical card delivered to postal address."
    ],
    officialUrl: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
    notes: "Aadhaar linking is mandatory under current tax guidelines.",
    lastVerified: "March 2026",
    verified: true
  }
];
