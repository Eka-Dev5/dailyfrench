// lesson-10.js -- Politeness
const LESSON_10 = {
  id: 10,
  title: "Politeness",
  titleFr: "Politesse",
  objectiveEn: "Use polite French in any situation, ask for help graciously",
  objectiveFr: "Utiliser le francais poli dans toute situation, demander de l aide avec grace",
  hintEn: "French politeness is non-negotiable -- always use it and you ll be well received!",
  hintFr: "La politesse francaise est non negociable -- utilisez-la toujours et vous serez bien accueilli !",
  vocabulary: [],
  contentHtml: `
<div class="lesson-rule">
<h4>Essential polite phrases</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>S il vous plait</td><td>Please (formal)</td></tr>
<tr><td>Merci (beaucoup)</td><td>Thank you (very much)</td></tr>
<tr><td>De rien</td><td>You re welcome</td></tr>
<tr><td>Excusez-moi</td><td>Excuse me / Sorry (formal)</td></tr>
<tr><td>Pardon</td><td>Sorry / Pardon</td></tr>
<tr><td>Je suis desole(e)</td><td>I m sorry (m/f)</td></tr>
</table>
</div>
<div class="lesson-rule">
<h4>Asking for help politely</h4>
<table class="lesson-table">
<tr><th>French</th><th>English</th></tr>
<tr><td>Pourriez-vous m aider ?</td><td>Could you help me?</td></tr>
<tr><td>Je ne comprends pas.</td><td>I don t understand.</td></tr>
<tr><td>Pouvez-vous repeter, s il vous plait ?</td><td>Can you repeat, please?</td></tr>
<tr><td>Parlez-vous anglais ?</td><td>Do you speak English?</td></tr>
</table>
</div>
<div class="lesson-warning">Merci alone can sound abrupt. Merci beaucoup or merci bien is warmer.</div>
  `,
  qcm: [
    {
      id: "10-1",
      type: "qcm",
      question: "Could you help me? (very polite) in French:",
      questionFr: "Pourriez-vous m aider ? (tres poli) en anglais :",
      options: ["Pourriez-vous m aider ?","Pouvez-vous aider ?","Aidez-moi.","Help me please."],
      optionsEn: ["Could you help me?","Can you help?","Help me.","Help me please."],
      correct: "Pourriez-vous m aider ?",
      correctEn: "Could you help me?",
      explanation: "Pourriez-vous (poo-ryay-VOO) = could you (conditional = extra polite). More polite than pouvez-vous.",
      explanationFr: "Pourriez-vous = pourriez-vous (conditionnel = tres poli). Plus poli que pouvez-vous."
    },
    {
      id: "10-2",
      type: "qcm",
      question: "I don t understand. in French:",
      questionFr: "Je ne comprends pas. en anglais :",
      options: ["Je ne comprends pas.","Je comprends pas.","Je sais pas.","Je ne sais pas."],
      optionsEn: ["I don t understand.","I don t understand (informal).","I don t know.","I don t know."],
      correct: "Je ne comprends pas.",
      correctEn: "I don t understand.",
      explanation: "Je ne comprends pas (zhuh nuh kom-PRON PAH). Always use the full ne...pas in formal situations.",
      explanationFr: "Je ne comprends pas. Utilisez toujours le ne...pas complet en situation formelle."
    },
    {
      id: "10-3",
      type: "qcm",
      question: "Can you speak more slowly? in French:",
      questionFr: "Pouvez-vous parler plus lentement ? en anglais :",
      options: ["Pouvez-vous parler plus lentement ?","Parlez lent.","Parlez doucement.","Vous parlez lentement ?"],
      optionsEn: ["Can you speak more slowly?","Speak slow.","Speak gently.","Do you speak slowly?"],
      correct: "Pouvez-vous parler plus lentement ?",
      correctEn: "Can you speak more slowly?",
      explanation: "Plus lentement (plue lon-tuh-MON) = more slowly. Absolutely essential for learners!",
      explanationFr: "Plus lentement = plus lentement. Absolument essentiel pour les apprenants !"
    },
    {
      id: "10-4",
      type: "qcm",
      question: "You re welcome. (most common) in French:",
      questionFr: "De rien. (le plus courant) en anglais :",
      options: ["De rien.","Pas de quoi.","Avec plaisir.","C est normal."],
      optionsEn: ["You re welcome.","Don t mention it.","With pleasure.","It s normal."],
      correct: "De rien.",
      correctEn: "You re welcome.",
      explanation: "De rien (duh RYAN)
