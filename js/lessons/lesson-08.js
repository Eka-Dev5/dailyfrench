// lesson-08.js — Weather 🌤️
const LESSON_08 = {
  id: 8,
  title: "Weather 🌤️",
  titleFr: "La météo",
  objectiveEn: "Talk about the weather, understand forecasts",
  objectiveFr: "Parler de la météo, comprendre les prévisions",
  hintEn: "Il fait + adjective for general weather. Il pleut/neige use verbs directly.",
  hintFr: "Il fait + adjectif pour la météo générale. Il pleut/neige utilise les verbes directement.",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>☀️ Weather expressions</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Il fait beau.</td><td>The weather is nice.</td></tr>
<tr><td>Il fait chaud / froid.</td><td>It's hot / cold.</td></tr>
<tr><td>Il pleut.</td><td>It's raining.</td></tr>
<tr><td>Il neige.</td><td>It's snowing.</td></tr>
<tr><td>Il y a du vent.</td><td>It's windy.</td></tr>
<tr><td>Il y a du brouillard.</td><td>It's foggy.</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>🌡️ Temperature & seasons</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Il fait 25 degrés.</td><td>It's 25 degrees.</td></tr>
<tr><td>le printemps / l'été / l'automne / l'hiver</td><td>spring / summer / autumn / winter</td></tr>
</table>
</div>
<div class="lesson-example">
<strong>Exemple :</strong> Il fait beau aujourd'hui mais demain il va pleuvoir. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">The weather is nice today but tomorrow it's going to rain.</span>
</div>
  `,
  qcm: [
    {
      id: "08-1",
      type: "qcm",
      question: "'It's raining.' in French:",
      questionFr: "'Il pleut.' en anglais :",
      options: ["Il pleut.","Il fait de pluie.","Il pleuve.","C'est la pluie."],
      optionsEn: ["It's raining.","It makes of rain.","It rain.","It's the rain."],
      correct: "Il pleut.",
      correctEn: "It's raining.",
      explanation: "Il pleut (*eel pluh*) = It's raining. Irregular verb pleuvoir. Very useful in France!",
      explanationFr: "Il pleut = il pleut. Verbe irrégulier pleuvoir. Très utile en France !"
    },
    {
      id: "08-2",
      type: "qcm",
      question: "'The weather is nice.' in French:",
      questionFr: "'Il fait beau.' en anglais :",
      options: ["Il fait beau.","Il fait bien.","C'est beau dehors.","Le temps est beau."],
      optionsEn: ["The weather is nice.","It makes well.","It's beautiful outside.","The weather is nice."],
      correct: "Il fait beau.",
      correctEn: "The weather is nice.",
      explanation: "Il fait beau (*eel fay BOH*) = The weather is nice. Il fait + adjective for weather.",
      explanationFr: "Il fait beau = il fait beau. Il fait + adjectif pour la météo."
    },
    {
      id: "08-3",
      type: "qcm",
      question: "'It's cold.' in French:",
      questionFr: "'Il fait froid.' en anglais :",
      options: ["Il fait froid.","Il est froid.","C'est froid dehors.","Le temps est froid."],
      optionsEn: ["It's cold.","He is cold.","It's cold outside.","The weather is cold."],
      correct: "Il fait froid.",
      correctEn: "It's cold.",
      explanation: "Il fait froid (*eel fay FRWAH*) = It's cold. Il fait chaud = It's hot.",
      explanationFr: "Il fait froid = il fait froid. Il fait chaud = il fait chaud."
    },
    {
      id: "08-4",
      type: "qcm",
      question: "'It's snowing.' in French:",
      questionFr: "'Il neige.' en anglais :",
      options: ["Il neige.","Il fait neige.","La neige tombe.","Il snows."],
      optionsEn: ["It's snowing.","It makes snow.","The snow falls.","It snows."],
      correct: "Il neige.",
      correctEn: "It's snowing.",
      explanation: "Il neige (*eel nezh*) = It's snowing. La neige = snow.",
      explanationFr: "Il neige = il neige. La neige = la neige."
    },
    {
      id: "08-5",
      type: "qcm",
      question: "'It's windy.' in French:",
      questionFr: "'Il y a du vent.' en anglais :",
      options: ["Il y a du vent.","Il fait vent.","Il vente.","Le vent est fort."],
      optionsEn: ["It's windy.","It makes wind.","It winds.","The wind is strong."],
      correct: "Il y a du vent.",
      correctEn: "It's windy.",
      explanation: "Il y a du vent (*eel ee a du VON*) = It's windy. Du vent = some wind.",
      explanationFr: "Il y a du vent = il y a du vent. Du vent = du vent."
    },
    {
      id: "08-6",
      type: "qcm",
      question: "'What's the weather like today?' in French:",
      questionFr: "'Quel temps fait-il aujourd'hui ?' en anglais :",
      options: ["Quel temps fait-il aujourd'hui ?","Comment est le temps ?","C'est quoi le temps ?","Le temps aujourd'hui ?"],
      optionsEn: ["What's the weather like today?","How is the weather?","What is the weather?","The weather today?"],
      correct: "Quel temps fait-il aujourd'hui ?",
      correctEn: "What's the weather like today?",
      explanation: "Quel temps fait-il ? (*kell ton fay-TEEL*) = What's the weather like? Classic question.",
      explanationFr: "Quel temps fait-il ? = quel temps fait-il ? Question classique."
    },
    {
      id: "08-7",
      type: "qcm",
      question: "'It's foggy.' in French:",
      questionFr: "'Il y a du brouillard.' en anglais :",
      options: ["Il y a du brouillard.","Il fait sombre.","Il y a brouillard.","Le brouillard est là."],
      optionsEn: ["It's foggy.","It's dark.","There is fog.","The fog is here."],
      correct: "Il y a du brouillard.",
      correctEn: "It's foggy.",
      explanation: "Il y a du brouillard (*broo-ee-YARD*) = It's foggy. Brouillard = fog.",
      explanationFr: "Il y a du brouillard = il y a du brouillard. Brouillard = brouillard."
    },
    {
      id: "08-8",
      type: "qcm",
      question: "'It's 28 degrees.' in French:",
      questionFr: "'Il fait 28 degrés.' en anglais :",
      options: ["Il fait 28 degrés.","C'est 28 degrés.","Il y a 28 degrés.","28 degrés il fait."],
      optionsEn: ["It's 28 degrees.","It's 28 degrees.","There are 28 degrees.","28 degrees it makes."],
      correct: "Il fait 28 degrés.",
      correctEn: "It's 28 degrees.",
      explanation: "Il fait X degrés = It's X degrees. The most natural French weather temperature phrase.",
      explanationFr: "Il fait X degrés = il fait X degrés. La phrase la plus naturelle en français."
    },
    {
      id: "08-9",
      type: "qcm",
      question: "'It's going to rain tomorrow.' in French:",
      questionFr: "'Il va pleuvoir demain.' en anglais :",
      options: ["Il va pleuvoir demain.","Il pleuvra demain.","Demain il pleut.","Il va pleuvoir après."],
      optionsEn: ["It's going to rain tomorrow.","It will rain tomorrow.","Tomorrow it rains.","It's going to rain after."],
      correct: "Il va pleuvoir demain.",
      correctEn: "It's going to rain tomorrow.",
      explanation: "Il va + infinitive = it's going to. Pleuvoir = to rain. Near future for forecasts!",
      explanationFr: "Il va + infinitif = il va. Pleuvoir = pleuvoir. Futur proche pour les prévisions !"
    },
    {
      id: "08-10",
      type: "qcm",
      question: "'Spring' in French:",
      questionFr: "'Le printemps' en anglais :",
      options: ["Le printemps","L'été","L'automne","L'hiver"],
      optionsEn: ["Spring","Summer","Autumn","Winter"],
      correct: "Le printemps",
      correctEn: "Spring",
      explanation: "Le printemps (*pran-TON*) = spring. L'été = summer. L'automne = autumn. L'hiver = winter.",
      explanationFr: "Le printemps = le printemps. L'été = l'été. L'automne = l'automne. L'hiver = l'hiver."
    }
  ],
  libre: [
    {
      id: "08-l1",
      type: "libre",
      question: "Translate: 'The weather is nice today.'",
      questionFr: "Traduisez : 'Il fait beau aujourd'hui.'",
      correct: "Il fait beau aujourd'hui.",
      correctEn: "The weather is nice today.",
      alternatives: [],
      explanation: "Il fait beau = nice weather. Aujourd'hui = today.",
      explanationFr: "Il fait beau = il fait beau. Aujourd'hui = aujourd'hui."
    },
    {
      id: "08-l2",
      type: "libre",
      question: "How do you say 'It's raining'?",
      questionFr: "Comment dit-on 'Il pleut' ?",
      correct: "Il pleut.",
      correctEn: "It's raining.",
      alternatives: [],
      explanation: "Il pleut from the irregular verb pleuvoir. Very common in France!",
      explanationFr: "Il pleut du verbe irrégulier pleuvoir. Très courant en France !"
    },
    {
      id: "08-l3",
      type: "libre",
      question: "Complete: 'Il fait ___ aujourd'hui, vous ne trouvez pas ?'",
      questionFr: "Complétez : 'Il fait ___ aujourd'hui, vous ne trouvez pas ?'",
      correct: "beau",
      correctEn: "nice",
      alternatives: ["chaud","froid"],
      explanation: "Il fait beau / chaud / froid = nice / hot / cold weather.",
      explanationFr: "Il fait beau / chaud / froid = il fait beau / chaud / froid."
    },
    {
      id: "08-l4",
      type: "libre",
      question: "Translate: 'It's going to snow tomorrow.'",
      questionFr: "Traduisez : 'Il va neiger demain.'",
      correct: "Il va neiger demain.",
      correctEn: "It's going to snow tomorrow.",
      alternatives: [],
      explanation: "Il va + infinitive. Neiger = to snow.",
      explanationFr: "Il va + infinitif. Neiger = neiger."
    },
    {
      id: "08-l5",
      type: "libre",
      question: "How do you say 'It's very hot'?",
      questionFr: "Comment dit-on 'Il fait très chaud' ?",
      correct: "Il fait très chaud.",
      correctEn: "It's very hot.",
      alternatives: [],
      explanation: "Très = very. Il fait chaud = it's hot.",
      explanationFr: "Très = très. Il fait chaud = il fait chaud."
    },
    {
      id: "08-l6",
      type: "libre",
      question: "What is 'le brouillard'?",
      questionFr: "Que signifie 'le brouillard' ?",
      correct: "fog",
      correctEn: "fog",
      alternatives: ["the fog"],
      explanation: "Le brouillard = fog. Il y a du brouillard = it's foggy.",
      explanationFr: "Le brouillard = le brouillard. Il y a du brouillard = il y a du brouillard."
    },
    {
      id: "08-l7",
      type: "libre",
      question: "Translate: 'What is the weather like tomorrow?'",
      questionFr: "Traduisez : 'Quel temps va-t-il faire demain ?'",
      correct: "Quel temps va-t-il faire demain ?",
      correctEn: "What is the weather like tomorrow?",
      alternatives: ["Quel temps fera-t-il demain ?","Il fait quel temps demain ?"],
      explanation: "Quel temps = what weather. Demain = tomorrow.",
      explanationFr: "Quel temps = quel temps. Demain = demain."
    },
    {
      id: "08-l8",
      type: "libre",
      question: "Complete: 'Il y a du ___ aujourd'hui.'",
      questionFr: "Complétez : 'Il y a du ___ aujourd'hui.'",
      correct: "vent",
      correctEn: "wind",
      alternatives: [],
      explanation: "Il y a du vent = it's windy. Le vent = the wind.",
      explanationFr: "Il y a du vent = il y a du vent. Le vent = le vent."
    },
    {
      id: "08-l9",
      type: "libre",
      question: "Translate: 'It's beautiful weather for a walk.'",
      questionFr: "Traduisez : 'Il fait beau pour se promener.'",
      correct: "Il fait beau pour se promener.",
      correctEn: "It's beautiful weather for a walk.",
      alternatives: [],
      explanation: "Il fait beau = nice weather. Pour + infinitive = for / in order to.",
      explanationFr: "Il fait beau = il fait beau. Pour + infinitif = pour / afin de."
    },
    {
      id: "08-l10",
      type: "libre",
      question: "How do you say 'It's cold this morning'?",
      questionFr: "Comment dit-on 'Il fait froid ce matin' ?",
      correct: "Il fait froid ce matin.",
      correctEn: "It's cold this morning.",
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
