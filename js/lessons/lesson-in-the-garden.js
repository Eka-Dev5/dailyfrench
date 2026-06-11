// lesson-in-the-garden.js
const LESSON_03 = {
  id: 3,
  title: "In the Garden",
  titleFr: "Dans le jardin",
  objectiveEn: "Talk about garden tasks and plants",
  objectiveFr: "Parler des tâches du jardin et des plantes",
  hintEn: "Garden chat is great for connecting with French neighbours!",
  hintFr: "Discuter du jardin est idéal pour créer du lien avec les voisins français !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🌱 Garden vocabulary</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>Phonetics</th><th>English</th></tr></thead>
<tbody>
<tr><td>le jardin</td><td><em>*le zhar-DAN*</em></td><td>the garden</td></tr>
<tr><td>arroser</td><td><em>*a-ro-ZAY*</em></td><td>to water</td></tr>
<tr><td>tondre la pelouse</td><td><em>*tondre la pe-LOOZ*</em></td><td>to mow the lawn</td></tr>
<tr><td>planter</td><td><em>*plan-TAY*</em></td><td>to plant</td></tr>
<tr><td>désherber</td><td><em>*day-zair-BAY*</em></td><td>to weed</td></tr>
</tbody>
</table>
</div>
<div class="lesson-rule">
<h4>🌸 Flowers & plants</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>une fleur / les fleurs</td><td>a flower / flowers</td></tr>
<tr><td>un légume</td><td>a vegetable</td></tr>
<tr><td>un arbre</td><td>a tree</td></tr>
<tr><td>la terre</td><td>the soil / earth</td></tr>
</tbody>
</table>
</div>
<div class="lesson-example">
<strong>Exemple :</strong> J'arrose le jardin ce matin. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">I water the garden this morning.</span>
</div>
  `,
  qcm: [
    {
      id: "3-1",
      type: "qcm",
      question: "'To water the garden' in French:",
      options: ["Arroser le jardin", "Faire le jardin", "Nettoyer le jardin", "Planter le jardin"],
      correct: "Arroser le jardin",
      explanation: "Arroser (*a-ro-ZAY*) = to water. Je dois arroser = I need to water.",
      explanationFr: "Arroser = arroser. Je dois arroser = j'ai besoin d'arroser."
    },
    {
      id: "3-2",
      type: "qcm",
      question: "'To mow the lawn' in French:",
      options: ["Tondre la pelouse", "Couper la pelouse", "Faire la pelouse", "Arroser la pelouse"],
      correct: "Tondre la pelouse",
      explanation: "Tondre la pelouse (*tondre*) = to mow the lawn. La pelouse = the lawn.",
      explanationFr: "Tondre la pelouse = tondre la pelouse."
    },
    {
      id: "3-3",
      type: "qcm",
      question: "What is 'une fleur' in English?",
      options: ["A flower", "A leaf", "A tree", "A vegetable"],
      correct: "A flower",
      explanation: "Une fleur (*flerr*) = a flower. Les fleurs = the flowers.",
      explanationFr: "Une fleur = une fleur."
    },
    {
      id: "3-4",
      type: "qcm",
      question: "'To weed' in French:",
      options: ["Désherber", "Arroser", "Planter", "Tailler"],
      correct: "Désherber",
      explanation: "Désherber (*day-zair-BAY*) = to weed. Les mauvaises herbes = weeds.",
      explanationFr: "Désherber = désherber. Les mauvaises herbes = les mauvaises herbes."
    },
    {
      id: "3-5",
      type: "qcm",
      question: "'The vegetable garden' in French:",
      options: ["Le potager", "Le jardin", "Le verger", "La pelouse"],
      correct: "Le potager",
      explanation: "Le potager (*poh-ta-ZHAY*) = vegetable garden. Very common in France!",
      explanationFr: "Le potager = le potager. Très courant en France !"
    },
    {
      id: "3-6",
      type: "qcm",
      question: "'To prune / trim' in French:",
      options: ["Tailler", "Planter", "Arroser", "Récolter"],
      correct: "Tailler",
      explanation: "Tailler (*tie-YAY*) = to prune, trim or cut back plants.",
      explanationFr: "Tailler = tailler (les plantes)."
    },
    {
      id: "3-7",
      type: "qcm",
      question: "'I need to water the flowers' in French:",
      options: ["Je dois arroser les fleurs.", "Je fais les fleurs.", "Les fleurs ont soif.", "J'arrose demain."],
      correct: "Je dois arroser les fleurs.",
      explanation: "Je dois (*zhuh DWAH*) = I must / I need to. Followed by infinitive.",
      explanationFr: "Je dois = je dois. Suivi d'un infinitif."
    },
    {
      id: "3-8",
      type: "qcm",
      question: "'The soil / earth' in French:",
      options: ["La terre", "La pelouse", "Le jardin", "Le sol"],
      correct: "La terre",
      explanation: "La terre (*tair*) = the earth / soil. Also means 'the world'.",
      explanationFr: "La terre = la terre. Signifie aussi 'le monde'."
    },
    {
      id: "3-9",
      type: "qcm",
      question: "'A tree' in French:",
      options: ["Un arbre", "Une plante", "Une fleur", "Un arbuste"],
      correct: "Un arbre",
      explanation: "Un arbre (*an-ARBruh*) = a tree. Les arbres = the trees.",
      explanationFr: "Un arbre = un arbre."
    },
    {
      id: "3-10",
      type: "qcm",
      question: "'To harvest / pick' in French:",
      options: ["Récolter", "Planter", "Arroser", "Désherber"],
      correct: "Récolter",
      explanation: "Récolter (*ray-kol-TAY*) = to harvest / pick. La récolte = the harvest.",
      explanationFr: "Récolter = récolter. La récolte = la récolte."
    }
  ],
  libre: [
    {
      id: "3-l1",
      type: "libre",
      question: "Translate: 'I watered the garden this morning.'",
      correct: "J'ai arrosé le jardin ce matin.",
      alternatives: [],
      explanation: "Passé composé: j'ai + arrosé (past participle of arroser).",
      explanationFr: "Passé composé: j'ai + arrosé (participe passé d'arroser)."
    },
    {
      id: "3-l2",
      type: "libre",
      question: "How do you say 'the vegetable garden'?",
      correct: "le potager",
      alternatives: [],
      explanation: "Le potager is a specifically French institution — kitchen garden.",
      explanationFr: "Le potager est une institution typiquement française — jardin potager."
    },
    {
      id: "3-l3",
      type: "libre",
      question: "What is 'tondre la pelouse'?",
      correct: "to mow the lawn",
      alternatives: ["mow the lawn"],
      explanation: "Tondre = to mow/clip. La pelouse = the lawn.",
      explanationFr: "Tondre = tondre. La pelouse = la pelouse."
    },
    {
      id: "3-l4",
      type: "libre",
      question: "Complete: 'Je dois ___ les mauvaises herbes.'",
      correct: "désherber",
      alternatives: [],
      explanation: "Désherber = to weed. Les mauvaises herbes = weeds (bad herbs).",
      explanationFr: "Désherber = désherber. Les mauvaises herbes = les mauvaises herbes."
    },
    {
      id: "3-l5",
      type: "libre",
      question: "How do you say 'to plant seeds'?",
      correct: "planter des graines",
      alternatives: ["planter les graines"],
      explanation: "Planter = to plant. Des graines = seeds.",
      explanationFr: "Planter = planter. Des graines = des graines."
    },
    {
      id: "3-l6",
      type: "libre",
      question: "Translate: 'The garden is beautiful this year.'",
      correct: "Le jardin est beau cette année.",
      alternatives: [],
      explanation: "Beau (m) / belle (f) = beautiful. Cette année = this year.",
      explanationFr: "Beau (m) / belle (f) = beau/belle. Cette année = cette année."
    },
    {
      id: "3-l7",
      type: "libre",
      question: "How do you say 'It needs watering'?",
      correct: "Il faut arroser.",
      alternatives: ["Ça a besoin d'eau"],
      explanation: "Il faut (*eel foh*) + infinitive = it is necessary to / one must.",
      explanationFr: "Il faut + infinitif = il est nécessaire de."
    },
    {
      id: "3-l8",
      type: "libre",
      question: "What does 'la récolte' mean?",
      correct: "the harvest",
      alternatives: ["harvest"],
      explanation: "La récolte = harvest. Récolter = to harvest.",
      explanationFr: "La récolte = la récolte. Récolter = récolter."
    },
    {
      id: "3-l9",
      type: "libre",
      question: "Translate: 'I need to prune the roses.'",
      correct: "Je dois tailler les rosiers.",
      alternatives: [],
      explanation: "Tailler = to prune. Les rosiers = the rose bushes.",
      explanationFr: "Tailler = tailler. Les rosiers = les rosiers."
    },
    {
      id: "3-l10",
      type: "libre",
      question: "Complete: 'J'ai planté des ___ ce printemps.'",
      correct: "fleurs",
      alternatives: ["légumes", "tomates"],
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