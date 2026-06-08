// ═══════════════════════════════════════════════════════════════════
// vocabulary-data.js — Daily French 🥖
// CHARGEMENT DYNAMIQUE des niveaux modulaires
// ═══════════════════════════════════════════════════════════════════
//
// Aucun changement nécessaire dans les fichiers HTML.
// Ce fichier charge dynamiquement les 21 fichiers niveau,
// puis assemble VOCABULARY_BDD.
//
// Structure attendue :
//   js/vocab-levels/vocab-level-1.js  → const VOCAB_LEVEL_1
//   js/vocab-levels/vocab-level-2.js  → const VOCAB_LEVEL_2
//   ...
//   js/vocab-levels/vocab-level-21.js → const VOCAB_LEVEL_21
//
// ═══════════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // Chemin de base (relatif au HTML qui charge ce fichier)
  const BASE_PATH = 'js/vocab-levels/';

  // Liste des 21 fichiers niveau à charger
  const LEVEL_FILES = [
    'vocab-level-1.js',  'vocab-level-2.js',  'vocab-level-3.js',
    'vocab-level-4.js',  'vocab-level-5.js',  'vocab-level-6.js',
    'vocab-level-7.js',  'vocab-level-8.js',  'vocab-level-9.js',
    'vocab-level-10.js', 'vocab-level-11.js', 'vocab-level-12.js',
    'vocab-level-13.js', 'vocab-level-14.js', 'vocab-level-15.js',
    'vocab-level-16.js', 'vocab-level-17.js', 'vocab-level-18.js',
    'vocab-level-19.js', 'vocab-level-20.js', 'vocab-level-21.js'
  ];

  // Compteur de fichiers chargés
  let loadedCount = 0;
  const totalFiles = LEVEL_FILES.length;

  // Fonction appelée après chaque chargement
  function onLevelLoaded() {
    loadedCount++;
    if (loadedCount === totalFiles) {
      // Tous les fichiers sont chargés → assembler VOCABULARY_BDD
      assembleVocabulary();
    }
  }

  // Assemble toutes les variables VOCAB_LEVEL_X en VOCABULARY_BDD
  function assembleVocabulary() {
    window.VOCABULARY_BDD = [];

    for (let i = 1; i <= 21; i++) {
      const levelVar = window['VOCAB_LEVEL_' + i];
      if (Array.isArray(levelVar)) {
        window.VOCABULARY_BDD = window.VOCABULARY_BDD.concat(levelVar);
      } else {
        console.warn('[vocabulary-data] VOCAB_LEVEL_' + i + ' non trouvé ou vide');
      }
    }

    console.log('[vocabulary-data] VOCABULARY_BDD assemblé : ' +
                window.VOCABULARY_BDD.length + ' entrées');

    // Émettre un événement pour signaler que le vocabulaire est prêt
    if (typeof EventBus !== 'undefined') {
      EventBus.emit('vocabularyReady', { count: window.VOCABULARY_BDD.length });
    }
  }

  // Charger un fichier JS dynamiquement
  function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // Charger dans l'ordre
    script.onload = callback;
    script.onerror = function() {
      console.error('[vocabulary-data] Échec chargement : ' + src);
      callback(); // Continuer même en cas d'erreur
    };
    document.head.appendChild(script);
  }

  // Lancer le chargement de tous les niveaux
  function init() {
    // Vérifier si déjà initialisé
    if (window.VOCABULARY_BDD && window.VOCABULARY_BDD.length > 0) {
      console.log('[vocabulary-data] Déjà initialisé, ' +
                  window.VOCABULARY_BDD.length + ' entrées');
      return;
    }

    console.log('[vocabulary-data] Chargement des ' + totalFiles + ' niveaux...');

    LEVEL_FILES.forEach(function(filename) {
      loadScript(BASE_PATH + filename, onLevelLoaded);
    });
  }

  // Démarrer immédiatement
  init();

})();
