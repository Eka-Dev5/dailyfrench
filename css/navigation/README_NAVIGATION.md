# navigation/ — Daily French 🥖 v3.0

## Contenu

| Fichier | Rôle |
|---------|------|
| `nav.css` | Nav-top (fixe, 5 items) + Nav-bottom (fixe, 5 items) |

## Classes CSS

### Nav-top (menu haut)
- `.nav-top` : Conteneur fixe en haut
- `.nav-top-item` : Lien individuel
- `.nav-top-item.active` : État actif
- `.nav-top-icon` : Icône emoji

### Nav-bottom (menu bas)
- `.nav-bottom` : Conteneur fixe en bas
- `.nav-item` : Lien individuel
- `.nav-item.active` : État actif
- `.nav-icon` : Icône emoji

## Quand modifier

- Changement d'icône dans le menu
- Changement de nombre d'items
- Ajustement hauteur/padding (safe-area)
- Nouveau style de navigation

## Liens

- `nav.js` injecte le HTML des menus dynamiquement
- Les classes `.nav-top-item` et `.nav-item` sont stylées ici
- Le menu haut a 5 items : SOS, Talk, Listen, Phrase, Config
- Le menu bas a 5 items : Start, Lessons, Play, Vocab, Dashboard
