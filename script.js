// ==========================================
// SEVACHECK KERALA — APPLICATION LOGIC
// ==========================================

// Global state
let currentLang = "en";
let currentCategory = "all";
let activeServiceId = null;

// i18n Dictionary
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
    servicesCount: (count) => `Showing ${count} services`,
    emptyStateHeading: "No matching service found.",
    emptyStateText: 'Try searching for words like "Income", "Passport", "Birth", or "Licence".',
    backToHome: "← Back to all services",
    headingWho: "👥 Who May Need It",
    headingEligibility: "✅ Basic Eligibility",
    headingDocs: "📄 Documents to Prepare",
    checklistHint: "Check the boxes as you assemble your paperwork:",
    headingAdditionalDocs: "📎 Additional / Supporting Documents (If Applicable)",
    headingWhere: "📍 Where to Apply",
    headingSteps: "📋 Basic Step-by-Step Instructions",
    headingNotes: "ℹ️ Important Notes",
    lastVerifiedPrefix: "Last verified: ",
    verifiedBadge: "Verified Official Source",
    officialBtn: "Open Official Portal ↗",
    officialBtnDisclaimer: "Opens official / authorized government portal. SevaCheck is not affiliated with this service.",
    categoryLabel: "Category",
    modeLabel: "Mode",
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
    topDisclaimer: "ℹ️ സേവാചെക്ക് കേരള ഒരു സ്വതന്ത്ര വിവര സഹായിയാണ്. അന്തിമ വിവരങ്ങൾക്ക് ഔദ്യോഗിക സർക്കാർ സ്രോതസ്സുകൾ പരിശോധിക്കുക.",
    navHome: "ഹോം",
    navServices: "സേവനങ്ങൾ",
    navHow: "പ്രവർത്തനം",
    navAbout: "ഞങ്ങളെക്കുറിച്ച്",
    heroHeading: "അപേക്ഷിക്കുന്നതിന് മുൻപ് എന്തൊക്കെ വേണമെന്ന് അറിയൂ.",
    heroSubheading: "കേരളത്തിലെ സർക്കാർ സേവനങ്ങൾക്ക് ആവശ്യമായ രേഖകളുടെ ചെക്ക് ലിസ്റ്റും അപേക്ഷാ വിവരങ്ങളും ലളിതമായി.",
    searchPlaceholder: "സേവനങ്ങൾ തിരയുക... (ഉദാ: വരുമാന സർട്ടിഫിക്കറ്റ്, ലൈസൻസ്)",
    categorySectionHeading: "ഏത് സേവനമാണ് വേണ്ടതെന്ന് ഉറപ്പില്ലേ?",
    catAll: "എല്ലാം",
    catDocuments: "📄 സർട്ടിഫിക്കറ്റുകൾ & രേഖകൾ",
    catId: "🪪 തിരിച്ചറിയൽ രേഖകൾ",
    catGovernment: "🏛️ സർക്കാർ & തദ്ദേശ സേവനങ്ങൾ",
    catEducation: "🎓 വിദ്യാഭ്യാസം",
    catTravel: "🚗 യാത്ര & ഗതാഗതം",
    popularServicesHeading: "പ്രധാന സേവനങ്ങൾ",
    servicesCount: (count) => `${count} സേവനങ്ങൾ ലഭ്യമാണ്`,
    emptyStateHeading: "സേവനങ്ങളൊന്നും കണ്ടെത്താനായില്ല.",
    emptyStateText: '"വരുമാനം", "പാസ്‌പോർട്ട്", "ജനനം", "ലൈസൻസ്" തുടങ്ങിയ വാക്കുകൾ ഉപയോഗിച്ച് തിരയുക.',
    backToHome: "← എല്ലാ സേവനങ്ങളിലേക്കും മടങ്ങുക",
    headingWho: "👥 ഇത് ആർക്കൊക്കെ ആവശ്യമാണ്?",
    headingEligibility: "✅ അടിസ്ഥാന യോഗ്യതകൾ",
    headingDocs: "📄 കരുതേണ്ട പ്രധാന രേഖകൾ",
    checklistHint: "രേഖകൾ തയ്യാറാക്കുമ്പോൾ ബോക്സുകളിൽ ടിക്ക് ചെയ്യാം:",
    headingAdditionalDocs: "📎 മറ്റ് അനുബന്ധ രേഖകൾ (ബാധകമെങ്കിൽ മാത്രം)",
    headingWhere: "📍 എവിടെ അപേക്ഷിക്കണം?",
    headingSteps: "📋 അപേക്ഷിക്കേണ്ട ഘട്ടങ്ങൾ",
    headingNotes: "ℹ️ പ്രധാന ശ്രദ്ധിക്കേണ്ട കാര്യങ്ങൾ",
    lastVerifiedPrefix: "വിവരങ്ങൾ പരിശോധിച്ചത്: ",
    verifiedBadge: "പരിശോധിച്ചുറപ്പിച്ച ഔദ്യോഗിക വിവരം",
    officialBtn: "ഔദ്യോഗിക പോർട്ടൽ തുറക്കുക ↗",
    officialBtnDisclaimer: "ഔദ്യോഗിക സർക്കാർ പോർട്ടലിലേക്ക് പോകുന്നു. സേവാചെക്കിന് സർക്കാരുമായി നേരിട്ട് ബന്ധമില്ല.",
    categoryLabel: "വിഭാഗം",
    modeLabel: "രീതി",
    howHeading: "സേവാചെക്ക് കേരള എങ്ങനെ പ്രവർത്തിക്കുന്നു?",
    howIntro: "രേഖകൾ ഇല്ലാത്തതിന്റെ പേരിൽ സർക്കാർ ഓഫീസുകൾ കയറിയിറങ്ങുന്നത് ഒഴിവാക്കാൻ സേവാചെക്ക് നിങ്ങളെ സഹായിക്കുന്നു.",
    howStep1Title: "1. ആവശ്യമുള്ള സേവനം കണ്ടെത്തുക",
    howStep1Desc: "നിങ്ങൾക്ക് ആവശ്യമായ സർട്ടിഫിക്കറ്റോ രേഖയോ സേർച്ച് ബാർ വഴി എളുപ്പത്തിൽ കണ്ടെത്താം.",
    howStep2Title: "2. യോഗ്യതകൾ പരിശോധിക്കുക",
    howStep2Desc: "അപേക്ഷിക്കാൻ ആവശ്യമായ അടിസ്ഥാന മാനദണ്ഡങ്ങൾ മനസ്സിലാക്കുക.",
    howStep3Title: "3. രേഖകൾ തയ്യാറാക്കുക",
    howStep3Desc: "അക്ഷയ കേന്ദ്രത്തിലോ ഓൺലൈനായോ പോകുന്നതിന് മുൻപ് ഞങ്ങളുടെ ഇന്ററാക്ടീവ് ചെക്ക് ലിസ്റ്റ് ഉപയോഗിച്ച് രേഖകൾ ഉറപ്പാക്കുക.",
    howStep4Title: "4. ഔദ്യോഗിക പോർട്ടലുകൾ സന്ദർശിക്കുക",
    howStep4Desc: "ഇടനിലക്കാരില്ലാതെ കൃത്യമായ ഔദ്യോഗിക സർക്കാർ വെബ്സൈറ്റുകളിലേക്ക് നേരിട്ട് പ്രവേശിക്കുക.",
    howStep5Title: "5. അപേക്ഷ സമർപ്പിച്ച് രസീത് സൂക്ഷിക്കുക",
    howStep5Desc: "അപേക്ഷ നൽകിയ ശേഷം ലഭിക്കുന്ന അക്നോളജ്മെന്റ് നമ്പർ അല്ലെങ്കിൽ രസീത് സൂക്ഷിച്ചുവെക്കുക.",
    howCtaBtn: "സേവനങ്ങൾ കാണുക"
  }
};

// Category Mapping
const categoryMap = {
  documents: { en: "Documents & Certificates", ml: "സർട്ടിഫിക്കറ്റുകൾ & രേഖകൾ" },
  id: { en: "ID & Personal", ml: "തിരിച്ചറിയൽ രേഖകൾ" },
  government: { en: "Government & Local", ml: "സർക്കാർ & തദ്ദേശ സേവനങ്ങൾ" },
  education: { en: "Education", ml: "വിദ്യാഭ്യാസം" },
  travel: { en: "Travel & Transport", ml: "യാത്ര & ഗതാഗതം" }
};

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("sevacheck-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("sevacheck-theme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("themeToggleIcon");
  if (icon) {
    icon.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

// Language Switcher
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  const btnEn = document.getElementById("btn-lang-en");
  const btnMl = document.getElementById("btn-lang-ml");
  if (btnEn && btnMl) {
    if (lang === "en") {
      btnEn.classList.add("active");
      btnMl.classList.remove("active");
    } else {
      btnMl.classList.add("active");
      btnEn.classList.remove("active");
    }
  }

  // Update static texts
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[lang] && i18n[lang][key]) {
      el.placeholder = i18n[lang][key];
    }
  });

  // Re-filter/re-render services view
  handleSearch();

  // If in detail view, refresh detail content
  if (activeServiceId) {
    openService(activeServiceId);
  }
}

// Navigation / View Switching
function navigateTo(viewId) {
  const views = ["view-home", "view-detail", "view-how", "view-about"];
  views.forEach((v) => {
    const el = document.getElementById(v);
    if (el) el.style.display = "none";
  });

  // Nav highlights
  const navLinks = ["nav-home", "nav-services", "nav-how", "nav-about"];
  navLinks.forEach((n) => {
    const el = document.getElementById(n);
    if (el) el.classList.remove("active");
  });

  if (viewId === "home" || viewId === "services") {
    const vHome = document.getElementById("view-home");
    if (vHome) vHome.style.display = "block";
    const activeNav = document.getElementById(viewId === "services" ? "nav-services" : "nav-home");
    if (activeNav) activeNav.classList.add("active");
    activeServiceId = null;
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (viewId === "how") {
    const vHow = document.getElementById("view-how");
    if (vHow) vHow.style.display = "block";
    const activeNav = document.getElementById("nav-how");
    if (activeNav) activeNav.classList.add("active");
    activeServiceId = null;
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (viewId === "about") {
    const vAbout = document.getElementById("view-about");
    if (vAbout) vAbout.style.display = "block";
    const activeNav = document.getElementById("nav-about");
    if (activeNav) activeNav.classList.add("active");
    activeServiceId = null;
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (viewId === "detail") {
    const vDetail = document.getElementById("view-detail");
    if (vDetail) vDetail.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function backToHome() {
  navigateTo("home");
}

// Card Grid Rendering
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

    const catName = categoryMap[item.category]
      ? categoryMap[item.category][currentLang]
      : item.category;

    card.innerHTML = `
      <div class="card-icon">${item.icon || "📄"}</div>
      <div class="card-category-badge">${catName}</div>
      <h3 class="card-title">${item.name[currentLang]}</h3>
      <p class="card-summary">${item.summary[currentLang]}</p>
      <div class="card-footer">
        <span class="card-link">${currentLang === "ml" ? "വിശദാംശങ്ങൾ കാണുക →" : "View Checklist & Details →"}</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Category Filter Handling
function filterCategory(cat, buttonEl) {
  currentCategory = cat;

  const chips = document.querySelectorAll(".helper-chip");
  chips.forEach((c) => c.classList.remove("active"));
  if (buttonEl) buttonEl.classList.add("active");

  handleSearch();
}

// Search and Filter Coordinator
function handleSearch() {
  const searchInput = document.getElementById("searchInput");
  const q = searchInput ? searchInput.value.toLowerCase().trim() : "";

  let filtered = (typeof servicesData !== "undefined" && Array.isArray(servicesData)) ? servicesData : [];

  if (currentCategory !== "all") {
    filtered = filtered.filter((s) => s.category === currentCategory);
  }

  if (q) {
    filtered = filtered.filter((s) => {
      const nameEn = s.name.en.toLowerCase();
      const nameMl = s.name.ml.toLowerCase();
      const summaryEn = s.summary.en.toLowerCase();
      const summaryMl = s.summary.ml.toLowerCase();

      return (
        nameEn.includes(q) ||
        nameMl.includes(q) ||
        summaryEn.includes(q) ||
        summaryMl.includes(q)
      );
    });
  }

  renderCards(filtered);
}

// Open Service Detail View
function openService(id) {
  if (typeof servicesData === "undefined" || !Array.isArray(servicesData)) return;
  const s = servicesData.find((item) => item.id === id);
  if (!s) return;

  activeServiceId = id;

  // Populate Title & Subtitle
  const titleEl = document.getElementById("detailTitle");
  const subtitleEl = document.getElementById("detailSubtitle");
  const descEl = document.getElementById("detailDesc");

  if (titleEl) titleEl.textContent = s.name[currentLang];
  if (subtitleEl) {
    subtitleEl.textContent = currentLang === "en" ? s.name.ml : s.name.en;
  }
  if (descEl) descEl.textContent = s.summary[currentLang];

  // Badges
  const badgesEl = document.getElementById("detailBadges");
  if (badgesEl) {
    const catName = categoryMap[s.category]
      ? categoryMap[s.category][currentLang]
      : s.category;

    badgesEl.innerHTML = `
      <span class="badge badge-category">${i18n[currentLang].categoryLabel}: ${catName}</span>
      <span class="badge badge-mode">${i18n[currentLang].modeLabel}: ${s.mode[currentLang]}</span>
      ${s.verified ? `<span class="badge badge-verified">✓ ${i18n[currentLang].verifiedBadge}</span>` : ""}
    `;
  }

  // Who Needs It
  const whoEl = document.getElementById("detailWho");
  if (whoEl) whoEl.textContent = s.whoNeeds[currentLang];

  // Eligibility
  const eligEl = document.getElementById("detailEligibility");
  if (eligEl) eligEl.textContent = s.eligibility[currentLang];

  // Documents Checklist
  const docsEl = document.getElementById("detailDocs");
  if (docsEl) {
    docsEl.innerHTML = "";
    s.documents[currentLang].forEach((doc, idx) => {
      const item = document.createElement("div");
      item.className = "checklist-item";

      const checkId = `doc-check-${idx}`;
      item.innerHTML = `
        <input type="checkbox" id="${checkId}" />
        <label for="${checkId}">${doc}</label>
      `;
      docsEl.appendChild(item);
    });
  }

  // Additional Documents (If applicable)
  const addSec = document.getElementById("additionalDocsSection");
  const addDocsEl = document.getElementById("detailAdditionalDocs");
  if (addSec && addDocsEl) {
    if (s.additionalDocs && s.additionalDocs[currentLang] && s.additionalDocs[currentLang].length > 0) {
      addDocsEl.innerHTML = "";
      s.additionalDocs[currentLang].forEach((itemText) => {
        const li = document.createElement("li");
        li.textContent = itemText;
        addDocsEl.appendChild(li);
      });
      addSec.style.display = "block";
    } else {
      addSec.style.display = "none";
    }
  }

  // Where to Apply
  const whereEl = document.getElementById("detailWhere");
  if (whereEl) whereEl.textContent = s.whereToApply[currentLang];

  // Steps
  const stepsEl = document.getElementById("detailSteps");
  if (stepsEl) {
    stepsEl.innerHTML = "";
    s.steps[currentLang].forEach((st) => {
      const li = document.createElement("li");
      li.textContent = st;
      stepsEl.appendChild(li);
    });
  }

  // Important Notes
  const notesEl = document.getElementById("detailNotes");
  if (notesEl) notesEl.textContent = s.notes[currentLang];

  // Action Button & Verification Note
  const officialWrapper = document.getElementById("officialBtnWrapper");
  if (officialWrapper) {
    officialWrapper.innerHTML = `
      <a 
        href="${s.officialUrl}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn-official"
      >
        ${i18n[currentLang].officialBtn}
      </a>
      <p class="official-disclaimer">${i18n[currentLang].officialBtnDisclaimer}</p>
    `;
  }

  const verNote = document.getElementById("detailLastVerified");
  if (verNote) {
    verNote.textContent = `${i18n[currentLang].lastVerifiedPrefix}${s.lastVerified}`;
  }

  // Switch to Detail View
  navigateTo("detail");
}

// Init
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setLanguage("en");
});

// React to registry updates
window.addEventListener("seva-registry-updated", () => {
  if (
    document.readyState !== "loading" &&
    typeof handleSearch === "function"
  ) {
    handleSearch();
  }
});
