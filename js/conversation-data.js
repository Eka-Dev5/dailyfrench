// ================================================================
// CONVERSATION-DATA.JS — Daily French 🥖 v1.0
// Scénarios de conversation par niveau, alignés avec LESSONS_DATA 1-20
// ================================================================

const CONVERSATION_SCENARIOS = {

  // NIVEAU 1-2 : Débutant (Leçons 1-2)
  boulanger: {
    id: 'boulanger',
    icon: '🥖',
    title: 'At the Bakery',
    titleFr: 'À la boulangerie',
    level: 1,
    difficulty: 1,
    vocabulary: ['bonjour', 'je voudrais', 's\'il vous plaît', 'c\'est combien', 'merci', 'au revoir'],
    setting: 'You enter a French bakery. The baker greets you.',
    dialogue: [
      { speaker: 'baker', text: 'Bonjour Madame ! Que désirez-vous aujourd\'hui ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonjour ! Je voudrais une baguette, s\'il vous plaît.', correct: true, feedback: 'Parfait ! Polite and clear.' },
        { text: 'Donnez-moi une baguette.', correct: false, feedback: 'Too direct! Use "Je voudrais" + "s\'il vous plaît".' },
        { text: 'Une baguette.', correct: false, feedback: 'Always say "Bonjour" first, and add "s\'il vous plaît"!' }
      ]},
      { speaker: 'baker', text: 'Voilà ! Ce sera tout ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Oui, c\'est tout. Combien ça fait ?', correct: true, feedback: 'Excellent! "C\'est tout" + asking for the price naturally.' },
        { text: 'Non, je veux aussi un pain au chocolat.', correct: false, feedback: 'Use "Je voudrais" not "Je veux" — and add "s\'il vous plaît"!' },
        { text: 'C\'est combien ?', correct: false, feedback: 'You forgot to say if that\'s everything! Say "C\'est tout" first.' }
      ]},
      { speaker: 'baker', text: 'Ça fait 2 euros 40. Vous payez comment ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Je paie par carte, s\'il vous plaît. Merci beaucoup, au revoir !', correct: true, feedback: 'Parfait! Polite payment + warm goodbye.' },
        { text: 'Carte.', correct: false, feedback: 'Too short! Say "Je paie par carte" and always end with "Merci, au revoir".' },
        { text: 'En espèces.', correct: false, feedback: 'Add "s\'il vous plaît" and a proper goodbye: "Merci, au revoir !"' }
      ]}
    ]
  },

  marché: {
    id: 'marché',
    icon: '🛒',
    title: 'At the Market',
    titleFr: 'Au marché',
    level: 2,
    difficulty: 1,
    vocabulary: ['un kilo de', 'des tomates', 'c\'est combien', 'trop cher', 'un peu moins'],
    setting: 'You\'re at a French market buying vegetables.',
    dialogue: [
      { speaker: 'vendor', text: 'Bonjour ! Regardez, mes tomates sont magnifiques aujourd\'hui !' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonjour ! Elles sont belles, en effet. Je voudrais un kilo de tomates, s\'il vous plaît.', correct: true, feedback: 'Excellent! You complimented + used polite request.' },
        { text: 'Donnez-moi un kilo de tomates.', correct: false, feedback: 'Too direct! Compliment first, use "Je voudrais".' },
        { text: 'Un kilo de tomates.', correct: false, feedback: 'Always start with "Bonjour" and use "Je voudrais... s\'il vous plaît"!' }
      ]},
      { speaker: 'vendor', text: 'Voilà ! C\'est 3 euros 50 le kilo.' },
      { speaker: 'you', text: '___', choices: [
        { text: 'C\'est un peu cher... Vous ne pouvez pas faire 3 euros ?', correct: true, feedback: 'Bien joué ! Gentle negotiation is very French at markets.' },
        { text: 'C\'est trop cher !', correct: false, feedback: 'Too blunt! Say "un peu cher" and ask gently: "Vous ne pouvez pas faire...?"' },
        { text: 'D\'accord.', correct: false, feedback: 'You can negotiate gently! Try "Vous ne pouvez pas faire 3 euros?"' }
      ]},
      { speaker: 'vendor', text: 'Alors, 3 euros 20, c\'est mon dernier prix !' },
      { speaker: 'you', text: '___', choices: [
        { text: 'C\'est parfait, merci ! Et je voudrais aussi une botte de basilic.', correct: true, feedback: 'Parfait! You accepted gracefully and continued shopping.' },
        { text: 'Non, c\'est encore trop.', correct: false, feedback: '3€20 is a good deal! Accept graciously: "C\'est parfait, merci !"' },
        { text: 'Bon, d\'accord.', correct: false, feedback: 'Your tone sounds reluctant. Be warmer: "C\'est parfait, merci !"' }
      ]}
    ]
  },

  // NIVEAU 3-5 : Débutant+ (Leçons 3-5)
  jardin: {
    id: 'jardin',
    icon: '🌿',
    title: 'Garden Chat with a Neighbour',
    titleFr: 'Discussion jardin avec un voisin',
    level: 3,
    difficulty: 2,
    vocabulary: ['arroser', 'la pelouse', 'les fleurs', 'tondre', 'beau temps'],
    setting: 'Your neighbour is in the garden. You stop to chat.',
    dialogue: [
      { speaker: 'neighbour', text: 'Bonjour ! Il fait beau aujourd\'hui, n\'est-ce pas ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonjour Madame ! Oui, il fait très beau. Votre jardin est magnifique !', correct: true, feedback: 'Parfait! Compliment + weather chat = classic French neighbour talk.' },
        { text: 'Oui, beau temps.', correct: false, feedback: 'Too short! Add "Bonjour Madame" and a compliment about their garden.' },
        { text: 'Je dois arroser mes plantes.', correct: false, feedback: 'You skipped the social ritual! Say "Bonjour" and chat about weather first.' }
      ]},
      { speaker: 'neighbour', text: 'Merci ! Vous avez des roses ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Oui, j\'en ai quelques-unes. Mais je ne sais pas quand les tailler.', correct: true, feedback: 'Bien! You answered + asked for advice — very French!' },
        { text: 'Non, je n\'aime pas les roses.', correct: false, feedback: 'A bit negative! Even if true, soften it: "Pas encore, mais j\'aimerais en avoir".' },
        { text: 'Oui.', correct: false, feedback: 'Too short! Expand and ask a question to keep the conversation going.' }
      ]},
      { speaker: 'neighbour', text: 'En février, c\'est le meilleur moment. Vous devez aussi tondre la pelouse bientôt !' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Merci pour le conseil ! Je vais le faire ce week-end. Bonne journée !', correct: true, feedback: 'Parfait! You thanked for advice + planned action + warm goodbye.' },
        { text: 'D\'accord.', correct: false, feedback: 'Too brief! Thank them: "Merci pour le conseil" and say your plans.' },
        { text: 'Je n\'ai pas de tondeuse.', correct: false, feedback: 'That ends the conversation negatively. Try "Je vais louer une tondeuse ce week-end"!' }
      ]}
    ]
  },

  voisin: {
    id: 'voisin',
    icon: '🏘️',
    title: 'Meeting a New Neighbour',
    titleFr: 'Rencontrer un nouveau voisin',
    level: 4,
    difficulty: 2,
    vocabulary: ['depuis', 'nouveau', 'la mairie', 'connaître', 'sympa'],
    setting: 'A new neighbour has moved in. You introduce yourself.',
    dialogue: [
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonjour ! Je suis votre voisine, je m\'appelle Sarah. Vous habitez ici depuis longtemps ?', correct: true, feedback: 'Parfait! Introduction + question about their history here.' },
        { text: 'Salut, je suis Sarah.', correct: false, feedback: 'Too informal! Use "Bonjour" + "je suis votre voisine" with new neighbours.' },
        { text: 'Vous êtes nouveau ici ?', correct: false, feedback: 'You skipped "Bonjour" and your name! Always introduce yourself first.' }
      ]},
      { speaker: 'neighbour', text: 'Bonjour Sarah ! Enchanté. Je suis arrivé la semaine dernière. Je viens de Paris.' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Ah, Paris ! C\'est une belle ville. Vous connaissez déjà la mairie et le marché ?', correct: true, feedback: 'Excellent! You acknowledged + offered practical info. Very helpful!' },
        { text: 'Moi aussi j\'aime Paris.', correct: false, feedback: 'OK but self-centred. Ask about their needs: "Vous connaissez...?"' },
        { text: 'Le marché est le jeudi.', correct: false, feedback: 'A bit abrupt! Soften: "Si vous ne connaissez pas, le marché est le jeudi".' }
      ]},
      { speaker: 'neighbour', text: 'Non, pas encore. C\'est par où ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'C\'est tout près ! Je peux vous montrer samedi si vous voulez. On pourrait y aller ensemble ?', correct: true, feedback: 'Génial! You offered help + made a social invitation. Very French!' },
        { text: 'C\'est à côté de la pharmacie.', correct: false, feedback: 'Helpful but cold. Offer to show them: "Je peux vous montrer"!' },
        { text: 'Prenez à gauche après la boulangerie.', correct: false, feedback: 'Directions are good, but offering to go together is much friendlier!' }
      ]}
    ]
  },

  restaurant: {
    id: 'restaurant',
    icon: '🍽️',
    title: 'At the Restaurant',
    titleFr: 'Au restaurant',
    level: 5,
    difficulty: 2,
    vocabulary: ['une table', 'la carte', 'je voudrais', 'l\'addition', 'sans'],
    setting: 'You enter a restaurant for dinner.',
    dialogue: [
      { speaker: 'waiter', text: 'Bonsoir Madame, Monsieur. Une table pour combien ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonsoir ! Une table pour deux, s\'il vous plaît. Près de la fenêtre, si possible.', correct: true, feedback: 'Parfait! Polite + specific request. Very French!' },
        { text: 'Deux personnes.', correct: false, feedback: 'Too short! Say "Une table pour deux, s\'il vous plaît" and add a preference.' },
        { text: 'Table pour deux.', correct: false, feedback: 'Missing "Bonsoir" and "s\'il vous plaît"! Always be polite.' }
      ]},
      { speaker: 'waiter', text: 'Voici la carte. Je reviens dans deux minutes.' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Merci. Je voudrais aussi un verre d\'eau, s\'il vous plaît.', correct: true, feedback: 'Bien! You thanked + made an additional polite request.' },
        { text: 'Dépêchez-vous.', correct: false, feedback: 'Rude! Never rush French waiters. Be patient and polite.' },
        { text: 'OK.', correct: false, feedback: 'Too brief! Say "Merci" and you can ask for water while deciding.' }
      ]},
      { speaker: 'waiter', text: 'Vous avez choisi ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Oui, je voudrais le poulet rôti, sans ail, s\'il vous plaît. Et mon mari prend le poisson.', correct: true, feedback: 'Excellent! Clear order + dietary requirement + ordering for your companion.' },
        { text: 'Le poulet.', correct: false, feedback: 'Too brief! Specify, add "s\'il vous plaît", mention any dietary needs.' },
        { text: 'Je veux le poulet.', correct: false, feedback: 'Use "Je voudrais" not "Je veux" — and always add "s\'il vous plaît"!' }
      ]},
      { speaker: 'waiter', text: 'Très bien. Et comme boisson ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Une bouteille de vin rouge, et de l\'eau gazeuse pour mon mari. Merci !', correct: true, feedback: 'Parfait! You ordered drinks for both + polite ending.' },
        { text: 'Du vin.', correct: false, feedback: 'Specify: "Une bouteille de vin rouge" and ask about your companion\'s drink too.' },
        { text: 'Rien.', correct: false, feedback: 'Too abrupt! Say "Juste de l\'eau, merci" or specify what you want.' }
      ]}
    ]
  },

  // NIVEAU 6-8 : Intermédiaire (Leçons 6-8)
  pharmacie: {
    id: 'pharmacie',
    icon: '💊',
    title: 'At the Pharmacy',
    titleFr: 'À la pharmacie',
    level: 6,
    difficulty: 2,
    vocabulary: ['j\'ai mal à', 'depuis', 'médicament', 'ordonnance', 'contre'],
    setting: 'You have a headache and need painkillers.',
    dialogue: [
      { speaker: 'pharmacist', text: 'Bonjour Madame. Qu\'est-ce qui vous amène ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonjour. J\'ai mal à la tête depuis ce matin. Auriez-vous quelque chose contre la douleur ?', correct: true, feedback: 'Parfait! Symptom + duration + polite request for pain relief.' },
        { text: 'J\'ai mal à la tête.', correct: false, feedback: 'Too brief! Add "depuis quand" and ask politely for help.' },
        { text: 'Donnez-moi des cachets.', correct: false, feedback: 'Too direct! Describe symptoms and ask for advice, not demand.' }
      ]},
      { speaker: 'pharmacist', text: 'Bien sûr. Avez-vous déjà pris quelque chose ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Non, rien encore. Je préfère demander conseil d\'abord.', correct: true, feedback: 'Excellent! Shows you respect their expertise — very French!' },
        { text: 'Non.', correct: false, feedback: 'Too short! Explain why you came to them: "Je préfère demander conseil".' },
        { text: 'Je veux du paracétamol.', correct: false, feedback: 'Don\'t name the drug yourself! Let the pharmacist recommend.' }
      ]},
      { speaker: 'pharmacist', text: 'Je vous recommande ce médicament. Prenez-en un comprimé toutes les 6 heures, maximum 3 par jour.' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Merci beaucoup pour vos conseils. Puis-je payer par carte ?', correct: true, feedback: 'Parfait! You thanked + confirmed payment method. Very polite.' },
        { text: 'D\'accord.', correct: false, feedback: 'Too brief! Thank them for advice: "Merci pour vos conseils".' },
        { text: 'C\'est combien ?', correct: false, feedback: 'You can ask the price, but thank them first for their advice!' }
      ]}
    ]
  },

  mairie: {
    id: 'mairie',
    icon: '🏛️',
    title: 'At the Town Hall',
    titleFr: 'À la mairie',
    level: 7,
    difficulty: 3,
    vocabulary: ['je voudrais', 'déclarer', 'changer', 'papiers', 'rendez-vous'],
    setting: 'You need to change your address at the town hall.',
    dialogue: [
      { speaker: 'clerk', text: 'Bonjour. Quelle est la nature de votre démarche ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonjour Madame. Je voudrais déclarer un changement d\'adresse, s\'il vous plaît.', correct: true, feedback: 'Parfait! Formal, clear, and polite. Exactly right for admin.' },
        { text: 'Je change d\'adresse.', correct: false, feedback: 'Too informal for admin! Use "Je voudrais déclarer" + "s\'il vous plaît".' },
        { text: 'J\'ai besoin de papiers.', correct: false, feedback: 'Too vague! Specify exactly what you need: "changement d\'adresse".' }
      ]},
      { speaker: 'clerk', text: 'Très bien. Votre carte d\'identité et un justificatif de domicile de moins de 3 mois, s\'il vous plaît.' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Voici ma carte d\'identité et ma facture EDF de ce mois. Est-ce que cela suffit ?', correct: true, feedback: 'Excellent! You provided documents + asked if they\'re sufficient.' },
        { text: 'Je n\'ai pas de facture.', correct: false, feedback: 'Negative! Say what you DO have: "J\'ai ma facture EDF, est-ce que ça suffit?"' },
        { text: 'Voilà.', correct: false, feedback: 'Too brief! Name the documents and ask if they\'re OK.' }
      ]},
      { speaker: 'clerk', text: 'C\'est parfait. Je vous remets un récépissé. La carte sera prête dans 15 jours.' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Merci beaucoup. Puis-je venir la récupérer sans rendez-vous, ou faut-il en prendre un ?', correct: true, feedback: 'Parfait! You thanked + asked about the collection process. Very thorough!' },
        { text: 'OK, merci.', correct: false, feedback: 'Too brief! Ask about next steps: "Comment je récupère la carte?"' },
        { text: '15 jours ! C\'est long.', correct: false, feedback: 'Don\'t complain about French admin speed! Just accept and ask practical questions.' }
      ]}
    ]
  },

  // NIVEAU 9-11 : Intermédiaire+ (Leçons 9-11)
  médecin: {
    id: 'médecin',
    icon: '🩺',
    title: 'At the Doctor',
    titleFr: 'Chez le médecin',
    level: 9,
    difficulty: 3,
    vocabulary: ['depuis quand', 'les symptômes', 'ordonnance', 'suivre', 'traitement'],
    setting: 'You have a doctor\'s appointment for a persistent cough.',
    dialogue: [
      { speaker: 'doctor', text: 'Bonjour Madame. Qu\'est-ce qui vous amène aujourd\'hui ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonjour Docteur. Je tousse depuis une semaine et j\'ai mal à la gorge. J\'ai aussi de la fièvre depuis hier.', correct: true, feedback: 'Parfait! Symptom + duration + additional details. Very clear.' },
        { text: 'Je suis malade.', correct: false, feedback: 'Too vague! Describe specific symptoms and when they started.' },
        { text: 'J\'ai besoin d\'antibiotiques.', correct: false, feedback: 'Don\'t self-diagnose! Describe symptoms and let the doctor decide.' }
      ]},
      { speaker: 'doctor', text: 'Je vais vous examiner. Ouvrez la bouche et dites "Aaaaah".' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Aaaaah. Docteur, est-ce que c\'est grave ?', correct: true, feedback: 'Bien! You followed instructions + asked a natural concern.' },
        { text: 'Je déteste ça.', correct: false, feedback: 'Don\'t complain! Just cooperate and ask relevant questions after.' },
        { text: 'D\'accord.', correct: false, feedback: 'A bit passive. After cooperating, ask about your condition.' }
      ]},
      { speaker: 'doctor', text: 'Ce n\'est pas grave, c\'est une angine. Je vous fais une ordonnance pour 5 jours.' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Merci Docteur. Dois-je reprendre rendez-vous dans une semaine, ou seulement si ça ne va pas mieux ?', correct: true, feedback: 'Excellent! You asked about follow-up — very responsible and French!' },
        { text: 'Merci.', correct: false, feedback: 'Too brief! Ask about follow-up: "Dois-je reprendre rendez-vous?"' },
        { text: 'C\'est tout ?', correct: false, feedback: 'Sounds dismissive! Ask properly about follow-up care.' }
      ]}
    ]
  },

  banque: {
    id: 'banque',
    icon: '🏦',
    title: 'At the Bank',
    titleFr: 'À la banque',
    level: 10,
    difficulty: 3,
    vocabulary: ['ouvrir un compte', 'RIB', 'virement', 'découvert', 'agios'],
    setting: 'You want to open a bank account in France.',
    dialogue: [
      { speaker: 'advisor', text: 'Bonjour Madame. Comment puis-je vous aider ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonjour. Je voudrais ouvrir un compte courant, s\'il vous plaît. Je viens de m\'installer en France.', correct: true, feedback: 'Parfait! Clear request + context (newly arrived). Very helpful.' },
        { text: 'Je veux un compte.', correct: false, feedback: 'Too vague! Specify "compte courant" and mention you\'re new in France.' },
        { text: 'J\'ai besoin d\'une carte bancaire.', correct: false, feedback: 'You need an account first! Ask for "compte courant" first.' }
      ]},
      { speaker: 'advisor', text: 'Très bien. Votre passeport, un justificatif de domicile et votre contrat de travail, s\'il vous plaît.' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Voici mon passeport et ma facture EDF. Pour le contrat, je suis auto-entrepreneuse — voici mon attestation URSSAF.', correct: true, feedback: 'Excellent! You provided what you have + explained your situation clearly.' },
        { text: 'Je n\'ai pas de contrat.', correct: false, feedback: 'Don\'t just say what you lack! Explain your situation: "Je suis auto-entrepreneuse".' },
        { text: 'Voilà.', correct: false, feedback: 'Name each document and explain if your situation is special.' }
      ]},
      { speaker: 'advisor', text: 'Parfait. Votre compte sera actif dans 48h. Souhaitez-vous un découvert autorisé ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Oui, de 500 euros si possible. Quels sont les agios en cas de dépassement ?', correct: true, feedback: 'Parfait! You accepted + asked about fees. Very financially aware!' },
        { text: 'Oui.', correct: false, feedback: 'Too brief! Ask about the overdraft limit and fees: "Quels sont les agios?"' },
        { text: 'Non merci.', correct: false, feedback: 'A bit rigid! An overdraft can be useful — ask about terms first.' }
      ]}
    ]
  },

  // NIVEAU 12-14 : Avancé (Leçons 12-14)
  gare: {
    id: 'gare',
    icon: '🚆',
    title: 'At the Train Station',
    titleFr: 'À la gare SNCF',
    level: 12,
    difficulty: 3,
    vocabulary: ['billet', 'quai', 'retard', 'correspondance', 'composter'],
    setting: 'You need to buy a train ticket and find your platform.',
    dialogue: [
      { speaker: 'agent', text: 'Bonjour. Destination et date ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonjour. Je voudrais un aller-retour pour Lyon, samedi prochain, départ le matin si possible.', correct: true, feedback: 'Parfait! Specific: destination, date, return, time preference.' },
        { text: 'Lyon.', correct: false, feedback: 'Too brief! Specify date, return, and time preference.' },
        { text: 'Un billet pour Lyon.', correct: false, feedback: 'Need more details! Say "aller-retour" + date + time preference.' }
      ]},
      { speaker: 'agent', text: 'Il y a un TGV à 8h30 et un autre à 10h15. Lequel préférez-vous ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Le 8h30, s\'il vous plaît. Y a-t-il une correspondance, ou c\'est direct ?', correct: true, feedback: 'Excellent! You chose + asked about transfers — very practical.' },
        { text: 'Le premier.', correct: false, feedback: 'Specify "8h30" and ask if it\'s direct: "C\'est direct?"' },
        { text: 'Le moins cher.', correct: false, feedback: 'Valid concern, but first confirm if it\'s direct! Ask "Y a-t-il une correspondance?"' }
      ]},
      { speaker: 'agent', text: 'C\'est direct, 2h de trajet. Quelle classe ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Deuxième classe, s\'il vous plaît. Et je voudrais un billet modifiable, au cas où.', correct: true, feedback: 'Parfait! You chose class + asked for flexibility. Very smart!' },
        { text: 'Deuxième.', correct: false, feedback: 'Add "s\'il vous plaît" and consider asking for a flexible ticket.' },
        { text: 'La moins chère.', correct: false, feedback: 'You already know 2nd class is cheaper! Just say "Deuxième classe".' }
      ]}
    ]
  },

  // NIVEAU 15-17 : Avancé+ (Leçons 15-17)
  telephone: {
    id: 'telephone',
    icon: '📞',
    title: 'Phone Call — Appointment',
    titleFr: 'Appel téléphonique — Rendez-vous',
    level: 15,
    difficulty: 3,
    vocabulary: ['appeler', 'décaler', 'confirmer', 'rappeler', 'indisponible'],
    setting: 'You need to reschedule a dentist appointment by phone.',
    dialogue: [
      { speaker: 'receptionist', text: 'Cabinet dentaire Dubois, bonjour.' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonjour Madame. C\'est Madame Smith à l\'appareil. Je voudrais décaler mon rendez-vous de demain, s\'il vous plaît.', correct: true, feedback: 'Parfait! Identify yourself + state purpose clearly. Very professional.' },
        { text: 'Je peux pas venir demain.', correct: false, feedback: 'Too informal! Identify yourself and use "Je voudrais décaler".' },
        { text: 'Rendez-vous demain, annulez.', correct: false, feedback: 'Rude and unclear! Say who you are and what you need politely.' }
      ]},
      { speaker: 'receptionist', text: 'Bien sûr Madame Smith. Quand seriez-vous disponible ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Je suis disponible jeudi ou vendredi après-midi, après 14h. Auriez-vous une place ces jours-là ?', correct: true, feedback: 'Excellent! You gave options + asked if they have availability. Very efficient.' },
        { text: 'Je ne sais pas.', correct: false, feedback: 'Not helpful! Give them options: "Je suis disponible..."' },
        { text: 'La semaine prochaine.', correct: false, feedback: 'Too vague! Specify days and times: "Jeudi ou vendredi après 14h".' }
      ]},
      { speaker: 'receptionist', text: 'Jeudi 15h, c\'est possible. Je vous confirme ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Oui, parfait. Merci beaucoup. Pourriez-vous m\'envoyer un SMS de rappel la veille ?', correct: true, feedback: 'Parfait! You confirmed + asked for a reminder. Very organised!' },
        { text: 'D\'accord.', correct: false, feedback: 'Too brief! Confirm warmly and ask for a reminder if needed.' },
        { text: 'Oui.', correct: false, feedback: 'Too short! Be warmer: "Oui, parfait, merci beaucoup" and ask for confirmation details.' }
      ]}
    ]
  },

  // NIVEAU 18-20 : Expert (Leçons 18-20)
  urgence: {
    id: 'urgence',
    icon: '🚑',
    title: 'Emergency — A&E',
    titleFr: 'Urgences',
    level: 18,
    difficulty: 4,
    vocabulary: ['urgences', 'douleur', 'brûlure', 'chute', 'inconscient'],
    setting: 'You accompany your child to A&E after a fall.',
    dialogue: [
      { speaker: 'nurse', text: 'Les urgences. Quel est le motif de votre venue ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonsoir. Mon fils est tombé de son vélo. Il a une douleur vive au bras et il ne peut pas le bouger.', correct: true, feedback: 'Parfait! Clear: what happened, where it hurts, severity.' },
        { text: 'Mon fils a mal.', correct: false, feedback: 'Too vague! Specify what happened, where, and severity.' },
        { text: 'Accident vélo.', correct: false, feedback: 'Too brief! Give full details: "tombé de son vélo", "douleur vive au bras".' }
      ]},
      { speaker: 'nurse', text: 'Il est conscient ? Respire-t-il normalement ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Oui, il est conscient et il respire normalement. Mais il a très mal et il pleure beaucoup.', correct: true, feedback: 'Excellent! You answered both questions + added emotional state.' },
        { text: 'Oui.', correct: false, feedback: 'Too brief! Answer both questions fully and add relevant details.' },
        { text: 'Il va bien.', correct: false, feedback: 'If he\'s in A&E, he\'s not "bien"! Be accurate: "il est conscient mais il a très mal".' }
      ]},
      { speaker: 'nurse', text: 'D\'accord. Je prépare un brancard. Vous avez la carte Vitale ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Oui, la voici. Et j\'ai aussi son carnet de vaccination. Dois-je remplir un formulaire ?', correct: true, feedback: 'Parfait! You provided documents + offered to fill forms. Very prepared!' },
        { text: 'Oui.', correct: false, feedback: 'Too brief! Hand over the card and ask about next steps.' },
        { text: 'Je l\'ai oubliée.', correct: false, feedback: 'Always bring the carte Vitale! If forgotten, say "Je suis désolée, je l\'ai oubliée, mais j\'ai son numéro de sécurité sociale".' }
      ]}
    ]
  },

  colloquial: {
    id: 'colloquial',
    icon: '🗣️',
    title: 'Real French — Colloquial Chat',
    titleFr: 'Français authentique — Conversation informelle',
    level: 20,
    difficulty: 4,
    vocabulary: ['du coup', 'franchement', 'bof', 'nickel', 'pas terrible'],
    setting: 'You bump into a French friend at the market. Casual chat.',
    dialogue: [
      { speaker: 'friend', text: 'Hé ! Ça va ? Tu fais les courses ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Salut ! Oui, je fais les courses. Du coup, je prépare un dîner ce soir. Et toi, tu vas où ?', correct: true, feedback: 'Parfait! "Du coup" + natural follow-up question. Very authentic!' },
        { text: 'Oui, je fais les courses.', correct: false, feedback: 'Too brief! Add "du coup" and ask them something back.' },
        { text: 'Bonjour. Je vais au marché.', correct: false, feedback: 'Too formal for a friend! Use "salut" and be casual.' }
      ]},
      { speaker: 'friend', text: 'Moi, je vais chez ma mère. Franchement, ce restaurant d\'hier, bof...' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Ah oui ? Pas terrible ? Moi, j\'ai trouvé le service nickel, mais la nourriture, quand même...', correct: true, feedback: 'Génial! You used "pas terrible", "nickel", "quand même" — pure real French!' },
        { text: 'C\'était mauvais ?', correct: false, feedback: 'Too direct! Use "pas terrible" and "quand même" like a French person.' },
        { text: 'Je suis désolé.', correct: false, feedback: 'No need to apologise! Engage with their opinion using colloquial French.' }
      ]},
      { speaker: 'friend', text: 'Exactement ! Du coup, on se retrouve au café du coin samedi ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Ça marche ! À samedi alors. Et si le café est fermé, on essaie le nouveau bistrot ?', correct: true, feedback: 'Parfait! "Ça marche" + backup plan. Pure French pragmatism!' },
        { text: 'D\'accord.', correct: false, feedback: 'Too brief! Use "Ça marche" and add a contingency plan.' },
        { text: 'Oui, samedi.', correct: false, feedback: 'A bit dry! Be more enthusiastic: "Ça marche ! À samedi !"' }
      ]}
    ]
  }

};

// ================================================================
// Export
// ================================================================
if (typeof window !== 'undefined') {
  window.CONVERSATION_SCENARIOS = CONVERSATION_SCENARIOS;
}
