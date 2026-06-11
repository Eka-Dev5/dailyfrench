// lesson-friends-going-out.js
const LESSON_07 = {
  id: 7,
  title: "Friends & Going Out",
  titleFr: "Amis et sorties",
  objectiveEn: "Make and accept social invitations, arrange to meet",
  objectiveFr: "Faire et accepter des invitations, organiser des rencontres",
  hintEn: "'Ça vous dit de...' is the most natural way to invite someone in French!",
  hintFr: "'Ça vous dit de...' est la façon la plus naturelle d'inviter quelqu'un en français !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>👫 Social invitations</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>Ça vous dit de... ?</td><td>Would you like to... ?</td></tr>
<tr><td>On se retrouve où ?</td><td>Where shall we meet?</td></tr>
<tr><td>À quelle heure ?</td><td>At what time?</td></tr>
<tr><td>Je suis libre samedi.</td><td>I'm free on Saturday.</td></tr>
<tr><td>Avec plaisir !</td><td>With pleasure!</td></tr>
</tbody>
</table>
</div>
<div class="lesson-rule">
<h4>🎉 Places to go</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>au restaurant</td><td>to a restaurant</td></tr>
<tr><td>au café</td><td>to a café</td></tr>
<tr><td>en balade</td><td>for a walk / drive</td></tr>
<tr><td>au cinéma</td><td>to the cinema</td></tr>
</tbody>
</table>
</div>
<div class="lesson-example">
<strong>Exemple :</strong> Ça vous dit d'aller au restaurant samedi soir ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">Would you like to go to a restaurant on Saturday evening?</span>
</div>
  `,
  qcm: [
    {
      id: "7-1",
      type: "qcm",
      question: "'Would you like to go to a restaurant?' in French:",
      options: ["Ça vous dit d'aller au restaurant ?", "Voulez-vous restaurant ?", "Vous aimez restaurant ?", "On va restaurant ?"],
      correct: "Ça vous dit d'aller au restaurant ?",
      explanation: "Ça vous dit de... (*sa voo dee*) = Would you like to... / Fancy...? Very natural French.",
      explanationFr: "Ça vous dit de... = Ça vous dit de... ? Très naturel en français."
    },
    {
      id: "7-2",
      type: "qcm",
      question: "'I'm free on Saturday.' in French:",
      options: ["Je suis libre samedi.", "J'ai libre samedi.", "Je peux samedi.", "Samedi je veux."],
      correct: "Je suis libre samedi.",
      explanation: "Libre (*LEE-bruh*) = free / available. Je suis libre + day.",
      explanationFr: "Libre = libre. Je suis libre + jour."
    },
    {
      id: "7-3",
      type: "qcm",
      question: "'Where shall we meet?' in French:",
      options: ["On se retrouve où ?", "Où on va ?", "On se voit comment ?", "Où se rencontrer ?"],
      correct: "On se retrouve où ?",
      explanation: "On se retrouve (*on suh ruh-TROOV*) = we meet up / where shall we meet?",
      explanationFr: "On se retrouve = on se retrouve."
    },
    {
      id: "7-4",
      type: "qcm",
      question: "'With pleasure!' in French:",
      options: ["Avec plaisir !", "Oui bien sûr !", "Pourquoi pas !", "D'accord !"],
      correct: "Avec plaisir !",
      explanation: "Avec plaisir (*a-vek play-ZEER*) = With pleasure! A warm, enthusiastic yes.",
      explanationFr: "Avec plaisir = avec plaisir ! Un oui chaleureux et enthousiaste."
    },
    {
      id: "7-5",
      type: "qcm",
      question: "'I'm sorry, I can't on Friday.' in French:",
      options: ["Je suis désolé(e), je ne peux pas vendredi.", "Je peux pas vendredi.", "Vendredi non.", "Désolé vendredi."],
      correct: "Je suis désolé(e), je ne peux pas vendredi.",
      explanation: "Je ne peux pas (*zhuh nuh puh PAH*) = I can't. Je suis désolé(e) = I'm sorry.",
      explanationFr: "Je ne peux pas = je ne peux pas. Je suis désolé(e) = je suis désolé(e)."
    },
    {
      id: "7-6",
      type: "qcm",
      question: "'At what time?' in French:",
      options: ["À quelle heure ?", "Quelle heure est ?", "Quand heure ?", "C'est l'heure ?"],
      correct: "À quelle heure ?",
      explanation: "À quelle heure (*a kell urr*) = at what time? Very useful for arrangements!",
      explanationFr: "À quelle heure = à quelle heure ? Très utile pour les rendez-vous !"
    },
    {
      id: "7-7",
      type: "qcm",
      question: "'Let's go for a walk.' in French:",
      options: ["On va se promener.", "On fait promenade.", "Allons promenade.", "On marche."],
      correct: "On va se promener.",
      explanation: "On va + infinitive = we're going to. Se promener = to go for a walk.",
      explanationFr: "On va + infinitif = on va. Se promener = se promener."
    },
    {
      id: "7-8",
      type: "qcm",
      question: "'Maybe next time.' in French:",
      options: ["Peut-être la prochaine fois.", "Peut-être après.", "Prochain temps.", "Une autre fois peut-être."],
      correct: "Peut-être la prochaine fois.",
      explanation: "Peut-être (*puh-TARE*) = maybe. La prochaine fois = the next time.",
      explanationFr: "Peut-être = peut-être. La prochaine fois = la prochaine fois."
    },
    {
      id: "7-9",
      type: "qcm",
      question: "'Good idea!' in French:",
      options: ["Bonne idée !", "Bon idée !", "C'est idée !", "Idée bien !"],
      correct: "Bonne idée !",
      explanation: "Bonne idée (*bon ee-DAY*) = Good idea! Note: idée is feminine, so 'bonne' not 'bon'.",
      explanationFr: "Bonne idée = bonne idée ! Note : idée est féminin, donc 'bonne' pas 'bon'."
    },
    {
      id: "7-10",
      type: "qcm",
      question: "'See you Saturday!' in French:",
      options: ["À samedi !", "Samedi à vous !", "Bonjour samedi !", "Samedi voir !"],
      correct: "À samedi !",
      explanation: "À + day = see you on [day]. À demain = see you tomorrow. À bientôt = see you soon.",
      explanationFr: "À + jour = à [jour]. À demain = à demain. À bientôt = à bientôt."
    }
  ],
  libre: [
    {
      id: "7-l1",
      type: "libre",
      question: "Invite your neighbour for coffee. ('Would you like...')",
      correct: "Ça vous dit de prendre un café ?",
      alternatives: ["Ça vous dirait de prendre un café ?"],
      explanation: "Ça vous dit de + infinitive = would you like to...",
      explanationFr: "Ça vous dit de + infinitif = ça vous dit de..."
    },
    {
      id: "7-l2",
      type: "libre",
      question: "Translate: 'I'm free this weekend.'",
      correct: "Je suis libre ce week-end.",
      alternatives: [],
      explanation: "Ce week-end = this weekend. Libre = free/available.",
      explanationFr: "Ce week-end = ce week-end. Libre = libre."
    },
    {
      id: "7-l3",
      type: "libre",
      question: "How do you say 'See you tomorrow'?",
      correct: "À demain !",
      alternatives: [],
      explanation: "À + time/day = see you [then]. Very common French farewell.",
      explanationFr: "À + heure/jour = à [moment]. Au revoir très courant en français."
    },
    {
      id: "7-l4",
      type: "libre",
      question: "Complete: 'On se retrouve ___ quelle heure ?'",
      correct: "à",
      alternatives: [],
      explanation: "On se retrouve à quelle heure = what time shall we meet?",
      explanationFr: "On se retrouve à quelle heure = à quelle heure on se retrouve ?"
    },
    {
      id: "7-l5",
      type: "libre",
      question: "Translate: 'Sorry, I can't on Sunday.'",
      correct: "Désolé(e), je ne peux pas dimanche.",
      alternatives: ["Je suis désolé, je ne peux pas dimanche."],
      explanation: "Je ne peux pas = I can't. Dimanche = Sunday.",
      explanationFr: "Je ne peux pas = je ne peux pas. Dimanche = dimanche."
    },
    {
      id: "7-l6",
      type: "libre",
      question: "How do you say 'Good idea!'?",
      correct: "Bonne idée !",
      alternatives: [],
      explanation: "Bonne = good (feminine). Idée = idea. Classic enthusiastic response.",
      explanationFr: "Bonne = bonne (féminin). Idée = idée. Réponse enthousiaste classique."
    },
    {
      id: "7-l7",
      type: "libre",
      question: "Translate: 'Let's go for a walk in the village.'",
      correct: "On va se promener dans le village.",
      alternatives: [],
      explanation: "On va + infinitive = let's go. Se promener = to go for a walk.",
      explanationFr: "On va + infinitif = on va. Se promener = se promener."
    },
    {
      id: "7-l8",
      type: "libre",
      question: "Complete: 'Je suis ___ jeudi.'",
      correct: "libre",
      alternatives: [],
      explanation: "Je suis libre = I'm free / available.",
      explanationFr: "Je suis libre = je suis libre."
    },
    {
      id: "7-l9",
      type: "libre",
      question: "How do you say 'With pleasure!'?",
      correct: "Avec plaisir !",
      alternatives: [],
      explanation: "Avec plaisir — a warm, enthusiastic acceptance of an invitation.",
      explanationFr: "Avec plaisir — une acceptation chaleureuse et enthousiaste d'une invitation."
    },
    {
      id: "7-l10",
      type: "libre",
      question: "Translate: 'What time shall we meet?'",
      correct: "On se retrouve à quelle heure ?",
      alternatives: [],
      explanation: "On se retrouve = we meet up. À quelle heure = at what time.",
      explanationFr: "On se retrouve = on se retrouve. À quelle heure = à quelle heure."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_07;
} else {
  window.LESSON_07 = LESSON_07;
}