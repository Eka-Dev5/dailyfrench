// ═══════════════════════════════════════════════════════════════════
// LISTEN.JS — Daily French 🎧 v1.0
// Listen & Repeat — Shadowing practice
// ═══════════════════════════════════════════════════════════════════

var ListenApp = {
  phrases: [],
  currentIndex: 0,
  stats: { total: 0, good: 0, partial: 0, streak: 0, bestStreak: 0 },
  
  init: function() {
    if (typeof initCore === 'function') initCore();
    this.loadStats();
    this.loadPhrases();
    this.renderLevelBar();
    this.nextPhrase();
    this.bindEvents();
  },
  
  loadPhrases: function() {
    // Extraire phrases depuis QUESTIONS_DB ou utiliser phrases par défaut
    this.phrases = [];
    
    if (typeof QUESTIONS_DB !== 'undefined') {
      for (var key in QUESTIONS_DB) {
        var questions = QUESTIONS_DB[key];
        if (Array.isArray(questions)) {
          questions.forEach(function(q) {
            if (q.type === 'libre' && q.correct) {
              ListenApp.phrases.push({
                fr: q.correct,
                en: q.correctEn || q.question,
                phon: '',
                level: 1
              });
            }
          });
        }
      }
    }
    
    // Phrases par défaut si vide
    if (this.phrases.length === 0) {
      this.phrases = [
        { fr: "Bonjour, comment allez-vous ?", en: "Hello, how are you?", phon: "*bon-ZHOOR, ko-MON tal-lay VOO*", level: 1 },
        { fr: "Je voudrais un café, s'il vous plaît.", en: "I would like a coffee, please.", phon: "*zhuh voo-DREH uhn kah-FAY, seel voo PLEH*", level: 1 },
        { fr: "Où est la gare, s'il vous plaît ?", en: "Where is the train station, please?", phon: "*OO ay lah GAR, seel voo PLEH*", level: 2 },
        { fr: "Je ne comprends pas.", en: "I don't understand.", phon: "*zhuh nuh kom-PRAN PA*", level: 1 },
        { fr: "Pouvez-vous répéter, s'il vous plaît ?", en: "Can you repeat, please?", phon: "*poo-VAY voo ray-pay-TAY, seel voo PLEH*", level: 2 }
      ];
    }
  },
  
  loadStats: function() {
    var saved = localStorage.getItem('dailyFrench_listenStats');
    if (saved) {
      try {
        var data = JSON.parse(saved);
        this.stats = data.stats || this.stats;
      } catch(e) {}
    }
  },
  
  saveStats: function() {
    localStorage.setItem('dailyFrench_listenStats', JSON.stringify({ stats: this.stats }));
  },
  
  renderLevelBar: function() {
    var container = document.getElementById('levelBar');
    if (!container) return;
    
    var dots = container.querySelectorAll('.level-dot');
    dots.forEach(function(dot) {
      dot.addEventListener('click', function() {
        dots.forEach(function(d) { d.classList.remove('active'); });
        dot.classList.add('active');
        ListenApp.filterByLevel(dot.dataset.level);
      });
    });
  },
  
  filterByLevel: function(level) {
    // Filtrer les phrases par niveau
    this.currentIndex = 0;
    this.nextPhrase();
  },
  
  nextPhrase: function() {
    if (this.phrases.length === 0) return;
    
    var phrase = this.phrases[this.currentIndex % this.phrases.length];
    
    var wordsContainer = document.getElementById('phraseWords');
    var phoneticEl = document.getElementById('phoneticText');
    var translationEl = document.getElementById('translationText');
    
    if (wordsContainer) {
      wordsContainer.innerHTML = '';
      var words = phrase.fr.split(' ');
      words.forEach(function(word) {
        var pill = document.createElement('span');
        pill.className = 'word-pill';
        pill.textContent = word;
        wordsContainer.appendChild(pill);
      });
    }
    
    if (phoneticEl) phoneticEl.textContent = phrase.phon || '';
    if (translationEl) translationEl.textContent = phrase.en || '';
    
    // Reset pills
    document.querySelectorAll('.word-pill').forEach(function(p) {
      p.classList.remove('correct', 'incorrect');
    });
  },
  
  speakCurrentPhrase: function() {
    var phrase = this.phrases[this.currentIndex % this.phrases.length];
    if (!phrase) return;
    
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(phrase.fr);
      u.lang = 'fr-FR';
      u.rate = 0.85;
      
      var voices = window.speechSynthesis.getVoices();
      var frVoice = voices.find(function(v) { return v.lang && v.lang.startsWith('fr'); });
      if (frVoice) u.voice = frVoice;
      
      window.speechSynthesis.speak(u);
    } else {
      showToast('Text-to-speech not available');
    }
  },
  
  record: function() {
    showToast('Recording... (Speech recognition coming soon)');
    // STT nécessite SpeechRecognition API — limité sur mobile
  },
  
  bindEvents: function() {
    var btnListen = document.getElementById('btnListen');
    var btnRecord = document.getElementById('btnRecord');
    var btnNext = document.getElementById('btnNext');
    var voiceCircle = document.getElementById('voiceCircle');
    
    if (btnListen) {
      btnListen.addEventListener('click', function() { ListenApp.speakCurrentPhrase(); });
    }
    if (voiceCircle) {
      voiceCircle.addEventListener('click', function() { ListenApp.speakCurrentPhrase(); });
    }
    if (btnRecord) {
      btnRecord.addEventListener('click', function() { ListenApp.record(); });
    }
    if (btnNext) {
      btnNext.addEventListener('click', function() {
        ListenApp.currentIndex++;
        ListenApp.nextPhrase();
      });
    }
  }
};

// Démarrage
document.addEventListener('DOMContentLoaded', function() {
  ListenApp.init();
});
