/**
 * quiz.js — Logique page quiz v2.1
 * Dépendances : core.js, game-engine.js, vocabulary-engine.js
 * 
 * MODIFICATIONS v2.1 :
 *   + selectDirection(mode) — toggle direction EN→FR / FR→EN / Mixed
 *   + renderDirectionSelector() — affiche les boutons direction
 *   ~ handleRoute() — gère aussi ?direction=xxx
 */

function handleRoute() {
  const params = new URLSearchParams(window.location.search);
  const section = params.get('section') || 'home';
  
  const dir = params.get('direction');
  if (dir && ['en-first', 'fr-first', 'mixed'].includes(dir)) {
    if (typeof DirectionMode !== 'undefined') DirectionMode.set(dir);
  }

  if (typeof showSection === 'function') showSection(section);
  if (section === 'lecons') renderLessons();
  if (section === 'levels' && typeof renderLevels === 'function') renderLevels();
}

function renderLessons() {
  const container = document.getElementById('lessonsContainer');
  if (!container || typeof LESSONS_DATA === 'undefined') return;
  
  container.innerHTML = '';
  LESSONS_DATA.forEach((lesson, index) => {
    const num = index + 1;
    const card = document.createElement('div');
    card.className = 'lesson-card';
    card.dataset.num = num;
    
    const header = document.createElement('div');
    header.className = 'lesson-header';
    header.innerHTML = `
      <span class="lesson-num">${num}</span>
      <span class="lesson-title">${lesson.title}</span>
      <span class="lesson-chevron">▼</span>`;
    header.addEventListener('click', () => toggleLesson(num));
    
    const body = document.createElement('div');
    body.className = 'lesson-body';
    body.id = 'lesson-body-' + num;
    body.style.display = 'none';
    body.innerHTML = lesson.content || '';
    
    if (typeof highlightVocabularyWords === 'function') {
      highlightVocabularyWords(body);
    }
    
    card.appendChild(header);
    card.appendChild(body);
    container.appendChild(card);
  });
}

function toggleLesson(num) {
  const body = document.getElementById('lesson-body-' + num);
  const card = document.querySelector('.lesson-card[data-num="' + num + '"]');
  if (!body) return;
  
  const isOpen = body.style.display === 'block';
  body.style.display = isOpen ? 'none' : 'block';
  
  if (card) {
    const ch = card.querySelector('.lesson-chevron');
    if (ch) ch.textContent = isOpen ? '▼' : '▲';
    card.classList.toggle('open', !isOpen);
  }
}

function selectMode(mode) {
  if (typeof gameState !== 'undefined') gameState.currentMode = mode;
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
}

// NOUVEAU v2.1 — Direction selector
function selectDirection(mode) {
  if (typeof DirectionMode !== 'undefined') DirectionMode.set(mode);
  if (typeof gameState !== 'undefined') gameState.currentDirection = mode;
  
  document.querySelectorAll('.direction-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.direction === mode);
  });
  
  if (typeof toast === 'function') {
    const label = typeof DirectionMode !== 'undefined' 
      ? DirectionMode.getLabel(mode) 
      : mode;
    toast('Direction: ' + label + ' 🔄');
  }
}

function renderDirectionSelector() {
  const container = document.getElementById('directionSelector');
  if (!container) return;
  
  const currentDir = (typeof DirectionMode !== 'undefined') 
    ? DirectionMode.load() 
    : (gameState?.currentDirection || 'en-first');
  
  const modes = [
    { key: 'en-first', icon: '🇬🇧→🇫🇷', label: 'English First' },
    { key: 'fr-first', icon: '🇫🇷→🇬🇧', label: 'French First' },
    { key: 'mixed', icon: '🔄', label: 'Mixed' }
  ];
  
  container.innerHTML = '';
  modes.forEach(m => {
    const btn = document.createElement('button');
    btn.className = 'direction-btn' + (m.key === currentDir ? ' active' : '');
    btn.dataset.direction = m.key;
    btn.innerHTML = `<span class="dir-icon">${m.icon}</span><span class="dir-label">${m.label}</span>`;
    btn.addEventListener('click', () => selectDirection(m.key));
    container.appendChild(btn);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof initCore === 'function') initCore();
  
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => selectMode(btn.dataset.mode));
  });
  
  renderDirectionSelector();
  handleRoute();
});
