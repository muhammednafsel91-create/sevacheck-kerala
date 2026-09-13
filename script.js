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
    // Card & Detail UI strings
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
    // Card & Detail UI strings
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
// 3. LANGUAGE SWITCHING
// ==========================================
function setLanguage(lang) {
  if (lang !== "en" && lang !== "ml") return;
  currentLang = lang;

  // Toggle active class on language buttons
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

  // Update static UI elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[currentLang] && i18n[currentLang][key]) {
      el.textContent = i18n[currentLang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[currentLang] && i18n[currentLang][key]) {
      el.placeholder = i18n[currentLang][key];
    }
  });

  // Re-run search/filter to update service grid
  handleSearch();

  // If service detail view is active, update its contents
  const detailView = document.getElementById("view-detail");
  if (activeServiceId && detailView && detailView.style.display === "block") {
    openService(activeServiceId);
  }
}

// ==========================================
// 4. SERVICE CARDS RENDERING
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

    // In Malayalam mode: Malayalam name is primary, English name sits underneath.
    // In English mode: English name is primary, Malayalam name sits underneath.
    const primaryTitle = currentLang === "ml"
      ? (item.name.ml || item.name.en)
      : (item.name.en || item.name.ml);

    const secondaryTitle = currentLang === "ml"
      ? item.name.en
      : item.name.ml;

    const summaryText = (item.summary && item.summary[currentLang])
      ? item.summary[currentLang]
      : (item.summary ? item.summary.en : "");

    const modeText = (item.mode && item.mode[currentLang])
      ? item.mode[currentLang]
      : (item.mode ? item.mode.en : "");

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
// 5. SEARCH & CATEGORY FILTERING
// ==========================================
function handleSearch() {
  const searchInput = document.getElementById("searchInput");
  const q = searchInput ? searchInput.value.toLowerCase().trim() : "";

  let filtered = (typeof servicesData !== "undefined") ? servicesData : [];

  // Filter by category
  if (currentCategory !== "all") {
    filtered = filtered.filter((s) => s.category === currentCategory);
  }

  // Bilingual Search across English and Malayalam
  if (q) {
    filtered = filtered.filter((s) => {
      const nameEn = (s.name && s.name.en) ? s.name.en.toLowerCase() : "";
      const nameMl = (s.name && s.name.ml) ? s.name.ml.toLowerCase() : "";
      const summaryEn = (s.summary && s.summary.en) ? s.summary.en.toLowerCase() : "";
      const summaryMl = (s.summary && s.summary.ml) ? s.summary.ml.toLowerCase() : "";
      const whoEn = (s.whoNeeds && s.whoNeeds.en) ? s.whoNeeds.en.toLowerCase() : "";
      const whoMl = (s.whoNeeds && s.whoNeeds.ml) ? s.whoNeeds.ml.toLowerCase() : "";

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

  // Update active state on category chips
  const chips = document.querySelectorAll(".helper-chip");
  chips.forEach((c) => c.classList.remove("active"));
  if (btn) {
    btn.classList.add("active");
  } else {
    const matchingBtn = document.getElementById(`cat-${cat}`);
    if (matchingBtn) matchingBtn.classList.add("active");
  }

  // Clear search input on category click
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  handleSearch();
}

// ==========================================
// 6. SERVICE DETAIL VIEW
// ==========================================
function openService(id) {
  if (typeof servicesData === "undefined") return;
  const s = servicesData.find((item) => item.id === id);
  if (!s) return;

  activeServiceId = id;

  // View toggles
  document.getElementById("view-home").style.display = "none";
  document.getElementById("view-how").style.display = "none";
  document.getElementById("view-about").style.display = "none";
  document.getElementById("view-detail").style.display = "block";

  // Localized Titles
  const primaryTitle = currentLang === "ml"
    ? (s.name.ml || s.name.en)
    : (s.name.en || s.name.ml);

  const secondaryTitle = currentLang === "ml"
    ? s.name.en
    : s.name.ml;

  document.getElementById("detailTitle").textContent = primaryTitle;

  const subtitleEl = document.getElementById("detailSubtitle");
  if (subtitleEl) {
    subtitleEl.textContent = secondaryTitle;
    subtitleEl.style.display = secondaryTitle ? "block" : "none";
  }

  // Description
  document.getElementById("detailDesc").textContent = (s.summary && s.summary[currentLang])
    ? s.summary[currentLang]
    : (s.summary ? s.summary.en : "");

  // Badges
  const badgesContainer = document.getElementById("detailBadges");
  if (badgesContainer) {
    const categoryLabel = (categoryMap[currentLang] && categoryMap[currentLang][s.category])
      ? categoryMap[currentLang][s.category]
      : s.category.toUpperCase();

    const modeLabel = (s.mode && s.mode[currentLang])
      ? s.mode[currentLang]
      : (s.mode ? s.mode.en : "");

    badgesContainer.innerHTML = `
      <span class="tag-badge">📍 ${i18n[currentLang].badgeMode}: ${modeLabel}</span>
      <span class="tag-badge">🏷️ ${i18n[currentLang].badgeCategory}: ${categoryLabel}</span>
    `;
  }

  // Sections
  document.getElementById("detailWho").textContent = (s.whoNeeds && s.whoNeeds[currentLang])
    ? s.whoNeeds[currentLang]
    : (s.whoNeeds ? s.whoNeeds.en : "");

  document.getElementById("detailEligibility").textContent = (s.eligibility && s.eligibility[currentLang])
    ? s.eligibility[currentLang]
    : (s.eligibility ? s.eligibility.en : "");

  document.getElementById("detailWhere").textContent = (s.whereToApply && s.whereToApply[currentLang])
    ? s.whereToApply[currentLang]
    : (s.whereToApply ? s.whereToApply.en : "");

  document.getElementById("detailNotes").textContent = (s.notes && s.notes[currentLang])
    ? s.notes[currentLang]
    : (s.notes ? s.notes.en : "");

  const lastVerifiedEl = document.getElementById("detailLastVerified");
  if (lastVerifiedEl) {
    lastVerifiedEl.textContent = `${i18n[currentLang].verifiedOn} ${s.lastVerified || ""}`;
  }

  // Interactive Checklist (Primary Documents)
  const docsContainer = document.getElementById("detailDocs");
  docsContainer.innerHTML = "";

  const docList = (s.documents && s.documents[currentLang])
    ? s.documents[currentLang]
    : (s.documents ? s.documents.en : []);

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

  // Additional Supporting Documents
  const addSection = document.getElementById("additionalDocsSection");
  const addList = document.getElementById("detailAdditionalDocs");
  const addDocsList = (s.additionalDocs && s.additionalDocs[currentLang])
    ? s.additionalDocs[currentLang]
    : (s.additionalDocs ? s.additionalDocs.en : []);

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

  // Step-by-Step Instructions
  const stepsContainer = document.getElementById("detailSteps");
  stepsContainer.innerHTML = "";

  const stepsList = (s.steps && s.steps[currentLang])
    ? s.steps[currentLang]
    : (s.steps ? s.steps.en : []);

  stepsList.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsContainer.appendChild(li);
  });

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
  document.getElementById("view-detail").style.display = "none";
  document.getElementById("view-how").style.display = "none";
  document.getElementById("view-about").style.display = "none";
  document.getElementById("view-home").style.display = "block";
  updateNav("home");
  window.scrollTo(0, 0);
}

// ==========================================
// 7. SITE NAVIGATION
// ==========================================
function navigateTo(page) {
  activeServiceId = null;
  const vHome = document.getElementById("view-home");
  const vDetail = document.getElementById("view-detail");
  const vHow = document.getElementById("view-how");
  const vAbout = document.getElementById("view-about");

  vHome.style.display = "none";
  vDetail.style.display = "none";
  vHow.style.display = "none";
  vAbout.style.display = "none";

  if (page === "home" || page === "services") {
    vHome.style.display = "block";
    if (page === "services") {
      const grid = document.getElementById("serviceGrid");
      if (grid) grid.scrollIntoView({ behavior: "smooth" });
    }
  } else if (page === "how") {
    vHow.style.display = "block";
  } else if (page === "about") {
    vAbout.style.display = "block";
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
// 8. INITIALIZATION
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
  setLanguage("en");
});
