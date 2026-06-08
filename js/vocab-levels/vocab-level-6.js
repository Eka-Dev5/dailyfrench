// ═══════════════════════════════════════════════════════════════════
// vocab-level-6.js — Daily French 🥖
// NIVEAU 6 — Chez le commerçant 🛍️
// Entrées : 8
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_6 = [
  {fr:"la pâtisserie",en:"pastry shop",phon:"*pa-tee-suh-REE*",def:"Commerce de gâteaux et pâtisseries.",ex:"Une tarte à la pâtisserie.",level:6,cat:"commerce"},
  {fr:"la boucherie",en:"butcher shop",phon:"*boo-shuh-REE*",def:"Commerce de viande.",ex:"De la viande à la boucherie.",level:6,cat:"commerce"},
  {fr:"la charcuterie",en:"delicatessen",phon:"*shar-koo-tuh-REE*",def:"Commerce de salaison et charcuterie.",ex:"Du saucisson à la charcuterie.",level:6,cat:"commerce"},
  {fr:"la pharmacie",en:"pharmacy",phon:"*far-ma-SEE*",def:"Commerce de médicaments.",ex:"À côté de la pharmacie.",level:6,cat:"commerce"},
  {fr:"le tabac-presse",en:"newsagent / tobacconist",phon:"*ta-BAK PRESS*",def:"Commerce typique : cigarettes, timbres, journaux.",ex:"Acheter des timbres au tabac-presse.",level:6,cat:"commerce"},
  {fr:"un timbre",en:"a stamp",phon:"*uh TAN-bruh*",def:"Vignette pour affranchir le courrier.",ex:"Un timbre pour l'étranger.",level:6,cat:"objet"},
  {fr:"lait cru",en:"raw milk",phon:"*lay KROO*",def:"Lait non pasteurisé.",ex:"Du fromage au lait cru.",level:6,cat:"aliment"},
  {fr:"sans gluten",en:"gluten-free",phon:"*SON gloo-TEN*",def:"Ne contenant pas de gluten.",ex:"Du pain sans gluten.",level:6,cat:"aliment"}
  // === AJOUTS NIVEAU 6 (42 entrées supplémentaires) ===
  
  // Commerce / Magasins
  {fr:"magasin",en:"store",phon:"*ma-ga-ZAN*",def:"Lieu de vente",ex:"Un grand magasin.",level:6,cat:"commerce"},
  {fr:"boutique",en:"boutique / shop",phon:"*boo-TEEK*",def:"Petit commerce spécialisé",ex:"Une boutique de mode.",level:6,cat:"commerce"},
  {fr:"supermarché",en:"supermarket",phon:"*soo-pair-mar-SHAY*",def:"Grand magasin alimentaire",ex:"Faire les courses au supermarché.",level:6,cat:"commerce"},
  {fr:"hypermarché",en:"hypermarket",phon:"*ee-pair-mar-SHAY*",def:"Très grand magasin",ex:"L'hypermarché en périphérie.",level:6,cat:"commerce"},
  {fr:"centre commercial",en:"shopping mall",phon:"*SON-truh ko-mair-SYAL*",def:"Ensemble de magasins",ex:"Le centre commercial.",level:6,cat:"commerce"},
  {fr:"galeries marchandes",en:"shopping arcade",phon:"*ga-luh-REE mar-SHAND*",def:"Passage couvert de magasins",ex:"Les galeries marchandes.",level:6,cat:"commerce"},
  {fr:"grande surface",en:"big-box store",phon:"*GROND soor-FASS*",def:"Grand magasin",ex:"Une grande surface de bricolage.",level:6,cat:"commerce"},
  {fr:"commerce",en:"shop / business",phon:"*ko-MAIRSS*",def:"Activité de vente",ex:"Le commerce local.",level:6,cat:"commerce"},
  {fr:"commerçant",en:"shopkeeper (male)",phon:"*ko-mair-SON*",def:"Personne qui tient un commerce",ex:"Le commerçant du coin.",level:6,cat:"commerce"},
  {fr:"commerçante",en:"shopkeeper (female)",phon:"*ko-mair-SONT*",def:"Personne qui tient un commerce",ex:"La commerçante sympathique.",level:6,cat:"commerce"},
  {fr:"vendeur",en:"salesman",phon:"*von-DUR*",def:"Personne qui vend",ex:"Le vendur m'a conseillé.",level:6,cat:"commerce"},
  {fr:"vendeuse",en:"saleswoman",phon",ex:"L'ascenseur est en panne.",level:4,cat:"lieu"},
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
  window.VOCAB_LEVEL_6 = VOCAB_LEVEL_6;
}
