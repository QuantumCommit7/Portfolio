/* =============================================
   PORTFOLIO — Nathan Schneider Fetique
   Vanilla JS: i18n, navbar, scroll animations
   ============================================= */

/* ===== TRANSLATIONS ===== */
const translations = {
  fr: {
    'nav.home':      'Accueil',
    'nav.projects':  'Projets',
    'nav.skills':    'Compétences',
    'nav.contact':   'Contact',

    'hero.greeting': 'Bonjour, je suis',
    'hero.title':    'Étudiant BUT Réseaux & Télécommunications',
    'hero.school':   'IUT de Colmar — 1ère année',
    'hero.tagline':  'Je suis passionné par les réseaux et les systèmes embarqués. J\'aime comprendre comment les choses fonctionnent et les configurer moi-même.',
    'hero.cta.projects': 'Voir mes projets',
    'hero.cta.contact':  'Me contacter',
    'hero.badge':    'BUT R&T 2025-2028',

    'projects.tag':      'Portfolio',
    'projects.title':    'Projets',
    'projects.subtitle': 'Projets réalisés en formation',

    'semester.s1': 'Semestre 1',
    'semester.s2': 'Semestre 2',

    'card.status.completed': 'Complété',
    'card.status.highlight': 'Projet phare',
    'card.tag.network':      'Réseau',
    'card.tag.system':       'Système',

    'sae101.title': 'Sensibilisation à l\'hygiène informatique et à la cybersécurité',
    'sae101.desc':  'On a fait une présentation orale sur le cheval de Troie en groupe. On a préparé une vidéo et un PowerPoint pour expliquer comment ça marche et comment s\'en protéger.',

    'sae104.title': 'Se présenter sur internet',
    'sae104.desc':  'Création d\'un CV en ligne multi-pages en HTML/CSS. Navigation inter-pages, section compétences en Flexbox et mise en page responsive.',
    'sae104.reflect': '💡 C\'est le projet qui m\'a vraiment mis le pied à l\'étrier en HTML/CSS. Partir d\'une page blanche et arriver à un vrai site c\'était satisfaisant.',

    'sae105.title': 'Traiter des données',
    'sae105.desc':  'Outil Python/PowerShell pour localiser et supprimer les gros fichiers d\'un disque. Interface graphique PyQt5 avec visualisation en camembert et cases à cocher.',
    'sae105.reflect': '💡 C\'est là que j\'ai vraiment appris à faire communiquer plusieurs scripts ensemble. Orchestrer Python depuis PowerShell via JSON c\'était une approche que je ne connaissais pas du tout.',

    'sae102.title': 'S\'initier aux réseaux informatiques',
    'sae102.desc':  'Simulation de l\'infrastructure réseau d\'une succursale d\'entreprise sous EVE-NG. J\'ai configuré 4 VLANs, calculé un plan d\'adressage VLSM, mis en place le routage inter-VLAN et déployé un serveur DHCP Linux.',

    'sae103.title': 'Découvrir un dispositif de transmission',
    'sae103.desc':  'Campagne de mesures WiFi sur plusieurs zones du campus : bâtiment C, bibliothèque universitaire et comparaison de réseaux 802.11a 5 GHz / 802.11g 2.4 GHz.',

    'sae202.title': 'Web Radio ESP32',
    'sae202.desc':  'Conception progressive d\'une radio internet avec un ESP32 HUZZAH32 et un décodeur VS1053. Contrôle volume, tonalité et spatialisation, gestion WiFi via WiFiManager et pilotage à distance par MQTT depuis Android.',

    'sae203.title': 'Mettre en place une solution informatique pour l’entreprise',
    'sae203.desc':  'Création en groupe d\'un site web de gestion de Drive : base de données, CRUD catégories/produits/clients/commandes, import de produits par fichier et génération de fiches commande.',

    'saegns3.title': 'Construire un réseau',
    'saegns3.desc':  'Déploiement complet d\'une infrastructure réseau sous GNS3 : 3 VLANs, routage inter-VLAN, adressage VLSM, RIPv2, serveurs FTP et Web, sécurisation par ACL et port-security.',


    'sae101.reflect':  '💡 J\'ai vraiment découvert comment les malwares fonctionnent et j\'ai appris à expliquer des trucs techniques de façon simple pour que tout le monde comprenne.',
    'sae102.reflect':  '💡 C\'est ce projet qui m\'a vraiment appris à concevoir un réseau de zéro. Le VLSM c\'était casse-tête au départ mais une fois que j\'ai compris la logique c\'était presque fun.',
    'sae103.reflect':  '💡 Ce projet m\'a appris à analyser concrètement une couverture WiFi et à relier les mesures terrain avec la position des points d\'accès, la fréquence utilisée et l\'architecture du bâtiment.',
    'sae202.reflect':  '💡 Ce projet était surtout très technique. Lire les datasheets du VS1053 pour implémenter la spatialisation à la main et faire communiquer un téléphone Android avec l\'ESP32 via MQTT c\'était une vraie satisfaction.',
    'sae203.reflect':  '💡 C\'est mon projet phare parce qu\'il rassemble développement web, base de données, déploiement Linux et travail collaboratif dans une vraie application métier.',
    'saegns3.reflect': '💡 C\'est le projet où j\'ai tout mis ensemble en même temps : VLANs, routage, services réseau et sécurité. Voir la topologie complète fonctionner dans GNS3 c\'était vraiment gratifiant.',

    'skill.proof.network':     'Prouvé par : Projet 1.02, Projet 1.03, Infrastructure GNS3',
    'skill.proof.systems':     'Prouvé par : Projet 1.01, Samba Lab',
    'skill.proof.programming': 'Prouvé par : Projet 2.02 (Web Radio ESP32), Projet 2.03',
    'skill.proof.tools':       'Prouvé par : Infrastructure GNS3, Projet 2.02, Projet 2.03',

    'skills.tag':      'Expertise',
    'skills.title':    'Compétences',
    'skills.subtitle': 'Les 3 compétences du BUT Réseaux & Télécommunications',

    'skills.ue21':     'UE2.1 — Administrer',
    'skills.ue21.sub': 'Administrer les réseaux et l\'Internet',
    'skills.ue22':     'UE2.2 — Connecter',
    'skills.ue22.sub': 'Connecter les entreprises et les usagers',
    'skills.ue23':     'UE2.3 — Programmer',
    'skills.ue23.sub': 'Créer des outils et applications pour les R&T',

    'skill.proof.ue21': 'Prouvé par : Projet 1.02, Projet 1.03, Infrastructure GNS3',
    'skill.proof.ue22': 'Prouvé par : Projet 1.01, Samba Lab',
    'skill.proof.ue23': 'Prouvé par : Projet 2.02 (Web Radio ESP32), Projet 2.03',

    'level.good':         'Bon',
    'level.intermediate': 'Intermédiaire',

    'modal.btn.detail':    'Détails →',
    'modal.label.context': 'Contexte',
    'modal.label.learned': 'Ce que j\'ai appris',
    'modal.label.tech':    'Technologies',
    'modal.label.proof':   'Preuves & Documents',

    'contact.tag':    'Restons en contact',
    'contact.title':  'Me contacter',
    'contact.subtitle': 'Ouvert aux opportunités de stage et aux collaborations',
    'contact.linkedin.handle': 'Nathan Schneider Fetique',
    'contact.github.handle':   '@QuantumCommit7',
    'contact.note':   'Hésitez pas à me contacter si vous avez une opportunité de stage ou envie de collaborer sur un projet.',

    'footer.text': '© 2026 Nathan Schneider Fetique — BUT Réseaux & Télécommunications, IUT de Colmar',
  },

  en: {
    'nav.home':      'Home',
    'nav.projects':  'Projects',
    'nav.skills':    'Skills',
    'nav.contact':   'Contact',

    'hero.greeting': 'Hi, I\'m',
    'hero.title':    'Networks & Telecommunications Student',
    'hero.school':   'IUT de Colmar — 1st year',
    'hero.tagline':  'I\'m passionate about networking and embedded systems. I like to understand how things work and set them up myself.',
    'hero.cta.projects': 'View my projects',
    'hero.cta.contact':  'Get in touch',
    'hero.badge':    'BUT R&T 2025-2028',

    'projects.tag':      'Portfolio',
    'projects.title':    'Projects',
    'projects.subtitle': 'Projects completed during training',

    'semester.s1': 'Semester 1',
    'semester.s2': 'Semester 2',

    'card.status.completed': 'Completed',
    'card.status.highlight': 'Featured',
    'card.tag.network':      'Network',
    'card.tag.system':       'System',

    'sae101.title': 'IT Hygiene and Cybersecurity Awareness',
    'sae101.desc':  'We gave a group oral presentation on Trojan horses. We made a video and a PowerPoint to explain how they work and how to protect yourself.',

    'sae104.title': 'Presenting yourself online',
    'sae104.desc':  'Built a multi-page HTML/CSS website to showcase my CV online. Inter-page navigation, Flexbox skills section and responsive layout.',
    'sae104.reflect': '💡 This is the project that really got me started with HTML/CSS. Going from a blank page to an actual working website felt really satisfying.',

    'sae105.title': 'Data processing',
    'sae105.desc':  'Python/PowerShell tool to locate and delete large files on a disk. PyQt5 GUI with pie chart visualisation and per-file checkboxes.',
    'sae105.reflect': '💡 This is where I really learned to chain multiple scripts together. Having PowerShell orchestrate Python scripts via JSON was an approach I had never seen before.',

    'sae102.title': 'Introduction to Computer Networks',
    'sae102.desc':  'Simulated an enterprise branch network in EVE-NG. I configured 4 VLANs, calculated a VLSM addressing plan, set up inter-VLAN routing and deployed a Linux DHCP server.',

    'sae103.title': 'Discovering a transmission system',
    'sae103.desc':  'WiFi measurement campaign across several campus areas: building C, the university library and comparison of 802.11a 5 GHz / 802.11g 2.4 GHz networks.',

    'sae202.title': 'ESP32 Web Radio',
    'sae202.desc':  'Progressive build of an internet radio with an ESP32 HUZZAH32 and VS1053 decoder. Volume, tone and spatialisation controls, WiFi management via WiFiManager and remote control over MQTT from Android.',

    'sae203.title': 'Deploy an IT solution for a company',
    'sae203.desc':  'Group project building a Drive management web application: database, CRUD for categories/products/customers/orders, product import from a file and order summary generation.',

    'saegns3.title': 'Build a network',
    'saegns3.desc':  'Full enterprise network deployment in GNS3: 3 VLANs, inter-VLAN routing, VLSM addressing, RIPv2, FTP and Web servers, ACL and port-security hardening.',


    'sae101.reflect':  '💡 I really got to understand how malware works and learned to explain technical stuff in a simple way so anyone can get it.',
    'sae102.reflect':  '💡 This is the project that really taught me to design a network from scratch. VLSM was confusing at first but once the logic clicked it was actually pretty fun.',
    'sae103.reflect':  '💡 This project taught me how to analyse WiFi coverage in the field and connect measurements with access point placement, frequency bands and building layout.',
    'sae202.reflect':  '💡 This project was mainly very technical. Reading the VS1053 datasheet to implement spatialisation by hand and getting an Android phone talking to the ESP32 over MQTT was really satisfying.',
    'sae203.reflect':  '💡 This is my featured project because it brings together web development, databases, Linux deployment and teamwork in a real business-style application.',
    'saegns3.reflect': '💡 This is the project where I put everything together at once: VLANs, routing, network services and security. Getting the full topology working in GNS3 was really rewarding.',

    'skill.proof.network':     'Proven by: Project 1.02, Project 1.03, GNS3 Infrastructure',
    'skill.proof.systems':     'Proven by: Project 1.01, Samba Lab',
    'skill.proof.programming': 'Proven by: Project 2.02 (ESP32 Web Radio), Project 2.03',
    'skill.proof.tools':       'Proven by: GNS3 Infrastructure, Project 2.02, Project 2.03',

    'skills.tag':      'Expertise',
    'skills.title':    'Skills',
    'skills.subtitle': 'The 3 core competences of the BUT Networks & Telecommunications',

    'skills.ue21':     'UE2.1 — Administer',
    'skills.ue21.sub': 'Administer networks and the Internet',
    'skills.ue22':     'UE2.2 — Connect',
    'skills.ue22.sub': 'Connect businesses and users',
    'skills.ue23':     'UE2.3 — Program',
    'skills.ue23.sub': 'Create tools and applications for RT',

    'skill.proof.ue21': 'Proven by: Project 1.02, Project 1.03, GNS3 Infrastructure',
    'skill.proof.ue22': 'Proven by: Project 1.01, Samba Lab',
    'skill.proof.ue23': 'Proven by: Project 2.02 (ESP32 Web Radio), Project 2.03',

    'level.good':         'Good',
    'level.intermediate': 'Intermediate',

    'modal.btn.detail':    'Details →',
    'modal.label.context': 'Context',
    'modal.label.learned': 'What I learned',
    'modal.label.tech':    'Technologies',
    'modal.label.proof':   'Proof & Documents',

    'contact.tag':    'Let\'s connect',
    'contact.title':  'Get in touch',
    'contact.subtitle': 'Open to internship opportunities and collaborations',
    'contact.linkedin.handle': 'Nathan Schneider Fetique',
    'contact.github.handle':   '@QuantumCommit7',
    'contact.note':   'Feel free to reach out if you have an internship opportunity or just want to collaborate on something.',

    'footer.text': '© 2026 Nathan Schneider Fetique — Networks & Telecommunications, IUT de Colmar',
  }
};

/* ===== PROJECT CARD CONFIG ===== */
const projectCardGroups = {
  s1: [
    {
      key: 'sae101',
      tag: 'Projet 1.01',
      statusKey: 'card.status.completed',
      titleKey: 'sae101.title',
      descKey: 'sae101.desc',
      reflectKey: 'sae101.reflect',
      badges: [
        { label: 'Cybersécurité', color: 'red' },
        { label: 'Cheval de Troie', color: 'orange' },
        { label: 'PowerPoint', color: 'purple' },
      ],
    },
    {
      key: 'sae102',
      tag: 'Projet 1.02',
      statusKey: 'card.status.completed',
      titleKey: 'sae102.title',
      descKey: 'sae102.desc',
      reflectKey: 'sae102.reflect',
      badges: [
        { label: 'EVE-NG', color: 'green' },
        { label: 'VLAN 802.1Q', color: 'orange' },
        { label: 'VLSM', color: 'blue' },
        { label: 'Cisco IOS', color: 'green' },
        { label: 'VTP v2', color: 'purple' },
      ],
    },
    {
      key: 'sae103',
      tag: 'Projet 1.03',
      statusKey: 'card.status.completed',
      titleKey: 'sae103.title',
      descKey: 'sae103.desc',
      reflectKey: 'sae103.reflect',
      badges: [
        { label: 'WiFi', color: 'blue' },
        { label: '802.11', color: 'orange' },
        { label: '2.4 GHz', color: 'green' },
        { label: '5 GHz', color: 'purple' },
        { label: 'Mesures terrain', color: 'red' },
      ],
    },
    {
      key: 'sae104',
      tag: 'Projet 1.04',
      statusKey: 'card.status.completed',
      titleKey: 'sae104.title',
      descKey: 'sae104.desc',
      reflectKey: 'sae104.reflect',
      badges: [
        { label: 'HTML5', color: 'orange' },
        { label: 'CSS3', color: 'blue' },
        { label: 'Flexbox', color: 'purple' },
        { label: 'Responsive', color: 'green' },
      ],
    },
    {
      key: 'sae105',
      tag: 'Projet 1.05',
      statusKey: 'card.status.completed',
      titleKey: 'sae105.title',
      descKey: 'sae105.desc',
      reflectKey: 'sae105.reflect',
      badges: [
        { label: 'Python', color: 'blue' },
        { label: 'PyQt5', color: 'purple' },
        { label: 'PowerShell', color: 'orange' },
        { label: 'pathlib', color: 'green' },
      ],
    },
  ],
  s2: [
    {
      key: 'saegns3',
      tag: 'Projet 2.01',
      statusKey: 'card.status.completed',
      titleKey: 'saegns3.title',
      descKey: 'saegns3.desc',
      reflectKey: 'saegns3.reflect',
      badges: [
        { label: 'GNS3', color: 'green' },
        { label: 'Cisco IOS', color: 'blue' },
        { label: 'RIPv2', color: 'orange' },
        { label: 'ACL', color: 'purple' },
        { label: 'port-security', color: 'red' },
      ],
    },
    {
      key: 'sae202',
      tag: 'Projet 2.02',
      statusKey: 'card.status.completed',
      titleKey: 'sae202.title',
      descKey: 'sae202.desc',
      reflectKey: 'sae202.reflect',
      badges: [
        { label: 'ESP32 HUZZAH32', color: 'orange' },
        { label: 'VS1053', color: 'red' },
        { label: 'WiFiManager', color: 'blue' },
        { label: 'MQTT', color: 'green' },
        { label: 'Arduino C', color: 'purple' },
      ],
    },
    {
      key: 'sae203',
      tag: 'Projet 2.03',
      statusKey: 'card.status.highlight',
      titleKey: 'sae203.title',
      descKey: 'sae203.desc',
      reflectKey: 'sae203.reflect',
      featured: true,
      badges: [
        { label: 'Développement web', color: 'orange' },
        { label: 'Base de données', color: 'blue' },
        { label: 'CRUD', color: 'green' },
        { label: 'Linux', color: 'purple' },
        { label: 'GitHub', color: 'red' },
      ],
    },
  ],
};

const htmlEntities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const documentLabels = {
  'Doc/SAE%201.05/Sujet%20SAE%20105.pdf': { fr: 'Sujet du projet 1.05.pdf', en: 'Project 1.05 brief.pdf' },
  'Doc/SAE%201.04/Sujet%20SAE%20104.pdf': { fr: 'Sujet du projet 1.04.pdf', en: 'Project 1.04 brief.pdf' },
  'Doc/SAE%201.03/SAE%20103%20D%C3%A9couvrir%20un%20dispositif%20de%20transmission.pdf': { fr: 'Sujet du projet 1.03.pdf', en: 'Project 1.03 brief.pdf' },
  'Doc/SAE%201.02/SAE1.02_CahierDesCharges.pdf': { fr: 'Cahier des charges du projet 1.02.pdf', en: 'Project 1.02 specification.pdf' },
  'Doc/SAE%201.02/SAE1.02.2024-1.pdf': { fr: 'Sujet du projet 1.02.pdf', en: 'Project 1.02 brief.pdf' },
  'Doc/SAE%202.02/SAE202-Web_Radio-1.pdf': { fr: 'Sujet du projet Web Radio ESP32.pdf', en: 'ESP32 Web Radio project brief.pdf' },
  'Doc/SAE%202.01/sujet-SAE2.01.pdf': { fr: 'Sujet du projet 2.01.pdf', en: 'Project 2.01 brief.pdf' },
  'Doc/SAE%202.03/Gantt_SAE203_v8%281%29.xlsx': { fr: 'Diagramme de Gantt du projet.xlsx', en: 'Project Gantt chart.xlsx' },
  'Doc/SAE%202.03/Fiche_Procedure_SAE203.docx': { fr: 'Procédure de déploiement du projet.docx', en: 'Project deployment procedure.docx' },
};

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => htmlEntities[char]);
}

function getDocumentName(src) {
  const label = documentLabels[src];
  if (label) return label[currentLang] || label.fr;
  return decodeURIComponent(src.split('/').pop()).replace(/SAÉ|SAE/gi, currentLang === 'fr' ? 'Projet' : 'Project');
}

function getBaseText(key) {
  return translations.fr[key] || '';
}

function renderProjectCard(project) {
  const featuredClass = project.featured ? ' featured' : '';
  const statusClass = project.featured ? ' card-status--featured' : '';
  const badges = project.badges
    .map(badge => `<span class="badge badge-${badge.color}">${escapeHTML(badge.label)}</span>`)
    .join('');

  return `
    <article class="project-card fade-in${featuredClass}" data-project="${escapeHTML(project.key)}">
      <div class="card-header">
        <span class="card-tag">${escapeHTML(project.tag)}</span>
        <div class="card-status${statusClass}" data-i18n="${escapeHTML(project.statusKey)}">${getBaseText(project.statusKey)}</div>
      </div>
      <h3 class="card-title" data-i18n="${escapeHTML(project.titleKey)}">${getBaseText(project.titleKey)}</h3>
      <p class="card-desc" data-i18n="${escapeHTML(project.descKey)}">${getBaseText(project.descKey)}</p>
      <p class="card-reflect" data-i18n="${escapeHTML(project.reflectKey)}">${getBaseText(project.reflectKey)}</p>
      <div class="card-tags">${badges}</div>
      <button class="card-detail-btn" type="button" data-i18n="modal.btn.detail" aria-haspopup="dialog" aria-label="Voir les détails du projet ${escapeHTML(project.tag)}">${getBaseText('modal.btn.detail')}</button>
    </article>`;
}

function bindProjectDetailButtons() {
  document.querySelectorAll('.card-detail-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const key = btn.closest('[data-project]').dataset.project;
      openModal(key, btn);
    });
  });
}

function renderProjectCards() {
  document.querySelectorAll('[data-project-grid]').forEach(grid => {
    const groupKey = grid.dataset.projectGrid;
    const projects = projectCardGroups[groupKey] || [];
    grid.innerHTML = projects.map(renderProjectCard).join('');
  });
  bindProjectDetailButtons();
}

/* ===== STATE ===== */
let currentLang = 'fr';
const reducedMotionQuery = window.matchMedia
  ? window.matchMedia('(prefers-reduced-motion: reduce)')
  : { matches: false };

function shouldReduceMotion() {
  return reducedMotionQuery.matches;
}

/* ===== LANGUAGE TOGGLE ===== */
function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = t[key];
    if (value !== undefined) el.innerHTML = value;
  });
  document.documentElement.setAttribute('lang', lang);
}

function toggleLanguage() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  applyTranslations(currentLang);
  const btn = document.getElementById('lang-toggle');
  btn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
}

document.getElementById('lang-toggle').addEventListener('click', () => toggleLanguage());

/* ===== HAMBURGER MENU ===== */
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close menu when a link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Close menu on outside click
document.addEventListener('click', e => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

/* ===== NAVBAR SCROLL STYLE ===== */
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(sec => sectionObserver.observe(sec));

/* ===== FADE-IN ON SCROLL ===== */
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Animate skill bars once visible
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.classList.add('animated');
      });
    }
  });
}, { threshold: 0.12 });

function observeFadeElements() {
  document.querySelectorAll('.fade-in:not([data-fade-observed])').forEach(el => {
    el.dataset.fadeObserved = 'true';
    fadeObserver.observe(el);
  });
}

/* Trigger skill bar animation for skill categories specifically */
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.classList.add('animated');
      });
    }
  });
}, { threshold: 0.2 });

function observeSkillCategories() {
  document.querySelectorAll('.skill-category:not([data-skill-observed])').forEach(el => {
    el.dataset.skillObserved = 'true';
    skillObserver.observe(el);
  });
}

/* ===== INIT ===== */
renderProjectCards();
observeFadeElements();
observeSkillCategories();
applyTranslations(currentLang);
handleNavbarScroll();

/* =============================================
   MODAL PROJETS
   ============================================= */

const projectModals = {
  fr: {
    sae101: {
      tag: 'Projet 1.01',
      title: 'Sensibilisation à l\'hygiène informatique et à la cybersécurité',
      context: 'Pour ce projet on devait présenter un sujet lié à la cybersécurité. Mon groupe a choisi le cheval de Troie. On a préparé une vidéo et un PowerPoint pour expliquer comment ça fonctionne et comment s\'en protéger.',
      learned: 'J\'ai vraiment appris à vulgariser des trucs techniques. Expliquer comment un cheval de Troie se propage à quelqu\'un qui n\'est pas dans l\'info c\'est pas si simple. Ça m\'a aussi donné envie d\'en savoir plus sur la cybersécurité.',
      badges: ['Cybersécurité', 'Cheval de Troie', 'PowerPoint', 'Présentation orale'],
      proof: 'Présentation orale et support PowerPoint réalisés en groupe.',
      images: [],
    },
    sae105: {
      tag: 'Projet 1.05',
      title: 'Traiter des données',
      context: 'On devait développer un outil de reporting pour localiser et supprimer les gros fichiers d\'un disque. J\'ai fait un script PowerShell orchestrateur qui enchaîne 3 scripts Python : le premier pour choisir le répertoire via une interface graphique PyQt5, le deuxième pour analyser l\'arborescence avec pathlib et exporter les résultats en JSON, et le troisième pour afficher un camembert interactif avec des cases à cocher pour sélectionner les fichiers à supprimer. La suppression se fait via un script PowerShell généré avec double confirmation.',
      learned: 'J\'ai appris à structurer un projet en plusieurs scripts qui communiquent entre eux. Utiliser pathlib pour parcourir des arborescences et trier par taille c\'était nouveau pour moi. L\'interface graphique avec PyQt5 et les graphiques PyQtChart c\'était aussi une vraie découverte.',
      badges: ['Python', 'PyQt5', 'PyQtChart', 'PowerShell', 'pathlib', 'JSON', 'Windows'],
      proof: 'Sujet du projet disponible ci-dessous.',
      images: ['Doc/SAE%201.05/Sujet%20SAE%20105.pdf'],
    },
    sae104: {
      tag: 'Projet 1.04',
      title: 'Se présenter sur internet',
      context: 'On devait créer un site web multi-pages pour présenter son CV en ligne. J\'ai conçu plusieurs pages (accueil, formation, diplômes, expériences) avec un seul fichier CSS partagé. La section compétences est en Flexbox 3 colonnes avec les compétences RT, techniques et humaines. Le site est responsive avec des media queries et a été hébergé sur codepen.io.',
      learned: 'C\'est avec ce projet que j\'ai vraiment appris à structurer un site HTML/CSS. Gérer un CSS partagé sur plusieurs pages et faire de la navigation avec des ancres c\'était une vraie découverte. Rendre le site responsive m\'a aussi appris à penser le design pour différentes tailles d\'écran.',
      badges: ['HTML5', 'CSS3', 'Flexbox', 'Media Queries', 'Ancres HTML', 'Codepen'],
      proof: 'Sujet du projet disponible ci-dessous.',
      images: ['Doc/SAE%201.04/Sujet%20SAE%20104.pdf'],
    },
    sae102: {
      tag: 'Projet 1.02',
      title: 'S\'initier aux réseaux informatiques',
      context: 'On devait simuler le réseau d\'une succursale fictive de l\'entreprise RTC sous EVE-NG. J\'ai défini 4 VLANs (Dire Util Serv Admi) et calculé le plan d\'adressage en VLSM. J\'ai ensuite configuré un commutateur Catalyst 2960 et un routeur Cisco 2800 en router-on-a-stick pour le routage inter-VLAN. J\'ai aussi migré le service DHCP sur un serveur Linux Ubuntu avec ip helper-address et déployé un second commutateur avec VTP v2.',
      learned: 'C\'est ce projet qui m\'a appris à concevoir un réseau de zéro. Le calcul VLSM c\'était casse-tête au début mais dès que j\'ai compris c\'était logique. Voir les trames 802.1Q taguées dans Wireshark et suivre un échange DHCP Discover/Offer/Request/Ack ça rendait tout beaucoup plus concret.',
      badges: ['EVE-NG', 'Cisco IOS', 'VLAN 802.1Q', 'VLSM', 'VTP v2', 'DHCP Linux', 'IP Helper', 'Wireshark'],
      proof: 'Cahier des charges et sujet du projet disponibles ci-dessous.',
      images: ['Doc/SAE%201.02/SAE1.02_CahierDesCharges.pdf', 'Doc/SAE%201.02/SAE1.02.2024-1.pdf'],
    },
    sae103: {
      tag: 'Projet 1.03',
      title: 'Découvrir un dispositif de transmission',
      context: 'Ce projet portait sur l\'analyse d\'une couverture WiFi réelle. Nous avons mesuré le réseau UHA au 1er étage et au rez-de-chaussée du bâtiment C, puis dans la bibliothèque universitaire. Les mesures ont permis d\'identifier les zones de bonne couverture proches des points d\'accès, les zones moyennes encore utilisables et les zones faibles ou inexistantes, notamment dans les halls et certaines parties plus éloignées des bornes. Nous avons aussi comparé deux réseaux de test : GrA_802.11a en 5 GHz, avec une portée très limitée autour de la borne, et GrA_802.11g en 2.4 GHz, mieux reçu dans la salle et les salles voisines.',
      learned: 'J\'ai appris à interpréter une carte de couverture radio, à relier la puissance du signal à la position des points d\'accès et à comprendre l\'impact concret de la fréquence utilisée. La comparaison 2.4 GHz / 5 GHz m\'a surtout montré que le débit théorique ne suffit pas : la portée, les obstacles et l\'architecture du bâtiment changent fortement le résultat.',
      badges: ['WiFi', '802.11a', '802.11g', '2.4 GHz', '5 GHz', 'Couverture radio', 'Mesures terrain'],
      proof: 'Sujet du projet et captures de couverture disponibles ci-dessous.',
      images: [
        'Doc/SAE%201.03/SAE%20103%20D%C3%A9couvrir%20un%20dispositif%20de%20transmission.pdf',
        'Doc/SAE%201.03/%7BE6920BF2-3E69-4124-98FF-8E311A3AC617%7D.png',
        'Doc/SAE%201.03/%7B1182A6A0-7FAC-4D97-9D71-E57573D02D87%7D.png',
        'Doc/SAE%201.03/%7B3C33D9B9-3060-46E3-AAC8-50EE9D02706D%7D.png',
        'Doc/SAE%201.03/%7BDE945F8C-7685-4DDE-9786-8869DBF3A9CC%7D.png',
        'Doc/SAE%201.03/%7BA472FC83-4E18-459C-85F5-4E31405BCB1B%7D.png',
      ],
    },
    sae202: {
      tag: 'Projet 2.02',
      title: 'Web Radio ESP32',
      context: 'Projet progressif en 10 parties pour concevoir une radio internet complète. En partant d\'un exemple basique, j\'ai ajouté le contrôle du volume, de la tonalité et de la spatialisation depuis le clavier (registres SPI du VS1053), puis la gestion WiFi dynamique via WiFiManager, puis la lecture de flux avec la librairie ESP32_VS1053_Stream. La partie finale utilise le protocole MQTT et l\'app Android IoT MQTT Panel pour tout contrôler à distance depuis un téléphone.',
      learned: 'Ce projet m\'a surtout marqué par sa partie technique bas niveau. Lire les datasheets du VS1053 pour comprendre les registres SPI et implémenter la spatialisation à la main c\'était vraiment formateur. Apprendre MQTT et faire communiquer un téléphone Android avec l\'ESP32 en temps réel m\'a ouvert sur l\'IoT de façon concrète.',
      badges: ['ESP32 HUZZAH32', 'VS1053', 'Arduino C', 'WiFiManager', 'ESP32_VS1053_Stream', 'MQTT', 'PubSubClient', 'IoT MQTT Panel', 'SPI'],
      proof: 'Code source sur <a href="https://github.com/QuantumCommit7/Radio_ESP32" target="_blank" rel="noopener" class="modal-proof-link">github.com/QuantumCommit7/Radio_ESP32</a> — sujet du projet ci-dessous.',
      images: ['Doc/SAE%202.02/SAE202-Web_Radio-1.pdf'],
    },
    sae203: {
      tag: 'Projet 2.03',
      title: 'Mettre en place une solution informatique pour l’entreprise',
      context: 'Ce projet consistait à créer en groupe une solution web pour gérer un Drive d\'entreprise. Le site devait permettre de consulter, insérer et manipuler des données stockées en base : catégories de produits, produits, clients, commandes et lignes de commande. L\'application devait proposer un CRUD pour chaque type de donnée, l\'import de nouveaux produits depuis un fichier, ainsi que la génération d\'une fiche commande avec la liste des produits et le coût total.',
      learned: 'C\'est le projet qui représente le mieux mes compétences actuelles, parce qu\'il relie développement web, base de données, déploiement de services dans une machine virtuelle Linux et travail collaboratif. J\'ai aussi mieux compris comment organiser une application autour d\'un schéma de données, documenter une procédure de déploiement et travailler avec un dépôt GitHub commun.',
      badges: ['Développement web', 'Base de données', 'CRUD', 'Import fichier', 'Linux VM', 'GitHub', 'Travail collaboratif'],
      proof: 'Dépôt GitHub du projet : <a href="https://github.com/glufy100/SAE203" target="_blank" rel="noopener" class="modal-proof-link">Voir le dépôt GitHub</a> — Gantt et procédure de déploiement ci-dessous.',
      images: ['Doc/SAE%202.03/Gantt_SAE203_v8%281%29.xlsx', 'Doc/SAE%202.03/Fiche_Procedure_SAE203.docx'],
    },
    saegns3: {
      tag: 'Projet 2.01',
      title: 'Construire un réseau',
      context: 'On devait construire de zéro un réseau d\'entreprise complet sous GNS3. J\'ai configuré 3 VLANs (administration 100, développeurs 200, administrateurs 300) avec du routage inter-VLAN sur le commutateur fédérateur et du load balancing Spanning-Tree sur 3 liens. L\'adressage est en VLSM sur le réseau 192.168.64.0/20. J\'ai aussi déployé un serveur DHCP, un serveur FTP avec accès anonyme et utilisateurs, deux serveurs Apache avec synchronisation rsync, et mis en place des ACL sur les routeurs et le port-security sur les commutateurs.',
      learned: 'C\'est un projet très complet du semestre 2. Tout mettre en place en même temps (réseau, DHCP, FTP, Web, ACL) m\'a forcé à avoir une vision globale d\'une infrastructure. La partie sécurité avec les ACL et le port-security m\'a vraiment montré concrètement comment protéger un réseau.',
      badges: ['GNS3', 'Cisco IOS', 'VLAN 802.1Q', 'Spanning-Tree', 'RIPv2', 'DHCP', 'FTP', 'Apache', 'rsync', 'ACL', 'port-security', 'VLSM'],
      proof: 'Sujet du projet 2.01 et capture de la topologie disponibles ci-dessous.',
      images: ['Doc/SAE%202.01/Capture%20d%27%C3%A9cran%202026-06-09%20105413.png', 'Doc/SAE%202.01/sujet-SAE2.01.pdf'],
    },
  },
  en: {
    sae101: {
      tag: 'Project 1.01',
      title: 'IT Hygiene and Cybersecurity Awareness',
      context: 'For this project we had to give a presentation on a cybersecurity topic. My group chose Trojan horses. We made a video and a PowerPoint to explain how they work and how to protect against them.',
      learned: 'I really learned how to explain technical stuff in plain language. Breaking down how a Trojan spreads to someone outside IT is actually pretty tricky. It also made me want to dig deeper into cybersecurity.',
      badges: ['Cybersecurity', 'Trojan Horse', 'PowerPoint', 'Oral presentation'],
      proof: 'Oral presentation and PowerPoint slides produced as a group.',
      images: [],
    },
    sae105: {
      tag: 'Project 1.05',
      title: 'Data processing',
      context: 'We had to build a reporting tool to locate and remove large files on a disk. I made a PowerShell orchestrator that chains 3 Python scripts: the first for a GUI directory picker via PyQt5, the second for recursive tree analysis with pathlib and JSON export, and the third for an interactive pie chart with per-file checkboxes to select files for deletion. Deletion is done via a generated PowerShell script with double confirmation.',
      learned: 'I learned how to structure a project across multiple scripts that communicate with each other. Using pathlib to walk directory trees and sort by size was new to me. Building a GUI with PyQt5 and pie charts with PyQtChart was also a real discovery.',
      badges: ['Python', 'PyQt5', 'PyQtChart', 'PowerShell', 'pathlib', 'JSON', 'Windows'],
      proof: 'Project brief available below.',
      images: ['Doc/SAE%201.05/Sujet%20SAE%20105.pdf'],
    },
    sae104: {
      tag: 'Project 1.04',
      title: 'Presenting yourself online',
      context: 'We had to build a multi-page website to present our CV online. I designed several pages (home, education, qualifications, experience) with one shared CSS file. The skills section uses a 3-column Flexbox layout for RT, technical and interpersonal skills. The site is responsive with media queries and was hosted on codepen.io.',
      learned: 'This project is where I really learned to structure an HTML/CSS site. Managing a shared stylesheet across multiple pages and navigating with HTML anchors was all new to me. Making it responsive also taught me to think about design across different screen sizes.',
      badges: ['HTML5', 'CSS3', 'Flexbox', 'Media Queries', 'HTML Anchors', 'Codepen'],
      proof: 'Project brief available below.',
      images: ['Doc/SAE%201.04/Sujet%20SAE%20104.pdf'],
    },
    sae102: {
      tag: 'Project 1.02',
      title: 'Local Network Deployment',
      context: 'We had to simulate the network of a fictitious RTC company branch in EVE-NG. I defined 4 VLANs (Dire Util Serv Admi) and calculated the addressing plan using VLSM. I then configured a Catalyst 2960 switch and a Cisco 2800 router in router-on-a-stick mode for inter-VLAN routing. I also migrated the DHCP service to a Linux Ubuntu server with ip helper-address and deployed a second switch with VTP v2.',
      learned: 'This is the project that really taught me to design a network from scratch. VLSM calculations were confusing at first but once it clicked it made sense. Watching tagged 802.1Q frames in Wireshark and tracing a full DHCP Discover/Offer/Request/Ack exchange made everything much more concrete.',
      badges: ['EVE-NG', 'Cisco IOS', 'VLAN 802.1Q', 'VLSM', 'VTP v2', 'Linux DHCP', 'IP Helper', 'Wireshark'],
      proof: 'Project specification and brief available below.',
      images: ['Doc/SAE%201.02/SAE1.02_CahierDesCharges.pdf', 'Doc/SAE%201.02/SAE1.02.2024-1.pdf'],
    },
    sae103: {
      tag: 'Project 1.03',
      title: 'Discovering a transmission system',
      context: 'This project focused on analysing real WiFi coverage. We measured the UHA network on the first floor and ground floor of building C, then in the university library. The measurements helped identify strong coverage areas near access points, medium but usable areas, and weak or unavailable areas, especially in halls and zones farther away from the APs. We also compared two test networks: GrA_802.11a on 5 GHz, with very limited range around the access point, and GrA_802.11g on 2.4 GHz, which reached the room and nearby rooms more effectively.',
      learned: 'I learned how to interpret a radio coverage map, connect signal strength with access point placement and understand the practical impact of frequency bands. The 2.4 GHz / 5 GHz comparison especially showed me that theoretical throughput is not enough: range, obstacles and building layout strongly affect the final result.',
      badges: ['WiFi', '802.11a', '802.11g', '2.4 GHz', '5 GHz', 'Radio coverage', 'Field measurements'],
      proof: 'Project brief and coverage screenshots available below.',
      images: [
        'Doc/SAE%201.03/SAE%20103%20D%C3%A9couvrir%20un%20dispositif%20de%20transmission.pdf',
        'Doc/SAE%201.03/%7BE6920BF2-3E69-4124-98FF-8E311A3AC617%7D.png',
        'Doc/SAE%201.03/%7B1182A6A0-7FAC-4D97-9D71-E57573D02D87%7D.png',
        'Doc/SAE%201.03/%7B3C33D9B9-3060-46E3-AAC8-50EE9D02706D%7D.png',
        'Doc/SAE%201.03/%7BDE945F8C-7685-4DDE-9786-8869DBF3A9CC%7D.png',
        'Doc/SAE%201.03/%7BA472FC83-4E18-459C-85F5-4E31405BCB1B%7D.png',
      ],
    },
    sae202: {
      tag: 'Project 2.02',
      title: 'ESP32 Web Radio',
      context: 'A 10-part progressive project to build a complete internet radio. Starting from a basic example, I added keyboard controls for volume, tone and spatialisation (VS1053 SPI registers), then dynamic WiFi management via WiFiManager, then stream playback with the ESP32_VS1053_Stream library. The final part uses MQTT and the IoT MQTT Panel Android app to control everything remotely from a phone.',
      learned: 'This project stood out mainly for its low-level technical work. Reading the VS1053 datasheet to understand the SPI registers and implementing spatialisation by hand was genuinely educational. Learning MQTT and getting an Android phone talking to the ESP32 in real time gave me a real hands-on introduction to IoT.',
      badges: ['ESP32 HUZZAH32', 'VS1053', 'Arduino C', 'WiFiManager', 'ESP32_VS1053_Stream', 'MQTT', 'PubSubClient', 'IoT MQTT Panel', 'SPI'],
      proof: 'Source code at <a href="https://github.com/QuantumCommit7/Radio_ESP32" target="_blank" rel="noopener" class="modal-proof-link">github.com/QuantumCommit7/Radio_ESP32</a> — project brief below.',
      images: ['Doc/SAE%202.02/SAE202-Web_Radio-1.pdf'],
    },
    sae203: {
      tag: 'Project 2.03',
      title: 'Deploy an IT solution for a company',
      context: 'This project was a group project focused on building a web solution for managing a company Drive. The website had to let users view, insert and manipulate data stored in a database: product categories, products, customers, orders and order lines. The application required CRUD features for each data type, product import from a file, and order sheet generation with product lists and total cost.',
      learned: 'This is the project that best represents my current skills because it connects web development, databases, service deployment inside a Linux virtual machine and teamwork. I also got a clearer view of how to structure an application around a data schema, document a deployment procedure and work from a shared GitHub repository.',
      badges: ['Web development', 'Database', 'CRUD', 'File import', 'Linux VM', 'GitHub', 'Teamwork'],
      proof: 'Project GitHub repository: <a href="https://github.com/glufy100/SAE203" target="_blank" rel="noopener" class="modal-proof-link">Open the GitHub repository</a> — project Gantt and deployment procedure below.',
      images: ['Doc/SAE%202.03/Gantt_SAE203_v8%281%29.xlsx', 'Doc/SAE%202.03/Fiche_Procedure_SAE203.docx'],
    },
    saegns3: {
      tag: 'Project 2.01',
      title: 'Build a network',
      context: 'We had to build a complete enterprise network from scratch in GNS3. I configured 3 VLANs (administration 100, developers 200, administrators 300) with inter-VLAN routing on the core switch and Spanning-Tree load balancing across 3 links. Addressing is VLSM over the 192.168.64.0/20 network. I also deployed a DHCP server, an FTP server with anonymous access and named users, two Apache servers with rsync synchronisation, and set up ACLs on the routers and port-security on the switches.',
      learned: 'This was a very complete project from semester 2. Configuring everything at once (network, DHCP, FTP, Web, ACLs) forced me to think about infrastructure as a whole. The security part with ACLs and port-security really showed me in a concrete way how to protect a network.',
      badges: ['GNS3', 'Cisco IOS', 'VLAN 802.1Q', 'Spanning-Tree', 'RIPv2', 'DHCP', 'FTP', 'Apache', 'rsync', 'ACL', 'port-security', 'VLSM'],
      proof: 'Project 2.01 brief and topology screenshot available below.',
      images: ['Doc/SAE%202.01/Capture%20d%27%C3%A9cran%202026-06-09%20105413.png', 'Doc/SAE%202.01/sujet-SAE2.01.pdf'],
    },
  },
};

/* -- Références DOM modal -- */
const modalOverlay = document.getElementById('modal-overlay');
const modalBox     = document.getElementById('modal-box');
let lastModalTrigger = null;

/* -- Construire et ouvrir le modal -- */
function openModal(projectKey, trigger = null) {
  const data = projectModals[currentLang][projectKey];
  if (!data) return;
  if (trigger) lastModalTrigger = trigger;
  else if (!lastModalTrigger) lastModalTrigger = document.activeElement;

  const t = translations[currentLang];

  // Remplir les champs
  document.getElementById('modal-tag').textContent          = data.tag;
  document.getElementById('modal-title').textContent        = data.title;
  document.getElementById('modal-label-context').textContent = t['modal.label.context'];
  document.getElementById('modal-context').textContent      = data.context;
  document.getElementById('modal-label-learned').textContent = t['modal.label.learned'];
  document.getElementById('modal-learned').textContent      = data.learned;
  document.getElementById('modal-label-tech').textContent   = t['modal.label.tech'];
  document.getElementById('modal-label-proof').textContent  = t['modal.label.proof'];
  document.getElementById('modal-proof').innerHTML          = data.proof;

  // Badges technologies
  const badgesEl = document.getElementById('modal-badges');
  badgesEl.innerHTML = data.badges
    .map(b => `<span class="badge badge-orange">${b}</span>`)
    .join('');

  // Images / vidéos (réelles si src fourni, placeholder sinon)
  const imagesEl = document.getElementById('modal-images');
  const modalBody = document.querySelector('.modal-body');
  const images = data.images || [];
  const hasImages = images.length > 0;
  imagesEl.hidden = !hasImages;
  modalBody.classList.toggle('modal-body--single', !hasImages);
  imagesEl.innerHTML = images.map(src => {
    if (!src) return `<div class="modal-img-placeholder">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
           <span>Ajouter une photo</span>
         </div>`;
    if (/\.mp4$/i.test(src)) return `<video class="modal-img" src="${src}" controls preload="metadata"></video>`;
    if (/\.pdf$/i.test(src)) {
      const name = getDocumentName(src);
      return `<a class="modal-pdf-card" href="${src}" target="_blank" rel="noopener noreferrer">
        <svg class="modal-pdf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
        <span class="modal-pdf-name">${name}</span>
        <span class="modal-pdf-btn">Voir →</span>
      </a>`;
    }
    if (/\.xlsx?$/i.test(src)) {
      const name = getDocumentName(src);
      return `<a class="modal-pdf-card modal-file-card--sheet" href="${src}" target="_blank" rel="noopener noreferrer">
        <svg class="modal-pdf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 12h8M8 16h8M11 9v10M15 9v10"/></svg>
        <span class="modal-pdf-name">${name}</span>
        <span class="modal-pdf-btn">${currentLang === 'fr' ? 'Ouvrir' : 'Open'} →</span>
      </a>`;
    }
    if (/\.docx?$/i.test(src)) {
      const name = getDocumentName(src);
      return `<a class="modal-pdf-card modal-file-card--doc" href="${src}" target="_blank" rel="noopener noreferrer">
        <svg class="modal-pdf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="15" x2="16" y2="15"/><line x1="8" y1="18" x2="13" y2="18"/></svg>
        <span class="modal-pdf-name">${name}</span>
        <span class="modal-pdf-btn">${currentLang === 'fr' ? 'Ouvrir' : 'Open'} →</span>
      </a>`;
    }
    return `<a href="${src}" target="_blank" rel="noopener" class="modal-img-link"><img class="modal-img" src="${src}" alt="" loading="lazy"></a>`;
  }).join('');

  // Afficher
  document.body.style.overflow = 'hidden';
  modalOverlay.classList.add('open');
  document.getElementById('modal-close').focus();

  // Stocker la clé pour la mise à jour langue
  modalOverlay.dataset.currentProject = projectKey;
}

/* -- Fermer le modal -- */
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  if (lastModalTrigger && typeof lastModalTrigger.focus === 'function') {
    lastModalTrigger.focus();
  }
  lastModalTrigger = null;
}

function getModalFocusableElements() {
  return modalBox.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
}

function trapModalFocus(e) {
  const focusable = Array.from(getModalFocusableElements());
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

/* -- Fermeture : bouton X, clic fond, Échap -- */
document.getElementById('modal-close').addEventListener('click', closeModal);

modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', e => {
  if (!modalOverlay.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Tab') trapModalFocus(e);
});

/* -- Mettre à jour le modal si langue change pendant qu'il est ouvert -- */
const _originalToggle = toggleLanguage;
toggleLanguage = function() {
  _originalToggle();
  const key = modalOverlay.dataset.currentProject;
  if (modalOverlay.classList.contains('open') && key) openModal(key, lastModalTrigger);
};

/* =============================================
   CANVAS RÉSEAU ANIMÉ
   ============================================= */
(function () {
  if (shouldReduceMotion()) return;

  const cvs = document.createElement('canvas');
  cvs.id = 'network-canvas';
  cvs.setAttribute('aria-hidden', 'true');
  document.body.prepend(cvs);
  const ctx = cvs.getContext('2d');

  const ORANGE = '255,107,53';
  const N      = 60;
  const D_NODE = 145;
  const D_MOUSE= 200;

  let W, H, mouse = { x: -9999, y: -9999 };

  function resize() {
    W = cvs.width  = window.innerWidth;
    H = cvs.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  const nodes = Array.from({ length: N }, () => ({
    x:  Math.random() * window.innerWidth,
    y:  Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    r:  Math.random() * 1.4 + 0.8,
  }));

  function frame() {
    ctx.clearRect(0, 0, W, H);

    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
        if (d < D_NODE) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${ORANGE},${(1 - d / D_NODE) * 0.15})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
      const md = Math.hypot(nodes[i].x - mouse.x, nodes[i].y - mouse.y);
      if (md < D_MOUSE) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(${ORANGE},${(1 - md / D_MOUSE) * 0.45})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ORANGE},0.45)`;
      ctx.fill();
    });

    requestAnimationFrame(frame);
  }
  frame();
})();

/* =============================================
   TERMINAL INTERACTIF
   ============================================= */
(function () {
  const cmds = {
    fr: {
      help: [
        '<span class="tc">── Commandes disponibles ──────────────────</span>',
        '  <b>whoami</b>         présentation de Nathan',
        '  <b>skills</b>         compétences BUT R&T',
        '  <b>projects</b>       liste des projets',
        '  <b>ping nathan</b>    tester la connexion',
        '  <b>traceroute</b>     chemin vers la réussite',
        '  <b>neofetch</b>       fiche système',
        '  <b>contact</b>        coordonnées',
        '  <b>clear</b>          vider le terminal',
      ],
      whoami: [
        '<b>Nom :</b>     Nathan Schneider Fetique',
        '<b>Statut :</b>  Étudiant BUT R&T — IUT de Colmar',
        '<b>Promo :</b>   2025-2028',
        '<b>Focus :</b>   Réseaux · Systèmes · IoT',
        '<b>État :</b>    <span class="tok">● En ligne et disponible</span>',
      ],
      skills: [
        '<span class="tc">UE2.1 Administrer :</span>  TCP/IP · VLAN · STP · RIPv2 · GNS3 · Wireshark',
        '<span class="tc">UE2.2 Connecter :</span>    Linux/Debian · Windows Server · Bash · Samba',
        '<span class="tc">UE2.3 Programmer :</span>   Python · C/Arduino · ESP32 HUZZAH32 · MQTT',
      ],
      projects: [
        '<span class="tc">── Projets réalisés ───────────────────────</span>',
        '  <b>1.01</b>  Administration poste informatique',
        '  <b>1.02</b>  Déploiement réseau local',
        '  <b>1.03</b>  Mesures de couverture WiFi',
        '  <b>2.02</b>  Web Radio ESP32',
        '  <b>2.03</b>  <span class="tok">Solution Drive web / base de données  ★ projet phare</span>',
        '  <b>GNS3</b>  Infrastructure VLAN/STP/RIPv2',
        '  <b>Lab</b>   Samba / Debian 12',
      ],
      contact: [
        '<b>LinkedIn :</b>  linkedin.com/in/nathan-schneider-fetique-17a2b13b2',
        '<b>GitHub :</b>    github.com/QuantumCommit7',
        '<b>École :</b>     IUT de Colmar — BUT R&T',
      ],
      neofetch: [
        ' <span class="to">  ███╗   ██╗</span>  <b>nathan</b>@<b>portfolio</b>',
        ' <span class="to">  ████╗  ██║</span>  ─────────────────────────',
        ' <span class="to">  ██╔██╗ ██║</span>  <b>OS :</b>      Portfolio v1.0',
        ' <span class="to">  ██║╚██╗██║</span>  <b>Kernel :</b>  HTML5 · CSS3 · JS Vanilla',
        ' <span class="to">  ██║ ╚████║</span>  <b>Shell :</b>   BUT R&T 2025',
        ' <span class="to">  ╚═╝  ╚═══╝</span>  <b>CPU :</b>     Cerveau humain @ ∞ GHz',
        '               <b>RAM :</b>     Insuffisante avant café ☕',
        '               <b>Uptime :</b> 1 an de formation',
      ],
      'ping nathan': [
        'PING nathan.local (192.168.1.42) 56 bytes of data.',
        '64 bytes: icmp_seq=1 ttl=64 <span class="tok">time=0.42 ms</span>',
        '64 bytes: icmp_seq=2 ttl=64 <span class="tok">time=0.38 ms</span>',
        '64 bytes: icmp_seq=3 ttl=64 <span class="tok">time=0.41 ms</span>',
        '— 3 packets, 3 received, <span class="tok">0% packet loss</span> ✓',
      ],
      traceroute: [
        'traceroute to career.success, max 30 hops',
        ' 1  iut-colmar.edu        10.0.0.1      <span class="tok">1 ms</span>',
        ' 2  but-rt.formation      172.16.1.1    <span class="tok">2 ms</span>',
        ' 3  stage.entreprise      10.42.0.1     <span class="tok">8 ms</span>',
        ' 4  <span class="to">career.success</span>                          <span class="tok">∞ ms  ✓</span>',
      ],
      'sudo rm -rf /': ['<span class="terr">Permission refusée. C\'est un portfolio, pas un CTF 😄</span>'],
      clear: '__clear__',
    },
    en: {
      help: [
        '<span class="tc">── Available commands ─────────────────────</span>',
        '  <b>whoami</b>         about Nathan',
        '  <b>skills</b>         BUT R&T competencies',
        '  <b>projects</b>       project list',
        '  <b>ping nathan</b>    test connection',
        '  <b>traceroute</b>     path to success',
        '  <b>neofetch</b>       system info',
        '  <b>contact</b>        get in touch',
        '  <b>clear</b>          clear screen',
      ],
      whoami: [
        '<b>Name:</b>    Nathan Schneider Fetique',
        '<b>Status:</b>  BUT R&T Student — IUT de Colmar',
        '<b>Cohort:</b>  2025-2028',
        '<b>Focus:</b>   Networking · Systems · IoT',
        '<b>State:</b>   <span class="tok">● Online and available</span>',
      ],
      skills: [
        '<span class="tc">UE2.1 Administer:</span>  TCP/IP · VLAN · STP · RIPv2 · GNS3 · Wireshark',
        '<span class="tc">UE2.2 Connect:</span>     Linux/Debian · Windows Server · Bash · Samba',
        '<span class="tc">UE2.3 Program:</span>     Python · C/Arduino · ESP32 HUZZAH32 · MQTT',
      ],
      projects: [
        '<span class="tc">── Projects ───────────────────────────────</span>',
        '  <b>1.01</b>  Workstation Administration',
        '  <b>1.02</b>  Local Network Deployment',
        '  <b>1.03</b>  WiFi coverage measurements',
        '  <b>2.02</b>  ESP32 Web Radio',
        '  <b>2.03</b>  <span class="tok">Drive web app / database  ★ featured</span>',
        '  <b>GNS3</b>  VLAN/STP/RIPv2 Infrastructure',
        '  <b>Lab</b>   Samba / Debian 12',
      ],
      contact: [
        '<b>LinkedIn:</b>  linkedin.com/in/nathan-schneider-fetique-17a2b13b2',
        '<b>GitHub:</b>    github.com/QuantumCommit7',
        '<b>School:</b>    IUT de Colmar — BUT R&T',
      ],
      neofetch: [
        ' <span class="to">  ███╗   ██╗</span>  <b>nathan</b>@<b>portfolio</b>',
        ' <span class="to">  ████╗  ██║</span>  ─────────────────────────',
        ' <span class="to">  ██╔██╗ ██║</span>  <b>OS:</b>      Portfolio v1.0',
        ' <span class="to">  ██║╚██╗██║</span>  <b>Kernel:</b>  HTML5 · CSS3 · Vanilla JS',
        ' <span class="to">  ██║ ╚████║</span>  <b>Shell:</b>   BUT R&T 2025',
        ' <span class="to">  ╚═╝  ╚═══╝</span>  <b>CPU:</b>     Human Brain @ ∞ GHz',
        '               <b>RAM:</b>     Not enough before coffee ☕',
        '               <b>Uptime:</b> 1 year of training',
      ],
      'ping nathan': [
        'PING nathan.local (192.168.1.42) 56 bytes of data.',
        '64 bytes: icmp_seq=1 ttl=64 <span class="tok">time=0.42 ms</span>',
        '64 bytes: icmp_seq=2 ttl=64 <span class="tok">time=0.38 ms</span>',
        '64 bytes: icmp_seq=3 ttl=64 <span class="tok">time=0.41 ms</span>',
        '— 3 packets, 3 received, <span class="tok">0% packet loss</span> ✓',
      ],
      traceroute: [
        'traceroute to career.success, max 30 hops',
        ' 1  iut-colmar.edu        10.0.0.1      <span class="tok">1 ms</span>',
        ' 2  but-rt.formation      172.16.1.1    <span class="tok">2 ms</span>',
        ' 3  internship.company    10.42.0.1     <span class="tok">8 ms</span>',
        ' 4  <span class="to">career.success</span>                          <span class="tok">∞ ms  ✓</span>',
      ],
      'sudo rm -rf /': ['<span class="terr">Permission denied. This is a portfolio, not a CTF 😄</span>'],
      clear: '__clear__',
    },
  };

  /* -- Build DOM -- */
  const toggle = document.createElement('button');
  toggle.id    = 'term-toggle';
  toggle.title = 'Terminal';
  toggle.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>';

  const win = document.createElement('div');
  win.id = 'term-win';
  win.innerHTML = `
    <div id="term-bar">
      <div class="term-dots">
        <span class="td td-r" id="td-close"></span>
        <span class="td td-y"></span>
        <span class="td td-g"></span>
      </div>
      <span class="term-title">nathan@portfolio:~</span>
    </div>
    <div id="term-body">
      <div id="term-out"></div>
      <div class="term-row">
        <span class="term-ps">$</span>
        <input id="term-in" type="text" autocomplete="off" spellcheck="false" />
      </div>
    </div>`;

  document.body.append(toggle, win);

  const out   = document.getElementById('term-out');
  const input = document.getElementById('term-in');
  let   open  = false;
  let   hist  = [], hIdx = -1;

  /* -- Drag -- */
  let drag = false, dx = 0, dy = 0;
  document.getElementById('term-bar').addEventListener('mousedown', e => {
    drag = true;
    const r = win.getBoundingClientRect();
    dx = e.clientX - r.left;
    dy = e.clientY - r.top;
  });
  document.addEventListener('mousemove', e => {
    if (!drag) return;
    win.style.left   = (e.clientX - dx) + 'px';
    win.style.top    = (e.clientY - dy) + 'px';
    win.style.bottom = 'auto';
    win.style.right  = 'auto';
  });
  document.addEventListener('mouseup', () => drag = false);

  /* -- Output helpers -- */
  function print(lines) {
    lines.forEach(l => {
      const d = document.createElement('div');
      d.innerHTML = l;
      out.appendChild(d);
    });
    out.scrollTop = out.scrollHeight;
  }

  function echo(raw) {
    const d = document.createElement('div');
    d.innerHTML = `<span class="term-ps-echo">$</span> ${raw}`;
    out.appendChild(d);
  }

  /* -- Run command -- */
  function run(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    hist.unshift(raw.trim());
    hIdx = -1;
    echo(raw.trim());
    const map = cmds[currentLang] || cmds.fr;
    if (map[cmd] === '__clear__') { out.innerHTML = ''; return; }
    if (map[cmd]) { print(map[cmd]); }
    else { print([`<span class="terr">Commande inconnue : "${cmd}" — tapez <b>help</b></span>`]); }
  }

  function openTerm() {
    open = true;
    win.classList.add('open');
    toggle.classList.add('active');
    input.focus();
    if (!out.children.length)
      print(['<span class="to">nathan@portfolio:~</span>  Tapez <b>help</b> pour commencer.']);
  }

  function closeTerm() {
    open = false;
    win.classList.remove('open');
    toggle.classList.remove('active');
  }

  toggle.addEventListener('click', () => open ? closeTerm() : openTerm());
  document.getElementById('td-close').addEventListener('click', closeTerm);

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { run(input.value); input.value = ''; }
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (hIdx < hist.length - 1) input.value = hist[++hIdx];
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      input.value = hIdx > 0 ? hist[--hIdx] : '';
      if (hIdx <= 0) hIdx = -1;
    }
  });
})();

/* =============================================
   TILT 3D SUR LES CARTES PROJETS
   ============================================= */
if (!shouldReduceMotion()) {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'border-color 0.25s, box-shadow 0.25s, transform 0.08s ease';
    });

    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const x  = (e.clientX - r.left) / r.width  - 0.5;
      const y  = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.45s ease, border-color 0.25s, box-shadow 0.25s';
      card.style.transform  = '';
      setTimeout(() => { card.style.transition = ''; card.style.transform = ''; }, 450);
    });
  });
}
