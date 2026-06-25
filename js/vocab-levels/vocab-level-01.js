// ═══════════════════════════════════════════════════════════════════
// vocab-level-01.js — Daily French 🥖
// NIVEAU 1 — Salutations & Présentation 🙋
// Entrées : 55
// ═══════════════════════════════════════════════════════════════════

const VOCAB_LEVEL_01 = [
  // === SALUTATIONS (12) ===
  {fr:"bonjour",en:"hello / good morning",phon:"*bon-ZHOOR*",phonEN:"*hel-OH / good MOR-ning*",def:"Salutation universelle du matin et de la journée",ex:"Bonjour, Madame Dupont.",level:1,cat:"salutation"},
  {fr:"bonsoir",en:"good evening",phon:"*bon-SWAHR*",phonEN:"*good EE-ving*",def:"Salutation du soir (à partir de ~18h)",ex:"Bonsoir, comment allez-vous ?",level:1,cat:"salutation"},
  {fr:"bonne nuit",en:"good night",phon:"*bun NWEE*",phonEN:"*good nyte*",def:"Souhait avant de dormir",ex:"Bonne nuit, à demain !",level:1,cat:"salutation"},
  {fr:"au revoir",en:"goodbye",phon:"*oh ruh-VWAHR*",phonEN:"*good-BYE*",def:"Formule de départ formelle",ex:"Au revoir et merci encore.",level:1,cat:"salutation"},
  {fr:"salut",en:"hi / bye (informal)",phon:"*sa-LUE*",phonEN:"*hye / bye*",def:"Salutation très familière",ex:"Salut, ça va ?",level:1,cat:"salutation"},
  {fr:"à demain",en:"see you tomorrow",phon:"*a duh-MAN*",phonEN:"*see yoo too-MOR-oh*",def:"Prendre congé jusqu'à demain",ex:"À demain, bonne soirée !",level:1,cat:"salutation"},
  {fr:"à bientôt",en:"see you soon",phon:"*a byan-TOH*",phonEN:"*see yoo soon*",def:"Prendre congé (proche)",ex:"À bientôt, madame !",level:1,cat:"salutation"},
  {fr:"à plus tard",en:"see you later",phon:"*a plew TAR*",phonEN:"*see yoo LAY-ter*",def:"Prendre congé (dans la journée)",ex:"À plus tard, au café.",level:1,cat:"salutation"},
  {fr:"bonjour madame",en:"hello madam",phon:"*bon-ZHOOR ma-DAM*",phonEN:"*hel-OH ma-DAM*",def:"Salutation formelle à une femme",ex:"Bonjour madame, je m'appelle John.",level:1,cat:"salutation"},
  {fr:"bonjour monsieur",en:"hello sir",phon:"*bon-ZHOOR muh-SYUR*",phonEN:"*hel-OH sur*",def:"Salutation formelle à un homme",ex:"Bonjour monsieur, enchanté.",level:1,cat:"salutation"},
  {fr:"coucou",en:"hey / hi there",phon:"*koo-KOO*",phonEN:"*hay / hye THAIR*",def:"Salutation très familière et affectueuse",ex:"Coucou ! Ça va ?",level:1,cat:"salutation"},
  {fr:"bonne journée",en:"have a good day",phon:"*bon zhoor-NAY*",phonEN:"*hav uh good DAY*",def:"Souhait de bonne journée au départ",ex:"Bonne journée, au revoir !",level:1,cat:"salutation"},

  // === PRÉSENTATION (10) ===
  {fr:"je m'appelle",en:"my name is",phon:"*zhuh ma-PEL*",phonEN:"*my naym iz*",def:"Présenter son nom",ex:"Je m'appelle Marie.",level:1,cat:"présentation"},
  {fr:"je suis",en:"I am",phon:"*zhuh SWEE*",phonEN:"*eye am*",def:"Verbe être à la 1ère personne",ex:"Je suis anglais.",level:1,cat:"présentation"},
  {fr:"j'habite à",en:"I live in",phon:"*zha-BEET a*",phonEN:"*eye liv in*",def:"Indiquer sa ville de résidence",ex:"J'habite à Lyon.",level:1,cat:"présentation"},
  {fr:"enchanté",en:"nice to meet you (m)",phon:"*on-shon-TAY*",phonEN:"*nys too MEET yoo*",def:"Formule de rencontre (homme)",ex:"Enchanté, monsieur Martin.",level:1,cat:"présentation"},
  {fr:"enchantée",en:"nice to meet you (f)",phon:"*on-shon-TAY*",phonEN:"*nys too MEET yoo*",def:"Formule de rencontre (femme)",ex:"Enchantée, madame Dubois.",level:1,cat:"présentation"},
  {fr:"je viens de",en:"I come from",phon:"*zhuh VYAN duh*",phonEN:"*eye kum from*",def:"Indiquer son pays d'origine",ex:"Je viens d'Angleterre.",level:1,cat:"présentation"},
  {fr:"je suis nouveau",en:"I am new (m)",phon:"*zhuh swee noo-VOH*",phonEN:"*eye am noo*",def:"Indiquer qu'on est nouveau",ex:"Je suis nouveau ici.",level:1,cat:"présentation"},
  {fr:"je suis nouvelle",en:"I am new (f)",phon:"*zhuh swee noo-VEL*",phonEN:"*eye am noo*",def:"Indiquer qu'on est nouvelle",ex:"Je suis nouvelle dans le quartier.",level:1,cat:"présentation"},
  {fr:"ravi de vous connaître",en:"delighted to meet you",phon:"*ra-VEE duh voo ko-NETR*",phonEN:"*dee-LY-ted too MEET yoo*",def:"Formule de rencontre élégante",ex:"Ravi de vous connaître, monsieur.",level:1,cat:"présentation"},
  {fr:"et vous ?",en:"and you?",phon:"*ay voo*",phonEN:"*and yoo*",def:"Renvoyer la question à l'interlocuteur",ex:"Je vais bien, et vous ?",level:1,cat:"présentation"},

  // === TU / VOUS (6) ===
  {fr:"tu",en:"you (informal)",phon:"*tew*",phonEN:"*yoo (in-for-MAL)*",def:"Pronom singulier familier",ex:"Tu vas bien ?",level:1,cat:"grammaire"},
  {fr:"vous",en:"you (formal / plural)",phon:"*voo*",phonEN:"*yoo (for-MAL / PLOO-rul)*",def:"Pronom de politesse ou pluriel",ex:"Vous habitez ici ?",level:1,cat:"grammaire"},
  {fr:"comment allez-vous ?",en:"how are you? (formal)",phon:"*ko-MAHN ta-lay-VOO*",phonEN:"*how ar yoo (for-MAL)*",def:"Demander des nouvelles (formel)",ex:"Comment allez-vous, madame ?",level:1,cat:"salutation"},
  {fr:"comment vas-tu ?",en:"how are you? (informal)",phon:"*ko-MAHN va-tew*",phonEN:"*how ar yoo (in-for-MAL)*",def:"Demander des nouvelles (familier)",ex:"Comment vas-tu, Luc ?",level:1,cat:"salutation"},
  {fr:"ça va ?",en:"how are you? / how's it going?",phon:"*sah VAH*",phonEN:"*how iz it GOH-ing*",def:"Demander des nouvelles (très familier)",ex:"Salut, ça va ?",level:1,cat:"salutation"},
  {fr:"ça va bien",en:"I'm fine / it's going well",phon:"*sah va BYAN*",phonEN:"*eye fyn / its GOH-ing wel*",def:"Réponse positive à ça va ?",ex:"Oui, ça va bien, merci.",level:1,cat:"salutation"},

  // === NATIONALITÉS (8) ===
  {fr:"anglais",en:"English (m)",phon:"*on-GLEH*",phonEN:"*IN-glish*",def:"Nationalité masculine",ex:"Je suis anglais.",level:1,cat:"nationalité"},
  {fr:"anglaise",en:"English (f)",phon:"*on-GLEHZ*",phonEN:"*IN-glish*",def:"Nationalité féminine",ex:"Je suis anglaise.",level:1,cat:"nationalité"},
  {fr:"français",en:"French (m)",phon:"*fron-SAY*",phonEN:"*french*",def:"Nationalité masculine",ex:"Il est français.",level:1,cat:"nationalité"},
  {fr:"française",en:"French (f)",phon:"*fron-SEHZ*",phonEN:"*french*",def:"Nationalité féminine",ex:"Elle est française.",level:1,cat:"nationalité"},
  {fr:"américain",en:"American (m)",phon:"*a-may-ree-KAN*",phonEN:"*uh-MEH-ri-kun*",def:"Nationalité masculine",ex:"Je suis américain.",level:1,cat:"nationalité"},
  {fr:"américaine",en:"American (f)",phon:"*a-may-ree-KENZ*",phonEN:"*uh-MEH-ri-kun*",def:"Nationalité féminine",ex:"Je suis américaine.",level:1,cat:"nationalité"},
  {fr:"canadien",en:"Canadian (m)",phon:"*ka-na-DYAN*",phonEN:"*kuh-NAY-dee-un*",def:"Nationalité masculine",ex:"Il est canadien.",level:1,cat:"nationalité"},
  {fr:"canadienne",en:"Canadian (f)",phon:"*ka-na-DYENZ*",phonEN:"*kuh-NAY-dee-un*",def:"Nationalité féminine",ex:"Elle est canadienne.",level:1,cat:"nationalité"},

  // === EXPRESSIONS COURANTES (10) ===
  {fr:"merci",en:"thank you",phon:"*mair-SEE*",phonEN:"*than-KYOO*",def:"Remerciement",ex:"Merci beaucoup !",level:1,cat:"politesse"},
  {fr:"merci beaucoup",en:"thank you very much",phon:"*mair-SEE bo-KOO*",phonEN:"*than-KYOO VEH-ree much*",def:"Remerciement renforcé",ex:"Merci beaucoup pour votre aide.",level:1,cat:"politesse"},
  {fr:"de rien",en:"you're welcome",phon:"*duh RYAN*",phonEN:"*yoor WEL-kum*",def:"Réponse à merci",ex:"De rien, avec plaisir.",level:1,cat:"politesse"},
  {fr:"s'il vous plaît",en:"please (formal)",phon:"*seel voo PLAY*",phonEN:"*pleez (for-MAL)*",def:"Formule de politesse formelle",ex:"Un café, s'il vous plaît.",level:1,cat:"politesse"},
  {fr:"s'il te plaît",en:"please (informal)",phon:"*seel tuh PLAY*",phonEN:"*pleez (in-for-MAL)*",def:"Formule de politesse familière",ex:"Passe-moi le sel, s'il te plaît.",level:1,cat:"politesse"},
  {fr:"excusez-moi",en:"excuse me (formal)",phon:"*ek-skew-zay-MWAH*",phonEN:"*ek-SKYOOZ mee (for-MAL)*",def:"S'excuser ou attirer l'attention",ex:"Excusez-moi, où est la gare ?",level:1,cat:"politesse"},
  {fr:"pardon",en:"sorry / pardon",phon:"*par-DON*",phonEN:"*SOR-ree / PAR-dun*",def:"Excuse courte",ex:"Pardon, je ne comprends pas.",level:1,cat:"politesse"},
  {fr:"je ne comprends pas",en:"I don't understand",phon:"*zhuh nuh kon-PRON pah*",phonEN:"*eye dohnt un-der-STAND*",def:"Indiquer qu'on ne comprend pas",ex:"Je ne comprends pas, pouvez-vous répéter ?",level:1,cat:"expression"},
  {fr:"pouvez-vous répéter ?",en:"can you repeat?",phon:"*poo-vay-voo ray-pay-TAY*",phonEN:"*kan yoo ree-PEET*",def:"Demander une répétition",ex:"Pouvez-vous répéter, s'il vous plaît ?",level:1,cat:"expression"},
  {fr:"parlez-vous anglais ?",en:"do you speak English?",phon:"*par-lay-voo on-GLEH*",phonEN:"*doo yoo speek IN-glish*",def:"Demander si l'interlocuteur parle anglais",ex:"Parlez-vous anglais, madame ?",level:1,cat:"expression"},

  // === MOTS DIVERS (9) ===
  {fr:"oui",en:"yes",phon:"*WEE*",phonEN:"*yes*",def:"Affirmation",ex:"Oui, je comprends.",level:1,cat:"basique"},
  {fr:"non",en:"no",phon:"*NON*",phonEN:"*noh*",def:"Négation",ex:"Non, merci.",level:1,cat:"basique"},
  {fr:"peut-être",en:"maybe",phon:"*puh-TETR*",phonEN:"*MAY-bee*",def:"Incertitude",ex:"Peut-être, je ne sais pas.",level:1,cat:"basique"},
  {fr:"je ne sais pas",en:"I don't know",phon:"*zhuh nuh say PAH*",phonEN:"*eye dohnt noh*",def:"Indiquer qu'on ne sait pas",ex:"Je ne sais pas, désolé.",level:1,cat:"expression"},
  {fr:"désolé",en:"sorry (m)",phon:"*day-zo-LAY*",phonEN:"*SOR-ree*",def:"Présenter ses excuses (homme)",ex:"Désolé, je suis en retard.",level:1,cat:"politesse"},
  {fr:"désolée",en:"sorry (f)",phon:"*day-zo-LAY*",phonEN:"*SOR-ree*",def:"Présenter ses excuses (femme)",ex:"Désolée de vous déranger.",level:1,cat:"politesse"},
  {fr:"bienvenue",en:"welcome",phon:"*byan-vuh-NEW*",phonEN:"*WEL-kum*",def:"Accueillir quelqu'un",ex:"Bienvenue en France !",level:1,cat:"salutation"},
  {fr:"comment ?",en:"what? / pardon?",phon:"*ko-MAHN*",phonEN:"*wot / PAR-dun*",def:"Demander une répétition (familier)",ex:"Comment ? Je n'ai pas entendu.",level:1,cat:"expression"},
  {fr:"à votre service",en:"at your service",phon:"*a vo-truh sair-VEES*",phonEN:"*at yoor SUR-vis*",def:"Fo<response clipped><NOTE>Result is longer than **10000 characters**, will be **truncated**.</NOTE>