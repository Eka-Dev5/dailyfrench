 // conversation-16.js — Niveau 16 : Famille
const CONVERSATION_16 = {
  id: "famille",
  icon: "👨‍👩‍👧‍👦",
  title: "Talking About Family",
  titleFr: "Famille",
  level: 16,
  difficulty: 2,
  requiredLesson: 16,
  vocabulary: ["mon frère", "ma sœur", "mes parents", "mon enfant", "mon mari", "ma femme"],
  setting: "Your neighbour asks about your family.",
  dialogue: [
    { speaker: "neighbour", text: "Vous avez de la famille en France ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Non, ma famille est en Angleterre. Mais mon mari et mon fils sont avec moi ici.", correct: true, feedback: "Parfait! Clear + warm. You distinguished extended from immediate family." },
      { text: "Non.", correct: false, feedback: "Too brief! Add details about who IS with you." },
      { text: "Oui, beaucoup.", correct: false, feedback: "That contradicts your situation! Be honest." }
    ]},
    { speaker: "neighbour", text: "Et vos parents ? Ils vous manquent ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Oui, beaucoup. Je leur téléphone tous les dimanches. Et vous, votre famille est d ici ?", correct: true, feedback: "Excellent! You answered emotionally + asked about them. Very reciprocal!" },
      { text: "Un peu.", correct: false, feedback: "Too restrained! In France, it s OK to show emotion: Oui, beaucoup." },
      { text: "Non, je suis indépendante.", correct: false, feedback: "That sounds cold! Show warmth and ask about them." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_16;
} else {
  window.CONVERSATION_16 = CONVERSATION_16;
}
