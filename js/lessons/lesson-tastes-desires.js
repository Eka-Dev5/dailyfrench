// lesson-tastes-desires.js
const LESSON_05 = {
  id: 5,
  title: "Tastes & Desires",
  titleFr: "Goûts et désirs",
  objectiveEn: "Express likes, dislikes and preferences in French",
  objectiveFr: "Exprimer ses goûts, ses dégoûts et ses préférences en français",
  hintEn: "'J'adore' is stronger than 'J'aime' — use it for real enthusiasm!",
  hintFr: "'J'adore' est plus fort que 'J'aime' — utilisez-le pour un réel enthousiasme !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>❤️ Expressing likes and dislikes</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>J'aime...</td><td>I like...</td></tr>
<tr><td>J'adore...</td><td>I love...</td></tr>
<tr><td>Je n'aime pas...</td><td>I don't like...</td></tr>
<tr><td>Je préfère...</td><td>I prefer...</td></tr>
<tr><td>Ça me plaît.</td><td>I like it. (lit: it pleases me)</td></tr>
</tbody>
</table>
</div>
<div class="lesson-rule">
<h4>🍽️ Food preferences</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>C'est délicieux !</td><td>It's delicious!</td></tr>
<tr><td>C'est trop salé / sucré.</td><td>It's too salty / sweet.</td></tr>
<tr><td>Je suis végétarien(ne).</td><td>I'm vegetarian (m/f).</td></tr>
<tr><td>Je suis allergique à...</td><td>I'm allergic to...</td></tr>
</tbody>
</table>
</div>
<div class="lesson-example">
<strong>Exemple :</strong> J'adore le fromage mais je n'aime pas les huîtres. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">I love cheese but I don't like oysters.</span>
</div>
  `,
  qcm: [
    {
      id: "5-1",
      type: "qcm",
      question: "'I love cheese!' in French:",
      options: ["J'adore le fromage !", "J'aime bien fromage !", "Je veux le fromage !", "J'ai le fromage !"],
      correct: "J'adore le fromage !",
      explanation: "J'adore (*zhah-DOR*) = I love (stronger than j'aime). Use for genuine enthusiasm!",
      explanationFr: "J'adore = j'adore (plus fort que j'aime). À utiliser pour un enthousiasme sincère !"
    },
    {
      id: "5-2",
      type: "qcm",
      question: "'I don't like olives.' in French:",
      options: ["Je n'aime pas les olives.", "J'aime pas olive.", "Je veux pas olives.", "Pas les olives."],
      correct: "Je n'aime pas les olives.",
      explanation: "Je n'aime pas (*zhuh nem PAH*) = I don't like. Always use definite article (les/le/la) after aimer.",
      explanationFr: "Je n'aime pas = je n'aime pas. Toujours utiliser l'article défini après aimer."
    },
    {
      id: "5-3",
      type: "qcm",
      question: "'I prefer red wine.' in French:",
      options: ["Je préfère le vin rouge.", "J'aime mieux rouge vin.", "Je veux vin rouge.", "Le vin rouge j'aime."],
      correct: "Je préfère le vin rouge.",
      explanation: "Je préfère (*zhuh pray-FAIR*) = I prefer. Same structure as English!",
      explanationFr: "Je préfère = je préfère. Même structure qu'en anglais !"
    },
    {
      id: "5-4",
      type: "qcm",
      question: "'It's delicious!' in French:",
      options: ["C'est délicieux !", "C'est bon !", "C'est très bien !", "J'aime ça !"],
      correct: "C'est délicieux !",
      explanation: "C'est délicieux (*say day-lee-SYUH*) = It's delicious! C'est bon = It's good (less enthusiastic).",
      explanationFr: "C'est délicieux = c'est délicieux ! C'est bon = c'est bon (moins enthousiaste)."
    },
    {
      id: "5-5",
      type: "qcm",
      question: "'I'm vegetarian.' in French:",
      options: ["Je suis végétarien.", "Je veux pas viande.", "Je n'ai pas viande.", "Je mange pas bête."],
      correct: "Je suis végétarien.",
      explanation: "Végétarien (m) / végétarienne (f). Je suis + adjective for describing yourself.",
      explanationFr: "Végétarien (m) / végétarienne (f). Je suis + adjectif pour se décrire."
    },
    {
      id: "5-6",
      type: "qcm",
      question: "'I'm allergic to nuts.' in French:",
      options: ["Je suis allergique aux noix.", "J'ai allergie noix.", "Je suis malade noix.", "Les noix je suis mal."],
      correct: "Je suis allergique aux noix.",
      explanation: "Allergique à (*a-lair-ZHEEK a*). À + les = aux. À + le = au.",
      explanationFr: "Allergique à. À + les = aux. À + le = au."
    },
    {
      id: "5-7",
      type: "qcm",
      question: "'It pleases me.' (I like it) in French:",
      options: ["Ça me plaît.", "J'aime ça bien.", "Ça est bien.", "Je veux ça."],
      correct: "Ça me plaît.",
      explanation: "Ça me plaît (*sa muh PLAY*) = I like it (literally 'it pleases me'). Very French!",
      explanationFr: "Ça me plaît = ça me plaît. Très français !"
    },
    {
      id: "5-8",
      type: "qcm",
      question: "'It's too salty.' in French:",
      options: ["C'est trop salé.", "C'est trop salt.", "Trop de sel.", "C'est très salé."],
      correct: "C'est trop salé.",
      explanation: "Trop (*troh*) = too much. Salé = salty. Sucré = sweet. Acide = sour.",
      explanationFr: "Trop = trop. Salé = salé. Sucré = sucré. Acide = acide."
    },
    {
      id: "5-9",
      type: "qcm",
      question: "'I really like this market.' in French:",
      options: ["J'aime beaucoup ce marché.", "J'aime très ce marché.", "Ce marché est bien.", "J'adore bien ce marché."],
      correct: "J'aime beaucoup ce marché.",
      explanation: "J'aime beaucoup = I really like. Beaucoup (*boh-KOO*) intensifies the feeling.",
      explanationFr: "J'aime beaucoup = j'aime beaucoup. Beaucoup intensifie le sentiment."
    },
    {
      id: "5-10",
      type: "qcm",
      question: "'What do you like?' in French:",
      options: ["Qu'est-ce que vous aimez ?", "Vous aimez quoi ?", "Quoi vous voulez ?", "Qu'aimez-vous faire ?"],
      correct: "Qu'est-ce que vous aimez ?",
      explanation: "Qu'est-ce que vous aimez ? (*kess-kuh voo-zay-MAY*) = What do you like?",
      explanationFr: "Qu'est-ce que vous aimez ? = qu'est-ce que vous aimez ?"
    }
  ],
  libre: [
    {
      id: "5-l1",
      type: "libre",
      question: "Say 'I love the French countryside.'",
      correct: "J'adore la campagne française.",
      alternatives: [],
      explanation: "Campagne = countryside. J'adore = I love (strong).",
      explanationFr: "Campagne = campagne. J'adore = j'adore (fort)."
    },
    {
      id: "5-l2",
      type: "libre",
      question: "Translate: 'I don't like cold weather.'",
      correct: "Je n'aime pas le froid.",
      alternatives: ["Je n'aime pas le temps froid."],
      explanation: "Le froid = the cold. Je n'aime pas = I don't like.",
      explanationFr: "Le froid = le froid. Je n'aime pas = je n'aime pas."
    },
    {
      id: "5-l3",
      type: "libre",
      question: "How do you say 'It's delicious!'?",
      correct: "C'est délicieux !",
      alternatives: [],
      explanation: "A classic compliment for French hosts!",
      explanationFr: "Un compliment classique pour les hôtes français !"
    },
    {
      id: "5-l4",
      type: "libre",
      question: "Complete: 'Je préfère le café ___ le thé.'",
      correct: "à",
      alternatives: [],
      explanation: "Préférer A à B = to prefer A to B. Je préfère le café au thé.",
      explanationFr: "Préférer A à B = préférer A à B. Je préfère le café au thé."
    },
    {
      id: "5-l5",
      type: "libre",
      question: "Translate: 'I am allergic to gluten.'",
      correct: "Je suis allergique au gluten.",
      alternatives: [],
      explanation: "Au = à + le. Gluten is the same in French!",
      explanationFr: "Au = à + le. Gluten est identique en français !"
    },
    {
      id: "5-l6",
      type: "libre",
      question: "How do you say 'I really like this village'?",
      correct: "J'aime beaucoup ce village.",
      alternatives: ["J'adore ce village."],
      explanation: "Beaucoup intensifies j'aime. J'adore is even stronger.",
      explanationFr: "Beaucoup intensifie j'aime. J'adore est encore plus fort."
    },
    {
      id: "5-l7",
      type: "libre",
      question: "Translate: 'It's a bit sweet for me.'",
      correct: "C'est un peu sucré pour moi.",
      alternatives: [],
      explanation: "Un peu = a little. Sucré = sweet. Pour moi = for me.",
      explanationFr: "Un peu = un peu. Sucré = sucré. Pour moi = pour moi."
    },
    {
      id: "5-l8",
      type: "libre",
      question: "Complete: 'Je ___ les huîtres.'",
      correct: "n'aime pas",
      alternatives: [],
      explanation: "Je n'aime pas = I don't like. The most useful negative for food!",
      explanationFr: "Je n'aime pas = je n'aime pas. La négation la plus utile pour la nourriture !"
    },
    {
      id: "5-l9",
      type: "libre",
      question: "How do you say 'What do you like to eat?'",
      correct: "Qu'est-ce que vous aimez manger ?",
      alternatives: ["Vous aimez quoi manger ?"],
      explanation: "Aimer + infinitive = to like doing something.",
      explanationFr: "Aimer + infinitif = aimer faire quelque chose."
    },
    {
      id: "5-l10",
      type: "libre",
      question: "Translate: 'I prefer the local market.'",
      correct: "Je préfère le marché local.",
      alternatives: [],
      explanation: "Local = local (same word!). Marché = market.",
      explanationFr: "Local = local. Marché = marché."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_05;
} else {
  window.LESSON_05 = LESSON_05;
}