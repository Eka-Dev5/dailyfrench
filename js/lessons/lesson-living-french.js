// lesson-living-french.js
const LESSON_20 = {
  id: 20,
  title: "Living French",
  titleFr: "Le français vivant",
  objectiveEn: "Understand and use everyday French expressions naturally",
  objectiveFr: "Comprendre et utiliser naturellement les expressions françaises du quotidien",
  hintEn: "Pas terrible is a TRAP — it means NOT GREAT, not 'not terrible'!",
  hintFr: "Pas terrible est un PIÈGE — ça signifie PAS TOP, pas 'pas terrible' !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🗣️ Expressions every French person uses</h4>
<table class="lesson-table">
<thead><tr><th>Expression</th><th>Literal</th><th>Real meaning</th></tr></thead>
<tbody>
<tr><td><strong>Ça marche !</strong></td><td>It walks!</td>\n<td class=\"\">OK! / That works!</td>\n</tr>\n<tr>\n<td class=\"\"><strong>Bof...</strong></td>\n<td class=\"\">—</td>\n<td class=\"\">Meh / Not really / So-so</td>\n</tr>\n<tr>\n<td class=\"\"><strong>Nickel !</strong></td>\n<td class=\"\">Nickel!</td>\n<td class=\"\">Perfect! / Spotless!</td>\n</tr>\n<tr>\n<td class=\"\"><strong>Pas terrible.</strong></td>\n<td class=\"\">Not terrible.</td>\n<td class=\"\">Not great / Disappointing</td>\n</tr>\n<tr>\n<td class=\"\"><strong>En fait</strong></td>\n<td class=\"\">In fact</td>\n<td class=\"\">Actually / Well...</td>\n</tr>\n<tr>\n<td class=\"\"><strong>Du coup</strong></td>\n<td class=\"\">From the blow</td>\n<td class=\"\">So / Therefore / As a result</td>\n</tr>\n<tr>\n<td class=\"\"><strong>Franchement</strong></td>\n<td class=\"\">Frankly</td>\n<td class=\"\">Honestly / To be honest</td>\n</tr>\n<tr>\n<td class=\"\"><strong>Ça dépend.</strong></td>\n<td class=\"\">It depends.</td>\n<td class=\"\">It depends.</td>\n</tr>\n<tr>\n<td class=\"\"><strong>Quand même</strong></td>\n<td class=\"\">Even so</td>\n<td class=\"\">Still / Anyway / Come on</td>\n</tr>\n<tr>\n<td class=\"\"><strong>Comme d'habitude</strong></td>\n<td class=\"\">As usual</td>\n<td class=\"\">As usual</td>\n</tr>\n</tbody>\n</table>\n</div>\n<div class=\"lesson-warning\">⚠️ <strong>Pas terrible</strong> is a TRAP — it sounds like "not terrible" but it actually means "not great"!</div>\n<div class=\"lesson-example\">\n<strong>Exemple :</strong><br>\n— Tu aimes ce restaurant ? <br>\n— Bof... pas terrible. Mais le service, nickel ! <button class=\"lesson-ex-btn\" onclick=\"toggleLessonEx(this,event)\">🇬🇧 English</button>\n<span class=\"lesson-ex-en\">— Do you like this restaurant? — Meh... not great. But the service, perfect!</span>\n</div>\n  `,
  qcm: [
    {
      id: "20-1",
      type: "qcm",
      question: "'Ça marche !' means:",
      options: ["OK! / That works!", "It walks!", "Let's go!", "No problem!"],
      correct: "OK! / That works!",
      explanation: "Ça marche (*sa MARSH*) = OK! / That works! Despite literally meaning 'it walks'!",
      explanationFr: "Ça marche = OK ! / Ça fonctionne ! Bien que littéralement 'ça marche' !"
    },
    {
      id: "20-2",
      type: "qcm",
      question: "What does 'Bof...' express?",
      options: ["Indifference / meh / so-so", "Happiness", "Surprise", "Agreement"],
      correct: "Indifference / meh / so-so",
      explanation: "Bof = meh / so-so / not really. Used for mild disappointment or indifference.",
      explanationFr: "Bof = bof / pas top. Utilisé pour une déception légère ou l'indifférence."
    },
    {
      id: "20-3",
      type: "qcm",
      question: "'Nickel !' in spoken French means:",
      options: ["Perfect! / Spotless!", "A coin", "Not great", "It's OK"],
      correct: "Perfect! / Spotless!",
      explanation: "Nickel (*nee-KEL*) = perfect / spotless / brilliant! Very colloquial but very common.",
      explanationFr: "Nickel = parfait / impeccable / génial ! Très familier mais très courant."
    },
    {
      id: "20-4",
      type: "qcm",
      question: "WARNING: 'Pas terrible' really means:",
      options: ["Not great / disappointing", "Not terrible", "Quite good", "Rather good"],
      correct: "Not great / disappointing",
      explanation: "TRAP! Pas terrible = NOT great. It's the opposite of what English speakers assume!",
      explanationFr: "PIÈGE ! Pas terrible = PAS TOP. C'est le contraire de ce que les anglophones supposent !"
    },
    {
      id: "20-5",
      type: "qcm",
      question: "'En fait' translates as:",
      options: ["Actually / in fact", "In effect", "The fact is", "Indeed"],
      correct: "Actually / in fact",
      explanation: "En fait (*on FAY*) = actually / in fact. Used constantly in French speech.",
      explanationFr: "En fait = en fait. Utilisé constamment dans le discours français."
    },
    {
      id: "20-6",
      type: "qcm",
      question: "'Du coup' means:",
      options: ["So / therefore / as a result", "From the start", "All of a sudden", "At once"],
      correct: "So / therefore / as a result",
      explanation: "Du coup (*due KOO*) = so / therefore. Hugely popular in modern French.",
      explanationFr: "Du coup = donc / par conséquent. Très populaire dans le français moderne."
    },
    {
      id: "20-7",
      type: "qcm",
      question: "'Ça dépend.' means:",
      options: ["It depends.", "That's expensive.", "It doesn't matter.", "So much the better."],
      correct: "It depends.",
      explanation: "Ça dépend (*sa day-PON*) = It depends. A very French way to avoid committing!",
      explanationFr: "Ça dépend = ça dépend. Une façon très française de ne pas s'engager !"
    },
    {
      id: "20-8",
      type: "qcm",
      question: "'Franchement' means:",
      options: ["Frankly / honestly", "In French", "Freely", "Actually"],
      correct: "Frankly / honestly",
      explanation: "Franchement (*fron-SHE-mon*) = frankly / honestly. Franchement, c'était pas terrible!",
      explanationFr: "Franchement = franchement / honnêtement. Franchement, c'était pas terrible !"
    },
    {
      id: "20-9",
      type: "qcm",
      question: "'Quand même' is best translated as:",
      options: ["Still / anyway / come on!", "When even", "Same time", "Just the same"],
      correct: "Still / anyway / come on!",
      explanation: "Quand même (*kon MEM*) = still / anyway / even so. Very versatile French expression.",
      explanationFr: "Quand même = quand même / tout de même. Expression française très polyvalente."
    },
    {
      id: "20-10",
      type: "qcm",
      question: "'Comme d'habitude' means:",
      options: ["As usual", "As a habit", "Like always", "Just in case"],
      correct: "As usual",
      explanation: "Comme d'habitude (*kom da-bee-TUDE*) = as usual. Il est en retard, comme d'habitude!",
      explanationFr: "Comme d'habitude = comme d'habitude. Il est en retard, comme d'habitude !"
    }
  ],
  libre: [
    {
      id: "20-l1",
      type: "libre",
      question: "How do French people say 'OK' informally?",
      correct: "Ça marche !",
      alternatives: ["D'accord", "OK"],
      explanation: "Ça marche is the most natural informal 'OK' in French.",
      explanationFr: "Ça marche est le 'OK' informel le plus naturel en français."
    },
    {
      id: "20-l2",
      type: "libre",
      question: "How do you say 'actually' in French?",
      correct: "en fait",
      alternatives: [],
      explanation: "En fait = actually / in fact. Used constantly in spoken French.",
      explanationFr: "En fait = en fait. Utilisé constamment en français parlé."
    },
    {
      id: "20-l3",
      type: "libre",
      question: "Translate: 'So I went to the market.'",
      correct: "Du coup je suis allé au marché.",
      alternatives: [],
      explanation: "Du coup = so / therefore. Very natural in French conversation.",
      explanationFr: "Du coup = donc / par conséquent. Très naturel en conversation française."
    },
    {
      id: "20-l4",
      type: "libre",
      question: "How do you say 'frankly'?",
      correct: "franchement",
      alternatives: [],
      explanation: "Franchement = frankly / honestly. Franchement, c'est pas terrible!",
      explanationFr: "Franchement = franchement / honnêtement. Franchement, c'est pas terrible !"
    },
    {
      id: "20-l5",
      type: "libre",
      question: "What does 'Bof' express?",
      correct: "indifference",
      alternatives: ["meh", "so-so", "not really"],
      explanation: "Bof = mild indifference or disappointment. Very French!",
      explanationFr: "Bof = indifférence légère ou déception. Très français !"
    },
    {
      id: "20-l6",
      type: "libre",
      question: "How do you say 'it depends'?",
      correct: "ça dépend",
      alternatives: [],
      explanation: "Ça dépend — the quintessentially French non-answer!",
      explanationFr: "Ça dépend — la non-réponse par excellence française !"
    },
    {
      id: "20-l7",
      type: "libre",
      question: "Translate: 'He's late, as usual.'",
      correct: "Il est en retard, comme d'habitude.",
      alternatives: [],
      explanation: "Comme d'habitude = as usual. En retard = late.",
      explanationFr: "Comme d'habitude = comme d'habitude. En retard = en retard."
    },
    {
      id: "20-l8",
      type: "libre",
      question: "What is the REAL meaning of 'pas terrible'?",
      correct: "not great",
      alternatives: ["not good", "disappointing", "mediocre"],
      explanation: "TRAP: pas terrible = not great/good, NOT 'not terrible'!",
      explanationFr: "PIÈGE : pas terrible = pas top / pas bon, PAS 'pas terrible' !"
    },
    {
      id: "20-l9",
      type: "libre",
      question: "How do you say 'still / anyway'?",
      correct: "quand même",
      alternatives: [],
      explanation: "Quand même — very versatile. C'est quand même sympa = it's still nice.",
      explanationFr: "Quand même — très polyvalent. C'est quand même sympa = c'est quand même sympa."
    },
    {
      id: "20-l10",
      type: "libre",
      question: "Translate: 'It works, perfect!'",
      correct: "Ça marche, nickel !",
      alternatives: [],
      explanation: "Ça marche = it works / OK. Nickel = perfect.",
      explanationFr: "Ça marche = ça marche / OK. Nickel = parfait."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_20;
} else {
  window.LESSON_20 = LESSON_20;
}