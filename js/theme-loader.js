// js/theme-loader.js — Applique le thème IMMÉDIATEMENT (avant rendu)
(function() {
  var theme = localStorage.getItem('dailyFrench_theme');
  if (theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }
})();
