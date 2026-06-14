 // conversation-05.js — Niveau 5 : Goûts
const CONVERSATION_05 = {
  id: "gouts",
  icon: "❤️",
  title: "Tastes & Desires",
  titleFr: "Goûts",
  level: 5,
  difficulty: 2,
  requiredLesson: 5,
  vocabulary: ["J aime", "J adore", "Je n aime pas", "Je préfère", "délicieux"],
  setting: "You are invited to dinner by a French friend. They ask about your food preferences.",
  dialogue: [
    { speaker: "friend", text: "Vous aimez le fromage ? J ai préparé une sélection." },
    { speaker: "you", text: "___", choices: [
      { text: "J adore le fromage français ! Je préfère le chèvre et le comté. C est délicieux.", correct: true, feedback: "Parfait! J adore + specific types + délicieux. Very enthusiastic!" },
      { text: "Oui, j aime.", correct: false, feedback: "Too brief! Name specific cheeses and show enthusiasm." },
      { text: "Non, je n aime pas.", correct: false, feedback: "Too blunt! Be diplomatic: J aime certains, comme le chèvre." }
    ]},
    { speaker: "friend", text: "Et le vin ? Vous préférez rouge ou blanc ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Je préfère le rouge, mais le blanc est aussi très bon. Qu est-ce que vous recommandez avec le fromage ?", correct: true, feedback: "Excellent! You stated preference + showed openness + asked for advice." },
      { text: "Le rouge.", correct: false, feedback: "Too brief! Add mais + ask for their recommendation." },
      { text: "Je ne bois pas.", correct: false, feedback: "That ends the conversation! Soften: Je préfère le rouge, mais une petite coupe..." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_05;
} else {
  window.CONVERSATION_05 = CONVERSATION_05;
}
