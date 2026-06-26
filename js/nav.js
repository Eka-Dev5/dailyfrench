// ═══════════════════════════════════════════════════════════════════
// NAV.JS — Daily French 🥖
// Menu centralisé pour toutes les pages.
// 
// En attendant une refonte plus propre de la navigation iOS/web app,
// ce script injecte automatiquement les menus haut et bas, puis
// intercepte les clics dans le mode "standalone" d’iPhone/iPad afin
// d’éviter que les liens internes n’ouvrent Safari au lieu de rester
// dans l’application web.
// 
// Objectif temporaire : garder une navigation cohérente sur mobile
// sans casser le desktop, en attendant une solution plus robuste.
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
    { icon: '🇫🇷', label: 'Start',     href: 'my-life.html' },
    { icon: '📚', label: 'Lessons',    href: 'play.html?section=lecons' },
    { icon: '🎮', label: 'Play',       href: 'play.html?section=levels' },
    { icon: '📖', label: 'Vocab',      href: 'vocabulary.html' },
    { icon: '📊', label: 'Dashboard',   href: 'dashboard.html' }
  ];

  function injectNav() {
    if (document.querySelector('.nav-top')) return;

    const currentPage = path.split('/').pop() || 'quiz.html';
    const currentHref = window.location.href;

    const topNav = document.createElement('nav');
    topNav.className = 'nav-top';
    topNav.innerHTML = TOP_MENU.map(item => {
      const itemHref = prefix + item.href;
      const itemFile = item.href.replace('games/', '');
      const isActive = currentPage === itemFile || currentHref.includes(itemFile);
      return `<a href="${itemHref}" class="nav-top-item ${isActive ? 'active' : ''}">
        <span class="nav-top-icon">${item.icon}</span>${item.label}
      </a>`;
    }).join('');
    document.body.insertBefore(topNav, document.body.firstChild);

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

  function keepStandaloneLinks() {
    if (!("standalone" in window.navigator) || !window.navigator.standalone) return;

    document.addEventListener('click', function(event) {
      let el = event.target;
      while (el && el.nodeName !== 'A' && el.nodeName !== 'HTML') {
        el = el.parentNode;
      }
      if (!el || el.nodeName !== 'A') return;

      const href = el.getAttribute('href');
      if (!href) return;

      if (href.startsWith('http') && href.indexOf(location.host) === -1) return;

      event.preventDefault();
      window.location.href = href;
    }, false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      injectNav();
      keepStandaloneLinks();
    });
  } else {
    injectNav();
    keepStandaloneLinks();
  }

  window.injectNav = injectNav;
})();
