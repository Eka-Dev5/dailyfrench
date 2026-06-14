 // conversation-20.js — Niveau 20 : Français réel
const CONVERSATION_20 = {
  id: "reel",
  icon: "🗣️",
  title: "Real French - Colloquial",
  titleFr: "Français authentique",
  level: 20,
  difficulty: 4,
  requiredLesson: 20,
  vocabulary: ["du coup", "franchement", "bof", "nickel", "pas terrible", "quand même"],
  setting: "You bump into a French friend at the market. Casual chat.",
  dialogue: [
    { speaker: "friend", text: "Hé ! Ça va ? Tu fais les courses ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Salut ! Oui, je fais les courses. Du coup, je prépare un dîner ce soir. Et toi, tu vas où ?", correct: true, feedback: "Parfait! Du coup + natural follow-up question. Very authentic!" },
      { text: "Oui, je fais les courses.", correct: false, feedback: "Too brief! Add du coup and ask them something back." },
      { text: "Bonjour. Je vais au marché.", correct: false, feedback: "Too formal for a friend! Use salut and be casual." }
    ]},
    { speaker: "friend", text: "Moi, je vais chez ma mère. Franchement, ce restaurant d hier, bof..." },
    { speaker: "you", text: "___", choices: [
      { text: "Ah oui ? Pas terrible ? Moi, j ai trouvé le service nickel, mais la nourriture, quand même...", correct: true, feedback: "Génial! You used pas terrible, nickel, quand même - pure real French!" },
      { text: "C était mauvais ?", correct: false, feedback: "Too direct! Use pas terrible and quand même like a French person." },
      { text: "Je suis désolé.", correct: false, feedback: "No need to apologise! Engage with their opinion using colloquial French." }
    ]},
    { speaker: "friend", text: "Exactement ! Du coup, on se retrouve au café du coin samedi ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Ça marche ! À samedi alors. Et si le café est fermé, on essaie le nouveau bistrot ?", correct: true, feedback: "Parfait! Ça marche + backup plan. Pure French pragmatism!" },
      { text: "D accord.", correct: false, feedback: "Too brief! Use Ça marche and add a contingency plan." },
      { text: "Oui, samedi.", correct: false, feedback: "A bit dry! Be more enthusiastic: Ça marche ! À samedi !" }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_20;
} else {
  window.CONVERSATION_20 = CONVERSATION_20;
}
