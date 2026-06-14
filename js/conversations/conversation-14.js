 // conversation-14.js — Niveau 14 : Restaurant
const CONVERSATION_14 = {
  id: "restaurant",
  icon: "🍽️",
  title: "Dining Out",
  titleFr: "Restaurant",
  level: 14,
  difficulty: 3,
  requiredLesson: 14,
  vocabulary: ["je voudrais", "l addition", "le service", "le pourboire", "sans", "allergique"],
  setting: "You are at a nice restaurant with dietary restrictions.",
  dialogue: [
    { speaker: "waiter", text: "Bonsoir Madame. Avez-vous réservé ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Bonsoir. Oui, j ai réservé au nom de Smith, pour deux personnes.", correct: true, feedback: "Parfait! Confirmed reservation + name + number of people." },
      { text: "Oui.", correct: false, feedback: "Too brief! Give your name and party size." },
      { text: "Table pour deux.", correct: false, feedback: "They asked if you reserved! Confirm: Oui, j ai réservé..." }
    ]},
    { speaker: "waiter", text: "Très bien. Voici la carte. Voulez-vous l apéritif ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Oui, un kir royal pour moi, s il vous plaît. Et de l eau pour mon mari - il est au volant.", correct: true, feedback: "Excellent! You ordered + explained politely why your husband doesn t drink." },
      { text: "Non merci.", correct: false, feedback: "A bit blunt! If declining, soften: Pas pour moi, merci." },
      { text: "Deux kirs.", correct: false, feedback: "You didn t ask your husband! Check with him first." }
    ]},
    { speaker: "waiter", text: "Avez-vous choisi ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Oui. Je voudrais le poisson, mais sans beurre s il vous plaît - je suis allergique aux produits laitiers.", correct: true, feedback: "Parfait! Clear order + dietary restriction explained politely." },
      { text: "Le poisson.", correct: false, feedback: "Too brief! Specify modifications and mention allergies." },
      { text: "Je ne sais pas.", correct: false, feedback: "Indecisive! Ask for recommendations or decide clearly." }
    ]},
    { speaker: "waiter", text: "Très bien, Madame. Et comme dessert ?" },
    { speaker: "you", text: "___", choices: [
      { text: "La tarte tatin, s il vous plaît. Et l addition avec le café, si possible.", correct: true, feedback: "Excellent! Ordered dessert + asked for bill with coffee. Very efficient!" },
      { text: "Rien.", correct: false, feedback: "Too abrupt! Say Rien pour moi, merci and ask for the bill." },
      { text: "Le dessert.", correct: false, feedback: "Too vague! Name the dessert and ask for the bill." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_14;
} else {
  window.CONVERSATION_14 = CONVERSATION_14;
}
