// ==========================================
// SEVACHECK KERALA — DATA MODULE
// Category: ID & Personal (9 Services)
// File: data/cat-id.js
// ==========================================

(function () {
  const data = [
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
    {
      id: "udid-disability-certificate",
      category: "id",
      icon: "♿",
      name: {
        en: "UDID / Disability Certificate",
        ml: "യു.ഡി.ഐ.ഡി / ഭിന്നശേഷി സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Unique Disability ID card and national disability certificate issued under Department of Empowerment of Persons with Disabilities.",
        ml: "ഭിന്നശേഷിക്കാർക്ക് സർക്കാർ ആനുകൂല്യങ്ങളും തിരിച്ചറിയലും ലഭ്യമാക്കുന്നതിനായി നൽകുന്ന ദേശീയ യു.ഡി.ഐ.ഡി (UDID) കാർഡ്."
      },
      whoNeeds: {
        en: "Persons with benchmark disabilities seeking state welfare pensions, educational reservations, travel concessions, and assistive aids.",
        ml: "ഭിന്നശേഷി പെൻഷൻ, വിദ്യാഭ്യാസ സംവരണം, യാത്രാ ഇളവുകൾ, ഉപകരണ സഹായങ്ങൾ എന്നിവ ആവശ്യമുള്ള ഭിന്നശേഷിക്കാർ."
      },
      eligibility: {
        en: "Persons having 40% or more benchmark disability assessed by a government Medical Board.",
        ml: "സർക്കാർ മെഡിക്കൽ ബോർഡ് പരിശോധനയിൽ 40 ശതമാനമോ അതിൽ കൂടുതലോ ഭിന്നശേഷി സ്ഥിരീകരിച്ച വ്യക്തികൾക്ക്."
      },
      documents: {
        en: [
          "Recent color passport size photograph (showing disability clearly if visible)",
          "Aadhaar Card or recognized address/identity proof",
          "Existing Medical Board disability certificate (if previously issued by District Medical Board)",
          "Signature or thumb impression of the applicant"
        ],
        ml: [
          "പാസ്‌പോർട്ട് സൈസ് കളർ ഫോട്ടോ",
          "ആധാർ കാർഡ് അല്ലെങ്കിൽ തിരിച്ചറിയൽ രേഖ",
          "നേരത്തെ ലഭിച്ച മെഡിക്കൽ ബോർഡ് സർട്ടിഫിക്കറ്റ് (ഉണ്ടെങ്കിൽ)",
          "അപേക്ഷകന്റെ ഒപ്പ് അല്ലെങ്കിൽ വിരലടയാളം"
        ]
      },
      additionalDocs: {
        en: [
          "Clinical assessment test records / hospital treatment history documents"
        ],
        ml: [
          "ചികിത്സാ രേഖകൾ / മെഡിക്കൽ പരിശോധനാ റിപ്പോർട്ടുകൾ"
        ]
      },
      whereToApply: {
        en: "Swavlamban Card Portal (swavlambancard.gov.in) or through Akshaya Centre / District Disability Rehabilitation Centre.",
        ml: "സ്വാവലംബൻ പോർട്ടൽ (swavlambancard.gov.in) അല്ലെങ്കിൽ അക്ഷയ കേന്ദ്രം / ജില്ലാ മെഡിക്കൽ ഓഫീസ് വഴി."
      },
      mode: {
        en: "Online Registration & Medical Board Assessment",
        ml: "ഓൺലൈൻ അപേക്ഷ & മെഡിക്കൽ ബോർഡ് പരിശോധന"
      },
      steps: {
        en: [
          "Register on the Swavlamban UDID portal and complete personal and disability details.",
          "Upload photograph, signature, and address proof.",
          "Attend scheduled Medical Board assessment at assigned District or Taluk Hospital.",
          "Medical Specialists assess degree of disability and submit digital evaluation.",
          "UDID e-Card is generated online and laminated smart card is dispatched by post."
        ],
        ml: [
          "സ്വാവലംബൻ (UDID) പോർട്ടൽ വഴി അപേക്ഷ സമർപ്പിക്കുക.",
          "ഫോട്ടോയും തിരിച്ചറിയൽ രേഖകളും അപ്‌ലോഡ് ചെയ്യുക.",
          "താലൂക്ക് / ജില്ലാ ആശുപത്രിയിലെ മെഡിക്കൽ ബോർഡിന് മുന്നിൽ ഹാജരായി പരിശോധന പൂർത്തിയാക്കുക.",
          "ഡിജിറ്റൽ യു.ഡി.ഐ.ഡി കാർഡ് ഓൺലൈനായി ഡൗൺലോഡ് ചെയ്യാം; ഒറിജിനൽ കാർഡ് തപാലിൽ ലഭിക്കും."
        ]
      },
      officialUrl: "https://www.swavlambancard.gov.in",
      notes: {
        en: "The UDID card is valid across India across all central and state welfare departments and transport networks.",
        ml: "രാജ്യത്തുടനീളം റെയിൽവേ, ബസ് ഇളവുകൾക്കും എല്ലാ സർക്കാർ ക്ഷേമ പദ്ധതികൾക്കും ഈ കാർഡ് അംഗീകൃതമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "ration-card-surrender-certificate",
      category: "id",
      icon: "📜",
      name: {
        en: "Ration Card Surrender / Non-Inclusion Certificate",
        ml: "റേഷൻ കാർഡ് ഒഴിവാക്കൽ / ഉൾപ്പെടാത്ത സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Official certificate issued by Civil Supplies Department confirming reduction/removal from a card or non-inclusion in any ration card.",
        ml: "റേഷൻ കാർഡിൽ നിന്ന് പേര് ഒഴിവാക്കിയെന്നോ നിലവിൽ ഒരു റേഷൻ കാർഡിലും ഉൾപ്പെട്ടിട്ടില്ലെന്നോ വ്യക്തമാക്കുന്ന സിവിൽ സപ്ലൈസ് വകുപ്പിന്റെ സർട്ടിഫിക്കറ്റ്."
      },
      whoNeeds: {
        en: "Citizens needing to join a spouse's ration card after marriage, apply for an independent new card, or move to another state.",
        ml: "വിവാഹശേഷം പങ്കാളിയുടെ റേഷൻ കാർഡിൽ പേര് ചേർക്കാൻ ആഗ്രഹിക്കുന്നവർ, പുതിയ റേഷൻ കാർഡിനായി അപേക്ഷിക്കുന്നവർ, മറ്റ് സംസ്ഥാനങ്ങളിലേക്ക് മാറുന്നവർ."
      },
      eligibility: {
        en: "Any resident of Kerala seeking removal from existing family card or certifying non-possession of a ration card in the state.",
        ml: "നിലവിലുള്ള റേഷൻ കാർഡിൽ നിന്ന് പേര് ഒഴിവാക്കാൻ ആഗ്രഹിക്കുന്നവരോ നിലവിൽ കാർഡുകളിൽ പേരില്ലാത്തവരോ ആയ കേരളത്തിലെ താമസക്കാർക്ക്."
      },
      documents: {
        en: [
          "Existing Ration Card copy (showing applicant's name, if surrendering)",
          "Aadhaar Card of the applicant",
          "Marriage Certificate (if surrender is due to marriage)",
          "Residential / Address proof in Kerala (if applying for Non-Inclusion)"
        ],
        ml: [
          "നിലവിലുള്ള റേഷൻ കാർഡിന്റെ പകർപ്പ് (പേര് ഒഴിവാക്കാനാണെങ്കിൽ)",
          "അപേക്ഷകന്റെ ആധാർ കാർഡ്",
          "വിവാഹം മൂലമാണ് ഒഴിവാകുന്നതെങ്കിൽ വിവാഹ സർട്ടിഫിക്കറ്റ്",
          "താമസസ്ഥലം തെളിയിക്കുന്ന രേഖ (ഉൾപ്പെടാത്ത സർട്ടിഫിക്കറ്റിനായി)"
        ]
      },
      additionalDocs: {
        en: [
          "Consent letter from the Head of the Family of the existing ration card",
          "Death certificate (in case of surrendering card of deceased member)"
        ],
        ml: [
          "നിലവിലുള്ള റേഷൻ കാർഡിലെ കുടുംബനാഥന്റെ സമ്മതപത്രം",
          "മരണപ്പെട്ട വ്യക്തിയുടെ കാർഡ് സറണ്ടർ ചെയ്യുകയാണെങ്കിൽ മരണ സർട്ടിഫിക്കറ്റ്"
        ]
      },
      whereToApply: {
        en: "Civil Supplies e-Citizen portal (ecitizen.civilsupplieskerala.gov.in) or jurisdictional Taluk Supply Office (TSO) / Akshaya Centre.",
        ml: "സിവിൽ സപ്ലൈസ് ഇ-സിറ്റിസൺ പോർട്ടൽ (ecitizen.civilsupplieskerala.gov.in) അല്ലെങ്കിൽ താലൂക്ക് സപ്ലൈ ഓഫീസ് (TSO) / അക്ഷയ കേന്ദ്രം."
      },
      mode: {
        en: "Online & Taluk Supply Office (TSO)",
        ml: "ഓൺലൈൻ & താലൂക്ക് സപ്ലൈ ഓഫീസ്"
      },
      steps: {
        en: [
          "Log in to the Civil Supplies Citizen Portal using Aadhaar OTP / registered credentials.",
          "Select 'Surrender Certificate' or 'Non-Inclusion Certificate' under Citizen Services.",
          "Select member name to be removed, reason for surrender, and upload supporting documents.",
          "Submit application online or verify through the local Akshaya Centre.",
          "Rationing Inspector verifies records; Taluk Supply Officer (TSO) approves and issues digitally signed certificate."
        ],
        ml: [
          "സിവിൽ സപ്ലൈസ് പോർട്ടലിൽ ആധാർ ഒ.ടി.പി വഴി ലോഗിൻ ചെയ്യുക.",
          "സിറ്റിസൺ സർവീസസിൽ നിന്ന് 'Surrender Certificate' അല്ലെങ്കിൽ 'Non-Inclusion Certificate' തിരഞ്ഞെടുക്കുക.",
          "ഒഴിവാക്കേണ്ട അംഗത്തിന്റെ പേരും കാരണവും നൽകി രേഖകൾ അപ്‌ലോഡ് ചെയ്യുക.",
          "റേഷനിംഗ് ഇൻസ്പെക്ടറുടെ പരിശോധനയ്ക്ക് ശേഷം താലൂക്ക് സപ്ലൈ ഓഫീസർ അപേക്ഷ അംഗീകരിക്കുന്നു.",
          "ഡിജിറ്റൽ ഒപ്പോടു കൂടിയ സർട്ടിഫിക്കറ്റ് പോർട്ടലിൽ നിന്ന് ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://ecitizen.civilsupplieskerala.gov.in",
      notes: {
        en: "A surrender or non-inclusion certificate is mandatory before a member's name can be legally added to a new or existing spouse's ration card.",
        ml: "വിവാഹശേഷം പങ്കാളിയുടെ റേഷൻ കാർഡിലോ പുതിയ കാർഡിലോ പേര് ചേർക്കുന്നതിന് മുൻപായി സറണ്ടർ സർട്ടിഫിക്കറ്റ് നിർബന്ധമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    }
  ];

  if (window.SevaRegistry && typeof window.SevaRegistry.register === "function") {
    window.SevaRegistry.register(data);
  } else {
    console.error("SevaRegistry not found when loading cat-id.js");
  }
})();
