// lesson-13.js — My Emotions ❤️ — être + adjectives
const LESSON_13 = {
  id: 13,
  title: "My Emotions ❤️ — être + adjectives",
  titleFr: "Mes émotions — être + adjectifs",
  objectiveEn: "Express how you feel using être + adjectives",
  objectiveFr: "Exprimer ses sentiments avec être + adjectifs",
  hintEn: "Use ÊTRE for emotions — NEVER 'j'ai fatigué', always 'je suis fatigué'!",
  hintFr: "Utilisez ÊTRE pour les émotions — JAMAIS 'j'ai fatigué', toujours 'je suis fatigué' !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>❤️ How do you feel? — Je suis + adjective</h4>
<table class="lesson-table">
<tr><th>French (m / f)</th><th>Phonetics</th><th>English</th></tr>
<tr><td>fatigué / fatiguée</td><td><em>*fa-tee-GAY*</em></td><td>tired</td></tr>
<tr><td>content / contente</td><td><em>*kon-TON*</em></td><td>happy / pleased</td></tr>
<tr><td>stressé / stressée</td><td><em>*stress-AY*</em></td><td>stressed</td></tr>
<tr><td>inquiet / inquiète</td><td><em>*an-kee-AY*</em></td><td>worried</td></tr>
<tr><td>motivé / motivée</td><td><em>*mo-tee-VAY*</em></td><td>motivated</td></tr>
<tr><td>triste</td><td><em>*TREEST*</em></td><td>sad</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>💬 Useful emotion phrases</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Je me sens bien / mal.</td><td>I feel good / bad.</td></tr>
<tr><td>Je suis un peu fatigué(e).</td><td>I'm a little tired.</td></tr>
<tr><td>Ça va mieux.</td><td>It's getting better.</td></tr>
</table>
</div>
<div class="lesson-warning">⚠️ Always use <strong>être</strong> for emotions: Je SUIS fatigué. Never "J'AI fatigué"!</div>
<div class="lesson-example">
Je suis fatigué mais content — j'ai fait beaucoup aujourd'hui ! <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">I'm tired but happy — I did a lot today!</span>
</div>
  `,
  qcm: [
    {
      id: "13-1",
      type: "qcm",
      question: "I am tired (man speaking) in French:",
      questionFr: "Je suis fatigué. (homme qui parle) en anglais :",
      options: ["Je suis fatigué.","J'ai fatigué.","Je fais fatigué.","Je me fatigue."],
      optionsEn: ["I am tired.","I have tired.","I do tired.","I tire myself."],
      correct: "Je suis fatigué.",
      correctEn: "I am tired.",
      explanation: "ÊTRE for emotions! Je suis fatigué. Woman: je suis fatiguée (add -e).",
      explanationFr: "ÊTRE pour les émotions ! Je suis fatigué. Femme: je suis fatiguée (ajouter -e)."
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
      questionFr: "Je suis stressé. en anglais :",
      options: ["Je suis stressé.","J'ai stressé.","Je stress.","Je suis de stress."],
      optionsEn: ["I am stressed.","I have stressed.","I stress.","I am of stress."],
      correct: "Je suis stressé.",
      correctEn: "I am stressed",
      explanation: "Je suis stressé (woman: stressée). Always être for emotions!",
      explanationFr: "Je suis stressé (femme: stressée). Toujours être pour les émotions !"
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
      explanation: "Inquiet / inquiète. Man: inquiet. Woman: inquiète.",
      explanationFr: "Inquiet / inquiète. Homme: inquiet. Femme: inquiète."
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
      questionFr: "Je suis un peu fatigué(e). en anglais :",
      options: ["Je suis un peu fatigué(e).","J'ai un peu fatigué.","Je peu fatigué.","Un peu je suis fatigué."],
      optionsEn: ["I'm a little tired.","I have a little tired.","I little tired.","A little I am tired."],
      correct: "Je suis un peu fatigué(e).",
      correctEn: "I'm a little tired",
      explanation: "Un peu = a little. Je suis = I am. Very natural French!",
      explanationFr: "Un peu = un peu. Je suis = je suis. Très naturel en français !"
    },
    {
      id: "13-8",
      type: "qcm",
      question: "It's getting better in French:",
      questionFr: "Ça va mieux. en anglais :",
      options: ["Ça va mieux.","Ça est mieux.","Je vais mieux.","Mieux ça va."],
      optionsEn: ["It's getting better.","It is better.","I go better.","Better it goes."],
      correct: "Ça va mieux.",
      correctEn: "It's getting better",
      explanation: "Ça va mieux = It's getting better / I'm feeling better. Very common!",
      explanationFr: "Ça va mieux = ça va mieux / je me sens mieux. Très courant !"
    },
    {
      id: "13-9",
      type: "qcm",
      question: "I am motivated (woman) in French:",
      questionFr: "Je suis motivée. (femme) en anglais :",
      options: ["Je suis motivée.","Je suis motivé.","J'ai motivée.","Je motivée."],
      optionsEn: ["I am motivated.","I am motivated (m).","I have motivated.","I motivated."],
      correct: "Je suis motivée.",
      correctEn: "I am motivated (woman)",
      explanation: "Motivé / motivée. Add -e for woman: motivée.",
      explanationFr: "Motivé / motivée. Ajouter -e pour femme: motivée."
    },
    {
      id: "13-10",
      type: "qcm",
      question: "Which is WRONG for emotions?",
      questionFr: "Lequel est FAUX pour les émotions ?",
      options: ["J'ai fatigué.","Je suis fatigué.","Je me sens mal.","Je suis content."],
      optionsEn: ["I have tired.","I am tired.","I feel bad.","I am happy."],
      correct: "J'ai fatigué.",
      correctEn: "I have tired (WRONG)",
      explanation: "J'ai fatigué is WRONG! Always use être: Je suis fatigué!",
      explanationFr: "J'ai fatigué est FAUX ! Toujours utiliser être: Je suis fatigué !"
    }
  ],
  libre: [
    {
      id: "13-l1",
      type: "libre",
      question: "Translate: I am tired.",
      questionFr: "Traduisez : Je suis fatigué.",
      correct: "Je suis fatigué.",
      correctEn: "I am tired.",
      alternatives: [],
      explanation: "Je suis fatigué — use être, not avoir!",
      explanationFr: "Je suis fatigué — utilisez être, pas avoir !"
    },
    {
      id: "13-l2",
      type: "libre",
      question: "How do you say I am happy (woman)?",
      questionFr: "Comment dit-on Je suis contente (femme) ?",
      correct: "Je suis contente.",
      correctEn: "I am happy (woman)",
      alternatives: [],
      explanation: "Je suis contente — add -e for feminine.",
      explanationFr: "Je suis contente — ajouter -e pour le féminin."
    },
    {
      id: "13-l3",
      type: "libre",
      question: "Translate: I am stressed.",
      questionFr: "Traduisez : Je suis stressé.",
      correct: "Je suis stressé.",
      correctEn: "I am stressed.",
      alternatives: [],
      explanation: "Je suis stressé — always être for emotions.",
      explanationFr: "Je suis stressé — toujours être pour les émotions."
    },
    {
      id: "13-l4",
      type: "libre",
      question: "Complete: Je suis ___ (worried, man).",
      questionFr: "Complétez : Je suis ___ (inquiet, homme).",
      correct: "inquiet",
      correctEn: "worried",
      alternatives: [],
      explanation: "Inquiet for man, inquiète for woman.",
      explanationFr: "Inquiet pour homme, inquiète pour femme."
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
      questionFr: "Traduisez : Ça va mieux.",
      correct: "Ça va mieux.",
      correctEn: "It's getting better.",
      alternatives: [],
      explanation: "Ça va mieux = I'm feeling better.",
      explanationFr: "Ça va mieux = je me sens mieux."
    },
    {
      id: "13-l8",
      type: "libre",
      question: "Complete: Je suis un peu ___ (tired).",
      questionFr: "Complétez : Je suis un peu ___ (fatigué).",
      correct: "fatigué",
      correctEn: "tired",
      alternatives: [],
      explanation: "Un peu = a little. Je suis un peu fatigué.",
      explanationFr: "Un peu = un peu. Je suis un peu fatigué."
    },
    {
      id: "13-l9",
      type: "libre",
      question: "Translate: I am motivated (man).",
      questionFr: "Traduisez : Je suis motivé.",
      correct: "Je suis motivé.",
      correctEn: "I am motivated (man)",
      alternatives: [],
      explanation: "Motivé for man, motivée for woman.",
      explanationFr: "Motivé pour homme, motivée pour femme."
    },
    {
      id: "13-l10",
      type: "libre",
      question: "What verb do you use for emotions?",
      questionFr: "Quel verbe utilisez-vous pour les émotions ?",
      correct: "être",
      correctEn: "to be",
      alternatives: ["Je suis","Être"],
      explanation: "Always use être (Je suis) for emotions, NEVER avoir!",
      explanationFr: "Toujours utiliser être (Je suis) pour les émotions, JAMAIS avoir !"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_13;
} else {
  window.LESSON_13 = LESSON_13;
}

