 // conversation-12.js — Niveau 12 : Gare
const CONVERSATION_12 = {
  id: "gare",
  icon: "🚆",
  title: "At the Train Station",
  titleFr: "Gare SNCF",
  level: 12,
  difficulty: 3,
  requiredLesson: 12,
  vocabulary: ["le train", "le quai", "en retard", "un billet", "composter", "la correspondance"],
  setting: "You need to buy a train ticket and find your platform.",
  dialogue: [
    { speaker: "agent", text: "Bonjour. Destination et date ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Bonjour. Je voudrais un aller-retour pour Lyon, samedi prochain, départ le matin si possible.", correct: true, feedback: "Parfait! Specific: destination, date, return, time preference." },
      { text: "Lyon.", correct: false, feedback: "Too brief! Specify date, return, and time preference." },
      { text: "Un billet pour Lyon.", correct: false, feedback: "Need more details! Say aller-retour + date + time." }
    ]},
    { speaker: "agent", text: "Il y a un TGV à 8h30 et un autre à 10h15. Lequel préférez-vous ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Le 8h30, s il vous plaît. Y a-t-il une correspondance, ou c est direct ?", correct: true, feedback: "Excellent! You chose + asked about transfers - very practical." },
      { text: "Le premier.", correct: false, feedback: "Specify 8h30 and ask if it s direct." },
      { text: "Le moins cher.", correct: false, feedback: "Valid concern, but first confirm if it s direct!" }
    ]},
    { speaker: "agent", text: "C est direct, 2h de trajet. Quelle classe ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Deuxième classe, s il vous plaît. Et je voudrais un billet modifiable, au cas où.", correct: true, feedback: "Parfait! You chose class + asked for flexibility. Very smart!" },
      { text: "Deuxième.", correct: false, feedback: "Add s il vous plaît and consider asking for a flexible ticket." },
      { text: "La moins chère.", correct: false, feedback: "You already know 2nd class is cheaper! Just say Deuxième classe." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_12;
} else {
  window.CONVERSATION_12 = CONVERSATION_12;
}
