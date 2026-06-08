// ═══════════════════════════════════════════════════════════════════
// vocab-level-1.js — Daily French 🥖
// NIVEAU 1 — Salutations & Présentations 🙋
// Entrées : 14
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_1 = [
  {fr:"bonjour",en:"good morning / hello",phon:"*bon-ZHOOR*",def:"Formule de salutation utilisée le matin et la journée.",def_en:"Standard greeting used in the morning and during the day.",ex:"Bonjour, Madame Dupont.",ex_en:"Good morning, Mrs Dupont.",level:1,cat:"salutation"},
  // === AJOUTS NIVEAU 1 (36 entrées supplémentaires) ===
  
  // Salutations (compléments)
  {fr:"bonsoir",en:"good evening",phon:"*bon-SWAHR*",def:"Salutation du soir",ex:"Bonsoir, comment allez-vous ?",level:1,cat:"salutation"},
  {fr:"salut",en:"hi / bye",phon:"*sa-LOO*",def:"Salutation informelle",ex:"Salut ! Ça va ?",level:1,cat:"salutation"},
  {fr:"coucou",en:"hey there",phon:"*koo-KOO*",def:"Salutation très familière",ex:"Coucou, tu es là !",level:1,cat:"salutation"},
  {fr:"à bientôt",en:"see you soon",phon:"*a byan-TOH*",def:"Au revoir temporaire",ex:"À bientôt, mon ami.",level:1,cat:"salutation"},
  {fr:"à demain",en:"see you tomorrow",phon:"*a duh-MAN*",def:"Au revoir pour le lendemain",ex:"À demain, bonne soirée.",level:1,cat:"salutation"},
  {fr:"bonne nuit",en:"good night",phon:"*bon NWEE*",def:"Souhait avant de dormir",ex:"Bonne nuit, fais de beaux rêves.",level:1,cat:"salutation"},
  {fr:"bonne journée",en:"have a good day",phon:"*bon zhoor-NAY*",def:"Souhait pour la journée",ex:"Bonne journée, monsieur.",level:1,cat:"salutation"},
  {fr:"bon week-end",en:"have a good weekend",phon:"*bon WEEK-end*",def:"Souhait pour le week-end",ex:"Bon week-end à tous !",level:1,cat:"salutation"},
  {fr:"à tout à l'heure",en:"see you later",phon:"*a too-ta LUR*",def:"Au revoir pour dans quelques heures",ex:"À tout à l'heure, je reviens.",level:1,cat:"salutation"},
  {fr:"au revoir",en:"goodbye",phon:"*oh ruh-VWAHR*",def:"Formule de départ",ex:"Au revoir et merci.",level:1,cat:"salutation"},
  
  // Présentation (compléments)
  {fr:"prénom",en:"first name",phon:"*pray-NOM*",def:"Nom de baptême",ex:"Mon prénom est Marie.",level:1,cat:"présentation"},
  {fr:"nom de famille",en:"last name / surname",phon:"*nom duh fa-MEEL*",def:"Nom héréditaire",ex:"Mon nom de famille est Dupont.",level:1,cat:"présentation"},
  {fr:"nationalité",en:"nationality",phon:"*na-syo-na-lee-TAY*",def:"Appartenance à un pays",ex:"Ma nationalité est française.",level:1,cat:"présentation"},
  {fr:"pays",en:"country",phon:"*pay-EE*",def:"Nation, territoire",ex:"Je viens de quel pays ?",level:1,cat:"présentation"},
  {fr:"ville",en:"city",phon:"*VEEL*",def:"Grande agglomération",ex:"J'habite dans quelle ville ?",level:1,cat:"présentation"},
  {fr:"adresse",en:"address",phon:"*a-DRESS*",def:"Lieu de résidence",ex:"Quelle est votre adresse ?",level:1,cat:"présentation"},
  {fr:"téléphone",en:"phone",phon:"*tay-lay-FON*",def:"Appareil de communication",ex:"Mon numéro de téléphone.",level:1,cat:"présentation"},
  {fr:"email",en:"email",phon:"*EE-mayl*",def:"Courrier électronique",ex:"Mon adresse email.",level:1,cat:"présentation"},
  {fr:"métier",en:"job / occupation",phon:"*may-TYAY*",def:"Profession",ex:"Quel est votre métier ?",level:1,cat:"présentation"},
  {fr:"étudiant",en:"student (male)",phon:"*ay-tew-DYAN*",def:"Personne qui étudie",ex:"Je suis étudiant.",level:1,cat:"présentation"},
  {fr:"étudiante",en:"student (female)",phon:"*ay-tew-DYANT*",def:"Personne qui étudie",ex:"Je suis étudiante.",level:1,cat:"présentation"},
  {fr:"retraité",en:"retired (male)",phon:"*ruh-treh-TAY*",def:"Personne à la retraite",ex:"Mon père est retraité.",level:1,cat:"présentation"},
  {fr:"retraitée",en:"retired (female)",phon:"*ruh-treh-TAY*",def:"Personne à la retraite",ex:"Ma mère est retraitée.",level:1,cat:"présentation"},
  
  // Politesse (compléments)
  {fr:"s'il vous plaît",en:"please",phon:"*seel voo PLEH*",def:"Formule de politesse",ex:"Un café, s'il vous plaît.",level:1,cat:"politesse"},
  {fr:"merci beaucoup",en:"thank you very much",phon:"*mair-SEE bo-KOO*",def:"Remerciement renforcé",ex:"Merci beaucoup pour votre aide.",level:1,cat:"politesse"},
  {fr:"de rien",en:"you're welcome",phon:"*duh RYAN*",def:"Réponse à merci",ex:"De rien, c'est normal.",level:1,cat:"politesse"},
  {fr:"je vous en prie",en:"you're welcome (formal)",phon:"*zhuh voo zan PREE*",def:"Réponse polie à merci",ex:"Je vous en prie, madame.",level:1,cat:"politesse"},
  {fr:"pardon",en:"sorry / excuse me",phon:"*par-DON*",def:"Excuse",ex:"Pardon, je ne vous avais pas vu.",level:1,cat:"politesse"},
  {fr:"excusez-moi",en:"excuse me",phon:"*ek-skew-zay-MWA*",def:"Demande d'excuse",ex:"Excusez-moi, l'heure s'il vous plaît ?",level:1,cat:"politesse"},
  {fr:"avec plaisir",en:"with pleasure",phon:"*a-vek pleh-ZEER*",def:"Acceptation enthousiaste",ex:"Avec plaisir, je vous aiderai.",level:1,cat:"politesse"},
  {fr:"pas de problème",en:"no problem",phon:"*pa duh pro-BLEM*",def:"Réponse rassurante",ex:"Pas de problème, je m'en occupe.",level:1,cat:"politesse"},
  
  // Social de base
  {fr:"ami",en:"friend (male)",phon:"*a-MEE*",def:"Personne proche",ex:"C'est mon meilleur ami.",level:1,cat:"social"},
  {fr:"amie",en:"friend (female)",phon:"*a-MEE*",def:"Personne proche",ex:"C'est mon amie d'enfance.",level:1,cat:"social"},
  {fr:"voisin",en:"neighbor (male)",phon:"*vwa-ZAN*",def:"Personne habitant à côté",ex:"Mon voisin est sympa.",level:1,cat:"social"},
  {fr:"voisine",en:"neighbor (female)",phon:"*vwa-ZEEN*",def:"Personne habitant à côté",ex:"Ma voisine m'aide souvent.",level:1,cat:"social"},
  {fr:"collègue",en:"colleague",phon:"*ko-LEG*",def:"Personne du même travail",ex:"Ma collègue de bureau.",level:1,cat:"social"},
  {fr:"monsieur",en:"sir / mister",phon:"*muh-SYUR*",def:"Titre masculin",ex:"Bonjour monsieur.",level:1,cat:"politesse"},
  {fr:"madame",en:"madam / lady",phon:"*ma-DAM*",def:"Titre féminin",ex:"Bonjour madame.",level:1,cat:"politesse"},
  {fr:"mademoiselle",en:"miss",phon:"*mad-mwa-ZEL*",def:"Titre jeune femme",ex:"Bonjour mademoiselle.",level:1,cat:"politesse"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_1 = VOCAB_LEVEL_1;
}
