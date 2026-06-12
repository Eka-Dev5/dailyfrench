// lesson-06.js -- At the Shops
const LESSON_06 = {
  id: 6,
  title: "At the Shops",
  titleFr: "Dans les magasins",
  objectiveEn: "Buy things, ask prices, pay and handle money in French shops",
  objectiveFr: "Acheter des choses, demander les prix, payer et gerer l'argent dans les magasins francais",
  hintEn: "Always say bonjour when entering ANY shop in France -- it is essential!",
  hintFr: "Dites toujours bonjour en entrant dans N'IMPORTE QUEL magasin en France -- c'est essentiel !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Shop types</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>la boulangerie</td><td><em>*la boo-lon-ZHREE*</em></td><td>the bakery <!-- *thuh BAY-kuh-ree* --></td></tr>
<tr><td>la pharmacie</td><td><em>*la far-ma-SEE*</em></td><td>the pharmacy <!-- *thuh FAR-muh-see* --></td></tr>
<tr><td>la poste</td><td><em>*la post*</em></td><td>the post office <!-- *thuh post OH-fis* --></td></tr>
<tr><td>la banque</td><td><em>*la bonk*</em></td><td>the bank <!-- *thuh bank* --></td></tr>
<tr><td>le supermarche</td><td><em>*luh soo-pair-mar-SHAY*</em></td><td>the supermarket <!-- *thuh SOO-pur-mar-ket* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Paying and shopping phrases</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>Je paie par carte.</td><td><em>*zhuh pay par kart*</em></td><td>I pay by card. <!-- *eye pay by card* --></td></tr>
<tr><td>Vous acceptez les cheques ?</td><td><em>*voo ak-sep-TAY lay shek*</em></td><td>Do you accept cheques? <!-- *doo yoo ak-SEPT checks* --></td></tr>
<tr><td>Avez-vous la monnaie ?</td><td><em>*a-vay-VOO la mo-NAY*</em></td><td>Do you have change? <!-- *doo yoo hav chaynj* --></td></tr>
<tr><td>Un ticket de caisse, s il vous plait.</td><td><em>*uhn tee-kay duh kess, seel voo PLAY*</em></td><td>A receipt, please. <!-- *uh re-SEET, PLEEZ* --></td></tr>
</table>
</div>
<div class="lesson-warning">In France, <strong>la carte</strong> (card) is now the standard payment. Cheques are rare but still accepted in some places.</div>
<div class="lesson-example">
-- Bonjour, je voudrais ce pain, s il vous plait. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Hello, I would like this bread, please.</span><br>
-- Voila. Vous payez comment ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Here you go. How will you pay?</span><br>
-- Je paie par carte. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I pay by card.</span>
</div>
  `,
  qcm: [
    {
      id: "06-1",
      type: "qcm",
      question: "I pay by card. in French:",
      questionFr: "Je paie par carte. en anglais :",
      options: ["Je paie par carte.","Je paye carte.","Je paie avec carte.","Je donne carte."],
      optionsEn: ["I pay by card.","I pay card.","I pay with card.","I give card."],
      correct: "Je paie par carte.",
      correctEn: "I pay by card.",
      explanation: "Je paie (zhuh pay) = I pay. Par carte = by card.",
      explanationFr: "Je paie = je paie. Par carte = par carte."
    },
    {
      id: "06-2",
      type: "qcm",
      question: "Do you accept cheques? in French:",
      questionFr: "Vous acceptez les cheques ? en anglais :",
      options: ["Vous acceptez les cheques ?","Vous prenez cheques ?","Cheques acceptez ?","Acceptez-vous cheques ?"],
      optionsEn: ["Do you accept cheques?","Do you take cheques?","Cheques accept?","Do you accept cheques?"],
      correct: "Vous acceptez les cheques ?",
      correctEn: "Do you accept cheques?",
      explanation: "Accepter (ak-sep-TAY) = to accept. Les cheques = cheques.",
      explanationFr: "Accepter = accepter. Les cheques = les cheques."
    },
    {
      id: "06-3",
      type: "qcm",
      question: "The bakery in French:",
      questionFr: "La boulangerie en anglais :",
      options: ["La boulangerie","La banque","La pharmacie","La poste"],
      optionsEn: ["The bakery","The bank","The pharmacy","The post office"],
      correct: "La boulangerie",
      correctEn: "The bakery",
      explanation: "La boulangerie (boo-lon-ZHREE) = the bakery. Le pain = bread.",
      explanationFr: "La boulangerie = la boulangerie. Le pain = le pain."
    },
    {
      id: "06-4",
      type: "qcm",
      question: "Do you have change? in French:",
      questionFr: "Avez-vous la monnaie ? en anglais :",
      options: ["Avez-vous la monnaie ?","Vous avez monnaie ?","Avez monnaie ?","Monnaie vous ?"],
      optionsEn: ["Do you have change?","Do you have change?","Have change?","Change you?"],
      correct: "Avez-vous la monnaie ?",
      correctEn: "Do you have change?",
      explanation: "La monnaie (mo-NAY) = change / coins. Not 'argent' (money) in this context!",
      explanationFr: "La monnaie = la monnaie. Pas 'argent' dans ce contexte !"
    },
    {
      id: "06-5",
      type: "qcm",
      question: "A receipt, please. in French:",
      questionFr: "Un ticket de caisse, s il vous plait. en anglais :",
      options: ["Un ticket de caisse, s il vous plait.","Un recu, s il vous plait.","La caisse, s il vous plait.","Un ticket, s il vous plait."],
      optionsEn: ["A receipt, please.","A receipt, please.","The till, please.","A ticket, please."],
      correct: "Un ticket de caisse, s il vous plait.",
      correctEn: "A receipt, please.",
      explanation: "Ticket de caisse (tee-kay duh kess) = receipt. Un recu also works.",
      explanationFr: "Ticket de caisse = ticket de caisse. Un recu marche aussi."
    },
    {
      id: "06-6",
      type: "qcm",
      question: "The bank in French:",
      questionFr: "La banque en anglais :",
      options: ["La banque","La boulangerie","La pharmacie","La poste"],
      optionsEn: ["The bank","The bakery","The pharmacy","The post office"],
      correct: "La banque",
      correctEn: "The bank",
      explanation: "La banque (bonk) = the bank. Un distributeur = ATM.",
      explanationFr: "La banque = la banque. Un distributeur = un distributeur."
    },
    {
      id: "06-7",
      type: "qcm",
      question: "The supermarket in French:",
      questionFr: "Le supermarche en anglais :",
      options: ["Le supermarche","Le marche","Le magasin","Le hypermarche"],
      optionsEn: ["The supermarket","The market","The shop","The hypermarket"],
      correct: "Le supermarche",
      correctEn: "The supermarket",
      explanation: "Le supermarche (soo-pair-mar-SHAY) = supermarket. Le marche = market.",
      explanationFr: "Le supermarche = le supermarche. Le marche = le marche."
    },
    {
      id: "06-8",
      type: "qcm",
      question: "The pharmacy in French:",
      questionFr: "La pharmacie en anglais :",
      options: ["La pharmacie","La banque","La boulangerie","La poste"],
      optionsEn: ["The pharmacy","The bank","The bakery","The post office"],
      correct: "La pharmacie",
      correctEn: "The pharmacy",
      explanation: "La pharmacie (far-ma-SEE) = pharmacy. Look for the green cross!",
      explanationFr: "La pharmacie = la pharmacie. Cherchez la croix verte !"
    },
    {
      id: "06-9",
      type: "qcm",
      question: "The post office in French:",
      questionFr: "La poste en anglais :",
      options: ["La poste","La banque","La pharmacie","La boulangerie"],
      optionsEn: ["The post office","The bank","The pharmacy","The bakery"],
      correct: "La poste",
      correctEn: "The post office",
      explanation: "La poste (post) = post office. Le facteur = postman.",
      explanationFr: "La poste = la poste. Le facteur = le facteur."
    },
    {
      id: "06-10",
      type: "qcm",
      question: "How will you pay? in French:",
      questionFr: "Vous payez comment ? en anglais :",
      options: ["Vous payez comment ?","Comment payez-vous ?","Comment payer ?","Vous payer comment ?"],
      optionsEn: ["How will you pay?","How do you pay?","How to pay?","You pay how?"],
      correct: "Vous payez comment ?",
      correctEn: "How will you pay?",
      explanation: "Vous payez comment ? (voo pay-ay ko-mahn) = How will you pay? Very common question.",
      explanationFr: "Vous payez comment ? = comment payez-vous ? Question tres courante."
    }
  ],
  libre: [
    {
      id: "06-l1",
      type: "libre",
      question: "Translate: I pay by card.",
      questionFr: "Traduisez : Je paie par carte.",
      correct: "Je paie par carte.",
      correctEn: "I pay by card.",
      alternatives: [],
      explanation: "Je paie = I pay. Par carte = by card.",
      explanationFr: "Je paie = je paie. Par carte = par carte."
    },
    {
      id: "06-l2",
      type: "libre",
      question: "How do you say Do you accept cheques?",
      questionFr: "Comment dit-on Vous acceptez les cheques ?",
      correct: "Vous acceptez les cheques ?",
      correctEn: "Do you accept cheques?",
      alternatives: [],
      explanation: "Accepter = to accept. Les cheques = cheques.",
      explanationFr: "Accepter = accepter. Les cheques = les cheques."
    },
    {
      id: "06-l3",
      type: "libre",
      question: "Translate: A receipt, please.",
      questionFr: "Traduisez : Un ticket de caisse, s il vous plait.",
      correct: "Un ticket de caisse, s il vous plait.",
      correctEn: "A receipt, please.",
      alternatives: ["Un recu, s il vous plait."],
      explanation: "Ticket de caisse = receipt. Recu = receipt (also correct).",
      explanationFr: "Ticket de caisse = ticket de caisse. Recu = recu (aussi correct)."
    },
    {
      id: "06-l4",
      type: "libre",
      question: "Complete: Je paie par ___.",
      questionFr: "Completez : Je paie par ___.",
      correct: "carte",
      correctEn: "card",
      alternatives: ["cheque"],
      explanation: "Je paie par carte = I pay by card. Par cheque = by cheque.",
      explanationFr: "Je paie par carte = je paie par carte. Par cheque = par cheque."
    },
    {
      id: "06-l5",
      type: "libre",
      question: "How do you say the bakery?",
      questionFr: "Comment dit-on la boulangerie ?",
      correct: "la boulangerie",
      correctEn: "the bakery",
      alternatives: [],
      explanation: "La boulangerie = the bakery. Le boulanger = the baker.",
      explanationFr: "La boulangerie = la boulangerie. Le boulanger = le boulanger."
    },
    {
      id: "06-l6",
      type: "libre",
      question: "Translate: Do you have change?",
      questionFr: "Traduisez : Avez-vous la monnaie ?",
      correct: "Avez-vous la monnaie ?",
      correctEn: "Do you have change?",
      alternatives: [],
      explanation: "La monnaie = change. Argent = money.",
      explanationFr: "La monnaie = la monnaie. Argent = argent."
    },
    {
      id: "06-l7",
      type: "libre",
      question: "Complete: ___ acceptez les cheques ?",
      questionFr: "Completez : ___ acceptez les cheques ?",
      correct: "Vous",
      correctEn: "Do you",
      alternatives: [],
      explanation: "Vous acceptez = Do you accept. Vous = you (formal).",
      explanationFr: "Vous acceptez = vous acceptez. Vous = vous (formel)."
    },
    {
      id: "06-l8",
      type: "libre",
      question: "How do you say the supermarket?",
      questionFr: "Comment dit-on le supermarche ?",
      correct: "le supermarche",
      correctEn: "the supermarket",
      alternatives: [],
      explanation: "Le supermarche = the supermarket.",
      explanationFr: "Le supermarche = le supermarche."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_06;
} else {
  window.LESSON_06 = LESSON_06;
}
