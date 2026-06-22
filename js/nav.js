// ═══════════════════════════════════════════════════════════════════
// NAV.JS — Daily French 🥖 v3.1
// SOURCE UNIQUE DE VÉRITÉ — menus top + bottom
// CORRECTION v3.1 :
//   - BOTTOM_MENU : 5 boutons propres (Life/Play/Vocab/Dashboard/Settings)
//   - Plus de Lessons séparé, plus de ?section= dans les hrefs bottom
//   - Détection active robuste
// ═══════════════════════════════════════════════════════════════════

(function() {
  'use strict';

  const path = window.location.pathname;
  const isInGamesFolder = path.includes('/games/');
  const prefix = isInGamesFolder ? '../' : '';

  const TOP_MENU = [
    { icon: '🚨', label: 'SOS',    href: 'emergency.html' },
    { icon: '💬', label: 'Talk',   href: 'conversation.html' },
    { icon: '🎧', label: 'Listen', href: 'games/listen.html' },
    { icon: '🧩', label: 'Phrase', href: 'games/sentence-builder.html' },
    { icon: '⚙️', label: 'Config', href: 'settings.html' }
  ];

  const BOTTOM_MENU = [
    { icon: '🇫🇷', label: 'Life',      href: 'my-life.html' },
    { icon: '🎮', label: 'Play',      href: 'play.html' },
    { icon: '📖', label: 'Vocab',     href: 'vocabulary.html' },
    { icon: '📊', label: 'Dashboard', href: 'dashboard.html' },
    { icon: '⚙️', label: 'Settings',  href: 'settings.html' }
  ];

  function injectNav() {
    if (document.querySelector('.nav-top')) return;

    const currentPage = path.split('/').pop() || 'my-life.html';

    // ── Menu haut ───────────────────────────────────────────────
    const topNav = document.createElement('nav');
    topNav.className = 'nav-top';
    topNav.setAttribute('aria-label', 'Top navigation');
    topNav.innerHTML = TOP_MENU.map(function(item) {
      const itemHref  = prefix + item.href;
      const itemFile  = item.href.replace('games/', '');
      const isActive  = currentPage === itemFile;
      return '<a href="' + itemHref + '" class="nav-top-item' + (isActive ? ' active' : '') + '">' +
               '<span class="nav-top-icon">' + item.icon + '</span>' +
               item.label +
             '</a>';
    }).join('');
    document.body.insertBefore(topNav, document.body.firstChild);

    // ── Menu bas ────────────────────────────────────────────────
    const bottomNav = document.createElement('nav');
    bottomNav.className = 'nav-bottom';
    bottomNav.setAttribute('aria-label', 'Bottom navigation');
    bottomNav.innerHTML = BOTTOM_MENU.map(function(item) {
      const itemHref = prefix + item.href;
      const isActive = currentPage === item.href;
      return '<a href="' + itemHref + '" class="nav-item' + (isActive ? ' active' : '') + '">' +
               '<span class="nav-icon">' + item.icon + '</span>' +
               '<span>' + item.label + '</span>' +
             '</a>';
    }).join('');
    document.body.appendChild(bottomNav);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
  } else {
    injectNav();
  }

  window.injectNav = injectNav;
})();
