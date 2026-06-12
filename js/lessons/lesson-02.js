// lesson-02.js -- At the Market
const LESSON_02 = {
  id: 2,
  title: "At the Market",
  titleFr: "Au marche",
  objectiveEn: "Buy food at a French market, ask prices, use polite requests",
  objectiveFr: "Acheter de la nourriture au marche francais, demander les prix, utiliser des demandes polies",
  hintEn: "Always add s il vous plait -- French market vendors appreciate politeness!",
  hintFr: "Ajoutez toujours s il vous plait -- les marchands francais apprecient la politesse !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Useful phrases at the market</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>Je voudrais...</td><td><em>*zhuh voo-DRAY*</em></td><td>I would like... <!-- *eye wood LAYK* --></td></tr>
<tr><td>Avez-vous... ?</td><td><em>*a-vay-VOO*</em></td><td>Do you have... ? <!-- *doo yoo HAV* --></td></tr>
<tr><td>C est combien ?</td><td><em>*say kom-BYAN*</em></td><td>How much is it? <!-- *how MUCH iz it* --></td></tr>
<tr><td>Un kilo de..., s il vous plait.</td><td><em>*uhn kee-LOH duh... seel voo PLAY*</em></td><td>One kilo of..., please. <!-- *wun KEE-loh of... PLEEZ* --></td></tr>
<tr><td>C est tout, merci.</td><td><em>*say too, mair-SEE*</em></td><td>That s all, thank you. <!-- *that s all, THAN-k yoo* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Numbers for quantities</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>un / une</td><td><em>*uhn / oon*</em></td><td>one <!-- *wun* --></td></tr>
<tr><td>deux / trois</td><td><em>*duh / trwah*</em></td><td>two / three <!-- *too / three* --></td></tr>
<tr><td>un demi-kilo</td><td><em>*uhn duh-MEE kee-LOH*</em></td><td>half a kilo <!-- *haf uh KEE-loh* --></td></tr>
<tr><td>une tranche de</td><td><em>*oon tronsh duh*</em></td><td>a slice of <!-- *uh slahys of* --></td></tr>
</table>
</div>
<div class="lesson-warning">Always say <strong>s il vous plait</strong> -- being polite is essential in French shops and markets!</div>
<div class="lesson-example">
<strong>Dialogue :</strong><br>
-- Bonjour ! Je voudrais un kilo de tomates, s il vous plait. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Hello! I would like a kilo of tomatoes, please.</span><br>
-- Voila ! C est tout ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Here you go! Is that everything?</span>
</div>
  `,
  qcm: [
    {
      id: "02-1",
      type: "qcm",
      question: "I would like a kilo of tomatoes, please. in French:",
      questionFr: "Traduisez : Je voudrais un kilo de tomates, s il vous plait.",
      options: ["Je voudrais un kilo de tomates, s il vous plait.","Je veux tomates un kilo.","Un kilo tomates merci.","J ai un kilo de tomates."],
      optionsEn: ["I would like a kilo of tomatoes, please.","I want tomatoes one kilo.","One kilo tomatoes thanks.","I have a kilo of tomatoes."],
      correct: "Je voudrais un kilo de tomates, s il vous plait.",
      correctEn: "I would like a kilo of tomatoes, please.",
      explanation: "Je voudrais (zhuh voo-DRAY) = I would like. Much more polite than Je veux (I want).",
      explanationFr: "Je voudrais = Je voudrais. Beaucoup plus poli que Je veux."
    },
    {
      id: "02-2",
      type: "qcm",
      question: "How do you ask How much is it?",
      questionFr: "Comment demande-t-on How much is it? ?",
      options: ["C est combien ?","Quel prix ?","Combien vous ?","C est cher ?"],
      optionsEn: ["How much is it?","What price?","How much you?","It s expensive?"],
      correct: "C est combien ?",
      correctEn: "How much is it?",
      explanation: "C est combien ? (say kom-BYAN) = How much is it? Very common at markets.",
      explanationFr: "C est combien ? = C est combien ? Tres courant au marche."
    },
    {
      id: "02-3",
      type: "qcm",
      question: "That s all, thank you. in French:",
      questionFr: "Traduisez : C est tout, merci.",
      options: ["C est tout, merci.","Tout fini merci.","C est bon au revoir.","Fin merci."],
      optionsEn: ["That s all, thank you.","All finished thanks.","It s good goodbye.","End thanks."],
      correct: "C est tout, merci.",
      correctEn: "That s all, thank you.",
      explanation: "C est tout (say too) = That s all. Say this to end your shopping transaction politely.",
      explanationFr: "C est tout = C est tout. Dites ceci pour terminer poliment votre achat."
    },
    {
      id: "02-4",
      type: "qcm",
      question: "Do you have tomatoes? in French:",
      questionFr: "Traduisez : Avez-vous des tomates ?",
      options: ["Avez-vous des tomates ?","Vous avez tomates ?","J ai des tomates ?","Aimez-vous tomates ?"],
      optionsEn: ["Do you have tomatoes?","You have tomatoes?","I have tomatoes?","Do you like tomatoes?"],
      correct: "Avez-vous des tomates ?",
      correctEn: "Do you have tomatoes?",
      explanation: "Avez-vous ? (a-vay-VOO) = Do you have? Very polite formal question form.",
      explanationFr: "Avez-vous ? = Avez-vous ? Forme de question formelle tres polie."
    },
    {
      id: "02-5",
      type: "qcm",
      question: "Half a kilo in French:",
      questionFr: "Half a kilo en francais :",
      options: ["Un demi-kilo","Une demi-kilo","Demi kilogram","Moitie kilo"],
      optionsEn: ["Half a kilo","A half-kilo","Half kilogram","Half kilo"],
      correct: "Un demi-kilo",
      correctEn: "Half a kilo",
      explanation: "Un demi-kilo = half a kilo. Demi (duh-MEE) = half.",
      explanationFr: "Un demi-kilo = Un demi-kilo. Demi = Demi."
    },
    {
      id: "02-6",
      type: "qcm",
      question: "A slice of ham, please. in French:",
      questionFr: "Traduisez : Une tranche de jambon, s il vous plait.",
      options: ["Une tranche de jambon, s il vous plait.","Un morceau jambon.","Du jambon tranche.","Un jambon coupe."],
      optionsEn: ["A slice of ham, please.","A piece ham.","Some ham slice.","A ham cut."],
      correct: "Une tranche de jambon, s il vous plait.",
      correctEn: "A slice of ham, please.",
      explanation: "Une tranche de = a slice of. Une tranche (tronshe) is used for bread, ham, cheese.",
      explanationFr: "Une tranche de = une tranche de. Utilise pour le pain, le jambon, le fromage."
    },
    {
      id: "02-7",
      type: "qcm",
      question: "Which phrase means It s too expensive?",
      questionFr: "Quelle phrase signifie C est trop cher ?",
      options: ["C est trop cher.","C est combien ?","Pas trop merci.","C est bon prix."],
      optionsEn: ["It s too expensive.","How much is it?","Not too thanks.","It s good price."],
      correct: "C est trop cher.",
      correctEn: "It s too expensive.",
      explanation: "C est trop cher (say tro shair) = It s too expensive. Trop = too much.",
      explanationFr: "C est trop cher = C est trop cher. Trop = trop."
    },
    {
      id: "02-8",
      type: "qcm",
      question: "I ll take it. at the market:",
      questionFr: "Je le prends. au marche :",
      options: ["Je le prends.","J ai ca.","Je veux ca.","Donnez-moi."],
      optionsEn: ["I ll take it.","I have that.","I want that.","Give me."],
      correct: "Je le prends.",
      correctEn: "I ll take it.",
      explanation: "Je le prends = I ll take it. This is the natural way to say you ll buy something.",
      explanationFr: "Je le prends = Je le prends. C est la facon naturelle de dire que vous allez acheter quelque chose."
    },
    {
      id: "02-9",
      type: "qcm",
      question: "The polite word for please (formal) in French:",
      questionFr: "Le mot poli pour please (formel) en francais :",
      options: ["S il vous plait","Merci","De rien","Excusez-moi"],
      optionsEn: ["Please","Thank you","You re welcome","Excuse me"],
      correct: "S il vous plait",
      correctEn: "Please",
      explanation: "S il vous plait (seel voo PLAY) = please (formal). Use s il te plait with friends.",
      explanationFr: "S il vous plait = S il vous plait (formel). Utilisez s il te plait avec les amis."
    },
    {
      id: "02-10",
      type: "qcm",
      question: "Three hundred grams of cheese in French:",
      questionFr: "Three hundred grams of cheese en francais :",
      options: ["Trois cents grammes de fromage","300 fromage","Trois fromage cents","Du fromage 300"],
      optionsEn: ["Three hundred grams of cheese","300 cheese","Three cheese hundred","Some cheese 300"],
      correct: "Trois cents grammes de fromage",
      correctEn: "Three hundred grams of cheese",
      explanation: "Trois cents grammes = 300g. At French markets, always specify weight clearly.",
      explanationFr: "Trois cents grammes = 300g. Aux marches francais, specifiez toujours le poids clairement."
    }
  ],
  libre: [
    {
      id: "02-l1",
      type: "libre",
      question: "How do you say I would like some apples?",
      questionFr: "Comment dit-on Je voudrais des pommes ?",
      correct: "Je voudrais des pommes.",
      correctEn: "I would like some apples.",
      alternatives: [],
      explanation: "Des pommes = some apples. Use des for plural uncountable.",
      explanationFr: "Des pommes = des pommes. Utilisez des pour le pluriel indenombrable."
    },
    {
      id: "02-l2",
      type: "libre",
      question: "Ask the vendor Do you have local honey?",
      questionFr: "Demandez au vendeur Avez-vous du miel local ?",
      correct: "Avez-vous du miel local ?",
      correctEn: "Do you have local honey?",
      alternatives: ["Vous avez du miel local ?"],
      explanation: "Avez-vous = do you have (formal). Du miel = some honey.",
      explanationFr: "Avez-vous = avez-vous (formel). Du miel = du miel."
    },
    {
      id: "02-l3",
      type: "libre",
      question: "Translate: Two kilos of potatoes, please.",
      questionFr: "Traduisez : Deux kilos de pommes de terre, s il vous plait.",
      correct: "Deux kilos de pommes de terre, s il vous plait.",
      correctEn: "Two kilos of potatoes, please.",
      alternatives: [],
      explanation: "Deux kilos = two kilos. Pommes de terre = potatoes.",
      explanationFr: "Deux kilos = deux kilos. Pommes de terre = pommes de terre."
    },
    {
      id: "02-l4",
      type: "libre",
      question: "How much is it? in French:",
      questionFr: "How much is it? en francais :",
      correct: "C est combien ?",
      correctEn: "How much is it?",
      alternatives: ["Combien ca coute ?"],
      explanation: "C est combien ? = How much is it? Most natural at markets.",
      explanationFr: "C est combien ? = C est combien ? Le plus naturel au marche."
    },
    {
      id: "02-l5",
      type: "libre",
      question: "Complete: ___ kilo de fromage, s il vous plait.",
      questionFr: "Completez : ___ kilo de fromage, s il vous plait.",
      correct: "Un",
      correctEn: "One",
      alternatives: [],
      explanation: "Un kilo = one kilo. Un = masculine.",
      explanationFr: "Un kilo = un kilo. Un = masculin."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_02;
} else {
  window.LESSON_02 = LESSON_02;
}
