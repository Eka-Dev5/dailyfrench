 // conversation-04.js — Niveau 4 : Voisinage
const CONVERSATION_04 = {
  id: "voisinage",
  icon: "🏘️",
  title: "Neighbours & Community",
  titleFr: "Voisinage",
  level: 4,
  difficulty: 2,
  requiredLesson: 4,
  vocabulary: ["mon voisin", "ma voisine", "habitez", "depuis", "longtemps"],
  setting: "You meet another neighbour at the local bakery.",
  dialogue: [
    { speaker: "neighbour", text: "Bonjour ! Vous habitez dans l immeuble depuis longtemps ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Non, je suis nouvelle. J habite ici depuis un mois seulement. Et vous, vous êtes d ici ?", correct: true, feedback: "Parfait! You answered + asked back. Very reciprocal!" },
      { text: "Un mois.", correct: false, feedback: "Too brief! Use full sentences and ask about them too." },
      { text: "Oui, longtemps.", correct: false, feedback: "You said no then yes - contradictory! Be clear." }
    ]},
    { speaker: "neighbour", text: "Moi, j y suis depuis vingt ans ! C est un quartier tranquille." },
    { speaker: "you", text: "___", choices: [
      { text: "Vingt ans ! C est impressionnant. J ai remarqué que c est très calme, j apprécie beaucoup.", correct: true, feedback: "Excellent! You reacted to their info + shared your observation." },
      { text: "Ah oui.", correct: false, feedback: "Too brief! React with enthusiasm: Vingt ans! + share your impression." },
      { text: "Je préfère les villes plus animées.", correct: false, feedback: "That contradicts their positive comment! Find common ground." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_04;
} else {
  window.CONVERSATION_04 = CONVERSATION_04;
}
