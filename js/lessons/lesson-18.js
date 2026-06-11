// my-health.js
const LESSON_18 = {
  id: 18,
  title: "My Health",
  titleFr: "Ma santé",
  objectiveEn: "Explain symptoms, make a doctor's appointment, go to the pharmacy",
  objectiveFr: "Expliquer les symptômes, prendre rendez-vous chez le médecin, aller à la pharmacie",
  hintEn: "J'ai mal à la/au/aux + body part = I have pain in / it hurts",
  hintFr: "J'ai mal à la/au/aux + partie du corps = j'ai mal / ça fait mal",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>💊 Pain & symptoms: J'ai mal à...</h4>
<table class="lesson-table">
<thead>
<tr><th>French</th><th>English</th></tr>
</thead>
<tbody>
<tr><td class=\"\">J'ai mal à la tête.<\/td><td>I have a headache.<\/td><\/tr>
<tr><td class=\"\">J'ai mal au dos.<\/td><td>I have back pain.<\/td><\/tr>
<tr><td class=\"\">J'ai mal à la gorge.<\/td><td>I have a sore throat.<\/td><\/tr>
<tr><td class=\"\">J'ai mal aux dents.<\/td><td>I have toothache.<\/td><\/tr>
</tr><td class=\"\">J'ai mal au ventre.<\/td><td>I have stomach ache.<\/td><\/tr>
</tbody>
<\/table>
<\/div>
<div class="lesson-rule">
<h4>🏥 At the doctor / pharmacy</h4>
<table class="lesson-table">
<thead>
<tr><th>French</th><th>English</th></tr>
</thead>
<tbody>
<tr><td class=\"\">Je voudrais prendre rendez-vous.<\/td><td>I would like to make an appointment.<\/td><\/tr>
<tr><td class=\"\">J'ai mal depuis trois jours.<\/td><td>I have been in pain for three days.<\/td><\/tr>
<tr><td class=\"\">Je suis malade.<\/td><td>I am ill / sick.<\/td><\/tr>
<tr><td class=\"\">Je prends un médicament.<\/td><td>I take a medication.<\/td><\/tr>
</td><td class=\"\">les urgences<\/td><td>the emergency room / A&E<\/td><\/tr>
</tbody>
<\/table>
<\/div>
<div class="lesson-warning">⚠️ Grammar: à + le = <strong>au</strong> (au dos, au ventre) | à + les = <strong>aux</strong> (aux dents) | à + la = <strong>à la</strong> (à la tête)</div>
  `,
  qcm: [
    {
      id: "18-1",
      type: "qcm",
      question: "'I have a headache' in French:",
      questionFr: "Traduisez : 'J'ai mal à la tête.'",
      options: ["J'ai mal à la tête.", "J'ai mal la tête.", "Je suis mal tête.", "Ma tête fait mal."],
      optionsEn: ["I have a headache.", "I have pain the head (missing à)", "I am bad head", "My head hurts"],
      correct: "J'ai mal à la tête.",
      correctEn: "I have a headache.",
      explanation: "J'ai mal à (*zhay mal a*) + body part = I have pain in... À + la tête (feminine).",
      explanationFr: "J'ai mal à + partie du corps = j'ai mal... À + la tête (féminin)."
    },
    {
      id: "18-2",
      type: "qcm",
      question: "'I have back pain' in French:",
      questionFr: "Traduisez : 'J'ai mal au dos.'",
      options: ["J'ai mal au dos.", "J'ai mal le dos.", "J'ai dos mal.", "Mon dos a mal."],
      optionsEn: ["I have back pain.", "I have pain the back", "I have back pain (wrong order)", "My back hurts"],
      correct: "J'ai mal au dos.",
      correctEn: "I have back pain.",
      explanation: "Au = à + le (masculine). Le dos = the back. J'ai mal au dos.",
      explanationFr: "Au = à + le (masculin). Le dos = le dos. J'ai mal au dos."
    },
    {
      id: "18-3",
      type: "qcm",
      question: "'I have a sore throat' in French:",
      questionFr: "Traduisez : 'J'ai mal à la gorge.'",
      options: ["J'ai mal à la gorge.", "J'ai mal la gorge.", "Ma gorge est mal.", "J'ai la gorge."],
      optionsEn: ["I have a sore throat.", "I have pain the throat", "My throat is bad", "I have the throat"],
      correct: "J'ai mal à la gorge.",
      correctEn: "I have a sore throat.",
      explanation: "À la gorge — la gorge is feminine, so 'à la'. The throat.",
      explanationFr: "À la gorge — la gorge est féminin, donc 'à la'. La gorge."
    },
    {
      id: "18-4",
      type: "qcm",
      question: "'I have toothache' in French:",
      questionFr: "Traduisez : 'J'ai mal aux dents.'",
      options: ["J'ai mal aux dents.", "J'ai mal les dents.", "Mes dents ont mal.", "J'ai les dents mal."],
      optionsEn: ["I have toothache.", "I have pain the teeth", "My teeth hurt", "I have the teeth bad"],
      correct: "J'ai mal aux dents.",
      correctEn: "I have toothache.",
      explanation: "Aux = à + les (plural). Les dents = teeth. J'ai mal aux dents.",
      explanationFr: "Aux = à + les (pluriel). Les dents = les dents. J'ai mal aux dents."
    },
    {
      id: "18-5",
      type: "qcm",
      question: "'I would like to make an appointment' in French:",
      questionFr: "Traduisez : 'Je voudrais prendre rendez-vous.'",
      options: ["Je voudrais prendre rendez-vous.", "Je dois faire rendez-vous.", "Je veux rendez-vous.", "Prenez rendez-vous."],
      optionsEn: ["I would like to make an appointment.", "I must make an appointment.", "I want an appointment.", "Make an appointment (imperative)."],
      correct: "Je voudrais prendre rendez-vous.",
      correctEn: "I would like to make an appointment.",
      explanation: "Prendre rendez-vous (*pron-druh ron-day-VOO*) = make an appointment. Je voudrais = I would like.",
      explanationFr: "Prendre rendez-vous = prendre rendez-vous. Je voudrais = je voudrais."
    },
    {
      id: "18-6",
      type: "qcm",
      question: "'The emergency room' in French:",
      questionFr: "Comment dit-on 'les urgences' ?",
      options: ["Les urgences", "Les urgents", "L'urgence", "Le service urgent"],
      optionsEn: ["The emergency room", "The urgent (plural)", "The urgency", "The urgent service"],
      correct: "Les urgences",
      correctEn: "The emergency room",
      explanation: "Les urgences (*lay zure-ZHONS*) = A&E / emergency room. Always plural in French.",
      explanationFr: "Les urgences = les urgences. Toujours pluriel en français."
    },
    {
      id: "18-7",
      type: "qcm",
      question: "'I've been ill for 3 days' in French:",
      questionFr: "Traduisez : 'Je suis malade depuis trois jours.'",
      options: ["Je suis malade depuis trois jours.", "J'ai malade trois jours.", "Je suis malade pour trois jours.", "Depuis je suis malade trois jours."],
      optionsEn: ["I've been ill for 3 days.", "I have ill three days", "I am ill for three days", "Since I am ill three days"],
      correct: "Je suis malade depuis trois jours.",
      correctEn: "I've been ill for 3 days.",
      explanation: "Depuis (*duh-PWEE*) = since / for (ongoing). Je suis malade = I am ill.",
      explanationFr: "Depuis = depuis (en cours). Je suis malade = je suis malade."
    },
    {
      id: "18-8",
      type: "qcm",
      question: "'I take medication' in French:",
      questionFr: "Traduisez : 'Je prends un médicament.'",
      options: ["Je prends un médicament.", "J'ai un médicament.", "Je suis médicament.", "Je fais médicament."],
      optionsEn: ["I take medication.", "I have medication.", "I am medication.", "I do medication."],
      correct: "Je prends un médicament.",
      correctEn: "I take medication.",
      explanation: "Prendre (*PRON-druh*) = to take. Je prends = I take.",
      explanationFr: "Prendre = prendre. Je prends = je prends."
    },
    {
      id: "18-9",
      type: "qcm",
      question: "'I am feeling ill' in French:",
      questionFr: "Traduisez : 'Je suis malade.'",
      options: ["Je suis malade.", "J'ai malade.", "Je fais malade.", "Je me suis malade."],
      optionsEn: ["I am ill.", "I have ill", "I do ill", "I am ill (refl)"],
      correct: "Je suis malade.",
      correctEn: "I am ill.",
      explanation: "Je suis malade (*zhuh swee ma-LAD*) = I am ill/sick. Être for states.",
      explanationFr: "Je suis malade = je suis malade. Être pour les états."
    },
    {
      id: "18-10",
      type: "qcm",
      question: "Which is correct: 'My back hurts'?",
      questionFr: "Lequel est correct : 'J'ai mal au dos' ?",
      options: ["J'ai mal au dos.", "J'ai mal le dos.", "Mon dos a mal.", "Je suis mal au dos."],
      optionsEn: ["I have back pain (correct)", "I have pain the back", "My back hurts", "I am bad to the back"],
      correct: "J'ai mal au dos.",
      correctEn: "I have back pain.",
      explanation: "J'ai mal au dos — the only correct form. Au = à + le.",
      explanationFr: "J'ai mal au dos — la seule forme correcte. Au = à + le."
    }
  ],
  libre: [
    {
      id: "18-l1",
      type: "libre",
      question: "Translate: 'I have a headache.'",
      questionFr: "Traduisez : 'J'ai mal à la tête.'",
      correct: "J'ai mal à la tête.",
      correctEn: "I have a headache.",
      alternatives: [],
      explanation: "À la tête — la tête is feminine.",
      explanationFr: "À la tête — la tête est féminin."
    },
    {
      id: "18-l2",
      type: "libre",
      question: "Translate: 'I have back pain.'",
      questionFr: "Traduisez : 'J'ai mal au dos.'",
      correct: "J'ai mal au dos.",
      correctEn: "I have back pain.",
      alternatives: [],
      explanation: "Au dos — au = à + le (masculine).",
      explanationFr: "Au dos — au = à + le (masculin)."
    },
    {
      id: "18-l3",
      type: "libre",
      question: "How do you say 'I have toothache'?",
      questionFr: "Comment dit-on 'J'ai mal aux dents' ?",
      correct: "J'ai mal aux dents.",
      correctEn: "I have toothache.",
      alternatives: [],
      explanation: "Aux dents — aux = à + les (plural).",
      explanationFr: "Aux dents — aux = à + les (pluriel)."
    },
    {
      id: "18-l4",
      type: "libre",
      question: "Complete: 'J'ai mal ___ gorge.'",
      questionFr: "Complétez : 'J'ai mal ___ gorge.'",
      correct: "à la",
      correctEn: "to the",
      alternatives: [],
      explanation: "La gorge (feminine) → à la gorge.",
      explanationFr: "La gorge (féminin) → à la gorge."
    },
    {
      id: "18-l5",
      type: "libre",
      question: "Translate: 'I would like to make an appointment for tomorrow.'",
      questionFr: "Traduisez : 'Je voudrais prendre rendez-vous pour demain.'",
      correct: "Je voudrais prendre rendez-vous pour demain.",
      correctEn: "I would like to make an appointment for tomorrow.",
      alternatives: [],
      explanation: "Pour demain = for tomorrow.",
      explanationFr: "Pour demain = pour demain."
    },
    {
      id: "18-l6",
      type: "libre",
      question: "How do you say 'I am ill'?",
      questionFr: "Comment dit-on 'Je suis malade' ?",
      correct: "Je suis malade.",
      correctEn: "I am ill.",
      alternatives: [],
      explanation: "Être + malade. Je suis malade.",
      explanationFr: "Être + malade. Je suis malade."
    },
    {
      id: "18-l7",
      type: "libre",
      question: "Translate: 'I've had a headache for two days.'",
      questionFr: "Traduisez : 'J'ai mal à la tête depuis deux jours.'",
      correct: "J'ai mal à la tête depuis deux jours.",
      correctEn: "I've had a headache for two days.",
      alternatives: [],
      explanation: "Depuis = for (ongoing). Deux jours = two days.",
      explanationFr: "Depuis = depuis (en cours). Deux jours = deux jours."
    },
    {
      id: "18-l8",
      type: "libre",
      question: "What is 'les urgences'?",
      questionFr: "Qu'est-ce que 'les urgences' ?",
      correct: "the emergency room",
      correctEn: "the emergency room",
      alternatives: ["A&E", "emergency room"],
      explanation: "Les urgences = A&E / ER. Always plural in French.",
      explanationFr: "Les urgences = les urgences. Toujours pluriel en français."
    },
    {
      id: "18-l9",
      type: "libre",
      question: "Complete: 'Je ___ un médicament contre la douleur.'",
      questionFr: "Complétez : 'Je ___ un médicament contre la douleur.'",
      correct: "prends",
      correctEn: "take",
      alternatives: [],
      explanation: "Prendre = to take. Je prends = I take.",
      explanationFr: "Prendre = prendre. Je prends = je prends."
    },
    {
      id: "18-l10",
      type: "libre",
      question: "Translate: 'I have a stomach ache.'",
      questionFr: "Traduisez : 'J'ai mal au ventre.'",
      correct: "J'ai mal au ventre.",
      correctEn: "I have a stomach ache.",
      alternatives: [],
      explanation: "Le ventre = stomach/belly. Au ventre — masculine.",
      explanationFr: "Le ventre = le ventre. Au ventre — masculin."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_18;
} else {
  window.LESSON_18 = LESSON_18;
}