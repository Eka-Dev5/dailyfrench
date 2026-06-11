// lesson-16.js -- My Family -- Possessives
const LESSON_16 = {
  id: 16,
  title: "My Family -- Possessives",
  titleFr: "Ma famille -- Possessifs",
  objectiveEn: "Talk about family members and use possessives correctly",
  objectiveFr: "Parler des membres de la famille et utiliser les possessifs correctement",
  hintEn: "Mon before masculine, ma before feminine, mes for plural -- except before vowels: mon amie!",
  hintFr: "Mon avant masculin, ma avant feminin, mes au pluriel -- sauf avant voyelle : mon amie !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Family vocabulary</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>mon mari / ma femme</td><td>my husband / my wife</td></tr>
<tr><td>mon fils / ma fille</td><td>my son / my daughter</td></tr>
<tr><td>mes enfants</td><td>my children</td></tr>
<tr><td>mon frere / ma soeur</td><td>my brother / my sister</td></tr>
<tr><td>mon pere / ma mere</td><td>my father / my mother</td></tr>
<tr><td>mes petits-enfants</td><td>my grandchildren</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Possessives: mon / ma / mes</h4>
<table class="lesson-table">
<tr><th>Masculine</th><th>Feminine</th><th>Plural</th></tr>
<tr><td>mon (mari, fils)</td><td>ma (femme, fille)</td><td>mes (enfants)</td></tr>
</table>
</div>
<div class="lesson-warning">Exception: use mon before feminine words starting with a vowel -- mon amie (not ma amie).</div>
<div class="lesson-example">
Mon mari et mes enfants vivent en Angleterre. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
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
      explanationFr: "Ma femme = ma femme. Ma s'utilise avec les noms feminins."
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
      explanationFr: "J'ai = j'ai (avoir). Deux enfants = deux enfants. Pas d'article apres avoir + nombre !"
    },
    {
      id: "16-7",
      type: "qcm",
      question: "My brother in French:",
      questionFr: "Mon frere en anglais :",
      options: ["Mon frere","Ma frere","Mon brother","Le frere mien"],
      optionsEn: ["My brother",",
                  
