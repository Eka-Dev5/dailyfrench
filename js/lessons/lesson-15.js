// lesson-15.js -- Household Chores
const LESSON_15 = {
  id: 15,
  title: "Household Chores",
  titleFr: "Les Taches Menageres",
  objectiveEn: "Talk about cleaning, tidying and household tasks",
  objectiveFr: "Parler du menage, du rangement et des taches domestiques",
  hintEn: "Use faire with chores: faire le menage = to do the housework. Very common structure!",
  hintFr: "Utilisez faire avec les taches : faire le menage = faire le menage. Structure tres courante !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Household chores</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>faire le menage</td><td><em>*fair le may-NAZH*</em></td><td>to do the housework <!-- *too doo thuh HOWS-wurk* --></td></tr>
<tr><td>faire la vaisselle</td><td><em>*fair la vay-SELL*</em></td><td>to do the washing-up <!-- *too doo thuh WOSH-ing up* --></td></tr>
<tr><td>faire le lit</td><td><em>*fair le LEE*</em></td><td>to make the bed <!-- *too mayk thuh bed* --></td></tr>
<tr><td>passer l'aspirateur</td><td><em>*pass-ay las-pee-ra-TEUR*</em></td><td>to vacuum / hoover <!-- *too VAK-yoom / HOO-vur* --></td></tr>
<tr><td>ranger</td><td><em>*ran-ZHAY*</em></td><td>to tidy up <!-- *too TYE-dee up* --></td></tr>
<tr><td>nettoyer</td><td><em>*net-wa-YAY*</em></td><td>to clean <!-- *too kleen* --></td></tr>
<tr><td>sortir les poubelles</td><td><em>*sor-TEER lay poo-BELL*</em></td><td>to take out the bins <!-- *too tayk out thuh binz* --></td></tr>
</table>
</div>
<div class="lesson-warning">In France, <strong>la poubelle</strong> (bin) has strict rules! Check local <strong>jours de collecte</strong> (collection days) -- putting bins out on the wrong day can result in fines.</div>
<div class="lesson-example">
-- Qui fait le menage aujourd hui ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Who is doing the housework today?</span><br>
-- Je fais la vaisselle et je range le salon. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I am doing the washing-up and tidying the living room.</span>
</div>
  `,
  qcm: [
    {
      id: "15-1",
      type: "qcm",
      question: "To do the housework in French:",
      questionFr: "Faire le menage en anglais :",
      options: ["Faire le menage","Faire menage","Faire la menage","Faire du menage"],
      optionsEn: ["to do the housework","to do housework","to do the housework (wrong)","to do some housework"],
      correct: "Faire le menage",
      correctEn: "to do the housework",
      explanation: "Faire le menage (fair le may-NAZH) = to do the housework. Le = the (definite article).",
      explanationFr: "Faire le menage = faire le menage. Le = le (article defini)."
    },
    {
      id: "15-2",
      type: "qcm",
      question: "To do the washing-up in French:",
      questionFr: "Faire la vaisselle en anglais :",
      options: ["Faire la vaisselle","Faire vaisselle","Faire le vaisselle","Laver vaisselle"],
      optionsEn: ["to do the washing-up","to do washing-up","to do the washing-up (wrong)","to wash washing-up"],
      correct: "Faire la vaisselle",
      correctEn: "to do the washing-up",
      explanation: "Faire la vaisselle (fair la vay-SELL) = to do the washing-up. La vaisselle = the dishes.",
      explanationFr: "Faire la vaisselle = faire la vaisselle. La vaisselle = la vaisselle."
    },
    {
      id: "15-3",
      type: "qcm",
      question: "To make the bed in French:",
      questionFr: "Faire le lit en anglais :",
      options: ["Faire le lit","Faire lit","Faire la lit","Preparer le lit"],
      optionsEn: ["to make the bed","to make bed","to make the bed (wrong)","to prepare the bed"],
      correct: "Faire le lit",
      correctEn: "to make the bed",
      explanation: "Faire le lit (fair le LEE) = to make the bed. Le lit = the bed.",
      explanationFr: "Faire le lit = faire le lit. Le lit = le lit."
    },
    {
      id: "15-4",
      type: "qcm",
      question: "To vacuum / hoover in French:",
      questionFr: "Passer l'aspirateur en anglais :",
      options: ["Passer l'aspirateur","Aspirer","Vacuum cleaner","Nettoyer l'aspirateur"],
      optionsEn: ["to vacuum / hoover","to suck up","vacuum cleaner","to clean the vacuum"],
      correct: "Passer l'aspirateur",
      correctEn: "to vacuum / hoover",
      explanation: "Passer l'aspirateur (pass-ay las-pee-ra-TEUR) = to vacuum. L'aspirateur = vacuum cleaner.",
      explanationFr: "Passer l'aspirateur = passer l'aspirateur. L'aspirateur = l'aspirateur."
    },
    {
      id: "15-5",
      type: "qcm",
      question: "To tidy up in French:",
      questionFr: "Ranger en anglais :",
      options: ["Ranger","Nettoyer","Organiser","Preparer"],
      optionsEn: ["to tidy up","to clean","to organise","to prepare"],
      correct: "Ranger",
      correctEn: "to tidy up",
      explanation: "Ranger (ran-ZHAY) = to tidy up / put away. Je range = I tidy up.",
      explanationFr: "Ranger = ranger / ranger. Je range = je range."
    },
    {
      id: "15-6",
      type: "qcm",
      question: "To clean in French:",
      questionFr: "Nettoyer en anglais :",
      options: ["Nettoyer","Ranger","Laver","Essuyer"],
      optionsEn: ["to clean","to tidy up","to wash","to wipe"],
      correct: "Nettoyer",
      correctEn: "to clean",
      explanation: "Nettoyer (net-wa-YAY) = to clean. Je nettoie = I clean.",
      explanationFr: "Nettoyer = nettoyer. Je nettoie = je nettoie."
    },
    {
      id: "15-7",
      type: "qcm",
      question: "To take out the bins in French:",
      questionFr: "Sortir les poubelles en anglais :",
      options: ["Sortir les poubelles","Prendre les poubelles","Jeter les poubelles","Vider les poubelles"],
      optionsEn: ["to take out the bins","to take the bins","to throw the bins","to empty the bins"],
      correct: "Sortir les poubelles",
      correctEn: "to take out the bins",
      explanation: "Sortir les poubelles (sor-TEER lay poo-BELL) = to take out the bins. Sortir = to take out.",
      explanationFr: "Sortir les poubelles = sortir les poubelles. Sortir = sortir."
    },
    {
      id: "15-8",
      type: "qcm",
      question: "Who is doing the housework today? in French:",
      questionFr: "Qui fait le menage aujourd'hui ? en anglais :",
      options: ["Qui fait le menage aujourd'hui ?","Qui fait menage aujourd'hui ?","Qui fait le menage ?","Qui menage aujourd'hui ?"],
      optionsEn: ["Who is doing the housework today?","Who is doing housework today?","Who is doing the housework?","Who housework today?"],
      correct: "Qui fait le menage aujourd'hui ?",
      correctEn: "Who is doing the housework today?",
      explanation: "Qui fait... ? = Who is doing...? Faire = to do/make.",
      explanationFr: "Qui fait... ? = qui fait... ? Faire = faire."
    },
    {
      id: "15-9",
      type: "qcm",
      question: "I am doing the washing-up. in French:",
      questionFr: "Je fais la vaisselle. en anglais :",
      options: ["Je fais la vaisselle.","Je fais vaisselle.","Je suis vaisselle.","J'ai vaisselle."],
      optionsEn: ["I am doing the washing-up.","I am doing washing-up.","I am washing-up.","I have washing-up."],
      correct: "Je fais la vaisselle.",
      correctEn: "I am doing the washing-up.",
      explanation: "Je fais (zhuh fay) = I do / I am doing. Faire = to do/make.",
      explanationFr: "Je fais = je fais. Faire = faire."
    },
    {
      id: "15-10",
      type: "qcm",
      question: "I tidy the living room. in French:",
      questionFr: "Je range le salon. en anglais :",
      options: ["Je range le salon.","Je nettoie le salon.","Je fais le salon.","Je prepare le salon."],
      optionsEn: ["I tidy the living room.","I clean the living room.","I do the living room.","I prepare the living room."],
      correct: "Je range le salon.",
      correctEn: "I tidy the living room.",
      explanation: "Je range (zhuh ronzh) = I tidy up. Le salon = the living room.",
      explanationFr: "Je range = je range. Le salon = le salon."
    }
  ],
  libre: [
    {
      id: "15-l1",
      type: "libre",
      question: "Translate: I do the housework.",
      questionFr: "Traduisez : Je fais le menage.",
      correct: "Je fais le menage.",
      correctEn: "I do the housework.",
      alternatives: [],
      explanation: "Je fais = I do. Le menage = the housework.",
      explanationFr: "Je fais = je fais. Le menage = le menage."
    },
    {
      id: "15-l2",
      type: "libre",
      question: "How do you say to make the bed?",
      questionFr: "Comment dit-on faire le lit ?",
      correct: "faire le lit",
      correctEn: "to make the bed",
      alternatives: [],
      explanation: "Faire le lit = to make the bed. Le lit = the bed.",
      explanationFr: "Faire le lit = faire le lit. Le lit = le lit."
    },
    {
      id: "15-l3",
      type: "libre",
      question: "Translate: I vacuum the bedroom.",
      questionFr: "Traduisez : Je passe l'aspirateur dans la chambre.",
      correct: "Je passe l'aspirateur dans la chambre.",
      correctEn: "I vacuum the bedroom.",
      alternatives: [],
      explanation: "Je passe l'aspirateur = I vacuum. La chambre = the bedroom.",
      explanationFr: "Je passe l'aspirateur = je passe l'aspirateur. La chambre = la chambre."
    },
    {
      id: "15-l4",
      type: "libre",
      question: "Complete: Je ___ les poubelles.",
      questionFr: "Completez : Je ___ les poubelles.",
      correct: "sors",
      correctEn: "take out",
      alternatives: ["sors"],
      explanation: "Je sors les poubelles = I take out the bins. Sortir = to take out.",
      explanationFr: "Je sors les poubelles = je sors les poubelles. Sortir = sortir."
    },
    {
      id: "15-l5",
      type: "libre",
      question: "How do you say to tidy up?",
      questionFr: "Comment dit-on ranger ?",
      correct: "ranger",
      correctEn: "to tidy up",
      alternatives: [],
      explanation: "Ranger = to tidy up / put away. Je range = I tidy up.",
      explanationFr: "Ranger = ranger / ranger. Je range = je range."
    },
    {
      id: "15-l6",
      type: "libre",
      question: "Translate: I clean the kitchen.",
      questionFr: "Traduisez : Je nettoie la cuisine.",
      correct: "Je nettoie la cuisine.",
      correctEn: "I clean the kitchen.",
      alternatives: [],
      explanation: "Je nettoie = I clean. La cuisine = the kitchen.",
      explanationFr: "Je nettoie = je nettoie. La cuisine = la cuisine."
    },
    {
      id: "15-l7",
      type: "libre",
      question: "Complete: Je fais ___ vaisselle.",
      questionFr: "Completez : Je fais ___ vaisselle.",
      correct: "la",
      correctEn: "the",
      alternatives: [],
      explanation: "Je fais la vaisselle = I do the washing-up. La = the (feminine).",
      explanationFr: "Je fais la vaisselle = je fais la vaisselle. La = la (feminin)."
    },
    {
      id: "15-l8",
      type: "libre",
      question: "How do you say to take out the bins?",
      questionFr: "Comment dit-on sortir les poubelles ?",
      correct: "sortir les poubelles",
      correctEn: "to take out the bins",
      alternatives: [],
      explanation: "Sortir les poubelles = to take out the bins. Sortir = to take out.",
      explanationFr: "Sortir les poubelles = sortir les poubelles. Sortir = sortir."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_15;
} else {
  window.LESSON_15 = LESSON_15;
}
