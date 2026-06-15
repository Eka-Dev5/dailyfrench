// ═══════════════════════════════════════════════════════════════════
// PLAY.JS — Page Play = Quiz (niveaux visibles directement)
// ═══════════════════════════════════════════════════════════════════

function initPlay() {
  if (typeof initCore === 'function') initCore();

  // Attendre que les leçons soient chargées
  if (window._lessonsReady && LESSONS_DATA.length > 0) {
    renderLevels();
  } else if (typeof EventBus !== 'undefined') {
    EventBus.on('lessonsLoaded', function() {
      renderLevels();
    });
    // Fallback si déjà chargé
    setTimeout(function() {
      if (window._lessonsReady) renderLevels();
    }, 500);
  }
}

function setGameMode(mode) {
  gameState.currentMode = mode;
  document.querySelectorAll('.mode-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
}

// renderLevels est déjà dans game-engine.js
// startLevel est déjà dans game-engine.js
