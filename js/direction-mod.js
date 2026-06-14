// ═══════════════════════════════════════════════════════════════
// DIRECTION MODE - Inversion Français/Anglais + Phonétique
// ═══════════════════════════════════════════════════════════════

/**
 * Système d'inversion des colonnes des leçons
 * 
 * Modes disponibles:
 *   "fr-first"  → French | Phonetics | English (défaut)
 *   "en-first"  → English | [Phonetics-EN] | French
 * 
 * La phonétique anglaise est préparée en commentaire (non mappée pour l'instant)
 * car elle nécessite un dictionnaire IPA anglais complet.
 */

const DirectionMode = {
  current: 'fr-first',
  
  // ═══════════════════════════════════════════════════════════════
  // CONFIGURATION
  // ═══════════════════════════════════════════════════════════════
  
  MODES: {
    'fr-first': {
      label: '🇫🇷 FR → EN',
      headers: ['French', 'Phonetics', 'English'],
      colOrder: [0, 1, 2],      // French, Phonetics-FR, English
      phoneticCol: 1
    },
    'en-first': {
      label: '🇬🇧 EN → FR', 
      headers: ['English', 'Phonetics', 'French'],
      colOrder: [2, 1, 0],      // English, Phonetics-EN, French
      phoneticCol: 1
    }
  },
  
  // ═══════════════════════════════════════════════════════════════
  // PHONÉTIQUE ANGLAISE - PRÉPARÉE EN COMMENTAIRE
  // ═══════════════════════════════════════════════════════════════
  // 
  // TODO: Mapper les transcriptions phonétiques anglaises pour chaque
  // mot/expression anglais du cours.
  // 
  // Format: "texte anglais" → "*ih-PUH*" (style anglophone-friendly)
  // ou "/ɪˈpʌ/" (IPA standard)
  //
  // Pour l'instant, en mode "en-first", la colonne phonétique affiche
  // un placeholder. La phonétique FR reste disponible en fallback.
  
  EN_PHONETICS: {
    // TODO: À compléter. Exemples:
    // "Hello": "*heh-LOH*",
    // "Good morning": "*good MOR-ning*",
    // "Thank you": "*THANK yoo*",
    // "Please": "*PLEEZ*",
    // "Goodbye": "*good-BYE*",
    // "My name is": "*my NAYM iz*",
    // "I would like": "*eye wood LAYK*",
    // "How much is it": "*how MUCH iz it*",
    // "I don't understand": "*eye DOHNT un-der-STAND*",
    // "Where is": "*WAIR iz*",
    // ... (~500 entrées à couvrir)
  },
  
  // ═══════════════════════════════════════════════════════════════
  // MÉTHODES
  // ═══════════════════════════════════════════════════════════════
  
  init() {
    this.current = Storage.get('directionMode') || 'fr-first';
    this.applyToAllTables();
  },
  
  set(mode) {
    if (!this.MODES[mode]) {
      console.warn(`DirectionMode: mode "${mode}" inconnu`);
      return;
    }
    this.current = mode;
    Storage.set('directionMode', mode);
    this.applyToAllTables();
    EventBus.emit('directionChanged', mode);
  },
  
  toggle() {
    const next = this.current === 'fr-first' ? 'en-first' : 'fr-first';
    this.set(next);
  },
  
  applyToAllTables() {
    const tables = document.querySelectorAll('.lesson-table');
    tables.forEach(table => this.transformTable(table));
  },
  
  transformTable(table) {
    const mode = this.MODES[this.current];
    const rows = table.querySelectorAll('tr');
    
    if (rows.length === 0) return;
    
    const headerRow = rows[0];
    const ths = headerRow.querySelectorAll('th');
    
    if (ths.length >= 3) {
      // Réorganiser les en-têtes
      mode.headers.forEach((text, i) => {
        if (ths[i]) ths[i].textContent = text;
      });
      
      // Réorganiser les cellules
      for (let r = 1; r < rows.length; r++) {
        const tds = rows[r].querySelectorAll('td');
        if (tds.length >= 3) {
          // Sauvegarder original au premier passage
          if (!rows[r].dataset.original) {
            rows[r].dataset.original = JSON.stringify(
              Array.from(tds).map(td => td.innerHTML)
            );
          }
          
          const original = JSON.parse(rows[r].dataset.original);
          
          // Réorganiser selon colOrder
          mode.colOrder.forEach((origIndex, newIndex) => {
            if (tds[newIndex] && original[origIndex]) {
              tds[newIndex].innerHTML = original[origIndex];
            }
          });
          
          // Mode en-first: placeholder phonétique anglaise
          if (this.current === 'en-first' && mode.phoneticCol !== undefined) {
            const phoneticCell = tds[mode.phoneticCol];
            if (phoneticCell) {
              const enText = tds[0].textContent.trim();
              const enPhonetic = this.EN_PHONETICS[enText];
              
              if (enPhonetic) {
                phoneticCell.innerHTML = `<em>${enPhonetic}</em>`;
              } else {
                // Placeholder avec style atténué
                phoneticCell.innerHTML = `<em style="opacity:0.4">*...*</em>`;
              }
            }
          }
        }
      }
      
      // Marquer le tableau pour CSS
      table.dataset.direction = this.current;
    }
  },
  
  /**
   * Pour game-engine.js: inverse question/réponse en mode en-first
   */
  getDirectionForQuestion(q, index) {
    if (this.current === 'en-first') {
      return {
        question: q.questionFr || q.question,
        questionFr: q.question || q.questionFr,
        options: q.optionsEn || q.options,
        optionsEn: q.options || q.optionsEn,
        correct: q.correctEn || q.correct,
        correctEn: q.correct || q.correctEn,
        explanation: q.explanationFr || q.explanation,
        explanationFr: q.explanation || q.explanationFr
      };
    }
    return q;
  }
};


// ═══════════════════════════════════════════════════════════════
// CSS
// ═══════════════════════════════════════════════════════════════

const directionCSS = `
.lesson-table[data-direction="en-first"] th:first-child,
.lesson-table[data-direction="en-first"] td:first-child {
  font-weight: 600;
  color: var(--accent-color, #2563eb);
}
.lesson-table td {
  transition: all 0.3s ease;
}
.direction-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  cursor: pointer;
}
.direction-toggle:hover {
  background: var(--bg-hover);
}
`;

const style = document.createElement('style');
style.textContent = directionCSS;
document.head.appendChild(style);


// ═══════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════

function applyLessonDirection() {
  DirectionMode.applyToAllTables();
}

function updateDirectionLabel() {
  const label = document.getElementById('direction-label');
  if (label) {
    label.textContent = DirectionMode.MODES[DirectionMode.current].label;
  }
}

EventBus.on('directionChanged', updateDirectionLabel);


// ═══════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DirectionMode, applyLessonDirection, updateDirectionLabel };
} else {
  window.DirectionMode = DirectionMode;
  window.applyLessonDirection = applyLessonDirection;
  window.updateDirectionLabel = updateDirectionLabel;
}
