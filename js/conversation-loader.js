// conversation-loader.js — Daily French 🥖
// FIX : écrit UNIQUEMENT sur window.CONVERSATION_SCENARIOS (plus de let local)
// IIFE sur la boucle pour capturer numStr correctement

window.CONVERSATION_SCENARIOS = {};

function loadConversations() {
  if (window._conversationsLoading) return;
  window._conversationsLoading = true;

  var count   = 20;
  var loaded  = 0;
  var errors  = 0;
  var pending = count;

  function checkComplete() {
    pending--;
    if (pending !== 0) return;
    window._conversationsReady = true;
    console.log('[Loader] Done: ' + loaded + '/20, errors: ' + errors);
    if (typeof EventBus !== 'undefined') {
      EventBus.emit('conversationsLoaded', { count: loaded });
    }
  }

  for (var i = 1; i <= count; i++) {
    (function(num) {
      var numStr = String(num).padStart(2, '0');
      var varName = 'CONVERSATION_' + numStr;
      var script = document.createElement('script');
      script.src = 'js/conversations/conversation-' + numStr + '.js';
      script.async = false;
      script.onload = function() {
        if (typeof window[varName] !== 'undefined') {
          window.CONVERSATION_SCENARIOS[num] = window[varName];
          loaded++;
        } else {
          errors++;
          console.error('[Loader] ' + varName + ' not found');
        }
        checkComplete();
      };
      script.onerror = function() {
        errors++;
        checkComplete();
      };
      document.head.appendChild(script);
    })(i);
  }
}

loadConversations();
