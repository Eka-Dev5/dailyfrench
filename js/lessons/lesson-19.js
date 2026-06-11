const LESSON_19 = {
  id: 19,
  title: "My Cooking",
  titleFr: "Ma cuisine",
  objectiveEn: "Follow a French recipe, talk about cooking techniques",
  objectiveFr: "Suivre une recette française, parler des techniques de cuisine",
  hintEn: "French cooking uses lots of specific verbs — learn them for recipe conversations!",
  hintFr: "La cuisine française utilise beaucoup de verbes spécifiques — apprenez-les pour les conversations de recettes !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🍳 Essential cooking verbs</h4>
<table class="lesson-table">
<thead>
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
</thead>
<tbody>
<tr><td>couper</td><td><em>*koo-PAY*</em></td><td>to cut / chop</td></tr>
<tr><td>mélanger</td><td><em>*may-lan-ZHAY*</em></td><td>to mix</td></tr>
<tr><td>faire chauffer</td><td><em>*fair sho-FAY*</em></td><td>to heat up</td></tr>
<tr><td>ajouter</td><td><em>*a-zhoo-TAY*</em></td><td>to add</td></tr>
<tr><td>remuer</td><td><em>*ruh-moo-AY*</em></td><td>to stir</td></tr>
<tr><td>goûter</td><td><em>*goo-TAY*</em></td><td>to taste</td></tr>
<tr><td>servir</td><td><em>*sair-VEER*</em></td><td>to serve</td></tr>
</tbody>
</table>
</div>

<div class="lesson-rule">
<h4>📖 Recipe language</h4>
<table class="lesson-table">
<thead>
<tr><th>French</th><th>English</th></tr>
</thead>
<tbody>
<tr><td>une recette</td><td>a recipe</td></tr>
<tr><td>les ingrédients</td><td>the ingredients</td></tr>
<tr><td>faire revenir</td><td>to fry / sauté</td></tr>
<tr><td>laisser mijoter</td><td>to let simmer</td></tr>
</tbody>
</table>
</div>

<div class="lesson-example">
Je coupe les légumes, j'ajoute de l'huile et je fais chauffer à feu doux.
<button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">I chop the vegetables, add some oil and heat on a low heat.</span>
</div>
  `,
  qcm: [
    {
      id: "19-1",
      type: "qcm",
      question: "'To cut / chop' in French:",
      questionFr: "Comment dit-on 'couper' ?",
      options: ["Couper", "Mélanger", "Ajouter", "Remuer"],
      optionsEn: ["To cut/chop", "To mix", "To add", "To stir"],
      correct: "Couper",
      correctEn: "To cut/chop",
      explanation: "Couper (*koo-PAY*) = to cut, chop. Je coupe les légumes = I chop the vegetables.",
      explanationFr: "Couper = couper. Je coupe les légumes = je coupe les légumes."
    },
    {
      id: "19-2",
      type: "qcm",
      question: "'To mix' in French:",
      questionFr: "Comment dit-on 'mélanger' ?",
      options: ["Mélanger", "Couper", "Ajouter", "Faire chauffer"],
      optionsEn: ["To mix", "To cut", "To add", "To heat"],
      correct: "Mélanger",
      correctEn: "To mix",
      explanation: "Mélanger (*may-lan-ZHAY*) = to mix. Mélangez bien = mix well.",
      explanationFr: "Mélanger = mélanger. Mélangez bien = mélangez bien."
    },
    {
      id: "19-3",
      type: "qcm",
      question: "'To heat up' in French:",
      questionFr: "Comment dit-on 'faire chauffer' ?",
      options: ["Faire chauffer", "Mélanger", "Ajouter", "Remuer"],
      optionsEn: ["To heat up", "To mix", "To add", "To stir"],
      correct: "Faire chauffer",
      correctEn: "To heat up",
      explanation: "Faire chauffer (*fair sho-FAY*) = to heat up. Faites chauffer l'huile = heat up the oil.",
      explanationFr: "Faire chauffer = faire chauffer. Faites chauffer l'huile = faites chauffer l'huile."
    },
    {
      id: "19-4",
      type: "qcm",
      question: "'To add' in French:",
      questionFr: "Comment dit-on 'ajouter' ?",
      options: ["Ajouter", "Couper", "Servir", "Goûter"],
      optionsEn: ["To add", "To cut", "To serve", "To taste"],
      correct: "Ajouter",
      correctEn: "To add",
      explanation: "Ajouter (*a-zhoo-TAY*) = to add. Ajoutez le sel = add the salt.",
      explanationFr: "Ajouter = ajouter. Ajoutez le sel = ajoutez le sel."
    },
    {
      id: "19-5",
      type: "qcm",
      question: "'To taste' in French:",
      questionFr: "Comment dit-on 'goûter' ?",
      options: ["Goûter", "Ajouter", "Remuer", "Servir"],
      optionsEn: ["To taste", "To add", "To stir", "To serve"],
      correct: "Goûter",
      correctEn: "To taste",
      explanation: "Goûter (*goo-TAY*) = to taste. Goûtez et ajustez l'assaisonnement = taste and adjust the seasoning.",
      explanationFr: "Goûter = goûter. Goûtez et ajustez l'assaisonnement = goûtez et ajustez l'assaisonnement."
    },
    {
      id: "19-6",
      type: "qcm",
      question: "'To serve' in French:",
      questionFr: "Comment dit-on 'servir' ?",
      options: ["Servir", "Couper", "Remuer", "Préparer"],
      optionsEn: ["To serve", "To cut", "To stir", "To prepare"],
      correct: "Servir",
      correctEn: "To serve",
      explanation: "Servir (*sair-VEER*) = to serve. Servez chaud = serve hot.",
      explanationFr: "Servir = servir. Servez chaud = servez chaud."
    },
    {
      id: "19-7",
      type: "qcm",
      question: "'A recipe' in French:",
      questionFr: "Comment dit-on 'une recette' ?",
      options: ["Une recette", "Un recette", "Une recipe", "Un recit"],
      optionsEn: ["A recipe (fem)", "A recipe (masc wrong)", "A recipe (English)", "A story"],
      correct: "Une recette",
      correctEn: "A recipe",
      explanation: "Une recette (*ruh-SET*) = a recipe. Les recettes = the recipes.",
      explanationFr: "Une recette = une recette. Les recettes = les recettes."
    },
    {
      id: "19-8",
      type: "qcm",
      question: "'To stir' in French:",
      questionFr: "Comment dit-on 'remuer' ?",
      options: ["Remuer", "Couper", "Ajouter", "Faire cuire"],
      optionsEn: ["To stir", "To cut", "To add", "To cook"],
      correct: "Remuer",
      correctEn: "To stir",
      explanation: "Remuer (*ruh-mue-AY*) = to stir. Remuez doucement = stir gently.",
      explanationFr: "Remuer = remuer. Remuez doucement = remuez doucement."
    },
    {
      id: "19-9",
      type: "qcm",
      question: "'I chop the vegetables' in French:",
      questionFr: "Traduisez : 'Je coupe les légumes.'",
      options: ["Je coupe les légumes.", "Je mélange les légumes.", "Je prépare légumes.", "Je coupes légumes."],
      optionsEn: ["I chop the vegetables.", "I mix the vegetables.", "I prepare vegetables.", "I cut (wrong conjugation) vegetables."],
      correct: "Je coupe les légumes.",
      correctEn: "I chop the vegetables.",
      explanation: "Je coupe = I chop/cut. Les légumes = the vegetables.",
      explanationFr: "Je coupe = je coupe. Les légumes = les légumes."
    },
    {
      id: "19-10",
      type: "qcm",
      question: "'To let simmer' in French:",
      questionFr: "Comment dit-on 'laisser mijoter' ?",
      options: ["Laisser mijoter", "Faire chauffer", "Faire bouillir", "Faire cuire"],
      optionsEn: ["To let simmer", "To heat up", "To boil", "To cook"],
      correct: "Laisser mijoter",
      correctEn: "To let simmer",
      explanation: "Laisser mijoter (*mee-zho-TAY*) = to let simmer. Laissez mijoter 20 minutes = let simmer 20 minutes.",
      explanationFr: "Laisser mijoter = laisser mijoter. Laissez mijoter 20 minutes = laissez mijoter 20 minutes."
    }
  ],
  libre: [
    {
      id: "19-l1",
      type: "libre",
      question: "Translate: 'I chop the onions.'",
      questionFr: "Traduisez : 'Je coupe les oignons.'",
      correct: "Je coupe les oignons.",
      correctEn: "I chop the onions.",
      alternatives: [],
      explanation: "Couper = to chop/cut. Les oignons = onions.",
      explanationFr: "Couper = couper. Les oignons = les oignons."
    },
    {
      id: "19-l2",
      type: "libre",
      question: "How do you say 'I mix well'?",
      questionFr: "Comment dit-on 'Je mélange bien' ?",
      correct: "Je mélange bien.",
      correctEn: "I mix well.",
      alternatives: [],
      explanation: "Mélanger = to mix. Bien = well.",
      explanationFr: "Mélanger = mélanger. Bien = bien."
    },
    {
      id: "19-l3",
      type: "libre",
      question: "Translate: 'Heat up the olive oil.'",
      questionFr: "Traduisez : 'Faites chauffer l'huile d'olive.'",
      correct: "Faites chauffer l'huile d'olive.",
      correctEn: "Heat up the olive oil.",
      alternatives: [],
      explanation: "Faire chauffer = to heat up. L'huile d'olive = olive oil.",
      explanationFr: "Faire chauffer = faire chauffer. L'huile d'olive = l'huile d'olive."
    },
    {
      id: "19-l4",
      type: "libre",
      question: "Complete: 'J'___ du sel et du poivre.'",
      questionFr: "Complétez : 'J'___ du sel et du poivre.'",
      correct: "ajoute",
      correctEn: "add",
      alternatives: [],
      explanation: "Ajouter = to add. J'ajoute = I add.",
      explanationFr: "Ajouter = ajouter. J'ajoute = j'ajoute."
    },
    {
      id: "19-l5",
      type: "libre",
      question: "How do you say 'a recipe'?",
      questionFr: "Comment dit-on 'une recette' ?",
      correct: "une recette",
      correctEn: "a recipe",
      alternatives: [],
      explanation: "La recette = the recipe. Une recette = a recipe.",
      explanationFr: "La recette = la recette. Une recette = une recette."
    },
    {
      id: "19-l6",
      type: "libre",
      question: "Translate: 'I stir gently.'",
      questionFr: "Traduisez : 'Je remue doucement.'",
      correct: "Je remue doucement.",
      correctEn: "I stir gently.",
      alternatives: [],
      explanation: "Remuer = to stir. Doucement = gently.",
      explanationFr: "Remuer = remuer. Doucement = doucement."
    },
    {
      id: "19-l7",
      type: "libre",
      question: "Complete: 'Je ___ les légumes avant de les cuire.'",
      questionFr: "Complétez : 'Je ___ les légumes avant de les cuire.'",
      correct: "coupe",
      correctEn: "chop",
      alternatives: [],
      explanation: "Couper = to cut/chop. Je coupe = I chop.",
      explanationFr: "Couper = couper. Je coupe = je coupe."
    },
    {
      id: "19-l8",
      type: "libre",
      question: "How do you say 'let simmer for 30 minutes'?",
      questionFr: "Comment dit-on 'Laissez mijoter 30 minutes' ?",
      correct: "Laissez mijoter 30 minutes.",
      correctEn: "Let simmer for 30 minutes.",
      alternatives: [],
      explanation: "Laisser mijoter = let simmer. Minutes = minutes.",
      explanationFr: "Laisser mijoter = laisser mijoter. Minutes = minutes."
    },
    {
      id: "19-l9",
      type: "libre",
      question: "Translate: 'I taste and I add some salt.'",
      questionFr: "Traduisez : 'Je goûte et j'ajoute du sel.'",
      correct: "Je goûte et j'ajoute du sel.",
      correctEn: "I taste and I add some salt.",
      alternatives: [],
      explanation: "Goûter = to taste. Ajouter = to add. Du sel = some salt.",
      explanationFr: "Goûter = goûter. Ajouter = ajouter. Du sel = du sel."
    },
    {
      id: "19-l10",
      type: "libre",
      question: "How do you say 'serve hot'?",
      questionFr: "Comment dit-on 'Servez chaud' ?",
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
