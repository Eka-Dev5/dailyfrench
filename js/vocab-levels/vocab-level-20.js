// ═══════════════════════════════════════════════════════════════════
// vocab-level-20.js — Daily French 🥖
// NIVEAU 20 — Français Vivant 💬
// Entrées : 50
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_20 = [
  // === EXPRESSIONS COURANTES (15) ===
  {fr:"ça marche",en:"OK / that works",phon:"*sa MARSH*",def:"Accord, approbation.",ex:"On se retrouve à midi ? — Ça marche !",level:20,cat:"expression"},
  {fr:"pas terrible",en:"so-so / not great",phon:"*pa tay-REE-bluh*",def:"Moyen, pas très bien (ironique).",ex:"— Comment ça va ? — Pas terrible.",level:20,cat:"expression"},
  {fr:"c'est n'importe quoi",en:"that's nonsense",phon:"*say nom-PORT kuh-KWAH*",def:"Absurde, illogique.",ex:"C'est n'importe quoi ce film.",level:20,cat:"expression"},
  {fr:"c'est la galère",en:"it's a struggle",phon:"*say la ga-LAIR*",def:"C'est difficile (familier).",ex:"Aujourd'hui, c'est la galère.",level:20,cat:"expression"},
  {fr:"c'est le bordel",en:"it's a mess",phon:"*say luh bor-DEL*",def:"Grand désordre (familier vulgaire).",ex:"Ta chambre, c'est le bordel !",level:20,cat:"expression"},
  {fr:"c'est pas faux",en:"that's not wrong",phon:"*say pa FOH*",def:"Ironique : c'est vrai.",ex:"— Il pleut. — C'est pas faux.",level:20,cat:"expression"},
  {fr:"c'est clair",en:"that's clear / for sure",phon:"*say KLAIR*",def:"Accord total.",ex:"— On y va ? — C'est clair !",level:20,cat:"expression"},
  {fr:"c'est mort",en:"no way / it's dead",phon:"*say MOR*",def:"Impossible (familier).",ex:"C'est mort, je ne viens pas.",level:20,cat:"expression"},
  {fr:"c'est bon",en:"it's good / OK",phon:"*say BON*",def:"C'est suffisant, c'est fini.",ex:"C'est bon, j'ai compris.",level:20,cat:"expression"},
  {fr:"c'est parti",en:"here we go",phon:"*say par-TEE*",def:"Début de l'action.",ex:"C'est parti, on commence !",level:20,cat:"expression"},
  {fr:"c'est pas grave",en:"it's not serious / no worries",phon:"*say pa GRAHV*",def:"Ce n'est pas important.",ex:"C'est pas grave, ne t'inquiète pas.",level:20,cat:"expression"},
  {fr:"c'est pas possible",en:"it's not possible",phon:"*say pa po-SEE-bluh*",def:"Incroyable, exaspération.",ex:"C'est pas possible, encore en retard !",level:20,cat:"expression"},
  {fr:"c'est dingue",en:"it's crazy / amazing",phon:"*say DAN-guhve à midi ? — Ça marche !",level:20,cat:"expression"},
  {fr:"pas terrible",en:"so-so / not great",phon:"*pa tay-REE-bluh*",def:"Moyen, pas très bien (ironique).",ex:"— Comment ça va ? — Pas terrible.",level:20,cat:"expression"},
  {fr:"c'est n'importe quoi",en:"that's nonsense",phon:"*say nom-PORT kuh-KWAH*",def:"Absurde, illogique.",ex:"C'est n'importe quoi ce film.",level:20,cat:"expression"},
  {fr:"c'est la galère",en:"it's a struggle",phon:"*say la ga-LAIR*",def:"C'est difficile (familier).",ex:"Aujourd'hui, c'est la galère.",level:20,cat:"expression"},
  {fr:"c'est le bordel",en:"it's a mess",phon:"*say luh bor-DEL*",def:"Grand désordre (familier vulgaire).",ex:"Ta chambre, c'est le bordel !",level:20,cat:"expression"},
  {fr:"c'est pas faux",en:"that's not wrong",phon:"*say pa FOH*",def:"Ironique : c'est vrai.",ex:"— Il pleut. — C'est pas faux.",level:20,cat:"expression"},
  {fr:"c'est clair",en:"that's clear / for sure",phon:"*say KLAIR*",def:"Accord total.",ex:"— On y va ? — C'est clair !",level:20,cat:"expression"},
  {fr:"c'est mort",en:"no way / it's dead",phon:"*say MOR*",def:"Impossible (familier).",ex:"C'est mort, je ne viens pas.",level:20,cat:"expression"},
  {fr:"c'est bon",en:"it's good / OK",phon:"*say BON*",def:"C'est suffisant, c'est fini.",ex:"C'est bon, j'ai compris.",level:20,cat:"expression"},
  {fr:"c'est parti",en:"here we go",phon:"*say par-TEE*",def:"Début de l'action.",ex:"C'est parti, on commence !",level:20,cat:"expression"},
  {fr:"c'est pas grave",en:"it's not serious / no worries",phon:"*say pa GRAHV*",def:"Ce n'est pas important.",ex:"C'est pas grave, ne t'inquiète pas.",level:20,cat:"expression"},
  {fr:"c'est pas possible",en:"it's not possible",phon:"*say pa po-SEE-bluh*",def:"Incroyable, exaspération.",ex:"C'est pas possible, encore en retard !",level:20,cat:"expression"},
  {fr:"c'est dingue",en:"it's crazy / amazing",phon:"*say DAN-guh*",def:"Surprenant, incroyable.",ex:"C'est dingue, cette histoire !",level:20,cat:"expression"},
  {fr:"c'est génial",en:"it's great / awesome",phon:"*say zhay-NYAL*",def:"Excellent, super.",ex:"C'est génial, merci !",level:20,cat:"expression"},
  {fr:"c'est top",en:"it's top-notch",phon:"*say TOP*",def:"Le meilleur (familier).",ex:"C'est top, ce restaurant !",level:20,cat:"expression"},

  // === RÉACTIONS (10) ===
  {fr:"tant mieux",en:"all the better",phon:"*ton MYUR*",def:"C'est une bonne chose.",ex:"Tant mieux pour toi !",level:20,cat:"expression"},
  {fr:"tant pis",en:"too bad",phon:"*ton PEE*",def:"C'est dommage.",ex:"Tant pis, on fera sans.",level:20,cat:"expression"},
  {fr:"pas de souci",en:"no worries",phon:"*pa duh soo-SEE*",def:"Pas de problème (familier).",ex:"Pas de souci, je m'en occupe.",level:20,cat:"expression"},
  {fr:"pas de problème",en:"no problem",phon:"*pa duh pro-BLEM*",def:"Pas de difficulté.",ex:"Pas de problème, c'est facile.",level:20,cat:"expression"},
  {fr:"y a pas de quoi",en:"you're welcome / no big deal",phon:"*ya pa duh KWAH*",def:"Réponse à merci (familier).",ex:"Y a pas de quoi, c'était normal.",level:20,cat:"expression"},
  {fr:"laisse tomber",en:"drop it / forget it",phon:"*less tom-BAY*",def:"Abandonner (familier).",ex:"Laisse tomber, ça ne vaut pas le coup.",level:20,cat:"expression"},
  {fr:"fiche le camp",en:"get lost / go away",phon:"*feesh luh KON*",def:"Partir (familier).",ex:"Fiche le camp, je veux être seul !",level:20,cat:"expression"},
  {fr:"fous-moi la paix",en:"leave me alone",phon:"*foo-MWAH la PAY*",def:"Cesser de déranger (très familier).",ex:"Fous-moi la paix, s'il te plaît.",level:20,cat:"expression"},
  {fr:"tu m'étonnes",en:"you're telling me / no kidding",phon:"*tew may-ton*",def:"Accord emphatique.",ex:"— Il fait chaud. — Tu m'étonnes !",level:20,cat:"expression"},
  {fr:"tu parles",en:"yeah right / you wish",phon:"*tew PARL*",def:"Ironique, incrédulité.",ex:"— Il est gentil. — Tu parles !",level:20,cat:"expression"},

  // === QUESTIONS & RÉPONSES (10) ===
  {fr:"quoi de neuf ?",en:"what's new?",phon:"*kwah duh NUHF*",def:"Demande des nouvelles.",ex:"Salut, quoi de neuf ?",level:20,cat:"expression"},
  {fr:"comment ça va ?",en:"how are you?",phon:"*ko-MON sa VAH*",def:"Demande de nouvelles.",ex:"Comment ça va aujourd'hui ?",level:20,cat:"expression"},
  {fr:"ça va ?",en:"you OK?",phon:"*sa VAH*",def:"Demande concise.",ex:"Ça va, tu as l'air fatigué.",level:20,cat:"expression"},
  {fr:"qu'est-ce qui se passe ?",en:"what's going on?",phon:"*kess kee suh PASS*",def:"Demande d'explication.",ex:"Qu'est-ce qui se passe ici ?",level:20,cat:"expression"},
  {fr:"qu'est-ce que tu fais ?",en:"what are you doing?",phon:"*kess kuh tew FAY*",def:"Demande d'activité.",ex:"Qu'est-ce que tu fais ce soir ?",level:20,cat:"expression"},
  {fr:"tu viens ?",en:"are you coming?",phon:"*tew VYAN*",def:"Invitation à suivre.",ex:"Tu viens avec nous ?",level:20,cat:"expression"},
  {fr:"t'es sûr ?",en:"are you sure?",phon:"*tay SUR*",def:"Demande de confirmation (familier).",ex:"T'es sûr de ça ?",level:20,cat:"expression"},
  {fr:"t'inquiète",en:"don't worry",phon:"*tan-kee-ET*",def:"Rassurer (familier).",ex:"T'inquiète, ça va bien se passer.",level:20,cat:"expression"},
  {fr:"t'inquiète pas",en:"don't worry",phon:"*tan-kee-ET PA*",def:"Rassurer (familier).",ex:"T'inquiète pas pour moi.",level:20,cat:"expression"},
  {fr:"ça te dit ?",en:"do you fancy?",phon:"*sa tuh DEE*",def:"Proposition informelle.",ex:"Ça te dit d'aller au ciné ?",level:20,cat:"expression"},

  // === ARGOT & FAMILIER (10) ===
  {fr:"bosser",en:"to work (slang)",phon:"*bo-SAY*",def:"Travailler (familier).",ex:"Je bosse demain.",level:20,cat:"verbe"},
  {fr:"piquer",en:"to steal / to nap (slang)",phon:"*pee-KAY*",def:"Voler ou dormir (familier).",ex:"Il a piqué mon stylo.",level:20,cat:"verbe"},
  {fr:"kiffer",en:"to love / to dig (slang)",phon:"*kee-FAY*",def:"Aimer beaucoup (argot).",ex:"Je kiffe cette musique.",level:20,cat:"verbe"},
  {fr:"péter",en:"to break / to fart (slang)",phon:"*pay-TAY*",def:"Casser (très familier/vulgaire).",ex:"Il a pété la télé.",level:20,cat:"verbe"},
  {fr:"se casser",en:"to leave / to break (slang)",phon:"*suh ka-SAY*",def:"Partir (familier).",ex:"Je me casse, à plus !",level:20,cat:"verbe"},
  {fr:"se barrer",en:"to leave / to run off (slang)",phon:"*suh ba-RAY*",def:"Partir vite (familier).",ex:"On se barre avant la pluie.",level:20,cat:"verbe"},
  {fr:"se tirer",en:"to take off / to leave (slang)",phon:"*suh tee-RAY*",def:"Partir (familier).",ex:"Je me tire, ciao !",level:20,cat:"verbe"},
  {fr:"la bouffe",en:"food (slang)",phon:"*la BOOF*",def:"Nourriture (familier).",ex:"La bouffe est bonne ici.",level:20,cat:"expression"},
  {fr:"le fric",en:"money (slang)",phon:"*luh FREEK*",def:"Argent (familier).",ex:"J'ai pas de fric ce mois-ci.",level:20,cat:"expression"},
  {fr:"un mec",en:"a guy / a bloke",phon:"*uh MEK*",def:"Homme (familier).",ex:"C'est un mec sympa.",level:20,cat:"expression"},

  // === EXPRESSIONS FINALES (5) ===
  {fr:"bref",en:"anyway / in short",phon:"*BREF*",def:"Pour résumer.",ex:"Bref, on y va ou pas ?",level:20,cat:"expression"},
  {fr:"enfin bref",en:"anyway / long story short",phon:"*on-FAN BREF*",def:"Conclusion rapide.",ex:"Enfin bref, c'est terminé.",level:20,cat:"expression"},
  {fr:"voilà",en:"there you go / that's it",phon:"*vwa-LAH*",def:"Présentation ou conclusion.",ex:"Voilà, c'est fait.",level:20,cat:"expression"},
  {fr:"allez",en:"come on / let's go",phon:"*a-LAY*",def:"Encouragement ou impatience.",ex:"Allez, on y va !",level:20,cat:"expression"},
  {fr:"bon allez",en:"come on then",phon:"*bon a-LAY*",def:"Concession ou départ.",ex:"Bon allez, je te laisse.",level:20,cat:"expression"}
];

if (typeof window !== 'undefined') {
  window.VOCAB_LEVEL_20 = VOCAB_LEVEL_20;
}
