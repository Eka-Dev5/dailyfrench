// ═══════════════════════════════════════════════════════════════════
// CONVERSATION-DATA.JS — Daily French 🥖
// Scénarios de dialogues interactifs pour pratiquer le français réel
// ═══════════════════════════════════════════════════════════════════

const CONVERSATION_SCENARIOS = [
  {
    id: 'boulanger',
    icon: '🥖',
    title: 'At the Bakery',
    titleFr: 'Chez le boulanger',
    difficulty: 1,
    category: 'courses',
    npcName: 'M. Martin',
    npcRole: 'Boulanger',
    setting: 'Une petite boulangerie française du matin. L\'odeur du pain chaud embaume.',
    playerRole: 'Vous voulez acheter du pain pour le petit-déjeuner.',
    steps: [
      {
        npc: "Bonjour Madame ! Qu'est-ce que je vous sers ce matin ?",
        npcPhon: "Bon-ZHOOR mah-DAHM ! Kes-kuh zhuh voo sair suh mah-TAN ?",
        options: [
          { text: "Donne-moi une baguette.", correct: 0, feedback: "❌ Trop direct ! 'Donne-moi' est un ordre. En France, utilisez 'Je voudrais...' pour demander poliment." },
          { text: "Je voudrais une baguette, s'il vous plaît.", correct: 2, feedback: "✅ Parfait ! 'Je voudrais' est la formule magique. Vous serez toujours bien accueilli avec cette phrase." },
          { text: "Une baguette.", correct: 1, feedback: "😐 Compris, mais un peu sec. Essayez d'ajouter 'Je voudrais' et 's'il vous plaît' la prochaine fois." }
        ]
      },
      {
        npc: "Bien sûr ! Une tradition ou une classique ?",
        npcPhon: "Byan sur ! Oon trad-dee-SYOHN oo oon klah-SEEK ?",
        options: [
          { text: "Quelle est la différence ?", correct: 2, feedback: "✅ Très bien ! Poser des questions montre votre intérêt. La tradition est plus croustillante, la classique plus moelleuse." },
          { text: "Je ne sais pas. Donne-moi n'importe laquelle.", correct: 0, feedback: "❌ 'Donne-moi' est trop direct. Et 'n'importe laquelle' peut sembler désinvolte. Essayez : 'Que me recommandez-vous ?'" },
          { text: "La tradition, s'il vous plaît.", correct: 1, feedback: "😐 Bien, mais vous auriez pu demander la différence pour apprendre quelque chose de nouveau !" }
        ]
      },
      {
        npc: "Excellent choix ! Ce sera tout ?",
        npcPhon: "Ek-seh-LAHN shwah ! Suh sair TOO ?",
        options: [
          { text: "Non, donne-moi aussi six croissants.", correct: 1, feedback: "😐 Le 'donne-moi' encore... Essayez : 'Non, je prendrai aussi...' C'est plus doux." },
          { text: "Oui, c'est tout. Combien je vous dois ?", correct: 2, feedback: "✅ Très naturel ! 'Combien je vous dois ?' est une façon élégante de demander le prix." },
          { text: "Combien ça coûte ?", correct: 1, feedback: "😐 Correct, mais un peu abrupt. 'Combien je vous dois ?' sonne plus français." }
        ]
      },
      {
        npc: "Ça fait 4 euros 50. Vous payez comment ?",
        npcPhon: "Sah fay kat uh-ROH sank-ahnt. Voo pay-AY koh-MAN ?",
        options: [
          { text: "Carte.", correct: 1, feedback: "😐 Compris, mais trop court. Essayez : 'Par carte, s'il vous plaît.'" },
          { text: "Je paye par carte bancaire, s'il vous plaît.", correct: 2, feedback: "✅ Parfait ! Toujours aussi poli. Le boulanger apprécie." },
          { text: "Espèces.", correct: 1, feedback: "😐 OK, mais ajoutez 'Je paye en...' pour être plus courtois." }
        ]
      },
      {
        npc: "Voilà votre monnaie et votre pain. Bonne journée !",
        npcPhon: "Vwah-LAH votr maw-NAY ay votr PAN. Bon zhoor-NAY !",
        options: [
          { text: "Ouais, au revoir.", correct: 0, feedback: "❌ 'Ouais' est très familier. Dans un commerce, utilisez 'Oui' ou 'Merci beaucoup'. Et souriez !" },
          { text: "Merci beaucoup, au revoir ! Bonne journée à vous aussi.", correct: 2, feedback: "✅ Excellent ! Vous avez terminé comme une vraie cliente française. Le boulanger sera ravi de vous revoir." },
          { text: "Merci, au revoir.", correct: 1, feedback: "😐 Correct, mais vous auriez pu souhaiter une bonne journée en retour. C'est le petit plus qui compte !" }
        ]
      }
    ]
  },

  {
    id: 'medecin',
    icon: '🩺',
    title: 'At the Doctor\'s',
    titleFr: "Chez le médecin",
    difficulty: 2,
    category: 'sante',
    npcName: 'Dr. Dubois',
    npcRole: 'Médecin généraliste',
    setting: 'Un cabinet médical calme. Vous attendez depuis 10 minutes. Le docteur vous fait entrer.',
    playerRole: 'Vous ne vous sentez pas bien depuis 3 jours. Vous avez de la fièvre.',
    steps: [
      {
        npc: "Bonjour, asseyez-vous. Qu'est-ce qui vous amène aujourd'hui ?",
        npcPhon: "Bon-ZHOOR, ah-SWAY-voo. Kes-kuh kee voo ah-MAN oh-zhoor-DWEE ?",
        options: [
          { text: "J'ai mal partout et j'ai de la fièvre.", correct: 1, feedback: "😐 OK, mais un peu vague. Le médecin va vous demander des précisions. Essayez d'être plus spécifique sur quand ça a commencé." },
          { text: "Je ne me sens pas bien depuis trois jours. J'ai de la fièvre et des frissons.", correct: 2, feedback: "✅ Très bien ! Vous donnez la durée ET les symptômes précis. Le médecin peut ainsi mieux vous aider." },
          { text: "Je suis malade.", correct: 0, feedback: "❌ Trop vague ! Le médecin ne peut rien faire avec ça. Décrivez vos symptômes : fièvre, douleurs, depuis quand..." }
        ]
      },
      {
        npc: "Je vais vous examiner. Vous êtes allergique à des médicaments ?",
        npcPhon: "Zhuh vay voo eg-zah-mee-NAY. Voo zay-tay al-lair-ZHEEK ah day may-dee-kah-MAHN ?",
        options: [
          { text: "Non, pas d'allergie.", correct: 1, feedback: "😐 Correct. Mais si vous aviez une allergie, il faudrait le dire clairement : 'Je suis allergique à...'" },
          { text: "Je suis allergique à la pénicilline.", correct: 2, feedback: "✅ ESSENTIEL ! Toujours mentionner vos allergies. Cela peut sauver des vies. Vous avez bien fait." },
          { text: "Je ne sais pas.", correct: 0, feedback: "❌ Dangereux ! Si vous ne savez pas, dites : 'Je ne suis pas sûr, je n'ai jamais pris d'antibiotiques.' Le médecin fera attention." }
        ]
      },
      {
        npc: "Vous avez une grippe. Je vous fais une ordonnance. Vous avez une mutuelle ?",
        npcPhon: "Voo zah-vay oon greep. Zhuh voo fahn oon or-don-NAHNS. Voo zah-vay oon mew-TWEL ?",
        options: [
          { text: "C'est quoi une mutuelle ?", correct: 1, feedback: "😐 C'est une question légitime quand on arrive en France. La mutuelle rembourse une partie des soins. Demandez au médecin de vous expliquer." },
          { text: "Oui, j'ai la mutuelle [MAAF]. Voici ma carte.", correct: 2, feedback: "✅ Parfait ! Avoir sa carte de mutuelle sur soi accélère les démarches. Bien joué." },
          { text: "Non, je paie tout.", correct: 0, feedback: "❌ En France, la mutuelle est très importante ! Renseignez-vous rapidement pour en souscrire une. Ça vous fera économiser beaucoup d'argent." }
        ]
      },
      {
        npc: "Prenez ce médicament trois fois par jour après les repas. Reposez-vous beaucoup.",
        npcPhon: "Pruh-NAY suh may-dee-kah-MAHN trwah fwa par zhoor ah-PREH lay ruh-PAH. Ruh-poh-SAY-voo boh-KOO.",
        options: [
          { text: "OK.", correct: 0, feedback: "❌ Trop sec ! Et le médecin vient de vous donner des instructions importantes. Montrez que vous avez compris." },
          { text: "Merci docteur. Je prendrai bien le médicament. Au revoir.", correct: 1, feedback: "😐 Bien, mais vous auriez pu confirmer que vous avez bien compris les instructions." },
          { text: "D'accord, trois fois par jour après manger. Merci beaucoup docteur, au revoir.", correct: 2, feedback: "✅ Excellent ! Vous répétez les instructions pour montrer que vous avez compris. C'est ce que font les Français." }
        ]
      }
    ]
  },

  {
    id: 'cafe',
    icon: '☕',
    title: 'At the Café',
    titleFr: 'Au café',
    difficulty: 1,
    category: 'restaurant',
    npcName: 'Claire',
    npcRole: 'Serveuse',
    setting: 'Un café parisien en terrasse. Il fait beau, les gens passent.',
    playerRole: 'Vous voulez prendre un café et un croissant.',
    steps: [
      {
        npc: "Bonjour ! Vous désirez ?",
        npcPhon: "Bon-ZHOOR ! Voo day-zee-RAY ?",
        options: [
          { text: "Un café.", correct: 1, feedback: "😐 OK, mais ajoutez 's'il vous plaît' et peut-être un sourire. En France, la politesse ouvre toutes les portes." },
          { text: "Bonjour ! Un café et un croissant, s'il vous plaît.", correct: 2, feedback: "✅ Parfait ! Vous avez répondu au 'Bonjour' (ESSENTIEL en France) et commandé poliment." },
          { text: "Donne-moi un café.", correct: 0, feedback: "❌ 'Donne-moi' est impoli. La serveuse pourrait mal le prendre. Toujours 'Je voudrais' ou 'S'il vous plaît'." }
        ]
      },
      {
        npc: "Un café allongé ou un express ?",
        npcPhon: "Uhn kah-FAY ah-lohn-ZHAY oo uhn ek-SPRES ?",
        options: [
          { text: "C'est quoi la différence ?", correct: 2, feedback: "✅ Bonne question ! L'allongé est plus long et léger, l'express est court et fort. C'est l'occasion d'apprendre." },
          { text: "Un express.", correct: 1, feedback: "😐 OK, mais vous avez loupé une occasion de poser une question et d'apprendre quelque chose sur la culture française." },
          { text: "Je ne comprends pas.", correct: 0, feedback: "❌ Ce n'est pas grave de ne pas comprendre, mais essayez plutôt : 'Pouvez-vous m'expliquer la différence ?' C'est plus engageant." }
        ]
      },
      {
        npc: "Voilà ! 5 euros 20. Vous restez manger ?",
        npcPhon: "Vwah-LAH ! Sank uh-ROH vahn. Voo ruh-STAY mahn-ZHAY ?",
        options: [
          { text: "Non, juste le café.", correct: 1, feedback: "😐 Correct, mais un peu abrupt. Essayez : 'Non merci, juste le café pour aujourd'hui.'" },
          { text: "Non merci, juste le petit-déjeuner. L'addition s'il vous plaît.", correct: 2, feedback: "✅ Poli et clair ! Et vous demandez l'addition en avance, c'est malin." },
          { text: "Combien ?", correct: 0, feedback: "❌ Trop direct. Elle vient de vous dire le prix. Écoutez attentivement, c'est aussi ça apprendre une langue." }
        ]
      }
    ]
  },

  {
    id: 'voisin',
    icon: '🏘️',
    title: 'With a Neighbour',
    titleFr: 'Avec un voisin',
    difficulty: 1,
    category: 'voisinage',
    npcName: 'Mme Lefranc',
    npcRole: 'Voisine',
    setting: 'Vous croisez votre voisine dans l'escalier. C'est une dame âgée très aimable.',
    playerRole: 'Vous habitez ici depuis peu. Vous voulez être sympathique avec vos voisins.',
    steps: [
      {
        npc: "Bonjour ! Vous êtes le nouveau voisin, c'est ça ? Bienvenue dans l'immeuble !",
        npcPhon: "Bon-ZHOOR ! Voo zayt luh nuh-VOH vwah-ZAN, say SAH ? Byan-VUH-new duh-ZAN lahn-MWEBL !",
        options: [
          { text: "Oui.", correct: 0, feedback: "❌ Trop court ! Votre voisine vient de vous souhaiter la bienvenue. Montrez que vous appréciez." },
          { text: "Oui, merci beaucoup ! Je m'appelle [votre prénom]. Enchanté !", correct: 2, feedback: "✅ Parfait ! Vous répondez chaleureusement, vous vous présentez, et vous utilisez 'Enchanté' — très français !" },
          { text: "Oui, merci.", correct: 1, feedback: "😐 Poli mais un peu froid. Vous auriez pu vous présenter. Les voisins sont importants en France !" }
        ]
      },
      {
        npc: "Je suis au deuxième étage. Vous venez d'où, si ce n'est pas indiscret ?",
        npcPhon: "Zhuh swee oh duh-ZYEM ay-TAHZH. Voo vuh-NEE d'OO, see suh nay pah an-dis-KRAY ?",
        options: [
          { text: "De Corée.", correct: 1, feedback: "😐 Vrai, mais trop court. Votre voisine pose une question amicale, développez un peu." },
          { text: "Je viens de Corée. J'habite ici avec ma famille.", correct: 2, feedback: "✅ Bien ! Vous répondez et ajoutez un détail personnel. Ça crée du lien." },
          { text: "Ça ne vous regarde pas.", correct: 0, feedback: "❌ Oh non ! 'Si ce n'est pas indiscret' signifie qu'elle sait que c'est une question personnelle. Elle est juste curieuse et amicale." }
        ]
      },
      {
        npc: "Ah la Corée, quel beau pays ! Vous vous plaisez ici à [Craon] ?",
        npcPhon: "Ah lah koh-RAY, kel boh pay-EE ! Voo voo PLEH-zay ee-SEE ah [krah-ON] ?",
        options: [
          { text: "Oui, c'est tranquille.", correct: 1, feedback: "😐 Correct, mais vous pourriez en dire un peu plus pour faire la conversation." },
          { text: "Oui beaucoup ! Les gens sont très accueillants. Et le marché est super.", correct: 2, feedback: "✅ Excellent ! Vous complimentez la ville et vous montrez que vous participez à la vie locale. Le marché !" },
          { text: "Bof.", correct: 0, feedback: "❌ 'Bof' est décontracté mais peut sembler négatif. Avec une voisine âgée qui fait un effort, soyez enthousiaste !" }
        ]
      },
      {
        npc: "Si vous avez besoin de quoi que ce soit, n'hésitez pas à frapper à ma porte !",
        npcPhon: "See voo zahvay buh-ZWAN duh kwah kuh suh SEE-t, nay-zay-tay PAH ah frah-PAY ah mah port !",
        options: [
          { text: "OK.", correct: 0, feedback: "❌ Trop sec ! Elle vient de vous offrir son aide. C'est un geste précieux en France. Remerciez-la chaleureusement." },
          { text: "C'est très gentil, merci beaucoup madame ! Bonne journée !", correct: 2, feedback: "✅ Parfait ! Vous remerciez, vous êtes poli, et vous lui souhaitez une bonne journée. Vous avez gagné une alliée dans l'immeuble !" },
          { text: "Merci.", correct: 1, feedback: "😐 Correct, mais un peu minimal. 'C'est très gentil' est une formule magique avec les personnes âgées en France." }
        ]
      }
    ]
  },

  {
    id: 'mairie',
    icon: '🏛️',
    title: 'At the Town Hall',
    titleFr: 'À la mairie',
    difficulty: 3,
    category: 'admin',
    npcName: 'Mme Bernard',
    npcRole: 'Agent administratif',
    setting: 'La mairie de votre commune. Il y a du monde, l'ambiance est un peu stressante.',
    playerRole: 'Vous voulez changer votre adresse sur vos papiers officiels.',
    steps: [
      {
        npc: "Bonjour, bienvenue. Vous avez pris rendez-vous ?",
        npcPhon: "Bon-ZHOOR, byan-VUH-new. Voo zah-vay PRAN rahn-day-VOO ?",
        options: [
          { text: "Non, je suis juste passé.", correct: 0, feedback: "❌ En mairie, il faut souvent un RDV. Sans RDV, vous risquez d'attendre très longtemps ou de ne pas être reçu." },
          { text: "Oui, j'ai rendez-vous à 14h avec [Mme Bernard].", correct: 2, feedback: "✅ Parfait ! Toujours préciser l'heure et le nom de la personne en mairie. C'est plus professionnel." },
          { text: "Je ne savais pas qu'il fallait un rendez-vous.", correct: 1, feedback: "😐 C'est compréhensible quand on arrive en France. Demandez poliment : 'Puis-je prendre rendez-vous pour une autre fois ?'" }
        ]
      },
      {
        npc: "Très bien. Quelle démarche souhaitez-vous effectuer ?",
        npcPhon: "Tray byan. Kel day-MAHRSH swah-tay-voo ay-fek-tew-AY ?",
        options: [
          { text: "Je veux changer mon adresse.", correct: 1, feedback: "😐 Correct, mais 'Je voudrais' est plus poli que 'Je veux' dans un contexte administratif." },
          { text: "Je voudrais faire un changement d'adresse, s'il vous plaît.", correct: 2, feedback: "✅ Excellent ! Poli, clair, professionnel. L'agente administrative apprécie ce ton." },
          { text: "Mon adresse est plus bonne.", correct: 0, feedback: "❌ 'Plus bonne' n'existe pas en français ! Dites : 'Mon adresse a changé' ou 'Je dois mettre à jour mon adresse.'" }
        ]
      },
      {
        npc: "D'accord. J'ai besoin de votre justificatif de domicile et d'une pièce d'identité.",
        npcPhon: "Doh-kor. Zhuh bee-ZWAHN duh votr zhu-stee-fee-kah-TEEF duh doh-mee-SEEL ay dun pee-YES dee-dahn-tee-TAY.",
        options: [
          { text: "Qu'est-ce que c'est un justificatif de domicile ?", correct: 2, feedback: "✅ Excellente question ! Un justificatif de domicile = facture EDF, eau, ou assurance habitation de moins de 3 mois. C'est ESSENTIEL en France." },
          { text: "Je n'ai rien sur moi.", correct: 0, feedback: "❌ Problème ! En mairie, il faut TOUJOURS avoir ses papiers. Revenez avec : ID + justificatif de domicile + ancien document à modifier." },
          { text: "Voici ma carte d'identité et ma facture EDF.", correct: 2, feedback: "✅ Parfait ! Vous êtes bien préparé. La facture EDF est le justificatif de domicile le plus courant en France." }
        ]
      },
      {
        npc: "C'est noté. Le changement sera effectif sous 48 heures. Vous recevrez un courrier de confirmation.",
        npcPhon: "Say noh-TAY. Luh shahn-ZHAH-MAN sair-rah ay-fek-TEEF soo kah-rahn-TEET-UR. Voo ruh-suh-VRAIR uhn koo-RYAY duh kohn-feer-mah-SYOHN.",
        options: [
          { text: "OK, merci.", correct: 1, feedback: "😐 Correct mais minimal. Essayez de confirmer que vous avez bien compris les délais." },
          { text: "D'accord, sous 48 heures. Merci beaucoup madame, bonne journée !", correct: 2, feedback: "✅ Parfait ! Vous répétez l'information importante (48h) pour confirmer votre compréhension. Très professionnel." },
          { text: "Je dois payer ?", correct: 0, feedback: "❌ Le changement d'adresse est gratuit en France ! Cette question peut surprendre l'agente. Demandez plutôt : 'Y a-t-il des frais ?' si vous n'êtes pas sûr." }
        ]
      }
    ]
  },

  {
    id: 'urgence',
    icon: '🚨',
    title: 'Emergency Call',
    titleFr: "Appel d'urgence",
    difficulty: 3,
    category: 'urgence',
    npcName: 'Opérateur SAMU',
    npcRole: 'Service d'aide médicale urgente',
    setting: "Votre enfant est tombé et s'est blessé au genou. Il saigne beaucoup. Vous appelez le 15.",
    playerRole: "Vous devez expliquer calmement la situation à l'opérateur d'urgence.",
    steps: [
      {
        npc: "SAMU 15, bonjour. Quelle est votre urgence ?",
        npcPhon: "SAH-mew kahz, Bon-ZHOOR. Kel ay votr oor-ZHAHNS ?",
        options: [
          { text: "Mon fils saigne ! Venez vite !", correct: 1, feedback: "😐 Votre inquiétude est compréhensible, mais restez calme. L'opérateur a besoin d'informations précises pour vous aider." },
          { text: "Bonjour, mon fils s'est blessé au genou et saigne beaucoup. Il a [9 ans].", correct: 2, feedback: "✅ Excellent ! Vous restez calme, vous décrivez la blessure, et vous donnez l'âge de l'enfant. C'est exactement ce qu'il faut faire." },
          { text: "Je ne sais pas quoi faire !", correct: 0, feedback: "❌ L'opérateur est là pour vous guider, mais il a besoin de savoir ce qui se passe. Respirez et décrivez la situation." }
        ]
      },
      {
        npc: "D'accord. Le saignement s'arrête-t-il si vous appuyez sur la blessure ?",
        npcPhon: "Doh-kor. Luh sayn-YAHM sah-RET-teel see voo zah-pwee-YAY sir lah blay-SUR ?",
        options: [
          { text: "Oui, un peu.", correct: 1, feedback: "😐 OK, c'est une bonne nouvelle. Mais précisez : ça saigne toujours à travers le pansement ou pas ?" },
          { text: "Oui, ça s'arrête quand j'appuie avec un linge propre.", correct: 2, feedback: "✅ Très bien ! Vous utilisez un linge PROPRE (important pour l'hygiène) et vous décrivez précisément la situation." },
          { text: "Non, ça coule partout !", correct: 1, feedback: "😐 Si le saignement ne s'arrête vraiment pas, l'opérateur va envoyer une ambulance. Restez calme et suivez ses instructions." }
        ]
      },
      {
        npc: "Très bien. Restez calme. Nettoyez la plaie avec de l'eau propre et mettez un pansement. Appelez-nous si le saignement reprend.",
        npcPhon: "Tray byan. Ruh-STAY kalm. Nay-twah-YAY lah PLEH ah-VECK duh loh proor ay may-TAY uhn pahn-SAH-mahn. Ah-play-NOO see luh sayn-YAHM ruh-PREE.",
        options: [
          { text: "OK, merci, au revoir.", correct: 1, feedback: "😐 Correct, mais vous auriez pu répéter les instructions pour confirmer que vous avez bien compris." },
          { text: "D'accord, je nettoie et je mets un pansement. Merci beaucoup.", correct: 2, feedback: "✅ Parfait ! Vous répétez les instructions, ce qui rassure l'opérateur que vous allez bien faire. Vous avez géré cette urgence comme il faut." },
          { text: "Je ne comprends pas !", correct: 0, feedback: "❌ Si vous ne comprenez pas, dites : 'Pouvez-vous répéter plus lentement ?' L'opérateur est habitué aux étrangers." }
        ]
      }
    ]
  },

  {
    id: 'gare',
    icon: '🚆',
    title: 'At the Train Station',
    titleFr: 'À la gare',
    difficulty: 2,
    category: 'transports',
    npcName: 'Agent SNCF',
    npcRole: 'Agent en gare',
    setting: 'La gare de Nantes. Vous voulez prendre un train pour Paris. Il y a du monde au guichet.',
    playerRole: 'Vous voulez acheter un billet et comprendre les horaires.',
    steps: [
      {
        npc: "Bonjour, je peux vous aider ?",
        npcPhon: "Bon-ZHOOR, zhuh puh voo zah-DAY ?",
        options: [
          { text: "Un billet pour Paris.", correct: 1, feedback: "😐 Compris, mais trop direct. Ajoutez 'Je voudrais' et 's'il vous plaît' pour être plus poli." },
          { text: "Bonjour, je voudrais un billet pour Paris, s'il vous plaît.", correct: 2, feedback: "✅ Parfait ! Vous avez répondu au bonjour (ESSENTIEL) et vous êtes poli. L'agent sera plus enclin à vous aider." },
          { text: "Paris.", correct: 0, feedback: "❌ Trop court et impersonnel. En France, toujours commencer par 'Bonjour' et finir par 's'il vous plaît'." }
        ]
      },
      {
        npc: "Un aller-simple ou un aller-retour ? Quel jour souhaitez-vous partir ?",
        npcPhon: "Uhn ah-lay-SAN-pl oo uhn ah-lay ruh-TOOR ? Kel zhoor swah-tay-voo par-TEER ?",
        options: [
          { text: "Aujourd'hui. Aller-retour.", correct: 1, feedback: "😐 Correct, mais vous auriez pu préciser la date de retour et demander les horaires disponibles." },
          { text: "Un aller-retour pour aujourd'hui, je reviens demain soir. Quels sont les horaires ?", correct: 2, feedback: "✅ Excellent ! Vous donnez toutes les informations nécessaires et vous posez une question utile." },
          { text: "Je ne sais pas.", correct: 0, feedback: "❌ L'agent a besoin d'informations pour vous aider. Réfléchissez à votre voyage avant de venir au guichet." }
        ]
      },
      {
        npc: "Le prochain départ est à 14h30, voie B. 47 euros l'aller-retour. Ça vous va ?",
        npcPhon: "Luh proh-SHAN day-PAR ay ah kah-RAHN-TWAH, vwah B. Kah-RAHN-TEH-SET uh-ROH lah-lay-ruh-TOOR. Sah voo VAH ?",
        options: [
          { text: "C'est cher.", correct: 0, feedback: "❌ En France, on ne négocie pas les prix à la SNCF ! Si c'est trop cher, demandez : 'Y a-t-il un tarif réduit ?'" },
          { text: "Parfait, je prends. Je paye comment ?", correct: 2, feedback: "✅ Bien ! Vous confirmez et vous demandez les moyens de paiement. Efficace." },
          { text: "Y a-t-il un tarif moins cher ?", correct: 1, feedback: "😐 Bonne question ! Il existe des cartes de réduction (Carte Avantage). Renseignez-vous." }
        ]
      },
      {
        npc: "Par carte ou espèces. Votre billet est échangeable et remboursable. Bon voyage !",
        npcPhon: "Par kart oo ay-SPES. Voh-tuh bee-YAY ay tayk-SHAHN-zhabl ay rahn-boor-SAH-bluh. Bon vwah-YAHZH !",
        options: [
          { text: "OK.", correct: 0, feedback: "❌ Trop sec ! L'agent vient de vous donner des informations importantes et de vous souhaiter bon voyage. Remerciez !" },
          { text: "Merci beaucoup ! Bonne journée !", correct: 2, feedback: "✅ Parfait ! Poli et enthousiaste. Vous êtes prêt pour votre voyage en train français !" },
          { text: "Merci.", correct: 1, feedback: "😐 Minimal. 'Bonne journée' en retour est toujours apprécié en France." }
        ]
      }
    ]
  }
];
