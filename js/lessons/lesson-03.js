// lesson-03.js -- In the Garden
const LESSON_03 = {
  id: 3,
  title: "In the Garden",
  titleFr: "Dans le jardin",
  objectiveEn: "Talk about garden tasks and plants",
  objectiveFr: "Parler des taches de jardinage et des plantes",
  hintEn: "Use the definite article (le/la/les) with plants -- le rosier, la tulipe!",
  hintFr: "Utilisez l'article defini (le/la/les) avec les plantes -- le rosier, la tulipe !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Garden tasks</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>le jardin</td><td><em>*luh zhar-DAN*</em></td><td>the garden <!-- *thuh GAR-den* --></td></tr>
<tr><td>arroser</td><td><em>*a-ro-ZAY*</em></td><td>to water <!-- *too WAH-ter* --></td></tr>
<tr><td>tondre la pelouse</td><td><em>*tondre la pe-LOOZ*</em></td><td>to mow the lawn <!-- *too moh thuh lon* --></td></tr>
<tr><td>planter</td><td><em>*plan-TAY*</em></td><td>to plant <!-- *too plant* --></td></tr>
<tr><td>desherber</td><td><em>*day-zair-BAY*</em></td><td>to weed <!-- *too weed* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Plants & flowers</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>une fleur / les fleurs</td><td><em>*oon flerr / lay flerr*</em></td><td>a flower / the flowers <!-- *uh FLOW-er / thuh FLOW-erz* --></td></tr>
<tr><td>un legume</td><td><em>*uhn lay-GOOM*</em></td><td>a vegetable <!-- *uh VEJ-tuh-bul* --></td></tr>
<tr><td>un arbre</td><td><em>*uhn AR-bruh*</em></td><td>a tree <!-- *uh tree* --></td></tr>
<tr><td>la terre</td><td><em>*la tair*</em></td><td>the soil / earth <!-- *thuh soil / urth* --></td></tr>
</table>
</div>
<div class="lesson-warning">In French, use <strong>le/la/les</strong> with plants: <em>le rosier</em> (the rose bush), <em>la tulipe</em> (the tulip).</div>
<div class="lesson-example">
Je tonds la pelouse et j'arrose les fleurs. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I mow the lawn and water the flowers.</span>
</div>
  `,
  qcm: [
    {
      id: "03-1",
      type: "qcm",
      question: "The garden in French:",
      questionFr: "Le jardin en anglais :",
      options: ["Le jardin","La jardin","Un jardin","Les jardin"],
      optionsEn: ["The garden","The garden","A garden","The gardens"],
      correct: "Le jardin",
      correctEn: "The garden",
      explanation: "Le jardin (luh zhar-DAN) = the garden. Jardin is masculine.",
      explanationFr: "Le jardin = le jardin. Jardin est masculin."
    },
    {
      id: "03-2",
      type: "qcm",
      question: "To water in French:",
      questionFr: "Arroser en anglais :",
      options: ["Arroser","Tondre","Planter","Desherber"],
      optionsEn: ["to water","to mow","to plant","to weed"],
      correct: "Arroser",
      correctEn: "to water",
      explanation: "Arroser (a-ro-ZAY) = to water. J'arrose = I water.",
      explanationFr: "Arroser = arroser. J'arrose = j'arrose."
    },
    {
      id: "03-3",
      type: "qcm",
      question: "To mow the lawn in French:",
      questionFr: "Tondre la pelouse en anglais :",
      options: ["Tondre la pelouse","Couper la pelouse","Arroser la pelouse","Planter la pelouse"],
      optionsEn: ["To mow the lawn","To cut the lawn","To water the lawn","To plant the lawn"],
      correct: "Tondre la pelouse",
      correctEn: "To mow the lawn",
      explanation: "Tondre (tondre) = to mow / cut (grass). La pelouse = the lawn.",
      explanationFr: "Tondre = tondre. La pelouse = la pelouse."
    },
    {
      id: "03-4",
      type: "qcm",
      question: "A flower in French:",
      questionFr: "Une fleur en anglais :",
      options: ["Une fleur","Un fleur","La fleur","Les fleur"],
      optionsEn: ["A flower","A flower","The flower","The flowers"],
      correct: "Une fleur",
      correctEn: "A flower",
      explanation: "Une fleur (oon flerr) = a flower. Fleur is feminine.",
      explanationFr: "Une fleur = une fleur. Fleur est feminin."
    },
    {
      id: "03-5",
      type: "qcm",
      question: "To plant in French:",
      questionFr: "Planter en anglais :",
      options: ["Planter","Arroser","Tondre","Desherber"],
      optionsEn: ["to plant","to water","to mow","to weed"],
      correct: "Planter",
      correctEn: "to plant",
      explanation: "Planter (plan-TAY) = to plant. Je plante = I plant.",
      explanationFr: "Planter = planter. Je plante = je plante."
    },
    {
      id: "03-6",
      type: "qcm",
      question: "A vegetable in French:",
      questionFr: "Un legume en anglais :",
      options: ["Un legume","Une legume","Le legume","Les legume"],
      optionsEn: ["A vegetable","A vegetable","The vegetable","The vegetables"],
      correct: "Un legume",
      correctEn: "A vegetable",
      explanation: "Un legume (uhn lay-GOOM) = a vegetable. Legume is masculine.",
      explanationFr: "Un legume = un legume. Legume est masculin."
    },
    {
      id: "03-7",
      type: "qcm",
      question: "To weed in French:",
      questionFr: "Desherber en anglais :",
      options: ["Desherber","Arroser","Tondre","Couper"],
      optionsEn: ["to weed","to water","to mow","to cut"],
      correct: "Desherber",
      correctEn: "to weed",
      explanation: "Desherber (day-zair-BAY) = to weed. Je desherbe = I weed.",
      explanationFr: "Desherber = desherber. Je desherbe = je desherbe."
    },
    {
      id: "03-8",
      type: "qcm",
      question: "A tree in French:",
      questionFr: "Un arbre en anglais :",
      options: ["Un arbre","Une arbre","L'arbre","Les arbre"],
      optionsEn: ["A tree","A tree","The tree","The trees"],
      correct: "Un arbre",
      correctEn: "A tree",
      explanation: "Un arbre (uhn AR-bruh) = a tree. Arbre is masculine.",
      explanationFr: "Un arbre = un arbre. Arbre est masculin."
    },
    {
      id: "03-9",
      type: "qcm",
      question: "The soil in French:",
      questionFr: "La terre en anglais :",
      options: ["La terre","Le terre","Une terre","Les terre"],
      optionsEn: ["The soil","The soil","A soil","The soils"],
      correct: "La terre",
      correctEn: "The soil",
      explanation: "La terre (la tair) = the soil / earth / ground. Terre is feminine.",
      explanationFr: "La terre = la terre. Terre est feminin."
    },
    {
      id: "03-10",
      type: "qcm",
      question: "I water the flowers in French:",
      questionFr: "J'arrose les fleurs. en anglais :",
      options: ["J'arrose les fleurs.","Je tonds les fleurs.","Je plante les fleurs.","Je coupe les fleurs."],
      optionsEn: ["I water the flowers.","I mow the flowers.","I plant the flowers.","I cut the flowers."],
      correct: "J'arrose les fleurs.",
      correctEn: "I water the flowers.",
      explanation: "J'arrose (zha-roz) = I water. Les fleurs = the flowers.",
      explanationFr: "J'arrose = j'arrose. Les fleurs = les fleurs."
    }
  ],
  libre: [
    {
      id: "03-l1",
      type: "libre",
      question: "Translate: I mow the lawn.",
      questionFr: "Traduisez : Je tonds la pelouse.",
      correct: "Je tonds la pelouse.",
      correctEn: "I mow the lawn.",
      alternatives: [],
      explanation: "Tondre = to mow. La pelouse = the lawn.",
      explanationFr: "Tondre = tondre. La pelouse = la pelouse."
    },
    {
      id: "03-l2",
      type: "libre",
      question: "How do you say I plant a tree?",
      questionFr: "Comment dit-on Je plante un arbre ?",
      correct: "Je plante un arbre.",
      correctEn: "I plant a tree.",
      alternatives: [],
      explanation: "Planter = to plant. Un arbre = a tree.",
      explanationFr: "Planter = planter. Un arbre = un arbre."
    },
    {
      id: "03-l3",
      type: "libre",
      question: "Translate: The flowers are beautiful.",
      questionFr: "Traduisez : Les fleurs sont belles.",
      correct: "Les fleurs sont belles.",
      correctEn: "The flowers are beautiful.",
      alternatives: [],
      explanation: "Les fleurs = the flowers. Sont belles = are beautiful.",
      explanationFr: "Les fleurs = les fleurs. Sont belles = sont belles."
    },
    {
      id: "03-l4",
      type: "libre",
      question: "Complete: J'___ la pelouse tous les samedis.",
      questionFr: "Completez : J'___ la pelouse tous les samedis.",
      correct: "tonds",
      correctEn: "mow",
      alternatives: [],
      explanation: "Je tonds = I mow. Tondre = to mow.",
      explanationFr: "Je tonds = je tonds. Tondre = tondre."
    },
    {
      id: "03-l5",
      type: "libre",
      question: "How do you say the soil?",
      questionFr: "Comment dit-on la terre ?",
      correct: "la terre",
      correctEn: "the soil",
      alternatives: [],
      explanation: "La terre = the soil / earth / ground.",
      explanationFr: "La terre = la terre / le sol."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_03;
} else {
  window.LESSON_03 = LESSON_03;
}
