// lesson-06.js -- At the Shops
const LESSON_06 = {
  id: 6,
  title: "At the Shops",
  titleFr: "Chez les commercants",
  objectiveEn: "Navigate French shops, pay, ask for help",
  objectiveFr: "Naviguer dans les magasins francais, payer, demander de l aide",
  hintEn: "Many French shops close 12h-14h and often all day Monday!",
  hintFr: "Beaucoup de magasins francais ferment de 12h a 14h et souvent tout le lundi !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Shops vocabulary</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>la boulangerie</td><td>the bakery</td></tr>
<tr><td>la pharmacie</td><td>the pharmacy</td></tr>
<tr><td>la poste</td><td>the post office</td></tr>
<tr><td>la banque</td><td>the bank</td></tr>
<tr><td>le supermarche</td><td>the supermarket</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Paying</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Je paie par carte.</td><td>I m paying by card.</td></tr>
<tr><td>Vous acceptez les cheques ?</td><td>Do you accept cheques?</td></tr>
<tr><td>Avez-vous la monnaie ?</td><td>Do you have change?</td></tr>
<tr><td>Un ticket de caisse, s il vous plait.</td><td>A receipt, please.</td></tr>
</table>
</div>
<div class="lesson-warning">Many small French shops close at lunch (12h-14h). Always check opening hours!</div>
  `,
  qcm: [
    {
      id: "06-1",
      type: "qcm",
      question: "The bakery in French:",
      questionFr: "La boulangerie en anglais :",
      options: ["La boulangerie","La pharmacie","La boucherie","La fromagerie"],
      optionsEn: ["The bakery","The pharmacy","The butcher","The cheese shop"],
      correct: "La boulangerie",
      correctEn: "The bakery",
      explanation: "La boulangerie (boo-lon-zhuh-REE) = bakery. Le boulanger = the baker.",
      explanationFr: "La boulangerie = la boulangerie. Le boulanger = le boulanger."
    },
    {
      id: "06-2",
      type: "qcm",
      question: "I m paying by card. in French:",
      questionFr: "Je paie par carte. en anglais :",
      options: ["Je paie par carte.","Je paye carte.","J ai une carte.","Carte s il vous plait."],
      optionsEn: ["I m paying by card.","I pay card.","I have a card.","Card please."],
      correct: "Je paie par carte.",
      correctEn: "I m paying by card.",
      explanation: "Je paie par carte (zhuh pay par KART) = I m paying by card. Especes = cash.",
      explanationFr: "Je paie par carte = je paie par carte. Especes = especes."
    },
    {
      id: "06-3",
      type: "qcm",
      question: "Do you have change? in French:",
      questionFr: "Avez-vous la monnaie ? en anglais :",
      options: ["Avez-vous la monnaie ?","Avez-vous de l argent ?","Vous avez change ?","La monnaie vous ?"],
      optionsEn: ["Do you have change?","Do you have money?","You have change?","The change you?"],
      correct: "Avez-vous la monnaie ?",
      correctEn: "Do you have change?",
      explanation: "La monnaie (la mo-NAY) = change (coins). La piece = a coin.",
      explanationFr: "La monnaie = la monnaie (pieces). La piece = une piece."
    },
    {
      id: "06-4",
      type: "qcm",
      question: "A receipt please. in French:",
      questionFr: "Un ticket de caisse, s il vous plait. en anglais :",
      options: ["Un ticket de caisse, s il vous plait.","Un recu s il vous plait.","La note s il vous plait.","Le papier s il vous plait."],
      optionsEn: ["A receipt, please.","A receipt please.","The bill please.","The paper please."],
      correct: "Un ticket de caisse, s il vous plait.",
      correctEn: "A receipt, please.",
      explanation: "Un ticket de caisse (teekay de kess) = receipt. Un recu is also accepted.",
      explanationFr: "Un ticket de caisse = un ticket de caisse. Un recu est aussi accepte."
    },
    {
      id: "06-5",
      type: "qcm",
      question: "The pharmacy in French:",
      questionFr: "La pharmacie en anglais :",
      options: ["La pharmacie","La boulangerie","La droguerie","La clinique"],
      optionsEn: ["The pharmacy","The bakery","The drugstore","The clinic"],
      correct: "La pharmacie",
      correctEn: "The pharmacy",
      explanation: "La pharmacie (far-ma-SEE) = pharmacy/chemist. Look for the green cross!",
      explanationFr: "La pharmacie = la pharmacie. Cherchez la croix verte !"
    },
    {
      id: "06-6",
      type: "qcm",
      question: "Is it open on Sundays? in French:",
      questionFr: "C est ouvert le dimanche ? en anglais :",
      options: ["C est ouvert le dimanche ?","Ouvert dimanche ?","Vous ouvrez dimanche ?","Le dimanche c est quand ?"],
      optionsEn: ["Is it open on Sundays?","Open Sunday?","You open Sunday?","Sunday is when?"],
      correct: "C est ouvert le dimanche ?",
      correctEn: "Is it open on Sundays?",
      explanation: "Ouvert (oo-VAIR) = open. Ferme = closed. Le dimanche = on Sundays.",
      explanationFr: "Ouvert = ouvert. Ferme = ferme. Le dimanche = le dimanche."
    },
    {
      id: "06-7",
      type: "qcm",
      question: "What time do you close? in French:",
      questionFr: "Vous fermez a quelle heure ? en anglais :",
      options: ["Vous fermez a quelle heure ?","Quelle heure fermer ?","C est quand la fermeture ?","Vous etes quand ferme ?"],
      optionsEn: ["What time do you close?","What time close?","When is the closing?","You are when closed?"],
      correct: "Vous fermez a quelle heure ?",
      correctEn: "What time do you close?",
      explanation: "Vous fermez (voo fair-MAY) = you close. A quelle heure = at what time.",
      explanationFr: "Vous fermez = vous fermez. A quelle heure = a quelle heure."
    },
    {
      id: "06-8",
      type: "qcm",
      question: "The post office in French:",
      questionFr: "La poste en anglais :",
      options: ["La poste","Le courrier","La lettre","Le bureau"],
      optionsEn: ["The post office","The mail","The letter","The office"],
      correct: "La poste",
      correctEn: "The post office",
      explanation: "La poste (la POST) = the post office. To send: envoyer (on-vwa-YAY).",
      explanationFr: "La poste = la poste. Pour envoyer : envoyer."
    },
    {
      id: "06-9",
      type: "qcm",
      question: "Excuse me, where is the till? in French:",
      questionFr: "Excusez-moi, ou est la caisse ? en anglais :",
      options: ["Excusez-moi, ou est la caisse ?","Pardon, caisse ou ?","S il vous plait caisse.","Ou payer ?"],
      optionsEn: ["Excuse me, where is the till?","Sorry, till where?","Please till.","Where pay?"],
      correct: "Excusez-moi, ou est la caisse ?",
      correctEn: "Excuse me, where is the till?",
      explanation: "La caisse (la KESS) = the till / checkout. Excusez-moi to get attention politely.",
      explanationFr: "La caisse = la caisse. Excusez-moi pour attirer l attention poliment."
    },
    {
      id: "06-10",
      type: "qcm",
      question: "It s closed today. in French:",
      questionFr: "C est ferme aujourd hui. en anglais :",
      options: ["C est ferme aujourd hui.","Aujourd hui ferme.","C est pas ouvert.","Ferme est aujourd hui."],
      optionsEn: ["It s closed today.","Today closed.","It s not open.","Closed is today."],
      correct: "C est ferme aujourd hui.",
      correctEn: "It s closed today.",
      explanation: "Ferme (fair-MAY) = closed. Aujourd hui = today. Demain = tomorrow.",
      explanationFr: "Ferme = ferme. Aujourd hui = aujourd hui. Demain = demain."
    }
  ],
  libre: [
    {
      id: "06-l1",
      type: "libre",
      question: "Translate: I m looking for the supermarket.",
      questionFr: "Traduisez : Je cherche le supermarche.",
      correct: "Je cherche le supermarche.",
      correctEn: "I m looking for the supermarket.",
      alternatives: [],
      explanation: "Chercher = to look for / search for.",
      explanationFr: "Chercher = chercher."
    },
    {
      id: "06-l2",
      type: "libre",
      question: "How do you say Is there a bakery nearby?",
      questionFr: "Comment dit-on Il y a une boulangerie pres d ici ?",
      correct: "Il y a une boulangerie pres d ici ?",
      correctEn: "Is there a bakery nearby?",
      alternatives: ["Y a-t-il une boulangerie pres d ici ?"],
      explanation: "Il y a = there is. Pres d ici = nearby.",
      explanationFr: "Il y a = il y a. Pres d ici = pres d ici."
    },
    {
      id: "06-l3",
      type: "libre",
      question: "Complete: Je paie ___ especes.",
      questionFr: "Completez : Je paie ___ especes.",
      correct: "en",
      correctEn: "in",
      alternatives: [],
      explanation: "Payer en especes = to pay in cash. Payer par carte = to pay by card.",
      explanationFr: "Payer en especes = payer en especes. Payer par carte = payer par carte."
    },
    {
      id: "06-l4",
      type: "libre",
      question: "Translate: A receipt please.",
      questionFr: "Traduisez : Un ticket de caisse, s il vous plait.",
      correct: "Un ticket de caisse, s il vous plait.",
      correctEn: "A receipt, please.",
      alternatives: [],
      explanation: "Ticket de caisse is the most common term for receipt at a shop.",
      explanationFr: "Ticket de caisse est le terme le plus courant pour le recu en magasin."
    },
    {
      id: "06-l5",
      type: "libre",
      question: "How do you ask What time do you open?",
      questionFr: "Comment demande-t-on Vous ouvrez a quelle heure ?",
      correct: "Vous ouvrez a quelle heure ?",
      correctEn: "What time do you open?",
      alternatives: ["A quelle heure vous ouvrez ?"],
      explanation: "Ouvrir = to open. Vous ouvrez = you open.",
      explanationFr: "Ouvrir = ouvrir. Vous ouvrez = vous ouvrez."
    },
    {
      id: "06-l6",
      type: "libre",
      question: "What is la pharmacie?",
      questionFr: "Que signifie la pharmacie ?",
      correct: "the pharmacy",
      correctEn: "the pharmacy",
      alternatives: ["pharmacy","chemist"],
      explanation: "Recognised by the green cross. Open even during lunch in many towns!",
      explanationFr: "Reconnue a la croix verte. Ouverte meme pendant le dejeuner dans beaucoup de villes !"
    },
    {
      id: "06-l7",
      type: "libre",
      question: "Translate: The bank is closed today.",
      questionFr: "Traduisez : La banque est fermee aujourd hui.",
      correct: "La banque est fermee aujourd hui.",
      correctEn: "The bank is closed today.",
      alternatives: [],
      explanation: "Fermee = closed (feminine, agrees with la banque).",
      explanationFr: "Fermee = fermee (feminin, s accorde avec la banque)."
    },
    {
      id: "06-l8",
      type: "libre",
      question: "Complete: Avez-vous ___ monnaie pour 20 euros ?",
      questionFr: "Completez : Avez-vous ___ monnaie pour 20 euros ?",
      correct: "la",
      correctEn: "the",
      alternatives: [],
      explanation: "La monnaie = change. Avez-vous la monnaie pour 20 euros = do you have change for 20 euros?",
      explanationFr: "La monnaie = la monnaie. Avez-vous la monnaie pour 20 euros ?"
    },
    {
      id: "06-l9",
      type: "libre",
      question: "How do you say I m looking for a chemist?",
      questionFr: "Comment dit-on Je cherche une pharmacie ?",
      correct: "Je cherche une pharmacie.",
      correctEn: "I m looking for a chemist.",
      alternatives: [],
      explanation: "Chercher = to look for. Une pharmacie = a pharmacy.",
      explanationFr: "Chercher = chercher. Une pharmacie = une pharmacie."
    },
    {
      id: "06-l10",
      type: "libre",
      question: "Translate: Where is the post office, please?",
      questionFr: "Traduisez : Ou est la poste, s il vous plait ?",
      correct: "Ou est la poste, s il vous plait ?",
      correctEn: "Where is the post office, please?",
      alternatives: [],
      explanation: "Ou est = where is. La poste = the post office.",
      explanationFr: "Ou est = ou est. La poste = la poste."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_06;
} else {
  window.LESSON_06 = LESSON_06;
}
