// ═══════════════════════════════════════════════════════════════════
// vocab-level-7.js — Daily French 🥖
// NIVEAU 7 — Les amis & sorties 🎉
// Entrées : 50
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_7 = [
  // === RELATIONS (12) ===
  {fr:"un ami",en:"a friend (male)",phon:"*uh na-MEE*",def:"Personne liée par l'affection.",ex:"Mon ami d'enfance.",level:7,cat:"social"},
  {fr:"une amie",en:"a friend (female)",phon:"*oon na-MEE*",def:"Personne liée par l'affection.",ex:"Mon amie de toujours.",level:7,cat:"social"},
  {fr:"un copain",en:"a buddy (male)",phon:"*uh ko-PAN*",def:"Ami proche (familier).",ex:"Mon copain de classe.",level:7,cat:"social"},
  {fr:"une copine",en:"a buddy (female)",phon:"*oon ko-PEEN*",def:"Amie proche (familier).",ex:"Ma copine de travail.",level:7,cat:"social"},
  {fr:"un pote",en:"a mate",phon:"*uh POT*",def:"Ami (très familier).",ex:"Un pote de foot.",level:7,cat:"social"},
  {fr:"le meilleur ami",en:"best friend (male)",phon:"*luh may-YUR a-MEE*",def:"Ami le plus proche.",ex:"C'est mon meilleur ami.",level:7,cat:"social"},
  {fr:"la meilleure amie",en:"best friend (female)",phon:"*lah may-YUR a-MEE*",def:"Amie la plus proche.",ex:"C'est ma meilleure amie.",level:7,cat:"social"},
  {fr:"un fiancé",en:"fiancé",phon:"*uh fyan-SAY*",def:"Promis au mariage (homme).",ex:"Mon fiancé.",level:7,cat:"social"},
  {fr:"une fiancée",en:"fiancée",phon:"*oon fyan-SAY*",def:"Promise au mariage (femme).",ex:"Ma fiancée.",level:7,cat:"social"},
  {fr:"un petit ami",en:"boyfriend",phon:"*uh puh-TEE a-MEE*",def:"Amoureux.",ex:"Mon petit ami.",level:7,cat:"social"},
  {fr:"une petite amie",en:"girlfriend",phon:"*oon puh-TEET a-MEE*",def:"Amoureuse.",ex:"Ma petite amie.",level:7,cat:"social"},
  {fr:"une connaissance",en:"an acquaintance",phon:"*oon ko-nay-SONSS*",def:"Personne connue superficiellement.",ex:"Une simple connaissance.",level:7,cat:"social"},

  // === SORTIES (13) ===
  {fr:"un rendez-vous",en:"an appointment / date",phon:"*uh ron-day-VOO*",def:"Rencontre fixée d'avance.",ex:"Un rendez-vous au café.",level:7,cat:"social"},
  {fr:"sortir",en:"to go out",phon:"*sor-TEER*",def:"Quitter son domicile pour s'amuser.",ex:"Sortir le soir.",level:7,cat:"verbe"},
  {fr:"inviter",en:"to invite",phon:"*on-vee-TAY*",def:"Demander à quelqu'un de venir.",ex:"Inviter des amis à dîner.",level:7,cat:"verbe"},
  {fr:"se retrouver",en:"to meet up",phon:"*suh ruh-troo-VAY*",def:"Se rejoindre.",ex:"On se retrouve où ?",level:7,cat:"verbe"},
  {fr:"libre",en:"free / available",phon:"*LEEB-ruh*",def:"Disponible, sans occupation.",ex:"Je suis libre samedi.",level:7,cat:"état"},
  {fr:"occupé",en:"busy (male)",phon:"*ok-kew-PAY*",def:"Ayant une occupation.",ex:"Je suis occupé demain.",level:7,cat:"état"},
  {fr:"le cinéma",en:"movie theater",phon:"*luh see-nay-MA*",def:"Lieu de projection.",ex:"Aller au cinéma.",level:7,cat:"lieu"},
  {fr:"le théâtre",en:"theater",phon:"*luh tay-AH-truh*",def:"Lieu de spectacle.",ex:"Une pièce de théâtre.",level:7,cat:"lieu"},
  {fr:"le concert",en:"concert",phon:"*luh kon-SAIR*",def:"Spectacle musical.",ex:"Un concert de rock.",level:7,cat:"lieu"},
  {fr:"le musée",en:"museum",phon:"*luh mew-ZAY*",def:"Lieu d'exposition.",ex:"Le musée du Louvre.",level:7,cat:"lieu"},
  {fr:"la discothèque",en:"nightclub",phon:"*lah dees-ko-TEK*",def:"Lieu de danse nocturne.",ex:"La discothèque du centre.",level:7,cat:"lieu"},
  {fr:"le restaurant",en:"restaurant",phon:"*luh res-to-RON*",def:"Lieu pour manger.",ex:"Dîner au restaurant.",level:7,cat:"lieu"},
  {fr:"le café",en:"café / coffee shop",phon:"*luh ka-FAY*",def:"Lieu pour boire un café.",ex:"Prendre un café.",level:7,cat:"lieu"},

  // === TEMPS (10) ===
  {fr:"aujourd'hui",en:"today",phon:"*oh-zhoord-DWEE*",def:"Le jour présent.",ex:"Aujourd'hui, il fait beau.",level:7,cat:"temps"},
  {fr:"demain",en:"tomorrow",phon:"*duh-MAN*",def:"Le jour suivant.",ex:"À demain !",level:7,cat:"temps"},
  {fr:"après-demain",en:"the day after tomorrow",phon:"*a-PRAY duh-MAN*",def:"Deux jours après aujourd'hui.",ex:"À après-demain !",level:7,cat:"temps"},
  {fr:"la semaine prochaine",en:"next week",phon:"*lah suh-MEN pro-SHEN*",def:"La semaine qui vient.",ex:"La semaine prochaine.",level:7,cat:"temps"},
  {fr:"le week-end",en:"weekend",phon:"*luh WEEK-end*",def:"Samedi et dimanche.",ex:"Ce week-end.",level:7,cat:"temps"},
  {fr:"midi",en:"noon",phon:"*mee-DEE*",def:"12 heures.",ex:"On déjeune à midi.",level:7,cat:"temps"},
  {fr:"le soir",en:"evening",phon:"*luh SWAHR*",def:"Fin de journée.",ex:"Le soir, je sors.",level:7,cat:"temps"},
  {fr:"la nuit",en:"night",phon:"*lah NWEE*",def:"Période sans soleil.",ex:"La nuit, je dors.",level:7,cat:"temps"},
  {fr:"tôt",en:"early",phon:"*TOH*",def:"De bonne heure.",ex:"Je me lève tôt.",level:7,cat:"temps"},
  {fr:"tard",en:"late",phon:"*TAR*",def:"Après l'heure prévue.",ex:"Je suis en retard, désolé.",level:7,cat:"temps"},

  // === EXPRESSIONS (5) ===
  {fr:"ça vous dit ?",en:"do you fancy?",phon:"*sa voo DEE*",def:"Proposition informelle.",ex:"Ça vous dit d'aller au café ?",level:7,cat:"expression"},
  {fr:"à bientôt",en:"see you soon",phon:"*a byan-TOH*",def:"Prendre congé.",ex:"Au revoir, à bientôt !",level:7,cat:"salutation"},
  {fr:"s'amuser",en:"to have fun",phon:"*sa-mew-ZAY*",def:"Passer un bon moment.",ex:"On s'est bien amusés.",level:7,cat:"verbe"},
  {fr:"rigoler",en:"to laugh / joke",phon:"*ree-go-LAY*",def:"Rire, plaisanter.",ex:"On a bien rigolé.",level:7,cat:"verbe"},
  {fr:"faire la fête",en:"to party",phon:"*FAIR lah FET*",def:"Célébrer, s'amuser.",ex:"On fait la fête ce soir.",level:7,cat:"expression"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_7 = VOCAB_LEVEL_7;
}
