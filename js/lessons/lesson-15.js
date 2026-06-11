// lesson-15.js — My House 🏡 — Household tasks
const LESSON_15 = {
  id: 15,
  title: "My House 🏡 — Household tasks",
  titleFr: "Ma maison — Tâches ménagères",
  objectiveEn: "Talk about household chores and tasks around the home",
  objectiveFr: "Parler des tâches ménagères et des corvées à la maison",
  hintEn: "Faire + household task is the key pattern: faire le ménage, faire la vaisselle...",
  hintFr: "Faire + tâche ménagère est le modèle clé : faire le ménage, faire la vaisselle...",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🏡 Household chores</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>faire le ménage</td><td><em>*fair le may-NAZH*</em></td><td>do the housework</td></tr>
<tr><td>faire la vaisselle</td><td><em>*fair la vay-SELL*</em></td><td>do the dishes</td></tr>
<tr><td>faire le lit</td><td><em>*fair le LEE*</em></td><td>make the bed</td></tr>
<tr><td>passer l'aspirateur</td><td><em>*pass-ay las-pee-ra-TEUR*</em></td><td>vacuum</td></tr>
<tr><td>ranger</td><td><em>*ran-ZHAY*</em></td><td>tidy up</td></tr>
<tr><td>nettoyer</td><td><em>*net-wa-YAY*</em></td><td>clean</td></tr>
<tr><td>sortir les poubelles</td><td><em>*sor-TEER lay poo-BELL*</em></td><td>take out the bins</td></tr>
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
      questionFr: "'Je fais le ménage.' en anglais :",
      options: ["Je fais le ménage.","Je suis le ménage.","Je nettoie le ménage.","Je fais la maison."],
      optionsEn: ["I do the housework.","I am the housework.","I clean the housework.","I do the house."],
      correct: "Je fais le ménage.",
      correctEn: "I do the housework.",
      explanation: "Faire le ménage (*fair le may-NAZH*) = do the housework. Very common expression!",
      explanationFr: "Faire le ménage = faire le ménage. Expression très courante !"
    },
    {
      id: "15-2",
      type: "qcm",
      question: "'I do the dishes' in French:",
      questionFr: "'Je fais la vaisselle.' en anglais :",
      options: ["Je fais la vaisselle.","Je lave la vaisselle.","Je nettoie la vaisselle.","Je range la vaisselle."],
      optionsEn: ["I do the dishes.","I wash the dishes.","I clean the dishes.","I tidy the dishes."],
      correct: "Je fais la vaisselle.",
      correctEn: "I do the dishes.",
      explanation: "Faire la vaisselle = do the dishes. La vaisselle = dishes/crockery.",
      explanationFr: "Faire la vaisselle = faire la vaisselle. La vaisselle = vaisselle."
    },
    {
      id: "15-3",
      type: "qcm",
      question: "'I vacuum' in French:",
      questionFr: "'Je passe l'aspirateur.' en anglais :",
      options: ["Je passe l'aspirateur.","Je fais l'aspirateur.","J'aspire.","Je nettoie avec l'aspirateur."],
      optionsEn: ["I vacuum.","I do the vacuum.","I aspire.","I clean with the vacuum."],
      correct: "Je passe l'aspirateur.",
      correctEn: "I vacuum.",
      explanation: "Passer l'aspirateur (*pass-ay las-pee-ra-TEUR*) = to vacuum. Not faire — it's passer!",
      explanationFr: "Passer l'aspirateur = passer l'aspirateur. Pas faire — c'est passer !"
    },
    {
      id: "15-4",
      type: "qcm",
      question: "'I make the bed' in French:",
      questionFr: "'Je fais le lit.' en anglais :",
      options: ["Je fais le lit.","Je prépare le lit.","J'arrange le lit.","Je mets le lit."],
      optionsEn: ["I make the bed.","I prepare the bed.","I arrange the bed.","I put the bed."],
      correct: "Je fais le lit.",
      correctEn: "I make the bed.",
      explanation: "Faire le lit = make the bed. Le lit (*lee*) = bed.",
      explanationFr: "Faire le lit = faire le lit. Le lit = lit."
    },
    {
      id: "15-5",
      type: "qcm",
      question: "'I tidy up' in French:",
      questionFr: "'Je range.' en anglais :",
      options: ["Je range.","Je nettoie.","Je fais.","J'ordre."],
      optionsEn: ["I tidy up.","I clean.","I do.","I order."],
      correct: "Je range.",
      correctEn: "I tidy up.",
      explanation: "Ranger (*ran-ZHAY*) = to tidy up, to put away. Je range = I tidy up.",
      explanationFr: "Ranger = ranger. Je range = je range."
    },
    {
      id: "15-6",
      type: "qcm",
      question: "'I take out the bins' in French:",
      questionFr: "'Je sors les poubelles.' en anglais :",
      options: ["Je sors les poubelles.","Je jette les poubelles.","Je fais les poubelles.","Je mets les poubelles."],
      optionsEn: ["I take out the bins.","I throw the bins.","I do the bins.","I put the bins."],
      correct: "Je sors les poubelles.",
      correctEn: "I take out the bins.",
      explanation: "Sortir les poubelles (*soor-TEER*) = take out the bins. Les poubelles = the bins.",
      explanationFr: "Sortir les poubelles = sortir les poubelles. Les poubelles = les poubelles."
    },
    {
      id: "15-7",
      type: "qcm",
      question: "'I clean the kitchen' in French:",
      questionFr: "'Je nettoie la cuisine.' en anglais :",
      options: ["Je nettoie la cuisine.","Je fais la cuisine.","Je lave la cuisine.","Je range la cuisine."],
      optionsEn: ["I clean the kitchen.","I do the cooking.","I wash the kitchen.","I tidy the kitchen."],
      correct: "Je nettoie la cuisine.",
      correctEn: "I clean the kitchen.",
      explanation: "Nettoyer (*net-wa-YAY*) = to clean. La cuisine = the kitchen.",
      explanationFr: "Nettoyer = nettoyer. La cuisine = la cuisine."
    },
    {
      id: "15-8",
      type: "qcm",
      question: "'I do the cooking' in French:",
      questionFr: "'Je fais la cuisine.' en anglais :",
      options: ["Je fais la cuisine.","Je cuisine.","Je prépare à manger.","Je fais à manger."],
      optionsEn: ["I do the cooking.","I cook.","I prepare to eat.","I make to eat."],
      correct: "Je fais la cuisine.",
      correctEn: "I do the cooking.",
      explanation: "Faire la cuisine = do the cooking. Also: je cuisine (I cook).",
      explanationFr: "Faire la cuisine = faire la cuisine. Aussi : je cuisine."
    },
    {
      id: "15-9",
      type: "qcm",
      question: "Which is WRONG: 'Je ___ le lit.'?",
      questionFr: "Lequel est FAUX : 'Je ___ le lit.' ?",
      options: ["Je suis le lit","Je fais le lit","J'ai fait le lit","Je vais faire le lit"],
      optionsEn: ["I am the bed","I make the bed","I made the bed","I'm going to make the bed"],
      correct: "Je suis le lit",
      correctEn: "I am the bed",
      explanation: "Je suis le lit makes no sense! Je fais le lit = I make the bed.",
      explanationFr: "Je suis le lit n'a aucun sens ! Je fais le lit = je fais le lit."
    },
    {
      id: "15-10",
      type: "qcm",
      question: "'I'll clean the house tomorrow.' in French:",
      questionFr: "'Je vais nettoyer la maison demain.' en anglais :",
      options: ["Je vais nettoyer la maison demain.","Je nettoierai demain.","Demain nettoie.","Je dois nettoyer demain."],
      optionsEn: ["I'll clean the house tomorrow.","I will clean tomorrow.","Tomorrow cleans.","I must clean tomorrow."],
      correct: "Je vais nettoyer la maison demain.",
      correctEn: "I'll clean the house tomorrow.",
      explanation: "Je vais + infinitive = I'm going to (near future). Demain = tomorrow.",
      explanationFr: "Je vais + infinitif = futur proche. Demain = demain."
    }
  ],
  libre: [
    {
      id: "15-l1",
      type: "libre",
      question: "Translate: 'I do the housework on Mondays.'",
      questionFr: "Traduisez : 'Je fais le ménage le lundi.'",
      correct: "Je fais le ménage le lundi.",
      correctEn: "I do the housework on Mondays.",
      alternatives: [],
      explanation: "Le lundi = on Mondays (habitual). Faire le ménage = do the housework.",
      explanationFr: "Le lundi = le lundi (habituel). Faire le ménage = faire le ménage."
    },
    {
      id: "15-l2",
      type: "libre",
      question: "How do you say 'I vacuum the whole house'?",
      questionFr: "Comment dit-on 'Je passe l'aspirateur dans toute la maison' ?",
      correct: "Je passe l'aspirateur dans toute la maison.",
      correctEn: "I vacuum the whole house.",
      alternatives: [],
      explanation: "Toute la maison = the whole house. Passer l'aspirateur = to vacuum.",
      explanationFr: "Toute la maison = toute la maison. Passer l'aspirateur = passer l'aspirateur."
    },
    {
      id: "15-l3",
      type: "libre",
      question: "Translate: 'I made the bed this morning.'",
      questionFr: "Traduisez : 'J'ai fait le lit ce matin.'",
      correct: "J'ai fait le lit ce matin.",
      correctEn: "I made the bed this morning.",
      alternatives: [],
      explanation: "Passé composé: j'ai fait. Ce matin = this morning.",
      explanationFr: "Passé composé : j'ai fait. Ce matin = ce matin."
    },
    {
      id: "15-l4",
      type: "libre",
      question: "Complete: 'Je sors les ___ le mardi.'",
      questionFr: "Complétez : 'Je sors les ___ le mardi.'",
      correct: "poubelles",
      correctEn: "bins",
      alternatives: [],
      explanation: "Les poubelles = the bins. Je sors les poubelles = I take out the bins.",
      explanationFr: "Les poubelles = les poubelles. Je sors les poubelles = je sors les poubelles."
    },
    {
      id: "15-l5",
      type: "libre",
      question: "How do you say 'I need to clean the bathroom'?",
      questionFr: "Comment dit-on 'Je dois nettoyer la salle de bain' ?",
      correct: "Je dois nettoyer la salle de bain.",
      correctEn: "I need to clean the bathroom.",
      alternatives: [],
      explanation: "La salle de bain = the bathroom. Nettoyer = to clean.",
      explanationFr: "La salle de bain = la salle de bain. Nettoyer = nettoyer."
    },
    {
      id: "15-l6",
      type: "libre",
      question: "Translate: 'I tidied up the living room.'",
      questionFr: "Traduisez : 'J'ai rangé le salon.'",
      correct: "J'ai rangé le salon.",
      correctEn: "I tidied up the living room.",
      alternatives: [],
      explanation: "Ranger → rangé. Le salon = living room.",
      explanationFr: "Ranger → rangé. Le salon = le salon."
    },
    {
      id: "15-l7",
      type: "libre",
      question: "Complete: 'Ce matin j'ai fait la ___.'",
      questionFr: "Complétez : 'Ce matin j'ai fait la ___.'",
      correct: "vaisselle",
      correctEn: "dishes",
      alternatives: [],
      explanation: "Faire la vaisselle = do the dishes.",
      explanationFr: "Faire la vaisselle = faire la vaisselle."
    },
    {
      id: "15-l8",
      type: "libre",
      question: "How do you say 'I do the cooking every evening'?",
      questionFr: "Comment dit-on 'Je fais la cuisine tous les soirs' ?",
      correct: "Je fais la cuisine tous les soirs.",
      correctEn: "I do the cooking every evening.",
      alternatives: [],
      explanation: "Tous les soirs = every evening.",
      explanationFr: "Tous les soirs = tous les soirs."
    },
    {
      id: "15-l9",
      type: "libre",
      question: "Translate: 'I need to take out the bins.'",
      questionFr: "Traduisez : 'Je dois sortir les poubelles.'",
      correct: "Je dois sortir les poubelles.",
      correctEn: "I need to take out the bins.",
      alternatives: [],
      explanation: "Je dois + infinitive = I need to / I must.",
      explanationFr: "Je dois + infinitif = je dois / il faut."
    },
    {
      id: "15-l10",
      type: "libre",
      question: "What does 'faire le ménage' mean?",
      questionFr: "Que signifie 'faire le ménage' ?",
      correct: "do the housework",
      correctEn: "do the housework",
      alternatives: ["housework","do housework"],
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

