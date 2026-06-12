// lesson-18.js -- Health & Doctor
const LESSON_18 = {
  id: 18,
  title: "Health & Doctor",
  titleFr: "Sante & Medecin",
  objectiveEn: "Describe symptoms, make a doctor's appointment, understand basic medical French",
  objectiveFr: "Decrire les symptomes, prendre rendez-vous chez le medecin, comprendre le francais medical de base",
  hintEn: "Always bring your carte Vitale to the doctor! And say J'ai mal a... to describe pain.",
  hintFr: "Apportez toujours votre carte Vitale chez le medecin ! Et dites J'ai mal a... pour decrire la douleur.",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Describing pain</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>J'ai mal a la tete.</td><td><em>*zhay mal ah la TET*</em></td><td>I have a headache. <!-- *eye hav uh HED-ayk* --></td></tr>
<tr><td>J'ai mal au dos.</td><td><em>*zhay mal oh DOH*</em></td><td>I have back pain. <!-- *eye hav bak payn* --></td></tr>
<tr><td>J'ai mal a la gorge.</td><td><em>*zhay mal ah la GORZH*</em></td><td>I have a sore throat. <!-- *eye hav uh sor throte* --></td></tr>
<tr><td>J'ai mal aux dents.</td><td><em>*zhay mal oh DAN*</em></td><td>I have toothache. <!-- *eye hav TOOTH-ayk* --></td></tr>
<tr><td>J'ai mal au ventre.</td><td><em>*zhay mal oh VON-truh*</em></td><td>I have a stomach ache. <!-- *eye hav uh STUM-uk ayk* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>At the doctor's</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>Je voudrais prendre rendez-vous.</td><td><em>*zhuh voo-DRAY pron-druh ron-day-VOO*</em></td><td>I would like to make an appointment. <!-- *eye wood lye too mayk an uh-POYNT-munt* --></td></tr>
<tr><td>J'ai mal depuis trois jours.</td><td><em>*zhay mal duh-PWEE trwah zhoor*</em></td><td>I have been in pain for three days. <!-- *eye hav been in payn for three dayz* --></td></tr>
<tr><td>Je suis malade.</td><td><em>*zhuh swee ma-LAHD*</em></td><td>I am ill / sick. <!-- *eye am il / sik* --></td></tr>
<tr><td>Je prends un medicament.</td><td><em>*zhuh pron uhn may-dee-ka-MON*</em></td><td>I am taking medication. <!-- *eye am TAY-king me-di-KAY-shun* --></td></tr>
<tr><td>les urgences</td><td><em>*lay zur-ZHONSS*</em></td><td>the emergency room / A&E <!-- *thee ee-MUR-jun-see room / ay and ee* --></td></tr>
</table>
</div>
<div class="lesson-warning">In France, you must see your <strong>medecin traitant</strong> (registered GP) first. Going directly to a specialist without referral may result in lower reimbursement!</div>
<div class="lesson-example">
-- Bonjour docteur, j'ai mal a la gorge depuis deux jours. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Hello doctor, I have had a sore throat for two days.</span><br>
-- Je vais vous examiner. Dites 'aaaah'. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I am going to examine you. Say 'aaaah'.</span>
</div>
  `,
  qcm: [
    {
      id: "18-1",
      type: "qcm",
      question: "I have a headache. in French:",
      questionFr: "J'ai mal a la tete. en anglais :",
      options: ["J'ai mal a la tete.","Je suis mal a la tete.","J'ai tete mal.","Mal a la tete j'ai."],
      optionsEn: ["I have a headache.","I am bad in the head.","I have head bad.","Bad in the head I have."],
      correct: "J'ai mal a la tete.",
      correctEn: "I have a headache.",
      explanation: "J'ai mal a (zhay mal ah) = I have pain in. La tete = the head.",
      explanationFr: "J'ai mal a = j'ai mal a. La tete = la tete."
    },
    {
      id: "18-2",
      type: "qcm",
      question: "I have back pain. in French:",
      questionFr: "J'ai mal au dos. en anglais :",
      options: ["J'ai mal au dos.","J'ai mal a le dos.","Je suis mal au dos.","J'ai dos mal."],
      optionsEn: ["I have back pain.","I have pain at the back.","I am bad in the back.","I have back bad."],
      correct: "J'ai mal au dos.",
      correctEn: "I have back pain.",
      explanation: "J'ai mal au dos (zhay mal oh DOH) = I have back pain. Au = a + le (contraction).",
      explanationFr: "J'ai mal au dos = j'ai mal au dos. Au = a + le (contraction)."
    },
    {
      id: "18-3",
      type: "qcm",
      question: "I have a sore throat. in French:",
      questionFr: "J'ai mal a la gorge. en anglais :",
      options: ["J'ai mal a la gorge.","J'ai gorge mal.","Je suis mal gorge.","Mal gorge j'ai."],
      optionsEn: ["I have a sore throat.","I have throat bad.","I am bad throat.","Bad throat I have."],
      correct: "J'ai mal a la gorge.",
      correctEn: "I have a sore throat.",
      explanation: "J'ai mal a la gorge (zhay mal ah la GORZH) = I have a sore throat. La gorge = throat.",
      explanationFr: "J'ai mal a la gorge = j'ai mal a la gorge. La gorge = la gorge."
    },
    {
      id: "18-4",
      type: "qcm",
      question: "I would like to make an appointment. in French:",
      questionFr: "Je voudrais prendre rendez-vous. en anglais :",
      options: ["Je voudrais prendre rendez-vous.","Je veux rendez-vous.","Je prends rendez-vous.","Je suis rendez-vous."],
      optionsEn: ["I would like to make an appointment.","I want appointment.","I take appointment.","I am appointment."],
      correct: "Je voudrais prendre rendez-vous.",
      correctEn: "I would like to make an appointment.",
      explanation: "Prendre rendez-vous (pron-druh ron-day-VOO) = to make an appointment.",
      explanationFr: "Prendre rendez-vous = prendre rendez-vous."
    },
    {
      id: "18-5",
      type: "qcm",
      question: "I have been in pain for three days. in French:",
      questionFr: "J'ai mal depuis trois jours. en anglais :",
      options: ["J'ai mal depuis trois jours.","J'ai mal trois jours.","Je suis mal depuis trois jours.","Depuis trois jours j'ai mal."],
      optionsEn: ["I have been in pain for three days.","I have pain three days.","I am bad since three days.","Since three days I have pain."],
      correct: "J'ai mal depuis trois jours.",
      correctEn: "I have been in pain for three days.",
      explanation: "Depuis (duh-PWEE) = for / since. Used with duration of ongoing situations.",
      explanationFr: "Depuis = depuis. Utilise pour la duree des situations en cours."
    },
    {
      id: "18-6",
      type: "qcm",
      question: "I am ill / sick. in French:",
      questionFr: "Je suis malade. en anglais :",
      options: ["Je suis malade.","J'ai malade.","Je suis mal.","J'ai mal."],
      optionsEn: ["I am ill / sick.","I have ill.","I am bad.","I have pain."],
      correct: "Je suis malade.",
      correctEn: "I am ill / sick.",
      explanation: "Je suis malade (zhuh swee ma-LAHD) = I am ill/sick. Malade = ill (adjective).",
      explanationFr: "Je suis malade = je suis malade. Malade = malade (adjectif)."
    },
    {
      id: "18-7",
      type: "qcm",
      question: "I am taking medication. in French:",
      questionFr: "Je prends un medicament. en anglais :",
      options: ["Je prends un medicament.","Je prends medicament.","Je suis medicament.","J'ai medicament."],
      optionsEn: ["I am taking medication.","I take medication.","I am medication.","I have medication."],
      correct: "Je prends un medicament.",
      correctEn: "I am taking medication.",
      explanation: "Je prends (zhuh pron) = I take / I am taking. Prendre = to take.",
      explanationFr: "Je prends = je prends. Prendre = prendre."
    },
    {
      id: "18-8",
      type: "qcm",
      question: "The emergency room / A&E in French:",
      questionFr: "Les urgences en anglais :",
      options: ["les urgences","l'urgence","l'hopital","le medecin"],
      optionsEn: ["the emergency room / A&E","the emergency","the hospital","the doctor"],
      correct: "les urgences",
      correctEn: "the emergency room / A&E",
      explanation: "Les urgences (lay zur-ZHONSS) = A&E / emergency room. Always plural!",
      explanationFr: "Les urgences = les urgences. Toujours au pluriel !"
    },
    {
      id: "18-9",
      type: "qcm",
      question: "I have toothache. in French:",
      questionFr: "J'ai mal aux dents. en anglais :",
      options: ["J'ai mal aux dents.","J'ai mal a les dents.","J'ai mal les dents.","Je suis mal aux dents."],
      optionsEn: ["I have toothache.","I have pain at the teeth.","I have pain the teeth.","I am bad at the teeth."],
      correct: "J'ai mal aux dents.",
      correctEn: "I have toothache.",
      explanation: "J'ai mal aux dents (zhay mal oh DAN) = I have toothache. Aux = a + les (contraction).",
      explanationFr: "J'ai mal aux dents = j'ai mal aux dents. Aux = a + les (contraction)."
    },
    {
      id: "18-10",
      type: "qcm",
      question: "I have a stomach ache. in French:",
      questionFr: "J'ai mal au ventre. en anglais :",
      options: ["J'ai mal au ventre.","J'ai mal a le ventre.","J'ai mal le ventre.","Je suis mal au ventre."],
      optionsEn: ["I have a stomach ache.","I have pain at the stomach.","I have pain the stomach.","I am bad at the stomach."],
      correct: "J'ai mal au ventre.",
      correctEn: "I have a stomach ache.",
      explanation: "J'ai mal au ventre (zhay mal oh VON-truh) = I have a stomach ache. Au = a + le.",
      explanationFr: "J'ai mal au ventre = j'ai mal au ventre. Au = a + le."
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
      explanation: "J'ai mal a = I have pain in. La tete = the head.",
      explanationFr: "J'ai mal a = j'ai mal a. La tete = la tete."
    },
    {
      id: "18-l2",
      type: "libre",
      question: "How do you say I have back pain?",
      questionFr: "Comment dit-on J'ai mal au dos ?",
      correct: "J'ai mal au dos.",
      correctEn: "I have back pain.",
      alternatives: [],
      explanation: "J'ai mal au dos = I have back pain. Au = a + le.",
      explanationFr: "J'ai mal au dos = j'ai mal au dos. Au = a + le."
    },
    {
      id: "18-l3",
      type: "libre",
      question: "Translate: I would like to make an appointment.",
      questionFr: "Traduisez : Je voudrais prendre rendez-vous.",
      correct: "Je voudrais prendre rendez-vous.",
      correctEn: "I would like to make an appointment.",
      alternatives: [],
      explanation: "Prendre rendez-vous = to make an appointment.",
      explanationFr: "Prendre rendez-vous = prendre rendez-vous."
    },
    {
      id: "18-l4",
      type: "libre",
      question: "Complete: J'ai mal ___ la gorge.",
      questionFr: "Completez : J'ai mal ___ la gorge.",
      correct: "a",
      correctEn: "in",
      alternatives: [],
      explanation: "J'ai mal a = I have pain in. A = in/at.",
      explanationFr: "J'ai mal a = j'ai mal a. A = a."
    },
    {
      id: "18-l5",
      type: "libre",
      question: "How do you say I am ill?",
      questionFr: "Comment dit-on Je suis malade ?",
      correct: "Je suis malade.",
      correctEn: "I am ill.",
      alternatives: [],
      explanation: "Je suis malade = I am ill. Malade = ill (adjective).",
      explanationFr: "Je suis malade = je suis malade. Malade = malade."
    },
    {
      id: "18-l6",
      type: "libre",
      question: "Translate: I have been in pain for two days.",
      questionFr: "Traduisez : J'ai mal depuis deux jours.",
      correct: "J'ai mal depuis deux jours.",
      correctEn: "I have been in pain for two days.",
      alternatives: [],
      explanation: "Depuis = for/since. Deux jours = two days.",
      explanationFr: "Depuis = depuis. Deux jours = deux jours."
    },
    {
      id: "18-l7",
      type: "libre",
      question: "Complete: Je prends un ___.",
      questionFr: "Completez : Je prends un ___.",
      correct: "medicament",
      correctEn: "medication",
      alternatives: [],
      explanation: "Je prends un medicament = I am taking medication.",
      explanationFr: "Je prends un medicament = je prends un medicament."
    },
    {
      id: "18-l8",
      type: "libre",
      question: "How do you say the emergency room?",
      questionFr: "Comment dit-on les urgences ?",
      correct: "les urgences",
      correctEn: "the emergency room",
      alternatives: [],
      explanation: "Les urgences = A&E / emergency room. Always plural!",
      explanationFr: "Les urgences = les urgences. Toujours au pluriel !"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_18;
} else {
  window.LESSON_18 = LESSON_18;
}
