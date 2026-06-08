// ═══════════════════════════════════════════════════════════════════
// vocabulary-data.js — Daily French 🥖
// CHARGEMENT DYNAMIQUE des niveaux modulaires v3.0
// ═══════════════════════════════════════════════════════════════════
//
// Ce fichier charge dynamiquement les 21 fichiers niveau,
// puis assemble VOCABULARY_BDD.
//
// Structure attendue :
//   js/vocab-levels/vocab-level-1.js  → const VOCAB_LEVEL_1 = [...]
//   js/vocab-levels/vocab-level-2.js  → const VOCAB_LEVEL_2 = [...]
//   ...
//   js/vocab-levels/vocab-level-21.js → const VOCAB_LEVEL_21 = [...]
//
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

  // ─── CHARGEMENT D'UN SCRIPT (Promise) ─────────────────────────
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve(src);
      script.onerror = () => {
        console.error('[vocabulary-data] Échec chargement : ' + src);
        resolve(src); // Continuer même en cas d'erreur (pas reject)
      };
      document.head.appendChild(script);
    });
  }

  // ─── ASSEMBLAGE FINAL ──────────────────────────────────────────
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

    console.log('[vocabulary-data] Assemblage terminé : ' +
                totalLoaded + '/21 niveaux, ' + totalEntries + ' entrées');

    // Émettre événement de disponibilité
    if (typeof EventBus !== 'undefined') {
      EventBus.emit('vocabularyReady', {
        levels: totalLoaded,
        count: totalEntries
      });
    }

    // Fallback si vide : déclencher un événement d'erreur silencieuse
    if (totalEntries === 0) {
      console.error('[vocabulary-data] AUCUNE entrée chargée ! Vérifiez le dossier js/vocab-levels/');
    }
  }

  // ─── INITIALISATION ────────────────────────────────────────────
  async function init() {
    // Éviter double initialisation
    if (window.VOCABULARY_BDD && window.VOCABULARY_BDD.length > 0) {
      console.log('[vocabulary-data] Déjà initialisé (' + window.VOCABULARY_BDD.length + ' entrées)');
      return;
    }

    console.log('[vocabulary-data] Chargement des 21 niveaux...');

    // Charger tous les fichiers en parallèle (ordre d'exécution garanti par async=false dans les fichiers niveau)
    await Promise.all(LEVEL_FILES.map(f => loadScript(BASE_PATH + f)));

    // Petite pause pour laisser les scripts s'exécuter (définir les const)
    setTimeout(assembleVocabulary, 50);
  }

  // Démarrer
  init();

})();
