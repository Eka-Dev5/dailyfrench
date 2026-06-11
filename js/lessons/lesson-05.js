// lesson-05.js — My Town 🏙️ — Places in town
const LESSON_05 = {
  id: 5,
  title: "My Town 🏙️ — Places in town",
  titleFr: "Ma ville — Les lieux en ville",
  objectiveEn: "Talk about places in town and ask where things are",
  objectiveFr: "Parler des lieux en ville et demander où se trouvent les choses",
  hintEn: "Use IL Y A to say 'there is/are' and OÙ to ask 'where?'",
  hintFr: "Utilisez IL Y A pour dire 'il y a' et OÙ pour demander 'où ?'",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>🏙️ Places in town</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>une banque</td><td><em>*uhn bonk*</em></td><td>a bank</td></tr>
<tr><td>une boulangerie</td><td><em>*uhn boo-lon-ZHREE*</em></td><td>a bakery</td></tr>
<tr><td>une bibliothèque</td><td><em>*uhn bee-blee-oh-TEK*</em></td><td>a library</td></tr>
<tr><td>un café</td><td><em>*uhn kah-FAY*</em></td><td>a café</td></tr>
<tr><td>un cinéma</td><td><em>*uhn see-nay-MAH*</em></td><td>a cinema</td></tr>
<tr><td>un parc</td><td><em>*uhn park*</em></td><td>a park</td></tr>
<tr><td>une pharmacie</td><td><em>*uhn far-mah-SEE*</em></td><td>a pharmacy</td></tr>
<tr><td>un supermarché</td><td><em>*uhn soo-pair-mar-SHAY*</em></td><td>a supermarket</td></tr>
<tr><td>une poste</td><td><em>*uhn post*</em></td><td>a post office</td></tr>
<tr><td>une gare</td><td><em>*uhn gahr*</em></td><td>a train station</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>🧭 Asking where things are</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Où est la banque ?</td><td>Where is the bank?</td></tr>
<tr><td>Où sont les toilettes ?</td><td>Where are the toilets?</td></tr>
<tr><td>Il y a un café ici.</td><td>There is a café here.</td></tr>
<tr><td>Il n'y a pas de pharmacie.</td><td>There isn't a pharmacy.</td></tr>
</table>
</div>
<div class="lesson-warning">⚠️ Use <strong>il y a</strong> for "there is/are" — not "est" alone. Also, <strong>où</strong> means "where".</div>
<div class="lesson-example">
Il y a un parc et une boulangerie près de chez moi. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">There is a park and a bakery near my house.</span>
</div>
  `,
  qcm: [
    {
      id: "5-1",
      type: "qcm",
      question: "'a café' in French:",
      questionFr: "'un café' en anglais :",
      options: ["Un café","Une café","Le café","Des cafés"],
      optionsEn: ["A café","A café","The café","Cafés"],
      correct: "Un café",
      correctEn: "A café",
      explanation: "Un café = a café. Café is masculine: un café.",
      explanationFr: "Un café = un café. Café est masculin : un café."
    },
    {
      id: "5-2",
      type: "qcm",
      question: "'a bakery' in French:",
      questionFr: "'une boulangerie' en anglais :",
      options: ["Une boulangerie","Un boulangerie","Le boulangerie","Des boulangeries"],
      optionsEn: ["A bakery","A bakery","The bakery","Bakeries"],
      correct: "Une boulangerie",
      correctEn: "A bakery",
      explanation: "Boulangerie is feminine: une boulangerie.",
      explanationFr: "Boulangerie est féminin : une boulangerie."
    },
    {
      id: "5-3",
      type: "qcm",
      question: "'Where is the bank?' in French:",
      questionFr: "'Où est la banque ?' en anglais :",
      options: ["Où est la banque ?","Qu'est-ce que la banque ?","Comment est la banque ?","Quand est la banque ?"],
      optionsEn: ["Where is the bank?","What is the bank?","How is the bank?","When is the bank?"],
      correct: "Où est la banque ?",
      correctEn: "Where is the bank?",
      explanation: "Où = where. Use où est... to ask location.",
      explanationFr: "Où = où. Utilisez où est... pour demander un lieu."
    },
    {
      id: "5-4",
      type: "qcm",
      question: "'There is a park here' in French:",
      questionFr: "'Il y a un parc ici.' en anglais :",
      options: ["Il y a un parc ici.","Il est un parc ici.","C'est un parc ici.","Il a un parc ici."],
      optionsEn: ["There is a park here.","It is a park here.","It is a park here.","He has a park here."],
      correct: "Il y a un parc ici.",
      correctEn: "There is a park here.",
      explanation: "Il y a = there is / there are. Very common and very useful.",
      explanationFr: "Il y a = il y a. Très courant et très utile."
    },
    {
      id: "5-5",
      type: "qcm",
      question: "'There isn't a pharmacy' in French:",
      questionFr: "'Il n'y a pas de pharmacie.' en anglais :",
      options: ["Il n'y a pas de pharmacie.","Il ne y a pas une pharmacie.","Il n'a pas de pharmacie.","Il y a pas pharmacie."],
      optionsEn: ["There isn't a pharmacy.","There is not a pharmacy.","He doesn't have a pharmacy.","There is not pharmacy."],
      correct: "Il n'y a pas de pharmacie.",
      correctEn: "There isn't a pharmacy.",
      explanation: "Negative form: il n'y a pas de + noun.",
      explanationFr: "Forme négative : il n'y a pas de + nom."
    },
    {
      id: "5-6",
      type: "qcm",
      question: "'a train station' in French:",
      questionFr: "'une gare' en anglais :",
      options: ["Une gare","Un gare","La gare","Des gares"],
      optionsEn: ["A train station","A train station","The train station","Train stations"],
      correct: "Une gare",
      correctEn: "A train station",
      explanation: "Gare is feminine: une gare.",
      explanationFr: "Gare est féminin : une gare."
    },
    {
      id: "5-7",
      type: "qcm",
      question: "'a pharmacy' in French:",
      questionFr: "'une pharmacie' en anglais :",
      options: ["Une pharmacie","Un pharmacie","Le pharmacie","Des pharmacies"],
      optionsEn: ["A pharmacy","A pharmacy","The pharmacy","Pharmacies"],
      correct: "Une pharmacie",
      correctEn: "A pharmacy",
      explanation: "Pharmacie is feminine: une pharmacie.",
      explanationFr: "Pharmacie est féminin : une pharmacie."
    },
    {
      id: "5-8",
      type: "qcm",
      question: "'a supermarket' in French:",
      questionFr: "'un supermarché' en anglais :",
      options: ["Un supermarché","Une supermarché","Le supermarché","Des supermarchés"],
      optionsEn: ["A supermarket","A supermarket","The supermarket","Supermarkets"],
      correct: "Un supermarché",
      correctEn: "A supermarket",
      explanation: "Supermarché is masculine: un supermarché.",
      explanationFr: "Supermarché est masculin : un supermarché."
    },
    {
      id: "5-9",
      type: "qcm",
      question: "'Where are the toilets?' in French:",
      questionFr: "'Où sont les toilettes ?' en anglais :",
      options: ["Où sont les toilettes ?","Où est les toilettes ?","Où a les toilettes ?","Où les toilettes sont ?"],
      optionsEn: ["Where are the toilets?","Where is the toilets?","Where has the toilets?","Where the toilets are?"],
      correct: "Où sont les toilettes ?",
      correctEn: "Where are the toilets?",
      explanation: "Toilettes is plural in French: les toilettes.",
      explanationFr: "Toilettes est toujours au pluriel en français : les toilettes."
    },
    {
      id: "5-10",
      type: "qcm",
      question: "'a library' in French:",
      questionFr: "'une bibliothèque' en anglais :",
      options: ["Une bibliothèque","Un bibliothèque","La bibliothèque","Des bibliothèques"],
      optionsEn: ["A library","A library","The library","Libraries"],
      correct: "Une bibliothèque",
      correctEn: "A library",
      explanation: "Bibliothèque is feminine: une bibliothèque.",
      explanationFr: "Bibliothèque est féminin : une bibliothèque."
    }
  ],
  libre: [
    {
      id: "5-l1",
      type: "libre",
      question: "Translate: 'Where is the café?'",
      questionFr: "Traduisez : 'Où est le café ?'",
      correct: "Où est le café ?",
      correctEn: "Where is the café?",
      alternatives: [],
      explanation: "Où est... = where is... Use it to ask for a location.",
      explanationFr: "Où est... = où est... Utilisez-le pour demander un lieu."
    },
    {
      id: "5-l2",
      type: "libre",
      question: "How do you say 'There is a park here'?",
      questionFr: "Comment dit-on 'Il y a un parc ici' ?",
      correct: "Il y a un parc ici.",
      correctEn: "There is a park here.",
      alternatives: [],
      explanation: "Il y a = there is / there are.",
      explanationFr: "Il y a = il y a / il y a."
    },
    {
      id: "5-l3",
      type: "libre",
      question: "Translate: 'There isn't a supermarket.'",
      questionFr: "Traduisez : 'Il n'y a pas de supermarché.'",
      correct: "Il n'y a pas de supermarché.",
      correctEn: "There isn't a supermarket.",
      alternatives: [],
      explanation: "Negative with il y a: il n'y a pas de + noun.",
      explanationFr: "Négation avec il y a : il n'y a pas de + nom."
    },
    {
      id: "5-l4",
      type: "libre",
      question: "Complete: 'Où est la ___ ?' (bank)",
      questionFr: "Complétez : 'Où est la ___ ?' (banque)",
      correct: "banque",
      correctEn: "bank",
      alternatives: [],
      explanation: "La banque = the bank. Où est la banque ?",
      explanationFr: "La banque = la banque. Où est la banque ?"
    },
    {
      id: "5-l5",
      type: "libre",
      question: "How do you say 'a post office'?",
      questionFr: "Comment dit-on 'une poste' ?",
      correct: "une poste",
      correctEn: "a post office",
      alternatives: [],
      explanation: "La poste / une poste = post office.",
      explanationFr: "La poste / une poste = une poste."
    },
    {
      id: "5-l6",
      type: "libre",
      question: "Translate: 'There is a pharmacy here.'",
      questionFr: "Traduisez : 'Il y a une pharmacie ici.'",
      correct: "Il y a une pharmacie ici.",
      correctEn: "There is a pharmacy here.",
      alternatives: [],
      explanation: "Une pharmacie = a pharmacy.",
      explanationFr: "Une pharmacie = une pharmacie."
    },
    {
      id: "5-l7",
      type: "libre",
      question: "Complete: 'Il y a un ___ près de chez moi.' (park)",
      questionFr: "Complétez : 'Il y a un ___ près de chez moi.' (parc)",
      correct: "parc",
      correctEn: "park",
      alternatives: [],
      explanation: "Un parc = a park. Près de chez moi = near my house.",
      explanationFr: "Un parc = un parc. Près de chez moi = près de chez moi."
    },
    {
      id: "5-l8",
      type: "libre",
      question: "What does 'où' mean?",
      questionFr: "Que signifie 'où' ?",
      correct: "where",
      correctEn: "where",
      alternatives: ["where is"],
      explanation: "Où = where. Very important question word.",
      explanationFr: "Où = où. Mot interrogatif très important."
    },
    {
      id: "5-l9",
      type: "libre",
      question: "Translate: 'Where are the toilets?'",
      questionFr: "Traduisez : 'Où sont les toilettes ?'",
      correct: "Où sont les toilettes ?",
      correctEn: "Where are the toilets?",
      alternatives: [],
      explanation: "Les toilettes = the toilets.",
      explanationFr: "Les toilettes = les toilettes."
    },
    {
      id: "5-l10",
      type: "libre",
      question: "Translate: 'There is a café near the station.'",
      questionFr: "Traduisez : 'Il y a un café près de la gare.'",
      correct: "Il y a un café près de la gare.",
      correctEn: "There is a café near the station.",
      alternatives: [],
      explanation: "Près de = near. La gare = the station.",
      explanationFr: "Près de = près de. La gare = la gare."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_05;
} else {
  window.LESSON_05 = LESSON_05;
}
