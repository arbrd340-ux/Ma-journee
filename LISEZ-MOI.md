# Ma journée — application web pour iPhone

Trois fichiers : `index.html` (toute l'app), `manifest.json` (l'installation) et `sw.js` (le mode hors ligne).

## Mettre l'app en ligne depuis l'iPhone

Tout se fait dans Safari, sans ordinateur. Compte GitHub gratuit requis.

1. Télécharge les trois fichiers. Ils arrivent dans **Fichiers → Téléchargements**.
2. Sur **github.com**, crée un compte si tu n'en as pas.
3. **+** en haut à droite → **New repository**. Nom : `majournee`, coche **Public**, **Create repository**.
4. **Add file** → **Upload files** → ajoute les trois fichiers → **Commit changes**.
5. **Settings** → **Pages** → Source : **Deploy from a branch**, branche **main**, dossier **/ (root)** → **Save**.
6. Une à deux minutes plus tard, ton adresse apparaît : `https://tonpseudo.github.io/majournee/`

## Installer sur l'écran d'accueil

Ouvre l'adresse dans **Safari**, bouton **Partager** → **Sur l'écran d'accueil** → **Ajouter**.

L'installation n'est pas décorative : une app ajoutée à l'écran d'accueil est bien mieux protégée contre l'effacement automatique des données par Safari qu'un simple onglet.

## Les cinq onglets

| Onglet | Contenu |
|---|---|
| Journée | Tâches avec heure, répétition, modification par simple appui sur le texte, avancement, reprise des tâches d'hier |
| Habitudes | Cases à cocher, historique 7 jours, série de jours consécutifs |
| Suivi | Humeur, sommeil, verres d'eau, minutes d'activité |
| Semaine | Graphique des tâches terminées, humeur jour par jour, moyennes sur 7 jours |
| Bilan | Récapitulatif, notes libres, une bonne chose du jour, note sur 5 |

La roue dentée en haut à droite ouvre les réglages : sauvegarde, liste des tâches récurrentes, effacement.

## Tes données

Elles vivent uniquement dans le navigateur de ton iPhone. Rien n'est envoyé nulle part.

**Fais une copie de temps en temps** : Réglages → Enregistrer une copie. Tu obtiens un fichier `majournee-2026-09-04.json` que tu ranges dans Fichiers, iCloud ou que tu t'envoies par mail. Le bouton **Restaurer** le relit. L'app te rappelle elle-même de le faire si ça fait plus de deux semaines.

Sans cette copie, changer de téléphone ou effacer les données de site fait tout disparaître.

## Les rappels

Une app web ne peut pas déclencher de notification à heure fixe sur iPhone. Le contournement : appuie sur une tâche qui a une heure, puis sur **Créer un rappel dans le calendrier**. L'iPhone propose d'ajouter l'événement, avec une alerte 5 minutes avant. C'est le calendrier d'Apple qui sonne, pas l'app.

## Modifier l'app

Sur github.com, ouvre `index.html`, appuie sur le crayon, modifie, **Commit changes**. Le site se met à jour en une minute. Ferme puis rouvre l'app pour voir la nouvelle version.
