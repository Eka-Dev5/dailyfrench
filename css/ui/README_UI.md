# ui/ — Daily French 🥖 v3.0

## Contenu

| Fichier | Rôle | Fréquence de modification |
|---------|------|---------------------------|
| `hero.css` | Bandeau joueur (avatar, nom, XP) + bento stats (3 tuiles) | Rare |
| `components.css` | Boutons (primary, secondary, ghost, large, small), inputs, modals, toast | Moyenne |
| `settings.css` | Panel settings (thème, langue, direction) | Rare |
| `vocab.css` | Popup vocabulaire (définition mot) + surlignement `.vocab-word` | Moyenne |
| `game.css` | Tout le quiz : QCM, feedback, barres, score-circle, game-actions, levels, lessons, modes | Fréquente |

## Règles

- `game.css` est le fichier le plus actif → le plus petit (facile à chercher dedans)
- `components.css` est partagé par toutes les pages
- `vocab.css` est utilisé par quiz.html, vocabulary.html et dashboard.html

## Quand modifier

| Tu veux changer... | Tu modifies... |
|-------------------|----------------|
| La couleur d'un bouton | `components.css` |
| Le style du quiz (QCM, feedback, etc.) | `game.css` |
| Le popup de vocabulaire | `vocab.css` |
| Le bandeau joueur | `hero.css` |
| Le panel settings | `settings.css` |
| Les menus top/bottom | `navigation/nav.css` (pas ici) |

## Classes importantes

### Boutons
- `.btn-primary` : Bouton principal (fond coloré)
- `.btn-secondary` : Bouton secondaire (fond clair)
- `.btn-ghost` : Bouton fantôme (bordure)
- `.btn-large`, `.btn-small` : Tailles

### Modal
- `.modal-wrap` : Overlay
- `.modal-wrap.open` : Overlay visible
- `.modal` : Contenu
- `.modal-actions` : Zone boutons

### Toast
- `.toast` : Notification (cachée par défaut)
- `.toast.on` : Notification visible

### Game
- `.feedback-area`, `.feedback-success`, `.feedback-error`
- `.qcm-options`, `.option-btn`, `.option-btn.selected`
- `.bar-track`, `.bar-fill`
- `.score-circle`, `.score-pct`
- `.level-tile`, `.level-tile.completed`, `.level-tile.active`, `.level-tile.locked`
