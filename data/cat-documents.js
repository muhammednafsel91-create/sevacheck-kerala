// ==========================================
// SEVACHECK KERALA — DATA MODULE
// Category: Documents & Certificates (35 Services)
// File: data/cat-documents.js
// ==========================================

(function () {
  const data = [
    {
      id: "income-certificate",
      category: "documents",
      icon: "📜",
      name: {
        en: "Income Certificate",
        ml: "വരുമാന സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Official proof of annual household income issued by the Revenue Department for scholarship, fee concession, and welfare schemes.",
        ml: "സ്കോളർഷിപ്പുകൾ, ഫീസ് ഇളവുകൾ, മറ്റ് സർക്കാർ ആനുകൂല്യങ്ങൾ എന്നിവയ്ക്കായി റവന്യൂ വകുപ്പ് നൽകുന്ന വാർഷിക വരുമാന സർട്ടിഫിക്കറ്റ്."
      },
      whoNeeds: {
        en: "Students applying for scholarships or fee concessions, families applying for welfare schemes or medical aid.",
        ml: "വിദ്യാഭ്യാസ ആനുകൂല്യങ്ങൾ, ചികിത്സാ സഹായം, മറ്റ് സർക്കാർ സഹായങ്ങൾ എന്നിവ ആവശ്യമുള്ളവർ."
      },
      eligibility: {
        en: "Any permanent resident or family residing in the village jurisdiction with verifiable income sources.",
        ml: "സംസ്ഥാനത്ത് സ്ഥിരതാമസമുള്ളവരും വരുമാന പരിധി പരിശോധിക്കാവുന്നവരുമായ എല്ലാ വ്യക്തികൾക്കും."
      },
      documents: {
        en: [
          "Aadhaar Card of applicant / head of family",
          "Ration Card (all pages showing family members)",
          "Salary Certificate / Payslip (for salaried employees)",
          "Income Tax Return (ITR) or Form 16 (if taxpayer)",
          "Land Tax Receipt (Karam receipt) of the current financial year"
        ],
        ml: [
          "അപേക്ഷകന്റെ / കുടുംബനാഥന്റെ ആധാർ കാർഡ്",
          "റേഷൻ കാർഡ് (എല്ലാ പേജുകളും)",
          "ശമ്പള സർട്ടിഫിക്കറ്റ് / പേ സ്ലിപ്പ് (ഉദ്യോഗസ്ഥർക്ക്)",
          "ആദായനികുതി റിട്ടേൺ (നികുതി അടയ്ക്കുന്നവർക്ക്)",
          "നടപ്പ് സാമ്പത്തിക വർഷത്തെ ഭൂനികുതി രസീത്"
        ]
      },
      additionalDocs: {
        en: [
          "Pension payment order / bank passbook statement (for pensioners)",
          "Self-declaration of income from daily wage or unorganized labor"
        ],
        ml: [
          "പെൻഷൻ രേഖകൾ അല്ലെങ്കിൽ ബാങ്ക് പാസ്ബുക്ക് (പെൻഷൻകാർക്ക്)",
          "ദിവസവേതനക്കാർക്കും സ്വയംതൊഴിൽ ചെയ്യുന്നവർക്കുമുള്ള സത്യവാങ്മൂലം"
        ]
      },
      whereToApply: {
        en: "Online via Kerala e-District portal or in person through nearest Akshaya Centre.",
        ml: "കേരള ഇ-ഡിസ്ട്രിക്റ്റ് (e-District) പോർട്ടൽ വഴി ഓൺലൈനായോ അടുത്തുള്ള അക്ഷയ കേന്ദ്രം വഴിയോ."
      },
      mode: {
        en: "Online & Offline via Akshaya",
        ml: "ഓൺലൈൻ & അക്ഷയ കേന്ദ്രങ്ങൾ"
      },
      steps: {
        en: [
          "Login to Kerala e-District portal using citizen credentials or visit Akshaya.",
          "Select 'Revenue Services' -> 'Income Certificate' and fill required applicant and family income details.",
          "Upload scanned copies of Aadhaar, Ration Card, and proof of earnings.",
          "Pay the online processing fee and submit application.",
          "Village Officer conducts inquiry; certificate is digitally signed and approved by the Tahsildar / Village Officer.",
          "Download digitally signed certificate from the e-District dashboard."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടലിൽ ലോഗിൻ ചെയ്യുക അല്ലെങ്കിൽ അക്ഷയ കേന്ദ്രത്തെ സമീപിക്കുക.",
          "വരുമാന സർട്ടിഫിക്കറ്റ് തിരഞ്ഞെടുത്ത് വ്യക്തിഗത-വരുമാന വിവരങ്ങൾ നൽകുക.",
          "ആധാർ, റേഷൻ കാർഡ്, വരുമാന രേഖകൾ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക.",
          "ഫീസ് അടച്ച് അപേക്ഷ സമർപ്പിക്കുക.",
          "വില്ലേജ് ഓഫീസറുടെ അന്വേഷണത്തിന് ശേഷം ഡിജിറ്റൽ ഒപ്പോടു കൂടിയ സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Valid for one year from the date of issue. Ensure all family members' incomes are declared accurately to avoid legal liability.",
        ml: "ഇഷ്യൂ ചെയ്ത തീയതി മുതൽ ഒരു വർഷമാണ് കാലാവധി. കുടുംബത്തിലെ എല്ലാ അംഗങ്ങളുടെയും വരുമാനം കൃത്യമായി രേഖപ്പെടുത്തണം."
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
        ml: "താമസ സർട്ടിഫിക്കറ്റ് (റസിഡൻസ്)"
      },
      summary: {
        en: "Official certification confirming a person's current residential address within a specific local body or village.",
        ml: "ഒരു വ്യക്തി നിലവിൽ താമസിക്കുന്ന വിലാസം സാക്ഷ്യപ്പെടുത്തി തദ്ദേശ സ്ഥാപനമോ റവന്യൂ വകുപ്പോ നൽകുന്ന രേഖ."
      },
      whoNeeds: {
        en: "Individuals needing address proof for bank accounts, passport verification, gas connection, or school admissions.",
        ml: "ബാങ്ക് അക്കൗണ്ട്, പാസ്‌പോർട്ട്, ഗ്യാസ് കണക്ഷൻ, സ്കൂൾ പ്രവേശനം എന്നിവയ്ക്ക് മേൽവിലാസ രേഖയായി ആവശ്യമുള്ളവർ."
      },
      eligibility: {
        en: "Any resident residing in the specified Panchayath, Municipality, or Village area for at least 6 months.",
        ml: "നിശ്ചിത തദ്ദേശ സ്ഥാപന അല്ലെങ്കിൽ വില്ലേജ് പരിധിയിൽ താമസിക്കുന്ന ഏതൊരു വ്യക്തിക്കും."
      },
      documents: {
        en: [
          "Aadhaar Card or Voter ID card",
          "Ration Card copy showing applicant address",
          "Recent Electricity Bill, Water Bill, or Telephone Bill in applicant/parent name",
          "Property Tax Receipt (Building tax receipt) or Registered Rent/Lease Agreement"
        ],
        ml: [
          "ആധാർ കാർഡ് അല്ലെങ്കിൽ വോട്ടർ ഐഡി",
          "റേഷൻ കാർഡ് പകർപ്പ്",
          "വൈദ്യുതി ബിൽ അല്ലെങ്കിൽ വാട്ടർ ബിൽ",
          "കെട്ടിട നികുതി രസീത് അല്ലെങ്കിൽ വാടകക്കരാർ"
        ]
      },
      additionalDocs: {
        en: [
          "Certificate from residential association or local ward member (if residing in rented house without agreement)"
        ],
        ml: [
          "വാർഡ് മെമ്പർ / കൗൺസിലറുടെ സാക്ഷ്യപത്രം (വാടക വീടുകളിൽ താമസിക്കുന്നവർക്ക്)"
        ]
      },
      whereToApply: {
        en: "Revenue portal (edistrict.kerala.gov.in) for village certificates or Local Self Government (K-SMART/Citizen portal) for municipal bodies.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ (റവന്യൂ) അല്ലെങ്കിൽ തദ്ദേശ സ്ഥാപന പോർട്ടൽ (കെ-സ്മാർട്ട്/പഞ്ചായത്ത് ഓഫീസ്)."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Register or login to Kerala e-District portal.",
          "Choose 'Residence Certificate' under revenue services.",
          "Upload address proof and applicant photograph.",
          "Submit application and pay processing fee.",
          "Download digitally verified certificate upon approval by Village Officer."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടലിൽ അക്കൗണ്ട് ലോഗിൻ ചെയ്യുക.",
          "റസിഡൻസ് സർട്ടിഫിക്കറ്റ് തിരഞ്ഞെടുത്ത് അപേക്ഷ പൂരിപ്പിക്കുക.",
          "മേൽവിലാസം തെളിയിക്കുന്ന രേഖകൾ സമർപ്പിക്കുക.",
          "വില്ലേജ് ഓഫീസറുടെ അനുമതിക്ക് ശേഷം സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Do not confuse Residence Certificate with Nativity Certificate; Residence proves current address, whereas Nativity proves Kerala origin.",
        ml: "റസിഡൻസ് സർട്ടിഫിക്കറ്റും നേറ്റിവിറ്റി സർട്ടിഫിക്കറ്റും ഒന്നല്ല; റസിഡൻസ് നിലവിലെ താമസവും നേറ്റിവിറ്റി കേരളീയ പശ്ചാത്തലവും തെളിയിക്കുന്നു."
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
        en: "Legal certificate proving that an individual is an authentic native or origin resident of Kerala.",
        ml: "ഒരു വ്യക്തി കേരളത്തിൽ ജനിച്ച ആളാണെന്നോ അല്ലെങ്കിൽ കേരളീയ പശ്ചാത്തലമുള്ള വ്യക്തിയാണെന്നോ സാക്ഷ്യപ്പെടുത്തുന്ന രേഖ."
      },
      whoNeeds: {
        en: "Students applying for state quota seats in professional admissions (KEAM, medical, engineering) and government job appointments.",
        ml: "KEAM പ്രവേശന പരീക്ഷകൾ, സർക്കാർ ജോലി പ്രവേശനങ്ങളിൽ കേരള ക്വാട്ട സംവരണം എന്നിവയ്ക്ക് ആവശ്യമുള്ളവർ."
      },
      eligibility: {
        en: "Applicant born in Kerala, or whose parents were born in Kerala, or who has resided continuously in Kerala for 5+ years.",
        ml: "കേരളത്തിൽ ജനിച്ചവർ, മാതാപിതാക്കൾ കേരളത്തിൽ ജനിച്ചവർ, അല്ലെങ്കിൽ 5 വർഷത്തിലധികം കേരളത്തിൽ സ്ഥിരതാമസമുള്ളവർ."
      },
      documents: {
        en: [
          "Birth Certificate of applicant (showing place of birth in Kerala)",
          "School Certificate / SSLC book showing birthplace and school study history",
          "Parent's SSLC or Birth Certificate (if claiming nativity via parents)",
          "Aadhaar Card and Ration Card of applicant"
        ],
        ml: [
          "അപേക്ഷകന്റെ ജനന സർട്ടിഫിക്കറ്റ്",
          "ജനനസ്ഥലം വ്യക്തമാക്കുന്ന സ്കൂൾ സർട്ടിഫിക്കറ്റ് / SSLC ബുക്ക്",
          "മാതാപിതാക്കളുടെ SSLC അല്ലെങ്കിൽ ജനന സർട്ടിഫിക്കറ്റ്",
          "അപേക്ഷകന്റെ ആധാർ, റേഷൻ കാർഡ്"
        ]
      },
      additionalDocs: {
        en: [
          "Continuous residential certificate for 5 years if claiming via continuous residence"
        ],
        ml: [
          "തുടർച്ചയായ 5 വർഷത്തെ താമസ രേഖ (താമസ അടിസ്ഥാനത്തിൽ അപേക്ഷിക്കുന്നവർക്ക്)"
        ]
      },
      whereToApply: {
        en: "Online through Kerala e-District portal or through local Akshaya Centre.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴിയോ അക്ഷയ കേന്ദ്രം വഴിയോ."
      },
      mode: {
        en: "Online & Akshaya",
        ml: "ഓൺലൈൻ & അക്ഷയ കേന്ദ്രങ്ങൾ"
      },
      steps: {
        en: [
          "Log in to e-District Kerala and select 'Nativity Certificate'.",
          "Fill applicant details and state birth / schooling history in Kerala.",
          "Upload birth proof, SSLC certificate, and parents' origin proof.",
          "Pay government processing charges and submit.",
          "Tahsildar / Village Officer issues digitally signed certificate."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ സന്ദർശിച്ച് നേറ്റിവിറ്റി സർട്ടിഫിക്കറ്റ് തിരഞ്ഞെടുക്കുക.",
          "വിദ്യാഭ്യാസ, ജനന വിവരങ്ങൾ നൽകുക.",
          "ജനന സർട്ടിഫിക്കറ്റ്, സ്കൂൾ രേഖകൾ അപ്‌ലോഡ് ചെയ്യുക.",
          "ഫീസ് അടച്ച ശേഷം വില്ലേജ് ഓഫീസറുടെ അനുമതിയോടെ സർട്ടിഫിക്കറ്റ് ലഭിക്കും."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Nativity Certificate has permanent validity unless obtained through fraudulent misrepresentation.",
        ml: "നേറ്റിവിറ്റി സർട്ടിഫിക്കറ്റിന് ആജീവനാന്ത കാലാവധിയുണ്ട്."
      },
      lastVerified: "March 2026",
      verified: true
    },
    {
      id: "caste-certificate",
      category: "documents",
      icon: "🛡️",
      name: {
        en: "Caste Certificate",
        ml: "ജാതി സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Statutory proof of belonging to a specific Scheduled Caste (SC) or Scheduled Tribe (ST) category.",
        ml: "പട്ടികജാതി (SC) അല്ലെങ്കിൽ പട്ടികവർഗ്ഗ (ST) വിഭാഗത്തിൽപ്പെട്ടതാണെന്ന് സാക്ഷ്യപ്പെടുത്തുന്ന ഔദ്യോഗിക രേഖ."
      },
      whoNeeds: {
        en: "SC/ST individuals seeking constitutional reservations in educational admissions, government jobs, and welfare benefits.",
        ml: "പട്ടികജാതി/പട്ടികവർഗ്ഗ വിഭാഗക്കാർക്ക് സംവരണാനുകൂല്യങ്ങൾക്കും സ്കോളർഷിപ്പുകൾക്കും സർക്കാർ ജോലികൾക്കും."
      },
      eligibility: {
        en: "Persons recognized under the Constitution (Scheduled Castes and Scheduled Tribes) Orders for Kerala State.",
        ml: "കേരള സർക്കാർ വിജ്ഞാപനം ചെയ്തിട്ടുള്ള പട്ടികജാതി/പട്ടികവർഗ്ഗ വിഭാഗങ്ങളിൽ ഉൾപ്പെട്ടവർ."
      },
      documents: {
        en: [
          "Applicant's SSLC Book / School Certificate showing recorded caste",
          "Caste certificate of parents or siblings issued by competent authority",
          "Ration Card and Aadhaar Card",
          "Original Community certificate extract from school admission register"
        ],
        ml: [
          "ജാതി രേഖപ്പെടുത്തിയ SSLC ബുക്ക് / സ്കൂൾ സർട്ടിഫിക്കറ്റ്",
          "മാതാപിതാക്കളുടെയോ സഹോദരങ്ങളുടെയോ ജാതി സർട്ടിഫിക്കറ്റ്",
          "റേഷൻ കാർഡ്, ആധാർ കാർഡ്",
          "സ്കൂൾ പ്രവേശന രജിസ്റ്ററിലെ ജാതി രേഖപ്പെടുത്തിയ ഭാഗത്തിന്റെ പകർപ്പ്"
        ]
      },
      additionalDocs: {
        en: [
          "Genealogy / pedigree chart certified by KIRTADS (for complex tribal or inter-caste verifications)"
        ],
        ml: [
          "കിർത്താഡ്സ് (KIRTADS) വംശാവലി റിപ്പോർട്ട് (ആവശ്യമെങ്കിൽ മാത്രം)"
        ]
      },
      whereToApply: {
        en: "Kerala e-District portal or Revenue Tahsildar / Village Office.",
        ml: "കേരള ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ താലൂക്ക് / വില്ലേജ് ഓഫീസ്."
      },
      mode: {
        en: "Online & Akshaya",
        ml: "ഓൺലൈൻ & അക്ഷയ കേന്ദ്രങ്ങൾ"
      },
      steps: {
        en: [
          "Apply online on e-District Kerala under 'Caste Certificate'.",
          "Submit genealogical and school records proving SC/ST lineage.",
          "Field verification conducted by Village Officer and KIRTADS/Tribal extension officer if needed.",
          "Certificate approved and signed by the Tahsildar.",
          "Download digital certificate with QR code validation."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടലിൽ ജാതി സർട്ടിഫിക്കറ്റിനായി അപേക്ഷിക്കുക.",
          "സ്കൂൾ രേഖകളും മാതാപിതാക്കളുടെ ജാതി തെളിയിക്കുന്ന രേഖകളും നൽകുക.",
          "വില്ലേജ് ഓഫീസർ / തഹസിൽദാർ പരിശോധന നടത്തി സർട്ടിഫിക്കറ്റ് നൽകുന്നു."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Usually valid for 3 years for educational purposes; lifetime validity applies unless revoked due to conversion or re-classification.",
        ml: "വിദ്യാഭ്യാസ ആവശ്യങ്ങൾക്ക് സാധാരണയായി 3 വർഷവും മറ്റ് ആവശ്യങ്ങൾക്ക് സ്ഥിരവുമായ കാലാവധി."
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
        en: "Proof of belonging to Other Backward Classes (OBC), Socially and Educationally Backward Classes (SEBC), or other notified communities.",
        ml: "ഒ.ബി.സി (OBC), മറ്റ് പിന്നാക്ക വിഭാഗങ്ങൾ എന്നിവയിൽപ്പെട്ടതാണെന്ന് വ്യക്തമാക്കുന്ന സർട്ടിഫിക്കറ്റ്."
      },
      whoNeeds: {
        en: "Backward class candidates applying for educational concessions, fee waivers, or community quota reservations.",
        ml: "സംവരണാനുകൂല്യങ്ങൾ, ഫീസ് ഇളവുകൾ, മറ്റ് സർക്കാർ പദ്ധതികൾ എന്നിവ ലഭിക്കാൻ ആഗ്രഹിക്കുന്നവർ."
      },
      eligibility: {
        en: "Individuals belonging to state-notified communities outside the SC/ST framework.",
        ml: "കേരള സർക്കാർ അംഗീകരിച്ചിട്ടുള്ള പിന്നാക്ക സമുദായങ്ങളിൽ ഉൾപ്പെട്ട വ്യക്തികൾ."
      },
      documents: {
        en: [
          "Applicant SSLC / School Certificate reflecting community",
          "Parents' school certificates showing religion and community",
          "Aadhaar Card and Ration Card copy"
        ],
        ml: [
          "സമുദായം രേഖപ്പെടുത്തിയ SSLC സർട്ടിഫിക്കറ്റ്",
          "മാതാപിതാക്കളുടെ സ്കൂൾ സർട്ടിഫിക്കറ്റ്",
          "ആധാർ കാർഡ്, റേഷൻ കാർഡ് പകർപ്പ്"
        ]
      },
      additionalDocs: {
        en: [
          "Community organization certificate (if school records are silent or ambiguous)"
        ],
        ml: [
          "സമുദായ സംഘടനകളിൽ നിന്നുള്ള സാക്ഷ്യപത്രം (ആവശ്യമെങ്കിൽ)"
        ]
      },
      whereToApply: {
        en: "e-District Kerala portal or Akshaya Centre.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ അക്ഷയ കേന്ദ്രം."
      },
      mode: {
        en: "Online & Akshaya",
        ml: "ഓൺലൈൻ & അക്ഷയ കേന്ദ്രങ്ങൾ"
      },
      steps: {
        en: [
          "Submit application via e-District Kerala portal.",
          "Upload SSLC copies of applicant and parents.",
          "Village Officer scrutinizes community claim.",
          "Download digitally verified certificate upon approval."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴി അപേക്ഷ സമർപ്പിക്കുക.",
          "രേഖകൾ അപ്‌ലോഡ് ചെയ്ത് ഫീസ് അടയ്ക്കുക.",
          "പരിശോധനയ്ക്ക് ശേഷം ഡിജിറ്റൽ സർട്ടിഫിക്കറ്റ് ലഭ്യമാകും."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Community certificate only certifies community identity; for central or state OBC quota with income ceilings, a Non-Creamy Layer Certificate is required.",
        ml: "സമുദായം തെളിയിക്കാൻ മാത്രമാണിത്; സംവരണ ആനുകൂല്യങ്ങൾക്ക് നോൺ ക്രീമിലെയർ സർട്ടിഫിക്കറ്റ് ആവശ്യമാണ്."
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
        en: "Official record enumerating all living members of a specific family, issued by the Revenue Village Officer.",
        ml: "ഒരു കുടുംബത്തിലെ മുഴുവൻ അംഗങ്ങളെയും സാക്ഷ്യപ്പെടുത്തി വില്ലേജ് ഓഫീസർ നൽകുന്ന സർട്ടിഫിക്കറ്റ്."
      },
      whoNeeds: {
        en: "Citizens applying for financial benefits, housing schemes, foreign visa family verifications, or compassionate appointments.",
        ml: "ഭവന പദ്ധതികൾ, ആശ്രിത നിയമനം, വിസ ആവശ്യങ്ങൾ, ക്ഷേമ പദ്ധതികൾ എന്നിവയ്ക്ക്."
      },
      eligibility: {
        en: "Head of family or adult family member permanently residing together in Kerala.",
        ml: "ഒരുമിച്ച് താമസിക്കുന്ന കുടുംബത്തിലെ ഏതൊരു മുതിർന്ന അംഗത്തിനും അപേക്ഷിക്കാം."
      },
      documents: {
        en: [
          "Ration Card with all family members listed",
          "Aadhaar Cards of all living family members",
          "Electoral Photo ID cards (EPIC) of adult members",
          "Birth certificates or school certificates of minor children"
        ],
        ml: [
          "എല്ലാ അംഗങ്ങളുടെയും പേരുകളുള്ള റേഷൻ കാർഡ്",
          "എല്ലാ കുടുംബാംഗങ്ങളുടെയും ആധാർ കാർഡുകൾ",
          "മുതിർന്ന അംഗങ്ങളുടെ വോട്ടർ ഐഡി",
          "കുട്ടികളുടെ ജനന സർട്ടിഫിക്കറ്റ് / സ്കൂൾ സർട്ടിഫിക്കറ്റ്"
        ]
      },
      additionalDocs: {
        en: [
          "Marriage Certificate of parents or spouse",
          "Death certificate of deceased members (to explain omissions)"
        ],
        ml: [
          "വിവാഹ സർട്ടിഫിക്കറ്റ്",
          "മരണപ്പെട്ട അംഗങ്ങളുണ്ടെങ്കിൽ അവരുടെ മരണ സർട്ടിഫിക്കറ്റ്"
        ]
      },
      whereToApply: {
        en: "Kerala e-District Portal or local Village Office.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ്."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Apply on e-District portal under 'Family Membership Certificate'.",
          "Enter names, ages, and relationship of all living members to the family head.",
          "Upload Ration Card, Aadhaar, and identity proofs.",
          "Village Officer performs local inquiry to verify genuine cohabitation.",
          "Download digitally signed certificate upon approval."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴി അപേക്ഷിക്കുക.",
          "എല്ലാ അംഗങ്ങളുടെയും വിവരങ്ങളും തിരിച്ചറിയൽ രേഖകളും നൽകുക.",
          "വില്ലേജ് ഓഫീസറുടെ അന്വേഷണത്തിന് ശേഷം സർട്ടിഫിക്കറ്റ് ലഭിക്കും."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Valid for 3 years. This certificate certifies living cohabiting members, distinct from a Legal Heir Certificate which handles post-death inheritance.",
        ml: "സാധാരണയായി 3 വർഷമാണ് കാലാവധി. ജീവിച്ചിരിക്കുന്ന അംഗങ്ങളെ കാണിക്കുന്ന രേഖയാണിത്."
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
        en: "Revenue document certifying that specific individuals were financially dependent on a deceased or serving government employee/individual.",
        ml: "മരണപ്പെട്ട വ്യക്തിയുടെയോ ജീവനക്കാരന്റെയോ വരുമാനത്തെ മാത്രം ആശ്രയിച്ചു ജീവിച്ചിരുന്നവരാണെന്ന് വ്യക്തമാക്കുന്ന സർട്ടിഫിക്കറ്റ്."
      },
      whoNeeds: {
        en: "Families applying for compassionate appointment (dying-in-harness schemes), service pensions, or defense benefits.",
        ml: "സർക്കാർ ജീവനക്കാർ സർവീസിലിരിക്കെ മരണപ്പെടുമ്പോൾ ആശ്രിത നിയമനത്തിനോ പെൻഷൻ ആനുകൂല്യങ്ങൾക്കോ അപേക്ഷിക്കുന്നവർ."
      },
      eligibility: {
        en: "Spouse, unmarried children, or dependent parents who had no independent income source.",
        ml: "മരണപ്പെട്ട വ്യക്തിയെ പൂർണ്ണമായും ആശ്രയിച്ചു ജീവിച്ചിരുന്ന പങ്കാളി, മക്കൾ അല്ലെങ്കിൽ മാതാപിതാക്കൾ."
      },
      documents: {
        en: [
          "Death Certificate of the government employee / breadwinner",
          "Ration card and Aadhaar cards of dependent applicants",
          "Service details / pension sanction details of the deceased employee",
          "Income Certificate proving lack of independent income for all claimants",
          "School or birth certificates establishing legal relationship"
        ],
        ml: [
          "മരണ സർട്ടിഫിക്കറ്റ്",
          "ആശ്രിതരുടെ റേഷൻ കാർഡും ആധാർ കാർഡുകളും",
          "മരണപ്പെട്ട ജീവനക്കാരന്റെ സർവീസ് രേഖകൾ",
          "ആശ്രിതർക്ക് സ്വന്തമായി വരുമാനമില്ലെന്ന് തെളിയിക്കുന്ന വരുമാന സർട്ടിഫിക്കറ്റ്",
          "ബന്ധം തെളിയിക്കുന്ന സ്കൂൾ / ജനന സർട്ടിഫിക്കറ്റുകൾ"
        ]
      },
      additionalDocs: {
        en: [
          "Non-employment certificate issued by competent authority",
          "Affidavit on stamp paper declaring financial dependency"
        ],
        ml: [
          "തൊഴിൽ രഹിതരാണെന്ന് തെളിയിക്കുന്ന സർട്ടിഫിക്കറ്റ്",
          "മുദ്രപ്പത്രത്തിലുള്ള സത്യവാങ്മൂലം"
        ]
      },
      whereToApply: {
        en: "Kerala e-District Portal or concerned Taluk Tahsildar Office.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ താലൂക്ക് ഓഫീസ്."
      },
      mode: {
        en: "Online & Revenue Hearing",
        ml: "ഓൺലൈൻ & റവന്യൂ പരിശോധന"
      },
      steps: {
        en: [
          "File application on e-District portal under 'Dependency Certificate'.",
          "Upload service books, death certificate, and income proofs of family members.",
          "Village Officer and Revenue Inspector conduct thorough local financial inquiry.",
          "Tahsildar approves and issues the digital dependency certificate."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടലിൽ അപേക്ഷ സമർപ്പിക്കുക.",
          "സർവീസ് രേഖകൾ, മരണ സർട്ടിഫിക്കറ്റ്, വരുമാന രേഖകൾ എന്നിവ നൽകുക.",
          "റവന്യൂ അന്വേഷണത്തിന് ശേഷം തഹസിൽദാർ സർട്ടിഫിക്കറ്റ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Scrutiny is strict for compassionate appointments. Any concealed independent employment can lead to prosecution.",
        ml: "ആശ്രിത നിയമനങ്ങൾക്കായി കർശനമായ പരിശോധനകൾ ഉണ്ടാകും."
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
        en: "Statutory vital record issued by Local Self Government (Sevana / K-SMART) recording child birth details.",
        ml: "കുട്ടിയുടെ ജനനം തദ്ദേശ സ്വയംഭരണ സ്ഥാപനത്തിൽ രജിസ്റ്റർ ചെയ്ത് നൽകുന്ന ഔദ്യോഗിക ജനന സർട്ടിഫിക്കറ്റ്."
      },
      whoNeeds: {
        en: "Every newborn or child needing proof of age, citizenship, school admission, Aadhaar enrollment, or passport.",
        ml: "സ്കൂൾ പ്രവേശനം, ആധാർ, പാസ്‌പോർട്ട്, പ്രായം തെളിയിക്കൽ എന്നിവയ്ക്ക് ഏതൊരു പൗരനും."
      },
      eligibility: {
        en: "Any child born within the geographic boundaries of Kerala state.",
        ml: "കേരളത്തിൽ ജനിച്ച ഏതൊരു കുട്ടിക്കും."
      },
      documents: {
        en: [
          "Hospital Discharge Summary or Birth Notification slip (Form 1 signed by medical officer)",
          "Aadhaar Cards of both parents",
          "Marriage Certificate of parents (if available/applicable)"
        ],
        ml: [
          "ഹോസ്പിറ്റൽ ഡിസ്ചാർജ്ജ് സമ്മറി അല്ലെങ്കിൽ ഫോം 1 (ഡോക്ടർ ഒപ്പിട്ടത്)",
          "മാതാപിതാക്കളുടെ ആധാർ കാർഡുകൾ",
          "വിവാഹ സർട്ടിഫിക്കറ്റ് (ബാധകമെങ്കിൽ)"
        ]
      },
      additionalDocs: {
        en: [
          "Non-availability certificate and Magistrate order (for births delayed over 1 year)"
        ],
        ml: [
          "ഒരു വർഷത്തിന് ശേഷമുള്ള രജിസ്ട്രേഷന് മജിസ്ട്രേറ്റ് ഉത്തരവ്"
        ]
      },
      whereToApply: {
        en: "Local Grama Panchayath, Municipality, or Corporation where the birth occurred, or online via Sevana / K-SMART.",
        ml: "ജനനം നടന്ന തദ്ദേശ സ്ഥാപനത്തിൽ നേരിട്ടോ സെവന / കെ-സ്മാർട്ട് പോർട്ടൽ വഴിയോ."
      },
      mode: {
        en: "Online & Hospital / Local Body Counter",
        ml: "ഓൺലൈൻ & തദ്ദേശ സ്ഥാപനം"
      },
      steps: {
        en: [
          "Hospital automatically forwards institutional birth details to local registrar.",
          "Parents verify child's name and details online on Sevana / K-SMART portal.",
          "Pay statutory registration / certificate download fee.",
          "Download digitally signed Birth Certificate with bar code."
        ],
        ml: [
          "ആശുപത്രി അധികൃതർ വിവരങ്ങൾ തദ്ദേശ സ്ഥാപനത്തിലേക്ക് കൈമാറുന്നു.",
          "മാതാപിതാക്കൾ പോർട്ടൽ വഴി കുട്ടിയുടെ പേര് ചേർക്കുന്നു.",
          "ഫീസ് അടച്ച് സർട്ടിഫിക്കറ്റ് ഓൺലൈനായി ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://cr.lsgkerala.gov.in",
      notes: {
        en: "Register birth within 21 days to avoid late registration penalties and court sanction requirements.",
        ml: "ജനനം 21 ദിവസത്തിനകം രജിസ്റ്റർ ചെയ്താൽ പിഴയും കാലതാമസവും ഒഴിവാക്കാം."
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
        en: "Statutory vital record issued by the Registrar of Births and Deaths (Local Self Government) certifying demise.",
        ml: "ഒരു വ്യക്തിയുടെ മരണം സ്ഥിരീകരിച്ച് തദ്ദേശ സ്ഥാപനം നൽകുന്ന ഔദ്യോഗിക മരണ സർട്ടിഫിക്കറ്റ്."
      },
      whoNeeds: {
        en: "Family members claiming life insurance, banking claims, property transfers, and legal heir proceedings.",
        ml: "ഇൻഷുറൻസ് ക്ലെയിമുകൾ, ബാങ്ക് അക്കൗണ്ട് സെറ്റിൽമെന്റ്, സ്വത്ത് കൈമാറ്റം, അനന്തരാവകാശം എന്നിവയ്ക്ക്."
      },
      eligibility: {
        en: "Demise occurring within Kerala local body territorial jurisdiction.",
        ml: "കേരളത്തിൽ മരണം സംഭവിച്ച ഏതൊരു വ്യക്തിക്കും."
      },
      documents: {
        en: [
          "Medical Certification of Cause of Death (Form 4/4A issued by hospital/attending physician)",
          "Aadhaar Card and address proof of the deceased",
          "Cremation / Burial ground receipt or intimation",
          "Applicant's Photo Identity Proof (Aadhaar / Voter ID)"
        ],
        ml: [
          "ആശുപത്രിയിൽ നിന്നുള്ള മരണ സർട്ടിഫിക്കറ്റ് ഫോം (ഫോം 4/4A)",
          "മരണപ്പെട്ട വ്യക്തിയുടെ ആധാർ കാർഡ്",
          "ശ്മശാനത്തിൽ നിന്നുള്ള രസീത് / സാക്ഷ്യപത്രം",
          "അപേക്ഷകന്റെ തിരിച്ചറിയൽ രേഖ"
        ]
      },
      additionalDocs: {
        en: [
          "Police FIR and Post-Mortem examination report (in unnatural or accident deaths)"
        ],
        ml: [
          "അസ്വാഭാവിക മരണങ്ങൾക്ക് പോലീസ് എഫ്.ഐ.ആർ, പോസ്റ്റ്‌മോർട്ടം റിപ്പോർട്ട്"
        ]
      },
      whereToApply: {
        en: "Grama Panchayath, Municipality, or Corporation where the demise occurred, or online via Sevana / K-SMART.",
        ml: "മരണം നടന്ന തദ്ദേശ സ്ഥാപനത്തിൽ അല്ലെങ്കിൽ സെവന / കെ-സ്മാർട്ട് പോർട്ടൽ വഴി."
      },
      mode: {
        en: "Online & Local Body Registrar",
        ml: "ഓൺലൈൻ & തദ്ദേശ സ്ഥാപനം"
      },
      steps: {
        en: [
          "Submit Form 2 along with hospital doctor certificate within 21 days.",
          "Registrar enters particulars in the death register.",
          "Pay search and certificate issuance fee.",
          "Download digitally signed death certificate online or collect from counter."
        ],
        ml: [
          "ആശുപത്രി രേഖകളും ഫോമും തദ്ദേശ സ്ഥാപനത്തിൽ 21 ദിവസത്തിനകം സമർപ്പിക്കുക.",
          "രജിസ്ട്രേഷൻ പൂർത്തിയായ ശേഷം ഓൺലൈനായി സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://cr.lsgkerala.gov.in",
      notes: {
        en: "Mandatory reporting window is 21 days; late registrations require Revenue Divisional Officer (RDO) sanction.",
        ml: "21 ദിവസത്തിനകം രജിസ്റ്റർ ചെയ്യണം; വൈകിയാൽ ആർ.ഡി.ഒ യുടെ പ്രത്യേക അനുമതി വേണം."
      },
      lastVerified: "March 2026",
      verified: true
    },
    {
      id: "marriage-certificate",
      category: "documents",
      icon: "💍",
      name: {
        en: "Marriage Certificate (Common Rules / Special Marriage)",
        ml: "വിവാഹ സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Official legal registration of marriage under Kerala Registration of Marriages (Common) Rules or Special Marriage Act.",
        ml: "തദ്ദേശ സ്വയംഭരണ സ്ഥാപനം വഴിയോ സബ് രജിസ്ട്രാർ ഓഫീസ് വഴിയോ വിവാഹം നിയമപരമായി രജിസ്റ്റർ ചെയ്യുന്ന സർട്ടിഫിക്കറ്റ്."
      },
      whoNeeds: {
        en: "Couples needing legal proof of marital status for passport spouse endorsement, visa sponsorship, joint banking, or inheritance.",
        ml: "പാസ്‌പോർട്ടിൽ പേര് ചേർക്കാൻ, വിദേശ വിസയ്ക്ക്, ബാങ്ക് ആവശ്യങ്ങൾക്ക് വിവാഹം തെളിയിക്കേണ്ട ദമ്പതികൾക്ക്."
      },
      eligibility: {
        en: "Groom aged 21+ and Bride aged 18+ solemnized under customary rites or registered under civil law.",
        ml: "വരന് 21 വയസ്സും വധുവിന് 18 വയസ്സും പൂർത്തിയായിരിക്കണം."
      },
      documents: {
        en: [
          "Age proof of bride and groom (SSLC Book / Passport / Birth Certificate)",
          "Marriage invitation letter or Religious place marriage certificate (parish/temple/mahallu receipt)",
          "Joint passport-size photographs of bride and groom",
          "Aadhaar cards of bride, groom, and two witnesses"
        ],
        ml: [
          "വരന്റെയും വധുവിന്റെയും പ്രായം തെളിയിക്കുന്ന രേഖ (SSLC, പാസ്‌പോർട്ട്)",
          "വിവാഹ ക്ഷണക്കത്ത് അല്ലെങ്കിൽ പള്ളി/ക്ഷേത്ര സർട്ടിഫിക്കറ്റ്",
          "ദമ്പതികളുടെ സംയുക്ത ഫോട്ടോ",
          "ദമ്പതികളുടെയും രണ്ട് സാക്ഷികളുടെയും ആധാർ കാർഡുകൾ"
        ]
      },
      additionalDocs: {
        en: [
          "Single status / Bachelorhood certificate / Divorce decree if either spouse was previously married"
        ],
        ml: [
          "മുൻപ് വിവാഹിതരാണെങ്കിൽ വിവാഹമോചന ഉത്തരവ്"
        ]
      },
      whereToApply: {
        en: "Local body where marriage was solemnized (Sevana / K-SMART) or Sub-Registrar Office (PEARL Portal).",
        ml: "വിവാഹം നടന്ന തദ്ദേശ സ്ഥാപനം (സെവന / കെ-സ്മാർട്ട്) അല്ലെങ്കിൽ സബ് രജിസ്ട്രാർ ഓഫീസ്."
      },
      mode: {
        en: "Online Registration & Physical Appearance for Signatures",
        ml: "ഓൺലൈൻ രജിസ്ട്രേഷൻ & നേരിട്ടെത്തി ഒപ്പിടൽ"
      },
      steps: {
        en: [
          "File Memorandum Form 1 online on Sevana / K-SMART portal within 45 days.",
          "Upload wedding photos, religious certificate, and age proofs.",
          "Book physical appearance date before the local Registrar of Marriages.",
          "Both spouses and two witnesses appear and sign before Registrar.",
          "Download digitally verified Marriage Certificate."
        ],
        ml: [
          "സെവന അല്ലെങ്കിൽ കെ-സ്മാർട്ട് പോർട്ടൽ വഴി ഫോം 1 ഓൺലൈനായി പൂരിപ്പിക്കുക.",
          "ഫോട്ടോയും രേഖകളും അപ്‌ലോഡ് ചെയ്ത് തീയതി തിരഞ്ഞെടുക്കുക.",
          "ഭാര്യയും ഭർത്താവും സാക്ഷികളും രജിസ്ട്രാർ മുൻപാകെ നേരിട്ടെത്തി ഒപ്പിടുക.",
          "തുടർന്ന് ഡിജിറ്റൽ സർട്ടിഫിക്കറ്റ് ലഭ്യമാകും."
        ]
      },
      officialUrl: "https://cr.lsgkerala.gov.in",
      notes: {
        en: "File within 45 days of marriage ceremony to avoid late registration scrutiny and penalty fees.",
        ml: "വിവാഹം കഴിഞ്ഞ് 45 ദിവസത്തിനകം രജിസ്റ്റർ ചെയ്താൽ പിഴ ഒഴിവാക്കാം."
      },
      lastVerified: "March 2026",
      verified: true
    },
    {
      id: "legal-heir-certificate",
      category: "documents",
      icon: "⚖️",
      name: {
        en: "Legal Heir Certificate",
        ml: "അനന്തരാവകാശ സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Statutory revenue certification issued by Tahsildar establishing the legal successors of a deceased person.",
        ml: "മരണപ്പെട്ട വ്യക്തിയുടെ നിയമാനുസൃത അവകാശികൾ ആരാണെന്ന് കാണിച്ച് തഹസിൽദാർ നൽകുന്ന സർട്ടിഫിക്കറ്റ്."
      },
      whoNeeds: {
        en: "Heirs claiming bank account balances, government gratuity/provident fund, vehicle ownership transfers, and property succession.",
        ml: "മരണപ്പെട്ട വ്യക്തിയുടെ ബാങ്ക് നിക്ഷേപം, പെൻഷൻ, സ്വത്ത്, വാഹനം എന്നിവ അവകാശികളിലേക്ക് മാറ്റാൻ."
      },
      eligibility: {
        en: "Surviving spouse, children, parents, or siblings of the deceased citizen according to applicable personal inheritance laws.",
        ml: "മരണപ്പെട്ടയാളുടെ നിയമാനുസൃത അവകാശികളായ പങ്കാളി, മക്കൾ, മാതാപിതാക്കൾ."
      },
      documents: {
        en: [
          "Death Certificate of the deceased in original",
          "Ration Card copy showing names of family members",
          "Aadhaar Cards of all surviving legal heirs",
          "Service Pension Book / Bank Passbook / Asset papers requiring claim"
        ],
        ml: [
          "മരണ സർട്ടിഫിക്കറ്റ് ഒറിജിനൽ",
          "കുടുംബാംഗങ്ങളുടെ വിവരങ്ങളുള്ള റേഷൻ കാർഡ്",
          "എല്ലാ അവകാശികളുടെയും ആധാർ കാർഡുകൾ",
          "ബാങ്ക് പാസ്ബുക്ക് / കൈമാറ്റം ചെയ്യേണ്ട സ്വത്ത് വിവരങ്ങൾ"
        ]
      },
      additionalDocs: {
        en: [
          "No-objection consent affidavit on stamped paper from legal heirs relinquishing shares to one member"
        ],
        ml: [
          "മറ്റ് അവകാശികൾ തങ്ങളുടെ വിഹിതം ഒരാൾക്ക് നൽകുന്ന സമ്മതപത്രം (ആവശ്യമെങ്കിൽ)"
        ]
      },
      whereToApply: {
        en: "Online via Kerala e-District portal or through Taluk Office / Akshaya Centre.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ താലൂക്ക് ഓഫീസ് / അക്ഷയ കേന്ദ്രം."
      },
      mode: {
        en: "Online & Gazette Publication / Field Inquiry",
        ml: "ഓൺലൈൻ & ഗസറ്റ് വിജ്ഞാപനം"
      },
      steps: {
        en: [
          "Submit application online via e-District detailing all surviving heirs.",
          "Village Officer and Revenue Inspector conduct field enquiry at residence.",
          "Mandatory notice is published in Kerala Government Gazette inviting claims/objections (30 days notice).",
          "Tahsildar reviews claims and approves certificate.",
          "Download digitally signed Legal Heir Certificate."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടലിൽ അവകാശികളുടെ വിവരങ്ങൾ നൽകി അപേക്ഷിക്കുക.",
          "വില്ലേജ് ഓഫീസർ വീട്ടിലെത്തി അന്വേഷണം നടത്തുന്നു.",
          "സർക്കാർ ഗസറ്റിൽ പരസ്യം പ്രസിദ്ധീകരിച്ച് 30 ദിവസത്തെ ആക്ഷേപങ്ങൾ പരിശോധിക്കുന്നു.",
          "തഹസിൽദാർ ഡിജിറ്റൽ സർട്ടിഫിക്കറ്റ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Gazette notification process takes 30 to 45 days. For huge movable estates or contested real estate, courts require a formal Succession Certificate.",
        ml: "ഗസറ്റ് വിജ്ഞാപനം ആവശ്യമുള്ളതിനാൽ 30-45 ദിവസത്തോളം സമയമെടുക്കാം."
      },
      lastVerified: "March 2026",
      verified: true
    },
    {
      id: "relationship-certificate",
      category: "documents",
      icon: "🔗",
      name: {
        en: "Relationship Certificate",
        ml: "ബന്ധുത്വ സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Official certification proving the exact genealogical or blood relationship between two individuals.",
        ml: "രണ്ട് വ്യക്തികൾ തമ്മിലുള്ള കുടുംബബന്ധം വ്യക്തമാക്കിക്കൊണ്ട് വില്ലേജ് ഓഫീസർ നൽകുന്ന രേഖ."
      },
      whoNeeds: {
        en: "Citizens sponsoring family visas, pension dependents, insurance death claims, or court matters.",
        ml: "വിദേശ വിസ സ്പോൺസർഷിപ്പ്, കുടുംബ പെൻഷൻ, ഇൻഷുറൻസ് ക്ലെയിം എന്നിവയ്ക്ക്."
      },
      eligibility: {
        en: "Close blood relatives, spouse, or descendants of a resident of Kerala.",
        ml: "കേരളത്തിലെ സ്ഥിരതാമസക്കാരായ ബന്ധുക്കൾക്ക്."
      },
      documents: {
        en: [
          "SSLC Books or Birth Certificates of both persons establishing parentage",
          "Aadhaar Cards and Ration Card showing family link",
          "Marriage Certificate (if establishing relationship with spouse/in-laws)"
        ],
        ml: [
          "രണ്ട് പേരുടെയും SSLC ബുക്ക് അല്ലെങ്കിൽ ജനന സർട്ടിഫിക്കറ്റ്",
          "രണ്ട് പേരുടെയും ആധാർ, റേഷൻ കാർഡ്",
          "വിവാഹ സർട്ടിഫിക്കറ്റ് (പങ്കാളിയുമായുള്ള ബന്ധം തെളിയിക്കാൻ)"
        ]
      },
      additionalDocs: {
        en: [
          "Photographs of both individuals with self-declaration"
        ],
        ml: [
          "സത്യവാങ്മൂലവും ഫോട്ടോയും"
        ]
      },
      whereToApply: {
        en: "Online via Kerala e-District portal or local Village Office.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ്."
      },
      mode: {
        en: "Online & Village Officer Scrutiny",
        ml: "ഓൺലൈൻ & വില്ലേജ് ഓഫീസ്"
      },
      steps: {
        en: [
          "Apply on e-District portal selecting 'Relationship Certificate'.",
          "Specify the two persons and upload birth, school, and identity records.",
          "Village Officer scrutinizes flow of descent or marriage.",
          "Download digitally verified certificate upon sanction."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴി അപേക്ഷ സമർപ്പിക്കുക.",
          "ബന്ധം തെളിയിക്കുന്ന ജനന, സ്കൂൾ രേഖകൾ നൽകുക.",
          "വില്ലേജ് ഓഫീസറുടെ പരിശോധനയ്ക്ക് ശേഷം സർട്ടിഫിക്കറ്റ് ലഭിക്കും."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Commonly used for foreign embassies requiring explicit relationship certification in addition to passports.",
        ml: "വിദേശ എംബസികളിൽ വിസ ആവശ്യങ്ങൾക്ക് ഇത് സാധാരണയായി ആവശ്യപ്പെടാറുണ്ട്."
      },
      lastVerified: "March 2026",
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
        en: "Attestation of physical identity and facial likeness issued by Revenue Village Officer with photo seal.",
        ml: "ഒരു വ്യക്തിയുടെ ഫോട്ടോയും അടയാളങ്ങളും സാക്ഷ്യപ്പെടുത്തി വില്ലേജ് ഓഫീസർ നൽകുന്ന ഔദ്യോഗിക തിരിച്ചറിയൽ രേഖ."
      },
      whoNeeds: {
        en: "Persons lacking standard photo identity proofs, or applicants needing photo attestation for judicial or PSC verifications.",
        ml: "മറ്റ് തിരിച്ചറിയൽ രേഖകൾ ഇല്ലാത്തവർ, കോടതി ആവശ്യങ്ങൾ, പി.എസ്.സി വെരിഫിക്കേഷൻ എന്നിവയ്ക്ക്."
      },
      eligibility: {
        en: "Any resident who can be physically identified by local village officials and neighbors.",
        ml: "വില്ലേജ് പരിധിയിൽ സ്ഥിരതാമസമുള്ള ഏതൊരു പൗരനും."
      },
      documents: {
        en: [
          "Passport-size photographs (two identical copies)",
          "Birth certificate or School admission register excerpt",
          "Residential proof or letter from Ward Member / Gazetted Officer"
        ],
        ml: [
          "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ",
          "ജനന സർട്ടിഫിക്കറ്റ് അല്ലെങ്കിൽ സ്കൂൾ രേഖ",
          "വാർഡ് മെമ്പർ / ഗസറ്റഡ് ഓഫീസറുടെ സാക്ഷ്യപത്രം"
        ]
      },
      additionalDocs: {
        en: [
          "Two prominent visible identification marks (moles, scar marks) documented on application"
        ],
        ml: [
          "ശരീരത്തിലെ രണ്ട് തിരിച്ചറിയൽ അടയാളങ്ങൾ"
        ]
      },
      whereToApply: {
        en: "e-District Kerala portal or Village Office in person.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ്."
      },
      mode: {
        en: "Online & Physical Village Office Inspection",
        ml: "ഓൺലൈൻ & വില്ലേജ് ഓഫീസ്"
      },
      steps: {
        en: [
          "Apply on e-District portal and upload photograph and identification marks.",
          "Applicant appears in person before Village Officer for visual verification.",
          "Village Officer endorses digital seal on photograph.",
          "Download digitally verified photo identification certificate."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴി വിവരങ്ങൾ നൽകി അപേക്ഷിക്കുക.",
          "വില്ലേജ് ഓഫീസർക്ക് മുൻപാകെ നേരിട്ടെത്തി തിരിച്ചറിയൽ ബോധ്യപ്പെടുത്തുക.",
          "തുടർന്ന് സർട്ടിഫിക്കറ്റ് അനുവദിക്കപ്പെടുന്നു."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Valid for 6 months to 1 year depending on specific purpose of issue.",
        ml: "സാധാരണയായി 6 മാസം മുതൽ 1 വർഷം വരെയാണ് കാലാവധി."
      },
      lastVerified: "March 2026",
      verified: true
    },
    {
      id: "solvency-certificate",
      category: "documents",
      icon: "💰",
      name: {
        en: "Solvency Certificate",
        ml: "സോൾവൻസി സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Official certification of an individual's financial stability and unencumbered asset net worth issued by Tahsildar.",
        ml: "ഒരു വ്യക്തിയുടെ സാമ്പത്തിക ഭദ്രതയും ബാധ്യതകളില്ലാത്ത സ്വത്തുക്കളുടെ മൂല്യവും സാക്ഷ്യപ്പെടുത്തുന്ന റവന്യൂ രേഖ."
      },
      whoNeeds: {
        en: "Contractors bidding for government tenders, individuals standing court surety/bail, or students going abroad on financial sponsorship.",
        ml: "സർക്കാർ ടെൻഡറുകളിൽ പങ്കെടുക്കുന്നവർ, കോടതി ജാമ്യം നിൽക്കുന്നവർ, വിദേശ പഠനത്തിന് പോകുന്നവർ."
      },
      eligibility: {
        en: "Property owners having clear unencumbered title deeds in Kerala free from mortgage or court attachments.",
        ml: "ബാധ്യതകളില്ലാത്ത വസ്തുവകകൾ സ്വന്തമായുള്ള പൗരന്മാർക്ക്."
      },
      documents: {
        en: [
          "Title Deeds (Aadhaaram) of properties proposed for solvency assessment",
          "Latest Land Tax Receipt and Possession Certificate",
          "Encumbrance Certificate (EC) for past 13 to 30 years from Sub-Registrar Office",
          "Valuation report prepared by Village Officer / Licensed Engineer"
        ],
        ml: [
          "വസ്തുവിന്റെ ആധാരം",
          "നടപ്പു വർഷത്തെ ഭൂനികുതി രസീതും കൈവശാവകാശ സർട്ടിഫിക്കറ്റും",
          "സബ് രജിസ്ട്രാർ ഓഫീസിൽ നിന്നുള്ള ബാധ്യതാ സർട്ടിഫിക്കറ്റ് (EC - 13 മുതൽ 30 വർഷം)",
          "വില്ലേജ് ഓഫീസറുടെ മൂല്യനിർണ്ണയ റിപ്പോർട്ട്"
        ]
      },
      additionalDocs: {
        en: [
          "Affidavit stating that property is not pledged, attached, or under litigation"
        ],
        ml: [
          "വസ്തുവിന്മേൽ മറ്റ് ബാധ്യതകളോ കോടതി നടപടികളോ ഇല്ലെന്ന സത്യവാങ്മൂലം"
        ]
      },
      whereToApply: {
        en: "Kerala e-District Portal or Taluk Tahsildar Office.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ താലൂക്ക് ഓഫീസ്."
      },
      mode: {
        en: "Online & Tahsildar Field Scrutiny",
        ml: "ഓൺലൈൻ & തഹസിൽദാർ പരിശോധന"
      },
      steps: {
        en: [
          "Apply on e-District portal detailing the solvency amount required.",
          "Upload title deeds, prior deeds, land tax receipts, and EC.",
          "Village Officer inspects land, calculates fair value/market value, and verifies lack of attachment.",
          "Tahsildar approves and issues Solvency Certificate for specific monetary limit."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴി ആവശ്യമായ തുക കാണിച്ച് അപേക്ഷ സമർപ്പിക്കുക.",
          "ആധാരം, ബാധ്യതാ സർട്ടിഫിക്കറ്റ്, നികുതി രസീതുകൾ നൽകുക.",
          "റവന്യൂ പരിശോധനയ്ക്ക് ശേഷം തഹസിൽദാർ സർട്ടിഫിക്കറ്റ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Solvency is calculated strictly against net market value after deducting any registered liens.",
        ml: "ബാധ്യതകൾ കിഴിച്ചുള്ള വസ്തുവിന്റെ യഥാർത്ഥ മൂല്യത്തിനാണ് സർട്ടിഫിക്കറ്റ് നൽകുന്നത്."
      },
      lastVerified: "March 2026",
      verified: true
    },
    {
      id: "possession-certificate",
      category: "documents",
      icon: "🏞️",
      name: {
        en: "Possession Certificate",
        ml: "കൈവശാവകാശ സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Revenue document certifying actual, peaceful physical possession of specified land and property.",
        ml: "നിശ്ചിത ഭൂമി അപേക്ഷകന്റെ പൂർണ്ണ കൈവശത്തിലും അനുഭവത്തിലുമാണെന്ന് സാക്ഷ്യപ്പെടുത്തുന്ന റവന്യൂ രേഖ."
      },
      whoNeeds: {
        en: "Landowners applying for bank housing/property loans, building permits, or agricultural subsidies.",
        ml: "ബാങ്ക് വായ്പകൾക്ക്, കെട്ടിട നിർമ്മാണ പെർമിറ്റിന്, സബ്‌സിഡികൾക്ക് വസ്തു ഉടമസ്ഥർക്ക്."
      },
      eligibility: {
        en: "Registered titleholders who have mutated (Pokkuvaravu completed) land records in the Village Office.",
        ml: "പോക്കുവരവ് പൂർത്തിയാക്കി സ്വന്തം പേരിൽ കരം ഒടുക്കുന്ന ഭൂവുടമകൾ."
      },
      documents: {
        en: [
          "Registered Title Deed (Aadhaaram) copy",
          "Current financial year Land Tax Receipt (Karam receipt)",
          "Thandaper account details / prior tax receipts",
          "Aadhaar Card of landowner"
        ],
        ml: [
          "രജിസ്റ്റർ ചെയ്ത ആധാരത്തിന്റെ പകർപ്പ്",
          "നടപ്പു സാമ്പത്തിക വർഷത്തെ ഭൂനികുതി രസീത്",
          "താണ്ഡപ്പേര് വിവരങ്ങൾ",
          "ഭൂവുടമയുടെ ആധാർ കാർഡ്"
        ]
      },
      additionalDocs: {
        en: [
          "Encumbrance Certificate (EC) if requested for mortgaged transactions"
        ],
        ml: [
          "ബാധ്യതാ സർട്ടിഫിക്കറ്റ് (ബാങ്ക് ആവശ്യങ്ങൾക്ക്)"
        ]
      },
      whereToApply: {
        en: "Online via Kerala e-District / Revenue Portal or local Village Office.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് / റവന്യൂ പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ്."
      },
      mode: {
        en: "100% Online & Village Office",
        ml: "ഓൺലൈൻ & വില്ലേജ് ഓഫീസ്"
      },
      steps: {
        en: [
          "Login to Kerala e-District portal and select 'Possession Certificate'.",
          "Select district, taluk, village, and enter Thandaper / Survey number.",
          "Upload land tax receipt and title deed.",
          "Village Officer inspects Village Land Records (BTR) and conducts field inspection if necessary.",
          "Download digitally signed certificate from portal."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടലിൽ ലോഗിൻ ചെയ്ത് കൈവശാവകാശ സർട്ടിഫിക്കറ്റ് തിരഞ്ഞെടുക്കുക.",
          "സർവ്വേ നമ്പറും താണ്ഡപ്പേരും രേഖപ്പെടുത്തുക.",
          "ആധാരവും നികുതി രസീതും അപ്‌ലോഡ് ചെയ്യുക.",
          "വില്ലേജ് ഓഫീസറുടെ അനുമതിക്ക് ശേഷം സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Ensure Pokkuvaravu (mutation) is complete before applying; unmutated land cannot be granted a possession certificate.",
        ml: "പോക്കുവരവ് ചെയ്ത ഭൂമിക്ക് മാത്രമേ കൈവശാവകാശ സർട്ടിഫിക്കറ്റ് ലഭിക്കൂ."
      },
      lastVerified: "March 2026",
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
        en: "Revenue document specifying the exact physical location, boundaries, and survey coordinates of a plot.",
        ml: "ഒരു വസ്തുവിന്റെ കൃത്യമായ അതിരുകൾ, സർവ്വേ നമ്പർ, സ്ഥാനം എന്നിവ വ്യക്തമാക്കി വില്ലേജ് ഓഫീസർ നൽകുന്ന സ്കെച്ചും രേഖയും."
      },
      whoNeeds: {
        en: "Landowners applying for building permits, electric power connections, bank mortgages, or boundary fencing approvals.",
        ml: "കെട്ടിട പെർമിറ്റ്, വൈദ്യുതി കണക്ഷൻ, ബാങ്ക് ലോൺ, അതിർത്തി തിരിക്കൽ എന്നിവയ്ക്ക്."
      },
      eligibility: {
        en: "Registered landowners holding mutated land records in the revenue village.",
        ml: "റവന്യൂ രേഖകളിൽ പേരുള്ള ഭൂവുടമകൾക്ക്."
      },
      documents: {
        en: [
          "Registered Title Deed copy",
          "Latest Land Tax Receipt",
          "Prior survey sketch or field measurement book (FMB) excerpt if available",
          "Aadhaar Card of landowner"
        ],
        ml: [
          "ആധാരത്തിന്റെ പകർപ്പ്",
          "നടപ്പു വർഷത്തെ ഭൂനികുതി രസീത്",
          "പഴയ സ്കെച്ച് അല്ലെങ്കിൽ എഫ്.എം.ബി (FMB) പകർപ്പ് (ഉണ്ടെങ്കിൽ)",
          "ഭൂവുടമയുടെ ആധാർ കാർഡ്"
        ]
      },
      additionalDocs: {
        en: [
          "Village field staff inspection request if boundaries are disputed or newly subdivided"
        ],
        ml: [
          "അതിർത്തി തർക്കമുണ്ടെങ്കിൽ ഫീൽഡ് സർവ്വേ പരിശോധന"
        ]
      },
      whereToApply: {
        en: "Kerala e-District Portal or local Village Office.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ്."
      },
      mode: {
        en: "Online & Field Visit",
        ml: "ഓൺലൈൻ & ഫീൽഡ് പരിശോധന"
      },
      steps: {
        en: [
          "Apply on e-District portal under 'Location Certificate'.",
          "Provide survey number, re-survey number, sub-division, and block details.",
          "Village Field Assistant inspects the plot and prepares location sketch showing four boundaries.",
          "Village Officer approves and issues digitally signed certificate and sketch."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടലിൽ സർവ്വേ വിവരങ്ങൾ നൽകി അപേക്ഷിക്കുക.",
          "വില്ലേജ് ജീവനക്കാർ സ്ഥലം സന്ദർശിച്ച് അതിരുകൾ രേഖപ്പെടുത്തിയ സ്കെച്ച് തയ്യാറാക്കുന്നു.",
          "വില്ലേജ് ഓഫീസർ പരിശോധിച്ച് സർട്ടിഫിക്കറ്റ് നൽകുന്നു."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Essential document for all local body building permits under Kerala Panchayat / Municipality Building Rules.",
        ml: "കെട്ടിട നിർമ്മാണ പെർമിറ്റുകൾക്ക് നിർബന്ധമായ രേഖയാണിത്."
      },
      lastVerified: "March 2026",
      verified: true
    },
    {
      id: "local-body-certificates",
      category: "documents",
      icon: "🏛️",
      name: {
        en: "Local Body Civic Certificates",
        ml: "തദ്ദേശ സ്ഥാപന സർട്ടിഫിക്കറ്റുകൾ"
      },
      summary: {
        en: "Civic certificates including Non-remarriage, Residence, and Ownership issued by Grama Panchayat / Municipality.",
        ml: "പഞ്ചായത്ത് അല്ലെങ്കിൽ നഗരസഭ വഴി ലഭ്യമാകുന്ന വിവിധങ്ങളായ സാക്ഷ്യപത്രങ്ങൾ."
      },
      whoNeeds: {
        en: "Citizens needing civic attestations for welfare schemes, pensions, or local utility connections.",
        ml: "ക്ഷേമ പദ്ധതികൾ, പെൻഷൻ, മറ്റ് തദ്ദേശ ആവശ്യങ്ങൾ എന്നിവയ്ക്ക്."
      },
      eligibility: {
        en: "Residents or property owners situated within the local body jurisdiction.",
        ml: "തദ്ദേശ സ്ഥാപന പരിധിയിൽ താമസിക്കുന്നവർക്ക്."
      },
      documents: {
        en: [
          "Aadhaar Card / Voter ID",
          "Ration Card copy",
          "Building tax receipt / Door number confirmation"
        ],
        ml: [
          "ആധാർ കാർഡ് / വോട്ടർ ഐഡി",
          "റേഷൻ കാർഡ്",
          "കെട്ടിട നികുതി രസീത്"
        ]
      },
      additionalDocs: {
        en: [
          "Ward Councilor / Member recommendation where applicable"
        ],
        ml: [
          "വാർഡ് മെമ്പറുടെ സാക്ഷ്യപത്രം (ആവശ്യമെങ്കിൽ)"
        ]
      },
      whereToApply: {
        en: "K-SMART / Citizen Portal or local body office front office.",
        ml: "കെ-സ്മാർട്ട് പോർട്ടൽ അല്ലെങ്കിൽ പഞ്ചായത്ത്/മുനിസിപ്പാലിറ്റി ഫ്രണ്ട് ഓഫീസ്."
      },
      mode: {
        en: "Online & In-person",
        ml: "ഓൺലൈൻ & തദ്ദേശ ഓഫീസ്"
      },
      steps: {
        en: [
          "Apply online via K-SMART or submit application at Panchayat counter.",
          "Enquiry conducted by Junior Superintendent / Secretary.",
          "Download digitally verified certificate."
        ],
        ml: [
          "പോർട്ടൽ വഴിയോ തദ്ദേശ ഓഫീസിലോ അപേക്ഷ നൽകുക.",
          "പരിശോധനയ്ക്ക് ശേഷം സർട്ടിഫിക്കറ്റ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://ksmart.lsgkerala.gov.in",
      notes: {
        en: "Services are progressively integrated into K-SMART statewide.",
        ml: "കെ-സ്മാർട്ട് പോർട്ടൽ വഴി സേവനങ്ങൾ ലഭ്യമാണ്."
      },
      lastVerified: "March 2026",
      verified: true
    },
    {
      id: "marriage-registration-services",
      category: "documents",
      icon: "📜",
      name: {
        en: "Marriage Registration Services",
        ml: "വിവാഹ രജിസ്ട്രേഷൻ സേവനങ്ങൾ"
      },
      summary: {
        en: "Statutory civil registration under Special Marriage Act or Common Marriage Rules via Registration Department.",
        ml: "സബ് രജിസ്ട്രാർ ഓഫീസ് വഴി സ്പെഷ്യൽ മാര്യേജ് ആക്ട് പ്രകാരമോ പൊതു ചട്ടങ്ങൾ പ്രകാരമോ ഉള്ള വിവാഹ രജിസ്ട്രേഷൻ."
      },
      whoNeeds: {
        en: "Interfaith couples, civil marriages, or couples needing registration under Special Marriage Act 1954.",
        ml: "സ്പെഷ്യൽ മാര്യേജ് ആക്ട് പ്രകാരം വിവാഹം രജിസ്റ്റർ ചെയ്യാൻ ആഗ്രഹിക്കുന്നവർ."
      },
      eligibility: {
        en: "Groom 21+, Bride 18+, free consent, meeting statutory notice guidelines.",
        ml: "നിയമാനുസൃത പ്രായപരിധി പൂർത്തിയായ ഏതൊരു ഇന്ത്യൻ പൗരനും."
      },
      documents: {
        en: [
          "Age proof documents (SSLC / Birth Certificate)",
          "Address proof of both parties",
          "Photos of bride and groom",
          "Identity proofs of three witnesses"
        ],
        ml: [
          "പ്രായം തെളിയിക്കുന്ന രേഖകൾ",
          "മേൽവിലാസ രേഖകൾ",
          "ഫോട്ടോകൾ",
          "മൂന്ന് സാക്ഷികളുടെ തിരിച്ചറിയൽ രേഖകൾ"
        ]
      },
      additionalDocs: {
        en: [
          "Divorce decree or death certificate of previous spouse if previously married"
        ],
        ml: [
          "മുൻപ് വിവാഹം ചെയ്തിട്ടുണ്ടെങ്കിൽ വിവാഹമോചന ഉത്തരവ്"
        ]
      },
      whereToApply: {
        en: "PEARL Portal (Registration Department) or jurisdictional Sub-Registrar Office.",
        ml: "രജിസ്ട്രേഷൻ വകുപ്പിന്റെ PEARL പോർട്ടൽ അല്ലെങ്കിൽ സബ് രജിസ്ട്രാർ ഓഫീസ്."
      },
      mode: {
        en: "Online Notice & Physical Registration",
        ml: "ഓൺലൈൻ നോട്ടീസ് & നേരിട്ടുള്ള രജിസ്ട്രേഷൻ"
      },
      steps: {
        en: [
          "Submit 30-day statutory notice online on PEARL portal.",
          "Sub-Registrar publishes notice.",
          "Appear after 30 days before Marriage Officer with three witnesses.",
          "Sign register and receive official Special Marriage Certificate."
        ],
        ml: [
          "PEARL പോർട്ടലിൽ 30 ദിവസത്തെ നോട്ടീസ് സമർപ്പിക്കുക.",
          "30 ദിവസത്തിന് ശേഷം മൂന്ന് സാക്ഷികളുമായി സബ് രജിസ്ട്രാർ ഓഫീസിൽ നേരിട്ടെത്തുക.",
          "രജിസ്റ്ററിൽ ഒപ്പിട്ട് സർട്ടിഫിക്കറ്റ് കൈപ്പറ്റുക."
        ]
      },
      officialUrl: "https://keralaregistration.gov.in",
      notes: {
        en: "Mandatory 30-day public notice applies for Special Marriage Act registrations.",
        ml: "സ്പെഷ്യൽ മാര്യേജ് ആക്ട് പ്രകാരം 30 ദിവസത്തെ നോട്ടീസ് കാലാവധി നിർബന്ധമാണ്."
      },
      lastVerified: "March 2026",
      verified: true
    },
    {
      id: "domicile-certificate",
      category: "documents",
      icon: "📜",
      name: {
        en: "Domicile Certificate",
        ml: "ഡൊമിസൈൽ സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Official revenue certificate certifying continuous long-term residence and permanent settlement in Kerala.",
        ml: "ഒരു വ്യക്തി കേരളത്തിൽ സ്ഥിരതാമസമാക്കിയിട്ടുണ്ടെന്ന് സാക്ഷ്യപ്പെടുത്തി റവന്യൂ അധികാരികൾ നൽകുന്ന രേഖ."
      },
      whoNeeds: {
        en: "Candidates applying for central government recruitment, defense forces, central institutional quotas, or inter-state transfers.",
        ml: "കേന്ദ്ര സർക്കാർ ജോലികൾ, സൈനിക റിക്രൂട്ട്മെന്റുകൾ, ഇതര സംസ്ഥാന ആവശ്യങ്ങൾ എന്നിവയ്ക്കായി സ്ഥിരതാമസം തെളിയിക്കേണ്ടവർ."
      },
      eligibility: {
        en: "Permanent resident of Kerala residing in the state for continuous statutory qualifying period (typically 5+ years).",
        ml: "നിശ്ചിത വർഷങ്ങളിൽ കൂടുതൽ (സാധാരണയായി 5 വർഷം) കേരളത്തിൽ സ്ഥിരതാമസമുള്ള വ്യക്തികൾക്ക്."
      },
      documents: {
        en: [
          "Proof of residence in Kerala for required continuous years (Ration card, Land tax, Voter ID)",
          "Applicant's Birth Certificate or School Certificate (SSLC) showing education in Kerala",
          "Aadhaar Card of applicant",
          "Parent's residential or land records in Kerala (if applicable)"
        ],
        ml: [
          "കേരളത്തിലെ തുടർച്ചയായ താമസം തെളിയിക്കുന്ന രേഖകൾ (റേഷൻ കാർഡ്, വോട്ടർ ഐഡി, ഭൂനികുതി)",
          "കേരളത്തിൽ പഠനം തെളിയിക്കുന്ന സ്കൂൾ സർട്ടിഫിക്കറ്റ് / എസ്.എസ്.എൽ.സി",
          "അപേക്ഷകന്റെ ആധാർ കാർഡ്",
          "മാതാപിതാക്കളുടെ താമസ അല്ലെങ്കിൽ ഭൂമി രേഖകൾ"
        ]
      },
      additionalDocs: {
        en: [
          "Continuous residential certificate issued by Village Officer / Local Body Secretary"
        ],
        ml: [
          "വില്ലേജ് ഓഫീസർ അല്ലെങ്കിൽ തദ്ദേശ സെക്രട്ടറി നൽകുന്ന താമസ സാക്ഷ്യപത്രം"
        ]
      },
      whereToApply: {
        en: "Online through Kerala e-District portal or nearest Akshaya Centre / Taluk Office.",
        ml: "കേരള ഇ-ഡിസ്ട്രിക്റ്റ് (e-District) പോർട്ടൽ വഴി അല്ലെങ്കിൽ അക്ഷയ കേന്ദ്രം / താലൂക്ക് ഓഫീസ് വഴി."
      },
      mode: {
        en: "Online & Revenue Verification",
        ml: "ഓൺലൈൻ & റവന്യൂ പരിശോധന"
      },
      steps: {
        en: [
          "Log in to the e-District Kerala portal and choose 'Domicile Certificate'.",
          "Fill applicant personal background and continuous residential history.",
          "Upload proof of residence, educational certificates, and identity documents.",
          "Village Officer and Tahsildar conduct inquiry regarding permanent home status.",
          "Download digitally signed Domicile Certificate from dashboard."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടലിൽ ലോഗിൻ ചെയ്ത് ഡൊമിസൈൽ സർട്ടിഫിക്കറ്റ് തിരഞ്ഞെടുക്കുക.",
          "താമസ വിവരങ്ങളും വിദ്യാഭ്യാസ രേഖകളും നൽകുക.",
          "റേഷൻ കാർഡ്, ആധാർ എന്നിവ അപ്‌ലോഡ് ചെയ്ത് ഫീസ് അടയ്ക്കുക.",
          "റവന്യൂ അന്വേഷണത്തിന് ശേഷം ഡിജിറ്റൽ സർട്ടിഫിക്കറ്റ് ലഭ്യമാകും."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Distinct from a temporary Residence Certificate; Domicile certifies intention of permanent residence in the state.",
        ml: "താൽക്കാലിക റസിഡൻസ് സർട്ടിഫിക്കറ്റിൽ നിന്നും വ്യത്യസ്തമായി സ്ഥിരതാമസ പദവിയാണ് ഇത് വ്യക്തമാക്കുന്നത്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "non-creamy-layer-certificate",
      category: "documents",
      icon: "📑",
      name: {
        en: "Non-Creamy Layer Certificate",
        ml: "നോൺ ക്രീമിലെയർ സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Statutory certificate issued to SEBC/OBC candidates whose parental income falls within the permissible reservation threshold.",
        ml: "ഒ.ബി.സി / എസ്.ഇ.ബി.സി വിഭാഗങ്ങളിലെ സംവരണ ആനുകൂല്യങ്ങൾ ലഭിക്കുന്നതിനായി വരുമാന പരിധി തെളിയിക്കുന്ന രേഖ."
      },
      whoNeeds: {
        en: "OBC candidates seeking quota reservations in Central/State government jobs, UPSC, SSC, and college admissions.",
        ml: "കേന്ദ്ര-സംസ്ഥാന സർക്കാർ ജോലികളിലെയും ഉന്നത വിദ്യാഭ്യാസ പ്രവേശനങ്ങളിലെയും ഒ.ബി.സി സംവരണത്തിനായി."
      },
      eligibility: {
        en: "Applicant belonging to an approved OBC/SEBC category whose parental annual gross income does not exceed statutory limits.",
        ml: "സംസ്ഥാന അല്ലെങ്കിൽ കേന്ദ്ര ഒ.ബി.സി ലിസ്റ്റിൽ ഉൾപ്പെട്ടതും നിശ്ചിത വരുമാന പരിധിക്ക് താഴെയുള്ളതുമായ കുടുംബാംഗങ്ങൾക്ക്."
      },
      documents: {
        en: [
          "SSLC Book / Educational Certificate showing community",
          "Aadhaar Card and Ration Card copy",
          "Parental Salary Certificate / Form 16 / Income Tax Returns",
          "Land Tax Receipt (showing agricultural land holdings, if any)"
        ],
        ml: [
          "ജാതി / സമുദായം രേഖപ്പെടുത്തിയ എസ്.എസ്.എൽ.സി ബുക്ക്",
          "ആധാർ കാർഡും റേഷൻ കാർഡും",
          "മാതാപിതാക്കളുടെ ശമ്പള സർട്ടിഫിക്കറ്റ് / ഫോം 16 / ഐ.ടി.ആർ",
          "നടപ്പു വർഷത്തെ ഭൂനികുതി രസീത്"
        ]
      },
      additionalDocs: {
        en: [
          "Affidavit stating parents do not hold Class I/II (Group A/B) gazetted positions"
        ],
        ml: [
          "മാതാപിതാക്കൾക്ക് ഉയർന്ന ഗസറ്റഡ് പദവികൾ ഇല്ലെന്ന് വ്യക്തമാക്കുന്ന സത്യവാങ്മൂലം"
        ]
      },
      whereToApply: {
        en: "Online via Kerala e-District portal or in person at Akshaya Centre.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് (e-District) പോർട്ടൽ അല്ലെങ്കിൽ അക്ഷയ കേന്ദ്രം വഴി."
      },
      mode: {
        en: "Online & Revenue Tahsildar Inquiry",
        ml: "ഓൺലൈൻ & റവന്യൂ പരിശോധന"
      },
      steps: {
        en: [
          "Select 'Non-Creamy Layer Certificate' (State or Central format as required) on e-District portal.",
          "Enter community details and parental financial information.",
          "Upload community proof, income documents, and land tax receipts.",
          "Village Officer inspects parental earnings and employment category.",
          "Tahsildar approves and issues digitally signed certificate."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടലിൽ കേന്ദ്ര അല്ലെങ്കിൽ സംസ്ഥാന ഫോർമാറ്റിലുള്ള നോൺ ക്രീമിലെയർ തിരഞ്ഞെടുക്കുക.",
          "സമുദായ വിവരങ്ങളും മാതാപിതാക്കളുടെ വരുമാന വിവരങ്ങളും രേഖപ്പെടുത്തുക.",
          "രേഖകൾ അപ്‌ലോഡ് ചെയ്ത് ഫീസ് അടയ്ക്കുക.",
          "തഹസിൽദാർ ഡിജിറ്റലായി സാക്ഷ്യപ്പെടുത്തിയ സർട്ടിഫിക്കറ്റ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Specify clearly whether you require the State (Kerala) format or Central Government format before applying.",
        ml: "കേന്ദ്ര ആവശ്യങ്ങൾക്കുള്ളതാണോ കേരള ആവശ്യങ്ങൾക്കുള്ളതാണോ എന്ന് അപേക്ഷിക്കുമ്പോൾ വ്യക്തമാക്കണം."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "minority-certificate",
      category: "documents",
      icon: "🕊️",
      name: {
        en: "Minority Certificate",
        ml: "മൈനോറിറ്റി സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Official certificate verifying that an individual belongs to a notified religious or linguistic minority community.",
        ml: "വിജ്ഞാപനം ചെയ്യപ്പെട്ട ന്യൂനപക്ഷ സമുദായത്തിൽപ്പെട്ട വ്യക്തിയാണെന്ന് വ്യക്തമാക്കുന്ന സർട്ടിഫിക്കറ്റ്."
      },
      whoNeeds: {
        en: "Students and applicants seeking minority welfare scholarships, coaching grants, or admission quota in minority institutions.",
        ml: "ന്യൂനപക്ഷ ക്ഷേമ സ്കോളർഷിപ്പുകൾ, വിദ്യാഭ്യാസ ആനുകൂല്യങ്ങൾ, സംവരണ സീറ്റുകൾ എന്നിവ ആവശ്യമുള്ളവർ."
      },
      eligibility: {
        en: "Citizens belonging to constitutionally recognized religious minorities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) in Kerala.",
        ml: "നിയമപരമായി അംഗീകരിക്കപ്പെട്ട ന്യൂനപക്ഷ സമുദായങ്ങളിൽ ഉൾപ്പെട്ട വ്യക്തികൾക്ക്."
      },
      documents: {
        en: [
          "SSLC Certificate / School Transfer Certificate indicating religion",
          "Aadhaar Card and Ration Card",
          "Parent's school or identity certificates showing community"
        ],
        ml: [
          "മതം രേഖപ്പെടുത്തിയ എസ്.എസ്.എൽ.സി സർട്ടിഫിക്കറ്റ് / ടി.സി",
          "ആധാർ കാർഡും റേഷൻ കാർഡും",
          "മാതാപിതാക്കളുടെ സമുദായ രേഖകൾ"
        ]
      },
      additionalDocs: {
        en: [
          "Certificate from recognized religious body or institution if religion is not explicitly stated in school records"
        ],
        ml: [
          "സ്കൂൾ രേഖകളിൽ മതം വ്യക്തമല്ലെങ്കിൽ അംഗീകൃത മതസ്ഥാപനത്തിൽ നിന്നുള്ള രേഖ"
        ]
      },
      whereToApply: {
        en: "Kerala e-District Portal or local Village Office / Akshaya Centre.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ് / അക്ഷയ കേന്ദ്രം."
      },
      mode: {
        en: "Online & Akshaya",
        ml: "ഓൺലൈൻ & അക്ഷയ കേന്ദ്രങ്ങൾ"
      },
      steps: {
        en: [
          "Apply online through e-District Kerala under 'Minority Certificate'.",
          "Submit applicant religion details and upload SSLC / identity documents.",
          "Village Officer validates records against village family register.",
          "Download digitally signed certificate upon approval."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴി മൈനോറിറ്റി സർട്ടിഫിക്കറ്റിനായി അപേക്ഷിക്കുക.",
          "മതം വ്യക്തമാക്കുന്ന സ്കൂൾ രേഖകളും ആധാറും അപ്‌ലോഡ് ചെയ്യുക.",
          "വില്ലേജ് ഓഫീസറുടെ പരിശോധനയ്ക്ക് ശേഷം സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Frequently required for Directorate of Minority Welfare schemes and Central Minority Scholarships.",
        ml: "ന്യൂനപക്ഷ ക്ഷേമ വകുപ്പിന്റെ വിവിധ സ്കോളർഷിപ്പുകൾക്ക് ഈ രേഖ ആവശ്യമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "one-and-same-certificate",
      category: "documents",
      icon: "🪪",
      name: {
        en: "One and the Same Certificate",
        ml: "രണ്ടും ഒരാളെന്ന് തെളിയിക്കുന്ന സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Statutory revenue certificate affirming that different names appearing across various documents refer to the same individual.",
        ml: "വ്യത്യസ്ത രേഖകളിൽ പേര് വ്യത്യസ്തമായി രേഖപ്പെടുത്തിയത് ഒരേ വ്യക്തിയുടേതാണെന്ന് തെളിയിക്കുന്ന റവന്യൂ രേഖ."
      },
      whoNeeds: {
        en: "Individuals facing spelling discrepancies, name expansions, or initial mismatches in passports, school records, or property deeds.",
        ml: "പാസ്‌പോർട്ട്, സ്കൂൾ രേഖകൾ, ആധാർ, ആധാരം എന്നിവയിൽ പേരിലോ ഇനിഷ്യലിലോ വ്യത്യാസമുള്ളവർ."
      },
      eligibility: {
        en: "Any resident citizen having genuine spelling or naming variations across their official credentials.",
        ml: "വ്യത്യസ്ത ഔദ്യോഗിക രേഖകളിൽ പേരുകളിൽ പൊരുത്തക്കേടുകൾ ഉള്ള ഏതൊരു വ്യക്തിക്കും."
      },
      documents: {
        en: [
          "Copies of all documents carrying the differing names / spellings (SSLC, Aadhaar, Passport, etc.)",
          "Notarized affidavit on stamped paper declaring that all names refer to the applicant",
          "Ration Card and residential identity proof"
        ],
        ml: [
          "വ്യത്യസ്ത പേരുകൾ രേഖപ്പെടുത്തിയിട്ടുള്ള എല്ലാ രേഖകളുടെയും പകർപ്പുകൾ",
          "മുദ്രപ്പത്രത്തിൽ നോട്ടറി സാക്ഷ്യപ്പെടുത്തിയ സത്യവാങ്മൂലം",
          "റേഷൻ കാർഡും താമസ രേഖയും"
        ]
      },
      additionalDocs: {
        en: [
          "Kerala Gazette publication extract (if formal legal name change was previously gazetted)"
        ],
        ml: [
          "ഗസറ്റ് വിജ്ഞാപനം നടത്തിയിട്ടുണ്ടെങ്കിൽ അതിന്റെ പകർപ്പ്"
        ]
      },
      whereToApply: {
        en: "Kerala e-District Portal or jurisdictional Tahsildar / Village Office.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ താലൂക്ക് / വില്ലേജ് ഓഫീസ്."
      },
      mode: {
        en: "Online & Revenue Inquest",
        ml: "ഓൺലൈൻ & റവന്യൂ പരിശോധന"
      },
      steps: {
        en: [
          "Apply on e-District portal selecting 'One and the Same Certificate'.",
          "Specify the exact differing names and the respective documents where they appear.",
          "Upload notarized affidavit and the conflicting identity cards.",
          "Village Officer conducts local inquiry to confirm single identity.",
          "Tahsildar sanctions the certificate."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴി അപേക്ഷ സമർപ്പിക്കുക.",
          "വ്യത്യസ്ത രേഖകളിലെ പേരുകളുടെ വിശദാംശങ്ങളും സത്യവാങ്മൂലവും നൽകുക.",
          "വില്ലേജ് ഓഫീസറുടെ അന്വേഷണത്തിന് ശേഷം തഹസിൽദാർ സർട്ടിഫിക്കറ്റ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Ensure the affidavit clearly lists every single document and the exact variant spelling involved.",
        ml: "ഏതൊക്കെ രേഖകളിലാണ് പേരുമാറ്റം ഉള്ളതെന്ന് സത്യവാങ്മൂലത്തിൽ കൃത്യമായി വ്യക്തമാക്കിയിരിക്കണം."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "widow-widower-certificate",
      category: "documents",
      icon: "🕯️",
      name: {
        en: "Widow / Widower Certificate",
        ml: "വിധവ / വിഭാര്യൻ സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Revenue document certifying that an individual's spouse is deceased and the individual remains unmarried.",
        ml: "ഭർത്താവോ ഭാര്യയോ മരണപ്പെട്ടുവെന്നും അപേക്ഷകൻ പുനർവിവാഹം ചെയ്തിട്ടില്ലെന്നും സാക്ഷ്യപ്പെടുത്തുന്ന രേഖ."
      },
      whoNeeds: {
        en: "Surviving spouses applying for widow pension, preferential housing allocations, educational aid, or government job age relaxations.",
        ml: "വിധവാ പെൻഷൻ, ഭവന പദ്ധതികൾ, ജോലി അപേക്ഷകളിലെ പ്രായപരിധി ഇളവുകൾ എന്നിവയ്ക്ക്."
      },
      eligibility: {
        en: "Legally married surviving spouse whose partner has passed away, residing within the revenue village jurisdiction.",
        ml: "ഭാര്യയോ ഭർത്താവോ മരണപ്പെട്ട, പുനർവിവാഹം കഴിച്ചിട്ടില്ലാത്ത വ്യക്തികൾക്ക്."
      },
      documents: {
        en: [
          "Death Certificate of the deceased spouse",
          "Marriage Certificate or Ration Card showing marital relationship",
          "Aadhaar Card of the applicant",
          "Self-declaration affirming current unmarried status"
        ],
        ml: [
          "ഭാര്യയുടെ അല്ലെങ്കിൽ ഭർത്താവിന്റെ മരണ സർട്ടിഫിക്കറ്റ്",
          "വിവാഹ സർട്ടിഫിക്കറ്റ് അല്ലെങ്കിൽ റേഷൻ കാർഡ്",
          "അപേക്ഷകന്റെ ആധാർ കാർഡ്",
          "പുനർവിവാഹം ചെയ്തിട്ടില്ലെന്ന് വ്യക്തമാക്കുന്ന സ്വയംസാക്ഷ്യപത്രം"
        ]
      },
      additionalDocs: {
        en: [
          "Certificate from local Ward Member / Councilor corroborating widow/widower status"
        ],
        ml: [
          "വാർഡ് മെമ്പർ / കൗൺസിലറുടെ സാക്ഷ്യപത്രം"
        ]
      },
      whereToApply: {
        en: "Kerala e-District Portal or local Village Office.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ് വഴി."
      },
      mode: {
        en: "Online & Village Inquiry",
        ml: "ഓൺലൈൻ & വില്ലേജ് തല പരിശോധന"
      },
      steps: {
        en: [
          "Log in to e-District portal and select 'Widow-Widower Certificate'.",
          "Enter spouse death details and personal information.",
          "Upload spouse death certificate, marriage proof, and identity documents.",
          "Village Officer verifies status through residential field enquiry.",
          "Download digitally signed certificate upon approval."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടലിൽ ലോഗിൻ ചെയ്ത് അപേക്ഷ സമർപ്പിക്കുക.",
          "മരണ സർട്ടിഫിക്കറ്റ്, റേഷൻ കാർഡ്, ആധാർ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക.",
          "വില്ലേജ് ഓഫീസറുടെ അന്വേഷണത്തിന് ശേഷം സർട്ടിഫിക്കറ്റ് ലഭ്യമാകും."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Annual re-verification may be required when submitting for recurring social welfare pension disbursement.",
        ml: "സാമൂഹ്യ സുരക്ഷാ പെൻഷൻ ആവശ്യങ്ങൾക്ക് നിശ്ചിത ഇടവേളകളിൽ ഇത് പുതുക്കേണ്ടി വന്നേക്കാം."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "non-remarriage-certificate",
      category: "documents",
      icon: "📜",
      name: {
        en: "Non-Remarriage Certificate",
        ml: "പുനർവിവാഹം ചെയ്തിട്ടില്ലെന്ന സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Statutory attestation confirming that a surviving spouse has not entered into a subsequent marriage following spouse's demise.",
        ml: "പങ്കാളിയുടെ മരണശേഷം അപേക്ഷകൻ പുനർവിവാഹം ചെയ്തിട്ടില്ലെന്ന് റവന്യൂ അധികാരികൾ സാക്ഷ്യപ്പെടുത്തുന്ന രേഖ."
      },
      whoNeeds: {
        en: "Recipients of family pension, defense widow pension, service benefits, or maintenance allowances.",
        ml: "ഫാമിലി പെൻഷൻ, സർവീസ് ആനുകൂല്യങ്ങൾ, ജീവനാംശം എന്നിവ മുടങ്ങാതെ ലഭിക്കുന്നതിനായി."
      },
      eligibility: {
        en: "Surviving spouse entitled to continuous pension benefits conditional on remaining unmarried.",
        ml: "തുടർവിവാഹം കഴിക്കാത്തതിനാൽ പെൻഷൻ ആനുകൂല്യങ്ങൾക്ക് അർഹതയുള്ള പങ്കാളിക്ക്."
      },
      documents: {
        en: [
          "Death Certificate of the deceased spouse",
          "Pension Payment Order (PPO) or Pensioner ID details",
          "Aadhaar Card and Ration Card of applicant",
          "Self-declaration affidavit of non-remarriage"
        ],
        ml: [
          "മരണപ്പെട്ട പങ്കാളിയുടെ മരണ സർട്ടിഫിക്കറ്റ്",
          "പെൻഷൻ പേയ്മെന്റ് ഓർഡർ (PPO) രേഖകൾ",
          "ആധാർ കാർഡും റേഷൻ കാർഡും",
          "പുനർവിവാഹം ചെയ്തിട്ടില്ലെന്ന സത്യവാങ്മൂലം"
        ]
      },
      additionalDocs: {
        en: [
          "Attestation by two prominent local residents or Ward Member"
        ],
        ml: [
          "വാർഡ് മെമ്പറുടെയോ പ്രദേശത്തെ രണ്ട് വ്യക്തികളുടെയോ സാക്ഷ്യപ്പെടുത്തൽ"
        ]
      },
      whereToApply: {
        en: "Online via Kerala e-District Portal or local Village Office.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ് വഴി."
      },
      mode: {
        en: "Online & Village Officer Verification",
        ml: "ഓൺലൈൻ & വില്ലേജ് ഓഫീസ്"
      },
      steps: {
        en: [
          "Apply on e-District portal selecting 'Non-Remarriage Certificate'.",
          "Upload declaration, pension order, and spouse death certificate.",
          "Village Officer completes local field verification.",
          "Download digitally verified certificate."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴി അപേക്ഷിക്കുക.",
          "സത്യവാങ്മൂലവും മരണ സർട്ടിഫിക്കറ്റും നൽകുക.",
          "വില്ലേജ് ഓഫീസറുടെ പരിശോധനയ്ക്ക് ശേഷം സർട്ടിഫിക്കറ്റ് ലഭിക്കും."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Typically required once every financial year by pension disbursement treasuries and defense pension offices.",
        ml: "ഫാമിലി പെൻഷൻ തുടർച്ചയായി ലഭിക്കുന്നതിന് വർഷാവർഷം ട്രഷറിയിൽ ഹാജരാക്കേണ്ടി വരാറുണ്ട്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "destitute-certificate",
      category: "documents",
      icon: "🤝",
      name: {
        en: "Destitute Certificate",
        ml: "നിരാലംബ സർട്ടിഫിക്കറ്റ് (ഡെസ്റ്റിറ്റ്യൂട്ട്)"
      },
      summary: {
        en: "Certification issued to individuals having no independent financial means, land, or supporting family members.",
        ml: "സ്വന്തമായി വരുമാനമോ ഭൂമിയോ സംരക്ഷിക്കാൻ ആളോ ഇല്ലാത്ത നിരാലംബരാണെന്ന് സാക്ഷ്യപ്പെടുത്തുന്ന രേഖ."
      },
      whoNeeds: {
        en: "Extremely vulnerable individuals applying for free housing under state welfare schemes, legal aid, or emergency destitution relief.",
        ml: "സർക്കാർ ഭവന പദ്ധതികൾ, സൗജന്യ റേഷൻ, സൗജന്യ നിയമസഹായം, അടിയന്തിര ദുരിതാശ്വാസം എന്നിവയ്ക്ക്."
      },
      eligibility: {
        en: "Individuals residing in Kerala with virtually zero income, landless or marginal shelter, and no earning adult children.",
        ml: "വരുമാനമാർഗ്ഗങ്ങളോ താങ്ങാനാകുന്ന കുടുംബാംഗങ്ങളോ ഇല്ലാത്ത സാമ്പത്തികമായി ഏറ്റവും പിന്നാക്കം നിൽക്കുന്നവർ."
      },
      documents: {
        en: [
          "Aadhaar Card and Ration Card (BPL / AAY Priority Card if available)",
          "Income certificate demonstrating acute poverty / zero declared income",
          "Residential status report or proof of homelessness / rented shelter",
          "Passport size photograph"
        ],
        ml: [
          "ആധാർ കാർഡ്, റേഷൻ കാർഡ് (BPL / മഞ്ഞ കാർഡ് ഉണ്ടെങ്കിൽ)",
          "വില്ലേജ് ഓഫീസിൽ നിന്നുള്ള വരുമാന സർട്ടിഫിക്കറ്റ്",
          "താമസസ്ഥലം സംബന്ധിച്ച സാക്ഷ്യപത്രം",
          "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോ"
        ]
      },
      additionalDocs: {
        en: [
          "Medical certificate if affected by chronic disability or critical illness"
        ],
        ml: [
          "തീവ്ര രോഗങ്ങളോ ഭിന്നശേഷിയോ ഉണ്ടെങ്കിൽ മെഡിക്കൽ സർട്ടിഫിക്കറ്റ്"
        ]
      },
      whereToApply: {
        en: "Kerala e-District Portal or local Village / Taluk Office.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് / താലൂക്ക് ഓഫീസ്."
      },
      mode: {
        en: "Online & Thorough Revenue Enquiry",
        ml: "ഓൺലൈൻ & സമഗ്ര റവന്യൂ അന്വേഷണം"
      },
      steps: {
        en: [
          "Submit application online via e-District or through Akshaya.",
          "Upload identity proof and state destitute circumstances.",
          "Village Officer and Special Revenue Inspector conduct direct physical home visit.",
          "Tahsildar approves and sanctions Destitute Certificate."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴി വിവരങ്ങൾ നൽകി അപേക്ഷിക്കുക.",
          "റവന്യൂ ഉദ്യോഗസ്ഥർ നേരിട്ടെത്തി സാമ്പത്തിക-ജീവിത സാഹചര്യം പരിശോധിക്കുന്നു.",
          "തഹസിൽദാർ ഡിജിറ്റൽ സർട്ടിഫിക്കറ്റ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Subject to direct field inquiry. Concealing assets or pensions will result in immediate disqualification.",
        ml: "ഉദ്യോഗസ്ഥരുടെ നേരിട്ടുള്ള പരിശോധനയ്ക്ക് ശേഷമേ ഈ സർട്ടിഫിക്കറ്റ് അനുവദിക്കൂ."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "life-certificate",
      category: "documents",
      icon: "👤",
      name: {
        en: "Life Certificate (Jeevan Pramaan)",
        ml: "ജീവൻ പ്രമാൺ / ലൈഫ് സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Digital or physical biometric certification of life existence required annually for continuous pension disbursement.",
        ml: "പെൻഷൻ തടസ്സമില്ലാതെ ലഭിക്കുന്നതിന് പെൻഷൻകാർ വർഷം തോറും നൽകേണ്ട ജീവിച്ചിരിക്കുന്നു എന്ന സാക്ഷ്യപത്രം."
      },
      whoNeeds: {
        en: "State and Central government pensioners, EPF pensioners, and social security pension recipients.",
        ml: "സർക്കാർ പെൻഷൻകാർ, ഇ.പി.എഫ് പെൻഷൻകാർ, സർവീസ് പെൻഷൻ വാങ്ങുന്നവർ."
      },
      eligibility: {
        en: "Any authorized pensioner drawing pension from treasury, bank, or post office.",
        ml: "ട്രഷറി വഴിയോ ബാങ്ക് വഴിയോ പെൻഷൻ കൈപ്പറ്റുന്ന എല്ലാ പെൻഷൻകാർക്കും."
      },
      documents: {
        en: [
          "Aadhaar Number (must be linked to pension account)",
          "Pension Payment Order (PPO) Number",
          "Pension Disbursing Agency details (Treasury / Bank / Post Office account number)",
          "Registered mobile number for OTP"
        ],
        ml: [
          "പെൻഷനുമായി ബന്ധിപ്പിച്ച ആധാർ നമ്പർ",
          "പി.പി.ഒ (PPO) നമ്പർ",
          "പെൻഷൻ ലഭിക്കുന്ന ബാങ്ക് / ട്രഷറി അക്കൗണ്ട് വിവരങ്ങൾ",
          "മൊബൈൽ നമ്പർ"
        ]
      },
      additionalDocs: {
        en: [
          "Physical medical practitioner life certificate (only if biometric facial/fingerprint verification fails)"
        ],
        ml: [
          "ബയോമെട്രിക് ലഭ്യമല്ലെങ്കിൽ ഗസറ്റഡ് ഓഫീസർ ഒപ്പിട്ട ഫിസിക്കൽ സർട്ടിഫിക്കറ്റ്"
        ]
      },
      whereToApply: {
        en: "Jeevan Pramaan Portal / Face App, Citizen Treasury portal, Akshaya Centre, or Postman home doorstep service.",
        ml: "ജീവൻ പ്രമാൺ പോർട്ടൽ, ട്രഷറി പോർട്ടൽ, അക്ഷയ കേന്ദ്രം അല്ലെങ്കിൽ പോസ്റ്റ്മാൻ മുഖേന."
      },
      mode: {
        en: "Digital Biometric (Face / Fingerprint) & Treasury Counter",
        ml: "ഡിജിറ്റൽ ബയോമെട്രിക് & ട്രഷറി"
      },
      steps: {
        en: [
          "Open Jeevan Pramaan mobile app or visit Akshaya / Post Office.",
          "Enter Aadhaar and PPO number.",
          "Authenticate biometric identity via mobile camera face scan or fingerprint scanner.",
          "Pramaan ID is generated and automatically updated in treasury/bank records."
        ],
        ml: [
          "ജീവൻ പ്രമാൺ ആപ്പ് അല്ലെങ്കിൽ അക്ഷയ കേന്ദ്രം ഉപയോഗിക്കുക.",
          "ആധാർ നമ്പറും പി.പി.ഒ നമ്പറും നൽകുക.",
          "മൊബൈൽ ക്യാമറ വഴിയോ ഫിംഗർപ്രിന്റ് വഴിയോ ബയോമെട്രിക് സ്കാൻ പൂർത്തിയാക്കുക.",
          "സർട്ടിഫിക്കറ്റ് വിവരങ്ങൾ ട്രഷറിയിൽ സ്വമേധയാ അപ്‌ഡേറ്റാകും."
        ]
      },
      officialUrl: "https://jeevanpramaan.gov.in",
      notes: {
        en: "Must be submitted annually during November or specified muster windows to prevent pension stoppage.",
        ml: "പെൻഷൻ മുടങ്ങാതിരിക്കാൻ വർഷം തോറും കൃത്യസമയത്ത് ഇത് സമർപ്പിക്കണം."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "valuation-certificate",
      category: "documents",
      icon: "📐",
      name: {
        en: "Valuation Certificate",
        ml: "വിലനിർണ്ണയ സർട്ടിഫിക്കറ്റ് (വാല്യുവേഷൻ)"
      },
      summary: {
        en: "Official assessment of building or land fair market valuation issued by revenue or local engineering authorities.",
        ml: "ഭൂമിയുടെയോ കെട്ടിടത്തിന്റെയോ വിപണി മൂല്യം തിട്ടപ്പെടുത്തി റവന്യൂ അധികാരികൾ നൽകുന്ന രേഖ."
      },
      whoNeeds: {
        en: "Citizens paying stamp duty, securing court sureties, obtaining education loans, or settling family asset division.",
        ml: "ബാങ്ക് വായ്പകൾക്ക്, വിദേശ പഠനത്തിന് വരുമാന ആസ്തി തെളിയിക്കാൻ, കോടതി ആവശ്യങ്ങൾക്ക്."
      },
      eligibility: {
        en: "Registered property owners holding clear titles within Kerala revenue villages.",
        ml: "കേരളത്തിൽ സ്വന്തം പേരിൽ വസ്തുവകകളുള്ള ഉടമകൾക്ക്."
      },
      documents: {
        en: [
          "Registered Title Deed and prior deeds (Aadhaaram copies)",
          "Current financial year Land Tax Receipt",
          "Building plan, building tax receipt, and completion certificate (for building valuation)",
          "Possession Certificate and Location Sketch"
        ],
        ml: [
          "ആധാരത്തിന്റെ പകർപ്പ്",
          "നടപ്പു വർഷത്തെ ഭൂനികുതി രസീത്",
          "കെട്ടിട നികുതി രസീതും പ്ലാനും (കെട്ടിടങ്ങൾക്കാണെങ്കിൽ)",
          "കൈവശാവകാശ സർട്ടിഫിക്കറ്റും ലൊക്കേഷൻ സ്കെച്ചും"
        ]
      },
      additionalDocs: {
        en: [
          "Valuation report by registered approved chartered valuer/engineer"
        ],
        ml: [
          "അംഗീകൃത എൻജിനീയറുടെ മൂല്യനിർണ്ണയ റിപ്പോർട്ട് (ആവശ്യമെങ്കിൽ)"
        ]
      },
      whereToApply: {
        en: "Kerala e-District Portal / Revenue Village Office or Tahsildar.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് / താലൂക്ക് ഓഫീസ് വഴി."
      },
      mode: {
        en: "Online & Field Assessment",
        ml: "ഓൺലൈൻ & ഫീൽഡ് പരിശോധന"
      },
      steps: {
        en: [
          "Apply on e-District portal selecting 'Valuation Certificate'.",
          "Upload title deeds, tax receipts, and property boundary details.",
          "Village Officer inspects property and evaluates fair value slabs and structure condition.",
          "Tahsildar validates report and issues official Valuation Certificate."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴി അപേക്ഷ സമർപ്പിക്കുക.",
          "ആധാരം, നികുതി രസീതുകൾ, അനുബന്ധ രേഖകൾ നൽകുക.",
          "വില്ലേജ് ഓഫീസർ സ്ഥലം പരിശോധിച്ച് മൂല്യം കണക്കാക്കുന്നു.",
          "തഹസിൽദാർ സർട്ടിഫിക്കറ്റ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Land valuation strictly follows state fair value benchmarks and published road access weightages.",
        ml: "സർക്കാർ നിശ്ചയിച്ചിട്ടുള്ള ന്യായവിലയുടെ അടിസ്ഥാനത്തിലാണ് ഭൂമിയുടെ മൂല്യം കണക്കാക്കുന്നത്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "possession-non-attachment-certificateion-non-attachment-certificateion-non-attachment-certificateion-non-attachment-certificate",
      category: "documents",
      icon: "🛡️",
      name: {
        en: "Possession & Non-Attachment Certificate",
        ml: "കൈവശ-ബാധ്യതാരഹിത സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Combined revenue certification verifying that specified land is in applicant's possession and has no revenue/court recovery attachment orders.",
        ml: "ഭൂമി അപേക്ഷകന്റെ കൈവശത്തിലാണെന്നും റവന്യൂ-കോടതി ജപ്തി നടപടികൾ ഒന്നും നിലവിലില്ലെന്നും വ്യക്തമാക്കുന്ന സർട്ടിഫിക്കറ്റ്."
      },
      whoNeeds: {
        en: "Landowners mortgaging land for substantial bank loans, commercial development, or executing government contract agreements.",
        ml: "വലിയ ബാങ്ക് വായ്പകൾ എടുക്കുന്നതിനും സർക്കാർ കരാറുകളിൽ ഏർപ്പെടുന്നതിനും വസ്തു ജാമ്യം നൽകുന്നവർ."
      },
      eligibility: {
        en: "Titled landowners free from pending revenue recovery (RR) notices, court attachments, or statutory liens.",
        ml: "ജപ്തി നോട്ടീസുകളോ ബാധ്യതകളോ ഇല്ലാത്ത ഭൂമിയുടെ ഉടമസ്ഥർക്ക്."
      },
      documents: {
        en: [
          "Registered Title Deed (Aadhaaram) copy",
          "Current year Land Tax Receipt",
          "Encumbrance Certificate (EC) for past 15 to 30 years from Sub-Registrar Office",
          "Aadhaar Card of landowner"
        ],
        ml: [
          "ആധാരത്തിന്റെ പകർപ്പ്",
          "നടപ്പു വർഷത്തെ ഭൂനികുതി രസീത്",
          "സബ് രജിസ്ട്രാർ ഓഫീസിൽ നിന്നുള്ള ബാധ്യതാ സർട്ടിഫിക്കറ്റ് (EC)",
          "ഭൂവുടമയുടെ ആധാർ കാർഡ്"
        ]
      },
      additionalDocs: {
        en: [
          "Revenue recovery clearance endorsement from Village Officer"
        ],
        ml: [
          "റവന്യൂ റിക്കവറി ബാധ്യതകൾ ഇല്ലെന്ന സാക്ഷ്യപത്രം"
        ]
      },
      whereToApply: {
        en: "Kerala e-District Portal or local Village Office.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ വില്ലേജ് ഓഫീസ് വഴി."
      },
      mode: {
        en: "Online & Village Office Scrutiny",
        ml: "ഓൺലൈൻ & റവന്യൂ പരിശോധന"
      },
      steps: {
        en: [
          "Submit application via e-District Kerala under 'Possession and Non-Attachment'.",
          "Upload title deeds, tax receipts, and Encumbrance Certificate.",
          "Village Officer cross-checks Village Demand Register and Attachment Registers.",
          "Download digitally verified certificate upon sanction."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടലിൽ രേഖകൾ നൽകി അപേക്ഷിക്കുക.",
          "വില്ലേജ് ഓഫീസിലെ ജപ്തി-ബാധ്യതാ രജിസ്റ്ററുകൾ പരിശോധിച്ച് ഉറപ്പുവരുത്തുന്നു.",
          "പരിശോധനയ്ക്ക് ശേഷം ഡിജിറ്റൽ സർട്ടിഫിക്കറ്റ് ലഭ്യമാകും."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Crucial document required by nationalized and scheduled commercial banks prior to disbursing mortgage loans.",
        ml: "ബാങ്കുകളിൽ വസ്തു പണയപ്പെടുത്തി വായ്പ എടുക്കുന്നതിന് ഈ സർട്ടിഫിക്കറ്റ് അത്യാവശ്യമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "land-certificate",
      category: "documents",
      icon: "📜",
      name: {
        en: "Land Certificate",
        ml: "ലാൻഡ് സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Consolidated revenue extract summarizing landholding extent, category, survey numbers, and tenure held by an individual.",
        ml: "ഒരു വ്യക്തിയുടെ ഉടമസ്ഥതയിലുള്ള ഭൂമിയുടെ വിസ്തൃതി, തരം, സർവ്വേ നമ്പർ എന്നിവ സാക്ഷ്യപ്പെടുത്തുന്ന സമഗ്ര റവന്യൂ രേഖ."
      },
      whoNeeds: {
        en: "Landowners verifying total land holdings for land board ceiling clearances, institutional acquisitions, or asset verification.",
        ml: "ഭൂപരിധി പരിശോധനകൾക്ക്, വ്യവസായ പദ്ധതികൾക്ക്, സ്ഥലം ഏറ്റെടുക്കൽ നടപടികൾക്ക്."
      },
      eligibility: {
        en: "Citizens holding registered land property within the village / taluk jurisdiction.",
        ml: "കേരളത്തിൽ നിയമാനുസൃതമായി ഭൂമി സ്വന്തമായുള്ള വ്യക്തികൾക്ക്."
      },
      documents: {
        en: [
          "Title Deeds of all parcels of land owned in the village",
          "Latest Land Tax Receipts for all corresponding Thandaper accounts",
          "Aadhaar Card and address proof of owner"
        ],
        ml: [
          "ഉടമസ്ഥതയിലുള്ള എല്ലാ ഭൂമികളുടെയും ആധാര പകർപ്പുകൾ",
          "എല്ലാ താണ്ഡപ്പേരുകളിലെയും ഏറ്റവും പുതിയ ഭൂനികുതി രസീതുകൾ",
          "ഭൂവുടമയുടെ ആധാർ കാർഡ്"
        ]
      },
      additionalDocs: {
        en: [
          "Pattayam / Land assignment order (if land was granted under Land Reforms Act)"
        ],
        ml: [
          "പട്ടയ ഭൂമിയാണെങ്കിൽ പട്ടയത്തിന്റെ പകർപ്പ്"
        ]
      },
      whereToApply: {
        en: "Kerala e-District Portal or Taluk Tahsildar / Village Office.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ അല്ലെങ്കിൽ താലൂക്ക് / വില്ലേജ് ഓഫീസ്."
      },
      mode: {
        en: "Online & Revenue Register Audit",
        ml: "ഓൺലൈൻ & റവന്യൂ രജിസ്റ്റർ പരിശോധന"
      },
      steps: {
        en: [
          "File application on e-District portal detailing all land parcels in the village.",
          "Upload title deeds and land tax receipts.",
          "Village Officer audits Basic Tax Register (BTR) and prepares landholding abstract.",
          "Tahsildar approves and issues Land Certificate."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടലിൽ വസ്തുവിന്റെ വിവരങ്ങൾ നൽകി അപേക്ഷിക്കുക.",
          "ആധാരവും കരം ഒടുക്കിയ രസീതുകളും സമർപ്പിക്കുക.",
          "വില്ലേജ് റെക്കോർഡുകൾ പരിശോധിച്ച് തഹസിൽദാർ സർട്ടിഫിക്കറ്റ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Provides an authoritative government summary of a citizen's land ownership within a revenue jurisdiction.",
        ml: "ഒരു വില്ലേജിൽ ഒരാൾക്ക് എത്ര ഭൂമിയുണ്ടെന്ന് വ്യക്തമാക്കുന്ന ആധികാരിക രേഖയാണിത്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "inter-caste-marriage-certificate",
      category: "documents",
      icon: "📜",
      name: {
        en: "Inter-Caste Marriage Certificate",
        ml: "മിശ്രവിവാഹ സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Official revenue certificate certifying that a legally married couple belongs to two different castes or communities.",
        ml: "നിയമാനുസൃതമായി വിവാഹിതരായ ദമ്പതികൾ രണ്ട് വ്യത്യസ്ത ജാതിയിലോ സമുദായത്തിലോ ഉള്ളവരാണെന്ന് സാക്ഷ്യപ്പെടുത്തുന്ന റവന്യൂ രേഖ."
      },
      whoNeeds: {
        en: "Couples applying for government financial assistance, employment preference, or fee concessions under social welfare schemes.",
        ml: "സാമൂഹ്യനീതി വകുപ്പിന്റെ സാമ്പത്തിക സഹായങ്ങൾ, വിദ്യാഭ്യാസ ആനുകൂല്യങ്ങൾ, ഫീസ് ഇളവുകൾ എന്നിവ ആവശ്യമുള്ള ദമ്പതികൾക്ക്."
      },
      eligibility: {
        en: "Legally married couple who are permanent residents of Kerala, where the husband and wife belong to different castes or communities.",
        ml: "വ്യത്യസ്ത ജാതികളിലോ സമുദായങ്ങളിലോ ഉൾപ്പെട്ടവരും കേരളത്തിൽ സ്ഥിരതാമസമുള്ളവരുമായ നിയമപരമായി വിവാഹിതരായ ദമ്പതികൾക്ക്."
      },
      documents: {
        en: [
          "Marriage Certificate issued by Local Body / Sub-Registrar / competent authority",
          "SSLC Book / School Certificate of both spouses showing caste/religion",
          "Caste / Community Certificates of both spouses (if school records are ambiguous)",
          "Aadhaar Cards and Ration Card of husband and wife"
        ],
        ml: [
          "തദ്ദേശ സ്ഥാപനമോ സബ് രജിസ്ട്രാറോ നൽകിയ വിവാഹ സർട്ടിഫിക്കറ്റ്",
          "ഭാര്യാഭർത്താക്കന്മാരുടെ ജാതി/മതം രേഖപ്പെടുത്തിയ SSLC ബുക്ക് അല്ലെങ്കിൽ സ്കൂൾ സർട്ടിഫിക്കറ്റ്",
          "ഇരുവർക്കുമുള്ള ജാതി / കമ്മ്യൂണിറ്റി സർട്ടിഫിക്കറ്റുകൾ",
          "ഭാര്യാഭർത്താക്കന്മാരുടെ ആധാർ കാർഡുകളും റേഷൻ കാർഡും"
        ]
      },
      additionalDocs: {
        en: [
          "Joint declaration affidavit signed by both spouses",
          "Wedding invitation letter or religious solemnization receipt"
        ],
        ml: [
          "ദമ്പതികൾ ഒപ്പിട്ട സംയുക്ത സത്യവാങ്മൂലം",
          "വിവാഹ ക്ഷണക്കത്ത് അല്ലെങ്കിൽ വിവാഹം നടന്ന സ്ഥാപനത്തിന്റെ സാക്ഷ്യപത്രം"
        ]
      },
      whereToApply: {
        en: "Online via Kerala e-District portal or through nearest Akshaya Centre / Village Office.",
        ml: "കേരള ഇ-ഡിസ്ട്രിക്റ്റ് (e-District) പോർട്ടൽ വഴി ഓൺലൈനായോ അടുത്തുള്ള അക്ഷയ കേന്ദ്രം / വില്ലേജ് ഓഫീസ് വഴിയോ."
      },
      mode: {
        en: "Online & Village Officer Inquiry",
        ml: "ഓൺലൈൻ & വില്ലേജ് ഓഫീസർ പരിശോധന"
      },
      steps: {
        en: [
          "Log in to the e-District Kerala portal and choose 'Inter-Caste Marriage Certificate'.",
          "Enter applicant details, spouse details, and respective caste/community information.",
          "Upload Marriage Certificate, school certificates proving caste, and identity proofs.",
          "Pay the online processing fee and submit application.",
          "Village Officer conducts inquiry and Tahsildar / Village Officer issues digitally signed certificate.",
          "Download digitally verified certificate from the dashboard."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടലിൽ ലോഗിൻ ചെയ്ത് 'മിശ്രവിവാഹ സർട്ടിഫിക്കറ്റ്' തിരഞ്ഞെടുക്കുക.",
          "ദമ്പതികളുടെ വ്യക്തിഗത വിവരങ്ങളും ജാതി വിവരങ്ങളും രേഖപ്പെടുത്തുക.",
          "വിവാഹ സർട്ടിഫിക്കറ്റ്, സ്കൂൾ രേഖകൾ, തിരിച്ചറിയൽ രേഖകൾ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക.",
          "നിശ്ചിത ഫീസ് അടച്ച് അപേക്ഷ സമർപ്പിക്കുക.",
          "വില്ലേജ് ഓഫീസറുടെ അന്വേഷണത്തിന് ശേഷം ഡിജിറ്റൽ ഒപ്പോടു കൂടിയ സർട്ടിഫിക്കറ്റ് ലഭ്യമാകും."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Crucial prerequisite for applying for the Department of Social Justice financial grant for inter-caste married couples.",
        ml: "സാമൂഹ്യനീതി വകുപ്പിന്റെ മിശ്രവിവാഹിതർക്കുള്ള ധനസഹായത്തിന് അപേക്ഷിക്കുന്നതിന് ഈ സർട്ടിഫിക്കറ്റ് അനിവാര്യമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "conversion-certificate",
      category: "documents",
      icon: "📜",
      name: {
        en: "Conversion Certificate",
        ml: "മതപരിവർത്തന സർട്ടിഫിക്കറ്റ്"
      },
      summary: {
        en: "Official revenue certificate certifying that an individual has lawfully converted from one religion to another.",
        ml: "ഒരു വ്യക്തി നിയമപരമായി ഒരു മതത്തിൽ നിന്നും മറ്റൊരു മതത്തിലേക്ക് പരിവർത്തനം ചെയ്തതായി സാക്ഷ്യപ്പെടുത്തുന്ന റവന്യൂ രേഖ."
      },
      whoNeeds: {
        en: "Individuals needing official confirmation of religious conversion for updating educational records, service books, or gazette updates.",
        ml: "സ്കൂൾ രേഖകൾ, സർവീസ് രേഖകൾ, ഔദ്യോഗിക ഗസറ്റ് വിജ്ഞാപനം എന്നിവയിൽ മതം മാറ്റം രേഖപ്പെടുത്താൻ ആവശ്യമുള്ളവർ."
      },
      eligibility: {
        en: "Any resident of Kerala who has converted to another religion and undergone lawful conversion procedures.",
        ml: "നിയമപരമായ നടപടിക്രമങ്ങൾ പാലിച്ച് മതപരിവർത്തനം നടത്തിയ കേരളത്തിലെ ഏതൊരു സ്ഥിരതാമസക്കാരനും."
      },
      documents: {
        en: [
          "Kerala Government Gazette publication extract regarding change of religion and name",
          "Certificate issued by recognized religious institution / authority where conversion was solemnized",
          "Applicant's School Certificate (SSLC) / Birth Certificate showing previous religion",
          "Aadhaar Card and Ration Card of applicant"
        ],
        ml: [
          "മതമാറ്റവും പേരുമാറ്റവും വിജ്ഞാപനം ചെയ്ത കേരള സർക്കാർ ഗസറ്റ് പകർപ്പ്",
          "മതപരിവർത്തനം നടത്തിയ അംഗീകൃത മതസ്ഥാപനം നൽകിയ സാക്ഷ്യപത്രം",
          "മുൻ മതം വ്യക്തമാക്കുന്ന എസ്.എസ്.എൽ.സി ബുക്ക് അല്ലെങ്കിൽ ജനന സർട്ടിഫിക്കറ്റ്",
          "അപേക്ഷകന്റെ ആധാർ കാർഡും റേഷൻ കാർഡും"
        ]
      },
      additionalDocs: {
        en: [
          "Notarized affidavit on stamped paper declaring voluntary conversion without coercion"
        ],
        ml: [
          "ആരുടെയും നിർബന്ധത്തിന് വഴങ്ങാതെ സ്വമേധയാ മതപരിവർത്തനം നടത്തിയെന്ന സത്യവാങ്മൂലം"
        ]
      },
      whereToApply: {
        en: "Online through Kerala e-District portal or nearest Akshaya Centre / Taluk Office.",
        ml: "കേരള ഇ-ഡിസ്ട്രിക്റ്റ് (e-District) പോർട്ടൽ വഴി അല്ലെങ്കിൽ അക്ഷയ കേന്ദ്രം / താലൂക്ക് ഓഫീസ് വഴി."
      },
      mode: {
        en: "Online & Revenue Hearing",
        ml: "ഓൺലൈൻ & റവന്യൂ പരിശോധന"
      },
      steps: {
        en: [
          "Log in to the e-District Kerala portal and choose 'Conversion Certificate'.",
          "Fill applicant details, previous religion, new religion, and conversion particulars.",
          "Upload gazette notification, religious institution certificate, and identity proofs.",
          "Pay government processing charges and submit.",
          "Village Officer / Tahsildar conducts inquiry and issues digitally signed certificate."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴി 'മതപരിവർത്തന സർട്ടിഫിക്കറ്റ്' തിരഞ്ഞെടുത്ത് അപേക്ഷിക്കുക.",
          "മുൻ മതവും പുതിയ മതവും സംബന്ധിച്ച വിവരങ്ങൾ രേഖപ്പെടുത്തുക.",
          "ഗസറ്റ് വിജ്ഞാപനം, മതസ്ഥാപനത്തിന്റെ സർട്ടിഫിക്കറ്റ്, ആധാർ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക.",
          "റവന്യൂ അന്വേഷണത്തിന് ശേഷം തഹസിൽദാർ ഡിജിറ്റൽ സർട്ടിഫിക്കറ്റ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Gazette notification of religious conversion is generally required before applying for this certificate.",
        ml: "ഈ സർട്ടിഫിക്കറ്റിന് അപേക്ഷിക്കുന്നതിന് മുൻപായി ഗസറ്റ് വിജ്ഞാപനം പൂർത്തിയാക്കിയിരിക്കണം."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "certificate-verification",
      category: "documents",
      icon: "🔍",
      name: {
        en: "Certificate Verification",
        ml: "സർട്ടിഫിക്കറ്റ് പരിശോധന"
      },
      summary: {
        en: "Public online tool to authenticate and verify the validity of any digitally signed certificate issued through e-District Kerala.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് കേരള വഴി വിതരണം ചെയ്ത ഡിജിറ്റൽ സർട്ടിഫിക്കറ്റുകളുടെ ആധികാരികത ഓൺലൈനായി പരിശോധിക്കാനുള്ള സംവിധാനം."
      },
      whoNeeds: {
        en: "Employers, academic institutions, banks, government departments, and citizens verifying certificate authenticity.",
        ml: "തൊഴിൽദാതാക്കൾ, വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ, ബാങ്കുകൾ, സർട്ടിഫിക്കറ്റിന്റെ കൃത്യത ഉറപ്പുവരുത്താൻ ആഗ്രഹിക്കുന്ന പൊതുജനങ്ങൾ."
      },
      eligibility: {
        en: "Open to any citizen or authority possessing an e-District Certificate Number and security code.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് സർട്ടിഫിക്കറ്റ് നമ്പറും സെക്യൂരിറ്റി കോഡും കൈവശമുള്ള ഏതൊരു വ്യക്തിക്കും സ്ഥാപനത്തിനും."
      },
      documents: {
        en: [
          "No document upload required",
          "Certificate Number printed on the issued e-District certificate",
          "Security Code / CAPTCHA displayed on screen"
        ],
        ml: [
          "പ്രത്യേക രേഖകളൊന്നും അപ്‌ലോഡ് ചെയ്യേണ്ടതില്ല",
          "ഇഷ്യൂ ചെയ്ത സർട്ടിഫിക്കറ്റിൽ രേഖപ്പെടുത്തിയിട്ടുള്ള സർട്ടിഫിക്കറ്റ് നമ്പർ",
          "സ്ക്രീനിൽ കാണുന്ന സെക്യൂരിറ്റി കോഡ് (ക്യാപ്‌ച)"
        ]
      },
      additionalDocs: {
        en: [],
        ml: []
      },
      whereToApply: {
        en: "e-District Kerala Public Verification Portal (edistrict.kerala.gov.in/qrVerify.do).",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് സർട്ടിഫിക്കറ്റ് വെരിഫിക്കേഷൻ പോർട്ടൽ (edistrict.kerala.gov.in/qrVerify.do)."
      },
      mode: {
        en: "100% Online (No Login Required)",
        ml: "പൂർണ്ണമായും ഓൺലൈൻ (ലോഗിൻ ആവശ്യമില്ല)"
      },
      steps: {
        en: [
          "Visit the official e-District Kerala Certificate Verification page.",
          "Select the service name corresponding to the certificate.",
          "Enter the unique Certificate Number printed on the document.",
          "Enter the displayed security CAPTCHA code.",
          "Click 'Submit' to view and cross-verify the issued certificate details and digital signature."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് വെരിഫിക്കേഷൻ വെബ് പേജ് (qrVerify.do) സന്ദർശിക്കുക.",
          "സർട്ടിഫിക്കറ്റിന്റെ വിഭാഗം തിരഞ്ഞെടുക്കുക.",
          "സർട്ടിഫിക്കറ്റിൽ നൽകിയിട്ടുള്ള നമ്പർ രേഖപ്പെടുത്തുക.",
          "സ്ക്രീനിൽ കാണുന്ന ക്യാപ്‌ച കോഡ് നൽകുക.",
          "വിവരങ്ങൾ പരിശോധിച്ച് സർട്ടിഫിക്കറ്റിന്റെ കൃത്യത ഉറപ്പുവരുത്തുക."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in/qrVerify.do",
      notes: {
        en: "Completely free online service. You can also scan the QR code printed directly on the certificate using a smartphone.",
        ml: "ഈ സേവനം തികച്ചും സൗജന്യമാണ്. സർട്ടിഫിക്കറ്റിലുള്ള ക്യു.ആർ (QR) കോഡ് സ്കാൻ ചെയ്തും ഇത് പരിശോധിക്കാം."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "edistrict-application-status",
      category: "documents",
      icon: "📊",
      name: {
        en: "e-District Application Status Tracking",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് അപേക്ഷാ സ്ഥിതി അറിയൽ"
      },
      summary: {
        en: "Real-time online tracking system to check the current processing stage of certificate and revenue applications on e-District.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് വഴി സമർപ്പിച്ച സർട്ടിഫിക്കറ്റ് അപേക്ഷകളുടെ നിലവിലെ പുരോഗതിയും അവസ്ഥയും അറിയാനുള്ള ഓൺലൈൻ സംവിധാനം."
      },
      whoNeeds: {
        en: "Applicants who have submitted applications for certificates, revenue services, or welfare grants via e-District or Akshaya.",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴിയോ അക്ഷയ വഴിയോ സർട്ടിഫിക്കറ്റുകൾക്ക് അപേക്ഷ സമർപ്പിച്ച ശേഷം അതിന്റെ സ്ഥിതി അറിയാൻ ആഗ്രഹിക്കുന്നവർ."
      },
      eligibility: {
        en: "Any applicant holding a valid e-District Application Number / Token Number.",
        ml: "സാധുവായ ഇ-ഡിസ്ട്രിക്റ്റ് അപേക്ഷാ നമ്പർ (Application Number) കൈവശമുള്ള ഏതൊരു അപേക്ഷകനും."
      },
      documents: {
        en: [
          "No document upload required",
          "e-District Application Number / Reference Number from receipt"
        ],
        ml: [
          "രേഖകളൊന്നും അപ്‌ലോഡ് ചെയ്യേണ്ടതില്ല",
          "അക്നോളജ്മെന്റ് രസീതിലുള്ള അപേക്ഷാ നമ്പർ (Application Number)"
        ]
      },
      additionalDocs: {
        en: [],
        ml: []
      },
      whereToApply: {
        en: "e-District Kerala Open Tracking Portal (edistrict.kerala.gov.in/openSearch.do).",
        ml: "ഇ-ഡിസ്ട്രിക്റ്റ് ഓപ്പൺ ട്രാക്കിംഗ് പോർട്ടൽ (edistrict.kerala.gov.in/openSearch.do)."
      },
      mode: {
        en: "100% Online (No Login Required)",
        ml: "പൂർണ്ണമായും ഓൺലൈൻ (ലോഗിൻ ആവശ്യമില്ല)"
      },
      steps: {
        en: [
          "Open the e-District Kerala application status tracking page.",
          "Select the applied service category from the dropdown menu.",
          "Enter your Application Number.",
          "Submit query to view current application processing stage (Village Officer, Revenue Inspector, Tahsildar).",
          "Download approval status or reason for objection/clarification if any."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് സ്റ്റാറ്റസ് ട്രാക്കിംഗ് പേജ് (openSearch.do) തുറക്കുക.",
          "അപേക്ഷിച്ച സർവീസ് വിഭാഗം തിരഞ്ഞെടുക്കുക.",
          "അപേക്ഷാ നമ്പർ രേഖപ്പെടുത്തുക.",
          "അപേക്ഷ ഏത് ഉദ്യോഗസ്ഥന്റെ പരിഗണനയിലാണ് എന്ന് തത്സമയം അറിയുക."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in/openSearch.do",
      notes: {
        en: "Status tracking is completely free of cost. If an objection is raised, check the remarks and upload required documents promptly.",
        ml: "സ്റ്റാറ്റസ് പരിശോധന സൗജന്യമാണ്. അപേക്ഷയിൽ എന്തെങ്കിലും ന്യൂനതകൾ രേഖപ്പെടുത്തിയിട്ടുണ്ടെങ്കിൽ പോർട്ടൽ വഴി തിരുത്താം."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "non-availability-certificate",
      category: "documents",
      icon: "📜",
      name: {
        en: "Non-Availability Certificate (NAC)",
        ml: "ലഭ്യമല്ലെന്ന സർട്ടിഫിക്കറ്റ് (NAC)"
      },
      summary: {
        en: "Statutory certificate issued under Section 17 of Registration of Births and Deaths Act certifying that a birth/death record is not found.",
        ml: "ജനന-മരണ രജിസ്ട്രേഷൻ നിയമം സെക്ഷൻ 17 പ്രകാരം ജനനമോ മരണമോ രജിസ്റ്റർ ചെയ്തിട്ടില്ലെന്ന് തദ്ദേശ സ്ഥാപനം നൽകുന്ന സാക്ഷ്യപത്രം."
      },
      whoNeeds: {
        en: "Individuals whose birth or relative's death was not registered at the time of occurrence, seeking delayed registration or foreign visa clearance.",
        ml: "ജനനമോ മരണമോ സമയത്ത് രജിസ്റ്റർ ചെയ്യാതിരുന്നവർക്കും, ആർ.ഡി.ഒ അനുമതിയോടെ വൈകി രജിസ്റ്റർ ചെയ്യാൻ ആഗ്രഹിക്കുന്നവർക്കും."
      },
      eligibility: {
        en: "Any citizen whose birth or death of family member occurred within the jurisdiction of the local body but was not registered in the register.",
        ml: "നിശ്ചിത തദ്ദേശ സ്ഥാപന പരിധിയിൽ ജനനമോ മരണമോ സംഭവിക്കുകയും എന്നാൽ ഔദ്യോഗിക രജിസ്റ്ററിൽ രേഖപ്പെടുത്താതിരിക്കുകയും ചെയ്ത വ്യക്തികൾക്ക്."
      },
      documents: {
        en: [
          "Hospital Discharge Card / Doctor certificate proving occurrence of birth/death (if available)",
          "School Certificate (SSLC) / Transfer Certificate showing date and place of birth",
          "Aadhaar Card and Ration Card of applicant",
          "Affidavit stating details of the event and declaring non-registration"
        ],
        ml: [
          "ജനനമോ മരണമോ സംഭവിച്ച സ്ഥലം വ്യക്തമാക്കുന്ന ആശുപത്രി രേഖകൾ (ഉണ്ടെങ്കിൽ)",
          "ജനന തീയതിയും സ്ഥലവും രേഖപ്പെടുത്തിയ SSLC ബുക്ക് അല്ലെങ്കിൽ സ്കൂൾ സർട്ടിഫിക്കറ്റ്",
          "അപേക്ഷകന്റെ ആധാർ കാർഡും റേഷൻ കാർഡും",
          "ഇതുവരെ രജിസ്റ്റർ ചെയ്തിട്ടില്ലെന്ന് വ്യക്തമാക്കുന്ന സത്യവാങ്മൂലം"
        ]
      },
      additionalDocs: {
        en: [
          "Search fee receipt paid to the Local Registrar office"
        ],
        ml: [
          "രജിസ്റ്റർ പരിശോധനയ്ക്കായി തദ്ദേശ സ്ഥാപനത്തിൽ അടച്ച ഫീസ് രസീത്"
        ]
      },
      whereToApply: {
        en: "K-SMART portal (for Municipalities and Corporations) or Grama Panchayat Civil Registration counter.",
        ml: "കെ-സ്മാർട്ട് (K-SMART) പോർട്ടൽ അല്ലെങ്കിൽ ഗ്രാമപഞ്ചായത്ത് സിവിൽ രജിസ്ട്രേഷൻ വിഭാഗം."
      },
      mode: {
        en: "Online (K-SMART) & Local Body Office",
        ml: "ഓൺലൈൻ & തദ്ദേശ സ്വയംഭരണ ഓഫീസ്"
      },
      steps: {
        en: [
          "Apply on K-SMART portal or visit the local body where the event occurred.",
          "Request register search for the specified year and particulars of the individual.",
          "Local Registrar verifies physical and digitized birth/death registers.",
          "Registrar confirms absence of entry and issues Non-Availability Certificate (Form 10).",
          "Use the certificate to petition the Revenue Divisional Officer (RDO) for delayed registration sanction."
        ],
        ml: [
          "കെ-സ്മാർട്ട് പോർട്ടൽ വഴിയോ തദ്ദേശ സ്ഥാപനത്തിലോ അപേക്ഷ സമർപ്പിക്കുക.",
          "ജനനമോ മരണമോ നടന്ന വർഷത്തെ രജിസ്റ്ററുകൾ പരിശോധിക്കാൻ അപേക്ഷ നൽകുക.",
          "രജിസ്റ്ററിൽ രേഖപ്പെടുത്തിയിട്ടില്ലെന്ന് ഉറപ്പുവരുത്തി രജിസ്ട്രാർ ലഭ്യമല്ലെന്ന സാക്ഷ്യപത്രം (Form 10) നൽകുന്നു.",
          "ഈ സർട്ടിഫിക്കറ്റ് ഉപയോഗിച്ച് വൈകിയുള്ള രജിസ്ട്രേഷനായി ആർ.ഡി.ഒ (RDO) ക്ക് അപേക്ഷിക്കാം."
        ]
      },
      officialUrl: "https://ksmart.lsgkerala.gov.in",
      notes: {
        en: "Mandatory prerequisite for obtaining a Revenue Divisional Officer (RDO) order for delayed birth or death registration beyond one year.",
        ml: "ഒരു വർഷത്തിലധികം വൈകിയ ജനന-മരണങ്ങൾ ആർ.ഡി.ഒ ഉത്തരവിലൂടെ രജിസ്റ്റർ ചെയ്യുന്നതിന് ഈ സർട്ടിഫിക്കറ്റ് നിർബന്ധമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "encumbrance-certificate",
      category: "documents",
      icon: "📜",
      name: {
        en: "Encumbrance Certificate (EC)",
        ml: "ബാധ്യതാ സർട്ടിഫിക്കറ്റ് (EC)"
      },
      summary: {
        en: "Official record issued by the Registration Department detailing all registered transactions, mortgages, and legal claims on a property.",
        ml: "ഒരു വസ്തുവിന്മേൽ നടന്നിട്ടുള്ള എല്ലാ രജിസ്ട്രേഷൻ ഇടപാടുകളും ബാധ്യതകളും വ്യക്തമാക്കി രജിസ്ട്രേഷൻ വകുപ്പ് നൽകുന്ന രേഖ."
      },
      whoNeeds: {
        en: "Property buyers, landowners applying for bank housing loans, mortgaging land, or verifying chain of title ownership.",
        ml: "വസ്തു വാങ്ങുന്നവർ, ബാങ്ക് വായ്പകൾക്ക് വസ്തു പണയപ്പെടുത്തുന്നവർ, ഉടമസ്ഥാവകാശത്തിന്റെ വ്യക്തത പരിശോധിക്കുന്നവർ."
      },
      eligibility: {
        en: "Any citizen seeking to inspect the registered transaction history of an immovable property in Kerala.",
        ml: "കേരളത്തിലുള്ള ഏതൊരു വസ്തുവിന്റെയും ഇടപാട് വിവരങ്ങൾ പരിശോധിക്കാൻ ആഗ്രഹിക്കുന്ന ഏതൊരു വ്യക്തിക്കും."
      },
      documents: {
        en: [
          "Title Deed / Prior Deed Number, Year, and Sub-Registrar Office (SRO) name",
          "Property Survey Number, Re-survey Number, and Sub-division Number",
          "Village, Taluk, and District where property is situated",
          "Four boundary descriptions of the property and search period (from and to years)"
        ],
        ml: [
          "ആധാര നമ്പർ, രജിസ്റ്റർ ചെയ്ത വർഷം, സബ് രജിസ്ട്രാർ ഓഫീസ് (SRO)",
          "സർവ്വേ നമ്പർ, റീ-സർവ്വേ നമ്പർ, സബ് ഡിവിഷൻ",
          "വസ്തു സ്ഥിതി ചെയ്യുന്ന വില്ലേജ്, താലൂക്ക്, ജില്ല",
          "വസ്തുവിന്റെ നാലതിരുകളും പരിശോധിക്കേണ്ട കാലയളവും"
        ]
      },
      additionalDocs: {
        en: [],
        ml: []
      },
      whereToApply: {
        en: "Kerala Registration Department PEARL Portal (keralaregistration.gov.in) or concerned Sub-Registrar Office.",
        ml: "രജിസ്ട്രേഷൻ വകുപ്പിന്റെ PEARL പോർട്ടൽ (keralaregistration.gov.in) അല്ലെങ്കിൽ സബ് രജിസ്ട്രാർ ഓഫീസ്."
      },
      mode: {
        en: "100% Online & SRO Counter",
        ml: "പൂർണ്ണമായും ഓൺലൈൻ & സബ് രജിസ്ട്രാർ ഓഫീസ്"
      },
      steps: {
        en: [
          "Log in to the official Kerala Registration Department portal (keralaregistration.gov.in).",
          "Select 'Submit Application for EC' under citizen online applications.",
          "Enter district, Sub-Registrar Office, property survey details, and boundary descriptions.",
          "Select search period (e.g., past 15 to 30 years).",
          "Pay search fee online using e-payment.",
          "Download digitally signed Encumbrance Certificate with QR code verification upon approval."
        ],
        ml: [
          "കേരള രജിസ്ട്രേഷൻ വകുപ്പിന്റെ ഔദ്യോഗിക പോർട്ടൽ (keralaregistration.gov.in) സന്ദർശിക്കുക.",
          "'Submit Application for EC' തിരഞ്ഞെടുക്കുക.",
          "സബ് രജിസ്ട്രാർ ഓഫീസ്, സർവ്വേ നമ്പർ, വസ്തുവിന്റെ അതിരുകൾ എന്നിവ നൽകുക.",
          "പരിശോധിക്കേണ്ട വർഷങ്ങൾ രേഖപ്പെടുത്തുക (ഉദാ: കഴിഞ്ഞ 15-30 വർഷം).",
          "ഓൺലൈനായി ഫീസ് അടയ്ക്കുക.",
          "പരിശോധന പൂർത്തിയായ ശേഷം ഡിജിറ്റൽ ഒപ്പോടു കൂടിയ സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://keralaregistration.gov.in",
      notes: {
        en: "A 'Nil Encumbrance Certificate' indicates that no registered transactions or registered liabilities exist for the specified search period.",
        ml: "നിശ്ചിത കാലയളവിൽ വസ്തുവിന്മേൽ ബാധ്യതകളോ രജിസ്റ്റർ ചെയ്ത കൈമാറ്റങ്ങളോ ഇല്ലെങ്കിൽ 'Nil Encumbrance' സർട്ടിഫിക്കറ്റാണ് ലഭിക്കുക."
      },
      lastVerified: "September 2026",
      verified: true
    }
  ];

  if (window.SevaRegistry && typeof window.SevaRegistry.register === "function") {
    window.SevaRegistry.register(data);
  } else {
    console.error("SevaRegistry not found when loading cat-documents.js");
  }
})();

