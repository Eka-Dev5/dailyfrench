 // conversation-09.js — Niveau 9 : Routine
const CONVERSATION_09 = {
  id: "routine",
  icon: "⏰",
  title: "Daily Routine",
  titleFr: "Routine",
  level: 9,
  difficulty: 2,
  requiredLesson: 9,
  vocabulary: ["je me réveille", "je me lève", "je me couche", "tôt", "tard", "d habitude"],
  setting: "Your colleague asks about your morning routine.",
  dialogue: [
    { speaker: "colleague", text: "Vous vous levez tôt le matin ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Oui, d habitude je me réveille à 6h et je me lève tout de suite.", correct: true, feedback: "Parfait! D habitude + specific times. Very natural!" },
      { text: "Oui, tôt.", correct: false, feedback: "Too brief! Give details: d habitude, specific time, what you do next." },
      { text: "Je déteste le matin.", correct: false, feedback: "Too negative! Keep it neutral with colleagues." }
    ]},
    { speaker: "colleague", text: "Et le soir, vous vous couchez tard ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Non, je me couche vers 22h. J aime lire un peu avant de dormir.", correct: true, feedback: "Excellent! You answered + added a charming detail about reading." },
      { text: "Non, tôt.", correct: false, feedback: "Too brief! Add a detail: vers 22h + what you do before bed." },
      { text: "Je regarde la télé.", correct: false, feedback: "A bit generic! Lire un peu sounds more sophisticated." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_09;
} else {
  window.CONVERSATION_09 = CONVERSATION_09;
}
