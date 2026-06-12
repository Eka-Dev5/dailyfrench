// js/data-loader.js — Charge les 20 lecons depuis lessons/
// CORRECTION : flag _lessonsLoaded pour éviter double chargement

let LESSONS_DATA = [];
let QUESTIONS_DB = {};

function loadLessons() {
  // FLAG ANTI-DOUBLE APPEL — empêche le chargement 2 fois
  if (window._lessonsLoading) return;
  window._lessonsLoading = true;
  
  LESSONS_DATA = [];
  QUESTIONS_DB = {};
  
  const count = (typeof CONFIG !== 'undefined' && CONFIG.LESSONS_COUNT) 
    ? CONFIG.LESSONS_COUNT 
    : 20;
  
  console.log('[DataLoader] Loading ' + count + ' lessons...');
  
  let loaded = 0;
  let errors = 0;
  
  for (let i = 1; i <= count; i++) {
    const numStr = i.toString().padStart(2, '0');
    const script = document.createElement('script');
    script.src = 'js/lessons/lesson-' + numStr + '.js';
    script.async = false; // ← SÉQUENTIEL

    script.onload = function() {
      const lessonVar = 'LESSON_' + numStr;
      
      if (typeof window[lessonVar] !== 'undefined') {
        const lesson = window[lessonVar];
        
        if (typeof lesson.id === 'number') {
          lesson.id = 'lesson' + lesson.id;
        }
        
        LESSONS_DATA.push(lesson);
        
        if (lesson.qcm && lesson.qcm.length > 0) {
          QUESTIONS_DB[lesson.id] = lesson.qcm;
        }
        if (lesson.libre && lesson.libre.length > 0) {
          QUESTIONS_DB[lesson.id] = QUESTIONS_DB[lesson.id] || [];
          QUESTIONS_DB[lesson.id] = QUESTIONS_DB[lesson.id].concat(lesson.libre);
        }
        
        loaded++;
        console.log('[DataLoader] Loaded lesson-' + numStr + '.js (' + loaded + '/' + count + ')');
        
        if (typeof EventBus !== 'undefined') {
          EventBus.emit('lessonLoaded', { id: lesson.id, lesson: lesson });
        }
      } else {
        errors++;
        console.error('[DataLoader] Variable ' + lessonVar + ' not found');
        if (typeof EventBus !== 'undefined') {
          EventBus.emit('lessonError', { id: i, error: 'Variable not found' });
        }
      }
      
      if (loaded + errors === count) {
        console.log('[DataLoader] All done. Loaded: ' + loaded + ', Errors: ' + errors);
        if (typeof EventBus !== 'undefined') {
          EventBus.emit('lessonsLoaded', { lessons: LESSONS_DATA, count: loaded });
        }
      }
    };
    
    script.onerror = function() {
      errors++;
      console.error('[DataLoader] Failed to load lesson-' + numStr + '.js');
      if (typeof EventBus !== 'undefined') {
        EventBus.emit('lessonError', { id: i, error: 'File not found' });
      }
      
      if (loaded + errors === count) {
        console.log('[DataLoader] All done. Loaded: ' + loaded + ', Errors: ' + errors);
        if (typeof EventBus !== 'undefined') {
          EventBus.emit('lessonsLoaded', { lessons: LESSONS_DATA, count: loaded });
        }
      }
    };
    
    document.head.appendChild(script);
  }
}

// ═══════════════════════════════════════════════════════════════════
// LANCEMENT : écoute coreReady OU lance direct si déjà prêt
// Le flag _lessonsLoading dans loadLessons() empêche le double appel
// ═══════════════════════════════════════════════════════════════════
function tryStart() {
  if (typeof EventBus !== 'undefined') {
    EventBus.on('coreReady', loadLessons);
  }
  
  if (typeof PlayerManager !== 'undefined' && typeof EventBus !== 'undefined') {
    console.log('[DataLoader] core.js already ready — launching directly');
    loadLessons();
  }
}

tryStart();
