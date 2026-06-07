// ═══════════════════════════════════════════════════════════════════
// DASHBOARD.JS — Daily French 🥖 v2.1
// Logique tableau de bord : journey, badges, caméléon, historique, skills
// 
// AJOUTS v2.1 :
//   + renderLifeSkills() : état "vide" explicite avec message + bouton
//   + renderLifeSkills() : affiche toujours les 10 compétences
//   + Mini-jeu "Life Simulator" intégré
//   + initDashboard() : détecte joueur et redirige si besoin
// ═══════════════════════════════════════════════════════════════════

// ─── 1. INIT ────────────────────────────────────────────────────────
function initDashboard() {
  const current = (typeof PlayerManager !== 'undefined') ? PlayerManager.getCurrent() : null;
  if (!current) { 
    if (typeof openModal === 'function') openModal(); 
    return; 
  }
  updateDashboard();
}

function updateDashboard() {
  const name = (typeof PlayerManager !== 'undefined') ? PlayerManager.getCurrent() : null;
  if (!name) return;
  const players = (typeof getPlayers === 'function') ? getPlayers() : {};
  const p = players[name];
  if (!p) return;
  
  if (typeof fillSelect === 'function') fillSelect(name);
  renderLifeSkills(p);
  renderJourneyMap(p);
  renderBadges(p);
  renderCameleon(p);
  renderHistory(p);
  renderGenius();
}

// ─── 2. JOURNEY MAP ─────────────────────────────────────────────────
function renderJourneyMap(p) {
  const container = document.getElementById('journeyMap');
  if (!container || typeof LEVEL_NAMES === 'undefined') return;
  
  container.innerHTML = '';
  const max = SUBJECT_CONFIG?.maxLevel || 20;
  const current = p.currentLevel || 1;
  const done = p.completed || [];
  
  for (let i = 1; i <= max; i++) {
    const tile = document.createElement('div');
    tile.className = 'journey-tile';
    tile.title = LEVEL_NAMES[i] || 'Level ' + i;
    tile.innerHTML = i + (done.includes(i) ? '<span class="check">✓</span>' : '');
    
    if (done.includes(i)) tile.classList.add('completed');
    else if (i === current) tile.classList.add('active');
    else if (i > current) tile.classList.add('locked');
    
    tile.addEventListener('click', () => {
      if (!tile.classList.contains('locked'))
        window.location.href = 'quiz.html?section=levels&level=' + i;
    });
    
    container.appendChild(tile);
  }
}

// ─── 3. BADGES ──────────────────────────────────────────────────────
const BADGES_DEF = [
  {id:1, icon:'🙋',label:'First Step', test:p=>(p.completed||[]).length>=1},
  {id:2, icon:'🛒',label:'Shopper', test:p=>(p.completed||[]).includes(2)},
  {id:3, icon:'🌿',label:'Gardener', test:p=>(p.completed||[]).includes(3)},
  {id:4, icon:'🏘️',label:'Neighbour', test:p=>(p.completed||[]).includes(4)},
  {id:5, icon:'❤️',label:'Tasteful', test:p=>(p.completed||[]).includes(5)},
  {id:6, icon:'🏬',label:'Mall Rat', test:p=>(p.completed||[]).includes(6)},
  {id:7, icon:'👫',label:'Socialite', test:p=>(p.completed||[]).includes(7)},
  {id:8, icon:'🌤️',label:'Météo', test:p=>(p.completed||[]).includes(8)},
  {id:9, icon:'⚡', label:'Verb Master', test:p=>(p.completed||[]).includes(9)},
  {id:10,icon:'🎩',label:'Polite', test:p=>(p.completed||[]).includes(10)},
  {id:11,icon:'🇫🇷',label:'Local', test:p=>(p.completed||[]).includes(11)},
  {id:12,icon:'🌅',label:'Early Bird', test:p=>(p.completed||[]).includes(12)},
  {id:13,icon:'💭',label:'Emotional', test:p=>(p.completed||[]).includes(13)},
  {id:14,icon:'🍽️',label:'Fed', test:p=>(p.completed||[]).includes(14)},
  {id:15,icon:'🏡',label:'Home Owner', test:p=>(p.completed||[]).includes(15)},
  {id:16,icon:'👨‍👩‍👧',label:'Family', test:p=>(p.completed||[]).includes(16)},
  {id:17,icon:'📅',label:'Planner', test:p=>(p.completed||[]).includes(17)},
  {id:18,icon:'💊',label:'Healthy', test:p=>(p.completed||[]).includes(18)},
  {id:19,icon:'👨‍🍳',label:'Chef', test:p=>(p.completed||[]).includes(19)},
  {id:20,icon:'🗣️',label:'Fluent', test:p=>(p.completed||[]).includes(20)},
  {id:21,icon:'🔥',label:'Streak 3', test:p=>(p.streak||0)>=3},
  {id:22,icon:'🔥',label:'Streak 7', test:p=>(p.streak||0)>=7},
  {id:23,icon:'💯',label:'Perfectionist', test:p=>p.totalQuestions>0&&p.totalCorrect===p.totalQuestions},
  {id:24,icon:'📚',label:'Bookworm', test:p=>(p.sessionHistory||[]).length>=10},
  {id:25,icon:'🎯',label:'Sharpshooter', test:p=>(p.completed||[]).length>=10},
  {id:26,icon:'🏆',label:'Halfway', test:p=>(p.completed||[]).length>=10},
  {id:27,icon:'👑',label:'Champion', test:p=>(p.completed||[]).length>=20},
  {id:28,icon:'🦎',label:'Cameleon', test:p=>(p.cameleonHelped||0)>=1},
  {id:29,icon:'🪔',label:'Genius', test:p=>{
    try{return(JSON.parse(localStorage.getItem('dailyFrench_genius'))||[]).length>=5;}catch{return false;}
  }},
  {id:30,icon:'🚀',label:'Explorer', test:p=>(p.completed||[]).length>=5}
];

function renderBadges(p) {
  const c = document.getElementById('badgesGrid');
  if (!c) return;
  c.innerHTML = '';
  
  BADGES_DEF.forEach(b => {
    const ok = b.test(p);
    const el = document.createElement('div');
    el.className = 'badge-item' + (ok ? ' unlocked' : ' locked');
    el.innerHTML = '<div class="badge-icon">' + b.icon + '</div><div class="badge-label">' + b.label + '</div>';
    c.appendChild(el);
  });
}

// ─── 4. CAMELEON ───────────────────────────────────────────────────
const CAM_STAGES = [
  {icon:'🥚',name:'Egg', msg:'Wake me up with your first session!'},
  {icon:'🦎',name:'Baby', msg:"I'm hungry for more words!"},
  {icon:'🐉',name:'Youth', msg:"We're making great progress!"},
  {icon:'🦕',name:'Adult', msg:"You're becoming a true master!"},
  {icon:'🐲',name:'Sage', msg:'Together we are unstoppable!'}
];

function renderCameleon(p) {
  const c = document.getElementById('cameleonStage');
  if (!c) return;
  
  const n = (p.sessionHistory||[]).length;
  const st = n>=30?4:n>=15?3:n>=5?2:n>=1?1:0;
  const s = CAM_STAGES[st];
  
  c.innerHTML = `
    <div class="cameleon-avatar">${s.icon}</div>
    <div class="cameleon-name">${s.name}</div>
    <div class="cameleon-msg">${s.msg}</div>
    <div class="cameleon-bar"><div class="cameleon-fill" style="width:${Math.min(100,(n/30)*100)}%"></div></div>
    <div class="cameleon-count">${n} session${n!==1?'s':''}</div>
  `;
}

// ─── 5. HISTORIQUE ──────────────────────────────────────────────────
function renderHistory(p) {
  const c = document.getElementById('historyList');
  if (!c) return;
  
  const sessions = (p.sessionHistory||[]).slice().reverse();
  if (!sessions.length) {
    c.innerHTML = '<div class="empty-state">No sessions yet — go play!</div>'; 
    return;
  }
  
  c.innerHTML = '';
  sessions.forEach(s => {
    const row = document.createElement('div');
    row.className = 'history-row';
    const d = s.date ? new Date(s.date).toLocaleDateString('en-GB') : '—';
    const pct = s.total > 0 ? Math.round((s.correct/s.total)*100) : 0;
    
    row.innerHTML = `
      <span class="h-date">${d}</span>
      <span class="h-level">Lvl ${s.level||'?'}</span>
      <span class="h-score">${s.correct||0}/${s.total||0}</span>
      <span class="h-pct">${pct}%</span>
    `;
    c.appendChild(row);
  });
}

// ─── 6. MON GÉNIE ───────────────────────────────────────────────────
function renderGenius() {
  const c = document.getElementById('geniusPanel');
  if (!c) return;
  
  let words = [];
  try { 
    words = JSON.parse(localStorage.getItem('dailyFrench_genius')) || []; 
  } catch {}
  
  if (!words.length) {
    c.innerHTML = '<div class="empty-state">No words saved yet. Tap a highlighted word during a lesson to save it here.</div>'; 
    return;
  }
  
  const list = document.createElement('div');
  list.className = 'genius-list';
  
  words.forEach(w => {
    const chip = document.createElement('span');
    chip.className = 'genius-chip';
    chip.textContent = w.fr || w;
    chip.title = w.en || '';
    list.appendChild(chip);
  });
  
  const btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.style.marginTop = '1rem';
  btn.textContent = '🎯 Quiz me on my words!';
  btn.addEventListener('click', () => {
    sessionStorage.setItem('dailyFrench_geniusQuiz', JSON.stringify(words.slice(0,5)));
    window.location.href = 'quiz.html?section=levels&mode=genius';
  });
  
  c.innerHTML = '';
  c.appendChild(list);
  c.appendChild(btn);
}

// ─── 7. LIFE SKILLS — "Ma vie en France" — RÉPARÉ v2.1 ───────────────
function renderLifeSkills(p) {
  const container = document.getElementById('lifeSkillsGrid');
  if (!container) return;
  
  // Si pas de données, affiche un message d'invitation
  const hasData = p && (
    (p.completed && p.completed.length > 0) ||
    (p.lifeSkillsProgress && (
      (p.lifeSkillsProgress.sosFavorites && p.lifeSkillsProgress.sosFavorites.length > 0) ||
      (p.lifeSkillsProgress.conversationScores && Object.keys(p.lifeSkillsProgress.conversationScores).length > 0)
    ))
  );
  
  if (!hasData) {
    container.innerHTML = `
      <div class="life-skill-empty" style="text-align:center;padding:2rem;color:var(--muted);">
        <div style="font-size:3em;margin-bottom:0.5em;">🇫🇷</div>
        <p>Start playing to see your life skills!</p>
        <p style="font-size:0.9em;">Complete quiz levels, save SOS phrases, and finish conversation scenarios.</p>
        <button class="btn btn-primary" onclick="window.location.href='quiz.html?section=levels'" style="margin-top:1rem;">
          🎮 Start Playing
        </button>
      </div>
    `;
    return;
  }
  
  // Affiche les 10 compétences avec scoring
  container.innerHTML = '';
  
  const skills = typeof LIFE_SKILLS !== 'undefined' ? LIFE_SKILLS : [];
  
  skills.forEach(skill => {
    const score = typeof calculateSkillScore === 'function' 
      ? calculateSkillScore(skill, p) 
      : 0;
    
    const stars = typeof renderStars === 'function' 
      ? renderStars(score) 
      : '☆☆☆☆☆';
    
    const levelInfo = typeof getSkillLevelLabel === 'function'
      ? getSkillLevelLabel(score)
      : { label: 'Not started', color: '#999' };
    
    const card = document.createElement('div');
    card.className = 'life-skill-card';
    card.innerHTML = `
      <div class="life-skill-header">
        <div class="life-skill-icon">${skill.icon || '📋'}</div>
        <div class="life-skill-info">
          <div class="life-skill-title">${skill.title || 'Skill'}</div>
          <div class="life-skill-subtitle">${skill.titleFr || ''}</div>
        </div>
        <div class="life-skill-score">
          <div class="life-skill-stars">${stars}</div>
          <div class="life-skill-level" style="color:${levelInfo.color}">${levelInfo.label}</div>
        </div>
      </div>
      <div class="life-skill-bar-track">
        <div class="life-skill-bar-fill" style="width:${(score/5)*100}%"></div>
      </div>
      <div class="life-skill-desc">${skill.desc || ''}</div>
    `;
    
    container.appendChild(card);
  });
  
  // Bouton mini-jeu
  const btn = document.createElement('button');
  btn.className = 'btn btn-primary btn-large';
  btn.style.marginTop = '1rem';
  btn.style.width = '100%';
  btn.textContent = '🎮 Play Life Simulator';
  btn.onclick = () => startLifeSimulator();
  container.appendChild(btn);
}

// ─── 8. MINI-JEU LIFE SIMULATOR — NOUVEAU v2.1 ─────────────────────
const LIFE_SIMULATOR_SCENARIOS = [
  {
    id: 'logement',
    title: '🏠 Finding an apartment',
    situations: [
      { q: 'You call a landlord. What do you say?', options: ['Bonjour, je cherche un appartement', 'Je veux une maison', 'Donnez-moi les clés'], correct: 0 },
      { q: 'The landlord asks: "Quand voulez-vous visiter?"', options: ['Demain à 14h', 'Je ne sais pas', 'Peut-être'], correct: 0 }
    ]
  },
  {
    id: 'courses',
    title: '🛒 At the supermarket',
    situations: [
      { q: 'You need bread. What do you ask?', options: ['Une baguette, s\'il vous plaît', 'Du pain', 'Je veux ça'], correct: 0 },
      { q: 'The cashier says: "Ça fait 12,50€"', options: ['Voici 15€', 'C\'est cher', 'Je ne paie pas'], correct: 0 }
    ]
  },
  {
    id: 'medecin',
    title: '🩺 At the doctor',
    situations: [
      { q: 'You have a headache. What do you say?', options: ['J\'ai mal à la tête', 'Ma tête est cassée', 'Je suis malade'], correct: 0 },
      { q: 'The doctor asks: "Depuis quand?"', options: ['Depuis hier', 'Toujours', 'Je ne sais pas'], correct: 0 }
    ]
  }
];

let lifeSimState = { scenario: null, questionIndex: 0, score: 0, answers: [] };

function startLifeSimulator() {
  const container = document.getElementById('lifeSkillsGrid');
  if (!container) return;
  
  // Choix du scénario
  container.innerHTML = '<h3 style="margin-bottom:1rem;">🎮 Choose a situation:</h3>';
  
  LIFE_SIMULATOR_SCENARIOS.forEach(scen => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-secondary';
    btn.style.display = 'block';
    btn.style.width = '100%';
    btn.style.marginBottom = '0.5rem';
    btn.textContent = scen.title;
    btn.onclick = () => startLifeScenario(scen);
    container.appendChild(btn);
  });
}

function startLifeScenario(scenario) {
  lifeSimState = { scenario: scenario, questionIndex: 0, score: 0, answers: [] };
  renderLifeQuestion();
}

function renderLifeQuestion() {
  const container = document.getElementById('lifeSkillsGrid');
  const s = lifeSimState.scenario;
  const q = s.situations[lifeSimState.questionIndex];
  
  if (!q) {
    showLifeResults();
    return;
  }
  
  container.innerHTML = `
    <div style="margin-bottom:1rem;">
      <button class="btn-ghost btn-small" onclick="renderLifeSkills(PlayerManager.load(PlayerManager.getCurrent()))">← Back</button>
    </div>
    <h3>${s.title}</h3>
    <div style="background:var(--bg-card);padding:1rem;border-radius:var(--r);margin:1rem 0;">
      <p style="font-weight:600;">${q.q}</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:0.5rem;">
      ${q.options.map((opt, i) => `
        <button class="btn btn-secondary" onclick="answerLifeQuestion(${i})" style="text-align:left;">
          ${String.fromCharCode(65+i)}. ${opt}
        </button>
      `).join('')}
    </div>
    <div style="margin-top:1rem;text-align:center;color:var(--muted);">
      Question ${lifeSimState.questionIndex + 1} / ${s.situations.length}
    </div>
  `;
}

function answerLifeQuestion(choice) {
  const q = lifeSimState.scenario.situations[lifeSimState.questionIndex];
  const isCorrect = choice === q.correct;
  
  if (isCorrect) lifeSimState.score += 10;
  lifeSimState.answers.push({ correct: isCorrect });
  
  // Feedback visuel
  const container = document.getElementById('lifeSkillsGrid');
  const buttons = container.querySelectorAll('.btn-secondary');
  buttons.forEach((btn, i) => {
    if (i === q.correct) btn.style.background = 'var(--green-light)';
    else if (i === choice && !isCorrect) btn.style.background = 'var(--red-light)';
  });
  
  setTimeout(() => {
    lifeSimState.questionIndex++;
    renderLifeQuestion();
  }, 1000);
}

function showLifeResults() {
  const container = document.getElementById('lifeSkillsGrid');
  const total = lifeSimState.answers.length;
  const correct = lifeSimState.answers.filter(a => a.correct).length;
  const pct = Math.round((correct / total) * 100);
  
  // Sauvegarde la progression
  const player = PlayerManager.load(PlayerManager.getCurrent());
  if (player) {
    player.lifeSkillsProgress = player.lifeSkillsProgress || {};
    player.lifeSkillsProgress.simulatorScores = player.lifeSkillsProgress.simulatorScores || {};
    player.lifeSkillsProgress.simulatorScores[lifeSimState.scenario.id] = pct;
    PlayerManager.save(player.name, player);
  }
  
  container.innerHTML = `
    <div style="text-align:center;padding:2rem;">
      <div style="font-size:3em;">${pct >= 70 ? '🌟' : pct >= 50 ? '👍' : '💪'}</div>
      <h2>${pct}%</h2>
      <p>${correct}/${total} correct</p>
      <p style="color:var(--muted);">${pct >= 70 ? 'Great job!' : 'Keep practicing!'}</p>
      <button class="btn btn-primary" onclick="startLifeSimulator()" style="margin-top:1rem;">Play Again</button>
      <button class="btn btn-ghost" onclick="renderLifeSkills(PlayerManager.load(PlayerManager.getCurrent()))" style="margin-top:0.5rem;">Back to Skills</button>
    </div>
  `;
}
