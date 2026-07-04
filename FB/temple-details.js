/* ==========================================================================
   Divine Tamil Nadu - Temple Details Page Engine (Expanded: 15 Temples)
   ========================================================================== */

const templeDetailsDb = {
  meenakshi: {
    name: "Meenakshi Amman Temple",
    god: "Goddess Meenakshi & Lord Sundareswarar",
    district: "Madurai",
    hours: "5:00 AM - 12:30 PM, 4:00 PM - 10:00 PM",
    dress: "Traditional Wear Required",
    rating: "4.9 / 5.0",
    image: "assets/images/meenakshi.png",
    intro: "A historic temple complex located in the temple city of Madurai, dedicated to Goddess Meenakshi (a form of Parvati) and Sundareswarar (Shiva).",
    history: `
      <p>The Madurai Meenakshi Temple is the heart and lifeline of the 2,500-year-old city of Madurai. According to legends, the temple was founded by Indra, the king of Devas, who found a Swayambu Lingam here and built a shrine. The presiding deity, Goddess Meenakshi, was born as a royal princess from a sacrificial fire to the childless Pandyan King Malayadwaja Pandian and Queen Kanchanamalai.</p>
      <p>She ruled the kingdom with absolute bravery, conquering all directions. When she reached Mount Kailash, she met Lord Shiva (as Sundareswarar), and upon seeing him, her third breast (a birthmark) vanished, fulfilling a prophecy that she would marry him. The grand wedding took place in Madurai, an event still celebrated annually with immense fervor as the <strong>Chithirai Thiruvizha</strong> festival.</p>
    `,
    architecture: `
      <p>The temple is a masterpiece of Dravidian architecture, featuring 14 majestic gopurams (gateway towers), ranging from 45 to 50 meters in height. The tallest is the southern tower, standing at 51.9 meters. The complex is designed around concentric enclosures conforming to the ancient Shilpa Shastras.</p>
      <p>Key highlights include the <strong>Ayirakkal Mandapam</strong> (Hall of Thousand Pillars), where each pillar is carved with lifelike statues of mythological figures, and the musical pillars which produce distinct musical notes when tapped. The temple also features the sacred <i>Porthamarai Kulam</i> (Golden Lotus Pond) where ancient Tamil poets of the Sangam era evaluated their literary works.</p>
    `,
    timeline: [
      { year: "6th Century CE", desc: "First historical mentions of the temple in early Sangam literature." },
      { year: "12th Century CE", desc: "Expansion under Chola and Pandya kings, building major inner enclosures." },
      { year: "14th Century CE", desc: "Sacked by Malik Kafur, destroying outer shrines and valuables." },
      { year: "16th-17th Century", desc: "Rebuilt and expanded to its current massive form by King Thirumalai Nayakar." }
    ],
    timingsDetails: `
      <ul class="list-unstyled mb-0">
        <li class="mb-2"><strong class="text-dark">Morning:</strong> 5:00 AM to 12:30 PM</li>
        <li class="mb-2"><strong class="text-dark">Evening:</strong> 4:00 PM to 10:00 PM</li>
        <li><strong class="text-dark">Average Visit Time:</strong> 2 to 3 hours.</li>
      </ul>
    `,
    contactInfo: `
      <p class="mb-1"><strong class="text-dark">Phone:</strong> +91 452 234 4360</p>
      <p class="mb-0"><strong class="text-dark">Email:</strong> maduraimeenakshitemple@hrce.tn.gov.in</p>
    `,
    accommodations: [
      { name: "Heritage Madurai", type: "Resort (5-star)", rating: "4.7", distance: "4.5 km", image: "assets/images/temple_hero.png" },
      { name: "Sree Sabarees Restaurant", type: "Pure Vegetarian Dining", rating: "4.4", distance: "0.2 km", image: "assets/images/ganesha.png" }
    ]
  },
  brihadisvara: {
    name: "Brihadisvara Temple",
    god: "Lord Shiva (Peruvudaiyar)",
    district: "Thanjavur",
    hours: "6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM",
    dress: "Decent Casuals Allowed",
    rating: "5.0 / 5.0",
    image: "assets/images/temple_hero.png",
    intro: "A magnificent Chola masterpiece and UNESCO World Heritage site, displaying a massive stone Vimana tower carved from single granite blocks.",
    history: `
      <p>Built by the great Chola Emperor Rajaraja Chola I between 1003 and 1010 CE, the Brihadisvara Temple (Periya Kovil) is an outstanding example of Chola architecture. The temple was built to establish a spiritual focal point for the vast Chola Empire.</p>
    `,
    architecture: `
      <p>The temple is built entirely of granite, transported from quarries over 50 kilometers away. The central Vimana (temple tower) rises to a height of 66 meters and is capped by a massive octagonal stone dome weighing around 80 tons, carved from a single block of granite.</p>
    `,
    timeline: [
      { year: "1003 CE", desc: "Foundation laid by Emperor Rajaraja Chola I." },
      { year: "1010 CE", desc: "Construction completed. Dedicated gold ornaments and lands." },
      { year: "1987 CE", desc: "Declared a UNESCO World Heritage Site." }
    ],
    timingsDetails: `
      <ul class="list-unstyled mb-0">
        <li class="mb-2"><strong class="text-dark">Morning:</strong> 6:00 AM to 12:30 PM</li>
        <li class="mb-2"><strong class="text-dark">Evening:</strong> 4:00 PM to 8:30 PM</li>
        <li><strong class="text-dark">Average Visit Time:</strong> 1.5 to 2 hours.</li>
      </ul>
    `,
    contactInfo: `
      <p class="mb-1"><strong class="text-dark">Phone:</strong> +91 4362 223 330</p>
      <p class="mb-0"><strong class="text-dark">Email:</strong> thanjavurperiyakovil@hrce.tn.gov.in</p>
    `,
    accommodations: [
      { name: "Svatma Resort", type: "Heritage Resort", rating: "4.8", distance: "2.1 km", image: "assets/images/temple_hero.png" }
    ]
  },
  chidambaram: {
    name: "Natarajar Temple",
    god: "Lord Shiva (Natarajar)",
    district: "Cuddalore",
    hours: "6:00 AM - 12:00 PM, 5:00 PM - 10:00 PM",
    dress: "Strict Traditional Wear (Dhoti for Men)",
    rating: "4.8 / 5.0",
    image: "assets/images/temple_hero.png",
    intro: "The ancient temple representing Lord Shiva as the cosmic dancer Natarajar. Represents the space element (Akasha) of Pancha Bhootas.",
    history: `
      <p>Chidambaram Natarajar Temple is one of the oldest and most revered Shiva temples. The word 'Chidambaram' denotes the sky of consciousness. Sages Patanjali and Vyagrapada witnessed Shiva's Dance of Bliss here.</p>
    `,
    architecture: `
      <p>Unlike other temples where Shiva is represented as a Lingam, Chidambaram represents Shiva in his human form as Natarajar. Features the Chidambara Rahasyam (Chidambaram Secret) - representing empty space.</p>
    `,
    timeline: [
      { year: "5th Century CE", desc: "Sages Patanjali and Vyagrapada witness the Ananda Tandava." },
      { year: "10th Century CE", desc: "Chola Kings cover the temple roof with gold tiles." }
    ],
    timingsDetails: `
      <ul class="list-unstyled mb-0">
        <li class="mb-2"><strong class="text-dark">Morning:</strong> 6:00 AM to 12:00 PM</li>
        <li class="mb-2"><strong class="text-dark">Evening:</strong> 5:00 PM to 10:00 PM</li>
        <li><strong class="text-dark">Average Visit Time:</strong> 1.5 to 2 hours.</li>
      </ul>
    `,
    contactInfo: `
      <p class="mb-1"><strong class="text-dark">Phone:</strong> +91 4144 222 238</p>
    `,
    accommodations: [
      { name: "Hotel Saradharam", type: "Hotel (Comfort)", rating: "4.0", distance: "0.5 km", image: "assets/images/temple_hero.png" }
    ]
  },
  ramanathaswamy: {
    name: "Ramanathaswamy Temple",
    god: "Lord Shiva & Lord Rama",
    district: "Trichy", // Grouped
    hours: "5:00 AM - 1:00 PM, 3:00 PM - 9:00 PM",
    dress: "Strict Traditional Required",
    rating: "4.9 / 5.0",
    image: "assets/images/rameshwaram.png",
    intro: "Famous for its massive pillared corridors, being one of the Char Dham pilgrimage sites, established by Lord Rama.",
    history: `
      <p>According to the Ramayana, Lord Rama established this temple and worshipped the Shiva Lingam here to seek absolution for sins committed during the war against Ravana in Lanka. The temple features 22 sacred water wells (Theerthams) in which pilgrims bathe before entering the main sanctum.</p>
    `,
    architecture: `
      <p>The temple has the longest corridor among all Hindu temples in India, with around 1212 pillars carved in Dravidian style. The outer corridor is flanked by beautiful columns with intricate capital designs.</p>
    `,
    timeline: [
      { year: "Treta Yuga", desc: "Lord Rama and Sita establish the Shiva Lingam." },
      { year: "12th Century CE", desc: "Sethupathi rulers begin structural expansion of the stone corridors." }
    ],
    timingsDetails: `
      <ul class="list-unstyled mb-0">
        <li class="mb-2"><strong class="text-dark">Morning:</strong> 5:00 AM to 1:00 PM</li>
        <li class="mb-2"><strong class="text-dark">Evening:</strong> 3:00 PM to 9:00 PM</li>
        <li><strong class="text-dark">Average Visit Time:</strong> 2 to 3 hours.</li>
      </ul>
    `,
    contactInfo: `
      <p class="mb-1"><strong class="text-dark">Phone:</strong> +91 4573 221 243</p>
    `,
    accommodations: [
      { name: "Daiwik Hotel Rameswaram", type: "Hotel (3-star)", rating: "4.5", distance: "1.2 km", image: "assets/images/rameshwaram.png" }
    ]
  }
};

// Seed basic mock profiles for the other 11 temples to ensure no broken details view
const remainingTempleIds = [
  "palani", "srirangam", "pillayarpatti", "kapaleeshwarar", "parthasarathy", "annamalaiyar", "shore", "jambukeswarar", "ekambareswarar", "nellai", "kumari"
];

const basicTemplesTemplates = {
  palani: { name: "Arulmigu Dhandayuthapani Swamy Temple", god: "Lord Murugan", district: "Trichy", hours: "6:00 AM - 9:00 PM", dress: "Decent Casuals", image: "assets/images/temple_hero.png" },
  srirangam: { name: "Ranganathaswamy Temple", god: "Lord Vishnu", district: "Trichy", hours: "6:00 AM - 9:00 PM", dress: "Traditional Required", image: "assets/images/temple_hero.png" },
  pillayarpatti: { name: "Karpaka Vinayagar Temple", god: "Lord Vinayagar", district: "Sivaganga", hours: "6:00 AM - 8:30 PM", dress: "Traditional Preferred", image: "assets/images/ganesha.png" },
  kapaleeshwarar: { name: "Kapaleeshwarar Temple", god: "Lord Shiva", district: "Chennai", hours: "6:00 AM - 9:00 PM", dress: "Traditional Preferred", image: "assets/images/shiva.png" },
  parthasarathy: { name: "Parthasarathy Temple", god: "Lord Krishna", district: "Chennai", hours: "6:00 AM - 9:00 PM", dress: "Traditional Required", image: "assets/images/vishnu.png" },
  annamalaiyar: { name: "Annamalaiyar Temple", god: "Lord Shiva", district: "Cuddalore", hours: "5:30 AM - 9:30 PM", dress: "Decent Clothes", image: "assets/images/temple_hero.png" },
  shore: { name: "Shore Temple", god: "Lord Shiva & Vishnu", district: "Chennai", hours: "6:00 AM - 6:00 PM", dress: "Decent Casuals", image: "assets/images/temple_hero.png" },
  jambukeswarar: { name: "Jambukeswarar Temple", god: "Lord Shiva", district: "Trichy", hours: "6:00 AM - 8:30 PM", dress: "Traditional Required", image: "assets/images/temple_hero.png" },
  ekambareswarar: { name: "Ekambareswarar Temple", god: "Lord Shiva", district: "Kanchipuram", hours: "6:00 AM - 8:30 PM", dress: "Traditional Required", image: "assets/images/temple_hero.png" },
  nellai: { name: "Nellaiappar Temple", god: "Lord Shiva", district: "Sivaganga", hours: "6:00 AM - 9:00 PM", dress: "Traditional Preferred", image: "assets/images/temple_hero.png" },
  kumari: { name: "Kumari Amman Temple", god: "Goddess Kanya Kumari", district: "Sivaganga", hours: "4:30 AM - 8:30 PM", dress: "Dhoti Required for Men", image: "assets/images/temple_hero.png" }
};

remainingTempleIds.forEach(id => {
  const t = basicTemplesTemplates[id];
  templeDetailsDb[id] = {
    name: t.name,
    god: t.god,
    district: t.district,
    hours: t.hours,
    dress: t.dress,
    rating: "4.8 / 5.0",
    image: t.image,
    intro: `A highly revered structural temple dedicated to ${t.god}, situated in ${t.district} District, Tamil Nadu. Represents classical Dravidian layout elements.`,
    history: `<p>The legendary origin of ${t.name} dates back centuries, associated with local saints, historical kings (Chola, Pandya, or Pallava rulers) and divine miracles. The local records maintain authentic logs of its ancient assets, sacred trees, and spiritual pools.</p>`,
    architecture: `<p>Built using stone masonry and classical rules, this temple complex features grand gateways, intricate wall reliefs, and a sanctum representing traditional Dravidian craftsmanship.</p>`,
    timeline: [
      { year: "7th-9th Century", desc: "First structures carved out by regional kings." },
      { year: "15th Century", desc: "Expansion of mandapams and outer towers under Vijayanagara influence." }
    ],
    timingsDetails: `
      <ul class="list-unstyled mb-0">
        <li><strong class="text-dark">Visiting Hours:</strong> ${t.hours}</li>
        <li><strong class="text-dark">Average Visit Time:</strong> 1 to 2 hours.</li>
      </ul>
    `,
    contactInfo: `<p class="mb-1"><strong class="text-dark">Office:</strong> HR&CE Office, ${t.name}, Tamil Nadu.</p>`,
    accommodations: [
      { name: "Local Devasthanam Cottages", type: "Pilgrim Lodging", rating: "4.2", distance: "0.5 km", image: "assets/images/temple_hero.png" }
    ]
  };
});

function renderTempleDetails() {
  const params = new URLSearchParams(window.location.search);
  const templeId = params.get('temple');

  const mainHero = document.getElementById('templeHeroSection');
  const detailsRow = document.querySelector('section:nth-of-type(2)');
  const notFoundSection = document.getElementById('templeNotFoundSection');

  if (!templeId || !templeDetailsDb[templeId]) {
    if (mainHero) mainHero.classList.add('d-none');
    if (detailsRow) detailsRow.classList.add('d-none');
    if (notFoundSection) notFoundSection.classList.remove('d-none');
    return;
  }

  const temple = templeDetailsDb[templeId];

  // Populate Hero
  if (document.getElementById('breadcrumbTemple')) document.getElementById('breadcrumbTemple').textContent = temple.name;
  if (document.getElementById('templeDeityText')) document.getElementById('templeDeityText').textContent = temple.god;
  if (document.getElementById('templeName')) document.getElementById('templeName').textContent = temple.name;
  if (document.getElementById('templeIntro')) document.getElementById('templeIntro').textContent = temple.intro;
  if (document.getElementById('templeDistrict')) document.getElementById('templeDistrict').textContent = temple.district;
  if (document.getElementById('templeHours')) document.getElementById('templeHours').textContent = temple.hours.split(',')[0];
  if (document.getElementById('templeDress')) document.getElementById('templeDress').textContent = temple.dress.split(' ')[0];
  if (document.getElementById('templeRating')) document.getElementById('templeRating').textContent = temple.rating;
  if (document.getElementById('templeHeroImage')) {
    document.getElementById('templeHeroImage').src = temple.image;
    document.getElementById('templeHeroImage').alt = temple.name;
  }

  // Populate Content
  if (document.getElementById('templeHistory')) document.getElementById('templeHistory').innerHTML = temple.history;
  if (document.getElementById('templeArchitecture')) document.getElementById('templeArchitecture').innerHTML = temple.architecture;
  if (document.getElementById('mapTitle')) document.getElementById('mapTitle').textContent = `${temple.name} Location Map`;

  // Populate Timeline
  const timelineBox = document.getElementById('templeTimeline');
  if (timelineBox && temple.timeline) {
    timelineBox.innerHTML = '';
    temple.timeline.forEach(item => {
      const div = document.createElement('div');
      div.className = 'timeline-item ps-4';
      div.innerHTML = `
        <h6 class="timeline-year font-secondary">${item.year}</h6>
        <p class="timeline-desc text-muted mb-0">${item.desc}</p>
      `;
      timelineBox.appendChild(div);
    });
  }

  // Populate Timings & Contact Details
  if (document.getElementById('templeTimingsDetails')) document.getElementById('templeTimingsDetails').innerHTML = temple.timingsDetails;
  if (document.getElementById('templeContactBox')) document.getElementById('templeContactBox').innerHTML = temple.contactInfo;

  // Populate Accommodations
  const accomBox = document.getElementById('templeAccommodations');
  if (accomBox && temple.accommodations) {
    accomBox.innerHTML = '';
    temple.accommodations.forEach(acc => {
      const card = document.createElement('div');
      card.className = 'related-item-card d-flex align-items-center p-2 rounded-3 mb-2';
      card.innerHTML = `
        <img src="${acc.image}" class="related-item-img me-3" alt="${acc.name}">
        <div>
          <h6 class="fw-bold fs-8 mb-0">${acc.name}</h6>
          <small class="text-muted fs-9">${acc.type} • ${acc.distance} away</small>
          <div class="fs-9 text-warning"><i class="fa-solid fa-star"></i> ${acc.rating}</div>
        </div>
      `;
      accomBox.appendChild(card);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderTempleDetails();
});
