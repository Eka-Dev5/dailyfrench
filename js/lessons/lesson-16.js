// lesson-16.js -- Family
const LESSON_16 = {
  id: 16,
  title: "Family",
  titleFr: "La Famille",
  objectiveEn: "Talk about family members and relationships",
  objectiveFr: "Parler des membres de la famille et des relations",
  hintEn: "French family words change for gender: mon frere (my brother) vs ma soeur (my sister)",
  hintFr: "Les mots de famille francais changent selon le genre : mon frere vs ma soeur",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Family members</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>mon mari / ma femme</td><td><em>*mon ma-REE / ma fam*</em></td><td>my husband / my wife <!-- *my HUZ-band / my wyfe* --></td></tr>
<tr><td>mon fils / ma fille</td><td><em>*mon fees / ma fee*</em></td><td>my son / my daughter <!-- *my sun / my DAW-ter* --></td></tr>
<tr><td>mes enfants</td><td><em>*may zan-FON*</em></td><td>my children <!-- *my CHIL-drun* --></td></tr>
<tr><td>mon frere / ma sœur</td><td><em>*mon frair / ma surr*</em></td><td>my brother / my sister <!-- *my BRUH-ther / my SIS-tur* --></td></tr>
<tr><td>mon pere / ma mere</td><td><em>*mon pair / ma mair*</em></td><td>my father / my mother <!-- *my FAH-ther / my MUH-ther* --></td></tr>
<tr><td>mes petits-enfants</td><td><em>*may puh-tee-zan-FON*</em></td><td>my grandchildren <!-- *my GRAN-chil-drun* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Talking about family</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>J'ai deux enfants.</td><td><em>*zhay duh zan-FON*</em></td><td>I have two children. <!-- *eye hav too CHIL-drun* --></td></tr>
<tr><td>Mon frere habite a Paris.</td><td><em>*mon frair a-BEET ah pa-REE*</em></td><td>My brother lives in Paris. <!-- *my BRUH-ther livz in pa-REE* --></td></tr>
<tr><td>Ma sœur est medecin.</td><td><em>*ma surr ay mayd-SAN*</em></td><td>My sister is a doctor. <!-- *my SIS-tur iz uh dok-tur* --></td></tr>
</table>
</div>
<div class="lesson-warning">In French, possessive adjectives agree with the <strong>thing owned</strong>, not the owner: <em>mon</em> frere (my brother) but <em>ma</em> soeur (my sister).</div>
<div class="lesson-example">
-- Tu as des freres et sœurs ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Do you have brothers and sisters?</span><br>
-- Oui, j'ai un frere et deux sœurs. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">Yes, I have one brother and two sisters.</span>
</div>
  `,
  qcm: [
    {
      id: "16-1",
      type: "qcm",
      question: "My husband in French:",
      questionFr: "Mon mari en anglais :",
      options: ["mon mari","ma mari","mon femme","ma femme"],
      optionsEn: ["my husband","my husband (wrong)","my wife","my wife"],
      correct: "mon mari",
      correctEn: "my husband",
      explanation: "Mon mari (mon ma-REE) = my husband. Mari = husband (masculine).",
      explanationFr: "Mon mari = mon mari. Mari = mari (masculin)."
    },
    {
      id: "16-2",
      type: "qcm",
      question: "My wife in French:",
      questionFr: "Ma femme en anglais :",
      options: ["ma femme","mon femme","ma mari","mon mari"],
      optionsEn: ["my wife","my wife (wrong)","my husband","my husband"],
      correct: "ma femme",
      correctEn: "my wife",
      explanation: "Ma femme (ma fam) = my wife. Femme = wife/woman (feminine).",
      explanationFr: "Ma femme = ma femme. Femme = femme / femme (feminin)."
    },
    {
      id: "16-3",
      type: "qcm",
      question: "My son in French:",
      questionFr: "Mon fils en anglais :",
      options: ["mon fils","ma fils","mon fille","ma fille"],
      optionsEn: ["my son","my son (wrong)","my daughter","my daughter"],
      correct: "mon fils",
      correctEn: "my son",
      explanation: "Mon fils (mon fees) = my son. Fils = son (masculine). Silent 'l'.",
      explanationFr: "Mon fils = mon fils. Fils = fils (masculin). 'l' muet."
    },
    {
      id: "16-4",
      type: "qcm",
      question: "My daughter in French:",
      questionFr: "Ma fille en anglais :",
      options: ["ma fille","mon fille","ma fils","mon fils"],
      optionsEn: ["my daughter","my daughter (wrong)","my son","my son"],
      correct: "ma fille",
      correctEn: "my daughter",
      explanation: "Ma fille (ma fee) = my daughter. Fille = daughter/girl (feminine).",
      explanationFr: "Ma fille = ma fille. Fille = fille / fille (feminin)."
    },
    {
      id: "16-5",
      type: "qcm",
      question: "My children in French:",
      questionFr: "Mes enfants en anglais :",
      options: ["mes enfants","mon enfants","ma enfants","les enfants"],
      optionsEn: ["my children","my children (wrong)","my children (wrong)","the children"],
      correct: "mes enfants",
      correctEn: "my children",
      explanation: "Mes enfants (may zan-FON) = my children. Mes = my (plural).",
      explanationFr: "Mes enfants = mes enfants. Mes = mes (pluriel)."
    },
    {
      id: "16-6",
      type: "qcm",
      question: "My brother in French:",
      questionFr: "Mon frere en anglais :",
      options: ["mon frere","ma frere","mon sœur","ma sœur"],
      optionsEn: ["my brother","my brother (wrong)","my sister","my sister"],
      correct: "mon frere",
      correctEn: "my brother",
      explanation: "Mon frere (mon frair) = my brother. Frere = brother (masculine).",
      explanationFr: "Mon frere = mon frere. Frere = frere (masculin)."
    },
    {
      id: "16-7",
      type: "qcm",
      question: "My sister in French:",
      questionFr: "Ma sœur en anglais :",
      options: ["ma sœur","mon sœur","ma frere","mon frere"],
      optionsEn: ["my sister","my sister (wrong)","my brother","my brother"],
      correct: "ma sœur",
      correctEn: "my sister",
      explanation: "Ma sœur (ma surr) = my sister. Sœur = sister (feminine).",
      explanationFr: "Ma sœur = ma sœur. Sœur = sœur (feminin)."
    },
    {
      id: "16-8",
      type: "qcm",
      question: "My father in French:",
      questionFr: "Mon pere en anglais :",
      options: ["mon pere","ma pere","mon mere","ma mere"],
      optionsEn: ["my father","my father (wrong)","my mother","my mother"],
      correct: "mon pere",
      correctEn: "my father",
      explanation: "Mon pere (mon pair) = my father. Pere = father (masculine).",
      explanationFr: "Mon pere = mon pere. Pere = pere (masculin)."
    },
    {
      id: "16-9",
      type: "qcm",
      question: "My mother in French:",
      questionFr: "Ma mere en anglais :",
      options: ["ma mere","mon mere","ma pere","mon pere"],
      optionsEn: ["my mother","my mother (wrong)","my father","my father"],
      correct: "ma mere",
      correctEn: "my mother",
      explanation: "Ma mere (ma mair) = my mother. Mere = mother (feminine).",
      explanationFr: "Ma mere = ma mere. Mere = mere (feminin)."
    },
    {
      id: "16-10",
      type: "qcm",
      question: "My grandchildren in French:",
      questionFr: "Mes petits-enfants en anglais :",
      options: ["mes petits-enfants","mon petits-enfants","ma petits-enfants","les petits-enfants"],
      optionsEn: ["my grandchildren","my grandchildren (wrong)","my grandchildren (wrong)","the grandchildren"],
      correct: "mes petits-enfants",
      correctEn: "my grandchildren",
      explanation: "Mes petits-enfants (may puh-tee-zan-FON) = my grandchildren. Petits = little.",
      explanationFr: "Mes petits-enfants = mes petits-enfants. Petits = petits."
    }
  ],
  libre: [
    {
      id: "16-l1",
      type: "libre",
      question: "Translate: I have two children.",
      questionFr: "Traduisez : J'ai deux enfants.",
      correct: "J'ai deux enfants.",
      correctEn: "I have two children.",
      alternatives: [],
      explanation: "J'ai = I have. Deux = two. Enfants = children.",
      explanationFr: "J'ai = j'ai. Deux = deux. Enfants = enfants."
    },
    {
      id: "16-l2",
      type: "libre",
      question: "How do you say my brother?",
      questionFr: "Comment dit-on mon frere ?",
      correct: "mon frere",
      correctEn: "my brother",
      alternatives: [],
      explanation: "Mon frere = my brother. Mon = my (masculine).",
      explanationFr: "Mon frere = mon frere. Mon = mon (masculin)."
    },
    {
      id: "16-l3",
      type: "libre",
      question: "Translate: My sister is a doctor.",
      questionFr: "Traduisez : Ma sœur est medecin.",
      correct: "Ma sœur est medecin.",
      correctEn: "My sister is a doctor.",
      alternatives: [],
      explanation: "Ma sœur = my sister. Est = is. Medecin = doctor.",
      explanationFr: "Ma sœur = ma sœur. Est = est. Medecin = medecin."
    },
    {
      id: "16-l4",
      type: "libre",
      question: "Complete: ___ fille habite a Lyon.",
      questionFr: "Completez : ___ fille habite a Lyon.",
      correct: "Ma",
      correctEn: "My",
      alternatives: [],
      explanation: "Ma fille = my daughter. Ma = my (feminine).",
      explanationFr: "Ma fille = ma fille. Ma = ma (feminin)."
    },
    {
      id: "16-l5",
      type: "libre",
      question: "How do you say my grandchildren?",
      questionFr: "Comment dit-on mes petits-enfants ?",
      correct: "mes petits-enfants",
      correctEn: "my grandchildren",
      alternatives: [],
      explanation: "Mes petits-enfants = my grandchildren. Mes = my (plural).",
      explanationFr: "Mes petits-enfants = mes petits-enfants. Mes = mes (pluriel)."
    },
    {
      id: "16-l6",
      type: "libre",
      question: "Translate: My father lives in Paris.",
      questionFr: "Traduisez : Mon pere habite a Paris.",
      correct: "Mon pere habite a Paris.",
      correctEn: "My father lives in Paris.",
      alternatives: [],
      explanation: "Mon pere = my father. Habite a = lives in.",
      explanationFr: "Mon pere = mon pere. Habite a = habite a."
    },
    {
      id: "16-l7",
      type: "libre",
      question: "Complete: ___ mere est medecin.",
      questionFr: "Completez : ___ mere est medecin.",
      correct: "Ma",
      correctEn: "My",
      alternatives: [],
      explanation: "Ma mere = my mother. Ma = my (feminine).",
      explanationFr: "Ma mere = ma mere. Ma = ma (feminin)."
    },
    {
      id: "16-l8",
      type: "libre",
      question: "How do you say my husband?",
      questionFr: "Comment dit-on mon mari ?",
      correct: "mon mari",
      correctEn: "my husband",
      alternatives: [],
      explanation: "Mon mari = my husband. Mon = my (masculine).",
      explanationFr: "Mon mari = mon mari. Mon = mon (masculin)."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_16;
} else {
  window.LESSON_16 = LESSON_16;
}
