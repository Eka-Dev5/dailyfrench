// conversation-01.js — Niveau 1 : Salutations
const CONVERSATION_01 = {
  id: "salutations",
  icon: "🙋",
  title: "Greetings & Introductions",
  titleFr: "Salutations",
  level: 1,
  difficulty: 1,
  requiredLesson: 1,
  vocabulary: ["Bonjour", "Je m appelle", "Enchanté"],
  setting: "You meet your new neighbour for the first time in the hallway.",
  dialogue: [
    { speaker: "neighbour", text: "Bonjour ! Je suis Monsieur Dupont, votre voisin du dessus." },
    { speaker: "you", text: "___", choices: [
      { text: "Bonjour Monsieur Dupont. Je m appelle Marie Smith, enchantée de vous rencontrer.", correct: true, feedback: "Parfait ! Polite greeting + full name + enchantée. Very French!" },
      { text: "Bonjour.", correct: false, feedback: "Too brief! Add your name and enchantée." },
      { text: "Salut Dupont.", correct: false, feedback: "Too informal! Use Monsieur and be more formal." }
    ]},
    { speaker: "neighbour", text: "Vous êtes anglaise, c est ça ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Oui, je suis anglaise. J habite ici depuis deux semaines. J adore le quartier !", correct: true, feedback: "Excellent! You confirmed + added context + compliment." },
      { text: "Oui.", correct: false, feedback: "Too brief! Expand: where you are from, how long, what you think." },
      { text: "Non, américaine.", correct: false, feedback: "You said you were English earlier! Be consistent." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_01;
} else {
  window.CONVERSATION_01 = CONVERSATION_01;
}
