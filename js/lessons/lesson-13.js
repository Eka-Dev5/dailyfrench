// lesson-13.js — My Emotions ❤️ — être + adjectives
const LESSON_13 = {
  id: 13,
  title: `My Emotions ❤️ — être + adjectives`,
  titleFr: `Mes émotions — être + adjectifs`,
  objectiveEn: `Express how you feel using être + adjectives`,
  objectiveFr: `Exprimer ses sentiments avec être + adjectifs`,
  hintEn: `Use ÊTRE for emotions — NEVER 'j'ai fatigué', always 'je suis fatigué'!`,
  hintFr: `Utilisez ÊTRE pour les émotions — JAMAIS 'j'ai fatigué', toujours 'je suis fatigué' !`,
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>❤️ How do you feel? — Je suis + adjective</h4>
<table class="lesson-table">
<tr><th>French (m / f)</th><th>Phonetics</th><th>English</th></tr>
<tr><td>fatigué / fatiguée</td><td><em>*fa-tee-GAY*</em></td><td>tired</td></tr>
<tr><td>content / contente</td><td><em>*kon-TON*</em></td><td>happy / pleased</td></tr>
<tr><td>stressé / stressée</td><td><em>*stress-AY*</em></td><td>stressed</td></tr>
<tr><td>inquiet / inquiète</td><td><em>*an-kee-AY*</em></td><td>worried</td></tr>
<tr><td>motivé / motivée</td><td><em>*mo-tee-VAY*</em></td><td>motivated</td></tr>
<tr><td>triste</td><td><em>*TREEST*</em></td><td>sad</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>💬 Useful emotion phrases</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Je me sens bien / mal.</td><td>I feel good / bad.</td></tr>
<tr><td>Je suis un peu fatigué(e).</td><td>I'm a little tired.</td></tr>
<tr><td>Ça va mieux.</td><td>It's getting better.</td></tr>
</table>
</div>
<div class="lesson-warning">⚠️ Always use <strong>être</strong> for emotions: Je SUIS fatigué. Never "J'AI fatigué"!</div>
<div class="lesson-example">
Je suis fatigué mais content — j'ai fait beaucoup aujourd'hui ! <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">I'm tired but happy — I did a lot today!</span>
</div>
  `,
  qcm: [
    {
      id: `13-1`,
      type: `qcm`,
      question: `I am tired (man speaking) in French:`,
      questionFr: `Je suis fatigué. (homme qui parle) en anglais :`,
      options: [`Je suis fatigué.`,`J'ai fatigué.`,`Je fais fatigué.`,`Je me fatigue.`],
      optionsEn: [`I am tired.`,`I have tired.`,`I do tired.`,`I tire myself.`],
      correct: `Je suis fatigué.`,
      correctEn: `I am tired.`,
      explanation: `ÊTRE for emotions! Je suis fatigué. Woman: je suis fatiguée (add -e).`,
      explanationFr: `ÊTRE pour les émotions ! Je suis fatigué. Femme : je suis fatiguée (ajoutez -e).`
    },
    {
      id: `13-2`,
      type: `qcm`,
      question: `I am happy in French:`,
      questionFr: `Je suis content. en anglais :`,
      options: [`Je suis content.`,`J'ai content.`,`Je fais content.`,`Je me contente.`],
      optionsEn: [`I am happy.`,`I have happy.`,`I do happy.`,`I content myself.`],
      correct: `Je suis content.`,
      correctEn: `I am happy.`,
      explanation: `Content / contente = happy/pleased. Use être, not avoir!`,
      explanationFr: `Content / contente = content / contente. Utilisez être, pas avoir !`
    },
    {
      id: `13-3`,
      type: `qcm`,
      question: `I am stressed in French:`,
      questionFr: `Je suis stressé. en anglais :`,
      options: [`Je suis stressé.`,`J'ai stressé.`,`Je fais stressé.`,`Je stresse.`],
      optionsEn: [`I am stressed.`,`I have stressed.`,`I do stressed.`,`I stress.`],
      correct: `Je suis stressé.`,
      correctEn: `I am stressed.`,
      explanation: `Stressé / stressée = stressed. Je suis stressé (m) / stressée (f).`,
      explanationFr: `Stressé / stressée = stressé / stressée. Je suis stressé (m) / stressée (f).`
    },
    {
      id: `13-4`,
      type: `qcm`,
      question: `I am worried in French:`,
      questionFr: `Je suis inquiet. en anglais :`,
      options: [`Je suis inquiet.`,`J'ai inquiet.`,`Je fais inquiet.`,`Je m'inquiète.`],
      optionsEn: [`I am worried.`,`I have worried.`,`I do worried.`,`I worry myself.`],
      correct: `Je suis inquiet.`,
      correctEn: `I am worried.`,
      explanation: `Inquiet / inquiète = worried. Je suis inquiet (m) / inquiète (f).`,
      explanationFr: `Inquiet / inquiète = inquiet / inquiète. Je suis inquiet (m) / inquiète (f).`
    },
    {
      id: `13-5`,
      type: `qcm`,
      question: `I am motivated in French:`,
      questionFr: `Je suis motivé. en anglais :`,
      options: [`Je suis motivé.`,`J'ai motivé.`,`Je fais motivé.`,`Je me motive.`],
      optionsEn: [`I am motivated.`,`I have motivated.`,`I do motivated.`,`I motivate myself.`],
      correct: `Je suis motivé.`,
      correctEn: `I am motivated.`,
      explanation: `Motivé / motivée = motivated. Je suis motivé (m) / motivée (f).`,
      explanationFr: `Motivé / motivée = motivé / motivée. Je suis motivé (m) / motivée (f).`
    },
    {
      id: `13-6`,
      type: `qcm`,
      question: `I am sad in French:`,
      questionFr: `Je suis triste. en anglais :`,
      options: [`Je suis triste.`,`J'ai triste.`,`Je fais triste.`,`Je me triste.`],
      optionsEn: [`I am sad.`,`I have sad.`,`I do sad.`,`I sad myself.`],
      correct: `Je suis triste.`,
      correctEn: `I am sad.`,
      explanation: `Triste = sad. Same for masculine and feminine. Je suis triste.`,
      explanationFr: `Triste = triste. Identique pour masculin et féminin. Je suis triste.`
    },
    {
      id: `13-7`,
      type: `qcm`,
      question: `I feel good in French:`,
      questionFr: `Je me sens bien. en anglais :`,
      options: [`Je me sens bien.`,`Je suis bien.`,`J'ai bien.`,`Je fais bien.`],
      optionsEn: [`I feel good.`,`I am good.`,`I have good.`,`I do good.`],
      correct: `Je me sens bien.`,
      correctEn: `I feel good.`,
      explanation: `Je me sens = I feel (myself). Se sentir = to feel. Use être for emotions, se sentir for physical feelings.`,
      explanationFr: `Je me sens = je me sens. Se sentir = se sentir. Utilisez être pour les émotions, se sentir pour les sensations physiques.`
    },
    {
      id: `13-8`,
      type: `qcm`,
      question: `It's getting better in French:`,
      questionFr: `Ça va mieux. en anglais :`,
      options: [`Ça va mieux.`,`Ça va bien.`,`Ça va mal.`,`Ça va plus.`],
      optionsEn: [`It's getting better.`,`It's going well.`,`It's going badly.`,`It's going more.`],
      correct: `Ça va mieux.`,
      correctEn: `It's getting better.`,
      explanation: `Mieux = better. Ça va mieux = it's getting better (improving).`,
      explanationFr: `Mieux = mieux. Ça va mieux = ça va mieux (amélioration).`
    },
    {
      id: `13-9`,
      type: `qcm`,
      question: `The feminine form of fatigué is:`,
      questionFr: `La forme féminine de fatigué est :`,
      options: [`fatiguée`,`fatigue`,`fatigante`,`fatiguer`],
      optionsEn: [`tired (f)`,`tired`,`tiring`,`to tire`],
      correct: `fatiguée`,
      correctEn: `tired (f)`,
      explanation: `Add -e for feminine: fatigué (m) → fatiguée (f). Same for content/contente, stressé/stressée.`,
      explanationFr: `Ajoutez -e pour le féminin : fatigué (m) → fatiguée (f). Identique pour content/contente, stressé/stressée.`
    },
    {
      id: `13-10`,
      type: `qcm`,
      question: `Which verb do you use for emotions?`,
      questionFr: `Quel verbe utilisez-vous pour les émotions ?`,
      options: [`être`,`avoir`,`faire`,`aller`],
      optionsEn: [`to be`,`to have`,`to do/make`,`to go`],
      correct: `être`,
      correctEn: `to be`,
      explanation: `ALWAYS use être for emotions: je suis fatigué, je suis content. NEVER j'ai fatigué!`,
      explanationFr: `Utilisez TOUJOURS être pour les émotions : je suis fatigué, je suis content. JAMAIS j'ai fatigué !`
    }
  ],
  libre: [
    {
      id: `13-l1`,
      type: `libre`,
      question: `Translate: I am tired.`,
      questionFr: `Traduisez : Je suis fatigué.`,
      correct: `Je suis fatigué.`,
      correctEn: `I am tired.`,
      alternatives: [],
      explanation: `Je suis = I am. Fatigué = tired (m). Fatiguée = tired (f).`,
      explanationFr: `Je suis = je suis. Fatigué = fatigué (m). Fatiguée = fatiguée (f).`
    },
    {
      id: `13-l2`,
      type: `libre`,
      question: `How do you say I am happy?`,
      questionFr: `Comment dit-on Je suis content ?`,
      correct: `Je suis content.`,
      correctEn: `I am happy.`,
      alternatives: [`Je suis contente.`],
      explanation: `Content (m) / contente (f) = happy/pleased. Use être!`,
      explanationFr: `Content (m) / contente (f) = content / contente. Utilisez être !`
    },
    {
      id: `13-l3`,
      type: `libre`,
      question: `Translate: I am stressed.`,
      questionFr: `Traduisez : Je suis stressé.`,
      correct: `Je suis stressé.`,
      correctEn: `I am stressed.`,
      alternatives: [`Je suis stressée.`],
      explanation: `Stressé (m) / stressée (f) = stressed. Use être, not avoir.`,
      explanationFr: `Stressé (m) / stressée (f) = stressé / stressée. Utilisez être, pas avoir.`
    },
    {
      id: `13-l4`,
      type: `libre`,
      question: `Complete: Je ___ fatigué.`,
      questionFr: `Complétez : Je ___ fatigué.`,
      correct: `suis`,
      correctEn: `am`,
      alternatives: [],
      explanation: `Je suis = I am. This is être (to be) in present tense.`,
      explanationFr: `Je suis = je suis. C'est être au présent.`
    },
    {
      id: `13-l5`,
      type: `libre`,
      question: `Translate: I feel good.`,
      questionFr: `Traduisez : Je me sens bien.`,
      correct: `Je me sens bien.`,
      correctEn: `I feel good.`,
      alternatives: [],
      explanation: `Je me sens = I feel (myself). Se sentir = to feel.`,
      explanationFr: `Je me sens = je me sens. Se sentir = se sentir.`
    },
    {
      id: `13-l6`,
      type: `libre`,
      question: `How do you say I am worried?`,
      questionFr: `Comment dit-on Je suis inquiet ?`,
      correct: `Je suis inquiet.`,
      correctEn: `I am worried.`,
      alternatives: [`Je suis inquiète.`],
      explanation: `Inquiet (m) / inquiète (f) = worried. Use être!`,
      explanationFr: `Inquiet (m) / inquiète (f) = inquiet / inquiète. Utilisez être !`
    },
    {
      id: `13-l7`,
      type: `libre`,
      question: `Translate: It's getting better.`,
      questionFr: `Traduisez : Ça va mieux.`,
      correct: `Ça va mieux.`,
      correctEn: `It's getting better.`,
      alternatives: [],
      explanation: `Mieux = better. Ça va mieux = it's getting better.`,
      explanationFr: `Mieux = mieux. Ça va mieux = ça va mieux.`
    },
    {
      id: `13-l8`,
      type: `libre`,
      question: `Complete: Je suis ___ (motivated, woman).`,
      questionFr: `Complétez : Je suis ___ (motivée, femme).`,
      correct: `motivée`,
      correctEn: `motivated`,
      alternatives: [],
      explanation: `Motivé (m) / motivée (f). Add -e for feminine.`,
      explanationFr: `Motivé (m) / motivée (f). Ajoutez -e pour le féminin.`
    },
    {
      id: `13-l9`,
      type: `libre`,
      question: `What does triste mean?`,
      questionFr: `Que signifie triste ?`,
      correct: `sad`,
      correctEn: `sad`,
      alternatives: [],
      explanation: `Triste = sad. Same for masculine and feminine.`,
      explanationFr: `Triste = triste. Identique pour masculin et féminin.`
    },
    {
      id: `13-l10`,
      type: `libre`,
      question: `Translate: I am a little tired.`,
      questionFr: `Traduisez : Je suis un peu fatigué.`,
      correct: `Je suis un peu fatigué.`,
      correctEn: `I am a little tired.`,
      alternatives: [`Je suis un peu fatiguée.`],
      explanation: `Un peu = a little. Je suis un peu fatigué = I'm a little tired.`,
      explanationFr: `Un peu = un peu. Je suis un peu fatigué = je suis un peu fatigué.`
    }
  ]
};

if (typeof module !== `undefined` && module.exports) {
  module.exports = LESSON_13;
} else {
  window.LESSON_13 = LESSON_13;
}
