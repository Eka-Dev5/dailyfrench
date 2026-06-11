// lesson-14.js -- My Needs -- avoir + noun
const LESSON_14 = {
  id: 14,
  title: "My Needs -- avoir + noun",
  titleFr: "Mes besoins -- avoir + nom",
  objectiveEn: "Express hunger, thirst, tiredness and desires using avoir",
  objectiveFr: "Exprimer la faim, la soif, la fatigue et les desirs avec avoir",
  hintEn: "In French, hunger and thirst use AVOIR (to have), not etre!",
  hintFr: "En francais, la faim et la soif utilisent AVOIR, pas etre !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Expressing needs with AVOIR</h4>
<p>In French, hunger/thirst/sleep are expressed with <strong>avoir</strong> (to have) -- not etre!</p>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>J'ai faim</td><td><em>*zhay FAN*</em></td><td>I am hungry (lit: I have hunger)</td></tr>
<tr><td>J'ai soif</td><td><em>*zhay SWAF*</em></td><td>I am thirsty</td></tr>
<tr><td>J'ai sommeil</td><td><em>*zhay so-MAY*</em></td><td>I am sleepy</td></tr>
<tr><td>J'ai besoin de...</td><td><em>*zhay buh-ZWAN duh*</em></td><td>I need...</td></tr>
<tr><td>J'ai envie de...</td><td><em>*zhay on-VEE duh*</em></td><td>I feel like...</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Polite vs direct</h4>
<table class="lesson-table">
<tr><th>Direct</th><th>Polite</th></tr>
<tr><td>Je veux un cafe.</td><td>Je voudrais un cafe, s'il vous plait.</td></tr>
<tr><td>I want a coffee.</td><td>I would like a coffee, please.</td></tr>
</table>
</div>
<div class="lesson-warning">Je veux = I want (direct). Je voudrais = I would like (polite). Always use voudrais in shops and restaurants!</div>
<div class="lesson-example">
J'ai faim et j'ai envie de faire une omelette. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I'm hungry and I feel like making an omelette.</span>
</div>
  `,
  qcm: [
    {
      id: "14-1",
      type: "qcm",
      question: "I am hungry in French:",
      questionFr: "J'ai faim. en anglais :",
      options: ["J'ai faim.","Je suis faim.","J'ai famine.","Je fais faim."],
      optionsEn: ["I am hungry.","I am hunger.","I have famine.","I do hunger."],
      correct: "J'ai faim.",
      correctEn: "I am hungry.",
      explanation: "J'ai faim (zhay FAN) = I am hungry. Literally I have hunger. Always avoir!",
      explanationFr: "J'ai faim = j'ai faim. Litteralement j'ai la faim. Toujours avec avoir !"
    },
    {
      id: "14-2",
      type: "qcm",
      question: "I am thirsty in French:",
      questionFr: "J'ai soif. en anglais :",
      options: ["J'ai soif.","Je suis soif.","J'ai soife.","Je soif."],
      optionsEn: ["I am thirsty.","I am thirst.","I have soife.","I thirst."],
      correct: "J'ai soif.",
      correctEn: "I am thirsty.",
      explanation: "J'ai soif (zhay SWAF) = I am thirsty. Soif = thirst.",
      explanationFr: "J'ai soif = j'ai soif. Soif = soif."
    },
    {
      id: "14-3",
      type: "qcm",
      question: "I am sleepy in French:",
      questionFr: "J'ai sommeil. en anglais :",
      options: ["J'ai sommeil.","Je suis sommeil.","J'ai dormi.","Je me dors."],
      optionsEn: ["I am sleepy.","I am sleep.","I have slept.","I sleep myself."],
      correct: "J'ai sommeil.",
      correctEn: "I am sleepy.",
      explanation: "J'ai sommeil (zhay so-MAY) = I am sleepy. Literally I have sleepiness.",
      explanationFr: "J'ai sommeil = j'ai sommeil. Litteralement j'ai la somnolence."
    },
    {
      id: "14-4",
      type: "qcm",
      question: "I need to rest in French:",
      questionFr: "J'ai besoin de me reposer. en anglais :",
      options: ["J'ai besoin de me reposer.","Je besoin reposer.","J'ai need reposer.","J'ai besoin repose."],
      optionsEn: ["I need to rest.","I need rest.","I have need rest.","I need repose."],
      correct: "J'ai besoin de me reposer.",
      correctEn: "I need to rest.",
      explanation: "J'ai besoin de + infinitive = I need to. Me reposer = to rest (myself).",
      explanationFr: "J'ai besoin de + infinitif = j'ai besoin de. Me reposer = me reposer."
    },
    {
      id: "14-5",
      type: "qcm",
      question: "I feel like going for a walk in French:",
      questionFr: "J'ai envie de me promener. en anglais :",
      options: ["J'ai envie de me promener.","Je veux me promener.","J'ai envie promener.","Je me promene."],
      optionsEn: ["I feel like going for a walk.","I want to go for a walk.","I feel like walk.","I go for a walk."],
      correct: "J'ai envie de me promener.",
      correctEn: "I feel like going for a walk.",
      explanation: "J'ai envie de + infinitive = I feel like / I fancy. Me promener = to go for a walk.",
      explanationFr: "J'ai envie de + infinitif = j'ai envie de. Me promener = me promener."
    },
    {
      id: "14-6",
      type: "qcm",
      question: "The POLITE way to say I want a coffee in French:",
      questionFr: "La facon POLIE de dire Je veux un cafe :",
      options: ["Je voudrais un cafe, s'il vous plait.","Je veux un cafe.","Donnez-moi un cafe.","Un cafe !"],
      optionsEn: ["I would like a coffee, please.","I want a coffee.","Give me a coffee.","A coffee!"],
      correct: "Je voudrais un cafe, s'il vous plait.",
      correctEn: "I would like a coffee, please.",
      explanation: "Je voudrais (zhuh voo-DRAY) = I would like (conditional). Much more polite than je veux.",
      explanationFr: "Je voudrais = je voudrais (conditionnel). Beaucoup plus poli que je veux."
    },
    {
      id: "14-7",
      type: "qcm",
      question: "I need some rest. in French:",
      questionFr: "J'ai besoin de repos. en anglais :",
      options: ["J'ai besoin de repos.","Je besoin repos.","J'ai repos.","Je suis besoin repos."],
      optionsEn: ["I need some rest.","I need rest.","I have rest.","I am need rest."],
      correct: "J'ai besoin de repos.",
      correctEn: "I need some rest.",
      explanation: "J'ai besoin de = I need. Repos = rest (noun). De + noun works too.",
      explanationFr: "J'ai besoin de = j'ai besoin de. Repos = repos."
    },
    {
      id: "14-8",
      type: "qcm",
      question: "I don't feel like going out. in French:",
      questionFr: "Je n'ai pas envie de sortir. en anglais :",
      options: ["Je n'ai pas envie de sortir.","Je veux pas sortir.","J'ai pas envie.","Je ne veux pas."],
      optionsEn: ["I don't feel like going out.","I don't want to go out.","I don't feel like.","I don't want."],
      correct: "Je n'ai pas envie de sortir.",
      correctEn: "I don't feel like going out.",
      explanation: "Je n'ai pas envie de = I don't feel like. Negative: n'ai pas envie de.",
      explanationFr: "Je n'ai pas envie de = je n'ai pas envie de. Negation : n'ai pas envie de."
    },
    {
      id: "14-9",
      type: "qcm",
      question: "I need help. in French:",
      questionFr: "J'ai besoin d'aide. en anglais :",
      options: ["J'ai besoin d'aide.","Je besoin aide.","J'ai aide.","Je dois aide."],
      optionsEn: ["I need help.","I need help.","I have help.","I must help."],
      correct: "J'ai besoin d'aide.",
      correctEn: "I need help.",
      explanation: "J'ai besoin d'aide (buh-ZWAN daid) = I need help. D'aide = de + aide (elision).",
      explanationFr: "J'ai besoin d'aide = j'ai besoin d'aide. D'aide = de + aide."
    },
    {
      id: "14-10",
      type: "qcm",
      question: "Would you like some water? (polite) in French:",
      questionFr: "Voudriez-vous de l'eau ? (poli) en anglais :",
      options: ["Voudriez-vous de l'eau ?","Voulez-vous eau ?","Avez-vous soif ?","De l'eau vous plait ?"],
      optionsEn: ["Would you like some water?","Do you want water?","Are you thirsty?","Water please?"],
      correct: "Voudriez-vous de l'eau ?",
      correctEn: "Would you like some water?",
      explanation: "Voudriez-vous ? = Would you like? De l'eau = some water.",
      explanationFr: "Voudriez-vous ? = voudriez-vous ? De l'eau = de l'eau."
    }
  ],
  libre: [
    {
      id: "14-l1",
      type: "libre",
      question: "Translate: I am hungry.",
      questionFr: "Traduisez : J'ai faim.",
      correct: "J'ai faim.",
      correctEn: "I am hungry.",
      alternatives: [],
      explanation: "J'ai faim -- use avoir (have), not etre!",
      explanationFr: "J'ai faim -- utilisez avoir, pas etre !"
    },
    {
      id: "14-l2",
      type: "libre",
      question: "Translate: I am thirsty.",
      questionFr: "Traduisez : J'ai soif.",
      correct: "J'ai soif.",
      correctEn: "I am thirsty.",
      alternatives: [],
      explanation: "J'ai soif -- hunger and thirst both use avoir in French.",
      explanationFr: "J'ai soif -- la faim et la soif utilisent toutes les deux avoir."
    },
    {
      id: "14-l3",
      type: "libre",
      question: "How do you say I need to call the doctor?",
      questionFr: "Comment dit-on J'ai besoin d'appeler le medecin ?",
      correct: "J'ai besoin d'appeler le medecin.",
      correctEn: "I need to call the doctor.",
      alternatives: [],
      explanation: "J'ai besoin de + infinitive = I need to.",
      explanationFr: "J'ai besoin de + infinitif = j'ai besoin de."
    },
    {
      id: "14-l4",
      type: "libre",
      question: "Complete: J'ai ___ de dormir.",
      questionFr: "Completez : J'ai ___ de dormir.",
      correct: "besoin",
      correctEn: "need",
      alternatives: [],
      explanation: "J'ai besoin de dormir = I need to sleep.",
      explanationFr: "J'ai besoin de dormir = j'ai besoin de dormir."
    },
    {
      id: "14-l5",
      type: "libre",
      question: "Translate: I feel like a coffee.",
      questionFr: "Traduisez : J'ai envie d'un cafe.",
      correct: "J'ai envie d'un cafe.",
      correctEn: "I feel like a coffee.",
      alternatives: [],
      explanation: "J'ai envie de = I feel like. D'un = de + un.",
      explanationFr: "J'ai envie de = j'ai envie de. D'un = de + un."
    },
    {
      id: "14-l6",
      type: "libre",
      question: "How do you say I would like some bread, please?",
      questionFr: "Comment dit-on Je voudrais du pain, s'il vous plait ?",
      correct: "Je voudrais du pain, s'il vous plait.",
      correctEn: "I would like some bread, please.",
      alternatives: [],
      explanation: "Je voudrais = I would like (polite). Du pain = some bread.",
      explanationFr: "Je voudrais = je voudrais (poli). Du pain = du pain."
    },
    {
      id: "14-l7",
      type: "libre",
      question: "Complete: Je ___ pas envie de cuisiner ce soir.",
      questionFr: "Completez : Je ___ pas envie de cuisiner ce soir.",
      correct: "n'ai",
      correctEn: "don't have",
      alternatives: [],
      explanation: "Je n'ai pas envie de = I don't feel like. Negative with avoir.",
      explanationFr: "Je n'ai pas envie de = je n'ai pas envie de. Negation avec avoir."
    },
    {
      id: "14-l8",
      type: "libre",
      question: "Translate: I need some help.",
      questionFr: "Traduisez : J'ai besoin d'aide.",
      correct: "J'ai besoin d'aide.",
      correctEn: "I need some help.",
      alternatives: [],
      explanation: "J'ai besoin d'aide -- simple and direct.></tr>
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
