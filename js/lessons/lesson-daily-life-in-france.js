// lesson-daily-life-in-france.js
const LESSON_11 = {
  id: 11,
  title: "Daily Life in France",
  titleFr: "La vie quotidienne en France",
  objectiveEn: "Handle admin, services and practical French daily life",
  objectiveFr: "Gérer les démarches administratives, les services et la vie quotidienne pratique en français",
  hintEn: "Bring your ID (CNI/passport) and carte Vitale to all admin appointments!",
  hintFr: "Apportez votre pièce d'identité (CNI/passeport) et votre carte Vitale à tous les rendez-vous administratifs !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🏛️ Administrative vocabulary</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>la mairie</td><td>town hall</td></tr>
<tr><td>la préfecture</td><td>prefecture (admin centre)</td></tr>
<tr><td>la Sécurité Sociale</td><td>French health insurance</td></tr>
<tr><td>la carte Vitale</td><td>health insurance card</td></tr>
<tr><td>le médecin traitant</td><td>GP / family doctor</td></tr>
</tbody>
</table>
</div>
<div class="lesson-rule">
<h4>🌐 Useful services</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>la box internet</td><td>internet router/package</td></tr>
<tr><td>EDF (électricité)</td><td>electricity provider</td></tr>
</tr><td>la déchetterie</td><td>recycling/waste centre</td></tr>
<tr><td>le contrôle technique</td><td>MOT / vehicle inspection</td></tr>
</tbody>
</table>
</div>
<div class="lesson-example">
<strong>Exemple :</strong> Je dois aller à la mairie pour ma carte de séjour. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">I need to go to the town hall for my residency card.</span>
</div>
  `,
  qcm: [
    {
      id: "11-1",
      type: "qcm",
      question: "Where do you go to change your address officially?",
      options: ["La mairie", "La pharmacie", "La poste", "Le supermarché"],
      correct: "La mairie",
      explanation: "La mairie (town hall) handles address changes, civil records, local permits, and much more.",
      explanationFr: "La mairie gère les changements d'adresse, les actes d'état civil, les permis locaux, et bien plus."
    },
    {
      id: "11-2",
      type: "qcm",
      question: "What is the 'carte Vitale'?",
      options: ["French health insurance card", "A debit card", "A driving licence", "A library card"],
      correct: "French health insurance card",
      explanation: "La carte Vitale is your French health insurance card. Keep it with you at all times!",
      explanationFr: "La carte Vitale est votre carte d'assurance maladie française. Gardez-la toujours sur vous !"
    },
    {
      id: "11-3",
      type: "qcm",
      question: "'I need to make an appointment with my doctor.' in French:",
      options: ["Je dois prendre rendez-vous avec mon médecin.", "Je dois voir le docteur.", "J'ai besoin docteur.", "Je vais docteur."],
      correct: "Je dois prendre rendez-vous avec mon médecin.",
      explanation: "Prendre rendez-vous (*pron-druh ron-day-VOO*) = to make an appointment.",
      explanationFr: "Prendre rendez-vous = prendre rendez-vous."
    },
    {
      id: "11-4",
      type: "qcm",
      question: "What is 'la déchetterie'?",
      options: ["The recycling/waste centre", "The bakery", "The police station", "The supermarket"],
      correct: "The recycling/waste centre",
      explanation: "La déchetterie is where you take large waste, electronics, old paint. There's usually one per town.",
      explanationFr: "La déchetterie est l'endroit où l'on apporte les déchets volumineux, les appareils électroniques, les vieilles peintures. Il y en a généralement une par commune."
    },
    {
      id: "11-5",
      type: "qcm",
      question: "'The internet is not working.' in French:",
      options: ["Internet ne marche pas.", "La box est cassée.", "Je n'ai pas internet.", "Internet est mort."],
      correct: "Internet ne marche pas.",
      explanation: "Marcher (*mar-SHAY*) in French means to work (for machines). La box internet = your router.",
      explanationFr: "Marcher en français signifie fonctionner (pour les machines). La box internet = votre routeur."
    },
    {
      id: "11-6",
      type: "qcm",
      question: "'The electricity bill' in French:",
      options: ["La facture d'électricité", "Le billet électrique", "La note de courant", "Le papier EDF"],
      correct: "La facture d'électricité",
      explanation: "Une facture (*fak-TUER*) = a bill/invoice. EDF is the main French electricity provider.",
      explanationFr: "Une facture = une facture. EDF est le principal fournisseur d'électricité français."
    },
    {
      id: "11-7",
      type: "qcm",
      question: "'I need to register at the town hall.' in French:",
      options: ["Je dois m'inscrire à la mairie.", "Je vais mairie.", "Je dois mairie.", "Je m'inscris mairie."],
      correct: "Je dois m'inscrire à la mairie.",
      explanation: "S'inscrire (*san-SKREER*) = to register. M'inscrire = to register myself.",
      explanationFr: "S'inscrire = s'inscrire. M'inscrire = m'inscrire."
    },
    {
      id: "11-8",
      type: "qcm",
      question: "'The rubbish collection is on Thursday.' in French:",
      options: ["La collecte des ordures est le jeudi.", "Les poubelles jeudi.", "Ramassage poubelle jeudi.", "Collecte jeudi ordures."],
      correct: "La collecte des ordures est le jeudi.",
      explanation: "La collecte (*kol-EKT*) = collection. Des ordures = of rubbish/waste.",
      explanationFr: "La collecte = la collecte. Des ordures = des ordures."
    },
    {
      id: "11-9",
      type: "qcm",
      question: "How do you say 'My car needs a service'?",
      options: ["Ma voiture a besoin d'une révision.", "Mon voiture réparation.", "Ma voiture est cassée.", "Je dois garage."],
      correct: "Ma voiture a besoin d'une révision.",
      explanation: "Une révision (*ray-vee-ZYON*) = a car service. Besoin de = need.",
      explanationFr: "Une révision = une révision. Besoin de = besoin de."
    },
    {
      id: "11-10",
      type: "qcm",
      question: "'I need to renew my residency card.' in French:",
      options: ["Je dois renouveler ma carte de séjour.", "Je dois carte nouveau.", "Ma carte est vieille.", "Renouveler séjour."],
      correct: "Je dois renouveler ma carte de séjour.",
      explanation: "Renouveler (*ruh-noo-vuh-LAY*) = to renew. La carte de séjour = residency permit.",
      explanationFr: "Renouveler = renouveler. La carte de séjour = la carte de séjour."
    }
  ],
  libre: [
    {
      id: "11-l1",
      type: "libre",
      question: "Translate: 'I need to go to the town hall.'",
      correct: "Je dois aller à la mairie.",
      alternatives: [],
      explanation: "Je dois + infinitive = I must/need to. La mairie = town hall.",
      explanationFr: "Je dois + infinitif = je dois. La mairie = la mairie."
    },
    {
      id: "11-l2",
      type: "libre",
      question: "How do you say 'My internet isn't working'?",
      correct: "Mon internet ne marche pas.",
      alternatives: ["Ma box ne marche pas."],
      explanation: "Ne marche pas = doesn't work (for machines/services).",
      explanationFr: "Ne marche pas = ne fonctionne pas (pour les machines/services)."
    },
    {
      id: "11-l3",
      type: "libre",
      question: "What is 'la carte Vitale' used for?",
      correct: "French health insurance",
      alternatives: ["health insurance card", "Sécurité Sociale"],
      explanation: "Always carry it to doctor, pharmacy and hospital appointments.",
      explanationFr: "Ayez-la toujours sur vous chez le médecin, à la pharmacie et à l'hôpital."
    },
    {
      id: "11-l4",
      type: "libre",
      question: "Complete: 'Je dois prendre ___ avec mon médecin.'",
      correct: "rendez-vous",
      alternatives: [],
      explanation: "Prendre rendez-vous = to make an appointment. Essential phrase!",
      explanationFr: "Prendre rendez-vous = prendre rendez-vous. Phrase essentielle !"
    },
    {
      id: "11-l5",
      type: "libre",
      question: "Translate: 'The electricity bill arrived today.'",
      correct: "La facture d'électricité est arrivée aujourd'hui.",
      alternatives: [],
      explanation: "La facture = the bill. Arrivée = arrived (feminine agreement with la facture).",
      explanationFr: "La facture = la facture. Arrivée = arrivée (accord féminin avec la facture)."
    },
    {
      id: "11-l6",
      type: "libre",
      question: "How do you say 'I need to register my car'?",
      correct: "Je dois immatriculer ma voiture.",
      alternatives: ["Je dois faire la carte grise."],
      explanation: "La carte grise = vehicle registration document. Immatriculer = to register (a vehicle).",
      explanationFr: "La carte grise = la carte grise. Immatriculer = immatriculer."
    },
    {
      id: "11-l7",
      type: "libre",
      question: "Translate: 'Is there a recycling centre nearby?'",
      correct: "Il y a une déchetterie près d'ici ?",
      alternatives: [],
      explanation: "La déchetterie = recycling/waste centre. Près d'ici = nearby.",
      explanationFr: "La déchetterie = la déchetterie. Près d'ici = près d'ici."
    },
    {
      id: "11-l8",
      type: "libre",
      question: "What does 'ça ne marche pas' mean?",
      correct: "it doesn't work",
      alternatives: ["it's not working"],
      explanation: "Marcher = to work (for machines, services). Ça ne marche pas = it's not working.",
      explanationFr: "Marcher = fonctionner (pour machines, services). Ça ne marche pas = ça ne fonctionne pas."
    },
    {
      id: "11-l9",
      type: "libre",
      question: "Complete: 'Je dois m'___ à la mairie.'",
      correct: "inscrire",
      alternatives: [],
      explanation: "S'inscrire = to register. Je dois m'inscrire = I need to register myself.",
      explanationFr: "S'inscrire = s'inscrire. Je dois m'inscrire = je dois m'inscrire."
    },
    {
      id: "11-l10",
      type: "libre",
      question: "Translate: 'My residency card expires next month.'",
      correct: "Ma carte de séjour expire le mois prochain.",
      alternatives: [],
      explanation: "Expirer = to expire. Le mois prochain = next month.",
      explanationFr: "Expirer = expirer. Le mois prochain = le mois prochain."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_11;
} else {
  window.LESSON_11 = LESSON_11;
}