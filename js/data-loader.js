// ═══════════════════════════════════════════════════════════════════
// DATA-LOADER.JS — Daily French 🥖 v2.2 Karo validation
// Charge les leçons depuis lessons/lesson-01.js → lesson-20.js
// Boucle numérique évolutive : 01 → MAX_LESSON
// ═══════════════════════════════════════════════════════════════════

var LESSONS_DATA = [];
var QUESTIONS_DB = [];

const MAX_LESSON = 20;

function pad2(n) {
  return n < 10 ? '0' + n : String(n);
}

function lessonFile(n) {
  return 'lessons/lesson-' + pad2(n) + '.js';
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
      console.log('[DataLoader] ✅ Loaded:', src);
      resolve(true);
    };
    script.onerror = function() {
      console.warn('[DataLoader] ❌ Failed:', src);
      resolve(false);
    };
    document.head.appendChild(script);
  });
}

function buildData() {
  LESSONS_DATA = [];
  QUESTIONS_DB = [];

  for (let i = 1; i <= MAX_LESSON; i++) {
    const varName = lessonVar(i);
    const lesson = window[varName];

    if (!lesson) {
      console.warn('[DataLoader] Missing:', varName);
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

    QUESTIONS_DB.push({
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
      questions: [...(lesson.qcm || []), ...(lesson.libre || [])]
    });

    console.log('[DataLoader] ✅', varName, '→', lesson.id, lesson.title);
  }

  console.log('[DataLoader] 📚 Lessons:', LESSONS_DATA.length);
  console.log('[DataLoader] ❓ Questions:', QUESTIONS_DB.reduce(function(sum, l) {
    return sum + l.questions.length;
  }, 0));

  if (typeof window !== 'undefined') {
    window.LESSONS_DATA = LESSONS_DATA;
    window.QUESTIONS_DB = QUESTIONS_DB;
  }

  if (typeof EventBus !== 'undefined' && EventBus.emit) {
    EventBus.emit('dataLoaded', {
      lessons: LESSONS_DATA,
      questions: QUESTIONS_DB
    });
  }

  if (typeof initQuiz === 'function') {
    initQuiz();
  }
}

async function loadAllLessons() {
  console.log('[DataLoader] 🚀 Loading lessons 01 →', pad2(MAX_LESSON));

  for (let i = 1; i <= MAX_LESSON; i++) {
    const ok = await loadScript(lessonFile(i));
    if (!ok) {
      console.warn('[DataLoader] Continuing after missing file:', lessonFile(i));
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
  window.getLessons = function() { return LESSONS_DATA; };
  window.getQuestionsForLevel = function(level) {
    return QUESTIONS_DB.filter(function(l) { return l.level === level; });
  };
}
