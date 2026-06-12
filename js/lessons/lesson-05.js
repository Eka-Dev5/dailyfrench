// lesson-05.js -- Places in Town
const LESSON_05 = {
  id: 5,
  title: "Places in Town",
  titleFr: "Les lieux en ville",
  objectiveEn: "Ask for and understand directions to key places in a French town",
  objectiveFr: "Demander et comprendre le chemin vers les lieux importants en ville",
  hintEn: "Always say bonjour before asking for help -- it opens every door in France!",
  hintFr: "Dites toujours bonjour avant de demander de l'aide -- ca ouvre toutes les portes en France !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Key places</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>une banque</td><td><em>*oon bonk*</em></td><td>a bank <!-- *uh bank* --></td></tr>
<tr><td>une boulangerie</td><td><em>*oon boo-lon-ZHREE*</em></td><td>a bakery <!-- *uh BAY-kuh-ree* --></td></tr>
<tr><td>une bibliotheque</td><td><em>*oon bee-blee-oh-TEK*</em></td><td>a library <!-- *uh LYE-bruh-ree* --></td></tr>
<tr><td>un cafe</td><td><em>*uhn kah-FAY*</em></td><td>a cafe <!-- *uh ka-FAY* --></td></tr>
<tr><td>un cinema</td><td><em>*uhn see-nay-MAH*</em></td><td>a cinema <!-- *uh SIN-uh-mah* --></td></tr>
<tr><td>un parc</td><td><em>*uhn park*</em></td><td>a park <!-- *uh park* --></td></tr>
<tr><td>une pharmacie</td><td><em>*oon far-ma-SEE*</em></td><td>a pharmacy <!-- *uh FAR-muh-see* --></td></tr>
<tr><td>un supermarche</td><td><em>*uhn soo-pair-mar-SHAY*</em></td><td>a supermarket <!-- *uh SOO-pur-mar-ket* --></td></tr>
<tr><td>une poste</td><td><em>*oon post*</em></td><td>a post office <!-- *uh post OH-fis* --></td></tr>
<tr><td>une gare</td><td><em>*oon gahr*</em></td><td>a train station <!-- *uh trayn STAY-shun* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Asking for directions</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>Ou est la banque ?</td><td><em>*oo ay la bonk*</em></td><td>Where is the bank? <!-- *WAIR iz thuh bank* --></td></tr>
<tr><td>Ou sont les toilettes ?</td><td><em>*oo son lay twa-LET*</em></td><td>Where are the toilets? <!-- *WAIR ar thuh TOY-lets* --></td></tr>
<tr><td>Il y a un cafe ici.</td><td><em>*eel ee-a uhn kah-FAY ee-SEE*</em></td><td>There is a cafe here. <!-- *THAIR iz uh ka-FAY heer* --></td></tr>
<tr><td>Il n y a pas de pharmacie.</td><td><em>*eel nee-a pah duh far-ma-SEE*</em></td><td>There is no pharmacy. <!-- *THAIR iz noh FAR-muh-see* --></td></tr>
</table>
</div>
<div class="lesson-warning">In France, always start with <strong>Bonjour</strong> before asking for directions. Skipping it is considered very rude!</div>
<div class="lesson-example">
-- Bonjour madame, ou est la pharmacie, s il vous plait ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Hello madam, where is the pharmacy, please?</span><br>
-- C est a cote de la banque. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">It s next to the bank.</span>
</div>
  `,
  qcm: [
    {
      id: "05-1",
      type: "qcm",
      question: "A bakery in French:",
      questionFr: "Une boulangerie en anglais :",
      options: ["Une boulangerie","Une banque","Une bibliotheque","Une pharmacie"],
      optionsEn: ["A bakery","A bank","A library","A pharmacy"],
      correct: "Une boulangerie",
      correctEn: "A bakery",
      explanation: "Boulangerie (boo-lon-ZHREE) = bakery. Le boulanger = the baker.",
      explanationFr: "Boulangerie = boulangerie. Le boulanger = le boulanger."
    },
    {
      id: "05-2",
      type: "qcm",
      question: "Where is the bank? in French:",
      questionFr: "Ou est la banque ? en anglais :",
      options: ["Ou est la banque ?","Ou est banque ?","Ou sont la banque ?","Ou banque est ?"],
      optionsEn: ["Where is the bank?","Where is bank?","Where are the bank?","Where bank is?"],
      correct: "Ou est la banque ?",
      correctEn: "Where is the bank?",
      explanation: "Ou est... (oo ay) = Where is... Always use est with singular places.",
      explanationFr: "Ou est... = ou est... Utilisez toujours est avec les lieux singuliers."
    },
    {
      id: "05-3",
      type: "qcm",
      question: "A pharmacy in French:",
      questionFr: "Une pharmacie en anglais :",
      options: ["Une pharmacie","Une banque","Une poste","Une bibliotheque"],
      optionsEn: ["A pharmacy","A bank","A post office","A library"],
      correct: "Une pharmacie",
      correctEn: "A pharmacy",
      explanation: "Pharmacie (far-ma-SEE) = pharmacy. Look for the green cross in France!",
      explanationFr: "Pharmacie = pharmacie. Cherchez la croix verte en France !"
    },
    {
      id: "05-4",
      type: "qcm",
      question: "Where are the toilets? in French:",
      questionFr: "Ou sont les toilettes ? en anglais :",
      options: ["Ou sont les toilettes ?","Ou est les toilettes ?","Ou toilettes ?","Les toilettes ou ?"],
      optionsEn: ["Where are the toilets?","Where is the toilets?","Where toilets?","The toilets where?"],
      correct: "Ou sont les toilettes ?",
      correctEn: "Where are the toilets?",
      explanation: "Ou sont... (oo son) = Where are... Use sont with plural nouns.",
      explanationFr: "Ou sont... = ou sont... Utilisez sont avec les noms pluriels."
    },
    {
      id: "05-5",
      type: "qcm",
      question: "A library in French:",
      questionFr: "Une bibliotheque en anglais :",
      options: ["Une bibliotheque","Une banque","Une boulangerie","Une pharmacie"],
      optionsEn: ["A library","A bank","A bakery","A pharmacy"],
      correct: "Une bibliotheque",
      correctEn: "A library",
      explanation: "Bibliotheque (bee-blee-oh-TEK) = library. Livre = book.",
      explanationFr: "Bibliotheque = bibliotheque. Livre = livre."
    },
    {
      id: "05-6",
      type: "qcm",
      question: "There is a cafe here. in French:",
      questionFr: "Il y a un cafe ici. en anglais :",
      options: ["Il y a un cafe ici.","C est un cafe ici.","Un cafe est ici.","Voici un cafe."],
      optionsEn: ["There is a cafe here.","It is a cafe here.","A cafe is here.","Here is a cafe."],
      correct: "Il y a un cafe ici.",
      correctEn: "There is a cafe here.",
      explanation: "Il y a (eel ee-a) = there is / there are. Very common French expression!",
      explanationFr: "Il y a = il y a. Expression francaise tres courante !"
    },
    {
      id: "05-7",
      type: "qcm",
      question: "A post office in French:",
      questionFr: "Une poste en anglais :",
      options: ["Une poste","Une pharmacie","Une banque","Une bibliotheque"],
      optionsEn: ["A post office","A pharmacy","A bank","A library"],
      correct: "Une poste",
      correctEn: "A post office",
      explanation: "La poste (post) = post office. Le facteur = the postman.",
      explanationFr: "La poste = la poste. Le facteur = le facteur."
    },
    {
      id: "05-8",
      type: "qcm",
      question: "There is no pharmacy. in French:",
      questionFr: "Il n y a pas de pharmacie. en anglais :",
      options: ["Il n y a pas de pharmacie.","Pas de pharmacie.","Il n est pas pharmacie.","Pharmacie n existe pas."],
      optionsEn: ["There is no pharmacy.","No pharmacy.","It is not pharmacy.","Pharmacy does not exist."],
      correct: "Il n y a pas de pharmacie.",
      correctEn: "There is no pharmacy.",
      explanation: "Il n y a pas de... = There is no... Use this structure for absence.",
      explanationFr: "Il n y a pas de... = il n y a pas de... Utilisez cette structure pour l'absence."
    },
    {
      id: "05-9",
      type: "qcm",
      question: "A supermarket in French:",
      questionFr: "Un supermarche en anglais :",
      options: ["Un supermarche","Un marche","Un hypermarche","Un magasin"],
      optionsEn: ["A supermarket","A market","A hypermarket","A shop"],
      correct: "Un supermarche",
      correctEn: "A supermarket",
      explanation: "Supermarche (soo-pair-mar-SHAY) = supermarket. Hypermarche = hypermarket.",
      explanationFr: "Supermarche = supermarche. Hypermarche = hypermarche."
    },
    {
      id: "05-10",
      type: "qcm",
      question: "A train station in French:",
      questionFr: "Une gare en anglais :",
      options: ["Une gare","Une station","Un arret","Un terminus"],
      optionsEn: ["A train station","A station","A stop","A terminus"],
      correct: "Une gare",
      correctEn: "A train station",
      explanation: "La gare (gahr) = train station. La gare SNCF = French railway station.",
      explanationFr: "La gare = la gare. La gare SNCF = la gare SNCF."
    }
  ],
  libre: [
    {
      id: "05-l1",
      type: "libre",
      question: "Translate: Where is the bakery?",
      questionFr: "Traduisez : Ou est la boulangerie ?",
      correct: "Ou est la boulangerie ?",
      correctEn: "Where is the bakery?",
      alternatives: [],
      explanation: "Ou est... = Where is... La boulangerie = the bakery.",
      explanationFr: "Ou est... = ou est... La boulangerie = la boulangerie."
    },
    {
      id: "05-l2",
      type: "libre",
      question: "How do you say a pharmacy?",
      questionFr: "Comment dit-on une pharmacie ?",
      correct: "une pharmacie",
      correctEn: "a pharmacy",
      alternatives: [],
      explanation: "Une pharmacie = a pharmacy. Look for the green cross!",
      explanationFr: "Une pharmacie = une pharmacie. Cherchez la croix verte !"
    },
    {
      id: "05-l3",
      type: "libre",
      question: "Translate: There is a park here.",
      questionFr: "Traduisez : Il y a un parc ici.",
      correct: "Il y a un parc ici.",
      correctEn: "There is a park here.",
      alternatives: [],
      explanation: "Il y a = there is/are. Un parc = a park. Ici = here.",
      explanationFr: "Il y a = il y a. Un parc = un parc. Ici = ici."
    },
    {
      id: "05-l4",
      type: "libre",
      question: "Complete: Ou ___ la poste ?",
      questionFr: "Completez : Ou ___ la poste ?",
      correct: "est",
      correctEn: "is",
      alternatives: [],
      explanation: "Ou est... = Where is... Use est with singular.",
      explanationFr: "Ou est... = ou est... Utilisez est avec le singulier."
    },
    {
      id: "05-l5",
      type: "libre",
      question: "How do you say there is no bank?",
      questionFr: "Comment dit-on il n y a pas de banque ?",
      correct: "il n y a pas de banque",
      correctEn: "there is no bank",
      alternatives: [],
      explanation: "Il n y a pas de... = There is no...",
      explanationFr: "Il n y a pas de... = il n y a pas de..."
    },
    {
      id: "05-l6",
      type: "libre",
      question: "Translate: Where are the toilets?",
      questionFr: "Traduisez : Ou sont les toilettes ?",
      correct: "Ou sont les toilettes ?",
      correctEn: "Where are the toilets?",
      alternatives: [],
      explanation: "Ou sont... = Where are... Les toilettes = the toilets.",
      explanationFr: "Ou sont... = ou sont... Les toilettes = les toilettes."
    },
    {
      id: "05-l7",
      type: "libre",
      question: "Complete: Il y a un ___ ici.",
      questionFr: "Completez : Il y a un ___ ici.",
      correct: "cafe",
      correctEn: "cafe",
      alternatives: ["parc","cinema"],
      explanation: "Il y a un cafe ici = There is a cafe here.",
      explanationFr: "Il y a un cafe ici = il y a un cafe ici."
    },
    {
      id: "05-l8",
      type: "libre",
      question: "How do you say a library?",
      questionFr: "Comment dit-on une bibliotheque ?",
      correct: "une bibliotheque",
      correctEn: "a library",
      alternatives: [],
      explanation: "Une bibliotheque = a library.",
      explanationFr: "Une bibliotheque = une bibliotheque."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_05;
} else {
  window.LESSON_05 = LESSON_05;
}
