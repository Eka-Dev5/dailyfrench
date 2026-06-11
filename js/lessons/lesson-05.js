// lesson-05.js -- My Town -- Places in town
const LESSON_05 = {
  id: 5,
  title: "My Town -- Places in town",
  titleFr: "Ma ville -- Les lieux en ville",
  objectiveEn: "Talk about places in town and ask where things are",
  objectiveFr: "Parler des lieux en ville et demander ou se trouvent les choses",
  hintEn: "Use IL Y A to say there is/are and OU to ask where?",
  hintFr: "Utilisez IL Y A pour dire il y a et OU pour demander ou ?",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Places in town</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>une banque</td><td><em>*uhn bonk*</em></td><td>a bank</td></tr>
<tr><td>une boulangerie</td><td><em>*uhn boo-lon-ZHREE*</em></td><td>a bakery</td></tr>
<tr><td>une bibliotheque</td><td><em>*uhn bee-blee-oh-TEK*</em></td><td>a library</td></tr>
<tr><td>un cafe</td><td><em>*uhn kah-FAY*</em></td><td>a cafe</td></tr>
<tr><td>un cinema</td><td><em>*uhn see-nay-MAH*</em></td><td>a cinema</td></tr>
<tr><td>un parc</td><td><em>*uhn park*</em></td><td>a park</td></tr>
<tr><td>une pharmacie</td><td><em>*uhn far-mah-SEE*</em></td><td>a pharmacy</td></tr>
<tr><td>un supermarche</td><td><em>*uhn soo-pair-mar-SHAY*</em></td><td>a supermarket</td></tr>
<tr><td>une poste</td><td><em>*uhn post*</em></td><td>a post office</td></tr>
<tr><td>une gare</td><td><em>*uhn gahr*</em></td><td>a train station</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Asking where things are</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Ou est la banque ?</td><td>Where is the bank?</td></tr>
<tr><td>Ou sont les toilettes ?</td><td>Where are the toilets?</td></tr>
<tr><td>Il y a un cafe ici.</td><td>There is a cafe here.</td></tr>
<tr><td>Il n y a pas de pharmacie.</td><td>There isn t a pharmacy.</td></tr>
</table>
</div>
<div class="lesson-warning">Use <strong>il y a</strong> for "there is/are" -- not "est" alone. Also, <strong>ou</strong> means "where".</div>
<div class="lesson-example">
Il y a un parc et une boulangerie pres de chez moi. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">There is a park and a bakery near my house.</span>
</div>
  `,
  qcm: [
    {
      id: "5-1",
      type: "qcm",
      question: "a cafe in French:",
      questionFr: "un cafe en anglais :",
      options: ["Un cafe","Une cafe","Le cafe","Des cafes"],
      optionsEn: ["A cafe","A cafe","The cafe","Cafes"],
      correct: "Un cafe",
      correctEn: "A cafe",
      explanation: "Un cafe = a cafe. Cafe is masculine: un cafe.",
      explanationFr: "Un cafe = un cafe. Cafe est masculin : un cafe."
    },
    {
      id: "5-2",
      type: "qcm",
      question: "a bakery in French:",
      questionFr: "une boulangerie en anglais :",
      options: ["Une boulangerie","Un boulangerie","Le boulangerie","Des boulangeries"],
      optionsEn: ["A bakery","A bakery","The bakery","Bakeries"],
      correct: "Une boulangerie",
      correctEn: "A bakery",
      explanation: "Boulangerie is feminine: une boulangerie.",
      explanationFr: "Boulangerie est feminin : une boulangerie."
    },
    {
      id: "5-3",
      type: "qcm",
      question: "Where is the bank? in French:",
      questionFr: "Ou est la banque ? en anglais :",
      options: ["Ou est la banque ?","Qu est-ce que la banque ?","Comment est la banque ?","Quand est la banque ?"],
      optionsEn: ["Where is the bank?","What is the bank?","How is the bank?","When is the bank?"],
      correct: "Ou est la banque ?",
      correctEn: "Where is the bank?",
      explanation: "Ou = where. Use ou est... to ask location.",
      explanationFr: "Ou = ou. Utilisez ou est... pour demander un lieu."
    },
    {
      id: "5-4",
      type: "qcm",
      question: "There is a park here in French:",
      questionFr: "Il y a un parc ici. en anglais :",
      options: ["Il y a un parc ici.","Il est un parc ici.","C est un parc ici.","Il a un parc ici."],
      optionsEn: ["There is a park here.","It is a park here.","It is a park here.","He has a park here."],
      correct: "Il y a un parc ici.",
      correctEn: "There is a park here.",
      explanation: "Il y a = there is / there are. Very common and very useful.",
      explanationFr: "Il y a = il y a. Tres courant et tres utile."
    },
    {
      id: "5-5",
      type: "qcm",
      question: "There isn t a pharmacy in French:",
      questionFr: "Il n y a pas de pharmacie. en anglais :",
      options: ["Il n y a pas de pharmacie.","Il ne y a pas une pharmacie.","Il n a pas de pharmacie.","Il y a pas pharmacie."],
      optionsEn: ["There isn t a pharmacy.","There is not a pharmacy.","He doesn t have a pharmacy.","There is not pharmacy."],
      correct: "Il n y a pas de pharmacie.",
      correctEn: "There isn t a pharmacy.",
      explanation: "Negative form: il n y a pas de + noun.",
      explanationFr: "Forme negative : il n y a pas de + nom."
    },
    {
      id: "5-6",
      type: "qcm",
      question: "a train station in French:",
      questionFr: "une gare en anglais :",
      options: ["Une gare","Un gare","La gare","Des gares"],
      optionsEn: ["A train station","A train station","The train station","Train stations"],
      correct: "Une gare",
      correctEn: "A train station",
      explanation: "Gare is feminine: une gare.",
      explanationFr: "Gare est feminin : une gare."
    },
    {
      id: "5-7",
      type: "qcm",
      question: "a pharmacy in French:",
      questionFr: "une pharmacie en anglais :",
      options: ["Une pharmacie","Un pharmacie","Le pharmacie","Des pharmacies"],
      optionsEn: ["A pharmacy","A pharmacy","The pharmacy","Pharmacies"],
      correct: "Une pharmacie",
      correctEn: "A pharmacy",
      explanation: "Pharmacie is feminine: une pharmacie.",
      explanationFr: "Pharmacie est feminin : une pharmacie."
    },
    {
      id: "5-8",
      type: "qcm",
      question: "a supermarket in French:",
      questionFr: "un supermarche en anglais :",
      options: ["Un supermarche","Une supermarche","Le supermarche","Des supermarches"],
      optionsEn: ["A supermarket","A supermarket","The supermarket","Supermarkets"],
      correct: "Un supermarche",
      correctEn: "A supermarket",
      explanation: "Supermarche is masculine: un supermarche.",
      explanationFr: "Supermarche est masculin : un supermarche."
    },
    {
      id: "5-9",
      type: "qcm",
      question: "Where are the toilets? in French:",
      questionFr: "Ou sont les toilettes ? en anglais :",
      options: ["Ou sont les toilettes ?","Ou est les toilettes ?","Ou a les toilettes ?","Ou les toilettes sont ?"],
      optionsEn: ["Where are the toilets?","Where is the toilets?","Where has the toilets?","Where the toilets are?"],
      correct: "Ou sont les toilettes ?",
      correctEn: "Where are the toilets?",
      explanation: "Toilettes is plural in French: les toilettes.",
      explanationFr: "Toilettes est toujours au pluriel en francais : les toilettes."
    },
    {
      id: "5-10",
      type: "qcm",
      question: "a library in French:",
      questionFr: "une bibliotheque en anglais :",
      options: ["Une bibliotheque","Un bibliotheque","La bibliotheque","Des bibliotheques"],
      optionsEn: ["A library","A library","The library","Libraries"],
      correct: "Une bibliotheque",
      correctEn: "A library",
      explanation: "Bibliotheque is feminine: une bibliotheque.",
      explanationFr: "Bibliotheque est feminin : une bibliotheque."
    }
  ],
  libre: [
    {
      id: "5-l1",
      type: "libre",
      question: "Translate: Where is the cafe?",
      questionFr: "Traduisez : Ou est le cafe ?",
      correct: "Ou est le cafe ?",
      correctEn: "Where is the cafe?",
      alternatives: [],
      explanation: "Ou est... = where is... Use it to ask for a location.",
      explanationFr: "Ou est... = ou est... Utilisez-le pour demander un lieu."
    },
    {
      id: "5-l2",
      type: "libre",
      question: "How do you say There is a park here?",
      questionFr: "Comment dit-on Il y a un parc ici ?",
      correct: "Il y a un parc ici.",
      correctEn: "There is a park here.",
      alternatives: [],
      explanation: "Il y a = there is / there are.",
      explanationFr: "Il y a = il y a / il y a."
    },
    {
      id: "5-l3",
      type: "libre",
      question: "Translate: There isn t a supermarket.",
      questionFr: "Traduisez : Il n y a pas de supermarche.",
      correct: "Il n y a pas de supermarche.",
      correctEn: "There isn t a supermarket.",
      alternatives: [],
      explanation: "Negative with il y a: il n y a pas de + noun.",
      explanationFr: "Negation avec il y a : il n y a pas de + nom."
    },
    {
      id: "5-l4",
      type: "libre",
      question: "Complete: Ou est la ___ ? (bank)",
      questionFr: "Completez : Ou est la ___ ? (banque)",
      correct: "banque",
      correctEn: "bank",
      alternatives: [],
      explanation: "La banque = the bank. Ou est la banque ?",
      explanationFr: "La banque = la banque. Ou est la banque ?"
    },
    {
      id: "5-l5",
      type: "libre",
      question: "How do you say a post office?",
      questionFr: "Comment dit-on une poste ?",
      correct: "une poste",
      correctEn: "a post office",
      alternatives: [],
      explanation: "La poste / une poste = post office.",
      explanationFr: "La poste / une poste = une poste."
    },
    {
      id: "5-l6",
      type: "libre",
      question: "Translate: There is a pharmacy here.",
      questionFr: "Traduisez : Il y a une pharmacie ici.",
      correct: "Il y a une pharmacie ici.",
      correctEn: "There is a pharmacy here.",
      alternatives: [],
      explanation: "Une pharmacie = a pharmacy.",
      explanationFr: "Une pharmacie = une pharmacie."
    },
    {
      id: "5-l7",
      type: "libre",
      question: "Complete: Il y a un ___ pres de chez moi. (park)",
      questionFr: "Completez : Il y a un ___ pres de chez moi. (parc)",
      correct: "parc",
      correctEn: "park",
      alternatives: [],
      explanation: "Un parc = a park. Pres de chez moi = near my house.",
      explanationFr: "Un parc = un parc. Pres de chez moi = pres de chez moi."
    },
    {
      id: "5-l8",
      type: "libre",
      question: "What does ou mean?",
      questionFr: "Que signifie ou ?",
      correct: "where",
      correctEn: "where",
      alternatives: ["where is"],
      explanation: "Ou = where. Very important question word.",
      explanationFr: "Ou = ou. Mot interrogatif tres important."
    },
    {
      id: "5-l9",
      type: "libre",
      question: "Translate: Where are the toilets?",
      questionFr: "Traduisez : Ou sont les toilettes ?",
      correct: "Ou sont les toilettes ?",
      correctEn: "Where are the toilets?",
      alternatives: [],
      explanation: "Les toilettes = the toilets.",
      explanationFr: "Les toilettes = les toilettes."
    },
    {
      id: "5-l10",
      type: "libre",
      question: "Translate: There is a cafe near the station.",
      questionFr: "Traduisez : Il y a un cafe pres de la gare.",
      correct: "Il y a un cafe pres de la gare.",
      correctEn: "There is a cafe near the station.",
      alternatives: [],
      explanation: "Pres de = near. La gare = the station.",
      explanationFr: "Pres de = pres de. La gare = la gare."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_05;
} else {
  window.LESSON_05 = LESSON_05;
}
