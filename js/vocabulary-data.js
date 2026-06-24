// ═══════════════════════════════════════════════════════════════════
// vocabulary-data.js — Daily French 🥖 v3.3
// CHARGEMENT PARALLÈLE des 21 niveaux modulaires
// CORRECTION : Promise.all pour vitesse + robustesse
// ═══════════════════════════════════════════════════════════════════

(function() {
  'use strict';

  const BASE_PATH = 'js/vocab-levels/';

  const LEVEL_FILES = [
    'vocab-level-01.js',  'vocab-level-02.js',  'vocab-level-03.js',
    'vocab-level-04.js',  'vocab-level-05.js',  'vocab-level-06.js',
    'vocab-level-07.js',  'vocab-level-08.js',  'vocab-level-09.js',
    'vocab-level-10.js', 'vocab-level-11.js', 'vocab-level-12.js',
    'vocab-level-13.js', 'vocab-level-14.js', 'vocab-level-15.js',
    'vocab-level-16.js', 'vocab-level-17.js', 'vocab-level-18.js',
    'vocab-level-19.js', 'vocab-level-20.js', 'vocab-level-21.js'
  ];

  // ─── CHARGEMENT PARALLÈLE ─────────────────────────────────────────
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(src);
      script.onerror = () => {
        console.error('[vocabulary-data] Échec chargement : ' + src);
        reject(src);
      };
      document.head.appendChild(script);
    });
  }

  // ─── ASSEMBLAGE ────────────────────────────────────────────────────
  function assembleVocabulary() {
    window.VOCABULARY_BDD = [];
    let totalLoaded = 0;
    let totalEntries = 0;
    let missingLevels = [];

    for (let i = 1; i <= 21; i++) {
      const levelKey = 'VOCAB_LEVEL_' + (i < 10 ? '0' + i : i);
      const levelVar = window[levelKey];
      if (Array.isArray(levelVar) && levelVar.length > 0) {
        window.VOCABULARY_BDD = window.VOCABULARY_BDD.concat(levelVar);
        totalLoaded++;
        totalEntries += levelVar.length;
      } else {
        missingLevels.push(i);
        console.warn('[vocabulary-data] ' + levelKey + ' manquant ou vide');
      }
    }

    console.log('[vocabulary-data] Assemblage terminé : ' +
                totalLoaded + '/21 niveaux, ' + totalEntries + ' entrées');

    if (missingLevels.length > 0) {
      console.warn('[vocabulary-data] Niveaux manquants : ' + missingLevels.join(', '));
    }

    if (typeof EventBus !== 'undefined') {
      EventBus.emit('vocabularyReady', {
        levels: totalLoaded,
        count: totalEntries,
        missing: missingLevels
      });
    }

    if (totalEntries === 0) {
      console.error('[vocabulary-data] AUCUNE entrée chargée !');
    }
  }

  // ─── INITIALISATION ───────────────────────────────────────────────
  async function init() {
    if (window.VOCABULARY_BDD && window.VOCABULARY_BDD.length > 0) {
      console.log('[vocabulary-data] Déjà initialisé (' + window.VOCABULARY_BDD.length + ' entrées)');
      return;
    }

    console.log('[vocabulary-data] Chargement parallèle des 21 niveaux...');

    try {
      // Chargement PARALLÈLE : tous en même temps, plus rapide
      await Promise.all(LEVEL_FILES.map(file => loadScript(BASE_PATH + file)));
      assembleVocabulary();
    } catch (err) {
      console.error('[vocabulary-data] Erreur chargement:', err);
      assembleVocabulary();
    }
  }

  init();

})();
