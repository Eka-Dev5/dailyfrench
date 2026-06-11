// lesson-20.js -- Living French -- Real expressions
const LESSON_20 = {
  id: 20,
  title: "Living French -- Real expressions",
  titleFr: "Francais quotidien -- Expressions reelles",
  objectiveEn: "Understand and use everyday French expressions naturally",
  objectiveFr: "Comprendre et utiliser les expressions francaises du quotidien naturellement",
  hintEn: "Pas terrible is a TRAP -- it means NOT GREAT, not 'not terrible'!",
  hintFr: "Pas terrible est un PIEGE -- ca signifie PAS GENIAL, pas 'pas terrible' !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Expressions every French person uses</h4>
<table class="lesson-table">
<tr><th>Expression</th><th>Literal</th><th>Real meaning</th></tr>
<tr><td><strong>Ca marche !</strong></td><td>It walks!</td><td>OK! / That works!</td></tr>
<tr><td><strong>Bof...</strong></td><td>--</td><td>Meh / Not really / So-so</td></tr>
<tr><td><strong>Nickel !</strong></td><td>Nickel!</td><td>Perfect! / Spotless!</td></tr>
<tr><td><strong>Pas terrible.</strong></td><td>Not terrible.</td><td>Not great / Disappointing</td></tr>
<tr><td><strong>En fait</strong></td><td>In fact</td><td>Actually / Well...</td></tr>
<tr><td><strong>Du coup</strong></td><td>From the blow</td><td>So / Therefore / As a result</td></tr>
<tr><td><strong>Franchement</strong></td><td>Frankly</td><td>Honestly / To be honest</td></tr>
<tr><td><strong>Ca depend.</strong></td><td>It depends.</td><td>It depends.</td></tr>
<tr><td><strong>Quand meme</strong></td><td>Even so</td><td>Still / Anyway / Come on</td></tr>
<tr><td><strong>Comme d'habitude</strong></td><td>As usual</td><td>As usual</td></tr>
</table>
</div>
<div class="lesson-warning">Pas terrible is a TRAP -- it sounds like "not terrible" but it actually means "not great"!</div>
<div class="lesson-example">
-- Tu aimes ce restaurant ? <br>
-- Bof... pas terrible. Mais le service, nickel ! <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">-- Do you like this restaurant? -- Meh... not great. But the service, perfect!</span>
</div>
  `,
  qcm: [
    {
      id: "20-1",
      type: "qcm",
      question: "Ca marche ! means:",
      questionFr: "Ca marche ! signifie :",
      options: ["OK! / That works!","It walks!","Let's go!","No problem!"],
      optionsEn: ["OK! / That works!","It walks!","Let's go!","No problem!"],
      correct: "OK! / That works!",
      correctEn: "OK! / That works!",
      explanation: "Ca marche = OK! / That works! Despite literally meaning 'it walks'!",
      explanationFr: "Ca marche = OK ! / Ca marche ! Malgre le sens litteral 'ca marche' !"
    },
    {
      id: "20-2",
      type: "qcm",
      question: "What does Bof... express?",
      questionFr: "Qu'exprime Bof... ?",
      options: ["Indifference / meh / so-so","Happiness","Surprise","Agreement"],
      optionsEn: ["Indifference / meh / so-so","Happiness","Surprise","Agreement"],
      correct: "Indifference / meh / so-so",
      correctEn: "Indifference / meh / so-so",
      explanation: "Bof = meh / so-so / not really. Used for mild disappointment or indifference.",
      explanationFr: "Bof = bof / mouais / pas vraiment. Utilise pour une legere deception ou indifference."
    },
    {
      id: "20-3",
      type: "qcm",
      question: "Nickel ! in spoken French means:",
      questionFr: "Nickel ! en francais parle signifie :",
      options: ["Perfect! / Spotless!","A coin","Not great","It's OK"],
      optionsEn: ["Perfect! / Spotless!","A coin","Not great","It's OK"],
      correct: "Perfect! / Spotless!",
      correctEn: "Perfect! / Spotless!",
      explanation: "Nickel = perfect / spotless / brilliant! Very colloquial but very common.",
      explanationFr: "Nickel = nickel / parfait / impeccable ! Tres familier mais tres courant."
    },
    {
      id: "20-4",
      type: "qcm",
      question: "WARNING: Pas terrible really means:",
      questionFr: "ATTENTION : Pas terrible signifie vraiment :",
      options: ["Not great / disappointing","Not terrible","Quite good","Rather good"],
      optionsEn: ["Not great / disappointing","Not terrible","Quite good","Rather good"],
      correct: "Not great / disappointing",
      correctEn: "Not great / disappointing",
      explanation: "Pas terrible = NOT great. It's the opposite of what English speakers assume!",
      explanationFr: "Pas terrible = PAS genial. C'est l'oppose de ce que les anglophones pensent !"
    },
    {
      id: "20-5",
      type: "qcm",
      question: "En fait translates as:",
      questionFr: "En fait se traduit par :",
      options: ["Actually / in fact","In effect","The fact is","Indeed"],
      optionsEn: ["Actually / in fact","In effect","The fact is","Indeed"],
      correct: "Actually / in fact",
      correctEn: "Actually / in fact",
      explanation: "En fait = actually / in fact. Used constantly in French speech.",
      explanationFr: "En fait = en fait / en realite. Utilise constamment en francais parle."
    },
    {
      id: "20-6",
      type: "qcm",
      question: "Du coup means:",
      questionFr: "Du coup signifie :",
      options: ["So / therefore / as a result","From the start","All of a sudden","At once"],
      optionsEn: ["So / therefore / as a result","From the start","All of a sudden","At once"],
      correct: "So / therefore / as a result",
      correctEn: "So / therefore / as a result",
      explanation: "Du coup = so / therefore. Hugely popular in modern French.",
      explanationFr: "Du coup = du coup / donc. Tres populaire dans le francais moderne."
    },
    {
      id: "20-7",
      type: "qcm",
      question: "Ca depend. means:",
      questionFr: "Ca depend. signifie :",
      options: ["It depends.","That's expensive.","It doesn't matter.","So much the better."],
      optionsEn: ["It depends.","That's expensive.","It doesn't matter.","So much the better."],
      correct: "It depends.",
      correctEn: "It depends.",
      explanation: "Ca depend = It depends. A very French way to avoid committing!",
      explanationFr: "Ca depend = ca depend. Une facon tres francaise d'eviter de s'engager !"
    },
    {
      id: "20-8",
      type: "qcm",
      question: "Franchement means:",
      questionFr: "Franchement signifie :",
      options: ["Frankly / honestly","In French","Freely","Actually"],
      optionsEn: ["Frankly / honestly","In French","Freely","Actually"],
      correct: "Frankly / honestly",
      correctEn: "Frankly / honestly",
      explanation: "Franchement = frankly / honestly. Franchement, c'etait pas terrible!",
      explanationFr: "Franchement = franchement / honnetement. Franchement, c'etait pas terrible !"
    },
    {
      id: "20-9",
      type: "qcm",
      question: "Quand meme is best translated as:",
      questionFr: "Quand meme se traduit mieux par :",
      options: ["Still / anyway / come on!","When even","Same time","Just the same"],
      optionsEn: ["Still / anyway / come on!","When even","Same time","Just the same"],
      correct: "Still / anyway / come on!",
      correctEn: "Still / anyway / come on!",
      explanation: "Quand meme = still / anyway / even so. Very versatile French expression.",
      explanationFr: "Quand meme = quand meme / tout de meme / allez. Expression francaise tres polyvalente."
    },
    {
      id: "20-10",
      type: "qcm",
      question: "Comme d'habitude means:",
      questionFr: "Comme d'habitude signifie :",
      options: ["As usual","As a habit","Like always","Just in case"],
      optionsEn: ["As usual","As a habit","Like always","Just in case"],
      correct: "As usual",
      correctEn: "As usual",
      explanation: "Comme d'habitude = as usual. Il est en retard, comme d'habitude!",
      explanationFr: "Comme d'habitude = comme d'habitude. Il est en retard, comme d'habitude !"
    }
  ],
  libre: [
    {
      id: "20-l1",
      type: "libre",
      question: "How do French people say OK informally?",
      questionFr: "Comment les Francais disent-ils OK familierement ?",
      correct: "Ca marche !",
      correctEn: "OK! / That works!",
      alternatives: ["D'accord","OK"],
      explanation: "Ca marche is the most natural informal OK in French.",
      explanationFr: "Ca marche est le OK informel le plus naturel en francais."
    },
    {
      id: "20-l2",
      type: "libre",
      question: "How do you say actually in French?",
      questionFr: "Comment dit-on actually en francais ?",
      correct: "en fait",
      correctEn: "actually / in fact",
      alternatives: [],
      explanation: "En fait = actually / in fact. Used constantly in spoken French.",
      explanationFr: "En fait = en fait / en realite. Utilise constamment en francais parle."
    },
    {
      id: "20-l3",
      type: "libre",
      question: "Translate: So I went to the market.",
      questionFr: "Traduisez : Du coup je suis alle au marche.",
      correct: "Du coup je suis alle au marche.",
      correctEn: "So I went to the market.",
      alternatives: [],
      explanation: "Du coup = so / therefore. Very natural in French conversation.",
      explanationFr: "Du coup = du coup / donc. Tres naturel en conversation francaise."
    },
    {
      id: "20-l4",
      type: "libre",
      question: "How do you say frankly?",
      questionFr: "Comment dit-on frankly ?",
      correct: "franchement",
      correctEn: "frankly / honestly",
      alternatives: [],
      explanation: "Franchement = frankly / honestly. Franchement, c'est pas terrible!",
      explanationFr: "Franchement = franchement / honnetement. Franchement, c'est pas terrible !"
    },
    {
      id: "20-l5",
      type: "libre",
      question: "What does Bof express?",
      questionFr: "Qu'exprime Bof ?",
      correct: "indifference",
      correctEn: "indifference / meh / so-so",
      alternatives: ["meh","so-so","not really"],
      explanation: "Bof = mild indifference or disappointment. Very French!",
      explanationFr: "Bof = indifference ou legere deception. Tres francais !"
    },
    {
      id: "20-l6",
      type: "libre",
      question: "How do you say it depends?",
      questionFr: "Comment dit-on it depends ?",
      correct: "ca depend",
      correctEn: "it depends",
      alternatives: [],
      explanation: "Ca depend -- the quintessentially French non-answer!",
      explanationFr: "Ca depend -- la reponse non-engagee typiquement francaise !"
    },
    {
      id: "20-l7",
      type: "libre",
      question: "Translate: He's late, as usual.",
      questionFr: "Traduisez : Il est en retard, comme d'habitude.",
      correct: "Il est en retard, comme d'habitude.",
      correctEn: "He's late, as usual.",
      alternatives: [],
      explanation: "Comme d'habitude = as usual. En retard = late.",
      explanationFr: "Comme d'habitude = comme d'habitude. En retard = en retard."
    },
    {
      id: "20-l8",
      type: "libre",
      question: "What is the REAL meaning of pas terrible?",
      questionFr: "Quel est le VRAI sens de pas terrible ?",
      correct: "not great",
      correctEn: "not great / disappointing",
      alternatives: ["not good","disappointing","mediocre"],
      explanation: "Pas terrible = not great/good, NOT not terrible!",
      explanationFr: "Pas terrible = pas genial, PAS pas terrible !"
    },
    {
      id: "20-l9",
      type: "libre",
      question: "How do you say still / anyway?",
      questionFr: "Comment dit-on still / anyway ?",
      correct: "quand meme",
      correctEn: "still / anyway / even so",
      alternatives: [],
      explanation: "Quand meme -- very versatile. C'est quand meme sympa = it's still nice.",
      explanationFr: "Quand meme -- tres polyvalent. C'est quand meme sympa = c'est quand meme sympa."
    },
    {
      id: "20-l10",
      type: "libre",
      question: "Translate: It works, perfect!",
      questionFr: "Traduisez : Ca marche, nickel !",
      correct: "Ca marche, nickel !",
      correctEn: "It works, perfect!",
      alternatives: [],
      explanation: "Ca marche = it works / OK. Nickel = perfect.",
      explanationFr: "Ca marche = ca marche / OK. Nickel = nickel / parfait."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_20;
} else {
  window.LESSON_20 = LESSON_20;
}

