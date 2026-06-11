// lesson-02.js
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
<tr><td>C'est combien ?</td><td>How much is it?</td></tr>
<tr><td>Un kilo de..., s'il vous plaît.</td><td>One kilo of..., please.</td></table>
<tr><td>C'est tout, merci.</td><td>That's all, thank you.</td></tr>
</tbody>
</table>
</div>
<div class="lesson-rule">
<h4>🔢 Numbers for quantities</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>un / une</td><td>one</td></tr>
</tr><td>deux / trois</td><td>two / three</td></tr>
<tr><td>un demi-kilo</td><td>half a kilo</td><tr>
<tr><td>une tranche de</td><td>a slice of</td><tr>
</tbody>
</table>
</div>
<div class="lesson-warning">⚠️ Always say <strong>s'il vous plaît</strong> — being polite is essential in French shops and markets!</div>
<div class="lesson-example">
<strong>Dialogue :</strong><br>
— Bonjour ! Je voudrais un kilo de tomates, s'il vous plaît. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">Hello! I would like a kilo of tomatoes, please.</span><br>
— Voilà ! C'est tout ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">Here you go! Is that everything?</span>
</div>
  `,
  qcm: [
    {
      id: "2-1",
      type: "qcm",
      question: "'I would like a kilo of tomatoes, please.' in French:",
      questionFr: "Traduisez : 'Je voudrais un kilo de tomates, s'il vous plaît.'",
      options: ["Je voudrais un kilo de tomates, s'il vous plaît.", "Je veux tomates un kilo.", "Un kilo tomates merci.", "J'ai un kilo de tomates."],
      optionsEn: ["I would like a kilo of tomatoes, please.", "I want tomatoes one kilo.", "One kilo tomatoes thanks.", "I have a kilo of tomatoes."],
      correct: "Je voudrais un kilo de tomates, s'il vous plaît.",
      correctEn: "I would like a kilo of tomatoes, please.",
      explanation: "Je voudrais (*zhuh voo-DRAY*) = I would like. Much more polite than 'Je veux' (I want).",
      explanationFr: "Je voudrais = Je voudrais. Beaucoup plus poli que 'Je veux'."
    },
    {
      id: "2-2",
      type: "qcm",
      question: "How do you ask 'How much is it?'",
      questionFr: "Comment demande-t-on 'C'est combien ?'",
      options: ["C'est combien ?", "Quel prix ?", "Combien vous ?", "C'est cher ?"],
      optionsEn: ["How much is it?", "What price?", "How much you?", "Is it expensive?"],
      correct: "C'est combien ?",
      correctEn: "How much is it?",
      explanation: "C'est combien ? (*say kom-BYAN*) = How much is it? Very common at markets.",
      explanationFr: "C'est combien ? Très courant au marché."
    },
    {
      id: "2-3",
      type: "qcm",
      question: "'That's all, thank you.' in French:",
      questionFr: "Traduisez : 'C'est tout, merci.'",
      options: ["C'est tout, merci.", "Tout fini merci.", "C'est bon au revoir.", "Fin merci."],
      optionsEn: ["That's all, thank you.", "All finished thanks.", "That's good goodbye.", "End thanks."],
      correct: "C'est tout, merci.",
      correctEn: "That's all, thank you.",
      explanation: "C'est tout (*say too*) = That's all. Say this to end your shopping transaction politely.",
      explanationFr: "C'est tout = C'est tout. Dites cela pour terminer poliment votre achat."
    },
    {
      id: "2-4",
      type: "qcm",
      question: "'Do you have tomatoes?' in French:",
      questionFr: "Comment dit-on 'Avez-vous des tomates ?'",
      options: ["Avez-vous des tomates ?", "Vous avez tomates ?", "J'ai des tomates ?", "Aimez-vous tomates ?"],
      optionsEn: ["Do you have tomatoes?", "You have tomatoes?", "I have tomatoes?", "Do you like tomatoes?"],
      correct: "Avez-vous des tomates ?",
      correctEn: "Do you have tomatoes?",
      explanation: "Avez-vous ? (*a-vay-VOO*) = Do you have? Very polite formal question form.",
      explanationFr: "Avez-vous ? Forme interrogative très polie."
    },
    {
      id: "2-5",
      type: "qcm",
      question: "'Half a kilo' in French:",
      questionFr: "Comment dit-on 'un demi-kilo' ?",
      options: ["Un demi-kilo", "Une demi-kilo", "Demi kilogram", "Moitié kilo"],
      optionsEn: ["Half a kilo", "One half kilo (fem)", "Half kilogram", "Half kilo (moitié)"],
      correct: "Un demi-kilo",
      correctEn: "Half a kilo",
      explanation: "Un demi-kilo = half a kilo. Demi (*duh-MEE*) = half.",
      explanationFr: "Un demi-kilo = un demi-kilo."
    },
    {
      id: "2-6",
      type: "qcm",
      question: "'A slice of ham, please.' in French:",
      questionFr: "Traduisez : 'Une tranche de jambon, s'il vous plaît.'",
      options: ["Une tranche de jambon, s'il vous plaît.", "Un morceau jambon.", "Du jambon tranche.", "Un jambon coupe."],
      optionsEn: ["A slice of ham, please.", "A piece ham.", "Some ham slice.", "A ham cut."],
      correct: "Une tranche de jambon, s'il vous plaît.",
      correctEn: "A slice of ham, please.",
      explanation: "Une tranche de = a slice of. Une tranche (*tronshe*) is used for bread, ham, cheese.",
      explanationFr: "Une tranche de = une tranche de. Utilisé pour le pain, le jambon, le fromage."
    },
    {
      id: "2-7",
      type: "qcm",
      question: "Which phrase means 'It's too expensive'?",
      questionFr: "Quelle phrase signifie 'C'est trop cher' ?",
      options: ["C'est trop cher.", "C'est combien ?", "Pas trop merci.", "C'est bon prix."],
      optionsEn: ["It's too expensive.", "How much is it?", "Not too much thanks.", "It's a good price."],
      correct: "C'est trop cher.",
      correctEn: "It's too expensive.",
      explanation: "C'est trop cher (*say tro shair*) = It's too expensive. Trop = too much.",
      explanationFr: "C'est trop cher = C'est trop cher. Trop = trop."
    },
    {
      id: "2-8",
      type: "qcm",
      question: "'I'll take it.' at the market:",
      questionFr: "Comment dit-on 'Je le prends' au marché ?",
      options: ["Je le prends.", "J'ai ça.", "Je veux ça.", "Donnez-moi."],
      optionsEn: ["I'll take it.", "I have that.", "I want that.", "Give me."],
      correct: "Je le prends.",
      correctEn: "I'll take it.",
      explanation: "Je le prends = I'll take it. This is the natural way to say you'll buy something.",
      explanationFr: "Je le prends = Je le prends. C'est la façon naturelle de dire que vous achetez."
    },
    {
      id: "2-9",
      type: "qcm",
      question: "The polite word for 'please' (formal) in French:",
      questionFr: "Le mot poli pour 's'il vous plaît' (formel) en français :",
      options: ["S'il vous plaît", "Merci", "De rien", "Excusez-moi"],
      optionsEn: ["Please", "Thank you", "You're welcome", "Excuse me"],
      correct: "S'il vous plaît",
      correctEn: "Please",
      explanation: "S'il vous plaît (*seel voo PLAY*) = please (formal). Use s'il te plaît with friends.",
      explanationFr: "S'il vous plaît = s'il vous plaît (formel). Utilisez s'il te plaît avec les amis."
    },
    {
      id: "2-10",
      type: "qcm",
      question: "'Three hundred grams of cheese' in French:",
      questionFr: "Comment dit-on 'trois cents grammes de fromage' ?",
      options: ["Trois cents grammes de fromage", "300 fromage", "Trois fromage cents", "Du fromage 300"],
      optionsEn: ["Three hundred grams of cheese", "300 cheese", "Three cheese hundred", "Some cheese 300"],
      correct: "Trois cents grammes de fromage",
      correctEn: "Three hundred grams of cheese",
      explanation: "Trois cents grammes = 300g. At French markets, always specify weight clearly.",
      explanationFr: "Trois cents grammes = 300g. Au marché, précisez toujours le poids."
    }
  ],
  libre: [
    {
      id: "2-l1",
      type: "libre",
      question: "How do you say 'I would like some apples'?",
      questionFr: "Comment dit-on 'Je voudrais des pommes' ?",
      correct: "Je voudrais des pommes.",
      correctEn: "I would like some apples.",
      alternatives: [],
      explanation: "Des pommes = some apples. Use 'des' for plural uncountable.",
      explanationFr: "Des pommes = des pommes. Utilisez 'des' pour les pluriels indénombrables."
    },
    {
      id: "2-l2",
      type: "libre",
      question: "Ask the vendor 'Do you have local honey?'",
      questionFr: "Demandez au vendeur 'Avez-vous du miel local ?'",
      correct: "Avez-vous du miel local ?",
      correctEn: "Do you have local honey?",
      alternatives: ["Vous avez du miel local ?"],
      explanation: "Avez-vous = do you have (formal). Du miel = some honey.",
      explanationFr: "Avez-vous = avez-vous (formel). Du miel = du miel."
    },
    {
      id: "2-l3",
      type: "libre",
      question: "Translate: 'Two kilos of potatoes, please.'",
      questionFr: "Traduisez : 'Deux kilos de pommes de terre, s'il vous plaît.'",
      correct: "Deux kilos de pommes de terre, s'il vous plaît.",
      correctEn: "Two kilos of potatoes, please.",
      alternatives: [],
      explanation: "Pommes de terre = potatoes (literally 'apples of the earth').",
      explanationFr: "Pommes de terre = pommes de terre."
    },
    {
      id: "2-l4",
      type: "libre",
      question: "How do you say 'How much is the cheese?'",
      questionFr: "Comment dit-on 'C'est combien le fromage ?'",
      correct: "C'est combien le fromage ?",
      correctEn: "How much is the cheese?",
      alternatives: ["Le fromage, c'est combien ?"],
      explanation: "C'est combien = how much is it. Le fromage = the cheese.",
      explanationFr: "C'est combien = combien ça coûte. Le fromage = le fromage."
    },
    {
      id: "2-l5",
      type: "libre",
      question: "Say 'That's everything, thank you' to end a transaction.",
      questionFr: "Dites 'C'est tout, merci' pour terminer une transaction.",
      correct: "C'est tout, merci.",
      correctEn: "That's all, thank you.",
      alternatives: [],
      explanation: "Always end politely — vendors appreciate it!",
      explanationFr: "Terminez toujours poliment — les vendeurs apprécient !"
    },
    {
      id: "2-l6",
      type: "libre",
      question: "Complete: 'Je voudrais une ___ de pain.'",
      questionFr: "Complétez : 'Je voudrais une ___ de pain.'",
      correct: "tranche",
      correctEn: "slice",
      alternatives: [],
      explanation: "Une tranche de pain = a slice of bread.",
      explanationFr: "Une tranche de pain = une tranche de pain."
    },
    {
      id: "2-l7",
      type: "libre",
      question: "Translate: 'It's too expensive.'",
      questionFr: "Traduisez : 'C'est trop cher.'",
      correct: "C'est trop cher.",
      correctEn: "It's too expensive.",
      alternatives: [],
      explanation: "Trop = too / too much. Cher = expensive.",
      explanationFr: "Trop = trop. Cher = cher."
    },
    {
      id: "2-l8",
      type: "libre",
      question: "How do you say 'I'll take a kilo'?",
      questionFr: "Comment dit-on 'Je prends un kilo' ?",
      correct: "Je prends un kilo.",
      correctEn: "I'll take a kilo.",
      alternatives: ["Je le prends"],
      explanation: "Je prends = I take / I'll take.",
      explanationFr: "Je prends = Je prends."
    },
    {
      id: "2-l9",
      type: "libre",
      question: "What does 'Avez-vous...' mean in English?",
      questionFr: "Que signifie 'Avez-vous...' en anglais ?",
      correct: "Do you have",
      correctEn: "Do you have",
      alternatives: ["do you have...?"],
      explanation: "Avez-vous (*a-vay-VOO*) = Do you have... (formal)",
      explanationFr: "Avez-vous = avez-vous... (formel)"
    },
    {
      id: "2-l10",
      type: "libre",
      question: "Translate: 'A hundred grams of butter, please.'",
      questionFr: "Traduisez : 'Cent grammes de beurre, s'il vous plaît.'",
      correct: "Cent grammes de beurre, s'il vous plaît.",
      correctEn: "A hundred grams of butter, please.",
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
