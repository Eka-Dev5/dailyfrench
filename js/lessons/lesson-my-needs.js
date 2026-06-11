// lesson-my-needs.js
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
<thead><tr><th>French</th><th>Phonetics</th><th>English</th></tr></thead>
<tbody>
<tr><td>J'ai faim</td><td><em>*zhay FAN*</em></td><td>I am hungry (lit: I have hunger)</td></tr>
<tr><td>J'ai soif</td><td><em>*zhay SWAF*</em></td><td>I am thirsty</td></tr>
<tr><td>J'ai sommeil</td><td><em>*zhay so-MAY*</em></td><td>I am sleepy</td></tr>
<tr><td>J'ai besoin de...</td><td><em>*zhay buh-ZWAN duh*</em></td><td>I need...</td></tr>
<tr><td>J'ai envie de...</td><td><em>*zhay on-VEE duh*</em></td><td>I feel like...</td></tr>
</tbody>
</table>
</div>
<div class="lesson-rule">
<h4>🎩 Polite vs direct</h4>
<table class="lesson-table">
<thead><tr><th>Direct</th><th>Polite</th></tr></thead>
<tbody>
<tr><td>Je veux un café.</td><td>Je voudrais un café, s'il vous plaît.</td></tr>
<tr><td>I want a coffee.</td><td>I would like a coffee, please.</td></tr>
</tbody>
</table>
</div>
<div class="lesson-example">
J'ai faim et j'ai envie de faire une omelette. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">I'm hungry and I feel like making an omelette.</span>
</div>
  `,
  qcm: [
    {
      id: "14-1",
      type: "qcm",
      question: "'I am hungry' in French:",
      options: ["J'ai faim.", "Je suis faim.", "J'ai famine.", "Je fais faim."],
      correct: "J'ai faim.",
      explanation: "J'ai faim (*zhay FAN*) = I am hungry. Literally 'I have hunger'. Always avoir!",
      explanationFr: "J'ai faim = j'ai faim. Littéralement 'j'ai faim'. Toujours avoir !"
    },
    {
      id: "14-2",
      type: "qcm",
      question: "'I am thirsty' in French:",
      options: ["J'ai soif.", "Je suis soif.", "J'ai soife.", "Je soif."],
      correct: "J'ai soif.",
      explanation: "J'ai soif (*zhay SWAF*) = I am thirsty. Soif = thirst.",
      explanationFr: "J'ai soif = j'ai soif. Soif = soif."
    },
    {
      id: "14-3",
      type: "qcm",
      question: "'I am sleepy' in French:",
      options: ["J'ai sommeil.", "Je suis sommeil.", "J'ai dormi.", "Je me dors."],
      correct: "J'ai sommeil.",
      explanation: "J'ai sommeil (*zhay so-MAY*) = I am sleepy. Literally 'I have sleepiness'.",
      explanationFr: "J'ai sommeil = j'ai sommeil. Littéralement 'j'ai sommeil'."
    },
    {
      id: "14-4",
      type: "qcm",
      question: "'I need to rest' in French:",
      options: ["J'ai besoin de me reposer.", "Je besoin reposer.", "J'ai need reposer.", "J'ai besoin repose."],
      correct: "J'ai besoin de me reposer.",
      explanation: "J'ai besoin de + infinitive = I need to. Me reposer = to rest (myself).",
      explanationFr: "J'ai besoin de + infinitif = j'ai besoin de. Me reposer = me reposer."
    },
    {
      id: "14-5",
      type: "qcm",
      question: "'I feel like going for a walk' in French:",
      options: ["J'ai envie de me promener.", "Je veux me promener.", "J'ai envie promener.", "Je me promène."],
      correct: "J'ai envie de me promener.",
      explanation: "J'ai envie de + infinitive = I feel like / I fancy. Me promener = to go for a walk.",
      explanationFr: "J'ai envie de + infinitif = j'ai envie de. Me promener = me promener."
    },
    {
      id: "14-6",
      type: "qcm",
      question: "The POLITE way to say 'I want a coffee' in French:",
      options: ["Je voudrais un café, s'il vous plaît.", "Je veux un café.", "Donnez-moi un café.", "Un café !"],
      correct: "Je voudrais un café, s'il vous plaît.",
      explanation: "Je voudrais (*zhuh voo-DRAY*) = I would like (conditional). Much more polite than je veux.",
      explanationFr: "Je voudrais = je voudrais (conditionnel). Beaucoup plus poli que je veux."
    },
    {
      id: "14-7",
      type: "qcm",
      question: "'I need some rest.' in French:",
      options: ["J'ai besoin de repos.", "Je besoin repos.", "J'ai repos.", "Je suis besoin repos."],
      correct: "J'ai besoin de repos.",
      explanation: "J'ai besoin de = I need. Repos = rest (noun). De + noun works too.",
      explanationFr: "J'ai besoin de = j'ai besoin de. Repos = repos. De + nom fonctionne aussi."
    },
    {
      id: "14-8",
      type: "qcm",
      question: "'I don't feel like going out.' in French:",
      options: ["Je n'ai pas envie de sortir.", "Je veux pas sortir.", "J'ai pas envie.", "Je ne veux pas."],
      correct: "Je n'ai pas envie de sortir.",
      explanation: "Je n'ai pas envie de = I don't feel like. Negative: n'ai pas envie de.",
      explanationFr: "Je n'ai pas envie de = je n'ai pas envie de. Négation : n'ai pas envie de."
    },
    {
      id: "14-9",
      type: "qcm",
      question: "'I need help.' in French:",
      options: ["J'ai besoin d'aide.", "Je besoin aide.", "J'ai aide.", "Je dois aide."],
      correct: "J'ai besoin d'aide.",
      explanation: "J'ai besoin d'aide (*buh-ZWAN daid*) = I need help. D'aide = de + aide (elision).",
      explanationFr: "J'ai besoin d'aide = j'ai besoin d'aide. D'aide = de + aide (élision)."
    },
    {
      id: "14-10",
      type: "qcm",
      question: "'Would you like some water?' (polite) in French:",
      options: ["Voudriez-vous de l'eau ?", "Voulez-vous eau ?", "Avez-vous soif ?", "De l'eau vous plaît ?"],
      correct: "Voudriez-vous de l'eau ?",
      explanation: "Voudriez-vous ? = Would you like? De l'eau = some water.",
      explanationFr: "Voudriez-vous ? = voudriez-vous ? De l'eau = de l'eau."
    }
  ],
  libre: [
    {
      id: "14-l1",
      type: "libre",
      question: "Translate: 'I am hungry.'",
      correct: "J'ai faim.",
      alternatives: [],
      explanation: "J'ai faim — use avoir (have), not être!",
      explanationFr: "J'ai faim — utilisez avoir, pas être !"
    },
    {
      id: "14-l2",
      type: "libre",
      question: "Translate: 'I am thirsty.'",
      correct: "J'ai soif.",
      alternatives: [],
      explanation: "J'ai soif — hunger and thirst both use avoir in French.",
      explanationFr: "J'ai soif — la faim et la soif utilisent toutes deux avoir en français."
    },
    {
      id: "14-l3",
      type: "libre",
      question: "How do you say 'I need to call the doctor'?",
      correct: "J'ai besoin d'appeler le médecin.",
      alternatives: [],
      explanation: "J'ai besoin de + infinitive = I need to.",
      explanationFr: "J'ai besoin de + infinitif = j'ai besoin de."
    },
    {
      id: "14-l4",
      type: "libre",
      question: "Complete: 'J'ai ___ de dormir.'",
      correct: "besoin",
      alternatives: [],
      explanation: "J'ai besoin de dormir = I need to sleep.",
      explanationFr: "J'ai besoin de dormir = j'ai besoin de dormir."
    },
    {
      id: "14-l5",
      type: "libre",
      question: "Translate: 'I feel like a coffee.'",
      correct: "J'ai envie d'un café.",
      alternatives: [],
      explanation: "J'ai envie de = I feel like. D'un = de + un.",
      explanationFr: "J'ai envie de = j'ai envie de. D'un = de + un."
    },
    {
      id: "14-l6",
      type: "libre",
      question: "How do you say 'I would like some bread, please'?",
      correct: "Je voudrais du pain, s'il vous plaît.",
      alternatives: [],
      explanation: "Je voudrais = I would like (polite). Du pain = some bread.",
      explanationFr: "Je voudrais = je voudrais (poli). Du pain = du pain."
    },
    {
      id: "14-l7",
      type: "libre",
      question: "Complete: 'Je ___ pas envie de cuisiner ce soir.'",
      correct: "n'ai",
      alternatives: [],
      explanation: "Je n'ai pas envie de = I don't feel like. Negative with avoir.",
      explanationFr: "Je n'ai pas envie de = je n'ai pas envie de. Négation avec avoir."
    },
    {
      id: "14-l8",
      type: "libre",
      question: "Translate: 'I need some help.'",
      correct: "J'ai besoin d'aide.",
      alternatives: [],
      explanation: "J'ai besoin d'aide — simple and direct. Very useful phrase!",
      explanationFr: "J'ai besoin d'aide — simple et direct. Phrase très utile !"
    },
    {
      id: "14-l9",
      type: "libre",
      question: "What's the polite way to say 'I want'?",
      correct: "Je voudrais",
      alternatives: [],
      explanation: "Je voudrais (conditional) = I would like. Much politer than je veux.",
      explanationFr: "Je voudrais (conditionnel) = je voudrais. Beaucoup plus poli que je veux."
    },
    {
      id: "14-l10",
      type: "libre",
      question: "Translate: 'I am not hungry.'",
      correct: "Je n'ai pas faim.",
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