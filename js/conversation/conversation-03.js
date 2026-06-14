// conversation-03.js — Niveau 3 : Dans le jardin
const CONVERSATION_03 = {
  id: "jardin",
  icon: "🌿",
  title: "In the Garden",
  titleFr: "Dans le jardin",
  level: 3,
  difficulty: 1,
  requiredLesson: 3,
  vocabulary: ["Je dois", "arroser", "le jardin", "les fleurs"],
  setting: "You are chatting with your neighbour about gardening.",
  dialogue: [
    { speaker: "neighbour", text: "Vous avez un beau jardin ! Vous faites du jardinage ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Merci ! Oui, je dois arroser les fleurs tous les soirs et je tonds la pelouse le samedi.", correct: true, feedback: "Parfait! You thanked + gave specific routine details." },
      { text: "Oui, un peu.", correct: false, feedback: "Too vague! Give specifics: what you do, when, how often." },
      { text: "Non, je déteste ça.", correct: false, feedback: "Too negative! Be polite: J essaie de m en occuper." }
    ]},
    { speaker: "neighbour", text: "Moi aussi, j adore les roses. Vous avez des roses ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Oui, j ai des roses rouges près de la fenêtre. Elles sont magnifiques en ce moment !", correct: true, feedback: "Excellent! You answered + added colour + commented. Very French!" },
      { text: "Oui, j ai des roses.", correct: false, feedback: "Too brief! Add details: colour, location, your opinion." },
      { text: "Non, je préfère les tulipes.", correct: false, feedback: "A bit dismissive! Acknowledge their interest first." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_03;
} else {
  window.CONVERSATION_03 = CONVERSATION_03;
}
