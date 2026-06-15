// ═══════════════════════════════════════════════════════════════════
// CONVERSATION.JS — Daily French 🥖 v2.1 FINAL
// FIX RACE CONDITION : polling sur getScenarioList().length au lieu d'EventBus
// Pas de démarrage auto — initConversation() appelé depuis conversation.html
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

// ── INIT PRINCIPAL (polling robuste, pas de race condition) ─────
function initConversation() {
  if (typeof initCore === 'function') initCore();

  // Si déjà chargé, démarrer immédiatement
  if (typeof CONVERSATION_SCENARIOS !== 'undefined' && Object.keys(CONVERSATION_SCENARIOS).length > 0) {
    doInitConversation();
    return;
  }

  // Polling : vérifie toutes les 100ms si les données sont arrivées
  // Contourne la race condition EventBus (événement émis avant l'abonnement)
  var retries = 0;
  var timer = setInterval(function() {
    retries++;
    var list = getScenarioList();
    if (list.length > 0) {
      clearInterval(timer);
      doInitConversation();
    } else if (retries > 100) { // 10 secondes max
      clearInterval(timer);
      var container = document.getElementById('convScenarios');
      if (container) {
        container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted)">⚠️ Conversations failed to load.<br>Check that js/conversations/ folder exists with 20 files.</div>';
      }
      console.error('[Talk] CONVERSATION_SCENARIOS not found or empty after 10s');
    }
  }, 100);
}

// ── VRAI INIT ─────────────────────────────────────────────────────
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

// ── RENDER LISTE SCÉNARIOS ────────────────────────────────────────
function renderScenarioList() {
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
  if (!;

    script.onload = function() {
      const convVar = 'CONVERSATION_' + numStr;
      if (typeof window[convVar] !== 'undefined') {
        CONVERSATION_SCENARIOS[i] = window[convVar];
        loaded++;
        console.log('[ConversationLoader] Loaded conversation-' + numStr + '.js (' + loaded + '/' + count + ')');
      } else {
        errors++;
        console.error('[ConversationLoader] Variable ' + convVar + ' not found');
      }
      checkComplete();
    };

    script.onerror = function() {
      errors++;
      console.error('[ConversationLoader] Failed to load conversation-' + numStr + '.js');
      checkComplete();
    };

    document.head.appendChild(script);
  }
}

// CHARGEMENT IMMÉDIAT — pas d'attente de coreReady
loadConversations();
