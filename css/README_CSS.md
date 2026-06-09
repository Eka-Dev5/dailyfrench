# CSS — Daily French 🥖 v3.0

## Structure

css/
├── base.css              ← Point d'entrée unique (@import)
├── README.md
├── foundation/           ← Structure de base (stable)
│   ├── variables.css
│   ├── reset.css
│   ├── layout.css
│   └── README.md
├── navigation/          ← Menus top et bottom
│   ├── nav.css
│   └── README.md
└── ui/                  ← Composants d'interface
├── hero.css
├── components.css
├── settings.css
├── vocab.css
├── game.css
└── README.md


## Règles

- **Modifier un petit fichier**, pas le gros
- **base.css** ne contient QUE des `@import`
- Chaque sous-dossier a son propre `README.md`

## Utilisation dans HTML

```html
<link rel="stylesheet" href="css/base.css">
Historique
 • v3.0 (juin 2026) : Scission de base.css monolithique (~1800 lignes) en modules


---

### `css/foundation/README.md`
```markdown
# foundation/ — Daily French 🥖 v3.0

## Contenu

| Fichier | Rôle | Fréquence de modification |
|---------|------|---------------------------|
| `variables.css` | Variables CSS + 3 thèmes (Ardoise, Mauve, Terra) | Rare (nouveau thème) |
| `reset.css` | Reset CSS + base body + focus visible + reduced motion | Jamais |
| `layout.css` | Orbes décoratifs, sections, conteneurs, cartes, utilitaires, keyframes, responsive global | Rare |

## Règle d'or

> Ce dossier est **stable**. Ne pas y toucher en cours de développement normal.
> Si tu modifies ici, tu impacts **toutes les pages**.

## Variables CSS principales

- `--primary`, `--primary-mid`, `--primary-light` : Palette principale
- `--hero-from`, `--hero-via`, `--hero-to` : Dégradé hero
- `--coral`, `--gold`, `--green`, `--red` : Accents fonctionnels
- `--text`, `--muted`, `--subtle` : Textes
- `--bg`, `--bg-card`, `--white` : Surfaces
- `--shadow-sm`, `--shadow`, `--shadow-lg` : Ombres
- `--r-sm`, `--r`, `--r-lg` : Rayons de bordure
- `--font-xs` à `--font-xxl` : Typographie (base 16px)
- `--space-xs` à `--space-xl` : Espacement
- `--transition-fast`, `--transition-base` : Transitions

## Thèmes

- `[data-theme="mauve"]` : Violet (#7C3AED)
- `[data-theme="terra"]` : Terre cuite (#9A3412)
- Défaut (pas d'attribut) : Ardoise (#4A5568)
