// ═══════════════════════════════════════════════════════════════════
// MY-LIFE.JS — My Life in France v1.0
// Simulateur de vie quotidienne (extrait propre de l'ancien dashboard)
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

// ── RENDU DES COMPÉTENCES ─────────────────────────────────────────
function renderLifeSkills() {
  var container = document.getElementById('lifeSkillsGrid');
  if (!container) return;

  if (typeof LIFE_SKILLS === 'undefined') {
    container.innerHTML = '<div style="text-align:center;color:var(--muted);padding:2rem">Loading life skills...</div>';
    return;
  }

  container.innerHTML = '';
  container.style.display = 'grid';

  var player = PlayerManager.current;

  LIFE_SKILLS.forEach(function(skill) {
    var score = 0;
    if (typeof calculateSkillScore === 'function') {
      score = calculateSkillScore(skill, player);
    }

    var card = document.createElement('div');
    card.className = 'life-skill-card';
    card.style.borderLeftColor = skill.color || 'var(--primary)';

    var stars = '';
    if (typeof renderStars === 'function') {
      stars = renderStars(score);
    }

    var levelLabel = '';
    if (typeof getSkillLevelLabel === 'function') {
      levelLabel = getSkillLevelLabel(score);
    }

    card.innerHTML =
      '<div class="life-skill-header">' +
        '<span class="life-skill-icon">' + (skill.icon || '🎯') + '</span>' +
        '<span class="life-skill-title">' + escapeHtml(skill.title) + '</span>' +
      '</div>' +
      '<div style="font-size:var(--font-sm);color:var(--muted);margin-top:4px">' + escapeHtml(skill.desc || '') + '</div>' +
      '<div class="life-skill-bar-track" style="margin-top:var(--space-sm)">' +
        '<div class="life-skill-bar-fill" style="width:' + ((score / 5) * 100) + '%;background:' + (skill.color || 'var(--primary)') + '"></div>' +
      '</div>' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">' +
        '<span style="font-size:var(--font-xs);color:var(--subtle)">' + stars + '</span>' +
        '<span style="font-size:var(--font-xs);color:' + (skill.color || 'var(--primary)') + ';font-weight:600">' + levelLabel + '</span>' +
      '</div>';

    card.addEventListener('click', function() {
      startLifeScenario(skill);
    });

    container.appendChild(card);
  });
}

// ── DÉMARRER UN SCÉNARIO ───────────────────────────────────────────
function startLifeScenario(skill) {
  if (!skill.scenarios || skill.scenarios.length === 0) {
    // Utiliser les scénarios globaux si pas de scénarios spécifiques
    if (typeof LIFE_SIMULATOR_SCENARIOS !== 'undefined' && LIFE_SIMULATOR_SCENARIOS.length > 0) {
      var scenario = LIFE_SIMULATOR_SCENARIOS.find(function(s) {
        return s.id === skill.id || s.id === skill.convScenarios[0];
      });
      if (!scenario) scenario = LIFE_SIMULATOR_SCENARIOS[0];
      launchScenario(scenario);
    } else {
      showToast('No scenarios available for this skill yet.');
    }
    return;
  }

  var scenario = skill.scenarios[0];
  launchScenario(scenario);
}

function launchScenario(scenario) {
  currentLifeScenario = scenario;
  currentLifeStep = 0;
  lifeAnswers = [];

  // Cacher la grille, montrer le simulateur
  document.getElementById('lifeSkillsGrid').style.display = 'none';
  document.querySelector('.mylife-title').style.display = 'none';
  document.querySelector('.mylife-subtitle').style.display = 'none';

  var simArea = document.getElementById('simulatorArea');
  simArea.style.display = 'block';
  document.getElementById('simResults').style.display = 'none';

  document.getElementById('simTitle').textContent = (scenario.icon || '🎯') + ' ' + (scenario.title || 'Scenario');

  var dialogue = document.getElementById('simDialogue');
  if (dialogue) dialogue.innerHTML = '';

  renderLifeStep();
}

// ── AFFICHER UNE ÉTAPE ───────────────────────────────────────────
function renderLifeStep() {
  var dialogue = document.getElementById('simDialogue');
  var choices = document.getElementById('simChoices');
  var feedback = document.getElementById('simFeedback');

  if (feedback) feedback.style.display = 'none';

  var steps = currentLifeScenario.questions || currentLifeScenario.steps || [];
  var step = steps[currentLifeStep];
  if (!step) {
    showLifeResults();
    return;
  }

  // Message NPC (la question)
  var msgDiv = document.createElement('div');
  msgDiv.className = 'sim-msg sim-msg-npc';
  msgDiv.innerHTML =
    '<div class="sim-msg-avatar" style="background:var(--primary)">' + (currentLifeScenario.icon || '🗣️') + '</div>' +
    '<div class="sim-msg-bubble">' +
      '<div class="sim-msg-npc-name">Situation</div>' +
      '<div class="sim-msg-text">' + escapeHtml(step.question || '') + '</div>' +
    '</div>';
  dialogue.appendChild(msgDiv);

  // Choix
  if (choices && step.options) {
    choices.innerHTML = '';
    choices.style.display = 'block';

    step.options.forEach(function(opt, idx) {
      var btn = document.createElement('button');
      btn.className = 'sim-choice-btn';
      btn.innerHTML =
        '<span class="sim-choice-letter">' + String.fromCharCode(65 + idx) + '</span>' +
        '<span class="sim-choice-text">' + escapeHtml(opt) + '</span>';
      btn.addEventListener('click', function() { handleLifeChoice(idx); });
      choices.appendChild(btn);
    });
  }

  dialogue.scrollTop = dialogue.scrollHeight;
}

// ── HANDLE CHOICE ────────────────────────────────────────────────
function handleLifeChoice(choiceIndex) {
  var steps = currentLifeScenario.questions || currentLifeScenario.steps || [];
  var step = steps[currentLifeStep];
  if (!step || !step.options || !step.options[choiceIndex]) return;

  var isCorrect = choiceIndex === step.correct;

  lifeAnswers.push({
    stepIndex: currentLifeStep,
    choiceIndex: choiceIndex,
    correct: isCorrect,
    text: step.options[choiceIndex]
  });

  // Désactiver les boutons
  var buttons = document.querySelectorAll('.sim-choice-btn');
  buttons.forEach(function(btn, idx) {
    btn.disabled = true;
    if (idx === choiceIndex) btn.classList.add('chosen');
    if (idx === step.correct) btn.classList.add('best');
  });

  // Message joueur
  var dialogue = document.getElementById('simDialogue');
  var userMsg = document.createElement('div');
  userMsg.className = 'sim-msg sim-msg-user';
  userMsg.innerHTML =
    '<div class="sim-msg-avatar sim-msg-avatar-user">🧑</div>' +
    '<div class="sim-msg-bubble sim-msg-bubble-user">' +
      '<div class="sim-msg-text">' + escapeHtml(step.options[choiceIndex]) + '</div>' +
    '</div>';
  dialogue.appendChild(userMsg);
  dialogue.scrollTop = dialogue.scrollHeight;

  // Cacher les choix
  var choices = document.getElementById('simChoices');
  if (choices) choices.style.display = 'none';

  // Feedback
  showLifeFeedback(isCorrect, step);
}

// ── FEEDBACK ─────────────────────────────────────────────────────
function showLifeFeedback(isCorrect, step) {
  var feedback = document.getElementById('simFeedback');
  var feedbackText = document.getElementById('simFeedbackText');
  var nextBtn = document.getElementById('simNextBtn');

  if (!feedback || !feedbackText) return;

  var borderColor = isCorrect ? '#059669' : '#DC2626';
  var icon = isCorrect ? '✅ Correct!' : '❌ Not quite...';

  feedback.style.display = 'block';
  feedback.style.borderLeftColor = borderColor;

  feedbackText.innerHTML =
    '<div style="font-size:1.1rem;font-weight:700;margin-bottom:0.5rem">' + icon + '</div>' +
    '<div style="line-height:1.5">' + escapeHtml(step.explanation || '') + '</div>';

  if (nextBtn) {
    nextBtn.textContent = '▶ Continue';
    nextBtn.onclick = function() {
      feedback.style.display = 'none';
      currentLifeStep++;
      renderLifeStep();
    };
  }

  setTimeout(function() {
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

// ── RÉSULTATS ──────────────────────────────────────────────────────
function showLifeResults() {
  document.getElementById('simulatorArea').style.display = 'none';
  document.getElementById('simResults').style.display = 'block';

  var correct = lifeAnswers.filter(function(a) { return a.correct; }).length;
  var total = lifeAnswers.length;
  var percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  document.getElementById('simResultScore').textContent = percent + '%';
  document.getElementById('simResultTitle').textContent = percent >= 80 ? '🎉typeof renderDirectionSelector === 'function') renderDirectionSelector();
    });
  </script>
</body>
</html>
