// conversation.js — Daily French 🥖 v6.4
// FIX CRITIQUE : getScenarioList lit window.CONVERSATION_SCENARIOS
// initConversation écoute EventBus — ZERO polling setTimeout

var currentScenario   = null;
var currentStepIndex  = 0;
var userAnswers       = [];
var _ttsEnabled       = true;
var _ttsUserActivated = false;

function getScenarioList() {
  var s = window.CONVERSATION_SCENARIOS;
  if (!s || typeof s !== 'object') return [];
  return Object.values(s);
}

// ── TTS ──────────────────────────────────────────────────────────
function speak(text, lang) {
  if (!_ttsEnabled || !window.speechSynthesis || !text) return;
  if (!_ttsUserActivated) { showTtsActivationPrompt(); return; }
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(text);
  u.lang = lang || 'fr-FR'; u.rate = 0.9; u.pitch = 1;
  u.onerror = function(e) { _ttsEnabled = false; };
  window.speechSynthesis.speak(u);
}
function speakFrench(t)  { speak(t, 'fr-FR'); }
function speakEnglish(t) { speak(t, 'en-US'); }

function activateTts() {
  _ttsUserActivated = true;
  hideTtsActivationPrompt();
  var t = new SpeechSynthesisUtterance('');
  t.lang = 'fr-FR'; t.volume = 0;
  window.speechSynthesis.speak(t);
}
function showTtsActivationPrompt() {
  var fb = document.getElementById('convFeedback');
  var ft = document.getElementById('convFeedbackText');
  var nb = document.getElementById('convNextBtn');
  if (!fb || !ft) return;
  fb.style.display = 'block';
  fb.style.borderLeftColor = '#3B82F6';
  ft.innerHTML = '<div style="color:#3B82F6">🔊 Tap to enable sound</div>';
  if (nb) { nb.textContent = '🔊 Enable Sound'; nb.onclick = function() { activateTts(); fb.style.display='none'; }; }
}
function hideTtsActivationPrompt() {
  var fb = document.getElementById('convFeedback');
  if (fb) fb.style.display = 'none';
}

// ── INIT ─────────────────────────────────────────────────────────
function initConversation() {
  if (typeof initCore === 'function') initCore();

  // Déjà chargé
  if (window._conversationsReady && getScenarioList().length > 0) {
    renderScenarioList();
    updateBento();
    return;
  }

  // Attendre l'événement — une seule fois, pas de polling
  if (typeof EventBus !== 'undefined') {
    EventBus.on('conversationsLoaded', function handler() {
      EventBus.off('conversationsLoaded', handler);
      renderScenarioList();
      updateBento();
    });
  } else {
    var c = document.getElementById('convScenarios');
    if (c) c.innerHTML = '<div style="padding:2rem;text-align:center;color:var(--muted)">⚠️ EventBus missing — check script order.</div>';
  }
}

function updateBento() {
  var name = typeof PlayerManager !== 'undefined' ? PlayerManager.getCurrent() : null;
  var p    = name ? PlayerManager.load(name) : null;
  var b1 = document.getElementById('b1');
  var b2 = document.getElementById('b2');
  var b3 = document.getElementById('b3');
  if (b1) b1.textContent = p ? (p.currentLevel || 1) : 1;
  if (b2) b2.textContent = p ? (p.score || 0) : 0;
  if (b3) b3.textContent = p ? ((p.conversationsDone||0)+'/20') : '0/20';
}

// ── LISTE ────────────────────────────────────────────────────────
function renderScenarioList() {
  if (currentScenario !== null) return;
  var container = document.getElementById('convScenarios');
  if (!container) return;
  var list = getScenarioList();
  if (!list.length) {
    container.innerHTML = '<div style="padding:2rem;text-align:center">Loading...</div>';
    return;
  }
  container.innerHTML = '';
  var name = typeof PlayerManager !== 'undefined' ? PlayerManager.getCurrent() : null;
  var p    = name ? PlayerManager.load(name) : null;
  var lvl  = p ? (p.currentLevel || 1) : 1;

  list.forEach(function(sc) {
    var locked = (sc.requiredLesson || 999) > lvl;
    var card = document.createElement('div');
    card.className = 'conv-scenario-card' + (locked ? ' conv-locked' : '');
    if (!locked) card.addEventListener('click', function() { activateTts(); startScenario(sc.level); });
    var ex = sc.dialogue ? sc.dialogue.filter(function(d){return d.speaker==='you';}).length : 0;
    var stars = '★'.repeat(sc.difficulty||1) + '☆'.repeat(Math.max(0,3-(sc.difficulty||1)));
    card.innerHTML =
      '<div class="conv-scen-icon">'+(locked?'🔒':(sc.icon||'🗣️'))+'</div>'+
      '<div class="conv-scen-info">'+
        '<div class="conv-scen-title">'+esc(sc.title)+'</div>'+
        '<div class="conv-scen-subtitle">'+esc(sc.titleFr||'')+'</div>'+
        '<div class="conv-scen-meta"><span class="conv-scen-diff">'+stars+'</span><span class="conv-scen-steps">'+ex+' exchanges</span></div>'+
      '</div>'+
      '<div class="conv-scen-arrow">▶</div>';
    container.appendChild(card);
  });
}

function esc(t) {
  return t ? String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') : '';
}

// ── START ────────────────────────────────────────────────────────
function startScenario(level) {
  var sc = window.CONVERSATION_SCENARIOS[level];
  if (!sc) { console.error('Scenario '+level+' not found'); return; }
  currentScenario = sc; currentStepIndex = 0; userAnswers = [];
  document.getElementById('convList').style.display    = 'none';
  document.getElementById('convSim').style.display     = 'block';
  document.getElementById('convResults').style.display = 'none';
  var d = document.getElementById('convDialogue');
  if (d) d.innerHTML = '';
  document.getElementById('convSimIcon').textContent  = sc.icon||'🗣️';
  document.getElementById('convSimTitle').textContent = sc.title||'Scenario';
  renderSetting();
}

function renderSetting() {
  var d = document.getElementById('convDialogue');
  if (!d) return;
  var div = document.createElement('div');
  div.className = 'conv-msg conv-msg-setting';
  div.id = 'convSettingCard';
  var html = '<div class="conv-setting-label">📍 Situation</div>'+
             '<div class="conv-setting-text">'+esc(currentScenario.setting||'')+'</div>';
  if (currentScenario.vocabulary&&currentScenario.vocabulary.length)
    html += '<div style="margin-top:0.5rem"><strong>📝</strong> '+esc(currentScenario.vocabulary.join(', '))+'</div>';
  html += '<button class="btn btn-primary" style="margin-top:1rem" onclick="activateTts();showNextNpcMessage()">▶ Start</button>';
  div.innerHTML = html;
  d.appendChild(div);
  d.scrollTop = d.scrollHeight;
}

// ── NPC MESSAGE ──────────────────────────────────────────────────
function showNextNpcMessage() {
  var s = document.getElementById('convSettingCard');
  if (s) s.remove();
  var d  = document.getElementById('convDialogue');
  var ch = document.getElementById('convChoices');
  var fb = document.getElementById('convFeedback');
  if (fb) fb.style.display = 'none';
  if (ch) ch.style.display = 'none';
  var step = currentScenario.dialogue[currentStepIndex];
  if (!step) { showResults(); return; }
  if (step.speaker === 'you') { renderQuestion(step); return; }

  var msg = document.createElement('div');
  msg.className = 'conv-msg conv-msg-npc';
  var av = document.createElement('div');
  av.className = 'conv-msg-avatar';
  av.textContent = currentScenario.icon||'🗣️';
  av.style.background = 'var(--primary)';
  var bub = document.createElement('div');
  bub.className = 'conv-msg-bubble';
  bub.innerHTML = '<div class="conv-msg-npc-name">'+esc(step.speaker)+'</div>'+
                  '<div class="conv-msg-text">'+esc(step.text||'')+'</div>';
  var sb = document.createElement('button');
  sb.className = 'conv-msg-tts'; sb.innerHTML = '🔊';
  sb.onclick = (function(t){return function(e){e.stopPropagation();activateTts();speakFrench(t);};})(step.text);
  bub.appendChild(sb);
  msg.appendChild(av); msg.appendChild(bub);
  d.appendChild(msg);
  speakFrench(step.text);

  var cont = document.createElement('button');
  cont.className = 'btn btn-primary'; cont.style.marginTop='0.75rem'; cont.textContent = '▶ Continue';
  cont.onclick = function() { cont.parentElement.remove(); currentStepIndex++; showNextNpcMessage(); };
  var w = document.createElement('div');
  w.style.cssText = 'display:flex;justify-content:center;padding:0.5rem 0';
  w.appendChild(cont); d.appendChild(w);
  d.scrollTop = d.scrollHeight;
  updateProgress();
}

// ── QUESTION ─────────────────────────────────────────────────────
function renderQuestion(step) {
  var d  = document.getElementById('convDialogue');
  var ch = document.getElementById('convChoices');
  var pr = document.createElement('div');
  pr.className = 'conv-msg conv-msg-npc'; pr.id = 'convQuestionPrompt';
  pr.innerHTML = '<div class="conv-msg-avatar" style="background:var(--gold)">❓</div>'+
                 '<div class="conv-msg-bubble"><div class="conv-msg-npc-name">Your turn</div>'+
                 '<div class="conv-msg-text">'+esc(step.text||'What do you say?')+'</div></div>';
  d.appendChild(pr); d.scrollTop = d.scrollHeight;
  speakEnglish(step.text||'What do you say?');

  if (ch) {
    ch.innerHTML = ''; ch.style.display = 'block';
    step.choices.forEach(function(choice, idx) {
      var btn = document.createElement('button');
      btn.className = 'conv-choice-btn';
      var sp = document.createElement('span');
      sp.className = 'conv-choice-speak'; sp.innerHTML = '🔊';
      sp.onclick = (function(t){return function(e){e.stopPropagation();activateTts();speakFrench(t);};})(choice.text);
      btn.innerHTML = '<span class="conv-choice-letter">'+String.fromCharCode(65+idx)+'</span>'+
                      '<span class="conv-choice-text">'+esc(choice.text)+'</span>';
      btn.appendChild(sp);
      btn.addEventListener('click', function(){handleChoice(idx);});
      ch.appendChild(btn);
    });
  }
  updateProgress();
}

// ── HANDLE CHOICE ────────────────────────────────────────────────
function handleChoice(idx) {
  var step = currentScenario.dialogue[currentStepIndex];
  if (!step||!step.choices||!step.choices[idx]) return;
  var choice = step.choices[idx];
  userAnswers.push({stepIndex:currentStepIndex,choiceIndex:idx,correct:choice.correct,text:choice.text});
  document.querySelectorAll('.conv-choice-btn').forEach(function(b,i){
    b.disabled=true;
    if(i===idx) b.classList.add('chosen');
    if(step.choices[i].correct===true) b.classList.add('best');
  });
  var d = document.getElementById('convDialogue');
  var um = document.createElement('div');
  um.className = 'conv-msg conv-msg-user';
  um.innerHTML = '<div class="conv-msg-avatar conv-msg-avatar-user">🧑</div>'+
                 '<div class="conv-msg-bubble conv-msg-bubble-user"><div class="conv-msg-text">'+esc(choice.text)+'</div></div>';
  d.appendChild(um); d.scrollTop = d.scrollHeight;
  speakFrench(choice.text);
  var ch = document.getElementById('convChoices');
  if (ch) ch.style.display = 'none';
  showFeedback(choice);
}

// ── FEEDBACK ─────────────────────────────────────────────────────
function showFeedback(choice) {
  var fb=document.getElementById('convFeedback');
  var ft=document.getElementById('convFeedbackText');
  var nb=document.getElementById('convNextBtn');
  if (!fb||!ft) return;
  fb.style.display='block';
  fb.style.borderLeftColor = choice.correct===true ? '#059669' : choice.correct===false ? '#DC2626' : '#F59E0B';
  ft.innerHTML = '<div style="font-size:1.1rem;font-weight:700;margin-bottom:0.5rem">'+
                 (choice.correct===true?'✅ Correct!':'❌ Not quite...')+'</div>'+
                 '<div>'+esc(choice.feedback||'')+'</div>';
  if (nb) {
    nb.textContent='▶ Continue';
    nb.onclick=function(){fb.style.display='none';currentStepIndex++;showNextNpcMessage();};
  }
  setTimeout(function(){fb.scrollIntoView({behavior:'smooth',block:'nearest'});},100);
}

function updateProgress() {
  var el=document.getElementById('convSimProgress');
  if (!el||!currentScenario) return;
  var total=currentScenario.dialogue.filter(function(d){return d.speaker==='you';}).length;
  el.textContent=Math.min(userAnswers.length+1,total)+' / '+total;
}

// ── RÉSULTATS ────────────────────────────────────────────────────
function showResults() {
  document.getElementById('convSim').style.display='none';
  document.getElementById('convResults').style.display='block';
  var correct=userAnswers.filter(function(a){return a.correct===true;}).length;
  var total=userAnswers.length;
  var pct=total>0?Math.round((correct/total)*100):0;
  document.getElementById('convResultScore').textContent=pct+'%';
  document.getElementById('convResultTitle').textContent=pct>=80?'🎉 Excellent!':pct>=50?'👍 Good effort!':'💪 Keep practicing!';
  document.getElementById('convResultMsg').textContent='You got '+correct+' out of '+total+' correct.';
  var bd=document.getElementById('convResultBreakdown');
  if (bd) {
    bd.innerHTML='';
    userAnswers.forEach(function(a,i){
      var row=document.createElement('div');
      row.className='conv-result-row';
      row.innerHTML='<span class="conv-result-icon">'+(a.correct?'✅':'❌')+'</span>'+
                    '<span class="conv-result-num">#'+(i+1)+'</span>'+
                    '<span class="conv-result-text">'+esc(a.text.substring(0,40))+(a.text.length>40?'...':'')+'</span>';
      bd.appendChild(row);
    });
  }
  var name=typeof PlayerManager!=='undefined'?PlayerManager.getCurrent():null;
  if (name) {
    var players=typeof getPlayers==='function'?getPlayers():{};
    var p=players[name];
    if (p) {
      p.score=(p.score||0)+(pct>=80?20:pct>=50?10:5);
      if (pct>=50) {
        if (!p.conversationsDone) p.conversationsDone=0;
        if (!p.conversationsLevels) p.conversationsLevels=[];
        if (p.conversationsLevels.indexOf(currentScenario.level)===-1) {
          p.conversationsLevels.push(currentScenario.level);
          p.conversationsDone=p.conversationsLevels.length;
        }
      }
      if (typeof savePlayers==='function') savePlayers(players);
      if (typeof loadPlayer==='function') loadPlayer(name);
    }
  }
  updateBento();
}

function exitConversation() {
  currentScenario=null; currentStepIndex=0; userAnswers=[];
  document.getElementById('convList').style.display='block';
  document.getElementById('convSim').style.display='none';
  document.getElementById('convResults').style.display='none';
  var d=document.getElementById('convDialogue'); if(d) d.innerHTML='';
  renderScenarioList();
}
function restartScenario() { if(currentScenario) startScenario(currentScenario.level); }
function capitalize(s) { return s?s.charAt(0).toUpperCase()+s.slice(1):'NPC'; }
function showQuestionAgain() {
  var d=document.getElementById('convDialogue'); if(!d) return;
  var p=d.querySelector('#convQuestionPrompt'); if(!p) return;
  p.scrollIntoView({behavior:'smooth',block:'center'});
  p.style.transition='background 0.3s'; p.style.background='rgba(251,191,36,0.2)';
  setTimeout(function(){p.style.background='';},800);
}
function showHint() {
  if (!currentScenario) return;
  var step=currentScenario.dialogue[currentStepIndex];
  if (!step||!step.choices) return;
  var c=step.choices.filter(function(x){return x.correct===true;})[0];
  if (!c) return;
  var words=c.text.split(' ');
  var fb=document.getElementById('convFeedback');
  var ft=document.getElementById('convFeedbackText');
  var nb=document.getElementById('convNextBtn');
  if (!fb||!ft) return;
  fb.style.display='block'; fb.style.borderLeftColor='#3B82F6';
  ft.innerHTML='<div style="color:#3B82F6">💡 Starts with "'+words[0]+'" — '+words.length+' words</div>';
  if (nb) { nb.textContent='Hide'; nb.onclick=function(){fb.style.display='none';}; }
}
