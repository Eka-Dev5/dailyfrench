// ═══════════════════════════════════════════════════════════════════
// vocab-level-14.js — Daily French 🥖
// NIVEAU 14 — Mes Besoins 🙋
// Entrées : 50
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_14 = [
  // === BESOINS PHYSIOLOGIQUES (12) ===
  {fr:"faim",en:"hunger",phon:"*FAN*",def:"Besoin de manger.",ex:"J'ai faim.",level:14,cat:"besoin"},
  {fr:"soif",en:"thirst",phon:"*SWAHF*",def:"Besoin de boire.",ex:"J'ai soif.",level:14,cat:"besoin"},
  {fr:"sommeil",en:"sleepiness",phon:"*som-MAY*",def:"Besoin de dormir.",ex:"J'ai sommeil.",level:14,cat:"besoin"},
  {fr:"fatigue",en:"tiredness",phon:"*fa-TEEG*",def:"Besoin de repos.",ex:"J'ai de la fatigue.",level:14,cat:"besoin"},
  {fr:"froid",en:"cold",phon:"*FRWAH*",def:"Besoin de chaleur.",ex:"J'ai froid.",level:14,cat:"besoin"},
  {fr:"chaud",en:"hot",phon:"*SHOH*",def:"Besoin de fraîcheur.",ex:"J'ai chaud.",level:14,cat:"besoin"},
  {fr:"toilettes",en:"need to use the restroom",phon:"*twa-LET*",def:"Besoin naturel.",ex:"J'ai besoin des toilettes.",level:14,cat:"besoin"},
  {fr:"douleur",en:"pain",phon:"*doo-LUR*",def:"Sensation désagréable.",ex:"J'ai une douleur.",level:14,cat:"besoin"},
  {fr:"mal",en:"ache / hurt",phon:"*MAL*",def:"Souffrance.",ex:"J'ai mal à la tête.",level:14,cat:"besoin"},
  {fr:"envie",en:"urge / desire",phon:"*on-VEE*",def:"Désir fort.",ex:"J'ai envie de dormir.",level:14,cat:"besoin"},
  {fr:"besoin",en:"need",phon:"*buh-ZWAN*",def:"Nécessité.",ex:"J'ai besoin d'aide.",level:14,cat:"besoin"},
  {fr:"manque",en:"lack",phon:"*MONK*",def:"Absence de quelque chose.",ex:"Il manque du sucre.",level:14,cat:"besoin"},

  // === BESOINS PRATIQUES (13) ===
  {fr:"aide",en:"help",phon:"*AYD*",def:"Assistance.",ex:"J'ai besoin d'aide.",level:14,cat:"besoin"},
  {fr:"conseil",en:"advice",phon:"*kon-SEY*",def:"Recommandation.",ex:"J'ai besoin d'un conseil.",level:14,cat:"besoin"},
  {fr:"information",en:"information",phon:"*on-for-ma-SYON*",def:"Renseignement.",ex:"J'ai besoin d'informations.",level:14,cat:"besoin"},
  {fr:"direction",en:"direction",phon:"*dee-rek-SYON*",def:"Indication de chemin.",ex:"J'ai besoin de directions.",level:14,cat:"besoin"},
  {fr:"argent",en:"money",phon:"*ar-ZHAN*",def:"Monnaie.",ex:"J'ai besoin d'argent.",level:14,cat:"besoin"},
  {fr:"temps",en:"time",phon:"*TON*",def:"Durée disponible.",ex:"J'ai besoin de temps.",level:14,cat:"besoin"},
  {fr:"repos",en:"rest",phon:"*ruh-POH*",def:"Période de relaxation.",ex:"J'ai besoin de repos.",level:14,cat:"besoin"},
  {fr:"silence",en:"silence",phon:"*see-LONSS*",def:"Absence de bruit.",ex:"J'ai besoin de silence.",level:14,cat:"besoin"},
  {fr:"espace",en:"space",phon:"*ay-SPASS*",def:"Place, zone libre.",ex:"J'ai besoin d'espace.",level:14,cat:"besoin"},
  {fr:"lumière",en:"light",phon:"*lew-MYAIR*",def:"Clarté.",ex:"J'ai besoin de lumière.",level:14,cat:"besoin"},
  {fr:"eau",en:"water",phon:"*OH*",def:"Liquide vital.",ex:"J'ai besoin d'eau.",level:14,cat:"besoin"},
  {fr:"nourriture",en:"food",phon:"*noo-ree-TOOR*",def:"Alimentation.",ex:"J'ai besoin de nourriture.",level:14,cat:"besoin"},
  {fr:"sommeil",en:"sleep",phon:"*som-MAY*",def:"Repos nocturne.",ex:"J'ai besoin de sommeil.",level:14,cat:"besoin"},

  // === EXPRESSIONS DE BESOIN (15) ===
  {fr:"j'ai besoin de",en:"I need",phon:"*zhuh buh-ZWAN duh*",def:"Exprimer un besoin.",ex:"J'ai besoin de repos.",level:14,cat:"expression"},
  {fr:"il me faut",en:"I need (impersonal)",phon:"*eel muh FOH*",def:"Nécessité impersonnelle.",ex:"Il me faut un stylo.",level:14,cat:"expression"},
  {fr:"c'est nécessaire",en:"it's necessary",phon:"*say nay-say-SAIR*",def:"Obligatoire.",ex:"C'est nécessaire de manger.",level:14,cat:"expression"},
  {fr:"c'est indispensable",en:"it's essential",phon:"*say on-dees-pon-SAH-bluh*",def:"Absolument nécessaire.",ex:"L'eau est indispensable.",level:14,cat:"expression"},
  {fr:"c'est urgent",en:"it's urgent",phon:"*say oor-ZHAN*",def:"Prioritaire.",ex:"C'est urgent, appelez le médecin.",level:14,cat:"expression"},
  {fr:"c'est important",en:"it's important",phon:"*say om-por-TON*",def:"De grande valeur.",ex:"C'est important de dormir.",level:14,cat:"expression"},
  {fr:"je dois",en:"I must",phon:"*zhuh DWAH*",def:"Obligation personnelle.",ex:"Je dois manger.",level:14,cat:"expression"},
  {fr:"il faut que",en:"it is necessary that",phon:"*eel FOH kuh*",def:"Obligation impersonnelle.",ex:"Il faut que je parte.",level:14,cat:"expression"},
  {fr:"je voudrais",en:"I would like",phon:"*zhuh voo-DRAY*",def:"Souhait poli.",ex:"Je voudrais un verre d'eau.",level:14,cat:"expression"},
  {fr:"pourriez-vous",en:"could you",phon:"*poo-ree-ay VOO*",def:"Demande polie.",ex:"Pourriez-vous m'aider ?",level:14,cat:"expression"},
  {fr:"est-ce possible",en:"is it possible",phon:"*ess po-SEE-bluh*",def:"Demander la faisabilité.",ex:"Est-ce possible de venir ?",level:14,cat:"expression"},
  {fr:"y a-t-il",en:"is there",phon:"*ee ah TEEL*",def:"Demander l'existence.",ex:"Y a-t-il un médecin ?",level:14,cat:"expression"},
  {fr:"où puis-je",en:"where can I",phon:"*oo PWEESH*",def:"Demander un lieu.",ex:"Où puis-je trouver de l'aide ?",level:14,cat:"expression"},
  {fr:"comment faire",en:"how to do",phon:"*ko-MON FAIR*",def:"Demander la méthode.",ex:"Comment faire pour... ?",level:14,cat:"expression"},
  {fr:"que faire",en:"what to do",phon:"*kuh FAIR*",def:"Demander une solution.",ex:"Que faire en cas d'urgence ?",level:14,cat:"expression"},

  // === Urgences (10) ===
  {fr:"au secours",en:"help",phon:"*oh suh-KOOR*",def:"Cri d'urgence.",ex:"Au secours !",level:14,cat:"expression"},
  {fr:"à l'aide",en:"help me",phon:"*ah LAYD*",def:"Demande d'assistance.",ex:"À l'aide !",level:14,cat:"expression"},
  {fr:"urgence",en:"emergency",phon:"*oor-ZHANSS*",def:"Situation critique.",ex:"C'est une urgence.",level:14,cat:"besoin"},
  {fr:"danger",en:"danger",phon:"*don-ZHAY*",def:"Risque imminent.",ex:"C'est dangereux.",level:14,cat:"besoin"},
  {fr:"alerte",en:"alert",phon:"*a-LAIRT*",def:"Signal d'attention.",ex:"Alerte rouge.",level:14,cat:"besoin"},
  {fr:"panique",en:"panic",phon:"*pa-NEEK*",def:"Peur soudaine.",ex:"Ne paniquez pas.",level:14,cat:"besoin"},
  {fr:"calme",en:"calm",phon:"*KALM*",def:"Tranquillité.",ex:"Restez calme.",level:14,cat:"besoin"},
  {fr:"patience",en:"patience",phon:"*pa-SYONSS*",def:"Capacité d'attendre.",ex:"Ayez de la patience.",level:14,cat:"besoin"},
  {fr:"courage",en:"courage",phon:"*koo-RAZH*",def:"Bravoure.",ex:"Ayez du courage.",level:14,cat:"besoin"},
  {fr:"espoir",en:"hope",phon:"*ay-SPWAR*",def:"Attente positive.",ex:"Il y a de l'espoir.",level:14,cat:"besoin"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_14 = VOCAB_LEVEL_14;
}
