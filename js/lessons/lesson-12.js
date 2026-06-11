// lesson-12.js — My Routine 🌅 — Passé composé
const LESSON_12 = {
  id: 12,
  title: "My Routine 🌅 — Passé composé",
  titleFr: "Ma routine — Passé composé",
  objectiveEn: "Talk about what you did today using passé composé",
  objectiveFr: "Parler de ce que vous avez fait aujourd'hui avec le passé composé",
  hintEn: "Passé composé = avoir/être + past participle. Most verbs use avoir!",
  hintFr: "Passé composé = avoir/être + participe passé. La plupart des verbes utilisent avoir !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🌅 Talking about what you did today</h4>
<p>Use <strong>passé composé</strong> = <em>avoir/être + past participle</em> to say what you've done.</p>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>J'ai nettoyé</td><td><em>*zhay net-wa-YAY*</em></td><td>I cleaned</td></tr>
<tr><td>J'ai arrosé</td><td><em>*zhay a-ro-ZAY*</em></td><td>I watered</td></tr>
<tr><td>J'ai fait les courses</td><td><em>*zhay fay lay KOORS*</em></td><td>I did the shopping</td></tr>
<tr><td>J'ai préparé</td><td><em>*zhay pray-pa-RAY*</em></td><td>I prepared</td></tr>
<tr><td>J'ai rangé</td><td><em>*zhay ran-ZHAY*</em></td><td>I tidied up</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>⏰ Time expressions</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>ce matin</td><td>this morning</td></tr>
<tr><td>cet après-midi</td><td>this afternoon</td></tr>
<tr><td>ce soir</td><td>this evening</td></tr>
<tr><td>demain</td><td>tomorrow</td></tr>
<tr><td>hier</td><td>yesterday</td></tr>
</table>
</div>
<div class="lesson-warning">⚠️ Most verbs use <strong>avoir</strong> as auxiliary. Movement verbs (aller, venir, partir, arriver) use <strong>être</strong>.</div>
<div class="lesson-example">
Ce matin j'ai nettoyé la maison et j'ai arrosé le jardin. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">This morning I cleaned the house and watered the garden.</span>
</div>
  `,
  qcm: [
    {
      id: "12-1",
      type: "qcm",
      question: "'I cleaned the house' in French:",
      questionFr: "'J'ai nettoyé la maison.' en anglais :",
      options: ["J'ai nettoyé la maison.","Je suis nettoyé.","J'ai nettoyer.","Je nettoyais."],
      optionsEn: ["I cleaned the house.","I am cleaned.","I have to clean.","I was cleaning."],
      correct: "J'ai nettoyé la maison.",
      correctEn: "I cleaned the house.",
      explanation: "Passé composé with avoir: j'ai + nettoyé (past participle). Never 'Je suis nettoyé'!",
      explanationFr: "Passé composé avec avoir : j'ai + nettoyé. Jamais 'Je suis nettoyé' !"
    },
    {
      id: "12-2",
      type: "qcm",
      question: "'This morning' in French:",
      questionFr: "'Ce matin' en anglais :",
      options: ["Ce matin","Cet matin","Cette matin","Ce matinée"],
      optionsEn: ["This morning","This morning","This morning","This morning"],
      correct: "Ce matin",
      correctEn: "This morning",
      explanation: "Ce matin (*suh ma-TAN*) = this morning. Cet is used before vowels: cet après-midi.",
      explanationFr: "Ce matin = ce matin. Cet est utilisé avant les voyelles : cet après-midi."
    },
    {
      id: "12-3",
      type: "qcm",
      question: "Past participle of FAIRE:",
      questionFr: "Participe passé de FAIRE :",
      options: ["fait","fais","faite","faire"],
      optionsEn: ["done/made","do","done (f)","to do"],
      correct: "fait",
      correctEn: "done / made",
      explanation: "Faire → fait (*fay*). J'ai fait les courses = I did the shopping.",
      explanationFr: "Faire → fait. J'ai fait les courses = j'ai fait les courses."
    },
    {
      id: "12-4",
      type: "qcm",
      question: "'I watered the garden' in French:",
      questionFr: "'J'ai arrosé le jardin.' en anglais :",
      options: ["J'ai arrosé le jardin.","Je suis arrosé.","J'ai arroser.","J'arrosais."],
      optionsEn: ["I watered the garden.","I am watered.","I have to water.","I was watering."],
      correct: "J'ai arrosé le jardin.",
      correctEn: "I watered the garden.",
      explanation: "Arroser → arrosé. Always with avoir for this verb.",
      explanationFr: "Arroser → arrosé. Toujours avec avoir pour ce verbe."
    },
    {
      id: "12-5",
      type: "qcm",
      question: "'This afternoon' in French:",
      questionFr: "'Cet après-midi' en anglais :",
      options: ["Cet après-midi","Ce après-midi","Cette après-midi","L'après-midi"],
      optionsEn: ["This afternoon","This afternoon","This afternoon","The afternoon"],
      correct: "Cet après-midi",
      correctEn: "This afternoon",
      explanation: "Après-midi starts with a vowel, so use cet (not ce). Cet après-midi = this afternoon.",
      explanationFr: "Après-midi commence par une voyelle, donc utilisez cet (pas ce). Cet après-midi = cet après-midi."
    },
    {
      id: "12-6",
      type: "qcm",
      question: "'I did the shopping' in French:",
      questionFr: "'J'ai fait les courses.' en anglais :",
      options: ["J'ai fait les courses.","Je suis fait les courses.","J'ai faites les courses.","Je faisais courses."],
      optionsEn: ["I did the shopping.","I am done the shopping.","I have done (f) the shopping.","I was doing shopping."],
      correct: "J'ai fait les courses.",
      correctEn: "I did the shopping.",
      explanation: "Faire → fait (past participle doesn't change with avoir auxiliary!).",
      explanationFr: "Faire → fait (le participe passé ne change pas avec l'auxiliaire avoir !)."
    },
    {
      id: "12-7",
      type: "qcm",
      question: "'Yesterday' in French:",
      questionFr: "'Hier' en anglais :",
      options: ["Hier","Demain","Ce matin","Ce soir"],
      optionsEn: ["Yesterday","Tomorrow","This morning","This evening"],
      correct: "Hier",
      correctEn: "Yesterday",
      explanation: "Hier (*ee-AIR*) = yesterday. Demain = tomorrow. Avant-hier = the day before yesterday.",
      explanationFr: "Hier = hier. Demain = demain. Avant-hier = avant-hier."
    },
    {
      id: "12-8",
      type: "qcm",
      question: "'I tidied up' in French:",
      questionFr: "'J'ai rangé.' en anglais :",
      options: ["J'ai rangé.","Je suis rangé.","J'ai ranger.","Je rangeais."],
      optionsEn: ["I tidied up.","I am tidy.","I have to tidy.","I was tidying."],
      correct: "J'ai rangé.",
      correctEn: "I tidied up.",
      explanation: "Ranger → rangé. Passé composé: j'ai + rangé.",
      explanationFr: "Ranger → rangé. Passé composé : j'ai + rangé."
    },
    {
      id: "12-9",
      type: "qcm",
      question: "'I just finished' in French:",
      questionFr: "'Je viens de finir.' en anglais :",
      options: ["Je viens de finir.","J'ai venu finir.","Je suis de finir.","J'ai juste fini."],
      optionsEn: ["I just finished.","I have come finish.","I am of finish.","I just finished."],
      correct: "Je viens de finir.",
      correctEn: "I just finished.",
      explanation: "Je viens de + infinitive = I just [did something]. Very useful!",
      explanationFr: "Je viens de + infinitif = je viens de [faire quelque chose]. Très utile !"
    },
    {
      id: "12-10",
      type: "qcm",
      question: "'This evening' in French:",
      questionFr: "'Ce soir' en anglais :",
      options: ["Ce soir","Ce soirée","Cette soir","Le soir"],
      optionsEn: ["This evening","This evening (f)","This evening","The evening"],
      correct: "Ce soir",
      correctEn: "This evening",
      explanation: "Ce soir (*suh SWAHR*) = this evening / tonight.",
      explanationFr: "Ce soir = ce soir / ce soir."
    }
  ],
  libre: [
    {
      id: "12-l1",
      type: "libre",
      question: "Past participle of 'nettoyer' (to clean):",
      questionFr: "Participe passé de 'nettoyer' :",
      correct: "nettoyé",
      correctEn: "cleaned",
      alternatives: [],
      explanation: "Nettoyer → nettoyé. All -er verbs: drop -er, add -é.",
      explanationFr: "Nettoyer → nettoyé. Tous les verbes en -er : enlever -er, ajouter -é."
    },
    {
      id: "12-l2",
      type: "libre",
      question: "Translate: 'This morning I did the shopping.'",
      questionFr: "Traduisez : 'Ce matin j'ai fait les courses.'",
      correct: "Ce matin j'ai fait les courses.",
      correctEn: "This morning I did the shopping.",
      alternatives: [],
      explanation: "Ce matin = this morning. J'ai fait = I did (passé composé).",
      explanationFr: "Ce matin = ce matin. J'ai fait = j'ai fait (passé composé)."
    },
    {
      id: "12-l3",
      type: "libre",
      question: "How do you say 'I watered the garden'?",
      questionFr: "Comment dit-on 'J'ai arrosé le jardin' ?",
      correct: "J'ai arrosé le jardin.",
      correctEn: "I watered the garden.",
      alternatives: [],
      explanation: "Arroser → arrosé. J'ai + arrosé.",
      explanationFr: "Arroser → arrosé. J'ai + arrosé."
    },
    {
      id: "12-l4",
      type: "libre",
      question: "Translate: 'This evening I'm going to rest.'",
      questionFr: "Traduisez : 'Ce soir je vais me reposer.'",
      correct: "Ce soir je vais me reposer.",
      correctEn: "This evening I'm going to rest.",
      alternatives: [],
      explanation: "Ce soir = this evening. Je vais + infinitive = near future.",
      explanationFr: "Ce soir = ce soir. Je vais + infinitif = futur proche."
    },
    {
      id: "12-l5",
      type: "libre",
      question: "Complete: 'J'ai ___ la vaisselle ce matin.'",
      questionFr: "Complétez : 'J'ai ___ la vaisselle ce matin.'",
      correct: "fait",
      correctEn: "done",
      alternatives: [],
      explanation: "Faire la vaisselle = do the dishes. Passé composé: j'ai fait.",
      explanationFr: "Faire la vaisselle = faire la vaisselle. Passé composé : j'ai fait."
    },
    {
      id: "12-l6",
      type: "libre",
      question: "How do you say 'I just arrived'?",
      questionFr: "Comment dit-on 'Je viens d'arriver' ?",
      correct: "Je viens d'arriver.",
      correctEn: "I just arrived.",
      alternatives: [],
      explanation: "Je viens de + infinitive = I just [did]. Je viens d'arriver = I just arrived.",
      explanationFr: "Je viens de + infinitif = je viens de [faire]. Je viens d'arriver = je viens d'arriver."
    },
    {
      id: "12-l7",
      type: "libre",
      question: "Translate: 'Yesterday I cleaned the whole house.'",
      questionFr: "Traduisez : 'Hier j'ai nettoyé toute la maison.'",
      correct: "Hier j'ai nettoyé toute la maison.",
      correctEn: "Yesterday I cleaned the whole house.",
      alternatives: [],
      explanation: "Hier = yesterday. Toute la maison = the whole house.",
      explanationFr: "Hier = hier. Toute la maison = toute la maison."
    },
    {
      id: "12-l8",
      type: "libre",
      question: "What does 'ce soir' mean?",
      questionFr: "Que signifie 'ce soir' ?",
      correct: "this evening",
      correctEn: "this evening",
      alternatives: ["tonight"],
      explanation: "Ce soir = this evening / tonight. Ce matin = this morning.",
      explanationFr: "Ce soir = ce soir / ce soir. Ce matin = ce matin."
    },
    {
      id: "12-l9",
      type: "libre",
      question: "Complete: 'J'ai ___ le jardin ce matin.'",
      questionFr: "Complétez : 'J'ai ___ le jardin ce matin.'",
      correct: "arrosé",
      correctEn: "watered",
      alternatives: [],
      explanation: "Arroser → arrosé. J'ai arrosé = I watered.",
      explanationFr: "Arroser → arrosé. J'ai arrosé = j'ai arrosé."
    },
    {
      id: "12-l10",
      type: "libre",
      question: "Translate: 'I need to tidy up tomorrow.'",
      questionFr: "Traduisez : 'Je dois ranger demain.'",
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
