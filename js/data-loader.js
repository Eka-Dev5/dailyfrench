// js/data-loader.js — Charge les 20 leçons depuis lessons/ (fichiers .js)

let LESSONS_DATA = [];
let QUESTIONS_DB = {};

// Charger les leçons depuis les fichiers .js
async function loadLessons() {
  LESSONS_DATA = [];
  QUESTIONS_DB = {};
  
  for (let i = 1; i <= CONFIG.LESSONS_COUNT; i++) {
    try {
      // Charger le fichier .js (pas .json !)
      const script = document.createElement('script');
      script.src = `lessons/lesson-${i}.js`;
      
      script.onload = () => {
        // Après le chargement, LESSON_01, LESSON_02, etc. sont définis
        const lessonVar = `LESSON_${i.toString().padStart(2, '0')}`;
        
        if (typeof window[lessonVar] !== 'undefined') {
          const lesson = window[lessonVar];
          
          // Ajuster le format : id doit être une string
          if (typeof lesson.id === 'number') {
            lesson.id = `lesson${lesson.id}`;
          }
          
          LESSONS_DATA.push(lesson);
          
          // Construire QUESTIONS_DB
          if (lesson.qcm && lesson.qcm.length > 0) {
            QUESTIONS_DB[lesson.id] = lesson.qcm;
          }
          if (lesson.libre && lesson.libre.length > 0) {
            QUESTIONS_DB[lesson.id] = QUESTIONS_DB[lesson.id] || [];
            QUESTIONS_DB[lesson.id].push(...lesson.libre);
          }
          
          EventBus.emit('lessonLoaded', { id: lesson.id, lesson });
        } else {
          console.error(`Variable ${lessonVar} not found in lesson-${i}.js`);
          EventBus.emit('lessonError', { id: i, error: 'Variable not found' });
        }
      };
      
      script.onerror = () => {
        console.error(`Failed to load lesson-${i}.js`);
        EventBus.emit('lessonError', { id: i, error: 'File not found' });
      };
      
      document.head.appendChild(script);
      
    } catch (err) {
      console.error(`Failed to load lesson ${i}:`, err);
      EventBus.emit('lessonError', { id: i, error: err });
    }
  }
  
  // Attendre un peu que tous les scripts soient chargés
  setTimeout(() => {
    EventBus.emit('lessonsLoaded', { lessons: LESSONS_DATA });
    console.log(`Loaded ${LESSONS_DATA.length} lessons`);
  }, 1000);
}

// Charger automatiquement après core.js
if (typeof EventBus !== 'undefined') {
  EventBus.on('coreInitialized', loadLessons);
} else {
  // Si EventBus n'est pas encore défini, attendre
  setTimeout(() => {
    if (typeof EventBus !== 'undefined') {
      EventBus.on('coreInitialized', loadLessons);
    }
  }, 100);
}
