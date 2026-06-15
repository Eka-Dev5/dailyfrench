// ═══════════════════════════════════════════════════════════════════
// CONVERSATION.JS — Daily French 🥖
// Adapté au format des fichiers conversation-XX.js
// ═══════════════════════════════════════════════════════════════════

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

  var retries = 0;
  var timer = setInterval(function() {
    retries++;
    if (typeof CONVERSATION_SCENARIOS !== 'undefined' && Object.keys(CONVERSATION_SCENARIOS).length > 0) {
      clearInterval(timer);
      doInitConversation();
    } else if (retries > 50) {
      clearInterval(timer);
      var container = document.getElementById('convScenarios');
      if (container) {
        container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted)">⚠️ Conversations failed to load.</div>';
      }
    }
  }, 100);
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

function renderScenarioList() {
  if (currentScenario !== null) return;
  var container = document.getElementById('convScenarios');
  if (!container) return;
  var list = getScenarioList();
  if (list.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted)">No scenarios available.</div>';
    return;
  }
  var html = '';
  var player = (typeof PlayerManager !== 'undefined' && PlayerManager.current) ? PlayerManager.current : null;
  var currentLevel = player ? (player.level || 1) : 1;
  list.forEach(function(scenario) {
    var isLocked = scenario.requiredLesson > currentLevel;
    var lockClass = isLocked ? 'conv-locked' : '';
    var lockIcon = isLocked ? '🔒' : scenario.icon;
    var onclick = isLocked ? '' : 'onclick="startScenario(' + scenario.level + ')"';
    html += '<div class="conv-card ' + lockClass + '" ' + onclick + '>' +
      '<div class="conv-card-icon">' + lockIcon + '</div>' +
      '<div class="conv-card-info">' +
        '<div class="conv-card-title">' + escapeHtml(scenario.title) + '</div>' +
        '<div class="conv-card-sub">' + escapeHtml(scenario.titleFr) + '</div>' +
        '<div class="conv-card-meta">Level ' + scenario.level + ' • ' + (scenario.difficulty === 1 ? 'Easy' : scenario.difficulty === 2 ? 'Medium' : 'Hard') + '</div>' +
      '</div>' +
    '</div>';
  });
  container.innerHTML = html;
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function startScenario(level) {
  if (typeof CONVERSATION_SCENARIOS === 'undefined' || !CONVERSATION_SCENARIOS[level]) return;
  currentScenario = CONVERSATION_SCENARIOS[level];
  currentStepIndex = 0;
  userAnswers = [];
  isWaitingForNext = false;
  document.getElementById('convList').style.display = 'none';
  document.getElementById('convSim').style.display = 'block';
  document.getElementById('convResults').style.display = 'none';
  document.getElementById('convSimIcon').textContent = currentScenario.icon;
  document.getElementById('convSimTitle').textContent = currentScenario.title;
  renderStep();
}

function renderStep() {
  var dialogue = document.getElementById('convDialogue');
  var choices = document.getElementById('convChoices');
  var feedback = document.getElementById('convFeedback');
  var progress = document.getElementById('convSimProgress');
  if (!currentScenario || !currentScenario.dialogue) return;
  var step = currentScenario.dialogue[currentStepIndex];
  if (!step) { showResults(); return; }
  var total = currentScenario.dialogue.filter(function(d) { return d.speaker === 'you'; }).length;
  var current = userAnswers.length + 1;
  if (progress) progress.textContent = current + ' / ' + total;
  if (feedback) feedback.style.display = 'none';
  var speakerClass = step.speaker === 'you' ? 'conv-msg-you' : 'conv-msg-npc';
  var speakerLabel = step.speaker === 'you' ? 'You' : (step.speaker === 'neighbour' ? 'Neighbour' : step.speaker === 'friend' ? 'Friend' : step.speaker === 'vendor' ? 'Vendor' : step.speaker === 'cashier' ? 'Cashier' : step.speaker === 'landlord' ? 'Landlord' : step.speaker === 'colleague' ? 'Colleague' : step.speaker === 'agent' ? 'Agent' : step.speaker === 'waiter' ? 'Waiter' : step.speaker === 'receptionist' ? 'Receptionist' : step.speaker === 'doctor' ? 'Doctor' : 'NPC');
  dialogue.innerHTML = '<div class="' + speakerClass + '"><div class="conv-msg-label">' + speakerLabel + '</div><div class="conv-msg-text">' + escapeHtml(step.text) + '</div></div>';
  if (step.speaker === 'you' && step.choices) {
    var choicesHtml = '';
    step.choices.forEach(function(choice, idx) {
      choicesHtml += '<button class="conv-choice-btn" onclick="handleChoice(' + idx + ')">' + escapeHtml(choice.text) + '</button>';
    });
    choices.innerHTML = choicesHtml;
    choices.style.display = 'block';
  } else {
    choices.style.display = 'none';
    setTimeout(function() { currentStepIndex++; renderStep(); }, 1500);
  }
}

function handleChoice(choiceIndex) {
  if (!currentScenario || !currentScenario.dialogue) return;
  var step = currentScenario.dialogue[currentStepIndex];
  if (!step || !step.choices || !step.choices[choiceIndex]) return;
  var choice = step.choices[choiceIndex];
  userAnswers.push({ stepIndex: currentStepIndex, choiceIndex: choiceIndex, correct: choice.correct, text: choice.text });
  var buttons = document.querySelectorAll('.conv-choice-btn');
  buttons.forEach(function(btn, idx) {
    btn.disabled = true;
    if (idx === choiceIndex) btn.classList.add(choice.correct ? 'conv-choice-correct' : 'conv-choice-wrong');
  });
  showFeedback(choice.correct, choice.feedback);
}

function showFeedback(isCorrect, message) {
  var feedback = document.getElementById('convFeedback');
  var feedbackText = document.getElementById('convFeedbackText');
  var nextBtn = document.getElementById('convNextBtn');
  if (!feedback || !feedbackText) return;
  var icon = isCorrect ? '✅' : '❌';
  feedbackText.innerHTML = '<div class="conv-feedback-icon">' + icon + '</div><div class="conv-feedback-msg">' + escapeHtml(message) + '</div>';
  feedback.style.display = 'block';
  if (nextBtn) {
    nextBtn.onclick = function() { feedback.style.display = 'none'; currentStepIndex++; renderStep(); };
  }
}

function showResults() {
  document.getElementById('convSim').style.display = 'none';
  document.getElementById('convResults').style.display = 'block';
  var correct = userAnswers.filter(function(a) { return a.correct; }).length;
  var total = userAnswers.length;
  var percent = total > 0 ? Math.round((correct / total) * 100) : 0;
  document.getElementById('convResultScore').textContent = percent + '%';
  document.getElementById('convResultTitle').textContent = percent >= 80 ? 'Excellent !' : percent >= 50 ? 'Good job !' : 'Keep practicing !';
  document.getElementById('convResultMsg').textContent = 'You got ' + correct + ' out of ' + total + ' correct.';
  var breakdown = '';
  userAnswers.forEach(function(a, idx) { breakdown += '<div class="conv-result-item">' + (a.correct ? '✅' : '❌') + ' Question ' + (idx + 1) + '</div>'; });
  document.getElementById('convResultBreakdown').innerHTML = breakdown;
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

function exitConversation() {
  currentScenario = null; currentStepIndex = 0; userAnswers = [];
  document.getElementById('convList').style.display = 'block';
  document.getElementById('convSim').style.display = 'none';
  document.getElementById('convResults').style.display = 'none';
  renderScenarioList();
}

function restartScenario() {
  if (currentScenario) startScenario(currentScenario.level);
}

function showQuestionAgain() {
  if (!currentScenario || !currentScenario.dialogue) return;
  var step = currentScenario.dialogue[currentStepIndex];
  if (!step || step.speaker !== 'you' || !step.choices) {
    var found = false;
    for (var i = currentStepIndex - 1; i >= 0; i--) {
      if (currentScenario.dialogue[i].speaker === 'you' && currentScenario.dialogue[i].choices) {
        step = currentScenario.dialogue[i];
        found = true;
        break;
      }
    }
    if (!found) return;
  }
  var dialogue = document.getElementById('convDialogue');
  if (!dialogue) return;
  var reviewDiv = document.createElement('div');
  reviewDiv.className = 'conv-msg conv-msg-npc';
  reviewDiv.style.opacity = '0.7';
  reviewDiv.innerHTML =
    '<div class="conv-msg-avatar" style="background:var(--subtle);">👁</div>' +
    '<div class="conv-msg-bubble">' +
      '<div class="conv-msg-npc-name">Reminder</div>' +
      '<div class="conv-msg-text" style="font-style:italic;">' + escapeHtml(step.text) + '</div>' +
    '</div>';
  dialogue.appendChild(reviewDiv);
  dialogue.scrollTop = dialogue.scrollHeight;
}

function showHint() {
  if (!currentScenario || !currentScenario.dialogue) return;
  var step = currentScenario.dialogue[currentStepIndex];
  if (!step || !step.choices) {
    var found = false;
    for (var i = currentStepIndex - 1; i >= 0; i--) {
      if (currentScenario.dialogue[i].speaker === 'you' && currentScenario.dialogue[i].choices) {
        step = currentScenario.dialogue[i];
        found = true;
        break;
      }
    }
    if (!found) return;
  }
  if (!step.choices) return;
  var correctChoice = null;
  for (var j = 0; j < step.choices.length; j++) {
    if (step.choices[j].correct === true) {
      correctChoice = step.choices[j];
      break;
    }
  }
  if (!correctChoice) return;
  var words = correctChoice.text.split(' ');
  var hint = '💡 Hint: The answer starts with "' + words[0] + '" and has ' + words.length + ' word' + (words.length > 1 ? 's' : '') + '.';
  var feedback = document.getElementById('convFeedback');
  var feedbackText = document.getElementById('convFeedbackText');
  var nextBtn = document.getElementById('convNextBtn');
  if (feedback && feedbackText) {
    feedback.style.display = 'block';
    feedback.style.borderLeftColor = '#3B82F6';
    feedbackText.innerHTML = '<div style="color:#3B82F6;font-size:1rem;">' + hint + '</div>';
    if (nextBtn) {
      nextBtn.textContent = 'Hide hint';
      nextBtn.onclick = function() {
        feedback.style.display = 'none';
      };
    }
  }
}
