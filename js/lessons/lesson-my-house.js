// lesson-my-house.js
const LESSON_15 = {
  id: 15,
  title: "My House",
  titleFr: "Ma maison",
  objectiveEn: "Talk about household chores and tasks around the home",
  objectiveFr: "Parler des tâches ménagères et des travaux dans la maison",
  hintEn: "Faire + household task is the key pattern: faire le ménage, faire la vaisselle...",
  hintFr: "Faire + tâche ménagère est la structure clé : faire le ménage, faire la vaisselle...",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🏡 Household chores</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>Phonetics</th><th>English</th></tr></thead>
<tbody>
<tr><td>faire le ménage</td><td><em>*fair le may-NAZH*</em></td><td>do the housework</td></tr>
<tr><td>faire la vaisselle</td><td><em>*fair la vay-SELL*</em></td><td>do the dishes</td></tr>
<tr><td>faire le lit</td><td><em>*fair le LEE*</em></td><td>make the bed</td></tr>
<tr><td>passer l'aspirateur</td><td><em>*pass-ay las-peer-a-TUR*</em></td><td>vacuum</td></tr>
<tr><td>ranger</td><td><em>*ran-ZHAY*</em></td><td>tidy up</td></tr>
<tr><td>nettoyer</td><td><em>*net-wa-YAY*</em></td><td>clean</td></tr>
<tr><td>sortir les poubelles</td><td><em>*sor-TEER lay poo-BELL*</em></td><td>take out the bins</td></tr>
</tbody>
</table>
</div>
<div class="lesson-warning">⚠️ Note: <strong>faire</strong> is used with many household tasks — faire le ménage, faire la vaisselle, faire le lit. It's not "do" or "make" literally!</div>
<div class="lesson-example">
Le lundi, je fais le ménage et je passe l'aspirateur dans toute la maison. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">On Mondays, I do the housework and vacuum the whole house.</span>
</div>
  `,
  qcm: [
    {
      id: "15-1",
      type: "qcm",
      question: "'I do the housework' in French:",
      options: ["Je fais le ménage.", "Je suis le ménage.", "Je nettoie le ménage.", "Je fais la maison."],
      correct: "Je fais le ménage.",
      explanation: "Faire le ménage (*fair le may-NAZH*) = do the housework. Very common expression!",
      explanationFr: "Faire le ménage = faire le ménage. Expression très courante !"
    },
    {
      id: "15-2",
      type: "qcm",
      question: "'I do the dishes' in French:",
      options: ["Je fais la vaisselle.", "Je lave la vaisselle.", "Je nettoie la vaisselle.", "Je range la vaisselle."],
      correct: "Je fais la vaisselle.",
      explanation: "Faire la vaisselle = do the dishes. La vaisselle = dishes/crockery.",
      explanationFr: "Faire la vaisselle = faire la vaisselle. La vaisselle = la vaisselle."
    },
    {
      id: "15-3",
      type: "qcm",
      question: "'I vacuum' in French:",
      options: ["Je passe l'aspirateur.", "Je fais l'aspirateur.", "J'aspire.", "Je nettoie avec l'aspirateur."],
      correct: "Je passe l'aspirateur.",
      explanation: "Passer l'aspirateur (*pass-ay las-pee-ra-TEUR*) = to vacuum. Not faire — it's passer!",
      explanationFr: "Passer l'aspirateur = passer l'aspirateur. Pas faire — c'est passer !"
    },
    {
      id: "15-4",
      type: "qcm",
      question: "'I make the bed' in French:",
      options: ["Je fais le lit.", "Je prépare le lit.", "J'arrange le lit.", "Je mets le lit."],
      correct: "Je fais le lit.",
      explanation: "Faire le lit = make the bed. Le lit (*lee*) = bed.",
      explanationFr: "Faire le lit = faire le lit. Le lit = le lit."
    },
    {
      id: "15-5",
      type: "qcm",
      question: "'I tidy up' in French:",
      options: ["Je range.", "Je nettoie.", "Je fais.", "J'ordre."],
      correct: "Je range.",
      explanation: "Ranger (*ran-ZHAY*) = to tidy up, to put away. Je range = I tidy up.",
      explanationFr: "Ranger = ranger. Je range = je range."
    },
    {
      id: "15-6",
      type: "qcm",
      question: "'I take out the bins' in French:",
      options: ["Je sors les poubelles.", "Je jette les poubelles.", "Je fais les poubelles.", "Je mets les poubelles."],
      correct: "Je sors les poubelles.",
      explanation: "Sortir les poubelles (*soor-TEER*) = take out the bins. Les poubelles = the bins.",
      explanationFr: "Sortir les poubelles = sortir les poubelles. Les poubelles = les poubelles."
    },
    {
      id: "15-7",
      type: "qcm",
      question: "'I clean the kitchen' in French:",
      options: ["Je nettoie la cuisine.", "Je fais la cuisine.", "Je lave la cuisine.", "Je range la cuisine."],
      correct: "Je nettoie la cuisine.",
      explanation: "Nettoyer (*net-wa-YAY*) = to clean. La cuisine = the kitchen.",
      explanationFr: "Nettoyer = nettoyer. La cuisine = la cuisine."
    },
    {
      id: "15-8",
      type: "qcm",
      question: "'I do the cooking' in French:",
      options: ["Je fais la cuisine.", "Je cuisine.", "Je prépare à manger.", "Je fais à manger."],
      correct: "Je fais la cuisine.",
      explanation: "Faire la cuisine = do the cooking. Also: je cuisine (I cook).",
      explanationFr: "Faire la cuisine = faire la cuisine. Aussi : je cuisine."
    },
    {
      id: "15-9",
      type: "qcm",
      question: "Which is WRONG: 'Je ___ le lit.'?",
      options: ["Je suis le lit", "Je fais le lit", "J'ai fait le lit", "Je vais faire le lit"],
      correct: "Je suis le lit",
      explanation: "Je suis le lit makes no sense! Je fais le lit = I make the bed.",
      explanationFr: "Je suis le lit n'a aucun sens ! Je fais le lit = je fais le lit."
    },
    {
      id: "15-10",
      type: "qcm",
      question: "'I'll clean the house tomorrow.' in French:",
      options: ["Je vais nettoyer la maison demain.", "Je nettoierai demain.", "Demain nettoie.", "Je dois nettoyer demain."],
      correct: "Je vais nettoyer la maison demain.",
      explanation: "Je vais + infinitive = I'm going to (near future). Demain = tomorrow.",
      explanationFr: "Je vais + infinitif = je vais (futur proche). Demain = demain."
    }
  ],
  libre: [
    {
      id: "15-l1",
      type: "libre",
      question: "Translate: 'I do the housework on Mondays.'",
      correct: "Je fais le ménage le lundi.",
      alternatives: [],
      explanation: "Le lundi = on Mondays (habitual). Faire le ménage = do the housework.",
      explanationFr: "Le lundi = le lundi (habituel). Faire le ménage = faire le ménage."
    },
    {
      id: "15-l2",
      type: "libre",
      question: "How do you say 'I vacuum the whole house'?",
      correct: "Je passe l'aspirateur dans toute la maison.",
      alternatives: [],
      explanation: "Toute la maison = the whole house. Passer l'aspirateur = to vacuum.",
      explanationFr: "Toute la maison = toute la maison. Passer l'aspirateur = passer l'aspirateur."
    },
    {
      id: "15-l3",
      type: "libre",
      question: "Translate: 'I made the bed this morning.'",
      correct: "J'ai fait le lit ce matin.",
      alternatives: [],
      explanation: "Passé composé: j'ai fait. Ce matin = this morning.",
      explanationFr: "Passé composé: j'ai fait. Ce matin = ce matin."
    },
    {
      id: "15-l4",
      type: "libre",
      question: "Complete: 'Je sors les ___ le mardi.'",
      correct: "poubelles",
      alternatives: [],
      explanation: "Les poubelles = the bins. Je sors les poubelles = I take out the bins.",
      explanationFr: "Les poubelles = les poubelles. Je sors les poubelles = je sors les poubelles."
    },
    {
      id: "15-l5",
      type: "libre",
      question: "How do you say 'I need to clean the bathroom'?",
      correct: "Je dois nettoyer la salle de bain.",
      alternatives: [],
      explanation: "La salle de bain = the bathroom. Nettoyer = to clean.",
      explanationFr: "La salle de bain = la salle de bain. Nettoyer = nettoyer."
    },
    {
      id: "15-l6",
      type: "libre",
      question: "Translate: 'I tidied up the living room.'",
      correct: "J'ai rangé le salon.",
      alternatives: [],
      explanation: "Ranger → rangé. Le salon = living room.",
      explanationFr: "Ranger → rangé. Le salon = le salon."
    },
    {
      id: "15-l7",
      type: "libre",
      question: "Complete: 'Ce matin j'ai fait la ___.'",
      correct: "vaisselle",
      alternatives: [],
      explanation: "Faire la vaisselle = do the dishes.",
      explanationFr: "Faire la vaisselle = faire la vaisselle."
    },
    {
      id: "15-l8",
      type: "libre",
      question: "How do you say 'I do the cooking every evening'?",
      correct: "Je fais la cuisine tous les soirs.",
      alternatives: [],
      explanation: "Tous les soirs = every evening.",
      explanationFr: "Tous les soirs = tous les soirs."
    },
    {
      id: "15-l9",
      type: "libre",
      question: "Translate: 'I need to take out the bins.'",
      correct: "Je dois sortir les poubelles.",
      alternatives: [],
      explanation: "Je dois + infinitive = I need to / I must.",
      explanationFr: "Je dois + infinitif = je dois."
    },
    {
      id: "15-l10",
      type: "libre",
      question: "What does 'faire le ménage' mean?",
      correct: "do the housework",
      alternatives: ["housework", "do housework"],
      explanation: "Le ménage = housework. Faire le ménage = do the housework.",
      explanationFr: "Le ménage = le ménage. Faire le ménage = faire le ménage."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_15;
} else {
  window.LESSON_15 = LESSON_15;
}