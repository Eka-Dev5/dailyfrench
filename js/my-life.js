// ═══════════════════════════════════════════════════════════════════
// MY-LIFE.JS — Daily French 🥖 v1.0
// Page Start = My Life in France
// Dépend de : life-skills-data.js (LIFE_SKILLS, LIFE_SIMULATOR_SCENARIOS,
//             calculateSkillScore, renderStars, getSkillLevelLabel)
// ═══════════════════════════════════════════════════════════════════

var currentLifeScenario = null;
var currentLifeStepIndex = 0;
var lifeAnswers = [];
var _myLifeInitDone = false;

// ── INIT ────────────────────────────────────────────────────────────
function initMyLife() {
  if (typeof initCore === 'function') initCore();

  if (_myLifeInitDone) return;

  if (typeof LIFE_SKILLS !== 'undefined' && LIFE_SKILLS.length > 0) {
    _myLifeInitDone = true;
    renderLifeSkills();
    updateBento();
    return;
  }

  // Polling : attend que life-skills-data.js soit chargé
  var retries = 0;
  var timer = setInterval(function() {
    retries++;
    if (typeof LIFE_SKILLS !== 'undefined' && LIFE_SKILLS.length > 0) {
      clearInterval(timer);
      if (!_myLifeInitDone) {
        _myLifeInitDone = true;
        renderLifeSkills();
        updateBento();
      }
    } else if (retries > 100) {
      clearInterval(timer);
      var container = document.getElementById('lifeSkillsGrid');
      if (container) {
        container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted)">Unable to load life skills data.</div>';
      }
    }
  }, 100);
}

function updateBento() {
  var current = (typeof PlayerManager !== 'undefined') ? PlayerManager.getCurrent() : null;
  var p = current ? PlayerManager.load(current) : null;
  var b1 = document.getElementById('b1');
  var b2 = document.getElementById('b2');
  var b3 = document.getElementById('b3');
  if (b1) b1.textContent = p ? (p.currentLevel || 1) : 1;
  if (b2) b2.textContent = p ? (p.points || 0) : 0;
  var doneCount = p && p.conversationProgress ? Object.keys(p.conversationProgress).length : 0;
  if (b3) b3.textContent = doneCount + '/' + (typeof LIFE_SIMULATOR_SCENARIOS !== 'undefined' ? LIFE_SIMULATOR_SCENARIOS.length : 0);
}

// ── RENDU DE LA GRILLE DES COMPÉTENCES ────────────────────────────
function renderLifeSkills() {
  var container = document.getElementById('lifeSkillsGrid');
  if (!container) return;

  var current = (typeof PlayerManager !== 'undefined') ? PlayerManager.getCurrent() : null;
  var p = current ? PlayerManager.load(current) : null;

  container.innerHTML = '';
  document.querySelectorAll('.mylife-title, .mylife-subtitle').forEach(function(el) {
    el.style.display = 'block';
  });
  hideSimulator();
  hideResults();

  LIFE_SKILLS.forEach(function(skill) {
    var score = calculateSkillScore(skill, p);
    var stars = renderStars(score);
    var level = getSkillLevelLabel(score);

    var card = document.createElement('div');
    card.className = 'life-skill-card';
    card.style.borderLeftColor = skill.color;
    card.innerHTML =
      '<div class="life-skill-header">' +
        '<span class="life-skill-icon">' + skill.icon + '</span>' +
        '<span class="life-skill-title">' + escapeHtml(skill.title) + '</span>' +
      '</div>' +
      '<div style="font-size:var(--font-sm);color:var(--muted)">' + escapeHtml(skill.desc || '') + '</div>' +
      '<div class="life-skill-bar-track">' +
        '<div class="life-skill-bar-fill" style="width:' + ((score / 5) * 100) + '%;background:' + skill.color + '"></div>' +
      '</div>' +
      '<div class="life-skill-score">' +
        '<span>' + stars + '</span>' +
        '<span style="color:' + level.color + '">' + level.label + '</span>' +
      '</div>';

    card.addEventListener('click', function() { openLifeSimulator(skill); });
    container.appendChild(card);
  });
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ── OUVRIR LE SIMULATEUR (liste des scénarios pour une compétence) ──
function openLifeSimulator(skill) {
  document.getElementById('lifeSkillsGrid').style.display = 'none';
  document.querySelectorAll('.mylife-title, .mylife-subtitle').forEach(function(el) {
    el.style.display = 'none';
  });

  var simArea = document.getElementById('simulatorArea');
  simArea.style.display = 'block';
  hideResults();

  document.getElementById('simTitle').textContent = skill.icon + ' ' + skill.title + ' Simulator';

  var dialogue = document.getElementById('simDialogue');
  dialogue.innerHTML = '<div style="font-size:var(--font-sm);color:var(--muted);text-align:center;margin-bottom:var(--space-sm)">Choose a scenario to practise</div>';

  var choices = document.getElementById('simChoices');
  choices.innerHTML = '';
  choices.style.display = 'flex';
  choices.style.flexDirection = 'column';

  LIFE_SIMULATOR_SCENARIOS.forEach(function(scen) {
    var btn = document.createElement('button');
    btn.className = 'sim-choice-btn';
    btn.innerHTML =
      '<span class="sim-choice-letter">' + scen.icon + '</span>' +
      '<span class="sim-choice-text">' + escapeHtml(scen.title) + ' — <span style="color:var(--muted);font-size:var(--font-sm)">' + escapeHtml(scen.desc) + '</span></span>';
    btn.addEventListener('click', function() { startLifeScenario(scen); });
    choices.appendChild(btn);
  });

  document.getElementById('simFeedback').style.display = 'none';
}

// ── DÉMARRER UN SCÉNARIO ──────────────────────────────────────────
function startLifeScenario(scenario) {
  currentLifeScenario = scenario;
  currentLifeStepIndex = 0;
  lifeAnswers = [];
  renderLifeStep();
}

// ── AFFICHER UNE QUESTION DU SCÉNARIO ─────────────────────────────
function renderLifeStep() {
  var questions = currentLifeScenario.questions || [];
  var q = questions[currentLifeStepIndex];

  var dialogue = document.getElementById('simDialogue');
  var choices = document.getElementById('simChoices');
  var feedback = document.getElementById('simFeedback');

  if (feedback) feedback.style.display = 'none';

  if (!q) {
    showLifeResults();
    return;
  }

  dialogue.innerHTML =
    '<div class="sim-msg sim-msg-npc">' +
      '<div class="sim-msg-avatar" style="background:var(--primary)">' + currentLifeScenario.icon + '</div>' +
      '<div class="sim-msg-bubble">' +
        '<div class="sim-msg-npc-name">Question ' + (currentLifeStepIndex + 1) + ' / ' + questions.length + '</div>' +
        '<div class="sim-msg-text">' + escapeHtml(q.question) + '</div>' +
      '</div>' +
    '</div>';

  choices.innerHTML = '';
  choices.style.display = 'flex';
  choices.style.flexDirection = 'column';

  q.options.forEach(function(opt, idx) {
    var btn = document.createElement('button');
    btn.className = 'sim-choice-btn';
    btn.innerHTML =
      '<span class="sim-choice-letter">' + String.fromCharCode(65 + idx) + '</span>' +
      '<span class="sim-choice-text">' + escapeHtml(opt) + '</span>';
    btn.addEventListener('click', function() { handleLifeAnswer(idx); });
    choices.appendChild(btn);
  });
}

// ── TRAITER LA RÉPONSE ────────────────────────────────────────────
function handleLifeAnswer(choiceIdx) {
  var q = currentLifeScenario.questions[currentLifeStepIndex];
  var isCorrect = choiceIdx === q.correct;

  lifeAnswers.push({ question: q.question, correct: isCorrect });

  var buttons = document.querySelectorAll('#simChoices .sim-choice-btn');
  buttons.forEach(function(btn, idx) {
    btn.disabled = true;
    if (idx === choiceIdx) btn.classList.add('chosen');
    if (idx === q.correct) btn.classList.add('best');
  });

  var feedback = document.getElementById('simFeedback');
  var feedbackText = document.getElementById('simFeedbackText');
  var nextBtn = document.getElementById('simNextBtn');

  feedback.style.display = 'block';
  feedback.style.borderLeftColor = isCorrect ? '#059669' : '#DC2626';

  var icon = isCorrect ? '✅ Correct!' : '❌ Not quite...';
  feedbackText.innerHTML =
    '<div style="font-size:1.1rem;font-weight:700;margin-bottom:0.5rem">' + icon + '</div>' +
    '<div style="line-height:1.5">' + escapeHtml(q.explanation || '') + '</div>';

  nextBtn.textContent = '▶ Continue';
  nextBtn.onclick = function() {
    feedback.style.display = 'none';
    currentLifeStepIndex++;
    renderLifeStep();
  };
}

// ── AFFICHER LES RÉSULTATS ─────────────────────────────────────────
function showLifeResults() {
  var questions = currentLifeScenario.questions || [];
  var total = questions.length;
  var correct = lifeAnswers.filter(function(a) { return a.correct; }).length;
  var pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  hideSimulator();

  var results = document.getElementById('simResults');
  results.style.display = 'block';

  document.getElementById('simResultScore').textContent = pct + '%';
  document.getElementById('simResultTitle').textContent =
    pct >= 80 ? '🎉 Excellent!' : pct >= 50 ? '👍 Good effort!' : '💪 Keep practicing!';
  document.getElementById('simResultMsg').textContent = 'You got ' + correct + ' out of ' + total + ' correct.';

  // Sauvegarder le meilleur score
  var current = (typeof PlayerManager !== 'undefined') ? PlayerManager.getCurrent() : null;
  if (current) {
    var p = PlayerManager.load(current);
    if (p) {
      if (!p.conversationProgress) p.conversationProgress = {};
      var prev = p.conversationProgress[currentLifeScenario.id] ? p.conversationProgress[currentLifeScenario.id].bestScore : 0;
      if (pct > prev) {
        p.conversationProgress[currentLifeScenario.id] = { bestScore: pct, date: new Date().toISOString() };
        PlayerManager.save(current, p);
      }
    }
  }

  updateBento();
}

// ── NAVIGATION ─────────────────────────────────────────────────────
function hideSimulator() {
  var simArea = document.getElementById('simulatorArea');
  if (simArea) simArea.style.display = 'none';
}

function hideResults() {
  var results = document.getElementById('simResults');
  if (results) results.style.display = 'none';
}

function backToSkills() {
  currentLifeScenario = null;
  currentLifeStepIndex = 0;
  lifeAnswers = [];
  document.getElementById('lifeSkillsGrid').style.display = 'grid';
  renderLifeSkills();
}

function retryScenario() {
  if (currentLifeScenario) {
    currentLifeStepIndex = 0;
    lifeAnswers = [];
    document.getElementById('simResults').style.display = 'none';
    document.getElementById('simulatorArea').style.display = 'block';
    renderLifeStep();
  }
}

// ── DÉMARRAGE ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  if (typeof initMyLife === 'function') initMyLife();
});
