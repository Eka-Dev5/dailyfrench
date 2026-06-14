// conversation-06.js — Niveau 6 : Magasins
const CONVERSATION_06 = {
  id: "magasins",
  icon: "🏬",
  title: "At the Shops",
  titleFr: "Magasins",
  level: 6,
  difficulty: 2,
  requiredLesson: 6,
  vocabulary: ["Je paie", "par carte", "la monnaie", "ticket de caisse", "fermé"],
  setting: "You are at a clothing store buying a scarf.",
  dialogue: [
    { speaker: "cashier", text: "C est tout pour vous ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Oui, c est tout merci. Je paie par carte, s il vous plaît. Et un ticket de caisse.", correct: true, feedback: "Parfait! C est tout + payment method + receipt. Very complete!" },
      { text: "Oui.", correct: false, feedback: "Too brief! Add c est tout merci, payment method, and ask for receipt." },
      { text: "Combien ?", correct: false, feedback: "A bit abrupt! They haven t told you the price yet." }
    ]},
    { speaker: "cashier", text: "32 €. Vous avez la carte de fidélité ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Non, pas encore. Comment est-ce que je peux en avoir une ?", correct: true, feedback: "Excellent! You answered + showed interest in the loyalty card." },
      { text: "Non.", correct: false, feedback: "Too brief! Ask about the loyalty card - it shows you plan to return." },
      { text: "Je ne veux pas.", correct: false, feedback: "Too dismissive! Be curious: Comment est-ce que j en ai une ?" }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_06;
} else {
  window.CONVERSATION_06 = CONVERSATION_06;
}
