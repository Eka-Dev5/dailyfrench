// lesson-14.js -- Physical Needs
const LESSON_14 = {
  id: 14,
  title: "Physical Needs",
  titleFr: "Les Besoins Physiques",
  objectiveEn: "Express hunger, thirst, sleepiness and other physical needs",
  objectiveFr: "Exprimer la faim, la soif, le sommeil et autres besoins physiques",
  hintEn: "Use avoir (not etre) with physical needs: J'ai faim = I am hungry (literally I have hunger)",
  hintFr: "Utilisez avoir (pas etre) avec les besoins physiques : J'ai faim = j'ai faim (litteralement j'ai faim)",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Expressing physical needs</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>J'ai faim</td><td><em>*zhay FAN*</em></td><td>I am hungry <!-- *eye am HUN-gree* --></td></tr>
<tr><td>J'ai soif</td><td><em>*zhay SWAF*</em></td><td>I am thirsty <!-- *eye am THUR-stee* --></td></tr>
<tr><td>J'ai sommeil</td><td><em>*zhay so-MAY*</em></td><td>I am sleepy <!-- *eye am SLEE-pee* --></td></tr>
<tr><td>J'ai besoin de...</td><td><em>*zhay buh-ZWAN duh...*</em></td><td>I need... <!-- *eye need...* --></td></tr>
<tr><td>J'ai envie de...</td><td><em>*zhay on-VEE duh...*</em></td><td>I feel like... / I want... <!-- *eye feel lyk... / eye wont...* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Expressing wants (polite vs direct)</h4>
<table class="lesson-table">
<tr><th>Direct</th><th>Polite</th></tr>
<tr><td>Je veux un cafe.</td><td>Je voudrais un cafe, s'il vous plait.</td></tr>
<tr><td>I want a coffee.</td><td>I would like a coffee, please.</td></tr>
</table>
</div>
<div class="lesson-warning">In French, physical states use <strong>avoir</strong>: <em>J'ai faim</em> (I have hunger) = I am hungry. This is very different from English!</div>
<div class="lesson-example">
-- Tu as faim ? On mange quelque chose ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Are you hungry? Shall we eat something?</span><br>
-- Oui, j'ai tres faim. Je voudrais un sandwich, s'il vous plait. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Yes, I am very hungry. I would like a sandwich, please.</span>
</div>
  `,
  qcm: [
    {
      id: "14-1",
      type: "qcm",
      question: "I am hungry in French:",
      questionFr: "J'ai faim en anglais :",
      options: ["J'ai faim","Je suis faim","J'ai faims","Je mange faim"],
      optionsEn: ["I am hungry","I am hungry (wrong)","I have hungers","I eat hunger"],
      correct: "J'ai faim",
      correctEn: "I am hungry",
      explanation: "J'ai faim (zhay FAN) = I am hungry. Literally 'I have hunger'.",
      explanationFr: "J'ai faim = j'ai faim. Litteralement 'j'ai faim'."
    },
    {
      id: "14-2",
      type: "qcm",
      question: "I am thirsty in French:",
      questionFr: "J'ai soif en anglais :",
      options: ["J'ai soif","Je suis soif","J'ai soifs","Je bois soif"],
      optionsEn: ["I am thirsty","I am thirsty (wrong)","I have thirsts","I drink thirst"],
      correct: "J'ai soif",
      correctEn: "I am thirsty",
      explanation: "J'ai soif (zhay SWAF) = I am thirsty. Literally 'I have thirst'.",
      explanationFr: "J'ai soif = j'ai soif. Litteralement 'j'ai soif'."
    },
    {
      id: "14-3",
      type: "qcm",
      question: "I am sleepy in French:",
      questionFr: "J'ai sommeil en anglais :",
      options: ["J'ai sommeil","Je suis sommeil","J'ai sommeils","Je dors sommeil"],
      optionsEn: ["I am sleepy","I am sleepy (wrong)","I have sleepies","I sleep sleep"],
      correct: "J'ai sommeil",
      correctEn: "I am sleepy",
      explanation: "J'ai sommeil (zhay so-MAY) = I am sleepy. Literally 'I have sleepiness'.",
      explanationFr: "J'ai sommeil = j'ai sommeil. Litteralement 'j'ai sommeil'."
    },
    {
      id: "14-4",
      type: "qcm",
      question: "I need... in French:",
      questionFr: "J'ai besoin de... en anglais :",
      options: ["J'ai besoin de...","Je besoin de...","J'ai besoin...","Je suis besoin de..."],
      optionsEn: ["I need...","I need of... (wrong)","I have need...","I am need of..."],
      correct: "J'ai besoin de...",
      correctEn: "I need...",
      explanation: "J'ai besoin de (zhay buh-ZWAN duh) = I need. Always followed by de.",
      explanationFr: "J'ai besoin de = j'ai besoin de. Toujours suivi de de."
    },
    {
      id: "14-5",
      type: "qcm",
      question: "I feel like... / I want... in French:",
      questionFr: "J'ai envie de... en anglais :",
      options: ["J'ai envie de...","Je envie de...","J'ai envie...","Je suis envie de..."],
      optionsEn: ["I feel like... / I want...","I want of... (wrong)","I have want...","I am want of..."],
      correct: "J'ai envie de...",
      correctEn: "I feel like... / I want...",
      explanation: "J'ai envie de (zhay on-VEE duh) = I feel like / I want. More natural than Je veux.",
      explanationFr: "J'ai envie de = j'ai envie de. Plus naturel que Je veux."
    },
    {
      id: "14-6",
      type: "qcm",
      question: "I want a coffee. (direct) in French:",
      questionFr: "Je veux un cafe. en anglais :",
      options: ["Je veux un cafe.","Je voudrais un cafe.","J'ai envie d'un cafe.","J'ai besoin d'un cafe."],
      optionsEn: ["I want a coffee.","I would like a coffee.","I feel like a coffee.","I need a coffee."],
      correct: "Je veux un cafe.",
      correctEn: "I want a coffee.",
      explanation: "Je veux (zhuh vuh) = I want. Direct but acceptable with friends.",
      explanationFr: "Je veux = je veux. Direct mais acceptable avec des amis."
    },
    {
      id: "14-7",
      type: "qcm",
      question: "I would like a coffee, please. (polite) in French:",
      questionFr: "Je voudrais un cafe, s'il vous plait. en anglais :",
      options: ["Je voudrais un cafe, s'il vous plait.","Je veux un cafe.","J'ai envie d'un cafe.","Un cafe, s'il vous plait."],
      optionsEn: ["I would like a coffee, please.","I want a coffee.","I feel like a coffee.","A coffee, please."],
      correct: "Je voudrais un cafe, s'il vous plait.",
      correctEn: "I would like a coffee, please.",
      explanation: "Je voudrais (zhuh voo-DRAY) = I would like. Much more polite than Je veux.",
      explanationFr: "Je voudrais = je voudrais. Beaucoup plus poli que Je veux."
    },
    {
      id: "14-8",
      type: "qcm",
      question: "Are you hungry? in French:",
      questionFr: "Tu as faim ? en anglais :",
      options: ["Tu as faim ?","Tu es faim ?","As-tu faim ?","Faim tu as ?"],
      optionsEn: ["Are you hungry?","Are you hungry? (wrong)","Do you have hunger?","Hunger you have?"],
      correct: "Tu as faim ?",
      correctEn: "Are you hungry?",
      explanation: "Tu as faim ? = Are you hungry? (informal). Vous avez faim ? = formal.",
      explanationFr: "Tu as faim ? = tu as faim (informel). Vous avez faim ? = formel."
    },
    {
      id: "14-9",
      type: "qcm",
      question: "I am very hungry. in French:",
      questionFr: "J'ai tres faim. en anglais :",
      options: ["J'ai tres faim.","Je suis tres faim.","J'ai beaucoup faim.","Je mange tres faim."],
      optionsEn: ["I am very hungry.","I am very hungry (wrong)","I have much hunger.","I eat very hunger."],
      correct: "J'ai tres faim.",
      correctEn: "I am very hungry.",
      explanation: "J'ai tres faim = I am very hungry. Tres = very.",
      explanationFr: "J'ai tres faim = j'ai tres faim. Tres = tres."
    },
    {
      id: "14-10",
      type: "qcm",
      question: "I need water. in French:",
      questionFr: "J'ai besoin d'eau. en anglais :",
      options: ["J'ai besoin d'eau.","Je besoin eau.","J'ai envie d'eau.","Je veux eau."],
      optionsEn: ["I need water.","I need water (wrong)","I feel like water.","I want water."],
      correct: "J'ai besoin d'eau.",
      correctEn: "I need water.",
      explanation: "J'ai besoin d'eau = I need water. De + eau = d'eau (contraction).",
      explanationFr: "J'ai besoin d'eau = j'ai besoin d'eau. De + eau = d'eau (contraction)."
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
      explanation: "J'ai faim = I am hungry. Literally 'I have hunger'.",
      explanationFr: "J'ai faim = j'ai faim. Litteralement 'j'ai faim'."
    },
    {
      id: "14-l2",
      type: "libre",
      question: "How do you say I am thirsty?",
      questionFr: "Comment dit-on J'ai soif ?",
      correct: "J'ai soif.",
      correctEn: "I am thirsty.",
      alternatives: [],
      explanation: "J'ai soif = I am thirsty. Literally 'I have thirst'.",
      explanationFr: "J'ai soif = j'ai soif. Litteralement 'j'ai soif'."
    },
    {
      id: "14-l3",
      type: "libre",
      question: "Translate: I would like a coffee, please.",
      questionFr: "Traduisez : Je voudrais un cafe, s'il vous plait.",
      correct: "Je voudrais un cafe, s'il vous plait.",
      correctEn: "I would like a coffee, please.",
      alternatives: [],
      explanation: "Je voudrais = I would like. Much more polite than Je veux.",
      explanationFr: "Je voudrais = je voudrais. Beaucoup plus poli que Je veux."
    },
    {
      id: "14-l4",
      type: "libre",
      question: "Complete: J'ai ___ de dormir.",
      questionFr: "Completez : J'ai ___ de dormir.",
      correct: "envie",
      correctEn: "feel like",
      alternatives: ["besoin"],
      explanation: "J'ai envie de dormir = I feel like sleeping. J'ai besoin de = I need to.",
      explanationFr: "J'ai envie de dormir = j'ai envie de dormir. J'ai besoin de = j'ai besoin de."
    },
    {
      id: "14-l5",
      type: "libre",
      question: "How do you say I am sleepy?",
      questionFr: "Comment dit-on J'ai sommeil ?",
      correct: "J'ai sommeil.",
      correctEn: "I am sleepy.",
      alternatives: [],
      explanation: "J'ai sommeil = I am sleepy. Literally 'I have sleepiness'.",
      explanationFr: "J'ai sommeil = j'ai sommeil. Litteralement 'j'ai sommeil'."
    },
    {
      id: "14-l6",
      type: "libre",
      question: "Translate: I need help.",
      questionFr: "Traduisez : J'ai besoin d'aide.",
      correct: "J'ai besoin d'aide.",
      correctEn: "I need help.",
      alternatives: [],
      explanation: "J'ai besoin d'aide = I need help. De + aide = d'aide.",
      explanationFr: "J'ai besoin d'aide = j'ai besoin d'aide. De + aide = d'aide."
    },
    {
      id: "14-l7",
      type: "libre",
      question: "Complete: ___ veux un cafe.",
      questionFr: "Completez : ___ veux un cafe.",
      correct: "Je",
      correctEn: "I",
      alternatives: [],
      explanation: "Je veux = I want. Direct but acceptable with friends.",
      explanationFr: "Je veux = je veux. Direct mais acceptable avec des amis."
    },
    {
      id: "14-l8",
      type: "libre",
      question: "How do you say I feel like eating?",
      questionFr: "Comment dit-on J'ai envie de manger ?",
      correct: "J'ai envie de manger.",
      correctEn: "I feel like eating.",
      alternatives: [],
      explanation: "J'ai envie de manger = I feel like eating. Envie = desire/feel like.",
      explanationFr: "J'ai envie de manger = j'ai envie de manger. Envie = envie."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_14;
} else {
  window.LESSON_14 = LESSON_14;
}
