// essential-verbs.js
const LESSON_09 = {
  id: 9,
  title: "Essential Verbs",
  titleFr: "Verbes essentiels",
  objectiveEn: "Use the 6 most important French verbs in everyday situations",
  objectiveFr: "Utiliser les 6 verbes français les plus importants dans la vie quotidienne",
  hintEn: "These 6 verbs cover 70% of daily French — master them first!",
  hintFr: "Ces 6 verbes couvrent 70% du français quotidien — maîtrisez-les d'abord !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>⚡ The 6 key verbs</h4>
<table class="lesson-table">
<thead>
<tr><th>Verb</th><th>Je</th><th>Vous</th><th>English</th></tr>
</thead>
<tbody>
<tr><td><strong>être</strong></td><td>je suis</td><td>vous êtes</td><td>to be</td><\/tr>
<tr><td class=\"\"><strong>avoir<\/strong><\/td><td>j'ai<\/td><td>vous avez<\/td><td>to have<\/td><\/tr>
</tr><td class=\"\"><strong>aller<\/strong><\/td><td>je vais<\/td><td>vous allez<\/td><td>to go<\/td><\/tr>
<tr><td class=\"\"><strong>faire<\/strong><\/td><td>je fais<\/td><td>vous faites<\/td><td>to do/make<\/td><\/tr>
<tr><td class=\"\"><strong>vouloir<\/strong><\/td><td>je veux<\/td><td>vous voulez<\/td><td>to want<\/td><\/tr>
<tr><td class=\"\"><strong>pouvoir<\/strong><\/td><td>je peux<\/td><td>vous pouvez<\/td><td>can / to be able<\/td><\/tr>
</tbody>
<\/table>
<\/div>
<div class="lesson-warning">⚠️ These 6 verbs cover 70% of everyday French conversations. Master these first!</div>
<div class="lesson-example">
<strong>Exemples :</strong><br>
Je vais faire les courses.
<button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">I'm going to do the shopping.</span><br>
Je veux un café mais je ne peux pas.
<button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">I want a coffee but I can't.</span>
</div>
  `,
  qcm: [
    {
      id: "9-1",
      type: "qcm",
      question: "'I am tired.' in French:",
      questionFr: "Traduisez : 'Je suis fatigué.'",
      options: ["Je suis fatigué.", "J'ai fatigué.", "Je fais fatigué.", "Je suis fatigue."],
      optionsEn: ["I am tired.", "I have tired.", "I do tired.", "I am tire."],
      correct: "Je suis fatigué.",
      correctEn: "I am tired.",
      explanation: "ÊTRE: Je suis = I am. For states, identity, emotions. NEVER 'j'ai fatigué'.",
      explanationFr: "ÊTRE: Je suis = je suis. Pour les états, l'identité, les émotions. JAMAIS 'j'ai fatigué'."
    },
    {
      id: "9-2",
      type: "qcm",
      question: "'I have a headache.' in French:",
      questionFr: "Traduisez : 'J'ai mal à la tête.'",
      options: ["J'ai mal à la tête.", "Je suis mal à la tête.", "J'ai tête mal.", "Je fais mal tête."],
      optionsEn: ["I have a headache.", "I am bad to the head.", "I have head bad.", "I do bad head."],
      correct: "J'ai mal à la tête.",
      correctEn: "I have a headache.",
      explanation: "AVOIR: J'ai = I have. J'ai mal à... = I have pain in / it hurts.",
      explanationFr: "AVOIR: J'ai = j'ai. J'ai mal à... = j'ai mal à..."
    },
    {
      id: "9-3",
      type: "qcm",
      question: "'We are going to the market.' in French:",
      questionFr: "Traduisez : 'Nous allons au marché.'",
      options: ["Nous allons au marché.", "Nous sommes au marché.", "Nous avons le marché.", "Nous faisons le marché."],
      optionsEn: ["We are going to the market.", "We are at the market.", "We have the market.", "We do the market."],
      correct: "Nous allons au marché.",
      correctEn: "We are going to the market.",
      explanation: "ALLER: Nous allons = we are going. Au = à + le (masculine).",
      explanationFr: "ALLER: Nous allons = nous allons. Au = à + le (masculin)."
    },
    {
      id: "9-4",
      type: "qcm",
      question: "'I do the housework.' in French:",
      questionFr: "Traduisez : 'Je fais le ménage.'",
      options: ["Je fais le ménage.", "Je suis le ménage.", "J'ai le ménage.", "Je vais le ménage."],
      optionsEn: ["I do the housework.", "I am the housework.", "I have the housework.", "I go the housework."],
      correct: "Je fais le ménage.",
      correctEn: "I do the housework.",
      explanation: "FAIRE: Je fais = I do / I make. Le ménage = housework.",
      explanationFr: "FAIRE: Je fais = je fais. Le ménage = le ménage."
    },
    {
      id: "9-5",
      type: "qcm",
      question: "'I want to go home.' in French:",
      questionFr: "Traduisez : 'Je veux rentrer à la maison.'",
      options: ["Je veux rentrer à la maison.", "Je suis vouloir rentrer.", "J'ai envie rentrer.", "Je peux rentrer."],
      optionsEn: ["I want to go home.", "I am want to go home.", "I feel like go home.", "I can go home."],
      correct: "Je veux rentrer à la maison.",
      correctEn: "I want to go home.",
      explanation: "VOULOIR: Je veux = I want. Followed by infinitive. Rentrer = to go home.",
      explanationFr: "VOULOIR: Je veux = je veux. Suivi d'un infinitif. Rentrer = rentrer."
    },
    {
      id: "9-6",
      type: "qcm",
      question: "'Can you help me?' in French:",
      questionFr: "Traduisez : 'Pouvez-vous m'aider ?'",
      options: ["Pouvez-vous m'aider ?", "Voulez-vous m'aider ?", "Faites-vous m'aider ?", "Allez-vous m'aider ?"],
      optionsEn: ["Can you help me?", "Do you want to help me?", "Do you make help me?", "Are you going to help me?"],
      correct: "Pouvez-vous m'aider ?",
      correctEn: "Can you help me?",
      explanation: "POUVOIR: Pouvez-vous ? = Can you? / Are you able to? M'aider = help me.",
      explanationFr: "POUVOIR: Pouvez-vous ? = pouvez-vous ? M'aider = m'aider."
    },
    {
      id: "9-7",
      type: "qcm",
      question: "'She is French.' in French:",
      questionFr: "Traduisez : 'Elle est française.'",
      options: ["Elle est française.", "Elle a française.", "Elle fait française.", "Elle suis française."],
      optionsEn: ["She is French.", "She has French.", "She does French.", "She am French."],
      correct: "Elle est française.",
      correctEn: "She is French.",
      explanation: "ÊTRE: Elle est = she is. Nationality adjectives are lowercase in French!",
      explanationFr: "ÊTRE: Elle est = elle est. Les adjectifs de nationalité sont en minuscules en français !"
    },
    {
      id: "9-8",
      type: "qcm",
      question: "'I have two cats.' in French:",
      questionFr: "Traduisez : 'J'ai deux chats.'",
      options: ["J'ai deux chats.", "Je suis deux chats.", "Je fais deux chats.", "Deux chats j'ai."],
      optionsEn: ["I have two cats.", "I am two cats.", "I do two cats.", "Two cats I have."],
      correct: "J'ai deux chats.",
      correctEn: "I have two cats.",
      explanation: "AVOIR: J'ai = I have. For possession, age, and many physical states.",
      explanationFr: "AVOIR: J'ai = j'ai. Pour la possession, l'âge et de nombreux états physiques."
    },
    {
      id: "9-9",
      type: "qcm",
      question: "'They can't come tonight.' in French:",
      questionFr: "Traduisez : 'Ils ne peuvent pas venir ce soir.'",
      options: ["Ils ne peuvent pas venir ce soir.", "Ils sont pas venir.", "Ils veulent pas ce soir.", "Ils ne font pas."],
      optionsEn: ["They can't come tonight.", "They are not come.", "They don't want tonight.", "They don't do."],
      correct: "Ils ne peuvent pas venir ce soir.",
      correctEn: "They can't come tonight.",
      explanation: "POUVOIR: Ils ne peuvent pas = they can't. Ne...pas = negative.",
      explanationFr: "POUVOIR: Ils ne peuvent pas = ils ne peuvent pas. Ne...pas = négation."
    },
    {
      id: "9-10",
      type: "qcm",
      question: "Which verb means 'to do / make'?",
      questionFr: "Quel verbe signifie 'to do / make' ?",
      options: ["Faire", "Être", "Avoir", "Aller"],
      optionsEn: ["To do/make", "To be", "To have", "To go"],
      correct: "Faire",
      correctEn: "To do/make",
      explanation: "Faire (*fair*) = to do or to make. Je fais = I do/make. One of the most versatile French verbs.",
      explanationFr: "Faire = faire. Je fais = je fais. L'un des verbes français les plus polyvalents."
    }
  ],
  libre: [
    {
      id: "9-l1",
      type: "libre",
      question: "Conjugate ÊTRE: 'She is...' (elle)",
      questionFr: "Conjuguez ÊTRE : 'She is...' (elle)",
      correct: "Elle est",
      correctEn: "She is",
      alternatives: [],
      explanation: "Être: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.",
      explanationFr: "Être: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont."
    },
    {
      id: "9-l2",
      type: "libre",
      question: "Conjugate AVOIR: 'We have...' (nous)",
      questionFr: "Conjuguez AVOIR : 'We have...' (nous)",
      correct: "Nous avons",
      correctEn: "We have",
      alternatives: [],
      explanation: "Avoir: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont.",
      explanationFr: "Avoir: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont."
    },
    {
      id: "9-l3",
      type: "libre",
      question: "Conjugate ALLER: 'You go...' (formal, vous)",
      questionFr: "Conjuguez ALLER : 'You go...' (formel, vous)",
      correct: "Vous allez",
      correctEn: "You go",
      alternatives: [],
      explanation: "Aller: je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont.",
      explanationFr: "Aller: je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont."
    },
    {
      id: "9-l4",
      type: "libre",
      question: "Translate: 'I want a coffee.'",
      questionFr: "Traduisez : 'Je veux un café.'",
      correct: "Je veux un café.",
      correctEn: "I want a coffee.",
      alternatives: [],
      explanation: "Vouloir: je veux. But je voudrais is more polite in a café!",
      explanationFr: "Vouloir: je veux. Mais je voudrais est plus poli dans un café !"
    },
    {
      id: "9-l5",
      type: "libre",
      question: "Translate: 'Can you repeat, please?'",
      questionFr: "Traduisez : 'Pouvez-vous répéter, s'il vous plaît ?'",
      correct: "Pouvez-vous répéter, s'il vous plaît ?",
      correctEn: "Can you repeat, please?",
      alternatives: [],
      explanation: "Pouvoir: Pouvez-vous = can you (formal). Essential phrase for language learners!",
      explanationFr: "Pouvoir: Pouvez-vous = pouvez-vous (formel). Phrase essentielle pour les apprenants !"
    },
    {
      id: "9-l6",
      type: "libre",
      question: "Conjugate FAIRE: 'He does...' (il)",
      questionFr: "Conjuguez FAIRE : 'He does...' (il)",
      correct: "Il fait",
      correctEn: "He does",
      alternatives: [],
      explanation: "Faire: je fais, tu fais, il/elle fait, nous faisons, vous faites, ils/elles font.",
      explanationFr: "Faire: je fais, tu fais, il/elle fait, nous faisons, vous faites, ils/elles font."
    },
    {
      id: "9-l7",
      type: "libre",
      question: "Translate: 'I'm going to do the shopping.'",
      questionFr: "Traduisez : 'Je vais faire les courses.'",
      correct: "Je vais faire les courses.",
      correctEn: "I'm going to do the shopping.",
      alternatives: [],
      explanation: "Aller + infinitive = near future. Je vais + faire = I'm going to do.",
      explanationFr: "Aller + infinitif = futur proche. Je vais + faire = je vais faire."
    },
    {
      id: "9-l8",
      type: "libre",
      question: "Complete: 'Je ___ besoin d'aide.' (avoir)",
      questionFr: "Complétez : 'Je ___ besoin d'aide.'",
      correct: "ai",
      correctEn: "have",
      alternatives: [],
      explanation: "Avoir besoin de = to need. J'ai besoin d'aide = I need help.",
      explanationFr: "Avoir besoin de = avoir besoin de. J'ai besoin d'aide = j'ai besoin d'aide."
    },
    {
      id: "9-l9",
      type: "libre",
      question: "Translate: 'They are very kind.'",
      questionFr: "Traduisez : 'Ils sont très gentils.'",
      correct: "Ils sont très gentils.",
      correctEn: "They are very kind.",
      alternatives: ["Elles sont très gentilles."],
      explanation: "ÊTRE: Ils/elles sont = they are. Gentils (m.pl.) / gentilles (f.pl.).",
      explanationFr: "ÊTRE: Ils/elles sont = ils/elles sont. Gentils (m.pl.) / gentilles (f.pl.)."
    },
    {
      id: "9-l10",
      type: "libre",
      question: "Complete: 'Je ___ aller à la pharmacie.' (devoir)",
      questionFr: "Complétez : 'Je ___ aller à la pharmacie.'",
      correct: "dois",
      correctEn: "must",
      alternatives: [],
      explanation: "Devoir: je dois = I must / I have to. Essential to know for daily life!",
      explanationFr: "Devoir: je dois = je dois. Essentiel à connaître pour la vie quotidienne !"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_09;
} else {
  window.LESSON_09 = LESSON_09;
}