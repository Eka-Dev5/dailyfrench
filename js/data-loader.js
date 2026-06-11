// js/data-loader.js -- Charge les 20 lecons depuis lessons/ (fichiers lesson-01.js a lesson-20.js)

let LESSONS_DATA = [];
let QUESTIONS_DB = {};

function loadLessons() {
  LESSONS_DATA = [];
  QUESTIONS_DB = {};
  
  const count = (typeof CONFIG !== 'undefined' && CONFIG.LESSONS_COUNT) 
    ? CONFIG.LESSONS_COUNT 
    : ((typeof SUBJECT_CONFIG !== 'undefined' && SUBJECT_CONFIG.maxLevel) 
      ? SUBJECT_CONFIG.maxLevel 
      : 20);
  
  console.log('[DataLoader] Loading ' + count + ' lessons...');
  
  let loaded = 0;
  let errors = 0;
  
  for (let i = 1; i <= count; i++) {
    const numStr = i.toString().padStart(2, '0');
    const script = document.createElement('script');
    script.src = 'lessons/lesson-' + numStr + '.js';
    
    script.onload = function() {
      const lessonVar = 'LESSON_' + numStr;
      
      if (typeof window[lessonVar] !== 'undefined') {
        const lesson = window[lessonVar];
        
        // Normaliser l'ID
        if (typeof lesson.id === 'number') {
          lesson.id = 'lesson' + lesson.id;
        }
        
        LESSONS_DATA.push(lesson);
        
        // Construire QUESTIONS_DB (qcm + libre)
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
        console.error('[DataLoader] Variable ' + lessonVar + ' not found in lesson-' + numStr + '.js');
        if (typeof EventBus !== 'undefined') {
          EventBus.emit('lessonError', { id: i, error: 'Variable not found' });
        }
      }
      
      // Si tout est charge, emettre l'evenement
      if (loaded + errors === count) {
        console.log('[DataLoader] All lessons processed. Loaded: ' + loaded + ', Errors: ' + errors);
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
        console.log('[DataLoader] All lessons processed. Loaded: ' + loaded + ', Errors: ' + errors);
        if (typeof EventBus !== 'undefined') {
          EventBus.emit('lessonsLoaded', { lessons: LESSONS_DATA, count: loaded });
        }
      }
    };
    
    document.head.appendChild(script);
  }
}

// Lancer quand core.js est pret
if (typeof EventBus !== 'undefined') {
  EventBus.on('coreReady', function(data) {
    console.log('[DataLoader] coreReady received, starting load...');
    loadLessons();
  });
} else {
  // Fallback : attendre que EventBus soit defini
  console.log('[DataLoader] Waiting for EventBus...');
  var checkInterval = setInterval(function() {
    if (typeof EventBus !== 'undefined') {
      clearInterval(checkInterval);
      console.log('[DataLoader] EventBus found, registering...');
      EventBus.on('coreReady', function(data) {
        console.log('[DataLoader] coreReady received, starting load...');
        loadLessons();
      });
    }
  }, 50);
  
  // Fallback ultime : charger apres 3 secondes quand meme
  setTimeout(function() {
    clearInterval(checkInterval);
    if (LESSONS_DATA.length === 0) {
      console.log('[DataLoader] Fallback: loading lessons now...');
      loadLessons();
    }
  }, 3000);
}
