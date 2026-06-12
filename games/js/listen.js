// ═══════════════════════════════════════════════════════════════════
// LISTEN.JS — Daily French 🎧 v1.2
// CORRECTION : pills cliquables (TTS + surbrillance) + SpeechRecognition
// ═══════════════════════════════════════════════════════════════════

var ListenApp = {
  phrases: [],
  currentIndex: 0,
  stats: { total: 0, good: 0, partial: 0, streak: 0, bestStreak: 0 },
  recognition: null,
  isRecording: false,
  
  init: function() {
    if (typeof initCore === 'function') initCore();
    this.loadStats();
    this.loadPhrases();
    this.initSpeechRecognition();
    this.renderLevelBar();
    this.nextPhrase();
    this.bindEvents();
  },
  
  loadPhrases: function() {
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
  
  initSpeechRecognition: function() {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.log('[Listen] SpeechRecognition not available');
      return;
    }
    
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'fr-FR';
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
    
    var self = this;
    
    this.recognition.onstart = function() {
      self.isRecording = true;
      showToast('🎤 Listening... Speak now!');
      var btnRecord = document.getElementById('btnRecord');
      if (btnRecord) btnRecord.classList.add('recording');
    };
    
    this.recognition.onend = function() {
      self.isRecording = false;
      var btnRecord = document.getElementById('btnRecord');
      if (btnRecord) btnRecord.classList.remove('recording');
    };
    
    this.recognition.onresult = function(event) {
      var transcript = event.results[0][0].transcript;
      self.checkPronunciation(transcript);
    };
    
    this.recognition.onerror = function(event) {
      self.isRecording = false;
      var btnRecord = document.getElementById('btnRecord');
      if (btnRecord) btnRecord.classList.remove('recording');
      
      if (event.error === 'not-allowed') {
        showToast('🎤 Micro access denied. Check Settings > Safari > Microphone.');
      } else if (event.error === 'no-speech') {
        showToast('🎤 No speech detected. Try again!');
      } else {
        showToast('🎤 Error: ' + event.error);
      }
    };
  },
  
  checkPronunciation: function(spoken) {
    var phrase = this.phrases[this.currentIndex % this.phrases.length];
    if (!phrase) return;
    
    var target = phrase.fr.toLowerCase().replace(/[.,!?]/g, '').trim();
    var attempt = spoken.toLowerCase().replace(/[.,!?]/g, '').trim();
    
    // Vérifier mot par mot
    var targetWords = target.split(/\s+/);
    var spokenWords = attempt.split(/\s+/);
    var pills = document.querySelectorAll('.word-pill');
    
    var correctCount = 0;
    
    pills.forEach(function(pill, idx) {
      var word = targetWords[idx];
      var spokenWord = spokenWords[idx];
      
      pill.classList.remove('correct', 'incorrect');
      
      if (spokenWord && word && spokenWord === word) {
        pill.classList.add('correct');
        correctCount++;
      } else if (spokenWord) {
        pill.classList.add('incorrect');
      }
    });
    
    var pct = Math.round((correctCount / targetWords.length) * 100);
    
    if (pct >= 80) {
      showToast('🎉 Excellent! ' + pct + '% correct');
      this.stats.good++;
      this.stats.streak++;
      if (this.stats.streak > this.stats.bestStreak) {
        this.stats.bestStreak = this.stats.streak;
      }
    } else if (pct >= 50) {
      showToast('👍 Good try! ' + pct + '% correct');
      this.stats.partial++;
      this.stats.streak = 0;
    } else {
      showToast('💪 Keep practicing! ' + pct + '% correct');
      this.stats.streak = 0;
    }
    
    this.stats.total++;
    this.saveStats();
    this.updateStatsDisplay();
  },
  
  updateStatsDisplay: function() {
    var streakEl = document.getElementById('streakCount');
    var accuracyEl = document.getElementById('accuracyValue');
    
    if (streakEl) streakEl.textContent = this.stats.streak;
    
    if (accuracyEl) {
      var acc = this.stats.total > 0 ? Math.round((this.stats.good / this.stats.total) * 100) : 0;
      accuracyEl.textContent = acc + '%';
    }
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
        
        // CLIC SUR LE MOT : surbrillance + TTS
        pill.addEventListener('click', function() {
          // Surbrillance temporaire
          document.querySelectorAll('.word-pill').forEach(function(p) {
            p.classList.remove('highlighted');
          });
          pill.classList.add('highlighted');
          setTimeout(function() {
            pill.classList.remove('highlighted');
          }, 1000);
          
          // Prononcer le mot
          ListenApp.speakWord(word);
        });
        
        wordsContainer.appendChild(pill);
      });
    }
    
    if (phoneticEl) phoneticEl.textContent = phrase.phon || '';
    if (translationEl) translationEl.textContent = phrase.en || '';
    
    document.querySelectorAll('.word-pill').forEach(function(p) {
      p.classList.remove('correct', 'incorrect');
    });
  },
  
  speakWord: function(word) {
    if (!('speechSynthesis' in window)) {
      showToast('Text-to-speech not available');
      return;
    }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(word);
    u.lang = 'fr-FR';
    u.rate = 0.9;
    
    var voices = window.speechSynthesis.getVoices();
    var frVoice = voices.find(function(v) { return v.lang && v.lang.startsWith('fr'); });
    if (frVoice) u.voice = frVoice;
    
    window.speechSynthesis.speak(u);
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
    if (!this.recognition) {
      showToast('🎤 Speech recognition not available on this device. Try Chrome on desktop.');
      return;
    }
    
    if (this.isRecording) {
      this.recognition.stop();
      return;
    }
    
    try {
      this.recognition.start();
    } catch(e) {
      showToast('🎤 Could not start recording. Try again.');
    }
  },
  
  bindEvents: function() {
    var self = this;
    
    // Délégation d'événement sur le document entier
    document.addEventListener('click', function(e) {
      var target = e.target;
      
      while (target && target !== document.body) {
        if (target.id === 'btnListen') {
          e.preventDefault();
          e.stopPropagation();
          self.speakCurrentPhrase();
          return;
        }
        if (target.id === 'btnRecord') {
          e.preventDefault();
          e.stopPropagation();
          self.record();
          return;
        }
        if (target.id === 'btnNext') {
          e.preventDefault();
          e.stopPropagation();
          self.currentIndex++;
          self.nextPhrase();
          return;
        }
        target = target.parentElement;
      }
    });
    
    // Voice circle
    var voiceCircle = document.getElementById('voiceCircle');
    if (voiceCircle) {
      voiceCircle.addEventListener('click', function() { self.speakCurrentPhrase(); });
    }
  }
};

// Lancement immédiat
ListenApp.init();
