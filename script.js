// ==========================================
// SEVACHECK KERALA — MAIN APPLICATION LOGIC
// ==========================================

let currentLang = "en";
let currentCategory = "all";
let currentSearchQuery = "";
let currentView = "home"; // 'home', 'services', 'how', 'about', 'detail'
let activeService = null;
let allServices = [];

// UI Translation Dictionary
const translations = {
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
    catPolice: "🛡️ Police & Public Safety",
    popularServicesHeading: "Popular Services",
    showingCount: "Showing {count} services",
    emptyStateHeading: "No matching service found.",
    emptyStateText: "Try searching for words like 'Income', 'Passport', 'Birth', or 'Licence'.",
    viewChecklistBtn: "View Checklist & Details →",
    backToHome: "← Back to all services",
    headingWho: "👥 Who May Need It",
    headingEligibility: "✅ Basic Eligibility",
    headingDocs: "📄 Documents to Prepare",
    checklistHint: "Check the boxes as you assemble your paperwork:",
    headingAdditionalDocs: "📎 Additional / Supporting Documents (If Applicable)",
    headingWhere: "📍 Where to Apply",
    headingSteps: "📋 Basic Step-by-Step Instructions",
    headingNotes: "ℹ️ Important Notes",
    openOfficialPortal: "Open Official Portal ↗",
    officialPortalUnavailable: "Official Online Portal Link Not Directly Available",
    verifiedBadge: "Verified for Kerala",
    unverifiedBadge: "Verification Pending",
    lastVerifiedPrefix: "Last verified:",
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
    howCtaBtn: "Get Started"
  },
  ml: {
    topDisclaimer: "ℹ️ സേവാചെക്ക് കേരള ഒരു സ്വതന്ത്ര വിവര സഹായി മാത്രമാണ്. വിവരങ്ങൾ എപ്പോഴും ഔദ്യോഗിക പോർട്ടലുകൾ വഴി സ്ഥിരീകരിക്കുക.",
    navHome: "ഹോം",
    navServices: "സേവനങ്ങൾ",
    navHow: "പ്രവർത്തനം",
    navAbout: "ഞങ്ങളെക്കുറിച്ച്",
    heroHeading: "അപേക്ഷിക്കുന്നതിന് മുൻപ് എന്തൊക്കെ വേണമെന്ന് അറിയുക.",
    heroSubheading: "കേരളത്തിലെ വിവിധ സർക്കാർ സേവനങ്ങൾക്കുള്ള രേഖകൾ, യോഗ്യതകൾ, അപേക്ഷാ ഘട്ടങ്ങൾ എന്നിവ ലളിതമായി അറിയാം.",
    searchPlaceholder: "ആവശ്യമായ സർവീസ് തിരയുക... (ഉദാ: വരുമാന സർട്ടിഫിക്കറ്റ്, ഡ്രൈവിംഗ് ലൈസൻസ്)",
    categorySectionHeading: "ഏത് സേവനമാണ് വേണ്ടതെന്ന് വ്യക്തമല്ലേ?",
    catAll: "എല്ലാം",
    catDocuments: "📄 രേഖകളും സർട്ടിഫിക്കറ്റുകളും",
    catId: "🪪 തിരിച്ചറിയൽ രേഖകൾ",
    catGovernment: "🏛️ സർക്കാർ & തദ്ദേശ സ്ഥാപനങ്ങൾ",
    catEducation: "🎓 വിദ്യാഭ്യാസം",
    catTravel: "🚗 യാത്രയും വാഹനങ്ങളും",
    catPolice: "🛡️ പോലീസ് & പബ്ലിക് സേഫ്റ്റി",
    popularServicesHeading: "ജനപ്രിയ സേവനങ്ങൾ",
    showingCount: "{count} സേവനങ്ങൾ ലഭ്യമാണ്",
    emptyStateHeading: "സേവനങ്ങളൊന്നും കണ്ടെത്താനായില്ല.",
    emptyStateText: "'വരുമാനം', 'പാസ്‌പോർട്ട്', 'ജനന സർട്ടിഫിക്കറ്റ്' തുടങ്ങിയ വാക്കുകൾ ഉപയോഗിച്ച് തിരയുക.",
    viewChecklistBtn: "വിശദാംശങ്ങളും രേഖകളും കാണുക →",
    backToHome: "← പ്രധാന ലിസ്റ്റിലേക്ക് മടങ്ങുക",
    headingWho: "👥 ഇത് ആർക്കൊക്കെ ആവശ്യമാണ്?",
    headingEligibility: "✅ പ്രാഥമിക യോഗ്യതകൾ",
    headingDocs: "📄 കരുതേണ്ട പ്രധാന രേഖകൾ",
    checklistHint: "ഓരോ രേഖയും കയ്യിൽ കരുതിയ ശേഷം താഴെയുള്ള ബോക്സിൽ ടിക്ക് ചെയ്യുക:",
    headingAdditionalDocs: "📎 മറ്റ് അനുബന്ധ രേഖകൾ (ബാധകമെങ്കിൽ)",
    headingWhere: "📍 എവിടെയാണ് അപേക്ഷിക്കേണ്ടത്?",
    headingSteps: "📋 അപേക്ഷിക്കേണ്ട ഘട്ടങ്ങൾ",
    headingNotes: "ℹ️ പ്രധാന നിർദ്ദേശങ്ങൾ",
    openOfficialPortal: "ഔദ്യോഗിക പോർട്ടൽ സന്ദർശിക്കുക ↗",
    officialPortalUnavailable: "ഔദ്യോഗിക ഓൺലൈൻ പോർട്ടൽ ലിങ്ക് ലഭ്യമല്ല",
    verifiedBadge: "കേരള സർക്കാർ മാനദണ്ഡപ്രകാരം പരിശോധിച്ചത്",
    unverifiedBadge: "വിവരങ്ങൾ പരിശോധനയിലാണ്",
    lastVerifiedPrefix: "അവസാനം പരിശോധിച്ചത്:",
    howHeading: "സേവാചെക്ക് കേരള എങ്ങനെ സഹായിക്കുന്നു?",
    howIntro: "സർക്കാർ ഓഫീസുകൾ പലതവണ കയറിയിറങ്ങി രേഖകൾ വിട്ടുപോയി എന്ന് തിരിച്ചറിയുന്ന ബുദ്ധിമുട്ട് ഒഴിവാക്കാം.",
    howStep1Title: "1. സർവീസ് തിരഞ്ഞെടുക്കുക",
    howStep1Desc: "നിങ്ങൾക്ക് ആവശ്യമായ സർട്ടിഫിക്കറ്റോ ലൈസൻസോ തിരഞ്ഞു കണ്ടെത്തുക.",
    howStep2Title: "2. യോഗ്യതകൾ പരിശോധിക്കുക",
    howStep2Desc: "അപേക്ഷിക്കാൻ നിങ്ങൾ യോഗ്യരാണോ എന്ന് മുൻകൂട്ടി അറിയുക.",
    howStep3Title: "3. രേഖകൾ തയ്യാറാക്കുക",
    howStep3Desc: "അക്ഷയ കേന്ദ്രത്തിലോ ഓൺലൈനായോ പോകുന്നതിന് മുൻപ് രേഖകൾ ചെക്ക്‌ലിസ്റ്റ് പ്രകാരം ടിക്ക് ചെയ്യുക.",
    howStep4Title: "4. ഔദ്യോഗിക പോർട്ടൽ സന്ദർശിക്കുക",
    howStep4Desc: "അധികൃത സർക്കാർ വെബ്‌സൈറ്റ് വഴിയോ അക്ഷയ കേന്ദ്രം വഴിയോ നേരിട്ട് അപേക്ഷിക്കുക.",
    howStep5Title: "5. അപേക്ഷ സമർപ്പിച്ച് രസീത് സൂക്ഷിക്കുക",
    howStep5Desc: "അപേക്ഷ സമർപ്പിച്ച ശേഷം ലഭിക്കുന്ന അക്നോളജ്മെന്റ് നമ്പർ ഉപയോഗിച്ച് സ്റ്റാറ്റസ് അറിയാം.",
    howCtaBtn: "സേവനങ്ങൾ കാണുക"
  }
};

// Category Name Helper Function
function getCategoryName(categoryKey, lang = currentLang) {
  const categoryNames = {
    en: {
      documents: "Documents & Certificates",
      id: "ID & Personal",
      government: "Government & Local",
      education: "Education",
      travel: "Travel & Transport",
      police: "Police & Public Safety"
    },
    ml: {
      documents: "രേഖകളും സർട്ടിഫിക്കറ്റുകളും",
      id: "തിരിച്ചറിയൽ രേഖകൾ",
      government: "സർക്കാർ & തദ്ദേശ സ്ഥാപനങ്ങൾ",
      education: "വിദ്യാഭ്യാസം",
      travel: "യാത്രയും വാഹനങ്ങളും",
      police: "പോലീസ് & പബ്ലിക് സേഫ്റ്റി"
    }
  };

  return categoryNames[lang]?.[categoryKey] || categoryKey;
}

// Initialise Application
document.addEventListener("DOMContentLoaded", function () {
  if (window.SevaRegistry && typeof window.SevaRegistry.getAll === "function") {
    allServices = window.SevaRegistry.getAll();
  } else if (Array.isArray(window.services)) {
    allServices = window.services;
  } else if (Array.isArray(window.servicesData)) {
    allServices = window.servicesData;
  } else {
    console.error("SevaCheck: No service data found in registry or globals.");
    allServices = [];
  }

  // Initial Theme Check (LocalStorage or Default Light)
  const savedTheme = localStorage.getItem("sevacheck_theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    updateThemeIcon(true);
  } else {
    document.documentElement.removeAttribute("data-theme");
    updateThemeIcon(false);
  }

  // Initial Language Render
  updateLanguageUI();
  renderServices();
  updateServiceCount(allServices.length);
});

// ==========================================
// NAVIGATION & VIEWS
// ==========================================

function navigateTo(viewName) {
  currentView = viewName;
  const views = ["home", "detail", "how", "about"];
  views.forEach((v) => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.style.display = "none";
  });

  // Nav link active class
  document.querySelectorAll("nav ul li a").forEach((a) => a.classList.remove("active"));
  const activeNav = document.getElementById(`nav-${viewName}`);
  if (activeNav) activeNav.classList.add("active");

  if (viewName === "home" || viewName === "services") {
    document.getElementById("view-home").style.display = "block";
    const navServices = document.getElementById("nav-services");
    const navHome = document.getElementById("nav-home");
    if (viewName === "services" && navServices) {
      navServices.classList.add("active");
      if (navHome) navHome.classList.remove("active");
    } else if (navHome) {
      navHome.classList.add("active");
    }
  } else {
    const target = document.getElementById(`view-${viewName}`);
    if (target) target.style.display = "block";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToHome() {
  navigateTo("home");
}

// ==========================================
// THEME SWITCHER (Dark/Light)
// ==========================================

function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("sevacheck_theme", "light");
    updateThemeIcon(false);
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("sevacheck_theme", "dark");
    updateThemeIcon(true);
  }
}

function updateThemeIcon(isDark) {
  const icon = document.getElementById("themeToggleIcon");
  if (icon) {
    icon.textContent = isDark ? "☀️" : "🌙";
  }
}

// ==========================================
// LANGUAGE SWITCHER (EN / ML)
// ==========================================

function setLanguage(lang) {
  if (lang !== "en" && lang !== "ml") return;
  currentLang = lang;

  document.getElementById("btn-lang-en").classList.toggle("active", lang === "en");
  document.getElementById("btn-lang-ml").classList.toggle("active", lang === "ml");

  updateLanguageUI();

  if (currentView === "detail" && activeService) {
    showServiceDetail(activeService.id);
  } else {
    renderServices();
  }
}

function updateLanguageUI() {
  const t = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) {
      el.setAttribute("placeholder", t[key]);
    }
  });
}

// ==========================================
// FILTERING & SEARCH
// ==========================================

function filterCategory(category, buttonEl) {
  currentCategory = category;

  document.querySelectorAll(".helper-chip").forEach((btn) => btn.classList.remove("active"));
  if (buttonEl) buttonEl.classList.add("active");

  renderServices();
}

function handleSearch() {
  const input = document.getElementById("searchInput");
  currentSearchQuery = input ? input.value.trim().toLowerCase() : "";
  renderServices();
}

function getFilteredServices() {
  return allServices.filter((s) => {
    // Category match
    const matchesCategory = currentCategory === "all" || s.category === currentCategory;

    // Search match
    if (!matchesCategory) return false;
    if (!currentSearchQuery) return true;

    const q = currentSearchQuery;
    const nameEn = s.name?.en?.toLowerCase() || "";
    const nameMl = s.name?.ml?.toLowerCase() || "";
    const sumEn = s.summary?.en?.toLowerCase() || "";
    const sumMl = s.summary?.ml?.toLowerCase() || "";
    const id = s.id?.toLowerCase() || "";
    const subCat = s.subCategory?.toLowerCase() || "";

    return (
      nameEn.includes(q) ||
      nameMl.includes(q) ||
      sumEn.includes(q) ||
      sumMl.includes(q) ||
      id.includes(q) ||
      subCat.includes(q)
    );
  });
}

// ==========================================
// RENDER SERVICE CARDS
// ==========================================

function renderServices() {
  const grid = document.getElementById("serviceGrid");
  const emptyState = document.getElementById("emptyState");
  if (!grid) return;

  const filtered = getFilteredServices();
  updateServiceCount(filtered.length);

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  const t = translations[currentLang];
  grid.innerHTML = filtered
    .map((s) => {
      const name = s.name?.[currentLang] || s.name?.en || "Service";
      const summary = s.summary?.[currentLang] || s.summary?.en || "";
      const categoryName = getCategoryName(s.category, currentLang);
      const icon = s.icon || "📄";

      return `
      <div class="service-card" onclick="showServiceDetail('${s.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' ')showServiceDetail('${s.id}')">
        <div class="card-icon">${icon}</div>
        <div class="card-category-badge">${categoryName}</div>
        <h3 class="card-title">${escapeHtml(name)}</h3>
        <p class="card-desc">${escapeHtml(summary)}</p>
        <a href="javascript:void(0)" class="card-link" onclick="event.stopPropagation(); showServiceDetail('${s.id}')">
          ${t.viewChecklistBtn}
        </a>
      </div>
    `;
    })
    .join("");
}

function updateServiceCount(count) {
  const countEl = document.getElementById("servicesCount");
  if (!countEl) return;
  const t = translations[currentLang];
  countEl.textContent = t.showingCount.replace("{count}", count);
}

// ==========================================
// SERVICE DETAIL VIEW
// ==========================================

function showServiceDetail(serviceId) {
  const service = allServices.find((s) => s.id === serviceId);
  if (!service) return;

  activeService = service;
  currentView = "detail";

  // Hide other views, show detail
  ["home", "how", "about"].forEach((v) => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.style.display = "none";
  });
  const detailView = document.getElementById("view-detail");
  if (detailView) detailView.style.display = "block";

  const t = translations[currentLang];

  // Header Details
  const titleEl = document.getElementById("detailTitle");
  const subEl = document.getElementById("detailSubtitle");
  const descEl = document.getElementById("detailDesc");
  const badgesEl = document.getElementById("detailBadges");

  const name = service.name?.[currentLang] || service.name?.en || "";
  const subName = currentLang === "en" ? service.name?.ml || "" : service.name?.en || "";
  const summary = service.summary?.[currentLang] || service.summary?.en || "";

  if (titleEl) titleEl.textContent = `${service.icon || "📄"} ${name}`;
  if (subEl) subEl.textContent = subName;
  if (descEl) descEl.textContent = summary;

  // Badges Bar
  if (badgesEl) {
    const categoryName = getCategoryName(service.category, currentLang);
    const mode = service.mode?.[currentLang] || service.mode?.en || "Official Channel";
    const verificationBadge = service.verified ? `✓ ${t.verifiedBadge}` : t.unverifiedBadge;

    badgesEl.innerHTML = `
      <span class="badge badge-category">${categoryName}</span>
      <span class="badge badge-mode">${escapeHtml(mode)}</span>
      <span class="badge badge-status">${verificationBadge}</span>
    `;
  }

  // Who Needs
  const whoEl = document.getElementById("detailWho");
  if (whoEl) whoEl.textContent = service.whoNeeds?.[currentLang] || service.whoNeeds?.en || "—";

  // Basic Eligibility
  const eligEl = document.getElementById("detailEligibility");
  if (eligEl) eligEl.textContent = service.eligibility?.[currentLang] || service.eligibility?.en || "—";

  // Interactive Checklist
  const docsContainer = document.getElementById("detailDocs");
  if (docsContainer) {
    const docList = service.documents?.[currentLang] || service.documents?.en || [];
    if (docList.length === 0) {
      docsContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.95rem;">${currentLang === "ml" ? "പ്രത്യേക രേഖകളൊന്നും നൽകിയിട്ടില്ല." : "No specific documents required."}</p>`;
    } else {
      docsContainer.innerHTML = docList
        .map(
          (doc, i) => `
        <label class="checklist-item" id="chk-label-${i}">
          <input type="checkbox" id="chk-${i}" onchange="toggleChecklistItem(${i})">
          <span>${escapeHtml(doc)}</span>
        </label>
      `
        )
        .join("");
    }
  }

  // Additional / Supporting Documents
  const addDocsSection = document.getElementById("additionalDocsSection");
  const addDocsList = document.getElementById("detailAdditionalDocs");
  const addDocs = service.additionalDocs?.[currentLang] || service.additionalDocs?.en || [];
  if (addDocs && addDocs.length > 0) {
    if (addDocsSection) addDocsSection.style.display = "block";
    if (addDocsList) {
      addDocsList.innerHTML = addDocs.map((doc) => `<li>${escapeHtml(doc)}</li>`).join("");
    }
  } else {
    if (addDocsSection) addDocsSection.style.display = "none";
  }

  // Where to Apply
  const whereEl = document.getElementById("detailWhere");
  if (whereEl) whereEl.textContent = service.whereToApply?.[currentLang] || service.whereToApply?.en || "—";

  // Step-by-Step Instructions
  const stepsList = document.getElementById("detailSteps");
  if (stepsList) {
    const steps = service.steps?.[currentLang] || service.steps?.en || [];
    if (steps.length === 0) {
      stepsList.innerHTML = `<li>${currentLang === "ml" ? "ഘട്ടങ്ങൾ നൽകിയിട്ടില്ല." : "Standard procedure applies."}</li>`;
    } else {
      stepsList.innerHTML = steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("");
    }
  }

  // Important Notes
  const notesEl = document.getElementById("detailNotes");
  if (notesEl) notesEl.textContent = service.notes?.[currentLang] || service.notes?.en || "—";

  // Official Action Button
  const btnWrapper = document.getElementById("officialBtnWrapper");
  if (btnWrapper) {
    if (service.officialUrl && service.officialUrl.startsWith("http")) {
      btnWrapper.innerHTML = `
        <a href="${service.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-official">
          ${t.openOfficialPortal}
        </a>
      `;
    } else {
      btnWrapper.innerHTML = `
        <button type="button" class="btn-official btn-disabled" disabled>
          ${t.officialPortalUnavailable}
        </button>
      `;
    }
  }

  // Last Verified Note
  const lastVerifiedEl = document.getElementById("detailLastVerified");
  if (lastVerifiedEl) {
    const dateStr = service.lastVerified || "September 2026";
    lastVerifiedEl.textContent = `${t.lastVerifiedPrefix} ${dateStr}`;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleChecklistItem(index) {
  const label = document.getElementById(`chk-label-${index}`);
  const input = document.getElementById(`chk-${index}`);
  if (label && input) {
    label.classList.toggle("checked", input.checked);
  }
}

// Utility: HTML Escape
function escapeHtml(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
