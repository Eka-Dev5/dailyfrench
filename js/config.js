// ═══════════════════════════════════════════════════════════════════
// CONFIG.JS — Daily French
// Configuration globale, constantes, gameState
// ═══════════════════════════════════════════════════════════════════

const SUBJECT_CONFIG = {
  name: "Daily French",
  emoji: "🥖",
  lang: "fr",
  interfaceLang: "en",
  storageKey: "dailyFrench_v1",
  playersKey: "dailyFrench_players",
  dashboardFile: "dashboard.html",
  vocabularyFile: "vocabulary.html",
  maxLevel: 20
};

const CONFIG = {
  LESSONS_COUNT: 20
};

const FEATURES = {
  voice: {
    enabled: true,
    tts: true,
    stt: true,
    pronunciationCheck: true,
    serialMode: false
  },
  pictures: {
    enabled: true,
    lazyLoad: true
  },
  offline: {
    serviceWorker: false
  }
};

const LEVEL_NAMES = {
  1: "Greetings",
  2: "At the market",
  3: "In the garden",
  4: "Neighbours",
  5: "Tastes & desires",
  6: "At the shops",
  7: "Friends & going out",
  8: "Weather",
  9: "Essential verbs",
  10: "Politeness",
  11: "Daily life in France",
  12: "My Routine",
  13: "My Emotions",
  14: "My Needs",
  15: "My House",
  16: "My Family",
  17: "My Plans",
  18: "My Health",
  19: "My Cooking",
  20: "Living French"
};

let gameState = {
  currentPlayer: null,
  currentLevel: 1,
  currentMode: "mixed",
  currentDirection: "en-first",
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  answers: [],
  selectedOption: null
};

if (typeof window !== "undefined") {
  window.SUBJECT_CONFIG = SUBJECT_CONFIG;
  window.CONFIG = CONFIG;
  window.FEATURES = FEATURES;
  window.LEVEL_NAMES = LEVEL_NAMES;
  window.gameState = gameState;
}
