// ═══════════════════════════════════════════════════════════════════
// UI-UTILS.JS — Daily French v2.2
// CORRECTION : toggleLessonEx avec nextElementSibling
// ═══════════════════════════════════════════════════════════════════

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(function() { t.classList.remove("show"); }, 3000);
}

// ── NAVIGATION ──
function goToVocabulary() {
  window.location.href = SUBJECT_CONFIG.vocabularyFile;
}

function goToDashboard() {
  const url = gameState && gameState.currentPlayer
    ? "dashboard.html?player=" + encodeURIComponent(gameState.currentPlayer)
    : "dashboard.html";
  window.location.href = url;
}

// ── EXPORT / IMPORT ──
function exportSave() {
  const players = getPlayers();
  if (Object.keys(players).length === 0) { showToast("No save data to export."); return; }
  const blob = new Blob([JSON.stringify(players, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "DailyFrench-save-" + new Date().toISOString().slice(0, 10) + ".json";
  a.click();
  URL.revokeObjectURL(url);
  showToast("Save downloaded!");
}

function importSave(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (typeof data === "object" && data !== null) {
        savePlayers(data);
        updatePlayerDisplay();
        if (typeof renderLevels === 'function') renderLevels();
        const names = Object.keys(data);
        if (names.length > 0) switchPlayer(names[0]);
        showToast("Save imported! Welcome " + names[0] + "!");
      } else { showToast("Invalid file."); }
    } catch(err) { showToast("Error: unrecognised file."); }
  };
  reader.readAsText(file);
  event.target.value = "";
}

// ── NORMALIZE ──
function normalizeForMatch(text) {
  if (!text) return '';
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

// ── DIRECTION HELPER ──
function getDirectionLabel() {
  if (typeof DirectionMode !== 'undefined') {
    return DirectionMode.getLabel();
  }
  return '🇬🇧→🇫🇷 English First';
}

// ── VOCABULAIRE POPUP ──
function openVocabPopup(fr) {
  if (typeof VOCABULARY_BDD === "undefined") return;
  const w = VOCABULARY_BDD.find(function(x) { return x.fr === fr; });
  if (!w) return;

  const set = function(id, v) {
    const el = document.getElementById(id);
    if (el) el.textContent = v || "";
  };
  set("vocabPopupFr", w.fr);
  set("vocabPopupPhon", w.phon || "");
  set("vocabPopupEn", w.en);
  set("vocabPopupDef", w.def || "");
  set("vocabPopupEx", w.ex || "");
  set("vocabPopupCat", (w.cat || "") + (w.level ? " • Level " + w.level : ""));

  const body = document.getElementById("vocab-popup-body");
  if (body) {
    body.innerHTML = 
      '<div class="vocab-popup-fr">' + _esc(w.fr) + '</div>' +
      '<div class="vocab-popup-phon">' + _esc(w.phon || "") + '</div>' +
      '<div class="vocab-popup-en">' + _esc(w.en || "") + '</div>' +
      '<div class="vocab-popup-def">' + _esc(w.def || "") + '</div>' +
      '<div class="vocab-popup-ex">' + _esc(w.ex || "") + '</div>' +
      '<div class="vocab-popup-cat">' + _esc((w.cat || "") + (w.level ? " • Level " + w.level : "")) + '</div>';
  }

  const modal = document.getElementById("vocabulary-popup-modal");
  if (modal) {
    modal.classList.add("open");
    modal.style.display = "flex";
  }
}

function closeVocabPopup(e) {
  if (e && e.target) {
    if (e.target.closest(".vocab-popup-content")) {
      if (!e.target.classList.contains("vocab-popup-close")) return;
    }
  }
  const modal = document.getElementById("vocabulary-popup-modal");
  if (modal) {
    modal.classList.remove("open");
    modal.style.display = "none";
  }
}

// ── HTML ESCAPE ──
function _esc(s) {
  if (s === null || s === undefined) return "";
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── TOGGLE TRADUCTION LEÇONS — CORRIGÉ v2.2 ──
function toggleLessonEx(btn, ev) {
  if (ev) { ev.stopPropagation(); ev.preventDefault(); }
  
  // Correction : nextElementSibling au lieu de querySelector
  var span = btn.nextElementSibling;
  while (span && !span.classList.contains('lesson-ex-en')) {
    span = span.nextElementSibling;
  }
  
  if (!span) return;
  
  // Ton ancienne logique qui marchait
  const show = span.style.display !== "block";
  span.style.display = show ? "block" : "none";
  btn.textContent = show ? "🇫🇷 Hide" : "🇬🇧 English";
}


// ═══════════════════════════════════════════════════════════════════
// FIN UI-UTILS.JS — v2.2
// ═══════════════════════════════════════════════════════════════════
