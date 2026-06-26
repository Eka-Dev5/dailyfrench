// ═══════════════════════════════════════════════════════════════════
// NAV.JS — Daily French 🥖
// Navigation centralisée pour toutes les pages.
//
// Ce fichier injecte les menus haut et bas, sans modifier le reste du site.
// Il contient aussi un petit correctif iOS standalone pour éviter qu’un
// clic sur le menu n’ouvre Safari au lieu de rester dans la web app.
//
// Important : le correctif est limité aux liens du menu injecté.
// On évite volontairement d’intercepter tous les liens du document,
// afin de réduire au maximum les effets de bord.
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
    { icon: '📊', label: 'Dashboard',  href: 'dashboard.html' }
  ];

  function isStandaloneIOS() {
    return (window.navigator.standalone === true) ||
      (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
  }

  function shouldHandleHref(href) {
    if (!href) return false;
    if (href.indexOf('#') === 0) return false;
    if (href.indexOf('mailto:') === 0) return false;
    if (href.indexOf('tel:') === 0) return false;
    return true;
  }

  function preventSafariForMenuLinks(e) {
    if (!isStandaloneIOS()) return;

    var link = e.currentTarget;
    if (!link || link.nodeName !== 'A') return;

    var href = link.getAttribute('href');
    if (!shouldHandleHref(href)) return;
    if (link.target && link.target !== '_self') return;

    e.preventDefault();
    window.location.href = href;
  }

  function injectNav() {
    if (document.querySelector('.nav-top')) return;

    const currentPage = path.split('/').pop() || 'index.html';
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

    topNav.querySelectorAll('a[href]').forEach(function(a) {
      a.addEventListener('click', preventSafariForMenuLinks, false);
    });

    document.body.insertBefore(topNav, document.body.firstChild);

    const bottomNav = document.createElement('nav');
    bottomNav.className = 'nav-bottom';
    bottomNav.innerHTML = BOTTOM_MENU.map(item => {
      const itemHref = prefix + item.href;
      const itemBase = item.href.split('?')[0];
      const isActive = currentPage === itemBase ||
        (item.href.includes('?') && currentHref.indexOf(item.href.split('?')[1]) !== -1);

      return `<a href="${itemHref}" class="nav-item ${isActive ? 'active' : ''}">
        <span class="nav-icon">${item.icon}</span><span>${item.label}</span>
      </a>`;
    }).join('');

    bottomNav.querySelectorAll('a[href]').forEach(function(a) {
      a.addEventListener('click', preventSafariForMenuLinks, false);
    });

    document.body.appendChild(bottomNav);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
  } else {
    injectNav();
  }

  window.injectNav = injectNav;
})();
