// lesson-16.js — My Family 👨‍👩‍👧 — Possessives
const LESSON_16 = {
  id: 16,
  title: "My Family 👨‍👩‍👧 — Possessives",
  titleFr: "Ma famille — Possessifs",
  objectiveEn: "Talk about family members and use possessives correctly",
  objectiveFr: "Parler des membres de la famille et utiliser les possessifs correctement",
  hintEn: "Mon before masculine, ma before feminine, mes for plural — except before vowels: mon amie!",
  hintFr: "Mon avant masculin, ma avant féminin, mes au pluriel — sauf avant voyelle : mon amie !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>👨‍👩‍👧 Family vocabulary</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>mon mari / ma femme</td><td>my husband / my wife</td></tr>
<tr><td>mon fils / ma fille</td><td>my son / my daughter</td></tr>
<tr><td>mes enfants</td><td>my children</td></tr>
<tr><td>mon frère / ma sœur</td><td>my brother / my sister</td></tr>
<tr><td>mon père / ma mère</td><td>my father / my mother</td></tr>
<tr><td>mes petits-enfants</td><td>my grandchildren</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>📝 Possessives: mon / ma / mes</h4>
<table class="lesson-table">
<tr><th>Masculine</th><th>Feminine</th><th>Plural</th></tr>
<tr><td>mon (mari, fils)</td><td>ma (femme, fille)</td><td>mes (enfants)</td></tr>
</table>
</div>
<div class="lesson-warning">⚠️ Exception: use mon before feminine words starting with a vowel — mon amie (not ma amie).</div>
<div class="lesson-example">
Mon mari et mes enfants vivent en Angleterre. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">My husband and my children live in England.</span>
</div>
  `,
  qcm: [
    {
      id: "16-1",
      type: "qcm",
      question: "My husband in French:",
      questionFr: "Mon mari en anglais :",
      options: ["Mon mari","Ma mari","Mon homme","Le mari mien"],
      optionsEn: ["My husband","My husband","My man","The husband mine"],
      correct: "Mon mari",
      correctEn: "My husband",
      explanation: "Mon mari (mon ma-REE) = my husband. Mon is used with masculine nouns.",
      explanationFr: "Mon mari = mon mari. Mon s'utilise avec les noms masculins."
    },
    {
      id: "16-2",
      type: "qcm",
      question: "My wife in French:",
      questionFr: "Ma femme en anglais :",
      options: ["Ma femme","Mon femme","Ma wife","La femme moi"],
      optionsEn: ["My wife","My wife","My wife","The wife me"],
      correct: "Ma femme",
      correctEn: "My wife",
      explanation: "Ma femme (ma FAM) = my wife. Ma is used with feminine nouns.",
      explanationFr: "Ma femme = ma femme. Ma s'utilise avec les noms féminins."
    },
    {
      id: "16-3",
      type: "qcm",
      question: "My son in French:",
      questionFr: "Mon fils en anglais :",
      options: ["Mon fils","Ma fils","Mon fiston","Le fils mien"],
      optionsEn: ["My son","My son","My little son","The son mine"],
      correct: "Mon fils",
      correctEn: "My son",
      explanation: "Mon fils (mon feece) = my son. Careful: fils is pronounced like feece.",
      explanationFr: "Mon fils = mon fils. Attention : fils se prononce fisse."
    },
    {
      id: "16-4",
      type: "qcm",
      question: "My daughter in French:",
      questionFr: "Ma fille en anglais :",
      options: ["Ma fille","Mon fille","Ma girl","La fille mien"],
      optionsEn: ["My daughter","My daughter","My girl","The daughter mine"],
      correct: "Ma fille",
      correctEn: "My daughter",
      explanation: "Ma fille (ma FEE) = my daughter. La fille = the girl/daughter.",
      explanationFr: "Ma fille = ma fille. La fille = la fille / la fille."
    },
    {
      id: "16-5",
      type: "qcm",
      question: "My grandchildren in French:",
      questionFr: "Mes petits-enfants en anglais :",
      options: ["Mes petits-enfants","Mon petit-enfant","Ma petits-enfants","Les petits-enfants miens"],
      optionsEn: ["My grandchildren","My grandchild","My grandchildren","The grandchildren mine"],
      correct: "Mes petits-enfants",
      correctEn: "My grandchildren",
      explanation: "Mes (may) = my (plural). Petits-enfants = grandchildren.",
      explanationFr: "Mes = mes (pluriel). Petits-enfants = petits-enfants."
    },
    {
      id: "16-6",
      type: "qcm",
      question: "I have two children in French:",
      questionFr: "J'ai deux enfants. en anglais :",
      options: ["J'ai deux enfants.","Je suis deux enfants.","J'ai deux enfants miens.","Deux enfants j'ai."],
      optionsEn: ["I have two children.","I am two children.","I have two children mine.","Two children I have."],
      correct: "J'ai deux enfants.",
      correctEn: "I have two children.",
      explanation: "J'ai = I have (avoir). Deux enfants = two children. No article needed after avoir + number!",
      explanationFr: "J'ai = j'ai (avoir). Deux enfants = deux enfants. Pas d'article après avoir + nombre !"
    },
    {
      id: "16-7",
      type: "qcm",
      question: "My brother in French:",
      questionFr: "Mon frère en anglais :",
      options: ["Mon frère","Ma frère","Mon brother","Le frère mien"],
      optionsEn: ["My brother","My brother","My brother","The brother mine"],
      correct: "Mon frère",
      correctEn: "My brother",
      explanation: "Mon frère (mon FRAIR) = my brother. Ma sœur = my sister.",
      explanationFr: "Mon frère = mon frère. Ma sœur = ma sœur."
    },
    {
      id: "16-8",
      type: "qcm",
      question: "My female friend — why is it mon amie not ma amie?",
      questionFr: "Mon amie — pourquoi pas ma amie ?",
      options: ["Because amie starts with a vowel","Because amie is masculine","Because it's wrong","No reason"],
      optionsEn: ["Because amie starts with a vowel","Because amie is masculine","Because it's wrong","No reason"],
      correct: "Because amie starts with a vowel",
      correctEn: "Because amie starts with a vowel",
      explanation: "Before vowels, use mon/ton/son even with feminine nouns: mon amie, mon école.",
      explanationFr: "Avant une voyelle, on utilise mon/ton/son même avec un nom féminin : mon amie, mon école."
    },
    {
      id: "16-9",
      type: "qcm",
      question: "My parents in French:",
      questionFr: "Mes parents en anglais :",
      options: ["Mes parents","Mon parent","Ma parents","Les parents miens"],
      optionsEn: ["My parents","My parent","My parents","The parents mine"],
      correct: "Mes parents",
      correctEn: "My parents",
      explanation: "Mes parents (may pa-RON) = my parents. Always plural.",
      explanationFr: "Mes parents = mes parents. Toujours au pluriel."
    },
    {
      id: "16-10",
      type: "qcm",
      question: "We have three grandchildren in French:",
      questionFr: "Nous avons trois petits-enfants. en anglais :",
      options: ["Nous avons trois petits-enfants.","Nous sommes trois petits-enfants.","On a trois petits-enfants.","Nos petits-enfants sont trois."],
      optionsEn: ["We have three grandchildren.","We are three grandchildren.","We have three grandchildren.","Our grandchildren are three."],
      correct: "Nous avons trois petits-enfants.",
      correctEn: "We have three grandchildren.",
      explanation: "Nous avons = we have. On a = we have (informal). Both correct.",
      explanationFr: "Nous avons = nous avons. On a = on a (informel). Les deux sont corrects."
    }
  ],
  libre: [
    {
      id: "16-l1",
      type: "libre",
      question: "Translate: My husband is retired.",
      questionFr: "Traduisez : Mon mari est retraité.",
      correct: "Mon mari est retraité.",
      correctEn: "My husband is retired.",
      alternatives: [],
      explanation: "Retraité(e) = retired. Mon mari = my husband.",
      explanationFr: "Retraité = retraité. Mon mari = mon mari."
    },
    {
      id: "16-l2",
      type: "libre",
      question: "How do you say I have two daughters?",
      questionFr: "Comment dit-on J'ai deux filles ?",
      correct: "J'ai deux filles.",
      correctEn: "I have two daughters.",
      alternatives: [],
      explanation: "Deux filles = two daughters. J'ai = I have.",
      explanationFr: "Deux filles = deux filles. J'ai = j'ai."
    },
    {
      id: "16-l3",
      type: "libre",
      question: "Complete: ___ mère habite en Angleterre.",
      questionFr: "Complétez : ___ mère habite en Angleterre.",
      correct: "Ma",
      correctEn: "My",
      alternatives: [],
      explanation: "Ma mère = my mother. Mère is feminine.",
      explanationFr: "Ma mère = ma mère. Mère est féminin."
    },
    {
      id: "16-l4",
      type: "libre",
      question: "Translate: My children live in France.",
      questionFr: "Traduisez : Mes enfants habitent en France.",
      correct: "Mes enfants habitent en France.",
      correctEn: "My children live in France.",
      alternatives: [],
      explanation: "Mes = my (plural). En France = in France.",
      explanationFr: "Mes = mes (pluriel). En France = en France."
    },
    {
      id: "16-l5",
      type: "libre",
      question: "How do you say my sister?",
      questionFr: "Comment dit-on ma sœur ?",
      correct: "ma sœur",
      correctEn: "my sister",
      alternatives: [],
      explanation: "Ma sœur (ma SURR) = my sister. Ma = my (feminine).",
      explanationFr: "Ma sœur = ma sœur. Ma = ma (féminin)."
    },
    {
      id: "16-l6",
      type: "libre",
      question: "Complete: ___ amie s'appelle Helen. (my female friend)",
      questionFr: "Complétez : ___ amie s'appelle Helen. (mon amie)",
      correct: "Mon",
      correctEn: "My",
      alternatives: [],
      explanation: "Mon amie — use mon before any noun starting with a vowel, even feminine ones!",
      explanationFr: "Mon amie — utilisez mon avant tout nom commençant par une voyelle, même féminin !"
    },
    {
      id: "16-l7",
      type: "libre",
      question: "Translate: I have four grandchildren.",
      questionFr: "Traduisez : J'ai quatre petits-enfants.",
      correct: "J'ai quatre petits-enfants.",
      correctEn: "I have four grandchildren.",
      alternatives: [],
      explanation: "Quatre = four. Petits-enfants = grandchildren.",
      explanationFr: "Quatre = quatre. Petits-enfants = petits-enfants."
    },
    {
      id: "16-l8",
      type: "libre",
      question: "What is mes parents in English?",
      questionFr: "Que signifie mes parents en anglais ?",
      correct: "my parents",
      correctEn: "my parents",
      alternatives: [],
      explanation: "Mes = my (plural). Parents = parents.",
      explanationFr: "Mes = mes (pluriel). Parents = parents."
    },
    {
      id: "16-l9",
      type: "libre",
      question: "Translate: My son is a doctor.",
      questionFr: "Traduisez : Mon fils est médecin.",
      correct: "Mon fils est médecin.",
      correctEn: "My son is a doctor.",
      alternatives: [],
      explanation: "Mon fils = my son. Médecin = doctor (no article in French!).",
      explanationFr: "Mon fils = mon fils. Médecin = médecin (pas d'article en français !)."
    },
    {
      id: "16-l10",
      type: "libre",
      question: "Complete: J'ai ___ enfants.",
      questionFr: "Complétez : J'ai ___ enfants.",
      correct: "deux",
      correctEn: "two",
      alternatives: ["trois","quatre","cinq"],
      explanation: "J'ai X enfants = I have X children. No article after avoir + number.",
      explanationFr: "J'ai X enfants = j'ai X enfants. Pas d'article après avoir + nombre."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_16;
} else {
  window.LESSON_16 = LESSON_16;
}

