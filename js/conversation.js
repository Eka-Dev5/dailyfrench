// ═══════════════════════════════════════════════════════════════════
// CONVERSATION.JS — Daily French 🥖 v5.0 MODE MANUEL
// L'utilisateur clique pour avancer. Pas de timer. Pas de auto-next.
// ═══════════════════════════════════════════════════════════════════

var currentScenario = null;
var currentStepIndex = 0;
var userAnswers = [];
var _convInitRetries = 0;

function getScenarioList() {
  if (typeof CONVERSATION_SCENARIOS === 'undefined') return [];
  return Object.values(CONVERSATION_SCENARIOS);
}

// ── INIT ────────────────────────────────────────────────────────────
function initConversation() {
  if (typeof initCore === 'function') initCore();

  if (getScenarioList().length === 0) {
    _convInitRetries++;
    if (_convInitRetries < 50) {
      setTimeout(initConversation, 100);
      return;
    }
    var container = document.getElementById('convScenarios');
    if (container) {
      container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted)">⚠️ Conversations failed to load.</div>';
    }
    return;
  }

  renderScenarioList();
  updateBento();
}

function updateBento() {
  var player = (typeof PlayerManager !== 'undefined' && PlayerManager.current) ? PlayerManager.current : null;
  var b1 = document.getElementById('b1');
  var b2 = document.getElementById('b2');
  var b3 = document.getElementById('b3');
  if (b1) b1.textContent = player ? (player.level || 1) : 1;
  if (b2) b2.textContent = player ? (player.score || 0) : 0;
  if (b3) b3.textContent = player ? ((player.conversationsDone || 0) + '/20') : '0/20';
}

// ── LISTE DES SCÉNARIOS ───────────────────────────────────────────
function renderScenarioList() {
  if (currentScenario !== null) return;

  var container = document.getElementById('convScenarios');
  if (!container) return;

  var list = getScenarioList();
  if (list.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:2rem;">Loading...</div>';
    return;
  }

  container.innerHTML = '';
  var player = (typeof PlayerManager !== 'undefined' && PlayerManager.current) ? PlayerManager.current : null;
  var currentLevel = player ? (player.level || 1) : 1;

  list.forEach(function(scenario) {
    var isLocked = (scenario.requiredLesson || 999) > currentLevel;

    var card = document.createElement('div');
    card.className = 'conv-scenario-card' + (isLocked ? ' conv-locked' : '');
    if (!isLocked) {
      card.addEventListener('click', function() { startScenario(scenario.level); });
    }

    var exchangeCount = 0;
    if (scenario.dialogue) {
      exchangeCount = scenario.dialogue.filter(function(d) { return d.speaker === 'you'; }).length;
    }
    var diffStars = '★'.repeat(scenario.difficulty || 1) + '☆'.repeat(Math.max(0, 3 - (scenario.difficulty || 1)));

    card.innerHTML =
      '<div class="conv-scen-icon">' + (isLocked ? '🔒' : (scenario.icon || '🗣️')) + '</div>' +
      '<div class="conv-scen-info">' +
        '<div class="conv-scen-title">' + escapeHtml(scenario.title) + '</div>' +
        '<div class="conv-scen-subtitle">' + escapeHtml(scenario.titleFr || '') + '</div>' +
        '<div class="conv-scen-meta">' +
          '<span class="conv-scen-diff" title="Difficulty">' + diffStars + '</span>' +
          '<span class="conv-scen-steps">' + exchangeCount + ' exchanges</span>' +
        '</div>' +
      '</div>' +
      '<div class="conv-scen-arrow">▶</div>';

    container.appendChild(card);
  });
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ── DÉMARRER SCÉNARIO ─────────────────────────────────────────────
function startScenario(level) {
  if (typeof CONVERSATION_SCENARIOS === 'undefined' || !CONVERSATION_SCENARIOS[level]) {
    console.error('Scenario ' + level + ' not found');
    return;
  }

  currentScenario = CONVERSATION_SCENARIOS[level];
  currentStepIndex = 0;
  userAnswers = [];

  document.getElementById('convList').style.display = 'none';
  document.getElementById('convSim').style.display = 'block';
  document.getElementById('convResults').style.display = 'none';

  var dialogue = document.getElementById('convDialogue');
  if (dialogue) dialogue.innerHTML = '';

  document.getElementById('convSimIcon').textContent = currentScenario.icon || '🗣️';
  document.getElementById('convSimTitle').textContent = currentScenario.title || 'Scenario';

  // Afficher le setting avec un bouton "Commencer"
  renderSetting();
}

// ── AFFICHER LE SETTING (contexte) ───────────────────────────────
function renderSetting() {
  var dialogue = document.getElementById('convDialogue');
  if (!dialogue) return;

  var settingDiv = document.createElement('div');
  settingDiv.className = 'conv-msg conv-msg-setting';
  settingDiv.id = 'convSettingCard';

  var html =
    '<div class="conv-setting-label">📍 Situation</div>' +
    '<div class="conv-setting-text">' + escapeHtml(currentScenario.setting || 'No context provided.') + '</div>';

  if (currentScenario.vocabulary && currentScenario.vocabulary.length > 0) {
    html += '<div class="conv-setting-vocab"><strong>📝 Vocabulary:</strong> ' + escapeHtml(currentScenario.vocabulary.join(', ')) + '</div>';
  }

  html += '<button class="btn btn-primary" style="margin-top:1rem;" onclick="showNextNpcMessage()">▶ Start the conversation</button>';

  settingDiv.innerHTML = html;
  dialogue.appendChild(settingDiv);
  dialogue.scrollTop = dialogue.scrollHeight;
}

// ── AFFICHER LE MESSAGE NPC SUIVANT ───────────────────────────────
function showNextNpcMessage() {
  // Supprimer le setting s'il est encore là
  var setting = document.getElementById('convSettingCard');
  if (setting) setting.remove();

  var dialogue = document.getElementById('convDialogue');
  var choices = document.getElementById('convChoices');
  var feedback = document.getElementById('convFeedback');

  // Cacher feedback et choices
  if (feedback) feedback.style.display = 'none';
  if (choices) choices.style.display = 'none';

  var step = currentScenario.dialogue[currentStepIndex];
  if (!step) {
    showResults();
    return;
  }

  // Si c'est un message "you", on affiche la question
  if (step.speaker === 'you') {
    renderQuestion(step);
    return;
  }

  // Sinon c'est un message NPC — on l'affiche avec un bouton "Continue"
  var msgDiv = document.createElement('div');
  msgDiv.className = 'conv-msg conv-msg-npc';

  var avatarDiv = document.createElement('div');
  avatarDiv.className = 'conv-msg-avatar';
  avatarDiv.textContent = currentScenario.icon || '🗣️';
  avatarDiv.style.background = 'var(--primary)';

  var bubbleDiv = document.createElement('div');
  bubbleDiv.className = 'conv-msg-bubble';

  var nameDiv = document.createElement('div');
  nameDiv.className = 'conv-msg-npc-name';
  nameDiv.textContent = capitalize(step.speaker || 'NPC');
  bubbleDiv.appendChild(nameDiv);

  var textDiv = document.createElement('div');
  textDiv.className = 'conv-msg-text';
  textDiv.textContent = step.text || '';
  bubbleDiv.appendChild(textDiv);

  msgDiv.appendChild(avatarDiv);
  msgDiv.appendChild(bubbleDiv);
  dialogue.appendChild(msgDiv);

  // Bouton "Continue" pour passer à la suite
  var continueBtn = document.createElement('button');
  continueBtn.className = 'btn btn-primary';
  continueBtn.style.marginTop = '0.75rem';
  continueBtn.style.alignSelf = 'flex-start';
  continueBtn.innerHTML = '▶ Continue';
  continueBtn.onclick = function() {
    continueBtn.remove();
    currentStepIndex++;
    showNextNpcMessage();
  };

  var btnWrapper = document.createElement('div');
  btnWrapper.style.display = 'flex';
  btnWrapper.style.justifyContent = 'center';
  btnWrapper.style.padding = '0.5rem 0';
  btnWrapper.appendChild(continueBtn);
  dialogue.appendChild(btnWrapper);

  dialogue.scrollTop = dialogue.scrollHeight;

  // Mettre à jour la progression
  updateProgress();
}

// ── AFFICHER LA QUESTION (choix de l'utilisateur) ─────────────────
function renderQuestion(step) {
  var dialogue = document.getElementById('convDialogue');
  var choices = document.getElementById('convChoices');

  // Afficher le prompt/question
  var promptDiv = document.createElement('div');
  promptDiv.className = 'conv-msg conv-msg-npc';
  promptDiv.innerHTML =
    '<div class="conv-msg-avatar" style="background:var(--gold);">❓</div>' +
    '<div class="conv-msg-bubble">' +
      '<div class="conv-msg-npc-name">Your turn</div>' +
      '<div class="conv-msg-text">' + escapeHtml(step.text || 'What do you say?') + '</div>' +
    '</div>';
  dialogue.appendChild(promptDiv);
  dialogue.scrollTop = dialogue.scrollHeight;

  // Afficher les choix
  if (choices) {
    choices.innerHTML = '';
    choices.style.display = 'block';

    step.choices.forEach(function(choice, idx) {
      var btn = document.createElement('button');
      btn.className = 'conv-choice-btn';
      btn.id = 'choice-' + idx;
      btn.innerHTML = '<span class="conv-choice-letter">' + String.fromCharCode(65 + idx) + '</span>' +
                      '<span class="conv-choice-text">' + escapeHtml(choice.text) + '</span>';
      btn.addEventListener('click', function() { handleChoice(idx); });
      choices.appendChild(btn);
    });
  }

  updateProgress();
}

// ── HANDLE CHOICE ─────────────────────────────────────────────────
function handleChoice(choiceIndex) {
  if (!currentScenario || !currentScenario.dialogue) return;

  var step = currentScenario.dialogue[currentStepIndex];
  if (!step || !step.choices || !step.choices[choiceIndex]) return;

  var choice = step.choices[choiceIndex];

  userAnswers.push({
    stepIndex: currentStepIndex,
    choiceIndex: choiceIndex,
    correct: choice.correct,
    text: choice.text
  });

  // Désactiver tous les boutons
  var buttons = document.querySelectorAll('.conv-choice-btn');
  buttons.forEach(function(btn, idx) {
    btn.disabled = true;
    if (idx === choiceIndex) btn.classList.add('chosen');
    if (step.choices[idx].correct === true) btn.classList.add('best');
  });

  // Afficher la réponse de l'utilisateur dans le dialogue
  var dialogue = document.getElementById('convDialogue');
  var userMsg = document.createElement('div');
  userMsg.className = 'conv-msg conv-msg-user';
  userMsg.innerHTML =
    '<div class="conv-msg-avatar conv-msg-avatar-user">🧑</div>' +
    '<div class="conv-msg-bubble conv-msg-bubble-user">' +
      '<div class="conv-msg-text">' + escapeHtml(choice.text) + '</div>' +
    '</div>';
  dialogue.appendChild(userMsg);
  dialogue.scrollTop = dialogue.scrollHeight;

  // Cacher les choix
  var choices = document.getElementById('convChoices');
  if (choices) choices.style.display = 'none';

  // Afficher le feedback
  showFeedback(choice);
}

// ── SHOW FEEDBACK ─────────────────────────────────────────────────
function showFeedback(choice) {
  var feedback = document.getElementById('convFeedback');
  var feedbackText = document.getElementById('convFeedbackText');
  var nextBtn = document.getElementById('convNextBtn');

  if (!feedback || !feedbackText) return;

  var borderColor = '#F59E0B';
  if (choice.correct === true) borderColor = '#059669';
  if (choice.correct === false) borderColor = '#DC2626';

  feedback.style.display = 'block';
  feedback.style.borderLeftColor = borderColor;

  var icon = choice.correct === true ? '✅ Correct!' : '❌ Not quite...';
  feedbackText.innerHTML =
    '<div style="font-size:1.1rem;font-weight:700;margin-bottom:0.5rem;">' + icon + '</div>' +
    '<div style="line-height:1.5;">' + escapeHtml(choice.feedback || '') + '</div>';

  if (nextBtn) {
    nextBtn.textContent = '▶ Continue';
    nextBtn.onclick = function() {
      feedback.style.display = 'none';
      currentStepIndex++;
      showNextNpcMessage();
    };
  }

  setTimeout(function() {
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

// ── BOUTON INDICE ─────────────────────────────────────────────────
function showHint() {
  var step = currentScenario.dialogue[currentStepIndex];
  if (!step || !step.choices) return;

  // Trouver la bonne réponse
  var correctChoice = step.choices.find(function(c) { return c.correct === true; });
  if (!correctChoice) return;

  // Créer un indice (premier mot + nombre de mots)
  var words = correctChoice.text.split(' ');
  var hint = '💡 Hint: The answer starts with "' + words[0] + '" and has ' + words.length + ' word' + (words.length > 1 ? 's' : '') + '.';

  var feedback = document.getElementById('convFeedback');
  var feedbackText = document.getElementById('convFeedbackText');
  var nextBtn = document.getElementById('convNextBtn');

  if (feedback && feedbackText) {
    feedback.style.display = 'block';
    feedback.style.borderLeftColor = '#3B82F6'; // bleu pour indice
    feedbackText.innerHTML = '<div style="color:#3B82F6;font-size:1rem;">' + hint + '</div>';

    if (nextBtn) {
      nextBtn.textContent = 'Hide hint';
      nextBtn.onclick = function() {
        feedback.style.display = 'none';
      };
    }
  }
}

// ── MISE À JOUR PROGRESSION ───────────────────────────────────────
function updateProgress() {
  var progress = document.getElementById('convSimProgress');
  if (!progress || !currentScenario || !currentScenario.dialogue) return;

  var total = currentScenario.dialogue.filter(function(d) { return d.speaker === 'you'; }).length;
  var current = userAnswers.length + 1;
  progress.textContent = Math.min(current, total) + ' / ' + total;
}

// ── SHOW RESULTS ──────────────────────────────────────────────────
function showResults() {
  document.getElementById('convSim').style.display = 'none';
  document.getElementById('convResults').style.display = 'block';

  var correct = userAnswers.filter(function(a) { return a.correct === true; }).length;
  var total = userAnswers.length;
  var percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  document.getElementById('convResultScore').textContent = percent + '%';
  document.getElementById('convResultTitle').textContent = percent >= 80 ? '🎉 Excellent!' : percent >= 50 ? '👍 Good effort!' : '💪 Keep practicing!';
  document.getElementById('convResultMsg').textContent = 'You got ' + correct + ' out of ' + total + ' correct.';

  var breakdownEl = document.getElementById('convResultBreakdown');
  if (breakdownEl) {
    breakdownEl.innerHTML = '';
    userAnswers.forEach(function(a, idx) {
      var row = document.createElement('div');
      row.className = 'conv-result-row';
      var icon = a.correct === true ? '✅' : '❌';
      row.innerHTML =
        '<span class="conv-result-icon">' + icon + '</span>' +
        '<span class="conv-result-num">#' + (idx + 1) + '</span>' +
        '<span class="conv-result-text">' + escapeHtml(a.text.substring(0, 40)) + (a.text.length > 40 ? '...' : '') + '</span>';
      breakdownEl.appendChild(row);
    });
  }

  if (typeof PlayerManager !== 'undefined' && PlayerManager.current && percent >= 50) {
    if (!PlayerManager.current.conversationsDone) PlayerManager.current.conversationsDone = 0;
    if (!PlayerManager.current.conversationsLevels) PlayerManager.current.conversationsLevels = [];
    if (PlayerManager.current.conversationsLevels.indexOf(currentScenario.level) === -1) {
      PlayerManager.current.conversationsLevels.push(currentScenario.level);
      PlayerManager.current.conversationsDone = PlayerManager.current.conversationsLevels.length;
    }
    if (typeof savePlayerData === 'function') savePlayerData();
  }

  updateBento();
}

// ── EXIT / RESTART ────────────────────────────────────────────────
function exitConversation() {
  currentScenario = null;
  currentStepIndex = 0;
  userAnswers = [];
  _convInitRetries = 0;
  document.getElementById('convList').style.display = 'block';
  document.getElementById('convSim').style.display = 'none';
  document.getElementById('convResults').style.display = 'none';
  var dialogue = document.getElementById('convDialogue');
  if (dialogue) dialogue.innerHTML = '';
  renderScenarioList();
}

function restartScenario() {
  if (currentScenario) startScenario(currentScenario.level);
}
