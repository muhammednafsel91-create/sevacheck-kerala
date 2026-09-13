// ==========================================
// SEVACHECK KERALA — APPLICATION LOGIC
// File: script.js
// ==========================================

// ==========================================
// 1. GLOBAL STATE
// ==========================================
let currentLang = "en";
let currentCategory = "all";
let activeServiceId = null;

// ==========================================
// 2. CENTRALIZED i18n DICTIONARY
// ==========================================
const i18n = {
  en: {
    topDisclaimer: "ℹ️ SevaCheck Kerala is an independent guidance platform. Always verify through official government sources.",
    navHome: "Home",
    navServices: "Services",
    navHow: "How It Works",
    navAbout: "About",
    heroHeading: "Know what you need before you apply.",
    heroSubheading: "Simple document checklists, eligibility guidelines, and application steps for Kerala residents.",
    searchPlaceholder: "Search a Government service... (e.g., Income, Driving Licence)",
    categorySectionHeading: "Not sure what service you need?",
    catAll: "All",
    catDocuments: "📄 Documents & Certificates",
    catId: "🪪 ID & Personal",
    catGovernment: "🏛️ Government & Local",
    catEducation: "🎓 Education",
    catTravel: "🚗 Travel & Transport",
    popularServicesHeading: "Popular Services",
    emptyStateHeading: "No matching service found.",
    emptyStateText: "Try searching for words like \"Income\", \"Passport\", \"Birth\", or \"Licence\".",
    backToHome: "← Back to all services",
    headingWho: "👥 Who May Need It",
    headingEligibility: "✅ Basic Eligibility",
    headingDocs: "📄 Documents to Prepare",
    checklistHint: "Check the boxes as you assemble your paperwork:",
    headingAdditionalDocs: "📎 Additional / Supporting Documents (If Applicable)",
    headingWhere: "📍 Where to Apply",
    headingSteps: "📋 Basic Step-by-Step Instructions",
    headingNotes: "ℹ️ Important Notes",
    howHeading: "How SevaCheck Kerala Works",
    howIntro: "Applying for government services does not need to involve multiple trips to offices just to find out which document is missing.",
    howStep1Title: "1. Search your service",
    howStep1Desc: "Look up the certificate, licence, or document you need through our quick search index.",
    howStep2Title: "2. Check basic eligibility",
    howStep2Desc: "Review the standard criteria required under Kerala state guidelines or central requirements.",
    howStep3Title: "3. Prepare your documents",
    howStep3Desc: "Use our interactive checklists to tick off documents before you visit an Akshaya centre or submit online.",
    howStep4Title: "4. Visit official or authorised portals",
    howStep4Desc: "Whenever possible, SevaCheck links to official government portals or authorised official service-provider portals without third-party confusion.",
    howStep5Title: "5. Apply and track your application",
    howStep5Desc: "Submit through official channels and save your application receipt or acknowledgement number.",
    howCtaBtn: "Get Started",
    viewChecklist: "View checklist →",
    badgeCategory: "Category",
    badgeMode: "Mode",
    verifiedOn: "Information last verified against official state guidelines:",
    btnOfficialSource: "Open Official Source ↗",
    btnPendingVerification: "Official source link will be added after verification",
    servicesCount: (count) => `Showing ${count} service${count === 1 ? "" : "s"}`
  },
  ml: {
    topDisclaimer: "ℹ️ സേവാചെക്ക് കേരള ഒരു സ്വതന്ത്ര മാർഗ്ഗനിർദ്ദേശ പ്ലാറ്റ്‌ഫോമാണ്. വിവരങ്ങൾ ഔദ്യോഗിക സ്രോതസ്സുകൾ വഴി സ്ഥിരീകരിക്കുക.",
    navHome: "ഹോം",
    navServices: "സേവനങ്ങൾ",
    navHow: "പ്രവർത്തനം",
    navAbout: "ഞങ്ങളെക്കുറിച്ച്",
    heroHeading: "അപേക്ഷിക്കുന്നതിന് മുൻപ് എന്തൊക്കെ വേണമെന്ന് അറിയൂ.",
    heroSubheading: "കേരളത്തിലെ വിവിധ സർക്കാർ സേവനങ്ങൾക്കുള്ള രേഖകൾ, യോഗ്യതകൾ, അപേക്ഷാ രീതികൾ എന്നിവ ലളിതമായി മനസ്സിലാക്കാം.",
    searchPlaceholder: "ആവശ്യമുള്ള സേവനം തിരയുക... (ഉദാ: വരുമാനം, ലൈസൻസ്, റേഷൻ)",
    categorySectionHeading: "ഏത് സേവനമാണ് വേണ്ടതെന്ന് ഉറപ്പില്ലേ?",
    catAll: "എല്ലാം",
    catDocuments: "📄 രേഖകളും സർട്ടിഫിക്കറ്റുകളും",
    catId: "🪪 തിരിച്ചറിയൽ രേഖകൾ",
    catGovernment: "🏛️ സർക്കാർ & പ്രാദേശികം",
    catEducation: "🎓 വിദ്യാഭ്യാസം",
    catTravel: "🚗 യാത്രയും വാഹനങ്ങളും",
    popularServicesHeading: "പ്രധാന സേവനങ്ങൾ",
    emptyStateHeading: "സേവനങ്ങളൊന്നും കണ്ടെത്താനായില്ല.",
    emptyStateText: "ഇംഗ്ലീഷിലോ മലയാളത്തിലോ മറ്റൊരു വാക്ക് ഉപയോഗിച്ച് തിരയുക (ഉദാ: വരുമാനം, Passport, ജനനം).",
    backToHome: "← എല്ലാ സേവനങ്ങളിലേക്കും മടങ്ങുക",
    headingWho: "👥 ആർക്കൊക്കെ ആവശ്യമായി വരാം?",
    headingEligibility: "✅ അടിസ്ഥാന യോഗ്യത",
    headingDocs: "📄 കരുതേണ്ട പ്രധാന രേഖകൾ",
    checklistHint: "രേഖകൾ തയ്യാറാക്കുമ്പോൾ ഒപ്പം ടിക്ക് ചെയ്യുക:",
    headingAdditionalDocs: "📎 അധിക / അനുബന്ധ രേഖകൾ (ബാധകമെങ്കിൽ)",
    headingWhere: "📍 എവിടെയാണ് അപേക്ഷിക്കേണ്ടത്?",
    headingSteps: "📋 അപേക്ഷ സമർപ്പിക്കേണ്ട പ്രധാന ഘട്ടങ്ങൾ",
    headingNotes: "ℹ️ പ്രധാന നിർദ്ദേശങ്ങൾ",
    howHeading: "സേവാചെക്ക് കേരള എങ്ങനെ പ്രവർത്തിക്കുന്നു?",
    howIntro: "സർക്കാർ സേവനങ്ങൾക്കായി ഓഫീസുകൾ കയറിയിറങ്ങാതെ ആവശ്യമായ വിവരങ്ങൾ മുൻകൂട്ടി അറിയാൻ ഈ പ്ലാറ്റ്ഫോം സഹായിക്കുന്നു.",
    howStep1Title: "1. ആവശ്യമുള്ള സേവനം തിരയുക",
    howStep1Desc: "ഞങ്ങളുടെ ലളിതമായ തിരച്ചിൽ സംവിധാനം വഴി നിങ്ങൾക്ക് ആവശ്യമായ സർട്ടിഫിക്കറ്റോ രേഖയോ കണ്ടെത്തുക.",
    howStep2Title: "2. യോഗ്യത പരിശോധിക്കുക",
    howStep2Desc: "സർക്കാർ നിശ്ചയിച്ചിട്ടുള്ള പ്രാഥമിക യോഗ്യതാ മാനദണ്ഡങ്ങൾ ഉണ്ടെന്ന് ഉറപ്പുവരുത്തുക.",
    howStep3Title: "3. രേഖകൾ തയ്യാറാക്കുക",
    howStep3Desc: "ഇന്ററാക്ടീവ് ചെക്ക്‌ലിസ്റ്റ് ഉപയോഗിച്ച് അക്ഷയ കേന്ദ്രത്തിൽ പോകുന്നതിന് മുൻപ് രേഖകൾ ശേഖരിക്കുക.",
    howStep4Title: "4. ഔദ്യോഗിക പോർട്ടലുകൾ സന്ദർശിക്കുക",
    howStep4Desc: "സാധ്യമാകുന്നിടത്തെല്ലാം ഔദ്യോഗിക സർക്കാർ പോർട്ടലുകളോ അംഗീകൃത സേവന പോർട്ടലുകളോ നേരിട്ട് സന്ദർശിക്കുക.",
    howStep5Title: "5. അപേക്ഷ സമർപ്പിച്ച് ട്രാക്ക് ചെയ്യുക",
    howStep5Desc: "ഔദ്യോഗിക സംവിധാനങ്ങളിലൂടെ അപേക്ഷ സമർപ്പിച്ച് അക്നോളഡ്ജ്മെന്റ് രസീത് സൂക്ഷിക്കുക.",
    howCtaBtn: "ആരംഭിക്കാം",
    viewChecklist: "വിവരങ്ങൾ കാണുക →",
    badgeCategory: "വിഭാഗം",
    badgeMode: "രീതി",
    verifiedOn: "ഔദ്യോഗിക മാനദണ്ഡങ്ങൾ പ്രകാരം അവസാനം പരിശോധിച്ചത്:",
    btnOfficialSource: "ഔദ്യോഗിക പോർട്ടൽ സന്ദർശിക്കുക ↗",
    btnPendingVerification: "സ്ഥിരീകരണത്തിന് ശേഷം ഔദ്യോഗിക ലിങ്ക് ലഭ്യമാക്കും",
    servicesCount: (count) => `${count} സേവനങ്ങൾ ലഭ്യമാണ്`
  }
};

const categoryMap = {
  en: {
    documents: "Documents & Certificates",
    id: "ID & Personal",
    government: "Government & Local",
    education: "Education",
    travel: "Travel & Transport"
  },
  ml: {
    documents: "രേഖകളും സർട്ടിഫിക്കറ്റുകളും",
    id: "തിരിച്ചറിയൽ രേഖകൾ",
    government: "സർക്കാർ & പ്രാദേശികം",
    education: "വിദ്യാഭ്യാസം",
    travel: "യാത്രയും വാഹനങ്ങളും"
  }
};

// ==========================================
// 3. ROBUST FIELD ACCESSORS
// ==========================================
function getLocalizedField(fieldObj, lang, fallbackValue = "") {
  if (!fieldObj) return fallbackValue;
  if (typeof fieldObj === "string") return fieldObj;
  if (typeof fieldObj === "object") {
    if (fieldObj[lang]) return fieldObj[lang];
    const altLang = lang === "en" ? "ml" : "en";
    if (fieldObj[altLang]) return fieldObj[altLang];
  }
  return fallbackValue;
}

function getLocalizedArray(arrObj, lang) {
  if (!arrObj) return [];
  if (Array.isArray(arrObj)) return arrObj;
  if (typeof arrObj === "object") {
    if (Array.isArray(arrObj[lang])) return arrObj[lang];
    const altLang = lang === "en" ? "ml" : "en";
    if (Array.isArray(arrObj[altLang])) return arrObj[altLang];
  }
  return [];
}

// ==========================================
// 4. LANGUAGE SWITCHING
// ==========================================
function setLanguage(lang) {
  if (lang !== "en" && lang !== "ml") return;
  currentLang = lang;

  const btnEn = document.getElementById("btn-lang-en");
  const btnMl = document.getElementById("btn-lang-ml");

  if (btnEn && btnMl) {
    if (lang === "en") {
      btnEn.classList.add("active");
      btnEn.style.color = "var(--primary)";
      btnEn.style.fontWeight = "700";
      btnMl.classList.remove("active");
      btnMl.style.color = "var(--text-muted)";
      btnMl.style.fontWeight = "500";
    } else {
      btnMl.classList.add("active");
      btnMl.style.color = "var(--primary)";
      btnMl.style.fontWeight = "700";
      btnEn.classList.remove("active");
      btnEn.style.color = "var(--text-muted)";
      btnEn.style.fontWeight = "500";
    }
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[currentLang] && i18n[currentLang][key]) {
      el.textContent = i18n[currentLang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[currentLang] && i18n[currentLang][key]) {
      el.placeholder = i18n[currentLang][key];
    }
  });

  handleSearch();

  const detailView = document.getElementById("view-detail");
  if (activeServiceId && detailView && detailView.style.display === "block") {
    openService(activeServiceId);
  }
}

// ==========================================
// 5. SERVICE CARDS RENDERING
// ==========================================
function renderCards(list) {
  const grid = document.getElementById("serviceGrid");
  const empty = document.getElementById("emptyState");
  const countLabel = document.getElementById("servicesCount");

  if (!grid || !empty || !countLabel) return;

  grid.innerHTML = "";

  if (!list || list.length === 0) {
    grid.style.display = "none";
    empty.style.display = "block";
    countLabel.textContent = i18n[currentLang].servicesCount(0);
    return;
  }

  grid.style.display = "grid";
  empty.style.display = "none";
  countLabel.textContent = i18n[currentLang].servicesCount(list.length);

  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.onclick = () => openService(item.id);

    const nameEn = getLocalizedField(item.name, "en", item.id);
    const nameMl = getLocalizedField(item.name, "ml", nameEn);

    // In Malayalam mode: Malayalam name primary, English name subtitle underneath
    // In English mode: English name primary, Malayalam name subtitle underneath
    const primaryTitle = currentLang === "ml" ? nameMl : nameEn;
    const secondaryTitle = currentLang === "ml" ? nameEn : nameMl;

    const summaryText = getLocalizedField(item.summary, currentLang);
    const modeText = getLocalizedField(item.mode, currentLang);

    card.innerHTML = `
      <div class="card-top">
        <span class="service-icon">${item.icon || "📄"}</span>
        <h2>${primaryTitle}</h2>
        <div class="card-subtitle">${secondaryTitle}</div>
        <p>${summaryText}</p>
      </div>
      <div class="card-meta">
        <span>${modeText}</span>
        <span class="card-link">${i18n[currentLang].viewChecklist}</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ==========================================
// 6. SEARCH & CATEGORY FILTERING
// ==========================================
function handleSearch() {
  const searchInput = document.getElementById("searchInput");
  const q = searchInput ? searchInput.value.toLowerCase().trim() : "";

  let filtered = (typeof servicesData !== "undefined" && Array.isArray(servicesData)) ? servicesData : [];

  if (currentCategory !== "all") {
    filtered = filtered.filter((s) => s.category === currentCategory);
  }

  if (q) {
    filtered = filtered.filter((s) => {
      const nameEn = getLocalizedField(s.name, "en").toLowerCase();
      const nameMl = getLocalizedField(s.name, "ml").toLowerCase();
      const summaryEn = getLocalizedField(s.summary, "en").toLowerCase();
      const summaryMl = getLocalizedField(s.summary, "ml").toLowerCase();
      const whoEn = getLocalizedField(s.whoNeeds, "en").toLowerCase();
      const whoMl = getLocalizedField(s.whoNeeds, "ml").toLowerCase();

      return nameEn.includes(q) ||
             nameMl.includes(q) ||
             summaryEn.includes(q) ||
             summaryMl.includes(q) ||
             whoEn.includes(q) ||
             whoMl.includes(q);
    });
  }

  renderCards(filtered);
}

function filterCategory(cat, btn) {
  currentCategory = cat;

  const chips = document.querySelectorAll(".helper-chip");
  chips.forEach((c) => c.classList.remove("active"));

  if (btn) {
    btn.classList.add("active");
  } else {
    const matchingBtn = document.getElementById(`cat-${cat}`);
    if (matchingBtn) {
      matchingBtn.classList.add("active");
    } else {
      const dataBtn = document.querySelector(`.helper-chip[data-category="${cat}"]`);
      if (dataBtn) dataBtn.classList.add("active");
    }
  }

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  handleSearch();
}

// ==========================================
// 7. SERVICE DETAIL VIEW
// ==========================================
function openService(id) {
  if (typeof servicesData === "undefined" || !Array.isArray(servicesData)) return;
  const s = servicesData.find((item) => item.id === id);
  if (!s) return;

  activeServiceId = id;

  const vHome = document.getElementById("view-home");
  const vHow = document.getElementById("view-how");
  const vAbout = document.getElementById("view-about");
  const vDetail = document.getElementById("view-detail");

  if (vHome) vHome.style.display = "none";
  if (vHow) vHow.style.display = "none";
  if (vAbout) vAbout.style.display = "none";
  if (vDetail) vDetail.style.display = "block";

  const nameEn = getLocalizedField(s.name, "en", s.id);
  const nameMl = getLocalizedField(s.name, "ml", nameEn);

  const primaryTitle = currentLang === "ml" ? nameMl : nameEn;
  const secondaryTitle = currentLang === "ml" ? nameEn : nameMl;

  const titleEl = document.getElementById("detailTitle");
  if (titleEl) titleEl.textContent = primaryTitle;

  const subtitleEl = document.getElementById("detailSubtitle");
  if (subtitleEl) {
    subtitleEl.textContent = secondaryTitle;
    subtitleEl.style.display = secondaryTitle ? "block" : "none";
  }

  const descEl = document.getElementById("detailDesc");
  if (descEl) descEl.textContent = getLocalizedField(s.summary, currentLang);

  const badgesContainer = document.getElementById("detailBadges");
  if (badgesContainer) {
    const categoryLabel = (categoryMap[currentLang] && categoryMap[currentLang][s.category])
      ? categoryMap[currentLang][s.category]
      : (s.category || "").toUpperCase();

    const modeLabel = getLocalizedField(s.mode, currentLang);

    badgesContainer.innerHTML = `
      <span class="tag-badge">📍 ${i18n[currentLang].badgeMode}: ${modeLabel}</span>
      <span class="tag-badge">🏷️ ${i18n[currentLang].badgeCategory}: ${categoryLabel}</span>
    `;
  }

  const whoEl = document.getElementById("detailWho");
  if (whoEl) whoEl.textContent = getLocalizedField(s.whoNeeds, currentLang);

  const eligEl = document.getElementById("detailEligibility");
  if (eligEl) eligEl.textContent = getLocalizedField(s.eligibility, currentLang);

  const whereEl = document.getElementById("detailWhere");
  if (whereEl) whereEl.textContent = getLocalizedField(s.whereToApply, currentLang);

  const notesEl = document.getElementById("detailNotes");
  if (notesEl) notesEl.textContent = getLocalizedField(s.notes, currentLang);

  const lastVerifiedEl = document.getElementById("detailLastVerified");
  if (lastVerifiedEl) {
    lastVerifiedEl.textContent = `${i18n[currentLang].verifiedOn} ${s.lastVerified || ""}`;
  }

  // Interactive Checklist (Primary Documents)
  const docsContainer = document.getElementById("detailDocs");
  if (docsContainer) {
    docsContainer.innerHTML = "";
    const docList = getLocalizedArray(s.documents, currentLang);

    docList.forEach((doc, idx) => {
      const item = document.createElement("div");
      item.className = "checklist-item";
      const checkId = `doc-${idx}`;
      item.innerHTML = `
        <input type="checkbox" id="${checkId}" onchange="toggleCheck(this)">
        <label for="${checkId}">${doc}</label>
      `;
      docsContainer.appendChild(item);
    });
  }

  // Additional Supporting Documents
  const addSection = document.getElementById("additionalDocsSection");
  const addList = document.getElementById("detailAdditionalDocs");
  const addDocsList = getLocalizedArray(s.additionalDocs, currentLang);

  if (addSection && addList) {
    if (addDocsList && addDocsList.length > 0) {
      addList.innerHTML = "";
      addDocsList.forEach((doc) => {
        const li = document.createElement("li");
        li.textContent = doc;
        addList.appendChild(li);
      });
      addSection.style.display = "block";
    } else {
      addSection.style.display = "none";
    }
  }

  // Step-by-Step Instructions
  const stepsContainer = document.getElementById("detailSteps");
  if (stepsContainer) {
    stepsContainer.innerHTML = "";
    const stepsList = getLocalizedArray(s.steps, currentLang);

    stepsList.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      stepsContainer.appendChild(li);
    });
  }

  // Official Source Link Button
  const btnWrapper = document.getElementById("officialBtnWrapper");
  if (btnWrapper) {
    if (s.verified && s.officialUrl) {
      btnWrapper.innerHTML = `
        <a href="${s.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-official">
          ${i18n[currentLang].btnOfficialSource}
        </a>
      `;
    } else {
      btnWrapper.innerHTML = `
        <button class="btn-official btn-disabled" disabled>
          ${i18n[currentLang].btnPendingVerification}
        </button>
      `;
    }
  }

  window.scrollTo(0, 0);
}

// Checklist Item Interactive Toggle
function toggleCheck(checkbox) {
  const parent = checkbox.closest(".checklist-item");
  if (!parent) return;
  if (checkbox.checked) {
    parent.classList.add("checked");
  } else {
    parent.classList.remove("checked");
  }
}

// Back to Home from Detail View
function backToHome() {
  activeServiceId = null;
  const vDetail = document.getElementById("view-detail");
  const vHow = document.getElementById("view-how");
  const vAbout = document.getElementById("view-about");
  const vHome = document.getElementById("view-home");

  if (vDetail) vDetail.style.display = "none";
  if (vHow) vHow.style.display = "none";
  if (vAbout) vAbout.style.display = "none";
  if (vHome) vHome.style.display = "block";

  updateNav("home");
  window.scrollTo(0, 0);
}

// ==========================================
// 8. SITE NAVIGATION
// ==========================================
function navigateTo(page) {
  activeServiceId = null;
  const vHome = document.getElementById("view-home");
  const vDetail = document.getElementById("view-detail");
  const vHow = document.getElementById("view-how");
  const vAbout = document.getElementById("view-about");

  if (vHome) vHome.style.display = "none";
  if (vDetail) vDetail.style.display = "none";
  if (vHow) vHow.style.display = "none";
  if (vAbout) vAbout.style.display = "none";

  if (page === "home" || page === "services") {
    if (vHome) vHome.style.display = "block";
    if (page === "services") {
      const grid = document.getElementById("serviceGrid");
      if (grid) grid.scrollIntoView({ behavior: "smooth" });
    }
  } else if (page === "how") {
    if (vHow) vHow.style.display = "block";
  } else if (page === "about") {
    if (vAbout) vAbout.style.display = "block";
  }

  updateNav(page);
  window.scrollTo(0, 0);
}

function updateNav(page) {
  document.querySelectorAll("nav a").forEach((a) => a.classList.remove("active"));
  const activeTab = document.getElementById(`nav-${page}`);
  if (activeTab) activeTab.classList.add("active");
}

// ==========================================
// 9. INITIALIZATION
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
  setLanguage("en");
});
