/* ==========================================================================
   Divine Tamil Nadu - Gallery Page Engine
   ========================================================================== */

const galleryDatabase = [
  { title: "Lord Shiva Meditating", category: "God", image: "assets/images/shiva.png" },
  { title: "Lord Murugan with Vel", category: "God", image: "assets/images/murugan.png" },
  { title: "Lord Vinayagar Seated", category: "God", image: "assets/images/ganesha.png" },
  { title: "Lord Vishnu Sleeping on Adisesha", category: "God", image: "assets/images/vishnu.png" },
  { title: "Goddess Lakshmi on Lotus", category: "God", image: "assets/images/lakshmi.png" },
  { title: "Goddess Saraswati Playing Veena", category: "God", image: "assets/images/saraswati.png" },
  { title: "Madurai Meenakshi Temple Gopurams", category: "Temple", image: "assets/images/meenakshi.png" },
  { title: "Rameswaram Temple Corridor", category: "Temple", image: "assets/images/rameshwaram.png" },
  { title: "Thanjavur Brihadisvara Tower", category: "Temple", image: "assets/images/temple_hero.png" }
];

let activeFilter = 'All';

function renderGalleryGrid() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const matches = galleryDatabase.filter(item => activeFilter === 'All' || item.category === activeFilter);

  matches.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="gallery-card-item" onclick="openLightbox('${item.title}', '${item.category}', '${item.image}')">
        <img src="${item.image}" alt="${item.title}">
        <div class="gallery-hover-overlay">
          <h5 class="fw-bold font-secondary text-white mb-0">${item.title}</h5>
          <small class="text-warning">${item.category}</small>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });
}

function openLightbox(title, category, image) {
  document.getElementById('lightboxImage').src = image;
  document.getElementById('lightboxImage').alt = title;
  document.getElementById('lightboxTitle').textContent = title;
  document.getElementById('lightboxCategory').textContent = category;

  const modalEl = document.getElementById('lightboxModal');
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
}

function initGalleryFilters() {
  const btns = document.querySelectorAll('#galleryFilterTabs .btn-gallery-filter');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderGalleryGrid();
    });
  });

  renderGalleryGrid();
}

document.addEventListener('DOMContentLoaded', () => {
  initGalleryFilters();
});

window.openLightbox = openLightbox;
