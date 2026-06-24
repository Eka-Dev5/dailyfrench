// ═══════════════════════════════════════════════════════════════════
// vocab-level-3.js — Daily French 🥖
// NIVEAU 3 — Au Jardin 🌿
// Entrées : 80
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_03 = [
  // === FLEURS & PLANTES (20) ===
  {fr:"fleur",en:"flower",phon:"*FLUR*",def:"Plante à pétales colorés",ex:"Une belle fleur rouge.",level:3,cat:"nature"},
  {fr:"rose",en:"rose",phon:"*ROHZ*",def:"Fleur épineuse parfumée",ex:"Une rose rouge.",level:3,cat:"nature"},
  {fr:"tulipe",en:"tulip",phon:"*too-LEEP*",def:"Fleur bulbeuse printanière",ex:"Des tulipes jaunes.",level:3,cat:"nature"},
  {fr:"marguerite",en:"daisy",phon:"*mar-guh-REET*",def:"Fleur blanche simple",ex:"Une marguerite des champs.",level:3,cat:"nature"},
  {fr:"tournesol",en:"sunflower",phon:"*toor-nuh-SOL*",def:"Grande fleur jaune",ex:"Un champ de tournesols.",level:3,cat:"nature"},
  {fr:"lavande",en:"lavender",phon:"*la-VONND*",def:"Plante violette parfumée",ex:"De la lavande de Provence.",level:3,cat:"nature"},
  {fr:"herbe",en:"grass",phon:"*AIRB*",def:"Végétation basse verte",ex:"L'herbe est bien verte.",level:3,cat:"nature"},
  {fr:"mousse",en:"moss",phon:"*MOOSS*",def:"Petite plante verte dense",ex:"De la mousse sur les pierres.",level:3,cat:"nature"},
  {fr:"feuille",en:"leaf",phon:"*FUH-yuh*",def:"Organe vert des plantes",ex:"Une feuille morte.",level:3,cat:"nature"},
  {fr:"branche",en:"branch",phon:"*BRONSH*",def:"Partie d'arbre",ex:"Une branche cassée.",level:3,cat:"nature"},
  {fr:"tronc",en:"trunk",phon:"*TROHNK*",def:"Corps principal d'arbre",ex:"Le tronc est épais.",level:3,cat:"nature"},
  {fr:"racine",en:"root",phon:"*ra-SEEN*",def:"Partie souterraine",ex:"Les racines de l'arbre.",level:3,cat:"nature"},
  {fr:"graine",en:"seed",phon:"*GREN*",def:"Élément de reproduction",ex:"Planter des graines.",level:3,cat:"nature"},
  {fr:"terreau",en:"potting soil",phon:"*tair-ROH*",def:"Terre enrichie",ex:"Du terreau pour les pots.",level:3,cat:"nature"},
  {fr:"pivoine",en:"peony",phon:"*pee-VWAN*",def:"Grande fleur rose/rouge",ex:"Une pivoine éclatante.",level:3,cat:"nature"},
  {fr:"jasmin",en:"jasmine",phon:"*ZHAS-man*",def:"Plante grimpante parfumée",ex:"Le jasmin du jardin.",level:3,cat:"nature"},
  {fr:"hortensia",en:"hydrangea",phon:"*or-ton-SEE-a*",def:"Arbuste à grosses fleurs",ex:"Un hortensia bleu.",level:3,cat:"nature"},
  {fr:"lilas",en:"lilac",phon:"*lee-LAH*",def:"Arbuste à fleurs violettes",ex:"Le lilas est en fleur.",level:3,cat:"nature"},
  {fr:"lys",en:"lily",phon:"*LEES*",def:"Fleur élégante blanche",ex:"Un lys blanc.",level:3,cat:"nature"},
  {fr:"geranium",en:"geranium",phon:"*zhay-ra-NYOM*",def:"Plante fleurie en pot",ex:"Un géranium rouge.",level:3,cat:"nature"},

  // === ARBRES (10) ===
  {fr:"arbre",en:"tree",phon:"*AR-bruh*",def:"Plante ligneuse grande",ex:"Un grand arbre centenaire.",level:3,cat:"nature"},
  {fr:"chêne",en:"oak",phon:"*SHEN*",def:"Arbre à glands",ex:"Un vieux chêne.",level:3,cat:"nature"},
  {fr:"érable",en:"maple",phon:"*ay-RA-bluh*",def:"Arbre à feuilles palmées",ex:"L'érable du jardin.",level:3,cat:"nature"},
  {fr:"bouleau",en:"birch",phon:"*boo-LOH*",def:"Arbre à écorce blanche",ex:"Un bouleau élancé.",level:3,cat:"nature"},
  {fr:"pin",en:"pine",phon:"*PAN*",def:"Conifère à aiguilles",ex:"Un pin dans le jardin.",level:3,cat:"nature"},
  {fr:"haie",en:"hedge",phon:"*EH*",def:"Rangée de buissons",ex:"Tailler la haie.",level:3,cat:"nature"},
  {fr:"cyprès",en:"cypress",phon:"*see-PRESS*",def:"Conifère élancé",ex:"Un cyprès italien.",level:3,cat:"nature"},
  {fr:"platane",en:"plane tree",phon:"*pla-TAN*",def:"Arbre à grande ombre",ex:"Les platanes de la route.",level:3,cat:"nature"},
  {fr:"pommier",en:"apple tree",phon:"*pom-YAY*",def:"Arbre fruitier",ex:"Le pommier du verger.",level:3,cat:"nature"},
  {fr:"cerisier",en:"cherry tree",phon:"*suh-ree-ZYAY*",def:"Arbre à fleurs roses",ex:"Le cerisier en fleur.",level:3,cat:"nature"},

  // === OUTILS DE JARDIN (14) ===
  {fr:"bêche",en:"spade",phon:"*BESH*",def:"Outil pour creuser",ex:"Une bêche neuve.",level:3,cat:"outil"},
  {fr:"rateau",en:"rake",phon:"*ra-TOH*",def:"Outil pour ramasser",ex:"Un rateau en bois.",level:3,cat:"outil"},
  {fr:"sécateur",en:"pruning shears",phon:"*say-ka-TUR*",def:"Outil de coupe",ex:"Couper avec le sécateur.",level:3,cat:"outil"},
  {fr:"arrosoir",en:"watering can",phon:"*a-roz-WAHR*",def:"Récipient pour arroser",ex:"Remplir l'arrosoir.",level:3,cat:"outil"},
  {fr:"tuyau",en:"hose",phon:"*twee-YOH*",def:"Tube pour l'eau",ex:"Le tuyau d'arrosage.",level:3,cat:"outil"},
  {fr:"pot",en:"pot",phon:"*POH*",def:"Récipient pour plante",ex:"Un pot de fleurs.",level:3,cat:"outil"},
  {fr:"jardinière",en:"planter box",phon:"*zhar-dee-NAIR*",def:"Bac pour plantes",ex:"Des jardinières au balcon.",level:3,cat:"outil"},
  {fr:"serre",en:"greenhouse",phon:"*SAIR*",def:"Abri de verre pour plantes",ex:"Une serre chaude.",level:3,cat:"lieu"},
  {fr:"abri de jardin",en:"garden shed",phon:"*a-BREE duh zhar-DAN*",def:"Petit bâtiment de jardin",ex:"Les outils dans l'abri.",level:3,cat:"lieu"},
  {fr:"compost",en:"compost",phon:"*kom-POST*",def:"Déchets organiques décomposés",ex:"Le compost du jardin.",level:3,cat:"nature"},
  {fr:"pelle",en:"shovel",phon:"*PEL*",def:"Outil pour déplacer terre",ex:"Une pelle robuste.",level:3,cat:"outil"},
  {fr:"fourche",en:"fork",phon:"*FOORSH*",def:"Outil à dents pour jardiner",ex:"Une fourche de jardin.",level:3,cat:"outil"},
  {fr:"brouette",en:"wheelbarrow",phon:"*broo-LET*",def:"Chariot à une roue",ex:"Pousser la brouette.",level:3,cat:"outil"},
  {fr:"tondeuse",en:"lawn mower",phon:"*ton-DURZ*",def:"Machine pour tondre",ex:"La tondeuse à gazon.",level:3,cat:"outil"},

  // === VERBES DE JARDIN (14) ===
  {fr:"planter",en:"to plant",phon:"*plan-TAY*",def:"Mettre en terre",ex:"Planter des tomates.",level:3,cat:"verbe"},
  {fr:"repiquer",en:"to transplant",phon:"*ruh-pee-KAY*",def:"Déplacer une plante",ex:"Repiquer les salades.",level:3,cat:"verbe"},
  {fr:"tailler",en:"to prune",phon:"*tah-YAY*",def:"Couper pour former",ex:"Tailler la haie.",level:3,cat:"verbe"},
  {fr:"fertiliser",en:"to fertilize",phon:"*fair-tee-lee-ZAY*",def:"Apporter des nutriments",ex:"Fertiliser les rosiers.",level:3,cat:"verbe"},
  {fr:"désherber",en:"to weed",phon:"*day-zair-BAY*",def:"Enlever les mauvaises herbes",ex:"Désherber le potager.",level:3,cat:"verbe"},
  {fr:"récolter",en:"to harvest",phon:"*ray-kol-TAY*",def:"Cueillir les fruits/légumes",ex:"Récolter les fraises.",level:3,cat:"verbe"},
  {fr:"bouturer",en:"to take cuttings",phon:"*boo-tew-RAY*",def:"Multiplier une plante",ex:"Bouturer le laurier.",level:3,cat:"verbe"},
  {fr:"arroser",en:"to water",phon:"*a-ro-ZAY*",def:"Donner de l'eau",ex:"Arroser les fleurs.",level:3,cat:"verbe"},
  {fr:"semer",en:"to sow",phon:"*suh-MAY*",def:"Planter des graines",ex:"Semer des carottes.",level:3,cat:"verbe"},
  {fr:"cueillir",en:"to pick",phon:"*kwee-YEER*",def:"Prendre avec les mains",ex:"Cueillir des fleurs.",level:3,cat:"verbe"},
  {fr:"tondre",en:"to mow",phon:"*TOND*",def:"Couper l'herbe",ex:"Tondre la pelouse.",level:3,cat:"verbe"},
  {fr:"bêcher",en:"to dig",phon:"*BESH-ay*",def:"Creuser la terre",ex:"Bêcher le sol.",level:3,cat:"verbe"},
  {fr:"biner",en:"to hoe",phon:"*bee-NAY*",def:"Retourner la terre",ex:"Biner le potager.",level:3,cat:"verbe"},
  {fr:"cultiver",en:"to cultivate",phon:"*kul-tee-VAY*",def:"Entretenir les plantes",ex:"Cultiver son jardin.",level:3,cat:"verbe"},

  // === ANIMAUX DU JARDIN (10) ===
  {fr:"oiseau",en:"bird",phon:"*wa-ZOH*",def:"Animal ailé",ex:"Un oiseau sur la branche.",level:3,cat:"animal"},
  {fr:"papillon",en:"butterfly",phon:"*pa-pee-YON*",def:"Insecte aux ailes colorées",ex:"Un papillon jaune.",level:3,cat:"animal"},
  {fr:"abeille",en:"bee",phon:"*a-BAY*",def:"Insecte pollinisateur",ex:"Une abeille sur la fleur.",level:3,cat:"animal"},
  {fr:"escargot",en:"snail",phon:"*es-kar-GOH*",def:"Animal à coquille",ex:"Un escargot après la pluie.",level:3,cat:"animal"},
  {fr:"ver de terre",en:"earthworm",phon:"*VAIR duh TAIR*",def:"Ver vivant dans le sol",ex:"Les vers de terre enrichissent.",level:3,cat:"animal"},
  {fr:"coccinelle",en:"ladybug",phon:"*kok-see-NEL*",def:"Petit insecte rouge à points",ex:"Une coccinelle porte-bonheur.",level:3,cat:"animal"},
  {fr:"limace",en:"slug",phon:"*lee-MASS*",def:"Escargot sans coquille",ex:"Une limace dans le jardin.",level:3,cat:"animal"},
  {fr:"guêpe",en:"wasp",phon:"*GEHP*",def:"Insecte piqueur",ex:"Attention aux guêpes !",level:3,cat:"animal"},
  {fr:"frelon",en:"hornet",phon:"*fruh-LON*",def:"Grosse guêpe",ex:"Un frelon près de la ruche.",level:3,cat:"animal"},
  {fr:"puceron",en:"greenfly",phon:"*pew-sur-ON*",def:"Petit insecte des plantes",ex:"Des pucerons sur la rose.",level:3,cat:"animal"},

  // === EXPRESSIONS & LIEUX (12) ===
  {fr:"au jardin",en:"in the garden",phon:"*oh zhar-DAN*",def:"Dans le jardin",ex:"Je suis au jardin.",level:3,cat:"expression"},
  {fr:"en pleine terre",en:"in the ground",phon:"*on plen TAIR*",def:"Planté directement",ex:"Planter en pleine terre.",level:3,cat:"expression"},
  {fr:"en pot",en:"in a pot",phon:"*on POH*",def:"Dans un récipient",ex:"Cultiver en pot.",level:3,cat:"expression"},
  {fr:"jardinage",en:"gardening",phon:"*zhar-dee-NAZH*",def:"Activité de jardin",ex:"Le jardinage le dimanche.",level:3,cat:"expression"},
  {fr:"potager",en:"vegetable garden",phon:"*po-ta-ZHAY*",def:"Jardin de légumes",ex:"Le potager familial.",level:3,cat:"lieu"},
  {fr:"pelouse",en:"lawn",phon:"*pe-LOOZ*",def:"Terrain gazonné",ex:"Tondre la pelouse.",level:3,cat:"nature"},
  {fr:"terre",en:"soil / earth",phon:"*TAIR*",def:"Sol du jardin",ex:"La terre est fertile.",level:3,cat:"nature"},
  {fr:"jardin",en:"garden",phon:"*zhar-DAN*",def:"Espace avec plantes",ex:"Un beau jardin fleuri.",level:3,cat:"lieu"},
  {fr:"fontaine",en:"fountain",phon:"*fon-TEN*",def:"Jet d'eau décoratif",ex:"Une fontaine de jardin.",level:3,cat:"lieu"},
  {fr:"bassin",en:"pond",phon:"*ba-SAN*",def:"Petit plan d'eau",ex:"Un bassin avec poissons.",level:3,cat:"lieu"},
  {fr:"pergola",en:"pergola",phon:"*pair-GO-la*",def:"Structure pour plantes grimpantes",ex:"Une pergola de roses.",level:3,cat:"lieu"},
  {fr:"banc de jardin",en:"garden bench",phon:"*bonk duh zhar-DAN*",def:"Siège extérieur",ex:"S'asseoir sur le banc.",level:3,cat:"objet"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_03 = VOCAB_LEVEL_03;
}
