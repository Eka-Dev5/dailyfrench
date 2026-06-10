// ═══════════════════════════════════════════════════════════════════
// vocab-level-20.js — Daily French 🥖
// NIVEAU 20 — Français Vivant 💬
// Entrées : 50
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_20 = [
  {fr:"ça marche",en:"OK / that works",phon:"*sa MARSH*",def:"Accord, approbation.",ex:"On se retrouve à midi ? — Ça marche !",level:20,cat:"expression"},
  {fr:"pas terrible",en:"so-so / not great",phon:"*pa tay-REE-bluh*",def:"Moyen, pas très bien (ironique).",ex:"— Tu aimes le film ? — B:19,cat:"verbe"},
  {fr:"râper",en:"to grate",phon:"*rah-PAY*",def:"Réduire en fines lamelles.",ex:"Je râpe le fromage.",level:19,cat:"verbe"},
  {fr:"hacher",en:"to chop / to mince",phon:"*a-SHAY*",def:"Couper en petits morceaux.",ex:"Je hache l'ail.",level:19,cat:"verbe"},
  {fr:"émincer",en:"to slice thinly",phon:"*ay-mon-SAY*",def:"Couper en fines tranches.",ex:"J'émince les champignons.",level:19,cat:"verbe"},
  {fr:"verser",en:"to pour",phon:"*vair-SAY*",def:"Transférer un liquide.",ex:"Je verse le lait dans le bol.",level:19,cat:"verbe"},
  {fr:"peser",en:"to weigh",phon:"*puh-ZAY*",def:"Mesurer le poids.",ex:"Je pèse la farine.",level:19,cat:"verbe"},
  {fr:"tamiser",en:"to sift",phon:"*ta-mee-ZAY*",def:"Passer au tamis.",ex:"Je tamise la farine.",level:19,cat:"verbe"},
  {fr:"pétrir",en:"to knead",phon:"*pay-TREER*",def:"Travailler la pâte.",ex:"Je pétris la pâte à pain.",level:19,cat:"verbe"},
  {fr:"laisser lever",en:"to let rise",phon:"*lay-SAY luh-VAY*",def:"Attendre que la pâte gonfle.",ex:"Je laisse lever la pâte une heure.",level:19,cat:"expression"},
  {fr:"fouetter",en:"to whip",phon:"*foo-tay*",def:"Battre rapidement.",ex:"Je fouette la crème.",level:19,cat:"verbe"},
  {fr:"un batteur",en:"a whisk / mixer",phon:"*uh ba-TUR*",def:"Outil pour battre.",ex:"J'utilise un batteur électrique.",level:19,cat:"cuisine"},
  {fr:"un couteau",en:"a knife",phon:"*uh koo-TOH*",def:"Outil tranchant.",ex:"Passe-moi le couteau, s'il te plaît.",level:19,cat:"cuisine"},
  {fr:"une cuillère",en:"a spoon",phon:"*oon kwee-YAIR*",def:"Ustensile pour manger ou mesurer.",ex:"Une cuillère à soupe d'huile.",level:19,cat:"cuisine"},
  {fr:"une fourchette",en:"a fork",phon:"*oon for-SHET*",def:"Ustensile à dents.",ex:"Je mange avec une fourchette.",level:19,cat:"cuisine"},
  {fr:"une assiette",en:"a plate",phon:"*oon a-SYET*",def:"Support pour le repas.",ex:"Mets le plat dans l'assiette.",level:19,cat:"cuisine"},
  {fr:"un bol",en:"a bowl",phon:"*uh BOL*",def:"Récipient profond.",ex:"Je mets la salade dans un bol.",level:19,cat:"cuisine"},
  {fr:"une poêle",en:"a frying pan",phon:"*oon PWAL*",def:"Récipient pour frire.",ex:"Je fais chauffer la poêle.",level:19,cat:"cuisine"},
  {fr:"une casserole",en:"a saucepan",phon:"*oon ka-soh-ROL*",def:"Récipient pour bouillir.",ex:"Mets l'eau dans la casserole.",level:19,cat:"cuisine"},
  {fr:"un four",en:"an oven",phon:"*uh FOOR*",def:"Appareil de cuisson.",ex:"Préchauffe le four à 180 degrés.",level:19,cat:"cuisine"},
  {fr:"une plaque de cuisson",en:"a stovetop",phon:"*oon PLAK duh KWEES-son*",def:"Surface de cuisson.",ex:"Allume la plaque de cuisson.",level:19,cat:"cuisine"},
  {fr:"un réfrigérateur",en:"a refrigerator",phon:"*uh ray-free-zhay-ra-TUR*",def:"Appareil pour conserver au froid.",ex:"Mets le lait au réfrigérateur.",level:19,cat:"cuisine"},
  {fr:"un congélateur",en:"a freezer",phon:"*uh kon-zhay-la-TUR*",def:"Appareil pour congeler.",ex:"Le poisson est au congélateur.",level:19,cat:"cuisine"},
  {fr:"du sel",en:"salt",phon:"*dew SEL*",def:"Assaisonnement blanc.",ex:"Ajoute du sel et du poivre.",level:19,cat:"cuisine"},
  {fr:"du poivre",en:"pepper",phon:"*dew PWAVR*",def:"Assaisonnement noir.",ex:"Je mouds du poivre.",level:19,cat:"cuisine"},
  {fr:"de l'huile",en:"oil",phon:"*duh LWEE*",def:"Graisse liquide pour cuisiner.",ex:"Verse de l'huile dans la poêle.",level:19,cat:"cuisine"},
  {fr:"du beurre",en:"butter",phon:"*dew BUHR*",def:"Matière grasse jaune.",ex:"Je mets du beurre sur le pain.",level:19,cat:"cuisine"},
  {fr:"du sucre",en:"sugar",phon:"*dew SOO-kruh*",def:"Édulcorant blanc.",ex:"Ajoute du sucre dans le café.",level:19,cat:"cuisine"},
  {fr:"de la farine",en:"flour",phon:"*duh lah fa-REEN*",def:"Poudre de céréale.",ex:"Il faut de la farine pour le gâteau.",level:19,cat:"cuisine"},
  {fr:"des œufs",en:"eggs",phon:"*day ZUHF*",def:"Aliment ovale.",ex:"Je casse deux œufs dans le bol.",level:19,cat:"cuisine"},
  {fr:"du lait",en:"milk",phon:"*duh LEH*",def:"Boisson blanche.",ex:"Je bois du lait le matin.",level:19,cat:"cuisine"},
  {fr:"du pain",en:"bread",phon:"*duh PAN*",def:"Aliment à base de farine.",ex:"J'achète du pain frais.",level:19,cat:"cuisine"},
  {fr:"du fromage",en:"cheese",phon:"*duh fro-MAZH*",def:"Produit laitier fermenté.",ex:"Je mange du fromage après le repas.",level:19,cat:"cuisine"},
  {fr:"de la viande",en:"meat",phon:"*duh lah VYOND*",def:"Chair animale.",ex:"Je prépare de la viande pour le dîner.",level:19,cat:"cuisine"},
  {fr:"du poisson",en:"fish",phon:"*duh pwa-SON*",def:"Animal aquatique comestible.",ex:"Je mange du poisson le vendredi.",level:19,cat:"cuisine"},
  {fr:"des légumes",en:"vegetables",phon:"*day lay-GOOM*",def:"Plantes comestibles.",ex:"Je mange beaucoup de légumes.",level:19,cat:"cuisine"},
  {fr:"des fruits",en:"fruits",phon:"*day FRWEE*",def:"Produits des arbres comestibles.",ex:"Je mange des fruits tous les jours.",level:19,cat:"cuisine"},
  {fr:"un plat",en:"a dish",phon:"*uh PLA*",def:"Préparation culinaire.",ex:"C'est un plat délicieux.",level:19,cat:"cuisine"},
  {fr:"le petit-déjeuner",en:"breakfast",phon:"*luh puh-TEE day-zhuh-NAY*",def:"Repas du matin.",ex:"Je prends le petit-déjeuner à 8h.",level:19,cat:"cuisine"},
  {fr:"le déjeuner",en:"lunch",phon:"*luh day-zhuh-NAY*",def:"Repas de midi.",ex:"On mange le déjeuner ensemble.",level:19,cat:"cuisine"},
  {fr:"le dîner",en:"dinner",phon:"*luh DEE-nay*",def:"Repas du soir.",ex:"Le dîner est servi à 20h.",level:19,cat:"cuisine"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_19 = VOCAB_LEVEL_19;
}
