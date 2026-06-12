// lesson-13.js -- Emotions & Feelings
const LESSON_13 = {
  id: 13,
  title: "Emotions & Feelings",
  titleFr: "Emotions & Sentiments",
  objectiveEn: "Express how you feel, describe your mood and emotional state",
  objectiveFr: "Exprimer comment vous vous sentez, decrire votre humeur et votre etat emotionnel",
  hintEn: "Use etre with adjectives: Je suis fatigue. Use avoir with physical states: J'ai mal.",
  hintFr: "Utilisez etre avec les adjectifs : Je suis fatigue. Utilisez avoir avec les etats physiques : J'ai mal.",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Common emotional states</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>fatigue / fatiguee</td><td><em>*fa-tee-GAY / fa-tee-GAYZ*</em></td><td>tired (m/f) <!-- *TYE-urd* --></td></tr>
<tr><td>content / contente</td><td><em>*kon-TON / kon-TONT*</em></td><td>happy / pleased (m/f) <!-- *HA-pee / pleezd* --></td></tr>
<tr><td>stresse / stressee</td><td><em>*stress-AY / stress-AYZ*</em></td><td>stressed (m/f) <!-- *strest* --></td></tr>
<tr><td>inquiet / inquiete</td><td><em>*an-kee-AY / an-kee-ET*</em></td><td>worried (m/f) <!-- *WUR-eed* --></td></tr>
<tr><td>motive / motivee</td><td><em>*mo-tee-VAY / mo-tee-VAYZ*</em></td><td>motivated (m/f) <!-- *MOH-ti-vay-ted* --></td></tr>
<tr><td>triste</td><td><em>*TREEST*</em></td><td>sad <!-- *sad* --></td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Expressing how you feel</h4>
<table class="lesson-table">
<tr><th>French</th><th>Phonetics</th><th>English</th></tr>
<tr><td>Je me sens bien / mal.</td><td><em>*zhuh muh son bee-AN / mal*</em></td><td>I feel well / unwell. <!-- *eye feel wel / un-WEL* --></td></tr>
<tr><td>Je suis un peu fatigue(e).</td><td><em>*zhuh swee uhn puh fa-tee-GAY*</em></td><td>I am a bit tired. <!-- *eye am uh bit TYE-urd* --></td></tr>
<tr><td>Ca va mieux.</td><td><em>*sah vah myuh*</em></td><td>It's better. / I'm better. <!-- *its BET-ur / eye m BET-ur* --></td></tr>
</table>
</div>
<div class="lesson-warning">French adjectives agree in gender: add <strong>-e</strong> for feminine. Example: <em>content</em> (he) vs <em>contente</em> (she).</div>
<div class="lesson-example">
-- Comment tu te sens aujourd hui ? <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">How do you feel today?</span><br>
-- Je suis un peu stresse, mais ca va mieux. <button class="lesson-ex-btn" onclick="toggleLessonEx(this,event)">English</button>
<span class="lesson-ex-en">I am a bit stressed, but it's getting better.</span>
</div>
  `,
  qcm: [
    {
      id: "13-1",
      type: "qcm",
      question: "Tired (masculine) in French:",
      questionFr: "Fatigue en anglais :",
      options: ["fatigue","fatiguee","triste","content"],
      optionsEn: ["tired (m)","tired (f)","sad","happy"],
      correct: "fatigue",
      correctEn: "tired (masculine)",
      explanation: "Fatigue (fa-tee-GAY) = tired (masculine). Fatiguee = feminine.",
      explanationFr: "Fatigue = fatigue (masculin). Fatiguee = feminin."
    },
    {
      id: "13-2",
      type: "qcm",
      question: "Happy / pleased (masculine) in French:",
      questionFr: "Content en anglais :",
      options: ["content","contente","fatigue","stresse"],
      optionsEn: ["happy / pleased (m)","happy / pleased (f)","tired","stressed"],
      correct: "content",
      correctEn: "happy / pleased (masculine)",
      explanation: "Content (kon-TON) = happy/pleased (m). Contente = feminine.",
      explanationFr: "Content = content (m). Contente = feminin."
    },
    {
      id: "13-3",
      type: "qcm",
      question: "Stressed (feminine) in French:",
      questionFr: "Stressee en anglais :",
      options: ["stressee","stresse","inquiete","triste"],
      optionsEn: ["stressed (f)","stressed (m)","worried (f)","sad"],
      correct: "stressee",
      correctEn: "stressed (feminine)",
      explanation: "Stressee (stress-AYZ) = stressed (feminine). Stresse = masculine.",
      explanationFr: "Stressee = stressee (feminin). Stresse = masculin."
    },
    {
      id: "13-4",
      type: "qcm",
      question: "Worried (masculine) in French:",
      questionFr: "Inquiet en anglais :",
      options: ["inquiet","inquiete","stresse","content"],
      optionsEn: ["worried (m)","worried (f)","stressed","happy"],
      correct: "inquiet",
      correctEn: "worried (masculine)",
      explanation: "Inquiet (an-kee-AY) = worried (m). Inquiete = feminine.",
      explanationFr: "Inquiet = inquiet (m). Inquiete = feminin."
    },
    {
      id: "13-5",
      type: "qcm",
      question: "Motivated (feminine) in French:",
      questionFr: "Motivee en anglais :",
      options: ["motivee","motive","contente","fatiguee"],
      optionsEn: ["motivated (f)","motivated (m)","happy (f)","tired (f)"],
      correct: "motivee",
      correctEn: "motivated (feminine)",
      explanation: "Motivee (mo-tee-VAYZ) = motivated (f). Motive = masculine.",
      explanationFr: "Motivee = motivee (f). Motive = masculin."
    },
    {
      id: "13-6",
      type: "qcm",
      question: "Sad in French:",
      questionFr: "Triste en anglais :",
      options: ["triste","fatigue","content","inquiet"],
      optionsEn: ["sad","tired","happy","worried"],
      correct: "triste",
      correctEn: "sad",
      explanation: "Triste (TREEST) = sad. Same form for masculine and feminine.",
      explanationFr: "Triste = triste. Meme forme pour masculin et feminin."
    },
    {
      id: "13-7",
      type: "qcm",
      question: "I feel well. in French:",
      questionFr: "Je me sens bien. en anglais :",
      options: ["Je me sens bien.","Je suis bien.","Je vais bien.","Ca va bien."],
      optionsEn: ["I feel well.","I am well.","I go well.","It goes well."],
      correct: "Je me sens bien.",
      correctEn: "I feel well.",
      explanation: "Je me sens (zhuh muh son) = I feel. Se sentir = to feel.",
      explanationFr: "Je me sens = je me sens. Se sentir = se sentir."
    },
    {
      id: "13-8",
      type: "qcm",
      question: "I am a bit tired. in French:",
      questionFr: "Je suis un peu fatigue. en anglais :",
      options: ["Je suis un peu fatigue.","Je suis fatigue.","Je me sens fatigue.","J'ai fatigue."],
      optionsEn: ["I am a bit tired.","I am tired.","I feel tired.","I have tired."],
      correct: "Je suis un peu fatigue.",
      correctEn: "I am a bit tired.",
      explanation: "Un peu (uhn puh) = a bit / a little. Very useful modifier!",
      explanationFr: "Un peu = un peu. Modificateur tres utile !"
    },
    {
      id: "13-9",
      type: "qcm",
      question: "It's better. / I'm better. in French:",
      questionFr: "Ca va mieux. en anglais :",
      options: ["Ca va mieux.","Ca va bien.","Ca va mal.","Ca va pas."],
      optionsEn: ["It's better. / I'm better.","It's going well.","It's going badly.","It's not going."],
      correct: "Ca va mieux.",
      correctEn: "It's better. / I'm better.",
      explanation: "Ca va mieux (sah vah myuh) = It's better. Mieux = better.",
      explanationFr: "Ca va mieux = ca va mieux. Mieux = mieux."
    },
    {
      id: "13-10",
      type: "qcm",
      question: "I feel unwell. in French:",
      questionFr: "Je me sens mal. en anglais :",
      options: ["Je me sens mal.","Je suis mal.","J'ai mal.","Ca va mal."],
      optionsEn: ["I feel unwell.","I am bad.","I have pain.","It's going badly."],
      correct: "Je me sens mal.",
      correctEn: "I feel unwell.",
      explanation: "Je me sens mal = I feel unwell. J'ai mal = I have pain (specific).",
      explanationFr: "Je me sens mal = je me sens mal. J'ai mal = j'ai mal (specifique)."
    }
  ],
  libre: [
    {
      id: "13-l1",
      type: "libre",
      question: "Translate: I am tired.",
      questionFr: "Traduisez : Je suis fatigue.",
      correct: "Je suis fatigue.",
      correctEn: "I am tired.",
      alternatives: ["Je suis fatiguee."],
      explanation: "Je suis fatigue = I am tired (m). Fatiguee = tired (f).",
      explanationFr: "Je suis fatigue = je suis fatigue (m). Fatiguee = fatiguee (f)."
    },
    {
      id: "13-l2",
      type: "libre",
      question: "How do you say I am happy (woman speaking)?",
      questionFr: "Comment dit-on Je suis contente ?",
      correct: "Je suis contente.",
      correctEn: "I am happy (woman speaking)",
      alternatives: [],
      explanation: "Contente = happy/pleased (feminine). Content = masculine.",
      explanationFr: "Contente = contente (feminin). Content = masculin."
    },
    {
      id: "13-l3",
      type: "libre",
      question: "Translate: I am a bit stressed.",
      questionFr: "Traduisez : Je suis un peu stresse.",
      correct: "Je suis un peu stresse.",
      correctEn: "I am a bit stressed.",
      alternatives: ["Je suis un peu stressee."],
      explanation: "Un peu = a bit. Stresse = stressed (m). Stressee = stressed (f).",
      explanationFr: "Un peu = un peu. Stresse = stresse (m). Stressee = stressee (f)."
    },
    {
      id: "13-l4",
      type: "libre",
      question: "Complete: Je me sens ___.",
      questionFr: "Completez : Je me sens ___.",
      correct: "bien",
      correctEn: "well",
      alternatives: ["mal"],
      explanation: "Je me sens bien/mal = I feel well/unwell.",
      explanationFr: "Je me sens bien/mal = je me sens bien/mal."
    },
    {
      id: "13-l5",
      type: "libre",
      question: "How do you say It's better?",
      questionFr: "Comment dit-on Ca va mieux ?",
      correct: "Ca va mieux.",
      correctEn: "It's better.",
      alternatives: [],
      explanation: "Ca va mieux = It's better. Mieux = better.",
      explanationFr: "Ca va mieux = ca va mieux. Mieux = mieux."
    },
    {
      id: "13-l6",
      type: "libre",
      question: "Translate: I am worried.",
      questionFr: "Traduisez : Je suis inquiet.",
      correct: "Je suis inquiet.",
      correctEn: "I am worried.",
      alternatives: ["Je suis inquiete."],
      explanation: "Inquiet = worried (m). Inquiete = worried (f).",
      explanationFr: "Inquiet = inquiet (m). Inquiete = inquiete (f)."
    },
    {
      id: "13-l7",
      type: "libre",
      question: "Complete: Je suis un peu ___.",
      questionFr: "Completez : Je suis un peu ___.",
      correct: "fatigue",
      correctEn: "tired",
      alternatives: ["stresse","content","triste","inquiet"],
      explanation: "Je suis un peu fatigue = I am a bit tired.",
      explanationFr: "Je suis un peu fatigue = je suis un peu fatigue."
    },
    {
      id: "13-l8",
      type: "libre",
      question: "How do you say I feel unwell?",
      questionFr: "Comment dit-on Je me sens mal ?",
      correct: "Je me sens mal.",
      correctEn: "I feel unwell.",
      alternatives: [],
      explanation: "Je me sens mal = I feel unwell. Se sentir = to feel.",
      explanationFr: "Je me sens mal = je me sens mal. Se sentir = se sentir."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_13;
} else {
  window.LESSON_13 = LESSON_13;
}
