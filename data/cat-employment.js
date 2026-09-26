/**
 * SevaCheck Kerala - Employment & Welfare Services (cat-employment.js)
 * Services #101 to #112
 * 
 * Auto-registered into window.SevaRegistry
 */

(function () {
  "use strict";

  window.SevaRegistry = window.SevaRegistry || {};

  var data = [
    {
      id: "employment-exchange-registration",
      category: "employment",
      icon: "💼",
      name: {
        en: "Employment Exchange Registration",
        ml: "എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ച് രജിസ്ട്രേഷൻ"
      },
      summary: {
        en: "Online registration of jobseekers with Kerala Employment Exchanges and creation of employment seniority profile.",
        ml: "തൊഴിലന്വേഷകർക്ക് കേരള എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചുകളിൽ പേര് രജിസ്റ്റർ ചെയ്യാനും സീനിയോറിറ്റി നേടാനുമുള്ള ഓൺലൈൻ സേവനം."
      },
      description: {
        en: "Registration of Jobseekers in Employment Exchanges (e-Employment Kerala) enables citizens to register educational qualifications, secure employment seniority, access public sector and temporary government vacancies, and qualify for state unemployment allowances and self-employment credit schemes.",
        ml: "കേരളത്തിലെ എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചുകൾ വഴി തൊഴിലന്വേഷകർക്ക് വിദ്യാഭ്യാസ യോഗ്യതകൾ രജിസ്റ്റർ ചെയ്യാനും, ഔദ്യോഗിക സീനിയോറിറ്റി നേടാനും, സർക്കാർ/അർദ്ധസർക്കാർ താല്ക്കാലിക ഒഴിവുകളിലേക്ക് പരിഗണിക്കപ്പെടാനും, തൊഴിൽരഹിത വേതനം ഉൾപ്പെടെയുള്ള ആനുകൂല്യങ്ങൾ നേടാനുമുള്ള ഔദ്യോഗിക പ്ലാറ്റ്‌ഫോമാണിത്."
      },
      eligibility: {
        en: [
          "Permanent resident of Kerala",
          "Minimum age of 14 years completed",
          "Must register only in the Employment Exchange having jurisdiction over candidate's residential address",
          "Must possess basic literacy or recognized educational qualifications"
        ],
        ml: [
          "കേരളത്തിലെ സ്ഥിരതാമസക്കാരനായിരിക്കണം",
          "കുറഞ്ഞത് 14 വയസ്സ് പൂർത്തിയായിരിക്കണം",
          "താമസപരിധിയിലുള്ള എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ മാത്രമേ രജിസ്റ്റർ ചെയ്യാൻ സാധിക്കൂ",
          "അടിസ്ഥാന സാക്ഷരതയോ അംഗീകൃത വിദ്യാഭ്യാസ യോഗ്യതയോ ഉണ്ടായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Accepted official photo identity proof",
          "SSLC Certificate / Birth Certificate (Proof of Date of Birth)",
          "Educational qualification certificates and mark lists (Plus Two, Degree, Diploma, PG, etc.)",
          "Proof of Residence / Nativity (Ration Card / Voter ID / Residential Certificate)",
          "Caste / Community Certificate (if claiming reservation benefits)",
          "Experience certificates or technical certificates (if applicable)"
        ],
        ml: [
          "അംഗീകൃത തിരിച്ചറിയൽ രേഖ",
          "എസ്.എസ്.എൽ.സി സർട്ടിഫിക്കറ്റ് / ജനന സർട്ടിഫിക്കറ്റ് (ജനനത്തീയതി തെളിയിക്കാൻ)",
          "വിദ്യാഭ്യാസ യോഗ്യതാ സർട്ടിഫിക്കറ്റുകളും മാർക്ക് ലിസ്റ്റുകളും (പ്ലസ് ടു, ഡിഗ്രി, ഡിപ്ലോമ മുതലായവ)",
          "താമസരേഖ / നേറ്റിവിറ്റി തെളിവ് (റേഷൻ കാർഡ് / വോട്ടർ ഐഡി)",
          "ജാതി / കമ്മ്യൂണിറ്റി സർട്ടിഫിക്കറ്റ് (സംവരണത്തിന് അർഹതയുണ്ടെങ്കിൽ)",
          "പ്രവൃത്തിപരിചയ സർട്ടിഫിക്കറ്റുകൾ / സാങ്കേതിക യോഗ്യതാരേഖകൾ (ബാധകമെങ്കിൽ)"
        ]
      },
      howToApply: {
        en: "Register online via e-Employment portal, fill in personal and educational details, and physically verify original certificates at the local Employment Exchange within 90 days.",
        ml: "ഇ-എംപ്ലോയ്മെന്റ് പോർട്ടലിൽ ഓൺലൈനായി പ്രൊഫൈൽ രജിസ്റ്റർ ചെയ്ത ശേഷം 90 ദിവസത്തിനകം അസ്സൽ സർട്ടിഫിക്കറ്റുകൾ സഹിതം നേരിട്ട് എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ ഹാജരായി വെരിഫിക്കേഷൻ പൂർത്തിയാക്കുക."
      },
      steps: {
        en: [
          "Visit the official e-Employment portal (eemployment.kerala.gov.in) and click 'Jobseeker Registration'",
          "Enter basic personal information, address, and mobile number to generate login credentials",
          "Log in and accurately enter educational qualifications, marks, and caste/special reservations",
          "Submit the online registration and download/print the temporary registration receipt",
          "Visit the jurisdictional Employment Exchange within 90 days with all original certificates for physical verification",
          "Receive the verified Employment Registration Card (Form X-10) with confirmed registration number and seniority date"
        ],
        ml: [
          "ഔദ്യോഗിക ഇ-എംപ്ലോയ്മെന്റ് പോർട്ടൽ (eemployment.kerala.gov.in) സന്ദർശിച്ച് 'Jobseeker Registration' തിരഞ്ഞെടുക്കുക",
          "വ്യക്തിഗത വിവരങ്ങൾ, വിലാസം, മൊബൈൽ നമ്പർ എന്നിവ നൽകി ലോഗിൻ വിവരങ്ങൾ സൃഷ്ടിക്കുക",
          "വിദ്യാഭ്യാസ യോഗ്യതകൾ, മാർക്കുകൾ, സംവരണ വിവരങ്ങൾ എന്നിവ കൃത്യമായി രേഖപ്പെടുത്തുക",
          "ഓൺലൈൻ അപേക്ഷ സമർപ്പിച്ച് താല്ക്കാലിക രജിസ്ട്രേഷൻ രസീത് ഡൗൺലോഡ് ചെയ്ത് സൂക്ഷിക്കുക",
          "90 ദിവസത്തിനകം എല്ലാ അസ്സൽ സർട്ടിഫിക്കറ്റുകളും സഹിതം ബന്ധപ്പെട്ട എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ നേരിട്ടെത്തി വെരിഫിക്കേഷൻ നടത്തുക",
          "വെരിഫിക്കേഷൻ പൂർത്തിയാക്കി സ്ഥിര രജിസ്ട്രേഷൻ നമ്പറും സീനിയോറിറ്റിയും അടങ്ങിയ എംപ്ലോയ്മെന്റ് ഐഡി കാർഡ് (Form X-10) കൈപ്പറ്റുക"
        ]
      },
      fees: {
        en: "Free (₹0)",
        ml: "സൗജന്യം (₹0)"
      },
      validity: {
        en: "Requires periodic online renewal once every 3 years during the notified renewal month or grace period.",
        ml: "3 വർഷത്തിലൊരിക്കൽ നിശ്ചിത മാസത്തിലോ അനുവദിക്കപ്പെട്ട ഗ്രേസ് പീരിയഡിലോ ഓൺലൈനായി പുതുക്കേണ്ടതാണ്."
      },
      officialUrl: "https://eemployment.kerala.gov.in/",
      importantNotes: {
        en: [
          "Physical verification must strictly be completed within 90 days of online profile submission. Seniority is backdated to the online submission date only if verified within this period.",
          "Maintaining multiple registrations in different Employment Exchanges is strictly prohibited under law.",
          "Ensure all higher qualifications gained later are added to the profile within the specified departmental timeframe."
        ],
        ml: [
          "ഓൺലൈൻ രജിസ്ട്രേഷൻ നടത്തി 90 ദിവസത്തിനകം നിർബന്ധമായും എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ നേരിട്ടെത്തി വെരിഫിക്കേഷൻ പൂർത്തിയാക്കണം. എങ്കിൽ മാത്രമേ ഓൺലൈൻ രജിസ്ട്രേഷൻ തീയതി മുതൽ സീനിയോറിറ്റി ലഭിക്കൂ.",
          "ഒന്നിലധികം എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചുകളിൽ ഒരേസമയം രജിസ്ട്രേഷൻ നിലനിർത്തുന്നത് നിയമവിരുദ്ധമാണ്.",
          "തുടർന്ന് നേടുന്ന പുതിയ യോഗ്യതകൾ അതാത് സമയങ്ങളിൽ കൃത്യമായി പ്രൊഫൈലിൽ ചേർക്കാൻ ശ്രദ്ധിക്കുക."
        ]
      }
    },
    {
      id: "employment-seniority-restoration",
      category: "employment",
      icon: "⏳",
      name: {
        en: "Employment Seniority Restoration / Amnesty",
        ml: "എംപ്ലോയ്മെന്റ് സീനിയോറിറ്റി പുനഃസ്ഥാപനം (ആംനസ്റ്റി സ്കീം)"
      },
      summary: {
        en: "Periodic restoration of lapsed Employment Exchange registration seniority under officially notified Government Amnesty Orders.",
        ml: "കൃത്യസമയത്ത് പുതുക്കാതെ റദ്ദായ എംപ്ലോയ്മെന്റ് സീനിയോറിറ്റി, സർക്കാർ പ്രത്യേകമായി പ്രഖ്യാപിക്കുന്ന ആംനസ്റ്റി ഉത്തരവിലൂടെ പുനഃസ്ഥാപിക്കാനുള്ള സേവനം."
      },
      description: {
        en: "Special Seniority Revival / Lapsed Registration Restoration is a notification-dependent administrative service. It is NOT continuously available as a regular online transaction, but becomes active only when the Government of Kerala issues an official Gazette Notification or Government Order (such as G.O.(P) No.43/2022/LBR and subsequent extension orders) granting a special amnesty window to restore lost seniority.",
        ml: "നിശ്ചിത സമയപരിധിക്കുള്ളിൽ രജിസ്ട്രേഷൻ പുതുക്കാൻ സാധിക്കാതെ സീനിയോറിറ്റി നഷ്ടപ്പെട്ടവർക്ക്, സർക്കാർ കാലാനുസൃതമായി പുറപ്പെടുവിക്കുന്ന പ്രത്യേക ഉത്തരവുകളിലൂടെ (ആംനസ്റ്റി) സീനിയോറിറ്റി പുനഃസ്ഥാപിച്ചു നൽകുന്ന സേവനമാണിത്. ഇത് എല്ലാ സമയത്തും ലഭ്യമാകുന്ന ഒരു സ്ഥിരം സേവനമല്ല; സർക്കാർ പ്രത്യേക ഉത്തരവിലൂടെ അനുവദിക്കുന്ന സമയപരിധിയിൽ മാത്രമേ അപേക്ഷിക്കാൻ സാധിക്കൂ."
      },
      eligibility: {
        en: [
          "Jobseekers whose live registration was cancelled solely due to failure of timely renewal",
          "Must fall within the cut-off dates and criteria stipulated in the active Government Amnesty Order",
          "Must hold a previously valid Kerala Employment Exchange registration"
        ],
        ml: [
          "കൃത്യസമയത്ത് പുതുക്കാത്തതുകൊണ്ട് മാത്രം രജിസ്ട്രേഷൻ റദ്ദായിപ്പോയ ഉദ്യോഗാർത്ഥികൾ",
          "സർക്കാർ പുറപ്പെടുവിച്ച പ്രാബല്യത്തിലുള്ള ആംനസ്റ്റി ഉത്തരവിലെ നിബന്ധനകൾക്കും തീയതികൾക്കും ഉള്ളിൽ വരുന്നവർ",
          "നേരത്തെ കേരളത്തിൽ സാധുവായ എംപ്ലോയ്മെന്റ് രജിസ്ട്രേഷൻ ഉണ്ടായിരുന്നവർ"
        ]
      },
      documents: {
        en: [
          "Original Employment Registration Card (Form X-10) showing lapsed registration number",
          "Accepted government photo identity card",
          "Written application / representation as prescribed in the relevant Government Order",
          "Educational certificates (if verification update is requested)"
        ],
        ml: [
          "റദ്ദായ രജിസ്ട്രേഷൻ നമ്പർ വ്യക്തമാക്കുന്ന മുൻപത്തെ ഒറിജിനൽ എംപ്ലോയ്മെന്റ് കാർഡ് (Form X-10)",
          "അംഗീകൃത ഫോട്ടോ പതിച്ച തിരിച്ചറിയൽ കാർഡ്",
          "സർക്കാർ ഉത്തരവിൽ നിർദ്ദേശിച്ചിട്ടുള്ള മാതൃകയിലുള്ള അപേക്ഷ / നിവേദനം",
          "വിദ്യാഭ്യാസ സർട്ടിഫിക്കറ്റുകൾ (യോഗ്യതകളിൽ മാറ്റം വരുത്തുന്നുണ്ടെങ്കിൽ)"
        ]
      },
      howToApply: {
        en: "Apply online through the candidate login on the e-Employment portal during the officially notified amnesty period, or submit a written petition directly to the Employment Officer if specified by the Government Order.",
        ml: "സർക്കാർ ആംനസ്റ്റി കാലയളവ് ഔദ്യോഗികമായി പ്രഖ്യാപിക്കുമ്പോൾ മാത്രം ഇ-എംപ്ലോയ്മെന്റ് പോർട്ടൽ വഴി ഓൺലൈനായോ, നിർദ്ദേശിക്കപ്പെട്ട എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ നേരിട്ടോ അപേക്ഷ സമർപ്പിക്കുക."
      },
      steps: {
        en: [
          "Monitor official notifications to verify that a Government Order for Seniority Restoration / Amnesty is currently active",
          "Log in to the e-Employment portal using your registered credentials during the active amnesty window",
          "Select the 'Seniority Restoration / Amnesty Request' option",
          "Verify your personal details and submit the restoration request citing the relevant Government Order",
          "If instructed, submit the original X-10 registration card at the Employment Exchange for endorsement",
          "Receive confirmation of seniority restoration upon departmental scrutiny"
        ],
        ml: [
          "സർക്കാർ ആംനസ്റ്റി ഉത്തരവ് പ്രഖ്യാപിച്ചിട്ടുണ്ടെന്നും നിലവിൽ അപേക്ഷിക്കാനുള്ള സമയപരിധി ഉണ്ടെന്നും ഉറപ്പുവരുത്തുക",
          "അനുവദിക്കപ്പെട്ട സമയത്ത് ഇ-എംപ്ലോയ്മെന്റ് പോർട്ടലിൽ സ്വന്തം യൂസർ ഐഡിയും പാസ്‌വേഡും ഉപയോഗിച്ച് ലോഗിൻ ചെയ്യുക",
          "'Seniority Restoration / Amnesty Request' ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക",
          "വിവരങ്ങൾ പരിശോധിച്ചു സർക്കാർ ഉത്തരവ് പ്രകാരമുള്ള അപേക്ഷ സമർപ്പിക്കുക",
          "നിർദ്ദേശമുണ്ടെങ്കിൽ പഴയ X-10 രജിസ്ട്രേഷൻ കാർഡ് എംപ്ലോയ്മെന്റ് ഓഫീസിൽ ഹാജരാക്കി പരിശോധന പൂർത്തിയാക്കുക",
          "പരിശോധനയ്ക്ക് ശേഷം നിങ്ങളുടെ പഴയ സീനിയോറിറ്റി പുനഃസ്ഥാപിച്ചു ലഭിക്കുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0)",
        ml: "സൗജന്യം (₹0)"
      },
      validity: {
        en: "Restores previous seniority. Standard registration renewal rules apply thereafter.",
        ml: "മുൻപത്തെ സീനിയോറിറ്റി തിരികെ ലഭിക്കും. തുടർന്ന് സാധാരണ പോലെ കൃത്യസമയത്ത് പുതുക്കേണ്ടതാണ്."
      },
      officialUrl: "https://employment.kerala.gov.in/",
      importantNotes: {
        en: [
          "Notification-Dependent Service: This service is NOT an always-open application. Applications can only be accepted when an official Government Amnesty Order is active.",
          "Normal renewal allows a grace period of 3 months from the due renewal month. Amnesty schemes are exceptional measures notified by the cabinet for extended lapses.",
          "Check official press releases and the Employment Directorate portal (employment.kerala.gov.in) for active amnesty announcements."
        ],
        ml: [
          "പ്രത്യേക അറിയിപ്പ്: ഇതൊരു സ്ഥിരം സേവനമല്ല. സർക്കാർ ഔദ്യോഗികമായി ആംനസ്റ്റി പ്രഖ്യാപിച്ചു ഉത്തരവിറക്കുമ്പോൾ മാത്രമേ അപേക്ഷിക്കാൻ സാധിക്കൂ.",
          "സാധാരണ പുതുക്കലിന് നിശ്ചിത മാസം കഴിഞ്ഞ് 3 മാസം വരെ ഗ്രേസ് പീരിയഡ് ലഭിക്കും. അതിനുശേഷവും പുതുക്കാത്തവർക്കാണ് സർക്കാർ പ്രത്യേക ഉത്തരവിലൂടെ ആംനസ്റ്റി അനുവദിക്കുന്നത്.",
          "എംപ്ലോയ്മെന്റ് വകുപ്പിന്റെ ഔദ്യോഗിക വെബ്സൈറ്റിലെ (employment.kerala.gov.in) അറിയിപ്പുകൾ ശ്രദ്ധിക്കുക."
        ]
      }
    },
    {
      id: "unemployment-allowance-kerala",
      category: "employment",
      icon: "🤝",
      name: {
        en: "Unemployment Assistance",
        ml: "തൊഴിൽരഹിത വേതനം"
      },
      summary: {
        en: "Monthly state financial assistance of ₹120 for long-term registered unemployed youth disbursed through Local Self Government bodies.",
        ml: "എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ 3 വർഷമായി പേര് രജിസ്റ്റർ ചെയ്ത് കാത്തിരിക്കുന്ന അർഹരായ ഉദ്യോഗാർത്ഥികൾക്ക് തദ്ദേശസ്ഥാപനങ്ങൾ വഴി നൽകുന്ന പ്രതിമാസ ധനസഹായം."
      },
      description: {
        en: "The Kerala Unemployment Assistance Scheme provides a monthly state allowance of ₹120 to eligible long-term unemployed jobseekers on the live register of Employment Exchanges. Applications are scrutinized and disbursed through the concerned Grama Panchayat, Municipality, or Municipal Corporation.",
        ml: "കേരള എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചുകളിൽ 3 വർഷത്തിലധികമായി പേര് രജിസ്റ്റർ ചെയ്തിട്ടും ജോലി ലഭിക്കാത്ത നിർദ്ധനരായ തൊഴിലന്വേഷകർക്ക് സർക്കാർ പ്രതിമാസം ₹120 രൂപ വീതം ധനസഹായം നൽകുന്ന പദ്ധതിയാണിത്. അതാത് ഗ്രാമപഞ്ചായത്ത്, മുനിസിപ്പാലിറ്റി, കോർപ്പറേഷൻ എന്നിവ വഴിയാണ് ഇതിന്റെ നടപടികളും വിതരണവും നടക്കുന്നത്."
      },
      eligibility: {
        en: [
          "Age between 18 and 45 years",
          "Must maintain continuous live registration in Employment Exchange for not less than 3 years",
          "Minimum educational qualification: Passed SSLC or equivalent",
          "Annual family income must not exceed ₹1,00,000",
          "Must be fully unemployed (not engaged in full-time/part-time paid employment or self-employment)",
          "Must not be enrolled as a regular student in any educational institution"
        ],
        ml: [
          "പ്രായം 18 നും 45 നും ഇടയിലായിരിക്കണം",
          "എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ തുടർച്ചയായി കുറഞ്ഞത് 3 വർഷത്തെ ലൈവ് രജിസ്ട്രേഷൻ ഉണ്ടായിരിക്കണം",
          "കുറഞ്ഞ വിദ്യാഭ്യാസ യോഗ്യത: എസ്.എസ്.എൽ.സി ജയിച്ചിരിക്കണം",
          "കുടുംബ വാർഷിക വരുമാനം ₹1,00,000-ൽ കവിയരുത്",
          "പൂർണ്ണമായും തൊഴിൽരഹിതനായിരിക്കണം (സ്ഥിരമായോ താല്ക്കാലികമായോ വരുമാനമുള്ള ജോലി ഉണ്ടാകരുത്)",
          "റഗുലർ വിദ്യാർത്ഥിയായി പഠിക്കുന്ന ആളാകരുത്"
        ]
      },
      documents: {
        en: [
          "Employment Registration Card (Form X-10) showing 3+ years continuous seniority",
          "Income Certificate issued by the competent Village Officer (showing family income ≤ ₹1,00,000)",
          "Proof of educational qualification (SSLC Certificate)",
          "Proof of Residence / Nativity Certificate",
          "Accepted photo identity proof",
          "Bank passbook copy (applicant's single bank account with IFSC)",
          "Non-employment and non-student self-declaration"
        ],
        ml: [
          "3 വർഷത്തെ തുടർച്ചയായ രജിസ്ട്രേഷൻ തെളിയിക്കുന്ന എംപ്ലോയ്മെന്റ് കാർഡ് (Form X-10)",
          "വില്ലേജ് ഓഫീസറിൽ നിന്നുള്ള വരുമാന സർട്ടിഫിക്കറ്റ് (വാർഷിക വരുമാനം ₹1,00,000-ൽ താഴെ)",
          "വിദ്യാഭ്യാസ യോഗ്യത തെളിയിക്കുന്ന എസ്.എസ്.എൽ.സി സർട്ടിഫിക്കറ്റ്",
          "താമസരേഖ / നേറ്റിവിറ്റി സർട്ടിഫിക്കറ്റ്",
          "അംഗീകൃത തിരിച്ചറിയൽ രേഖ",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (അപേക്ഷകന്റെ പേരിലുള്ള അക്കൗണ്ട് നമ്പറും IFSC കോഡും)",
          "ജോലിയില്ലെന്നും റഗുലർ വിദ്യാർത്ഥിയല്ലെന്നും സാക്ഷ്യപ്പെടുത്തുന്ന സത്യവാങ്മൂലം"
        ]
      },
      howToApply: {
        en: "Submit the prescribed application form along with verified Employment Exchange credentials and Income Certificate to the Secretary of the concerned Grama Panchayat, Municipality, or Municipal Corporation.",
        ml: "പൂരിപ്പിച്ച അപേക്ഷാഫോറവും ആവശ്യമായ സർട്ടിഫിക്കറ്റുകളും സഹിതം അതാത് ഗ്രാമപഞ്ചായത്ത് / മുനിസിപ്പാലിറ്റി / കോർപ്പറേഷൻ സെക്രട്ടറിക്ക് സമർപ്പിക്കുക."
      },
      steps: {
        en: [
          "Obtain the Unemployment Assistance application form from your local Grama Panchayat / Municipality office or Employment Exchange",
          "Attach Income Certificate from the Village Officer and copy of Employment Exchange registration card",
          "Submit the application to the Secretary of your local self-government body",
          "Application is forwarded to the Employment Exchange for verification of live registration and 3-year seniority",
          "Upon local body sanction, the monthly allowance is credited directly to the beneficiary's bank account"
        ],
        ml: [
          "തൊഴിൽരഹിത വേതനത്തിനായുള്ള അപേക്ഷാഫോറം തദ്ദേശസ്ഥാപനത്തിൽ നിന്നോ എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ നിന്നോ കൈപ്പറ്റുക",
          "വില്ലേജ് ഓഫീസിൽ നിന്നുള്ള വരുമാന സർട്ടിഫിക്കറ്റും എംപ്ലോയ്മെന്റ് കാർഡിന്റെ പകർപ്പും ഒപ്പം വെക്കുക",
          "പൂരിപ്പിച്ച അപേക്ഷ നിങ്ങളുടെ ഗ്രാമപഞ്ചായത്ത് / നഗരസഭ സെക്രട്ടറിക്ക് സമർപ്പിക്കുക",
          "രജിസ്ട്രേഷൻ വിവരങ്ങളും 3 വർഷത്തെ സീനിയോറിറ്റിയും എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ച് പരിശോധിച്ച് ഉറപ്പുവരുത്തുന്നു",
          "അംഗീകാരം ലഭിച്ച ശേഷം പ്രതിമാസ വേതനം ബാങ്ക് അക്കൗണ്ടിലേക്ക് നേരിട്ടെത്തുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0)",
        ml: "സൗജന്യം (₹0)"
      },
      validity: {
        en: "Annual submission of non-employment and life declaration is required to continue receiving the assistance.",
        ml: "വേതനം തുടർന്നും ലഭിക്കുന്നതിന് എല്ലാ വർഷവും ജോലി ലഭിച്ചിട്ടില്ലെന്ന ഡിക്ലറേഷൻ തദ്ദേശസ്ഥാപനത്തിൽ നൽകണം."
      },
      officialUrl: "https://employment.kerala.gov.in/en/unemployment-assistance-scheme/",
      importantNotes: {
        en: [
          "Standard financial assistance is ₹120 per month.",
          "Application routing is strictly through the concerned Grama Panchayat / Municipality / Municipal Corporation Secretary.",
          "Assistance automatically terminates if the recipient secures employment, enrols in regular higher studies, or attains 45 years of age.",
          "Availing self-employment loans (like KESRU) will disqualify the candidate from receiving unemployment dole."
        ],
        ml: [
          "പ്രതിമാസ സഹായധനം കൃത്യം ₹120 രൂപയാണ്.",
          "അപേക്ഷ സമർപ്പിക്കേണ്ടത് തദ്ദേശ സ്വയംഭരണ സ്ഥാപനത്തിലെ (പഞ്ചായത്ത് / നഗരസഭ / കോർപ്പറേഷൻ) സെക്രട്ടറി മുൻപാകെയാണ്.",
          "ജോലി ലഭിക്കുകയോ, റഗുലർ പഠനത്തിൽ ചേരുകയോ, 45 വയസ്സ് പൂർത്തിയാകുകയോ ചെയ്താൽ ഈ ആനുകൂല്യം റദ്ദാകും.",
          "KESRU തുടങ്ങിയ സ്വയംതൊഴിൽ വായ്പകൾ ലഭിക്കുന്നവർക്ക് പിന്നീട് തൊഴിൽരഹിത വേതനം ലഭിക്കില്ല."
        ]
      }
    },
    {
      id: "kesru-self-employment-loan",
      category: "employment",
      icon: "📈",
      name: {
        en: "KESRU Self-Employment Loan",
        ml: "കെസ്റു സ്വയംതൊഴിൽ വായ്പ (KESRU)"
      },
      summary: {
        en: "Bank-linked self-employment loan up to ₹1,00,000 with 20% government capital subsidy (up to ₹20,000) for registered unemployed jobseekers.",
        ml: "എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ പേര് രജിസ്റ്റർ ചെയ്തിട്ടുള്ളവർക്ക് പരമാവധി ₹1,00,000 രൂപ വരെയുള്ള സ്വയംതൊഴിൽ വായ്പയും 20% സർക്കാർ സബ്സിഡിയും."
      },
      description: {
        en: "KESRU (Kerala Employment Scheme for the Rehabilitation of the Unemployed) is a state self-employment initiative administered by the Directorate of Employment. It offers bank-linked credit up to ₹1,00,000 with a 20% government capital subsidy (maximum ₹20,000) to help registered unemployed youth establish individual commercial, service, or manufacturing enterprises.",
        ml: "തൊഴിലന്വേഷകർക്ക് സ്വന്തമായി സംരംഭങ്ങൾ തുടങ്ങാൻ എംപ്ലോയ്മെന്റ് വകുപ്പ് നടപ്പിലാക്കുന്ന വ്യക്തിഗത സ്വയംതൊഴിൽ പദ്ധതിയാണ് കെസ്റു (KESRU). ബാങ്കുകൾ വഴി ₹1,00,000 രൂപ വരെ വായ്പയും, പദ്ധതി അടങ്കലിന്റെ 20% തുക (പരമാവധി ₹20,000 രൂപ) സർക്കാർ സബ്സിഡിയായും ലഭ്യമാക്കുന്നു."
      },
      eligibility: {
        en: [
          "Age between 21 and 50 years",
          "Must be a registered jobseeker on the live register of Employment Exchanges",
          "Minimum educational qualification: Passed SSLC or equivalent",
          "Annual family income must not exceed ₹1,00,000",
          "Must not be enrolled as a regular student"
        ],
        ml: [
          "പ്രായം 21 നും 50 നും ഇടയിലായിരിക്കണം",
          "എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ പേര് രജിസ്റ്റർ ചെയ്ത ലൈവ് ഉദ്യോഗാർത്ഥിയായിരിക്കണം",
          "കുറഞ്ഞ വിദ്യാഭ്യാസ യോഗ്യത: എസ്.എസ്.എൽ.സി ജയിച്ചിരിക്കണം",
          "കുടുംബ വാർഷിക വരുമാനം ₹1,00,000-ൽ കവിയരുത്",
          "റഗുലർ വിദ്യാർത്ഥികൾക്ക് അപേക്ഷിക്കാൻ അർഹതയില്ല"
        ]
      },
      documents: {
        en: [
          "Employment Registration Card (Form X-10)",
          "Detailed Project Report (DPR) of the proposed business/venture",
          "Income Certificate from Village Officer (family income ≤ ₹1,00,000)",
          "Proof of educational qualification (SSLC Certificate)",
          "Accepted identity proof",
          "Passport size photographs",
          "Bank account details and consent from a scheduled/cooperative bank"
        ],
        ml: [
          "എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ച് രജിസ്ട്രേഷൻ കാർഡ് (Form X-10)",
          "തുടങ്ങാൻ ഉദ്ദേശിക്കുന്ന സംരംഭത്തിന്റെ പ്രോജക്ട് റിപ്പോർട്ട് (DPR)",
          "വില്ലേജ് ഓഫീസറിൽ നിന്നുള്ള വരുമാന സർട്ടിഫിക്കറ്റ് (വാർഷിക വരുമാനം ₹1,00,000-ൽ താഴെ)",
          "എസ്.എസ്.എൽ.സി ബുക്ക് / വിദ്യാഭ്യാസ യോഗ്യതാരേഖ",
          "അംഗീകൃത തിരിച്ചറിയൽ രേഖ",
          "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ",
          "ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങളും വായ്പ നൽകുന്ന ബാങ്കിന്റെ സമ്മതപത്രവും"
        ]
      },
      howToApply: {
        en: "Submit the prescribed KESRU application form along with a Detailed Project Report to your jurisdictional Town or District Employment Exchange.",
        ml: "പൂരിപ്പിച്ച കെസ്റു അപേക്ഷാഫോറവും പ്രോജക്ട് റിപ്പോർട്ടും ആവശ്യമായ രേഖകളും സഹിതം സ്വന്തം പരിധിയിലുള്ള ടൗൺ / ജില്ലാ എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ സമർപ്പിക്കുക."
      },
      steps: {
        en: [
          "Obtain the KESRU application form from the Employment Exchange or download from the official portal",
          "Prepare a Detailed Project Report (DPR) detailing project costs, expected revenue, and equipment required",
          "Submit the application along with income, educational, and identity proofs to the Employment Exchange",
          "Attend the interview and screening process conducted by the District Level Committee",
          "Upon recommendation, the application is forwarded to the selected nationalized, private, or cooperative bank",
          "The bank sanctions the loan and the Employment Department credits the 20% subsidy directly to the loan account"
        ],
        ml: [
          "എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ നിന്നോ വെബ്സൈറ്റിൽ നിന്നോ കെസ്റു അപേക്ഷാഫോറം കൈപ്പറ്റുക",
          "സംരംഭത്തിന്റെ ചിലവും വരുമാനവും വ്യക്തമാക്കുന്ന വിശദമായ പ്രോജക്ട് റിപ്പോർട്ട് തയ്യാറാക്കുക",
          "അപേക്ഷയും അനുബന്ധ രേഖകളും എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ സമർപ്പിക്കുക",
          "ജില്ലാതല സമിതി നടത്തുന്ന ഇന്റർവ്യൂവിലും പരിശോധനയിലും പങ്കെടുക്കുക",
          "തിരഞ്ഞെടുക്കപ്പെടുന്ന അപേക്ഷകൾ വായ്പക്കായി ബാങ്കുകളിലേക്ക് ശുപാർശ ചെയ്യുന്നു",
          "ബാങ്ക് വായ്പ അനുവദിക്കുകയും എംപ്ലോയ്മെന്റ് വകുപ്പ് 20% സബ്സിഡി ബാങ്ക് അക്കൗണ്ടിലേക്ക് നൽകുകയും ചെയ്യുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0 for application submission; bank processing charges may apply as per bank norms)",
        ml: "സൗജന്യം (അപേക്ഷയ്ക്ക് ഫീസില്ല; ബാങ്ക് ചാർജുകൾ ബാങ്ക് നിയമപ്രകാരം ബാധകമായേക്കാം)"
      },
      validity: {
        en: "Term loan with tenure as determined by the financing bank (usually 3 to 5 years).",
        ml: "ബാങ്ക് നിശ്ചയിക്കുന്ന കാലാവധി അനുസരിച്ചുള്ള വായ്പ (സാധാരണയായി 3 മുതൽ 5 വർഷം വരെ)."
      },
      officialUrl: "https://employment.kerala.gov.in/en/kesru/",
      importantNotes: {
        en: [
          "Project / Loan ceiling: ₹1,00,000.",
          "Subsidy rate: 20% of project cost (Maximum subsidy cap of ₹20,000).",
          "Age requirement: Strictly 21 to 50 years.",
          "Candidates availing of the KESRU loan are legally disqualified from receiving unemployment dole.",
          "Repayment discipline is necessary to avoid recovery proceedings."
        ],
        ml: [
          "പരമാവധി പ്രോജക്ട് ചിലവ് / വായ്പ: ₹1,00,000 രൂപ.",
          "സബ്സിഡി നിരക്ക്: 20% (പരമാവധി ₹20,000 രൂപ).",
          "പ്രായപരിധി: 21 നും 50 നും ഇടയിൽ.",
          "കെസ്റു വായ്പ ലഭിക്കുന്നവർക്ക് പിന്നീട് തൊഴിൽരഹിത വേതനത്തിന് അർഹത ഉണ്ടായിരിക്കുന്നതല്ല.",
          "വായ്പ തിരിച്ചടവ് മുടക്കംകൂടാതെ നടത്താൻ പ്രത്യേകം ശ്രദ്ധിക്കുക."
        ]
      }
    },
    {
      id: "saranya-self-employment-scheme",
      category: "employment",
      icon: "🌸",
      name: {
        en: "Saranya Self-Employment Scheme",
        ml: "ശരണ്യ സ്വയംതൊഴിൽ പദ്ധതി"
      },
      summary: {
        en: "Interest-free self-employment loan up to ₹50,000 with 50% government subsidy (up to ₹25,000) for vulnerable and destitute women.",
        ml: "നിർദ്ധനരായ സ്ത്രീകൾ, വിധവകൾ, വിവാഹമോചിതർ എന്നിവർക്ക് പലിശരഹിത വായ്പയായി ₹50,000 രൂപയും 50% സർക്കാർ സബ്സിഡിയും."
      },
      description: {
        en: "Saranya is a dedicated social welfare self-employment scheme operated by the Directorate of Employment. It provides interest-free financial assistance up to ₹50,000 with a 50% government subsidy (maximum ₹25,000) to socially and economically vulnerable women (widows, divorcees, deserted wives, unmarried women above 30, and wives of bedridden patients) to help them achieve economic independence.",
        ml: "സാമ്പത്തികമായി പിന്നോക്കം നിൽക്കുന്ന നിർദ്ധനരായ സ്ത്രീകൾക്ക് സ്വയംതൊഴിൽ കണ്ടെത്താൻ എംപ്ലോയ്മെന്റ് വകുപ്പ് നടപ്പിലാക്കുന്ന പലിശരഹിത വായ്പാ പദ്ധതിയാണ് 'ശരണ്യ'. പരമാവധി ₹50,000 രൂപ വരെ വായ്പയും, അതിൽ 50% തുക (പരമാവധി ₹25,000) സർക്കാർ സബ്സിഡിയായും നൽകുന്നു. പലിശ പൂർണ്ണമായും ഒഴിവാക്കിയിട്ടുണ്ട്."
      },
      eligibility: {
        en: [
          "Registered unemployed women on the live register of Employment Exchanges",
          "Age between 18 and 55 years",
          "Annual family income must not exceed ₹1,00,000",
          "Must belong to one of the specified vulnerable categories: Widows, Divorced women, Deserted wives, Unmarried women aged 30 and above, or Wives of permanently bedridden/incapacitated individuals"
        ],
        ml: [
          "എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ പേര് രജിസ്റ്റർ ചെയ്തിട്ടുള്ള തൊഴിൽരഹിതരായ വനിതകൾ",
          "പ്രായം 18 നും 55 നും ഇടയിലായിരിക്കണം",
          "കുടുംബ വാർഷിക വരുമാനം ₹1,00,000-ൽ താഴെയായിരിക്കണം",
          "താഴെ പറയുന്ന ഏതെങ്കിലും ഒരു വിഭാഗത്തിൽ ഉൾപ്പെടുന്നവരായിരിക്കണം: വിധവകൾ, വിവാഹമോചിതർ, ഭർത്താവ് ഉപേക്ഷിച്ചവർ, 30 വയസ്സ് കഴിഞ്ഞ അവിവാഹിതരായ സ്ത്രീകൾ, കിടപ്പുരോഗികളായ ഭർത്താക്കന്മാരുടെ ഭാര്യമാർ"
        ]
      },
      documents: {
        en: [
          "Employment Registration Identity Card",
          "Certificate from Village Officer proving destitute/widow/divorcee/deserted status, or medical certificate proving husband's bedridden condition",
          "Income Certificate from Village Officer (family income ≤ ₹1,00,000)",
          "Detailed Project Report / business proposal",
          "Accepted identity proof",
          "Bank account passbook copy",
          "Passport size photographs"
        ],
        ml: [
          "എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ച് രജിസ്ട്രേഷൻ കാർഡ്",
          "വിധവ / വിവാഹമോചിത / ഭർത്താവ് ഉപേക്ഷിച്ച സ്ത്രീ എന്ന് തെളിയിക്കുന്ന വില്ലേജ് ഓഫീസറുടെ സർട്ടിഫിക്കറ്റ് (അല്ലെങ്കിൽ ഭർത്താവിന്റെ കിടപ്പുരോഗം തെളിയിക്കുന്ന മെഡിക്കൽ സർട്ടിഫിക്കറ്റ്)",
          "വില്ലേജ് ഓഫീസറിൽ നിന്നുള്ള വരുമാന സർട്ടിഫിക്കറ്റ് (വാർഷിക വരുമാനം ₹1,00,000-ൽ താഴെ)",
          "ലളിതമായ സംരംഭ പ്രോജക്ട് റിപ്പോർട്ട്",
          "അംഗീകൃത തിരിച്ചറിയൽ രേഖ",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ്",
          "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ"
        ]
      },
      howToApply: {
        en: "Submit the prescribed Saranya application along with eligibility certificates and business plan to the jurisdictional Town or District Employment Exchange.",
        ml: "പൂരിപ്പിച്ച ശരണ്യ അപേക്ഷാഫോറവും അനുബന്ധ സർട്ടിഫിക്കറ്റുകളും പ്രോജക്ട് റിപ്പോർട്ടും സഹിതം അടുത്തുള്ള ടൗൺ / ജില്ലാ എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ സമർപ്പിക്കുക."
      },
      steps: {
        en: [
          "Collect the Saranya application form from the Employment Exchange or download from the portal",
          "Attach Village Officer certificate confirming vulnerable category status and Income Certificate",
          "Submit the completed application and project proposal at the Employment Exchange",
          "Scrutiny is completed by the Employment Officer and sanctioned directly without commercial bank dependency",
          "Sanctioned loan amount and subsidy are disbursed directly into the beneficiary's bank account",
          "Repayment commences after the mandatory 3-month moratorium period"
        ],
        ml: [
          "എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ നിന്നോ വെബ്സൈറ്റിൽ നിന്നോ ശരണ്യ അപേക്ഷാഫോറം വാങ്ങുക",
          "അർഹത തെളിയിക്കുന്ന വില്ലേജ് ഓഫീസറുടെ സർട്ടിഫിക്കറ്റും വരുമാന സർട്ടിഫിക്കറ്റും ഒപ്പം ചേർക്കുക",
          "പൂരിപ്പിച്ച അപേക്ഷ എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ സമർപ്പിക്കുക",
          "എംപ്ലോയ്മെന്റ് ഓഫീസറുടെ നേതൃത്വത്തിൽ അപേക്ഷ പരിശോധിച്ചു അനുമതി നൽകുന്നു",
          "അനുവദിക്കപ്പെട്ട തുകയും സബ്സിഡിയും അപേക്ഷകയുടെ ബാങ്ക് അക്കൗണ്ടിലേക്ക് നേരിട്ടെത്തുന്നു",
          "ആദ്യത്തെ 3 മാസത്തെ മൊറട്ടോറിയത്തിന് ശേഷം നിശ്ചിത തവണകളായി തിരിച്ചടവ് ആരംഭിക്കുക"
        ]
      },
      fees: {
        en: "Free (₹0)",
        ml: "സൗജന്യം (₹0)"
      },
      validity: {
        en: "Repayment tenure of 60 monthly instalments.",
        ml: "60 മാസത്തെ തവണകളായി തുക തിരിച്ചടയ്ക്കണം."
      },
      officialUrl: "https://employment.kerala.gov.in/en/saranya/",
      importantNotes: {
        en: [
          "Maximum loan limit: ₹50,000.",
          "Government subsidy: 50% of the loan amount (Maximum ₹25,000).",
          "Interest rate: 0% (Completely interest-free).",
          "Repayment: 60 equal monthly instalments starting after an initial 3-month moratorium.",
          "Eligibility is strictly restricted to women under the notified vulnerable criteria."
        ],
        ml: [
          "പരമാവധി വായ്പ തുക: ₹50,000 രൂപ.",
          "സർക്കാർ സബ്സിഡി: വായ്പയുടെ 50% (പരമാവധി ₹25,000 രൂപ).",
          "പലിശ നിരക്ക്: 0% (പൂർണ്ണമായും പലിശരഹിതം).",
          "തിരിച്ചടവ്: ആദ്യ 3 മാസത്തിന് ശേഷം തുല്യമായ 60 പ്രതിമാസ തവണകളായി തിരിച്ചടയ്ക്കണം.",
          "സർക്കാർ വിജ്ഞാപനത്തിലുള്ള വിഭാഗങ്ങളിൽപ്പെടുന്ന സ്ത്രീകൾക്ക് മാത്രമേ ഇതിൽ അപേക്ഷിക്കാൻ അർഹതയുള്ളൂ."
        ]
      }
    },
    {
      id: "multipurpose-job-clubs",
      category: "employment",
      icon: "👥",
      name: {
        en: "Multipurpose Service Centres / Job Clubs",
        ml: "മൾട്ടിപർപ്പസ് ജോബ് ക്ലബ്ബുകൾ (MPSC/JC)"
      },
      summary: {
        en: "Group self-employment loan up to ₹10,00,000 with 25% subsidy (up to ₹2,00,000) for groups of 2 to 5 registered unemployed individuals.",
        ml: "2 മുതൽ 5 വരെ ഉദ്യോഗാർത്ഥികളുടെ കൂട്ടായ്മകൾക്ക് സംരംഭങ്ങൾ ആരംഭിക്കാൻ ₹10,00,000 വരെ വായ്പയും 25% സർക്കാർ സബ്സിഡിയും."
      },
      description: {
        en: "The Multi Purpose Service Centres / Job Clubs (MPSC/JC) scheme is a collective enterprise initiative by the Directorate of Employment. Groups of 2 to 5 registered unemployed youths can secure bank credit up to ₹10,00,000 with a 25% government capital subsidy (maximum ₹2,00,000) to start group production, service, or retail businesses.",
        ml: "എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ പേര് രജിസ്റ്റർ ചെയ്തിട്ടുള്ള 2 മുതൽ 5 വരെ തൊഴിലന്വേഷകർ ഒത്തുചേർന്ന് കൂട്ടായ്മയായി സംരംഭങ്ങൾ തുടങ്ങാൻ സഹായിക്കുന്ന ഗ്രൂപ്പ് സ്വയംതൊഴിൽ പദ്ധതിയാണിത്. ബാങ്കുകൾ വഴി പരമാവധി ₹10,00,000 രൂപ വരെ വായ്പയും, അടങ്കൽ തുകയുടെ 25% (പരമാവധി ₹2,00,000 രൂപ) സർക്കാർ സബ്സിഡിയായും ലഭ്യമാക്കുന്നു."
      },
      eligibility: {
        en: [
          "Group must comprise strictly 2 to 5 members",
          "All members must be registered jobseekers on the live register of Employment Exchanges",
          "Age generally between 21 and 45 years (official relaxations: up to 3 years for OBC, 5 years for SC/ST/PH)",
          "Annual family income of each individual member must not exceed ₹1,00,000",
          "Must be willing to run the enterprise under collective and joint liability"
        ],
        ml: [
          "ഗ്രൂപ്പിൽ കൃത്യമായി 2 മുതൽ 5 വരെ അംഗങ്ങൾ ഉണ്ടായിരിക്കണം",
          "എല്ലാ അംഗങ്ങളും എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ പേര് രജിസ്റ്റർ ചെയ്ത ലൈവ് ഉദ്യോഗാർത്ഥികളായിരിക്കണം",
          "പ്രായം 21 നും 45 നും ഇടയിലായിരിക്കണം (ഒ.ബി.സി വിഭാഗത്തിന് 3 വർഷവും, എസ്.സി/എസ്.ടി/ഭിന്നശേഷി വിഭാഗത്തിന് 5 വർഷവും ഇളവ് ലഭിക്കും)",
          "ഓരോ അംഗത്തിന്റെയും വ്യക്തിഗത കുടുംബ വാർഷിക വരുമാനം ₹1,00,000-ൽ കവിയരുത്",
          "കൂട്ടുത്തരവാദിത്തത്തോടെ സംരംഭം നടത്താൻ സന്നദ്ധരായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Employment Registration Cards of all group members",
          "Partnership deed / group agreement document",
          "Detailed Project Report (DPR) of the collective enterprise",
          "Income Certificates from Village Officer for all individual members",
          "Educational qualification and age proof certificates of all members",
          "Accepted identity proofs and photographs of all members",
          "Proof of promoter margin money contribution (as required by the bank)"
        ],
        ml: [
          "എല്ലാ അംഗങ്ങളുടെയും എംപ്ലോയ്മെന്റ് രജിസ്ട്രേഷൻ കാർഡുകൾ",
          "അംഗങ്ങൾ ഒപ്പുവെച്ച പാർട്ണർഷിപ്പ് കരാർ / ഗ്രൂപ്പ് എഗ്രിമെന്റ്",
          "സംരംഭത്തിന്റെ വിശദമായ പ്രോജക്ട് റിപ്പോർട്ട് (DPR)",
          "എല്ലാ അംഗങ്ങളുടെയും വില്ലേജ് ഓഫീസറിൽ നിന്നുള്ള വരുമാന സർട്ടിഫിക്കറ്റുകൾ",
          "അംഗങ്ങളുടെ വിദ്യാഭ്യാസ യോഗ്യത, ജനനത്തീയതി രേഖകൾ",
          "എല്ലാ അംഗങ്ങളുടെയും തിരിച്ചറിയൽ കാർഡുകളും ഫോട്ടോകളും",
          "ബാങ്ക് ആവശ്യപ്പെടുന്ന പ്രൊമോട്ടർ വിഹിതം (മാർജിൻ മണി) തെളിയിക്കുന്ന രേഖ"
        ]
      },
      howToApply: {
        en: "Submit the joint application along with the partnership agreement, project report, and member certificates to the jurisdictional District Employment Exchange.",
        ml: "പൂരിപ്പിച്ച സംയുക്ത അപേക്ഷാഫോറം, ഗ്രൂപ്പ് കരാർ, പ്രോജക്ട് റിപ്പോർട്ട്, സർട്ടിഫിക്കറ്റുകൾ എന്നിവ സഹിതം ജില്ലാ എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ സമർപ്പിക്കുക."
      },
      steps: {
        en: [
          "Form a group of 2 to 5 eligible registered jobseekers and draft a mutual partnership agreement",
          "Prepare a comprehensive Detailed Project Report (DPR) detailing collective business operations and costs",
          "Submit the application form and DPR to the District Employment Exchange",
          "Group members attend the joint interview conducted by the District Level Selection Committee",
          "Recommended proposals are sanctioned through nationalized, private, or cooperative financing banks",
          "The Employment Department releases the 25% capital subsidy directly to the bank loan account"
        ],
        ml: [
          "യോഗ്യരായ 2 മുതൽ 5 വരെ ഉദ്യോഗാർത്ഥികൾ ചേർന്ന് ഗ്രൂപ്പ് രൂപീകരിക്കുകയും പരസ്പര പങ്കാളിത്ത കരാർ തയ്യാറാക്കുകയും ചെയ്യുക",
          "സംരംഭത്തിന്റെ ചിലവും പ്രവർത്തനരീതിയും വിശദീകരിക്കുന്ന പ്രോജക്ട് റിപ്പോർട്ട് (DPR) തയ്യാറാക്കുക",
          "അപേക്ഷയും പ്രോജക്ട് റിപ്പോർട്ടും ജില്ലാ എംപ്ലോയ്മെന്റ് എക്സ്ചേഞ്ചിൽ സമർപ്പിക്കുക",
          "ജില്ലാതല സമിതിക്ക് മുൻപാകെ അംഗങ്ങൾ സംയുക്തമായി ഇന്റർവ്യൂവിൽ പങ്കെടുക്കുക",
          "അംഗീകരിക്കപ്പെടുന്ന അപേക്ഷകൾ ബാങ്കുകൾ വഴി വായ്പ അനുവദിക്കുന്നു",
          "എംപ്ലോയ്മെന്റ് വകുപ്പ് അനുവദിക്കുന്ന 25% സബ്സിഡി നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിലേക്ക് ലഭ്യമാക്കുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0 for application submission; standard bank processing fees apply)",
        ml: "സൗജന്യം (അപേക്ഷയ്ക്ക് ഫീസില്ല; ബാങ്ക് ചാർജുകൾ ബാധകമായേക്കാം)"
      },
      validity: {
        en: "Term loan with tenure as fixed by the financing bank (typically 3 to 7 years).",
        ml: "ബാങ്ക് നിശ്ചയിക്കുന്ന കാലാവധി അനുസരിച്ചുള്ള വായ്പ (സാധാരണയായി 3 മുതൽ 7 വർഷം വരെ)."
      },
      officialUrl: "https://employment.kerala.gov.in/en/mpsc-jc/",
      importantNotes: {
        en: [
          "Group size is strictly 2 to 5 registered unemployed individuals.",
          "Maximum project limit: ₹10,00,000.",
          "Government capital subsidy: 25% of total project cost (Maximum ceiling of ₹2,00,000).",
          "All group members share joint and several liability for loan repayment.",
          "Members cannot avail individual unemployment allowances while holding active subsidized credit."
        ],
        ml: [
          "ഗ്രൂപ്പിൽ നിർബന്ധമായും 2 മുതൽ 5 വരെ അംഗങ്ങൾ ഉണ്ടായിരിക്കണം.",
          "പരമാവധി പ്രോജക്ട് അടങ്കൽ: ₹10,00,000 രൂപ.",
          "സർക്കാർ സബ്സിഡി: പ്രോജക്ട് അടങ്കലിന്റെ 25% (പരമാവധി ₹2,00,000 രൂപ വരെ).",
          "വായ്പ തിരിച്ചടവിൽ എല്ലാ അംഗങ്ങൾക്കും തുല്യ കൂട്ടുത്തരവാദിത്തം ഉണ്ടായിരിക്കും.",
          "പദ്ധതി പ്രകാരം വായ്പ ലഭിക്കുന്ന അംഗങ്ങൾക്ക് തൊഴിൽരഹിത വേതനത്തിന് അർഹത ഉണ്ടായിരിക്കില്ല."
        ]
      }
    },
    {
      id: "unorganized-worker-eshram",
      category: "employment",
      icon: "🪪",
      name: {
        en: "e-Shram Registration",
        ml: "ഇ-ശ്രം രജിസ്ട്രേഷൻ (e-Shram)"
      },
      summary: {
        en: "National registration and 12-digit Universal Account Number (UAN) card for unorganized sector workers under the Ministry of Labour & Employment, GoI.",
        ml: "അസംഘടിത മേഖലയിലെ തൊഴിലാളികൾക്ക് കേന്ദ്ര സർക്കാരിന്റെ ആനുകൂല്യങ്ങളും തിരിച്ചറിയൽ കാർഡും (UAN) നൽകുന്ന ദേശീയ പോർട്ടൽ രജിസ്ട്രേഷൻ."
      },
      description: {
        en: "e-Shram is a Government of India national digital database initiative operated by the Ministry of Labour and Employment. It registers unorganized workers (daily wage earners, domestic staff, agricultural labourers, street vendors, delivery workers, gig workers, etc.) and issues a 12-digit Universal Account Number (UAN) card for social security welfare delivery and accidental compensation.",
        ml: "കേന്ദ്ര തൊഴിൽ മന്ത്രാലയം അസംഘടിത മേഖലയിലെ തൊഴിലാളികൾക്കായി നടപ്പിലാക്കുന്ന ദേശീയ വിവരശേഖരണ പ്ലാറ്റ്‌ഫോമാണിത്. ദിവസവേതനക്കാർ, വീട്ടുജോലിക്കാർ, കർഷകത്തൊഴിലാളികൾ, തെരുവ് കച്ചവടക്കാർ, ഗിഗ്/ഡെലിവറി വർക്കർമാർ എന്നിവർക്ക് 12 അക്ക യൂണിവേഴ്സൽ അക്കൗണ്ട് നമ്പർ (UAN) കാർഡ് നൽകുകയും സർക്കാരിന്റെ സാമൂഹിക സുരക്ഷാ ആനുകൂല്യങ്ങൾ ലഭ്യമാക്കുകയും ചെയ്യുന്നു."
      },
      eligibility: {
        en: [
          "Age between 16 and 59 years",
          "Must be an unorganized worker earning livelihood in the informal economy",
          "Must not be an income-tax payer",
          "Must not be an active member of EPFO, ESIC, or government NPS"
        ],
        ml: [
          "പ്രായം 16 നും 59 നും ഇടയിലായിരിക്കണം",
          "അസംഘടിത മേഖലയിൽ പണിയെടുക്കുന്ന തൊഴിലാളിയായിരിക്കണം",
          "ആദായനികുതി (Income Tax) അടയ്ക്കുന്ന ആളാകരുത്",
          "EPFO, ESIC അല്ലെങ്കിൽ സർക്കാർ NPS അംഗമായിരിക്കരുത്"
        ]
      },
      documents: {
        en: [
          "Accepted official identity proof",
          "Active mobile number linked with identity proof (for OTP authentication)",
          "Active savings bank account details (Bank account number and IFSC)"
        ],
        ml: [
          "അംഗീകൃത തിരിച്ചറിയൽ രേഖ",
          "തിരിച്ചറിയൽ രേഖയുമായി ബന്ധിപ്പിച്ച ആക്ടീവ് മൊബൈൽ നമ്പർ (OTP ലഭിക്കാൻ)",
          "ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങൾ (അക്കൗണ്ട് നമ്പറും IFSC കോഡും)"
        ]
      },
      howToApply: {
        en: "Complete direct self-registration online via the national e-Shram portal using OTP, or visit an Akshaya Centre or Common Service Centre (CSC) for assisted biometric enrollment.",
        ml: "ഇ-ശ്രം പോർട്ടലിൽ ഒ.ടി.പി ഉപയോഗിച്ച് സ്വന്തമായി ഓൺലൈനായോ, അടുത്തുള്ള അക്ഷയ / സി.എസ്.സി കേന്ദ്രങ്ങൾ വഴിയോ രജിസ്ട്രേഷൻ പൂർത്തിയാക്കാം."
      },
      steps: {
        en: [
          "Visit the official national e-Shram portal (eshram.gov.in) and click 'Register on e-Shram'",
          "Enter your registered mobile number and captcha to receive an authentication OTP",
          "Authenticate using the OTP to verify demographic details",
          "Enter personal details, residential address, educational level, and primary occupation code",
          "Fill in bank account details (Account number and IFSC) for direct benefit transfer",
          "Preview the completed profile and submit to instantly generate and download the e-Shram UAN Card"
        ],
        ml: [
          "ഔദ്യോഗിക ഇ-ശ്രം പോർട്ടൽ (eshram.gov.in) സന്ദർശിച്ച് 'Register on e-Shram' ക്ലിക്ക് ചെയ്യുക",
          "ലിങ്ക് ചെയ്ത മൊബൈൽ നമ്പറും ക്യാപ്‌ചയും നൽകി OTP നേടുക",
          "ലഭിച്ച OTP നൽകി വിവരങ്ങൾ പരിശോധിച്ച് ഉറപ്പുവരുത്തുക",
          "മേൽവിലാസം, വിദ്യാഭ്യാസ യോഗ്യത, തൊഴിൽ വിഭാഗം എന്നിവ രേഖപ്പെടുത്തുക",
          "ആനുകൂല്യങ്ങൾ നേരിട്ട് ലഭിക്കുന്നതിനായി ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങൾ കൃത്യമായി നൽകുക",
          "വിവരങ്ങൾ പരിശോധിച്ചു സബ്മിറ്റ് ചെയ്ത ശേഷം 12 അക്ക UAN കാർഡ് ഡൗൺലോഡ് ചെയ്ത് പ്രിന്റെടുക്കുക"
        ]
      },
      fees: {
        en: "Free (₹0 for online self-registration and at CSCs/Akshaya; updates may incur nominal standard fee)",
        ml: "സൗജന്യം (ഓൺലൈൻ രജിസ്ട്രേഷൻ തികച്ചും സൗജന്യമാണ്)"
      },
      validity: {
        en: "Lifetime validity for the 12-digit UAN number.",
        ml: "12 അക്ക UAN നമ്പറിന് ആജീവനാന്ത സാധുത ഉണ്ടായിരിക്കും."
      },
      officialUrl: "https://eshram.gov.in/",
      importantNotes: {
        en: [
          "This is an all-India Government of India initiative, not a Kerala-only scheme.",
          "Beneficiaries receive a 12-digit permanent Universal Account Number (UAN) valid across India.",
          "Includes accidental insurance coverage under PMSBY rules (subject to active policy terms).",
          "Keep mobile number and bank account updated on the portal to avoid disruption of welfare disbursements."
        ],
        ml: [
          "ഇത് കേന്ദ്ര സർക്കാരിന്റെ ദേശീയ പദ്ധതിയാണ് (കേരളത്തിന് മാത്രമുള്ളതല്ല).",
          "ഇന്ത്യയിലുടനീളം സാധുതയുള്ള 12 അക്ക തിരിച്ചറിയൽ നമ്പറാണ് (UAN) ഇതിലൂടെ ലഭിക്കുന്നത്.",
          "അപകട ഇൻഷുറൻസ് ഉൾപ്പെടെയുള്ള കേന്ദ്ര സർക്കാർ ആനുകൂല്യങ്ങൾ ഇതിലൂടെ ലഭ്യമാകുന്നു.",
          "ബാങ്ക് അക്കൗണ്ടിലോ മൊബൈൽ നമ്പറിലോ മാറ്റമുണ്ടായാൽ പോർട്ടലിൽ കൃത്യമായി അപ്ഡേറ്റ് ചെയ്യുക."
        ]
      }
    },
    {
      id: "shop-commercial-worker-registration",
      category: "employment",
      icon: "🏪",
      name: {
        en: "Shop & Commercial Establishment Workers Welfare",
        ml: "കടകളിലെയും വാണിജ്യസ്ഥാപനങ്ങളിലെയും തൊഴിലാളി ക്ഷേമനിധി"
      },
      summary: {
        en: "Statutory social security fund membership providing retirement pensions, medical aid, and maternity benefits for private retail and commercial staff.",
        ml: "വ്യാപാര-വാണിജ്യ സ്ഥാപനങ്ങളിലെ ജീവനക്കാർക്ക് പെൻഷൻ, ചികിത്സാ സഹായം, പ്രസവാനുകൂല്യം എന്നിവ നൽകുന്ന പീടിക തൊഴിലാളി ക്ഷേമനിധി അംഗത്വം."
      },
      description: {
        en: "The Kerala Shops and Commercial Establishments Workers Welfare Fund Board (Peedika Thozhilali Kshemanidhi) administers statutory social security benefits for private retail and commercial employees. Enrolled workers remitting regular monthly contributions are entitled to superannuation pensions at age 60, medical coverage, family pensions, and educational aid.",
        ml: "കേരളത്തിലെ കടകൾ, ഹോട്ടലുകൾ, വാണിജ്യ സ്ഥാപനങ്ങൾ എന്നിവിടങ്ങളിൽ ജോലി ചെയ്യുന്ന തൊഴിലാളികൾക്ക് പെൻഷനും മറ്റ് സാമൂഹിക സുരക്ഷാ ആനുകൂല്യങ്ങളും ഉറപ്പാക്കുന്ന നിയമപരമായ ക്ഷേമനിധിയാണിത്. മാസം തോറും നിശ്ചിത തുക അംശദായം അടയ്ക്കുന്ന തൊഴിലാളികൾക്ക് 60 വയസ്സിന് ശേഷം പെൻഷൻ, അടിയന്തര ചികിത്സാ സഹായം, വിവാഹ-പ്രസവ ധനസഹായങ്ങൾ എന്നിവ ലഭിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Workers employed in shops, commercial establishments, and private retail firms covered under the Kerala Shops and Commercial Establishments Act",
          "Age between 18 and 55 years at the time of joining",
          "Superannuation/pension age is 60 years",
          "Minimum 10 continuous years of contribution are required to qualify for statutory pension at age 60"
        ],
        ml: [
          "കേരള ഷോപ്സ് ആൻഡ് കൊമേഴ്സ്യൽ എസ്റ്റാബ്ലിഷ്മെന്റ് ആക്ടിന്റെ പരിധിയിൽ വരുന്ന സ്ഥാപനങ്ങളിലെ ജീവനക്കാർ",
          "അംഗത്വത്തിൽ ചേരുമ്പോൾ പ്രായം 18 നും 55 നും ഇടയിലായിരിക്കണം",
          "പെൻഷൻ പ്രായം 60 വയസ്സാണ്",
          "60 വയസ്സിൽ സ്റ്റാറ്റ്യൂട്ടറി പെൻഷൻ ലഭിക്കാൻ കുറഞ്ഞത് 10 വർഷത്തെ തുടർച്ചയായ അംശദായം അടച്ചിട്ടുണ്ടായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Employer certification / Form-A declaration verifying employment",
          "Accepted official identity proof",
          "Proof of Date of Birth (SSLC / Birth Certificate)",
          "Bank passbook copy (single account with IFSC)",
          "Passport size photographs"
        ],
        ml: [
          "തൊഴിലുടമ നൽകുന്ന സാക്ഷ്യപത്രം / ഫോറം-എ (Form-A)",
          "അംഗീകൃത തിരിച്ചറിയൽ രേഖ",
          "ജനനത്തീയതി തെളിയിക്കുന്ന രേഖ (എസ്.എസ്.എൽ.സി / ജനന സർട്ടിഫിക്കറ്റ്)",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (അക്കൗണ്ട് നമ്പർ, IFSC വ്യക്തമായിരിക്കണം)",
          "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ"
        ]
      },
      howToApply: {
        en: "Apply online through the Peedika portal with employer verification, or apply through authorized Akshaya centres.",
        ml: "പീടിക ക്ഷേമനിധി പോർട്ടൽ (peedika.kerala.gov.in) വഴിയോ അക്ഷയ കേന്ദ്രങ്ങൾ വഴിയോ ഓൺലൈനായി അപേക്ഷിക്കാം."
      },
      steps: {
        en: [
          "Visit the official Peedika portal (peedika.kerala.gov.in) and select worker registration",
          "Fill in personal, employment, and establishment details along with employer registration number",
          "Upload scanned employer verification certificate (Form-A), age proof, and photo",
          "Pay the initial registration fee and first monthly contribution",
          "Submit the application for verification by the District Executive Officer",
          "Download your Membership Identity Card upon approval"
        ],
        ml: [
          "പീടിക പോർട്ടൽ (peedika.kerala.gov.in) സന്ദർശിച്ച് പുതിയ തൊഴിലാളി രജിസ്ട്രേഷൻ തിരഞ്ഞെടുക്കുക",
          "വ്യക്തിഗത വിവരങ്ങൾ, ജോലി ചെയ്യുന്ന സ്ഥാപനത്തിന്റെ വിവരങ്ങൾ എന്നിവ നൽകുക",
          "തൊഴിലുടമ സാക്ഷ്യപ്പെടുത്തിയ ഫോറം-എ, പ്രായരേഖ, ഫോട്ടോ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക",
          "രജിസ്ട്രേഷൻ ഫീസും ആദ്യ മാസത്തെ അംശദായവും ഓൺലൈനായി അടയ്ക്കുക",
          "ജില്ലാ എക്സിക്യൂട്ടീവ് ഓഫീസറുടെ പരിശോധനയ്ക്ക് ശേഷം അംഗത്വം അനുവദിക്കുന്നു",
          "അംഗത്വ കാർഡ് പോർട്ടലിൽ നിന്നും ഡൗൺലോഡ് ചെയ്ത് എടുക്കുക"
        ]
      },
      fees: {
        en: "Monthly member contribution: ₹50 per month (along with statutory employer share).",
        ml: "പ്രതിമാസ അംശദായം: ₹50 രൂപ (തൊഴിലുടമയുടെ വിഹിതത്തോടൊപ്പം)."
      },
      validity: {
        en: "Live membership up to 60 years of age, subject to regular monthly contribution payment.",
        ml: "മാസന്തോറും അംശദായം അടയ്ക്കുന്നതുവഴി 60 വയസ്സ് വരെ അംഗത്വം നിലനിൽക്കും."
      },
      officialUrl: "https://peedika.kerala.gov.in/",
      importantNotes: {
        en: [
          "Joining age is strictly 18 to 55 years.",
          "Monthly contribution is ₹50 per month.",
          "CRITICAL: A minimum of 10 continuous years of contribution is mandatory to qualify for the monthly retirement pension at age 60.",
          "Do NOT confuse this with locked service #73 (Labour Welfare Fund Benefits), which is the general factory/establishment fund under the 1975 Act."
        ],
        ml: [
          "അംഗത്വത്തിൽ ചേരാനുള്ള പ്രായപരിധി: 18 മുതൽ 55 വയസ്സ് വരെ.",
          "പ്രതിമാസ അംശദായം കൃത്യം ₹50 രൂപയാണ്.",
          "പ്രധാനം: 60 വയസ്സിൽ പെൻഷൻ ലഭിക്കാൻ കുറഞ്ഞത് 10 വർഷത്തെ തുടർച്ചയായ അംശദായം നിർബന്ധമായും അടച്ചിരിക്കണം.",
          "ഇത് സർവീസ് #73-ൽ ഉള്ള ജനറൽ ലേബർ വെൽഫെയർ ഫണ്ടിൽ (1975 Act) നിന്നും തികച്ചും വ്യത്യസ്തമായ പ്രത്യേക ക്ഷേമനിധിയാണ്."
        ]
      }
    },
    {
      id: "motor-transport-worker-welfare",
      category: "employment",
      icon: "🚌",
      name: {
        en: "Motor Transport Workers Welfare",
        ml: "മോട്ടോർ ട്രാൻസ്പോർട്ട് തൊഴിലാളി ക്ഷേമനിധി"
      },
      summary: {
        en: "Statutory welfare board membership offering pensions, accident insurance, and family relief for commercial vehicle drivers and transport staff.",
        ml: "ഓട്ടോ, ടാക്സി, ബസ്, ലോറി ഡ്രൈവർമാർക്കും മറ്റ് മോട്ടോർ തൊഴിലാളികൾക്കും പെൻഷനും ഇൻഷുറൻസും നൽകുന്ന ക്ഷേമനിധി അംഗത്വം."
      },
      description: {
        en: "The Kerala Motor Transport Workers' Welfare Fund Board administers statutory social security entitlements for drivers, conductors, cleaners, and auto-taxi operators working in commercial passenger and goods transport undertakings. Regular members qualify for monthly retirement pensions upon superannuation at age 60, accident coverage, and children's educational awards.",
        ml: "കേരളത്തിലെ വാണിജ്യ മോട്ടോർ വാഹന മേഖലയിൽ (ബസ്, ലോറി, ഓട്ടോറിക്ഷ, ടാക്സി മുതലായവ) ജോലി ചെയ്യുന്ന ഡ്രൈവർമാർ, കണ്ടക്ടർമാർ, ക്ലീനർമാർ എന്നിവരുടെ സുരക്ഷയ്ക്കായി പ്രവർത്തിക്കുന്ന ക്ഷേമനിധിയാണിത്. കൃത്യമായി അംശദായം അടയ്ക്കുന്ന തൊഴിലാളികൾക്ക് 60 വയസ്സ് തികയുമ്പോൾ പ്രതിമാസ പെൻഷൻ, അപകട ഇൻഷുറൻസ്, ചികിത്സാ സഹായങ്ങൾ എന്നിവ ലഭിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Commercial motor transport workers holding a valid professional driving licence and badge, or employed as cleaners/conductors",
          "Age between 18 and 58 years at the time of enrollment",
          "Retirement/pension age is 60 years",
          "Pension qualifying service requires a minimum of 5 continuous years of contribution"
        ],
        ml: [
          "സാധുവായ ഡ്രൈവിംഗ് ലൈസൻസും ബാഡ്ജുമുള്ള പ്രൊഫഷണൽ ഡ്രൈവർമാർ അല്ലെങ്കിൽ ബസ്/വാഹന ജീവനക്കാർ",
          "ചേരുമ്പോൾ പ്രായം 18 നും 58 നും ഇടയിലായിരിക്കണം",
          "പെൻഷൻ പ്രായം 60 വയസ്സാണ്",
          "പെൻഷൻ ലഭിക്കാൻ കുറഞ്ഞത് 5 വർഷത്തെ തുടർച്ചയായ അംശദായം അടച്ചിട്ടുണ്ടായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Valid Driving Licence and Professional Badge copy",
          "Vehicle Registration Certificate (RC) copy or employer declaration",
          "Accepted identity proof",
          "Proof of Date of Birth (SSLC / Birth Certificate)",
          "Bank passbook copy (with IFSC)",
          "Passport size photographs"
        ],
        ml: [
          "ഡ്രൈവിംഗ് ലൈസൻസിന്റെയും ബാഡ്ജിന്റെയും പകർപ്പ്",
          "വാഹനത്തിന്റെ ആർ.സി ബുക്ക് പകർപ്പ് അല്ലെങ്കിൽ തൊഴിലുടമയുടെ സാക്ഷ്യപത്രം",
          "അംഗീകൃത തിരിച്ചറിയൽ രേഖ",
          "ജനനത്തീയതി രേഖ (എസ്.എസ്.എൽ.സി / ജനന സർട്ടിഫിക്കറ്റ്)",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (IFSC അടങ്ങിയത്)",
          "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ"
        ]
      },
      howToApply: {
        en: "Submit online application via the official KMTWWFB portal or apply through the District Executive Officer of the Welfare Fund Board.",
        ml: "മോട്ടോർ തൊഴിലാളി ക്ഷേമനിധി ബോർഡിന്റെ വെബ്സൈറ്റ് (kmtwwfb.kerala.gov.in) വഴിയോ ജില്ലാ ഓഫീസുകൾ വഴിയോ അപേക്ഷ സമർപ്പിക്കാം."
      },
      steps: {
        en: [
          "Visit the official KMTWWFB portal (kmtwwfb.kerala.gov.in) and choose online member registration",
          "Enter personal details, driving licence number, badge details, and vehicle affiliation",
          "Upload scanned copies of licence, badge, RC book, age proof, and photo",
          "Pay the initial admission fee and member contribution online",
          "District Executive Officer reviews and approves the application",
          "Receive the verified Member Identity Card and passbook"
        ],
        ml: [
          "കെ.എം.ടി.ഡബ്ല്യു.ഡബ്ല്യു.എഫ്.ബി പോർട്ടൽ (kmtwwfb.kerala.gov.in) സന്ദർശിച്ച് പുതിയ രജിസ്ട്രേഷൻ തിരഞ്ഞെടുക്കുക",
          "വ്യക്തിഗത വിവരങ്ങൾ, ഡ്രൈവിംഗ് ലൈസൻസ്, ബാഡ്ജ്, വാഹന വിവരങ്ങൾ എന്നിവ നൽകുക",
          "ലൈസൻസ്, ബാഡ്ജ്, ആർ.സി ബുക്ക്, പ്രായരേഖ എന്നിവയുടെ പകർപ്പുകൾ അപ്‌ലോഡ് ചെയ്യുക",
          "അഡ്മിഷൻ ഫീസും ആദ്യ മാസത്തെ അംശദായവും ഓൺലൈനായി അടയ്ക്കുക",
          "ജില്ലാ എക്സിക്യൂട്ടീവ് ഓഫീസറുടെ പരിശോധനയ്ക്ക് ശേഷം അപേക്ഷ അംഗീകരിക്കപ്പെടുന്നു",
          "ക്ഷേമനിധി മെമ്പർഷിപ്പ് കാർഡും പാസ്സ്ബുക്കും കൈപ്പറ്റുക"
        ]
      },
      fees: {
        en: "Statutory monthly member contribution plus applicable vehicle owner share as mandated by the Act.",
        ml: "നിയമാനുസൃതമായ പ്രതിമാസ തൊഴിലാളി വിഹിതവും വാഹന ഉടമയുടെ വിഹിതവും."
      },
      validity: {
        en: "Active membership up to 60 years of age, subject to regular contribution payments.",
        ml: "കൃത്യമായി അംശദായം അടയ്ക്കുന്നതുവഴി 60 വയസ്സ് വരെ മെമ്പർഷിപ്പ് നിലനിൽക്കും."
      },
      officialUrl: "https://kmtwwfb.kerala.gov.in/",
      importantNotes: {
        en: [
          "Joining age: 18 to 58 years.",
          "Retirement age: 60 years.",
          "Minimum continuous contribution required for pension: 5 continuous years.",
          "Remittance of welfare contributions is a statutory requirement linked to commercial vehicle fitness and taxation clearances."
        ],
        ml: [
          "ചേരാവുന്ന പ്രായം: 18 മുതൽ 58 വയസ്സ് വരെ.",
          "പെൻഷൻ പ്രായം: 60 വയസ്സ്.",
          "പെൻഷന് അർഹത നേടാൻ കുറഞ്ഞത് 5 വർഷത്തെ തുടർച്ചയായ അംശദായം നിർബന്ധമാണ്.",
          "വാണിജ്യ വാഹനങ്ങളുടെ ഫിറ്റ്‌നസ്, നികുതി തുടങ്ങിയ മോട്ടോർ വാഹന വകുപ്പ് സേവനങ്ങൾക്ക് ക്ഷേമനിധി വിഹിതം അടച്ച രസീത് ആവശ്യമാണ്."
        ]
      }
    },
    {
      id: "tailoring-worker-welfare-fund",
      category: "employment",
      icon: "🧵",
      name: {
        en: "Tailoring Workers Welfare",
        ml: "തയ്യൽ തൊഴിലാളി ക്ഷേമനിധി"
      },
      summary: {
        en: "Statutory pension and welfare scheme for self-employed tailors, cutters, and garment workers in Kerala.",
        ml: "തയ്യൽ തൊഴിലാളികൾ, കട്ടിംഗ് തൊഴിലാളികൾ എന്നിവർക്ക് പ്രതിമാസ പെൻഷനും മറ്റ് സാമൂഹിക ആനുകൂല്യങ്ങളും നൽകുന്ന ക്ഷേമനിധി അംഗത്വം."
      },
      description: {
        en: "The Kerala Tailoring Workers' Welfare Fund Board provides statutory social security, monthly retirement pensions, medical coverage, maternity relief, and educational awards for self-employed tailors, cutting masters, and garment workers operating in Kerala.",
        ml: "കേരളത്തിലെ തയ്യൽ തൊഴിലാളികൾ, കട്ടിംഗ് മാസ്റ്റർമാർ, തുണി നിർമ്മാണ തൊഴിലാളികൾ എന്നിവർക്ക് സാമൂഹിക സുരക്ഷയും പെൻഷനും ഉറപ്പാക്കുന്ന പദ്ധതിയാണിത്. മാസം തോറും ₹50 രൂപ വീതം അംശദായം അടയ്ക്കുന്ന തൊഴിലാളികൾക്ക് 60 വയസ്സ് തികയുമ്പോൾ പ്രതിമാസ പെൻഷനും അടിയന്തര ഘട്ടങ്ങളിൽ ധനസഹായങ്ങളും ലഭിക്കുന്നു."
      },
      eligibility: {
        en: [
          "Individuals engaged in tailoring or garment-making for their livelihood for not less than 3 continuous years",
          "Age between 18 and 55 years at the time of joining",
          "Retirement/pension age is 60 years",
          "Pension qualifying service requires minimum 10 continuous years of contribution"
        ],
        ml: [
          "കുറഞ്ഞത് 3 വർഷമായി തയ്യൽ ജോലി പ്രധാന ഉപജീവനമാർഗ്ഗമായി സ്വീകരിച്ചിട്ടുള്ള തൊഴിലാളികൾ",
          "ചേരുമ്പോൾ പ്രായം 18 നും 55 നും ഇടയിലായിരിക്കണം",
          "പെൻഷൻ പ്രായം 60 വയസ്സാണ്",
          "പെൻഷൻ ലഭിക്കാൻ കുറഞ്ഞത് 10 വർഷത്തെ തുടർച്ചയായ അംശദായം അടച്ചിട്ടുണ്ടായിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Certificate proving tailoring occupation (issued by registered trade union or local self-government representative)",
          "Accepted identity proof",
          "Proof of Date of Birth (SSLC / Birth Certificate)",
          "Bank passbook copy (with IFSC)",
          "Passport size photographs"
        ],
        ml: [
          "തയ്യൽ തൊഴിലാളിയാണെന്ന് സാക്ഷ്യപ്പെടുത്തുന്ന ട്രേഡ് യൂണിയൻ അല്ലെങ്കിൽ തദ്ദേശ ജനപ്രതിനിധിയുടെ സർട്ടിഫിക്കറ്റ്",
          "അംഗീകൃത തിരിച്ചറിയൽ രേഖ",
          "ജനനത്തീയതി രേഖ (എസ്.എസ്.എൽ.സി / ജനന സർട്ടിഫിക്കറ്റ്)",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ്",
          "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ"
        ]
      },
      howToApply: {
        en: "Submit the prescribed application form along with trade certificate and age proof to the District Office of the Tailoring Workers Welfare Fund Board.",
        ml: "പൂരിപ്പിച്ച അപേക്ഷാഫോറം തൊഴിൽ സർട്ടിഫിക്കറ്റ് സഹിതം ജില്ലാ തയ്യൽ തൊഴിലാളി ക്ഷേമനിധി ഓഫീസിൽ സമർപ്പിക്കുക."
      },
      steps: {
        en: [
          "Obtain the official membership application from the District Office or authorized portal",
          "Get the occupation certificate endorsed by a trade union official or local ward member",
          "Attach age proof, identity copy, bank passbook, and passport size photos",
          "Submit the application at the District Office of the Tailoring Workers Welfare Fund Board",
          "Pay the initial admission fee and the monthly contribution of ₹50",
          "Receive the verified Member Identity Card and contribution passbook"
        ],
        ml: [
          "ജില്ലാ ഓഫീസിൽ നിന്നോ ഔദ്യോഗിക പോർട്ടലിൽ നിന്നോ അപേക്ഷാഫോറം കൈപ്പറ്റുക",
          "തൊഴിൽ തെളിയിക്കുന്ന സാക്ഷ്യപത്രത്തിൽ ട്രേഡ് യൂണിയൻ ഭാരവാഹിയുടെയോ വാർഡ് മെമ്പറുടെയോ ഒപ്പ് വാങ്ങുക",
          "പ്രായരേഖ, തിരിച്ചറിയൽ രേഖ, ബാങ്ക് പാസ്സ്ബുക്ക്, ഫോട്ടോ എന്നിവ അപേക്ഷയോടൊപ്പം വെക്കുക",
          "ജില്ലാ തയ്യൽ തൊഴിലാളി ക്ഷേമനിധി ഓഫീസിൽ അപേക്ഷ സമർപ്പിക്കുക",
          "അഡ്മിഷൻ ഫീസും ആദ്യ മാസത്തെ അംശദായമായ ₹50 രൂപയും അടയ്ക്കുക",
          "അംഗത്വ കാർഡും അംശദായ പാസ്സ്ബുക്കും കൈപ്പറ്റുക"
        ]
      },
      fees: {
        en: "Monthly member contribution: ₹50 per month.",
        ml: "പ്രതിമാസ അംശദായം: ₹50 രൂപ."
      },
      validity: {
        en: "Active membership up to 60 years of age, maintained via continuous monthly contributions.",
        ml: "മാസന്തോറും അംശദായം അടയ്ക്കുന്നതുവഴി 60 വയസ്സ് വരെ അംഗത്വം തുടരും."
      },
      officialUrl: "https://tailoringboard.kerala.gov.in/",
      importantNotes: {
        en: [
          "Joining age: Strictly 18 to 55 years.",
          "Monthly contribution: Exactly ₹50 per month.",
          "Minimum 3 years prior tailoring experience required for enrollment.",
          "Pension qualifying condition: Minimum 10 continuous years of contribution to receive retirement pension at age 60."
        ],
        ml: [
          "ചേരാവുന്ന പ്രായപരിധി: 18 മുതൽ 55 വയസ്സ് വരെ.",
          "പ്രതിമാസ അംശദായം: കൃത്യം ₹50 രൂപ.",
          "കുറഞ്ഞത് 3 വർഷത്തെ പ്രവൃത്തിപരിചയം ഉണ്ടായിരിക്കണം.",
          "പെൻഷൻ നിബന്ധന: 60 വയസ്സിൽ പെൻഷൻ ലഭിക്കാൻ കുറഞ്ഞത് 10 വർഷത്തെ തുടർച്ചയായ അംശദായം പൂർത്തിയാക്കിയിരിക്കണം."
        ]
      }
    },
    {
      id: "artisan-skilled-worker-welfare",
      category: "employment",
      icon: "🔨",
      name: {
        en: "Artisans & Skilled Workers Welfare",
        ml: "പരമ്പരാഗത കരകൗശല - വിദഗ്ദ്ധ തൊഴിലാളി ക്ഷേമം"
      },
      summary: {
        en: "Social security and retirement assistance scheme for traditional manual artisans (masons, carpenters, blacksmiths, goldsmiths) not covered under other boards.",
        ml: "മറ്റ് ക്ഷേമനിധികളിൽ അംഗമല്ലാത്ത ആശാരിമാർ, കൊല്ലന്മാർ, തട്ടാന്മാർ, മേസ്തിരിമാർ തുടങ്ങിയ വിദഗ്ദ്ധ തൊഴിലാളികൾക്കുള്ള ക്ഷേമ പദ്ധതി."
      },
      description: {
        en: "The Kerala Artisans and Skilled Workers Welfare Scheme, administered under the Labour Commissionerate, provides retirement benefits, disability relief, medical assistance, and bereavement grants to traditional manual artisans and skilled craft workers who are not covered under any other statutory welfare fund boards.",
        ml: "മറ്റ് പ്രത്യേക ക്ഷേമനിധി ബോർഡുകളിൽ അംഗമല്ലാത്ത പരമ്പരാഗത കരകൗശല വിദഗ്ദ്ധ തൊഴിലാളികൾക്കായി (കൊല്ലൻ, ആശാരി, തട്ടാൻ, മൂശാരി, മേസ്തിരി തുടങ്ങിയവർ) തൊഴിൽ വകുപ്പ് നടപ്പിലാക്കുന്ന ക്ഷേമപദ്ധതിയാണിത്. 60 വയസ്സിന് ശേഷം ലഭിക്കുന്ന പെൻഷൻ ആനുകൂല്യങ്ങളും അടിയന്തര ചികിത്സാ സഹായങ്ങളും ഇതിലൂടെ ലഭ്യമാകുന്നു."
      },
      eligibility: {
        en: [
          "Traditional artisans and skilled manual craftsmen (masons, carpenters, blacksmiths, goldsmiths, potters, etc.) earning primary livelihood from craft",
          "Age between 18 and 55 years at the time of joining",
          "Must NOT be an active member of any other statutory welfare fund board in Kerala"
        ],
        ml: [
          "പരമ്പരാഗത നിർമ്മാണ-കരകൗശല തൊഴിലുകളിൽ ഏർപ്പെട്ടിരിക്കുന്ന തൊഴിലാളികൾ",
          "അപേക്ഷിക്കുമ്പോൾ പ്രായം 18 നും 55 നും ഇടയിലായിരിക്കണം",
          "കേരളത്തിലെ മറ്റ് യാതൊരു സ്റ്റാറ്റ്യൂട്ടറി ക്ഷേമനിധി ബോർഡുകളിലും ഒരേസമയം അംഗമായിരിക്കരുത്"
        ]
      },
      documents: {
        en: [
          "Certificate proving artisan trade/occupation issued by local self-government or recognized artisan association",
          "Accepted official identity proof",
          "Proof of Date of Birth (SSLC / Birth Certificate)",
          "Bank passbook copy (with IFSC)",
          "Self-declaration confirming no dual membership in other welfare boards",
          "Passport size photographs"
        ],
        ml: [
          "തൊഴിൽ തെളിയിക്കുന്ന തദ്ദേശസ്ഥാപനത്തിന്റെയോ അംഗീകൃത അസോസിയേഷന്റെയോ സാക്ഷ്യപത്രം",
          "അംഗീകൃത തിരിച്ചറിയൽ രേഖ",
          "ജനനത്തീയതി രേഖ (എസ്.എസ്.എൽ.സി / ജനന സർട്ടിഫിക്കറ്റ്)",
          "ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ്",
          "മറ്റ് ക്ഷേമനിധികളിൽ അംഗമല്ലെന്ന് വ്യക്തമാക്കുന്ന സത്യവാങ്മൂലം",
          "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ"
        ]
      },
      howToApply: {
        en: "Submit the physical application in the prescribed format along with trade and age credentials directly to the District Labour Officer (DLO).",
        ml: "നിശ്ചിത ഫോറത്തിലുള്ള പൂരിപ്പിച്ച അപേക്ഷയും സർട്ടിഫിക്കറ്റുകളും സഹിതം ജില്ലാ ലേബർ ഓഫീസിൽ (DLO) നേരിട്ട് സമർപ്പിക്കുക."
      },
      steps: {
        en: [
          "Obtain the Artisans and Skilled Workers Welfare application form from the District Labour Office",
          "Secure trade certification from the local body councillor/panchayat member or registered artisan guild",
          "Attach identity proof, age proof, bank passbook, and non-dual membership declaration",
          "Submit the application counter-file at the District Labour Office (DLO)",
          "Labour officer inspects and approves enrollment into the scheme register",
          "Receive membership confirmation and contribution record"
        ],
        ml: [
          "ജില്ലാ ലേബർ ഓഫീസിൽ നിന്ന് അപേക്ഷാഫോറം കൈപ്പറ്റുക",
          "തദ്ദേശ ജനപ്രതിനിധിയിൽ നിന്നോ അംഗീകൃത സംഘടനയിൽ നിന്നോ തൊഴിൽ സാക്ഷ്യപത്രം വാങ്ങുക",
          "തിരിച്ചറിയൽ രേഖ, പ്രായരേഖ, ബാങ്ക് പാസ്സ്ബുക്ക്, സത്യവാങ്മൂലം എന്നിവ ഒപ്പം വെക്കുക",
          "ജില്ലാ ലേബർ ഓഫീസിൽ (DLO) അപേക്ഷ നേരിട്ട് സമർപ്പിക്കുക",
          "ലേബർ ഓഫീസറുടെ പരിശോധനയ്ക്ക് ശേഷം സ്കീമിലേക്ക് അംഗത്വം അനുവദിക്കുന്നു",
          "അംഗത്വ വിവരങ്ങളും രസീതും കൈപ്പറ്റുക"
        ]
      },
      fees: {
        en: "Nominal scheme contribution as determined by the Labour Department Executive Committee.",
        ml: "തൊഴിൽ വകുപ്പ് നിശ്ചയിച്ചിട്ടുള്ള നാമമാത്രമായ അംശദായം."
      },
      validity: {
        en: "Active membership up to 60 years of age.",
        ml: "60 വയസ്സ് വരെ അംഗത്വം നിലനിൽക്കും."
      },
      officialUrl: "https://lc.kerala.gov.in/",
      importantNotes: {
        en: [
          "This is a counter/physical application process managed through District Labour Offices (DLO).",
          "Dual membership is strictly prohibited: Candidates cannot hold simultaneous live membership in another statutory state welfare board.",
          "Retirement benefits accrue at age 60."
        ],
        ml: [
          "ഇതൊരു നേരിട്ടുള്ള (ഓഫ്‌ലൈൻ) അപേക്ഷാ പ്രക്രിയയാണ്; ജില്ലാ ലേബർ ഓഫീസുകൾ വഴിയാണ് നടപടികൾ പൂർത്തിയാക്കേണ്ടത്.",
          "ഇരട്ട അംഗത്വം പാടില്ല: മറ്റ് സർക്കാർ ക്ഷേമനിധികളിൽ ഒരേസമയം അംഗമായിട്ടുള്ളവർക്ക് ഇതിൽ ചേരാൻ അർഹതയില്ല.",
          "60 വയസ്സിന് ശേഷമാണ് റിട്ടയർമെന്റ് ആനുകൂല്യങ്ങൾ ലഭിക്കുന്നത്."
        ]
      }
    },
    {
      id: "mangalya-destitute-widow-marriage-assistance",
      category: "employment",
      relatedCategory: "government",
      icon: "💍",
      name: {
        en: "Mangalya Scheme",
        ml: "മംഗല്യ പദ്ധതി (നിർദ്ധന വനിതാ വിവാഹ ധനസഹായം)"
      },
      summary: {
        en: "One-time financial assistance of ₹25,000 for the legal marriage of destitute widows, divorced women, deserted wives, or daughters of poor widowed mothers.",
        ml: "നിർദ്ധനരായ വിധവകൾ, വിവാഹമോചിതർ എന്നിവരുടെ പുനർവിവാഹത്തിനും നിർദ്ധന വിധവകളുടെ പെൺമക്കളുടെ വിവാഹത്തിനും ₹25,000 രൂപ ധനസഹായം."
      },
      description: {
        en: "The Mangalya Scheme is a dedicated social welfare grant administered by the Women and Child Development Department (WCD), Government of Kerala. It provides a one-time lump-sum grant of ₹25,000 to legally married destitute widows, divorced women, deserted wives, or legal daughters of destitute widowed mothers to support rehabilitation and reduce marriage-related financial distress.",
        ml: "വനിതാ ശിശുവികസന വകുപ്പ് മുഖേന നടപ്പിലാക്കുന്ന സാമൂഹിക ക്ഷേമ പദ്ധതിയാണ് 'മംഗല്യ പദ്ധതി'. നിർദ്ധനരായ വിധവകൾ, വിവാഹമോചിതർ, ഭർത്താവ് ഉപേക്ഷിച്ച സ്ത്രീകൾ എന്നിവരുടെ പുനർവിവാഹത്തിനും, നിർദ്ധനരായ വിധവകളുടെ പെൺമക്കളുടെ വിവാഹത്തിനും സർക്കാർ ₹25,000 രൂപ ഒറ്റത്തവണ സാമ്പത്തിക സഹായമായി നൽകുന്നു."
      },
      eligibility: {
        en: [
          "Bride or remarrying woman must be aged between 18 and 50 years at the time of marriage",
          "Must be a legally married destitute widow, divorced woman, deserted wife, OR the legal daughter of a destitute widowed mother",
          "Annual family income must not exceed ₹1,00,000",
          "Marriage must be legally solemnized and registered with the Local Self Government Registrar of Marriages",
          "Application must be submitted within 6 months of marriage registration"
        ],
        ml: [
          "വിവാഹിതയാകുന്ന പെൺകുട്ടിക്കോ പുനർവിവാഹിതയാകുന്ന സ്ത്രീക്കോ 18 നും 50 നും ഇടയിൽ പ്രായമുണ്ടായിരിക്കണം",
          "നിയമപരമായി പുനർവിവാഹം ചെയ്ത നിർദ്ധനയായ വിധവ, വിവാഹമോചിത, ഭർത്താവ് ഉപേക്ഷിച്ച സ്ത്രീ അല്ലെങ്കിൽ നിർദ്ധനയായ വിധവയുടെ മകൾ ആയിരിക്കണം",
          "കുടുംബ വാർഷിക വരുമാനം ₹1,00,000-ൽ കവിയരുത്",
          "വിവാഹം നിയമപരമായി രജിസ്റ്റർ ചെയ്തിരിക്കണം (തദ്ദേശസ്ഥാപന വിവാഹ സർട്ടിഫിക്കറ്റ് നിർബന്ധം)",
          "വിവാഹം രജിസ്റ്റർ ചെയ്ത് 6 മാസത്തിനകം അപേക്ഷ സമർപ്പിച്ചിരിക്കണം"
        ]
      },
      documents: {
        en: [
          "Official Marriage Certificate issued by the Local Self Government Registrar of Marriages",
          "Income Certificate from Village Officer (family annual income ≤ ₹1,00,000)",
          "Certificate proving widow / divorcee / deserted status from Village Officer or court decree (for remarriage)",
          "Death Certificate of father / mother's widow certificate (for daughters of destitute widows)",
          "Accepted identity proofs of both bride and groom",
          "Bank passbook copy of the applicant (single account with IFSC)",
          "Passport size wedding photograph of the couple"
        ],
        ml: [
          "തദ്ദേശസ്ഥാപനം നൽകിയ ഔദ്യോഗിക വിവാഹ സർട്ടിഫിക്കറ്റ് (Marriage Certificate)",
          "വില്ലേജ് ഓഫീസറിൽ നിന്നുള്ള വരുമാന സർട്ടിഫിക്കറ്റ് (വാർഷിക വരുമാനം ₹1,00,000-ൽ താഴെ)",
          "വിധവ / വിവാഹമോചിത / ഭർത്താവ് ഉപേക്ഷിച്ച സ്ത്രീ എന്ന് തെളിയിക്കുന്ന വില്ലേജ് സർട്ടിഫിക്കറ്റ് അല്ലെങ്കിൽ കോടതി ഉത്തരവ്",
          "വിധവയുടെ മകളാണെങ്കിൽ പിതാവിന്റെ മരണ സർട്ടിഫിക്കറ്റും മാതാവിന്റെ വിധവാ സർട്ടിഫിക്കറ്റും",
          "വധൂവരന്മാരുടെ തിരിച്ചറിയൽ രേഖകൾ",
          "അപേക്ഷകയുടെ ബാങ്ക് പാസ്സ്ബുക്ക് പകർപ്പ് (IFSC അടങ്ങിയത്)",
          "വധൂവരന്മാരുടെ വിവാഹ ഫോട്ടോ"
        ]
      },
      howToApply: {
        en: "Submit the completed application form along with the official Marriage Certificate and Income Certificate to the local Child Development Project Officer (CDPO) / ICDS supervisor within 6 months of marriage.",
        ml: "വിവാഹം കഴിഞ്ഞ് 6 മാസത്തിനകം പൂരിപ്പിച്ച അപേക്ഷയും സർട്ടിഫിക്കറ്റുകളും അതാത് ബ്ലോക്കിലെ ചൈൽഡ് ഡെവലപ്‌മെന്റ് പ്രോജക്ട് ഓഫീസർക്ക് (CDPO / ICDS) സമർപ്പിക്കുക."
      },
      steps: {
        en: [
          "Register the marriage legally at the local Grama Panchayat / Municipality to obtain the official Marriage Certificate",
          "Obtain the Mangalya application form from the local ICDS / CDPO office or WCD portal",
          "Attach Income Certificate from the Village Officer and documentation of widow/divorcee status",
          "Submit the application to the concerned Child Development Project Officer (CDPO) within 6 months of marriage registration",
          "The ICDS supervisor conducts necessary verification and forwards the file for sanction",
          "Upon sanction, the one-time grant of ₹25,000 is credited directly to the beneficiary's bank account"
        ],
        ml: [
          "വിവാഹം തദ്ദേശസ്ഥാപനത്തിൽ രജിസ്റ്റർ ചെയ്തു ഔദ്യോഗിക വിവാഹ സർട്ടിഫിക്കറ്റ് കൈപ്പറ്റുക",
          "ഐ.സി.ഡി.എസ് (ICDS) / സി.ഡി.പി.ഒ (CDPO) ഓഫീസിൽ നിന്നോ പോർട്ടലിൽ നിന്നോ മംഗല്യ അപേക്ഷാഫോറം വാങ്ങുക",
          "വില്ലേജ് ഓഫീസറുടെ വരുമാന സർട്ടിഫിക്കറ്റും വിധവാ/വിവാഹമോചന തെളിവും ഒപ്പം ചേർക്കുക",
          "വിവാഹ രജിസ്ട്രേഷൻ കഴിഞ്ഞ് 6 മാസത്തിനകം അപേക്ഷ സി.ഡി.പി.ഒ ഓഫീസിൽ സമർപ്പിക്കുക",
          "ഐ.സി.ഡി.എസ് സൂപ്പർവൈസറുടെ പരിശോധനയ്ക്ക് ശേഷം അപേക്ഷ അംഗീകരിക്കപ്പെടുന്നു",
          "ധനസഹായ തുകയായ ₹25,000 ഗുണഭോക്താവിന്റെ ബാങ്ക് അക്കൗണ്ടിലേക്ക് നേരിട്ടെത്തുന്നു"
        ]
      },
      fees: {
        en: "Free (₹0)",
        ml: "സൗജന്യം (₹0)"
      },
      validity: {
        en: "One-time lump sum grant.",
        ml: "ഒറ്റത്തവണ ലഭിക്കുന്ന ധനസഹായം."
      },
      officialUrl: "https://wcd.kerala.gov.in/scheme-info.php?id=MQ==",
      importantNotes: {
        en: [
          "Base financial grant is exactly ₹25,000.",
          "Strict application deadline: Must be filed within 6 months of marriage registration.",
          "Family annual income ceiling is ₹1,00,000.",
          "CRITICAL DISTINCTION: This is NOT locked service #30 (Inter-Caste Marriage Assistance). Inter-caste marriage is NOT required for Mangalya Scheme; it is strictly an economic and social welfare grant for destitute women and widows."
        ],
        ml: [
          "അടിസ്ഥാന സഹായധനം കൃത്യം ₹25,000 രൂപയാണ്.",
          "സമയപരിധി: വിവാഹം രജിസ്റ്റർ ചെയ്ത് 6 മാസത്തിനകം നിർബന്ധമായും അപേക്ഷിച്ചിരിക്കണം.",
          "കുടുംബ വാർഷിക വരുമാന പരിധി: ₹1,00,000 രൂപ.",
          "പ്രത്യേക ശ്രദ്ധയ്ക്ക്: ഇത് സർവീസ് #30-ലുള്ള മിശ്രവിവാഹ ധനസഹായമല്ല. ഇതിൽ മിശ്രവിവാഹം നിർബന്ധമില്ല; നിർദ്ധനരായ സ്ത്രീകൾക്കും വിധവകളുടെ മക്കൾക്കും വേണ്ടിയുള്ള സാമൂഹിക സുരക്ഷാ പദ്ധതിയാണിത്."
        ]
      }
    }
  ];

  if (window.SevaRegistry && typeof window.SevaRegistry.register === "function") {
    window.SevaRegistry.register(data);
  } else {
    window.SevaRegistry.employment = data;
  }
})();
