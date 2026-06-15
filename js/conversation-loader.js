// conversation-loader.js — Charge les 20 scénarios depuis js/conversations/
// VERSION DEBUG : affiche le résultat directement dans la page (pas besoin de console)

let CONVERSATION_SCENARIOS = {};

function loadConversations() {
  if (window._conversationsLoading) return;
  window._conversationsLoading = true;

  CONVERSATION_SCENARIOS = {};

  const count = 20;
  let loaded = 0;
  let errors = 0;
  let pending = count;
  const failedFiles = [];
  const okFiles = [];

  function checkComplete() {
    pending--;
    if (pending === 0) {
      window._conversationsReady = true;
      window.CONVERSATION_SCENARIOS = CONVERSATION_SCENARIOS;
      showDebug(loaded, errors, okFiles, failedFiles);
      if (typeof EventBus !== "undefined") {
        EventBus.emit("conversationsLoaded", { scenarios: CONVERSATION_SCENARIOS, count: loaded });
      }
    }
  }

  for (let i = 1; i <= count; i++) {
    const numStr = i.toString().padStart(2, "0");
    const script = document.createElement("script");
    script.src = "js/conversations/conversation-" + numStr + ".js";
    script.async = false;

    script.onload = function() {
      const convVar = "CONVERSATION_" + numStr;
      if (typeof window[convVar] !== "undefined") {
        CONVERSATION_SCENARIOS[i] = window[convVar];
        loaded++;
        okFiles.push(numStr);
      } else {
        errors++;
        failedFiles.push(numStr + " (fichier chargé mais variable CONVERSATION_" + numStr + " absente)");
      }
      checkComplete();
    };

    script.onerror = function() {
      errors++;
      failedFiles.push(numStr + " (404 - fichier non trouvé)");
      checkComplete();
    };

    document.head.appendChild(script);
  }
}

function showDebug(loaded, errors, okFiles, failedFiles) {
  const box = document.createElement("div");
  box.style.cssText = "background:#fff3cd;border:2px solid #f0ad4e;border-radius:8px;padding:12px;margin:10px;font-family:monospace;font-size:12px;line-height:1.6;white-space:pre-wrap;word-break:break-word;";

  let html = "🔍 DEBUG conversation-loader\n";
  html += "Chargés avec succès : " + loaded + "/20\n";
  html += "Erreurs : " + errors + "/20\n";

  if (okFiles.length > 0) {
    html += "\n✅ OK : " + okFiles.join(", ") + "\n";
  }
  if (failedFiles.length > 0) {
    html += "\n❌ ÉCHECS :\n" + failedFiles.join("\n") + "\n";
  }

  box.textContent = html;

  // Insère le bloc debug en haut de la page, avant tout le reste
  const target = document.querySelector(".conversation-main") || document.body;
  target.insertBefore(box, target.firstChild);
}

// CHARGEMENT IMMEDIAT — pas d attente de coreReady
loadConversations();
