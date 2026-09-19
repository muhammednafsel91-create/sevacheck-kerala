// ==========================================
// SEVACHECK KERALA — DATA MODULE
// Category: Education (4 Services)
// File: data/cat-education.js
// ==========================================

(function () {
  const data = [
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
    }
  ];

  if (window.SevaRegistry && typeof window.SevaRegistry.register === "function") {
    window.SevaRegistry.register(data);
  } else {
    console.error("SevaRegistry not found when loading cat-education.js");
  }
})();
