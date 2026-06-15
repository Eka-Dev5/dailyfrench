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
  // Contourne la race condition EventBus ( 3 fichiers finaux, propres, en tenant compte de TOUTE l'analyse :

1. **`conversation-loader.js`** — Garde le pattern parallèle (20/20 fonctionnent), mais sans le `showDebug()` qui pollue la page
2. **`conversation.js`** — Polling robuste, pas de dépendance à `EventBus`, pas de double appel `initConversation()`
3. **`conversation.html`** — Propre, sans texte parasite, ordre correct

Voici les 3 fichiers :

---

## 1️⃣ `js/conversation-loader.js` (propre, sans debug visuel)

```javascript
// js/conversation-loader.js — Charge les 20 scénarios depuis js/conversations/
// VERSION FINALE : fan-out parallèle, émet conversationsLoaded quand tout est prêt

let CONVERSATION_SCENARIOS = {};

function loadConversations() {
  if (window._conversationsLoading) return;
  window._conversationsLoading = true;

  CONVERSATION_SCENARIOS = {};

  const count = 20;
  let loaded = 0;
  let errors = 0;
  let pending = count;

  function checkComplete() {
    pending--;
    if (pending === 0) {
      window._conversationsReady = true;
      window.CONVERSATION_SCENARIOS = CONVERSATION_SCENARIOS;
      console.log('[ConversationLoader] All done. Loaded: ' + loaded + '/20, Errors: ' + errors);
      if (typeof EventBus !== 'undefined') {
        EventBus.emit('conversationsLoaded', { scenarios: CONVERSATION_SCENARIOS, count: loaded });
      }
    }
  }

  for (let i = 1; i <= count; i++) {
    const numStr = i.toString().padStart(2, '0');
    const script = document.createElement('script');
    script.src = 'js/conversations/conversation-' + numStr + '.js';
    script.async = false;

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
// Les 20 fichiers se chargent en parallèle, conversationsLoaded est émis quand tous sont prêts
loadConversations();
