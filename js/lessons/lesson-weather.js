// lesson-weather.js
const LESSON_08 = {
  id: 8,
  title: "Weather",
  titleFr: "Météo",
  objectiveEn: "Talk about the weather, understand forecasts",
  objectiveFr: "Parler de la météo, comprendre les prévisions",
  hintEn: "Il fait + adjective for general weather. Il pleut/neige use verbs directly.",
  hintFr: "Il fait + adjectif pour la météo générale. Il pleut/neige utilisent directement les verbes.",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>☀️ Weather expressions</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>Il fait beau.</td><td>The weather is nice.</td></tr>
<tr><td>Il fait chaud / froid.</td><td>It's hot / cold.</td></tr>
<tr><td>Il pleut.</td><td>It's raining.</td></tr>
<tr><td>Il neige.</td><td>It's snowing.</td></tr>
<tr><td>Il y a du vent.</td><td>It's windy.</td></tr>
<tr><td>Il y a du brouillard.</td><td>It's foggy.</td></tr>
</tbody>
</table>
</div>
<div class="lesson-rule">
<h4>🌡️ Temperature & seasons</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>Il fait 25 degrés.</td><td>It's 25 degrees.</td></tr>
<tr><td>le printemps / l'été / l'automne / l'hiver</td><td>spring / summer / autumn / winter</td></tr>
</tbody>
</table>
</div>
<div class="lesson-example">
<strong>Exemple :</strong> Il fait beau aujourd'hui mais demain il va pleuvoir. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">The weather is nice today but tomorrow it's going to rain.</span>
</div>
  `,
  qcm: [
    {
      id: "8-1",
      type: "qcm",
      question: "'It's raining.' in French:",
      options: ["Il pleut.", "Il fait de pluie.", "Il pleuve.", "C'est la pluie."],
      correct: "Il pleut.",
      explanation: "Il pleut (*eel pluh*) = It's raining. Irregular verb pleuvoir. Very useful in France!",
      explanationFr: "Il pleut = il pleut. Verbe irrégulier pleuvoir. Très utile en France !"
    },
    {
      id: "8-2",
      type: "qcm",
      question: "'The weather is nice.' in French:",
      options: ["Il fait beau.", "Il fait bien.", "C'est beau dehors.", "Le temps est beau."],
      correct: "Il fait beau.",
      explanation: "Il fait beau (*eel fay BOH*) = The weather is nice. Il fait + adjective for weather.",
      explanationFr: "Il fait beau = il fait beau. Il fait + adjectif pour la météo."
    },
    {
      id: "8-3",
      type: "qcm",
      question: "'It's cold.' in French:",
      options: ["Il fait froid.", "Il est froid.", "C'est froid dehors.", "Le temps est froid."],
      correct: "Il fait froid.",
      explanation: "Il fait froid (*eel fay FRWAH*) = It's cold. Il fait chaud = It's hot.",
      explanationFr: "Il fait froid = il fait froid. Il fait chaud = il fait chaud."
    },
    {
      id: "8-4",
      type: "qcm",
      question: "'It's snowing.' in French:",
      options: ["Il neige.", "Il fait neige.", "La neige tombe.", "Il snows."],
      correct: "Il neige.",
      explanation: "Il neige (*eel nezh*) = It's snowing. La neige = snow.",
      explanationFr: "Il neige = il neige. La neige = la neige."
    },
    {
      id: "8-5",
      type: "qcm",
      question: "'It's windy.' in French:",
      options: ["Il y a du vent.", "Il fait vent.", "Il vente.", "Le vent est fort."],
      correct: "Il y a du vent.",
      explanation: "Il y a du vent (*eel ee a du VON*) = It's windy. Du vent = some wind.",
      explanationFr: "Il y a du vent = il y a du vent. Du vent = du vent."
    },
    {
      id: "8-6",
      type: "qcm",
      question: "'What's the weather like today?' in French:",
      options: ["Quel temps fait-il aujourd'hui ?", "Comment est le temps ?", "C'est quoi le temps ?", "Le temps aujourd'hui ?"],
      correct: "Quel temps fait-il aujourd'hui ?",
      explanation: "Quel temps fait-il ? (*kell ton fay-TEEL*) = What's the weather like? Classic question.",
      explanationFr: "Quel temps fait-il ? = quel temps fait-il ? Question classique."
    },
    {
      id: "8-7",
      type: "qcm",
      question: "'It's foggy.' in French:",
      options: ["Il y a du brouillard.", "Il fait sombre.", "Il y a brouillard.", "Le brouillard est là."],
      correct: "Il y a du brouillard.",
      explanation: "Il y a du brouillard (*broo-ee-YARD*) = It's foggy. Brouillard = fog.",
      explanationFr: "Il y a du brouillard = il y a du brouillard. Brouillard = brouillard."
    },
    {
      id: "8-8",
      type: "qcm",
      question: "'It's 28 degrees.' in French:",
      options: ["Il fait 28 degrés.", "C'est 28 degrés.", "Il y a 28 degrés.", "28 degrés il fait."],
      correct: "Il fait 28 degrés.",
      explanation: "Il fait X degrés = It's X degrees. The most natural French weather temperature phrase.",
      explanationFr: "Il fait X degrés = il fait X degrés. La phrase météo la plus naturelle en français."
    },
    {
      id: "8-9",
      type: "qcm",
      question: "'It's going to rain tomorrow.' in French:",
      options: ["Il va pleuvoir demain.", "Il pleuvra demain.", "Demain il pleut.", "Il va pleuvoir après."],
      correct: "Il va pleuvoir demain.",
      explanation: "Il va + infinitive = it's going to. Pleuvoir = to rain. Near future for forecasts!",
      explanationFr: "Il va + infinitif = il va. Pleuvoir = pleuvoir. Futur proche pour les prévisions !"
    },
    {
      id: "8-10",
      type: "qcm",
      question: "'Spring' in French:",
      options: ["Le printemps", "L'été", "L'automne", "L'hiver"],
      correct: "Le printemps",
      explanation: "Le printemps (*pran-TON*) = spring. L'été = summer. L'automne = autumn. L'hiver = winter.",
      explanationFr: "Le printemps = le printemps. L'été = l'été. L'automne = l'automne. L'hiver = l'hiver."
    }
  ],
  libre: [
    {
      id: "8-l1",
      type: "libre",
      question: "Translate: 'The weather is nice today.'",
      correct: "Il fait beau aujourd'hui.",
      alternatives: [],
      explanation: "Il fait beau = nice weather. Aujourd'hui = today.",
      explanationFr: "Il fait beau = il fait beau. Aujourd'hui = aujourd'hui."
    },
    {
      id: "8-l2",
      type: "libre",
      question: "How do you say 'It's raining'?",
      correct: "Il pleut.",
      alternatives: [],
      explanation: "Il pleut from the irregular verb pleuvoir. Very common in France!",
      explanationFr: "Il pleut du verbe irrégulier pleuvoir. Très courant en France !"
    },
    {
      id: "8-l3",
      type: "libre",
      question: "Complete: 'Il fait ___ aujourd'hui, vous ne trouvez pas ?'",
      correct: "beau",
      alternatives: ["chaud", "froid"],
      explanation: "Il fait beau / chaud / froid = nice / hot / cold weather.",
      explanationFr: "Il fait beau / chaud / froid = il fait beau / chaud / froid."
    },
    {
      id: "8-l4",
      type: "libre",
      question: "Translate: 'It's going to snow tomorrow.'",
      correct: "Il va neiger demain.",
      alternatives: [],
      explanation: "Il va + infinitive. Neiger = to snow.",
      explanationFr: "Il va + infinitif. Neiger = neiger."
    },
    {
      id: "8-l5",
      type: "libre",
      question: "How do you say 'It's very hot'?",
      correct: "Il fait très chaud.",
      alternatives: [],
      explanation: "Très = very. Il fait chaud = it's hot.",
      explanationFr: "Très = très. Il fait chaud = il fait chaud."
    },
    {
      id: "8-l6",
      type: "libre",
      question: "What is 'le brouillard'?",
      correct: "fog",
      alternatives: ["the fog"],
      explanation: "Le brouillard = fog. Il y a du brouillard = it's foggy.",
      explanationFr: "Le brouillard = le brouillard. Il y a du brouillard = il y a du brouillard."
    },
    {
      id: "8-l7",
      type: "libre",
      question: "Translate: 'What is the weather like tomorrow?'",
      correct: "Quel temps va-t-il faire demain ?",
      alternatives: ["Quel temps fera-t-il demain ?", "Il fait quel temps demain ?"],
      explanation: "Quel temps = what weather. Demain = tomorrow.",
      explanationFr: "Quel temps = quel temps. Demain = demain."
    },
    {
      id: "8-l8",
      type: "libre",
      question: "Complete: 'Il y a du ___ aujourd'hui.'",
      correct: "vent",
      alternatives: [],
      explanation: "Il y a du vent = it's windy. Le vent = the wind.",
      explanationFr: "Il y a du vent = il y a du vent. Le vent = le vent."
    },
    {
      id: "8-l9",
      type: "libre",
      question: "Translate: 'It's beautiful weather for a walk.'",
      correct: "Il fait beau pour se promener.",
      alternatives: [],
      explanation: "Il fait beau = nice weather. Pour + infinitive = for / in order to.",
      explanationFr: "Il fait beau = il fait beau. Pour + infinitif = pour."
    },
    {
      id: "8-l10",
      type: "libre",
      question: "How do you say 'It's cold this morning'?",
      correct: "Il fait froid ce matin.",
      alternatives: [],
      explanation: "Ce matin = this morning. Il fait froid = it's cold.",
      explanationFr: "Ce matin = ce matin. Il fait froid = il fait froid."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_08;
} else {
  window.LESSON_08 = LESSON_08;
}