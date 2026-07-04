/* ==========================================================================
   Divine Tamil Nadu - JavaScript Interactivity & Shared Engines (API Integrated)
   ========================================================================== */

let searchDatabase = [];

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initThemeToggle();
  initLanguageSwitcher();
  injectAuthModalMarkup(); // Inject the login/register modal markup dynamically
  initSmartSearch();
  initStatsCounters();
  initContributionForm();
  initAuthHelper();
  checkProtocolHelper(); // Check if running in offline file:// mode
  loadSearchDatabase(); // Load search tags dynamically from database APIs
});

/* --------------------------------------------------------------------------
   1. Sticky Navbar Scroll Logic
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById('mainNavbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   2. Dark/Light Theme Handler
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    updateThemeIcon(true);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    });
  }
}

function updateThemeIcon(isDark) {
  const icon = document.querySelector('#themeToggle i');
  if (icon) {
    if (isDark) {
      icon.className = 'fa-solid fa-sun fs-5';
    } else {
      icon.className = 'fa-solid fa-moon fs-5';
    }
  }
}

/* --------------------------------------------------------------------------
   3. Multi-language Support Switcher
   -------------------------------------------------------------------------- */
const translations = {
  en: {
    navHome: "Home", navGods: "Gods", navTemples: "Temples", navFestivals: "Festivals", navGallery: "Gallery", navAbout: "About",
    heroHeading: "Discover the Divine Heritage of Tamil Nadu",
    heroSub: "Explore the sacred abodes of Hindu Gods, magnificent temple architecture, rich mythological legends, and vibrant cultural festivals.",
    exploreGods: "Explore Gods", exploreTemples: "Explore Temples",
    categoryTitle: "Explore by Categories"
  },
  ta: {
    navHome: "முகப்பு", navGods: "தெய்வங்கள்", navTemples: "கோயில்கள்", navFestivals: "திருவிழாக்கள்", navGallery: "கேலரி", navAbout: "எங்களைப் பற்றி",
    heroHeading: "தமிழ்நாட்டின் ஆன்மீக பாரம்பரியத்தை கண்டறியுங்கள்",
    heroSub: "இந்து தெய்வங்களின் புனிதமான இருப்பிடங்கள், அற்புதமான கோயில் கட்டிடக்கலை, வளமான புராணக் கதைகள் மற்றும் துடிப்பான கலாச்சார விழாக்களை ஆராயுங்கள்.",
    exploreGods: "தெய்வங்களை காண்க", exploreTemples: "கோயில்களை காண்க",
    categoryTitle: "பிரிவுகள் வாரியாக ஆராயுங்கள்"
  },
  hi: {
    navHome: "होम", navGods: "देवी-देवता", navTemples: "मंदिर", navFestivals: "त्यौहार", navGallery: "गैलरी", navAbout: "हमारे बारे में",
    heroHeading: "तमिलनाडु की दिव्य विरासत की खोज करें",
    heroSub: "हिंदू देवताओं के पवित्र धामों, भव्य मंदिर वास्तुकला, समृद्ध पौराणिक कथाओं और जीवंत सांस्कृतिक त्योहारों का अन्वेषण करें।",
    exploreGods: "देवताओं को खोजें", exploreTemples: "मंदिरों को खोजें",
    categoryTitle: "श्रेणियों के अनुसार खोजें"
  }
};

function initLanguageSwitcher() {
  const dropdownItems = document.querySelectorAll('#lang-dropdown .dropdown-item');
  const savedLang = localStorage.getItem('portalLang') || 'en';
  applyLanguage(savedLang);

  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownItems.forEach(d => d.classList.remove('active'));
      item.classList.add('active');
      const lang = item.getAttribute('data-lang');
      localStorage.setItem('portalLang', lang);
      applyLanguage(lang);
    });
  });
}

function applyLanguage(lang) {
  const currentLangText = document.getElementById('current-lang');
  if (currentLangText) {
    currentLangText.textContent = lang.toUpperCase();
  }

  const dict = translations[lang] || translations['en'];

  const transMap = {
    '#nav-home': dict.navHome,
    '#nav-gods': dict.navGods,
    '#nav-temples': dict.navTemples,
    '#nav-festivals': dict.navFestivals,
    '#nav-gallery': dict.navGallery,
    '#nav-about': dict.navAbout,
    '.hero-title': dict.heroHeading,
    '.hero-sub': dict.heroSub,
    'a[href="#featured-gods"]': dict.exploreGods,
    'a[href="#featured-temples"]': dict.exploreTemples,
    '#featured-categories .section-title': dict.categoryTitle
  };

  for (let selector in transMap) {
    const el = document.querySelector(selector);
    if (el && transMap[selector]) {
      el.textContent = transMap[selector];
    }
  }
}

/* --------------------------------------------------------------------------
   4. Smart Portal Search (Dynamic Database Queries)
   -------------------------------------------------------------------------- */
async function loadSearchDatabase() {
  try {
    searchDatabase = [];

    // Fetch Gods List from REST API
    const resGods = await fetch('/api/gods');
    if (resGods.ok) {
      const gods = await resGods.json();
      gods.forEach(g => {
        searchDatabase.push({
          name: g.name,
          type: "God",
          cat: g.category,
          url: `god-details.html?god=${g.id}`,
          tags: [g.id, g.name.toLowerCase(), g.category.toLowerCase(), "god"]
        });
      });
    }

    // Fetch Temples List from REST API
    const resTemples = await fetch('/api/temples');
    if (resTemples.ok) {
      const temples = await resTemples.json();
      temples.forEach(t => {
        searchDatabase.push({
          name: t.name,
          type: "Temple",
          loc: t.district,
          url: `temple-details.html?temple=${t.id}`,
          tags: [t.id, t.name.toLowerCase(), t.district.toLowerCase(), "temple"]
        });
      });
    }

    // Load Static Festivals
    searchDatabase.push(
      { name: "Thai Pongal", type: "Festival", date: "January", url: "festivals.html", tags: ["pongal", "harvest", "sun", "pot"] },
      { name: "Thaipusam", type: "Festival", date: "Jan/Feb", url: "festivals.html", tags: ["thaipusam", "murugan", "kavadi", "vel"] },
      { name: "Karthigai Deepam", type: "Festival", date: "Nov/Dec", url: "festivals.html", tags: ["karthigai", "deepam", "light", "fire"] }
    );
  } catch (err) {
    console.error("Could not seed search indices: ", err);
  }
}

function initSmartSearch() {
  const heroInput = document.getElementById('heroSearchInput');
  const heroSuggestions = document.getElementById('heroSearchSuggestions');
  const modalInput = document.getElementById('modalSearchInput');

  if (heroInput && heroSuggestions) {
    heroInput.addEventListener('input', () => {
      const query = heroInput.value.toLowerCase().trim();
      heroSuggestions.innerHTML = '';

      if (query.length < 2) {
        heroSuggestions.classList.add('d-none');
        return;
      }

      const matches = searchDatabase.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.tags.some(tag => tag.includes(query)) ||
        (item.loc && item.loc.toLowerCase().includes(query))
      ).slice(0, 5);

      if (matches.length > 0) {
        matches.forEach(item => {
          const li = document.createElement('li');
          const badgeClass = item.type === 'God' ? 'bg-danger' : (item.type === 'Temple' ? 'bg-primary' : 'bg-warning text-dark');
          li.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
              <span><strong>${item.name}</strong> <small class="text-muted">(${item.loc || item.cat || 'Festival'})</small></span>
              <span class="badge ${badgeClass} fs-9">${item.type}</span>
            </div>
          `;
          li.addEventListener('click', () => {
            window.location.href = item.url;
          });
          heroSuggestions.appendChild(li);
        });
        heroSuggestions.classList.remove('d-none');
      } else {
        const li = document.createElement('li');
        li.innerHTML = `<span class="text-muted">No results found for "${heroInput.value}"</span>`;
        heroSuggestions.appendChild(li);
        heroSuggestions.classList.remove('d-none');
      }
    });

    document.addEventListener('click', (e) => {
      if (!heroInput.contains(e.target) && !heroSuggestions.contains(e.target)) {
        heroSuggestions.classList.add('d-none');
      }
    });
  }

  if (modalInput) {
    modalInput.addEventListener('input', () => {
      performModalSearch(modalInput.value);
    });
  }
}

function performModalSearch(queryText) {
  const resultsBox = document.getElementById('searchResultsBox');
  const resultsContainer = document.getElementById('modalSearchResults');
  const query = queryText.toLowerCase().trim();

  if (query.length < 2) {
    resultsBox.classList.add('d-none');
    return;
  }

  const matches = searchDatabase.filter(item => 
    item.name.toLowerCase().includes(query) || 
    item.tags.some(tag => tag.includes(query)) ||
    (item.loc && item.loc.toLowerCase().includes(query))
  );

  resultsContainer.innerHTML = '';
  resultsBox.classList.remove('d-none');

  if (matches.length > 0) {
    matches.forEach(item => {
      const badgeClass = item.type === 'God' ? 'bg-danger' : (item.type === 'Temple' ? 'bg-primary' : 'bg-warning text-dark');
      const itemEl = document.createElement('div');
      itemEl.className = 'search-item d-flex justify-content-between align-items-center p-2 mb-2 border-bottom';
      itemEl.style.cursor = 'pointer';
      itemEl.innerHTML = `
        <div>
          <h6 class="fw-bold mb-0">${item.name}</h6>
          <small class="text-muted">${item.loc ? 'Location: ' + item.loc : (item.cat ? 'Category: ' + item.cat : 'Spiritual Festival')}</small>
        </div>
        <span class="badge ${badgeClass}">${item.type}</span>
      `;
      itemEl.addEventListener('click', () => {
        window.location.href = item.url;
      });
      resultsContainer.appendChild(itemEl);
    });
  } else {
    resultsContainer.innerHTML = `<div class="text-center py-3 text-muted">No matches found for "${queryText}".</div>`;
  }
}

function handleHeroSearch() {
  const input = document.getElementById('heroSearchInput');
  const query = input.value.toLowerCase().trim();
  if (query.length > 0) {
    const match = searchDatabase.find(item => item.name.toLowerCase().includes(query) || item.tags.includes(query));
    if (match) {
      window.location.href = match.url;
    } else {
      window.location.href = `gods.html?search=${encodeURIComponent(query)}`;
    }
  }
}

function handleModalSearch() {
  const input = document.getElementById('modalSearchInput');
  performModalSearch(input.value);
}

function quickSearch(term) {
  const modalInput = document.getElementById('modalSearchInput');
  if (modalInput) {
    modalInput.value = term;
    performModalSearch(term);
  }
}

function filterGodCategory(cat) {
  window.location.href = `gods.html?category=${cat}`;
}

/* --------------------------------------------------------------------------
   5. Animated Statistics Counter
   -------------------------------------------------------------------------- */
function initStatsCounters() {
  const counters = document.querySelectorAll('.counter-val');
  if (counters.length === 0) return;

  const animate = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText.replace(/,/g, ''));
    const speed = target > 1000 ? 120 : 30;
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = Math.min(count + increment, target).toLocaleString();
      setTimeout(() => animate(counter), 20);
    } else {
      counter.innerText = target.toLocaleString() + (target >= 1000 ? "+" : "");
    }
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.8 });

  counters.forEach(counter => observer.observe(counter));
}

/* --------------------------------------------------------------------------
   6. Contribution Form Fields Toggling & Submission
   -------------------------------------------------------------------------- */
function toggleContributeFields() {
  const cat = document.getElementById('contributeCategory').value;
  const tFields = document.querySelectorAll('.t-field');
  const gFields = document.querySelectorAll('.g-field');
  const lblName = document.getElementById('lblContributeName');

  if (cat === 'God') {
    if (lblName) lblName.textContent = "God/Deity Name *";
    tFields.forEach(f => f.classList.add('d-none'));
    gFields.forEach(f => f.classList.remove('d-none'));
  } else if (cat === 'Temple') {
    if (lblName) lblName.textContent = "Temple Name *";
    tFields.forEach(f => f.classList.remove('d-none'));
    gFields.forEach(f => f.classList.add('d-none'));
  } else {
    if (lblName) lblName.textContent = "Festival Name *";
    tFields.forEach(f => f.classList.add('d-none'));
    gFields.forEach(f => f.classList.add('d-none'));
  }
}

function initContributionForm() {
  const select = document.getElementById('contributeCategory');
  if (select) {
    select.addEventListener('change', toggleContributeFields);
  }
}

async function submitContribution() {
  const category = document.getElementById('contributeCategory').value;
  const name = document.getElementById('contributeName').value;
  const contributor = document.getElementById('contribName').value;
  const email = document.getElementById('contribEmail') ? document.getElementById('contribEmail').value : "devotee@temple.org";
  const legends = document.getElementById('contributeLegends').value;
  const source = document.getElementById('contributeSource') ? document.getElementById('contributeSource').value : "Direct Devotee Log";

  const payload = { category, name, contributor, email, legends, source };

  try {
    const res = await fetch('/api/contributions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert(`Thank you, ${contributor}! Your contribution for ${category} "${name}" has been submitted for admin verification.`);
      document.getElementById('contributionForm').reset();
      const modalEl = document.getElementById('contributeModal');
      const modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) modal.hide();
    } else {
      alert("Failed to submit contribution. Please check your inputs.");
    }
  } catch (err) {
    console.error(err);
    alert("Connection error. Contribution could not be saved.");
  }
}

/* --------------------------------------------------------------------------
   7. Inject Authentication Modal Markup dynamically (DRY Layout)
   -------------------------------------------------------------------------- */
function injectAuthModalMarkup() {
  const loginModal = document.getElementById('loginModal');
  if (!loginModal) return;

  loginModal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-cream border-0 rounded-4 shadow-lg overflow-hidden text-dark">
        <div class="p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="fw-bold font-secondary text-dark m-0" id="loginModalLabel">Portal Access Gate</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          <ul class="nav nav-pills nav-fill mb-4 bg-light p-1 rounded-pill" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active rounded-pill text-uppercase fs-9 py-2" id="pills-login-tab" data-bs-toggle="pill" data-bs-target="#pills-login" type="button" role="tab" aria-selected="true">Login</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link rounded-pill text-uppercase fs-9 py-2" id="pills-register-tab" data-bs-toggle="pill" data-bs-target="#pills-register" type="button" role="tab" aria-selected="false">Register</button>
            </li>
          </ul>

          <div class="tab-content" id="pills-tabContent">
            <!-- Login Tab -->
            <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
              <form id="loginForm" onsubmit="event.preventDefault(); handleAuth('login');">
                <div class="mb-3">
                  <label class="form-label text-muted fs-8">Full Name *</label>
                  <input type="text" class="form-control rounded-3" id="loginName" placeholder="Enter your full name" required>
                </div>
                <div class="mb-3">
                  <label class="form-label text-muted fs-8">Email ID *</label>
                  <input type="email" class="form-control rounded-3" id="loginEmail" placeholder="Enter your email ID" required>
                </div>
                <div class="mb-3">
                  <label class="form-label text-muted fs-8">Password *</label>
                  <input type="password" class="form-control rounded-3" id="loginPassword" placeholder="Enter password" required>
                </div>
                <button type="submit" class="btn btn-warning w-100 py-2 fw-bold text-dark rounded-pill text-uppercase">Log In</button>
              </form>
              <div class="text-center mt-3 fs-9 text-muted">
                Quick Admin Login helper: <a href="#" onclick="fillAdminCredentialsHelper()" class="text-danger fw-semibold">Click here</a>
              </div>
            </div>
            
            <!-- Register Tab -->
            <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
              <form id="registerForm" onsubmit="event.preventDefault(); handleAuth('register');">
                <div class="mb-3">
                  <label class="form-label text-muted fs-8">Full Name *</label>
                  <input type="text" class="form-control rounded-3" id="regName" placeholder="Enter full name" required>
                </div>
                <div class="mb-3">
                  <label class="form-label text-muted fs-8">Mobile Number *</label>
                  <input type="tel" class="form-control rounded-3" id="regMobile" placeholder="Enter mobile number" required>
                </div>
                <div class="mb-3">
                  <label class="form-label text-muted fs-8">Email ID *</label>
                  <input type="email" class="form-control rounded-3" id="regEmail" placeholder="Enter email address" required>
                </div>
                <div class="mb-3">
                  <label class="form-label text-muted fs-8">Password *</label>
                  <input type="password" class="form-control rounded-3" id="regPassword" placeholder="Create password" required>
                </div>
                <div class="mb-3">
                  <label class="form-label text-muted fs-8">Choose Portal Role *</label>
                  <select class="form-select rounded-3" id="regRole" required>
                    <option value="user">Registered User (Devotee)</option>
                    <option value="admin">Administrator (Manager)</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-warning w-100 py-2 fw-bold text-dark rounded-pill text-uppercase">Create Account & Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   8. Authentication Logic & Access Mode Rendering
   -------------------------------------------------------------------------- */
function initAuthHelper() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const loginBtn = document.getElementById('loginBtn');
  const adminShortcut = document.getElementById('adminShortcut');
  const announcementBar = document.querySelector('.announcement-bar span');

  if (user) {
    if (loginBtn) {
      loginBtn.innerHTML = `<i class="fa-solid fa-circle-user"></i> ${user.name.split(' ')[0]} (${user.role.toUpperCase()})`;
      loginBtn.classList.replace('btn-warning', 'btn-outline-warning');
      loginBtn.removeAttribute('data-bs-toggle');
      loginBtn.removeAttribute('data-bs-target');
      loginBtn.title = `Logged in as ${user.name}`;

      // Dynamically append dedicated single-click logout button
      if (!document.getElementById('logoutBtn')) {
        const logoutBtn = document.createElement('button');
        logoutBtn.className = 'btn btn-danger btn-sm px-3 rounded-pill fw-semibold text-uppercase';
        logoutBtn.id = 'logoutBtn';
        logoutBtn.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i> Logout';
        logoutBtn.addEventListener('click', handleLogout);
        loginBtn.parentNode.insertBefore(logoutBtn, loginBtn.nextSibling);
      }
    }
    if (user.role === 'admin' && adminShortcut) {
      adminShortcut.classList.remove('d-none');
    }
    if (announcementBar) {
      announcementBar.innerHTML = `<i class="fa-solid fa-user-check me-2"></i> Mode: <strong>${user.role === 'admin' ? 'Administrator Access' : 'Devotee Mode'}</strong> • Welcome ${user.name}!`;
    }
  } else {
    // Guest Mode active
    if (announcementBar) {
      announcementBar.innerHTML = `<i class="fa-solid fa-eye me-2"></i> Mode: <strong>Guest User (Read-Only)</strong> • Welcome to the Divine Temple Portal!`;
    }
  }
}

async function handleAuth(type) {
  if (type === 'login') {
    const name = document.getElementById('loginName').value;
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPassword').value;

    const payload = { name: name, email: email, password: pass };

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const userObj = await res.json();
        alert(userObj.role === 'admin' ? "Administrator Login Successful!" : "Login Successful!");
        localStorage.setItem('currentUser', JSON.stringify(userObj));
        if (userObj.role === 'admin') {
          window.location.href = 'admin.html';
        } else {
          location.reload();
        }
      } else {
        const errObj = await res.json();
        alert(errObj.message || "Invalid credentials!");
      }
    } catch (err) {
      console.error(err);
      alert("Authentication service unavailable.");
    }
  } else if (type === 'register') {
    const name = document.getElementById('regName').value;
    const mobile = document.getElementById('regMobile').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const role = document.getElementById('regRole').value;

    const payload = { name, mobile, email, password, role };

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const userObj = await res.json();
        alert(`Registration Successful! Account created as ${role.toUpperCase()}.`);
        localStorage.setItem('currentUser', JSON.stringify(userObj));
        if (role === 'admin') {
          window.location.href = 'admin.html';
        } else {
          location.reload();
        }
      } else {
        const errText = await res.text();
        try {
          const errObj = JSON.parse(errText);
          alert(errObj.message || "Registration failed!");
        } catch (e) {
          alert(errText || "Registration failed!");
        }
      }
    } catch (err) {
      console.error(err);
      alert("Registration service unavailable.");
    }
  }
}

function fillAdminCredentialsHelper() {
  document.getElementById('loginName').value = 'System Administrator';
  document.getElementById('loginEmail').value = 'admin@divinetamilnadu.org';
  document.getElementById('loginPassword').value = 'admin123';
}

function handleLogout() {
  if (confirm("Log out from Divine Tamil Nadu?")) {
    localStorage.removeItem('currentUser');
    alert("Logged out successfully. Reverted to Guest Mode.");
    location.reload();
  }
}

function checkProtocolHelper() {
  if (window.location.protocol === 'file:') {
    const banner = document.createElement('div');
    banner.className = 'alert alert-danger text-center m-0 py-2 border-0 rounded-0';
    banner.style.position = 'sticky';
    banner.style.top = '0';
    banner.style.zIndex = '1100';
    banner.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation text-warning me-2"></i> 
      <strong>Running in Offline Mode (file://)</strong>. To connect to the PostgreSQL database, please start your Spring Boot application and open 
      <a href="http://localhost:8080/index.html" target="_blank" class="alert-link text-white text-decoration-underline">http://localhost:8080</a> in your browser.
    `;
    document.body.insertBefore(banner, document.body.firstChild);
  }
}

window.handleAuth = handleAuth;
window.fillAdminCredentialsHelper = fillAdminCredentialsHelper;
window.handleLogout = handleLogout;
window.handleHeroSearch = handleHeroSearch;
window.handleModalSearch = handleModalSearch;
window.quickSearch = quickSearch;
window.filterGodCategory = filterGodCategory;
window.submitContribution = submitContribution;
window.checkProtocolHelper = checkProtocolHelper;
