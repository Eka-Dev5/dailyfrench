// ═══════════════════════════════════════════════════════════════════
// CONVERSATION.JS — Daily French 🥖 v6.0
// Ajouts : TTS (lecture voc───────────────────────── */
.conv-section-title {
  font-size: var(--font-lg);
  color: var(--text);
  text-align: center;
  padding: 1.5rem 1rem 0.75rem;
  margin: 0;
  font-weight: 600;
}

.conv-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.conv-scenario-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.125rem 1.25rem;
  margin-bottom: 0.75rem;
  background: var(--white);
  border-radius: var(--r);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all var(--transition-fast);
  -webkit-tap-highlight-color: transparent;
}

.conv-scenario-card:hover,
.conv-scenario-card:active {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
  border-color: var(--primary-mid);
}

.conv-scen-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--r);
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  flex-shrink: 0;
}

.conv-scen-info {
  flex: 1;
  min-width: 0;
}

.conv-scen-title {
  font-size: var(--font-md);
  font-weight: 600;
  color: var(--text);
  line-height: 1.3;
}

.conv-scen-subtitle {
  font-size: var(--font-sm);
  color: var(--muted);
  margin-top: 0.125rem;
}

.conv-scen-meta {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.375rem;
  flex-wrap: wrap;
  font-size: var(--font-xs);
  color: var(--subtle);
}

.conv-scen-diff {
  color: var(--gold);
  letter-spacing: 0.1em;
}

.conv-scen-arrow {
  font-size: 1.25rem;
  color: var(--subtle);
  flex-shrink: 0;
  transition: transform var(--transition-fast);
}

.conv-scenario-card:hover .conv-scen-arrow {
  transform: translateX(4px);
  color: var(--primary);
}

/* ── SIMULATION — HEADER ────────────────────────────────────────── */
.conv-sim {
  max-width: 640px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  animation: convFadeIn 300ms ease;
}

@keyframes convFadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.conv-sim-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--bg);
  z-index: 10;
}

.conv-sim-info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--font-sm);
  color: var(--text);
}

.conv-sim-info span:first-child {
  font-size: 1.25rem;
}

.conv-sim-info span:nth-child(2) {
  font-weight: 600;
}

#convSimProgress {
  margin-left: auto;
  color: var(--muted);
  font-weight: 500;
  background: var(--primary-light);
  padding: 0.25rem 0.625rem;
  border-radius: 999px;
  font-size: var(--font-xs);
}

/* ── ZONE DE DIALOGUE (style chat) ──────────────────────────────── */
.conv-dialogue {
  min-height: 200px;
  max-height: 55vh;
  overflow-y: auto;
  padding: 0.75rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  scroll-behavior: smooth;
}

.conv-msg {
  display: flex;
  gap: 0.625rem;
  animation: convMsgIn 250ms ease backwards;
}

@keyframes convMsgIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

.conv-msg-npc {
  align-self: flex-start;
}

.conv-msg-user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.conv-msg-setting {
  background: var(--white);
  border-radius: var(--r);
  padding: 1.25rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  flex-direction: column;
  gap: 0.625rem;
}

.conv-setting-label {
  font-size: var(--font-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--primary);
}

.conv-setting-text {
  font-size: var(--font-sm);
  color: var(--muted);
  font-style: italic;
  line-height: 1.5;
}

.conv-setting-role,
.conv-setting-npc {
  font-size: var(--font-sm);
  color: var(--text);
  line-height: 1.5;
}

.conv-msg-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.conv-msg-avatar-user {
  background: var(--primary-light);
}

.conv-msg-bubble {
  background: var(--white);
  border-radius: var(--r);
  border-bottom-left-radius: 4px;
  padding: 0.875rem 1rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  max-width: 85%;
  position: relative;
}

.conv-msg-bubble-user {
  background: var(--primary);
  color: white;
  border-bottom-left-radius: var(--r);
  border-bottom-right-radius: 4px;
}

.conv-msg-bubble-user .conv-msg-text {
  color: white;
}

.conv-msg-npc-name {
  font-size: var(--font-xs);
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.conv-msg-text {
  font-size: var(--font-md);
  line-height: 1.5;
  color: var(--text);
}

/* ── Bouton 🔊 dans les bulles NPC (position absolue, en bas à droite) ── */
.conv-msg-tts {
  position: absolute;
  bottom: -10px;
  right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--white);
  font-size: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: opacity var(--transition-fast);
}

.conv-msg-tts:hover {
  opacity: 1;
  background: var(--primary-light);
}

/* ── CHOIX DE RÉPONSES ──────────────────────────────────────────── */
.conv-choices {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 0.75rem 0 1rem;
  animation: convFadeIn 200ms ease;
}

.conv-choice-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.125rem;
  background: var(--white);
  border: 2px solid var(--border);
  border-radius: var(--r);
  cursor: pointer;
  text-align: left;
  transition: all var(--transition-fast);
  -webkit-tap-highlight-color: transparent;
}

.conv-choice-btn:hover:not(:disabled) {
  border-color: var(--primary-mid);
  background: var(--primary-light);
  transform: translateX(4px);
}

.conv-choice-btn:disabled {
  cursor: default;
  opacity: 0.7;
}

.conv-choice-btn.chosen {
  border-color: var(--primary);
  background: var(--primary-light);
}

.conv-choice-btn.best {
  border-color: #059669;
  background: #ECFDF5;
}

.conv-choice-btn.chosen.best {
  border-color: #059669;
  background: #D1FAE5;
}

.conv-choice-letter {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary-light);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--font-sm);
  flex-shrink: 0;
}

.conv-choice-text {
  font-size: var(--font-md);
  color: var(--text);
  line-height: 1.4;
  flex: 1;
}

/* ── Bouton 🔊 à côté de chaque réponse ───────────────────────── */
.conv-choice-speak {
  margin-left: auto;
  padding: 0.25rem 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s;
  border-left: 1px solid var(--subtle);
  background: none;
  border: none;
}

.conv-choice-speak:hover {
  opacity: 1;
  background: var(--primary-light);
  border-radius: 0.25rem;
}

/* ── FEEDBACK ───────────────────────────────────────────────────── */
.conv-feedback {
  background: var(--white);
  border-radius: var(--r);
  border-left: 4px solid var(--gold);
  padding: 1rem 1.125rem;
  margin: 0.5rem 0 1rem;
  box-shadow: var(--shadow-sm);
  animation: convFadeIn 200ms ease;
}

#convFeedbackText {
  font-size: var(--font-sm);
  line-height: 1.6;
  color: var(--text);
  margin-bottom: 0.875rem;
}

#convNextBtn {
  width: 100%;
}

/* ── RÉSULTATS ──────────────────────────────────────────────────── */
.conv-results {
  max-width: 480px;
  margin: 0 auto;
  padding: 2rem var(--space-md);
  text-align: center;
  animation: convFadeIn 400ms ease;
}

.conv-result-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: var(--shadow);
}

#convResultScore {
  font-size: 2rem;
  font-weight: 700;
  color: white;
}

.conv-results h2 {
  font-size: var(--font-xl);
  color: var(--text);
  margin: 0 0 0.5rem;
}

.conv-results > p {
  font-size: var(--font-md);
  color: var(--muted);
  line-height: 1.5;
  margin: 0 0 1.5rem;
}

#convResultBreakdown {
  text-align: left;
  background: var(--white);
  border-radius: var(--r);
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
}

.conv-result-row {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
  font-size: var(--font-sm);
}

.conv-result-row:last-child {
  border-bottom: none;
}

.conv-result-icon {
  font-size: 1rem;
  flex-shrink: 0;
}

.conv-result-num {
  color: var(--subtle);
  font-weight: 600;
  flex-shrink: 0;
  width: 2rem;
}

.conv-result-text {
  color: var(--text);
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.conv-result-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* ── SCROLLBAR ──────────────────────────────────────────────────── */
.conv-dialogue::-webkit-scrollbar {
  width: 5px;
}

.conv-dialogue::-webkit-scrollbar-track {
  background: transparent;
}

.conv-dialogue::-webkit-scrollbar-thumb {
  background: var(--subtle);
  border-radius: 3px;
}

/* ═══════════════════════════════════════════════════════════════════
   FIN conversation.css
   ═══════════════════════════════════════════════════════════════════ */
