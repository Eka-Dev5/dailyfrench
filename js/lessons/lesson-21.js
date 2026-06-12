// lesson-21.js -- French Life -- Social security, taxes & daily admin
const LESSON_21 = {
  id: 21,
  title: "French Life -- Social security, taxes & daily admin",
  titleFr: "Vie francaise -- Securite sociale, impots et admin quotidienne",
  objectiveEn: "Navigate French bureaucracy: social security, taxes, housing aid, and daily administrative tasks",
  objectiveFr: "Naviguer dans la bureaucratie francaise : securite sociale, impots, aide au logement et taches administratives quotidiennes",
  hintEn: "The carte Vitale is your golden ticket -- never leave home without it!",
  hintFr: "La carte Vitale est votre ticket d'or -- ne sortez jamais sans elle !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Social Security & Health</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>la Securite Sociale</td><td><em>*la say-kew-ree-TAY so-see-AL*</em></td><td>French national health insurance <!-- *FRENTCH nash-uh-nul helth in-shoor-ANS* --></td></tr>
<tr><td>la carte Vitale</td><td><em>*la kart vee-TAL*</em></td><td>health insurance card <!-- *HELTH in-shoor-ANS card* --></td></tr>
<tr><td>la mutuelle</td><td><em>*la moo-TWEL*</em></td><td>top-up/private health insurance <!-- *TOP-up / PRAHY-vut helth in-shoor-ANS* --></td></tr>
<tr><td>le medecin traitant</td><td><em>*luh mayd-SAN tre-TAN*</em></td><td>registered GP / family doctor <!-- *REJ-ist-urd jee-pee / FAM-uh-lee DOK-tur* --></td></tr>
<tr><td>la CPAM</td><td><em>*la say-pay-ah-em*</em></td><td>health insurance office <!-- *HELTH in-shoor-ANS OH-fis* --></td></tr>
<tr><td>un remboursement</td><td><em>*uhn rom-boorse-MON*</em></td><td>reimbursement <!-- *ree-im-BURS-munt* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Taxes & Money</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>les impots</td><td><em>*lay zan-POH*</em></td><td>taxes / income tax <!-- *TAK-sis / IN-kum taks* --></td></tr>
<tr><td>la declaration d'impots</td><td><em>*la day-kla-ra-SYON dan-POH*</em></td><td>tax return <!-- *taks ree-TURN* --></td></tr>
<tr><td>le fisc</td><td><em>*luh feesk*</em></td><td>the tax office <!-- *thuh taks OH-fis* --></td></tr>
<tr><td>le numero fiscal</td><td><em>*luh noo-may-roh fees-kal*</em></td><td>tax identification number <!-- *taks eye-den-ti-fi-KAY-shun NUM-bur* --></td></tr>
<tr><td>le prelevement a la source</td><td><em>*luh pray-lev-MON ah la soors*</em></td><td>tax deducted at source <!-- *taks dee-DUK-tid at sors* --></td></tr>
<tr><td>les charges sociales</td><td><em>*lay sharzh so-see-AL*</em></td><td>social security contributions <!-- *SOH-shul see-KYOO-ruh-tee kon-tri-BYOO-shunz* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Housing & Benefits</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>la CAF</td><td><em>*la kah-ay-eff*</em></td><td>family benefits office <!-- *FAM-uh-lee BEN-e-fits OH-fis* --></td></tr>
<tr><td>les APL / l'aide au logement</td><td><em>*lay zah-pay-el / led oh lohzh-MON*</em></td><td>housing benefit / housing aid <!-- *HOW-zing BEN-e-fit / HOW-zing AYD* --></td></tr>
<tr><td>le loyer</td><td><em>*luh lwah-YAY*</em></td><td>rent <!-- *rent* --></td></tr>
<tr><td>la caution / le depot de garantie</td><td><em>*la koh-SYON / luh day-POH duh ga-ran-TEE*</em></td><td>security deposit <!-- *see-KYOO-ruh-tee dee-POZ-it* --></td></tr>
<tr><td>l'etat des lieux</td><td><em>*lay-TAH day LYUH*</em></td><td>inventory / condition report <!-- *IN-vun-tor-ee / kun-DISH-un ree-PORT* --></td></tr>
<tr><td>le bail</td><td><em>*luh bahyee*</em></td><td>lease / tenancy agreement <!-- *lees / TEN-un-see uh-GREE-munt* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Essential Admin Phrases</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>Je voudrais faire une demande de...</td><td><em>*zhuh voo-DRAY fair oon duh-MON duh...*</em></td><td>I would like to apply for... <!-- *eye wood LAYK too uh-PLY for...* --></td></tr>
<tr><td>Ou puis-je trouver le formulaire ?</td><td><em>*oo pweezh troo-VAY luh for-moo-LAIR*</em></td><td>Where can I find the form? <!-- *WAIR kan eye fynd thuh form* --></td></tr>
<tr><td>Quels sont les documents necessaires ?</td><td><em>*kel son lay dok-oo-MON nay-say-SAIR*</em></td><td>What documents are required? <!-- *wot DOK-oo-munts ar ree-KWY-urd* --></td></tr>
<tr><td>Je n'ai pas encore recu...</td><td><em>*zhuh nay pah on-KOR ruh-SEW...*</em></td><td>I haven't received... yet <!-- *eye HAV-unt ree-SEEVD... yet* --></td></tr>
<tr><td>Pouvez-vous me faire une attestation ?</td><td><em>*poo-vay-VOO muh fair oon ah-tay-sta-SYON*</em></td><td>Can you give me a certificate? <!-- *kan yoo giv mee uh sur-TIF-i-kit* --></td></tr>
<tr><td>Je voudrais prendre un rendez-vous.</td><td><em>*zhuh voo-DRAY pron-druh uhn ron-day-VOO*</em></td><td>I would like to make an appointment. <!-- *eye wood LAYK too mayk an uh-POYNT-munt* --></td></tr>
</table>
</div>
<div class="lesson-warning">Important: Always keep copies of everything! French administration loves paper trails. The <strong>attestation</strong> (official certificate/letter) is your best friend.</div>
<div class="lesson-example">
Je dois aller a la CPAM pour ma carte Vitale, et apres je fais ma declaration d'impots en ligne. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I need to go to the CPAM for my Vitale card, and then I do my tax return online.</span>
</div>
  `,
  qcm: [
    {
      id: "21-1",
      type: "qcm",
      question: "What is 'la carte Vitale'?",
      questionFr: "Qu'est-ce que 'la carte Vitale' ?",
      options: ["French health insurance card","A debit card","A driving licence","A library card"],
      optionsEn: ["French health insurance card","A debit card","A driving licence","A library card"],
      correct: "French health insurance card",
      correctEn: "French health insurance card",
      explanation: "La carte Vitale is your French health insurance card. Keep it with you at all times!",
      explanationFr: "La carte Vitale est votre carte d'assurance maladie francaise. Gardez-la toujours sur vous !"
    },
    {
      id: "21-2",
      type: "qcm",
      question: "'I would like to apply for housing benefit' in French:",
      questionFr: "'Je voudrais faire une demande d'aide au logement.' en anglais :",
      options: ["Je voudrais faire une demande d'aide au logement.","Je veux de l'argent pour ma maison.","Je demande un logement.","Je voudrais un appartement."],
      optionsEn: ["I would like to apply for housing benefit.","I want money for my house.","I request housing.","I would like an apartment."],
      correct: "Je voudrais faire une demande d'aide au logement.",
      correctEn: "I would like to apply for housing benefit.",
      explanation: "Faire une demande de = to apply for. L'aide au logement = housing benefit (APL/ALS from CAF).",
      explanationFr: "Faire une demande de = faire une demande de. L'aide au logement = aide au logement (APL/ALS de la CAF)."
    },
    {
      id: "21-3",
      type: "qcm",
      question: "What is 'la mutuelle'?",
      questionFr: "Qu'est-ce que 'la mutuelle' ?",
      options: ["Top-up/private health insurance","A mutual friend","The public health system","A pharmacy"],
      optionsEn: ["Top-up/private health insurance","A mutual friend","The public health system","A pharmacy"],
      correct: "Top-up/private health insurance",
      correctEn: "Top-up/private health insurance",
      explanation: "La mutuelle covers what Social Security doesn't reimburse. Many employers offer one.",
      explanationFr: "La mutuelle couvre ce que la Securite Sociale ne rembourse pas. Beaucoup d'employeurs en proposent une."
    },
    {
      id: "21-4",
      type: "qcm",
      question: "'The tax return' in French:",
      questionFr: "'La declaration d'impots' en anglais :",
      options: ["La declaration d'impots","Les impots","Le fisc","La taxe"],
      optionsEn: ["The tax return","The taxes","The tax office","The tax"],
      correct: "La declaration d'impots",
      correctEn: "The tax return",
      explanation: "La declaration d'impots = tax return. Due every year, usually online at impots.gouv.fr.",
      explanationFr: "La declaration d'impots = declaration d'impots. A faire chaque annee, generalement en ligne sur impots.gouv.fr."
    },
    {
      id: "21-5",
      type: "qcm",
      question: "Where do you apply for family benefits and housing aid?",
      questionFr: "Ou fait-on une demande de prestations familiales et d'aide au logement ?",
      options: ["La CAF","La CPAM","Le fisc","La mairie"],
      optionsEn: ["The CAF","The CPAM","The tax office","The town hall"],
      correct: "La CAF",
      correctEn: "The CAF",
      explanation: "La CAF (Caisse d'Allocations Familiales) handles family benefits, housing aid (APL), and more.",
      explanationFr: "La CAF (Caisse d'Allocations Familiales) gere les prestations familiales, l'aide au logement (APL), etc."
    },
    {
      id: "21-6",
      type: "qcm",
      question: "'The security deposit' in French:",
      questionFr: "'La caution / le depot de garantie' en anglais :",
      options: ["La caution / le depot de garantie","Le loyer","Les charges","La taxe d'habitation"],
      optionsEn: ["The security deposit","The rent","The service charges","The council tax"],
      correct: "La caution / le depot de garantie",
      correctEn: "The security deposit",
      explanation: "La caution or le depot de garantie = security deposit. Usually 1-2 months' rent. Must be returned when you leave!",
      explanationFr: "La caution ou le depot de garantie = caution. Generalement 1-2 mois de loyer. Doit etre restitue au depart !"
    },
    {
      id: "21-7",
      type: "qcm",
      question: "'I haven't received my reimbursement yet' in French:",
      questionFr: "'Je n'ai pas encore recu mon remboursement.' en anglais :",
      options: ["Je n'ai pas encore recu mon remboursement.","Je n'ai pas mon argent.","Je veux mon remboursement.","Le remboursement est perdu."],
      optionsEn: ["I haven't received my reimbursement yet.","I don't have my money.","I want my reimbursement.","The reimbursement is lost."],
      correct: "Je n'ai pas encore recu mon remboursement.",
      correctEn: "I haven't received my reimbursement yet.",
      explanation: "Pas encore = not yet. Mon remboursement = my reimbursement (from Social Security).",
      explanationFr: "Pas encore = pas encore. Mon remboursement = mon remboursement (de la Securite Sociale)."
    },
    {
      id: "21-8",
      type: "qcm",
      question: "What is 'l'etat des lieux'?",
      questionFr: "Qu'est-ce que 'l'etat des lieux' ?",
      options: ["Inventory/condition report when moving in/out","The state of the country","A police report","A building permit"],
      optionsEn: ["Inventory/condition report when moving in/out","The state of the country","A police report","A building permit"],
      correct: "Inventory/condition report when moving in/out",
      correctEn: "Inventory/condition report when moving in/out",
      explanation: "L'etat des lieux = detailed condition report. Essential when renting -- protects your deposit!",
      explanationFr: "L'etat des lieux = etat des lieux detaille. Essentiel en location -- protege votre caution !"
    },
    {
      id: "21-9",
      type: "qcm",
      question: "'Can you give me a certificate?' in French:",
      questionFr: "'Pouvez-vous me faire une attestation ?' en anglais :",
      options: ["Pouvez-vous me faire une attestation ?","Pouvez-vous me certifier ?","Donnez-moi un papier.","Je veux une preuve."],
      optionsEn: ["Can you give me a certificate?","Can you certify me?","Give me a paper.","I want proof."],
      correct: "Pouvez-vous me faire une attestation ?",
      correctEn: "Can you give me a certificate?",
      explanation: "Une attestation = official certificate/letter. The magic word in French bureaucracy!",
      explanationFr: "Une attestation = attestation officielle. Le mot magique dans la bureaucratie francaise !"
    },
    {
      id: "21-10",
      type: "qcm",
      question: "What does 'le prelevement a la source' mean?",
      questionFr: "Que signifie 'le prelevement a la source' ?",
      options: ["Tax deducted at source from your salary","A water leak","A direct debit for rent","A bank transfer"],
      optionsEn: ["Tax deducted at source from your salary","A water leak","A direct debit for rent","A bank transfer"],
      correct: "Tax deducted at source from your salary",
      correctEn: "Tax deducted at source from your salary",
      explanation: "Since 2019, income tax is deducted directly from your monthly salary in France.",
      explanationFr: "Depuis 2019, l'impot sur le revenu est preleve directement sur le salaire mensuel en France."
    }
  ],
  libre: [
    {
      id: "21-l1",
      type: "libre",
      question: "Translate: 'I would like to make an appointment with my GP.'",
      questionFr: "Traduisez : 'Je voudrais prendre rendez-vous avec mon medecin traitant.'",
      correct: "Je voudrais prendre rendez-vous avec mon medecin traitant.",
      correctEn: "I would like to make an appointment with my GP.",
      alternatives: [],
      explanation: "Le medecin traitant = registered GP. You must declare one to the CPAM.",
      explanationFr: "Le medecin traitant = medecin traitant. Il faut en declarer un a la CPAM."
    },
    {
      id: "21-l2",
      type: "libre",
      question: "How do you say 'Where can I find the form?'",
      questionFr: "Comment dit-on 'Ou puis-je trouver le formulaire ?' ?",
      correct: "Ou puis-je trouver le formulaire ?",
      correctEn: "Where can I find the form?",
      alternatives: ["Ou est le formulaire ?"],
      explanation: "Puis-je = can I (very polite). Formulaire = form.",
      explanationFr: "Puis-je = puis-je (tres poli). Formulaire = formulaire."
    },
    {
      id: "21-l3",
      type: "libre",
      question: "Translate: 'What documents are required?'",
      questionFr: "Traduisez : 'Quels sont les documents necessaires ?'",
      correct: "Quels sont les documents necessaires ?",
      correctEn: "What documents are required?",
      alternatives: ["Quels documents faut-il ?"],
      explanation: "Necessaires = required / necessary. Always ask this before queuing!",
      explanationFr: "Necessaires = necessaires. Demandez toujours ca avant de faire la queue !"
    },
    {
      id: "21-l4",
      type: "libre",
      question: "Complete: 'Je voudrais faire une ___ d'aide au logement.'",
      questionFr: "Completez : 'Je voudrais faire une ___ d'aide au logement.'",
      correct: "demande",
      correctEn: "request / application",
      alternatives: [],
      explanation: "Faire une demande de = to apply for. Aide au logement = housing benefit.",
      explanationFr: "Faire une demande de = faire une demande de. Aide au logement = aide au logement."
    },
    {
      id: "21-l5",
      type: "libre",
      question: "How do you say 'I haven't received my Vitale card yet'?",
      questionFr: "Comment dit-on 'Je n'ai pas encore recu ma carte Vitale' ?",
      correct: "Je n'ai pas encore recu ma carte Vitale.",
      correctEn: "I haven't received my Vitale card yet.",
      alternatives: [],
      explanation: "Pas encore = not yet. Very useful for chasing up admin!",
      explanationFr: "Pas encore = pas encore. Tres utile pour relancer l'administration !"
    },
    {
      id: "21-l6",
      type: "libre",
      question: "Translate: 'My rent is 800 euros per month.'",
      questionFr: "Traduisez : 'Mon loyer est de 800 euros par mois.'",
      correct: "Mon loyer est de 800 euros par mois.",
      correctEn: "My rent is 800 euros per month.",
      alternatives: ["Je paie 800 euros de loyer par mois."],
      explanation: "Le loyer = rent. Par mois = per month.",
      explanationFr: "Le loyer = le loyer. Par mois = par mois."
    },
    {
      id: "21-l7",
      type: "libre",
      question: "What is 'la CPAM' in English?",
      questionFr: "Que signifie 'la CPAM' en anglais ?",
      correct: "health insurance office",
      correctEn: "health insurance office",
      alternatives: ["the local health insurance fund","social security office"],
      explanation: "CPAM = Caisse Primaire d'Assurance Maladie. Your local health insurance office.",
      explanationFr: "CPAM = Caisse Primaire d'Assurance Maladie. Votre caisse d'assurance maladie locale."
    },
    {
      id: "21-l8",
      type: "libre",
      question: "Complete: 'Je dois payer mes ___ avant le 15 septembre.'",
      questionFr: "Completez : 'Je dois payer mes ___ avant le 15 septembre.'",
      correct: "impots",
      correctEn: "taxes",
      alternatives: [],
      explanation: "Les impots = taxes. The deadline is usually mid-September for online filing.",
      explanationFr: "Les impots = les impots. La date limite est generalement mi-septembre en ligne."
    },
    {
      id: "21-l9",
      type: "libre",
      question: "Translate: 'Can you give me a certificate of residence?'",
      questionFr: "Traduisez : 'Pouvez-vous me faire une attestation de domicile ?'",
      correct: "Pouvez-vous me faire une attestation de domicile ?",
      correctEn: "Can you give me a certificate of residence?",
      alternatives: [],
      explanation: "Attestation de domicile = proof of address. Often needed for bank, phone, etc.",
      explanationFr: "Attestation de domicile = justificatif de domicile. Souvent necessaire pour banque, telephone, etc."
    },
    {
      id: "21-l10",
      type: "libre",
      question: "How do you say 'social security contributions'?",
      questionFr: "Comment dit-on 'les charges sociales' ?",
      correct: "les charges sociales",
      correctEn: "social security contributions",
      alternatives: ["social charges"],
      explanation: "Charges sociales = social security contributions deducted from salary.",
      explanationFr: "Charges sociales = cotisations sociales deduites du salaire."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_21;
} else {
  window.LESSON_21 = LESSON_21;
}
