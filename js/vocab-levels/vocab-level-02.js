// ═══════════════════════════════════════════════════════════════════
// vocab-level-2.js — Daily French 🥖
// NIVEAU 2 — Au Marché 🛒
// Entrées : 80
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_02 = [
  // === FRUITS (20) ===
  {fr:"pomme",en:"apple",phon:"*POM*",def:"Fruit rond rouge/vert",ex:"Une pomme croquante.",level:2,cat:"aliment"},
  {fr:"poire",en:"pear",phon:"*PWAHR*",def:"Fruit en forme de goutte",ex:"Une poire bien mûre.",level:2,cat:"aliment"},
  {fr:"orange",en:"orange",phon:"*o-RONZH*",def:"Fruit rond orange",ex:"Un jus d'orange frais.",level:2,cat:"aliment"},
  {fr:"banane",en:"banana",phon:"*ba-NAN*",def:"Fruit jaune allongé",ex:"Une banane pour le goûter.",level:2,cat:"aliment"},
  {fr:"raisin",en:"grapes",phon:"*ray-ZAN*",def:"Petits fruits en grappe",ex:"Du raisin noir.",level:2,cat:"aliment"},
  {fr:"fraise",en:"strawberry",phon:"*FREZ*",def:"Petit fruit rouge",ex:"Des fraises de saison.",level:2,cat:"aliment"},
  {fr:"framboise",en:"raspberry",phon:"*from-BWAZ*",def:"Petit fruit rouge velouté",ex:"Des framboises sucrées.",level:2,cat:"aliment"},
  {fr:"cerise",en:"cherry",phon:"*suh-REEZ*",def:"Petit fruit rouge/noir",ex:"Des cerises du jardin.",level:2,cat:"aliment"},
  {fr:"pêche",en:"peach",phon:"*PESH*",def:"Fruit velouté orange",ex:"Une pêche juteuse.",level:2,cat:"aliment"},
  {fr:"abricot",en:"apricot",phon:"*a-bree-KOH*",def:"Petit fruit orange",ex:"Des abricots mûrs.",level:2,cat:"aliment"},
  {fr:"melon",en:"melon",phon:"*muh-LON*",def:"Gros fruit d'été",ex:"Un melon bien sucré.",level:2,cat:"aliment"},
  {fr:"pastèque",en:"watermelon",phon:"*pas-TEK*",def:"Gros fruit vert/rouge",ex:"De la pastèque fraîche.",level:2,cat:"aliment"},
  {fr:"citron",en:"lemon",phon:"*see-TROHN*",def:"Fruit jaune acide",ex:"Un jus de citron.",level:2,cat:"aliment"},
  {fr:"pamplemousse",en:"grapefruit",phon:"*pom-pluh-MOOSS*",def:"Gros fruit jaune/rose",ex:"Un pamplemousse au petit-déjeuner.",level:2,cat:"aliment"},
  {fr:"prune",en:"plum",phon:"*PROON*",def:"Fruit violet sucré",ex:"Des prunes mûres.",level:2,cat:"aliment"},
  {fr:"myrtille",en:"blueberry",phon:"*meer-TEEL*",def:"Petit fruit bleu",ex:"Des myrtilles des bois.",level:2,cat:"aliment"},
  {fr:"mûre",en:"blackberry",phon:"*MOOR*",def:"Fruit noir des ronces",ex:"Des mûres sauvages.",level:2,cat:"aliment"},
  {fr:"figue",en:"fig",phon:"*FEEG*",def:"Fruit violet sucré",ex:"Une figue fraîche.",level:2,cat:"aliment"},
  {fr:"ananas",en:"pineapple",phon:"*a-na-NAH*",def:"Fruit tropical épineux",ex:"Un ananas coupé.",level:2,cat:"aliment"},
  {fr:"kiwi",en:"kiwi",phon:"*KEE-wee*",def:"Petit fruit vert velu",ex:"Un kiwi bien mûr.",level:2,cat:"aliment"},

  // === LÉGUMES (20) ===
  {fr:"tomate",en:"tomato",phon:"*to-MAT*",def:"Fruit rouge utilisé comme légume",ex:"Des tomates bien mûres.",level:2,cat:"aliment"},
  {fr:"carotte",en:"carrot",phon:"*ka-ROT*",def:"Légume orange allongé",ex:"Des carottes râpées.",level:2,cat:"aliment"},
  {fr:"pomme de terre",en:"potato",phon:"*pom duh TAIR*",def:"Tubercule blanc",ex:"Des pommes de terre au four.",level:2,cat:"aliment"},
  {fr:"oignon",en:"onion",phon:"*o-nyon*",def:"Légume bulbeux",ex:"Un oignon pour la sauce.",level:2,cat:"aliment"},
  {fr:"ail",en:"garlic",phon:"*AH-yee*",def:"Petit bulbe aromatique",ex:"De l'ail dans la soupe.",level:2,cat:"aliment"},
  {fr:"poivron",en:"pepper (vegetable)",phon:"*pwa-VROHN*",def:"Légume coloré",ex:"Des poivrons rouges.",level:2,cat:"aliment"},
  {fr:"courgette",en:"zucchini",phon:"*koor-ZHET*",def:"Légume vert allongé",ex:"Des courgettes grillées.",level:2,cat:"aliment"},
  {fr:"aubergine",en:"eggplant",phon:"*o-bair-ZHEEN*",def:"Légume violet",ex:"Une aubergine farcie.",level:2,cat:"aliment"},
  {fr:"salade",en:"lettuce / salad",phon:"*sa-LAD*",def:"Légume feuille vert",ex:"Une salade verte.",level:2,cat:"aliment"},
  {fr:"concombre",en:"cucumber",phon:"*kon-KOM-bruh*",def:"Légume vert allongé",ex:"Du concombre en salade.",level:2,cat:"aliment"},
  {fr:"champignon",en:"mushroom",phon:"*shom-pee-NYON*",def:"Fungi comestible",ex:"Des champignons de Paris.",level:2,cat:"aliment"},
  {fr:"haricot",en:"bean",phon:"*a-ree-KOH*",def:"Graine comestible",ex:"Des haricots verts.",level:2,cat:"aliment"},
  {fr:"brocoli",en:"broccoli",phon:"*bro-ko-LEE*",def:"Légume vert en bouquets",ex:"Du brocoli à la vapeur.",level:2,cat:"aliment"},
  {fr:"chou-fleur",en:"cauliflower",phon:"*shoo FLUR*",def:"Légume blanc en bouquets",ex:"Du chou-fleur rôti.",level:2,cat:"aliment"},
  {fr:"épinard",en:"spinach",phon:"*ay-pee-NAR*",def:"Feuilles vertes comestibles",ex:"Des épinards frais.",level:2,cat:"aliment"},
  {fr:"radis",en:"radish",phon:"*ra-DEE*",def:"Petit légume rouge rond",ex:"Des radis croquants.",level:2,cat:"aliment"},
  {fr:"petit pois",en:"peas",phon:"*puh-tee PWAH*",def:"Graines vertes rondes",ex:"Des petits pois surgelés.",level:2,cat:"aliment"},
  {fr:"maïs",en:"corn",phon:"*MAH-ees*",def:"Céréale jaune en épis",ex:"Du maïs doux.",level:2,cat:"aliment"},
  {fr:"patate douce",en:"sweet potato",phon:"*pa-TAT dooss*",def:"Tubercule orange sucré",ex:"Des patates douces rôties.",level:2,cat:"aliment"},
  {fr:"artichaut",en:"artichoke",phon:"*ar-tee-SHOH*",def:"Légume à feuilles comestibles",ex:"Un artichaut à la vinaigrette.",level:2,cat:"aliment"},

  // === COMMERCE / MARCHÉ (20) ===
  {fr:"marché",en:"market",phon:"*mar-SHAY*",def:"Lieu de vente en plein air",ex:"Le marché du samedi matin.",level:2,cat:"commerce"},
  {fr:"marchand",en:"seller (male)",phon:"*mar-SHAN*",def:"Personne qui vend",ex:"Le marchand de légumes.",level:2,cat:"commerce"},
  {fr:"marchande",en:"seller (female)",phon:"*mar-SHAND*",def:"Personne qui vend",ex:"La marchande de fleurs.",level:2,cat:"commerce"},
  {fr:"étal",en:"stall",phon:"*ay-TAL*",def:"Comptoir de marché",ex:"Un étal bien garni.",level:2,cat:"commerce"},
  {fr:"client",en:"customer (male)",phon:"*klee-ON*",def:"Personne qui achète",ex:"Un client satisfait.",level:2,cat:"commerce"},
  {fr:"cliente",en:"customer (female)",phon:"*klee-ONT*",def:"Personne qui achète",ex:"Une cliente régulière.",level:2,cat:"commerce"},
  {fr:"prix",en:"price",phon:"*PREE*",def:"Coût en argent",ex:"Le prix du kilo.",level:2,cat:"commerce"},
  {fr:"solde",en:"sale",phon:"*SOLD*",def:"Réduction de prix",ex:"Les soldes d'été.",level:2,cat:"commerce"},
  {fr:"promotion",en:"promotion",phon:"*pro-mo-SYON*",def:"Offre spéciale",ex:"Une promotion sur les fruits.",level:2,cat:"commerce"},
  {fr:"réduction",en:"discount",phon:"*ray-dewk-SYON*",def:"Diminution de prix",ex:"Une réduction de 20%.",level:2,cat:"commerce"},
  {fr:"échantillon",en:"sample",phon:"*ay-shon-TEE-yon*",def:"Petite portion à goûter",ex:"Un échantillon gratuit.",level:2,cat:"commerce"},
  {fr:"kilo",en:"kilo / kilogram",phon:"*kee-LOH*",def:"Unité de poids",ex:"Un kilo de pommes.",level:2,cat:"quantité"},
  {fr:"gramme",en:"gram",phon:"*GRAM*",def:"Petite unité de poids",ex:"500 grammes de cerises.",level:2,cat:"quantité"},
  {fr:"livre",en:"pound",phon:"*LEEV-ruh*",def:"Unité de poids ancienne",ex:"Une livre de beurre.",level:2,cat:"quantité"},
  {fr:"vendeur",en:"vendor (male)",phon:"*von-DUR*",def:"Personne qui vend en magasin",ex:"Le vendeur est sympa.",level:2,cat:"commerce"},
  {fr:"vendeuse",en:"vendor (female)",phon:"*von-DURZ*",def:"Personne qui vend en magasin",ex:"La vendeuse m'aide.",level:2,cat:"commerce"},
  {fr:"produit",en:"product",phon:"*pro-DWEE*",def:"Article en vente",ex:"Des produits frais.",level:2,cat:"commerce"},
  {fr:"article",en:"item",phon:"*ar-TEE-kl*",def:"Objet en vente",ex:"Cet article est en solde.",level:2,cat:"commerce"},
  {fr:"frais",en:"fresh",phon:"*FREH*",def:"Non conservé, récent",ex:"Des produits frais du jour.",level:2,cat:"qualité"},
  {fr:"mûr",en:"ripe (male)",phon:"*MOOR*",def:"À point pour manger",ex:"Un fruit bien mûr.",level:2,cat:"qualité"},

  // === VERBES (8) ===
  {fr:"goûter",en:"to taste",phon:"*goo-TAY*",def:"Essayer la saveur",ex:"Puis-je goûter ?",level:2,cat:"verbe"},
  {fr:"choisir",en:"to choose",phon:"*shwa-ZEER*",def:"Sélectionner",ex:"Je choisis mes fruits.",level:2,cat:"verbe"},
  {fr:"peser",en:"to weigh",phon:"*puh-ZAY*",def:"Mesurer le poids",ex:"Pesez ces pommes s'il vous plaît.",level:2,cat:"verbe"},
  {fr:"payer",en:"to pay",phon:"*pa-YAY*",def:"Donner de l'argent",ex:"Je paie en espèces.",level:2,cat:"verbe"},
  {fr:"acheter",en:"to buy",phon:"*a-shuh-TAY*",def:"Obtenir en payant",ex:"J'achète des légumes.",level:2,cat:"verbe"},
  {fr:"vendre",en:"to sell",phon:"*VON-druh*",def:"Céder contre argent",ex:"Il vend des pommes.",level:2,cat:"verbe"},
  {fr:"demander",en:"to ask",phon:"*duh-mon-DAY*",def:"Poser une question",ex:"Demander le prix.",level:2,cat:"verbe"},
  {fr:"regarder",en:"to look",phon:"*ruh-gar-DAY*",def:"Observer",ex:"Je regarde les étals.",level:2,cat:"verbe"},

  // === OBJETS (6) ===
  {fr:"sac",en:"bag",phon:"*SAK*",def:"Contenant pour courses",ex:"Un sac en papier.",level:2,cat:"objet"},
  {fr:"panier",en:"basket",phon:"*pa-NYAY*",def:"Panier de courses",ex:"Mon panier est plein.",level:2,cat:"objet"},
  {fr:"caddie",en:"shopping cart",phon:"*ka-DEE*",def:"Chariot de supermarché",ex:"Prenez un caddie.",level:2,cat:"objet"},
  {fr:"balance",en:"scale",phon:"*ba-LONSS*",def:"Instrument de pesée",ex:"La balance du marchand.",level:2,cat:"objet"},
  {fr:"porte-monnaie",en:"wallet",phon:"*port mo-NAY*",def:"Petit sac pour monnaie",ex:"Mon porte-monnaie est vide.",level:2,cat:"objet"},
  {fr:"ticket",en:"ticket / receipt",phon:"*tee-KAY*",def:"Preuve d'achat",ex:"Le ticket de caisse.",level:2,cat:"objet"},

  // === EXPRESSIONS & POLITESSE (6) ===
  {fr:"c'est combien",en:"how much is it",phon:"*say kom-BYAN*",def:"Demande de prix",ex:"C'est combien le kilo ?",level:2,cat:"expression"},
  {fr:"c'est tout",en:"that's all",phon:"*say TOO*",def:"Fin de commande",ex:"C'est tout, merci.",level:2,cat:"expression"},
  {fr:"s'il vous plaît",en:"please",phon:"*seel voo PLAY*",def:"Formule de politesse",ex:"Un kilo, s'il vous plaît.",level:2,cat:"politesse"},
  {fr:"je voudrais",en:"I would like",phon:"*zhuh voo-DRAY*",def:"Demande polie",ex:"Je voudrais des pommes.",level:2,cat:"expression"},
  {fr:"bonjour",en:"hello",phon:"*bon-ZHOOR*",def:"Salutation",ex:"Bonjour madame !",level:2,cat:"politesse"},
  {fr:"merci",en:"thank you",phon:"*mair-SEE*",def:"Remerciement",ex:"Merci beaucoup.",level:2,cat:"politesse"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_02 = VOCAB_LEVEL_02;
}
