// ═══════════════════════════════════════════════════════════════════
// vocab-level-15.js — Daily French 🥖
// NIVEAU 15 — Ma Maison 🏠
// Entrées : 50
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_15 = [
  // === PIÈCES (10) ===
  {fr:"maison",en:"house",phon:"*may-ZON*",def:"Bâtiment d'habitation",ex:"J'habite dans une grande maison.",level:15,cat:"logement"},
  {fr:"appartement",en:"apartment / flat",phon:"*a-par-tuh-MON*",def:"Logement dans un immeuble",ex:"Un appartement au troisième étage.",level:15,cat:"logement"},
  {fr:"immeuble",en:"building",phon:"*ee-MUHB-bluh*",def:"Bâtiment de plusieurs étages",ex:"L'immeuble est très moderne.",level:15,cat:"logement"},
  {fr:"étage",en:"floor / storey",phon:"*ay-TAZH*",def:"Niveau d'un bâtiment",ex:"J'habite au deuxième étage.",level:15,cat:"logement"},
  {fr:"rez-de-chaussée",en:"ground floor",phon:"*RAY duh sho-SAY*",def:"Niveau du sol, entrée principale",ex:"Le rez-de-chaussée est accessible.",level:15,cat:"logement"},
  {fr:"escalier",en:"stairs / staircase",phon:"*es-ka-LYAY*",def:"Structure pour monter/descendre",ex:"L'escalier est en bois.",level:15,cat:"logement"},
  {fr:"ascenseur",en:"elevator / lift",phon:"*a-son-SUR*",def:"Appareil pour monter sans effort",ex:"L'ascenseur est en panne.",level:15,cat:"logement"},
  {fr:"couloir",en:"corridor / hallway",phon:"*kool-WAHR*",def:"Passage intérieur",ex:"Le couloir mène aux chambres.",level:15,cat:"logement"},
  {fr:"salon",en:"living room",phon:"*sa-LON*",def:"Pièce principale de réception",ex:"Le salon est très lumineux.",level:15,cat:"pièce"},
  {fr:"salle à manger",en:"dining room",phon:"*SAL a man-ZHAY*",def:"Pièce pour les repas",ex:"La salle à manger donne sur le jardin.",level:15,cat:"pièce"},

  // === PIÈCES SUITE (8) ===
  {fr:"cuisine",en:"kitchen",phon:"*kwee-ZEEN*",def:"Pièce de préparation des repas",ex:"La cuisine est équipée.",level:15,cat:"pièce"},
  {fr:"chambre",en:"bedroom",phon:"*SHOM-bruh*",def:"Pièce pour dormir",ex:"Ma chambre est au fond du couloir.",level:15,cat:"pièce"},
  {fr:"salle de bain",en:"bathroom",phon:"*SAL duh BAN*",def:"Pièce avec baignoire/douche",ex:"La salle de bain est petite.",level:15,cat:"pièce"},
  {fr:"toilettes",en:"toilet / restroom",phon:"*twa-LET*",def:"Pièce avec WC",ex:"Les toilettes sont à gauche.",level:15,cat:"pièce"},
  {fr:"bureau",en:"office / study",phon:"*bew-ROH*",def:"Pièce de travail",ex:"Mon bureau est bien rangé.",level:15,cat:"pièce"},
  {fr:"cave",en:"cellar / basement",phon:"*KAV*",def:"Espace sous le sol",ex:"La cave est très fraîche.",level:15,cat:"logement"},
  {fr:"grenier",en:"attic",phon:"*gruh-NYAY*",def:"Espace sous le toit",ex:"On range les affaires dans le grenier.",level:15,cat:"logement"},
  {fr:"garage",en:"garage",phon:"*ga-RAZH*",def:"Abri pour la voiture",ex:"La voiture est dans le garage.",level:15,cat:"logement"},

  // === EXTÉRIEUR (6) ===
  {fr:"jardin",en:"garden",phon:"*zhar-DAN*",def:"Terrain cultivé autour de la maison",ex:"Le jardin est bien entretenu.",level:15,cat:"extérieur"},
  {fr:"terrasse",en:"terrace / patio",phon:"*tair-AS*",def:"Espace extérieur dallé",ex:"On dîne sur la terrasse.",level:15,cat:"extérieur"},
  {fr:"balcon",en:"balcony",phon:"*bal-KON*",def:"Plateforme extérieure surélevée",ex:"Le balcon donne sur la rue.",level:15,cat:"extérieur"},
  {fr:"entrée",en:"entrance / hallway",phon:"*on-TRAY*",def:"Espace d'accueil",ex:"L'entrée de la maison.",level:15,cat:"extérieur"},
  {fr:"allée",en:"path / driveway",phon:"*a-LAY*",def:"Chemin menant à la maison",ex:"L'allée du jardin.",level:15,cat:"extérieur"},
  {fr:"clôture",en:"fence",phon:"*kloh-TOOR*",def:"Barrière de délimitation",ex:"La clôture du jardin.",level:15,cat:"extérieur"},

  // === ÉLÉMENTS DE CONSTRUCTION (6) ===
  {fr:"fenêtre",en:"window",phon:"*fuh-NET-ruh*",def:"Ouverture vitrée",ex:"La fenêtre est ouverte.",level:15,cat:"élément"},
  {fr:"porte",en:"door",phon:"*PORT*",def:"Ouverture pour entrer/sortir",ex:"Fermez la porte, s'il vous plaît.",level:15,cat:"élément"},
  {fr:"mur",en:"wall",phon:"*MOOR*",def:"Paroi verticale",ex:"Le mur est blanc.",level:15,cat:"élément"},
  {fr:"plafond",en:"ceiling",phon:"*pla-FON*",def:"Surface supérieure",ex:"Le plafond est haut.",level:15,cat:"élément"},
  {fr:"sol",en:"floor / ground",phon:"*SOL*",def:"Surface inférieure",ex:"Le sol est en parquet.",level:15,cat:"élément"},
  {fr:"toit",en:"roof",phon:"*TWAH*",def:"Couverture supérieure",ex:"Le toit en tuiles.",level:15,cat:"élément"},

  // === OBJETS / MOBILIER (8) ===
  {fr:"clé",en:"key",phon:"*KLAY*",def:"Objet pour ouvrir une serrure",ex:"J'ai perdu mes clés.",level:15,cat:"objet"},
  {fr:"serrure",en:"lock",phon:"*sair-UR*",def:"Mécanisme de fermeture",ex:"La serrure est cassée.",level:15,cat:"objet"},
  {fr:"rideau",en:"curtain",phon:"*ree-DOH*",def:"Tissu devant la fenêtre",ex:"Tirez les rideaux.",level:15,cat:"objet"},
  {fr:"tapis",en:"carpet / rug",phon:"*ta-PEE*",def:"Couverture de sol",ex:"Le tapis est neuf.",level:15,cat:"objet"},
  {fr:"meuble",en:"furniture",phon:"*MUHB-bluh*",def:"Objet pour ranger/s'asseoir",ex:"Le meuble est en chêne.",level:15,cat:"objet"},
  {fr:"armoire",en:"wardrobe / closet",phon:"*ar-MWAHR*",def:"Meuble de rangement",ex:"L'armoire est pleine.",level:15,cat:"objet"},
  {fr:"étagère",en:"shelf / bookcase",phon:"*ay-ta-ZHAIR*",def:"Meuble à plateaux",ex:"Les livres sont sur l'étagère.",level:15,cat:"objet"},
  {fr:"table",en:"table",phon:"*TA-bluh*",def:"Surface pour manger/travailler",ex:"La table de la cuisine.",level:15,cat:"objet"},

  // === ÉLECTROMÉNAGER (6) ===
  {fr:"réfrigérateur",en:"refrigerator",phon:"*ray-free-zhay-ra-TUR*",def:"Appareil de conservation froide",ex:"Le réfrigérateur est plein.",level:15,cat:"objet"},
  {fr:"congélateur",en:"freezer",phon:"*kon-zhay-la-TUR*",def:"Appareil de congélation",ex:"Le congélateur.",level:15,cat:"objet"},
  {fr:"four",en:"oven",phon:"*FOOR*",def:"Appareil de cuisson",ex:"Le four électrique.",level:15,cat:"objet"},
  {fr:"micro-ondes",en:"microwave",phon:"*mee-kroh OND*",def:"Appareil de chauffe rapide",ex:"Le micro-ondes.",level:15,cat:"objet"},
  {fr:"lave-linge",en:"washing machine",phon:"*lav-LANZH*",def:"Machine à laver",ex:"Le lave-linge est en marche.",level:15,cat:"objet"},
  {fr:"aspirateur",en:"vacuum cleaner",phon:"*a-spee-ra-TUR*",def:"Appareil de nettoyage",ex:"Passer l'aspirateur.",level:15,cat:"objet"},

  // === ACTIVITÉS MÉNAGÈRES (6) ===
  {fr:"tâche ménagère",en:"household chore",phon:"*TASH may-na-ZHAIR*",def:"Travail domestique",ex:"Les tâches ménagères du samedi.",level:15,cat:"activité"},
  {fr:"faire le ménage",en:"to do the housework",phon:"*FAIR luh may-NAZH*",def:"Nettoyer la maison",ex:"Je fais le ménage.",level:15,cat:"activité"},
  {fr:"faire la vaisselle",en:"to do the dishes",phon:"*FAIR la vay-SEL*",def:"Laver la vaisselle",ex:"Je fais la vaisselle.",level:15,cat:"activité"},
  {fr:"faire la lessive",en:"to do the laundry",phon:"*FAIR la lay-SEEV*",def:"Laver le linge",ex:"Je fais la lessive.",level:15,cat:"activité"},
  {fr:"faire le lit",en:"to make the bed",phon:"*FAIR luh LEE*",def:"Arranger le lit",ex:"Je fais mon lit.",level:15,cat:"activité"},
  {fr:"passer l'aspirateur",en:"to vacuum",phon:"*pa-SAY la-spee-ra-TUR*",def:"Nettoyer avec l'aspirateur",ex:"Je passe l'aspirateur.",level:15,cat:"activité"},

  // === EXPRESSIONS (2) ===
  {fr:"chez moi",en:"at my place",phon:"*SHAY MWA*",def:"Dans ma maison",ex:"Viens chez moi.",level:15,cat:"expression"},
  {fr:"être à la maison",en:"to be at home",phon:"*ET-truh a la may-ZON*",def:"Être chez soi",ex:"Je suis à la maison.",level:15,cat:"expression"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_15 = VOCAB_LEVEL_15;
}
