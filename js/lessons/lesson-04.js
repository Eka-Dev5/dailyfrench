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
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>mon voisin / ma voisine</td><td><em>*mon vwa-ZAN / ma vwa-ZEEN*</em></td><td>my neighbour (m/f) <!-- *my NAY-bur* --></td></tr>
<tr><td>la mairie</td><td><em>*la may-REE*</em></td><td>the town hall <!-- *thuh town hawl* --></td></tr>
<tr><td>le marche</td><td><em>*luh mar-SHAY*</em></td><td>the market <!-- *thuh MAR-kit* --></td></tr>
<tr><td>la place</td><td><em>*la plahs*</em></td><td>the village square <!-- *thuh VIL-ij skwair* --></td></tr>
<tr><td>le quartier</td><td><em>*luh kar-tee-AY*</em></td><td>the neighbourhood <!-- *thuh NAY-bur-hood* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Social phrases</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>Comment allez-vous ?</td><td><em>*ko-mahn ta-lay-VOO*</em></td><td>How are you? (formal) <!-- *how ar yoo* --></td></tr>
<tr><td>Ca va ?</td><td><em>*sah VAH*</em></td><td>How are you? (informal) <!-- *how ar yoo* --></td></tr>
<tr><td>Je vais bien, merci.</td><td><em>*zhuh vay bee-AN, mair-SEE*</em></td><td>I'm well, thank you. <!-- *eye m well, THAN-k yoo* --></td></tr>
<tr><td>A bientot !</td><td><em>*ah bee-AN-toh*</em></td><td>See you soon! <!-- *see yoo soon* --></td></tr>
</table>
</div>
<div class="lesson-warning">Always say <strong>bonjour</strong> when entering a shop or meeting someone. It is essential in France!</div>
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
      explanation: "Connaitre = to know. Le quartier = the neighbourhood.",
      explanationFr: "Connaitre = connaitre. Le quartier = le quartier."
    },
    {
      id: "04-l7",
      type: "libre",
      question: "How do you say How are you? (informal)?",
      questionFr: "Comment dit-on Ca va ?",
      correct: "Ca va ?",
      correctEn: "How are you? (informal)",
      alternatives: [],
      explanation: "Ca va ? = informal How are you?",
      explanationFr: "Ca va ? = ca va (informel)."
    },
    {
      id: "04-l8",
      type: "libre",
      question: "Complete: ___ voisine habite a cote.",
      questionFr: "Completez : ___ voisine habite a cote.",
      correct: "Ma",
      correctEn: "My",
      alternatives: [],
      explanation: "Ma voisine = my (female) neighbour. Ma = my (feminine).",
      explanationFr: "Ma voisine = ma voisine. Ma = ma (feminin)."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_04;
} else {
  window.LESSON_04 = LESSON_04;
}
