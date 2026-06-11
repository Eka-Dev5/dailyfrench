// lesson-13.js -- My Emotions -- etre + adjectives
const LESSON_13 = {
  id: 13,
  title: "My Emotions -- etre + adjectives",
  titleFr: "Mes emotions -- etre + adjectifs",
  objectiveEn: "Express how you feel using etre + adjectives",
  objectiveFr: "Exprimer ses sentiments avec etre + adjectifs",
  hintEn: "Use ETRE for emotions -- NEVER 'j'ai fatigue', always 'je suis fatigue'!",
  hintFr: "Utilisez ETRE pour les emotions -- JAMAIS 'j'ai fatigue', toujours 'je suis fatigue' !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>How do you feel? -- Je suis + adjective</h4>
<table class="lesson-table">
<tr><th>French (m / f)</th><th>Phonetics</th><th>English</th></tr>
<tr><td>fatigue / fatiguee</td><td><em>*fa-tee-GAY*</em></td><td>tired</td></tr>
<tr><td>content / contente</td><td><em>*kon-TON*</em></td><td>happy / pleased</td></tr>
<tr><td>stresse / stressee</td><td><em>*stress-AY*</em></td><td>stressed</td></tr>
<tr><td>inquiet / inquiete</td><td><em>*an-kee-AY*</em></td><td>worried</td></tr>
<tr><td>motive / motivee</td><td><em>*mo-tee-VAY*</em></td><td>motivated</td></tr>
<tr><td>triste</td><td><em>*TREEST*</em></td><td>sad</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Useful emotion phrases</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Je me sens bien / mal.</td><td>I feel good / bad.</td></tr>
<tr><td>Je suis un peu fatigue(e).</td><td>I'm a little tired.</td></tr>
<tr><td>Ca va mieux.</td><td>It's getting better.</td></tr>
</table>
</div>
<div class="lesson-warning">Always use <strong>etre</strong> for emotions: Je SUIS fatigue. Never "J'AI fatigue"!</div>
<div class="lesson-example">
Je suis fatigue mais content -- j'ai fait beaucoup aujourd'hui ! <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I'm tired but happy -- I did a lot today!</span>
</div>
  `,
  qcm: [
    {
      id: "13-1",
      type: "qcm",
      question: "I am tired (man speaking) in French:",
      questionFr: "Je suis fatigue. (homme qui parle) en anglais :",
      options: ["Je suis fatigue.","J'ai fatigue.","Je fais fatigue.","Je me fatigue."],
      optionsEn: ["I am tired.","I have tired.","I do tired.","I tire myself."],
      correct: "Je suis fatigue.",
      correctEn: "I am tired.",
      explanation: "ETRE for emotions! Je suis fatigue. Woman: je suis fatiguee (add -e).",
      explanationFr: "ETRE pour les emotions ! Je suis fatigue. Femme: je suis fatiguee (ajouter -e)."
    },
    {
      id: "13-2",
      type: "qcm",
      question: "I am happy (woman speaking) in French:",
      questionFr: "Je suis contente. (femme qui parle) en anglais :",
      options: ["Je suis contente.","Je suis content.","J'ai contente.","Je content."],
      optionsEn: ["I am happy.","I am happy (m).","I have happy.","I happy."],
      correct: "Je suis contente.",
      correctEn: "I am happy (woman)",
      explanation: "Content / contente. Man: je suis content. Woman: je suis contente (add -e).",
      explanationFr: "Content / contente. Homme: je suis content. Femme: je suis contente (ajouter -e)."
    },
    {
      id: "13-3",
      type: "qcm",
      question: "I am stressed in French:",
      questionFr: "Je suis stresse. en anglais :",
      options: ["Je suis stresse.","J'ai stresse.","Je stress.","Je suis de stress."],
      optionsEn: ["I am stressed.","I have stressed.","I stress.","I am of stress."],
      correct: "Je suis stresse.",
      correctEn: "I am stressed",
      explanation: "Je suis stresse (woman: stressee). Always etre for emotions!",
      explanationFr: "Je suis stresse (femme: stressee). Toujours etre pour les emotions !"
    },
    {
      id: "13-4",
      type: "qcm",
      question: "I am worried in French:",
      questionFr: "Je suis inquiet. en anglais :",
      options: ["Je suis inquiet.","J'ai inquiet.","Je suis d'inquiet.","Inquiet je suis."],
      optionsEn: ["I am worried.","I have worried.","I am of worried.","Worried I am."],
      correct: "Je suis inquiet.",
      correctEn: "I am worried",
      explanation: "Inquiet / inquiete. Man: inquiet. Woman: inquiete.",
      explanationFr: "Inquiet / inquiete. Homme: inquiet. Femme: inquiete."
    },
    {
      id: "13-5",
      type: "qcm",
      question: "I am sad in French:",
      questionFr: "Je suis triste. en anglais :",
      options: ["Je suis triste.","J'ai triste.","Je triste.","Je suis de triste."],
      optionsEn: ["I am sad.","I have sad.","I sad.","I am of sad."],
      correct: "Je suis triste.",
      correctEn: "I am sad",
      explanation: "Triste doesn't change (m/f). Je suis triste = I am sad.",
      explanationFr: "Triste ne change pas (m/f). Je suis triste = je suis triste."
    },
    {
      id: "13-6",
      type: "qcm",
      question: "I feel good in French:",
      questionFr: "Je me sens bien. en anglais :",
      options: ["Je me sens bien.","Je suis bien.","J'ai bien.","Je bien."],
      optionsEn: ["I feel good.","I am good.","I have good.","I good."],
      correct: "Je me sens bien.",
      correctEn: "I feel good",
      explanation: "Je me sens bien/mal = I feel good/bad. Sens = feel (from sentir).",
      explanationFr: "Je me sens bien/mal = je me sens bien/mal. Sens = sentir."
    },
    {
      id: "13-7",
      type: "qcm",
      question: "I'm a little tired in French:",
      questionFr: "Je suis un peu fatigue(e). en anglais :",
      options: ["Je suis un peu fatigue(e).","J'ai un peu fatigue.","Je peu fatigue.","Un peu je suis fatigue."],
      optionsEn: ["I'm a little tired.","I have a little tired.","I little tired.","A little I am tired."],
      correct: "Je suis un peu fatigue(e).",
      correctEn: "I'm a little tired",
      explanation: "Un peu = a little. Je suis = I am. Very natural French!",
      explanationFr: "Un peu = un peu. Je suis = je suis. Tres naturel en francais !"
    },
    {
      id: "13-8",
      type: "qcm",
      question: "It's getting better in French:",
      questionFr: "Ca va mieux. en anglais :",
      options: ["Ca va mieux.","Ca est mieux.","Je vais mieux.","Mieux ca va."],
      optionsEn: ["It's getting better.","It is better.","I go better.","Better it goes."],
      correct: "Ca va mieux.",
      correctEn: "It's getting better",
      explanation: "Ca va mieux = It's getting better / I'm feeling better. Very common!",
      explanationFr: "Ca va mieux = ca va mieux / je me sens mieux. Tres courant !"
    },
    {
      id: "13-9",
      type: "qcm",
      question: "I am motivated (woman) in French:",
      questionFr: "Je suis motivee. (femme) en anglais :",
      options: ["Je suis motivee.","Je suis motive.","J'ai motivee.","Je motivee."],
      optionsEn: ["I am motivated.","I am motivated (m).","I have motivated.","I motivated."],
      correct: "Je suis motivee.",
      correctEn: "I am motivated (woman)",
      explanation: "Motive / motivee. Add -e for woman: motivee.",
      explanationFr: "Motive / motivee. Ajouter -e pour femme: motivee."
    },
    {
      id: "13-10",
      type: "qcm",
      question: "Which is WRONG for emotions?",
      questionFr: "Lequel est FAUX pour les emotions ?",
      options: ["J'ai fatigue.","Je suis fatigue.","Je me sens mal.","Je suis content."],
      optionsEn: ["I have tired.","I am tired.","I feel bad.","I am happy."],
      correct: "J'ai fatigue.",
      correctEn: "I have tired (WRONG)",
      explanation: "J'ai fatigue is WRONG! Always use etre: Je suis fatigue!",
      explanationFr: "J'ai fatigue est FAUX ! Toujours utiliser etre: Je suis fatigue !"
    }
  ],
  libre: [
    {
      id: "13-l1",
      type: "libre",
      question: "Translate: I am tired.",
      questionFr: "Traduisez : Je suis fatigue.",
      correct: "Je suis fatigue.",
      correctEn: "I am tired.",
      alternatives: [],
      explanation: "Je suis fatigue -- use etre, not avoir!",
      explanationFr: "Je suis fatigue -- utilisez etre, pas avoir !"
    },
    {
      id: "13-l2",
      type: "libre",
      question: "How do you say I am happy (woman)?",
      questionFr: "Comment dit-on Je suis contente (femme) ?",
      correct: "Je suis contente.",
      correctEn: "I am happy (woman)",
      alternatives: [],
      explanation: "Je suis contente -- add -e for feminine.",
      explanationFr: "Je suis contente -- ajouter -e pour le feminin."
    },
    {
      id: "13-l3",
      type: "libre",
      question: "Translate: I am stressed.",
      questionFr: "Traduisez : Je suis stresse.",
      correct: "Je suis stresse.",
      correctEn: "I am stressed.",
      alternatives: [],
      explanation: "Je suis stresse -- always etre for emotions.",
      explanationFr: "Je suis stresse -- toujours etre pour les emotions."
    },
    {
      id: "13-l4",
      type: "libre",
      question: "Complete: Je suis ___ (worried, man).",
      questionFr: "Completez : Je suis ___ (inquiet, homme).",
      correct: "inquiet",
      correctEn: "worried",
      alternatives: [],
      explanation: "Inquiet for man, inquiete for woman.",
      explanationFr: "Inquiet pour homme, inquiete pour femme."
    },
    {
      id: "13-l5",
      type: "libre",
      question: "Translate: I feel bad.",
      questionFr: "Traduisez : Je me sens mal.",
      correct: "Je me sens mal.",
      correctEn: "I feel bad.",
      alternatives: [],
      explanation: "Je me sens bien/mal = I feel good/bad.",
      explanationFr: "Je me sens bien/mal = je me sens bien/mal."
    },
    {
      id: "13-l6",
      type: "libre",
      question: "How do you say I am sad (woman)?",
      questionFr: "Comment dit-on Je suis triste (femme) ?",
      correct: "Je suis triste.",
      correctEn: "I am sad",
      alternatives: [],
      explanation: "Triste doesn't change for gender.",
      explanationFr: "Triste ne change pas pour le genre."
    },
    {
      id: "13-l7",
      type: "libre",
      question: "Translate: It's getting better.",
      questionFr: "Traduisez : Ca va mieux.",
      correct: "Ca va mieux.",
      correctEn: "It's getting better.",
      alternatives: [],
      explanation: "Ca></tr>
<tr><td>stresse / stressee</td><td><em>*stress-AY*</em></td><td>stressed</td></tr>
<tr><td>inquiet / inquiete</td><td><em>*an-kee-AY*</em></td><td>worried</td></tr>
<tr><td>motive / motivee</td><td><em>*mo-tee-VAY*</em></td><td>motivated</td></tr>
<tr><td>triste</td><td><em>*TREEST*</em></td><td>sad</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Useful emotion phrases</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Je me sens bien / mal.</td><td>I feel good / bad.</td></tr>
<tr><td>Je suis un peu fatigue(e).</td><td>I'm a little tired.</td></tr>
<tr><td>Ca va mieux.</td><td>It's getting better.</td></tr>
</table>
</div>
<div class="lesson-warning">Always use <strong>etre</strong> for emotions: Je SUIS fatigue. Never "J'AI fatigue"!</div>
<div class="lesson-example">
Je suis fatigue mais content -- j'ai fait beaucoup aujourd'hui ! <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I'm tired but happy -- I did a lot today!</span>
</div>
  `,
  qcm: [
    {
      id: "13-1",
      type: "qcm",
      question: "I am tired (man speaking) in French:",
      questionFr: "Je suis fatigue. (homme qui parle) en anglais :",
      options: ["Je suis fatigue.","J'ai fatigue.","Je fais fatigue.","Je me fatigue."],
      optionsEn: ["I am tired.","I have tired.","I do tired.","I tire myself."],
      correct: "Je suis fatigue.",
      correctEn: "I am tired.",
      explanation: "ETRE for emotions! Je suis fatigue. Woman: je suis fatiguee (add -e).",
      explanationFr: "ETRE pour les emotions ! Je suis fatigue. Femme: je suis fatiguee (ajouter -e)."
    },
    {
      id: "13-2",
      type: "qcm",
      question: "I am happy (woman speaking) in French:",
      questionFr: "Je suis contente. (femme qui parle) en anglais :",
      options: ["Je suis contente.","Je suis content.","J'ai contente.","Je content."],
      optionsEn: ["I am happy.","I am happy (m).","I have happy.","I happy."],
      correct: "Je suis contente.",
      correctEn: "I am happy (woman)",
      explanation: "Content / contente. Man: je suis content. Woman: je suis contente (add -e).",
      explanationFr: "Content / contente. Homme: je suis content. Femme: je suis contente (ajouter -e)."
    },
    {
      id: "13-3",
      type: "qcm",
      question: "I am stressed in French:",
      questionFr: "Je suis stresse. en anglais :",
      options: ["Je suis stresse.","J'ai stresse.","Je stress.","Je suis de stress."],
      optionsEn: ["I am stressed.","I have stressed.","I stress.","I am of stress."],
      correct: "Je suis stresse.",
      correctEn: "I am stressed",
      explanation: "Je suis stresse (woman: stressee). Always etre for emotions!",
      explanationFr: "Je suis stresse (femme: stressee). Toujours etre pour les emotions !"
    },
    {
      id: "13-4",
      type: "qcm",
      question: "I am worried in French:",
      questionFr: "Je suis inquiet. en anglais :",
      options: ["Je suis inquiet.","J'ai inquiet.","Je suis d'inquiet.","Inquiet je suis."],
      optionsEn: ["I am worried.","I have worried.","I am of worried.","Worried I am."],
      correct: "Je suis inquiet.",
      correctEn: "I am worried",
      explanation: "Inquiet / inquiete. Man: inquiet. Woman: inquiete.",
      explanationFr: "Inquiet / inquiete. Homme: inquiet. Femme: inquiete."
    },
    {
      id: "13-5",
      type: "qcm",
      question: "I am sad in French:",
      questionFr: "Je suis triste. en anglais :",
      options: ["Je suis triste.","J'ai triste.","Je triste.","Je suis de triste."],
      optionsEn: ["I am sad.","I have sad.","I sad.","I am of sad."],
      correct: "Je suis triste.",
      correctEn: "I am sad",
      explanation: "Triste doesn't change (m/f). Je suis triste = I am sad.",
      explanationFr: "Triste ne change pas (m/f). Je suis triste = je suis triste."
    },
    {
      id: "13-6",
      type: "qcm",
      question: "I feel good in French:",
      questionFr: "Je me sens bien. en anglais :",
      options: ["Je me sens bien.","Je suis bien.","J'ai bien.","Je bien."],
      optionsEn: ["I feel good.","I am good.","I have good.","I good."],
      correct: "Je me sens bien.",
      correctEn: "I feel good",
      explanation: "Je me sens bien/mal = I feel good/bad. Sens = feel (from sentir).",
      explanationFr: "Je me sens bien/mal = je me sens bien/mal. Sens = sentir."
    },
    {
      id: "13-7",
      type: "qcm",
      question: "I'm a little tired in French:",
      questionFr: "Je suis un peu fatigue(e). en anglais :",
      options: ["Je suis un peu fatigue(e).","J'ai un peu fatigue.","Je peu fatigue.","Un peu je suis fatigue."],
      optionsEn: ["I'm a little tired.","I have a little tired.","I little tired.","A little I am tired."],
      correct: "Je suis un peu fatigue(e).",
      correctEn: "I'm a little tired",
      explanation: "Un peu = a little. Je suis = I am. Very natural French!",
      explanationFr: "Un peu = un peu. Je suis = je suis. Tres naturel en francais !"
    },
    {
      id: "13-8",
      type: "qcm",
      question: "It's getting better in French:",
      questionFr: "Ca va mieux. en anglais :",
      options: ["Ca va mieux.","Ca est mieux.","Je vais mieux.","Mieux ca va."],
      optionsEn: ["It's getting better.","It is better.","I go better.","Better it goes."],
      correct: "Ca va mieux.",
      correctEn: "It's getting better",
      explanation: "Ca va mieux = It's getting better / I'm feeling better. Very common!",
      explanationFr: "Ca va mieux = ca va mieux / je me sens mieux. Tres courant !"
    },
    {
      id: "13-9",
      type: "qcm",
      question: "I am motivated (woman) in French:",
      questionFr: "Je suis motivee. (femme) en anglais :",
      options: ["Je suis motivee.","Je suis motive.","J'ai motivee.","Je motivee."],
      optionsEn: ["I am motivated.","I am motivated (m).","I have motivated.","I motivated."],
      correct: "Je suis motivee.",
      correctEn: "I am motivated (woman)",
      explanation: "Motive / motivee. Add -e for woman: motivee.",
      explanationFr: "Motive / motivee. Ajouter -e pour femme: motivee."
    },
    {
      id: "13-10",
      type: "qcm",
      question: "Which is WRONG for emotions?",
      questionFr: "Lequel est FAUX pour les emotions ?",
      options: ["J'ai fatigue.","Je suis fatigue.","Je me sens mal.","Je suis content."],
      optionsEn: ["I have tired.","I am tired.","I feel bad.","I am happy."],
      correct: "J'ai fatigue.",
      correctEn: "I have tired (WRONG)",
      explanation: "J'ai fatigue is WRONG! Always use etre: Je suis fatigue!",
      explanationFr: "J'ai fatigue est FAUX ! Toujours utiliser etre: Je suis fatigue !"
    }
  ],
  libre: [
    {
      id: "13-l1",
      type: "libre",
      question: "Translate: I am tired.",
      questionFr: "Traduisez : Je suis fatigue.",
      correct: "Je suis fatigue.",
      correctEn: "I am tired.",
      alternatives: [],
      explanation: "Je suis fatigue -- use etre, not avoir!",
      explanationFr: "Je suis fatigue -- utilisez etre, pas avoir !"
    },
    {
      id: "13-l2",
      type: "libre",
      question: "How do you say I am happy (woman)?",
      questionFr: "Comment dit-on Je suis contente (femme) ?",
      correct: "Je suis contente.",
      correctEn: "I am happy (woman)",
      alternatives: [],
      explanation: "Je suis contente -- add -e for feminine.",
      explanationFr: "Je suis contente -- ajouter -e pour le feminin."
    },
    {
      id: "13-l3",
      type: "libre",
      question: "Translate: I am stressed.",
      questionFr: "Traduisez : Je suis stresse.",
      correct: "Je suis stresse.",
      correctEn: "I am stressed.",
      alternatives: [],
      explanation: "Je suis stresse -- always etre for emotions.",
      explanationFr: "Je suis stresse -- toujours etre pour les emotions."
    },
    {
      id: "13-l4",
      type: "libre",
      question: "Complete: Je suis ___ (worried, man).",
      questionFr: "Completez : Je suis ___ (inquiet, homme).",
      correct: "inquiet",
      correctEn: "worried",
      alternatives: [],
      explanation: "Inquiet for man, inquiete for woman.",
      explanationFr: "Inquiet pour homme, inquiete pour femme."
    },
    {
      id: "13-l5",
      type: "libre",
      question: "Translate: I feel bad.",
      questionFr: "Traduisez : Je me sens mal.",
      correct: "Je me sens mal.",
      correctEn: "I feel bad.",
      alternatives: [],
      explanation: "Je me sens bien/mal = I feel good/bad.",
      explanationFr: "Je me sens bien/mal = je me sens bien/mal."
    },
    {
      id: "13-l6",
      type: "libre",
      question: "How do you say I am sad (woman)?",
      questionFr: "Comment dit-on Je suis triste (femme) ?",
      correct: "Je suis triste.",
      correctEn: "I am sad",
      alternatives: [],
      explanation: "Triste doesn't change for gender.",
      explanationFr: "Triste ne change pas pour le genre."
    },
    {
      id: "13-l7",
      type: "libre",
      question: "Translate: It's getting better.",
      questionFr: "Traduisez : Ca va mieux.",
      correct: "Ca va mieux.",
      correctEn: "It's getting better.",
      alternatives: [],
      explanation: "Ca va mieux = I'm feeling better.",
      explanationFr: "Ca va mieux = je me sens mieux."
    },
    {
      id: "13-l8",
      type: "libre",
      question: "Complete: Je suis un peu ___ (tired).",
      questionFr: "Completez : Je suis un peu ___ (fatigue).",
      correct: "fatigue",
      correctEn: "tired",
      alternatives: [],
      explanation: "Un peu = a little. Je suis un peu fatigue.",
      explanationFr: "Un peu = un peu. Je suis un peu fatigue."
    },
    {
      id: "13-l9",
      type: "libre",
      question: "Translate: I am motivated (man).",
      questionFr: "Traduisez : Je suis motive.",
      correct: "Je suis motive.",
      correctEn: "I am motivated (man)",
      alternatives: [],
      explanation: "Motive for man, motivee for woman.",
      explanationFr: "Motive pour homme, motivee pour femme."
    },
    {
      id: "13-l10",
      type: "libre",
      question: "What verb do you use for emotions?",
      questionFr: "Quel verbe utilisez-vous pour les emotions ?",
      correct: "etre",
      correctEn: "to be",
      alternatives: ["Je suis","Etre"],
      explanation: "Always use etre (Je suis) for emotions, NEVER avoir!",
      explanationFr: "Toujours utiliser etre (Je suis) pour les emotions, JAMAIS avoir !"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_13;
} else {
  window.LESSON_13 = LESSON_13;
}
