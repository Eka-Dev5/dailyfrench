// ═══════════════════════════════════════════════════════════════════
// vocab-level-07.js — Daily French 🥖
// NIVEAU 7 — Les amis & sorties 🎉
// Entrées : 80
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_07 = [
  // === RELATIONS (16) ===
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
  {fr:"un collègue",en:"a colleague (male)",phon:"*uh ko-LEG*",def:"Personne du même travail.",ex:"Mon collègue de bureau.",level:7,cat:"social"},
  {fr:"une collègue",en:"a colleague (female)",phon:"*oon ko-LEG*",def:"Personne du même travail.",ex:"Ma collègue de travail.",level:7,cat:"social"},
  {fr:"un voisin",en:"a neighbor (male)",phon:"*uh vwa-ZAN*",def:"Personne habitant à côté.",ex:"Mon voisin sympa.",level:7,cat:"social"},
  {fr:"une voisine",en:"a neighbor (female)",phon:"*oon vwa-ZEEN*",def:"Personne habitant à côté.",ex:"Ma voisine d'à côté.",level:7,cat:"social"},

  // === SORTIES & LIEUX (16) ===
  {fr:"un rendez-vous",en:"an appointment / date",phon:"*uh ron-day-VOO*",def:"Rencontre fixée d'avance.",ex:"Un rendez-vous au café.",level:7,cat:"social"},
  {fr:"le cinéma",en:"movie theater",phon:"*luh see-nay-MA*",def:"Lieu de projection.",ex:"Aller au cinéma.",level:7,cat:"lieu"},
  {fr:"le théâtre",en:"theater",phon:"*luh tay-AH-truh*",def:"Lieu de spectacle.",ex:"Une pièce de théâtre.",level:7,cat:"lieu"},
  {fr:"le concert",en:"concert",phon:"*luh kon-SAIR*",def:"Spectacle musical.",ex:"Un concert de rock.",level:7,cat:"lieu"},
  {fr:"le musée",en:"museum",phon:"*luh mew-ZAY*",def:"Lieu d'exposition.",ex:"Le musée du Louvre.",level:7,cat:"lieu"},
  {fr:"la discothèque",en:"nightclub",phon:"*lah dees-ko-TEK*",def:"Lieu de danse nocturne.",ex:"La discothèque du centre.",level:7,cat:"lieu"},
  {fr:"le restaurant",en:"restaurant",phon:"*luh res-to-RON*",def:"Lieu pour manger.",ex:"Dîner au restaurant.",level:7,cat:"lieu"},
  {fr:"le café",en:"café / coffee shop",phon:"*luh ka-FAY*",def:"Lieu pour boire un café.",ex:"Prendre un café.",level:7,cat:"lieu"},
  {fr:"le bar",en:"bar",phon:"*luh BAR*",def:"Lieu pour boire un verre.",ex:"Un verre au bar.",level:7,cat:"lieu"},
  {fr:"le parc",en:"park",phon:"*luh PARK*",def:"Espace vert public.",ex:"Pique-nique au parc.",level:7,cat:"lieu"},
  {fr:"la piscine",en:"swimming pool",phon:"*lah pee-SEEN*",def:"Bassin pour nager.",ex:"Aller à la piscine.",level:7,cat:"lieu"},
  {fr:"la plage",en:"beach",phon:"*lah PLAZH*",def:"Bord de mer.",ex:"Une journée à la plage.",level:7,cat:"lieu"},
  {fr:"le bowling",en:"bowling alley",phon:"*luh BOH-ling*",def:"Lieu pour jouer au bowling.",ex:"On va au bowling ?",level:7,cat:"lieu"},
  {fr:"le stade",en:"stadium",phon:"*luh STAHD*",def:"Lieu pour les matchs.",ex:"Le stade de foot.",level:7,cat:"lieu"},
  {fr:"la bibliothèque",en:"library",phon:"*lah bee-blee-oh-TEK*",def:"Lieu pour lire et emprunter.",ex:"À la bibliothèque municipale.",level:7,cat:"lieu"},
  {fr:"le centre commercial",en:"shopping mall",phon:"*luh son-truh ko-mair-SYAL*",def:"Grand magasin couvert.",ex:"Le centre commercial du coin.",level:7,cat:"lieu"},

  // === VERBES (14) ===
  {fr:"sortir",en:"to go out",phon:"*sor-TEER*",def:"Quitter son domicile pour s'amuser.",ex:"Sortir le soir.",level:7,cat:"verbe"},
  {fr:"inviter",en:"to invite",phon:"*on-vee-TAY*",def:"Demander à quelqu'un de venir.",ex:"Inviter des amis à dîner.",level:7,cat:"verbe"},
  {fr:"se retrouver",en:"to meet up",phon:"*suh ruh-troo-VAY*",def:"Se rejoindre.",ex:"On se retrouve où ?",level:7,cat:"verbe"},
  {fr:"s'amuser",en:"to have fun",phon:"*sa-mew-ZAY*",def:"Passer un bon moment.",ex:"On s'est bien amusés.",level:7,cat:"verbe"},
  {fr:"rigoler",en:"to laugh / joke",phon:"*ree-go-LAY*",def:"Rire, plaisanter.",ex:"On a bien rigolé.",level:7,cat:"verbe"},
  {fr:"danser",en:"to dance",phon:"*don-SAY*",def:"Bouger au rythme de la musique.",ex:"Danser toute la nuit.",level:7,cat:"verbe"},
  {fr:"chanter",en:"to sing",phon:"*shon-TAY*",def:"Produire des sons musicaux.",ex:"Chanter au karaoké.",level:7,cat:"verbe"},
  {fr:"manger",en:"to eat",phon:"*mon-ZHAY*",def:"Prendre un repas.",ex:"Manger au restaurant.",level:7,cat:"verbe"},
  {fr:"boire",en:"to drink",phon:"*BWAHR*",def:"Avaler un liquide.",ex:"Boire un verre.",level:7,cat:"verbe"},
  {fr:"discuter",en:"to discuss",phon:"*dees-kew-TAY*",def:"Parler ensemble.",ex:"Discuter avec des amis.",level:7,cat:"verbe"},
  {fr:"rester",en:"to stay",phon:"*res-TAY*",def:"Rester sur place.",ex:"Rester à la maison.",level:7,cat:"verbe"},
  {fr:"partir",en:"to leave",phon:"*par-TEER*",def:"Quitter un lieu.",ex:"Partir en vacances.",level:7,cat:"verbe"},
  {fr:"appeler",en:"to call",phon:"*a-play*",def:"Téléphoner à quelqu'un.",ex:"Appeler un ami.",level:7,cat:"verbe"},
  {fr:"envoyer",en:"to send",phon:"*on-vwa-YAY*",def:"Expédier quelque chose.",ex:"Envoyer un SMS.",level:7,cat:"verbe"},

  // === TEMPS (12) ===
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
  {fr:"maintenant",en:"now",phon:"*man-tuh-NAN*",def:"À ce moment.",ex:"Je pars maintenant.",level:7,cat:"temps"},
  {fr:"plus tard",en:"later",phon:"*plew TAR*",def:"Après, dans le futur.",ex:"On verra plus tard.",level:7,cat:"temps"},

  // === ÉTAT & DISPOSITION (6) ===
  {fr:"libre",en:"free / available",phon:"*LEEB-ruh*",def:"Disponible, sans occupation.",ex:"Je suis libre samedi.",level:7,cat:"état"},
  {fr:"occupé",en:"busy (male)",phon:"*ok-kew-PAY*",def:"Ayant une occupation.",ex:"Je suis occupé demain.",level:7,cat:"état"},
  {fr:"disponible",en:"available",phon:"*dee-spo-NEE-bluh*",def:"Libre pour quelque chose.",ex:"Êtes-vous disponible ?",level:7,cat:"état"},
  {fr:"fatigué",en:"tired (male)",phon:"*fa-tee-GAY*",def:"Manquant d'énergie.",ex:"Je suis fatigué ce soir.",level:7,cat:"état"},
  {fr:"pressé",en:"in a hurry (male)",phon:"*preh-SAY*",def:"Ayant peu de temps.",ex:"Je suis pressé, désolé.",level:7,cat:"état"},
  {fr:"d'accord",en:"okay / agreed",phon:"*da-KOR*",def:"En accord avec.",ex:"D'accord, on se voit demain.",level:7,cat:"état"},

  // === OBJETS (6) ===
  {fr:"un cadeau",en:"a gift",phon:"*uh ka-DOH*",def:"Présent offert.",ex:"Un cadeau d'anniversaire.",level:7,cat:"objet"},
  {fr:"une photo",en:"a photo",phon:"*oon fo-TOH*",def:"Image photographique.",ex:"Prendre une photo ensemble.",level:7,cat:"objet"},
  {fr:"un selfie",en:"a selfie",phon:"*uh SELF-ee*",def:"Photo de soi-même.",ex:"Faire un selfie.",level:7,cat:"objet"},
  {fr:"un portable",en:"a mobile phone",phon:"*uh por-ta-BLEEL*",def:"Téléphone mobile.",ex:"Appeler sur le portable.",level:7,cat:"objet"},
  {fr:"un message",en:"a message",phon:"*uh meh-SAZH*",def:"Communication écrite.",ex:"Envoyer un message.",level:7,cat:"objet"},
  {fr:"une invitation",en:"an invitation",phon:"*oon on-vee-ta-SYON*",def:"Demande de présence.",ex:"J'ai reçu une invitation.",level:7,cat:"objet"},

  // === EXPRESSIONS & SALUTATIONS (8) ===
  {fr:"ça vous dit ?",en:"do you fancy?",phon:"*sa voo DEE*",def:"Proposition informelle.",ex:"Ça vous dit d'aller au café ?",level:7,cat:"expression"},
  {fr:"à bientôt",en:"see you soon",phon:"*a byan-TOH*",def:"Prendre congé.",ex:"Au revoir, à bientôt !",level:7,cat:"salutation"},
  {fr:"faire la fête",en:"to party",phon:"*FAIR lah FET*",def:"Célébrer, s'amuser.",ex:"On fait la fête ce soir.",level:7,cat:"expression"},
  {fr:"à plus tard",en:"see you later",phon:"*a plew TAR*",def:"Prendre congé temporaire.",ex:"À plus tard !",level:7,cat:"salutation"},
  {fr:"à demain",en:"see you tomorrow",phon:"*a duh-MAN*",def:"Prendre congé jusqu'à demain.",ex:"À demain, bonne soirée !",level:7,cat:"salutation"},
  {fr:"bonne soirée",en:"have a good evening",phon:"*bon swa-RAY*",def:"Souhait de bonne soirée.",ex:"Bonne soirée, amusez-vous !",level:7,cat:"salutation"},
  {fr:"bon week-end",en:"have a good weekend",phon:"*bon week-END*",def:"Souhait de bon week-end.",ex:"Bon week-end à tous !",level:7,cat:"salutation"},
  {fr:"avec plaisir",en:"with pleasure",phon:"*a-vek play-ZEER*",def:"Acceptation enthousiaste.",ex:"Avec plaisir, je viens !",level:7,cat:"expression"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_07 = VOCAB_LEVEL_07;
}
