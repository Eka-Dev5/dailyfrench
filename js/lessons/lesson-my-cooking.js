// lesson-my-cooking.js
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
<thead><tr><th>French</th><th>Phonetics</th><th>English</th></tr></thead>
<tbody>
<tr><td>couper</td><td><em>*koo-PAY*</em></td><td>to cut / chop</td>\n</tr>\n<tr>\n<td class=\"\">mélanger</td>\n<td class=\"\"><em>*may-lan-ZHAY*</em></td>\n<td class=\"\">to mix</td>\n</tr>\n<tr>\n<td class=\"\">faire chauffer</td>\n<td class=\"\"><em>*fair sho-FAY*</em></td>\n<td class=\"\">to heat up</td>\n</tr>\n<tr>\n<td class=\"\">ajouter</td>\n<td class=\"\"><em>*a-zhoo-TAY*</em></td>\n<td class=\"\">to add</td>\n</tr>\n<tr>\n<td class=\"\">remuer</td>\n<td class=\"\"><em>*ruh-moo-AY*</em></td>\n<td class=\"\">to stir</td>\n</tr>\n<tr>\n<td class=\"\">goûter</td>\n<td class=\"\"><em>*goo-TAY*</em></td>\n<td class=\"\">to taste</td>\n</tr>\n<tr>\n<td class=\"\">servir</td>\n<td class=\"\"><em>*sair-VEER*</em></td>\n<td class=\"\">to serve</td>\n</tr>\n</tbody>\n</table>\n</div>\n<div class=\"lesson-rule\">\n<h4>📖 Recipe language</h4>\n<table class=\"lesson-table\">\n<thead>\n<tr>\n<th>French</th>\n<th>English</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td class=\"\">une recette</td>\n<td class=\"\">a recipe</td>\n</tr>\n<tr>\n<td class=\"\">les ingrédients</td>\n<td class=\"\">the ingredients</td>\n</tr>\n<tr>\n<td class=\"\">faire revenir</td>\n<td class=\"\">to fry / sauté</td>\n</tr>\n<tr>\n<td class=\"\">laisser mijoter</td>\n<td class=\"\">to let simmer</td>\n</tr>\n</tbody>\n</table>\n</div>\n<div class=\"lesson-example\">\n<strong>Exemple :</strong> Je coupe les légumes, j'ajoute de l'huile et je fais chauffer à feu doux. <button class=\"lesson-ex-btn\" onclick=\"toggleLessonEx(this,event)\">🇬🇧 English</button>\n<span class=\"lesson-ex-en\">I chop the vegetables, add some oil and heat on a low heat.</span>\n</div>\n  `,
  qcm: [
    {
      id: "19-1",
      type: "qcm",
      question: "'To cut / chop' in French:",
      options: ["Couper", "Mélanger", "Ajouter", "Remuer"],
      correct: "Couper",
      explanation: "Couper (*koo-PAY*) = to cut, chop. Je coupe les légumes = I chop the vegetables.",
      explanationFr: "Couper = couper. Je coupe les légumes = je coupe les légumes."
    },
    {
      id: "19-2",
      type: "qcm",
      question: "'To mix' in French:",
      options: ["Mélanger", "Couper", "Ajouter", "Faire chauffer"],
      correct: "Mélanger",
      explanation: "Mélanger (*may-lan-ZHAY*) = to mix. Mélangez bien = mix well.",
      explanationFr: "Mélanger = mélanger. Mélangez bien = mélangez bien."
    },
    {
      id: "19-3",
      type: "qcm",
      question: "'To heat up' in French:",
      options: ["Faire chauffer", "Mélanger", "Ajouter", "Remuer"],
      correct: "Faire chauffer",
      explanation: "Faire chauffer (*fair sho-FAY*) = to heat up. Faites chauffer l'huile = heat up the oil.",
      explanationFr: "Faire chauffer = faire chauffer. Faites chauffer l'huile = faites chauffer l'huile."
    },
    {
      id: "19-4",
      type: "qcm",
      question: "'To add' in French:",
      options: ["Ajouter", "Couper", "Servir", "Goûter"],
      correct: "Ajouter",
      explanation: "Ajouter (*a-zhoo-TAY*) = to add. Ajoutez le sel = add the salt.",
      explanationFr: "Ajouter = ajouter. Ajoutez le sel = ajoutez le sel."
    },
    {
      id: "19-5",
      type: "qcm",
      question: "'To taste' in French:",
      options: ["Goûter", "Ajouter", "Remuer", "Servir"],
      correct: "Goûter",
      explanation: "Goûter (*goo-TAY*) = to taste. Goûtez et ajustez l'assaisonnement = taste and adjust the seasoning.",
      explanationFr: "Goûter = goûter. Goûtez et ajustez l'assaisonnement = goûtez et ajustez l'assaisonnement."
    },
    {
      id: "19-6",
      type: "qcm",
      question: "'To serve' in French:",
      options: ["Servir", "Couper", "Remuer", "Préparer"],
      correct: "Servir",
      explanation: "Servir (*sair-VEER*) = to serve. Servez chaud = serve hot.",
      explanationFr: "Servir = servir. Servez chaud = servez chaud."
    },
    {
      id: "19-7",
      type: "qcm",
      question: "'A recipe' in French:",
      options: ["Une recette", "Un recette", "Une recipe", "Un recit"],
      correct: "Une recette",
      explanation: "Une recette (*ruh-SET*) = a recipe. Les recettes = the recipes.",
      explanationFr: "Une recette = une recette. Les recettes = les recettes."
    },
    {
      id: "19-8",
      type: "qcm",
      question: "'To stir' in French:",
      options: ["Remuer", "Couper", "Ajouter", "Faire cuire"],
      correct: "Remuer",
      explanation: "Remuer (*ruh-mue-AY*) = to stir. Remuez doucement = stir gently.",
      explanationFr: "Remuer = remuer. Remuez doucement = remuez doucement."
    },
    {
      id: "19-9",
      type: "qcm",
      question: "'I chop the vegetables' in French:",
      options: ["Je coupe les légumes.", "Je mélange les légumes.", "Je prépare légumes.", "Je coupes légumes."],
      correct: "Je coupe les légumes.",
      explanation: "Je coupe = I chop/cut. Les légumes = the vegetables.",
      explanationFr: "Je coupe = je coupe. Les légumes = les légumes."
    },
    {
      id: "19-10",
      type: "qcm",
      question: "'To let simmer' in French:",
      options: ["Laisser mijoter", "Faire chauffer", "Faire bouillir", "Faire cuire"],
      correct: "Laisser mijoter",
      explanation: "Laisser mijoter (*mee-zho-TAY*) = to let simmer. Laissez mijoter 20 minutes = let simmer 20 minutes.",
      explanationFr: "Laisser mijoter = laisser mijoter. Laissez mijoter 20 minutes = laissez mijoter 20 minutes."
    }
  ],
  libre: [
    {
      id: "19-l1",
      type: "libre",
      question: "Translate: 'I chop the onions.'",
      correct: "Je coupe les oignons.",
      alternatives: [],
      explanation: "Couper = to chop/cut. Les oignons = onions.",
      explanationFr: "Couper = couper. Les oignons = les oignons."
    },
    {
      id: "19-l2",
      type: "libre",
      question: "How do you say 'I mix well'?",
      correct: "Je mélange bien.",
      alternatives: [],
      explanation: "Mélanger = to mix. Bien = well.",
      explanationFr: "Mélanger = mélanger. Bien = bien."
    },
    {
      id: "19-l3",
      type: "libre",
      question: "Translate: 'Heat up the olive oil.'",
      correct: "Faites chauffer l'huile d'olive.",
      alternatives: [],
      explanation: "Faire chauffer = to heat up. L'huile d'olive = olive oil.",
      explanationFr: "Faire chauffer = faire chauffer. L'huile d'olive = l'huile d'olive."
    },
    {
      id: "19-l4",
      type: "libre",
      question: "Complete: 'J'___ du sel et du poivre.'",
      correct: "ajoute",
      alternatives: [],
      explanation: "Ajouter = to add. J'ajoute = I add.",
      explanationFr: "Ajouter = ajouter. J'ajoute = j'ajoute."
    },
    {
      id: "19-l5",
      type: "libre",
      question: "How do you say 'a recipe'?",
      correct: "une recette",
      alternatives: [],
      explanation: "La recette = the recipe. Une recette = a recipe.",
      explanationFr: "La recette = la recette. Une recette = une recette."
    },
    {
      id: "19-l6",
      type: "libre",
      question: "Translate: 'I stir gently.'",
      correct: "Je remue doucement.",
      alternatives: [],
      explanation: "Remuer = to stir. Doucement = gently.",
      explanationFr: "Remuer = remuer. Doucement = doucement."
    },
    {
      id: "19-l7",
      type: "libre",
      question: "Complete: 'Je ___ les légumes avant de les cuire.'",
      correct: "coupe",
      alternatives: [],
      explanation: "Couper = to cut/chop. Je coupe = I chop.",
      explanationFr: "Couper = couper. Je coupe = je coupe."
    },
    {
      id: "19-l8",
      type: "libre",
      question: "How do you say 'let simmer for 30 minutes'?",
      correct: "Laissez mijoter 30 minutes.",
      alternatives: [],
      explanation: "Laisser mijoter = let simmer. Minutes = minutes (same word!).",
      explanationFr: "Laisser mijoter = laisser mijoter. Minutes = minutes (identique !)."
    },
    {
      id: "19-l9",
      type: "libre",
      question: "Translate: 'I taste and I add some salt.'",
      correct: "Je goûte et j'ajoute du sel.",
      alternatives: [],
      explanation: "Goûter = to taste. Ajouter = to add. Du sel = some salt.",
      explanationFr: "Goûter = goûter. Ajouter = ajouter. Du sel = du sel."
    },
    {
      id: "19-l10",
      type: "libre",
      question: "How do you say 'serve hot'?",
      correct: "Servez chaud.",
      alternatives: [],
      explanation: "Servir = to serve. Chaud = hot. Classic recipe instruction!",
      explanationFr: "Servir = servir. Chaud = chaud. Instruction de recette classique !"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_19;
} else {
  window.LESSON_19 = LESSON_19;
}