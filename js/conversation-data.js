  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 8 — Weather
  // Leçon 8 : Il fait beau, Il pleut, Il fait chaud/froid
  // ═══════════════════════════════════════════════════════════════
  8: {
    id: 'meteo_marche',
    icon: '🌤️',
    title: 'Chatting About Weather',
    titleFr: 'Discuter de la météo',
    level: 8,
    difficulty: 2,
    requiredLesson: 8,
    vocabulary: ['il fait beau', 'il pleut', 'il fait chaud', 'il fait froid', 'demain', 'le printemps'],
    setting: 'You meet your neighbour at the market. You talk about the weather.',
    dialogue: [
      { speaker: 'neighbour', text: 'Il fait beau aujourd\'hui, n\'est-ce pas ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Oui, il fait très beau ! Mais demain il va pleuvoir, je pense.', correct: true, feedback: 'Parfait! You agreed + made a prediction. Classic French weather chat!' },
        { text: 'Oui.', correct: false, feedback: 'Too brief! Expand: "il fait très beau" and add a prediction.' },
        { text: 'Je n\'aime pas la pluie.', correct: false, feedback: 'A bit negative! Keep it light and conversational.' }
      ]},
      { speaker: 'neighbour', text: 'Ah, vous avez vu la météo ? Moi, je préfère le printemps.' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Moi aussi ! Le printemps est ma saison préférée. Les fleurs, la lumière...', correct: true, feedback: 'Excellent! You shared your preference + added poetic detail. Very French!' },
        { text: 'L\'hiver est mieux.', correct: false, feedback: 'A bit blunt! Find common ground first: "Moi aussi, le printemps..."' },
        { text: 'Je ne regarde pas la météo.', correct: false, feedback: 'That ends the conversation! Engage with their preference instead.' }
      ]}
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 9 — Daily Routine & Verbs
  // Leçon 9 : Je me réveille, Je me lève, Je me couche
  // ═══════════════════════════════════════════════════════════════
  9: {
    id: 'routine_quotidienne',
    icon: '⏰',
    title: 'Talking About Your Day',
    titleFr: 'Parler de sa journée',
    level: 9,
    difficulty: 2,
    requiredLesson: 9,
    vocabulary: ['je me réveille', 'je me lève', 'je me couche', 'tôt', 'tard', 'd\'habitude'],
    setting: 'Your colleague asks about your morning routine.',
    dialogue: [
      { speaker: 'colleague', text: 'Vous vous levez tôt le matin ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Oui, d\'habitude je me réveille à 6h et je me lève tout de suite.', correct: true, feedback: 'Parfait! "D\'habitude" + specific times. Very natural!' },
        { text: 'Oui, tôt.', correct: false, feedback: 'Too brief! Give details: "d\'habitude", specific time, what you do next.' },
        { text: 'Je déteste le matin.', correct: false, feedback: 'Too negative! Keep it neutral or positive when chatting with colleagues.' }
      ]},
      { speaker: 'colleague', text: 'Et le soir, vous vous couchez tard ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Non, je me couche vers 22h. J\'aime lire un peu avant de dormir.', correct: true, feedback: 'Excellent! You answered + added a charming detail about reading. Very French!' },
        { text: 'Non, tôt.', correct: false, feedback: 'Too brief! Add a detail: "vers 22h" + what you do before bed.' },
        { text: 'Je regarde la télé.', correct: false, feedback: 'A bit generic! "Lire un peu" sounds more sophisticated and French.' }
      ]}
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 10 — Polite Requests
  // Leçon 10 : Pourriez-vous, Auriez-vous, Serait-il possible
  // ═══════════════════════════════════════════════════════════════
  10: {
    id: 'demande_polie',
    icon: '🎩',
    title: 'Making Polite Requests',
    titleFr: 'Faire des demandes polies',
    level: 10,
    difficulty: 3,
    requiredLesson: 10,
    vocabulary: ['pourriez-vous', 'auriez-vous', 'serait-il possible', 'je voudrais', 's\'il vous plaît'],
    setting: 'You need to ask your landlord for a repair.',
    dialogue: [
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonjour Monsieur. Serait-il possible de faire réparer le robinet de la salle de bain ?', correct: true, feedback: 'Parfait! "Serait-il possible" is the most polite way to ask. Excellent!' },
        { text: 'Le robinet est cassé.', correct: false, feedback: 'Too direct! Start with "Bonjour" and use "Serait-il possible de..."' },
        { text: 'Réparez le robinet.', correct: false, feedback: 'Way too direct! This is an order, not a request. Use conditional forms.' }
      ]},
      { speaker: 'landlord', text: 'Bien sûr, je vais envoyer un plombier. Quand seriez-vous disponible ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Merci beaucoup. Je serais disponible jeudi matin ou vendredi après-midi, comme vous préférez.', correct: true, feedback: 'Excellent! You gave options + deferred to their preference. Very polite!' },
        { text: 'Jeudi.', correct: false, feedback: 'Too brief! Give options and be flexible: "jeudi matin ou vendredi après-midi".' },
        { text: 'N\'importe quand.', correct: false, feedback: 'A bit too casual! Give specific windows and show you value their time.' }
      ]}
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 11 — Describing People
  // Leçon 11 : Il est grand, Elle est gentille, Ils sont sympas
  // ═══════════════════════════════════════════════════════════════
  11: {
    id: 'decrire_personne',
    icon: '👤',
    title: 'Describing Someone',
    titleFr: 'Décrire quelqu\'un',
    level: 11,
    difficulty: 2,
    requiredLesson: 11,
    vocabulary: ['il est', 'elle est', 'ils sont', 'gentil', 'sympa', 'sérieux', 'drôle'],
    setting: 'Your friend asks about your new neighbour.',
    dialogue: [
      { speaker: 'friend', text: 'Alors, ton nouveau voisin, il est comment ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Il est très sympa et serviable. Il m\'a aidée à porter mes courses hier.', correct: true, feedback: 'Parfait! You described him + gave a concrete example. Very natural!' },
        { text: 'Il est grand.', correct: false, feedback: 'Too superficial! Add personality traits and an anecdote.' },
        { text: 'Je ne sais pas.', correct: false, feedback: 'You must know something! Even "Il semble sympa, on s\'est dit bonjour" works.' }
      ]},
      { speaker: 'friend', text: 'Et sa femme ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Elle est plus réservée, mais elle a l\'air très gentille. Elle sourit toujours.', correct: true, feedback: 'Excellent! You balanced observation with kindness. Very diplomatic!' },
        { text: 'Je ne l\'ai pas vue.', correct: false, feedback: 'That ends the conversation! Try: "Elle semble plus réservée, mais..."' },
        { text: 'Elle est mignonne.', correct: false, feedback: 'A bit too familiar! Stick to personality: "gentille", "souriante", "réservée".' }
      ]}
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 12 — At the Train Station
  // Leçon 12 : Le train, Le quai, En retard, Un billet
  // ═══════════════════════════════════════════════════════════════
  12: {
    id: 'gare_sncf',
    icon: '🚆',
    title: 'At the Train Station',
    titleFr: 'À la gare SNCF',
    level: 12,
    difficulty: 3,
    requiredLesson: 12,
    vocabulary: ['le train', 'le quai', 'en retard', 'un billet', 'composter', 'la correspondance'],
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

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 13 — Emotions & Feelings
  // Leçon 13 : J'ai peur, Je suis content, Il est triste
  // ═══════════════════════════════════════════════════════════════
  13: {
    id: 'emotions',
    icon: '💭',
    title: 'Expressing Emotions',
    titleFr: 'Exprimer ses émotions',
    level: 13,
    difficulty: 2,
    requiredLesson: 13,
    vocabulary: ['j\'ai peur', 'je suis content', 'il est triste', 'elle est en colère', 'nous sommes inquiets'],
    setting: 'Your friend looks upset. You ask what is wrong.',
    dialogue: [
      { speaker: 'you', text: '___', choices: [
        { text: 'Tu as l\'air inquiet. Qu\'est-ce qui se passe ? Tu veux en parler ?', correct: true, feedback: 'Parfait! You noticed + offered to listen. Very caring and French!' },
        { text: 'Qu\'est-ce que tu as ?', correct: false, feedback: 'A bit abrupt! Soften: "Tu as l\'air inquiet" first, then ask gently.' },
        { text: 'Ça va ?', correct: false, feedback: 'Too generic! Show you really notice: "Tu as l\'air inquiet" is much better.' }
      ]},
      { speaker: 'friend', text: 'Je suis en colère contre mon patron. Il m\'a crié dessus devant tout le monde.' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Je comprends, c\'est humiliant. Tu as raison d\'être en colère. Qu\'est-ce que tu vas faire ?', correct: true, feedback: 'Excellent! You validated their feelings + asked about next steps. Perfect support!' },
        { text: 'Ce n\'est pas grave.', correct: false, feedback: 'Don\'t minimise their feelings! Validate first: "C\'est humiliant, tu as raison".' },
        { text: 'Ton patron est idiot.', correct: false, feedback: 'Don\'t insult the boss! Stay supportive without adding fuel: "Je comprends, c\'est difficile".' }
      ]}
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 14 — At the Restaurant (Advanced)
  // Leçon 14 : Je voudrais, L'addition, Le service, Le pourboire
  // ═══════════════════════════════════════════════════════════════
  14: {
    id: 'restaurant_avance',
    icon: '🍽️',
    title: 'Dining Out — The Full Experience',
    titleFr: 'Au restaurant — L\'expérience complète',
    level: 14,
    difficulty: 3,
    requiredLesson: 14,
    vocabulary: ['je voudrais', 'l\'addition', 'le service', 'le pourboire', 'sans', 'allergique'],
    setting: 'You are at a nice restaurant with dietary restrictions.',
    dialogue: [
      { speaker: 'waiter', text: 'Bonsoir Madame. Avez-vous réservé ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonsoir. Oui, j\'ai réservé au nom de Smith, pour deux personnes.', correct: true, feedback: 'Parfait! Confirmed reservation + name + number of people.' },
        { text: 'Oui.', correct: false, feedback: 'Too brief! Give your name and party size: "au nom de Smith, pour deux personnes".' },
        { text: 'Table pour deux.', correct: false, feedback: 'They asked if you reserved! Confirm: "Oui, j\'ai réservé..."' }
      ]},
      { speaker: 'waiter', text: 'Très bien. Voici la carte. Voulez-vous l\'apéritif ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Oui, un kir royal pour moi, s\'il vous plaît. Et de l\'eau pour mon mari — il est au volant.', correct: true, feedback: 'Excellent! You ordered + explained politely why your husband doesn\'t drink. Very French!' },
        { text: 'Non merci.', correct: false, feedback: 'A bit blunt! If declining, soften: "Pas pour moi, merci, mais mon mari prend un apéritif".' },
        { text: 'Deux kirs.', correct: false, feedback: 'You didn\'t ask your husband! Check with him first, or explain if he\'s driving.' }
      ]},
      { speaker: 'waiter', text: 'Avez-vous choisi ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Oui. Je voudrais le poisson, mais sans beurre s\'il vous plaît — je suis allergique aux produits laitiers.', correct: true, feedback: 'Parfait! Clear order + dietary restriction explained politely. Essential in France!' },
        { text: 'Le poisson.', correct: false, feedback: 'Too brief! Specify modifications and mention allergies: "sans beurre, je suis allergique".' },
        { text: 'Je ne sais pas.', correct: false, feedback: 'Indecisive! Ask for recommendations: "Que recommandez-vous ?" or decide and order clearly.' }
      ]},
      { speaker: 'waiter', text: 'Très bien, Madame. Et comme dessert ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'La tarte tatin, s\'il vous plaît. Et l\'addition avec le café, si possible.', correct: true, feedback: 'Excellent! Ordered dessert + asked for bill with coffee. Very efficient!' },
        { text: 'Rien.', correct: false, feedback: 'Too abrupt! Say "Rien pour moi, merci" and ask for the bill: "L\'addition, s\'il vous plaît".' },
        { text: 'Le dessert.', correct: false, feedback: 'Too vague! Name the dessert: "La tarte tatin" and ask for the bill.' }
      ]}
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 15 — Housing & Repairs
  // Leçon 15 : Le logement, Le propriétaire, Réparer, Louer
  // ═══════════════════════════════════════════════════════════════
  15: {
    id: 'logement_reparations',
    icon: '🏠',
    title: 'Housing Issues',
    titleFr: 'Problèmes de logement',
    level: 15,
    difficulty: 3,
    requiredLesson: 15,
    vocabulary: ['le logement', 'le propriétaire', 'réparer', 'louer', 'la caution', 'le bail'],
    setting: 'You need to report a problem to your landlord.',
    dialogue: [
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonjour Monsieur. Je vous appelle car il y a un problème avec le chauffage dans la salle de bain.', correct: true, feedback: 'Parfait! Polite intro + stated the problem clearly. Very professional!' },
        { text: 'Le chauffage est cassé.', correct: false, feedback: 'Too direct! Start with "Bonjour" and soften: "il y a un problème avec..."' },
        { text: 'Réparez le chauffage.', correct: false, feedback: 'This is an order, not a request! Use "Je vous appelle car..."' }
      ]},
      { speaker: 'landlord', text: 'Je comprends. Depuis quand ça ne marche pas ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Depuis hier soir. La salle de bain est très froide et je ne peux pas me doucher.', correct: true, feedback: 'Excellent! Specific timing + explained the impact. Very convincing!' },
        { text: 'Hier.', correct: false, feedback: 'Too brief! Add details: "Depuis hier soir" + impact: "je ne peux pas me doucher".' },
        { text: 'Ça fait longtemps.', correct: false, feedback: 'Too vague! Be specific: "Depuis hier soir" and explain the inconvenience.' }
      ]},
      { speaker: 'landlord', text: 'Je vais envoyer un réparateur demain matin. Serez-vous là ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Oui, je serai là de 9h à 12h. Merci beaucoup de votre réactivité, Monsieur.', correct: true, feedback: 'Parfait! Gave a time window + thanked them warmly. Very polite!' },
        { text: 'Oui.', correct: false, feedback: 'Too brief! Give a time window: "de 9h à 12h" and thank them.' },
        { text: 'Demain c\'est compliqué.', correct: false, feedback: 'Don\'t be difficult! Try to accommodate: "Je serai là le matin" or propose another time.' }
      ]}
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 16 — Family & Relationships
  // Leçon 16 : Mon frère, Ma sœur, Mes parents, Mon enfant
  // ═══════════════════════════════════════════════════════════════
  16: {
    id: 'famille',
    icon: '👨‍👩‍👧‍👦',
    title: 'Talking About Family',
    titleFr: 'Parler de sa famille',
    level: 16,
    difficulty: 2,
    requiredLesson: 16,
    vocabulary: ['mon frère', 'ma sœur', 'mes parents', 'mon enfant', 'mon mari', 'ma femme'],
    setting: 'Your neighbour asks about your family.',
    dialogue: [
      { speaker: 'neighbour', text: 'Vous avez de la famille en France ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Non, ma famille est en Angleterre. Mais mon mari et mon fils sont avec moi ici.', correct: true, feedback: 'Parfait! Clear + warm. You distinguished extended family from immediate family.' },
        { text: 'Non.', correct: false, feedback: 'Too brief! Add details about who IS with you: "mon mari et mon fils sont ici".' },
        { text: 'Oui, beaucoup.', correct: false, feedback: 'That contradicts your situation! Be honest: "Non, mais mon mari et mon fils sont ici".' }
      ]},
      { speaker: 'neighbour', text: 'Et vos parents ? Ils vous manquent ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Oui, beaucoup. Je leur téléphone tous les dimanches. Et vous, votre famille est d\'ici ?', correct: true, feedback: 'Excellent! You answered emotionally + asked about them. Very reciprocal and French!' },
        { text: 'Un peu.', correct: false, feedback: 'Too restrained! In France, it\'s OK to show emotion: "Oui, beaucoup" + details.' },
        { text: 'Non, je suis indépendante.', correct: false, feedback: 'That sounds cold! Show warmth: "Oui, je leur téléphone souvent" and ask about them.' }
      ]}
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 17 — Phone Calls & Appointments
  // Leçon 17 : Téléphoner, Prendre rendez-vous, Rappeler
  // ═══════════════════════════════════════════════════════════════
  17: {
    id: 'telephone_rdv',
    icon: '📞',
    title: 'Phone Call — Appointment',
    titleFr: 'Appel téléphonique — Rendez-vous',
    level: 17,
    difficulty: 3,
    requiredLesson: 17,
    vocabulary: ['téléphoner', 'prendre rendez-vous', 'rappeler', 'décaler', 'confirmer', 'indisponible'],
    setting: 'You need to reschedule a dentist appointment by phone.',
    dialogue: [
      { speaker: 'receptionist', text: 'Cabinet dentaire Dubois, bonjour.' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Bonjour Madame. C\'est Madame Smith à l\'appareil. Je voudrais décaler mon rendez-vous de demain, s\'il vous plaît.', correct: true, feedback: 'Parfait! Identify yourself + state purpose clearly. Very professional!' },
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

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 18 — At the Doctor
  // Leçon 18 : J'ai mal, Depuis quand, La fièvre, L'ordonnance
  // ═══════════════════════════════════════════════════════════════
  18: {
    id: 'medecin',
    icon: '🩺',
    title: 'At the Doctor',
    titleFr: 'Chez le médecin',
    level: 18,
    difficulty: 3,
    requiredLesson: 18,
    vocabulary: ['j\'ai mal', 'depuis quand', 'la fièvre', 'l\'ordonnance', 'les symptômes', 'le traitement'],
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

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 19 — Cooking & Food
  // Leçon 19 : Cuisiner, Les ingrédients, La recette, Le goût
  // ═══════════════════════════════════════════════════════════════
  19: {
    id: 'cuisine_recette',
    icon: '👨‍🍳',
    title: 'Sharing a Recipe',
    titleFr: 'Partager une recette',
    level: 19,
    difficulty: 3,
    requiredLesson: 19,
    vocabulary: ['cuisiner', 'les ingrédients', 'la recette', 'le goût', 'délicieux', 'épicé'],
    setting: 'Your French friend asks how you made that delicious dish.',
    dialogue: [
      { speaker: 'friend', text: 'C\'était délicieux ! Comment est-ce que tu as fait ?' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Merci ! C\'est une recette de ma mère. Il faut des tomates fraîches, de l\'ail et du basilic.', correct: true, feedback: 'Parfait! You thanked + explained the origin + listed ingredients. Very French!' },
        { text: 'C\'est facile.', correct: false, feedback: 'Too dismissive! Share the recipe proudly: "C\'est une recette de ma mère".' },
        { text: 'J\'ai cuisiné.', correct: false, feedback: 'Too vague! Give details: ingredients, origin of the recipe, technique.' }
      ]},
      { speaker: 'friend', text: 'Et le secret ? Il y a un goût spécial...' },
      { speaker: 'you', text: '___', choices: [
        { text: 'Ah, c\'est le piment d\'Espelette ! Juste une pincée. Ça donne du caractère sans être trop épicé.', correct: true, feedback: 'Excellent! You revealed the secret ingredient + explained why. Very chef-like!' },
        { text: 'Je ne sais pas.', correct: false, feedback: 'You cooked it, you know! Share the secret: "C\'est le piment d\'Espelette".' },
        { text: 'C\'est un secret.', correct: false, feedback: 'A bit stingy! In France, sharing recipes is a social bond. Reveal it!' }
      ]}
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 20 — Real French / Colloquial
  // Leçon 20 : Du coup, Franchement, Bof, Nickel, Pas terrible
  // ═══════════════════════════════════════════════════════════════
  20: {
    id: 'francais_authentique',
    icon: '🗣️',
    title: 'Real French — Colloquial Chat',
    titleFr: 'Français authentique — Conversation informelle',
    level: 20,
    difficulty: 4,
    requiredLesson: 20,
    vocabulary: ['du coup', 'franchement', 'bof', 'nickel', 'pas terrible', 'quand même'],
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

// ═══════════════════════════════════════════════════════════════════
// Export
// ═══════════════════════════════════════════════════════════════════
if (typeof window !== 'undefined') {
  window.CONVERSATION_SCENARIOS = CONVERSATION_SCENARIOS;
}
