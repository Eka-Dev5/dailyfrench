// ═══════════════════════════════════════════════════════════════════
// CONVERSATION.JS — Daily French 🥖 v1.4
// CORRECTION : Adapté à la structure réelle des données
// CONVERSATION_SCENARIOS est un OBJET {id: scenario, ...}
// Les scénarios utilisent 'dialogue' (pas 'steps'), 'setting' (pas 'npcName/playerRole/category')
// ═══════════════════════════════════════════════════════════════════

var currentScenario = null;
var currentStepIndex = 0;
var userAnswers = [];
var isWaitingForNext = false;

function getScenarioList() {
  if (typeof CONVERSATION_SCENARIOS === 'undefined') return [];
  return Object.values(CONVERSATION_SCENARIOS);
}

function initConversation() {
  if (typeof initCore === 'function') initCore();

  var list = getScenarioList();
  if (list.length > 0) {
    renderScenarioList();
  } else {
    setTimeout(function() {
      var list2 = getScenarioList();
      if (list2.length > 0) {
        renderScenarioList();
      } else {
        var container = document.getElementById('convScenarios');
        if (container) {
          container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted)">Unable to load scenarios. Check console.</div>';
        }
        console.error('[Talk] CONVERSATION_SCENARIOS not found or empty after 500ms');
      }
    }, 500);
  }

  setupTTS();
}

function renderScenarioList() {
  var container = document.getElementById('convScenarios');
  var list = getScenarioList();
  if (!container || list.length === 0) return;

  container.innerHTML = '';

  list.forEach(function(scen) {
    var card = document.createElement('div');
    card.className = 'conv-scenario-card';
    card.dataset.id = scen.id;

    // Calculer le nombre d'échanges (dialogue array / 2 car chaque échange = NPC + YOU)
    var exchanges = 0;
    if (scen.dialogue && Array.isArray(scen.dialogue)) {
      // Compter les éléments où speaker === 'you' (choix de l'utilisateur)
      exchanges = scen.dialogue.filter(function(d) { return d.speaker === 'you'; }).length;
    }

    var diffStars = '★'.repeat(scen.difficulty || 1) + '☆'.repeat(Math.max(0, 3 - (scen.difficulty || 1)));

    card.innerHTML =
      '<div class="conv-scen-icon">' + (scen.icon || '🗣️') + '</div>' +
      '<div class="conv-scen-info">' +
      '<div class="conv-scen-title">' + (scen.title || 'Scenario') + '</div>' +
      '<div class="conv-scen-subtitle">' + (scen.titleFr || '') + '</div>' +
      '<div class="conv-scen-meta">' +
      '<span class="conv-scen-diff" title="Difficulty">' + diffStars + '</span>' +
      '<span class="conv-scen-steps">' + exchanges + ' exchanges</span>' +
      '<span class="conv-scen-npc">📍 ' + (scen.setting ? scen.setting.substring(0, 40) + '...' : 'Conversation') + '</span>' +
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
  if (iconEl) iconEl.textContent = scen.icon || '🗣️';
  if (titleEl) titleEl.textContent = scen.title || 'Conversation';

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
    '<div class="conv-setting-text">' + escapeHtml(currentScenario.setting || 'Practice your French!') + '</div>' +
    '<div class="conv-setting-role"><strong>Vocabulary:</strong> ' + escapeHtml((currentScenario.vocabulary || []).join(', ')) + '</div>' +
    '<button class="btn btn-primary" style="margin-top:1rem;" onclick="renderStep()">Start the conversation →</button>';

  dialogue.appendChild(contextCard);

  var choices = document.getElementById('convChoices');
  var feedback = document.getElementById('convFeedback');
  if (choices) choices.innerHTML = '';
  if (feedback) feedback.style.display = 'none';
}

function renderStep() {
  if (!currentScenario || !currentScenario.dialogue || currentStepIndex >= currentScenario.dialogue.length) {
    showResults();
    return;
  }

  var step = currentScenario.dialogue[currentStepIndex];
  var dialogue = document.getElementById('convDialogue');
  var choices = document.getElementById('convChoices');
  var feedback = document.getElementById('convFeedback');

  var progressEl = document.getElementById('convSimProgress');
  if (progressEl) {
    var totalSteps = currentScenario.dialogue.filter(function(d) { return d.speaker === 'you'; }).length;
    var currentStep = currentScenario.dialogue.slice(0, currentStepIndex + 1).filter(function(d) { return d.speaker === 'you'; }).length;
    progressEl.textContent = currentStep + ' / ' + totalSteps;
  }

  // Si c'est un message du NPC (baker, vendor, etc.)
  if (step.speaker !== 'you') {
    var npcMsg = document.createElement('div');
    npcMsg.className = 'conv-msg conv-msg-npc';
    npcMsg.innerHTML =
      '<div class="conv-msg-avatar" style="background:#4A5568">' + (currentScenario.icon || '🗣️') + '</div>' +
      '<div class="conv-msg-bubble">' +
      '<div class="conv-msg-npc-name">' + escapeHtml(step.speaker || 'NPC') + '</div>' +
      '<div class="conv-msg-text">' + escapeHtml(step.text || '') + '</div>' +
      '<button class="conv-msg-tts" data-tts="' + escapeHtml(step.text || '') + '" title="Listen">🔊</button>' +
      '</div>';

    if (dialogue) {
      dialogue.appendChild(npcMsg);
      scrollToBottom(dialogue);
    }

    var ttsBtn = npcMsg.querySelector('.conv-msg-tts');
    if (ttsBtn) {
      ttsBtn.addEventListener('click', function() { speakFrench(step.text); });
    }

    // Avancer automatiquement au prochain élément (qui devrait être 'you')
    currentStepIndex++;
    // Si le suivant est aussi un NPC, continuer
    if (currentStepIndex < currentScenario.dialogue.length && currentScenario.dialogue[currentStepIndex].speaker !== 'you') {
      setTimeout(function() { renderStep(); }, 300);
    } else {
      // Le suivant est 'you', montrer les choix
      renderChoices();
    }
    return;
  }

  // Si c'est au tour de l'utilisateur
  renderChoices();
}

function renderChoices() {
  if (!currentScenario || currentStepIndex >= currentScenario.dialogue.length) {
    showResults();
    return;
  }

  var step = currentScenario.dialogue[currentStepIndex];
  if (step.speaker !== 'you') {
    // Pas un choix utilisateur, avancer
    currentStepIndex++;
    renderStep();
    return;
  }

  var choices = document.getElementById('convChoices');
  var feedback = document.getElementById('convFeedback');

  if (choices) {
    choices.innerHTML = '';
    choices.style.display = 'block';

    if (step.choices && Array.isArray(step.choices)) {
      step.choices.forEach(function(opt, idx) {
        var btn = document.createElement('button');
        btn.className = 'conv-choice-btn';
        btn.innerHTML = '<span class="conv-choice-letter">' + String.fromCharCode(65 + idx) + '</span>' +
                        '<span class="conv-choice-text">' + escapeHtml(opt.text || '') + '</span>';
        btn.addEventListener('click', function() { handleChoice(idx); });
        choices.appendChild(btn);
      });
    }
  }

  if (feedback) feedback.style.display = 'none';
  isWaitingForNext = false;
}

function handleChoice(choiceIndex) {
  if (isWaitingForNext) return;

  var step = currentScenario.dialogue[currentStepIndex];
  if (!step.choices || !step.choices[choiceIndex]) return;

  var chosen = step.choices[choiceIndex];

  var choiceBtns = document.querySelectorAll('.conv-choice-btn');
  choiceBtns.forEach(function(btn, idx) {
    btn.disabled = true;
    if (idx === choiceIndex) btn.classList.add('chosen');
    if (step.choices[idx].correct === true) btn.classList.add('best');
  });

  // Déterminer le score (1 = correct, 0 = incorrect)
  var score = chosen.correct === true ? 1 : 0;
  userAnswers.push({
    step: currentStepIndex,
    chosenText: chosen.text || '',
    correct: score,
    feedback: chosen.feedback || ''
  });

  var dialogue = document.getElementById('convDialogue');
  if (dialogue) {
    var userMsg = document.createElement('div');
    userMsg.className = 'conv-msg conv-msg-user';
    userMsg.innerHTML =
      '<div class="conv-msg-bubble conv-msg-bubble-user">' +
      '<div class="conv-msg-text">' + escapeHtml(chosen.text || '') + '</div>' +
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

  var borderColor = chosen.correct === true ? '#059669' : '#F59E0B';
  if (chosen.correct === false) borderColor = '#DC2626';

  feedback.style.display = 'block';
  feedback.style.borderLeftColor = borderColor;
  feedbackText.innerHTML = (chosen.feedback || '') + '<br><br><em>' + (chosen.correct === true ? '✅ Correct!' : '💡 Keep practicing!') + '</em>';

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
  var maxScore = total;
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
      var icon = a.correct === 1 ? '✅' : '❌';
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

function showToast(msg) {
  if (typeof toast === 'function') {
    toast(msg);
  } else {
    console.log('Toast:', msg);
  }
}

// Lancement immédiat — PAS de DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initConversation);
} else {
  initConversation();
}
