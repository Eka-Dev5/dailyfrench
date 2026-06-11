// lesson-17.js — My Plans 📅 — Futur proche
const LESSON_17 = {
  id: 17,
  title: "My Plans 📅 — Futur proche",
  titleFr: "Mes projets — Futur proche",
  objectiveEn: "Talk about future plans using futur proche (aller + infinitive)",
  objectiveFr: "Parler de projets futurs avec le futur proche (aller + infinitif)",
  hintEn: "Futur proche = aller (conjugated) + infinitive. Simpler and more common than future tense!",
  hintFr: "Futur proche = aller (conjugué) + infinitif. Plus simple et plus courant que le futur !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>📅 Near future: aller + infinitive</h4>
<p><strong>Formula: sujet + aller + infinitive</strong></p>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Je vais cuisiner.</td><td>I'm going to cook.</td></tr>
<tr><td>Elle va téléphoner.</td><td>She's going to phone.</td></tr>
<tr><td>Nous allons au marché.</td><td>We're going to the market.</td></tr>
<tr><td>Je vais faire les courses.</td><td>I'm going to do the shopping.</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>⏰ Time expressions for plans</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>demain</td><td>tomorrow</td></tr>
<tr><td>ce week-end</td><td>this weekend</td></tr>
<tr><td>la semaine prochaine</td><td>next week</td></tr>
<tr><td>le mois prochain</td><td>next month</td></tr>
<tr><td>bientôt</td><td>soon</td></tr>
</table>
</div>
<div class="lesson-example">
Ce week-end je vais nettoyer la maison et nous allons au restaurant dimanche. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">This weekend I'm going to clean the house and we're going to a restaurant on Sunday.</span>
</div>
  `,
  qcm: [
    {
      id: "17-1",
      type: "qcm",
      question: "'I am going to cook' in French:",
      questionFr: "'Je vais cuisiner.' en anglais :",
      options: ["Je vais cuisiner.","Je suis cuisiner.","J'ai cuisiné.","Je cuisine."],
      optionsEn: ["I'm going to cook.","I am cook.","I have cooked.","I cook."],
      correct: "Je vais cuisiner.",
      correctEn: "I'm going to cook.",
      explanation: "Futur proche: je vais + infinitive. Je vais cuisiner = I'm going to cook.",
      explanationFr: "Futur proche : je vais + infinitif. Je vais cuisiner = je vais cuisiner."
    },
    {
      id: "17-2",
      type: "qcm",
      question: "'She is going to phone' in French:",
      questionFr: "'Elle va téléphoner.' en anglais :",
      options: ["Elle va téléphoner.","Elle est téléphoner.","Elle va téléphone.","Elle ira téléphoner."],
      optionsEn: ["She's going to phone.","She is phone.","She goes phone.","She will phone."],
      correct: "Elle va téléphoner.",
      correctEn: "She's going to phone.",
      explanation: "Elle va + infinitive. Téléphoner = to phone.",
      explanationFr: "Elle va + infinitif. Téléphoner = téléphoner."
    },
    {
      id: "17-3",
      type: "qcm",
      question: "'Next week' in French:",
      questionFr: "'La semaine prochaine' en anglais :",
      options: ["La semaine prochaine","La prochaine semaine","Semaine prochaine","Next week"],
      optionsEn: ["Next week","The next week","Week next","Next week"],
      correct: "La semaine prochaine",
      correctEn: "Next week",
      explanation: "La semaine prochaine (*pro-SHEN*) = next week. Le mois prochain = next month.",
      explanationFr: "La semaine prochaine = la semaine prochaine. Le mois prochain = le mois prochain."
    },
    {
      id: "17-4",
      type: "qcm",
      question: "'This weekend' in French:",
      questionFr: "'Ce week-end' en anglais :",
      options: ["Ce week-end","Ce fin de semaine","Ce weekend","Ce we"],
      optionsEn: ["This weekend","This end of week","This weekend","This we"],
      correct: "Ce week-end",
      correctEn: "This weekend",
      explanation: "Ce week-end = this weekend. The word week-end is used in French!",
      explanationFr: "Ce week-end = ce week-end. Le mot week-end est utilisé en français !"
    },
    {
      id: "17-5",
      type: "qcm",
      question: "'We are going to the restaurant' in French:",
      questionFr: "'Nous allons au restaurant.' en anglais :",
      options: ["Nous allons au restaurant.","Nous allons à restaurant.","Nous allons le restaurant.","Nous sommes restaurant."],
      optionsEn: ["We're going to the restaurant.","We're going to restaurant.","We're going the restaurant.","We are restaurant."],
      correct: "Nous allons au restaurant.",
      correctEn: "We're going to the restaurant.",
      explanation: "Au = à + le. Nous allons = we are going (also futur proche when with infinitive).",
      explanationFr: "Au = à + le. Nous allons = nous allons (aussi futur proche avec infinitif)."
    },
    {
      id: "17-6",
      type: "qcm",
      question: "Which is an example of futur proche?",
      questionFr: "Lequel est un exemple de futur proche ?",
      options: ["Je vais manger","J'ai mangé","Je mange","Je mangerai"],
      optionsEn: ["I'm going to eat","I have eaten","I eat","I will eat"],
      correct: "Je vais manger",
      correctEn: "I'm going to eat",
      explanation: "Futur proche = aller + infinitive. Je vais manger = I'm going to eat.",
      explanationFr: "Futur proche = aller + infinitif. Je vais manger = je vais manger."
    },
    {
      id: "17-7",
      type: "qcm",
      question: "'I am going to do the shopping' in French:",
      questionFr: "'Je vais faire les courses.' en anglais :",
      options: ["Je vais faire les courses.","Je vais les courses faire.","Je faire les courses.","Je vais les courses."],
      optionsEn: ["I'm going to do the shopping.","I'm going the shopping do.","I do the shopping.","I'm going the shopping."],
      correct: "Je vais faire les courses.",
      correctEn: "I'm going to do the shopping.",
      explanation: "Je vais + faire + les courses. The infinitive always comes after aller.",
      explanationFr: "Je vais + faire + les courses. L'infinitif vient toujours après aller."
    },
    {
      id: "17-8",
      type: "qcm",
      question: "'Soon' in French:",
      questionFr: "'Bientôt' en anglais :",
      options: ["Bientôt","Vite","Prochain","Après"],
      optionsEn: ["Soon","Fast","Next","After"],
      correct: "Bientôt",
      correctEn: "Soon",
      explanation: "Bientôt (*byan-TOH*) = soon. À bientôt = see you soon!",
      explanationFr: "Bientôt = bientôt. À bientôt = à bientôt !"
    },
    {
      id: "17-9",
      type: "qcm",
      question: "'Next month' in French:",
      questionFr: "'Le mois prochain' en anglais :",
      options: ["Le mois prochain","Le prochain mois","Mois prochain","Le prochain mois"],
      optionsEn: ["Next month","The next month","Month next","The next month"],
      correct: "Le mois prochain",
      correctEn: "Next month",
      explanation: "Le mois prochain = next month. La semaine prochaine = next week.",
      explanationFr: "Le mois prochain = le mois prochain. La semaine prochaine = la semaine prochaine."
    },
    {
      id: "17-10",
      type: "qcm",
      question: "'They are going to visit us' in French:",
      questionFr: "'Ils vont nous rendre visite.' en anglais :",
      options: ["Ils vont nous rendre visite.","Ils sont nous visiter.","Ils vont nous visit.","Ils allons visiter."],
      optionsEn: ["They're going to visit us.","They are us visit.","They go us visit.","They going visit."],
      correct: "Ils vont nous rendre visite.",
      correctEn: "They're going to visit us.",
      explanation: "Ils vont + infinitive = they are going to. Nous rendre visite = visit us.",
      explanationFr: "Ils vont + infinitif = ils vont. Nous rendre visite = nous rendre visite."
    }
  ],
  libre: [
    {
      id: "17-l1",
      type: "libre",
      question: "Translate: 'I'm going to clean the house tomorrow.'",
      questionFr: "Traduisez : 'Je vais nettoyer la maison demain.'",
      correct: "Je vais nettoyer la maison demain.",
      correctEn: "I'm going to clean the house tomorrow.",
      alternatives: [],
      explanation: "Je vais + infinitive + demain.",
      explanationFr: "Je vais + infinitif + demain."
    },
    {
      id: "17-l2",
      type: "libre",
      question: "How do you say 'she is going to'?",
      questionFr: "Comment dit-on 'elle va' ?",
      correct: "elle va",
      correctEn: "she is going to",
      alternatives: [],
      explanation: "Aller conjugated: je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont.",
      explanationFr: "Aller conjugué : je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont."
    },
    {
      id: "17-l3",
      type: "libre",
      question: "Translate: 'Next week I'm going to visit my family.'",
      questionFr: "Traduisez : 'La semaine prochaine je vais rendre visite à ma famille.'",
      correct: "La semaine prochaine je vais rendre visite à ma famille.",
      correctEn: "Next week I'm going to visit my family.",
      alternatives: ["La semaine prochaine je vais voir ma famille."],
      explanation: "Rendre visite à = to visit (a person). Voir = to see.",
      explanationFr: "Rendre visite à = rendre visite à (une personne). Voir = voir."
    },
    {
      id: "17-l4",
      type: "libre",
      question: "Complete: 'Je vais ___ la vaisselle ce soir.'",
      questionFr: "Complétez : 'Je vais ___ la vaisselle ce soir.'",
      correct: "faire",
      correctEn: "do",
      alternatives: [],
      explanation: "Faire la vaisselle = do the dishes. Je vais faire = I'm going to do.",
      explanationFr: "Faire la vaisselle = faire la vaisselle. Je vais faire = je vais faire."
    },
    {
      id: "17-l5",
      type: "libre",
      question: "Translate: 'This weekend we're going to the market.'",
      questionFr: "Traduisez : 'Ce week-end nous allons au marché.'",
      correct: "Ce week-end nous allons au marché.",
      correctEn: "This weekend we're going to the market.",
      alternatives: [],
      explanation: "Au marché = to the market. Au = à + le.",
      explanationFr: "Au marché = au marché. Au = à + le."
    },
    {
      id: "17-l6",
      type: "libre",
      question: "How do you say 'soon'?",
      questionFr: "Comment dit-on 'bientôt' ?",
      correct: "bientôt",
      correctEn: "soon",
      alternatives: [],
      explanation: "Bientôt = soon. À bientôt = see you soon!",
      explanationFr: "Bientôt = bientôt. À bientôt = à bientôt !"
    },
    {
      id: "17-l7",
      type: "libre",
      question: "Translate: 'I'm going to rest this afternoon.'",
      questionFr: "Traduisez : 'Je vais me reposer cet après-midi.'",
      correct: "Je vais me reposer cet après-midi.",
      correctEn: "I'm going to rest this afternoon.",
      alternatives: [],
      explanation: "Me reposer = to rest (myself). Cet après-midi = this afternoon.",
      explanationFr: "Me reposer = me reposer. Cet après-midi = cet après-midi."
    },
    {
      id: "17-l8",
      type: "libre",
      question: "Complete: 'Nous ___ aller au restaurant samedi.'",
      questionFr: "Complétez : 'Nous ___ aller au restaurant samedi.'",
      correct: "allons",
      correctEn: "are going",
      alternatives: [],
      explanation: "Nous allons = we are going. Futur proche with nous.",
      explanationFr: "Nous allons = nous allons. Futur proche avec nous."
    },
    {
      id: "17-l9",
      type: "libre",
      question: "Translate: 'She's going to call next week.'",
      questionFr: "Traduisez : 'Elle va téléphoner la semaine prochaine.'",
      correct: "Elle va téléphoner la semaine prochaine.",
      correctEn: "She's going to call next week.",
      alternatives: [],
      explanation: "Elle va + téléphoner. La semaine prochaine = next week.",
      explanationFr: "Elle va + téléphoner. La semaine prochaine = la semaine prochaine."
    },
    {
      id: "17-l10",
      type: "libre",
      question: "How do you say 'next month'?",
      questionFr: "Comment dit-on 'le mois prochain' ?",
      correct: "le mois prochain",
      correctEn: "next month",
      alternatives: [],
      explanation: "Le mois prochain. Note: prochain comes AFTER the noun in French!",
      explanationFr: "Le mois prochain. Note : prochain vient APRÈS le nom en français !"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_17;
} else {
  window.LESSON_17 = LESSON_17;
}

