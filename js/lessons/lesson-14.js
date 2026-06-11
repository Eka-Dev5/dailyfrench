// my-needs.js
const LESSON_14 = {
  id: 14,
  title: "My Needs",
  titleFr: "Mes besoins",
  objectiveEn: "Express hunger, thirst, tiredness and desires using avoir",
  objectiveFr: "Exprimer la faim, la soif, la fatigue et les désirs en utilisant avoir",
  hintEn: "In French, hunger and thirst use AVOIR (to have), not être!",
  hintFr: "En français, la faim et la soif utilisent AVOIR, pas être !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🍽️ Expressing needs with AVOIR</h4>
<p>In French, hunger/thirst/sleep are expressed with <strong>avoir</strong> (to have) — not être!</p>
<table class="lesson-table">
<thead>
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
</thead>
<tbody>
<tr><td class=\"\">J'ai faim<\/td><td><em>*zhay FAN*<\/em><\/td><td>I am hungry (lit: I have hunger)<\/td><\/tr>
<tr><td class=\"\">J'ai soif<\/td><td><em>*zhay SWAF*<\/em><\/td><td>I am thirsty<\/td><\/tr>
<tr><td class=\"\">J'ai sommeil<\/td><td><em>*zhay so-MAY*<\/em><\/td><td>I am sleepy<\/td><\/tr>
<tr><td class=\"\">J'ai besoin de...<\/td><td><em>*zhay buh-ZWAN duh*<\/em><\/td><td>I need...<\/td><\/tr>
<tr><td class=\"\">J'ai envie de...<\/td><td><em>*zhay on-VEE duh*<\/em><\/td><td>I feel like...<\/td><\/tr>
</tbody>
<\/table>
<\/div>
<div class="lesson-rule">
<h4>🎩 Polite vs direct</h4>
<table class="lesson-table">
<thead>
<tr><th>Direct</th><th>Polite</th></tr>
</thead>
<tbody>
<tr><td class=\"\">Je veux un café.<\/td><td>Je voudrais un café, s'il vous plaît.<\/td><\/tr>
<tr><td class=\"\">I want a coffee.<\/td><td>I would like a coffee, please.<\/td><\/tr>
</tbody>
<\/table>
<\/div>
<div class="lesson-example">
J'ai faim et j'ai envie de faire une omelette.
<button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">I'm hungry and I feel like making an omelette.</span>
</div>
  `,
  qcm: [
    {
      id: "14-1",
      type: "qcm",
      question: "'I am hungry' in French:",
      questionFr: "Traduisez : 'J'ai faim.'",
      options: ["J'ai faim.", "Je suis faim.", "J'ai famine.", "Je fais faim."],
      optionsEn: ["I am hungry.", "I am hunger (wrong)", "I have famine", "I do hunger"],
      correct: "J'ai faim.",
      correctEn: "I am hungry",
      explanation: "J'ai faim (*zhay FAN*) = I am hungry. Literally 'I have hunger'. Always avoir!",
      explanationFr: "J'ai faim = j'ai faim. Littéralement 'j'ai faim'. Toujours avoir !"
    },
    {
      id: "14-2",
      type: "qcm",
      question: "'I am thirsty' in French:",
      questionFr: "Traduisez : 'J'ai soif.'",
      options: ["J'ai soif.", "Je suis soif.", "J'ai soife.", "Je soif."],
      optionsEn: ["I am thirsty.", "I am thirst (wrong)", "I have thirst (wrong spelling)", "I thirst"],
      correct: "J'ai soif.",
      correctEn: "I am thirsty",
      explanation: "J'ai soif (*zhay SWAF*) = I am thirsty. Soif = thirst.",
      explanationFr: "J'ai soif = j'ai soif. Soif = soif."
    },
    {
      id: "14-3",
      type: "qcm",
      question: "'I am sleepy' in French:",
      questionFr: "Traduisez : 'J'ai sommeil.'",
      options: ["J'ai sommeil.", "Je suis sommeil.", "J'ai dormi.", "Je me dors."],
      optionsEn: ["I am sleepy.", "I am sleep (wrong)", "I slept", "I sleep (refl)"],
      correct: "J'ai sommeil.",
      correctEn: "I am sleepy",
      explanation: "J'ai sommeil (*zhay so-MAY*) = I am sleepy. Literally 'I have sleepiness'.",
      explanationFr: "J'ai sommeil = j'ai sommeil. Littéralement 'j'ai sommeil'."
    },
    {
      id: "14-4",
      type: "qcm",
      question: "'I need to rest' in French:",
      questionFr: "Traduisez : 'J'ai besoin de me reposer.'",
      options: ["J'ai besoin de me reposer.", "Je besoin reposer.", "J'ai need reposer.", "J'ai besoin repose."],
      optionsEn: ["I need to rest.", "I need rest (no de)", "I need (English) rest", "I need rest (noun)"],
      correct: "J'ai besoin de me reposer.",
      correctEn: "I need to rest.",
      explanation: "J'ai besoin de + infinitive = I need to. Me reposer = to rest (myself).",
      explanationFr: "J'ai besoin de + infinitif = j'ai besoin de. Me reposer = me reposer."
    },
    {
      id: "14-5",
      type: "qcm",
      question: "'I feel like going for a walk' in French:",
      questionFr: "Traduisez : 'J'ai envie de me promener.'",
      options: ["J'ai envie de me promener.", "Je veux me promener.", "J'ai envie promener.", "Je me promène."],
      optionsEn: ["I feel like going for a walk.", "I want to go for a walk.", "I feel like go for a walk (missing de)", "I go for a walk."],
      correct: "J'ai envie de me promener.",
      correctEn: "I feel like going for a walk.",
      explanation: "J'ai envie de + infinitive = I feel like / I fancy. Me promener = to go for a walk.",
      explanationFr: "J'ai envie de + infinitif = j'ai envie de. Me promener = me promener."
    },
    {
      id: "14-6",
      type: "qcm",
      question: "The POLITE way to say 'I want a coffee' in French:",
      questionFr: "La façon POLIE de dire 'Je veux un café' en français :",
      options: ["Je voudrais un café, s'il vous plaît.", "Je veux un café.", "Donnez-moi un café.", "Un café !"],
      optionsEn: ["I would like a coffee, please.", "I want a coffee.", "Give me a coffee.", "A coffee!"],
      correct: "Je voudrais un café, s'il vous plaît.",
      correctEn: "I would like a coffee, please.",
      explanation: "Je voudrais (*zhuh voo-DRAY*) = I would like (conditional). Much more polite than je veux.",
      explanationFr: "Je voudrais = je voudrais (conditionnel). Beaucoup plus poli que je veux."
    },
    {
      id: "14-7",
      type: "qcm",
      question: "'I need some rest.' in French:",
      questionFr: "Traduisez : 'J'ai besoin de repos.'",
      options: ["J'ai besoin de repos.", "Je besoin repos.", "J'ai repos.", "Je suis besoin repos."],
      optionsEn: ["I need some rest.", "I need rest (no avoir)", "I have rest", "I am need rest"],
      correct: "J'ai besoin de repos.",
      correctEn: "I need some rest.",
      explanation: "J'ai besoin de = I need. Repos = rest (noun). De + noun works too.",
      explanationFr: "J'ai besoin de = j'ai besoin de. Repos = repos. De + nom fonctionne aussi."
    },
    {
      id: "14-8",
      type: "qcm",
      question: "'I don't feel like going out.' in French:",
      questionFr: "Traduisez : 'Je n'ai pas envie de sortir.'",
      options: ["Je n'ai pas envie de sortir.", "Je veux pas sortir.", "J'ai pas envie.", "Je ne veux pas."],
      optionsEn: ["I don't feel like going out.", "I don't want to go out.", "I don't feel like (incomplete)", "I don't want to."],
      correct: "Je n'ai pas envie de sortir.",
      correctEn: "I don't feel like going out.",
      explanation: "Je n'ai pas envie de = I don't feel like. Negative: n'ai pas envie de.",
      explanationFr: "Je n'ai pas envie de = je n'ai pas envie de. Négation : n'ai pas envie de."
    },
    {
      id: "14-9",
      type: "qcm",
      question: "'I need help.' in French:",
      questionFr: "Traduisez : 'J'ai besoin d'aide.'",
      options: ["J'ai besoin d'aide.", "Je besoin aide.", "J'ai aide.", "Je dois aide."],
      optionsEn: ["I need help.", "I need help (no avoir)", "I have help", "I must help"],
      correct: "J'ai besoin d'aide.",
      correctEn: "I need help.",
      explanation: "J'ai besoin d'aide (*buh-ZWAN daid*) = I need help. D'aide = de + aide (elision).",
      explanationFr: "J'ai besoin d'aide = j'ai besoin d'aide. D'aide = de + aide (élision)."
    },
    {
      id: "14-10",
      type: "qcm",
      question: "'Would you like some water?' (polite) in French:",
      questionFr: "Comment dit-on 'Voudriez-vous de l'eau ?' (poli)",
      options: ["Voudriez-vous de l'eau ?", "Voulez-vous eau ?", "Avez-vous soif ?", "De l'eau vous plaît ?"],
      optionsEn: ["Would you like some water?", "Do you want water?", "Are you thirsty?", "Water please you?"],
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
      question: "Translate: 'I am hungry.'",
      questionFr: "Traduisez : 'J'ai faim.'",
      correct: "J'ai faim.",
      correctEn: "I am hungry.",
      alternatives: [],
      explanation: "J'ai faim — use avoir (have), not être!",
      explanationFr: "J'ai faim — utilisez avoir, pas être !"
    },
    {
      id: "14-l2",
      type: "libre",
      question: "Translate: 'I am thirsty.'",
      questionFr: "Traduisez : 'J'ai soif.'",
      correct: "J'ai soif.",
      correctEn: "I am thirsty.",
      alternatives: [],
      explanation: "J'ai soif — hunger and thirst both use avoir in French.",
      explanationFr: "J'ai soif — la faim et la soif utilisent toutes deux avoir en français."
    },
    {
      id: "14-l3",
      type: "libre",
      question: "How do you say 'I need to call the doctor'?",
      questionFr: "Comment dit-on 'J'ai besoin d'appeler le médecin' ?",
      correct: "J'ai besoin d'appeler le médecin.",
      correctEn: "I need to call the doctor.",
      alternatives: [],
      explanation: "J'ai besoin de + infinitive = I need to.",
      explanationFr: "J'ai besoin de + infinitif = j'ai besoin de."
    },
    {
      id: "14-l4",
      type: "libre",
      question: "Complete: 'J'ai ___ de dormir.'",
      questionFr: "Complétez : 'J'ai ___ de dormir.'",
      correct: "besoin",
      correctEn: "need",
      alternatives: [],
      explanation: "J'ai besoin de dormir = I need to sleep.",
      explanationFr: "J'ai besoin de dormir = j'ai besoin de dormir."
    },
    {
      id: "14-l5",
      type: "libre",
      question: "Translate: 'I feel like a coffee.'",
      questionFr: "Traduisez : 'J'ai envie d'un café.'",
      correct: "J'ai envie d'un café.",
      correctEn: "I feel like a coffee.",
      alternatives: [],
      explanation: "J'ai envie de = I feel like. D'un = de + un.",
      explanationFr: "J'ai envie de = j'ai envie de. D'un = de + un."
    },
    {
      id: "14-l6",
      type: "libre",
      question: "How do you say 'I would like some bread, please'?",
      questionFr: "Comment dit-on 'Je voudrais du pain, s'il vous plaît' ?",
      correct: "Je voudrais du pain, s'il vous plaît.",
      correctEn: "I would like some bread, please.",
      alternatives: [],
      explanation: "Je voudrais = I would like (polite). Du pain = some bread.",
      explanationFr: "Je voudrais = je voudrais (poli). Du pain = du pain."
    },
    {
      id: "14-l7",
      type: "libre",
      question: "Complete: 'Je ___ pas envie de cuisiner ce soir.'",
      questionFr: "Complétez : 'Je ___ pas envie de cuisiner ce soir.'",
      correct: "n'ai",
      correctEn: "don't have",
      alternatives: [],
      explanation: "Je n'ai pas envie de = I don't feel like. Negative with avoir.",
      explanationFr: "Je n'ai pas envie de = je n'ai pas envie de. Négation avec avoir."
    },
    {
      id: "14-l8",
      type: "libre",
      question: "Translate: 'I need some help.'",
      questionFr: "Traduisez : 'J'ai besoin d'aide.'",
      correct: "J'ai besoin d'aide.",
      correctEn: "I need some help.",
      alternatives: [],
      explanation: "J'ai besoin d'aide — simple and direct. Very useful phrase!",
      explanationFr: "J'ai besoin d'aide — simple et direct. Phrase très utile !"
    },
    {
      id: "14-l9",
      type: "libre",
      question: "What's the polite way to say 'I want'?",
      questionFr: "Quelle est la façon polie de dire 'Je veux' ?",
      correct: "Je voudrais",
      correctEn: "I would like",
      alternatives: [],
      explanation: "Je voudrais (conditional) = I would like. Much politer than je veux.",
      explanationFr: "Je voudrais (conditionnel) = je voudrais. Beaucoup plus poli que je veux."
    },
    {
      id: "14-l10",
      type: "libre",
      question: "Translate: 'I am not hungry.'",
      questionFr: "Traduisez : 'Je n'ai pas faim.'",
      correct: "Je n'ai pas faim.",
      correctEn: "I am not hungry.",
      alternatives: [],
      explanation: "Negative: Je n'ai pas faim. N'ai pas = have not.",
      explanationFr: "Négation : Je n'ai pas faim. N'ai pas = n'ai pas."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_14;
} else {
  window.LESSON_14 = LESSON_14;
}