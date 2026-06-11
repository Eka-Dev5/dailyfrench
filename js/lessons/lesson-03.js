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
<h4>🌿 Garden vocabulary</h4>
<table class="lesson-table">
<thead>
<tr><th>French</th><th>English</th></tr>
</thead>
<tbody>
<tr><td>arroser</td><td>to water</td></tr>
<tr><td>tondre la pelouse</td><td>to mow the lawn</td></tr>
<tr><td>une fleur</td><td>a flower</td></tr>
<tr><td>désherber</td><td>to weed</td></tr>
<tr><td>le potager</td><td>the vegetable garden</td></tr>
<tr><td>tailler</td><td>to prune</td></tr>
<tr><td>la terre</td><td>the soil / earth</td></tr>
<tr><td>un arbre</td><td>a tree</td></tr>
<tr><td>récolter</td><td>to harvest</td></tr>
</tbody>
</table>
</div>
`,
  qcm: [
    {
      id: "3-1",
      type: "qcm",
      question: "'To water the garden' in French:",
      questionFr: "Comment dit-on 'Arroser le jardin' ?",
      options: ["Arroser le jardin", "Faire le jardin", "Nettoyer le jardin", "Planter le jardin"],
      optionsEn: ["To water the garden", "To do the garden", "To clean the garden", "To plant the garden"],
      correct: "Arroser le jardin",
      correctEn: "To water the garden",
      explanation: "Arroser = to water.",
      explanationFr: "Arroser = arroser."
    },
    {
      id: "3-2",
      type: "qcm",
      question: "'To mow the lawn' in French:",
      questionFr: "Comment dit-on 'Tondre la pelouse' ?",
      options: ["Tondre la pelouse", "Couper la pelouse", "Faire la pelouse", "Arroser la pelouse"],
      optionsEn: ["To mow the lawn", "To cut the lawn", "To do the lawn", "To water the lawn"],
      correct: "Tondre la pelouse",
      correctEn: "To mow the lawn",
      explanation: "Tondre la pelouse = to mow the lawn.",
      explanationFr: "Tondre la pelouse = tondre la pelouse."
    },
    {
      id: "3-3",
      type: "qcm",
      question: "What is 'une fleur' in English?",
      questionFr: "Que signifie 'une fleur' en anglais ?",
      options: ["A flower", "A leaf", "A tree", "A vegetable"],
      optionsEn: ["A flower", "A leaf", "A tree", "A vegetable"],
      correct: "A flower",
      correctEn: "A flower",
      explanation: "Une fleur = a flower.",
      explanationFr: "Une fleur = une fleur."
    },
    {
      id: "3-4",
      type: "qcm",
      question: "'To weed' in French:",
      questionFr: "Comment dit-on 'Désherber' ?",
      options: ["Désherber", "Arroser", "Planter", "Tailler"],
      optionsEn: ["To weed", "To water", "To plant", "To prune"],
      correct: "Désherber",
      correctEn: "To weed",
      explanation: "Désherber = to weed.",
      explanationFr: "Désherber = désherber."
    },
    {
      id: "3-5",
      type: "qcm",
      question: "'The vegetable garden' in French:",
      questionFr: "Comment dit-on 'Le potager' ?",
      options: ["Le potager", "Le jardin", "Le verger", "La pelouse"],
      optionsEn: ["The vegetable garden", "The garden", "The orchard", "The lawn"],
      correct: "Le potager",
      correctEn: "The vegetable garden",
      explanation: "Le potager = vegetable garden.",
      explanationFr: "Le potager = le potager."
    },
    {
      id: "3-6",
      type: "qcm",
      question: "'To prune / trim' in French:",
      questionFr: "Comment dit-on 'Tailler' ?",
      options: ["Tailler", "Planter", "Arroser", "Récolter"],
      optionsEn: ["To prune", "To plant", "To water", "To harvest"],
      correct: "Tailler",
      correctEn: "To prune",
      explanation: "Tailler = to prune.",
      explanationFr: "Tailler = tailler."
    },
    {
      id: "3-7",
      type: "qcm",
      question: "I need to water the flowers.",
      questionFr: "Traduisez : 'Je dois arroser les fleurs.'",
      options: ["Je dois arroser les fleurs.", "Je fais les fleurs.", "Les fleurs ont soif.", "J'arrose demain."],
      optionsEn: ["I need to water the flowers.", "I do the flowers.", "The flowers are thirsty.", "I water tomorrow."],
      correct: "Je dois arroser les fleurs.",
      correctEn: "I need to water the flowers.",
      explanation: "Je dois = I must.",
      explanationFr: "Je dois = je dois."
    },
    {
      id: "3-8",
      type: "qcm",
      question: "'The soil / earth' in French:",
      questionFr: "Comment dit-on 'La terre' ?",
      options: ["La terre", "La pelouse", "Le jardin", "Le sol"],
      optionsEn: ["The soil/earth", "The lawn", "The garden", "The ground"],
      correct: "La terre",
      correctEn: "The soil/earth",
      explanation: "La terre = the earth/soil.",
      explanationFr: "La terre = la terre."
    },
    {
      id: "3-9",
      type: "qcm",
      question: "'A tree' in French:",
      questionFr: "Comment dit-on 'Un arbre' ?",
      options: ["Un arbre", "Une plante", "Une fleur", "Un arbuste"],
      optionsEn: ["A tree", "A plant", "A flower", "A shrub"],
      correct: "Un arbre",
      correctEn: "A tree",
      explanation: "Un arbre = a tree.",
      explanationFr: "Un arbre = un arbre."
    },
    {
      id: "3-10",
      type: "qcm",
      question: "'To harvest / pick' in French:",
      questionFr: "Comment dit-on 'Récolter' ?",
      options: ["Récolter", "Planter", "Arroser", "Désherber"],
      optionsEn: ["To harvest", "To plant", "To water", "To weed"],
      correct: "Récolter",
      correctEn: "To harvest",
      explanation: "Récolter = to harvest.",
      explanationFr: "Récolter = récolter."
    }
  ],
  libre: [
    {
      id: "3-l1",
      type: "libre",
      question: "Translate: 'I watered the garden this morning.'",
      questionFr: "Traduisez : 'J'ai arrosé le jardin ce matin.'",
      correct: "J'ai arrosé le jardin ce matin.",
      correctEn: "I watered the garden this morning.",
      alternatives: [],
      explanation: "Passé composé: j'ai arrosé.",
      explanationFr: "Passé composé : j'ai arrosé."
    },
    {
      id: "3-l2",
      type: "libre",
      question: "How do you say 'the vegetable garden'?",
      questionFr: "Comment dit-on 'le potager' ?",
      correct: "le potager",
      correctEn: "the vegetable garden",
      alternatives: [],
      explanation: "Le potager = kitchen garden.",
      explanationFr: "Le potager = le potager."
    },
    {
      id: "3-l3",
      type: "libre",
      question: "What is 'tondre la pelouse'?",
      questionFr: "Que signifie 'tondre la pelouse' ?",
      correct: "to mow the lawn",
      correctEn: "to mow the lawn",
      alternatives: ["mow the lawn"],
      explanation: "Tondre = to mow.",
      explanationFr: "Tondre = tondre."
    },
    {
      id: "3-l4",
      type: "libre",
      question: "Complete: 'Je dois ___ les mauvaises herbes.'",
      questionFr: "Complétez : 'Je dois ___ les mauvaises herbes.'",
      correct: "désherber",
      correctEn: "weed",
      alternatives: [],
      explanation: "Désherber = to weed.",
      explanationFr: "Désherber = désherber."
    },
    {
      id: "3-l5",
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
      id: "3-l6",
      type: "libre",
      question: "Translate: 'The garden is beautiful this year.'",
      questionFr: "Traduisez : 'Le jardin est beau cette année.'",
      correct: "Le jardin est beau cette année.",
      correctEn: "The garden is beautiful this year.",
      alternatives: [],
      explanation: "Beau = beautiful.",
      explanationFr: "Beau = beau."
    },
    {
      id: "3-l7",
      type: "libre",
      question: "How do you say 'It needs watering'?",
      questionFr: "Comment dit-on 'Il faut arroser' ?",
      correct: "Il faut arroser.",
      correctEn: "It needs watering.",
      alternatives: ["Ça a besoin d'eau"],
      explanation: "Il faut + infinitive = it is necessary to.",
      explanationFr: "Il faut + infinitif = il est nécessaire de."
    },
    {
      id: "3-l8",
      type: "libre",
      question: "What does 'la récolte' mean?",
      questionFr: "Que signifie 'la récolte' ?",
      correct: "the harvest",
      correctEn: "the harvest",
      alternatives: ["harvest"],
      explanation: "La récolte = harvest.",
      explanationFr: "La récolte = la récolte."
    },
    {
      id: "3-l9",
      type: "libre",
      question: "Translate: 'I need to prune the roses.'",
      questionFr: "Traduisez : 'Je dois tailler les rosiers.'",
      correct: "Je dois tailler les rosiers.",
      correctEn: "I need to prune the roses.",
      alternatives: [],
      explanation: "Tailler = to prune.",
      explanationFr: "Tailler = tailler."
    },
    {
      id: "3-l10",
      type: "libre",
      question: "Complete: 'J'ai planté des ___ ce printemps.'",
      questionFr: "Complétez : 'J'ai planté des ___ ce printemps.'",
      correct: "fleurs",
      correctEn: "flowers",
      alternatives: ["légumes", "tomates"],
      explanation: "Des fleurs = some flowers.",
      explanationFr: "Des fleurs = des fleurs."
    }
  ]
};
if (typeof module !== 'undefined' && module.exports) module.exports = LESSON_03; else window.LESSON_03 = LESSON_03;
