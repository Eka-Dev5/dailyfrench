// conversation-loader.js — Charge les 20 scénarios depuis conversations/
// VERSION ULTRA-SIMPLE : charge immédiatement, pas d'attente

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
      console.log("[Talk] Loaded: " + loaded + "/20 conversations");
      if (typeof EventBus !== "undefined") {
        EventBus.emit("conversationsLoaded", { scenarios: CONVERSATION_SCENARIOS, count: loaded });
      }
    }
  }

  for (let i = 1; i <= count; i++) {
    const numStr = i.toString().padStart(2, "0");
    const script = document.createElement("script");
    script.src = "conversations/conversation-" + numStr + ".js";
    script.async = false;

    script.onload = function() {
      const convVar = "CONVERSATION_" + numStr;
      if (typeof window[convVar] !== "undefined") {
        CONVERSATION_SCENARIOS[i] = window[convVar];
        loaded++;
      } else {
        errors++;
        console.error("[Talk] Missing: " + convVar);
      }
      checkComplete();
    };

    script.onerror = function() {
      errors++;
      console.error("[Talk] Failed: conversation-" + numStr + ".js");
      checkComplete();
    };

    document.head.appendChild(script);
  }
}

// CHARGEMENT IMMÉDIAT — pas d'attente de coreReady
loadConversations();
