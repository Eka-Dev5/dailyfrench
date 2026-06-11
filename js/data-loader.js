// ═══════════════════════════════════════════════════════════════════
// DATA-LOADER.JS — Daily French 🥖 v2.4
// Charge les leçons depuis lessons/lesson-01.js → lesson-20.js
// QUESTIONS_DB est un objet clé = niveau
// ═══════════════════════════════════════════════════════════════════

var LESSONS_DATA = [];
var QUESTIONS_DB = {};
const MAX_LESSON = 20;

function pad2(n) {
  return n < 10 ? '0' + n : String(n);
}

function lessonFile(n) {
  return './lessons/lesson-' + pad2(n) + '.js';
}

function lessonVar(n) {
  return 'LESSON_' + pad2(n);
}

function loadScript(src) {
  return new Promise(function(resolve) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = function() {
      console.log('[DataLoader] Loaded:', src);
      resolve(true);
    };
    script.onerror = function() {
      console.warn('[DataLoader] Failed:', src);
      resolve(false);
    };
    document.head.appendChild(script);
  });
}

function buildData() {
  LESSONS_DATA = [];
  QUESTIONS_DB = {};

  for (let i = 1; i <= MAX_LESSON; i++) {
    const varName = lessonVar(i);
    const lesson = window[varName];

    if (!lesson) {
      console.warn('[DataLoader] Missing lesson variable:', varName);
      continue;
    }

    LESSONS_DATA.push({
      num: lesson.id,
      id: lesson.id,
      title: lesson.title,
      titleFr: lesson.titleFr,
      content: lesson.contentHtml || lesson.content || '',
      objective: lesson.objectiveEn || lesson.objective || '',
      objectiveFr: lesson.objectiveFr || '',
      hint: lesson.hintEn || lesson.hint || '',
      hintFr: lesson.hintFr || '',
      vocabulary: lesson.vocabulary || [],
      level: lesson.id
    });

    QUESTIONS_DB[lesson.id] = {
      level: lesson.id,
      id: lesson.id,
      title: lesson.title,
      titleFr: lesson.titleFr,
      objective: lesson.objectiveEn || lesson.objective || '',
      objectiveFr: lesson.objectiveFr || '',
      hint: lesson.hintEn || lesson.hint || '',
      hintFr: lesson.hintFr || '',
      vocabulary: lesson.vocabulary || [],
      qcm: lesson.qcm || [],
      libre: lesson.libre || [],
      questions: [].concat(lesson.qcm || [], lesson.libre || [])
    };

    console.log('[DataLoader] OK:', varName, '→', lesson.id, lesson.title);
  }

  window.LESSONS_DATA = LESSONS_DATA;
  window.QUESTIONS_DB = QUESTIONS_DB;

  console.log('[DataLoader] Lessons loaded:', LESSONS_DATA.length);
  console.log('[DataLoader] Question sets loaded:', Object.keys(QUESTIONS_DB).length);

  if (typeof EventBus !== 'undefined' && EventBus.emit) {
    EventBus.emit('dataLoaded', {
      lessons: LESSONS_DATA,
      questions: QUESTIONS_DB
    });
  }

  if (typeof initQuiz === 'function') {
    initQuiz();
  }
  if (typeof initDashboard === 'function') {
    initDashboard();
  }
}

async function loadAllLessons() {
  console.log('[DataLoader] Starting load 01 →', pad2(MAX_LESSON));
  for (let i = 1; i <= MAX_LESSON; i++) {
    const file = lessonFile(i);
    const ok = await loadScript(file);
    if (!ok) {
      console.warn('[DataLoader] Skipping missing file:', file);
    }
  }
  setTimeout(buildData, 300);
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllLessons);
  } else {
    loadAllLessons();
  }
}

if (typeof window !== 'undefined') {
  window.LESSONS_DATA = LESSONS_DATA;
  window.QUESTIONS_DB = QUESTIONS_DB;
  window.getLessons = function() {
    return LESSONS_DATA;
  };
  window.getQuestionsForLevel = function(level) {
    return QUESTIONS_DB[level] || null;
  };
}
