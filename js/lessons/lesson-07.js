// lesson-07.js — Friends & Going Out 👫
const LESSON_07 = {
  id: 7,
  title: "Friends & Going Out 👫",
  titleFr: "Amis & Sorties",
  objectiveEn: "Make and accept social invitations, arrange to meet",
  objectiveFr: "Faire et accepter des invitations, organiser des rencontres",
  hintEn: "'Ça vous dit de...' is the most natural way to invite someone in French!",
  hintFr: "'Ça vous dit de...' est la façon la plus naturelle d'inviter quelqu'un en français !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>👫 Social invitations</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Ça vous dit de... ?</td><td>Would you like to... ?</td></tr>
<tr><td>On se retrouve où ?</td><td>Where shall we meet?</td></tr>
<tr><td>À quelle heure ?</td><td>At what time?</td></tr>
<tr><td>Je suis libre samedi.</td><td>I'm free on Saturday.</td></tr>
<tr><td>Avec plaisir !</td><td>With pleasure!</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>🎉 Places to go</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>au restaurant</td><td>to a restaurant</td></tr>
<tr><td>au café</td><td>to a café</td></tr>
<tr><td>en balade</td><td>for a walk / drive</td></tr>
<tr><td>au cinéma</td><td>to the cinema</td></tr>
</table>
</div>
<div class="lesson-example">
<strong>Exemple :</strong> Ça vous dit d'aller au restaurant samedi soir ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">Would you like to go to a restaurant on Saturday evening?</span>
</div>
  `,
  qcm: [
    {
      id: "07-1",
      type: "qcm",
      question: "'Would you like to go to a restaurant?' in French:",
      questionFr: "'Ça vous dit d'aller au restaurant ?' en anglais :",
      options: ["Ça vous dit d'aller au restaurant ?","Voulez-vous restaurant ?","Vous aimez restaurant ?","On va restaurant ?"],
      optionsEn: ["Would you like to go to a restaurant?","Do you want restaurant?","Do you like restaurant?","We go restaurant?"],
      correct: "Ça vous dit d'aller au restaurant ?",
      correctEn: "Would you like to go to a restaurant?",
      explanation: "Ça vous dit de... (*sa voo dee*) = Would you like to... / Fancy...? Very natural French.",
      explanationFr: "Ça vous dit de... = ça vous dit de... / ça vous tente de... ? Français très naturel."
    },
    {
      id: "07-2",
      type: "qcm",
      question: "'I'm free on Saturday.' in French:",
      questionFr: "'Je suis libre samedi.' en anglais :",
      options: ["Je suis libre samedi.","J'ai libre samedi.","Je peux samedi.","Samedi je veux."],
      optionsEn: ["I'm free on Saturday.","I have free Saturday.","I can Saturday.","Saturday I want."],
      correct: "Je suis libre samedi.",
      correctEn: "I'm free on Saturday.",
      explanation: "Libre (*LEE-bruh*) = free / available. Je suis libre + day.",
      explanationFr: "Libre = libre. Je suis libre + jour."
    },
    {
      id: "07-3",
      type: "qcm",
      question: "'Where shall we meet?' in French:",
      questionFr: "'On se retrouve où ?' en anglais :",
      options: ["On se retrouve où ?","Où on va ?","On se voit comment ?","Où se rencontrer ?"],
      optionsEn: ["Where shall we meet?","Where we go?","We see how?","Where meet?"],
      correct: "On se retrouve où ?",
      correctEn: "Where shall we meet?",
      explanation: "On se retrouve (*on suh ruh-TROOV*) = we meet up / where shall we meet?",
      explanationFr: "On se retrouve = on se retrouve / où est-ce qu'on se retrouve ?"
    },
    {
      id: "07-4",
      type: "qcm",
      question: "'With pleasure!' in French:",
      questionFr: "'Avec plaisir !' en anglais :",
      options: ["Avec plaisir !","Oui bien sûr !","Pourquoi pas !","D'accord !"],
      optionsEn: ["With pleasure!","Yes of course!","Why not!","OK!"],
      correct: "Avec plaisir !",
      correctEn: "With pleasure!",
      explanation: "Avec plaisir (*a-vek play-ZEER*) = With pleasure! A warm, enthusiastic yes.",
      explanationFr: "Avec plaisir = avec plaisir ! Un oui chaleureux et enthousiaste."
    },
    {
      id: "07-5",
      type: "qcm",
      question: "'I'm sorry, I can't on Friday.' in French:",
      questionFr: "'Je suis désolé(e), je ne peux pas vendredi.' en anglais :",
      options: ["Je suis désolé(e), je ne peux pas vendredi.","Je peux pas vendredi.","Vendredi non.","Désolé vendredi."],
      optionsEn: ["I'm sorry, I can't on Friday.","I can't Friday.","Friday no.","Sorry Friday."],
      correct: "Je suis désolé(e), je ne peux pas vendredi.",
      correctEn: "I'm sorry, I can't on Friday.",
      explanation: "Je ne peux pas (*zhuh nuh puh PAH*) = I can't. Je suis désolé(e) = I'm sorry.",
      explanationFr: "Je ne peux pas = je ne peux pas. Je suis désolé(e) = je suis désolé(e)."
    },
    {
      id: "07-6",
      type: "qcm",
      question: "'At what time?' in French:",
      questionFr: "'À quelle heure ?' en anglais :",
      options: ["À quelle heure ?","Quelle heure est ?","Quand heure ?","C'est l'heure ?"],
      optionsEn: ["At what time?","What time is?","When hour?","It's the time?"],
      correct: "À quelle heure ?",
      correctEn: "At what time?",
      explanation: "À quelle heure (*a kell urr*) = at what time? Very useful for arrangements!",
      explanationFr: "À quelle heure = à quelle heure ? Très utile pour les rendez-vous !"
    },
    {
      id: "07-7",
      type: "qcm",
      question: "'Let's go for a walk.' in French:",
      questionFr: "'On va se promener.' en anglais :",
      options: ["On va se promener.","On fait promenade.","Allons promenade.","On marche."],
      optionsEn: ["Let's go for a walk.","We do walk.","Let's walk.","We walk."],
      correct: "On va se promener.",
      correctEn: "Let's go for a walk.",
      explanation: "On va + infinitive = we're going to. Se promener = to go for a walk.",
      explanationFr: "On va + infinitif = on va. Se promener = se promener."
    },
    {
      id: "07-8",
      type: "qcm",
      question: "'Maybe next time.' in French:",
      questionFr: "'Peut-être la prochaine fois.' en anglais :",
      options: ["Peut-être la prochaine fois.","Peut-être après.","Prochain temps.","Une autre fois peut-être."],
      optionsEn: ["Maybe next time.","Maybe after.","Next time.","Another time maybe."],
      correct: "Peut-être la prochaine fois.",
      correctEn: "Maybe next time.",
      explanation: "Peut-être (*puh-TARE*) = maybe. La prochaine fois = the next time.",
      explanationFr: "Peut-être = peut-être. La prochaine fois = la prochaine fois."
    },
    {
      id: "07-9",
      type: "qcm",
      question: "'Good idea!' in French:",
      questionFr: "'Bonne idée !' en anglais :",
      options: ["Bonne idée !","Bon idée !","C'est idée !","Idée bien !"],
      optionsEn: ["Good idea!","Good idea (m)!","It's idea!","Idea good!"],
      correct: "Bonne idée !",
      correctEn: "Good idea!",
      explanation: "Bonne idée (*bon ee-DAY*) = Good idea! Note: idée is feminine, so 'bonne' not 'bon'.",
      explanationFr: "Bonne idée = bonne idée ! Note : idée est féminin, donc 'bonne' pas 'bon'."
    },
    {
      id: "07-10",
      type: "qcm",
      question: "'See you Saturday!' in French:",
      questionFr: "'À samedi !' en anglais :",
      options: ["À samedi !","Samedi à vous !","Bonjour samedi !","Samedi voir !"],
      optionsEn: ["See you Saturday!","Saturday to you!","Hello Saturday!","Saturday see!"],
      correct: "À samedi !",
      correctEn: "See you Saturday!",
      explanation: "À + day = see you on [day]. À demain = see you tomorrow. À bientôt = see you soon.",
      explanationFr: "À + jour = à [jour]. À demain = à demain. À bientôt = à bientôt."
    }
  ],
  libre: [
    {
      id: "07-l1",
      type: "libre",
      question: "Invite your neighbour for coffee. ('Would you like...')",
      questionFr: "Invitez votre voisin pour un café. ('Ça vous dit de...')",
      correct: "Ça vous dit de prendre un café ?",
      correctEn: "Would you like to have a coffee?",
      alternatives: ["Ça vous dirait de prendre un café ?"],
      explanation: "Ça vous dit de + infinitive = would you like to...",
      explanationFr: "Ça vous dit de + infinitif = ça vous dit de..."
    },
    {
      id: "07-l2",
      type: "libre",
      question: "Translate: 'I'm free this weekend.'",
      questionFr: "Traduisez : 'Je suis libre ce week-end.'",
      correct: "Je suis libre ce week-end.",
      correctEn: "I'm free this weekend.",
      alternatives: [],
      explanation: "Ce week-end = this weekend. Libre = free/available.",
      explanationFr: "Ce week-end = ce week-end. Libre = libre."
    },
    {
      id: "07-l3",
      type: "libre",
      question: "How do you say 'See you tomorrow'?",
      questionFr: "Comment dit-on 'À demain' ?",
      correct: "À demain !",
      correctEn: "See you tomorrow!",
      alternatives: [],
      explanation: "À + time/day = see you [then]. Very common French farewell.",
      explanationFr: "À + temps/jour = à [alors]. Au revoir français très courant."
    },
    {
      id: "07-l4",
      type: "libre",
      question: "Complete: 'On se retrouve ___ quelle heure ?'",
      questionFr: "Complétez : 'On se retrouve ___ quelle heure ?'",
      correct: "à",
      correctEn: "at",
      alternatives: [],
      explanation: "On se retrouve à quelle heure = what time shall we meet?",
      explanationFr: "On se retrouve à quelle heure = à quelle heure est-ce qu'on se retrouve ?"
    },
    {
      id: "07-l5",
      type: "libre",
      question: "Translate: 'Sorry, I can't on Sunday.'",
      questionFr: "Traduisez : 'Désolé(e), je ne peux pas dimanche.'",
      correct: "Désolé(e), je ne peux pas dimanche.",
      correctEn: "Sorry, I can't on Sunday.",
      alternatives: ["Je suis désolé, je ne peux pas dimanche."],
      explanation: "Je ne peux pas = I can't. Dimanche = Sunday.",
      explanationFr: "Je ne peux pas = je ne peux pas. Dimanche = dimanche."
    },
    {
      id: "07-l6",
      type: "libre",
      question: "How do you say 'Good idea!'?",
      questionFr: "Comment dit-on 'Bonne idée !' ?",
      correct: "Bonne idée !",
      correctEn: "Good idea!",
      alternatives: [],
      explanation: "Bonne = good (feminine). Idée = idea. Classic enthusiastic response.",
      explanationFr: "Bonne = bonne (féminin). Idée = idée. Réponse enthousiaste classique."
    },
    {
      id: "07-l7",
      type: "libre",
      question: "Translate: 'Let's go for a walk in the village.'",
      questionFr: "Traduisez : 'On va se promener dans le village.'",
      correct: "On va se promener dans le village.",
      correctEn: "Let's go for a walk in the village.",
      alternatives: [],
      explanation: "On va + infinitive = let's go. Se promener = to go for a walk.",
      explanationFr: "On va + infinitif = on y va. Se promener = se promener."
    },
    {
      id: "07-l8",
      type: "libre",
      question: "Complete: 'Je suis ___ jeudi.'",
      questionFr: "Complétez : 'Je suis ___ jeudi.'",
      correct: "libre",
      correctEn: "free",
      alternatives: [],
      explanation: "Je suis libre = I'm free / available.",
      explanationFr: "Je suis libre = je suis libre / disponible."
    },
    {
      id: "07-l9",
      type: "libre",
      question: "How do you say 'With pleasure!'?",
      questionFr: "Comment dit-on 'Avec plaisir !' ?",
      correct: "Avec plaisir !",
      correctEn: "With pleasure!",
      alternatives: [],
      explanation: "Avec plaisir — a warm, enthusiastic acceptance of an invitation.",
      explanationFr: "Avec plaisir — une acceptation chaleureuse et enthousiaste d'une invitation."
    },
    {
      id: "07-l10",
      type: "libre",
      question: "Translate: 'What time shall we meet?': ["Peut-être la prochaine fois.","Peut-être après.","Prochain temps.","Une autre fois peut-être."],
      optionsEn: ["Maybe next time.","Maybe after.","Next time.","Another time maybe."],
      correct: "Peut-être la prochaine fois.",
      correctEn: "Maybe next time.",
      explanation: "Peut-être (*puh-TARE*) = maybe. La prochaine fois = the next time.",
      explanationFr: "Peut-être = peut-être. La prochaine fois = la prochaine fois."
    },
    {
      id: "07-9",
      type: "qcm",
      question: "'Good idea!' in French:",
      questionFr: "'Bonne idée !' en anglais :",
      options: ["Bonne idée !","Bon idée !","C'est idée !","Idée bien !"],
      optionsEn: ["Good idea!","Good idea (m)!","It's idea!","Idea good!"],
      correct: "Bonne idée !",
      correctEn: "Good idea!",
      explanation: "Bonne idée (*bon ee-DAY*) = Good idea! Note: idée is feminine, so 'bonne' not 'bon'.",
      explanationFr: "Bonne idée = bonne idée ! Note : idée est féminin, donc 'bonne' pas 'bon'."
    },
    {
      id: "07-10",
      type: "qcm",
      question: "'See you Saturday!' in French:",
      questionFr: "'À samedi !' en anglais :",
      options: ["À samedi !","Samedi à vous !","Bonjour samedi !","Samedi voir !"],
      optionsEn: ["See you Saturday!","Saturday to you!","Hello Saturday!","Saturday see!"],
      correct: "À samedi !",
      correctEn: "See you Saturday!",
      explanation: "À + day = see you on [day]. À demain = see you tomorrow. À bientôt = see you soon.",
      explanationFr: "À + jour = à [jour]. À demain = à demain. À bientôt = à bientôt."
    }
  ],
  libre: [
    {
      id: "07-l1",
      type: "libre",
      question: "Invite your neighbour for coffee. ('Would you like...')",
      questionFr: "Invitez votre voisin pour un café. ('Ça vous dit de...')",
      correct: "Ça vous dit de prendre un café ?",
      correctEn: "Would you like to have a coffee?",
      alternatives: ["Ça vous dirait de prendre un café ?"],
      explanation: "Ça vous dit de + infinitive = would you like to...",
      explanationFr: "Ça vous dit de + infinitif = ça vous dit de..."
    },
    {
      id: "07-l2",
      type: "libre",
      question: "Translate: 'I'm free this weekend.'",
      questionFr: "Traduisez : 'Je suis libre ce week-end.'",
      correct: "Je suis libre ce week-end.",
      correctEn: "I'm free this weekend.",
      alternatives: [],
      explanation: "Ce week-end = this weekend. Libre = free/available.",
      explanationFr: "Ce week-end = ce week-end. Libre = libre."
    },
    {
      id: "07-l3",
      type: "libre",
      question: "How do you say 'See you tomorrow'?",
      questionFr: "Comment dit-on 'À demain' ?",
      correct: "À demain !",
      correctEn: "See you tomorrow!",
      alternatives: [],
      explanation: "À + time/day = see you [then]. Very common French farewell.",
      explanationFr: "À + temps/jour = à [alors]. Au revoir français très courant."
    },
    {
      id: "07-l4",
      type: "libre",
      question: "Complete: 'On se retrouve ___ quelle heure ?'",
      questionFr: "Complétez : 'On se retrouve ___ quelle heure ?'",
      correct: "à",
      correctEn: "at",
      alternatives: [],
      explanation: "On se retrouve à quelle heure = what time shall we meet?",
      explanationFr: "On se retrouve à quelle heure = à quelle heure est-ce qu'on se retrouve ?"
    },
    {
      id: "07-l5",
      type: "libre",
      question: "Translate: 'Sorry, I can't on Sunday.'",
      questionFr: "Traduisez : 'Désolé(e), je ne peux pas dimanche.'",
      correct: "Désolé(e), je ne peux pas dimanche.",
      correctEn: "Sorry, I can't on Sunday.",
      alternatives: ["Je suis désolé, je ne peux pas dimanche."],
      explanation: "Je ne peux pas = I can't. Dimanche = Sunday.",
      explanationFr: "Je ne peux pas = je ne peux pas. Dimanche = dimanche."
    },
    {
      id: "07-l6",
      type: "libre",
      question: "How do you say 'Good idea!'?",
      questionFr: "Comment dit-on 'Bonne idée !' ?",
      correct: "Bonne idée !",
      correctEn: "Good idea!",
      alternatives: [],
      explanation: "Bonne = good (feminine). Idée = idea. Classic enthusiastic response.",
      explanationFr: "Bonne = bonne (féminin). Idée = idée. Réponse enthousiaste classique."
    },
    {
      id: "07-l7",
      type: "libre",
      question: "Translate: 'Let's go for a walk in the village.'",
      questionFr: "Traduisez : 'On va se promener dans le village.'",
      correct: "On va se promener dans le village.",
      correctEn: "Let's go for a walk in the village.",
      alternatives: [],
      explanation: "On va + infinitive = let's go. Se promener = to go for a walk.",
      explanationFr: "On va + infinitif = on y va. Se promener = se promener."
    },
    {
      id: "07-l8",
      type: "libre",
      question: "Complete: 'Je suis ___ jeudi.'",
      questionFr: "Complétez : 'Je suis ___ jeudi.'",
      correct: "libre",
      correctEn: "free",
      alternatives: [],
      explanation: "Je suis libre = I'm free / available.",
      explanationFr: "Je suis libre = je suis libre / disponible."
    },
    {
      id: "07-l9",
      type: "libre",
      question: "How do you say 'With pleasure!'?",
      questionFr: "Comment dit-on 'Avec plaisir !' ?",
      correct: "Avec plaisir !",
      correctEn: "With pleasure!",
      alternatives: [],
      explanation: "Avec plaisir — a warm, enthusiastic acceptance of an invitation.",
      explanationFr: "Avec plaisir — une acceptation chaleureuse et enthousiaste d'une invitation."
    },
    {
      id: "07-l10",
      type: "libre",
      question: "Translate: 'What time shall we meet?'",
      questionFr: "Traduisez : 'On se retrouve à quelle heure ?'",
      correct: "On se retrouve à quelle heure ?",
      correctEn: "What time shall we meet?",
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
