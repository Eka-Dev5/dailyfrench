// lesson-neighbours-community.js
const LESSON_04 = {
  id: 4,
  title: "Neighbours & Community",
  titleFr: "Voisins et communauté",
  objectiveEn: "Chat with neighbours, ask for information, be sociable",
  objectiveFr: "Discuter avec les voisins, demander des informations, être sociable",
  hintEn: "Saying 'bonjour' first is obligatory in French social life — never skip it!",
  hintFr: "Dire 'bonjour' en premier est obligatoire dans la vie sociale française — ne l'oubliez jamais !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🤝 Meeting your neighbours</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>mon voisin / ma voisine</td><td>my neighbour (m/f)</td></tr>
<tr><td>la mairie</td><td>the town hall</tr>
<tr><td>le marché</td><td>the market</td></tr>
<tr><td>tout près d'ici</td><td>very near here</td></tr>
</tbody>
</table>
</div>
<div class="lesson-rule">
<h4>💬 Useful phrases</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>Vous habitez ici depuis longtemps ?</td><td>Have you lived here long?</td></tr>
<tr><td>Je suis nouveau / nouvelle ici.</td><td>I'm new here (m/f).</td></tr>
<tr><td>C'est par où, le marché ?</td><td>Which way is the market?</td></tr>
<tr><td>Vous connaissez un bon médecin ?</td><td>Do you know a good doctor?</td></tr>
</tbody>
</table>
</div>
<div class="lesson-warning">⚠️ French neighbours love to chat! Saying <strong>bonjour</strong> first is essential — skipping it is considered rude.</div>
  `,
  qcm: [
    {
      id: "4-1",
      type: "qcm",
      question: "'My neighbour (female)' in French:",
      options: ["Ma voisine", "Mon voisin", "Ma voisin", "La voisine de moi"],
      correct: "Ma voisine",
      explanation: "Voisin (m) / voisine (f). Ma = my (with feminine nouns).",
      explanationFr: "Voisin (m) / voisine (f). Ma = mon (avec noms féminins)."
    },
    {
      id: "4-2",
      type: "qcm",
      question: "'Have you lived here long?' in French:",
      options: ["Vous habitez ici depuis longtemps ?", "Vous êtes ici long ?", "Depuis quand vous êtes ?", "Ça fait combien ici ?"],
      correct: "Vous habitez ici depuis longtemps ?",
      explanation: "Depuis longtemps (*duh-pwee long-TON*) = for a long time. Depuis = since/for.",
      explanationFr: "Depuis longtemps = depuis longtemps. Depuis = depuis/pendant."
    },
    {
      id: "4-3",
      type: "qcm",
      question: "'I'm new here' (woman speaking) in French:",
      options: ["Je suis nouvelle ici.", "Je suis nouveau ici.", "Je suis nouvelle.", "Moi suis nouvelle."],
      correct: "Je suis nouvelle ici.",
      explanation: "Nouveau (m) / nouvelle (f). The adjective agrees with the speaker's gender.",
      explanationFr: "Nouveau (m) / nouvelle (f). L'adjectif s'accorde avec le genre du locuteur."
    },
    {
      id: "4-4",
      type: "qcm",
      question: "'Which way is the town hall?' in French:",
      options: ["C'est par où, la mairie ?", "Où est la mairie ?", "La mairie, comment ?", "Par là mairie ?"],
      correct: "C'est par où, la mairie ?",
      explanation: "C'est par où ? (*say par OO*) = Which way is it? Very natural French.",
      explanationFr: "C'est par où ? Très naturel en français."
    },
    {
      id: "4-5",
      type: "qcm",
      question: "'Do you know a good plumber?' in French:",
      options: ["Vous connaissez un bon plombier ?", "Vous savez plombier ?", "Avez-vous plombier ?", "Un plombier vous connaissez ?"],
      correct: "Vous connaissez un bon plombier ?",
      explanation: "Connaître (*kon-ETRE*) = to know (a person/place). Savoir = to know (a fact).",
      explanationFr: "Connaître = connaître (une personne/un lieu). Savoir = savoir (un fait)."
    },
    {
      id: "4-6",
      type: "qcm",
      question: "How do you say 'the town hall'?",
      options: ["La mairie", "La préfecture", "La maison", "Le bureau"],
      correct: "La mairie",
      explanation: "La mairie (*la may-REE*) = the town hall. Essential for admin in France!",
      explanationFr: "La mairie = la mairie. Indispensable pour les démarches administratives !"
    },
    {
      id: "4-7",
      type: "qcm",
      question: "'The market is on Thursdays.' in French:",
      options: ["Le marché est le jeudi.", "Le marché est jeudi.", "Marché est le jeudi.", "Jeudi le marché."],
      correct: "Le marché est le jeudi.",
      explanation: "Le jeudi = on Thursdays (habitual). Jeudi (no article) = this Thursday specifically.",
      explanationFr: "Le jeudi = le jeudi (habituel). Jeudi (sans article) = ce jeudi spécifiquement."
    },
    {
      id: "4-8",
      type: "qcm",
      question: "'The rubbish bins go out on Tuesday' in French:",
      options: ["Les poubelles sortent le mardi.", "Les poubelles sont mardi.", "Le mardi poubelles.", "Poubelles sortir mardi."],
      correct: "Les poubelles sortent le mardi.",
      explanation: "Sortent le mardi = go out on Tuesdays (habitual). Useful for settling in!",
      explanationFr: "Sortent le mardi = sortent le mardi (habituel). Utile pour s'installer !"
    },
    {
      id: "4-9",
      type: "qcm",
      question: "'It's very quiet here.' in French:",
      options: ["C'est très calme ici.", "Ici est très silence.", "C'est trop calme.", "Très calme est ici."],
      correct: "C'est très calme ici.",
      explanation: "C'est très calme (*say tray KALM*) = It's very quiet / peaceful.",
      explanationFr: "C'est très calme = c'est très calme / paisible."
    },
    {
      id: "4-10",
      type: "qcm",
      question: "'We've lived here for 2 years.' in French:",
      options: ["Nous habitons ici depuis deux ans.", "Nous sommes ici deux ans.", "Ici nous deux ans.", "Depuis deux ans nous."],
      correct: "Nous habitons ici depuis deux ans.",
      explanation: "Depuis + duration = for (how long). Nous habitons = we live (present, ongoing).",
      explanationFr: "Depuis + durée = depuis (combien de temps). Nous habitons = nous habitons."
    }
  ],
  libre: [
    {
      id: "4-l1",
      type: "libre",
      question: "Translate: 'My neighbour is very kind.'",
      correct: "Mon voisin est très gentil.",
      alternatives: ["Ma voisine est très gentille."],
      explanation: "Gentil (m) / gentille (f) = kind. Très = very.",
      explanationFr: "Gentil (m) / gentille (f) = gentil. Très = très."
    },
    {
      id: "4-l2",
      type: "libre",
      question: "How do you ask 'Is there a market nearby?'",
      correct: "Il y a un marché près d'ici ?",
      alternatives: ["Y a-t-il un marché près d'ici ?"],
      explanation: "Il y a = there is. Près d'ici = nearby.",
      explanationFr: "Il y a = il y a. Près d'ici = près d'ici."
    },
    {
      id: "4-l3",
      type: "libre",
      question: "Complete: 'Vous habitez ici ___ longtemps ?'",
      correct: "depuis",
      alternatives: [],
      explanation: "Depuis (*duh-PWEE*) = since / for (with ongoing present tense).",
      explanationFr: "Depuis = depuis (avec présent continu)."
    },
    {
      id: "4-l4",
      type: "libre",
      question: "Translate: 'I'm new here.'",
      correct: "Je suis nouveau ici.",
      alternatives: ["Je suis nouvelle ici."],
      explanation: "Nouveau (m) / nouvelle (f). Use the form matching your gender.",
      explanationFr: "Nouveau (m) / nouvelle (f). Utilisez la forme correspondant à votre genre."
    },
    {
      id: "4-l5",
      type: "libre",
      question: "How do you say 'Do you know a good doctor?'",
      correct: "Vous connaissez un bon médecin ?",
      alternatives: [],
      explanation: "Connaître = to know (a person). Médecin = doctor.",
      explanationFr: "Connaître = connaître (une personne). Médecin = médecin."
    },
    {
      id: "4-l6",
      type: "libre",
      question: "What is 'la mairie'?",
      correct: "the town hall",
      alternatives: ["town hall"],
      explanation: "La mairie is where you register your address, get forms, etc.",
      explanationFr: "La mairie est l'endroit où on enregistre son adresse, prend des formulaires, etc."
    },
    {
      id: "4-l7",
      type: "libre",
      question: "Translate: 'The rubbish goes out on Monday.'",
      correct: "Les poubelles sortent le lundi.",
      alternatives: [],
      explanation: "Le lundi = on Mondays (habitual). Sortent = go out.",
      explanationFr: "Le lundi = le lundi (habituel). Sortent = sortent."
    },
    {
      id: "4-l8",
      type: "libre",
      question: "Complete: 'C'est par ___, la pharmacie ?'",
      correct: "où",
      alternatives: [],
      explanation: "C'est par où = which way is it / how do I get to...",
      explanationFr: "C'est par où = par quel chemin..."
    },
    {
      id: "4-l9",
      type: "libre",
      question: "How do you say 'We are very happy here'?",
      correct: "Nous sommes très contents ici.",
      alternatives: ["Nous sommes très heureux ici."],
      explanation: "Contents / heureux = happy. Both work here.",
      explanationFr: "Contents / heureux = heureux. Les deux conviennent."
    },
    {
      id: "4-l10",
      type: "libre",
      question: "Translate: 'The market is on Wednesdays.'",
      correct: "Le marché est le mercredi.",
      alternatives: [],
      explanation: "Le mercredi = on Wednesdays (habitual pattern).",
      explanationFr: "Le mercredi = le mercredi (habituel)."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_04;
} else {
  window.LESSON_04 = LESSON_04;
}