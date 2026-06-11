// lesson-12.js -- My Routine -- Passe compose
const LESSON_12 = {
  id: 12,
  title: "My Routine -- Passe compose",
  titleFr: "Ma routine -- Passe compose",
  objectiveEn: "Talk about what you did today using passe compose",
  objectiveFr: "Parler de ce que vous avez fait aujourd'hui avec le passe compose",
  hintEn: "Passe compose = avoir/etre + past participle. Most verbs use avoir!",
  hintFr: "Passe compose = avoir/etre + participe passe. La plupart des verbes utilisent avoir !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Talking about what you did today</h4>
<p>Use <strong>passe compose</strong> = <em>avoir/etre + past participle</em> to say what you've done.</p>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>J'ai nettoye</td><td><em>*zhay net-wa-YAY*</em></td><td>I cleaned</td></tr>
<tr><td>J'ai arose</td><td><em>*zhay a-ro-ZAY*</em></td><td>I watered</td></tr>
<tr><td>J'ai fait les courses</td><td><em>*zhay fay lay KOORS*</em></td><td>I did the shopping</td></tr>
<tr><td>J'ai prepare</td><td><em>*zhay pray-pa-RAY*</em></td><td>I prepared</td></tr>
<tr><td>J'ai range</td><td><em>*zhay ran-ZHAY*</em></td><td>I tidied up</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Time expressions</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>ce matin</td><td>this morning</td></tr>
<tr><td>cet apres-midi</td><td>this afternoon</td></tr>
<tr><td>ce soir</td><td>this evening</td></tr>
<tr><td>demain</td><td>tomorrow</td></tr>
<tr><td>hier</td><td>yesterday</td></tr>
</table>
</div>
<div class="lesson-warning">Most verbs use <strong>avoir</strong> as auxiliary. Movement verbs (aller, venir, partir, arriver) use <strong>etre</strong>.</div>
<div class="lesson-example">
Ce matin j'ai nettoye la maison et j'ai arose le jardin. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">This morning I cleaned the house and watered the garden.</span>
</div>
  `,
  qcm: [
    {
      id: "12-1",
      type: "qcm",
      question: "I cleaned the house in French:",
      questionFr: "J'ai nettoye la maison. en anglais :",
      options: ["J'ai nettoye la maison.","Je suis nettoye.","J'ai nettoyer.","Je nettoyais."],
      optionsEn: ["I cleaned the house.","I am cleaned.","I have to clean.","I was cleaning."],
      correct: "J'ai nettoye la maison.",
      correctEn: "I cleaned the house.",
      explanation: "Passe compose with avoir: j'ai + nettoye (past participle). Never Je suis nettoye!",
      explanationFr: "Passe compose avec avoir : j'ai + nettoye. Jamais Je suis nettoye !"
    },
    {
      id: "12-2",
      type: "qcm",
      question: "This morning in French:",
      questionFr: "Ce matin en anglais :",
      options: ["Ce matin","Cet matin","Cette matin","Ce matinee"],
      optionsEn: ["This morning","This morning","This morning","This morning"],
      correct: "Ce matin",
      correctEn: "This morning",
      explanation: "Ce matin (suh ma-TAN) = this morning. Cet is used before vowels: cet apres-midi.",
      explanationFr: "Ce matin = ce matin. Cet est utilise avant les voyelles : cet apres-midi."
    },
    {
      id: "12-3",
      type: "qcm",
      question: "Past participle of FAIRE:",
      questionFr: "Participe passe de FAIRE :",
      options: ["fait","fais","faite","faire"],
      optionsEn: ["done/made","do","done (f)","to do"],
      correct: "fait",
      correctEn: "done / made",
      explanation: "Faire -> fait (fay). J'ai fait les courses = I did the shopping.",
      explanationFr: "Faire -> fait. J'ai fait les courses = j'ai fait les courses."
    },
    {
      id: "12-4",
      type: "qcm",
      question: "I watered the garden in French:",
      questionFr: "J'ai arose le jardin. en anglais :",
      options: ["J'ai arose le jardin.","Je suis arose.","J'ai arroser.","J'arrosais."],
      optionsEn: ["I watered the garden.","I am watered.","I have to water.","I was watering."],
      correct: "J'ai arose le jardin.",
      correctEn: "I watered the garden.",
      explanation: "Arroser -> arose. Always with avoir for this verb.",
      explanationFr: "Arroser -> arose. Toujours avec avoir pour ce verbe."
    },
    {
      id: "12-5",
      type: "qcm",
      question: "This afternoon in French:",
      questionFr: "Cet apres-midi en anglais :",
      options: ["Cet apres-midi","Ce apres-midi","Cette apres-midi","L'apres-midi"],
      optionsEn: ["This afternoon","This afternoon","This afternoon","The afternoon"],
      correct: "Cet apres-midi",
      correctEn: "This afternoon",
      explanation: "Apres-midi starts with a vowel, so use cet (not ce). Cet apres-midi = this afternoon.",
      explanationFr: "Apres-midi commence par une voyelle, donc utilisez cet (pas ce). Cet apres-midi = cet apres-midi."
    },
    {
      id: "12-6",
      type: "qcm",
      question: "I did the shopping in French:",
      questionFr: "J'ai fait les courses. en anglais :",
      options: ["J'ai fait les courses.","Je suis fait les courses.","J'ai faites les courses.","Je faisais courses."],
      optionsEn: ["I did the shopping.","I am done the shopping.","I have done (f) the shopping.","I was doing shopping."],
      correct: "J'ai fait les courses.",
      correctEn: "I did the shopping.",
      explanation: "Faire -> fait (past participle doesn't change with avoir auxiliary!).",
      explanationFr: "Faire -> fait (le participe passe ne change pas avec l'auxiliaire avoir !)."
    },
    {
      id: "12-7",
      type: "qcm",
      question: "Yesterday in French:",
      questionFr: "Hier en anglais :",
      options: ["Hier","Demain","Ce matin","Ce soir"],
      optionsEn: ["Yesterday","Tomorrow","This morning","This evening"],
      correct: "Hier",
      correctEn: "Yesterday",
      explanation: "Hier (ee-AIR) = yesterday. Demain = tomorrow. Avant-hier = the day before yesterday.",
      explanationFr: "Hier = hier. Demain = demain. Avant-hier = avant-hier."
    },
    {
      id: "12-8",
      type: "qcm",
      question: "I tidied up in French:",
      questionFr: "J'ai range. en anglais :",
      options: ["J'ai range.","Je suis range.","J'ai ranger.","Je rangeais."],
      optionsEn: ["I tidied up.","I am tidy.","I have to tidy.","I was tidying."],
      correct: "J'ai range.",
      correctEn: "I tidied up.",
      explanation: "Ranger -> range. Passe compose: j'ai + range.",
      explanationFr: "Ranger -> range. Passe compose : j'ai + range."
    },
    {
      id: "12-9",
      type: "qcm",
      question: "I just finished in French:",
      questionFr: "Je viens de finir. en anglais :",
      options: ["Je viens de finir.","J'ai venu finir.","Je suis de finir.","J'ai juste fini."],
      optionsEn: ["I just finished.","I have come finish.","I am of finish.","I just finished."],
      correct: "Je viens de finir.",
      correctEn: "I just finished.",
      explanation: "Je viens de + infinitive = I just [did something]. Very useful!",
      explanationFr: "Je viens de + infinitif = je viens de [faire quelque chose]. Tres utile !"
    },
    {
      id: "12-10",
      type: "qcm",
      question: "This evening in French:",
      questionFr: "Ce soir en anglais :",
      options: ["Ce soir","Ce soiree","Cette soir","Le soir"],
      optionsEn: ["This evening","This evening (f)","This evening","The evening"],
      correct: "Ce soir",
      correctEn: "This evening",
      explanation: "Ce soir (suh SWAHR) = this evening / tonight.",
      explanationFr: "Ce soir = ce soir / ce soir."
    }
  ],
  libre: [
    {
      id: "12-l1",
      type: "libre",
      question: "Past participle of nettoyer (to clean):",
      questionFr: "Participe passe de nettoyer :",
      correct: "nettoye",
      correctEn: "cleaned",
      alternatives: [],
      explanation: "Nettoyer -> nettoye. All -er verbs: drop -er, add -e.",
      explanationFr: "Nettoyer -> nettoye. Tous les verbes en -er : enlever -er, ajouter -e."
    },
    {
      id: "12-l2",
      type: "libre",
      question: "Translate: This morning I did the shopping.",
      questionFr: "Traduisez : Ce matin j'ai fait les courses.",
      correct: "Ce matin j'ai fait les courses.",
      correctEn: "This morning I did the shopping.",
      alternatives: [],
      explanation: "Ce matin = this morning. J'ai fait = I did (passe compose).",
      explanationFr: "Ce matin = ce matin. J'ai fait = j'ai fait (passe compose)."
    },
    {
      id: "12-l3",
      type: "libre",
      question: "How do you say I watered the garden?",
      questionFr: "Comment dit-on J'ai arose le jardin ?",
      correct: "J'ai arose le jardin.",
      correctEn: "I watered the garden.",
      alternatives: [],
      explanation: "Arroser -> arose. J'ai + arose.",
      explanationFr: "Arroser -> arose. J'ai + arose."
    },
    {
      id: "12-l4",
      type: "libre",
      question: "Translate: This evening I'm going to rest.",
      questionFr: "Traduisez : Ce soir je vais me reposer.",
      correct: "Ce soir je vais me reposer.",
      correctEn: "This evening I'm going to rest.",
      alternatives: [],
      explanation: "Ce soir = this evening. Je vais + infinitive = near future.",
      explanationFr: "Ce soir = ce soir. Je vais + infinitif = futur proche."
    },
    {
      id: "12-l5",
      type: "libre",
      question: "Complete: J'ai ___ la vaisselle ce matin.",
      questionFr: "Completez : J'ai ___ la vaisselle ce matin.",
      correct: "fait",
      correctEn: "done",
      alternatives: [],
      explanation: "Faire la vaisselle = do the dishes. Passe compose: j'ai fait.",
      explanationFr: "Faire la vaisselle = faire la vaisselle. Passe compose : j'ai fait."
    },
    {
      id: "12-l6",
      type: "libre",
      question: "How do you say I just arrived?",
      questionFr: "Comment dit-on Je viens d'arriver ?",
      correct: "Je viens d'arriver.",
      correctEn: "I just arrived.",
      alternatives: [],
      explanation: "Je viens de + infinitive = I just [did]. Je viens d'arriver = I just arrived.",
      explanationFr: "Je viens de + infinitif = je viens de [faire]. Je viens d'arriver = je viens d'arriver."
    },
    {
      id: "12-l7",
      type: "libre",
      question: "Translate: Yesterday I cleaned the whole house.",
      questionFr: "Traduisez : Hier j'ai nettoye toute la maison.",
      correct: "Hier j'ai nettoye toute la maison.",
      correctEn: "Yesterday I cleaned the whole house.",
      alternatives: [],
      explanation: "Hier = yesterday. Toute la maison = the whole house.",
      explanationFr: "Hier = hier. Toute la maison = toute la maison."
    },
    {
      id: "12-l8",
      type: "libre",
      question: "What does ce soir mean?",
      questionFr: "Que signifie ce soir ?",
      correct: "this evening",
      correctEn: "this evening",
      alternatives: ["tonight"],
      explanation: "Ce soir = this evening / tonight. Ce matin = this morning.",
      explanationFr: "Ce soir = ce soir / ce soir. Ce matin = ce matin."
    },
    {
      id: "12-l9",
      type: "libre",
      question: "Complete: J'ai ___ le jardin ce matin.",
      questionFr: "Completez : J'ai ___ le jardin ce matin.",
      correct: "arose",
      correctEn: "watered",
      alternatives: [],
      explanation: "Arroser -> arose. J'ai arose = I watered.",
      explanationFr: "Arroser -> arose. J'ai arose = j'ai arose."
    },
    {
      id: "12-l10",
      type: "libre",
      question: "Translate: I need to tidy up tomorrow.",
      questionFr: "Traduisez : Je dois ranger demain.",
      correct: "Je dois ranger demain.",
      correctEn: "I need to tidy up tomorrow.",
      alternatives: [],
      explanation: "Je dois + infinitive = I need to. Ranger = to tidy up.",
      explanationFr: "Je dois + infinitif = je dois. Ranger = ranger."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_12;
} else {
  window.LESSON_12 = LESSON_12;
}
