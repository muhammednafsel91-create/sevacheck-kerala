// ==========================================
// SEVACHECK KERALA — DATA MODULE
// Category: Travel & Transport (4 Services)
// File: data/cat-travel.js
// ==========================================

(function () {
  const data = [
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

  if (window.SevaRegistry && typeof window.SevaRegistry.register === "function") {
    window.SevaRegistry.register(data);
  } else {
    console.error("SevaRegistry not found when loading cat-travel.js");
  }
})();
