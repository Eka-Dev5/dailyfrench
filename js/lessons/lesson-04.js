// lesson-04.js -- Neighbours & Community
const LESSON_04 = {
  id: 4,
  title: "Neighbours & Community",
  titleFr: "Voisins & Communaute",
  objectiveEn: "Chat with neighbours, ask for information, be sociable",
  objectiveFr: "Discuter avec les voisins, demander des informations, etre sociable",
  hintEn: "Saying bonjour first is obligatory in French social life -- never skip it!",
  hintFr: "Dire bonjour d abord est obligatoire dans la vie sociale francaise -- ne l oubliez jamais !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Meeting your neighbours</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>mon voisin / ma voisine</td><td>my neighbour (m/f)</td></tr>
<tr><td>la mairie</td><td>the town hall</td></tr>
<tr><td>le marche</td><td>the market</td></tr>
<tr><td>la place</td><td>the village square</td></tr>
<tr><td>le quartier</td><td>the neighbourhood</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Social phrases</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Comment allez-vous ?</td><td>How are you? (formal)</td></tr>
<tr><td>Ca va ?</td><td>How are you? (informal)</td></tr>
<tr><td>Je vais bien, merci.</td><td>I'm well, thank you.</td></tr>
<tr><td>A bientot !</td><td>See you soon!</td></tr>
</table>
</div>
<div class="lesson-warning">Always say bonjour when entering a shop or meeting someone. It is essential in France!</div>
<div class="lesson-example">
Bonjour madame, comment allez-vous ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Hello madam, how are you?</span>
</div>
  `,
  qcm: [
    {
      id: "04-1",
      type: "qcm",
      question: "My neighbour (woman) in French:",
      questionFr: "Ma voisine en anglais :",
      options: ["Ma voisine","Mon voisine","Ma voisin","Le voisin"],
      optionsEn: ["My neighbour (f)","My neighbour (f)","My neighbour (m)","The neighbour"],
      correct: "Ma voisine",
      correctEn: "My neighbour (woman)",
      explanation: "Voisin (m) / voisine (f). Ma voisine = my (female) neighbour.",
      explanationFr: "Voisin (m) / voisine (f). Ma voisine = ma voisine."
    },
    {
      id: "04-2",
      type: "qcm",
      question: "The town hall in French:",
      questionFr: "La mairie en anglais :",
      options: ["La mairie","La ville","Le village","La place"],
      optionsEn: ["The town hall","The city","The village","The square"],
      correct: "La mairie",
      correctEn: "The town hall",
      explanation: "La mairie (may-REE) = town hall. Also where the mayor works!",
      explanationFr: "La mairie = la mairie. C est aussi ou travaille le maire !"
    },
    {
      id: "04-3",
      type: "qcm",
      question: "How are you? (formal) in French:",
      questionFr: "Comment allez-vous ? en anglais :",
      options: ["Comment allez-vous ?","Ca va ?","Comment vas-tu ?","Que fais-tu ?"],
      optionsEn: ["How are you? (formal)","How are you? (informal)","How are you? (informal)","What are you doing?"],
      correct: "Comment allez-vous ?",
      correctEn: "How are you? (formal)",
      explanation: "Comment allez-vous ? (ko-mahn ta-lay-VOO) = formal How are you?",
      explanationFr: "Comment allez-vous ? = comment allez-vous (formel)."
    },
    {
      id: "04-4",
      type: "qcm",
      question: "See you soon! in French:",
      questionFr: "A bientot ! en anglais :",
      options: ["A bientot !","Au revoir !","A demain !","Salut !"],
      optionsEn: ["See you soon!","Goodbye!","See you tomorrow!","Hi/Bye!"],
      correct: "A bientot !",
      correctEn: "See you soon!",
      explanation: "A bientot (ah bee-AN-toh) = see you soon. Au revoir = goodbye.",
      explanationFr: "A bientot = a bientot. Au revoir = au revoir."
    },
    {
      id: "04-5",
      type: "qcm",
      question: "The neighbourhood in French:",
      questionFr: "Le quartier en anglais :",
      options: ["Le quartier","La rue","Le village","La maison"],
      optionsEn: ["The neighbourhood","The street","The village","The house"],
      correct: "Le quartier",
      correctEn: "The neighbourhood",
      explanation: "Le quartier (kar-tee-AY) = the neighbourhood / area.",
      explanationFr: "Le quartier = le quartier / le voisinage."
    },
    {
      id: "04-6",
      type: "qcm",
      question: "I am well, thank you. in French:",
      questionFr: "Je vais bien, merci. en anglais :",
      options: ["Je vais bien, merci.","Je suis bien.","Ca va bien.","Bien, merci."],
      optionsEn: ["I am well, thank you.","I am good.","It goes well.","Well, thank you."],
      correct: "Je vais bien, merci.",
      correctEn: "I am well, thank you.",
      explanation: "Je vais bien (zhuh vay bee-AN) = I am well. Merci = thank you.",
      explanationFr: "Je vais bien = je vais bien. Merci = merci."
    },
    {
      id: "04-7",
      type: "qcm",
      question: "The village square in French:",
      questionFr: "La place en anglais :",
      options: ["La place","La rue","Le jardin","Le marche"],
      optionsEn: ["The square","The street","The garden","The market"],
      correct: "La place",
      correctEn: "The village square",
      explanation: "La place (plahs) = the square / plaza. La place du village = village square.",
      explanationFr: "La place = la place. La place du village = la place du village."
    },
    {
      id: "04-8",
      type: "qcm",
      question: "Hello madam in French:",
      questionFr: "Bonjour madame en anglais :",
      options: ["Bonjour madame.","Salut madame.","Bonsoir madame.","Coucou madame."],
      optionsEn: ["Hello madam.","Hi madam.","Good evening madam.","Hey madam."],
      correct: "Bonjour madame.",
      correctEn: "Hello madam.",
      explanation: "Bonjour madame (bon-ZHOOR ma-DAM) = hello madam. Always polite!",
      explanationFr: "Bonjour madame = bonjour madame. Toujours poli !"
    },
    {
      id: "04-9",
      type: "qcm",
      question: "How are you? (informal) in French:",
      questionFr: "Ca va ? en anglais :",
      options: ["Ca va ?","Comment allez-vous ?","Comment ca va ?","Que se passe-t-il ?"],
      optionsEn: ["How are you? (informal)","How are you? (formal)","How is it going?","What is happening?"],
      correct: "Ca va ?",
      correctEn: "How are you? (informal)",
      explanation: "Ca va ? (sah VAH) = informal How are you? Used with friends/family.",
      explanationFr: "Ca va ? = ca va (informel). Utilise avec amis/famille."
    },
    {
      id: "04-10",
      type: "qcm",
      question: "Do you know the neighbours? in French:",
      questionFr: "Vous connaissez les voisins ? en anglais :",
      options: ["Vous connaissez les voisins ?","Tu sais les voisins ?","Vous savez les voisins ?","Connaissez-vous ?"],
      optionsEn: ["Do you know the neighbours?","Do you know the neighbours?","Do you know the neighbours?","Do you know?"],
      correct: "Vous connaissez les voisins ?",
      correctEn: "Do you know the neighbours?",
      explanation: "Connaitre = to know (people/places). Savoir = to know (facts).",
      explanationFr: "Connaitre = connaitre (personnes/lieux). Savoir = savoir (faits)."
    }
  ],
  libre: [
    {
      id: "04-l1",
      type: "libre",
      question: "Translate: Hello, how are you?",
      questionFr: "Traduisez : Bonjour, comment allez-vous ?",
      correct: "Bonjour, comment allez-vous ?",
      correctEn: "Hello, how are you?",
      alternatives: [],
      explanation: "Bonjour = hello. Comment allez-vous = formal How are you?",
      explanationFr: "Bonjour = bonjour. Comment allez-vous = comment allez-vous (formel)."
    },
    {
      id: "04-l2",
      type: "libre",
      question: "How do you say my neighbour (man)?",
      questionFr: "Comment dit-on mon voisin ?",
      correct: "mon voisin",
      correctEn: "my neighbour (man)",
      alternatives: [],
      explanation: "Mon voisin (m) / ma voisine (f).",
      explanationFr: "Mon voisin (m) / ma voisine (f)."
    },
    {
      id: "04-l3",
      type: "libre",
      question: "Translate: See you soon!",
      questionFr: "Traduisez : A bientot !",
      correct: "A bientot !",
      correctEn: "See you soon!",
      alternatives: ["A plus tard !"],
      explanation: "A bientot = see you soon. A plus tard = see you later.",
      explanationFr: "A bientot = a bientot. A plus tard = a plus tard."
    },
    {
      id: "04-l4",
      type: "libre",
      question: "What is la mairie?",
      questionFr: "Que signifie la mairie ?",
      correct: "the town hall",
      correctEn: "the town hall",
      alternatives: ["town hall"],
      explanation: "La mairie = town hall / city hall. Le maire = the mayor.",
      explanationFr: "La mairie = la mairie. Le maire = le maire."
    },
    {
      id: "04-l5",
      type: "libre",
      question: "Complete: Je vais ___, merci.",
      questionFr: "Completez : Je vais ___, merci.",
      correct: "bien",
      correctEn: "well",
      alternatives: [],
      explanation: "Je vais bien = I am well. Ca va bien = It goes well.",
      explanationFr: "Je vais bien = je vais bien. Ca va bien = ca va bien."
    },
    {
      id: "04-l6",
      type: "libre",
      question: "Translate: Do you know the neighbourhood?",
      questionFr: "Traduisez : Vous connaissez le quartier ?",
      correct: "Vous connaissez le quartier ?",
      correctEn: "Do you know the neighbourhood?",
      alternatives: [],
      explanation: "Le quartier = the neighbourhood. Connaitre = to know (a place).",
      explanationFr: "Le quartier = le quartier. Connaitre = connaitre (un lieu)."
    },
    {
      id: "04-l7",
      type: "libre",
      question: "How do you say the market?",
      questionFr: "Comment dit-on le marche ?",
      correct: "le marche",
      correctEn: "the market",
      alternatives: [],
      explanation: "Le marche = the market. Le marche aux puces = flea market.",
      explanationFr: "Le marche = le marche. Le marche aux puces = le marche aux puces."
    },
    {
      id: "04-l8",
      type: "libre",
      question: "Translate: Good evening, madam.",
      questionFr: "Traduisez : Bonsoir, madame.",
      correct: "Bonsoir, madame.",
      correctEn: "Good evening, madam.",
      alternatives: [],
      explanation: "Bonsoir = good evening. Bonjour = good day / hello.",
      explanationFr: "Bonsoir = bonsoir. Bonjour = bonjour."
    },
    {
      id: "04-l9",
      type: "libre",
      question: "Complete: ___ madame, comment allez-vous ?",
      questionFr: "Completez : ___ madame, comment allez-vous ?",
      correct: "Bonjour",
      correctEn: "Hello",
      alternatives: [],
      explanation: "Always start with Bonjour in formal situations.",
      explanationFr: "Toujours commencer par Bonjour en situation formelle."
    },
    {
      id: "04-l10",
      type: "libre",
      question: "What does au revoir mean?",
      questionFr: "Que signifie au revoir ?",
      correct: "goodbye",
      correctEn: "goodbye",
      alternatives: ["bye","see you again"],
      explanation: "Au revoir (oh ruh-VWAHR) = goodbye. A bientot = see you soon.",
      explanationFr: "Au revoir = au revoir. A bientot = a bientot."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_04;
} else {
  window.LESSON_04 = LESSON_04;
}
