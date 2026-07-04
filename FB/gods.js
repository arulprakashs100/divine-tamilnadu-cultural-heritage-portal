/* ==========================================================================
   Divine Tamil Nadu - Gods Listing Page Engine (Expanded: 20 Deities)
   ========================================================================== */

// Expanded Deities Database (20 Deities)
const deitiesData = [
  { id: "shiva", name: "Lord Shiva", category: "Shiva", intro: "The Destroyer of evil, cosmic dancer (Natarajar), and source of yoga, meditation, and infinite peace.", weapons: "Trident (Trishula)", vehicle: "Nandi (Bull)", consort: "Goddess Parvati", image: "assets/images/shiva.png", rating: " Supreme" },
  { id: "murugan", name: "Lord Murugan", category: "Murugan", intro: "The divine general of devas, Lord of hills, beauty, youth, and wisdom. Deeply integrated with Tamil culture.", weapons: "Vel (Spear)", vehicle: "Peacock (Mayil)", consort: "Valli & Deivayanai", image: "assets/images/murugan.png", rating: " Popular" },
  { id: "vinayagar", name: "Lord Vinayagar", category: "Vinayagar", intro: "Lord of wisdom, beginnings, and remover of obstacles. First worshipped in all sacred rituals.", weapons: "Broken Tusk, Goad", vehicle: "Mushika (Mouse)", consort: "Siddhi & Riddhi", image: "assets/images/ganesha.png", rating: " Popular" },
  { id: "vishnu", name: "Lord Vishnu", category: "Vishnu", intro: "The Preserver of the universe, representing cosmic order and descending in various avatars.", weapons: "Sudarshana Chakra", vehicle: "Garuda (Eagle)", consort: "Goddess Lakshmi", image: "assets/images/vishnu.png", rating: " Supreme" },
  { id: "parvati", name: "Goddess Parvati", category: "Parvati", intro: "The mother goddess of power, love, and fertility. Consort of Shiva and mother of Ganesha and Murugan.", weapons: "Lotus, Trident", vehicle: "Lion (Simha)", consort: "Lord Shiva", image: "assets/images/shiva.png", rating: " Divine Mother" },
  { id: "lakshmi", name: "Goddess Lakshmi", category: "Lakshmi", intro: "Goddess of wealth, fortune, prosperity, and beauty. Consort of Vishnu, descending alongside his avatars.", weapons: "Lotus", vehicle: "Owl (Uluka)", consort: "Lord Vishnu", image: "assets/images/lakshmi.png", rating: " Divine Mother" },
  { id: "saraswati", name: "Goddess Saraswati", category: "Saraswati", intro: "Goddess of knowledge, music, art, wisdom, and learning. Represented playing the Veena.", weapons: "Veena, Sacred Book", vehicle: "Swan (Hamsa)", consort: "Lord Brahma", image: "assets/images/saraswati.png", rating: " Divine Mother" },
  { id: "kali", name: "Goddess Kali", category: "Kali", intro: "The fierce goddess of time, change, power, and destruction of ego. Form of Adi Parashakti.", weapons: "Sword (Scimitar)", vehicle: "None / Jackal", consort: "Lord Shiva", image: "assets/images/shiva.png", rating: " Fierce Power" },
  { id: "navagraha", name: "Navagrahas", category: "Navagraha", intro: "The nine major astronomical bodies (planets) in Hindu astrology, influencing human fortunes.", weapons: "Various Astro Symbols", vehicle: "Chariot", consort: "Various", image: "assets/images/temple_hero.png", rating: " Cosmic" },
  { id: "krishna", name: "Lord Krishna", category: "Vishnu", intro: "Eighth avatar of Lord Vishnu. Central character of Mahabharata and teacher of Bhagavad Gita.", weapons: "Sudarshana Chakra, Flute", vehicle: "Garuda", consort: "Rukmini & Satyabhama", image: "assets/images/vishnu.png", rating: " Supreme Avatar" },
  { id: "rama", name: "Lord Rama", category: "Vishnu", intro: "Seventh avatar of Lord Vishnu, symbol of Dharma and ideal king. Protagonist of Ramayana.", weapons: "Kodanda Bow", vehicle: "Chariot", consort: "Goddess Sita", image: "assets/images/rameshwaram.png", rating: " Supreme Avatar" },
  { id: "durga", name: "Goddess Durga", category: "Parvati", intro: "Fierce form of Mother Goddess Parvati, riding a tiger and slaying the demon Mahishasura.", weapons: "Spear, Sword, Bow", vehicle: "Tiger", consort: "Lord Shiva", image: "assets/images/shiva.png", rating: " Divine Mother" },
  { id: "hanuman", name: "Lord Hanuman", category: "Other Deities", intro: "The monkey god representing absolute devotion, loyalty, strength, and humility. Loyal disciple of Lord Rama.", weapons: "Gada (Mace)", vehicle: "None", consort: "Celibate (Naishtika)", image: "assets/images/rameshwaram.png", rating: " Divine Devotee" },
  { id: "ayyappan", name: "Lord Ayyappan", category: "Other Deities", intro: "Deity of Sabarimala, representing self-control. Born from the union of Shiva and Mohini (Vishnu).", weapons: "Bow and Arrow", vehicle: "Tiger", consort: "Celibate", image: "assets/images/temple_hero.png", rating: " Popular" },
  { id: "brahma", name: "Lord Brahma", category: "Other Deities", intro: "The Creator of the universe. One of the Trimurti along with Shiva and Vishnu.", weapons: "Kamandalu (Water pot)", vehicle: "Swan (Hamsa)", consort: "Goddess Saraswati", image: "assets/images/saraswati.png", rating: " Creator God" },
  { id: "indra", name: "Lord Indra", category: "Other Deities", intro: "The king of Devas and heavens. Guardian deity of East direction and controller of rain.", weapons: "Vajra (Thunderbolt)", vehicle: "Airavata (Elephant)", consort: "Goddess Shachi", image: "assets/images/temple_hero.png", rating: " Vedic King" },
  { id: "surya", name: "Surya Bhagavan", category: "Other Deities", intro: "The solar deity, driving a chariot drawn by seven horses representing colors of light.", weapons: "Lotus", vehicle: "Seven-horse Chariot", consort: "Saranyu & Chhaya", image: "assets/images/temple_hero.png", rating: " Vedic Surya" },
  { id: "chandra", name: "Chandra Bhagavan", category: "Other Deities", intro: "The lunar deity, representing mind, emotions, and water cycles. Drives a chariot drawn by ten horses.", weapons: "Club", vehicle: "Antelope Chariot", consort: "27 Nakshatras", image: "assets/images/temple_hero.png", rating: " Lunar Deity" },
  { id: "kamadhenu", name: "Kamadhenu", category: "Other Deities", intro: "The sacred wish-fulfilling cow, emerging from the churning of the cosmic ocean.", weapons: "Abundance Horn", vehicle: "None", consort: "None", image: "assets/images/temple_hero.png", rating: " Sacred Deity" },
  { id: "dakshinamurthy", name: "Dakshinamurthy", category: "Shiva", intro: "Form of Lord Shiva representing the supreme guru of knowledge, music, and yoga.", weapons: "Jnana Mudra, Book", vehicle: "Apasmara (Demon under foot)", consort: "None (Ascetic)", image: "assets/images/shiva.png", rating: " Guru Form" }
];

// Pagination Configuration
const ITEMS_PER_PAGE = 6;
let currentPage = 1;
let filteredDeities = [...deitiesData];

function renderGodsList() {
  const grid = document.getElementById('godsListingGrid');
  const countText = document.getElementById('godCountText');
  const pagination = document.getElementById('godsPagination');

  if (!grid) return;

  grid.innerHTML = '';

  const sortVal = document.getElementById('godSortOption').value;
  filteredDeities.sort((a, b) => {
    if (sortVal === 'name-asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const deitiesPage = filteredDeities.slice(startIdx, endIdx);

  if (countText) {
    countText.textContent = `Showing ${filteredDeities.length} deities (Page ${currentPage} of ${Math.ceil(filteredDeities.length / ITEMS_PER_PAGE) || 1})`;
  }

  if (deitiesPage.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fa-solid fa-face-surprise display-1 text-muted mb-3"></i>
        <h4 class="fw-bold text-dark font-secondary">No Deities Found</h4>
        <p class="text-muted">Try resetting your filters or modifying your search query.</p>
      </div>
    `;
    if (pagination) pagination.innerHTML = '';
    return;
  }

  deitiesPage.forEach(god => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="god-card card h-100 shadow-sm border-0 rounded-4 overflow-hidden position-relative god-list-card">
        <div class="god-card-img-wrap position-relative">
          <img src="${god.image}" class="card-img-top god-img" alt="${god.name}">
          <span class="badge bg-danger position-absolute top-3 start-3 text-uppercase">${god.rating}</span>
        </div>
        <div class="card-body p-4 d-flex flex-column text-dark text-start">
          <span class="text-uppercase text-danger fw-semibold fs-9 tracking-wider d-block mb-1">${god.category} category</span>
          <h3 class="card-title fw-bold text-dark font-secondary fs-4">${god.name}</h3>
          <p class="card-text text-muted fs-8 text-truncate-2">${god.intro}</p>
          
          <div class="god-attributes py-2 my-2 border-top border-bottom d-flex justify-content-between text-muted fs-9 mt-auto">
            <span><i class="fa-solid fa-wand-magic-sparkles text-warning me-1"></i> ${god.weapons.split(',')[0]}</span>
            <span><i class="fa-solid fa-horse text-warning me-1"></i> ${god.vehicle.split(' ')[0]}</span>
          </div>
          <a href="god-details.html?god=${god.id}" class="btn btn-warning w-100 py-2 fw-semibold text-dark rounded-pill mt-2">Read Mythology</a>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });

  renderPagination(filteredDeities.length);
}

function renderPagination(totalItems) {
  const pagination = document.getElementById('godsPagination');
  if (!pagination) return;

  pagination.innerHTML = '';
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  if (totalPages <= 1) return;

  const prevLi = document.createElement('li');
  prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
  prevLi.innerHTML = `<a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>`;
  prevLi.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      renderGodsList();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  });
  pagination.appendChild(prevLi);

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    li.className = `page-item ${currentPage === i ? 'active' : ''}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = i;
      renderGodsList();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    });
    pagination.appendChild(li);
  }

  const nextLi = document.createElement('li');
  nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
  nextLi.innerHTML = `<a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>`;
  nextLi.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      renderGodsList();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  });
  pagination.appendChild(nextLi);
}

function filterDeities() {
  const searchBox = document.getElementById('godSearchBox');
  const activeBtn = document.querySelector('#godCategoryFilterGroup .btn-filter.active');
  
  const query = searchBox ? searchBox.value.toLowerCase().trim() : '';
  const category = activeBtn ? activeBtn.getAttribute('data-category') : 'All';

  filteredDeities = deitiesData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(query) || item.intro.toLowerCase().includes(query);
    const matchesCategory = category === 'All' || item.category === category;
    return matchesSearch && matchesCategory;
  });

  currentPage = 1;
  renderGodsList();
}

function initPageFilters() {
  const searchBox = document.getElementById('godSearchBox');
  const sortOption = document.getElementById('godSortOption');
  const filterBtns = document.querySelectorAll('#godCategoryFilterGroup .btn-filter');

  if (searchBox) {
    searchBox.addEventListener('input', filterDeities);
  }

  if (sortOption) {
    sortOption.addEventListener('change', renderGodsList);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterDeities();
    });
  });

  const params = new URLSearchParams(window.location.search);
  const urlCategory = params.get('category');
  const urlSearch = params.get('search');

  if (urlSearch && searchBox) {
    searchBox.value = urlSearch;
  }

  if (urlCategory) {
    filterBtns.forEach(btn => {
      if (btn.getAttribute('data-category') === urlCategory) {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  }

  filterDeities();
}

document.addEventListener('DOMContentLoaded', () => {
  initPageFilters();
});
