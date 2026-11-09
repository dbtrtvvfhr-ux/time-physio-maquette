# Time-Physio — maquette de refonte (v2)

Maquette statique (HTML / CSS / JS), sans dépendance ni build. Trois directions artistiques
commutables sur la même page et le même contenu.

## Ouvrir la maquette

```bash
cd maquette
python3 -m http.server 8123
```

Puis <http://127.0.0.1:8123/>. Options d'URL : `?piste=b`, `?piste=c` pour arriver sur une
piste, `&clean=1` pour masquer la barre de sélection (captures propres).

## Les trois pistes

Le sélecteur en bas de l'écran change de piste sans quitter la page. Le choix est mémorisé
et peut être partagé par URL.

| Piste | Nom | Ce qu'elle raconte | Couleurs / typo |
|---|---|---|---|
| **01** | Cabinet de quartier | Chaleur, lumière naturelle, approche humaine. | Crème, bleu marine, vert olive · titres serif (Fraunces) |
| **02** | Geste précis | Précision, propreté, crédibilité clinique. | Blanc, bleu nuit, vert en filets · titres sans (Inter) |
| **03** | Pleine amplitude | Énergie, mouvement, réathlétisation. | Bleu nuit profond, vert acide · titres Archivo capitales |

Les trois conservent le **bleu marine** et le **vert du logo** (`#A9C525`).

## Ce qui est réel, ce qui est provisoire

**Réel, repris du site actuel**
- Tous les contenus : approche, pathologies, locaux, équipements, tarifs, horaires, accès.
- Les photos du cabinet et du plateau (recadrées, désaturées, réchauffées).
- Les visuels des trois machines (PNG détourés d'origine).
- L'adresse et la position GPS (plan OpenStreetMap).

**Provisoire, à remplacer**
- **Photos de soins** : banque d'images Pexels (voir crédits). À remplacer par un reportage
  de 2 h au cabinet — c'est le seul vrai levier pour passer du « joli » au « vrai ».
- **Avis** : trois citations d'exemple, marquées « exemple », note explicite sous la grille.
- **Réservation** : le formulaire date/heure est un décor, à brancher sur le système du cabinet.
- **Contact** : le formulaire n'envoie rien (message « maquette »).
- **Logo** : proposition modernisée (4 silhouettes simplifiées + « time-physio » en Fraunces).
  C'est une proposition, pas une décision — on peut revenir à l'ancien en une ligne.

**Retiré volontairement**
- La section « Équipe » (refus du cabinet) et son entrée de menu.

## Crédits

Photos d'illustration sous licence Pexels (usage commercial libre, attribution non obligatoire) :

| Fichier | Sujet | Pexels |
|---|---|---|
| `assets/img/stock/hero-hands.jpg` | séance de physiothérapie, genou | [5793895](https://www.pexels.com/photo/5793895/) |
| `assets/img/stock/back.jpg` | travail manuel sur le dos | [5473182](https://www.pexels.com/photo/5473182/) |
| `assets/img/stock/knee.jpg` | douleur au genou | [11349880](https://www.pexels.com/photo/11349880/) |
| `assets/img/stock/shoulder.jpg` | traitement de l'épaule | [5793694](https://www.pexels.com/photo/5793694/) |
| `assets/img/stock/exercise.jpg` | exercice de réathlétisation | [6111613](https://www.pexels.com/photo/6111613/) |
| `assets/img/stock/postop.jpg` | mobilisation après opération | [6111588](https://www.pexels.com/photo/6111588/) |
| `assets/img/stock/home.jpg` | soin à domicile | [5473177](https://www.pexels.com/photo/5473177/) |
| `assets/img/stock/approche.jpg` | mains du physiothérapeute | [6560291](https://www.pexels.com/photo/6560291/) |

Plan : © OpenStreetMap contributors, [ODbL](https://www.openstreetmap.org/copyright).
Fond de carte assemblé en une image statique (`assets/img/map.jpg`) — pas d'iframe, pas de clé API.

## Ce que la v2 corrige (retours du 8 novembre)

- **Le module de réservation ne chevauche plus la photo** : il devient une barre pleine largeur
  sous le hero, sur fond vert pâle.
- **Les 4 arguments** ne sont plus numérotés : quatre bulles, titres agrandis.
- **Textes réduits** partout (page : 9 800 px → 7 900 px sur desktop).
- **Section « Vous venez pour… »** : sous-texte supprimé, cartes plus dynamiques (survol,
  flèche, zoom photo).
- **Approche** : nouvelle photo (macro, différente du hero), en pleine largeur, fondue dans
  le vert — la photo occupe la moitié de la page.
- **Machines** : titre au même niveau que les autres sections, plus de cadre blanc, produits
  détourés et agrandis.
- **Équipe** : section supprimée.
- **Plan d'accès** intégré.
- **Plus de vert** : barre de réservation, bande « approche », survols.
- **Animations** : apparition au scroll, décalée carte par carte.
- **Logo** modernisé, net à toutes les tailles (SVG inline + typographie).

## Ce que la v3 corrige (retours du 8 novembre, 2e passe)

- **Lausanne visible dès le haut** : pastille verte avec épingle « Av. de France 64 · **1004 Lausanne** »
  au-dessus du titre, et « à Lausanne » dans l'accroche.
- **Cartes « Vous venez pour… » réordonnées** : « reprise du sport » et « après une opération »
  ne se suivent plus ; la photo « après opération » est recadrée serré sur la jambe appareillée.
- **Machines** : plus aucun chevauchement avec les textes (le cadre image réserve sa hauteur),
  détourage nettoyé (halo blanc supprimé), produits recadrés au plus près et agrandis,
  ombre portée au sol pour les asseoir.
- **Plan** : recentré au niveau 17 (Avenue de France, Saint-Paul, Parc de Valency lisibles),
  en pleine largeur sous les tarifs, repère plus gros.

## Ce que la v4 corrige (retours du 8 novembre, 3e passe)

- **La pastille d'adresse est cliquable** : elle descend en douceur jusqu'au plan (`#acces`).
- **Plan plus serré** : zoom 18 au lieu de 17 — Avenue de France, Avenue d'Echallens,
  Avenue Saint-Paul, Chemin des Aubépines sont lisibles, avec le repère à l'angle de l'avenue.
- **Les deux liens du hero sont retirés** (« Voir les soins » / « Découvrir les locaux »),
  la navigation les reprend déjà.
- **Photo du hero recadrée et fondue** : elle saigne jusqu'au bord droit et se dissout dans
  le fond crème à gauche. Le cadrage coupe les yeux, garde la bouche et les deux mains posées
  sur le genou.
- **Icône calendrier** devant « Prendre rendez-vous ».
- **Traitements spécialisés** : sortis de la grille des pathologies, dans une bande verte
  avec un vrai titre et des pastilles plus grandes (contenu vérifié mot pour mot sur le site
  d'origine, seuls les libellés longs sont abrégés).
- Correctif mobile : l'image du hero recouvrait le texte sur petit écran.

## Structure des fichiers

```
maquette/
├── index.html
├── assets/
│   ├── css/style.css     # tokens par piste ([data-piste="a|b|c"])
│   ├── js/main.js        # piste, menu mobile, apparitions, formulaires démo
│   └── img/
│       ├── mark.svg      # symbole du logo (favicon)
│       ├── map.jpg       # plan statique OpenStreetMap
│       ├── photos/       # cabine, plateau (retouchées)
│       ├── machines/     # les 3 appareils (PNG détourés, 640 px)
│       └── stock/        # photos d'illustration (Pexels)
└── README.md
```

## Prochaines étapes

1. Choisir la piste, ou le croisement.
2. Valider (ou non) la proposition de logo.
3. Accès hébergement → vérifier si le site peut sortir de Divi / gestX.
4. Vrais avis Google + décision sur la réservation en ligne.
5. Optionnel : reportage photo de 2 h au cabinet.
