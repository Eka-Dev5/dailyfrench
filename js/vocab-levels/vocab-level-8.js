// ═══════════════════════════════════════════════════════════════════
// vocab-level-8.js — Daily French 🥖
// NIVEAU 8 — Le temps & la météo 🌤️
// Entrées : 14
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_8 = [
  {fr:"il fait beau",en:"it's nice weather",phon:"*eel FAY bo*",def:"Description d'un temps agréable.",ex:"Il fait beau, allons nous promener.",ex_en:"The weather is nice, let's go for a walk.",level:8,cat:"météo"},
  {fr:"il pleut",en:"it's raining",phon:"*eel PLUH*",def:"Chute de gouttes d'eau.",ex:"Il pleut, prenez un parapluie.",ex_en:"It's raining, take an umbrella.",level:8,cat:"météo"},
  {fr:"il neige",en:"it's snowing",phon:"*eel NEHZH*",def:"Chute de neige.",ex:"Il neige dans le nord.",ex_en:"It's snowing in the north.",level:8,cat:"météo"},
  {fr:"il fait du vent",en:"it's windy",phon:"*eel FAY dew VON*",def:"Présence de vent.",ex:"Il fait du vent, fermez la porte.",ex_en:"It's windy, close the door.",level:8,cat:"météo"},
  {fr:"il fait chaud",en:"it's hot",phon:"*eel FAY sho*",def:"Température élevée.",def_en:"High temperature.",ex:"Il fait chaud, buvez de l'eau.",ex_en:"It's hot, drink some water.",level:8,cat:"météo"},
  {fr:"il fait froid",en:"it's cold",phon:"*eel FAY FRWAH*",def:"Température basse.",def_en:"Low temperature.",ex:"Il fait froid, allumez le chauffage.",ex_en:"It's cold, put the heating on.",level:8,cat:"météo"},
  {fr:"il fait frais",en:"it's cool / chilly",phon:"*eel FAY FRAY*",def:"Température fraîche.",ex:"Il fait frais, prenez un pull.",ex_en:"It's cool, take a jumper.",level:8,cat:"météo"},
  {fr:"aujourd'hui",en:"today",phon:"*oh-zhoord-DWEE*",def:"Le jour présent.",ex:"Aujourd'hui, il fait beau.",ex_en:"Today the weather is nice.",level:8,cat:"temps"},
  {fr:"demain",en:"tomorrow",phon:"*duh-MAN*",def:"Le jour suivant.",ex:"À demain, Madame.",ex_en:"See you tomorrow, Mrs.",level:8,cat:"temps"},
  {fr:"après-demain",en:"the day after tomorrow",phon:"*a-PRAY duh-MAN*",def:"Deux jours après aujourd'hui.",ex:"À après-demain !",ex_en:"See you the day after tomorrow!",level:8,cat:"temps"},
  {fr:"au printemps",en:"in spring",phon:"*oh PRAN-ton*",def:"Saison du renouveau, mars à mai.",ex:"Au printemps, les fleurs éclosent.",ex_en:"In spring, the flowers bloom.",level:8,cat:"saison"},
  {fr:"en été",en:"in summer",phon:"*on ay-TAY*",def:"Saison chaude, juin à août.",ex:"En été, le jardin est beau.",ex_en:"In summer, the garden is beautiful.",level:8,cat:"saison"},
  {fr:"en automne",en:"in autumn",phon:"*on no-TON*",def:"Saison des feuilles mortes.",ex:"En automne, les feuilles tombent.",ex_en:"In autumn, the leaves fall.",level:8,cat:"saison"},
  {fr:"en hiver",en:"in winter",phon:"*on ee-VAIR*",def:"Saison froide, décembre à février.",ex:"En hiver, le jardin dort.",ex_en:"In winter, the garden sleeps.",level:8,cat:"saison"}
  // === AJOUTS NIVEAU 8 (36 entrées supplémentaires) ===
  
  // Météo / Climat
  {fr:"climat",en:"climate",phon:"*klee-MA*",def:"Conditions atmosphériques régionales",ex:"Le climat méditerranéen.",level:8,cat:"météo"},
  {fr:"température",en:"temperature",phon:"*tom-pay-ra-TOOR*",def:"Degré de chaleur",ex:"La température extérieure.",level:8,cat:"météo"},
  {fr:"degré",en:"degree",phon:"*duh-GRAY*",def:"Unité de température",ex:"Il fait 25 degrés.",level:8,cat:"météo"},
  {fr:"thermomètre",en:"thermometer",phon:"*tair-mo-MET-truh*",def:"Instrument de mesure",ex:"Le thermomètre affiche 30°.",level:8,cat:"objet"},
  {fr:"baromètre",en:"barometer",phon:"*ba-ro-MET-truh*",def:"Instrument de pression",ex:"Le baromètre descend.",level:8,cat:"objet"},
  {fr:"humidité",en:"humidity",phon:"*oo-mee-dee-TAY",ex:"L'ascenseur est en panne.",level:4,cat:"lieu"},
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
  window.VOCAB_LEVEL_8 = VOCAB_LEVEL_8;
}
