// ==========================================
// SEVACHECK KERALA — MAIN APPLICATION LOGIC
// ==========================================

let currentLang = "en";
let currentCategory = "all";
let currentSubcategory = null;
let currentChildSubcategory = null;
let currentSearchQuery = "";
let currentView = "home"; // 'home', 'services', 'how', 'about', 'detail'
let activeService = null;
let allServices = [];

// Bilingual Subcategories Definition for "Other Services"
const subcategoryMetadata = [
  {
    slug: "farmer-agri",
    icon: "🌾",
    name: {
      en: "Farmer & Agriculture",
      ml: "കർഷക സേവനങ്ങൾ & കൃഷി"
    },
    count: 5
  },
  {
    slug: "animal-husbandry",
    icon: "🐄",
    name: {
      en: "Animal Husbandry",
      ml: "മൃഗസംരക്ഷണം & ക്ഷീരവികസനം"
    },
    count: 3
  },
  {
    slug: "fisheries",
    icon: "🐟",
    name: {
      en: "Fisheries",
      ml: "മത്സ്യബന്ധനം & തീരദേശ വികസനം"
    },
    count: 3
  },
  {
    slug: "building-construction",
    icon: "🏗️",
    name: {
      en: "Building & Construction",
      ml: "കെട്ടിട നിർമ്മാണാനുമതി & സുരക്ഷ"
    },
    count: 2
  },
  {
    slug: "industry-business",
    icon: "🏭",
    name: {
      en: "Industry & Business",
      ml: "വ്യവസായം & സംരംഭകത്വം"
    },
    count: 3
  },
  {
    slug: "cooperative",
    icon: "🤝",
    name: {
      en: "Cooperative",
      ml: "സഹകരണ മേഖല"
    },
    count: 2
  }
];

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
    catPolice: "🛡 Police & Public Safety",
    catEmployment: "💼 Employment & Welfare",
    catNorka: "✈️ NORKA / Pravasi",
    catOther: "📦 Other Services",
    popularServicesHeading: "Popular Services",
    showingCount: "Showing {count} services",
    subcategoriesCount: "Subcategories",
    backToSubcategories: "← Back to Subcategories",
    backToUniversities: "← Back to Universities",
    servicesSuffix: "services",
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
    headingInstitutionServices: "🏛️ Institution Services & Portals",
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
    topDisclaimer: "ℹ സേവാചെക്ക് കേരള ഒരു സ്വതന്ത്ര വിവര സഹായി മാത്രമാണ്. വിവരങ്ങൾ എപ്പോഴും ഔദ്യോഗിക പോർട്ടലുകൾ വഴി സ്ഥിരീകരിക്കുക.",
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
    catEmployment: "💼 തൊഴിലും ക്ഷേമവും",
    catNorka: "✈️ നോർക്ക / പ്രവാസി സേവനങ്ങൾ",
    catOther: "📦 മറ്റ് സേവനങ്ങൾ",
    popularServicesHeading: "ജനപ്രിയ സേവനങ്ങൾ",
    showingCount: "{count} സേവനങ്ങൾ ലഭ്യമാണ്",
    subcategoriesCount: "ഉപവിഭാഗങ്ങൾ ലഭ്യമാണ്",
    backToSubcategories: "← ഉപവിഭാഗങ്ങളിലേക്ക് മടങ്ങുക",
    backToUniversities: "← തിരികെ മടങ്ങുക",
    servicesSuffix: "സേവനങ്ങൾ",
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
    headingInstitutionServices: "🏛️ സ്ഥാപന സേവനങ്ങളും പോർട്ടലുകളും",
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
      police: "Police & Public Safety",
      employment: "Employment & Welfare",
      norka: "NORKA / Pravasi",
      other: "Other Services"
    },
    ml: {
      documents: "രേഖകളും സർട്ടിഫിക്കറ്റുകളും",
      id: "തിരിച്ചറിയൽ രേഖകൾ",
      government: "സർക്കാർ & തദ്ദേശ സ്ഥാപനങ്ങൾ",
      education: "വിദ്യാഭ്യാസം",
      travel: "യാത്രയും വാഹനങ്ങളും",
      police: "പോലീസ് & പബ്ലിക് സേഫ്റ്റി",
      employment: "തൊഴിലും ക്ഷേമവും",
      norka: "നോർക്ക / പ്രവാസി സേവനങ്ങൾ",
      other: "മറ്റ് സേവനങ്ങൾ"
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

  // Handle Clean URL Routing on Startup (Direct URL or 404.html Redirect via sessionStorage)
  handleInitialRouting();

  // Handle Browser Back / Forward (popstate)
  window.addEventListener("popstate", function () {
    handleUrlRouting(window.location.pathname, false);
  });
});

// ==========================================
// NAVIGATION & VIEWS
// ==========================================

function navigateTo(viewName, updateHistory = true) {
  currentView = viewName;
  const views = ["home", "detail", "how", "about"];
  views.forEach((v) => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.style.display = "none";
  });

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
    if (updateHistory) {
      history.pushState(null, "", "/");
    }
  } else {
    const target = document.getElementById(`view-${viewName}`);
    if (target) target.style.display = "block";
    if (updateHistory) {
      history.pushState(null, "", `/${viewName}`);
    }
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToHome() {
  navigateTo("home", true);
}

// ==========================================
// CLEAN URL ROUTING & HISTORY MANAGEMENT
// ==========================================

function handleInitialRouting() {
  let targetPath = sessionStorage.getItem("seva_redirect_path");
  if (targetPath) {
    sessionStorage.removeItem("seva_redirect_path");
  } else {
    targetPath = window.location.pathname;
  }

  handleUrlRouting(targetPath, false);
}

function handleUrlRouting(pathname, pushHistory = false) {
  const match = pathname.match(/^\/services\/([a-zA-Z0-9-_]+)\/?$/);
  
  if (match) {
    const serviceId = match[1];
    const service = allServices.find((s) => s.id === serviceId);
    if (service) {
      showServiceDetail(serviceId, pushHistory);
      return;
    } else {
      navigateTo("home", pushHistory);
      return;
    }
  }

  if (pathname === "/how" || pathname === "/how-it-works") {
    navigateTo("how", pushHistory);
  } else if (pathname === "/about") {
    navigateTo("about", pushHistory);
  } else {
    navigateTo("home", pushHistory);
  }
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

  const btnEn = document.getElementById("btn-lang-en");
  const btnMl = document.getElementById("btn-lang-ml");
  if (btnEn) btnEn.classList.toggle("active", lang === "en");
  if (btnMl) btnMl.classList.toggle("active", lang === "ml");

  updateLanguageUI();

  if (currentView === "detail" && activeService) {
    showServiceDetail(activeService.id, false);
  } else {
    if (currentCategory === "other" && currentSubcategory === null && !currentSearchQuery) {
      renderSubcategories();
    } else if (currentCategory === "education" && currentSubcategory === null && !currentSearchQuery) {
      renderEducationSubcategories();
    } else if (currentCategory === "education" && (currentSubcategory === "universities" || currentSubcategory === "institutions") && currentChildSubcategory === null && !currentSearchQuery) {
      renderEducationChildSubcategories(currentSubcategory);
    } else {
      renderServices();
    }
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
  currentSubcategory = null;
  currentChildSubcategory = null;

  document.querySelectorAll(".helper-chip").forEach((btn) => btn.classList.remove("active"));
  if (buttonEl) buttonEl.classList.add("active");

  const subcatContainer = document.getElementById("subcategoryContainer");
  const grid = document.getElementById("serviceGrid");

  if (currentCategory === "other" && !currentSearchQuery) {
    renderSubcategories();
  } else if (currentCategory === "education" && !currentSearchQuery) {
    renderEducationSubcategories();
  } else {
    if (subcatContainer) subcatContainer.style.display = "none";
    if (grid) grid.style.display = "grid";
    renderServices();
  }
}

function handleSearch() {
  const input = document.getElementById("searchInput");
  currentSearchQuery = input ? input.value.trim().toLowerCase() : "";

  const subcatContainer = document.getElementById("subcategoryContainer");
  const grid = document.getElementById("serviceGrid");

  if (currentSearchQuery) {
    if (subcatContainer) subcatContainer.style.display = "none";
    if (grid) grid.style.display = "grid";
    renderServices();
  } else {
    if (currentCategory === "other" && currentSubcategory === null) {
      renderSubcategories();
    } else if (currentCategory === "education" && currentSubcategory === null) {
      renderEducationSubcategories();
    } else if (currentCategory === "education" && (currentSubcategory === "universities" || currentSubcategory === "institutions") && currentChildSubcategory === null) {
      renderEducationChildSubcategories(currentSubcategory);
    } else {
      renderServices();
    }
  }
}

function getFilteredServices() {
  const targetCategory = (currentCategory === "employment-welfare") ? "employment" : currentCategory;

  return allServices.filter((s) => {
    if (currentCategory === "other" && currentSubcategory !== null && !currentSearchQuery) {
      return s.category === "other" && s.subcategory === currentSubcategory;
    }

    if (currentCategory === "education" && !currentSearchQuery) {
      const isEdu = s.category === "education" || s.relatedCategory === "education" || s.secondaryCategory === "education";
      if (!isEdu) return false;

      if (currentChildSubcategory !== null) {
        if (currentSubcategory === "universities") {
          return s.subcategory === currentChildSubcategory;
        }
        if (currentSubcategory === "institutions") {
          return s.subcategory === "institutions" && s.institutionCategory === currentChildSubcategory;
        }
        return s.subcategory === currentChildSubcategory;
      }
      if (currentSubcategory !== null) {
        if (currentSubcategory === "universities") {
          return s.subcategory === "universities" || (s.subcategory && s.subcategory.startsWith("univ-"));
        }
        if (currentSubcategory === "institutions") {
          return s.subcategory === "institutions";
        }
        return s.subcategory === currentSubcategory;
      }
      // At Education root level: hide individual service cards beneath subcategory cards
      return false;
    }

    const matchesCategory =
      targetCategory === "all" ||
      s.category === targetCategory ||
      (s.relatedCategory && s.relatedCategory === targetCategory);

    if (!matchesCategory) return false;
    if (!currentSearchQuery) return true;

    const q = currentSearchQuery;
    const nameEn = s.name?.en?.toLowerCase() || "";
    const nameMl = s.name?.ml?.toLowerCase() || "";
    const sumEn = s.summary?.en?.toLowerCase() || "";
    const sumMl = s.summary?.ml?.toLowerCase() || "";
    const id = s.id?.toLowerCase() || "";
    const subCat = (s.subcategory || s.subCategory || "")?.toLowerCase();

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
// OTHER SERVICES: SUBCATEGORY CONTROLLER
// ==========================================

function renderSubcategories() {
  const subcatContainer = document.getElementById("subcategoryContainer");
  const grid = document.getElementById("serviceGrid");
  const emptyState = document.getElementById("emptyState");
  const countEl = document.getElementById("servicesCount");
  const t = translations[currentLang];

  if (emptyState) emptyState.style.display = "none";
  if (grid) {
    grid.innerHTML = "";
    grid.style.display = "none";
  }

  if (countEl) {
    countEl.textContent = `6 ${t.subcategoriesCount}`;
  }

  if (!subcatContainer) return;
  subcatContainer.style.display = "grid";

  subcatContainer.innerHTML = subcategoryMetadata
    .map((sub) => {
      const title = sub.name[currentLang] || sub.name.en;
      return `
        <div class="subcategory-card" onclick="selectSubcategory('${sub.slug}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' ')selectSubcategory('${sub.slug}')">
          <div class="subcategory-card-icon">${sub.icon}</div>
          <div class="subcategory-card-content">
            <h4 class="subcategory-card-title">${escapeHtml(title)}</h4>
            <span class="subcategory-card-count">${sub.count} ${t.servicesSuffix}</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function selectSubcategory(slug) {
  currentSubcategory = slug;
  const subcatContainer = document.getElementById("subcategoryContainer");
  const grid = document.getElementById("serviceGrid");

  if (subcatContainer) subcatContainer.style.display = "none";
  if (grid) grid.style.display = "grid";

  renderServices();
}

function resetSubcategory() {
  currentSubcategory = null;
  renderSubcategories();
}

// ==========================================
// EDUCATION SERVICES: SUBCATEGORY CONTROLLER
// ==========================================

function getEducationSubcategories() {
  if (window.CATEGORIES_CONFIG && window.CATEGORIES_CONFIG.education && window.CATEGORIES_CONFIG.education.subcategories) {
    let subcats = [...window.CATEGORIES_CONFIG.education.subcategories];
    let instSub = subcats.find(s => s.id === "institutions");
    if (instSub && (!instSub.children || instSub.children.length === 0)) {
      instSub.children = [
        { id: "IITs", icon: "🏛️", name: "IITs", nameEn: "IITs" },
        { id: "IISc & IISERs", icon: "🏛️", name: "IISc & IISERs", nameEn: "IISc & IISERs" },
        { id: "NITs", icon: "🏛️", name: "NITs", nameEn: "NITs" },
        { id: "IIMs", icon: "🏛️", name: "IIMs", nameEn: "IIMs" },
        { id: "Specialized Institutions", icon: "🏛️", name: "Specialized Institutions", nameEn: "Specialized Institutions" }
      ];
    }
    return subcats;
  }
  return [];
}

function renderEducationSubcategories() {
  const subcatContainer = document.getElementById("subcategoryContainer");
  const grid = document.getElementById("serviceGrid");
  const emptyState = document.getElementById("emptyState");
  const countEl = document.getElementById("servicesCount");
  const t = translations[currentLang];

  if (emptyState) emptyState.style.display = "none";
  if (grid) {
    grid.innerHTML = "";
    grid.style.display = "none";
  }

  const subcats = getEducationSubcategories();
  if (countEl) {
    countEl.textContent = `${subcats.length} ${t.subcategoriesCount}`;
  }

  if (subcatContainer) {
    subcatContainer.style.display = "grid";
    subcatContainer.innerHTML = subcats
      .map((sub) => {
        const title = (currentLang === "ml" ? sub.name : sub.nameEn) || sub.name;
        const count = allServices.filter(s => {
          const isEdu = s.category === "education" || s.relatedCategory === "education" || s.secondaryCategory === "education";
          if (!isEdu) return false;
          if (sub.id === "universities") {
            return s.subcategory === "universities" || (s.subcategory && s.subcategory.startsWith("univ-"));
          }
          if (sub.id === "institutions") {
            return s.subcategory === "institutions";
          }
          return s.subcategory === sub.id;
        }).length;

        return `
          <div class="subcategory-card" onclick="selectEducationSubcategory('${sub.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' ')selectEducationSubcategory('${sub.id}')">
            <div class="subcategory-card-icon">${sub.icon}</div>
            <div class="subcategory-card-content">
              <h4 class="subcategory-card-title">${escapeHtml(title)}</h4>
              <span class="subcategory-card-count">${count} ${t.servicesSuffix}</span>
            </div>
          </div>
        `;
      })
      .join("");
  }
}

function selectEducationSubcategory(subcatId) {
  currentSubcategory = subcatId;
  currentChildSubcategory = null;

  const subcatContainer = document.getElementById("subcategoryContainer");
  const grid = document.getElementById("serviceGrid");

  if (subcatId === "universities" || subcatId === "institutions") {
    renderEducationChildSubcategories(subcatId);
  } else {
    if (subcatContainer) subcatContainer.style.display = "none";
    if (grid) grid.style.display = "grid";
    renderServices();
  }
}

function renderEducationChildSubcategories(subcatId) {
  const subcatContainer = document.getElementById("subcategoryContainer");
  const grid = document.getElementById("serviceGrid");
  const emptyState = document.getElementById("emptyState");
  const countEl = document.getElementById("servicesCount");
  const t = translations[currentLang];

  if (emptyState) emptyState.style.display = "none";
  if (grid) {
    grid.innerHTML = "";
    grid.style.display = "none";
  }

  const subcats = getEducationSubcategories();
  const parent = subcats.find(s => s.id === subcatId);
  const children = parent?.children || [];

  if (countEl) {
    countEl.textContent = `${children.length} ${t.subcategoriesCount}`;
  }

  if (subcatContainer) {
    subcatContainer.style.display = "grid";
    
    let defaultDesc = currentLang === "ml"
      ? "കേരളത്തിലെയും ഇന്ത്യയിലെയും ഉന്നത വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളും സേവനങ്ങളും ഇവിടെ കണ്ടെത്താം."
      : "Find education institutions, admissions, and student services.";
      
    let parentTitle = currentLang === "ml" ? parent.name : parent.nameEn;

    let breadcrumb = `
      <div class="subcat-breadcrumb-bar" style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: stretch; gap: 0.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; flex-wrap: wrap;">
          <span class="subcat-breadcrumb-title">${parent.icon} ${escapeHtml(parentTitle)}</span>
          <button type="button" class="subcat-back-btn" onclick="resetEducationSubcategory()">${t.backToSubcategories}</button>
        </div>
        <p class="subcat-breadcrumb-desc" style="margin: 0; font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; overflow-wrap: break-word;">${defaultDesc}</p>
      </div>
    `;

    let cards = children.map(child => {
      const title = (currentLang === "ml" ? child.name : child.nameEn) || child.name;
      const count = allServices.filter(s => {
        const isEdu = s.category === "education" || s.relatedCategory === "education" || s.secondaryCategory === "education";
        if (!isEdu) return false;
        if (subcatId === "universities") {
          return s.subcategory === child.id;
        }
        if (subcatId === "institutions") {
          return s.subcategory === "institutions" && s.institutionCategory === child.id;
        }
        return false;
      }).length;

      return `
        <div class="subcategory-card" onclick="selectEducationChild('${subcatId}', '${child.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' ')selectEducationChild('${subcatId}', '${child.id}')">
          <div class="subcategory-card-icon">${child.icon}</div>
          <div class="subcategory-card-content">
            <h4 class="subcategory-card-title">${escapeHtml(title)}</h4>
            <span class="subcategory-card-count">${count} ${t.servicesSuffix}</span>
          </div>
        </div>
      `;
    }).join("");

    subcatContainer.innerHTML = breadcrumb + cards;
  }
}

function selectEducationChild(subcatId, childId) {
  currentChildSubcategory = childId;
  const subcatContainer = document.getElementById("subcategoryContainer");
  const grid = document.getElementById("serviceGrid");

  if (subcatContainer) subcatContainer.style.display = "none";
  if (grid) grid.style.display = "grid";

  renderServices();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function resetEducationSubcategory() {
  currentSubcategory = null;
  currentChildSubcategory = null;
  renderEducationSubcategories();
}

function resetEducationChild(subcatId) {
  currentChildSubcategory = null;
  renderEducationChildSubcategories(subcatId);
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
  let breadcrumbHtml = "";

  if (currentCategory === "other" && currentSubcategory !== null && !currentSearchQuery) {
    const activeSubMeta = subcategoryMetadata.find((m) => m.slug === currentSubcategory);
    const subTitle = activeSubMeta ? (activeSubMeta.name[currentLang] || activeSubMeta.name.en) : "";
    const subIcon = activeSubMeta ? activeSubMeta.icon : "📦";

    breadcrumbHtml = `
      <div class="subcat-breadcrumb-bar" style="grid-column: 1 / -1;">
        <span class="subcat-breadcrumb-title">${subIcon} ${escapeHtml(subTitle)}</span>
        <button type="button" class="subcat-back-btn" onclick="resetSubcategory()">${t.backToSubcategories}</button>
      </div>
    `;
  } else if (currentCategory === "education" && !currentSearchQuery) {
    const subcats = getEducationSubcategories();
    if (currentChildSubcategory !== null) {
      const parent = subcats.find(s => s.id === currentSubcategory);
      const child = parent?.children?.find(c => c.id === currentChildSubcategory);
      const title = child ? ((currentLang === "ml" ? child.name : child.nameEn) || child.name) : "";
      const icon = child ? child.icon : "🎓";

      breadcrumbHtml = `
        <div class="subcat-breadcrumb-bar" style="grid-column: 1 / -1;">
          <span class="subcat-breadcrumb-title">${icon} ${escapeHtml(title)}</span>
          <button type="button" class="subcat-back-btn" onclick="resetEducationChild('${currentSubcategory}')">${t.backToUniversities}</button>
        </div>
      `;
    } else if (currentSubcategory !== null) {
      const activeSub = subcats.find(s => s.id === currentSubcategory);
      const title = activeSub ? ((currentLang === "ml" ? activeSub.name : activeSub.nameEn) || activeSub.name) : "";
      const icon = activeSub ? activeSub.icon : "🎓";

      breadcrumbHtml = `
        <div class="subcat-breadcrumb-bar" style="grid-column: 1 / -1;">
          <span class="subcat-breadcrumb-title">${icon} ${escapeHtml(title)}</span>
          <button type="button" class="subcat-back-btn" onclick="resetEducationSubcategory()">${t.backToSubcategories}</button>
        </div>
      `;
    }
  }

  const cardsHtml = filtered
    .map((s) => {
      const name = s.name?.[currentLang] || s.name?.en || "Service";
      const summary = s.summary?.[currentLang] || s.summary?.en || "";
      const categoryName = getCategoryName(s.category, currentLang);
      const icon = s.icon || "📄";
      const goldClass = s.cardVariant === "special" ? " service-card--gold" : "";

      return `
      <div class="service-card${goldClass}" onclick="showServiceDetail('${s.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' ')showServiceDetail('${s.id}')">
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

  grid.innerHTML = breadcrumbHtml + cardsHtml;
}

function updateServiceCount(count) {
  const countEl = document.getElementById("servicesCount");
  if (!countEl) return;
  const t = translations[currentLang];
  countEl.textContent = t.showingCount.replace("{count}", count);
}

// ==========================================
// SERVICE DETAIL VIEW (SHARED INSTITUTION & SERVICE RENDERER)
// ==========================================

function showServiceDetail(serviceId, updateHistory = true) {
  const service = allServices.find((s) => s.id === serviceId);
  if (!service) return;

  activeService = service;
  currentView = "detail";

  ["home", "how", "about"].forEach((v) => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.style.display = "none";
  });
  const detailView = document.getElementById("view-detail");
  if (detailView) detailView.style.display = "block";

  if (updateHistory) {
    history.pushState(null, "", `/services/${serviceId}`);
  }

  const t = translations[currentLang];
  const isInstitution = service.subcategory === "institutions" || Boolean(service.institutionCategory);

  const titleEl = document.getElementById("detailTitle");
  const subEl = document.getElementById("detailSubtitle");
  const descEl = document.getElementById("detailDesc");
  const badgesEl = document.getElementById("detailBadges");

  const name = service.name?.[currentLang] || service.name?.en || "";
  const subName = currentLang === "en" ? service.name?.ml || "" : service.name?.en || "";
  const summary = service.summary?.[currentLang] || service.summary?.en || service.description?.[currentLang] || "";

  if (titleEl) titleEl.textContent = `${service.icon || "📄"} ${name}`;
  if (subEl) {
    let subtext = subName;
    if (isInstitution && service.acronym) {
      subtext = subtext ? `[${service.acronym}] ${subtext}` : `[${service.acronym}]`;
    }
    subEl.textContent = subtext;
  }
  if (descEl) descEl.textContent = summary;

  if (badgesEl) {
    const categoryName = getCategoryName(service.category, currentLang);
    const mode = service.mode?.[currentLang] || service.mode?.en || (service.officialUrl ? "Official Online Portal" : "In-Person / Office");
    const isVerified = service.verified !== false;
    const verificationBadge = isVerified ? `✓ ${t.verifiedBadge}` : t.unverifiedBadge;

    let institutionMetaBadges = "";
    if (isInstitution) {
      if (service.institutionCategory) {
        institutionMetaBadges += `<span class="badge badge-category">${escapeHtml(service.institutionCategory)}</span>`;
      }
      if (service.institutionType) {
        institutionMetaBadges += `<span class="badge badge-mode">${escapeHtml(service.institutionType)}</span>`;
      }
      if (service.location) {
        institutionMetaBadges += `<span class="badge badge-mode">📍 ${escapeHtml(service.location)}</span>`;
      }
    }

    badgesEl.innerHTML = `
      <span class="badge badge-category">${escapeHtml(categoryName)}</span>
      ${institutionMetaBadges}
      <span class="badge badge-mode">${escapeHtml(mode)}</span>
      <span class="badge badge-status">${escapeHtml(verificationBadge)}</span>
    `;
  }

  // Who May Need It
  const whoEl = document.getElementById("detailWho");
  const whoSection = whoEl?.closest(".detail-section") || whoEl?.parentElement;
  if (whoEl) {
    const whoContent = service.whoNeeds?.[currentLang] || service.whoNeeds?.en || service.description?.[currentLang] || service.description?.en || (!isInstitution ? service.summary?.[currentLang] : "") || "";
    if (whoContent) {
      whoEl.textContent = whoContent;
      if (whoSection) whoSection.style.display = "block";
    } else if (isInstitution) {
      if (whoSection) whoSection.style.display = "none";
    } else {
      whoEl.textContent = "—";
      if (whoSection) whoSection.style.display = "block";
    }
  }

  // Basic Eligibility
  const eligEl = document.getElementById("detailEligibility");
  const eligSection = eligEl?.closest(".detail-section") || eligEl?.parentElement;
  if (eligEl) {
    const rawElig = service.eligibility?.[currentLang] || service.eligibility?.en || service.eligibility;
    if (Array.isArray(rawElig) && rawElig.length > 0) {
      eligEl.innerHTML = `<ul style="margin: 0; padding-left: 1.2rem;">${rawElig.map(e => `<li>${escapeHtml(e)}</li>`).join("")}</ul>`;
      if (eligSection) eligSection.style.display = "block";
    } else if (typeof rawElig === "string" && rawElig.trim() !== "") {
      eligEl.textContent = rawElig;
      if (eligSection) eligSection.style.display = "block";
    } else if (rawElig && typeof rawElig === "object") {
      const eligText = rawElig[currentLang] || rawElig.en || "";
      if (eligText) {
        eligEl.textContent = eligText;
        if (eligSection) eligSection.style.display = "block";
      } else if (isInstitution) {
        if (eligSection) eligSection.style.display = "none";
      } else {
        eligEl.textContent = "—";
        if (eligSection) eligSection.style.display = "block";
      }
    } else if (isInstitution) {
      if (eligSection) eligSection.style.display = "none";
    } else {
      eligEl.textContent = "—";
      if (eligSection) eligSection.style.display = "block";
    }
  }

  // Documents Section (Hide for Institutions when empty)
  const docsContainer = document.getElementById("detailDocs");
  const docsSection = docsContainer?.closest(".detail-section") || docsContainer?.parentElement;
  if (docsContainer) {
    const docList = service.documents?.[currentLang] || service.documents?.en || [];
    if (isInstitution && (!Array.isArray(docList) || docList.length === 0)) {
      if (docsSection) docsSection.style.display = "none";
    } else if (!Array.isArray(docList) || docList.length === 0) {
      docsContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.95rem;">${currentLang === "ml" ? "പ്രത്യേക രേഖകളൊന്നും നൽകിയിട്ടില്ല." : "No specific documents required."}</p>`;
      if (docsSection) docsSection.style.display = "block";
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
      if (docsSection) docsSection.style.display = "block";
    }
  }

  // Additional Supporting Documents
  const addDocsSection = document.getElementById("additionalDocsSection");
  const addDocsList = document.getElementById("detailAdditionalDocs");
  const addDocs = service.additionalDocs?.[currentLang] || service.additionalDocs?.en || [];
  if (Array.isArray(addDocs) && addDocs.length > 0) {
    if (addDocsSection) addDocsSection.style.display = "block";
    if (addDocsList) {
      addDocsList.innerHTML = addDocs.map((doc) => `<li>${escapeHtml(doc)}</li>`).join("");
    }
  } else {
    if (addDocsSection) addDocsSection.style.display = "none";
  }

  // Where to Apply (Hide for Institutions when empty)
  const whereEl = document.getElementById("detailWhere");
  const whereSection = whereEl?.closest(".detail-section") || whereEl?.parentElement;
  if (whereEl) {
    const whereContent = service.whereToApply?.[currentLang] || service.whereToApply?.en || service.howToApply?.[currentLang] || service.howToApply?.en || "";
    if (isInstitution && !whereContent) {
      if (whereSection) whereSection.style.display = "none";
    } else {
      whereEl.textContent = whereContent || "—";
      if (whereSection) whereSection.style.display = "block";
    }
  }

  // Basic Step-by-Step Instructions (Hide for Institutions when empty)
  const stepsList = document.getElementById("detailSteps");
  const stepsSection = stepsList?.closest(".detail-section") || stepsList?.parentElement;
  if (stepsList) {
    const steps = service.steps?.[currentLang] || service.steps?.en || [];
    if (isInstitution && (!Array.isArray(steps) || steps.length === 0)) {
      if (stepsSection) stepsSection.style.display = "none";
    } else if (!Array.isArray(steps) || steps.length === 0) {
      stepsList.innerHTML = `<li>${currentLang === "ml" ? "ഘട്ടങ്ങൾ നൽകിയിട്ടില്ല." : "Standard procedure applies."}</li>`;
      if (stepsSection) stepsSection.style.display = "block";
    } else {
      stepsList.innerHTML = steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("");
      if (stepsSection) stepsSection.style.display = "block";
    }
  }

  // ==========================================
  // INSTITUTION-SPECIFIC SERVICES RENDERING
  // ==========================================
  let instServicesContainer = document.getElementById("detailInstitutionServices");
  if (!instServicesContainer) {
    const notesSec = document.getElementById("detailNotes")?.closest(".detail-section") || document.getElementById("detailNotes")?.parentElement;
    const parentContainer = notesSec ? notesSec.parentNode : document.querySelector(".detail-main-col") || document.querySelector(".detail-container") || document.getElementById("view-detail");
    if (parentContainer) {
      const sec = document.createElement("div");
      sec.className = "detail-section";
      sec.id = "institutionServicesSection";
      sec.innerHTML = `
        <h3 id="institutionServicesHeading">${escapeHtml(t.headingInstitutionServices || "🏛️ Institution Services & Portals")}</h3>
        <div id="detailInstitutionServices" style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.5rem;"></div>
      `;
      if (notesSec && notesSec.parentNode === parentContainer) {
        parentContainer.insertBefore(sec, notesSec);
      } else {
        parentContainer.appendChild(sec);
      }
      instServicesContainer = document.getElementById("detailInstitutionServices");
    }
  }

  const instServicesSec = document.getElementById("institutionServicesSection") || instServicesContainer?.closest(".detail-section");
  if (isInstitution && Array.isArray(service.institutionServices) && service.institutionServices.length > 0) {
    if (instServicesSec) instServicesSec.style.display = "block";
    if (instServicesContainer) {
      const headingEl = document.getElementById("institutionServicesHeading");
      if (headingEl) {
        headingEl.textContent = t.headingInstitutionServices || (currentLang === "ml" ? "🏛️ സ്ഥാപന സേവനങ്ങളും പോർട്ടലുകളും" : "🏛️ Institution Services & Portals");
      }
      instServicesContainer.innerHTML = service.institutionServices
        .map(svc => {
          const sName = svc.name?.[currentLang] || svc.name?.en || "Service";
          const sDesc = svc.description?.[currentLang] || svc.description?.en || "";
          const sIcon = svc.icon || "🔗";
          const sType = svc.type ? String(svc.type).replace(/-/g, " ").toUpperCase() : "";
          const sUrl = typeof svc.url === "string" ? svc.url.trim() : "";

          let actionBtn = "";
          if (sUrl.startsWith("https://") || sUrl.startsWith("http://")) {
            const btnLabel = currentLang === "ml" ? "പോർട്ടൽ സന്ദർശിക്കുക ↗" : "Open Portal ↗";
            actionBtn = `<a href="${escapeHtml(sUrl)}" target="_blank" rel="noopener noreferrer" class="btn-official" style="font-size: 0.85rem; padding: 0.45rem 0.85rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem; width: auto;">${btnLabel}</a>`;
          }

          return `
            <div style="background: var(--bg-main, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 8px; padding: 0.9rem 1rem; display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
              <div style="display: flex; align-items: flex-start; gap: 0.75rem; flex: 1; min-width: 200px;">
                <span style="font-size: 1.4rem; line-height: 1;">${escapeHtml(sIcon)}</span>
                <div>
                  ${sType ? `<span class="badge badge-mode" style="display: inline-block; font-size: 0.7rem; margin-bottom: 0.25rem;">${escapeHtml(sType)}</span>` : ""}
                  <h4 style="margin: 0 0 0.25rem 0; font-size: 1rem; font-weight: 600; color: var(--text-main);">${escapeHtml(sName)}</h4>
                  ${sDesc ? `<p style="margin: 0; font-size: 0.88rem; color: var(--text-muted); line-height: 1.4;">${escapeHtml(sDesc)}</p>` : ""}
                </div>
              </div>
              ${actionBtn ? `<div style="align-self: center;">${actionBtn}</div>` : ""}
            </div>
          `;
        })
        .join("");
    }
  } else {
    if (instServicesSec) instServicesSec.style.display = "none";
  }

  // Important Notes
  const notesEl = document.getElementById("detailNotes");
  const notesSection = notesEl?.closest(".detail-section") || notesEl?.parentElement;
  if (notesEl) {
    const rawNotes = service.importantNotes?.[currentLang] || service.importantNotes?.en || service.notes?.[currentLang] || service.notes?.en;
    if (Array.isArray(rawNotes) && rawNotes.length > 0) {
      notesEl.innerHTML = `<ul style="margin: 0; padding-left: 1.2rem;">${rawNotes.map(n => `<li>${escapeHtml(n)}</li>`).join("")}</ul>`;
      if (notesSection) notesSection.style.display = "block";
    } else if (typeof rawNotes === "string" && rawNotes.trim() !== "") {
      notesEl.textContent = rawNotes;
      if (notesSection) notesSection.style.display = "block";
    } else if (isInstitution) {
      if (notesSection) notesSection.style.display = "none";
    } else {
      notesEl.textContent = "—";
      if (notesSection) notesSection.style.display = "block";
    }
  }

  // Official Website / Portal Button
  const btnWrapper = document.getElementById("officialBtnWrapper");
  if (btnWrapper) {
    const officialUrl = typeof service.officialUrl === "string" ? service.officialUrl.trim() : "";
    if (officialUrl.startsWith("https://") || officialUrl.startsWith("http://")) {
      btnWrapper.innerHTML = `
        <a href="${escapeHtml(officialUrl)}" target="_blank" rel="noopener noreferrer" class="btn-official">
          ${escapeHtml(t.openOfficialPortal)}
        </a>
      `;
    } else {
      btnWrapper.innerHTML = `
        <button type="button" class="btn-official btn-disabled" disabled>
          ${escapeHtml(t.officialPortalUnavailable)}
        </button>
      `;
    }
  }

  const lastVerifiedEl = document.getElementById("detailLastVerified");
  if (lastVerifiedEl) {
    const dateStr = service.lastVerified || "October 2026";
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
