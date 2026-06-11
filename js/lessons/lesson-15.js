// lesson-15.js -- My House -- Household tasks
const LESSON_15 = {
  id: 15,
  title: "My House -- Household tasks",
  titleFr: "Ma maison -- Taches menageres",
  objectiveEn: "Talk about household chores and tasks around the home",
  objectiveFr: "Parler des taches menageres et des corvees a la maison",
  hintEn: "Faire + household task is the key pattern: faire le menage, faire la vaisselle...",
  hintFr: "Faire + tache menagere est le modele cle : faire le menage, faire la vaisselle...",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Household chores</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>faire le menage</td><td><em>*fair le may-NAZH*</em></td><td>do the housework</td></tr>
<tr><td>faire la vaisselle</td><td><em>*fair la vay-SELL*</em></td><td>do the dishes</td></tr>
<tr><td>faire le lit</td><td><em>*fair le LEE*</em></td><td>make the bed</td></tr>
<tr><td>passer l'aspirateur</td><td><em>*pass-ay las-pee-ra-TEUR*</em></td><td>vacuum</td></tr>
<tr><td>ranger</td><td><em>*ran-ZHAY*</em></td><td>tidy up</td></tr>
<tr><td>nettoyer</td><td><em>*net-wa-YAY*</em></td><td>clean</td></tr>
<tr><td>sortir les poubelles</td><td><em>*sor-TEER lay poo-BELL*</em></td><td>take out the bins</td></tr>
</table>
</div>
<div class="lesson-warning">Note: make the key pattern: faire le menage, faire la vaisselle, faire le lit. It's not do or make literally!</div>
<div class="lesson-example">
Le lundi, je fais le menage et je passe l'aspirateur dans toute la maison. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">On Mondays, I do the housework and vacuum the whole house.</span>
</div>
  `,
  qcm: [
    {
      id: "15-1",
      type: "qcm",
      question: "I do the housework in French:",
      questionFr: "Je fais le menage. en anglais :",
      options: ["Je fais le menage.","Je suis le menage.","Je nettoie le menage.","Je fais la maison."],
      optionsEn: ["I do the housework.","I am the housework.","I clean the housework.","I do the house."],
      correct: "Je fais le menage.",
      correctEn: "I do the housework.",
      explanation: "Faire le menage (fair le may-NAZH) = do the housework. Very common expression!",
      explanationFr: "Faire le menage = faire le menage. Expression tres courante !"
    },
    {
      id: "15-2",
      type: "qcm",
      question: "I do the dishes in French:",
      questionFr: "Je fais la vaisselle. en anglais :",
      options: ["Je fais la vaisselle.","Je lave la vaisselle.","Je nettoie la vaisselle.","Je range la vaisselle."],
      optionsEn: ["I do the dishes.","I wash the dishes.","I clean the dishes.","I tidy the dishes."],
      correct: "Je fais la vaisselle.",
      correctEn: "I do the dishes.",
      explanation: "Faire la vaisselle = do the dishes. La vaisselle = dishes/crockery.",
      explanationFr: "Faire la vaisselle = faire la vaisselle. La vaisselle = vaisselle."
    },
    {
      id: "15-3",
      type: "qcm",
      question: "I vacuum in French:",
      questionFr: "Je passe l'aspirateur. en anglais :",
      options: ["Je passe l'aspirateur.","Je fais l'aspirateur.","J'aspire.","Je nettoie avec l'aspirateur."],
      optionsEn: ["I vacuum.","I do the vacuum.","I aspire.","I clean with the vacuum."],
      correct: "Je passe l'aspirateur.",
      correctEn: "I vacuum.",
      explanation: "Passer l'aspirateur (pass-ay las-pee-ra-TEUR) = to vacuum. Not faire -- it's passer!",
      explanationFr: "Passer l'aspirateur = passer l'aspirateur. Pas faire -- c'est passer !"
    },
    {
      id: "15-4",
      type: "qcm",
      question: "I make the bed in French:",
      questionFr: "Je fais le lit. en anglais :",
      options: ["Je fais le lit.","Je prepare le lit.","J'arrange le lit.","Je mets le lit."],
      optionsEn: ["I make the bed.","I prepare the bed.","I arrange the bed.","I put the bed."],
      correct: "Je fais le lit.",
      correctEn: "I make the bed.",
      explanation: "Faire le lit = make the bed. Le lit (lee) = bed.",
      explanationFr: "Faire le lit = faire le lit. Le lit = lit."
    },
    {
      id: "15-5",
      type: "qcm",
      question: "I tidy up in French:",
      questionFr: "Je range. en anglais :",
      options: ["Je range.","Je nettoie.","Je fais.","J'ordre."],
      optionsEn: ["I tidy up.","I clean.","I do.","I order."],
      correct: "Je range.",
      correctEn: "I tidy up.",
      explanation: "Ranger (ran-ZHAY) = to tidy up, to put away. Je range = I tidy up.",
      explanationFr: "Ranger = ranger. Je range = je range."
    },
    {
      id: "15-6",
      type: "qcm",
      question: "I take out the bins in French:",
      questionFr: "Je sors les poubelles. en anglais :",
      options: ["Je sors les poubelles.","Je jette les poubelles.","Je fais les poubelles.","Je mets les poubelles."],
      optionsEn: ["I take out the bins.","I throw the bins.","I do the bins.","I put the bins."],
      correct: "Je sors les poubelles.",
      correctEn: "I take out the bins.",
      explanation: "Sortir les poubelles (soor-TEER) = take out the bins. Les poubelles = the bins.",
      explanationFr: "Sortir les poubelles = sortir les poubelles. Les poubelles = les poubelles."
    },
    {
      id: "15-7",
      type: "qcm",
      question: "I clean the kitchen in French:",
      questionFr: "Je nettoie la cuisine. en anglais :",
      options: ["Je nettoie la cuisine.","Je fais la cuisine.","Je lave la cuisine.","Je range la cuisine."],
      optionsEn: ["I clean the kitchen.","I do the cooking.","I wash the kitchen.","I tidy the kitchen."],
      correct: "Je nettoie la cuisine.",
      correctEn: "I clean the kitchen.",
      explanation: "Nettoyer (net-wa-YAY) = to clean. La cuisine></tr>
<tr><td>stresse / stressee</td><td><em>*stress-AY*</em></td><td>stressed</td></tr>
<tr><td>inquiet / inquiete</td><td><em>*an-kee-AY*</em></td><td>worried</td></tr>
<tr><td>motive / motivee</td><td><em>*mo-tee-VAY*</em></td><td>motivated</td></tr>
<tr><td>triste</td><td><em>*TREEST*</em></td><td>sad</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Useful emotion phrases</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Je me sens bien / mal.</td><td>I feel good / bad.</td></tr>
<tr><td>Je suis un peu fatigue(e).</td><td>I'm a little tired.</td></tr>
<tr><td>Ca va mieux.</td><td>It's getting better.</td></tr>
</table>
</div>
<div class="lesson-warning">Always use <strong>etre</strong> for emotions: Je SUIS fatigue. Never "J'AI fatigue"!</div>
<div class="lesson-example">
Je suis fatigue mais content -- j'ai fait beaucoup aujourd'hui ! <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I'm tired but happy -- I did a lot today!</span>
</div>
  `,
  qcm: [
    {
      id: "13-1",
      type: "qcm",
      question: "I am tired (man speaking) in French:",
      questionFr: "Je suis fatigue. (homme qui parle) en anglais :",
      options: ["Je suis fatigue.","J'ai fatigue.","Je fais fatigue.","Je me fatigue."],
      optionsEn: ["I am tired.","I have tired.","I do tired.","I tire myself."],
      correct: "Je suis fatigue.",
      correctEn: "I am tired.",
      explanation: "ETRE for emotions! Je suis fatigue. Woman: je suis fatiguee (add -e).",
      explanationFr: "ETRE pour les emotions ! Je suis fatigue. Femme: je suis fatiguee (ajouter -e)."
    },
    {
      id: "13-2",
      type: "qcm",
      question: "I am happy (woman speaking) in French:",
      questionFr: "Je suis contente. (femme qui parle) en anglais :",
      options: ["Je suis contente.","Je suis content.","J'ai contente.","Je content."],
      optionsEn: ["I am happy.","I am happy (m).","I have happy.","I happy."],
      correct: "Je suis contente.",
      correctEn: "I am happy (woman)",
      explanation: "Content / contente. Man: je suis content. Woman: je suis contente (add -e).",
      explanationFr: "Content / contente. Homme: je suis content. Femme: je suis contente (ajouter -e)."
    },
    {
      id: "13-3",
      type: "qcm",
      question: "I am stressed in French:",
      questionFr: "Je suis stresse. en anglais :",
      options: ["Je suis stresse.","J'ai stresse.","Je stress.","Je suis de stress."],
      optionsEn: ["I am stressed.","I have stressed.","I stress.","I am of stress."],
      correct: "Je suis stresse.",
      correctEn: "I am stressed",
      explanation: "Je suis stresse (woman: stressee). Always etre for emotions!",
      explanationFr: "Je suis stresse (femme: stressee). Toujours etre pour les emotions !"
    },
    {
      id: "13-4",
      type: "qcm",
      question: "I am worried in French:",
      questionFr: "Je suis inquiet. en anglais :",
      options: ["Je suis inquiet.","J'ai inquiet.","Je suis d'inquiet.","Inquiet je suis."],
      optionsEn: ["I am worried.","I have worried.","I am of worried.","Worried I am."],
      correct: "Je suis inquiet.",
      correctEn: "I am worried",
      explanation: "Inquiet / inquiete. Man: inquiet. Woman: inquiete.",
      explanationFr: "Inquiet / inquiete. Homme: inquiet. Femme: inquiete."
    },
    {
      id: "13-5",
      type: "qcm",
      question: "I am sad in French:",
      questionFr: "Je suis triste. en anglais :",
      options: ["Je suis triste.","J'ai triste.","Je triste.","Je suis de triste."],
      optionsEn: ["I am sad.","I have sad.","I sad.","I am of sad."],
      correct: "Je suis triste.",
      correctEn: "I am sad",
      explanation: "Triste doesn't change (m/f). Je suis triste = I am sad.",
      explanationFr: "Triste ne change pas (m/f). Je suis triste = je suis triste."
    },
    {
      id: "13-6",
      type: "qcm",
      question: "I feel good in French:",
      questionFr: "Je me sens bien. en anglais :",
      options: ["Je me sens bien.","Je suis bien.","J'ai bien.","Je bien."],
      optionsEn: ["I feel good.","I am good.","I have good.","I good."],
      correct: "Je me sens bien.",
      correctEn: "I feel good",
      explanation: "Je me sens bien/mal = I feel good/bad. Sens = feel (from sentir).",
      explanationFr: "Je me sens bien/mal = je me sens bien/mal. Sens = sentir."
    },
    {
      id: "13-7",
      type: "qcm",
      question: "I'm a little tired in French:",
      questionFr: "Je suis un peu fatigue(e). en anglais :",
      options: ["Je suis un peu fatigue(e).","J'ai un peu fatigue.","Je peu fatigue.","Un peu je suis fatigue."],
      optionsEn: ["I'm a little tired.","I have a little tired.","I little tired.","A little I am tired."],
      correct: "Je suis un peu fatigue(e).",
      correctEn: "I'm a little tired",
      explanation: "Un peu = a little. Je suis = I am. Very natural French!",
      explanationFr: "Un peu = un peu. Je suis = je suis. Tres naturel en francais !"
    },
    {
      id: "13-8",
      type: "qcm",
      question: "It's getting better in French:",
      questionFr: "Ca va mieux. en anglais :",
      options: ["Ca va mieux.","Ca est mieux.","Je vais mieux.","Mieux ca va."],
      optionsEn: ["It's getting better.","It is better.","I go better.","Better it goes."],
      correct: "Ca va mieux.",
      correctEn: "It's getting better",
      explanation: "Ca va mieux = It's getting better / I'm feeling better. Very common!",
      explanationFr: "Ca va mieux = ca va mieux / je me sens mieux. Tres courant !"
    },
    {
      id: "13-9",
      type: "qcm",
      question: "I am motivated (woman) in French:",
      questionFr: "Je suis motivee. (femme) en anglais :",
      options: ["Je suis motivee.","Je suis motive.","J'ai motivee.","Je motivee."],
      optionsEn: ["I am motivated.","I am motivated (m).","I have motivated.","I motivated."],
      correct: "Je suis motivee.",
      correctEn: "I am motivated (woman)",
      explanation: "Motive / motivee. Add -e for woman: motivee.",
      explanationFr: "Motive / motivee. Ajouter -e pour femme: motivee."
    },
    {
      id: "13-10",
      type: "qcm",
      question: "Which is WRONG for emotions?",
      questionFr: "Lequel est FAUX pour les emotions ?",
      options: ["J'ai fatigue.","Je suis fatigue.","Je me sens mal.","Je suis content."],
      optionsEn: ["I have tired.","I am tired.","I feel bad.","I am happy."],
      correct: "J'ai fatigue.",
      correctEn: "I have tired (WRONG)",
      explanation: "J'ai fatigue is WRONG! Always use etre: Je suis fatigue!",
      explanationFr: "J'ai fatigue est FAUX ! Toujours utiliser etre: Je suis fatigue !"
    }
  ],
  libre: [
    {
      id: "13-l1",
      type: "libre",
      question: "Translate: I am tired.",
      questionFr: "Traduisez : Je suis fatigue.",
      correct: "Je suis fatigue.",
      correctEn: "I am tired.",
      alternatives: [],
      explanation: "Je suis fatigue -- use etre, not avoir!",
      explanationFr: "Je suis fatigue -- utilisez etre, pas avoir !"
    },
    {
      id: "13-l2",
      type: "libre",
      question: "How do you say I am happy (woman)?",
      questionFr: "Comment dit-on Je suis contente (femme) ?",
      correct: "Je suis contente.",
      correctEn: "I am happy (woman)",
      alternatives: [],
      explanation: "Je suis contente -- add -e for feminine.",
      explanationFr: "Je suis contente -- ajouter -e pour le feminin."
    },
    {
      id: "13-l3",
      type: "libre",
      question: "Translate: I am stressed.",
      questionFr: "Traduisez : Je suis stresse.",
      correct: "Je suis stresse.",
      correctEn: "I am stressed.",
      alternatives: [],
      explanation: "Je suis stresse -- always etre for emotions.",
      explanationFr: "Je suis stresse -- toujours etre pour les emotions."
    },
    {
      id: "13-l4",
      type: "libre",
      question: "Complete: Je suis ___ (worried, man).",
      questionFr: "Completez : Je suis ___ (inquiet, homme).",
      correct: "inquiet",
      correctEn: "worried",
      alternatives: [],
      explanation: "Inquiet for man, inquiete for woman.",
      explanationFr: "Inquiet pour homme, inquiete pour femme."
    },
    {
      id: "13-l5",
      type: "libre",
      question: "Translate: I feel bad.",
      questionFr: "Traduisez : Je me sens mal.",
      correct: "Je me sens mal.",
      correctEn: "I feel bad.",
      alternatives: [],
      explanation: "Je me sens bien/mal = I feel good/bad.",
      explanationFr: "Je me sens bien/mal = je me sens bien/mal."
    },
    {
      id: "13-l6",
      type: "libre",
      question: "How do you say I am sad (woman)?",
      questionFr: "Comment dit-on Je suis triste (femme) ?",
      correct: "Je suis triste.",
      correctEn: "I am sad",
      alternatives: [],
      explanation: "Triste doesn't change for gender.",
      explanationFr: "Triste ne change pas pour le genre."
    },
    {
      id: "13-l7",
      type: "libre",
      question: "Translate: It's getting better.",
      questionFr: "Traduisez : Ca va mieux.",
      correct: "Ca va mieux.",
      correctEn: "It's getting better.",
      alternatives: [],
      explanation: "Ca va mieux = I'm feeling better.",
      explanationFr: "Ca va mieux = je me sens mieux."
    },
    {
      id: "13-l8",
      type: "libre",
      question: "Complete: Je suis un peu ___ (tired).",
      questionFr: "Completez : Je suis un peu ___ (fatigue).",
      correct: "fatigue",
      correctEn: "tired",
      alternatives: [],
      explanation: "Un peu = a little. Je suis un peu fatigue.",
      explanationFr: "Un peu = un peu. Je suis un peu fatigue."
    },
    {
      id: "13-l9",
      type: "libre",
      question: "Translate: I am motivated (man).",
      questionFr: "Traduisez : Je suis motive.",
      correct: "Je suis motive.",
      correctEn: "I am motivated (man)",
      alternatives: [],
      explanation: "Motive for man, motivee for woman.",
      explanationFr: "Motive pour homme, motivee pour femme."
    },
    {
      id: "13-l10",
      type: "libre",
      question: "What verb do you use for emotions?",
      questionFr: "Quel verbe utilisez-vous pour les emotions ?",
      correct: "etre",
      correctEn: "to be",
      alternatives: ["Je suis","Etre"],
      explanation: "Always use etre (Je suis) for emotions, NEVER avoir!",
      explanationFr: "Toujours utiliser etre (Je suis) pour les emotions, JAMAIS avoir !"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_13;
} else {
  window.LESSON_13 = LESSON_13;
}
