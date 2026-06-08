═══════════════════════════════════════════════════════════════════════
  CARTOGRAPHIE GÉNÉRALE — DAILY FRENCH v3.0
  Date : 8 juin 2026
  Version : 3.0 — Refonte CSS modulaire + Settings universel
═══════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────┐
│                    ARBRE DES FICHIERS (30 fichiers)                │
└─────────────────────────────────────────────────────────────────────┘

📦 daily-french/
├── 📄 index.html              → Redirection vers quiz.html
├── 📄 quiz.html               → Page principale (home + leçons + niveaux + jeu + résultats)
├── 📄 dashboard.html          → Tableau de bord (journey, badges, caméléon, historique, skills)
├── 📄 vocabulary.html         → Lexique interactif (818 mots, recherche, filtres, popup)
├── 📄 emergency.html          → Mode SOS (10 catégories, 150 phrases, TTS, favoris)
├── 📄 conversation.html       → Simulateur de dialogues (7 scénarios interactifs)
├── 📁 css/
│   ├── base.css               → Fondation universelle (~90 classes)
│   ├── quiz.css               → Styles quiz uniquement (~35 classes)
│   ├── dashboard.css          → Styles dashboard uniquement (~40 classes)
│   ├── vocabulary.css         → Styles vocabulaire uniquement (~10 classes)
│   ├── emergency.css          → Styles SOS uniquement (~28 classes)
│   └── conversation.css       → Styles conversation uniquement (~47 classes)
└── 📁 js/
    ├── config.js              → Configuration globale
    ├── core.js                → Moteur central (storage, joueurs, i18n, thème)
    ├── ui-utils.js            → Utilitaires UI (toast, popup, export)
    ├── data.js                → Données leçons + questions (20 niveaux)
    ├── vocabulary-data.js     → Base de données lexicale (818 mots)
    ├── vocabulary-engine.js   → Moteur de surlignement lexique
    ├── vocabulary.js          → Logique page lexique (init + filtres)
    ├── game-engine.js         → Cœur du jeu (questions, score, résultats)
    ├── quiz.js                → Routing et affichage quiz
    ├── dashboard.js           → Rendu dashboard
    ├── phrase-data.js         → Données jeu Phrase Builder
    ├── audio-data.js          → Données jeu Listen & Repeat
    ├── conversation.js        → Logique simulateur de dialogues
    ├── conversation-data.js   → Scénarios de conversation (7 scénarios)
    ├── emergency.js           → Logique mode SOS
    ├── emergency-data.js      → Phrases d'urgence (10 catégories)
    ├── life-skills-data.js    → Compétences de vie + scoring
    └── players.js             → Gestion des profils joueurs (bridge)

🗑️ FICHIERS SUPPRIMÉS v3.0 :
   • styles.css (obsolète, doublons base.css + quiz.css)
   • lexique-engine.js (doublon vocabulary-engine.js)

═══════════════════════════════════════════════════════════════════════
  ARCHITECTURE CSS v3.0 — RÈGLE D'OR
═══════════════════════════════════════════════════════════════════════

Si une classe est utilisée par 2+ pages → base.css
Si une classe est utilisée par 1 page seule → [page].css

┌─────────────┬────────────────────────────────────────────────────────┐
│ Fichier     │ Contenu                                                │
├─────────────┼────────────────────────────────────────────────────────┤
│ base.css    │ Variables, reset, nav-top/bottom, hero, bento,       │
│ (~90)       │ boutons, inputs, sections, cartes, feedback, barres, │
│             │ cercle score, modal, toast, popup vocab, settings,    │
│             │ utilitaires, keyframes communs                         │
├─────────────┼────────────────────────────────────────────────────────┤
│ quiz.css    │ Mode selector, leçons collapsibles, grille niveaux,   │
│ (~35)       │ zone jeu QCM/input, résultats                          │
├─────────────┼────────────────────────────────────────────────────────┤
│ dashboard.css│ Journey map, badges, caméléon, historique, génie,    │
│ (~40)       │ life skills                                            │
├─────────────┼────────────────────────────────────────────────────────┤
│ vocabulary.css│ Toolbar sticky, grille cartes, carte mot              │
│ (~10)       │                                                        │
├─────────────┼────────────────────────────────────────────────────────┤
│ emergency.css│ Hero rouge, catégories, phrases, TTS/favoris/copie   │
│ (~28)       │                                                        │
├─────────────┼────────────────────────────────────────────────────────┤
│ conversation.css│ Hero violet, scénarios, chat, choix, résultats     │
│ (~47)       │                                                        │
└─────────────┴────────────────────────────────────────────────────────┘

CLASSES RENOMMÉES v3.0 :
   .result-circle  → .score-circle
   .result-pct     → .score-pct
   .progress-track → .bar-track
   .progress-fill  → .bar-fill

NOUVELLES CLASSES v3.0 :
   .direction-btn, .direction-btn.active (boutons direction EN↔FR)

═══════════════════════════════════════════════════════════════════════
  BOUTON SETTINGS (⚙️) — UNIVERSEL v3.0
═══════════════════════════════════════════════════════════════════════

Présent sur TOUTES les pages (dans le hero) :
   • quiz.html         ✅ Bouton ⚙️ + panel settings
   • dashboard.html    ✅ Bouton ⚙️ + panel settings
   • vocabulary.html   ✅ Bouton ⚙️ + panel settings
   • emergency.html    ✅ Bouton ⚙️ + panel settings
   • conversation.html ✅ Bouton ⚙️ + panel settings

Panel settings contient (3 lignes) :
   1. Theme     : 🌑 Ardoise | 🟣 Mauve | 🟤 Terra
   2. Interface : 🇬🇧 EN | 🇫🇷 FR
   3. Direction : 🇬🇧→🇫🇷 EN First | 🇫🇷→🇬🇧 FR First | 🔄 Mixed

Fonctions inline requises dans chaque HTML :
   toggleSettings()        → ouvre/ferme #settingsPanel
   applyThemePick(theme)   → data-theme + localStorage
   applyLangPick(lang)     → localStorage
   applyDirectionPick(dir) → gameState + localStorage + maj visuelle

═══════════════════════════════════════════════════════════════════════
  NAVIGATION — DOUBLE BARRE (v2.0TS, favoris)
├── 📄 conversation.html       → Simulateur de dialogues (7 scénarios interactifs)
├── 📁 css/
│   ├── base.css               → Fondation universelle (~90 classes)
│   ├── quiz.css               → Styles quiz uniquement (~35 classes)
│   ├── dashboard.css          → Styles dashboard uniquement (~40 classes)
│   ├── vocabulary.css         → Styles vocabulaire uniquement (~10 classes)
│   ├── emergency.css          → Styles SOS uniquement (~28 classes)
│   └── conversation.css       → Styles conversation uniquement (~47 classes)
└── 📁 js/
    ├── config.js              → Configuration globale
    ├── core.js                → Moteur central (storage, joueurs, i18n, thème)
    ├── ui-utils.js            → Utilitaires UI (toast, popup, export)
    ├── data.js                → Données leçons + questions (20 niveaux)
    ├── vocabulary-data.js     → Base de données lexicale (818 mots)
    ├── vocabulary-engine.js   → Moteur de surlignement lexique
    ├── vocabulary.js          → Logique page lexique (init + filtres)
    ├── game-engine.js         → Cœur du jeu (questions, score, résultats)
    ├── quiz.js                → Routing et affichage quiz
    ├── dashboard.js           → Rendu dashboard
    ├── phrase-data.js         → Données jeu Phrase Builder
    ├── audio-data.js          → Données jeu Listen & Repeat
    ├── conversation.js        → Logique simulateur de dialogues
    ├── conversation-data.js   → Scénarios de conversation (7 scénarios)
    ├── emergency.js           → Logique mode SOS
    ├── emergency-data.js      → Phrases d'urgence (10 catégories)
    ├── life-skills-data.js    → Compétences de vie + scoring
    └── players.js             → Gestion des profils joueurs (bridge)

🗑️ FICHIERS SUPPRIMÉS v3.0 :
   • styles.css (obsolète, doublons base.css + quiz.css)
   • lexique-engine.js (doublon vocabulary-engine.js)

═══════════════════════════════════════════════════════════════════════
  ARCHITECTURE CSS v3.0 — RÈGLE D'OR
═══════════════════════════════════════════════════════════════════════

Si une classe est utilisée par 2+ pages → base.css
Si une classe est utilisée par 1 page seule → [page].css

┌─────────────┬────────────────────────────────────────────────────────┐
│ Fichier     │ Contenu                                                │
├─────────────┼────────────────────────────────────────────────────────┤
│ base.css    │ Variables, reset, nav-top/bottom, hero, bento,       │
│ (~90)       │ boutons, inputs, sections, cartes, feedback, barres, │
│             │ cercle score, modal, toast, popup vocab, settings,    │
│             │ utilitaires, keyframes communs                         │
├─────────────┼────────────────────────────────────────────────────────┤
│ quiz.css    │ Mode selector, leçons collapsibles, grille niveaux,   │
│ (~35)       │ zone jeu QCM/input, résultats                          │
├─────────────┼────────────────────────────────────────────────────────┤
│ dashboard.css│ Journey map, badges, caméléon, historique, génie,    │
│ (~40)       │ life skills                                            │
├─────────────┼────────────────────────────────────────────────────────┤
│ vocabulary.css│ Toolbar sticky, grille cartes, carte mot              │
│ (~10)       │                                                        │
├─────────────┼────────────────────────────────────────────────────────┤
│ emergency.css│ Hero rouge, catégories, phrases, TTS/favoris/copie   │
│ (~28)       │                                                        │
├─────────────┼────────────────────────────────────────────────────────┤
│ conversation.css│ Hero violet, scénarios, chat, choix, résultats     │
│ (~47)       │                                                        │
└─────────────┴────────────────────────────────────────────────────────┘

CLASSES RENOMMÉES v3.0 :
   .result-circle  → .score-circle
   .result-pct     → .score-pct
   .progress-track → .bar-track
   .progress-fill  → .bar-fill

NOUVELLES CLASSES v3.0 :
   .direction-btn, .direction-btn.active (boutons direction EN↔FR)

═══════════════════════════════════════════════════════════════════════
  BOUTON SETTINGS (⚙️) — UNIVERSEL v3.0
═══════════════════════════════════════════════════════════════════════

Présent sur TOUTES les pages (dans le hero) :
   • quiz.html         ✅ Bouton ⚙️ + panel settings
   • dashboard.html    ✅ Bouton ⚙️ + panel settings
   • vocabulary.html   ✅ Bouton ⚙️ + panel settings
   • emergency.html    ✅ Bouton ⚙️ + panel settings
   • conversation.html ✅ Bouton ⚙️ + panel settings

Panel settings contient (3 lignes) :
   1. Theme     : 🌑 Ardoise | 🟣 Mauve | 🟤 Terra
   2. Interface : 🇬🇧 EN | 🇫🇷 FR
   3. Direction : 🇬🇧→🇫🇷 EN First | 🇫🇷→🇬🇧 FR First | 🔄 Mixed

Fonctions inline requises dans chaque HTML :
   toggleSettings()        → ouvre/ferme #settingsPanel
   applyThemePick(theme)   → data-theme + localStorage
   applyLangPick(lang)     → localStorage
   applyDirectionPick(dir) → gameState + localStorage + maj visuelle

═══════════════════════════════════════════════════════════════════════
  NAVIGATION — DOUBLE BARRE (v2.0/v3.0 inchangé)
═══════════════════════════════════════════════════════════════════════

Barre du HAUT (.nav-top) — Pages annexes
   🚨 SOS      → emergency.html
   💬 Talk     → conversation.html
   🎧 Listen   → games/listen.html
   🧩 Phrase   → games/phrase-builder.html
   ⚙️ Config   → dashboard.html

Barre du BAS (.nav-bottom) — Navigation principale
   🏠 Start      → quiz.html
   📚 Lessons     → quiz.html?section=lecons
   🎮 Play        → quiz.html?section=levels
   📖 Vocab       → vocabulary.html
   📊 Dashboard   → dashboard.html

═══════════════════════════════════════════════════════════════════════
  ORDRES DE CHARGEMENT PAR PAGE
═══════════════════════════════════════════════════════════════════════

quiz.html :
   CSS : base.css → quiz.css
   JS  : config.js → data.js → vocabulary-data.js → vocabulary-engine.js
         → core.js → ui-utils.js → game-engine.js → quiz.js

dashboard.html :
   CSS : base.css → dashboard.css
   JS  : config.js → data.js → vocabulary-data.js → vocabulary-engine.js
         → emergency-data.js → conversation-data.js → life-skills-data.js
         → core.js → ui-utils.js → dashboard.js

vocabulary.html :
   CSS : base.css → vocabulary.css
   JS  : config.js → data.js → vocabulary-data.js → vocabulary-engine.js
         → core.js → ui-utils.js → vocabulary.js

emergency.html :
   CSS : base.css → emergency.css
   JS  : config.js → data.js → emergency-data.js → core.js → ui-utils.js
         → emergency.js

conversation.html :
   CSS : base.css → conversation.css
   JS  : config.js → data.js → conversation-data.js → core.js → ui-utils.js
         → conversation.js

═══════════════════════════════════════════════════════════════════════
  CONFIG.JS — DONNÉES EXPORTÉES
═══════════════════════════════════════════════════════════════════════

SUBJECT_CONFIG = {
  name: "Daily French", emoji: "🥖", lang: "fr",
  interfaceLang: "en", storageKey: "dailyFrench_v1",
  playersKey: "dailyFrench_players", maxLevel: 20
}

FEATURES = {
  voice: { enabled:true, tts:true, stt:true,
           pronunciationCheck:true, serialMode:false },
  pictures: { enabled:true, lazyLoad:true },
  offline: { serviceWorker:false }
}

LEVEL_NAMES = {
  1:"Greetings 🙋", 2:"At the market 🛒", 3:"In the garden 🌿",
  4:"Neighbours 🏘️", 5:"Tastes & desires ❤️", 6:"At the shops 🏬",
  7:"Friends & going out 👫", 8:"Weather 🌤️", 9:"Essential verbs ⚡",
  10:"Politeness 🎩", 11:"Daily life in France 🇫🇷", 12:"My Routine 🌅",
  13:"My Emotions ❤️", 14:"My Needs 🍽️", 15:"My House 🏡",
  16:"My Family 👨‍👩‍👧", 17:"My Plans 📅", 18:"My Health 💊",
  19:"My Cooking 🍳", 20:"Living French 🗣️"
}

gameState = {
  currentPlayer: null, currentLevel: 1, currentMode: "mixte",
  questions: [], currentQuestionIndex: 0, score: 0,
  answers: [], selectedOption: null,
  questionDirection: "en-first"  // ← NOUVEAU v3.0
}

═══════════════════════════════════════════════════════════════════════
  CORE.JS — OBJETS ET FONCTIONS
══════════════════════════════════════════════════════════════════════TS, favoris)
├── 📄 conversation.html       → Simulateur de dialogues (7 scénarios interactifs)
├── 📁 css/
│   ├── base.css               → Fondation universelle (~90 classes)
│   ├── quiz.css               → Styles quiz uniquement (~35 classes)
│   ├── dashboard.css          → Styles dashboard uniquement (~40 classes)
│   ├── vocabulary.css         → Styles vocabulaire uniquement (~10 classes)
│   ├── emergency.css          → Styles SOS uniquement (~28 classes)
│   └── conversation.css       → Styles conversation uniquement (~47 classes)
└── 📁 js/
    ├── config.js              → Configuration globale
    ├── core.js                → Moteur central (storage, joueurs, i18n, thème)
    ├── ui-utils.js            → Utilitaires UI (toast, popup, export)
    ├── data.js                → Données leçons + questions (20 niveaux)
    ├── vocabulary-data.js     → Base de données lexicale (818 mots)
    ├── vocabulary-engine.js   → Moteur de surlignement lexique
    ├── vocabulary.js          → Logique page lexique (init + filtres)
    ├── game-engine.js         → Cœur du jeu (questions, score, résultats)
    ├── quiz.js                → Routing et affichage quiz
    ├── dashboard.js           → Rendu dashboard
    ├── phrase-data.js         → Données jeu Phrase Builder
    ├── audio-data.js          → Données jeu Listen & Repeat
    ├── conversation.js        → Logique simulateur de dialogues
    ├── conversation-data.js   → Scénarios de conversation (7 scénarios)
    ├── emergency.js           → Logique mode SOS
    ├── emergency-data.js      → Phrases d'urgence (10 catégories)
    ├── life-skills-data.js    → Compétences de vie + scoring
    └── players.js             → Gestion des profils joueurs (bridge)

🗑️ FICHIERS SUPPRIMÉS v3.0 :
   • styles.css (obsolète, doublons base.css + quiz.css)
   • lexique-engine.js (doublon vocabulary-engine.js)

═══════════════════════════════════════════════════════════════════════
  ARCHITECTURE CSS v3.0 — RÈGLE D'OR
═══════════════════════════════════════════════════════════════════════

Si une classe est utilisée par 2+ pages → base.css
Si une classe est utilisée par 1 page seule → [page].css

┌─────────────┬────────────────────────────────────────────────────────┐
│ Fichier     │ Contenu                                                │
├─────────────┼────────────────────────────────────────────────────────┤
│ base.css    │ Variables, reset, nav-top/bottom, hero, bento,       │
│ (~90)       │ boutons, inputs, sections, cartes, feedback, barres, │
│             │ cercle score, modal, toast, popup vocab, settings,    │
│             │ utilitaires, keyframes communs                         │
├─────────────┼────────────────────────────────────────────────────────┤
│ quiz.css    │ Mode selector, leçons collapsibles, grille niveaux,   │
│ (~35)       │ zone jeu QCM/input, résultats                          │
├─────────────┼────────────────────────────────────────────────────────┤
│ dashboard.css│ Journey map, badges, caméléon, historique, génie,    │
│ (~40)       │ life skills                                            │
├─────────────┼────────────────────────────────────────────────────────┤
│ vocabulary.css│ Toolbar sticky, grille cartes, carte mot              │
│ (~10)       │                                                        │
├─────────────┼────────────────────────────────────────────────────────┤
│ emergency.css│ Hero rouge, catégories, phrases, TTS/favoris/copie   │
│ (~28)       │                                                        │
├─────────────┼────────────────────────────────────────────────────────┤
│ conversation.css│ Hero violet, scénarios, chat, choix, résultats     │
│ (~47)       │                                                        │
└─────────────┴────────────────────────────────────────────────────────┘

CLASSES RENOMMÉES v3.0 :
   .result-circle  → .score-circle
   .result-pct     → .score-pct
   .progress-track → .bar-track
   .progress-fill  → .bar-fill

NOUVELLES CLASSES v3.0 :
   .direction-btn, .direction-btn.active (boutons direction EN↔FR)

═══════════════════════════════════════════════════════════════════════
  BOUTON SETTINGS (⚙️) — UNIVERSEL v3.0
═══════════════════════════════════════════════════════════════════════

Présent sur TOUTES les pages (dans le hero) :
   • quiz.html         ✅ Bouton ⚙️ + panel settings
   • dashboard.html    ✅ Bouton ⚙️ + panel settings
   • vocabulary.html   ✅ Bouton ⚙️ + panel settings
   • emergency.html    ✅ Bouton ⚙️ + panel settings
   • conversation.html ✅ Bouton ⚙️ + panel settings

Panel settings contient (3 lignes) :
   1. Theme     : 🌑 Ardoise | 🟣 Mauve | 🟤 Terra
   2. Interface : 🇬🇧 EN | 🇫🇷 FR
   3. Direction : 🇬🇧→🇫🇷 EN First | 🇫🇷→🇬🇧 FR First | 🔄 Mixed

Fonctions inline requises dans chaque HTML :
   toggleSettings()        → ouvre/ferme #settingsPanel
   applyThemePick(theme)   → data-theme + localStorage
   applyLangPick(lang)     → localStorage
   applyDirectionPick(dir) → gameState + localStorage + maj visuelle

═══════════════════════════════════════════════════════════════════════
  NAVIGATION — DOUBLE BARRE (v2.0/v3.0 inchangé)
═══════════════════════════════════════════════════════════════════════

Barre du HAUT (.nav-top) — Pages annexes
   🚨 SOS      → emergency.html
   💬 Talk     → conversation.html
   🎧 Listen   → games/listen.html
   🧩 Phrase   → games/phrase-builder.html
   ⚙️ Config   → dashboard.html

Barre du BAS (.nav-bottom) — Navigation principale
   🏠 Start      → quiz.html
   📚 Lessons     → quiz.html?section=lecons
   🎮 Play        → quiz.html?section=levels
   📖 Vocab       → vocabulary.html
   📊 Dashboard   → dashboard.html

═══════════════════════════════════════════════════════════════════════
  ORDRES DE CHARGEMENT PAR PAGE
═══════════════════════════════════════════════════════════════════════

quiz.html :
   CSS : base.css → quiz.css
   JS  : config.js → data.js → vocabulary-data.js → vocabulary-engine.js
         → core.js → ui-utils.js → game-engine.js → quiz.js

dashboard.html :
   CSS : base.css → dashboard.css
   JS  : config.js → data.js → vocabulary-data.js → vocabulary-engine.js
         → emergency-data.js → conversation-data.js → life-skills-data.js
         → core.js → ui-utils.js → dashboard.js

vocabulary.html :
   CSS : base.css → vocabulary.css
   JS  : config.js → data.js → vocabulary-data.js → vocabulary-engine.js
         → core.js → ui-utils.js → vocabulary.js

emergency.html :
   CSS : base.css → emergency.css
   JS  : config.js → data.js → emergency-data.js → core.js → ui-utils.js
         → emergency.js

conversation.html :
   CSS : base.css → conversation.css
   JS  : config.js → data.js → conversation-data.js → core.js → ui-utils.js
         → conversation.js

═══════════════════════════════════════════════════════════════════════
  CONFIG.JS — DONNÉES EXPORTÉES
═══════════════════════════════════════════════════════════════════════

SUBJECT_CONFIG = {
  name: "Daily French", emoji: "🥖", lang: "fr",
  interfaceLang: "en", storageKey: "dailyFrench_v1",
  playersKey: "dailyFrench_players", maxLevel: 20
}

FEATURES = {
  voice: { enabled:true, tts:true, stt:true,
           pronunciationCheck:true, serialMode:false },
  pictures: { enabled:true, lazyLoad:true },
  offline: { serviceWorker:false }
}

LEVEL_NAMES = {
  1:"Greetings 🙋", 2:"At the market 🛒", 3:"In the garden 🌿",
  4:"Neighbours 🏘️", 5:"Tastes & desires ❤️", 6:"At the shops 🏬",
  7:"Friends & going out 👫", 8:"Weather 🌤️", 9:"Essential verbs ⚡",
  10:"Politeness 🎩", 11:"Daily life in France 🇫🇷", 12:"My Routine 🌅",
  13:"My Emotions ❤️", 14:"My Needs 🍽️", 15:"My House 🏡",
  16:"My Family 👨‍👩‍👧", 17:"My Plans 📅", 18:"My Health 💊",
  19:"My Cooking 🍳", 20:"Living French 🗣️"
}

gameState = {
  currentPlayer: null, currentLevel: 1, currentMode: "mixte",
  questions: [], currentQuestionIndex: 0, score: 0,
  answers: [], selectedOption: null,
  questionDirection: "en-first"  // ← NOUVEAU v3.0
}

═══════════════════════════════════════════════════════════════════════
  CORE.JS — OBJETS ET FONCTIONS
═══════════════════════════════════════════════════════════════════════

Storage         → isAvailable, get, set, remove, handleQuotaExceeded,
                  getUsage, exportAll, importAll
PlayerManager   → defaultPlayer, getAll, saveAll, validateName, create,
                  load, save, delete, setCurrent, getCurrent, autoDetect,
                  migrate
I18n            → current, detect, init, set, t, formatDate, formatPercent
Theme           → apply, load, toggle (ardoise/mauve/terra)
Modal           → open, close, trapFocus, handleEscape
Toast           → show (alias global: toast(msg, duration))
Router          → goTo, getParams, buildUrl
EventBus        → on, off, emit (events: "playerLoaded", "coreReady")
Analytics       → enabled, setEnabled, isEnabled, track

Fonctions UI :
  fillSelect(active), renderHero(p), renderBento(p), loadPlayer(name),
  doExport(), doImport(ev), initCore(), toggleSettings(),
  applyThemePick(name), applyLangPick(lang)

Bridge compatibilité :
  gP(), sP(), getPlayers(), savePlayers(), getPlayerData(), switchPlayer(),
  showNewPlayerModal(), closeNewPlayerModal(), confirmNewPlayer(),
  deleteCurrentPlayer(), updatePlayerDisplay(), doCreate(), openModal(),
  closeModal(), applyTheme(), loadTheme(), goToQuiz(), goToDashboard(),
  goToVocabulary()

═══════════════════════════════════════════════════════════════════════
  FICHIERS JS — DÉTAIL PAR MODULE
═══════════════════════════════════════════════════════════════════════

ui-utils.js (7 fonctions + _esc)
   showToast(msg), goToVocabulary(), goToDashboard(),
   exportSave(), importSave(event),
   openVocabPopup(fr), closeVocabPopup(e),
   toggleLessonEx(btn, ev), _esc(s)

game-engine.js (20 fonctions)
   showSection(id), renderLevels(), startLevel(levelNum),
   showLessonIntro(levelNum), startQuestions(), shuffle(a),
   renderQuestion(), selectOption(btn, idx), validateAnswer(),
   showFeedback(isCorrect, q), trackError(q, userAnswer),
   saveActiveSession(), nextQuestion(), showResults(),
   retryLevel(), startNextLevel(), quitGame(),
   playQuestionAudio(), startSpeechCheck(), slugify(str)

quiz.js (4 fonctions)
   handleRoute(), renderLessons(), toggleLesson(num), selectMode(mode)

dashboard.js (9 fonctions)
   initDashboard(), updateDashboard(), renderJourneyMap(p),
   renderBadges(p), renderCameleon(p), renderHistory(p),
   renderGenius(), renderLifeSkills(p)

vocabulary-engine.js (5 fonctions)
   highlightVocabularyWords(rootElement), renderVocabularyList(container, filters),
   getVocabCategories(), getVocabLevels(), _esc(s)

vocabulary.js (3 fonctions)
   initVocabulary(), populateFilters(), attachListeners()

conversation.js (17 fonctions)
   initConversation(), renderScenarioList(), startScenario(scen),
   renderSetting(), renderStep(), handleChoice(choiceIndex),
   showFeedback(chosen), showResults(), saveConversationProgress(score),
   showView(view), exitConversation(), restartScenario(),
   setupTTS(), speakFrench(text), getCategoryColor(cat),
   scrollToBottom(el), escapeHtml(str)

emergency.js (20 fonctions)
   initSOS(), loadSOSFavorites(), saveSOSFavorites(),
   isSOSFavorite(phraseId), toggleSOSFavorite(phraseId, phraseData),
   updateFavButton(btn, phraseId), updateFavCount(),
   renderCategories(), showPhrases(cat), showCategories(),
   renderPhrasesList(phrases, containerId), setupSearch(),
   doSearch(query), setupTTS(), loadFrenchVoice(),
   speakFrench(text), copyToClipboard(text, btn),
   fallbackCopy(text, btn), escapeHtml(str), slugifySOS(str)

life-skills-data.js (3 fonctions)
   calculateSkillScore(skill, player), renderStars(score),
   getSkillLevelLabel(score)

═══════════════════════════════════════════════════════════════════════
  STRUCTURES DE DONNÉES
═══════════════════════════════════════════════════════════════════════

VOCABULARY_BDD    → 818 entrées, 30 catégories, niveaux 1-21
EMERGENCY_CATEGORIES → 10 catégories × 15 phrases = 150 phrases
CONVERSATION_SCENARIOS → 7 scénarios interactifs
PHRASE_BLOCKS     → 5 blocs de construction de phrases
AUDIO_PHRASES     → 5 niveaux × 5 phrases = 25 phrases
LESSONS_DATA      → 20 leçons
QUESTIONS_DB      → 20 niveaux, ~10 QCM + ~10 libres = ~400 questions
LIFE_SKILLS       → 10 compétences de vie

═══════════════════════════════════════════════════════════════════════
  THÈMES
═══════════════════════════════════════════════════════════════════════

Ardoise (défaut) : primary #4A5568
Mauve              : primary #7C3AED  (data-theme="mauve")
Terra              : primary #9A3412  (data-theme="terra")

═══════════════════════════════════════════════════════════════════════
  CHECKLIST MIGRATION v2.0 → v3.0
═══════════════════════════════════════════════════════════════════════

□ Copier base.css v3.0 (90 classes)
□ Copier quiz.css v3.0 (35 classes)
□ Copier dashboard.css v3.0 (40 classes)
□ Copier vocabulary.css v3.0 (10 classes)
□ Supprimer styles.css
□ Supprimer lexique-engine.js
□ Modifier quiz.html : .result-circle→.score-circle, .progress-track→.bar-track
□ Modifier dashboard.html : .life-skill-bar-track→.bar-track
□ Ajouter bouton ⚙️ + panel settings sur toutes les pages HTML
□ Ajouter applyDirectionPick() sur toutes les pages
□ Tester toutes les pages

═══════════════════════════════════════════════════════════════════════
  FIN CARTOGRAPHIE GÉNÉRALE v3.0
═══════════════════════════════════════════════════════════════════════
