// ==========================================
// SEVACHECK KERALA — DATA MODULE
// Category: NORKA / Pravasi (Services #116 to #123)
// File: data/cat-norka.js
// ==========================================

(function () {
  "use strict";

  window.SevaRegistry = window.SevaRegistry || {};

  var data = [
    // ================================================================
    // SERVICE #116: NORKA Pravasi Identity Card
    // ================================================================
    {
      id: "norka-pravasi-id-card",
      category: "norka",
      relatedCategory: "id",
      icon: "🪪",
      name: {
        en: "NORKA Pravasi Identity Card",
        ml: "നോർക്ക പ്രവാസി തിരിച്ചറിയൽ കാർഡ്"
      },
      summary: {
        en: "Official digital ID card for Non-Resident Keralites working abroad for at least 6 months, offering ₹5 lakh accident death/disability coverage.",
        ml: "വിദേശത്ത് കുറഞ്ഞത് 6 മാസമെങ്കിലും ജോലി ചെയ്യുന്ന പ്രവാസികൾക്ക് 5 ലക്ഷം രൂപയുടെ അപകട ഇൻഷുറൻസ് പരിരക്ഷ നൽകുന്ന നോർക്ക ഐഡി കാർഡ്."
      },
      description: {
        en: "Issued by the Non-Resident Keralites Affairs (NORKA) Department, Government of Kerala, this verified identity card serves as official proof of Non-Resident Keralite (NRK) status. Enrolled cardholders receive a comprehensive personal accident insurance policy covering up to ₹5 lakh in the event of accidental death or permanent total disability, alongside privileged access to welfare services.",
        ml: "കേരള സർക്കാർ നോർക്ക റൂട്ട്സ് വഴി പ്രവാസികൾക്ക് നൽകുന്ന ഔദ്യോഗിക തിരിച്ചറിയൽ കാർഡാണിത്. വിദേശത്ത് കുറഞ്ഞത് 6 മാസമെങ്കിലും ജോലി ചെയ്യുന്ന മലയാളി പ്രവാസികൾക്ക് ഈ കാർഡ് വഴി 5 ലക്ഷം രൂപയുടെ അപകട മരണ/വൈകല്യ ഇൻഷുറൻസ് പരിരക്ഷയും നോർക്കയുടെ മറ്റ് ക്ഷേമാനുകൂല്യങ്ങളും ലഭിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Non-Resident Keralite working or residing abroad with a valid employment/residence visa",
          "Must have resided/worked outside India for a minimum continuous period of 6 months",
          "Applicant must be at least 18 years of age at the time of application"
        ],
        ml: [
          "വിദേശത്ത് സാധുവായ വിസയിൽ ജോലി ചെയ്യുകയോ താമസിക്കുകയോ ചെയ്യുന്ന പ്രവാസി മലയാളി ആയിരിക്കണം",
          "കുറഞ്ഞത് 6 മാസമെങ്കിലും വിദേശത്ത് ജോലി ചെയ്ത പരിചയം ഉണ്ടായിരിക്കണം",
          "അപേക്ഷകർക്ക് കുറഞ്ഞത് 18 വയസ്സ് പൂർത്തിയായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Valid Indian Passport copy (front and address pages)",
          "Valid employment / residence visa copy with immigration departure stamp page",
          "Applicant's recent passport size photograph",
          "Proof of permanent residence address in Kerala"
        ],
        ml: [
          "സാധുവായ ഇന്ത്യൻ പാസ്‌പോർട്ടിന്റെ മുൻ/പിൻ പേജുകളുടെ പകർപ്പ്",
          "സാധുവായ വർക്ക് വിസ / റെസിഡൻസ് വിസ പകർപ്പ് (എമിഗ്രേഷൻ സ്റ്റാമ്പ് ഉള്ള പേജ്)",
          "അപേക്ഷകന്റെ പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോ",
          "കേരളത്തിലെ സ്ഥിരമേൽവിലാസം തെളിയിക്കുന്ന രേഖ"
        ]
      },
      howToApply: {
        en: "Apply 100% online through the official NORKA Roots portal (norkaroots.kerala.gov.in) under the Pravasi ID Card service.",
        ml: "നോർക്ക റൂട്ട്സിന്റെ ഔദ്യോഗിക പോർട്ടൽ (norkaroots.kerala.gov.in) വഴി ഓൺലൈനായി അപേക്ഷിക്കാം."
      },
      steps: {
        en: [
          "Visit norkaroots.kerala.gov.in and click 'Apply for Pravasi ID Card'",
          "Register using your mobile number and email to receive login credentials",
          "Fill in personal details, foreign employment specifics, and domestic address in Kerala",
          "Upload scanned copies of passport, valid foreign visa, and photograph",
          "Remit the statutory fee of ₹370 online via payment gateway",
          "Upon departmental scrutiny and approval, download the digital Pravasi ID or receive the physical card"
        ],
        ml: [
          "norkaroots.kerala.gov.in സന്ദർശിച്ച് 'Pravasi ID Card' തിരഞ്ഞെടുക്കുക",
          "മൊബൈൽ നമ്പറും ഇമെയിലും നൽകി ലോഗിൻ ചെയ്യുക",
          "വ്യക്തിഗത വിവരങ്ങൾ, വിദേശത്തെ തൊഴിൽ വിവരങ്ങൾ, നാട്ടിലെ വിലാസം എന്നിവ രേഖപ്പെടുത്തുക",
          "പാസ്‌പോർട്ട്, വിസ, ഫോട്ടോ എന്നിവയുടെ സ്കാൻ ചെയ്ത പകർപ്പുകൾ അപ്‌ലോഡ് ചെയ്യുക",
          "നിശ്ചിത ഫീസായ ₹370 ഓൺലൈനായി അടയ്ക്കുക",
          "പരിശോധനകൾക്ക് ശേഷം അപ്രൂവൽ ലഭിക്കുന്ന മുറയ്ക്ക് ഡിജിറ്റൽ കാർഡ് ഡൗൺലോഡ് ചെയ്യാം"
        ]
      },
      fees: {
        en: "₹370 (Statutory registration fee inclusive of card processing and insurance coverage).",
        ml: "₹370 (കാർഡ് പ്രോസസ്സിംഗും ഇൻഷുറൻസ് പരിരക്ഷയും ഉൾപ്പെടെയുള്ള ഫീസ്)."
      },
      validity: {
        en: "Valid for 3 years from the date of issue; renewable online upon expiry.",
        ml: "ഇഷ്യൂ ചെയ്ത തീയതി മുതൽ 3 വർഷം സാധുതയുണ്ട്; തുടർന്ന് ഓൺലൈനായി പുതുക്കാവുന്നതാണ്."
      },
      officialUrl: "https://norkaroots.kerala.gov.in/pravasi-id-card",
      importantNotes: {
        en: [
          "Mandatory inclusion: Built-in ₹5 lakh accidental death and permanent total disability insurance coverage.",
          "Statutory fee: Exactly ₹370 for 3-year validity.",
          "Must have completed minimum 6 months abroad before applying."
        ],
        ml: [
          "5 ലക്ഷം രൂപയുടെ വ്യക്തിഗത അപകട മരണ/വൈകല്യ ഇൻഷുറൻസ് ഇതിൽ ഉൾപ്പെടുന്നു.",
          "3 വർഷത്തെ കാലാവധിക്ക് കൃത്യം ₹370 രൂപയാണ് സർക്കാർ ഫീസ്.",
          "വിദേശത്ത് കുറഞ്ഞത് 6 മാസം പൂർത്തിയായവർക്ക് മാത്രമേ അപേക്ഷിക്കാൻ സാധിക്കൂ."
        ]
      }
    },

    // ================================================================
    // SERVICE #117: NORKA Student NRK Identity Card
    // ================================================================
    {
      id: "norka-student-nrk-id",
      category: "norka",
      relatedCategory: "education",
      icon: "🎓",
      name: {
        en: "NORKA Student NRK Identity Card",
        ml: "നോർക്ക പ്രവാസി വിദ്യാർത്ഥി തിരിച്ചറിയൽ കാർഡ്"
      },
      summary: {
        en: "Dedicated student identification and accident insurance card for Kerala students pursuing higher education abroad or other Indian states.",
        ml: "വിദേശത്തോ മറ്റ് സംസ്ഥാനങ്ങളിലോ ഉന്നതപഠനം നടത്തുന്ന മലയാളി വിദ്യാർത്ഥികൾക്ക് അപകട ഇൻഷുറൻസ് പരിരക്ഷ നൽകുന്ന നോർക്ക സ്റ്റുഡന്റ് ഐഡി കാർഡ്."
      },
      description: {
        en: "Administered by NORKA Roots, this identity credential is exclusively designed for students hailing from Kerala who are studying in foreign universities or accredited educational institutions in other Indian states outside Kerala. Cardholders are covered by a student accident insurance policy of up to ₹2 lakh, alongside assistance through overseas NRK student desks.",
        ml: "വിദേശ സർവകലാശാലകളിലോ മറ്റ് ഇന്ത്യൻ സംസ്ഥാനങ്ങളിലോ ഉന്നതപഠനം നടത്തുന്ന കേരളത്തിൽ നിന്നുള്ള വിദ്യാർത്ഥികൾക്കായി നോർക്ക റൂട്ട്സ് നൽകുന്ന ഐഡി കാർഡാണിത്. പഠനകാലത്ത് അപ്രതീക്ഷിത അപകടങ്ങൾ ഉണ്ടായാൽ 2 ലക്ഷം രൂപ വരെയുള്ള ആക്സിഡന്റ് ഇൻഷുറൻസ് പരിരക്ഷയും നോർക്കയുടെ വിദ്യാർത്ഥി സഹായങ്ങളും ഇത് ഉറപ്പാക്കുന്നു."
      },
      eligibility: {
        en: [
          "Students originally hailing from Kerala pursuing full-time higher education abroad or other Indian states",
          "Must be enrolled in a recognized university, college, or academic institute for a minimum course duration of 1 year",
          "Age limit: 18 to 28 years at the time of application"
        ],
        ml: [
          "കേരളത്തിൽ നിന്നുള്ളവരും വിദേശത്തോ ഇതര സംസ്ഥാനങ്ങളിലോ ഫുൾടൈം ഉന്നതവിദ്യാഭ്യാസം നടത്തുന്നവരുമായ വിദ്യാർത്ഥികൾ",
          "കുറഞ്ഞത് 1 വർഷത്തെ കാലാവധിയുള്ള അംഗീകൃത കോഴ്സുകളിൽ പഠിക്കുന്നവരായിരിക്കണം",
          "അപേക്ഷിക്കുമ്പോൾ പ്രായപരിധി: 18 മുതൽ 28 വയസ്സ് വരെ"
        ]
      },
      documents: {
        en: [
          "Valid Student Visa copy (for overseas studies) / Admission confirmation letter from foreign or other-state university",
          "Indian Passport copy or Birth Certificate / SSLC proof of Kerala domicile",
          "College/University Student ID Card or Bonafide Certificate",
          "Recent passport size photograph"
        ],
        ml: [
          "സ്റ്റുഡന്റ് വിസ പകർപ്പ് (വിദേശത്താണെങ്കിൽ) അല്ലെങ്കിൽ കോളേജിൽ നിന്നുള്ള അഡ്മിഷൻ ലെറ്റർ",
          "പാസ്‌പോർട്ട് പകർപ്പ് / ജനന സർട്ടിഫിക്കറ്റ് / കേരളത്തിലെ മേൽവിലാസം തെളിയിക്കുന്ന എസ്.എസ്.എൽ.സി രേഖ",
          "കോളേജ് ഐഡി കാർഡ് അല്ലെങ്കിൽ ബോണഫൈഡ് സർട്ടിഫിക്കറ്റ്",
          "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോ"
        ]
      },
      howToApply: {
        en: "Apply online via the NORKA Roots official website (norkaroots.kerala.gov.in) under the Student NRK ID card application.",
        ml: "നോർക്ക റൂട്ട്സ് പോർട്ടൽ (norkaroots.kerala.gov.in) വഴി ഓൺലൈനായി അപേക്ഷിക്കാം."
      },
      steps: {
        en: [
          "Visit norkaroots.kerala.gov.in and choose 'Student NRK ID Card'",
          "Create a student account using email and mobile verification",
          "Provide course details, university name, academic duration, and residential address in Kerala",
          "Upload passport/student visa, admission bonafide certificate, and photo",
          "Pay the statutory fee of ₹370 online",
          "Receive the verified digital Student NRK ID Card upon departmental sanction"
        ],
        ml: [
          "norkaroots.kerala.gov.in സന്ദർശിച്ച് 'Student NRK ID Card' തിരഞ്ഞെടുക്കുക",
          "ഇമെയിലും മൊബൈൽ നമ്പറും നൽകി അക്കൗണ്ട് രജിസ്റ്റർ ചെയ്യുക",
          "കോഴ്സിന്റെ വിവരങ്ങൾ, സർവകലാശാലയുടെ പേര്, നാട്ടിലെ വിലാസം എന്നിവ രേഖപ്പെടുത്തുക",
          "വിസ, ബോണഫൈഡ് സർട്ടിഫിക്കറ്റ്, ഫോട്ടോ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക",
          "നിശ്ചിത ഫീസായ ₹370 ഓൺലൈനായി അടയ്ക്കുക",
          "പരിശോധന പൂർത്തിയായ ശേഷം ഡിജിറ്റൽ സ്റ്റുഡന്റ് ഐഡി കാർഡ് ലഭ്യമാകും"
        ]
      },
      fees: {
        en: "₹370 (Statutory registration fee inclusive of student accident cover).",
        ml: "₹370 (സ്റ്റുഡന്റ് ആക്സിഡന്റ് ഇൻഷുറൻസ് ഉൾപ്പെടെയുള്ള ഫീസ്)."
      },
      validity: {
        en: "Valid for 3 years or course completion date (whichever is earlier).",
        ml: "3 വർഷം അല്ലെങ്കിൽ കോഴ്സ് തീരുന്നതുവരെ സാധുതയുള്ളത്."
      },
      officialUrl: "https://norkaroots.kerala.gov.in/student-id-card",
      importantNotes: {
        en: [
          "Fee is strictly ₹370.",
          "Age criteria strictly 18 to 28 years.",
          "Includes accident medical/death risk coverage for the enrolled student during academic period."
        ],
        ml: [
          "ഫീസ് കൃത്യമായി ₹370 രൂപയാണ്.",
          "പ്രായപരിധി കർശനമായി 18 നും 28 നും ഇടയിലായിരിക്കണം.",
          "പഠനകാലത്ത് വിദ്യാർത്ഥികൾക്ക് അപകട ഇൻഷുറൻസ് പരിരക്ഷ ഇതിലൂടെ ലഭിക്കുന്നു."
        ]
      }
    },

    // ================================================================
    // SERVICE #118: Pravasi Kshemanidhi Scheme
    // ================================================================
    {
      id: "pravasi-kshemanidhi-membership",
      category: "norka",
      icon: "🛡️",
      name: {
        en: "Pravasi Kshemanidhi Scheme",
        ml: "പ്രവാസി ക്ഷേമനിധി ബോർഡ് അംഗത്വം"
      },
      summary: {
        en: "Statutory contributory social security scheme for Non-Resident Keralites offering monthly pensions, family pension, and welfare grants.",
        ml: "പ്രവാസികൾക്കും നാട്ടിൽ തിരിച്ചെത്തിയ പ്രവാസികൾക്കും പെൻഷനും മറ്റ് ക്ഷേമാനുകൂല്യങ്ങളും ഉറപ്പാക്കുന്ന പ്രവാസി ക്ഷേമനിധി അംഗത്വം."
      },
      description: {
        en: "Administered by the Kerala Non-Resident Keralites' Welfare Board under the Department of Non-Resident Keralites Affairs, this statutory contributory welfare fund enrolls active NRKs abroad (Category 1A) and returnee migrants (Category 1B). Upon completing mandatory contribution tenures, members qualify for old-age pensions upon reaching 60 years of age.",
        ml: "പ്രവാസി മലയാളി ക്ഷേമബോർഡ് നടപ്പിലാക്കുന്ന പെൻഷൻ പദ്ധതിയാണിത്. വിദേശത്ത് ജോലി ചെയ്യുന്ന പ്രവാസികൾക്കും (കാറ്റഗറി 1A), ജോലി കഴിഞ്ഞ് നാട്ടിൽ തിരിച്ചെത്തിയ പ്രവാസികൾക്കും (കാറ്റഗറി 1B) നിശ്ചിത പ്രതിമാസ അംശദായം അടച്ച് 60 വയസ്സിന് ശേഷം പ്രതിമാസ പെൻഷനും മറ്റ് ആനുകൂല്യങ്ങളും നേടാം."
      },
      eligibility: {
        en: [
          "Active NRKs working abroad holding valid visas (Category 1A) OR returnee migrants permanently settled back in Kerala (Category 1B)",
          "Age joining limit: Between 18 and 55 years at the time of enrollment",
          "Must pay continuous monthly contributions for at least 5 years to qualify for pension benefits at 60"
        ],
        ml: [
          "വിദേശത്ത് ജോലി ചെയ്യുന്ന പ്രവാസികൾ (കാറ്റഗറി 1A) അല്ലെങ്കിൽ വിദേശവാസം അവസാനിപ്പിച്ച് നാട്ടിൽ തിരിച്ചെത്തിയ പ്രവാസികൾ (കാറ്റഗറി 1B)",
          "ചേരുമ്പോൾ പ്രായപരിധി: 18 നും 55 നും ഇടയിലായിരിക്കണം",
          "പെൻഷൻ ലഭിക്കുന്നതിന് കുറഞ്ഞത് 5 വർഷമെങ്കിലും തുടർച്ചയായി അംശദായം അടച്ചിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Passport copy with employment visa page (for Category 1A)",
          "Cancelled foreign visa page / return immigration arrival stamp (for Category 1B)",
          "Aadhaar Card or accepted official Indian photo ID",
          "Recent passport size photograph",
          "Bank passbook copy with IFSC"
        ],
        ml: [
          "പാസ്‌പോർട്ടിന്റെയും വിസയുടെയും പകർപ്പ് (കാറ്റഗറി 1A അപേക്ഷകർക്ക്)",
          "വിസ റദ്ദാക്കിയ പേജ് അല്ലെങ്കിൽ നാട്ടിൽ തിരിച്ചെത്തിയ എമിഗ്രേഷൻ സ്റ്റാമ്പ് (കാറ്റഗറി 1B അപേക്ഷകർക്ക്)",
          "ആധാർ കാർഡ് അല്ലെങ്കിൽ മറ്റ് ഔദ്യോഗിക തിരിച്ചറിയൽ രേഖ",
          "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോ",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (IFSC അടങ്ങിയത്)"
        ]
      },
      howToApply: {
        en: "Enroll online through the Kerala Non-Resident Keralites Welfare Board portal (pravasiwelfareburau.org) or visit designated district helpdesks.",
        ml: "പ്രവാസി ക്ഷേമനിധി ബോർഡിന്റെ ഔദ്യോഗിക പോർട്ടൽ (pravasiwelfareburau.org) വഴി ഓൺലൈനായി രജിസ്റ്റർ ചെയ്യാം."
      },
      steps: {
        en: [
          "Visit pravasiwelfareburau.org and select 'New Member Registration'",
          "Choose Category 1A (Active Abroad) or Category 1B (Returnee Migrant)",
          "Fill in personal data, overseas employment tenure, and banking information",
          "Upload passport copies, visa verification documents, and photograph",
          "Pay the statutory admission fee and first monthly contribution online",
          "Download Member Registration Certificate and passbook tracking ID"
        ],
        ml: [
          "pravasiwelfareburau.org സന്ദർശിച്ച് 'New Member Registration' തിരഞ്ഞെടുക്കുക",
          "കാറ്റഗറി 1A (വിദേശത്തുള്ളവർ) അല്ലെങ്കിൽ കാറ്റഗറി 1B (നാട്ടിൽ തിരിച്ചെത്തിയവർ) തിരഞ്ഞെടുക്കുക",
          "വ്യക്തിഗത വിവരങ്ങൾ, വിദേശവാസ വിവരങ്ങൾ, ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങൾ എന്നിവ നൽകുക",
          "പാസ്‌പോർട്ട്, വിസ രേഖകൾ, ഫോട്ടോ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക",
          "രജിസ്ട്രേഷൻ ഫീസും ആദ്യ അംശദായവും ഓൺലൈനായി അടയ്ക്കുക",
          "ക്ഷേമനിധി അംഗത്വ സർട്ടിഫിക്കറ്റും പാസ്സ്ബുക്ക് വിവരങ്ങളും കൈപ്പറ്റുക"
        ]
      },
      fees: {
        en: "Statutory monthly contribution: Category 1A (Overseas NRK) is ₹350/month; Category 1B (Returnee Migrant) is ₹200/month. Nominal one-time admission fee of ₹200 applies.",
        ml: "പ്രതിമാസ അംശദായം: വിദേശത്തുള്ള പ്രവാസികൾക്ക് (കാറ്റഗറി 1A) ₹350/മാസം; നാട്ടിൽ തിരിച്ചെത്തിയവർക്ക് (കാറ്റഗറി 1B) ₹200/മാസം. ഒറ്റത്തവണ രജിസ്ട്രേഷൻ ഫീസ്: ₹200."
      },
      validity: {
        en: "Active membership until 60 years of age, maintained via continuous monthly contributions.",
        ml: "കൃത്യമായി അംശദായം അടയ്ക്കുന്നതുവഴി 60 വയസ്സ് വരെ അംഗത്വം തുടരാം."
      },
      officialUrl: "https://pravasiwelfareburau.org/",
      importantNotes: {
        en: [
          "Monthly contribution: Exactly ₹350 for Category 1A and ₹200 for Category 1B.",
          "Must complete minimum 5 years of regular monthly contributions to be eligible for pension upon turning 60.",
          "Late payment attracts statutory default interest; online payment is recommended."
        ],
        ml: [
          "പ്രതിമാസ അംശദായം: കാറ്റഗറി 1A-യ്ക്ക് ₹350, കാറ്റഗറി 1B-യ്ക്ക് ₹200.",
          "60 വയസ്സ് തികയുമ്പോൾ പെൻഷൻ ലഭിക്കാൻ കുറഞ്ഞത് 5 വർഷമെങ്കിലും തുടർച്ചയായി തുക അടച്ചിരിക്കണം.",
          "തവണകൾ മുടങ്ങിയാൽ പിഴപ്പലിശ ബാധകമാണ്; ഓൺലൈൻ വഴി കൃത്യമായി അടയ്ക്കുക."
        ]
      }
    },

    // ================================================================
    // SERVICE #119: Pravasi Pension Scheme Application
    // ================================================================
    {
      id: "pravasi-pension-application",
      category: "norka",
      icon: "👵",
      name: {
        en: "Pravasi Pension Scheme Application",
        ml: "പ്രവാസി പെൻഷൻ അപേക്ഷ (60 വയസ്സിന് ശേഷം)"
      },
      summary: {
        en: "Formal pension claiming service for registered Pravasi Welfare Board members who have attained 60 years of age, guaranteeing a minimum ₹3,500/month.",
        ml: "പ്രവാസി ക്ഷേമനിധിയിൽ കുറഞ്ഞത് 5 വർഷം അംശദായം അടച്ച് 60 വയസ്സ് പൂർത്തിയായ പ്രവാസികൾക്ക് മാസം ₹3,500 രൂപ നിരക്കിൽ ലഭിക്കുന്ന പെൻഷൻ."
      },
      description: {
        en: "Administered under the Kerala Non-Resident Keralites' Welfare Fund Act, this service enables registered welfare board members who have reached 60 years of age and remitted mandatory continuous monthly contributions for at least 5 years to claim their monthly retirement pension. The scheme guarantees a minimum pension of ₹3,500 per month.",
        ml: "പ്രവാസി ക്ഷേമനിധി ബോർഡിൽ അംഗത്വമെടുത്ത് കുറഞ്ഞത് 5 വർഷമെങ്കിലും മുടങ്ങാതെ അംശദായം അടച്ച് 60 വയസ്സ് പൂർത്തിയായ പ്രവാസികൾക്കുള്ള പെൻഷൻ അപേക്ഷയാണിത്. അർഹരായ ഗുണഭോക്താക്കൾക്ക് പ്രതിമാസം കുറഞ്ഞത് ₹3,500 രൂപ വീതം ബാങ്ക് അക്കൗണ്ടിലേക്ക് നേരിട്ട് പെൻഷനായി ലഭിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Registered member of the Kerala Non-Resident Keralites Welfare Board",
          "Must have attained 60 years of age",
          "Must have completed a minimum of 5 continuous contribution years (60 monthly installments) without unregularized defaults"
        ],
        ml: [
          "കേരള പ്രവാസി ക്ഷേമനിധി ബോർഡിലെ രജിസ്റ്റർ ചെയ്ത അംഗമായിരിക്കണം",
          "60 വയസ്സ് പൂർത്തിയായിരിക്കണം",
          "കുറഞ്ഞത് 5 വർഷമെങ്കിലും (60 മാസത്തെ അംശദായം) മുടങ്ങാതെ അടച്ചിട്ടുണ്ടായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Original Pravasi Welfare Fund Passbook / Contribution receipt statements",
          "Proof of Date of Birth (SSLC / Birth Certificate / Indian Passport)",
          "Aadhaar Card and recent passport size photographs",
          "Aadhaar-linked bank passbook copy with IFSC",
          "Life Certificate / Digital Jeevan Pramaan (for annual renewals)"
        ],
        ml: [
          "പ്രവാസി ക്ഷേമനിധി പാസ്സ്ബുക്ക് / അംശദായം അടച്ച രസീതുകൾ",
          "പ്രായം തെളിയിക്കുന്ന രേഖ (എസ്.എസ്.എൽ.സി / ജനന സർട്ടിഫിക്കറ്റ് / പാസ്‌പോർട്ട്)",
          "ആധാർ കാർഡും പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകളും",
          "ആധാറുമായി ബന്ധിപ്പിച്ച ബാങ്ക് അക്കൗണ്ട് പാസ്സ്ബുക്ക് പകർപ്പ്",
          "ലൈഫ് സർട്ടിഫിക്കറ്റ് (വാർഷിക മസ്റ്ററിംഗിനായി)"
        ]
      },
      howToApply: {
        en: "Submit the formal pension application online through pravasiwelfareburau.org or directly at the District Executive Officer's office of the Welfare Board upon turning 60.",
        ml: "60 വയസ്സ് തികയുമ്പോൾ പ്രവാസി ക്ഷേമനിധി പോർട്ടൽ (pravasiwelfareburau.org) വഴിയോ ജില്ലാ ഓഫീസിലോ നേരിട്ട് അപേക്ഷ സമർപ്പിക്കാം."
      },
      steps: {
        en: [
          "Log in to the Pravasi Welfare Board portal using your member credentials",
          "Select 'Claim Pension' upon completing 60 years of age",
          "Verify your contribution history and cleared dues",
          "Upload proof of age, bank passbook copy, and passport size photo",
          "Submit the digital claim application for verification by the District Executive Officer",
          "Upon approval, pension is credited directly into the applicant's bank account each month via DBT"
        ],
        ml: [
          "പ്രവാസി ക്ഷേമനിധി പോർട്ടലിൽ മെമ്പർ ഐഡി ഉപയോഗിച്ച് ലോഗിൻ ചെയ്യുക",
          "60 വയസ്സ് പൂർത്തിയായ ശേഷം 'Claim Pension' തിരഞ്ഞെടുക്കുക",
          "അംശദായം പൂർണ്ണമായും അടച്ചിട്ടുണ്ടെന്ന് ഉറപ്പുവരുത്തുക",
          "പ്രായരേഖ, ബാങ്ക് പാസ്സ്ബുക്ക്, ഫോട്ടോ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക",
          "ജില്ലാ എക്സിക്യൂട്ടീവ് ഓഫീസറുടെ പരിശോധനയ്ക്കായി അപേക്ഷ സമർപ്പിക്കുക",
          "അംഗീകാരം ലഭിക്കുന്ന മുറയ്ക്ക് മാസം തോറും പെൻഷൻ തുക ബാങ്ക് അക്കൗണ്ടിലേക്ക് എത്തുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0 for claiming pension benefit).",
        ml: "സൗജന്യം (പെൻഷൻ അപേക്ഷയ്ക്ക് ഫീസില്ല)."
      },
      validity: {
        en: "Lifetime monthly pension subject to mandatory annual biometric mustering / Life Certificate submission.",
        ml: "ആജീവനാന്ത പെൻഷൻ; വർഷം തോറും ലൈഫ് സർട്ടിഫിക്കറ്റ് / മസ്റ്ററിംഗ് നടത്തേണ്ടതാണ്."
      },
      officialUrl: "https://pravasiwelfareburau.org/",
      importantNotes: {
        en: [
          "Statutory guaranteed minimum pension: Strictly ₹3,500 per month.",
          "Must complete at least 5 years (60 months) of continuous member contributions.",
          "Upon member demise, 50% family pension is granted to eligible legal surviving spouse."
        ],
        ml: [
          "മിനിമം പെൻഷൻ തുക കൃത്യമായി മാസം ₹3,500 രൂപയാണ്.",
          "കുറഞ്ഞത് 5 വർഷത്തെ (60 മാസത്തെ) അംശദായം പൂർത്തിയായിരിക്കണം.",
          "പെൻഷൻ ലഭിക്കുന്ന അംഗം മരണപ്പെട്ടാൽ പങ്കാളിക്ക് 50% കുടുംബ പെൻഷൻ ലഭിക്കും."
        ]
      }
    },

    // ================================================================
    // SERVICE #120: NORKA Pravasi Raksha Insurance
    // ================================================================
    {
      id: "norka-pravasi-raksha-insurance",
      category: "norka",
      icon: "🏥",
      name: {
        en: "NORKA Pravasi Raksha Insurance",
        ml: "നോർക്ക പ്രവാസി രക്ഷ ഇൻഷുറൻസ് പോളിസി"
      },
      summary: {
        en: "Comprehensive health and critical illness insurance coverage specifically tailored for active Non-Resident Keralites abroad.",
        ml: "വിദേശത്തുള്ള പ്രവാസികൾക്ക് ഗുരുതര രോഗങ്ങൾക്കും ചികിത്സാ ചിലവുകൾക്കും സാമ്പത്തിക പരിരക്ഷ ഉറപ്പാക്കുന്ന സമഗ്ര ആരോഗ്യ ഇൻഷുറൻസ്."
      },
      description: {
        en: "Introduced by NORKA Roots in collaboration with recognized public sector insurance providers, the Pravasi Raksha Insurance Policy offers financial protection against medical emergencies, critical illnesses, and hospitalization expenses for Non-Resident Keralites working abroad, including medical repatriation support.",
        ml: "നോർക്ക റൂട്ട്സ് പൊതുമേഖലാ ഇൻഷുറൻസ് കമ്പനികളുമായി ചേർന്ന് നടപ്പിലാക്കുന്ന സമഗ്ര ആരോഗ്യ ഇൻഷുറൻസ് പദ്ധതിയാണിത്. വിദേശത്ത് ജോലി ചെയ്യുന്ന പ്രവാസികൾക്ക് അപ്രതീക്ഷിതമായി ഉണ്ടാകുന്ന ഗുരുതര രോഗങ്ങൾ, ആശുപത്രി ചികിത്സാ ചിലവുകൾ, നാട്ടിലേക്ക് രോഗിയെ കൊണ്ടുവരുന്നതിനുള്ള ചിലവുകൾ എന്നിവയ്ക്ക് ഈ പോളിസി വഴി സാമ്പത്തിക പരിരക്ഷ ലഭിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Active Non-Resident Keralite residing/working abroad with valid employment credentials",
          "Age limit: 18 to 65 years at the time of policy inception",
          "Must hold a valid Indian passport"
        ],
        ml: [
          "സാധുവായ വിസയിൽ വിദേശത്ത് ജോലി ചെയ്യുന്ന പ്രവാസി മലയാളി ആയിരിക്കണം",
          "പോളിസി എടുക്കുമ്പോൾ പ്രായം: 18 നും 65 നും ഇടയിലായിരിക്കണം",
          "സാധുവായ ഇന്ത്യൻ പാസ്‌പോർട്ട് ഉണ്ടായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Valid Indian Passport copy",
          "Valid employment / residence visa copy",
          "Applicant passport size photograph",
          "Nominee identity and contact details"
        ],
        ml: [
          "സാധുവായ ഇന്ത്യൻ പാസ്‌പോർട്ട് പകർപ്പ്",
          "സാധുവായ വർക്ക് വിസ / റെസിഡൻസ് വിസ പകർപ്പ്",
          "അപേക്ഷകന്റെ പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോ",
          "നോമിനിയുടെ വിവരങ്ങളും തിരിച്ചറിയൽ രേഖയും"
        ]
      },
      howToApply: {
        en: "Enroll online through the NORKA Roots web portal (norkaroots.kerala.gov.in) under the Pravasi Raksha Insurance link.",
        ml: "നോർക്ക റൂട്ട്സ് പോർട്ടൽ (norkaroots.kerala.gov.in) വഴി ഓൺലൈനായി പ്രവാസി രക്ഷ പോളിസിയിൽ ചേരാവുന്നതാണ്."
      },
      steps: {
        en: [
          "Visit norkaroots.kerala.gov.in and click 'Pravasi Raksha Insurance'",
          "Provide personal details, foreign contact details, and nominee information",
          "Upload passport and foreign visa pages",
          "Pay the insurance premium online via gateway",
          "Instantly download your Pravasi Raksha Insurance policy document and health card"
        ],
        ml: [
          "norkaroots.kerala.gov.in സന്ദർശിച്ച് 'Pravasi Raksha Insurance' തിരഞ്ഞെടുക്കുക",
          "വ്യക്തിഗത വിവരങ്ങൾ, വിദേശത്തെ ഫോൺ നമ്പർ, നോമിനിയുടെ വിവരങ്ങൾ എന്നിവ നൽകുക",
          "പാസ്‌പോർട്ട്, വിസ എന്നിവയുടെ പകർപ്പുകൾ അപ്‌ലോഡ് ചെയ്യുക",
          "നിശ്ചയിച്ച ഇൻഷുറൻസ് പ്രീമിയം തുക ഓൺലൈനായി അടയ്ക്കുക",
          "ഇൻഷുറൻസ് പോളിസി രേഖയും ഹെൽത്ത് കാർഡും തൽക്ഷണം ഡൗൺലോഡ് ചെയ്യുക"
        ]
      },
      fees: {
        en: "Government-subsidized nominal annual premium determined based on the opted coverage slab.",
        ml: "തിരഞ്ഞെടുക്കുന്ന ഇൻഷുറൻസ് പരിരക്ഷയ്ക്കനുസരിച്ചുള്ള നാമമാത്ര വാർഷിക പ്രീമിയം തുക."
      },
      validity: {
        en: "Valid for 1 year; renewable annually online.",
        ml: "1 വർഷം സാധുതയുള്ളത്; വർഷം തോറും ഓൺലൈനായി പുതുക്കാവുന്നതാണ്."
      },
      officialUrl: "https://norkaroots.kerala.gov.in/pravasi-raksha-insurance-policy",
      importantNotes: {
        en: [
          "Covers listed critical illnesses and accidental emergency hospitalization overseas.",
          "Pre-existing condition exclusion norms apply per general insurance guidelines.",
          "Facilitates emergency air-repatriation reimbursement under covered conditions."
        ],
        ml: [
          "ലിസ്റ്റ് ചെയ്തിട്ടുള്ള ഗുരുതര രോഗങ്ങൾക്കും വിദേശത്തെ അടിയന്തര ചികിത്സകൾക്കും പരിരക്ഷ ലഭിക്കും.",
          "നിലവിലുള്ള രോഗങ്ങൾക്ക് ഇൻഷുറൻസ് കമ്പനിയുടെ വ്യവസ്ഥകൾ ബാധകമാണ്.",
          "ഗുരുതര രോഗാവസ്ഥയിൽ നാട്ടിലേക്ക് രോഗിയെ എത്തിക്കുന്നതിനുള്ള ചിലവുകൾക്ക് വ്യവസ്ഥകൾക്ക് വിധേയമായി ക്ലെയിം ലഭിക്കും."
        ]
      }
    },

    // ================================================================
    // SERVICE #121: NORKA Santhwana Financial Assistance
    // ================================================================
    {
      id: "norka-santhwana-assistance",
      category: "norka",
      icon: "🤝",
      name: {
        en: "NORKA Santhwana Financial Assistance",
        ml: "നോർക്ക സാന്ത്വന ധനസഹായ പദ്ധതി"
      },
      summary: {
        en: "Ex-gratia financial distress grant for distress-stricken returnee migrants and families: up to ₹1 lakh bereavement, ₹50,000 medical, and ₹15,000 marriage aid.",
        ml: "പ്രവാസികളുടെ മരണത്തിൽ കുടുംബത്തിന് ₹1 ലക്ഷം, ചികിത്സയ്ക്ക് ₹50,000, മക്കളുടെ വിവാഹത്തിന് ₹15,000 വീതം നൽകുന്ന അടിയന്തര സാമ്പത്തിക സഹായ പദ്ധതി."
      },
      description: {
        en: "Administered directly by NORKA Roots from the Chief Minister's Pravasi Welfare Fund, Santhwana delivers direct financial relief grants to low-income distressed returnee Pravasis and their families. It provides bereavement assistance of up to ₹1,00,000 to dependents upon an NRK's death, up to ₹50,000 for critical illness treatment, and ₹15,000 for daughters' marriage assistance.",
        ml: "പ്രവാസ ജീവിതത്തിനിടയിലോ നാട്ടിൽ തിരിച്ചെത്തിയ ശേഷമോ സാമ്പത്തികമായി കഷ്ടപ്പെടുന്ന പ്രവാസികൾക്കും അവരുടെ ആശ്രിതർക്കുമായി മുഖ്യമന്ത്രിയുടെ പ്രവാസി ക്ഷേമനിധിയിൽ നിന്നും നോർക്ക റൂട്ട്സ് നൽകുന്ന അടിയന്തര ധനസഹായമാണിത്. പ്രവാസി മരണപ്പെട്ടാൽ കുടുംബത്തിന് ₹1 ലക്ഷം രൂപ, ഗുരുതര രോഗങ്ങൾക്ക് ചികിത്സാ സഹായമായി ₹50,000 രൂപ, പെൺമക്കളുടെ വിവാഹത്തിന് ₹15,000 രൂപ വീതം അനുവദിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Distressed returnee migrants who worked abroad for at least 2 continuous years OR legal dependents of deceased NRKs",
          "Annual family income must strictly NOT exceed ₹1,00,000 from all sources",
          "Claim for medical or death relief must be submitted within statutory timelines from the incident"
        ],
        ml: [
          "കുറഞ്ഞത് 2 വർഷമെങ്കിലും വിദേശത്ത് ജോലി ചെയ്ത് മടങ്ങിയെത്തിയ നിർധനരായ പ്രവാസികൾ അല്ലെങ്കിൽ മരണപ്പെട്ട പ്രവാസികളുടെ ആശ്രിതർ",
          "കുടുംബ വാർഷിക വരുമാനം ₹1,00,000 (ഒരു ലക്ഷം രൂപയിൽ) കവിയരുത്",
          "മരണം അല്ലെങ്കിൽ അസുഖം സംഭവിച്ച് നിശ്ചിത സമയത്തിനകം അപേക്ഷിച്ചിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Income Certificate issued by the Village Officer showing annual income not exceeding ₹1 lakh",
          "Passport copy proving minimum 2 years continuous overseas employment (visa & immigration stamps)",
          "Original medical treatment bills and doctor's certificate (for medical assistance claims)",
          "Death Certificate and Legal Heirship / Relationship Certificate (for death bereavement claims)",
          "Marriage Certificate / Wedding Invitation Card (for daughter's marriage assistance claims)",
          "Applicant's bank passbook copy with IFSC"
        ],
        ml: [
          "വാർഷിക വരുമാനം 1 ലക്ഷം രൂപയിൽ താഴെയാണെന്ന് കാണിക്കുന്ന വില്ലേജ് ഓഫീസറുടെ വരുമാന സർട്ടിഫിക്കറ്റ്",
          "കുറഞ്ഞത് 2 വർഷത്തെ വിദേശവാസം തെളിയിക്കുന്ന പാസ്‌പോർട്ട്, വിസ പേജുകൾ",
          "ചികിത്സാ രേഖകളും ഡോക്ടറുടെ സാക്ഷ്യപത്രവും (ചികിത്സാ സഹായത്തിന്)",
          "മരണ സർട്ടിഫിക്കറ്റും അവകാശ സർട്ടിഫിക്കറ്റും (മരണാനന്തര സഹായത്തിന്)",
          "വിവാഹ ക്ഷണക്കത്ത് / സർട്ടിഫിക്കറ്റ് (വിവാഹ സഹായത്തിന്)",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (IFSC അടങ്ങിയത്)"
        ]
      },
      howToApply: {
        en: "Submit the Santhwana grant application online via the NORKA Roots portal (norkaroots.kerala.gov.in) or submit physical files directly to the nearest NORKA District Centre.",
        ml: "നോർക്ക റൂട്ട്സ് പോർട്ടൽ (norkaroots.kerala.gov.in) വഴിയോ അടുത്തുള്ള നോർക്ക ജില്ലാ സെന്ററുകളിലോ അപേക്ഷ സമർപ്പിക്കാം."
      },
      steps: {
        en: [
          "Visit norkaroots.kerala.gov.in and click on the 'Santhwana' scheme application",
          "Choose the relief category: Death Bereavement, Medical Treatment, or Daughter Marriage",
          "Fill in overseas employment history and domestic address in Kerala",
          "Upload village income certificate, 2-year overseas proof, and relief-specific medical/death records",
          "Submit application for verification by the NORKA scrutiny committee",
          "Upon departmental sanction, relief grant is credited directly into the bank account via DBT"
        ],
        ml: [
          "norkaroots.kerala.gov.in സന്ദർശിച്ച് 'Santhwana' സ്കീം തിരഞ്ഞെടുക്കുക",
          "സഹായ വിഭാഗം (മരണാനന്തര സഹായം, ചികിത്സാ സഹായം, വിവാഹ സഹായം) തിരഞ്ഞെടുക്കുക",
          "വിദേശവാസ വിവരങ്ങളും വിലാസവും രേഖപ്പെടുത്തുക",
          "വരുമാന സർട്ടിഫിക്കറ്റ്, 2 വർഷത്തെ വിദേശവാസ രേഖ, ചികിത്സാ/മരണ രേഖകൾ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക",
          "പരിശോധനയ്ക്കായി അപേക്ഷ സമർപ്പിക്കുക",
          "അനുമതി ലഭിച്ച ശേഷം ധനസഹായ തുക നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിലേക്ക് ലഭിക്കുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0 for applying for Santhwana distress financial assistance).",
        ml: "സൗജന്യം (സാന്ത്വന ധനസഹായ അപേക്ഷയ്ക്ക് ഫീസില്ല)."
      },
      validity: {
        en: "One-time financial grant per approved relief incident.",
        ml: "ഓരോ ആവശ്യത്തിനും അനുവദിക്കപ്പെടുന്ന ഒറ്റത്തവണ സാമ്പത്തിക സഹായം."
      },
      officialUrl: "https://norkaroots.kerala.gov.in/santhwana",
      importantNotes: {
        en: [
          "Verified grant slabs: Death Bereavement: up to ₹1,00,000; Critical Medical Aid: up to ₹50,000; Daughter's Marriage Aid: ₹15,000.",
          "Strict annual income ceiling: Family income must not exceed ₹1,00,000 per year.",
          "Overseas condition: Must have completed at least 2 continuous years abroad."
        ],
        ml: [
          "സഹായ തുകകൾ: മരണാനന്തര സഹായം: ₹1 ലക്ഷം വരെ; ചികിത്സാ സഹായം: ₹50,000 വരെ; പെൺമക്കളുടെ വിവാഹ സഹായം: ₹15,000.",
          "വരുമാന പരിധി: കുടുംബ വാർഷിക വരുമാനം 1 ലക്ഷം രൂപയിൽ കവിയരുത്.",
          "വിദേശവാസ നിബന്ധന: കുറഞ്ഞത് 2 വർഷമെങ്കിലും വിദേശത്ത് ജോലി ചെയ്തിട്ടുണ്ടായിരിക്കണം."
        ]
      }
    },

    // ================================================================
    // SERVICE #122: NDPREM Returnee Rehabilitation Loan
    // ================================================================
    {
      id: "norka-ndprem-returnee-loan",
      category: "norka",
      relatedCategory: "industry-business",
      icon: "💼",
      name: {
        en: "NDPREM Returnee Rehabilitation Loan",
        ml: "നോർക്ക പുനരധിവാസ വായ്പാ പദ്ധതി (NDPREM)"
      },
      summary: {
        en: "Self-employment enterprise loans up to ₹30 lakh with 15% capital subsidy (max ₹3 lakh) and 3% interest rebate for returnee Pravasis.",
        ml: "നാട്ടിൽ തിരിച്ചെത്തിയ പ്രവാസികൾക്ക് സംരംഭങ്ങൾ തുടങ്ങാൻ 15% സബ്സിഡിയോടെ 30 ലക്ഷം രൂപ വരെ ബാങ്ക് വായ്പ നൽകുന്ന പുനരധിവാസ പദ്ധതി."
      },
      description: {
        en: "The NORKA Department Project for Returned Emigrants (NDPREM), operated by NORKA Roots in institutional tie-ups with major nationalized banks and Kerala Bank, provides financial assistance to rehabilitate returnee Pravasis. The scheme supports viable business ventures with project costs up to ₹30 lakh, offering a 15% capital investment subsidy (maximum ₹3 lakh) and a 3% interest subsidy for the first 4 years for prompt repayments.",
        ml: "വിദേശത്തുനിന്നും സ്ഥിരമായി നാട്ടിൽ മടങ്ങിയെത്തിയ പ്രവാസികൾക്ക് സ്വയംതൊഴിൽ കണ്ടെത്തുന്നതിനായി നോർക്ക റൂട്ട്സ് ബാങ്കുകളുമായി ചേർന്ന് നടപ്പിലാക്കുന്ന പദ്ധതിയാണിത് (NDPREM). പുതിയ സംരംഭങ്ങൾ, കൃഷി, വ്യാപാരം എന്നിവ ആരംഭിക്കുന്നതിനായി 30 ലക്ഷം രൂപ വരെയുള്ള വായ്പകൾക്ക് 15% മൂലധന സബ്സിഡിയും (പരമാവധി 3 ലക്ഷം രൂപ), ആദ്യത്തെ 4 വർഷത്തേക്ക് 3% പലിശ ഇളവും സർക്കാർ നൽകുന്നു."
      },
      eligibility: {
        en: [
          "Returnee migrants who have worked abroad for a minimum period of 2 continuous years and returned permanently to Kerala",
          "Must possess a viable enterprise project proposal in manufacturing, service, agriculture, or retail trade",
          "Applicant must not have defaulted on prior state rehabilitation loans"
        ],
        ml: [
          "കുറഞ്ഞത് 2 വർഷമെങ്കിലും വിദേശത്ത് ജോലി ചെയ്ത് നാട്ടിൽ സ്ഥിരതാമസമാക്കിയ പ്രവാസികൾ",
          "നിർമ്മാണം, കൃഷി, വ്യാപാരം തുടങ്ങിയ മേഖലകളിൽ വ്യക്തമായ ബിസിനസ്സ് പ്രോജക്ട് ഉള്ളവർ",
          "മുൻപ് സർക്കാർ പുനരധിവാസ വായ്പകളിൽ വീഴ്ച വരുത്താത്തവരായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Passport copies verifying minimum 2 years overseas employment (visa cancellation/arrival stamp)",
          "Detailed Project Report (DPR) detailing business plan, machinery, and capital expenditure",
          "Applicant Aadhaar Card and PAN card",
          "Premises ownership or commercial rent/lease agreement",
          "Bank passbook copy with IFSC"
        ],
        ml: [
          "2 വർഷത്തെ വിദേശവാസം തെളിയിക്കുന്ന പാസ്‌പോർട്ട്, വിസ റദ്ദാക്കിയ പേജ്",
          "തുടങ്ങാൻ ഉദ്ദേശിക്കുന്ന സംരംഭത്തിന്റെ വിശദമായ പ്രോജക്ട് റിപ്പോർട്ട് (DPR)",
          "ആധാർ കാർഡും പാൻ കാർഡും",
          "സ്ഥാപനം തുടങ്ങുന്ന സ്ഥലത്തിന്റെ ഉടമസ്ഥാവകാശ രേഖ അല്ലെങ്കിൽ വാടകക്കരാർ",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (IFSC അടങ്ങിയത്)"
        ]
      },
      howToApply: {
        en: "Apply online through the NORKA Roots portal (norkaroots.kerala.gov.in) under the NDPREM module and select your preferred lending bank.",
        ml: "നോർക്ക റൂട്ട്സ് പോർട്ടൽ (norkaroots.kerala.gov.in) വഴി ഓൺലൈനായി രജിസ്റ്റർ ചെയ്ത് പ്രോജക്ട് സമർപ്പിക്കുക."
      },
      steps: {
        en: [
          "Visit norkaroots.kerala.gov.in and select 'NDPREM Registration'",
          "Submit your personal details, overseas duration, and preferred partner bank branch",
          "Upload passport copy, visa cancellation, and Detailed Project Report (DPR)",
          "Attend screening interview conducted by NORKA screening officers",
          "NORKA issues formal recommendation letter to the designated bank",
          "Bank sanctions the term/working capital loan; capital subsidy (15%) is credited to the loan account"
        ],
        ml: [
          "norkaroots.kerala.gov.in സന്ദർശിച്ച് 'NDPREM' തിരഞ്ഞെടുക്കുക",
          "വിദേശവാസ വിവരങ്ങളും വായ്പ ആവശ്യമുള്ള ബാങ്കിന്റെ വിവരങ്ങളും നൽകുക",
          "പാസ്‌പോർട്ട്, വിസ റദ്ദാക്കിയ രേഖ, പ്രോജക്ട് റിപ്പോർട്ട് എന്നിവ അപ്‌ലോഡ് ചെയ്യുക",
          "നോർക്ക നടത്തുന്ന സ്ക്രീനിംഗ് പരിശോധനയിൽ പങ്കെടുക്കുക",
          "നോർക്കയിൽ നിന്നുള്ള ശുപാർശ കത്ത് ബാങ്കിലേക്ക് കൈമാറുന്നു",
          "ബാങ്ക് വായ്പ അനുവദിക്കുകയും 15% സബ്സിഡി തുക വായ്പാ അക്കൗണ്ടിലേക്ക് ക്രെഡിറ്റ് ചെയ്യപ്പെടുകയും ചെയ്യുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0 for online registration and NORKA project forwarding).",
        ml: "സൗജന്യം (നോർക്കയിലെ രജിസ്ട്രേഷനും ശുപാർശയ്ക്കും ഫീസില്ല)."
      },
      validity: {
        en: "Loan tenure determined by bank sanctions (typically 5 to 7 years with interest subsidies for first 4 years).",
        ml: "ബാങ്ക് വ്യവസ്ഥകൾ അനുസരിച്ചുള്ള തിരിച്ചടവ് കാലാവധി (ആദ്യ 4 വർഷത്തേക്ക് പലിശ സബ്സിഡി ലഭിക്കും)."
      },
      officialUrl: "https://norkaroots.kerala.gov.in/ndprem",
      importantNotes: {
        en: [
          "Maximum project cost ceiling: ₹30,00,000.",
          "Capital subsidy: Strictly 15% of project cost (capped at maximum ₹3,00,000).",
          "Prompt payment incentive: 3% interest subsidy for the first 4 years of active repayment.",
          "Requires minimum 2 continuous years of documented overseas employment."
        ],
        ml: [
          "പരമാവധി പ്രോജക്ട് തുക: ₹30 ലക്ഷം രൂപ.",
          "മൂലധന സബ്സിഡി: പ്രോജക്ട് തുകയുടെ 15% (പരമാവധി ₹3 ലക്ഷം രൂപ വരെ).",
          "കൃത്യമായി തിരിച്ചടയ്ക്കുന്നവർക്ക് ആദ്യ 4 വർഷത്തേക്ക് 3% പലിശ ഇളവ് ലഭിക്കും.",
          "കുറഞ്ഞത് 2 വർഷത്തെ വിദേശവാസം നിർബന്ധമാണ്."
        ]
      }
    },

    // ================================================================
    // SERVICE #123: NORKA Certificate Attestation & Apostille
    // ================================================================
    {
      id: "norka-certificate-attestation",
      category: "norka",
      relatedCategory: "education",
      icon: "📜",
      name: {
        en: "NORKA Certificate Attestation & Apostille",
        ml: "നോർക്ക സർട്ടിഫിക്കറ്റ് അറ്റസ്റ്റേഷനും അപ്പോസ്റ്റൈലും"
      },
      summary: {
        en: "State authentication, MEA Apostille, and foreign embassy attestation for educational and non-educational certificates for overseas employment.",
        ml: "വിദേശ ജോലിക്കും പഠനത്തിനുമായി വിദ്യാഭ്യാസ-വ്യക്തിഗത സർട്ടിഫിക്കറ്റുകൾക്ക് നോർക്ക നൽകുന്ന ഔദ്യോഗിക അറ്റസ്റ്റേഷൻ സേവനം."
      },
      description: {
        en: "Authorized by the Ministry of External Affairs (MEA), Government of India, the NORKA Roots Attestation Centers provide single-window authentication, Home Department state attestation, MEA Apostille, and foreign Embassy legalizations for educational certificates (degrees, diplomas) and personal documents (birth, marriage certificates).",
        ml: "വിദേശത്ത് തൊഴിൽ വിസ നേടുന്നതിനും ഉന്നതപഠനത്തിനുമായി സർട്ടിഫിക്കറ്റുകൾ നിയമവിധേയമാക്കുന്ന സേവനമാണിത്. വിദേശകാര്യ മന്ത്രാലയത്തിന്റെ അംഗീകാരത്തോടെ നോർക്ക റൂട്ട്സ് കേന്ദ്രങ്ങൾ വഴി വിദ്യാഭ്യാസ സർട്ടിഫിക്കറ്റുകൾ, ജനന-വിവാഹ സർട്ടിഫിക്കറ്റുകൾ എന്നിവ സംസ്ഥാന ആഭ്യന്തര വകുപ്പ് പരിശോധന, MEA അപ്പോസ്റ്റൈൽ, എംബസി അറ്റസ്റ്റേഷൻ എന്നിവ ഒറ്റത്തവണയായി ചെയ്തു നൽകുന്നു."
      },
      eligibility: {
        en: [
          "Any individual holding recognized educational certificates from Kerala universities/boards or non-educational certificates from state bodies",
          "Certificate must be original and verified by the concerned issuing institution"
        ],
        ml: [
          "കേരളത്തിലെ അംഗീകൃത സർവകലാശാലകൾ/ബോർഡുകൾ നൽകിയ സർട്ടിഫിക്കറ്റുകൾ ഉള്ളവർ",
          "സർട്ടിഫിക്കറ്റുകൾ ഒറിജിനൽ ആയിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Original Educational / Personal Certificates to be attested",
          "All supporting mark sheets / transcripts",
          "Original Indian Passport and clear copy",
          "Two passport size photographs"
        ],
        ml: [
          "അറ്റസ്റ്റേഷൻ ചെയ്യേണ്ട ഒറിജിനൽ സർട്ടിഫിക്കറ്റുകൾ",
          "എല്ലാ മാർക്ക് ലിസ്റ്റുകളുടെയും പകർപ്പുകൾ",
          "ഒറിജിനൽ പാസ്‌പോർട്ടും പകർപ്പും",
          "രണ്ട് പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ"
        ]
      },
      howToApply: {
        en: "Book an appointment online through norkaroots.kerala.gov.in and submit physical certificates at your chosen NORKA Roots Regional Center (Trivandrum, Ernakulam, Kozhikode) or use authorized courier facilities.",
        ml: "നോർക്ക റൂട്ട്സ് വെബ്‌സൈറ്റ് വഴി ഓൺലൈനായി അപ്പോയിന്റ്മെന്റ് ബുക്ക് ചെയ്ത ശേഷം നേരിട്ടോ അംഗീകൃത കൊറിയർ വഴിയോ നോർക്ക റീജിയണൽ സെന്ററുകളിൽ (തിരുവനന്തപുരം, എറണാകുളം, കോഴിക്കോട്) ഹാജരാക്കുക."
      },
      steps: {
        en: [
          "Visit norkaroots.kerala.gov.in and click on 'Certificate Attestation'",
          "Create a profile, enter certificate details, and select required attestation type (HRD / MEA / Embassy)",
          "Book a convenient date slot at the nearest NORKA Regional Center",
          "Pay the statutory verification charges online",
          "Visit the center with original documents on the scheduled slot or send via authorized courier",
          "Collect the verified certificates affixed with NORKA and MEA security stickers"
        ],
        ml: [
          "norkaroots.kerala.gov.in സന്ദർശിച്ച് 'Certificate Attestation' തിരഞ്ഞെടുക്കുക",
          "വിവരങ്ങൾ നൽകി ആവശ്യമുള്ള അറ്റസ്റ്റേഷൻ തരം (HRD / MEA / എംബസി) തിരഞ്ഞെടുക്കുക",
          "അടുത്തുള്ള നോർക്ക സെന്ററിൽ സൗകര്യപ്രദമായ തീയതി ബുക്ക് ചെയ്യുക",
          "ഫീസ് ഓൺലൈനായി അടയ്ക്കുക",
          "നിശ്ചയിച്ച തീയതിയിൽ ഒറിജിനൽ രേഖകളുമായി നേരിട്ടെത്തുക അല്ലെങ്കിൽ കൊറിയർ വഴി അയക്കുക",
          "അറ്റസ്റ്റേഷൻ പൂർത്തിയാക്കിയ രേഖകൾ കൈപ്പറ്റുക"
        ]
      },
      fees: {
        en: "Prescribed statutory administrative fee per certificate plus applicable University verification charges and Embassy consular tariffs.",
        ml: "ഓരോ സർട്ടിഫിക്കറ്റിനും നിശ്ചയിച്ചിട്ടുള്ള നാമമാത്ര നോർക്ക ഫീസും അതത് സർവകലാശാല/എംബസി നിരക്കുകളും."
      },
      validity: {
        en: "Permanent authentication (subject to foreign country entry and visa validity requirements).",
        ml: "സ്ഥിരമായ നിയമസാധുതയുള്ള അറ്റസ്റ്റേഷൻ."
      },
      officialUrl: "https://norkaroots.kerala.gov.in/certificate-attestation",
      importantNotes: {
        en: [
          "Original certificates are strictly mandatory for stamping.",
          "Attestation centers are operational in Thiruvananthapuram, Ernakulam, and Kozhikode.",
          "Apostille is mandatory for member countries of the Hague Apostille Convention."
        ],
        ml: [
          "അറ്റസ്റ്റേഷന് ഒറിജിനൽ സർട്ടിഫിക്കറ്റുകൾ നിർബന്ധമാണ്.",
          "തിരുവനന്തപുരം, എറണാകുളം, കോഴിക്കോട് നോർക്ക സെന്ററുകൾ വഴിയാണ് ഈ സേവനം ലഭിക്കുന്നത്.",
          "ഹേഗ് കൺവെൻഷൻ രാജ്യങ്ങളിലേക്ക് പോകുന്നവർക്ക് MEA അപ്പോസ്റ്റൈൽ നിർബന്ധമാണ്."
        ]
      }
    }
  ];

  if (window.SevaRegistry && typeof window.SevaRegistry.register === "function") {
    window.SevaRegistry.register(data);
  } else {
    window.SevaRegistry.norka = data;
  }
})();
