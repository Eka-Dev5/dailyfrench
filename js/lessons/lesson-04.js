// lesson-04.js — Neighbours & Community 🏘️
const LESSON_04 = {
  id: 4,
  title: "Neighbours & Community 🏘️",
  titleFr: "Voisins & Communauté",
  objectiveEn: "Chat with neighbours, ask for information, be sociable",
  objectiveFr: "Discuter avec les voisins, demander des informations, être sociable",
  hintEn: "Saying bonjour first is obligatory in French social life — never skip it!",
  hintFr: "Dire bonjour d'abord est obligatoire dans la vie sociale française — ne l'oubliez jamais !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🤝 Meeting your neighbours</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>mon voisin / ma voisine</td><td>my neighbour (m/f)</td></tr>
<tr><td>la mairie</td><td>the town hall</td></tr>
<tr><td>le marché</td><td>the market</td></tr>
<tr><td>tout près d'ici</td><td>very near here</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>💬 Useful phrases</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Vous habitez ici depuis longtemps ?</td><td>Have you lived here long?</td></tr>
<tr><td>Je suis nouveau / nouvelle ici.</td><td>I'm new here (m/f).</td></tr>
<tr><td>C'est par où, le marché ?</td><td>Which way is the market?</td></tr>
<tr><td>Vous connaissez un bon médecin ?</td><td>Do you know a good doctor?</td></tr>
</table>
</div>
<div class="lesson-warning">⚠️ French neighbours love to chat! Saying <strong>bonjour</strong> first is essential — skipping it is considered rude.</div>
  `,
  qcm: [
    {
      id: "04-1",
      type: "qcm",
      question: "My neighbour (female) in French:",
      questionFr: "Ma voisine en anglais :",
      options: ["Ma voisine","Mon voisin","Ma voisin","La voisine de moi"],
      optionsEn: ["My neighbour (female)","My neighbour (male)","My neighbour","The neighbour of me"],
      correct: "Ma voisine",
      correctEn: "My neighbour (female)",
      explanation: "Voisin (m) / voisine (f). Ma = my (with feminine nouns).",
      explanationFr: "Voisin (m) / voisine (f). Ma = ma (avec les noms féminins)."
    },
    {
      id: "04-2",
      type: "qcm",
      question: "Have you lived here long? in French:",
      questionFr: "Vous habitez ici depuis longtemps ? en anglais :",
      options: ["Vous habitez ici depuis longtemps ?","Vous êtes ici long ?","Depuis quand vous êtes ?","Ça fait combien ici ?"],
      optionsEn: ["Have you lived here long?","You are here long?","Since when you are?","How long here?"],
      correct: "Vous habitez ici depuis longtemps ?",
      correctEn: "Have you lived here long?",
      explanation: "Depuis longtemps (duh-pwee long-TON) = for a long time. Depuis = since/for.",
      explanationFr: "Depuis longtemps = depuis longtemps. Depuis = depuis."
    },
    {
      id: "04-3",
      type: "qcm",
      question: "I'm new here (woman speaking) in French:",
      questionFr: "Je suis nouvelle ici (femme qui parle) en anglais :",
      options: ["Je suis nouvelle ici.","Je suis nouveau ici.","Je suis nouvelle.","Moi suis nouvelle."],
      optionsEn: ["I'm new here (woman).","I'm new here (man).","I'm new.","Me is new."],
      correct: "Je suis nouvelle ici.",
      correctEn: "I'm new here (woman).",
      explanation: "Nouveau (m) / nouvelle (f). The adjective agrees with the speaker's gender.",
      explanationFr: "Nouveau (m) / nouvelle (f). L'adjectif s'accorde avec le genre du locuteur."
    },
    {
      id: "04-4",
      type: "qcm",
      question: "Which way is the town hall? in French:",
      questionFr: "C'est par où, la mairie ? en anglais :",
      options: ["C'est par où, la mairie ?","Où est la mairie ?","La mairie, comment ?","Par là mairie ?"],
      optionsEn: ["Which way is the town hall?","Where is the town hall?","The town hall, how?","That way town hall?"],
      correct: "C'est par où, la mairie ?",
      correctEn: "Which way is the town hall?",
      explanation: "C'est par où ? (say par OO) = Which way is it? Very natural French.",
      explanationFr: "C'est par où ? = C'est par où ? Français très naturel."
    },
    {
      id: "04-5",
      type: "qcm",
      question: "Do you know a good plumber? in French:",
      questionFr: "Vous connaissez un bon plombier ? en anglais :",
      options: ["Vous connaissez un bon plombier ?","Vous savez plombier ?","Avez-vous plombier ?","Un plombier vous connaissez ?"],
      optionsEn: ["Do you know a good plumber?","You know plumber?","Have you plumber?","A plumber you know?"],
      correct: "Vous connaissez un bon plombier ?",
      correctEn: "Do you know a good plumber?",
      explanation: "Connaître (kon-ETRE) = to know (a person/place). Savoir = to know (a fact).",
      explanationFr: "Connaître = connaître (une personne/un lieu). Savoir = savoir (un fait)."
    },
    {
      id: "04-6",
      type: "qcm",
      question: "How do you say the town hall?",
      questionFr: "Comment dit-on la mairie ?",
      options: ["La mairie","La préfecture","La maison","Le bureau"],
      optionsEn: ["The town hall","The prefecture","The house","The office"],
      correct: "La mairie",
      correctEn: "The town hall",
      explanation: "La mairie (la may-REE) = the town hall. Essential for admin in France!",
      explanationFr: "La mairie = la mairie. Essentiel pour l'administration en France !"
    },
    {
      id: "04-7",
      type: "qcm",
      question: "The market is on Thursdays. in French:",
      questionFr: "Le marché est le jeudi. en anglais :",
      options: ["Le marché est le jeudi.","Le marché est jeudi.","Marché est le jeudi.","Jeudi le marché."],
      optionsEn: ["The market is on Thursdays.","The market is Thursday.","Market is Thursday.","Thursday the market."],
      correct: "Le marché est le jeudi.",
      correctEn: "The market is on Thursdays.",
      explanation: "Le jeudi = on Thursdays (habitual). Jeudi (no article) = this Thursday specifically.",
      explanationFr: "Le jeudi = le jeudi (habituel). Jeudi (sans article) = ce jeudi spécifiquement."
    },
    {
      id: "04-8",
      type: "qcm",
      question: "The rubbish bins go out on Tuesday in French:",
      questionFr: "Les poubelles sortent le mardi. en anglais :",
      options: ["Les poubelles sortent le mardi.","Les poubelles sont mardi.","Le mardi poubelles.","Poubelles sortir mardi."],
      optionsEn: ["The rubbish bins go out on Tuesday.","The bins are Tuesday.","Tuesday bins.","Bins go out Tuesday."],
      correct: "Les poubelles sortent le mardi.",
      correctEn: "The rubbish bins go out on Tuesday.",
      explanation: "Sortent le mardi = go out on Tuesdays (habitual). Useful for settling in!",
      explanationFr: "Sortent le mardi = sortent le mardi (habituel). Utile pour s'installer !"
    },
    {
      id: "04-9",
      type: "qcm",
      question: "It's very quiet here. in French:",
      questionFr: "C'est très calme ici. en anglais :",
      options: ["C'est très calme ici.","Ici est très silence.","C'est trop calme.","Très calme est ici."],
      optionsEn: ["It's very quiet here.","Here is very silence.","It's too quiet.","Very quiet is here."],
      correct: "C'est très calme ici.",
      correctEn: "It's very quiet here.",
      explanation: "C'est très calme (say tray KALM) = It's very quiet / peaceful.",
      explanationFr: "C'est très calme = c'est très calme / paisible."
    },
    {
      id: "04-10",
      type: "qcm",
      question: "We've lived here for 2 years. in French:",
      questionFr: "Nous habitons ici depuis deux ans. en anglais :",
      options: ["Nous habitons ici depuis deux ans.","Nous sommes ici deux ans.","Ici nous deux ans.","Depuis deux ans nous."],
      optionsEn: ["We've lived here for 2 years.","We are here two years.","Here us two years.","For two years us."],
      correct: "Nous habitons ici depuis deux ans.",
      correctEn: "We've lived here for 2 years.",
      explanation: "Depuis + duration = for (how long). Nous habitons = we live (present, ongoing).",
      explanationFr: "Depuis + durée = depuis (combien de temps). Nous habitons = nous habitons (présent, en cours)."
    }
  ],
  libre: [
    {
      id: "04-l1",
      type: "libre",
      question: "Translate: My neighbour is very kind.",
      questionFr: "Traduisez : Mon voisin est très gentil.",
      correct: "Mon voisin est très gentil.",
      correctEn: "My neighbour is very kind.",
      alternatives: ["Ma voisine est très gentille."],
      explanation: "Gentil (m) / gentille (f) = kind. Très = very.",
      explanationFr: "Gentil (m) / gentille (f) = gentil. Très = très."
    },
    {
      id: "04-l2",
      type: "libre",
      question: "How do you ask Is there a market nearby?",
      questionFr: "Comment demande-t-on Il y a un marché près d'ici ?",
      correct: "Il y a un marché près d'ici ?",
      correctEn: "Is there a market nearby?",
      alternatives: ["Y a-t-il un marché près d'ici ?"],
      explanation: "Il y a = there is. Près d'ici = nearby.",
      explanationFr: "Il y a = il y a. Près d'ici = près d'ici."
    },
    {
      id: "04-l3",
      type: "libre",
      question: "Complete: Vous habitez ici ___ longtemps ?",
      questionFr: "Complétez : Vous habitez ici ___ longtemps ?",
      correct: "depuis",
      correctEn: "for",
      alternatives: [],
      explanation: "Depuis (duh-PWEE) = since / for (with ongoing present tense).",
      explanationFr: "Depuis = depuis. Avec le présent en cours."
    },
    {
      id: "04-l4",
      type: "libre",
      question: "Translate: I'm new here.",
      questionFr: "Traduisez : Je suis nouveau ici.",
      correct: "Je suis nouveau ici.",
      correctEn: "I'm new here.",
      alternatives: ["Je suis nouvelle ici."],
      explanation: "Nouveau (m) / nouvelle (f). Use the form matching your gender.",
      explanationFr: "Nouveau (m) / nouvelle (f). Utilisez la forme correspondant à votre genre."
    },
    {
      id: "04-l5",
      type: "libre",
      question: "How do you say Do you know a good doctor?",
      questionFr: "Comment dit-on Vous connaissez un bon médecin ?",
      correct: "Vous connaissez un bon médecin ?",
      correctEn: "Do you know a good doctor?",
      alternatives: [],
      explanation: "Connaître = to know (a person). Médecin = doctor.",
      explanationFr: "Connaître = connaître (une personne). Médecin = médecin."
    },
    {
      id: "04-l6",
      type: "libre",
      question: "What is la mairie?",
      questionFr: "Que signifie la mairie ?",
      correct: "the town hall",
      correctEn: "the town hall",
      alternatives: ["town hall"],
      explanation: "La mairie is where you register your address, get forms, etc.",
      explanationFr: "La mairie est où vous enregistrez votre adresse, obtenez des formulaires, etc."
    },
    {
      id: "04-l7",
      type: "libre",
      question: "Translate: The rubbish goes out on Monday.",
      questionFr: "Traduisez : Les poubelles sortent le lundi.",
      correct: "Les poubelles sortent le lundi.",
      correctEn: "The rubbish goes out on Monday.",
      alternatives: [],
      explanation: "Le lundi = on Mondays (habitual). Sortent = go out.",
      explanationFr: "Le lundi = le lundi (habituel). Sortent = sortent."
    },
    {
      id: "04-l8",
      type: "libre",
      question: "Complete: C'est par ___, la pharmacie ?",
      questionFr: "Complétez : C'est par ___, la pharmacie ?",
      correct: "où",
      correctEn: "where",
      alternatives: [],
      explanation: "C'est par où = which way is it / how do I get to...",
      explanationFr: "C'est par où = c'est par où / comment aller à..."
    },
    {
      id: "04-l9",
      type: "libre",
      question: "How do you say We are very happy here?",
      questionFr: "Comment dit-on Nous sommes très contents ici ?",
      correct: "Nous sommes très contents ici.",
      correctEn: "We are very happy here.",
      alternatives: ["Nous sommes très heureux ici."],
      explanation: "Contents / heureux = happy. Both work here.",
      explanationFr: "Contents / heureux = heureux. Les deux fonctionnent ici."
    },
    {
      id: "04-l10",
      type: "libre",
      question: "Translate: The market is on Wednesdays.",
      questionFr: "Traduisez : Le marché est le mercredi.",
      correct: "Le marché est le mercredi.",
      correctEn: "The market is on Wednesdays.",
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
