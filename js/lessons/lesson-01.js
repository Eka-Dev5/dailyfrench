// lesson-01.js -- Greetings & Introductions
const LESSON_01 = {
  id: 1,
  title: "Greetings & Introductions",
  titleFr: "Salutations & Presentation",
  objectiveEn: "Say hello, introduce yourself, use vous vs tu",
  objectiveFr: "Dire bonjour, se presenter, utiliser vous vs tu",
  hintEn: "Always use vous with strangers -- tu is for friends only!",
  hintFr: "Utilisez toujours vous avec les inconnus -- tu est pour les amis seulement !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Basic greetings</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td><strong>Bonjour</strong></td><td><em>*bon-ZHOOR*</em></td><td>Hello / Good morning</td></tr>
<tr><td><strong>Bonsoir</strong></td><td><em>*bon-SWAHR*</em></td><td>Good evening</td></tr>
<tr><td><strong>Bonne nuit</strong></td><td><em>*bun NWEE*</em></td><td>Good night</td></tr>
<tr><td><strong>Au revoir</strong></td><td><em>*oh ruh-VWAHR*</em></td><td>Goodbye</td></tr>
<tr><td><strong>Salut</strong></td><td><em>*sa-LUE*</em></td><td>Hi / Bye (informal)</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Introducing yourself</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Je mappelle Marie.</td><td>My name is Marie.</td></tr>
<tr><td>Je suis anglais / anglaise.</td><td>I am English (m/f).</td></tr>
<tr><td>Jhabite a Lyon.</td><td>I live in Lyon.</td></tr>
<tr><td>Enchante(e) !</td><td>Nice to meet you!</td></tr>
</table>
</div>
<div class="lesson-warning">Always use <strong>vous</strong> (formal) with strangers, shopkeepers and officials. <strong>Tu</strong> is for friends and children only.</div>
<div class="lesson-example">
<strong>Dialogue :</strong><br>
-- Bonjour Madame, je mappelle John. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Good morning, my name is John.</span><br>
-- Bonjour ! Enchante. Vous habitez ici ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Hello! Nice to meet you. Do you live here?</span>
</div>
  `,
  qcm: [
    {
      id: "01-1",
      type: "qcm",
      question: "How do you say Good evening in French?",
      questionFr: "Comment dit-on Good evening en francais ?",
      options: ["Bonsoir","Bonjour","Bonne nuit","Salut"],
      optionsEn: ["Good evening","Hello","Good night","Hi"],
      correct: "Bonsoir",
      correctEn: "Good evening",
      explanation: "Bonsoir = Good evening. Use it from around 6pm onwards.",
      explanationFr: "Bonsoir = Bonsoir. Utilisez-le a partir de 18h environ."
    },
    {
      id: "01-2",
      type: "qcm",
      question: "Which is the FORMAL way to say goodbye?",
      questionFr: "Quelle est la facon FORMELLE de dire au revoir ?",
      options: ["Au revoir","Salut","Ciao","A plus"],
      optionsEn: ["Goodbye","Hi","Ciao","See you later"],
      correct: "Au revoir",
      correctEn: "Goodbye",
      explanation: "Au revoir (oh ruh-VWAHR) is always safe. Salut/Ciao/A plus are informal only.",
      explanationFr: "Au revoir est toujours sur. Salut/Ciao/A plus sont informels seulement."
    },
    {
      id: "01-3",
      type: "qcm",
      question: "You meet your new neighbour. You should say:",
      questionFr: "Vous rencontrez votre nouveau voisin. Vous devriez dire :",
      options: ["Bonjour, je mappelle...","Salut mec !","Yo !","He toi !"],
      optionsEn: ["Hello, my name is...","Hi dude!","Yo!","Hey you!"],
      correct: "Bonjour, je mappelle...",
      correctEn: "Hello, my name is...",
      explanation: "Always start with Bonjour and introduce yourself formally with strangers.",
      explanationFr: "Commencez toujours par Bonjour et presente-toi formellement avec les inconnus."
    },
    {
      id: "01-4",
      type: "qcm",
      question: "My name is John in French:",
      questionFr: "My name is John en francais :",
      options: ["Je mappelle John","Je suis John","Mon nom John","Jappelle John"],
      optionsEn: ["My name is John","I am John","My name John","I call John"],
      correct: "Je mappelle John",
      correctEn: "My name is John",
      explanation: "Je mappelle (zhuh ma-PELL) = My name is. Literally I call myself.",
      explanationFr: "Je mappelle = Je mappelle. Litteralement je mappelle moi-meme."
    },
    {
      id: "01-5",
      type: "qcm",
      question: "I live in Lyon in French:",
      questionFr: "I live in Lyon en francais :",
      options: ["Jhabite a Lyon","Je vis Lyon","Jai Lyon","Je suis a Lyon"],
      optionsEn: ["I live in Lyon","I live Lyon","I have Lyon","I am in Lyon"],
      correct: "Jhabite a Lyon",
      correctEn: "I live in Lyon",
      explanation: "Jhabite (zha-BEET) = I live. Always followed by a + city.",
      explanationFr: "Jhabite = Jhabite. Toujours suivi de a + ville."
    },
    {
      id: "01-6",
      type: "qcm",
      question: "Nice to meet you! in French:",
      questionFr: "Nice to meet you! en francais :",
      options: ["Enchante !","Merci !","Desole !","Bonsoir !"],
      optionsEn: ["Nice to meet you!","Thank you!","Sorry!","Good evening!"],
      correct: "Enchante !",
      correctEn: "Nice to meet you!",
      explanation: "Enchante(e) (on-shon-TAY) = Nice to meet you! Add -e if you are a woman: Enchantee.",
      explanationFr: "Enchante(e) = Enchante(e) ! Ajoutez -e si vous etes une femme : Enchantee."
    },
    {
      id: "01-7",
      type: "qcm",
      question: "Which greeting is INFORMAL (for friends only)?",
      questionFr: "Quel salut est INFORMEL (pour les amis seulement) ?",
      options: ["Salut","Bonjour","Bonsoir","Bonne nuit"],
      optionsEn: ["Hi","Hello","Good evening","Good night"],
      correct: "Salut",
      correctEn: "Hi",
      explanation: "Salut (sa-LUE) is casual. Use Bonjour/Bonsoir with anyone you do not know well.",
      explanationFr: "Salut est decontracte. Utilisez Bonjour/Bonsoir avec ceux que vous ne connaissez pas bien."
    },
    {
      id: "01-8",
      type: "qcm",
      question: "I am English (man speaking) in French:",
      questionFr: "I am English (homme qui parle) en francais :",
      options: ["Je suis anglais","Je suis anglaise","Jai anglais","Je suis england"],
      optionsEn: ["I am English","I am English (f)","I have English","I am England"],
      correct: "Je suis anglais",
      correctEn: "I am English",
      explanation: "Je suis anglais (m) / anglaise (f). The nationality adjective agrees with gender.",
      explanationFr: "Je suis anglais (m) / anglaise (f). L adjectif de nationalite s accorde avec le genre."
    },
    {
      id: "01-9",
      type: "qcm",
      question: "Good night in French:",
      questionFr: "Good night en francais :",
      options: ["Bonne nuit","Bonsoir","Au revoir","Dormez bien"],
      optionsEn: ["Good night","Good evening","Goodbye","Sleep well"],
      correct: "Bonne nuit",
      correctEn: "Good night",
      explanation: "Bonne nuit (bun NWEE) is said when someone goes to bed. Bonsoir is for good evening.",
      explanationFr: "Bonne nuit se dit quand quelquun se couche. Bonsoir est pour bonsoir."
    },
    {
      id: "01-10",
      type: "qcm",
      question: "See you tomorrow in French:",
      questionFr: "See you tomorrow en francais :",
      options: ["A demain","Au revoir","A bientot","Salut"],
      optionsEn: ["See you tomorrow","Goodbye","See you soon","Hi"],
      correct: "A demain",
      correctEn: "See you tomorrow",
      explanation: "A demain = See you tomorrow. A bientot = See you soon. Both are useful!",
      explanationFr: "A demain = A demain. A bientot = A bientot. Les deux sont utiles !"
    }
  ],
  libre: [
    {
      id: "01-l1",
      type: "libre",
      question: "Translate: Hello, my name is Sarah.",
      questionFr: "Traduisez : Bonjour, je mappelle Sarah.",
      correct: "Bonjour, je mappelle Sarah.",
      correctEn: "Hello, my name is Sarah.",
      alternatives: [],
      explanation: "Bonjour = Hello. Je mappelle = My name is.",
      explanationFr: "Bonjour = Bonjour. Je mappelle = Je mappelle."
    },
    {
      id: "01-l2",
      type: "libre",
      question: "How do you say I live in Paris?",
      questionFr: "Comment dit-on Jhabite a Paris ?",
      correct: "Jhabite a Paris.",
      correctEn: "I live in Paris.",
      alternatives: ["Jhabite Paris"],
      explanation: "Jhabite a + city. The a is required.",
      explanationFr: "Jhabite a + ville. Le a est obligatoire."
    },
    {
      id: "01-l3",
      type: "libre",
      question: "What is the formal word for you in French?",
      questionFr: "Quel est le mot formel pour you en francais ?",
      correct: "vous",
      correctEn: "you (formal)",
      alternatives: [],
      explanation: "Vous is formal. Tu is informal (friends and children only).",
      explanationFr: "Vous est formel. Tu est informel (amis et enfants seulement)."
    },
    {
      id: "01-l4",
      type: "libre",
      question: "Complete: Bonjour, je ___ anglais.",
      questionFr: "Completez : Bonjour, je ___ anglais.",
      correct: "suis",
      correctEn: "am",
      alternatives: [],
      explanation: "Je suis = I am. This is the present tense of etre (to be).",
      explanationFr: "Je suis = Je suis. C est le present de etre."
    },
    {
      id: "01-l5",
      type: "libre",
      question: "How do you say Nice to meet you?",
      questionFr: "Comment dit-on Enchante ?",
      correct: "Enchante",
      correctEn: "Nice to meet you",
      alternatives: ["Enchantee","Enchante !","Enchantee !"],
      explanation: "Enchante(e) -- add -e if the speaker is a woman.",
      explanationFr: "Enchante(e) -- ajoutez -e si le locuteur est une femme."
    },
    {
      id: "01-l6",
      type: "libre",
      question: "Translate: Good evening, Madame Dupont.",
      questionFr: "Traduisez : Bonsoir, Madame Dupont.",
      correct: "Bonsoir, Madame Dupont.",
      correctEn: "Good evening, Madame Dupont.",
      alternatives: [],
      explanation: "Bonsoir for evening. Always use title (Madame/Monsieur) with surname.",
      explanationFr: "Bonsoir pour le soir. Utilisez toujours le titre (Madame/Monsieur) avec le nom de famille."
    },
    {
      id: "01-l7",
      type: "libre",
      question: "What does Au revoir mean?",
      questionFr: "Que signifie Au revoir ?",
      correct: "Goodbye",
      correctEn: "Goodbye",
      alternatives: ["goodbye","au revoir"],
      explanation: "Au revoir (oh ruh-VWAHR) = Goodbye. Literally until we see again.",
      explanationFr: "Au revoir = Au revoir. Litteralement jusqu a ce que nous nous revoyions."
    },
    {
      id: "01-l8",
      type: "libre",
      question: "How do you say I am new here (man speaking)?",
      questionFr: "Comment dit-on Je suis nouveau ici (homme qui parle) ?",
      correct: "Je suis nouveau ici.",
      correctEn: "I am new here.",
      alternatives: ["Je suis nouveau"],
      explanation: "Nouveau (m) / nouvelle (f). Je suis = I am.",
      explanationFr: "Nouveau (m) / nouvelle (f). Je suis = Je suis."
    },
    {
      id: "01-l9",
      type: "libre",
      question: "Translate: Do you speak English?",
      questionFr: "Traduisez : Parlez-vous anglais ?",
      correct: "Parlez-vous anglais ?",
      correctEn: "Do you speak English?",
      alternatives: ["Vous parlez anglais ?"],
      explanation: "Parlez-vous anglais ? is the formal inversion form. Very useful!",
      explanationFr: "Parlez-vous anglais ? est la forme d inversion formelle. Tres utile !"
    },
    {
      id: "01-l10",
      type: "libre",
      question: "Complete: ___ mappelle Pierre.",
      questionFr: "Completez : ___ mappelle Pierre.",
      correct: "Je",
      correctEn: "I",
      alternatives: [],
      explanation: "Je mappelle = My name is. Je = I (subject pronoun).",
      explanationFr: "Je mappelle = Je mappelle. Je = Je (pronom sujet)."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_01;
} else {
  window.LESSON_01 = LESSON_01;
}
