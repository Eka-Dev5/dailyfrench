// lesson-my-family.js
const LESSON_16 = {
  id: 16,
  title: "My Family",
  titleFr: "Ma famille",
  objectiveEn: "Talk about family members and use possessives correctly",
  objectiveFr: "Parler des membres de la famille et utiliser correctement les possessifs",
  hintEn: "Mon before masculine, ma before feminine, mes for plural — except before vowels: mon amie!",
  hintFr: "Mon avant le masculin, ma avant le féminin, mes pour le pluriel — sauf devant voyelle : mon amie !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>👨‍👩‍👧 Family vocabulary</h4>
<table class="lesson-table">
<thead><tr><th>French</th><th>English</th></tr></thead>
<tbody>
<tr><td>mon mari / ma femme</td><td>my husband / my wife</td></tr>
<tr><td>mon fils / ma fille</td><td>my son / my daughter</td></tr>
<tr><td>mes enfants</td><td>my children</td></tr>
<tr><td>mon frère / ma sœur</td><td>my brother / my sister</td></tr>
<tr><td>mon père / ma mère</td><td>my father / my mother</td></tr>
<tr><td>mes petits-enfants</td><td>my grandchildren</td></tr>
</tbody>
</table>
</div>
<div class="lesson-rule">
<h4>📝 Possessives: mon / ma / mes</h4>
<table class="lesson-table">
<thead><tr><th>Masculine</th><th>Feminine</th><th>Plural</th></tr></thead>
<tbody>
</td><td>mon (mari, fils)</td><td>ma (femme, fille)</td><td>mes (enfants)</td></tr>
</tbody>
</table>
</div>
<div class="lesson-warning">⚠️ Exception: use <strong>mon</strong> before feminine words starting with a vowel — <em>mon amie</em> (not "ma amie").</div>
<div class="lesson-example">
Mon mari et mes enfants vivent en Angleterre. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">My husband and my children live in England.</span>
</div>
  `,
  qcm: [
    {
      id: "16-1",
      type: "qcm",
      question: "'My husband' in French:",
      options: ["Mon mari", "Ma mari", "Mon homme", "Le mari mien"],
      correct: "Mon mari",
      explanation: "Mon mari (*mon ma-REE*) = my husband. Mon is used with masculine nouns.",
      explanationFr: "Mon mari = mon mari. Mon est utilisé avec les noms masculins."
    },
    {
      id: "16-2",
      type: "qcm",
      question: "'My wife' in French:",
      options: ["Ma femme", "Mon femme", "Ma wife", "La femme moi"],
      correct: "Ma femme",
      explanation: "Ma femme (*ma FAM*) = my wife. Ma is used with feminine nouns.",
      explanationFr: "Ma femme = ma femme. Ma est utilisé avec les noms féminins."
    },
    {
      id: "16-3",
      type: "qcm",
      question: "'My son' in French:",
      options: ["Mon fils", "Ma fils", "Mon fiston", "Le fils mien"],
      correct: "Mon fils",
      explanation: "Mon fils (*mon feece*) = my son. Careful: fils is pronounced like 'feece'.",
      explanationFr: "Mon fils = mon fils. Attention : fils se prononce 'fisse'."
    },
    {
      id: "16-4",
      type: "qcm",
      question: "'My daughter' in French:",
      options: ["Ma fille", "Mon fille", "Ma girl", "La fille mien"],
      correct: "Ma fille",
      explanation: "Ma fille (*ma FEE*) = my daughter. La fille = the girl/daughter.",
      explanationFr: "Ma fille = ma fille. La fille = la fille."
    },
    {
      id: "16-5",
      type: "qcm",
      question: "'My grandchildren' in French:",
      options: ["Mes petits-enfants", "Mon petit-enfant", "Ma petits-enfants", "Les petits-enfants miens"],
      correct: "Mes petits-enfants",
      explanation: "Mes (*may*) = my (plural). Petits-enfants = grandchildren.",
      explanationFr: "Mes = mes (pluriel). Petits-enfants = petits-enfants."
    },
    {
      id: "16-6",
      type: "qcm",
      question: "'I have two children' in French:",
      options: ["J'ai deux enfants.", "Je suis deux enfants.", "J'ai deux enfants miens.", "Deux enfants j'ai."],
      correct: "J'ai deux enfants.",
      explanation: "J'ai = I have (avoir). Deux enfants = two children. No article needed after avoir + number!",
      explanationFr: "J'ai = j'ai (avoir). Deux enfants = deux enfants. Pas d'article après avoir + nombre !"
    },
    {
      id: "16-7",
      type: "qcm",
      question: "'My brother' in French:",
      options: ["Mon frère", "Ma frère", "Mon brother", "Le frère mien"],
      correct: "Mon frère",
      explanation: "Mon frère (*mon FRAIR*) = my brother. Ma sœur = my sister.",
      explanationFr: "Mon frère = mon frère. Ma sœur = ma sœur."
    },
    {
      id: "16-8",
      type: "qcm",
      question: "'My female friend' — why is it 'mon amie' not 'ma amie'?",
      options: ["Because amie starts with a vowel", "Because amie is masculine", "Because it's wrong", "No reason"],
      correct: "Because amie starts with a vowel",
      explanation: "Before vowels, use mon/ton/son even with feminine nouns: mon amie, mon école.",
      explanationFr: "Devant une voyelle, utilisez mon/ton/son même avec les noms féminins : mon amie, mon école."
    },
    {
      id: "16-9",
      type: "qcm",
      question: "'My parents' in French:",
      options: ["Mes parents", "Mon parent", "Ma parents", "Les parents miens"],
      correct: "Mes parents",
      explanation: "Mes parents (*may pa-RON*) = my parents. Always plural.",
      explanationFr: "Mes parents = mes parents. Toujours pluriel."
    },
    {
      id: "16-10",
      type: "qcm",
      question: "'We have three grandchildren' in French:",
      options: ["Nous avons trois petits-enfants.", "Nous sommes trois petits-enfants.", "On a trois petits-enfants.", "Nos petits-enfants sont trois."],
      correct: "Nous avons trois petits-enfants.",
      explanation: "Nous avons = we have. On a = we have (informal). Both correct.",
      explanationFr: "Nous avons = nous avons. On a = on a (informel). Les deux sont corrects."
    }
  ],
  libre: [
    {
      id: "16-l1",
      type: "libre",
      question: "Translate: 'My husband is retired.'",
      correct: "Mon mari est retraité.",
      alternatives: [],
      explanation: "Retraité(e) = retired. Mon mari = my husband.",
      explanationFr: "Retraité(e) = retraité(e). Mon mari = mon mari."
    },
    {
      id: "16-l2",
      type: "libre",
      question: "How do you say 'I have two daughters'?",
      correct: "J'ai deux filles.",
      alternatives: [],
      explanation: "Deux filles = two daughters. J'ai = I have.",
      explanationFr: "Deux filles = deux filles. J'ai = j'ai."
    },
    {
      id: "16-l3",
      type: "libre",
      question: "Complete: '___ mère habite en Angleterre.'",
      correct: "Ma",
      alternatives: [],
      explanation: "Ma mère = my mother. Mère is feminine.",
      explanationFr: "Ma mère = ma mère. Mère est féminin."
    },
    {
      id: "16-l4",
      type: "libre",
      question: "Translate: 'My children live in France.'",
      correct: "Mes enfants habitent en France.",
      alternatives: [],
      explanation: "Mes = my (plural). En France = in France.",
      explanationFr: "Mes = mes (pluriel). En France = en France."
    },
    {
      id: "16-l5",
      type: "libre",
      question: "How do you say 'my sister'?",
      correct: "ma sœur",
      alternatives: [],
      explanation: "Ma sœur (*ma SURR*) = my sister. Ma = my (feminine).",
      explanationFr: "Ma sœur = ma sœur. Ma = ma (féminin)."
    },
    {
      id: "16-l6",
      type: "libre",
      question: "Complete: '___ amie s'appelle Helen.' (my female friend)",
      correct: "Mon",
      alternatives: [],
      explanation: "Mon amie — use mon before any noun starting with a vowel, even feminine ones!",
      explanationFr: "Mon amie — utilisez mon devant tout nom commençant par une voyelle, même féminin !"
    },
    {
      id: "16-l7",
      type: "libre",
      question: "Translate: 'I have four grandchildren.'",
      correct: "J'ai quatre petits-enfants.",
      alternatives: [],
      explanation: "Quatre = four. Petits-enfants = grandchildren.",
      explanationFr: "Quatre = quatre. Petits-enfants = petits-enfants."
    },
    {
      id: "16-l8",
      type: "libre",
      question: "What is 'mes parents' in English?",
      correct: "my parents",
      alternatives: [],
      explanation: "Mes = my (plural). Parents = parents.",
      explanationFr: "Mes = mes (pluriel). Parents = parents."
    },
    {
      id: "16-l9",
      type: "libre",
      question: "Translate: 'My son is a doctor.'",
      correct: "Mon fils est médecin.",
      alternatives: [],
      explanation: "Mon fils = my son. Médecin = doctor (no article in French!).",
      explanationFr: "Mon fils = mon fils. Médecin = médecin (pas d'article en français !)."
    },
    {
      id: "16-l10",
      type: "libre",
      question: "Complete: 'J'ai ___ enfants.'",
      correct: "deux",
      alternatives: ["trois", "quatre", "cinq"],
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