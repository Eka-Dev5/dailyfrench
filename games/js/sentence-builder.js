// ═══════════════════════════════════════════════════════════════════
// SENTENCE-BUILDER.JS — Daily French 🧩 v1.0
// Phrase Builder — Drag blocks to build sentences
// ═══════════════════════════════════════════════════════════════════

var PhraseApp = {
  currentLevel: 1,
  currentMission: null,
  score: 0,
  streak: 0,
  completed: 0,
  blocks: [],
  
  // Données des niveaux
  levels: {
    1: {
      title: "Basics",
      missions: [
        { target: "Je suis content", en: "I am happy", words: ["Je", "suis", "content", "très", "aujourd'hui"] },
        { target: "Tu es français", en: "You are French", words: ["Tu", "es", "français", "anglais", "belge"] },
        { target: "Il a un chien", en: "He has a dog", words: ["Il", "a", "un", "chien", "chat", "livre"] }
      ]
    },
    2: {
      title: "At the café",
      missions: [
        { target: "Je voudrais un café", en: "I would like a coffee", words: ["Je", "voudrais", "un", "café", "thé", "s'il", "vous", "plaît"] },
        { target: "L'addition s'il vous plaît", en: "The bill please", words: ["L'", "addition", "s'il", "vous", "plaît", "merci"] }
      ]
    },
    3: {
      title: "Directions",
      missions: [
        { target: "Où est la gare", en: "Where is the train station", words: ["Où", "est", "la", "gare", "mairie", "banque", "s'il", "vous", "plaît"] },
        { target: "Tournez à droite", en: "Turn right", words: ["Tournez", "à", "droite", "gauche", "tout", "droit"] }
      ]
    }
  },
  
  init: function() {
    if (typeof initCore === 'function') initCore();
    this.loadStats();
    this.renderLevelSelect();
    this.loadLevel(1);
    this.bindDragDrop();
  },
  
  loadStats: function() {
    var saved = localStorage.getItem('dailyFrench_phraseStats');
    if (saved) {
      try {
        var data = JSON.parse(saved);
        this.score = data.score || 0;
        this.streak = data.streak || 0;
        this.completed = data.completed || 0;
      } catch(e) {}
    }
    this.updateScoreBoard();
  },
  
  saveStats: function() {
    localStorage.setItem('dailyFrench_phraseStats', JSON.stringify({
      score: this.score,
      streak: this.streak,
      completed: this.completed
    }));
  },
  
  renderLevelSelect: function() {
    var container = document.getElementById('levelSelect');
    if (!container) return;
    
    container.innerHTML = '';
    for (var lvl in this.levels) {
      var btn = document.createElement('button');
      btn.className = 'lvl-btn' + (parseInt(lvl) === this.currentLevel ? ' active' : '');
      btn.textContent = lvl + '. ' + this.levels[lvl].title;
      btn.dataset.level = lvl;
      btn.addEventListener('click', function() {
        PhraseApp.loadLevel(parseInt(this.dataset.level));
      });
      container.appendChild(btn);
    }
  },
  
  loadLevel: function(level) {
    this.currentLevel = level;
    this.currentMissionIndex = 0;
    
    // Update active button
    document.querySelectorAll('.lvl-btn').forEach(function(btn) {
      btn.classList.toggle('active', parseInt(btn.dataset.level) === level);
    });
    
    this.loadMission();
  },
  
  loadMission: function() {
    var level = this.levels[this.currentLevel];
    if (!level) return;
    
    var missions = level.missions;
    var mission = missions[this.currentMissionIndex % missions.length];
    this.currentMission = mission;
    
    var emojiEl = document.getElementById('missionEmoji');
    var textEl = document.getElementById('missionText');
    var hintEl = document.getElementById('missionHint');
    
    if (emojiEl) emojiEl.textContent = '🎯';
    if (textEl) textEl.textContent = mission.en;
    if (hintEl) hintEl.textContent = 'Build: ' + mission.target;
    
    this.renderBlocks(mission.words);
    this.clearDropZone();
  },
  
  renderBlocks: function(words) {
    var container = document.getElementById('blocksPool');
    if (!container) return;
    
    // Mélanger les mots
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
        block.style.opacity = '0.5';
      });
      
      block.addEventListener('dragend', function() {
        block.style.opacity = '1';
      });
      
      // Touch support
      block.addEventListener('click', function() {
        PhraseApp.moveToDropZone(block);
      });
      
      container.appendChild(block);
    });
  },
  
  clearDropZone: function() {
    var zone = document.getElementById('dropZone');
    if (zone) {
      zone.innerHTML = '<span style="color:var(--muted);font-style:italic">👇 Drag blocks here to build your phrase</span>';
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
    block.style.visibility = 'hidden';
  },
  
  addBlock: function(word) {
    var zone = document.getElementById('dropZone');
    if (!zone) return;
    
    // Remove placeholder
    if (this.blocks.length === 0) zone.innerHTML = '';
    
    this.blocks.push(word);
    
    var slot = document.createElement('div');
    slot.className = 'slot filled';
    slot.textContent = word;
    slot.dataset.word = word;
    
    slot.addEventListener('click', function() {
      PhraseApp.removeBlock(slot, word);
    });
    
    zone.appendChild(slot);
  },
  
  removeBlock: function(slot, word) {
    var zone = document.getElementById('dropZone');
    if (!zone) return;
    
    zone.removeChild(slot);
    this.blocks = this.blocks.filter(function(w) { return w !== word; });
    
    // Restore block in pool
    var poolBlock = document.querySelector('.block[data-word="' + word + '"]');
    if (poolBlock) poolBlock.style.visibility = 'visible';
    
    if (this.blocks.length === 0) {
      zone.innerHTML = '<span style="color:var(--muted);font-style:italic">👇 Drag blocks here to build your phrase</span>';
    }
  },
  
  checkPhrase: function() {
    if (!this.currentMission) return;
    
    var built = this.blocks.join(' ');
    var target = this.currentMission.target;
    
    // Normalize pour comparaison
    var normalize = function(s) {
      return s.toLowerCase().replace(/[',]/g, '').replace(/\s+/g, ' ').trim();
    };
    
    var isCorrect = normalize(built) === normalize(target);
    
    var feedback = document.getElementById('feedback');
    if (feedback) {
      feedback.style.display = 'block';
      if (isCorrect) {
        feedback.innerHTML = '<div style="color:var(--green);font-weight:700">✓ Correct! "' + target + '"</div>';
        this.score += 10;
        this.streak++;
        this.completed++;
        this.saveStats();
        this.updateScoreBoard();
        
        setTimeout(function() {
          PhraseApp.currentMissionIndex++;
          PhraseApp.loadMission();
          feedback.style.display = 'none';
        }, 1500);
      } else {
        feedback.innerHTML = '<div style="color:var(--red);font-weight:700">✗ Try again. You built: "' + built + '"</div><div style="color:var(--muted);font-size:var(--font-sm)">Hint: ' + target + '</div>';
        this.streak = 0;
      }
    }
  },
  
  updateScoreBoard: function() {
    var scoreEl = document.getElementById('scoreTotal');
    var streakEl = document.getElementById('scoreStreak');
    var completedEl = document.getElementById('scoreCompleted');
    
    if (scoreEl) scoreEl.textContent = this.score;
    if (streakEl) streakEl.textContent = this.streak;
    if (completedEl) completedEl.textContent = this.completed;
  }
};

// Remplacer les stubs globaux
function checkPhrase() { PhraseApp.checkPhrase(); }
function clearPhrase() { PhraseApp.clearDropZone(); }
function showHint() { 
  if (PhraseApp.currentMission) {
    showToast('Hint: ' + PhraseApp.currentMission.target);
  }
}
function speakPhrase() {
  if (PhraseApp.currentMission) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(PhraseApp.currentMission.target);
      u.lang = 'fr-FR';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  }
}

// Démarrage
document.addEventListener('DOMContentLoaded', function() {
  PhraseApp.init();
});
