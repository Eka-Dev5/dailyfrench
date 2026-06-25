// ═══════════════════════════════════════════════════════════════════
// vocab-level-04.js — Daily French 🥖
// NIVEAU 4 — Voisins & Communauté 🏘️
// Entrées : 80
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_04 = [
  // === VOISINAGE / LIEU (18) ===
  {fr:"voisinage",en:"neighborhood",phon:"*vwa-zee-NAZH*",phonEN:"*NAY-bur-hood*",def:"Ensemble des voisins",ex:"Un bon voisinage.",level:4,cat:"social"},
  {fr:"quartier",en:"district / area",phon:"*kar-TYAY*",phonEN:"*DIS-trikt / AIR-ee-uh*",def:"Partie de ville",ex:"Mon quartier est calme.",level:4,cat:"lieu"},
  {fr:"immeuble",en:"building",phon:"*ee-MUHB-bluh*",phonEN:"*BIL-ding*",def:"Bâtiment d'habitation",ex:"L'immeuble d'à côté.",level:4,cat:"lieu"},
  {fr:"résidence",en:"residence",phon:"*ray-zee-DONSS*",phonEN:"*REZ-i-dunss*",def:"Ensemble de logements",ex:"Une résidence sécurisée.",level:4,cat:"lieu"},
  {fr:"escalier",en:"staircase",phon:"*es-ka-LYAY*",phonEN:"*STAIR-kays*",def:"Structure pour monter",ex:"Les escaliers communs.",level:4,cat:"lieu"},
  {fr:"palier",en:"landing",phon:"*pal-YAY*",phonEN:"*LAN-ding*",def:"Plateforme entre étages",ex:"Sur le palier du 2e.",level:4,cat:"lieu"},
  {fr:"ascenseur",en:"elevator",phon:"*a-son-SUR*",phonEN:"*EL-uh-vay-tur*",def:"Appareil pour monter",ex:"L'ascenseur est en panne.",level:4,cat:"lieu"},
  {fr:"boîte aux lettres",en:"mailbox",phon:"*bwat oh LET-truh*",phonEN:"*MAYL-boks*",def:"Réceptacle du courrier",ex:"Vérifier la boîte aux lettres.",level:4,cat:"lieu"},
  {fr:"parking",en:"parking lot",phon:"*par-KING*",phonEN:"*PAR-king lot*",def:"Espace de stationnement",ex:"Le parking souterrain.",level:4,cat:"lieu"},
  {fr:"cave",en:"cellar",phon:"*KAV*",phonEN:"*SEL-ur*",def:"Espace sous le sol",ex:"Ma cave à vin.",level:4,cat:"lieu"},
  {fr:"grenier",en:"attic",phon:"*gruh-NYAY*",phonEN:"*AT-ik*",def:"Espace sous le toit",ex:"Le grenier commun.",level:4,cat:"lieu"},
  {fr:"jardin commun",en:"shared garden",phon:"*zhar-DAN ko-MON*",phonEN:"*shaird GAR-dun*",def:"Espace vert collectif",ex:"Le jardin commun de la résidence.",level:4,cat:"lieu"},
  {fr:"rue",en:"street",phon:"*ROO*",phonEN:"*street*",def:"Voie publique",ex:"La rue principale.",level:4,cat:"lieu"},
  {fr:"avenue",en:"avenue",phon:"*a-vuh-NOO*",phonEN:"*AV-uh-nyoo*",def:"Grande rue",ex:"Une avenue bordée d'arbres.",level:4,cat:"lieu"},
  {fr:"boulevard",en:"boulevard",phon:"*boo-luh-VAR*",phonEN:"*BOOL-uh-vard*",def:"Large voie urbaine",ex:"Le boulevard du centre.",level:4,cat:"lieu"},
  {fr:"place",en:"square",phon:"*PLAHS*",phonEN:"*skwair*",def:"Espace public ouvert",ex:"La place du village.",level:4,cat:"lieu"},
  {fr:"carrefour",en:"intersection",phon:"*kar-FOOOR*",phonEN:"*IN-tur-sek-shun*",def:"Croisement de routes",ex:"Au carrefour principal.",level:4,cat:"lieu"},
  {fr:"centre-ville",en:"downtown",phon:"*son-truh VEEL*",phonEN:"*DOWN-town*",def:"Centre urbain",ex:"Aller au centre-ville.",level:4,cat:"lieu"},

  // === OBJETS / ÉQUIPEMENTS (8) ===
  {fr:"interphone",en:"intercom",phon:"*on-tair-FON*",phonEN:"*IN-tur-kom*",def:"Système de communication",ex:"Sonner à l'interphone.",level:4,cat:"objet"},
  {fr:"sonnette",en:"doorbell",phon:"*son-NET*",phonEN:"*DOR-bel*",def:"Dispositif d'appel",ex:"La sonnette de l'appartement.",level:4,cat:"objet"},
  {fr:"clé",en:"key",phon:"*KLAY*",phonEN:"*kee*",def:"Objet pour ouvrir",ex:"La clé de la cave.",level:4,cat:"objet"},
  {fr:"badge",en:"badge / access card",phon:"*BAZH*",phonEN:"*baj*",def:"Carte d'accès",ex:"Badger pour entrer.",level:4,cat:"objet"},
  {fr:"digicode",en:"keypad code",phon:"*dee-zhee-KOH*",phonEN:"*KEE-pad kohd*",def:"Code d'entrée numérique",ex:"Le digicode de la porte.",level:4,cat:"objet"},
  {fr:"terrain de jeu",en:"playground",phon:"*tair-AN duh ZHUH*",phonEN:"*PLAY-grownd*",def:"Espace pour enfants",ex:"Le terrain de jeu derrière.",level:4,cat:"lieu"},
  {fr:"tapis",en:"carpet / mat",phon:"*ta-PEE*",phonEN:"*KAR-pit / mat*",def:"Couverture de sol",ex:"Un tapis dans le hall.",level:4,cat:"objet"},
  {fr:"lampe",en:"lamp",phon:"*LONP*",phonEN:"*lamp*",def:"Source de lumière",ex:"Une lampe dans l'entrée.",level:4,cat:"objet"},

  // === VERBES SOCIAUX (18) ===
  {fr:"présenter",en:"to introduce",phon:"*pray-zon-TAY*",phonEN:"*too in-troh-DOOS*",def:"Faire connaître",ex:"Je te présente mon voisin.",level:4,cat:"verbe"},
  {fr:"saluer",en:"to greet",phon:"*sa-LWAY*",phonEN:"*too greet*",def:"Dire bonjour",ex:"Saluer les voisins.",level:4,cat:"verbe"},
  {fr:"inviter",en:"to invite",phon:"*on-vee-TAY*",phonEN:"*too in-VYT*",def:"Demander de venir",ex:"Inviter à dîner.",level:4,cat:"verbe"},
  {fr:"recevoir",en:"to receive",phon:"*ruh-suh-VWAHR*",phonEN:"*too rih-SEEV*",def:"Accueillir chez soi",ex:"Recevoir des amis.",level:4,cat:"verbe"},
  {fr:"déranger",en:"to disturb",phon:"*day-ron-ZHAY*",phonEN:"*too dis-TUR-b*",def:"Gêner quelqu'un",ex:"Pardon de vous déranger.",level:4,cat:"verbe"},
  {fr:"aider",en:"to help",phon:"*ay-DAY*",phonEN:"*too help*",def:"Assister",ex:"Aider le voisin âgé.",level:4,cat:"verbe"},
  {fr:"emprunter",en:"to borrow",phon:"*om-pron-TAY*",phonEN:"*too BOR-roh*",def:"Prêter temporairement",ex:"Emprunter du sucre.",level:4,cat:"verbe"},
  {fr:"prêter",en:"to lend",phon:"*PRAY-tay*",phonEN:"*too lend*",def:"Donner temporairement",ex:"Prêter un outil.",level:4,cat:"verbe"},
  {fr:"rendre",en:"to give back",phon:"*RON-druh*",phonEN:"*too giv bak*",def:"Retourner ce qui est prêté",ex:"Rendre le livre emprunté.",level:4,cat:"verbe"},
  {fr:"partager",en:"to share",phon:"*par-ta-ZHAY*",phonEN:"*too shair*",def:"Mettre en commun",ex:"Partager un repas.",level:4,cat:"verbe"},
  {fr:"discuter",en:"to discuss",phon:"*dees-kew-TAY*",phonEN:"*too dis-KUSS*",def:"Parler ensemble",ex:"Discuter avec les voisins.",level:4,cat:"verbe"},
  {fr:"se plaindre",en:"to complain",phon:"*suh PLAN-druh*",phonEN:"*too kom-PLAYN*",def:"Exprimer un mécontentement",ex:"Se plaindre du bruit.",level:4,cat:"verbe"},
  {fr:"respecter",en:"to respect",phon:"*res-pek-TAY*",phonEN:"*too rih-SPEKT*",def:"Tenir en estime",ex:"Respecter le voisinage.",level:4,cat:"verbe"},
  {fr:"tolérer",en:"to tolerate",phon:"*to-lay-RAY*",phonEN:"*too TOL-uh-rayt*",def:"Supporter",ex:"Tolérer le bruit.",level:4,cat:"verbe"},
  {fr:"connaître",en:"to know",phon:"*ko-NETR*",phonEN:"*too noh*",def:"Connaître une personne",ex:"Je connais mon voisin.",level:4,cat:"verbe"},
  {fr:"rencontrer",en:"to meet",phon:"*ron-kon-TRAY*",phonEN:"*too meet*",def:"Faire la connaissance",ex:"Rencontrer les voisins.",level:4,cat:"verbe"},
  {fr:"habiter",en:"to live",phon:"*a-bee-TAY*",phonEN:"*too liv*",def:"Résider quelque part",ex:"J'habite dans le quartier.",level:4,cat:"verbe"},
  {fr:"déménager",en:"to move",phon:"*day-may-na-ZHAY*",phonEN:"*too moov*",def:"Changer de logement",ex:"Ils déménagent demain.",level:4,cat:"verbe"},

  // === POLITESSE VOISINAGE (14) ===
  {fr:"bonjour madame",en:"hello madam",phon:"*bon-ZHOOR ma-DAM*",phonEN:"*hel-OH ma-DAM*",def:"Salutation formelle",ex:"Bonjour madame, comment allez-vous ?",level:4,cat:"politesse"},
  {fr:"bonjour monsieur",en:"hello sir",phon:"*bon-ZHOOR muh-SYUR*",phonEN:"*hel-OH sur*",def:"Salutation formelle",ex:"Bonjour monsieur, enchanté.",level:4,cat:"politesse"},
  {fr:"au revoir madame",en:"goodbye madam",phon:"*oh ruh-VWAHR ma-DAM*",phonEN:"*good-BYE ma-DAM*",def:"Départ formel",ex:"Au revoir madame, bonne journée.",level:4,cat:"politesse"},
  {fr:"excusez le dérangement",en:"sorry for the disturbance",phon:"*ek-skew-zay luh day-ron-ZH-mon*",phonEN:"*SOR-ree for thuh dis-TUR-bunss*",def:"Présentation d'excuses",ex:"Excusez le dérangement.",level:4,cat:"politesse"},
  {fr:"c'est gentil",en:"that's kind",phon:"*say zhon-TEE*",phonEN:"*that s kynd*",def:"Remerciement",ex:"C'est gentil à vous.",level:4,cat:"politesse"},
  {fr:"c'est aimable",en:"that's nice of you",phon:"*say ze-MA-bluh*",phonEN:"*that s nys of yoo*",def:"Remerciement",ex:"C'est aimable, merci.",level:4,cat:"politesse"},
  {fr:"je vous remercie",en:"I thank you",phon:"*zhuh voo ruh-mair-SEE*",phonEN:"*eye than-KYOO*",def:"Remerciement formel",ex:"Je vous remercie beaucoup.",level:4,cat:"politesse"},
  {fr:"n'hésitez pas",en:"don't hesitate",phon:"*nay-zee-tay PA*",phonEN:"*dohn-t HEZ-i-tayt*",def:"Invitation à demander",ex:"N'hésitez pas à frapper.",level:4,cat:"politesse"},
  {fr:"faites comme chez vous",en:"make yourself at home",phon:"*fet kom SHAY voo*",phonEN:"*mayk yoor-SELF at hohm*",def:"Invitation à se sentir à l'aise",ex:"Faites comme chez vous.",level:4,cat:"politesse"},
  {fr:"tout le plaisir est pour moi",en:"the pleasure is all mine",phon:"*too luh pleh-ZEER ay poor MWA*",phonEN:"*thuh PLEZH-ur iz awl myn*",def:"Réponse à un remerciement",ex:"Tout le plaisir est pour moi.",level:4,cat:"politesse"},
  {fr:"bonne journée",en:"have a good day",phon:"*bon zhoor-NAY*",phonEN:"*hav uh good day*",def:"Souhait de bonne journée",ex:"Bonne journée, au revoir !",level:4,cat:"politesse"},
  {fr:"bonne soirée",en:"have a good evening",phon:"*bon swa-RAY*",phonEN:"*hav uh good EE-ving*",def:"Souhait de bonne soirée",ex:"Bonne soirée à vous.",level:4,cat:"politesse"},
  {fr:"bon week-end",en:"have a good weekend",phon:"*bon week-END*",phonEN:"*hav uh good WEEK-end*",def:"Souhait de bon week-end",ex:"Bon week-end, madame !",level:4,cat:"politesse"},
  {fr:"enchanté",en:"nice to meet you",phon:"*on-shon-TAY*",phonEN:"*nys too MEET yoo*",def:"Formule de rencontre",ex:"Enchanté, madame Dupont.",level:4,cat:"politesse"},

  // === EXPRESSIONS / COPROPRIÉTÉ (12) ===
  {fr:"soirée",en:"evening party",phon:"*swa-RAY*",phonEN:"*EE-ving PAR-tee*",def:"Réunion du soir",ex:"Une soirée entre voisins.",level:4,cat:"expression"},
  {fr:"fête",en:"party / celebration",phon:"*FET*",phonEN:"*PAR-tee / sel-uh-BRAY-shun*",def:"Célébration",ex:"La fête des voisins.",level:4,cat:"expression"},
  {fr:"apéritif",en:"aperitif",phon:"*a-pay-ree-TEEF*",phonEN:"*uh-PEH-ri-teef*",def:"Boisson avant le repas",ex:"Un apéritif entre voisins.",level:4,cat:"expression"},
  {fr:"barbecue",en:"barbecue",phon:"*bar-bay-KYOO*",phonEN:"*BAR-bih-kyoo*",def:"Grillade en plein air",ex:"Un barbecue dans le jardin.",level:4,cat:"expression"},
  {fr:"réunion",en:"meeting",phon:"*ray-OO-nyon*",phonEN:"*MEE-ting*",def:"Assemblée",ex:"Une réunion de copropriété.",level:4,cat:"expression"},
  {fr:"copropriété",en:"co-ownership",phon:"*ko-pro-pree-ay-TAY*",phonEN:"*koh-OWN-ur-ship*",def:"Régime de propriété collective",ex:"La copropriété de l'immeuble.",level:4,cat:"expression"},
  {fr:"syndic",en:"property management",phon:"*san-DEEK*",phonEN:"*PROH-pur-tee MAN-ij-munt*",def:"Gestionnaire d'immeuble",ex:"Le syndic de copropriété.",level:4,cat:"expression"},
  {fr:"charges",en:"service charges",phon:"*SHARZH*",phonEN:"*SUR-vis char-jiz*",def:"Frais communs",ex:"Les charges de copropriété.",level:4,cat:"expression"},
  {fr:"voisin",en:"neighbor (male)",phon:"*vwa-ZAN*",phonEN:"*NAY-bur*",def:"Personne habitant à côté",ex:"Mon voisin est sympa.",level:4,cat:"social"},
  {fr:"voisine",en:"neighbor (female)",phon:"*vwa-ZEEN*",phonEN:"*NAY-bur*",def:"Personne habitant à côté",ex:"Ma voisine m'aide.",level:4,cat:"social"},
  {fr:"appartement",en:"apartment",phon:"*a-part-mo-MON*",phonEN:"*uh-PART-munt*",def:"Logement dans immeuble",ex:"Un appartement au 3e.",level:4,cat:"lieu"},
  {fr:"étage",en:"floor",phon:"*ay-TAZH*",phonEN:"*flor*",def:"Niveau d'immeuble",ex:"J'habite au 2e étage.",level:4,cat:"lieu"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_04 = VOCAB_LEVEL_04;
}
