// ═══════════════════════════════════════════════════════════════════
// SENTENCE-BUILDER-DATA.JS — Daily French 🧩 v1.0
// Phrase Builder Data — 20 levels aligned with lessons 1-20
// Structure: { levelNum: { id, icon, title, titleFr, level, difficulty, requiredLesson, vocabulary, missions[] } }
// Each mission: { target, en, words[], hint, feedbackCorrect, feedbackIncorrect }
// ═══════════════════════════════════════════════════════════════════

const SENTENCE_BUILDER_DATA = {

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 1 — Greetings & Introductions
  // ═══════════════════════════════════════════════════════════════
  1: {
    id: 'salutations',
    icon: '🙋',
    title: 'Greetings & Introductions',
    titleFr: 'Salutations et présentations',
    level: 1,
    difficulty: 1,
    requiredLesson: 1,
    vocabulary: ['Bonjour', 'Je m\'appelle', 'Enchanté', 'Je suis', 'J\'habite'],
    missions: [
      { target: 'Bonjour je m\'appelle Marie', en: 'Hello my name is Marie', words: ['Bonjour', 'je', 'm\'appelle', 'Marie', 'Salut', 'Pierre'], hint: 'Start with the greeting, then introduce yourself', feedbackCorrect: 'Parfait ! A classic French introduction.', feedbackIncorrect: 'Try: Greeting + je m\'appelle + name' },
      { target: 'Je suis anglais', en: 'I am English (man)', words: ['Je', 'suis', 'anglais', 'anglaise', 'français', 'belge'], hint: 'Use "suis" with être, and the masculine form', feedbackCorrect: 'Bien ! Remember: anglais (m) / anglaise (f).', feedbackIncorrect: 'Try: Je suis + nationality (masculine form)' },
      { target: 'J\'habite à Lyon', en: 'I live in Lyon', words: ['J\'habite', 'à', 'Lyon', 'Paris', 'Je', 'suis'], hint: 'J\'habite needs "à" before a city', feedbackCorrect: 'Excellent ! J\'habite à + city is the pattern.', feedbackIncorrect: 'Try: J\'habite à + city name' },
      { target: 'Enchanté de vous rencontrer', en: 'Nice to meet you', words: ['Enchanté', 'de', 'vous', 'rencontrer', 'et', 'bonjour'], hint: 'The formal way to say nice to meet you', feedbackCorrect: 'Très bien ! "Enchanté" is essential French politeness.', feedbackIncorrect: 'Try: Enchanté + de vous rencontrer' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 2 — At the Market
  // ═══════════════════════════════════════════════════════════════
  2: {
    id: 'marche',
    icon: '🛒',
    title: 'At the Market',
    titleFr: 'Au marché',
    level: 2,
    difficulty: 1,
    requiredLesson: 2,
    vocabulary: ['Je voudrais', 'un kilo de', 's\'il vous plaît', 'C\'est combien', 'C\'est tout'],
    missions: [
      { target: 'Je voudrais un kilo de tomates', en: 'I would like a kilo of tomatoes', words: ['Je', 'voudrais', 'un', 'kilo', 'de', 'tomates', 'pommes', 'poires'], hint: 'Je voudrais is more polite than Je veux', feedbackCorrect: 'Parfait ! "Je voudrais" is the polite way to ask.', feedbackIncorrect: 'Try: Je voudrais + quantity + de + item' },
      { target: 'C\'est combien s\'il vous plaît', en: 'How much is it please', words: ['C\'est', 'combien', 's\'il', 'vous', 'plaît', 'merci', 'cher'], hint: 'Ask the price politely', feedbackCorrect: 'Bien ! Always add s\'il vous plaît at the market.', feedbackIncorrect: 'Try: C\'est combien + s\'il vous plaît' },
      { target: 'C\'est tout merci', en: 'That\'s all thank you', words: ['C\'est', 'tout', 'merci', 'au', 'revoir', 's\'il', 'vous', 'plaît'], hint: 'How to finish your market shopping', feedbackCorrect: 'Excellent ! C\'est tout is the natural way to finish.', feedbackIncorrect: 'Try: C\'est tout + merci' },
      { target: 'Avez-vous des pommes', en: 'Do you have any apples', words: ['Avez-vous', 'des', 'pommes', 'poires', 'tomates', 's\'il', 'vous', 'plaît'], hint: 'Use "des" for plural items (some/any)', feedbackCorrect: 'Très bien ! "Des" is the plural of "un/une".', feedbackIncorrect: 'Try: Avez-vous + des + plural noun' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 3 — In the Garden
  // ═══════════════════════════════════════════════════════════════
  3: {
    id: 'jardin',
    icon: '🌿',
    title: 'In the Garden',
    titleFr: 'Dans le jardin',
    level: 3,
    difficulty: 1,
    requiredLesson: 3,
    vocabulary: ['Je dois', 'arroser', 'le jardin', 'les fleurs', 'la pelouse'],
    missions: [
      { target: 'Je dois arroser le jardin', en: 'I need to water the garden', words: ['Je', 'dois', 'arroser', 'le', 'jardin', 'la', 'maison'], hint: 'Je dois + infinitive = I need to / I must', feedbackCorrect: 'Parfait ! "Je dois" + infinitive is essential.', feedbackIncorrect: 'Try: Je dois + arroser + le jardin' },
      { target: 'Les fleurs sont belles', en: 'The flowers are beautiful', words: ['Les', 'fleurs', 'sont', 'belles', 'beaux', 'jardin', 'la'], hint: 'Remember: fleurs is feminine plural', feedbackCorrect: 'Bien ! Belles (f.pl.) agrees with fleurs.', feedbackIncorrect: 'Try: Les fleurs + sont + belles (feminine plural)' },
      { target: 'Je tonds la pelouse', en: 'I mow the lawn', words: ['Je', 'tonds', 'la', 'pelouse', 'le', 'jardin', 'arrose'], hint: 'Tondre = to mow, conjugated like "rendre"', feedbackCorrect: 'Excellent ! "Je tonds" is the present tense.', feedbackIncorrect: 'Try: Je tonds + la pelouse' },
      { target: 'Il y a un arbre dans le jardin', en: 'There is a tree in the garden', words: ['Il', 'y', 'a', 'un', 'arbre', 'dans', 'le', 'jardin', 'la', 'maison'], hint: 'Il y a = there is/there are', feedbackCorrect: 'Très bien ! "Il y a" is used constantly in French.', feedbackIncorrect: 'Try: Il y a + un + noun + dans le jardin' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 4 — Neighbours & Community
  // ═══════════════════════════════════════════════════════════════
  4: {
    id: 'voisinage',
    icon: '🏘️',
    title: 'Neighbours & Community',
    titleFr: 'Voisinage et communauté',
    level: 4,
    difficulty: 2,
    requiredLesson: 4,
    vocabulary: ['mon voisin', 'ma voisine', 'habitez', 'depuis', 'longtemps'],
    missions: [
      { target: 'Mon voisin est très gentil', en: 'My neighbour is very kind', words: ['Mon', 'voisin', 'est', 'très', 'gentil', 'gentille', 'ma', 'voisine'], hint: 'Voisin = masculine, gentil = masculine', feedbackCorrect: 'Parfait ! "Gentil" (m) / "gentille" (f).', feedbackIncorrect: 'Try: Mon voisin + est + très gentil' },
      { target: 'Vous habitez ici depuis longtemps', en: 'Have you lived here long', words: ['Vous', 'habitez', 'ici', 'depuis', 'longtemps', 'je', 'suis'], hint: 'Depuis longtemps = for a long time', feedbackCorrect: 'Bien ! "Depuis" is used with present tense for ongoing actions.', feedbackIncorrect: 'Try: Vous habitez + ici + depuis longtemps' },
      { target: 'Je suis nouveau ici', en: 'I am new here (man)', words: ['Je', 'suis', 'nouveau', 'nouvelle', 'ici', 'vieux'], hint: 'Nouveau (m) / nouvelle (f) — adjective agreement!', feedbackCorrect: 'Excellent ! "Nouveau" agrees with the speaker.', feedbackIncorrect: 'Try: Je suis + nouveau (masculine) + ici' },
      { target: 'C\'est par où la mairie', en: 'Which way is the town hall', words: ['C\'est', 'par', 'où', 'la', 'mairie', 'pharmacie', 'marché'], hint: 'C\'est par où = which way is it', feedbackCorrect: 'Très bien ! "C\'est par où" is very natural French.', feedbackIncorrect: 'Try: C\'est par où + la + place' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 5 — Tastes & Desires
  // ═══════════════════════════════════════════════════════════════
  5: {
    id: 'gouts',
    icon: '❤️',
    title: 'Tastes & Desires',
    titleFr: 'Goûts et désirs',
    level: 5,
    difficulty: 2,
    requiredLesson: 5,
    vocabulary: ['J\'aime', 'J\'adore', 'Je n\'aime pas', 'Je préfère', 'délicieux'],
    missions: [
      { target: 'J\'adore le fromage français', en: 'I love French cheese', words: ['J\'adore', 'le', 'fromage', 'français', 'française', 'J\'aime', 'la'], hint: 'J\'adore is stronger than J\'aime', feedbackCorrect: 'Parfait ! "J\'adore" shows real enthusiasm!', feedbackIncorrect: 'Try: J\'adore + le fromage français' },
      { target: 'Je préfère le vin rouge', en: 'I prefer red wine', words: ['Je', 'préfère', 'le', 'vin', 'rouge', 'blanc', 'la', 'bière'], hint: 'Préférer needs a direct object', feedbackCorrect: 'Bien ! "Je préfère" + le/la + noun.', feedbackIncorrect: 'Try: Je préfère + le vin + rouge' },
      { target: 'Je n\'aime pas les huîtres', en: 'I don\'t like oysters', words: ['Je', 'n\'aime', 'pas', 'les', 'huîtres', 'fromage', 'le'], hint: 'Ne...pas around the verb, "les" for plural', feedbackCorrect: 'Excellent ! "Je n\'aime pas" + les + plural noun.', feedbackIncorrect: 'Try: Je n\'aime pas + les + plural noun' },
      { target: 'C\'est délicieux merci', en: 'It\'s delicious thank you', words: ['C\'est', 'délicieux', 'merci', 'beaucoup', 'bon', 'mauvais'], hint: 'Délicieux is the classic compliment', feedbackCorrect: 'Très bien ! Always appreciated by French hosts!', feedbackIncorrect: 'Try: C\'est + délicieux + merci' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 6 — At the Shops
  // ═══════════════════════════════════════════════════════════════
  6: {
    id: 'magasins',
    icon: '🏬',
    title: 'At the Shops',
    titleFr: 'Dans les magasins',
    level: 6,
    difficulty: 2,
    requiredLesson: 6,
    vocabulary: ['Je paie', 'par carte', 'la monnaie', 'Un ticket de caisse', 'fermé'],
    missions: [
      { target: 'Je paie par carte s\'il vous plaît', en: 'I pay by card please', words: ['Je', 'paie', 'par', 'carte', 's\'il', 'vous', 'plaît', 'espèces'], hint: 'Par carte = by card, par espèces = in cash', feedbackCorrect: 'Parfait ! "Par carte" is the standard phrase.', feedbackIncorrect: 'Try: Je paie + par carte + s\'il vous plaît' },
      { target: 'Avez-vous la monnaie', en: 'Do you have change', words: ['Avez-vous', 'la', 'monnaie', 'argent', 's\'il', 'vous', 'plaît'], hint: 'La monnaie = change (coins), not l\'argent', feedbackCorrect: 'Bien ! "La monnaie" specifically means change.', feedbackIncorrect: 'Try: Avez-vous + la monnaie' },
      { target: 'Un ticket de caisse s\'il vous plaît', en: 'A receipt please', words: ['Un', 'ticket', 'de', 'caisse', 's\'il', 'vous', 'plaît', 'facture'], hint: 'Ticket de caisse = receipt at a shop', feedbackCorrect: 'Excellent ! Essential for returns or expenses.', feedbackIncorrect: 'Try: Un ticket de caisse + s\'il vous plaît' },
      { target: 'Le magasin est fermé aujourd\'hui', en: 'The shop is closed today', words: ['Le', 'magasin', 'est', 'fermé', 'fermée', 'aujourd\'hui', 'demain'], hint: 'Fermé (m) / fermée (f) — agreement!', feedbackCorrect: 'Très bien ! Watch the agreement: fermé (masculine).', feedbackIncorrect: 'Try: Le magasin + est + fermé + aujourd\'hui' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 7 — Friends & Going Out
  // ═══════════════════════════════════════════════════════════════
  7: {
    id: 'sorties',
    icon: '👫',
    title: 'Friends & Going Out',
    titleFr: 'Amis et sorties',
    level: 7,
    difficulty: 2,
    requiredLesson: 7,
    vocabulary: ['Ça vous dit de', 'On se retrouve', 'À quelle heure', 'Je suis libre', 'Avec plaisir'],
    missions: [
      { target: 'Ça vous dit d\'aller au restaurant', en: 'Would you like to go to a restaurant', words: ['Ça', 'vous', 'dit', 'd\'aller', 'au', 'restaurant', 'café', 'cinéma'], hint: 'Ça vous dit de + infinitive = fancy doing...?', feedbackCorrect: 'Parfait ! "Ça vous dit de" is very natural French.', feedbackIncorrect: 'Try: Ça vous dit de + d\'aller + au + place' },
      { target: 'On se retrouve à huit heures', en: 'Let\'s meet at eight o\'clock', words: ['On', 'se', 'retrouve', 'à', 'huit', 'heures', 'neuf', 'demain'], hint: 'On se retrouve = we meet up', feedbackCorrect: 'Bien ! "On" is the natural way to say "we" in spoken French.', feedbackIncorrect: 'Try: On se retrouve + à + time' },
      { target: 'Je suis libre samedi soir', en: 'I am free Saturday evening', words: ['Je', 'suis', 'libre', 'samedi', 'soir', 'matin', 'dimanche'], hint: 'Libre = free/available', feedbackCorrect: 'Excellent ! "Libre" = free (schedule).', feedbackIncorrect: 'Try: Je suis libre + day + soir' },
      { target: 'Avec plaisir merci', en: 'With pleasure thank you', words: ['Avec', 'plaisir', 'merci', 'beaucoup', 'désolé', 'non'], hint: 'Avec plaisir = enthusiastic yes!', feedbackCorrect: 'Très bien ! Warmer than just "oui".', feedbackIncorrect: 'Try: Avec plaisir + merci' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 8 — Weather
  // ═══════════════════════════════════════════════════════════════
  8: {
    id: 'meteo',
    icon: '🌤️',
    title: 'Weather',
    titleFr: 'La météo',
    level: 8,
    difficulty: 2,
    requiredLesson: 8,
    vocabulary: ['Il fait beau', 'Il pleut', 'Il fait chaud', 'Il fait froid', 'demain'],
    missions: [
      { target: 'Il fait beau aujourd\'hui', en: 'The weather is nice today', words: ['Il', 'fait', 'beau', 'aujourd\'hui', 'demain', 'mauvais', 'froid'], hint: 'Il fait + adjective for weather', feedbackCorrect: 'Parfait ! "Il fait beau" = nice weather.', feedbackIncorrect: 'Try: Il fait + beau + aujourd\'hui' },
      { target: 'Il pleut beaucoup en automne', en: 'It rains a lot in autumn', words: ['Il', 'pleut', 'beaucoup', 'en', 'automne', 'hiver', 'été', 'printemps'], hint: 'Pleuvoir = irregular verb, always "il pleut"', feedbackCorrect: 'Bien ! "Il pleut" — the verb is always with "il".', feedbackIncorrect: 'Try: Il pleut + beaucoup + en + season' },
      { target: 'Il fait très chaud cet été', en: 'It is very hot this summer', words: ['Il', 'fait', 'très', 'chaud', 'cet', 'été', 'hiver', 'froid'], hint: 'Cet before masculine vowel, cette before consonant', feedbackCorrect: 'Excellent ! "Cet été" (masc. before vowel).', feedbackIncorrect: 'Try: Il fait très chaud + cet été' },
      { target: 'Quel temps fait-il demain', en: 'What is the weather like tomorrow', words: ['Quel', 'temps', 'fait-il', 'demain', 'aujourd\'hui', 'beau', 'pluie'], hint: 'The classic French weather question', feedbackCorrect: 'Très bien ! "Quel temps fait-il?" is essential.', feedbackIncorrect: 'Try: Quel temps + fait-il + demain' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 9 — Essential Verbs
  // ═══════════════════════════════════════════════════════════════
  9: {
    id: 'verbes',
    icon: '⚡',
    title: 'Essential Verbs',
    titleFr: 'Verbes essentiels',
    level: 9,
    difficulty: 2,
    requiredLesson: 9,
    vocabulary: ['Je suis', 'J\'ai', 'Je vais', 'Je fais', 'Je veux', 'Je peux'],
    missions: [
      { target: 'Je suis très fatigué', en: 'I am very tired (man)', words: ['Je', 'suis', 'très', 'fatigué', 'fatiguée', 'content', 'avoir'], hint: 'Être for states and emotions', feedbackCorrect: 'Parfait ! "Je suis" + adjective.', feedbackIncorrect: 'Try: Je suis + très + fatigué' },
      { target: 'J\'ai deux chats et un chien', en: 'I have two cats and a dog', words: ['J\'ai', 'deux', 'chats', 'et', 'un', 'chien', 'chat', 'suis'], hint: 'Avoir for possession', feedbackCorrect: 'Bien ! "J\'ai" = I have (possession).', feedbackIncorrect: 'Try: J\'ai + number + noun + et + noun' },
      { target: 'Je vais au marché demain', en: 'I am going to the market tomorrow', words: ['Je', 'vais', 'au', 'marché', 'demain', 'à', 'le', 'suis'], hint: 'Aller = to go, au = à + le', feedbackCorrect: 'Excellent ! "Je vais" + au + place.', feedbackIncorrect: 'Try: Je vais + au + place + demain' },
      { target: 'Je fais les courses le lundi', en: 'I do the shopping on Mondays', words: ['Je', 'fais', 'les', 'courses', 'le', 'lundi', 'mardi', 'suis'], hint: 'Faire les courses = do the shopping', feedbackCorrect: 'Très bien ! "Faire les courses" is a set phrase.', feedbackIncorrect: 'Try: Je fais + les courses + le + day' },
      { target: 'Je peux vous aider', en: 'I can help you', words: ['Je', 'peux', 'vous', 'aider', 'aide', 'pouvoir', 'fais'], hint: 'Pouvoir + infinitive = can + verb', feedbackCorrect: 'Parfait ! "Je peux" + infinitive.', feedbackIncorrect: 'Try: Je peux + vous + aider' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 10 — Politeness
  // ═══════════════════════════════════════════════════════════════
  10: {
    id: 'politesse',
    icon: '🎩',
    title: 'Politeness',
    titleFr: 'Politesse',
    level: 10,
    difficulty: 2,
    requiredLesson: 10,
    vocabulary: ['S\'il vous plaît', 'Merci beaucoup', 'Excusez-moi', 'Je suis désolé', 'Pouvez-vous'],
    missions: [
      { target: 'Excusez-moi je ne comprends pas', en: 'Excuse me I don\'t understand', words: ['Excusez-moi', 'je', 'ne', 'comprends', 'pas', 'suis', 'désolé'], hint: 'Ne...pas around the verb for negation', feedbackCorrect: 'Parfait ! "Ne...pas" is essential negation.', feedbackIncorrect: 'Try: Excusez-moi + je ne + verb + pas' },
      { target: 'Pouvez-vous parler plus lentement', en: 'Can you speak more slowly', words: ['Pouvez-vous', 'parler', 'plus', 'lentement', 'vite', 's\'il', 'vous', 'plaît'], hint: 'Plus lentement = more slowly', feedbackCorrect: 'Bien ! Essential phrase for learners!', feedbackIncorrect: 'Try: Pouvez-vous + parler + plus lentement' },
      { target: 'Je suis désolé je suis en retard', en: 'I am sorry I am late', words: ['Je', 'suis', 'désolé', 'désolée', 'en', 'retard', 'avance', 'content'], hint: 'En retard = late, en avance = early', feedbackCorrect: 'Excellent ! "En retard" is the set phrase.', feedbackIncorrect: 'Try: Je suis désolé + je suis + en retard' },
      { target: 'Merci beaucoup de votre aide', en: 'Thank you very much for your help', words: ['Merci', 'beaucoup', 'de', 'votre', 'aide', 'pour', 's\'il', 'vous'], hint: 'Merci de + noun = thanks for', feedbackCorrect: 'Très bien ! "Merci beaucoup" is warmer than just "merci".', feedbackIncorrect: 'Try: Merci beaucoup + de votre + aide' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 11 — Daily Life in France
  // ═══════════════════════════════════════════════════════════════
  11: {
    id: 'vie_quotidienne',
    icon: '🇫🇷',
    title: 'Daily Life in France',
    titleFr: 'Vie quotidienne en France',
    level: 11,
    difficulty: 3,
    requiredLesson: 11,
    vocabulary: ['Je dois', 'la mairie', 'la carte Vitale', 'rendez-vous', 'EDF'],
    missions: [
      { target: 'Je dois aller à la mairie', en: 'I need to go to the town hall', words: ['Je', 'dois', 'aller', 'à', 'la', 'mairie', 'pharmacie', 'marché'], hint: 'Je dois + infinitive = I must/need to', feedbackCorrect: 'Parfait ! "Aller à" for places.', feedbackIncorrect: 'Try: Je dois + aller à + la mairie' },
      { target: 'J\'ai perdu ma carte Vitale', en: 'I lost my health card', words: ['J\'ai', 'perdu', 'ma', 'carte', 'Vitale', 'mon', 'téléphone', 'portefeuille'], hint: 'J\'ai perdu = I lost (passé composé)', feedbackCorrect: 'Bien ! "Ma carte Vitale" — essential in France!', feedbackIncorrect: 'Try: J\'ai perdu + ma + carte Vitale' },
      { target: 'Je voudrais prendre rendez-vous', en: 'I would like to make an appointment', words: ['Je', 'voudrais', 'prendre', 'rendez-vous', 'faire', 'avoir', 'un'], hint: 'Prendre rendez-vous = make an appointment', feedbackCorrect: 'Excellent ! Set phrase: prendre rendez-vous.', feedbackIncorrect: 'Try: Je voudrais + prendre + rendez-vous' },
      { target: 'La facture EDF est très chère', en: 'The EDF bill is very expensive', words: ['La', 'facture', 'EDF', 'est', 'très', 'chère', 'cher', 'bon', 'marché'], hint: 'Chère (f) / cher (m) — agreement!', feedbackCorrect: 'Très bien ! "Chère" agrees with "la facture".', feedbackIncorrect: 'Try: La facture EDF + est + très chère' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 12 — My Routine (Passé composé)
  // ═══════════════════════════════════════════════════════════════
  12: {
    id: 'routine',
    icon: '🌅',
    title: 'My Routine',
    titleFr: 'Ma routine',
    level: 12,
    difficulty: 3,
    requiredLesson: 12,
    vocabulary: ['J\'ai', 'ce matin', 'hier', 'nettoyé', 'arrosé', 'fait'],
    missions: [
      { target: 'J\'ai nettoyé la maison ce matin', en: 'I cleaned the house this morning', words: ['J\'ai', 'nettoyé', 'la', 'maison', 'ce', 'matin', 'hier', 'soir'], hint: 'Passé composé: j\'ai + past participle (-é)', feedbackCorrect: 'Parfait ! Passé composé with avoir.', feedbackIncorrect: 'Try: J\'ai + nettoyé + la maison + ce matin' },
      { target: 'J\'ai arrosé le jardin hier', en: 'I watered the garden yesterday', words: ['J\'ai', 'arrosé', 'le', 'jardin', 'hier', 'ce', 'matin', 'demain'], hint: 'Hier = yesterday, always with passé composé', feedbackCorrect: 'Bien ! "Hier" triggers passé composé.', feedbackIncorrect: 'Try: J\'ai + arrosé + le jardin + hier' },
      { target: 'J\'ai fait les courses ce matin', en: 'I did the shopping this morning', words: ['J\'ai', 'fait', 'les', 'courses', 'ce', 'matin', 'hier', 'soir'], hint: 'Faire → fait (irregular past participle)', feedbackCorrect: 'Excellent ! "Faire" → "fait" in passé composé.', feedbackIncorrect: 'Try: J\'ai + fait + les courses + ce matin' },
      { target: 'Je viens de finir mon travail', en: 'I have just finished my work', words: ['Je', 'viens', 'de', 'finir', 'mon', 'travail', 'travailler', 'fini'], hint: 'Je viens de + infinitive = I have just...', feedbackCorrect: 'Très bien ! "Je viens de" = I have just.', feedbackIncorrect: 'Try: Je viens de + finir + mon travail' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 13 — My Emotions
  // ═══════════════════════════════════════════════════════════════
  13: {
    id: 'emotions',
    icon: '❤️',
    title: 'My Emotions',
    titleFr: 'Mes émotions',
    level: 13,
    difficulty: 3,
    requiredLesson: 13,
    vocabulary: ['Je suis', 'fatigué', 'content', 'stressé', 'triste', 'inquiet'],
    missions: [
      { target: 'Je suis fatigué mais content', en: 'I am tired but happy (man)', words: ['Je', 'suis', 'fatigué', 'fatiguée', 'mais', 'content', 'contente', 'triste'], hint: 'Mais = but — connects two emotions', feedbackCorrect: 'Parfait ! "Mais" connects contrasting ideas.', feedbackIncorrect: 'Try: Je suis + fatigué + mais + content' },
      { target: 'Elle est un peu stressée', en: 'She is a little stressed', words: ['Elle', 'est', 'un', 'peu', 'stressée', 'stressé', 'très', 'fatiguée'], hint: 'Un peu = a little, stressée (feminine)', feedbackCorrect: 'Bien ! "Un peu" softens the statement.', feedbackIncorrect: 'Try: Elle est + un peu + stressée' },
      { target: 'Je me sens mieux aujourd\'hui', en: 'I feel better today', words: ['Je', 'me', 'sens', 'mieux', 'aujourd\'hui', 'bien', 'mal', 'demain'], hint: 'Se sentir = to feel (reflexive)', feedbackCorrect: 'Excellent ! "Je me sens" = I feel.', feedbackIncorrect: 'Try: Je me sens + mieux + aujourd\'hui' },
      { target: 'Il est triste depuis hier', en: 'He is sad since yesterday', words: ['Il', 'est', 'triste', 'depuis', 'hier', 'ce', 'matin', 'content'], hint: 'Depuis + time = for/since (ongoing)', feedbackCorrect: 'Très bien ! "Depuis" with present = ongoing.', feedbackIncorrect: 'Try: Il est + triste + depuis + hier' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 14 — My Needs (avoir + noun)
  // ═══════════════════════════════════════════════════════════════
  14: {
    id: 'besoins',
    icon: '🍽️',
    title: 'My Needs',
    titleFr: 'Mes besoins',
    level: 14,
    difficulty: 3,
    requiredLesson: 14,
    vocabulary: ['J\'ai faim', 'J\'ai soif', 'J\'ai sommeil', 'J\'ai besoin de', 'J\'ai envie de'],
    missions: [
      { target: 'J\'ai faim et j\'ai soif', en: 'I am hungry and thirsty', words: ['J\'ai', 'faim', 'et', 'soif', 'sommeil', 'froid', 'chaud'], hint: 'Avoir faim / soif / sommeil = be hungry/thirsty/sleepy', feedbackCorrect: 'Parfait ! "Avoir" not "être" for needs!', feedbackIncorrect: 'Try: J\'ai + faim + et + j\'ai + soif' },
      { target: 'J\'ai besoin de dormir', en: 'I need to sleep', words: ['J\'ai', 'besoin', 'de', 'dormir', 'manger', 'boire', 'travailler'], hint: 'J\'ai besoin de + infinitive', feedbackCorrect: 'Bien ! "Besoin de" + infinitive.', feedbackIncorrect: 'Try: J\'ai besoin de + infinitive' },
      { target: 'J\'ai envie d\'un café', en: 'I feel like a coffee', words: ['J\'ai', 'envie', 'd\'un', 'café', 'thé', 'd\'une', 'eau'], hint: 'D\'un = de + un (elision before vowel)', feedbackCorrect: 'Excellent ! "D\'un" not "de un".', feedbackIncorrect: 'Try: J\'ai envie + d\'un + café' },
      { target: 'Je voudrais un verre d\'eau', en: 'I would like a glass of water', words: ['Je', 'voudrais', 'un', 'verre', 'd\'eau', 'de', 'vin', 'bière'], hint: 'D\'eau = de + eau (elision)', feedbackCorrect: 'Très bien ! "Un verre d\'eau" — classic phrase.', feedbackIncorrect: 'Try: Je voudrais + un verre + d\'eau' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 15 — My House
  // ═══════════════════════════════════════════════════════════════
  15: {
    id: 'maison',
    icon: '🏡',
    title: 'My House',
    titleFr: 'Ma maison',
    level: 15,
    difficulty: 3,
    requiredLesson: 15,
    vocabulary: ['Je fais', 'le ménage', 'la vaisselle', 'le lit', 'l\'aspirateur', 'les poubelles'],
    missions: [
      { target: 'Je fais le ménage le lundi', en: 'I do the housework on Mondays', words: ['Je', 'fais', 'le', 'ménage', 'le', 'lundi', 'mardi', 'samedi'], hint: 'Faire le ménage = do the housework', feedbackCorrect: 'Parfait ! "Faire" + household task.', feedbackIncorrect: 'Try: Je fais + le ménage + le + day' },
      { target: 'Je fais la vaisselle ce soir', en: 'I do the dishes this evening', words: ['Je', 'fais', 'la', 'vaisselle', 'ce', 'soir', 'matin', 'hier'], hint: 'Faire la vaisselle = do the dishes', feedbackCorrect: 'Bien ! Another "faire" set phrase.', feedbackIncorrect: 'Try: Je fais + la vaisselle + ce soir' },
      { target: 'Je passe l\'aspirateur demain', en: 'I vacuum tomorrow', words: ['Je', 'passe', 'l\'aspirateur', 'demain', 'aujourd\'hui', 'hier', 'le'], hint: 'Passer l\'aspirateur = to vacuum (NOT faire!)', feedbackCorrect: 'Excellent ! "Passer" not "faire" for vacuuming.', feedbackIncorrect: 'Try: Je passe + l\'aspirateur + demain' },
      { target: 'Je sors les poubelles le soir', en: 'I take out the bins in the evening', words: ['Je', 'sors', 'les', 'poubelles', 'le', 'soir', 'matin', 'lundi'], hint: 'Sortir les poubelles = take out the bins', feedbackCorrect: 'Très bien ! "Sortir" = take out.', feedbackIncorrect: 'Try: Je sors + les poubelles + le soir' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 16 — My Family
  // ═══════════════════════════════════════════════════════════════
  16: {
    id: 'famille',
    icon: '👨‍👩‍👧',
    title: 'My Family',
    titleFr: 'Ma famille',
    level: 16,
    difficulty: 3,
    requiredLesson: 16,
    vocabulary: ['mon mari', 'ma femme', 'mon fils', 'ma fille', 'mes enfants'],
    missions: [
      { target: 'Mon mari est médecin', en: 'My husband is a doctor', words: ['Mon', 'mari', 'est', 'médecin', 'ma', 'femme', 'professeur'], hint: 'Mon (masc.) / Ma (fem.) — possessive agreement', feedbackCorrect: 'Parfait ! "Mon mari" — mon before masculine.', feedbackIncorrect: 'Try: Mon + mari + est + profession' },
      { target: 'Ma fille a dix ans', en: 'My daughter is ten years old', words: ['Ma', 'fille', 'a', 'dix', 'ans', 'mon', 'fils', 'neuf'], hint: 'Avoir + age = to be [age] in French', feedbackCorrect: 'Bien ! "Avoir" + age — not "être"!', feedbackIncorrect: 'Try: Ma fille + a + number + ans' },
      { target: 'Mes enfants habitent en France', en: 'My children live in France', words: ['Mes', 'enfants', 'habitent', 'en', 'France', 'mon', 'ma', 'Angleterre'], hint: 'Mes = my (plural), en France = in France', feedbackCorrect: 'Excellent ! "Mes" for plural possession.', feedbackIncorrect: 'Try: Mes + enfants + habitent + en France' },
      { target: 'Mon frère et ma sœur sont gentils', en: 'My brother and sister are kind', words: ['Mon', 'frère', 'et', 'ma', 'sœur', 'sont', 'gentils', 'gentilles'], hint: 'Gentils (m.pl.) / gentilles (f.pl.)', feedbackCorrect: 'Très bien ! Mixed group = masculine plural.', feedbackIncorrect: 'Try: Mon frère et ma sœur + sont + gentils' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 17 — My Plans (Futur proche)
  // ═══════════════════════════════════════════════════════════════
  17: {
    id: 'projets',
    icon: '📅',
    title: 'My Plans',
    titleFr: 'Mes projets',
    level: 17,
    difficulty: 3,
    requiredLesson: 17,
    vocabulary: ['Je vais', 'demain', 'la semaine prochaine', 'ce week-end', 'bientôt'],
    missions: [
      { target: 'Je vais cuisiner ce soir', en: 'I am going to cook this evening', words: ['Je', 'vais', 'cuisiner', 'ce', 'soir', 'demain', 'hier', 'manger'], hint: 'Futur proche: aller + infinitive', feedbackCorrect: 'Parfait ! "Je vais" + infinitive = near future.', feedbackIncorrect: 'Try: Je vais + infinitive + ce soir' },
      { target: 'Nous allons au restaurant samedi', en: 'We are going to a restaurant on Saturday', words: ['Nous', 'allons', 'au', 'restaurant', 'samedi', 'dimanche', 'le', 'café'], hint: 'Nous allons = we are going, au = à + le', feedbackCorrect: 'Bien ! "Au restaurant" not "à le restaurant".', feedbackIncorrect: 'Try: Nous allons + au + restaurant + day' },
      { target: 'Je vais faire les courses demain', en: 'I am going to do the shopping tomorrow', words: ['Je', 'vais', 'faire', 'les', 'courses', 'demain', 'hier', 'nettoyer'], hint: 'Je vais faire = I am going to do', feedbackCorrect: 'Excellent ! Two infinitives in a row.', feedbackIncorrect: 'Try: Je vais + faire + les courses + demain' },
      { target: 'La semaine prochaine je vais téléphoner', en: 'Next week I am going to phone', words: ['La', 'semaine', 'prochaine', 'je', 'vais', 'téléphoner', 'demain', 'hier'], hint: 'Time expression at the start for emphasis', feedbackCorrect: 'Très bien ! Time first = emphasis.', feedbackIncorrect: 'Try: La semaine prochaine + je vais + infinitive' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 18 — My Health
  // ═══════════════════════════════════════════════════════════════
  18: {
    id: 'sante',
    icon: '💊',
    title: 'My Health',
    titleFr: 'Ma santé',
    level: 18,
    difficulty: 3,
    requiredLesson: 18,
    vocabulary: ['J\'ai mal à', 'la tête', 'le dos', 'la gorge', 'depuis', 'rendez-vous'],
    missions: [
      { target: 'J\'ai mal à la tête', en: 'I have a headache', words: ['J\'ai', 'mal', 'à', 'la', 'tête', 'tête', 'dos', 'gorge'], hint: 'J\'ai mal à + body part', feedbackCorrect: 'Parfait ! "J\'ai mal à" + body part.', feedbackIncorrect: 'Try: J\'ai mal à + la + body part' },
      { target: 'J\'ai mal au dos depuis hier', en: 'I have back pain since yesterday', words: ['J\'ai', 'mal', 'au', 'dos', 'depuis', 'hier', 'la', 'tête'], hint: 'Au = à + le (masculine)', feedbackCorrect: 'Bien ! "Au dos" not "à le dos".', feedbackIncorrect: 'Try: J\'ai mal + au + dos + depuis hier' },
      { target: 'Je voudrais prendre rendez-vous', en: 'I would like to make an appointment', words: ['Je', 'voudrais', 'prendre', 'rendez-vous', 'faire', 'avoir', 'un'], hint: 'Prendre rendez-vous = make an appointment', feedbackCorrect: 'Excellent ! Essential health phrase.', feedbackIncorrect: 'Try: Je voudrais + prendre + rendez-vous' },
      { target: 'Je suis malade depuis trois jours', en: 'I have been ill for three days', words: ['Je', 'suis', 'malade', 'depuis', 'trois', 'jours', 'hier', 'mal'], hint: 'Depuis + duration = for [time] (ongoing)', feedbackCorrect: 'Très bien ! "Depuis" with present = ongoing illness.', feedbackIncorrect: 'Try: Je suis malade + depuis + duration' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 19 — My Cooking
  // ═══════════════════════════════════════════════════════════════
  19: {
    id: 'cuisine',
    icon: '🍳',
    title: 'My Cooking',
    titleFr: 'Ma cuisine',
    level: 19,
    difficulty: 3,
    requiredLesson: 19,
    vocabulary: ['Je coupe', 'Je mélange', 'J\'ajoute', 'Je fais chauffer', 'Je goûte'],
    missions: [
      { target: 'Je coupe les légumes', en: 'I chop the vegetables', words: ['Je', 'coupe', 'les', 'légumes', 'oignons', 'mélange', 'ajoute'], hint: 'Couper = to cut/chop', feedbackCorrect: 'Parfait ! "Je coupe" = present tense.', feedbackIncorrect: 'Try: Je coupe + les + légumes' },
      { target: 'J\'ajoute du sel et du poivre', en: 'I add some salt and pepper', words: ['J\'ajoute', 'du', 'sel', 'et', 'du', 'poivre', 'l\'huile', 'l\'eau'], hint: 'Du = de + le (masculine), de l\' = before vowel', feedbackCorrect: 'Bien ! "Du sel" not "de le sel".', feedbackIncorrect: 'Try: J\'ajoute + du + sel + et + du + poivre' },
      { target: 'Je fais chauffer l\'huile d\'olive', en: 'I heat up the olive oil', words: ['Je', 'fais', 'chauffer', 'l\'huile', 'd\'olive', 'l\'eau', 'le', 'beurre'], hint: 'Faire chauffer = to heat up', feedbackCorrect: 'Excellent ! "Faire" + action verb.', feedbackIncorrect: 'Try: Je fais chauffer + l\'huile d\'olive' },
      { target: 'Je goûte et je sers chaud', en: 'I taste and I serve hot', words: ['Je', 'goûte', 'et', 'je', 'sers', 'chaud', 'chaude', 'mange'], hint: 'Goûter = to taste, servir → je sers', feedbackCorrect: 'Très bien ! "Je sers" from servir.', feedbackIncorrect: 'Try: Je goûte + et + je sers + chaud' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU 20 — Living French (Colloquial)
  // ═══════════════════════════════════════════════════════════════
  20: {
    id: 'francais_reel',
    icon: '🗣️',
    title: 'Living French',
    titleFr: 'Français réel',
    level: 20,
    difficulty: 4,
    requiredLesson: 20,
    vocabulary: ['Ça marche', 'Bof', 'Nickel', 'Pas terrible', 'Du coup', 'Franchement'],
    missions: [
      { target: 'Ça marche nickel', en: 'OK perfect', words: ['Ça', 'marche', 'nickel', 'bof', 'parfait', 'bon'], hint: 'Ça marche = OK, nickel = perfect', feedbackCorrect: 'Parfait ! Pure spoken French!', feedbackIncorrect: 'Try: Ça marche + nickel' },
      { target: 'Franchement c\'est pas terrible', en: 'Frankly it\'s not great', words: ['Franchement', 'c\'est', 'pas', 'terrible', 'bon', 'mauvais', 'bof'], hint: 'Pas terrible = NOT great (trap for English speakers!)', feedbackCorrect: 'Bien ! "Pas terrible" = disappointing.', feedbackIncorrect: 'Try: Franchement + c\'est pas + terrible' },
      { target: 'Du coup je vais au marché', en: 'So I am going to the market', words: ['Du', 'coup', 'je', 'vais', 'au', 'marché', 'donc', 'alors'], hint: 'Du coup = so / therefore (very common)', feedbackCorrect: 'Excellent ! "Du coup" is everywhere in spoken French!', feedbackIncorrect: 'Try: Du coup + je vais + au marché' },
      { target: 'Bof ça dépend', en: 'Meh it depends', words: ['Bof', 'ça', 'dépend', 'peut-être', 'oui', 'non'], hint: 'Bof = meh, ça dépend = it depends', feedbackCorrect: 'Très bien ! The classic French non-answer!', feedbackIncorrect: 'Try: Bof + ça dépend' }
    ]
  }

};

// ═══════════════════════════════════════════════════════════════════
// Export
// ═══════════════════════════════════════════════════════════════════
if (typeof window !== 'undefined') {
  window.SENTENCE_BUILDER_DATA = SENTENCE_BUILDER_DATA;
}
