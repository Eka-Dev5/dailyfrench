// CONVERSATION.JS — Simple, attend le loader

var currentScenario = null;
var currentStepIndex = 0;
var userAnswers = [];
var _convInitDone = false;

function getScenarioList() {
  if (typeof CONVERSATION_SCENARIOS === 'undefined') return [];
  return Object.values(CONVERSATION_SCENARIOS);
}

function initConversation() {
  if (typeof initCore === 'function') initCore();
  
  // Si déjà chargé
  if (window._conversationsReady) {
    doInit();
    return;
  }
  
  // Sinon attendre
  if (typeof EventBus !== 'undefined') {
    EventBus.on('conversationsLoaded', function() {
      doInit();
    });
  }
  
  // Fallback : vérifier toutes les 200ms
  var check = setInterval(function() {
    if (window._conversationsReady) {
      clearInterval(check);
      doInit();
    }
  }, 200);
}

function doInit() {
  if (_convInitDone) return;
  _convInitDone = true;
  
  var container = document.getElementById('convScenarios');
  var list = getScenarioList();
  
  if (list.length === 0) {
    if (container) container.innerHTML = '<div style="text-align:center;padding:2rem">⚠️ No conversations loaded</div>';
    return;
  }
  
  var html = '';
  var player = (typeof PlayerManager !== 'undefined' && PlayerManager.current) ? PlayerManager.current : null;
  var currentLevel = player ? (player.level || 1) : 1;
  
  list.forEach(function(s) {
    var locked = s.requiredLesson > currentLevel;
    html += '<div class="conv-card ' + (locked ? 'conv-locked' : '') + '" ' + (locked ? '' : 'onclick="startScenario(' + s.level + ')"') + '>' +
      '<div class="conv-card-icon">' + (locked ? '🔒' : s.icon) + '</div>' +
      '<div class="conv-card-info">' +
        '<div class="conv-card-title">' + s.title + '</div>' +
        '<div class="conv-card-sub">' + s.titleFr + '</div>' +
      '</div>' +
    '</div>';
  });
  
  if (container) container.innerHTML = html;
}

function startScenario(level) {
  if (!CONVERSATION_SCENARIOS || !CONVERSATION_SCENARIOS[level]) return;
  currentScenario = CONVERSATION_SCENARIOS[level];
  currentStepIndex = 0;
  userAnswers = [];
  
  document.getElementById('convList').style.display = 'none';
  document.getElementById('convSim').style.display = 'block';
  document.getElementById('convResults').style.display = 'none';
  
  renderStep();
}

function renderStep() {
  var step = currentScenario.dialogue[currentStepIndex];
  if (!step) { showResults(); return; }
  
  var dialogue = document.getElementById('convDialogue');
  var choices = document.getElementById('convChoices');
  
  dialogue.innerHTML = '<div class="conv-msg-' + (step.speaker === 'you' ? 'you' : 'npc') + '">' + step.text + '</div>';
  
  if (step.speaker === 'you' && step.choices) {
    var html = '';
    step.choices.forEach(function(c, i) {
      html += '<button onclick="choose(' + i + ')">' + c.text + '</button>';
    });
    choices.innerHTML = html;
    choices.style.display = 'block';
  } else {
    choices.style.display = 'none';
    setTimeout(function() { currentStepIndex++; renderStep(); }, 1500);
  }
}

function choose(idx) {
  var step = currentScenario.dialogue[currentStepIndex];
  var choice = step.choices[idx];
  userAnswers.push({ correct: choice.correct });
  
  // Feedback
  var fb = document.getElementById('convFeedback');
  document.getElementById('convFeedbackText').textContent = (choice.correct ? '✅ ' : '❌ ') + choice.feedback;
  fb.style.display = 'block';
  
  document.getElementById('convNextBtn').onclick = function() {
    fb.style.display = 'none';
    currentStepIndex++;
    renderStep();
  };
}

function showResults() {
  document.getElementById('convSim').style.display = 'none';
  document.getElementById('convResults').style.display = 'block';
  
  var correct = userAnswers.filter(function(a) { return a.correct; }).length;
  var total = userAnswers.length;
  var pct = Math.round((correct / total) * 100);
  
  document.getElementById('convResultScore').textContent = pct + '%';
}

function exitConversation() {
  document.getElementById('convList').style.display = 'block';
  document.getElementById('convSim').style.display = 'none';
  document.getElementById('convResults').style.display = 'none';
}

function restartScenario() {
  if (currentScenario) startScenario(currentScenario.level);
}
