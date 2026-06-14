// conversation-loader.js — Charge les 20 scénarios depuis conversations/
// VERSION PROPRE : conversationsLoaded event + flag _conversationsReady
// SANS TOUCHER au data-loader.js des lessons

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
      // Exposer explicitement sur window pour que conversation.js le trouve
      window.CONVERSATION_SCENARIOS = CONVERSATION_SCENARIOS;
      console.log('[ConversationLoader] All done. Loaded: ' + loaded + ', Errors: ' + errors);
      if (typeof EventBus !== 'undefined') {
        EventBus.emit('conversationsLoaded', { scenarios: CONVERSATION_SCENARIOS, count: loaded });
      }
    }
  }
  
  for (let i = 1; i <= count; i++) {
    const numStr = i.toString().padStart(2, '0');
    const script = document.createElement('script');
    script.src = 'conversations/conversation-' + numStr + '.js';
    script.async = false;

    script.onload = function() {
      const convVar = 'CONVERSATION_' + numStr;
      
      if (typeof window[convVar] !== 'undefined') {
        CONVERSATION_SCENARIOS[i] = window[convVar];
        loaded++;
        console.log('[ConversationLoader] Loaded conversation-' + numStr + '.js (' + loaded + '/' + count + ')');
        
        if (typeof EventBus !== 'undefined') {
          EventBus.emit('conversationLoaded', { level: i, scenario: window[convVar] });
        }
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

function tryStartConversations() {
  if (typeof EventBus !== 'undefined') {
    EventBus.on('coreReady', loadConversations);
  }
  
  // Si core.js est déjà chargé (comme dans data-loader.js)
  if (typeof PlayerManager !== 'undefined' && typeof EventBus !== 'undefined') {
    console.log('[ConversationLoader] core.js already ready — launching directly');
    loadConversations();
  }
}

tryStartConversations();
