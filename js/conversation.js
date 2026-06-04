// ═══════════════════════════════════════════════════════════════════
// CONVERSATION.JS — Daily French 🥖
// Simulateur de dialogues interactifs avec correction douce
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// 1. ÉTAT
// ═══════════════════════════════════════════════════════════════════

let currentScenario = null;
let currentStepIndex = 0;
let userAnswers = [];     // { step, chosen, correct, maxCorrect, feedback }
let isWaitingForNext = false;

// ═══════════════════════════════════════════════════════════════════
// 2. INIT
// ═══════════════════════════════════════════════════════════════════

function initConversation() {
  if (typeof initCore === 'function') initCore();
  renderScenarioList();
  setupTTS();
}

// ═══════════════════════════════════════════════════════════════════
// 3. LISTE DES SCÉNARIOS
// ═══════════════════════════════════════════════════════════════════

function renderScenarioList() {
  const container = document.getElementById('convScenarios');
  if (!container || typeof CONVERSATION_SCENARIOS === 'undefined') return;

  container.innerHTML = '';

  CONVERSATION_SCENARIOS.forEach(scen => {
    const card = document.createElement('div');
    card.className = 'conv-scenario-card';
    card.dataset.id = scen.id;

    const diffStars = '★'.repeat(scen.difficulty) + '☆'.repeat(3 - scen.difficulty);

    card.innerHTML = `
      <div class="conv-scen-icon">${scen.icon}</div>
      <div class="conv-scen-info">
        <div class="conv-scen-title">${scen.title}</div>
        <div class="conv-scen-subtitle">${scen.titleFr}</div>
        <div class="conv-scen-meta">
          <span class="conv-scen-diff" title="Difficulty">${diffStars}</span>
          <span class="conv-scen-steps">${scen.steps.length} exchanges</span>
          <span class="conv-scen-npc">👤 ${scen.npcName}</span>
        </div>
      </div>
      <div class="conv-scen-arrow">▶</div>
    `;

    card.addEventListener('click', () => startScenario(scen));
    container.appendChild(card);
  });

  showView('list');
}

// ═══════════════════════════════════════════════════════════════════
// 4. DÉMARRER UN SCÉNARIO
// ═══════════════════════════════════════════════════════════════════

function startScenario(scen) {
  currentScenario = scen;
  currentStepIndex = 0;
  userAnswers = [];
  isWaitingForNext = false;

  // Mettre à jour le header
  const iconEl = document.getElementById('convSimIcon');
  const titleEl = document.getElementById('convSimTitle');
  if (iconEl) iconEl.textContent = scen.icon;
  if (titleEl) titleEl.textContent = scen.title;

  // Afficher le setting
  showView('sim');
  renderSetting();
}

function renderSetting() {
  const dialogue = document.getElementById('convDialogue');
  if (!dialogue) return;

  dialogue.innerHTML = '';

  // Carte de contexte
  const contextCard = document.createElement('div');
  contextCard.className = 'conv-msg conv-msg-setting';
  contextCard.innerHTML = `
    <div class="conv-setting-label">📍 Situation</div>
    <div class="conv-setting-text">${escapeHtml(currentScenario.setting)}</div>
    <div class="conv-setting-role">
      <strong>Your role:</strong> ${escapeHtml(currentScenario.playerRole)}
    </div>
    <div class="conv-setting-npc">
      <strong>You're speaking to:</strong> ${escapeHtml(currentScenario.npcName)} — ${escapeHtml(currentScenario.npcRole)}
    </div>
    <button class="btn btn-primary" style="margin-top:1rem;" onclick="renderStep()">Start the conversation →</button>
  `;
  dialogue.appendChild(contextCard);

  // Vider les choix et feedback
  const choices = document.getElementById('convChoices');
  const feedback = document.getElementById('convFeedback');
  if (choices) choices.innerHTML = '';
  if (feedback) feedback.style.display = 'none';
}

// ═══════════════════════════════════════════════════════════════════
// 5. AFFICHER UNE ÉTAPE (question du PNJ + choix)
// ═══════════════════════════════════════════════════════════════════

function renderStep() {
  if (!currentScenario || currentStepIndex >= currentScenario.steps.length) {
    showResults();
    return;
  }

  const step = currentScenario.steps[currentStepIndex];
  const dialogue = document.getElementById('convDialogue');
  const choices = document.getElementById('convChoices');
  const feedback = document.getElementById('convFeedback');

  // Mettre à jour la progression
  const progressEl = document.getElementById('convSimProgress');
  if (progressEl) {
    progressEl.textContent = `${currentStepIndex + 1} / ${currentScenario.steps.length}`;
  }

  // Ajouter le message du PNJ
  const npcMsg = document.createElement('div');
  npcMsg.className = 'conv-msg conv-msg-npc';
  npcMsg.innerHTML = `
    <div class="conv-msg-avatar" style="background:${getCategoryColor(currentScenario.category)}">${currentScenario.icon}</div>
    <div class="conv-msg-bubble">
      <div class="conv-msg-npc-name">${escapeHtml(currentScenario.npcName)}</div>
      <div class="conv-msg-text">${escapeHtml(step.npc)}</div>
      <button class="conv-msg-tts" data-tts="${escapeHtml(step.npc)}" title="Listen">🔊</button>
    </div>
  `;

  // Scroll doux : si c'est le premier message, remplacer le setting
  if (currentStepIndex === 0 && dialogue) {
    dialogue.innerHTML = '';
  }

  if (dialogue) {
    dialogue.appendChild(npcMsg);
    scrollToBottom(dialogue);
  }

  // TTS auto pour le PNJ (optionnel — on peut l'activer)
  // speakFrench(step.npc);

  // Bouton TTS
  const ttsBtn = npcMsg.querySelector('.conv-msg-tts');
  if (ttsBtn) {
    ttsBtn.addEventListener('click', () => speakFrench(step.npc));
  }

  // Afficher les choix
  if (choices) {
    choices.innerHTML = '';
    choices.style.display = 'block';

    step.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'conv-choice-btn';
      btn.innerHTML = `<span class="conv-choice-letter">${String.fromCharCode(65 + idx)}</span>
                       <span class="conv-choice-text">${escapeHtml(opt.text)}</span>`;
      btn.addEventListener('click', () => handleChoice(idx));
      choices.appendChild(btn);
    });
  }

  // Cacher le feedback
  if (feedback) feedback.style.display = 'none';
  isWaitingForNext = false;
}

// ═══════════════════════════════════════════════════════════════════
// 6. GÉRER LE CHOIX DE L'UTILISATEUR
// ═══════════════════════════════════════════════════════════════════

function handleChoice(choiceIndex) {
  if (isWaitingForNext) return;

  const step = currentScenario.steps[currentStepIndex];
  const chosen = step.options[choiceIndex];

  // Désactiver tous les boutons de choix
  const choiceBtns = document.querySelectorAll('.conv-choice-btn');
  choiceBtns.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === choiceIndex) {
      btn.classList.add('chosen');
    }
    // Marquer la meilleure réponse
    if (step.options[idx].correct === 2) {
      btn.classList.add('best');
    }
  });

  // Enregistrer la réponse
  const maxCorrect = Math.max(...step.options.map(o => o.correct));
  userAnswers.push({
    step: currentStepIndex,
    chosenText: chosen.text,
    correct: chosen.correct,
    maxCorrect: maxCorrect,
    feedback: chosen.feedback
  });

  // Ajouter le message de l'utilisateur dans le dialogue
  const dialogue = document.getElementById('convDialogue');
  if (dialogue) {
    const userMsg = document.createElement('div');
    userMsg.className = 'conv-msg conv-msg-user';
    userMsg.innerHTML = `
      <div class="conv-msg-bubble conv-msg-bubble-user">
        <div class="conv-msg-text">${escapeHtml(chosen.text)}</div>
      </div>
      <div class="conv-msg-avatar conv-msg-avatar-user">🧑</div>
    `;
    dialogue.appendChild(userMsg);
    scrollToBottom(dialogue);
  }

  // Afficher le feedback
  showFeedback(chosen);
  isWaitingForNext = true;
}

// ═══════════════════════════════════════════════════════════════════
// 7. FEEDBACK — Correction douce
// ═══════════════════════════════════════════════════════════════════

function showFeedback(chosen) {
  const feedback = document.getElementById('convFeedback');
  const feedbackText = document.getElementById('convFeedbackText');
  const nextBtn = document.getElementById('convNextBtn');

  if (!feedback || !feedbackText) return;

  let borderColor = '#F59E0B'; // orange par défaut
  if (chosen.correct === 2) borderColor = '#059669'; // vert
  if (chosen.correct === 0) borderColor = '#DC2626'; // rouge

  feedback.style.display = 'block';
  feedback.style.borderLeftColor = borderColor;
  feedbackText.innerHTML = chosen.feedback;

  // Cacher les choix
  const choices = document.getElementById('convChoices');
  if (choices) choices.style.display = 'none';

  if (nextBtn) {
    nextBtn.onclick = () => {
      currentStepIndex++;
      renderStep();
    };
  }

  // Scroll pour voir le feedback
  setTimeout(() => feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
}

// ═══════════════════════════════════════════════════════════════════
// 8. RÉSULTATS — Score et analyse
// ═══════════════════════════════════════════════════════════════════

function showResults() {
  showView('results');

  const total = userAnswers.length;
  const maxScore = total * 2;
  const userScore = userAnswers.reduce((sum, a) => sum + a.correct, 0);
  const pct = maxScore > 0 ? Math.round((userScore / maxScore) * 100) : 0;

  // Score
  const scoreEl = document.getElementById('convResultScore');
  if (scoreEl) scoreEl.textContent = pct + '%';

  // Titre et message
  const titleEl = document.getElementById('convResultTitle');
  const msgEl = document.getElementById('convResultMsg');

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

  // Breakdown
  const breakdownEl = document.getElementById('convResultBreakdown');
  if (breakdownEl) {
    breakdownEl.innerHTML = '';
    userAnswers.forEach((a, idx) => {
      const row = document.createElement('div');
      row.className = 'conv-result-row';
      const icon = a.correct === 2 ? '✅' : a.correct === 1 ? '🟡' : '❌';
      row.innerHTML = `
        <span class="conv-result-icon">${icon}</span>
        <span class="conv-result-num">#${idx + 1}</span>
        <span class="conv-result-text">${escapeHtml(a.chosenText.substring(0, 40))}${a.chosenText.length > 40 ? '...' : ''}</span>
      `;
      breakdownEl.appendChild(row);
    });
  }

  // Sauvegarder le progrès dans le profil joueur
  saveConversationProgress(pct);
}

function saveConversationProgress(score) {
  const currentName = (typeof PlayerManager !== 'undefined')
    ? PlayerManager.getCurrent()
    : null;
  if (!currentName || !currentScenario) return;

  const players = (typeof getPlayers === 'function') ? getPlayers() : {};
  const p = players[currentName];
  if (!p) return;

  if (!p.conversationProgress) p.conversationProgress = {};
  const prev = p.conversationProgress[currentScenario.id];
  const prevBest = prev ? prev.bestScore : 0;

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

// ═══════════════════════════════════════════════════════════════════
// 9. NAVIGATION ENTRE VUES
// ═══════════════════════════════════════════════════════════════════

function showView(view) {
  const listView = document.getElementById('convList');
  const simView = document.getElementById('convSim');
  const resultsView = document.getElementById('convResults');

  if (listView) listView.style.display = view === 'list' ? 'block' : 'none';
  if (simView) simView.style.display = view === 'sim' ? 'block' : 'none';
  if (resultsView) resultsView.style.display = view === 'results' ? 'block' : 'none';

  if (view === 'list') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function exitConversation() {
  currentScenario = null;
  currentStepIndex = 0;
  userAnswers = [];
  isWaitingForNext = false;
  renderScenarioList();
}

function restartScenario() {
  if (currentScenario) {
    startScenario(currentScenario);
  }
}

// ═══════════════════════════════════════════════════════════════════
// 10. TTS — Text-to-Speech
// ═══════════════════════════════════════════════════════════════════

function setupTTS() {
  if ('speechSynthesis' in window) {
    // Précharger les voix
    const voices = speechSynthesis.getVoices();
    if (voices.length === 0) {
      speechSynthesis.addEventListener('voiceschanged', () => {});
    }
  }
}

function speakFrench(text) {
  if (!('speechSynthesis' in window)) {
    toast('Text-to-speech not available');
    return;
  }

  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.85;

  const voices = speechSynthesis.getVoices();
  const frVoice = voices.find(v => v.lang.startsWith('fr'));
  if (frVoice) utterance.voice = frVoice;

  speechSynthesis.speak(utterance);
}

// ═══════════════════════════════════════════════════════════════════
// 11. UTILITAIRES
// ═══════════════════════════════════════════════════════════════════

function getCategoryColor(cat) {
  const colors = {
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

// ═══════════════════════════════════════════════════════════════════
// 12. DÉMARRAGE
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', initConversation);
