// ═══════════════════════════════════════════════════════════════════
// vocab-level-2.js — Daily French 🥖
// NIVEAU 2 — Au marché & Les courses 🛒
// Entrées : 10
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_2 = [
  {fr:"je voudrais",en:"I would like",phon:"*zhuh voo-DRAY*",def:"Formule polie pour exprimer un souhait.",ex:"Je voudrais un kilo de tomates.",ex_en:"I would like a kilo of tomatoes.",level:2,cat:"expression"},
  {fr:"ça fait combien",en:"how much is it",phon:"*sa FAY kom-BYAN*",def:"Demander le prix total.",def_en:"Asking for the total price.",ex:"Ça fait combien en tout ?",ex_en:"How much is it all together?",lit:"that makes how-much",level:2,cat:"expression"},
  {fr:"c'est tout",en:"that's all",phon:"*say TOO*",def:"Indiquer qu'on a fini ses achats.",ex:"C'est tout, merci Madame.",ex_en:"That's all, thank you, Mrs.",level:2,cat:"expression"},
  {fr:"c'est trop cher",en:"it's too expensive",phon:"*say troh SHAIR*",def:"Trouver un prix excessif.",ex:"C'est trop cher pour moi.",ex_en:"That's too expensive for me.",lit:"it's too expensive",level:2,cat:"expression"},
  {fr:"une tranche",en:"a slice",phon:"*oon TRONSH*",def:"Partie coupée fine.",ex:"Une tranche de jambon.",ex_en:"A slice of ham.",level:2,cat:"quantité"},
  {fr:"une livre",en:"500 grams",phon:"*oon LEEVR*",def:"Ancienne mesure valant 500g en France.",ex:"Une livre de cerises.",ex_en:"A pound of cherries.",level:2,cat:"quantité"},
  {fr:"une douzaine",en:"a dozen",phon:"*oon doo-ZEN*",def:"Douze unités.",ex:"Une douzaine d'oeufs.",ex_en:"A dozen eggs.",level:2,cat:"quantité"},
  {fr:"la boulangerie",en:"bakery",phon:"*boo-lan-zhuh-REE*",def:"Commerce où l'on vend du pain et viennoiseries.",ex:"La boulangerie du coin.",ex_en:"The bakery on the corner.",level:2,cat:"commerce"},
  {fr:"fromage",en:"cheese",phon:"*fro-MAHZH*",def:"Produit laitier fermenté.",ex:"Du fromage de chèvre.",ex_en:"Some goat cheese.",level:2,cat:"aliment"},
  {fr:"baguette",en:"baguette",phon:"*ba-GET*",def:"Pain long et croustillant, emblème français.",ex:"Une baguette tradition.",ex_en:"A traditional baguette.",level:2,cat:"aliment"}
  // === AJOUTS NIVEAU 2 (40 entrées supplémentaires) ===
  
  // Aliments du marché
  {fr:"pomme",en:"apple",phon:"*POM*",def:"Fruit rond rouge/vert",ex:"Une pomme croquante.",level:2,cat:"aliment"},
  {fr:"poire",en:"pear",phon:"*PWAHR*",def:"Fruit en forme de goutte",ex:"Une poire bien mûre.",level:2,cat:"aliment"},
  {fr:"orange",en:"orange",phon:"*o-RONZH*",def:"Fruit rond orange",ex:"Un jus d'orange frais.",level:2,cat:"aliment"},
  {fr:"banane",en:"banana",phon:"*ba-NAN*",def:"Fruit jaune allongé",ex:"Une banane pour le goûter.",level:2,cat:"aliment"},
  {fr:"raisin",en:"grapes",phon:"*ray-ZAN*",def:"Petits fruits en grappe",ex:"Du raisin noir.",level:2,cattéléphone",en:"phone",phon:"*tay-lay-FON*",def:"Appareil de communication",ex:"Mon numéro de téléphone.",level:1,cat:"présentation"},
  {fr:"email",en:"email",phon:"*EE-mayl*",def:"Courrier électronique",ex:"Mon adresse email.",level:1,cat:"présentation"},
  {fr:"métier",en:"job / occupation",phon:"*may-TYAY*",def:"Profession",ex:"Quel est votre métier ?",level:1,cat:"présentation"},
  {fr:"étudiant",en:"student (male)",phon:"*ay-tew-DYAN*",def:"Personne qui étudie",ex:"Je suis étudiant.",level:1,cat:"présentation"},
  {fr:"étudiante",en:"student (female)",phon:"*ay-tew-DYANT*",def:"Personne qui étudie",ex:"Je suis étudiante.",level:1,cat:"présentation"},
  {fr:"retraité",en:"retired (male)",phon:"*ruh-treh-TAY*",def:"Personne à la retraite",ex:"Mon père est retraité.",level:1,cat:"présentation"},
  {fr:"retraitée",en:"retired (female)",phon:"*ruh-treh-TAY*",def:"Personne à la retraite",ex:"Ma mère est retraitée.",level:1,cat:"présentation"},
  
  // Politesse (compléments)
  {fr:"s'il vous plaît",en:"please",phon:"*seel voo PLEH*",def:"Formule de politesse",ex:"Un café, s'il vous plaît.",level:1,cat:"politesse"},
  {fr:"merci beaucoup",en:"thank you very much",phon:"*mair-SEE bo-KOO*",def:"Remerciement renforcé",ex:"Merci beaucoup pour votre aide.",level:1,cat:"politesse"},
  {fr:"de rien",en:"you're welcome",phon:"*duh RYAN*",def:"Réponse à merci",ex:"De rien, c'est normal.",level:1,cat:"politesse"},
  {fr:"je vous en prie",en:"you're welcome (formal)",phon:"*zhuh voo zan PREE*",def:"Réponse polie à merci",ex:"Je vous en prie, madame.",level:1,cat:"politesse"},
  {fr:"pardon",en:"sorry / excuse me",phon:"*par-DON*",def:"Excuse",ex:"Pardon, je ne vous avais pas vu.",level:1,cat:"politesse"},
  {fr:"excusez-moi",en:"excuse me",phon:"*ek-skew-zay-MWA*",def:"Demande d'excuse",ex:"Excusez-moi, l'heure s'il vous plaît ?",level:1,cat:"politesse"},
  {fr:"avec plaisir",en:"with pleasure",phon:"*a-vek pleh-ZEER*",def:"Acceptation enthousiaste",ex:"Avec plaisir, je vous aiderai.",level:1,cat:"politesse"},
  {fr:"pas de problème",en:"no problem",phon:"*pa duh pro-BLEM*",def:"Réponse rassurante",ex:"Pas de problème, je m'en occupe.",level:1,cat:"politesse"},
  
  // Social de base
  {fr:"ami",en:"friend (male)",phon:"*a-MEE*",def:"Personne proche",ex:"C'est mon meilleur ami.",level:1,cat:"social"},
  {fr:"amie",en:"friend (female)",phon:"*a-MEE*",def:"Personne proche",ex:"C'est mon amie d'enfance.",level:1,cat:"social"},
  {fr:"voisin",en:"neighbor (male)",phon:"*vwa-ZAN*",def:"Personne habitant à côté",ex:"Mon voisin est sympa.",level:1,cat:"social"},
  {fr:"voisine",en:"neighbor (female)",phon:"*vwa-ZEEN*",def:"Personne habitant à côté",ex:"Ma voisine m'aide souvent.",level:1,cat:"social"},
  {fr:"collègue",en:"colleague",phon:"*ko-LEG*",def:"Personne du même travail",ex:"Ma collègue de bureau.",level:1,cat:"social"},
  {fr:"monsieur",en:"sir / mister",phon:"*muh-SYUR*",def:"Titre masculin",ex:"Bonjour monsieur.",level:1,cat:"politesse"},
  {fr:"madame",en:"madam / lady",phon:"*ma-DAM*",def:"Titre féminin",ex:"Bonjour madame.",level:1,cat:"politesse"},
  {fr:"mademoiselle",en:"miss",phon:"*mad-mwa-ZEL*",def:"Titre jeune femme",ex:"Bonjour mademoiselle.",level:1,cat:"politesse"}

];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_2 = VOCAB_LEVEL_2;
}
