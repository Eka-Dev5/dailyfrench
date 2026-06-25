// ═══════════════════════════════════════════════════════════════
// vocab-level-19.js — Daily French 🥖
// NIVEAU 19 — Ma Cuisine 🍳
// Entrées : 57
// ═══════════════════════════════════════════════════════════════

const VOCAB_LEVEL_19 = [
  {fr:"couper",en:"to cut",phon:"*koo-PAY*",phonFr:"tou KAT",def:"Séparer avec un couteau.",ex:"Je coupe les légumes.",level:19,cat:"verbe"},
  {fr:"mélanger",en:"to mix",phon:"*may-LANZH*",phonFr:"tou MIKS",def:"Réunir plusieurs éléments.",ex:"Je mélange bien la sauce.",level:19,cat:"verbe"},
  {fr:"faire chauffer",en:"to heat up",phon:"*fair shoh-FAY*",phonFr:"tou HIITE APE",def:"Augmenter la température.",ex:"Je fais chauffer l'huile.",level:19,cat:"expression"},
  {fr:"ajouter",en:"to add",phon:"*zha-ZHOOT*",phonFr:"tou AD",def:"Mettre en plus.",ex:"J'ajoute du sel.",level:19,cat:"verbe"},
  {fr:"remuer",en:"to stir",phon:"*ruh-MUHW*",phonFr:"tou STEUR",def:"Bouger avec une cuillère.",ex:"Je remue la soupe.",level:19,cat:"verbe"},
  {fr:"goûter",en:"to taste",phon:"*goo-TAY*",phonFr:"tou TEIST",def:"Essayer la saveur.",ex:"Je goûte le plat.",level:19,cat:"verbe"},
  {fr:"servir",en:"to serve",phon:"*sair-VEER*",phonFr:"tou SERV",def:"Présenter le plat.",ex:"Je sers le dîner à 20h.",level:19,cat:"verbe"},
  {fr:"les ingrédients",en:"the ingredients",phon:"*lay zan-gray-DYAN*",phonFr:"ZE IN-GRI-DJIANTS",def:"Éléments d'une recette.",ex:"Je prépare les ingrédients.",level:19,cat:"cuisine"},
  {fr:"une recette",en:"a recipe",phon:"*oon ruh-SET*",phonFr:"A RE-SSI-Pi",def:"Instructions pour cuisiner.",ex:"Je suis une recette.",level:19,cat:"cuisine"},
  {fr:"c'est prêt",en:"it's ready",phon:"*say PREH*",phonFr:"ITS RE-DI",def:"Le plat est terminé.",ex:"C'est prêt ! On peut manger.",level:19,cat:"expression"},
  {fr:"faire cuire",en:"to cook",phon:"*fair KWEER*",phonFr:"tou KOUK",def:"Préparer à la chaleur.",ex:"Je fais cuire le poulet.",level:19,cat:"expression"},
  {fr:"faire revenir",en:"to brown / to sauté",phon:"*fair ruh-vuh-NEER*",phonFr:"tou BRAOUN / tou SOU-TEY",def:"Faire dorer à la poêle.",ex:"Je fais revenir les oignons.",level:19,cat:"expression"},
  {fr:"faire bouillir",en:"to boil",phon:"*fair boo-YEER*",phonFr:"tou BOUIL",def:"Porter à ébullition.",ex:"Je fais bouillir l'eau pour les pâtes.",level:19,cat:"expression"},
  {fr:"faire frire",en:"to fry",phon:"*fair FREER*",phonFr:"tou FRAI",def:"Cuire dans de l'huile chaude.",ex:"Je fais frire les frites.",level:19,cat:"expression"},
  {fr:"faire griller",en:"to grill",phon:"*fair gree-YAY*",phonFr:"tou GRIL",def:"Cuire sur une grille ou au four.",ex:"Je fais griller le pain.",level:19,cat:"expression"},
  {fr:"faire rôtir",en:"to roast",phon:"*fair roh-TEER*",phonFr:"tou ROUST",def:"Cuire au four à haute température.",ex:"Je fais rôtir le poulet.",level:19,cat:"expression"},
  {fr:"éplucher",en:"to peel",phon:"*ay-ploo-SHAY*",phonFr:"tou PIIL",def:"Enlever la peau.",ex:"J'épluche les pommes de terre.",level:19,cat:"verbe"},
  {fr:"râper",en:"to grate",phon:"*rah-PAY*",phonFr:"tou GREIT",def:"Réduire en fines lamelles.",ex:"Je râpe le fromage.",level:19,cat:"verbe"},
  {fr:"hacher",en:"to chop / to mince",phon:"*a-SHAY*",phonFr:"tou TCHOP / tou MINSS",def:"Couper en petits morceaux.",ex:"Je hache l'ail.",level:19,cat:"verbe"},
  {fr:"émincer",en:"to slice thinly",phon:"*ay-mon-SAY*",phonFr:"tou SLAIS THIN-LI",def:"Couper en fines tranches.",ex:"J'émince les champignons.",level:19,cat:"verbe"},
  {fr:"verser",en:"to pour",phon:"*vair-SAY*",phonFr:"tou POR",def:"Transférer un liquide.",ex:"Je verse le lait dans le bol.",level:19,cat:"verbe"},
  {fr:"peser",en:"to weigh",phon:"*puh-ZAY*",phonFr:"tou WEI",def:"Mesurer le poids.",ex:"Je pèse la farine.",level:19,cat:"verbe"},
  {fr:"tamiser",en:"to sift",phon:"*ta-mee-ZAY*",phonFr:"tou SIFT",def:"Passer au tamis.",ex:"Je tamise la farine.",level:19,cat:"verbe"},
  {fr:"pétrir",en:"to knead",phon:"*pay-TREER*",phonFr:"tou NIID",def:"Travailler la pâte.",ex:"Je pétris la pâte à pain.",level:19,cat:"verbe"},
  {fr:"laisser lever",en:"to let rise",phon:"*lay-SAY luh-VAY*",phonFr:"tou LET RAIZ",def:"Attendre que la pâte gonfle.",ex:"Je laisse lever la pâte une heure.",level:19,cat:"expression"},
  {fr:"fouetter",en:"to whip",phon:"*foo-tay*",phonFr:"tou WIP",def:"Battre rapidement.",ex:"Je fouette la crème.",level:19,cat:"verbe"},
  {fr:"un batteur",en:"a whisk / mixer",phon:"*uh ba-TUR*",phonFr:"A WISK / MIK-SEUR",def:"Outil pour battre.",ex:"J'utilise un batteur électrique.",level:19,cat:"cuisine"},
  {fr:"un couteau",en:"a knife",phon:"*uh koo-TOH*",phonFr:"A NAÏF",def:"Outil tranchant.",ex:"Passe-moi le couteau, s'il te plaît.",level:19,cat:"cuisine"},
  {fr:"une cuillère",en:"a spoon",phon:"*oon kwee-YAIR*",phonFr:"A SPOOUN",def:"Ustensile pour manger ou mesurer.",ex:"Une cuillère à soupe d'huile.",level:19,cat:"cuisine"},
  {fr:"une fourchette",en:"a fork",phon:"*oon for-SHET*",phonFr:"A FORK",def:"Ustensile à dents.",ex:"Je mange avec une fourchette.",level:19,cat:"cuisine"},
  {fr:"une assiette",en:"a plate",phon:"*oon a-SYET*",phonFr:"A PLEIT",def:"Support pour le repas.",ex:"Mets le plat dans l'assiette.",level:19,cat:"cuisine"},
  {fr:"un bol",en:"a bowl",phon:"*uh BOL*",phonFr:"A BOUL",def:"Récipient profond.",ex:"Je mets la salade dans un bol.",level:19,cat:"cuisine"},
  {fr:"une poêle",en:"a frying pan",phon:"*oon PWAL*",phonFr:"A FRAI-ING PAN",def:"Récipient pour frire.",ex:"Je fais chauffer la poêle.",level:19,cat:"cuisine"},
  {fr:"une casserole",en:"a saucepan",phon:"*oon ka-soh-ROL*",phonFr:"A SOU-SPAN",def:"Récipient pour bouillir.",ex:"Mets l'eau dans la casserole.",level:19,cat:"cuisine"},
  {fr:"un four",en:"an oven",phon:"*uh FOOR*",phonFr:"AN OU-VEN",def:"Appareil de cuisson.",ex:"Préchauffe le four à 180 degrés.",level:19,cat:"cuisine"},
  {fr:"une plaque de cuisson",en:"a stovetop",phon:"*oon PLAK duh KWEES-son*",phonFr:"A STOU-V TOP",def:"Surface de cuisson.",ex:"Allume la plaque de cuisson.",level:19,cat:"cuisine"},
  {fr:"un réfrigérateur",en:"a refrigerator",phon:"*uh ray-free-zhay-ra-TUR*",phonFr:"A RI-FRI-DJAI-REI-TEUR",def:"Appareil pour conserver au froid.",ex:"Mets le lait au réfrigérateur.",level:19,cat:"cuisine"},
  {fr:"un congélateur",en:"a freezer",phon:"*uh kon-zhay-la-TUR*",phonFr:"A FRII-ZEUR",def:"Appareil pour congeler.",ex:"Le poisson est au congélateur.",level:19,cat:"cuisine"},
  {fr:"du sel",en:"salt",phon:"*dew SEL*",phonFr:"SOLT",def:"Assaisonnement blanc.",ex:"Ajoute du sel et du poivre.",level:19,cat:"cuisine"},
  {fr:"du poivre",en:"pepper",phon:"*dew PWAVR*",phonFr:"PE-PEUR",def:"Assaisonnement noir.",ex:"Je mouds du poivre.",level:19,cat:"cuisine"},
  {fr:"de l'huile",en:"oil",phon:"*duh LWEE*",phonFr:"OUIL",def:"Graisse liquide pour cuisiner.",ex:"Verse de l'huile dans la poêle.",level:19,cat:"cuisine"},
  {fr:"du beurre",en:"butter",phon:"*dew BUHR*",phonFr:"BOU-TEUR",def:"Matière grasse jaune.",ex:"Je mets du beurre sur le pain.",level:19,cat:"cuisine"},
  {fr:"du sucre",en:"sugar",phon:"*dew SOO-kruh*",phonFr:"CHOU-GUEUR",def:"Édulcorant blanc.",ex:"Ajoute du sucre dans le café.",level:19,cat:"cuisine"},
  {fr:"de la farine",en:"flour",phon:"*duh lah fa-REEN*",phonFr:"FLAOU-EUR",def:"Poudre de céréale.",ex:"Il faut de la farine pour le gâteau.",level:19,cat:"cuisine"},
  {fr:"des œufs",en:"eggs",phon:"*day ZUHF*",phonFr:"EGZ",def:"Aliment ovale.",ex:"Je casse deux œufs dans le bol.",level:19,cat:"cuisine"},
  {fr:"du lait",en:"milk",phon:"*duh LEH*",phonFr:"MILK",def:"Boisson blanche.",ex:"Je bois du lait le matin.",level:19,cat:"cuisine"},
  {fr:"du pain",en:"bread",phon:"*duh PAN*",phonFr:"BRED",def:"Aliment à base de farine.",ex:"J'achète du pain frais.",level:19,cat:"cuisine"},
  {fr:"du fromage",en:"cheese",phon:"*duh fro-MAZH*",phonFr:"TCHIIZ",def:"Produit laitier fermenté.",ex:"Je mange du fromage après le repas.",level:19,cat:"cuisine"},
  {fr:"de la viande",en:"meat",phon:"*duh lah VYOND*",phonFr:"MIIT",def:"Chair animale.",ex:"Je prépare de la viande pour le dîner.",level:19,cat:"cuisine"},
  {fr:"du poisson",en:"fish",phon:"*duh pwa-SON*",phonFr:"FICH",def:"Animal aquatique comestible.",ex:"Je mange du poisson le vendredi.",level:19,cat:"cuisine"},
  {fr:"des légumes",en:"vegetables",phon:"*day lay-GOOM*",phonFr:"VE-DJAI-TEU-BLEULZ",def:"Plantes comestibles.",ex:"Je mange beaucoup de légumes.",level:19,cat:"cuisine"},
  {fr:"des fruits",en:"fruits",phon:"*day FRWEE*",phonFr:"FROOUTS",def:"Produits des arbres comestibles.",ex:"Je mange des fruits tous les jours.",level:19,cat:"cuisine"},
  {fr:"un plat",en:"a dish",phon:"*uh PLA*",phonFr:"A DISH",def:"Préparation culinaire.",ex:"C'est un plat délicieux.",level:19,cat:"cuisine"},
  {fr:"le petit-déjeuner",en:"breakfast",phon:"*luh puh-TEE day-zhuh-NAY*",phonFr:"BREK-FAST",def:"Repas du matin.",ex:"Je prends le petit-déjeuner à 8h.",level:19,cat:"cuisine"},
  {fr:"le déjeuner",en:"lunch",phon:"*luh day-zhuh-NAY*",phonFr:"LANTCH",def:"Repas de midi.",ex:"On mange le déjeuner ensemble.",level:19,cat:"cuisine"},
  {fr:"le dîner",en:"dinner",phon:"*luh DEE-nay*",phonFr:"DI-NEUR",def:"Repas du soir.",ex:"Le dîner est servi à 20h.",level:19,cat:"cuisine"},
  {fr:"laisser mijoter",en:"to simmer",phon:"*lay-say mee-zhoh-TAY*",phonFr:"tou SI-MEUR",def:"Cuire doucement à feu doux.",ex:"Je laisse mijoter la sauce pendant une heure.",level:19,cat:"expression"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_19 = VOCAB_LEVEL_19;
}