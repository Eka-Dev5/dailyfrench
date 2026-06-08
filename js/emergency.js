// ═══════════════════════════════════════════════════════════════════
// EMERGENCY.JS — Daily French 🥖
// Mode SOS : navigation catégories, phrases, TTS, favoris, recherche
// v3.0 : Toggle direction EN↔FR + affichage adaptatif
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// 1. ÉTAT & CONFIG
// ═══════════════════════════════════════════════════════════════════

const SOS_STORAGE_KEY = 'dailyFrench_sosFavorites';

let sosFavorites = [];
let currentCategory = null;
let sosDirection = 'en-first'; // 'en-first' | 'fr-first' | 'mixed'

// ═══════════════════════════════════════════════════════════════════
// 2. INIT
// ═══════════════════════════════════════════════════════════════════

function initSOS() {
  if (typeof initCore === 'function') initCore();
  loadSOSFavorites();
  loadSOSDirection();
  renderCategories();
  updateFavCount();
  setupSearch();
  setupTTS();
  renderDirectionToggle();
}

// ─── DIRECTION SOS ───────────────────────────────────────────────
function loadSOSDirection() {
  // Priorité : setting SOS spécifique → setting global → défaut 'en-first'
  const saved = localStorage.getItem('dailyFrench_direction_sos') ||
                localStorage.getItem('dailyFrench_direction') ||
                'en-first';
  sosDirection = saved;
}

function saveSOSDirection(dir) {
  sosDirection = dir;
  localStorage.setItem('dailyFrench_direction_sos', dir);
  toast('SOS direction: ' + dir.replace('-', '→').toUpperCase());
  renderDirectionToggle();
  // Rafraîchir l'affichage si on est dans une catégorie
  if (currentCategory) {
    const cat = EMERGENCY_CATEGORIES.find(c => c.id === currentCategory);
    if (cat) showPhrases(cat);
  }
}

function renderDirectionToggle() {
  const container = document.querySelector('.sos-direction-toggle') || createDirectionToggleContainer();
  if (!container) return;

  container.innerHTML = `
    <div class="sos-dir-bar">
      <button class="sos-dir-btn ${sosDirection === 'en-first' ? 'active' : ''}" onclick="saveSOSDirection('en-first')">🇬🇧→🇫🇷</button>
      <button class="sos-dir-btn ${sosDirection === 'fr-first' ? 'active' : ''}" onclick="saveSOSDirection('fr-first')">🇫🇷→🇬🇧</button>
      <button class="sos-dir-btn ${sosDirection === 'mixed' ? 'active' : ''}" onclick="saveSOSDirection('mixed')">🔄 Mixed</button>
    </div>
  `;
}

function createDirectionToggleContainer() {
  const header = document.querySelector('.emergency-main');
  if (!header) return null;
  const div = document.createElement('div');
  div.className = 'sos-direction-toggle';
  div.style.cssText = 'margin-bottom:var(--space-md);';
  header.insertBefore(div, header.firstChild);
  return div;
}

// ═══════════════════════════════════════════════════════════════════
// 3. FAVORIS — Charger / sauver / toggler
// ═══════════════════════════════════════════════════════════════════

function loadSOSFavorites() {
  try {
    sosFavorites = JSON.parse(localStorage.getItem(SOS_STORAGE_KEY)) || [];
  } catch {
    sosFavorites = [];
  }
}

function saveSOSFavorites() {
  localStorage.setItem(SOS_STORAGE_KEY, JSON.stringify(sosFavorites));
  updateFavCount();
}

function isSOSFavorite(phraseId) {
  return sosFavorites.some(f => f.id === phraseId);
}

function toggleSOSFavorite(phraseId, phraseData) {
  const idx = sosFavorites.findIndex(f => f.id === phraseId);
  if (idx >= 0) {
    sosFavorites.splice(idx, 1);
    toast('Removed from favorites');
  } else {
    sosFavorites.push({
      id: phraseId,
      fr: phraseData.fr,
      phon: phraseData.phon,
      en: phraseData.en,
      context: phraseData.context,
      category: currentCategory,
      savedAt: new Date().toISOString()
    });
    toast('Added to favorites! ❤️');
  }
  saveSOSFavorites();
  const btn = document.querySelector(`[data-fav="${phraseId}"]`);
  if (btn) updateFavButton(btn, phraseId);
}

function updateFavButton(btn, phraseId) {
  const isFav = isSOSFavorite(phraseId);
  btn.innerHTML = isFav ? '❤️' : '🤍';
  btn.classList.toggle('active', isFav);
}

function updateFavCount() {
  const el = document.getElementById('sos-fav-count');
  if (el) el.textContent = sosFavorites.length;
}

// ═══════════════════════════════════════════════════════════════════
// 4. RENDU CATÉGORIES
// ═══════════════════════════════════════════════════════════════════

function renderCategories() {
  const container = document.getElementById('sosCategories');
  if (!container || typeof EMERGENCY_CATEGORIES === 'undefined') return;

  container.innerHTML = '';
  container.style.display = 'grid';

  EMERGENCY_CATEGORIES.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'sos-cat-card';
    card.style.borderLeftColor = cat.color;
    card.innerHTML = `
      <div class="sos-cat-icon" style="background:${cat.color}20;color:${cat.color}">${cat.icon}</div>
      <div class="sos-cat-info">
        <div class="sos-cat-title">${cat.title}</div>
        <div class="sos-cat-desc">${cat.desc}</div>
        <div class="sos-cat-count">${cat.phrases.length} phrases</div>
      </div>
      <div class="sos-cat-arrow">›</div>
    `;
    card.addEventListener('click', () => showPhrases(cat));
    container.appendChild(card);
  });

  const phrasesView = document.getElementById('sosPhrases');
  const searchView = document.getElementById('sosSearchResults');
  if (phrasesView) phrasesView.style.display = 'none';
  if (searchView) searchView.style.display = 'none';
}

// ═══════════════════════════════════════════════════════════════════
// 5. AFFICHAGE PHRASES — AVEC DIRECTION v3.0
// ═══════════════════════════════════════════════════════════════════

function showPhrases(cat) {
  currentCategory = cat.id;

  const catView = document.getElementById('sosCategories');
  const phrasesView = document.getElementById('sosPhrases');
  const searchView = document.getElementById('sosSearchResults');

  if (catView) catView.style.display = 'none';
  if (phrasesView) phrasesView.style.display = 'block';
  if (searchView) searchView.style.display = 'none';

  const titleEl = document.getElementById('sosCurrentCatTitle');
  const countEl = document.getElementById('sosCurrentCatCount');
  if (titleEl) titleEl.textContent = `${cat.icon} ${cat.title}`;
  if (countEl) countEl.textContent = `${cat.phrases.length} phrases`;

  renderPhrasesList(cat.phrases, 'sosPhrasesList');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCategories() {
  const catView = document.getElementById('sosCategories');
  const phrasesView = document.getElementById('sosPhrases');
  const searchView = document.getElementById('sosSearchResults');

  if (catView) catView.style.display = 'grid';
  if (phrasesView) phrasesView.style.display = 'none';
  if (searchView) searchView.style.display = 'none';

  const searchInput = document.getElementById('sosSearch');
  if (searchInput) searchInput.value = '';

  currentCategory = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ═══════════════════════════════════════════════════════════════════
// 6. RENDU LISTE DE PHRASES — ORDRE ADAPTATIF v3.0
// ═══════════════════════════════════════════════════════════════════

function renderPhrasesList(phrases, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  if (phrases.length === 0) {
    container.innerHTML = '<div class="sos-empty">No phrases found</div>';
    return;
  }

  phrases.forEach((p, idx) => {
    const phraseId = slugifySOS(p.fr);
    const isFav = isSOSFavorite(phraseId);

    // Déterminer l'ordre d'affichage selon la direction
    const showEnFirst = sosDirection === 'en-first' ||
                       (sosDirection === 'mixed' && idx % 2 === 0);

    const card = document.createElement('div');
    card.className = 'sos-phrase-card';

    // HTML adaptatif selon la direction
    const mainLine = showEnFirst
      ? `<div class="sos-phrase-en sos-phrase-main">${escapeHtml(p.en)}</div>
         <div class="sos-phrase-fr">${escapeHtml(p.fr)}</div>`
      : `<div class="sos-phrase-fr sos-phrase-main">${escapeHtml(p.fr)}</div>
         <div class="sos-phrase-en">${escapeHtml(p.en)}</div>`;

    card.innerHTML = `
      <div class="sos-phrase-num">${idx + 1}</div>
      <div class="sos-phrase-body">
        ${mainLine}
        <div class="sos-phrase-phon">${escapeHtml(p.phon)}</div>
        ${p.context ? `<div class="sos-phrase-context">${escapeHtml(p.context)}</div>` : ''}
        <div class="sos-phrase-actions">
          <button class="sos-btn-tts" data-tts="${escapeHtml(p.fr)}" title="Listen">🔊 Listen</button>
          <button class="sos-btn-fav ${isFav ? 'active' : ''}" data-fav="${phraseId}" title="Save">${isFav ? '❤️' : '🤍'}</button>
          <button class="sos-btn-copy" data-copy="${escapeHtml(p.fr)}" title="Copy">📋 Copy</button>
        </div>
      </div>
    `;

    const ttsBtn = card.querySelector('.sos-btn-tts');
    const favBtn = card.querySelector('.sos-btn-fav');
    const copyBtn = card.querySelector('.sos-btn-copy');

    if (ttsBtn) ttsBtn.addEventListener('click', () => speakFrench(p.fr));
    if (favBtn) favBtn.addEventListener('click', () => toggleSOSFavorite(phraseId, p));
    if (copyBtn) copyBtn.addEventListener('click', () => copyToClipboard(p.fr, copyBtn));

    container.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════════════════
// 7. RECHERCHE
// ═══════════════════════════════════════════════════════════════════

function setupSearch() {
  const input = document.getElementById('sosSearch');
  if (!input) return;

  let debounceTimer;
  input.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => doSearch(e.target.value.trim()), 200);
  });
}

function doSearch(query) {
  if (!query) {
    showCategories();
    return;
  }

  const catView = document.getElementById('sosCategories');
  const phrasesView = document.getElementById('sosPhrases');
  const searchView = document.getElementById('sosSearchResults');

  if (catView) catView.style.display = 'none';
  if (phrasesView) phrasesView.style.display = 'none';
  if (searchView) searchView.style.display = 'block';

  const q = query.toLowerCase();
  const results = [];

  EMERGENCY_CATEGORIES.forEach(cat => {
    cat.phrases.forEach(p => {
      if (
        (p.fr && p.fr.toLowerCase().includes(q)) ||
        (p.en && p.en.toLowerCase().includes(q)) ||
        (p.phon && p.phon.toLowerCase().includes(q)) ||
        (p.context && p.context.toLowerCase().includes(q)) ||
        (cat.title && cat.title.toLowerCase().includes(q))
      ) {
        results.push(p);
      }
    });
  });

  const countEl = document.getElementById('sosSearchCount');
  if (countEl) countEl.textContent = `${results.length} result${results.length !== 1 ? 's' : ''}`;

  renderPhrasesList(results, 'sosSearchList');
}

// ═══════════════════════════════════════════════════════════════════
// 8. TTS
// ═══════════════════════════════════════════════════════════════════

let ttsEnabled = false;

function setupTTS() {
  if ('speechSynthesis' in window) {
    ttsEnabled = true;
    loadFrenchVoice();
  }
}

let frenchVoice = null;

function loadFrenchVoice() {
  const voices = speechSynthesis.getVoices();
  frenchVoice = voices.find(v => v.lang.startsWith('fr')) ||
                voices.find(v => v.lang.startsWith('fr-FR')) ||
                voices.find(v => v.lang.startsWith('fr_CA'));
  if (!frenchVoice && voices.length === 0) {
    speechSynthesis.addEventListener('voiceschanged', () => {
      const v = speechSynthesis.getVoices();
      frenchVoice = v.find(vo => vo.lang.startsWith('fr')) ||
                    v.find(vo => vo.lang.startsWith('fr-FR'));
    });
  }
}

function speakFrench(text) {
  if (!ttsEnabled) {
    toast('Text-to-speech not available on this device');
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.85;
  utterance.pitch = 1;
  if (frenchVoice) utterance.voice = frenchVoice;
  utterance.onerror = () => toast('Could not play audio');
  speechSynthesis.speak(utterance);
}

// ═══════════════════════════════════════════════════════════════════
// 9. COPIE
// ═══════════════════════════════════════════════════════════════════

function copyToClipboard(text, btn) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      const original = btn.innerHTML;
      btn.innerHTML = '✅ Copied!';
      setTimeout(() => btn.innerHTML = original, 1500);
    }).catch(() => fallbackCopy(text, btn));
  } else {
    fallbackCopy(text, btn);
  }
}

function fallbackCopy(text, btn) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    const original = btn.innerHTML;
    btn.innerHTML = '✅ Copied!';
    setTimeout(() => btn.innerHTML = original, 1500);
  } catch {
    toast('Could not copy');
  }
  document.body.removeChild(ta);
}

// ═══════════════════════════════════════════════════════════════════
// 10. UTILITAIRES
// ═══════════════════════════════════════════════════════════════════

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function slugifySOS(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '-').substring(0, 50);
}

// ═══════════════════════════════════════════════════════════════════
// 11. DÉMARRAGE
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', initSOS);
