 // conversation-15.js — Niveau 15 : Logement
const CONVERSATION_15 = {
  id: "logement",
  icon: "🏠",
  title: "Housing Issues",
  titleFr: "Logement",
  level: 15,
  difficulty: 3,
  requiredLesson: 15,
  vocabulary: ["le logement", "le propriétaire", "réparer", "louer", "la caution", "le bail"],
  setting: "You need to report a problem to your landlord.",
  dialogue: [
    { speaker: "you", text: "___", choices: [
      { text: "Bonjour Monsieur. Je vous appelle car il y a un problème avec le chauffage dans la salle de bain.", correct: true, feedback: "Parfait! Polite intro + stated the problem clearly. Very professional!" },
      { text: "Le chauffage est cassé.", correct: false, feedback: "Too direct! Start with Bonjour and soften: il y a un problème avec..." },
      { text: "Réparez le chauffage.", correct: false, feedback: "This is an order, not a request! Use Je vous appelle car..." }
    ]},
    { speaker: "landlord", text: "Je comprends. Depuis quand ça ne marche pas ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Depuis hier soir. La salle de bain est très froide et je ne peux pas me doucher.", correct: true, feedback: "Excellent! Specific timing + explained the impact. Very convincing!" },
      { text: "Hier.", correct: false, feedback: "Too brief! Add details: Depuis hier soir + impact." },
      { text: "Ça fait longtemps.", correct: false, feedback: "Too vague! Be specific: Depuis hier soir." }
    ]},
    { speaker: "landlord", text: "Je vais envoyer un réparateur demain matin. Serez-vous là ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Oui, je serai là de 9h à 12h. Merci beaucoup de votre réactivité, Monsieur.", correct: true, feedback: "Parfait! Gave a time window + thanked them warmly. Very polite!" },
      { text: "Oui.", correct: false, feedback: "Too brief! Give a time window and thank them." },
      { text: "Demain c est compliqué.", correct: false, feedback: "Don t be difficult! Try to accommodate or propose another time." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_15;
} else {
  window.CONVERSATION_15 = CONVERSATION_15;
}
