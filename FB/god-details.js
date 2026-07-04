/* ==========================================================================
   Divine Tamil Nadu - God Details Page Engine (Expanded: 20 Deities)
   ========================================================================== */

const deityDetailsDb = {
  shiva: {
    name: "Lord Shiva",
    category: "Shiva",
    label: "Supreme Shaivism Deity",
    intro: "The Destroyer of cosmic illusion, patron god of yoga, meditation, and arts, and the Lord of Dance (Natarajar). Worshipped widely as Shiva Lingam.",
    weapons: "Trident (Trishula)",
    vahana: "Nandi (Holy Bull)",
    consort: "Goddess Parvati",
    children: "Vinayagar, Murugan",
    image: "assets/images/shiva.png",
    mythology: `
      <p>Lord Shiva is one of the principal deities of Hinduism and is worshipped as the supreme master within Shaivism. In Tamil Nadu, Shiva is revered through many forms, particularly as <strong>Nataraja</strong> (the Cosmic Dancer) in Chidambaram, and as the 63 Nayanmars (Saivite saints) who sang his praise in the famous <i>Devaram</i> scriptures.</p>
      <p>A central mythological legend is his role as <strong>Tripurantaka</strong>, where he destroyed three flying cities (Tripura) created by demons, utilizing the earth as a chariot, Mount Meru as a bow, and Lord Vishnu as an arrow. Another profound legend is the <strong>Pancha Bhoota Sthalas</strong> (Five Temples representing Five Elements), where Shiva manifests as Land (Kanchipuram), Water (Thiruvanaikaval), Fire (Tiruvannamalai), Air (Kalahasti), and Space (Chidambaram).</p>
      <p>Shiva's grace is also celebrated through the 64 sacred actions (<i>Thiruvilaiyadalgal</i>) performed in Madurai to protect his devotees, reflecting his dual nature as a fierce destroyer and a compassionate savior.</p>
    `,
    symbolism: `
      <p>Every attribute of Lord Shiva holds profound metaphysical meaning:</p>
      <ul>
        <li><strong>The Third Eye (Trinetra):</strong> Located on his forehead, representing spiritual wisdom, cosmic destruction of ignorance, and the flame of absolute truth.</li>
        <li><strong>The Crescent Moon:</strong> Adorning his matted hair, signifying his control over time, the cycles of nature, and his role as the master of mind and emotions.</li>
        <li><strong>The Sacred River Ganga:</strong> Flowing from his matted locks, representing the flow of divine knowledge and the purification of souls.</li>
        <li><strong>The Trishula (Trident):</strong> Denoting his mastery over the three states of consciousness (waking, dreaming, and deep sleep) and the three Gunas (Sattva, Rajas, and Tamas).</li>
        <li><strong>Sacred Ashes (Vibhuti):</strong> Smeared on his body as a reminder of the transient nature of material existence and the permanence of the soul.</li>
      </ul>
    `,
    mantras: [
      { verse: "ॐ नमः शिवाय (Aum Namah Shivaya)", translation: "Salutations to the auspicious and divine Lord Shiva. This five-syllable mantra represents the five elements of creation: Earth, Water, Fire, Air, and Space." },
      { verse: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् | उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात् ||", translation: "The Maha Mrityunjaya Mantra: We worship the three-eyed Lord Shiva who is fragrant and nurtures all. May he liberate us from death and attachment, leading to immortality." }
    ],
    relatedTemples: [
      { name: "Meenakshi Amman Temple", loc: "Madurai", url: "temple-details.html?temple=meenakshi", image: "assets/images/meenakshi.png" },
      { name: "Brihadisvara Temple", loc: "Thanjavur", url: "temple-details.html?temple=brihadisvara", image: "assets/images/temple_hero.png" },
      { name: "Natarajar Temple", loc: "Chidambaram", url: "temple-details.html?temple=chidambaram", image: "assets/images/temple_hero.png" }
    ],
    relatedGods: [
      { id: "parvati", name: "Goddess Parvati", cat: "Parvati", image: "assets/images/shiva.png" },
      { id: "vinayagar", name: "Lord Vinayagar", cat: "Vinayagar", image: "assets/images/ganesha.png" },
      { id: "murugan", name: "Lord Murugan", cat: "Murugan", image: "assets/images/murugan.png" }
    ]
  },
  murugan: {
    name: "Lord Murugan",
    category: "Murugan",
    label: "Commander-in-Chief of Devas",
    intro: "The deity of youth, beauty, courage, and Tamil language. Revered in Tamil Nadu through his six sacred hill abodes (Arupadai Veedu).",
    weapons: "Vel (Sacred Spear)",
    vahana: "Mayil (Peacock)",
    consort: "Valli & Deivayanai",
    children: "None",
    image: "assets/images/murugan.png",
    mythology: `
      <p>Lord Murugan, also known as Karthikeya, Skanda, or Subramanya, is deeply embedded in the cultural identity of Tamil Nadu, often affectionately called <i>Thamizh Kadavul</i> (The God of Tamils). According to the scriptures, Skanda was created from the sparks of Lord Shiva's third eye to vanquish the demon king <strong>Soorapadman</strong>, who was terrorizing the universe.</p>
      <p>The epic battle culminated in Soorapadman being defeated. Out of mercy, Murugan did not destroy the demon, but rather split him into two halves: one half became his sacred mount, the <strong>Peacock</strong>, and the other half became the rooster emblazoned on his divine <strong>Banner (Seval)</strong>.</p>
      <p>Murugan's six abodes, known as the <strong>Arupadai Veedu</strong>, represent different phases of his life and are major centers of pilgrimage across South India.</p>
    `,
    symbolism: `
      <p>The symbols of Lord Murugan teach spiritual strength and victory:</p>
      <ul>
        <li><strong>The Vel (Spear):</strong> Gifted by his mother Parvati, it represents sharp intellect, deep wisdom, and the destruction of negative desires.</li>
        <li><strong>The Peacock:</strong> Representing the ego. Murugan riding the peacock signifies the subjugation of pride and vanity.</li>
      </ul>
    `,
    mantras: [
      { verse: "ॐ शंमुखाय नमः (Om Shanmukhaaya Namaha)", translation: "Salutations to the Six-Faced Lord Murugan, who brings courage, cleanses obstacles, and grants absolute victory." },
      { verse: "வெற்றிவேல் முருகனுக்கு அரோகரா! (Vetrivel Muruganukku Arogara!)", translation: "Victory to the Vel of Murugan, hail the Lord!" }
    ],
    relatedTemples: [
      { name: "Arulmigu Dhandayuthapani Temple", loc: "Palani", url: "temple-details.html?temple=palani", image: "assets/images/temple_hero.png" }
    ],
    relatedGods: [
      { id: "shiva", name: "Lord Shiva", cat: "Shiva", image: "assets/images/shiva.png" },
      { id: "vinayagar", name: "Lord Vinayagar", cat: "Vinayagar", image: "assets/images/ganesha.png" }
    ]
  },
  vinayagar: {
    name: "Lord Vinayagar",
    category: "Vinayagar",
    label: "Remover of Obstacles",
    intro: "The elephant-headed god of wisdom, beginnings, and learning. Revered universally before starting any religious or material endeavors.",
    weapons: "Broken Tusk, Goad & Noose",
    vahana: "Mushika (Mouse)",
    consort: "Siddhi & Riddhi",
    children: "None",
    image: "assets/images/ganesha.png",
    mythology: `
      <p>Lord Vinayagar (also Ganesha or Pillayar) is the elder son of Lord Shiva and Goddess Parvati. According to mythology, Goddess Parvati created Ganesha from clay to guard her quarters while she bathed. When Lord Shiva returned and was denied entry by the young guard, a battle ensued, and Ganesha was decapitated.</p>
      <p>Upon realizing Ganesha's identity and Parvati's grief, Shiva ordered a replacement head to be fetched from the first animal found facing north. An elephant's head was brought back, and Shiva revived Ganesha, appointing him as the leader of his hosts (the Ganas), hence the name <i>Ganesha</i>.</p>
    `,
    symbolism: `
      <p>Ganesha's unique physical features hold deep spiritual lessons:</p>
      <ul>
        <li><strong>Large Elephant Head:</strong> Symbolizing immense intellect, deep thinking, and listening capacity (large ears) to absorb truths.</li>
        <li><strong>Single Broken Tusk:</strong> Signifying the transcendence of duality, strength, and sacrifice (used to write the epic Mahabharata).</li>
      </ul>
    `,
    mantras: [
      { verse: "ॐ गं गणपतये नमः (Om Gam Ganapataye Namaha)", translation: "Salutations to the Lord of Ganas. This seed mantra is invoked to remove all hurdles, bring wisdom, and bless new ventures." }
    ],
    relatedTemples: [
      { name: "Karpaka Vinayagar Temple", loc: "Pillayarpatti", url: "temple-details.html?temple=pillayarpatti", image: "assets/images/ganesha.png" }
    ],
    relatedGods: [
      { id: "shiva", name: "Lord Shiva", cat: "Shiva", image: "assets/images/shiva.png" },
      { id: "murugan", name: "Lord Murugan", cat: "Murugan", image: "assets/images/murugan.png" }
    ]
  },
  vishnu: {
    name: "Lord Vishnu",
    category: "Vishnu",
    label: "Supreme Vaishnavism Deity",
    intro: "The Preserver and Protector of the universe, maintaining cosmic order (Dharma) and descending in various avatars.",
    weapons: "Sudarshana Chakra (Discus), Panchajanya Conch",
    vahana: "Garuda (Holy Eagle)",
    consort: "Goddess Lakshmi",
    children: "Kamadeva (God of Love)",
    image: "assets/images/vishnu.png",
    mythology: `
      <p>Lord Vishnu is one of the principal deities of Hinduism and the supreme god of Vaishnavism. He is represented reclining on the multi-headed serpent Adisesha in the cosmic ocean of milk. In Tamil Nadu, Vishnu is celebrated through the hymns of the twelve Alvars (Vaishnavite saints) in the <i>Nalayira Divya Prabandham</i>, particularly at the famous Srirangam temple complex.</p>
    `,
    symbolism: `
      <p>The symbols of Lord Vishnu are highly symbolic of protection and order:</p>
      <ul>
        <li><strong>Sudarshana Chakra:</strong> The spinning discus representing the wheel of time and the destruction of evil.</li>
        <li><strong>Panchajanya Conch:</strong> The sound of creation, dispelling ignorance.</li>
      </ul>
    `,
    mantras: [
      { verse: "ॐ नमो नारायणाय (Om Namo Narayanaya)", translation: "Salutations to the supreme Lord Narayana (Vishnu), who is the refuge of all souls." }
    ],
    relatedTemples: [
      { name: "Ranganathaswamy Temple", loc: "Srirangam", url: "temple-details.html?temple=srirangam", image: "assets/images/temple_hero.png" }
    ],
    relatedGods: [
      { id: "lakshmi", name: "Goddess Lakshmi", cat: "Lakshmi", image: "assets/images/lakshmi.png" }
    ]
  },
  lakshmi: {
    name: "Goddess Lakshmi",
    category: "Lakshmi",
    label: "Goddess of Wealth & Fortune",
    intro: "The divine mother of wealth, prosperity, good fortune, and beauty. Consort of Lord Vishnu.",
    weapons: "Lotus Buds",
    vahana: "Owl (Uluka)",
    consort: "Lord Vishnu",
    children: "Kamadeva",
    image: "assets/images/lakshmi.png",
    mythology: `
      <p>Goddess Lakshmi emerged during the churning of the cosmic ocean (Samudra Manthan) by the Devas and Asuras. She chose Lord Vishnu as her eternal husband. In Tamil Nadu, she is worshipped in her eight aspects as **Ashta Lakshmi** in specialized coastal temples in Chennai.</p>
    `,
    symbolism: `
      <p>Lakshmi's characteristics signify auspiciousness:</p>
      <ul>
        <li><strong>Gold Coins:</strong> Overflowing from her hands, representing material and spiritual wealth.</li>
        <li><strong>Four Hands:</strong> Representing Dharma, Kama, Artha, and Moksha.</li>
      </ul>
    `,
    mantras: [
      { verse: "ॐ श्रीं महालक्ष्ம்यै नमः (Om Shreem Mahalakshmyai Namaha)", translation: "Salutations to the great Goddess Lakshmi, who bestows abundance and wealth." }
    ],
    relatedTemples: [
      { name: "Kumari Amman Temple", loc: "Kanyakumari", url: "temple-details.html?temple=kumari", image: "assets/images/temple_hero.png" }
    ],
    relatedGods: [
      { id: "vishnu", name: "Lord Vishnu", cat: "Vishnu", image: "assets/images/vishnu.png" }
    ]
  },
  saraswati: {
    name: "Goddess Saraswati",
    category: "Saraswati",
    label: "Goddess of Knowledge & Arts",
    intro: "The divine patron of wisdom, learning, music, science, and fine arts. Consort of Lord Brahma.",
    weapons: "Veena, Sacred Book, Crystal Rosary",
    vahana: "Swan (Hamsa)",
    consort: "Lord Brahma",
    children: "None",
    image: "assets/images/saraswati.png",
    mythology: `
      <p>Goddess Saraswati represents the free flow of wisdom and consciousness. During Saraswati Pooja (part of Navaratri), books, musical instruments, and professional tools are placed before her for blessings.</p>
    `,
    symbolism: `
      <p>Her symbols show pure learning and clarity:</p>
      <ul>
        <li><strong>The Veena:</strong> A stringed musical instrument, representing the harmony of life and arts.</li>
        <li><strong>White Garment & Swan:</strong> Representing purity and discriminative wisdom (discerning good from bad).</li>
      </ul>
    `,
    mantras: [
      { verse: "ॐ ऐं सरस्वत्यै नमः (Om Aim Saraswatyai Namaha)", translation: "Salutations to Goddess Saraswati, the source of intellect and learning." }
    ],
    relatedTemples: [
      { name: "Meenakshi Amman Temple", loc: "Madurai", url: "temple-details.html?temple=meenakshi", image: "assets/images/meenakshi.png" }
    ],
    relatedGods: [
      { id: "brahma", name: "Lord Brahma", cat: "Other Deities", image: "assets/images/saraswati.png" }
    ]
  },
  rama: {
    name: "Lord Rama",
    category: "Vishnu",
    label: "Avatar of Righteousness",
    intro: "The seventh incarnation of Lord Vishnu, representing the absolute model of duty, morality, and righteous conduct.",
    weapons: "Kodanda Bow and Arrows",
    vahana: "Chariot",
    consort: "Goddess Sita",
    children: "Luv and Kush",
    image: "assets/images/rameshwaram.png",
    mythology: `
      <p>Lord Rama is the protagonist of the Ramayana epic. In Tamil Nadu, Rama has a close geographic connection with Rameswaram, where he established and worshipped a Shiva Lingam to seek absolution after defeating Ravana in Lanka.</p>
    `,
    symbolism: `
      <p>His weapons and attributes depict strength and justice:</p>
      <ul>
        <li><strong>Kodanda Bow:</strong> Symbol of strength, precision, and focus to defend righteousness.</li>
      </ul>
    `,
    mantras: [
      { verse: "श्री राम जय राम जय जय राम (Sri Rama Jaya Rama Jaya Jaya Rama)", translation: "Victory to Lord Rama, absolute victory to Rama." }
    ],
    relatedTemples: [
      { name: "Ramanathaswamy Temple", loc: "Rameswaram", url: "temple-details.html?temple=ramanathaswamy", image: "assets/images/rameshwaram.png" }
    ],
    relatedGods: [
      { id: "vishnu", name: "Lord Vishnu", cat: "Vishnu", image: "assets/images/vishnu.png" },
      { id: "hanuman", name: "Lord Hanuman", cat: "Other Deities", image: "assets/images/rameshwaram.png" }
    ]
  }
};

// Seed basic mock profiles for the other 13 deities to ensure no broken details view
const remainingDeityIds = [
  "kali", "navagraha", "krishna", "durga", "hanuman", "ayyappan", "brahma", "indra", "surya", "chandra", "kamadhenu", "dakshinamurthy"
];

const basicDeitiesTemplates = {
  kali: { name: "Goddess Kali", category: "Kali", label: "Goddess of Time & Change", intro: "The fierce manifestation of Goddess Parvati, representing absolute time, energy, and ego-destruction.", weapons: "Sword (Scimitar)", vahana: "Jackal", consort: "Lord Shiva" },
  navagraha: { name: "Navagrahas", category: "Navagraha", label: "Nine Planets of Destiny", intro: "The nine celestial bodies in Hindu astrology that influence human karma and actions.", weapons: "Astro Symbols", vahana: "Chariot", consort: "Various" },
  krishna: { name: "Lord Krishna", category: "Vishnu", label: "Avatar of Love & Wisdom", intro: "The eighth incarnation of Lord Vishnu, speaker of the Bhagavad Gita and lord of divine play.", weapons: "Sudarshana Discus", vahana: "Garuda", consort: "Rukmini & Satyabhama" },
  durga: { name: "Goddess Durga", category: "Parvati", label: "Invincible Mother Warrior", intro: "A warrior form of Goddess Parvati created to defeat Mahishasura.", weapons: "Trident, Bow, Sword", vahana: "Tiger / Lion", consort: "Lord Shiva" },
  hanuman: { name: "Lord Hanuman", category: "Other Deities", label: "Embodiment of Devotion", intro: "The monkey deity representing infinite devotion, strength, courage, and celibacy.", weapons: "Mace (Gada)", vahana: "None", consort: "Celibate" },
  ayyappan: { name: "Lord Ayyappan", category: "Other Deities", label: "Deity of Discipline", intro: "Popular South Indian deity born from the union of Lord Shiva and Mohini (Vishnu avatar).", weapons: "Bow & Arrow", vahana: "Tiger", consort: "Celibate" },
  brahma: { name: "Lord Brahma", category: "Other Deities", label: "Creator of the Universe", intro: "One of the Trimurti deities, responsible for creating the material cosmos.", weapons: "Kamandalu, Vedas", vahana: "Swan (Hamsa)", consort: "Goddess Saraswati" },
  indra: { name: "Lord Indra", category: "Other Deities", label: "King of the Heavens", intro: "The king of Devas and ruler of the skies, rain, and thunder.", weapons: "Vajra (Thunderbolt)", vahana: "Airavata Elephant", consort: "Goddess Shachi" },
  surya: { name: "Surya Bhagavan", category: "Other Deities", label: "Sun Deity", intro: "The visible solar deity who nourishes all living beings on Earth.", weapons: "Lotus Buds", vahana: "Seven-horse Chariot", consort: "Saranyu" },
  chandra: { name: "Chandra Bhagavan", category: "Other Deities", label: "Moon Deity", intro: "The celestial lunar deity who influences tides and human minds.", weapons: "Mace", vahana: "Antelope Chariot", consort: "27 Nakshatras" },
  kamadhenu: { name: "Kamadhenu", category: "Other Deities", label: "Wish-Fulfilling Sacred Cow", intro: "The mother of all cows, granting wealth, milk, and abundance.", weapons: "None", vahana: "None", consort: "None" },
  dakshinamurthy: { name: "Dakshinamurthy", category: "Shiva", label: "Lord of Knowledge", intro: "Lord Shiva manifested as the silent cosmic teacher of yoga and scriptures.", weapons: "Jnana Mudra", vahana: "Apasmara Demon", consort: "None" }
};

// Generate basic profiles dynamically
remainingDeityIds.forEach(id => {
  const t = basicDeitiesTemplates[id];
  deityDetailsDb[id] = {
    name: t.name,
    category: t.category,
    label: t.label,
    intro: t.intro,
    weapons: t.weapons,
    vahana: t.vahana,
    consort: t.consort,
    children: "Various",
    image: id === "krishna" ? "assets/images/vishnu.png" : (id === "hanuman" ? "assets/images/rameshwaram.png" : "assets/images/temple_hero.png"),
    mythology: `<p>Detailed mythology and regional scriptures for ${t.name} are preserved in the temple archives of Tamil Nadu. In the state, ${t.name} is worshipped with special rituals, and has dedicated shrines within major temple corridors.</p>`,
    symbolism: `<p>The attributes of ${t.name} denote cosmic truths and spiritual principles, guiding devotees toward righteousness and wisdom.</p>`,
    mantras: [{ verse: `Om Sri ${t.name.replace("Lord ", "").replace("Goddess ", "")} Namaha`, translation: `Salutations to the divine ${t.name}.` }],
    relatedTemples: [{ name: "Meenakshi Amman Temple", loc: "Madurai", url: "temple-details.html?temple=meenakshi", image: "assets/images/meenakshi.png" }],
    relatedGods: [{ id: "shiva", name: "Lord Shiva", cat: "Shiva", image: "assets/images/shiva.png" }]
  };
});

function renderDeityDetails() {
  const params = new URLSearchParams(window.location.search);
  const deityId = params.get('god');

  const mainHero = document.getElementById('detailsHero');
  const detailsRow = document.querySelector('section:nth-of-type(2)');
  const notFoundSection = document.getElementById('deityNotFoundSection');

  if (!deityId || !deityDetailsDb[deityId]) {
    if (mainHero) mainHero.classList.add('d-none');
    if (detailsRow) detailsRow.classList.add('d-none');
    if (notFoundSection) notFoundSection.classList.remove('d-none');
    return;
  }

  const deity = deityDetailsDb[deityId];

  // Populate Hero
  if (document.getElementById('breadcrumbDeity')) document.getElementById('breadcrumbDeity').textContent = deity.name;
  if (document.getElementById('deityLabel')) document.getElementById('deityLabel').textContent = deity.label;
  if (document.getElementById('deityName')) document.getElementById('deityName').textContent = deity.name;
  if (document.getElementById('deityIntro')) document.getElementById('deityIntro').textContent = deity.intro;
  if (document.getElementById('deityWeapons')) document.getElementById('deityWeapons').textContent = deity.weapons;
  if (document.getElementById('deityVahana')) document.getElementById('deityVahana').textContent = deity.vahana;
  if (document.getElementById('deityConsort')) document.getElementById('deityConsort').textContent = deity.consort;
  if (document.getElementById('deityChildren')) document.getElementById('deityChildren').textContent = deity.children;
  if (document.getElementById('deityHeroImage')) {
    document.getElementById('deityHeroImage').src = deity.image;
    document.getElementById('deityHeroImage').alt = deity.name;
  }

  // Populate Content
  if (document.getElementById('deityMythology')) document.getElementById('deityMythology').innerHTML = deity.mythology;
  if (document.getElementById('deitySymbolism')) document.getElementById('deitySymbolism').innerHTML = deity.symbolism;

  // Populate Mantras
  const mantraBox = document.getElementById('deityMantraBox');
  if (mantraBox && deity.mantras) {
    mantraBox.innerHTML = '';
    deity.mantras.forEach((m, idx) => {
      const div = document.createElement('div');
      div.className = `mantra-item ${idx > 0 ? 'mt-4 border-top pt-4 border-light' : ''}`;
      div.innerHTML = `
        <h5 class="mantra-verse text-center mb-2 font-secondary">"${m.verse}"</h5>
        <p class="mantra-translation text-muted text-center mb-0">${m.translation}</p>
      `;
      mantraBox.appendChild(div);
    });
  }

  // Populate Related Temples
  const templesBox = document.getElementById('deityRelatedTemples');
  if (templesBox && deity.relatedTemples) {
    templesBox.innerHTML = '';
    deity.relatedTemples.forEach(t => {
      const card = document.createElement('div');
      card.className = 'related-item-card d-flex align-items-center p-2 rounded-3 mb-2';
      card.innerHTML = `
        <img src="${t.image}" class="related-item-img me-3" alt="${t.name}">
        <div>
          <h6 class="fw-bold fs-8 mb-0">${t.name}</h6>
          <small class="text-muted fs-9">${t.loc} District</small>
        </div>
      `;
      card.addEventListener('click', () => {
        window.location.href = t.url;
      });
      templesBox.appendChild(card);
    });
  }

  // Populate Related Gods
  const godsBox = document.getElementById('deityRelatedGods');
  if (godsBox && deity.relatedGods) {
    godsBox.innerHTML = '';
    deity.relatedGods.forEach(g => {
      const card = document.createElement('div');
      card.className = 'related-item-card d-flex align-items-center p-2 rounded-3 mb-2';
      card.innerHTML = `
        <img src="${g.image}" class="related-item-img me-3" alt="${g.name}">
        <div>
          <h6 class="fw-bold fs-8 mb-0">${g.name}</h6>
          <small class="text-muted fs-9">${g.cat} Category</small>
        </div>
      `;
      card.addEventListener('click', () => {
        window.location.href = `god-details.html?god=${g.id}`;
      });
      godsBox.appendChild(card);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderDeityDetails();
});
