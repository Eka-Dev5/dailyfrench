// ═══════════════════════════════════════════════════════════════════
// NAV.JS — Daily French 🥖 v3.1
// Injection universelle de la navigation top + bottom
// NE PAS mettre de <nav> en dur dans les pages HTML !
// ═══════════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // Configuration des menus
  const TOP_MENU = [
    { icon: '🚨', label: 'SOS',    href: 'emergency.html' },
    { icon: '💬', label: 'Talk',   href: 'conversation.html' },
    { icon: '🎧', label: 'Listen', href: 'games/listen.html' },
    { icon: '🧩', label: 'Phrase', href: 'games/phrase-builder.html' },
    { icon: '⚙️', label: 'Config', href: 'settings.html' }
  ];

  const BOTTOM_MENU = [
    { icon: '🇫🇷', label: 'Life',      href: 'my-life.html' },
    { icon: '🎮', label: 'Play',      href: 'play.html' },
    { icon: '📚', label: 'Vocab',     href: 'vocabulary.html' },
    { icon: '📊', label: 'Dashboard', href: 'dashboard.html' },
    { icon: '⚙️', label: 'Settings',  href: 'settings.html' }
  ];

  function getPrefix() {
    const path = window.location.pathname;
    if (path.indexOf('/games/') !== -1) return '../';
    return '';
  }

  function isCurrentPage(href) {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    const target = href.split('/').pop().split('?')[0];
    return current === target;
  }

  function injectNav() {
    const prefix = getPrefix();

    // Supprimer les anciennes navs si elles existent (sécurité)
    document.querySelectorAll('.nav-top, .nav-bottom').forEach(function(el) {
      el.remove();
    });

    // === NAV TOP ===
    const topNav = document.createElement('nav');
    topNav.className = 'nav-top';
    topNav.setAttribute('aria-label', 'Secondary navigation');

    TOP_MENU.forEach(function(item) {
      const href = prefix + item.href;
      const a = document.createElement('a');
      a.href = href;
      a.className = 'nav-top-item' + (isCurrentPage(href) ? ' active' : '');
      a.innerHTML = '<span class="nav-top-icon">' + item.icon + '</span><span>' + item.label + '</span>';
      topNav.appendChild(a);
    });

    // === NAV BOTTOM ===
    const bottomNav = document.createElement('nav');
    bottomNav.className = 'nav-bottom';
    bottomNav.setAttribute('aria-label', 'Main navigation');

    BOTTOM_MENU.forEach(function(item) {
      const href = prefix + item.href;
      const a = document.createElement('a');
      a.href = href;
      a.className = 'nav-item' + (isCurrentPage(href) ? ' active' : '');
      a.innerHTML = '<span class="nav-icon">' + item.icon + '</span><span>' + item.label + '</span>';
      bottomNav.appendChild(a);
    });

    // Injection au début du body (avant tout)
    document.body.insertBefore(topNav, document.body.firstChild);
    document.body.appendChild(bottomNav);
  }

  // Exécuter immédiatement si le DOM est prêt, sinon attendre
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
  } else {
    injectNav();
  }
})();
