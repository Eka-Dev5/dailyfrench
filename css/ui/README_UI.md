# ui/ — Daily French 🥖 v3.0

## Contenu

| Fichier | Rôle | Fréquence de modification |
|---------|------|---------------------------|
| `hero.css` | Bandeau joueur + bento stats | Rare |
| `components.css` | Boutons, inputs, modals, toast | Moyenne |
| `settings.css` | Panel settings (thème/langue/direction) | Rare |
| `vocab.css` | Popup vocabulaire + surlignement mots | Moyenne |
| `game.css` | Tout le quiz : QCM, feedback, barres, score | Fréquente |

## Règles

- `game.css` est le fichier le plus actif → le plus petit (facile à chercher dedans)
- `components.css` est partagé par toutes les pages
- `vocab.css` est utilisé par quiz.html, vocabulary.html et dashboard.html

## Quand modifier

| Tu veux changer... | Tu modifies... |
|-------------------|----------------|
| La couleur d'un bouton | `components.css` |
| Le style du quiz | `game.css` |
| Le popup de vocabulaire | `vocab.css` |
| Le bandeau joueur | `hero.css` |
| Le panel settings | `settings.css` |
