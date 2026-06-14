 // conversation-10.js — Niveau 10 : Politesse
const CONVERSATION_10 = {
  id: "politesse",
  icon: "🎩",
  title: "Polite Requests",
  titleFr: "Politesse",
  level: 10,
  difficulty: 3,
  requiredLesson: 10,
  vocabulary: ["pourriez-vous", "auriez-vous", "serait-il possible", "je voudrais", "s il vous plaît"],
  setting: "You need to ask your landlord for a repair.",
  dialogue: [
    { speaker: "you", text: "___", choices: [
      { text: "Bonjour Monsieur. Serait-il possible de faire réparer le robinet de la salle de bain ?", correct: true, feedback: "Parfait! Serait-il possible is the most polite way to ask." },
      { text: "Le robinet est cassé.", correct: false, feedback: "Too direct! Start with Bonjour and use Serait-il possible de..." },
      { text: "Réparez le robinet.", correct: false, feedback: "Way too direct! This is an order, not a request." }
    ]},
    { speaker: "landlord", text: "Bien sûr, je vais envoyer un plombier. Quand seriez-vous disponible ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Merci beaucoup. Je serais disponible jeudi matin ou vendredi après-midi, comme vous préférez.", correct: true, feedback: "Excellent! You gave options + deferred to their preference. Very polite!" },
      { text: "Jeudi.", correct: false, feedback: "Too brief! Give options and be flexible." },
      { text: "N importe quand.", correct: false, feedback: "A bit too casual! Give specific windows." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_10;
} else {
  window.CONVERSATION_10 = CONVERSATION_10;
}
