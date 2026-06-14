// ═══════════════════════════════════════════════════════════════════
// SENTENCE-BUILDER.JS — Daily French 🧩 v2.1
// Corrections: normalize() apostrophes, removeBlock() par index,
// scrollToBottom() safety check
// ═══════════════════════════════════════════════════════════════════

var PhraseApp = {
  currentLevel: 1,
  currentMissionIndex: 0,
  currentMission: null,
  score: 0,
  streak: 0,
  completed: 0,
  blocks: [],
  levelScores: {},
  missionHistory: [],

  getData: function() {
    if (typeof SENTENCE_BUILDER_DATA !== 'undefined') {
      return SENTENCE_BUILDER_DATA;
    }
    console.error('[PhraseBuilder] SENTENCE_BUILDER_DATA not found!');
    return {};
  },

  getLevelList: function() {
    return Object.values(this.getData());
  },

  getLevel: function(levelNum) {
    return this.getData()[levelNum] || null;
  },

  getMissions: function(levelNum) {
    var lvl = this.getLevel(levelNum);
    return lvl ? lvl.missions : [];
  },

  init: function() {
    if (typeof initCore === 'function') initCore();
    this.loadStats();
    this.renderLevelSelect();
    this.loadLevel(1);
    this.bindDragDrop();
    this.updateHeroInfo();
  },

  loadStats: function() {
    var currentName = (typeof PlayerManager !== 'undefined') ? PlayerManager.getCurrent() : null;
    var players = (typeof getPlayers === 'function') ? getPlayers() : {};
    var p = currentName ? players[currentName] : null;

    if (p && p.phraseBuilder) {
      this.score = p.phraseBuilder.score || 0;
      this.streak = p.phraseBuilder.streak || 0;
      this.completed = p.phraseBuilder.completed || 0;
      this.levelScores = p.phraseBuilder.levelScores || {};
      this.missionHistory = p.phraseBuilder.missionHistory || [];
    } else {
      var saved = localStorage.getItem('dailyFrench_phraseStats');
      if (saved) {
        try {
          var data = JSON.parse(saved);
          this.score = data.score || 0;
          this.streak = data.streak || 0;
          this.completed = data.completed || 0;
          this.levelScores = data.levelScores || {};
          this.missionHistory = data.missionHistory || [];
        } catch(e) {}
      }
    }
    this.updateScoreBoard();
  },

  saveStats: function() {
    var data = {
      score: this.score,
      streak: this.streak,
      completed: this.completed,
      levelScores: this.levelScores,
      missionHistory: this.missionHistory,
      lastSaved: new Date().toISOString()
    };

    var currentName = (typeof PlayerManager !== 'undefined') ? PlayerManager.getCurrent() : null;
    var players = (typeof getPlayers === 'function') ? getPlayers() : {};
    var p = currentName ? players[currentName] : null;

    if (p) {
      if (!p.phraseBuilder) p.phraseBuilder = {};
      p.phraseBuilder = data;
      if (typeof savePlayers === 'function') savePlayers(players);
      if (typeof addXP === 'function') addXP(10);
    }

    localStorage.setItem('dailyFrench_phraseStats', JSON.stringify(data));
    this.updateScoreBoard();
    this.updateHeroInfo();
  },

  updateHeroInfo: function() {
    var b1 = document.getElementById('b1');
    var b2 = document.getElementById('b2');
    var b3 = document.getElementById('b3');
    var heroLvl = document.getElementById('heroLvl');

    if (b1) b1.textContent = this.currentLevel;
    if (b2) b2.textContent = this.score;
    if (b3) b3.textContent = this.completed + '/' + this.getTotalMissions();
    if (heroLvl) heroLvl.textContent = this.currentLevel;
  },

  getTotalMissions: function() {
    var total = 0;
    var data = this.getData();
    for (var key in data) {
      if (data[key].missions) total += data[key].missions.length;
    }
    return total;
  },

  renderLevelSelect: function() {
    var container = document.getElementById('levelSelect');
    if (!container) return;

    container.innerHTML = '';
    var data = this.getData();

    for (var key in data) {
      var lvl = data[key];
      var lvlNum = parseInt(key);
      var isActive = lvlNum === this.currentLevel;
      var isCompleted = this.isLevelCompleted(lvlNum);
      var bestScore = this.levelScores[lvlNum] || 0;

      var btn = document.createElement('button');
      btn.className = 'lvl-btn' + (isActive ? ' active' : '') + (isCompleted ? ' completed' : '');
      btn.dataset.level = lvlNum;
      btn.innerHTML = '<span class="lvl-num">' + lvlNum + '</span>' +
                      '<span class="lvl-title">' + lvl.title + '</span>' +
                      (isCompleted ? '<span class="lvl-check">✓</span>' : '') +
                      (bestScore > 0 ? '<span class="lvl-score">' + bestScore + '★</span>' : '');

      btn.addEventListener('click', function() {
        PhraseApp.loadLevel(parseInt(this.dataset.level));
      });

      container.appendChild(btn);
    }
  },

  isLevelCompleted: function(lvlNum) {
    var lvl = this.getLevel(lvlNum);
    if (!lvl || !lvl.missions) return false;
    var completedInLevel = this.missionHistory.filter(function(h) {
      return h.level === lvlNum;
    }).length;
    return completedInLevel >= lvl.missions.length;
  },

  loadLevel: function(level) {
    this.currentLevel = level;
    this.currentMissionIndex = 0;
    this.blocks = [];

    document.querySelectorAll('.lvl-btn').forEach(function(btn) {
      btn.classList.toggle('active', parseInt(btn.dataset.level) === level);
    });

    this.updateHeroInfo();
    this.loadMission();
  },

  loadMission: function() {
    var missions = this.getMissions(this.currentLevel);
    if (!missions || missions.length === 0) {
      this.showLevelComplete();
      return;
    }

    var mission = missions[this.currentMissionIndex % missions.length];
    this.currentMission = mission;

    var emojiEl = document.getElementById('missionEmoji');
    var textEl = document.getElementById('missionText');
    var hintEl = document.getElementById('missionHint');
    var levelBadge = document.getElementById('missionLevelBadge');

    if (emojiEl) emojiEl.textContent = this.getLevel(this.currentLevel).icon || '🎯';
    if (textEl) textEl.textContent = mission.en;
    if (hintEl) hintEl.textContent = mission.hint || ('Build: ' + mission.target);
    if (levelBadge) levelBadge.textContent = 'Level ' + this.currentLevel;

    this.renderBlocks(mission.words);
    this.clearDropZone();
    this.hideFeedback();
  },

  showLevelComplete: function() {
    var textEl = document.getElementById('missionText');
    var hintEl = document.getElementById('missionHint');
    var pool = document.getElementById('blocksPool');

    if (textEl) textEl.textContent = '🎉 Level ' + this.currentLevel + ' Complete!';
    if (hintEl) hintEl.textContent = 'All missions done! Choose another level.';
    if (pool) pool.innerHTML = '';

    this.clearDropZone();
    this.renderLevelSelect();
  },

  renderBlocks: function(words) {
    var container = document.getElementById('blocksPool');
    if (!container) return;

    var shuffled = words.slice().sort(function() { return Math.random() - 0.5; });

    container.innerHTML = '';
    shuffled.forEach(function(word) {
      var block = document.createElement('div');
      block.className = 'block';
      block.textContent = word;
      block.draggable = true;
      block.dataset.word = word;

      block.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', word);
        block.classList.add('dragging');
      });

      block.addEventListener('dragend', function() {
        block.classList.remove('dragging');
      });

      block.addEventListener('click', function() {
        if (!block.classList.contains('used')) {
          PhraseApp.moveToDropZone(block);
        }
      });

      container.appendChild(block);
    });
  },

  clearDropZone: function() {
    var zone = document.getElementById('dropZone');
    if (zone) {
      zone.innerHTML = '<span class="drop-placeholder">👇 Drag or tap blocks to build your phrase</span>';
      zone.classList.remove('correct', 'incorrect', 'shake');
    }
    this.blocks = [];
  },

  bindDragDrop: function() {
    var zone = document.getElementById('dropZone');
    if (!zone) return;

    zone.addEventListener('dragover', function(e) {
      e.preventDefault();
      zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', function() {
      zone.classList.remove('drag-over');
    });

    zone.addEventListener('drop', function(e) {
      e.preventDefault();
      zone.classList.remove('drag-over');
      var word = e.dataTransfer.getData('text/plain');
      if (word) PhraseApp.addBlock(word);
    });
  },

  moveToDropZone: function(block) {
    var word = block.dataset.word;
    this.addBlock(word);
    block.classList.add('used');
    block.style.opacity = '0.3';
    block.style.pointerEvents = 'none';
  },

  addBlock: function(word) {
    var zone = document.getElementById('dropZone');
    if (!zone) return;

    if (this.blocks.length === 0) zone.innerHTML = '';
    zone.classList.remove('correct', 'incorrect', 'shake');

    this.blocks.push(word);

    var slot = document.createElement('div');
    slot.className = 'slot filled';
    slot.textContent = word;
    slot.dataset.word = word;

    slot.addEventListener('click', function() {
      PhraseApp.removeBlock(slot, word);
    });

    zone.appendChild(slot);
    this.scrollToBottom(zone);
  },

  // ═══════════════════════════════════════════════════════════════════
  // CORRECTION CRITIQUE : removeBlock par index, pas par valeur
  // ═══════════════════════════════════════════════════════════════════
  removeBlock: function(slot, word) {
    var zone = document.getElementById('dropZone');
    if (!zone) return;

    // Trouver l'index du slot dans le DOM
    var slotIndex = Array.prototype.indexOf.call(zone.children, slot);
    
    zone.removeChild(slot);
    
    // Supprimer le bon élément du tableau par index
    if (slotIndex >= 0 && slotIndex < this.blocks.length) {
      this.blocks.splice(slotIndex, 1);
    }

    // Restore block in pool
    var poolBlocks = document.querySelectorAll('.block[data-word="' + word + '"]');
    for (var i = 0; i < poolBlocks.length; i++) {
      if (poolBlocks[i].classList.contains('used')) {
        poolBlocks[i].classList.remove('used');
        poolBlocks[i].style.opacity = '1';
        poolBlocks[i].style.pointerEvents = 'auto';
        break;
      }
    }

    if (this.blocks.length === 0) {
      this.clearDropZone();
    }
    zone.classList.remove('correct', 'incorrect', 'shake');
  },

  // ═══════════════════════════════════════════════════════════════════
  // CORRECTION : normalize() gère correctement les apostrophes
  // ═══════════════════════════════════════════════════════════════════
  checkPhrase: function() {
    if (!this.currentMission) return;

    var built = this.blocks.join(' ');
    var target = this.currentMission.target;

    var normalize = function(s) {
      return s.toLowerCase()
        .replace(/['']/g, ' ')   // apostrophe droite → espace
        .replace(/['']/g, ' ')   // apostrophe typographique → espace
        .replace(/\s+/g, ' ')     // compresse les espaces multiples
        .trim();
    };

    var isCorrect = normalize(built) === normalize(target);
    var zone = document.getElementById('dropZone');

    if (isCorrect) {
      this.handleCorrect(target);
    } else {
      this.handleIncorrect(built, target);
    }
  },

  handleCorrect: function(target) {
    var zone = document.getElementById('dropZone');
    var feedback = document.getElementById('feedback');

    if (zone) {
      zone.classList.add('correct');
      zone.classList.remove('incorrect', 'shake');
    }

    var points = 10 + Math.min(this.streak, 5);
    this.score += points;
    this.streak++;
    this.completed++;

    this.missionHistory.push({
      level: this.currentLevel,
      missionIndex: this.currentMissionIndex,
      target: target,
      timestamp: new Date().toISOString()
    });

    if (!this.levelScores[this.currentLevel]) this.levelScores[this.currentLevel] = 0;
    this.levelScores[this.currentLevel] = Math.max(this.levelScores[this.currentLevel], this.streak);

    if (feedback) {
      feedback.style.display = 'block';
      feedback.className = 'feedback feedback-correct';
      feedback.innerHTML =
        '<div class="feedback-icon">✅</div>' +
        '<div class="feedback-title">Correct!</div>' +
        '<div class="feedback-phrase">"' + escapeHtml(target) + '"</div>' +
        '<div class="feedback-message">' + escapeHtml(this.currentMission.feedbackCorrect || 'Well done!') + '</div>' +
        '<div class="feedback-points">+' + points + ' points 🔥 Streak: ' + this.streak + '</div>';
    }

    this.saveStats();

    setTimeout(function() {
      PhraseApp.currentMissionIndex++;
      var missions = PhraseApp.getMissions(PhraseApp.currentLevel);
      if (PhraseApp.currentMissionIndex >= missions.length) {
        PhraseApp.showLevelComplete();
      } else {
        PhraseApp.loadMission();
      }
    }, 2000);
  },

  handleIncorrect: function(built, target) {
    var zone = document.getElementById('dropZone');
    var feedback = document.getElementById('feedback');

    if (zone) {
      zone.classList.add('incorrect', 'shake');
      zone.classList.remove('correct');
      setTimeout(function() { zone.classList.remove('shake'); }, 500);
    }

    this.streak = 0;

    if (feedback) {
      feedback.style.display = 'block';
      feedback.className = 'feedback feedback-incorrect';
      feedback.innerHTML =
        '<div class="feedback-icon">❌</div>' +
        '<div class="feedback-title">Not quite!</div>' +
        '<div class="feedback-built">You built: "' + escapeHtml(built) + '"</div>' +
        '<div class="feedback-hint">' + escapeHtml(this.currentMission.feedbackIncorrect || ('Hint: ' + target)) + '</div>' +
        '<div class="feedback-target">Target: "' + escapeHtml(target) + '"</div>';
    }
  },

  hideFeedback: function() {
    var feedback = document.getElementById('feedback');
    if (feedback) {
      feedback.style.display = 'none';
      feedback.className = 'feedback';
    }
  },

  updateScoreBoard: function() {
    var scoreEl = document.getElementById('scoreTotal');
    var streakEl = document.getElementById('scoreStreak');
    var completedEl = document.getElementById('scoreCompleted');

    if (scoreEl) scoreEl.textContent = this.score;
    if (streakEl) streakEl.textContent = this.streak;
    if (completedEl) completedEl.textContent = this.completed;
  },

  // ═══════════════════════════════════════════════════════════════════
  // CORRECTION : safety check sur scrollToBottom
  // ═══════════════════════════════════════════════════════════════════
  scrollToBottom: function(el) {
    if (el && typeof el.scrollTop !== 'undefined' && typeof el.scrollHeight !== 'undefined') {
      el.scrollTop = el.scrollHeight;
    }
  }
};

function checkPhrase() { PhraseApp.checkPhrase(); }
function clearPhrase() { PhraseApp.clearDropZone(); }

function showHint() {
  if (PhraseApp.currentMission && PhraseApp.currentMission.hint) {
    showToast('💡 ' + PhraseApp.currentMission.hint);
  } else if (PhraseApp.currentMission) {
    showToast('💡 Build: ' + PhraseApp.currentMission.target);
  }
}

function speakPhrase() {
  if (!PhraseApp.currentMission) return;
  var text = PhraseApp.currentMission.target;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'fr-FR';
    u.rate = 0.85;
    var voices = window.speechSynthesis.getVoices();
    var frVoice = voices.find(function(v) { return v.lang && v.lang.startsWith('fr'); });
    if (frVoice) u.voice = frVoice;
    window.speechSynthesis.speak(u);
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

document.addEventListener('DOMContentLoaded', function() {
  PhraseApp.init();
});
