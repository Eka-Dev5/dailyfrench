 // conversation-18.js — Niveau 18 : Médecin
const CONVERSATION_18 = {
  id: "medecin",
  icon: "🩺",
  title: "At the Doctor",
  titleFr: "Médecin",
  level: 18,
  difficulty: 3,
  requiredLesson: 18,
  vocabulary: ["j ai mal", "depuis quand", "la fièvre", "l ordonnance", "les symptômes", "le traitement"],
  setting: "You have a doctor s appointment for a persistent cough.",
  dialogue: [
    { speaker: "doctor", text: "Bonjour Madame. Qu est-ce qui vous amène aujourd hui ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Bonjour Docteur. Je tousse depuis une semaine et j ai mal à la gorge. J ai aussi de la fièvre depuis hier.", correct: true, feedback: "Parfait! Symptom + duration + additional details. Very clear." },
      { text: "Je suis malade.", correct: false, feedback: "Too vague! Describe specific symptoms and when they started." },
      { text: "J ai besoin d antibiotiques.", correct: false, feedback: "Don t self-diagnose! Describe symptoms and let the doctor decide." }
    ]},
    { speaker: "doctor", text: "Je vais vous examiner. Ouvrez la bouche et dites Aaaaah." },
    { speaker: "you", text: "___", choices: [
      { text: "Aaaaah. Docteur, est-ce que c est grave ?", correct: true, feedback: "Bien! You followed instructions + asked a natural concern." },
      { text: "Je déteste ça.", correct: false, feedback: "Don t complain! Just cooperate and ask relevant questions after." },
      { text: "D accord.", correct: false, feedback: "A bit passive. After cooperating, ask about your condition." }
    ]},
    { speaker: "doctor", text: "Ce n est pas grave, c est une angine. Je vous fais une ordonnance pour 5 jours." },
    { speaker: "you", text: "___", choices: [
      { text: "Merci Docteur. Dois-je reprendre rendez-vous dans une semaine, ou seulement si ça ne va pas mieux ?", correct: true, feedback: "Excellent! You asked about follow-up - very responsible and French!" },
      { text: "Merci.", correct: false, feedback: "Too brief! Ask about follow-up: Dois-je reprendre rendez-vous?" },
      { text: "C est tout ?", correct: false, feedback: "Sounds dismissive! Ask properly about follow-up care." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_18;
} else {
  window.CONVERSATION_18 = CONVERSATION_18;
}
