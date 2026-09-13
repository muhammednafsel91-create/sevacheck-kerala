// ==========================================
// STATE & VIEW MANAGEMENT
// ==========================================
let currentCategory = "all";

function renderCards(list) {
  const grid = document.getElementById("serviceGrid");
  const empty = document.getElementById("emptyState");
  const countLabel = document.getElementById("servicesCount");

  grid.innerHTML = "";

  if (list.length === 0) {
    grid.style.display = "none";
    empty.style.display = "block";
    countLabel.textContent = "Showing 0 services";
    return;
  }

  grid.style.display = "grid";
  empty.style.display = "none";
  countLabel.textContent = `Showing ${list.length} service${list.length === 1 ? '' : 's'}`;

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.onclick = () => openService(item.id);

    card.innerHTML = `
      <div class="card-top">
        <span class="service-icon">${item.icon}</span>
        <h2>${item.name}</h2>
        <div style="font-size: 0.8rem; color: var(--primary); margin-bottom: 0.5rem; font-weight: 500;">${item.malayalamName}</div>
        <p>${item.summary}</p>
      </div>
      <div class="card-meta">
        <span>${item.mode}</span>
        <span class="card-link">View checklist →</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function handleSearch() {
  const q = document.getElementById("searchInput").value.toLowerCase().trim();
  let filtered = servicesData;

  if (currentCategory !== "all") {
    filtered = filtered.filter(s => s.category === currentCategory);
  }

  if (q) {
    filtered = filtered.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.malayalamName.toLowerCase().includes(q) ||
      s.summary.toLowerCase().includes(q)
    );
  }

  renderCards(filtered);
}

function filterCategory(cat, btn) {
  currentCategory = cat;
  const chips = document.querySelectorAll(".helper-chip");
  chips.forEach(c => c.classList.remove("active"));
  if (btn) btn.classList.add("active");

  document.getElementById("searchInput").value = "";

  if (cat === "all") {
    renderCards(servicesData);
  } else {
    renderCards(servicesData.filter(s => s.category === cat));
  }
}

function openService(id) {
  const s = servicesData.find(item => item.id === id);
  if (!s) return;

  document.getElementById("view-home").style.display = "none";
  document.getElementById("view-how").style.display = "none";
  document.getElementById("view-about").style.display = "none";
  document.getElementById("view-detail").style.display = "block";

  document.getElementById("detailTitle").textContent = `${s.name} (${s.malayalamName})`;
  document.getElementById("detailDesc").textContent = s.summary;

  // Badges
  const badgesContainer = document.getElementById("detailBadges");
  badgesContainer.innerHTML = `
    <span class="tag-badge">📍 ${s.mode}</span>
    <span class="tag-badge">🏷️ Category: ${s.category.toUpperCase()}</span>
  `;

  document.getElementById("detailWho").textContent = s.whoNeeds;
  document.getElementById("detailEligibility").textContent = s.eligibility;
  document.getElementById("detailWhere").textContent = s.whereToApply;
  document.getElementById("detailNotes").textContent = s.notes;
  document.getElementById("detailLastVerified").textContent =
    `Information last verified against official state guidelines: ${s.lastVerified}`;

  // Document checklist
  const docsContainer = document.getElementById("detailDocs");
  docsContainer.innerHTML = "";
  s.documents.forEach((doc, idx) => {
    const item = document.createElement("div");
    item.className = "checklist-item";
    const checkId = `doc-${idx}`;
    item.innerHTML = `
      <input type="checkbox" id="${checkId}" onchange="toggleCheck(this)">
      <label for="${checkId}">${doc}</label>
    `;
    docsContainer.appendChild(item);
  });

  // Additional docs
  const addSection = document.getElementById("additionalDocsSection");
  const addList = document.getElementById("detailAdditionalDocs");
  if (s.additionalDocs && s.additionalDocs.length > 0) {
    addList.innerHTML = "";
    s.additionalDocs.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      addList.appendChild(li);
    });
    addSection.style.display = "block";
  } else {
    addSection.style.display = "none";
  }

  // Steps
  const stepsContainer = document.getElementById("detailSteps");
  stepsContainer.innerHTML = "";
  s.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsContainer.appendChild(li);
  });

  // Official Source Button
  const btnWrapper = document.getElementById("officialBtnWrapper");
  if (s.verified && s.officialUrl) {
    btnWrapper.innerHTML = `
      <a href="${s.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-official">
        Open Official Source ↗
      </a>
    `;
  } else {
    btnWrapper.innerHTML = `
      <button class="btn-official btn-disabled" disabled>
        Official source link will be added after verification
      </button>
    `;
  }

  window.scrollTo(0, 0);
}

function toggleCheck(checkbox) {
  const parent = checkbox.closest(".checklist-item");
  if (checkbox.checked) {
    parent.classList.add("checked");
  } else {
    parent.classList.remove("checked");
  }
}

function backToHome() {
  document.getElementById("view-detail").style.display = "none";
  document.getElementById("view-how").style.display = "none";
  document.getElementById("view-about").style.display = "none";
  document.getElementById("view-home").style.display = "block";
  updateNav("home");
  window.scrollTo(0, 0);
}

function navigateTo(page) {
  const vHome = document.getElementById("view-home");
  const vDetail = document.getElementById("view-detail");
  const vHow = document.getElementById("view-how");
  const vAbout = document.getElementById("view-about");

  vHome.style.display = "none";
  vDetail.style.display = "none";
  vHow.style.display = "none";
  vAbout.style.display = "none";

  if (page === 'home' || page === 'services') {
    vHome.style.display = "block";
    if (page === 'services') {
      document.getElementById('serviceGrid').scrollIntoView({
        behavior: 'smooth'
      });
    }
  } else if (page === 'how') {
    vHow.style.display = "block";
  } else if (page === 'about') {
    vAbout.style.display = "block";
  }

  updateNav(page);
  window.scrollTo(0, 0);
}

function updateNav(page) {
  document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
  const activeTab = document.getElementById(`nav-${page}`);
  if (activeTab) activeTab.classList.add("active");
}

// Initialize list on load
window.addEventListener("DOMContentLoaded", () => {
  renderCards(servicesData);
});
