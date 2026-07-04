/* ==========================================================================
   Divine Tamil Nadu - Festivals Page Engine
   ========================================================================== */

const festivalsData = [
  {
    id: "pongal",
    name: "Thai Pongal",
    month: "January",
    date: "Mid-January (Thai 1st)",
    deity: "Lord Surya (Sun God)",
    icon: "fa-seedling",
    significance: "A multi-day harvest festival dedicated to thanking the Sun God, Surya, for agricultural abundance. Families boil new rice in milk in earthen pots until it overflows, chanting 'Pongalo Pongal!' to symbolize prosperity.",
    temples: "Celebrated universally, with special rituals at all agrarian temples."
  },
  {
    id: "thaipusam",
    name: "Thaipusam",
    month: "January",
    date: "January / February (Thai Pusam Star)",
    deity: "Lord Murugan",
    icon: "fa-shield-halved",
    significance: "Commemorates the day Goddess Parvati presented the sacred Vel (spear) to Lord Murugan to vanquish the demon Soorapadman. Devotees carry 'Kavadis' and pierce their skin with small lances as acts of penance and gratitude.",
    temples: "Grandly celebrated at the Palani Murugan Temple, Thiruchendur, and Swamimalai."
  },
  {
    id: "panguni_uthiram",
    name: "Panguni Uthiram",
    month: "March",
    date: "March / April (Panguni Uthiram Star)",
    deity: "Lord Shiva & Goddess Parvati",
    icon: "fa-ring",
    significance: "Celebrates the divine marriages of Lord Shiva and Parvati, Lord Murugan and Deivayanai, and Rama and Sita. It is a day of cosmic unions and relationships.",
    temples: "Madurai Meenakshi, Mylapore Kapaleeshwarar, and Tiruvarur temples."
  },
  {
    id: "chithirai_thiruvizha",
    name: "Chithirai Thiruvizha",
    month: "April",
    date: "April / May (Chithirai Month)",
    deity: "Goddess Meenakshi & Sundareswarar",
    icon: "fa-gopuram",
    significance: "A grand 10-day festival depicting the coronation and wedding of Goddess Meenakshi with Lord Sundareswarar, followed by Lord Alagar (Vishnu) entering the Vaigai River.",
    temples: "Madurai Meenakshi Amman Temple (Madurai)."
  },
  {
    id: "vinayagar_chaturthi",
    name: "Vinayagar Chaturthi",
    month: "August",
    date: "August / September",
    deity: "Lord Vinayagar (Ganesha)",
    icon: "fa-om",
    significance: "Marks the birthday of Lord Ganesha, the lord of wisdom. Clay idols of Ganesha are made, worshipped with sweet Modaks, and later immersed in water bodies (visarjan).",
    temples: "Pillayarpatti Karpaka Vinayagar Temple, Trichy Rockfort Ucchi Pillayar Temple."
  },
  {
    id: "karthigai_deepam",
    name: "Karthigai Deepam",
    month: "November",
    date: "November / December (Karthigai Month)",
    deity: "Lord Shiva",
    icon: "fa-fire",
    significance: "The festival of lights, celebrating Shiva appearing as an infinite pillar of fire. Devotees light clay oil lamps (diyas) in rows. A giant beacon is lit atop the holy Annamalai hill.",
    temples: "Annamalaiyar Temple (Tiruvannamalai)."
  }
];

let activeMonth = 'All';

function renderFestivalsList() {
  const grid = document.getElementById('festivalsListingGrid');
  const countText = document.getElementById('festivalCountText');

  if (!grid) return;
  grid.innerHTML = '';

  const searchBox = document.getElementById('festivalSearchBox');
  const query = searchBox ? searchBox.value.toLowerCase().trim() : '';

  const matches = festivalsData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(query) || 
                          item.deity.toLowerCase().includes(query) || 
                          item.significance.toLowerCase().includes(query);
    const matchesMonth = activeMonth === 'All' || item.month === activeMonth;
    return matchesSearch && matchesMonth;
  });

  if (countText) {
    countText.textContent = `Showing ${matches.length} festivals`;
  }

  if (matches.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fa-solid fa-calendar-xmark display-1 text-muted mb-3"></i>
        <h4 class="fw-bold font-secondary text-dark">No Festivals Found</h4>
        <p class="text-muted">Try resetting month filters or check your spelling.</p>
      </div>
    `;
    return;
  }

  matches.forEach(fest => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
        <div class="card-header border-0 bg-warning text-dark py-3 fw-bold text-center text-uppercase fs-9 tracking-widest">
          ${fest.date}
        </div>
        <div class="card-body p-4 text-center d-flex flex-column">
          <div class="festival-icon-wrap bg-warning-light text-warning mx-auto mb-3">
            <i class="fa-solid ${fest.icon} fs-2"></i>
          </div>
          <h4 class="card-title fw-bold text-dark font-secondary fs-5">${fest.name}</h4>
          <span class="text-uppercase text-danger fw-semibold fs-9 tracking-wider d-block mb-2">Deity: ${fest.deity}</span>
          <p class="text-muted fs-8 text-truncate-2 mb-3 mt-auto">${fest.significance}</p>
          
          <button class="btn btn-outline-danger w-100 py-2 fw-semibold rounded-pill mt-auto" onclick="openFestivalDetails('${fest.id}')">
            Read Significance
          </button>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });
}

function openFestivalDetails(id) {
  const fest = festivalsData.find(item => item.id === id);
  if (!fest) return;

  document.getElementById('modalFestivalName').textContent = fest.name;
  document.getElementById('modalFestivalDate').textContent = `Month: ${fest.month} (${fest.date})`;
  document.getElementById('modalFestivalDeity').textContent = fest.deity;
  document.getElementById('modalFestivalSignificance').innerHTML = `
    <p>${fest.significance}</p>
    <p><strong>Primary Celebrations:</strong> ${fest.temples}</p>
  `;

  // Set modal icon
  const iconEl = document.getElementById('modalFestivalIcon');
  iconEl.className = `fa-solid ${fest.icon} display-4`;

  // Show Modal
  const modalEl = document.getElementById('festivalDetailModal');
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
}

function initPageFilters() {
  const searchBox = document.getElementById('festivalSearchBox');
  const filterBtns = document.querySelectorAll('#festivalMonthFilterGroup .btn-filter');

  if (searchBox) {
    searchBox.addEventListener('input', renderFestivalsList);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeMonth = btn.getAttribute('data-month');
      renderFestivalsList();
    });
  });

  renderFestivalsList();
}

document.addEventListener('DOMContentLoaded', () => {
  initPageFilters();
});

window.openFestivalDetails = openFestivalDetails;
