// ═══════════════════════════════════════════════════════════════════
// CONFIG.JS — Daily French 🥖
// Configuration globale, constantes, gameState
// 
// Date : 7 juin 2026
// Version : 2.1 — Ajout du mode de direction (EN→FR / FR→EN / Mixed)
// ═══════════════════════════════════════════════════════════════════

// ─── 1. CONFIGURATION MATIÈRE ───────────────────────────────────────
const SUBJECT_CONFIG = {
  name:          "Daily French",
  emoji:         "🥖",
  lang:          "fr",
  interfaceLang: "en",
  storageKey:    "dailyFrench_v1",
  playersKey:    "dailyFrench_players",
  dashboardFile: "dashboard.html",
  vocabularyFile:"vocabulary.html",
  maxLevel:      20
};

// ─── 2. FONCTIONNALITÉS ACTIVÉES ────────────────────────────────────
const FEATURES = {
  voice: {
    enabled:           true,
    tts:               true,
    stt:               true,
    pronunciationCheck:true,
    serialMode:        false
  },
  pictures: {
    enabled:  true,
    lazyLoad: true
  },
  offline: {
    serviceWorker: false
  }
};

// ─── 3. NOMS DES NIVEAUX ────────────────────────────────────────────
const LEVEL_NAMES = {
  1: "Greetings 🙋",
  2: "At the market 🛒",
  3: "In the garden 🌿",
  4: "Neighbours 🏘️",
  5: "Tastes & desires ❤️",
  6: "At the shops 🏬",
  7: "Friends & going out 👫",
  8: "Weather 🌤️",
  9: "Essential verbs ⚡",
  10:"Politeness 🎩",
  11:"Daily life in France 🇫🇷",
  12:"My Routine 🌅",
  13:"My Emotions ❤️",
  14:"My Needs 🍽️",
  15:"My House 🏡",
  16:"My Family 👨‍👩‍👧",
  17:"My Plans 📅",
  18:"My Health 💊",
  19:"My Cooking 🍳",
  20:"Living French 🗣️"
};

// ═══════════════════════════════════════════════════════════════════
// DIRECTION MODE — NOUVEAU v2.1
// Détermine la direction des questions dans le quiz
// 
// "en-first" (défaut) : Question EN → Réponse FR
// "fr-first"          : Question FR → Réponse EN
// "mixed"             : Aléatoire FR→EN ou EN→FR
// ═══════════════════════════════════════════════════════════════════

const DIRECTION_MODES = {
  "en-first": { label: "🇬🇧→🇫🇷 English First", labelFr: "🇬🇧→🇫🇷 Anglais d'abord" },
  "fr-first": { label: "🇫🇷→🇬🇧 French First", labelFr: "🇫🇷→🇬🇧 Français d'abord" },
  "mixed":    { label: "🔄 Mixed Direction", labelFr: "🔄 Direction mixte" }
};

// ─── 4. ÉTAT DU JEU ─────────────────────────────────────────────────
let gameState = {
  currentPlayer:        null,
  currentLevel:         1,
  currentMode:          "mixte",
  currentDirection: "en-first", // NOUVEAU v2.1 : en-first | fr-first | mixed
  questions:            [],
  currentQuestionIndex: 0,
  score:                0,
  answers:              [],
  selectedOption:       null
};
