// ==========================================
// SEVACHECK KERALA — SERVICE DATABASE (50 SERVICES)
// File: services.js
// ==========================================

const servicesData = [
  // =========================================================================
  // CATEGORY A: Documents & Certificates (documents)
  // =========================================================================
  {
    id: "income-certificate",
    category: "documents",
    icon: "💰",
    name: {
      en: "Income Certificate",
      ml: "വരുമാന സർട്ടിഫിക്കറ്റ്"
    },
    summary: {
      en: "Proof of annual family income required for scholarships, fee concessions, and state welfare schemes.",
      ml: "സ്കോളർഷിപ്പുകൾ, ഫീസ് ഇളവുകൾ, മറ്റ് സർക്കാർ ക്ഷേമ പദ്ധതികൾ എന്നിവയ്ക്കായി വാർഷിക കുടുംബ വരുമാനം സാക്ഷ്യപ്പെടുത്തുന്ന രേഖ."
    },
    whoNeeds: {
      en: "Students applying for fee reductions or scholarships, and citizens applying for government welfare schemes.",
      ml: "വിദ്യാഭ്യാസ ആനുകൂല്യങ്ങൾ, സ്കോളർഷിപ്പുകൾ, സർക്കാർ ക്ഷേമ പദ്ധതികൾ എന്നിവയ്ക്ക് അപേക്ഷിക്കുന്നവർ."
    },
    eligibility: {
      en: "Permanent residents of Kerala requiring proof of annual family income assessed by the Revenue Department.",
      ml: "കേരളത്തിൽ സ്ഥിരതാമസക്കാരായ, റവന്യൂ വകുപ്പിന്റെ വരുമാന മാനദണ്ഡങ്ങൾ ആവശ്യമുള്ള വ്യക്തികൾ."
    },
    documents: {
      en: [
        "Aadhaar / Recognized Photo Identity Proof",
        "Ration Card copy",
        "Salary Certificate (for salaried employees) or Form 16",
        "Land Tax receipt (Thandaper / Karam receipt) if land is owned",
        "Self-declaration affidavit of family income"
      ],
      ml: [
        "ആധാർ അല്ലെങ്കിൽ അംഗീകൃത തിരിച്ചറിയൽ രേഖ",
        "റേഷൻ കാർഡ് പകർപ്പ്",
        "ശമ്പള സർട്ടിഫിക്കറ്റ് (ഉദ്യോഗസ്ഥർക്ക്) അല്ലെങ്കിൽ ഫോം 16",
        "ഭൂനികുതി രസീത് (സ്ഥലമുണ്ടെങ്കിൽ)",
        "കുടുംബ വരുമാനം സംബന്ധിച്ച സത്യവാങ്മൂലം"
      ]
    },
    additionalDocs: {
      en: [
        "Pension payment order copy (for pensioners)",
        "Building tax receipt (if residing within municipality/corporation)"
      ],
      ml: [
        "പെൻഷൻ പേയ്മെന്റ് ഓർഡർ (പെൻഷൻകാർക്ക്)",
        "കെട്ടിട നികുതി രസീത് (നഗരസഭാ പരിധിയിലാണെങ്കിൽ)"
      ]
    },
    whereToApply: {
      en: "Online via Kerala e-District portal or in-person at your local Akshaya Centre / Village Office.",
      ml: "കേരള ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴി ഓൺലൈനായോ, അക്ഷയ കേന്ദ്രം / വില്ലേജ് ഓഫീസ് വഴിയോ അപേക്ഷിക്കാം."
    },
    mode: {
      en: "Online & Offline",
      ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
    },
    steps: {
      en: [
        "Gather identity proof, ration card, and income proof (salary slip or land tax receipt).",
        "Log in to Kerala e-District or visit the nearest Akshaya Centre.",
        "Fill out applicant details and upload scanned copies of documents.",
        "Submit application for Revenue Village Officer scrutiny.",
        "Track status online using the Application Number; download the certificate upon approval."
      ],
      ml: [
        "തിരിച്ചറിയൽ രേഖ, റേഷൻ കാർഡ്, വരുമാന രേഖകൾ എന്നിവ തയ്യാറാക്കുക.",
        "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴിയോ അക്ഷയ കേന്ദ്രം വഴിയോ അപേക്ഷ സമർപ്പിക്കുക.",
        "വില്ലേജ് ഓഫീസറുടെ പരിശോധനയ്ക്ക് ശേഷം അപേക്ഷ അംഗീകരിക്കപ്പെടും.",
        "അപേക്ഷാ നമ്പർ ഉപയോഗിച്ച് സ്റ്റാറ്റസ് പരിശോധിച്ച് സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യുക."
      ]
    },
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: {
      en: "Validity is usually 1 year from the date of issue unless specified otherwise by scheme rules.",
      ml: "പൊതുവെ സർട്ടിഫിക്കറ്റിന്റെ കാലാവധി ഇഷ്യൂ ചെയ്ത തീയതി മുതൽ 1 വർഷമാണ്."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "residence-certificate",
    category: "documents",
    icon: "🏠",
    name: {
      en: "Residence Certificate",
      ml: "താമസ സർട്ടിഫിക്കറ്റ്"
    },
    summary: {
      en: "Confirms that an applicant currently resides at a specific address in a Kerala local body.",
      ml: "ഒരു വ്യക്തി നിശ്ചിത വില്ലേജിൽ അല്ലെങ്കിൽ തദ്ദേശ സ്ഥാപന പരിധിയിൽ താമസിക്കുന്നു എന്ന് സാക്ഷ്യപ്പെടുത്തുന്ന രേഖ."
    },
    whoNeeds: {
      en: "Individuals needing address validation for banking, utility connections, or local welfare schemes.",
      ml: "ബാങ്ക് അക്കൗണ്ട്, വൈദ്യുതി/കുടിവെള്ള കണക്ഷൻ, പ്രാദേശിക ആനുകൂല്യങ്ങൾ എന്നിവയ്ക്കായി താമസസ്ഥലം തെളിയിക്കേണ്ടവർ."
    },
    eligibility: {
      en: "Any individual actively residing within the jurisdiction of the concerned local body or village.",
      ml: "നിശ്ചിത തദ്ദേശ സ്ഥാപന / വില്ലേജ് പരിധിയിൽ സ്ഥിരമായോ നിലവിലോ താമസിക്കുന്ന ഏതൊരു പൗരനും."
    },
    documents: {
      en: [
        "Aadhaar / Voter ID / Passport (Identity Proof)",
        "Ration Card or Residential Electricity Bill",
        "Recent Property Tax or Building Tax Receipt",
        "Self-declaration of residence duration"
      ],
      ml: [
        "ആധാർ / വോട്ടർ ഐഡി / പാസ്‌പോർട്ട്",
        "റേഷൻ കാർഡ് അല്ലെങ്കിൽ വൈദ്യുതി ബിൽ",
        "കെട്ടിട നികുതി രസീത്",
        "താമസ കാലാവധി വ്യക്തമാക്കുന്ന സ്വയം സാക്ഷ്യപ്പെടുത്തൽ"
      ]
    },
    additionalDocs: {
      en: [
        "Rent agreement or landlord certificate if living in a rented house"
      ],
      ml: [
        "വാടകവീട്ടിലാണ് താമസിക്കുന്നതെങ്കിൽ വാടകക്കരാർ / ഉടമയുടെ സമ്മതപത്രം"
      ]
    },
    whereToApply: {
      en: "Kerala e-District Portal, Citizen Portal, or local Village Office / Akshaya Centre.",
      ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ, അക്ഷയ കേന്ദ്രം അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ്."
    },
    mode: {
      en: "Online & Offline",
      ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
    },
    steps: {
      en: [
        "Collect address and property/rental records.",
        "Submit application via e-District portal or at an Akshaya desk.",
        "Field verification may be conducted by the Village Assistant if necessary.",
        "Download the digitally signed certificate upon approval."
      ],
      ml: [
        "മേൽവിലാസം തെളിയിക്കുന്ന രേഖകൾ സഹിതം അപേക്ഷ തയ്യാറാക്കുക.",
        "ഇ-ഡിസ്ട്രിക്റ്റ് വഴിയോ അക്ഷയ കേന്ദ്രം വഴിയോ വില്ലേജ് ഓഫീസിലേക്ക് അയക്കുക.",
        "വില്ലേജ് ഉദ്യോഗസ്ഥരുടെ പരിശോധനയ്ക്ക് ശേഷം സർട്ടിഫിക്കറ്റ് ലഭ്യമാകും."
      ]
    },
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: {
      en: "Distinct from Nativity Certificate; Residence validates current physical dwelling.",
      ml: "നേറ്റിവിറ്റി സർട്ടിഫിക്കറ്റിൽ നിന്ന് വ്യത്യസ്തമാണ് ഇത്; നിലവിലെ താമസസ്ഥലമാണ് ഇതിൽ വ്യക്തമാക്കുന്നത്."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "nativity-certificate",
    category: "documents",
    icon: "📍",
    name: {
      en: "Nativity Certificate",
      ml: "നേറ്റിവിറ്റി സർട്ടിഫിക്കറ്റ്"
    },
    summary: {
      en: "Certifies that an applicant was born in Kerala or is a permanent native of the state.",
      ml: "അപേക്ഷകൻ കേരളത്തിൽ ജനിച്ച ആളാണെന്നോ അല്ലെങ്കിൽ കേരളീയനാണെന്നോ സാക്ഷ്യപ്പെടുത്തുന്ന രേഖ."
    },
    whoNeeds: {
      en: "Candidates applying for KEAM, admission to state professional colleges, or state quota benefits.",
      ml: "KEAM, മറ്റ് പ്രവേശന പരീക്ഷകൾ, കേരളത്തിലെ വിദ്യാഭ്യാസ/തൊഴിൽ ക്വാട്ട എന്നിവയ്ക്ക് അപേക്ഷിക്കുന്നവർ."
    },
    eligibility: {
      en: "Persons born in Kerala or children of parents who are permanent natives of Kerala.",
      ml: "കേരളത്തിൽ ജനിച്ചവർ അല്ലെങ്കിൽ മാതാപിതാക്കൾ കേരളീയരായ വ്യക്തികൾ."
    },
    documents: {
      en: [
        "Birth Certificate or School Transfer Certificate showing birthplace in Kerala",
        "Aadhaar / Recognized Photo ID",
        "Ration Card copy",
        "Parent's School Certificate / SSLC showing native place in Kerala"
      ],
      ml: [
        "കേരളത്തിൽ ജനിച്ചുവെന്ന് കാണിക്കുന്ന ജനന സർട്ടിഫിക്കറ്റ് അല്ലെങ്കിൽ ടി.സി (SSLC)",
        "ആധാർ / തിരിച്ചറിയൽ കാർഡ്",
        "റേഷൻ കാർഡ് പകർപ്പ്",
        "മാതാപിതാക്കളുടെ എസ്.എസ്.എൽ.സി / സ്കൂൾ സർട്ടിഫിക്കറ്റ്"
      ]
    },
    additionalDocs: {
      en: [
        "Village Officer inquiry report if birth was not institutional"
      ],
      ml: [
        "ജനനം ആശുപത്രിയിലല്ല നടന്നതെങ്കിൽ വില്ലേജ് ഓഫീസറുടെ അന്വേഷണ റിപ്പോർട്ട്"
      ]
    },
    whereToApply: {
      en: "Kerala e-District Portal or local Village Office / Akshaya Centre.",
      ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ അക്ഷയ കേന്ദ്രം / വില്ലേജ് ഓഫീസ്."
    },
    mode: {
      en: "Online & Offline",
      ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
    },
    steps: {
      en: [
        "Prepare birth records and parental nativity proof.",
        "Submit the request via e-District or an Akshaya desk.",
        "Village Officer verifies lineage and birthplace records.",
        "Download digitally signed certificate from the portal."
      ],
      ml: [
        "ജനനസ്ഥലം, മാതാപിതാക്കളുടെ രേഖകൾ എന്നിവ സ്കാൻ ചെയ്യുക.",
        "ഇ-ഡിസ്ട്രിക്റ്റ് വഴി അപേക്ഷ സമർപ്പിക്കുക.",
        "റവന്യൂ അധികൃതരുടെ പരിശോധനയ്ക്ക് ശേഷം സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യാം."
      ]
    },
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: {
      en: "Essential for state quota admissions like medical and engineering entrance seats.",
      ml: "പ്രൊഫഷണൽ കോഴ്സുകളിലേക്കുള്ള അഡ്മിഷന് വളരെ പ്രധാനപ്പെട്ട രേഖയാണിത്."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "caste-certificate",
    category: "documents",
    icon: "📜",
    name: {
      en: "Caste Certificate",
      ml: "ജാതി സർട്ടിഫിക്കറ്റ്"
    },
    summary: {
      en: "Official certificate confirming SC/ST or specific caste status for statutory reservations.",
      ml: "നിയമപരമായ സംവരണ ആനുകൂല്യങ്ങൾക്കായി ജാതി സാക്ഷ്യപ്പെടുത്തി നൽകുന്ന ഔദ്യോഗിക രേഖ."
    },
    whoNeeds: {
      en: "Applicants claiming reservation in state/central education, recruitment, or welfare programs.",
      ml: "വിദ്യാഭ്യാസ പ്രവേശനം, പി.എസ്.സി / സർക്കാർ ജോലികൾ എന്നിവയിൽ സംവരണം ലഭിക്കേണ്ടവർ."
    },
    eligibility: {
      en: "Members of communities officially recognized in Kerala/Central scheduled caste or tribe lists.",
      ml: "സർക്കാർ വിജ്ഞാപനം ചെയ്ത പട്ടികജാതി/പട്ടികവർഗ്ഗ അല്ലെങ്കിൽ പ്രത്യേക വിഭാഗങ്ങളിൽ ഉൾപ്പെട്ടവർ."
    },
    documents: {
      en: [
        "Aadhaar / Photo Identity Proof",
        "Applicant's SSLC Certificate displaying caste/religion",
        "SSLC or Caste certificate of parents or close paternal relatives",
        "Ration Card copy"
      ],
      ml: [
        "ആധാർ / തിരിച്ചറിയൽ കാർഡ്",
        "ജാതി രേഖപ്പെടുത്തിയ അപേക്ഷകന്റെ SSLC ബുക്ക്",
        "മാതാപിതാക്കളുടെയോ അടുത്ത ബന്ധുക്കളുടെയോ ജാതി സർട്ടിഫിക്കറ്റ് / SSLC",
        "റേഷൻ കാർഡ് പകർപ്പ്"
      ]
    },
    additionalDocs: {
      en: [
        "KIRTADS inquiry report for inter-caste or sensitive status claims"
      ],
      ml: [
        "മിശ്രവിവാഹിതർക്കോ സംശയമുള്ള കേസുകൾക്കോ കിർത്താഡ്സ് (KIRTADS) റിപ്പോർട്ട്"
      ]
    },
    whereToApply: {
      en: "Kerala e-District portal or local Tahsildar / Taluk Office / Akshaya Centre.",
      ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ താലൂക്ക് ഓഫീസ് / അക്ഷയ കേന്ദ്രം."
    },
    mode: {
      en: "Online & Offline",
      ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
    },
    steps: {
      en: [
        "Upload genealogical and school caste records online.",
        "Village Officer conducts inquiry and forwards to Tahsildar.",
        "Tahsildar / Competent Authority sanctions certificate.",
        "Download digitally verified certificate."
      ],
      ml: [
        "സ്കൂൾ രേഖകളും കുടുംബ രേഖകളും ഉൾപ്പെടുത്തി അപേക്ഷിക്കുക.",
        "വില്ലേജ് ഓഫീസർ പരിശോധന നടത്തി തഹസിൽദാർക്ക് കൈമാറുന്നു.",
        "അംഗീകാരം ലഭിച്ച ശേഷം സർട്ടിഫിക്കറ്റ് പ്രിന്റ് എടുക്കാം."
      ]
    },
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: {
      en: "Strict scrutiny applies; submitting false caste details is punishable under statutory laws.",
      ml: "തെറ്റായ ജാതി വിവരങ്ങൾ നൽകുന്നത് നിയമപരമായി ശിക്ഷാർഹമാണ്."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "community-certificate",
    category: "documents",
    icon: "👥",
    name: {
      en: "Community Certificate",
      ml: "കമ്മ്യൂണിറ്റി സർട്ടിഫിക്കറ്റ്"
    },
    summary: {
      en: "Certifies religious and backward community status for non-SC/ST quota applications.",
      ml: "ഒ.ബി.സി, ഒ.ഇ.സി തുടങ്ങിയ വിഭാഗങ്ങളുടെ സമുദായ പദവി സാക്ഷ്യപ്പെടുത്തുന്ന സർട്ടിഫിക്കറ്റ്."
    },
    whoNeeds: {
      en: "Candidates claiming backward class quotas, fee concessions, or recruitment preferences.",
      ml: "സംവരണ വിഭാഗങ്ങളിലെ വിദ്യാർത്ഥികൾ, ഉദ്യോഗാർത്ഥികൾ."
    },
    eligibility: {
      en: "Citizens belonging to notified backward communities in Kerala.",
      ml: "കേരളത്തിൽ അംഗീകരിക്കപ്പെട്ട പിന്നാക്ക സമുദായങ്ങളിൽ ഉൾപ്പെട്ട വ്യക്തികൾ."
    },
    documents: {
      en: [
        "Aadhaar / Photo Identity Proof",
        "SSLC Book showing community/religion",
        "Parents' School Certificate showing community",
        "Ration Card copy"
      ],
      ml: [
        "ആധാർ / തിരിച്ചറിയൽ കാർഡ്",
        "സമുദായം രേഖപ്പെടുത്തിയ അപേക്ഷകന്റെ SSLC",
        "മാതാപിതാക്കളുടെ സ്കൂൾ രേഖകൾ",
        "റേഷൻ കാർഡ് പകർപ്പ്"
      ]
    },
    additionalDocs: {
      en: [
        "Affidavit from community organization head if school records lack clarity"
      ],
      ml: [
        "സ്കൂൾ രേഖകളിൽ വ്യക്തതയില്ലെങ്കിൽ സമുദായ സംഘടനയുടെ സാക്ഷ്യപത്രം"
      ]
    },
    whereToApply: {
      en: "Kerala e-District Portal or Revenue Village Office.",
      ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ് / അക്ഷയ കേന്ദ്രം."
    },
    mode: {
      en: "Online & Offline",
      ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
    },
    steps: {
      en: [
        "Verify that school certificates clearly state the community.",
        "Apply on e-District with scanned copies of SSLC and ID.",
        "Village Officer cross-verifies with parents' records.",
        "Download approved certificate online."
      ],
      ml: [
        "എസ്.എസ്.എൽ.സി ബുക്കിലെ സമുദായ വിവരങ്ങൾ കൃത്യമാണെന്ന് ഉറപ്പാക്കുക.",
        "ഇ-ഡിസ്ട്രിക്റ്റ് വഴി അപേക്ഷ സമർപ്പിക്കുക.",
        "വില്ലേജ് പരിശോധനയ്ക്ക് ശേഷം ഓൺലൈനായി സർട്ടിഫിക്കറ്റ് ലഭിക്കും."
      ]
    },
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: {
      en: "Distinct from Non-Creamy Layer (NCL) certificate; verify exact job/college notifications.",
      ml: "നോൺ-ക്രീമിലെയർ സർട്ടിഫിക്കറ്റിൽ നിന്നും ഇത് വ്യത്യസ്തമാണ്; വിജ്ഞാപന പ്രകാരം ആവശ്യമുള്ളത് തിരഞ്ഞെടുക്കുക."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "family-membership-certificate",
    category: "documents",
    icon: "👨‍👩‍👧‍👦",
    name: {
      en: "Family Membership Certificate",
      ml: "കുടുംബാംഗത്വ സർട്ടിഫിക്കറ്റ്"
    },
    summary: {
      en: "Certifies living members of a family for government welfare schemes, housing, or official claims.",
      ml: "ഒരു കുടുംബത്തിലെ അംഗങ്ങൾ ആരൊക്കെയാണെന്ന് സാക്ഷ്യപ്പെടുത്തുന്ന റവന്യൂ സർട്ടിഫിക്കറ്റ്."
    },
    whoNeeds: {
      en: "Families applying for subsidized housing (LIFE Mission), state financial aid, or land settlement.",
      ml: "ലൈഫ് മിഷൻ ഭവന പദ്ധതി, വിവിധ സർക്കാർ ക്ഷേമ ധനസഹായങ്ങൾ എന്നിവയ്ക്ക് അപേക്ഷിക്കുന്ന കുടുംബങ്ങൾ."
    },
    eligibility: {
      en: "Head of the family or adult member residing in Kerala.",
      ml: "കേരളത്തിൽ ഒരുമിച്ച് താമസിക്കുന്ന കുടുംബത്തിലെ അംഗങ്ങൾ."
    },
    documents: {
      en: [
        "Ration Card (primary evidence of family composition)",
        "Aadhaar cards of all family members",
        "Electoral ID cards of adult members",
        "Self-declaration statement"
      ],
      ml: [
        "റേഷൻ കാർഡ് (കുടുംബാംഗങ്ങളെ തെളിയിക്കുന്ന പ്രധാന രേഖ)",
        "എല്ലാ കുടുംബാംഗങ്ങളുടെയും ആധാർ കാർഡുകൾ",
        "മുതിർന്ന അംഗങ്ങളുടെ വോട്ടർ ഐഡി",
        "സ്വയം സാക്ഷ്യപ്പെടുത്തിയ സത്യവാങ്മൂലം"
      ]
    },
    additionalDocs: {
      en: [
        "Marriage certificate or birth certificates in case of member dispute"
      ],
      ml: [
        "അംഗങ്ങൾ തമ്മിലുള്ള ബന്ധം തെളിയിക്കാൻ ജനന/വിവാഹ സർട്ടിഫിക്കറ്റുകൾ"
      ]
    },
    whereToApply: {
      en: "Kerala e-District Portal or Village Office / Akshaya.",
      ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ് / അക്ഷയ കേന്ദ്രം."
    },
    mode: {
      en: "Online & Offline",
      ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
    },
    steps: {
      en: [
        "Compile ration card and all members' Aadhaar details.",
        "Submit online application via e-District.",
        "Village Officer conducts local verification.",
        "Download digitally signed family membership certificate."
      ],
      ml: [
        "റേഷൻ കാർഡും അംഗങ്ങളുടെ ആധാർ വിവരങ്ങളും ഒരുക്കുക.",
        "ഇ-ഡിസ്ട്രിക്റ്റ് വഴി അപേക്ഷ സമർപ്പിക്കുക.",
        "വില്ലേജ് ഓഫീസറുടെ അന്വേഷണത്തിന് ശേഷം സർട്ടിഫിക്കറ്റ് അനുവദിക്കും."
      ]
    },
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: {
      en: "Do not confuse with Legal Heirship; this document only lists currently living household members.",
      ml: "ഇത് അവകാശ സർട്ടിഫിക്കറ്റ് (Legal Heir) അല്ല; നിലവിൽ ജീവിച്ചിരിക്കുന്ന കുടുംബാംഗങ്ങളുടെ പട്ടികയാണിത്."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "dependency-certificate",
    category: "documents",
    icon: "🤝",
    name: {
      en: "Dependency Certificate",
      ml: "ആശ്രിത സർട്ടിഫിക്കറ്റ്"
    },
    summary: {
      en: "Certifies that a person was financially or socially dependent on another person (e.g. deceased employee).",
      ml: "ഒരു വ്യക്തി മറ്റൊരാളെ സാമ്പത്തികമായോ ഉപജീവനത്തിനായോ ആശ്രയിച്ചിരുന്നുവെന്ന് സാക്ഷ്യപ്പെടുത്തുന്ന റവന്യൂ രേഖ."
    },
    whoNeeds: {
      en: "Applicants seeking compassionate government appointments (dying-in-harness) or defense/service pensions.",
      ml: "സർക്കാർ ജീവനക്കാരുടെ മരണശേഷം ആശ്രിത നിയമനത്തിനോ പെൻഷൻ ആനുകൂല്യങ്ങൾക്കോ അപേക്ഷിക്കുന്നവർ."
    },
    eligibility: {
      en: "Direct dependents (spouse, children, dependent parents) of deceased or disabled individuals.",
      ml: "മരണപ്പെട്ട ജീവനക്കാരന്റെ/വ്യക്തിയുടെ ഭാര്യ/ഭർത്താവ്, മക്കൾ അല്ലെങ്കിൽ ആശ്രിതരായ മാതാപിതാക്കൾ."
    },
    documents: {
      en: [
        "Death Certificate of the primary breadwinner (if deceased)",
        "Applicant's Identity & Address Proof (Aadhaar / Voter ID)",
        "Ration Card showing joint residency",
        "Income Certificate of the applicant/household",
        "Service records or pension book of the employee"
      ],
      ml: [
        "മരണപ്പെട്ട വ്യക്തിയുടെ മരണ സർട്ടിഫിക്കറ്റ്",
        "അപേക്ഷകന്റെ ആധാർ / തിരിച്ചറിയൽ രേഖ",
        "റേഷൻ കാർഡ് പകർപ്പ്",
        "അപേക്ഷകന്റെ വരുമാന സർട്ടിഫിക്കറ്റ്",
        "ജീവനക്കാരന്റെ സർവീസ് ബുക്ക് അല്ലെങ്കിൽ പെൻഷൻ വിവരങ്ങൾ"
      ]
    },
    additionalDocs: {
      en: [
        "Affidavit from other non-dependent family members"
      ],
      ml: [
        "മറ്റ് അവകാശികളുടെ നിരാക്ഷേപ സത്യവാങ്മൂലം"
      ]
    },
    whereToApply: {
      en: "Revenue Department via e-District Portal or Taluk / Village Office.",
      ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ താലൂക്ക് / വില്ലേജ് ഓഫീസ്."
    },
    mode: {
      en: "Online & Offline",
      ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
    },
    steps: {
      en: [
        "Submit application with service details and dependency proofs.",
        "Village Officer and Revenue Inspector conduct family inquiry.",
        "Tahsildar issues dependency order and certificate.",
        "Download digitally signed certificate from portal."
      ],
      ml: [
        "രേഖകൾ സഹിതം ഇ-ഡിസ്ട്രിക്റ്റ് വഴി അപേക്ഷിക്കുക.",
        "റവന്യൂ ഇൻസ്പെക്ടറുടെയും വില്ലേജ് ഓഫീസറുടെയും അന്വേഷണം നടക്കുന്നു.",
        "തഹസിൽദാർ പരിശോധിച്ച് സർട്ടിഫിക്കറ്റ് നൽകുന്നു."
      ]
    },
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: {
      en: "Requires field verification regarding independent income of the applicant.",
      ml: "അപേക്ഷകന് മറ്റ് വരുമാനമാർഗ്ഗങ്ങളില്ലെന്ന് ബോധ്യപ്പെട്ടാൽ മാത്രമേ ഇത് അനുവദിക്കൂ."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "birth-certificate",
    category: "documents",
    icon: "👶",
    name: {
      en: "Birth Certificate",
      ml: "ജനന സർട്ടിഫിക്കറ്റ്"
    },
    summary: {
      en: "Official record of a person's birth registered with the local Registrar of Births and Deaths.",
      ml: "തദ്ദേശ സ്വയംഭരണ സ്ഥാപനത്തിലെ രജിസ്ട്രാർ നൽകുന്ന ഔദ്യോഗിക ജനന രജിസ്ട്രേഷൻ രേഖ."
    },
    whoNeeds: {
      en: "Newborns, school admissions, passport applications, and primary age/identity verification.",
      ml: "സ്കൂൾ പ്രവേശനം, പാസ്‌പോർട്ട്, മറ്റ് ഔദ്യോഗിക രേഖകൾ എന്നിവയ്ക്കായി പ്രായം തെളിയിക്കേണ്ടവർ."
    },
    eligibility: {
      en: "Any individual whose birth occurred within Kerala local body boundaries.",
      ml: "കേരളത്തിലെ ഏതെങ്കിലും തദ്ദേശ സ്ഥാപന പരിധിയിൽ ജനിച്ച ഏതൊരു വ്യക്തിയും."
    },
    documents: {
      en: [
        "Hospital Discharge Summary or Form 1 (Report of Birth)",
        "Parents' Identity Proofs (Aadhaar / Voter ID)",
        "Parents' Marriage Certificate (recommended for child naming)",
        "Prescribed application form"
      ],
      ml: [
        "ആശുപത്രിയിൽ നിന്നുള്ള ഡിസ്ചാർജ്ജ് സർട്ടിഫിക്കറ്റ് / ഫോം 1",
        "മാതാപിതാക്കളുടെ ആധാർ / തിരിച്ചറിയൽ രേഖകൾ",
        "മാതാപിതാക്കളുടെ വിവാഹ സർട്ടിഫിക്കറ്റ്",
        "നിശ്ചിത അപേക്ഷാ ഫോറം"
      ]
    },
    additionalDocs: {
      en: [
        "RDO / Magistrate sanction order for delayed registration after 1 year"
      ],
      ml: [
        "ജനനം നടന്ന് 1 വർഷം കഴിഞ്ഞാണെങ്കിൽ ആർ.ഡി.ഒ അനുമതി ഉത്തരവ്"
      ]
    },
    whereToApply: {
      en: "Sevana Civil Registrations portal (Kerala LSGD) or Grama Panchayath / Municipality / Corporation office.",
      ml: "സെവന സിവിൽ രജിസ്ട്രേഷൻ പോർട്ടൽ അല്ലെങ്കിൽ ഗ്രാമപഞ്ചായത്ത് / മുനിസിപ്പാലിറ്റി / കോർപ്പറേഷൻ ഓഫീസ്."
    },
    mode: {
      en: "Online & Offline",
      ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
    },
    steps: {
      en: [
        "Hospitals report institutional births directly to the Sevana portal.",
        "Parents verify registration online and apply for child name inclusion.",
        "Pay the prescribed nominal fee online or at the counter.",
        "Download digitally signed certificate or collect stamped copy."
      ],
      ml: [
        "ആശുപത്രികൾ ജനനവിവരം നേരിട്ട് സെവന പോർട്ടലിൽ രേഖപ്പെടുത്താറുണ്ട്.",
        "കുട്ടിയുടെ പേര് ചേർക്കാൻ പോർട്ടൽ വഴിയോ നേരിട്ടോ അപേക്ഷിക്കുക.",
        "ഫീസ് അടച്ച് സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യുകയോ ഓഫീസിൽ നിന്ന് കൈപ്പറ്റുകയോ ചെയ്യുക."
      ]
    },
    officialUrl: "https://cr.lsgkerala.gov.in",
    notes: {
      en: "Registration within 21 days is free of delayed-registration penalties.",
      ml: "21 ദിവസത്തിനകം രജിസ്റ്റർ ചെയ്യുന്നത് വഴി പിഴ ഒഴിവാക്കാം."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "death-certificate",
    category: "documents",
    icon: "🕊️",
    name: {
      en: "Death Certificate",
      ml: "മരണ സർട്ടിഫിക്കറ്റ്"
    },
    summary: {
      en: "Official documentation registering the demise of an individual for legal and settlement matters.",
      ml: "ഒരു വ്യക്തിയുടെ മരണം തദ്ദേശ സ്ഥാപനത്തിൽ ഔദ്യോഗികമായി രജിസ്റ്റർ ചെയ്യുന്ന സർട്ടിഫിക്കറ്റ്."
    },
    whoNeeds: {
      en: "Family members claiming insurance, banking settlements, property succession, or pensions.",
      ml: "ഇൻഷുറൻസ് ക്ലെയിം, ബാങ്ക് നിക്ഷേപം പിൻവലിക്കൽ, സ്വത്ത് കൈമാറ്റം, കുടുംബ പെൻഷൻ എന്നിവയ്ക്ക്."
    },
    eligibility: {
      en: "Next of kin or legal representative of a person who passed away within a Kerala local body.",
      ml: "കേരളത്തിൽ മരണപ്പെട്ട വ്യക്തിയുടെ അടുത്ത ബന്ധുക്കൾ അല്ലെങ്കിൽ നിയമപരമായ അവകാശികൾ."
    },
    documents: {
      en: [
        "Medical certification of cause of death from treating hospital / doctor",
        "Identity proof of the deceased (Aadhaar / Voter ID)",
        "Identity proof of the informant / applicant",
        "Cremation / Burial ground receipt"
      ],
      ml: [
        "ആശുപത്രിയിൽ നിന്നോ ഡോക്ടറിൽ നിന്നോ ഉള്ള മരണ സാക്ഷ്യപത്രം (ഫോം 2)",
        "മരണപ്പെട്ട വ്യക്തിയുടെ തിരിച്ചറിയൽ രേഖകൾ",
        "വിവരമറിയിക്കുന്ന അപേക്ഷകന്റെ തിരിച്ചറിയൽ രേഖ",
        "ശ്മശാനത്തിൽ നിന്നുള്ള രസീത്"
      ]
    },
    additionalDocs: {
      en: [
        "Police FIR and post-mortem report in unnatural or accidental death cases"
      ],
      ml: [
        "അസ്വാഭാവിക മരണമാണെങ്കിൽ പോലീസ് എഫ്.ഐ.ആർ, പോസ്റ്റ്മോർട്ടം റിപ്പോർട്ട്"
      ]
    },
    whereToApply: {
      en: "Sevana LSGD portal or concerned local body registrar office.",
      ml: "സെവന പോർട്ടൽ അല്ലെങ്കിൽ ബന്ധപ്പെട്ട പഞ്ചായത്ത് / നഗരസഭ ഓഫീസ്."
    },
    mode: {
      en: "Online & Offline",
      ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
    },
    steps: {
      en: [
        "Submit medical death report within 21 days to the local body.",
        "Verify registration details online on the Sevana civil registration platform.",
        "Download digitally verified death certificate with QR code."
      ],
      ml: [
        "മരണവിവരം 21 ദിവസത്തിനകം തദ്ദേശ സ്ഥാപനത്തിൽ റിപ്പോർട്ട് ചെയ്യുക.",
        "സെവന പോർട്ടലിൽ വിവരങ്ങൾ പരിശോധിച്ച് രജിസ്ട്രേഷൻ ഉറപ്പാക്കുക.",
        "ഡിജിറ്റൽ സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്ത് സൂക്ഷിക്കുക."
      ]
    },
    officialUrl: "https://cr.lsgkerala.gov.in",
    notes: {
      en: "Ensure spelling of names on medical reports matches other legal IDs.",
      ml: "മെഡിക്കൽ റിപ്പോർട്ടിലെ പേരും മറ്റു തിരിച്ചറിയൽ രേഖകളിലെ പേരും ഒന്നുതന്നെയാണെന്ന് ഉറപ്പാക്കുക."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "marriage-certificate",
    category: "documents",
    icon: "💍",
    name: {
      en: "Marriage Certificate & Registration",
      ml: "വിവാഹ രജിസ്ട്രേഷനും സർട്ടിഫിക്കറ്റും"
    },
    summary: {
      en: "Formal registration of marriage and issuance of certificate under Kerala Common Marriage Rules.",
      ml: "കേരള വിവാഹ രജിസ്ട്രേഷൻ (പൊതു) ചട്ടങ്ങൾ പ്രകാരം വിവാഹം രജിസ്റ്റർ ചെയ്യുന്നതും സർട്ടിഫിക്കറ്റ് നൽകുന്നതും."
    },
    whoNeeds: {
      en: "Spouses requiring legal proof for family visas, joint loans, passport updates, or name changes.",
      ml: "വിദേശ വിസ, പാസ്‌പോർട്ട്, ജോയിന്റ് അക്കൗണ്ട്, മറ്റ് നിയമപരമായ ആവശ്യങ്ങൾ എന്നിവയ്ക്കായി."
    },
    eligibility: {
      en: "Couples whose marriage was solemnized in Kerala or where one spouse resides locally.",
      ml: "കേരളത്തിൽ വിവാഹം നടത്തിയവരോ അല്ലെങ്കിൽ ദമ്പതികളിൽ ഒരാളെങ്കിലും കേരളത്തിൽ താമസിക്കുന്നവരോ ആയിരിക്കണം."
    },
    documents: {
      en: [
        "Memorandum of Marriage (Form 1)",
        "Age proof for both bride and groom (SSLC / Birth Certificate / Passport)",
        "Proof of marriage ceremony (certificate from religious body/auditorium or invitation card + photo)",
        "Address proof of both parties",
        "Passport-sized photographs of bride and groom"
      ],
      ml: [
        "വിവാഹ രജിസ്ട്രേഷൻ ഫോറം (ഫോം 1)",
        "വധൂവരന്മാരുടെ വയസ്സ് തെളിയിക്കുന്ന രേഖകൾ (SSLC / പാസ്‌പോർട്ട് / ജനന സർട്ടിഫിക്കറ്റ്)",
        "വിവാഹം നടന്നുവെന്നുള്ള സാക്ഷ്യപത്രം (മതസ്ഥാപനം / ഓഡിറ്റോറിയം രസീത് / ഫോട്ടോ)",
        "മേൽവിലാസം തെളിയിക്കുന്ന രേഖകൾ",
        "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ"
      ]
    },
    additionalDocs: {
      en: [
        "NOC / Single status certificate if one party is a foreign national",
        "Divorce decree / death certificate if previously married"
      ],
      ml: [
        "വിദേശ പൗരന്മാരാണെങ്കിൽ എൻ.ഒ.സി / ബാച്ചിലർഹുഡ് സർട്ടിഫിക്കറ്റ്",
        "വിവാഹമോചിതരാണെങ്കിൽ കോടതി വിധി / പങ്കാളിയുടെ മരണ സർട്ടിഫിക്കറ്റ്"
      ]
    },
    whereToApply: {
      en: "Sevana LSGD portal followed by physical appearance before Local Registrar.",
      ml: "സെവന പോർട്ടൽ വഴി അപേക്ഷിച്ച ശേഷം തദ്ദേശ സ്ഥാപന രജിസ്ട്രാർക്ക് മുന്നിൽ ഹാജരാവുക."
    },
    mode: {
      en: "Online submission + In-person signing",
      ml: "ഓൺലൈൻ അപേക്ഷ + നേരിട്ടുള്ള ഒപ്പിടൽ"
    },
    steps: {
      en: [
        "Submit Form 1 online via Sevana portal with photos and solemnization proofs.",
        "Take the printout of the generated acknowledgement slip.",
        "Both spouses appear before the Local Registrar with two witnesses and original IDs.",
        "Sign the official marriage register; download certificate post-approval."
      ],
      ml: [
        "സെവന പോർട്ടൽ വഴി ഓൺലൈനായി ഫോം 1 പൂരിപ്പിച്ച് ഫോട്ടോകൾ അപ്‌ലോഡ് ചെയ്യുക.",
        "പ്രിന്റ് ഔട്ടും ഒറിജിനൽ രേഖകളുമായി രണ്ട് സാക്ഷികളോടൊപ്പം തദ്ദേശ സ്ഥാപനത്തിൽ ഹാജരാവുക.",
        "രജിസ്ട്രാറുടെ സാന്നിധ്യത്തിൽ ഒപ്പിട്ട ശേഷം സർട്ടിഫിക്കറ്റ് കൈപ്പറ്റുക."
      ]
    },
    officialUrl: "https://cr.lsgkerala.gov.in",
    notes: {
      en: "Physical presence of both bride and groom is mandatory before the local registrar.",
      ml: "വധൂവരന്മാർ ഇരുവരും രജിസ്ട്രാറുടെ മുന്നിൽ നേരിട്ട് ഹാജരാകേണ്ടത് നിർബന്ധമാണ്."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "legal-heir-certificate",
    category: "documents",
    icon: "📜",
    name: {
      en: "Legal Heir Certificate",
      ml: "അനന്തരാവകാശ സർട്ടിഫിക്കറ്റ്"
    },
    summary: {
      en: "Official certificate issued by the Revenue Department establishing legal heirs of a deceased person.",
      ml: "മരണപ്പെട്ട വ്യക്തിയുടെ നിയമപരമായ അനന്തരാവകാശികൾ ആരാണെന്ന് റവന്യൂ വകുപ്പ് സാക്ഷ്യപ്പെടുത്തുന്ന സർട്ടിഫിക്കറ്റ്."
    },
    whoNeeds: {
      en: "Family members claiming deceased pensions, PF settlement, bank balances, or property title mutation.",
      ml: "മരണപ്പെട്ടയാളുടെ പെൻഷൻ, പി.എഫ്, ബാങ്ക് നിക്ഷേപം, ഭൂമിയുടെ ഉടമസ്ഥാവകാശ മാറ്റം എന്നിവയ്ക്ക് അർഹരായ അവകാശികൾ."
    },
    eligibility: {
      en: "Surviving legal heirs (spouse, children, parents) of a deceased person who resided in Kerala.",
      ml: "കേരളത്തിൽ അന്തരിച്ച വ്യക്തിയുടെ ജീവിച്ചിരിക്കുന്ന നിയമപരമായ അനന്തരാവകാശികൾ."
    },
    documents: {
      en: [
        "Death Certificate of the deceased person",
        "Aadhaar / Photo ID proof of the applicant and all legal heirs",
        "Ration card showing relationship with the deceased",
        "Self-declaration / Affidavit by all surviving heirs"
      ],
      ml: [
        "മരണപ്പെട്ട വ്യക്തിയുടെ ഔദ്യോഗിക മരണ സർട്ടിഫിക്കറ്റ്",
        "അപേക്ഷകന്റെയും മറ്റ് എല്ലാ അവകാശികളുടെയും ആധാർ / തിരിച്ചറിയൽ രേഖകൾ",
        "ബന്ധം വ്യക്തമാക്കുന്ന റേഷൻ കാർഡ് പകർപ്പ്",
        "എല്ലാ അവകാശികളും ഒപ്പിട്ട സത്യവാങ്മൂലം"
      ]
    },
    additionalDocs: {
      en: [
        "No-objection consent letter from other co-heirs if one person is claiming assets",
        "Gazette notification publication proof in specific succession cases"
      ],
      ml: [
        "ഒരാൾ മാത്രമാണ് ആനുകൂല്യം വാങ്ങുന്നതെങ്കിൽ മറ്റ് അവകാശികളുടെ സമ്മതപത്രം",
        "ഗസറ്റ് വിജ്ഞാപന പകർപ്പ് (ആവശ്യപ്പെടുന്ന സന്ദർഭങ്ങളിൽ)"
      ]
    },
    whereToApply: {
      en: "Kerala e-District Portal or Taluk Office / Akshaya Centre.",
      ml: "കേരള ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ താലൂക്ക് ഓഫീസ് / അക്ഷയ കേന്ദ്രം."
    },
    mode: {
      en: "Online & Taluk Office Inquiry",
      ml: "ഓൺലൈൻ & താലൂക്ക് തല അന്വേഷണം"
    },
    steps: {
      en: [
        "Upload death certificate, family relations proof, and affidavits on e-District.",
        "Village Officer and Revenue Inspector conduct field inquiry.",
        "Notice is published in the Gazette / Taluk board as per statutory rules.",
        "Tahsildar approves and issues digitally signed certificate."
      ],
      ml: [
        "മരണ സർട്ടിഫിക്കറ്റും അവകാശികളുടെ വിവരങ്ങളും ഇ-ഡിസ്ട്രിക്റ്റിൽ നൽകുക.",
        "വില്ലേജ് ഓഫീസറും റവന്യൂ ഇൻസ്പെക്ടറും അന്വേഷണം നടത്തുന്നു.",
        "താലൂക്ക് ബോർഡിലോ ഗസറ്റിലോ പരസ്യം പ്രസിദ്ധീകരിക്കുന്നു.",
        "തഹസിൽദാർ പരിശോധിച്ച് സർട്ടിഫിക്കറ്റ് നൽകുന്നു."
      ]
    },
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: {
      en: "Involves mandatory public notice inquiry period. For large banking or disputed estates, a court Succession Certificate may be required.",
      ml: "തർക്കങ്ങളുള്ള സ്വത്തുക്കൾക്കോ വലിയ തുകകൾക്കോ കോടതിയുടെ സക്സഷൻ സർട്ടിഫിക്കറ്റ് ആവശ്യമായി വന്നേക്കാം."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "relationship-certificate",
    category: "documents",
    icon: "👥",
    name: {
      en: "Relationship Certificate",
      ml: "ബന്ധുത്വ സർട്ടിഫിക്കറ്റ്"
    },
    summary: {
      en: "Certifies the specific blood or legal kinship relationship between two individuals.",
      ml: "രണ്ട് വ്യക്തികൾ തമ്മിലുള്ള കുടുംബബന്ധം ഔദ്യോഗികമായി സാക്ഷ്യപ്പെടുത്തുന്ന സർട്ടിഫിക്കറ്റ്."
    },
    whoNeeds: {
      en: "Citizens proving kinship for passport processing, foreign visa sponsorship, or insurance nominees.",
      ml: "വിദേശ വിസ സ്പോൺസർഷിപ്പ്, പാസ്‌പോർട്ട്, ഇൻഷുറൻസ് നോമിനേഷൻ എന്നിവയ്ക്കായി ബന്ധം തെളിയിക്കേണ്ടവർ."
    },
    eligibility: {
      en: "Residents of Kerala requiring proof of formal relationship to another family member.",
      ml: "കുടുംബാംഗവുമായുള്ള ബന്ധം തെളിയിക്കേണ്ട കേരളത്തിലെ താമസക്കാർ."
    },
    documents: {
      en: [
        "Aadhaar / Recognized ID proofs of both individuals",
        "Ration card copy listing both persons",
        "School Certificate / SSLC Book showing parents' names",
        "Self-declaration affidavit"
      ],
      ml: [
        "രണ്ട് വ്യക്തികളുടെയും ആധാർ / തിരിച്ചറിയൽ രേഖകൾ",
        "ഇരുവരുടെയും പേരുള്ള റേഷൻ കാർഡ് പകർപ്പ്",
        "മാതാപിതാക്കളുടെ പേര് രേഖപ്പെടുത്തിയ സ്കൂൾ സർട്ടിഫിക്കറ്റ് / SSLC",
        "സത്യവാങ്മൂലം"
      ]
    },
    additionalDocs: {
      en: [
        "Birth certificate or marriage certificate establishing biological or marital relationship"
      ],
      ml: [
        "നേരിട്ടുള്ള ബന്ധം തെളിയിക്കുന്ന ജനന അല്ലെങ്കിൽ വിവാഹ സർട്ടിഫിക്കറ്റ്"
      ]
    },
    whereToApply: {
      en: "Kerala e-District Portal or local Village Office / Akshaya Centre.",
      ml: "കേരള ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ് / അക്ഷയ കേന്ദ്രം."
    },
    mode: {
      en: "Online & Offline",
      ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
    },
    steps: {
      en: [
        "Submit identity and parentage documents on e-District.",
        "Village Officer verifies genealogical links from field records.",
        "Tahsildar / Village Officer sanctions the certificate.",
        "Download digitally signed certificate from dashboard."
      ],
      ml: [
        "തിരിച്ചറിയൽ രേഖകളും ബന്ധം വ്യക്തമാക്കുന്ന രേഖകളും പോർട്ടലിൽ അപ്‌ലോഡ് ചെയ്യുക.",
        "വില്ലേജ് ഓഫീസർ വിവരങ്ങൾ പരിശോധിക്കുന്നു.",
        "അനുമതി ലഭിച്ച ശേഷം ഓൺലൈനായി സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യുക."
      ]
    },
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: {
      en: "Usually distinct from Family Membership; specific to proving relationship between two persons.",
      ml: "രണ്ട് വ്യക്തികൾ തമ്മിലുള്ള കൃത്യമായ ബന്ധം സാക്ഷ്യപ്പെടുത്താനാണ് ഇത് ഉപയോഗിക്കുന്നത്."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "identification-certificate",
    category: "documents",
    icon: "🪪",
    name: {
      en: "Identification Certificate",
      ml: "തിരിച്ചറിയൽ സർട്ടിഫിക്കറ്റ്"
    },
    summary: {
      en: "Revenue Department certificate verifying an individual's identity and personal physical marks.",
      ml: "ഒരു വ്യക്തിയുടെ വ്യക്തിഗത വിവരങ്ങളും ശരീരത്തിലെ അടയാളങ്ങളും പരിശോധിച്ച് നൽകുന്ന സാക്ഷ്യപത്രം."
    },
    whoNeeds: {
      en: "Individuals lacking standard national ID proofs for specific institutional or legal submissions.",
      ml: "മറ്റ് തിരിച്ചറിയൽ രേഖകൾ ഇല്ലാത്തവർക്കോ കോടതി/സ്ഥാപന ആവശ്യങ്ങൾക്കായി പ്രത്യേക തിരിച്ചറിയൽ ആവശ്യമുള്ളവർക്കോ."
    },
    eligibility: {
      en: "Resident individuals residing within the village jurisdiction.",
      ml: "വില്ലേജ് പരിധിയിൽ താമസിക്കുന്ന വ്യക്തികൾ."
    },
    documents: {
      en: [
        "Recent passport-sized photograph",
        "Address proof (Ration Card or Residential Electricity bill)",
        "Document confirming date of birth (Birth Certificate / School Transfer Certificate)",
        "Self-declaration statement"
      ],
      ml: [
        "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോ",
        "മേൽവിലാസ രേഖ (റേഷൻ കാർഡ് അല്ലെങ്കിൽ വൈദ്യുതി ബിൽ)",
        "ജനനത്തീയതി രേഖ (ജനന സർട്ടിഫിക്കറ്റ് / സ്കൂൾ ടി.സി)",
        "സ്വയം സാക്ഷ്യപ്പെടുത്തിയ അപേക്ഷ"
      ]
    },
    additionalDocs: {
      en: [
        "Physical verification report of identification marks by Village Officer"
      ],
      ml: [
        "ശരീരത്തിലെ തിരിച്ചറിയൽ അടയാളങ്ങൾ പരിശോധിച്ചുകൊണ്ടുള്ള വില്ലേജ് റിപ്പോർട്ട്"
      ]
    },
    whereToApply: {
      en: "Kerala e-District Portal or local Village Office / Akshaya Centre.",
      ml: "കേരള ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ് / അക്ഷയ കേന്ദ്രം."
    },
    mode: {
      en: "Online & Village Office",
      ml: "ഓൺലൈൻ & വില്ലേജ് ഓഫീസ്"
    },
    steps: {
      en: [
        "Apply online via e-District attaching address and birth evidence.",
        "Attend local Village Office if personal physical verification of marks is required.",
        "Village Officer certifies applicant identity.",
        "Download signed certificate from e-District."
      ],
      ml: [
        "ഇ-ഡിസ്ട്രിക്റ്റ് വഴി രേഖകൾ സഹിതം അപേക്ഷിക്കുക.",
        "ആവശ്യമെങ്കിൽ വില്ലേജ് ഓഫീസിൽ നേരിട്ടെത്തി ശരീരത്തിലെ അടയാളങ്ങൾ പരിശോധിക്കുക.",
        "പരിശോധനയ്ക്ക് ശേഷം സർട്ടിഫിക്കറ്റ് ഓൺലൈനായി ലഭിക്കും."
      ]
    },
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: {
      en: "Requirements may vary; verify the latest details on the official portal.",
      ml: "നിബന്ധനകളിൽ മാറ്റങ്ങൾ വരാം; ഔദ്യോഗിക പോർട്ടൽ വഴി വിവരങ്ങൾ ഉറപ്പാക്കുക."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "solvency-certificate",
    category: "documents",
    icon: "🏦",
    name: {
      en: "Solvency Certificate",
      ml: "സോൾവൻസി സർട്ടിഫിക്കറ്റ്"
    },
    summary: {
      en: "Revenue certification proving the financial standing and unencumbered asset value of an individual.",
      ml: "ഒരു വ്യക്തിയുടെ സാമ്പത്തിക ഭദ്രതയും ബാധ്യതകളില്ലാത്ത സ്വത്ത് മൂല്യവും സാക്ഷ്യപ്പെടുത്തുന്ന റവന്യൂ രേഖ."
    },
    whoNeeds: {
      en: "Contractors bidding for government tenders, individuals standing court bail/surety, or applying for liquor/excise licenses.",
      ml: "സർക്കാർ ടെൻഡറുകളിൽ പങ്കെടുക്കുന്നവർ, കോടതി ജാമ്യം നിൽക്കുന്നവർ, മറ്റ് നിയമപരമായ ആവശ്യങ്ങൾക്ക് സാമ്പത്തിക ശേഷി തെളിയിക്കേണ്ടവർ."
    },
    eligibility: {
      en: "Property owners in Kerala possessing clear unencumbered title to immovable properties.",
      ml: "കേരളത്തിൽ സ്വന്തം പേരിൽ ബാധ്യതകളില്ലാത്ത വസ്തുവകകൾ ഉള്ള വ്യക്തികൾ."
    },
    documents: {
      en: [
        "Title deed (Aadhaaram) of the property",
        "Latest Land Tax receipt (Thandaper / Karam receipt)",
        "Encumbrance Certificate (EC) for minimum 13-30 years from Sub-Registrar Office",
        "Location sketch and possession certificate",
        "Aadhaar / Photo ID proof"
      ],
      ml: [
        "വസ്തുവിന്റെ പ്രമാണ പകർപ്പ് (ആധാരം)",
        "നടപ്പു വർഷത്തെ ഭൂനികുതി രസീത്",
        "സബ് രജിസ്ട്രാർ ഓഫീസിൽ നിന്നുള്ള ബാധ്യതാ സർട്ടിഫിക്കറ്റ് (EC)",
        "ലൊക്കേഷൻ സ്കെച്ചും കൈവശാവകാശ സർട്ടിഫിക്കറ്റും",
        "ആധാർ / തിരിച്ചറിയൽ രേഖ"
      ]
    },
    additionalDocs: {
      en: [
        "Valuation certificate from approved valuer or Tahsildar valuation report"
      ],
      ml: [
        "വസ്തുവിന്റെ വിപണി മൂല്യം സംബന്ധിച്ച റവന്യൂ വാല്യുവേഷൻ റിപ്പോർട്ട്"
      ]
    },
    whereToApply: {
      en: "Revenue Department via e-District Portal or Taluk Office.",
      ml: "റവന്യൂ വകുപ്പ് ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ താലൂക്ക് ഓഫീസ്."
    },
    mode: {
      en: "Online & Taluk Office Inspection",
      ml: "ഓൺലൈൻ & താലൂക്ക് തല പരിശോധന"
    },
    steps: {
      en: [
        "Submit application online along with property deeds and Encumbrance Certificate.",
        "Village Officer inspects property to verify possession and absence of attachment.",
        "Tahsildar determines net solvency value based on fair value.",
        "Digitally signed Solvency Certificate is issued."
      ],
      ml: [
        "പ്രമാണങ്ങളും ബാധ്യതാ സർട്ടിഫിക്കറ്റും ഉൾപ്പെടുത്തി അപേക്ഷിക്കുക.",
        "വില്ലേജ് ഓഫീസർ വസ്തു സന്ദർശിച്ച് ബാധ്യതകളില്ലെന്ന് ഉറപ്പുവരുത്തുന്നു.",
        "തഹസിൽദാർ മൂല്യം നിർണ്ണയിച്ച് സർട്ടിഫിക്കറ്റ് അനുവദിക്കുന്നു."
      ]
    },
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: {
      en: "Certificate is issued only up to the verified value of unencumbered immovable property.",
      ml: "വസ്തുവിന്റെ ബാധ്യതയില്ലാത്ത യഥാർത്ഥ മൂല്യത്തിന് അനുസൃതമായി മാത്രമേ സർട്ടിഫിക്കറ്റ് അനുവദിക്കൂ."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "possession-certificate",
    category: "documents",
    icon: "🏡",
    name: {
      en: "Possession Certificate",
      ml: "കൈവശാവകാശ സർട്ടിഫിക്കറ്റ്"
    },
    summary: {
      en: "Certifies that an individual holds lawful physical possession of a specific parcel of land.",
      ml: "ഒരു നിശ്ചിത ഭൂമി അപേക്ഷകന്റെ കൈവശത്തിലും അനുഭവത്തിലുമാണെന്ന് സാക്ഷ്യപ്പെടുത്തുന്ന റവന്യൂ രേഖ."
    },
    whoNeeds: {
      en: "Landowners applying for building permits, bank agricultural or housing loans, and electricity connections.",
      ml: "ബാങ്ക് വായ്പകൾ, കെട്ടിട നിർമ്മാണ പെർമിറ്റ്, വൈദ്യുതി കണക്ഷൻ എന്നിവയ്ക്കായി ഭൂമിയുടെ കൈവശാവകാശം തെളിയിക്കേണ്ടവർ."
    },
    eligibility: {
      en: "Titleholders actively possessing land in Kerala with tax remitted up to date.",
      ml: "ഭൂനികുതി കൃത്യമായി അടച്ച് വസ്തു കൈവശം വെച്ച് അനുഭവിക്കുന്ന ഭൂവുടമകൾ."
    },
    documents: {
      en: [
        "Registered Title Deed (Aadhaaram)",
        "Latest Land Tax Receipt (Karam receipt)",
        "Aadhaar / Photo ID proof",
        "Previous possession certificate copy (if renewing)"
      ],
      ml: [
        "രജിസ്റ്റർ ചെയ്ത ആധാരത്തിന്റെ പകർപ്പ്",
        "നടപ്പു വർഷത്തെ ഭൂനികുതി രസീത്",
        "ആധാർ / തിരിച്ചറിയൽ രേഖ",
        "മുമ്പ് ലഭിച്ച സർട്ടിഫിക്കറ്റിന്റെ പകർപ്പ് (ഉണ്ടെങ്കിൽ)"
      ]
    },
    additionalDocs: {
      en: [
        "Thandaper account extract or pattayam copy (if applicable)"
      ],
      ml: [
        "താണ്ഡപ്പേര് പകർപ്പ് അല്ലെങ്കിൽ പട്ടയ രേഖകൾ (ബാധകമെങ്കിൽ)"
      ]
    },
    whereToApply: {
      en: "Kerala e-District Portal or local Village Office / Akshaya Centre.",
      ml: "കേരള ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ് / അക്ഷയ കേന്ദ്രം."
    },
    mode: {
      en: "Online & Village Office",
      ml: "ഓൺലൈൻ & വില്ലേജ് ഓഫീസ്"
    },
    steps: {
      en: [
        "Apply on e-District uploading title deed and tax payment receipt.",
        "Village Officer checks village land records and conducts field verification if needed.",
        "Village Officer approves and issues digitally signed certificate.",
        "Download certificate directly from e-District."
      ],
      ml: [
        "ആധാരവും നികുതി രസീതും സഹിതം ഇ-ഡിസ്ട്രിക്റ്റിൽ അപേക്ഷിക്കുക.",
        "വില്ലേജ് രേഖകൾ പരിശോധിച്ച് ഉദ്യോഗസ്ഥർ അനുമതി നൽകുന്നു.",
        "സർട്ടിഫിക്കറ്റ് ഓൺലൈനായി ഡൗൺലോഡ് ചെയ്ത് ഉപയോഗിക്കാം."
      ]
    },
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: {
      en: "Ensure land tax is paid for the current financial year before applying.",
      ml: "അപേക്ഷിക്കുന്നതിന് മുൻപ് നടപ്പു സാമ്പത്തിക വർഷത്തെ ഭൂനികുതി അടച്ചിട്ടുണ്ടെന്ന് ഉറപ്പാക്കുക."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "location-certificate",
    category: "documents",
    icon: "🗺️",
    name: {
      en: "Location Certificate & Sketch",
      ml: "ലൊക്കേഷൻ സർട്ടിഫിക്കറ്റും സ്കെച്ചും"
    },
    summary: {
      en: "Certifies the exact geographical location, survey boundaries, and sketch of a land parcel.",
      ml: "ഭൂമിയുടെ കൃത്യമായ സർവ്വേ അതിരുകളും സ്ഥാനവും വ്യക്തമാക്കുന്ന റവന്യൂ സ്കെച്ചും സർട്ടിഫിക്കറ്റും."
    },
    whoNeeds: {
      en: "Property owners applying for building permits, boundary demarcations, bank mortgages, or legal title verification.",
      ml: "കെട്ടിട നിർമ്മാണ അനുമതി, ബാങ്ക് വായ്പകൾ, അതിർത്തി തിരിക്കൽ എന്നിവയ്ക്കായി സ്ഥലം വ്യക്തമാക്കേണ്ടവർ."
    },
    eligibility: {
      en: "Lawful owners of titled land registered within a Kerala revenue village.",
      ml: "വില്ലേജ് പരിധിയിൽ ഭൂമിയുള്ള ഉടമസ്ഥർ."
    },
    documents: {
      en: [
        "Title deed copy of the property",
        "Latest Land Tax Receipt",
        "Possession Certificate",
        "Aadhaar / Photo ID proof"
      ],
      ml: [
        "ആധാരത്തിന്റെ പകർപ്പ്",
        "ഭൂനികുതി രസീത്",
        "കൈവശാവകാശ സർട്ടിഫിക്കറ്റ്",
        "ആധാർ / തിരിച്ചറിയൽ രേഖ"
      ]
    },
    additionalDocs: {
      en: [
        "Field Measurement Book (FMB) sketch extract from Taluk Survey Section"
      ],
      ml: [
        "താലൂക്ക് സർവ്വേ വിഭാഗത്തിൽ നിന്നുള്ള എഫ്.എം.ബി (FMB) സ്കെച്ച് പകർപ്പ്"
      ]
    },
    whereToApply: {
      en: "Kerala e-District Portal or local Village Office / Akshaya Centre.",
      ml: "കേരള ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ് / അക്ഷയ കേന്ദ്രം."
    },
    mode: {
      en: "Online & Village Field Inspection",
      ml: "ഓൺലൈൻ & വില്ലേജ് പരിശോധന"
    },
    steps: {
      en: [
        "Submit application on e-District with title deed and tax proof.",
        "Village Assistant / Surveyor conducts field visit to inspect plot boundaries.",
        "Location certificate and official location sketch are prepared and uploaded.",
        "Download certified location certificate online."
      ],
      ml: [
        "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴി പ്രമാണങ്ങൾ അപ്‌ലോഡ് ചെയ്യുക.",
        "വില്ലേജ് ജീവനക്കാർ സ്ഥലം സന്ദർശിച്ച് അതിരുകൾ തിട്ടപ്പെടുത്തുന്നു.",
        "ലൊക്കേഷൻ സർട്ടിഫിക്കറ്റും സ്കെച്ചും ഓൺലൈനായി ലഭ്യമാക്കുന്നു."
      ]
    },
    officialUrl: "https://edistrict.kerala.gov.in",
    notes: {
      en: "Often required together with Possession Certificate for building permit approval by LSGD.",
      ml: "തദ്ദേശ സ്ഥാപനങ്ങളിൽ കെട്ടിട നിർമ്മാണ പെർമിറ്റിനായി കൈവശാവകാശത്തിനൊപ്പം ഇതും ആവശ്യപ്പെടാറുണ്ട്."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "local-body-certificates",
    category: "documents",
    icon: "🏛️",
    name: {
      en: "Local Body Certificates (LSGD)",
      ml: "തദ്ദേശ സ്ഥാപന സർട്ടിഫിക്കറ്റുകൾ (സെവന)"
    },
    summary: {
      en: "Civil registry and civic certificates issued by Grama Panchayats, Municipalities, and Corporations.",
      ml: "ഗ്രാമപഞ്ചായത്ത്, നഗരസഭ എന്നിവയിൽ നിന്ന് ലഭിക്കുന്ന ജനന, മരണ, വിവാഹ സാക്ഷ്യപത്രങ്ങളും അനുബന്ധ സേവനങ്ങളും."
    },
    whoNeeds: {
      en: "Residents needing certified extracts of civil registers or civic validations from local governing bodies.",
      ml: "തദ്ദേശ സ്വയംഭരണ സ്ഥാപനങ്ങളിൽ നിന്ന് സിവിൽ രജിസ്ട്രേഷൻ രേഖകൾ ആവശ്യമുള്ള പൊതുജനങ്ങൾ."
    },
    eligibility: {
      en: "Citizens registered or residing within the jurisdiction of the concerned Kerala local authority.",
      ml: "നിശ്ചിത തദ്ദേശ സ്ഥാപന പരിധിയിൽ ജനിച്ചവരോ താമസിക്കുന്നവരോ ആയ വ്യക്തികൾ."
    },
    documents: {
      en: [
        "Aadhaar / Photo Identity Proof",
        "Existing registration reference number or hospital reporting slip",
        "Address proof within the local body limits"
      ],
      ml: [
        "ആധാർ അല്ലെങ്കിൽ തിരിച്ചറിയൽ രേഖ",
        "രജിസ്ട്രേഷൻ നമ്പർ അല്ലെങ്കിൽ ആശുപത്രി റിപ്പോർട്ട് വിവരങ്ങൾ",
        "തദ്ദേശ പരിധിയിലെ മേൽവിലാസ രേഖ"
      ]
    },
    additionalDocs: {
      en: [
        "Prescribed application forms for correction or non-availability certificates"
      ],
      ml: [
        "തിരുത്തലുകൾ വരുത്താനോ ലഭ്യതക്കുറവ് സർട്ടിഫിക്കറ്റിനോ ഉള്ള അപേക്ഷാ ഫോറം"
      ]
    },
    whereToApply: {
      en: "Sevana LSGD Portal (cr.lsgkerala.gov.in) or local Panchayat / Municipality office.",
      ml: "സെവന എൽ.എസ്.ജി.ഡി പോർട്ടൽ അല്ലെങ്കിൽ തദ്ദേശ സ്ഥാപന ഓഫീസ്."
    },
    mode: {
      en: "Online & Local Body Office",
      ml: "ഓൺലൈൻ & തദ്ദേശ ഓഫീസ്"
    },
    steps: {
      en: [
        "Search civil registration databases online using date and location parameters.",
        "Apply for copy or correction on the Sevana civil registration platform.",
        "Pay statutory fee online or at the office cashier.",
        "Collect certified stamped certificate or download digitally signed copy."
      ],
      ml: [
        "സെവന പോർട്ടലിൽ തീയതിയും സ്ഥലവും നൽകി രജിസ്ട്രേഷൻ വിവരങ്ങൾ കണ്ടെത്തുക.",
        "സർട്ടിഫിക്കറ്റിനായി ഓൺലൈനായോ നേരിട്ടോ അപേക്ഷിക്കുക.",
        "ഫീസ് അടച്ച് സർട്ടിഫിക്കറ്റ് കൈപ്പറ്റുക."
      ]
    },
    officialUrl: "https://cr.lsgkerala.gov.in",
    notes: {
      en: "Digitally signed certificates with verifiable QR codes are recognized as legal proof across departments.",
      ml: "ക്യു.ആർ കോഡുള്ള ഡിജിറ്റൽ സർട്ടിഫിക്കറ്റുകൾ എല്ലാ ഔദ്യോഗിക ആവശ്യങ്ങൾക്കും സാധുവാണ്."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "marriage-registration-services",
    category: "documents",
    icon: "💒",
    name: {
      en: "Marriage Registration Services",
      ml: "വിവാഹ രജിസ്ട്രേഷൻ സേവനങ്ങൾ"
    },
    summary: {
      en: "Procedural booking and legal solemnization under Special Marriage Act or Kerala Common Marriage Rules.",
      ml: "സ്പെഷ്യൽ മാര്യേജ് ആക്ട് അല്ലെങ്കിൽ കേരള കോമൺ മാര്യേജ് ചട്ടങ്ങൾ പ്രകാരമുള്ള രജിസ്ട്രേഷൻ നടപടികൾ."
    },
    whoNeeds: {
      en: "Couples intending to marry legally under the civil act or formalize an already solemnized ceremony.",
      ml: "നിയമാനുസൃതമായി സിവിൽ വിവാഹം രജിസ്റ്റർ ചെയ്യാൻ ആഗ്രഹിക്കുന്ന ദമ്പതികൾ."
    },
    eligibility: {
      en: "Bride aged 18+ and Groom aged 21+ complying with statutory notice conditions.",
      ml: "വധുവിന് 18 വയസ്സും വരന് 21 വയസ്സും പൂർത്തിയായിരിക്കണം."
    },
    documents: {
      en: [
        "Age proof of bride and groom (Birth Certificate, SSLC, or Passport)",
        "Address proof of both parties",
        "Passport size photographs",
        "Solemnization certificate from religious authority or joint declaration"
      ],
      ml: [
        "വധൂവരന്മാരുടെ വയസ്സ് തെളിയിക്കുന്ന രേഖകൾ (SSLC, ജനന സർട്ടിഫിക്കറ്റ്)",
        "ഇരുവരുടെയും മേൽവിലാസ രേഖകൾ",
        "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ",
        "വിവാഹ സാക്ഷ്യപത്രം അല്ലെങ്കിൽ സംയുക്ത സത്യവാങ്മൂലം"
      ]
    },
    additionalDocs: {
      en: [
        "Identity proofs of three witnesses (for Special Marriage Act registration)",
        "Embassy NOC if one partner is a foreign citizen"
      ],
      ml: [
        "മൂന്ന് സാക്ഷികളുടെ തിരിച്ചറിയൽ രേഖകൾ (സ്പെഷ്യൽ മാര്യേജ് ആക്ടിന്)",
        "വിദേശ പൗരന്മാരാണെങ്കിൽ എംബസി എൻ.ഒ.സി"
      ]
    },
    whereToApply: {
      en: "Registration Department portal (keralaregistration.gov.in) for Special Marriage or Sevana portal for Local Body registration.",
      ml: "സബ് രജിസ്ട്രാർ ഓഫീസ് (രജിസ്ട്രേഷൻ വകുപ്പ്) അല്ലെങ്കിൽ തദ്ദേശ സ്ഥാപന സെവന പോർട്ടൽ."
    },
    mode: {
      en: "Online Notice Submission + In-person Signing",
      ml: "ഓൺലൈൻ അപേക്ഷ & നേരിട്ടുള്ള രജിസ്ട്രേഷൻ"
    },
    steps: {
      en: [
        "Submit notice of intended marriage online to Sub-Registrar / Local Registrar.",
        "Under Special Marriage Act, observe statutory 30-day notice period.",
        "Appear at the registrar office on appointed date with witnesses and original IDs.",
        "Sign the register in presence of the marriage officer and receive certificate."
      ],
      ml: [
        "രജിസ്ട്രാർക്ക് ഓൺലൈനായി വിവാഹ നോട്ടീസ് സമർപ്പിക്കുക.",
        "സ്പെഷ്യൽ മാര്യേജ് ആക്ട് പ്രകാരം 30 ദിവസത്തെ നോട്ടീസ് കാലാവധി പൂർത്തിയാക്കുക.",
        "സാക്ഷികളോടൊപ്പം സബ് രജിസ്ട്രാർ ഓഫീസിൽ നേരിട്ടെത്തി ഒപ്പിടുക.",
        "വിവാഹ സർട്ടിഫിക്കറ്റ് കൈപ്പറ്റുക."
      ]
    },
    officialUrl: "https://keralaregistration.gov.in",
    notes: {
      en: "Special Marriage Act requires mandatory 30-day public notice display at the Sub-Registrar Office before solemnization.",
      ml: "സ്പെഷ്യൽ മാര്യേജ് രജിസ്ട്രേഷന് സബ് രജിസ്ട്രാർ ഓഫീസിൽ 30 ദിവസത്തെ നോട്ടീസ് പ്രദർശനം നിർബന്ധമാണ്."
    },
    lastVerified: "September 2026",
    verified: true
  },

  // =========================================================================
  // CATEGORY B: ID & Personal (id)
  // =========================================================================
  {
    id: "aadhaar-services",
    category: "id",
    icon: "🪪",
    name: {
      en: "Aadhaar Services",
      ml: "ആധാർ സേവനങ്ങൾ"
    },
    summary: {
      en: "UIDAI biometric identity services including demographic updates, address changes, and mobile linking.",
      ml: "മേൽവിലാസം തിരുത്തൽ, മൊബൈൽ നമ്പർ ലിങ്കിംഗ്, ബയോമെട്രിക് അപ്ഡേഷൻ തുടങ്ങിയ യു.ഐ.ഡി.എ.ഐ സേവനങ്ങൾ."
    },
    whoNeeds: {
      en: "Residents needing updates to demographic information, address, biometrics, or mobile linkage.",
      ml: "മേൽവിലാസ മാറ്റം, ഫോൺ നമ്പർ മാറ്റം, കുട്ടികളുടെ ബയോമെട്രിക് പുതുക്കൽ എന്നിവ ആവശ്യമുള്ളവർ."
    },
    eligibility: {
      en: "All Indian residents who hold an Aadhaar number or are enrolling for the first time.",
      ml: "ഇന്ത്യയിൽ താമസിക്കുന്ന ഏതൊരു പൗരനും."
    },
    documents: {
      en: [
        "Proof of Identity (Passport, PAN, Voter ID, Ration Card with photo)",
        "Proof of Address (Electricity bill, Bank passbook, Rent agreement, Water bill)",
        "Proof of Date of Birth (Birth certificate, SSLC book)"
      ],
      ml: [
        "തിരിച്ചറിയൽ രേഖ (പാസ്‌പോർട്ട്, പാൻ കാർഡ്, വോട്ടർ ഐഡി)",
        "മേൽവിലാസ രേഖ (ബാങ്ക് പാസ്ബുക്ക്, വൈദ്യുതി ബിൽ, റേഷൻ കാർഡ്)",
        "ജനനത്തീയതി രേഖ (ജനന സർട്ടിഫിക്കറ്റ്, എസ്.എസ്.എൽ.സി)"
      ]
    },
    additionalDocs: {
      en: [
        "Head of Family (HoF) consent document if applicant lacks independent address proof"
      ],
      ml: [
        "സ്വന്തമായി മേൽവിലാസ രേഖ ഇല്ലെങ്കിൽ കുടുംബനാഥന്റെ സമ്മതപത്രം (HoF)"
      ]
    },
    whereToApply: {
      en: "Online via myAadhaar portal (for demographics) or in person at Akshaya Centre / Post Office / Bank Aadhaar Kendra.",
      ml: "myAadhaar പോർട്ടൽ (ഓൺലൈൻ) അല്ലെങ്കിൽ അക്ഷയ കേന്ദ്രം / പോസ്റ്റ് ഓഫീസ് / ബാങ്ക് ആധാർ സേവാ കേന്ദ്രം."
    },
    mode: {
      en: "Online (Demographic) & Offline (Biometric / Mobile)",
      ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
    },
    steps: {
      en: [
        "For address: login to myAadhaar with registered mobile OTP and upload document.",
        "For biometrics / mobile linking: book an appointment or visit an authorized Akshaya centre.",
        "Provide biometric verification at the center.",
        "Use the URN (Update Request Number) to track update status."
      ],
      ml: [
        "മേൽവിലാസം മാറ്റാൻ myAadhaar പോർട്ടലിൽ ലോഗിൻ ചെയ്ത് രേഖകൾ അപ്‌ലോഡ് ചെയ്യാം.",
        "മൊബൈൽ ലിങ്കിംഗിനും ബയോമെട്രിക്കിനും അക്ഷയ അല്ലെങ്കിൽ ആധാർ കേന്ദ്രത്തിൽ നേരിട്ടെത്തുക.",
        "ലഭിക്കുന്ന URN നമ്പർ ഉപയോഗിച്ച് സ്റ്റാറ്റസ് പരിശോധിക്കുക."
      ]
    },
    officialUrl: "https://myaadhaar.uidai.gov.in",
    notes: {
      en: "Never share OTPs or sensitive credentials on unverified websites. Mandatory biometric updates apply for children at ages 5 and 15.",
      ml: "ഒ.ടി.പി വിവരങ്ങൾ അപരിചിതരുമായി പങ്കുവെക്കരുത്. 5, 15 വയസ്സുകളിൽ കുട്ടികളുടെ ബയോമെട്രിക് അപ്ഡേഷൻ നിർബന്ധമാണ്."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "pan-card",
    category: "id",
    icon: "💳",
    name: {
      en: "PAN Card",
      ml: "പാൻ കാർഡ്"
    },
    summary: {
      en: "10-character alphanumeric identity issued by the Income Tax Department for financial transactions and tax records.",
      ml: "നികുതി ആവശ്യങ്ങൾക്കും ബാങ്കിംഗ് ഇടപാടുകൾക്കുമായി ആദായനികുതി വകുപ്പ് നൽകുന്ന സ്ഥിരം അക്കൗണ്ട് നമ്പർ."
    },
    whoNeeds: {
      en: "Taxpayers, bank account holders, investors, students, and businesses conducting taxable transactions.",
      ml: "ബാങ്ക് അക്കൗണ്ട് തുറക്കുന്നവർ, നികുതിദായകർ, സാമ്പത്തിക ഇടപാടുകൾ നടത്തുന്നവർ."
    },
    eligibility: {
      en: "All Indian citizens (adults, minors via parents/guardians, and corporate entities).",
      ml: "എല്ലാ ഇന്ത്യൻ പൗരന്മാർക്കും (പ്രായപൂർത്തിയാകാത്തവർക്ക് രക്ഷിതാവ് മുഖേന) അപേക്ഷിക്കാം."
    },
    documents: {
      en: [
        "Proof of Identity (Aadhaar, Voter ID, Driving Licence, Passport)",
        "Proof of Address (Aadhaar, utility bill, bank account statement)",
        "Proof of Date of Birth (Birth certificate, SSLC, Aadhaar)"
      ],
      ml: [
        "തിരിച്ചറിയൽ രേഖ (ആധാർ, വോട്ടർ ഐഡി, പാസ്‌പോർട്ട്)",
        "മേൽവിലാസ രേഖ (ആധാർ, ബാങ്ക് പാസ്ബുക്ക്, കറന്റ് ബിൽ)",
        "ജനനത്തീയതി രേഖ (എസ്.എസ്.എൽ.സി, ജനന സർട്ടിഫിക്കറ്റ്)"
      ]
    },
    additionalDocs: {
      en: [
        "Representative assessee proof in case of applications for minor children"
      ],
      ml: [
        "കുട്ടികൾക്ക് വേണ്ടിയാണെങ്കിൽ രക്ഷിതാവിന്റെ തിരിച്ചറിയൽ രേഖകൾ"
      ]
    },
    whereToApply: {
      en: "Protean (formerly NSDL) / UTIITSL portals or instant paperless e-PAN via Income Tax e-filing portal.",
      ml: "Protean (NSDL), UTIITSL പോർട്ടൽ അല്ലെങ്കിൽ ഇൻകം ടാക്സ് ഇ-ഫയലിംഗ് പോർട്ടൽ."
    },
    mode: {
      en: "100% Online or via TIN-FC / Akshaya",
      ml: "ഓൺലൈൻ & അക്ഷയ കേന്ദ്രങ്ങൾ"
    },
    steps: {
      en: [
        "Choose online form 49A on Protean or instant e-PAN on Income Tax portal.",
        "Authenticate using Aadhaar e-KYC or upload scanned signature and photo.",
        "Pay the processing fee (Free for basic instant e-PAN).",
        "Physical card is dispatched to postal address; e-PAN is delivered by email."
      ],
      ml: [
        "Protean അല്ലെങ്കിൽ ഇൻകം ടാക്സ് പോർട്ടൽ വഴി ഫോം 49A പൂരിപ്പിക്കുക.",
        "ആധാർ ഒ.ടി.പി വഴി ഇ-കെവൈസി പൂർത്തിയാക്കുക.",
        "ഫീസ് അടച്ച് കഴിഞ്ഞാൽ ഇ-പാൻ ഇമെയിലിലും ഫിസിക്കൽ കാർഡ് തപാലിലും ലഭിക്കും."
      ]
    },
    officialUrl: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
    notes: {
      en: "Aadhaar-PAN linking is mandatory under current tax guidelines.",
      ml: "പാൻ കാർഡും ആധാറും തമ്മിൽ ബന്ധിപ്പിക്കേണ്ടത് നിർബന്ധമാണ്."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "voter-id",
    category: "id",
    icon: "🗳️",
    name: {
      en: "Voter ID",
      ml: "വോട്ടർ ഐഡി (EPIC)"
    },
    summary: {
      en: "Electoral Photo Identity Card issued by the Election Commission of India for franchise rights.",
      ml: "തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ നൽകുന്ന വോട്ടർ തിരിച്ചറിയൽ കാർഡും വോട്ടർ പട്ടികയിലെ പേര് ചേർക്കലും."
    },
    whoNeeds: {
      en: "Indian citizens turning 18 or citizens needing address/constituency corrections.",
      ml: "18 വയസ്സ് തികഞ്ഞ ഇന്ത്യൻ പൗരന്മാർ, മേൽവിലാസം മാറ്റേണ്ട വോട്ടർമാർ."
    },
    eligibility: {
      en: "Indian citizens aged 18 or above on the qualifying cutoff dates.",
      ml: "18 വയസ്സ് പൂർത്തിയായ ഇന്ത്യൻ പൗരന്മാർക്ക് അപേക്ഷിക്കാം."
    },
    documents: {
      en: [
        "Proof of Age (Birth Certificate, Aadhaar, SSLC, Passport)",
        "Proof of Ordinary Residence (Water bill, Electricity bill, Aadhaar, Bank passbook)",
        "Recent passport size color photograph"
      ],
      ml: [
        "പ്രായം തെളിയിക്കുന്ന രേഖ (എസ്.എസ്.എൽ.സി, ജനന സർട്ടിഫിക്കറ്റ്, ആധാർ)",
        "താമസസ്ഥലം തെളിയിക്കുന്ന രേഖ (വൈദ്യുതി ബിൽ, ബാങ്ക് പാസ്ബുക്ക്, ആധാർ)",
        "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോ"
      ]
    },
    additionalDocs: {
      en: [
        "Existing EPIC number of family members in the same assembly constituency (helps linking booth)"
      ],
      ml: [
        "കുടുംബാംഗങ്ങളുടെ വോട്ടർ ഐഡി നമ്പർ (ബൂത്ത് എളുപ്പത്തിൽ കണ്ടെത്താൻ)"
      ]
    },
    whereToApply: {
      en: "Online via Voters' Services Portal (ECI) or voter helpline app, or through local Booth Level Officer (BLO).",
      ml: "Voters' Services Portal (voters.eci.gov.in) അല്ലെങ്കിൽ ബി.എൽ.ഒ (BLO) മുഖേന."
    },
    mode: {
      en: "Online & Offline",
      ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
    },
    steps: {
      en: [
        "Register on voters.eci.gov.in and fill Form 6 (new voter) or Form 8 (correction).",
        "Upload photo, age proof, and address proof.",
        "Field verification is conducted by the Booth Level Officer (BLO).",
        "Download e-EPIC online or receive physical card via post."
      ],
      ml: [
        "voters.eci.gov.in വഴി ഫോം 6 (പുതിയ വോട്ടർ) പൂരിപ്പിക്കുക.",
        "ഫോട്ടോയും തിരിച്ചറിയൽ രേഖകളും അപ്‌ലോഡ് ചെയ്യുക.",
        "ബി.എൽ.ഒ യുടെ പരിശോധനയ്ക്ക് ശേഷം അപേക്ഷ അംഗീകരിക്കപ്പെടും.",
        "e-EPIC ഓൺലൈനായി ഡൗൺലോഡ് ചെയ്യാം, ഒറിജിനൽ കാർഡ് തപാലിൽ എത്തും."
      ]
    },
    officialUrl: "https://voters.eci.gov.in",
    notes: {
      en: "Registering in multiple constituencies or locations is an offense under electoral law.",
      ml: "രണ്ടിടങ്ങളിൽ ഒരേസമയം വോട്ട് ചേർക്കുന്നത് നിയമവിരുദ്ധമാണ്."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "passport",
    category: "id",
    icon: "✈️",
    name: {
      en: "Passport",
      ml: "പാസ്‌പോർട്ട്"
    },
    summary: {
      en: "Official international travel document issued by the Ministry of External Affairs, Government of India.",
      ml: "വിദേശ യാത്രകൾക്കായി വിദേശകാര്യ മന്ത്രാലയം ഇന്ത്യൻ പൗരന്മാർക്ക് നൽകുന്ന ഔദ്യോഗിക യാത്രാ രേഖ."
    },
    whoNeeds: {
      en: "Citizens traveling abroad for education, employment, family visits, business, or tourism.",
      ml: "വിദേശത്തേക്ക് പഠനത്തിനോ ജോലിക്കോ വിനോദയാത്രയ്ക്കോ പോകാൻ ആഗ്രഹിക്കുന്നവർ."
    },
    eligibility: {
      en: "Indian citizens with no prohibitive criminal court orders or travel bans.",
      ml: "ക്രിമിനൽ കേസുകളോ യാത്രാവിലക്കോ ഇല്ലാത്ത ഏതൊരു ഇന്ത്യൻ പൗരനും."
    },
    documents: {
      en: [
        "Proof of Date of Birth (Birth Certificate, Transfer Certificate, or SSLC)",
        "Proof of Address (Aadhaar, Voter ID, Bank Passbook with photo)",
        "Educational Proof for Non-ECR status (10th standard SSLC or higher educational degree)"
      ],
      ml: [
        "ജനനത്തീയതി രേഖ (ജനന സർട്ടിഫിക്കറ്റ്, സ്കൂൾ ടി.സി, SSLC)",
        "മേൽവിലാസ രേഖ (ആധാർ, വോട്ടർ ഐഡി, ബാങ്ക് പാസ്ബുക്ക്)",
        "നോൺ-ഇ.സി.ആർ (Non-ECR) ലഭിക്കാൻ 10-ാം ക്ലാസ്സ് അല്ലെങ്കിൽ ഉയർന്ന വിദ്യാഭ്യാസ സർട്ടിഫിക്കറ്റ്"
      ]
    },
    additionalDocs: {
      en: [
        "Existing passport booklet in case of renewal / re-issue",
        "Marriage certificate (if adding spouse name)"
      ],
      ml: [
        "പഴയ പാസ്‌പോർട്ട് (പുതുക്കുന്നവർക്ക്)",
        "ഭാര്യ/ഭർത്താവിന്റെ പേര് ചേർക്കാൻ വിവാഹ സർട്ടിഫിക്കറ്റ്"
      ]
    },
    whereToApply: {
      en: "Passport Seva online portal, followed by physical visit to Passport Seva Kendra (PSK) or Post Office PSK (POPSK).",
      ml: "പാസ്‌പോർട്ട് സേവാ പോർട്ടൽ വഴി അപേക്ഷിച്ച ശേഷം പി.എസ്.കെ (PSK) അല്ലെങ്കിൽ പോസ്റ്റ് ഓഫീസ് പി.എസ്.കെ സന്ദർശിക്കുക."
    },
    mode: {
      en: "Online booking + In-person appointment at PSK",
      ml: "ഓൺലൈൻ അപ്പോയിന്റ്മെന്റ് + നേരിട്ടുള്ള പരിശോധന"
    },
    steps: {
      en: [
        "Register on the official Passport Seva portal and complete application form.",
        "Pay the official fee and schedule an appointment at your nearest PSK/POPSK.",
        "Attend appointment with original documents for biometrics and verification.",
        "Police verification occurs at your registered residence.",
        "Passport is delivered securely via Speed Post."
      ],
      ml: [
        "പാസ്‌പോർട്ട് സേവാ വെബ്സൈറ്റിൽ രജിസ്റ്റർ ചെയ്ത് അപേക്ഷ പൂരിപ്പിക്കുക.",
        "ഫീസ് ഓൺലൈനായി അടച്ച് അടുത്തുള്ള കേന്ദ്രത്തിൽ അപ്പോയിന്റ്മെന്റ് എടുക്കുക.",
        "അസ്സൽ രേഖകളുമായി കേന്ദ്രത്തിൽ നേരിട്ടെത്തി ബയോമെട്രിക് വിവരങ്ങൾ നൽകുക.",
        "പോലീസ് വെരിഫിക്കേഷന് ശേഷം പാസ്‌പോർട്ട് സ്പീഡ് പോസ്റ്റിൽ വീട്ടിലെത്തും."
      ]
    },
    officialUrl: "https://www.passportindia.gov.in",
    notes: {
      en: "Beware of unofficial lookalike portals. Use only passportindia.gov.in for applications and fees.",
      ml: "വ്യാജ വെബ്സൈറ്റുകളിൽ വഞ്ചിതരാകാതിരിക്കുക; passportindia.gov.in വഴി മാത്രം അപേക്ഷിക്കുക."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "driving-licence",
    category: "id",
    icon: "🚗",
    name: {
      en: "Driving Licence",
      ml: "ഡ്രൈവിംഗ് ലൈസൻസ്"
    },
    summary: {
      en: "Authorisation issued by the Kerala Motor Vehicles Department to drive motor vehicles on public roads.",
      ml: "വാഹനങ്ങൾ ഓടിക്കുന്നതിനായി മോട്ടോർ വാഹന വകുപ്പ് നൽകുന്ന ഡ്രൈവിംഗ് ലൈസൻസ് സേവനങ്ങൾ."
    },
    whoNeeds: {
      en: "Individuals aged 18+ (or 16+ for gearless 50cc two-wheelers) wishing to drive motor vehicles.",
      ml: "18 വയസ്സ് തികഞ്ഞ (ഗിയറില്ലാത്ത ഇരുചക്രവാഹനങ്ങൾക്ക് 16 വയസ്സ്) വാഹനങ്ങൾ ഓടിക്കാൻ ആഗ്രഹിക്കുന്നവർ."
    },
    eligibility: {
      en: "Age requirement met, medically fit, and successful completion of learner's test and driving practical test.",
      ml: "പ്രായപരിധി, ശാരീരികക്ഷമത, തിയറി-പ്രാക്ടിക്കൽ പരീക്ഷകളിലെ വിജയം."
    },
    documents: {
      en: [
        "Age Proof (SSLC, Birth Certificate, or Passport)",
        "Address Proof (Aadhaar, Voter ID, or Rental Agreement)",
        "Medical Fitness Certificate (Form 1A signed by registered medical practitioner)",
        "Learner's Licence (LL) for practical driving test"
      ],
      ml: [
        "പ്രായം തെളിയിക്കുന്ന രേഖ (SSLC, ജനന സർട്ടിഫിക്കറ്റ്)",
        "മേൽവിലാസ രേഖ (ആധാർ, വോട്ടർ ഐഡി)",
        "മെഡിക്കൽ ഫിറ്റ്നസ് സർട്ടിഫിക്കറ്റ് (ഫോം 1A)",
        "ഡ്രൈവിംഗ് ടെസ്റ്റിനായി ലേണേഴ്സ് ലൈസൻസ്"
      ]
    },
    additionalDocs: {
      en: [
        "Driving school certificate (Form 5) for commercial and transport categories"
      ],
      ml: [
        "ട്രാൻസ്പോർട്ട് വാഹനങ്ങൾക്ക് ഡ്രൈവിംഗ് സ്കൂൾ സർട്ടിഫിക്കറ്റ്"
      ]
    },
    whereToApply: {
      en: "Parivahan Sarathi portal or Sub-RTO office / Driving School.",
      ml: "പരിവഹൻ സാരഥി (Sarathi) പോർട്ടൽ അല്ലെങ്കിൽ സബ് ആർ.ടി.ഒ ഓഫീസ്."
    },
    mode: {
      en: "Online Application & Ground Test",
      ml: "ഓൺലൈൻ അപേക്ഷ & നേരിട്ടുള്ള ഡ്രൈവിംഗ് ടെസ്റ്റ്"
    },
    steps: {
      en: [
        "Apply for Learner's Licence (LL) on Parivahan Sarathi and complete computer test.",
        "Hold Learner's Licence for minimum 30 days mandatory learning period.",
        "Book practical driving test slot on Sarathi portal.",
        "Clear driving test (H/8 track and road test) before the Motor Vehicle Inspector (MVI).",
        "Licence is delivered by post or accessed in DigiLocker/mParivahan."
      ],
      ml: [
        "സാരഥി പോർട്ടൽ വഴി ലേണേഴ്സ് ലൈസൻസിന് അപേക്ഷിച്ച് ഓൺലൈൻ പരീക്ഷ പാസാവുക.",
        "30 ദിവസത്തിന് ശേഷം ഡ്രൈവിംഗ് ടെസ്റ്റിനായി സ്ലോട്ട് ബുക്ക് ചെയ്യുക.",
        "ആർ.ടി.ഒ ഗ്രൗണ്ടിൽ നേരിട്ടെത്തി എച്ച് (H) എടുത്ത് റോഡ് ടെസ്റ്റ് പാസാവുക.",
        "ലൈസൻസ് തപാലിൽ ലഭിക്കും, ഡിജിലോക്കർ വഴിയും ഡൗൺലോഡ് ചെയ്യാം."
      ]
    },
    officialUrl: "https://sarathi.parivahan.gov.in",
    notes: {
      en: "Slot availability varies by regional Sub-RTO. Book ground tests in advance.",
      ml: "ടെസ്റ്റ് സ്ലോട്ടുകൾ മുൻകൂട്ടി ബുക്ക് ചെയ്യേണ്ടതുണ്ട്."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "vehicle-rc-services",
    category: "id",
    icon: "📑",
    name: {
      en: "Vehicle Registration / RC Services",
      ml: "വാഹന ആർ.സി സേവനങ്ങൾ"
    },
    summary: {
      en: "Registration Certificate (RC) services including ownership transfer, address changes, and hypothecation endorsement/cancellation.",
      ml: "വാഹനത്തിന്റെ ഉടമസ്ഥാവകാശ മാറ്റം, വിലാസം മാറ്റൽ, ഹൈപ്പോത്തിക്കേഷൻ റദ്ദാക്കൽ തുടങ്ങിയ ആർ.സി സേവനങ്ങൾ."
    },
    whoNeeds: {
      en: "Vehicle owners buying, selling, or modifying vehicle registration details.",
      ml: "വാഹനം വാങ്ങുകയോ വിൽക്കുകയോ ചെയ്തവർ, വായ്പ തിരിച്ചടച്ച് ഹൈപ്പോത്തിക്കേഷൻ മാറ്റേണ്ടവർ."
    },
    eligibility: {
      en: "Registered owner or genuine buyer/transferee of a motor vehicle registered in Kerala.",
      ml: "കേരളത്തിൽ രജിസ്റ്റർ ചെയ്ത വാഹനങ്ങളുടെ ഉടമകൾ അല്ലെങ്കിൽ വാങ്ങിയ വ്യക്തികൾ."
    },
    documents: {
      en: [
        "Original Registration Certificate (RC Book / Smart Card)",
        "Form 29 & Form 30 (for vehicle ownership transfer)",
        "Valid Motor Vehicle Insurance Certificate",
        "Pollution Under Control Certificate (PUCC)",
        "Aadhaar / Address proof of buyer and seller"
      ],
      ml: [
        "ഒറിജിനൽ ആർ.സി ബുക്ക് (സ്മാർട്ട് കാർഡ്)",
        "ഫോം 29 & ഫോം 30 (ഉടമസ്ഥാവകാശം മാറ്റാൻ)",
        "നിലവിലുള്ള വാഹന ഇൻഷുറൻസ് പോളിസി",
        "പുക പരിശോധനാ സർട്ടിഫിക്കറ്റ് (PUCC)",
        "വാങ്ങുന്നയാളുടെയും വിൽക്കുന്നയാളുടെയും ആധാർ / മേൽവിലാസ രേഖകൾ"
      ]
    },
    additionalDocs: {
      en: [
        "Bank NOC / Form 35 for loan clearance (Hypothecation cancellation)"
      ],
      ml: [
        "വായ്പ തീർന്നതാണെങ്കിൽ ബാങ്കിൽ നിന്നുള്ള NOC / ഫോം 35"
      ]
    },
    whereToApply: {
      en: "Parivahan Vahan Citizen Portal or through regional Sub-RTO / Akshaya Centre.",
      ml: "പരിവഹൻ വാഹൻ (Vahan) പോർട്ടൽ അല്ലെങ്കിൽ സബ് ആർ.ടി.ഒ ഓഫീസ് / അക്ഷയ കേന്ദ്രം."
    },
    mode: {
      en: "Online Application & Document Submission",
      ml: "ഓൺലൈൻ അപേക്ഷ & രേഖകൾ നൽകൽ"
    },
    steps: {
      en: [
        "Log in to the Parivahan Vahan portal and enter vehicle registration details.",
        "Select required service (Transfer of Ownership, Hypothecation removal, etc.).",
        "Pay fee and tax online.",
        "Submit signed application and original RC to the concerned RTO if requested.",
        "Updated RC is posted or digitally generated."
      ],
      ml: [
        "പരിവഹൻ വാഹൻ പോർട്ടലിൽ വാഹന നമ്പർ നൽകി ആവശ്യമുള്ള സർവീസ് തിരഞ്ഞെടുക്കുക.",
        "ഫീസ് ഓൺലൈനായി അടയ്ക്കുക.",
        "ആവശ്യമെങ്കിൽ ഒറിജിനൽ ആർ.സിയും ഒപ്പിട്ട ഫോമുകളും ആർ.ടി.ഒ ഓഫീസിൽ സമർപ്പിക്കുക.",
        "പുതുക്കിയ ആർ.സി തപാലിലോ ഡിജിലോക്കറിലോ ലഭ്യമാകും."
      ]
    },
    officialUrl: "https://vahan.parivahan.gov.in",
    notes: {
      en: "Clear all pending traffic fines and ensure vehicle insurance is active before initiating RC transfer.",
      ml: "ട്രാഫിക് ഫൈനുകൾ ബാക്കിയില്ലെന്നും ഇൻഷുറൻസ് കാലാവധി ഉണ്ടെന്നും ഉറപ്പുവരുത്തുക."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "police-clearance-certificate",
    category: "id",
    icon: "🛡️",
    name: {
      en: "Police Clearance Certificate (PCC)",
      ml: "പോലീസ് ക്ലിയറൻസ് സർട്ടിഫിക്കറ്റ് (PCC)"
    },
    summary: {
      en: "Certification confirming clean criminal antecedents issued by Police / Regional Passport Office.",
      ml: "ക്രിമിനൽ കേസുകളോ മറ്റ് നിയമപരമായ തടസ്സങ്ങളോ ഇല്ലെന്ന് പോലീസ് സാക്ഷ്യപ്പെടുത്തുന്ന സർട്ടിഫിക്കറ്റ്."
    },
    whoNeeds: {
      en: "Citizens applying for long-term employment visas, permanent residency abroad, or sensitive public jobs.",
      ml: "വിദേശത്ത് തൊഴിൽ വിസ, സ്ഥിരതാമസ അനുമതി (PR), മറ്റ് ഔദ്യോഗിക നിയമനങ്ങൾ എന്നിവയ്ക്ക് അപേക്ഷിക്കുന്നവർ."
    },
    eligibility: {
      en: "Indian citizens with no adverse criminal cases registered against them in jurisdictional police stations.",
      ml: "പോലീസ് സ്റ്റേഷനുകളിൽ ക്രിമിനൽ കേസുകളോ മറ്റ് ബാധ്യതകളോ ഇല്ലാത്ത ഇന്ത്യൻ പൗരന്മാർ."
    },
    documents: {
      en: [
        "Valid Indian Passport with address proof",
        "Aadhaar / Recognized Photo Identity Card",
        "Proof of present residential address in Kerala",
        "Recent passport-sized photographs"
      ],
      ml: [
        "സാധുവായ ഒറിജിനൽ പാസ്‌പോർട്ട്",
        "ആധാർ / ഫോട്ടോ തിരിച്ചറിയൽ രേഖ",
        "നിലവിലെ താമസസ്ഥലം തെളിയിക്കുന്ന രേഖ",
        "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ"
      ]
    },
    additionalDocs: {
      en: [
        "Job offer letter / Visa application copy requiring mandatory clearance",
        "Court disposal judgment copy if cleared of past charges"
      ],
      ml: [
        "വിസ അല്ലെങ്കിൽ വിദേശ ജോലിയുടെ ഓഫർ ലെറ്റർ പകർപ്പ്",
        "പഴയ കേസുകൾ തീർപ്പായതാണെങ്കിൽ കോടതി വിധി പകർപ്പ്"
      ]
    },
    whereToApply: {
      en: "Passport Seva Portal (for international visa PCC) or Kerala Police Thuna Portal (for domestic job PCC).",
      ml: "പാസ്‌പോർട്ട് സേവാ കേന്ദ്രം (വിദേശ വിസയ്ക്ക്) അല്ലെങ്കിൽ കേരള പോലീസ് തുണ പോർട്ടൽ (ആഭ്യന്തര ആവശ്യങ്ങൾക്ക്)."
    },
    mode: {
      en: "Online Application & Police Station Verification",
      ml: "ഓൺലൈൻ അപേക്ഷ & പോലീസ് സ്റ്റേഷൻ വെരിഫിക്കേഷൻ"
    },
    steps: {
      en: [
        "Submit online form on Passport Seva or Kerala Police Thuna Portal.",
        "Pay prescribed application fee online and book verification slot.",
        "Local police station officer visits or summons applicant to inspect original documents.",
        "Police report is submitted and certificate is issued by RPO / District Police Chief."
      ],
      ml: [
        "പാസ്‌പോർട്ട് സേവാ അല്ലെങ്കിൽ തുണ പോർട്ടലിൽ അപേക്ഷ സമർപ്പിച്ച് ഫീസ് അടയ്ക്കുക.",
        "ലോക്കൽ പോലീസ് സ്റ്റേഷനിൽ നിന്ന് രേഖകൾ പരിശോധിക്കുന്നു.",
        "അന്വേഷണ റിപ്പോർട്ട് സമർപ്പിച്ച ശേഷം സർട്ടിഫിക്കറ്റ് ലഭ്യമാകുന്നു."
      ]
    },
    officialUrl: "https://www.passportindia.gov.in",
    notes: {
      en: "For foreign visa requirements, only PCC issued via Passport Seva Kendra is accepted by foreign embassies.",
      ml: "വിദേശ വിസ ആവശ്യങ്ങൾക്ക് പാസ്‌പോർട്ട് സേവാ കേന്ദ്രം വഴി നൽകുന്ന പി.സി.സി മാത്രമേ എംബസികൾ സ്വീകരിക്കൂ."
    },
    lastVerified: "September 2026",
    verified: true
  },

  // =========================================================================
  // CATEGORY C: Government & Local (government)
  // =========================================================================
  {
    id: "ration-card-services",
    category: "government",
    icon: "🌾",
    name: {
      en: "Ration Card Services",
      ml: "റേഷൻ കാർഡ് സേവനങ്ങൾ"
    },
    summary: {
      en: "Civil Supplies services for new ration cards, member addition/deletion, card category conversion, and corrections.",
      ml: "പുതിയ റേഷൻ കാർഡ്, അംഗങ്ങളെ ചേർക്കൽ/ഒഴിവാക്കൽ, കാർഡ് തരം മാറ്റൽ തുടങ്ങിയ സിവിൽ സപ്ലൈസ് സേവനങ്ങൾ."
    },
    whoNeeds: {
      en: "Households needing food grains, subsidized rations, or official family composition proof.",
      ml: "ഭക്ഷ്യധാന്യ ആനുകൂല്യങ്ങൾക്കും കുടുംബാംഗങ്ങളെ തെളിയിക്കുന്നതിനുമായി പൊതുജനങ്ങൾ."
    },
    eligibility: {
      en: "Permanent resident families in Kerala with valid residential and income credentials.",
      ml: "കേരളത്തിൽ സ്ഥിരതാമസമുള്ള കുടുംബങ്ങൾ."
    },
    documents: {
      en: [
        "Aadhaar cards of all family members to be included",
        "Residential proof (Electricity bill or Local body building tax receipt)",
        "Income certificate / proof of earnings (for priority card categorization)",
        "Deletion Certificate / Surrender Certificate (if moving from another card)"
      ],
      ml: [
        "കാർഡിൽ ഉൾപ്പെടുത്തേണ്ട എല്ലാ അംഗങ്ങളുടെയും ആധാർ കാർഡുകൾ",
        "താമസസ്ഥലം തെളിയിക്കുന്ന കറന്റ് ബിൽ / കെട്ടിട നികുതി രസീത്",
        "വരുമാന സർട്ടിഫിക്കറ്റ് (മുൻഗണനാ കാർഡുകൾക്ക്)",
        "മറ്റൊരു കാർഡിൽ നിന്ന് പേര് ഒഴിവാക്കിയ സർട്ടിഫിക്കറ്റ് (ബാധകമെങ്കിൽ)"
      ]
    },
    additionalDocs: {
      en: [
        "LPG gas connection details (IOCL/BPCL/HPCL consumer number)"
      ],
      ml: [
        "പാചകവാതക (LPG) കണക്ഷൻ വിവരങ്ങൾ"
      ]
    },
    whereToApply: {
      en: "Civil Supplies Citizen Portal (ecitizen.civilsupplieskerala.gov.in) or Akshaya Centre / Taluk Supply Office (TSO).",
      ml: "സിവിൽ സപ്ലൈസ് സിറ്റിസൺ പോർട്ടൽ അല്ലെങ്കിൽ താലൂക്ക് സപ്ലൈ ഓഫീസ് (TSO) / അക്ഷയ കേന്ദ്രം."
    },
    mode: {
      en: "Online & Offline",
      ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
    },
    steps: {
      en: [
        "Log in to the Kerala Civil Supplies portal.",
        "Select service (New Card, Member Addition, Correction, etc.).",
        "Upload Aadhaar cards, address proof, and member photos.",
        "TSO / Rationing Inspector scrutinizes and approves the request.",
        "Download e-Ration card or receive updated card."
      ],
      ml: [
        "സിവിൽ സപ്ലൈസ് സിറ്റിസൺ പോർട്ടലിൽ അക്കൗണ്ട് ഉണ്ടാക്കി ലോഗിൻ ചെയ്യുക.",
        "ആവശ്യമുള്ള സർവീസ് തിരഞ്ഞെടുത്ത് ആധാർ വിവരങ്ങളും രേഖകളും അപ്‌ലോഡ് ചെയ്യുക.",
        "റേഷനിംഗ് ഇൻസ്പെക്ടറുടെ പരിശോധനയ്ക്ക് ശേഷം അപേക്ഷ അംഗീകരിക്കും.",
        "ഇ-റേഷൻ കാർഡ് ഓൺലൈനായി ഡൗൺലോഡ് ചെയ്യാം."
      ]
    },
    officialUrl: "https://ecitizen.civilsupplieskerala.gov.in",
    notes: {
      en: "All family members must complete Aadhaar mustering to prevent ration quota suspension.",
      ml: "റേഷൻ വിഹിതം തടസ്സപ്പെടാതിരിക്കാൻ എല്ലാ അംഗങ്ങളുടെയും ആധാർ മസ്റ്ററിംഗ് പൂർത്തിയാക്കിയിരിക്കണം."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "social-security-pension",
    category: "government",
    icon: "🧓",
    name: {
      en: "Social Security Pension",
      ml: "സാമൂഹ്യ സുരക്ഷാ പെൻഷൻ"
    },
    summary: {
      en: "Direct financial support for senior citizens, widows, disabled persons, and agriculture workers under Sevana Pension.",
      ml: "വാർദ്ധക്യകാല, വിധവാ, വികലാംഗ, കർഷകത്തൊഴിലാളി പെൻഷനുകൾ നൽകുന്ന ക്ഷേമ പദ്ധതി."
    },
    whoNeeds: {
      en: "Eligible low-income seniors (age 60+), persons with disabilities, widows, or unmarried women aged 50+.",
      ml: "സാമ്പത്തികമായി പിന്നാക്കം നിൽക്കുന്ന 60 വയസ്സ് കഴിഞ്ഞ മുതിർന്ന പൗരന്മാർ, വിധവകൾ, ഭിന്നശേഷിക്കാർ."
    },
    eligibility: {
      en: "Kerala residents whose annual family income is below prescribed limits (typically Rs. 1 Lakh) with no government pensioner in the family.",
      ml: "കുടുംബ വാർഷിക വരുമാനം നിശ്ചിത പരിധിയിൽ താഴെയുള്ളവരും സർക്കാർ സർവീസ് പെൻഷൻ ലഭിക്കാത്തവരുമായ കേരളീയർ."
    },
    documents: {
      en: [
        "Aadhaar Card",
        "Ration Card copy",
        "Age proof (School certificate, Birth certificate, or Medical board certificate)",
        "Income Certificate issued by Revenue Village Officer",
        "Bank Passbook copy (single account in applicant's name)"
      ],
      ml: [
        "ആധാർ കാർഡ്",
        "റേഷൻ കാർഡ് പകർപ്പ്",
        "പ്രായം തെളിയിക്കുന്ന രേഖ",
        "വില്ലേജ് ഓഫീസിൽ നിന്നുള്ള വരുമാന സർട്ടിഫിക്കറ്റ്",
        "അപേക്ഷകന്റെ പേരിലുള്ള ബാങ്ക് പാസ്ബുക്ക് പകർപ്പ്"
      ]
    },
    additionalDocs: {
      en: [
        "Disability certificate (40%+ disability) for disability pension",
        "Non-remarriage certificate for widow pension"
      ],
      ml: [
        "ഭിന്നശേഷി സർട്ടിഫിക്കറ്റ് (വികലാംഗ പെൻഷന്)",
        "പുനർവിവാഹം ചെയ്തിട്ടില്ലെന്ന സർട്ടിഫിക്കറ്റ് (വിധവാ പെൻഷന്)"
      ]
    },
    whereToApply: {
      en: "Local Grama Panchayath, Municipality, or Municipal Corporation office, or via Sevana Pension portal.",
      ml: "ഗ്രാമപഞ്ചായത്ത് / നഗരസഭാ ഓഫീസ് അല്ലെങ്കിൽ സെവന പെൻഷൻ പോർട്ടൽ വഴി."
    },
    mode: {
      en: "Offline submission with online tracking",
      ml: "നേരിട്ടുള്ള അപേക്ഷ & ഓൺലൈൻ ട്രാക്കിംഗ്"
    },
    steps: {
      en: [
        "Collect application form from local body or download from Sevana Pension portal.",
        "Attach income, age, bank, and Aadhaar copies.",
        "Submit to the Secretary of the concerned Grama Panchayath / Municipality.",
        "Enquiry is conducted by the local welfare standing committee.",
        "Pension is sanctioned and credited directly to bank account or disbursed via cooperative bank."
      ],
      ml: [
        "നിശ്ചിത ഫോറത്തിൽ വരുമാന, ആധാർ, ബാങ്ക് രേഖകൾ സഹിതം അപേക്ഷ തയ്യാറാക്കുക.",
        "പഞ്ചായത്ത് / നഗരസഭ ഓഫീസിൽ സമർപ്പിക്കുക.",
        "ക്ഷേമകാര്യ സമിതിയുടെ അന്വേഷണത്തിന് ശേഷം കൗൺസിൽ/പഞ്ചായത്ത് സമിതി പെൻഷൻ അനുവദിക്കുന്നു.",
        "തുക ബാങ്ക് അക്കൗണ്ട് വഴിയോ സഹകരണ ബാങ്ക് മുഖേനയോ വീട്ടിലെത്തും."
      ]
    },
    officialUrl: "https://welfarepension.lsgkerala.gov.in",
    notes: {
      en: "Annual income re-certification and biometric mustering are mandatory to keep pensions active.",
      ml: "പെൻഷൻ മുടങ്ങാതെ ലഭിക്കാൻ വാർഷിക വരുമാന സർട്ടിഫിക്കറ്റും ആധാർ മസ്റ്ററിംഗും കൃത്യമായി ചെയ്യണം."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "property-building-services",
    category: "government",
    icon: "🏗️",
    name: {
      en: "Building & Property Services",
      ml: "കെട്ടിട / വസ്തു സേവനങ്ങൾ (സഞ്ചയ)"
    },
    summary: {
      en: "Local Self Government services for building permits, building tax assessment, and property ownership transfer.",
      ml: "കെട്ടിട നിർമ്മാണ പെർമിറ്റ്, കെട്ടിട നികുതി അടയ്ക്കൽ, ഉടമസ്ഥാവകാശ മാറ്റം തുടങ്ങിയ തദ്ദേശ സ്ഥാപന സേവനങ്ങൾ."
    },
    whoNeeds: {
      en: "Landowners constructing buildings, paying municipal property tax, or modifying ownership names.",
      ml: "വീട് / കെട്ടിടം പണിയുന്നവർ, വസ്തു നികുതി അടയ്ക്കുന്നവർ, ഉടമസ്ഥാവകാശം മാറ്റുന്നവർ."
    },
    eligibility: {
      en: "Property owners having legal title deed registered within a Kerala local body jurisdiction.",
      ml: "കേരളത്തിലെ തദ്ദേശ സ്ഥാപന പരിധിയിൽ ഭൂമിയോ കെട്ടിടമോ ഉള്ള ഉടമകൾ."
    },
    documents: {
      en: [
        "Registered Title Deed (Aadhaaram) copy",
        "Latest Land Tax Receipt (Karam receipt)",
        "Approved Building Plan & Drawings (prepared by licensed engineer/architect)",
        "Possession Certificate and Location Sketch from Village Office"
      ],
      ml: [
        "ആധാരത്തിന്റെ പകർപ്പ്",
        "നടപ്പു സാമ്പത്തിക വർഷത്തെ ഭൂനികുതി രസീത്",
        "ലൈസൻസുള്ള എൻജിനീയർ തയ്യാറാക്കിയ കെട്ടിട പ്ലാൻ",
        "വില്ലേജ് ഓഫീസിൽ നിന്നുള്ള കൈവശാവകാശ സർട്ടിഫിക്കറ്റും ലൊക്കേഷൻ സ്കെച്ചും"
      ]
    },
    additionalDocs: {
      en: [
        "Fire / Pollution / Coastal Regulation Zone (CRZ) clearance if building falls in specific zones"
      ],
      ml: [
        "തീരദേശ മേഖലയോ വലിയ കെട്ടിടങ്ങളോ ആണെങ്കിൽ CRZ / ഫയർ എൻ.ഒ.സി"
      ]
    },
    whereToApply: {
      en: "Sanchaya / Intelligent Building Plan Management System (IBPMS) via LSGD Kerala or local body counter.",
      ml: "സഞ്ചയ (Sanchaya) / ഐ.ബി.പി.എം.എസ് (IBPMS) പോർട്ടൽ വഴി."
    },
    mode: {
      en: "Online & Offline",
      ml: "ഓൺലൈൻ & തദ്ദേശ സ്ഥാപന ഓഫീസ്"
    },
    steps: {
      en: [
        "Submit plan drawings online through registered architect on IBPMS.",
        "Pay scrutiny fee online.",
        "Site inspection is conducted by LSGD Assistant Engineer / Overseer.",
        "Building permit is generated digitally.",
        "Pay annual building tax through Sanchaya portal."
      ],
      ml: [
        "എൻജിനീയർ മുഖേന IBPMS പോർട്ടൽ വഴി പ്ലാനും രേഖകളും അപ്‌ലോഡ് ചെയ്യുക.",
        "ഫീസ് അടച്ച ശേഷം തദ്ദേശ സ്ഥാപന ഉദ്യോഗസ്ഥർ സ്ഥലം സന്ദർശിച്ച് പരിശോധിക്കും.",
        "പെർമിറ്റ് അനുവദിച്ചാൽ നിർമ്മാണം ആരംഭിക്കാം. തുടർന്ന് സഞ്ചയ വഴി നികുതി അടയ്ക്കാം."
      ]
    },
    officialUrl: "https://tax.lsgkerala.gov.in",
    notes: {
      en: "Ensure construction strictly aligns with Kerala Panchayat / Municipality Building Rules (KMBR/KPBR).",
      ml: "കെട്ടിട നിർമ്മാണ ചട്ടങ്ങൾ (KMBR / KPBR) പൂർണ്ണമായും പാലിക്കുന്നുണ്ടെന്ന് ഉറപ്പാക്കുക."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "trade-licence",
    category: "government",
    icon: "🏪",
    name: {
      en: "Trade Licence",
      ml: "വ്യാപാര ലൈസൻസ് (K-SWIFT)"
    },
    summary: {
      en: "Mandatory municipal operating permit for shops, commercial establishments, and manufacturing units.",
      ml: "കടകൾ, വാണിജ്യ സ്ഥാപനങ്ങൾ, വ്യവസായങ്ങൾ എന്നിവ പ്രവർത്തിപ്പിക്കാൻ തദ്ദേശ സ്ഥാപനത്തിൽ നിന്ന് ലഭിക്കേണ്ട ലൈസൻസ്."
    },
    whoNeeds: {
      en: "Entrepreneurs, shopkeepers, traders, and small business operators in Kerala.",
      ml: "കേരളത്തിൽ കച്ചവട സ്ഥാപനങ്ങളോ വ്യവസായങ്ങളോ ആരംഭിക്കുന്ന വ്യാപാരികൾ."
    },
    eligibility: {
      en: "Any business entity or proprietor operating within lawful zoning and safety standards.",
      ml: "നിയമാനുസൃതമായി വാണിജ്യ സ്ഥാപനങ്ങൾ നടത്തുന്ന ഏതൊരു വ്യക്തിക്കും/സ്ഥാപനത്തിനും."
    },
    documents: {
      en: [
        "Proof of ownership of premises (Building Tax receipt) or Registered Rent/Lease Agreement",
        "Applicant Identity Proof (Aadhaar, PAN, Passport)",
        "Consent letter from building owner",
        "Site sketch / business layout description"
      ],
      ml: [
        "കെട്ടിട നികുതി രസീത് അല്ലെങ്കിൽ രജിസ്റ്റർ ചെയ്ത വാടകക്കരാർ",
        "വ്യാപാരിയുടെ ആധാർ / പാൻ കാർഡ്",
        "കെട്ടിട ഉടമയുടെ സമ്മതപത്രം",
        "സ്ഥാപനത്തിന്റെ ലൊക്കേഷൻ വിവരങ്ങൾ"
      ]
    },
    additionalDocs: {
      en: [
        "Pollution Control Board Consent, Fire NOC, or FSSAI license depending on business type"
      ],
      ml: [
        "ഭക്ഷണശാലകൾക്ക് FSSAI ലൈസൻസ്, മലിനീകരണ നിയന്ത്രണ ബോർഡ് അനുമതി (ആവശ്യമെങ്കിൽ)"
      ]
    },
    whereToApply: {
      en: "K-SWIFT Portal (Single Window Interface for Fast and Transparent Clearances) or LSGD Secretary.",
      ml: "കെ-സ്വിഫ്റ്റ് (K-SWIFT) പോർട്ടൽ അല്ലെങ്കിൽ ബന്ധപ്പെട്ട തദ്ദേശ സ്ഥാപനം."
    },
    mode: {
      en: "Online (K-SWIFT)",
      ml: "ഓൺലൈൻ (കെ-സ്വിഫ്റ്റ് പോർട്ടൽ)"
    },
    steps: {
      en: [
        "Register enterprise profile on K-SWIFT single window portal.",
        "Select trade category and upload lease agreement and building tax receipt.",
        "Self-certify compliance for low-risk micro-enterprises.",
        "Pay applicable license fee online.",
        "Download instantly acknowledged or approved trade license."
      ],
      ml: [
        "കെ-സ്വിഫ്റ്റ് പോർട്ടലിൽ സ്ഥാപനത്തിന്റെ വിവരങ്ങൾ രജിസ്റ്റർ ചെയ്യുക.",
        "വാടകക്കരാർ, തിരിച്ചറിയൽ രേഖകൾ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക.",
        "നിശ്ചിത ഫീസ് ഓൺലൈനായി അടയ്ക്കുക.",
        "അനുമതിക്ക് ശേഷം ഡിജിറ്റൽ ലൈസൻസ് പ്രിന്റ് എടുക്കാം."
      ]
    },
    officialUrl: "https://kswift.kerala.gov.in",
    notes: {
      en: "Micro and small low-risk enterprises enjoy swift deeming provisions under Kerala MSME facilitation acts.",
      ml: "ചെറുകിട സംരംഭങ്ങൾക്ക് വേഗത്തിൽ ലൈസൻസ് ലഭ്യമാക്കാൻ പ്രത്യേക ഇളവുകളുണ്ട്."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "government-grievance",
    category: "government",
    icon: "📢",
    name: {
      en: "Government Grievance Redressal",
      ml: "പരാതി പരിഹാരം (CMO Portal)"
    },
    summary: {
      en: "Direct portal to lodge administrative complaints and petitions with the Chief Minister's Office and departments.",
      ml: "മുഖ്യമന്ത്രിയുടെ പരാതി പരിഹാര സെല്ലിലേക്കും വിവിധ വകുപ്പുകളിലേക്കും നേരിട്ട് പരാതി അയക്കാനുള്ള സംവിധാനം."
    },
    whoNeeds: {
      en: "Citizens facing administrative delays, service denials, or unaddressed public grievances.",
      ml: "സർക്കാർ ഓഫീസുകളിൽ നിന്ന് സേവനങ്ങൾ ലഭിക്കാൻ കാലതാമസമോ ബുദ്ധിമുട്ടോ നേരിടുന്ന പൗരന്മാർ."
    },
    eligibility: {
      en: "Any citizen having a bona fide grievance regarding state department services or welfare implementation.",
      ml: "കേരള സർക്കാരിന്റെ ഭരണനിർവ്വഹണവുമായി ബന്ധപ്പെട്ട് പരാതിയുള്ള ഏതൊരു വ്യക്തിക്കും."
    },
    documents: {
      en: [
        "Petitioner's Identity Proof (Aadhaar, Voter ID, or Phone number)",
        "Written petition or grievance statement with specific department details",
        "Copies of previous complaint acknowledgements or relevant reference letters"
      ],
      ml: [
        "അപേക്ഷകന്റെ തിരിച്ചറിയൽ രേഖ / ഫോൺ നമ്പർ",
        "വ്യക്തമായി എഴുതി തയ്യാറാക്കിയ പരാതി",
        "മുമ്പ് നൽകിയ അപേക്ഷകളുടെ പകർപ്പുകൾ (ഉണ്ടെങ്കിൽ)"
      ]
    },
    additionalDocs: {
      en: [
        "Supporting photographs or documentary evidence of non-action"
      ],
      ml: [
        "പരാതിക്ക് ആധാരമായ തെളിവുകൾ / ഫോട്ടോകൾ"
      ]
    },
    whereToApply: {
      en: "Chief Minister's Public Grievance Redressal Cell (CMO Portal: cmo.kerala.gov.in) or District Collectorate grievance sessions.",
      ml: "മുഖ്യമന്ത്രിയുടെ പരാതി പരിഹാര പോർട്ടൽ (cmo.kerala.gov.in) അല്ലെങ്കിൽ കളക്ടറേറ്റ് പരാതി പരിഹാര അദാലത്തുകൾ."
    },
    mode: {
      en: "Online & Offline",
      ml: "ഓൺലൈൻ & കളക്ടറേറ്റ്"
    },
    steps: {
      en: [
        "Log in with mobile OTP on the CMO grievance portal.",
        "Specify the affected district, taluk, and relevant department.",
        "Write the complaint and upload supporting documents.",
        "Submit and receive unique Petition Docket Number.",
        "Track action taken reports online."
      ],
      ml: [
        "സി.എം.ഒ പോർട്ടലിൽ മൊബൈൽ നമ്പർ ഉപയോഗിച്ച് ലോഗിൻ ചെയ്യുക.",
        "ജില്ലയും ബന്ധപ്പെട്ട വകുപ്പും തിരഞ്ഞെടുത്ത് പരാതി രേഖപ്പെടുത്തുക.",
        "തെളിവുകൾ അപ്‌ലോഡ് ചെയ്ത് സമർപ്പിക്കുക.",
        "ലഭിക്കുന്ന പെറ്റീഷൻ നമ്പർ ഉപയോഗിച്ച് നടപടികൾ നിരീക്ഷിക്കുക."
      ]
    },
    officialUrl: "https://cmo.kerala.gov.in",
    notes: {
      en: "Matters under judicial consideration or private civil disputes cannot be adjudicated through this cell.",
      ml: "കോടതിയുടെ പരിഗണനയിലിരിക്കുന്ന കേസുകളും വ്യക്തിപരമായ തർക്കങ്ങളും ഈ പോർട്ടൽ വഴി പരിഗണിക്കില്ല."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "rti-services",
    category: "government",
    icon: "📖",
    name: {
      en: "Right to Information (RTI)",
      ml: "വിവരാവകാശ നിയമം (RTI)"
    },
    summary: {
      en: "Statutory requests to public authorities to inspect records or obtain certified government information.",
      ml: "വിവരാവകാശ നിയമപ്രകാരം സർക്കാർ വകുപ്പുകളിൽ നിന്നും പൊതുവിവരങ്ങൾ ലഭ്യമാക്കാനുള്ള സംവിധാനം."
    },
    whoNeeds: {
      en: "Any Indian citizen seeking official information, file inspection, or status of public works.",
      ml: "സർക്കാർ ഫയലുകൾ, പദ്ധതികൾ, ഉത്തരവുകൾ എന്നിവയെക്കുറിച്ചുള്ള ഔദ്യോഗിക വിവരങ്ങൾ അറിയാൻ ആഗ്രഹിക്കുന്നവർ."
    },
    eligibility: {
      en: "All Indian citizens under the Right to Information Act, 2005.",
      ml: "2005-ലെ വിവരാവകാശ നിയമപ്രകാരം ഏതൊരു ഇന്ത്യൻ പൗരനും."
    },
    documents: {
      en: [
        "Prescribed RTI application letter specifying clear, pointed questions",
        "Proof of payment of statutory Rs. 10 application fee (court fee stamp, treasury challan, or online receipt)",
        "BPL Certificate (if claiming fee exemption)"
      ],
      ml: [
        "വ്യക്തമായ ചോദ്യങ്ങൾ അടങ്ങിയ വിവരാവകാശ അപേക്ഷ",
        "10 രൂപയുടെ ഫീസ് (കോർട്ട് ഫീ സ്റ്റാമ്പ് / ചെല്ലാൻ / ഓൺലൈൻ ഫീസ്)",
        "ദാരിദ്ര്യരേഖയ്ക്ക് താഴെയുള്ളവരാണെങ്കിൽ (BPL) തെളിയിക്കുന്ന രേഖ"
      ]
    },
    additionalDocs: {
      en: [
        "Postal order or demand draft in case of offline postal submission"
      ],
      ml: [
        "തപാൽ വഴിയാണെങ്കിൽ പോസ്റ്റൽ ഓർഡർ"
      ]
    },
    whereToApply: {
      en: "Online via Kerala RTI Online Portal or physical letter addressed to State Public Information Officer (SPIO) of concerned office.",
      ml: "കേരള ആർ.ടി.ഐ ഓൺലൈൻ പോർട്ടൽ (rtionline.kerala.gov.in) അല്ലെങ്കിൽ ബന്ധപ്പെട്ട ഓഫീസിലെ പബ്ലിക് ഇൻഫർമേഷൻ ഓഫീസർക്ക് (SPIO)."
    },
    mode: {
      en: "Online & Offline by Post",
      ml: "ഓൺലൈൻ & തപാൽ വഴി"
    },
    steps: {
      en: [
        "Identify the exact government department and office holding the records.",
        "Draft questions seeking specific facts, orders, or records.",
        "Submit via rtionline.kerala.gov.in or post with Rs. 10 stamp.",
        "SPIO must reply within the statutory 30 days window.",
        "File First Appeal before First Appellate Authority if reply is delayed or denied."
      ],
      ml: [
        "വിവരം ലഭ്യമാകേണ്ട കൃത്യമായ വകുപ്പും ഓഫീസും കണ്ടെത്തുക.",
        "വ്യക്തവും ലളിതവുമായ ചോദ്യങ്ങൾ തയ്യാറാക്കുക.",
        "ഓൺലൈനായോ 10 രൂപ കോർട്ട് ഫീ സ്റ്റാമ്പ് പതിച്ച് തപാലിലോ അയക്കുക.",
        "30 ദിവസത്തിനകം വിവരം ലഭ്യമാക്കാൻ ഉദ്യോഗസ്ഥർ ബാധ്യസ്ഥരാണ്."
      ]
    },
    officialUrl: "https://rtionline.kerala.gov.in",
    notes: {
      en: "Information exempt under Section 8 (national security, personal privacy, judicial privilege) cannot be disclosed.",
      ml: "ദേശസുരക്ഷ, വ്യക്തിഗത സ്വകാര്യത തുടങ്ങിയവയുമായി ബന്ധപ്പെട്ട വിവരങ്ങൾ വെളിപ്പെടുത്താൻ സാധിക്കില്ല."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "land-tax-services",
    category: "government",
    icon: "🌾",
    name: {
      en: "Land Tax Services",
      ml: "ഭൂനികുതി സേവനങ്ങൾ (റവന്യൂ)"
    },
    summary: {
      en: "Online remittance of basic land tax (Karam) and digital tax receipt generation via Revenue Portal.",
      ml: "റവന്യൂ പോർട്ടൽ വഴി ഓൺലൈനായി അടിസ്ഥാന ഭൂനികുതി (കരം) ഒടുക്കുന്നതിനും രസീത് ലഭ്യമാക്കുന്നതിനുമുള്ള സേവനം."
    },
    whoNeeds: {
      en: "All registered landowners in Kerala paying annual land tax for legal verification or banking loans.",
      ml: "കേരളത്തിൽ ഭൂമിയുള്ള എല്ലാ ഉടമസ്ഥരും (വാർഷിക കരം അടയ്ക്കുന്നതിനും രസീത് ലഭിക്കുന്നതിനും)."
    },
    eligibility: {
      en: "Titled landowners having registered Thandaper and land records in Kerala Revenue Village registers.",
      ml: "വില്ലേജ് രേഖകളിൽ താണ്ഡപ്പേരുള്ള ഭൂവുടമകൾ."
    },
    documents: {
      en: [
        "Previous land tax receipt or Thandaper account number",
        "District, Taluk, Village, and Survey/Subdivision numbers",
        "Aadhaar / Registered mobile number for OTP login"
      ],
      ml: [
        "മുൻ വർഷത്തെ നികുതി രസീത് അല്ലെങ്കിൽ താണ്ഡപ്പേര് നമ്പർ",
        "ജില്ല, താലൂക്ക്, വില്ലേജ്, സർവ്വേ നമ്പർ",
        "ലോഗിൻ ചെയ്യുന്നതിനുള്ള മൊബൈൽ നമ്പർ"
      ]
    },
    additionalDocs: {
      en: [
        "Title Deed (Aadhaaram) and mutation (Pokkuvaravu) order if paying for newly transferred property"
      ],
      ml: [
        "പുതിയ ഭൂമിയാണെങ്കിൽ പോക്കുവരവ് ഉത്തരവും ആധാര പകർപ്പും"
      ]
    },
    whereToApply: {
      en: "Revenue Department Citizen Portal (revenue.kerala.gov.in) or local Village Office.",
      ml: "റവന്യൂ വകുപ്പ് പോർട്ടൽ (revenue.kerala.gov.in) അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ്."
    },
    mode: {
      en: "100% Online & Village Office",
      ml: "ഓൺലൈൻ & വില്ലേജ് ഓഫീസ്"
    },
    steps: {
      en: [
        "Register or log in to the Kerala Revenue Department portal.",
        "Enter District, Taluk, Village, and Survey or Thandaper number to fetch dues.",
        "Verify property extent, owner details, and tax amount.",
        "Pay through e-Treasury gateway (UPI, Net Banking, Cards) and download instant receipt."
      ],
      ml: [
        "റവന്യൂ പോർട്ടലിൽ ലോഗിൻ ചെയ്യുക.",
        "വില്ലേജും സർവ്വേ നമ്പറും നൽകി നികുതി തുക പരിശോധിക്കുക.",
        "യു.പി.ഐ അല്ലെങ്കിൽ കാർഡ് വഴി ഓൺലൈനായി പണം അടയ്ക്കുക.",
        "ഡിജിറ്റൽ നികുതി രസീത് ഡൗൺലോഡ് ചെയ്യുക."
      ]
    },
    officialUrl: "https://revenue.kerala.gov.in",
    notes: {
      en: "Keep the downloaded digital tax receipt safe; it serves as primary proof of ongoing lawful land possession.",
      ml: "ഡൗൺലോഡ് ചെയ്യുന്ന നികുതി രസീത് കൈവശാവകാശം തെളിയിക്കുന്ന പ്രധാന രേഖയാണ്."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "thandaper-services",
    category: "government",
    icon: "📂",
    name: {
      en: "Thandaper Services & Mutation (Pokkuvaravu)",
      ml: "താണ്ഡപ്പേര് സേവനങ്ങളും പോക്കുവരവും"
    },
    summary: {
      en: "Revenue registry services for land transfer mutation (Pokkuvaravu) and Unique Thandaper assignment.",
      ml: "ഭൂമി രജിസ്ട്രേഷന് ശേഷമുള്ള പോക്കുവരവ് നടപടികളും താണ്ഡപ്പേര് അക്കൗണ്ട് തിരുത്തലുകളും."
    },
    whoNeeds: {
      en: "Citizens who recently bought, inherited, or received land by gift requiring record-of-rights transfer.",
      ml: "പുതിയതായി സ്ഥലം വാങ്ങിയവർ, ഭാഗപത്രത്തിലൂടെയോ ധനനിശ്ചയത്തിലൂടെയോ ഭൂമി ലഭിച്ചവർ."
    },
    eligibility: {
      en: "Registered title deed holders whose transactions have been registered at the Sub-Registrar Office.",
      ml: "സബ് രജിസ്ട്രാർ ഓഫീസിൽ പ്രമാണം രജിസ്റ്റർ ചെയ്ത വസ്തു ഉടമകൾ."
    },
    documents: {
      en: [
        "Registered Title Deed (Aadhaaram) copy",
        "Encumbrance Certificate (EC)",
        "Prior title deed (Munaadhaaram) copy",
        "Latest Land Tax receipt of previous owner"
      ],
      ml: [
        "രജിസ്റ്റർ ചെയ്ത പുതിയ പ്രമാണത്തിന്റെ പകർപ്പ്",
        "ബാധ്യതാ സർട്ടിഫിക്കറ്റ് (EC)",
        "മുന്നാധാര പകർപ്പ്",
        "മുൻ ഉടമയുടെ നികുതി രസീത്"
      ]
    },
    additionalDocs: {
      en: [
        "Legal heirship certificate / Will probate (if claiming ownership through inheritance)"
      ],
      ml: [
        "അനന്തരാവകാശ സർട്ടിഫിക്കറ്റ് (പാരമ്പര്യമായി ലഭിച്ച സ്വത്താണെങ്കിൽ)"
      ]
    },
    whereToApply: {
      en: "Online via Revenue Portal (revenue.kerala.gov.in) integrated with PEARL SRO registration or Village Office.",
      ml: "റവന്യൂ പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ് / അക്ഷയ കേന്ദ്രം."
    },
    mode: {
      en: "Online & Village Office",
      ml: "ഓൺലൈൻ & വില്ലേജ് ഓഫീസ്"
    },
    steps: {
      en: [
        "Following SRO deed registration, apply for online mutation (Pokkuvaravu) on Revenue Portal.",
        "Village Officer scrutinizes deed, field sketch, and title flow.",
        "Revenue assessment is sanctioned and new Thandaper account number is generated.",
        "Pay land tax under the newly assigned Thandaper."
      ],
      ml: [
        "ആധാരം രജിസ്റ്റർ ചെയ്ത ശേഷം റവന്യൂ പോർട്ടൽ വഴി പോക്കുവരവിന് അപേക്ഷിക്കുക.",
        "വില്ലേജ് ഓഫീസർ രേഖകൾ പരിശോധിച്ച് റിപ്പോർട്ട് തയ്യാറാക്കുന്നു.",
        "പോക്കുവരവ് പൂർത്തിയായി പുതിയ താണ്ഡപ്പേര് നമ്പർ ലഭിക്കുന്നു.",
        "തുടർന്ന് പുതിയ നമ്പറിൽ കരം അടയ്ക്കാം."
      ]
    },
    officialUrl: "https://revenue.kerala.gov.in",
    notes: {
      en: "Automated mutation initiation is enabled in most SROs under the integrated e-District/PEARL system.",
      ml: "രജിസ്ട്രേഷൻ സമയത്ത് തന്നെ പല ഓഫീസുകളിലും ഓൺലൈൻ പോക്കുവരവ് അപേക്ഷ സ്വമേധയാ കൈമാറ്റം ചെയ്യപ്പെടുന്നുണ്ട്."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "land-conversion",
    category: "government",
    icon: "🚜",
    name: {
      en: "Land Conversion (Data Bank & Form 5/6/7)",
      ml: "തണ്ണീർത്തട / നെൽവയൽ തരംമാറ്റം (ഡാറ്റാ ബാങ്ക്)"
    },
    summary: {
      en: "Statutory regularization of unnotified land and paddy land conversion under Kerala Conservation of Paddy Land and Wetland Act.",
      ml: "നെൽവയൽ തണ്ണീർത്തട സംരക്ഷണ നിയമപ്രകാരം ഡാറ്റാ ബാങ്കിൽ നിന്നുള്ള ഒഴിവാക്കലും ഭൂമി തരംമാറ്റ അപേക്ഷകളും."
    },
    whoNeeds: {
      en: "Landowners whose dry land is wrongly categorized as Nilam/Paddy land in revenue Data Bank registers.",
      ml: "പുരയിടമായി ഉപയോഗിക്കുന്ന സ്ഥലം ഡാറ്റാ ബാങ്കിലോ ബി.ടി.ആറിലോ 'നിലം' എന്ന് തെറ്റായി രേഖപ്പെടുത്തിയിട്ടുള്ളവർ."
    },
    eligibility: {
      en: "Owners of land reclaimed prior to 2008 or seeking statutory exemption under Forms 5, 6, or 7.",
      ml: "2008-ന് മുൻപ് നികത്തപ്പെട്ട പുരയിട ഭൂമിയുടെ ഉടമസ്ഥർ (നിയമപരമായ വ്യവസ്ഥകൾക്ക് വിധേയമായി)."
    },
    documents: {
      en: [
        "Title Deed (Aadhaaram) and prior title deeds",
        "Latest Land Tax Receipt",
        "Possession Certificate and Location Sketch",
        "Certified extract of the local Data Bank from Agricultural Office (Krishi Bhavan)"
      ],
      ml: [
        "ആധാരത്തിന്റെ പകർപ്പ്",
        "നടപ്പു വർഷത്തെ ഭൂനികുതി രസീത്",
        "കൈവശാവകാശ സർട്ടിഫിക്കറ്റും ലൊക്കേഷൻ സ്കെച്ചും",
        "കൃഷിഭവനിൽ നിന്നുള്ള ഡാറ്റാ ബാങ്ക് പകർപ്പ്"
      ]
    },
    additionalDocs: {
      en: [
        "Satellite imagery analysis report from KSREC (Kerala State Remote Sensing and Environment Centre)"
      ],
      ml: [
        "കെ.എസ്.ആർ.ഇ.സി (KSREC) ഉപഗ്രഹ ചിത്ര പരിശോധനാ റിപ്പോർട്ട്"
      ]
    },
    whereToApply: {
      en: "Revenue Department Portal (revenue.kerala.gov.in) to concerned Revenue Divisional Officer (RDO).",
      ml: "റവന്യൂ പോർട്ടൽ വഴി ബന്ധപ്പെട്ട ആർ.ഡി.ഒ (RDO) ക്ക്."
    },
    mode: {
      en: "Online Portal & RDO Statutory Scrutiny",
      ml: "ഓൺലൈൻ & ആർ.ഡി.ഒ തല പരിശോധന"
    },
    steps: {
      en: [
        "Submit Form 5 online for removal from Data Bank or Form 6 for change of nature of unnotified land.",
        "Agricultural Officer and Village Officer submit field enquiry reports.",
        "RDO conducts hearing or reviews satellite imagery.",
        "Pay statutory government conversion fee (if plot extent exceeds statutory free threshold).",
        "RDO issues order authorizing amendment of BTR (Basic Tax Register)."
      ],
      ml: [
        "ഫോം 5 (ഡാറ്റാ ബാങ്കിൽ നിന്ന് ഒഴിവാക്കാൻ) അല്ലെങ്കിൽ ഫോം 6 റവന്യൂ പോർട്ടലിൽ സമർപ്പിക്കുക.",
        "കൃഷി ഓഫീസറും വില്ലേജ് ഓഫീസറും സ്ഥലം പരിശോധിക്കുന്നു.",
        "ആർ.ഡി.ഒ യുടെ പരിശോധനയ്ക്ക് ശേഷം ആവശ്യമെങ്കിൽ സർക്കാർ ഫീസ് അടയ്ക്കുക.",
        "ഭൂമി തരംമാറ്റിക്കൊണ്ടുള്ള ഉത്തരവ് ലഭ്യമാകുന്നു."
      ]
    },
    officialUrl: "https://revenue.kerala.gov.in",
    notes: {
      en: "Plots up to 25 cents (10.11 ares) of residential land are exempt from conversion fees under prevailing government orders.",
      ml: "25 സെന്റ് വരെയുള്ള ഭൂമിക്ക് പ്രത്യേക സർക്കാർ ഉത്തരവുകൾ പ്രകാരം ഫീസ് ഇളവുകൾ ലഭ്യമാണ്."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "building-permit",
    category: "government",
    icon: "📐",
    name: {
      en: "Building Permit (K-SMART / IBPMS)",
      ml: "കെട്ടിട നിർമ്മാണ പെർമിറ്റ്"
    },
    summary: {
      en: "Local Self Government permit required prior to constructing, modifying, or extending any residential or commercial building.",
      ml: "വീടോ മറ്റ് കെട്ടിടങ്ങളോ നിർമ്മിക്കുന്നതിനോ പുനർനിർമ്മിക്കുന്നതിനോ തദ്ദേശ സ്ഥാപനത്തിൽ നിന്ന് ലഭിക്കേണ്ട മുൻകൂർ അനുമതി."
    },
    whoNeeds: {
      en: "Property owners constructing new houses, commercial buildings, or making structural additions.",
      ml: "പുതിയ വീട്, കെട്ടിടം എന്നിവ നിർമ്മിക്കുന്നവർ അല്ലെങ്കിൽ വിപുലീകരിക്കുന്നവർ."
    },
    eligibility: {
      en: "Landowners having valid dry land title compliant with Kerala Panchayat/Municipality Building Rules.",
      ml: "കെട്ടിട നിർമ്മാണ ചട്ടങ്ങൾ പാലിക്കുന്ന ഭൂമിയുടെ ഉടമസ്ഥർ."
    },
    documents: {
      en: [
        "Registered Title Deed and latest Land Tax Receipt",
        "Possession Certificate and Location Certificate with sketch",
        "Approved Building Plan drawings prepared by empaneled licensee / architect",
        "Site plan, service plan, and structural stability certificate"
      ],
      ml: [
        "ആധാരത്തിന്റെ പകർപ്പും ഭൂനികുതി രസീതും",
        "കൈവശാവകാശ സർട്ടിഫിക്കറ്റും ലൊക്കേഷൻ സ്കെച്ചും",
        "ലൈസൻസുള്ള എൻജിനീയർ തയ്യാറാക്കിയ കെട്ടിട പ്ലാൻ",
        "സൈറ്റ് പ്ലാനും മറ്റ് അനുബന്ധ എൻജിനീയറിംഗ് രേഖകളും"
      ]
    },
    additionalDocs: {
      en: [
        "Fire NOC, Pollution Clearance, or Coastal Regulation Zone (CRZ) clearance for specific locations"
      ],
      ml: [
        "തീരദേശ പരിപാലന അനുമതി (CRZ), ഫയർ എൻ.ഒ.സി (ബാധകമെങ്കിൽ)"
      ]
    },
    whereToApply: {
      en: "K-SMART portal (for Municipalities/Corporations) or IBPMS portal for Grama Panchayats.",
      ml: "കെ-സ്മാർട്ട് (K-SMART) അല്ലെങ്കിൽ ഐ.ബി.പി.എം.എസ് പോർട്ടൽ വഴി."
    },
    mode: {
      en: "100% Online via Empaneled Licensee",
      ml: "ഓൺലൈൻ (അംഗീകൃത എൻജിനീയർ വഴി)"
    },
    steps: {
      en: [
        "Empaneled architect/engineer uploads drawing files on K-SMART / IBPMS.",
        "System automated scrutiny checks compliance with KMBR / KPBR rules.",
        "Pay scrutiny and permit fee online.",
        "Assistant Engineer conducts site inspection; Secretary sanctions digitally signed Building Permit."
      ],
      ml: [
        "എൻജിനീയർ പ്ലാൻ പോർട്ടൽ വഴി അപ്‌ലോഡ് ചെയ്യുന്നു.",
        "കെട്ടിട നിർമ്മാണ ചട്ടങ്ങൾ പാലിക്കുന്നുണ്ടെന്ന് ഓൺലൈനായി പരിശോധിക്കുന്നു.",
        "ഫീസ് അടച്ച ശേഷം ഉദ്യോഗസ്ഥർ സ്ഥലം സന്ദർശിക്കുന്നു.",
        "ഡിജിറ്റൽ പെർമിറ്റ് അനുവദിക്കുന്നു."
      ]
    },
    officialUrl: "https://ksmart.lsgkerala.gov.in",
    notes: {
      en: "Low-risk residential houses under 300 sq. meters enjoy fast-track self-certification permits under K-SMART regulations.",
      ml: "ചെറിയ വീടുകൾക്ക് വേഗത്തിൽ അനുമതി ലഭിക്കുന്ന സെൽഫ് സർട്ടിഫിക്കേഷൻ സൗകര്യം ലഭ്യമാണ്."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "property-tax",
    category: "government",
    icon: "🏠",
    name: {
      en: "Property & Building Tax (Sanchaya)",
      ml: "വസ്തു / കെട്ടിട നികുതി (സഞ്ചയ)"
    },
    summary: {
      en: "Annual municipal tax payment for residential and commercial buildings across Panchayats, Municipalities, and Corporations.",
      ml: "തദ്ദേശ സ്വയംഭരണ സ്ഥാപനങ്ങളിലേക്ക് വർഷം തോറും അടയ്ക്കേണ്ട കെട്ടിട നികുതി സേവനങ്ങൾ."
    },
    whoNeeds: {
      en: "Building owners in Kerala paying compulsory annual local body property tax.",
      ml: "കേരളത്തിൽ വീടോ മറ്റ് കെട്ടിടങ്ങളോ സ്വന്തമായുള്ള എല്ലാ വ്യക്തികളും."
    },
    eligibility: {
      en: "Owners of assessed buildings with valid annual door numbering assigned by the local body.",
      ml: "തദ്ദേശ സ്ഥാപനങ്ങളിൽ നിന്ന് കെട്ടിട നമ്പർ അനുവദിച്ചിട്ടുള്ള ഉടമകൾ."
    },
    documents: {
      en: [
        "Building Door Number and Ward Number",
        "Previous property tax receipt or assessment notice",
        "Owner identity details"
      ],
      ml: [
        "കെട്ടിട നമ്പർ, വാർഡ് നമ്പർ",
        "മുൻ വർഷത്തെ നികുതി രസീത്",
        "ഉടമയുടെ വിവരങ്ങൾ"
      ]
    },
    additionalDocs: {
      en: [
        "Building ownership transfer certificate / deed copy if updating taxpayer name"
      ],
      ml: [
        "പേര് മാറ്റുന്നതിനായുള്ള ഉടമസ്ഥാവകാശ രേഖകൾ (ബാധകമെങ്കിൽ)"
      ]
    },
    whereToApply: {
      en: "Sanchaya LSGD Online Tax Portal (tax.lsgkerala.gov.in) or local Panchayat/Municipality fee counter.",
      ml: "സഞ്ചയ പോർട്ടൽ (tax.lsgkerala.gov.in) അല്ലെങ്കിൽ തദ്ദേശ സ്ഥാപന കൗണ്ടർ."
    },
    mode: {
      en: "100% Online & Civic Counter",
      ml: "ഓൺലൈൻ & തദ്ദേശ ഓഫീസ്"
    },
    steps: {
      en: [
        "Access Sanchaya tax portal and select local body type, district, and municipality/panchayat.",
        "Search property by Ward Number and Door Number.",
        "Review demand schedule and outstanding balance.",
        "Pay online via e-Payment gateway and download printed receipt."
      ],
      ml: [
        "സഞ്ചയ പോർട്ടലിൽ തദ്ദേശ സ്ഥാപനവും വാർഡ്, കെട്ടിട നമ്പറും നൽകുക.",
        "നികുതി കുടിശ്ശിക പരിശോധിച്ച് ഓൺലൈനായി പണം അടയ്ക്കുക.",
        "ഔദ്യോഗിക രസീത് പ്രിന്റ് എടുക്കുക."
      ]
    },
    officialUrl: "https://tax.lsgkerala.gov.in",
    notes: {
      en: "Ensure timely payment in early quarters of the financial year to avoid statutory penalty interest.",
      ml: "പിഴപ്പലിശ ഒഴിവാക്കാൻ സാമ്പത്തിക വർഷത്തിന്റെ തുടക്കത്തിൽ തന്നെ നികുതി അടയ്ക്കുക."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "trade-licence-services",
    category: "government",
    icon: "🛍️",
    name: {
      en: "Trade Licence Services (Local Bodies)",
      ml: "വ്യാപാര ലൈസൻസ് സേവനങ്ങൾ (തദ്ദേശ സ്ഥാപനങ്ങൾ)"
    },
    summary: {
      en: "Annual renewal, cancellation, and new issuance of dangerous & offensive (D&O) trade licenses by local councils.",
      ml: "തദ്ദേശ സ്ഥാപനങ്ങളിൽ നിന്നുള്ള വ്യാപാര ലൈസൻസ് എടുക്കലും വാർഷിക പുതുക്കലും."
    },
    whoNeeds: {
      en: "Commercial shop owners, clinics, workshops, godowns, and hospitality business operators.",
      ml: "വ്യാപാര സ്ഥാപനങ്ങൾ, ഹോട്ടലുകൾ, വർക്ക്‌ഷോപ്പുകൾ എന്നിവ നടത്തുന്ന വ്യാപാരികൾ."
    },
    eligibility: {
      en: "Business enterprises operating in designated zones adhering to environmental and fire norms.",
      ml: "നിയമാനുസൃത കെട്ടിടങ്ങളിൽ വ്യാപാരം നടത്തുന്ന സംരംഭകർ."
    },
    documents: {
      en: [
        "Rent agreement or building ownership tax receipt",
        "Applicant Aadhaar / PAN card",
        "Property owner consent letter",
        "Site plan / business details"
      ],
      ml: [
        "വാടകക്കരാർ അല്ലെങ്കിൽ സ്വന്തം കെട്ടിട നികുതി രസീത്",
        "ആധാർ / പാൻ കാർഡ്",
        "കെട്ടിട ഉടമയുടെ സമ്മതപത്രം",
        "സ്ഥാപനത്തിന്റെ വിവരങ്ങൾ"
      ]
    },
    additionalDocs: {
      en: [
        "FSSAI license (for food establishments) or PCB consent (for manufacturing/service units)"
      ],
      ml: [
        "ഭക്ഷ്യ സുരക്ഷാ ലൈസൻസ് (FSSAI) അല്ലെങ്കിൽ മലിനീകരണ നിയന്ത്രണ ബോർഡ് അനുമതി"
      ]
    },
    whereToApply: {
      en: "K-SMART Portal (for Municipalities/Corporations) or Citizen Portal for Panchayats.",
      ml: "കെ-സ്മാർട്ട് പോർട്ടൽ അല്ലെങ്കിൽ തദ്ദേശ സ്ഥാപന ഓഫീസ്."
    },
    mode: {
      en: "Online & Local Body Health Section",
      ml: "ഓൺലൈൻ & തദ്ദേശ ആരോഗ്യ വിഭാഗം"
    },
    steps: {
      en: [
        "Apply online via K-SMART with premises and trade category documents.",
        "Local Health Inspector conducts field premises inspection if needed.",
        "Pay prescribed statutory license fee online.",
        "Download digital Trade License."
      ],
      ml: [
        "പോർട്ടൽ വഴി വാടകക്കരാറും രേഖകളും നൽകി അപേക്ഷിക്കുക.",
        "ആരോഗ്യ വിഭാഗം ഉദ്യോഗസ്ഥരുടെ പരിശോധന നടക്കുന്നു.",
        "ഫീസ് അടച്ച് ലൈസൻസ് ഡൗൺലോഡ് ചെയ്യുക."
      ]
    },
    officialUrl: "https://ksmart.lsgkerala.gov.in",
    notes: {
      en: "Trade licenses must be renewed before the end of every financial year to avoid cancellation.",
      ml: "ഓരോ സാമ്പത്തിക വർഷവും അവസാനിക്കുന്നതിന് മുൻപ് ലൈസൻസ് പുതുക്കേണ്ടതാണ്."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "kseb-new-connection",
    category: "government",
    icon: "⚡",
    name: {
      en: "KSEB New Electricity Connection",
      ml: "കെ.എസ്.ഇ.ബി പുതിയ വൈദ്യുതി കണക്ഷൻ"
    },
    summary: {
      en: "Application for fresh single-phase or three-phase domestic, commercial, or agricultural power connections.",
      ml: "ഗാർഹിക, വാണിജ്യ ആവശ്യങ്ങൾക്കായി പുതിയ വൈദ്യുതി കണക്ഷൻ ലഭ്യമാക്കാനുള്ള കെ.എസ്.ഇ.ബി സേവനം."
    },
    whoNeeds: {
      en: "House owners, commercial establishments, and tenants requiring independent power supply.",
      ml: "പുതിയ വീട് വെച്ചവർ, സ്ഥാപനങ്ങൾ ആരംഭിക്കുന്നവർ, അധിക കണക്ഷൻ ആവശ്യമുള്ളവർ."
    },
    eligibility: {
      en: "Legal occupants or owners of premises possessing completed interior wiring certified by licensed wireman.",
      ml: "ലൈസൻസുള്ള വയർമാൻ വഴി വയറിംഗ് പൂർത്തിയാക്കിയ കെട്ടിട ഉടമകൾ അല്ലെങ്കിൽ താമസക്കാർ."
    },
    documents: {
      en: [
        "Proof of ownership (Building Tax receipt or Title deed) OR Rent/lease agreement with owner consent",
        "Aadhaar / Recognized Photo Identity Proof",
        "Wiring completion test report submitted by licensed electrical wireman",
        "Passport size photograph"
      ],
      ml: [
        "ഉടമസ്ഥാവകാശ രേഖ (കെട്ടിട നികുതി രസീത് / ആധാരം) അല്ലെങ്കിൽ വാടകക്കരാർ",
        "ആധാർ / തിരിച്ചറിയൽ രേഖ",
        "വയറിംഗ് പൂർത്തിയായ ടെസ്റ്റ് സർട്ടിഫിക്കറ്റ്",
        "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോ"
      ]
    },
    additionalDocs: {
      en: [
        "Wayleave permission from adjacent landowners if electric poles/lines cross private lands"
      ],
      ml: [
        "മറ്റ് സ്വകാര്യ സ്ഥലങ്ങളിലൂടെ ലൈൻ വലിക്കേണ്ടി വന്നാൽ വഴിസമ്മതപത്രം"
      ]
    },
    whereToApply: {
      en: "Online via KSEB Web Self Service (wss.kseb.in) or concerned local KSEB Electrical Section Office.",
      ml: "കെ.എസ്.ഇ.ബി വെബ് സെൽഫ് സർവീസ് പോർട്ടൽ (wss.kseb.in) അല്ലെങ്കിൽ സെക്ഷൻ ഓഫീസ്."
    },
    mode: {
      en: "Online Application & Field Service",
      ml: "ഓൺലൈൻ അപേക്ഷ & ഫീൽഡ് പരിശോധന"
    },
    steps: {
      en: [
        "Apply on KSEB Web Self Service selecting Section Office and connected load details.",
        "Upload ownership proof, identity proof, and wireman test report.",
        "Assistant Engineer inspects site and prepares feasibility estimate.",
        "Pay registration fee and security deposit online; KSEB technicians install meter and energize connection."
      ],
      ml: [
        "കെ.എസ്.ഇ.ബി പോർട്ടലിൽ അപേക്ഷ സമർപ്പിക്കുക.",
        "ഉദ്യോഗസ്ഥർ സ്ഥലം സന്ദർശിച്ച് എസ്റ്റിമേറ്റ് തയ്യാറാക്കുന്നു.",
        "നിശ്ചിത ഫീസ് ഓൺലൈനായി അടയ്ക്കുക.",
        "മീറ്റർ സ്ഥാപിച്ച് വൈദ്യുതി കണക്ഷൻ നൽകുന്നു."
      ]
    },
    officialUrl: "https://wss.kseb.in",
    notes: {
      en: "Domestic single-phase connections up to 5 kW do not require prior building completion certificates if ownership proof exists.",
      ml: "ചെറിയ ഗാർഹിക കണക്ഷനുകൾക്ക് വേഗത്തിൽ കണക്ഷൻ ലഭ്യമാക്കാൻ പ്രത്യേക ഇളവുകളുണ്ട്."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "kseb-bill-payment",
    category: "government",
    icon: "💡",
    name: {
      en: "KSEB Bill Payment & Consumer Services",
      ml: "കെ.എസ്.ഇ.ബി ബിൽ അടയ്ക്കലും സേവനങ്ങളും"
    },
    summary: {
      en: "Online electricity bill inquiry, instant payment, tariff change, and connected load regularisation.",
      ml: "വൈദ്യുതി ബിൽ പരിശോധിക്കൽ, ഓൺലൈൻ പേയ്മെന്റ്, താരിഫ് മാറ്റം തുടങ്ങിയ ഉപഭോക്തൃ സേവനങ്ങൾ."
    },
    whoNeeds: {
      en: "All active KSEB electricity consumers checking bi-monthly bills or paying power dues.",
      ml: "വൈദ്യുതി ബിൽ തുക പരിശോധിക്കാനും ഓൺലൈനായി അടയ്ക്കാനും ആഗ്രഹിക്കുന്ന ഉപഭോക്താക്കൾ."
    },
    eligibility: {
      en: "Any registered KSEB consumer with an active 13-digit Consumer Number.",
      ml: "13 അക്ക ഉപഭോക്തൃ നമ്പറുള്ള എല്ലാ കെ.എസ്.ഇ.ബി ഉപഭോക്താക്കൾക്കും."
    },
    documents: {
      en: [
        "13-digit KSEB Consumer Number",
        "Registered mobile number",
        "Online payment method (UPI, Net Banking, Debit/Credit Cards)"
      ],
      ml: [
        "13 അക്ക ഉപഭോക്തൃ നമ്പർ (Consumer Number)",
        "രജിസ്റ്റർ ചെയ്ത മൊബൈൽ നമ്പർ",
        "ഓൺലൈൻ പേയ്മെന്റ് സംവിധാനം (UPI, കാർഡ്)"
      ]
    },
    additionalDocs: {
      en: [
        "Ownership documents for transfer of consumer name or tariff re-categorization"
      ],
      ml: [
        "കണക്ഷന്റെ പേര് മാറ്റുന്നതിനായുള്ള രേഖകൾ (ആവശ്യമെങ്കിൽ)"
      ]
    },
    whereToApply: {
      en: "KSEB Web Self Service (wss.kseb.in) or mobile payment apps.",
      ml: "കെ.എസ്.ഇ.ബി പോർട്ടൽ (wss.kseb.in) അല്ലെങ്കിൽ യു.പി.ഐ ആപ്പുകൾ."
    },
    mode: {
      en: "100% Online",
      ml: "പൂർണ്ണമായും ഓൺലൈൻ"
    },
    steps: {
      en: [
        "Open KSEB Quick Pay portal and enter 13-digit Consumer Number.",
        "Review bill amount, due date, and energy consumption reading.",
        "Choose payment gateway and complete online transaction.",
        "Download and save digital payment acknowledgement receipt."
      ],
      ml: [
        "കെ.എസ്.ഇ.ബി ക്വിക്ക് പേ പോർട്ടലിൽ കൺസ്യൂമർ നമ്പർ നൽകുക.",
        "ബിൽ തുക പരിശോധിച്ച് യു.പി.ഐ വഴിയോ കാർഡ് വഴിയോ അടയ്ക്കുക.",
        "രസീത് ഡൗൺലോഡ് ചെയ്ത് സൂക്ഷിക്കുക."
      ]
    },
    officialUrl: "https://wss.kseb.in",
    notes: {
      en: "Pay on or before the prompt payment due date to avoid disconnection notices and late surcharge fees.",
      ml: "സർചാർജ്ജ് ഒഴിവാക്കാൻ നിശ്ചിത തീയതിക്ക് മുൻപായി ബിൽ തുക അടയ്ക്കുക."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "kseb-complaint-services",
    category: "government",
    icon: "🔌",
    name: {
      en: "KSEB Complaints & Outage Services",
      ml: "കെ.എസ്.ഇ.ബി പരാതികളും സേവനങ്ങളും"
    },
    summary: {
      en: "Lodging power breakdown complaints, voltage fluctuation reports, billing discrepancies, and meter checks.",
      ml: "വൈദ്യുതി തടസ്സം, വോൾട്ടേജ് പ്രശ്നങ്ങൾ, മീറ്റർ തകരാറുകൾ എന്നിവ അറിയിക്കാനുള്ള സംവിധാനം."
    },
    whoNeeds: {
      en: "Consumers facing power disruptions, broken wires, transformer faults, or high bill queries.",
      ml: "വൈദ്യുതി മുടങ്ങുകയോ ലൈൻ തകരാറുകൾ നേരിടുകയോ ചെയ്യുന്ന ഉപഭോക്താക്കൾ."
    },
    eligibility: {
      en: "Any citizen or electricity consumer in Kerala.",
      ml: "കേരളത്തിലെ ഏതൊരു പൗരനും."
    },
    documents: {
      en: [
        "13-digit Consumer Number (or phone number registered with section)",
        "Description of outage or electrical safety issue",
        "Contact phone number"
      ],
      ml: [
        "13 അക്ക കൺസ്യൂമർ നമ്പർ അല്ലെങ്കിൽ രജിസ്റ്റർ ചെയ്ത ഫോൺ നമ്പർ",
        "പരാതിയുടെ വിവരങ്ങൾ",
        "ബന്ധപ്പെടാനുള്ള ഫോൺ നമ്പർ"
      ]
    },
    additionalDocs: {
      en: [
        "Photographs of dangerous electrical lines / posts (if reporting public safety hazards)"
      ],
      ml: [
        "അപകടകരമായ ലൈനുകളുടെ ഫോട്ടോകൾ (ബാധകമെങ്കിൽ)"
      ]
    },
    whereToApply: {
      en: "KSEB Toll Free 1912, WhatsApp helpline 9496001912, or online via KSEB Web Self Service.",
      ml: "1912 ടോൾ ഫ്രീ നമ്പർ, വാട്സാപ്പ് (9496001912) അല്ലെങ്കിൽ വെബ് സെൽഫ് സർവീസ്."
    },
    mode: {
      en: "Online, Call (1912) & WhatsApp",
      ml: "ഓൺലൈൻ, ഫോൺ കാൾ (1912) & വാട്സാപ്പ്"
    },
    steps: {
      en: [
        "Dial 1912 or text KSEB WhatsApp assistant.",
        "Provide Consumer Number and nature of supply failure.",
        "Receive automated complaint registration docket number.",
        "KSEB field breakdown team rectifies issue and confirms resolution."
      ],
      ml: [
        "1912-ൽ വിളിക്കുകയോ വാട്സാപ്പ് വഴിയോ പരാതി അറിയിക്കുക.",
        "കൺസ്യൂമർ നമ്പറും പ്രശ്നവും വ്യക്തമാക്കുക.",
        "പരാതി നമ്പർ ലഭിക്കുകയും ജീവനക്കാർ തകരാർ പരിഹരിക്കുകയും ചെയ്യും."
      ]
    },
    officialUrl: "https://wss.kseb.in",
    notes: {
      en: "Report fallen electric wires immediately to 1912; never touch or approach snapped live electrical wires.",
      ml: "പൊട്ടിവീണ ലൈനുകൾ കണ്ടാൽ ഉടൻ 1912-ൽ അറിയിക്കുക; ലൈനുകളിൽ സ്പർശിക്കരുത്."
    },
    lastVerified: "September 2026",
    verified: true
  },
  {
    id: "kerala-police-services",
    category: "government",
    icon: "🚔",
    name: {
      en: "Kerala Police Online Services (Thuna / Pol-App)",
      ml: "കേരള പോലീസ് ഓൺലൈൻ സേവനങ്ങൾ (തുണ / പോൽ-ആപ്പ്)"
    },
    summary: {
      en: "Citizen portal for filing online complaints, reporting lost articles, senior citizen safety, and verification.",
      ml: "ഓൺലൈൻ പരാതികൾ നൽകൽ, സാധനങ്ങൾ നഷ്ടപ്പെട്ടത് റിപ്പോർട്ട് ചെയ്യൽ തുടങ്ങിയ പോലീസ് സേവനങ്ങൾ."
    },
    whoNeeds: {
      en: "Citizens needing police assistance, complaint acknowledgements, or reporting lost mobile/documents without visiting stations.",
      ml: "സ്റ്റേഷനിൽ പോകാതെ പരാതി നൽകേണ്ടവർ, രേഖകൾ/ഫോൺ നഷ്ടപ്പെട്ടവർ."
    },
    eligibility: {
      en: "Any resident or victim within the territorial jurisdiction of Kerala State.",
      ml: "കേരളത്തിൽ താമസിക്കുന്ന ഏതൊരു വ്യക്തിക്കും."
    },
    documents: {
      en: [
        "Complainant's Aadhaar / Recognized Photo Identity Proof",
        "Mobile number for OTP verification",
        "Written statement of grievance or details of lost document/article"
      ],
      ml: [
        "അപേക്ഷകന്റെ ആധാർ / തിരിച്ചറിയൽ രേഖ",
        "ഒ.ടി.പി ലഭിക്കുന്നതിനുള്ള മൊബൈൽ നമ്പർ",
        "പരാതിയുടെ വിവരങ്ങൾ അല്ലെങ്കിൽ നഷ്ടപ്പെട്ട വസ്തുവിന്റെ വിശദാംശങ്ങൾ"
      ]
    },
    additionalDocs: {
      en: [
        "IMEI number / invoice for lost mobile phone reports, or photographs of dispute"
      ],
      ml: [
        "ഫോൺ നഷ്ടപ്പെട്ടതാണെങ്കിൽ ഐ.എം.ഇ.ഐ (IMEI) നമ്പർ, ബിൽ"
      ]
    },
    whereToApply: {
      en: "Kerala Police Thuna Portal (thuna.keralapolice.gov.in) or official Pol-App mobile application.",
      ml: "കേരള പോലീസ് തുണ പോർട്ടൽ (thuna.keralapolice.gov.in) അല്ലെങ്കിൽ പോൽ-ആപ്പ് (Pol-App)."
    },
    mode: {
      en: "100% Online & Police Station Follow-up",
      ml: "ഓൺലൈൻ & പോലീസ് സ്റ്റേഷൻ"
    },
    steps: {
      en: [
        "Log in to Thuna portal or Pol-App using mobile number.",
        "Select required service (Complaint submission, Lost Report, Domestic Help verification).",
        "Submit incident details, location, and upload supporting documents.",
        "Download digital acknowledgement receipt with petition reference number to track investigation."
      ],
      ml: [
        "തുണ പോർട്ടലിലോ പോൽ-ആപ്പിലോ മൊബൈൽ നമ്പർ ഉപയോഗിച്ച് ലോഗിൻ ചെയ്യുക.",
        "ആവശ്യമായ സർവീസ് തിരഞ്ഞെടുത്ത് വിവരങ്ങൾ നൽകുക.",
        "പരാതി സമർപ്പിച്ച് രസീത് ഡൗൺലോഡ് ചെയ്യുക.",
        "പെറ്റീഷൻ നമ്പർ ഉപയോഗിച്ച് നടപടികൾ ട്രാക്ക് ചെയ്യുക."
      ]
    },
    officialUrl: "https://thuna.keralapolice.gov.in",
    notes: {
      en: "In urgent emergencies involving immediate threat to life or safety, dial emergency response number 112 directly.",
      ml: "അടിയന്തിര ഘട്ടങ്ങളിൽ 112 എന്ന നമ്പറിലേക്ക് നേരിട്ട് വിളിക്കുക."
    },
    lastVerified: "September 2026",
    verified: true
  },

  // =========================================================================
  // CATEGORY D: Education (education)
  // =========================================================================
  {
    id: "e-grantz",
    category: "education",
    icon: "🎓",
    name: {
      en: "e-Grantz Scholarship",
      ml: "ഇ-ഗ്രാന്റ്സ് (e-Grantz 3.0)"
    },
    summary: {
      en: "Direct benefit scholarship and fee concession portal for SC, ST, and socially backward students in Kerala.",
      ml: "പട്ടികജാതി, പട്ടികവർഗ്ഗ, ഒ.ഇ.സി, ഒ.ബി.സി വിദ്യാർത്ഥികൾക്ക് വിദ്യാഭ്യാസ ആനുകൂല്യങ്ങളും ഫീസ് ഇളവുകളും നൽകുന്ന പോർട്ടൽ."
    },
    whoNeeds: {
      en: "Post-matriculation students belonging to SC, ST, OEC, and eligible OBC categories studying in Kerala.",
      ml: "പോസ്റ്റ് മെട്രിക് കോഴ്സുകളിൽ (പ്ലസ് വൺ, ബിരുദം, പി.ജി, ഡിപ്ലോമ) പഠിക്കുന്ന സംവരണ വിഭാഗം വിദ്യാർത്ഥികൾ."
    },
    eligibility: {
      en: "Regular admitted students satisfying community and annual parental income limits specified by SC/ST/BCDD departments.",
      ml: "കേരളത്തിൽ റഗുലർ കോഴ്സുകളിൽ പഠിക്കുന്ന, നിശ്ചിത വരുമാന പരിധിയിലുള്ള വിദ്യാർത്ഥികൾ."
    },
    documents: {
      en: [
        "Student Aadhaar Card (must be linked to bank account for DBT)",
        "Community / Caste Certificate",
        "Income Certificate issued by Revenue Authority",
        "Bank Passbook copy with IFSC and active account number",
        "College admission allotment memo and fee receipt"
      ],
      ml: [
        "വിദ്യാർത്ഥിയുടെ ആധാർ കാർഡ് (ബാങ്കുമായി ലിങ്ക് ചെയ്തത്)",
        "ജാതി / കമ്മ്യൂണിറ്റി സർട്ടിഫിക്കറ്റ്",
        "വില്ലേജ് ഓഫീസിൽ നിന്നുള്ള വരുമാന സർട്ടിഫിക്കറ്റ്",
        "ബാങ്ക് പാസ്ബുക്ക് പകർപ്പ്",
        "അഡ്മിഷൻ അലോട്ട്മെന്റ് മെമ്മോ, ഫീസ് രസീത്"
      ]
    },
    additionalDocs: {
      en: [
        "Hostel warden certification for boarder allowance claims"
      ],
      ml: [
        "ഹോസ്റ്റൽ അലവൻസ് ലഭിക്കാൻ വാർഡന്റെ സാക്ഷ്യപത്രം"
      ]
    },
    whereToApply: {
      en: "e-Grantz 3.0 Portal (egrantz.kerala.gov.in) through the student's admitted institution desk.",
      ml: "ഇ-ഗ്രാന്റ്സ് 3.0 പോർട്ടൽ (egrantz.kerala.gov.in) അല്ലെങ്കിൽ പഠിക്കുന്ന കോളേജ് ഓഫീസ് വഴി."
    },
    mode: {
      en: "Online via Institution",
      ml: "ഓൺലൈൻ (കോളേജ് വഴി)"
    },
    steps: {
      en: [
        "Register student profile on egrantz.kerala.gov.in using Aadhaar.",
        "Upload caste, income certificates, and college admission data.",
        "Submit application to institutional clerk for college-level verification.",
        "Sanctioned funds are disbursed directly to bank account via DBT."
      ],
      ml: [
        "വിദ്യാർത്ഥി ഇ-ഗ്രാന്റ്സ് പോർട്ടലിൽ ആധാർ ഉപയോഗിച്ച് പ്രൊഫൈൽ തയ്യാറാക്കുക.",
        "ജാതി, വരുമാന സർട്ടിഫിക്കറ്റുകളും ബാങ്ക് വിവരങ്ങളും നൽകുക.",
        "കോളേജിൽ അപേക്ഷ സമർപ്പിച്ച് വെരിഫിക്കേഷൻ പൂർത്തിയാക്കുക.",
        "ഫണ്ട് നേരിട്ട് വിദ്യാർത്ഥിയുടെ ബാങ്ക് അക്കൗണ്ടിലേക്ക് എത്തും."
      ]
    },
    officialUrl: "https://egrantz.kerala.gov.in",
    notes: {
      en: "Bank account must have active NPCI Aadhaar seeding to receive DBT scholarship credits without rejection.",
      ml: "ബാങ്ക് അക്കൗണ്ട് ആധാറുമായി NPCI സീഡിംഗ് നടത്തിയിരിക്കണം."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "kerala-scholarships",
    category: "education",
    icon: "🏅",
    name: {
      en: "Kerala Higher Education Scholarships",
      ml: "കേരള സ്കോളർഷിപ്പുകൾ (DCE)"
    },
    summary: {
      en: "Higher Education and Directorate of Collegiate Education (DCE) state merit-cum-means scholarship schemes.",
      ml: "കോളേജ് വിദ്യാഭ്യാസ വകുപ്പ് നൽകുന്ന മെറിറ്റ്, വരുമാന അടിസ്ഥാനത്തിലുള്ള വിവിധ സ്കോളർഷിപ്പുകൾ."
    },
    whoNeeds: {
      en: "Undergraduate, postgraduate, and professional course students excelling in academics from economically weaker sections.",
      ml: "കോളേജ് തലത്തിൽ മികച്ച മാർക്കോടെ പഠിക്കുന്ന സാമ്പത്തികമായി പിന്നാക്കം നിൽക്കുന്ന വിദ്യാർത്ഥികൾ."
    },
    eligibility: {
      en: "Enrolled in recognized government/aided/self-financing colleges with qualifying percentage and income brackets.",
      ml: "അംഗീകൃത കോളേജുകളിൽ പഠിക്കുന്ന, നിശ്ചിത മാർക്കും വാർഷിക വരുമാന പരിധിയുമുള്ളവർ."
    },
    documents: {
      en: [
        "Student's Aadhaar Card",
        "Mark sheets of qualifying examinations (SSLC, Plus Two, Degree)",
        "Income Certificate issued by Revenue Village Officer",
        "College Bonafide Student Certificate",
        "Bank Passbook showing active account details"
      ],
      ml: [
        "വിദ്യാർത്ഥിയുടെ ആധാർ കാർഡ്",
        "മുൻ പരീക്ഷകളുടെ മാർക്ക് ലിസ്റ്റുകൾ (SSLC, പ്ലസ് ടു, ഡിഗ്രി)",
        "റവന്യൂ വരുമാന സർട്ടിഫിക്കറ്റ്",
        "കോളേജിൽ പഠിക്കുന്നു എന്ന് തെളിയിക്കുന്ന ബോണഫൈഡ് സർട്ടിഫിക്കറ്റ്",
        "ബാങ്ക് പാസ്ബുക്ക്"
      ]
    },
    additionalDocs: {
      en: [
        "Disability / Single girl child / Minority documents where specifically applicable"
      ],
      ml: [
        "പ്രത്യേക വിഭാഗങ്ങൾക്കുള്ള സർട്ടിഫിക്കറ്റുകൾ (ബാധകമെങ്കിൽ)"
      ]
    },
    whereToApply: {
      en: "DCE Scholarship Portal (dcescholarship.kerala.gov.in).",
      ml: "ഡി.സി.ഇ സ്കോളർഷിപ്പ് പോർട്ടൽ (dcescholarship.kerala.gov.in)."
    },
    mode: {
      en: "Online Application & College Verification",
      ml: "ഓൺലൈൻ അപേക്ഷ & കോളേജ് പരിശോധന"
    },
    steps: {
      en: [
        "Check annual notification on DCE portal for active scholarship schemes.",
        "Register as student and submit marks and parental income details.",
        "Print registration slip and submit with hard copies to college nodal officer.",
        "College verifies data, after which state government issues merit selection lists."
      ],
      ml: [
        "ഡി.സി.ഇ പോർട്ടലിലെ വിജ്ഞാപനം പരിശോധിച്ച് അർഹമായ സ്കോളർഷിപ്പ് തിരഞ്ഞെടുക്കുക.",
        "ഓൺലൈനായി അപേക്ഷ സമർപ്പിച്ച് മാർക്കുകളും വരുമാനവും രേഖപ്പെടുത്തുക.",
        "പ്രിന്റ് ഔട്ടും രേഖകളും കോളേജ് നോഡൽ ഓഫീസർക്ക് നൽകുക.",
        "അംഗീകാരം ലഭിച്ചാൽ തുക അക്കൗണ്ടിലേക്ക് എത്തും."
      ]
    },
    officialUrl: "https://dcescholarship.kerala.gov.in",
    notes: {
      en: "Application windows open strictly during early academic term months; check official deadlines regularly.",
      ml: "അപേക്ഷാ തീയതികൾ നിശ്ചിത സമയപരിധിക്കുള്ളിൽ മാത്രമായിരിക്കും; അറിയിപ്പുകൾ ശ്രദ്ധിക്കുക."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "educational-certificates",
    category: "education",
    icon: "📜",
    name: {
      en: "Educational Board & University Certificates",
      ml: "വിദ്യാഭ്യാസ സർട്ടിഫിക്കറ്റ് സേവനങ്ങൾ"
    },
    summary: {
      en: "Services for duplicate certificates, mark list corrections, migration, and genuineness verification from Pareeksha Bhavan / Universities.",
      ml: "എസ്.എസ്.എൽ.സി, പ്ലസ് ടു, സർവ്വകലാശാല സർട്ടിഫിക്കറ്റുകളുടെ പകർപ്പ്, തിരുത്തലുകൾ, മൈഗ്രേഷൻ സേവനങ്ങൾ."
    },
    whoNeeds: {
      en: "Alumni or students who lost original certificates, need corrections, or require migration for higher study.",
      ml: "സർട്ടിഫിക്കറ്റുകൾ നഷ്ടപ്പെട്ടവർ, പേരിലോ ജനനത്തീയതിയിലോ തിരുത്തൽ ആവശ്യമുള്ളവർ, മറ്റ് സർവ്വകലാശാലകളിലേക്ക് മാറുന്നവർ."
    },
    eligibility: {
      en: "Candidates who appeared for Kerala Board (SSLC/DHSE) or Kerala state university examinations.",
      ml: "കേരളത്തിലെ സ്കൂൾ ബോർഡ് അല്ലെങ്കിൽ സർവ്വകലാശാല പരീക്ഷകൾ എഴുതിയ വിദ്യാർത്ഥികൾ."
    },
    documents: {
      en: [
        "Copy of lost mark list / certificate (if available)",
        "Police Non-Traceable Certificate (mandatory for duplicate certificate claims)",
        "Affidavit on stamped paper certified by a Notary / Judicial Magistrate",
        "School / College head recommendation letter"
      ],
      ml: [
        "നഷ്ടപ്പെട്ട സർട്ടിഫിക്കറ്റിന്റെ പകർപ്പ് (ലഭ്യമെങ്കിൽ)",
        "പോലീസ് നൽകുന്ന നോൺ-ട്രേസബിൾ സർട്ടിഫിക്കറ്റ് (ഡ്യൂപ്ലിക്കേറ്റിന്)",
        "നോട്ടറി സാക്ഷ്യപ്പെടുത്തിയ സത്യവാങ്മൂലം",
        "സ്കൂൾ / കോളേജ് അധികൃതരുടെ ശുപാർശ കത്ത്"
      ]
    },
    additionalDocs: {
      en: [
        "Newspaper publication clipping for loss of professional university degree certificates"
      ],
      ml: [
        "പത്രപ്പരസ്യത്തിന്റെ കട്ടിംഗ് (യൂണിവേഴ്സിറ്റി ബിരുദ സർട്ടിഫിക്കറ്റുകൾക്ക്)"
      ]
    },
    whereToApply: {
      en: "Kerala Pareeksha Bhavan (for SSLC), DHSE portal (for Plus Two), or respective University exam portal (KU, MG, Calicut, Kannur, KTU).",
      ml: "പരീക്ഷാ ഭവൻ (SSLC), ഹയർ സെക്കൻഡറി ഡയറക്ടറേറ്റ് (DHSE) അല്ലെങ്കിൽ ബന്ധപ്പെട്ട യൂണിവേഴ്സിറ്റി പോർട്ടൽ."
    },
    mode: {
      en: "Online Portal or Direct Application",
      ml: "ഓൺലൈൻ & സർവ്വകലാശാല കൗണ്ടർ"
    },
    steps: {
      en: [
        "Obtain police certificate and prepare notary affidavit.",
        "Pay requisite government fee via Kerala e-Treasury or University portal.",
        "Submit application online or send by post to the Controller of Examinations.",
        "Duplicate certificate is dispatched after physical register verification."
      ],
      ml: [
        "പോലീസ് റിപ്പോർട്ടും നോട്ടറി സത്യവാങ്മൂലവും തയ്യാറാക്കുക.",
        "ഇ-ട്രഷറി വഴിയോ യൂണിവേഴ്സിറ്റി ഫീസ് കൗണ്ടർ വഴിയോ പണം അടയ്ക്കുക.",
        "പരീക്ഷാ കൺട്രോളർക്ക് അപേക്ഷ സമർപ്പിക്കുക.",
        "പരിശോധനയ്ക്ക് ശേഷം പുതിയ സർട്ടിഫിക്കറ്റ് ലഭ്യമാകും."
      ]
    },
    officialUrl: "https://pareekshabhavan.kerala.gov.in",
    notes: {
      en: "Correction in school certificates requires original admission register extract from the school first attended.",
      ml: "തിരുത്തലുകൾ വരുത്താൻ സ്കൂളിലെ പ്രവേശന രജിസ്റ്ററിലെ വിവരങ്ങൾ കൂടി പരിശോധിക്കേണ്ടതുണ്ട്."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "exam-related-services",
    category: "education",
    icon: "✍️",
    name: {
      en: "Competitive Exam & Entrance Services",
      ml: "പരീക്ഷാ സേവനങ്ങൾ (PSC / KEAM)"
    },
    summary: {
      en: "Profile registration, hall tickets, revaluation, and score verification for Kerala PSC and CEE entrance exams.",
      ml: "കേരള പി.എസ്.സി വൺ ടൈം രജിസ്ട്രേഷൻ, KEAM പ്രവേശന പരീക്ഷാ അപേക്ഷകൾ, ഹാൾടിക്കറ്റ് സേവനങ്ങൾ."
    },
    whoNeeds: {
      en: "Job aspirants applying for Kerala state public services and students seeking entrance to engineering/medical courses.",
      ml: "പി.എസ്.സി പരീക്ഷ എഴുതുന്ന ഉദ്യോഗാർത്ഥികൾ, പ്രൊഫഷണൽ കോഴ്സ് പ്രവേശന പരീക്ഷ എഴുതുന്ന വിദ്യാർത്ഥികൾ."
    },
    eligibility: {
      en: "Indian citizens meeting age and educational qualifications notified in specific gazette advertisements.",
      ml: "നിശ്ചിത വിദ്യാഭ്യാസ യോഗ്യതയും പ്രായപരിധിയുമുള്ള പൗരന്മാർ."
    },
    documents: {
      en: [
        "Scanned recent color passport photo with candidate name and date printed",
        "Scanned signature matching prescribed dimension specifications",
        "Aadhaar card or recognized identity proof",
        "Educational qualification certificates and mark sheets"
      ],
      ml: [
        "പേരും തീയതിയും രേഖപ്പെടുത്തിയ പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോ",
        "നിശ്ചിത അളവിലുള്ള ഒപ്പ് സ്കാൻ ചെയ്തത്",
        "ആധാർ അല്ലെങ്കിൽ ഔദ്യോഗിക തിരിച്ചറിയൽ രേഖ",
        "വിദ്യാഭ്യാസ യോഗ്യതാ സർട്ടിഫിക്കറ്റുകൾ"
      ]
    },
    additionalDocs: {
      en: [
        "Experience / registration council certificates (for technical/medical recruitment)"
      ],
      ml: [
        "പ്രവൃത്തിപരിചയം, രജിസ്ട്രേഷൻ കൗൺസിൽ സർട്ടിഫിക്കറ്റ് (ബാധകമെങ്കിൽ)"
      ]
    },
    whereToApply: {
      en: "Kerala Public Service Commission (thulasi.psc.kerala.gov.in) or Commissioner for Entrance Examinations (cee.kerala.gov.in).",
      ml: "കേരള പി.എസ്.സി തുളസി പോർട്ടൽ (thulasi.psc.kerala.gov.in) അല്ലെങ്കിൽ പ്രവേശന പരീക്ഷാ കമ്മീഷണറേറ്റ് (cee.kerala.gov.in)."
    },
    mode: {
      en: "100% Online",
      ml: "പൂർണ്ണമായും ഓൺലൈൻ"
    },
    steps: {
      en: [
        "Complete One Time Registration (OTR) on the Kerala PSC Thulasi portal.",
        "Add educational qualifications and upload certificates.",
        "Apply directly to specific category numbers advertised in gazettes.",
        "Download admission ticket (hall ticket) ahead of examination.",
        "Check shortlists, ranked lists, and verification memos online."
      ],
      ml: [
        "പി.എസ്.സി തുളസി പോർട്ടലിൽ ഒറ്റത്തവണ രജിസ്ട്രേഷൻ (OTR) പൂർത്തിയാക്കുക.",
        "വിദ്യാഭ്യാസ യോഗ്യതകൾ ചേർക്കുക.",
        "വിജ്ഞാപനം ചെയ്യുന്ന കാറ്റഗറി നമ്പറുകളിലേക്ക് അപേക്ഷിക്കുക.",
        "പരീക്ഷാ തീയതിക്ക് മുന്നോടിയായി ഹാൾടിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യുക."
      ]
    },
    officialUrl: "https://thulasi.psc.kerala.gov.in",
    notes: {
      en: "Never share PSC login credentials or passwords with unverified third-party internet centers. Profile details must match SSLC records.",
      ml: "ലോഗിൻ വിവരങ്ങൾ സുരക്ഷിതമായി സൂക്ഷിക്കുക. SSLC-യിലെ പേരുമായി വിവരങ്ങൾ കൃത്യമായി ഒത്തുപോകണം."
    },
    lastVerified: "March 2026",
    verified: true
  },

  // =========================================================================
  // CATEGORY E: Travel & Transport (travel)
  // =========================================================================
  {
    id: "ksrtc-ticket-booking",
    category: "travel",
    icon: "🚌",
    name: {
      en: "KSRTC Ticket Booking",
      ml: "കെ.എസ്.ആർ.ടി.സി ടിക്കറ്റ് ബുക്കിംഗ്"
    },
    summary: {
      en: "Online seat reservation for Kerala State Road Transport Corporation long-distance and interstate SWIFT buses.",
      ml: "കെ.എസ്.ആർ.ടി.സി ദീർഘദൂര, അന്തർസംസ്ഥാന സ്വിഫ്റ്റ് ബസുകളിലെ ഓൺലൈൻ സീറ്റ് റിസർവേഷൻ."
    },
    whoNeeds: {
      en: "Passengers traveling across Kerala or to neighboring states (Bengaluru, Chennai, Mysuru, Coimbatore).",
      ml: "കേരളത്തിനകത്തും അയൽ സംസ്ഥാനങ്ങളിലേക്കും യാത്ര ചെയ്യുന്ന പൊതുജനങ്ങൾ."
    },
    eligibility: {
      en: "Any commuter booking travel tickets with valid passenger names and identity details.",
      ml: "യാത്ര ചെയ്യാൻ ആഗ്രഹിക്കുന്ന ഏതൊരു വ്യക്തിക്കും."
    },
    documents: {
      en: [
        "Valid Government Photo ID card of the traveling passenger (Aadhaar, Voter ID, Driving Licence)",
        "Mobile number and Email address for SMS/email e-ticket delivery",
        "UPI / Debit Card / Net Banking access for fare payment"
      ],
      ml: [
        "യാത്രക്കാരന്റെ അംഗീകൃത ഫോട്ടോ തിരിച്ചറിയൽ രേഖ (ആധാർ, വോട്ടർ ഐഡി മുതലായവ)",
        "ടിക്കറ്റ് ലഭിക്കാനായി മൊബൈൽ നമ്പറും ഇമെയിൽ വിലാസവും",
        "ഓൺലൈൻ പേയ്മെന്റ് സംവിധാനം (UPI / കാർഡ് / നെറ്റ് ബാങ്കിംഗ്)"
      ]
    },
    additionalDocs: {
      en: [
        "Concession card credentials for accredited student / medical concessions"
      ],
      ml: [
        "ഇളവുകൾ ലഭിക്കുന്നതിനുള്ള കൺസഷൻ കാർഡുകൾ (ബാധകമെങ്കിൽ)"
      ]
    },
    whereToApply: {
      en: "Online via KSRTC Swift booking portal (onlineksrtcswift.com) or official Ente KSRTC mobile app.",
      ml: "കെ.എസ്.ആർ.ടി.സി ഒഫീഷ്യൽ പോർട്ടൽ (onlineksrtcswift.com) അല്ലെങ്കിൽ 'എന്റെ കെ.എസ്.ആർ.ടി.സി' മൊബൈൽ ആപ്പ്."
    },
    mode: {
      en: "Online Booking & Bus Station Counters",
      ml: "ഓൺലൈൻ & ബസ് സ്റ്റാൻഡ് റിസർവേഷൻ കൗണ്ടർ"
    },
    steps: {
      en: [
        "Visit onlineksrtcswift.com or open Ente KSRTC app.",
        "Choose starting city, destination, and journey date.",
        "Select bus service (Swift, Super Deluxe, Minnal, Scania) and choose preferred seats.",
        "Enter passenger details and pay fare securely online.",
        "Display digital SMS / PDF ticket and original ID to bus conductor during journey."
      ],
      ml: [
        "പോർട്ടലിലോ ആപ്പിലോ കയറി പുറപ്പെടുന്ന സ്ഥലവും എത്തിച്ചേരേണ്ട സ്ഥലവും നൽകുക.",
        "അനുയോജ്യമായ ബസ്സും സീറ്റും തിരഞ്ഞെടുക്കുക.",
        "യാത്രക്കാരുടെ വിവരങ്ങൾ നൽകി ഓൺലൈനായി പണം അടയ്ക്കുക.",
        "ലഭിക്കുന്ന എസ്.എം.എസ് / പി.ഡി.എഫ് ടിക്കറ്റും തിരിച്ചറിയൽ കാർഡും യാത്രവേളയിൽ കാണിക്കുക."
      ]
    },
    officialUrl: "https://onlineksrtcswift.com",
    notes: {
      en: "Cancellations and refunds are governed strictly by KSRTC slab timelines.",
      ml: "യാത്ര റദ്ദാക്കിയാൽ കെ.എസ്.ആർ.ടി.സി നിയമപ്രകാരമുള്ള തുക തിരികെ ലഭിക്കും."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "traffic-fine-echallan",
    category: "travel",
    icon: "🚨",
    name: {
      en: "Traffic Violation e-Challan",
      ml: "ട്രാഫിക് ഫൈൻ / ഇ-ചെല്ലാൻ"
    },
    summary: {
      en: "Online verification and settlement of traffic violation notices issued by Kerala Police and MVD automated AI cameras.",
      ml: "കേരള പോലീസും മോട്ടോർ വാഹന വകുപ്പും ചുമത്തുന്ന ട്രാഫിക് പിഴകൾ പരിശോധിക്കാനും അടയ്ക്കാനുമുള്ള സംവിധാനം."
    },
    whoNeeds: {
      en: "Vehicle owners or drivers issued notices for speed violations, helmet/seatbelt infractions, or signal jumps.",
      ml: "ട്രാഫിക് നിയമലംഘനങ്ങൾക്ക് നോട്ടീസ് ലഭിച്ച വാഹന ഉടമകൾ."
    },
    eligibility: {
      en: "Registered owners or motorists having challans recorded against vehicle or driving licence numbers.",
      ml: "വാഹനത്തിന്റെയോ ലൈസൻസിന്റെയോ പേരിൽ ചെല്ലാൻ നിലവിലുള്ള വ്യക്തികൾ."
    },
    documents: {
      en: [
        "Vehicle Registration Number and last 5 digits of Chassis / Engine number",
        "Challan Number (if notice received via SMS)",
        "Online payment method (UPI, Debit/Credit card, Net banking)"
      ],
      ml: [
        "വാഹന നമ്പർ, ചേസിസ് / എഞ്ചിൻ നമ്പറിന്റെ അവസാന 5 അക്കങ്ങൾ",
        "ലഭിച്ച ചെല്ലാൻ നമ്പർ (SMS വഴി വന്നത്)",
        "ഓൺലൈൻ പേയ്മെന്റ് സംവിധാനം (UPI, കാർഡ്)"
      ]
    },
    additionalDocs: {
      en: [
        "Virtual Court token in case challan has been referred to e-Court for adjudication"
      ],
      ml: [
        "കേസ് കോടതിയിലേക്ക് കൈമാറിയതാണെങ്കിൽ വെർച്വൽ കോടതി ടോക്കൺ"
      ]
    },
    whereToApply: {
      en: "Ministry of Road Transport Parivahan e-Challan portal or Kerala Police Citizen Portal / App.",
      ml: "പരിവഹൻ ഇ-ചെല്ലാൻ പോർട്ടൽ (echallan.parivahan.gov.in) അല്ലെങ്കിൽ കേരള പോലീസ് ആപ്പ്."
    },
    mode: {
      en: "100% Online",
      ml: "പൂർണ്ണമായും ഓൺലൈൻ"
    },
    steps: {
      en: [
        "Open echallan.parivahan.gov.in and select 'Get Challan Details'.",
        "Enter vehicle number or challan number along with security captcha.",
        "Inspect violation image, date, location, and penalized amount.",
        "Click 'Pay Now', complete payment, and download payment receipt."
      ],
      ml: [
        "echallan.parivahan.gov.in വെബ്സൈറ്റിൽ വാഹന നമ്പറോ ചെല്ലാൻ നമ്പറോ നൽകുക.",
        "നിയമലംഘനത്തിന്റെ ഫോട്ടോയും പിഴത്തുകയും പരിശോധിക്കുക.",
        "'Pay Now' ക്ലിക്ക് ചെയ്ത് യു.പി.ഐ വഴിയോ കാർഡ് വഴിയോ പണം അടയ്ക്കുക.",
        "രസീത് ഡൗൺലോഡ് ചെയ്ത് സൂക്ഷിക്കുക."
      ]
    },
    officialUrl: "https://echallan.parivahan.gov.in",
    notes: {
      en: "Unpaid challans block vehicle fitness, permit renewals, and ownership transfers.",
      ml: "പിഴ അടയ്ക്കാതിരുന്നാൽ വാഹനത്തിന്റെ ഫിറ്റ്നസ്, ഇൻഷുറൻസ്, ആർ.സി മാറ്റങ്ങൾ എന്നിവ തടസ്സപ്പെടാം."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "railway-ticket-booking",
    category: "travel",
    icon: "🚆",
    name: {
      en: "Railway Ticket Reservation (IRCTC)",
      ml: "റെയിൽവേ ടിക്കറ്റ് ബുക്കിംഗ് (IRCTC)"
    },
    summary: {
      en: "Indian Railways train ticket booking, PNR inquiry, schedule verification, and refund services.",
      ml: "ഇന്ത്യൻ റെയിൽവേ ട്രെയിൻ ടിക്കറ്റ് ബുക്കിംഗ്, പി.എൻ.ആർ സ്റ്റാറ്റസ് പരിശോധന, തത്കാൽ ബുക്കിംഗ്."
    },
    whoNeeds: {
      en: "Commuters and passengers undertaking intrastate or nationwide rail travel.",
      ml: "കേരളത്തിനകത്തും പുറത്തേക്കും ട്രെയിൻ യാത്ര ചെയ്യാൻ ആഗ്രഹിക്കുന്ന യാത്രക്കാർ."
    },
    eligibility: {
      en: "Any passenger holding a valid registered personal IRCTC user account.",
      ml: "IRCTC അക്കൗണ്ടുള്ള ഏതൊരു വ്യക്തിക്കും."
    },
    documents: {
      en: [
        "Original Photo ID Proof for travel (Aadhaar, Passport, Voter ID, Driving Licence)",
        "IRCTC registered user credentials (User ID and password)",
        "UPI, Net banking, or Card payment credentials"
      ],
      ml: [
        "യാത്രവേളയിൽ കാണിക്കാൻ ഒറിജിനൽ തിരിച്ചറിയൽ രേഖ (ആധാർ, ഡ്രൈവിംഗ് ലൈസൻസ് മുതലായവ)",
        "IRCTC യൂസർ ഐഡിയും പാസ്‌വേഡും",
        "ഓൺലൈൻ പേയ്മെന്റ് സൗകര്യം"
      ]
    },
    additionalDocs: {
      en: [
        "Senior citizen / divyangjan concessional identity card (if booking under special concessions)"
      ],
      ml: [
        "ഭിന്നശേഷി ഇളവുകൾക്കുള്ള റെയിൽവേ കാർഡ് (ബാധകമെങ്കിൽ)"
      ]
    },
    whereToApply: {
      en: "IRCTC official portal (irctc.co.in) or official IRCTC Rail Connect mobile application.",
      ml: "ഐ.ആർ.സി.ടി.സി ഒഫീഷ്യൽ പോർട്ടൽ (irctc.co.in) അല്ലെങ്കിൽ IRCTC Rail Connect ആപ്പ്."
    },
    mode: {
      en: "Online Portal / App or Railway Station PRS Counters",
      ml: "ഓൺലൈൻ & റെയിൽവേ സ്റ്റേഷൻ കൗണ്ടറുകൾ"
    },
    steps: {
      en: [
        "Log in to irctc.co.in or IRCTC app with your username.",
        "Enter journey origin, destination, date, and travel class (Sleeper, 3A, 2A, Chair Car).",
        "Input passenger details and select berth preferences.",
        "Pay booking fee and receive electronic reservation message (ERS/SMS).",
        "Carry valid original government ID while boarding."
      ],
      ml: [
        "irctc.co.in അല്ലെങ്കിൽ ആപ്പിൽ ലോഗിൻ ചെയ്യുക.",
        "യാത്രാ വിവരങ്ങളും തീയതിയും നൽകി ട്രെയിൻ തിരഞ്ഞെടുക്കുക.",
        "യാത്രക്കാരുടെ പേരുകൾ രേഖപ്പെടുത്തി പേയ്മെന്റ് പൂർത്തിയാക്കുക.",
        "ലഭിക്കുന്ന മെസ്സേജും ഒറിജിനൽ തിരിച്ചറിയൽ രേഖയുമായി യാത്ര ചെയ്യുക."
      ]
    },
    officialUrl: "https://www.irctc.co.in",
    notes: {
      en: "Tatkal quota opens at 10:00 AM for AC classes and 11:00 AM for Non-AC classes one day prior to journey date.",
      ml: "തത്കാൽ ബുക്കിംഗ് യാത്രയ്ക്ക് തലേദിവസം എ.സി ക്ലാസുകൾക്ക് രാവിലെ 10 മണിക്കും നോൺ എ.സിക്ക് 11 മണിക്കും ആരംഭിക്കും."
    },
    lastVerified: "March 2026",
    verified: true
  },
  {
    id: "vehicle-transport-services",
    category: "travel",
    icon: "🛞",
    name: {
      en: "MVD Transport & Permit Services",
      ml: "മോട്ടോർ വാഹന സേവനങ്ങൾ (MVD Kerala)"
    },
    summary: {
      en: "State transport services for vehicle tax payments, special permits, road fitness tests, and NOC for interstate transfer.",
      ml: "വാഹന നികുതി അടയ്ക്കൽ, ഫിറ്റ്നസ് ടെസ്റ്റ്, പെർമിറ്റ്, എൻ.ഒ.സി തുടങ്ങിയ മോട്ടോർ വാഹന സേവനങ്ങൾ."
    },
    whoNeeds: {
      en: "Commercial vehicle operators, vehicle owners transferring registration out of state, or owners paying road taxes.",
      ml: "വാണിജ്യ വാഹന ഉടമകൾ, റോഡ് ടാക്സ് അടയ്ക്കേണ്ടവർ, മറ്റ് സംസ്ഥാനങ്ങളിലേക്ക് വാഹനം മാറ്റുന്നവർ."
    },
    eligibility: {
      en: "Registered vehicle owners registered with Kerala Motor Vehicles Department.",
      ml: "കേരളത്തിൽ വാഹനം രജിസ്റ്റർ ചെയ്തിട്ടുള്ള ഉടമകൾ."
    },
    documents: {
      en: [
        "Registration Certificate (RC) details",
        "Active Insurance Policy Certificate",
        "Valid Pollution Under Control Certificate (PUCC)",
        "Challan clearance receipt (no pending unpaid violations)"
      ],
      ml: [
        "ആർ.സി വിവരങ്ങൾ",
        "സാധുവായ ഇൻഷുറൻസ് സർട്ടിഫിക്കറ്റ്",
        "പുക പരിശോധനാ സർട്ടിഫിക്കറ്റ് (PUC)",
        "പിഴകൾ ബാക്കിയില്ലെന്ന് വ്യക്തമാക്കുന്ന രേഖ"
      ]
    },
    additionalDocs: {
      en: [
        "Form 28 in triplicate for interstate NOC transfer",
        "Speed governor / GPS fitness certificate for commercial vehicles"
      ],
      ml: [
        "മറ്റ് സംസ്ഥാനങ്ങളിലേക്ക് മാറ്റാൻ ഫോം 28 (NOC)",
        "വാണിജ്യ വാഹനങ്ങൾക്ക് സ്പീഡ് ഗവർണർ സർട്ടിഫിക്കറ്റ്"
      ]
    },
    whereToApply: {
      en: "Kerala MVD official portal (mvd.kerala.gov.in) or Parivahan portal.",
      ml: "കേരള മോട്ടോർ വാഹന വകുപ്പ് പോർട്ടൽ (mvd.kerala.gov.in) അല്ലെങ്കിൽ പരിവഹൻ പോർട്ടൽ."
    },
    mode: {
      en: "Online & RTO Inspection Ground",
      ml: "ഓൺലൈൻ & ആർ.ടി.ഒ ഓഫീസ്"
    },
    steps: {
      en: [
        "Access mvd.kerala.gov.in or Parivahan Vahan.",
        "Select required service (e-Tax, Fitness application, or NOC).",
        "Pay statutory fees and taxes through Kerala e-Treasury gateway.",
        "Schedule slot for vehicle physical inspection at RTO ground if applying for fitness.",
        "Receive endorsed certificate digitally."
      ],
      ml: [
        "mvd.kerala.gov.in വഴിയോ പരിവഹൻ വഴിയോ ആവശ്യമായ സർവീസ് തിരഞ്ഞെടുക്കുക.",
        "നികുതിയോ ഫീസോ ട്രഷറി വഴി ഓൺലൈനായി അടയ്ക്കുക.",
        "ഫിറ്റ്നസ് ടെസ്റ്റിനായി ആർ.ടി.ഒ ഗ്രൗണ്ടിലേക്ക് വാഹനം എത്തിച്ച് പരിശോധിക്കുക.",
        "തുടർന്ന് അംഗീകൃത സർട്ടിഫിക്കറ്റ് ഓൺലൈനായി ലഭിക്കും."
      ]
    },
    officialUrl: "https://mvd.kerala.gov.in",
    notes: {
      en: "Commercial transport vehicles must maintain up-to-date fitness certificates to preserve valid road insurance coverage.",
      ml: "വാണിജ്യ വാഹനങ്ങളുടെ ഫിറ്റ്നസ് സർട്ടിഫിക്കറ്റ് കൃത്യസമയത്ത് പുതുക്കേണ്ടത് അത്യന്താപേക്ഷിതമാണ്."
    },
    lastVerified: "March 2026",
    verified: true
  }
];
