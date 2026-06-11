// lesson-my-plans.js
const LESSON_17 = {
  id: 17,
  title: "My Plans",
  titleFr: "Mes projets",
  objectiveEn: "Talk about future plans using futur proche (aller + infinitive)",
  objectiveFr: "Parler des projets futurs en utilisant le futur proche (aller + infinitif)",
  hintEn: "Futur proche = aller (conjugated) + infinitive. Simpler and more common than future tense!",
  hintFr: "Futur proche = aller (conjugué) + infinitif. Plus simple et plus courant que le futur simple !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>📅 Near future: aller + infinitive</h4>
<p><strong>Formula: sujet + aller + infinitive</strong></p>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
</td><td>Je vais cuisiner.</td><td>I'm going to cook.</td></tr>
<tr><td>Elle va téléphoner.</td><td>She's going to phone.</td></tr>
<tr><td>Nous allons au marché.</td><td>We're going to the market.</td></tr>
<tr><td>Je vais faire les courses.</td><td>I'm going to do the shopping.</td></tr>
</tbody>
</table>
</div>
<div class="lesson-rule">
<h4>⏰ Time expressions for plans</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>demain</td><td>tomorrow</td>\n</tr>\n<tr>\n<td class=\"\">ce week-end</td><td>this weekend</td>\n</tr>\n<tr>\n<td class=\"\">la semaine prochaine</td>\n<td class=\"\">next week</td>\n</tr>\n<tr>\n<td class=\"\">le mois prochain</td>\n<td class=\"\">next month</td>\n</tr>\n<tr>\n<td class=\"\">bientôt</td>\n<td class=\"\">soon</td>\n</tr>\n</tbody>\n</table>\n</div>\n<div class=\"lesson-example\">\n<strong>Exemple :</strong> Ce week-end je vais nettoyer la maison et nous allons au restaurant dimanche. <button class=\"lesson-ex-btn\" onclick=\"toggleLessonEx(this,event)\">🇬🇧 English</button>\n<span class=\"lesson-ex-en\">This weekend I'm going to clean the house and we're going to a restaurant on Sunday.</span>\n</div>\n  `,
  qcm: [
    {
      id: "17-1",
      type: "qcm",
      question: "'I am going to cook' in French:",
      options: ["Je vais cuisiner.", "Je suis cuisiner.", "J'ai cuisiné.", "Je cuisine."],
      correct: "Je vais cuisiner.",
      explanation: "Futur proche: je vais + infinitive. Je vais cuisiner = I'm going to cook.",
      explanationFr: "Futur proche: je vais + infinitif. Je vais cuisiner = je vais cuisiner."
    },
    {
      id: "17-2",
      type: "qcm",
      question: "'She is going to phone' in French:",
      options: ["Elle va téléphoner.", "Elle est téléphoner.", "Elle va téléphone.", "Elle ira téléphoner."],
      correct: "Elle va téléphoner.",
      explanation: "Elle va + infinitive. Téléphoner = to phone.",
      explanationFr: "Elle va + infinitif. Téléphoner = téléphoner."
    },
    {
      id: "17-3",
      type: "qcm",
      question: "'Next week' in French:",
      options: ["La semaine prochaine", "La prochaine semaine", "Semaine prochaine", "Next week"],
      correct: "La semaine prochaine",
      explanation: "La semaine prochaine (*pro-SHEN*) = next week. Le mois prochain = next month.",
      explanationFr: "La semaine prochaine = la semaine prochaine. Le mois prochain = le mois prochain."
    },
    {
      id: "17-4",
      type: "qcm",
      question: "'This weekend' in French:",
      options: ["Ce week-end", "Ce fin de semaine", "Ce weekend", "Ce we"],
      correct: "Ce week-end",
      explanation: "Ce week-end = this weekend. The word week-end is used in French!",
      explanationFr: "Ce week-end = ce week-end. Le mot week-end est utilisé en français !"
    },
    {
      id: "17-5",
      type: "qcm",
      question: "'We are going to the restaurant' in French:",
      options: ["Nous allons au restaurant.", "Nous allons à restaurant.", "Nous allons le restaurant.", "Nous sommes restaurant."],
      correct: "Nous allons au restaurant.",
      explanation: "Au = à + le. Nous allons = we are going (also futur proche when with infinitive).",
      explanationFr: "Au = à + le. Nous allons = nous allons (aussi futur proche avec infinitif)."
    },
    {
      id: "17-6",
      type: "qcm",
      question: "Which is an example of futur proche?",
      options: ["Je vais manger", "J'ai mangé", "Je mange", "Je mangerai"],
      correct: "Je vais manger",
      explanation: "Futur proche = aller + infinitive. Je vais manger = I'm going to eat.",
      explanationFr: "Futur proche = aller + infinitif. Je vais manger = je vais manger."
    },
    {
      id: "17-7",
      type: "qcm",
      question: "'I am going to do the shopping' in French:",
      options: ["Je vais faire les courses.", "Je vais les courses faire.", "Je faire les courses.", "Je vais les courses."],
      correct: "Je vais faire les courses.",
      explanation: "Je vais + faire + les courses. The infinitive always comes after aller.",
      explanationFr: "Je vais + faire + les courses. L'infinitif vient toujours après aller."
    },
    {
      id: "17-8",
      type: "qcm",
      question: "'Soon' in French:",
      options: ["Bientôt", "Vite", "Prochain", "Après"],
      correct: "Bientôt",
      explanation: "Bientôt (*byan-TOH*) = soon. À bientôt = see you soon!",
      explanationFr: "Bientôt = bientôt. À bientôt = à bientôt !"
    },
    {
      id: "17-9",
      type: "qcm",
      question: "'Next month' in French:",
      options: ["Le mois prochain", "Le prochain mois", "Mois prochain", "Le prochain mois"],
      correct: "Le mois prochain",
      explanation: "Le mois prochain = next month. La semaine prochaine = next week.",
      explanationFr: "Le mois prochain = le mois prochain. La semaine prochaine = la semaine prochaine."
    },
    {
      id: "17-10",
      type: "qcm",
      question: "'They are going to visit us' in French:",
      options: ["Ils vont nous rendre visite.", "Ils sont nous visiter.", "Ils vont nous visit.", "Ils allons visiter."],
      correct: "Ils vont nous rendre visite.",
      explanation: "Ils vont + infinitive = they are going to. Nous rendre visite = visit us.",
      explanationFr: "Ils vont + infinitif = ils vont. Nous rendre visite = nous rendre visite."
    }
  ],
  libre: [
    {
      id: "17-l1",
      type: "libre",
      question: "Translate: 'I'm going to clean the house tomorrow.'",
      correct: "Je vais nettoyer la maison demain.",
      alternatives: [],
      explanation: "Je vais + infinitive + demain.",
      explanationFr: "Je vais + infinitif + demain."
    },
    {
      id: "17-l2",
      type: "libre",
      question: "How do you say 'she is going to'?",
      correct: "elle va",
      alternatives: [],
      explanation: "Aller conjugated: je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont.",
      explanationFr: "Aller conjugué : je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont."
    },
    {
      id: "17-l3",
      type: "libre",
      question: "Translate: 'Next week I'm going to visit my family.'",
      correct: "La semaine prochaine je vais rendre visite à ma famille.",
      alternatives: ["La semaine prochaine je vais voir ma famille."],
      explanation: "Rendre visite à = to visit (a person). Voir = to see.",
      explanationFr: "Rendre visite à = rendre visite à (une personne). Voir = voir."
    },
    {
      id: "17-l4",
      type: "libre",
      question: "Complete: 'Je vais ___ la vaisselle ce soir.'",
      correct: "faire",
      alternatives: [],
      explanation: "Faire la vaisselle = do the dishes. Je vais faire = I'm going to do.",
      explanationFr: "Faire la vaisselle = faire la vaisselle. Je vais faire = je vais faire."
    },
    {
      id: "17-l5",
      type: "libre",
      question: "Translate: 'This weekend we're going to the market.'",
      correct: "Ce week-end nous allons au marché.",
      alternatives: [],
      explanation: "Au marché = to the market. Au = à + le.",
      explanationFr: "Au marché = au marché. Au = à + le."
    },
    {
      id: "17-l6",
      type: "libre",
      question: "How do you say 'soon'?",
      correct: "bientôt",
      alternatives: [],
      explanation: "Bientôt = soon. À bientôt = see you soon!",
      explanationFr: "Bientôt = bientôt. À bientôt = à bientôt !"
    },
    {
      id: "17-l7",
      type: "libre",
      question: "Translate: 'I'm going to rest this afternoon.'",
      correct: "Je vais me reposer cet après-midi.",
      alternatives: [],
      explanation: "Me reposer = to rest (myself). Cet après-midi = this afternoon.",
      explanationFr: "Me reposer = me reposer. Cet après-midi = cet après-midi."
    },
    {
      id: "17-l8",
      type: "libre",
      question: "Complete: 'Nous ___ aller au restaurant samedi.'",
      correct: "allons",
      alternatives: [],
      explanation: "Nous allons = we are going. Futur proche with nous.",
      explanationFr: "Nous allons = nous allons. Futur proche avec nous."
    },
    {
      id: "17-l9",
      type: "libre",
      question: "Translate: 'She's going to call next week.'",
      correct: "Elle va téléphoner la semaine prochaine.",
      alternatives: [],
      explanation: "Elle va + téléphoner. La semaine prochaine = next week.",
      explanationFr: "Elle va + téléphoner. La semaine prochaine = la semaine prochaine."
    },
    {
      id: "17-l10",
      type: "libre",
      question: "How do you say 'next month'?",
      correct: "le mois prochain",
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