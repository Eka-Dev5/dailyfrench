 // conversation-08.js — Niveau 8 : Météo
const CONVERSATION_08 = {
  id: "meteo",
  icon: "🌤️",
  title: "Weather",
  titleFr: "Météo",
  level: 8,
  difficulty: 2,
  requiredLesson: 8,
  vocabulary: ["il fait beau", "il pleut", "il fait chaud", "il fait froid", "demain"],
  setting: "You meet your neighbour at the market. You talk about the weather.",
  dialogue: [
    { speaker: "neighbour", text: "Il fait beau aujourd hui, n est-ce pas ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Oui, il fait très beau ! Mais demain il va pleuvoir, je pense.", correct: true, feedback: "Parfait! You agreed + made a prediction. Classic French weather chat!" },
      { text: "Oui.", correct: false, feedback: "Too brief! Expand: il fait très beau and add a prediction." },
      { text: "Je n aime pas la pluie.", correct: false, feedback: "A bit negative! Keep it light and conversational." }
    ]},
    { speaker: "neighbour", text: "Ah, vous avez vu la météo ? Moi, je préfère le printemps." },
    { speaker: "you", text: "___", choices: [
      { text: "Moi aussi ! Le printemps est ma saison préférée. Les fleurs, la lumière...", correct: true, feedback: "Excellent! You shared your preference + added poetic detail. Very French!" },
      { text: "L hiver est mieux.", correct: false, feedback: "A bit blunt! Find common ground first: Moi aussi, le printemps..." },
      { text: "Je ne regarde pas la météo.", correct: false, feedback: "That ends the conversation! Engage with their preference." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_08;
} else {
  window.CONVERSATION_08 = CONVERSATION_08;
}
