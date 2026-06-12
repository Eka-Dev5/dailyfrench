// lesson-10.js -- Politeness & Social Skills
const LESSON_10 = {
  id: 10,
  title: "Politeness & Social Skills",
  titleFr: "Politesse & Savoir-vivre",
  objectiveEn: "Use polite expressions, apologise, ask for help and handle misunderstandings",
  objectiveFr: "Utiliser des expressions polies, s'excuser, demander de l'aide et gerer les malentendus",
  hintEn: "Politeness opens doors in France -- always err on the side of formality!",
  hintFr: "La politesse ouvre les portes en France -- soyez toujours trop formel plutot que pas assez !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Essential polite expressions</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>S'il vous plait</td><td><em>*seel voo PLAY*</em></td><td>Please (formal) <!-- *PLEEZ (for-MAL)* --></td></tr>
<tr><td>Merci (beaucoup)</td><td><em>*mair-SEE (boh-KOO)*</em></td><td>Thank you (very much) <!-- *THAN-k yoo (VEH-ree much)* --></td></tr>
<tr><td>De rien</td><td><em>*duh RYAN*</em></td><td>You re welcome <!-- *yoor WEL-kum* --></td></tr>
<tr><td>Excusez-moi</td><td><em>*ex-kue-ZAY mwah*</em></td><td>Excuse me <!-- *ex-KYOOZ mee* --></td></tr>
<tr><td>Pardon</td><td><em>*par-DON*</em></td><td>Sorry / Pardon <!-- *SOR-ree / PAR-dun* --></td></tr>
<tr><td>Je suis desole(e)</td><td><em>*zhuh swee day-zoh-LAY*</em></td><td>I am sorry <!-- *eye am SOR-ree* --></td></tr>
<tr><td>Pourriez-vous m'aider ?</td><td><em>*poo-ryay-VOO may-DAY*</em></td><td>Could you help me? <!-- *kood yoo HELP mee* --></td></tr>
<tr><td>Je ne comprends pas.</td><td><em>*zhuh nuh kom-PRON PAH*</em></td><td>I don t understand. <!-- *eye DOHNT un-der-STAND* --></td></tr>
<tr><td>Pouvez-vous repeter, s'il vous plait ?</td><td><em>*poo-vay-VOO ruh-pay-TAY, seel voo PLAY*</em></td><td>Could you repeat, please? <!-- *kood yoo ree-PEET, PLEEZ* --></td></tr>
<tr><td>Parlez-vous anglais ?</td><td><em>*par-lay-VOO an-GLAY*</em></td><td>Do you speak English? <!-- *doo yoo SPEEK ING-lish* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>When to use tu vs vous</h4>
<table class="lesson-table">
<tr><th>Person</th><th>Use</th></tr>
<tr><td>Strangers, officials, shopkeepers, elderly</td><td><strong>vous</strong> (formal)</td></tr>
<tr><td>Friends, family, children, colleagues</td><td><strong>tu</strong> (informal)</td></tr>
</table>
</div>
<div class="lesson-warning">When in doubt, always use <strong>vous</strong>. French people will tell you if you can use <strong>tu</strong> -- they may say <em>On peut se tutoyer</em> (We can use tu).</div>
<div class="lesson-example">
-- Excusez-moi, pourriez-vous m'aider ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Excuse me, could you help me?</span><br>
-- Avec plaisir ! Qu'est-ce que vous cherchez ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">With pleasure! What are you looking for?</span>
</div>
  `,
  qcm: [
    {
      id: "10-1",
      type: "qcm",
      question: "Please (formal) in French:",
      questionFr: "S'il vous plait en anglais :",
      options: ["S'il vous plait","S'il te plait","Merci","De rien"],
      optionsEn: ["Please (formal)","Please (informal)","Thank you","You're welcome"],
      correct: "S'il vous plait",
      correctEn: "Please (formal)",
      explanation: "S'il vous plait (seel voo PLAY) = please (formal). S'il te plait = informal.",
      explanationFr: "S'il vous plait = s'il vous plait (formel). S'il te plait = informel."
    },
    {
      id: "10-2",
      type: "qcm",
      question: "Thank you very much in French:",
      questionFr: "Merci beaucoup en anglais :",
      options: ["Merci beaucoup","Merci bien","Merci","De rien"],
      optionsEn: ["Thank you very much","Thank you well","Thank you","You're welcome"],
      correct: "Merci beaucoup",
      correctEn: "Thank you very much",
      explanation: "Merci beaucoup (mair-SEE boh-KOO) = Thank you very much. Beaucoup = very much.",
      explanationFr: "Merci beaucoup = merci beaucoup. Beaucoup = beaucoup."
    },
    {
      id: "10-3",
      type: "qcm",
      question: "You re welcome in French:",
      questionFr: "De rien en anglais :",
      options: ["De rien","Merci","Pardon","Excusez-moi"],
      optionsEn: ["You're welcome","Thank you","Sorry","Excuse me"],
      correct: "De rien",
      correctEn: "You're welcome",
      explanation: "De rien (duh RYAN) = You're welcome. Literally 'of nothing'.",
      explanationFr: "De rien = de rien. Litteralement 'de rien'."
    },
    {
      id: "10-4",
      type: "qcm",
      question: "Excuse me (formal) in French:",
      questionFr: "Excusez-moi en anglais :",
      options: ["Excusez-moi","Excuse-moi","Pardon","Desole"],
      optionsEn: ["Excuse me (formal)","Excuse me (informal)","Sorry","Sorry"],
      correct: "Excusez-moi",
      correctEn: "Excuse me (formal)",
      explanation: "Excusez-moi (ex-kue-ZAY mwah) = Excuse me (formal). Excuse-moi = informal.",
      explanationFr: "Excusez-moi = excusez-moi (formel). Excuse-moi = informel."
    },
    {
      id: "10-5",
      type: "qcm",
      question: "I am sorry in French:",
      questionFr: "Je suis desole en anglais :",
      options: ["Je suis desole.","Pardon.","Excusez-moi.","De rien."],
      optionsEn: ["I am sorry.","Sorry.","Excuse me.","You're welcome."],
      correct: "Je suis desole.",
      correctEn: "I am sorry.",
      explanation: "Je suis desole (zhuh swee day-zoh-LAY) = I am sorry. Add -e if female: desolee.",
      explanationFr: "Je suis desole = je suis desole. Ajoutez -e si femme : desolee."
    },
    {
      id: "10-6",
      type: "qcm",
      question: "Could you help me? in French:",
      questionFr: "Pourriez-vous m'aider ? en anglais :",
      options: ["Pourriez-vous m'aider ?","Pouvez-vous m'aider ?","Aidez-moi ?","M'aidez ?"],
      optionsEn: ["Could you help me?","Can you help me?","Help me?","Help me?"],
      correct: "Pourriez-vous m'aider ?",
      correctEn: "Could you help me?",
      explanation: "Pourriez-vous (poo-ryay-VOO) = Could you (conditional, very polite).",
      explanationFr: "Pourriez-vous = pourriez-vous (conditionnel, tres poli)."
    },
    {
      id: "10-7",
      type: "qcm",
      question: "I don t understand. in French:",
      questionFr: "Je ne comprends pas. en anglais :",
      options: ["Je ne comprends pas.","Je comprends pas.","Je ne sais pas.","Je ne parle pas."],
      optionsEn: ["I don't understand.","I understand not.","I don't know.","I don't speak."],
      correct: "Je ne comprends pas.",
      correctEn: "I don't understand.",
      explanation: "Je ne comprends pas (zhuh nuh kom-PRON PAH) = I don't understand. Essential phrase!",
      explanationFr: "Je ne comprends pas = je ne comprends pas. Phrase essentielle !"
    },
    {
      id: "10-8",
      type: "qcm",
      question: "Could you repeat, please? in French:",
      questionFr: "Pouvez-vous repeter, s'il vous plait ? en anglais :",
      options: ["Pouvez-vous repeter, s'il vous plait ?","Repeter, s'il vous plait.","Encore, s'il vous plait.","Dites encore."],
      optionsEn: ["Could you repeat, please?","Repeat, please.","Again, please.","Say again."],
      correct: "Pouvez-vous repeter, s'il vous plait ?",
      correctEn: "Could you repeat, please?",
      explanation: "Repeter (ruh-pay-TAY) = to repeat. Very useful when learning French!",
      explanationFr: "Repeter = repeter. Tres utile quand on apprend le francais !"
    },
    {
      id: "10-9",
      type: "qcm",
      question: "Do you speak English? in French:",
      questionFr: "Parlez-vous anglais ? en anglais :",
      options: ["Parlez-vous anglais ?","Vous parlez anglais ?","Parle anglais ?","Parles-tu anglais ?"],
      optionsEn: ["Do you speak English?","Do you speak English?","Speak English?","Do you speak English? (informal)"],
      correct: "Parlez-vous anglais ?",
      correctEn: "Do you speak English?",
      explanation: "Parlez-vous anglais ? (par-lay-VOO an-GLAY) = Do you speak English? Use when stuck!",
      explanationFr: "Parlez-vous anglais ? = parlez-vous anglais ? A utiliser en cas de blocage !"
    },
    {
      id: "10-10",
      type: "qcm",
      question: "Sorry (bumping into someone) in French:",
      questionFr: "Pardon (en bousculant quelqu'un) en anglais :",
      options: ["Pardon","Excusez-moi","Desole","De rien"],
      optionsEn: ["Sorry","Excuse me","Sorry","You're welcome"],
      correct: "Pardon",
      correctEn: "Sorry",
      explanation: "Pardon (par-DON) = Sorry for small accidents. Very common in crowded places!",
      explanationFr: "Pardon = pardon pour les petits accidents. Tres courant dans les endroits bondes !"
    }
  ],
  libre: [
    {
      id: "10-l1",
      type: "libre",
      question: "Translate: Thank you very much.",
      questionFr: "Traduisez : Merci beaucoup.",
      correct: "Merci beaucoup.",
      correctEn: "Thank you very much.",
      alternatives: [],
      explanation: "Merci beaucoup = Thank you very much. Beaucoup = very much.",
      explanationFr: "Merci beaucoup = merci beaucoup. Beaucoup = beaucoup."
    },
    {
      id: "10-l2",
      type: "libre",
      question: "How do you say Excuse me (formal)?",
      questionFr: "Comment dit-on Excusez-moi ?",
      correct: "Excusez-moi",
      correctEn: "Excuse me (formal)",
      alternatives: [],
      explanation: "Excusez-moi = Excuse me (formal). Excuse-moi = informal.",
      explanationFr: "Excusez-moi = excusez-moi (formel). Excuse-moi = informel."
    },
    {
      id: "10-l3",
      type: "libre",
      question: "Translate: I don't understand.",
      questionFr: "Traduisez : Je ne comprends pas.",
      correct: "Je ne comprends pas.",
      correctEn: "I don't understand.",
      alternatives: [],
      explanation: "Je ne comprends pas = I don't understand. Essential survival phrase!",
      explanationFr: "Je ne comprends pas = je ne comprends pas. Phrase de survie essentielle !"
    },
    {
      id: "10-l4",
      type: "libre",
      question: "Complete: ___ vous plait.",
      questionFr: "Completez : ___ vous plait.",
      correct: "S'il",
      correctEn: "If it",
      alternatives: [],
      explanation: "S'il vous plait = Please. S'il = if it.",
      explanationFr: "S'il vous plait = s'il vous plait. S'il = s'il."
    },
    {
      id: "10-l5",
      type: "libre",
      question: "How do you say Could you help me?",
      questionFr: "Comment dit-on Pourriez-vous m'aider ?",
      correct: "Pourriez-vous m'aider ?",
      correctEn: "Could you help me?",
      alternatives: [],
      explanation: "Pourriez-vous = Could you (conditional). M'aider = help me.",
      explanationFr: "Pourriez-vous = pourriez-vous (conditionnel). M'aider = m'aider."
    },
    {
      id: "10-l6",
      type: "libre",
      question: "Translate: Do you speak English?",
      questionFr: "Traduisez : Parlez-vous anglais ?",
      correct: "Parlez-vous anglais ?",
      correctEn: "Do you speak English?",
      alternatives: [],
      explanation: "Parlez-vous = Do you speak. Anglais = English.",
      explanationFr: "Parlez-vous = parlez-vous. Anglais = anglais."
    },
    {
      id: "10-l7",
      type: "libre",
      question: "Complete: Je suis ___.",
      questionFr: "Completez : Je suis ___.",
      correct: "desole",
      correctEn: "sorry",
      alternatives: ["desolee"],
      explanation: "Je suis desole = I am sorry. Add -e if female.",
      explanationFr: "Je suis desole = je suis desole. Ajoutez -e si femme."
    },
    {
      id: "10-l8",
      type: "libre",
      question: "How do you say You're welcome?",
      questionFr: "Comment dit-on De rien ?",
      correct: "De rien",
      correctEn: "You're welcome",
      alternatives: [],
      explanation: "De rien = You're welcome. Literally 'of nothing'.",
      explanationFr: "De rien = de rien. Litteralement 'de rien'."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_10;
} else {
  window.LESSON_10 = LESSON_10;
}
