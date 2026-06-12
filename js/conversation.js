// ═══════════════════════════════════════════════════════════════════
// CONVERSATION.JS — Daily French 🥖 v1.1
// CORRECTION : attendre que CONVERSATION_SCENARIOS soit chargé
// ═══════════════════════════════════════════════════════════════════

var currentScenario = null;
var currentStepIndex = 0;
var userAnswers = [];
var isWaitingForNext = false;

function initConversation() {
  if (typeof initCore === 'function') initCore();
  
  // Attendre que les données soient chargées
  if (typeof CONVERSATION_SCENARIOS !== 'undefined' && CONVERSATION_SCENARIOS.length > 0) {
    renderScenarioList();
  } else {
    // Les données arrivent peut-être plus tard
    var checkInterval = setInterval(function() {
      if (typeof CONVERSATION_SCENARIOS !== 'undefined' && CONVERSATION_SCENARIOS.length > 0) {
        clearInterval(checkInterval);
        renderScenarioList();
      }
    }, 100);
    
    // Timeout après 5 secondes
    setTimeout(function() {
      clearInterval(checkInterval);
      var container = document.getElementById('convScenarios');
      if (container && container.innerHTML === '') {
        container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted)">Loading scenarios...</div>';
      }
    }, 5000);
  }
  
  setupTTS();
}

function renderScenarioList() {
  var container = document.getElementById('convScenarios');
  if (!container || typeof CONVERSATION_SCENARIOS === 'undefined') return;

  container.innerHTML = '';

  CONVERSATION_SCENARIOS.forEach(function(scen) {
    var card = document.createElement('div');
    card.className = 'conv-scenario-card';
    card.dataset.id = scen.id;

    var diffStars = '★'.repeat(scen.difficulty) + '☆'.repeat(3 - scen.difficulty);

    card.innerHTML = 
      '<div class="conv-scen-icon">' + scen.icon + '</div>' +
      '<div class="conv-scen-info">' +
      '<div class="conv-scen-title">' + scen.title + '</div>' +
      '<div class="conv-scen-subtitle">' + scen.titleFr + '</div>' +
      '<div class="conv-scen-meta">' +
      '<span class="conv-scen-diff" title="Difficulty">' + diffStars + '</span>' +
      '<span class="conv-scen-steps">' + scen.steps.length + ' exchanges</span>' +
      '<span class="conv-scen-npc">👤 ' + scen.npcName + '</span>' +
      '</div></div>' +
      '<div class="conv-scen-arrow">▶</div>';

    card.addEventListener('click', function() { startScenario(scen); });
    container.appendChild(card);
  });

  showView('list');
}

function startScenario(scen) {
  currentScenario = scen;
  currentStepIndex = 0;
  userAnswers = [];
  isWaitingForNext = false;

  var iconEl = document.getElementById('convSimIcon');
  var titleEl = document.getElementById('convSimTitle');
  if (iconEl) iconEl.textContent = scen.icon;
  if (titleEl) titleEl.textContent = scen.title;

  showView('sim');
  renderSetting();
}

function renderSetting() {
  var dialogue = document.getElementById('convDialogue');
  if (!dialogue) return;

  dialogue.innerHTML = '';

  var contextCard = document.createElement('div');
  contextCard.className = 'conv-msg conv-msg-setting';
  contextCard.innerHTML = 
    '<div class="conv-setting-label">📍 Situation</div>' +
    '<div class="conv-setting-text">' + escapeHtml(currentScenario.setting) + '</div>' +
    '<div class="conv-setting-role"><strong>Your role:</strong> ' + escapeHtml(currentScenario.playerRole) + '</div>' +
    '<div class="conv-setting-npc"><strong>You\'re speaking to:</strong> ' + escapeHtml(currentScenario.npcName) + ' — ' + escapeHtml(currentScenario.npcRole) + '</div>' +
    '<button class="btn btn-primary" style="margin-top:1rem;" onclick="renderStep()">Start the conversation →</button>';
  
  dialogue.appendChild(contextCard);

  var choices = document.getElementById('convChoices');
  var feedback = document.getElementById('convFeedback');
  if (choices) choices.innerHTML = '';
  if (feedback) feedback.style.display = 'none';
}

function renderStep() {
  if (!currentScenario || currentStepIndex >= currentScenario.steps.length) {
    showResults();
    return;
  }

  var step = currentScenario.steps[currentStepIndex];
  var dialogue = document.getElementById('convDialogue');
  var choices = document.getElementById('convChoices');
  var feedback = document.getElementById('convFeedback');

  var progressEl = document.getElementById('convSimProgress');
  if (progressEl) {
    progressEl.textContent = (currentStepIndex + 1) + ' / ' + currentScenario.steps.length;
  }

  var npcMsg = document.createElement('div');
  npcMsg.className = 'conv-msg conv-msg-npc';
  npcMsg.innerHTML = 
    '<div class="conv-msg-avatar" style="background:' + getCategoryColor(currentScenario.category) + '">' + currentScenario.icon + '</div>' +
    '<div class="conv-msg-bubble">' +
    '<div class="conv-msg-npc-name">' + escapeHtml(currentScenario.npcName) + '</div>' +
    '<div class="conv-msg-text">' + escapeHtml(step.npc) + '</div>' +
    '<button class="conv-msg-tts" data-tts="' + escapeHtml(step.npc) + '" title="Listen">🔊</button>' +
    '</div>';

  if (currentStepIndex === 0 && dialogue) {
    dialogue.innerHTML = '';
  }

  if (dialogue) {
    dialogue.appendChild(npcMsg);
    scrollToBottom(dialogue);
  }

  var ttsBtn = npcMsg.querySelector('.conv-msg-tts');
  if (ttsBtn) {
    ttsBtn.addEventListener('click', function() { speakFrench(step.npc); });
  }

  if (choices) {
    choices.innerHTML = '';
    choices.style.display = 'block';

    step.options.forEach(function(opt, idx) {
      var btn = document.createElement('button');
      btn.className = 'conv-choice-btn';
      btn.innerHTML = '<span class="conv-choice-letter">' + String.fromCharCode(65 + idx) + '</span>' +
                      '<span class="conv-choice-text">' + escapeHtml(opt.text) + '</span>';
      btn.addEventListener('click', function() { handleChoice(idx); });
      choices.appendChild(btn);
    });
  }

  if (feedback) feedback.style.display = 'none';
  isWaitingForNext = false;
}

function handleChoice(choiceIndex) {
  if (isWaitingForNext) return;

  var step = currentScenario.steps[currentStepIndex];
  var chosen = step.options[choiceIndex];

  var choiceBtns = document.querySelectorAll('.conv-choice-btn');
  choiceBtns.forEach(function(btn, idx) {
    btn.disabled = true;
    if (idx === choiceIndex) btn.classList.add('chosen');
    if (step.options[idx].correct === 2) btn.classList.add('best');
  });

  var maxCorrect = Math.max.apply(null, step.options.map(function(o) { return o.correct; }));
  userAnswers.push({
    step: currentStepIndex,
    chosenText: chosen.text,
    correct: chosen.correct,
    maxCorrect: maxCorrect,
    feedback: chosen.feedback
  });

  var dialogue = document.getElementById('convDialogue');
  if (dialogue) {
    var userMsg = document.createElement('div');
    userMsg.className = 'conv-msg conv-msg-user';
    userMsg.innerHTML = 
      '<div class="conv-msg-bubble conv-msg-bubble-user">' +
      '<div class="conv-msg-text">' + escapeHtml(chosen.text) + '</div>' +
      '</div>' +
      '<div class="conv-msg-avatar conv-msg-avatar-user">🧑</div>';
    dialogue.appendChild(userMsg);
    scrollToBottom(dialogue);
  }

  showFeedback(chosen);
  isWaitingForNext = true;
}

function showFeedback(chosen) {
  var feedback = document.getElementById('convFeedback');
  var feedbackText = document.getElementById('convFeedbackText');
  var nextBtn = document.getElementById('convNextBtn');

  if (!feedback || !feedbackText) return;

  var borderColor = '#F59E0B';
  if (chosen.correct === 2) borderColor = '#059669';
  if (chosen.correct === 0) borderColor = '#DC2626';

  feedback.style.display = 'block';
  feedback.style.borderLeftColor = borderColor;
  feedbackText.innerHTML = chosen.feedback;

  var choices = document.getElementById('convChoices');
  if (choices) choices.style.display = 'none';

  if (nextBtn) {
    nextBtn.onclick = function() {
      currentStepIndex++;
      renderStep();
    };
  }

  setTimeout(function() { feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 100);
}

function showResults() {
  showView('results');

  var total = userAnswers.length;
  var maxScore = total * 2;
  var userScore = userAnswers.reduce(function(sum, a) { return sum + a.correct; }, 0);
  var pct = maxScore > 0 ? Math.round((userScore / maxScore) * 100) : 0;

  var scoreEl = document.getElementById('convResultScore');
  var titleEl = document.getElementById('convResultTitle');
  var msgEl = document.getElementById('convResultMsg');

  if (scoreEl) scoreEl.textContent = pct + '%';

  if (pct >= 80) {
    if (titleEl) titleEl.textContent = '🎉 Excellent!';
    if (msgEl) msgEl.textContent = 'You handled this situation like a true local. The French would be impressed!';
  } else if (pct >= 50) {
    if (titleEl) titleEl.textContent = '👍 Good effort!';
    if (msgEl) msgEl.textContent = "You're getting there. Review the feedback and try again — practice makes perfect!";
  } else {
    if (titleEl) titleEl.textContent = '💪 Keep practicing!';
    if (msgEl) msgEl.textContent = "French social interactions have their codes. Retry this scenario to master them!";
  }

  var breakdownEl = document.getElementById('convResultBreakdown');
  if (breakdownEl) {
    breakdownEl.innerHTML = '';
    userAnswers.forEach(function(a, idx) {
      var row = document.createElement('div');
      row.className = 'conv-result-row';
      var icon = a.correct === 2 ? '✅' : a.correct === 1 ? '🟡' : '❌';
      row.innerHTML = 
        '<span class="conv-result-icon">' + icon + '</span>' +
        '<span class="conv-result-num">#' + (idx + 1) + '</span>' +
        '<span class="conv-result-text">' + escapeHtml(a.chosenText.substring(0, 40)) + (a.chosenText.length > 40 ? '...' : '') + '</span>';
      breakdownEl.appendChild(row);
    });
  }

  saveConversationProgress(pct);
}

function saveConversationProgress(score) {
  var currentName = (typeof PlayerManager !== 'undefined') ? PlayerManager.getCurrent() : null;
  if (!currentName || !currentScenario) return;

  var players = (typeof getPlayers === 'function') ? getPlayers() : {};
  var p = players[currentName];
  if (!p) return;

  if (!p.conversationProgress) p.conversationProgress = {};
  var prev = p.conversationProgress[currentScenario.id];
  var prevBest = prev ? prev.bestScore : 0;

  p.conversationProgress[currentScenario.id] = {
    scenarioId: currentScenario.id,
    title: currentScenario.title,
    bestScore: Math.max(score, prevBest),
    lastScore: score,
    lastPlayed: new Date().toISOString(),
    attempts: (prev ? prev.attempts : 0) + 1
  };

  if (typeof savePlayers === 'function') savePlayers(players);
}

function showView(view) {
  var listView = document.getElementById('convList');
  var simView = document.getElementById('convSim');
  var resultsView = document.getElementById('convResults');

  if (listView) listView.style.display = view === 'list' ? 'block' : 'none';
  if (simView) simView.style.display = view === 'sim' ? 'block' : 'none';
  if (resultsView) resultsView.style.display = view === 'results' ? 'block' : 'none';

  if (view === 'list') window.scrollTo({ top: 0, behavior: 'smooth' });
}

function exitConversation() {
  currentScenario = null;
  currentStepIndex = 0;
  userAnswers = [];
  isWaitingForNext = false;
  renderScenarioList();
}

function restartScenario() {
  if (currentScenario) startScenario(currentScenario);
}

function setupTTS() {
  if ('speechSynthesis' in window) {
    var voices = speechSynthesis.getVoices();
    if (voices.length === 0) {
      speechSynthesis.addEventListener('voiceschanged', function() {});
    }
  }
}

function speakFrench(text) {
  if (!('speechSynthesis' in window)) {
    showToast('Text-to-speech not available');
    return;
  }
  speechSynthesis.cancel();
  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.85;
  var voices = speechSynthesis.getVoices();
  var frVoice = voices.find(function(v) { return v.lang && v.lang.startsWith('fr'); });
  if (frVoice) utterance.voice = frVoice;
  speechSynthesis.speak(utterance);
}

function getCategoryColor(cat) {
  var colors = {
    courses: '#F59E0B',
    sante: '#DC2626',
    restaurant: '#EA580C',
    voisinage: '#059669',
    admin: '#4A5568',
    urgence: '#DC2626',
    transports: '#2563EB'
  };
  return colors[cat] || '#4A5568';
}

function scrollToBottom(el) {
  el.scrollTop = el.scrollHeight;
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

document.addEventListener('DOMContentLoaded', initConversation);
