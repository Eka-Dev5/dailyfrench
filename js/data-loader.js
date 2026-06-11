// ═══════════════════════════════════════════════════════════════════
// DATA-LOADER.JS — Daily French 🥖 v1.1
// Charge les 20 leçons depuis lessons/ et construit LESSONS_DATA + QUESTIONS_DB
//
// CORRECTION v1.1 :
//   + Protection si EventBus n'existe pas encore
//   + Protection si initQuiz n'existe pas encore
//   + LESSONS_DATA et QUESTIONS_DB déclarés globalement avant
// ═══════════════════════════════════════════════════════════════════

// Déclarer les variables globales AVANT (pour éviter ReferenceError)
var LESSONS_DATA = [];
var QUESTIONS_DB = {};

const LESSON_FILES = [
  'lessons/greetings-introductions.js',
  'lessons/at-the-market.js',
  'lessons/in-the-garden.js',
  'lessons/neighbours-community.js',
  'lessons/tastes-desires.js',
  'lessons/at-the-shops.js',
  'lessons/friends-going-out.js',
  'lessons/weather.js',
  'lessons/essential-verbs.js',
  'lessons/politeness.js',
  'lessons/daily-life-in-france.js',
  'lessons/my-routine.js',
  'lessons/my-emotions.js',
  'lessons/my-needs.js',
  'lessons/my-house.js',
  'lessons/my-family.js',
  'lessons/my-plans.js',
  'lessons/my-health.js',
  'lessons/my-cooking.js',
  'lessons/living-french.js'
];

const LESSON_VARS = [
  'LESSON_01', 'LESSON_02', 'LESSON_03', 'LESSON_04', 'LESSON_05',
  'LESSON_06', 'LESSON_07', 'LESSON_08', 'LESSON_09', 'LESSON_10',
  'LESSON_11', 'LESSON_12', 'LESSON_13', 'LESSON_14', 'LESSON_15',
  'LESSON_16', 'LESSON_17', 'LESSON_18', 'LESSON_19', 'LESSON_20'
];

let lessonsLoaded = 0;
let lessonsTotal = LESSON_FILES.length;
let loadCallback = null;

function loadLessonScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.onload = function() {
    lessonsLoaded++;
    if (typeof toast === 'function') toast('Loaded ' + lessonsLoaded + '/' + lessonsTotal);
    callback();
  };
  script.onerror = function() {
    console.error('[DataLoader] Failed to load:', src);
    lessonsLoaded++;
    callback();
  };
  document.head.appendChild(script);
}

function buildData() {
  LESSONS_DATA = [];
  QUESTIONS_DB = {};

  for (let i = 0; i < LESSON_VARS.length; i++) {
    const varName = LESSON_VARS[i];
    const lessonData = window[varName];

    if (!lessonData) {
      console.warn('[DataLoader] Missing:', varName);
      continue;
    }

    LESSONS_DATA.push({
      num: lessonData.id,
      title: lessonData.title,
      content: lessonData.contentHtml || lessonData.content || ''
    });

    QUESTIONS_DB[lessonData.id] = {
      title: lessonData.title,
      titleFr: lessonData.titleFr,
      objective: lessonData.objectiveEn || lessonData.objective,
      objectiveFr: lessonData.objectiveFr,
      hint: lessonData.hintEn || lessonData.hint,
      hintFr: lessonData.hintFr,
      vocabulary: lessonData.vocabulary || [],
      qcm: lessonData.qcm || [],
      libre: lessonData.libre || []
    };
  }

  console.log('[DataLoader] Lessons:', LESSONS_DATA.length);
  console.log('[DataLoader] Questions:', Object.keys(QUESTIONS_DB).length);

  // Émettre événement SI EventBus existe
  if (typeof EventBus !== 'undefined' && EventBus.emit) {
    EventBus.emit('dataLoaded', { lessons: LESSONS_DATA.length, questions: Object.keys(QUESTIONS_DB).length });
  }

  // Appeler le callback si défini
  if (typeof loadCallback === 'function') {
    loadCallback();
  }

  // Initialiser le quiz SI présent
  if (typeof initQuiz === 'function') {
    initQuiz();
  }
}

function loadAllLessons(callback) {
  loadCallback = callback;
  let index = 0;

  function next() {
    if (index >= LESSON_FILES.length) {
      buildData();
      return;
    }
    loadLessonScript(LESSON_FILES[index], next);
    index++;
  }

  next();
}

// Chargement automatique au démarrage SI DOM prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() { loadAllLessons(); });
} else {
  loadAllLessons();
}
