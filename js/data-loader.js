// ═══════════════════════════════════════════════════════════════════
// DATA-LOADER.JS — Daily French 🥖 v2.5 (avec safety net)
// Charge les leçons depuis lessons/lesson-01.js → lesson-20.js
// QUESTIONS_DB est un objet clé = niveau
// ═══════════════════════════════════════════════════════════════════

var LESSONS_DATA = [];
var QUESTIONS_DB = {};
const MAX_LESSON = 20;
var BROKEN_LESSONS = [];  // ← NOUVEAU : liste des leçons cassées

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
    
    // Gestion erreur de chargement (fichier inexistant)
    script.onerror = function() {
      console.warn('[DataLoader] Failed to load:', src);
      resolve(false);
    };
    
    // Gestion erreur de syntaxe dans le script
    script.onerror = function(e) {
      console.warn('[DataLoader] Failed:', src, e);
      resolve(false);
    };
    
    // Quand le script se charge correctement
    script.onload = function() {
      console.log('[DataLoader] Loaded:', src);
      resolve(true);
    };
    
    document.head.appendChild(script);
  });
}

function buildData() {
  LESSONS_DATA = [];
  QUESTIONS_DB = {};
  BROKEN_LESSONS = [];

  for (let i = 1; i <= MAX_LESSON; i++) {
    const varName = lessonVar(i);
    
    // 🔒 SAFETY NET : vérifier que la variable existe et est un objet valide
    let lesson = null;
    try {
      lesson = window[varName];
      if (!lesson || typeof lesson !== 'object') {
        throw new Error('Variable ' + varName + ' is not a valid object');
      }
      // Vérifier les champs obligatoires
      if (!lesson.id || !lesson.title) {
        throw new Error('Variable ' + varName + ' missing required fields (id, title)');
      }
    } catch (e) {
      console.error('[DataLoader] BROKEN lesson:', varName, '-', e.message);
      BROKEN_LESSONS.push({
        level: i,
        varName: varName,
        error: e.message
      });
      continue;  // ← SAUTER cette leçon, continuer avec les autres
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
  window.BROKEN_LESSONS = BROKEN_LESSONS;  // ← exposer pour l'UI

  console.log('[DataLoader] Lessons loaded:', LESSONS_DATA.length, '/', MAX_LESSON);
  console.log('[DataLoader] Question sets loaded:', Object.keys(QUESTIONS_DB).length);
  
  if (BROKEN_LESSONS.length > 0) {
    console.error('[DataLoader] BROKEN lessons count:', BROKEN_LESSONS.length);
    console.error('[DataLoader] Broken:', BROKEN_LESSONS.map(function(b) { 
      return 'Level ' + b.level + ' (' + b.varName + '): ' + b.error; 
    }).join(' | '));
  }

  // Émettre l'événement même si certaines leçons sont cassées
  if (typeof EventBus !== 'undefined' && EventBus.emit) {
    EventBus.emit('dataLoaded', {
      lessons: LESSONS_DATA,
      questions: QUESTIONS_DB,
      broken: BROKEN_LESSONS,
      totalExpected: MAX_LESSON,
      totalLoaded: LESSONS_DATA.length
    });
  }

  // Initialiser le quiz/dashboard seulement si on a au moins une leçon
  if (LESSONS_DATA.length > 0) {
    if (typeof initQuiz === 'function') {
      initQuiz();
    }
    if (typeof initDashboard === 'function') {
      initDashboard();
    }
  } else {
    console.error('[DataLoader] CRITICAL: No lessons loaded at all!');
    // Afficher un message à l'utilisateur
    showLoadError('No lessons could be loaded. Please check your lesson files.');
  }
  
  // Afficher un toast si des leçons sont cassées
  if (BROKEN_LESSONS.length > 0 && typeof toast === 'function') {
    toast('⚠️ ' + BROKEN_LESSONS.length + ' lesson(s) could not load. Check console for details.');
  }
}

// Fonction pour afficher une erreur visible
function showLoadError(msg) {
  const container = document.getElementById('lessonsContainer') || document.getElementById('levelsContainer') || document.body;
  const div = document.createElement('div');
  div.style.cssText = 'background:#fee2e2;color:#991b1b;padding:16px;margin:16px;border-radius:8px;font-family:sans-serif;';
  div.innerHTML = '<strong>⚠️ Loading Error</strong><br>' + msg + '<br><small>Check the browser console (F12) for technical details.</small>';
  container.insertBefore(div, container.firstChild);
}

async function loadAllLessons() {
  console.log('[DataLoader] Starting load 01 →', pad2(MAX_LESSON));
  for (let i = 1; i <= MAX_LESSON; i++) {
    const file = lessonFile(i);
    const ok = await loadScript(file);
    if (!ok) {
      console.warn('[DataLoader] Skipping missing/broken file:', file);
      // Marquer comme cassé même si le fichier n'existe pas
      BROKEN_LESSONS.push({
        level: i,
        varName: lessonVar(i),
        error: 'File failed to load: ' + file
      });
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
  window.BROKEN_LESSONS = BROKEN_LESSONS;
  window.getLessons = function() {
    return LESSONS_DATA;
  };
  window.getQuestionsForLevel = function(level) {
    return QUESTIONS_DB[level] || null;
  };
  window.getBrokenLessons = function() {
    return BROKEN_LESSONS;
  };
}
