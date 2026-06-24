// ═══════════════════════════════════════════════════════════════════
// vocab-level-06.js — Daily French 🥖
// NIVEAU 6 — Chez le commerçant 🛍️
// Entrées : 80
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_06 = [
  // === MAGASINS (14) ===
  {fr:"la pâtisserie",en:"pastry shop",phon:"*pa-tee-suh-REE*",def:"Commerce de gâteaux et pâtisseries.",ex:"Une tarte à la pâtisserie.",level:6,cat:"commerce"},
  {fr:"la boucherie",en:"butcher shop",phon:"*boo-shuh-REE*",def:"Commerce de viande.",ex:"De la viande à la boucherie.",level:6,cat:"commerce"},
  {fr:"la charcuterie",en:"delicatessen",phon:"*shar-koo-tuh-REE*",def:"Commerce de salaison et charcuterie.",ex:"Du saucisson à la charcuterie.",level:6,cat:"commerce"},
  {fr:"la pharmacie",en:"pharmacy",phon:"*far-ma-SEE*",def:"Commerce de médicaments.",ex:"À côté de la pharmacie.",level:6,cat:"commerce"},
  {fr:"le tabac-presse",en:"newsagent / tobacconist",phon:"*ta-BAK PRESS*",def:"Commerce typique : cigarettes, timbres, journaux.",ex:"Acheter des timbres au tabac-presse.",level:6,cat:"commerce"},
  {fr:"le supermarché",en:"supermarket",phon:"*soo-pair-mar-SHAY*",def:"Grand magasin alimentaire.",ex:"Faire les courses au supermarché.",level:6,cat:"commerce"},
  {fr:"le marché",en:"market",phon:"*mar-SHAY*",def:"Lieu de vente en plein air.",ex:"Le marché du samedi matin.",level:6,cat:"commerce"},
  {fr:"la boulangerie",en:"bakery",phon:"*boo-lan-zhuh-REE*",def:"Commerce de pain et viennoiseries.",ex:"La baguette à la boulangerie.",level:6,cat:"commerce"},
  {fr:"l'épicerie",en:"grocery store",phon:"*lay-pee-suh-REE*",def:"Petit magasin alimentaire.",ex:"L'épicerie du coin.",level:6,cat:"commerce"},
  {fr:"le primeur",en:"greengrocer",phon:"*pree-MUR*",def:"Commerce de fruits et légumes frais.",ex:"Les fraises chez le primeur.",level:6,cat:"commerce"},
  {fr:"la poissonnerie",en:"fish shop",phon:"*pwa-son-uh-REE*",def:"Commerce de poisson frais.",ex:"Du saumon à la poissonnerie.",level:6,cat:"commerce"},
  {fr:"la fromagerie",en:"cheese shop",phon:"*fro-ma-zhuh-REE*",def:"Commerce de fromages.",ex:"Un camembert à la fromagerie.",level:6,cat:"commerce"},
  {fr:"la crèmerie",en:"dairy shop",phon:"*kray-muh-REE*",def:"Commerce de produits laitiers.",ex:"Du beurre à la crèmerie.",level:6,cat:"commerce"},
  {fr:"la confiserie",en:"candy shop",phon:"*kon-fee-zuh-REE*",def:"Commerce de bonbons et sucreries.",ex:"Des bonbons à la confiserie.",level:6,cat:"commerce"},

  // === PRODUITS (18) ===
  {fr:"un timbre",en:"a stamp",phon:"*uh TAN-bruh*",def:"Vignette pour affranchir le courrier.",ex:"Un timbre pour l'étranger.",level:6,cat:"objet"},
  {fr:"lait cru",en:"raw milk",phon:"*lay KROO*",def:"Lait non pasteurisé.",ex:"Du fromage au lait cru.",level:6,cat:"aliment"},
  {fr:"sans gluten",en:"gluten-free",phon:"*SON gloo-TEN*",def:"Ne contenant pas de gluten.",ex:"Du pain sans gluten.",level:6,cat:"aliment"},
  {fr:"bio",en:"organic",phon:"*BEE-oh*",def:"Produit sans pesticides.",ex:"Des légumes bio.",level:6,cat:"aliment"},
  {fr:"le fromage",en:"cheese",phon:"*fro-MAZH*",def:"Produit laitier fermenté.",ex:"Du fromage de chèvre.",level:6,cat:"aliment"},
  {fr:"le pain",en:"bread",phon:"*PAN*",def:"Aliment de base à base de farine.",ex:"Une baguette de pain.",level:6,cat:"aliment"},
  {fr:"la viande",en:"meat",phon:"*VYAND*",def:"Chair animale pour l'alimentation.",ex:"De la viande de bœuf.",level:6,cat:"aliment"},
  {fr:"le poisson",en:"fish",phon:"*pwa-SON*",def:"Animal aquatique comestible.",ex:"Du poisson frais.",level:6,cat:"aliment"},
  {fr:"les fruits",en:"fruits",phon:"*FRWEE*",def:"Produits végétaux sucrés.",ex:"Des fruits de saison.",level:6,cat:"aliment"},
  {fr:"les légumes",en:"vegetables",phon:"*lay-GOOM*",def:"Plantes comestibles.",ex:"Des légumes verts.",level:6,cat:"aliment"},
  {fr:"les œufs",en:"eggs",phon:"*URZ*",def:"Produit de la poule.",ex:"Une douzaine d'œufs.",level:6,cat:"aliment"},
  {fr:"le sucre",en:"sugar",phon:"*SOO-kruh*",def:"Édulcorant.",ex:"Du sucre en poudre.",level:6,cat:"aliment"},
  {fr:"le sel",en:"salt",phon:"*SEL*",def:"Condiment.",ex:"Une pincée de sel.",level:6,cat:"aliment"},
  {fr:"le poivre",en:"pepper",phon:"*PWAH-vruh*",def:"Épice.",ex:"Du poivre noir.",level:6,cat:"aliment"},
  {fr:"l'huile",en:"oil",phon:"*LWEEL*",def:"Graisse liquide.",ex:"De l'huile d'olive.",level:6,cat:"aliment"},
  {fr:"la farine",en:"flour",phon:"*fa-REEN*",def:"Poudre de céréale.",ex:"De la farine de blé.",level:6,cat:"aliment"},
  {fr:"le beurre",en:"butter",phon:"*BUR*",def:"Matière grasse laitière.",ex:"Du beurre demi-sel.",level:6,cat:"aliment"},
  {fr:"le yaourt",en:"yogurt",phon:"*ya-OORT*",def:"Produit laitier fermenté.",ex:"Un yaourt nature.",level:6,cat:"aliment"},

  // === VERBES COMMERCE (12) ===
  {fr:"acheter",en:"to buy",phon:"*a-shuh-TAY*",def:"Obtenir en payant.",ex:"J'achète du pain.",level:6,cat:"verbe"},
  {fr:"vendre",en:"to sell",phon:"*VON-druh*",def:"Céder contre de l'argent.",ex:"Il vend des légumes.",level:6,cat:"verbe"},
  {fr:"payer",en:"to pay",phon:"*pay-YAY*",def:"Donner de l'argent.",ex:"Je paie en espèces.",level:6,cat:"verbe"},
  {fr:"commander",en:"to order",phon:"*ko-mon-DAY*",def:"Demander un produit.",ex:"Je commande une pizza.",level:6,cat:"verbe"},
  {fr:"choisir",en:"to choose",phon:"*shwa-ZEER*",def:"Sélectionner.",ex:"Choisir un fruit.",level:6,cat:"verbe"},
  {fr:"goûter",en:"to taste",phon:"*goo-TAY*",def:"Essayer la saveur.",ex:"Goûter le fromage.",level:6,cat:"verbe"},
  {fr:"peser",en:"to weigh",phon:"*puh-ZAY*",def:"Mesurer le poids.",ex:"Peser les fruits.",level:6,cat:"verbe"},
  {fr:"couper",en:"to cut",phon:"*koo-PAY*",def:"Séparer avec un outil tranchant.",ex:"Couper le pain.",level:6,cat:"verbe"},
  {fr:"emballer",en:"to wrap / package",phon:"*om-ba-LAY*",def:"Mettre dans un emballage.",ex:"Emballer les courses.",level:6,cat:"verbe"},
  {fr:"rendre la monnaie",en:"to give change",phon:"*RON-druh lah mon-NAY*",def:"Rendre l'excédent payé.",ex:"Il rend la monnaie.",level:6,cat:"expression"},
  {fr:"reprendre",en:"to take back",phon:"*ruh-PRON-druh*",def:"Récupérer un article.",ex:"Reprendre un produit défectueux.",level:6,cat:"verbe"},
  {fr:"échanger",en:"to exchange",phon:"*ay-shon-ZHAY*",def:"Remplacer par un autre.",ex:"Échanger une taille.",level:6,cat:"verbe"},

  // === EXPRESSIONS COMMERCE (14) ===
  {fr:"combien ça coûte ?",en:"how much does it cost?",phon:"*kom-BYAN sa KOOT*",def:"Demander le prix.",ex:"Combien ça coûte ce fromage ?",level:6,cat:"expression"},
  {fr:"c'est trop cher",en:"it's too expensive",phon:"*say troh SHAIR*",def:"Prix excessif.",ex:"C'est trop cher pour moi.",level:6,cat:"expression"},
  {fr:"c'est bon marché",en:"it's cheap",phon:"*say bon mar-SHAY*",def:"Prix bas.",ex:"C'est bon marché ici.",level:6,cat:"expression"},
  {fr:"je voudrais...",en:"I would like...",phon:"*zhuh voo-DRAY*",def:"Formule polie de demande.",ex:"Je voudrais un kilo de pommes.",level:6,cat:"expression"},
  {fr:"je prends",en:"I'll take",phon:"*zhuh PRON*",def:"Décider d'acheter.",ex:"Je prends celui-ci.",level:6,cat:"expression"},
  {fr:"avez-vous... ?",en:"do you have...?",phon:"*a-vay VOO*",def:"Demander la disponibilité.",ex:"Avez-vous du lait ?",level:6,cat:"expression"},
  {fr:"c'est tout ?",en:"is that all?",phon:"*say TOO*",def:"Demander si la commande est complète.",ex:"C'est tout, merci.",level:6,cat:"expression"},
  {fr:"un sachet",en:"a bag",phon:"*uh sa-SHAY*",def:"Petit sac en plastique ou papier.",ex:"Un sachet, s'il vous plaît.",level:6,cat:"objet"},
  {fr:"un panier",en:"a basket",phon:"*uh pan-YAY*",def:"Récipient pour les courses.",ex:"Prenez un panier.",level:6,cat:"objet"},
  {fr:"un caddie",en:"a shopping cart",phon:"*uh ka-DEE*",def:"Chariot de supermarché.",ex:"Poussez le caddie.",level:6,cat:"objet"},
  {fr:"en promotion",en:"on sale",phon:"*on pro-mo-SYON*",def:"En réduction.",ex:"Ce produit est en promotion.",level:6,cat:"expression"},
  {fr:"c'est gratuit",en:"it's free",phon:"*say gra-TEE*",def:"Sans frais.",ex:"C'est gratuit aujourd'hui.",level:6,cat:"expression"},
  {fr:"je regarde",en:"I'm just looking",phon:"*zhuh ruh-GARD*",def:"Ne pas acheter pour l'instant.",ex:"Non merci, je regarde.",level:6,cat:"expression"},
  {fr:"je cherche",en:"I'm looking for",phon:"*zhuh SHAIRSH*",def:"Rechercher un article.",ex:"Je cherche du lait.",level:6,cat:"expression"},

  // === MONNAIE (8) ===
  {fr:"un euro",en:"one euro",phon:"*uh UR-oh*",def:"Monnaie européenne.",ex:"Ça coûte un euro.",level:6,cat:"objet"},
  {fr:"un centime",en:"one cent",phon:"*uh son-TEEM*",def:"Sous-unité de l'euro.",ex:"99 centimes.",level:6,cat:"objet"},
  {fr:"en espèces",en:"in cash",phon:"*on ay-PESS*",def:"Paiement avec des billets/pièces.",ex:"Je paie en espèces.",level:6,cat:"expression"},
  {fr:"par carte",en:"by card",phon:"*par KART*",def:"Paiement électronique.",ex:"Je paie par carte.",level:6,cat:"expression"},
  {fr:"le ticket de caisse",en:"receipt",phon:"*luh tee-KAY duh KESS*",def:"Preuve d'achat.",ex:"Le ticket de caisse, s'il vous plaît.",level:6,cat:"objet"},
  {fr:"un billet",en:"a banknote",phon:"*uh bee-YAY*",def:"Billet de banque.",ex:"Un billet de 20 euros.",level:6,cat:"objet"},
  {fr:"une pièce",en:"a coin",phon:"*oon pyESS*",def:"Pièce de monnaie.",ex:"Une pièce de 2 euros.",level:6,cat:"objet"},
  {fr:"le porte-monnaie",en:"wallet",phon:"*luh port mo-NAY*",def:"Petit sac pour argent.",ex:"Mon porte-monnaie est vide.",level:6,cat:"objet"},

  // === PERSONNEL / SERVICE (6) ===
  {fr:"le caissier",en:"cashier (male)",phon:"*keh-SYAY*",def:"Personne à la caisse.",ex:"Le caissier scanne les articles.",level:6,cat:"commerce"},
  {fr:"la caissière",en:"cashier (female)",phon:"*keh-SYAIR*",def:"Personne à la caisse.",ex:"La caissière rend la monnaie.",level:6,cat:"commerce"},
  {fr:"le boulanger",en:"baker (male)",phon:"*boo-lan-ZHAY*",def:"Fait le pain.",ex:"Le boulanger fait des baguettes.",level:6,cat:"commerce"},
  {fr:"la boulangère",en:"baker (female)",phon:"*boo-lan-ZHAIR*",def:"Fait le pain.",ex:"La boulangère vend des croissants.",level:6,cat:"commerce"},
  {fr:"le boucher",en:"butcher (male)",phon:"*boo-SHAY*",def:"Vend la viande.",ex:"Le boucher coupe le steak.",level:6,cat:"commerce"},
  {fr:"la bouchère",en:"butcher (female)",phon:"*boo-SHAIR*",def:"Vend la viande.",ex:"La bouchère prépare le rôti.",level:6,cat:"commerce"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_06 = VOCAB_LEVEL_06;
}
