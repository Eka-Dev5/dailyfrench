// lesson-09.js -- Essential Verbs
const LESSON_09 = {
  id: 9,
  title: "Essential Verbs",
  titleFr: "Verbes essentiels",
  objectiveEn: "Master the 10 most important French verbs",
  objectiveFr: "Maitriser les 10 verbes francais les plus importants",
  hintEn: "etre and avoir are the two auxiliary verbs -- learn them first!",
  hintFr: "Etre et avoir sont les deux verbes auxiliaires -- apprenez-les d abord !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>The 10 Essential Verbs</h4>
<p>These 10 verbs cover 80% of everyday French. Master them first!</p>
<table class="lesson-table">
<tr><th>Infinitive</th><th>Meaning</th><th>Je form</th><th>Phonetics</th></tr>
<tr><td><strong>etre</strong></td><td>to be</td><td>je suis</td><td><em>*zhuh swee*</em></td></tr>
<tr><td><strong>avoir</strong></td><td>to have</td><td>j ai</td><td><em>*zhay*</em></td></tr>
<tr><td><strong>aller</strong></td><td>to go</td><td>je vais</td><td><em>*zhuh vay*</em></td></tr>
<tr><td><strong>faire</strong></td><td>to do / to make</td><td>je fais</td><td><em>*zhuh fay*</em></td></tr>
<tr><td><strong>pouvoir</strong></td><td>can / to be able to</td><td>je peux</td><td><em>*zhuh puh*</em></td></tr>
<tr><td><strong>vouloir</strong></td><td>to want</td><td>je veux</td><td><em>*zhuh vuh*</em></td></tr>
<tr><td><strong>devoir</strong></td><td>must / to have to</td><td>je dois</td><td><em>*zhuh dwah*</em></td></tr>
<tr><td><strong>savoir</strong></td><td>to know (facts)</td><td>je sais</td><td><em>*zhuh say*</em></td></tr>
<tr><td><strong>venir</strong></td><td>to come</td><td>je viens</td><td><em>*zhuh vyAN*</em></td></tr>
<tr><td><strong>prendre</strong></td><td>to take</td><td>je prends</td><td><em>*zhuh prahn*</em></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Present tense conjugation pattern</h4>
<p>Most verbs follow the <strong>-er</strong> pattern (parler, manger, travailler):</p>
<table class="lesson-table">
<tr><th>Subject</th><th>Ending</th><th>Example: parler</th></tr>
<tr><td>je</td><td>-e</td><td>je parle</td></tr>
<tr><td>tu</td><td>-es</td><td>tu parles</td></tr>
<tr><td>il/elle</td><td>-e</td><td>il parle</td></tr>
<tr><td>nous</td><td>-ons</td><td>nous parlons</td></tr>
<tr><td>vous</td><td>-ez</td><td>vous parlez</td></tr>
<tr><td>ils/elles</td><td>-ent</td><td>ils parlent</td></tr>
</table>
</div>
<div class="lesson-warning">etre and avoir are IRREGULAR -- they do NOT follow the -er pattern! Learn their conjugations by heart.</div>
<div class="lesson-example">
<strong>Quick dialogue:</strong><br>
-- Je vais au marche. Tu veux venir ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I m going to the market. Do you want to come?</span><br>
-- Oui, je peux ! Je dois juste prendre mon sac. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Yes, I can! I just have to take my bag.</span>
</div>
  `,
  qcm: [
    {
      id: "09-1",
      type: "qcm",
      question: "To be in French is:",
      questionFr: "Etre en anglais :",
      options: ["etre","avoir","aller","faire"],
      optionsEn: ["to be","to have","to go","to do"],
      correct: "etre",
      correctEn: "to be",
      explanation: "Etre (eh-truh) = to be. The most fundamental verb in French.",
      explanationFr: "Etre = etre. Le verbe le plus fondamental en francais."
    },
    {
      id: "09-2",
      type: "qcm",
      question: "I have in French:",
      questionFr: "J ai en anglais :",
      options: ["J ai","Je suis","Je vais","Je fais"],
      optionsEn: ["I have","I am","I go","I do"],
      correct: "J ai",
      correctEn: "I have",
      explanation: "Avoir: j ai (zhay) = I have. The second most important verb.",
      explanationFr: "Avoir : j ai = j ai. Le deuxieme verbe le plus important."
    },
    {
      id: "09-3",
      type: "qcm",
      question: "I go in French:",
      questionFr: "Je vais en anglais :",
      options: ["Je vais","Je viens","Je suis","J ai"],
      optionsEn: ["I go","I come","I am","I have"],
      correct: "Je vais",
      correctEn: "I go",
      explanation: "Aller: je vais (zhuh vay) = I go. Used for the near future: je vais + infinitive.",
      explanationFr: "Aller : je vais = je vais. Utilise pour le futur proche : je vais + infinitif."
    },
    {
      id: "09-4",
      type: "qcm",
      question: "I do or I make in French:",
      questionFr: "Je fais en anglais :",
      options: ["Je fais","Je faisais","Je faite","Je fait"],
      optionsEn: ["I do / I make","I was doing","I made (wrong)","I did (wrong)"],
      correct: "Je fais",
      correctEn: "I do / I make",
      explanation: "Faire (fair) = to do or to make. Je fais = I do/make. One of the most versatile French verbs.",
      explanationFr: "Faire = faire. Je fais = je fais. Un des verbes francais les plus polyvalents."
    },
    {
      id: "09-5",
      type: "qcm",
      question: "Can you help me? in French:",
      questionFr: "Pouvez-vous m aider ? en anglais :",
      options: ["Pouvez-vous m aider ?","Voulez-vous m aider ?","Savez-vous m aider ?","Devez-vous m aider ?"],
      optionsEn: ["Can you help me?","Do you want to help me?","Do you know how to help me?","Must you help me?"],
      correct: "Pouvez-vous m aider ?",
      correctEn: "Can you help me?",
      explanation: "Pouvoir: pouvez-vous = can you (formal). Essential for asking permission or ability.",
      explanationFr: "Pouvoir : pouvez-vous = pouvez-vous (formel). Essentiel pour demander la permission ou la capacite."
    },
    {
      id: "09-6",
      type: "qcm",
      question: "I want in French:",
      questionFr: "Je veux en anglais :",
      options: ["Je veux","Je voudrais","Je vais","Je dois"],
      optionsEn: ["I want","I would like","I go","I must"],
      correct: "Je veux",
      correctEn: "I want",
      explanation: "Vouloir: je veux (zhuh vuh) = I want. Je voudrais = I would like (more polite).",
      explanationFr: "Vouloir : je veux = je veux. Je voudrais = je voudrais (plus poli)."
    },
    {
      id: "09-7",
      type: "qcm",
      question: "I must or I have to in French:",
      questionFr: "Je dois en anglais :",
      options: ["Je dois","Je devais","Je devoir","Je dois faire"],
      optionsEn: ["I must / I have to","I had to","I must (wrong form)","I must do"],
      correct: "Je dois",
      correctEn: "I must / I have to",
      explanation: "Devoir: je dois (zhuh dwah) = I must / I have to. Expresses obligation.",
      explanationFr: "Devoir : je dois = je dois / il faut que je. Exprime l obligation."
    },
    {
      id: "09-8",
      type: "qcm",
      question: "I know (a fact) in French:",
      questionFr: "Je sais en anglais :",
      options: ["Je sais","Je connais","Je sait","Je connait"],
      optionsEn: ["I know (fact)","I know (person/place)","I know (wrong)","I know (wrong)"],
      correct: "Je sais",
      correctEn: "I know (a fact)",
      explanation: "Savoir = to know facts/skills. Connaitre = to know people/places. Both mean to know but used differently!",
      explanationFr: "Savoir = savoir (faits/competences). Connaitre = connaitre (personnes/endroits). Les deux signifient to know mais s utilisent differemment !"
    },
    {
      id: "09-9",
      type: "qcm",
      question: "I come in French:",
      questionFr: "Je viens en anglais :",
      options: ["Je viens","Je vais","Je venez","Je venir"],
      optionsEn: ["I come","I go","You come (wrong)","To come (wrong)"],
      correct: "Je viens",
      correctEn: "I come",
      explanation: "Venir: je viens (zhuh vyAN) = I come. Also used in je viens de = I just (did something).",
      explanationFr: "Venir : je viens = je viens. Aussi utilise dans je viens de = je viens de (faire quelque chose)."
    },
    {
      id: "09-10",
      type: "qcm",
      question: "I take in French:",
      questionFr: "Je prends en anglais :",
      options: ["Je prends","Je prend","Je prenons","Je prendre"],
      optionsEn: ["I take","I take (wrong)","We take (wrong)","To take (wrong)"],
      correct: "Je prends",
      correctEn: "I take",
      explanation: "Prendre: je prends (zhuh prahn) = I take. Used for taking transport, food, medicine, etc.",
      explanationFr: "Prendre : je prends = je prends. Utilise pour prendre les transports, la nourriture, les medicaments, etc."
    }
  ],
  libre: [
    {
      id: "09-l1",
      type: "libre",
      question: "Conjugate ETRE: She is... (elle)",
      questionFr: "Conjuguez ETRE : Elle est... (elle)",
      correct: "Elle est",
      correctEn: "She is",
      alternatives: [],
      explanation: "Etre: je suis, tu es, il/elle est, nous sommes, vous etes, ils/elles sont.",
      explanationFr: "Etre : je suis, tu es, il/elle est, nous sommes, vous etes, ils/elles sont."
    },
    {
      id: "09-l2",
      type: "libre",
      question: "Conjugate AVOIR: We have... (nous)",
      questionFr: "Conjuguez AVOIR : Nous avons... (nous)",
      correct: "Nous avons",
      correctEn: "We have",
      alternatives: [],
      explanation: "Avoir: j ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont.",
      explanationFr: "Avoir : j ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont."
    },
    {
      id: "09-l3",
      type: "libre",
      question: "Conjugate ALLER: You go... (formal, vous)",
      questionFr: "Conjuguez ALLER : Vous allez... (formel, vous)",
      correct: "Vous allez",
      correctEn: "You go",
      alternatives: [],
      explanation: "Aller: je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont.",
      explanationFr: "Aller : je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont."
    },
    {
      id: "09-l4",
      type: "libre",
      question: "Translate: I want a coffee.",
      questionFr: "Traduisez : Je veux un cafe.",
      correct: "Je veux un cafe.",
      correctEn: "I want a coffee.",
      alternatives: [],
      explanation: "Vouloir: je veux. But je voudrais is more polite in a cafe!",
      explanationFr: "Vouloir : je veux. Mais je voudrais est plus poli dans un cafe !"
    },
    {
      id: "09-l5",
      type: "libre",
      question: "Translate: Can you repeat, please?",
      questionFr: "Traduisez : Pouvez-vous repeter, s il vous plait ?",
      correct: "Pouvez-vous repeter, s il vous plait ?",
      correctEn: "Can you repeat, please?",
      alternatives: [],
      explanation: "Pouvoir: Pouvez-vous = can you (formal). Essential phrase for language learners!",
      explanationFr: "Pouvoir : Pouvez-vous = pouvez-vous (formel). Phrase essentielle pour les apprenants !"
    },
    {
      id: "09-l6",
      type: "libre",
      question: "Conjugate FAIRE: He does... (il)",
      questionFr: "Conjuguez FAIRE : Il fait... (il)",
      correct: "Il fait",
      correctEn: "He does",
      alternatives: [],
      explanation: "Faire: je fais, tu fais, il/elle fait, nous faisons, vous faites, ils/elles font.",
      explanationFr: "Faire : je fais, tu fais, il/elle fait, nous faisons, vous faites, ils/elles font."
    },
    {
      id: "09-l7",
      type: "libre",
      question: "Translate: I m going to do the shopping.",
      questionFr: "Traduisez : Je vais faire les courses.",
      correct: "Je vais faire les courses.",
      correctEn: "I m going to do the shopping.",
      alternatives: [],
      explanation: "Aller + infinitive = near future. Je vais + faire = I m going to do.",
      explanationFr: "Aller + infinitif = futur proche. Je vais + faire = je vais faire."
    },
    {
      id: "09-l8",
      type: "libre",
      question: "Complete: Je ___ besoin d aide.",
      questionFr: "Completez : Je ___ besoin d aide.",
      correct: "ai",
      correctEn: "have",
      alternatives: [],
      explanation: "Avoir besoin de = to need. J ai besoin d aide = I need help.",
      explanationFr: "Avoir besoin de = avoir besoin de. J ai besoin d aide = j ai besoin d aide."
    },
    {
      id: "09-l9",
      type: "libre",
      question: "Translate: They are very kind.",
      questionFr: "Traduisez : Ils sont tres gentils.",
      correct: "Ils sont tres gentils.",
      correctEn: "They are very kind.",
      alternatives: ["Elles sont tres gentilles."],
      explanation: "ETRE: Ils/elles sont = they are. Gentils (m.pl.) / gentilles (f.pl.).",
      explanationFr: "ETRE : Ils/elles sont = ils/elles sont. Gentils (m.pl.) / gentilles (f.pl.)."
    },
    {
      id: "09-l10",
      type: "libre",
      question: "Complete: Je ___ aller a la pharmacie.",
      questionFr: "Completez : Je ___ aller a la pharmacie.",
      correct: "dois",
      correctEn: "must",
      alternatives: [],
      explanation: "Devoir: je dois = I must / I have to. Essential to know for daily life!",
      explanationFr: "Devoir : je dois = je dois / il faut que je. Essentiel pour la vie quotidienne !"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_09;
} else {
  window.LESSON_09 = LESSON_09;
}
