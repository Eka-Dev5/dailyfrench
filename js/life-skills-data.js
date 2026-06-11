// ═══════════════════════════════════════════════════════════════════
// LIFE-SKILLS-DATA.JS — Daily French 🥖
// TOUTES les données Life Skills + Simulator + Badges + Caméléon
// ═══════════════════════════════════════════════════════════════════

// ─── LIFE SKILLS (10 compétences) ─────────────────────────────
const LIFE_SKILLS = [ /* ... ton contenu actuel ... */ ];

// ─── BADGES (26 badges) ───────────────────────────────────────
const BADGES_DEF = [
  { id: 'tasteful', icon: '💗', name: 'Tasteful', desc: 'Complete level 5' },
  { id: 'mall_rat', icon: '🏬', name: 'Mall Rat', desc: 'Complete level 6' },
  { id: 'socialite', icon: '👫', name: 'Socialite', desc: 'Complete level 7' },
  { id: 'meteo', icon: '🌤️', name: 'Météo', desc: 'Complete level 8' },
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

// ─── CAMÉLÉON STAGES ─────────────────────────────────────────
const CAM_STAGES = [
  { min: 0, icon: '🥚', name: 'Egg', color: '#94A3B8' },
  { min: 3, icon: '🦎', name: 'Hatchling', color: '#22C55E' },
  { min: 10, icon: '🐊', name: 'Juvenile', color: '#3B82F6' },
  { min: 25, icon: '🐉', name: 'Adult', color: '#7C3AED' },
  { min: 50, icon: '👑', name: 'Dragon', color: '#F59E0B' }
];

// ─── LIFE SIMULATOR SCENARIOS ───────────────────────────────
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
          'Combien ça coûte le kilo ?',
          'Où sont les pommes ?',
          'Je voudrais un kilo de pommes.'
        ],
        correct: 0,
        explanation: '"Combien ça coûte le kilo ?" = How much is it per kilo?'
      },
      {
        question: 'The vendor says "Ça fait 4 euros 50". What does it mean?',
        options: [
          'It costs 4.50€',
          'It weighs 4.50kg',
          'There are 4.50 items'
        ],
        correct: 0,
        explanation: '"Ça fait 4 euros 50" = That makes 4.50€ (total price)'
      },
      {
        question: 'You want to pay. What do you say?',
        options: [
          'Je peux payer par carte ?',
          'C\'est trop cher !',
          'Je ne veux pas ça.'
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
          'J\'ai mal à la tête.',
          'J\'ai froid.',
          'Je suis fatigué.'
        ],
        correct: 0,
        explanation: '"J\'ai mal à la tête" = I have a headache'
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
          'Où est la pharmacie ?',
          'Je veux des médicaments.'
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
          'Où est le distributeur ?'
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
          'Où puis-je signer ?'
        ],
        correct: 0,
        explanation: '"RIB" (Relevé d\'Identité Bancaire) = bank details document with IBAN'
      }
    ]
  }
];

// ─── FONCTIONS UTILITAIRES ──────────────────────────────────
function calculateSkillScore(skill, player) { /* ... ton contenu actuel ... */ }
function renderStars(score) { /* ... ton contenu actuel ... */ }
function getSkillLevelLabel(score) { /* ... ton contenu actuel ... */ }
