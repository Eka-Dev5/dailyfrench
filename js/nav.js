// ═══════════════════════════════════════════════════════════════════
// NAV.JS — Daily French 🥖
// SOURCE UNIQUE DE VÉRITÉ pour les menus haut et bas
// Patch iOS standalone intégré (version validée)
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
    { icon: '📚', label: 'Lessons',   href: 'play.html?section=lecons' },
    { icon: '🎮', label: 'Play',      href: 'play.html?section=levels' },
    { icon: '📖', label: 'Vocab',     href: 'vocabulary.html' },
    { icon: '📊', label: 'Dashboard', href: 'dashboard.html' }
  ];

  function isStandaloneIOS() {
    return window.navigator.standalone === true ||
      (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
  }

  function isInternalHref(href) {
    if (!href) return false;
    if (href.indexOf('#') === 0) return false;
    if (href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) return false;
    if (/^https?:\/\//i.test(href)) return href.indexOf(window.location.origin) === 0;
    return true;
  }

  function handleStandaloneLinks(e) {
    if (!isStandaloneIOS()) return;
    var el = e.target;
    while (el && el.nodeName !== 'A' && el.nodeName !== 'HTML') {
      el = el.parentNode;
    }
    if (!el || el.nodeName !== 'A') return;
    var href = el.getAttribute('href');
    if (!isInternalHref(href)) return;
    if (el.target && el.target !== '_self') return;
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
  } else {
    injectNav();
  }

  document.addEventListener('click', handleStandaloneLinks, true);
  window.injectNav = injectNav;
})();
  window.injectNav = injectNav;
})();
