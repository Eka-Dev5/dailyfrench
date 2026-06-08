// ═══════════════════════════════════════════════════════════════════
// PHRASE-DATA.JS — Daily French 🥖
// Données pour le jeu Phrase Builder
// 5 blocs | 25 missions | 3 niveaux de difficulté
// ═══════════════════════════════════════════════════════════════════

const PHRASE_BLOCKS = {
  // ═══════════════════════════════════════════════════════════════
  // BLOC 1 — Présent (être / avoir) — Difficulté : ★☆☆
  // ═══════════════════════════════════════════════════════════════
  1: {
    title: "Je suis / J'ai",
    level: 1,
    difficulty: 1,
    grammar: "présent — verbes être et avoir",
    sujets: ["Je","Tu","Il","Elle","Nous","Vous","Ils","Elles"],
    verbes: ["suis","es","est","sommes","êtes","sont","ai","as","a","avons","avez","ont"],
    complements: ["fatigué","fatiguée","content","contente","triste","faim","soif","froid","chaud","60 ans","de Paris","un chien","un chat","de la chance"],
    missions: [
      {target:"Je suis fatigué", hint:"🧍 état (masculin)", en:"I am tired", grammar:"être + adjectif"},
      {target:"J'ai faim", hint:"👜 ressenti", en:"I am hungry", grammar:"avoir + nom"},
      {target:"Tu es de Paris", hint:"origine = être", en:"You are from Paris", grammar:"être + lieu"},
      {target:"Il a un chat", hint:"possession = avoir", en:"He has a cat", grammar:"avoir + objet"},
      {target:"Nous sommes contents", hint:"pluriel + état", en:"We are happy", grammar:"être + adjectif accordé"}
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // BLOC 2 — Présent (aller / faire / prendre) — Difficulté : ★★☆
  // ═══════════════════════════════════════════════════════════════
  2: {
    title: "Je vais / Je fais",
    level: 2,
    difficulty: 2,
    grammar: "présent — verbes aller, faire, prendre",
    sujets: ["Je","Tu","Il","Elle","Nous","Vous"],
    verbes: ["vais","vas","va","allons","allez","vont","fais","fais","fait","faisons","faites","font","prends","prend","prenons"],
    complements: ["à Paris","au marché","au café","du sport","la cuisine","le ménage","les courses","du jardinage","un café","une promenade","la vaisselle","le lit"],
    missions: [
      {target:"Je vais au marché", hint:"🦶 direction", en:"I go to the market", grammar:"aller + à + lieu"},
      {target:"Tu fais du sport", hint:"👐 action", en:"You do sport", grammar:"faire + de + activité"},
      {target:"Il va à Paris", hint:"🚶 mouvement", en:"He goes to Paris", grammar:"aller + à + ville"},
      {target:"Nous faisons la cuisine", hint:"👐 activité", en:"We cook", grammar:"faire + déterminant + nom"},
      {target:"Je prends un café", hint:"🫳 consommation", en:"I have a coffee", grammar:"prendre + déterminant + nom"}
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // BLOC 3 — Vouloir / Pouvoir / Devoir — Difficulté : ★★☆
  // ═══════════════════════════════════════════════════════════════
  3: {
    title: "Je veux / Je peux / Je dois",
    level: 3,
    difficulty: 2,
    grammar: "présent — verbes modaux + infinitif",
    sujets: ["Je","Tu","Il","Elle","Nous","Vous"],
    verbes: ["veux","veut","voulons","voulez","peux","peut","pouvons","pouvez","dois","doit","devons","devez"],
    complements: ["partir","rester","manger","dormir","aider","comprendre","répéter","appeler","sortir","rentrer","travailler","me reposer"],
    missions: [
      {target:"Je veux partir", hint:"désir", en:"I want to leave", grammar:"vouloir + infinitif"},
      {target:"Tu dois appeler", hint:"obligation", en:"You must call", grammar:"devoir + infinitif"},
      {target:"Il peut rester", hint:"capacité", en:"He can stay", grammar:"pouvoir + infinitif"},
      {target:"Nous voulons comprendre", hint:"désir pluriel", en:"We want to understand", grammar:"vouloir + infinitif"},
      {target:"Je dois me reposer", hint:"obligation réflexive", en:"I need to rest", grammar:"devoir + pronom réfléchi + infinitif"}
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // BLOC 4 — Passé composé — Difficulté : ★★★
  // ═══════════════════════════════════════════════════════════════
  4: {
    title: "Passé composé — J'ai fait",
    level: 4,
    difficulty: 3,
    grammar: "passé composé — avoir/être + participe passé",
    sujets: ["Je","Tu","Il","Elle","Nous","Vous"],
    verbes: ["ai nettoyé","ai rangé","ai préparé","ai arrosé","ai fait","ai mangé","ai appelé","ai travaillé","suis allé","suis venue","avons fini"],
    complements: ["la maison","le jardin","le dîner","les courses","la vaisselle","le lit","mon médecin","ce matin","hier","ce soir"],
    missions: [
      {target:"J'ai nettoyé la maison", hint:"passé composé (avoir)", en:"I cleaned the house", grammar:"avoir + participe passé"},
      {target:"Tu as rangé le jardin", hint:"avoir + participe", en:"You tidied the garden", grammar:"avoir + participe passé"},
      {target:"Il a préparé le dîner", hint:"passé", en:"He prepared dinner", grammar:"avoir + participe passé"},
      {target:"Nous avons fait les courses", hint:"faire → fait", en:"We did the shopping", grammar:"avoir + participe passé irrégulier"},
      {target:"Je suis allé au marché", hint:"aller → être", en:"I went to the market", grammar:"être + participe passé (accord)"}
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // BLOC 5 — Futur proche — Difficulté : ★★☆
  // ═══════════════════════════════════════════════════════════════
  5: {
    title: "Futur proche — Je vais...",
    level: 5,
    difficulty: 2,
    grammar: "futur proche — aller + infinitif",
    sujets: ["Je","Tu","Il","Elle","Nous","Vous"],
    verbes: ["vais","vas","va","allons","allez","vont"],
    complements: ["cuisiner","nettoyer","appeler","partir","rentrer","travailler","sortir","me reposer","faire les courses","aller au marché","prendre rendez-vous"],
    missions: [
      {target:"Je vais cuisiner", hint:"futur proche", en:"I'm going to cook", grammar:"aller + infinitif"},
      {target:"Elle va partir", hint:"aller + infinitif", en:"She's going to leave", grammar:"aller + infinitif"},
      {target:"Nous allons nettoyer", hint:"pluriel futur", en:"We're going to clean", grammar:"aller + infinitif"},
      {target:"Tu vas appeler", hint:"action future", en:"You're going to call", grammar:"aller + infinitif"},
      {target:"Il va prendre rendez-vous", hint:"planification", en:"He's going to make an appointment", grammar:"aller + infinitif"}
    ]
  }
};

// ═══════════════════════════════════════════════════════════════════
// Export pour module ou global
// ═══════════════════════════════════════════════════════════════════
if (typeof window !== 'undefined') {
  window.PHRASE_BLOCKS = PHRASE_BLOCKS;
}
