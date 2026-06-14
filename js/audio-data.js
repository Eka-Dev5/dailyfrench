// ================================================================
// AUDIO-DATA.JS — Daily French 🥖 v2.0
// Phrases pour le jeu Listen & Repeat — Niveaux 1-10
// Aligné avec LESSONS_DATA 1-20
// ================================================================

const AUDIO_PHRASES = {
  // ... (niveaux 1-5 existants conservés tels quels) ...

  6: [
    {fr:"Je voudrais ouvrir un compte bancaire.",phon:"*zhuh voo-DRAY oo-VEER an konnt bon-KAIR*",en:"I would like to open a bank account.",cat:"🏦 Admin",tip:"'Ouvrir' = to open. 'Un compte' = an account. 'Bancaire' = bank-related."},
    {fr:"Vous acceptez les chèques ?",phon:"*voo zak-SEP-tay lay SHEK*",en:"Do you accept cheques?",cat:"💳 Payment",tip:"'Acceptez' = you accept. 'Chèques' = cheques. Still used in France!"},
    {fr:"Je paie par carte bancaire.",phon:"*zhuh pay par KART bon-KAIR*",en:"I'm paying by debit card.",cat:"💳 Payment",tip:"'Carte bancaire' = debit card. Not 'carte de crédit' — French use debit more."},
    {fr:"Avez-vous la monnaie pour 50 euros ?",phon:"*a-vay-VOO la mo-NAY poor SAN-tant uh-RO*",en:"Do you have change for 50 euros?",cat:"💰 Change",tip:"'La monnaie' = change/coins. Not 'argent' — that's money in general."},
    {fr:"Je voudrais un ticket de caisse, s'il vous plaît.",phon:"*zhuh voo-DRAY an tee-KAY de KESS seel voo PLAY*",en:"I'd like a receipt, please.",cat:"🧾 Receipt",tip:"'Ticket de caisse' = receipt. 'Caisse' = till/checkout."}
  ],

  7: [
    {fr:"Ça vous dit d'aller au cinéma ?",phon:"*sa voo DEE da-lay oh see-NAY-ma*",en:"Would you like to go to the cinema?",cat:"🎬 Social",tip:"'Ça vous dit de...' = Fancy...? / Would you like to...? Very natural French."},
    {fr:"Je suis libre samedi soir.",phon:"*zhuh swee LEE-bruh sam-DEE SWAR*",en:"I'm free on Saturday evening.",cat:"📅 Availability",tip:"'Libre' = free/available. 'Samedi soir' = Saturday evening."},
    {fr:"On se retrouve à quelle heure ?",phon:"*on suh ruh-TROOV a kel UR*",en:"What time shall we meet?",cat:"📅 Arranging",tip:"'On se retrouve' = we meet up. Very common for making plans."},
    {fr:"Avec plaisir !",phon:"*a-vek play-ZEER*",en:"With pleasure!",cat:"🎉 Enthusiasm",tip:"Warm, enthusiastic yes. Much nicer than just 'd'accord'."},
    {fr:"Peut-être la prochaine fois.",phon:"*puh-TARE la pro-SHEN FWAH*",en:"Maybe next time.",cat:"🙅 Declining",tip:"'Peut-être' = maybe. 'La prochaine fois' = next time. Polite way to decline."}
  ],

  8: [
    {fr:"Quel temps fait-il aujourd'hui ?",phon:"*kel ton fay-TEEL oh-zhoor-DWEE*",en:"What's the weather like today?",cat:"🌤️ Weather",tip:"Classic French question. 'Quel temps' = what weather. 'Fait-il' = is it."},
    {fr:"Il fait beau mais il va pleuvoir demain.",phon:"*eel fay BOH may eel va pluh-VWAR duh-MAN*",en:"It's nice but it's going to rain tomorrow.",cat:"🌤️ Weather",tip:"'Il va + infinitive' = near future. 'Pleuvoir' = to rain (irregular)."},
    {fr:"Il y a du brouillard ce matin.",phon:"*eel ee a du broo-YAR suh ma-TAN*",en:"It's foggy this morning.",cat:"🌫️ Weather",tip:"'Brouillard' = fog. 'Il y a du...' = there is some..."},
    {fr:"Il fait 30 degrés, c'est insupportable !",phon:"*eel fay TRANT duh-GRAY say an-suh-por-TA-bluh*",en:"It's 30 degrees, it's unbearable!",cat:"🌡️ Temperature",tip:"'Degrés' = degrees. 'Insupportable' = unbearable. French love complaining about heat!"},
    {fr:"Le printemps est ma saison préférée.",phon:"*luh pran-TON ay ma say-ZON pray-fay-RAY*",en:"Spring is my favourite season.",cat:"🌸 Seasons",tip:"'Printemps' = spring. 'Préférée' = favourite (feminine, agrees with 'saison')."}
  ],

  9: [
    {fr:"Je vais faire les courses ce matin.",phon:"*zhuh vay fair lay KOORS suh ma-TAN*",en:"I'm going to do the shopping this morning.",cat:"🛒 Routine",tip:"'Je vais + infinitive' = near future. 'Faire les courses' = do the shopping."},
    {fr:"Nous allons au marché demain.",phon:"*noo za-lon oh mar-SHAY duh-MAN*",en:"We're going to the market tomorrow.",cat:"🛒 Plans",tip:"'Nous allons' = we go / we're going. 'Au marché' = to the market."},
    {fr:"Je dois nettoyer la maison.",phon:"*zhuh dwah net-wa-YAY la may-ZON*",en:"I need to clean the house.",cat:"🏠 Chores",tip:"'Je dois + infinitive' = I must / I need to. 'Nettoyer' = to clean."},
    {fr:"Elle va téléphoner à sa mère.",phon:"*ell va tay-lay-fo-NAY a sa MAIR*",en:"She's going to phone her mother.",cat:"📞 Family",tip:"'Téléphoner à' = to phone someone. Always 'à' before the person."},
    {fr:"Je vais me reposer ce week-end.",phon:"*zhuh vay muh ruh-po-ZAY suh WEEK-end*",en:"I'm going to rest this weekend.",cat:"😌 Rest",tip:"'Me reposer' = to rest (myself). Reflexive verb. 'Ce week-end' = this weekend."}
  ],

  10: [
    {fr:"Pourriez-vous m'aider, s'il vous plaît ?",phon:"*poo-ryay-VOO may-DAY seel voo PLAY*",en:"Could you help me, please?",cat:"🎩 Polite",tip:"'Pourriez-vous' = could you (conditional, very polite). Much nicer than 'pouvez-vous'."},
    {fr:"Je ne comprends pas très bien le français.",phon:"*zhuh nuh kom-PRON PAH tray BYAN luh fron-SAY*",en:"I don't understand French very well.",cat:"💬 Essential",tip:"Your magic phrase! Say it confidently and French people will slow down."},
    {fr:"Pouvez-vous répéter plus lentement ?",phon:"*poo-vay-VOO ray-pay-TAY plue lon-tuh-MON*",en:"Can you repeat more slowly?",cat:"💬 Essential",tip:"'Plus lentement' = more slowly. Essential for learners!"},
    {fr:"Je suis désolé, je suis en retard.",phon:"*zhuh swee day-zo-LAY zhuh swee on ruh-TAR*",en:"I'm sorry, I'm late.",cat:"🙏 Apology",tip:"'En retard' = late. 'Désolé(e)' = sorry. Always apologise for being late in France!"},
    {fr:"Franchement, c'était pas terrible.",phon:"*fron-SHE-mon say-TAY pa tay-REE-bluh*",en:"Honestly, it wasn't great.",cat:"🗣️ Colloquial",tip:"'Franchement' = honestly. 'Pas terrible' = not great (TRAP: not 'not terrible'!)"}
  ]
};
