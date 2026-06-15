// CONVERSATION.JS — adapté au CSS existant (conversation.css)

var currentScenario = null;
var currentStepIndex = 0;
var userAnswers = [];
var isWaitingForNext = false;
var _convInitDone = false;

function getScenarioList() {
  if (typeof CONVERSATION_SCENARIOS === 'undefined') return [];
  return Object.values(CONVERSATION_SCENARIOS);
}

function initConversation() {
  if (typeof initCore === 'function') initCore();
  if (typeof CONVERSATION_SCENARIOS !== 'undefined' && Object.keys(CONVERSATION_SCENARIOS).length > 0) {
    doInitConversation();
    return;
  }
  if (typeof EventBus !== 'undefined') {
    EventBus.on('conversationsLoaded', function handler() {
      doInitConversation();
      EventBus.off('conversationsLoaded', handler);
    });
  }
}

function doInitConversation() {
  if (_convInitDone) return;
  _convInitDone = true;
  renderScenarioList();
  updateBento();
}

function updateBento() {
  var b1 = document.getElementById('b1');
  var b2 = document.getElementById('b2');
  var b3 = document.getElementById('b3');
  var player = (typeof PlayerManager !== 'undefined' && PlayerManager.current) ? PlayerManager.current : null;
  if (b1) b1.textContent = player ? (player.level || 1) : 1;
  if (b2) b2.textContent = player ? (player.score || 0) : 0;
  if (b3) b3.textContent = player ? ((player.conversationsDone || 0) + '/20') : '0/20';
}

// ── RENDER LISTE (classes CSS du fichier existant) ───────────────
function renderScenarioList() {
  var container = document.getElementById('convScenarios');
  if (!container) return;
  var list = getScenarioList();
  if (list.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted)">No scenarios available.</div>';
    return;
  }
  container.innerHTML = '';
  var player = (typeof PlayerManager !== 'undefined' && PlayerManager.current) ? PlayerManager.current : null;
  var currentLevel = player ? (player.level || 1) : 1;

  list.forEach(function(scenario) {
    var isLocked = scenario.requiredLesson > currentLevel;
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
      '<div class="conv-scen-icon">' + (isLocked ? '🔒' : scenario.icon) + '</div>' +
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

// ── DÉMARRER SCÉNARIO();
}

function updateBento() {
  var b1 = document.getElementById('b1');
  var b2 = document.getElementById('b2');
  var b3 = document.getElementById('b3');
  var player = (typeof PlayerManager !== 'undefined' && PlayerManager.current) ? PlayerManager.current : null;
  if (b1) b1.textContent = player ? (player.level || 1) : 1;
  if (b2) b2.textContent = player ? (player.score || 0) : 0;
  if (b3) b3.textContent = player ? ((player.conversationsDone || 0) + '/20') : '0/20';
}

// ── RENDER LISTE (classes CSS du fichier existant) ───────────────
function renderScenarioList() {
  var container = document.getElementById('convScenarios');
  if (!container) return;
  var list = getScenarioList();
  if (list.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted)">No scenarios available.</div>';
    return;
  }
  container.innerHTML = '';
  var player = (typeof PlayerManager !== 'undefined' && PlayerManager.current) ? PlayerManager.current : null;
  var currentLevel = player ? (player.level || 1) : 1;

  list.forEach(function(scenario) {
    var isLocked = scenario.requiredLesson > currentLevel;
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
      '<div class="conv-scen-icon">' + (isLocked ? '🔒' : scenario.icon) + '</div>' +
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

// ── DÉMARRER SCÉNARIO ────────────────────────────────────────────
function startScenario(level) {
  if (typeof CONVERSATION_SCENARIOS === 'undefined' || !CONVERSATION_SCENARIOS[level]) return;
  currentScenario = CONVERSATION_SCENARIOS[level];
  currentStepIndex = 0;
  userAnswers = [];
  isWaitingForNext = false;

  document.getElementById('convList').style.display = 'none';
  document.getElementById('convSim').style.display = '();
}

function updateBento() {
  var b1 = document.getElementById('b1');
  var b2 = document.getElementById('b2');
  var b3 = document.getElementById('b3');
  var player = (typeof PlayerManager !== 'undefined' && PlayerManager.current) ? PlayerManager.current : null;
  if (b1) b1.textContent = player ? (player.level || 1) : 1;
  if (b2) b2.textContent = player ? (player.score || 0) : 0;
  if (b3) b3.textContent = player ? ((player.conversationsDone || 0) + '/20') : '0/20';
}

// ── RENDER LISTE (classes CSS du fichier existant) ───────────────
function renderScenarioList() {
  var container = document.getElementById('convScenarios');
  if (!container) return;
  var list = getScenarioList();
  if (list.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted)">No scenarios available.</div>';
    return;
  }
  container.innerHTML = '';
  var player = (typeof PlayerManager !== 'undefined' && PlayerManager.current) ? PlayerManager.current : null;
  var currentLevel = player ? (player.level || 1) : 1;

  list.forEach(function(scenario) {
    var isLocked = scenario.requiredLesson > currentLevel;
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
      '<div class="conv-scen-icon">' + (isLocked ? '🔒' : scenario.icon) + '</div>' +
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

// ── DÉMARRER SCÉNARIO ────────────────────────────────────────────
function startScenario(level) {
  if (typeof CONVERSATION_SCENARIOS === 'undefined' || !CONVERSATION_SCENARIOS[level]) return;
  currentScenario = CONVERSATION_SCENARIOS[level];
  currentStepIndex = 0;
  userAnswers = [];
  isWaitingForNext = false;

  document.getElementById('convList').style.display = 'none';
  document.getElementById('convSim').style.display = 'block';
  document.getElementById('convResults').style.display = 'none';

  // Vider le dialogue au démarrage
  var dialogue = document.getElementById('convDialogue');
  if (dialogue) dialogue.innerHTML = '';

  renderSetting();
}

// ── AFFICHER LE SETTING ──────────────────────────────────────────
function renderSetting() {
  var dialogue = document.getElementById('convDialogue');
  if (!dialogue) return;

  var contextCard = document.createElement('div');
  contextCard.className = 'conv-msg conv-msg-setting';
  contextCard.innerHTML =
    '<div class="conv-setting-label">📍 Situation</div>' +
    '<div class="conv-setting-text">' + escapeHtml(currentScenario.setting || '') + '</div>' +
    '<div class="conv-setting-vocab"><strong>Vocabulary:</strong> ' + escapeHtml((currentScenario.vocabulary || []).join(', ')) + '</div>' +
    '<button class="btn btn-primary" style="margin-top:1rem;" onclick="renderStep()">Start the conversation →</button>';

  dialogue.appendChild(contextCard);
}

// ── RENDER ÉTAPE (bulles de chat) ─────────────────────────────────
function renderStep() {
  if (!currentScenario || !currentScenario.dialogue) return;

  var step = currentScenario.dialogue[currentStepIndex];
  if (!step) {
    showResults();
    return;
  }

  var dialogue = document.getElementById('convDialogue');
  var choices = document.getElementById('convChoices');
  var feedback = document.getElementById('convFeedback');
  var progress = document.getElementById('convSimProgress');

  var total = currentScenario.dialogue.filter(function(d) { return d.speaker === 'you'; }).length;
  var current = userAnswers.length + 1;
  if (progress) progress.textContent = current + ' / ' + total;

  if (feedback) feedback.style.display = 'none';

  // Créer le message
  var msgDiv = document.createElement('div');
  msgDiv.className = 'conv-msg ' + (step.speaker === 'you' ? 'conv-msg-user' : 'conv-msg-npc');
  msgDiv.style.animationDelay = '0ms';

  var avatarDiv = document.createElement('div');
  avatarDiv.className = 'conv-msg-avatar' + (step.speaker === 'you' ? ' conv-msg-avatar-user' : '');
  avatarDiv.textContent = step.speaker === 'you' ? '🧑' : (currentScenario.icon || '🗣️');
  avatarDiv.style.background = step.speaker === 'you' ? '' : 'var(--primary)';

  var bubbleDiv = document.createElement('div');
  bubbleDiv.className = 'conv-msg-bubble' + (step.speaker === 'you' ? ' conv-msg-bubble-user' : '');

  if (step.speaker !== 'you') {
    var nameDiv = document.createElement('div');
    nameDiv.className = 'conv-msg-npc-name';
    nameDiv.textContent = step.speaker === 'neighbour' ? 'Neighbour' : step.speaker === 'friend' ? 'Friend' : step.speaker === 'vendor' ? 'Vendor' : step.speaker === 'cashier' ? 'Cashier' : step.speaker === 'landlord' ? 'Landlord' : step.speaker === 'colleague' ? 'Colleague' : step.speaker === 'agent' ? 'Agent' : step.speaker === 'waiter' ? 'Waiter' : step.speaker === 'receptionist' ? 'Receptionist' : step.speaker === 'doctor' ? 'Doctor' : 'NPC';
    bubbleDiv.appendChild(nameDiv);
  }

  var textDiv = document.createElement('div');
  textDiv.className = 'conv-msg-text';
  textDiv.textContent = step.text || '';
  bubbleDiv.appendChild(textDiv);

  msgDiv.appendChild(bubbleDiv);
  msgDiv.appendChild(avatarDiv);
  dialogue.appendChild(msgDiv);

  // Scroll vers le bas
  dialogue.scrollTop = dialogue.scrollHeight;

  // Choices
  if (step.speaker === 'you' && step.choices) {
    choices.innerHTML = '';
    choices.style.display = 'block';
    step.choices.forEach(function(choice, idx) {
      var btn = document.createElement('button');
      btn.className = 'conv-choice-btn';
      btn.innerHTML = '<span class="conv-choice-letter">' + String.fromCharCode(65 + idx) + '</span>' +
                      '<span class="conv-choice-text">' + escapeHtml(choice.text) + '</span>';
      btn.addEventListener('click', function() { handleChoice(idx); });
      choices.appendChild(btn);
    });
  } else {
();
}

function updateBento() {
  var b1 = document.getElementById('b1');
  var b2 = document.getElementById('b2');
  var b3 = document.getElementById('b3');
  var player = (typeof PlayerManager !== 'undefined' && PlayerManager.current) ? PlayerManager.current : null;
  if (b1) b1.textContent = player ? (player.level || 1) : 1;
  if (b2) b2.textContent = player ? (player.score || 0) : 0;
  if (b3) b3.textContent = player ? ((player.conversationsDone || 0) + '/20') : '0/20';
}

// ── RENDER LISTE (classes CSS du fichier existant) ───────────────
function renderScenarioList() {
  var container = document.getElementById('convScenarios');
  if (!container) return;
  var list = getScenarioList();
  if (list.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted)">No scenarios available.</div>';
    return;
  }
  container.innerHTML = '';
  var player = (typeof PlayerManager !== 'undefined' && PlayerManager.current) ? PlayerManager.current : null;
  var currentLevel = player ? (player.level || 1) : 1;

  list.forEach(function(scenario) {
    var isLocked = scenario.requiredLesson > currentLevel;
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
      '<div class="conv-scen-icon">' + (isLocked ? '🔒' : scenario.icon) + '</div>' +
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

// ── DÉMARRER SCÉNARIO ────────────────────────────────────────────
function startScenario(level) {
  if (typeof CONVERSATION_SCENARIOS === 'undefined' || !CONVERSATION_SCENARIOS[level]) return;
  currentScenario = CONVERSATION_SCENARIOS[level];
  currentStepIndex = 0;
  userAnswers = [];
  isWaitingForNext = false;

  document.getElementById('convList').style.display = 'none';
  document.getElementById('convSim').style.display = 'block';
  document.getElementById('convResults').style.display = 'none';

  // Vider le dialogue au démarrage
  var dialogue = document.getElementById('convDialogue');
  if (dialogue) dialogue.innerHTML = '';

  renderSetting();
}

// ── AFFICHER LE SETTING ──────────────────────────────────────────
function renderSetting() {
  var dialogue = document.getElementById('convDialogue');
  if (!dialogue) return;

  var contextCard = document.createElement('div');
  contextCard.className = 'conv-msg conv-msg-setting';
  contextCard.innerHTML =
    '<div class="conv-setting-label">📍 Situation</div>' +
    '<div class="conv-setting-text">' + escapeHtml(currentScenario.setting || '') + '</div>' +
    '<div class="conv-setting-vocab"><strong>Vocabulary:</strong> ' + escapeHtml((currentScenario.vocabulary || []).join(', ')) + '</div>' +
    '<button class="btn btn-primary" style="margin-top:1rem;" onclick="renderStep()">Start the conversation →</button>';

  dialogue.appendChild(contextCard);
}

// ── RENDER ÉTAPE (bulles de chat) ─────────────────────────────────
function renderStep() {
  if (!currentScenario || !currentScenario.dialogue) return;

  var step = currentScenario.dialogue[currentStepIndex];
  if (!step) {
    showResults();
    return;
  }

  var dialogue = document.getElementById('convDialogue');
  var choices = document.getElementById('convChoices');
  var feedback = document.getElementById('convFeedback');
  var progress = document.getElementById('convSimProgress');

  var total = currentScenario.dialogue.filter(function(d) { return d.speaker === 'you'; }).length;
  var current = userAnswers.length + 1;
  if (progress) progress.textContent = current + ' / ' + total;

  if (feedback) feedback.style.display = 'none';

  // Créer le message
  var msgDiv = document.createElement('div');
  msgDiv.className = 'conv-msg ' + (step.speaker === 'you' ? 'conv-msg-user' : 'conv-msg-npc');
  msgDiv.style.animationDelay = '0ms';

  var avatarDiv = document.createElement('div');
  avatarDiv.className = 'conv-msg-avatar' + (step.speaker === 'you' ? ' conv-msg-avatar-user' : '');
  avatarDiv.textContent = step.speaker === 'you' ? '🧑' : (currentScenario.icon || '🗣️');
  avatarDiv.style.background = step.speaker === 'you' ? '' : 'var(--primary)';

  var bubbleDiv = document.createElement('div');
  bubbleDiv.className = 'conv-msg-bubble' + (step.speaker === 'you' ? ' conv-msg-bubble-user' : '');

  if (step.speaker !== 'you') {
    var nameDiv = document.createElement('div');
    nameDiv.className = 'conv-msg-npc-name';
    nameDiv.textContent = step.speaker === 'neighbour' ? 'Neighbour' : step.speaker === 'friend' ? 'Friend' : step.speaker === 'vendor' ? 'Vendor' : step.speaker === 'cashier' ? 'Cashier' : step.speaker === 'landlord' ? 'Landlord' : step.speaker === 'colleague' ? 'Colleague' : step.speaker === 'agent' ? 'Agent' : step.speaker === 'waiter' ? 'Waiter' : step.speaker === 'receptionist' ? 'Receptionist' : step.speaker === 'doctor' ? 'Doctor' : 'NPC';
    bubbleDiv.appendChild(nameDiv);
  }

  var textDiv = document.createElement('div');
  textDiv.className = 'conv-msg-text';
  textDiv.textContent = step.text || '';
  bubbleDiv.appendChild(textDiv);

  msgDiv.appendChild(bubbleDiv);
  msgDiv.appendChild(avatarDiv);
  dialogue.appendChild(msgDiv);

  // Scroll vers le bas
  dialogue.scrollTop = dialogue.scrollHeight;

  // Choices
  if (step.speaker === 'you' && step.choices) {
    choices.innerHTML = '';
    choices.style.display = 'block';
    step.choices.forEach(function(choice, idx) {
      var btn = document.createElement('button');
      btn.className = 'conv-choice-btn';
      btn.innerHTML = '<span class="conv-choice-letter">' + String.fromCharCode(65 + idx) + '</span>' +
                      '<span class="conv-choice-text">' + escapeHtml(choice.text) + '</span>';
      btn.addEventListener('click', function() { handleChoice(idx); });
      choices.appendChild(btn);
    });
  } else {
    choices.innerHTML = '';
    choices.style.display = 'none';
    if (!step.choices) {
      setTimeout(function() { currentStepIndex++; renderStep(); }, 1500);
    }
  }
}

// ── HANDLE CHOICE ───────────────────────────────────────────────
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

  // Désactiver les boutons
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
    '<div class="conv-msg-bubble conv-msg-bubble-user">' +
      '<div class="conv-msg-text">' + escapeHtml(choice.text) + '</div>' +
    '</div>' +
    '<div class="conv-msg-avatar conv-msg-avatar-user">🧑</div>';
  dialogue.appendChild(userMsg);
  dialogue.scrollTop = dialogue.scrollHeight;

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
  feedbackText.innerHTML = '<div style="margin-bottom:0.5rem;">' + (choice.correct === true ? '✅ ' : '❌ ') + '</div>' + escapeHtml(choice.feedback || '');

  var choices = document.getElementById('convChoices');
  if (choices) choices.style.display = 'none';

  if (nextBtn) {
    nextBtn.onclick = function() {
      feedback.style.display = 'none';
      currentStepIndex++;
      renderStep();
    };
  }

  setTimeout(function() { feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 100);
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
  isWaitingForNext = false;
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
