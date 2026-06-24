 // ═══════════════════════════════════════════════════════════════════
// vocab-level-04.js — Daily French 🥖
// NIVEAU 4 — Voisins & Communauté 🏘️
// Entrées : 80
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_04 = [
  // === VOISINAGE / LIEU (18) ===
  {fr:"voisinage",en:"neighborhood",phon:"*vwa-zee-NAZH*",def:"Ensemble des voisins",ex:"Un bon voisinage.",level:4,cat:"social"},
  {fr:"quartier",en:"district / area",phon:"*kar-TYAY*",def:"Partie de ville",ex:"Mon quartier est calme.",level:4,cat:"lieu"},
  {fr:"immeuble",en:"building",phon:"*ee-MUHB-bluh*",def:"Bâtiment d'habitation",ex:"L'immeuble d'à côté.",level:4,cat:"lieu"},
  {fr:"résidence",en:"residence",phon:"*ray-zee-DONSS*",def:"Ensemble de logements",ex:"Une résidence sécurisée.",level:4,cat:"lieu"},
  {fr:"escalier",en:"staircase",phon:"*es-ka-LYAY*",def:"Structure pour monter",ex:"Les escaliers communs.",level:4,cat:"lieu"},
  {fr:"palier",en:"landing",phon:"*pal-YAY*",def:"Plateforme entre étages",ex:"Sur le palier du 2e.",level:4,cat:"lieu"},
  {fr:"ascenseur",en:"elevator",phon:"*a-son-SUR*",def:"Appareil pour monter",ex:"L'ascenseur est en panne.",level:4,cat:"lieu"},
  {fr:"boîte aux lettres",en:"mailbox",phon:"*bwat oh LET-truh*",def:"Réceptacle du courrier",ex:"Vérifier la boîte aux lettres.",level:4,cat:"lieu"},
  {fr:"parking",en:"parking lot",phon:"*par-KING*",def:"Espace de stationnement",ex:"Le parking souterrain.",level:4,cat:"lieu"},
  {fr:"cave",en:"cellar",phon:"*KAV*",def:"Espace sous le sol",ex:"Ma cave à vin.",level:4,cat:"lieu"},
  {fr:"grenier",en:"attic",phon:"*gruh-NYAY*",def:"Espace sous le toit",ex:"Le grenier commun.",level:4,cat:"lieu"},
  {fr:"jardin commun",en:"shared garden",phon:"*zhar-DAN ko-MON*",def:"Espace vert collectif",ex:"Le jardin commun de la résidence.",level:4,cat:"lieu"},
  {fr:"rue",en:"street",phon:"*ROO*",def:"Voie publique",ex:"La rue principale.",level:4,cat:"lieu"},
  {fr:"avenue",en:"avenue",phon:"*a-vuh-NOO*",def:"Grande rue",ex:"Une avenue bordée d'arbres.",level:4,cat:"lieu"},
  {fr:"boulevard",en:"boulevard",phon:"*boo-luh-VAR*",def:"Large voie urbaine",ex:"Le boulevard du centre.",level:4,cat:"lieu"},
  {fr:"place",en:"square",phon:"*PLAHS*",def:"Espace public ouvert",ex:"La place du village.",level:4,cat:"lieu"},
  {fr:"carrefour",en:"intersection",phon:"*kar-FOOOR*",def:"Croisement de routes",ex:"Au carrefour principal.",level:4,cat:"lieu"},
  {fr:"centre-ville",en:"downtown",phon:"*son-truh VEEL*",def:"Centre urbain",ex:"Aller au centre-ville.",level:4,cat:"lieu"},

  // === OBJETS / ÉQUIPEMENTS (8) ===
  {fr:"interphone",en:"intercom",phon:"*on-tair-FON*",def:"Système de communication",ex:"Sonner à l'interphone.",level:4,cat:"objet"},
  {fr:"sonnette",en:"doorbell",phon:"*son-NET*",def:"Dispositif d'appel",ex:"La sonnette de l'appartement.",level:4,cat:"objet"},
  {fr:"clé",en:"key",phon:"*KLAY*",def:"Objet pour ouvrir",ex:"La clé de la cave.",level:4,cat:"objet"},
  {fr:"badge",en:"badge / access card",phon:"*BAZH*",def:"Carte d'accès",ex:"Badger pour entrer.",level:4,cat:"objet"},
  {fr:"digicode",en:"keypad code",phon:"*dee-zhee-KOH*",def:"Code d'entrée numérique",ex:"Le digicode de la porte.",level:4,cat:"objet"},
  {fr:"terrain de jeu",en:"playground",phon:"*tair-AN duh ZHUH*",def:"Espace pour enfants",ex:"Le terrain de jeu derrière.",level:4,cat:"lieu"},
  {fr:"tapis",en:"carpet / mat",phon:"*ta-PEE*",def:"Couverture de sol",ex:"Un tapis dans le hall.",level:4,cat:"objet"},
  {fr:"lampe",en:"lamp",phon:"*LONP*",def:"Source de lumière",ex:"Une lampe dans l'entrée.",level:4,cat:"objet"},

  // === VERBES SOCIAUX (18) ===
  {fr:"présenter",en:"to introduce",phon:"*pray-zon-TAY*",def:"Faire connaître",ex:"Je te présente mon voisin.",level:4,cat:"verbe"},
  {fr:"saluer",en:"to greet",phon:"*sa-LWAY*",def:"Dire bonjour",ex:"Saluer les voisins.",level:4,cat:"verbe"},
  {fr:"inviter",en:"to invite",phon:"*on-vee-TAY*",def:"Demander de venir",ex:"Inviter à dîner.",level:4,cat:"verbe"},
  {fr:"recevoir",en:"to receive",phon:"*ruh-suh-VWAHR*",def:"Accueillir chez soi",ex:"Recevoir des amis.",level:4,cat:"verbe"},
  {fr:"déranger",en:"to disturb",phon:"*day-ron-ZHAY*",def:"Gêner quelqu'un",ex:"Pardon de vous déranger.",level:4,cat:"verbe"},
  {fr:"aider",en:"to help",phon:"*ay-DAY*",def:"Assister",ex:"Aider le voisin âgé.",level:4,cat:"verbe"},
  {fr:"emprunter",en:"to borrow",phon:"*om-pron-TAY*",def:"Prêter temporairement",ex:"Emprunter du sucre.",level:4,cat:"verbe"},
  {fr:"prêter",en:"to lend",phon:"*PRAY-tay*",def:"Donner temporairement",ex:"Prêter un outil.",level:4,cat:"verbe"},
  {fr:"rendre",en:"to give back",phon:"*RON-druh*",def:"Retourner ce qui est prêté",ex:"Rendre le livre emprunté.",level:4,cat:"verbe"},
  {fr:"partager",en:"to share",phon:"*par-ta-ZHAY*",def:"Mettre en commun",ex:"Partager un repas.",level:4,cat:"verbe"},
  {fr:"discuter",en:"to discuss",phon:"*dees-kew-TAY*",def:"Parler ensemble",ex:"Discuter avec les voisins.",level:4,cat:"verbe"},
  {fr:"se plaindre",en:"to complain",phon:"*suh PLAN-druh*",def:"Exprimer un mécontentement",ex:"Se plaindre du bruit.",level:4,cat:"verbe"},
  {fr:"respecter",en:"to respect",phon:"*res-pek-TAY*",def:"Tenir en estime",ex:"Respecter le voisinage.",level:4,cat:"verbe"},
  {fr:"tolérer",en:"to tolerate",phon:"*to-lay-RAY*",def:"Supporter",ex:"Tolérer le bruit.",level:4,cat:"verbe"},
  {fr:"connaître",en:"to know",phon:"*ko-NETR*",def:"Connaître une personne",ex:"Je connais mon voisin.",level:4,cat:"verbe"},
  {fr:"rencontrer",en:"to meet",phon:"*ron-kon-TRAY*",def:"Faire la connaissance",ex:"Rencontrer les voisins.",level:4,cat:"verbe"},
  {fr:"habiter",en:"to live",phon:"*a-bee-TAY*",def:"Résider quelque part",ex:"J'habite dans le quartier.",level:4,cat:"verbe"},
  {fr:"déménager",en:"to move",phon:"*day-may-na-ZHAY*",def:"Changer de logement",ex:"Ils déménagent demain.",level:4,cat:"verbe"},

  // === POLITESSE VOISINAGE (14) ===
  {fr:"bonjour madame",en:"hello madam",phon:"*bon-ZHOOR ma-DAM*",def:"Salutation formelle",ex:"Bonjour madame, comment allez-vous ?",level:4,cat:"politesse"},
  {fr:"bonjour monsieur",en:"hello sir",phon:"*bon-ZHOOR muh-SYUR*",def:"Salutation formelle",ex:"Bonjour monsieur, enchanté.",level:4,cat:"politesse"},
  {fr:"au revoir madame",en:"goodbye madam",phon:"*oh ruh-VWAHR ma-DAM*",def:"Départ formel",ex:"Au revoir madame, bonne journée.",level:4,cat:"politesse"},
  {fr:"excusez le dérangement",en:"sorry for the disturbance",phon:"*ek-skew-zay luh day-ron-ZH-mon*",def:"Présentation d'excuses",ex:"Excusez le dérangement.",level:4,cat:"politesse"},
  {fr:"c'est gentil",en:"that's kind",phon:"*say zhon-TEE*",def:"Remerciement",ex:"C'est gentil à vous.",level:4,cat:"politesse"},
  {fr:"c'est aimable",en:"that's nice of you",phon:"*say ze-MA-bluh*",def:"Remerciement",ex:"C'est aimable, merci.",level:4,cat:"politesse"},
  {fr:"je vous remercie",en:"I thank you",phon:"*zhuh voo ruh-mair-SEE*",def:"Remerciement formel",ex:"Je vous remercie beaucoup.",level:4,cat:"politesse"},
  {fr:"n'hésitez pas",en:"don't hesitate",phon:"*nay-zee-tay PA*",def:"Invitation à demander",ex:"N'hésitez pas à frapper.",level:4,cat:"politesse"},
  {fr:"faites comme chez vous",en:"make yourself at home",phon:"*fet kom SHAY voo*",def:"Invitation à se sentir à l'aise",ex:"Faites comme chez vous.",level:4,cat:"politesse"},
  {fr:"tout le plaisir est pour moi",en:"the pleasure is all mine",phon:"*too luh pleh-ZEER ay poor MWA*",def:"Réponse à un remerciement",ex:"Tout le plaisir est pour moi.",level:4,cat:"politesse"},
  {fr:"bonne journée",en:"have a good day",phon:"*bon zhoor-NAY*",def:"Souhait de bonne journée",ex:"Bonne journée, au revoir !",level:4,cat:"politesse"},
  {fr:"bonne soirée",en:"have a good evening",phon:"*bon swa-RAY*",def:"Souhait de bonne soirée",ex:"Bonne soirée à vous.",level:4,cat:"politesse"},
  {fr:"bon week-end",en:"have a good weekend",phon:"*bon week-END*",def:"Souhait de bon week-end",ex:"Bon week-end, madame !",level:4,cat:"politesse"},
  {fr:"enchanté",en:"nice to meet you",phon:"*on-shon-TAY*",def:"Formule de rencontre",ex:"Enchanté, madame Dupont.",level:4,cat:"politesse"},

  // === EXPRESSIONS / COPROPRIÉTÉ (12) ===
  {fr:"soirée",en:"evening party",phon:"*swa-RAY*",def:"Réunion du soir",ex:"Une soirée entre voisins.",level:4,cat:"expression"},
  {fr:"fête",en:"party / celebration",phon:"*FET*",def:"Célébration",ex:"La fête des voisins.",level:4,cat:"expression"},
  {fr:"apéritif",en:"aperitif",phon:"*a-pay-ree-TEEF*",def:"Boisson avant le repas",ex:"Un apéritif entre voisins.",level:4,cat:"expression"},
  {fr:"barbecue",en:"barbecue",phon:"*bar-bay-KYOO*",def:"Grillade en plein air",ex:"Un barbecue dans le jardin.",level:4,cat:"expression"},
  {fr:"réunion",en:"meeting",phon:"*ray-OO-nyon*",def:"Assemblée",ex:"Une réunion de copropriété.",level:4,cat:"expression"},
  {fr:"copropriété",en:"co-ownership",phon:"*ko-pro-pree-ay-TAY*",def:"Régime de propriété collective",ex:"La copropriété de l'immeuble.",level:4,cat:"expression"},
  {fr:"syndic",en:"property management",phon:"*san-DEEK*",def:"Gestionnaire d'immeuble",ex:"Le syndic de copropriété.",level:4,cat:"expression"},
  {fr:"charges",en:"service charges",phon:"*SHARZH*",def:"Frais communs",ex:"Les charges de copropriété.",level:4,cat:"expression"},
  {fr:"voisin",en:"neighbor (male)",phon:"*vwa-ZAN*",def:"Personne habitant à côté",ex:"Mon voisin est sympa.",level:4,cat:"social"},
  {fr:"voisine",en:"neighbor (female)",phon:"*vwa-ZEEN*",def:"Personne habitant à côté",ex:"Ma voisine m'aide.",level:4,cat:"social"},
  {fr:"appartement",en:"apartment",phon:"*a-part-mo-MON*",def:"Logement dans immeuble",ex:"Un appartement au 3e.",level:4,cat:"lieu"},
  {fr:"étage",en:"floor",phon:"*ay-TAZH*",def:"Niveau d'immeuble",ex:"J'habite au 2e étage.",level:4,cat:"lieu"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_04 = VOCAB_LEVEL_04;
}
