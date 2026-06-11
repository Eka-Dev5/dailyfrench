// at-the-shops.js
const LESSON_06 = {
  id: 6,
  title: "At the Shops",
  titleFr: "Dans les magasins",
  objectiveEn: "Navigate French shops, pay, ask for help",
  objectiveFr: "Naviguer dans les magasins français, payer, demander de l'aide",
  hintEn: "Many French shops close 12h-14h and often all day Monday!",
  hintFr: "De nombreux magasins français ferment de 12h à 14h et souvent tout le lundi !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🏬 Shops vocabulary</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>la boulangerie<\/td><td>the bakery<\/td><\/tr>
</tr><td>la pharmacie<\/td><td>the pharmacy<\/td><\/tr>
<tr><td>la poste<\/td><td>the post office<\/td><\/tr>
<tr><td>la banque<\/td><td>the bank<\/td><\/tr>
</tr><td>le supermarché<\/td><td>the supermarket<\/td><\/tr>
<\/tbody>
<\/table>
<\/div>
<div class="lesson-rule">
<h4>💳 Paying<\/h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>Je paie par carte.<\/td><td>I'm paying by card.<\/td><\/tr>
<tr><td>Vous acceptez les chèques ?<\/td><td>Do you accept cheques?<\/td><\/tr>
<tr><td>Avez-vous la monnaie ?<\/td><td>Do you have change?<\/td><\/tr>
<tr><td>Un ticket de caisse, s'il vous plaît.<\/td><td>A receipt, please.<\/td><\/tr>
<\/tbody>
<\/table>
<\/div>
<div class="lesson-warning">⚠️ Many small French shops close at lunch (12h-14h). Always check opening hours!</div>
  `,
  qcm: [
    {
      id: "6-1",
      type: "qcm",
      question: "'The bakery' in French:",
      questionFr: "Comment dit-on 'la boulangerie' ?",
      options: ["La boulangerie", "La pharmacie", "La boucherie", "La fromagerie"],
      optionsEn: ["The bakery", "The pharmacy", "The butcher's", "The cheese shop"],
      correct: "La boulangerie",
      correctEn: "The bakery",
      explanation: "La boulangerie (*boo-lon-zhuh-REE*) = bakery. Le boulanger = the baker.",
      explanationFr: "La boulangerie = la boulangerie. Le boulanger = le boulanger."
    },
    {
      id: "6-2",
      type: "qcm",
      question: "'I'm paying by card.' in French:",
      questionFr: "Traduisez : 'Je paie par carte.'",
      options: ["Je paie par carte.", "Je paye carte.", "J'ai une carte.", "Carte s'il vous plaît."],
      optionsEn: ["I'm paying by card.", "I pay card.", "I have a card.", "Card please."],
      correct: "Je paie par carte.",
      correctEn: "I'm paying by card.",
      explanation: "Je paie par carte (*zhuh pay par KART*) = I'm paying by card. Espèces = cash.",
      explanationFr: "Je paie par carte = je paie par carte. Espèces = liquide."
    },
    {
      id: "6-3",
      type: "qcm",
      question: "'Do you have change?' in French:",
      questionFr: "Traduisez : 'Avez-vous la monnaie ?'",
      options: ["Avez-vous la monnaie ?", "Avez-vous de l'argent ?", "Vous avez change ?", "La monnaie vous ?"],
      optionsEn: ["Do you have change?", "Do you have money?", "You have change?", "The change you?"],
      correct: "Avez-vous la monnaie ?",
      correctEn: "Do you have change?",
      explanation: "La monnaie (*la mo-NAY*) = change (coins). La pièce = a coin.",
      explanationFr: "La monnaie = la monnaie. La pièce = une pièce."
    },
    {
      id: "6-4",
      type: "qcm",
      question: "'A receipt please.' in French:",
      questionFr: "Traduisez : 'Un ticket de caisse, s'il vous plaît.'",
      options: ["Un ticket de caisse, s'il vous plaît.", "Un reçu s'il vous plaît.", "La note s'il vous plaît.", "Le papier s'il vous plaît."],
      optionsEn: ["A receipt please.", "A receipt please (alternative).", "The bill please.", "The paper please."],
      correct: "Un ticket de caisse, s'il vous plaît.",
      correctEn: "A receipt please.",
      explanation: "Un ticket de caisse (*teekay de kess*) = receipt. Un reçu is also accepted.",
      explanationFr: "Un ticket de caisse = un ticket de caisse. Un reçu est aussi accepté."
    },
    {
      id: "6-5",
      type: "qcm",
      question: "'The pharmacy' in French:",
      questionFr: "Comment dit-on 'la pharmacie' ?",
      options: ["La pharmacie", "La boulangerie", "La droguerie", "La clinique"],
      optionsEn: ["The pharmacy", "The bakery", "The hardware store", "The clinic"],
      correct: "La pharmacie",
      correctEn: "The pharmacy",
      explanation: "La pharmacie (*far-ma-SEE*) = pharmacy/chemist. Look for the green cross!",
      explanationFr: "La pharmacie = la pharmacie. Cherchez la croix verte !"
    },
    {
      id: "6-6",
      type: "qcm",
      question: "'Is it open on Sundays?' in French:",
      questionFr: "Traduisez : 'C'est ouvert le dimanche ?'",
      options: ["C'est ouvert le dimanche ?", "Ouvert dimanche ?", "Vous ouvrez dimanche ?", "Le dimanche c'est quand ?"],
      optionsEn: ["Is it open on Sundays?", "Open Sunday?", "Do you open on Sunday?", "On Sunday it's when?"],
      correct: "C'est ouvert le dimanche ?",
      correctEn: "Is it open on Sundays?",
      explanation: "Ouvert (*oo-VAIR*) = open. Fermé = closed. Le dimanche = on Sundays.",
      explanationFr: "Ouvert = ouvert. Fermé = fermé. Le dimanche = le dimanche."
    },
    {
      id: "6-7",
      type: "qcm",
      question: "'What time do you close?' in French:",
      questionFr: "Comment dit-on 'Vous fermez à quelle heure ?'",
      options: ["Vous fermez à quelle heure ?", "Quelle heure fermer ?", "C'est quand la fermeture ?", "Vous êtes quand fermé ?"],
      optionsEn: ["What time do you close?", "What hour to close?", "When is closing?", "When are you closed?"],
      correct: "Vous fermez à quelle heure ?",
      correctEn: "What time do you close?",
      explanation: "Vous fermez (*voo fair-MAY*) = you close. À quelle heure = at what time.",
      explanationFr: "Vous fermez = vous fermez. À quelle heure = à quelle heure."
    },
    {
      id: "6-8",
      type: "qcm",
      question: "'The post office' in French:",
      questionFr: "Comment dit-on 'la poste' ?",
      options: ["La poste", "Le courrier", "La lettre", "Le bureau"],
      optionsEn: ["The post office", "The mail", "The letter", "The office"],
      correct: "La poste",
      correctEn: "The post office",
      explanation: "La poste (*la POST*) = the post office. To send: envoyer (*on-vwa-YAY*).",
      explanationFr: "La poste = la poste. Envoyer = envoyer."
    },
    {
      id: "6-9",
      type: "qcm",
      question: "'Excuse me, where is the till?' in French:",
      questionFr: "Traduisez : 'Excusez-moi, où est la caisse ?'",
      options: ["Excusez-moi, où est la caisse ?", "Pardon, caisse où ?", "S'il vous plaît caisse.", "Où payer ?"],
      optionsEn: ["Excuse me, where is the till?", "Sorry, till where?", "Please till.", "Where to pay?"],
      correct: "Excusez-moi, où est la caisse ?",
      correctEn: "Excuse me, where is the till?",
      explanation: "La caisse (*la KESS*) = the till / checkout. Excusez-moi to get attention politely.",
      explanationFr: "La caisse = la caisse. Excusez-moi pour attirer l'attention poliment."
    },
    {
      id: "6-10",
      type: "qcm",
      question: "'It's closed today.' in French:",
      questionFr: "Traduisez : 'C'est fermé aujourd'hui.'",
      options: ["C'est fermé aujourd'hui.", "Aujourd'hui fermé.", "C'est pas ouvert.", "Fermé est aujourd'hui."],
      optionsEn: ["It's closed today.", "Today closed.", "It's not open.", "Closed is today."],
      correct: "C'est fermé aujourd'hui.",
      correctEn: "It's closed today.",
      explanation: "Fermé (*fair-MAY*) = closed. Aujourd'hui = today. Demain = tomorrow.",
      explanationFr: "Fermé = fermé. Aujourd'hui = aujourd'hui. Demain = demain."
    }
  ],
  libre: [
    {
      id: "6-l1",
      type: "libre",
      question: "Translate: 'I'm looking for the supermarket.'",
      questionFr: "Traduisez : 'Je cherche le supermarché.'",
      correct: "Je cherche le supermarché.",
      correctEn: "I'm looking for the supermarket.",
      alternatives: [],
      explanation: "Chercher = to look for / search for.",
      explanationFr: "Chercher = chercher."
    },
    {
      id: "6-l2",
      type: "libre",
      question: "How do you say 'Is there a bakery nearby?'",
      questionFr: "Comment dit-on 'Il y a une boulangerie près d'ici ?'",
      correct: "Il y a une boulangerie près d'ici ?",
      correctEn: "Is there a bakery nearby?",
      alternatives: ["Y a-t-il une boulangerie près d'ici ?"],
      explanation: "Il y a = there is. Près d'ici = nearby.",
      explanationFr: "Il y a = il y a. Près d'ici = près d'ici."
    },
    {
      id: "6-l3",
      type: "libre",
      question: "Complete: 'Je paie ___ espèces.'",
      questionFr: "Complétez : 'Je paie ___ espèces.'",
      correct: "en",
      correctEn: "in",
      alternatives: [],
      explanation: "Payer en espèces = to pay in cash. Payer par carte = to pay by card.",
      explanationFr: "Payer en espèces = payer en liquide. Payer par carte = payer par carte."
    },
    {
      id: "6-l4",
      type: "libre",
      question: "Translate: 'A receipt please.'",
      questionFr: "Traduisez : 'Un ticket de caisse, s'il vous plaît.'",
      correct: "Un ticket de caisse, s'il vous plaît.",
      correctEn: "A receipt please.",
      alternatives: [],
      explanation: "Ticket de caisse is the most common term for receipt at a shop.",
      explanationFr: "Ticket de caisse est le terme le plus courant pour un reçu en magasin."
    },
    {
      id: "6-l5",
      type: "libre",
      question: "How do you ask 'What time do you open?'",
      questionFr: "Comment demande-t-on 'Vous ouvrez à quelle heure ?'",
      correct: "Vous ouvrez à quelle heure ?",
      correctEn: "What time do you open?",
      alternatives: ["À quelle heure vous ouvrez ?"],
      explanation: "Ouvrir = to open. Vous ouvrez = you open.",
      explanationFr: "Ouvrir = ouvrir. Vous ouvrez = vous ouvrez."
    },
    {
      id: "6-l6",
      type: "libre",
      question: "What is 'la pharmacie'?",
      questionFr: "Qu'est-ce que 'la pharmacie' ?",
      correct: "the pharmacy",
      correctEn: "the pharmacy",
      alternatives: ["pharmacy", "chemist"],
      explanation: "Recognised by the green cross. Open even during lunch in many towns!",
      explanationFr: "Reconnaissable à la croix verte. Ouvert même pendant le déjeuner dans beaucoup de villes !"
    },
    {
      id: "6-l7",
      type: "libre",
      question: "Translate: 'The bank is closed today.'",
      questionFr: "Traduisez : 'La banque est fermée aujourd'hui.'",
      correct: "La banque est fermée aujourd'hui.",
      correctEn: "The bank is closed today.",
      alternatives: [],
      explanation: "Fermée = closed (feminine, agrees with 'la banque').",
      explanationFr: "Fermée = fermée (féminin, accord avec 'la banque')."
    },
    {
      id: "6-l8",
      type: "libre",
      question: "Complete: 'Avez-vous ___ monnaie pour 20 euros ?'",
      questionFr: "Complétez : 'Avez-vous ___ monnaie pour 20 euros ?'",
      correct: "la",
      correctEn: "the",
      alternatives: [],
      explanation: "La monnaie = change. Avez-vous la monnaie pour 20 euros = do you have change for 20 euros?",
      explanationFr: "La monnaie = la monnaie. Avez-vous la monnaie pour 20 euros ?"
    },
    {
      id: "6-l9",
      type: "libre",
      question: "How do you say 'I'm looking for a chemist'?",
      questionFr: "Comment dit-on 'Je cherche une pharmacie' ?",
      correct: "Je cherche une pharmacie.",
      correctEn: "I'm looking for a chemist.",
      alternatives: [],
      explanation: "Chercher = to look for. Une pharmacie = a pharmacy.",
      explanationFr: "Chercher = chercher. Une pharmacie = une pharmacie."
    },
    {
      id: "6-l10",
      type: "libre",
      question: "Translate: 'Where is the post office, please?'",
      questionFr: "Traduisez : 'Où est la poste, s'il vous plaît ?'",
      correct: "Où est la poste, s'il vous plaît ?",
      correctEn: "Where is the post office, please?",
      alternatives: [],
      explanation: "Où est = where is. La poste = the post office.",
      explanationFr: "Où est = où est. La poste = la poste."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_06;
} else {
  window.LESSON_06 = LESSON_06;
}