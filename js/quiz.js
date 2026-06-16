function showSection(id) {
  document.querySelectorAll('.section').forEach(function(s) {
    s.style.display = 'none'; s.classList.remove('active');
  });
  const target = document.getElementById(id);
  if (target) { target.style.display = 'block'; target.classList.add('active'); }
}

// quiz.js — Logique page quiz v2.4
// CORRECTION : handleRoute détecte play.html → section par défaut = levels
//

function handleRoute() {
  const params = new URLSearchParams(window.location.search);

  // Sur play.html, la section par défaut est "levels" (pas "home")
  const isPlayPage = window.location.pathname.indexOf('play.html') !== -1;
  const defaultSection = isPlayPage ? 'levels' : 'home';

  const section = params.get('section') || defaultSection;

  const dir = params.get('direction');
  if (dir && ['en-first', 'fr-first', 'mixed'].indexOf(dir) !== -1) {
    if (typeof DirectionMode !== 'undefined') DirectionMode.set(dir);
  }

  if (typeof showSection === 'function') showSection(section);

  if (section === 'lecons') {
    renderLessonsWhenReady();
  }
  if (section === 'levels' && typeof renderLevels === 'function') {
    renderLevelsWhenReady();
  }
}

function renderLessonsWhenReady() {
  if (window._lessonsReady && LESSONS_DATA.length > 0) {
    renderLessons();
  } else if (typeof EventBus !== 'undefined') {
    EventBus.on('lessonsLoaded', function() {
      renderLessons();
    });
    setTimeout(function() {
      if (window._lessonsReady && LESSONS_DATA.length > 0) {
        renderLessons();
      }
    }, 100);
  } else {
    const container = document.getElementById('lessonsContainer');
    if (container) container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted)">Loading lessons...</div>';
  }
}

function renderLevelsWhenReady() {
  if (window._lessonsReady && LESSONS_DATA.length > 0) {
    renderLevels();
  } else if (typeof EventBus !== 'undefined') {
    EventBus.on('lessonsLoaded', function() {
      renderLevels();
    });
    setTimeout(function() {
      if (window._lessonsReady && LESSONS_DATA.length > 0) {
        renderLevels();
      }
    }, 100);
  }
}

function renderLessons() {
  const container = document.getElementById('lessonsContainer');
  if (!container || typeof LESSONS_DATA === 'undefined') return;

  container.innerHTML = '';
  LESSONS_DATA.forEach(function(lesson, index) {
    const num = index + 1;
    const card = document.createElement('div');
    card.className = 'lesson-card';
    card.dataset.num = num;

    const header = document.createElement('div');
    header.className = 'lesson-header';
    header.innerHTML = '<span class="lesson-num">' + num + '</span><span class="lesson-title">' + lesson.title + '</span><span class="lesson-chevron">▼</span>';
    header.addEventListener('click', function() { toggleLesson(num); });

    const body = document.createElement('div');
    body.className = 'lesson-body';
    body.id = 'lesson-body-' + num;
    body.style.display = 'none';
    body.innerHTML = lesson.contentHtml || lesson.content || '';

    if (typeof highlightVocabularyWords === 'function') {
      highlightVocabularyWords(body);
    }

    card.appendChild(header);
    card.appendChild(body);
    container.appendChild(card);
  });

  // Appliquer le mode d'affichage des colonnes (indépendant de DirectionMode)
  if (typeof LessonViewMode !== 'undefined') {
    LessonViewMode.apply();
  }
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

  // Réappliquer le mode quand on ouvre une leçon (au cas où)
  if (!isOpen && typeof LessonViewMode !== 'undefined') {
    LessonViewMode.apply();
  }
}

function selectMode(mode) {
  if (typeof gameState !== 'undefined') gameState.currentMode = mode;
  document.querySelectorAll('.mode-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
}

function selectDirection(mode) {
  if (typeof DirectionMode !== 'undefined') DirectionMode.set(mode);
  if (typeof gameState !== 'undefined') gameState.currentDirection = mode;

  document.querySelectorAll('.direction-btn').forEach(function(btn) {
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
    : (gameState && gameState.currentDirection ? gameState.currentDirection : 'en-first');

  const modes = [
    { key: 'en-first', icon: '🇬🇧→🇫🇷', label: 'English First' },
    { key: 'fr-first', icon: '🇫🇷→🇬🇧', label: 'French First' },
    { key: 'mixed', icon: '🔄', label: 'Mixed' }
  ];

  container.innerHTML = '';
  modes.forEach(function(m) {
    const btn = document.createElement('button');
    btn.className = 'direction-btn' + (m.key === currentDir ? ' active' : '');
    btn.dataset.direction = m.key;
    btn.innerHTML = '<span class="dir-icon">' + m.icon + '</span><span class="dir-label">' + m.label + '</span>';
    btn.addEventListener('click', function() { selectDirection(m.key); });
    container.appendChild(btn);
  });
}

// ─── INVERSION DES COLONNES (INDÉPENDANT) ────────────────────────

function toggleLessonColumns() {
  if (typeof LessonViewMode === 'undefined') {
    console.error('[toggleLessonColumns] LessonViewMode not available');
    return;
  }

  const newMode = LessonViewMode.toggle();
  const msg = newMode === 'inverted'
    ? (I18n.current === 'fr' ? 'Colonnes inversées' : 'Columns inverted')
    : (I18n.current === 'fr' ? 'Colonnes normales' : 'Normal columns');
  toast(msg + ' 🔄');
}

// ─── INIT ─────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  if (typeof initCore === 'function') initCore();

  document.querySelectorAll('.mode-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { selectMode(btn.dataset.mode); });
  });

  renderDirectionSelector();
  handleRoute();
});
