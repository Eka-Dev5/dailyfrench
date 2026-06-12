// lesson-20.js -- Colloquial Expressions
const LESSON_20 = {
  id: 20,
  title: "Colloquial Expressions",
  titleFr: "Expressions Familieres",
  objectiveEn: "Understand and use common French colloquialisms and filler words",
  objectiveFr: "Comprendre et utiliser les expressions familieres et mots de remplissage courants",
  hintEn: "These expressions make you sound natural and fluent -- use them with friends!",
  hintFr: "Ces expressions vous font paraitre naturel et courant -- utilisez-les avec des amis !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Everyday colloquialisms</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td><strong>Ca marche !</strong></td><td><em>*sah MARSH*</em></td><td>That works! / OK! <!-- *that wurks / oh-KAY* --></td></tr>
<tr><td><strong>Bof...</strong></td><td><em>*bof...*</em></td><td>Meh... / So-so <!-- *meh... / soh-soh* --></td></tr>
<tr><td><strong>Nickel !</strong></td><td><em>*nee-KEL*</em></td><td>Perfect! / Spot on! <!-- *PUR-fekt / spot on* --></td></tr>
<tr><td><strong>Pas terrible.</strong></td><td><em>*pah tair-REE-bluh*</em></td><td>Not great. <!-- *not grayt* --></td></tr>
<tr><td><strong>En fait</strong></td><td><em>*ahn fay*</em></td><td>Actually / In fact <!-- *AK-choo-uh-lee / in fakt* --></td></tr>
<tr><td><strong>Du coup</strong></td><td><em>*doo koo*</em></td><td>So... / Therefore <!-- *soh... / THAIR-fore* --></td></tr>
<tr><td><strong>Franchement</strong></td><td><em>*fronsh-MON*</em></td><td>Frankly / Honestly <!-- *FRANK-lee / ON-est-lee* --></td></tr>
<tr><td><strong>Ca depend.</strong></td><td><em>*sah day-PON*</em></td><td>It depends. <!-- *it dee-PENDZ* --></td></tr>
<tr><td><strong>Quand meme</strong></td><td><em>*kan MEM*</em></td><td>Anyway / Still <!-- *EN-ee-way / stil* --></td></tr>
<tr><td><strong>Comme d'habitude</strong></td><td><em>*kom da-bee-TOOD*</em></td><td>As usual <!-- *az YOO-zhoo-uhl* --></td></tr>
</table>
</div>
<div class="lesson-warning">These expressions are <strong>informal</strong> -- use them with friends and family, not in formal situations!</div>
<div class="lesson-example">
-- Tu as aime le film ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Did you like the film?</span><br>
-- Bof... Pas terrible. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Meh... Not great.</span><br>
-- Ah bon ? Moi, j'ai trouve ca nickel ! <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Really? I thought it was perfect!</span>
</div>
  `,
  qcm: [
    {
      id: "20-1",
      type: "qcm",
      question: "That works! / OK! in French:",
      questionFr: "Ca marche ! en anglais :",
      options: ["Ca marche !","Ca va !","Ca marche pas !","Ca fait !"],
      optionsEn: ["That works! / OK!","It goes!","It doesn't work!","It does!"],
      correct: "Ca marche !",
      correctEn: "That works! / OK!",
      explanation: "Ca marche (sah MARSH) = That works! Very common agreement expression.",
      explanationFr: "Ca marche = ca marche ! Expression d'accord tres courante."
    },
    {
      id: "20-2",
      type: "qcm",
      question: "Meh... / So-so in French:",
      questionFr: "Bof... en anglais :",
      options: ["Bof...","Bon...","Bah...","Bouh..."],
      optionsEn: ["Meh... / So-so","Good...","Well...","Boo..."],
      correct: "Bof...",
      correctEn: "Meh... / So-so",
      explanation: "Bof (bof) = Meh / So-so. Expresses indifference or mild disappointment.",
      explanationFr: "Bof = bof. Exprime l'indifference ou la legere deception."
    },
    {
      id: "20-3",
      type: "qcm",
      question: "Perfect! / Spot on! in French:",
      questionFr: "Nickel ! en anglais :",
      options: ["Nickel !","Parfait !","Excellent !","Genial !"],
      optionsEn: ["Perfect! / Spot on!","Perfect!","Excellent!","Great!"],
      correct: "Nickel !",
      correctEn: "Perfect! / Spot on!",
      explanation: "Nickel (nee-KEL) = Perfect / Spot on. Very colloquial, very French!",
      explanationFr: "Nickel = nickel. Tres familier, tres francais !"
    },
    {
      id: "20-4",
      type: "qcm",
      question: "Not great. in French:",
      questionFr: "Pas terrible. en anglais :",
      options: ["Pas terrible.","Pas bon.","Pas bien.","Pas genial."],
      optionsEn: ["Not great.","Not good.","Not well.","Not great."],
      correct: "Pas terrible.",
      correctEn: "Not great.",
      explanation: "Pas terrible (pah tair-REE-bluh) = Not great. Understatement for 'pretty bad'!",
      explanationFr: "Pas terrible = pas terrible. Litote pour 'plutot mauvais' !"
    },
    {
      id: "20-5",
      type: "qcm",
      question: "Actually / In fact in French:",
      questionFr: "En fait en anglais :",
      options: ["En fait","En effet","En realite","En verite"],
      optionsEn: ["Actually / In fact","Indeed","In reality","In truth"],
      correct: "En fait",
      correctEn: "Actually / In fact",
      explanation: "En fait (ahn fay) = Actually / In fact. Very common filler word!",
      explanationFr: "En fait = en fait. Mot de remplissage tres courant !"
    },
    {
      id: "20-6",
      type: "qcm",
      question: "So... / Therefore in French:",
      questionFr: "Du coup en anglais :",
      options: ["Du coup","Donc","Alors","Par consequent"],
      optionsEn: ["So... / Therefore","So","Then","Consequently"],
      correct: "Du coup",
      correctEn: "So... / Therefore",
      explanation: "Du coup (doo koo) = So / Therefore. Very common in spoken French!",
      explanationFr: "Du coup = du coup. Tres courant en francais parle !"
    },
    {
      id: "20-7",
      type: "qcm",
      question: "Frankly / Honestly in French:",
      questionFr: "Franchement en anglais :",
      options: ["Franchement","Honnetement","Vraiment","Sincerement"],
      optionsEn: ["Frankly / Honestly","Honestly","Really","Sincerely"],
      correct: "Franchement",
      correctEn: "Frankly / Honestly",
      explanation: "Franchement (fronsh-MON) = Frankly / Honestly. Adds emphasis to opinion.",
      explanationFr: "Franchement = franchement. Ajoute de l'emphase a l'opinion."
    },
    {
      id: "20-8",
      type: "qcm",
      question: "It depends. in French:",
      questionFr: "Ca depend. en anglais :",
      options: ["Ca depend.","C'est depend.","Il depend.","Depend ca."],
      optionsEn: ["It depends.","It is depends.","He depends.","Depends it."],
      correct: "Ca depend.",
      correctEn: "It depends.",
      explanation: "Ca depend (sah day-PON) = It depends. Very useful non-committal answer!",
      explanationFr: "Ca depend = ca depend. Reponse evasive tres utile !"
    },
    {
      id: "20-9",
      type: "qcm",
      question: "Anyway / Still in French:",
      questionFr: "Quand meme en anglais :",
      options: ["Quand meme","Quand ca","Meme quand","Quand"],
      optionsEn: ["Anyway / Still","When that","Even when","When"],
      correct: "Quand meme",
      correctEn: "Anyway / Still",
      explanation: "Quand meme (kan MEM) = Anyway / Still / All the same. Very versatile!",
      explanationFr: "Quand meme = quand meme. Tres polyvalent !"
    },
    {
      id: "20-10",
      type: "qcm",
      question: "As usual in French:",
      questionFr: "Comme d'habitude en anglais :",
      options: ["Comme d'habitude","Comme habituel","D'habitude","L'habitude"],
      optionsEn: ["As usual","As usual (wrong)","Usually","The habit"],
      correct: "Comme d'habitude",
      correctEn: "As usual",
      explanation: "Comme d'habitude (kom da-bee-TOOD) = As usual. Famous song by Claude Francois!",
      explanationFr: "Comme d'habitude = comme d'habitude. Chanson celebre de Claude Francois !"
    }
  ],
  libre: [
    {
      id: "20-l1",
      type: "libre",
      question: "Translate: That works!",
      questionFr: "Traduisez : Ca marche !",
      correct: "Ca marche !",
      correctEn: "That works! / OK!",
      alternatives: [],
      explanation: "Ca marche = That works! Very common agreement.",
      explanationFr: "Ca marche = ca marche ! Accord tres courant."
    },
    {
      id: "20-l2",
      type: "libre",
      question: "How do you say Meh...?",
      questionFr: "Comment dit-on Bof... ?",
      correct: "Bof...",
      correctEn: "Meh... / So-so",
      alternatives: [],
      explanation: "Bof = Meh / So-so. Expresses indifference.",
      explanationFr: "Bof = bof. Exprime l'indifference."
    },
    {
      id: "20-l3",
      type: "libre",
      question: "Translate: Perfect!",
      questionFr: "Traduisez : Nickel !",
      correct: "Nickel !",
      correctEn: "Perfect! / Spot on!",
      alternatives: [],
      explanation: "Nickel = Perfect / Spot on. Very colloquial.",
      explanationFr: "Nickel = nickel. Tres familier."
    },
    {
      id: "20-l4",
      type: "libre",
      question: "Complete: En ___, je ne sais pas.",
      questionFr: "Completez : En ___, je ne sais pas.",
      correct: "fait",
      correctEn: "fact",
      alternatives: [],
      explanation: "En fait = Actually / In fact. Very common filler.",
      explanationFr: "En fait = en fait. Remplissage tres courant."
    },
    {
      id: "20-l5",
      type: "libre",
      question: "How do you say Not great?",
      questionFr: "Comment dit-on Pas terrible ?",
      correct: "Pas terrible.",
      correctEn: "Not great.",
      alternatives: [],
      explanation: "Pas terrible = Not great. Understatement for 'pretty bad'.",
      explanationFr: "Pas terrible = pas terrible. Litote pour 'plutot mauvais'."
    },
    {
      id: "20-l6",
      type: "libre",
      question: "Translate: Frankly, I don't like it.",
      questionFr: "Traduisez : Franchement, je n'aime pas ca.",
      correct: "Franchement, je n'aime pas ca.",
      correctEn: "Frankly, I don't like it.",
      alternatives: [],
      explanation: "Franchement = Frankly / Honestly. Adds emphasis.",
      explanationFr: "Franchement = franchement. Ajoute de l'emphase."
    },
    {
      id: "20-l7",
      type: "libre",
      question: "Complete: Ca ___.",
      questionFr: "Completez : Ca ___.",
      correct: "depend",
      correctEn: "depends",
      alternatives: [],
      explanation: "Ca depend = It depends. Non-committal answer.",
      explanationFr: "Ca depend = ca depend. Reponse evasive."
    },
    {
      id: "20-l8",
      type: "libre",
      question: "How do you say As usual?",
      questionFr: "Comment dit-on Comme d'habitude ?",
      correct: "Comme d'habitude",
      correctEn: "As usual",
      alternatives: [],
      explanation: "Comme d'habitude = As usual. Famous song!",
      explanationFr: "Comme d'habitude = comme d'habitude. Chanson celebre !"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_20;
} else {
  window.LESSON_20 = LESSON_20;
}
