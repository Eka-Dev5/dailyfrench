// lesson-03.js — In the Garden 🌿
const LESSON_03 = {
  id: 3,
  title: "In the Garden 🌿",
  titleFr: "Dans le jardin",
  objectiveEn: "Talk about garden tasks and plants",
  objectiveFr: "Parler des tâches de jardinage et des plantes",
  hintEn: "Garden chat is great for connecting with French neighbours!",
  hintFr: "Parler jardinage est excellent pour se lier avec les voisins français !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🌱 Garden vocabulary</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>le jardin</td><td><em>*le zhar-DAN*</em></td><td>the garden</td></tr>
<tr><td>arroser</td><td><em>*a-ro-ZAY*</em></td><td>to water</td></tr>
<tr><td>tondre la pelouse</td><td><em>*tondre la pe-LOOZ*</em></td><td>to mow the lawn</td></tr>
<tr><td>planter</td><td><em>*plan-TAY*</em></td><td>to plant</td></tr>
<tr><td>désherber</td><td><em>*day-zair-BAY*</em></td><td>to weed</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>🌸 Flowers & plants</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>une fleur / les fleurs</td><td>a flower / flowers</td></tr>
<tr><td>un légume</td><td>a vegetable</td></tr>
<tr><td>un arbre</td><td>a tree</td></tr>
<tr><td>la terre</td><td>the soil / earth</td></tr>
</table>
</div>
<div class="lesson-example">
<strong>Exemple :</strong> J'arrose le jardin ce matin. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">I water the garden this morning.</span>
</div>
  `,
  qcm: [
    {
      id: "03-1",
      type: "qcm",
      question: "'To water the garden' in French:",
      questionFr: "'Arroser le jardin' en anglais :",
      options: ["Arroser le jardin","Faire le jardin","Nettoyer le jardin","Planter le jardin"],
      optionsEn: ["To water the garden","To do the garden","To clean the garden","To plant the garden"],
      correct: "Arroser le jardin",
      correctEn: "To water the garden",
      explanation: "Arroser (*a-ro-ZAY*) = to water. Je dois arroser = I need to water.",
      explanationFr: "Arroser = arroser. Je dois arroser = je dois arroser."
    },
    {
      id: "03-2",
      type: "qcm",
      question: "'To mow the lawn' in French:",
      questionFr: "'Tondre la pelouse' en anglais :",
      options: ["Tondre la pelouse","Couper la pelouse","Faire la pelouse","Arroser la pelouse"],
      optionsEn: ["To mow the lawn","To cut the lawn","To do the lawn","To water the lawn"],
      correct: "Tondre la pelouse",
      correctEn: "To mow the lawn",
      explanation: "Tondre la pelouse (*tondre*) = to mow the lawn. La pelouse = the lawn.",
      explanationFr: "Tondre la pelouse = tondre la pelouse. La pelouse = la pelouse."
    },
    {
      id: "03-3",
      type: "qcm",
      question: "What is 'une fleur' in English?",
      questionFr: "Que signifie 'une fleur' en anglais ?",
      options: ["A flower","A leaf","A tree","A vegetable"],
      optionsEn: ["A flower","A leaf","A tree","A vegetable"],
      correct: "A flower",
      correctEn: "A flower",
      explanation: "Une fleur (*flerr*) = a flower. Les fleurs = the flowers.",
      explanationFr: "Une fleur = une fleur. Les fleurs = les fleurs."
    },
    {
      id: "03-4",
      type: "qcm",
      question: "'To weed' in French:",
      questionFr: "'Désherber' en anglais :",
      options: ["Désherber","Arroser","Planter","Tailler"],
      optionsEn: ["To weed","To water","To plant","To prune"],
      correct: "Désherber",
      correctEn: "To weed",
      explanation: "Désherber (*day-zair-BAY*) = to weed. Les mauvaises herbes = weeds.",
      explanationFr: "Désherber = désherber. Les mauvaises herbes = les mauvaises herbes."
    },
    {
      id: "03-5",
      type: "qcm",
      question: "'The vegetable garden' in French:",
      questionFr: "'Le potager' en anglais :",
      options: ["Le potager","Le jardin","Le verger","La pelouse"],
      optionsEn: ["The vegetable garden","The garden","The orchard","The lawn"],
      correct: "Le potager",
      correctEn: "The vegetable garden",
      explanation: "Le potager (*poh-ta-ZHAY*) = vegetable garden. Very common in France!",
      explanationFr: "Le potager = le potager. Très courant en France !"
    },
    {
      id: "03-6",
      type: "qcm",
      question: "'To prune / trim' in French:",
      questionFr: "'Tailler' en anglais :",
      options: ["Tailler","Planter","Arroser","Récolter"],
      optionsEn: ["To prune/trim","To plant","To water","To harvest"],
      correct: "Tailler",
      correctEn: "To prune / trim",
      explanation: "Tailler (*tie-YAY*) = to prune, trim or cut back plants.",
      explanationFr: "Tailler = tailler. Tailler ou couper les plantes."
    },
    {
      id: "03-7",
      type: "qcm",
      question: "'I need to water the flowers' in French:",
      questionFr: "'Je dois arroser les fleurs' en anglais :",
      options: ["Je dois arroser les fleurs.","Je fais les fleurs.","Les fleurs ont soif.","J'arrose demain."],
      optionsEn: ["I need to water the flowers.","I do the flowers.","The flowers are thirsty.","I water tomorrow."],
      correct: "Je dois arroser les fleurs.",
      correctEn: "I need to water the flowers.",
      explanation: "Je dois (*zhuh DWAH*) = I must / I need to. Followed by infinitive.",
      explanationFr: "Je dois = je dois. Suivi de l'infinitif."
    },
    {
      id: "03-8",
      type: "qcm",
      question: "'The soil / earth' in French:",
      questionFr: "'La terre' en anglais :",
      options: ["La terre","La pelouse","Le jardin","Le sol"],
      optionsEn: ["The soil/earth","The lawn","The garden","The ground"],
      correct: "La terre",
      correctEn: "The soil / earth",
      explanation: "La terre (*tair*) = the earth / soil. Also means 'the world'.",
      explanationFr: "La terre = la terre. Signifie aussi 'le monde'."
    },
    {
      id: "03-9",
      type: "qcm",
      question: "'A tree' in French:",
      questionFr: "'Un arbre' en anglais :",
      options: ["Un arbre","Une plante","Une fleur","Un arbuste"],
      optionsEn: ["A tree","A plant","A flower","A shrub"],
      correct: "Un arbre",
      correctEn: "A tree",
      explanation: "Un arbre (*an-ARBruh*) = a tree. Les arbres = the trees.",
      explanationFr: "Un arbre = un arbre. Les arbres = les arbres."
    },
    {
      id: "03-10",
      type: "qcm",
      question: "'To harvest / pick' in French:",
      questionFr: "'Récolter' en anglais :",
      options: ["Récolter","Planter","Arroser","Désherber"],
      optionsEn: ["To harvest/pick","To plant","To water","To weed"],
      correct: "Récolter",
      correctEn: "To harvest / pick",
      explanation: "Récolter (*ray-kol-TAY*) = to harvest / pick. La récolte = the harvest.",
      explanationFr: "Récolter = récolter. La récolte = la récolte."
    }
  ],
  libre: [
    {
      id: "03-l1",
      type: "libre",
      question: "Translate: 'I watered the garden this morning.'",
      questionFr: "Traduisez : 'J'ai arrosé le jardin ce matin.'",
      correct: "J'ai arrosé le jardin ce matin.",
      correctEn: "I watered the garden this morning.",
      alternatives: [],
      explanation: "Passé composé: j'ai + arrosé (past participle of arroser).",
      explanationFr: "Passé composé: j'ai + arrosé (participe passé d'arroser)."
    },
    {
      id: "03-l2",
      type: "libre",
      question: "How do you say 'the vegetable garden'?",
      questionFr: "Comment dit-on 'le potager' ?",
      correct: "le potager",
      correctEn: "the vegetable garden",
      alternatives: [],
      explanation: "Le potager is a specifically French institution — kitchen garden.",
      explanationFr: "Le potager est une institution spécifiquement française — le jardin potager."
    },
    {
      id: "03-l3",
      type: "libre",
      question: "What is 'tondre la pelouse'?",
      questionFr: "Que signifie 'tondre la pelouse' ?",
      correct: "to mow the lawn",
      correctEn: "to mow the lawn",
      alternatives: ["mow the lawn"],
      explanation: "Tondre = to mow/clip. La pelouse = the lawn.",
      explanationFr: "Tondre = tondre. La pelouse = la pelouse."
    },
    {
      id: "03-l4",
      type: "libre",
      question: "Complete: 'Je dois ___ les mauvaises herbes.'",
      questionFr: "Complétez : 'Je dois ___ les mauvaises herbes.'",
      correct: "désherber",
      correctEn: "weed",
      alternatives: [],
      explanation: "Désherber = to weed. Les mauvaises herbes = weeds (bad herbs).",
      explanationFr: "Désherber = désherber. Les mauvaises herbes = les mauvaises herbes."
    },
    {
      id: "03-l5",
      type: "libre",
      question: "How do you say 'to plant seeds'?",
      questionFr: "Comment dit-on 'planter des graines' ?",
      correct: "planter des graines",
      correctEn: "to plant seeds",
      alternatives: ["planter les graines"],
      explanation: "Planter = to plant. Des graines = seeds.",
      explanationFr: "Planter = planter. Des graines = des graines."
    },
    {
      id: "03-l6",
      type: "libre",
      question: "Translate: 'The garden is beautiful this year.'",
      questionFr: "Traduisez : 'Le jardin est beau cette année.'",
      correct: "Le jardin est beau cette année.",
      correctEn: "The garden is beautiful this year.",
      alternatives: [],
      explanation: "Beau (m) / belle (f) = beautiful. Cette année = this year.",
      explanationFr: "Beau (m) / belle (f) = beau. Cette année = cette année."
    },
    {
      id: "03-l7",
      type: "libre",
      question: "How do you say 'It needs watering'?",
      questionFr: "Comment dit-on 'Il faut arroser' ?",
      correct: "Il faut arroser.",
      correctEn: "It needs watering.",
      alternatives: ["Ça a besoin d'eau"],
      explanation: "Il faut (*eel foh*) + infinitive = it is necessary to / one must.",
      explanationFr: "Il faut + infinitif = il faut / il est nécessaire de."
    },
    {
      id: "03-l8",
      type: "libre",
      question: "What does 'la récolte' mean?",
      questionFr: "Que signifie 'la récolte' ?",
      correct: "the harvest",
      correctEn: "the harvest",
      alternatives: ["harvest"],
      explanation: "La récolte = harvest. Récolter = to harvest.",
      explanationFr: "La récolte = la récolte. Récolter = récolter."
    },
    {
      id: "03-l9",
      type: "libre",
      question: "Translate: 'I need to prune the roses.'",
      questionFr: "Traduisez : 'Je dois tailler les rosiers.'",
      correct: "Je dois tailler les rosiers.",
      correctEn: "I need to prune the roses.",
      alternatives: [],
      explanation: "Tailler = to prune. Les rosiers = the rose bushes.",
      explanationFr: "Tailler = tailler. Les rosiers = les rosiers."
    },
    {
      id: "03-l10",
      type: "libre",
      question: "Complete: 'J'ai planté des ___ ce printemps.'",
      questionFr: "Complétez : 'J'ai planté des ___ ce printemps.'",
      correct: "fleurs",
      correctEn: "flowers",
      alternatives: ["légumes","tomates"],
      explanation: "Des fleurs = some flowers. Ce printemps = this spring.",
      explanationFr: "Des fleurs = des fleurs. Ce printemps = ce printemps."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_03;
} else {
  window.LESSON_03 = LESSON_03;
}
