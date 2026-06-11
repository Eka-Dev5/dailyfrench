// js/data-loader.js — Charge les 20 leçons depuis lessons/ (fichiers lesson-01.js, lesson-02.js...)

let LESSONS_DATA = [];
let QUESTIONS_DB = {};

async function loadLessons() {
  LESSONS_DATA = [];
  QUESTIONS_DB = {};
  
  for (let i = 1; i <= CONFIG.LESSONS_COUNT; i++) {
    try {
      // Format avec 0 devant : lesson-01.js, lesson-02.js...
      const script = document.createElement('script');
      script.src = `lessons/lesson-${i.toString().padStart(2, '0')}.js`;
      
      script.onload = () => {
        // Variable nommée LESSON_01, LESSON_02, etc.
        const lessonVar = `LESSON_${i.toString().padStart(2, '0')}`;
        
        if (typeof window[lessonVar] !== 'undefined') {
          const lesson = window[lessonVar];
          
          // Ajuster l'ID si c'est un nombre (ex: 1 → "lesson1")
          if (typeof lesson.id === 'number') {
            lesson.id = `lesson${lesson.id}`;
          }
          
          LESSONS_DATA.push(lesson);
          
          // Construire QUESTIONS_DB (qcm + libre)
          if (lesson.qcm && lesson.qcm.length > 0) {
            QUESTIONS_DB[lesson.id] = lesson.qcm;
          }
          if (lesson.libre && lesson.libre.length > 0) {
            QUESTIONS_DB[lesson.id] = QUESTIONS_DB[lesson.id] || [];
            QUESTIONS_DB[lesson.id].push(...lesson.libre);
          }
          
          EventBus.emit('lessonLoaded', { id: lesson.id, lesson });
        } else {
          console.error(`Variable ${lessonVar} not found`);
          EventBus.emit('lessonError', { id: i, error: 'Variable not found' });
        }
      };
      
      script.onerror = () => {
        console.error(`Failed to load lesson-${i.toString().padStart(2, '0')}.js`);
        EventBus.emit('lessonError', { id: i, error: 'File not found' });
      };
      
      document.head.appendChild(script);
      
    } catch (err) {
      console.error(`Error loading lesson ${i}:`, err);
      EventBus.emit('lessonError', { id: i, error: err });
    }
  }
  
  // Attendre que tous les scripts soient chargés
  setTimeout(() => {
    EventBus.emit('lessonsLoaded', { lessons: LESSONS_DATA });
    console.log(`✅ Loaded ${LESSONS_DATA.length} lessons`);
  }, 1500);
}

// Lancer après core.js
if (typeof EventBus !== 'undefined') {
  EventBus.on('coreInitialized', loadLessons);
} else {
  setTimeout(() => {
    if (typeof EventBus !== 'undefined') {
      EventBus.on('coreInitialized', loadLessons);
    }
  }, 100);
}
