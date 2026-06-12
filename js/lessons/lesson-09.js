// lesson-09.js -- Essential Verbs
const LESSON_09 = {
  id: 9,
  title: "Essential Verbs",
  titleFr: "Verbes Essentiels",
  objectiveEn: "Master the 10 most important French verbs and their present tense forms",
  objectiveFr: "Maitriser les 10 verbes francais les plus importants et leurs formes au present",
  hintEn: "These 10 verbs cover 80% of daily French conversation -- learn them by heart!",
  hintFr: "Ces 10 verbes couvrent 80% des conversations quotidiennes en francais -- apprenez-les par coeur !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>The 10 essential verbs</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th><th>Example</th></tr>
<tr><td><strong>etre</strong></td><td><em>*eh-truh*</em></td><td>to be <!-- *too bee* --></td><td>Je suis heureux. <!-- *eye am happy* --></td></tr>
<tr><td><strong>avoir</strong></td><td><em>*a-VWAHR*</em></td><td>to have <!-- *too hav* --></td><td>J'ai un chat. <!-- *eye hav uh cat* --></td></tr>
<tr><td><strong>aller</strong></td><td><em>*a-LAY*</em></td><td>to go <!-- *too goh* --></td><td>Je vais a Paris. <!-- *eye goh too pa-REE* --></td></tr>
<tr><td><strong>faire</strong></td><td><em>*fair*</em></td><td>to do / make <!-- *too doo / mayk* --></td><td>Je fais la cuisine. <!-- *eye doo thuh cooking* --></td></tr>
<tr><td><strong>pouvoir</strong></td><td><em>*poo-VWAHR*</em></td><td>to be able to / can <!-- *too bee AY-bul too / kan* --></td><td>Je peux venir. <!-- *eye kan come* --></td></tr>
<tr><td><strong>vouloir</strong></td><td><em>*voo-LWAHR*</em></td><td>to want <!-- *too wont* --></td><td>Je veux dormir. <!-- *eye wont sleep* --></td></tr>
<tr><td><strong>devoir</strong></td><td><em>*duh-VWAHR*</em></td><td>to have to / must <!-- *too hav too / must* --></td><td>Je dois partir. <!-- *eye must leave* --></td></tr>
<tr><td><strong>savoir</strong></td><td><em>*sa-VWAHR*</em></td><td>to know (facts) <!-- *too noh (fakts)* --></td><td>Je sais compter. <!-- *eye noh how too kownt* --></td></tr>
<tr><td><strong>venir</strong></td><td><em>*vuh-NEER*</em></td><td>to come <!-- *too kum* --></td><td>Je viens demain. <!-- *eye come tomorrow* --></td></tr>
<tr><td><strong>prendre</strong></td><td><em>*pron-druh*</em></td><td>to take <!-- *too tayk* --></td><td>Je prends le bus. <!-- *eye tayk thuh bus* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Present tense of etre (to be)</h4>
<table class="lesson-table">
<tr><th>Subject</th><th>Form</th><th>Phonetics</th></tr>
<tr><td>je</td><td>suis</td><td><em>*swee*</em></td></tr>
<tr><td>tu</td><td>es</td><td><em>*ay*</em></td></tr>
<tr><td>il/elle</td><td>est</td><td><em>*eh*</em></td></tr>
<tr><td>nous</td><td>sommes</td><td><em>*som*</em></td></tr>
<tr><td>vous</td><td>etes</td><td><em>*ayt*</em></td></tr>
<tr><td>ils/elles</td><td>sont</td><td><em>*son*</em></td></tr>
</table>
</div>
<div class="lesson-warning"><strong>Etre</strong> and <strong>avoir</strong> are the two most important verbs in French. They are used as auxiliaries in compound tenses and in countless expressions.</div>
<div class="lesson-example">
-- Je suis fatigue aujourd hui. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I am tired today.</span><br>
-- Moi aussi. Je veux dormir. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Me too. I want to sleep.</span>
</div>
  `,
  qcm: [
    {
      id: "09-1",
      type: "qcm",
      question: "To be in French:",
      questionFr: "Etre en anglais :",
      options: ["etre","avoir","aller","faire"],
      optionsEn: ["to be","to have","to go","to do"],
      correct: "etre",
      correctEn: "to be",
      explanation: "Etre (eh-truh) = to be. The most essential verb in French.",
      explanationFr: "Etre = etre. Le verbe le plus essentiel en francais."
    },
    {
      id: "09-2",
      type: "qcm",
      question: "To have in French:",
      questionFr: "Avoir en anglais :",
      options: ["avoir","etre","prendre","faire"],
      optionsEn: ["to have","to be","to take","to do"],
      correct: "avoir",
      correctEn: "to have",
      explanation: "Avoir (a-VWAHR) = to have. Used in many expressions: j'ai faim (I'm hungry).",
      explanationFr: "Avoir = avoir. Utilise dans de nombreuses expressions : j'ai faim."
    },
    {
      id: "09-3",
      type: "qcm",
      question: "I am (verb etre) in French:",
      questionFr: "Je suis (verbe etre) en anglais :",
      options: ["Je suis","J'ai","Je vais","Je fais"],
      optionsEn: ["I am","I have","I go","I do"],
      correct: "Je suis",
      correctEn: "I am",
      explanation: "Je suis (zhuh swee) = I am. First person of etre.",
      explanationFr: "Je suis = je suis. Premiere personne de etre."
    },
    {
      id: "09-4",
      type: "qcm",
      question: "To go in French:",
      questionFr: "Aller en anglais :",
      options: ["aller","venir","partir","faire"],
      optionsEn: ["to go","to come","to leave","to do"],
      correct: "aller",
      correctEn: "to go",
      explanation: "Aller (a-LAY) = to go. Je vais = I go / I am going.",
      explanationFr: "Aller = aller. Je vais = je vais."
    },
    {
      id: "09-5",
      type: "qcm",
      question: "To do / make in French:",
      questionFr: "Faire en anglais :",
      options: ["faire","etre","avoir","prendre"],
      optionsEn: ["to do / make","to be","to have","to take"],
      correct: "faire",
      correctEn: "to do / make",
      explanation: "Faire (fair) = to do / make. Very versatile verb.",
      explanationFr: "Faire = faire. Verbe tres polyvalent."
    },
    {
      id: "09-6",
      type: "qcm",
      question: "Can / to be able to in French:",
      questionFr: "Pouvoir en anglais :",
      options: ["pouvoir","devoir","vouloir","savoir"],
      optionsEn: ["can / to be able to","must / to have to","to want","to know"],
      correct: "pouvoir",
      correctEn: "can / to be able to",
      explanation: "Pouvoir (poo-VWAHR) = can / to be able to. Je peux = I can.",
      explanationFr: "Pouvoir = pouvoir. Je peux = je peux."
    },
    {
      id: "09-7",
      type: "qcm",
      question: "To want in French:",
      questionFr: "Vouloir en anglais :",
      options: ["vouloir","pouvoir","devoir","savoir"],
      optionsEn: ["to want","can / to be able to","must / to have to","to know"],
      correct: "vouloir",
      correctEn: "to want",
      explanation: "Vouloir (voo-LWAHR) = to want. Je veux = I want.",
      explanationFr: "Vouloir = vouloir. Je veux = je veux."
    },
    {
      id: "09-8",
      type: "qcm",
      question: "Must / to have to in French:",
      questionFr: "Devoir en anglais :",
      options: ["devoir","pouvoir","vouloir","savoir"],
      optionsEn: ["must / to have to","can / to be able to","to want","to know"],
      correct: "devoir",
      correctEn: "must / to have to",
      explanation: "Devoir (duh-VWAHR) = must / to have to. Je dois = I must.",
      explanationFr: "Devoir = devoir. Je dois = je dois."
    },
    {
      id: "09-9",
      type: "qcm",
      question: "To know (facts) in French:",
      questionFr: "Savoir en anglais :",
      options: ["savoir","connaitre","pouvoir","devoir"],
      optionsEn: ["to know (facts)","to know (people/places)","can / to be able to","must / to have to"],
      correct: "savoir",
      correctEn: "to know (facts)",
      explanation: "Savoir (sa-VWAHR) = to know facts. Connaitre = to know people/places.",
      explanationFr: "Savoir = savoir (faits). Connaitre = connaitre (personnes/lieux)."
    },
    {
      id: "09-10",
      type: "qcm",
      question: "To come in French:",
      questionFr: "Venir en anglais :",
      options: ["venir","aller","partir","revenir"],
      optionsEn: ["to come","to go","to leave","to come back"],
      correct: "venir",
      correctEn: "to come",
      explanation: "Venir (vuh-NEER) = to come. Je viens = I come / I am coming.",
      explanationFr: "Venir = venir. Je viens = je viens."
    }
  ],
  libre: [
    {
      id: "09-l1",
      type: "libre",
      question: "Translate: I have a dog.",
      questionFr: "Traduisez : J'ai un chien.",
      correct: "J'ai un chien.",
      correctEn: "I have a dog.",
      alternatives: [],
      explanation: "J'ai = I have. Un chien = a dog.",
      explanationFr: "J'ai = j'ai. Un chien = un chien."
    },
    {
      id: "09-l2",
      type: "libre",
      question: "How do you say I can?",
      questionFr: "Comment dit-on Je peux ?",
      correct: "Je peux",
      correctEn: "I can",
      alternatives: [],
      explanation: "Je peux = I can. Pouvoir = can / to be able to.",
      explanationFr: "Je peux = je peux. Pouvoir = pouvoir."
    },
    {
      id: "09-l3",
      type: "libre",
      question: "Translate: I must leave.",
      questionFr: "Traduisez : Je dois partir.",
      correct: "Je dois partir.",
      correctEn: "I must leave.",
      alternatives: [],
      explanation: "Je dois = I must. Partir = to leave.",
      explanationFr: "Je dois = je dois. Partir = partir."
    },
    {
      id: "09-l4",
      type: "libre",
      question: "Complete: Je ___ heureux.",
      questionFr: "Completez : Je ___ heureux.",
      correct: "suis",
      correctEn: "am",
      alternatives: [],
      explanation: "Je suis = I am. Etre = to be.",
      explanationFr: "Je suis = je suis. Etre = etre."
    },
    {
      id: "09-l5",
      type: "libre",
      question: "How do you say I want to sleep?",
      questionFr: "Comment dit-on Je veux dormir ?",
      correct: "Je veux dormir.",
      correctEn: "I want to sleep.",
      alternatives: [],
      explanation: "Je veux = I want. Dormir = to sleep.",
      explanationFr: "Je veux = je veux. Dormir = dormir."
    },
    {
      id: "09-l6",
      type: "libre",
      question: "Translate: I take the bus.",
      questionFr: "Traduisez : Je prends le bus.",
      correct: "Je prends le bus.",
      correctEn: "I take the bus.",
      alternatives: [],
      explanation: "Je prends = I take. Le bus = the bus.",
      explanationFr: "Je prends = je prends. Le bus = le bus."
    },
    {
      id: "09-l7",
      type: "libre",
      question: "Complete: Je ___ compter.",
      questionFr: "Completez : Je ___ compter.",
      correct: "sais",
      correctEn: "know how to",
      alternatives: [],
      explanation: "Je sais = I know (how to). Savoir = to know (facts/skills).",
      explanationFr: "Je sais = je sais. Savoir = savoir (faits/competences)."
    },
    {
      id: "09-l8",
      type: "libre",
      question: "How do you say I am coming tomorrow?",
      questionFr: "Comment dit-on Je viens demain ?",
      correct: "Je viens demain.",
      correctEn: "I am coming tomorrow.",
      alternatives: [],
      explanation: "Je viens = I come / I am coming. Demain = tomorrow.",
      explanationFr: "Je viens = je viens. Demain = demain."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_09;
} else {
  window.LESSON_09 = LESSON_09;
}
