// ═══════════════════════════════════════════════════════════════════
// LIFE-SKILLS-DATA.JS — Daily French 🥖
// Compétences de vie en France avec calcul de progression
// ═══════════════════════════════════════════════════════════════════

const LIFE_SKILLS = [
  {
    id: 'courses',
    icon: '🛒',
    title: 'Shopping',
    titleFr: 'Faire les courses',
    desc: 'Markets, bakery, supermarket, paying',
    levels: [2, 6],           // niveaux quiz liés
    sosCategories: ['courses'], // catégories SOS liées
    convScenarios: ['boulanger'], // scénarios de conversation liés
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

// ═══════════════════════════════════════════════════════════════════
// CALCUL DU SCORE D'UNE COMPÉTENCE (0-5)
// ═══════════════════════════════════════════════════════════════════

function calculateSkillScore(skill, player) {
  if (!player) return 0;

  let score = 0;
  const maxScore = 5;

  // 1. Points des niveaux quiz complétés (+0.8 par niveau, max 2.5)
  const completed = player.completed || [];
  const relatedCompleted = skill.levels.filter(l => completed.includes(l)).length;
  score += Math.min(2.5, relatedCompleted * 0.8);

  // 2. Points des favoris SOS (+0.3 par favori, max 1.5)
  let sosFavs = [];
  try {
    sosFavs = JSON.parse(localStorage.getItem('dailyFrench_sosFavorites')) || [];
  } catch { /* ignore */ }
  const relatedFavs = sosFavs.filter(f => skill.sosCategories.includes(f.category)).length;
  score += Math.min(1.5, relatedFavs * 0.3);

  // 3. Points des conversations réussies (+1.5 par scénario à 80%+, max 2.5)
  const convProg = player.conversationProgress || {};
  let convPoints = 0;
  skill.convScenarios.forEach(scenId => {
    const prog = convProg[scenId];
    if (prog && prog.bestScore >= 80) convPoints += 1.5;
    else if (prog && prog.bestScore >= 50) convPoints += 0.5;
  });
  score += Math.min(2.5, convPoints);

  return Math.min(maxScore, Math.round(score * 2) / 2); // arrondi à 0.5 près
}

function renderStars(score) {
  const full = Math.floor(score);
  const half = score % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '⯪' : '') + '☆'.repeat(empty);
}

function getSkillLevelLabel(score) {
  if (score >= 4.5) return { label: 'Expert', color: '#059669' };
  if (score >= 3.5) return { label: 'Advanced', color: '#2563EB' };
  if (score >= 2.5) return { label: 'Intermediate', color: '#7C3AED' };
  if (score >= 1.5) return { label: 'Beginner', color: '#F59E0B' };
  if (score >= 0.5) return { label: 'Novice', color: '#EA580C' };
  return { label: 'Not started', color: '#94A3B8' };
}
