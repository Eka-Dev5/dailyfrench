// js/data-loader.js — Charge les 20 lecons depuis lessons/
// VERSION PROPRE : lessonsLoaded event + flag _lessonsReady

let LESSONS_DATA = [];
let QUESTIONS_DB = {};

function loadLessons() {
  if (window._lessonsLoading) return;
  window._lessonsLoading = true;
  
  LESSONS_DATA = [];
  QUESTIONS_DB = {};
  
  const count = (typeof CONFIG !== 'undefined' && CONFIG.LESSONS_COUNT) 
    ? CONFIG.LESSONS_COUNT 
    : 20;
  
  let loaded = 0;
  let errors = 0;
  let pending = count;
  
  function checkComplete() {
    pending--;
    if (pending === 0) {
      window._lessonsReady = true;
      console.log('[DataLoader] All done. Loaded: ' + loaded + ', Errors: ' + errors);
      if (typeof EventBus !== 'undefined') {
        EventBus.emit('lessonsLoaded', { lessons: LESSONS_DATA, count: loaded });
      }
    }
  }
  
  for (let i = 1; i <= count; i++) {
    const numStr = i.toString().padStart(2, '0');
    const script = document.createElement('script');
    script.src = 'js/lessons/lesson-' + numStr + '.js';
    script.async = false;

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
      
      checkComplete();
    };
    
    script.onerror = function() {
      errors++;
      console.error('[DataLoader] Failed to load lesson-' + numStr + '.js');
      if (typeof EventBus !== 'undefined') {
        EventBus.emit('lessonError', { id: i, error: 'File not found' });
      }
      checkComplete();
    };
    
    document.head.appendChild(script);
  }
}

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
