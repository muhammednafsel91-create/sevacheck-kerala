// ==========================================
// SEVACHECK KERALA — DATA MODULE
// Category: Government & Local (31 Services)
// File: data/cat-government.js
// ==========================================

(function () {
  const data = [
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
    {
      id: "kwa-new-water-connection",
      category: "government",
      icon: "🚰",
      name: {
        en: "KWA New Water Connection",
        ml: "കേരള വാട്ടർ അതോറിറ്റി പുതിയ കുടിവെള്ള കണക്ഷൻ"
      },
      summary: {
        en: "Application for fresh domestic, non-domestic, or commercial piped drinking water connection from Kerala Water Authority.",
        ml: "വീടുകൾക്കും സ്ഥാപനങ്ങൾക്കും പുതിയ പൈപ്പ് ലൈൻ കുടിവെള്ള കണക്ഷൻ ലഭിക്കുന്നതിനുള്ള വാട്ടർ അതോറിറ്റി സേവനം."
      },
      whoNeeds: {
        en: "Property owners or residents constructing new homes or needing municipal piped drinking water supply.",
        ml: "പുതിയ വീട് വെച്ചവർ, വാട്ടർ അതോറിറ്റിയുടെ പൈപ്പ് വെള്ളം ആവശ്യമുള്ള കെട്ടിട ഉടമകൾ."
      },
      eligibility: {
        en: "Owners or legal occupants of residential or commercial buildings located within serviceable reach of KWA water distribution mains.",
        ml: "വാട്ടർ അതോറിറ്റിയുടെ പൈപ്പ് ലൈൻ ഉള്ള പ്രദേശങ്ങളിൽ സ്ഥിതി ചെയ്യുന്ന കെട്ടിടങ്ങളുടെ ഉടമകൾക്ക്."
      },
      documents: {
        en: [
          "Proof of Ownership (Latest Local Body Building Tax receipt or Title Deed)",
          "Aadhaar Card or recognized photo identity proof of applicant",
          "Plumbing sketch / plan prepared by licensed KWA empaneled plumber",
          "Passport-size photograph"
        ],
        ml: [
          "ഉടമസ്ഥാവകാശ രേഖ (കെട്ടിട നികുതി രസീത് അല്ലെങ്കിൽ ആധാരം)",
          "അപേക്ഷകന്റെ ആധാർ കാർഡ്",
          "അംഗീകൃത പ്ലംബർ തയ്യാറാക്കിയ പ്ലംബിംഗ് സ്കെച്ച്",
          "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോ"
        ]
      },
      additionalDocs: {
        en: [
          "Road cutting sanction from PWD, KSTP, or Local Body if pipe crosses public road",
          "Consent letter from landowner if pipe traverses private property"
        ],
        ml: [
          "പൊതുവഴി വെട്ടിപ്പൊളിക്കേണ്ടി വന്നാൽ റോഡ് കട്ടിംഗ് അനുമതി",
          "മറ്റുള്ളവരുടെ സ്ഥലത്തുകൂടി പൈപ്പ് ഇടണമെങ്കിൽ വഴിസമ്മതപത്രം"
        ]
      },
      whereToApply: {
        en: "Online via KWA e-Tap portal (kwa.kerala.gov.in) or nearest KWA Section Office.",
        ml: "വാട്ടർ അതോറിറ്റി ഇ-ടാപ്പ് പോർട്ടൽ (kwa.kerala.gov.in) അല്ലെങ്കിൽ സെക്ഷൻ ഓഫീസ് വഴി."
      },
      mode: {
        en: "Online Application & Field Site Inspection",
        ml: "ഓൺലൈൻ അപേക്ഷ & നേരിട്ടുള്ള പരിശോധന"
      },
      steps: {
        en: [
          "Register on KWA e-Tap portal and select 'Apply for New Connection'.",
          "Enter building details, choose empaneled licensed plumber, and upload ownership documents.",
          "Assistant Engineer inspects premises and generates online estimate for connection and road restoration fees.",
          "Pay connection charges online; meter installation and pipeline connection are completed by KWA."
        ],
        ml: [
          "ഇ-ടാപ്പ് (e-Tap) പോർട്ടലിൽ ലോഗിൻ ചെയ്ത് പുതിയ കണക്ഷനായി അപേക്ഷിക്കുക.",
          "കെട്ടിട രേഖകളും പ്ലംബിംഗ് വിവരങ്ങളും അപ്‌ലോഡ് ചെയ്യുക.",
          "ഉദ്യോഗസ്ഥർ സ്ഥലം സന്ദർശിച്ച് എസ്റ്റിമേറ്റ് തയ്യാറാക്കുന്നു.",
          "ഫീസ് ഓൺലൈനായി അടച്ച ശേഷം പൈപ്പ് ലൈൻ ബന്ധിപ്പിച്ച് മീറ്റർ സ്ഥാപിക്കുന്നു."
        ]
      },
      officialUrl: "https://kwa.kerala.gov.in",
      notes: {
        en: "Only purchase water meters with standard certification approved by KWA testing laboratories.",
        ml: "വാട്ടർ അതോറിറ്റി അംഗീകരിച്ചിട്ടുള്ള വാട്ടർ മീറ്ററുകൾ മാത്രമേ വാങ്ങാവൂ."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "kwa-water-bill-payment",
      category: "government",
      icon: "💧",
      name: {
        en: "KWA Water Bill Payment & Quick Pay",
        ml: "വാട്ടർ അതോറിറ്റി ബിൽ അടയ്ക്കൽ (Quick Pay)"
      },
      summary: {
        en: "Online inquiry and settlement of bi-monthly water utility bills issued by Kerala Water Authority.",
        ml: "കുടിവെള്ള ബിൽ തുക പരിശോധിക്കാനും ഓൺലൈനായി തുക ഒടുക്കാനുമുള്ള ഇ-പേയ്മെന്റ് സംവിധാനം."
      },
      whoNeeds: {
        en: "All active domestic and commercial consumers connected to Kerala Water Authority piped supply.",
        ml: "വാട്ടർ അതോറിറ്റി കണക്ഷനുള്ള എല്ലാ ഉപഭോക്താക്കൾക്കും."
      },
      eligibility: {
        en: "Registered KWA consumers holding a valid Consumer ID and Consumer Number.",
        ml: "കൺസ്യൂമർ ഐഡിയുള്ള എല്ലാ വാട്ടർ അതോറിറ്റി ഉപഭോക്താക്കൾക്കും."
      },
      documents: {
        en: [
          "KWA Consumer ID and Consumer Number (found on printed water bill or meter card)",
          "Registered Mobile Number",
          "Online payment mode (UPI, Net Banking, Debit/Credit Card)"
        ],
        ml: [
          "വാട്ടർ അതോറിറ്റി കൺസ്യൂമർ ഐഡിയും കൺസ്യൂമർ നമ്പറും",
          "രജിസ്റ്റർ ചെയ്ത മൊബൈൽ നമ്പർ",
          "ഓൺലൈൻ പേയ്മെന്റ് മാർഗ്ഗം (UPI, കാർഡ്, നെറ്റ് ബാങ്കിംഗ്)"
        ]
      },
      additionalDocs: {
        en: [
          "Previous payment receipt (in case of billing reconciliation disputes)"
        ],
        ml: [
          "മുൻപ് പണം അടച്ച രസീത് (തർക്കങ്ങൾ ഉണ്ടെങ്കിൽ)"
        ]
      },
      whereToApply: {
        en: "KWA Quick Pay portal (epay.kwa.kerala.gov.in) or mobile payment apps.",
        ml: "വാട്ടർ അതോറിറ്റി ക്വിക്ക് പേ പോർട്ടൽ (epay.kwa.kerala.gov.in) അല്ലെങ്കിൽ യു.പി.ഐ ആപ്പുകൾ."
      },
      mode: {
        en: "100% Online & Section Cash Counters",
        ml: "പൂർണ്ണമായും ഓൺലൈൻ & സെക്ഷൻ കൗണ്ടറുകൾ"
      },
      steps: {
        en: [
          "Visit epay.kwa.kerala.gov.in Quick Pay portal.",
          "Enter Consumer ID and mobile number to retrieve current demand.",
          "Verify billing period, meter reading, and net payable amount.",
          "Complete payment through payment gateway and download digital transaction receipt."
        ],
        ml: [
          "ക്വിക്ക് പേ പോർട്ടൽ സന്ദർശിച്ച് കൺസ്യൂമർ ഐഡി നൽകുക.",
          "ബിൽ തുകയും റീഡിംഗും പരിശോധിച്ച് 'Proceed to Pay' നൽകുക.",
          "യു.പി.ഐ വഴിയോ കാർഡ് വഴിയോ പണം അടയ്ക്കുക.",
          "രസീത് ഡൗൺലോഡ് ചെയ്ത് സൂക്ഷിക്കുക."
        ]
      },
      officialUrl: "https://epay.kwa.kerala.gov.in",
      notes: {
        en: "Pay before the due date to avoid disconnection notices and late surcharge penalties.",
        ml: "കണക്ഷൻ വിച്ഛേദിക്കാതിരിക്കാൻ നിശ്ചിത തീയതിക്ക് മുൻപ് ബിൽ തുക അടയ്ക്കുക."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "kwa-complaint",
      category: "government",
      icon: "🔧",
      name: {
        en: "KWA Complaint Redressal",
        ml: "വാട്ടർ അതോറിറ്റി പരാതി പരിഹാരം"
      },
      summary: {
        en: "Portal and helpline to register complaints regarding pipe bursts, water supply interruption, contaminated water, or faulty meters.",
        ml: "പൈപ്പ് പൊട്ടൽ, കുടിവെള്ള തടസ്സം, മലിനജലം, മീറ്റർ തകരാറുകൾ എന്നിവ പരിഹരിക്കാനുള്ള പരാതി സംവിധാനം."
      },
      whoNeeds: {
        en: "Citizens observing public pipe leaks, water disruption, low pressure, or excessive meter billing errors.",
        ml: "കുടിവെള്ള വിതരണം മുടങ്ങുകയോ പൈപ്പ് ലൈൻ പൊട്ടുകയോ ചെയ്തതായി ശ്രദ്ധയിൽപ്പെടുന്ന പൊതുജനങ്ങൾ."
      },
      eligibility: {
        en: "Any citizen or water consumer in Kerala.",
        ml: "കേരളത്തിലെ ഏതൊരു പൗരനും."
      },
      documents: {
        en: [
          "Consumer ID (for individual household billing/supply complaints)",
          "Exact location / landmark of pipeline leakage or breakdown",
          "Contact mobile number"
        ],
        ml: [
          "കൺസ്യൂമർ ഐഡി (വ്യക്തിഗത കണക്ഷൻ പരാതികൾക്ക്)",
          "പൈപ്പ് പൊട്ടിയ കൃത്യമായ സ്ഥലം / അടയാളം",
          "ബന്ധപ്പെടാനുള്ള മൊബൈൽ നമ്പർ"
        ]
      },
      additionalDocs: {
        en: [
          "Photographs of water leakage or discolored water supply (optional but helpful)"
        ],
        ml: [
          "പൈപ്പ് പൊട്ടിയതിന്റെയോ മലിനജലത്തിന്റെയോ ഫോട്ടോ (ബാധകമെങ്കിൽ)"
        ]
      },
      whereToApply: {
        en: "KWA Toll-Free Helpline 1916, WhatsApp 9495998258, or online via KWA Citizen Complaint portal.",
        ml: "ടോൾ ഫ്രീ നമ്പർ 1916, വാട്സാപ്പ് (9495998258) അല്ലെങ്കിൽ വാട്ടർ അതോറിറ്റി വെബ്സൈറ്റ് വഴി."
      },
      mode: {
        en: "Call (1916), WhatsApp & Online Portal",
        ml: "ഫോൺ കാൾ (1916), വാട്സാപ്പ് & ഓൺലൈൻ"
      },
      steps: {
        en: [
          "Dial toll-free 1916 or message the official KWA WhatsApp grievance desk.",
          "State the nature of the problem, locality, and consumer ID if applicable.",
          "Receive automated grievance docket number via SMS.",
          "KWA maintenance squad rectifies leak or supply issue and updates resolution."
        ],
        ml: [
          "1916 എന്ന നമ്പറിലേക്ക് വിളിക്കുകയോ വാട്സാപ്പ് വഴിയോ പരാതി നൽകുക.",
          "സ്ഥലവും പ്രശ്നത്തിന്റെ സ്വഭാവവും വ്യക്തമാക്കുക.",
          "പരാതി രജിസ്റ്റർ ചെയ്ത എസ്.എം.എസ് ലഭിക്കുകയും ഉദ്യോഗസ്ഥർ പ്രശ്നം പരിഹരിക്കുകയും ചെയ്യും."
        ]
      },
      officialUrl: "https://kwa.kerala.gov.in",
      notes: {
        en: "Public pipeline leakages can be reported by any citizen even without possessing a water connection.",
        ml: "വഴിയരികിലെ പൈപ്പ് പൊട്ടൽ ആർക്കും ടോൾ ഫ്രീ നമ്പറിൽ വിളിച്ച് അറിയിക്കാവുന്നതാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "kwa-water-quality-testing",
      category: "government",
      icon: "🧪",
      name: {
        en: "KWA Water Quality Testing",
        ml: "കുടിവെള്ള ഗുണനിലവാര പരിശോധന (വാട്ടർ അതോറിറ്റി)"
      },
      summary: {
        en: "Scientific laboratory analysis of well water and private water sources conducted by accredited KWA Quality Control District Labs.",
        ml: "കിണർ വെള്ളവും മറ്റ് സ്രോതസ്സുകളിലെ വെള്ളവും വാട്ടർ അതോറിറ്റി ലാബുകൾ വഴി ശാസ്ത്രീയമായി പരിശോധിച്ച് സർട്ടിഫിക്കറ്റ് നൽകുന്ന സേവനം."
      },
      whoNeeds: {
        en: "Households, schools, food businesses, and apartment associations testing drinking water potability and contamination.",
        ml: "കിണർ വെള്ളത്തിന്റെ ഗുണനിലവാരം പരിശോധിക്കാൻ ആഗ്രഹിക്കുന്ന പൊതുജനങ്ങൾ, ഭക്ഷ്യ സ്ഥാപനങ്ങൾ, സ്കൂളുകൾ."
      },
      eligibility: {
        en: "Any citizen or commercial establishment wishing to test water samples from open wells, borewells, or purifiers.",
        ml: "കേരളത്തിലെ ഏതൊരു പൗരനും സ്ഥാപനങ്ങൾക്കും."
      },
      documents: {
        en: [
          "Applicant name, address, and mobile number",
          "Source description (Open well, borewell, rainwater tank, or tap water)",
          "Water sample collected in clean sterile bottle (as per laboratory protocol)",
          "Prescribed laboratory testing fee receipt"
        ],
        ml: [
          "അപേക്ഷകന്റെ പേരും വിലാസവും ഫോൺ നമ്പറും",
          "വെള്ളത്തിന്റെ ഉറവിടം (തുറന്ന കിണർ, കുഴൽക്കിണർ മുതലായവ)",
          "നിർദ്ദിഷ്ട അളവിൽ വൃത്തിയുള്ള കുപ്പിയിൽ ശേഖരിച്ച വെള്ളത്തിന്റെ സാമ്പിൾ",
          "ലാബ് പരിശോധനാ ഫീസ്"
        ]
      },
      additionalDocs: {
        en: [
          "Requisition letter if testing is required for statutory FSSAI or commercial license certification"
        ],
        ml: [
          "ലൈസൻസുകൾക്ക് വേണ്ടിയാണെങ്കിൽ ഔദ്യോഗിക അപേക്ഷാ കത്ത്"
        ]
      },
      whereToApply: {
        en: "District / Sub-District Water Quality Testing Laboratories of Kerala Water Authority.",
        ml: "കേരള വാട്ടർ അതോറിറ്റിയുടെ ജില്ലാ / സബ് ഡിവിഷൻ ക്വാളിറ്റി കൺട്രോൾ ലാബുകൾ."
      },
      mode: {
        en: "Sample Submission at Lab & Digital Test Report",
        ml: "ലാബിൽ സാമ്പിൾ നൽകൽ & ഡിജിറ്റൽ പരിശോധനാ റിപ്പോർട്ട്"
      },
      steps: {
        en: [
          "Collect water sample according to instructions (typically 2 liters in clean container; separate sterile container for bacteriological test).",
          "Submit sample to nearest KWA District/Sub-District Water Quality Testing Lab.",
          "Choose required test parameters (Physical, Chemical, and Bacteriological / E. coli).",
          "Pay testing fee at laboratory counter or online.",
          "Collect certified laboratory test report stating potability parameters."
        ],
        ml: [
          "വൃത്തിയുള്ള കുപ്പിയിൽ വെള്ളത്തിന്റെ സാമ്പിൾ ശേഖരിക്കുക.",
          "അടുത്തുള്ള വാട്ടർ അതോറിറ്റി ജില്ലാ ക്വാളിറ്റി കൺട്രോൾ ലാബിൽ എത്തിക്കുക.",
          "ആവശ്യമായ പരിശോധനകൾ (കെമിക്കൽ, ബാക്ടീരിയോളജിക്കൽ) തിരഞ്ഞെടുത്ത് ഫീസ് അടയ്ക്കുക.",
          "പരിശോധനാ ഫലം അടങ്ങിയ സർട്ടിഫിക്കറ്റ് കൈപ്പറ്റുക."
        ]
      },
      officialUrl: "https://kwa.kerala.gov.in",
      notes: {
        en: "For bacterial analysis, samples must reach the lab within 6 hours of collection without exposure to direct sunlight.",
        ml: "ബാക്ടീരിയ പരിശോധനയ്ക്കുള്ള സാമ്പിൾ ശേഖരിച്ച് 6 മണിക്കൂറിനകം ലാബിൽ എത്തിക്കണം."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "k-smart-citizen-services",
      category: "government",
      icon: "💻",
      name: {
        en: "K-SMART Citizen Services",
        ml: "കെ-സ്മാർട്ട് തദ്ദേശ ഡിജിറ്റൽ സേവനങ്ങൾ"
      },
      summary: {
        en: "Unified digital governance platform providing online citizen services across Municipalities and Municipal Corporations in Kerala.",
        ml: "നഗരസഭകളിലെയും കോർപ്പറേഷനുകളിലെയും ജനന-മരണ രജിസ്ട്രേഷൻ, നികുതി, പെർമിറ്റ് തുടങ്ങിയ സേവനങ്ങൾ നൽകുന്ന ഏകീകൃത പോർട്ടൽ."
      },
      whoNeeds: {
        en: "Residents living in Urban Local Bodies (Municipalities & Corporations) needing civil certificates, property assessment, or trade clearances.",
        ml: "നഗരസഭാ പ്രദേശങ്ങളിൽ താമസിക്കുന്നവരും വിവിധ നഗരസഭാ സേവനങ്ങൾ ആവശ്യമുള്ളവരുമായ പൗരന്മാർ."
      },
      eligibility: {
        en: "Any resident, property owner, or business operator situated within a Kerala Municipality or Corporation.",
        ml: "കേരളത്തിലെ നഗരസഭ/കോർപ്പറേഷൻ പരിധിയിലുള്ള ഏതൊരു വ്യക്തിക്കും."
      },
      documents: {
        en: [
          "Aadhaar Card / Mobile number for OTP user registration",
          "Property Tax assessment number or Building door number (for property services)",
          "Trade documents or vital records matching the specific requested module"
        ],
        ml: [
          "ആധാർ കാർഡ് / ഒ.ടി.പി രജിസ്ട്രേഷനുള്ള മൊബൈൽ നമ്പർ",
          "കെട്ടിട നമ്പർ അല്ലെങ്കിൽ നികുതി വിവരങ്ങൾ",
          "ആവശ്യപ്പെടുന്ന സർവീസിന് അനുസൃതമായ രേഖകൾ"
        ]
      },
      additionalDocs: {
        en: [
          "Module-specific supporting deeds, plans, or affidavits as prompted by service workflow"
        ],
        ml: [
          "ഓരോ സേവനത്തിനും ആവശ്യമുള്ള അധിക രേഖകൾ"
        ]
      },
      whereToApply: {
        en: "Online via K-SMART Portal (ksmart.lsgkerala.gov.in) or K-SMART Mobile App.",
        ml: "കെ-സ്മാർട്ട് പോർട്ടൽ (ksmart.lsgkerala.gov.in) അല്ലെങ്കിൽ മൊബൈൽ ആപ്പ് വഴി."
      },
      mode: {
        en: "100% Online (Web & Mobile App)",
        ml: "പൂർണ്ണമായും ഓൺലൈൻ"
      },
      steps: {
        en: [
          "Create citizen account on ksmart.lsgkerala.gov.in using Aadhaar/Mobile OTP.",
          "Select urban local body and browse service catalog (Civil Registration, Building Permit, Property Tax, Trade License).",
          "Fill digital application and upload required supporting proofs.",
          "Pay statutory fees through integrated e-payment gateway.",
          "Track file processing stages and download digitally signed orders/certificates."
        ],
        ml: [
          "കെ-സ്മാർട്ട് പോർട്ടലിൽ മൊബൈൽ നമ്പർ നൽകി അക്കൗണ്ട് ഉണ്ടാക്കുക.",
          "ആവശ്യമുള്ള നഗരസഭയും സർവീസും തിരഞ്ഞെടുക്കുക.",
          "വിവരങ്ങൾ നൽകി രേഖകൾ അപ്‌ലോഡ് ചെയ്ത് ഫീസ് അടയ്ക്കുക.",
          "നടപടികൾ നിരീക്ഷിച്ച് അന്തിമ സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://ksmart.lsgkerala.gov.in",
      notes: {
        en: "K-SMART covers urban local bodies; rural Grama Panchayat services are progressively being transitioned.",
        ml: "നിലവിൽ നഗരസഭകളിലാണ് ഇത് പൂർണ്ണമായും നടപ്പിലാക്കിയിട്ടുള്ളത്; പഞ്ചായത്തുകളിലേക്ക് ഘട്ടങ്ങളായി വ്യാപിപ്പിക്കുന്നു."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "profession-tax-services",
      category: "government",
      icon: "💼",
      name: {
        en: "Profession Tax Services",
        ml: "തൊഴിൽ നികുതി സേവനങ്ങൾ"
      },
      summary: {
        en: "Half-yearly statutory local body tax levied on salaried employees, professionals, and traders under Kerala Local Authorities Act.",
        ml: "തദ്ദേശ സ്വയംഭരണ സ്ഥാപനങ്ങൾക്ക് ഉദ്യോഗസ്ഥരും പ്രൊഫഷണലുകളും വ്യാപാരികളും അർദ്ധവാർഷികമായി അടയ്ക്കേണ്ട നികുതി."
      },
      whoNeeds: {
        en: "Salaried employees, self-employed professionals (doctors, engineers, lawyers, consultants), and commercial businesses.",
        ml: "ശമ്പളക്കാർ, ഡോക്ടർമാർ, അഭിഭാഷകർ, മറ്റ് പ്രൊഫഷണലുകൾ, കച്ചവട സ്ഥാപനങ്ങൾ എന്നിവർ."
      },
      eligibility: {
        en: "Individuals exercising any profession, trade, or employment within the local body jurisdiction earning income above statutory half-yearly slabs.",
        ml: "തദ്ദേശ സ്ഥാപന പരിധിയിൽ വരുമാനമുള്ള ജോലിയിലോ വ്യാപാരത്തിലോ ഏർപ്പെട്ടിരിക്കുന്നവർക്ക്."
      },
      documents: {
        en: [
          "PAN Card and Aadhaar Card of professional/taxpayer",
          "Salary slip / Statement of half-yearly gross income",
          "Business Registration or Trade Licence number (for self-employed)",
          "Previous profession tax payment receipt"
        ],
        ml: [
          "പാൻ കാർഡും ആധാർ കാർഡും",
          "ശമ്പള സർട്ടിഫിക്കറ്റ് അല്ലെങ്കിൽ വരുമാന രേഖ",
          "വ്യാപാര ലൈസൻസ് രേഖകൾ (സ്വയംതൊഴിൽ ചെയ്യുന്നവർക്ക്)",
          "മുൻ വർഷത്തെ നികുതി രസീത്"
        ]
      },
      additionalDocs: {
        en: [
          "Employer deduction statement (for corporate bulk employee remittance)"
        ],
        ml: [
          "സ്ഥാപനങ്ങൾ വഴി ഒടുക്കുന്നതാണെങ്കിൽ ജീവനക്കാരുടെ ലിസ്റ്റ്"
        ]
      },
      whereToApply: {
        en: "Sanchaya LSGD Tax Portal (tax.lsgkerala.gov.in), K-SMART portal, or local body revenue counter.",
        ml: "സഞ്ചയ പോർട്ടൽ (tax.lsgkerala.gov.in), കെ-സ്മാർട്ട് അല്ലെങ്കിൽ തദ്ദേശ സ്ഥാപന ഓഫീസ്."
      },
      mode: {
        en: "Online & Civic Office Counter",
        ml: "ഓൺലൈൻ & തദ്ദേശ സ്ഥാപനം"
      },
      steps: {
        en: [
          "Access Sanchaya / K-SMART portal and select 'Profession Tax'.",
          "Enter taxpayer enrollment number or institution details.",
          "Input half-yearly income bracket according to prevailing government slabs.",
          "Pay tax online through e-Payment gateway and generate printed acknowledgment receipt."
        ],
        ml: [
          "സഞ്ചയ അല്ലെങ്കിൽ കെ-സ്മാർട്ട് പോർട്ടലിൽ തൊഴിൽ നികുതി തിരഞ്ഞെടുക്കുക.",
          "വരുമാന സ്ലാബ് പരിശോധിച്ച് നികുതി തുക തിട്ടപ്പെടുത്തുക.",
          "ഓൺലൈനായി പണം അടച്ച് ഔദ്യോഗിക രസീത് ഡൗൺലോഡ് ചെയ്യുക."
        ]
      },
      officialUrl: "https://tax.lsgkerala.gov.in",
      notes: {
        en: "Levied on a half-yearly basis (April–September and October–March). Timely remittance avoids prosecution and penalty interest.",
        ml: "ഓരോ ആറുമാസത്തിലും (അർദ്ധവാർഷികം) നിശ്ചിത സമയപരിധിക്കുള്ളിൽ നികുതി അടയ്ക്കണം."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "dog-licence",
      category: "government",
      icon: "🐕",
      name: {
        en: "Dog Licence",
        ml: "നായ വളർത്തൽ ലൈസൻസ് (ഡോഗ് ലൈസൻസ്)"
      },
      summary: {
        en: "Mandatory local body registration and annual licensing for domestic pet dogs following anti-rabies vaccination.",
        ml: "വീടുകളിൽ വളർത്തുന്ന നായ്ക്കൾക്ക് പേവിഷബാധ പ്രതിരോധ കുത്തിവെയ്പ്പ് നൽകി തദ്ദേശ സ്ഥാപനങ്ങളിൽ നിന്ന് എടുക്കേണ്ട ലൈസൻസ്."
      },
      whoNeeds: {
        en: "Pet dog owners keeping domestic dogs within Grama Panchayat, Municipality, or Corporation jurisdictions.",
        ml: "വീടുകളിൽ നായ്ക്കളെ വളർത്തുന്ന എല്ലാ വളർത്തുനായ ഉടമകളും."
      },
      eligibility: {
        en: "Dog owners possessing valid Anti-Rabies Vaccination (ARV) certificate issued by a registered veterinary doctor.",
        ml: "വെറ്ററിനറി ഡോക്ടറുടെ സാധുവായ പേവിഷബാധ പ്രതിരോധ കുത്തിവെയ്പ്പ് സർട്ടിഫിക്കറ്റുള്ള നായ ഉടമകൾക്ക്."
      },
      documents: {
        en: [
          "Anti-Rabies Vaccination (ARV) Certificate issued by a registered Veterinary Surgeon",
          "Color photograph of the pet dog",
          "Owner's Aadhaar Card / Identity proof and residential address",
          "Microchip certificate details (if microchipping has been completed)"
        ],
        ml: [
          "വെറ്ററിനറി സർജൻ നൽകിയ പേവിഷബാധ പ്രതിരോധ കുത്തിവെയ്പ്പ് സർട്ടിഫിക്കറ്റ്",
          "നായയുടെ ഫോട്ടോ",
          "ഉടമയുടെ ആധാർ കാർഡും മേൽവിലാസ രേഖയും",
          "മൈക്രോചിപ്പ് വിവരങ്ങൾ (ചെയ്തിട്ടുണ്ടെങ്കിൽ)"
        ]
      },
      additionalDocs: {
        en: [
          "Veterinary fitness certificate certifying sterilization / neutering (if applicable)"
        ],
        ml: [
          "വന്ധ്യംകരണ സർട്ടിഫിക്കറ്റ് (ബാധകമെങ്കിൽ)"
        ]
      },
      whereToApply: {
        en: "Online via K-SMART Portal (for Municipalities/Corporations) or local Grama Panchayat / Veterinary Hospital desk.",
        ml: "കെ-സ്മാർട്ട് പോർട്ടൽ വഴി അല്ലെങ്കിൽ ഗ്രാമപഞ്ചായത്ത് / സർക്കാർ മൃഗാശുപത്രി വഴി."
      },
      mode: {
        en: "Online (K-SMART) & Local Body Counter",
        ml: "ഓൺലൈൻ & തദ്ദേശ സ്ഥാപന കൗണ്ടർ"
      },
      steps: {
        en: [
          "Vaccinate pet dog at government veterinary hospital or registered clinic and obtain signed ARV card.",
          "Log in to K-SMART or collect application form from local body office.",
          "Upload dog photo, veterinary vaccination certificate, and owner identity proof.",
          "Pay statutory registration fee and obtain license certificate and token/tag."
        ],
        ml: [
          "നായയ്ക്ക് പ്രതിരോധ കുത്തിവെയ്പ്പ് നൽകി വെറ്ററിനറി സർട്ടിഫിക്കറ്റ് വാങ്ങുക.",
          "കെ-സ്മാർട്ട് വഴിയോ പഞ്ചായത്ത് ഓഫീസിലോ അപേക്ഷ നൽകുക.",
          "ഫോട്ടോയും രേഖകളും സമർപ്പിച്ച് നിശ്ചിത ഫീസ് അടയ്ക്കുക.",
          "ലൈസൻസ് സർട്ടിഫിക്കറ്റും മെറ്റൽ ടോക്കണും കൈപ്പറ്റുക."
        ]
      },
      officialUrl: "https://ksmart.lsgkerala.gov.in",
      notes: {
        en: "Must be renewed annually following regular booster anti-rabies vaccination.",
        ml: "വർഷം തോറും കുത്തിവെയ്പ്പ് എടുത്ത ശേഷം ലൈസൻസ് പുതുക്കേണ്ടതാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "road-cutting-permission",
      category: "government",
      icon: "🚧",
      name: {
        en: "Road Cutting Permission",
        ml: "റോഡ് കട്ടിംഗ് പെർമിഷൻ (റോഡ് വെട്ടിപ്പൊളിക്കൽ അനുമതി)"
      },
      summary: {
        en: "Statutory permission and restoration deposit required from PWD or Local Bodies prior to excavating public roads for utilities.",
        ml: "കുടിവെള്ള പൈപ്പ്, കേബിളുകൾ എന്നിവ ഇടുന്നതിനായി പൊതുവഴികൾ വെട്ടിപ്പൊളിക്കുന്നതിന് മുൻകൂട്ടി വാങ്ങേണ്ട അനുമതി."
      },
      whoNeeds: {
        en: "Individuals, contractors, or utilities (KWA, KSEB, telecom providers) needing to dig across public roads.",
        ml: "പൈപ്പ് ലൈൻ ഇടാനോ മറ്റ് ആവശ്യങ്ങൾക്കോ റോഡ് വെട്ടിപ്പൊളിക്കേണ്ടി വരുന്ന പൊതുജനങ്ങളും കരാറുകാരും."
      },
      eligibility: {
        en: "Citizens or agencies executing lawful utility service installations crossing public street corridors.",
        ml: "പൊതുവഴികളിലൂടെ നിയമാനുസൃത കണക്ഷനുകൾ എടുക്കുന്ന ഏതൊരു വ്യക്തിക്കും."
      },
      documents: {
        en: [
          "Application specifying exact location, road name, and stretch dimensions (length & width of cut)",
          "Route sketch showing proposed excavation alignment",
          "Sanction letter / demand note from utility authority (e.g., KWA New Connection estimate)",
          "Applicant's Aadhaar Card / Identity proof"
        ],
        ml: [
          "വെട്ടിപ്പൊളിക്കേണ്ട റോഡിന്റെ പേരും നീളവും വീതിയും വ്യക്തമാക്കുന്ന അപേക്ഷ",
          "റൂട്ട് സ്കെച്ച് പ്ലാൻ",
          "വാട്ടർ അതോറിറ്റിയുടെയോ മറ്റ് വകുപ്പുകളുടെയോ അനുമതി കത്ത്",
          "അപേക്ഷകന്റെ ആധാർ കാർഡ്"
        ]
      },
      additionalDocs: {
        en: [
          "Traffic police safety clearance plan for arterial state highways or busy urban junctions"
        ],
        ml: [
          "പ്രധാന റോഡുകളാണെങ്കിൽ ട്രാഫിക് പോലീസിന്റെ അനുമതി"
        ]
      },
      whereToApply: {
        en: "Kerala PWD Portal (pwd.kerala.gov.in) for PWD roads, or local Grama Panchayat / Municipality Office for local body roads.",
        ml: "പി.ഡബ്ല്യു.ഡി റോഡുകൾക്ക് പൊതുമരാമത്ത് പോർട്ടൽ (pwd.kerala.gov.in), മറ്റ് റോഡുകൾക്ക് തദ്ദേശ സ്ഥാപന ഓഫീസ്."
      },
      mode: {
        en: "Online Portal & Field Engineering Inspection",
        ml: "ഓൺലൈൻ & എഞ്ചിനീയറിംഗ് പരിശോധന"
      },
      steps: {
        en: [
          "Submit application to Assistant Engineer (PWD Roads or Local Body Engineering Wing).",
          "Engineers inspect site and calculate tarring/concrete restoration restoration charges.",
          "Pay required restoration security deposit and supervision charges.",
          "Receive formal Road Cutting Sanction Order stating allowed dates and traffic safety conditions."
        ],
        ml: [
          "അസിസ്റ്റന്റ് എഞ്ചിനീയർക്ക് അപേക്ഷയും സ്കെച്ചും സമർപ്പിക്കുക.",
          "സ്ഥലം പരിശോധിച്ച് പുനർനിർമ്മാണ ചെലവ് (റെസ്റ്റോറേഷൻ ചാർജ്ജ്) തിട്ടപ്പെടുത്തുന്നു.",
          "ഫീസ് അടച്ച ശേഷം റോഡ് വെട്ടിപ്പൊളിക്കാനുള്ള അനുമതി ഉത്തരവ് ലഭിക്കുന്നു."
        ]
      },
      officialUrl: "https://pwd.kerala.gov.in",
      notes: {
        en: "Unauthorized road digging without prior sanction is a penal offense attracting steep statutory fines.",
        ml: "അനുമതിയില്ലാതെ പൊതുവഴികൾ വെട്ടിപ്പൊളിക്കുന്നത് ശിക്ഷാർഹമായ നിയമലംഘനമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "building-age-certificate",
      category: "government",
      icon: "🏚️",
      name: {
        en: "Building Age Certificate",
        ml: "കെട്ടിട പഴക്ക സർട്ടിഫിക്കറ്റ് (ബിൽഡിംഗ് ഏജ്)"
      },
      summary: {
        en: "Official engineering certification issued by Local Body Assistant Engineer confirming the exact vintage and construction year of a building.",
        ml: "ഒരു കെട്ടിടം നിർമ്മിച്ച വർഷവും അതിന്റെ പഴക്കവും സാക്ഷ്യപ്പെടുത്തി തദ്ദേശ സ്ഥാപന എൻജിനീയറിംഗ് വിഭാഗം നൽകുന്ന രേഖ."
      },
      whoNeeds: {
        en: "Property buyers, banks assessing mortgage structural stability, court valuation assessments, or demolition permissions.",
        ml: "ബാങ്ക് വായ്പകൾക്ക്, കെട്ടിട പുനർനിർമ്മാണത്തിന്, കോടതി ആവശ്യങ്ങൾക്ക് കെട്ടിടത്തിന്റെ പഴക്കം തെളിയിക്കേണ്ടവർ."
      },
      eligibility: {
        en: "Owners of assessed buildings registered in local body property tax assessment registers.",
        ml: "തദ്ദേശ സ്ഥാപനങ്ങളിൽ കെട്ടിട നമ്പർ അനുവദിച്ച് നികുതി അടയ്ക്കുന്ന കെട്ടിട ഉടമകൾക്ക്."
      },
      documents: {
        en: [
          "Building Door Number and Ward Number",
          "Property Tax Receipts from earliest available assessment year",
          "Original Building Completion Certificate or approved plan (if available)",
          "Registered Title Deed and current year Land Tax Receipt"
        ],
        ml: [
          "കെട്ടിട നമ്പർ, വാർഡ് നമ്പർ",
          "ലഭ്യമായതിൽ ഏറ്റവും പഴയ കെട്ടിട നികുതി രസീതുകൾ",
          "കെട്ടിട നിർമ്മാണ പൂർത്തീകരണ സർട്ടിഫിക്കറ്റ് (ഉണ്ടെങ്കിൽ)",
          "ആധാരത്തിന്റെ പകർപ്പും ഭൂനികുതി രസീതും"
        ]
      },
      additionalDocs: {
        en: [
          "Structural assessment report by chartered civil engineer (for very old or heritage structures)"
        ],
        ml: [
          "വളരെ പഴയ കെട്ടിടങ്ങളാണെങ്കിൽ ചാർട്ടേഡ് എൻജിനീയറുടെ പരിശോധനാ റിപ്പോർട്ട്"
        ]
      },
      whereToApply: {
        en: "K-SMART / Citizen Portal or local Grama Panchayat / Municipality Engineering Section.",
        ml: "കെ-സ്മാർട്ട് പോർട്ടൽ അല്ലെങ്കിൽ തദ്ദേശ സ്ഥാപന എഞ്ചിനീയറിംഗ് വിഭാഗം."
      },
      mode: {
        en: "Online / Offline Application & Physical Inspection",
        ml: "ഓൺലൈൻ / നേരിട്ടുള്ള അപേക്ഷ & സ്ഥലം പരിശോധന"
      },
      steps: {
        en: [
          "Submit application along with historic building tax receipts to the Secretary of the local body.",
          "Assistant Engineer / Overseer inspects structure, construction materials, and historical tax demand registers.",
          "Assistant Engineer prepares inspection report determining vintage of the building.",
          "Secretary issues digitally signed Building Age Certificate."
        ],
        ml: [
          "പഴയ നികുതി രസീതുകൾ സഹിതം തദ്ദേശ ഓഫീസിൽ അപേക്ഷിക്കുക.",
          "അസിസ്റ്റന്റ് എഞ്ചിനീയർ കെട്ടിടവും രേഖകളും പരിശോധിച്ച് റിപ്പോർട്ട് തയ്യാറാക്കുന്നു.",
          "തുടർന്ന് ഔദ്യോഗിക പഴക്ക സർട്ടിഫിക്കറ്റ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://ksmart.lsgkerala.gov.in",
      notes: {
        en: "Determined primarily by referencing earliest recorded entries in the civic assessment demand registers.",
        ml: "തദ്ദേശ സ്ഥാപനത്തിലെ ഏറ്റവും പഴയ നികുതി അസസ്സ്മെന്റ് രേഖകളുടെ അടിസ്ഥാനത്തിലാണ് പ്രായം കണക്കാക്കുന്നത്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "revenue-court-case-tracking",
      category: "government",
      icon: "⚖️",
      name: {
        en: "Revenue Court Case Tracking",
        ml: "റെവന്യൂ കോടതി കേസ് വിവരങ്ങൾ (ട്രാക്കിംഗ്)"
      },
      summary: {
        en: "Online tracking of revenue administrative cases, cause lists, hearing dates, and orders pending before District Collector, RDO, and Land Tribunal courts.",
        ml: "ജില്ലാ കളക്ടർ, ആർ.ഡി.ഒ, ലാൻഡ് ട്രിബ്യൂണൽ കോടതികളിലെ റെവന്യൂ കേസുകളുടെ വിവരങ്ങളും വാദത്തീയതികളും പരിശോധിക്കാനുള്ള ഓൺലൈൻ സംവിധാനം."
      },
      whoNeeds: {
        en: "Petitioners, respondents, landowners, and advocates involved in revenue land disputes, boundary appeals, data bank appeals, or mutation objections.",
        ml: "റവന്യൂ ഭൂമി തർക്കങ്ങൾ, അതിർത്തി അപ്പീലുകൾ, തരംമാറ്റ കേസുകൾ, പോക്കുവരവ് തർക്കങ്ങൾ എന്നിവയിൽ കക്ഷികളായ വ്യക്തികളും അഭിഭാഷകരും."
      },
      eligibility: {
        en: "Open to any citizen or party seeking information regarding cases heard in Kerala's revenue administrative hierarchy.",
        ml: "കേരളത്തിലെ റവന്യൂ അഡ്മിനിസ്ട്രേറ്റീവ് കോടതികളുടെ പരിഗണനയിലുള്ള കേസുകളുടെ വിവരങ്ങൾ അറിയാൻ ആഗ്രഹിക്കുന്ന ഏതൊരു വ്യക്തിക്കും."
      },
      documents: {
        en: [
          "No document upload required for status tracking",
          "Revenue Case Number / Petition Number",
          "District, Taluk, and specific Revenue Court name (Collectorate / RDO / Land Tribunal)",
          "Petitioner / Respondent Name and Year of filing (for search without case number)"
        ],
        ml: [
          "പ്രത്യേക രേഖകളൊന്നും അപ്‌ലോഡ് ചെയ്യേണ്ടതില്ല",
          "റെവന്യൂ കേസ് നമ്പർ / ഹർജി നമ്പർ",
          "ജില്ലയും ബന്ധപ്പെട്ട റവന്യൂ കോടതിയുടെ പേരും (കളക്ടറേറ്റ് / ആർ.ഡി.ഒ / ലാൻഡ് ട്രിബ്യൂണൽ)",
          "ഹർജിക്കാരന്റെ അല്ലെങ്കിൽ എതിർകക്ഷിയുടെ പേര് (നമ്പർ ഇല്ലെങ്കിൽ)"
        ]
      },
      additionalDocs: {
        en: [],
        ml: []
      },
      whereToApply: {
        en: "Online via Kerala e-District Portal (Revenue Court Cases section) or Land Revenue Department portal.",
        ml: "കേരള ഇ-ഡിസ്ട്രിക്റ്റ് (e-District) പോർട്ടൽ അല്ലെങ്കിൽ ലാൻഡ് റവന്യൂ വകുപ്പ് വെബ്സൈറ്റ് വഴി."
      },
      mode: {
        en: "100% Online Public Information Service",
        ml: "പൂർണ്ണമായും ഓൺലൈൻ വിവര സേവനം"
      },
      steps: {
        en: [
          "Visit the Kerala e-District portal or Land Revenue departmental page.",
          "Select the Revenue Court Case Tracking module.",
          "Choose the relevant revenue court authority (e.g., District Collector, Sub Collector / RDO, or Land Tribunal).",
          "Enter the Case Number, or search by petitioner name and year.",
          "View current case status, next hearing date, daily cause list, or download uploaded proceedings and orders."
        ],
        ml: [
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടലിലെ റെവന്യൂ കേസ് ട്രാക്കിംഗ് വിഭാഗം സന്ദർശിക്കുക.",
          "ബന്ധപ്പെട്ട റവന്യൂ കോടതി തിരഞ്ഞെടുക്കുക (കളക്ടർ / ആർ.ഡി.ഒ / ലാൻഡ് ട്രിബ്യൂണൽ).",
          "കേസ് നമ്പർ നൽകുക (അല്ലെങ്കിൽ കക്ഷിയുടെ പേര് നൽകി തിരയുക).",
          "കേസിന്റെ നിലവിലെ അവസ്ഥ, അടുത്ത വാദത്തീയതി, ദിവസേനയുള്ള കോസ് ലിസ്റ്റ് എന്നിവ പരിശോധിക്കുക."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "This service tracks executive revenue cases handled by the Land Revenue administrative hierarchy (boundary disputes, paddy land appeals, mutation revisions). It does not track judicial cases in Magistrate, District, or High Courts.",
        ml: "റവന്യൂ ഉദ്യോഗസ്ഥരുടെ പരിഗണനയിലുള്ള അഡ്മിനിസ്ട്രേറ്റീവ് കേസുകൾക്ക് മാത്രമുള്ളതാണിത്; മജിസ്ട്രേറ്റ്, സിവിൽ അല്ലെങ്കിൽ ഹൈക്കോടതി കേസുകൾ ഇതിൽ ഉൾപ്പെടുന്നില്ല."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "cmdrf-financial-assistance",
      category: "government",
      icon: "🤝",
      name: {
        en: "CMDRF Financial Assistance",
        ml: "മുഖ്യമന്ത്രിയുടെ ദുരിതാശ്വാസ നിധി (CMDRF)"
      },
      summary: {
        en: "Direct financial grant provided to low-income citizens facing extreme distress due to major medical illnesses, natural disasters, or accidental breadwinner death.",
        ml: "മാരക രോഗങ്ങൾ, പ്രകൃതിക്ഷോഭങ്ങൾ, അപകട മരണം എന്നിവ മൂലം ദുരിതമനുഭവിക്കുന്ന പാവപ്പെട്ടവർക്ക് മുഖ്യമന്ത്രിയുടെ ദുരിതാശ്വാസ നിധിയിൽ നിന്നുള്ള സാമ്പത്തിക സഹായം."
      },
      whoNeeds: {
        en: "Low-income families requiring financial assistance for critical hospital treatments, emergency medical care, or families of accident victims.",
        ml: "ഗുരുതര രോഗങ്ങൾക്ക് ചികിത്സ തേടുന്നവർ, ശസ്ത്രക്രിയ ആവശ്യമായി വരുന്ന നിർധനരായ രോഗികൾ, ദുരന്തബാധിത കുടുംബങ്ങൾ."
      },
      eligibility: {
        en: "Permanent residents of Kerala whose annual family income is within prescribed limits (typically up to Rs. 2 Lakhs for medical distress).",
        ml: "കേരളത്തിൽ സ്ഥിരതാമസമുള്ളവരും നിശ്ചിത വാർഷിക വരുമാന പരിധിയിൽ ഉൾപ്പെടുന്നവരുമായ നിർധന പൗരന്മാർ."
      },
      documents: {
        en: [
          "Medical Certificate in prescribed government format signed and sealed by treating specialist doctor",
          "Income Certificate issued by Revenue Village Officer (or Priority Ration card copy)",
          "Applicant's and Patient's Aadhaar Cards",
          "Bank Passbook copy of the applicant (showing account number and IFSC, linked to bank account)"
        ],
        ml: [
          "ചികിത്സിക്കുന്ന ഡോക്ടർ സാക്ഷ്യപ്പെടുത്തിയ നിശ്ചിത ഫോർമാറ്റിലുള്ള മെഡിക്കൽ സർട്ടിഫിക്കറ്റ്",
          "വില്ലേജ് ഓഫീസിൽ നിന്നുള്ള വരുമാന സർട്ടിഫിക്കറ്റ് (അല്ലെങ്കിൽ മുൻഗണനാ റേഷൻ കാർഡ്)",
          "അപേക്ഷകന്റെയും രോഗിയുടെയും ആധാർ കാർഡുകൾ",
          "ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങൾ വ്യക്തമാക്കുന്ന പാസ്ബുക്ക് പകർപ്പ്"
        ]
      },
      additionalDocs: {
        en: [
          "Original medical bills and hospital discharge summary",
          "FIR and post-mortem report (in case of accidental death claims)"
        ],
        ml: [
          "ആശുപത്രി ബില്ലുകളും ഡിസ്ചാർജ്ജ് സമ്മറിയും",
          "അപകട മരണമാണെങ്കിൽ പോലീസ് എഫ്.ഐ.ആറും പോസ്റ്റ്‌മോർട്ടം റിപ്പോർട്ടും"
        ]
      },
      whereToApply: {
        en: "Online via Chief Minister's Grievance Redressal / CMDRF Portal (cmo.kerala.gov.in / cmdrf.kerala.gov.in) or Akshaya Centre / Taluk Office.",
        ml: "മുഖ്യമന്ത്രിയുടെ ദുരിതാശ്വാസ നിധി പോർട്ടൽ (cmo.kerala.gov.in / cmdrf.kerala.gov.in) അല്ലെങ്കിൽ അക്ഷയ കേന്ദ്രം വഴി."
      },
      mode: {
        en: "Online Application & Revenue Verification",
        ml: "ഓൺലൈൻ അപേക്ഷ & റവന്യൂ പരിശോധന"
      },
      steps: {
        en: [
          "Access the official CMDRF / CMO portal and register using mobile number OTP.",
          "Fill applicant details, patient details, and bank account information.",
          "Upload scanned copies of medical certificate, income certificate, bank passbook, and Aadhaar.",
          "Submit application and receive reference docket number.",
          "Village Officer and Tahsildar verify eligibility; application is reviewed and sanctioned amount is directly credited to bank account via DBT."
        ],
        ml: [
          "സി.എം.ഡി.ആർ.എഫ് പോർട്ടലിൽ മൊബൈൽ നമ്പർ ഉപയോഗിച്ച് ലോഗിൻ ചെയ്യുക.",
          "രോഗിയുടെ വിവരങ്ങളും ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങളും നൽകുക.",
          "ഡോക്ടറുടെ സർട്ടിഫിക്കറ്റ്, വരുമാന രേഖകൾ, ആധാർ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക.",
          "റവന്യൂ അന്വേഷണത്തിന് ശേഷം തുക നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിലേക്ക് എത്തും."
        ]
      },
      officialUrl: "https://cmo.kerala.gov.in",
      notes: {
        en: "Assistance is sanctioned subject to verification by revenue authorities. Once sanctioned for a disease, recurring grants are governed by statutory time intervals.",
        ml: "റവന്യൂ ഉദ്യോഗസ്ഥരുടെ അന്വേഷണത്തിന് ശേഷമാണ് ധനസഹായം അനുവദിക്കുന്നത്; ഒരു തവണ ലഭിച്ചാൽ അടുത്ത അപേക്ഷയ്ക്ക് നിശ്ചിത കാലാവധി ബാധകമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "kswift-msme-in-principle-approval",
      category: "government",
      icon: "🏢",
      name: {
        en: "K-SWIFT Certificate of In-Principle Approval",
        ml: "കെ-സ്വിഫ്റ്റ് തത്വത്തിലുള്ള അനുമതി പത്രം (MSME)"
      },
      summary: {
        en: "Instant online approval certificate under Kerala MSME Facilitation Act exempting non-red category enterprises from multiple initial statutory clearances for 3.5 years.",
        ml: "കേരള എം.എസ്.എം.ഇ ഫെസിലിറ്റേഷൻ നിയമപ്രകാരം ചെറുകിട വ്യവസായ സംരംഭങ്ങൾക്ക് 3.5 വർഷത്തേക്ക് തദ്ദേശ അനുമതികളിൽ ഇളവ് നൽകുന്ന സർട്ടിഫിക്കറ്റ്."
      },
      whoNeeds: {
        en: "Entrepreneurs, startups, and business owners starting new Micro, Small, or Medium Enterprises (MSMEs) in Kerala.",
        ml: "കേരളത്തിൽ പുതിയ ചെറുകിട-ഇടത്തരം വ്യവസായ സ്ഥാപനങ്ങളോ സ്റ്റാർട്ടപ്പുകളോ ആരംഭിക്കാൻ ആഗ്രഹിക്കുന്ന സംരംഭകർ."
      },
      eligibility: {
        en: "New enterprises categorized under Micro, Small, or Medium categories falling under Green, White, or permitted Orange industrial classifications (excluding Red category polluting units).",
        ml: "മലിനീകരണ നിയന്ത്രണ ബോർഡിന്റെ ചുവപ്പ് (Red) വിഭാഗത്തിൽപ്പെടാത്ത എല്ലാ സൂക്ഷ്മ, ചെറുകിട, ഇടത്തരം സംരംഭങ്ങൾക്കും."
      },
      documents: {
        en: [
          "Promoter / Authorized Signatory's Identity Proof (Aadhaar / PAN)",
          "Udyam Registration Certificate (or draft enterprise details)",
          "Land ownership title deed or registered lease/rent agreement of the enterprise premises",
          "Detailed project profile describing manufacturing or service activity"
        ],
        ml: [
          "സംരംഭകന്റെ ആധാർ കാർഡ് / പാൻ കാർഡ്",
          "ഉദ്യം (Udyam) രജിസ്ട്രേഷൻ വിവരങ്ങൾ",
          "സ്ഥാപനം പ്രവർത്തിക്കുന്ന സ്ഥലത്തിന്റെ ആധാരം അല്ലെങ്കിൽ വാടകക്കരാർ",
          "സ്ഥാപനത്തിന്റെ പ്രവർത്തന വിവരങ്ങൾ അടങ്ങിയ പ്രോജക്റ്റ് വിവരണം"
        ]
      },
      additionalDocs: {
        en: [
          "Self-declaration undertaking in prescribed format affirming compliance with safety, environmental, and labor norms"
        ],
        ml: [
          "നിയമാനുസൃത വ്യവസ്ഥകൾ പാലിക്കാമെന്ന് വ്യക്തമാക്കുന്ന സംരംഭകന്റെ സത്യവാങ്മൂലം"
        ]
      },
      whereToApply: {
        en: "Online through Kerala Single Window Interface for Fast and Transparent Clearances (K-SWIFT: kswift.kerala.gov.in).",
        ml: "കെ-സ്വിഫ്റ്റ് (K-SWIFT) സിംഗിൾ വിൻഡോ പോർട്ടൽ (kswift.kerala.gov.in) വഴി."
      },
      mode: {
        en: "100% Online Instant Generation",
        ml: "പൂർണ്ണമായും ഓൺലൈൻ (തത്സമയ സർട്ടിഫിക്കറ്റ്)"
      },
      steps: {
        en: [
          "Register investor/enterprise profile on kswift.kerala.gov.in.",
          "Complete the Common Application Form (CAF) for MSME facilitation.",
          "Submit the statutory Self-Declaration confirming non-red category and compliance with safety rules.",
          "Generate and download the digitally signed Certificate of In-Principle Approval instantly without manual processing delays.",
          "Commence commercial enterprise operations and obtain regular licenses before the 3.5-year exemption period expires."
        ],
        ml: [
          "കെ-സ്വിഫ്റ്റ് പോർട്ടലിൽ സംരംഭകന്റെ പ്രൊഫൈൽ രജിസ്റ്റർ ചെയ്യുക.",
          "എം.എസ്.എം.ഇ അപേക്ഷാ ഫോറം പൂരിപ്പിക്കുക.",
          "ചുവപ്പ് വിഭാഗത്തിൽപ്പെട്ടതല്ലെന്ന് സാക്ഷ്യപ്പെടുത്തുന്ന സ്വയംസാക്ഷ്യപത്രം സമർപ്പിക്കുക.",
          "ഫീസ് ഇല്ലാതെ തത്സമയം തന്നെ ഡിജിറ്റൽ അനുമതി പത്രം ഡൗൺലോഡ് ചെയ്യാം.",
          "ഇത് ഉപയോഗിച്ച് സ്ഥാപനം ആരംഭിക്കാം; 3.5 വർഷത്തിനകം സ്ഥിരം ലൈസൻസുകൾ എടുത്താൽ മതിയാകും."
        ]
      },
      officialUrl: "https://kswift.kerala.gov.in",
      notes: {
        en: "Valid for 3 years and 6 months from issuance date. During this statutory period, the enterprise is exempt from inspections and clearances from local bodies, factories inspectors, and town planning.",
        ml: "3 വർഷവും 6 മാസവുമാണ് ഇതിന്റെ കാലാവധി. ഈ സമയത്ത് തദ്ദേശ സ്ഥാപനങ്ങളുടെ മുൻകൂർ പരിശോധനകളോ തടസ്സങ്ങളോ ഇല്ലാതെ സ്ഥാപനം നടത്താം."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "labour-welfare-fund-benefits",
      category: "government",
      icon: "👷",
      name: {
        en: "Kerala Labour Welfare Fund Benefits & Schemes",
        ml: "കേരള തൊഴിലാളി ക്ഷേമനിധി ആനുകൂല്യങ്ങളും സ്കോളർഷിപ്പുകളും"
      },
      summary: {
        en: "Statutory welfare grants, educational scholarships, marriage aid, medical treatment support, and death relief for contributing workers in commercial establishments and factories.",
        ml: "കടകളിലും വാണിജ്യ സ്ഥാപനങ്ങളിലും ജോലി ചെയ്യുന്ന തൊഴിലാളികൾക്ക് ചികിത്സാ സഹായം, സ്കോളർഷിപ്പുകൾ, വിവാഹ ധനസഹായം എന്നിവ നൽകുന്ന ക്ഷേമ പദ്ധതി."
      },
      whoNeeds: {
        en: "Employees working in registered shops, commercial firms, motor transport units, and factories in Kerala who contribute to the Labour Welfare Fund.",
        ml: "കേരളത്തിലെ കടകൾ, വാണിജ്യ സ്ഥാപനങ്ങൾ, ഫാക്ടറികൾ എന്നിവയിൽ ജോലി ചെയ്യുന്ന തൊഴിലാളികളും അവരുടെ മക്കളും."
      },
      eligibility: {
        en: "Workers employed in establishments covered under the Kerala Labour Welfare Fund Act, 1975, whose monthly welfare contributions are up to date.",
        ml: "കേരള തൊഴിലാളി ക്ഷേമനിധി ബോർഡിൽ അംഗത്വമുള്ള സ്ഥാപനങ്ങളിലെ തൊഴിലാളികൾ (മാസ വിഹിതം അടയ്ക്കുന്നവർ)."
      },
      documents: {
        en: [
          "Labour Welfare Fund Membership Card / Identity Certificate",
          "Certificate from Employer confirming continuous employment and regular contribution remittance",
          "Applicant's and Beneficiary's Aadhaar Cards",
          "Bank Passbook copy of the worker (showing Account Number and IFSC)"
        ],
        ml: [
          "തൊഴിലാളി ക്ഷേമനിധി അംഗത്വ രേഖ അല്ലെങ്കിൽ ഐഡി",
          "സ്ഥാപന ഉടമ നൽകുന്ന സാക്ഷ്യപത്രം (തൊഴിൽ ചെയ്യുന്ന വിവരം തെളിയിക്കുന്നത്)",
          "തൊഴിലാളിയുടെയും ഗുണഭോക്താവിന്റെയും ആധാർ കാർഡുകൾ",
          "തൊഴിലാളിയുടെ പേരിലുള്ള ബാങ്ക് പാസ്ബുക്ക് പകർപ്പ്"
        ]
      },
      additionalDocs: {
        en: [
          "School / College Certificate and Mark list (for educational scholarships and merit awards)",
          "Registered Marriage Certificate and invitation card (for marriage assistance scheme)",
          "Medical reports and hospital admission bills (for medical aid claims)"
        ],
        ml: [
          "വിദ്യാഭ്യാസ സ്കോളർഷിപ്പിനായി മാർക്ക് ലിസ്റ്റും സ്കൂൾ/കോളേജ് സാക്ഷ്യപത്രവും",
          "വിവാഹ ധനസഹായത്തിനായി വിവാഹ സർട്ടിഫിക്കറ്റും ക്ഷണക്കത്തും",
          "ചികിത്സാ സഹായത്തിനായി മെഡിക്കൽ സർട്ടിഫിക്കറ്റും ബില്ലുകളും"
        ]
      },
      whereToApply: {
        en: "Online via Kerala Labour Welfare Fund Board Portal (labourwelfarefund.in) or Regional Labour Welfare Fund Offices.",
        ml: "തൊഴിലാളി ക്ഷേമനിധി ബോർഡ് പോർട്ടൽ (labourwelfarefund.in) അല്ലെങ്കിൽ മേഖലാ വെൽഫെയർ ഫണ്ട് ഓഫീസുകൾ വഴി."
      },
      mode: {
        en: "Online Portal & Welfare Fund Board Approval",
        ml: "ഓൺലൈൻ പോർട്ടൽ & വെൽഫെയർ ബോർഡ് പരിശോധന"
      },
      steps: {
        en: [
          "Visit the official Kerala Labour Welfare Fund portal (labourwelfarefund.in).",
          "Log in to worker profile or apply through the designated scheme section.",
          "Select the required welfare scheme (Education Grant, Medical Aid, Marriage Assistance, etc.).",
          "Upload employer declaration, identity proof, bank details, and scheme-specific proofs.",
          "Submit application; Welfare Fund Inspector scrutinizes files and approved grant is disbursed directly to worker's bank account."
        ],
        ml: [
          "തൊഴിലാളി ക്ഷേമനിധി ബോർഡിന്റെ വെബ്സൈറ്റ് സന്ദർശിക്കുക.",
          "ആവശ്യമായ ക്ഷേമ പദ്ധതി തിരഞ്ഞെടുക്കുക (വിദ്യാഭ്യാസ സഹായം, ചികിത്സാ സഹായം മുതലായവ).",
          "തൊഴിലുടമയുടെ കത്ത്, ബാങ്ക് പാസ്ബുക്ക്, അനുബന്ധ രേഖകൾ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക.",
          "ഉദ്യോഗസ്ഥരുടെ പരിശോധനയ്ക്ക് ശേഷം അനുവദിക്കുന്ന തുക ബാങ്ക് അക്കൗണ്ടിലേക്ക് ലഭിക്കും."
        ]
      },
      officialUrl: "https://labourwelfarefund.in",
      notes: {
        en: "Ensure that the employer has remitted the mandatory statutory contributions; applications cannot be processed if employer remittances are in default.",
        ml: "സ്ഥാപനം തൊഴിലാളിയുടെ ക്ഷേമനിധി വിഹിതം അടച്ചിട്ടുണ്ടെന്ന് ഉറപ്പാക്കണം; കുടിശ്ശികയുണ്ടെങ്കിൽ ആനുകൂല്യം ലഭിക്കില്ല."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "wildlife-conflict-compensation",
      category: "government",
      icon: "🐘",
      name: {
        en: "Wildlife Conflict Compensation",
        ml: "വന്യജീവി ആക്രമണ നഷ്ടപരിഹാരം"
      },
      summary: {
        en: "Statutory government financial relief for loss of life, permanent disability, grievous injury, cattle death, or crop destruction caused by wild animal attacks.",
        ml: "വന്യജീവി ആക്രമണം മൂലമുണ്ടാകുന്ന മരണം, പരിക്കുകൾ, കന്നുകാലി നാശം, കാർഷിക വിളനാശം എന്നിവയ്ക്ക് വനം വകുപ്പ് നൽകുന്ന നഷ്ടപരിഹാരം."
      },
      whoNeeds: {
        en: "Farmers, tribal residents, and citizens residing in forest fringe or rural areas who have suffered wild animal attack casualties or property/crop damages.",
        ml: "വനമേഖലയോട് ചേർന്ന് താമസിക്കുന്നവരും വന്യമൃഗ ആക്രമണം മൂലം പരിക്കോ ജീവഹാനിയോ കൃഷിനാശമോ സംഭവിച്ച കർഷകരും പൊതുജനങ്ങളും."
      },
      eligibility: {
        en: "Victims of wild animal attacks or legal heirs of deceased victims residing in Kerala, provided the incident occurred outside forest violation activities.",
        ml: "വന്യമൃഗങ്ങളുടെ ആക്രമണത്തിന് ഇരയായവരോ മരണപ്പെട്ടവരുടെ ആശ്രിതരോ ആയ കേരളത്തിലെ പൗരന്മാർ."
      },
      documents: {
        en: [
          "Application in prescribed format detailing date, location, and animal involved",
          "Aadhaar Card and Bank Passbook copy of the victim or claimant",
          "Medical treatment certificate / Wound certificate issued by Government Doctor (for injury claims)"
        ],
        ml: [
          "സംഭവം നടന്ന തീയതിയും സ്ഥലവും വ്യക്തമാക്കുന്ന നിശ്ചിത അപേക്ഷ",
          "അപേക്ഷകന്റെ ആധാർ കാർഡും ബാങ്ക് പാസ്ബുക്ക് പകർപ്പും",
          "സർക്കാർ ഡോക്ടറുടെ മുറിവ് സർട്ടിഫിക്കറ്റ് / മെഡിക്കൽ രേഖകൾ (പരിക്കേറ്റവർക്ക്)"
        ]
      },
      additionalDocs: {
        en: [
          "Post-mortem report, Death Certificate, and Legal Heirship certificate (in case of human death claims)",
          "Veterinary Surgeon inspection certificate and post-mortem report (in case of cattle loss)",
          "Agricultural Officer joint assessment report and land tax receipt (in case of crop damage)"
        ],
        ml: [
          "മരണമാണെങ്കിൽ പോസ്റ്റ്‌മോർട്ടം റിപ്പോർട്ട്, മരണ സർട്ടിഫിക്കറ്റ്, അനന്തരാവകാശ രേഖ",
          "കന്നുകാലി നാശത്തിന് വെറ്ററിനറി സർജന്റെ പരിശോധനാ റിപ്പോർട്ട്",
          "വിളനാശത്തിന് കൃഷി ഓഫീസറുടെ മഹസ്സർ റിപ്പോർട്ടും ഭൂനികുതി രസീതും"
        ]
      },
      whereToApply: {
        en: "Online via Kerala e-District Portal (Forest Department section) or directly at jurisdictional Forest Range Office.",
        ml: "കേരള ഇ-ഡിസ്ട്രിക്റ്റ് (e-District) പോർട്ടൽ വഴി ഓൺലൈനായോ ബന്ധപ്പെട്ട ഫോറസ്റ്റ് റെയ്ഞ്ച് ഓഫീസിലോ."
      },
      mode: {
        en: "Online Portal & Forest Department Field Inspection",
        ml: "ഓൺലൈൻ & ഫോറസ്റ്റ് ഫീൽഡ് പരിശോധന"
      },
      steps: {
        en: [
          "Inform the local Forest Range Officer immediately following the wild animal intrusion or attack.",
          "File application via e-District Kerala under 'Forest Department' services or submit physical form at Range Office.",
          "Forest Range Officer, Veterinary Doctor, or Agricultural Officer conducts spot inspection and prepares loss mahazar.",
          "Divisional Forest Officer (DFO) reviews file and sanctions statutory compensation amount.",
          "Approved relief is transferred directly to the claimant's bank account."
        ],
        ml: [
          "സംഭവം നടന്ന് ഉടൻ തന്നെ അടുത്തുള്ള ഫോറസ്റ്റ് റെയ്ഞ്ച് ഓഫീസിൽ വിവരം അറിയിക്കുക.",
          "ഇ-ഡിസ്ട്രിക്റ്റ് പോർട്ടൽ വഴിയോ നേരിട്ടോ ആവശ്യമായ രേഖകൾ സഹിതം അപേക്ഷ നൽകുക.",
          "ഫോറസ്റ്റ് ഉദ്യോഗസ്ഥർ സ്ഥലം സന്ദർശിച്ച് മഹസ്സറും നാശനഷ്ട റിപ്പോർട്ടും തയ്യാറാക്കുന്നു.",
          "ഡി.എഫ്.ഒ (DFO) അനുമതി നൽകിയ ശേഷം നഷ്ടപരിഹാര തുക ബാങ്ക് അക്കൗണ്ടിലേക്ക് നൽകുന്നു."
        ]
      },
      officialUrl: "https://edistrict.kerala.gov.in",
      notes: {
        en: "Incidents must be reported promptly without delay to enable spot inspection by forest and veterinary/agricultural officers before physical evidence is disturbed.",
        ml: "സംഭവം നടന്ന് ഉടൻ തന്നെ റിപ്പോർട്ട് ചെയ്യണം; കാലതാമസം വന്നാൽ തെളിവുകൾ പരിശോധിക്കാൻ സാധിക്കാതെ അപേക്ഷ നിരസിക്കപ്പെടാൻ സാധ്യതയുണ്ട്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "building-ownership-certificate",
      category: "government",
      icon: "🏠",
      name: {
        en: "Local Body Building Ownership Certificate",
        ml: "കെട്ടിട ഉടമസ്ഥാവകാശ സർട്ടിഫിക്കറ്റ് (തദ്ദേശ സ്ഥാപനങ്ങൾ)"
      },
      summary: {
        en: "Official certificate issued by Grama Panchayat, Municipality, or Corporation certifying recorded property tax ownership and door number of a building.",
        ml: "തദ്ദേശ സ്വയംഭരണ സ്ഥാപനത്തിന്റെ നികുതി രജിസ്റ്റർ പ്രകാരം ഒരു കെട്ടിടം അപേക്ഷകന്റെ ഉടമസ്ഥതയിലാണെന്ന് സാക്ഷ്യപ്പെടുത്തുന്ന ഔദ്യോഗിക രേഖ."
      },
      whoNeeds: {
        en: "Building owners needing proof of house ownership for KSEB electricity connection, KWA water connection, bank mortgage loans, or passport verification.",
        ml: "വൈദ്യുതി കണക്ഷൻ, കുടിവെള്ള കണക്ഷൻ, ബാങ്ക് വായ്പകൾ, പാസ്‌പോർട്ട് വെരിഫിക്കേഷൻ എന്നിവയ്ക്കായി വീടിന്റെ ഉടമസ്ഥാവകാശം തെളിയിക്കേണ്ടവർ."
      },
      eligibility: {
        en: "Recorded owner of an assessed building having a valid annual door number registered with the Grama Panchayat, Municipality, or Corporation.",
        ml: "തദ്ദേശ സ്ഥാപനത്തിൽ കെട്ടിട നമ്പർ അനുവദിക്കപ്പെടുകയും നികുതി രജിസ്റ്ററിൽ പേരുള്ളതുമായ കെട്ടിട ഉടമകൾക്ക്."
      },
      documents: {
        en: [
          "Latest Property / Building Tax Receipt issued by the local body",
          "Building Door Number, Ward Number, and Local Body Name",
          "Applicant's Aadhaar Card / Identity proof",
          "Registered Title Deed (Aadhaaram) of the land/building"
        ],
        ml: [
          "തദ്ദേശ സ്ഥാപനത്തിൽ നടപ്പു വർഷം കെട്ടിട നികുതി ഒടുക്കിയ രസീത്",
          "കെട്ടിട നമ്പർ, വാർഡ് നമ്പർ, തദ്ദേശ സ്ഥാപനത്തിന്റെ പേര്",
          "അപേക്ഷകന്റെ ആധാർ കാർഡ് / തിരിച്ചറിയൽ രേഖ",
          "സ്ഥലത്തിന്റെ ആധാര പകർപ്പ്"
        ]
      },
      additionalDocs: {
        en: [
          "Building ownership transfer / mutation order (if property ownership was recently transferred from previous owner)"
        ],
        ml: [
          "പുതിയതായി വാങ്ങിയ കെട്ടിടമാണെങ്കിൽ ഉടമസ്ഥാവകാശം മാറ്റിയ രേഖകൾ"
        ]
      },
      whereToApply: {
        en: "Online via K-SMART Portal (for Municipalities/Corporations) or Citizen Portal / front office counter of Grama Panchayats.",
        ml: "കെ-സ്മാർട്ട് (K-SMART) പോർട്ടൽ അല്ലെങ്കിൽ ഗ്രാമപഞ്ചായത്ത് ഫ്രണ്ട് ഓഫീസ് / സിറ്റിസൺ പോർട്ടൽ."
      },
      mode: {
        en: "Online (K-SMART) & Local Body Counter",
        ml: "ഓൺലൈൻ & തദ്ദേശ സ്ഥാപന ഓഫീസ്"
      },
      steps: {
        en: [
          "Log in to the K-SMART portal or visit the Grama Panchayat / Municipality office.",
          "Select 'Building Ownership Certificate' service.",
          "Provide Ward Number, Door Number, and applicant details.",
          "Upload property tax receipt and identity proof.",
          "Pay the nominal local body fee online.",
          "Revenue inspector / municipal clerk verifies assessment records and Secretary issues digitally signed Ownership Certificate."
        ],
        ml: [
          "കെ-സ്മാർട്ട് പോർട്ടലിൽ ലോഗിൻ ചെയ്യുക അല്ലെങ്കിൽ തദ്ദേശ ഓഫീസിൽ അപേക്ഷ നൽകുക.",
          "'കെട്ടിട ഉടമസ്ഥാവകാശ സർട്ടിഫിക്കറ്റ്' തിരഞ്ഞെടുക്കുക.",
          "വാർഡ് നമ്പറും കെട്ടിട നമ്പറും രേഖപ്പെടുത്തുക.",
          "നികുതി രസീത് അപ്‌ലോഡ് ചെയ്ത് ഫീസ് അടയ്ക്കുക.",
          "നികുതി രജിസ്റ്റർ പരിശോധിച്ച ശേഷം ഡിജിറ്റൽ സർട്ടിഫിക്കറ്റ് ലഭ്യമാകും."
        ]
      },
      officialUrl: "https://ksmart.lsgkerala.gov.in",
      notes: {
        en: "All property tax dues for the building must be cleared up to the current financial year before applying for the ownership certificate.",
        ml: "നടപ്പു സാമ്പത്തിക വർഷം വരെയുള്ള കെട്ടിട നികുതി കുടിശ്ശികയില്ലാതെ പൂർണ്ണമായി അടച്ചിട്ടുണ്ടെന്ന് ഉറപ്പുവരുത്തണം."
      },
      lastVerified: "September 2026",
      verified: true
    },
      // ==========================================
  // SERVICE #113: Senior Citizen Identity Card
  // ==========================================
  {
    id: "senior-citizen-identity-card",
    category: "government",
    icon: "🧓",
    name: {
      en: "Senior Citizen Identity Card",
      ml: "മുതിർന്ന പൗരന്മാർക്കുള്ള തിരിച്ചറിയൽ കാർഡ്"
    },
    summary: {
      en: "Information and in-person assistance for obtaining a Senior Citizen Identity Card / Certificate through local self-government institutions or the Social Justice Department.",
      ml: "60 വയസ്സ് കഴിഞ്ഞ മുതിർന്ന പൗരന്മാർക്ക് തദ്ദേശ സ്വയംഭരണ സ്ഥാപനങ്ങൾ വഴിയോ സാമൂഹികനീതി വകുപ്പ് വഴിയോ തിരിച്ചറിയൽ കാർഡോ സർട്ടിഫിക്കറ്റോ ലഭ്യമാക്കുന്ന സേവനം."
    },
    description: {
      en: "The Senior Citizen Identity Card / Certificate verifies that a citizen has attained 60 years of age, facilitating access to elderly welfare concessions, hospital priority counters, and legal maintenance tribunal protections under the Maintenance and Welfare of Parents and Senior Citizens Act. This is an offline/in-person service handled via local bodies and Social Justice offices, not a standalone online e-District card application.",
      ml: "മാതാപിതാക്കളുടെയും മുതിർന്ന പൗരന്മാരുടെയും സംരക്ഷണവും ക്ഷേമവും ഉറപ്പാക്കുന്ന നിയമപ്രകാരമുള്ള ആനുകൂല്യങ്ങൾ, ആശുപത്രി മുൻഗണനകൾ, ഇളവുകൾ എന്നിവ ലഭിക്കുന്നതിനായി 60 വയസ്സ് തികഞ്ഞവർക്ക് നൽകുന്ന സേവനമാണിത്. ഇത് ഇ-ഡിസ്ട്രിക്റ്റ് വഴിയുള്ള ഓൺലൈൻ കാർഡ് അപേക്ഷയല്ല; തദ്ദേശസ്ഥാപനങ്ങളിലോ സാമൂഹികനീതി വകുപ്പ് ഓഫീസുകളിലോ നേരിട്ട് അപേക്ഷിച്ചു നേടേണ്ടതാണ്."
    },
    eligibility: {
      en: [
        "Permanent resident of Kerala",
        "Completed 60 years of age and above",
        "Must satisfy the documentation requirements of the concerned Local Self Government institution or Social Justice office"
      ],
      ml: [
        "കേരളത്തിലെ സ്ഥിരതാമസക്കാരനായിരിക്കണം",
        "60 വയസ്സോ അതിൽ കൂടുതലോ പ്രായം പൂർത്തിയായിരിക്കണം",
        "ബന്ധപ്പെട്ട തദ്ദേശ സ്വയംഭരണ സ്ഥാപനമോ സാമൂഹികനീതി വകുപ്പോ ആവശ്യപ്പെടുന്ന രേഖകൾ ഹാജരാക്കണം"
      ]
    },
    documents: {
      en: [
        "Proof of Date of Birth / Age (SSLC Book / Passport / Birth Certificate / Electoral ID / accepted government proof)",
        "Aadhaar Card or accepted official identity proof",
        "Proof of Residence (Ration Card / Voter ID / Residential Certificate)",
        "Recent passport-size photographs",
        "Prescribed local application form (obtained from Grama Panchayat / Municipality front office)"
      ],
      ml: [
        "ജനനത്തീയതി / പ്രായം തെളിയിക്കുന്ന രേഖ (എസ്.എസ്.എൽ.സി ബുക്ക് / പാസ്‌പോർട്ട് / ജനന സർട്ടിഫിക്കറ്റ് / ഇലക്ഷൻ ഐഡി / അംഗീകൃത സർക്കാർ രേഖ)",
        "ആധാർ കാർഡ് അല്ലെങ്കിൽ മറ്റ് ഔദ്യോഗിക തിരിച്ചറിയൽ രേഖ",
        "താമസരേഖ (റേഷൻ കാർഡ് / വോട്ടർ ഐഡി)",
        "സമീപകാലത്ത് എടുത്ത പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ",
        "പഞ്ചായത്ത് / മുനിസിപ്പാലിറ്റി ഫ്രണ്ട് ഓഫീസിൽ നിന്നുള്ള നിശ്ചിത അപേക്ഷാഫോറം"
      ]
    },
    howToApply: {
      en: "Submit the physical application along with age proof, residence proof, and photographs to the front office of your local Grama Panchayat, Municipality, Corporation, or the local Social Justice / ICDS office.",
      ml: "പൂരിപ്പിച്ച അപേക്ഷാഫോറം പ്രായം തെളിയിക്കുന്ന രേഖകൾ, താമസരേഖ, ഫോട്ടോ എന്നിവ സഹിതം സ്വന്തം ഗ്രാമപഞ്ചായത്ത് / നഗരസഭ / കോർപ്പറേഷൻ ഫ്രണ്ട് ഓഫീസിലോ സാമൂഹികനീതി വകുപ്പ് ഓഫീസിലോ നേരിട്ട് സമർപ്പിക്കുക."
    },
    steps: {
      en: [
        "Obtain the Senior Citizen Card application form from the concerned Grama Panchayat or Municipality front office",
        "Attach copies of accepted age proof (certifying 60+ years), address proof, and photographs",
        "Submit the application to the designated front-office counter or welfare section",
        "Local body / Social Justice officials verify age and residency credentials",
        "Upon verification, receive the Senior Citizen Card or certification as issued by the local authority"
      ],
      ml: [
        "ഗ്രാമപഞ്ചായത്ത് അല്ലെങ്കിൽ മുനിസിപ്പാലിറ്റി ഫ്രണ്ട് ഓഫീസിൽ നിന്ന് അപേക്ഷാഫോറം വാങ്ങുക",
        "60 വയസ്സ് പൂർത്തിയായെന്ന് വ്യക്തമാക്കുന്ന പ്രായരേഖ, താമസരേഖ, ഫോട്ടോ എന്നിവ അപേക്ഷയോടൊപ്പം വെക്കുക",
        "ഫ്രണ്ട് ഓഫീസ് കൗണ്ടറിലോ ക്ഷേമകാര്യ വിഭാഗത്തിലോ അപേക്ഷ സമർപ്പിക്കുക",
        "ഉദ്യോഗസ്ഥർ രേഖകൾ പരിശോധിച്ച് പ്രായവും താമസവും ഉറപ്പുവരുത്തുന്നു",
        "പരിശോധന പൂർത്തിയായ ശേഷം തദ്ദേശസ്ഥാപനം നൽകുന്ന തിരിച്ചറിയൽ കാർഡോ സാക്ഷ്യപത്രമോ കൈപ്പറ്റുക"
      ]
    },
    fees: {
      en: "Free (₹0) or nominal local body application counter fee where prescribed.",
      ml: "സൗജന്യം (₹0) അല്ലെങ്കിൽ തദ്ദേശസ്ഥാപനം നിശ്ചയിച്ചിട്ടുള്ള നാമമാത്രമായ അപേക്ഷാ ഫീസ്."
    },
    validity: {
      en: "Lifetime validity once issued.",
      ml: "ആജീവനാന്ത സാധുത."
    },
    officialUrl: "https://sjd.kerala.gov.in/programs.php",
    importantNotes: {
      en: [
        "NOT an online e-District service: Do not search for a direct digital card download on e-District. Applications are processed locally/offline.",
        "National identity credentials such as Aadhaar, Passport, and Voter ID stating date of birth are also accepted across government departments as legal proof of senior citizen age.",
        "Exact counter formats and issuance routines can vary depending on the respective Grama Panchayat, Municipality, or Corporation."
      ],
      ml: [
        "ഇതൊരു ഇ-ഡിസ്ട്രിക്റ്റ് ഓൺലൈൻ സർവീസല്ല: ഓൺലൈൻ വഴി കാർഡ് ഡൗൺലോഡ് ചെയ്യാൻ സാധിക്കില്ല; തദ്ദേശസ്ഥാപനങ്ങളിൽ നേരിട്ടാണ് അപേക്ഷിക്കേണ്ടത്.",
        "ജനനത്തീയതി രേഖപ്പെടുത്തിയ ആധാർ, പാസ്‌പോർട്ട്, വോട്ടർ ഐഡി എന്നിവയും നിയമപരമായി മുതിർന്ന പൗരന്മാരുടെ പ്രായം തെളിയിക്കാൻ സ്വീകാര്യമാണ്.",
        "ഓരോ പഞ്ചായത്തിലും നഗരസഭയിലും അപേക്ഷ സ്വീകരിക്കുന്നതിലും കാർഡ് നൽകുന്നതിലും ചെറിയ പ്രാദേശിക വ്യത്യാസങ്ങൾ ഉണ്ടായേക്കാം."
      ]
    }
  },

  // ====================================================
  // SERVICE #114: eHealth Hospital OP Registration & UHID
  // ====================================================
  {
    id: "e-health-hospital-op-registration",
    category: "government",
    icon: "🏥",
    name: {
      en: "eHealth Hospital OP Registration",
      ml: "ഇ-ഹെൽത്ത് ഓൺലൈൻ ഒ.പി രജിസ്ട്രേഷൻ"
    },
    summary: {
      en: "Online outpatient (OP) token booking and creation/lookup of the 16-digit Unique Health Identifier (UHID) across participating Kerala Government hospitals.",
      ml: "കേരളത്തിലെ തെരഞ്ഞെടുക്കപ്പെട്ട സർക്കാർ ആശുപത്രികളിലേക്ക് മുൻകൂട്ടി ഒ.പി ടോക്കൺ ബുക്ക് ചെയ്യാനും 16 അക്ക ഹെൽത്ത് ഐഡി (UHID) നേടാനുമുള്ള ഓൺലൈൻ സംവിധാനം."
    },
    description: {
      en: "eHealth Kerala is the state government's digital health mission platform. It enables citizens to register for a permanent 16-digit Unique Health Identifier (UHID) and book outpatient (OP) clinic appointments online up to 7 days in advance at participating Government Medical Colleges, District Hospitals, Taluk Hospitals, and Family Health Centres (FHCs), cutting down queue times.",
      ml: "കേരള ആരോഗ്യവകുപ്പ് നടപ്പിലാക്കിയ ഇ-ഹെൽത്ത് പോർട്ടൽ വഴി പൗരന്മാർക്ക് സ്ഥിരമായ 16 അക്ക യുണീക് ഹെൽത്ത് ഐഡി (UHID) സ്വന്തമാക്കാനും, സർക്കാർ മെഡിക്കൽ കോളേജുകൾ, ജനറൽ/താലൂക്ക് ആശുപത്രികൾ, കുടുംബാരോഗ്യ കേന്ദ്രങ്ങൾ എന്നിവിടങ്ങളിലേക്ക് 7 ദിവസം മുൻപ് വരെ മുൻകൂട്ടി ഒ.പി അപ്പോയിന്റ്മെന്റുകൾ ബുക്ക് ചെയ്യാനും സാധിക്കുന്നു."
    },
    eligibility: {
      en: [
        "Any citizen seeking outpatient (OP) consultation at participating eHealth Kerala government hospitals",
        "Must possess an active mobile number for receiving booking confirmation and token SMS"
      ],
      ml: [
        "ഇ-ഹെൽത്ത് സൗകര്യമുള്ള സർക്കാർ ആശുപത്രികളിൽ ഒ.പി ചികിത്സ ആവശ്യമുള്ള ഏതൊരു വ്യക്തിക്കും",
        "ബുക്കിംഗ് സന്ദേശങ്ങൾ ലഭിക്കുന്നതിനായി സജീവമായ ഒരു മൊബൈൽ നമ്പർ ഉണ്ടായിരിക്കണം"
      ]
    },
    documents: {
      en: [
        "Aadhaar details or basic demographic information for initial profile & 16-digit UHID generation",
        "Existing 16-digit UHID number (if already registered under eHealth)",
        "Active mobile number for OTP and booking confirmation SMS"
      ],
      ml: [
        "പ്രാഥമിക വിവരങ്ങളും 16 അക്ക UHID നമ്പറും ലഭിക്കുന്നതിനായി ആധാർ വിവരങ്ങൾ",
        "നേരത്തെ രജിസ്റ്റർ ചെയ്തവരാണെങ്കിൽ 16 അക്ക UHID നമ്പർ",
        "ഒ.ടി.പിയും ടോക്കൺ വിവരങ്ങളും ലഭിക്കുന്നതിനുള്ള മൊബൈൽ നമ്പർ"
      ]
    },
    howToApply: {
      en: "Log in to the official eHealth Kerala portal (ehealth.kerala.gov.in), register or enter your 16-digit UHID, select the hospital, department, and doctor/slot, and generate the advance OP token.",
      ml: "ഔദ്യോഗിക ഇ-ഹെൽത്ത് പോർട്ടലിൽ (ehealth.kerala.gov.in) ലോഗിൻ ചെയ്ത് 16 അക്ക UHID നൽകി, ആശുപത്രിയും ഡിപ്പാർട്ട്മെന്റും തീയതിയും തിരഞ്ഞെടുത്ത് മുൻകൂട്ടി ഒ.പി ടോക്കൺ ബുക്ക് ചെയ്യുക."
    },
    steps: {
      en: [
        "Visit the eHealth Kerala portal (ehealth.kerala.gov.in) and choose 'Online Appointment Booking'",
        "Register your profile with mobile number and demographic details to generate your 16-digit UHID, or log in with your existing UHID",
        "Select the district, hospital, specialty/department, and consultation date (up to 7 days in advance)",
        "Choose an available time slot and confirm the booking",
        "Receive the booking confirmation SMS containing the token number and scheduled arrival time",
        "Present the token SMS or printout directly at the hospital eHealth counter on the consultation day"
      ],
      ml: [
        "ഇ-ഹെൽത്ത് പോർട്ടൽ (ehealth.kerala.gov.in) സന്ദർശിച്ച് 'Online Appointment Booking' തിരഞ്ഞെടുക്കുക",
        "മൊബൈൽ നമ്പർ നൽകി പ്രൊഫൈൽ ഉണ്ടാക്കി 16 അക്ക UHID നേടുക (നേരത്തെ ഉള്ളവർ UHID നൽകി ലോഗിൻ ചെയ്യുക)",
        "ജില്ല, ആശുപത്രി, ആവശ്യമുള്ള ഒ.പി വിഭാഗം, തീയതി (7 ദിവസം മുൻപ് വരെ) എന്നിവ തിരഞ്ഞെടുക്കുക",
        "ലഭ്യമായ സമയക്രമം (Time Slot) ഉറപ്പുവരുത്തി ബുക്കിംഗ് പൂർത്തിയാക്കുക",
        "ടോക്കൺ നമ്പറും എത്തേണ്ട സമയവും അടങ്ങിയ എസ്.എം.എസ് മൊബൈലിൽ ലഭിക്കും",
        "ആശുപത്രിയിൽ എത്തുമ്പോൾ ഈ ടോക്കൺ സന്ദേശം ഇ-ഹെൽത്ത് കൗണ്ടറിൽ കാണിച്ച് നേരിട്ട് ഒ.പിയിലേക്ക് പ്രവേശിക്കുക"
      ]
    },
    fees: {
      en: "Free (₹0)",
      ml: "സൗജന്യം (₹0)"
    },
    validity: {
      en: "UHID is permanent for a lifetime. The advance OP appointment token is valid specifically for the booked date and session.",
      ml: "16 അക്ക UHID ആജീവനാന്തം സാധുവാണ്. ഒ.പി ടോക്കൺ ബുക്ക് ചെയ്ത നിശ്ചിത ദിവസത്തേക്ക് മാത്രമേ സാധുതയുള്ളൂ."
    },
    officialUrl: "https://ehealth.kerala.gov.in/",
    importantNotes: {
      en: [
        "Not all government hospitals may have eHealth enabled yet; advance online booking applies only to participating eHealth-implemented hospitals.",
        "Advance appointment booking is available up to 7 days in advance, subject to slot availability and hospital outpatient schedules.",
        "Arrive at the hospital counter at least 15–20 minutes before your scheduled slot with your token SMS to avoid cancellation."
      ],
      ml: [
        "കേരളത്തിലെ എല്ലാ സർക്കാർ ആശുപത്രികളിലും ഈ സൗകര്യം നിലവിൽ വന്നിട്ടില്ല; ഇ-ഹെൽത്ത് സംവിധാനം നടപ്പിലാക്കിയ ആശുപത്രികളിൽ മാത്രമേ മുൻകൂട്ടി ബുക്കിംഗ് സാധ്യമാകൂ.",
        "ആശുപത്രിയിലെ ഒ.പി സമയക്രമത്തിനും ഒഴിവുകൾക്കും വിധേയമായി 7 ദിവസം മുൻപ് വരെ മാത്രമേ ടോക്കൺ എടുക്കാനാകൂ.",
        "എസ്.എം.എസ് ആയി ലഭിച്ച സമയത്തിന് 15-20 മിനിറ്റ് മുൻപ് തന്നെ ആശുപത്രിയിലെ ഇ-ഹെൽത്ത് കൗണ്ടറിലെത്താൻ ശ്രദ്ധിക്കുക."
      ]
    }
  },

  // ==========================================
  // SERVICE #115: KASP Health Insurance Scheme
  // ==========================================
  {
    id: "kasp-health-insurance-scheme",
    category: "government",
    icon: "🛡️",
    name: {
      en: "KASP Health Insurance Scheme",
      ml: "കാരുണ്യ ആരോഗ്യ സുരക്ഷാ പദ്ധതി (KASP)"
    },
    summary: {
      en: "Cashless health coverage of up to ₹5,00,000 per eligible beneficiary family per year for secondary and tertiary hospitalization across empanelled hospitals.",
      ml: "അർഹരായ കുടുംബങ്ങൾക്ക് സർക്കാർ-സ്വകാര്യ എംപാനൽഡ് ആശുപത്രികളിൽ പ്രതിവർഷം 5 ലക്ഷം രൂപ വരെ സൗജന്യ കിടത്തിച്ചികിത്സ ഉറപ്പാക്കുന്ന ആരോഗ്യ ഇൻഷുറൻസ് പദ്ധതി."
    },
    description: {
      en: "Karunya Arogya Suraksha Padhathi (KASP), implemented by the State Health Agency (SHA) Kerala under the Health & Family Welfare Department, integrates the state's healthcare initiatives with Ayushman Bharat PM-JAY. It provides cashless inpatient hospitalization benefits of up to ₹5,00,000 per family per year across listed secondary and tertiary treatments in empanelled government and private network hospitals. This is an institutional cashless health coverage benefit, not an unrestricted direct cash payment.",
      ml: "സ്റ്റേറ്റ് ഹെൽത്ത് ഏജൻസി (SHA) നടപ്പിലാക്കുന്ന കാരുണ്യ ആരോഗ്യ സുരക്ഷാ പദ്ധതി (KASP), അർഹരായ ഗുണഭോക്താക്കൾക്ക് പ്രതിവർഷം 5 ലക്ഷം രൂപ വരെ സൗജന്യ ക്യാഷ്‌ലെസ്സ് കിടത്തിച്ചികിത്സ നൽകുന്ന പദ്ധതിയാണ്. അംഗീകൃത സർക്കാർ, സ്വകാര്യ ആശുപത്രികളിലെ നിശ്ചിത ചികിത്സാ പാക്കേജുകൾക്കാണ് ഈ പരിരക്ഷ ലഭിക്കുന്നത്. ഇത് നേരിട്ട് പണമായി നൽകുന്ന സഹായമല്ല, ആശുപത്രികൾ വഴിയുള്ള സൗജന്യ ചികിത്സാ ആനുകൂല്യമാണ്."
    },
    eligibility: {
      en: [
        "Eligible families registered under the National Food Security Act (NFSA) database (Priority / AAY - Pink and Yellow ration card holders)",
        "Officially enrolled non-priority vulnerable groups recognized by the Government of Kerala / State Health Agency",
        "Must be listed as an active beneficiary family in the official KASP/PM-JAY beneficiary portal"
      ],
      ml: [
        "ഭക്ഷ്യഭദ്രതാ നിയമപ്രകാരം മുൻഗണനാ വിഭാഗത്തിൽ ഉൾപ്പെട്ട റേഷൻ കാർഡുള്ളവർ (മഞ്ഞ, പിങ്ക് റേഷൻ കാർഡുകൾ)",
        "സർക്കാർ പ്രത്യേകമായി പദ്ധതിയിൽ ഉൾപ്പെടുത്തിയിട്ടുള്ള മറ്റ് അർഹരായ കുടുംബങ്ങൾ",
        "ഔദ്യോഗിക KASP ഡാറ്റാബേസിൽ പേരുള്ള കുടുംബാംഗങ്ങൾക്ക് മാത്രമേ ആനുകൂല്യം ലഭിക്കൂ"
      ]
    },
    documents: {
      en: [
        "NFSA Ration Card (Pink or Yellow Card) showing all family member names",
        "Aadhaar Card of the patient and family members for biometric / e-KYC verification",
        "Existing KASP / Ayushman Bharat e-Card (if already generated)",
        "Active mobile number linked with the ration/Aadhaar record"
      ],
      ml: [
        "കുടുംബാംഗങ്ങളുടെ പേരുവിവരങ്ങൾ ഉൾപ്പെട്ട മുൻഗണനാ റേഷൻ കാർഡ് (മഞ്ഞ അല്ലെങ്കിൽ പിങ്ക്)",
        "രോഗിയുടെയും കുടുംബാംഗങ്ങളുടെയും ആധാർ കാർഡ് (ഇ-കെ.വൈ.സി പരിശോധനയ്ക്കായി)",
        "നേരത്തെ എടുത്തിട്ടുള്ള KASP / ആയുഷ്മാൻ കാർഡ് (ഉണ്ടെങ്കിൽ)",
        "ലിങ്ക് ചെയ്തിട്ടുള്ള സജീവമായ മൊബൈൽ നമ്പർ"
      ]
    },
    howToApply: {
      en: "Check eligibility using your Ration Card / Aadhaar details at the KASP Helpdesk (Arogyamithra kiosk) in any empanelled hospital or an authorized Akshaya Centre to generate the e-Card.",
      ml: "അംഗീകൃത ആശുപത്രികളിലെ KASP ഹെൽപ് ഡെസ്കിലോ (ആരോഗ്യമിത്ര കൗണ്ടർ) അക്ഷയ കേന്ദ്രങ്ങളിലോ റേഷൻ കാർഡും ആധാറും നൽകി യോഗ്യത പരിശോധിച്ച് ഇ-കാർഡ് കൈപ്പറ്റുക."
    },
    steps: {
      en: [
        "Visit the official State Health Agency portal (sha.kerala.gov.in) or your nearest Akshaya Centre / hospital KASP kiosk",
        "Verify your family's inclusion in the KASP database using your Ration Card number",
        "Complete Aadhaar e-KYC verification for individual family members at the Arogyamithra desk or Akshaya Centre",
        "Generate and receive the KASP beneficiary e-Card",
        "Present the e-Card and Ration Card at any empanelled network hospital during admission for cashless pre-authorized treatment"
      ],
      ml: [
        "സ്റ്റേറ്റ് ഹെൽത്ത് ഏജൻസി വെബ്സൈറ്റ് (sha.kerala.gov.in), അക്ഷയ കേന്ദ്രം അല്ലെങ്കിൽ ആശുപത്രിയിലെ KASP കിയോസ്ക് സന്ദർശിക്കുക",
        "റേഷൻ കാർഡ് നമ്പർ നൽകി കുടുംബത്തിന് പദ്ധതിയിൽ അർഹതയുണ്ടോ എന്ന് പരിശോധിക്കുക",
        "ആരോഗ്യമിത്ര കൗണ്ടറിലോ അക്ഷയയിലോ ആധാർ നൽകി ഇ-കെ.വൈ.സി പൂർത്തിയാക്കുക",
        "KASP ആയുഷ്മാൻ ഇ-കാർഡ് പ്രിന്റ് ചെയ്ത് എടുക്കുക",
        "ചികിത്സ ആവശ്യമുള്ളപ്പോൾ എംപാനൽ ചെയ്ത ആശുപത്രിയിലെ KASP ഡെസ്കിൽ കാർഡ് കാണിച്ച് സൗജന്യ ചികിത്സ നേടുക"
      ]
    },
    fees: {
      en: "Free (₹0 for eligible treatment up to package limits; e-card generation at Akshaya may incur nominal service charge).",
      ml: "സൗജന്യം (ചികിത്സാ പരിധി വരെ പണം നൽകേണ്ടതില്ല; അക്ഷയ കേന്ദ്രങ്ങളിൽ കാർഡ് പ്രിന്റ് എടുക്കുന്നതിന് നിശ്ചിത നിരക്ക് ബാധകമായേക്കാം)."
    },
    validity: {
      en: "Annual benefit coverage up to ₹5,00,000 per family, resetting every financial/policy year subject to continuous NFSA eligibility.",
      ml: "പ്രതിവർഷം കുടുംബത്തിന് 5 ലക്ഷം രൂപ വരെയാണ് പരിരക്ഷ. ഓരോ വർഷവും റേഷൻ കാർഡ് യോഗ്യതയ്ക്കനുസരിച്ച് പരിരക്ഷ പുതുക്കപ്പെടുന്നു."
    },
    officialUrl: "https://sha.kerala.gov.in/",
    importantNotes: {
      en: [
        "Treatment coverage is up to ₹5,00,000 per family per year on a family-floater basis. This is not a cash grant or bank deposit; it applies strictly as cashless hospitalization at empanelled healthcare facilities.",
        "Cashless benefits are subject to defined package rates, medical pre-authorization, and admission in network hospitals.",
        "General non-priority white card holders are generally not covered under KASP unless qualified through specific state emergency directives."
      ],
      ml: [
        "പ്രതിവർഷം കുടുംബത്തിന് പരമാവധി 5 ലക്ഷം രൂപ വരെയുള്ള ചികിത്സാ ആനുകൂല്യമാണിത്. ഇത് പണമായി ബാങ്കിലേക്ക് നൽകുന്നതല്ല, അംഗീകൃത ആശുപത്രികളിലെ സൗജന്യ ചികിത്സയിലൂടെ മാത്രമേ ലഭിക്കൂ.",
        "പദ്ധതിക്ക് കീഴിൽ ലിസ്റ്റ് ചെയ്തിട്ടുള്ള നിശ്ചിത രോഗങ്ങൾക്കും സർജറികൾക്കും മുൻകൂർ അനുമതിയോടെയാണ് (Pre-authorization) ക്യാഷ്‌ലെസ്സ് ചികിത്സ ലഭ്യമാക്കുന്നത്.",
        "വെള്ള റേഷൻ കാർഡുള്ള പൊതുവിഭാഗക്കാർ സാധാരണയായി ഈ പദ്ധതിക്ക് കീഴിൽ വരുന്നതല്ല."
      ]
    }
  },

  // ==========================================
  // SERVICE #130: Burial / Cremation Permit
  // ==========================================
  {
    id: "burial-cremation-permit",
    category: "government",
    icon: "🕊️",
    name: {
      en: "Burial / Cremation Permit",
      ml: "ശവസംസ്കാര അനുമതി (ശ്മശാന അനുമതി)"
    },
    summary: {
      en: "Civic permission and slot allocation for burial or cremation in public crematoriums or burial grounds operated by local self-government institutions.",
      ml: "തദ്ദേശസ്ഥാപനങ്ങളുടെ നിയന്ത്രണത്തിലുള്ള പൊതുശ്മശാനങ്ങളിൽ സംസ്കാരം നടത്തുന്നതിനുള്ള ഔദ്യോഗിക അനുമതിയും ബുക്കിംഗും."
    },
    description: {
      en: "This statutory local-government service provides official sanction and scheduling for the burial or cremation of deceased persons in public crematoriums (electric/gas facilities) or authorized burial grounds managed by Grama Panchayats, Municipalities, or Municipal Corporations. It serves as a necessary preliminary civic clearance prior to formal Death Certificate registration.",
      ml: "ഗ്രാമപഞ്ചായത്തുകൾ, നഗരസഭകൾ, കോർപ്പറേഷനുകൾ എന്നിവയുടെ അധീനതയിലുള്ള പൊതുശ്മശാനങ്ങളിൽ (ഇലക്ട്രിക്/ഗ്യാസ് ശ്മശാനങ്ങൾ ഉൾപ്പെടെ) സംസ്കാരം നടത്തുന്നതിന് തദ്ദേശസ്ഥാപനത്തിൽ നിന്ന് വാങ്ങേണ്ട മുൻകൂർ അനുമതിയാണിത്. മരണ സർട്ടിഫിക്കറ്റ് ലഭിക്കുന്നതിന് മുൻപുള്ള പ്രാഥമിക നടപടി കൂടിയാണിത്."
    },
    eligibility: {
      en: [
        "Immediate relatives, legal representatives, or authorized caretakers of the deceased",
        "Death occurred within the jurisdiction of the local authority, or the body is legally brought for rites with required permits",
        "Must possess authentic medical certification proving the cause of death"
      ],
      ml: [
        "മരണപ്പെട്ട വ്യക്തിയുടെ അടുത്ത ബന്ധുക്കൾക്കോ നിയമപരമായ അവകാശികൾക്കോ ചുമതലപ്പെടുത്തിയവർക്കോ അപേക്ഷിക്കാം",
        "മരണം സംഭവിച്ചത് തദ്ദേശസ്ഥാപന പരിധിയിലായിരിക്കണം, അല്ലെങ്കിൽ പുറത്തുനിന്ന് സംസ്കാരത്തിനായി കൊണ്ടുവരുന്നതിന് അനുമതി ഉണ്ടായിരിക്കണം",
        "മരണകാരണം വ്യക്തമാക്കുന്ന ഡോക്ടറുടെ സർട്ടിഫിക്കറ്റ് നിർബന്ധമാണ്"
      ]
    },
    documents: {
      en: [
        "Medical Certificate of Cause of Death issued by a registered medical practitioner / hospital intimation",
        "Identity proof of the applicant (Aadhaar / Voter ID)",
        "Identity proof of the deceased person (if available)",
        "No Objection Certificate (NOC) from Police (mandatory in case of unnatural or accidental deaths)",
        "Prescribed local body declaration form"
      ],
      ml: [
        "രജിസ്റ്റർ ചെയ്ത ഡോക്ടറോ ആശുപത്രിയോ നൽകിയ മരണകാരണം വ്യക്തമാക്കുന്ന മെഡിക്കൽ സർട്ടിഫിക്കറ്റ്",
        "അപേക്ഷകന്റെ തിരിച്ചറിയൽ രേഖ (ആധാർ / വോട്ടർ ഐഡി)",
        "മരണപ്പെട്ട വ്യക്തിയുടെ തിരിച്ചറിയൽ രേഖ (ലഭ്യമാണെങ്കിൽ)",
        "അസ്വാഭാവിക മരണമാണെങ്കിൽ പോലീസിൽ നിന്നുള്ള എൻ.ഒ.സി (NOC)",
        "തദ്ദേശസ്ഥാപനത്തിലെ നിശ്ചിത സത്യവാങ്മൂലം"
      ]
    },
    howToApply: {
      en: "Apply in-person at the health/sanitation section of the concerned Grama Panchayat, Municipality, or Corporation office, or online via K-SMART for urban local bodies where enabled.",
      ml: "ബന്ധപ്പെട്ട ഗ്രാമപഞ്ചായത്ത് / മുനിസിപ്പാലിറ്റി / കോർപ്പറേഷൻ ഓഫീസിലെ ആരോഗ്യവിഭാഗത്തിൽ നേരിട്ടോ, നഗരസഭാ പരിധിയിലാണെങ്കിൽ K-SMART സംവിധാനം വഴിയോ അപേക്ഷിക്കുക."
    },
    steps: {
      en: [
        "Obtain the Medical Certificate of Cause of Death from the attending physician or hospital authorities",
        "Approach the health/sanitation inspector or front-office desk at the jurisdictional local body office (or use urban K-SMART services)",
        "Submit the medical certificate, applicant ID, and police clearance (if unnatural death)",
        "Pay the prescribed local crematorium/burial user fee as fixed by the local body council",
        "Receive the official Burial/Cremation Permit receipt and slot slip",
        "Hand over the permit slip to the crematorium caretaker to conduct the funeral rites"
      ],
      ml: [
        "ചികിത്സിച്ച ഡോക്ടറിൽ നിന്നോ ആശുപത്രിയിൽ നിന്നോ മരണ സർട്ടിഫിക്കറ്റ് കൈപ്പറ്റുക",
        "തദ്ദേശസ്ഥാപനത്തിലെ ഹെൽത്ത് ഇൻസ്പെക്ടർ മുൻപാകെയോ ഫ്രണ്ട് ഓഫീസിലോ അപേക്ഷ സമർപ്പിക്കുക (നഗരങ്ങളിൽ K-SMART വഴിയും ലഭ്യമാണ്)",
        "മെഡിക്കൽ സർട്ടിഫിക്കറ്റ്, തിരിച്ചറിയൽ രേഖ, ആവശ്യമായ മറ്റ് അനുമതികൾ എന്നിവ നൽകുക",
        "തദ്ദേശസ്ഥാപനം നിശ്ചയിച്ചിട്ടുള്ള സംസ്കാര ഫീസ് അടയ്ക്കുക",
        "ശ്മശാന അനുമതി രസീത് കൈപ്പറ്റുക",
        "ശ്മശാനത്തിന്റെ ചുമതലയുള്ള ജീവനക്കാരന് രസീത് കൈമാറി സംസ്കാരം പൂർത്തിയാക്കുക"
      ]
    },
    fees: {
      en: "Determined independently by each local body council (typically ranges from ₹500 to ₹2,500 depending on gas/electric facility; often concessional or free for BPL families).",
      ml: "ഓരോ പഞ്ചായത്തും നഗരസഭയും നിശ്ചയിക്കുന്ന നിരക്കുകൾ വ്യത്യാസപ്പെട്ടിരിക്കും (സാധാരണയായി ₹500 മുതൽ ₹2,500 വരെ; ബി.പി.എൽ കുടുംബങ്ങൾക്ക് ഇളവുകൾ ലഭ്യമാണ്)."
    },
    validity: {
      en: "Valid strictly for the immediate scheduled funeral service.",
      ml: "നിശ്ചയിക്കപ്പെട്ട സംസ്കാര ചടങ്ങിന് മാത്രം സാധുതയുള്ളത്."
    },
    officialUrl: "https://ksmart.lsgkerala.gov.in/",
    importantNotes: {
      en: [
        "Requirements, exact user fees, and time slots vary by local body and crematorium infrastructure.",
        "In cases of unnatural death, post-mortem clearance and Police NOC are mandatory prior to issuance of permit.",
        "Obtaining this permit does not replace formal Death Registration; the formal Death Certificate must be registered separately within 21 days."
      ],
      ml: [
        "ഫീസും നിബന്ധനകളും ഓരോ തദ്ദേശ സ്വയംഭരണ സ്ഥാപനത്തിനും ശ്മശാനത്തിനും അനുസരിച്ച് വ്യത്യാസപ്പെടാം.",
        "അസ്വാഭാവിക മരണങ്ങളിൽ പോസ്റ്റ്‌മോർട്ടം റിപ്പോർട്ടും പോലീസിന്റെ എൻ.ഒ.സിയും നിർബന്ധമാണ്.",
        "ഇത് ശവസംസ്കാരത്തിനുള്ള അനുമതി മാത്രമാണ്; മരണ സർട്ടിഫിക്കറ്റിനായി 21 ദിവസത്തിനകം പ്രത്യേകം അപേക്ഷിക്കേണ്ടതാണ്."
      ]
    }
  },

  // ==========================================
  // SERVICE #131: Community Hall Booking
  // ==========================================
  {
    id: "community-hall-booking-lsgd",
    category: "government",
    icon: "🏛️",
    name: {
      en: "Community Hall Booking",
      ml: "പഞ്ചായത്ത് / മുനിസിപ്പൽ കമ്മ്യൂണിറ്റി ഹാൾ ബുക്കിംഗ്"
    },
    summary: {
      en: "Reservation and rent/deposit payment for public auditoriums, town halls, and community centers owned by Local Self Government institutions.",
      ml: "തദ്ദേശസ്ഥാപനങ്ങളുടെ ഉടമസ്ഥതയിലുള്ള ടൗൺ ഹാളുകൾ, കല്യാണമണ്ഡപങ്ങൾ, കമ്മ്യൂണിറ്റി ഹാളുകൾ എന്നിവ വാടകയ്ക്ക് ബുക്ക് ചെയ്യുന്ന സേവനം."
    },
    description: {
      en: "This local civic service enables citizens, cultural groups, and registered organizations to check availability, reserve dates, and pay rental tariffs and caution deposits for community halls, town halls, and auditoriums maintained by Grama Panchayats, Municipalities, or Municipal Corporations for marriages, meetings, and public events.",
      ml: "വിവാഹം, കുടുംബ സംഗമങ്ങൾ, പൊതുയോഗങ്ങൾ എന്നിവ നടത്തുന്നതിനായി ഗ്രാമപഞ്ചായത്തുകളുടെയും നഗരസഭകളുടെയും കീഴിലുള്ള കമ്മ്യൂണിറ്റി ഹാളുകൾ, ടൗൺ ഹാളുകൾ എന്നിവ മുൻകൂട്ടി തീയതി ഉറപ്പാക്കി വാടകയ്ക്ക് ബുക്ക് ചെയ്യുന്നതിനുള്ള സേവനമാണിത്."
    },
    eligibility: {
      en: [
        "Any citizen of legal age, association, or organization seeking venue for lawful functions",
        "Must agree to comply with local body waste disposal, green protocol, and sound system regulations"
      ],
      ml: [
        "നിയമപരമായ ആവശ്യങ്ങൾക്ക് ഹാൾ ആവശ്യമുള്ള ഏതൊരു വ്യക്തിക്കും സംഘടനകൾക്കും അപേക്ഷിക്കാം",
        "മാലിന്യ സംസ്കരണ നിബന്ധനകളും ഗ്രീൻ പ്രോട്ടോക്കോളും ശബ്ദനിയന്ത്രണ ചട്ടങ്ങളും പാലിക്കാൻ ബാധ്യസ്ഥരായിരിക്കണം"
      ]
    },
    documents: {
      en: [
        "Aadhaar Card or accepted photo identity proof of the applicant/organizer",
        "Written application stating nature of event, date, and required session (morning/evening/full day)",
        "Green Protocol and zero-plastic compliance undertaking",
        "Police NOC (if organizing large public assemblies or using high-power sound systems)"
      ],
      ml: [
        "അപേക്ഷകന്റെ ആധാർ കാർഡ് അല്ലെങ്കിൽ മറ്റ് ഔദ്യോഗിക തിരിച്ചറിയൽ രേഖ",
        "പരിപാടിയുടെ സ്വഭാവം, തീയതി, സമയം എന്നിവ വ്യക്തമാക്കുന്ന അപേക്ഷ",
        "ഗ്രീൻ പ്രോട്ടോക്കോൾ പാലിക്കുമെന്നും പ്ലാസ്റ്റിക് ഒഴിവാക്കുമെന്നുമുള്ള സത്യവാങ്മൂലം",
        "പൊതുപരിപാടികൾക്കോ ഉച്ചഭാഷിണി ഉപയോഗിക്കുന്നതിനോ പോലീസിൽ നിന്നുള്ള അനുമതി (ആവശ്യമെങ്കിൽ)"
      ]
    },
    howToApply: {
      en: "Apply in-person at the concerned Grama Panchayat / Municipality front office, or book online through the K-SMART portal for enabled urban local bodies.",
      ml: "ഗ്രാമപഞ്ചായത്ത് അല്ലെങ്കിൽ മുനിസിപ്പാലിറ്റി ഫ്രണ്ട് ഓഫീസിൽ നേരിട്ടോ, നഗരസഭകളിൽ K-SMART പോർട്ടൽ വഴിയോ തീയതി പരിശോധിച്ചു ബുക്ക് ചെയ്യാം."
    },
    steps: {
      en: [
        "Check hall availability for your desired date at the local body office or through K-SMART",
        "Submit the reservation application with applicant ID and function details",
        "Sign the waste management and Green Protocol undertaking",
        "Pay the prescribed advance rent and refundable caution deposit",
        "Receive the official Hall Allotment Order and booking receipt",
        "Refundable caution deposit is processed after event completion subject to clean premises inspection"
      ],
      ml: [
        "ആവശ്യമുള്ള തീയതിയിൽ ഹാൾ ഒഴിവുണ്ടോ എന്ന് തദ്ദേശസ്ഥാപനത്തിലോ K-SMART പോർട്ടലിലോ പരിശോധിക്കുക",
        "തിരിച്ചറിയൽ രേഖയും പരിപാടിയുടെ വിവരങ്ങളും ചേർത്ത് അപേക്ഷ സമർപ്പിക്കുക",
        "മാലിന്യ സംസ്കരണവും ഗ്രീൻ പ്രോട്ടോക്കോളും പാലിക്കുമെന്ന പത്രം ഒപ്പിട്ടു നൽകുക",
        "വാടകയും തിരികെ ലഭിക്കുന്ന കോഷൻ ഡെപ്പോസിറ്റും അടയ്ക്കുക",
        "ഹാൾ അലോട്ട്മെന്റ് ഓർഡറും രസീതും കൈപ്പറ്റുക",
        "പരിപാടിക്ക് ശേഷം ഹാൾ ശുചിയായി തിരികെ ഏൽപ്പിക്കുന്ന മുറയ്ക്ക് കോഷൻ ഡെപ്പോസിറ്റ് തിരികെ ലഭിക്കും"
      ]
    },
    fees: {
      en: "Variable: Set by individual local body councils according to hall capacity, air conditioning, and slot duration. Refundable caution deposit is mandatory.",
      ml: "നിരക്കുകൾ തദ്ദേശസ്ഥാപനങ്ങൾ തീരുമാനിക്കുന്നു (ഹാളിന്റെ വലിപ്പം, സൗകര്യങ്ങൾ, സമയം എന്നിവയ്ക്കനുസരിച്ച് വാടകയും കോഷൻ ഡെപ്പോസിറ്റും വ്യത്യാസപ്പെടും)."
    },
    validity: {
      en: "Valid strictly for the reserved date and allotted time slot.",
      ml: "ബുക്ക് ചെയ്ത തീയതിയിലേക്കും സമയത്തേക്കും മാത്രം സാധുതയുള്ളത്."
    },
    officialUrl: "https://ksmart.lsgkerala.gov.in/",
    importantNotes: {
      en: [
        "No single universal fee exists; tariffs, electricity meter charges, and caution deposits are fixed by the respective local body council resolutions.",
        "Kerala Green Protocol norms apply strictly: single-use plastic, thermocol plates, and non-biodegradable decorations are legally prohibited.",
        "Advance booking windows (such as 30 to 90 days in advance) vary per local institution."
      ],
      ml: [
        "എല്ലാ ഹാളുകൾക്കും ഒരേ നിരക്കല്ല; തദ്ദേശസ്ഥാപനത്തിന്റെ ഭരണസമിതി തീരുമാനിക്കുന്ന തുകയാണ് വാടകയായി നൽകേണ്ടത്.",
        "ഗ്രീൻ പ്രോട്ടോക്കോൾ കർശനമായി പാലിക്കണം: പ്ലാസ്റ്റിക്, തെർമോകോൾ വസ്തുക്കൾ ഉപയോഗിക്കുന്നത് നിരോധിച്ചിരിക്കുന്നു.",
        "എത്ര ദിവസം മുൻപ് ബുക്ക് ചെയ്യാം എന്നത് അതത് തദ്ദേശസ്ഥാപനങ്ങളുടെ നിയമങ്ങൾക്ക് വിധേയമായിരിക്കും."
      ]
    }
  },

  // ================================================================
  // SERVICE #132: Advertisement Permission (Single Record Multi-Taxonomy)
  // ================================================================
  {
    id: "lsgd-advertisement-permission",
    category: "government",
    relatedCategory: "industry-business",
    icon: "🪧",
    name: {
      en: "Advertisement Permission",
      ml: "തദ്ദേശസ്ഥാപന പരസ്യ അനുമതി (ഹോർഡിംഗ് / ബോർഡ്)"
    },
    summary: {
      en: "Statutory permission and advertisement tax assessment from Local Self Government bodies for erecting hoardings, banners, and commercial display boards.",
      ml: "പരസ്യ ബോർഡുകൾ, ഹോർഡിംഗുകൾ, ഫ്ലെക്സുകൾ എന്നിവ സ്ഥാപിക്കുന്നതിന് തദ്ദേശ സ്വയംഭരണ സ്ഥാപനങ്ങളിൽ നിന്ന് വാങ്ങേണ്ട നിയമപരമായ അനുമതി."
    },
    description: {
      en: "Under the Kerala Municipality Act and Kerala Panchayat Raj Act, any individual, business, or advertising agency wishing to display outdoor advertisements, promotional hoardings, arches, or commercial signboards within local body limits must obtain prior statutory permission and pay assessed advertisement tax. While used by businesses, this is fundamentally a local-government civic regulatory service.",
      ml: "തദ്ദേശ സ്വയംഭരണ സ്ഥാപനങ്ങളുടെ പരിധിയിൽ വാണിജ്യ പരസ്യ ബോർഡുകൾ, ഹോർഡിംഗുകൾ, ഡിജിറ്റൽ സ്ക്രീനുകൾ, മറ്റ് പരസ്യങ്ങൾ എന്നിവ സ്ഥാപിക്കുന്നതിന് മുൻകൂട്ടി പഞ്ചായത്ത് / നഗരസഭയിൽ നിന്ന് നേടേണ്ട ഔദ്യോഗിക അനുമതിയാണിത്. ബിസിനസ്സ് ആവശ്യങ്ങൾക്കായി ഉപയോഗിക്കുന്നുണ്ടെങ്കിലും ഇത് തദ്ദേശസ്ഥാപനങ്ങളുടെ നിയന്ത്രണത്തിലുള്ള ഒരു പൊതു അനുമതിയാണ്."
    },
    eligibility: {
      en: [
        "Business owners, advertising agencies, or individuals seeking to erect outdoor promotional displays",
        "Must comply with High Court guidelines, safety distances from roads, and public safety norms"
      ],
      ml: [
        "പരസ്യ ബോർഡുകളോ ഹോർഡിംഗുകളോ സ്ഥാപിക്കാൻ ആഗ്രഹിക്കുന്ന വ്യക്തികൾക്കോ സ്ഥാപനങ്ങൾക്കോ ഏജൻസികൾക്കോ അപേക്ഷിക്കാം",
        "ഹൈക്കോടതി നിർദ്ദേശങ്ങൾ, റോഡ് സുരക്ഷാ മാനദണ്ഡങ്ങൾ എന്നിവ പാലിച്ചിരിക്കണം"
      ]
    },
    documents: {
      en: [
        "Detailed structural drawing and dimension plan of the proposed advertisement/hoarding",
        "Structural Stability Certificate from an accredited civil engineer (for high-rise hoardings)",
        "Landowner NOC / Consent letter (if erected on private land or building)",
        "Traffic Police NOC (if proposed near major road junctions or traffic signals)",
        "Aadhaar / Trade registration proof of the applicant"
      ],
      ml: [
        "പരസ്യ ബോർഡിന്റെ അളവുകളും രൂപരേഖയും വ്യക്തമാക്കുന്ന പ്ലാൻ",
        "വലിയ ഹോർഡിംഗുകൾ ആണെങ്കിൽ സിവിൽ എൻജിനീയറുടെ സ്ട്രക്ചറൽ സ്റ്റെബിലിറ്റി സർട്ടിഫിക്കറ്റ്",
        "സ്വകാര്യ സ്ഥലത്തോ കെട്ടിടത്തിലോ ആണെങ്കിൽ സ്ഥല ഉടമയുടെ സമ്മതപത്രം (NOC)",
        "പ്രധാന റോഡുകളിലോ ജംഗ്ഷനുകളിലോ ആണെങ്കിൽ ട്രാഫിക് പോലീസിന്റെ അനുമതി",
        "അപേക്ഷകന്റെ ആധാർ അല്ലെങ്കിൽ വ്യാപാര സ്ഥാപനത്തിന്റെ വിവരങ്ങൾ"
      ]
    },
    howToApply: {
      en: "Apply in the prescribed format to the Secretary of the concerned Grama Panchayat, Municipality, or Corporation, or apply online via K-SMART for urban local bodies.",
      ml: "പൂരിപ്പിച്ച അപേക്ഷ തദ്ദേശസ്ഥാപന സെക്രട്ടറിക്ക് സമർപ്പിക്കുക, അല്ലെങ്കിൽ നഗരസഭകളിൽ K-SMART പോർട്ടൽ വഴി ഓൺലൈനായി അപേക്ഷ നൽകുക."
    },
    steps: {
      en: [
        "Prepare site plan, dimensions, and landowner consent for the proposed advertisement structure",
        "Submit the application form along with stability certificate at the local body engineering/revenue desk (or via K-SMART)",
        "Local body town planning / revenue officials conduct site verification for road safety compliance",
        "Upon preliminary clearance, pay the assessed advertisement tax and statutory permit fee",
        "Receive the official Advertisement Permission Order with assigned permit registration number",
        "Display the authorized permit number and expiry date visibly on the advertisement board"
      ],
      ml: [
        "പരസ്യം സ്ഥാപിക്കുന്ന സ്ഥലത്തിന്റെ പ്ലാൻ, വലിപ്പം, ഭൂവുടമയുടെ അനുമതിപത്രം എന്നിവ തയ്യാറാക്കുക",
        "തദ്ദേശസ്ഥാപന റവന്യൂ / എൻജിനീയറിങ് വിഭാഗത്തിലോ K-SMART വഴിയോ അപേക്ഷ സമർപ്പിക്കുക",
        "റോഡ് സുരക്ഷയും നിയമങ്ങളും പാലിച്ച് ഉദ്യോഗസ്ഥർ സ്ഥലം സന്ദർശിച്ച് പരിശോധന നടത്തുന്നു",
        "അനുമതി ലഭിച്ച ശേഷം നിശ്ചയിച്ച പരസ്യ നികുതിയും ലൈസൻസ് ഫീസും അടയ്ക്കുക",
        "അനുമതി പത്രവും രജിസ്ട്രേഷൻ നമ്പറും കൈപ്പറ്റുക",
        "പരസ്യ ബോർഡിൽ പെർമിറ്റ് നമ്പറും കാലാവധിയും വ്യക്തമായി പ്രദർശിപ്പിക്കുക"
      ]
    },
    fees: {
      en: "Calculated based on advertisement surface area (per square meter), zone classification, and display type as per local body council tax bylaws.",
      ml: "ബോർഡിന്റെ വലിപ്പം (ചതുരശ്ര മീറ്റർ), പരസ്യത്തിന്റെ സ്വഭാവം, തദ്ദേശസ്ഥാപനം നിശ്ചയിച്ച നികുതി നിരക്കുകൾ എന്നിവ അടിസ്ഥാനമാക്കിയാണ് ഫീസ് കണക്കാക്കുന്നത്."
    },
    validity: {
      en: "Typically valid for 1 financial year; renewable annually upon payment of regular advertisement tax.",
      ml: "സാധാരണയായി ഒരു സാമ്പത്തിക വർഷത്തേക്ക് സാധുവാണ്; വർഷം തോറും നികുതി അടച്ച് പുതുക്കാവുന്നതാണ്."
    },
    officialUrl: "https://ksmart.lsgkerala.gov.in/",
    importantNotes: {
      en: [
        "Single Unique Service: Category is primarily Government & Local, with discovery cross-referenced under Industry & Business.",
        "Non-biodegradable PVC flex boards are legally banned in Kerala; only approved recyclable/biodegradable materials are permissible.",
        "Unauthorized hoardings without an official permit number are liable to immediate confiscation and penal fines under LSGD rules."
      ],
      ml: [
        "ഇതൊരു ഏകീകൃത സർവീസാണ്: പ്രാഥമിക വിഭാഗം Government & Local ആണെങ്കിലും Industry & Business വഴിയും കണ്ടെത്താൻ സാധിക്കും.",
        "പി.വി.സി ഫ്ലെക്സ് ബോർഡുകൾ ഉപയോഗിക്കുന്നത് പൂർണ്ണമായും നിരോധിച്ചിരിക്കുന്നു; റീസൈക്കിൾ ചെയ്യാവുന്ന പരിസ്ഥിതി സൗഹൃദ വസ്തുക്കൾ മാത്രമേ ഉപയോഗിക്കാവൂ.",
        "പെർമിറ്റ് നമ്പറില്ലാതെ അനധികൃതമായി സ്ഥാപിക്കുന്ന ബോർഡുകൾ തദ്ദേശസ്ഥാപനങ്ങൾ നീക്കം ചെയ്യുകയും പിഴ ചുമത്തുകയും ചെയ്യും."
      ]
    }
  },  
    // ================================================================
    // SERVICE: Building Permit (KPBR / KMBR)
    // ================================================================
    {
      id: "building-permit",
      category: "government",
      relatedCategory: "other",
      subcategory: "building-construction",
      icon: "🏗️",
      name: {
        en: "Building Permit (KPBR / KMBR)",
        ml: "കെട്ടിട നിർമ്മാണ പെർമിറ്റ്"
      },
      summary: {
        en: "Statutory municipal permit authorizing construction, reconstruction, or structural alteration of residential or commercial buildings.",
        ml: "തദ്ദേശ സ്ഥാപന പരിധിയിൽ നിയമാനുസൃതമായി കെട്ടിടം നിർമ്മിക്കുന്നതിനോ പുനർനിർമ്മിക്കുന്നതിനോ ഉള്ള അനുമതി."
      },
      whoNeeds: {
        en: "Property owners proposing to construct, reconstruct, or physically alter a building within a Grama Panchayat, Municipality, or Corporation.",
        ml: "പഞ്ചായത്ത്, മുനിസിപ്പാലിറ്റി, കോർപ്പറേഷൻ പരിധികളിൽ പുതിയ വീടോ വാണിജ്യ കെട്ടിടമോ നിർമ്മിക്കാൻ ആഗ്രഹിക്കുന്ന വസ്തു ഉടമകൾ."
      },
      eligibility: {
        en: [
          "Applicant must hold lawful ownership/possession of the land parcel",
          "Proposed construction must comply with Kerala Panchayat Building Rules (KPBR) or Kerala Municipality Building Rules (KMBR)"
        ],
        ml: [
          "അപേക്ഷകന് ഭൂമിയുടെ നിയമാനുസൃത ഉടമസ്ഥാവകാശമോ കൈവശാവകാശമോ ഉണ്ടായിരിക്കണം",
          "നിർദ്ദിഷ്ട നിർമ്മാണം കേരള പഞ്ചായത്ത്/മുനിസിപ്പാലിറ്റി കെട്ടിട നിർമ്മാണ ചട്ടങ്ങൾ (KPBR/KMBR) പാലിക്കുന്നതായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Registered Title Deed (Aadhaaram) of property",
          "Current financial year Land Tax (Karam) Receipt",
          "Location Sketch and Possession Certificate from Village Officer",
          "Building drawings (site plan, service plan, floor plans) prepared and digitally endorsed by an LSGD Empanelled Architect or Licensed Engineer",
          "Applicant photo identity proof"
        ],
        ml: [
          "വസ്തുവിന്റെ രജിസ്റ്റർ ചെയ്ത ആധാരം",
          "നടപ്പു സാമ്പത്തിക വർഷത്തെ ഭൂനികുതി രസീത്",
          "വില്ലേജ് ഓഫീസിൽ നിന്നുള്ള ലൊക്കേഷൻ സ്കെച്ചും കൈവശാവകാശ സർട്ടിഫിക്കറ്റും",
          "അംഗീകൃത എൻജിനീയറോ ആർക്കിടെക്റ്റോ തയ്യാറാക്കി ഒപ്പിട്ട കെട്ടിട പ്ലാൻ, സൈറ്റ് പ്ലാൻ",
          "അപേക്ഷകന്റെ തിരിച്ചറിയൽ രേഖ"
        ]
      },
      additionalDocs: {
        en: [
          "NOC from Fire & Rescue Services, PCB, or Coastal Zone Management Authority (if plinth area or height exceeds statutory thresholds)"
        ],
        ml: [
          "നിർദ്ദിഷ്ട ഉയരമോ വിസ്തൃതിയോ ഉള്ള കെട്ടിടങ്ങൾക്ക് ഫയർ ഫോഴ്സ്, മലിനീകരണ നിയന്ത്രണ ബോർഡ്, തീരദേശ പരിപാലന അതോറിറ്റി എന്നിവയുടെ NOC"
        ]
      },
      whereToApply: {
        en: "Online via K-SMART Portal (ksmart.lsgkerala.gov.in) across Urban Local Bodies and integrated Grama Panchayats.",
        ml: "കെ-സ്മാർട്ട് പോർട്ടൽ (ksmart.lsgkerala.gov.in) വഴി ഓൺലൈനായി."
      },
      mode: {
        en: "Online (K-SMART)",
        ml: "ഓൺലൈൻ (കെ-സ്മാർട്ട്)"
      },
      steps: {
        en: [
          "Log in to the K-SMART portal using citizen credentials.",
          "Select 'Building Permit' module and link the empanelled licensee (architect/engineer) drafting the plans.",
          "Upload title deeds, tax receipts, village sketch, and digital CAD building drawings.",
          "Pay the statutory scrutiny fee and submit application for automated building rule scrutiny.",
          "Town Planning / Engineering wing conducts site verification and Secretary issues digital Building Permit."
        ],
        ml: [
          "കെ-സ്മാർട്ട് പോർട്ടലിൽ ലോഗിൻ ചെയ്യുക.",
          "ബിൽഡിംഗ് പെർമിറ്റ് വിഭാഗം തിരഞ്ഞെടുത്ത് പ്ലാൻ തയ്യാറാക്കിയ ലൈസൻസിയെ ബന്ധിപ്പിക്കുക.",
          "ആധാരം, നികുതി രസീത്, സ്കെച്ച്, ഡിജിറ്റൽ ഡ്രോയിംഗുകൾ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക.",
          "സ്ക്രൂട്ടിനി ഫീസ് അടച്ച് അപേക്ഷ സമർപ്പിക്കുക.",
          "എൻജിനീയറിംഗ് പരിശോധനകൾക്ക് ശേഷം തദ്ദേശ സെക്രട്ടറി ഡിജിറ്റൽ ബിൽഡിംഗ് പെർമിറ്റ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://ksmart.lsgkerala.gov.in/ui/web-portal/citizen-dashboard",
      notes: {
        en: "Low-risk residential constructions (up to 300 sq. m plinth area) qualify for automated self-certification permits under K-SMART rules.",
        ml: "300 ചതുരശ്ര മീറ്റർ വരെയുള്ള ചെറുകിട പാർപ്പിടങ്ങൾക്ക് കെ-സ്മാർട്ട് വഴി സ്വയം സാക്ഷ്യപ്പെടുത്തിയ ഇൻസ്റ്റന്റ് പെർമിറ്റ് ലഭ്യമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Permission for Road Cutting (Grama Panchayat)
    // ================================================================
    {
      id: "panchayat-road-cutting-permit",
      category: "government",
      icon: "🚧",
      name: {
        en: "Permission for Road Cutting (Grama Panchayat)",
        ml: "പഞ്ചായത്ത് റോഡ് കട്ടിംഗ് പെർമിറ്റ്"
      },
      summary: {
        en: "Statutory permission from Grama Panchayat to trench or cut public roads for laying drinking water pipes, electricity cables, or drainage.",
        ml: "കുടിവെള്ള പൈപ്പുകളോ ഇലക്ട്രിക് കേബിളുകളോ ഇടുന്നതിനായി ഗ്രാമപഞ്ചായത്ത് റോഡ് വെട്ടിപ്പൊളിക്കുന്നതിനുള്ള അനുമതി."
      },
      whoNeeds: {
        en: "Citizens or utility agencies needing to trench across or along public roads maintained by a Grama Panchayat.",
        ml: "പഞ്ചായത്ത് റോഡ് വഴി കുടിവെള്ള കണക്ഷനോ വൈദ്യുതി കേബിളോ എടുക്കാൻ ആഗ്രഹിക്കുന്ന ഗുണഭോക്താക്കൾ."
      },
      eligibility: {
        en: [
          "Hold valid utility sanction order (KWA water line or KSEB power cable installation)",
          "Must agree to deposit road restoration costs determined under government schedule of rates"
        ],
        ml: [
          "വാട്ടർ അതോറിറ്റിയുടെയോ കെ.എസ്.ഇ.ബിയുടെയോ കണക്ഷൻ അനുമതി പത്രം ഉണ്ടായിരിക്കണം",
          "സർക്കാർ നിരക്കനുസരിച്ചുള്ള റോഡ് പുനർനിർമ്മാണ തുക കെട്ടിവെക്കാൻ സമ്മതിക്കണം"
        ]
      },
      documents: {
        en: [
          "Sanction letter / feasibility order from KWA or KSEB",
          "Route sketch showing length, width, and road surface type (tarred, concrete, or earthen)",
          "Property tax receipt or land ownership proof of the connecting premises",
          "Photo identity proof of applicant"
        ],
        ml: [
          "വാട്ടർ അതോറിറ്റി അല്ലെങ്കിൽ കെ.എസ്.ഇ.ബി കണക്ഷൻ അനുമതി രേഖ",
          "റോഡ് വെട്ടിപ്പൊളിക്കേണ്ട നീളവും വീതിയും ഉപരിതലവും വ്യക്തമാക്കുന്ന റൂട്ട് സ്കെച്ച്",
          "വസ്തു നികുതി രസീത് അല്ലെങ്കിൽ ഉടമസ്ഥാവകാശ രേഖ",
          "അപേക്ഷകന്റെ തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online via K-SMART Portal (ksmart.lsgkerala.gov.in) or offline at the Grama Panchayat Front Office Counter.",
        ml: "കെ-സ്മാർട്ട് പോർട്ടൽ വഴിയോ ഗ്രാമപഞ്ചായത്ത് ഫ്രണ്ട് ഓഫീസ് കൗണ്ടർ വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Submit application via K-SMART or at Panchayat front desk along with alignment sketch.",
          "Assistant Engineer (LSGD Engineering Wing) conducts site inspection and calculates road restoration charges.",
          "Applicant remits the calculated restoration fee into the Panchayat treasury/account.",
          "Panchayat Secretary issues formal road cutting sanction order with mandatory execution timelines."
        ],
        ml: [
          "കെ-സ്മാർട്ട് വഴിയോ പഞ്ചായത്ത് ഓഫീസിലോ സ്കെച്ച് സഹിതം അപേക്ഷ നൽകുക.",
          "അസിസ്റ്റന്റ് എൻജിനീയർ സ്ഥലം പരിശോധിച്ച് പുനർനിർമ്മാണ ചാർജ്ജ് തിട്ടപ്പെടുത്തുന്നു.",
          "നിശ്ചയിച്ച തുക പഞ്ചായത്തിൽ അടയ്ക്കുക.",
          "സെക്രട്ടറി റോഡ് കട്ടിംഗ് അനുമതി ഉത്തരവ് നൽകുന്നു."
        ]
      },
      officialUrl: "https://ksmart.lsgkerala.gov.in/ui/web-portal/citizen-dashboard",
      notes: {
        en: "Road trenching is strictly prohibited during monsoon periods except for emergency public utility repairs.",
        ml: "മഴക്കാലത്ത് പൊതു റോഡുകൾ വെട്ടിപ്പൊളിക്കാൻ സാധാരണയായി അനുമതി നൽകാറില്ല."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Permission for Road Cutting (Municipalities / Corporations)
    // ================================================================
    {
      id: "municipality-corporation-road-cutting-permit",
      category: "government",
      icon: "🚧",
      name: {
        en: "Permission for Road Cutting (Municipalities / Corporations)",
        ml: "മുനിസിപ്പാലിറ്റി / കോർപ്പറേഷൻ റോഡ് കട്ടിംഗ് പെർമിറ്റ്"
      },
      summary: {
        en: "Formal municipal permit authorizing the trenching of urban roads, footpaths, or paved surfaces for utility installations.",
        ml: "നഗരസഭാ പരിധിയിലെ റോഡുകൾ വെട്ടിപ്പൊളിച്ച് യൂട്ടിലിറ്റി ലൈനുകൾ സ്ഥാപിക്കുന്നതിനുള്ള നഗരസഭാ അനുമതി."
      },
      whoNeeds: {
        en: "Property owners or contracting agencies in urban local bodies trenching municipal roads for pipe or cable lines.",
        ml: "മുനിസിപ്പാലിറ്റി അല്ലെങ്കിൽ കോർപ്പറേഷൻ പരിധിയിൽ കുടിവെള്ള, വൈദ്യുതി പൈപ്പുകൾ ഇടാൻ റോഡ് വെട്ടേണ്ടി വരുന്നവർ."
      },
      eligibility: {
        en: [
          "Premises located within an urban local body (Municipality or Corporation)",
          "Must have verified utility feasibility and agree to deposit municipal road restoration guarantees"
        ],
        ml: [
          "നഗരസഭാ പരിധിയിൽ ഉൾപ്പെടുന്ന സ്ഥലമായിരിക്കണം",
          "സർക്കാർ യൂട്ടിലിറ്റി അനുമതിയും റോഡ് പുനർനിർമ്മാണ ഫീസും നൽകാൻ ബാധ്യസ്ഥരായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "KWA or KSEB utility connection sanction memo",
          "Site alignment drawing with dimensions of trench and surface details (bitumen, interlock, concrete)",
          "Building tax receipt / assessment door number confirmation",
          "Applicant photo identity proof"
        ],
        ml: [
          "വാട്ടർ അതോറിറ്റി അല്ലെങ്കിൽ കെ.എസ്.ഇ.ബി കണക്ഷൻ അനുമതി പത്രം",
          "വെട്ടിപ്പൊളിക്കുന്ന സ്ഥലത്തിന്റെ അളവുകളും ഉപരിതലവും വ്യക്തമാക്കുന്ന സ്കെച്ച്",
          "കെട്ടിട നികുതി രസീത് / ഡോർ നമ്പർ വിവരങ്ങൾ",
          "അപേക്ഷകന്റെ തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online via K-SMART Citizen Portal (ksmart.lsgkerala.gov.in).",
        ml: "കെ-സ്മാർട്ട് പോർട്ടൽ (ksmart.lsgkerala.gov.in) വഴി ഓൺലൈനായി."
      },
      mode: {
        en: "Online (K-SMART)",
        ml: "ഓൺലൈൻ (കെ-സ്മാർട്ട്)"
      },
      steps: {
        en: [
          "Log in to K-SMART and submit request under 'Road Cutting Permission'.",
          "Upload utility sanction letter, alignment sketch, and property tax details.",
          "Municipal engineering wing inspects urban road stretch and issues restoration fee demand.",
          "Pay the prescribed charges online to receive the digitally signed road cutting clearance."
        ],
        ml: [
          "കെ-സ്മാർട്ട് പോർട്ടലിൽ 'Road Cutting Permission' തിരഞ്ഞെടുക്കുക.",
          "കണക്ഷൻ രേഖകളും സ്കെച്ചും സമർപ്പിക്കുക.",
          "എൻജിനീയറിംഗ് പരിശോധനയ്ക്ക് ശേഷം വരുന്ന ഫീസ് ഓൺലൈനായി അടയ്ക്കുക.",
          "ഡിജിറ്റൽ അനുമതി പത്രം ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://ksmart.lsgkerala.gov.in/ui/web-portal/citizen-dashboard",
      notes: {
        en: "Mandatory traffic safety signage and warning barriers must be deployed during urban road trenching.",
        ml: "നഗര റോഡുകളിൽ ജോലി ചെയ്യുമ്പോൾ ഗതാഗത സുരക്ഷാ ബോർഡുകളും ബാരിക്കേഡുകളും നിർബന്ധമായും സ്ഥാപിക്കണം."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Property Tax / Building Tax E-Payment
    // ================================================================
    {
      id: "building-property-tax-e-payment",
      category: "government",
      icon: "💳",
      name: {
        en: "Property Tax / Building Tax E-Payment",
        ml: "കെട്ടിട നികുതി ഇ-പേമെന്റ്"
      },
      summary: {
        en: "Online citizen service to pay half-yearly and annual building/property tax to local self-governments and download official receipts.",
        ml: "പഞ്ചായത്ത്, മുനിസിപ്പാലിറ്റി, കോർപ്പറേഷൻ എന്നിവയിലേക്കുള്ള കെട്ടിട നികുതി ഓൺലൈനായി അടയ്ക്കാനും രസീത് നേടാനുമുള്ള സംവിധാനം."
      },
      whoNeeds: {
        en: "Owners of assessed residential or commercial buildings located within any local body in Kerala.",
        ml: "കേരളത്തിലെ തദ്ദേശ സ്ഥാപനങ്ങളിൽ അസസ്സ് ചെയ്ത കെട്ടിടങ്ങളുള്ള എല്ലാ വസ്തു ഉടമകൾക്കും."
      },
      eligibility: {
        en: [
          "Building must have an assigned municipal or panchayat door number in the tax assessment register"
        ],
        ml: [
          "തദ്ദേശ സ്ഥാപനത്തിലെ നികുതി രജിസ്റ്ററിൽ രജിസ്റ്റർ ചെയ്ത കെട്ടിട നമ്പർ (Door Number) ഉണ്ടായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Local Body Name, Ward Number, and Building Door Number",
          "Assessment Number or previous property tax receipt details (no document upload required)"
        ],
        ml: [
          "തദ്ദേശ സ്ഥാപനത്തിന്റെ പേര്, വാർഡ് നമ്പർ, ഡോർ നമ്പർ",
          "അസസ്‌മെന്റ് നമ്പർ അല്ലെങ്കിൽ മുൻ വർഷത്തെ നികുതി രസീത് വിവരങ്ങൾ (രേഖകൾ അപ്‌ലോഡ് ചെയ്യേണ്ടതില്ല)"
        ]
      },
      whereToApply: {
        en: "K-SMART Quick Pay Portal (ksmart.lsgkerala.gov.in) or Sanchaya Portal (tax.lsgkerala.gov.in/epayment/).",
        ml: "കെ-സ്മാർട്ട് പോർട്ടൽ അല്ലെങ്കിൽ സഞ്ചയ പോർട്ടൽ വഴി ഓൺലൈനായി അല്ലെങ്കിൽ ഓഫീസ് കൗണ്ടറിൽ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Open K-SMART Quick Pay or Sanchaya e-payment portal.",
          "Select local body district and type (Panchayat / Municipality / Corporation).",
          "Enter ward number, door number, and sub-number.",
          "Verify assessed tax demand, owner name, and pending arrears.",
          "Complete payment via debit card, credit card, net banking, or UPI, and download verified digital receipt."
        ],
        ml: [
          "കെ-സ്മാർട്ട് അല്ലെങ്കിൽ സഞ്ചയ പോർട്ടൽ തുറക്കുക.",
          "ജില്ലയും തദ്ദേശ സ്ഥാപനവും തിരഞ്ഞെടുക്കുക.",
          "വാർഡ് നമ്പറും ഡോർ നമ്പറും നൽകി സെർച്ച് ചെയ്യുക.",
          "നികുതി ബാധ്യത പരിശോധിച്ച് UPI / കാർഡ് / നെറ്റ് ബാങ്കിംഗ് വഴി പണം അടയ്ക്കുക.",
          "ഡിജിറ്റൽ നികുതി രസീത് ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://ksmart.lsgkerala.gov.in/ui/web-portal/quick-pay",
      notes: {
        en: "Building tax is remitted half-yearly (First Half: April–September; Second Half: October–March). Distinct from state revenue land tax (Karam).",
        ml: "ഇത് തദ്ദേശ സ്ഥാപനത്തിലേക്കുള്ള കെട്ടിട നികുതിയാണ്; റവന്യൂ വില്ലേജ് ഓഫീസിൽ അടയ്ക്കുന്ന ഭൂനികുതിയിൽ (കരം) നിന്ന് വ്യത്യസ്തമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Extract of Property Tax Assessment Register
    // ================================================================
    {
      id: "assessment-register-extract",
      category: "government",
      icon: "📋",
      name: {
        en: "Extract of Property Tax Assessment Register",
        ml: "അസസ്‌‌മെന്റ് രജിസ്റ്റർ പകർപ്പ്"
      },
      summary: {
        en: "Certified extract from the local body tax assessment register confirming building ownership, plinth area, usage, and year of initial assessment.",
        ml: "കെട്ടിടത്തിന്റെ ഉടമസ്ഥത, വിസ്തീർണ്ണം, പണിത വർഷം (കെട്ടിടത്തിന്റെ വയസ്സ്) എന്നിവ സാക്ഷ്യപ്പെടുത്തി തദ്ദേശ സ്ഥാപനം നൽകുന്ന രേഖ."
      },
      whoNeeds: {
        en: "Building owners or legal successors requiring official proof of building age, plinth area, or municipal valuation for banking, court, or registry purposes.",
        ml: "കെട്ടിടത്തിന്റെ നിർമ്മാണ വർഷം, വിസ്തീർണ്ണം എന്നിവ ബാങ്ക് ലോൺ, കോടതി, ഇൻഷുറൻസ് ആവശ്യങ്ങൾക്കായി സാക്ഷ്യപ്പെടുത്തേണ്ടവർക്ക്."
      },
      eligibility: {
        en: [
          "Applicant must be the registered owner, occupant, or legal successor of the assessed building"
        ],
        ml: [
          "കെട്ടിടത്തിന്റെ രജിസ്റ്റർ ചെയ്ത ഉടമയോ, താമസക്കാരോ, അനന്തരാവകാശികളോ ആയിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Building Door Number and Ward Number",
          "Latest Property Tax Receipt",
          "Proof of ownership or legal tenancy",
          "Application stating reason for extraction"
        ],
        ml: [
          "കെട്ടിടത്തിന്റെ ഡോർ നമ്പറും വാർഡ് നമ്പറും",
          "ഏറ്റവും പുതിയ കെട്ടിട നികുതി രസീത്",
          "ഉടമസ്ഥാവകാശം തെളിയിക്കുന്ന രേഖ",
          "ആവശ്യം വ്യക്തമാക്കുന്ന അപേക്ഷ"
        ]
      },
      whereToApply: {
        en: "Online via K-SMART Portal (ksmart.lsgkerala.gov.in) or in person at the local body office.",
        ml: "കെ-സ്മാർട്ട് പോർട്ടൽ വഴിയോ തദ്ദേശ സ്വയംഭരണ സ്ഥാപനത്തിലോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Apply online on K-SMART or submit formal requisition letter to local body Secretary.",
          "Provide building door number and assessment year details.",
          "Pay statutory search and copy fee (₹20 to ₹50).",
          "Revenue wing verifies records against the master assessment register and issues certified extract."
        ],
        ml: [
          "കെ-സ്മാർട്ട് വഴിയോ തദ്ദേശ സ്ഥാപനത്തിലോ അപേക്ഷ നൽകുക.",
          "ഡോർ നമ്പർ വിവരങ്ങൾ നൽകുക.",
          "നിശ്ചിത ഫീസ് അടയ്ക്കുക.",
          "പരിശോധനയ്ക്ക് ശേഷം സാക്ഷ്യപ്പെടുത്തിയ അസസ്‌മെന്റ് രജിസ്റ്റർ പകർപ്പ് ലഭ്യമാകും."
        ]
      },
      officialUrl: "https://ksmart.lsgkerala.gov.in/ui/web-portal/citizen-dashboard",
      notes: {
        en: "Frequently required by chartered engineers and banks to calculate building depreciation and structural age.",
        ml: "കെട്ടിടത്തിന്റെ പഴക്കവും തേയ്മാനവും കണക്കാക്കാൻ ബാങ്കുകൾ സാധാരണയായി ആവശ്യപ്പെടുന്ന രേഖയാണിത്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Extract of Property Tax Demand Register
    // ================================================================
    {
      id: "demand-register-extract",
      category: "government",
      icon: "📑",
      name: {
        en: "Extract of Property Tax Demand Register",
        ml: "ഡിമാൻഡ് രജിസ്റ്റർ പകർപ്പ്"
      },
      summary: {
        en: "Certified statement from local body revenue records showing accrued tax liabilities, historical payments, and outstanding arrears on a building.",
        ml: "ഒരു കെട്ടിടത്തിന്മേൽ തദ്ദേശ സ്ഥാപനത്തിലേക്ക് അടച്ചതും കുടിശ്ശികയുള്ളതുമായ നികുതി വിവരങ്ങൾ വ്യക്തമാക്കുന്ന ഔദ്യോഗിക പകർപ്പ്."
      },
      whoNeeds: {
        en: "Property buyers conducting legal due diligence or property owners settling municipal revenue disputes.",
        ml: "വസ്തു വാങ്ങുന്നതിന് മുൻപ് മുൻകാല നികുതി കുടിശ്ശികകൾ ഒന്നുമില്ലെന്ന് ഉറപ്പുവരുത്താൻ ആഗ്രഹിക്കുന്നവർക്ക്."
      },
      eligibility: {
        en: [
          "Building owner or prospective buyer with verifiable interest in the immovable property"
        ],
        ml: [
          "കെട്ടിട ഉടമയ്ക്കോ വസ്തു വാങ്ങാൻ താല്പര്യമുള്ള വ്യക്തികൾക്കോ അപേക്ഷിക്കാം"
        ]
      },
      documents: {
        en: [
          "Building Door Number and Assessment Number",
          "Applicant identity proof",
          "Formal requisition application"
        ],
        ml: [
          "കെട്ടിട നമ്പർ, അസസ്‌മെന്റ് നമ്പർ",
          "അപേക്ഷകന്റെ തിരിച്ചറിയൽ രേഖ",
          "രേഖാമൂലമുള്ള അപേക്ഷ"
        ]
      },
      whereToApply: {
        en: "Online via K-SMART Portal (ksmart.lsgkerala.gov.in) or local body revenue counter.",
        ml: "കെ-സ്മാർട്ട് പോർട്ടൽ വഴിയോ തദ്ദേശ സ്ഥാപന റവന്യൂ വിഭാഗത്തിലോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Submit application online via K-SMART or directly at the municipal revenue desk.",
          "Enter door number and assessment account particulars.",
          "Pay statutory certified copy fee.",
          "Download or collect the official Demand Register ledger extract showing zero arrears or itemized dues."
        ],
        ml: [
          "കെ-സ്മാർട്ട് വഴിയോ നേരിട്ടോ അപേക്ഷ സമർപ്പിക്കുക.",
          "ഡോർ നമ്പർ വിവരങ്ങൾ നൽകി ഫീസ് അടയ്ക്കുക.",
          "കുടിശ്ശിക വിവരങ്ങൾ വ്യക്തമാക്കുന്ന ഡിമാൻഡ് രജിസ്റ്റർ പകർപ്പ് കൈപ്പറ്റുക."
        ]
      },
      officialUrl: "https://ksmart.lsgkerala.gov.in/ui/web-portal/citizen-dashboard",
      notes: {
        en: "Vital document to confirm that built property is free from local body recovery notices and municipal attachment orders.",
        ml: "കെട്ടിടത്തിന്മേൽ തദ്ദേശ സ്ഥാപനത്തിന്റെ ജപ്തി നടപടികളോ കുടിശ്ശികകളോ ഇല്ലെന്ന് ഉറപ്പാക്കാൻ ഇത് സഹായിക്കുന്നു."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Application for New Ration Card
    // ================================================================
    {
      id: "new-ration-card",
      category: "government",
      icon: "🍚",
      name: {
        en: "Application for New Ration Card",
        ml: "പുതിയ റേഷൻ കാർഡ് അപേക്ഷ"
      },
      summary: {
        en: "Statutory application to enroll an independent family unit into the Public Distribution System (PDS) to obtain subsidized food grains and a legal household card.",
        ml: "പുതിയൊരു കുടുംബത്തിന് റേഷൻ വിഹിതവും ഔദ്യോഗിക തിരിച്ചറിയൽ രേഖയുമായി റേഷൻ കാർഡ് ലഭ്യമാക്കുന്നതിനുള്ള അപേക്ഷ."
      },
      whoNeeds: {
        en: "Permanent resident households in Kerala residing as a domestic kitchen unit with members not enrolled in any other active ration card in India.",
        ml: "മറ്റ് റേഷൻ കാർഡുകളിൽ പേരില്ലാത്തതും ഒരു അടുക്കളയായി ജീവിക്കുന്നതുമായ പുതിയ കുടുംബങ്ങൾക്ക്."
      },
      eligibility: {
        en: [
          "Applicants must be permanent residents of Kerala",
          "No member of the household should be enrolled in another active PDS card across India",
          "Eldest adult female is legally designated as Head of Household (HOH) under NFSA rules"
        ],
        ml: [
          "കേരളത്തിൽ സ്ഥിരതാമസക്കാരായ കുടുംബമായിരിക്കണം",
          "കുടുംബാംഗങ്ങൾക്ക് ഇന്ത്യയിലെ മറ്റ് റേഷൻ കാർഡുകളിൽ സജീവ അംഗത്വം ഉണ്ടാകരുത്",
          "ദേശീയ ഭക്ഷ്യഭദ്രതാ നിയമപ്രകാരം കുടുംബത്തിലെ ഏറ്റവും മുതിർന്ന സ്ത്രീയായിരിക്കും കുടുംബനാഥ"
        ]
      },
      documents: {
        en: [
          "Identity proof for all family members (Aadhaar Card)",
          "Proof of residence (Local body residence certificate, registered rent agreement, or electricity bill)",
          "Surrender / Deletion Certificate from previous ration card or previous state PDS",
          "Income Certificate from Village Officer (if applying for Priority / AAY category)",
          "Passport size photograph of the eldest adult female member"
        ],
        ml: [
          "എല്ലാ കുടുംബാംഗങ്ങളുടെയും തിരിച്ചറിയൽ രേഖ (ആധാർ)",
          "താമസസ്ഥലം തെളിയിക്കുന്ന രേഖ (റസിഡൻസ് സർട്ടിഫിക്കറ്റ്, വാടകക്കരാർ അല്ലെങ്കിൽ കറണ്ട് ബിൽ)",
          "പഴയ കാർഡിൽ നിന്നുള്ള റിഡക്ഷൻ / സറണ്ടർ സർട്ടിഫിക്കറ്റ്",
          "വില്ലേജ് ഓഫീസറിൽ നിന്നുള്ള വരുമാന സർട്ടിഫിക്കറ്റ് (മുൻഗണനാ വിഭാഗത്തിന്)",
          "കുടുംബനാഥയായ മുതിർന്ന സ്ത്രീയുടെ ഫോട്ടോ"
        ]
      },
      whereToApply: {
        en: "Online via Civil Supplies e-Citizen Portal (ecitizen.civilsupplieskerala.gov.in) or through Akshaya Centres / Taluk Supply Office (TSO).",
        ml: "സിവിൽ സപ്ലൈസ് ഇ-സിറ്റിസൺ പോർട്ടൽ (ecitizen.civilsupplieskerala.gov.in) വഴിയോ അക്ഷയ കേന്ദ്രം / താലൂക്ക് സപ്ലൈ ഓഫീസ് വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to the e-Citizen portal or visit an Akshaya Centre.",
          "Select 'New Ration Card' application and enter member demographic and Aadhaar details.",
          "Upload residence proof, surrender certificates, and family photo.",
          "Rationing Inspector conducts field/database verification against NFSA exclusion criteria.",
          "Taluk Supply Officer (TSO) approves and assigns Fair Price Shop (ARD); download digital e-Ration card or collect smart card."
        ],
        ml: [
          "ഇ-സിറ്റിസൺ പോർട്ടലിലോ അക്ഷയ കേന്ദ്രത്തിലോ അപേക്ഷ നൽകുക.",
          "കുടുംബാംഗങ്ങളുടെ വിവരങ്ങളും ആധാർ നമ്പറും രേഖപ്പെടുത്തുക.",
          "താമസ രേഖകളും പഴയ കാർഡിലെ ഒഴിവാക്കൽ സർട്ടിഫിക്കറ്റും അപ്‌ലോഡ് ചെയ്യുക.",
          "റേഷനിംഗ് ഇൻസ്പെക്ടറുടെ പരിശോധനയ്ക്ക് ശേഷം താലൂക്ക് സപ്ലൈ ഓഫീസർ (TSO) കാർഡ് അനുവദിക്കുന്നു.",
          "ഡിജിറ്റൽ ഇ-റേഷൻ കാർഡ് ഓൺലൈനായി ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://ecitizen.civilsupplieskerala.gov.in/",
      notes: {
        en: "Card color/category (Antyodaya Anna Yojana Yellow, Priority Pink, Non-Priority Subsidy Blue, Non-Priority White) is strictly determined by statutory state criteria.",
        ml: "വരുമാനവും ആസ്തിയും മാനദണ്ഡമാക്കി മഞ്ഞ, പിങ്ക്, നീല, വെള്ള എന്നീ വിഭാഗങ്ങളിലാണ് റേഷൻ കാർഡുകൾ അനുവദിക്കുന്നത്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Addition of Member in Ration Card
    // ================================================================
    {
      id: "ration-card-add-member",
      category: "government",
      icon: "👶",
      name: {
        en: "Addition of Member in Ration Card",
        ml: "റേഷൻ കാർഡിൽ പുതിയ അംഗത്തെ ചേർക്കൽ"
      },
      summary: {
        en: "Service to add a newborn baby, incoming spouse, or dependent to an existing family ration card.",
        ml: "വിവാഹം വഴിയോ ജനനം വഴിയോ കുടുംബത്തിലേക്ക് പുതിയതായി വന്ന അംഗങ്ങളെ റേഷൻ കാർഡിൽ ചേർക്കുന്നതിനുള്ള സേവനം."
      },
      whoNeeds: {
        en: "Cardholders wishing to enroll newly born children or incoming spouses onto their family ration card.",
        ml: "നവജാത ശിശുക്കളെയോ വിവാഹം കഴിഞ്ഞ് വന്ന പങ്കാളിയെയോ സ്വന്തം റേഷൻ കാർഡിൽ ചേർക്കാൻ ആഗ്രഹിക്കുന്നവർക്ക്."
      },
      eligibility: {
        en: [
          "Active ration card in Kerala",
          "Person to be added must have Aadhaar and must not be active on any other ration card"
        ],
        ml: [
          "കേരളത്തിൽ നിലവിലുള്ള സജീവമായ റേഷൻ കാർഡ് ഉണ്ടായിരിക്കണം",
          "ചേർക്കപ്പെടുന്ന വ്യക്തിക്ക് മറ്റ് റേഷൻ കാർഡുകളിൽ സജീവ അംഗത്വം ഉണ്ടാകരുത്"
        ]
      },
      documents: {
        en: [
          "Existing Ration Card",
          "For Child under 5 years: Official Birth Certificate issued by Local Body",
          "For Adult / Spouse: Reduction / Deletion Certificate from earlier ration card, Marriage Certificate, and Aadhaar Card"
        ],
        ml: [
          "നിലവിലെ റേഷൻ കാർഡ്",
          "കുട്ടികൾക്ക് (5 വയസ്സിന് താഴെ): തദ്ദേശ സ്ഥാപനത്തിൽ നിന്നുള്ള ജനന സർട്ടിഫിക്കറ്റ്",
          "മുതിർന്നവർക്ക് / പങ്കാളിക്ക്: പഴയ കാർഡിൽ നിന്നുള്ള ഒഴിവാക്കൽ സർട്ടിഫിക്കറ്റ് (റിഡക്ഷൻ), വിവാഹ സർട്ടിഫിക്കറ്റ്, ആധാർ കാർഡ്"
        ]
      },
      whereToApply: {
        en: "Online via e-Citizen Portal (ecitizen.civilsupplieskerala.gov.in) or through Akshaya / Taluk Supply Office.",
        ml: "ഇ-സിറ്റിസൺ പോർട്ടൽ (ecitizen.civilsupplieskerala.gov.in) വഴിയോ അക്ഷയ / താലൂക്ക് സപ്ലൈ ഓഫീസ് വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to the e-Citizen portal and select 'Addition of Member'.",
          "Enter Aadhaar and demographic details of the new member.",
          "Upload birth certificate (for child) or reduction and marriage certificates (for spouse).",
          "Submit application for TSO electronic scrutiny.",
          "Download updated e-Ration card showing the added member."
        ],
        ml: [
          "ഇ-സിറ്റിസൺ പോർട്ടലിൽ 'Addition of Member' തിരഞ്ഞെടുക്കുക.",
          "പുതിയ അംഗത്തിന്റെ ആധാർ, വ്യക്തിഗത വിവരങ്ങൾ നൽകുക.",
          "ജനന സർട്ടിഫിക്കറ്റോ റിഡക്ഷൻ സർട്ടിഫിക്കറ്റോ അപ്‌ലോഡ് ചെയ്യുക.",
          "ടി.എസ്.ഒ പരിശോധനയ്ക്ക് ശേഷം പുതിയ അംഗത്തെ ഉൾപ്പെടുത്തിയ കാർഡ് ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://ecitizen.civilsupplieskerala.gov.in/",
      notes: {
        en: "Biometric Aadhaar seeding is mandatory for all members aged 5 years and above.",
        ml: "5 വയസ്സിന് മുകളിലുള്ള എല്ലാ അംഗങ്ങൾക്കും ആധാർ കാർഡ് നിർബന്ധമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Change of Address in Ration Card
    // ================================================================
    {
      id: "ration-card-address-change",
      category: "government",
      icon: "🏠",
      name: {
        en: "Change of Address in Ration Card",
        ml: "റേഷൻ കാർഡിലെ മേൽവിലാസം മാറ്റൽ"
      },
      summary: {
        en: "Service to update residential address on a ration card and reallocate the household to the nearest neighborhood ration shop (ARD).",
        ml: "താമസം മാറുമ്പോൾ റേഷൻ കാർഡിലെ മേൽവിലാസവും റേഷൻ കടയും മാറ്റി ക്രമീകരിക്കുന്നതിനുള്ള സേവനം."
      },
      whoNeeds: {
        en: "Households relocating within the same taluk who need to map their card to a convenient ration depot.",
        ml: "താമസസ്ഥലം മാറുമ്പോൾ പുതിയ സ്ഥലത്തെ റേഷൻ കടയിലേക്ക് കാർഡ് മാറ്റാൻ ആഗ്രഹിക്കുന്നവർക്ക്."
      },
      eligibility: {
        en: [
          "Hold an active ration card in Kerala with verifiable new address proof"
        ],
        ml: [
          "കേരളത്തിൽ റേഷൻ കാർഡുള്ളവരും പുതിയ താമസസ്ഥലത്തെ വിലാസ രേഖ ഉള്ളവരുമായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Existing Ration Card",
          "Proof of new residence (Electricity bill, water bill, building tax receipt, or registered rent agreement)",
          "Photo identity proof of Head of Household"
        ],
        ml: [
          "നിലവിലെ റേഷൻ കാർഡ്",
          "പുതിയ താമസസ്ഥലത്തെ മേൽവിലാസ രേഖ (കറണ്ട് ബിൽ, വാട്ടർ ബിൽ, നികുതി രസീത് അല്ലെങ്കിൽ വാടകക്കരാർ)",
          "കുടുംബനാഥയുടെ തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online via e-Citizen Portal (ecitizen.civilsupplieskerala.gov.in) or Akshaya / Taluk Supply Office.",
        ml: "ഇ-സിറ്റിസൺ പോർട്ടൽ (ecitizen.civilsupplieskerala.gov.in) വഴിയോ അക്ഷയ / താലൂക്ക് സപ്ലൈ ഓഫീസ് വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to the e-Citizen portal and select 'Change of Address'.",
          "Enter new residential address, local body, ward, and select preferred Fair Price Shop (ARD).",
          "Upload address proof document.",
          "Submit application for TSO verification and approval."
        ],
        ml: [
          "ഇ-സിറ്റിസൺ പോർട്ടലിൽ 'Change of Address' തിരഞ്ഞെടുക്കുക.",
          "പുതിയ വിലാസവും ആവശ്യമുള്ള റേഷൻ കടയും (ARD) രേഖപ്പെടുത്തുക.",
          "വിലാസ രേഖ അപ്‌ലോഡ് ചെയ്യുക.",
          "അംഗീകാരം ലഭിച്ച ശേഷം പുതിയ വിലാസം രേഖപ്പെടുത്തിയ കാർഡ് ലഭ്യമാകും."
        ]
      },
      officialUrl: "https://ecitizen.civilsupplieskerala.gov.in/",
      notes: {
        en: "If relocating permanently to another taluk, use the Inter-Taluk Transfer service instead.",
        ml: "മറ്റൊരു താലൂക്കിലേക്കാണ് മാറുന്നതെങ്കിൽ താലൂക്ക് മാറ്റം (Inter-Taluk Transfer) ആണ് തിരഞ്ഞെടുക്കേണ്ടത്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Correction of Beneficiary Details in Ration Card
    // ================================================================
    {
      id: "ration-card-name-correction",
      category: "government",
      icon: "✏️",
      name: {
        en: "Correction of Beneficiary Details in Ration Card",
        ml: "റേഷൻ കാർഡിലെ വിവരങ്ങൾ തിരുത്തൽ"
      },
      summary: {
        en: "Online service to correct clerical errors, spelling mistakes, initials, dates of birth, or gender in ration card database.",
        ml: "റേഷൻ കാർഡിൽ വന്ന പേരുദോഷങ്ങൾ, ഇനീഷ്യൽ, ജനനത്തീയതി, ലിംഗം എന്നിവ തിരുത്തുന്നതിനുള്ള സംവിധാനം."
      },
      whoNeeds: {
        en: "Cardholders whose members' personal details differ from their official identity records or Aadhaar.",
        ml: "റേഷൻ കാർഡിലെ പേരിലോ ജനനത്തീയതിയിലോ ആധാറുമായി പൊരുത്തക്കേടുകൾ ഉള്ളവർക്ക്."
      },
      eligibility: {
        en: [
          "Cardholder or listed family member with valid supporting legal identity proof"
        ],
        ml: [
          "റേഷൻ കാർഡിൽ പേരുള്ളവരും കൃത്യമായ തിരിച്ചറിയൽ രേഖകൾ കൈവശമുള്ളവരുമായ വ്യക്തികൾക്ക്"
        ]
      },
      documents: {
        en: [
          "Existing Ration Card",
          "Official document showing correct spelling and demographic details (SSLC Book, Birth Certificate, Voter ID, or Passport)"
        ],
        ml: [
          "നിലവിലെ റേഷൻ കാർഡ്",
          "ശരിയായ പേരും വിവരങ്ങളും തെളിയിക്കുന്ന രേഖ (SSLC, ജനന സർട്ടിഫിക്കറ്റ്, വോട്ടർ ഐഡി, പാസ്‌പോർട്ട്)"
        ]
      },
      whereToApply: {
        en: "Online via e-Citizen Portal (ecitizen.civilsupplieskerala.gov.in) or Akshaya / Taluk Supply Office.",
        ml: "ഇ-സിറ്റിസൺ പോർട്ടൽ വഴിയോ അക്ഷയ / താലൂക്ക് സപ്ലൈ ഓഫീസ് വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to the e-Citizen portal and choose 'Correction of Details'.",
          "Select the specific member and enter corrected name or demographic fields.",
          "Upload supporting certificate/ID proof.",
          "Submit request; updated records reflect in PDS database upon TSO approval."
        ],
        ml: [
          "ഇ-സിറ്റിസൺ പോർട്ടലിൽ 'Correction of Details' തിരഞ്ഞെടുക്കുക.",
          "തിരുത്തേണ്ട അംഗത്തെ തിരഞ്ഞെടുത്ത് ശരിയായ വിവരങ്ങൾ നൽകുക.",
          "തിരിച്ചറിയൽ രേഖ അപ്‌ലോഡ് ചെയ്യുക.",
          "പരിശോധനയ്ക്ക് ശേഷം തിരുത്തലുകൾ റേഷൻ കാർഡിൽ പ്രാബല്യത്തിൽ വരും."
        ]
      },
      officialUrl: "https://ecitizen.civilsupplieskerala.gov.in/",
      notes: {
        en: "Demographic details in PDS must match UIDAI records to ensure hassle-free biometric e-PoS authentication at ration depots.",
        ml: "റേഷൻ കടകളിൽ ഇ-പോസ് മെഷീൻ വഴി വിരലടയാളം പതിപ്പിച്ച് സാധനങ്ങൾ വാങ്ങാൻ റേഷൻ കാർഡിലെ വിവരങ്ങൾ ആധാറുമായി ഒത്തുപോകണം."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Issue of Duplicate Ration Card
    // ================================================================
    {
      id: "ration-card-duplicate",
      category: "government",
      icon: "📑",
      name: {
        en: "Issue of Duplicate Ration Card",
        ml: "ഡ്യൂപ്ലിക്കേറ്റ് റേഷൻ കാർഡ് ലഭ്യമാക്കൽ"
      },
      summary: {
        en: "Facility to download an authentic digital e-Ration card or obtain a replacement physical card in case of loss or damage.",
        ml: "റേഷൻ കാർഡ് നഷ്ടപ്പെടുകയോ കേടുപാടുകൾ സംഭവിക്കുകയോ ചെയ്താൽ ഡ്യൂപ്ലിക്കേറ്റ് കാർഡ് ലഭിക്കുന്നതിനുള്ള സേവനം."
      },
      whoNeeds: {
        en: "Cardholders whose original ration card is lost, torn, destroyed, or mutilated.",
        ml: "റേഷൻ കാർഡ് നഷ്ടപ്പെട്ടവർക്കോ പൂർണ്ണമായി നശിച്ചുപോയവർക്കോ."
      },
      eligibility: {
        en: [
          "Registered Head of Household of an active ration card in Kerala"
        ],
        ml: [
          "കേരളത്തിൽ സജീവമായ റേഷൻ കാർഡുള്ള കുടുംബനാഥയ്ക്ക്"
        ]
      },
      documents: {
        en: [
          "Self-declaration affirming loss or physical surrender of mutilated card",
          "Police GD entry or certificate of loss (if lost or stolen)",
          "Photo identity proof of Head of Household"
        ],
        ml: [
          "കാർഡ് നഷ്ടപ്പെട്ടെന്ന സ്വയംസാക്ഷ്യപത്രം (കേടായതാണെങ്കിൽ പഴയ കാർഡ്)",
          "നഷ്ടപ്പെട്ടതാണെങ്കിൽ പോലീസ് നൽകുന്ന റിപ്പോർട്ട്",
          "കുടുംബനാഥയുടെ തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Instant PDF e-Card download via e-Citizen Portal (ecitizen.civilsupplieskerala.gov.in) or physical print application via Akshaya / TSO.",
        ml: "ഇ-സിറ്റിസൺ പോർട്ടൽ വഴി ഡിജിറ്റൽ കാർഡ് ഡൗൺലോഡ് ചെയ്യാം; ഫിസിക്കൽ കാർഡിനായി അക്ഷയ കേന്ദ്രം വഴിയോ താലൂക്ക് സപ്ലൈ ഓഫീസ് വഴിയോ അപേക്ഷിക്കാം."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to e-Citizen portal using registered mobile OTP.",
          "Select 'Print Ration Card' to immediately download valid digital e-Ration card for free.",
          "For physical card reissue, select 'Duplicate Card Application', upload affidavit/police report, pay prescribed fee, and collect from TSO."
        ],
        ml: [
          "ഇ-സിറ്റിസൺ പോർട്ടലിൽ ലോഗിൻ ചെയ്യുക.",
          "'Print Ration Card' വഴി നിയമസാധുതയുള്ള ഡിജിറ്റൽ ഇ-റേഷൻ കാർഡ് സൗജന്യമായി ഡൗൺലോഡ് ചെയ്യാം.",
          "ഫിസിക്കൽ കാർഡിനായി 'Duplicate Card' വഴി അപേക്ഷ നൽകി ഫീസ് അടയ്ക്കുക."
        ]
      },
      officialUrl: "https://ecitizen.civilsupplieskerala.gov.in/",
      notes: {
        en: "Downloaded PDF e-Ration cards with QR codes are legally valid across all government departments and banks in Kerala.",
        ml: "ക്യു.ആർ കോഡുള്ള ഡിജിറ്റൽ ഇ-റേഷൻ കാർഡുകൾ എല്ലാ ഔദ്യോഗിക ആവശ്യങ്ങൾക്കും ഉപയോഗിക്കാവുന്നതാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Reduction / Deletion of Member from Ration Card
    // ================================================================
    {
      id: "ration-card-reduction-member",
      category: "government",
      icon: "✂️",
      name: {
        en: "Reduction / Deletion of Member from Ration Card",
        ml: "റേഷൻ കാർഡിൽ നിന്ന് പേര് ഒഴിവാക്കൽ"
      },
      summary: {
        en: "Service to remove a member from a ration card due to marriage, separate residence, or death, and issue an official Reduction Certificate.",
        ml: "വിവാഹം, മരണം, താമസം മാറുന്നത് എന്നിവ കാരണം റേഷൻ കാർഡിൽ നിന്ന് പേര് നീക്കം ചെയ്യാനും റിഡക്ഷൻ സർട്ടിഫിക്കറ്റ് നേടാനുമുള്ള സേവനം."
      },
      whoNeeds: {
        en: "Individuals needing to delete their name from their parents' card to join their spouse's card, or families removing deceased members.",
        ml: "വിവാഹം കഴിഞ്ഞ് ഭർത്താവിന്റെ കാർഡിൽ പേര് ചേർക്കാൻ സ്വന്തം വീട്ടിലെ കാർഡിൽ നിന്ന് പേര് ഒഴിവാക്കേണ്ടവർക്കും, മരണപ്പെട്ടവരുടെ പേര് മാറ്റേണ്ടവർക്കും."
      },
      eligibility: {
        en: [
          "Listed member or Head of Household of an active ration card in Kerala"
        ],
        ml: [
          "റേഷൻ കാർഡിലുള്ള അംഗത്തിനോ കുടുംബനാഥയ്ക്കോ അപേക്ഷിക്കാം"
        ]
      },
      documents: {
        en: [
          "Existing Ration Card",
          "In case of death: Official Death Certificate issued by Local Body",
          "In case of marriage / shifting: Marriage Certificate or declaration of shifting",
          "Identity proof of the member being removed"
        ],
        ml: [
          "നിലവിലെ റേഷൻ കാർഡ്",
          "മരണമാണെങ്കിൽ: തദ്ദേശ സ്ഥാപനം നൽകിയ മരണ സർട്ടിഫിക്കറ്റ്",
          "വിവാഹമാണെങ്കിൽ: വിവാഹ സർട്ടിഫിക്കറ്റ് അല്ലെങ്കിൽ സ്വയംസാക്ഷ്യപത്രം",
          "ഒഴിവാക്കപ്പെടേണ്ട വ്യക്തിയുടെ തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online via e-Citizen Portal (ecitizen.civilsupplieskerala.gov.in) or Akshaya / Taluk Supply Office.",
        ml: "ഇ-സിറ്റിസൺ പോർട്ടൽ (ecitizen.civilsupplieskerala.gov.in) വഴിയോ അക്ഷയ / താലൂക്ക് സപ്ലൈ ഓഫീസ് വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to e-Citizen portal and choose 'Deletion of Member'.",
          "Select the member to be removed and specify reason (death, marriage, separate card).",
          "Upload death certificate or marriage documents.",
          "Submit application for TSO approval.",
          "Download digitally signed Reduction Certificate."
        ],
        ml: [
          "ഇ-സിറ്റിസൺ പോർട്ടലിൽ 'Deletion of Member' തിരഞ്ഞെടുക്കുക.",
          "ഒഴിവാക്കേണ്ട അംഗത്തെയും കാരണവും തിരഞ്ഞെടുക്കുക.",
          "മരണ സർട്ടിഫിക്കറ്റോ വിവാഹ സർട്ടിഫിക്കറ്റോ അപ്‌ലോഡ് ചെയ്യുക.",
          "അംഗീകാരം ലഭിച്ച ശേഷം ഔദ്യോഗിക റിഡക്ഷൻ സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://ecitizen.civilsupplieskerala.gov.in/",
      notes: {
        en: "The Reduction Certificate issued from this service is legally mandatory to add that person to another ration card.",
        ml: "മറ്റൊരു റേഷൻ കാർഡിൽ പേര് ചേർക്കണമെങ്കിൽ ഈ സേവനം വഴി ലഭിക്കുന്ന റിഡക്ഷൻ സർട്ടിഫിക്കറ്റ് നിർബന്ധമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Inter-Taluk Transfer of Ration Card
    // ================================================================
    {
      id: "ration-card-transfer",
      category: "government",
      icon: "🚚",
      name: {
        en: "Inter-Taluk Transfer of Ration Card",
        ml: "റേഷൻ കാർഡ് താലൂക്ക് മാറ്റം"
      },
      summary: {
        en: "Service to shift administrative jurisdiction and ration depot mapping of an entire family ration card to a new taluk upon permanent relocation.",
        ml: "കുടുംബം മുഴുവനായി മറ്റൊരു താലൂക്കിലേക്ക് താമസം മാറുമ്പോൾ റേഷൻ കാർഡ് ആ താലൂക്കിലേക്ക് മാറ്റുന്നതിനുള്ള സംവിധാനം."
      },
      whoNeeds: {
        en: "Entire families moving permanently from one taluk supply jurisdiction to another within Kerala.",
        ml: "കേരളത്തിലെ ഒരു താലൂക്കിൽ നിന്നും മറ്റൊരു താലൂക്കിലേക്ക് സ്ഥിരമായി താമസം മാറുന്ന കുടുംബങ്ങൾക്ക്."
      },
      eligibility: {
        en: [
          "Active ration card in Kerala with confirmed permanent relocation to another taluk"
        ],
        ml: [
          "കേരളത്തിൽ റേഷൻ കാർഡുള്ളവരും മറ്റൊരു താലൂക്കിലേക്ക് സ്ഥിരതാമസം മാറ്റിയവരുമായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Existing Ration Card",
          "Proof of residence in the new taluk (Registered rent agreement, electricity bill, or building tax receipt)",
          "Identity proof of Head of Household"
        ],
        ml: [
          "നിലവിലെ റേഷൻ കാർഡ്",
          "പുതിയ താലൂക്കിലെ താമസരേഖ (വാടകക്കരാർ, കറണ്ട് ബിൽ, കെട്ടിട നികുതി രസീത്)",
          "കുടുംബനാഥയുടെ തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online via e-Citizen Portal (ecitizen.civilsupplieskerala.gov.in) or Akshaya / Taluk Supply Office.",
        ml: "ഇ-സിറ്റിസൺ പോർട്ടൽ (ecitizen.civilsupplieskerala.gov.in) വഴിയോ അക്ഷയ / താലൂക്ക് സപ്ലൈ ഓഫീസ് വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to the e-Citizen portal and select 'Transfer of Ration Card'.",
          "Select new district, new taluk, and preferred new ration shop (ARD).",
          "Upload proof of residence in destination taluk.",
          "Origin TSO clears transfer-out and destination TSO sanctions transfer-in."
        ],
        ml: [
          "ഇ-സിറ്റിസൺ പോർട്ടലിൽ 'Transfer of Ration Card' തിരഞ്ഞെടുക്കുക.",
          "പുതിയ ജില്ലയും താലൂക്കും ആവശ്യമായ റേഷൻ കടയും നൽകുക.",
          "പുതിയ വിലാസ രേഖ അപ്‌ലോഡ് ചെയ്യുക.",
          "താലൂക്ക് സപ്ലൈ ഓഫീസർമാരുടെ അനുമതിക്ക് ശേഷം കാർഡ് പുതിയ താലൂക്കിലേക്ക് മാറും."
        ]
      },
      officialUrl: "https://ecitizen.civilsupplieskerala.gov.in/",
      notes: {
        en: "Family card category and entitlement ratios remain intact during inter-taluk transfers.",
        ml: "താലൂക്ക് മാറ്റം വഴി റേഷൻ കാർഡിന്റെ വിഭാഗത്തിനോ ആനുകൂല്യങ്ങൾക്കോ മാറ്റം സംഭവിക്കില്ല."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Surrender of Ration Card / Non-Inclusion Certificate
    // ================================================================
    {
      id: "ration-card-surrender",
      category: "government",
      icon: "📜",
      name: {
        en: "Surrender of Ration Card / Non-Inclusion Certificate",
        ml: "റേഷൻ കാർഡ് സറണ്ടർ ചെയ്യൽ"
      },
      summary: {
        en: "Official cancellation of an entire family ration card upon permanent out-of-state migration and issuance of a statutory Surrender Certificate.",
        ml: "കേരളത്തിന് പുറത്തേക്ക് സ്ഥിരമായി പോകുന്നതിനാലോ മറ്റോ റേഷൻ കാർഡ് പൂർണ്ണമായി റദ്ദാക്കാനും സറണ്ടർ സർട്ടിഫിക്കറ്റ് നേടാനുമുള്ള സേവനം."
      },
      whoNeeds: {
        en: "Families moving permanently outside Kerala or abroad who require a formal Surrender Certificate to apply for a PDS card in another state.",
        ml: "മറ്റ് സംസ്ഥാനങ്ങളിലേക്ക് സ്ഥിരതാമസം മാറുന്നവർക്കും അവിടെ പുതിയ റേഷൻ കാർഡ് എടുക്കാൻ സറണ്ടർ രേഖ ആവശ്യമുള്ളവർക്കും."
      },
      eligibility: {
        en: [
          "Registered cardholder holding an active Kerala ration card wishing to cancel entire card membership"
        ],
        ml: [
          "കേരളത്തിൽ നിലവിലുള്ള റേഷൻ കാർഡ് പൂർണ്ണമായി റദ്ദാക്കാൻ ആഗ്രഹിക്കുന്ന കാർഡുടമകൾക്ക്"
        ]
      },
      documents: {
        en: [
          "Original physical Ration Card booklet or card",
          "Proof of relocation outside Kerala / self-declaration statement",
          "Identity proof of cardholders"
        ],
        ml: [
          "ഒറിജിനൽ റേഷൻ കാർഡ്",
          "കേരളത്തിന് പുറത്തേക്ക് മാറുന്നതിനുള്ള രേഖകൾ / സ്വയംസാക്ഷ്യപത്രം",
          "കാർഡുടമകളുടെ തിരിച്ചറിയൽ രേഖകൾ"
        ]
      },
      whereToApply: {
        en: "Online via e-Citizen Portal (ecitizen.civilsupplieskerala.gov.in) or directly at the Taluk Supply Office.",
        ml: "ഇ-സിറ്റിസൺ പോർട്ടൽ (ecitizen.civilsupplieskerala.gov.in) വഴിയോ താലൂക്ക് സപ്ലൈ ഓഫീസിലോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to e-Citizen portal and select 'Surrender of Ration Card'.",
          "State reason for surrender (inter-state migration / NRI settlement).",
          "Upload self-declaration and surrender details.",
          "TSO cancels card record and generates digitally signed Surrender Certificate."
        ],
        ml: [
          "ഇ-സിറ്റിസൺ പോർട്ടലിൽ 'Surrender of Ration Card' തിരഞ്ഞെടുക്കുക.",
          "സറണ്ടർ ചെയ്യാനുള്ള കാരണം വ്യക്തമാക്കുക.",
          "സത്യവാങ്മൂലം സമർപ്പിക്കുക.",
          "ടി.എസ്.ഒ കാർഡ് റദ്ദാക്കി ഔദ്യോഗിക സറണ്ടർ സർട്ടിഫിക്കറ്റ് നൽകുന്നു."
        ]
      },
      officialUrl: "https://ecitizen.civilsupplieskerala.gov.in/",
      notes: {
        en: "Mandatory statutory document required by Civil Supplies departments of other Indian states before issuing a new ration card.",
        ml: "മറ്റ് സംസ്ഥാനങ്ങളിൽ പുതിയ റേഷൻ കാർഡ് ലഭിക്കുന്നതിന് കേരളത്തിൽ നിന്നുള്ള സറണ്ടർ സർട്ടിഫിക്കറ്റ് നിർബന്ധമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Change of Head of Family (Ration Card Ownership)
    // ================================================================
    {
      id: "ration-card-change-head",
      category: "government",
      icon: "👑",
      name: {
        en: "Change of Head of Family (Ration Card Ownership)",
        ml: "റേഷൻ കാർഡിലെ കുടുംബനാഥയെ മാറ്റൽ"
      },
      summary: {
        en: "Service to transfer the legal Head of Household designation on a ration card to another eligible adult member upon demise or family consensus.",
        ml: "കുടുംബനാഥ മരണപ്പെടുകയോ ചുമതല മറ്റൊരാൾക്ക് നൽകുകയോ ചെയ്യുമ്പോൾ റേഷൻ കാർഡിലെ ഉടമസ്ഥാവകാശം മാറ്റുന്നതിനുള്ള സേവനം."
      },
      whoNeeds: {
        en: "Families where the existing female head has passed away, reached extreme old age, or where restructuring is required.",
        ml: "നിലവിലെ കുടുംബനാഥ മരണപ്പെട്ടതിനാലോ മറ്റ് കാരണങ്ങളാലോ കാർഡിലെ മുഖ്യ ചുമതല മറ്റൊരാൾക്ക് നൽകേണ്ട കുടുംബങ്ങൾക്ക്."
      },
      eligibility: {
        en: [
          "Active ration card in Kerala",
          "Proposed Head must be the eldest adult female member (18+ years) under NFSA rules, or eldest male member if no adult female resides in the family"
        ],
        ml: [
          "കേരളത്തിൽ സജീവമായ റേഷൻ കാർഡ് ഉണ്ടായിരിക്കണം",
          "ഭക്ഷ്യഭദ്രതാ നിയമപ്രകാരം കുടുംബത്തിലെ മുതിർന്ന സ്ത്രീയായിരിക്കണം പുതിയ കുടുംബനാഥ (സ്ത്രീകളില്ലെങ്കിൽ മുതിർന്ന പുരുഷൻ)"
        ]
      },
      documents: {
        en: [
          "Existing Ration Card",
          "Death Certificate of former Head of Family (if deceased)",
          "Consent declaration signed by adult members of the household",
          "Identity proof of the proposed new Head of Household"
        ],
        ml: [
          "നിലവിലെ റേഷൻ കാർഡ്",
          "മുൻ കുടുംബനാഥ മരണപ്പെട്ടതാണെങ്കിൽ മരണ സർട്ടിഫിക്കറ്റ്",
          "കുടുംബാംഗങ്ങളുടെ സമ്മതപത്രം",
          "പുതിയ കുടുംബനാഥയുടെ തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online via e-Citizen Portal (ecitizen.civilsupplieskerala.gov.in) or Akshaya / Taluk Supply Office.",
        ml: "ഇ-സിറ്റിസൺ പോർട്ടൽ വഴിയോ അക്ഷയ / താലൂക്ക് സപ്ലൈ ഓഫീസ് വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to e-Citizen portal and choose 'Change of Head of Family'.",
          "Select the proposed new Head from among existing adult family members.",
          "Upload death certificate (if applicable) and family consent form.",
          "TSO validates criteria and approves the updated Head of Household on the card."
        ],
        ml: [
          "ഇ-സിറ്റിസൺ പോർട്ടലിൽ 'Change of Head of Family' തിരഞ്ഞെടുക്കുക.",
          "പുതിയ കുടുംബനാഥയെ നിലവിലെ അംഗങ്ങളിൽ നിന്ന് തിരഞ്ഞെടുക്കുക.",
          "സമ്മതപത്രവും മരണ സർട്ടിഫിക്കറ്റും (ബാധകമെങ്കിൽ) അപ്‌ലോഡ് ചെയ്യുക.",
          "ടി.എസ്.ഒ പരിശോധനയ്ക്ക് ശേഷം പുതിയ കുടുംബനാഥയുടെ പേര് പ്രാബല്യത്തിൽ വരും."
        ]
      },
      officialUrl: "https://ecitizen.civilsupplieskerala.gov.in/",
      notes: {
        en: "The bank account linked for welfare subsidies should also be updated following a change of Head of Family.",
        ml: "കുടുംബനാഥയെ മാറ്റിക്കഴിഞ്ഞാൽ സബ്‌സിഡികൾ മുടങ്ങാതിരിക്കാൻ ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങളും കൂടെ മാറ്റേണ്ടതാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Seeding of Bank Account in Ration Card
    // ================================================================
    {
      id: "ration-card-bank-account-update",
      category: "government",
      icon: "🏦",
      name: {
        en: "Seeding of Bank Account in Ration Card",
        ml: "റേഷൻ കാർഡിൽ ബാങ്ക് അക്കൗണ്ട് ചേർക്കൽ"
      },
      summary: {
        en: "Online facility to link or update the active bank account of the Head of Household for receiving Direct Benefit Transfer (DBT) food and cash subsidies.",
        ml: "സർക്കാർ നൽകുന്ന സബ്‌സിഡികളും ആനുകൂല്യങ്ങളും നേരിട്ട് അക്കൗണ്ടിലേക്ക് ലഭിക്കാൻ റേഷൻ കാർഡുമായി ബാങ്ക് അക്കൗണ്ട് ബന്ധിപ്പിക്കുന്ന സേവനം."
      },
      whoNeeds: {
        en: "Ration cardholders (specifically Priority Pink and AAY Yellow cards) entitled to cash transfers, festival kits allowances, or DBT subsidies.",
        ml: "റേഷൻ സബ്‌സിഡികളും മറ്റ് സർക്കാർ ആനുകൂല്യങ്ങളും ബാങ്ക് വഴി ലഭിക്കേണ്ട മുൻഗണനാ കാർഡുടമകൾക്ക്."
      },
      eligibility: {
        en: [
          "Must hold an active ration card in Kerala",
          "Bank account must be in the name of the designated Head of Household"
        ],
        ml: [
          "കേരളത്തിൽ സജീവമായ റേഷൻ കാർഡ് ഉണ്ടായിരിക്കണം",
          "ബാങ്ക് അക്കൗണ്ട് കുടുംബനാഥയുടെ പേരിൽ ആയിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Ration Card Number",
          "Copy of Bank Passbook showing active Account Number and IFSC in the name of Head of Household",
          "Identity proof of Head of Household"
        ],
        ml: [
          "റേഷൻ കാർഡ് നമ്പർ",
          "കുടുംബനാഥയുടെ പേരിലുള്ള ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (അക്കൗണ്ട് നമ്പർ, IFSC വ്യക്തമായത്)",
          "തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online via e-Citizen Portal (ecitizen.civilsupplieskerala.gov.in) or Akshaya / Taluk Supply Office.",
        ml: "ഇ-സിറ്റിസൺ പോർട്ടൽ വഴിയോ അക്ഷയ / താലൂക്ക് സപ്ലൈ ഓഫീസ് വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to the e-Citizen portal and navigate to 'Bank Account Details Updation'.",
          "Enter bank name, branch, core account number, and IFSC code.",
          "Upload front page of the bank passbook.",
          "Submit for electronic validation and DBT seeding."
        ],
        ml: [
          "ഇ-സിറ്റിസൺ പോർട്ടലിൽ 'Bank Account Details' വിഭാഗം തിരഞ്ഞെടുക്കുക.",
          "ബാങ്കിന്റെ പേര്, അക്കൗണ്ട് നമ്പർ, IFSC കോഡ് എന്നിവ നൽകുക.",
          "ബാങ്ക് പാസ്സ്ബുക്കിന്റെ പകർപ്പ് അപ്‌ലോഡ് ചെയ്യുക.",
          "വിവരങ്ങൾ സേവ് ചെയ്ത് സമർപ്പിക്കുക."
        ]
      },
      officialUrl: "https://ecitizen.civilsupplieskerala.gov.in/",
      notes: {
        en: "Ensure the bank account has active NPCI Aadhaar-mapping to avoid failure of electronic DBT credits.",
        ml: "ബാങ്ക് അക്കൗണ്ട് ആധാറുമായി ബന്ധിപ്പിച്ചിട്ടുണ്ടെന്ന് (NPCI Seeding) ഉറപ്പുവരുത്തുക."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Updation of LPG Connection Details in Ration Card
    // ================================================================
    {
      id: "ration-card-lpg-update",
      category: "government",
      icon: "🔥",
      name: {
        en: "Updation of LPG Connection Details in Ration Card",
        ml: "റേഷൻ കാർഡിൽ ഗ്യാസ് വിവരങ്ങൾ രേഖപ്പെടുത്തൽ"
      },
      summary: {
        en: "Statutory declaration and updating of domestic cooking gas (LPG) cylinder connections to calculate PDS kerosene entitlements.",
        ml: "റേഷൻ വഴിയുള്ള മണ്ണെണ്ണ വിഹിതം നിശ്ചയിക്കുന്നതിനായി വീട്ടിലുള്ള ഗ്യാസ് കണക്ഷൻ വിവരങ്ങൾ റേഷൻ കാർഡിൽ രേഖപ്പെടുത്തുന്ന സംവിധാനം."
      },
      whoNeeds: {
        en: "Cardholders who have newly acquired, transferred, or surrendered domestic LPG gas connections (IOCL, BPCL, HPCL).",
        ml: "പുതിയ ഗ്യാസ് കണക്ഷൻ എടുത്തവരോ, ഉള്ള കണക്ഷൻ ഒഴിവാക്കിയവരോ ആയ റേഷൻ കാർഡുടമകൾക്ക്."
      },
      eligibility: {
        en: [
          "Active ration card in Kerala with change in domestic cooking gas connection status"
        ],
        ml: [
          "കേരളത്തിൽ റേഷൻ കാർഡുള്ളവരും ഗ്യാസ് കണക്ഷൻ വിവരങ്ങളിൽ മാറ്റം വന്നവരുമായ കുടുംബങ്ങൾക്ക്"
        ]
      },
      documents: {
        en: [
          "Ration Card Number",
          "Domestic LPG Gas Subscription Voucher (SV) or Consumer Passbook",
          "Identity proof of connection holder"
        ],
        ml: [
          "റേഷൻ കാർഡ് നമ്പർ",
          "ഗ്യാസ് ഏജൻസി നൽകിയ സബ്‌സ്‌ക്രിപ്ഷൻ വൗച്ചർ (SV) അല്ലെങ്കിൽ ഗ്യാസ് പാസ്സ്ബുക്ക്",
          "കണക്ഷൻ ഉടമയുടെ തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online via e-Citizen Portal (ecitizen.civilsupplieskerala.gov.in) or Akshaya / Taluk Supply Office.",
        ml: "ഇ-സിറ്റിസൺ പോർട്ടൽ വഴിയോ അക്ഷയ / താലൂക്ക് സപ്ലൈ ഓഫീസ് വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to the e-Citizen portal and choose 'LPG Details Updation'.",
          "Select Oil Marketing Company (IOCL, BPCL, HPCL), enter Gas Consumer Number and agency name.",
          "Upload copy of subscription voucher or gas passbook.",
          "Submit for civil supplies record updating."
        ],
        ml: [
          "ഇ-സിറ്റിസൺ പോർട്ടലിൽ 'LPG Details' തിരഞ്ഞെടുക്കുക.",
          "ഗ്യാസ് കമ്പനിയുടെ പേരും കൺസ്യൂമർ നമ്പറും ഏജൻസിയുടെ വിവരങ്ങളും നൽകുക.",
          "ഗ്യാസ് പാസ്സ്ബുക്കിന്റെ പകർപ്പ് അപ്‌ലോഡ് ചെയ്യുക.",
          "വിവരങ്ങൾ സ്ഥിരീകരിച്ച് സമർപ്പിക്കുക."
        ]
      },
      officialUrl: "https://ecitizen.civilsupplieskerala.gov.in/",
      notes: {
        en: "Mandatory statutory disclosure; households possessing two or more domestic gas cylinders are not entitled to subsidized non-electric PDS kerosene.",
        ml: "രണ്ടോ അതിലധികമോ സിലിണ്ടറുകൾ ഉള്ള കുടുംബങ്ങൾക്ക് റേഷൻ വഴിയുള്ള മണ്ണെണ്ണ വിഹിതം അനുവദിക്കാറില്ല."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Updation of Occupation and Income in Ration Card
    // ================================================================
    {
      id: "ration-card-profession-income-update",
      category: "government",
      icon: "💼",
      name: {
        en: "Updation of Occupation and Income in Ration Card",
        ml: "റേഷൻ കാർഡിലെ തൊഴിൽ/വരുമാനം മാറ്റൽ"
      },
      summary: {
        en: "Service to update occupation, government employment status, and annual family income categories in the public distribution database.",
        ml: "കുടുംബാംഗങ്ങളുടെ ജോലിയിലോ വാർഷിക വരുമാനത്തിലോ വരുന്ന മാറ്റങ്ങൾ റേഷൻ കാർഡിൽ അപ്‌ഡേറ്റ് ചെയ്യുന്നതിനുള്ള സംവിധാനം."
      },
      whoNeeds: {
        en: "Cardholders whose family members have secured government/semi-government employment, retired, or experienced significant shifts in income.",
        ml: "കുടുംബാംഗങ്ങൾക്ക് സർക്കാർ ജോലി ലഭിക്കുകയോ, വിരമിക്കുകയോ, വരുമാനത്തിൽ മാറ്റം വരികയോ ചെയ്ത കുടുംബങ്ങൾക്ക്."
      },
      eligibility: {
        en: [
          "Active ration card in Kerala with verifiable employment or income changes"
        ],
        ml: [
          "കേരളത്തിൽ റേഷൻ കാർഡുള്ളവരും തൊഴിൽ/വരുമാന മാറ്റങ്ങൾ തെളിയിക്കാൻ രേഖയുള്ളവരുമായ കുടുംബങ്ങൾക്ക്"
        ]
      },
      documents: {
        en: [
          "Existing Ration Card",
          "Salary Certificate / Form 16 / Pension Payment Order / Certificate of non-employment",
          "Identity proof of member"
        ],
        ml: [
          "നിലവിലെ റേഷൻ കാർഡ്",
          "ശമ്പള സർട്ടിഫിക്കറ്റ് / പെൻഷൻ രേഖ / വരുമാന സർട്ടിഫിക്കറ്റ്",
          "അംഗത്തിന്റെ തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online via e-Citizen Portal (ecitizen.civilsupplieskerala.gov.in) or Akshaya / Taluk Supply Office.",
        ml: "ഇ-സിറ്റിസൺ പോർട്ടൽ വഴിയോ അക്ഷയ / താലൂക്ക് സപ്ലൈ ഓഫീസ് വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to the e-Citizen portal and choose 'Profession & Income Updation'.",
          "Select the respective member and update profession code and declared income.",
          "Upload salary slip, pension book, or revenue income proof.",
          "Submit for TSO evaluation and category validation."
        ],
        ml: [
          "ഇ-സിറ്റിസൺ പോർട്ടലിൽ 'Profession & Income' തിരഞ്ഞെടുക്കുക.",
          "അംഗത്തെ തിരഞ്ഞെടുത്ത് പുതിയ ജോലിയും വരുമാനവും രേഖപ്പെടുത്തുക.",
          "ശമ്പള സർട്ടിഫിക്കറ്റോ പെൻഷൻ രേഖയോ അപ്‌ലോഡ് ചെയ്യുക.",
          "ടി.എസ്.ഒ പരിശോധനയ്ക്കായി സമർപ്പിക്കുക."
        ]
      },
      officialUrl: "https://ecitizen.civilsupplieskerala.gov.in/",
      notes: {
        en: "Failure to declare government employment or income exceeding statutory limits may result in penal recovery of subsidized food grain costs.",
        ml: "സർക്കാർ ജോലി ലഭിച്ച വിവരം യഥാസമയം റേഷൻ കാർഡിൽ രേഖപ്പെടുത്താതിരുന്നാൽ പിഴ നടപടികൾ നേരിടേണ്ടി വന്നേക്കാം."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Registration of Title Deeds and Instruments (PEARL)
    // ================================================================
    {
      id: "document-registration",
      category: "government",
      icon: "📜",
      name: {
        en: "Registration of Title Deeds and Instruments (PEARL)",
        ml: "ആധാരം രജിസ്ട്രേഷൻ"
      },
      summary: {
        en: "Official pre-registration, e-stamp duty remittance, and appointment token booking system for registering property title deeds at Sub-Registrar Offices.",
        ml: "വസ്തുക്കളുടെ വിൽപ്പന, ഭാഗം, ദാനം, ബാധ്യത എന്നിവ സംബന്ധിച്ച ആധാരങ്ങൾ സബ് രജിസ്ട്രാർ ഓഫീസുകളിൽ രജിസ്റ്റർ ചെയ്യുന്നതിനുള്ള സംവിധാനം."
      },
      whoNeeds: {
        en: "Buyers, sellers, and property owners executing immovable property sale deeds, gift deeds, partition deeds, settlement deeds, or leases.",
        ml: "വസ്തു ക്രയവിക്രയം ചെയ്യുന്നവർ, കുടുംബസ്വത്ത് ഭാഗം വെയ്ക്കുന്നവർ, ദാനപ്പത്രങ്ങൾ രജിസ്റ്റർ ചെയ്യുന്നവർ."
      },
      eligibility: {
        en: [
          "Executants and claimants holding clear, marketable title and required land mutation records in Kerala"
        ],
        ml: [
          "കേരളത്തിൽ വസ്തുവകകളുടെ ക്രയവിക്രയങ്ങളിൽ ഏർപ്പെടുന്ന നിയമപരമായ ഉടമകൾക്കും കക്ഷികൾക്കും"
        ]
      },
      documents: {
        en: [
          "Original Draft Deed prepared in compliance with statutory formatting rules",
          "Prior Title Deeds (Munnadhaaram)",
          "Current financial year Land Tax (Karam) Receipt and Thandaper details",
          "Encumbrance Certificate (EC) from Sub-Registrar Office",
          "Identity proof of executants, claimants, and two identifying witnesses",
          "PAN Card or Form 60/61 (for property transactions exceeding statutory thresholds)"
        ],
        ml: [
          "തയ്യാറാക്കിയ ആധാരത്തിന്റെ കരട് (ഡ്രാഫ്റ്റ്)",
          "മുന്നാധാരങ്ങളുടെ പകർപ്പുകൾ",
          "നടപ്പു വർഷത്തെ ഭൂനികുതി രസീതും താണ്ഡപ്പേര് വിവരങ്ങളും",
          "ബാധ്യതാ സർട്ടിഫിക്കറ്റ് (EC)",
          "കക്ഷികളുടെയും രണ്ട് സാക്ഷികളുടെയും തിരിച്ചറിയൽ രേഖകൾ",
          "പാൻ കാർഡ് അല്ലെങ്കിൽ ഫോം 60/61"
        ]
      },
      whereToApply: {
        en: "PEARL Registration Portal (keralaregistration.gov.in) followed by personal appearance before the jurisdictional Sub-Registrar.",
        ml: "രജിസ്ട്രേഷൻ വകുപ്പിന്റെ പേൾ പോർട്ടൽ (pearl.keralaregistration.gov.in) വഴി ഓൺലൈനായി ടോക്കൺ എടുത്ത് സബ് രജിസ്ട്രാർ ഓഫീസിൽ ഹാജരാകുക."
      },
      mode: {
        en: "Online Pre-Registration & Physical Verification",
        ml: "ഓൺലൈൻ പ്രീ-രജിസ്ട്രേഷൻ & നേരിട്ടുള്ള ഹാജരാകൽ"
      },
      steps: {
        en: [
          "Register and draft document particulars on the PEARL portal.",
          "Verify Government Fair Value (Nyaayavila) and calculate applicable Stamp Duty and Registration Fee.",
          "Pay stamp duty via e-Stamp / e-Treasury and select appointment slot at the SRO.",
          "All parties and identifying witnesses appear before the Sub-Registrar with original documents.",
          "Sub-Registrar captures biometric thumbprints and photographs, registers the deed, and delivers registered document."
        ],
        ml: [
          "പേൾ (PEARL) പോർട്ടലിൽ പ്രീ-രജിസ്ട്രേഷൻ വിവരങ്ങൾ നൽകുക.",
          "സർക്കാർ ന്യായവില പരിശോധിച്ച് സ്റ്റാമ്പ് ഡ്യൂട്ടിയും രജിസ്ട്രേഷൻ ഫീസും ഓൺലൈനായി അടയ്ക്കുക.",
          "സബ് രജിസ്ട്രാർ ഓഫീസിലെ തീയതിയും സമയവും തിരഞ്ഞെടുക്കുക.",
          "കക്ഷികളും സാക്ഷികളും അസ്സൽ രേഖകളുമായി സബ് രജിസ്ട്രാർ മുൻപാകെ നേരിട്ടെത്തി വിരലടയാളവും ഫോട്ടോയും നൽകുക.",
          "രജിസ്ട്രേഷൻ പൂർത്തിയായ ആധാരം കൈപ്പറ്റുക."
        ]
      },
      officialUrl: "https://pearl.keralaregistration.gov.in/",
      notes: {
        en: "Physical appearance of both executants and claimants along with two witnesses possessing valid photo IDs is legally mandatory under the Registration Act.",
        ml: "രജിസ്ട്രേഷൻ നിയമപ്രകാരം കക്ഷികളും സാക്ഷികളും തിരിച്ചറിയൽ രേഖകളുമായി സബ് രജിസ്ട്രാർ ഓഫീസിൽ നേരിട്ടെത്തി ഒപ്പിടേണ്ടത് നിർബന്ധമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Scrutiny and Approval of Electrical Installation Schemes
    // ================================================================
    {
      id: "electrical-scheme-approval",
      category: "government",
      relatedCategory: "other",
      subcategory: "building-construction",
      icon: "⚡",
      name: {
        en: "Scrutiny and Approval of Electrical Installation Schemes",
        ml: "ഇലക്ട്രിക്കൽ സ്കീം അംഗീകാരം"
      },
      summary: {
        en: "Statutory engineering safety approval issued by the Electrical Inspectorate for installing high-voltage equipment, transformers, generators, and high-rise electrical networks.",
        ml: "ട്രാൻസ്ഫോർമറുകൾ, ജനറേറ്ററുകൾ, ഉയർന്ന വോൾട്ടേജ് ഉപകരണങ്ങൾ, ബഹുനില കെട്ടിടങ്ങൾ എന്നിവയിലെ ഇലക്ട്രിക്കൽ സംവിധാനങ്ങൾക്ക് നൽകുന്ന സുരക്ഷാ അനുമതി."
      },
      whoNeeds: {
        en: "Builders of high-rise buildings, commercial establishments, hospitals, and industrial consumers installing substations or DG sets (>10 kVA).",
        ml: "ഉയർന്ന കെട്ടിടങ്ങൾ നിർമ്മിക്കുന്നവർ, ഫാക്ടറികൾ, ആശുപത്രികൾ, വലിയ വാണിജ്യ സമുച്ചയങ്ങൾ എന്നിവയിലെ സബ്സ്റ്റേഷൻ സ്ഥാപിക്കുന്നവർ."
      },
      eligibility: {
        en: [
          "Electrical scheme must be designed in compliance with Central Electricity Authority (Safety) Regulations",
          "Drawings must be prepared by a licensed electrical engineer or certified electrical contractor"
        ],
        ml: [
          "സെൻട്രൽ ഇലക്ട്രിസിറ്റി അതോറിറ്റി സുരക്ഷാ ചട്ടങ്ങൾ പാലിച്ചുള്ള രൂപരേഖയായിരിക്കണം",
          "അംഗീകൃത ഇലക്ട്രിക്കൽ കോൺട്രാക്ടറോ സൂപ്പർവൈസറോ തയ്യാറാക്കിയ പ്ലാൻ ആയിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Single Line Diagram (SLD) and physical equipment layout signed by an authorized Electrical Contractor/Supervisor",
          "Technical specifications and datasheets of transformers, generators, and switchgears",
          "Site layout plan and local body building permit copy",
          "Treasury chalan receipt for statutory scrutiny fee"
        ],
        ml: [
          "ലൈസൻസ്ഡ് കോൺട്രാക്ടർ സാക്ഷ്യപ്പെടുത്തിയ സിംഗിൾ ലൈൻ ഡയഗ്രം (SLD), ലേഔട്ട് പ്ലാൻ",
          "ട്രാൻസ്ഫോർമർ, ജനറേറ്റർ, പാനൽ ബോർഡ് എന്നിവയുടെ സാങ്കേതിക വിവരങ്ങൾ",
          "കെട്ടിട പെർമിറ്റ് പകർപ്പ്, സൈറ്റ് പ്ലാൻ",
          "നിശ്ചിത ഫീസ് അടച്ച ട്രഷറി ചലാൻ രസീത്"
        ]
      },
      whereToApply: {
        en: "Department of Electrical Inspectorate Portal (ceikerala.gov.in) or jurisdictional Electrical Inspector Office.",
        ml: "ഇലക്ട്രിക്കൽ ഇൻസ്‌പെക്ടറേറ്റ് പോർട്ടൽ (ceikerala.gov.in) അല്ലെങ്കിൽ ജില്ലാ ഇലക്ട്രിക്കൽ ഇൻസ്പെക്ടർ ഓഫീസ്."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Submit application and schematic drawings online or to the Electrical Inspector.",
          "Technical scrutiny conducted by engineering officers regarding safety clearances and fault levels.",
          "Defects (if any) are communicated for rectification.",
          "Electrical Inspector issues formal written Scheme Approval Order with sanctioned conditions."
        ],
        ml: [
          "ഇലക്ട്രിക്കൽ ഇൻസ്പെക്ടർക്ക് പ്ലാനുകളും ഡ്രോയിംഗുകളും സമർപ്പിക്കുക.",
          "സാങ്കേതിക വിദഗ്ദ്ധർ സുരക്ഷാ മാനദണ്ഡങ്ങൾ പരിശോധിച്ച് പരിശോധന പൂർത്തിയാക്കുന്നു.",
          "ന്യൂനതകൾ ഉണ്ടെങ്കിൽ പരിഹരിക്കാൻ ആവശ്യപ്പെടുന്നു.",
          "ചട്ടങ്ങൾ പാലിച്ചതാണെങ്കിൽ ഔദ്യോഗിക സ്കീം അപ്രൂവൽ ഓർഡർ അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://ceikerala.gov.in",
      notes: {
        en: "Mandatory prerequisite before purchasing and erecting transformers, HT lines, or industrial captive power generators.",
        ml: "ട്രാൻസ്ഫോർമറുകളും ജനറേറ്ററുകളും സ്ഥാപിക്കുന്നതിന് മുൻപ് ഈ അനുമതി വാങ്ങിയിരിക്കണം."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Issue of Safety Certificate / Energisation Sanction
    // ================================================================
    {
      id: "electrical-energisation-sanction",
      category: "government",
      relatedCategory: "other",
      subcategory: "building-construction",
      icon: "🔌",
      name: {
        en: "Issue of Safety Certificate / Energisation Sanction",
        ml: "ഇലക്ട്രിക്കൽ എനർജൈസേഷൻ അനുമതി"
      },
      summary: {
        en: "Final regulatory safety certificate issued under Regulation 43 of CEA Safety Regulations authorizing KSEB to charge and energize medium/high-voltage electrical installations.",
        ml: "വൈദ്യുതി ലൈനുകളിൽ നിന്നും ട്രാൻസ്ഫോർമറുകളിൽ നിന്നും വൈദ്യുതി കണക്ഷൻ ചാർജ്ജ് ചെയ്യുന്നതിന് നൽകുന്ന അന്തിമ സുരക്ഷാ സർട്ടിഫിക്കറ്റ്."
      },
      whoNeeds: {
        en: "Industrial, commercial, or high-rise building consumers ready for final electrical power commissioning.",
        ml: "ഇലക്ട്രിക്കൽ ജോലികൾ പൂർത്തിയാക്കി കറണ്ട് കണക്ഷൻ ഓൺ ചെയ്യാൻ കാത്തിരിക്കുന്ന സ്ഥാപനങ്ങൾക്കും കെട്ടിടങ്ങൾക്കും."
      },
      eligibility: {
        en: [
          "Must possess prior Electrical Scheme Approval Order",
          "Installation must be completed strictly by a licensed electrical contractor"
        ],
        ml: [
          "മുൻപ് ലഭിച്ച ഇലക്ട്രിക്കൽ സ്കീം അപ്രൂവൽ ഓർഡർ ഉണ്ടായിരിക്കണം",
          "അംഗീകൃത കോൺട്രാക്ടർ മുഖേന വയറിംഗ് ജോലികൾ പൂർത്തിയാക്കിയിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Copy of Scheme Approval Order",
          "Completion Certificate and Test Report from the Licensed Electrical Contractor",
          "Earth resistance test results and insulation resistance test values",
          "Equipment manufacturer factory test certificates",
          "Treasury chalan receipt for inspection fee"
        ],
        ml: [
          "സ്കീം അപ്രൂവൽ ഓർഡർ പകർപ്പ്",
          "ലൈസൻസ്ഡ് കോൺട്രാക്ടറുടെ കംപ്ലീഷൻ സർട്ടിഫിക്കറ്റും ടെസ്റ്റ് റിപ്പോർട്ടും",
          "എർത്ത് ടെസ്റ്റ്, ഇൻസുലേഷൻ ടെസ്റ്റ് ഫലങ്ങൾ",
          "ഉപകരണങ്ങളുടെ ടെസ്റ്റ് സർട്ടിഫിക്കറ്റുകൾ",
          "ട്രഷറി ചലാൻ രസീത്"
        ]
      },
      whereToApply: {
        en: "Department of Electrical Inspectorate Portal (ceikerala.gov.in) / Office of the Deputy Electrical Inspector.",
        ml: "ഇലക്ട്രിക്കൽ ഇൻസ്‌പെക്ടറേറ്റ് പോർട്ടൽ (ceikerala.gov.in) അല്ലെങ്കിൽ ഡെപ്യൂട്ടി ഇലക്ട്രിക്കൽ ഇൻസ്പെക്ടറുടെ ഓഫീസ്."
      },
      mode: {
        en: "Online Application & Physical Field Inspection",
        ml: "ഓൺലൈൻ അപേക്ഷ & നേരിട്ടുള്ള പരിശോധന"
      },
      steps: {
        en: [
          "Submit work completion report and test certificates to the Electrical Inspectorate.",
          "Deputy Electrical Inspector conducts physical site inspection, tests earth pits, and checks protective relays.",
          "Upon satisfactory compliance, Safety Certificate / Energisation Sanction is issued.",
          "KSEB energizes power supply upon receipt of this official order."
        ],
        ml: [
          "ജോലി പൂർത്തിയായ ടെസ്റ്റ് റിപ്പോർട്ട് ഇൻസ്പെക്ടറേറ്റിൽ സമർപ്പിക്കുക.",
          "ഇലക്ട്രിക്കൽ ഇൻസ്പെക്ടർ നേരിട്ടെത്തി സുരക്ഷാ പരിശോധനകളും എർത്ത് ടെസ്റ്റുകളും നടത്തുന്നു.",
          "സുരക്ഷ ഉറപ്പാക്കി എനർജൈസേഷൻ അനുമതി പത്രം നൽകുന്നു.",
          "ഇതിന്റെ അടിസ്ഥാനത്തിൽ കെ.എസ്.ഇ.ബി വൈദ്യുതി കണക്ഷൻ ചാർജ്ജ് ചെയ്യുന്നു."
        ]
      },
      officialUrl: "https://ceikerala.gov.in",
      notes: {
        en: "KSEB is legally prohibited from charging high-voltage or commercial transformer installations without this statutory safety certificate.",
        ml: "ഈ സർട്ടിഫിക്കറ്റ് ഇല്ലാതെ വലിയ കണക്ഷനുകൾ ചാർജ്ജ് ചെയ്യാൻ കെ.എസ്.ഇ.ബിക്ക് നിയമപരമായി അനുവാദമില്ല."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Grant of Electrical Contractor Licence (Class A, B, C)
    // ================================================================
    {
      id: "electrical-contractor-licence",
      category: "government",
      relatedCategory: "other",
      subcategory: "industry-business",
      icon: "📜",
      name: {
        en: "Grant of Electrical Contractor Licence (Class A, B, C)",
        ml: "ഇലക്ട്രിക്കൽ കോൺട്രാക്ടർ ലൈസൻസ്"
      },
      summary: {
        en: "Official licensing issued by the Kerala State Electricity Licensing Board authorizing contractors to execute commercial, domestic, and industrial electrical wiring contracts.",
        ml: "കേരളത്തിൽ ഇലക്ട്രിക്കൽ വയറിംഗ്, ഇൻസ്റ്റാളേഷൻ കരാർ ജോലികൾ ഏറ്റെടുത്ത് നടത്തുന്നതിനായി ലൈസൻസിംഗ് ബോർഡ് നൽകുന്ന ലൈസൻസ്."
      },
      whoNeeds: {
        en: "Electrical engineers, electrical contracting firms, and proprietary electrical agencies.",
        ml: "ഇലക്ട്രിക്കൽ കോൺട്രാക്ട് സ്ഥാപനം തുടങ്ങാൻ ആഗ്രഹിക്കുന്ന വ്യക്തികൾക്കും സ്ഥാപനങ്ങൾക്കും."
      },
      eligibility: {
        en: [
          "Must employ qualified and licensed Electrical Supervisors and Wiremen",
          "Must possess mandatory calibrated testing instruments and satisfy financial solvency requirements for Class A, B, or C"
        ],
        ml: [
          "അംഗീകൃത സൂപ്പർവൈസർമാരും വയർമാൻമാരും ജീവനക്കാരായി ഉണ്ടായിരിക്കണം",
          "നിശ്ചിത ടെസ്റ്റിംഗ് ഉപകരണങ്ങളും സാമ്പത്തിക സോൾവൻസിയും ഉണ്ടായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Appointment and consent letters of employed licensed Supervisors and Wiremen",
          "Calibration certificates of mandatory testing instruments (Megger, Earth Tester, Tong Tester)",
          "Solvency Certificate from Revenue Tahsildar or Nationalized Bank Guarantee",
          "Proof of registered office and workshop premises",
          "Identity proof and photographs of applicant/partners"
        ],
        ml: [
          "ജീവനക്കാരായ സൂപ്പർവൈസർമാരുടെയും വയർമാൻമാരുടെയും സമ്മതപത്രവും പെർമിറ്റും",
          "ടെസ്റ്റിംഗ് ഉപകരണങ്ങളുടെ കാലിബ്രേഷൻ സർട്ടിഫിക്കറ്റ്",
          "തഹസിൽദാറുടെ സോൾവൻസി സർട്ടിഫിക്കറ്റ് അല്ലെങ്കിൽ ബാങ്ക് ഗ്യാരണ്ടി",
          "ഓഫീസ് വാടകക്കരാർ അല്ലെങ്കിൽ ഉടമസ്ഥാവകാശ രേഖ",
          "അപേക്ഷകന്റെ തിരിച്ചറിയൽ രേഖയും ഫോട്ടോയും"
        ]
      },
      whereToApply: {
        en: "Kerala State Electricity Licensing Board (KSELB), Department of Electrical Inspectorate (ceikerala.gov.in).",
        ml: "കേരള സ്റ്റേറ്റ് ഇലക്ട്രിസിറ്റി ലൈസൻസിംഗ് ബോർഡ് (KSELB) / ഇലക്ട്രിക്കൽ ഇൻസ്‌പെക്ടറേറ്റ്."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Submit application form with staff consent and instrument calibration vouchers.",
          "Licensing Board Committee scrutinizes technical staff qualifications and financial backing.",
          "Produce testing instruments for physical inspection at the Board office.",
          "Licensing Board issues Electrical Contractor Licence under Class A (All voltages), Class B (MV/HT), or Class C (Low voltage)."
        ],
        ml: [
          "നിശ്ചിത ഫോറത്തിൽ രേഖകൾ സഹിതം ലൈസൻസിംഗ് ബോർഡിന് അപേക്ഷ നൽകുക.",
          "ജീവനക്കാരുടെ യോഗ്യതകളും രേഖകളും പരിശോധിക്കുന്നു.",
          "ഉപകരണങ്ങൾ നേരിട്ട് പരിശോധനയ്ക്കായി ഹാജരാക്കുക.",
          "പരിശോധനകൾക്ക് ശേഷം ക്ലാസ് A, B, അല്ലെങ്കിൽ C കോൺട്രാക്ടർ ലൈസൻസ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://ceikerala.gov.in",
      notes: {
        en: "Licences require periodic renewal with updated staff appointment declarations and valid instrument calibration certificates.",
        ml: "ഉപകരണങ്ങളുടെ കാലിബ്രേഷൻ കൃത്യമായി നിലനിർത്തി നിശ്ചിത കാലയളവിൽ ലൈസൻസ് പുതുക്കേണ്ടതാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Grant of Electrical Supervisor Permit
    // ================================================================
    {
      id: "electrical-supervisor-permit",
      category: "government",
      relatedCategory: "other",
      subcategory: "industry-business",
      icon: "🎖️",
      name: {
        en: "Grant of Electrical Supervisor Permit",
        ml: "ഇലക്ട്രിക്കൽ സൂപ്പർവൈസർ പെർമിറ്റ്"
      },
      summary: {
        en: "Professional competency certificate issued by KSELB authorizing qualified personnel to supervise electrical works and sign statutory installation test reports.",
        ml: "ഇലക്ട്രിക്കൽ ജോലികൾക്ക് മേൽനോട്ടം വഹിക്കുന്നതിനും ടെസ്റ്റ് റിപ്പോർട്ടുകളിൽ ഒപ്പിടുന്നതിനും ലൈസൻസിംഗ് ബോർഡ് നൽകുന്ന പെർമിറ്റ്."
      },
      whoNeeds: {
        en: "Degree or Diploma holders in Electrical Engineering or experienced wiremen seeking statutory supervisory authorization.",
        ml: "ഇലക്ട്രിക്കൽ എൻജിനീയറിംഗ് ബിരുദധാരികൾ, ഡിപ്ലോമക്കാർ, പ്രവൃത്തിപരിചയമുള്ള വയർമാൻമാർ."
      },
      eligibility: {
        en: [
          "Degree or Diploma in Electrical Engineering from recognized universities/institutions, OR certified Wiremen with required field experience passing the Supervisor Examination"
        ],
        ml: [
          "അംഗീകൃത ഇലക്ട്രിക്കൽ എൻജിനീയറിംഗ് ബിരുദമോ ഡിപ്ലോമയോ ഉണ്ടായിരിക്കണം, അല്ലെങ്കിൽ സൂപ്പർവൈസർ പരീക്ഷ പാസ്സായ വയർമാൻമാർ ആയിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Degree or Diploma Certificate in Electrical Engineering with mark sheets",
          "Practical electrical field experience certificate",
          "SSLC Certificate / Age proof",
          "Medical Fitness Certificate (including vision acuity)",
          "Passport size photographs",
          "Treasury chalan receipt"
        ],
        ml: [
          "ഇലക്ട്രിക്കൽ എൻജിനീയറിംഗ് ഡിഗ്രി / ഡിപ്ലോമ സർട്ടിഫിക്കറ്റ്",
          "പ്രവൃത്തിപരിചയ രേഖകൾ",
          "SSLC സർട്ടിഫിക്കറ്റ്",
          "മെഡിക്കൽ ഫിറ്റ്നസ് സർട്ടിഫിക്കറ്റ്",
          "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ",
          "ട്രഷറി ചലാൻ രസീത്"
        ]
      },
      whereToApply: {
        en: "Kerala State Electricity Licensing Board (ceikerala.gov.in).",
        ml: "കേരള സ്റ്റേറ്റ് ഇലക്ട്രിസിറ്റി ലൈസൻസിംഗ് ബോർഡ് (KSELB)."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Submit application for direct grant (for engineering degree/diploma holders) or examination admission.",
          "Attend verification interview or Board practical examination.",
          "Licensing Board awards Electrical Supervisor Permit (Grade A for HT/EHT or Grade B for Medium/Low Voltage)."
        ],
        ml: [
          "യോഗ്യത തെളിയിക്കുന്ന രേഖകൾ സഹിതം ബോർഡിന് അപേക്ഷ സമർപ്പിക്കുക.",
          "അഭിമുഖത്തിലോ ബോർഡ് പരീക്ഷയിലോ പങ്കെടുക്കുക.",
          "പരിശോധനയ്ക്ക് ശേഷം സൂപ്പർവൈസർ പെർമിറ്റ് (ഗ്രേഡ് A അല്ലെങ്കിൽ B) അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://ceikerala.gov.in",
      notes: {
        en: "Engineering degree/diploma holders can avail of examination exemption under Board regulations subject to verification.",
        ml: "എൻജിനീയറിംഗ് ബിരുദമുള്ളവർക്ക് പരീക്ഷയില്ലാതെ തന്നെ ബോർഡ് പരിശോധനയിലൂടെ പെർമിറ്റ് ലഭിക്കുന്നതാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Grant of Electrical Wireman Permit
    // ================================================================
    {
      id: "electrical-wireman-permit",
      category: "government",
      relatedCategory: "other",
      subcategory: "industry-business",
      icon: "🛠️",
      name: {
        en: "Grant of Electrical Wireman Permit",
        ml: "ഇലക്ട്രിക്കൽ വയർമാൻ പെർമിറ്റ്"
      },
      summary: {
        en: "Statutory trade competency permit authorizing electricians to legally execute domestic, commercial, and industrial electrical wiring in Kerala.",
        ml: "കെട്ടിടങ്ങളിൽ നിയമാനുസൃതമായി ഇലക്ട്രിക്കൽ വയറിംഗ് ജോലികൾ ചെയ്യുന്നതിന് ഇലക്ട്രീഷ്യൻമാർക്ക് നൽകുന്ന ഔദ്യോഗിക ലൈസൻസ്."
      },
      whoNeeds: {
        en: "ITI Electricians, electrical apprentices, and practicing wiremen seeking authorized state certification.",
        ml: "ITI ഇലക്ട്രീഷ്യൻമാർ, വയറിംഗ് തൊഴിലാളികൾ, അപ്രന്റീസ് പരിശീലനം പൂർത്തിയാക്കിയവർ."
      },
      eligibility: {
        en: [
          "Candidates who have completed ITI/NCVT in Electrician/Wireman trade, OR candidates with prescribed electrical wiring practical experience passing the State Wireman Examination"
        ],
        ml: [
          "ITI ഇലക്ട്രീഷ്യൻ അല്ലെങ്കിൽ വയർമാൻ ട്രേഡ് പാസ്സായവർ, അല്ലെങ്കിൽ സംസ്ഥാന വയർമാൻ പരീക്ഷ പാസ്സായ പ്രവൃത്തിപരിചയമുള്ള തൊഴിലാളികൾ"
        ]
      },
      documents: {
        en: [
          "ITI / NCVT Trade Certificate or proof of approved apprenticeship",
          "SSLC Certificate / proof of date of birth",
          "Medical Certificate (including vision and colour blindness check)",
          "Identity proof and passport size photographs",
          "Treasury chalan receipt"
        ],
        ml: [
          "ITI / NCVT സർട്ടിഫിക്കറ്റ് അല്ലെങ്കിൽ അപ്രന്റീസ്ഷിപ്പ് രേഖ",
          "SSLC ബുക്ക് (പ്രായം തെളിയിക്കാൻ)",
          "മെഡിക്കൽ ഫിറ്റ്നസ് സർട്ടിഫിക്കറ്റ് (കാഴ്ച പരിശോധന അടക്കം)",
          "തിരിച്ചറിയൽ രേഖ, ഫോട്ടോകൾ",
          "ട്രഷറി ചലാൻ രസീത്"
        ]
      },
      whereToApply: {
        en: "Kerala State Electricity Licensing Board, Department of Electrical Inspectorate (ceikerala.gov.in).",
        ml: "കേരള സ്റ്റേറ്റ് ഇലക്ട്രിസിറ്റി ലൈസൻസിംഗ് ബോർഡ് (ceikerala.gov.in)."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Submit application for certificate exemption (ITI holders) or wireman examination registration.",
          "Appear for practical and oral wiring examination if applicable.",
          "Upon successful scrutiny/results, Licensing Board issues Electrical Wireman Permit."
        ],
        ml: [
          "അപേക്ഷാ ഫോറവും രേഖകളും സമർപ്പിക്കുക.",
          "പരീക്ഷ ആവശ്യമുള്ളവർ പ്രാക്ടിക്കൽ പരീക്ഷയിൽ പങ്കെടുക്കുക.",
          "വിജയിക്കുന്നവർക്ക് ഔദ്യോഗിക വയർമാൻ പെർമിറ്റ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://ceikerala.gov.in",
      notes: {
        en: "Permits require renewal every 5 years; executing wiring works without this permit is a violation of CEA regulations.",
        ml: "5 വർഷം കൂടുമ്പോൾ പെർമിറ്റ് പുതുക്കേണ്ടതാണ്; ലൈസൻസില്ലാതെ വയറിംഗ് ജോലികൾ ചെയ്യുന്നത് ചട്ടവിരുദ്ധമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Valuation of Electrical Installations
    // ================================================================
    {
      id: "electrical-installation-valuation",
      category: "government",
      icon: "📊",
      name: {
        en: "Valuation of Electrical Installations",
        ml: "ഇലക്ട്രിക്കൽ ഇൻസ്റ്റാളേഷൻ വാല്യുവേഷൻ"
      },
      summary: {
        en: "Official engineering appraisal certifying the depreciated replacement and market value of electrical plant installations, machinery, and equipment.",
        ml: "ഫാക്ടറികൾ, വാണിജ്യ സമുച്ചയങ്ങൾ എന്നിവിടങ്ങളിലെ ഇലക്ട്രിക്കൽ ഉപകരണങ്ങളുടെയും പ്ലാന്റുകളുടെയും ഔദ്യോഗിക മൂല്യനിർണ്ണയ രേഖ."
      },
      whoNeeds: {
        en: "Industrialists, commercial establishments, banks, and legal entities needing official valuation of electrical assets for court matters, insurance, or asset sales.",
        ml: "ഇലക്ട്രിക്കൽ ഉപകരണങ്ങളുടെ വിപണി മൂല്യം ബാങ്ക് വായ്പകൾ, കോടതി ആവശ്യങ്ങൾ, ഇൻഷുറൻസ് എന്നിവയ്ക്കായി തിട്ടപ്പെടുത്തേണ്ടവർക്ക്."
      },
      eligibility: {
        en: [
          "Owners or authorized managers of premises having registered electrical installations in Kerala"
        ],
        ml: [
          "കേരളത്തിൽ രജിസ്റ്റർ ചെയ്ത ഇലക്ട്രിക്കൽ ഉപകരണങ്ങളോ സബ്സ്റ്റേഷനുകളോ ഉള്ള സ്ഥാപന ഉടമകൾക്ക്"
        ]
      },
      documents: {
        en: [
          "Original purchase invoices and asset registers of transformers, generators, and cabling",
          "Approved Single Line Diagram (SLD)",
          "Year of commissioning and depreciation schedule",
          "Premises ownership or title proof"
        ],
        ml: [
          "ഉപകരണങ്ങളുടെ വാങ്ങിയ ബില്ലുകളും ആസ്തി രജിസ്റ്ററും",
          "അംഗീകൃത സിംഗിൾ ലൈൻ ഡയഗ്രം (SLD)",
          "പ്രവർത്തനമാരംഭിച്ച വർഷവും തേയ്മാന കണക്കുകളും",
          "വസ്തുവിന്റെ ഉടമസ്ഥാവകാശ രേഖ"
        ]
      },
      whereToApply: {
        en: "Department of Electrical Inspectorate (ceikerala.gov.in) / Office of the Electrical Inspector.",
        ml: "ഇലക്ട്രിക്കൽ ഇൻസ്‌പെക്ടറേറ്റ് പോർട്ടൽ അല്ലെങ്കിൽ ജില്ലാ ഇലക്ട്രിക്കൽ ഇൻസ്പെക്ടറുടെ ഓഫീസ്."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Submit formal valuation requisition letter detailing machinery particulars and purpose.",
          "Electrical Inspectorate engineers conduct physical inspection and technical condition audit.",
          "Valuation fee is remitted via treasury chalan.",
          "Department issues official Valuation Certificate specifying depreciated technical capital value."
        ],
        ml: [
          "ഉപകരണങ്ങളുടെ വിവരങ്ങൾ കാണിച്ച് ഇൻസ്പെക്ടറേറ്റിൽ അപേക്ഷ നൽകുക.",
          "എൻജിനീയർമാർ നേരിട്ടെത്തി യന്ത്രങ്ങളുടെ പ്രവർത്തനക്ഷമതയും തേയ്മാനവും പരിശോധിക്കുന്നു.",
          "ട്രഷറിയിൽ ഫീസ് അടയ്ക്കുക.",
          "സാക്ഷ്യപ്പെടുത്തിയ ഇലക്ട്രിക്കൽ വാല്യുവേഷൻ സർട്ടിഫിക്കറ്റ് കൈപ്പറ്റുക."
        ]
      },
      officialUrl: "https://ceikerala.gov.in",
      notes: {
        en: "Accepted as authoritative government engineering valuation by courts, liquidators, and financial institutions.",
        ml: "കോടതികൾ, ബാങ്കുകൾ, ഇൻഷുറൻസ് കമ്പനികൾ എന്നിവർ ആധികാരികമായി അംഗീകരിക്കുന്ന സാങ്കേതിക രേഖയാണിത്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Application for New LT / HT Electricity Connection
    // ================================================================
    {
      id: "kseb-new-electricity-connection",
      category: "government",
      icon: "⚡",
      name: {
        en: "Application for New LT / HT Electricity Connection",
        ml: "കെ.എസ്.ഇ.ബി പുതിയ വൈദ്യുതി കണക്ഷൻ"
      },
      summary: {
        en: "Citizen service to obtain a new low-tension (LT) or high-tension (HT) electricity connection and energy meter for domestic, commercial, or agricultural needs.",
        ml: "വീടുകൾക്കോ സ്ഥാപനങ്ങൾക്കോ കൃഷിക്കോ കെ.എസ്.ഇ.ബിയിൽ നിന്ന് പുതിയ വൈദ്യുതി കണക്ഷൻ ലഭിക്കുന്നതിനുള്ള സേവനം."
      },
      whoNeeds: {
        en: "Property owners, tenants, or legal occupants requiring new electric power supply to a premises.",
        ml: "പുതിയ വീട് നിർമ്മിച്ചവർ, വാണിജ്യ സ്ഥാപനങ്ങൾ തുടങ്ങുന്നവർ, കൃഷി ആവശ്യങ്ങൾക്ക് വൈദ്യുതി വേണ്ടവർ."
      },
      eligibility: {
        en: [
          "Lawful occupants or owners of premises situated within KSEBL operational supply zones in Kerala"
        ],
        ml: [
          "കേരളത്തിൽ കെ.എസ്.ഇ.ബി വിതരണ പരിധിയിലുള്ള സ്ഥലത്തിന്റെ ഉടമകൾക്കോ നിയമാനുസൃത താമസക്കാർക്കോ"
        ]
      },
      documents: {
        en: [
          "Proof of ownership or occupancy (Building Tax Receipt, Registered Title Deed, or Rent Agreement with Owner NOC)",
          "Identity proof of applicant",
          "Wiring Completion Certificate and Test Report from a Licensed Electrical Contractor",
          "For agricultural connections: Recommendation certificate from Agricultural Officer / Krishi Bhavan"
        ],
        ml: [
          "ഉടമസ്ഥാവകാശം തെളിയിക്കുന്ന രേഖ (കെട്ടിട നികുതി രസീത്, ആധാരം അല്ലെങ്കിൽ വാടകക്കരാർ)",
          "അപേക്ഷകന്റെ തിരിച്ചറിയൽ രേഖ",
          "ലൈസൻസ്ഡ് ഇലക്ട്രീഷ്യൻ നൽകിയ വയറിംഗ് കംപ്ലീഷൻ ടെസ്റ്റ് റിപ്പോർട്ട്",
          "കാർഷിക കണക്ഷനുകൾക്ക്: കൃഷി ഓഫീസറുടെ സാക്ഷ്യപത്രം"
        ]
      },
      whereToApply: {
        en: "Online via KSEB Web Self Services Portal (wss.kseb.in) or offline at the local Electrical Section Office.",
        ml: "കെ.എസ്.ഇ.ബി വെബ് സെൽഫ് സർവീസസ് പോർട്ടൽ (wss.kseb.in) വഴിയോ അസിസ്റ്റന്റ് എൻജിനീയറുടെ കാര്യാലയത്തിലോ (ഇലക്ട്രിക്കൽ സെക്ഷൻ ഓഫീസ്)."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to KSEB Web Self Services portal and select 'New Connection'.",
          "Enter premises details, required connected load (Watts), and tariff category.",
          "Upload identity proof, ownership document, and wiring test report.",
          "Pay application and processing fee online.",
          "Sub-Engineer conducts site feasibility inspection; pay required security deposit (CD) and service connection charges.",
          "KSEB line staff install energy meter and release power supply."
        ],
        ml: [
          "കെ.എസ്.ഇ.ബി വെബ് സെൽഫ് സർവീസസ് പോർട്ടലിൽ 'New Connection' തിരഞ്ഞെടുക്കുക.",
          "ആവശ്യമായ ലോഡും താരിഫും രേഖപ്പെടുത്തുക.",
          "ഉടമസ്ഥാവകാശ രേഖയും വയറിംഗ് റിപ്പോർട്ടും അപ്‌ലോഡ് ചെയ്യുക.",
          "ഫീസ് അടച്ച ശേഷം എൻജിനീയർ ഫീൽഡ് പരിശോധന നടത്തുന്നു.",
          "സെക്യൂരിറ്റി ഡെപ്പോസിറ്റ് അടയ്ക്കുന്നതോടെ ലൈൻ വലിച്ച് മീറ്റർ സ്ഥാപിച്ച് വൈദ്യുതി ലഭ്യമാക്കുന്നു."
        ]
      },
      officialUrl: "https://wss.kseb.in/selfservices/newconnection",
      notes: {
        en: "For domestic connections up to 5 kW without line extensions, service is released rapidly under KSERC guaranteed standards of performance.",
        ml: "പോസ്റ്റ് നീട്ടലുകൾ ആവശ്യമില്ലാത്ത 5 kW വരെയുള്ള ഗാർഹിക കണക്ഷനുകൾ വളരെ വേഗത്തിൽ ലഭ്യമാക്കാറുണ്ട്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Connected Load Enhancement / Reduction
    // ================================================================
    {
      id: "kseb-load-change",
      category: "government",
      icon: "⚡",
      name: {
        en: "Connected Load Enhancement / Reduction",
        ml: "കെ.എസ്.ഇ.ബി കണക്റ്റഡ് ലോഡ് മാറ്റം"
      },
      summary: {
        en: "Official procedure to increase or decrease the authorized connected electrical load (Watts/kW) of an existing KSEB electricity connection.",
        ml: "പുതിയ ഉപകരണങ്ങൾ വെയ്ക്കുമ്പോഴോ മറ്റോ നിലവിലെ വൈദ്യുതി കണക്ഷന്റെ അംഗീകൃത ലോഡ് കൂട്ടുന്നതിനോ കുറയ്ക്കുന്നതിനോ ഉള്ള സേവനം."
      },
      whoNeeds: {
        en: "Consumers adding high-wattage air conditioners, EV chargers, or heavy motors, or seeking to reduce connected wattage to lower fixed charges.",
        ml: "എയർ കണ്ടീഷണർ, ഇ.വി ചാർജർ എന്നിവ പുതിയതായി വെച്ചവർക്കോ ലോഡ് കുറയ്ക്കാൻ ആഗ്രഹിക്കുന്നവർക്കോ."
      },
      eligibility: {
        en: [
          "Registered KSEB electricity consumers having an active service connection without outstanding dues"
        ],
        ml: [
          "കുടിശ്ശികകളില്ലാത്ത സജീവമായ കെ.എസ്.ഇ.ബി കണക്ഷനുള്ള ഉപഭോക്താക്കൾക്ക്"
        ]
      },
      documents: {
        en: [
          "13-digit Consumer Number and latest electricity bill receipt",
          "Revised wiring test report from a licensed electrician (if adding substantial load)",
          "Identity proof of consumer"
        ],
        ml: [
          "13 അക്ക കൺസ്യൂമർ നമ്പർ, ഏറ്റവും പുതിയ കറണ്ട് ബിൽ രസീത്",
          "ലൈസൻസ്ഡ് വയർമാന്റെ ടെസ്റ്റ് റിപ്പോർട്ട് (കാര്യമായ ലോഡ് വർദ്ധനവിന്)",
          "ഉപഭോക്താവിന്റെ തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online via KSEB Web Self Services Portal (wss.kseb.in) or local Electrical Section Office.",
        ml: "കെ.എസ്.ഇ.ബി വെബ് സെൽഫ് സർവീസസ് പോർട്ടൽ (wss.kseb.in) വഴിയോ സെക്ഷൻ ഓഫീസിലോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to KSEB portal and select 'Load Enhancement / Reduction'.",
          "Enter proposed new connected load in Watts.",
          "Upload electrician's test report if adding heavy equipment.",
          "Pay additional Cash Security Deposit (CD) based on added kW.",
          "Sub-Engineer verifies installation and updates sanctioned load in the billing system."
        ],
        ml: [
          "കെ.എസ്.ഇ.ബി പോർട്ടലിൽ 'Load Change' തിരഞ്ഞെടുക്കുക.",
          "ആവശ്യമായ പുതിയ ലോഡ് എത്രയെന്ന് രേഖപ്പെടുത്തുക.",
          "ടെസ്റ്റ് റിപ്പോർട്ട് അപ്‌ലോഡ് ചെയ്യുക.",
          "അധിക ലോഡിന് ആനുപാതികമായ സെക്യൂരിറ്റി ഡെപ്പോസിറ്റ് അടയ്ക്കുക.",
          "പരിശോധനയ്ക്ക് ശേഷം ബില്ലിംഗ് സിസ്റ്റത്തിൽ ലോഡ് അപ്‌ഡേറ്റ് ചെയ്യപ്പെടും."
        ]
      },
      officialUrl: "https://wss.kseb.in/selfservices/",
      notes: {
        en: "Enhancing load regularizes AC and EV loads, preventing steep unauthorized additional load (UAL) penalties during Anti-Power Theft Squad (APTS) inspections.",
        ml: "അധിക ലോഡ് മുൻകൂട്ടി അനുമതി വാങ്ങി ക്രമപ്പെടുത്തുന്നത് കെ.എസ്.ഇ.ബിയുടെ വലിയ പിഴകളിൽ നിന്ന് രക്ഷനേടാൻ സഹായിക്കും."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Shifting of Electric Energy Meter
    // ================================================================
    {
      id: "kseb-meter-shifting",
      category: "government",
      icon: "📦",
      name: {
        en: "Shifting of Electric Energy Meter",
        ml: "കെ.എസ്.ഇ.ബി മീറ്റർ മാറ്റിസ്ഥാപിക്കൽ"
      },
      summary: {
        en: "Authorized relocation of the electric energy meter board to a safer or renovated position within the same compound by KSEB line staff.",
        ml: "വീട് പുതുക്കിപ്പണിയുമ്പോഴോ മറ്റോ കറണ്ട് മീറ്റർ ബോർഡ് കോമ്പൗണ്ടിനുള്ളിലെ മറ്റൊരു സുരക്ഷിത സ്ഥാനത്തേക്ക് മാറ്റിസ്ഥാപിക്കുന്നതിനുള്ള സേവനം."
      },
      whoNeeds: {
        en: "Consumers remodeling buildings, demolishing meter-bearing walls, or rectifying hazardous meter locations.",
        ml: "കെട്ടിടം പുനർനിർമ്മിക്കുകയോ മീറ്റർ നിൽക്കുന്ന ഭിത്തി പൊളിക്കുകയോ ചെയ്യേണ്ടിവരുന്ന ഉപഭോക്താക്കൾക്ക്."
      },
      eligibility: {
        en: [
          "Registered consumer having active connection; shifting must be within the same registered property boundary"
        ],
        ml: [
          "സജീവ കണക്ഷനുള്ള ഉപഭോക്താക്കൾക്ക്; മാറ്റിസ്ഥാപിക്കുന്നത് അതേ കോമ്പൗണ്ടിനുള്ളിൽ തന്നെ ആയിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "13-digit Consumer Number and latest bill payment receipt",
          "Requisition letter explaining reason and rough sketch of proposed new position",
          "Wiring readiness certificate from licensed wireman",
          "Proof of property ownership/occupancy"
        ],
        ml: [
          "കൺസ്യൂമർ നമ്പർ, കറണ്ട് ബിൽ രസീത്",
          "കാരണം വ്യക്തമാക്കുന്ന അപേക്ഷയും പുതിയ സ്ഥലത്തിന്റെ സ്കെച്ചും",
          "വയറിംഗ് റെഡിനെസ്സ് സർട്ടിഫിക്കറ്റ്",
          "ഉടമസ്ഥാവകാശ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online via KSEB Portal (wss.kseb.in) or formal application to Assistant Engineer, Electrical Section.",
        ml: "കെ.എസ്.ഇ.ബി പോർട്ടൽ വഴിയോ ഇലക്ട്രിക്കൽ സെക്ഷൻ ഓഫീസിലോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Submit meter shifting application on portal or at Section Office.",
          "Assistant Engineer inspects feasibility and prepares labor and materials estimate.",
          "Consumer remits estimated shifting charges.",
          "KSEB line staff break seals, shift meter to new approved board, and reseal the meter."
        ],
        ml: [
          "മീറ്റർ മാറ്റുന്നതിനുള്ള അപേക്ഷ സെക്ഷൻ ഓഫീസിൽ നൽകുക.",
          "എൻജിനീയർ സ്ഥലം പരിശോധിച്ച് എസ്റ്റിമേറ്റ് തയ്യാറാക്കുന്നു.",
          "എസ്റ്റിമേറ്റ് തുക അടയ്ക്കുക.",
          "കെ.എസ്.ഇ.ബി ജീവനക്കാർ നേരിട്ടെത്തി മീറ്റർ പുതിയ സ്ഥാനത്തേക്ക് മാറ്റി സീൽ ചെയ്യുന്നു."
        ]
      },
      officialUrl: "https://wss.kseb.in/selfservices/",
      notes: {
        en: "Never attempt to shift or break energy meter seals independently; doing so constitutes a criminal offense under the Electricity Act.",
        ml: "ഉപഭോക്താക്കൾ സ്വന്തമായി മീറ്റർ മാറ്റുകയോ സീൽ പൊട്ടിക്കുകയോ ചെയ്യരുത്; അത് നിയമവിരുദ്ധമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Transfer of Ownership of Electric Connection
    // ================================================================
    {
      id: "kseb-ownership-change",
      category: "government",
      icon: "🔄",
      name: {
        en: "Transfer of Ownership of Electric Connection",
        ml: "കെ.എസ്.ഇ.ബി ഉടമസ്ഥാവകാശം മാറ്റൽ"
      },
      summary: {
        en: "Legal transfer of electricity service connection, meter registration, and security deposit to a new property buyer or legal heir.",
        ml: "വൈദ്യുതി കണക്ഷനും മീറ്ററും പുതിയ വസ്തു ഉടമയുടെയോ അനന്തരാവകാശിയുടെയോ പേരിലേക്ക് മാറ്റിസ്ഥാപിക്കുന്നതിനുള്ള സേവനം."
      },
      whoNeeds: {
        en: "New property purchasers, tenants, or legal successors upon demise of the prior registered consumer.",
        ml: "സ്ഥലം വാങ്ങിയ പുതിയ ഉടമകൾ, അല്ലെങ്കിൽ മുൻ ഉപഭോക്താവ് മരണപ്പെട്ടതിനെ തുടർന്ന് അവകാശികൾ."
      },
      eligibility: {
        en: [
          "Lawful owner or occupant of premises with zero pending electricity bill arrears"
        ],
        ml: [
          "സ്ഥലത്തിന്റെ ഉടമസ്ഥാവകാശമുള്ളവരും മുൻകാല കുടിശ്ശികകൾ ഒന്നുമില്ലാത്തവരുമായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Latest electricity bill payment receipt (with zero arrears)",
          "Proof of property ownership (Registered Sale/Settlement Deed or Building Tax Receipt in applicant's name)",
          "Consent letter / NOC from prior registered consumer (OR Death Certificate and Legal Heir Certificate if prior owner is deceased)",
          "Identity proof of new applicant"
        ],
        ml: [
          "കുടിശ്ശികയില്ലാത്ത ഏറ്റവും പുതിയ കറണ്ട് ബിൽ രസീത്",
          "വസ്തുവിന്റെ ഉടമസ്ഥാവകാശ രേഖ (ആധാരം അല്ലെങ്കിൽ സ്വന്തം പേരിലുള്ള കെട്ടിട നികുതി രസീത്)",
          "മുൻ ഉടമയുടെ സമ്മതപത്രം (മരണപ്പെട്ടതാണെങ്കിൽ മരണ സർട്ടിഫിക്കറ്റും അനന്തരാവകാശ രേഖയും)",
          "പുതിയ അപേക്ഷകന്റെ തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online via KSEB Web Self Services Portal (wss.kseb.in) or local Electrical Section Office.",
        ml: "കെ.എസ്.ഇ.ബി പോർട്ടൽ വഴിയോ ഇലക്ട്രിക്കൽ സെക്ഷൻ ഓഫീസ് വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Log in to KSEB portal and select 'Ownership Change'.",
          "Enter consumer number and upload title deed and NOC / death certificate.",
          "Pay nominal transfer fee and execute agreement.",
          "Assistant Engineer validates records and updates consumer name in the billing database."
        ],
        ml: [
          "കെ.എസ്.ഇ.ബി പോർട്ടലിൽ 'Ownership Change' തിരഞ്ഞെടുക്കുക.",
          "ആധാരവും മുൻ ഉടമയുടെ സമ്മതപത്രവും (അല്ലെങ്കിൽ മരണ സർട്ടിഫിക്കറ്റ്) നൽകുക.",
          "ട്രാൻസ്ഫർ ഫീസ് അടയ്ക്കുക.",
          "പരിശോധനയ്ക്ക് ശേഷം കണക്ഷൻ പുതിയ ഉടമയുടെ പേരിലേക്ക് മാറുന്നു."
        ]
      },
      officialUrl: "https://wss.kseb.in/selfservices/",
      notes: {
        en: "The existing Cash Security Deposit (CD) is formally assigned to the incoming consumer upon mutual consent or legal succession.",
        ml: "മുൻ ഉപഭോക്താവ് അടച്ച സെക്യൂരിറ്റി ഡെപ്പോസിറ്റ് പുതിയ ഉപഭോക്താവിന്റെ പേരിലേക്ക് മാറ്റിനൽകുന്നതാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Conversion of Electric Connection (Single Phase to Three Phase)
    // ================================================================
    {
      id: "kseb-phase-change",
      category: "government",
      icon: "⚡",
      name: {
        en: "Conversion of Electric Connection (Single Phase to Three Phase)",
        ml: "കെ.എസ്.ഇ.ബി സിംഗിൾ-ഫേസ് / ത്രീ-ഫേസ് മാറ്റം"
      },
      summary: {
        en: "Upgrading a single-phase electricity service connection to a three-phase connection to support higher connected loads exceeding 5000 Watts.",
        ml: "കൂടുതൽ ഉപകരണങ്ങൾ പ്രവർത്തിപ്പിക്കുന്നതിനായി സിംഗിൾ ഫേസ് കണക്ഷൻ ത്രീ ഫേസ് കണക്ഷനാക്കി മാറ്റുന്നതിനുള്ള സേവനം."
      },
      whoNeeds: {
        en: "Domestic or commercial consumers adding multiple air conditioners, heavy pumping motors, or three-phase equipment.",
        ml: "കണക്റ്റഡ് ലോഡ് 5 കിലോവാട്ടിന് മുകളിലാവുകയോ ത്രീഫേസ് മെഷീനുകൾ ഉപയോഗിക്കുകയോ ചെയ്യുന്ന ഉപഭോക്താക്കൾക്ക്."
      },
      eligibility: {
        en: [
          "Active KSEB single-phase consumer whose total connected load exceeds 5 kW or requires 3-phase balancing"
        ],
        ml: [
          "കണക്റ്റഡ് ലോഡ് 5000 വാട്സിന് മുകളിലുള്ള നിലവിലെ കെ.എസ്.ഇ.ബി സിംഗിൾ ഫേസ് ഉപഭോക്താക്കൾക്ക്"
        ]
      },
      documents: {
        en: [
          "Latest electricity bill receipt and applicant identity proof",
          "Test report from a Licensed Electrical Contractor certifying installation of 3-phase distribution board, isolator, and proper earth pits",
          "Revised load calculation sheet"
        ],
        ml: [
          "ഏറ്റവും പുതിയ കറണ്ട് ബിൽ രസീത്, തിരിച്ചറിയൽ രേഖ",
          "ത്രീഫേസ് ഡിസ്ട്രിബ്യൂഷൻ ബോർഡും എർത്ത് കുഴികളും സജ്ജമാക്കിയെന്ന ലൈസൻസ്ഡ് വയർമാന്റെ ടെസ്റ്റ് റിപ്പോർട്ട്",
          "ലോഡ് കണക്കുകൂട്ടൽ വിവരങ്ങൾ"
        ]
      },
      whereToApply: {
        en: "Online via KSEB Web Self Services Portal (wss.kseb.in) or local Electrical Section Office.",
        ml: "കെ.എസ്.ഇ.ബി പോർട്ടൽ വഴിയോ ഇലക്ട്രിക്കൽ സെക്ഷൻ ഓഫീസിലോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Submit application for phase conversion online or at Section Office.",
          "Complete three-phase internal wiring up to meter point through a licensed contractor.",
          "Sub-Engineer inspects 3-phase board and earth resistance.",
          "Pay required 3-phase meter charges and additional security deposit.",
          "KSEB line staff replace single-phase meter with 3-phase bi-directional/static meter."
        ],
        ml: [
          "ഫേസ് മാറ്റത്തിനായി പോർട്ടലിൽ അപേക്ഷിക്കുക.",
          "ലൈസൻസ്ഡ് വയർമാൻ മുഖേന ത്രീഫേസ് വയറിംഗ് പൂർത്തിയാക്കുക.",
          "എൻജിനീയർ നേരിട്ടെത്തി പരിശോധിക്കുന്നു.",
          "ഫീസും സെക്യൂരിറ്റി ഡെപ്പോസിറ്റും അടയ്ക്കുക.",
          "കെ.എസ്.ഇ.ബി ജീവനക്കാർ ത്രീഫേസ് മീറ്റർ സ്ഥാപിക്കുന്നു."
        ]
      },
      officialUrl: "https://wss.kseb.in/selfservices/",
      notes: {
        en: "Under KSERC supply regulations, three-phase conversion is mandatory if total connected load exceeds 5000 Watts (5 kW).",
        ml: "ലോഡ് 5 kW ന് മുകളിലായാൽ ത്രീഫേസ് കണക്ഷൻ എടുക്കണമെന്ന് ചട്ടമുണ്ട്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Shifting of Electric Post or Lines
    // ================================================================
    {
      id: "kseb-post-shifting",
      category: "government",
      icon: "🏗️",
      name: {
        en: "Shifting of Electric Post or Lines",
        ml: "കെ.എസ്.ഇ.ബി പോസ്റ്റ് മാറ്റിസ്ഥാപിക്കൽ"
      },
      summary: {
        en: "Formal procedure to request the relocation of an obstructive or hazardous electricity post or overhead power line at the applicant's expense under deposit work rules.",
        ml: "വസ്തുവിലേക്കുള്ള വഴിയോ ഗേറ്റോ തടസ്സപ്പെടുത്തുന്ന ഇലക്ട്രിക് പോസ്റ്റുകളും ലൈനുകളും സ്വന്തം ചെലവിൽ മാറ്റിസ്ഥാപിക്കുന്നതിനുള്ള സേവനം."
      },
      whoNeeds: {
        en: "Property owners facing obstruction to vehicular gates, compound walls, or building work due to existing KSEB posts or lines.",
        ml: "ഗേറ്റിന് മുന്നിലോ വഴി തടസ്സപ്പെടുത്തിയോ നിൽക്കുന്ന ഇലക്ട്രിക് പോസ്റ്റുകൾ മാറ്റാൻ ആഗ്രഹിക്കുന്നവർക്ക്."
      },
      eligibility: {
        en: [
          "Titleholder of property affected by the post/line; shifting must be technically feasible without causing right-of-way issues with neighbors"
        ],
        ml: [
          "വസ്തു ഉടമകൾക്ക്; പോസ്റ്റ് മാറ്റുന്നത് സാങ്കേതികമായി സാധ്യമായതും അയൽവാസികൾക്ക് തടസ്സമില്ലാത്തതുമായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Property title deed or ownership proof",
          "Site sketch showing existing post location, property boundary, and proposed alternate location",
          "Written consent (NOC) from neighboring landowners if the new alignment borders other private boundaries",
          "Applicant identity proof"
        ],
        ml: [
          "വസ്തുവിന്റെ ആധാരം / ഉടമസ്ഥാവകാശ രേഖ",
          "പോസ്റ്റിന്റെ നിലവിലെ സ്ഥാനവും മാറ്റേണ്ട സ്ഥാനവും കാണിക്കുന്ന സ്കെച്ച്",
          "അയൽവാസികളുടെ അതിർത്തിയിലൂടെയാണെങ്കിൽ അവരുടെ സമ്മതപത്രം",
          "തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online via KSEB Web Self Services Portal (wss.kseb.in) or formal application to the Assistant Executive Engineer (KSEB Electrical Sub-Division).",
        ml: "കെ.എസ്.ഇ.ബി പോർട്ടൽ വഴിയോ അസിസ്റ്റന്റ് എക്സിക്യൂട്ടീവ് എൻജിനീയർക്ക് (സബ് ഡിവിഷൻ ഓഫീസ്) നേരിട്ടോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Submit post shifting application with site sketch and neighbor NOCs.",
          "Assistant Executive Engineer conducts field inspection to determine technical feasibility.",
          "KSEB issues Deposit Work estimate covering labor, transport, and material costs.",
          "Applicant remits the full estimated amount.",
          "KSEB line staff erect new post, transfer conductors, and dismantle the old post."
        ],
        ml: [
          "സ്കെച്ച് സഹിതം സബ് ഡിവിഷൻ ഓഫീസിൽ അപേക്ഷ നൽകുക.",
          "എൻജിനീയർ നേരിട്ടെത്തി സാങ്കേതിക സാധ്യതകൾ പരിശോധിക്കുന്നു.",
          "ഡെപ്പോസിറ്റ് വർക്ക് എസ്റ്റിമേറ്റ് നൽകുന്നു.",
          "മുഴുവൻ തുകയും അടയ്ക്കുന്നതോടെ കെ.എസ്.ഇ.ബി ജീവനക്കാർ പഴയ പോസ്റ്റ് മാറ്റി പുതിയ സ്ഥാനത്ത് സ്ഥാപിക്കുന്നു."
        ]
      },
      officialUrl: "https://wss.kseb.in/selfservices/",
      notes: {
        en: "Entire shifting cost must be fully borne by the applicant under deposit work rules. Disputes regarding public pathways are referred to the District Magistrate (ADM).",
        ml: "പോസ്റ്റ് മാറ്റുന്നതിനുള്ള മുഴുവൻ ചെലവും അപേക്ഷകൻ തന്നെ വഹിക്കേണ്ടതാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Reclassification of Electricity Tariff
    // ================================================================
    {
      id: "kseb-tariff-change",
      category: "government",
      icon: "📋",
      name: {
        en: "Reclassification of Electricity Tariff",
        ml: "കെ.എസ്.ഇ.ബി താരിഫ് വിഭാഗം മാറ്റൽ"
      },
      summary: {
        en: "Official reclassification of an electricity meter's billing tariff to reflect changes in premises use between domestic, commercial, industrial, or agricultural categories.",
        ml: "കെട്ടിടത്തിന്റെ ഉപയോഗം മാറുമ്പോൾ (ഉദാ: വീട് വാണിജ്യ ആവശ്യങ്ങൾക്ക് ഉപയോഗിക്കുമ്പോൾ) കറണ്ട് ബില്ലിലെ താരിഫ് മാറ്റുന്നതിനുള്ള സേവനം."
      },
      whoNeeds: {
        en: "Consumers converting domestic premises into commercial shops, offices, or converting commercial premises back to domestic residences.",
        ml: "വീടുകളിൽ കടകളോ ഓഫീസുകളോ തുടങ്ങുന്നവർ, അല്ലെങ്കിൽ കൊമേഴ്സ്യൽ ബിൽഡിംഗ് വീടുകളാക്കി മാറ്റുന്നവർ."
      },
      eligibility: {
        en: [
          "Registered consumer holding active service connection with clear evidence of modified premises occupancy"
        ],
        ml: [
          "കെട്ടിടത്തിന്റെ ഉപയോഗത്തിൽ വ്യത്യാസം വന്നിട്ടുള്ള സജീവ കെ.എസ്.ഇ.ബി ഉപഭോക്താക്കൾക്ക്"
        ]
      },
      documents: {
        en: [
          "Latest electricity bill and payment receipt",
          "Proof of revised activity (e.g., Local body Trade Licence for commercial; Certificate from Krishi Bhavan for agricultural; completion proof for domestic)",
          "Applicant identity proof"
        ],
        ml: [
          "ഏറ്റവും പുതിയ കറണ്ട് ബിൽ രസീത്",
          "പുതിയ ആവശ്യത്തിനുള്ള തെളിവ് (ഉദാ: വ്യാപാര ലൈസൻസ്, കൃഷി ഓഫീസറുടെ സാക്ഷ്യപത്രം)",
          "തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online via KSEB Web Self Services Portal (wss.kseb.in) or local Electrical Section Office.",
        ml: "കെ.എസ്.ഇ.ബി പോർട്ടൽ വഴിയോ ഇലക്ട്രിക്കൽ സെക്ഷൻ ഓഫീസ് വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Submit application for tariff reclassification on the KSEB portal.",
          "Upload documents proving the changed nature of property use.",
          "Sub-Engineer conducts premises verification audit.",
          "Pay differential Cash Security Deposit (if transitioning to a commercial tariff).",
          "Tariff code is updated in the billing software for subsequent meter cycles."
        ],
        ml: [
          "പോർട്ടലിൽ താരിഫ് മാറ്റത്തിനായി അപേക്ഷിക്കുക.",
          "പുതിയ പ്രവർത്തനങ്ങൾ തെളിയിക്കുന്ന രേഖകൾ നൽകുക.",
          "എൻജിനീയർ നേരിട്ടെത്തി പരിശോധിക്കുന്നു.",
          "സെക്യൂരിറ്റി ഡെപ്പോസിറ്റിലെ വ്യത്യാസം അടയ്ക്കുക.",
          "അടുത്ത ബിൽ മുതൽ പുതിയ താരിഫ് പ്രാബല്യത്തിൽ വരും."
        ]
      },
      officialUrl: "https://wss.kseb.in/selfservices/",
      notes: {
        en: "Using domestic power (LT-1A) for commercial purposes without formal tariff change incurs severe penalty tariffs and legal prosecution under Section 126 of the Electricity Act.",
        ml: "വീട്ടുപയോഗത്തിനുള്ള വൈദ്യുതി വാണിജ്യ ആവശ്യങ്ങൾക്ക് ഉപയോഗിക്കുന്നത് നിയമവിരുദ്ധവും വലിയ പിഴകൾക്ക് കാരണമാകുന്നതുമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Revision of Contract Demand (HT / EHT)
    // ================================================================
    {
      id: "kseb-contract-demand-change",
      category: "government",
      relatedCategory: "other",
      subcategory: "industry-business",
      icon: "🏭",
      name: {
        en: "Revision of Contract Demand (HT / EHT)",
        ml: "കെ.എസ്.ഇ.ബി കോൺട്രാക്ട് ഡിമാൻഡ് മാറ്റം"
      },
      summary: {
        en: "Specialized engineering procedure for industrial and high-tension commercial enterprises to increase or reduce their contracted maximum power demand (kVA).",
        ml: "വൻകിട വ്യവസായങ്ങൾക്കും ഹൈടെൻഷൻ (HT) ഉപഭോക്താക്കൾക്കും തങ്ങളുടെ പവർ ഡിമാൻഡ് (kVA) കൂട്ടുന്നതിനോ കുറയ്ക്കുന്നതിനോ ഉള്ള സേവനം."
      },
      whoNeeds: {
        en: "High Tension (HT), Extra High Tension (EHT), or large industrial enterprises managing fixed power demand charges.",
        ml: "ഫാക്ടറികൾ, മാളുകൾ, ആശുപത്രികൾ തുടങ്ങിയ വൻകിട വൈദ്യുതി ഉപഭോക്താക്കൾക്ക്."
      },
      eligibility: {
        en: [
          "HT / EHT consumer possessing an active formal power supply agreement with KSEBL without billing defaults"
        ],
        ml: [
          "കെ.എസ്.ഇ.ബിയുമായി സജീവ കരാറുള്ള ഹൈടെൻഷൻ ഉപഭോക്താക്കൾക്ക്"
        ]
      },
      documents: {
        en: [
          "Existing HT Power Agreement details",
          "Recorded maximum demand history for the preceding 12 billing months",
          "Plant machinery electrical load schedule and engineering justification",
          "Arrears clearance certificate"
        ],
        ml: [
          "നിലവിലെ HT പവർ എഗ്രിമെന്റ്",
          "കഴിഞ്ഞ 12 മാസത്തെ മാക്സിമം ഡിമാൻഡ് വിവരങ്ങൾ",
          "യന്ത്രങ്ങളുടെ ലോഡ് വിവരങ്ങളും സാങ്കേതിക രേഖകളും",
          "കുടിശ്ശികയില്ലാത്ത രസീത്"
        ]
      },
      whereToApply: {
        en: "KSEB HT Web Portal (wss.kseb.in) / Office of the Special Officer - Revenue (Vydyuthi Bhavanam, Thiruvananthapuram).",
        ml: "കെ.എസ്.ഇ.ബി HT പോർട്ടൽ അല്ലെങ്കിൽ തിരുവനന്തപുരം സ്പെഷ്യൽ ഓഫീസർ (റെവന്യൂ) കാര്യാലയം."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Submit application for contract demand revision online or to the Special Officer - Revenue.",
          "Transmission and distribution wings assess grid feeder capacity and sub-station loading.",
          "Remit agreement fee and supplementary security deposit (if enhancing demand).",
          "Execute supplementary agreement; revised billing demand comes into effect."
        ],
        ml: [
          "റവന്യൂ സ്പെഷ്യൽ ഓഫീസർക്ക് അപേക്ഷ നൽകുക.",
          "ഗ്രിഡ് കപ്പാസിറ്റി എൻജിനീയറിംഗ് പരിശോധന നടത്തുന്നു.",
          "സപ്ലിമെന്ററി എഗ്രിമെന്റ് ഒപ്പുവെച്ച് ഫീസ് അടയ്ക്കുക.",
          "പുതുക്കിയ കോൺട്രാക്ട് ഡിമാൻഡ് പ്രാബല്യത്തിൽ വരുന്നു."
        ]
      },
      officialUrl: "https://wss.kseb.in/selfservices/",
      notes: {
        en: "Optimizing contract demand prevents drawing excess power beyond sanctioned limits which incurs heavy penalty surcharges.",
        ml: "ഡിമാൻഡ് കൃത്യമായി നിലനിർത്തുന്നത് വഴി അനാവശ്യ ഫിക്സഡ് ചാർജ്ജുകളും പെനാൽറ്റികളും ഒഴിവാക്കാം."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Application for New Piped Water Connection
    // ================================================================
    {
      id: "kwa-new-water-connection",
      category: "government",
      icon: "💧",
      name: {
        en: "Application for New Piped Water Connection",
        ml: "വാട്ടർ അതോറിറ്റി പുതിയ കുടിവെള്ള കണക്ഷൻ"
      },
      summary: {
        en: "Citizen service to obtain a domestic, non-domestic, or industrial piped drinking water supply connection from Kerala Water Authority.",
        ml: "വീടുകളിലോ സ്ഥാപനങ്ങളിലോ വാട്ടർ അതോറിറ്റിയുടെ പൈപ്പ് വഴി കുടിവെള്ള കണക്ഷൻ ലഭിക്കുന്നതിനുള്ള സേവനം."
      },
      whoNeeds: {
        en: "Property owners or residents located near an active KWA water distribution main line.",
        ml: "വാട്ടർ അതോറിറ്റിയുടെ പൈപ്പ് ലൈൻ പോകുന്ന പ്രദേശങ്ങളിലെ വസ്തു ഉടമകൾക്കും താമസക്കാർക്കും."
      },
      eligibility: {
        en: [
          "Premises situated within practical hydraulic distance of an active KWA distribution pipeline"
        ],
        ml: [
          "വാട്ടർ അതോറിറ്റിയുടെ കുടിവെള്ള പൈപ്പ് ലൈൻ കടന്നുപോകുന്ന സ്ഥലങ്ങളിലുള്ളവർക്ക്"
        ]
      },
      documents: {
        en: [
          "Property ownership proof (Building Tax Receipt, Property Tax Receipt, or Registered Title Deed)",
          "Applicant identity proof",
          "Road cutting permit or restoration receipt from Local Body / PWD (if pipeline must cross public road)",
          "Rough sketch of connection route from distribution main"
        ],
        ml: [
          "ഉടമസ്ഥാവകാശ രേഖ (കെട്ടിട നികുതി രസീത് അല്ലെങ്കിൽ ആധാരം)",
          "അപേക്ഷകന്റെ തിരിച്ചറിയൽ രേഖ",
          "റോഡ് വെട്ടിപ്പൊളിക്കേണ്ടതുണ്ടെങ്കിൽ റോഡ് കട്ടിംഗ് പെർമിറ്റ് / ഫീസ് രസീത്",
          "പൈപ്പ് ലൈൻ എടുക്കേണ്ട വഴിയുടെ സ്കെച്ച്"
        ]
      },
      whereToApply: {
        en: "Online via e-KWA Consumer Portal (epay.kwa.kerala.gov.in) or KWA Section Office.",
        ml: "ഇ-പേ വാട്ടർ അതോറിറ്റി പോർട്ടൽ (epay.kwa.kerala.gov.in) വഴിയോ വാട്ടർ അതോറിറ്റി സെക്ഷൻ ഓഫീസിലോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Register on e-KWA portal and submit application under 'New Connection'.",
          "Upload property tax receipt, identity proof, and site sketch.",
          "Assistant Engineer inspects water pressure and prepares connection estimate.",
          "Pay connection fee, water meter charges, and security deposit online.",
          "Licensed KWA plumber completes tapping and line installation; water supply is commissioned."
        ],
        ml: [
          "ഇ-പേ (e-KWA) പോർട്ടലിൽ അപേക്ഷ നൽകുക.",
          "നികുതി രസീതും സ്കെച്ചും അപ്‌ലോഡ് ചെയ്യുക.",
          "എൻജിനീയർ പരിശോധന നടത്തി എസ്റ്റിമേറ്റ് നൽകുന്നു.",
          "കണക്ഷൻ ഫീസും മീറ്റർ ചാർജ്ജും ഓൺലൈനായി അടയ്ക്കുക.",
          "അംഗീകൃത പ്ലംബർ മുഖേന പൈപ്പ് ലൈൻ കണക്റ്റ് ചെയ്ത് വെള്ളം ലഭ്യമാക്കുന്നു."
        ]
      },
      officialUrl: "https://epay.kwa.kerala.gov.in/",
      notes: {
        en: "Water meter must be purchased with BIS/ISI certification and tested at KWA meter testing laboratory prior to fixing.",
        ml: "ഐ.എസ്.ഐ മുദ്രയുള്ള വാട്ടർ മീറ്റർ മാത്രമേ ഉപയോഗിക്കാൻ പാടുള്ളൂ."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Testing of Drinking Water Quality
    // ================================================================
    {
      id: "kwa-water-quality-testing",
      category: "government",
      icon: "🧪",
      name: {
        en: "Testing of Drinking Water Quality",
        ml: "വാട്ടർ അതോറിറ്റി കുടിവെള്ള ഗുണനിലവാര പരിശോധന"
      },
      summary: {
        en: "Public testing service at KWA Quality Control Laboratories to test drinking water from wells and taps for bacteriological and chemical safety parameters.",
        ml: "കിണറുകളിലെയും മറ്റ് സ്രോതസ്സുകളിലെയും വെള്ളത്തിൽ ബാക്ടീരിയയോ രാസമാലിന്യങ്ങളോ ഉണ്ടോ എന്ന് വാട്ടർ അതോറിറ്റി ലാബുകളിൽ നടത്തുന്ന പരിശോധന."
      },
      whoNeeds: {
        en: "Citizens, schools, restaurants, food packaging businesses, and well owners requiring authentic water purity test certificates.",
        ml: "വീടുകളിലെ കിണർവെള്ളം പരിശോധിക്കാൻ ആഗ്രഹിക്കുന്നവർ, സ്കൂളുകൾ, ഭക്ഷ്യശാലകൾ, ഹോസ്റ്റലുകൾ."
      },
      eligibility: {
        en: [
          "Open to any citizen, institution, or commercial firm in Kerala seeking water purity verification"
        ],
        ml: [
          "കുടിവെള്ളത്തിന്റെ ഗുണനിലവാരം പരിശോധിക്കാൻ ആഗ്രഹിക്കുന്ന കേരളത്തിലെ ഏതൊരു പൗരനും സ്ഥാപനത്തിനും"
        ]
      },
      documents: {
        en: [
          "Water sample collected strictly as per sampling protocol (2L in clean container for chemical test; 250ml sterilized container for bacteriological test)",
          "Requisition form specifying water source (Well, Borewell, RO plant, Tap)",
          "Applicant identity proof"
        ],
        ml: [
          "നിർദ്ദിഷ്ട രീതിയിൽ ശേഖരിച്ച വെള്ളത്തിന്റെ സാമ്പിൾ (കെമിക്കൽ ടെസ്റ്റിന് 2 ലിറ്ററും ബാക്ടീരിയോളജിക്കൽ ടെസ്റ്റിന് 250 മില്ലി അണുവിമുക്ത കുപ്പിയും)",
          "സ്രോതസ്സ് വ്യക്തമാക്കുന്ന ഫോം",
          "തിരിച്ചറിയൽ രേഖ"
        ]
      },
      whereToApply: {
        en: "Online booking via KWA QCL Portal (qcl.kwa.kerala.gov.in) with physical sample submission at District/Sub-District KWA Quality Control Labs.",
        ml: "ക്വാളിറ്റി കൺട്രോൾ പോർട്ടൽ (qcl.kwa.kerala.gov.in) വഴി അല്ലെങ്കിൽ അടുത്തുള്ള വാട്ടർ അതോറിറ്റി ക്വാളിറ്റി കൺട്രോൾ ലാബുകളിൽ നേരിട്ട് സാമ്പിൾ എത്തിക്കുക."
      },
      mode: {
        en: "Online Booking & Sample Drop-off",
        ml: "ഓൺലൈൻ ബുക്കിംഗ് & ലാബ് പരിശോധന"
      },
      steps: {
        en: [
          "Book test online or walk into nearest KWA District Quality Control Lab.",
          "Collect sterilized container from lab for bacteriological sampling.",
          "Deliver water sample within 24 hours of collection.",
          "Pay subsidized government testing fee.",
          "Download or collect digitally certified analytical water quality test report."
        ],
        ml: [
          "പോർട്ടലിൽ രജിസ്റ്റർ ചെയ്യുകയോ നേരിട്ട് ലാബിലെത്തുകയോ ചെയ്യുക.",
          "സാമ്പിൾ കുപ്പികൾ ശേഖരിച്ച് 24 മണിക്കൂറിനകം ലാബിൽ എത്തിക്കുക.",
          "നിശ്ചിത ഫീസ് അടയ്ക്കുക.",
          "പരിശോധനയ്ക്ക് ശേഷം ആധികാരിക ലാബ് സർട്ടിഫിക്കറ്റ് ലഭിക്കും."
        ]
      },
      officialUrl: "https://qcl.kwa.kerala.gov.in/",
      notes: {
        en: "KWA water test certificates are officially recognized for FSSAI food licensing, school health fitness, and local body health clearances.",
        ml: "ഈ സർട്ടിഫിക്കറ്റ് ഭക്ഷ്യസുരക്ഷാ ലൈസൻസുകൾക്കും (FSSAI) സ്കൂൾ ഫിറ്റ്നസിനും ഔദ്യോഗികമായി സ്വീകാര്യമാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Registration and Renewal of Contractors (Class A, B, C, D)
    // ================================================================
    {
      id: "kwa-contractor-registration",
      category: "government",
      relatedCategory: "other",
      subcategory: "industry-business",
      icon: "🏗️",
      name: {
        en: "Registration and Renewal of Contractors (Class A, B, C, D)",
        ml: "വാട്ടർ അതോറിറ്റി കരാറുകാരുടെ രജിസ്ട്രേഷൻ"
      },
      summary: {
        en: "Official licensing and empanelment of engineering contractors into Class A, B, C, or D categories to bid for public water supply pipeline and infrastructure tenders.",
        ml: "വാട്ടർ അതോറിറ്റിയുടെ പൈപ്പ് ലൈൻ നിർമ്മാണ കരാറുകളിൽ പങ്കെടുക്കുന്നതിനായി കരാറുകാർക്ക് നൽകുന്ന ഔദ്യോഗിക രജിസ്ട്രേഷൻ."
      },
      whoNeeds: {
        en: "Civil and mechanical engineering contractors, pipe-laying agencies, and infrastructure contracting firms.",
        ml: "വാട്ടർ അതോറിറ്റി കരാർ ജോലികൾ ഏറ്റെടുക്കാൻ ആഗ്രഹിക്കുന്ന വ്യക്തികൾക്കും കമ്പനികൾക്കും."
      },
      eligibility: {
        en: [
          "Qualified engineers or contractors with proven track record in pipe-laying/civil works and matching financial solvency"
        ],
        ml: [
          "നിശ്ചിത സാമ്പത്തിക സോൾവൻസിയും പ്രവൃത്തിപരിചയവുമുള്ള സിവിൽ/മെക്കാനിക്കൽ കരാറുകാർക്ക്"
        ]
      },
      documents: {
        en: [
          "Solvency Certificate from Revenue Tahsildar or Nationalized Bank Guarantee",
          "Past work completion and experience certificates",
          "GST, PAN, and EPF/ESI registration certificates",
          "List of pipe-laying tools, heavy machinery, and qualified technical staff",
          "Identity proof and photographs"
        ],
        ml: [
          "തഹസിൽദാറുടെ സോൾവൻസി സർട്ടിഫിക്കറ്റ് അല്ലെങ്കിൽ ബാങ്ക് ഗ്യാരണ്ടി",
          "മുൻകാല പ്രവൃത്തിപരിചയ രേഖകൾ",
          "GST, പാൻ കാർഡ്, EPF/ESI രജിസ്ട്രേഷൻ രേഖകൾ",
          "ഉപകരണങ്ങളുടെയും ജീവനക്കാരുടെയും വിവരങ്ങൾ",
          "തിരിച്ചറിയൽ രേഖയും ഫോട്ടോയും"
        ]
      },
      whereToApply: {
        en: "Kerala Water Authority Portal (kwa.kerala.gov.in) and Kerala e-Tenders Portal (etenders.kerala.gov.in).",
        ml: "വാട്ടർ അതോറിറ്റി പോർട്ടൽ വഴിയോ ഇ-ടെണ്ടർ പോർട്ടൽ (etenders.kerala.gov.in) വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Submit contractor registration application form with solvency and experience credentials.",
          "Superintending Engineer / Chief Engineer scrutinizes documentation and technical capability.",
          "Remit prescribed registration fee and security deposit.",
          "KWA issues official Contractor Registration Card under designated Class (A, B, C, or D)."
        ],
        ml: [
          "രേഖകൾ സഹിതം അപേക്ഷ സമർപ്പിക്കുക.",
          "ചീഫ് എൻജിനീയർ കാര്യാലയത്തിൽ രേഖകളുടെ സൂക്ഷ്മപരിശോധന നടക്കുന്നു.",
          "രജിസ്ട്രേഷൻ ഫീസും ഡെപ്പോസിറ്റും അടയ്ക്കുക.",
          "നിശ്ചിത ക്ലാസ്സിലുള്ള കോൺട്രാക്ടർ രജിസ്ട്രേഷൻ കാർഡ് അനുവദിക്കുന്നു."
        ]
      },
      officialUrl: "https://kwa.kerala.gov.in/contractors-registration/",
      notes: {
        en: "Registration is valid for 3 financial years and requires timely renewal with active tax clearances.",
        ml: "3 സാമ്പത്തിക വർഷത്തേക്കാണ് സാധുത; തുടർന്ന് കൃത്യസമയത്ത് പുതുക്കേണ്ടതാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },

    // ================================================================
    // SERVICE: Submission of Public Grievance (CMO Grievance Cell)
    // ================================================================
    {
      id: "cmo-public-grievance",
      category: "government",
      icon: "🏛️",
      name: {
        en: "Submission of Public Grievance (CMO Grievance Cell)",
        ml: "മുഖ്യമന്ത്രിയുടെ പൊതുജന പരാതി പരിഹാര സംവിധാനം"
      },
      summary: {
        en: "Centralized public portal to submit grievances directly to the Chief Minister's Office for time-bound intervention across state government departments.",
        ml: "വിവിധ സർക്കാർ വകുപ്പുകളിൽ നിന്നുള്ള സേവനങ്ങൾ സംബന്ധിച്ച പരാതികൾ മുഖ്യമന്ത്രിയുടെ ഓഫീസിലേക്ക് നേരിട്ട് നൽകി പരിഹാരം കാണാനുള്ള സംവിധാനം."
      },
      whoNeeds: {
        en: "Any citizen of Kerala or Non-Resident Keralite (Pravasi) experiencing administrative delays, harassment, or unresolved grievances with government departments.",
        ml: "സർക്കാർ ഓഫീസുകളിൽ നിന്ന് നീതി ലഭിക്കാത്തവരോ സേവനങ്ങൾ അനാവശ്യമായി വൈകുന്നവരോ ആയ ഏതൊരു പൗരനും."
      },
      eligibility: {
        en: [
          "Open to all citizens and residents of Kerala with an active mobile number for tracking"
        ],
        ml: [
          "കേരളത്തിലെ ഏതൊരു പൗരനും പ്രവാസികൾക്കും ഈ സംവിധാനം ഉപയോഗിക്കാം"
        ]
      },
      documents: {
        en: [
          "Detailed petition stating the administrative grievance, department concerned, and prior petition references",
          "Supporting correspondence, government orders, or application receipts",
          "Identity details and mobile number"
        ],
        ml: [
          "പരാതിയുടെ പൂർണ്ണവിവരങ്ങൾ അടങ്ങിയ അപേക്ഷ",
          "നേരത്തെ ഓഫീസുകളിൽ നൽകിയ അപേക്ഷകളുടെ പകർപ്പുകൾ (ഉണ്ടെങ്കിൽ)",
          "തിരിച്ചറിയൽ വിവരങ്ങളും മൊബൈൽ നമ്പറും"
        ]
      },
      whereToApply: {
        en: "Chief Minister's Grievance Redressal Portal (cmo.kerala.gov.in) or Akshaya Centres.",
        ml: "മുഖ്യമന്ത്രിയുടെ പരാതി പരിഹാര പോർട്ടൽ (cmo.kerala.gov.in) വഴിയോ അക്ഷയ കേന്ദ്രം വഴിയോ."
      },
      mode: {
        en: "Online & Offline",
        ml: "ഓൺലൈൻ & ഓഫ്ലൈൻ"
      },
      steps: {
        en: [
          "Visit cmo.kerala.gov.in and select 'File Grievance'.",
          "Authenticate with mobile OTP and enter petitioner details.",
          "Select the concerned district, department, and office.",
          "Describe complaint and upload supporting PDF documents.",
          "Submit to receive a unique Docket Number for tracking progress and departmental replies."
        ],
        ml: [
          "cmo.kerala.gov.in സന്ദർശിച്ച് മൊബൈൽ നമ്പർ നൽകി ഒ.ടി.പി വഴി ലോഗിൻ ചെയ്യുക.",
          "പരാതി ഏത് വകുപ്പുമായി ബന്ധപ്പെട്ടതാണെന്ന് തിരഞ്ഞെടുക്കുക.",
          "വിവരങ്ങൾ രേഖപ്പെടുത്തി അനുബന്ധ രേഖകൾ അപ്‌ലോഡ് ചെയ്യുക.",
          "അപേക്ഷ സമർപ്പിച്ച് ഡോക്കറ്റ് നമ്പർ കൈപ്പറ്റുക; ഇതിലൂടെ പുരോഗതി തത്സമയം അറിയാം."
        ]
      },
      officialUrl: "https://cmo.kerala.gov.in/",
      notes: {
        en: "Sub-judice court matters and RTI queries are not entertained through the grievance portal.",
        ml: "കോടതിയുടെ പരിഗണനയിലുള്ള കേസുകളും വിവരാവകാശ അപേക്ഷകളും ഇതിലൂടെ സമർപ്പിക്കാൻ കഴിയില്ല."
      },
      lastVerified: "September 2026",
      verified: true
    }

  ];

  if (window.SevaRegistry && typeof window.SevaRegistry.register === "function") {
    window.SevaRegistry.register(data);
  } else {
    console.error("SevaRegistry not found when loading cat-government.js");
  }
})();
