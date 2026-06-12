// ═══════════════════════════════════════════════════════════════════
// DASHBOARD.JS — Daily French v3.4
// CORRECTION : initDashboard attend lessonsLoaded proprement
// ═══════════════════════════════════════════════════════════════════

let lifeSimState = { scenario: null, questionIndex: 0, score: 0, answers: [] };

// ═══════════════════════════════════════════════════════════════════
// 1. INIT
// ═══════════════════════════════════════════════════════════════════

function initDashboard() {
  try {
    if (typeof initCore === 'function') initCore();
    const current = PlayerManager.getCurrent();
    if (!current) {
      if (typeof Modal !== 'undefined') Modal.open();
      return;
    }
    
    if (window._lessonsReady && LESSONS_DATA.length > 0) {
      updateDashboard();
    } else if (typeof EventBus !== 'undefined') {
      EventBus.on('lessonsLoaded', function(data) {
        console.log('[Dashboard] Lessons received: ' + (data ? data.count : 0));
        updateDashboard();
      });
      setTimeout(function() {
        if (window._lessonsReady && LESSONS_DATA.length > 0) {
          updateDashboard();
        }
      }, 100);
    } else {
      updateDashboard();
    }
  } catch (e) {
    console.error('[Dashboard] initDashboard error:', e);
    const main = document.querySelector('.dashboard-main');
    if (main) {
      main.innerHTML = '<div style="padding:2rem;text-align:center;color:var(--red)">Dashboard error. Check console.</div>';
    }
  }
}

function updateDashboard() {
  try {
    const current = PlayerManager.getCurrent();
    const p = PlayerManager.load(current);
    if (!p) {
      console.warn('[Dashboard] No player loaded');
      return;
    }
    renderJourneyMap(p);
    renderBadges(p);
    renderCameleon(p);
    renderHistory(p);
    renderGenius();
    renderLifeSkills(p);
  } catch (e) {
    console.error('[Dashboard] updateDashboard error:', e);
  }
}

// ═══════════════════════════════════════════════════════════════════
// 2. JOURNEY MAP
// ═══════════════════════════════════════════════════════════════════

function renderJourneyMap(p) {
  const container = document.getElementById('journeyMap');
  if (!container) return;
  container.innerHTML = '';
  const max = (typeof SUBJECT_CONFIG !== 'undefined' && SUBJECT_CONFIG.maxLevel) ? SUBJECT_CONFIG.maxLevel : 20;
  const done = p.completed || [];
  const currentLvl = p.currentLevel || 1;
  for (let i = 1; i <= max; i++) {
    const tile = document.createElement('div');
    tile.className = 'journey-tile';
    const fullName = (typeof LEVEL_NAMES !== 'undefined' && LEVEL_NAMES[i]) ? LEVEL_NAMES[i] : 'Level ' + i;
    const shortName = fullName.replace(/\p{Emoji}/gu, '').trim();
    if (done.includes(i) || i < currentLvl) {
      tile.classList.add('completed');
      tile.innerHTML = '<span class="journey-num">✓</span><span class="journey-name">' + shortName + '</span>';
    } else if (i === currentLvl) {
      tile.classList.add('active');
      tile.innerHTML = '<span class="journey-num">' + i + '</span><span class="journey-name">' + shortName + '</span>';
    } else {
      tile.classList.add('locked');
      tile.innerHTML = '<span class="journey-num">🔒</span><span class="journey-name">' + shortName + '</span>';
    }
    tile.addEventListener('click', function() {
      if (i <= currentLvl) {
        window.location.href = 'quiz.html?section=levels&level=' + i;
      }
    });
    container.appendChild(tile);
  }
}

// ═══════════════════════════════════════════════════════════════════
// 3. BADGES
// ═══════════════════════════════════════════════════════════════════

function renderBadges(p) {
  const container = document.getElementById('badgesGrid');
  if (!container) return;
  container.innerHTML = '';
  const unlocked = p.badges || [];
  BADGES_DEF.forEach(function(badge) {
    const isUnlocked = unlocked.includes(badge.id);
    const item = document.createElement('div');
    item.className = 'badge-item ' + (isUnlocked ? 'unlocked' : 'locked');
    item.title = badge.desc;
    item.innerHTML = '<div class="badge-icon">' + badge.icon + '</div><div class="badge-name">' + badge.name + '</div>';
    container.appendChild(item);
  });
}

function checkBadges(p) {
  const newBadges = [];
  const completed = p.completed || [];
  const history = p.sessionHistory || [];
  if (completed.includes(5) && !p.badges.includes('tasteful')) newBadges.push('tasteful');
  if (completed.includes(6) && !p.badges.includes('mall_rat')) newBadges.push('mall_rat');
  if (completed.includes(7) && !p.badges.includes('socialite')) newBadges.push('socialite');
  if (completed.includes(8) && !p.badges.includes('meteo')) newBadges.push('meteo');
  if (completed.includes(9) && !p.badges.includes('verb_master')) newBadges.push('verb_master');
  if (completed.includes(10) && !p.badges.includes('polite')) newBadges.push('polite');
  if (completed.includes(11) && !p.badges.includes('local')) newBadges.push('local');
  if (completed.includes(13) && !p.badges.includes('emotional')) newBadges.push('emotional');
  if (completed.includes(14) && !p.badges.includes('fed')) newBadges.push('fed');
  if (completed.includes(15) && !p.badges.includes('home_owner')) newBadges.push('home_owner');
  if (completed.includes(16) && !p.badges.includes('family')) newBadges.push('family');
  if (completed.includes(17) && !p.badges.includes('planner')) newBadges.push('planner');
  if (completed.includes(18) && !p.badges.includes('healthy')) newBadges.push('healthy');
  if (completed.includes(19) && !p.badges.includes('chef')) newBadges.push('chef');
  if (completed.includes(20) && !p.badges.includes('fluent')) newBadges.push('fluent');
  if (p.streak >= 3 && !p.badges.includes('streak_3')) newBadges.push('streak_3');
  if (p.streak >= 7 && !p.badges.includes('streak_7')) newBadges.push('streak_7');
  const hasPerfect = history.some(function(h) { return h.pct === 100; });
  if (hasPerfect && !p.badges.includes('perfectionist')) newBadges.push('perfectionist');
  if (completed.length >= 10 && !p.badges.includes('halfway')) newBadges.push('halfway');
  if (completed.length >= 20 && !p.badges.includes('champion')) newBadges.push('champion');
  const modes = new Set(history.map(function(h) { return h.mode; }).filter(Boolean));
  if (modes.size >= 3 && !p.badges.includes('explorer')) newBadges.push('explorer');
  const earlyPlays = history.filter(function(h) {
    const d = new Date(h.date);
    return d.getHours() < 8;
  });
  if (earlyPlays.length > 0 && !p.badges.includes('early_bird')) newBadges.push('early_bird');
  if (newBadges.length > 0) {
    p.badges = [].concat(p.badges || [], newBadges);
    PlayerManager.save(p.name, p);
    toast('New badge' + (newBadges.length > 1 ? 's' : '') + ' unlocked: ' + newBadges.map(function(b) {
      const def = BADGES_DEF.find(function(d) { return d.id === b; });
      return def ? def.icon : '';
    }).join(' '));
  }
  return newBadges;
}

// ═══════════════════════════════════════════════════════════════════
// 4. CAMELEON
// ═══════════════════════════════════════════════════════════════════

function renderCameleon(p) {
  const container = document.getElementById('cameleonStage');
  if (!container) return;
  const sessions = (p.sessionHistory || []).length;
  const stage = CAM_STAGES.slice().reverse().find(function(s) { return sessions >= s.min; }) || CAM_STAGES[0];
  const nextStage = CAM_STAGES.find(function(s) { return s.min > sessions; });
  const progress = nextStage ? Math.min(100, (sessions / nextStage.min) * 100) : 100;
  container.innerHTML = '<div class="cameleon-avatar">' + stage.icon + '</div>' +
    '<div class="cameleon-info">' +
    '<div class="cameleon-name" style="font-weight:700;color:' + stage.color + '">' + stage.name + '</div>' +
    '<div class="cameleon-sessions" style="font-size:var(--font-sm);color:var(--muted)">' + sessions + ' sessions</div>' +
    '</div>' +
    '<div class="cameleon-bar-track">' +
    '<div class="cameleon-bar-fill" style="width:' + progress + '%;background:' + stage.color + '"></div>' +
    '</div>' +
    (nextStage ? '<div class="cameleon-next" style="font-size:var(--font-xs);color:var(--muted)">Next: ' + nextStage.name + ' (' + nextStage.min + ' sessions)</div>' : '<div class="cameleon-next" style="font-size:var(--font-xs);color:var(--green)">Max level reached!</div>');
}

// ═══════════════════════════════════════════════════════════════════
// 5. HISTORY
// ═══════════════════════════════════════════════════════════════════

function renderHistory(p) {
  const container = document.getElementById('historyList');
  if (!container) return;
  const history = (p.sessionHistory || []).slice().reverse();
  if (history.length === 0) {
    container.innerHTML = '<div class="history-empty" style="text-align:center;color:var(--muted);padding:var(--space-lg)">No sessions yet — go play!</div>';
    return;
  }
  container.innerHTML = '';
  history.slice(0, 20).forEach(function(h) {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = '<div><span class="history-level">Level ' + h.level + '</span><span class="history-score">' + h.correct + '/' + h.total + ' · ' + h.pct + '%</span></div><div class="history-date">' + I18n.formatDate(h.date) + '</div>';
    container.appendChild(item);
  });
}

// ═══════════════════════════════════════════════════════════════════
// 6. GENIUS
// ═══════════════════════════════════════════════════════════════════

function renderGenius() {
  const container = document.getElementById('geniusPanel');
  if (!container) return;
  const words = Storage.get('dailyFrench_genius', []);
  if (words.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:var(--muted);padding:var(--space-lg)"><div style="font-size:2rem;margin-bottom:var(--space-sm)">🧠</div><div>No words saved yet.</div><div style="font-size:var(--font-sm);margin-top:var(--space-sm)">Tap words in vocabulary to save them!</div></div>';
    return;
  }
  const wordsHtml = words.map(function(w) { return '<span class="genius-word" onclick="openVocabPopup(\'' + w + '\')">' + w + '</span>'; }).join('');
  container.innerHTML = '<div class="genius-words">' + wordsHtml + '</div><div style="text-align:center;margin-top:var(--space-md)"><button class="btn btn-primary btn-small" onclick="window.location.href=\'quiz.html?section=levels\'">Quiz me on my words!</button></div>';
}

// ═══════════════════════════════════════════════════════════════════
// 7. LIFE SKILLS
// ═══════════════════════════════════════════════════════════════════

function renderLifeSkills(p) {
  const container = document.getElementById('lifeSkillsGrid');
  if (!container) return;
  if (typeof LIFE_SKILLS === 'undefined') {
    container.innerHTML = '<div style="text-align:center;color:var(--muted);padding:var(--space-lg)">Life Skills data not loaded.</div>';
    return;
  }
  container.innerHTML = '';
  LIFE_SKILLS.forEach(function(skill) {
    const score = calculateSkillScore(skill, p);
    const stars = renderStars(score);
    const level = getSkillLevelLabel(score);
    const card = document.createElement('div');
    card.className = 'life-skill-card';
    card.style.borderLeftColor = skill.color;
    card.innerHTML = '<div class="life-skill-header"><span class="life-skill-icon">' + skill.icon + '</span><span class="life-skill-title">' + skill.title + '</span></div>' +
      '<div class="life-skill-bar-track"><div class="life-skill-bar-fill" style="width:' + ((score / 5) * 100) + '%;background:' + skill.color + '"></div></div>' +
      '<div class="life-skill-score"><span>' + stars + '</span><span style="color:' + level.color + '">' + level.label + '</span></div>';
    card.addEventListener('click', function() { startLifeSimulator(skill); });
    container.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════════════════
// 8. LIFE SIMULATOR
// ═══════════════════════════════════════════════════════════════════

function startLifeSimulator(skill) {
  const container = document.getElementById('lifeSkillsGrid');
  if (!container) return;
  container.innerHTML = '';
  const header = document.createElement('div');
  header.style.cssText = 'grid-column:1/-1;text-align:center;margin-bottom:var(--space-md);';
  header.innerHTML = '<h3 style="margin:0">' + skill.icon + ' ' + skill.title + ' Simulator</h3><p style="color:var(--muted);font-size:var(--font-sm)">Choose a scenario to practise</p>';
  container.appendChild(header);
  LIFE_SIMULATOR_SCENARIOS.forEach(function(scen) {
    const card = document.createElement('div');
    card.className = 'life-skill-card';
    card.style.cursor = 'pointer';
    card.innerHTML = '<div class="life-skill-header"><span class="life-skill-icon">' + scen.icon + '</span><span class="life-skill-title">' + scen.title + '</span></div><div style="font-size:var(--font-sm);color:var(--muted)">' + scen.desc + '</div>';
    card.addEventListener('click', function() { startLifeScenario(scen); });
    container.appendChild(card);
  });
  const back = document.createElement('div');
  back.style.cssText = 'grid-column:1/-1;text-align:center;';
  back.innerHTML = '<button class="btn btn-ghost btn-small" onclick="updateDashboard()">← Back to skills</button>';
  container.appendChild(back);
}

function startLifeScenario(scenario) {
  lifeSimState = { scenario: scenario, questionIndex: 0, score: 0, answers: [] };
  renderLifeQuestion();
}

function renderLifeQuestion() {
  const container = document.getElementById('lifeSkillsGrid');
  if (!container) return;
  const questions = lifeSimState.scenario.questions || [];
  const q = questions[lifeSimState.questionIndex];
  if (!q) {
    showLifeResults();
    return;
  }
  container.innerHTML = '';
  const card = document.createElement('div');
  card.style.cssText = 'grid-column:1/-1;background:var(--white);border-radius:var(--r);padding:var(--space-lg);border:1px solid var(--border);';
  card.innerHTML = '<div style="font-size:var(--font-sm);color:var(--muted);margin-bottom:var(--space-sm)">Question ' + (lifeSimState.questionIndex + 1) + ' / ' + questions.length + '</div>' +
    '<div style="font-size:var(--font-lg);font-weight:700;margin-bottom:var(--space-lg)">' + q.question + '</div>' +
    '<div style="display:flex;flex-direction:column;gap:var(--space-sm)">' +
    q.options.map(function(opt, i) { return '<button class="btn btn-ghost" style="text-align:left;justify-content:flex-start" onclick="answerLifeQuestion(' + i + ')">' + opt + '</button>'; }).join('') +
    '</div>';
  container.appendChild(card);
}

function answerLifeQuestion(choice) {
  const questions = lifeSimState.scenario.questions || [];
  const q = questions[lifeSimState.questionIndex];
  if (!q) return;
  const isCorrect = choice === q.correct;
  lifeSimState.answers.push({ question: q.question, correct: isCorrect });
  if (isCorrect) lifeSimState.score++;
  const container = document.getElementById('lifeSkillsGrid');
  if (container) {
    const feedback = document.createElement('div');
    feedback.style.cssText = 'grid-column:1/-1;padding:var(--space-md);border-radius:var(--r);text-align:center;font-weight:700;' + (isCorrect ? 'background:var(--green-light);color:var(--green)' : 'background:var(--red-light);color:var(--red)');
    feedback.textContent = isCorrect ? '✓ Correct!' : '✗ Wrong — ' + q.explanation;
    container.insertBefore(feedback, container.firstChild);
  }
  setTimeout(function() {
    lifeSimState.questionIndex++;
    renderLifeQuestion();
  }, 1500);
}

function showLifeResults() {
  const container = document.getElementById('lifeSkillsGrid');
  if (!container) return;
  const questions = lifeSimState.scenario.questions || [];
  const total = questions.length;
  const correct = lifeSimState.score;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  container.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:var(--space-xl)">' +
    '<div style="font-size:3rem;margin-bottom:var(--space-md)">' + (pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪') + '</div>' +
    '<div style="font-size:var(--font-xl);font-weight:800;margin-bottom:var(--space-sm)">' + pct + '%</div>' +
    '<div style="color:var(--muted);margin-bottom:var(--space-lg)">' + correct + '/' + total + ' correct</div>' +
    '<div style="display:flex;gap:var(--space-sm);justify-content:center">' +
    '<button class="btn btn-secondary" onclick="updateDashboard()">Back to skills</button>' +
    '<button class="btn btn-primary" onclick="startLifeScenario(lifeSimState.scenario)">Retry</button>' +
    '</div></div>';

  const current = PlayerManager.getCurrent();
  const p = PlayerManager.load(current);
  if (p) {
    if (!p.conversationProgress) p.conversationProgress = {};
    const prev = p.conversationProgress[lifeSimState.scenario.id] ? p.conversationProgress[lifeSimState.scenario.id].bestScore : 0;
    if (pct > prev) {
      p.conversationProgress[lifeSimState.scenario.id] = { bestScore: pct, date: new Date().toISOString() };
      PlayerManager.save(current, p);
    }
  }
}

// ═══════════════════════════════════════════════════════════════════
// 9. DEMARRAGE
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
  if (typeof initDashboard === 'function') {
    initDashboard();
  } else {
    console.error('[Dashboard] initDashboard not found');
  }
});
