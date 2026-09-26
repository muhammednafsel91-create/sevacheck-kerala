// ==========================================
// SEVACHECK KERALA — DATA MODULE
// Category: Other Services (Services #133 to #150)
// File: data/cat-other.js
// ==========================================

(function () {
  "use strict";

  window.SevaRegistry = window.SevaRegistry || {};

  var data = [
    // ================================================================
    // SUBCATEGORY 1: FARMER & AGRICULTURE (farmer-agri)
    // Services #133 to #137
    // ================================================================

    // ================================================================
    // SERVICE #133: AIMS Crop Loss Compensation
    // ================================================================
    {
      id: "aims-crop-loss-compensation",
      category: "other",
      subcategory: "farmer-agri",
      icon: "🌾",
      name: {
        en: "AIMS Crop Loss Compensation",
        ml: "എയിംസ് പ്രകൃതിക്ഷോഭ വിളനാശ നഷ്ടപരിഹാരം"
      },
      summary: {
        en: "Direct financial calamity relief for farmers experiencing verifiable crop loss due to natural perils via the AIMS portal.",
        ml: "പ്രകൃതിക്ഷോഭം മൂലം കൃഷിനാശം നേരിട്ട കർഷകർക്ക് എയിംസ് (AIMS) പോർട്ടൽ വഴി സർക്കാർ നൽകുന്ന സാമ്പത്തിക നഷ്ടപരിഹാരം."
      },
      description: {
        en: "Administered by the Department of Agriculture Development and Farmers' Welfare, Government of Kerala, through the Agricultural Information Management System (AIMS), this service provides direct financial ex-gratia relief to registered farmers suffering extensive crop destruction due to natural calamities such as floods, landslides, drought, storms, and wild animal attacks.",
        ml: "കൃഷിവകുപ്പ് എയിംസ് (AIMS) പോർട്ടൽ വഴി നടപ്പിലാക്കുന്ന ദുരിതാശ്വാസ പദ്ധതിയാണിത്. പ്രളയം, കാറ്റ്, ഉരുൾപൊട്ടൽ, വരൾച്ച, വന്യജീവി ആക്രമണം എന്നിവ മൂലം വിളനാശം സംഭവിച്ച കർഷകർക്ക് കൃഷിഭവൻ പരിശോധനയുടെ അടിസ്ഥാനത്തിൽ നേരിട്ട് സാമ്പത്തിക സഹായം ബാങ്ക് അക്കൗണ്ടിലേക്ക് ലഭ്യമാക്കുന്നു."
      },
      eligibility: {
        en: [
          "Cultivators (owner cultivators, tenant farmers, or licensed lessees) cultivating land in Kerala",
          "Must have an active farmer registration on the AIMS portal",
          "Agricultural crop loss must have been caused by notified natural calamities or wildlife attacks",
          "Damage report must be submitted within the statutory reporting window (typically 10 to 15 days from occurrence)"
        ],
        ml: [
          "കേരളത്തിൽ കൃഷി ചെയ്യുന്ന ഭൂവുടമകൾക്കോ പാട്ടക്കർഷകർക്കോ അപേക്ഷിക്കാം",
          "എയിംസ് (AIMS) പോർട്ടലിൽ രജിസ്റ്റർ ചെയ്ത കർഷകരായിരിക്കണം",
          "വിജ്ഞാപനം ചെയ്ത പ്രകൃതിക്ഷോഭങ്ങൾ മൂലമോ വന്യജീവി ആക്രമണം മൂലമോ വിളനാശം സംഭവിച്ചിരിക്കണം",
          "വിളനാശം സംഭവിച്ച് നിശ്ചിത സമയപരിധിക്കുള്ളിൽ (സാധാരണയായി 10-15 ദിവസത്തിനകം) അപേക്ഷ സമർപ്പിച്ചിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Latest Land Tax Receipt or registered lease agreement",
          "AIMS Farmer Registration ID",
          "Geotagged photographs of the damaged agricultural field/crops",
          "Identity proof (Aadhaar Card or accepted photo ID)",
          "Applicant's bank account passbook copy with IFSC"
        ],
        ml: [
          "നടപ്പു സാമ്പത്തിക വർഷത്തെ ഭൂനികുതി രസീത് അല്ലെങ്കിൽ പാട്ടക്കരാർ",
          "എയിംസ് (AIMS) ഫാർമർ രജിസ്ട്രേഷൻ നമ്പർ",
          "കൃഷിനാശം വ്യക്തമാക്കുന്ന ഫോട്ടോകൾ",
          "തിരിച്ചറിയൽ രേഖ (ആധാർ കാർഡ് അല്ലെങ്കിൽ മറ്റ് ഔദ്യോഗിക ഫോട്ടോ പതിച്ച ഐഡി)",
          "കർഷകന്റെ ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (IFSC അടങ്ങിയത്)"
        ]
      },
      howToApply: {
        en: "Register the crop loss intimation online on the official AIMS portal (aims.kerala.gov.in) or submit details directly through the jurisdictional Krishi Bhavan.",
        ml: "എയിംസ് പോർട്ടൽ (aims.kerala.gov.in) വഴിയോ അതാത് പ്രദേശത്തെ കൃഷിഭവൻ വഴിയോ കൃഷിനാശ വിവരം ഓൺലൈനായി അറിയിക്കുക."
      },
      steps: {
        en: [
          "Log in to the AIMS portal (aims.kerala.gov.in) using your registered farmer credentials",
          "Select the 'Crop Loss Compensation' service and choose the affected land and crop type",
          "Enter details of the natural calamity, affected area, and upload geotagged damage photographs",
          "Submit the claim application within the statutory reporting timeline",
          "The Agricultural Officer conducts physical field verification and assesses the loss value",
          "Upon departmental approval, compensation is disbursed directly into the farmer's bank account via DBT"
        ],
        ml: [
          "എയിംസ് പോർട്ടലിൽ (aims.kerala.gov.in) കർഷക ലോഗിൻ ഉപയോഗിച്ച് പ്രവേശിക്കുക",
          "'Crop Loss Compensation' തിരഞ്ഞെടുത്ത് നാശനഷ്ടം സംഭവിച്ച സ്ഥലവും വിളയും വ്യക്തമാക്കുക",
          "പ്രകൃതിക്ഷോഭത്തിന്റെ വിവരങ്ങളും നാശനഷ്ട ഫോട്ടോകളും അപ്‌ലോഡ് ചെയ്യുക",
          "നിശ്ചിത സമയപരിധിക്കുള്ളിൽ അപേക്ഷ സമർപ്പിക്കുക",
          "കൃഷി ഓഫീസർ കൃഷിയിടത്തിൽ നേരിട്ടെത്തി പരിശോധന നടത്തി നഷ്ടം തിട്ടപ്പെടുത്തുന്നു",
          "അംഗീകാരം ലഭിക്കുന്ന മുറയ്ക്ക് നഷ്ടപരിഹാര തുക ഡി.ബി.ടി വഴി ബാങ്ക് അക്കൗണ്ടിലേക്ക് ലഭിക്കുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0 for filing calamity crop loss relief claim).",
        ml: "സൗജന്യം (പ്രകൃതിക്ഷോഭ നഷ്ടപരിഹാര അപേക്ഷയ്ക്ക് ഫീസില്ല)."
      },
      validity: {
        en: "Disbursed per verified incident of crop calamity.",
        ml: "ഓരോ തവണയുണ്ടാകുന്ന കൃഷിനാശത്തിനും അതാത് സമയം അനുവദിക്കുന്ന സാമ്പത്തിക സഹായം."
      },
      officialUrl: "https://aims.kerala.gov.in/",
      importantNotes: {
        en: [
          "Time-sensitive filing: Crop loss intimation must be registered on the portal strictly within 10 to 15 days of the calamity occurrence.",
          "Compensation slabs are calibrated based on crop category and notified disaster relief guidelines.",
          "Non-contributory disaster compensation: Distinct from voluntary contributory insurance under the State Crop Insurance Scheme (#134)."
        ],
        ml: [
          "കൃഷിനാശം സംഭവിച്ച് 10 മുതൽ 15 ദിവസത്തിനകം തന്നെ പോർട്ടലിൽ അപേക്ഷിച്ചിരിക്കണം.",
          "വിളകളുടെ തരവും കൃഷിനാശത്തിന്റെ വ്യാപ്തിയും അനുസരിച്ചാണ് സർക്കാർ മാനദണ്ഡപ്രകാരം തുക നിശ്ചയിക്കുന്നത്.",
          "ഇതൊരു സൗജന്യ ദുരിതാശ്വാസ സഹായമാണ്; പ്രീമിയം അടച്ച് ചേരുന്ന വിള ഇൻഷുറൻസ് പദ്ധതിയിൽ (#134) നിന്നും വ്യത്യസ്തമാണിത്."
        ]
      }
    },

    // ================================================================
    // SERVICE #134: State Crop Insurance Scheme
    // ================================================================
    {
      id: "state-crop-insurance-scheme",
      category: "other",
      subcategory: "farmer-agri",
      icon: "🛡️",
      name: {
        en: "State Crop Insurance Scheme",
        ml: "സംസ്ഥാന വിള ഇൻഷുറൻസ് പദ്ധതി"
      },
      summary: {
        en: "Contributory crop insurance scheme offering guaranteed compensation against natural calamities, pests, and localized hazards for notified major crops.",
        ml: "പ്രകൃതിക്ഷോഭം, കീടബാധ തുടങ്ങിയവ മൂലമുണ്ടാകുന്ന നഷ്ടങ്ങൾക്ക് മുൻകൂട്ടി പ്രീമിയം അടച്ച് പരിരക്ഷ ഉറപ്പാക്കുന്ന വിള ഇൻഷുറൻസ് പദ്ധതി."
      },
      description: {
        en: "The Kerala State Crop Insurance Scheme (SCIS), administered by the Department of Agriculture via the AIMS portal, is a comprehensive contributory insurance program designed to protect farmers growing 25+ major notified crops (including paddy, banana, coconut, rubber, pepper, cardamom, and vegetables) against localized calamities, adverse weather events, and disease attacks.",
        ml: "കൃഷിവകുപ്പ് എയിംസ് പോർട്ടൽ വഴി നടപ്പിലാക്കുന്ന സമഗ്ര വിള ഇൻഷുറൻസ് പദ്ധതിയാണിത്. നെല്ല്, വാഴ, തെങ്ങ്, റബ്ബർ, കുരുമുളക്, ഏലം, പച്ചക്കറികൾ തുടങ്ങി 25-ലധികം കാർഷിക വിളകൾക്ക് നാമമാത്രമായ പ്രീമിയം അടച്ച് പ്രകൃതിക്ഷോഭം, രോഗബാധ എന്നിവയ്ക്കെതിരെ ഇൻഷുറൻസ് പരിരക്ഷ നേടാൻ സാധിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Farmers cultivating any of the 25+ notified major crops on owned or leased land in Kerala",
          "Must meet minimum crop threshold counts specified under scheme rules (e.g., coconut: 10 palms; banana: 50 plants; pepper: 15 vines)",
          "Must enroll and pay the designated seasonal premium within the stipulated planting window"
        ],
        ml: [
          "കേരളത്തിൽ വിജ്ഞാപനം ചെയ്ത 25-ലധികം വിളകളിൽ ഏതെങ്കിലും കൃഷി ചെയ്യുന്ന കർഷകർ",
          "സ്കീം നിഷ്കർഷിക്കുന്ന കുറഞ്ഞ വിളപരിധി ഉണ്ടായിരിക്കണം (ഉദാ: തെങ്ങ്: 10 എണ്ണം, വാഴ: 50 എണ്ണം, കുരുമുളക്: 15 എണ്ണം)",
          "വിളവിറക്കുന്ന നിശ്ചിത സമയപരിധിക്കുള്ളിൽ പ്രീമിയം അടച്ച് പദ്ധതിയിൽ ചേർന്നിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Land Tax Receipt / Land Possession Certificate / Registered Lease Agreement",
          "AIMS Farmer Registration ID",
          "Identity proof (Aadhaar Card or accepted official ID)",
          "Bank passbook copy with IFSC"
        ],
        ml: [
          "ഭൂനികുതി രസീത് / കൈവശാവകാശ രേഖ / പാട്ടക്കരാർ",
          "എയിംസ് (AIMS) ഫാർമർ ഐഡി",
          "തിരിച്ചറിയൽ രേഖ (ആധാർ അല്ലെങ്കിൽ മറ്റ് ഔദ്യോഗിക ഐഡി)",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (IFSC അടങ്ങിയത്)"
        ]
      },
      howToApply: {
        en: "Enroll online via the AIMS portal (aims.kerala.gov.in) by choosing the State Crop Insurance service, entering crop acreage details, and paying the subsidized premium online or through the local Krishi Bhavan.",
        ml: "എയിംസ് പോർട്ടൽ (aims.kerala.gov.in) വഴിയോ കൃഷിഭവൻ വഴിയോ വിളകളുടെ വിവരങ്ങൾ നൽകി പ്രീമിയം അടച്ച് ഓൺലൈനായി രജിസ്റ്റർ ചെയ്യാം."
      },
      steps: {
        en: [
          "Log in to the AIMS portal (aims.kerala.gov.in) and navigate to 'Crop Insurance Enrollment'",
          "Select the seasonal crop, land survey details, and quantity/extent of plants cultivated",
          "Calculate and remit the subsidized annual insurance premium online",
          "Download and retain the official crop insurance policy receipt",
          "In case of damages, report the loss intimation within the prescribed notice period",
          "After Krishi Bhavan field assessment, guaranteed compensation is credited via DBT"
        ],
        ml: [
          "എയിംസ് പോർട്ടലിൽ ലോഗിൻ ചെയ്ത് 'Crop Insurance Enrollment' തിരഞ്ഞെടുക്കുക",
          "വിളയുടെ തരം, സർവേ നമ്പർ, കൃഷി ചെയ്യുന്ന വിളകളുടെ എണ്ണം എന്നിവ രേഖപ്പെടുത്തുക",
          "നിശ്ചയിക്കപ്പെട്ട നാമമാത്ര പ്രീമിയം തുക ഓൺലൈനായി അടയ്ക്കുക",
          "ഇൻഷുറൻസ് പോളിസി രസീത് ഡൗൺലോഡ് ചെയ്ത് സൂക്ഷിക്കുക",
          "നാശനഷ്ടമുണ്ടായാൽ നിശ്ചിത സമയത്തിനകം കൃഷിഭവനിലോ പോർട്ടലിലോ വിവരം അറിയിക്കുക",
          "പരിശോധനയ്ക്ക് ശേഷം നിശ്ചയിച്ച നഷ്ടപരിഹാരം ബാങ്ക് അക്കൗണ്ടിലേക്ക് ലഭിക്കുന്നു"
        ]
      },
      fees: {
        en: "Subsidized annual premium calibrated per plant/hectare depending on the notified crop category (e.g., nominal per-plant/tree rates).",
        ml: "വിളയുടെ തരം അനുസരിച്ച് ഓരോ വിളയ്ക്കും നിശ്ചയിച്ചിട്ടുള്ള നാമമാത്രമായ വാർഷിക പ്രീമിയം തുക."
      },
      validity: {
        en: "Valid for one crop season / financial year; renewable annually during each planting cycle.",
        ml: "ഒരു വിളവെടുപ്പ് കാലത്തേക്ക് അല്ലെങ്കിൽ ഒരു വർഷത്തേക്ക് സാധുതയുള്ളത്; ഓരോ തവണയും പുതുക്കേണ്ടതാണ്."
      },
      officialUrl: "https://aims.kerala.gov.in/",
      importantNotes: {
        en: [
          "Contributory scheme: Pre-registration and timely premium payment before the crop damage occurrence are strictly mandatory.",
          "Guaranteed compensation scales apply per damaged plant or unit according to verified department tables.",
          "Loss due to natural perils or wildlife must be reported promptly to allow on-site verification."
        ],
        ml: [
          "മുൻകൂട്ടി പ്രീമിയം അടച്ച് പോളിസി എടുത്ത കർഷകർക്ക് മാത്രമേ വിളനാശമുണ്ടായാൽ ഇൻഷുറൻസ് തുക ലഭിക്കൂ.",
          "ഓരോ വിളയ്ക്കും സർക്കാർ മുൻകൂട്ടി നിശ്ചയിച്ചിട്ടുള്ള നഷ്ടപരിഹാര നിരക്കുകൾ ഉറപ്പായും ലഭിക്കുന്നു.",
          "നാശനഷ്ടം സംഭവിച്ചാൽ ഉടനടി കൃഷിഭവനിൽ വിവരം അറിയിക്കേണ്ടതാണ്."
        ]
      }
    },

    // ================================================================
    // SERVICE #135: Farm Mechanization (SMAM) Subsidy
    // ================================================================
    {
      id: "farm-mechanization-smam-subsidy",
      category: "other",
      subcategory: "farmer-agri",
      icon: "🚜",
      name: {
        en: "Farm Mechanization (SMAM) Subsidy",
        ml: "കാർഷിക യന്ത്രവൽക്കരണ സബ്സിഡി (SMAM)"
      },
      summary: {
        en: "Financial capital subsidies for individual farmers and custom hiring centers to purchase agricultural machinery via the national SMAM and state AIMS portals.",
        ml: "കർഷകർക്കും കർഷക കൂട്ടായ്മകൾക്കും കാർഷിക യന്ത്രങ്ങൾ സബ്സിഡിയോടെ വാങ്ങുന്നതിന് കേന്ദ്ര-സംസ്ഥാന സർക്കാരുകൾ നൽകുന്ന ധനസഹായം."
      },
      description: {
        en: "The Sub-Mission on Agricultural Mechanization (SMAM), implemented jointly by the Ministry of Agriculture & Farmers Welfare, Government of India, and the Department of Agriculture, Kerala, provides capital investment subsidies to individual cultivators, farmer groups, and Custom Hiring Centres (CHCs) for purchasing modern farm equipment, tractors, power tillers, transplanters, and harvesters.",
        ml: "കേന്ദ്ര-സംസ്ഥാന കൃഷിവകുപ്പുകൾ സംയുക്തമായി നടപ്പിലാക്കുന്ന കാർഷിക യന്ത്രവൽക്കരണ പദ്ധതിയാണിത് (SMAM). വ്യക്തിഗത കർഷകർക്കും കർഷക ഗ്രൂപ്പുകൾക്കും ട്രാക്ടറുകൾ, പവർ ടില്ലറുകൾ, ഞാറു നടീൽ യന്ത്രങ്ങൾ, ബ്രഷ് കട്ടറുകൾ തുടങ്ങിയ ആധുനിക ഉപകരണങ്ങൾ സബ്സിഡിയോടെ വാങ്ങാൻ ഇത് സഹായിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Individual farmers, self-help groups, cooperative societies, and Custom Hiring Centres (CHCs) in Kerala",
          "Must possess cultivable land holding with verified land records",
          "Must be registered on the national agricultural machinery portal as well as the state AIMS portal",
          "Priority and enhanced subsidy reservations apply for small, marginal, women, and SC/ST farmers"
        ],
        ml: [
          "കേരളത്തിലെ വ്യക്തിഗത കർഷകർ, കർഷക കൂട്ടായ്മകൾ, കസ്റ്റം ഹൈറിംഗ് സെന്ററുകൾ (CHC)",
          "കൃഷിഭൂമിയുടെ ഉടമസ്ഥാവകാശ രേഖകൾ ഉള്ളവരായിരിക്കണം",
          "ദേശീയ അഗ്രി-മെഷിനറി പോർട്ടലിലും സംസ്ഥാന എയിംസ് (AIMS) പോർട്ടലിലും രജിസ്റ്റർ ചെയ്തവരായിരിക്കണം",
          "ചെറുകിട-നാമമാത്ര കർഷകർക്കും വനിതകൾക്കും എസ്.സി/എസ്.ടി വിഭാഗങ്ങൾക്കും മുൻഗണനയും ഉയർന്ന സബ്സിഡിയും ലഭിക്കും"
        ]
      },
      documents: {
        en: [
          "Land Tax Receipt / Land Possession Certificate",
          "AIMS Farmer Registration ID",
          "Aadhaar Card or accepted official identity proof",
          "Proforma invoice / quotation from an authorized empanelled agricultural machinery dealer",
          "Applicant's bank account passbook copy with IFSC"
        ],
        ml: [
          "ഭൂനികുതി രസീത് / കൈവശാവകാശ സർട്ടിഫിക്കറ്റ്",
          "എയിംസ് (AIMS) ഫാർമർ ഐഡി",
          "ആധാർ കാർഡ് അല്ലെങ്കിൽ മറ്റ് തിരിച്ചറിയൽ രേഖ",
          "അംഗീകൃത ഡീലറിൽ നിന്നുള്ള മെഷിനറി കൊട്ടേഷൻ (Proforma Invoice)",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (IFSC അടങ്ങിയത്)"
        ]
      },
      howToApply: {
        en: "Apply online through the official national SMAM machinery portal (agrimachinery.nic.in) in coordination with the Kerala AIMS portal (aims.kerala.gov.in) and submit required documents to the local Krishi Bhavan.",
        ml: "കേന്ദ്ര സർക്കാരിന്റെ അഗ്രി-മെഷിനറി പോർട്ടൽ (agrimachinery.nic.in) വഴിയും എയിംസ് (aims.kerala.gov.in) വഴിയും ഓൺലൈനായി രജിസ്റ്റർ ചെയ്ത് കൃഷിഭവൻ മുഖേന അപേക്ഷിക്കുക."
      },
      steps: {
        en: [
          "Register your profile on the national SMAM portal (agrimachinery.nic.in) and cross-link your AIMS ID",
          "Select the required agricultural machinery type and an approved testing-certified manufacturer/dealer",
          "Upload land tax receipt, proforma quotation, identity proof, and bank passbook",
          "Submit the online application for departmental scrutiny by the Agricultural Engineer / Krishi Bhavan",
          "Upon administrative sanction, purchase the machine from the authorized vendor and upload the commercial invoice",
          "Physical inspection and geotagging of the machinery are completed prior to releasing the subsidy directly via DBT"
        ],
        ml: [
          "ദേശീയ SMAM പോർട്ടലിൽ (agrimachinery.nic.in) രജിസ്റ്റർ ചെയ്യുകയും എയിംസ് ഐഡിയുമായി ബന്ധിപ്പിക്കുകയും ചെയ്യുക",
          "ആവശ്യമുള്ള കാർഷിക യന്ത്രവും അംഗീകൃത ഡീലറെയും തിരഞ്ഞെടുക്കുക",
          "ഭൂനികുതി രസീത്, കൊട്ടേഷൻ, ആധാർ, ബാങ്ക് രേഖകൾ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക",
          "ഓൺലൈൻ അപേക്ഷ സമർപ്പിച്ച് കൃഷിഭവൻ തലത്തിലുള്ള പരിശോധന പൂർത്തിയാക്കുക",
          "അനുമതി ഉത്തരവ് ലഭിച്ച ശേഷം അംഗീകൃത ഡീലറിൽ നിന്ന് യന്ത്രം വാങ്ങി ബില്ലുകൾ പോർട്ടലിൽ നൽകുക",
          "ഉദ്യോഗസ്ഥർ യന്ത്രം നേരിട്ട് പരിശോധിച്ച ശേഷം സബ്സിഡി തുക ബാങ്ക് അക്കൗണ്ടിലേക്ക് നൽകുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0 for online registration; beneficiaries bear the non-subsidized portion of machinery cost).",
        ml: "സൗജന്യം (പോർട്ടൽ രജിസ്ട്രേഷന് ഫീസില്ല; സബ്സിഡി കഴിഞ്ഞുള്ള തുക കർഷകൻ വഹിക്കണം)."
      },
      validity: {
        en: "Sanctioned per approved agricultural machine; machinery cannot be resold within the lock-in period specified by the department.",
        ml: "വാങ്ങുന്ന യന്ത്രത്തിന് ബാധകം; നിശ്ചിത വർഷത്തേക്ക് യന്ത്രം മറിച്ചുവിൽക്കാൻ പാടുള്ളതല്ല."
      },
      officialUrl: "https://agrimachinery.nic.in/",
      importantNotes: {
        en: [
          "Integrated dual-portal access: National SMAM machinery portal (agrimachinery.nic.in) operates in direct coordination with the Kerala AIMS platform.",
          "Subsidies typically range from 40% to 50% for individual farmers (up to 50%–60% for SC/ST/women farmers) and up to 80% for Custom Hiring Centres, subject to annual budget caps.",
          "Machinery must strictly be purchased from empanelled, officially certified manufacturers."
        ],
        ml: [
          "കേന്ദ്ര അഗ്രി-മെഷിനറി പോർട്ടലും (agrimachinery.nic.in) കേരള എയിംസ് പ്ലാറ്റ്‌ഫോമും സംയുക്തമായാണ് ഈ സേവനം ഏകോപിപ്പിക്കുന്നത്.",
          "വ്യക്തിഗത കർഷകർക്ക് യന്ത്രവിലയുടെ 40% മുതൽ 50% വരെയും (വനിതകൾ/എസ്.സി/എസ്.ടി വിഭാഗങ്ങൾക്ക് ഉയർന്ന നിരക്കിലും) കർഷക കൂട്ടായ്മകൾക്ക് 80% വരെയും സബ്സിഡി ലഭിക്കും.",
          "സർക്കാർ അംഗീകരിച്ച നിർമ്മാതാക്കളിൽ നിന്നും ഡീലർമാരിൽ നിന്നും മാത്രമേ യന്ത്രങ്ങൾ വാങ്ങാവൂ."
        ]
      }
    },

    // ================================================================
    // SERVICE #136: Paddy Land Royalty Scheme
    // ================================================================
    {
      id: "paddy-land-royalty-scheme",
      category: "other",
      subcategory: "farmer-agri",
      icon: "🌱",
      name: {
        en: "Paddy Land Royalty Scheme",
        ml: "നെൽവയൽ ഉടമകൾക്കുള്ള റോയൽറ്റി പദ്ധതി"
      },
      summary: {
        en: "Direct ecological conservation incentive of ₹3,000 per hectare per year paid to owners of cultivable paddy lands to encourage wetland preservation.",
        ml: "നെൽവയലുകൾ സംരക്ഷിക്കുന്നതിനും കൃഷി പ്രോത്സാഹിപ്പിക്കുന്നതിനുമായി ഭൂവുടമകൾക്ക് പ്രതിവർഷം ഹെക്ടറിന് ₹3,000 രൂപ നിരക്കിൽ നൽകുന്ന റോയൽറ്റി."
      },
      description: {
        en: "Implemented by the Department of Agriculture Development and Farmers' Welfare under the Kerala Conservation of Paddy Land and Wetland Act, this scheme provides an annual ecological royalty of ₹3,000 per hectare (or ₹300 per 10 ares) to owners of cultivable paddy land who cultivate paddy directly or keep the land cultivable and protected from illegal conversion.",
        ml: "നെൽവയലുകൾ നികത്താതെ സംരക്ഷിക്കുന്നതിനും നെൽകൃഷി വ്യാപിപ്പിക്കുന്നതിനുമായി കൃഷിവകുപ്പ് നടപ്പിലാക്കുന്ന പദ്ധതിയാണിത്. കൃഷിയോഗ്യമായ നെൽവയൽ ഉടമകൾക്ക് പ്രതിവർഷം ഹെക്ടറിന് ₹3,000 രൂപ (10 ആറിന് ₹300 രൂപ) നിരക്കിൽ നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിലേക്ക് റോയൽറ്റി നൽകുന്നു."
      },
      eligibility: {
        en: [
          "Owners of cultivable paddy land in Kerala classified as 'Nilam' in revenue records",
          "Paddy land must be actively cultivated with paddy or kept ready and cultivable without unauthorized conversion or illegal land filling",
          "Must have an active registration on the AIMS portal",
          "Land should not have been converted or filled in violation of the Kerala Conservation of Paddy Land and Wetland Act, 2008"
        ],
        ml: [
          "റവന്യൂ രേഖകളിൽ 'നിലം' എന്ന് രേഖപ്പെടുത്തിയിട്ടുള്ള കൃഷിയോഗ്യമായ നെൽവയലുകളുടെ ഉടമസ്ഥർ",
          "നെൽകൃഷി ചെയ്യുന്നവരോ അല്ലെങ്കിൽ വയൽ നികത്താതെ കൃഷിയോഗ്യമായി സംരക്ഷിച്ചു നിർത്തുന്നവരോ ആയിരിക്കണം",
          "എയിംസ് (AIMS) പോർട്ടലിൽ രജിസ്റ്റർ ചെയ്തവരായിരിക്കണം",
          "2008-ലെ നെൽവയൽ-തണ്ണീർത്തട സംരക്ഷണ നിയമം ലംഘിച്ച് രൂപമാറ്റം വരുത്തിയ ഭൂമിയാകരുത്"
        ]
      },
      documents: {
        en: [
          "Latest Land Tax Receipt showing land classification as 'Nilam'",
          "Thandaper / Land Possession Certificate / Title deed",
          "AIMS Farmer Registration ID",
          "Identity proof (Aadhaar Card or accepted official ID)",
          "Applicant's bank account passbook copy with IFSC"
        ],
        ml: [
          "ഭൂമി 'നിലം' ആണെന്ന് വ്യക്തമാക്കുന്ന ഏറ്റവും പുതിയ ഭൂനികുതി രസീത്",
          "തണ്ടപ്പേര് / കൈവശാവകാശ സർട്ടിഫിക്കറ്റ് / ആധാരം",
          "എയിംസ് (AIMS) ഫാർമർ ഐഡി",
          "തിരിച്ചറിയൽ രേഖ (ആധാർ കാർഡ് അല്ലെങ്കിൽ മറ്റ് അംഗീകൃത രേഖ)",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (IFSC അടങ്ങിയത്)"
        ]
      },
      howToApply: {
        en: "Apply online through the AIMS portal (aims.kerala.gov.in) under the Paddy Land Royalty service or approach the local Krishi Bhavan.",
        ml: "എയിംസ് പോർട്ടൽ (aims.kerala.gov.in) വഴിയോ അതാത് പ്രദേശത്തെ കൃഷിഭവൻ വഴിയോ റോയൽറ്റിക്കായി ഓൺലൈനായി അപേക്ഷിക്കാം."
      },
      steps: {
        en: [
          "Visit the AIMS portal (aims.kerala.gov.in) and log in with your farmer profile",
          "Select the 'Paddy Land Royalty' service application",
          "Enter survey number, village, taluk, and extent of paddy land holding",
          "Upload the latest land tax receipt verifying land category as 'Nilam' and bank passbook",
          "Submit the application for verification by the local Agricultural Officer",
          "Following field inspection confirming cultivability, royalty is credited directly to the landowner's bank account"
        ],
        ml: [
          "എയിംസ് പോർട്ടലിൽ (aims.kerala.gov.in) കർഷക പ്രൊഫൈൽ ലോഗിൻ ചെയ്യുക",
          "'Paddy Land Royalty' സ്കീം തിരഞ്ഞെടുക്കുക",
          "ഭൂമിയുടെ വില്ലേജ്, സർവേ നമ്പർ, വിസ്തീർണ്ണം എന്നിവ രേഖപ്പെടുത്തുക",
          "ഭൂനികുതി രസീതും ബാങ്ക് വിവരങ്ങളും അപ്‌ലോഡ് ചെയ്യുക",
          "കൃഷി ഓഫീസറുടെ പരിശോധനയ്ക്കായി അപേക്ഷ സമർപ്പിക്കുക",
          "വയൽ കൃഷിയോഗ്യമാണെന്ന് ഉദ്യോഗസ്ഥർ പരിശോധിച്ച് ഉറപ്പുവരുത്തിയ ശേഷം റോയൽറ്റി തുക ബാങ്കിലേക്ക് ലഭിക്കുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0).",
        ml: "സൗജന്യം (₹0)."
      },
      validity: {
        en: "Annual benefit; payable once every financial year subject to continued land preservation.",
        ml: "ഓരോ സാമ്പത്തിക വർഷവും ലഭിക്കുന്ന വാർഷിക ധനസഹായം."
      },
      officialUrl: "https://aims.kerala.gov.in/",
      importantNotes: {
        en: [
          "Verified financial royalty: Strictly ₹3,000 per hectare per year (equivalent to ₹300 per 10 ares).",
          "Land left fallow is eligible only if it remains cultivable and not altered or filled in violation of wetland conservation legislation.",
          "Disbursement is made directly into the verified bank account of the registered titleholder."
        ],
        ml: [
          "റോയൽറ്റി തുക കൃത്യമായി നിശ്ചയിച്ചിട്ടുള്ളതാണ്: പ്രതിവർഷം ഹെക്ടറിന് ₹3,000 രൂപ (10 ആറിന് ₹300 രൂപ നിരക്കിൽ).",
          "നെൽവയലുകൾ നികത്തുകയോ തരംമാറ്റുകയോ ചെയ്യാതെ സംരക്ഷിക്കുന്നവർക്ക് മാത്രമേ ഈ ആനുകൂല്യം ലഭിക്കൂ.",
          "ഭൂവുടമയുടെ ബാങ്ക് അക്കൗണ്ടിലേക്ക് നേരിട്ടാണ് തുക കൈമാറുന്നത്."
        ]
      }
    },

    // ================================================================
    // SERVICE #137: Soil Testing / Soil Health Card
    // ================================================================
    {
      id: "soil-testing-health-card",
      category: "other",
      subcategory: "farmer-agri",
      icon: "🧪",
      name: {
        en: "Soil Testing / Soil Health Card",
        ml: "മണ്ണ് പരിശോധനയും സോയിൽ ഹെൽത്ത് കാർഡും"
      },
      summary: {
        en: "Scientific laboratory analysis of agricultural soil fertility, nutrient levels, and customized fertilizer advisory via Krishi Bhavans and soil laboratories.",
        ml: "കൃഷിഭവനുകൾ വഴിയും സോയിൽ ലാബുകൾ വഴിയും മണ്ണിലെ പോഷകമൂല്യങ്ങൾ പരിശോധിച്ച് ശാസ്ത്രീയ വളപ്രയോഗ ശുപാർശ കാർഡ് നൽകുന്ന സേവനം."
      },
      description: {
        en: "Operated by the Department of Agriculture Development and Farmers' Welfare in coordination with the Department of Soil Survey and Soil Conservation, this diagnostic service provides chemical laboratory analysis of farmland soil samples. Farmers receive an authentic Soil Health Card documenting pH, electrical conductivity, primary nutrients (N, P, K), secondary nutrients, and micronutrients, along with customized crop-specific fertilizer recommendations.",
        ml: "മണ്ണിലെ അമ്ല-ക്ഷാര നില (pH), പ്രധാന മൂലകങ്ങൾ (നൈട്രജൻ, ഫോസ്ഫറസ്, പൊട്ടാഷ്), സൂക്ഷ്മ മൂലകങ്ങൾ എന്നിവ ലബോറട്ടറിയിൽ പരിശോധിച്ച് കർഷകർക്ക് സോയിൽ ഹെൽത്ത് കാർഡ് ലഭ്യമാക്കുന്ന സേവനമാണിത്. ശാസ്ത്രീയമായ വളപ്രയോഗത്തിലൂടെ കൃഷിചിലവ് കുറയ്ക്കാനും വിളവ് വർദ്ധിപ്പിക്കാനും ഇത് സഹായിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Any farmer, agricultural landowner, or cultivator holding agricultural land in Kerala",
          "Must collect soil samples according to prescribed grid guidelines"
        ],
        ml: [
          "കേരളത്തിൽ കൃഷിഭൂമിയുള്ള ഏതൊരു കർഷകനും അപേക്ഷിക്കാം",
          "നിശ്ചിത മാനദണ്ഡങ്ങൾ പാലിച്ച് മണ്ണ് സാമ്പിളുകൾ ശേഖരിച്ചിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Farmland details (Survey number, Village, Taluk, and previous cropping history)",
          "Properly packed and labeled soil sample according to agricultural sampling protocol",
          "AIMS Farmer Registration ID or basic identity details"
        ],
        ml: [
          "കൃഷിഭൂമിയുടെ വിവരങ്ങൾ (സർവേ നമ്പർ, വില്ലേജ്, മുൻപ് ചെയ്ത കൃഷിയുടെ വിവരങ്ങൾ)",
          "നിർദ്ദിഷ്ട രീതിയിൽ ശേഖരിച്ച് ലേബൽ ചെയ്ത മണ്ണ് സാമ്പിൾ",
          "എയിംസ് (AIMS) ഫാർമർ ഐഡി അല്ലെങ്കിൽ തിരിച്ചറിയൽ വിവരങ്ങൾ"
        ]
      },
      howToApply: {
        en: "Collect soil samples following departmental instructions and submit them to your local Krishi Bhavan or District Soil Testing Laboratory, or register sample requests online via keralasoilfertility.net.",
        ml: "നിർദ്ദേശിച്ച രീതിയിൽ ശേഖരിച്ച മണ്ണ് സാമ്പിൾ അടുത്തുള്ള കൃഷിഭവനിലോ ജില്ലാ സോയിൽ ടെസ്റ്റിംഗ് ലാബിലോ നൽകുക, അല്ലെങ്കിൽ പോർട്ടൽ വഴി ഓൺലൈനായി രജിസ്റ്റർ ചെയ്യുക."
      },
      steps: {
        en: [
          "Collect representative soil samples from multiple points of the plot in a 'V' shape method",
          "Mix, dry in the shade, and pack approximately 500 grams of soil in a clean bag with identification labels",
          "Submit the sample at the jurisdictional Krishi Bhavan or Mobile Soil Testing Laboratory",
          "Laboratory technicians conduct macro and micronutrient chemical analysis",
          "Receive the printed/digital Soil Health Card detailing fertility status and corrective fertilizer doses"
        ],
        ml: [
          "കൃഷിയിടത്തിലെ വിവിധ ഭാഗങ്ങളിൽ നിന്ന് 'V' ആകൃതിയിൽ മണ്ണ് സാമ്പിളുകൾ ശേഖരിക്കുക",
          "മണ്ണ് നന്നായി ഇളക്കി തണലിൽ ഉണക്കി, അരക്കിലോയോളം മണ്ണ് വിവരങ്ങൾ രേഖപ്പെടുത്തിയ കവറിലാക്കുക",
          "സാമ്പിൾ കൃഷിഭവനിലോ ജില്ലാ മണ്ണ് പരിശോധനാ ലാബിലോ എത്തിക്കുക",
          "ലാബിൽ ശാസ്ത്രീയ പരിശോധന നടത്തി പോഷകനില നിർണ്ണയിക്കുന്നു",
          "മണ്ണിന്റെ ഫലപുഷ്ടിയും വളപ്രയോഗ ശുപാർശകളും അടങ്ങിയ സോയിൽ ഹെൽത്ത് കാർഡ് കൈപ്പറ്റുക"
        ]
      },
      fees: {
        en: "Nominal laboratory fee (often subsidized or provided free of cost during departmental campaign drives).",
        ml: "നാമമാത്രമായ ലാബ് ഫീസ് (സർക്കാർ പ്രത്യേക ക്യാമ്പയിനുകളിൽ പൂർണ്ണമായും സൗജന്യമായി ലഭ്യമാക്കാറുണ്ട്)."
      },
      validity: {
        en: "Soil Health Card recommendations remain scientifically valid for approximately 3 years.",
        ml: "മണ്ണ് പരിശോധനാ ഫലം സാധാരണയായി 3 വർഷത്തേക്ക് സാധുവാണ്."
      },
      officialUrl: "https://keralasoilfertility.net/",
      importantNotes: {
        en: [
          "Official portal: keralasoilfertility.net provides digital access to soil nutrient status across state locations.",
          "Helps prevent excessive, unbalanced chemical fertilizer application and reduces agricultural input costs.",
          "Samples should be taken before sowing/planting or after harvest, avoiding freshly fertilized soil."
        ],
        ml: [
          "ഔദ്യോഗിക പോർട്ടലായ keralasoilfertility.net വഴി ഡിജിറ്റൽ മണ്ണുപരിശോധനാ വിവരങ്ങൾ ലഭ്യമാണ്.",
          "അളവിൽ കൂടുതൽ രാസവളങ്ങൾ ഉപയോഗിക്കുന്നത് തടയാനും കൃഷി ചിലവ് കുറയ്ക്കാനും ഇത് സഹായിക്കുന്നു.",
          "വളം ചേർത്ത് ഉടനെ മണ്ണ് സാമ്പിൾ എടുക്കരുത്; വിളവെടുപ്പിന് ശേഷമോ വിതയ്ക്കുന്നതിന് മുൻപോ സാമ്പിൾ എടുക്കാൻ ശ്രദ്ധിക്കുക."
        ]
      }
    },

    // ================================================================
    // SUBCATEGORY 2: ANIMAL HUSBANDRY (animal-husbandry)
    // Services #138 to #140
    // ================================================================

    // ================================================================
    // SERVICE #138: Ksheerasree Farmer Registration
    // ================================================================
    {
      id: "ksheerasree-farmer-registration",
      category: "other",
      subcategory: "animal-husbandry",
      icon: "🐄",
      name: {
        en: "Ksheerasree Farmer Registration",
        ml: "ക്ഷീരശ്രീ പോർട്ടൽ കർഷക രജിസ്ട്രേഷൻ"
      },
      summary: {
        en: "Unified statewide digital profiling and registration for dairy farmers to receive milk price subsidies, cattle feed support, and DBT welfare incentives.",
        ml: "ക്ഷീരകർഷകർക്ക് പാലിനുള്ള സബ്സിഡി, കാലിത്തീറ്റ സഹായം, മറ്റ് ക്ഷേമാനുകൂല്യങ്ങൾ എന്നിവ നേരിട്ട് ലഭിക്കുന്നതിനുള്ള ഏകീകൃത ഡിജിറ്റൽ രജിസ്ട്രേഷൻ."
      },
      description: {
        en: "Ksheerasree is the comprehensive digital portal of the Dairy Development Department, Government of Kerala. It creates a unified digital profile for all dairy farmers and cattle owners across the state, linking their milch animals and primary dairy cooperative societies (APCOS) to facilitate direct benefit transfer (DBT) of milk pouring price incentives, feed subsidies, and livestock insurance.",
        ml: "ക്ഷീരവികസന വകുപ്പ് നടപ്പിലാക്കിയ ഏകീകൃത ഓൺലൈൻ പ്ലാറ്റ്‌ഫോമാണിത്. സംസ്ഥാനത്തെ ക്ഷീരകർഷകരുടെയും അവരുടെ കന്നുകാലികളുടെയും വിവരങ്ങൾ ഇതിൽ രജിസ്റ്റർ ചെയ്യുന്നതിലൂടെ, പാൽ സൊസൈറ്റികൾ വഴി അളക്കുന്ന പാലിനുള്ള അധിക വില സബ്സിഡി, കാലിത്തീറ്റ സബ്സിഡി, കന്നുകാലി ഇൻഷുറൻസ് തുടങ്ങിയ എല്ലാ ആനുകൂല്യങ്ങളും നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിലേക്ക് ലഭ്യമാകുന്നു."
      },
      eligibility: {
        en: [
          "Dairy farmers and cattle owners residing in Kerala",
          "Must own at least one milch cow or buffalo",
          "Must be pouring milk regularly to an affiliated primary Anand Pattern / Traditional Dairy Co-operative Society (APCOS)"
        ],
        ml: [
          "കേരളത്തിലെ ക്ഷീരകർഷകർക്കും പശു/എരുമ വളർത്തുന്നവർക്കും അപേക്ഷിക്കാം",
          "കുറഞ്ഞത് ഒരു കറവപ്പശുവോ എരുമയോ സ്വന്തമായി ഉണ്ടായിരിക്കണം",
          "പ്രാദേശിക ക്ഷീരവ്യവസായ സഹകരണ സംഘത്തിൽ (സൊസൈറ്റി) കൃത്യമായി പാൽ അളക്കുന്നവരായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Aadhaar Card or accepted official identity proof",
          "Primary Dairy Cooperative Society Passbook / Pouring Member Number",
          "Cattle details (Breed, INAPH / Pashu Aadhaar ear-tag number if tagged)",
          "Bank passbook copy (showing account number and IFSC linked with Aadhaar)"
        ],
        ml: [
          "ആധാർ കാർഡ് അല്ലെങ്കിൽ മറ്റ് ഔദ്യോഗിക തിരിച്ചറിയൽ രേഖ",
          "ക്ഷീര സഹകരണ സംഘത്തിലെ (സൊസൈറ്റി) മെമ്പർ പാസ്സ്ബുക്ക് / പ്രൊഡ്യൂസർ കോഡ്",
          "കന്നുകാലികളുടെ വിവരങ്ങൾ (ഇനം, ചെവിയിലെ ടാഗ് നമ്പർ ഉണ്ടെങ്കിൽ അത്)",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (ആധാറുമായി ബന്ധിപ്പിച്ച ബാങ്ക് അക്കൗണ്ട്)"
        ]
      },
      howToApply: {
        en: "Register online via the Ksheerasree portal (ksheerasree.kerala.gov.in) directly or with the assistance of the Secretary at your local primary dairy cooperative society.",
        ml: "ക്ഷീരശ്രീ പോർട്ടൽ (ksheerasree.kerala.gov.in) വഴി നേരിട്ടോ, അടുത്തുള്ള ക്ഷീര സഹകരണ സംഘം (സൊസൈറ്റി) സെക്രട്ടറി മുഖേനയോ ഓൺലൈനായി രജിസ്റ്റർ ചെയ്യാം."
      },
      steps: {
        en: [
          "Visit the official Ksheerasree portal (ksheerasree.kerala.gov.in) and click 'Farmer Registration'",
          "Enter your mobile number to complete OTP authentication and establish login credentials",
          "Fill in personal information, residential address, and select your primary dairy cooperative society",
          "Enter cattle herd details, ear-tag identification, and bank account information",
          "Submit the profile; the Dairy Cooperative Society Secretary and Dairy Extension Officer (DEO) complete verification",
          "Receive the verified Ksheerasree Farmer ID number"
        ],
        ml: [
          "ക്ഷീരശ്രീ പോർട്ടൽ (ksheerasree.kerala.gov.in) സന്ദർശിച്ച് 'Farmer Registration' തിരഞ്ഞെടുക്കുക",
          "മൊബൈൽ നമ്പർ നൽകി OTP വഴി ലോഗിൻ വിവരങ്ങൾ സൃഷ്ടിക്കുക",
          "വ്യക്തിഗത വിവരങ്ങൾ, വിലാസം, പാൽ അളക്കുന്ന സൊസൈറ്റിയുടെ പേര് എന്നിവ രേഖപ്പെടുത്തുക",
          "പശുക്കളുടെ എണ്ണം, ഇനം, ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങൾ എന്നിവ നൽകുക",
          "അപേക്ഷ സമർപ്പിച്ച ശേഷം സൊസൈറ്റി സെക്രട്ടറിയും ക്ഷീരവികസന ഓഫീസറും പരിശോധിച്ചു അംഗീകരിക്കുന്നു",
          "സ്ഥിരമായ ക്ഷീരശ്രീ കർഷക ഐഡി (Farmer ID) ലഭ്യമാകുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0).",
        ml: "സൗജന്യം (₹0)."
      },
      validity: {
        en: "Permanent profile; livestock census details can be updated dynamically.",
        ml: "ആജീവനാന്ത പ്രൊഫൈൽ; കന്നുകാലികളുടെ എണ്ണത്തിലുള്ള മാറ്റങ്ങൾ പോർട്ടലിൽ അപ്‌ഡേറ്റ് ചെയ്യാം."
      },
      officialUrl: "https://ksheerasree.kerala.gov.in/",
      importantNotes: {
        en: [
          "Mandatory for government benefits: Registration on Ksheerasree is compulsory for receiving the state government milk pouring price subsidy.",
          "Ensures automated Direct Benefit Transfer (DBT) into the farmer's bank account based on computerized milk pouring records.",
          "Enables smooth access to subsidized cattle feed distribution and departmental loan programs."
        ],
        ml: [
          "സർക്കാർ ആനുകൂല്യങ്ങൾക്ക് നിർബന്ധം: സർക്കാരിൽ നിന്നുള്ള പാൽ സബ്സിഡിയും മറ്റ് ആനുകൂല്യങ്ങളും ലഭിക്കാൻ ക്ഷീരശ്രീ രജിസ്ട്രേഷൻ നിർബന്ധമാണ്.",
          "സൊസൈറ്റിയിൽ അളക്കുന്ന പാലിന്റെ കണക്കുകൾക്കനുസരിച്ച് സബ്സിഡി തുക കർഷകന്റെ ബാങ്ക് അക്കൗണ്ടിലേക്ക് നേരിട്ടെത്തുന്നു.",
          "സബ്സിഡി നിരക്കിലുള്ള കാലിത്തീറ്റ വിതരണത്തിനും മറ്റ് വായ്പാ പദ്ധതികൾക്കും ഇത് സഹായകരമാണ്."
        ]
      }
    },

    // ================================================================
    // SERVICE #139: Cattle Unit / Mini Dairy Subsidy
    // ================================================================
    {
      id: "cattle-unit-mini-dairy-subsidy",
      category: "other",
      subcategory: "animal-husbandry",
      icon: "🏡",
      name: {
        en: "Cattle Unit / Mini Dairy Subsidy",
        ml: "ഡെയറി യൂണിറ്റ് / മിനി ഡെയറി ഫാം സബ്സിഡി"
      },
      summary: {
        en: "Capital financial assistance and subsidies for purchasing 2-cow, 5-cow, or 10-cow dairy units, cattle shed construction, and farm modernization.",
        ml: "ക്ഷീരകർഷകർക്ക് പശുക്കളെ വാങ്ങുന്നതിനും ആധുനിക തൊഴുത്ത് നിർമ്മാണത്തിനും ക്ഷീരവികസന വകുപ്പ് നൽകുന്ന സാമ്പത്തിക സബ്സിഡി."
      },
      description: {
        en: "Operated by the Dairy Development Department, Government of Kerala, through the Ksheerasree portal, this commercial dairy promotion scheme provides capital subsidies for setting up individual 2-cow units, 5-cow mini dairy farms, or commercial 10-cow dairy units. It covers the purchase of high-yielding milch cows, construction of scientific cattle sheds, and farm mechanization equipment.",
        ml: "ക്ഷീരവികസന വകുപ്പ് ക്ഷീരശ്രീ പോർട്ടൽ വഴി നടപ്പിലാക്കുന്ന പദ്ധതിയാണിത്. 2 പശുക്കൾ അടങ്ങുന്ന യൂണിറ്റുകൾ, 5 പശുക്കളുടെ മിനി ഡെയറി യൂണിറ്റുകൾ, 10 പശുക്കളുടെ കൊമേഴ്സ്യൽ ഡെയറി ഫാമുകൾ എന്നിവ സ്ഥാപിക്കുന്നതിനും ശാസ്ത്രീയ തൊഴുത്ത് നിർമ്മാണത്തിനും സർക്കാർ സബ്സിഡി ലഭ്യമാക്കുന്നു."
      },
      eligibility: {
        en: [
          "Registered dairy farmers on the Ksheerasree portal",
          "Must possess adequate land for constructing a scientific cattle shed and growing green fodder",
          "Must pour milk regularly to an affiliated primary dairy cooperative society",
          "Priority given to smallholders, traditional dairy farmers, women, and youth entrepreneurs"
        ],
        ml: [
          "ക്ഷീരശ്രീ പോർട്ടലിൽ രജിസ്റ്റർ ചെയ്ത ക്ഷീരകർഷകർക്ക് അപേക്ഷിക്കാം",
          "ശാസ്ത്രീയമായ തൊഴുത്ത് നിർമ്മിക്കുന്നതിനും തീറ്റപ്പുൽ കൃഷിക്കും ആവശ്യമായ സ്ഥലം ഉണ്ടായിരിക്കണം",
          "ക്ഷീര സഹകരണ സംഘത്തിൽ കൃത്യമായി പാൽ അളക്കുന്നവരായിരിക്കണം",
          "ചെറുകിട കർഷകർ, വനിതകൾ, യുവ സംരംഭകർ എന്നിവർക്ക് മുൻഗണന ലഭിക്കും"
        ]
      },
      documents: {
        en: [
          "Ksheerasree Registration ID",
          "Land Tax Receipt / Land Possession Certificate",
          "Detailed Project Report (DPR) / farm plan (for commercial mini-dairy units)",
          "Veterinary Health and Valuation Certificate issued by a Veterinary Surgeon",
          "Bank loan sanction letter / self-finance undertaking",
          "Identity proof (Aadhaar Card or accepted official ID)"
        ],
        ml: [
          "ക്ഷീരശ്രീ ഫാർമർ ഐഡി",
          "ഭൂനികുതി രസീത് / കൈവശാവകാശ രേഖ",
          "ഫാം ആരംഭിക്കുന്നതിനുള്ള പ്രോജക്ട് റിപ്പോർട്ട് (DPR)",
          "വെറ്ററിനറി സർജൻ നൽകുന്ന സർട്ടിഫിക്കറ്റ്",
          "ബാങ്ക് വായ്പാ അനുമതി പത്രം അല്ലെങ്കിൽ സ്വന്തം ഫണ്ട് തെളിയിക്കുന്ന രേഖ",
          "തിരിച്ചറിയൽ രേഖ (ആധാർ കാർഡ് അല്ലെങ്കിൽ മറ്റ് ഔദ്യോഗിക ഐഡി)"
        ]
      },
      howToApply: {
        en: "Apply online through the Ksheerasree portal (ksheerasree.kerala.gov.in) upon annual departmental scheme notification or submit applications through the local Dairy Extension Service Unit (DESU).",
        ml: "ക്ഷീരവികസന വകുപ്പിന്റെ വാർഷിക വിജ്ഞാപനം അനുസരിച്ച് ക്ഷീരശ്രീ പോർട്ടൽ (ksheerasree.kerala.gov.in) വഴിയോ ബ്ലോക്ക് ക്ഷീരവികസന സർവീസ് യൂണിറ്റ് (DESU) വഴിയോ അപേക്ഷിക്കുക."
      },
      steps: {
        en: [
          "Log in to the Ksheerasree portal (ksheerasree.kerala.gov.in) using your registered farmer ID",
          "Select the 'Cattle Unit / Commercial Dairy Subsidy' application",
          "Choose the unit category (2-cow, 5-cow, or 10-cow unit) and upload land and project documents",
          "The Dairy Extension Officer (DEO) conducts preliminary site inspection for feasibility",
          "Upon administrative sanction, purchase certified milch cows and construct the scientific shed",
          "Veterinary surgeon tags the cattle, and after final verification, the subsidy is released directly via DBT"
        ],
        ml: [
          "ക്ഷീരശ്രീ പോർട്ടലിൽ കർഷക ഐഡി ഉപയോഗിച്ച് ലോഗിൻ ചെയ്യുക",
          "'Cattle Unit / Commercial Dairy Subsidy' തിരഞ്ഞെടുക്കുക",
          "ആവശ്യമുള്ള യൂണിറ്റ് തരം (2 പശുക്കൾ / 5 പശുക്കൾ / 10 പശുക്കൾ) തിരഞ്ഞെടുത്ത് രേഖകൾ നൽകുക",
          "ഡെയറി എക്സ്റ്റൻഷൻ ഓഫീസർ (DEO) സ്ഥലം സന്ദർശിച്ച് പരിശോധന നടത്തുന്നു",
          "അനുമതി ലഭിച്ച ശേഷം കറവപ്പശുക്കളെ വാങ്ങുകയും തൊഴുത്ത് നിർമ്മിക്കുകയും ചെയ്യുക",
          "വെറ്ററിനറി ഡോക്ടറുടെ പരിശോധനയ്ക്ക് ശേഷം സബ്സിഡി തുക ബാങ്ക് അക്കൗണ്ടിലേക്ക് നേരിട്ടെത്തുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0 for departmental application).",
        ml: "സൗജന്യം (വകുപ്പിലെ അപേക്ഷയ്ക്ക് ഫീസില്ല)."
      },
      validity: {
        en: "Capital subsidy provided per approved project; cows must be maintained for the minimum retention period stipulated by the department.",
        ml: "അനുവദിക്കപ്പെട്ട പ്രോജക്ടിന് ലഭിക്കുന്ന സബ്സിഡി; നിശ്ചിത കാലത്തേക്ക് പശുക്കളെ പരിപാലിക്കേണ്ടതാണ്."
      },
      officialUrl: "https://ksheerasree.kerala.gov.in/",
      importantNotes: {
        en: [
          "Subsidies are calibrated according to unit size (e.g., 2-cow units, 5-cow mini dairy, or 10-cow commercial units) as notified under annual budget provisions.",
          "Cattle must be ear-tagged with INAPH/Pashu Aadhaar identification and insured.",
          "Subject to physical site inspection and green fodder cultivation verification by departmental officers."
        ],
        ml: [
          "യൂണിറ്റുകളുടെ വലിപ്പത്തിനനുസരിച്ചാണ് (2 പശുക്കൾ, 5 പശുക്കൾ, 10 പശുക്കൾ) സർക്കാർ വിജ്ഞാപന പ്രകാരം സബ്സിഡി തുക നിശ്ചയിക്കുന്നത്.",
          "വാങ്ങുന്ന പശുക്കൾക്ക് നിർബന്ധമായും ഇൻഷുറൻസും ചെവിയിൽ ഇനാഫ് (INAPH) ടാഗും ഉണ്ടായിരിക്കണം.",
          "തൊഴുത്തിന്റെ സൗകര്യങ്ങളും തീറ്റപ്പുൽ ലഭ്യതയും ഉദ്യോഗസ്ഥർ നേരിട്ടെത്തി പരിശോധിക്കുന്നതാണ്."
        ]
      }
    },

    // ================================================================
    // SERVICE #140: Fodder Cultivation Incentive
    // ================================================================
    {
      id: "fodder-cultivation-incentive",
      category: "other",
      subcategory: "animal-husbandry",
      icon: "🌿",
      name: {
        en: "Fodder Cultivation Incentive",
        ml: "തീറ്റപ്പുൽ കൃഷി സബ്സിഡി പദ്ധതി"
      },
      summary: {
        en: "Financial assistance and planting material support for dairy farmers cultivating hybrid perennial green fodder varieties on minimum 10 cents of land.",
        ml: "കുറഞ്ഞത് 10 സെന്റ് സ്ഥലത്ത് സങ്കരയിനം തീറ്റപ്പുൽ കൃഷി ചെയ്യുന്ന ക്ഷീരകർഷകർക്ക് നൽകുന്ന സാമ്പത്തിക സഹായവും നടീൽ വസ്തുക്കളും."
      },
      description: {
        en: "Under the Fodder Development Scheme of the Dairy Development Department, Government of Kerala, farmers cultivating perennial hybrid green fodder varieties (such as CO-3, CO-4, Super Napier, etc.) on at least 10 cents of land receive financial incentives and planting material support to achieve feed self-sufficiency and reduce dairy production costs.",
        ml: "ക്ഷീരവികസന വകുപ്പ് നടപ്പിലാക്കുന്ന തീറ്റപ്പുൽ വികസന പദ്ധതിയാണിത്. കുറഞ്ഞത് 10 സെന്റ് സ്ഥലത്ത് സങ്കരയിനം തീറ്റപ്പുല്ലുകൾ (CO-3, CO-4, സൂപ്പർ നേപ്പിയർ മുതലായവ) കൃഷി ചെയ്യുന്ന കർഷകർക്ക് നടീൽ വസ്തുക്കളും (കടകൾ/തണ്ടുകൾ) രണ്ട് ഘട്ടങ്ങളിലായി സാമ്പത്തിക സബ്സിഡിയും ലഭ്യമാക്കുന്നു."
      },
      eligibility: {
        en: [
          "Dairy farmers or landowners in Kerala possessing at least 10 cents (0.10 acres) of cultivable land dedicated to perennial green fodder cultivation",
          "Must be registered on the Ksheerasree portal",
          "Must cultivate approved hybrid perennial fodder varieties according to scientific spacing norms"
        ],
        ml: [
          "കുറഞ്ഞത് 10 സെന്റ് സ്ഥലമെങ്കിലും തീറ്റപ്പുൽ കൃഷിക്കായി നീക്കിവെച്ചിട്ടുള്ള ക്ഷീരകർഷകർ",
          "ക്ഷീരശ്രീ പോർട്ടലിൽ രജിസ്റ്റർ ചെയ്ത കർഷകരായിരിക്കണം",
          "വകുപ്പ് നിർദ്ദേശിക്കുന്ന അംഗീകൃത സങ്കരയിനം തീറ്റപ്പുല്ലുകൾ കൃഷി ചെയ്യുന്നവരായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Land Tax Receipt / Land Possession Certificate / Lease agreement verifying at least 10 cents of land",
          "Ksheerasree Registration ID",
          "Identity proof (Aadhaar Card or accepted official ID)",
          "Bank passbook copy with IFSC"
        ],
        ml: [
          "കുറഞ്ഞത് 10 സെന്റ് സ്ഥലം തെളിയിക്കുന്ന ഭൂനികുതി രസീത് / കൈവശാവകാശ രേഖ / പാട്ടക്കരാർ",
          "ക്ഷീരശ്രീ ഫാർമർ ഐഡി",
          "തിരിച്ചറിയൽ രേഖ (ആധാർ അല്ലെങ്കിൽ മറ്റ് ഔദ്യോഗിക ഐഡി)",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (IFSC അടങ്ങിയത്)"
        ]
      },
      howToApply: {
        en: "Apply online through the Ksheerasree portal (ksheerasree.kerala.gov.in) under the Fodder Development scheme or approach your local Dairy Extension Service Unit (DESU).",
        ml: "ക്ഷീരശ്രീ പോർട്ടൽ (ksheerasree.kerala.gov.in) വഴിയോ അടുത്തുള്ള ബ്ലോക്ക് ക്ഷീരവികസന സർവീസ് യൂണിറ്റ് (DESU) വഴിയോ അപേക്ഷിക്കാം."
      },
      steps: {
        en: [
          "Log in to the Ksheerasree portal (ksheerasree.kerala.gov.in) with your farmer credentials",
          "Select 'Fodder Development Scheme' and specify the extent of land dedicated for cultivation (minimum 10 cents)",
          "Upload land possession documents and submit the online application",
          "Collect certified root slips / planting materials from the Dairy Extension Office or designated nurseries",
          "Complete land preparation and planting following recommended scientific spacing",
          "Dairy Extension Officer inspects crop survival, and financial incentives are released in installments via DBT"
        ],
        ml: [
          "ക്ഷീരശ്രീ പോർട്ടലിൽ ലോഗിൻ ചെയ്യുക",
          "'Fodder Development Scheme' തിരഞ്ഞെടുത്ത് കൃഷി ചെയ്യുന്ന സ്ഥലത്തിന്റെ വിസ്തീർണ്ണം (കുറഞ്ഞത് 10 സെന്റ്) നൽകുക",
          "ഭൂമിയുടെ രേഖകൾ അപ്‌ലോഡ് ചെയ്ത് അപേക്ഷ സമർപ്പിക്കുക",
          "ക്ഷീരവികസന ഓഫീസിൽ നിന്നോ നഴ്സറികളിൽ നിന്നോ ഗുണനിലവാരമുള്ള പുൽത്തണ്ടുകൾ കൈപ്പറ്റുക",
          "നിർദ്ദിഷ്ട അകലത്തിൽ കൃഷിയിടത്തിൽ തീറ്റപ്പുൽ നടുക",
          "ഉദ്യോഗസ്ഥർ കൃഷിയിടം സന്ദർശിച്ച് പരിശോധന പൂർത്തിയാക്കിയ ശേഷം സബ്സിഡി തുക ബാങ്ക് അക്കൗണ്ടിലേക്ക് ലഭിക്കുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0 for registration; nominal charges may apply for planting slips if not fully subsidized).",
        ml: "സൗജന്യം (അപേക്ഷയ്ക്ക് ഫീസില്ല; പുൽത്തണ്ടുകൾ സബ്സിഡി നിരക്കിൽ ലഭ്യമാക്കുന്നു)."
      },
      validity: {
        en: "Seasonal/annual incentive disbursed across cultivation stages.",
        ml: "കൃഷി ചെയ്യുന്ന മുറയ്ക്ക് ഘട്ടങ്ങളായി അനുവദിക്കുന്ന സാമ്പത്തിക സഹായം."
      },
      officialUrl: "https://ksheerasree.kerala.gov.in/",
      importantNotes: {
        en: [
          "Minimum land requirement is strictly 10 cents (0.10 acres).",
          "Financial assistance is typically disbursed in 2 installments (after initial planting and following survival verification).",
          "Helps dairy farmers substantially reduce external concentrated cattle feed expenses by ensuring continuous green fodder supply."
        ],
        ml: [
          "കുറഞ്ഞ സ്ഥലപരിധി നിർബന്ധമായും 10 സെന്റ് ഉണ്ടായിരിക്കണം.",
          "സാമ്പത്തിക സബ്സിഡി സാധാരണയായി 2 ഘട്ടങ്ങളായാണ് (നട്ട ശേഷവും വിളവിന്റെ വളർച്ച പരിശോധിച്ച ശേഷവും) അനുവദിക്കുന്നത്.",
          "കന്നുകാലികൾക്ക് പച്ചപ്പുല്ല് ഉറപ്പാക്കുന്നതിലൂടെ കാലിത്തീറ്റ ചിലവ് വലിയ തോതിൽ കുറയ്ക്കാൻ ഇത് സഹായിക്കുന്നു."
        ]
      }
    },

    // ================================================================
    // SUBCATEGORY 3: FISHERIES (fisheries)
    // Services #141 to #143
    // ================================================================

    // ================================================================
    // SERVICE #141: Matsyaboard Fishermen Registration
    // ================================================================
    {
      id: "matsyaboard-fishermen-registration",
      category: "other",
      subcategory: "fisheries",
      icon: "🐟",
      name: {
        en: "Matsyaboard Fishermen Registration",
        ml: "മത്സ്യത്തൊഴിലാളി ക്ഷേമനിധി ബോർഡ് രജിസ്ട്രേഷൻ"
      },
      summary: {
        en: "Statutory registration in the Kerala Fishermen's Welfare Fund Board (Matsyaboard) providing pensions, lean season relief, and social security.",
        ml: "പരമ്പരാഗത മത്സ്യത്തൊഴിലാളികൾക്കും അനുബന്ധ തൊഴിലാളികൾക്കും പെൻഷനും മറ്റ് ക്ഷേമാനുകൂല്യങ്ങളും ഉറപ്പാക്കുന്ന മത്സ്യബോർഡ് അംഗത്വം."
      },
      description: {
        en: "Enacted under the Kerala Fishermen's Welfare Fund Act, this statutory service registers marine and inland fishers, allied fish workers, and small-scale fish vendors with the Kerala Fishermen's Welfare Fund Board (Matsyaboard). Registered members qualify for old-age pensions at 60, lean season/monsoon relief allowances, educational grants for children, and accidental risk coverage.",
        ml: "കേരള മത്സ്യത്തൊഴിലാളി ക്ഷേമനിധി ബോർഡിൽ (മത്സ്യബോർഡ്) കടൽ/ഉൾനാടൻ മത്സ്യത്തൊഴിലാളികൾക്കും അനുബന്ധ തൊഴിലാളികൾക്കും അംഗത്വം നൽകുന്ന സേവനമാണിത്. മാസം തോറും നിശ്ചിത അംശദായം അടയ്ക്കുന്ന തൊഴിലാളികൾക്ക് 60 വയസ്സിന് ശേഷം പെൻഷൻ, ട്രോളിംഗ് നിരോധന/പഞ്ഞ മാസങ്ങളിലെ ആശ്വാസ ധനസഹായം, കുട്ടികൾക്കുള്ള വിദ്യാഭ്യാസ സഹായം എന്നിവ ലഭിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Traditional marine or inland fishermen, allied fish workers, and small-scale fish vendors earning their principal livelihood from fishing",
          "Age between 18 and 60 years at the time of joining",
          "Must be certified by the competent fisheries authority or Matsyafed primary society"
        ],
        ml: [
          "കടലിലോ ഉൾനാടൻ ജലാശയങ്ങളിലോ മത്സ്യബന്ധനം നടത്തുന്നവർ അല്ലെങ്കിൽ മത്സ്യബന്ധനവുമായി ബന്ധപ്പെട്ട മറ്റ് തൊഴിലുകൾ ചെയ്യുന്നവർ",
          "ചേരുമ്പോൾ പ്രായം 18 നും 60 നും ഇടയിലായിരിക്കണം",
          "ഫിഷറീസ് ഓഫീസറോ മത്സ്യഫെഡ് പ്രാഥമിക സഹകരണ സംഘമോ സാക്ഷ്യപ്പെടുത്തിയ തൊഴിലാളികൾ"
        ]
      },
      documents: {
        en: [
          "Certificate of fishing vocation from primary fisheries cooperative society (Matsyafed) or Fisheries Extension Officer",
          "Aadhaar Card or accepted official identity proof",
          "Proof of Date of Birth (SSLC / Birth Certificate / Election ID)",
          "Bank passbook copy with IFSC",
          "Passport size photographs"
        ],
        ml: [
          "മത്സ്യഫെഡ് പ്രാഥമിക സംഘം അല്ലെങ്കിൽ ഫിഷറീസ് എക്സ്റ്റൻഷൻ ഓഫീസർ നൽകിയ തൊഴിൽ സാക്ഷ്യപത്രം",
          "ആധാർ കാർഡ് അല്ലെങ്കിൽ മറ്റ് ഔദ്യോഗിക തിരിച്ചറിയൽ രേഖ",
          "ജനനത്തീയതി രേഖ (എസ്.എസ്.എൽ.സി / ജനന സർട്ടിഫിക്കറ്റ് / വോട്ടർ ഐഡി)",
          "ബാങ്ക് passbook പകർപ്പ് (IFSC അടങ്ങിയത്)",
          "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ"
        ]
      },
      howToApply: {
        en: "Submit the statutory application form along with occupation and age credentials through the jurisdictional Regional Executive Officer / Fisheries Field Office of Matsyaboard.",
        ml: "പൂരിപ്പിച്ച അപേക്ഷാഫോറവും അനുബന്ധ രേഖകളും മത്സ്യത്തൊഴിലാളി ക്ഷേമനിധി ബോർഡിന്റെ റീജിയണൽ എക്സിക്യൂട്ടീവ് ഓഫീസിലോ ഫിഷറീസ് ഓഫീസിലോ നേരിട്ട് സമർപ്പിക്കുക."
      },
      steps: {
        en: [
          "Obtain the prescribed Matsyaboard registration form from the Matsyaboard District Office or primary fisheries cooperative society",
          "Get the occupation certificate endorsed by the Matsyafed society secretary or Fisheries Extension Officer",
          "Attach copies of identity proof, age proof, bank passbook, and photos",
          "Submit the application to the Matsyaboard Regional Executive Officer",
          "Pay the statutory admission fee and first subscription payment",
          "Receive the Matsyaboard Member Identity Card and contribution passbook"
        ],
        ml: [
          "മത്സ്യബോർഡ് ജില്ലാ ഓഫീസിൽ നിന്നോ പ്രാഥമിക സഹകരണ സംഘത്തിൽ നിന്നോ അപേക്ഷാഫോറം വാങ്ങുക",
          "സൊസൈറ്റി സെക്രട്ടറിയിൽ നിന്നോ ഫിഷറീസ് എക്സ്റ്റൻഷൻ ഓഫീസറിൽ നിന്നോ തൊഴിൽ സാക്ഷ്യപത്രം വാങ്ങുക",
          "തിരിച്ചറിയൽ രേഖ, പ്രായരേഖ, ബാങ്ക് പാസ്സ്ബുക്ക്, ഫോട്ടോ എന്നിവ ഒപ്പം വെക്കുക",
          "മത്സ്യബോർഡ് റീജിയണൽ എക്സിക്യൂട്ടീവ് ഓഫീസിൽ അപേക്ഷ സമർപ്പിക്കുക",
          "രജിസ്ട്രേഷൻ ഫീസും ആദ്യ അംശദായവും അടയ്ക്കുക",
          "മത്സ്യബോർഡ് തിരിച്ചറിയൽ കാർഡും അംശദായ പാസ്സ്ബുക്കും കൈപ്പറ്റുക"
        ]
      },
      fees: {
        en: "Statutory member contribution remitted on a monthly/annual schedule as fixed by the Welfare Fund Act.",
        ml: "ക്ഷേമനിധി നിയമപ്രകാരം നിശ്ചയിച്ചിട്ടുള്ള പ്രതിമാസ/വാർഷിക അംശദായ തുക."
      },
      validity: {
        en: "Active membership up to 60 years of age, maintained via continuous contribution remittance.",
        ml: "കൃത്യമായി അംശദായം അടയ്ക്കുന്നതുവഴി 60 വയസ്സ് വരെ അംഗത്വം നിലനിൽക്കും."
      },
      officialUrl: "https://matsyaboard.kerala.gov.in/",
      importantNotes: {
        en: [
          "Enacted under the Kerala Fishermen's Welfare Fund Act.",
          "Age joining window: Strictly 18 to 60 years.",
          "Superannuation age is 60 years; regular payment of member subscriptions is mandatory to maintain lean season and pension entitlements."
        ],
        ml: [
          "കേരള മത്സ്യത്തൊഴിലാളി ക്ഷേമനിധി നിയമപ്രകാരമുള്ള സ്റ്റാറ്റ്യൂട്ടറി ബോർഡാണിത്.",
          "അംഗത്വത്തിൽ ചേരാവുന്ന പ്രായപരിധി: 18 മുതൽ 60 വയസ്സ് വരെ.",
          "പെൻഷൻ പ്രായം 60 വയസ്സാണ്; പഞ്ഞ മാസ ആശ്വാസ സഹായങ്ങൾ മുടങ്ങാതെ ലഭിക്കുന്നതിന് അംശദായം കൃത്യമായി അടയ്ക്കണം."
        ]
      }
    },

    // ================================================================
    // SERVICE #142: REALCRAFT Fishing Vessel License
    // ================================================================
    {
      id: "realcraft-fishing-vessel-license",
      category: "other",
      subcategory: "fisheries",
      icon: "🛥️",
      name: {
        en: "REALCRAFT Fishing Vessel License",
        ml: "റീയൽക്രാഫ്റ്റ് മത്സ്യബന്ധന യാന രജിസ്ട്രേഷനും ലൈസൻസും"
      },
      summary: {
        en: "Statutory vessel registration, seaworthiness inspection, and marine fishing licensing for motorized and mechanized fishing craft on the national RealCraft portal.",
        ml: "മത്സ്യബന്ധന ബോട്ടുകൾക്കും വള്ളങ്ങൾക്കും കടലിൽ പോകുന്നതിനായി റീയൽക്രാഫ്റ്റ് പോർട്ടൽ വഴി നൽകുന്ന ഔദ്യോഗിക രജിസ്ട്രേഷനും ലൈസൻസും."
      },
      description: {
        en: "Under the Kerala Marine Fishing Regulation Act (KMFRA) and Ministry of Fisheries directives, this service manages the mandatory online registration, seaworthiness survey, and biometric licensing of motorized, mechanized, and traditional fishing boats operating along the Kerala coastline via the national RealCraft portal (fishcraft.nic.in).",
        ml: "കേരള സമുദ്ര മത്സ്യബന്ധന നിയന്ത്രണ നിയമപ്രകാരം (KMFRA) സംസ്ഥാനത്തെ തീരദേശത്ത് മത്സ്യബന്ധനം നടത്തുന്ന പരമ്പരാഗത വള്ളങ്ങൾ, മോട്ടോർ ഘടിപ്പിച്ച വള്ളങ്ങൾ, ബോട്ടുകൾ എന്നിവയ്ക്ക് റീയൽക്രാഫ്റ്റ് (RealCraft) പോർട്ടൽ വഴി നൽകുന്ന നിർബന്ധിത രജിസ്ട്രേഷനും വാർഷിക ലൈസൻസുമാണിത്."
      },
      eligibility: {
        en: [
          "Owners and fishing operators operating fishing craft within the territorial waters of Kerala",
          "Vessel must comply with Kerala color coding, life-saving apparatus, and marine safety regulations"
        ],
        ml: [
          "കേരളത്തിന്റെ സമുദ്രതീരത്ത് മത്സ്യബന്ധനം നടത്തുന്ന യാനങ്ങളുടെ ഉടമസ്ഥർ",
          "സർക്കാർ നിർദ്ദേശിച്ച കളർ കോഡിംഗും കടൽ സുരക്ഷാ ഉപകരണങ്ങളും പാലിച്ചിട്ടുള്ള യാനങ്ങൾ"
        ]
      },
      documents: {
        en: [
          "Builder's Certificate / Hull purchase bill / Bill of sale",
          "Engine purchase invoice and manufacturer specifications",
          "Proof of mandatory safety equipment (Life jackets, lifebuoys, DAT / AIS transponder)",
          "Owner Aadhaar Card and biometric identity details",
          "Seaworthiness inspection memo issued by the Marine Surveyor"
        ],
        ml: [
          "ബോട്ട് നിർമ്മാണ സർട്ടിഫിക്കറ്റ് അല്ലെങ്കിൽ വാങ്ങിയ ബിൽ",
          "എഞ്ചിൻ വാങ്ങിയ ബില്ലും സ്പെസിഫിക്കേഷനും",
          "ലൈഫ് ജാക്കറ്റ്, ലൈഫ് ബോയ്, ട്രാൻസ്‌പോണ്ടർ തുടങ്ങിയ സുരക്ഷാ ഉപകരണങ്ങളുടെ വിവരങ്ങൾ",
          "ഉടമയുടെ ആധാർ കാർഡും ബയോമെട്രിക് വിവരങ്ങളും",
          "മറൈൻ സർവേയർ നൽകുന്ന കടൽക്ഷമതാ (Seaworthiness) പരിശോധനാ റിപ്പോർട്ട്"
        ]
      },
      howToApply: {
        en: "Submit the registration and licensing application online on the national RealCraft portal (fishcraft.nic.in) followed by physical hull and engine survey by the Fisheries Marine Surveyor.",
        ml: "ദേശീയ റീയൽക്രാഫ്റ്റ് പോർട്ടൽ (fishcraft.nic.in) വഴി ഓൺലൈനായി അപേക്ഷിച്ച ശേഷം ഫിഷറീസ് മറൈൻ സർവേയറുടെ നേരിട്ടുള്ള പരിശോധന പൂർത്തിയാക്കുക."
      },
      steps: {
        en: [
          "Visit the official RealCraft portal (fishcraft.nic.in) and initiate new vessel registration",
          "Enter boat specifications, hull dimensions, engine horsepower, and owner credentials",
          "Upload builder's certificate, engine bill, and safety equipment verification documents",
          "Schedule and complete physical hull and safety equipment survey with the Marine Surveyor",
          "Pay statutory registration and licensing fees based on vessel tonnage and propulsion",
          "Download the official Vessel Registration Certificate and Marine Fishing License"
        ],
        ml: [
          "റീയൽക്രാഫ്റ്റ് പോർട്ടൽ (fishcraft.nic.in) സന്ദർശിച്ച് പുതിയ യാന രജിസ്ട്രേഷൻ തിരഞ്ഞെടുക്കുക",
          "ബോട്ടിന്റെ അളവുകൾ, എഞ്ചിൻ കുതിരശക്തി, ഉടമയുടെ വിവരങ്ങൾ എന്നിവ രേഖപ്പെടുത്തുക",
          "നിർമ്മാണ രേഖകൾ, എഞ്ചിൻ ബിൽ, സുരക്ഷാ ഉപകരണ രേഖകൾ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക",
          "മറൈൻ സർവേയർ നടത്തുന്ന പരിശോധന പൂർത്തിയാക്കുക",
          "യാനത്തിന്റെ വലിപ്പത്തിനനുസരിച്ചുള്ള രജിസ്ട്രേഷൻ-ലൈസൻസ് ഫീസ് അടയ്ക്കുക",
          "ഔദ്യോഗിക രജിസ്ട്രേഷൻ സർട്ടിഫിക്കറ്റും ഫിഷിംഗ് ലൈസൻസും കൈപ്പറ്റുക"
        ]
      },
      fees: {
        en: "Prescribed statutory tariff scaled according to vessel class, propulsion type, and registered tonnage under KMFRA rules.",
        ml: "ബോട്ടിന്റെ വലിപ്പം, എഞ്ചിൻ ശേഷി, ടണ്ണേജ് എന്നിവയ്ക്കനുസരിച്ച് നിയമപ്രകാരം നിശ്ചയിച്ചിട്ടുള്ള ഫീസ്."
      },
      validity: {
        en: "Vessel registration is permanent (subject to transfer/scrapping); Marine Fishing License requires mandatory annual renewal.",
        ml: "യാന രജിസ്ട്രേഷൻ സ്ഥിരമാണ്; ഫിഷിംഗ് ലൈസൻസ് വർഷം തോറും പുതുക്കേണ്ടതാണ്."
      },
      officialUrl: "https://fishcraft.nic.in/",
      importantNotes: {
        en: [
          "Mandatory national portal: fishcraft.nic.in manages all official fishing vessel data across Indian coastal states.",
          "Color-coding norms (e.g., standard wheelhouse and hull colors) and approved transponders are strictly compulsory for coastal security.",
          "Operating a fishing craft without a valid RealCraft license is a penal offence resulting in vessel seizure under KMFRA."
        ],
        ml: [
          "ദേശീയ പോർട്ടലായ fishcraft.nic.in വഴിയാണ് രജിസ്ട്രേഷൻ നടപടികൾ ഏകോപിപ്പിക്കുന്നത്.",
          "തീരദേശ സുരക്ഷയുടെ ഭാഗമായി ബോട്ടിന് നിർദ്ദിഷ്ട കളർ കോഡിംഗും ട്രാൻസ്‌പോണ്ടറും നിർബന്ധമാണ്.",
          "ലൈസൻസില്ലാതെ കടലിൽ മത്സ്യബന്ധനം നടത്തുന്നത് നിയമവിരുദ്ധവും ബോട്ട് പിടിച്ചെടുക്കാൻ ഇടയാക്കുന്നതുമാണ്."
        ]
      }
    },

    // ================================================================
    // SERVICE #143: Matsyafed Engine/Fuel Permit
    // ================================================================
    {
      id: "matsyafed-engine-fuel-permit",
      category: "other",
      subcategory: "fisheries",
      icon: "⛽",
      name: {
        en: "Matsyafed Engine/Fuel Permit",
        ml: "മത്സ്യഫെഡ് മണ്ണെണ്ണ പെർമിറ്റും ഔട്ട്ബോർഡ് എഞ്ചിൻ സഹായവും"
      },
      summary: {
        en: "Issuance of subsidized kerosene permits and credit-linked outboard motor (OBM) assistance for traditional motorized fishing canoes.",
        ml: "പരമ്പരാഗത മോട്ടോർ ഘടിപ്പിച്ച വള്ളങ്ങൾക്ക് സബ്സിഡി നിരക്കിൽ മണ്ണെണ്ണ പെർമിറ്റും ഔട്ട്ബോർഡ് എഞ്ചിൻ വാങ്ങാനുള്ള സാമ്പത്തിക സഹായവും."
      },
      description: {
        en: "Implemented by Matsyafed (Kerala State Co-operative Federation for Fisheries Development Ltd), this welfare-linked operational scheme issues subsidized white kerosene quota permits and credit assistance for marine outboard motors (OBM) to active traditional fishermen operating registered motorized country crafts.",
        ml: "മത്സ്യഫെഡ് വഴി പരമ്പരാഗത മത്സ്യത്തൊഴിലാളികൾക്കായി നടപ്പിലാക്കുന്ന പദ്ധതിയാണിത്. രജിസ്റ്റർ ചെയ്ത മോട്ടോർ ഘടിപ്പിച്ച വള്ളങ്ങൾക്ക് മത്സ്യബന്ധനത്തിനായി സബ്സിഡി നിരക്കിലുള്ള മണ്ണെണ്ണ പെർമിറ്റും, പുതിയ ഔട്ട്ബോർഡ് എഞ്ചിനുകൾ (OBM) വാങ്ങുന്നതിന് വായ്പാ സഹായവും ലഭ്യമാക്കുന്നു."
      },
      eligibility: {
        en: [
          "Active traditional fishermen owning registered and licensed motorized canoes/crafts fitted with verified outboard motors",
          "Must be an active member of an affiliated primary Fishermen Development and Welfare Co-operative Society (FDWCS)",
          "Vessel and outboard engine must hold valid RealCraft registration credentials"
        ],
        ml: [
          "റീയൽക്രാഫ്റ്റ് രജിസ്ട്രേഷനും ലൈസൻസുമുള്ള ഔട്ട്ബോർഡ് എഞ്ചിൻ ഘടിപ്പിച്ച വള്ളങ്ങളുടെ ഉടമസ്ഥരായ മത്സ്യത്തൊഴിലാളികൾ",
          "മത്സ്യഫെഡ് പ്രാഥമിക മത്സ്യത്തൊഴിലാളി സഹകരണ സംഘത്തിൽ സജീവ അംഗങ്ങളായിരിക്കണം",
          "എഞ്ചിന്റെയും വള്ളത്തിന്റെയും രേഖകൾ കൃത്യമായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "RealCraft Vessel Registration Certificate and valid Marine Fishing License",
          "Outboard Motor (OBM) purchase invoice / engine registration book",
          "Primary fisheries cooperative society membership passbook",
          "Matsyaboard welfare registration card",
          "Owner Aadhaar Card and bank passbook copy"
        ],
        ml: [
          "റീയൽക്രാഫ്റ്റ് യാന രജിസ്ട്രേഷൻ സർട്ടിഫിക്കറ്റും സാധുവായ ഫിഷിംഗ് ലൈസൻസും",
          "ഔട്ട്ബോർഡ് എഞ്ചിൻ (OBM) വാങ്ങിയ ബിൽ / ആർ.സി ബുക്ക്",
          "മത്സ്യഫെഡ് പ്രാഥമിക സഹകരണ സംഘം പാസ്സ്ബുക്ക്",
          "മത്സ്യബോർഡ് ക്ഷേമനിധി പാസ്സ്ബുക്ക്",
          "ആധാർ കാർഡും ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പും"
        ]
      },
      howToApply: {
        en: "Submit the permit application through your primary Fishermen Development and Welfare Co-operative Society (FDWCS) to the Matsyafed District Project Office.",
        ml: "അതാത് പ്രദേശത്തെ പ്രാഥമിക മത്സ്യത്തൊഴിലാളി സഹകരണ സംഘം മുഖേന മത്സ്യഫെഡ് ജില്ലാ പ്രോജക്ട് ഓഫീസിലേക്ക് അപേക്ഷ നൽകുക."
      },
      steps: {
        en: [
          "Obtain the fuel permit / engine assistance application from the primary fisheries cooperative society",
          "Attach copies of RealCraft vessel registration, fishing license, engine book, and Matsyaboard passbook",
          "The society secretary and Fisheries Extension Officer physically inspect and endorse engine horsepower",
          "Forward application to the Matsyafed District Project Office for allocation of quota",
          "Receive the verified Subsidized Kerosene Permit Card / Engine sanction order",
          "Draw monthly white kerosene quota through designated Matsyafed fuel dispensing outlets"
        ],
        ml: [
          "പ്രാഥമിക സഹകരണ സംഘത്തിൽ നിന്ന് മണ്ണെണ്ണ പെർമിറ്റിനായുള്ള അപേക്ഷാഫോറം വാങ്ങുക",
          "റീയൽക്രാഫ്റ്റ് രേഖകൾ, എഞ്ചിൻ ബുക്ക്, മത്സ്യബോർഡ് രേഖകൾ എന്നിവ അപേക്ഷയോടൊപ്പം വെക്കുക",
          "ഫിഷറീസ് ഉദ്യോഗസ്ഥർ എഞ്ചിന്റെ കുതിരശക്തി പരിശോധിച്ച് സാക്ഷ്യപ്പെടുത്തുന്നു",
          "മത്സ്യഫെഡ് ജില്ലാ ഓഫീസിൽ നിന്ന് ക്വാട്ട അനുമതി നൽകുന്നു",
          "സബ്സിഡി മണ്ണെണ്ണ പെർമിറ്റ് കാർഡ് കൈപ്പറ്റുക",
          "മത്സ്യഫെഡിന്റെ നിശ്ചിത ഇന്ധന ബങ്കുകൾ വഴി പ്രതിമാസ സബ്സിഡി മണ്ണെണ്ണ കൈപ്പറ്റുക"
        ]
      },
      fees: {
        en: "Free application; kerosene supplied at government-notified subsidized rates.",
        ml: "അപേക്ഷ സൗജന്യമാണ്; സർക്കാർ നിശ്ചയിച്ച സബ്സിഡി നിരക്കിൽ മണ്ണെണ്ണ ലഭ്യമാക്കുന്നു."
      },
      validity: {
        en: "Permit requires periodic renewal and verification against valid fishing license renewals.",
        ml: "ഫിഷിംഗ് ലൈസൻസ് പുതുക്കുന്നതിനനുസരിച്ച് പെർമിറ്റും കാലാനുസൃതമായി പുതുക്കേണ്ടതാണ്."
      },
      officialUrl: "https://matsyafed.in/",
      importantNotes: {
        en: [
          "Fuel quota is strictly calculated based on verified outboard engine horsepower (HP) and state fuel allocations.",
          "Kerosene permits are tied to genuine traditional fishers; misuse or commercial diversion of subsidized fuel results in permit cancellation.",
          "Directly managed by Matsyafed in coordination with the Civil Supplies and Fisheries departments."
        ],
        ml: [
          "എഞ്ചിന്റെ കുതിരശക്തിയും (HP) സർക്കാരിന്റെ പ്രതിമാസ ക്വാട്ടയും അടിസ്ഥാനമാക്കിയാണ് മണ്ണെണ്ണ വിഹിതം നിശ്ചയിക്കുന്നത്.",
          "സബ്സിഡി മണ്ണെണ്ണ മത്സ്യബന്ധനത്തിന് മാത്രമേ ഉപയോഗിക്കാവൂ; വകമാറ്റി ഉപയോഗിക്കുന്നത് പെർമിറ്റ് റദ്ദാക്കാൻ ഇടയാക്കും.",
          "മത്സ്യഫെഡ് സിവിൽ സപ്ലൈസ് വകുപ്പുമായി ചേർന്നാണ് മണ്ണെണ്ണ വിതരണം നടത്തുന്നത്."
        ]
      }
    },

    // ================================================================
    // SUBCATEGORY 4: BUILDING & CONSTRUCTION (building-construction)
    // Services #144 to #145
    // ================================================================

    // ================================================================
    // SERVICE #144: Building Regularisation Service
    // ================================================================
    {
      id: "building-regularisation-service",
      category: "other",
      subcategory: "building-construction",
      icon: "🏢",
      name: {
        en: "Building Regularisation Service",
        ml: "അനധികൃത നിർമ്മാണങ്ങൾ ക്രമവൽക്കരിക്കൽ (റെഗുലറൈസേഷൻ)"
      },
      summary: {
        en: "Statutory quasi-judicial service to regularize unauthorized or deviated building constructions completed prior to government cut-off dates.",
        ml: "അനുമതിയില്ലാതെ നിർമ്മിച്ചതോ പ്ലാനിൽ നിന്ന് വ്യതിയാനം വരുത്തിയതോ ആയ കെട്ടിടങ്ങൾ നിയമവിധേയമായി ക്രമവൽക്കരിക്കുന്നതിനുള്ള സേവനം."
      },
      description: {
        en: "Governed by the Kerala Municipality / Panchayat Building (Regularisation of Unauthorised Construction) Rules under the Local Self Government Department (LSGD), this quasi-judicial application allows property owners to regularize unauthorized buildings or plan deviations constructed prior to state-notified cut-off dates, provided structural and public safety parameters are satisfied.",
        ml: "തദ്ദേശ സ്വയംഭരണ വകുപ്പിന്റെ കെട്ടിട നിർമ്മാണ ചട്ടങ്ങൾ പ്രകാരം, മുൻകൂർ അനുമതിയില്ലാതെ നിർമ്മിച്ചതോ അല്ലെങ്കിൽ അംഗീകൃത പ്ലാനിൽ വ്യതിയാനം വരുത്തിയതോ ആയ കെട്ടിടങ്ങൾ കോമ്പൗണ്ടിംഗ് ഫീസ് അടച്ച് നിയമപരമായി ക്രമവൽക്കരിച്ചു നൽകുന്ന സേവനമാണിത്."
      },
      eligibility: {
        en: [
          "Owners of buildings completed prior to government-notified cut-off dates without a permit or with deviations exceeding permissible permit tolerances",
          "Structure must comply with mandatory structural stability, fire safety, and public road alignment standards",
          "Must NOT encroach on public roadways, government land, or ecologically restricted CRZ/wetland zones"
        ],
        ml: [
          "സർക്കാർ വിജ്ഞാപനം ചെയ്ത കട്ട്-ഓഫ് തീയതിക്ക് മുൻപ് നിർമ്മാണം പൂർത്തിയാക്കിയ കെട്ടിടങ്ങളുടെ ഉടമകൾ",
          "കെട്ടിടത്തിന്റെ ഘടനാപരമായ സുരക്ഷിതത്വവും റോഡ് വീതിയും പാലിച്ചിട്ടുള്ളതായിരിക്കണം",
          "പൊതുവഴികൾ, സർക്കാർ ഭൂമി, തീരദേശ പരിപാലന പരിധി (CRZ) എന്നിവ കൈയേറി നിർമ്മിച്ചതാകരുത്"
        ]
      },
      documents: {
        en: [
          "As-built architectural drawings prepared and certified by a registered Architect / Licensed Engineer",
          "Title deed and latest Land Tax Receipt",
          "Structural Stability Certificate issued by an accredited structural engineer",
          "Photographs showing all sides of the completed building",
          "Fire Safety NOC / Pollution clearance (if applicable for commercial/assembly occupancies)"
        ],
        ml: [
          "രജിസ്റ്റർ ചെയ്ത ആർക്കിടെക്റ്റ് / എഞ്ചിനീയർ തയ്യാറാക്കിയ നിലവിലെ കെട്ടിടത്തിന്റെ പ്ലാൻ",
          "ആധാരത്തിന്റെ പകർപ്പും ഏറ്റവും പുതിയ ഭൂനികുതി രസീതും",
          "അംഗീകൃത സ്ട്രക്ചറൽ എഞ്ചിനീയർ നൽകുന്ന സ്ട്രക്ചറൽ സ്റ്റെബിലിറ്റി സർട്ടിഫിക്കറ്റ്",
          "കെട്ടിടത്തിന്റെ എല്ലാ വശങ്ങളും വ്യക്തമാക്കുന്ന ഫോട്ടോകൾ",
          "ഫയർ എൻ.ഒ.സി / മലിനീകരണ നിയന്ത്രണ ബോർഡ് അനുമതി (ബാധകമെങ്കിൽ)"
        ]
      },
      howToApply: {
        en: "Submit the regularisation application online through a registered licensee via the K-SMART portal (for urban local bodies) or Sanketham portal (for rural panchayats).",
        ml: "അംഗീകൃത ലൈസൻസി വഴി നഗരസഭകളിൽ K-SMART പോർട്ടലിലൂടെയോ പഞ്ചായത്തുകളിൽ സങ്കേതം പോർട്ടലിലൂടെയോ ഓൺലൈനായി അപേക്ഷ സമർപ്പിക്കുക."
      },
      steps: {
        en: [
          "Engage an accredited registered Architect or Licensed Engineer to survey the building and prepare as-built drawings",
          "Submit the regularisation application on K-SMART (ksmart.lsgkerala.gov.in) or Sanketham with stability certificates",
          "Town planning and LSGD engineering officials conduct physical site inspection and scrutiny",
          "District Town Planner (DTP) / Municipal Secretary evaluates compounding eligibility and fixes compounding compounding fees",
          "Pay the assessed compounding fee online via the portal",
          "Receive the official Building Regularisation Order and revised occupancy certification"
        ],
        ml: [
          "അംഗീകൃത എഞ്ചിനീയറെ സമീപിച്ച് കെട്ടിടത്തിന്റെ അളവുകൾ പരിശോധിച്ച് നിലവിലെ പ്ലാൻ തയ്യാറാക്കുക",
          "K-SMART അല്ലെങ്കിൽ സങ്കേതം പോർട്ടൽ വഴി ആവശ്യമായ രേഖകൾ സഹിതം അപേക്ഷ നൽകുക",
          "തദ്ദേശസ്ഥാപന എൻജിനീയറിങ് ഉദ്യോഗസ്ഥർ സ്ഥലം സന്ദർശിച്ച് പരിശോധന നടത്തുന്നു",
          "ടൗൺ പ്ലാനിംഗ് വിഭാഗം പരിശോധിച്ച് നിയമപ്രകാരമുള്ള കോമ്പൗണ്ടിംഗ് ഫീസ് നിർണ്ണയിക്കുന്നു",
          "നിശ്ചയിക്കപ്പെട്ട കോമ്പൗണ്ടിംഗ് ഫീസ് ഓൺലൈനായി അടയ്ക്കുക",
          "കെട്ടിടം ക്രമവൽക്കരിച്ചുകൊണ്ടുള്ള ഔദ്യോഗിക ഉത്തരവ് കൈപ്പറ്റുക"
        ]
      },
      fees: {
        en: "Graded statutory compounding fee calculated per square meter of deviated/unauthorized area as determined by the LSGD Town Planning section.",
        ml: "വ്യതിയാനം വരുത്തിയ വിസ്തീർണ്ണത്തിനനുസരിച്ച് (ചതുരശ്ര മീറ്ററിന്) നിയമപ്രകാരം നിശ്ചയിക്കുന്ന കോമ്പൗണ്ടിംഗ് ഫീസ്."
      },
      validity: {
        en: "Permanent regularisation order once compounding fee is remitted and order is issued.",
        ml: "ഫീസ് അടച്ച് ഉത്തരവ് ലഭിച്ചാൽ കെട്ടിടത്തിന് സ്ഥിരമായ നിയമസാധുത ലഭിക്കുന്നു."
      },
      officialUrl: "https://ksmart.lsgkerala.gov.in/",
      importantNotes: {
        en: [
          "Completely distinct from prospective Building Permits (#54 in locked list); applies strictly to existing unapproved structures.",
          "Violations into road widening alignments, street lines, or environmentally protected areas cannot be regularized.",
          "Applicable subject to active government regularisation cutoff rules and orders."
        ],
        ml: [
          "ഇത് നിർമ്മാണത്തിന് മുൻപ് വാങ്ങുന്ന ബിൽഡിംഗ് പെർമിറ്റിൽ (#54) നിന്നും വ്യത്യസ്തമാണ്; നിലവിൽ നിർമ്മിച്ച കെട്ടിടങ്ങൾക്കാണ് ബാധകം.",
          "റോഡ് വികസന പരിധി, പാതയോര നിയമങ്ങൾ, തണ്ണീർത്തടങ്ങൾ എന്നിവ ലംഘിച്ചുള്ള നിർമ്മാണങ്ങൾ ക്രമവൽക്കരിക്കാൻ സാധിക്കില്ല.",
          "സർക്കാർ കാലാനുസൃതമായി പുറപ്പെടുവിക്കുന്ന റെഗുലറൈസേഷൻ ഉത്തരവുകൾക്ക് വിധേയമായിരിക്കും."
        ]
      }
    },

    // ================================================================
    // SERVICE #145: Fire Safety NOC Clearance
    // ================================================================
    {
      id: "fire-safety-noc-clearance",
      category: "other",
      subcategory: "building-construction",
      icon: "🚒",
      name: {
        en: "Fire Safety NOC Clearance",
        ml: "ഫയർ ഫോഴ്സ് സുരക്ഷാ എൻ.ഒ.സി (Fire Safety NOC)"
      },
      summary: {
        en: "Site clearance and final Fire Safety Certificate (Occupancy NOC) issued by the Kerala Fire and Rescue Services for designated commercial, high-rise, and assembly buildings.",
        ml: "ഹൈറൈസ് കെട്ടിടങ്ങൾ, വാണിജ്യ സമുച്ചയങ്ങൾ, ഓഡിറ്റോറിയങ്ങൾ എന്നിവയ്ക്ക് ഫയർ ഫോഴ്സ് വകുപ്പ് നൽകുന്ന ഫയർ സേഫ്റ്റി സർട്ടിഫിക്കറ്റ് (NOC)."
      },
      description: {
        en: "Under the Kerala Fire Force Act and Part 4 of the National Building Code (NBC), the Kerala Fire and Rescue Services Department inspects and issues Site Clearance (Initial NOC) and Fire Safety Certificate (Final Occupancy NOC) for high-rise buildings exceeding 15 meters in height, large commercial complexes, hospitals, schools, and assembly buildings.",
        ml: "15 മീറ്ററിൽ കൂടുതൽ ഉയരമുള്ള ബഹുനില കെട്ടിടങ്ങൾ, വാണിജ്യ സമുച്ചയങ്ങൾ, ആശുപത്രികൾ, സ്കൂളുകൾ, ഓഡിറ്റോറിയങ്ങൾ എന്നിവയ്ക്ക് അഗ്നിശമന സുരക്ഷാ മാനദണ്ഡങ്ങൾ പാലിച്ചിട്ടുണ്ടെന്ന് പരിശോധിച്ച് ഫയർ ഫോഴ്സ് നൽകുന്ന പ്രാഥമിക എൻ.ഒ.സിയും ഫൈനൽ ഫയർ സേഫ്റ്റി സർട്ടിഫിക്കറ്റുമാണിത്."
      },
      eligibility: {
        en: [
          "Owners, developers, and commercial entities constructing or occupying buildings exceeding 15 meters height or designated commercial, hazardous, educational, or assembly occupancies",
          "Building layout must provide mandatory setbacks, fire tender vehicular pathways, and fire escape stairs"
        ],
        ml: [
          "15 മീറ്ററിലധികം ഉയരമുള്ള കെട്ടിടങ്ങൾ അല്ലെങ്കിൽ വലിയ വാണിജ്യ-വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ നിർമ്മിക്കുന്നവർ",
          "ഫയർ എഞ്ചിൻ കടന്നുപോകാൻ ആവശ്യമായ വീതിയുള്ള വഴികളും ഫയർ എക്സിറ്റ് കോണിപ്പടികളും സജ്ജീകരിച്ചിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Architectural floor plans detailing fire exits, driveways, and fire tender access",
          "Firefighting and detection equipment layout schematic (hydrants, sprinklers, smoke alarms)",
          "Building Permit issued by the local self-government body",
          "Title deed and land possession documents"
        ],
        ml: [
          "ഫയർ എക്സിറ്റ്, വാഹനങ്ങൾക്കുള്ള വഴി എന്നിവ കാണിക്കുന്ന വിശദമായ കെട്ടിട പ്ലാൻ",
          "ഫയർ ഹൈഡ്രന്റ്, സ്പ്രിങ്ക്ളർ, ഫയർ അലാറം തുടങ്ങിയ സുരക്ഷാ ഉപകരണങ്ങളുടെ ലേഔട്ട് പ്ലാൻ",
          "തദ്ദേശസ്ഥാപനം നൽകിയ ബിൽഡിംഗ് പെർമിറ്റ്",
          "സ്ഥലത്തിന്റെ ഉടമസ്ഥാവകാശ രേഖകൾ"
        ]
      },
      howToApply: {
        en: "Apply online through the Kerala Fire and Rescue Services e-portal (fire.kerala.gov.in) or via integrated single-window clearances (K-SWIFT / K-SMART).",
        ml: "ഫയർ ഫോഴ്സിന്റെ ഔദ്യോഗിക പോർട്ടൽ (fire.kerala.gov.in) വഴിയോ കെ-സ്വിഫ്റ്റ് (K-SWIFT) / K-SMART വഴിയോ ഓൺലൈനായി അപേക്ഷിക്കാം."
      },
      steps: {
        en: [
          "Submit Site Clearance application online with approved architectural drawings and firefighting installation plan",
          "Divisional Fire Officer inspects site layout and verifies vehicle accessibility",
          "Receive Site Clearance Certificate (Initial NOC) to proceed with construction",
          "Upon building completion and firefighting equipment installation, apply for Final Fire Safety Certificate",
          "Fire officers conduct physical testing of installed pumps, hydrants, and alarms",
          "Download the official Fire Safety Certificate upon successful compliance"
        ],
        ml: [
          "കെട്ടിട പ്ലാനും സുരക്ഷാ പ്ലാനും ചേർത്ത് സൈറ്റ് ക്ലിയറൻസിനായി ഓൺലൈനായി അപേക്ഷിക്കുക",
          "ഫയർ ഓഫീസർ സ്ഥലം സന്ദർശിച്ച് സുരക്ഷാ സൗകര്യങ്ങൾ പരിശോധിക്കുന്നു",
          "നിർമ്മാണത്തിന് ആവശ്യമായ പ്രാഥമിക സൈറ്റ് ക്ലിയറൻസ് എൻ.ഒ.സി ലഭിക്കുന്നു",
          "കെട്ടിടം പൂർത്തിയായ ശേഷം ഫയർ ഉപകരണങ്ങൾ സ്ഥാപിച്ച് ഫൈനൽ ഫയർ സേഫ്റ്റി സർട്ടിഫിക്കറ്റിനായി അപേക്ഷിക്കുക",
          "ഉദ്യോഗസ്ഥർ ഉപകരണങ്ങൾ പ്രവർത്തിപ്പിച്ചു പരിശോധന പൂർത്തിയാക്കുന്നു",
          "അംഗീകാരം ലഭിച്ച ഫയർ സേഫ്റ്റി സർട്ടിഫിക്കറ്റ് ഓൺലൈനായി ഡൗൺലോഡ് ചെയ്യുക"
        ]
      },
      fees: {
        en: "Statutory inspection and scrutiny fee calibrated based on total built-up floor area as prescribed by the Fire & Rescue Services rules.",
        ml: "കെട്ടിടത്തിന്റെ വിസ്തീർണ്ണത്തിനനുസരിച്ച് ഫയർ ഫോഴ്സ് ചട്ടങ്ങൾ പ്രകാരം നിശ്ചയിച്ചിട്ടുള്ള പരിശോധനാ ഫീസ്."
      },
      validity: {
        en: "Final Fire Safety Certificate is valid for 1 year (commercial/assembly buildings) or 3–5 years (residential high-rises); renewable upon annual inspection.",
        ml: "സാധാരണയായി 1 വർഷം (വാണിജ്യ കെട്ടിടങ്ങൾക്ക്) അല്ലെങ്കിൽ 3-5 വർഷം (പാർപ്പിട സമുച്ചയങ്ങൾക്ക്) സാധുതയുണ്ട്; തുടർന്ന് പുതുക്കേണ്ടതാണ്."
      },
      officialUrl: "https://fire.kerala.gov.in/",
      importantNotes: {
        en: [
          "Mandatory for all buildings exceeding 15 meters in height and assembly spaces over 1,000 square meters.",
          "Periodic renewal and active maintenance of installed firefighting systems are legally mandatory.",
          "Required prior to obtaining formal building occupancy certification from local self-government institutions."
        ],
        ml: [
          "15 മീറ്ററിലധികം ഉയരമുള്ള കെട്ടിടങ്ങൾക്കും വലിയ ഓഡിറ്റോറിയങ്ങൾക്കും ഫയർ എൻ.ഒ.സി നിർബന്ധമാണ്.",
          "സുരക്ഷാ ഉപകരണങ്ങൾ കൃത്യമായി പരിപാലിക്കുന്നതിനൊപ്പം നിശ്ചിത കാലാവധിയിൽ സർട്ടിഫിക്കറ്റ് പുതുക്കുകയും വേണം.",
          "തദ്ദേശസ്ഥാപനങ്ങളിൽ നിന്ന് ഒക്യുപ്പൻസി സർട്ടിഫിക്കറ്റ് ലഭിക്കുന്നതിന് ഫയർ എൻ.ഒ.സി അത്യന്താപേക്ഷിതമാണ്."
        ]
      }
    },

    // ================================================================
    // SUBCATEGORY 5: INDUSTRY & BUSINESS (industry-business)
    // Services #146 to #148
    // ================================================================

    // ================================================================
    // SERVICE #146: FOSCOS Food Safety License
    // ================================================================
    {
      id: "foscos-food-safety-license",
      category: "other",
      subcategory: "industry-business",
      icon: "🍽️",
      name: {
        en: "FOSCOS Food Safety License",
        ml: "ഭക്ഷ്യസുരക്ഷാ രജിസ്ട്രേഷനും ലൈസൻസും (FoSCoS)"
      },
      summary: {
        en: "Statutory food business registration or state license for food businesses via the national FoSCoS portal.",
        ml: "ഹോട്ടലുകൾ, ബേക്കറികൾ, ഭക്ഷ്യോത്പാദകർ എന്നിവർക്ക് FoSCoS പോർട്ടൽ വഴി നൽകുന്ന ഭക്ഷ്യസുരക്ഷാ രജിസ്ട്രേഷനും സംസ്ഥാന ലൈസൻസും."
      },
      description: {
        en: "Administered by the Commissionerate of Food Safety, Kerala, in coordination with the Food Safety and Standards Authority of India (FSSAI) via the Food Safety Compliance System (FoSCoS), this statutory authorization is mandatory for manufacturing, packaging, storing, distributing, or selling food products in Kerala. The scheme provides Food Safety Registration for small businesses and State Food Safety Licenses for medium/large enterprises.",
        ml: "ഭക്ഷ്യ സുരക്ഷാ ഗുണനിലവാര നിയമപ്രകാരം (FSSAI) ഭക്ഷണസാധനങ്ങൾ നിർമ്മിക്കുകയോ വിൽക്കുകയോ വിതരണം ചെയ്യുകയോ ചെയ്യുന്ന എല്ലാ സ്ഥാപനങ്ങളും എടുക്കേണ്ട നിർബന്ധിത ലൈസൻസാണിത്. കേന്ദ്ര സർക്കാരിന്റെ FoSCoS പോർട്ടൽ വഴിയാണ് കേരള ഭക്ഷ്യസുരക്ഷാ വകുപ്പ് ഈ രജിസ്ട്രേഷനും സംസ്ഥാന ലൈസൻസും നൽകുന്നത്."
      },
      eligibility: {
        en: [
          "Every Food Business Operator (FBO) operating in Kerala (eateries, restaurants, bakeries, grocery stores, caterers, food manufacturers)",
          "Food Registration: Petty food manufacturers, small retailers, and mobile food vendors with annual turnover up to ₹12 lakh",
          "State Food License: Food businesses with annual turnover above ₹12 lakh up to ₹20 crore (or daily production capacity exceeding registration limits)"
        ],
        ml: [
          "കേരളത്തിൽ ഭക്ഷണം പാചകം ചെയ്യുകയോ വിൽക്കുകയോ സംഭരിക്കുകയോ ചെയ്യുന്ന എല്ലാ സ്ഥാപനങ്ങളും വ്യക്തികളും",
          "ഫുഡ് രജിസ്ട്രേഷൻ: വാർഷിക വിറ്റുവരവ് ₹12 ലക്ഷം വരെയുള്ള ചെറുകിട കച്ചവടക്കാർ, വഴിയോര കച്ചവടക്കാർ, ചെറിയ പെട്ടിക്കടകൾ",
          "സ്റ്റേറ്റ് ഫുഡ് ലൈസൻസ്: വാർഷിക വിറ്റുവരവ് ₹12 ലക്ഷത്തിന് മുകളിലും ₹20 കോടി വരെയും ഉള്ള ഇടത്തരം/വലിയ ഭക്ഷ്യ സ്ഥാപനങ്ങൾ"
        ]
      },
      documents: {
        en: [
          "Photo ID and passport size photograph of the proprietor, partners, or authorized signatory",
          "Proof of business premises address (Rent agreement / Shop ownership tax receipt / LSGD trade license)",
          "Food Safety Management System (FSMS) plan or self-declaration",
          "Water testing laboratory analysis report from an accredited lab (for manufacturers and hotels)",
          "List of food product categories handled and equipment layout"
        ],
        ml: [
          "ഉടമയുടെ ഫോട്ടോ പതിച്ച തിരിച്ചറിയൽ രേഖയും പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോയും",
          "സ്ഥാപനത്തിന്റെ മേൽവിലാസം തെളിയിക്കുന്ന വാടകക്കരാർ അല്ലെങ്കിൽ ഉടമസ്ഥാവകാശ രേഖ",
          "ഭക്ഷ്യസുരക്ഷാ മാനേജ്‌മെന്റ് സത്യവാങ്മൂലം (FSMS declaration)",
          "അംഗീകൃത ലാബിൽ നിന്നുള്ള കുടിവെള്ള പരിശോധനാ റിപ്പോർട്ട് (ഹോട്ടലുകൾക്കും നിർമ്മാണ യൂണിറ്റുകൾക്കും)",
          "കൈകാര്യം ചെയ്യുന്ന ഭക്ഷ്യോത്പന്നങ്ങളുടെ പട്ടിക"
        ]
      },
      howToApply: {
        en: "Apply 100% online through the national FoSCoS portal (foscos.fssai.gov.in) by selecting the appropriate state jurisdiction, uploading documents, and paying statutory fees.",
        ml: "ദേശീയ FoSCoS പോർട്ടൽ (foscos.fssai.gov.in) വഴി ഓൺലൈനായി വിവരങ്ങൾ നൽകി രേഖകൾ അപ്‌ലോഡ് ചെയ്ത് ഫീസടച്ച് അപേക്ഷിക്കാം."
      },
      steps: {
        en: [
          "Visit the official FoSCoS portal (foscos.fssai.gov.in) and click 'Apply for License/Registration'",
          "Select State of Kerala and declare your business category and annual turnover tier",
          "System automatically routes you to either Registration (turnover up to ₹12 lakh) or State License (above ₹12 lakh)",
          "Fill in business premises particulars, contact details, and food product category codes",
          "Upload identity proof, premises ownership documents, and water test reports",
          "Pay statutory fee online and track application; download the official 14-digit FSSAI License/Registration Certificate upon sanction"
        ],
        ml: [
          "FoSCoS പോർട്ടൽ (foscos.fssai.gov.in) സന്ദർശിച്ച് 'Apply for License/Registration' തിരഞ്ഞെടുക്കുക",
          "കേരളം സംസ്ഥാനം തിരഞ്ഞെടുത്ത് നിങ്ങളുടെ സ്ഥാപനത്തിന്റെ വാർഷിക വിറ്റുവരവ് രേഖപ്പെടുത്തുക",
          "വിറ്റുവരവ് ₹12 ലക്ഷം വരെയാണെങ്കിൽ രജിസ്ട്രേഷനിലേക്കും, ₹12 ലക്ഷത്തിന് മുകളിലാണെങ്കിൽ സ്റ്റേറ്റ് ലൈസൻസിലേക്കും സിസ്റ്റം നയിക്കും",
          "സ്ഥാപനത്തിന്റെ വിവരങ്ങളും ഉത്പന്നങ്ങളുടെ കാറ്റഗറിയും രേഖപ്പെടുത്തുക",
          "തിരിച്ചറിയൽ രേഖ, വാടകക്കരാർ, കുടിവെള്ള റിപ്പോർട്ട് എന്നിവ അപ്‌ലോഡ് ചെയ്യുക",
          "ഓൺലൈനായി ഫീസ് അടയ്ക്കുക; അംഗീകാരം ലഭിച്ച ശേഷം 14 അക്ക FSSAI ലൈസൻസ് സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യുക"
        ]
      },
      fees: {
        en: "Verified statutory fee schedule: Food Safety Registration (turnover up to ₹12 lakh) is ₹100 per year; State Food License (turnover above ₹12 lakh up to ₹20 crore) falls in the category-dependent range of ₹2,000 to ₹5,000 per year depending on business capacity and type.",
        ml: "ഫീസ് നിരക്കുകൾ: വാർഷിക വിറ്റുവരവ് ₹12 ലക്ഷം വരെയുള്ള ഫുഡ് രജിസ്ട്രേഷന് പ്രതിവർഷം ₹100; വാർഷിക വിറ്റുവരവ് ₹12 ലക്ഷത്തിന് മുകളിലുള്ള സ്റ്റേറ്റ് ലൈസൻസിന് സ്ഥാപനത്തിന്റെ സ്വഭാവത്തിനനുസരിച്ച് പ്രതിവർഷം ₹2,000 മുതൽ ₹5,000 വരെ."
      },
      validity: {
        en: "Granted for a period of 1 to 5 years (selected by the applicant during application); renewable online prior to expiry.",
        ml: "അപേക്ഷകന് 1 മുതൽ 5 വർഷം വരെ കാലാവധി തിരഞ്ഞെടുക്കാം; കാലാവധി തീരുന്നതിന് മുൻപ് പുതുക്കേണ്ടതാണ്."
      },
      officialUrl: "https://foscos.fssai.gov.in/",
      importantNotes: {
        en: [
          "Clear legal distinction: Registration applies to annual turnover up to ₹12 lakh (₹100/yr); State License applies to annual turnover above ₹12 lakh up to ₹20 crore (applicable range ₹2,000–₹5,000/yr).",
          "The 14-digit FSSAI registration/license number must visibly be displayed at the entrance of the food premises and on packaging.",
          "Operating any food business without a valid FSSAI registration or license is a punishable offence under Section 63 of the FSS Act."
        ],
        ml: [
          "വ്യക്തമായ മാനദണ്ഡം: വാർഷിക വിറ്റുവരവ് ₹12 ലക്ഷം വരെയുള്ളവർക്ക് രജിസ്ട്രേഷൻ (വർഷത്തിൽ ₹100); ₹12 ലക്ഷത്തിന് മുകളിലുള്ളവർക്ക് സ്റ്റേറ്റ് ലൈസൻസ് (വർഷത്തിൽ ₹2,000–₹5,000 റേഞ്ചിൽ).",
          "14 അക്ക FSSAI ലൈസൻസ് നമ്പർ സ്ഥാപനത്തിൽ ഉപഭോക്താക്കൾക്ക് കാണാവുന്ന രീതിയിൽ പ്രദർശിപ്പിച്ചിരിക്കണം.",
          "ലൈസൻസോ രജിസ്ട്രേഷനോ ഇല്ലാതെ ഭക്ഷ്യവ്യാപാരം നടത്തുന്നത് നിയമപ്രകാരം ശിക്ഷാർഹമാണ്."
        ]
      }
    },

    // ================================================================
    // SERVICE #147: KINFRA Park Land Allotment
    // ================================================================
    {
      id: "kinfra-park-land-allotment",
      category: "other",
      subcategory: "industry-business",
      icon: "🏭",
      name: {
        en: "KINFRA Park Land Allotment",
        ml: "കിൻഫ്ര ഇൻഡസ്ട്രിയൽ പാർക്ക് ഭൂമി / ഫാക്ടറി ഷെഡ് അനുവദിക്കൽ"
      },
      summary: {
        en: "Lease allotment of developed industrial plots, standard design factory sheds, and specialized commercial spaces in KINFRA theme parks across Kerala.",
        ml: "വ്യവസായ സംരംഭങ്ങൾ ആരംഭിക്കുന്നതിനായി കിൻഫ്ര പാർക്കുകളിൽ പ്ലോട്ടുകളും റെഡി-ടു-യൂസ് ഫാക്ടറി ഷെഡുകളും പാട്ടത്തിന് അനുവദിക്കുന്ന സേവനം."
      },
      description: {
        en: "Operated by the Kerala Industrial Infrastructure Development Corporation (KINFRA) under the Industries Department, this service facilitates online application, project appraisal, and long-term lease allotment of developed industrial plots and Standard Design Factory (SDF) sheds in specialized industrial, food, defense, textile, and technology parks across Kerala.",
        ml: "വ്യവസായ വകുപ്പിന്റെ കീഴിലുള്ള കിൻഫ്ര (KINFRA), പുതിയ വ്യവസായങ്ങൾ ആരംഭിക്കുന്ന സംരംഭകർക്കായി സംസ്ഥാനത്തെ വിവിധ കിൻഫ്ര തീം പാർക്കുകളിൽ വികസിപ്പിച്ചെടുത്ത പ്ലോട്ടുകളും, പൂർണ്ണ സജ്ജമായ സ്റ്റാൻഡേർഡ് ഡിസൈൻ ഫാക്ടറി (SDF) ഷെഡുകളും ദീർഘകാല പാട്ടത്തിന് അനുവദിക്കുന്ന സേവനമാണിത്."
      },
      eligibility: {
        en: [
          "Industrial entrepreneurs, manufacturing MSMEs, startups, and corporate industrial entities",
          "Proposed manufacturing or service activity must align with the specific theme of the chosen KINFRA park",
          "Must possess a viable business model and capability to achieve commercial production within the stipulated timeframe"
        ],
        ml: [
          "പുതിയ സംരംഭകർ, ചെറുകിട-ഇടത്തരം വ്യവസായികൾ, കോർപ്പറേറ്റ് കമ്പനികൾ",
          "തിരഞ്ഞെടുക്കുന്ന കിൻഫ്ര പാർക്കിന്റെ സ്വഭാവത്തിന് അനുയോജ്യമായ വ്യവസായങ്ങളായിരിക്കണം",
          "നിശ്ചിത സമയത്തിനകം നിർമ്മാണം പൂർത്തിയാക്കി ഉത്പാദനം ആരംഭിക്കാൻ സാമ്പത്തിക ശേഷിയുള്ളവരായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Detailed Project Report (DPR) detailing business activity, machinery, investment, and financial projections",
          "Business incorporation proof (Certificate of Incorporation / Partnership Deed / Udyam Registration)",
          "Promoters' bio-data and net-worth certificates certified by a Chartered Accountant",
          "Forecast of utility requirements (Power, water, and effluent treatment estimates)",
          "Earnest Money Deposit (EMD) payment receipt"
        ],
        ml: [
          "സംരംഭത്തിന്റെ വിശദമായ പ്രോജക്ട് റിപ്പോർട്ട് (DPR)",
          "സ്ഥാപനത്തിന്റെ രജിസ്ട്രേഷൻ രേഖകൾ (ഉദ്യം രജിസ്ട്രേഷൻ / കമ്പനി ഇൻകോർപ്പറേഷൻ സർട്ടിഫിക്കറ്റ്)",
          "പ്രൊമോട്ടർമാരുടെ സാമ്പത്തിക ശേഷി തെളിയിക്കുന്ന സി.എ സർട്ടിഫിക്കറ്റ്",
          "വൈദ്യുതി, വെള്ളം, മാലിന്യ സംസ്കരണം എന്നിവയുടെ ആവശ്യകത വ്യക്തമാക്കുന്ന കണക്കുകൾ",
          "പ്രാഥമിക ഡെപ്പോസിറ്റ് (EMD) അടച്ച രസീത്"
        ]
      },
      howToApply: {
        en: "Submit the allotment application along with your Detailed Project Report online through the KINFRA single-window portal (kinfra.org) or via the integrated K-SWIFT portal.",
        ml: "കിൻഫ്ര പോർട്ടൽ (kinfra.org) വഴിയോ കെ-സ്വിഫ്റ്റ് (K-SWIFT) സിംഗിൾ വിൻഡോ വഴിയോ ഓൺലൈനായി പ്രോജക്ട് റിപ്പോർട്ട് സഹിതം അപേക്ഷിക്കുക."
      },
      steps: {
        en: [
          "Visit kinfra.org and review plot/shed availability in your desired industrial theme park",
          "Submit online land application and upload Detailed Project Report and promoters' financial profiles",
          "Remit the prescribed application fee and Earnest Money Deposit (EMD)",
          "Attend the project presentation and screening meeting before the State Level Allotment Committee",
          "Upon approval, receive the formal Allotment Letter and execute the long-term lease agreement",
          "Take physical possession of the plot/shed and commence construction as per schedule"
        ],
        ml: [
          "kinfra.org സന്ദർശിച്ച് വിവിധ പാർക്കുകളിൽ ലഭ്യമായ പ്ലോട്ടുകളുടെ വിവരങ്ങൾ പരിശോധിക്കുക",
          "ഓൺലൈൻ അപേക്ഷ നൽകി പ്രോജക്ട് റിപ്പോർട്ടും സാമ്പത്തിക രേഖകളും അപ്‌ലോഡ് ചെയ്യുക",
          "അപേക്ഷാ ഫീസും പ്രാഥമിക ഡെപ്പോസിറ്റും (EMD) അടയ്ക്കുക",
          "കിൻഫ്ര അലോട്ട്മെന്റ് കമ്മിറ്റിക്ക് മുൻപാകെ പ്രോജക്ട് അവതരിപ്പിക്കുക",
          "അംഗീകാരം ലഭിച്ച ശേഷം പാട്ടക്കരാർ (Lease Agreement) ഒപ്പുവെക്കുക",
          "പ്ലോട്ട്/ഷെഡ് കൈപ്പറ്റി നിശ്ചിത സമയത്തിനകം ഫാക്ടറി നിർമ്മാണം ആരംഭിക്കുക"
        ]
      },
      fees: {
        en: "Application fee and lease premium / annual lease rent fixed per acre/square foot according to park location and infrastructure.",
        ml: "ഓരോ പാർക്കിന്റെയും സൗകര്യങ്ങൾക്കനുസരിച്ച് നിശ്ചയിച്ചിട്ടുള്ള അപേക്ഷാ ഫീസും പാട്ടത്തുകയും (Lease rent)."
      },
      validity: {
        en: "Industrial plots and factory sheds are allotted on long-term lease basis (typically 30 years, extendable up to 90 years).",
        ml: "സാധാരണയായി 30 വർഷത്തെ ദീർഘകാല പാട്ടവ്യവസ്ഥയിലാണ് അനുവദിക്കുന്നത് (90 വർഷം വരെ നീട്ടാം)."
      },
      officialUrl: "https://kinfra.org/",
      importantNotes: {
        en: [
          "Allotment is strictly conditional on timely commercial commissioning (typically within 2 to 3 years from land handover).",
          "Subleasing or unauthorized transfer of allotted land without prior written approval of KINFRA is prohibited.",
          "Single-window clearances for factory setup can be obtained rapidly through integrated K-SWIFT services."
        ],
        ml: [
          "ഭൂമി കൈമാറി 2 മുതൽ 3 വർഷത്തിനകം നിർമ്മാണം പൂർത്തിയാക്കി ഉത്പാദനം ആരംഭിക്കേണ്ടതാണ്.",
          "കിൻഫ്രയുടെ മുൻകൂർ അനുമതിയില്ലാതെ ഭൂമി മറിച്ചുവിൽക്കാനോ മറ്റ് ആവശ്യങ്ങൾക്ക് ഉപയോഗിക്കാനോ പാടില്ല.",
          "കെ-സ്വിഫ്റ്റ് സിംഗിൾ വിൻഡോ വഴി ഫാക്ടറിക്ക് ആവശ്യമായ മറ്റ് അനുമതികൾ വേഗത്തിൽ ലഭ്യമാകും."
        ]
      }
    },

    // ================================================================
    // SERVICE #148: Entrepreneur Support Scheme (ESS)
    // ================================================================
    {
      id: "entrepreneur-support-scheme-ess",
      category: "other",
      subcategory: "industry-business",
      icon: "📈",
      name: {
        en: "Entrepreneur Support Scheme (ESS)",
        ml: "സംരംഭക സഹായ പദ്ധതി (ESS സബ്സിഡി)"
      },
      summary: {
        en: "Capital investment subsidies of 15% to 40% on land, building, and machinery for micro, small, and medium manufacturing enterprises under the Directorate of Industries.",
        ml: "ചെറുകിട-ഇടത്തരം ഉത്പാദന സംരംഭങ്ങൾക്ക് ഭൂമി, കെട്ടിടം, യന്ത്രങ്ങൾ എന്നിവയുടെ ചിലവിന് 15% മുതൽ 40% വരെ സർക്കാർ സബ്സിഡി നൽകുന്ന പദ്ധതി."
      },
      description: {
        en: "The Entrepreneur Support Scheme (ESS), operated by the Directorate of Industries and Commerce (DIC), Government of Kerala, is the flagship financial incentive program for manufacturing MSMEs in the state. It provides comprehensive investment subsidies ranging from 15% to 40% on fixed capital investments (land, factory building, and plant & machinery), technology acquisition support, and scale-up grants.",
        ml: "വ്യവസായ വാണിജ്യ വകുപ്പ് (DIC) മുഖേന ഉത്പാദന മേഖലയിലെ എം.എസ്.എം.ഇ (MSME) സംരംഭങ്ങൾക്കായി നടപ്പിലാക്കുന്ന പ്രധാന സാമ്പത്തിക സഹായ പദ്ധതിയാണിത്. വ്യവസായം തുടങ്ങുന്നതിനായി വാങ്ങിയ ഭൂമി, നിർമ്മിച്ച ഫാക്ടറി കെട്ടിടം, സ്ഥാപിച്ച യന്ത്രങ്ങൾ എന്നിവയുടെ ചിലവിന് 15% മുതൽ 40% വരെ മൂലധന സബ്സിഡി നൽകി സംരംഭങ്ങളെ പ്രോത്സാഹിപ്പിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Micro, Small, and Medium Enterprises (MSMEs) engaged in manufacturing activities in Kerala holding valid Udyam Registration",
          "Applicable to newly established manufacturing units or existing enterprises undertaking substantial expansion/modernization",
          "Application must be formally lodged within one year from the date of commencement of commercial production"
        ],
        ml: [
          "സാധുവായ ഉദ്യം രജിസ്ട്രേഷനുള്ള കേരളത്തിലെ ഉത്പാദന മേഖലയിലെ ചെറുകിട-ഇടത്തരം (MSME) സംരംഭങ്ങൾ",
          "പുതിയ വ്യവസായ യൂണിറ്റുകൾക്കോ നിലവിലെ വ്യവസായം വിപുലീകരിക്കുന്നവർക്കോ അപേക്ഷിക്കാം",
          "വാണിജ്യാടിസ്ഥാനത്തിലുള്ള ഉത്പാദനം ആരംഭിച്ച തീയതി മുതൽ ഒരു വർഷത്തിനകം അപേക്ഷ സമർപ്പിച്ചിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Udyam Registration Certificate and factory license / LSGD trade license",
          "Bank project appraisal report and term loan sanction letter (if debt-financed)",
          "Chartered Accountant (CA) certificate on capital investment in land, building, and plant & machinery",
          "Commercial electricity connection energization certificate and bill",
          "Invoices and payment receipts for machinery and equipment"
        ],
        ml: [
          "ഉദ്യം രജിസ്ട്രേഷൻ സർട്ടിഫിക്കറ്റും തദ്ദേശസ്ഥാപന ലൈസൻസും",
          "ബാങ്ക് പ്രോജക്ട് റിപ്പോർട്ടും വായ്പാ അനുമതി പത്രവും (ബാങ്ക് വായ്പ ഉള്ളവർക്ക്)",
          "സ്ഥലം, കെട്ടിടം, യന്ത്രങ്ങൾ എന്നിവയിലെ നിക്ഷേപം സാക്ഷ്യപ്പെടുത്തുന്ന ചാർട്ടേഡ് അക്കൗണ്ടന്റ് (CA) സർട്ടിഫിക്കറ്റ്",
          "വൈദ്യുതി കണക്ഷൻ ലഭിച്ച രേഖയും ബില്ലും",
          "യന്ത്രങ്ങൾ വാങ്ങിയ ബില്ലുകളും രസീതുകളും"
        ]
      },
      howToApply: {
        en: "Apply online through the Directorate of Industries portal (industry.kerala.gov.in) or via the K-SWIFT single-window platform, followed by document scrutiny at the District Industries Centre (DIC).",
        ml: "വ്യവസായ വകുപ്പിന്റെ പോർട്ടൽ (industry.kerala.gov.in) വഴിയോ കെ-സ്വിഫ്റ്റ് (K-SWIFT) വഴിയോ ഓൺലൈനായി അപേക്ഷ നൽകുക."
      },
      steps: {
        en: [
          "Commence commercial production and ensure your Udyam Registration is active",
          "Visit the Industries Department portal (industry.kerala.gov.in) and register under the ESS module",
          "Fill in enterprise particulars, capital expenditure details, and term loan records",
          "Upload CA investment certificate, machinery invoices, and electricity connection proofs",
          "Industrial Extension Officer / Taluk Industries Officer conducts physical factory inspection",
          "District Level Committee (DLC) or State Level Committee (SLC) sanctions the investment subsidy, credited directly via DBT"
        ],
        ml: [
          "വാണിജ്യ ഉത്പാദനം ആരംഭിച്ച് ഉദ്യം രജിസ്ട്രേഷൻ പൂർത്തിയാക്കുക",
          "വ്യവസായ വകുപ്പ് പോർട്ടലിൽ (industry.kerala.gov.in) ലോഗിൻ ചെയ്ത് ESS വിഭാഗം തിരഞ്ഞെടുക്കുക",
          "കെട്ടിടം, യന്ത്രങ്ങൾ എന്നിവയ്ക്ക് ചിലവായ തുകയുടെ വിവരങ്ങൾ രേഖപ്പെടുത്തുക",
          "സി.എ സർട്ടിഫിക്കറ്റ്, മെഷിനറി ബില്ലുകൾ, മറ്റ് രേഖകൾ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക",
          "താലൂക്ക് വ്യവസായ ഓഫീസർ ഫാക്ടറി നേരിട്ട് സന്ദർശിച്ച് പരിശോധന നടത്തുന്നു",
          "ജില്ലാതല സമിതി പരിശോധിച്ച് അംഗീകാരം നൽകുന്ന മുറയ്ക്ക് സബ്സിഡി തുക ബാങ്ക് അക്കൗണ്ടിലേക്ക് ലഭിക്കുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0 for departmental application).",
        ml: "സൗജന്യം (വകുപ്പിലെ അപേക്ഷയ്ക്ക് ഫീസില്ല)."
      },
      validity: {
        en: "One-time capital subsidy grant per approved investment milestone.",
        ml: "അനുവദിക്കപ്പെട്ട നിക്ഷേപത്തിന് ലഭിക്കുന്ന ഒറ്റത്തവണ മൂലധന സബ്സിഡി."
      },
      officialUrl: "https://industry.kerala.gov.in/",
      importantNotes: {
        en: [
          "Strict application deadline: Must be formally submitted within one year of commencing commercial production.",
          "Investment subsidy percentage ranges from 15% to 40% (with higher subsidies for young, women, and SC/ST entrepreneurs, and priority sectors).",
          "Enterprise must remain in commercial operation for at least 5 years post-receipt of subsidy to avoid recovery proceedings."
        ],
        ml: [
          "ഉത്പാദനം തുടങ്ങി കൃത്യം ഒരു വർഷത്തിനകം തന്നെ അപേക്ഷിച്ചിരിക്കണം.",
          "പൊതുവിഭാഗങ്ങൾക്ക് 15% മുതൽ വനിതകൾ, യുവാക്കൾ, എസ്.സി/എസ്.ടി വിഭാഗങ്ങൾക്ക് 40% വരെ ഉയർന്ന സബ്സിഡി ലഭിക്കും.",
          "സബ്സിഡി കൈപ്പറ്റി കുറഞ്ഞത് 5 വർഷമെങ്കിലും വ്യവസായം തടസ്സമില്ലാതെ പ്രവർത്തിപ്പിക്കേണ്ടതാണ്."
        ]
      }
    },

    // ================================================================
    // SUBCATEGORY 6: COOPERATIVE (cooperative)
    // Services #149 to #150
    // ================================================================

    // ================================================================
    // SERVICE #149: Cooperative Society Registration
    // ================================================================
    {
      id: "cooperative-society-registration",
      category: "other",
      subcategory: "cooperative",
      icon: "🤝",
      name: {
        en: "Cooperative Society Registration",
        ml: "സഹകരണ സംഘം രജിസ്ട്രേഷൻ (Form No. 1)"
      },
      summary: {
        en: "Statutory application and scrutiny under Form No. 1 to form and register a new primary cooperative society under the Kerala Co-operative Societies Act.",
        ml: "കേരള സഹകരണ സംഘം നിയമപ്രകാരം പുതിയ പ്രാഥമിക സഹകരണ സംഘങ്ങൾ രൂപീകരിച്ച് രജിസ്റ്റർ ചെയ്യുന്നതിനുള്ള ഔദ്യോഗിക നടപടിക്രമം."
      },
      description: {
        en: "Enacted under Section 7 of the Kerala Co-operative Societies Act, 1969, and Rule 3 of the Kerala Co-operative Societies Rules, this statutory quasi-judicial service covers the evaluation of economic feasibility, scrutiny of proposed bye-laws, and formal issuance of the Certificate of Registration for establishing new primary agricultural, consumer, multi-purpose, or credit co-operative societies.",
        ml: "1969-ലെ കേരള സഹകരണ സംഘം നിയമപ്രകാരം, പൊതു സാമ്പത്തിക ലക്ഷ്യങ്ങൾക്കായി പുതിയ സഹകരണ സംഘങ്ങൾ രജിസ്റ്റർ ചെയ്യുന്നതിനുള്ള സേവനമാണിത്. നിയമാനുസൃതമായ ഫോറം 1 അപേക്ഷ, ബൈലോകൾ, സാമ്പത്തിക ഭദ്രതാ റിപ്പോർട്ട് എന്നിവ പരിശോധിച്ച് അസിസ്റ്റന്റ്/ജോയിന്റ് രജിസ്ട്രാർ ഔദ്യോഗിക രജിസ്ട്രേഷൻ സർട്ടിഫിക്കറ്റ് അനുവദിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Promoter group comprising a minimum of 25 adult individuals belonging to distinct, separate families residing or working within the proposed area of operation",
          "Proposed society must possess demonstrated economic viability and adhere to statutory cooperative principles",
          "Promoters must share a common economic objective and have collected the initial minimum share capital"
        ],
        ml: [
          "നിർദ്ദിഷ്ട പ്രവർത്തന പരിധിയിൽ താമസിക്കുന്ന വ്യത്യസ്ത കുടുംബങ്ങളിൽപ്പെട്ട കുറഞ്ഞത് 25 വ്യക്തികൾ അടങ്ങിയ പ്രൊമോട്ടർ ഗ്രൂപ്പ്",
          "സംഘത്തിന് സാമ്പത്തിക സുരക്ഷിതത്വവും നിലനിൽപ്പും ഉണ്ടായിരിക്കണം",
          "പ്രാഥമിക ഓഹരി മൂലധനം സമാഹരിച്ചിട്ടുള്ളവരായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Statutory application in Form No. 1 signed by all founding promoters",
          "Certified copies of proposed Bye-laws (4 copies) approved by the promoters' preliminary meeting",
          "Minutes of the preliminary promoter meeting appointing the Chief Promoter",
          "Economic feasibility and viability scheme report",
          "Bank certificate confirming collection and deposit of initial share capital in an approved bank",
          "List of promoters with residence and identity proofs"
        ],
        ml: [
          "എല്ലാ പ്രൊമോട്ടർമാരും ഒപ്പിട്ട ഫോറം നമ്പർ 1 അപേക്ഷ",
          "പ്രൊമോട്ടർ യോഗം അംഗീകരിച്ച 4 കോപ്പി നിർദ്ദിഷ്ട ബൈലോകൾ (Bye-laws)",
          "ചീഫ് പ്രൊമോട്ടറെ തിരഞ്ഞെടുത്ത ആദ്യ പ്രൊമോട്ടർ യോഗത്തിന്റെ മിനിറ്റ്സ്",
          "സംഘത്തിന്റെ സാമ്പത്തിക ഭദ്രത തെളിയിക്കുന്ന വയബിലിറ്റി റിപ്പോർട്ട്",
          "പ്രാഥമിക ഓഹരി തുക ബാങ്കിൽ നിക്ഷേപിച്ച സർട്ടിഫിക്കറ്റ്",
          "പ്രൊമോട്ടർമാരുടെ മേൽവിലാസവും തിരിച്ചറിയൽ രേഖകളും അടങ്ങിയ ലിസ്റ്റ്"
        ]
      },
      howToApply: {
        en: "Submit the statutory physical application in Form No. 1 with 4 copies of proposed bye-laws to the Assistant Registrar of Co-operative Societies (General) of the concerned Taluk, with tracking initiated via the departmental portal.",
        ml: "പൂരിപ്പിച്ച ഫോറം 1 അപേക്ഷയും 4 കോപ്പി ബൈലോകളും അനുബന്ധ രേഖകളും താലൂക്ക് അസിസ്റ്റന്റ് രജിസ്ട്രാർക്ക് (ജനറൽ) നേരിട്ട് സമർപ്പിക്കുക."
      },
      steps: {
        en: [
          "Convene a preliminary meeting of at least 25 promoters from separate families to adopt draft bye-laws and elect a Chief Promoter",
          "Collect initial share capital and deposit the amount in an approved cooperative/scheduled bank",
          "Prepare the Detailed Economic Feasibility and Viability Scheme Report",
          "Submit statutory application Form No. 1 with 4 certified copies of bye-laws to the Assistant Registrar of Co-operative Societies",
          "The departmental inspector conducts field inquiries on area of operation and viability",
          "Upon satisfaction of statutory rules within 90 days, the Joint/Assistant Registrar issues the official Certificate of Registration and registered bye-laws"
        ],
        ml: [
          "വ്യത്യസ്ത കുടുംബങ്ങളിലെ 25 പേരെ ഉൾപ്പെടുത്തി പ്രൊമോട്ടർ യോഗം ചേർന്ന് ബൈലോ അംഗീകരിക്കുകയും ചീഫ് പ്രൊമോട്ടറെ തിരഞ്ഞെടുക്കുകയും ചെയ്യുക",
          "പ്രാഥമിക ഓഹരി തുക സമാഹരിച്ച് ബാങ്കിൽ നിക്ഷേപിക്കുക",
          "സാമ്പത്തിക ഭദ്രതാ റിപ്പോർട്ട് തയ്യാറാക്കുക",
          "ഫോറം 1 അപേക്ഷയും 4 കോപ്പി ബൈലോകളും താലൂക്ക് അസിസ്റ്റന്റ് രജിസ്ട്രാർ ഓഫീസിൽ സമർപ്പിക്കുക",
          "സഹകരണ ഇൻസ്പെക്ടർ സ്ഥലം സന്ദർശിച്ച് അന്വേഷണ റിപ്പോർട്ട് സമർപ്പിക്കുന്നു",
          "90 ദിവസത്തിനകം പരിശോധനകൾ പൂർത്തിയാക്കി ഔദ്യോഗിക രജിസ്ട്രേഷൻ സർട്ടിഫിക്കറ്റും രജിസ്റ്റർ ചെയ്ത ബൈലോയും ലഭ്യമാക്കുന്നു"
        ]
      },
      fees: {
        en: "Statutory registration fee based on proposed authorized share capital as prescribed under the Kerala Co-operative Societies Rules.",
        ml: "സംഘത്തിന്റെ ഓഹരി മൂലധനത്തിനനുസരിച്ച് സഹകരണ നിയമപ്രകാരം നിശ്ചയിച്ചിട്ടുള്ള രജിസ്ട്രേഷൻ ഫീസ്."
      },
      validity: {
        en: "Permanent statutory corporate existence upon registration, subject to compliance with the Act.",
        ml: "രജിസ്റ്റർ ചെയ്തു കഴിഞ്ഞാൽ സംഘത്തിന് നിയമപരമായ സ്ഥിര നിലനിൽപ്പുണ്ട്."
      },
      officialUrl: "https://cooperation.kerala.gov.in/",
      importantNotes: {
        en: [
          "Statutory minimum requirement: Strictly 25 adult individuals from 25 separate families residing in the area of operation.",
          "Statutory timeline: The Registrar must register or dispose of the application within 90 days from the date of formal receipt.",
          "Form No. 1 and 4 certified physical copies of bye-laws remain a statutory requirement under Rule 3 of the Kerala Co-operative Societies Rules."
        ],
        ml: [
          "കുറഞ്ഞത് 25 വ്യത്യസ്ത കുടുംബങ്ങളിൽ നിന്നുള്ള 25 വ്യക്തികൾ നിർബന്ധമായും ഉണ്ടായിരിക്കണം.",
          "നിയമാനുസൃത സമയപരിധി: അപേക്ഷ ലഭിച്ച് 90 ദിവസത്തിനകം രജിസ്ട്രാർ തീർപ്പുകൽപ്പിച്ചിരിക്കണം.",
          "ഫോറം 1 അപേക്ഷയും 4 കോപ്പി ഒപ്പിട്ട ബൈലോകളും ഓഫീസിൽ നേരിട്ട് ഹാജരാക്കേണ്ടതുണ്ട്."
        ]
      }
    },

    // ================================================================
    // SERVICE #150: Cooperative Society Bylaw Amendment
    // ================================================================
    {
      id: "cooperative-society-bylaw-amendment",
      category: "other",
      subcategory: "cooperative",
      icon: "📑",
      name: {
        en: "Cooperative Society Bylaw Amendment",
        ml: "സഹകരണ സംഘം ബൈലോ ഭേദഗതി അംഗീകാരം (Rule 9)"
      },
      summary: {
        en: "Statutory verification, approval, and certification of amendments made to the registered bye-laws of a cooperative society under Rule 9.",
        ml: "നിലവിലുള്ള സഹകരണ സംഘങ്ങളുടെ ബൈലോകളിൽ വരുത്തുന്ന മാറ്റങ്ങൾ സർക്കാർ ചട്ടപ്രകാരം പരിശോധിച്ച് രജിസ്റ്റർ ചെയ്യുന്നതിനുള്ള സേവനം."
      },
      description: {
        en: "Under Section 12 of the Kerala Co-operative Societies Act, 1969, and Rule 9 of the Kerala Co-operative Societies Rules, any registered cooperative society seeking to amend its bye-laws (such as changing area of operation, expanding objectives, increasing borrowing powers, or altering share value) must obtain statutory approval and formal registration from the Registrar of Co-operative Societies.",
        ml: "1969-ലെ കേരള സഹകരണ സംഘം നിയമത്തിലെ വകുപ്പ് 12, ചട്ടം 9 എന്നിവ പ്രകാരം, ഒരു സഹകരണ സംഘത്തിന്റെ ബൈലോയിൽ വരുത്തുന്ന ഭേദഗതികൾക്ക് (പ്രവർത്തന പരിധി മാറ്റൽ, ഉദ്ദേശ്യങ്ങൾ വിപുലീകരിക്കൽ, ഓഹരി മൂല്യം മാറ്റൽ എന്നിവ) സഹകരണ വകുപ്പ് രജിസ്ട്രാറുടെ ഔദ്യോഗിക അംഗീകാരവും സർട്ടിഫിക്കേഷനും ലഭ്യമാക്കുന്ന സേവനമാണിത്."
      },
      eligibility: {
        en: [
          "Any registered co-operative society operating in Kerala under the Co-operation Department",
          "Proposed amendment resolution must have been passed at a validly convened General Body meeting with requisite quorum",
          "Must be supported by a two-thirds (2/3rd) majority of members present and voting"
        ],
        ml: [
          "കേരള സഹകരണ വകുപ്പിന് കീഴിൽ പ്രവർത്തിക്കുന്ന രജിസ്റ്റർ ചെയ്ത സഹകരണ സംഘങ്ങൾ",
          "ക്വോറം തികഞ്ഞ ജനറൽ ബോഡി യോഗത്തിൽ ഭേദഗതി പ്രമേയം പാസ്സാക്കിയിരിക്കണം",
          "യോഗത്തിൽ പങ്കെടുത്ത മൂന്നിൽ രണ്ട് (2/3rd) ഭൂരിപക്ഷത്തോടെ പ്രമേയം അംഗീകരിച്ചിട്ടുണ്ടായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Formal application signed by the authorized Secretary / Chief Executive of the society",
          "Copy of the notice convening the General Body meeting",
          "Certified extract of the General Body resolution passed with 2/3rd majority",
          "Comparative statement detailing existing clauses, proposed amendments, and justification for changes",
          "Certificate of the Presiding Officer confirming voting results and quorum",
          "Copies of the amended bye-laws"
        ],
        ml: [
          "സൊസൈറ്റി സെക്രട്ടറി ഒപ്പുവെച്ച നിശ്ചിത അപേക്ഷ",
          "ജനറൽ ബോഡി യോഗം വിളിച്ചുചേർത്ത നോട്ടീസിന്റെ പകർപ്പ്",
          "മൂന്നിൽ രണ്ട് ഭൂരിപക്ഷത്തോടെ പാസ്സാക്കിയ ജനറൽ ബോഡി പ്രമേയത്തിന്റെ സാക്ഷ്യപ്പെടുത്തിയ പകർപ്പ്",
          "നിലവിലെ ബൈലോ വകുപ്പും പുതിയ ഭേദഗതിയും താരതമ്യം ചെയ്തുകൊണ്ടുള്ള സ്റ്റേറ്റ്മെന്റ്",
          "യോഗത്തിന്റെ ക്വോറവും വോട്ടെടുപ്പും വ്യക്തമാക്കുന്ന പ്രിസൈഡിംഗ് ഓഫീസറുടെ സർട്ടിഫിക്കറ്റ്",
          "ഭേദഗതി വരുത്തിയ ബൈലോ പകർപ്പുകൾ"
        ]
      },
      howToApply: {
        en: "Submit the statutory amendment application along with comparative statements and meeting extracts to the Assistant Registrar / Joint Registrar of Co-operative Societies.",
        ml: "പൂരിപ്പിച്ച അപേക്ഷയും താരതമ്യ സ്റ്റേറ്റ്മെന്റും ജനറൽ ബോഡി മിനിറ്റ്സും അസിസ്റ്റന്റ് രജിസ്ട്രാർ / ജോയിന്റ് രജിസ്ട്രാർ ഓഫീസിൽ സമർപ്പിക്കുക."
      },
      steps: {
        en: [
          "Issue statutory notice to all members convening a General Body meeting specifying proposed bye-law amendments",
          "Convene the meeting, ensure valid quorum, and pass the amendment resolution with a 2/3rd majority of voting members",
          "Prepare the comparative statement showing existing bye-law provisions versus proposed amendments",
          "Submit the formal application with meeting resolution and Presiding Officer's certificate within 30 days of the meeting",
          "Registrar examines whether the amendment conforms with cooperative legislation and sound business practice",
          "Within 90 days, the Registrar formally registers the amendment and issues the official Certificate of Amendment"
        ],
        ml: [
          "ഭേദഗതികൾ വ്യക്തമാക്കിക്കൊണ്ട് അംഗങ്ങൾക്ക് കൃത്യസമയത്ത് ജനറൽ ബോഡി നോട്ടീസ് നൽകുക",
          "ജനറൽ ബോഡി യോഗം ചേർന്ന് മൂന്നിൽ രണ്ട് ഭൂരിപക്ഷത്തോടെ ഭേദഗതി പ്രമേയം പാസ്സാക്കുക",
          "പഴയ വകുപ്പുകളും പുതിയ ഭേദഗതികളും ഉൾപ്പെടുത്തിയ താരതമ്യ പട്ടിക തയ്യാറാക്കുക",
          "യോഗം കഴിഞ്ഞ് 30 ദിവസത്തിനകം അപേക്ഷയും പ്രമേയവും രജിസ്ട്രാർക്ക് സമർപ്പിക്കുക",
          "ഭേദഗതി സഹകരണ നിയമങ്ങൾക്ക് അനുസൃതമാണോ എന്ന് ഉദ്യോഗസ്ഥർ പരിശോധിക്കുന്നു",
          "90 ദിവസത്തിനകം രജിസ്ട്രാർ ഭേദഗതി അംഗീകരിച്ച് ഔദ്യോഗിക സർട്ടിഫിക്കറ്റ് നൽകുന്നു"
        ]
      },
      fees: {
        en: "Statutory scrutiny fee as prescribed under Rule 9 of the Kerala Co-operative Societies Rules.",
        ml: "സഹകരണ ചട്ടം 9 പ്രകാരം നിശ്ചയിച്ചിട്ടുള്ള നാമമാത്രമായ പരിശോധനാ ഫീസ്."
      },
      validity: {
        en: "Permanent amendment once registered; takes legal effect from the date of registration by the Registrar.",
        ml: "രജിസ്ട്രാർ സർട്ടിഫിക്കറ്റ് നൽകുന്ന തീയതി മുതൽ ബൈലോ ഭേദഗതി പ്രാബല്യത്തിൽ വരുന്നു."
      },
      officialUrl: "https://cooperation.kerala.gov.in/",
      importantNotes: {
        en: [
          "Statutory voting threshold: The amendment resolution must be passed by a two-thirds (2/3rd) majority of members present and voting.",
          "Strict filing deadline: Application must be formally submitted within 30 days from the date of the General Body meeting.",
          "Statutory disposal timeline: The Registrar must register or reject the amendment within 90 days of receipt."
        ],
        ml: [
          "വോട്ടിംഗ് നിബന്ധന: യോഗത്തിൽ പങ്കെടുത്ത അംഗങ്ങളുടെ മൂന്നിൽ രണ്ട് (2/3rd) ഭൂരിപക്ഷം നിർബന്ധമാണ്.",
          "സമയപരിധി: ജനറൽ ബോഡി യോഗം ചേർന്ന് 30 ദിവസത്തിനകം അപേക്ഷ സമർപ്പിച്ചിരിക്കണം.",
          "രജിസ്ട്രാർ 90 ദിവസത്തിനകം അപേക്ഷയിൽ തീർപ്പുകൽപ്പിച്ചിരിക്കണം."
        ]
      }
    }
  ];

  if (window.SevaRegistry && typeof window.SevaRegistry.register === "function") {
    window.SevaRegistry.register(data);
  } else {
    window.SevaRegistry.other = data;
  }
})();
