/* ==========================================================================
   Divine Tamil Nadu - Temples Listing Page Engine (Expanded: 15 Temples)
   ========================================================================== */

const templesData = [
  { id: "meenakshi", name: "Meenakshi Amman Temple", god: "Parvati & Shiva", district: "Madurai", state: "Tamil Nadu", location: "Madurai City", intro: "A historic temple complex dedicated to Meenakshi (Parvati) and Sundareswarar (Shiva), famous for its sky-reaching multi-colored towers.", openingTime: "5:00 AM", closingTime: "10:00 PM", dressCode: "Traditional Wear Required", image: "assets/images/meenakshi.png", rating: "4.9", reviewsCount: "12.5k" },
  { id: "brihadisvara", name: "Brihadisvara Temple", god: "Lord Shiva", district: "Thanjavur", state: "Tamil Nadu", location: "Thanjavur City", intro: "A magnificent Chola masterpiece and UNESCO World Heritage site, displaying a massive stone Vimana tower carved from single granite block.", openingTime: "6:00 AM", closingTime: "8:30 PM", dressCode: "Decent Casuals Allowed", image: "assets/images/temple_hero.png", rating: "5.0", reviewsCount: "18k" },
  { id: "chidambaram", name: "Natarajar Temple", god: "Lord Shiva", district: "Cuddalore", state: "Tamil Nadu", location: "Chidambaram Town", intro: "A ancient temple representing Lord Shiva as the cosmic dancer Natarajar. Depicts the element of Space (Akasha) from the Pancha Bhootas.", openingTime: "6:00 AM", closingTime: "10:00 PM", dressCode: "Traditional / Dhoti Required", image: "assets/images/temple_hero.png", rating: "4.8", reviewsCount: "9k" },
  { id: "palani", name: "Dhandayuthapani Swamy Temple", god: "Lord Murugan", district: "Trichy", state: "Tamil Nadu", location: "Palani Hills", intro: "The most famous of Murugan's six abodes (Arupadai Veedu) where he manifests as a mendicant. Pilgrims climb 600+ stone steps.", openingTime: "6:00 AM", closingTime: "9:00 PM", dressCode: "Decent Casuals Allowed", image: "assets/images/temple_hero.png", rating: "4.9", reviewsCount: "11k" },
  { id: "srirangam", name: "Ranganathaswamy Temple", god: "Lord Vishnu", district: "Trichy", state: "Tamil Nadu", location: "Srirangam, Trichy", intro: "The largest active temple complex in the world, dedicated to Lord Vishnu reclining on the serpent Adisesha.", openingTime: "6:00 AM", closingTime: "9:00 PM", dressCode: "Traditional Wear Required", image: "assets/images/temple_hero.png", rating: "4.9", reviewsCount: "15k" },
  { id: "pillayarpatti", name: "Karpaka Vinayagar Temple", god: "Lord Vinayagar", district: "Sivaganga", state: "Tamil Nadu", location: "Pillayarpatti", intro: "A rock-cut cave temple dedicated to Ganesha. The image of Vinayagar is carved out of the hill rock with only two hands.", openingTime: "6:00 AM", closingTime: "8:30 PM", dressCode: "Traditional Wear Preferred", image: "assets/images/ganesha.png", rating: "4.8", reviewsCount: "6.5k" },
  { id: "ramanathaswamy", name: "Ramanathaswamy Temple", god: "Lord Shiva", district: "Trichy", state: "Tamil Nadu", location: "Rameswaram Island", intro: "Famous for its massive pillared corridors, being one of the Char Dham pilgrimage sites, established by Lord Rama.", openingTime: "5:00 AM", closingTime: "9:00 PM", dressCode: "Strict Traditional Required", image: "assets/images/rameshwaram.png", rating: "4.9", reviewsCount: "22k" },
  { id: "kapaleeshwarar", name: "Kapaleeshwarar Temple", god: "Lord Shiva", district: "Chennai", state: "Tamil Nadu", location: "Mylapore, Chennai", intro: "A beautiful 7th-century temple representing Shiva. Goddess Parvati worshipped here in the form of a peahen (Mayil).", openingTime: "6:00 AM", closingTime: "9:00 PM", dressCode: "Traditional Preferred", image: "assets/images/shiva.png", rating: "4.8", reviewsCount: "8k" },
  { id: "parthasarathy", name: "Parthasarathy Temple", god: "Lord Krishna", district: "Chennai", state: "Tamil Nadu", location: "Triplicane, Chennai", intro: "Dedicated to Lord Krishna as the charioteer (Parthasarathy) of Arjuna in the Mahabharata war, featuring Pallava architecture.", openingTime: "6:00 AM", closingTime: "9:00 PM", dressCode: "Traditional Wear Required", image: "assets/images/vishnu.png", rating: "4.7", reviewsCount: "7k" },
  { id: "annamalaiyar", name: "Annamalaiyar Temple", god: "Lord Shiva", district: "Cuddalore", state: "Tamil Nadu", location: "Tiruvannamalai", intro: "The temple represents the element of Fire (Agni). Grandly celebrated during Karthigai Deepam with a hill beacon.", openingTime: "5:30 AM", closingTime: "9:30 PM", dressCode: "Decent Clothes Required", image: "assets/images/temple_hero.png", rating: "4.9", reviewsCount: "14k" },
  { id: "shore", name: "Shore Temple", god: "Lord Shiva & Vishnu", district: "Chennai", state: "Tamil Nadu", location: "Mahabalipuram", intro: "A UNESCO structural temple built by Pallava dynasty overlooking the Bay of Bengal, carved from granite blocks.", openingTime: "6:00 AM", closingTime: "6:00 PM", dressCode: "Decent Casuals Allowed", image: "assets/images/temple_hero.png", rating: "4.8", reviewsCount: "10k" },
  { id: "jambukeswarar", name: "Jambukeswarar Temple", god: "Lord Shiva", district: "Trichy", state: "Tamil Nadu", location: "Thiruvanaikaval, Trichy", intro: "Represents the element of Water (Appu). The sanctum has a fresh water spring flowing beneath the Shiva Lingam.", openingTime: "6:00 AM", closingTime: "8:30 PM", dressCode: "Traditional Required", image: "assets/images/temple_hero.png", rating: "4.7", reviewsCount: "5k" },
  { id: "ekambareswarar", name: "Ekambareswarar Temple", god: "Lord Shiva", district: "Kanchipuram", state: "Tamil Nadu", location: "Kanchipuram", intro: "Represents the element of Earth (Prithvi). Features a sacred 3,500-year-old mango tree yielding four types of mangoes.", openingTime: "6:00 AM", closingTime: "8:30 PM", dressCode: "Traditional Required", image: "assets/images/temple_hero.png", rating: "4.8", reviewsCount: "6k" },
  { id: "nellai", name: "Nellaiappar Temple", god: "Lord Shiva", district: "Sivaganga", state: "Tamil Nadu", location: "Tirunelveli City", intro: "Features massive structural stone pillars that yield musical notes when struck, representing Shiva and Kanthimathi Amman.", openingTime: "6:00 AM", closingTime: "9:00 PM", dressCode: "Traditional Preferred", image: "assets/images/temple_hero.png", rating: "4.8", reviewsCount: "4k" },
  { id: "kumari", name: "Kumari Amman Temple", god: "Goddess Kanya Kumari", district: "Sivaganga", state: "Tamil Nadu", location: "Kanyakumari coast", intro: "Worshipped as the virgin goddess Kanyakumari on the southernmost tip of India at the confluence of three oceans.", openingTime: "4:30 AM", closingTime: "8:30 PM", dressCode: "Dhoti Required for Men", image: "assets/images/temple_hero.png", rating: "4.8", reviewsCount: "11k" }
];

// Pagination Configuration
const ITEMS_PER_PAGE = 6;
let currentPage = 1;
let filteredTemples = [...templesData];

function renderTemplesList() {
  const grid = document.getElementById('templesListingGrid');
  const countText = document.getElementById('templeCountText');
  const pagination = document.getElementById('templesPagination');

  if (!grid) return;

  grid.innerHTML = '';

  const sortVal = document.getElementById('templeSortOption').value;
  filteredTemples.sort((a, b) => {
    if (sortVal === 'name-asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const templesPage = filteredTemples.slice(startIdx, endIdx);

  if (countText) {
    countText.textContent = `Showing ${filteredTemples.length} temples (Page ${currentPage} of ${Math.ceil(filteredTemples.length / ITEMS_PER_PAGE) || 1})`;
  }

  if (templesPage.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fa-solid fa-face-frown display-1 text-muted mb-3"></i>
        <h4 class="fw-bold text-dark font-secondary">No Temples Found</h4>
        <p class="text-muted">Try resetting your filters or modifying your search query.</p>
      </div>
    `;
    if (pagination) pagination.innerHTML = '';
    return;
  }

  templesPage.forEach(temple => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="temple-card card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
        <div class="position-relative overflow-hidden card-img-wrap" style="height: 200px;">
          <img src="${temple.image}" class="card-img-top temple-img w-100 h-100 object-fit-cover" alt="${temple.name}">
          <div class="temple-rating position-absolute top-3 end-3 bg-white px-2 py-1 rounded shadow-sm fs-9 fw-bold text-dark">
            <i class="fa-solid fa-star text-warning"></i> ${temple.rating} (${temple.reviewsCount})
          </div>
        </div>
        <div class="card-body p-4 d-flex flex-column text-dark text-start">
          <span class="text-uppercase text-danger fw-semibold fs-9 tracking-wider d-block mb-1">${temple.district} District</span>
          <h3 class="card-title fw-bold text-dark font-secondary fs-5">${temple.name}</h3>
          <p class="card-text text-muted fs-8 text-truncate-2 mb-3">${temple.intro}</p>
          
          <div class="temple-details-bar d-flex justify-content-between py-2 border-top border-bottom text-muted fs-9 mb-3 mt-auto">
            <span><i class="fa-solid fa-vest me-1 text-warning"></i> ${temple.dressCode.split(' ')[0]}</span>
            <span><i class="fa-solid fa-clock me-1 text-warning"></i> ${temple.openingTime} - ${temple.closingTime.split(' ')[0]}</span>
          </div>
          <a href="temple-details.html?temple=${temple.id}" class="btn btn-outline-danger w-100 py-2 fw-semibold rounded-pill">View Details & Map</a>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });

  renderPagination(filteredTemples.length);
}

function renderPagination(totalItems) {
  const pagination = document.getElementById('templesPagination');
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
      renderTemplesList();
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
      renderTemplesList();
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
      renderTemplesList();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  });
  pagination.appendChild(nextLi);
}

function filterTemples() {
  const searchBox = document.getElementById('templeSearchBox');
  const activeBtn = document.querySelector('#templeDistrictFilterGroup .btn-filter.active');
  
  const query = searchBox ? searchBox.value.toLowerCase().trim() : '';
  const district = activeBtn ? activeBtn.getAttribute('data-district') : 'All';

  filteredTemples = templesData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(query) || 
                          item.location.toLowerCase().includes(query) || 
                          item.intro.toLowerCase().includes(query);
    const matchesDistrict = district === 'All' || item.district === district;
    return matchesSearch && matchesDistrict;
  });

  currentPage = 1;
  renderTemplesList();
}

function initPageFilters() {
  const searchBox = document.getElementById('templeSearchBox');
  const sortOption = document.getElementById('templeSortOption');
  const filterBtns = document.querySelectorAll('#templeDistrictFilterGroup .btn-filter');

  if (searchBox) {
    searchBox.addEventListener('input', filterTemples);
  }

  if (sortOption) {
    sortOption.addEventListener('change', renderTemplesList);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterTemples();
    });
  });

  const params = new URLSearchParams(window.location.search);
  const urlDistrict = params.get('district');
  const urlSearch = params.get('search');

  if (urlSearch && searchBox) {
    searchBox.value = urlSearch;
  }

  if (urlDistrict) {
    filterBtns.forEach(btn => {
      if (btn.getAttribute('data-district') === urlDistrict) {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  }

  filterTemples();
}

document.addEventListener('DOMContentLoaded', () => {
  initPageFilters();
});
