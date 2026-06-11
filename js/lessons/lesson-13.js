// my-emotions.js
const LESSON_13 = {
  id: 13,
  title: "My Emotions",
  titleFr: "Mes émotions",
  objectiveEn: "Express how you feel using être + adjectives",
  objectiveFr: "Exprimer comment vous vous sentez en utilisant être + adjectifs",
  hintEn: "Use ÊTRE for emotions — NEVER 'j'ai fatigué', always 'je suis fatigué'!",
  hintFr: "Utilisez ÊTRE pour les émotions — JAMAIS 'j'ai fatigué', toujours 'je suis fatigué' !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>❤️ How do you feel? — Je suis + adjective</h4>
<table class="lesson-table">
<thead>
<tr><th>French (m / f)</th><th>Phonetics</th><th>English</th></tr>
</thead>
<tbody>
<tr><td class=\"\">fatigué / fatiguée<\/td><td><em>*fa-tee-GAY*<\/em><\/td><td>tired<\/td><\/tr>
<tr><td class=\"\">content / contente<\/td><td><em>*kon-TON*<\/em><\/td><td>happy / pleased<\/td><\/tr>
</tr><td class=\"\">stressé / stressée<\/td><td><em>*stress-AY*<\/em><\/td><td>stressed<\/td><\/tr>
<tr><td class=\"\">inquiet / inquiète<\/td><td><em>*an-kee-AY*<\/em><\/td><td>worried<\/td><\/tr>
<tr><td class=\"\">motivé / motivée<\/td><td><em>*mo-tee-VAY*<\/em><\/td><td>motivated<\/td><\/tr>
<tr><td class=\"\">triste<\/td><td><em>*TREEST*<\/em><\/td><td>sad<\/td><\/tr>
</tbody>
<\/table>
<\/div>
<div class="lesson-rule">
<h4>💬 Useful emotion phrases</h4>
<table class="lesson-table">
<thead>
<tr><th>French</th><th>English</th></tr>
</thead>
<tbody>
<tr><td class=\"\">Je me sens bien / mal.<\/td><td>I feel good / bad.<\/td><\/tr>
<tr><td class=\"\">Je suis un peu fatigué(e).<\/td><td>I'm a little tired.<\/td><\/tr>
<tr><td class=\"\">Ça va mieux.<\/td><td>It's getting better.<\/td><\/tr>
</tbody>
<\/table>
<\/div>
<div class="lesson-warning">⚠️ Always use <strong>être</strong> for emotions: Je SUIS fatigué. Never "J'AI fatigué"!</div>
<div class="lesson-example">
Je suis fatigué mais content — j'ai fait beaucoup aujourd'hui !
<button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">🇬🇧 English</button>
<span class="lesson-ex-en">I'm tired but happy — I did a lot today!</span>
</div>
  `,
  qcm: [
    {
      id: "13-1",
      type: "qcm",
      question: "'I am tired' (man speaking) in French:",
      questionFr: "Comment dit-on 'Je suis fatigué' (homme) ?",
      options: ["Je suis fatigué.", "J'ai fatigué.", "Je fais fatigué.", "Je me fatigue."],
      optionsEn: ["I am tired (m)", "I have tired", "I do tired", "I get tired"],
      correct: "Je suis fatigué.",
      correctEn: "I am tired",
      explanation: "ÊTRE for emotions! Je suis fatigué. Woman: je suis fatiguée (add -e).",
      explanationFr: "ÊTRE pour les émotions ! Je suis fatigué. Femme : je suis fatiguée (ajouter -e)."
    },
    {
      id: "13-2",
      type: "qcm",
      question: "'I am happy' (woman speaking) in French:",
      questionFr: "Comment dit-on 'Je suis contente' (femme) ?",
      options: ["Je suis contente.", "Je suis content.", "J'ai contente.", "Je fais contente."],
      optionsEn: ["I am happy (f)", "I am happy (m)", "I have happy", "I do happy"],
      correct: "Je suis contente.",
      correctEn: "I am happy",
      explanation: "Content (m) / contente (f). Add -e for feminine. Je SUIS — not j'ai!",
      explanationFr: "Content (m) / contente (f). Ajouter -e pour le féminin. Je SUIS — pas j'ai !"
    },
    {
      id: "13-3",
      type: "qcm",
      question: "'Stressed' in French:",
      questionFr: "Comment dit-on 'stressé' ?",
      options: ["Stressé", "Stressant", "Stresseur", "Stressable"],
      optionsEn: ["Stressed", "Stressful", "Stressor", "Stressable"],
      correct: "Stressé",
      correctEn: "Stressed",
      explanation: "Stressé (*stress-AY*) (m) / stressée (f). Je suis stressé(e) = I am stressed.",
      explanationFr: "Stressé (m) / stressée (f). Je suis stressé(e) = je suis stressé(e)."
    },
    {
      id: "13-4",
      type: "qcm",
      question: "'I am worried' (man speaking) in French:",
      questionFr: "Comment dit-on 'Je suis inquiet' (homme) ?",
      options: ["Je suis inquiet.", "Je suis inquiète.", "J'ai inquiet.", "Je me suis inquiet."],
      optionsEn: ["I am worried (m)", "I am worried (f)", "I have worried", "I am worried (refl)"],
      correct: "Je suis inquiet.",
      correctEn: "I am worried",
      explanation: "Inquiet (m) / inquiète (f). Je suis inquiet = I'm worried (man).",
      explanationFr: "Inquiet (m) / inquiète (f). Je suis inquiet = je suis inquiet."
    },
    {
      id: "13-5",
      type: "qcm",
      question: "'I feel good' in French:",
      questionFr: "Traduisez : 'Je me sens bien.'",
      options: ["Je me sens bien.", "Je suis bien.", "J'ai bien.", "Je fais bien."],
      optionsEn: ["I feel good.", "I am good.", "I have good.", "I do good."],
      correct: "Je me sens bien.",
      correctEn: "I feel good.",
      explanation: "Je me sens bien (*zhuh muh son BYAN*) = I feel good. Se sentir = to feel.",
      explanationFr: "Je me sens bien = je me sens bien. Se sentir = se sentir."
    },
    {
      id: "13-6",
      type: "qcm",
      question: "'I am sad' in French:",
      questionFr: "Traduisez : 'Je suis triste.'",
      options: ["Je suis triste.", "J'ai triste.", "Je fais triste.", "Je me suis triste."],
      optionsEn: ["I am sad.", "I have sad.", "I do sad.", "I am sad (refl)."],
      correct: "Je suis triste.",
      correctEn: "I am sad",
      explanation: "Triste (*treest*) = sad. Same form for masculine and feminine!",
      explanationFr: "Triste = triste. Identique au masculin et au féminin !"
    },
    {
      id: "13-7",
      type: "qcm",
      question: "Which is WRONG?",
      questionFr: "Lequel est FAUX ?",
      options: ["J'ai fatigué", "Je suis content", "Je me sens bien", "Je suis un peu stressée"],
      optionsEn: ["I have tired", "I am happy", "I feel good", "I am a little stressed (f)"],
      correct: "J'ai fatigué",
      correctEn: "I have tired",
      explanation: "NEVER j'ai fatigué. Always Je SUIS fatigué. Avoir is not used for emotional states.",
      explanationFr: "JAMAIS j'ai fatigué. Toujours Je SUIS fatigué. Avoir n'est pas utilisé pour les états émotionnels."
    },
    {
      id: "13-8",
      type: "qcm",
      question: "'I am a little worried' (woman) in French:",
      questionFr: "Traduisez : 'Je suis un peu inquiète' (femme).",
      options: ["Je suis un peu inquiète.", "Je suis un peu inquiet.", "J'ai un peu inquiet.", "Je me sens inquiète."],
      optionsEn: ["I am a little worried (f)", "I am a little worried (m)", "I have a little worried", "I feel worried (f)"],
      correct: "Je suis un peu inquiète.",
      correctEn: "I am a little worried",
      explanation: "Un peu = a little. Inquiète (f) = worried. Je suis is correct.",
      explanationFr: "Un peu = un peu. Inquiète (f) = inquiète. Je suis est correct."
    },
    {
      id: "13-9",
      type: "qcm",
      question: "'I feel better today.' in French:",
      questionFr: "Traduisez : 'Je me sens mieux aujourd'hui.'",
      options: ["Je me sens mieux aujourd'hui.", "Je suis mieux.", "J'ai mieux.", "Ça va mieux pour moi."],
      optionsEn: ["I feel better today.", "I am better.", "I have better.", "It's better for me."],
      correct: "Je me sens mieux aujourd'hui.",
      correctEn: "I feel better today.",
      explanation: "Je me sens mieux = I feel better. Mieux = better.",
      explanationFr: "Je me sens mieux = je me sens mieux. Mieux = mieux."
    },
    {
      id: "13-10",
      type: "qcm",
      question: "'I am motivated' (man) in French:",
      questionFr: "Comment dit-on 'Je suis motivé' (homme) ?",
      options: ["Je suis motivé.", "Je suis motivée.", "J'ai motivé.", "Je me motive."],
      optionsEn: ["I am motivated (m)", "I am motivated (f)", "I have motivated", "I motivate myself"],
      correct: "Je suis motivé.",
      correctEn: "I am motivated",
      explanation: "Motivé (m) / motivée (f). Always with être: je suis motivé.",
      explanationFr: "Motivé (m) / motivée (f). Toujours avec être : je suis motivé."
    }
  ],
  libre: [
    {
      id: "13-l1",
      type: "libre",
      question: "Translate: 'I am tired but happy.'",
      questionFr: "Traduisez : 'Je suis fatigué mais content.'",
      correct: "Je suis fatigué mais content.",
      correctEn: "I am tired but happy.",
      alternatives: ["Je suis fatiguée mais contente."],
      explanation: "Mais = but. Both adjectives agree with the speaker's gender.",
      explanationFr: "Mais = mais. Les deux adjectifs s'accordent avec le genre du locuteur."
    },
    {
      id: "13-l2",
      type: "libre",
      question: "How do you say 'I feel good today'?",
      questionFr: "Comment dit-on 'Je me sens bien aujourd'hui' ?",
      correct: "Je me sens bien aujourd'hui.",
      correctEn: "I feel good today.",
      alternatives: [],
      explanation: "Se sentir = to feel. Je me sens = I feel.",
      explanationFr: "Se sentir = se sentir. Je me sens = je me sens."
    },
    {
      id: "13-l3",
      type: "libre",
      question: "Translate: 'She is a little worried.'",
      questionFr: "Traduisez : 'Elle est un peu inquiète.'",
      correct: "Elle est un peu inquiète.",
      correctEn: "She is a little worried.",
      alternatives: [],
      explanation: "Un peu = a little. Inquiète (f) = worried.",
      explanationFr: "Un peu = un peu. Inquiète (f) = inquiète."
    },
    {
      id: "13-l4",
      type: "libre",
      question: "Complete: 'Je suis ___ mais motivé.'",
      questionFr: "Complétez : 'Je suis ___ mais motivé.'",
      correct: "fatigué",
      correctEn: "tired",
      alternatives: ["stressé", "triste"],
      explanation: "Je suis fatigué mais motivé = I'm tired but motivated.",
      explanationFr: "Je suis fatigué mais motivé = je suis fatigué mais motivé."
    },
    {
      id: "13-l5",
      type: "libre",
      question: "How do you say 'I am stressed' (woman)?",
      questionFr: "Comment dit-on 'Je suis stressée' (femme) ?",
      correct: "Je suis stressée.",
      correctEn: "I am stressed",
      alternatives: [],
      explanation: "Add -e for feminine: stressée.",
      explanationFr: "Ajouter -e pour le féminin : stressée."
    },
    {
      id: "13-l6",
      type: "libre",
      question: "What is the French for 'sad'?",
      questionFr: "Quel est le mot français pour 'sad' ?",
      correct: "triste",
      correctEn: "sad",
      alternatives: [],
      explanation: "Triste = sad. Same form for masculine and feminine!",
      explanationFr: "Triste = triste. Identique au masculin et au féminin !"
    },
    {
      id: "13-l7",
      type: "libre",
      question: "Translate: 'I feel better now.'",
      questionFr: "Traduisez : 'Je me sens mieux maintenant.'",
      correct: "Je me sens mieux maintenant.",
      correctEn: "I feel better now.",
      alternatives: [],
      explanation: "Mieux = better. Maintenant = now.",
      explanationFr: "Mieux = mieux. Maintenant = maintenant."
    },
    {
      id: "13-l8",
      type: "libre",
      question: "Complete: 'Je ___ un peu triste ce soir.'",
      questionFr: "Complétez : 'Je ___ un peu triste ce soir.'",
      correct: "suis",
      correctEn: "am",
      alternatives: [],
      explanation: "Je suis = I am. Always être for emotional states.",
      explanationFr: "Je suis = je suis. Toujours être pour les états émotionnels."
    },
    {
      id: "13-l9",
      type: "libre",
      question: "How do you say 'He is happy'?",
      questionFr: "Comment dit-on 'Il est content' ?",
      correct: "Il est content.",
      correctEn: "He is happy.",
      alternatives: [],
      explanation: "Il est = he is. Content = happy (masculine).",
      explanationFr: "Il est = il est. Content = content (masculin)."
    },
    {
      id: "13-l10",
      type: "libre",
      question: "Translate: 'I am a little tired today.'",
      questionFr: "Traduisez : 'Je suis un peu fatigué aujourd'hui.'",
      correct: "Je suis un peu fatigué aujourd'hui.",
      correctEn: "I am a little tired today.",
      alternatives: ["Je suis un peu fatiguée aujourd'hui."],
      explanation: "Un peu = a little. Fatigué(e) = tired.",
      explanationFr: "Un peu = un peu. Fatigué(e) = fatigué(e)."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_13;
} else {
  window.LESSON_13 = LESSON_13;
}