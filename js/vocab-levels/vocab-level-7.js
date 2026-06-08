// ═══════════════════════════════════════════════════════════════════
// vocab-level-7.js — Daily French 🥖
// NIVEAU 7 — Les amis & sorties 🎉
// Entrées : 11
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_7 = [
  {fr:"un ami",en:"a friend (male)",phon:"*uh na-MEE*",def:"Personne liée par l'affection.",ex:"Mon ami d'enfance.",ex_en:"My childhood friend.",level:7,cat:"social"},
  {fr:"une amie",en:"a friend (female)",phon:"*oon na-MEE*",def:"Personne liée par l'affection.",ex:"Mon amie de toujours.",ex_en:"My lifelong friend.",level:7,cat:"social"},
  {fr:"un rendez-vous",en:"an appointment / date",phon:"*uh ron-day-VOO*",def:"Rencontre fixée d'avance.",ex:"Un rendez-vous au café.",ex_en:"An appointment at the café.",level:7,cat:"social"},
  {fr:"sortir",en:"to go out",phon:"*sor-TEER*",def:"Quitter son domicile pour s'amuser.",ex:"Sortir le soir.",ex_en:"Going out in the evening.",level:7,cat:"verbe"},
  {fr:"inviter",en:"to invite",phon:"*on-vee-TAY*",def:"Demander à quelqu'un de venir.",ex:"Inviter des amis à dîner.",ex_en:"Inviting friends to dinner.",level:7,cat:"verbe"},
  {fr:"retrouver",en:"to meet up",phon:"*ruh-troo-VAY*",def:"Rendez-vous avec quelqu'un connu.",ex:"On se retrouve demain ?",ex_en:"Shall we meet up tomorrow?",level:7,cat:"verbe"},
  {fr:"libre",en:"free / available",phon:"*LEEB-ruh*",def:"Disponible, sans occupation.",ex:"Je suis libre samedi.",ex_en:"I'm free on Saturday.",level:7,cat:"état"},
  {fr:"occupé",en:"busy (male)",phon:"*ok-kew-PAY*",def:"Ayant une occupation.",ex:"Je suis occupé demain.",ex_en:"I'm busy tomorrow.",level:7,cat:"état"},
  {fr:"à bientôt",en:"see you soon",phon:"*a byan-TOH*",def:"Prendre congé pour un prochain rendez-vous.",ex:"Au revoir, à bientôt !",ex_en:"Goodbye, see you soon!",level:7,cat:"salutation"},
  {fr:"ça vous dit",en:"do you fancy",phon:"*sa voo DEE*",def:"Proposition informelle pour une sortie.",ex:"Ça vous dit d'aller au café ?",ex_en:"Fancy going to the café?",lit:"that you says",level:7,cat:"expression"},
  {fr:"midi",en:"noon",phon:"*mee-DEE*",def:"12 heures, milieu de la journée.",ex:"On déjeune à midi.",ex_en:"We have lunch at noon.",level:7,cat:"temps"}
  // === AJOUTS NIVEAU 7 (39 entrées supplémentaires) ===
  
  // Social / Relations
  {fr:"copain",en:"buddy / pal (male)",phon:"*ko-PAN*",def:"Ami proche",ex:"Mon copain d'enfance.",level:7,cat:"social"},
  {fr:"copine",en:"buddy / pal (female)",phon:"*ko-PEEN*",def:"Amie proche",ex:"Ma copine de classe.",level:7,cat:"social"},
  {fr:"pote",en:"mate / pal",phon:"*POT*",def:"Ami (familier)",ex:"Un pote de travail.",level:7,cat:"social"},
  {fr:"meilleur ami",en:"best friend (male)",phon:"*may-YUR a-MEE*",def:"Ami le plus proche",ex:"Mon meilleur ami.",level:7,cat:"social"},
  {fr:"meilleure amie",en:"best friend (female)",phon:"*may-YUR a-MEE*",def:"Amie la plus proche",ex:"Ma meilleure amie.",level:7,cat:"social"},
  {fr:"connaissance",en:"acquaintance",phon:"*ko-nay-SONSS*",def:"Personne connue superficiellement",ex:"Une simple connaissance.",level:7,cat:"social"},
  {fr:"camarade",en:"classmate / comrade",phon:"*ka-ma-RAD*",def:"Compagnon d'activité",ex:"Un camarade de classe.",level:7,cat:"social"},
  {fr:"compagnon",en:"companion (male)",phon:"*kom-pa-NYON*",def:"Partenaire de vie",ex:"Mon compagnon de route.",level:7,cat:"social"},
  {fr:"compagne",en:"companion (female)",phon:"*kom-PAN-yuh*",def:"Partenaire de vie",ex:"Ma compagne de toujours.",level:7,cat:"social"},
  {fr:"fiancé",en:"fiancé (male)",phon:"*fyan-SAY*",def:"Promis au mariage",ex:"Mon fiancé.",level:7,cat:"social"},
  {fr:"fiancée",en:"fiancée (female)",phon:"*fyan-SAY*",def:"Promise au mariage",ex:"Ma fiancée.",level:7,cat:"social"},
  {fr:"petit ami",en:"boyfriend",phon:"*puh-TEE a-MEE*",def:"Amoureux",ex:"Mon petit ami.",level:7,cat:"social"},
  {fr:"petite amie",en:"girlfriend",phon:"*puh-TEET a-MEE*",def:"Amoureuse",ex:"Ma petite amie.",level:7,cat:"social"},
  
  // Sorties / Loisirs
  {fr:"cinéma",en:"movie theater",phon:"*see-nay-MA*",def:"Lieu de projection",ex:"Aller au cinéma.",level:7,cat:"lieu"},
  {fr:"théâtre",en:"theater",phon:"*tay-AH-truh*",def:"Lieu de spectacle",ex:"Une pièce de théâtre.",level:7,cat:"lieu"},
  {fr:"concert",en:"concert",phon:"*kon-SAIR*",def:"Spectacle musical",ex:"Un concert de rock.",level:7,cat:"lieu"},
  {fr:"musée",en:"museum",phon:"*mew-ZAY*",def:"Lieu d'exposition",ex:"Le musée du Louvre.",level:7,cat:"lieu"},
  {fr:"parc",en:"park",phon:"*PARK*",def:"Espace vert public",ex:"Un pique-nique au parc.",level:7,cat:"lieu"},
  {fr:"plage",en:"beach",phon:"*PLAZH*",def:"Bord de mer",ex:"La plage en été.",level:7,cat:"lieu"},
  {fr:"piscine",en:"swimming pool",phon:"*pee-SEEN*",def:"Bassin de natation",ex:"Aller à la piscine.",level:7,cat:"lieu"},
  {fr:"bowling",en:"bowling",phon:"*BOH-ling*",def:"Jeu de quilles",ex:"Une partie de bowling.",level:7,cat:"lieu"},
  {fr:"karaoké",en:"karaoke",phon:"*ka-ra-o-KAY*",def:"Chant sur instrumentale",ex:"Soirée karaoké.",level:7,cat:"lieu"},
  {fr:"discothèque",en:"nightclub",phon:"*dees-ko-TEK*",def:"Lieu de danse nocturne",ex:"La discothèque du centre.",level:7,cat:"lieu"},
  {fr:"restaurant",en:"restaurant",phon:"*res-to-RON*",def:"Lieu pour manger",ex:"Dîner au restaurant.",level:7,cat:"lieu"},
  {fr:"café",en:"café / coffee shop",phon:"*ka-FAY*",def:"Lieu pour boire un café",ex:"Prendre un café.",level:7,cat:"lieu"},
  {fr:"bar",en:"bar",phon:"*BAR*",def:"Lieu pour boire",ex:"Un verre au bar.",level:7,cat:"lieu"},
  
  // Verbes de sortie
  {fr:"sortir",en:"to go out",phon:"*soor-TEER*",def:"Quitter son domicile pour s'amuser",ex:"Sortir avec des amis.",level:7,cat:"verbe"},
  {fr:"se retrouver",en:"to meet up",phon:"*suh ruh-troo-VAY*",def:"Se rejoindre",ex:"On se retrouve où ?",level:7,cat:"verbe"},
  {fr:"inviter",en:"to invite",phon:"*on-vee-TAY*",def:"Demander de venir",ex:"Inviter à dîner.",level:7,cat:"verbe"},
  {fr:"retrouver",en:"to meet",phon:"*ruh-troo-VAY*",def:"Rejoindre quelqu'un",ex:"Retrouver au café.",level:7,cat:"verbe"},
  {fr:"raconter",en:"to tell",phon:"*ra-kon-TAY*",def:"Narrer une histoire",ex:"Raconter ses vacances.",level:7,cat:"verbe"},
  {fr",ex:"L'ascenseur est en panne.",level:4,cat:"lieu"},
  {fr:"boîte aux lettres",en:"mailbox",phon:"*bwat oh LET-truh*",def:"Réceptacle du courrier",ex:"Vérifier la boîte aux lettres.",level:4,cat:"lieu"},
  {fr:"interphone",en:"intercom",phon:"*on-tair-FON*",def:"Système de communication",ex:"Sonner à l'interphone.",level:4,cat:"objet"},
  {fr:"sonnette",en:"doorbell",phon:"*son-NET*",def:"Dispositif d'appel",ex:"La sonnette de l'appartement.",level:4,cat:"objet"},
  {fr:"clé",en:"key",phon:"*KLAY*",def:"Objet pour ouvrir",ex:"La clé de la cave.",level:4,cat:"objet"},
  {fr:"badge",en:"badge / access card",phon:"*BAZH*",def:"Carte d'accès",ex:"Badger pour entrer.",level:4,cat:"objet"},
  {fr:"digicode",en:"keypad code",phon:"*dee-zhee-KOH*",def:"Code d'entrée numérique",ex:"Le digicode de la porte.",level:4,cat:"objet"},
  
  // Verbes sociaux
  {fr:"présenter",en:"to introduce",phon:"*pray-zon-TAY*",def:"Faire connaître",ex:"Je te présente mon voisin.",level:4,cat:"verbe"},
  {fr:"saluer",en:"to greet",phon:"*sa-LWAY*",def:"Dire bonjour",ex:"Saluer les voisins.",level:4,cat:"verbe"},
  {fr:"inviter",en:"to invite",phon:"*on-vee-TAY*",def:"Demander de venir",ex:"Inviter à dîner.",level:4,cat:"verbe"},
  {fr:"recevoir",en:"to receive",phon:"*ruh-suh-VWAHR*",def:"Accueillir chez soi",ex:"Recevoir des amis.",level:4,cat:"verbe"},
  {fr:"déranger",en:"to disturb",phon:"*day-ron-ZHAY*",def:"Gêner quelqu'un",ex:"Pardon de vous déranger.",level:4,cat:"verbe"},
  {fr:"aider",en:"to help",phon:"*ay-DAY*",def:"Assister",ex:"Aider le voisin âgé.",level:4,cat:"verbe"},
  {fr:"emprunter",en:"to borrow",phon:"*om-pron-TAY*",def:"Preter temporairement",ex:"Emprunter du sucre.",level:4,cat:"verbe"},
  {fr:"prêter",en:"to lend",phon:"*PRAY-tay*",def:"Donner temporairement",ex:"Prêter un outil.",level:4,cat:"verbe"},
  {fr:"rendre",en:"to give back",phon:"*RON-druh*",def:"Retourner ce qui est prêté",ex:"Rendre le livre emprunté.",level:4,cat:"verbe"},
  {fr:"partager",en:"to share",phon:"*par-ta-ZHAY*",def:"Mettre en commun",ex:"Partager un repas.",level:4,cat:"verbe"},
  {fr:"discuter",en:"to discuss",phon:"*dees-kew-TAY*",def:"Parler ensemble",ex:"Discuter avec les voisins.",level:4,cat:"verbe"},
  {fr:"se plaindre",en:"to complain",phon:"*suh PLAN-druh*",def:"Exprimer un mécontentement",ex:"Se plaindre du bruit.",level:4,cat:"verbe"},
  {fr:"tolerer",en:"to tolerate",phon:"*to-lay-RAY*",def:"Supporter",ex:"Tolérer le bruit.",level:4,cat:"verbe"},
  {fr:"respecter",en:"to respect",phon:"*res-pek-TAY*",def:"Tenir en estime",ex:"Respecter le voisinage.",level:4,cat:"verbe"},
  
  // Politesse voisinage
  {fr:"bonjour madame",en:"hello madam",phon:"*bon-ZHOOR ma-DAM*",def:"Salutation formelle",ex:"Bonjour madame, comment allez-vous ?",level:4,cat:"politesse"},
  {fr:"bonjour monsieur",en:"hello sir",phon:"*bon-ZHOOR muh-SYUR*",def:"Salutation formelle",ex:"Bonjour monsieur, enchanté.",level:4,cat:"politesse"},
  {fr:"au revoir madame",en:"goodbye madam",phon:"*oh ruh-VWAHR ma-DAM*",def:"Départ formel",ex:"Au revoir madame, bonne journée.",level:4,cat:"politesse"},
  {fr:"excusez le dérangement",en:"sorry for the disturbance",phon:"*ek-skew-zay luh day-ron-ZH-mon*",def:"Présentation d'excuses",ex:"Excusez le dérangement.",level:4,cat:"politesse"},
  {fr:"c'est gentil",en:"that's kind",phon:"*say zhon-TEE*",def:"Remerciement",ex:"C'est gentil à vous.",level:4,cat:"politesse"},
  {fr:"c'est aimable",en:"that's nice of you",phon:"*say ze-MA-bluh*",def:"Remerciement",ex:"C'est aimable, merci.",level:4,cat:"politesse"},
  {fr:"je vous remercie",en:"I thank you",phon:"*zhuh voo ruh-mair-SEE*",def:"Remerciement formel",ex:"Je vous remercie beaucoup.",level:4,cat:"politesse"},
  {fr:"tout le plaisir est pour moi",en:"the pleasure is all mine",phon:"*too luh pleh-ZEER ay poor MWA*",def:"Réponse à un remerciement",ex:"Tout le plaisir est pour moi.",level:4,cat:"politesse"},
  {fr:"n'hésitez pas",en:"don't hesitate",phon:"*nay-zee-tay PA*",def:"Invitation à demander",ex:"N'hésitez pas à frapper.",level:4,cat:"politesse"},
  {fr:"faites comme chez vous",en:"make yourself at home",phon:"*fet kom SHAY voo*",def:"Invitation à se sentir à l'aise",ex:"Faites comme chez vous.",level:4,cat:"politesse"},
  
  // Expressions de voisinage
  {fr:"faire du bruit",en:"to make noise",phon:"*FAIR doo brwee*",def:"Produire du son gênant",ex:"Ne faites pas trop de bruit.",level:4,cat:"expression"},
  {fr:"soirée",en:"evening party",phon:"*swa-RAY*",def:"Réunion du soir",ex:"Une soirée entre voisins.",level:4,cat:"expression"},
  {fr:"fête",en:"party / celebration",phon:"*FET*",def:"Célébration",ex:"La fête des voisins.",level:4,cat:"expression"},
  {fr:"apéritif",en:"aperitif",phon:"*a-pay-ree-TEEF*",def:"Boisson avant le repas",ex:"Un apéritif entre voisins.",level:4,cat:"expression"},
  {fr:"barbecue",en:"barbecue",phon:"*bar-bay-KYOO*",def:"Grillade en plein air",ex:"Un barbecue dans le jardin.",level:4,cat:"expression"},
  {fr:"réunion",en:"meeting",phon:"*ray-OO-nyon*",def:"Assemblée",ex:"Une réunion de copropriété.",level:4,cat:"expression"},
  {fr:"copropriété",en:"co-ownership",phon:"*ko-pro-pree-ay-TAY*",def:"Régime de propriété collective",ex:"La copropriété de l'immeuble.",level:4,cat:"expression"},
  {fr:"syndic",en:"property management",phon:"*san-DEEK*",def:"Gestionnaire d'immeuble",ex:"Le syndic de copropriété.",level:4,cat:"expression"},
  {fr:"charges",en:"service charges",phon:"*SHARZH*",def:"Frais communs",ex:"Les charges de copropriété.",level:4,cat:"expression"},
  {fr:"travaux",en:"renovation work",phon:"*tra-VOH*",def:"Ouvrage de réparation",ex:"Des travaux dans l'immeuble.",level:4,cat:"expression"},
  {fr:"parking",en:"parking lot",phon:"*par-KING*",def:"Espace de stationnement",ex:"Le parking souterrain.",level:4,cat:"lieu"},
  {fr:"cave",en:"cellar",phon:"*KAV*",def:"Espace sous le sol",ex:"Ma cave à vin.",level:4,cat:"lieu"},
  {fr:"grenier",en:"attic",phon:"*gruh-NYAY*",def:"Espace sous le toit",ex:"Le grenier commun.",level:4,cat:"lieu"},
  {fr:"jardin commun",en:"shared garden",phon:"*zhar-DAN ko-MON*",def:"Espace vert collectif",ex:"Le jardin commun de la résidence.",level:4,cat:"lieu"},
  {fr:"terrain de jeu",en:"playground",phon:"*tair-AN duh ZHUH*",def:"Espace pour enfants",ex:"Le terrain de jeu derrière.",level:4,cat:"lieu"}

];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_7 = VOCAB_LEVEL_7;
}
