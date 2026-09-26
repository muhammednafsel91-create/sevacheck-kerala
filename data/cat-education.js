// ==========================================
// SEVACHECK KERALA — DATA MODULE
// Category: Education (10 Services: Core + #124 to #128)
// File: data/cat-education.js
// ==========================================

(function () {
  "use strict";

  window.SevaRegistry = window.SevaRegistry || {};

  var data = [
    // ================================================================
    // SERVICE: e-Grantz Scholarship
    // ================================================================
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
          "Student Identity Proof / Card (must be linked to bank account for DBT)",
          "Community / Caste Certificate",
          "Income Certificate issued by Revenue Authority",
          "Bank Passbook copy with IFSC and active account number",
          "College admission allotment memo and fee receipt"
        ],
        ml: [
          "വിദ്യാർത്ഥിയുടെ തിരിച്ചറിയൽ രേഖ (ബാങ്കുമായി ലിങ്ക് ചെയ്തത്)",
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
          "Register student profile on egrantz.kerala.gov.in.",
          "Upload caste, income certificates, and college admission data.",
          "Submit application to institutional clerk for college-level verification.",
          "Sanctioned funds are disbursed directly to bank account via DBT."
        ],
        ml: [
          "വിദ്യാർത്ഥി ഇ-ഗ്രാന്റ്സ് പോർട്ടലിൽ വിവരങ്ങൾ നൽകി പ്രൊഫൈൽ തയ്യാറാക്കുക.",
          "ജാതി, വരുമാന സർട്ടിഫിക്കറ്റുകളും ബാങ്ക് വിവരങ്ങളും നൽകുക.",
          "കോളേജിൽ അപേക്ഷ സമർപ്പിച്ച് വെരിഫിക്കേഷൻ പൂർത്തിയാക്കുക.",
          "ഫണ്ട് നേരിട്ട് വിദ്യാർത്ഥിയുടെ ബാങ്ക് അക്കൗണ്ടിലേക്ക് എത്തും."
        ]
      },
      officialUrl: "https://egrantz.kerala.gov.in",
      notes: {
        en: "Bank account must have active NPCI seeding to receive DBT scholarship credits without rejection.",
        ml: "ബാങ്ക് അക്കൗണ്ട് NPCI സീഡിംഗ് നടത്തിയിരിക്കണം."
      },
      lastVerified: "March 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Kerala Higher Education Scholarships
    // ================================================================
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
          "Student's Identity Proof / Card",
          "Mark sheets of qualifying examinations (SSLC, Plus Two, Degree)",
          "Income Certificate issued by Revenue Village Officer",
          "College Bonafide Student Certificate",
          "Bank Passbook showing active account details"
        ],
        ml: [
          "വിദ്യാർത്ഥിയുടെ തിരിച്ചറിയൽ രേഖ",
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

    // ================================================================
    // SERVICE: Educational Board & University Certificates
    // ================================================================
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

    // ================================================================
    // SERVICE: Competitive Exam & Entrance Services
    // ================================================================
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
          "Recognized identity proof",
          "Educational qualification certificates and mark sheets"
        ],
        ml: [
          "പേരും തീയതിയും രേഖപ്പെടുത്തിയ പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോ",
          "നിശ്ചിത അളവിലുള്ള ഒപ്പ് സ്കാൻ ചെയ്തത്",
          "ഔദ്യോഗിക തിരിച്ചറിയൽ രേഖ",
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

    // ================================================================
    // SERVICE: DWMS Job Seeker Registration
    // ================================================================
    {
      id: "dwms-job-seeker-registration",
      category: "education",
      icon: "💼",
      name: {
        en: "DWMS Job Seeker Registration",
        ml: "ഡിജിറ്റൽ വർക്ക്ഫോഴ്സ് ജോബ് സീക്കർ രജിസ്ട്രേഷൻ (DWMS)"
      },
      summary: {
        en: "Registration on Kerala Knowledge Economy Mission's Digital Workforce Management System (DWMS) connecting educated job seekers with employment opportunities, skill training, and career counseling.",
        ml: "കേരള നോളജ് ഇക്കോണമി മിഷന്റെ ഡിജിറ്റൽ വർക്ക്ഫോഴ്സ് മാനേജ്മെന്റ് സിസ്റ്റം (DWMS) വഴി ഉദ്യോഗാർത്ഥികൾക്ക് തൊഴിലവസരങ്ങളും നൈപുണ്യ പരിശീലനങ്ങളും ലഭ്യമാക്കുന്ന പദ്ധതി."
      },
      whoNeeds: {
        en: "Educated job seekers, fresh graduates, diploma holders, ITI pass-outs, and professionals seeking private, remote, or gig employment.",
        ml: "വിദ്യാഭ്യാസം പൂർത്തിയാക്കിയ ഉദ്യോഗാർത്ഥികൾ, പുതിയ ബിരുദധാരികൾ, പ്രൊഫഷണലുകൾ, നൈപുണ്യ വികസനവും തൊഴിലും ആഗ്രഹിക്കുന്നവർ."
      },
      eligibility: {
        en: "Citizens residing in Kerala having minimum educational qualification of 10th standard, Plus Two, ITI, Diploma, Degree, or Post Graduation.",
        ml: "എസ്.എസ്.എൽ.സി, പ്ലസ് ടു, ഐ.ടി.ഐ, ഡിപ്ലോമ, ബിരുദം അല്ലെങ്കിൽ ബിരുദാനന്തര ബിരുദ യോഗ്യതയുള്ള കേരളത്തിലെ ഏതൊരു ഉദ്യോഗാർത്ഥിക്കും."
      },
      documents: {
        en: [
          "Educational Qualification Certificates and consolidated mark sheets",
          "Curriculum Vitae (Resume / CV) in PDF or Word format",
          "Recognized photo identity proof",
          "Active mobile number and email ID for profile creation and OTP verification"
        ],
        ml: [
          "വിദ്യാഭ്യാസ യോഗ്യതാ സർട്ടിഫിക്കറ്റുകളും മാർക്ക് ലിസ്റ്റുകളും",
          "തയ്യാറാക്കിയ റെസ്യുമെ (ബയോഡാറ്റ / CV)",
          "തിരിച്ചറിയൽ രേഖ",
          "ഒ.ടി.പിയും തൊഴിൽ വിവരങ്ങളും ലഭിക്കാനുള്ള മൊബൈൽ നമ്പറും ഇമെയിൽ വിലാസവും"
        ]
      },
      additionalDocs: {
        en: [
          "Experience certificates from previous employers (for experienced candidates)",
          "Technical skill certifications or portfolio links"
        ],
        ml: [
          "മുൻ തൊഴിൽ പരിചയ സർട്ടിഫിക്കറ്റുകൾ (പരിചയസമ്പന്നർക്ക്)",
          "പ്രത്യേക നൈപുണ്യ കോഴ്സ് സർട്ടിഫിക്കറ്റുകൾ"
        ]
      },
      whereToApply: {
        en: "Online via Kerala Knowledge Economy Mission Portal (knowledgemission.kerala.gov.in) or DWMS Connect mobile application.",
        ml: "കേരള നോളജ് ഇക്കോണമി മിഷൻ പോർട്ടൽ (knowledgemission.kerala.gov.in) അല്ലെങ്കിൽ DWMS Connect മൊബൈൽ ആപ്പ് വഴി."
      },
      mode: {
        en: "100% Online (Web & DWMS Mobile App)",
        ml: "പൂർണ്ണമായും ഓൺലൈൻ (വെബ്സൈറ്റ് & മൊബൈൽ ആപ്പ്)"
      },
      steps: {
        en: [
          "Visit knowledgemission.kerala.gov.in or download the DWMS Connect mobile app.",
          "Register using your mobile number and authenticate via OTP.",
          "Build your digital career profile by filling in educational background, career preferences, and work experience.",
          "Upload your updated resume (CV) and passport-size photo.",
          "Complete skill assessments, access robotic interview coaching, and apply directly to matching private and international vacancies."
        ],
        ml: [
          "knowledgemission.kerala.gov.in പോർട്ടൽ സന്ദർശിക്കുക അല്ലെങ്കിൽ DWMS Connect ആപ്പ് ഡൗൺലോഡ് ചെയ്യുക.",
          "മൊബൈൽ നമ്പർ നൽകി ഒ.ടി.പി വഴി അക്കൗണ്ട് രജിസ്റ്റർ ചെയ്യുക.",
          "വിദ്യാഭ്യാസ യോഗ്യതകളും താൽപ്പര്യമുള്ള തൊഴിൽ മേഖലകളും രേഖപ്പെടുത്തി പ്രൊഫൈൽ പൂർത്തിയാക്കുക.",
          "റെസ്യുമെ (ബയോഡാറ്റ), ഫോട്ടോ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക.",
          "സ്കിൽ അസസ്സ്മെന്റുകൾ പൂർത്തിയാക്കി അനുയോജ്യമായ തൊഴിലുകളിലേക്ക് നേരിട്ട് അപേക്ഷിക്കുക."
        ]
      },
      officialUrl: "https://knowledgemission.kerala.gov.in",
      notes: {
        en: "Registration and career counseling on DWMS are completely free of charge. The mission does not collect fees for job placements.",
        ml: "ഡിജിറ്റൽ വർക്ക്ഫോഴ്സ് മാനേജ്മെന്റ് സിസ്റ്റത്തിലെ രജിസ്ട്രേഷനും സേവനങ്ങളും തികച്ചും സൗജന്യമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE #124: OBC Competitive Examination Assistance
    // ================================================================
    {
      id: "obc-competitive-exam-assistance",
      category: "education",
      icon: "📚",
      name: {
        en: "OBC Competitive Examination Assistance",
        ml: "ഒ.ബി.സി മത്സരപരീക്ഷാ പരിശീലന ധനസഹായം"
      },
      summary: {
        en: "Financial assistance/fee reimbursement for eligible OBC candidates preparing for competitive examinations under the Backward Classes Development Department.",
        ml: "പിന്നോക്ക വിഭാഗ വികസന വകുപ്പ് വഴി ഒ.ബി.സി ഉദ്യോഗാർത്ഥികൾക്ക് മത്സരപരീക്ഷാ പരിശീലനത്തിനായി നൽകുന്ന ഫീസ് ധനസഹായം."
      },
      description: {
        en: "This educational empowerment scheme, administered by the Backward Classes Development Department (BCDD), Government of Kerala, through the Medhas scholarship portal, provides financial assistance and coaching fee reimbursement to eligible Other Backward Classes (OBC) candidates preparing for civil services, banking, PSC, SSC, and other recognized competitive examinations.",
        ml: "കേരള പിന്നോക്ക വിഭാഗ വികസന വകുപ്പ് (BCDD) മേധാസ് പോർട്ടൽ വഴി നടപ്പിലാക്കുന്ന പദ്ധതിയാണിത്. സിവിൽ സർവീസ്, പി.എസ്.സി, ബാങ്കിംഗ്, എസ്.എസ്.സി തുടങ്ങിയ മത്സരപരീക്ഷകൾക്കായി അംഗീകൃത സ്ഥാപനങ്ങളിൽ പരിശീലനം നടത്തുന്ന ഒ.ബി.സി വിഭാഗത്തിലെ അർഹരായ ഉദ്യോഗാർത്ഥികൾക്ക് കോച്ചിംഗ് ഫീസ് ധനസഹായമായി ലഭ്യമാക്കുന്നു."
      },
      eligibility: {
        en: [
          "Applicant must belong to an Other Backward Classes (OBC) community recognized by the Government of Kerala",
          "Must have secured admission in a recognized competitive examination coaching institution",
          "Annual family income must not exceed ₹4,50,000 (as per official BCDD scheme guidelines)",
          "Minimum qualifying degree marks and other academic criteria as specified in the official scheme notification"
        ],
        ml: [
          "കേരള സർക്കാർ അംഗീകരിച്ച ഒ.ബി.സി (OBC) വിഭാഗത്തിൽ ഉൾപ്പെടുന്നവരായിരിക്കണം",
          "അംഗീകൃത മത്സരപരീക്ഷാ പരിശീലന സ്ഥാപനങ്ങളിൽ അഡ്മിഷൻ നേടിയവരായിരിക്കണം",
          "കുടുംബ വാർഷിക വരുമാനം ₹4,50,000-ൽ കവിയരുത്",
          "ബിരുദ പരീക്ഷയിലെ നിശ്ചിത മാർക്കും ഔദ്യോഗിക വിജ്ഞാപനത്തിലെ മറ്റ് യോഗ്യതാ മാനദണ്ഡങ്ങളും പാലിച്ചിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Non-Creamy Layer / Community Certificate issued by the competent revenue authority",
          "Income Certificate from Village Officer (verifying annual family income ≤ ₹4,50,000)",
          "Proof of admission and fee receipt from the competitive examination coaching institution",
          "Qualifying educational degree certificate and consolidated mark list",
          "Identity proof (Accepted official photo ID)",
          "Student's single-holder bank account passbook copy with IFSC"
        ],
        ml: [
          "വില്ലേജ് ഓഫീസിൽ നിന്നുള്ള നോൺ-ക്രീമിലെയർ / കമ്മ്യൂണിറ്റി സർട്ടിഫിക്കറ്റ്",
          "വില്ലേജ് ഓഫീസറിൽ നിന്നുള്ള വരുമാന സർട്ടിഫിക്കറ്റ് (വാർഷിക വരുമാനം ₹4,50,000-ൽ താഴെ)",
          "പരിശീലന സ്ഥാപനത്തിലെ അഡ്മിഷൻ രേഖയും ഫീസ് അടച്ച രസീതും",
          "വിദ്യാഭ്യാസ യോഗ്യത തെളിയിക്കുന്ന ഡിഗ്രി സർട്ടിഫിക്കറ്റും മാർക്ക് ലിസ്റ്റും",
          "തിരിച്ചറിയൽ രേഖ (അംഗീകൃത ഫോട്ടോ പതിച്ച ഐഡി)",
          "വിദ്യാർത്ഥിയുടെ പേരിലുള്ള ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (IFSC വ്യക്തമായത്)"
        ]
      },
      howToApply: {
        en: "Apply online through the official Medhas scholarship portal (medhas.kerala.gov.in) against the annual notification issued by the Backward Classes Development Department.",
        ml: "പിന്നോക്ക വിഭാഗ വികസന വകുപ്പിന്റെ വാർഷിക വിജ്ഞാപനം അനുസരിച്ച് മേധാസ് പോർട്ടൽ (medhas.kerala.gov.in) വഴി ഓൺലൈനായി അപേക്ഷിക്കുക."
      },
      steps: {
        en: [
          "Visit the official Medhas portal (medhas.kerala.gov.in) and register using student details",
          "Select 'Competitive Examination Coaching Assistance' and complete the application form",
          "Upload scanned copies of community certificate, income certificate, qualifying mark lists, and coaching fee receipts",
          "Submit the application online and download the acknowledgment slip",
          "Institutional and departmental verification is completed online by BCDD officials",
          "Sanctioned financial assistance is transferred directly into the applicant's bank account via DBT"
        ],
        ml: [
          "മേധാസ് പോർട്ടൽ (medhas.kerala.gov.in) സന്ദർശിച്ച് വിദ്യാർത്ഥിയുടെ വിവരങ്ങൾ നൽകി രജിസ്റ്റർ ചെയ്യുക",
          "'Competitive Examination Coaching Assistance' സ്കീം തിരഞ്ഞെടുത്ത് അപേക്ഷ പൂരിപ്പിക്കുക",
          "കമ്മ്യൂണിറ്റി സർട്ടിഫിക്കറ്റ്, വരുമാന സർട്ടിഫിക്കറ്റ്, യോഗ്യതാ സർട്ടിഫിക്കറ്റ്, കോച്ചിംഗ് ഫീസ് രസീത് എന്നിവ അപ്‌ലോഡ് ചെയ്യുക",
          "അപേക്ഷ സമർപ്പിച്ച് അക്നോളജ്മെന്റ് രസീത് സൂക്ഷിക്കുക",
          "വകുപ്പുതല പരിശോധനകൾ പൂർത്തിയായ ശേഷം അപേക്ഷ അംഗീകരിക്കപ്പെടുന്നു",
          "ധനസഹായ തുക ഡി.ബി.ടി (DBT) വഴി വിദ്യാർത്ഥിയുടെ ബാങ്ക് അക്കൗണ്ടിലേക്ക് നേരിട്ടെത്തുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0 for submitting online application on the Medhas portal).",
        ml: "സൗജന്യം (മേധാസ് പോർട്ടൽ വഴിയുള്ള അപേക്ഷയ്ക്ക് ഫീസില്ല)."
      },
      validity: {
        en: "Sanctioned for the specific competitive examination coaching period; generally permitted once per candidate for a particular exam category.",
        ml: "പരിശീലന കാലയളവിലേക്ക് മാത്രം; സാധാരണയായി ഒരു നിശ്ചിത പരീക്ഷാ വിഭാഗത്തിന് ഒരു തവണ മാത്രമേ അനുവദിക്കൂ."
      },
      officialUrl: "https://medhas.kerala.gov.in/",
      importantNotes: {
        en: [
          "Income ceiling is strictly ₹4,50,000 per annum as verified under official BCDD rules.",
          "Assistance is provided as reimbursement/support towards course fees incurred at approved coaching institutions.",
          "Candidates can avail assistance under this scheme subject to annual budget allocation and merit selection criteria."
        ],
        ml: [
          "കുടുംബ വാർഷിക വരുമാന പരിധി കൃത്യം ₹4,50,000 രൂപയാണ്.",
          "അംഗീകൃത സ്ഥാപനങ്ങളിൽ പഠിക്കുന്നതിന് വരുന്ന ഫീസ് ആനുകൂല്യമായാണ് ഇത് അനുവദിക്കുന്നത്.",
          "സർക്കാർ വിജ്ഞാപന മാനദണ്ഡങ്ങൾക്കും മെറിറ്റിനും വിധേയമായിട്ടായിരിക്കും ധനസഹായം ലഭിക്കുക."
        ]
      }
    },

    // ================================================================
    // SERVICE #125: CA / CMA / CS Scholarship for OBC Students
    // ================================================================
    {
      id: "ca-cma-cs-scholarship-obc",
      category: "education",
      icon: "📊",
      name: {
        en: "CA / CMA / CS Scholarship for OBC Students",
        ml: "ഒ.ബി.സി വിദ്യാർത്ഥികൾക്കുള്ള സി.എ / സി.എം.എ / സി.എസ് സ്കോളർഷിപ്പ്"
      },
      summary: {
        en: "Financial assistance and scholarship for meritorious OBC students pursuing professional accounting courses (CA, CMA, CS) under the Backward Classes Development Department.",
        ml: "പ്രൊഫഷണൽ കോഴ്സുകളായ സി.എ, സി.എം.എ, സി.എസ് പഠിക്കുന്ന ഒ.ബി.സി വിദ്യാർത്ഥികൾക്ക് പിന്നോക്ക വിഭാഗ വികസന വകുപ്പ് നൽകുന്ന സ്കോളർഷിപ്പ്."
      },
      description: {
        en: "Implemented by the Backward Classes Development Department (BCDD) via the Medhas portal, this scholarship supports eligible Other Backward Classes (OBC) students enrolled in professional accounting and corporate secretaryship programs (Chartered Accountancy - ICAI, Cost and Management Accountancy - ICMAI, and Company Secretary - ICSI) to cover course registration, tuition, and examination fees.",
        ml: "പ്രൊഫഷണൽ ഫിനാൻസ് കോഴ്സുകളായ സി.എ (ICAI), സി.എം.എ (ICMAI), സി.എസ് (ICSI) എന്നിവ പഠിക്കുന്ന ഒ.ബി.സി വിദ്യാർത്ഥികൾക്കായി പിന്നോക്ക വിഭാഗ വികസന വകുപ്പ് മേധാസ് പോർട്ടൽ വഴി നൽകുന്ന സ്കോളർഷിപ്പാണിത്. രജിസ്ട്രേഷൻ ഫീസ്, ട്യൂഷൻ ഫീസ്, പരീക്ഷാ ഫീസ് എന്നിവയ്ക്ക് സാമ്പത്തിക സഹായം നൽകാൻ ഇത് സഹായിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Applicant must belong to an Other Backward Classes (OBC) community of Kerala",
          "Must be registered in Foundation, Intermediate / Executive, or Final levels of ICAI, ICMAI, or ICSI",
          "Annual family income must not exceed ₹4,50,000",
          "Must satisfy course stage progression and passing requirements stipulated by the department"
        ],
        ml: [
          "കേരളത്തിലെ ഒ.ബി.സി (OBC) വിഭാഗത്തിൽ ഉൾപ്പെടുന്ന വിദ്യാർത്ഥിയായിരിക്കണം",
          "ICAI, ICMAI അല്ലെങ്കിൽ ICSI പ്രൊഫഷണൽ സ്ഥാപനങ്ങളിൽ ഫൗണ്ടേഷൻ, ഇന്റർമീഡിയറ്റ്/എക്സിക്യൂട്ടീവ്, ഫൈനൽ തലങ്ങളിൽ രജിസ്റ്റർ ചെയ്തവരായിരിക്കണം",
          "കുടുംബ വാർഷിക വരുമാനം ₹4,50,000-ൽ കവിയരുത്",
          "വകുപ്പ് നിഷ്കർഷിക്കുന്ന അക്കാദമിക് യോഗ്യതകളും പരീക്ഷാ വിജയ മാനദണ്ഡങ്ങളും പാലിച്ചിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Community / Non-Creamy Layer Certificate issued by the competent revenue authority",
          "Income Certificate from Village Officer (annual family income ≤ ₹4,50,000)",
          "Valid student registration letter / identity proof issued by ICAI / ICMAI / ICSI",
          "Fee payment receipts for course registration and examination",
          "Marks card / passing certificate of previous qualifying level / degree / Plus Two",
          "Identity proof and student bank account passbook copy with IFSC"
        ],
        ml: [
          "വില്ലേജ് ഓഫീസിൽ നിന്നുള്ള കമ്മ്യൂണിറ്റി / നോൺ-ക്രീമിലെയർ സർട്ടിഫിക്കറ്റ്",
          "വില്ലേജ് ഓഫീസറുടെ വരുമാന സർട്ടിഫിക്കറ്റ് (വാർഷിക വരുമാനം ₹4,50,000-ൽ താഴെ)",
          "പ്രൊഫഷണൽ ഇൻസ്റ്റിറ്റ്യൂട്ടിൽ (ICAI/ICMAI/ICSI) നിന്നുള്ള രജിസ്ട്രേഷൻ രേഖ / സ്റ്റുഡന്റ് കാർഡ്",
          "കോഴ്സ് രജിസ്ട്രേഷൻ ഫീസും പരീക്ഷാ ഫീസും അടച്ച രസീതുകൾ",
          "മുൻപത്തെ യോഗ്യതാ പരീക്ഷാ മാർക്ക് ലിസ്റ്റ്",
          "തിരിച്ചറിയൽ രേഖയും വിദ്യാർത്ഥിയുടെ ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പും"
        ]
      },
      howToApply: {
        en: "Apply online through the e-Grantz portal (egrantz.kerala.gov.in) upon publication of the annual notification by the Backward Classes Development Department.",
        ml: "പിന്നോക്ക വിഭാഗ വികസന വകുപ്പിന്റെ വാർഷിക വിജ്ഞാപനം വരുമ്പോൾ ഇ-ഗ്രാന്റ്സ് പോർട്ടൽ (egrantz.kerala.gov.in) വഴി ഓൺലൈനായി അപേക്ഷിക്കുക."
      },
      steps: {
        en: [
          "Register your profile on the e-Grantz scholarship portal (egrantz.kerala.gov.in)",
          "Select the scholarship scheme for CA / CMA / CS professional course students",
          "Enter registration details from ICAI / ICMAI / ICSI, current course level, and institution details",
          "Upload scanned copies of community certificate, income certificate, institute ID, and fee vouchers",
          "Submit the online application and keep the acknowledgment printout",
          "Upon departmental verification, scholarship funds are disbursed directly into the student's bank account via DBT"
        ],
        ml: [
          "ഇ-ഗ്രാന്റ്സ് പോർട്ടലിൽ (egrantz.kerala.gov.in) പ്രൊഫൈൽ രജിസ്റ്റർ ചെയ്യുക",
          "സി.എ / സി.എം.എ / സി.എസ് പ്രൊഫഷണൽ സ്കോളർഷിപ്പ് സ്കീം തിരഞ്ഞെടുക്കുക",
          "ഇൻസ്റ്റിറ്റ്യൂട്ട് രജിസ്ട്രേഷൻ വിവരങ്ങളും കോഴ്സ് ലെവലും ഫീസ് വിവരങ്ങളും നൽകുക",
          "കമ്മ്യൂണിറ്റി സർട്ടിഫിക്കറ്റ്, വരുമാന സർട്ടിഫിക്കറ്റ്, ഇൻസ്റ്റിറ്റ്യൂട്ട് രേഖകൾ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക",
          "അപേക്ഷ സമർപ്പിച്ച് അക്നോളജ്മെന്റ് രസീത് പ്രിന്റ് ചെയ്ത് സൂക്ഷിക്കുക",
          "പരിശോധനകൾക്ക് ശേഷം സ്കോളർഷിപ്പ് തുക വിദ്യാർത്ഥിയുടെ ബാങ്ക് അക്കൗണ്ടിലേക്ക് എത്തും"
        ]
      },
      fees: {
        en: "Free (₹0 for online application on the e-Grantz portal).",
        ml: "സൗജന്യം (ഇ-ഗ്രാന്റ്സ് പോർട്ടലിലെ അപേക്ഷയ്ക്ക് ഫീസില്ല)."
      },
      validity: {
        en: "Valid for the applied course level / stage; renewable for subsequent levels upon passing and submitting fresh verification.",
        ml: "അപേക്ഷിച്ച നിശ്ചിത കോഴ്സ് ലെവലിലേക്ക് സാധുതയുള്ളത്; അടുത്ത ലെവലിലേക്ക് വിജയിക്കുന്ന മുറയ്ക്ക് പുതുക്കാവുന്നതാണ്."
      },
      officialUrl: "https://egrantz.kerala.gov.in/",
      importantNotes: {
        en: [
          "Annual family income ceiling is strictly ₹4,50,000.",
          "Applicable specifically to students pursuing recognized professional finance courses (CA, CMA, CS); not applicable to generic commerce degrees.",
          "Renewal across course stages (Foundation to Intermediate, Intermediate to Final) requires proof of passing the preceding stage."
        ],
        ml: [
          "കുടുംബ വാർഷിക വരുമാന പരിധി കൃത്യം ₹4,50,000 രൂപയാണ്.",
          "സി.എ, സി.എം.എ, സി.എസ് എന്നീ പ്രൊഫഷണൽ കോഴ്സുകൾക്ക് മാത്രമുള്ളതാണ് (സാധാരണ കൊമേഴ്സ് ഡിഗ്രികൾക്ക് ബാധകമല്ല).",
          "അടുത്ത ഘട്ടങ്ങളിലേക്ക് സ്കോളർഷിപ്പ് പുതുക്കുന്നതിന് മുൻപത്തെ പരീക്ഷ ജയിച്ച സർട്ടിഫിക്കറ്റ് ഹാജരാക്കേണ്ടതാണ്."
        ]
      }
    },

    // ================================================================
    // SERVICE #126: Civil Services SC Training Aid
    // ================================================================
    {
      id: "civil-services-sc-training-aid",
      category: "education",
      icon: "🏛️",
      name: {
        en: "Civil Services Training Assistance for SC Candidates",
        ml: "പട്ടികജാതി ഉദ്യോഗാർത്ഥികൾക്കുള്ള സിവിൽ സർവീസ് പരീക്ഷാ പരിശീലന സഹായം"
      },
      summary: {
        en: "Training assistance, course fee support, and boarding stipends for eligible Scheduled Caste candidates preparing for UPSC Civil Services Examinations under SCDD.",
        ml: "പട്ടികജാതി വികസന വകുപ്പ് വഴി അർഹരായ ഉദ്യോഗാർത്ഥികൾക്ക് യു.പി.എസ്.സി സിവിൽ സർവീസ് പരീക്ഷാ പരിശീലനത്തിനും താമസത്തിനും നൽകുന്ന ധനസഹായം."
      },
      description: {
        en: "This specialized coaching support program is administered by the Scheduled Castes Development Department (SCDD), Government of Kerala. It sponsors eligible Scheduled Caste graduates preparing for the UPSC Civil Services Examination (Prelims/Mains/Interview) at the Kerala State Civil Service Academy (KSCSA) or recognized private institutions, providing course tuition support along with monthly boarding and lodging stipends. This is a targeted competitive training assistance service, not a generic college scholarship.",
        ml: "പട്ടികജാതി വികസന വകുപ്പ് (SCDD) മുഖേന നടപ്പിലാക്കുന്ന പ്രത്യേക പരിശീലന പദ്ധതിയാണിത്. യു.പി.എസ്.സി സിവിൽ സർവീസ് പരീക്ഷയ്ക്ക് തയ്യാറെടുക്കുന്ന പട്ടികജാതി വിഭാഗത്തിലെ ബിരുദധാരികൾക്ക് കേരള സ്റ്റേറ്റ് സിവിൽ സർവീസ് അക്കാദമി (KSCSA) വഴിയോ അംഗീകൃത സ്വകാര്യ പരിശീലന കേന്ദ്രങ്ങൾ വഴിയോ സൗജന്യ പരിശീലനവും പ്രതിമാസ താമസ-ഭക്ഷണ സ്റ്റൈപ്പൻഡും ലഭ്യമാക്കുന്നു. ഇത് കോളേജ് പഠന സ്കോളർഷിപ്പല്ല, സിവിൽ സർവീസ് പരീക്ഷാ പരിശീലന ധനസഹായമാണ്."
      },
      eligibility: {
        en: [
          "Candidate must belong to a Scheduled Caste (SC) community of Kerala",
          "Must hold a recognized university degree (Graduation completed)",
          "Must be selected through the departmental screening / entrance test conducted by the department or the Civil Service Academy",
          "Must satisfy age and income conditions stipulated in the annual departmental scheme notification"
        ],
        ml: [
          "കേരളത്തിലെ പട്ടികജാതി (SC) വിഭാഗത്തിൽ ഉൾപ്പെടുന്നവരായിരിക്കണം",
          "അംഗീകൃത സർവകലാശാലാ ബിരുദം പൂർത്തിയാക്കിയിരിക്കണം",
          "വകുപ്പോ സിവിൽ സർവീസ് അക്കാദമിയോ നടത്തുന്ന പ്രവേശന പരീക്ഷയിലോ സെലക്ഷൻ ലിസ്റ്റിലോ തിരഞ്ഞെടുക്കപ്പെടണം",
          "വാർഷിക വിജ്ഞാപനത്തിൽ പറയുന്ന പ്രായ-വരുമാന മാനദണ്ഡങ്ങൾ പാലിച്ചിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Community / Caste Certificate issued by the competent Tahsildar / Village Officer",
          "Income Certificate from Village Officer (as required per scheme notification)",
          "Degree Certificate and Consolidated Mark List",
          "Entrance test scorecard / selection memo from KSCSA or recognized training institute",
          "Identity proof (Accepted official photo ID)",
          "Candidate's bank passbook copy with IFSC"
        ],
        ml: [
          "തഹസിൽദാർ / വില്ലേജ് ഓഫീസർ നൽകിയ ജാതി സർട്ടിഫിക്കറ്റ് (Caste Certificate)",
          "വില്ലേജ് ഓഫീസറിൽ നിന്നുള്ള വരുമാന സർട്ടിഫിക്കറ്റ് (വിജ്ഞാപന പ്രകാരം)",
          "ഡിഗ്രി സർട്ടിഫിക്കറ്റും മാർക്ക് ലിസ്റ്റും",
          "സിവിൽ സർവീസ് അക്കാദമി സെലക്ഷൻ മെമ്മോ അല്ലെങ്കിൽ അഡ്മിഷൻ രേഖ",
          "തിരിച്ചറിയൽ രേഖ (അംഗീകൃത ഫോട്ടോ പതിച്ച തിരിച്ചറിയൽ രേഖ)",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (IFSC അടങ്ങിയത്)"
        ]
      },
      howToApply: {
        en: "Apply through the official Scheduled Castes Development Department portal (scdd.kerala.gov.in) or submit the prescribed application against the annual Civil Services coaching notification issued by the Directorate of Scheduled Castes Development.",
        ml: "പട്ടികജാതി വികസന വകുപ്പിന്റെ ഔദ്യോഗിക വെബ്സൈറ്റ് (scdd.kerala.gov.in) വഴിയോ വകുപ്പ് പുറപ്പെടുവിക്കുന്ന വാർഷിക വിജ്ഞാപനം അനുസരിച്ചോ അപേക്ഷ സമർപ്പിക്കുക."
      },
      steps: {
        en: [
          "Monitor the official SCDD notification for Civil Services coaching sponsorship",
          "Appear for the qualifying entrance examination conducted by KSCSA or the department",
          "Submit the coaching assistance application online via scdd.kerala.gov.in or to the District SC Development Office",
          "Upload community certificate, degree mark lists, selection memo, and bank details",
          "Departmental scrutiny and approval by the Director of Scheduled Castes Development",
          "Course fee is sponsored directly or reimbursed, and monthly boarding stipends are disbursed via DBT"
        ],
        ml: [
          "പട്ടികജാതി വികസന വകുപ്പിന്റെ സിവിൽ സർവീസ് കോച്ചിംഗ് വിജ്ഞാപനം ശ്രദ്ധിക്കുക",
          "വകുപ്പോ അക്കാദമിയോ നടത്തുന്ന പ്രവേശന പരീക്ഷയിൽ പങ്കെടുക്കുക",
          "scdd.kerala.gov.in വഴിയോ ജില്ലാ പട്ടികജാതി വികസന ഓഫീസ് വഴിയോ അപേക്ഷ സമർപ്പിക്കുക",
          "ജാതി സർട്ടിഫിക്കറ്റ്, ബിരുദ രേഖകൾ, സെലക്ഷൻ മെമ്മോ, ബാങ്ക് വിവരങ്ങൾ എന്നിവ നൽകുക",
          "വകുപ്പുതല പരിശോധനയ്ക്ക് ശേഷം അർഹരായ ഉദ്യോഗാർത്ഥികളെ തിരഞ്ഞെടുക്കുന്നു",
          "പരിശീലന ഫീസ് വകുപ്പ് നേരിട്ട് നൽകുകയും പ്രതിമാസ സ്റ്റൈപ്പൻഡ് വിദ്യാർത്ഥിയുടെ അക്കൗണ്ടിലേക്ക് നൽകുകയും ചെയ്യുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0 for departmental application).",
        ml: "സൗജന്യം (വകുപ്പിലേക്കുള്ള അപേക്ഷയ്ക്ക് ഫീസില്ല)."
      },
      validity: {
        en: "Valid for the sanctioned Civil Services coaching batch (typically 1 academic/examination cycle, extendable as per departmental rules).",
        ml: "അനുവദിക്കപ്പെട്ട പരിശീലന ബാച്ചിന്റെ കാലാവധിയിലേക്ക് സാധുവാണ്."
      },
      officialUrl: "https://scdd.kerala.gov.in/",
      importantNotes: {
        en: [
          "Dedicated training assistance: Distinct from generic college scholarships under e-Grantz; strictly meant for Civil Services preparation.",
          "Provides course fee support along with monthly boarding and lodging stipends as sanctioned by government orders.",
          "Admission is contingent on clearing the departmental screening or entrance assessment."
        ],
        ml: [
          "പ്രത്യേക പരിശീലന സഹായം: ഇത് കോളേജ് പഠനത്തിനുള്ള ഇ-ഗ്രാന്റ്സ് സ്കോളർഷിപ്പല്ല; സിവിൽ സർവീസ് പരീക്ഷാ പരിശീലനത്തിന് മാത്രമുള്ളതാണ്.",
          "കോഴ്സ് ഫീസിനൊപ്പം പ്രതിമാസ ഭക്ഷണ-താമസ സ്റ്റൈപ്പൻഡും സർക്കാർ ഉത്തരവ് പ്രകാരം ലഭ്യമാക്കുന്നു.",
          "പ്രവേശന പരീക്ഷയിലെ മെറിറ്റ് അടിസ്ഥാനത്തിലാണ് അർഹരായവരെ തിരഞ്ഞെടുക്കുന്നത്."
        ]
      }
    },

    // ================================================================
    // SERVICE #127: ST Pre-Matric Scholarship
    // ================================================================
    {
      id: "st-pre-matric-scholarship",
      category: "education",
      icon: "🎒",
      name: {
        en: "ST Pre-Matric Scholarship",
        ml: "പട്ടികവർഗ്ഗ പ്രീ-മെട്രിക് സ്കോളർഷിപ്പ് (ക്ലാസ് 1 മുതൽ 10 വരെ)"
      },
      summary: {
        en: "Educational grants, uniform allowances, and study support for Scheduled Tribe students studying in classes 1 to 10 in Government and aided schools.",
        ml: "സർക്കാർ, എയ്ഡഡ് സ്കൂളുകളിൽ 1 മുതൽ 10 വരെ ക്ലാസുകളിൽ പഠിക്കുന്ന പട്ടികവർഗ്ഗ വിദ്യാർത്ഥികൾക്കുള്ള വിദ്യാഭ്യാസ ധനസഹായം."
      },
      description: {
        en: "The Pre-Matric Scholarship Scheme for Scheduled Tribe Students is implemented by the Scheduled Tribes Development Department (STDD), Government of Kerala, through the e-Grantz / departmental portal. It provides annual educational grants, study material allowances, and dress allowances to tribal children enrolled in Classes 1 through 10 in government and recognized aided schools to prevent school dropouts and ensure educational access.",
        ml: "പട്ടികവർഗ്ഗ വികസന വകുപ്പ് (STDD) സ്കൂൾ തലത്തിൽ നടപ്പിലാക്കുന്ന സുപ്രധാന വിദ്യാഭ്യാസ പദ്ധതിയാണിത്. സർക്കാർ, എയ്ഡഡ് സ്കൂളുകളിൽ 1 മുതൽ 10 വരെ ക്ലാസുകളിൽ പഠിക്കുന്ന പട്ടികവർഗ്ഗ വിഭാഗത്തിലെ കുട്ടികൾക്ക് പഠനോപകരണങ്ങൾ, യൂണിഫോം, ലംപ്സം ഗ്രാന്റ് എന്നിവ ലഭ്യമാക്കാനും കൊഴിഞ്ഞുപോക്ക് തടയാാനും ഈ സ്കോളർഷിപ്പ് സഹായിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Student must belong to a recognized Scheduled Tribe (ST) community of Kerala",
          "Must be studying in Classes 1 to 10 in a Government or recognized aided school in Kerala",
          "No parental income limit applies for Scheduled Tribe students under this scheme",
          "Must maintain regular school enrollment and attendance"
        ],
        ml: [
          "കേരളത്തിലെ അംഗീകൃത പട്ടികവർഗ്ഗ (ST) വിഭാഗത്തിൽ ഉൾപ്പെടുന്ന വിദ്യാർത്ഥിയായിരിക്കണം",
          "കേരളത്തിലെ സർക്കാർ അല്ലെങ്കിൽ അംഗീകൃത എയ്ഡഡ് സ്കൂളുകളിൽ 1 മുതൽ 10 വരെയുള്ള ക്ലാസുകളിൽ പഠിക്കുന്നവരായിരിക്കണം",
          "പട്ടികവർഗ്ഗ വിഭാഗത്തിന് ഈ പദ്ധതിയിൽ വരുമാന പരിധി ബാധകമല്ല",
          "സ്കൂളിൽ കൃത്യമായ അഡ്മിഷനും ഹാജരും ഉണ്ടായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Community / Caste Certificate from the competent revenue authority",
          "Student / Joint parent bank account passbook copy (Seeded with IFSC)",
          "School admission details and student identification records",
          "Identity details of the student or parent"
        ],
        ml: [
          "റവന്യൂ അധികാരി നൽകിയ ജാതി സർട്ടിഫിക്കറ്റ് (Community Certificate)",
          "വിദ്യാർത്ഥിയുടെയോ രക്ഷിതാവിന്റെയോ പേരിലുള്ള ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (ബാങ്കുമായി ബന്ധിപ്പിച്ചത്)",
          "സ്കൂൾ അഡ്മിഷൻ വിവരങ്ങൾ",
          "വിദ്യാർത്ഥിയുടെയോ രക്ഷിതാവിന്റെയോ തിരിച്ചറിയൽ വിവരങ്ങൾ"
        ]
      },
      howToApply: {
        en: "Applications are handled through the school institution; the School Headmaster/Principal coordinates online data entry and verification on the portal.",
        ml: "സ്കൂൾ മുഖേനയാണ് ഇതിനുള്ള നടപടികൾ പൂർത്തിയാക്കുന്നത്; പ്രധാനാധ്യാപകൻ (Headmaster) വിവരങ്ങൾ പരിശോധിച്ച് പോർട്ടലിൽ രേഖപ്പെടുത്തുന്നു."
      },
      steps: {
        en: [
          "Submit the student's community certificate, bank account details, and identification to the school office at the beginning of the academic year",
          "The school Headmaster/designated scholarship nodal teacher enters student data into the official e-Grantz / STDD portal",
          "Institutional verification is completed by the school authorities confirming enrollment in Classes 1 to 10",
          "Verified applications are scrutinized and sanctioned by the Tribal Development Officer (TDO) / Tribal Extension Officer (TEO)",
          "Scholarship grants are credited directly into the student/joint bank account via Direct Benefit Transfer (DBT)"
        ],
        ml: [
          "അധ്യയന വർഷാരംഭത്തിൽ ജാതി സർട്ടിഫിക്കറ്റും ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങളും സ്കൂൾ ഓഫീസിൽ സമർപ്പിക്കുക",
          "സ്കൂൾ ഹെഡ്മാസ്റ്റർ / സ്കോളർഷിപ്പ് ചുമതലയുള്ള അധ്യാപകൻ പോർട്ടൽ വഴി വിവരങ്ങൾ രേഖപ്പെടുത്തുന്നു",
          "കുട്ടി 1 മുതൽ 10 വരെയുള്ള ക്ലാസുകളിൽ പഠിക്കുന്നുവെന്ന് സ്കൂൾ തലത്തിൽ പരിശോധിച്ച് ഉറപ്പുവരുത്തുന്നു",
          "ട്രൈബൽ ഡെവലപ്‌മെന്റ് ഓഫീസർ (TDO) അല്ലെങ്കിൽ ടി.ഇ.ഒ വിവരങ്ങൾ പരിശോധിച്ച് അംഗീകാരം നൽകുന്നു",
          "സ്കോളർഷിപ്പ് തുക നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിലേക്ക് ഡി.ബി.ടി (DBT) വഴി ലഭ്യമാക്കുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0).",
        ml: "സൗജന്യം (₹0)."
      },
      validity: {
        en: "Valid for the academic year; renewed automatically or updated annually by the school upon promotion to the next class up to Standard 10.",
        ml: "ഒരു അധ്യയന വർഷത്തേക്ക് സാധുതയുള്ളത്; പത്താം ക്ലാസ് വരെ അടുത്ത ക്ലാസിലേക്ക് ജയിക്കുന്നതിനനുസരിച്ച് സ്കൂൾ വഴി പുതുക്കപ്പെടുന്നു."
      },
      officialUrl: "https://egrantz.kerala.gov.in/",
      importantNotes: {
        en: [
          "Separate Pre-Matric Service: Strictly covers school education from Class 1 to Standard 10; completely distinct from Post-Matric college scholarships (#128).",
          "No parental income ceiling applies for Scheduled Tribe students.",
          "Processed via institutional/school verification, ensuring hassle-free Direct Benefit Transfer to students' bank accounts."
        ],
        ml: [
          "പ്രത്യേക സ്കൂൾതല സർവീസ്: ഇത് 1 മുതൽ 10 വരെയുള്ള സ്കൂൾ കുട്ടികൾക്ക് മാത്രമുള്ളതാണ്; കോളേജ് തല പോസ്റ്റ്-മെട്രിക് സ്കോളർഷിപ്പിൽ (#128) നിന്നും തികച്ചും വ്യത്യസ്തമാണ്.",
          "പട്ടികവർഗ്ഗ വിദ്യാർത്ഥികൾക്ക് ഈ പദ്ധതിയിൽ വരുമാന പരിധിയില്ല.",
          "സ്കൂൾ പ്രധാനാധ്യാപകൻ മുഖേനയാണ് പരിശോധനകൾ പൂർത്തിയാക്കുന്നത്."
        ]
      }
    },

    // ================================================================
    // SERVICE #128: ST Post-Matric Scholarship
    // ================================================================
    {
      id: "st-post-matric-scholarship",
      category: "education",
      icon: "🎓",
      name: {
        en: "ST Post-Matric Scholarship",
        ml: "പട്ടികവർഗ്ഗ പോസ്റ്റ്-മെട്രിക് സ്കോളർഷിപ്പ് (ഹയർ സെക്കൻഡറി & കോളേജ്)"
      },
      summary: {
        en: "Full tuition fee waiver, mandatory fee reimbursement, and monthly maintenance allowance for Scheduled Tribe students in higher secondary, college, and university courses.",
        ml: "ഹയർ സെക്കൻഡറി, ഡിഗ്രി, പി.ജി, പ്രൊഫഷണൽ കോഴ്സുകളിൽ പഠിക്കുന്ന പട്ടികവർഗ്ഗ വിദ്യാർത്ഥികൾക്ക് ഫീസ് ഇളവും പ്രതിമാസ സ്റ്റൈപ്പൻഡും."
      },
      description: {
        en: "The Post-Matric Scholarship Scheme for Scheduled Tribe Students is a statutory educational entitlement scheme implemented by the Scheduled Tribes Development Department (STDD) through the e-Grantz 3.0 portal. It provides 100% tuition and examination fee waivers along with graded monthly maintenance allowances (for day scholars and hostellers) for tribal students pursuing higher secondary, polytechnic, undergraduate, postgraduate, and professional degree courses.",
        ml: "പട്ടികവർഗ്ഗ വികസന വകുപ്പ് ഇ-ഗ്രാന്റ്സ് 3.0 പോർട്ടൽ വഴി നടപ്പിലാക്കുന്ന ഉന്നതവിദ്യാഭ്യാസ പദ്ധതിയാണിത്. പ്ലസ് ടു, ഐ.ടി.ഐ, പോളിടെക്നിക്, ഡിഗ്രി, പി.ജി, മെഡിക്കൽ, എഞ്ചിനീയറിംഗ് തുടങ്ങിയ കോഴ്സുകളിൽ പഠിക്കുന്ന പട്ടികവർഗ്ഗ വിദ്യാർത്ഥികൾക്ക് പൂർണ്ണ ട്യൂഷൻ ഫീസ് ഇളവും, പരീക്ഷാ ഫീസും, പ്രതിമാസ ഭക്ഷണ-താമസ അലവൻസും (Day Scholar / Hosteller) ഇതിലൂടെ ഉറപ്പാക്കുന്നു."
      },
      eligibility: {
        en: [
          "Student must belong to a recognized Scheduled Tribe (ST) community of Kerala",
          "Must be enrolled in a recognized Post-Matric course (Plus Two, Polytechnic, UG, PG, M.Phil/Ph.D., or Professional Courses) in an approved institution",
          "No income ceiling applies for Scheduled Tribe students in Kerala",
          "Must maintain minimum 75% attendance in the enrolled academic course"
        ],
        ml: [
          "കേരളത്തിലെ അംഗീകൃത പട്ടികവർഗ്ഗ (ST) വിഭാഗത്തിൽ ഉൾപ്പെടുന്ന വിദ്യാർത്ഥിയായിരിക്കണം",
          "അംഗീകൃത കോളേജുകളിലോ വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിലോ പോസ്റ്റ്-മെട്രിക് കോഴ്സുകളിൽ (പ്ലസ് ടു, പോളിടെക്നിക്, ഡിഗ്രി, പി.ജി, പ്രൊഫഷണൽ കോഴ്സുകൾ) പഠിക്കുന്നവരായിരിക്കണം",
          "പട്ടികവർഗ്ഗ വിദ്യാർത്ഥികൾക്ക് വരുമാന പരിധി ബാധകമല്ല",
          "പഠിക്കുന്ന കോഴ്സിൽ കുറഞ്ഞത് 75% ഹാജർ ഉണ്ടായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Community / Caste Certificate issued by the competent revenue authority",
          "Previous qualifying examination mark list and passing certificate",
          "College admission allotment memo and fee payment receipts",
          "Hosteller Certificate issued by the warden/principal (if residing in an approved college/private hostel)",
          "Identity proof (Accepted photo ID)",
          "Seeded student bank account passbook copy with IFSC"
        ],
        ml: [
          "തഹസിൽദാർ / വില്ലേജ് ഓഫീസർ നൽകിയ ജാതി സർട്ടിഫിക്കറ്റ് (Community Certificate)",
          "മുൻപത്തെ യോഗ്യതാ പരീക്ഷയുടെ മാർക്ക് ലിസ്റ്റ്",
          "കോളേജ് അഡ്മിഷൻ അലോട്ട്മെന്റ് മെമ്മോ, ഫീസ് രസീതുകൾ",
          "ഹോസ്റ്റലിൽ താമസിക്കുന്നവരാണെങ്കിൽ ഹോസ്റ്റൽ വാർഡൻ/പ്രിൻസിപ്പൽ സാക്ഷ്യപ്പെടുത്തിയ ഹോസ്റ്റലർ സർട്ടിഫിക്കറ്റ്",
          "തിരിച്ചറിയൽ രേഖ (അംഗീകൃത തിരിച്ചറിയൽ രേഖ)",
          "ബാങ്കുമായി ബന്ധിപ്പിച്ച വിദ്യാർത്ഥിയുടെ ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (IFSC വ്യക്തമായത്)"
        ]
      },
      howToApply: {
        en: "Apply online through individual One-Time Registration (OTR) on the e-Grantz 3.0 portal (egrantz.kerala.gov.in), followed by electronic verification by the college nodal officer.",
        ml: "ഇ-ഗ്രാന്റ്സ് 3.0 പോർട്ടൽ (egrantz.kerala.gov.in) വഴി വൺ-ടൈം രജിസ്ട്രേഷൻ (OTR) പൂർത്തിയാക്കി ഓൺലൈനായി അപേക്ഷിക്കുക. തുടർന്ന് കോളേജ് തലത്തിൽ പരിശോധന നടത്തുന്നു."
      },
      steps: {
        en: [
          "Visit the official e-Grantz 3.0 portal (egrantz.kerala.gov.in) and complete student One-Time Registration (OTR)",
          "Log in and select your enrolled college, department, and course details",
          "Upload scanned copies of community certificate, previous mark list, admission memo, and hosteller certificate (if applicable)",
          "Submit the scholarship application online to the institutional portal queue",
          "The college scholarship nodal officer and Principal verify student admission and attendance electronically",
          "Upon district tribal development office sanction, tuition fees are adjusted with the institution and maintenance allowances are disbursed directly via DBT"
        ],
        ml: [
          "ഇ-ഗ്രാന്റ്സ് 3.0 പോർട്ടൽ (egrantz.kerala.gov.in) സന്ദർശിച്ച് വൺ-ടൈം രജിസ്ട്രേഷൻ (OTR) നടത്തുക",
          "ലോഗിൻ ചെയ്ത ശേഷം പഠിക്കുന്ന കോളേജ്, കോഴ്സ് വിവരങ്ങൾ കൃത്യമായി തിരഞ്ഞെടുക്കുക",
          "ജാതി സർട്ടിഫിക്കറ്റ്, മാർക്ക് ലിസ്റ്റ്, അഡ്മിഷൻ മെമ്മോ, ഹോസ്റ്റൽ സർട്ടിഫിക്കറ്റ് എന്നിവ അപ്‌ലോഡ് ചെയ്യുക",
          "അപേക്ഷ ഓൺലൈനായി സമർപ്പിക്കുക",
          "കോളേജിലെ സ്കോളർഷിപ്പ് നോഡൽ ഓഫീസറും പ്രിൻസിപ്പലും അഡ്മിഷനും ഹാജരും പരിശോധിച്ചു അംഗീകരിക്കുന്നു",
          "ട്രൈബൽ ഡെവലപ്‌മെന്റ് ഓഫീസിന്റെ അംഗീകാരത്തിന് ശേഷം ഫീസ് ഇളവും അലവൻസുകളും നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിലേക്ക് ഡി.ബി.ടി വഴി ലഭിക്കുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0 for registration and application on e-Grantz).",
        ml: "സൗജന്യം (ഇ-ഗ്രാന്റ്സ് പോർട്ടൽ രജിസ്ട്രേഷന് ഫീസില്ല)."
      },
      validity: {
        en: "Valid for one academic year; student must submit annual renewal on e-Grantz upon course promotion.",
        ml: "ഒരു അധ്യയന വർഷത്തേക്ക് സാധുതയുണ്ട്; ഓരോ വർഷവും അടുത്ത ക്ലാസിലേക്ക് കയറുമ്പോൾ പോർട്ടൽ വഴി പുതുക്കണം."
      },
      officialUrl: "https://egrantz.kerala.gov.in/",
      importantNotes: {
        en: [
          "Higher Education Scope: Exclusively applies to Post-Matric education (Higher Secondary, Degree, PG, Professional courses); distinct from school-level Pre-Matric (#127).",
          "No income ceiling applies for Scheduled Tribe students in Kerala.",
          "Attendance requirement: A minimum of 75% attendance is mandatory for continuous disbursement of monthly maintenance stipends.",
          "Hostellers receive enhanced monthly allowances compared to day scholars based on course tier."
        ],
        ml: [
          "ഉന്നതവിദ്യാഭ്യാസ സ്കോളർഷിപ്പ്: പ്ലസ് ടു, ഡിഗ്രി, പി.ജി, പ്രൊഫഷണൽ കോഴ്സുകൾക്ക് മാത്രമുള്ളതാണ്; സ്കൂൾതല പ്രീ-മെട്രിക് പദ്ധതിയിൽ (#127) നിന്നും തികച്ചും വ്യത്യസ്തമാണ്.",
          "കേരളത്തിലെ പട്ടികവർഗ്ഗ വിദ്യാർത്ഥികൾക്ക് വരുമാന പരിധി ബാധകമല്ല.",
          "ഹാജർ നിബന്ധന: പ്രതിമാസ സ്റ്റൈപ്പൻഡ് ലഭിക്കുന്നതിന് കുറഞ്ഞത് 75% ഹാജർ നിർബന്ധമാണ്.",
          "ഡേ സ്കോളർമാരേക്കാൾ ഉയർന്ന നിരക്കിലുള്ള അലവൻസ് അംഗീകൃത ഹോസ്റ്റലുകളിൽ താമസിക്കുന്നവർക്ക് ലഭിക്കും."
        ]
      }
    }
  ];

  if (window.SevaRegistry && typeof window.SevaRegistry.register === "function") {
    window.SevaRegistry.register(data);
  } else {
    window.SevaRegistry.education = data;
  }
})();
