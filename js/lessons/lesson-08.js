// lesson-08.js -- Weather
const LESSON_08 = {
  id: 8,
  title: "Weather",
  titleFr: "La meteo",
  objectiveEn: "Talk about the weather, understand forecasts, discuss seasons",
  objectiveFr: "Parler de la meteo, comprendre les previsions, discuter des saisons",
  hintEn: "Talking about the weather is the ultimate French conversation starter -- use it everywhere!",
  hintFr: "Parler de la meteo est le meilleur moyen de demarrer une conversation en France -- utilisez-le partout !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Common weather phrases</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>Il fait beau.</td><td><em>*eel fay BOH*</em></td><td>The weather is nice. <!-- *thuh WEH-thur iz nyece* --></td></tr>
<tr><td>Il fait chaud / froid.</td><td><em>*eel fay SHOH / FRWAH*</em></td><td>It's hot / cold. <!-- *its hot / kold* --></td></tr>
<tr><td>Il pleut.</td><td><em>*eel pluh*</em></td><td>It's raining. <!-- *its RAY-ning* --></td></tr>
<tr><td>Il neige.</td><td><em>*eel nezh*</em></td><td>It's snowing. <!-- *its SNOH-ing* --></td></tr>
<tr><td>Il y a du vent.</td><td><em>*eel ee-a duh VON*</em></td><td>It's windy. <!-- *its WIN-dee* --></td></tr>
<tr><td>Il y a du brouillard.</td><td><em>*eel ee-a duh broo-ee-YAR*</em></td><td>It's foggy. <!-- *its FOG-ee* --></td></tr>
<tr><td>Il fait 25 degres.</td><td><em>*eel fay van-SANK duh-GRAY*</em></td><td>It's 25 degrees. <!-- *its twen-tee-FYV duh-GREES* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>The seasons</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>le printemps / l ete / l automne / l hiver</td><td><em>*luh pran-TON / lay-TAY / lo-TON / lee-VAIR*</em></td><td>spring / summer / autumn / winter <!-- *spring / SUM-ur / AW-tum / WIN-tur* --></td></tr>
</table>
</div>
<div class="lesson-warning">In France, weather is the #1 conversation topic. <strong>Il fait beau</strong> or <strong>Il pleut</strong> will start any chat!</div>
<div class="lesson-example">
-- Il fait beau aujourd hui ! <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">The weather is nice today!</span><br>
-- Oui, mais il va pleuvoir demain. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Yes, but it is going to rain tomorrow.</span>
</div>
  `,
  qcm: [
    {
      id: "08-1",
      type: "qcm",
      question: "The weather is nice. in French:",
      questionFr: "Il fait beau. en anglais :",
      options: ["Il fait beau.","Il est beau.","C'est beau.","Beau temps."],
      optionsEn: ["The weather is nice.","He is handsome.","It's beautiful.","Nice weather."],
      correct: "Il fait beau.",
      correctEn: "The weather is nice.",
      explanation: "Il fait beau (eel fay BOH) = The weather is nice. Not 'il est beau'!",
      explanationFr: "Il fait beau = il fait beau. Pas 'il est beau' !"
    },
    {
      id: "08-2",
      type: "qcm",
      question: "It's hot. in French:",
      questionFr: "Il fait chaud. en anglais :",
      options: ["Il fait chaud.","Il est chaud.","C'est chaud.","Chaud temps."],
      optionsEn: ["It's hot.","He is hot.","It's hot.","Hot weather."],
      correct: "Il fait chaud.",
      correctEn: "It's hot.",
      explanation: "Il fait chaud (eel fay SHOH) = It's hot. Always use 'il fait' for weather.",
      explanationFr: "Il fait chaud = il fait chaud. Utilisez toujours 'il fait' pour la meteo."
    },
    {
      id: "08-3",
      type: "qcm",
      question: "It's raining. in French:",
      questionFr: "Il pleut. en anglais :",
      options: ["Il pleut.","Il pleure.","Il fait pluie.","La pluie tombe."],
      optionsEn: ["It's raining.","He cries.","It makes rain.","The rain falls."],
      correct: "Il pleut.",
      correctEn: "It's raining.",
      explanation: "Il pleut (eel pluh) = It's raining. Pleuvoir = to rain.",
      explanationFr: "Il pleut = il pleut. Pleuvoir = pleuvoir."
    },
    {
      id: "08-4",
      type: "qcm",
      question: "It's snowing. in French:",
      questionFr: "Il neige. en anglais :",
      options: ["Il neige.","Il fait neige.","La neige tombe.","C'est neige."],
      optionsEn: ["It's snowing.","It makes snow.","The snow falls.","It's snow."],
      correct: "Il neige.",
      correctEn: "It's snowing.",
      explanation: "Il neige (eel nezh) = It's snowing. Neiger = to snow.",
      explanationFr: "Il neige = il neige. Neiger = neiger."
    },
    {
      id: "08-5",
      type: "qcm",
      question: "It's windy. in French:",
      questionFr: "Il y a du vent. en anglais :",
      options: ["Il y a du vent.","Il fait vent.","Le vent souffle.","C'est vent."],
      optionsEn: ["It's windy.","It makes wind.","The wind blows.","It's wind."],
      correct: "Il y a du vent.",
      correctEn: "It's windy.",
      explanation: "Il y a du vent (eel ee-a duh VON) = It's windy. Vent = wind.",
      explanationFr: "Il y a du vent = il y a du vent. Vent = vent."
    },
    {
      id: "08-6",
      type: "qcm",
      question: "It's foggy. in French:",
      questionFr: "Il y a du brouillard. en anglais :",
      options: ["Il y a du brouillard.","Il fait brouillard.","C'est brouillard.","Le brouillard est."],
      optionsEn: ["It's foggy.","It makes fog.","It's fog.","The fog is."],
      correct: "Il y a du brouillard.",
      correctEn: "It's foggy.",
      explanation: "Il y a du brouillard (eel ee-a duh broo-ee-YAR) = It's foggy.",
      explanationFr: "Il y a du brouillard = il y a du brouillard."
    },
    {
      id: "08-7",
      type: "qcm",
      question: "It's 25 degrees. in French:",
      questionFr: "Il fait 25 degres. en anglais :",
      options: ["Il fait 25 degres.","Il est 25 degres.","C'est 25 degres.","25 degres il fait."],
      optionsEn: ["It's 25 degrees.","It is 25 degrees.","It's 25 degrees.","25 degrees it makes."],
      correct: "Il fait 25 degres.",
      correctEn: "It's 25 degrees.",
      explanation: "Il fait + number + degres = It's ... degrees. Use 'il fait' for temperature.",
      explanationFr: "Il fait + nombre + degres = il fait... degres. Utilisez 'il fait' pour la temperature."
    },
    {
      id: "08-8",
      type: "qcm",
      question: "Spring in French:",
      questionFr: "Le printemps en anglais :",
      options: ["Le printemps","L'ete","L'automne","L'hiver"],
      optionsEn: ["Spring","Summer","Autumn","Winter"],
      correct: "Le printemps",
      correctEn: "Spring",
      explanation: "Le printemps (pran-TON) = spring. Au printemps = in spring.",
      explanationFr: "Le printemps = le printemps. Au printemps = au printemps."
    },
    {
      id: "08-9",
      type: "qcm",
      question: "Winter in French:",
      questionFr: "L'hiver en anglais :",
      options: ["L'hiver","Le printemps","L'ete","L'automne"],
      optionsEn: ["Winter","Spring","Summer","Autumn"],
      correct: "L'hiver",
      correctEn: "Winter",
      explanation: "L'hiver (lee-VAIR) = winter. En hiver = in winter.",
      explanationFr: "L'hiver = l'hiver. En hiver = en hiver."
    },
    {
      id: "08-10",
      type: "qcm",
      question: "Summer in French:",
      questionFr: "L'ete en anglais :",
      options: ["L'ete","Le printemps","L'automne","L'hiver"],
      optionsEn: ["Summer","Spring","Autumn","Winter"],
      correct: "L'ete",
      correctEn: "Summer",
      explanation: "L'ete (lay-TAY) = summer. En ete = in summer.",
      explanationFr: "L'ete = l'ete. En ete = en ete."
    }
  ],
  libre: [
    {
      id: "08-l1",
      type: "libre",
      question: "Translate: It's cold.",
      questionFr: "Traduisez : Il fait froid.",
      correct: "Il fait froid.",
      correctEn: "It's cold.",
      alternatives: [],
      explanation: "Il fait froid = It's cold. Froid = cold.",
      explanationFr: "Il fait froid = il fait froid. Froid = froid."
    },
    {
      id: "08-l2",
      type: "libre",
      question: "How do you say It's raining?",
      questionFr: "Comment dit-on Il pleut ?",
      correct: "Il pleut.",
      correctEn: "It's raining.",
      alternatives: [],
      explanation: "Il pleut = It's raining. Pleuvoir = to rain.",
      explanationFr: "Il pleut = il pleut. Pleuvoir = pleuvoir."
    },
    {
      id: "08-l3",
      type: "libre",
      question: "Translate: It's windy today.",
      questionFr: "Traduisez : Il y a du vent aujourd'hui.",
      correct: "Il y a du vent aujourd'hui.",
      correctEn: "It's windy today.",
      alternatives: [],
      explanation: "Il y a du vent = It's windy. Aujourd'hui = today.",
      explanationFr: "Il y a du vent = il y a du vent. Aujourd'hui = aujourd'hui."
    },
    {
      id: "08-l4",
      type: "libre",
      question: "Complete: Il fait ___ degres.",
      questionFr: "Completez : Il fait ___ degres.",
      correct: "vingt-cinq",
      correctEn: "twenty-five",
      alternatives: ["25"],
      explanation: "Il fait vingt-cinq degres = It's 25 degrees.",
      explanationFr: "Il fait vingt-cinq degres = il fait vingt-cinq degres."
    },
    {
      id: "08-l5",
      type: "libre",
      question: "How do you say autumn?",
      questionFr: "Comment dit-on l'automne ?",
      correct: "l'automne",
      correctEn: "autumn",
      alternatives: ["automne"],
      explanation: "L'automne (lo-TON) = autumn. En automne = in autumn.",
      explanationFr: "L'automne = l'automne. En automne = en automne."
    },
    {
      id: "08-l6",
      type: "libre",
      question: "Translate: It's snowing!",
      questionFr: "Traduisez : Il neige !",
      correct: "Il neige !",
      correctEn: "It's snowing!",
      alternatives: [],
      explanation: "Il neige = It's snowing. Neiger = to snow.",
      explanationFr: "Il neige = il neige. Neiger = neiger."
    },
    {
      id: "08-l7",
      type: "libre",
      question: "Complete: ___ fait beau aujourd'hui.",
      questionFr: "Completez : ___ fait beau aujourd'hui.",
      correct: "Il",
      correctEn: "It",
      alternatives: [],
      explanation: "Il fait beau = The weather is nice. Il = impersonal 'it'.",
      explanationFr: "Il fait beau = il fait beau. Il = 'il' impersonnel."
    },
    {
      id: "08-l8",
      type: "libre",
      question: "How do you say spring?",
      questionFr: "Comment dit-on le printemps ?",
      correct: "le printemps",
      correctEn: "spring",
      alternatives: ["printemps"],
      explanation: "Le printemps = spring. Au printemps = in spring.",
      explanationFr: "Le printemps = le printemps. Au printemps = au printemps."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_08;
} else {
  window.LESSON_08 = LESSON_08;
}
