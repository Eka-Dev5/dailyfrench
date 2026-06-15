// ═══════════════════════════════════════════════════════════════════
// MY-LIFE.JS — My Life in France (simulateur de vie quotidienne)
// Extrait propre de l'ancien dashboard.js
// ═══════════════════════════════════════════════════════════════════

var currentLifeScenario = null;
var currentLifeStep = 0;
var lifeAnswers = [];

function initMyLife() {
  if (typeof initCore === 'function') initCore();
  renderLifeSkills();
  updateBento();
}

function updateBento() {
  var player = (typeof PlayerManager !== 'undefined' && PlayerManager.current) ? PlayerManager.current : null;
  var b1 = document.getElementById('b1');
  var b2 = document.getElementById('b2');
  var b3 = document.getElementById('b3');
  if (b1) b1.textContent = player ? (player.level || 1) : 1;
  if (b2) b2.textContent = player ? (player.score || 0) : 0;
  if (b3) b3.textContent = player ? ((player.lifeScenariosDone || 0) + '/20') : '0/20';
}

// ── RENDU DES COMPÉTENCES DE VIE ──────────────────────────────────
function renderLifeSkills() {
  var container = document.getElementById('lifeSkillsGrid');
  if (!container) return;
  
  if (typeof LIFE_SKILLS === 'undefined') {
    container.innerHTML = '<div style="text-align:center;color:var(--muted);padding:2rem">Loading life skills...</div>';
    return;
  }
  
  container.innerHTML = '';
  
  LIFE_SKILLS.forEach(function(skill) {
    var card = document.createElement('div');
    card.className = 'life-skill-card';
    card.style.borderLeftColor = skill.color || 'var(--primary)';
    card.innerHTML = 
      '<div class="life-skill-header">' +
        '<span class="life-skill-icon">' + (skill.icon || '🎯') + '</span>' +
        '<span class="life-skill-title">' + escapeHtml(skill.title) + '</span>' +
      '</div>' +
      '<div style="font-size:var(--font-sm);color:var(--muted);margin-top:4px">' + escapeHtml(skill.desc || '') + '</div>' +
      '<div class="life-skill-bar-track" style="margin-top:var(--space-sm)">' +
        '<div class="life-skill-bar-fill" style="width:' + ((skill.progress || 0) / 5 * 100) + '%;background:' + (skill.color || 'var(--primary)') + '"></div>' +
      '</div>';
    
    card.addEventListener('click', function() {
      startLifeScenario(skill);
    });
    
    container.appendChild(card);
  });
}

// ── DÉMARRER UN SCÉNARIO <nav class="nav-bottom">
    <a href="my-life.html" class="nav-item active"><span class="nav-icon">🇫🇷</span><span>Life</span></a>
    <a href="play.html" class="nav-item"><span class="nav-icon">🎮</span><span>Play</span></a>
    <a href="vocabulary.html" class="nav-item"><span class="nav-icon">📚</span><span>Vocab</span></a>
    <a href="settings.html" class="nav-item"><span class="nav-icon">⚙️</span><span>Settings</span></a>
  </nav>

  <!-- Scripts -->
  <script src="js/config.js"></script>
  <script src="js/core.js"></script>
  <script src="js/ui-utils.js"></script>
  <script src="js/my-life-data.js"></script>
  <script src="js/my-life.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      if (typeof initMyLife === 'function') initMyLife();
    });
  </script>
</body>
</html>
