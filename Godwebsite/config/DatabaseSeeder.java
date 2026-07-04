package com.templeweb.Godwebsite.config;

import com.templeweb.Godwebsite.model.God;
import com.templeweb.Godwebsite.model.Temple;
import com.templeweb.Godwebsite.repository.GodRepository;
import com.templeweb.Godwebsite.repository.TempleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    private final GodRepository godRepository;
    private final TempleRepository templeRepository;

    public DatabaseSeeder(GodRepository godRepository, TempleRepository templeRepository) {
        this.godRepository = godRepository;
        this.templeRepository = templeRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        seedGods();
        seedTemples();
    }

    private void seedGods() {
        if (godRepository.count() > 0) {
            return; // Already seeded
        }

        List<God> gods = new ArrayList<>();

        // 1. Lord Shiva
        gods.add(new God(
            "shiva", "Lord Shiva", "Shiva",
            "The Destroyer of evil, cosmic dancer (Natarajar), and source of yoga, meditation, and infinite peace.",
            "Trident (Trishula)", "Nandi (Bull)", "Goddess Parvati", "Vinayagar, Murugan", "assets/images/shiva.png", "Supreme",
            "<p>Lord Shiva is one of the principal deities of Hinduism. In Tamil Nadu, Shiva is revered through many forms, particularly as Nataraja (the Cosmic Dancer) in Chidambaram, and as the 63 Nayanmars who sang his praise in the famous Devaram scriptures.</p><p>A central legend is his role as Tripurantaka, destroying three flying demon cities using the earth as a chariot. Another legend is the Pancha Bhoota Sthalas representing five elements where Shiva manifests as Earth (Kanchi), Water (Trichy), Fire (Tiruvannamalai), Air (Kalahasti), and Space (Chidambaram).</p>",
            "<p>Every attribute of Lord Shiva holds meaning: The Third Eye represents spiritual wisdom; the Moon signifies control over time; Ganga flows representing sacred purification; Trishula represents three states of consciousness; Vibhuti denotes transience of life.</p>",
            "[{\"verse\":\"ॐ नमः शिवाय (Aum Namah Shivaya)\",\"translation\":\"Salutations to the auspicious and divine Lord Shiva. This represents the five elements of creation: Earth, Water, Fire, Air, and Space.\"},{\"verse\":\"ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् | उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात् ||\",\"translation\":\"The Maha Mrityunjaya Mantra: We worship the three-eyed Lord Shiva. May he liberate us from death and attachment, leading to immortality.\"}]"
        ));

        // 2. Lord Murugan
        gods.add(new God(
            "murugan", "Lord Murugan", "Murugan",
            "The divine general of devas, Lord of hills, beauty, youth, and wisdom. Deeply integrated with Tamil culture.",
            "Vel (Spear)", "Peacock (Mayil)", "Valli & Deivayanai", "None", "assets/images/murugan.png", "Popular",
            "<p>Lord Murugan, also known as Skanda, is deeply embedded in Tamil culture as 'Thamizh Kadavul'. Created from the sparks of Shiva's third eye to defeat demon Soorapadman, Murugan split him into two: a peacock mount and a rooster banner.</p>",
            "<p>The Vel (Spear) represents sharp intellect, focus, and wisdom. The Peacock mount represents subjugated pride and ego.</p>",
            "[{\"verse\":\"ॐ शंमुखाय नमः (Om Shanmukhaaya Namaha)\",\"translation\":\"Salutations to the Six-Faced Lord Murugan, who brings courage and victory.\"},{\"verse\":\"வெற்றிவேல் முருகனுக்கு அரோகரா! (Vetrivel Muruganukku Arogara!)\",\"translation\":\"Victory to the Vel of Murugan, hail the Lord!\"}]"
        ));

        // 3. Lord Vinayagar
        gods.add(new God(
            "vinayagar", "Lord Vinayagar", "Vinayagar",
            "Lord of wisdom, beginnings, and remover of obstacles. First worshipped in all sacred rituals.",
            "Broken Tusk, Goad", "Mushika (Mouse)", "Siddhi & Riddhi", "None", "assets/images/ganesha.png", "Popular",
            "<p>Lord Vinayagar is the elder son of Lord Shiva and Goddess Parvati, created from clay to guard her quarters. When Shiva unknowingly decapitated him, he revived him with an elephant's head, appointing him leader of the Ganas.</p>",
            "<p>Large head represents intellect; single broken tusk denotes transcendence of duality; the mouse mount shows control over restless desires.</p>",
            "[{\"verse\":\"ॐ गं गणपतये नमः (Om Gam Ganapataye Namaha)\",\"translation\":\"Salutations to the Lord of Ganas. Invoked to remove all hurdles and bless new ventures.\"}]"
        ));

        // 4. Lord Vishnu
        gods.add(new God(
            "vishnu", "Lord Vishnu", "Vishnu",
            "The Preserver and Protector of the universe, maintaining cosmic order and descending in various avatars.",
            "Sudarshana Chakra", "Garuda (Eagle)", "Goddess Lakshmi", "Kamadeva", "assets/images/vishnu.png", "Supreme",
            "<p>Lord Vishnu is the supreme protector, reclining on the serpent Adisesha in the cosmic ocean. Worshipped through 10 primary avatars (Dashavatara), Vishnu's glory is sung by the 12 Alvar saints in Tamil Nadu's Divya Prabandham.</p>",
            "<p>Sudarshana Chakra represents the wheel of time. Panchajanya conch represents the cosmic sound of creation.</p>",
            "[{\"verse\":\"ॐ नमो नारायणाय (Om Namo Narayanaya)\",\"translation\":\"Salutations to the supreme Lord Narayana (Vishnu), who is the refuge of all souls.\"}]"
        ));

        // 5. Goddess Parvati
        gods.add(new God(
            "parvati", "Goddess Parvati", "Parvati",
            "The mother goddess of power, love, and fertility. Consort of Shiva and mother of Ganesha and Murugan.",
            "Lotus, Trident", "Lion (Simha)", "Lord Shiva", "Ganesha, Murugan", "assets/images/shiva.png", "Divine Mother",
            "<p>Goddess Parvati represents the gentle aspect of Shakti, performing severe penance to marry Shiva. Revered as Kamakshi in Kanchipuram and Meenakshi in Madurai.</p>",
            "<p>Her lion mount represents courage and victory over animal instincts. The lotus symbolizes purity.</p>",
            "[{\"verse\":\"Om Devi Parvatyai Namaha\",\"translation\":\"Salutations to Goddess Parvati, the mother of the universe.\"}]"
        ));

        // 6. Goddess Lakshmi
        gods.add(new God(
            "lakshmi", "Goddess Lakshmi", "Lakshmi",
            "Goddess of wealth, fortune, prosperity, and beauty. Consort of Vishnu, descending alongside his avatars.",
            "Lotus", "Owl (Uluka)", "Lord Vishnu", "Kamadeva", "assets/images/lakshmi.png", "Divine Mother",
            "<p>Goddess Lakshmi emerged from the churning of the ocean and chose Lord Vishnu. She is worshipped in eight aspects (Ashta Lakshmi) for wealth, courage, and wisdom.</p>",
            "<p>Gold coins flowing represent material abundance; the lotus represents spiritual growth and beauty.</p>",
            "[{\"verse\":\"ॐ श्रीं महालक्ष्ம்यै नमः (Om Shreem Mahalakshmyai Namaha)\",\"translation\":\"Salutations to the great Goddess Lakshmi, who bestows abundance.\"}]"
        ));

        // 7. Goddess Saraswati
        gods.add(new God(
            "saraswati", "Goddess Saraswati", "Saraswati",
            "Goddess of knowledge, music, art, wisdom, and learning. Represented playing the Veena.",
            "Veena, Book", "Swan (Hamsa)", "Lord Brahma", "None", "assets/images/saraswati.png", "Divine Mother",
            "<p>Goddess Saraswati represents wisdom, speech, and flow. Worshipped with books and musical instruments during Ayudha Pooja.</p>",
            "<p>The Veena represents the harmony of life. The white swan represents discriminative wisdom.</p>",
            "[{\"verse\":\"ॐ ऐं सरस्वत्यै नमः (Om Aim Saraswatyai Namaha)\",\"translation\":\"Salutations to Goddess Saraswati, the source of intellect.\"}]"
        ));

        // 8. Goddess Kali
        gods.add(new God(
            "kali", "Goddess Kali", "Kali",
            "The fierce goddess of time, change, power, and destruction of ego. Form of Adi Parashakti.",
            "Sword (Scimitar)", "None / Jackal", "Lord Shiva", "None", "assets/images/shiva.png", "Fierce Power",
            "<p>Goddess Kali is the destroyer of negative forces, representing absolute time and change. Born from Durga's forehead to defeat demons.</p>",
            "<p>Her sword represents the severing of ignorance and ego. Scattered hair represents absolute freedom.</p>",
            "[{\"verse\":\"Om Kring Kalikaye Namaha\",\"translation\":\"Salutations to the fierce Mother Kali, who removes illusions.\"}]"
        ));

        // 9. Navagraha
        gods.add(new God(
            "navagraha", "Navagrahas", "Navagraha",
            "The nine major astronomical bodies (planets) in Hindu astrology, influencing human fortunes.",
            "Astro Symbols", "Chariot", "Various", "Various", "assets/images/temple_hero.png", "Cosmic",
            "<p>The Navagrahas represent the nine planetary deities: Surya, Chandra, Mangala, Budha, Guru, Shukra, Shani, Rahu, and Ketu, worshipped in separate shrines inside Shiva temples.</p>",
            "<p>They represent the cosmic balance of planetary energies governing human karma.</p>",
            "[{\"verse\":\"Om Navagrahaya Namaha\",\"translation\":\"Salutations to the nine planetary lords governing cosmic karma.\"}]"
        ));

        // 10. Lord Krishna
        gods.add(new God(
            "krishna", "Lord Krishna", "Vishnu",
            "Eighth avatar of Lord Vishnu. Central character of Mahabharata and teacher of Bhagavad Gita.",
            "Sudarshana Chakra, Flute", "Garuda", "Rukmini & Satyabhama", "Pradyumna", "assets/images/vishnu.png", "Supreme Avatar",
            "<p>Lord Krishna was born to destroy King Kansa, performing divine plays (Leelas) in Vrindavan and serving as Arjun's charioteer in the Kurukshetra war.</p>",
            "<p>The flute represents divine love calling the human soul. Peacock feather represents beauty of creation.</p>",
            "[{\"verse\":\"Om Namo Bhagavate Vasudevaya\",\"translation\":\"Salutations to the supreme Lord Krishna, son of Vasudeva.\"}]"
        ));

        // 11. Lord Rama
        gods.add(new God(
            "rama", "Lord Rama", "Vishnu",
            "Seventh avatar of Lord Vishnu, symbol of Dharma and ideal king. Protagonist of Ramayana.",
            "Kodanda Bow", "Chariot", "Goddess Sita", "Luv and Kush", "assets/images/rameshwaram.png", "Supreme Avatar",
            "<p>Lord Rama represents the perfect man (Maryada Purushottama), executing absolute righteousness despite extreme personal sacrifices, and defeating Ravana in Lanka.</p>",
            "<p>The Kodanda bow represents focus, strength, and precision in protecting righteousness.</p>",
            "[{\"verse\":\"Sri Rama Jaya Rama Jaya Jaya Rama\",\"translation\":\"Victory to Lord Rama, absolute victory to Rama.\"}]"
        ));

        // 12. Goddess Durga
        gods.add(new God(
            "durga", "Goddess Durga", "Parvati",
            "Fierce warrior form of Mother Goddess Parvati, riding a tiger and slaying demon Mahishasura.",
            "Spear, Sword, Bow", "Tiger", "Lord Shiva", "Ganesha, Murugan", "assets/images/shiva.png", "Divine Mother",
            "<p>Goddess Durga combines the energies of all devas to vanquish evil forces. Celebrated during Navaratri.</p>",
            "<p>Her multiple arms represent protection in all directions. Tiger mount represents infinite courage.</p>",
            "[{\"verse\":\"Om Dum Durgayei Namaha\",\"translation\":\"Salutations to the protective mother Goddess Durga.\"}]"
        ));

        // Seed remaining 8 basic deities
        String[] ids = {"hanuman", "ayyappan", "brahma", "indra", "surya", "chandra", "kamadhenu", "dakshinamurthy"};
        String[] names = {"Lord Hanuman", "Lord Ayyappan", "Lord Brahma", "Lord Indra", "Surya Bhagavan", "Chandra Bhagavan", "Kamadhenu", "Dakshinamurthy"};
        String[] cats = {"Other Deities", "Other Deities", "Other Deities", "Other Deities", "Other Deities", "Other Deities", "Other Deities", "Shiva"};
        String[] weaponsList = {"Mace (Gada)", "Bow & Arrow", "Kamandalu", "Vajra (Thunderbolt)", "Lotus", "Club", "None", "Jnana Mudra"};
        String[] vahanas = {"None", "Tiger", "Swan (Hamsa)", "Airavata Elephant", "Chariot", "Antelope Chariot", "None", "Apasmara"};
        String[] consorts = {"Celibate", "Celibate", "Goddess Saraswati", "Goddess Shachi", "Saranyu", "27 Nakshatras", "None", "None"};

        for (int i = 0; i < ids.length; i++) {
            gods.add(new God(
                ids[i], names[i], cats[i],
                names[i] + " is widely revered in Tamil Nadu's spiritual structures.",
                weaponsList[i], vahanas[i], consorts[i], "Various",
                ids[i].equals("hanuman") ? "assets/images/rameshwaram.png" : "assets/images/temple_hero.png",
                "Popular",
                "<p>Detailed mythology and regional scriptures for " + names[i] + " are preserved in the temple archives of Tamil Nadu.</p>",
                "<p>The attributes of " + names[i] + " denote cosmic truths and spiritual principles.</p>",
                "[{\"verse\":\"Om Sri " + ids[i] + " Namaha\",\"translation\":\"Salutations to the divine \"}]"
            ));
        }

        godRepository.saveAll(gods);
    }

    private void seedTemples() {
        if (templeRepository.count() > 0) {
            return;
        }

        List<Temple> temples = new ArrayList<>();

        // 1. Meenakshi Amman Temple
        temples.add(new Temple(
            "meenakshi", "Meenakshi Amman Temple", "Goddess Meenakshi & Lord Sundareswarar", "Madurai", "Tamil Nadu", "Madurai City",
            "A historic temple complex dedicated to Meenakshi (Parvati) and Sundareswarar (Shiva), famous for its sky-reaching multi-colored towers.",
            "5:00 AM", "10:00 PM", "Traditional Wear Required", "assets/images/meenakshi.png", "4.9", "12.5k",
            "<p>The Madurai Meenakshi Temple is the heart of the 2,500-year-old city of Madurai. Worshipped here as princess Meenakshi, born from a sacrificial fire, she wed Sundareswarar (Lord Shiva) in a grand wedding commemorated yearly as Chithirai Thiruvizha.</p>",
            "<p>The temple is a masterpiece of Dravidian architecture, featuring 14 majestic gopurams. Key highlights include the Hall of Thousand Pillars where each pillar is carved with lifelike statues.</p>",
            "[{\"year\":\"6th Century CE\",\"desc\":\"First historical mentions in early Sangam literature.\"},{\"year\":\"16th-17th Century\",\"desc\":\"Rebuilt to its current form by King Thirumalai Nayakar.\"}]",
            "<ul class=\"list-unstyled\"><li><strong>Morning:</strong> 5:00 AM - 12:30 PM</li><li><strong>Evening:</strong> 4:00 PM - 10:00 PM</li></ul>",
            "<p>Phone: +91 452 234 4360<br>Email: maduraimeenakshitemple@hrce.tn.gov.in</p>",
            "[{\"name\":\"Heritage Madurai Resort\",\"type\":\"Resort\",\"rating\":\"4.7\",\"distance\":\"4.5 km\",\"image\":\"assets/images/temple_hero.png\"},{\"name\":\"Sree Sabarees Restaurant\",\"type\":\"Vegetarian\",\"rating\":\"4.4\",\"distance\":\"0.2 km\",\"image\":\"assets/images/ganesha.png\"}]"
        ));

        // 2. Brihadisvara Temple
        temples.add(new Temple(
            "brihadisvara", "Brihadisvara Temple", "Lord Shiva (Peruvudaiyar)", "Thanjavur", "Tamil Nadu", "Thanjavur City",
            "A magnificent Chola masterpiece and UNESCO World Heritage site, displaying a massive stone Vimana tower carved from single granite block.",
            "6:00 AM", "8:30 PM", "Decent Casuals Allowed", "assets/images/temple_hero.png", "5.0", "18k",
            "<p>Built by Emperor Rajaraja Chola I between 1003 and 1010 CE to establish a spiritual focal point for the Chola empire. Representing the cosmic mountain Meru.</p>",
            "<p>Built entirely of granite. The central tower rises 66 meters capped by a massive octagonal stone dome weighing 80 tons, carved from a single block. A giant monolithic Nandi guards the shrine.</p>",
            "[{\"year\":\"1010 CE\",\"desc\":\"Construction completed by Emperor Rajaraja.\"},{\"year\":\"1987 CE\",\"desc\":\"Declared a UNESCO World Heritage Site.\"}]",
            "<ul class=\"list-unstyled\"><li><strong>Morning:</strong> 6:00 AM - 12:30 PM</li><li><strong>Evening:</strong> 4:00 PM - 8:30 PM</li></ul>",
            "<p>Phone: +91 4362 223 330<br>Email: thanjavurperiyakovil@hrce.tn.gov.in</p>",
            "[{\"name\":\"Svatma Hotel\",\"type\":\"Hotel\",\"rating\":\"4.8\",\"distance\":\"2.1 km\",\"image\":\"assets/images/temple_hero.png\"}]"
        ));

        // 3. Natarajar Temple
        temples.add(new Temple(
            "chidambaram", "Natarajar Temple", "Lord Shiva (Natarajar)", "Cuddalore", "Tamil Nadu", "Chidambaram Town",
            "A ancient temple representing Lord Shiva as the cosmic dancer Natarajar. Depicts the element of Space (Akasha) from the Pancha Bhootas.",
            "6:00 AM", "10:00 PM", "Traditional / Dhoti Required", "assets/images/temple_hero.png", "4.8", "9k",
            "<p>Chidambaram Natarajar Temple represents the sky of consciousness. Lord Shiva performed the Ananda Tandava (Dance of Bliss) in the golden hall of the temple.</p>",
            "<p>Features Shiva in his human form as Natarajar. Contains the Chidambara Rahasyam - curtained space representing empty space.</p>",
            "[{\"year\":\"10th Century CE\",\"desc\":\"Chola Kings cover the temple roof with gold tiles.\"},{\"year\":\"12th Century CE\",\"desc\":\"Gopurams built, carved with 108 dance postures.\"}]",
            "<ul class=\"list-unstyled\"><li><strong>Morning:</strong> 6:00 AM - 12:00 PM</li><li><strong>Evening:</strong> 5:00 PM - 10:00 PM</li></ul>",
            "<p>Phone: +91 4144 222 238</p>",
            "[{\"name\":\"Hotel Saradharam\",\"type\":\"Hotel\",\"rating\":\"4.0\",\"distance\":\"0.5 km\",\"image\":\"assets/images/temple_hero.png\"}]"
        ));

        // 4. Ramanathaswamy Temple
        temples.add(new Temple(
            "ramanathaswamy", "Ramanathaswamy Temple", "Lord Shiva & Lord Rama", "Trichy", "Tamil Nadu", "Rameswaram Island",
            "Famous for its massive pillared corridors, being one of the Char Dham pilgrimage sites, established by Lord Rama.",
            "5:00 AM", "9:00 PM", "Strict Traditional Required", "assets/images/rameshwaram.png", "4.9", "22k",
            "<p>Lord Rama established this temple and worshipped the Shiva Lingam to seek absolution for war sins. Features 22 sacred water wells (Theerthams).</p>",
            "<p>Features the longest corridor among all Hindu temples, with around 1212 pillars carved in Dravidian style.</p>",
            "[{\"year\":\"Treta Yuga\",\"desc\":\"Rama and Sita establish the temple.\"},{\"year\":\"12th Century CE\",\"desc\":\"Sethupathi rulers begin expanding the stone corridors.\"}]",
            "<ul class=\"list-unstyled\"><li><strong>Morning:</strong> 5:00 AM - 1:00 PM</li><li><strong>Evening:</strong> 3:00 PM - 9:00 PM</li></ul>",
            "<p>Phone: +91 4573 221 243</p>",
            "[{\"name\":\"Daiwik Hotel\",\"type\":\"Hotel\",\"rating\":\"4.5\",\"distance\":\"1.2 km\",\"image\":\"assets/images/rameshwaram.png\"}]"
        ));

        // Seed remaining 11 basic temples
        String[] ids = {"palani", "srirangam", "pillayarpatti", "kapaleeshwarar", "parthasarathy", "annamalaiyar", "shore", "jambukeswarar", "ekambareswarar", "nellai", "kumari"};
        String[] names = {
            "Dhandayuthapani Swamy Temple", "Ranganathaswamy Temple", "Karpaka Vinayagar Temple", "Kapaleeshwarar Temple",
            "Parthasarathy Temple", "Annamalaiyar Temple", "Shore Temple", "Jambukeswarar Temple", "Ekambareswarar Temple",
            "Nellaiappar Temple", "Kumari Amman Temple"
        };
        String[] gods = {"Lord Murugan", "Lord Vishnu", "Lord Vinayagar", "Lord Shiva", "Lord Krishna", "Lord Shiva", "Lord Shiva & Vishnu", "Lord Shiva", "Lord Shiva", "Lord Shiva", "Goddess Kanya Kumari"};
        String[] dists = {"Trichy", "Trichy", "Sivaganga", "Chennai", "Chennai", "Cuddalore", "Chennai", "Trichy", "Kanchipuram", "Sivaganga", "Sivaganga"};
        String[] hours = {"6:00 AM - 9:00 PM", "6:00 AM - 9:00 PM", "6:00 AM - 8:30 PM", "6:00 AM - 9:00 PM", "6:00 AM - 9:00 PM", "5:30 AM - 9:30 PM", "6:00 AM - 6:00 PM", "6:00 AM - 8:30 PM", "6:00 AM - 8:30 PM", "6:00 AM - 9:00 PM", "4:30 AM - 8:30 PM"};
        String[] dressCodes = {"Decent Casuals", "Traditional Required", "Traditional Preferred", "Traditional Preferred", "Traditional Required", "Decent Clothes", "Decent Casuals", "Traditional Required", "Traditional Required", "Traditional Preferred", "Dhoti Required"};
        String[] imgRefs = {"assets/images/temple_hero.png", "assets/images/temple_hero.png", "assets/images/ganesha.png", "assets/images/shiva.png", "assets/images/vishnu.png", "assets/images/temple_hero.png", "assets/images/temple_hero.png", "assets/images/temple_hero.png", "assets/images/temple_hero.png", "assets/images/temple_hero.png", "assets/images/temple_hero.png"};

        for (int i = 0; i < ids.length; i++) {
            temples.add(new Temple(
                ids[i], names[i], gods[i], dists[i], "Tamil Nadu", "Local Region",
                "A highly revered structural temple dedicated to " + gods[i] + ", situated in " + dists[i] + " District.",
                hours[i].split(" - ")[0], hours[i].split(" - ")[1], dressCodes[i], imgRefs[i], "4.8", "6k",
                "<p>The legendary origin of this temple dates back centuries, associated with regional kings and divine miracles.</p>",
                "<p>Built using stone masonry and classical rules, this temple complex features grand gateways.</p>",
                "[{\"year\":\"9th Century\",\"desc\":\"First structures carved out by regional kings.\"}]",
                "<ul class=\"list-unstyled\"><li><strong>Hours:</strong> " + hours[i] + "</li></ul>",
                "<p>Office: HR&CE Office, " + names[i] + "</p>",
                "[{\"name\":\"Local Devasthanam Cottages\",\"type\":\"Pilgrim Lodging\",\"rating\":\"4.2\",\"distance\":\"0.5 km\",\"image\":\"assets/images/temple_hero.png\"}]"
            ));
        }

        templeRepository.saveAll(temples);
    }
}
