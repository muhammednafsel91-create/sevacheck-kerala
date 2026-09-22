// ==========================================
// SEVACHECK KERALA — DATA MODULE
// Category: Travel & Transport (13 Services)
// Subsection: Motor Vehicles / MVD Services
// File: data/cat-travel.js
// ==========================================

(function () {
  const data = [
    {
      id: "ksrtc-ticket-booking",
      category: "travel",
      subCategory: "general-travel",
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
      subCategory: "general-travel",
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
      subCategory: "general-travel",
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
      subCategory: "travel-mvd",
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
    },
    {
      id: "learner-test-slot-booking",
      category: "travel",
      subCategory: "travel-mvd",
      icon: "📅",
      name: {
        en: "Learner Test Slot Booking",
        ml: "ലേണേഴ്സ് ടെസ്റ്റ് സ്ലോട്ട് ബുക്കിംഗ്"
      },
      summary: {
        en: "Online reservation and scheduling of computer-based theory test appointments for obtaining a Learner's Licence in Kerala.",
        ml: "കേരളത്തിൽ ലേണേഴ്സ് ലൈസൻസ് ലഭിക്കുന്നതിനുള്ള കമ്പ്യൂട്ടർ തിയറി പരീക്ഷാ തീയതിയും സമയവും ഓൺലൈനായി ബുക്ക് ചെയ്യുന്ന സംവിധാനം."
      },
      whoNeeds: {
        en: "Applicants who have submitted a new Learner's Licence application on Sarathi and need to appear for or reschedule the online theory exam.",
        ml: "സാരഥി പോർട്ടലിൽ പുതിയ ലേണേഴ്സ് ലൈസൻസിന് അപേക്ഷിച്ച ശേഷം തിയറി പരീക്ഷയ്ക്ക് ഹാജരാകാൻ തീയതി തിരഞ്ഞെടുക്കേണ്ടവർ."
      },
      eligibility: {
        en: "Applicants holding an active Sarathi Application Number who have completed fee payment and mandatory document upload.",
        ml: "ഫീസും രേഖകളും സമർപ്പിച്ച് സാധുവായ സാരഥി ആപ്ലിക്കേഷൻ നമ്പർ കൈവശമുള്ള അപേക്ഷകർക്ക്."
      },
      documents: {
        en: [
          "No document upload required for slot booking",
          "Sarathi Application Number",
          "Applicant's Date of Birth (as entered in application)",
          "Registered Mobile Number for OTP authentication"
        ],
        ml: [
          "സ്ലോട്ട് ബുക്കിംഗിനായി പ്രത്യേക രേഖകൾ അപ്‌ലോഡ് ചെയ്യേണ്ടതില്ല",
          "സാരഥി ആപ്ലിക്കേഷൻ നമ്പർ",
          "അപേക്ഷകന്റെ ജനനത്തീയതി",
          "ഒ.ടി.പി ലഭിക്കുന്നതിനുള്ള രജിസ്റ്റർ ചെയ്ത മൊബൈൽ നമ്പർ"
        ]
      },
      additionalDocs: {
        en: [],
        ml: []
      },
      whereToApply: {
        en: "Parivahan Sarathi Portal (sarathi.parivahan.gov.in) under Appointments menu.",
        ml: "പരിവഹൻ സാരഥി പോർട്ടൽ (sarathi.parivahan.gov.in) അപ്പോയിന്റ്മെന്റ്സ് വിഭാഗം."
      },
      mode: {
        en: "100% Online",
        ml: "പൂർണ്ണമായും ഓൺലൈൻ"
      },
      steps: {
        en: [
          "Visit sarathi.parivahan.gov.in and select State as Kerala.",
          "Navigate to 'Appointments' -> 'Slot Booking LL Test'.",
          "Enter your Application Number, Date of Birth, and verification captcha.",
          "Authenticate with the OTP sent to your registered mobile number.",
          "View the slot calendar, select an available date and test session at your RTO/Sub-RTO, and confirm appointment.",
          "Download and print the Slot Confirmation Slip."
        ],
        ml: [
          "sarathi.parivahan.gov.in സന്ദർശിച്ച് കേരളം തിരഞ്ഞെടുക്കുക.",
          "'Appointments' -> 'Slot Booking LL Test' ക്ലിക്ക് ചെയ്യുക.",
          "ആപ്ലിക്കേഷൻ നമ്പറും ജനനത്തീയതിയും ക്യാപ്‌ചയും നൽകുക.",
          "മൊബൈലിൽ വരുന്ന ഒ.ടി.പി നൽകി ലോഗിൻ ചെയ്യുക.",
          "ലഭ്യമായ തീയതിയും സമയവും പരിശോധിച്ച് സ്ലോട്ട് ഉറപ്പുവരുത്തുക.",
          "അപ്പോയിന്റ്മെന്റ് കൺഫർമേഷൻ സ്ലിപ്പ് പ്രിന്റ് എടുക്കുക."
        ]
      },
      officialUrl: "https://sarathi.parivahan.gov.in",
      notes: {
        en: "If you fail or miss the scheduled test, a re-test fee must be remitted before booking a new test slot.",
        ml: "പരീക്ഷയിൽ പങ്കെടുക്കാൻ സാധിക്കാതിരിക്കുകയോ പരാജയപ്പെടുകയോ ചെയ്താൽ റീ-ടെസ്റ്റ് ഫീസ് അടച്ച ശേഷമേ പുതിയ സ്ലോട്ട് ബുക്ക് ചെയ്യാനാകൂ."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "driving-test-appointment",
      category: "travel",
      subCategory: "travel-mvd",
      icon: "🚘",
      name: {
        en: "Driving Practical / Competence Test Appointment",
        ml: "ഡ്രൈവിംഗ് പ്രാക്ടിക്കൽ ടെസ്റ്റ് അപ്പോയിന്റ്മെന്റ്"
      },
      summary: {
        en: "Online appointment scheduling for the ground skill test (track) and road competence test conducted by MVD for permanent driving licence.",
        ml: "സ്ഥിരം ഡ്രൈവിംഗ് ലൈസൻസ് ലഭിക്കുന്നതിനായുള്ള ഗ്രൗണ്ട് ടെസ്റ്റിനും റോഡ് ടെസ്റ്റിനുമുള്ള തീയതി ഓൺലൈനായി ബുക്ക് ചെയ്യുന്ന സംവിധാനം."
      },
      whoNeeds: {
        en: "Learner's Licence holders who have completed the mandatory 30-day learning period and are ready for the practical driving test.",
        ml: "ലേണേഴ്സ് ലൈസൻസ് എടുത്ത് 30 ദിവസത്തെ നിർബന്ധിത പരിശീലന കാലാവധി പൂർത്തിയാക്കിയ ഡ്രൈവിംഗ് ലൈസൻസ് അപേക്ഷകർ."
      },
      eligibility: {
        en: "Valid Learner's Licence (active and not expired) for the applied vehicle class, with permanent licence application fees paid.",
        ml: "കാലാവധിയുള്ള ലേണേഴ്സ് ലൈസൻസും സ്ഥിരം ലൈസൻസിനായുള്ള ഫീസ് അടച്ച രസീതും ഉള്ളവർക്ക്."
      },
      documents: {
        en: [
          "No document upload required for appointment booking",
          "Sarathi Application Number or Learner's Licence Number",
          "Applicant's Date of Birth",
          "Registered Mobile Number for OTP"
        ],
        ml: [
          "സ്ലോട്ട് ബുക്കിംഗിനായി പ്രത്യേക രേഖകൾ അപ്‌ലോഡ് ചെയ്യേണ്ടതില്ല",
          "സാരഥി ആപ്ലിക്കേഷൻ നമ്പർ അല്ലെങ്കിൽ ലേണേഴ്സ് ലൈസൻസ് നമ്പർ",
          "ജനനത്തീയതി",
          "രജിസ്റ്റർ ചെയ്ത മൊബൈൽ നമ്പർ"
        ]
      },
      additionalDocs: {
        en: [
          "Form 5 / Driving School Certificate (mandatory for transport and heavy vehicle categories)"
        ],
        ml: [
          "ട്രാൻസ്പോർട്ട് ഹെവി വാഹനങ്ങൾക്ക് ഡ്രൈവിംഗ് സ്കൂൾ സർട്ടിഫിക്കറ്റ് (ഫോം 5)"
        ]
      },
      whereToApply: {
        en: "Parivahan Sarathi Portal (sarathi.parivahan.gov.in) under Appointments menu.",
        ml: "പരിവഹൻ സാരഥി പോർട്ടൽ (sarathi.parivahan.gov.in) അപ്പോയിന്റ്മെന്റ്സ് വിഭാഗം."
      },
      mode: {
        en: "Online Booking & MVD Test Track",
        ml: "ഓൺലൈൻ ബുക്കിംഗ് & ആർ.ടി.ഒ ടെസ്റ്റ് ഗ്രൗണ്ട്"
      },
      steps: {
        en: [
          "Visit sarathi.parivahan.gov.in and select Kerala.",
          "Navigate to 'Appointments' -> 'Slot Booking DL Test'.",
          "Enter your Application Number and Date of Birth.",
          "Select the vehicle class (e.g., Two Wheeler, LMV) for which the test is being scheduled.",
          "Select an available testing ground slot from the calendar and confirm booking via mobile OTP.",
          "Print the test appointment slip and report to the testing ground with appropriate vehicle and documents."
        ],
        ml: [
          "sarathi.parivahan.gov.in പോർട്ടലിൽ പ്രവേശിക്കുക.",
          "'Appointments' -> 'Slot Booking DL Test' തിരഞ്ഞെടുക്കുക.",
          "ആപ്ലിക്കേഷൻ നമ്പറും ജനനത്തീയതിയും നൽകുക.",
          "ടെസ്റ്റ് എടുക്കാൻ ആഗ്രഹിക്കുന്ന വാഹന വിഭാഗം തിരഞ്ഞെടുക്കുക.",
          "കലണ്ടറിൽ നിന്ന് അനുയോജ്യമായ ഗ്രൗണ്ട് സ്ലോട്ട് തിരഞ്ഞെടുത്ത് ഒ.ടി.പി വഴി കൺഫേം ചെയ്യുക.",
          "അപ്പോയിന്റ്മെന്റ് സ്ലിപ്പ് പ്രിന്റ് എടുത്ത് നിശ്ചിത തീയതിയിൽ ടെസ്റ്റ് ഗ്രൗണ്ടിൽ ഹാജരാകുക."
        ]
      },
      officialUrl: "https://sarathi.parivahan.gov.in",
      notes: {
        en: "You must carry the original Learner's Licence, valid vehicle documents (RC, Insurance, PUC), and appointment slip to the testing ground.",
        ml: "ഒറിജിനൽ ലേണേഴ്സ് ലൈസൻസ്, ടെസ്റ്റിന് കൊണ്ടുപോകുന്ന വാഹനത്തിന്റെ രേഖകൾ (RC, Insurance, PUC), അപ്പോയിന്റ്മെന്റ് സ്ലിപ്പ് എന്നിവ നിർബന്ധമായും കരുതണം."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "international-driving-permit",
      category: "travel",
      subCategory: "travel-mvd",
      icon: "🌐",
      name: {
        en: "International Driving Permit (IDP)",
        ml: "ഇന്റർനാഷണൽ ഡ്രൈവിംഗ് പെർമിറ്റ് (IDP)"
      },
      summary: {
        en: "Statutory multi-language permit issued by Kerala MVD permitting Indian driving licence holders to drive motor vehicles in foreign countries.",
        ml: "സാധുവായ ഇന്ത്യൻ ഡ്രൈവിംഗ് ലൈസൻസുള്ളവർക്ക് വിദേശ രാജ്യങ്ങളിൽ വാഹനം ഓടിക്കുന്നതിനായി മോട്ടോർ വാഹന വകുപ്പ് നൽകുന്ന ഔദ്യോഗിക യാത്രാ പെർമിറ്റ്."
      },
      whoNeeds: {
        en: "Indian citizens holding a valid domestic driving licence traveling abroad on visit, employment, or student visas.",
        ml: "വിദേശത്തേക്ക് യാത്ര ചെയ്യുന്ന സ്ഥിരം ഇന്ത്യൻ ഡ്രൈവിംഗ് ലൈസൻസുള്ള പൗരന്മാർ."
      },
      eligibility: {
        en: "Must hold an active permanent Indian Driving Licence issued in Kerala, a valid Indian Passport, and valid travel visa or tickets.",
        ml: "കേരളത്തിൽ നിന്ന് ലഭിച്ച സാധുവായ സ്ഥിരം ഡ്രൈവിംഗ് ലൈസൻസും ഒറിജിനൽ ഇന്ത്യൻ പാസ്‌പോർട്ടും വിസയും ഉള്ളവർക്ക്."
      },
      documents: {
        en: [
          "Valid Permanent Indian Driving Licence",
          "Valid Indian Passport",
          "Valid Visa for the country of travel or confirmed air ticket",
          "Medical Certificate in Form 1A signed by a registered medical practitioner"
        ],
        ml: [
          "സാധുവായ സ്ഥിരം ഇന്ത്യൻ ഡ്രൈവിംഗ് ലൈസൻസ്",
          "സാധുവായ ഇന്ത്യൻ പാസ്‌പോർട്ട്",
          "സന്ദർശിക്കുന്ന രാജ്യത്തിന്റെ വിസ അല്ലെങ്കിൽ വിമാന ടിക്കറ്റ്",
          "അംഗീകൃത ഡോക്ടർ സാക്ഷ്യപ്പെടുത്തിയ മെഡിക്കൽ സർട്ടിഫിക്കറ്റ് (ഫോം 1A)"
        ]
      },
      additionalDocs: {
        en: [
          "Passport-size photographs matching official specifications"
        ],
        ml: [
          "നിർദ്ദിഷ്ട അളവിലുള്ള പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ"
        ]
      },
      whereToApply: {
        en: "Parivahan Sarathi Portal (sarathi.parivahan.gov.in) -> Apply for International Driving Permit (IDP).",
        ml: "പരിവഹൻ സാരഥി പോർട്ടൽ (sarathi.parivahan.gov.in) വഴി ഓൺലൈനായി."
      },
      mode: {
        en: "Online Application & Document Verification",
        ml: "ഓൺലൈൻ അപേക്ഷ & രേഖാ പരിശോധന"
      },
      steps: {
        en: [
          "Visit sarathi.parivahan.gov.in, choose Kerala, and select 'Apply for International Driving Permit (IDP)'.",
          "Enter your Driving Licence number and Date of Birth to load applicant profile.",
          "Provide travel particulars: countries visiting, visa details, passport number, and expiry date.",
          "Upload scanned copies of Passport, Visa, Driving Licence, and Medical Certificate (Form 1A).",
          "Pay the statutory fee (Rs. 1,000) online via e-payment gateway.",
          "Download the acknowledgement receipt and visit the jurisdictional RTO if physical verification of documents is scheduled."
        ],
        ml: [
          "sarathi.parivahan.gov.in സന്ദർശിച്ച് 'Apply for International Driving Permit (IDP)' തിരഞ്ഞെടുക്കുക.",
          "ലൈസൻസ് നമ്പറും ജനനത്തീയതിയും നൽകി വിവരങ്ങൾ പരിശോധിക്കുക.",
          "യാത്രാ വിവരങ്ങൾ, പാസ്‌പോർട്ട് നമ്പർ, വിസ വിവരങ്ങൾ എന്നിവ രേഖപ്പെടുത്തുക.",
          "പാസ്‌പോർട്ട്, വിസ, മെഡിക്കൽ സർട്ടിഫിക്കറ്റ് എന്നിവ അപ്‌ലോഡ് ചെയ്യുക.",
          "നിശ്ചിത സർക്കാർ ഫീസ് (രൂപ 1,000) ഓൺലൈനായി അടയ്ക്കുക.",
          "രസീത് ഡൗൺലോഡ് ചെയ്ത് ആവശ്യമെങ്കിൽ ആർ.ടി.ഒ ഓഫീസിൽ രേഖകൾ ഹാജരാക്കുക."
        ]
      },
      officialUrl: "https://sarathi.parivahan.gov.in",
      notes: {
        en: "An IDP is strictly valid for a maximum of 1 year from the date of issue or until the domestic driving licence expires, whichever is earlier.",
        ml: "ഇഷ്യൂ ചെയ്ത തീയതി മുതൽ പരമാവധി ഒരു വർഷമാണ് ഇതിന്റെ കാലാവധി (ഡ്രൈവിംഗ് ലൈസൻസ് കാലാവധി അതിന് മുൻപ് അവസാനിച്ചാൽ അതുവരെ മാത്രം)."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "vehicle-fitness-certificate",
      category: "travel",
      subCategory: "travel-mvd",
      icon: "🛡️",
      name: {
        en: "Vehicle Fitness Certificate",
        ml: "വാഹന ഫിറ്റ്‌നസ് സർട്ടിഫിക്കറ്റ് (FC)"
      },
      summary: {
        en: "Mandatory statutory roadworthiness certification and renewal for commercial/transport vehicles and aged private motor vehicles under MVD.",
        ml: "വാണിജ്യ വാഹനങ്ങളും 15 വർഷം കഴിഞ്ഞ സ്വകാര്യ വാഹനങ്ങളും നിരത്തിലിറക്കാൻ യോഗ്യമാണെന്ന് സാക്ഷ്യപ്പെടുത്തുന്ന ഫിറ്റ്‌നസ് സർട്ടിഫിക്കറ്റ് സേവനം."
      },
      whoNeeds: {
        en: "Owners of commercial transport vehicles (taxis, autorickshaws, buses, trucks) and private vehicles older than 15 years needing fitness renewal.",
        ml: "വാണിജ്യ വാഹനങ്ങളുടെ ഉടമകൾ, 15 വർഷം പൂർത്തിയായ സ്വകാര്യ വാഹനങ്ങളുടെ ഫിറ്റ്‌നസ് പുതുക്കേണ്ടവർ."
      },
      eligibility: {
        en: "Registered motor vehicles registered in Kerala with up-to-date road tax and valid motor insurance.",
        ml: "കേരളത്തിൽ രജിസ്റ്റർ ചെയ്തതും നികുതിയും ഇൻഷുറൻസും കുടിശ്ശികയില്ലാത്തതുമായ വാഹനങ്ങളുടെ ഉടമകൾക്ക്."
      },
      documents: {
        en: [
          "Registration Certificate (RC) of the vehicle",
          "Valid Motor Vehicle Insurance Certificate",
          "Valid Pollution Under Control Certificate (PUCC)",
          "Road Tax clearance receipt"
        ],
        ml: [
          "വാഹനത്തിന്റെ ആർ.സി (RC Book / Smart Card)",
          "സാധുവായ ഇൻഷുറൻസ് പോളിസി",
          "പുക പരിശോധനാ സർട്ടിഫിക്കറ്റ് (PUCC)",
          "റോഡ് ടാക്സ് അടച്ച രസീത്"
        ]
      },
      additionalDocs: {
        en: [
          "Speed Governor calibration certificate (commercial transport)",
          "Vehicle location tracking device (VLTD / GPS) certificate and panic button compliance",
          "Reflective tape and retro-reflective marking compliance certificate"
        ],
        ml: [
          "സ്പീഡ് ഗവർണർ സർട്ടിഫിക്കറ്റ് (വാണിജ്യ വാഹനങ്ങൾക്ക്)",
          "ജി.പി.എസ് (VLTD), പാനിക് ബട്ടൺ ഫിറ്റ്മെന്റ് സർട്ടിഫിക്കറ്റ്",
          "റിഫ്ലക്ടീവ് ടേപ്പ് പതിപ്പിച്ചതിന്റെ രേഖ"
        ]
      },
      whereToApply: {
        en: "Parivahan Vahan Portal (vahan.parivahan.gov.in/vahanservice) -> Application for Fitness Certificate / Renewal.",
        ml: "പരിവഹൻ വാഹൻ പോർട്ടൽ (vahan.parivahan.gov.in/vahanservice) വഴി ഓൺലൈനായി."
      },
      mode: {
        en: "Online Application & Ground Mechanical Inspection",
        ml: "ഓൺലൈൻ അപേക്ഷ & ഗ്രൗണ്ട് പരിശോധന"
      },
      steps: {
        en: [
          "Log in to the Parivahan Vahan portal and enter vehicle registration number.",
          "Select 'Application for Fitness Certificate / Renewal' under vehicle-related services.",
          "Verify vehicle particulars, chassis number, and insurance validity.",
          "Pay the statutory fitness inspection and grant fees online.",
          "Book an inspection slot at the jurisdictional testing ground or Automated Testing Station (ATS).",
          "Present vehicle in clean, roadworthy condition for physical inspection by Motor Vehicle Inspector (MVI).",
          "Download digitally verified Fitness Certificate upon passing inspection."
        ],
        ml: [
          "പരിവഹൻ വാഹൻ പോർട്ടലിൽ വാഹന നമ്പർ നൽകി ലോഗിൻ ചെയ്യുക.",
          "'Application for Fitness Certificate / Renewal' തിരഞ്ഞെടുക്കുക.",
          "വാഹന വിവരങ്ങളും ഇൻഷുറൻസും പരിശോധിക്കുക.",
          "ഫിറ്റ്‌നസ് പരിശോധനാ ഫീസ് ഓൺലൈനായി അടയ്ക്കുക.",
          "ആർ.ടി.ഒ ടെസ്റ്റിംഗ് ഗ്രൗണ്ടിൽ പരിശോധനയ്ക്കായി സ്ലോട്ട് ബുക്ക് ചെയ്യുക.",
          "വാഹനം ഗ്രൗണ്ടിൽ നേരിട്ടെത്തിച്ച് പരിശോധന പാസാകുക.",
          "തുടർന്ന് ഡിജിറ്റൽ ഫിറ്റ്‌നസ് സർട്ടിഫിക്കറ്റ് ഡൗൺലോഡ് ചെയ്യാം."
        ]
      },
      officialUrl: "https://vahan.parivahan.gov.in/vahanservice/",
      notes: {
        en: "Operating a transport vehicle without a valid Fitness Certificate attracts heavy statutory penalties and invalidates vehicular insurance coverage.",
        ml: "ഫിറ്റ്‌നസ് സർട്ടിഫിക്കറ്റ് ഇല്ലാതെ വാഹനം ഓടിക്കുന്നത് കനത്ത പിഴയ്ക്ക് കാരണമാകുകയും ഇൻഷുറൻസ് പരിരക്ഷ നഷ്ടപ്പെടുത്തുകയും ചെയ്യും."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "vehicle-fitness-test-appointment",
      category: "travel",
      subCategory: "travel-mvd",
      icon: "📋",
      name: {
        en: "Vehicle Fitness Test Appointment",
        ml: "വാഹന ഫിറ്റ്‌നസ് പരിശോധന സ്ലോട്ട് ബുക്കിംഗ്"
      },
      summary: {
        en: "Online booking and rescheduling of physical vehicle inspection slots at MVD testing grounds or Automated Testing Stations (ATS).",
        ml: "വാഹന ഫിറ്റ്‌നസ് പരിശോധനയ്ക്കായി ആർ.ടി.ഒ ഗ്രൗണ്ടുകളിലോ ഓട്ടോമേറ്റഡ് ടെസ്റ്റിംഗ് സ്റ്റേഷനുകളിലോ തീയതിയും സമയവും മുൻകൂട്ടി ബുക്ക് ചെയ്യുന്ന സംവിധാനം."
      },
      whoNeeds: {
        en: "Vehicle owners who have submitted an application and paid fees for a new or renewal Fitness Certificate and must schedule vehicle presentation.",
        ml: "ഫിറ്റ്‌നസ് സർട്ടിഫിക്കറ്റിനായി ഫീസ് അടച്ച ശേഷം വാഹനം പരിശോധനയ്ക്ക് എത്തിക്കാനുള്ള സ്ലോട്ട് ബുക്ക് ചെയ്യേണ്ട ഉടമകൾ."
      },
      eligibility: {
        en: "Vehicle owners possessing a valid Vahan Application Number with completed fee payment for fitness inspection.",
        ml: "ഫിറ്റ്‌നസ് ഫീസ് അടച്ച് സാധുവായ വാഹൻ ആപ്ലിക്കേഷൻ നമ്പർ കൈവശമുള്ള വാഹന ഉടമകൾക്ക്."
      },
      documents: {
        en: [
          "No document upload required for appointment booking",
          "Vahan Application Number",
          "Vehicle Registration Number",
          "Chassis Number (last 5 digits)"
        ],
        ml: [
          "സ്ലോട്ട് ബുക്കിംഗിനായി പ്രത്യേക രേഖകൾ അപ്‌ലോഡ് ചെയ്യേണ്ടതില്ല",
          "വാഹൻ ആപ്ലിക്കേഷൻ നമ്പർ",
          "വാഹന രജിസ്ട്രേഷൻ നമ്പർ",
          "ചേസിസ് നമ്പറിന്റെ അവസാന 5 അക്കങ്ങൾ"
        ]
      },
      additionalDocs: {
        en: [],
        ml: []
      },
      whereToApply: {
        en: "Parivahan Vahan Portal (vahan.parivahan.gov.in/vahanservice) under Book Fitness Inspection Slot.",
        ml: "പരിവഹൻ വാഹൻ പോർട്ടൽ (vahan.parivahan.gov.in/vahanservice) അപ്പോയിന്റ്മെന്റ്സ് വിഭാഗം."
      },
      mode: {
        en: "100% Online Slot Booking",
        ml: "പൂർണ്ണമായും ഓൺലൈൻ"
      },
      steps: {
        en: [
          "Access the Parivahan Vahan portal (vahan.parivahan.gov.in/vahanservice).",
          "Navigate to 'Appointments' -> 'Book Fitness Inspection Slot'.",
          "Enter your Vahan Application Number and vehicle registration details.",
          "Authenticate via mobile OTP sent to the registered owner's mobile number.",
          "Select the preferred Sub-RTO/RTO ground or Automated Testing Station, select available date, and book slot.",
          "Print the inspection appointment receipt to present before the inspecting officer."
        ],
        ml: [
          "പരിവഹൻ വാഹൻ പോർട്ടലിൽ പ്രവേശിക്കുക.",
          "'Appointments' -> 'Book Fitness Inspection Slot' ക്ലിക്ക് ചെയ്യുക.",
          "ആപ്ലിക്കേഷൻ നമ്പറും വാഹന നമ്പറും നൽകുക.",
          "മൊബൈലിൽ വരുന്ന ഒ.ടി.പി നൽകി ലോഗിൻ ചെയ്യുക.",
          "അനുയോജ്യമായ ടെസ്റ്റിംഗ് ഗ്രൗണ്ടും തീയതിയും സമയവും തിരഞ്ഞെടുത്ത് സ്ലോട്ട് ഉറപ്പാക്കുക.",
          "അപ്പോയിന്റ്മെന്റ് സ്ലിപ്പ് പ്രിന്റ് എടുക്കുക."
        ]
      },
      officialUrl: "https://vahan.parivahan.gov.in/vahanservice/",
      notes: {
        en: "Arrive at the testing ground 15 minutes prior to the scheduled slot with all original vehicle documents and safety apparatus in place.",
        ml: "ബുക്ക് ചെയ്ത സമയത്തിന് 15 മിനിറ്റ് മുൻപായി എല്ലാ അസ്സൽ രേഖകളും സുരക്ഷാ ഉപകരണങ്ങളുമായി ഗ്രൗണ്ടിൽ എത്തിച്ചേരുക."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "motor-vehicle-tax-payment",
      category: "travel",
      subCategory: "travel-mvd",
      icon: "💳",
      name: {
        en: "Motor Vehicle Tax Payment",
        ml: "മോട്ടോർ വാഹന നികുതി അടയ്ക്കൽ"
      },
      summary: {
        en: "Online payment gateway for remitting quarterly, annual, or lifetime motor vehicle road tax to Kerala MVD via Parivahan.",
        ml: "മോട്ടോർ വാഹനങ്ങളുടെ ത്രൈമാസ, വാർഷിക, ലൈഫ് ടൈം റോഡ് നികുതി ഓൺലൈനായി അടയ്ക്കാനുള്ള സംവിധാനം."
      },
      whoNeeds: {
        en: "Commercial vehicle owners paying periodic quarterly tax, and private vehicle owners paying annual or balance road taxes.",
        ml: "വാണിജ്യ വാഹനങ്ങളുടെ നികുതി തവണകളായി അടയ്ക്കേണ്ടവർ, റോഡ് ടാക്സ് കുടിശ്ശിക തീർക്കേണ്ട വാഹന ഉടമകൾ."
      },
      eligibility: {
        en: "All motor vehicles registered in Kerala subject to taxation under the Kerala Motor Vehicles Taxation Act.",
        ml: "കേരളത്തിൽ രജിസ്റ്റർ ചെയ്തതും നികുതി ബാധ്യതയുള്ളതുമായ എല്ലാ വാഹനങ്ങളുടെയും ഉടമകൾക്ക്."
      },
      documents: {
        en: [
          "Vehicle Registration Number",
          "Chassis Number (last 5 digits)",
          "Registered Mobile Number for OTP",
          "Online banking credentials / UPI / Debit card for payment"
        ],
        ml: [
          "വാഹന രജിസ്ട്രേഷൻ നമ്പർ",
          "ചേസിസ് നമ്പറിന്റെ അവസാന 5 അക്കങ്ങൾ",
          "ഒ.ടി.പി ലഭിക്കുന്നതിനുള്ള മൊബൈൽ നമ്പർ",
          "ഓൺലൈൻ പേയ്മെന്റ് സൗകര്യം (യു.പി.ഐ / കാർഡ് / നെറ്റ് ബാങ്കിംഗ്)"
        ]
      },
      additionalDocs: {
        en: [
          "Non-use intimation (Form G) acknowledgement if claiming tax exemption for non-operation period"
        ],
        ml: [
          "വാഹനം ഉപയോഗിക്കാതെ ഇട്ടിരുന്ന കാലയളവിലെ നികുതി ഒഴിവാക്കലിനായി ഫോം ജി (Form G) രേഖകൾ"
        ]
      },
      whereToApply: {
        en: "Parivahan Vahan Portal (vahan.parivahan.gov.in/vahanservice) -> Pay Your Tax.",
        ml: "പരിവഹൻ വാഹൻ പോർട്ടൽ (vahan.parivahan.gov.in/vahanservice) 'Pay Your Tax' വിഭാഗം."
      },
      mode: {
        en: "100% Online Payment",
        ml: "പൂർണ്ണമായും ഓൺലൈൻ"
      },
      steps: {
        en: [
          "Visit vahan.parivahan.gov.in/vahanservice and enter vehicle registration number.",
          "Select 'Pay Your Tax' under online services.",
          "Enter last 5 characters of Chassis Number and verify details using mobile OTP.",
          "System automatically calculates the tax schedule, overdue fine (if any), and total payable amount.",
          "Choose payment gateway and complete online transaction.",
          "Download and print the official digitally signed Tax Receipt (e-Receipt)."
        ],
        ml: [
          "vahan.parivahan.gov.in/vahanservice വെബ്സൈറ്റിൽ വാഹന നമ്പർ നൽകുക.",
          "'Pay Your Tax' ക്ലിക്ക് ചെയ്യുക.",
          "ചേസിസ് നമ്പറിന്റെ അവസാന 5 അക്കങ്ങൾ നൽകി ഒ.ടി.പി വഴി ലോഗിൻ ചെയ്യുക.",
          "നികുതി തുകയും പിഴയും (ബാധകമെങ്കിൽ) പരിശോധിച്ച് ഓൺലൈനായി പണം അടയ്ക്കുക.",
          "ഡിജിറ്റൽ ടാക്സ് രസീത് ഡൗൺലോഡ് ചെയ്ത് സൂക്ഷിക്കുക."
        ]
      },
      officialUrl: "https://vahan.parivahan.gov.in/vahanservice/",
      notes: {
        en: "Delayed payment of road tax attracts statutory monthly compounding interest and penalties under the Kerala MV Taxation Rules.",
        ml: "നികുതി അടയ്ക്കാൻ വൈകുന്ന ഓരോ മാസത്തിനും പിഴപ്പലിശ ഈടാക്കുന്നതാണ്."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "green-tax-payment",
      category: "travel",
      subCategory: "travel-mvd",
      icon: "🌿",
      name: {
        en: "Green Tax Payment",
        ml: "ഗ്രീൻ ടാക്സ് അടയ്ക്കൽ"
      },
      summary: {
        en: "Environmental tax clearance remitted to Kerala MVD for older non-transport vehicles (15+ years) and transport vehicles (10+ years).",
        ml: "15 വർഷം കഴിഞ്ഞ സ്വകാര്യ വാഹനങ്ങൾക്കും 10 വർഷം കഴിഞ്ഞ വാണിജ്യ വാഹനങ്ങൾക്കും പരിസ്ഥിതി സംരക്ഷണത്തിനായി ചുമത്തുന്ന ഗ്രീൻ ടാക്സ് അടയ്ക്കൽ."
      },
      whoNeeds: {
        en: "Owners of private vehicles completing 15 years from registration and commercial transport vehicles completing 10 years.",
        ml: "രജിസ്ട്രേഷൻ കാലാവധി 15 വർഷം കഴിഞ്ഞ സ്വകാര്യ വാഹനങ്ങളുടെയും 10 വർഷം കഴിഞ്ഞ വാണിജ്യ വാഹനങ്ങളുടെയും ഉടമകൾ."
      },
      eligibility: {
        en: "Aged motor vehicles operating in Kerala liable for environmental cess under Section 10A of the Kerala Motor Vehicles Taxation Act.",
        ml: "കേരള മോട്ടോർ വാഹന നികുതി നിയമപ്രകാരം നിർദ്ദിഷ്ട പ്രായപരിധി കഴിഞ്ഞ വാഹനങ്ങളുടെ ഉടമകൾക്ക്."
      },
      documents: {
        en: [
          "Vehicle Registration Number",
          "Chassis Number (last 5 digits)",
          "Registered Mobile Number for OTP",
          "Valid Pollution Under Control Certificate (PUCC)"
        ],
        ml: [
          "വാഹന രജിസ്ട്രേഷൻ നമ്പർ",
          "ചേസിസ് നമ്പറിന്റെ അവസാന 5 അക്കങ്ങൾ",
          "മൊബൈൽ നമ്പർ",
          "സാധുവായ പുക പരിശോധനാ സർട്ടിഫിക്കറ്റ് (PUCC)"
        ]
      },
      additionalDocs: {
        en: [],
        ml: []
      },
      whereToApply: {
        en: "Parivahan Vahan Portal (vahan.parivahan.gov.in/vahanservice) during tax payment or fitness renewal.",
        ml: "പരിവഹൻ വാഹൻ പോർട്ടൽ (vahan.parivahan.gov.in/vahanservice) വഴി."
      },
      mode: {
        en: "100% Online Payment",
        ml: "പൂർണ്ണമായും ഓൺലൈൻ"
      },
      steps: {
        en: [
          "Open Parivahan Vahan portal and input vehicle registration number.",
          "Proceed to 'Pay Your Tax' or 'Application for Fitness Certificate / RC Renewal'.",
          "The portal automatically assesses Green Tax liability based on the date of original vehicle registration.",
          "Verify the Green Tax assessment period (typically 5 years for private vehicles, periodic for transport).",
          "Pay the amount online using UPI, Net Banking, or Card.",
          "Download the official payment receipt showing Green Tax clearance endorsement."
        ],
        ml: [
          "പരിവഹൻ വാഹൻ പോർട്ടലിൽ വാഹന നമ്പർ നൽകി ലോഗിൻ ചെയ്യുക.",
          "'Pay Your Tax' അല്ലെങ്കിൽ ഫിറ്റ്‌നസ് പുതുക്കൽ വിഭാഗം തിരഞ്ഞെടുക്കുക.",
          "വാഹനത്തിന്റെ പഴക്കത്തിനനുസരിച്ച് സിസ്റ്റം ഗ്രീൻ ടാക്സ് തുക തിട്ടപ്പെടുത്തുന്നു.",
          "തുക പരിശോധിച്ച് ഓൺലൈനായി പണം അടയ്ക്കുക.",
          "ഗ്രീൻ ടാക്സ് അടച്ച രസീത് ഡൗൺലോഡ് ചെയ്ത് വാഹന രേഖകൾക്കൊപ്പം സൂക്ഷിക്കുക."
        ]
      },
      officialUrl: "https://vahan.parivahan.gov.in/vahanservice/",
      notes: {
        en: "Clearing Green Tax is mandatory before processing Fitness Renewal, RC Renewal, or Transfer of Ownership for aged vehicles.",
        ml: "പഴയ വാഹനങ്ങളുടെ ആർ.സി പുതുക്കൽ, ഫിറ്റ്‌നസ്, ഉടമസ്ഥാവകാശ മാറ്റം എന്നിവയ്ക്ക് ഗ്രീൻ ടാക്സ് അടച്ചിരിക്കണം."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "temporary-vehicle-permit",
      category: "travel",
      subCategory: "travel-mvd",
      icon: "📄",
      name: {
        en: "Temporary Vehicle Permit",
        ml: "താൽക്കാലിക വാഹനം പെർമിറ്റ്"
      },
      summary: {
        en: "Online authorization for commercial and transport vehicles to operate outside their regular permitted routes or across state boundaries for limited periods.",
        ml: "വാണിജ്യ വാഹനങ്ങൾക്ക് സ്ഥിരം പെർമിറ്റിന് പുറത്തുള്ള റൂട്ടുകളിലോ ഇതര സംസ്ഥാനങ്ങളിലോ താൽക്കാലികമായി സർവീസ് നടത്തുന്നതിന് നൽകുന്ന പെർമിറ്റ്."
      },
      whoNeeds: {
        en: "Operators of buses, tourist coaches, taxis, and goods carriers needing short-term transit for festivals, excursions, tours, or contract carriage.",
        ml: "വിവാഹ ആവശ്യങ്ങൾ, വിനോദയാത്രകൾ, തീർത്ഥാടനങ്ങൾ, പ്രത്യേക ചരക്കുനീക്കം എന്നിവയ്ക്കായി വാഹനം കൊണ്ടുപോകുന്ന ഉടമകൾ."
      },
      eligibility: {
        en: "Transport vehicles possessing a valid primary permit, fitness certificate, road tax clearance, and active insurance policy.",
        ml: "സാധുവായ സ്ഥിരം പെർമിറ്റും ഫിറ്റ്‌നസും ഇൻഷുറൻസും നികുതി ക്ലിയറൻസും ഉള്ള വാണിജ്യ വാഹനങ്ങൾക്ക്."
      },
      documents: {
        en: [
          "Registration Certificate (RC) of the vehicle",
          "Primary Permanent Permit details",
          "Valid Fitness Certificate (FC)",
          "Valid Comprehensive / Third Party Motor Insurance",
          "Valid Pollution Under Control Certificate (PUCC)"
        ],
        ml: [
          "വാഹനത്തിന്റെ ആർ.സി",
          "നിലവിലുള്ള സ്ഥിരം പെർമിറ്റ് വിവരങ്ങൾ",
          "സാധുവായ ഫിറ്റ്‌നസ് സർട്ടിഫിക്കറ്റ്",
          "ഇൻഷുറൻസ് പോളിസി",
          "പുക പരിശോധനാ സർട്ടിഫിക്കറ്റ് (PUCC)"
        ]
      },
      additionalDocs: {
        en: [
          "Passenger manifest / tour party itinerary list (for passenger transport contract carriages)"
        ],
        ml: [
          "യാത്രക്കാരുടെ വിവരങ്ങൾ അടങ്ങിയ ലിസ്റ്റ് (ടൂറിസ്റ്റ് വാഹനങ്ങൾക്ക്)"
        ]
      },
      whereToApply: {
        en: "Parivahan Vahan Portal (vahan.parivahan.gov.in/vahanservice) -> Permit Services -> Apply for Temporary Permit.",
        ml: "പരിവഹൻ വാഹൻ പോർട്ടൽ (vahan.parivahan.gov.in/vahanservice) പെർമിറ്റ് സർവീസസ് വിഭാഗം."
      },
      mode: {
        en: "100% Online Application & Instant Download",
        ml: "പൂർണ്ണമായും ഓൺലൈൻ"
      },
      steps: {
        en: [
          "Log in to vahan.parivahan.gov.in/vahanservice with vehicle registration number.",
          "Navigate to 'Permit Services' and select 'Apply for Temporary Permit'.",
          "Specify the purpose of temporary transit, route description, departure date, and return date.",
          "Verify passenger capacity or gross vehicle weight.",
          "System calculates the permit fee and temporary road tax based on days requested.",
          "Pay online via payment gateway and immediately download/print the digitally approved Temporary Permit."
        ],
        ml: [
          "പരിവഹൻ വാഹൻ പോർട്ടലിൽ വാഹന നമ്പർ നൽകുക.",
          "'Permit Services' -> 'Apply for Temporary Permit' തിരഞ്ഞെടുക്കുക.",
          "യാത്രയുടെ ഉദ്ദേശ്യം, റൂട്ട്, യാത്ര തുടങ്ങുന്നതും അവസാനിക്കുന്നതുമായ തീയതികൾ എന്നിവ നൽകുക.",
          "നികുതിയും പെർമിറ്റ് ഫീസും പരിശോധിച്ച് ഓൺലൈനായി അടയ്ക്കുക.",
          "ഡിജിറ്റലായി അനുവദിച്ച താൽക്കാലിക പെർമിറ്റ് ഉടനടി പ്രിന്റ് എടുക്കാം."
        ]
      },
      officialUrl: "https://vahan.parivahan.gov.in/vahanservice/",
      notes: {
        en: "Temporary permits can be granted for a minimum of 7 days up to a maximum period of 4 months as governed under Section 87 of the Motor Vehicles Act.",
        ml: "മോട്ടോർ വാഹന നിയമം സെക്ഷൻ 87 പ്രകാരം താൽക്കാലിക പെർമിറ്റ് പരമാവധി 4 മാസത്തേക്ക് വരെ അനുവദിക്കാം."
      },
      lastVerified: "September 2026",
      verified: true
    },
    {
      id: "fancy-number-booking",
      category: "travel",
      subCategory: "travel-mvd",
      icon: "🔢",
      name: {
        en: "Fancy / Choice Registration Number Booking",
        ml: "ഫാൻസി / ചോയ്സ് നമ്പർ ബുക്കിംഗ്"
      },
      summary: {
        en: "Online portal to reserve preferred, fancy, or choice vehicle registration numbers through direct booking or e-auction in Kerala RTOs.",
        ml: "പുതിയ വാഹനങ്ങൾക്ക് ഇഷ്ടമുള്ള നമ്പറോ ഫാൻസി നമ്പറോ ഇ-ലേലം വഴിയോ നേരിട്ടോ റിസർവ് ചെയ്യുന്നതിനുള്ള സംവിധാനം."
      },
      whoNeeds: {
        en: "New vehicle owners and buyers desiring customized, lucky, or premium registration numbers for their motor vehicles.",
        ml: "പുതിയ വാഹനം വാങ്ങിയവരും ഇഷ്ടപ്പെട്ട രജിസ്ട്രേഷൻ നമ്പർ വേണമെന്ന് ആഗ്രഹിക്കുന്നവരും."
      },
      eligibility: {
        en: "Citizens holding a valid Temporary Registration (TR) or Sale Certificate (Form 21) from an authorized automobile dealer in Kerala.",
        ml: "കേരളത്തിൽ പുതിയ വാഹനം വാങ്ങി താൽക്കാലിക രജിസ്ട്രേഷൻ (TR) അല്ലെങ്കിൽ ഫോം 21 ലഭിച്ച ഏതൊരു വ്യക്തിക്കും."
      },
      documents: {
        en: [
          "Temporary Registration (TR) Number or Sale Certificate (Form 21)",
          "Applicant's Aadhaar Card / Identity proof matching vehicle purchase invoice",
          "Active Mobile Number and Email ID for auction credentials",
          "Online banking credentials for fee deposit and bidding"
        ],
        ml: [
          "വാഹനത്തിന്റെ താൽക്കാലിക രജിസ്ട്രേഷൻ നമ്പർ (TR) അല്ലെങ്കിൽ ഫോം 21",
          "വാഹനം വാങ്ങിയ ആളുടെ ആധാർ / തിരിച്ചറിയൽ രേഖ",
          "രജിസ്ട്രേഷനായി മൊബൈൽ നമ്പറും ഇമെയിൽ വിലാസവും",
          "ഓൺലൈൻ പേയ്മെന്റ് സൗകര്യം"
        ]
      },
      additionalDocs: {
        en: [
          "Dealer Sale Invoice and Chassis number details"
        ],
        ml: [
          "വാഹനം വാങ്ങിയ ബില്ലും ചേസിസ് നമ്പർ വിവരങ്ങളും"
        ]
      },
      whereToApply: {
        en: "Official Parivahan Fancy Number Portal (fancy.parivahan.gov.in/fancy).",
        ml: "ഔദ്യോഗിക പരിവഹൻ ഫാൻസി നമ്പർ പോർട്ടൽ (fancy.parivahan.gov.in/fancy)."
      },
      mode: {
        en: "Online Reservation & e-Auction",
        ml: "ഓൺലൈൻ റിസർവേഷൻ & ഇ-ലേലം"
      },
      steps: {
        en: [
          "Register on fancy.parivahan.gov.in and select Kerala and your jurisdictional RTO.",
          "Check the list of available numbers in the current running series or notified premium numbers.",
          "Reserve your choice number by paying the prescribed registration fee and advance booking fee.",
          "If multiple applicants apply for the same number, participate in the online e-Auction bidding process during the scheduled bidding window.",
          "Upon winning the auction or direct allotment, pay balance amount and download Allotment Letter.",
          "Present the Allotment Letter to the RTO or dealer during permanent registration."
        ],
        ml: [
          "fancy.parivahan.gov.in പോർട്ടലിൽ അക്കൗണ്ട് ഉണ്ടാക്കി ലോഗിൻ ചെയ്യുക.",
          "നിങ്ങളുടെ ആർ.ടി.ഒ തിരഞ്ഞെടുത്ത് ലഭ്യമായ നമ്പറുകളുടെ ലിസ്റ്റ് പരിശോധിക്കുക.",
          "ഇഷ്ടപ്പെട്ട നമ്പർ തിരഞ്ഞെടുത്ത് നിശ്ചിത ഫീസ് ഓൺലൈനായി അടച്ച് ബുക്ക് ചെയ്യുക.",
          "ഒന്നിൽക്കൂടുതൽ ആളുകൾ ഒരേ നമ്പർ ആവശ്യപ്പെട്ടാൽ ഇ-ലേലത്തിൽ പങ്കെടുക്കുക.",
          "നമ്പർ ലഭിച്ച ശേഷം അലോട്ട്മെന്റ് ലെറ്റർ ഡൗൺലോഡ് ചെയ്യുക.",
          "വാഹനത്തിന്റെ സ്ഥിരം രജിസ്ട്രേഷൻ സമയത്ത് ഈ കത്ത് ഹാജരാക്കുക."
        ]
      },
      officialUrl: "https://fancy.parivahan.gov.in/fancy/",
      notes: {
        en: "Reserved numbers must be registered against the vehicle within the validity period stated on the allotment letter, or the number will lapse without refund.",
        ml: "അലോട്ട്മെന്റ് ലഭിച്ച് നിശ്ചിത സമയപരിധിക്കുള്ളിൽ തന്നെ വാഹനം രജിസ്റ്റർ ചെയ്യണം; അല്ലാത്തപക്ഷം നമ്പർ നഷ്ടപ്പെടും."
      },
      lastVerified: "September 2026",
      verified: true
    }
  ];

  if (window.SevaRegistry && typeof window.SevaRegistry.register === "function") {
    window.SevaRegistry.register(data);
  } else {
    console.error("SevaRegistry not found when loading cat-travel.js");
  }
})();
