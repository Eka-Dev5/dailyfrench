// ═══════════════════════════════════════════════════════════════════════
// quiz.js — Daily French — Routes, Leçons, Niveaux
// CORRIGÉ 4 JUN 2026: Colonnes inversées → Anglais | Français | Phonétique
// ═══════════════════════════════════════════════════════════════════════

function handleRoute() {
  const section = new URLSearchParams(location.search).get('section') || 'home';
  
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-' + section)?.classList.add('active');
  
  // Update nav active state
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector(`[data-section="${section}"]`)?.classList.add('active');
  
  if (section === 'lessons') renderLessons();
  else if (section === 'levels') renderLevels();
}

// ── LEÇONS ───────────────────────────────────────────────────────
function renderLessons() {
  const container = document.getElementById('lessonsContainer');
  if (!container) return;

  container.innerHTML = LESSONS_DATA.map((lesson, idx) => {
    const rules = lesson.rules || [];
    
    // ✅ CORRIGÉ: Colonnes → Anglais | Français | Phonétique
    let tableHTML = `
      <table class="lesson-table">
        <thead>
          <tr>
            <th>English</th>
            <th>Français</th>
            <th>Phonetics</th>
          </tr>
        </thead>
        <tbody>
          ${rules.map(rule => `
            <tr>
              <td>${rule.en}</td>
              <td>${rule.fr}</td>
              <td><i>${rule.phon}</i></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    return `
      <div class="lesson-card" onclick="toggleLesson(${idx})">
        <div class="lesson-header">
          <span class="lesson-title">${lesson.title}</span>
          <span class="lesson-tag">Level ${lesson.level}</span>
        </div>
        <div class="lesson-body" id="lesson-body-${idx}">
          ${tableHTML}
          ${lesson.tips ? `<div class="lesson-example">${lesson.tips}</div>` : ''}
          ${lesson.examples ? lesson.examples.map(ex => `
            <div class="lesson-warning">
              <strong>Example:</strong> "${ex.en}"
              <button class="lesson-ex-btn" onclick="toggleExampleTrans(this)">FR</button>
              <span class="lesson-ex-en" style="display:none;">"${ex.fr}"</span>
            </div>
          `).join('') : ''}
        </div>
      </div>
    `;
  }).join('');
}

function toggleLesson(idx) {
  const body = document.getElementById(`lesson-body-${idx}`);
  if (body) {
    body.classList.toggle('open');
    body.parentElement.classList.toggle('open');
  }
}

function toggleExampleTrans(btn) {
  const trans = btn.nextElementSibling;
  if (trans) {
    trans.style.display = trans.style.display === 'none' ? 'block' : 'none';
    btn.textContent = trans.style.display === 'none' ? 'FR' : 'EN';
  }
}

// ── NIVEAUX ───────────────────────────────────────────────────────
function renderLevels() {
  const container = document.getElementById('levelsContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="mode-selector">
      <div class="mode-title">Choose Game Mode</div>
      <div class="mode-btns">
        <button class="mode-btn selected" onclick="setMode('mixte')">Mixed</button>
        <button class="mode-btn" onclick="setMode('qcm')">Multiple Choice</button>
        <button class="mode-btn" onclick="setMode('écrire')">Write</button>
      </div>
    </div>

    <div class="journey-map" id="journeyMap"></div>

    <div class="levels-container">
      ${LEVEL_NAMES && Object.keys(LEVEL_NAMES).map(level => {
        const lvlNum = parseInt(level);
        const isLocked = gameState.currentLevel < lvlNum;
        const isCompleted = gameState.currentLevel > lvlNum;
        const isCurrent = gameState.currentLevel === lvlNum;
        
        return `
          <div class="level-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}"
               onclick="${!isLocked ? `selectLevel(${lvlNum})` : ''}">
            <div class="level-header">
              <span class="level-number">LEVEL ${lvlNum}</span>
              ${isCompleted ? '<span class="check">✓</span>' : ''}
            </div>
            <div class="level-title">${LEVEL_NAMES[lvlNum] || 'Level ' + lvlNum}</div>
            <div class="level-obj">${!isLocked ? '📖 Learn & practice' : '🔒 Locked'}</div>
          </div>
        `;
      }).join('') || ''}
    </div>
  `;

  // Initialize journey map
  initJourneyMap();
}

function setMode(mode) {
  gameState.currentMode = mode;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('selected'));
  event.target?.classList.add('selected');
  showToast(`Mode: ${mode.toUpperCase()}`);
}

function selectLevel(level) {
  if (gameState.currentLevel < level) {
    showToast('Level locked!');
    return;
  }
  
  gameState.currentLevel = level;
  gameState.currentQuestionIndex = 0;
  gameState.score = 0;
  gameState.answers = [];
  
  loadQuestionForLevel(level);
}

function loadQuestionForLevel(level) {
  const questionsForLevel = QUESTIONS_DB.filter(q => q.level === level);
  if (questionsForLevel.length === 0) {
    showToast('No questions for this level');
    return;
  }

  gameState.questions = shuffleArray([...questionsForLevel]);
  gameState.currentQuestionIndex = 0;
  location.hash = '#play';
  handleRoute();
}

function initJourneyMap() {
  const container = document.getElementById('journeyMap');
  if (!container) return;

  container.innerHTML = Array.from({length: 20}, (_, i) => {
    const lvl = i + 1;
    const isLocked = gameState.currentLevel < lvl;
    const isCompleted = gameState.currentLevel > lvl;
    const isCurrent = gameState.currentLevel === lvl;

    return `
      <div class="journey-tile ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''} ${isCurrent ? 'active' : ''}"
           onclick="${!isLocked ? `selectLevel(${lvl})` : ''}"
           title="Level ${lvl}">
        ${lvl}
        ${isCompleted ? '<span class="check">✓</span>' : ''}
      </div>
    `;
  }).join('');
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Initialize on page load
window.addEventListener('hashchange', handleRoute);
document.addEventListener('DOMContentLoaded', () => {
  handleRoute();
});
