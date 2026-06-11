// lesson-01.js — Greetings & Introductions 🙋
const LESSON_01 = {
  id: 1,
  title: "Greetings & Introductions 🙋",
  titleFr: "Salutations & Présentation",
  objectiveEn: "Say hello, introduce yourself, use vous vs tu",
  objectiveFr: "Dire bonjour, se présenter, utiliser vous vs tu",
  hintEn: "Always use 'vous' with strangers — 'tu' is for friends only!",
  hintFr: "Utilisez toujours 'vous' avec les inconnus — 'tu' est pour les amis seulement !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>👋 Basic greetings</h4>
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
<h4>🤝 Introducing yourself</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Je m'appelle Marie.</td><td>My name is Marie.</td></tr>
<tr><td>Je suis anglais / anglaise.</td><td>I am English (m/f).</td></tr>
<tr><td>J'habite à Lyon.</td><td>I live in Lyon.</td></tr>
<tr><td>Enchanté(e) !</td><td>Nice to meet you!</td></tr>
</table>
</div>
<div class="lesson-warning">⚠️ Always use <strong>vous</strong> (formal) with strangers, shopkeepers and officials. <strong>Tu</strong> is for friends and children only.</div>
<div class="lesson-example">
<strong>Dialogue :</strong><br>
— Bonjour Madame, je m'appelle John. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">Good morning, my name is John.</span><br>
— Bonjour ! Enchanté. Vous habitez ici ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">Hello! Nice to meet you. Do you live here?</span>
</div>
  `,
  qcm: [
    {
      id: "01-1",
      type: "qcm",
      question: "How do you say 'Good evening' in French?",
      questionFr: "Comment dit-on 'Good evening' en français ?",
      options: ["Bonsoir","Bonjour","Bonne nuit","Salut"],
      optionsEn: ["Good evening","Hello","Good night","Hi"],
      correct: "Bonsoir",
      correctEn: "Good evening",
      explanation: "Bonsoir = Good evening. Use it from around 6pm onwards.",
      explanationFr: "Bonsoir = Bonsoir. Utilisez-le à partir de 18h environ."
    },
    {
      id: "01-2",
      type: "qcm",
      question: "Which is the FORMAL way to say goodbye?",
      questionFr: "Quelle est la façon FORMELLE de dire au revoir ?",
      options: ["Au revoir","Salut","Ciao","À plus"],
      optionsEn: ["Goodbye","Hi","Ciao","See you later"],
      correct: "Au revoir",
      correctEn: "Goodbye",
      explanation: "Au revoir (*oh ruh-VWAHR*) is always safe. Salut/Ciao/À plus are informal only.",
      explanationFr: "Au revoir est toujours sûr. Salut/Ciao/À plus sont informels seulement."
    },
    {
      id: "01-3",
      type: "qcm",
      question: "You meet your new neighbour. You should say:",
      questionFr: "Vous rencontrez votre nouveau voisin. Vous devriez dire :",
      options: ["Bonjour, je m'appelle...","Salut mec !","Yo !","Hé toi !"],
      optionsEn: ["Hello, my name is...","Hi dude!","Yo!","Hey you!"],
      correct: "Bonjour, je m'appelle...",
      correctEn: "Hello, my name is...",
      explanation: "Always start with Bonjour and introduce yourself formally with strangers.",
      explanationFr: "Commencez toujours par Bonjour et présentez-vous formellement avec les inconnus."
    },
    {
      id: "01-4",
      type: "qcm",
      question: "'My name is John' in French:",
      questionFr: "'My name is John' en français :",
      options: ["Je m'appelle John","Je suis John","Mon nom John","J'appelle John"],
      optionsEn: ["My name is John","I am John","My name John","I call John"],
      correct: "Je m'appelle John",
      correctEn: "My name is John",
      explanation: "Je m'appelle (*zhuh ma-PELL*) = My name is. Literally 'I call myself'.",
      explanationFr: "Je m'appelle = Je m'appelle. Littéralement 'je m'appelle moi-même'."
    },
    {
      id: "01-5",
      type: "qcm",
      question: "'I live in Lyon' in French:",
      questionFr: "'I live in Lyon' en français :",
      options: ["J'habite à Lyon","Je vis Lyon","J'ai Lyon","Je suis à Lyon"],
      optionsEn: ["I live in Lyon","I live Lyon","I have Lyon","I am in Lyon"],
      correct: "J'habite à Lyon",
      correctEn: "I live in Lyon",
      explanation: "J'habite (*zha-BEET*) = I live. Always followed by 'à' + city.",
      explanationFr: "J'habite = J'habite. Toujours suivi de 'à' + ville."
    },
    {
      id: "01-6",
      type: "qcm",
      question: "'Nice to meet you!' in French:",
      questionFr: "'Nice to meet you!' en français :",
      options: ["Enchanté !","Merci !","Désolé !","Bonsoir !"],
      optionsEn: ["Nice to meet you!","Thank you!","Sorry!","Good evening!"],
      correct: "Enchanté !",
      correctEn: "Nice to meet you!",
      explanation: "Enchanté(e) (*on-shon-TAY*) = Nice to meet you! Add -e if you're a woman: Enchantée.",
      explanationFr: "Enchanté(e) = Enchanté(e) ! Ajoutez -e si vous êtes une femme : Enchantée."
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
      explanation: "Salut (*sa-LUE*) is casual. Use Bonjour/Bonsoir with anyone you don't know well.",
      explanationFr: "Salut est décontracté. Utilisez Bonjour/Bonsoir avec ceux que vous ne connaissez pas bien."
    },
    {
      id: "01-8",
      type: "qcm",
      question: "'I am English' (man speaking) in French:",
      questionFr: "'I am English' (homme qui parle) en français :",
      options: ["Je suis anglais","Je suis anglaise","J'ai anglais","Je suis england"],
      optionsEn: ["I am English","I am English (f)","I have English","I am England"],
      correct: "Je suis anglais",
      correctEn: "I am English",
      explanation: "Je suis anglais (m) / anglaise (f). The nationality adjective agrees with gender.",
      explanationFr: "Je suis anglais (m) / anglaise (f). L'adjectif de nationalité s'accorde avec le genre."
    },
    {
      id: "01-9",
      type: "qcm",
      question: "'Good night' in French:",
      questionFr: "'Good night' en français :",
      options: ["Bonne nuit","Bonsoir","Au revoir","Dormez bien"],
      optionsEn: ["Good night","Good evening","Goodbye","Sleep well"],
      correct: "Bonne nuit",
      correctEn: "Good night",
      explanation: "Bonne nuit (*bun NWEE*) is said when someone goes to bed. Bonsoir is for 'good evening'.",
      explanationFr: "Bonne nuit se dit quand quelqu'un se couche. Bonsoir est pour 'bonsoir'."
    },
    {
      id: "01-10",
      type: "qcm",
      question: "'See you tomorrow' in French:",
      questionFr: "'See you tomorrow' en français :",
      options: ["À demain","Au revoir","À bientôt","Salut"],
      optionsEn: ["See you tomorrow","Goodbye","See you soon","Hi"],
      correct: "À demain",
      correctEn: "See you tomorrow",
      explanation: "À demain = See you tomorrow. À bientôt = See you soon. Both are useful!",
      explanationFr: "À demain = À demain. À bientôt = À bientôt. Les deux sont utiles !"
    }
  ],
  libre: [
    {
      id: "01-l1",
      type: "libre",
      question: "Translate: 'Hello, my name is Sarah.'",
      questionFr: "Traduisez : 'Bonjour, je m'appelle Sarah.'",
      correct: "Bonjour, je m'appelle Sarah.",
      correctEn: "Hello, my name is Sarah.",
      alternatives: [],
      explanation: "Bonjour = Hello. Je m'appelle = My name is.",
      explanationFr: "Bonjour = Bonjour. Je m'appelle = Je m'appelle."
    },
    {
      id: "01-l2",
      type: "libre",
      question: "How do you say 'I live in Paris'?",
      questionFr: "Comment dit-on 'J'habite à Paris' ?",
      correct: "J'habite à Paris.",
      correctEn: "I live in Paris.",
      alternatives: ["J'habite Paris"],
      explanation: "J'habite à + city. The 'à' is required.",
      explanationFr: "J'habite à + ville. Le 'à' est obligatoire."
    },
    {
      id: "01-l3",
      type: "libre",
      question: "What is the formal word for 'you' in French?",
      questionFr: "Quel est le mot formel pour 'you' en français ?",
      correct: "vous",
      correctEn: "you (formal)",
      alternatives: [],
      explanation: "Vous is formal. Tu is informal (friends and children only).",
      explanationFr: "Vous est formel. Tu est informel (amis et enfants seulement)."
    },
    {
      id: "01-l4",
      type: "libre",
      question: "Complete: 'Bonjour, je ___ anglais.'",
      questionFr: "Complétez : 'Bonjour, je ___ anglais.'",
      correct: "suis",
      correctEn: "am",
      alternatives: [],
      explanation: "Je suis = I am. This is the present tense of 'être' (to be).",
      explanationFr: "Je suis = Je suis. C'est le présent de 'être'."
    },
    {
      id: "01-l5",
      type: "libre",
      question: "How do you say 'Nice to meet you'?",
      questionFr: "Comment dit-on 'Enchanté' ?",
      correct: "Enchanté",
      correctEn: "Nice to meet you",
      alternatives: ["Enchantée","Enchanté !","Enchantée !"],
      explanation: "Enchanté(e) — add -e if the speaker is a woman.",
      explanationFr: "Enchanté(e) — ajoutez -e si le locuteur est une femme."
    },
    {
      id: "01-l6",
      type: "libre",
      question: "Translate: 'Good evening, Madame Dupont.'",
      questionFr: "Traduisez : 'Bonsoir, Madame Dupont.'",
      correct: "Bonsoir, Madame Dupont.",
      correctEn: "Good evening, Madame Dupont.",
      alternatives: [],
      explanation: "Bonsoir for evening. Always use title (Madame/Monsieur) with surname.",
      explanationFr: "Bonsoir pour le soir. Utilisez toujours le titre (Madame/Monsieur) avec le nom de famille."
    },
    {
      id: "01-l7",
      type: "libre",
      question: "What does 'Au revoir' mean?",
      questionFr: "Que signifie 'Au revoir' ?",
      correct: "Goodbye",
      correctEn: "Goodbye",
      alternatives: ["goodbye","au revoir"],
      explanation: "Au revoir (*oh ruh-VWAHR*) = Goodbye. Literally 'until we see again'.",
      explanationFr: "Au revoir = Au revoir. Littéralement 'jusqu'à ce que nous nous revoyions'."
    },
    {
      id: "01-l8",
      type: "libre",
      question: "How do you say 'I am new here' (man speaking)?",
      questionFr: "Comment dit-on 'Je suis nouveau ici' (homme qui parle) ?",
      correct: "Je suis nouveau ici.",
      correctEn: "I am new here.",
      alternatives: ["Je suis nouveau"],
      explanation: "Nouveau (m) / nouvelle (f). Je suis = I am.",
      explanationFr: "Nouveau (m) / nouvelle (f). Je suis = Je suis."
    },
    {
      id: "01-l9",
      type: "libre",
      question: "Translate: 'Do you speak English?'",
      questionFr: "Traduisez : 'Parlez-vous anglais ?'",
      correct: "Parlez-vous anglais ?",
      correctEn: "Do you speak English?",
      alternatives: ["Vous parlez anglais ?"],
      explanation: "Parlez-vous anglais ? is the formal inversion form. Very useful!",
      explanationFr: "Parlez-vous anglais ? est la forme d'inversion formelle. Très utile !"
    },
    {
      id: "01-l10",
      type: "libre",
      question: "Complete: '___ m'appelle Pierre.'",
      questionFr: "Complétez : '___ m'appelle Pierre.'",
      correct: "Je",
      correctEn: "I",
      alternatives: [],
      explanation: "Je m'appelle = My name is. Je = I (subject pronoun).",
      explanationFr: "Je m'appelle = Je m'appelle. Je = Je (pronom sujet)."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_01;
} else {
  window.LESSON_01 = LESSON_01;
}
