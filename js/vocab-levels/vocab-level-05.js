// ═══════════════════════════════════════════════════════════════════
// vocab-level-05.js — Daily French 🥖
// NIVEAU 5 — Goûts & Envies 😋
// Entrées : 80
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_05 = [
  // === GOÛTS / SAVEURS (16) ===
  {fr:"sucré",en:"sweet",phon:"*soo-KRAY*",phonEN:"*sweet*",def:"Goût du sucre",ex:"Ce gâteau est trop sucré.",level:5,cat:"goût"},
  {fr:"salé",en:"salty",phon:"*sa-LAY*",phonEN:"*SOL-tee*",def:"Goût du sel",ex:"La soupe est bien salée.",level:5,cat:"goût"},
  {fr:"acide",en:"sour",phon:"*a-SEED*",phonEN:"*SOW-ur*",def:"Goût acide",ex:"Ce citron est acide.",level:5,cat:"goût"},
  {fr:"amer",en:"bitter (male)",phon:"*a-MAIR*",phonEN:"*BI-tur*",def:"Goût désagréable",ex:"Un café amer.",level:5,cat:"goût"},
  {fr:"amère",en:"bitter (female)",phon:"*a-MAIR*",phonEN:"*BI-tur*",def:"Goût désagréable",ex:"Une amertume amère.",level:5,cat:"goût"},
  {fr:"épicé",en:"spicy",phon:"*ay-pee-SAY*",phonEN:"*SPY-see*",def:"Goût piquant",ex:"Un plat très épicé.",level:5,cat:"goût"},
  {fr:"doux",en:"mild / soft (male)",phon:"*DOO*",phonEN:"*myld / soft*",def:"Goût peu fort",ex:"Un fromage doux.",level:5,cat:"goût"},
  {fr:"douce",en:"mild / soft (female)",phon:"*DOOSS*",phonEN:"*myld / soft*",def:"Goût peu fort",ex:"Une saveur douce.",level:5,cat:"goût"},
  {fr:"fort",en:"strong (male)",phon:"*FOR*",phonEN:"*stron*",def:"Goût intense",ex:"Un fromage fort.",level:5,cat:"goût"},
  {fr:"forte",en:"strong (female)",phon:"*FORT*",phonEN:"*stron*",def:"Goût intense",ex:"Une odeur forte.",level:5,cat:"goût"},
  {fr:"délicieux",en:"delicious (male)",phon:"*day-lee-SYUR*",phonEN:"*dee-LISH-us*",def:"Très bon au goût",ex:"Un repas délicieux.",level:5,cat:"goût"},
  {fr:"délicieuse",en:"delicious (female)",phon:"*day-lee-SYURZ*",phonEN:"*dee-LISH-us*",def:"Très bon au goût",ex:"Une tarte délicieuse.",level:5,cat:"goût"},
  {fr:"fade",en:"bland",phon:"*FAD*",phonEN:"*bland*",def:"Sans goût",ex:"Ce plat est fade.",level:5,cat:"goût"},
  {fr:"piquant",en:"hot / spicy",phon:"*pee-KON*",phonEN:"*hot / SPY-see*",def:"Qui pique au goût",ex:"Une sauce piquante.",level:5,cat:"goût"},
  {fr:"acidulé",en:"tangy",phon:"*a-see-dew-LAY*",phonEN:"*TAN-gee*",def:"Légèrement acide et sucré",ex:"Un fruit acidulé.",level:5,cat:"goût"},
  {fr:"aromatique",en:"aromatic",phon:"*a-ro-ma-TEEK*",phonEN:"*air-oh-MAT-ik*",def:"Qui sent bon",ex:"Des herbes aromatiques.",level:5,cat:"goût"},

  // === TEXTURES (10) ===
  {fr:"croustillant",en:"crispy",phon:"*kroo-stee-YON*",phonEN:"*KRIS-pee*",def:"Texture croquante",ex:"Du pain croustillant.",level:5,cat:"texture"},
  {fr:"crémeux",en:"creamy",phon:"*kray-MUR*",phonEN:"*KREE-mee*",def:"Texture onctueuse",ex:"Une sauce crémeuse.",level:5,cat:"texture"},
  {fr:"tendre",en:"tender",phon:"*ton-DRUH*",phonEN:"*TEN-dur*",def:"Texture molle",ex:"De la viande tendre.",level:5,cat:"texture"},
  {fr:"dur",en:"hard",phon:"*DOOR*",phonEN:"*hard*",def:"Texture ferme",ex:"Un fruit encore dur.",level:5,cat:"texture"},
  {fr:"juteux",en:"juicy",phon:"*zhoo-TUR*",phonEN:"*JOO-see*",def:"Plein de jus",ex:"Une pêche juteuse.",level:5,cat:"texture"},
  {fr:"fondant",en:"melting",phon:"*fon-DON*",phonEN:"*MEL-ting*",def:"Qui fond en bouche",ex:"Un chocolat fondant.",level:5,cat:"texture"},
  {fr:"moelleux",en:"soft / moist",phon:"*mwa-LUR*",phonEN:"*soft / moist*",def:"Texture douce et légère",ex:"Un gâteau moelleux.",level:5,cat:"texture"},
  {fr:"onctueux",en:"smooth / velvety",phon:"*on-tew-UR*",phonEN:"*smooth / VEL-vuh-tee*",def:"Texture lisse et riche",ex:"Une crème onctueuse.",level:5,cat:"texture"},
  {fr:"croquant",en:"crunchy",phon:"*kro-KON*",phonEN:"*KRUN-chee*",def:"Qui croque sous la dent",ex:"Une salade croquante.",level:5,cat:"texture"},
  {fr:"gras",en:"fatty / oily",phon:"*GRAH*",phonEN:"*FA-tee / OY-lee*",def:"Qui contient de la graisse",ex:"Un plat trop gras.",level:5,cat:"texture"},

  // === DÉSIRS / ENVIES (10) ===
  {fr:"envie",en:"craving",phon:"*on-VEE*",phonEN:"*KRAY-ving*",def:"Désir soudain",ex:"J'ai envie de chocolat.",level:5,cat:"désir"},
  {fr:"besoin",en:"need",phon:"*buh-ZWAN*",phonEN:"*need*",def:"Nécessité",ex:"J'ai besoin de manger.",level:5,cat:"désir"},
  {fr:"préférence",en:"preference",phon:"*pray-fay-RONSS*",phonEN:"*PREH-fur-unss*",def:"Ce qu'on préfère",ex:"Ma préférence va au sucré.",level:5,cat:"désir"},
  {fr:"appétit",en:"appetite",phon:"*a-pay-TEE*",phonEN:"*A-puh-tite*",def:"Envie de manger",ex:"Bon appétit !",level:5,cat:"désir"},
  {fr:"fringale",en:"ravenous hunger",phon:"*fran-GAL*",phonEN:"*RA-vuh-nus HUN-gur*",def:"Faim intense (familier)",ex:"J'ai la fringale.",level:5,cat:"désir"},
  {fr:"dégustation",en:"tasting",phon:"*day-gew-sta-SYON*",phonEN:"*TAY-sting*",def:"Action de goûter",ex:"Une dégustation de vin.",level:5,cat:"activité"},
  {fr:"recette",en:"recipe",phon:"*ruh-SET*",phonEN:"*RES-i-pee*",def:"Instructions de cuisine",ex:"Une recette de grand-mère.",level:5,cat:"activité"},
  {fr:"ingrédient",en:"ingredient",phon:"*an-gree-DYAN*",phonEN:"*in-GREE-dee-unt*",def:"Composant d'un plat",ex:"Les ingrédients de la recette.",level:5,cat:"aliment"},
  {fr:"épice",en:"spice",phon:"*ay-PEES*",phonEN:"*spyce*",def:"Substance aromatique",ex:"Des épices exotiques.",level:5,cat:"aliment"},
  {fr:"herbe aromatique",en:"aromatic herb",phon:"*AIRB a-ro-ma-TEEK*",phonEN:"*air-oh-MAT-ik urb*",def:"Plante pour parfumer",ex:"Des herbes aromatiques fraîches.",level:5,cat:"aliment"},

  // === BOISSONS (16) ===
  {fr:"eau",en:"water",phon:"*OH*",phonEN:"*WAH-tur*",def:"Liquide transparent",ex:"Un verre d'eau fraîche.",level:5,cat:"boisson"},
  {fr:"vin",en:"wine",phon:"*VAN*",phonEN:"*wyn*",def:"Boisson alcoolisée de raisin",ex:"Un verre de vin rouge.",level:5,cat:"boisson"},
  {fr:"bière",en:"beer",phon:"*BYAIR*",phonEN:"*beer*",def:"Boisson alcoolisée de malt",ex:"Une bière blonde.",level:5,cat:"boisson"},
  {fr:"jus",en:"juice",phon:"*ZHOOS*",phonEN:"*joos*",def:"Liquide de fruit",ex:"Un jus de pomme frais.",level:5,cat:"boisson"},
  {fr:"thé",en:"tea",phon:"*TAY*",phonEN:"*tee*",def:"Infusion de feuilles",ex:"Un thé vert.",level:5,cat:"boisson"},
  {fr:"café",en:"coffee",phon:"*ka-FAY*",phonEN:"*KAW-fee*",def:"Boisson de grain torréfié",ex:"Un café noir serré.",level:5,cat:"boisson"},
  {fr:"lait",en:"milk",phon:"*LEH*",phonEN:"*milk*",def:"Liquide blanc animal",ex:"Du lait frais.",level:5,cat:"boisson"},
  {fr:"sirop",en:"syrup",phon:"*see-ROH*",phonEN:"*SIR-up*",def:"Liquide concentré sucré",ex:"Du sirop de menthe.",level:5,cat:"boisson"},
  {fr:"limonade",en:"lemonade",phon:"*lee-mo-NAD*",phonEN:"*leh-muh-NAYD*",def:"Boisson gazeuse citronnée",ex:"Une limonade bien fraîche.",level:5,cat:"boisson"},
  {fr:"chocolat chaud",en:"hot chocolate",phon:"*sho-ko-LA SHOH*",phonEN:"*hot CHOK-lut*",def:"Boisson chocolatée chaude",ex:"Un chocolat chaud l'hiver.",level:5,cat:"boisson"},
  {fr:"eau minérale",en:"mineral water",phon:"*oh mee-nay-RAL*",phonEN:"*MIN-ur-ul WAH-tur*",def:"Eau naturelle en bouteille",ex:"Une eau minérale gazeuse.",level:5,cat:"boisson"},
  {fr:"jus d'orange",en:"orange juice",phon:"*zhoo do-RONZH*",phonEN:"*O-rinj joos*",def:"Jus de fruit pressé",ex:"Un jus d'orange au petit-déj.",level:5,cat:"boisson"},
  {fr:"vin rouge",en:"red wine",phon:"*van ROOZH*",phonEN:"*red wyn*",def:"Vin de raisin rouge",ex:"Un bon vin rouge.",level:5,cat:"boisson"},
  {fr:"vin blanc",en:"white wine",phon:"*van BLON*",phonEN:"*wyte wyn*",def:"Vin de raisin blanc",ex:"Un vin blanc sec.",level:5,cat:"boisson"},
  {fr:"champagne",en:"champagne",phon:"*shom-PAN-yuh*",phonEN:"*sham-PAYN*",def:"Vin mousseux de luxe",ex:"Une coupe de champagne.",level:5,cat:"boisson"},
  {fr:"cidre",en:"cider",phon:"*SEE-druh*",phonEN:"*SYE-dur*",def:"Boisson de pomme fermentée",ex:"Un cidre brut.",level:5,cat:"boisson"},

  // === CONDIMENTS & ÉPICES (12) ===
  {fr:"condiment",en:"condiment",phon:"*kon-dee-MON*",phonEN:"*KON-di-munt*",def:"Accompagnement de saveur",ex:"Moutarde et condiments.",level:5,cat:"aliment"},
  {fr:"moutarde",en:"mustard",phon:"*moo-TARD*",phonEN:"*MUS-turd*",def:"Condiment jaune piquant",ex:"De la moutarde de Dijon.",level:5,cat:"aliment"},
  {fr:"ketchup",en:"ketchup",phon:"*KEH-chup*",phonEN:"*KEH-chup*",def:"Sauce tomate sucrée",ex:"Du ketchup avec les frites.",level:5,cat:"aliment"},
  {fr:"mayonnaise",en:"mayonnaise",phon:"*ma-yo-NEZ*",phonEN:"*may-oh-NAYZ*",def:"Sauce blanche onctueuse",ex:"De la mayonnaise maison.",level:5,cat:"aliment"},
  {fr:"vinaigrette",en:"vinaigrette",phon:"*vee-nay-GRET*",phonEN:"*vin-uh-GRET*",def:"Sauce pour salade",ex:"Une vinaigrette légère.",level:5,cat:"aliment"},
  {fr:"huile d'olive",en:"olive oil",phon:"*LWEEL do-LEEV*",phonEN:"*OL-iv oyl*",def:"Huile pour cuisine",ex:"De l'huile d'olive vierge.",level:5,cat:"aliment"},
  {fr:"vinaigre",en:"vinegar",phon:"*vee-NAY-gruh*",phonEN:"*VIN-uh-gur*",def:"Liquide acide pour cuisine",ex:"Du vinaigre balsamique.",level:5,cat:"aliment"},
  {fr:"poivre",en:"pepper",phon:"*PWAH-vruh*",phonEN:"*PEH-vur*",def:"Épice noire",ex:"Du poivre noir moulu.",level:5,cat:"aliment"},
  {fr:"sel",en:"salt",phon:"*SEL*",phonEN:"*salt*",def:"Condiment blanc",ex:"Une pincée de sel.",level:5,cat:"aliment"},
  {fr:"sucre",en:"sugar",phon:"*SOO-kruh*",phonEN:"*SHOO-gur*",def:"Édulcorant blanc",ex:"Du sucre en poudre.",level:5,cat:"aliment"},
  {fr:"miel",en:"honey",phon:"*MYEL*",phonEN:"*HUH-nee*",def:"Produit des abeilles",ex:"Du miel de lavande.",level:5,cat:"aliment"},
  {fr:"confiture",en:"jam",phon:"*kon-fee-TEWR*",phonEN:"*jam*",def:"Fruit cuit avec sucre",ex:"De la confiture d'abricot.",level:5,cat:"aliment"},

  // === EXPRESSIONS (8) ===
  {fr:"bon appétit",en:"enjoy your meal",phon:"*bon a-pay-TEE*",phonEN:"*en-JOY yoor MEEL*",def:"Souhait avant de manger",ex:"Bon appétit !",level:5,cat:"expression"},
  {fr:"à votre santé",en:"cheers",phon:"*a vo-truh son-TAY*",phonEN:"*cheerz*",def:"Toast avant de boire",ex:"À votre santé !",level:5,cat:"expression"},
  {fr:"ça a bon goût",en:"it tastes good",phon:"*sa a bon GOO*",phonEN:"*it taysts good*",def:"Appréciation gustative",ex:"Ça a bon goût !",level:5,cat:"expression"},
  {fr:"ça sent bon",en:"it smells good",phon:"*sa son bon*",phonEN:"*it smelz good*",def:"Appréciation olfactive",ex:"Ça sent bon ici.",level:5,cat:"expression"},
  {fr:"j'ai faim",en:"I'm hungry",phon:"*zhay FAN*",phonEN:"*eye m HUN-gree*",def:"Sensation de faim",ex:"J'ai faim, allons manger.",level:5,cat:"expression"},
  {fr:"j'ai soif",en:"I'm thirsty",phon:"*zhay SWAF*",phonEN:"*eye m THUR-stee*",def:"Sensation de soif",ex:"J'ai soif, un verre d'eau ?",level:5,cat:"expression"},
  {fr:"c'est délicieux",en:"it's delicious",phon:"*say day-lee-SYUR*",phonEN:"*its dee-LISH-us*",def:"Appréciation forte",ex:"C'est délicieux, bravo !",level:5,cat:"expression"},
  {fr:"c'est trop bon",en:"it's so good",phon:"*say troh bon*",phonEN:"*its soh good*",def:"Appréciation enthousiaste",ex:"C'est trop bon ce gâteau !",level:5,cat:"expression"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_05 = VOCAB_LEVEL_05;
}
