// politeness.js
const LESSON_10 = {
  id: 10,
  title: "Politeness",
  titleFr: "Politesse",
  objectiveEn: "Use polite French in any situation, ask for help graciously",
  objectiveFr: "Utiliser le français poli en toute situation, demander de l'aide avec grâce",
  hintEn: "French politeness is non-negotiable — always use it and you'll be well received!",
  hintFr: "La politesse française est non négociable — utilisez-la toujours et vous serez bien accueilli !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🎩 Essential polite phrases</h4>
<table class="lesson-table">
<thead>
<tr><th>French</th><th>English</th></tr>
</thead>
<tbody>
<tr><td class=\"\">S'il vous plaît<\/td><td>Please (formal)<\/td><\/tr>
<tr><td class=\"\">Merci (beaucoup)<\/td><td>Thank you (very much)<\/td><\/tr>
<tr><td class=\"\">De rien<\/td><td>You're welcome<\/td><\/tr>
<tr><td class=\"\">Excusez-moi<\/td><td>Excuse me / Sorry (formal)<\/td><\/tr>
<tr><td class=\"\">Pardon<\/td><td>Sorry / Pardon<\/td><\/tr>
<tr><td class=\"\">Je suis désolé(e)<\/td><td>I'm sorry (m/f)<\/td><\/tr>
</tbody>
<\/table>
<\/div>
<div class="lesson-rule">
<h4>🗣️ Asking for help politely<\/h4>
<table class="lesson-table">
<thead>
<tr><th>French</th><th>English</th></tr>
</thead>
<tbody>
<tr><td class=\"\">Pourriez-vous m'aider ?<\/td><td>Could you help me?<\/td><\/tr>
<tr><td class=\"\">Je ne comprends pas.<\/td><td>I don't understand.<\/td><\/tr>
<tr><td class=\"\">Pouvez-vous répéter, s'il vous plaît ?<\/td><td>Can you repeat, please?<\/td><\/tr>
<tr><td class=\"\">Parlez-vous anglais ?<\/td><td>Do you speak English?<\/td><\/tr>
</tbody>
<\/table>
<\/div>
<div class="lesson-warning">⚠️ <strong>Merci<\/strong> alone can sound abrupt. <strong>Merci beaucoup<\/strong> or <strong>merci bien<\/strong> is warmer.<\/div>
  `,
  qcm: [
    {
      id: "10-1",
      type: "qcm",
      question: "'Could you help me?' (very polite) in French:",
      questionFr: "Comment dit-on 'Pourriez-vous m'aider ?' (très poli)",
      options: ["Pourriez-vous m'aider ?", "Pouvez-vous aider ?", "Aidez-moi.", "Help me please."],
      optionsEn: ["Could you help me?", "Can you help?", "Help me.", "Help me please."],
      correct: "Pourriez-vous m'aider ?",
      correctEn: "Could you help me?",
      explanation: "Pourriez-vous (*poo-ryay-VOO*) = could you (conditional = extra polite). More polite than pouvez-vous.",
      explanationFr: "Pourriez-vous = pourriez-vous (conditionnel = très poli). Plus poli que pouvez-vous."
    },
    {
      id: "10-2",
      type: "qcm",
      question: "'I don't understand.' in French:",
      questionFr: "Traduisez : 'Je ne comprends pas.'",
      options: ["Je ne comprends pas.", "Je comprends pas.", "Je sais pas.", "Je ne sais pas."],
      optionsEn: ["I don't understand.", "I understand not.", "I don't know (sais).", "I don't know (sais)."],
      correct: "Je ne comprends pas.",
      correctEn: "I don't understand.",
      explanation: "Je ne comprends pas (*zhuh nuh kom-PRON PAH*). Always use the full ne...pas in formal situations.",
      explanationFr: "Je ne comprends pas. Utilisez toujours le ne...pas complet en situation formelle."
    },
    {
      id: "10-3",
      type: "qcm",
      question: "'Can you speak more slowly?' in French:",
      questionFr: "Traduisez : 'Pouvez-vous parler plus lentement ?'",
      options: ["Pouvez-vous parler plus lentement ?", "Parlez lent.", "Parlez doucement.", "Vous parlez lentement ?"],
      optionsEn: ["Can you speak more slowly?", "Speak slow.", "Speak softly.", "You speak slowly?"],
      correct: "Pouvez-vous parler plus lentement ?",
      correctEn: "Can you speak more slowly?",
      explanation: "Plus lentement (*plue lon-tuh-MON*) = more slowly. Absolutely essential for learners!",
      explanationFr: "Plus lentement = plus lentement. Absolument essentiel pour les apprenants !"
    },
    {
      id: "10-4",
      type: "qcm",
      question: "'You're welcome.' (most common) in French:",
      questionFr: "Comment dit-on 'De rien' (le plus courant) ?",
      options: ["De rien.", "Pas de quoi.", "Avec plaisir.", "C'est normal."],
      optionsEn: ["You're welcome.", "No problem.", "With pleasure.", "It's normal."],
      correct: "De rien.",
      correctEn: "You're welcome.",
      explanation: "De rien (*duh RYAN*) = You're welcome. Pas de quoi / Avec plaisir are also correct.",
      explanationFr: "De rien = de rien. Pas de quoi / Avec plaisir sont aussi corrects."
    },
    {
      id: "10-5",
      type: "qcm",
      question: "'I'm sorry.' in French:",
      questionFr: "Comment dit-on 'Je suis désolé(e)' ?",
      options: ["Je suis désolé(e).", "Je suis sorry.", "Pardon.", "Excusez-moi."],
      optionsEn: ["I'm sorry (désolé).", "I'm sorry (English).", "Sorry (pardon).", "Excuse me."],
      correct: "Je suis désolé(e).",
      correctEn: "I'm sorry.",
      explanation: "Je suis désolé(e) = I'm sorry (sincere apology). Pardon/Excusez-moi are for minor things.",
      explanationFr: "Je suis désolé(e) = je suis désolé(e). Pardon/Excusez-moi sont pour des choses mineures."
    },
    {
      id: "10-6",
      type: "qcm",
      question: "'Excuse me' to get someone's attention:",
      questionFr: "'Excusez-moi' pour attirer l'attention :",
      options: ["Excusez-moi", "Pardon", "S'il vous plaît", "Attention"],
      optionsEn: ["Excuse me", "Sorry", "Please", "Attention"],
      correct: "Excusez-moi",
      correctEn: "Excuse me",
      explanation: "Excusez-moi (*ex-kue-ZAY mwah*) to get attention. Pardon to say sorry for bumping into someone.",
      explanationFr: "Excusez-moi pour attirer l'attention. Pardon pour s'excuser d'avoir bousculé quelqu'un."
    },
    {
      id: "10-7",
      type: "qcm",
      question: "Which phrase asks someone to repeat?",
      questionFr: "Quelle phrase demande à quelqu'un de répéter ?",
      options: ["Pouvez-vous répéter, s'il vous plaît ?", "Parlez encore.", "Encore une fois.", "Dites encore."],
      optionsEn: ["Can you repeat, please?", "Speak again.", "One more time.", "Say again."],
      correct: "Pouvez-vous répéter, s'il vous plaît ?",
      correctEn: "Can you repeat, please?",
      explanation: "Répéter (*ray-pay-TAY*) = to repeat. Essential for all language learners!",
      explanationFr: "Répéter = répéter. Essentiel pour tous les apprenants !"
    },
    {
      id: "10-8",
      type: "qcm",
      question: "'Do you speak English?' (formal) in French:",
      questionFr: "Comment dit-on 'Parlez-vous anglais ?' (formel)",
      options: ["Parlez-vous anglais ?", "Vous parlez anglais ?", "Savez-vous l'anglais ?", "L'anglais vous ?"],
      optionsEn: ["Do you speak English?", "You speak English?", "Do you know English?", "English you?"],
      correct: "Parlez-vous anglais ?",
      correctEn: "Do you speak English?",
      explanation: "Parlez-vous ? (*par-lay-VOO*) = Do you speak? Formal inversion question.",
      explanationFr: "Parlez-vous ? = parlez-vous ? Question formelle par inversion."
    },
    {
      id: "10-9",
      type: "qcm",
      question: "'Thank you very much.' in French:",
      questionFr: "Traduisez : 'Merci beaucoup.'",
      options: ["Merci beaucoup.", "Merci très.", "Grand merci.", "Beaucoup merci."],
      optionsEn: ["Thank you very much.", "Thank you very (incorrect).", "Great thanks.", "Many thanks (incorrect order)."],
      correct: "Merci beaucoup.",
      correctEn: "Thank you very much.",
      explanation: "Merci beaucoup (*mair-see boh-KOO*) = Thank you very much. Merci mille fois = thanks a thousand times.",
      explanationFr: "Merci beaucoup = merci beaucoup. Merci mille fois = merci mille fois."
    },
    {
      id: "10-10",
      type: "qcm",
      question: "The most important word to say first in any French interaction:",
      questionFr: "Le mot le plus important à dire en premier dans toute interaction française :",
      options: ["Bonjour", "Merci", "S'il vous plaît", "Excusez-moi"],
      optionsEn: ["Hello", "Thank you", "Please", "Excuse me"],
      correct: "Bonjour",
      correctEn: "Hello",
      explanation: "ALWAYS start with Bonjour. Going straight to your request without it is considered very rude in France.",
      explanationFr: "Commencez TOUJOURS par Bonjour. Aller directement à votre demande sans est considéré très impoli en France."
    }
  ],
  libre: [
    {
      id: "10-l1",
      type: "libre",
      question: "Translate: 'Can you repeat more slowly, please?'",
      questionFr: "Traduisez : 'Pouvez-vous répéter plus lentement, s'il vous plaît ?'",
      correct: "Pouvez-vous répéter plus lentement, s'il vous plaît ?",
      correctEn: "Can you repeat more slowly, please?",
      alternatives: [],
      explanation: "Répéter = to repeat. Plus lentement = more slowly.",
      explanationFr: "Répéter = répéter. Plus lentement = plus lentement."
    },
    {
      id: "10-l2",
      type: "libre",
      question: "How do you say 'I don't understand'?",
      questionFr: "Comment dit-on 'Je ne comprends pas' ?",
      correct: "Je ne comprends pas.",
      correctEn: "I don't understand.",
      alternatives: [],
      explanation: "Comprendre = to understand. Ne...pas = negation.",
      explanationFr: "Comprendre = comprendre. Ne...pas = négation."
    },
    {
      id: "10-l3",
      type: "libre",
      question: "Translate: 'I'm sorry, I'm late.'",
      questionFr: "Traduisez : 'Je suis désolé(e), je suis en retard.'",
      correct: "Je suis désolé(e), je suis en retard.",
      correctEn: "I'm sorry, I'm late.",
      alternatives: [],
      explanation: "En retard = late. Je suis désolé(e) = I'm sorry.",
      explanationFr: "En retard = en retard. Je suis désolé(e) = je suis désolé(e)."
    },
    {
      id: "10-l4",
      type: "libre",
      question: "How do you say 'You're welcome'?",
      questionFr: "Comment dit-on 'De rien' ?",
      correct: "De rien.",
      correctEn: "You're welcome.",
      alternatives: ["Pas de quoi.", "Avec plaisir."],
      explanation: "De rien is most common. Pas de quoi / Avec plaisir also work.",
      explanationFr: "De rien est le plus courant. Pas de quoi / Avec plaisir fonctionnent aussi."
    },
    {
      id: "10-l5",
      type: "libre",
      question: "What is the FIRST thing to say when entering any French shop?",
      questionFr: "Quelle est la PREMIÈRE chose à dire en entrant dans un magasin français ?",
      correct: "Bonjour !",
      correctEn: "Hello!",
      alternatives: [],
      explanation: "ALWAYS say Bonjour when entering. Not doing so is considered rude.",
      explanationFr: "Dites TOUJOURS Bonjour en entrant. Ne pas le faire est considéré impoli."
    },
    {
      id: "10-l6",
      type: "libre",
      question: "Complete: 'Pouvez-vous parler ___ lentement ?'",
      questionFr: "Complétez : 'Pouvez-vous parler ___ lentement ?'",
      correct: "plus",
      correctEn: "more",
      alternatives: [],
      explanation: "Plus lentement = more slowly. Plus = more in comparisons.",
      explanationFr: "Plus lentement = plus lentement. Plus = plus dans les comparaisons."
    },
    {
      id: "10-l7",
      type: "libre",
      question: "Translate: 'Excuse me, I don't understand French very well.'",
      questionFr: "Traduisez : 'Excusez-moi, je ne comprends pas très bien le français.'",
      correct: "Excusez-moi, je ne comprends pas très bien le français.",
      correctEn: "Excuse me, I don't understand French very well.",
      alternatives: [],
      explanation: "Je ne comprends pas bien = I don't understand well. Honest and useful!",
      explanationFr: "Je ne comprends pas bien = je ne comprends pas bien. Honnête et utile !"
    },
    {
      id: "10-l8",
      type: "libre",
      question: "How do you say 'Thank you very much, goodbye'?",
      questionFr: "Comment dit-on 'Merci beaucoup, au revoir' ?",
      correct: "Merci beaucoup, au revoir.",
      correctEn: "Thank you very much, goodbye.",
      alternatives: [],
      explanation: "Always end interactions with merci + au revoir. It matters!",
      explanationFr: "Terminez toujours les interactions par merci + au revoir. C'est important !"
    },
    {
      id: "10-l9",
      type: "libre",
      question: "Translate: 'Could you help me please?'",
      questionFr: "Traduisez : 'Pourriez-vous m'aider, s'il vous plaît ?'",
      correct: "Pourriez-vous m'aider, s'il vous plaît ?",
      correctEn: "Could you help me please?",
      alternatives: [],
      explanation: "Pourriez-vous = could you (conditional, very polite).",
      explanationFr: "Pourriez-vous = pourriez-vous (conditionnel, très poli)."
    },
    {
      id: "10-l10",
      type: "libre",
      question: "What does 'je ne comprends pas' mean?",
      questionFr: "Que signifie 'je ne comprends pas' ?",
      correct: "I don't understand",
      correctEn: "I don't understand",
      alternatives: ["I do not understand"],
      explanation: "Je ne comprends pas — one of the most important phrases for a learner!",
      explanationFr: "Je ne comprends pas — l'une des phrases les plus importantes pour un apprenant !"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_10;
} else {
  window.LESSON_10 = LESSON_10;
}