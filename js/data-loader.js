// ═══════════════════════════════════════════════════════════════════
// DATA-LOADER.JS — Daily French 🥖 v1.2
// Charge les 20 leçons depuis lessons/ (NOMS CORRIGÉS)
//
// CORRECTION v2.3 Karo validation :
//   ✅ NOMS des fichiers = lesson-*.js (comme tes fichiers réels)
//   ✅ Charge LESSON_CONFIG (pas LESSON_01)
//   ✅ Construit LESSONS_DATA + QUESTIONS_DB automatiquement
// ═══════════════════════════════════════════════════════════════════

// Variables globales
var LESSONS_DATA = [];
var QUESTIONS_DB = [];

// ✅ NOMS CORRECTS (exactement comme tes fichiers)
const LESSON_FILES = [
  'lessons/lesson-greetings-introduction.js',
  'lessons/lesson-at-the-market.js',
  'lessons/lesson-in-the-garden.js',
  'lessons/lesson-neighbours-community.js',
  'lessons/lesson-tastes-desires.js',
  'lessons/lesson-at-the-shops.js',
  'lessons/lesson-friends-going-out.js',
  'lessons/lesson-weather.js',
  'lessons/lesson-essential-verbs.js',
  'lessons/lesson-politeness.js',
  'lessons/lesson-daily-life-in-france.js',
  'lessons/lesson-my-routine.js',
  'lessons/lesson-my-emotions.js',
  'lessons/lesson-my-needs.js',
  'lessons/lesson-my-house.js',
  'lessons/lesson-my-family.js',
  'lessons/lesson-my-plans.js',
  'lessons/lesson-my-health.js',
  'lessons/lesson-my-cooking.js',
  'lessons/lesson-living-french.js'
];

let loadedCount = 0;
const totalLessons = LESSON_FILES.length;

// ─── CHARGE UN FICHIER LESSON ─────────────────────────────────────
async function loadLessonFile(filename) {
  try {
    const response = await fetch(filename);
    
    if (!response.ok) {
      console.warn('[DataLoader] Not found:', filename);
      return null;
    }
    
    const text = await response.text();
    
    // Évalue le code → crée LESSON_CONFIG
    const func = new Function(text + '; return LESSON_CONFIG;');
    const config = func();
    
    if (!config) {
      console.error('[DataLoader] No LESSON_CONFIG in:', filename);
      return null;
    }
    
    console.log('[DataLoader] ✅', filename, '→', config.id);
    return config;
  } catch (error) {
    console.error('[DataLoader] Error:', filename, error);
    return null;
  }
}

// ─── CHARGE TOUTES LES LESSONS ────────────────────────────────────
async function loadAllLessons() {
  console.log('[DataLoader] Loading', totalLessons, 'lessons...');
  
  LESSONS_DATA = [];
  QUESTIONS_DB = [];
  
  for (const filename of LESSON_FILES) {
    const lesson = await loadLessonFile(filename);
    
    if (lesson) {
      LESSONS_DATA.push(lesson);
      
      // Ajoute questions au DB
      if (lesson.questions && lesson.questions.length > 0) {
        QUESTIONS_DB.push({
          level: lesson.level,
          id: lesson.id,
          title: lesson.title,
          questions: lesson.questions
        });
      }
    }
  }
  
  console.log('[DataLoader] ✅ Loaded', LESSONS_DATA.length, 'lessons');
  console.log('[DataLoader] ✅ Total questions:', QUESTIONS_DB.reduce((s, l) => s + l.questions.length, 0));
  
  // EventBus si disponible
  if (typeof EventBus !== 'undefined' && EventBus.emit) {
    EventBus.emit('dataLoaded', {
      lessons: LESSONS_DATA,
      questions: QUESTIONS_DB
    });
  }
  
  // initQuiz si disponible
  if (typeof initQuiz === 'function') {
    initQuiz();
  }
}

// ─── INIT AUTO ────────────────────────────────────────────────────
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllLessons);
  } else {
    loadAllLessons();
  }
}

// Export global
if (typeof window !== 'undefined') {
  window.LESSONS_DATA = LESSONS_DATA;
  window.QUESTIONS_DB = QUESTIONS_DB;
  window.getLessons = () => LESSONS_DATA;
  window.getQuestionsForLevel = (level) => 
    QUESTIONS_DB.filter(l => l.level === level);
}
