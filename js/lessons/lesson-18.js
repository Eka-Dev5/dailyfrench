// lesson-18.js -- My Health -- At the doctor
const LESSON_18 = {
  id: 18,
  title: "My Health -- At the doctor",
  titleFr: "Ma sante -- Chez le medecin",
  objectiveEn: "Explain symptoms, make a doctor's appointment, go to the pharmacy",
  objectiveFr: "Expliquer les symptomes, prendre rendez-vous chez le medecin, aller a la pharmacie",
  hintEn: "J'ai mal a la/au/aux + body part = I have pain in / it hurts",
  hintFr: "J'ai mal a la/au/aux + partie du corps = j'ai mal a / ca fait mal",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Pain & symptoms: J'ai mal a...</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>J'ai mal a la tete.</td><td>I have a headache.</td></tr>
<tr><td>J'ai mal au dos.</td><td>I have back pain.</td></tr>
<tr><td>J'ai mal a la gorge.</td><td>I have a sore throat.</td></tr>
<tr><td>J'ai mal aux dents.</td><td>I have toothache.</td></tr>
<tr><td>J'ai mal au ventre.</td><td>I have stomach ache.</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>At the doctor / pharmacy</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Je voudrais prendre rendez-vous.</td><td>I would like to make an appointment.</td></tr>
<tr><td>J'ai mal depuis trois jours.</td><td>I have been in pain for three days.</td></tr>
<tr><td>Je suis malade.</td><td>I am ill / sick.</td></tr>
<tr><td>Je prends un medicament.</td><td>I take a medication.</td></tr>
<tr><td>les urgences</td><td>the emergency room / A&E</td></tr>
</table>
</div>
<div class="lesson-warning">Grammar: a + le = <strong>au</strong> (au dos, au ventre) | a + les = <strong>aux</strong> (aux dents) | a + la = <strong>a la</strong> (a la tete)</div>
<div class="lesson-example">
Je voudrais prendre rendez-vous avec mon medecin -- j'ai mal a la gorge depuis hier. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I'd like to make an appointment with my doctor -- I've had a sore throat since yesterday.</span>
</div>
  `,
  qcm: [
    {
      id: "18-1",
      type: "qcm",
      question: "I have a headache in French:",
      questionFr: "J'ai mal a la tete. en anglais :",
      options: ["J'ai mal a la tete.","J'ai mal la tete.","Je suis mal a la tete.","Ma tete fait mal."],
      optionsEn: ["I have a headache.","I have pain the head.","I am pain in the head.","My head does pain."],
      correct: "J'ai mal a la tete.",
      correctEn: "I have a headache.",
      explanation: "J'ai mal a + body part = I have pain in... A + la tete (feminine).",
      explanationFr: "J'ai mal a + partie du corps. A + la tete (feminin)."
    },
    {
      id: "18-2",
      type: "qcm",
      question: "I have back pain in French:",
      questionFr: "J'ai mal au dos. en anglais :",
      options: ["J'ai mal au dos.","J'ai mal le dos.","J'ai dos mal.","Mon dos a mal."],
      optionsEn: ["I have back pain.","I have pain the back.","I have back pain.","My back has pain."],
      correct: "J'ai mal au dos.",
      correctEn: "I have back pain.",
      explanation: "Au = a + le (masculine). Le dos = the back. J'ai mal au dos.",
      explanationFr: "Au = a + le (masculin). Le dos = le dos. J'ai mal au dos."
    },
    {
      id: "18-3",
      type: "qcm",
      question: "I have a sore throat in French:",
      questionFr: "J'ai mal a la gorge. en anglais :",
      options: ["J'ai mal a la gorge.","J'ai mal la gorge.","Ma gorge est mal.","J'ai la gorge."],
      optionsEn: ["I have a sore throat.","I have pain the throat.","My throat is pain.","I have the throat."],
      correct: "J'ai mal a la gorge.",
      correctEn: "I have a sore throat.",
      explanation: "A la gorge -- la gorge is feminine, so 'a la'. The throat.",
      explanationFr: "A la gorge -- la gorge est feminin, donc 'a la'. La gorge."
    },
    {
      id: "18-4",
      type: "qcm",
      question: "I have toothache in French:",
      questionFr: "J'ai mal aux dents. en anglais :",
      options: ["J'ai mal aux dents.","J'ai mal les dents.","Mes dents ont mal.","J'ai les dents mal."],
      optionsEn: ["I have toothache.","I have pain the teeth.","My teeth have pain.","I have the teeth pain."],
      correct: "J'ai mal aux dents.",
      correctEn: "I have toothache.",
      explanation: "Aux = a + les (plural). Les dents = teeth. J'ai mal aux dents.",
      explanationFr: "Aux = a + les (pluriel). Les dents = les dents. J'ai mal aux dents."
    },
    {
      id: "18-5",
      type: "qcm",
      question: "I would like to make an appointment in French:",
      questionFr: "Je voudrais prendre rendez-vous. en anglais :",
      options: ["Je voudrais prendre rendez-vous.","Je dois faire rendez-vous.","Je veux rendez-vous.","Prenez rendez-vous."],
      optionsEn: ["I would like to make an appointment.","I must make appointment.","I want appointment.","Make appointment."],
      correct: "Je voudrais prendre rendez-vous.",
      correctEn: "I would like to make an appointment.",
      explanation: "Prendre rendez-vous = make an appointment. Je voudrais = I would like.",
      explanationFr: "Prendre rendez-vous = prendre rendez-vous. Je voudrais = je voudrais."
    },
    {
      id: "18-6",
      type: "qcm",
      question: "The emergency room in French:",
      questionFr: "Les urgences en anglais :",
      options: ["Les urgences","Les urgents","L'urgence","Le service urgent"],
      optionsEn: ["The emergency room","The urgents","The urgency","The urgent service"],
      correct: "Les urgences",
      correctEn: "The emergency room",
      explanation: "Les urgences = A&E / emergency room. Always plural in French.",
      explanationFr: "Les urgences = les urgences. Toujours au pluriel en francais."
    },
    {
      id: "18-7",
      type: "qcm",
      question: "I've been ill for 3 days in French:",
      questionFr: "Je suis malade depuis trois jours. en anglais :",
      options: ["Je suis malade depuis trois jours.","J'ai malade trois jours.","Je suis malade pour trois jours.","Depuis je suis malade trois jours."],
      optionsEn: ["I've been ill for 3 days.","I have ill three days.","I am ill for three days.","Since I am ill three days."],
      correct: "Je suis malade depuis trois jours.",
      correctEn: "I've been ill for 3 days.",
      explanation: "Depuis = since / for (ongoing). Je suis malade = I am ill.",
      explanationFr: "Depuis = depuis / pour (en cours). Je suis malade = je suis malade."
    },
    {
      id: "18-8",
      type: "qcm",
      question: "I take a medication in French:",
      questionFr: "Je prends un medicament. en anglais :",
      options: ["Je prends un medicament.","J'ai un medicament.","Je suis medicament.","Je fais medicament."],
      optionsEn: ["I take a medication.","I have a medication.","I am medication.","I do medication."],
      correct: "Je prends un medicament.",
      correctEn: "I take a medication.",
      explanation: "Prendre = to take. Je prends = I take.",
      explanationFr: "Prendre = prendre. Je prends = je prends."
    },
    {
      id: "18-9",
      type: "qcm",
      question: "I am ill/sick in French:",
      questionFr: "Je suis malade. en anglais :",
      options: ["Je suis malade.","J'ai malade.","Je fais malade.","Je me suis malade."],
      optionsEn: ["I am ill/sick.","I have ill.","I do ill.","I myself am ill."],
      correct: "Je suis malade.",
      correctEn: "I am ill/sick.",
      explanation: "Je suis malade = I am ill/sick. Etre for states.",
      explanationFr: "Je suis malade = je suis malade. Etre pour les etats."
    },
    {
      id: "18-10",
      type: "qcm",
      question: "Which is correct: My back hurts?",
      questionFr: "Lequel est correct : J'ai mal au dos ?",
      options: ["J'ai mal au dos.","J'ai mal le dos.","Mon dos a mal.","Je suis mal au dos."],
      optionsEn: ["I have pain in the back.","I have pain the back.","My back has pain.","I am pain in the back."],
      correct: "J'ai mal au dos.",
      correctEn: "I have pain in the back.",
      explanation: "J'ai mal au dos -- the only correct form. Au = a + le.",
      explanationFr: "J'ai mal au dos -- la seule forme correcte. Au = a + le."
    }
  ],
  libre: [
    {
      id: "18-l1",
      type: "libre",
      question: "Translate: I have a headache.",
      questionFr: "Traduisez : J'ai mal a la tete.",
      correct: "J'ai mal a la tete.",
      correctEn: "I have a headache.",
      alternatives: [],
      explanation: "A la tete -- la tete is feminine.",
      explanationFr: "A la tete -- la tete est feminin."
    },
    {
      id: "18-l2",
      type: "libre",
      question: "Translate: I have back pain.",
      questionFr: "Traduisez : J'ai mal au dos.",
      correct: "J'ai mal au dos.",
      correctEn: "I have back pain.",
      alternatives: [],
      explanation: "Au dos -- au = a + le (masculine).",
      explanationFr: "Au dos -- au = a + le (masculin)."
    },
    {
      id: "18-l3",
      type: "libre",
      question: "How do you say I have toothache?",
      questionFr: "Comment dit-on J'ai mal aux dents ?",
      correct: "J'ai mal aux dents.",
      correctEn: "I have toothache.",
      alternatives: [],
      explanation: "Aux dents -- aux = a + les (plural).",
      explanationFr: "Aux dents -- aux = a + les (pluriel)."
    },
    {
      id: "18-l4",
      type: "libre",
      question: "Complete: J'ai mal ___ gorge.",
      questionFr: "Completez : J'ai mal ___ gorge.",
      correct: "a la",
      correctEn: "in the",
      alternatives: [],
      explanation: "La gorge (feminine) -> a la gorge.",
      explanationFr: "La gorge (feminin) -> a la gorge."
    },
    {
      id: "18-l5",
      type: "libre",
      question: "Translate: I would like to make an appointment for tomorrow.",
      questionFr: "Traduisez : Je voudrais prendre rendez-vous pour demain.",
      correct: "Je voudrais prendre rendez-vous pour demain.",
      correctEn: "I would like to make an appointment for tomorrow.",
      alternatives: [],
      explanation: "Pour demain = for tomorrow.",
      explanationFr: "Pour demain = pour demain."
    },
    {
      id: "18-l6",
      type: "libre",
      question: "How do you say I am ill?",
      questionFr: "Comment dit-on Je suis malade ?",
      correct: "Je suis malade.",
      correctEn: "I am ill/sick.",
      alternatives: [],
      explanation: "Etre + malade. Je suis malade.",
      explanationFr: "Etre + malade. Je suis malade."
    },
    {
      id: "18-l7",
      type: "libre",
      question: "Translate: I've had a headache for two days.",
      questionFr: "Traduisez : J'ai mal a la tete depuis deux jours.",
      correct: "J'ai mal a la tete depuis deux jours.",
      correctEn: "I've had a headache for two days.",
      alternatives: [],
      explanation: "Depuis = for (ongoing). Deux jours = two days.",
      explanationFr: "Depuis = pour (en cours). Deux jours = deux jours."
    },
    {
      id: "18-l8",
      type: "libre",
      question: "What is les urgences?",
      questionFr: "Que signifie les urgences ?",
      correct: "the emergency room",
      correctEn: "the emergency room",
      alternatives: ["A&E","emergency room"],
      explanation: "Les urgences = A&E / ER. Always plural in French.",
      explanationFr: "Les urgences = les urgences. Toujours au pluriel."
    },
    {
      id: "18-l9",
      type: "libre",
      question: "Complete: Je ___ un medicament contre la douleur.",
      questionFr: "Completez : Je ___ un medicament contre la douleur.",
      correct: "prends",
      correctEn: "take",
      alternatives: [],
      explanation: "Prendre = to take. Je prends = I take.",
      explanationFr: "Prendre = prendre. Je prends = je prends."
    },
    {
      id: "18-l10",
      type: "libre",
      question: "Translate: I have a stomach ache.",
      questionFr: "Traduisez : J'ai mal au ventre.",
      correct: "J'ai mal au ventre.",
      correctEn: "I have a stomach ache.",
      alternatives: [],
      explanation: "Le ventre = stomach/belly. Au ventre -- masculine.",
      explanationFr: "Le ventre = le ventre. Au ventre -- masculin."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_18;
} else {
  window.LESSON_18 = LESSON_18;
}
