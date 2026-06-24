// ═══════════════════════════════════════════════════════════════════
// vocab-level-08.js — Daily French 🥖
// NIVEAU 8 — Le temps & la météo 🌤️
// Entrées : 80
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_08 = [
  // === TEMPS PRÉSENT (12) ===
  {fr:"aujourd'hui",en:"today",phon:"*oh-zhoord-DWEE*",def:"Le jour présent.",ex:"Aujourd'hui, il fait beau.",level:8,cat:"temps"},
  {fr:"demain",en:"tomorrow",phon:"*duh-MAN*",def:"Le jour suivant.",ex:"À demain, Madame.",level:8,cat:"temps"},
  {fr:"hier",en:"yesterday",phon:"*YAIR*",def:"Le jour précédent.",ex:"Hier, il a plu.",level:8,cat:"temps"},
  {fr:"maintenant",en:"now",phon:"*man-tuh-NAN*",def:"À ce moment.",ex:"Il pleut maintenant.",level:8,cat:"temps"},
  {fr:"tout de suite",en:"right away",phon:"*too duh SWEET*",def:"Immédiatement.",ex:"Viens tout de suite !",level:8,cat:"temps"},
  {fr:"bientôt",en:"soon",phon:"*byan-TOH*",def:"Dans peu de temps.",ex:"Il va bientôt pleuvoir.",level:8,cat:"temps"},
  {fr:"plus tard",en:"later",phon:"*plew TAR*",def:"Après, dans le futur.",ex:"On verra plus tard.",level:8,cat:"temps"},
  {fr:"tôt",en:"early",phon:"*TOH*",def:"De bonne heure.",ex:"Je me lève tôt.",level:8,cat:"temps"},
  {fr:"tard",en:"late",phon:"*TAR*",def:"Après l'heure.",ex:"Il arrive tard.",level:8,cat:"temps"},
  {fr:"en ce moment",en:"at the moment",phon:"*on suh mo-MAN*",def:"Actuellement.",ex:"En ce moment, il fait froid.",level:8,cat:"temps"},
  {fr:"ce matin",en:"this morning",phon:"*suh ma-TAN*",def:"La matinée d'aujourd'hui.",ex:"Ce matin, il faisait frais.",level:8,cat:"temps"},
  {fr:"cet après-midi",en:"this afternoon",phon:"*set a-pray mee-DEE*",def:"L'après-midi d'aujourd'hui.",ex:"Cet après-midi, il fait chaud.",level:8,cat:"temps"},

  // === MÉTÉO (18) ===
  {fr:"il fait beau",en:"it's nice weather",phon:"*eel FAY bo*",def:"Temps agréable.",ex:"Il fait beau, allons nous promener.",level:8,cat:"météo"},
  {fr:"il pleut",en:"it's raining",phon:"*eel PLUH*",def:"Chute de pluie.",ex:"Il pleut, prenez un parapluie.",level:8,cat:"météo"},
  {fr:"il neige",en:"it's snowing",phon:"*eel NEHZH*",def:"Chute de neige.",ex:"Il neige dans le nord.",level:8,cat:"météo"},
  {fr:"il fait du vent",en:"it's windy",phon:"*eel FAY dew VON*",def:"Présence de vent.",ex:"Il fait du vent, fermez la porte.",level:8,cat:"météo"},
  {fr:"il fait chaud",en:"it's hot",phon:"*eel FAY sho*",def:"Température élevée.",ex:"Il fait chaud, buvez de l'eau.",level:8,cat:"météo"},
  {fr:"il fait froid",en:"it's cold",phon:"*eel FAY FRWAH*",def:"Température basse.",ex:"Il fait froid, allumez le chauffage.",level:8,cat:"météo"},
  {fr:"il fait frais",en:"it's cool",phon:"*eel FAY FRAY*",def:"Température fraîche.",ex:"Il fait frais, prenez un pull.",level:8,cat:"météo"},
  {fr:"il fait du soleil",en:"it's sunny",phon:"*eel FAY dew so-LAY*",def:"Présence de soleil.",ex:"Il fait du soleil aujourd'hui.",level:8,cat:"météo"},
  {fr:"il fait gris",en:"it's grey / overcast",phon:"*eel FAY GREE*",def:"Ciel couvert.",ex:"Il fait gris, ça va pleuvoir.",level:8,cat:"météo"},
  {fr:"il y a des nuages",en:"it's cloudy",phon:"*eel yah day NWAHZH*",def:"Présence de nuages.",ex:"Il y a des nuages ce matin.",level:8,cat:"météo"},
  {fr:"il y a du brouillard",en:"it's foggy",phon:"*eel yah dew broo-YAR*",def:"Présence de brouillard.",ex:"Il y a du brouillard sur la route.",level:8,cat:"météo"},
  {fr:"il y a de l'orage",en:"there's a storm",phon:"*eel yah duh lo-RAZH*",def:"Tempête avec tonnerre.",ex:"Il y a de l'orage ce soir.",level:8,cat:"météo"},
  {fr:"il gèle",en:"it's freezing",phon:"*eel ZHEL*",def:"Température sous zéro.",ex:"Il gèle, attention au verglas.",level:8,cat:"météo"},
  {fr:"la température",en:"temperature",phon:"*lah tom-pay-ra-TOOR*",def:"Degré de chaleur.",ex:"La température extérieure.",level:8,cat:"météo"},
  {fr:"le thermomètre",en:"thermometer",phon:"*luh tair-mo-MET-truh*",def:"Instrument de mesure.",ex:"Le thermomètre affiche 30°.",level:8,cat:"objet"},
  {fr:"la pluie",en:"rain",phon:"*lah PLOO-ee*",def:"Eau qui tombe du ciel.",ex:"La pluie s'arrête.",level:8,cat:"météo"},
  {fr:"la neige",en:"snow",phon:"*lah NEHZH*",def:"Précipitation blanche.",ex:"La neige recouvre tout.",level:8,cat:"météo"},
  {fr:"le vent",en:"wind",phon:"*luh VON*",def:"Air en mouvement.",ex:"Le vent souffle fort.",level:8,cat:"météo"},

  // === PHÉNOMÈNES CÉLESTES (8) ===
  {fr:"le ciel",en:"the sky",phon:"*luh SYEL*",def:"Voûte céleste.",ex:"Le ciel est bleu.",level:8,cat:"météo"},
  {fr:"le soleil",en:"the sun",phon:"*luh so-LAY*",def:"Astre lumineux.",ex:"Le soleil brille.",level:8,cat:"météo"},
  {fr:"la lune",en:"the moon",phon:"*lah LOON*",def:"Satellite naturel.",ex:"La lune est pleine.",level:8,cat:"météo"},
  {fr:"les étoiles",en:"the stars",phon:"*lay zay-TWAL*",def:"Points lumineux du ciel.",ex:"Observer les étoiles.",level:8,cat:"météo"},
  {fr:"un nuage",en:"a cloud",phon:"*uh NWAHZH*",def:"Masse blanche dans le ciel.",ex:"Un nuage gris.",level:8,cat:"météo"},
  {fr:"l'arc-en-ciel",en:"the rainbow",phon:"*lar-kon-SYEL*",def:"Arc coloré après la pluie.",ex:"Un bel arc-en-ciel.",level:8,cat:"météo"},
  {fr:"l'éclair",en:"lightning",phon:"*lay-KLAIR*",def:"Lumière de l'orage.",ex:"Un éclair dans le ciel.",level:8,cat:"météo"},
  {fr:"le tonnerre",en:"thunder",phon:"*luh to-NAIR*",def:"Bruit de l'orage.",ex:"Le tonnerre gronde.",level:8,cat:"météo"},

  // === SAISONS (8) ===
  {fr:"le printemps",en:"spring",phon:"*luh PRAN-ton*",def:"Saison du renouveau, mars à mai.",ex:"Au printemps, les fleurs éclosent.",level:8,cat:"saison"},
  {fr:"l'été",en:"summer",phon:"*lay-TAY*",def:"Saison chaude, juin à août.",ex:"En été, le jardin est beau.",level:8,cat:"saison"},
  {fr:"l'automne",en:"autumn",phon:"*lo-TON*",def:"Saison des feuilles mortes.",ex:"En automne, les feuilles tombent.",level:8,cat:"saison"},
  {fr:"l'hiver",en:"winter",phon:"*lee-VAIR*",def:"Saison froide, décembre à février.",ex:"En hiver, le jardin dort.",level:8,cat:"saison"},
  {fr:"au printemps",en:"in spring",phon:"*oh PRAN-ton*",def:"Pendant le printemps.",ex:"Au printemps, les fleurs éclosent.",level:8,cat:"saison"},
  {fr:"en été",en:"in summer",phon:"*on ay-TAY*",def:"Pendant l'été.",ex:"En été, il fait chaud.",level:8,cat:"saison"},
  {fr:"en automne",en:"in autumn",phon:"*on no-TON*",def:"Pendant l'automne.",ex:"En automne, les feuilles tombent.",level:8,cat:"saison"},
  {fr:"en hiver",en:"in winter",phon:"*on ee-VAIR*",def:"Pendant l'hiver.",ex:"En hiver, il fait froid.",level:8,cat:"saison"},

  // === VÊTEMENTS MÉTÉO (12) ===
  {fr:"un parapluie",en:"an umbrella",phon:"*uh pa-ra-PLOO-ee*",def:"Protection contre la pluie.",ex:"Prenez un parapluie.",level:8,cat:"objet"},
  {fr:"un imperméable",en:"a raincoat",phon:"*uh on-pair-may-AH-bluh*",def:"Manteau de pluie.",ex:"Mets ton imperméable.",level:8,cat:"objet"},
  {fr:"un manteau",en:"a coat",phon:"*uh man-TOH*",def:"Vêtement chaud d'hiver.",ex:"Mon manteau d'hiver.",level:8,cat:"objet"},
  {fr:"un pull",en:"a sweater",phon:"*uh POOL*",def:"Vêtement en laine.",ex:"Un pull en laine.",level:8,cat:"objet"},
  {fr:"un bonnet",en:"a beanie / hat",phon:"*uh bo-NAY*",def:"Couvre-chef chaud.",ex:"Mets ton bonnet.",level:8,cat:"objet"},
  {fr:"une écharpe",en:"a scarf",phon:"*oon ay-SHARP*",def:"Accessoire chaud pour le cou.",ex:"Une écharpe en laine.",level:8,cat:"objet"},
  {fr:"des gants",en:"gloves",phon:"*day GAN*",def:"Protection pour les mains.",ex:"Des gants en cuir.",level:8,cat:"objet"},
  {fr:"des bottes",en:"boots",phon:"*day BOT*",def:"Chaussures hautes.",ex:"Des bottes de pluie.",level:8,cat:"objet"},
  {fr:"des lunettes de soleil",en:"sunglasses",phon:"*day lew-NET duh so-LAY*",def:"Protection solaire pour les yeux.",ex:"Mes lunettes de soleil.",level:8,cat:"objet"},
  {fr:"la crème solaire",en:"sunscreen",phon:"*lah KREM so-LAIR*",def:"Protection UV pour la peau.",ex:"Mets de la crème solaire.",level:8,cat:"objet"},
  {fr:"un t-shirt",en:"a t-shirt",phon:"*uh TEE-shurt*",def:"Vêtement léger d'été.",ex:"Un t-shirt blanc.",level:8,cat:"objet"},
  {fr:"un short",en:"shorts",phon:"*uh SHORT*",def:"Vêtement court d'été.",ex:"Un short en jean.",level:8,cat:"objet"},

  // === EXPRESSIONS (10) ===
  {fr:"Quel temps fait-il ?",en:"What's the weather like?",phon:"*kel ton FAY-teel*",def:"Demander la météo.",ex:"Quel temps fait-il aujourd'hui ?",level:8,cat:"expression"},
  {fr:"Il fait un temps de chien",en:"The weather is awful",phon:"*eel FAY uh ton duh shee-AN*",def:"Expression pour mauvais temps.",ex:"Il fait un temps de chien.",level:8,cat:"expression"},
  {fr:"Il fait un froid de canard",en:"It's freezing cold",phon:"*eel FAY uh FRWAH duh ka-NAR*",def:"Expression pour très froid.",ex:"Il fait un froid de canard.",level:8,cat:"expression"},
  {fr:"La pluie et le beau temps",en:"Rain or shine",phon:"*lah PLOO-ee ay luh bo ton*",def:"Quoi qu'il arrive.",ex:"Il travaille la pluie et le beau temps.",level:8,cat:"expression"},
  {fr:"Avoir un coup de soleil",en:"To get sunburned",phon:"*a-VWAHR uh koo duh so-LAY*",def:"Brûlure par le soleil.",ex:"J'ai un coup de soleil.",level:8,cat:"expression"},
  {fr:"Se mettre au chaud",en:"To get warm",phon:"*suh meh-truh oh SHOH*",def:"Se réchauffer.",ex:"Rentre te mettre au chaud.",level:8,cat:"expression"},
  {fr:"Geler à pierre fendre",en:"To be freezing cold",phon:"*zhuh-LAY ah PYAIR fon-druh*",def:"Expression pour un froid intense.",ex:"Il gèle à pierre fendre.",level:8,cat:"expression"},
  {fr:"Il fait doux",en:"It's mild",phon:"*eel FAY DOO*",def:"Température agréable.",ex:"Il fait doux pour la saison.",level:8,cat:"expression"},
  {fr:"Il fait lourd",en:"It's humid / sultry",phon:"*eel FAY LOOR*",def:"Temps lourd avant orage.",ex:"Il fait lourd, ça va orager.",level:8,cat:"expression"},
  {fr:"Le beau temps est revenu",en:"The nice weather is back",phon:"*luh bo ton ay ruh-vuh-NEW*",def:"Le soleil revient.",ex:"Le beau temps est revenu !",level:8,cat:"expression"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_08 = VOCAB_LEVEL_08;
}
