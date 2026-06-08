// ═══════════════════════════════════════════════════════════════════
// vocab-level-3.js — Daily French 🥖
// NIVEAU 3 — Au jardin & La nature 🌿
// Entrées : 12
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_3 = [
   // === AJOUTS NIVEAU 3 (38 entrées supplémentaires) ===
  
  // Nature / Jardin
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
  {fr:"compost",en:"compost",phon:"*kom-POST*",def:"Déchets organiques décomposés",ex:"Le compost du jardin.",level:3,cat:"nature"},
  
  // Outils de jardin
  {fr:"bêche",en:"spade",phon:"*BESH*",def:"Outil pour creuser",ex:"Une bêche neuve.",level:3,cat:"outil"},
  {fr:"rateau",en:"rake",phon:"*ra-TOH*",def:"Outil pour ramasser",ex:"Un rateau en bois.",level:3,cat:"outil"},
  {fr:"sécateur",en:"pruning shears",phon:"*say-ka-TUR*",def:"Outil de coupe",ex:"Couper avec le sécateur.",level:3,cat:"outil"},
  {fr:"arrosoir",en:"watering can",phon:"*a-roz-WAHR*",def:"Récipient pour arroser",ex:"Remplir l'arrosoir.",level:3,cat:"outil"},
  {fr:"tuyau",en:"hose",phon:"*twee-YOH*",def:"Tube pour l'eau",ex:"Le tuyau d'arrosage.",level:3,cat:"outil"},
  {fr:"pot",en:"pot",phon:"*POH*",def:"Récipient pour plante",ex:"Un pot de fleurs.",level:3,cat:"outil"},
  {fr:"jardinière",en:"planter box",phon:"*zhar-dee-NAIR*",def:"Bac pour plantes",ex:"Des jardinières au balcon.",level:3,cat:"outil"},
  {fr:"serre",en:"greenhouse",phon:"*SAIR*",def:"Abri de verre pour plantes",ex:"Une serre chaude.",level:3,cat:"lieu"},
  {fr:"abri de jardin",en:"garden shed",phon:"*a-BREE duh zhar-DAN*",def:"Petit bâtiment de jardin",ex:"Les outils dans l'abri.",level:3,cat:"lieu"},
  
  // Verbes de jardin
  {fr:"planter",en:"to plant",phon:"*plan-TAY*",def:"Mettre en terre",ex:"Planter des tomates.",level:3,cat:"verbe"},
  {fr:"repiquer",en:"to transplant",phon:"*ruh-pee-KAY*",def:"Déplacer une plante",ex:"Repiquer les salades.",level:3,cat:"verbe"},
  {fr:"tailler",en:"to prune",phon:"*tah-YAY*",def:"Couper pour former",ex:"Tailler la haie.",level:3,cat:"verbe"},
  {fr:"fertiliser",en:"to fertilize",phon:"*fair-tee-lee-ZAY*",def:"Apporter des nutriments",ex:"Fertiliser les rosiers.",level:3,cat:"verbe"},
  {fr:"désherber",en:"to weed",phon:"*day-zair-BAY*",def:"Enlever les mauvaises herbes",ex:"Désherber le potager.",level:3,cat:"verbe"},
  {fr:"récolter",en:"to harvest",phon:"*ray-kol-TAY*",def:"Cueillir les fruits/légumes",ex:"Récolter les fraises.",level:3,cat:"verbe"},
  {fr:"bouturer",en:"to take cuttings",phon:"*boo-tew-RAY*",def:"Multiplier une plante",ex:"Bouturer le laurier.",level:3,cat:"verbe"},
  
  // Animaux du jardin
  {fr:"oiseau",en:"bird",phon:"*wa-ZOH*",def:"Animal ailé",ex:"Un oiseau sur la branche.",level:3,cat:"animal"},
  {fr:"papillon",en:"butterfly",phon:"*pa-pee-YON*",def:"Insecte aux ailes colorées",ex:"Un papillon jaune.",level:3,cat:"animal"},
  {fr:"abeille",en:"bee",phon:"*a-BAY*",def:"Insecte pollinisateur",ex:"Une abeille sur la fleur.",level:3,cat:"animal"},
  {fr:"escargot",en:"snail",phon:"*es-kar-GOH*",def:"Animal à coquille",ex:"Un escargot après la pluie.",level:3,cat:"animal"},
  {fr:"ver de terre",en:"earthworm",phon:"*VAIR duh TAIR*",def:"Ver vivant dans le sol",ex:"Les vers de terre enrichissent.",level:3,cat:"animal"},
  {fr:"coccinelle",en:"ladybug",phon:"*kok-see-NEL*",def:"Petit insecte rouge à points",ex:"Une coccinelle porte-bonheur.",level:3,cat:"animal"}

];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_3 = VOCAB_LEVEL_3;
}
