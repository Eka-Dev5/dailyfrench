// ═══════════════════════════════════════════════════════════════════
// VOCABULARY.JS — Daily French 🥖 v3.1
// Logique page lexique : init, filtres, écouteurs
// CORRECTION : pas de clignotement, attente propre de VOCABULARY_BDD
// ═══════════════════════════════════════════════════════════════════

function initVocabulary() {
  if (typeof initCore === 'function') initCore();

  const grid = document.getElementById('vocabGrid');
  const countEl = document.getElementById('vocabCount');

  // Si déjà chargé, afficher directement
  if (typeof VOCABULARY_BDD !== 'undefined' && VOCABULARY_BDD.length > 0) {
    doInit();
    return;
  }

  // Sinon attendre l'événement vocabularyReady
  if (typeof EventBus !== 'undefined') {
    EventBus.on('vocabularyReady', function handler() {
      doInit();
      EventBus.off('vocabularyReady', handler);
    });
  }

  // Fallback : timer de sécurité (5 secondes max)
  let retries = 0;
  const timer = setInterval(() => {
    retries++;
    if (typeof VOCABULARY_BDD !== 'undefined' && VOCABULARY_BDD.length > 0) {
      clearInterval(timer);
      doInit();
    } else if (retries > 50) {
      clearInterval(timer);
      if (grid) grid.innerHTML = '<div class="empty-state">⚠️ Vocabulary data failed to load.<br>Check that js/vocab-levels/ folder exists with 21 files.</div>';
      if (countEl) countEl.textContent = 'Error';
    }
  }, 100);

  function doInit() {
    if (!window._vocabInitialized) {
      window._vocabInitialized = true;
      populateFilters();
      if (grid && typeof renderVocabularyList === 'function') {
        renderVocabularyList(grid);
      }
      attachListeners();
      // NE PAS écraser vocabCount ici — renderVocabularyList l'a déjà mis correctement
    }
  }
}

function populateFilters() {
  const levelSel = document.getElementById('vocabFilterLevel');
  const catSel   = document.getElementById('vocabFilterCat');

  if (levelSel && typeof getVocabLevels === 'function') {
    const levels = getVocabLevels();
    levels.forEach(l => {
      const o = document.createElement('option');
      o.value = l;
      o.textContent = 'Level ' + l;
      levelSel.appendChild(o);
    });
  }

  if (catSel && typeof getVocabCategories === 'function') {
    const cats = getVocabCategories();
    cats.forEach(c => {
      const o = document.createElement('option');
      o.value = c;
      o.textContent = c.charAt(0).toUpperCase() + c.slice(1);
      catSel.appendChild(o);
    });
  }
}

function attachListeners() {
  const search   = document.getElementById('vocabSearch');
  const levelSel = document.getElementById('vocabFilterLevel');
  const catSel   = document.getElementById('vocabFilterCat');
  const grid     = document.getElementById('vocabGrid');

  const refresh = () => {
    if (!grid || typeof renderVocabularyList !== 'function') return;
    renderVocabularyList(grid, {
      query:    search   ? search.value   : '',
      level:    levelSel ? levelSel.value : '',
      category: catSel   ? catSel.value   : ''
    });
  };

  if (search) {
    search.addEventListener('input', () => {
      clearTimeout(search._t);
      search._t = setTimeout(refresh, 200);
    });
  }
  if (levelSel) levelSel.addEventListener('change', refresh);
  if (catSel)   catSel.addEventListener('change', refresh);
}

document.addEventListener('DOMContentLoaded', initVocabulary);
