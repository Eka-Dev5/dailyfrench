// ═══════════════════════════════════════════════════════════════════
// vocabulary-data.js — Daily French 🥖 v3.2
// CHARGEMENT DYNAMIQUE des 21 niveaux modulaires
// CORRECTION : setTimeout 50ms → 500ms (mobile lent)
// ═══════════════════════════════════════════════════════════════════

(function() {
  'use strict';

  const BASE_PATH = 'js/vocab-levels/';

  const LEVEL_FILES = [
    'vocab-level-1.js',  'vocab-level-2.js',  'vocab-level-3.js',
    'vocab-level-4.js',  'vocab-level-5.js',  'vocab-level-6.js',
    'vocab-level-7.js',  'vocab-level-8.js',  'vocab-level-9.js',
    'vocab-level-10.js', 'vocab-level-11.js', 'vocab-level-12.js',
    'vocab-level-13.js', 'vocab-level-14.js', 'vocab-level-15.js',
    'vocab-level-16.js', 'vocab-level-17.js', 'vocab-level-18.js',
    'vocab-level-19.js', 'vocab-level-20.js', 'vocab-level-21.js'
  ];

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve(src);
      script.onerror = () => {
        console.error('[vocabulary-data] Échec chargement : ' + src);
        resolve(src);
      };
      document.head.appendChild(script);
    });
  }

  function assembleVocabulary() {
    window.VOCABULARY_BDD = [];
    let totalLoaded = 0;
    let totalEntries = 0;

    for (let i = 1; i <= 21; i++) {
      const levelVar = window['VOCAB_LEVEL_' + i];
      if (Array.isArray(levelVar) && levelVar.length > 0) {
        window.VOCABULARY_BDD = window.VOCABULARY_BDD.concat(levelVar);
        totalLoaded++;
        totalEntries += levelVar.length;
      } else {
        console.warn('[vocabulary-data] VOCAB_LEVEL_' + i + ' manquant ou vide');
      }
    }

    console.log('[vocabulary-data] Assemblage : ' +
                totalLoaded + '/21 niveaux, ' + totalEntries + ' entrées');

    // CORRECTION : EventBus peut ne pas exister encore
    if (typeof EventBus !== 'undefined') {
      EventBus.emit('vocabularyReady', { levels: totalLoaded, count: totalEntries });
    }

    if (totalEntries === 0) {
      console.error('[vocabulary-data] AUCUNE entrée chargée !');
    }
  }

  async function init() {
    if (window.VOCABULARY_BDD && window.VOCABULARY_BDD.length > 0) {
      console.log('[vocabulary-data] Déjà initialisé (' + window.VOCABULARY_BDD.length + ' entrées)');
      return;
    }

    console.log('[vocabulary-data] Chargement des 21 niveaux...');
    await Promise.all(LEVEL_FILES.map(f => loadScript(BASE_PATH + f)));
    // CORRECTION : 50ms → 500ms pour mobile
    setTimeout(assembleVocabulary, 500);
  }

  init();

})();
