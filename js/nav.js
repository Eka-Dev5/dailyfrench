// ═══════════════════════════════════════════════════════════════════
// NAV.JS — Daily French 🥖
// SOURCE UNIQUE DE VÉRITÉ pour les menus haut et bas
// 
// À inclure dans TOUTES les pages : <script src="js/nav.js"></script>
// (ou <script src="../js/nav.js"></script> depuis /games/)
// 
// Injection automatique au DOMContentLoaded
// ═══════════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ─── DÉTECTION DU DOSSIER COURANT ───────────────────────────────
  const path = window.location.pathname;
  const isInGamesFolder = path.includes('/games/');
  const prefix = isInGamesFolder ? '../' : '';

  // ─── CONFIG CENTRALE DES MENUS (modifier ici = partout) ─────────
  const TOP_MENU = [
    { icon: '🚨', label: 'SOS',    href: 'emergency.html' },
    { icon: '💬', label: 'Talk',   href: 'conversation.html' },
    { icon: '🎧', label: 'Listen', href: 'games/listen.html' },
    { icon: '🧩', label: 'Phrase', href: 'games/phrase-builder.html' },
    { icon: '⚙️', label: 'Config', href: 'settings.html' }
  ];

  const BOTTOM_MENU = [
    { icon: '🏠', label: 'Start',     href: 'quiz.html' },
    { icon: '📚', label: 'Lessons',   href: 'quiz.html?section=lecons' },
    { icon: '🎮', label: 'Play',      href: 'quiz.html?section=levels' },
    { icon: '📖', label: 'Vocab',     href: 'vocabulary.html' },
    { icon: '📊', label: 'Dashboard', href: 'dashboard.html' }
  ];

  // ─── FONCTION D'INJECTION ───────────────────────────────────────
  function injectNav() {
    if (document.querySelector('.nav-top')) return; // Déjà injecté

    const currentPage = path.split('/').pop() || 'quiz.html';
    const currentHref = window.location.href;

    // Menu haut
    const topNav = document.createElement('nav');
    topNav.className = 'nav-top';
    topNav.innerHTML = TOP_MENU.map(item => {
      const itemHref = prefix + item.href;
      const isActive = currentHref.includes(item.href.replace('games/', ''));
      return `<a href="${itemHref}" class="nav-top-item ${isActive ? 'active' : ''}">
        <span class="nav-top-icon">${item.icon}</span>${item.label}
      </a>`;
    }).join('');
    document.body.insertBefore(topNav, document.body.firstChild);

    // Menu bas
    const bottomNav = document.createElement('nav');
    bottomNav.className = 'nav-bottom';
    bottomNav.innerHTML = BOTTOM_MENU.map(item => {
      const itemHref = prefix + item.href;
      const isActive = currentPage === item.href.split('?')[0] ||
        (item.href.includes('?') && currentHref.includes(item.href.split('?')[1]));
      return `<a href="${itemHref}" class="nav-item ${isActive ? 'active' : ''}">
        <span class="nav-icon">${item.icon}</span><span>${item.label}</span>
      </a>`;
    }).join('');
    document.body.appendChild(bottomNav);
  }

  // ─── LANCEMENT ──────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
  } else {
    injectNav();
  }

  window.injectNav = injectNav;
})();
