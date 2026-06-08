// ═══════════════════════════════════════════════════════════════════
// FLIP COLONNES LEÇONS — v3.0
// Inverse l'ordre French/Phonetics/English → English/Phonetics/French
// dans le HTML des leçons au moment de l'affichage
// ═══════════════════════════════════════════════════════════════════

function flipLessonColumns(htmlContent) {
  if (!htmlContent) return htmlContent;

  const temp = document.createElement('div');
  temp.innerHTML = htmlContent;

  // Trouver toutes les tables de leçon
  temp.querySelectorAll('table.lesson-table').forEach(table => {
    const rows = table.querySelectorAll('tr');
    if (rows.length < 2) return;

    // Modifier l'en-tête
    const header = rows[0];
    const ths = header.querySelectorAll('th');
    if (ths.length >= 3) {
      // Inverser : FR/Phon/EN → EN/Phon/FR
      const fr = ths[0].textContent;
      const phon = ths[1].textContent;
      const en = ths[2].textContent;
      ths[0].textContent = en;
      ths[1].textContent = phon;
      ths[2].textContent = fr;
    }

    // Modifier les lignes de données
    for (let i = 1; i < rows.length; i++) {
      const tds = rows[i].querySelectorAll('td');
      if (tds.length >= 3) {
        const frCell = tds[0].innerHTML;
        const phonCell = tds[1].innerHTML;
        const enCell = tds[2].innerHTML;
        tds[0].innerHTML = enCell;
        tds[1].innerHTML = phonCell;
        tds[2].innerHTML = frCell;
      }
    }
  });

  return temp.innerHTML;
}
