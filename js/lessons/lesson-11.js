// lesson-11.js — Daily Life in France 🇫🇷
const LESSON_11 = {
  id: 11,
  title: `Daily Life in France 🇫🇷`,
  titleFr: `Vie quotidienne en France`,
  objectiveEn: `Handle admin, services and practical French daily life`,
  objectiveFr: `Gerer l'administration, les services et la vie quotidienne pratique en France`,
  hintEn: `Bring your ID (CNI/passport) and carte Vitale to all admin appointments!`,
  hintFr: `Apportez votre piece d'identite (CNI/passeport) et carte Vitale a tous les rendez-vous administratifs !`,
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🏛️ Administrative vocabulary</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>la mairie</td><td>town hall</td></tr>
<tr><td>la prefecture</td><td>prefecture (admin centre)</td></tr>
<tr><td>la Securite Sociale</td><td>French health insurance</td></tr>
<tr><td>la carte Vitale</td><td>health insurance card</td></tr>
<tr><td>le medecin traitant</td><td>GP / family doctor</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>🌐 Useful services</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>la box internet</td><td>internet router/package</td></tr>
<tr><td>EDF (electricite)</td><td>electricity provider</td></tr>
<tr><td>la dechetterie</td><td>recycling/waste centre</td></tr>
<tr><td>le controle technique</td><td>MOT / vehicle inspection</td></tr>
</table>
</div>
<div class="lesson-example">
<strong>Exemple :</strong> Je dois aller a la mairie pour ma carte de sejour. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">I need to go to the town hall for my residency card.</span>
</div>
  `,
  qcm: [
    {
      id: `11-1`,
      type: `qcm`,
      question: `Where do you go to change your address officially?`,
      questionFr: `Ou allez-vous pour changer votre adresse officiellement ?`,
      options: [`La mairie`,`La pharmacie`,`La poste`,`Le supermarche`],
      optionsEn: [`The town hall`,`The pharmacy`,`The post office`,`The supermarket`],
      correct: `La mairie`,
      correctEn: `The town hall`,
      explanation: `La mairie (town hall) handles address changes, civil records, local permits, and much more.`,
      explanationFr: `La mairie gere les changements d'adresse, l'etat civil, les permis locaux, et bien plus.`
    },
    {
      id: `11-2`,
      type: `qcm`,
      question: `What is the carte Vitale?`,
      questionFr: `Qu'est-ce que la carte Vitale ?`,
      options: [`French health insurance card`,`A debit card`,`A driving licence`,`A library card`],
      optionsEn: [`French health insurance card`,`A debit card`,`A driving licence`,`A library card`],
      correct: `French health insurance card`,
      correctEn: `French health insurance card`,
      explanation: `La carte Vitale is your French health insurance card. Keep it with you at all times!`,
      explanationFr: `La carte Vitale est votre carte d'assurance maladie francaise. Gardez-la toujours sur vous !`
    },
    {
      id: `11-3`,
      type: `qcm`,
      question: `I need to make an appointment with my doctor. in French:`,
      questionFr: `Je dois prendre rendez-vous avec mon medecin. en anglais :`,
      options: [`Je dois prendre rendez-vous avec mon medecin.`,`Je dois voir le docteur.`,`J'ai besoin docteur.`,`Je vais docteur.`],
      optionsEn: [`I need to make an appointment with my doctor.`,`I need to see the doctor.`,`I need doctor.`,`I go doctor.`],
      correct: `Je dois prendre rendez-vous avec mon medecin.`,
      correctEn: `I need to make an appointment with my doctor.`,
      explanation: `Prendre rendez-vous (*pron-druh ron-day-VOO*) = to make an appointment.`,
      explanationFr: `Prendre rendez-vous = prendre rendez-vous.`
    },
    {
      id: `11-4`,
      type: `qcm`,
      question: `What is la dechetterie?`,
      questionFr: `Qu'est-ce que la dechetterie ?`,
      options: [`The recycling/waste centre`,`The bakery`,`The police station`,`The supermarket`],
      optionsEn: [`The recycling/waste centre`,`The bakery`,`The police station`,`The supermarket`],
      correct: `The recycling/waste centre`,
      correctEn: `The recycling/waste centre`,
      explanation: `La dechetterie is where you take large waste, electronics, old paint. There's usually one per town.`,
      explanationFr: `La dechetterie est ou vous emmenez les gros dechets, electronique, vieille peinture. Il y en a generalement une par ville.`
    },
    {
      id: `11-5`,
      type: `qcm`,
      question: `The internet is not working. in French:`,
      questionFr: `Internet ne marche pas. en anglais :`,
      options: [`Internet ne marche pas.`,`La box est cassee.`,`Je n'ai pas internet.`,`Internet est mort.`],
      optionsEn: [`The internet is not working.`,`The box is broken.`,`I don't have internet.`,`Internet is dead.`],
      correct: `Internet ne marche pas.`,
      correctEn: `The internet is not working.`,
      explanation: `Marcher (*mar-SHAY*) in French means to work (for machines). La box internet = your router.`,
      explanationFr: `Marcher en francais signifie fonctionner (pour les machines). La box internet = votre routeur.`
    },
    {
      id: `11-6`,
      type: `qcm`,
      question: `The electricity bill in French:`,
      questionFr: `La facture d'electricite en anglais :`,
      options: [`La facture d'electricite`,`Le billet electrique`,`La note de courant`,`Le papier EDF`],
      optionsEn: [`The electricity bill`,`The electric ticket`,`The current note`,`The EDF paper`],
      correct: `La facture d'electricite`,
      correctEn: `The electricity bill`,
      explanation: `Une facture (*fak-TUER*) = a bill/invoice. EDF is the main French electricity provider.`,
      explanationFr: `Une facture = une facture. EDF est le principal fournisseur d'electricite francais.`
    },
    {
      id: `11-7`,
      type: `qcm`,
      question: `I need to register at the town hall. in French:`,
      questionFr: `Je dois m'inscrire a la mairie. en anglais :`,
      options: [`Je dois m'inscrire a la mairie.`,`Je vais mairie.`,`Je dois mairie.`,`Je m'inscris mairie.`],
      optionsEn: [`I need to register at the town hall.`,`I go town hall.`,`I need town hall.`,`I register town hall.`],
      correct: `Je dois m'inscrire a la mairie.`,
      correctEn: `I need to register at the town hall.`,
      explanation: `S'inscrire (*san-SKREER*) = to register. M'inscrire = to register myself.`,
      explanationFr: `S'inscrire = s'inscrire. M'inscrire = m'inscrire.`
    },
    {
      id: `11-8`,
      type: `qcm`,
      question: `The rubbish collection is on Thursday. in French:`,
      questionFr: `La collecte des ordures est le jeudi. en anglais :`,
      options: [`La collecte des ordures est le jeudi.`,`Les poubelles jeudi.`,`Ramassage poubelle jeudi.`,`Collecte jeudi ordures.`],
      optionsEn: [`The rubbish collection is on Thursday.`,`The bins Thursday.`,`Rubbish collection Thursday.`,`Collection Thursday rubbish.`],
      correct: `La collecte des ordures est le jeudi.`,
      correctEn: `The rubbish collection is on Thursday.`,
      explanation: `La collecte (*kol-EKT*) = collection. Des ordures = of rubbish/waste.`,
      explanationFr: `La collecte = la collecte. Des ordures = des ordures.`
    },
    {
      id: `11-9`,
      type: `qcm`,
      question: `How do you say My car needs a service?`,
      questionFr: `Comment dit-on Ma voiture a besoin d'une revision ?`,
      options: [`Ma voiture a besoin d'une revision.`,`Mon voiture reparation.`,`Ma voiture est cassee.`,`Je dois garage.`],
      optionsEn: [`My car needs a service.`,`My car repair.`,`My car is broken.`,`I need garage.`],
      correct: `Ma voiture a besoin d'une revision.`,
      correctEn: `My car needs a service.`,
      explanation: `Une revision (*ray-vee-ZYON*) = a car service. Besoin de = need.`,
      explanationFr: `Une revision = une revision. Besoin de = besoin de.`
    },
    {
      id: `11-10`,
      type: `qcm`,
      question: `I need to renew my residency card. in French:`,
      questionFr: `Je dois renouveler ma carte de sejour. en anglais :`,
      options: [`Je dois renouveler ma carte de sejour.`,`Je dois carte nouveau.`,`Ma carte est vieille.`,`Renouveler sejour.`],
      optionsEn: [`I need to renew my residency card.`,`I need card new.`,`My card is old.`,`Renew stay.`],
      correct: `Je dois renouveler ma carte de sejour.`,
      correctEn: `I need to renew my residency card.`,
      explanation: `Renouveler (*ruh-noo-vuh-LAY*) = to renew. La carte de sejour = residency permit.`,
      explanationFr: `Renouveler = renouveler. La carte de sejour = la carte de sejour.`
    }
  ],
  libre: [
    {
      id: `11-l1`,
      type: `libre`,
      question: `Translate: I need to go to the town hall.`,
      questionFr: `Traduisez : Je dois aller a la mairie.`,
      correct: `Je dois aller a la mairie.`,
      correctEn: `I need to go to the town hall.`,
      alternatives: [],
      explanation: `Je dois + infinitive = I must/need to. La mairie = town hall.`,
      explanationFr: `Je dois + infinitif = je dois. La mairie = la mairie.`
    },
    {
      id: `11-l2`,
      type: `libre`,
      question: `How do you say My internet isn't working?`,
      questionFr: `Comment dit-on Mon internet ne marche pas ?`,
      correct: `Mon internet ne marche pas.`,
      correctEn: `My internet isn't working.`,
      alternatives: [`Ma box ne marche pas.`],
      explanation: `Ne marche pas = doesn't work (for machines/services).`,
      explanationFr: `Ne marche pas = ne marche pas (pour les machines/services).`
    },
    {
      id: `11-l3`,
      type: `libre`,
      question: `What is la carte Vitale used for?`,
      questionFr: `A quoi sert la carte Vitale ?`,
      correct: `French health insurance`,
      correctEn: `French health insurance`,
      alternatives: [`health insurance card`,`Securite Sociale`],
      explanation: `Always carry it to doctor, pharmacy and hospital appointments.`,
      explanationFr: `Gardez-la toujours sur vous pour les rendez-vous chez le medecin, la pharmacie et l'hopital.`
    },
    {
      id: `11-l4`,
      type: `libre`,
      question: `Complete: Je dois prendre ___ avec mon medecin.`,
      questionFr: `Completez : Je dois prendre ___ avec mon medecin.`,
      correct: `rendez-vous`,
      correctEn: `an appointment`,
      alternatives: [],
      explanation: `Prendre rendez-vous = to make an appointment. Essential phrase!`,
      explanationFr: `Prendre rendez-vous = prendre rendez-vous. Phrase essentielle !`
    },
    {
      id: `11-l5`,
      type: `libre`,
      question: `Translate: The electricity bill arrived today.`,
      questionFr: `Traduisez : La facture d'electricite est arrivee aujourd'hui.`,
      correct: `La facture d'electricite est arrivee aujourd'hui.`,
      correctEn: `The electricity bill arrived today.`,
      alternatives: [],
      explanation: `La facture = the bill. Arrivee = arrived (feminine agreement with la facture).`,
      explanationFr: `La facture = la facture. Arrivee = arrivee (accord feminin avec la facture).`
    },
    {
      id: `11-l6`,
      type: `libre`,
      question: `How do you say I need to register my car?`,
      questionFr: `Comment dit-on Je dois immatriculer ma voiture ?`,
      correct: `Je dois immatriculer ma voiture.`,
      correctEn: `I need to register my car.`,
      alternatives: [`Je dois faire la carte grise.`],
      explanation: `La carte grise = vehicle registration document. Immatriculer = to register (a vehicle).`,
      explanationFr: `La carte grise = la carte grise. Immatriculer = immatriculer (un vehicule).`
    },
    {
      id: `11-l7`,
      type: `libre`,
      question: `Translate: Is there a recycling centre nearby?`,
      questionFr: `Traduisez : Il y a une dechetterie pres d'ici ?`,
      correct: `Il y a une dechetterie pres d'ici ?`,
      correctEn: `Is there a recycling centre nearby?`,
      alternatives: [],
      explanation: `La dechetterie = recycling/waste centre. Pres d'ici = nearby.`,
      explanationFr: `La dechetterie = la dechetterie. Pres d'ici = pres d'ici.`
    },
    {
      id: `11-l8`,
      type: `libre`,
      question: `What does ca ne marche pas mean?`,
      questionFr: `Que signifie ca ne marche pas ?`,
      correct: `it doesn't work`,
      correctEn: `it doesn't work`,
      alternatives: [`it's not working`],
      explanation: `Marcher = to work (for machines, services). Ca ne marche pas = it's not working.`,
      explanationFr: `Marcher = marcher (pour les machines, services). Ca ne marche pas = ca ne marche pas.`
    },
    {
      id: `11-l9`,
      type: `libre`,
      question: `Complete: Je dois m'___ a la mairie.`,
      questionFr: `Completez : Je dois m'___ a la mairie.`,
      correct: `inscrire`,
      correctEn: `register`,
      alternatives: [],
      explanation: `S'inscrire = to register. Je dois m'inscrire = I need to register myself.`,
      explanationFr: `S'inscrire = s'inscrire. Je dois m'inscrire = je dois m'inscrire.`
    },
    {
      id: `11-l10`,
      type: `libre`,
      question: `Translate: My residency card expires next month.`,
      questionFr: `Traduisez : Ma carte de sejour expire le mois prochain.`,
      correct: `Ma carte de sejour expire le mois prochain.`,
      correctEn: `My residency card expires next month.`,
      alternatives: [],
      explanation: `Expirer = to expire. Le mois prochain = next month.`,
      explanationFr: `Expirer = expirer. Le mois prochain = le mois prochain.`
    }
  ]
};

if (typeof module !== `undefined` && module.exports) {
  module.exports = LESSON_11;
} else {
  window.LESSON_11 = LESSON_11;
}
