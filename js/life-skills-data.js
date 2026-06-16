// ═══════════════════════════════════════════════════════════════════
// LIFE-SKILLS-DATA.JS — Daily French 🥖 v1.2
// Données partagées :
//  - BADGES_DEF, CAM_STAGES   → utilisés par dashboard.js
//  - LIFE_SKILLS, LIFE_SIMULATOR_SCENARIOS, calculateSkillScore,
//    renderStars, getSkillLevelLabel → utilisés par my-life.js
// Ce fichier ne fait QUE déclarer des données, pas de rendu DOM.
// ═══════════════════════════════════════════════════════════════════

// ─── LIFE SKILLS (10 compétences) ─────────────────────────────
const LIFE_SKILLS = [
  {
    id: 'courses',
    icon: '🛒',
    title: 'Shopping',
    titleFr: 'Faire les courses',
    desc: 'Markets, bakery, supermarket, paying',
    levels: [2, 6],
    sosCategories: ['courses'],
    convScenarios: ['boulanger'],
    color: '#F59E0B'
  },
  {
    id: 'medecin',
    icon: '🏥',
    title: 'Doctor',
    titleFr: 'Aller chez le médecin',
    desc: 'Appointments, symptoms, prescriptions',
    levels: [18],
    sosCategories: ['medecin'],
    convScenarios: ['medecin'],
    color: '#DC2626'
  },
  {
    id: 'pharmacie',
    icon: '💊',
    title: 'Pharmacy',
    titleFr: 'La pharmacie',
    desc: 'Medication, pain, allergies, first aid',
    levels: [],
    sosCategories: ['pharmacie'],
    convScenarios: [],
    color: '#059669'
  },
  {
    id: 'admin',
    icon: '📋',
    title: 'Administration',
    titleFr: 'Les démarches admin',
    desc: 'Town hall, paperwork, registration',
    levels: [],
    sosCategories: ['admin'],
    convScenarios: ['mairie'],
    color: '#4A5568'
  },
  {
    id: 'voisinage',
    icon: '🏘️',
    title: 'Neighbours',
    titleFr: 'Parler avec les voisins',
    desc: 'Introductions, small talk, being polite',
    levels: [4, 11],
    sosCategories: [],
    convScenarios: ['voisin'],
    color: '#7C3AED'
  },
  {
    id: 'restaurant',
    icon: '🍽️',
    title: 'Restaurant',
    titleFr: 'Au restaurant',
    desc: 'Ordering, allergies, paying the bill',
    levels: [],
    sosCategories: ['restaurant'],
    convScenarios: ['cafe'],
    color: '#EA580C'
  },
  {
    id: 'transports',
    icon: '🚆',
    title: 'Transport',
    titleFr: 'Prendre les transports',
    desc: 'Train, bus, tickets, directions',
    levels: [],
    sosCategories: ['transports'],
    convScenarios: ['gare'],
    color: '#2563EB'
  },
  {
    id: 'logement',
    icon: '🏠',
    title: 'Housing',
    titleFr: 'Gérer son logement',
    desc: 'Repairs, landlord, utilities',
    levels: [15],
    sosCategories: ['logement'],
    convScenarios: [],
    color: '#0891B2'
  },
  {
    id: 'telephone',
    icon: '📞',
    title: 'Phone Calls',
    titleFr: 'Au téléphone',
    desc: 'Appointments, understanding, messages',
    levels: [],
    sosCategories: ['telephone'],
    convScenarios: [],
    color: '#6366F1'
  },
  {
    id: 'ecole',
    icon: '🎒',
    title: "Child's School",
    titleFr: "L'école de l'enfant",
    desc: 'Enrollment, absences, speaking to teachers',
    levels: [],
    sosCategories: ['ecole'],
    convScenarios: [],
    color: '#EC4899'
  }
];

// ─── BADGES (29 badges) — utilisé par dashboard.js ────────────
const BADGES_DEF = [
  { id: 'first_step', icon: '🙋', name: 'First Step', desc: 'Complete level 1' },
  { id: 'greengrocer', icon: '🛒', name: 'Greengrocer', desc: 'Complete level 2' },
  { id: 'gardener', icon: '🌿', name: 'Gardener', desc: 'Complete level 3' },
  { id: 'neighbour', icon: '🏘️', name: 'Neighbour', desc: 'Complete level 4' },
  { id: 'tasteful', icon: '💗', name: 'Tasteful', desc: 'Complete level 5' },
  { id: 'mall_rat', icon: '🏬', name: 'Mall Rat', desc: 'Complete level 6' },
  { id: 'socialite', icon: '👫', name: 'Socialite', desc: 'Complete level 7' },
  { id: 'meteo', icon: '🌤️', name: 'Meteo', desc: 'Complete level 8' },
  { id: 'verb_master', icon: '⚡', name: 'Verb Master', desc: 'Complete level 9' },
  { id: 'polite', icon: '🎩', name: 'Polite', desc: 'Complete level 10' },
  { id: 'local', icon: '🇫🇷', name: 'Local', desc: 'Complete level 11' },
  { id: 'early_bird', icon: '🌅', name: 'Early Bird', desc: 'Play before 8am' },
  { id: 'emotional', icon: '💭', name: 'Emotional', desc: 'Complete level 13' },
  { id: 'fed', icon: '🍽️', name: 'Fed', desc: 'Complete level 14' },
  { id: 'home_owner', icon: '🏡', name: 'Home Owner', desc: 'Complete level 15' },
  { id: 'family', icon: '👨‍👩‍👧‍👦', name: 'Family', desc: 'Complete level 16' },
  { id: 'planner', icon: '📅', name: 'Planner', desc: 'Complete level 17' },
  { id: 'healthy', icon: '💊', name: 'Healthy', desc: 'Complete level 18' },
  { id: 'chef', icon: '👨‍🍳', name: 'Chef', desc: 'Complete level 19' },
  { id: 'fluent', icon: '🗣️', name: 'Fluent', desc: 'Complete level 20' },
  { id: 'streak_3', icon: '🔥', name: 'Streak 3', desc: '3 levels in a row' },
  { id: 'streak_7', icon: '🔥🔥', name: 'Streak 7', desc: '7 levels in a row' },
  { id: 'perfectionist', icon: '💯', name: 'Perfectionist', desc: '100% on a level' },
  { id: 'bookworm', icon: '📚', name: 'Bookworm', desc: 'Read all lessons' },
  { id: 'sharpshooter', icon: '🎯', name: 'Sharpshooter', desc: '10 correct in a row' },
  { id: 'halfway', icon: '🏆', name: 'Halfway', desc: 'Complete 10 levels' },
  { id: 'champion', icon: '👑', name: 'Champion', desc: 'Complete all levels' },
  { id: 'cameleon', icon: '🦎', name: 'Cameleon', desc: 'Use all features' },
  { id: 'genius', icon: '🧠', name: 'Genius', desc: 'Save 50 words' },
  { id: 'explorer', icon: '🚀', name: 'Explorer', desc: 'Try all modes' }
];

// ─── CAMÉLÉON STAGES — utilisé par dashboard.js ───────────────
const CAM_STAGES = [
  { min: 0, icon: '🥚', name: 'Egg', color: '#94A3B8' },
  { min: 3, icon: '🦎', name: 'Hatchling', color: '#22C55E' },
  { min: 10, icon: '🐊', name: 'Juvenile', color: '#3B82F6' },
  { min: 25, icon: '🐉', name: 'Adult', color: '#7C3AED' },
  { min: 50, icon: '👑', name: 'Dragon', color: '#F59E0B' }
];

// ─── LIFE SIMULATOR SCENARIOS — utilisé par my-life.js ────────
const LIFE_SIMULATOR_SCENARIOS = [
  {
    id: 'market',
    icon: '🛒',
    title: 'At the Market',
    desc: 'Buy groceries and ask for prices',
    questions: [
      {
        question: 'You want to buy apples. How do you ask "How much is it per kilo?"',
        options: [
          'Combien ca coute le kilo ?',
          'Ou sont les pommes ?',
          'Je voudrais un kilo de pommes.'
        ],
        correct: 0,
        explanation: '"Combien ca coute le kilo ?" = How much is it per kilo?'
      },
      {
        question: 'The vendor says "Ca fait 4 euros 50". What does it mean?',
        options: [
          'It costs 4.50€',
          'It weighs 4.50kg',
          'There are 4.50 items'
        ],
        correct: 0,
        explanation: '"Ca fait 4 euros 50" = That makes 4.50€ (total price)'
      },
      {
        question: 'You want to pay. What do you say?',
        options: [
          'Je peux payer par carte ?',
          'C\'est trop cher !',
          'Je ne veux pas ca.'
        ],
        correct: 0,
        explanation: '"Je peux payer par carte ?" = Can I pay by card?'
      }
    ]
  },
  {
    id: 'doctor',
    icon: '🩺',
    title: 'Doctor Visit',
    desc: 'Explain your symptoms',
    questions: [
      {
        question: 'You have a headache. How do you say it?',
        options: [
          'J\'ai mal a la tete.',
          'J\'ai froid.',
          'Je suis fatigue.'
        ],
        correct: 0,
        explanation: '"J\'ai mal a la tete" = I have a headache'
      },
      {
        question: 'The doctor asks "Depuis quand ?" What does it mean?',
        options: [
          'Since when? (how long?)',
          'Why?',
          'Where?'
        ],
        correct: 0,
        explanation: '"Depuis quand ?" = Since when? / How long?'
      },
      {
        question: 'You need a prescription. What do you ask?',
        options: [
          'Pouvez-vous me faire une ordonnance ?',
          'Ou est la pharmacie ?',
          'Je veux des medicaments.'
        ],
        correct: 0,
        explanation: '"Pouvez-vous me faire une ordonnance ?" = Can you write me a prescription?'
      }
    ]
  },
  {
    id: 'bank',
    icon: '🏦',
    title: 'At the Bank',
    desc: 'Open an account and ask about services',
    questions: [
      {
        question: 'You want to open an account. What do you say?',
        options: [
          'Je voudrais ouvrir un compte bancaire.',
          'Je veux retirer de l\'argent.',
          'Ou est le distributeur ?'
        ],
        correct: 0,
        explanation: '"Je voudrais ouvrir un compte bancaire" = I would like to open a bank account.'
      },
      {
        question: 'The banker asks "Quel type de compte ?" What does it mean?',
        options: [
          'What type of account?',
          'How much money?',
          'What is your name?'
        ],
        correct: 0,
        explanation: '"Quel type de compte ?" = What type of account?'
      },
      {
        question: 'You need your IBAN. How do you ask?',
        options: [
          'Pouvez-vous me donner mon RIB ?',
          'Je veux fermer mon compte.',
          'Ou puis-je signer ?'
        ],
        correct: 0,
        explanation: '"RIB" (Releve d\'Identite Bancaire) = bank details document with IBAN'
      }
    ]
  }
];

// ─── FONCTIONS UTILITAIRES — utilisées par my-life.js ─────────

function calculateSkillScore(skill, player) {
  if (!player) return 0;
  let score = 0;
  const maxScore = 5;
  const completed = player.completed || [];
  const relatedCompleted = skill.levels.filter(function(l) {
    return completed.indexOf(l) > -1;
  }).length;
  score += Math.min(2.5, relatedCompleted * 0.8);

  let sosFavs = [];
  try {
    sosFavs = JSON.parse(localStorage.getItem('dailyFrench_sosFavorites')) || [];
  } catch(e) { sosFavs = []; }

  const relatedFavs = sosFavs.filter(function(f) {
    return skill.sosCategories.indexOf(f.category) > -1;
  }).length;
  score += Math.min(1.5, relatedFavs * 0.5);

  const convDone = player.convProgress || {};
  const relatedConv = skill.convScenarios.filter(function(s) {
    return convDone[s] && convDone[s].completed;
  }).length;
  score += Math.min(1, relatedConv * 0.5);

  return Math.min(maxScore, Math.round(score * 10) / 10);
}

function renderStars(score) {
  const full = Math.floor(score);
  const half = score % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  let html = '';
  for (let i = 0; i < full; i++) html += '★';
  if (half) html += '½';
  for (let i = 0; i < empty; i++) html += '☆';
  return html;
}

function getSkillLevelLabel(score) {
  if (score >= 4.5) return { label: 'Expert', color: '#059669' };
  if (score >= 3.5) return { label: 'Advanced', color: '#2563EB' };
  if (score >= 2.5) return { label: 'Intermediate', color: '#F59E0B' };
  if (score >= 1) return { label: 'Beginner', color: '#7C3AED' };
  return { label: 'Novice', color: '#94A3B8' };
}

// ─── INIT — log uniquement, pas de rendu DOM ───────────────────
function initLifeSkillsData() {
  console.log('[LifeSkillsData] LIFE_SKILLS:', LIFE_SKILLS.length, '| BADGES:', BADGES_DEF.length, '| CAM_STAGES:', CAM_STAGES.length, '| Scenarios:', LIFE_SIMULATOR_SCENARIOS.length);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLifeSkillsData);
} else {
  initLifeSkillsData();
}
