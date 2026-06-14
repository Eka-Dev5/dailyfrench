 // conversation-13.js — Niveau 13 : Émotions
const CONVERSATION_13 = {
  id: "emotions",
  icon: "💭",
  title: "Expressing Emotions",
  titleFr: "Émotions",
  level: 13,
  difficulty: 2,
  requiredLesson: 13,
  vocabulary: ["j ai peur", "je suis content", "il est triste", "elle est en colère", "nous sommes inquiets"],
  setting: "Your friend looks upset. You ask what is wrong.",
  dialogue: [
    { speaker: "you", text: "___", choices: [
      { text: "Tu as l air inquiet. Qu est-ce qui se passe ? Tu veux en parler ?", correct: true, feedback: "Parfait! You noticed + offered to listen. Very caring!" },
      { text: "Qu est-ce que tu as ?", correct: false, feedback: "A bit abrupt! Soften: Tu as l air inquiet first, then ask gently." },
      { text: "Ça va ?", correct: false, feedback: "Too generic! Show you really notice: Tu as l air inquiet is much better." }
    ]},
    { speaker: "friend", text: "Je suis en colère contre mon patron. Il m a crié dessus devant tout le monde." },
    { speaker: "you", text: "___", choices: [
      { text: "Je comprends, c est humiliant. Tu as raison d être en colère. Qu est-ce que tu vas faire ?", correct: true, feedback: "Excellent! You validated their feelings + asked about next steps." },
      { text: "Ce n est pas grave.", correct: false, feedback: "Don t minimise their feelings! Validate first." },
      { text: "Ton patron est idiot.", correct: false, feedback: "Don t insult the boss! Stay supportive without adding fuel." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_13;
} else {
  window.CONVERSATION_13 = CONVERSATION_13;
}
