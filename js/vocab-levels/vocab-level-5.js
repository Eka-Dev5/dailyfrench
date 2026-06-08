// ═══════════════════════════════════════════════════════════════════
// vocab-level-5.js — Daily French 🥖
// NIVEAU 5 — Goûts & envies 😋
// Entrées : 9
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_5 = [
  // === AJOUTS NIVEAU 5 (41 entrées supplémentaires) ===
  
  // Goûts / Saveurs
  {fr:"sucré",en:"sweet",phon:"*soo-KRAY*",def:"Goût du sucre",ex:"Ce gâteau est trop sucré.",level:5,cat:"goût"},
  {fr:"salé",en:"salty",phon:"*sa-LAY*",def:"Goût du sel",ex:"La soupe est bien salée.",level:5,cat:"goût"},
  {fr:"acide",en:"sour",phon:"*a-SEED*",def:"Goût acide",ex:"Ce citron est acide.",level:5,cat:"goût"},
  {fr:"amer",en:"bitter (male)",phon:"*a-MAIR*",def:"Goût désagréable",ex:"Un café amer.",level:5,cat:"goût"},
  {fr:"amère",en:"bitter (female)",phon:"*a-MAIR*",def:"Goût désagréable",ex:"Une amertume amère.",level:5,cat:"goût"},
  {fr:"épicé",en:"spicy",phon:"*ay-pee-SAY*",def:"Goût piquant",ex:"Un plat très épicé.",level:5,cat:"goût"},
  {fr:"doux",en:"mild / soft (male)",phon:"*DOO*",def:"Goût peu fort",ex:"Un fromage doux.",level:5,cat:"goût"},
  {fr:"douce",en:"mild / soft (female)",phon:"*DOOSS*",def:"Goût peu fort",ex:"Une saveur douce.",level:5,cat:"goût"},
  {fr:"fort",en:"strong (male)",phon:"*FOR*",def:"Goût intense",ex:"Un fromage fort.",level:5,cat:"goût"},
  {fr:"forte",en:"strong (female)",phon:"*FORT*",def:"Goût intense",ex:"Une odeur forte.",level:5,cat:"goût"},
  {fr:"délicieux",en:"delicious (male)",phon:"*day-lee-SYUR*",def:"Très bon au goût",ex:"Un repas délicieux.",level:5,cat:"goût"},
  {fr:"délicieuse",en:"delicious (female)",phon:"*day-lee-SYURZ*",def:"Très bon au goût",ex:"Une tarte délicieuse.",level:5,cat:"goût"},
  {fr:"fade",en:"bland",phon:"*FAD*",def:"Sans goût",ex:"Ce plat est fade.",level:5,cat:"goût"},
  {fr:"croustillant",en:"crispy",phon:"*kroo-stee-YON*",def:"Texture croquante",ex:"Du pain croustillant.",level:5,cat:"texture"},
  {fr:"crémeux",en:"creamy",phon:"*kray-MUR*",def:"Texture onctueuse",ex:"Une sauce crémeuse.",level:5,cat:"texture"},
  {fr:"tendre",en:"tender",phon:"*ton-DRUH*",def:"Texture molle",ex:"De la viande tendre.",level:5,cat:"texture"},
  {fr:"dur",en:"hard",phon:"*DOOR*",def:"Texture ferme",ex:"Un fruit encore dur.",level:5,cat:"texture"},
  {fr:"juteux",en:"juicy",phon:"*zhoo-TUR*",def:"Plein de jus",ex:"Une pêche juteuse.",level:5,cat:"texture"},
  
  // Désirs / Envies
  {fr:"envie",en:"craving",phon:"*on-VEE*",def:"Désir soudain",ex:"J'ai envie de chocolat.",level:5,cat:"désir"},
  {fr:"besoin",en:"need",phon:"*buh-ZWAN*",def:"Nécessité",ex:"J'ai besoin de manger.",level:5,cat:"désir"},
  {fr:"préférence",en:"preference",phon:"*pray-fay-RONSS*",def:"Ce qu'on préfère",ex:"Ma préférence va au sucré.",level:5,cat:"désir"},
  {fr:"appétit",en:"appetite",phon:"*a-pay-TEE*",def:"Envie de manger",ex:"Bon appétit !",level:5,cat:"désir"},
  {fr:"fringale",en:"ravenous hunger",phon:"*fran-GAL*",def:"Faim intense (familier)",ex:"J'ai la fringale.",level:5,cat:"désir"},
  {fr:"dégustation",en:"tasting",phon:"*day-gew-sta-SYON*",def:"Action de goûter",ex:"Une dégustation de vin.",level:5,cat:"activité"},
  {fr:"recette",en:"recipe",phon:"*ruh-SET*",def:"Instructions de cuisine",ex:"Une recette de grand-mère.",level:5,cat:"activité"},
  {fr:"ingrédient",en:"ingredient",phon:"*an-gree-DYAN*",def:"Composant d'un plat",ex:"Les ingrédients de la recette.",level:5,cat:"aliment"},
  {fr:"épice",en:"spice",phon:"*ay-PEES*",def:"Substance aromatique",ex:"Des épices exotiques.",level:5,cat:"aliment"},
  {fr:"herbe aromatique",en:"aromatic herb",phon:"*AIRB a-ro-ma-TEEK*",def:"Plante pour parfumer",ex:"Des herbes aromatiques fraîches.",level:5,cat:"aliment"},
  {fr:"condiment",en:"condiment",phon:"*kon-dee-MON*",def:"Accompagnement de saveur",ex:"Moutarde et condiments.",level:5,cat:"aliment"},
  
  // Boissons
  {fr:"eau",en:"water",phon:"*OH*",def:"Liquide transparent",ex:"Un verre d'eau fraîche.",level:5,cat:"boisson"},
  {fr:"vin",en:"wine",phon:"*VAN*",def:"Boisson alcoolisée de raisin",ex:"Un verre de vin rouge.",level:5,cat:"boisson"},
  {fr:"bière",en:"beer",phon:"*BYAIR*",def:"Boisson alcoolisée de malt",ex:"Une bière blonde.",level:5,cat:"boisson"},
  {fr:"jus",en:"juice",phon:"*ZHOOS*",def:"Liquide de fruit",ex:"Un jus de pomme frais.",level:5,cat:"boisson"},
  {fr:"thé",en:"tea",phon:"*TAY*",def:"Infusion de feuilles",ex:"Un thé vert.",level:5,cat:"boisson"},
  {fr:"café",en:"coffee",phon:"*ka-FAY*",def:"Boisson de grain torréfié",ex:"Un café noir serré.",level:5,cat:"boisson"},
  {fr:"lait",en:"milk",phon:"*LEH*",def:"Liquide blanc animal",ex:"Du lait frais.",level:5,cat:"boisson"},
  {fr:"sirop",en:"syrup",phon:"*see-ROH*",def:"Liquide concentré sucré",ex:"Du sirop de menthe.",level:5,cat:"boisson"},
  {fr:"limonade",en:"lemonade",phon:"*lee-mo-NAD*",def:"Boisson gazeuse citronnée",ex:"Une limonade bien fraîche.",level:5,cat:"boisson"},
  {fr:"chocolat chaud",en:"hot chocolate",phon:"*sho-ko-LA SHOH*",def:"Boisson chocolatée chaude",ex:"Un chocolat chaud l'hiver.",level:5,cat:"boisson"}

];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_5 = VOCAB_LEVEL_5;
}
