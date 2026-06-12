// lesson-12.js -- Daily Routine
const LESSON_12 = {
  id: 12,
  title: "Daily Routine",
  titleFr: "La Routine Quotidienne",
  objectiveEn: "Talk about daily activities using the passe compose (recent past)",
  objectiveFr: "Parler des activites quotidiennes en utilisant le passe compose (passe recent)",
  hintEn: "Use the passe compose for completed actions: J'ai fait = I did / I have done",
  hintFr: "Utilisez le passe compose pour les actions terminees : J'ai fait = j'ai fait / j'ai fait",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Recent past (passe compose with avoir)</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>J'ai nettoye</td><td><em>*zhay net-wa-YAY*</em></td><td>I cleaned <!-- *eye kleend* --></td></tr>
<tr><td>J'ai arose</td><td><em>*zhay a-ro-ZAY*</em></td><td>I watered <!-- *eye WAH-turd* --></td></tr>
<tr><td>J'ai fait les courses</td><td><em>*zhay fay lay KOORS*</em></td><td>I did the shopping <!-- *eye did thuh SHOP-ing* --></td></tr>
<tr><td>J'ai prepare</td><td><em>*zhay pray-pa-RAY*</em></td><td>I prepared <!-- *eye pree-PAYRD* --></td></tr>
<tr><td>J'ai range</td><td><em>*zhay ran-ZHAY*</em></td><td>I tidied up <!-- *eye TYE-dee up* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Time expressions</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>ce matin</td><td><em>*suh ma-TAN*</em></td><td>this morning <!-- *this MOR-ning* --></td></tr>
<tr><td>cet apres-midi</td><td><em>*set ah-pray-mee-DEE*</em></td><td>this afternoon <!-- *this af-ter-NOON* --></td></tr>
<tr><td>ce soir</td><td><em>*suh SWAHR*</em></td><td>this evening <!-- *this EE-ving* --></td></tr>
<tr><td>demain</td><td><em>*duh-MAN*</em></td><td>tomorrow <!-- *tuh-MOR-oh* --></td></tr>
<tr><td>hier</td><td><em>*ee-AIR*</em></td><td>yesterday <!-- *YES-tur-day* --></td></tr>
</table>
</div>
<div class="lesson-warning">The <strong>passe compose</strong> is formed with <strong>avoir</strong> + past participle. For -er verbs, the past participle ends in -e: nettoye, arose, prepare, range.</div>
<div class="lesson-example">
-- Qu'est-ce que tu as fait ce matin ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">What did you do this morning?</span><br>
-- J'ai fait les courses et j'ai nettoye la cuisine. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I did the shopping and cleaned the kitchen.</span>
</div>
  `,
  qcm: [
    {
      id: "12-1",
      type: "qcm",
      question: "I cleaned in French:",
      questionFr: "J'ai nettoye en anglais :",
      options: ["J'ai nettoye","Je nettoie","Je suis nettoye","J'ai nettoyer"],
      optionsEn: ["I cleaned","I clean","I am cleaned","I have to clean"],
      correct: "J'ai nettoye",
      correctEn: "I cleaned",
      explanation: "J'ai nettoye (zhay net-wa-YAY) = I cleaned. Passe compose with avoir.",
      explanationFr: "J'ai nettoye = j'ai nettoye. Passe compose avec avoir."
    },
    {
      id: "12-2",
      type: "qcm",
      question: "I watered in French:",
      questionFr: "J'ai arose en anglais :",
      options: ["J'ai arose","J'arrose","Je suis arose","J'ai arroser"],
      optionsEn: ["I watered","I water","I am watered","I have to water"],
      correct: "J'ai arose",
      correctEn: "I watered",
      explanation: "J'ai arose (zhay a-ro-ZAY) = I watered. Passe compose of arroser.",
      explanationFr: "J'ai arose = j'ai arose. Passe compose d'arroser."
    },
    {
      id: "12-3",
      type: "qcm",
      question: "I did the shopping in French:",
      questionFr: "J'ai fait les courses en anglais :",
      options: ["J'ai fait les courses","Je fais les courses","Je suis courses","J'ai faire courses"],
      optionsEn: ["I did the shopping","I do the shopping","I am shopping","I have to do shopping"],
      correct: "J'ai fait les courses",
      correctEn: "I did the shopping",
      explanation: "J'ai fait les courses (zhay fay lay KOORS) = I did the shopping. Faire = to do/make.",
      explanationFr: "J'ai fait les courses = j'ai fait les courses. Faire = faire."
    },
    {
      id: "12-4",
      type: "qcm",
      question: "I prepared in French:",
      questionFr: "J'ai prepare en anglais :",
      options: ["J'ai prepare","Je prepare","Je suis prepare","J'ai preparer"],
      optionsEn: ["I prepared","I prepare","I am prepared","I have to prepare"],
      correct: "J'ai prepare",
      correctEn: "I prepared",
      explanation: "J'ai prepare (zhay pray-pa-RAY) = I prepared. Passe compose of preparer.",
      explanationFr: "J'ai prepare = j'ai prepare. Passe compose de preparer."
    },
    {
      id: "12-5",
      type: "qcm",
      question: "I tidied up in French:",
      questionFr: "J'ai range en anglais :",
      options: ["J'ai range","Je range","Je suis range","J'ai ranger"],
      optionsEn: ["I tidied up","I tidy up","I am tidied","I have to tidy"],
      correct: "J'ai range",
      correctEn: "I tidied up",
      explanation: "J'ai range (zhay ran-ZHAY) = I tidied up. Ranger = to tidy up.",
      explanationFr: "J'ai range = j'ai range. Ranger = ranger."
    },
    {
      id: "12-6",
      type: "qcm",
      question: "This morning in French:",
      questionFr: "Ce matin en anglais :",
      options: ["Ce matin","Cette matin","Le matin","La matin"],
      optionsEn: ["This morning","This morning (wrong)","The morning","The morning"],
      correct: "Ce matin",
      correctEn: "This morning",
      explanation: "Ce matin (suh ma-TAN) = this morning. Ce = this (masculine).",
      explanationFr: "Ce matin = ce matin. Ce = ce (masculin)."
    },
    {
      id: "12-7",
      type: "qcm",
      question: "This afternoon in French:",
      questionFr: "Cet apres-midi en anglais :",
      options: ["Cet apres-midi","Ce apres-midi","L'apres-midi","La apres-midi"],
      optionsEn: ["This afternoon","This afternoon (wrong)","The afternoon","The afternoon"],
      correct: "Cet apres-midi",
      correctEn: "This afternoon",
      explanation: "Cet apres-midi (set ah-pray-mee-DEE) = this afternoon. Cet = this (before vowel).",
      explanationFr: "Cet apres-midi = cet apres-midi. Cet = cet (devant voyelle)."
    },
    {
      id: "12-8",
      type: "qcm",
      question: "This evening in French:",
      questionFr: "Ce soir en anglais :",
      options: ["Ce soir","Cette soir","Le soir","La soir"],
      optionsEn: ["This evening","This evening (wrong)","The evening","The evening"],
      correct: "Ce soir",
      correctEn: "This evening",
      explanation: "Ce soir (suh SWAHR) = this evening. Soir = evening.",
      explanationFr: "Ce soir = ce soir. Soir = soir."
    },
    {
      id: "12-9",
      type: "qcm",
      question: "Tomorrow in French:",
      questionFr: "Demain en anglais :",
      options: ["Demain","Hier","Aujourd'hui","Apres"],
      optionsEn: ["Tomorrow","Yesterday","Today","After"],
      correct: "Demain",
      correctEn: "Tomorrow",
      explanation: "Demain (duh-MAN) = tomorrow. A demain = see you tomorrow.",
      explanationFr: "Demain = demain. A demain = a demain."
    },
    {
      id: "12-10",
      type: "qcm",
      question: "Yesterday in French:",
      questionFr: "Hier en anglais :",
      options: ["Hier","Demain","Aujourd'hui","Avant"],
      optionsEn: ["Yesterday","Tomorrow","Today","Before"],
      correct: "Hier",
      correctEn: "Yesterday",
      explanation: "Hier (ee-AIR) = yesterday. D'hier = from yesterday.",
      explanationFr: "Hier = hier. D'hier = d'hier."
    }
  ],
  libre: [
    {
      id: "12-l1",
      type: "libre",
      question: "Translate: I cleaned the kitchen.",
      questionFr: "Traduisez : J'ai nettoye la cuisine.",
      correct: "J'ai nettoye la cuisine.",
      correctEn: "I cleaned the kitchen.",
      alternatives: [],
      explanation: "J'ai nettoye = I cleaned. La cuisine = the kitchen.",
      explanationFr: "J'ai nettoye = j'ai nettoye. La cuisine = la cuisine."
    },
    {
      id: "12-l2",
      type: "libre",
      question: "How do you say I watered the garden?",
      questionFr: "Comment dit-on J'ai arose le jardin ?",
      correct: "J'ai arose le jardin.",
      correctEn: "I watered the garden.",
      alternatives: [],
      explanation: "J'ai arose = I watered. Le jardin = the garden.",
      explanationFr: "J'ai arose = j'ai arose. Le jardin = le jardin."
    },
    {
      id: "12-l3",
      type: "libre",
      question: "Translate: I did the shopping this morning.",
      questionFr: "Traduisez : J'ai fait les courses ce matin.",
      correct: "J'ai fait les courses ce matin.",
      correctEn: "I did the shopping this morning.",
      alternatives: [],
      explanation: "J'ai fait les courses = I did the shopping. Ce matin = this morning.",
      explanationFr: "J'ai fait les courses = j'ai fait les courses. Ce matin = ce matin."
    },
    {
      id: "12-l4",
      type: "libre",
      question: "Complete: J'ai ___ la cuisine.",
      questionFr: "Completez : J'ai ___ la cuisine.",
      correct: "nettoye",
      correctEn: "cleaned",
      alternatives: ["prepare","range"],
      explanation: "J'ai nettoye = I cleaned. Nettoyer = to clean.",
      explanationFr: "J'ai nettoye = j'ai nettoye. Nettoyer = nettoyer."
    },
    {
      id: "12-l5",
      type: "libre",
      question: "How do you say yesterday?",
      questionFr: "Comment dit-on hier ?",
      correct: "hier",
      correctEn: "yesterday",
      alternatives: [],
      explanation: "Hier = yesterday. Avant-hier = the day before yesterday.",
      explanationFr: "Hier = hier. Avant-hier = avant-hier."
    },
    {
      id: "12-l6",
      type: "libre",
      question: "Translate: I tidied up my room.",
      questionFr: "Traduisez : J'ai range ma chambre.",
      correct: "J'ai range ma chambre.",
      correctEn: "I tidied up my room.",
      alternatives: [],
      explanation: "J'ai range = I tidied up. Ma chambre = my room.",
      explanationFr: "J'ai range = j'ai range. Ma chambre = ma chambre."
    },
    {
      id: "12-l7",
      type: "libre",
      question: "Complete: ___ apres-midi, j'ai fait les courses.",
      questionFr: "Completez : ___ apres-midi, j'ai fait les courses.",
      correct: "Cet",
      correctEn: "This",
      alternatives: [],
      explanation: "Cet apres-midi = this afternoon. Cet = this (before vowel).",
      explanationFr: "Cet apres-midi = cet apres-midi. Cet = cet (devant voyelle)."
    },
    {
      id: "12-l8",
      type: "libre",
      question: "How do you say I prepared dinner?",
      questionFr: "Comment dit-on J'ai prepare le diner ?",
      correct: "J'ai prepare le diner.",
      correctEn: "I prepared dinner.",
      alternatives: [],
      explanation: "J'ai prepare = I prepared. Le diner = dinner.",
      explanationFr: "J'ai prepare = j'ai prepare. Le diner = le diner."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_12;
} else {
  window.LESSON_12 = LESSON_12;
}
