// ═══════════════════════════════════════════════════════════════════
// CORE.JS — Daily French 🥖 v2.1
// Moteur central : Storage, PlayerManager, I18n, Theme, DirectionMode,
// Modal, Toast, Router, EventBus, Analytics
//
// AJOUTS v2.1 :
//   + DirectionMode (EN→FR / FR→EN / Mixed)
//   + KEYS.direction pour localStorage
//   + applyDirectionPick() fonction globale
//   + Traductions direction dans I18N
// ═══════════════════════════════════════════════════════════════════

const CORE_VERSION = '2.1.0';
const STORAGE_PREFIX = 'dailyFrench_';

// ─── CLÉS LOCALSTORAGE ─────────────────────────────────────────────
const KEYS = {
  players: 'dailyFrench_players',
  theme: 'dailyFrench_theme',
  lang: 'dailyFrench_lang',
  direction: 'dailyFrench_direction', // NOUVEAU v2.1
  genius: 'dailyFrench_genius',
  session: 'dailyFrench_v1',
  analytics: 'dailyFrench_analytics_opt_out'
};

// ═══════════════════════════════════════════════════════════════════
// 1. STORAGE ADAPTER
// ═══════════════════════════════════════════════════════════════════

const Storage = {
  isAvailable() {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch { return false; }
  },

  get(key, fallback = null) {
    if (!this.isAvailable()) return fallback;
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch { return fallback; }
  },

  set(key, value) {
    if (!this.isAvailable()) { console.warn('localStorage not available'); return false; }
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      if (e.name === 'QuotaExceededError' || e.code === 22) this.handleQuotaExceeded();
      console.error('Storage error:', e);
      return false;
    }
  },

  remove(key) {
    if (!this.isAvailable()) return;
    try { localStorage.removeItem(key); } catch {}
  },

  handleQuotaExceeded() {
    toast('⚠️ Storage full! Export your save, then clear history.');
  },

  getUsage() {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) total += localStorage[key].length * 2;
    }
    return (total / 1024 / 1024).toFixed(2) + ' MB';
  },

  exportAll() {
    const data = {};
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key) && key.startsWith(STORAGE_PREFIX)) {
        data[key] = this.get(key);
      }
    }
    return data;
  },

  importAll(data) {
    if (!data || typeof data !== 'object') return false;
    let imported = 0;
    for (let key in data) {
      if (key.startsWith(STORAGE_PREFIX)) {
        this.set(key, data[key]);
        imported++;
      }
    }
    return imported;
  }
};

// ═══════════════════════════════════════════════════════════════════
// 2. PLAYER MANAGER
// ═══════════════════════════════════════════════════════════════════

const PlayerManager = {
  defaultPlayer(name) {
    return {
      name: name,
      currentLevel: 1,
      score: 0,
      completed: [],
      totalQuestions: 0,
      totalCorrect: 0,
      streak: 0,
      lastPlayed: null,
      errorHistory: [],
      sessionHistory: [],
      activeSession: null,
      badges: [],
      phraseProgress: { completed: [], score: 0, streak: 0 },
      cameleonHelped: 0,
      createdAt: new Date().toISOString(),
      version: CORE_VERSION
    };
  },

  getAll() { return Storage.get(KEYS.players, {}); },
  saveAll(players) { return Storage.set(KEYS.players, players); },

  validateName(name) {
    if (!name || typeof name !== 'string') return { ok: false, msg: 'Name required' };
    const trimmed = name.trim();
    if (trimmed.length === 0) return { ok: false, msg: 'Name cannot be empty' };
    if (trimmed.length > 30) return { ok: false, msg: 'Name too long (max 30)' };
    if (!/^[\p{L}\p{N}\s\-'_]+$/u.test(trimmed)) return { ok: false, msg: 'Invalid characters' };
    return { ok: true, name: trimmed };
  },

  create(name) {
    const v = this.validateName(name);
    if (!v.ok) return { success: false, error: v.msg };
    const players = this.getAll();
    if (players[v.name]) return { success: false, error: 'Player already exists!' };
    players[v.name] = this.defaultPlayer(v.name);
    this.saveAll(players);
    this.setCurrent(v.name);
    return { success: true, player: players[v.name] };
  },

  load(name) { return this.getAll()[name] || null; },

  save(name, data) {
    const players = this.getAll();
    if (!players[name]) return false;
    players[name] = { ...players[name], ...data, lastPlayed: new Date().toISOString() };
    return this.saveAll(players);
  },

  delete(name) {
    const players = this.getAll();
    if (!players[name]) return false;
    delete players[name];
    this.saveAll(players);
    if (this.getCurrent() === name) Storage.remove(KEYS.session);
    return true;
  },

  setCurrent(name) {
    Storage.set(KEYS.session, { currentPlayer: name, timestamp: new Date().toISOString() });
    if (typeof gameState !== 'undefined') gameState.currentPlayer = name;
  },

  getCurrent() {
    const session = Storage.get(KEYS.session, {});
    return session.currentPlayer || null;
  },

  autoDetect() {
    const current = this.getCurrent();
    if (current && this.load(current)) return current;
    const names = Object.keys(this.getAll());
    if (names.length === 1) { this.setCurrent(names[0]); return names[0]; }
    return null;
  },

  migrate() {
    const players = this.getAll();
    let migrated = 0;
    for (let name in players) {
      if (!players[name].version || players[name].version !== CORE_VERSION) {
        players[name] = { ...this.defaultPlayer(name), ...players[name], version: CORE_VERSION };
        migrated++;
      }
    }
    if (migrated > 0) this.saveAll(players);
    return migrated;
  }
};

// ═══════════════════════════════════════════════════════════════════
// 3. I18N ENGINE — Traductions FR/EN
// ═══════════════════════════════════════════════════════════════════

const I18N = {
  en: {
    home: 'Home', lessons: 'Lessons', play: 'Play', vocab: 'Vocab',
    mySpace: 'My Space', newPlayer: 'New player', create: 'Create',
    cancel: 'Cancel', welcome: 'Welcome', choosePlayer: 'Choose a player',
    streak: 'streak', accuracy: 'accuracy', sessions: 'sessions',
    currentLevel: 'Current level', points: 'Points', levelsDone: 'Levels done',
    badges: 'Badges', history: 'History', errors: 'Errors', cameleon: 'Cameleon',
    playNow: 'Play now', noSessions: 'No sessions yet — go play!',
    noErrors: 'No errors — you\'re doing brilliantly!',
    geniusTitle: 'Mon Génie', geniusSub: 'Your personal word collection',
    geniusEmpty: 'No words saved yet.', geniusQuiz: 'Quiz me on my words!',
    remove: 'Remove', playerExists: 'Player already exists!',
    welcomePlayer: 'Welcome', exported: 'Exported!', imported: 'Imported!',
    noData: 'No save data yet.', invalidFile: 'Invalid file.',
    readError: 'Error reading file.', modeMixed: 'Mixed',
    modeQcm: 'QCM', modeLibre: 'Written', validate: 'Validate',
    next: 'Next', seeResults: 'See results', quit: 'Quit',
    retry: 'Retry', excellent: 'Excellent! Level unlocked!',
    goodEffort: 'Not bad! Keep practising.', keepGoing: 'Keep going! Read the lesson again.',
    level: 'Level', of: 'of', correct: 'Correct', wrong: 'Wrong',
    hint: 'Hint', vocabulary: 'Vocabulary', loading: 'Loading...',
    error: 'Error', success: 'Success', warning: 'Warning',
    confirmQuit: 'Quit? Your progress is saved.',
    continueSession: 'Continue where you left off?',
    sessionProgress: 'done',
    // NOUVEAU v2.1 — Direction mode
    dirEnFirst: '🇬🇧→🇫🇷 English First',
    dirFrFirst: '🇫🇷→🇬🇧 French First',
    dirMixed: '🔄 Mixed Direction',
    dirLabel: 'Direction'
  },
  fr: {
    home: 'Accueil', lessons: 'Leçons', play: 'Jouer', vocab: 'Vocab',
    mySpace: 'Mon Espace', newPlayer: 'Nouveau joueur', create: 'Créer',
    cancel: 'Annuler', welcome: 'Bienvenue', choosePlayer: 'Choisir un joueur',
    streak: 'série', accuracy: 'précision', sessions: 'sessions',
    currentLevel: 'Niveau actuel', points: 'Points', levelsDone: 'Faits',
    badges: 'Badges', history: 'Historique', errors: 'Erreurs', cameleon: 'Caméléon',
    playNow: 'Jouer', noSessions: 'Pas encore de sessions — va jouer !',
    noErrors: 'Pas d\'erreurs — tu es brillante !',
    geniusTitle: 'Mon Génie', geniusSub: 'Ta collection personnelle',
    geniusEmpty: 'Pas encore de mots sauvegardés.', geniusQuiz: 'Teste-moi sur mes mots !',
    remove: 'Retirer', playerExists: 'Ce joueur existe déjà !',
    welcomePlayer: 'Bienvenue', exported: 'Exporté !', imported: 'Importé !',
    noData: 'Pas de données.', invalidFile: 'Fichier invalide.',
    readError: 'Erreur de lecture.', modeMixed: 'Mixte',
    modeQcm: 'QCM', modeLibre: 'Écrit', validate: 'Valider',
    next: 'Suivant', seeResults: 'Voir les résultats', quit: 'Quitter',
    retry: 'Réessayer', excellent: 'Excellent ! Niveau débloqué !',
    goodEffort: 'Pas mal ! Continue à pratiquer.', keepGoing: 'Continue ! Relis la leçon.',
    level: 'Niveau', of: 'sur', correct: 'Correct', wrong: 'Faux',
    hint: 'Indice', vocabulary: 'Vocabulaire', loading: 'Chargement...',
    error: 'Erreur', success: 'Succès', warning: 'Attention',
    confirmQuit: 'Quitter ? Ta progression est sauvegardée.',
    continueSession: 'Continuer où tu en étais ?',
    sessionProgress: 'fait',
    // NOUVEAU v2.1 — Direction mode
    dirEnFirst: '🇬🇧→🇫🇷 Anglais d\'abord',
    dirFrFirst: '🇫🇷→🇬🇧 Français d\'abord',
    dirMixed: '🔄 Direction mixte',
    dirLabel: 'Direction'
  }
};

const I18n = {
  current: 'en',

  detect() {
    const saved = Storage.get(KEYS.lang);
    if (saved && I18N[saved]) return saved;
    const browser = navigator.language || navigator.userLanguage || 'en';
    const code = browser.split('-')[0];
    return I18N[code] ? code : 'en';
  },

  init() {
    if (typeof SUBJECT_CONFIG !== 'undefined' && SUBJECT_CONFIG.interfaceLang) {
      this.current = SUBJECT_CONFIG.interfaceLang;
    } else {
      this.current = this.detect();
    }
  },

  set(lang) {
    if (I18N[lang]) { this.current = lang; Storage.set(KEYS.lang, lang); return true; }
    return false;
  },

  t(key, fallback) {
    const str = I18N[this.current]?.[key];
    return str !== undefined ? str : (fallback || key);
  },

  formatDate(date, options = {}) {
    const d = typeof date === 'string' ? new Date(date) : date;
    const opts = { day: 'numeric', month: 'short', ...options };
    return d.toLocaleDateString(this.current === 'fr' ? 'fr-FR' : 'en-GB', opts);
  },

  formatPercent(num) {
    return this.current === 'fr' ? num + ' %' : num + '%';
  }
};

// ═══════════════════════════════════════════════════════════════════
// 4. DIRECTION MODE — NOUVEAU v2.1
// Gère EN→FR / FR→EN / Mixed pour les questions du quiz
// ═══════════════════════════════════════════════════════════════════

const DirectionMode = {
  load() {
    const saved = Storage.get(KEYS.direction, 'en-first');
    gameState.currentDirection = DIRECTION_MODES[saved] ? saved : 'en-first';
    return gameState.currentDirection;
  },

  set(mode) {
    if (!DIRECTION_MODES[mode]) return false;
    gameState.currentDirection = mode;
    Storage.set(KEYS.direction, mode);
    return true;
  },

  getLabel(mode) {
    const m = mode || gameState.currentDirection;
    const entry = DIRECTION_MODES[m];
    if (!entry) return m;
    return I18n.current === 'fr' ? entry.labelFr : entry.label;
  },

  // Détermine la direction pour une question donnée (index-based pour mixed)
  getDirectionForQuestion(index) {
    const mode = gameState.currentDirection;
    if (mode === 'en-first') return { qLang: 'en', aLang: 'fr' };
    if (mode === 'fr-first') return { qLang: 'fr', aLang: 'en' };
    // mixed : alterne pair/impair
    return index % 2 === 0 ? { qLang: 'en', aLang: 'fr' } : { qLang: 'fr', aLang: 'en' };
  },

  // Inverse une question selon la direction
  flipQuestion(q, index) {
    if (!q) return q;
    const dir = this.getDirectionForQuestion(index);

    // Si EN→FR (défaut), pas d'inversion nécessaire
    if (dir.qLang === 'en') return q;

    // Si FR→EN, on inverse question et réponse
    // On utilise les champs _fr s'ils existent, sinon on inverse logiquement
    const flipped = { ...q };

    // Pour QCM : la question devient FR, les options deviennent EN
    if (q.options && q.correctIndex !== undefined) {
      // Si les données ont des versions FR, on les utilise
      // Sinon on garde tel quel (les données data.js restent en EN pour l'instant)
      // NOTE : l'inversion complète nécessite data.js bilingue
      flipped.question = q.questionFr || q.question;
      flipped.options = q.optionsEn || q.options;
      flipped.correctIndex = q.correctIndexEn !== undefined ? q.correctIndexEn : q.correctIndex;
    }

    // Pour libre : question FR, réponse EN
    if (q.correct && !q.options) {
      flipped.question = q.questionFr || q.question;
      flipped.correct = q.correctEn || q.correct;
    }

    return flipped;
  }
};

// ═══════════════════════════════════════════════════════════════════
// 5. THEME ENGINE
// ═══════════════════════════════════════════════════════════════════

const THEMES = {
  ardoise: {
    name: 'Ardoise', primary: '#4A5568', primaryMid: '#64748B', primaryLight: '#F1F5F9',
    heroFrom: '#475569', heroVia: '#64748B', heroTo: '#94A3B8',
    shadow: 'rgba(51,65,85,0.12)', shadowLg: 'rgba(51,65,85,0.18)'
  },
  mauve: {
    name: 'Mauve', primary: '#7C3AED', primaryMid: '#8B5CF6', primaryLight: '#EDE9FE',
    heroFrom: '#581C87', heroVia: '#7C3AED', heroTo: '#A855F7',
    shadow: 'rgba(124,58,237,0.12)', shadowLg: 'rgba(124,58,237,0.18)'
  },
  terra: {
    name: 'Terra', primary: '#9A3412', primaryMid: '#C2410C', primaryLight: '#FFF7ED',
    heroFrom: '#7C2D12', heroVia: '#9A3412', heroTo: '#EA580C',
    shadow: 'rgba(154,52,18,0.12)', shadowLg: 'rgba(154,52,18,0.18)'
  }
};

const Theme = {
  apply(name) {
    const t = THEMES[name] || THEMES.ardoise;
    const root = document.documentElement;
    root.style.setProperty('--primary', t.primary);
    root.style.setProperty('--primary-mid', t.primaryMid);
    root.style.setProperty('--primary-light', t.primaryLight);
    root.style.setProperty('--shadow', `0 4px 16px ${t.shadow}`);
    root.style.setProperty('--shadow-lg', `0 16px 48px ${t.shadowLg}`);

    document.querySelectorAll('.hero').forEach(h => {
      h.style.background = `linear-gradient(135deg,${t.heroFrom} 0%,${t.heroVia} 50%,${t.heroTo} 100%)`;
    });
    document.querySelectorAll('.theme-dot').forEach(dot => {
      dot.classList.toggle('active', dot.dataset.theme === name);
    });
    Storage.set(KEYS.theme, name);
  },

  load() {
    const saved = Storage.get(KEYS.theme);
    this.apply(THEMES[saved] ? saved : 'ardoise');
  },

  toggle() {
    const names = Object.keys(THEMES);
    const current = Storage.get(KEYS.theme, 'ardoise');
    const next = names[(names.indexOf(current) + 1) % names.length];
    this.apply(next);
    return next;
  }
};

// ═══════════════════════════════════════════════════════════════════
// 6. MODAL SYSTEM
// ═══════════════════════════════════════════════════════════════════

const Modal = {
  openCallback: null, closeCallback: null, lastFocus: null,

  open(options = {}) {
    const wrap = document.getElementById('modalWrap');
    if (!wrap) return;
    this.lastFocus = document.activeElement;
    this.openCallback = options.onOpen;
    this.closeCallback = options.onClose;
    wrap.classList.add('open');
    document.body.style.overflow = 'hidden';
    const input = wrap.querySelector('input, button');
    if (input) setTimeout(() => input.focus(), 50);
    this.trapFocus(wrap);
    if (this.openCallback) this.openCallback();
  },

  close() {
    const wrap = document.getElementById('modalWrap');
    if (!wrap) return;
    wrap.classList.remove('open');
    document.body.style.overflow = '';
    if (this.lastFocus) this.lastFocus.focus();
    if (this.closeCallback) this.closeCallback();
  },

  trapFocus(element) {
    const focusable = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    element.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    });
  },

  handleEscape(e) {
    if (e.key === 'Escape') this.close();
  }
};

// ═══════════════════════════════════════════════════════════════════
// 7. TOAST SYSTEM
// ═══════════════════════════════════════════════════════════════════

const Toast = {
  queue: [], active: false, defaultDuration: 3000,

  show(message, duration) {
    this.queue.push({ message, duration: duration || this.defaultDuration });
    if (!this.active) this.process();
  },

  process() {
    if (this.queue.length === 0) { this.active = false; return; }
    this.active = true;
    const { message, duration } = this.queue.shift();
    const el = document.getElementById('toast');
    if (!el) { console.log('Toast:', message); setTimeout(() => this.process(), duration); return; }
    el.textContent = message;
    el.classList.add('on');
    setTimeout(() => {
      el.classList.remove('on');
      setTimeout(() => this.process(), 300);
    }, duration);
  },

  clear() {
    this.queue = [];
    const el = document.getElementById('toast');
    if (el) el.classList.remove('on');
  }
};

function toast(msg, duration) { Toast.show(msg, duration); }

// ═══════════════════════════════════════════════════════════════════
// 8. ROUTER
// ═══════════════════════════════════════════════════════════════════

const Router = {
  goTo(page, params = {}) {
    let url = page;
    const query = new URLSearchParams();
    const current = PlayerManager.getCurrent();
    if (current && !params.player) query.set('player', current);
    for (let key in params) {
      if (params[key] !== undefined && params[key] !== null) query.set(key, params[key]);
    }
    const qString = query.toString();
    if (qString) url += (url.includes('?') ? '&' : '?') + qString;
    window.location.href = url;
  },

  getParams() { return new URLSearchParams(window.location.search); },

  buildUrl(base, params = {}) {
    const query = new URLSearchParams();
    for (let key in params) {
      if (params[key] !== undefined) query.set(key, params[key]);
    }
    const qString = query.toString();
    return qString ? `${base}?${qString}` : base;
  }
};

// ═══════════════════════════════════════════════════════════════════
// 9. EVENT BUS
// ═══════════════════════════════════════════════════════════════════

const EventBus = {
  events: {},
  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  },
  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  },
  emit(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach(cb => { try { cb(data); } catch (e) { console.error('EventBus error:', e); } });
  }
};

// ═══════════════════════════════════════════════════════════════════
// 10. ANALYTICS STUB
// ═══════════════════════════════════════════════════════════════════

const Analytics = {
  enabled: true,
  setEnabled(val) { this.enabled = val; Storage.set(KEYS.analytics, !val); },
  isEnabled() { return this.enabled && !Storage.get(KEYS.analytics, false); },
  track(event, data = {}) {
    if (!this.isEnabled()) return;
    console.log('[Analytics]', event, data);
  }
};

// ═══════════════════════════════════════════════════════════════════
// 11. FONCTIONS UI PARTAGÉES
// ═══════════════════════════════════════════════════════════════════

function fillSelect(active) {
  const s = document.getElementById('selPlayer');
  if (!s) return;
  const players = PlayerManager.getAll();
  s.innerHTML = '<option value="">' + I18n.t('choosePlayer') + '</option>';
  Object.keys(players).forEach(n => {
    const o = document.createElement('option');
    o.value = n;
    o.textContent = n + ' (Lvl.' + (players[n].currentLevel || 1) + ')';
    if (n === active) o.selected = true;
    s.appendChild(o);
  });
}

function renderHero(p) {
  if (!p) return;
  const done = p.completed || [];
  const score = p.score || 0;
  const lvl = p.currentLevel || 1;

  const els = {
    av: document.getElementById('heroAv'),
    name: document.getElementById('heroName'),
    tag: document.getElementById('heroTag'),
    xpNow: document.getElementById('xpNow'),
    xpGoal: document.getElementById('xpGoal'),
    xpBar: document.getElementById('xpBar'),
    streak: document.getElementById('p_streak'),
    acc: document.getElementById('p_acc'),
    sess: document.getElementById('p_sess')
  };

  if (els.av) els.av.innerHTML = p.name.charAt(0).toUpperCase() + '<span class="hero-lvl-badge">' + lvl + '</span>';
  if (els.name) els.name.textContent = p.name;
  if (els.tag) els.tag.textContent = 'Lvl.' + lvl + ' · ' + score + ' pts · ' + done.length + '/20';

  const ms = score === 0 ? 100 : Math.ceil(score / 100) * 100;
  const xpTextEl = document.querySelector('.xp-text');
  if (xpTextEl) {
    xpTextEl.innerHTML = '<span id="xpNow">' + score + '</span> pts &middot; Next: <span id="xpGoal">' + ms + '</span> pts';
  } else {
    if (els.xpNow) els.xpNow.textContent = score;
    if (els.xpGoal) els.xpGoal.textContent = ms;
  }
  if (els.xpBar) els.xpBar.style.width = Math.round(score % 100) + '%';

  if (els.streak) els.streak.textContent = p.streak || 0;
  const acc = p.totalQuestions > 0 ? Math.round(p.totalCorrect / p.totalQuestions * 100) + '%' : '—';
  if (els.acc) els.acc.textContent = acc;
  if (els.sess) els.sess.textContent = (p.sessionHistory || []).length;
}

function renderBento(p) {
  if (!p) return;
  const b1 = document.getElementById('b1');
  const b2 = document.getElementById('b2');
  const b3 = document.getElementById('b3');
  if (b1) b1.textContent = p.currentLevel || 1;
  if (b2) b2.textContent = p.score || 0;
  if (b3) b3.textContent = (p.completed || []).length + '/20';
}

function loadPlayer(name) {
  if (!name) return;
  const p = PlayerManager.load(name);
  if (!p) return;
  PlayerManager.setCurrent(name);
  if (typeof gameState !== 'undefined') {
    gameState.currentLevel = p.currentLevel;
    gameState.score = p.score;
  }
  renderHero(p);
  renderBento(p);
  fillSelect(name);
  EventBus.emit('playerLoaded', { name, player: p });
}

// ═══════════════════════════════════════════════════════════════════
// 12. EXPORT / IMPORT
// ═══════════════════════════════════════════════════════════════════

function doExport() {
  const data = Storage.exportAll();
  if (Object.keys(data).length === 0) { toast(I18n.t('noData')); return; }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'DailyFrench-backup-' + new Date().toISOString().slice(0, 10) + '.json';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast(I18n.t('exported'));
}

function doImport(ev) {
  const file = ev.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      const count = Storage.importAll(data);
      if (count > 0) {
        PlayerManager.migrate();
        const names = Object.keys(PlayerManager.getAll());
        if (names.length > 0) loadPlayer(names[0]);
        toast(I18n.t('imported'));
      } else {
        toast(I18n.t('invalidFile'));
      }
    } catch { toast(I18n.t('readError')); }
  };
  reader.readAsText(file);
  ev.target.value = '';
}

// ═══════════════════════════════════════════════════════════════════
// 13. INITIALISATION GLOBALE
// ═══════════════════════════════════════════════════════════════════

function initCore() {
  I18n.init();
  Theme.load();
  PlayerManager.migrate();

  // Modal listeners
  const btnCreate = document.getElementById('btnCreatePlayer');
  const btnCancel = document.getElementById('btnCancelModal');
  const inpModal = document.getElementById('mInput');
  const modalWrap = document.getElementById('modalWrap');

  if (btnCreate) {
    btnCreate.addEventListener('click', (e) => {
      e.preventDefault();
      const name = inpModal ? inpModal.value : '';
      const result = PlayerManager.create(name);
      if (result.success) {
        Modal.close();
        loadPlayer(result.player.name);
        toast(I18n.t('welcomePlayer') + ', ' + result.player.name + '! 🎉');
      } else {
        toast(result.error);
      }
    });
  }

  if (btnCancel) {
    btnCancel.addEventListener('click', (e) => { e.preventDefault(); Modal.close(); });
  }

  if (inpModal) {
    inpModal.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); if (btnCreate) btnCreate.click(); }
    });
  }

  if (modalWrap) {
    modalWrap.addEventListener('click', (e) => { if (e.target === modalWrap) Modal.close(); });
    document.addEventListener('keydown', (e) => Modal.handleEscape(e));
  }

  // Vocab popup overlay click
  const vocabModal = document.getElementById('vocabulary-popup-modal');
  if (vocabModal) {
    vocabModal.addEventListener('click', (e) => {
      if (e.target === vocabModal && typeof closeVocabPopup === 'function') closeVocabPopup();
    });
  }

  // Joueur par défaut
  const current = PlayerManager.autoDetect();
  if (current) { loadPlayer(current); } else { fillSelect(null); }

  // Nav active
  (function setActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-bottom .nav-item').forEach(a => {
      const href = (a.getAttribute('href') || '').split('?')[0].split('/').pop();
      const match = href === page ||
        (page === 'quiz.html' && href === 'quiz.html') ||
        (page === 'vocabulary.html' && href === 'vocabulary.html') ||
        (page === 'dashboard.html' && (href === 'dashboard.html' || href === ''));
      a.classList.toggle('active', !!match);
    });
  })();

  // NOUVEAU v2.1 : Charger le direction mode
  if (typeof DirectionMode !== 'undefined') DirectionMode.load();

  EventBus.emit('coreReady', { version: CORE_VERSION });
}

// ═══════════════════════════════════════════════════════════════════
// 14. SETTINGS — Thème, langue, DIRECTION
// ═══════════════════════════════════════════════════════════════════

function toggleSettings() {
  const panel = document.getElementById('settingsPanel');
  if (!panel) return;
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  if (panel.style.display === 'block') {
    setTimeout(() => {
      document.addEventListener('click', function close(e) {
        if (!panel.contains(e.target) && !e.target.classList.contains('btn-settings')) {
          panel.style.display = 'none';
        }
        document.removeEventListener('click', close);
      });
    }, 0);
  }
}

function applyThemePick(name) {
  if (typeof Theme !== 'undefined') Theme.apply(name);
  const panel = document.getElementById('settingsPanel');
  if (panel) panel.style.display = 'none';
}

function applyLangPick(lang) {
  if (typeof I18n !== 'undefined') {
    I18n.current = lang;
    Storage.set('dailyFrench_lang', lang);
  }
  const panel = document.getElementById('settingsPanel');
  if (panel) panel.style.display = 'none';
  location.reload();
}

// NOUVEAU v2.1 — Toggle direction mode
function applyDirectionPick(mode) {
  if (typeof DirectionMode !== 'undefined') {
    DirectionMode.set(mode);
    toast('Direction: ' + DirectionMode.getLabel(mode) + ' 🔄');
  }
  // Met à jour l'affichage des boutons direction
  document.querySelectorAll('.direction-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.direction === mode);
  });
}

// ═══════════════════════════════════════════════════════════════════
// 15. BRIDGE API — Compatibilité anciens appels
// ═══════════════════════════════════════════════════════════════════

function gP() { return PlayerManager.getAll(); }
function sP(d) { return PlayerManager.saveAll(d); }
function getPlayers() { return PlayerManager.getAll(); }
function savePlayers(data) { return PlayerManager.saveAll(data); }
function getPlayerData(name) { return PlayerManager.load(name); }
function switchPlayer(name) {
  PlayerManager.setCurrent(name);
  if (typeof loadPlayer === 'function') loadPlayer(name);
  return PlayerManager.load(name);
}
function updatePlayerDisplay() {
  const current = PlayerManager.getCurrent();
  if (current && typeof loadPlayer === 'function') loadPlayer(current);
}
function deleteCurrentPlayer() {
  const current = PlayerManager.getCurrent();
  if (!current) return;
  PlayerManager.delete(current);
  const remaining = Object.keys(PlayerManager.getAll());
  if (remaining.length > 0) { if (typeof loadPlayer === 'function') loadPlayer(remaining[0]); }
  else { location.reload(); }
}
function showNewPlayerModal() { Modal.open(); }
function confirmNewPlayer() {
  const inp = document.getElementById('mInput');
  if (!inp) return;
  const result = PlayerManager.create(inp.value);
  if (result.success) {
    Modal.close();
    if (typeof loadPlayer === 'function') loadPlayer(result.player.name);
    toast(I18n.t('welcomePlayer') + ', ' + result.player.name + '! 🎉');
    inp.value = '';
  } else {
    toast(result.error);
  }
}
function doCreate() { confirmNewPlayer(); }
function openModal() { Modal.open(); }
function closeModal() { Modal.close(); }
function applyTheme(name) { Theme.apply(name); }
function loadTheme() { Theme.load(); }
function goToQuiz() { window.location.href = 'quiz.html'; }
function goToDashboard() { window.location.href = 'dashboard.html'; }
function goToVocabulary() { window.location.href = 'vocabulary.html'; }

// ═══════════════════════════════════════════════════════════════════
// FIN CORE.JS — v2.1 — 7 juin 2026
// ═══════════════════════════════════════════════════════════════════
