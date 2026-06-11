const LESSON_04 = {
  id: 4,
  title: "Neighbours & Community",
  titleFr: "Voisins et communauté",
  objectiveEn: "Chat with neighbours, ask for information, be sociable",
  objectiveFr: "Discuter avec les voisins, demander des informations, être sociable",
  hintEn: "Saying 'bonjour' first is obligatory in French social life — never skip it!",
  hintFr: "Dire 'bonjour' en premier est obligatoire dans la vie sociale française — ne l'oubliez jamais !",
  vocabulary: [],
  contentHtml: `<div class="lesson-rule">
<h4>🏘️ Community phrases</h4>
<table class="lesson-table">
<thead>
<tr><th>French</th><th>English</th></tr>
</thead>
<tbody>
<tr><td>ma voisine</td><td>my neighbour (female)</td></tr>
<tr><td>mon voisin</td><td>my neighbour (male)</td></tr>
<tr><td>la mairie</td><td>the town hall</td></tr>
<tr><td>depuis longtemps</td><td>for a long time</td></tr>
<tr><td>C'est par où ?</td><td>Which way is it?</td></tr>
</tbody>
</table>
</div>`,
  qcm: [
    {
      id: "4-1",
      type: "qcm",
      question: "'My neighbour (female)' in French:",
      questionFr: "Comment dit-on 'ma voisine' ?",
      options: ["Ma voisine", "Mon voisin", "Ma voisin", "La voisine de moi"],
      optionsEn: ["My neighbour (f)", "My neighbour (m)", "My neighbour (wrong)", "The neighbour of me"],
      correct: "Ma voisine",
      correctEn: "My neighbour (f)",
      explanation: "Voisine (f).",
      explanationFr: "Voisine (f)."
    },
    {
      id: "4-2",
      type: "qcm",
      question: "'Have you lived here long?' in French:",
      questionFr: "Traduisez : 'Vous habitez ici depuis longtemps ?'",
      options: ["Vous habitez ici depuis longtemps ?", "Vous êtes ici long ?", "Depuis quand vous êtes ?", "Ça fait combien ici ?"],
      optionsEn: ["Have you lived here long?", "You are here long?", "Since when you are?", "How much does it make here?"],
      correct: "Vous habitez ici depuis longtemps ?",
      correctEn: "Have you lived here long?",
      explanation: "Depuis longtemps = for a long time.",
      explanationFr: "Depuis longtemps = depuis longtemps."
    },
    {
      id: "4-3",
      type: "qcm",
      question: "'I'm new here' (woman speaking) in French:",
      questionFr: "Comment dit-on 'Je suis nouvelle ici' (femme) ?",
      options: ["Je suis nouvelle ici.", "Je suis nouveau ici.", "Je suis nouvelle.", "Moi suis nouvelle."],
      optionsEn: ["I'm new here (f)", "I'm new here (m)", "I'm new (f)", "Me am new"],
      correct: "Je suis nouvelle ici.",
      correctEn: "I'm new here (f)",
      explanation: "Nouvelle (f).",
      explanationFr: "Nouvelle (f)."
    },
    {
      id: "4-4",
      type: "qcm",
      question: "'Which way is the town hall?' in French:",
      questionFr: "Comment dit-on 'C'est par où, la mairie ?'",
      options: ["C'est par où, la mairie ?", "Où est la mairie ?", "La mairie, comment ?", "Par là mairie ?"],
      optionsEn: ["Which way is the town hall?", "Where is the town hall?", "The town hall, how?", "That way town hall?"],
      correct: "C'est par où, la mairie ?",
      correctEn: "Which way is the town hall?",
      explanation: "C'est par où = which way.",
      explanationFr: "C'est par où = par où."
    },
    {
      id: "4-5",
      type: "qcm",
      question: "'Do you know a good plumber?' in French:",
      questionFr: "Traduisez : 'Vous connaissez un bon plombier ?'",
      options: ["Vous connaissez un bon plombier ?", "Vous savez plombier ?", "Avez-vous plombier ?", "Un plombier vous connaissez ?"],
      optionsEn: ["Do you know a good plumber?", "You know plumber?", "Do you have plumber?", "A plumber you know?"],
      correct: "Vous connaissez un bon plombier ?",
      correctEn: "Do you know a good plumber?",
      explanation: "Connaître = to know (a person).",
      explanationFr: "Connaître = connaître (une personne)."
    },
    {
      id: "4-6",
      type: "qcm",
      question: "How do you say 'the town hall'?",
      questionFr: "Comment dit-on 'la mairie' ?",
      options: ["La mairie", "La préfecture", "La maison", "Le bureau"],
      optionsEn: ["The town hall", "The prefecture", "The house", "The office"],
      correct: "La mairie",
      correctEn: "The town hall",
      explanation: "La mairie = town hall.",
      explanationFr: "La mairie = la mairie."
    },
    {
      id: "4-7",
      type: "qcm",
      question: "'The market is on Thursdays.' in French:",
      questionFr: "Traduisez : 'Le marché est le jeudi.'",
      options: ["Le marché est le jeudi.", "Le marché est jeudi.", "Marché est le jeudi.", "Jeudi le marché."],
      optionsEn: ["The market is on Thursdays.", "The market is Thursday.", "Market is on Thursdays.", "Thursday the market."],
      correct: "Le marché est le jeudi.",
      correctEn: "The market is on Thursdays.",
      explanation: "Le jeudi = on Thursdays (habitual).",
      explanationFr: "Le jeudi = le jeudi (habituel)."
    },
    {
      id: "4-8",
      type: "qcm",
      question: "'The rubbish bins go out on Tuesday' in French:",
      questionFr: "Traduisez : 'Les poubelles sortent le mardi.'",
      options: ["Les poubelles sortent le mardi.", "Les poubelles sont mardi.", "Le mardi poubelles.", "Poubelles sortir mardi."],
      optionsEn: ["The bins go out on Tuesday.", "The bins are Tuesday.", "On Tuesday bins.", "Bins go out Tuesday."],
      correct: "Les poubelles sortent le mardi.",
      correctEn: "The bins go out on Tuesday.",
      explanation: "Sortent le mardi = go out on Tuesdays.",
      explanationFr: "Sortent le mardi = sortent le mardi."
    },
    {
      id: "4-9",
      type: "qcm",
      question: "'It's very quiet here.' in French:",
      questionFr: "Traduisez : 'C'est très calme ici.'",
      options: ["C'est très calme ici.", "Ici est très silence.", "C'est trop calme.", "Très calme est ici."],
      optionsEn: ["It's very quiet here.", "Here is very silence.", "It's too quiet.", "Very quiet is here."],
      correct: "C'est très calme ici.",
      correctEn: "It's very quiet here.",
      explanation: "C'est très calme = it's very quiet.",
      explanationFr: "C'est très calme = c'est très calme."
    },
    {
      id: "4-10",
      type: "qcm",
      question: "'We've lived here for 2 years.' in French:",
      questionFr: "Traduisez : 'Nous habitons ici depuis deux ans.'",
      options: ["Nous habitons ici depuis deux ans.", "Nous sommes ici deux ans.", "Ici nous deux ans.", "Depuis deux ans nous."],
      optionsEn: ["We've lived here for 2 years.", "We are here two years.", "Here we two years.", "For two years we."],
      correct: "Nous habitons ici depuis deux ans.",
      correctEn: "We've lived here for 2 years.",
      explanation: "Depuis + duration = for.",
      explanationFr: "Depuis + durée = depuis."
    }
  ],
  libre: [
    {
      id: "4-l1",
      type: "libre",
      question: "Translate: 'My neighbour is very kind.'",
      questionFr: "Traduisez : 'Mon voisin est très gentil.'",
      correct: "Mon voisin est très gentil.",
      correctEn: "My neighbour is very kind.",
      alternatives: ["Ma voisine est très gentille."],
      explanation: "Gentil = kind.",
      explanationFr: "Gentil = gentil."
    },
    {
      id: "4-l2",
      type: "libre",
      question: "How do you ask 'Is there a market nearby?'",
      questionFr: "Comment demande-t-on 'Il y a un marché près d'ici ?'",
      correct: "Il y a un marché près d'ici ?",
      correctEn: "Is there a market nearby?",
      alternatives: ["Y a-t-il un marché près d'ici ?"],
      explanation: "Il y a = there is.",
      explanationFr: "Il y a = il y a."
    },
    {
      id: "4-l3",
      type: "libre",
      question: "Complete: 'Vous habitez ici ___ longtemps ?'",
      questionFr: "Complétez : 'Vous habitez ici ___ longtemps ?'",
      correct: "depuis",
      correctEn: "for",
      alternatives: [],
      explanation: "Depuis = since/for.",
      explanationFr: "Depuis = depuis."
    },
    {
      id: "4-l4",
      type: "libre",
      question: "Translate: 'I'm new here.'",
      questionFr: "Traduisez : 'Je suis nouveau ici.'",
      correct: "Je suis nouveau ici.",
      correctEn: "I'm new here.",
      alternatives: ["Je suis nouvelle ici."],
      explanation: "Nouveau (m) / nouvelle (f).",
      explanationFr: "Nouveau (m) / nouvelle (f)."
    },
    {
      id: "4-l5",
      type: "libre",
      question: "How do you say 'Do you know a good doctor?'",
      questionFr: "Comment dit-on 'Vous connaissez un bon médecin ?'",
      correct: "Vous connaissez un bon médecin ?",
      correctEn: "Do you know a good doctor?",
      alternatives: [],
      explanation: "Connaître = to know.",
      explanationFr: "Connaître = connaître."
    },
    {
      id: "4-l6",
      type: "libre",
      question: "What is 'la mairie'?",
      questionFr: "Qu'est-ce que 'la mairie' ?",
      correct: "the town hall",
      correctEn: "the town hall",
      alternatives: ["town hall"],
      explanation: "La mairie = town hall.",
      explanationFr: "La mairie = la mairie."
    },
    {
      id: "4-l7",
      type: "libre",
      question: "Translate: 'The rubbish goes out on Monday.'",
      questionFr: "Traduisez : 'Les poubelles sortent le lundi.'",
      correct: "Les poubelles sortent le lundi.",
      correctEn: "The rubbish goes out on Monday.",
      alternatives: [],
      explanation: "Le lundi = on Mondays.",
      explanationFr: "Le lundi = le lundi."
    },
    {
      id: "4-l8",
      type: "libre",
      question: "Complete: 'C'est par ___, la pharmacie ?'",
      questionFr: "Complétez : 'C'est par ___, la pharmacie ?'",
      correct: "où",
      correctEn: "where",
      alternatives: [],
      explanation: "C'est par où = which way.",
      explanationFr: "C'est par où = par où."
    },
    {
      id: "4-l9",
      type: "libre",
      question: "How do you say 'We are very happy here'?",
      questionFr: "Comment dit-on 'Nous sommes très contents ici' ?",
      correct: "Nous sommes très contents ici.",
      correctEn: "We are very happy here.",
      alternatives: ["Nous sommes très heureux ici."],
      explanation: "Contents / heureux = happy.",
      explanationFr: "Contents / heureux = heureux."
    },
    {
      id: "4-l10",
      type: "libre",
      question: "Translate: 'The market is on Wednesdays.'",
      questionFr: "Traduisez : 'Le marché est le mercredi.'",
      correct: "Le marché est le mercredi.",
      correctEn: "The market is on Wednesdays.",
      alternatives: [],
      explanation: "Le mercredi = on Wednesdays.",
      explanationFr: "Le mercredi = le mercredi."
    }
  ]
};
if (typeof module !== 'undefined' && module.exports) module.exports = LESSON_04; else window.LESSON_04 = LESSON_04;
