 // conversation-07.js — Niveau 7 : Sorties
const CONVERSATION_07 = {
  id: "sorties",
  icon: "👫",
  title: "Friends & Going Out",
  titleFr: "Sorties",
  level: 7,
  difficulty: 2,
  requiredLesson: 7,
  vocabulary: ["Ça vous dit de", "On se retrouve", "À quelle heure", "Je suis libre", "Avec plaisir"],
  setting: "A friend invites you for coffee.",
  dialogue: [
    { speaker: "friend", text: "Ça vous dit d aller prendre un café samedi ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Avec plaisir ! Je suis libre samedi après-midi. On se retrouve à quelle heure ?", correct: true, feedback: "Parfait! Avec plaisir + availability + question about time." },
      { text: "Oui.", correct: false, feedback: "Too brief! Use Avec plaisir and suggest/ask about timing." },
      { text: "Je ne sais pas.", correct: false, feedback: "Too hesitant! Be positive: Avec plaisir then check your schedule." }
    ]},
    { speaker: "friend", text: "Vers 15h, au café du coin ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Parfait, 15h au café du coin. J ai hâte ! À samedi.", correct: true, feedback: "Excellent! You confirmed + expressed enthusiasm + said goodbye." },
      { text: "D accord.", correct: false, feedback: "Too brief! Confirm the details and show enthusiasm: J ai hâte!" },
      { text: "15h c est tard.", correct: false, feedback: "Don t criticise their suggestion! Accept or propose gently." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_07;
} else {
  window.CONVERSATION_07 = CONVERSATION_07;
}
