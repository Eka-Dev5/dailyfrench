// lesson-19.js -- My Cooking -- Kitchen verbs
const LESSON_19 = {
  id: 19,
  title: "My Cooking -- Kitchen verbs",
  titleFr: "Ma cuisine -- Verbes de cuisine",
  objectiveEn: "Follow a French recipe, talk about cooking techniques",
  objectiveFr: "Suivre une recette francaise, parler des techniques de cuisine",
  hintEn: "French cooking uses lots of specific verbs -- learn them for recipe conversations!",
  hintFr: "La cuisine francaise utilise beaucoup de verbes specifiques -- apprenez-les pour les conversations sur les recettes !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Essential cooking verbs</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>couper</td><td><em>*koo-PAY*</em></td><td>to cut / chop</td></tr>
<tr><td>melanger</td><td><em>*may-lan-ZHAY*</em></td><td>to mix</td></tr>
<tr><td>faire chauffer</td><td><em>*fair sho-FAY*</em></td><td>to heat up</td></tr>
<tr><td>ajouter</td><td><em>*a-zhoo-TAY*</em></td><td>to add</td></tr>
<tr><td>remuer</td><td><em>*ruh-moo-AY*</em></td><td>to stir</td></tr>
<tr><td>gouter</td><td><em>*goo-TAY*</em></td><td>to taste</td></tr>
<tr><td>servir</td><td><em>*sair-VEER*</em></td><td>to serve</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Recipe language</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>une recette</td><td>a recipe</td></tr>
<tr><td>les ingredients</td><td>the ingredients</td></tr>
<tr><td>faire revenir</td><td>to fry / saute</td></tr>
<tr><td>laisser mijoter</td><td>to let simmer</td></tr>
</table>
</div>
<div class="lesson-example">
Je coupe les legumes, j'ajoute de l'huile et je fais chauffer a feu doux. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I chop the vegetables, add some oil and heat on a low heat.</span>
</div>
  `,
  qcm: [
    {
      id: "19-1",
      type: "qcm",
      question: "To cut / chop in French:",
      questionFr: "Couper en anglais :",
      options: ["Couper","Melanger","Ajouter","Remuer"],
      optionsEn: ["to cut / chop","to mix","to add","to stir"],
      correct: "Couper",
      correctEn: "to cut / chop",
      explanation: "Couper = to cut, chop. Je coupe les legumes = I chop the vegetables.",
      explanationFr: "Couper = couper. Je coupe les legumes = je coupe les legumes."
    },
    {
      id: "19-2",
      type: "qcm",
      question: "To mix in French:",
      questionFr: "Melanger en anglais :",
      options: ["Melanger","Couper","Ajouter","Faire chauffer"],
      optionsEn: ["to mix","to cut","to add","to heat up"],
      correct: "Melanger",
      correctEn: "to mix",
      explanation: "Melanger = to mix. Melangez bien = mix well.",
      explanationFr: "Melanger = melanger. Melangez bien = melangez bien."
    },
    {
      id: "19-3",
      type: "qcm",
      question: "To heat up in French:",
      questionFr: "Faire chauffer en anglais :",
      options: ["Faire chauffer","Melanger","Ajouter","Remuer"],
      optionsEn: ["to heat up","to mix","to add","to stir"],
      correct: "Faire chauffer",
      correctEn: "to heat up",
      explanation: "Faire chauffer = to heat up. Faites chauffer l'huile = heat up the oil.",
      explanationFr: "Faire chauffer = faire chauffer. Faites chauffer l'huile = faites chauffer l'huile."
    },
    {
      id: "19-4",
      type: "qcm",
      question: "To add in French:",
      questionFr: "Ajouter en anglais :",
      options: ["Ajouter","Couper","Servir","Gouter"],
      optionsEn: ["to add","to cut","to serve","to taste"],
      correct: "Ajouter",
      correctEn: "to add",
      explanation: "Ajouter = to add. Ajoutez le sel = add the salt.",
      explanationFr: "Ajouter = ajouter. Ajoutez le sel = ajoutez le sel."
    },
    {
      id: "19-5",
      type: "qcm",
      question: "To taste in French:",
      questionFr: "Gouter en anglais :",
      options: ["Gouter","Ajouter","Remuer","Servir"],
      optionsEn: ["to taste","to add","to stir","to serve"],
      correct: "Gouter",
      correctEn: "to taste",
      explanation: "Gouter = to taste. Goutez et ajustez l'assaisonnement = taste and adjust the seasoning.",
      explanationFr: "Gouter = gouter. Goutez et ajustez = goutez et ajustez."
    },
    {
      id: "19-6",
      type: "qcm",
      question: "To serve in French:",
      questionFr: "Servir en anglais :",
      options: ["Servir","Couper","Remuer","Preparer"],
      optionsEn: ["to serve","to cut","to stir","to prepare"],
      correct: "Servir",
      correctEn: "to serve",
      explanation: "Servir = to serve. Servez chaud = serve hot.",
      explanationFr: "Servir = servir. Servez chaud = servez chaud."
    },
    {
      id: "19-7",
      type: "qcm",
      question: "A recipe in French:",
      questionFr: "Une recette en anglais :",
      options: ["Une recette","Un recette","Une recipe","Un recit"],
      optionsEn: ["a recipe","a recipe","a recipe","a story"],
      correct: "Une recette",
      correctEn: "a recipe",
      explanation: "Une recette = a recipe. Les recettes = the recipes.",
      explanationFr: "Une recette = une recette. Les recettes = les recettes."
    },
    {
      id: "19-8",
      type: "qcm",
      question: "To stir in French:",
      questionFr: "Remuer en anglais :",
      options: ["Remuer","Couper","Ajouter","Faire cuire"],
      optionsEn: ["to stir","to cut","to add","to cook"],
      correct: "Remuer",
      correctEn: "to stir",
      explanation: "Remuer = to stir. Remuez doucement = stir gently.",
      explanationFr: "Remuer = remuer. Remuez doucement = remuez doucement."
    },
    {
      id: "19-9",
      type: "qcm",
      question: "I chop the vegetables in French:",
      questionFr: "Je coupe les legumes. en anglais :",
      options: ["Je coupe les legumes.","Je melange les legumes.","Je prepare legumes.","Je coupes legumes."],
      optionsEn: ["I chop the vegetables.","I mix the vegetables.","I prepare vegetables.","I chop vegetables."],
      correct: "Je coupe les legumes.",
      correctEn: "I chop the vegetables.",
      explanation: "Je coupe = I chop/cut. Les legumes = the vegetables.",
      explanationFr: "Je coupe = je coupe. Les legumes = les legumes."
    },
    {
      id: "19-10",
      type: "qcm",
      question: "To let simmer in French:",
      questionFr: "Laisser mijoter en anglais :",
      options: ["Laisser mijoter","Faire chauffer","Faire bouillir","Faire cuire"],
      optionsEn: ["to let simmer","to heat up","to boil","to cook"],
      correct: "Laisser mijoter",
      correctEn: "to let simmer",
      explanation: "Laisser mijoter = to let simmer. Laissez mijoter 20 minutes = let simmer 20 minutes.",
      explanationFr: "Laisser mijoter = laisser mijoter. Laissez mijoter 20 minutes = laissez mijoter 20 minutes."
    }
  ],
  libre: [
    {
      id: "19-l1",
      type: "libre",
      question: "Translate: I chop the onions.",
      questionFr: "Traduisez : Je coupe les oignons.",
      correct: "Je coupe les oignons.",
      correctEn: "I chop the onions.",
      alternatives: [],
      explanation: "Couper = to chop/cut. Les oignons = onions.",
      explanationFr: "Couper = couper. Les oignons = les oignons."
    },
    {
      id: "19-l2",
      type: "libre",
      question: "How do you say I mix well?",
      questionFr: "Comment dit-on Je melange bien ?",
      correct: "Je melange bien.",
      correctEn: "I mix well.",
      alternatives: [],
      explanation: "Melanger = to mix. Bien = well.",
      explanationFr: "Melanger = melanger. Bien = bien."
    },
    {
      id: "19-l3",
      type: "libre",
      question: "Translate: Heat up the olive oil.",
      questionFr: "Traduisez : Faites chauffer l'huile d'olive.",
      correct: "Faites chauffer l'huile d'olive.",
      correctEn: "Heat up the olive oil.",
      alternatives: [],
      explanation: "Faire chauffer = to heat up. L'huile d'olive = olive oil.",
      explanationFr: "Faire chauffer = faire chauffer. L'huile d'olive = l'huile d'olive."
    },
    {
      id: "19-l4",
      type: "libre",
      question: "Complete: J'___ du sel et du poivre.",
      questionFr: "Completez : J'___ du sel et du poivre.",
      correct: "ajoute",
      correctEn: "add",
      alternatives: [],
      explanation: "Ajouter = to add. J'ajoute = I add.",
      explanationFr: "Ajouter = ajouter. J'ajoute = j'ajoute."
    },
    {
      id: "19-l5",
      type: "libre",
      question: "How do you say a recipe?",
      questionFr: "Comment dit-on une recette ?",
      correct: "une recette",
      correctEn: "a recipe",
      alternatives: [],
      explanation: "La recette = the recipe. Une recette = a recipe.",
      explanationFr: "La recette = la recette. Une recette = une recette."
    },
    {
      id: "19-l6",
      type: "libre",
      question: "Translate: I stir gently.",
      questionFr: "Traduisez : Je remue doucement.",
      correct: "Je remue doucement.",
      correctEn: "I stir gently.",
      alternatives: [],
      explanation: "Remuer = to stir. Doucement = gently.",
      explanationFr: "Remuer = remuer. Doucement = doucement."
    },
    {
      id: "19-l7",
      type: "libre",
      question: "Complete: Je ___ les legumes avant de les cuire.",
      questionFr: "Completez : Je ___ les legumes avant de les cuire.",
      correct: "coupe",
      correctEn: "chop",
      alternatives: [],
      explanation: "Couper = to cut/chop. Je coupe = I chop.",
      explanationFr: "Couper = couper. Je coupe = je coupe."
    },
    {
      id: "19-l8",
      type: "libre",
      question: "How do you say let simmer for 30 minutes?",
      questionFr: "Comment dit-on Laissez mijoter 30 minutes ?",
      correct: "Laissez mijoter 30 minutes.",
      correctEn: "Let simmer for 30 minutes.",
      alternatives: [],
      explanation: "Laisser mijoter = let simmer. Minutes = minutes.",
      explanationFr: "Laisser mijoter = laisser mijoter. Minutes = minutes."
    },
    {
      id: "19-l9",
      type: "libre",
      question: "Translate: I taste and I add some salt.",
      questionFr: "Traduisez : Je goute et j'ajoute du sel.",
      correct: "Je goute et j'ajoute du sel.",
      correctEn: "I taste and I add some salt.",
      alternatives: [],
      explanation: "Gouter = to taste. Ajouter = to add. Du sel = some salt.",
      explanationFr: "Gouter = gouter. Ajouter = ajouter. Du sel = du sel."
    },
    {
      id: "19-l10",
      type: "libre",
      question: "How do you say serve hot?",
      questionFr: "Comment dit-on Servez chaud ?",
      correct: "Servez chaud.",
      correctEn: "Serve hot.",
      alternatives: [],
      explanation: "Servir = to serve. Chaud = hot.",
      explanationFr: "Servir = servir. Chaud = chaud."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_19;
} else {
  window.LESSON_19 = LESSON_19;
}
