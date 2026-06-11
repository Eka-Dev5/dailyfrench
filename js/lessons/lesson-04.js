// lesson-04.js -- Neighbours & Community
const LESSON_04 = {
  id: 4,
  title: "Neighbours & Community",
  titleFr: "Voisins & Communaute",
  objectiveEn: "Chat with neighbours, ask for information, be sociable",
  objectiveFr: "Discuter avec les voisins, demander des informations, etre sociable",
  hintEn: "Saying bonjour first is obligatory in French social life -- never skip it!",
  hintFr: "Dire bonjour d abord est obligatoire dans la vie sociale francaise -- ne l oubliez jamais !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Meeting your neighbours</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>mon voisin / ma voisine</td><td>my neighbour (m/f)</td></tr>
<tr><td>la mairie</td><td>the town hall</td></tr>
<tr><td>le marche</td><td>the market'accord, je vais afficher tous les fichiers restants (03 à 19) avec `=== FIN FICHIER ===` après chacun. Les accents français sont conservés, seuls les emojis et caractères spéciaux problématiques ont été retirés.

---

## LESSON-03.JS (In the Garden)

```javascript
// lesson-03.js -- In the Garden
const LESSON_03 = {
  id: 3,
  title: "In the Garden",
  titleFr: "Dans le jardin",
  objectiveEn: "Talk about garden tasks and plants",
  objectiveFr: "Parler des taches de jardinage et des plantes",
  hintEn: "Garden chat is great for connecting with French neighbours!",
  hintFr: "Parler jardinage est excellent pour se lier avec les voisins francais !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Garden vocabulary</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>le jardin</td><td><em>*le zhar-DAN*</em></td><td>the garden</td></tr>
<tr><td>arroser</td><td><em>*a-ro-ZAY*</em></td><td>to water</td></tr>
<tr><td>tondre la pelouse</td><td><em>*tondre la pe-LOOZ*</em></td><td>to mow the lawn</td></tr>
<tr><td>planter</td><td><em>*plan-TAY*</em></td><td>to plant</td></tr>
<tr><td>desherber</td><td><em>*day-zair-BAY*</em></td><td>to weed</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Flowers & plants</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>une fleur / les fleurs</td><td>a flower / flowers</td></tr>
<tr><td>un legume</td><td>a vegetable</td></tr>
<tr><td>un arbre</td><td>a tree</td></tr>
<tr><td>la terre</td><td>the soil / earth</td></tr>
</table>
</div>
<div class="lesson-example">
<strong>Exemple :</strong> J arrose le jardin ce matin. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I water the garden this morning.</span>
</div>
  `,
  qcm: [
    {
      id: "03-1",
      type: "qcm",
      question: "To water the garden in French:",
      questionFr: "Arroser le jardin en anglais :",
      options: ["Arroser le jardin","Faire le jardin","Nettoyer le jardin","Planter le jardin"],
      optionsEn: ["To water the garden","To do the garden","To clean the garden","To plant the garden"],
      correct: "Arroser le jardin",
      correctEn: "To water the garden",
      explanation: "Arroser (a-ro-ZAY) = to water. Je dois arroser = I need to water.",
      explanationFr: "Arroser = arroser. Je dois arroser = je dois arroser."
    },
    {
      id: "03-2",
      type: "qcm",
      question: "To mow the lawn in French:",
      questionFr: "Tondre la pelouse en anglais :",
      options: ["Tondre la pelouse","Couper la pelouse","Faire la pelouse","Arroser la pelouse"],
      optionsEn: ["To mow the lawn","To cut the lawn","To do the lawn","To water the lawn"],
      correct: "Tondre la pelouse",
      correctEn: "To mow the lawn",
      explanation: "Tondre la pelouse (tondre) = to mow the lawn. La pelouse = the lawn.",
      explanationFr: "Tondre la pelouse = tondre la pelouse. La pelouse = la pelouse."
    },
    {
      id: "03-3",
      type: "qcm",
      question: "What is une fleur in English?",
      questionFr: "Que signifie une fleur en anglais ?",
      options: ["A flower","A leaf","A tree","A vegetable"],
      optionsEn: ["A flower","A leaf","A tree","A vegetable"],
      correct: "A flower",
      correctEn: "A flower",
      explanation: "Une fleur (flerr) = a flower. Les fleurs = the flowers.",
      explanationFr: "Une fleur = une fleur. Les fleurs = les fleurs."
    },
    {
      id: "03-4",
      type: "qcm",
      question: "To weed in French:",
      questionFr: "Desherber en anglais :",
      options: ["Desherber","Arroser","Planter","Tailler"],
      optionsEn: ["To weed","To water","To plant","To prune"],
      correct: "Desherber",
      correctEn: "To weed",
      explanation: "Desherber (day-zair-BAY) = to weed. Les mauvaises herbes = weeds.",
      explanationFr: "Desherber = desherber. Les mauvaises herbes = les mauvaises herbes."
    },
    {
      id: "03-5",
      type: "qcm",
      question: "The vegetable garden in French:",
      questionFr: "Le potager en anglais :",
      options: ["Le potager","Le jardin","Le verger","La pelouse"],
      optionsEn: ["The vegetable garden","The garden","The orchard","The lawn"],
      correct: "Le potager",
      correctEn: "The vegetable garden",
      explanation: "Le potager (poh-ta-ZHAY) = vegetable garden. Very common in France!",
      explanationFr: "Le potager = le potager. Tres courant en France !"
    },
    {
      id: "03-6",
      type: "qcm",
      question: "To prune / trim in French:",
      questionFr: "Tailler en anglais :",
      options: ["Tailler","Planter","Arroser","Recolter"],
      optionsEn: ["To prune/trim","To plant","To water","To harvest"],
      correct: "Tailler",
      correctEn: "To prune / trim",
      explanation: "Tailler (tie-YAY) = to prune, trim or cut back plants.",
      explanationFr: "Tailler = tailler. Tailler ou couper les plantes."
    },
    {
      id: "03-7",
      type: "qcm",
      question: "I need to water the flowers in French:",
      questionFr: "Je dois arroser les fleurs en anglais :",
      options: ["Je dois arroser les fleurs.","Je fais les fleurs.","Les fleurs ont soif.","J arrose demain."],
      optionsEn: ["I need to water the flowers.","I do the flowers.","The flowers are thirsty.","I water tomorrow."],
      correct: "Je dois arroser les fleurs.",
      correctEn: "I need to water the flowers.",
      explanation: "Je dois (zhuh DWAH) = I must / I need to. Followed by infinitive.",
      explanationFr: "Je dois = je dois. Suivi de l infinitif."
    },
    {
      id: "03-8",
      type: "qcm",
      question: "The soil / earth in French:",
      questionFr: "La terre en anglais :",
      options: ["La terre","La pelouse","Le jardin","Le sol"],
      optionsEn: ["The soil/earth","The lawn","The garden","The ground"],
      correct: "La terre",
      correctEn: "The soil / earth",
      explanation: "La terre (tair) = the earth / soil. Also means the world.",
      explanationFr: "La terre = la terre. Signifie aussi le monde."
    },
    {
      id: "03-9",
      type: "qcm",
      question: "A tree in French:",
      questionFr: "Un arbre en anglais :",
      options: ["Un arbre","Une plante","Une fleur","Un arbuste"],
      optionsEn: ["A tree","A plant","A flower","A shrub"],
      correct: "Un arbre",
      correctEn: "A tree",
      explanation: "Un arbre (an-ARBruh) = a tree. Les arbres = the trees.",
      explanationFr: "Un arbre = un arbre. Les arbres = les arbres."
    },
    {
      id: "03-10",
      type: "qcm",
      question: "To harvest / pick in French:",
      questionFr: "Recolter en anglais :",
      options: ["Recolter","Planter","Arroser","Desherber"],
      optionsEn: ["To harvest/pick","To plant","To water","To weed"],
      correct: "Recolter",
      correctEn: "To harvest / pick",
      explanation: "Recolter (ray-kol-TAY) = to harvest / pick. La recolte = the harvest.",
      explanationFr: "Recolter = recolter. La recolte = la recolte."
    }
  ],
  libre: [
    {
      id: "03-l1",
      type: "libre",
      question: "Translate: I watered the garden this morning.",
      questionFr: "Traduisez : J ai arrose le jardin ce matin.",
      correct: "J ai arrose le jardin ce matin.",
      correctEn: "I watered the garden this morning.",
      alternatives: [],
      explanation: "Passe compose: j ai + arose (past participle of arroser).",
      explanationFr: "Passe compose: j ai + arose (participe passe d arroser)."
    },
    {
      id: "03-l2",
      type: "libre",
      question: "How do you say the vegetable garden?",
      questionFr: "Comment dit-on le potager ?",
      correct: "le potager",
      correctEn: "the vegetable garden",
      alternatives: [],
      explanation: "Le potager is a specifically French institution -- kitchen garden.",
      explanationFr: "Le potager est une institution specifiquement francaise -- le jardin potager."
    },
    {
      id: "03-l3",
      type: "libre",
      question: "What is tondre la pelouse?",
      questionFr: "Que signifie tondre la pelouse ?",
      correct: "to mow the lawn",
      correctEn: "to mow the lawn",
      alternatives: ["mow the lawn"],
      explanation: "Tondre = to mow/clip. La pelouse = the lawn.",
      explanationFr: "Tondre = tondre. La pelouse = la pelouse."
    },
    {
      id: "03-l4",
      type: "libre",
      question: "Complete: Je dois ___ les mauvaises herbes.",
      questionFr: "Completez : Je dois ___ les mauvaises herbes.",
      correct: "desherber",
      correctEn: "weed",
      alternatives: [],
      explanation: "Desherber = to weed. Les mauvaises herbes = weeds (bad herbs).",
      explanationFr: "Desherber = desherber. Les mauvaises herbes = les mauvaises herbes."
    },
    {
      id: "03-l5",
      type: "libre",
      question: "How do you say to plant seeds?",
      questionFr: "Comment dit-on planter des graines ?",
      correct: "planter des graines",
      correctEn: "to plant seeds",
      alternatives: ["planter les graines"],
      explanation: "Planter = to plant. Des graines = seeds.",
      explanationFr: "Planter = planter. Des graines = des graines."
    },
    {
      id: "03-l6",
      type: "libre",
      question: "Translate: The garden is beautiful this year.",
      questionFr: "Traduisez : Le jardin est beau cette annee.",
      correct: "Le jardin est beau cette annee.",
      correctEn: "The garden is beautiful this year.",
      alternatives: [],
      explanation: "Beau (m) / belle (f) = beautiful. Cette annee = this year.",
      explanationFr: "Beau (m) / belle (f) = beau. Cette annee = cette annee."
    },
    {
      id: "03-l7",
      type: "libre",
      question: "How do you say It needs watering?",
      questionFr: "Comment dit-on Il faut arroser ?",
      correct: "Il faut arroser.",
      correctEn: "It needs watering.",
      alternatives: ["Ca a besoin d eau"],
      explanation: "Il faut (eel foh) + infinitive = it is necessary to / one must.",
      explanationFr: "Il faut + infinitif = il faut / il est necessaire de."
    },
    {
      id: "03-l8",
      type: "libre",
      question: "What does la recolte mean?",
      questionFr: "Que signifie la recolte ?",
      correct: "the harvest",
      correctEn: "the harvest",
      alternatives: ["harvest"],
      explanation: "La recolte = harvest. Recolter = to harvest.",
      explanationFr: "La recolte = la recolte. Recolter = recolter."
    },
    {
      id: "03-l9",
      type: "libre",
      question: "Translate: I need to prune the roses.",
      questionFr: "Traduisez : Je dois tailler les rosiers.",
      correct: "Je dois tailler les rosiers.",
      correctEn: "I need to prune the roses.",
      alternatives: [],
      explanation: "Tailler = to prune. Les rosiers = the rose bushes.",
      explanationFr: "Tailler = tailler. Les rosiers = les rosiers."
    },
    {
      id: "03-l10",
      type: "libre",
      question: "Complete: J ai plante des ___ ce printemps.",
      questionFr: "Completez : J ai plante des ___ ce printemps.",
      correct: "fleurs",
      correctEn: "flowers",
      alternatives: ["legumes","tomates"],
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
