// lesson-07.js -- Friends & Going Out
const LESSON_07 = {
  id: 7,
  title: "Friends & Going Out",
  titleFr: "Amis & Sorties",
  objectiveEn: "Make plans with friends, suggest activities, arrange meetings",
  objectiveFr: "Faire des projets avec des amis, suggerer des activites, organiser des rendez-vous",
  hintEn: "Use Ca vous dit de... ? to suggest something -- it is very natural and friendly!",
  hintFr: "Utilisez Ca vous dit de... ? pour suggerer quelque chose -- c'est tres naturel et amical !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Making plans</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>Ca vous dit de... ?</td><td><em>*sah voo dee duh...*</em></td><td>Would you like to... ? <!-- *wood yoo lye too...* --></td></tr>
<tr><td>On se retrouve ou ?</td><td><em>*on suh ruh-TROOV oo*</em></td><td>Where shall we meet? <!-- *WAIR shal wee meet* --></td></tr>
<tr><td>A quelle heure ?</td><td><em>*ah kel urr*</em></td><td>At what time? <!-- *at wot tyme* --></td></tr>
<tr><td>Je suis libre samedi.</td><td><em>*zhuh swee LEE-bruh sam-DEE*</em></td><td>I am free on Saturday. <!-- *eye am free on SAT-ur-day* --></td></tr>
<tr><td>Avec plaisir !</td><td><em>*a-vek play-ZEER*</em></td><td>With pleasure! / Gladly! <!-- *with PLEZH-ur* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Places to go</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>au restaurant</td><td><em>*oh res-toh-RAHN*</em></td><td>to the restaurant <!-- *too thuh res-tuh-RAHN* --></td></tr>
<tr><td>au cafe</td><td><em>*oh kah-FAY*</em></td><td>to the cafe <!-- *too thuh ka-FAY* --></td></tr>
<tr><td>en balade</td><td><em>*ahn ba-LAHD*</em></td><td>for a walk <!-- *for uh wawk* --></td></tr>
<tr><td>au cinema</td><td><em>*oh see-nay-MAH*</em></td><td>to the cinema <!-- *too thuh SIN-uh-mah* --></td></tr>
</table>
</div>
<div class="lesson-warning">In France, friends often meet <strong>au cafe</strong> for a drink before dinner. It is a classic social ritual!</div>
<div class="lesson-example">
-- Ca vous dit d'aller au cinema samedi ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Would you like to go to the cinema on Saturday?</span><br>
-- Avec plaisir ! A quelle heure ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">With pleasure! At what time?</span>
</div>
  `,
  qcm: [
    {
      id: "07-1",
      type: "qcm",
      question: "Would you like to go to the restaurant? in French:",
      questionFr: "Ca vous dit d'aller au restaurant ? en anglais :",
      options: ["Ca vous dit d'aller au restaurant ?","Voulez-vous aller restaurant ?","Vous aimez restaurant ?","Allons restaurant ?"],
      optionsEn: ["Would you like to go to the restaurant?","Do you want to go restaurant?","Do you like restaurant?","Let's go restaurant?"],
      correct: "Ca vous dit d'aller au restaurant ?",
      correctEn: "Would you like to go to the restaurant?",
      explanation: "Ca vous dit de... (sah voo dee duh) = Would you like to... Very natural French.",
      explanationFr: "Ca vous dit de... = ca vous dit de... Tres naturel en francais."
    },
    {
      id: "07-2",
      type: "qcm",
      question: "Where shall we meet? in French:",
      questionFr: "On se retrouve ou ? en anglais :",
      options: ["On se retrouve ou ?","Ou retrouvons-nous ?","Ou on se voit ?","Rendez-vous ou ?"],
      optionsEn: ["Where shall we meet?","Where do we meet?","Where do we see each other?","Meeting where?"],
      correct: "On se retrouve ou ?",
      correctEn: "Where shall we meet?",
      explanation: "On se retrouve (on suh ruh-TROOV) = We meet up / Let's meet.",
      explanationFr: "On se retrouve = on se retrouve. Se retrouver = se retrouver."
    },
    {
      id: "07-3",
      type: "qcm",
      question: "At what time? in French:",
      questionFr: "A quelle heure ? en anglais :",
      options: ["A quelle heure ?","Quel temps ?","Quand ?","Quelle heure est-il ?"],
      optionsEn: ["At what time?","What time?","When?","What time is it?"],
      correct: "A quelle heure ?",
      correctEn: "At what time?",
      explanation: "A quelle heure (ah kel urr) = At what time? Heure = hour/time.",
      explanationFr: "A quelle heure = a quelle heure. Heure = heure."
    },
    {
      id: "07-4",
      type: "qcm",
      question: "I am free on Saturday. in French:",
      questionFr: "Je suis libre samedi. en anglais :",
      options: ["Je suis libre samedi.","Je suis gratuit samedi.","J'ai libre samedi.","Samedi je libre."],
      optionsEn: ["I am free on Saturday.","I am free (wrong word) Saturday.","I have free Saturday.","Saturday I free."],
      correct: "Je suis libre samedi.",
      correctEn: "I am free on Saturday.",
      explanation: "Je suis libre (zhuh swee LEE-bruh) = I am free. Libre = free (time).",
      explanationFr: "Je suis libre = je suis libre. Libre = libre (temps)."
    },
    {
      id: "07-5",
      type: "qcm",
      question: "With pleasure! in French:",
      questionFr: "Avec plaisir ! en anglais :",
      options: ["Avec plaisir !","Avec plaisant !","C'est plaisir !","Plaisir !"],
      optionsEn: ["With pleasure!","With pleasant!","It's pleasure!","Pleasure!"],
      correct: "Avec plaisir !",
      correctEn: "With pleasure!",
      explanation: "Avec plaisir (a-vek play-ZEER) = With pleasure! Very enthusiastic yes!",
      explanationFr: "Avec plaisir = avec plaisir. Oui tres enthousiaste !"
    },
    {
      id: "07-6",
      type: "qcm",
      question: "To the restaurant in French:",
      questionFr: "Au restaurant en anglais :",
      options: ["Au restaurant","A la restaurant","Le restaurant","En restaurant"],
      optionsEn: ["To the restaurant","To the restaurant","The restaurant","In restaurant"],
      correct: "Au restaurant",
      correctEn: "To the restaurant",
      explanation: "Au (oh) = to the (masculine). A la = to the (feminine).",
      explanationFr: "Au = au (masculin). A la = a la (feminin)."
    },
    {
      id: "07-7",
      type: "qcm",
      question: "For a walk in French:",
      questionFr: "En balade en anglais :",
      options: ["En balade","A pied","Pour marcher","Une promenade"],
      optionsEn: ["For a walk","On foot","To walk","A walk"],
      correct: "En balade",
      correctEn: "For a walk",
      explanation: "En balade (ahn ba-LAHD) = for a walk / stroll. Promenade = walk (noun).",
      explanationFr: "En balade = en balade. Promenade = promenade."
    },
    {
      id: "07-8",
      type: "qcm",
      question: "To the cinema in French:",
      questionFr: "Au cinema en anglais :",
      options: ["Au cinema","A la cinema","Le cinema","En cinema"],
      optionsEn: ["To the cinema","To the cinema","The cinema","In cinema"],
      correct: "Au cinema",
      correctEn: "To the cinema",
      explanation: "Au cinema (oh see-nay-MAH) = to the cinema. Le cinema = the cinema.",
      explanationFr: "Au cinema = au cinema. Le cinema = le cinema."
    },
    {
      id: "07-9",
      type: "qcm",
      question: "To the cafe in French:",
      questionFr: "Au cafe en anglais :",
      options: ["Au cafe","A la cafe","Le cafe","En cafe"],
      optionsEn: ["To the cafe","To the cafe","The cafe","In cafe"],
      correct: "Au cafe",
      correctEn: "To the cafe",
      explanation: "Au cafe (oh kah-FAY) = to the cafe. Very common meeting place in France!",
      explanationFr: "Au cafe = au cafe. Lieu de rendez-vous tres courant en France !"
    },
    {
      id: "07-10",
      type: "qcm",
      question: "Shall we go for a walk? in French:",
      questionFr: "On va en balade ? en anglais :",
      options: ["On va en balade ?","On marche ?","On fait balade ?","Balade ?"],
      optionsEn: ["Shall we go for a walk?","Do we walk?","Do we do walk?","Walk?"],
      correct: "On va en balade ?",
      correctEn: "Shall we go for a walk?",
      explanation: "On va en balade ? = Shall we go for a walk? Very casual suggestion.",
      explanationFr: "On va en balade ? = suggestion tres decontractee."
    }
  ],
  libre: [
    {
      id: "07-l1",
      type: "libre",
      question: "Translate: Would you like to go to the cinema?",
      questionFr: "Traduisez : Ca vous dit d'aller au cinema ?",
      correct: "Ca vous dit d'aller au cinema ?",
      correctEn: "Would you like to go to the cinema?",
      alternatives: [],
      explanation: "Ca vous dit de... = Would you like to... Aller au cinema = go to the cinema.",
      explanationFr: "Ca vous dit de... = ca vous dit de... Aller au cinema = aller au cinema."
    },
    {
      id: "07-l2",
      type: "libre",
      question: "How do you say Where shall we meet?",
      questionFr: "Comment dit-on On se retrouve ou ?",
      correct: "On se retrouve ou ?",
      correctEn: "Where shall we meet?",
      alternatives: [],
      explanation: "On se retrouve = We meet up. Ou = where.",
      explanationFr: "On se retrouve = on se retrouve. Ou = ou."
    },
    {
      id: "07-l3",
      type: "libre",
      question: "Translate: At what time?",
      questionFr: "Traduisez : A quelle heure ?",
      correct: "A quelle heure ?",
      correctEn: "At what time?",
      alternatives: [],
      explanation: "A quelle heure = At what time. Heure = hour.",
      explanationFr: "A quelle heure = a quelle heure. Heure = heure."
    },
    {
      id: "07-l4",
      type: "libre",
      question: "Complete: Je suis ___ samedi.",
      questionFr: "Completez : Je suis ___ samedi.",
      correct: "libre",
      correctEn: "free",
      alternatives: [],
      explanation: "Je suis libre = I am free. Libre = free (time).",
      explanationFr: "Je suis libre = je suis libre. Libre = libre."
    },
    {
      id: "07-l5",
      type: "libre",
      question: "How do you say With pleasure!",
      questionFr: "Comment dit-on Avec plaisir !",
      correct: "Avec plaisir !",
      correctEn: "With pleasure!",
      alternatives: [],
      explanation: "Avec plaisir = With pleasure! Very enthusiastic acceptance.",
      explanationFr: "Avec plaisir = avec plaisir ! Acceptation tres enthousiaste."
    },
    {
      id: "07-l6",
      type: "libre",
      question: "Translate: Shall we go to the cafe?",
      questionFr: "Traduisez : On va au cafe ?",
      correct: "On va au cafe ?",
      correctEn: "Shall we go to the cafe?",
      alternatives: [],
      explanation: "On va... = Shall we go... Au cafe = to the cafe.",
      explanationFr: "On va... = on va... Au cafe = au cafe."
    },
    {
      id: "07-l7",
      type: "libre",
      question: "Complete: On se retrouve ___ ?",
      questionFr: "Completez : On se retrouve ___ ?",
      correct: "ou",
      correctEn: "where",
      alternatives: [],
      explanation: "On se retrouve ou = Where shall we meet.",
      explanationFr: "On se retrouve ou = on se retrouve ou."
    },
    {
      id: "07-l8",
      type: "libre",
      question: "How do you say for a walk?",
      questionFr: "Comment dit-on en balade ?",
      correct: "en balade",
      correctEn: "for a walk",
      alternatives: [],
      explanation: "En balade = for a walk / stroll.",
      explanationFr: "En balade = en balade."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_07;
} else {
  window.LESSON_07 = LESSON_07;
}
