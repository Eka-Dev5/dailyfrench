// ═══════════════════════════════════════════════════════════════════════
// core.js — Daily French — Core helpers, settings, Génie
// CORRIGÉ 4 JUN 2026: Settings + Génie button + toggle themes
// ═══════════════════════════════════════════════════════════════════════

// ── INITIALISATION GLOBALE ──────────────────────────────────────────
function initApp() {
  loadPlayers();
  initHero();
  initSettings();
  setupNavigation();
  applyThemeOnLoad();
  handleRoute();
}

function loadPlayers() {
  const stored = localStorage.getItem(SUBJECT_CONFIG.playersKey);
  if (stored) {
    try {
      window.PLAYERS = JSON.parse(stored);
    } catch {
      window.PLAYERS = [];
    }
  } else {
    window.PLAYERS = [];
  }
}

function savePlayers() {
  localStorage.setItem(SUBJECT_CONFIG.playersKey, JSON.stringify(window.PLAYERS || []));
}

// ── HERO SECTION ────────────────────────────────────────────────────
function initHero() {
  const heroContainer = document.querySelector('.hero');
  if (!heroContainer) return;

  // Render player selector + info
  const playerInfo = document.querySelector('.player-info');
  if (playerInfo) {
    if (!gameState.currentPlayer || PLAYERS.length === 0) {
      playerInfo.innerHTML = `
        <div style="text-align: center; padding: 12px;">
          <p style="margin: 0 0 8px; font-size: 14px;">No players yet</p>
          <input id="newPlayerInput" type="text" placeholder="Player name" 
                 style="padding: 6px; font-size: 14px; border: 1px solid #ccc; border-radius: 4px;"
                 autocapitalize="off" autocorrect="off" />
          <button class="btn btn-primary" onclick="createNewPlayer()" 
                  style="margin-top: 8px; padding: 6px 12px; font-size: 12px;">
            Create Player
          </button>
        </div>
      `;
    } else {
      const p = gameState.currentPlayer;
      playerInfo.innerHTML = `
        <div class="player-avatar">${p.name?.charAt(0).toUpperCase() || '👤'}</div>
        <div>
          <div class="player-name">${p.name || 'Player'}</div>
          <div class="player-stats">Level ${p.currentLevel || 1} • ${p.totalScore || 0} pts</div>
        </div>
      `;
    }
  }
}

function createNewPlayer() {
  const input = document.getElementById('newPlayerInput');
  const name = input?.value.trim();
  
  if (!name) {
    showToast('Enter a player name!');
    return;
  }

  const newPlayer = {
    id: Date.now(),
    name: name,
    currentLevel: 1,
    totalScore: 0,
    completedLevels: [],
    genius: [], // mots favoris
    lifeSkills: {}
  };

  PLAYERS.push(newPlayer);
  gameState.currentPlayer = newPlayer;
  savePlayers();
  initHero();
  showToast(`Welcome, ${name}!`);
}

// ── SETTINGS (NEW) ──────────────────────────────────────────────────
function initSettings() {
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsPanel = document.getElementById('settingsPanel');
  const themeSelect = document.getElementById('themeSelect');
  const langSelect = document.getElementById('langSelect');
  const settingsClose = document.getElementById('settingsClose');

  if (!settingsBtn) return; // page sans settings

  // Load saved values
  const savedTheme = localStorage.getItem('dailyFrench_theme') || 'ardoise';
  const savedLang = localStorage.getItem('dailyFrench_lang') || 'en';
  
  if (themeSelect) themeSelect.value = savedTheme;
  if (langSelect) langSelect.value = savedLang;

  // Toggle panel visibility
  settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (settingsPanel) {
      settingsPanel.style.display = settingsPanel.style.display === 'none' ? 'flex' : 'none';
    }
  });

  if (settingsClose) {
    settingsClose.addEventListener('click', () => {
      if (settingsPanel) settingsPanel.style.display = 'none';
    });
  }

  // Close on outside click
  if (settingsPanel) {
    settingsPanel.addEventListener('click', (e) => {
      if (e.target === settingsPanel) {
        settingsPanel.style.display = 'none';
      }
    });
  }

  // Apply theme change
  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
      applyTheme(e.target.value);
    });
  }

  // Apply language change
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }
}

function applyTheme(themeName) {
  localStorage.setItem('dailyFrench_theme', themeName);
  document.documentElement.setAttribute('data-theme', themeName);
  showToast(`Theme: ${themeName}`);
  
  // Optionally reload
  // location.reload();
}

function applyLanguage(lang) {
  localStorage.setItem('dailyFrench_lang', lang);
  SUBJECT_CONFIG.interfaceLang = lang;
  showToast(`Language: ${lang === 'en' ? 'English' : 'Français'}`);
  
  // Optionally reload
  // location.reload();
}

function applyThemeOnLoad() {
  const theme = localStorage.getItem('dailyFrench_theme') || 'ardoise';
  document.documentElement.setAttribute('data-theme', theme);
}

// ── GÉNIE BUTTON (NEW) ──────────────────────────────────────────────
function initGeniusButton() {
  const geniusBtn = document.getElementById('geniusBtn');
  if (!geniusBtn) return;

  geniusBtn.addEventListener('click', () => {
    openGeniusModal();
  });
}

function openGeniusModal() {
  if (!gameState.currentPlayer) {
    showToast('Select a player first!');
    return;
  }

  const player = gameState.currentPlayer;
  const genius = player.genius || [];

  if (genius.length === 0) {
    showToast('No saved words yet! Add words from vocabulary.');
    return;
  }

  renderGeniusModal(genius);
}

function renderGeniusModal(genius) {
  // Create/update modal
  let modal = document.getElementById('geniusModal');
  
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'geniusModal';
    modal.className = 'genius-modal';
    document.body.appendChild(modal);
  }

  // Group by theme/category
  const themes = {};
  genius.forEach(word => {
    const w = VOCABULARY_BDD.find(v => v.fr === word);
    const theme = w?.cat || 'other';
    if (!themes[theme]) themes[theme] = [];
    themes[theme].push(word);
  });

  let html = `
    <div class="genius-modal-content">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h2 style="margin: 0;">🪔 My Genius (${genius.length})</h2>
        <button class="btn-close" onclick="document.getElementById('geniusModal').remove();">✕</button>
      </div>

      <div id="geniusThemesList">
  `;

  Object.keys(themes).forEach(theme => {
    html += `
      <div class="genius-theme-section">
        <h3 style="color: var(--primary); margin: 12px 0 8px; font-size: 14px; text-transform: capitalize;">
          🏷️ ${theme}
        </h3>
        <div class="genius-list">
    `;
    
    themes[theme].forEach(word => {
      const w = VOCABULARY_BDD.find(v => v.fr === word);
      html += `
        <span class="genius-chip" onclick="viewGeniusWord('${word}')">
          ${word}
          ${w ? ` <small style="opacity: 0.7;">(${w.en})</small>` : ''}
        </span>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `
      </div>
      <button class="btn btn-danger" style="width: 100%; margin-top: 12px;" 
              onclick="clearGenius(); document.getElementById('geniusModal').remove();">
        Clear All
      </button>
    </div>
  `;

  modal.innerHTML = html;
  modal.style.display = 'flex';

  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

function viewGeniusWord(frWord) {
  const word = VOCABULARY_BDD.find(w => w.fr === frWord);
  if (!word) return;

  showToast(`${word.fr} = ${word.en}`);
  // Could open popup too
}

function clearGenius() {
  if (!gameState.currentPlayer) return;
  
  if (confirm('Clear all saved words?')) {
    gameState.currentPlayer.genius = [];
    savePlayers();
    showToast('Genius cleared!');
  }
}

// ── NAVIGATION ──────────────────────────────────────────────────────
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const section = item.getAttribute('data-section');
      if (section) {
        e.preventDefault();
        location.hash = `#${section}`;
        handleRoute();
      }
    });
  });
}

// ── HELPERS ─────────────────────────────────────────────────────────
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function showError(msg) {
  showToast(`❌ ${msg}`);
}

// Initialize app when ready
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  initGeniusButton();
});
