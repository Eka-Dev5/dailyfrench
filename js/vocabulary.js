// ═══════════════════════════════════════════════════════════════════
// VOCABULARY.JS — Daily French 🥖 v3.0
// Logique page lexique : init, filtres, écouteurs
// CORRECTION : attente asynchrone de VOCABULARY_BDD
// ═══════════════════════════════════════════════════════════════════

function initVocabulary() {
  if (typeof initCore === 'function') initCore();

  // Attendre que VOCABULARY_BDD soit disponible (chargement dynamique)
  function tryInit() {
    if (typeof VOCABULARY_BDD !== 'undefined' && VOCABULARY_BDD.length > 0) {
      populateFilters();
      const grid = document.getElementById('vocabGrid');
      if (grid && typeof renderVocabularyList === 'function') {
        renderVocabularyList(grid);
      }
      attachListeners();
      const countEl = document.getElementById('vocabCount');
      if (countEl) countEl.textContent = VOCABULARY_BDD.length + ' words';
    } else {
      if (!window._vocabRetryCount) window._vocabRetryCount = 0;
      window._vocabRetryCount++;
      if (window._vocabRetryCount < 50) {
        setTimeout(tryInit, 100);
      } else {
        const grid = document.getElementById('vocabGrid');
        if (grid) grid.innerHTML = '<div class="empty-state">⚠️ Vocabulary data failed to load.<br>Check that js/vocab-levels/ folder exists with 21 files.</div>';
        const countEl = document.getElementById('vocabCount');
        if (countEl) countEl.textContent = 'Error';
      }
    }
  }

  tryInit();
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
