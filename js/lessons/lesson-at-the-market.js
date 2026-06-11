// lesson-at-the-market.js
const LESSON_02 = {
  id: 2,
  title: "At the Market",
  titleFr: "Au marché",
  objectiveEn: "Buy food at a French market, ask prices, use polite requests",
  objectiveFr: "Acheter de la nourriture au marché français, demander les prix, utiliser des demandes polies",
  hintEn: "Always add 's'il vous plaît' — French market vendors appreciate politeness!",
  hintFr: "Ajoutez toujours 's'il vous plaît' — les commerçants français apprécient la politesse !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🥖 Useful phrases at the market</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>Je voudrais...</td><td>I would like...</td></tr>
<tr><td>Avez-vous... ?</td><td>Do you have... ?</td></tr>
<tr><td>C'est combien ?</td><td>How much is it?</td>\n</tr>\n<tr>\n<td>Un kilo de..., s'il vous plaît.</td>\n<td>One kilo of..., please.</td>\n</tr>\n<tr>\n<td>C'est tout, merci.</td>\n<td>That's all, thank you.</td>\n</tr>\n</tbody>\n</table>\n</div>\n<div class=\"lesson-rule\">\n<h4>🔢 Numbers for quantities</h4>\n<table class=\"lesson-table\">\n<thead>\n<tr>\n<th>French</th>\n<th>English</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>un / une</td>\n<td>one</td>\n</tr>\n<tr>\n<td>deux / trois</td>\n<td>two / three</td>\n</tr>\n<tr>\n<td>un demi-kilo</td>\n<td>half a kilo</td>\n</tr>\n<tr>\n<td>une tranche de</td>\n<td>a slice of</td>\n</tr>\n</tbody>\n</table>\n</div>\n<div class=\"lesson-warning\">⚠️ Always say <strong>s'il vous plaît</strong> — being polite is essential in French shops and markets!</div>\n<div class=\"lesson-example\">\n<strong>Dialogue :</strong><br>\n— Bonjour ! Je voudrais un kilo de tomates, s'il vous plaît. <button class=\"lesson-ex-btn\" onclick=\"toggleLessonEx(this,event)\">🇬🇧 English</button>\n<span class=\"lesson-ex-en\">Hello! I would like a kilo of tomatoes, please.</span><br>\n— Voilà ! C'est tout ? <button class=\"lesson-ex-btn\" onclick=\"toggleLessonEx(this,event)\">🇬🇧 English</button>\n<span class=\"lesson-ex-en\">Here you go! Is that everything?</span>\n</div>\n  `,
  qcm: [
    {
      id: "2-1",
      type: "qcm",
      question: "'I would like a kilo of tomatoes, please.' in French:",
      options: ["Je voudrais un kilo de tomates, s'il vous plaît.", "Je veux tomates un kilo.", "Un kilo tomates merci.", "J'ai un kilo de tomates."],
      correct: "Je voudrais un kilo de tomates, s'il vous plaît.",
      explanation: "Je voudrais (*zhuh voo-DRAY*) = I would like. Much more polite than 'Je veux' (I want).",
      explanationFr: "Je voudrais = Je voudrais. Beaucoup plus poli que 'Je veux'."
    },
    {
      id: "2-2",
      type: "qcm",
      question: "How do you ask 'How much is it?'",
      options: ["C'est combien ?", "Quel prix ?", "Combien vous ?", "C'est cher ?"],
      correct: "C'est combien ?",
      explanation: "C'est combien ? (*say kom-BYAN*) = How much is it? Very common at markets.",
      explanationFr: "C'est combien ? Très courant au marché."
    },
    {
      id: "2-3",
      type: "qcm",
      question: "'That's all, thank you.' in French:",
      options: ["C'est tout, merci.", "Tout fini merci.", "C'est bon au revoir.", "Fin merci."],
      correct: "C'est tout, merci.",
      explanation: "C'est tout (*say too*) = That's all. Say this to end your shopping transaction politely.",
      explanationFr: "C'est tout = C'est tout. Dites cela pour terminer poliment votre achat."
    },
    {
      id: "2-4",
      type: "qcm",
      question: "'Do you have tomatoes?' in French:",
      options: ["Avez-vous des tomates ?", "Vous avez tomates ?", "J'ai des tomates ?", "Aimez-vous tomates ?"],
      correct: "Avez-vous des tomates ?",
      explanation: "Avez-vous ? (*a-vay-VOO*) = Do you have? Very polite formal question form.",
      explanationFr: "Avez-vous ? Forme interrogative très polie."
    },
    {
      id: "2-5",
      type: "qcm",
      question: "'Half a kilo' in French:",
      options: ["Un demi-kilo", "Une demi-kilo", "Demi kilogram", "Moitié kilo"],
      correct: "Un demi-kilo",
      explanation: "Un demi-kilo = half a kilo. Demi (*duh-MEE*) = half.",
      explanationFr: "Un demi-kilo = un demi-kilo."
    },
    {
      id: "2-6",
      type: "qcm",
      question: "'A slice of ham, please.' in French:",
      options: ["Une tranche de jambon, s'il vous plaît.", "Un morceau jambon.", "Du jambon tranche.", "Un jambon coupe."],
      correct: "Une tranche de jambon, s'il vous plaît.",
      explanation: "Une tranche de = a slice of. Une tranche (*tronshe*) is used for bread, ham, cheese.",
      explanationFr: "Une tranche de = une tranche de. Utilisé pour le pain, le jambon, le fromage."
    },
    {
      id: "2-7",
      type: "qcm",
      question: "Which phrase means 'It's too expensive'?",
      options: ["C'est trop cher.", "C'est combien ?", "Pas trop merci.", "C'est bon prix."],
      correct: "C'est trop cher.",
      explanation: "C'est trop cher (*say tro shair*) = It's too expensive. Trop = too much.",
      explanationFr: "C'est trop cher = C'est trop cher. Trop = trop."
    },
    {
      id: "2-8",
      type: "qcm",
      question: "'I'll take it.' at the market:",
      options: ["Je le prends.", "J'ai ça.", "Je veux ça.", "Donnez-moi."],
      correct: "Je le prends.",
      explanation: "Je le prends = I'll take it. This is the natural way to say you'll buy something.",
      explanationFr: "Je le prends = Je le prends. C'est la façon naturelle de dire que vous achetez."
    },
    {
      id: "2-9",
      type: "qcm",
      question: "The polite word for 'please' (formal) in French:",
      options: ["S'il vous plaît", "Merci", "De rien", "Excusez-moi"],
      correct: "S'il vous plaît",
      explanation: "S'il vous plaît (*seel voo PLAY*) = please (formal). Use s'il te plaît with friends.",
      explanationFr: "S'il vous plaît = s'il vous plaît (formel). Utilisez s'il te plaît avec les amis."
    },
    {
      id: "2-10",
      type: "qcm",
      question: "'Three hundred grams of cheese' in French:",
      options: ["Trois cents grammes de fromage", "300 fromage", "Trois fromage cents", "Du fromage 300"],
      correct: "Trois cents grammes de fromage",
      explanation: "Trois cents grammes = 300g. At French markets, always specify weight clearly.",
      explanationFr: "Trois cents grammes = 300g. Au marché, précisez toujours le poids."
    }
  ],
  libre: [
    {
      id: "2-l1",
      type: "libre",
      question: "How do you say 'I would like some apples'?",
      correct: "Je voudrais des pommes.",
      alternatives: [],
      explanation: "Des pommes = some apples. Use 'des' for plural uncountable.",
      explanationFr: "Des pommes = des pommes. Utilisez 'des' pour les pluriels indénombrables."
    },
    {
      id: "2-l2",
      type: "libre",
      question: "Ask the vendor 'Do you have local honey?'",
      correct: "Avez-vous du miel local ?",
      alternatives: ["Vous avez du miel local ?"],
      explanation: "Avez-vous = do you have (formal). Du miel = some honey.",
      explanationFr: "Avez-vous = avez-vous (formel). Du miel = du miel."
    },
    {
      id: "2-l3",
      type: "libre",
      question: "Translate: 'Two kilos of potatoes, please.'",
      correct: "Deux kilos de pommes de terre, s'il vous plaît.",
      alternatives: [],
      explanation: "Pommes de terre = potatoes (literally 'apples of the earth').",
      explanationFr: "Pommes de terre = pommes de terre."
    },
    {
      id: "2-l4",
      type: "libre",
      question: "How do you say 'How much is the cheese?'",
      correct: "C'est combien le fromage ?",
      alternatives: ["Le fromage, c'est combien ?"],
      explanation: "C'est combien = how much is it. Le fromage = the cheese.",
      explanationFr: "C'est combien = combien ça coûte. Le fromage = le fromage."
    },
    {
      id: "2-l5",
      type: "libre",
      question: "Say 'That's everything, thank you' to end a transaction.",
      correct: "C'est tout, merci.",
      alternatives: [],
      explanation: "Always end politely — vendors appreciate it!",
      explanationFr: "Terminez toujours poliment — les vendeurs apprécient !"
    },
    {
      id: "2-l6",
      type: "libre",
      question: "Complete: 'Je voudrais une ___ de pain.'",
      correct: "tranche",
      alternatives: [],
      explanation: "Une tranche de pain = a slice of bread.",
      explanationFr: "Une tranche de pain = une tranche de pain."
    },
    {
      id: "2-l7",
      type: "libre",
      question: "Translate: 'It's too expensive.'",
      correct: "C'est trop cher.",
      alternatives: [],
      explanation: "Trop = too / too much. Cher = expensive.",
      explanationFr: "Trop = trop. Cher = cher."
    },
    {
      id: "2-l8",
      type: "libre",
      question: "How do you say 'I'll take a kilo'?",
      correct: "Je prends un kilo.",
      alternatives: ["Je le prends"],
      explanation: "Je prends = I take / I'll take.",
      explanationFr: "Je prends = Je prends."
    },
    {
      id: "2-l9",
      type: "libre",
      question: "What does 'Avez-vous...' mean in English?",
      correct: "Do you have",
      alternatives: ["do you have...?"],
      explanation: "Avez-vous (*a-vay-VOO*) = Do you have... (formal)",
      explanationFr: "Avez-vous = avez-vous... (formel)"
    },
    {
      id: "2-l10",
      type: "libre",
      question: "Translate: 'A hundred grams of butter, please.'",
      correct: "Cent grammes de beurre, s'il vous plaît.",
      alternatives: [],
      explanation: "Cent grammes = 100g. Beurre (*burr*) = butter.",
      explanationFr: "Cent grammes = 100g. Beurre = beurre."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_02;
} else {
  window.LESSON_02 = LESSON_02;
}