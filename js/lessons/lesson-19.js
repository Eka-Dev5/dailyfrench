// lesson-19.js -- Cooking & Recipes
const LESSON_19 = {
  id: 19,
  title: "Cooking & Recipes",
  titleFr: "Cuisine & Recettes",
  objectiveEn: "Understand cooking instructions, ingredients and kitchen vocabulary",
  objectiveFr: "Comprendre les instructions de cuisine, les ingredients et le vocabulaire de la cuisine",
  hintEn: "French cooking uses precise verbs: faire revenir (brown), laisser mijoter (simmer)...",
  hintFr: "La cuisine francaise utilise des verbes precis : faire revenir, laisser mijoter...",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Cooking verbs</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>couper</td><td><em>*koo-PAY*</em></td><td>to cut <!-- *too kut* --></td></tr>
<tr><td>melanger</td><td><em>*may-lan-ZHAY*</em></td><td>to mix <!-- *too miks* --></td></tr>
<tr><td>faire chauffer</td><td><em>*fair sho-FAY*</em></td><td>to heat up <!-- *too heet up* --></td></tr>
<tr><td>ajouter</td><td><em>*a-zhoo-TAY*</em></td><td>to add <!-- *too ad* --></td></tr>
<tr><td>remuer</td><td><em>*ruh-moo-AY*</em></td><td>to stir <!-- *too stur* --></td></tr>
<tr><td>gouter</td><td><em>*goo-TAY*</em></td><td>to taste <!-- *too tayst* --></td></tr>
<tr><td>servir</td><td><em>*sair-VEER*</em></td><td>to serve <!-- *too surv* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Recipe terms</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>une recette</td><td><em>*oon ruh-SET*</em></td><td>a recipe <!-- *uh RES-i-pee* --></td></tr>
<tr><td>les ingredients</td><td><em>*lay zan-gree-DYON*</em></td><td>the ingredients <!-- *thuh in-GREE-dee-unts* --></td></tr>
<tr><td>faire revenir</td><td><em>*fair ruh-vuh-NEER*</em></td><td>to brown / saute <!-- *too brown / soh-TAY* --></td></tr>
<tr><td>laisser mijoter</td><td><em>*lay-say mee-zhoh-TAY*</em></td><td>to simmer <!-- *too SIM-ur* --></td></tr>
</table>
</div>
<div class="lesson-warning">In French recipes, <strong>faire revenir</strong> means to brown onions/meat in fat. <strong>Laisser mijoter</strong> means to cook gently on low heat.</div>
<div class="lesson-example">
-- Qu'est-ce que tu cuisines ce soir ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">What are you cooking this evening?</span><br>
-- Je fais une quiche. J'ai coupe les legumes et je melange les œufs. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I am making a quiche. I have cut the vegetables and I am mixing the eggs.</span>
</div>
  `,
  qcm: [
    {
      id: "19-1",
      type: "qcm",
      question: "To cut in French:",
      questionFr: "Couper en anglais :",
      options: ["couper","coupe","coupant","decouper"],
      optionsEn: ["to cut","cut","cutting","to cut up"],
      correct: "couper",
      correctEn: "to cut",
      explanation: "Couper (koo-PAY) = to cut. Je coupe = I cut.",
      explanationFr: "Couper = couper. Je coupe = je coupe."
    },
    {
      id: "19-2",
      type: "qcm",
      question: "To mix in French:",
      questionFr: "Melanger en anglais :",
      options: ["melanger","mixer","remuer","combiner"],
      optionsEn: ["to mix","to mix (with blender)","to stir","to combine"],
      correct: "melanger",
      correctEn: "to mix",
      explanation: "Melanger (may-lan-ZHAY) = to mix. Je melange = I mix.",
      explanationFr: "Melanger = melanger. Je melange = je melange."
    },
    {
      id: "19-3",
      type: "qcm",
      question: "To heat up in French:",
      questionFr: "Faire chauffer en anglais :",
      options: ["faire chauffer","chauffer","rechauffer","echauffer"],
      optionsEn: ["to heat up","to warm","to reheat","to overheat"],
      correct: "faire chauffer",
      correctEn: "to heat up",
      explanation: "Faire chauffer (fair sho-FAY) = to heat up. Chauffer = to warm.",
      explanationFr: "Faire chauffer = faire chauffer. Chauffer = chauffer."
    },
    {
      id: "19-4",
      type: "qcm",
      question: "To add in French:",
      questionFr: "Ajouter en anglais :",
      options: ["ajouter","additionner","joindre","mettre"],
      optionsEn: ["to add","to add up","to join","to put"],
      correct: "ajouter",
      correctEn: "to add",
      explanation: "Ajouter (a-zhoo-TAY) = to add. J'ajoute = I add.",
      explanationFr: "Ajouter = ajouter. J'ajoute = j'ajoute."
    },
    {
      id: "19-5",
      type: "qcm",
      question: "To stir in French:",
      questionFr: "Remuer en anglais :",
      options: ["remuer","melanger","tourner","bouger"],
      optionsEn: ["to stir","to mix","to turn","to move"],
      correct: "remuer",
      correctEn: "to stir",
      explanation: "Remuer (ruh-moo-AY) = to stir. Je remue = I stir.",
      explanationFr: "Remuer = remuer. Je remue = je remue."
    },
    {
      id: "19-6",
      type: "qcm",
      question: "To taste in French:",
      questionFr: "Gouter en anglais :",
      options: ["gouter","manger","savourer","deguster"],
      optionsEn: ["to taste","to eat","to savour","to taste (gourmet)"],
      correct: "gouter",
      correctEn: "to taste",
      explanation: "Gouter (goo-TAY) = to taste. Je goute = I taste.",
      explanationFr: "Gouter = gouter. Je goute = je goute."
    },
    {
      id: "19-7",
      type: "qcm",
      question: "To serve in French:",
      questionFr: "Servir en anglais :",
      options: ["servir","donner","presenter","apporter"],
      optionsEn: ["to serve","to give","to present","to bring"],
      correct: "servir",
      correctEn: "to serve",
      explanation: "Servir (sair-VEER) = to serve. Je sers = I serve.",
      explanationFr: "Servir = servir. Je sers = je sers."
    },
    {
      id: "19-8",
      type: "qcm",
      question: "A recipe in French:",
      questionFr: "Une recette en anglais :",
      options: ["une recette","une recitation","une reception","une recreation"],
      optionsEn: ["a recipe","a recitation","a reception","a recreation"],
      correct: "une recette",
      correctEn: "a recipe",
      explanation: "Une recette (oon ruh-SET) = a recipe. Also means a prescription (medical)!",
      explanationFr: "Une recette = une recette. Signifie aussi une ordonnance medicale !"
    },
    {
      id: "19-9",
      type: "qcm",
      question: "To brown / saute in French:",
      questionFr: "Faire revenir en anglais :",
      options: ["faire revenir","brunir","sauter","griller"],
      optionsEn: ["to brown / saute","to brown","to jump","to grill"],
      correct: "faire revenir",
      correctEn: "to brown / saute",
      explanation: "Faire revenir (fair ruh-vuh-NEER) = to brown/saute. Very common in French cooking!",
      explanationFr: "Faire revenir = faire revenir. Tres courant en cuisine francaise !"
    },
    {
      id: "19-10",
      type: "qcm",
      question: "To simmer in French:",
      questionFr: "Laisser mijoter en anglais :",
      options: ["laisser mijoter","bouillir","cuire","chauffer"],
      optionsEn: ["to simmer","to boil","to cook","to heat"],
      correct: "laisser mijoter",
      correctEn: "to simmer",
      explanation: "Laisser mijoter (lay-say mee-zhoh-TAY) = to simmer. Mijoter = to simmer gently.",
      explanationFr: "Laisser mijoter = laisser mijoter. Mijoter = mijoter doucement."
    }
  ],
  libre: [
    {
      id: "19-l1",
      type: "libre",
      question: "Translate: I cut the vegetables.",
      questionFr: "Traduisez : J'ai coupe les legumes.",
      correct: "J'ai coupe les legumes.",
      correctEn: "I cut the vegetables.",
      alternatives: [],
      explanation: "J'ai coupe = I cut. Les legumes = the vegetables.",
      explanationFr: "J'ai coupe = j'ai coupe. Les legumes = les legumes."
    },
    {
      id: "19-l2",
      type: "libre",
      question: "How do you say to mix?",
      questionFr: "Comment dit-on melanger ?",
      correct: "melanger",
      correctEn: "to mix",
      alternatives: [],
      explanation: "Melanger = to mix. Je melange = I mix.",
      explanationFr: "Melanger = melanger. Je melange = je melange."
    },
    {
      id: "19-l3",
      type: "libre",
      question: "Translate: I add the salt.",
      questionFr: "Traduisez : J'ajoute le sel.",
      correct: "J'ajoute le sel.",
      correctEn: "I add the salt.",
      alternatives: [],
      explanation: "J'ajoute = I add. Le sel = the salt.",
      explanationFr: "J'ajoute = j'ajoute. Le sel = le sel."
    },
    {
      id: "19-l4",
      type: "libre",
      question: "Complete: Je ___ les œufs.",
      questionFr: "Completez : Je ___ les œufs.",
      correct: "remue",
      correctEn: "stir",
      alternatives: ["melange"],
      explanation: "Je remue = I stir. Je melange = I mix.",
      explanationFr: "Je remue = je remue. Je melange = je melange."
    },
    {
      id: "19-l5",
      type: "libre",
      question: "How do you say to taste?",
      questionFr: "Comment dit-on gouter ?",
      correct: "gouter",
      correctEn: "to taste",
      alternatives: [],
      explanation: "Gouter = to taste. Je goute = I taste.",
      explanationFr: "Gouter = gouter. Je goute = je goute."
    },
    {
      id: "19-l6",
      type: "libre",
      question: "Translate: I serve the dinner.",
      questionFr: "Traduisez : Je sers le diner.",
      correct: "Je sers le diner.",
      correctEn: "I serve the dinner.",
      alternatives: [],
      explanation: "Je sers = I serve. Le diner = the dinner.",
      explanationFr: "Je sers = je sers. Le diner = le diner."
    },
    {
      id: "19-l7",
      type: "libre",
      question: "Complete: J'ai besoin d'une ___.",
      questionFr: "Completez : J'ai besoin d'une ___.",
      correct: "recette",
      correctEn: "recipe",
      alternatives: [],
      explanation: "Une recette = a recipe. J'ai besoin de = I need.",
      explanationFr: "Une recette = une recette. J'ai besoin de = j'ai besoin de."
    },
    {
      id: "19-l8",
      type: "libre",
      question: "How do you say to simmer?",
      questionFr: "Comment dit-on laisser mijoter ?",
      correct: "laisser mijoter",
      correctEn: "to simmer",
      alternatives: [],
      explanation: "Laisser mijoter = to simmer. Mijoter = to simmer gently.",
      explanationFr: "Laisser mijoter = laisser mijoter. Mijoter = mijoter doucement."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_19;
} else {
  window.LESSON_19 = LESSON_19;
}
