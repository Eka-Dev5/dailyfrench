 // conversation-19.js — Niveau 19 : Cuisine
const CONVERSATION_19 = {
  id: "cuisine",
  icon: "👨‍🍳",
  title: "Sharing a Recipe",
  titleFr: "Cuisine",
  level: 19,
  difficulty: 3,
  requiredLesson: 19,
  vocabulary: ["cuisiner", "les ingrédients", "la recette", "le goût", "délicieux", "épicé"],
  setting: "Your French friend asks how you made that delicious dish.",
  dialogue: [
    { speaker: "friend", text: "C était délicieux ! Comment est-ce que tu as fait ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Merci ! C est une recette de ma mère. Il faut des tomates fraîches, de l ail et du basilic.", correct: true, feedback: "Parfait! You thanked + explained the origin + listed ingredients." },
      { text: "C est facile.", correct: false, feedback: "Too dismissive! Share the recipe proudly." },
      { text: "J ai cuisiné.", correct: false, feedback: "Too vague! Give details: ingredients, origin, technique." }
    ]},
    { speaker: "friend", text: "Et le secret ? Il y a un goût spécial..." },
    { speaker: "you", text: "___", choices: [
      { text: "Ah, c est le piment d Espelette ! Juste une pincée. Ça donne du caractère sans être trop épicé.", correct: true, feedback: "Excellent! You revealed the secret ingredient + explained why. Very chef-like!" },
      { text: "Je ne sais pas.", correct: false, feedback: "You cooked it, you know! Share the secret." },
      { text: "C est un secret.", correct: false, feedback: "A bit stingy! In France, sharing recipes is a social bond. Reveal it!" }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_19;
} else {
  window.CONVERSATION_19 = CONVERSATION_19;
}
