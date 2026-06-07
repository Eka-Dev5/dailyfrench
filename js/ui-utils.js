// ═══════════════════════════════════════════════════════════════════
// UI-UTILS.JS — Daily French 🥖 v2.1
// Toast, export/import, popup vocabulaire, navigation, helpers
//
// MODIFICATIONS v2.1 :
//   + normalizeForMatch() — NFD + strip diacritics + lower + trim
//   + getDirectionLabel() — helper pour affichage direction
//   + _esc() amélioré
//   ~ openVocabPopup : fonctionne avec les deux structures HTML
//   ~ closeVocabPopup : corrigé, ferme proprement
// ═══════════════════════════════════════════════════════════════════

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
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

// ── NORMALIZE — NOUVEAU v2.1 ──
// Comparaison insensible aux accents, majuscules, espaces
function normalizeForMatch(text) {
  if (!text) return '';
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

// ── DIRECTION HELPER — NOUVEAU v2.1 ──
// Retourne le label traduit du mode direction actuel
function getDirectionLabel() {
  if (typeof DirectionMode !== 'undefined') {
    return DirectionMode.getLabel();
  }
  return '🇬🇧→🇫🇷 English First';
}

// ── VOCABULAIRE POPUP ──
function openVocabPopup(fr) {
  if (typeof VOCABULARY_BDD === "undefined") return;
  const w = VOCABULARY_BDD.find(x => x.fr === fr);
  if (!w) return;

  // Structure complète (vocabulary.html, dashboard.html)
  const set = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.textContent = v || "";
  };
  set("vocabPopupFr", w.fr);
  set("vocabPopupPhon", w.phon || "");
  set("vocabPopupEn", w.en);
  set("vocabPopupDef", w.def || "");
  set("vocabPopupEx", w.ex || "");
  set("vocabPopupCat", (w.cat || "") + (w.level ? " • Level " + w.level : ""));

  // Structure simple (quiz.html) : #vocab-popup-body
  const body = document.getElementById("vocab-popup-body");
  if (body) {
    body.innerHTML = `
      <div class="vocab-popup-fr">${_esc(w.fr)}</div>
      <div class="vocab-popup-phon">${_esc(w.phon || "")}</div>
      <div class="vocab-popup-en">${_esc(w.en || "")}</div>
      <div class="vocab-popup-def">${_esc(w.def || "")}</div>
      <div class="vocab-popup-ex">${_esc(w.ex || "")}</div>
      <div class="vocab-popup-cat">${_esc((w.cat || "") + (w.level ? " • Level " + w.level : ""))}</div>
    `;
  }

  // Ouvrir le popup
  const modal = document.getElementById("vocabulary-popup-modal");
  if (modal) {
    modal.classList.add("open");
    modal.style.display = "flex";
  }
}

function closeVocabPopup(e) {
  // Ne ferme pas si clic dans le contenu (sauf bouton ×)
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

// ── TOGGLE TRADUCTION LEÇONS ──
function toggleLessonEx(btn, ev) {
  if (ev) { ev.stopPropagation(); ev.preventDefault(); }
  const span = btn.parentElement ? btn.parentElement.querySelector(".lesson-ex-en") : null;
  if (!span) return;
  const show = span.style.display !== "block";
  span.style.display = show ? "block" : "none";
  btn.textContent = show ? "🇫🇷 Hide" : "🇬🇧 English";
}

// ═══════════════════════════════════════════════════════════════════
// FIN UI-UTILS.JS — v2.1 — 7 juin 2026
// ═══════════════════════════════════════════════════════════════════
