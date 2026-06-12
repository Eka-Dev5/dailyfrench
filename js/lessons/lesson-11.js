// lesson-11.js -- French Administration
const LESSON_11 = {
  id: 11,
  title: "French Administration",
  titleFr: "L'Administration Francaise",
  objectiveEn: "Navigate basic French admin tasks: taxes, health, utilities, housing",
  objectiveFr: "Naviguer dans les taches administratives de base : impots, sante, services, logement",
  hintEn: "Always keep copies of everything -- French administration loves paperwork!",
  hintFr: "Gardez toujours des copies de tout -- l'administration francaise adore la paperasse !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Key administrative terms</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>la prefecture</td><td><em>*la pray-fek-TOOR*</em></td><td>the prefecture <!-- *thuh pree-FEK-choor* --></td></tr>
<tr><td>la Securite Sociale</td><td><em>*la say-kew-ree-TAY so-see-AL*</em></td><td>Social Security <!-- *SOH-shul see-KYOO-ruh-tee* --></td></tr>
<tr><td>la carte Vitale</td><td><em>*la kart vee-TAL*</em></td><td>health card <!-- *helth card* --></td></tr>
<tr><td>le medecin traitant</td><td><em>*luh mayd-SAN tre-TAN*</em></td><td>GP / family doctor <!-- *jee-pee / FAM-uh-lee dok-tur* --></td></tr>
<tr><td>la box internet</td><td><em>*la boks in-tair-NET*</em></td><td>internet box / router <!-- *IN-tur-net boks / ROW-tur* --></td></tr>
<tr><td>EDF (electricite)</td><td><em>*ay-day-EFF (ay-lek-tree-see-TAY)*</em></td><td>electricity provider <!-- *ee-lek-TRIS-i-tee proh-VY-dur* --></td></tr>
<tr><td>la dechetterie</td><td><em>*la day-shet-REE*</em></td><td>recycling centre <!-- *ree-SY-kling sen-tur* --></td></tr>
<tr><td>le controle technique</td><td><em>*luh kon-TROL tek-NEEK*</em></td><td>MOT / vehicle inspection <!-- *em-oh-tee / VEE-i-kul in-SPEK-shun* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Useful admin phrases</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>Je voudrais faire une demande de...</td><td><em>*zhuh voo-DRAY fair oon duh-MON duh...*</em></td><td>I would like to apply for... <!-- *eye wood lye too uh-PLY for...* --></td></tr>
<tr><td>Ou puis-je trouver le formulaire ?</td><td><em>*oo pweezh troo-VAY luh for-moo-LAIR*</em></td><td>Where can I find the form? <!-- *WAIR kan eye fynd thuh form* --></td></tr>
<tr><td>Quels sont les documents necessaires ?</td><td><em>*kel son lay dok-oo-MON nay-say-SAIR*</em></td><td>What documents are needed? <!-- *wot DOK-oo-munts ar NEE-ded* --></td></tr>
<tr><td>Je n'ai pas encore recu...</td><td><em>*zhuh nay pah on-KOR ruh-SEW...*</em></td><td>I haven't received... yet <!-- *eye HAV-unt ree-SEEVD... yet* --></td></tr>
<tr><td>Pouvez-vous me faire une attestation ?</td><td><em>*poo-vay-VOO muh fair oon ah-tay-sta-SYON*</em></td><td>Can you give me a certificate? <!-- *kan yoo giv mee uh sur-TIF-i-kit* --></td></tr>
<tr><td>Je voudrais prendre un rendez-vous.</td><td><em>*zhuh voo-DRAY pron-druh uhn ron-day-VOO*</em></td><td>I would like to make an appointment. <!-- *eye wood lye too mayk an uh-POYNT-munt* --></td></tr>
</table>
</div>
<div class="lesson-warning">In France, <strong>la carte Vitale</strong> is essential for healthcare. Always carry it! The <strong>medecin traitant</strong> is your registered GP -- you must choose one.</div>
<div class="lesson-example">
-- Bonjour, je voudrais faire une demande de carte Vitale. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Hello, I would like to apply for a Vitale card.</span><br>
-- Tres bien. Voici le formulaire et la liste des documents necessaires. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Very well. Here is the form and the list of required documents.</span>
</div>
  `,
  qcm: [
    {
      id: "11-1",
      type: "qcm",
      question: "The prefecture in French:",
      questionFr: "La prefecture en anglais :",
      options: ["La prefecture","La mairie","La poste","La banque"],
      optionsEn: ["The prefecture","The town hall","The post office","The bank"],
      correct: "La prefecture",
      correctEn: "The prefecture",
      explanation: "La prefecture (pray-fek-TOOR) = prefecture. Handles immigration, driving licences.",
      explanationFr: "La prefecture = la prefecture. S'occupe de l'immigration, des permis de conduire."
    },
    {
      id: "11-2",
      type: "qcm",
      question: "Social Security in French:",
      questionFr: "La Securite Sociale en anglais :",
      options: ["La Securite Sociale","La mutuelle","La CPAM","La CAF"],
      optionsEn: ["Social Security","Supplementary insurance","Health insurance body","Family allowance"],
      correct: "La Securite Sociale",
      correctEn: "Social Security",
      explanation: "La Securite Sociale (say-kew-ree-TAY so-see-AL) = French Social Security system.",
      explanationFr: "La Securite Sociale = le systeme de securite sociale francais."
    },
    {
      id: "11-3",
      type: "qcm",
      question: "Health card in French:",
      questionFr: "La carte Vitale en anglais :",
      options: ["La carte Vitale","La carte bleue","La carte d'identite","La carte bancaire"],
      optionsEn: ["Health card","Credit card","ID card","Bank card"],
      correct: "La carte Vitale",
      correctEn: "Health card",
      explanation: "La carte Vitale (vee-TAL) = health insurance card. Essential for medical care!",
      explanationFr: "La carte Vitale = carte d'assurance maladie. Essentielle pour les soins medicaux !"
    },
    {
      id: "11-4",
      type: "qcm",
      question: "GP / family doctor in French:",
      questionFr: "Le medecin traitant en anglais :",
      options: ["Le medecin traitant","Le specialiste","Le chirurgien","Le pharmacien"],
      optionsEn: ["GP / family doctor","The specialist","The surgeon","The pharmacist"],
      correct: "Le medecin traitant",
      correctEn: "GP / family doctor",
      explanation: "Le medecin traitant (mayd-SAN tre-TAN) = registered GP. You must declare one.",
      explanationFr: "Le medecin traitant = medecin declare. Vous devez en declarer un."
    },
    {
      id: "11-5",
      type: "qcm",
      question: "Internet box / router in French:",
      questionFr: "La box internet en anglais :",
      options: ["La box internet","Le modem","Le wifi","L'ordinateur"],
      optionsEn: ["Internet box / router","The modem","The wifi","The computer"],
      correct: "La box internet",
      correctEn: "Internet box / router",
      explanation: "La box internet (boks in-tair-NET) = internet router/box. Very common term in France!",
      explanationFr: "La box internet = routeur/box internet. Terme tres courant en France !"
    },
    {
      id: "11-6",
      type: "qcm",
      question: "Electricity provider in French:",
      questionFr: "EDF en anglais :",
      options: ["EDF","EDF-GDF","Engie","Total"],
      optionsEn: ["Electricity provider","Gas/electricity","Energy company","Oil company"],
      correct: "EDF",
      correctEn: "Electricity provider",
      explanation: "EDF (ay-day-EFF) = Electricite de France. The main electricity provider.",
      explanationFr: "EDF = Electricite de France. Le principal fournisseur d'electricite."
    },
    {
      id: "11-7",
      type: "qcm",
      question: "Recycling centre in French:",
      questionFr: "La dechetterie en anglais :",
      options: ["La dechetterie","La poubelle","Le recyclage","L'incinerateur"],
      optionsEn: ["Recycling centre","The bin","Recycling","The incinerator"],
      correct: "La dechetterie",
      correctEn: "Recycling centre",
      explanation: "La dechetterie (day-shet-REE) = recycling centre / dump for bulky waste.",
      explanationFr: "La dechetterie = centre de recyclage / decharge pour encombrants."
    },
    {
      id: "11-8",
      type: "qcm",
      question: "MOT / vehicle inspection in French:",
      questionFr: "Le controle technique en anglais :",
      options: ["Le controle technique","La revision","L'entretien","Le garage"],
      optionsEn: ["MOT / vehicle inspection","The service","The maintenance","The garage"],
      correct: "Le controle technique",
      correctEn: "MOT / vehicle inspection",
      explanation: "Le controle technique (kon-TROL tek-NEEK) = mandatory vehicle inspection every 2 years.",
      explanationFr: "Le controle technique = controle obligatoire tous les 2 ans."
    },
    {
      id: "11-9",
      type: "qcm",
      question: "I would like to apply for... in French:",
      questionFr: "Je voudrais faire une demande de... en anglais :",
      options: ["Je voudrais faire une demande de...","Je veux demander...","Je demande...","Je fais une demande..."],
      optionsEn: ["I would like to apply for...","I want to ask...","I ask...","I make a request..."],
      correct: "Je voudrais faire une demande de...",
      correctEn: "I would like to apply for...",
      explanation: "Faire une demande de = to apply for. Very common administrative phrase.",
      explanationFr: "Faire une demande de = faire une demande de. Phrase administrative tres courante."
    },
    {
      id: "11-10",
      type: "qcm",
      question: "Where can I find the form? in French:",
      questionFr: "Ou puis-je trouver le formulaire ? en anglais :",
      options: ["Ou puis-je trouver le formulaire ?","Ou est le formulaire ?","Le formulaire ou ?","Comment trouver formulaire ?"],
      optionsEn: ["Where can I find the form?","Where is the form?","The form where?","How to find form?"],
      correct: "Ou puis-je trouver le formulaire ?",
      correctEn: "Where can I find the form?",
      explanation: "Puis-je (pweezh) = can I. Very polite form. Formulaire = form.",
      explanationFr: "Puis-je = puis-je. Forme tres polie. Formulaire = formulaire."
    }
  ],
  libre: [
    {
      id: "11-l1",
      type: "libre",
      question: "Translate: I would like to make an appointment.",
      questionFr: "Traduisez : Je voudrais prendre un rendez-vous.",
      correct: "Je voudrais prendre un rendez-vous.",
      correctEn: "I would like to make an appointment.",
      alternatives: [],
      explanation: "Prendre un rendez-vous = to make an appointment.",
      explanationFr: "Prendre un rendez-vous = prendre un rendez-vous."
    },
    {
      id: "11-l2",
      type: "libre",
      question: "How do you say the health card?",
      questionFr: "Comment dit-on la carte Vitale ?",
      correct: "la carte Vitale",
      correctEn: "the health card",
      alternatives: [],
      explanation: "La carte Vitale = health insurance card. Carry it always!",
      explanationFr: "La carte Vitale = carte d'assurance maladie. Portez-la toujours !"
    },
    {
      id: "11-l3",
      type: "libre",
      question: "Translate: What documents are needed?",
      questionFr: "Traduisez : Quels sont les documents necessaires ?",
      correct: "Quels sont les documents necessaires ?",
      correctEn: "What documents are needed?",
      alternatives: [],
      explanation: "Quels sont = What are. Documents necessaires = required documents.",
      explanationFr: "Quels sont = quels sont. Documents necessaires = documents necessaires."
    },
    {
      id: "11-l4",
      type: "libre",
      question: "Complete: Je voudrais faire une ___ de...",
      questionFr: "Completez : Je voudrais faire une ___ de...",
      correct: "demande",
      correctEn: "request / application",
      alternatives: [],
      explanation: "Faire une demande = to apply / make a request.",
      explanationFr: "Faire une demande = faire une demande."
    },
    {
      id: "11-l5",
      type: "libre",
      question: "How do you say I haven't received... yet?",
      questionFr: "Comment dit-on Je n'ai pas encore recu... ?",
      correct: "Je n'ai pas encore recu...",
      correctEn: "I haven't received... yet",
      alternatives: [],
      explanation: "Je n'ai pas encore = I haven't yet. Encore = yet/still.",
      explanationFr: "Je n'ai pas encore = je n'ai pas encore. Encore = encore."
    },
    {
      id: "11-l6",
      type: "libre",
      question: "Translate: Can you give me a certificate?",
      questionFr: "Traduisez : Pouvez-vous me faire une attestation ?",
      correct: "Pouvez-vous me faire une attestation ?",
      correctEn: "Can you give me a certificate?",
      alternatives: [],
      explanation: "Attestation = certificate / official statement.",
      explanationFr: "Attestation = attestation / declaration officielle."
    },
    {
      id: "11-l7",
      type: "libre",
      question: "Complete: Ou ___-je trouver le formulaire ?",
      questionFr: "Completez : Ou ___-je trouver le formulaire ?",
      correct: "puis",
      correctEn: "can",
      alternatives: [],
      explanation: "Ou puis-je = Where can I. Puis-je = can I (very polite).",
      explanationFr: "Ou puis-je = ou puis-je. Puis-je = puis-je (tres poli)."
    },
    {
      id: "11-l8",
      type: "libre",
      question: "How do you say the prefecture?",
      questionFr: "Comment dit-on la prefecture ?",
      correct: "la prefecture",
      correctEn: "the prefecture",
      alternatives: [],
      explanation: "La prefecture = prefecture. Handles official documents.",
      explanationFr: "La prefecture = la prefecture. S'occupe des documents officiels."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_11;
} else {
  window.LESSON_11 = LESSON_11;
}
