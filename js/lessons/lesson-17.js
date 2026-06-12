// lesson-17.js -- Future Plans (Futur Proche)
const LESSON_17 = {
  id: 17,
  title: "Future Plans",
  titleFr: "Projets Futurs (Futur Proche)",
  objectiveEn: "Talk about future plans using the futur proche (aller + infinitive)",
  objectiveFr: "Parler des projets futurs en utilisant le futur proche (aller + infinitif)",
  hintEn: "The futur proche is very easy: Je vais + verb = I am going to...",
  hintFr: "Le futur proche est tres facile : Je vais + verbe = je vais...",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Futur proche (near future)</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>Je vais cuisiner.</td><td><em>*zhuh vay kwee-zee-NAY*</em></td><td>I am going to cook. <!-- *eye am GOH-ing too kook* --></td></tr>
<tr><td>Elle va telephoner.</td><td><em>*el vah tay-lay-fo-NAY*</em></td><td>She is going to phone. <!-- *shee iz GOH-ing too fohn* --></td></tr>
<tr><td>Nous allons au marche.</td><td><em>*noo za-LON oh mar-SHAY*</em></td><td>We are going to the market. <!-- *wee ar GOH-ing too thuh MAR-kit* --></td></tr>
<tr><td>Je vais faire les courses.</td><td><em>*zhuh vay fair lay KOORS*</em></td><td>I am going to do the shopping. <!-- *eye am GOH-ing too doo thuh SHOP-ing* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Time markers for the future</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>demain</td><td><em>*duh-MAN*</em></td><td>tomorrow <!-- *tuh-MOR-oh* --></td></tr>
<tr><td>ce week-end</td><td><em>*suh WEEK-end*</em></td><td>this weekend <!-- *this WEEK-end* --></td></tr>
<tr><td>la semaine prochaine</td><td><em>*la suh-MEN pro-SHEN*</em></td><td>next week <!-- *nekst week* --></td></tr>
<tr><td>le mois prochain</td><td><em>*luh mwah pro-SHAN*</em></td><td>next month <!-- *nekst munth* --></td></tr>
<tr><td>bientot</td><td><em>*byan-TOH*</em></td><td>soon <!-- *soon* --></td></tr>
</table>
</div>
<div class="lesson-warning">The <strong>futur proche</strong> (aller + infinitive) is used for planned near future. It is much more common in spoken French than the formal futur simple.</div>
<div class="lesson-example">
-- Qu'est-ce que tu vas faire ce week-end ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">What are you going to do this weekend?</span><br>
-- Je vais cuisiner et je vais au cinema. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I am going to cook and I am going to the cinema.</span>
</div>
  `,
  qcm: [
    {
      id: "17-1",
      type: "qcm",
      question: "I am going to cook. in French:",
      questionFr: "Je vais cuisiner. en anglais :",
      options: ["Je vais cuisiner.","Je cuisiner.","Je vais a cuisiner.","Je suis cuisiner."],
      optionsEn: ["I am going to cook.","I cook.","I go to cook.","I am cook."],
      correct: "Je vais cuisiner.",
      correctEn: "I am going to cook.",
      explanation: "Je vais cuisiner (zhuh vay kwee-zee-NAY) = I am going to cook. Aller + infinitive.",
      explanationFr: "Je vais cuisiner = je vais cuisiner. Aller + infinitif."
    },
    {
      id: "17-2",
      type: "qcm",
      question: "She is going to phone. in French:",
      questionFr: "Elle va telephoner. en anglais :",
      options: ["Elle va telephoner.","Elle telephoner.","Elle va a telephoner.","Elle est telephoner."],
      optionsEn: ["She is going to phone.","She phone.","She goes to phone.","She is phone."],
      correct: "Elle va telephoner.",
      correctEn: "She is going to phone.",
      explanation: "Elle va telephoner (el vah tay-lay-fo-NAY) = She is going to phone.",
      explanationFr: "Elle va telephoner = elle va telephoner."
    },
    {
      id: "17-3",
      type: "qcm",
      question: "We are going to the market. in French:",
      questionFr: "Nous allons au marche. en anglais :",
      options: ["Nous allons au marche.","Nous allons marche.","Nous allons a le marche.","Nous sommes au marche."],
      optionsEn: ["We are going to the market.","We go market.","We go to the market (wrong)","We are at the market."],
      correct: "Nous allons au marche.",
      correctEn: "We are going to the market.",
      explanation: "Nous allons (noo za-LON) = We are going. Au = to the (masculine).",
      explanationFr: "Nous allons = nous allons. Au = au (masculin)."
    },
    {
      id: "17-4",
      type: "qcm",
      question: "I am going to do the shopping. in French:",
      questionFr: "Je vais faire les courses. en anglais :",
      options: ["Je vais faire les courses.","Je vais les courses.","Je fais les courses.","Je suis faire les courses."],
      optionsEn: ["I am going to do the shopping.","I go the shopping.","I do the shopping.","I am do the shopping."],
      correct: "Je vais faire les courses.",
      correctEn: "I am going to do the shopping.",
      explanation: "Je vais faire (zhuh vay fair) = I am going to do. Faire = to do/make.",
      explanationFr: "Je vais faire = je vais faire. Faire = faire."
    },
    {
      id: "17-5",
      type: "qcm",
      question: "Tomorrow in French:",
      questionFr: "Demain en anglais :",
      options: ["demain","hier","aujourd'hui","apres"],
      optionsEn: ["tomorrow","yesterday","today","after"],
      correct: "demain",
      correctEn: "tomorrow",
      explanation: "Demain (duh-MAN) = tomorrow. A demain = see you tomorrow.",
      explanationFr: "Demain = demain. A demain = a demain."
    },
    {
      id: "17-6",
      type: "qcm",
      question: "This weekend in French:",
      questionFr: "Ce week-end en anglais :",
      options: ["ce week-end","ce weekend","cette semaine","le week-end"],
      optionsEn: ["this weekend","this weekend (wrong)","this week","the weekend"],
      correct: "ce week-end",
      correctEn: "this weekend",
      explanation: "Ce week-end (suh WEEK-end) = this weekend. Borrowed from English!",
      explanationFr: "Ce week-end = ce week-end. Emprunte a l'anglais !"
    },
    {
      id: "17-7",
      type: "qcm",
      question: "Next week in French:",
      questionFr: "La semaine prochaine en anglais :",
      options: ["la semaine prochaine","la prochaine semaine","semaine prochaine","prochaine semaine"],
      optionsEn: ["next week","the next week","week next","next week (wrong order)"],
      correct: "la semaine prochaine",
      correctEn: "next week",
      explanation: "La semaine prochaine (la suh-MEN pro-SHEN) = next week. Prochain(e) = next.",
      explanationFr: "La semaine prochaine = la semaine prochaine. Prochain(e) = prochain(e)."
    },
    {
      id: "17-8",
      type: "qcm",
      question: "Next month in French:",
      questionFr: "Le mois prochain en anglais :",
      options: ["le mois prochain","la mois prochain","le prochain mois","mois prochain"],
      optionsEn: ["next month","next month (wrong)","the next month","month next"],
      correct: "le mois prochain",
      correctEn: "next month",
      explanation: "Le mois prochain (luh mwah pro-SHAN) = next month. Mois = month (masculine).",
      explanationFr: "Le mois prochain = le mois prochain. Mois = mois (masculin)."
    },
    {
      id: "17-9",
      type: "qcm",
      question: "Soon in French:",
      questionFr: "Bientot en anglais :",
      options: ["bientot","tout de suite","maintenant","apres"],
      optionsEn: ["soon","right away","now","after"],
      correct: "bientot",
      correctEn: "soon",
      explanation: "Bientot (byan-TOH) = soon. A bientot = see you soon.",
      explanationFr: "Bientot = bientot. A bientot = a bientot."
    },
    {
      id: "17-10",
      type: "qcm",
      question: "What are you going to do this weekend? in French:",
      questionFr: "Qu'est-ce que tu vas faire ce week-end ? en anglais :",
      options: ["Qu'est-ce que tu vas faire ce week-end ?","Que vas-tu faire ce week-end ?","Tu vas faire quoi ce week-end ?","Quoi faire ce week-end ?"],
      optionsEn: ["What are you going to do this weekend?","What are you going to do this weekend?","You going to do what this weekend?","What to do this weekend?"],
      correct: "Qu'est-ce que tu vas faire ce week-end ?",
      correctEn: "What are you going to do this weekend?",
      explanation: "Qu'est-ce que tu vas faire... = What are you going to do... Very common question.",
      explanationFr: "Qu'est-ce que tu vas faire... = question tres courante."
    }
  ],
  libre: [
    {
      id: "17-l1",
      type: "libre",
      question: "Translate: I am going to cook tomorrow.",
      questionFr: "Traduisez : Je vais cuisiner demain.",
      correct: "Je vais cuisiner demain.",
      correctEn: "I am going to cook tomorrow.",
      alternatives: [],
      explanation: "Je vais cuisiner = I am going to cook. Demain = tomorrow.",
      explanationFr: "Je vais cuisiner = je vais cuisiner. Demain = demain."
    },
    {
      id: "17-l2",
      type: "libre",
      question: "How do you say She is going to phone?",
      questionFr: "Comment dit-on Elle va telephoner ?",
      correct: "Elle va telephoner.",
      correctEn: "She is going to phone.",
      alternatives: [],
      explanation: "Elle va telephoner = She is going to phone. Aller + infinitive.",
      explanationFr: "Elle va telephoner = elle va telephoner. Aller + infinitif."
    },
    {
      id: "17-l3",
      type: "libre",
      question: "Translate: We are going to the market next week.",
      questionFr: "Traduisez : Nous allons au marche la semaine prochaine.",
      correct: "Nous allons au marche la semaine prochaine.",
      correctEn: "We are going to the market next week.",
      alternatives: [],
      explanation: "Nous allons = We are going. La semaine prochaine = next week.",
      explanationFr: "Nous allons = nous allons. La semaine prochaine = la semaine prochaine."
    },
    {
      id: "17-l4",
      type: "libre",
      question: "Complete: Je vais ___ les courses.",
      questionFr: "Completez : Je vais ___ les courses.",
      correct: "faire",
      correctEn: "do",
      alternatives: [],
      explanation: "Je vais faire les courses = I am going to do the shopping.",
      explanationFr: "Je vais faire les courses = je vais faire les courses."
    },
    {
      id: "17-l5",
      type: "libre",
      question: "How do you say next month?",
      questionFr: "Comment dit-on le mois prochain ?",
      correct: "le mois prochain",
      correctEn: "next month",
      alternatives: [],
      explanation: "Le mois prochain = next month. Mois = month.",
      explanationFr: "Le mois prochain = le mois prochain. Mois = mois."
    },
    {
      id: "17-l6",
      type: "libre",
      question: "Translate: See you soon!",
      questionFr: "Traduisez : A bientot !",
      correct: "A bientot !",
      correctEn: "See you soon!",
      alternatives: [],
      explanation: "A bientot = See you soon. Bientot = soon.",
      explanationFr: "A bientot = a bientot. Bientot = bientot."
    },
    {
      id: "17-l7",
      type: "libre",
      question: "Complete: ___ allons au cinema.",
      questionFr: "Completez : ___ allons au cinema.",
      correct: "Nous",
      correctEn: "We",
      alternatives: [],
      explanation: "Nous allons = We are going. Nous = we.",
      explanationFr: "Nous allons = nous allons. Nous = nous."
    },
    {
      id: "17-l8",
      type: "libre",
      question: "How do you say this weekend?",
      questionFr: "Comment dit-on ce week-end ?",
      correct: "ce week-end",
      correctEn: "this weekend",
      alternatives: [],
      explanation: "Ce week-end = this weekend. Week-end = weekend (borrowed from English).",
      explanationFr: "Ce week-end = ce week-end. Week-end = week-end (emprunte a l'anglais)."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_17;
} else {
  window.LESSON_17 = LESSON_17;
}
