// ================================================================
// PHRASE-DATA.JS — Daily French 🥖 v2.0
// Blocs 1-10 | 50 missions | 5 niveaux de difficulté
// Aligné avec LESSONS_DATA 1-20
// ================================================================

const PHRASE_BLOCKS = {
  // ... (blocs 1-5 existants conservés tels quels) ...

  // ================================================================
  // BLOC 6 — Présent (prendre / mettre / savoir) — Difficulté : ★★☆
  // Leçons 6-7
  // ================================================================
  6: {
    title: "Je prends / Je mets / Je sais",
    level: 6,
    difficulty: 2,
    grammar: "présent — verbes prendre, mettre, savoir",
    sujets: ["Je","Tu","Il","Elle","Nous","Vous"],
    verbes: ["prends","prend","prenons","prenez","mets","met","mettons","mettez","sais","sait","savons","savez"],
    complements: ["un café","le train","une décision","la route","la table","le couvert","la télé","le chauffage","la vérité","la réponse","son numéro","où aller"],
    missions: [
      {target:"Je prends un café", hint:"consommation", en:"I have a coffee", grammar:"prendre + déterminant + nom"},
      {target:"Tu mets la table", hint:"préparation", en:"You set the table", grammar:"mettre + déterminant + nom"},
      {target:"Il sait la vérité", hint:"connaissance", en:"He knows the truth", grammar:"savoir + déterminant + nom"},
      {target:"Nous prenons le train", hint:"transport", en:"We take the train", grammar:"prendre + déterminant + nom"},
      {target:"Vous savez où aller", hint:"connaissance + subordonnée", en:"You know where to go", grammar:"savoir + subordonnée"}
    ]
  },

  // ================================================================
  // BLOC 7 — Impératif (commandes / politesse) — Difficulté : ★★☆
  // Leçons 8-10
  // ================================================================
  7: {
    title: "Donne-moi / Viens / Dis",
    level: 7,
    difficulty: 2,
    grammar: "impératif — donner des instructions et demander poliment",
    sujets: ["—"],
    verbes: ["donne","donnez","viens","venez","dis","dites","prenez","mettez","passez","fermez","ouvrez","attendez","regardez","écoutez"],
    complements: ["le sel","le pain","ici","demain","la vérité","un verre","la table","l'aspirateur","la porte","la fenêtre","un moment","ça"],
    missions: [
      {target:"Donne-moi le sel", hint:"demande directe", en:"Give me the salt", grammar:"impératif + complément"},
      {target:"Venez ici", hint:"invitation", en:"Come here", grammar:"impératif + adverbe"},
      {target:"Dites la vérité", hint:"ordre formel", en:"Tell the truth", grammar:"impératif + déterminant + nom"},
      {target:"Prenez un verre", hint:"offre", en:"Have a drink", grammar:"impératif + déterminant + nom"},
      {target:"Attendez un moment", hint:"patience", en:"Wait a moment", grammar:"impératif + déterminant + nom"}
    ]
  },

  // ================================================================
  // BLOC 8 — Participe présent / Gérondif — Difficulté : ★★★
  // Leçons 11-13
  // ================================================================
  8: {
    title: "En cuisinant / En parlant",
    level: 8,
    difficulty: 3,
    grammar: "gérondif — en + participe présent (action simultanée)",
    sujets: ["Je","Tu","Il","Elle","Nous"],
    verbes: ["en cuisinant","en parlant","en marchant","en travaillant","en attendant","en regardant","en écoutant","en faisant","en prenant","en mettant"],
    complements: ["j'écoute la radio","il apprend beaucoup","elle téléphone","nous discutons","je réfléchis","tu comprends mieux","il mange moins","elle découvre la ville","nous apprenons","je me relaxe"],
    missions: [
      {target:"En cuisinant, j'écoute la radio", hint:"action simultanée", en:"While cooking, I listen to the radio", grammar:"en + gérondif, action principale"},
      {target:"En parlant, il apprend beaucoup", hint:"apprentissage", en:"By speaking, he learns a lot", grammar:"en + gérondif, conséquence"},
      {target:"En marchant, elle découvre la ville", hint:"découverte", en:"While walking, she discovers the city", grammar:"en + gérondif, action simultanée"},
      {target:"En attendant, je réfléchis", hint:"attente", en:"While waiting, I think", grammar:"en + gérondif, action pendant l'attente"},
      {target:"En travaillant, nous apprenons", hint:"expérience", en:"By working, we learn", grammar:"en + gérondif, moyen"}
    ]
  },

  // ================================================================
  // BLOC 9 — Conditionnel présent — Difficulté : ★★★
  // Leçons 14-16
  // ================================================================
  9: {
    title: "Je voudrais / Je pourrais / Je devrais",
    level: 9,
    difficulty: 3,
    grammar: "conditionnel présent — politesse, hypothèse, conseil",
    sujets: ["Je","Tu","Il","Elle","Nous","Vous"],
    verbes: ["voudrais","voudrait","voudrions","voudriez","pourrais","pourrait","pourrions","pourriez","devrais","devrait","devrions","devriez","serais","serait","serions","seriez"],
    complements: ["un café","aider","partir","venir","demander","essayer","réserver","appeler","rester","partir","faire attention","mieux","plus tôt","la vérité"],
    missions: [
      {target:"Je voudrais un café", hint:"politesse", en:"I would like a coffee", grammar:"conditionnel de vouloir + nom"},
      {target:"Tu pourrais aider", hint:"suggestion", en:"You could help", grammar:"conditionnel de pouvoir + infinitif"},
      {target:"Il devrait partir", hint:"conseil", en:"He should leave", grammar:"conditionnel de devoir + infinitif"},
      {target:"Nous serions heureux", hint:"hypothèse", en:"We would be happy", grammar:"conditionnel de être + adjectif"},
      {target:"Vous devriez essayer", hint:"recommandation", en:"You should try", grammar:"conditionnel de devoir + infinitif"}
    ]
  },

  // ================================================================
  // BLOC 10 — Subjonctif présent — Difficulté : ★★★★
  // Leçons 17-20
  // ================================================================
  10: {
    title: "Il faut que / Je veux que / Bien que",
    level: 10,
    difficulty: 4,
    grammar: "subjonctif présent — après expressions de nécessité, volonté, doute",
    sujets: ["Je","Tu","Il","Elle","Nous","Vous"],
    verbes: ["parte","partes","partions","partiez","fasse","fasses","fassions","fassiez","sache","saches","sachions","sachiez","aille","ailles","allions","alliez","vienne","viennes","venions","veniez"],
    complements: ["il faut que","je veux que","bien que","pour que","afin que","avant que","à moins que","je doute que","il est important que","il est nécessaire que"],
    missions: [
      {target:"Il faut que je parte", hint:"nécessité", en:"I must leave / It is necessary that I leave", grammar:"il faut que + subjonctif"},
      {target:"Je veux que tu fasses attention", hint:"volonté", en:"I want you to be careful", grammar:"je veux que + subjonctif"},
      {target:"Bien qu'il sache la vérité", hint:"concession", en:"Although he knows the truth", grammar:"bien que + subjonctif"},
      {target:"Pour que nous arrivions à l'heure", hint:"but", en:"So that we arrive on time", grammar:"pour que + subjonctif"},
      {target:"Il est important que vous veniez", hint:"importance", en:"It is important that you come", grammar:"il est important que + subjonctif"}
    ]
  }
};

// ================================================================
// Export
// ================================================================
if (typeof window !== 'undefined') {
  window.PHRASE_BLOCKS = PHRASE_BLOCKS;
}
