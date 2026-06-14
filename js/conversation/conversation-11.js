 // conversation-11.js — Niveau 11 : Décrire
const CONVERSATION_11 = {
  id: "decrire",
  icon: "👤",
  title: "Describing People",
  titleFr: "Décrire",
  level: 11,
  difficulty: 2,
  requiredLesson: 11,
  vocabulary: ["il est", "elle est", "ils sont", "gentil", "sympa", "sérieux", "drôle"],
  setting: "Your friend asks about your new neighbour.",
  dialogue: [
    { speaker: "friend", text: "Alors, ton nouveau voisin, il est comment ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Il est très sympa et serviable. Il m a aidée à porter mes courses hier.", correct: true, feedback: "Parfait! You described him + gave a concrete example." },
      { text: "Il est grand.", correct: false, feedback: "Too superficial! Add personality traits and an anecdote." },
      { text: "Je ne sais pas.", correct: false, feedback: "You must know something! Even Il semble sympa works." }
    ]},
    { speaker: "friend", text: "Et sa femme ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Elle est plus réservée, mais elle a l air très gentille. Elle sourit toujours.", correct: true, feedback: "Excellent! You balanced observation with kindness. Very diplomatic!" },
      { text: "Je ne l ai pas vue.", correct: false, feedback: "That ends the conversation! Try: Elle semble plus réservée, mais..." },
      { text: "Elle est mignonne.", correct: false, feedback: "A bit too familiar! Stick to personality: gentille, souriante." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_11;
} else {
  window.CONVERSATION_11 = CONVERSATION_11;
}
