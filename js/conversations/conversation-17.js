 // conversation-17.js — Niveau 17 : Téléphone
const CONVERSATION_17 = {
  id: "telephone",
  icon: "📞",
  title: "Phone Call - Appointment",
  titleFr: "Téléphone",
  level: 17,
  difficulty: 3,
  requiredLesson: 17,
  vocabulary: ["téléphoner", "prendre rendez-vous", "rappeler", "décaler", "confirmer", "indisponible"],
  setting: "You need to reschedule a dentist appointment by phone.",
  dialogue: [
    { speaker: "receptionist", text: "Cabinet dentaire Dubois, bonjour." },
    { speaker: "you", text: "___", choices: [
      { text: "Bonjour Madame. C est Madame Smith à l appareil. Je voudrais décaler mon rendez-vous de demain, s il vous plaît.", correct: true, feedback: "Parfait! Identify yourself + state purpose clearly. Very professional!" },
      { text: "Je peux pas venir demain.", correct: false, feedback: "Too informal! Identify yourself and use Je voudrais décaler." },
      { text: "Rendez-vous demain, annulez.", correct: false, feedback: "Rude and unclear! Say who you are and what you need politely." }
    ]},
    { speaker: "receptionist", text: "Bien sûr Madame Smith. Quand seriez-vous disponible ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Je suis disponible jeudi ou vendredi après-midi, après 14h. Auriez-vous une place ces jours-là ?", correct: true, feedback: "Excellent! You gave options + asked if they have availability." },
      { text: "Je ne sais pas.", correct: false, feedback: "Not helpful! Give them options: Je suis disponible..." },
      { text: "La semaine prochaine.", correct: false, feedback: "Too vague! Specify days and times: Jeudi ou vendredi après 14h." }
    ]},
    { speaker: "receptionist", text: "Jeudi 15h, c est possible. Je vous confirme ?" },
    { speaker: "you", text: "___", choices: [
      { text: "Oui, parfait. Merci beaucoup. Pourriez-vous m envoyer un SMS de rappel la veille ?", correct: true, feedback: "Parfait! You confirmed + asked for a reminder. Very organised!" },
      { text: "D accord.", correct: false, feedback: "Too brief! Confirm warmly and ask for a reminder if needed." },
      { text: "Oui.", correct: false, feedback: "Too short! Be warmer: Oui, parfait, merci beaucoup." }
    ]}
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONVERSATION_17;
} else {
  window.CONVERSATION_17 = CONVERSATION_17;
}
