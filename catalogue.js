// Catalogue de Ma journée : routines, journées types, habitudes proposées.
// Chargé seulement quand tu ouvres une bibliothèque, pour ne pas alourdir l'app.
(function(){
const BIBLIO = [
  // ---- Matin ----
  {cat:"Matin", nom:"Matin en douceur", emoji:"🌅", depart:"07:00", etapes:[["Boire un grand verre d'eau",5],["Étirements",10],["Douche",15],["Petit déjeuner",20],["Écrire les 3 priorités du jour",5]]},
  {cat:"Matin", nom:"Réveil express", emoji:"⚡️", depart:"06:45", etapes:[["Faire le lit",5],["Douche",10],["Café et départ",15]]},
  {cat:"Matin", nom:"Matin sportif", emoji:"🏃", depart:"06:30", etapes:[["Verre d'eau",5],["Échauffement",10],["Course ou renforcement",30],["Douche",15],["Petit déjeuner",20]]},
  {cat:"Matin", nom:"Matin silencieux", emoji:"🧘", depart:"06:00", etapes:[["Respiration",10],["Méditation",15],["Journal du matin",15],["Lecture",20]]},
  {cat:"Matin", nom:"Départ au bureau", emoji:"🏢", depart:"07:00", etapes:[["Douche et habillage",25],["Petit déjeuner",20],["Vérifier l'agenda du jour",10],["Trajet",40]]},

  // ---- Travail ----
  {cat:"Travail", nom:"Travail concentré", emoji:"🧠", depart:"09:00", etapes:[["Couper les notifications",5],["Premier bloc",50],["Pause",10],["Deuxième bloc",50]]},
  {cat:"Travail", nom:"Pomodoro, 4 cycles", emoji:"🍅", depart:null, etapes:[["Cycle 1",25],["Pause",5],["Cycle 2",25],["Pause",5],["Cycle 3",25],["Pause",5],["Cycle 4",25],["Grande pause",20]]},
  {cat:"Travail", nom:"Démarrage de journée", emoji:"☕️", depart:"09:00", etapes:[["Relire les priorités",10],["Trier les messages",20],["Tâche la plus difficile",60]]},
  {cat:"Travail", nom:"Fin de journée propre", emoji:"📤", depart:"17:00", etapes:[["Vider la boîte mail",20],["Noter où j'en suis",10],["Préparer les 3 priorités de demain",10],["Fermer",5]]},
  {cat:"Travail", nom:"Préparer une réunion", emoji:"🗣", depart:null, etapes:[["Relire le sujet",10],["Écrire l'objectif",5],["Préparer 3 points",15],["Anticiper les questions",10]]},
  {cat:"Travail", nom:"Revue de la semaine", emoji:"📋", depart:null, etapes:[["Relire l'agenda passé",15],["Ce qui a avancé",10],["Ce qui a bloqué",10],["Priorités de la semaine",20]]},

  // ---- Sport ----
  {cat:"Sport", nom:"Séance en salle", emoji:"🏋️", depart:null, etapes:[["Échauffement",10],["Séance",45],["Étirements",10],["Douche",15]]},
  {cat:"Sport", nom:"Course à pied", emoji:"👟", depart:null, etapes:[["Échauffement",10],["Course",35],["Retour au calme",10]]},
  {cat:"Sport", nom:"Renforcement à la maison", emoji:"💪", depart:null, etapes:[["Échauffement",5],["Circuit 1",15],["Circuit 2",15],["Gainage",10],["Étirements",10]]},
  {cat:"Sport", nom:"Étirements du soir", emoji:"🤸", depart:"21:30", etapes:[["Dos et nuque",5],["Jambes",5],["Hanches",5]]},
  {cat:"Sport", nom:"Marche active", emoji:"🚶", depart:null, etapes:[["Marche",45]]},
  {cat:"Sport", nom:"Yoga doux", emoji:"🧎", depart:null, etapes:[["Respiration",5],["Enchaînement",30],["Relaxation",10]]},

  // ---- Développement personnel ----
  {cat:"Développement perso", nom:"Lecture et notes", emoji:"📖", depart:null, etapes:[["Lecture",30],["Noter ce que je retiens",10]]},
  {cat:"Développement perso", nom:"Cours en ligne", emoji:"🎓", depart:null, etapes:[["Revoir la leçon précédente",10],["Nouvelle leçon",40],["Exercices",20],["Résumé écrit",10]]},
  {cat:"Développement perso", nom:"Journal et objectifs", emoji:"✍️", depart:null, etapes:[["Vider ce que j'ai en tête",15],["Relire mes objectifs",10],["Une action concrète",5]]},
  {cat:"Développement perso", nom:"Méditation", emoji:"🧘", depart:null, etapes:[["Installation",5],["Assise",15],["Retour au calme",5]]},
  {cat:"Développement perso", nom:"Langue étrangère", emoji:"🗺", depart:null, etapes:[["Vocabulaire",15],["Écoute",20],["Parler à voix haute",10]]},
  {cat:"Développement perso", nom:"Bilan hebdomadaire", emoji:"🔭", depart:null, etapes:[["Relire la semaine",15],["Trois réussites",10],["Un point à changer",10],["Plan de la semaine",20]]},

  // ---- Projet personnel ----
  {cat:"Projet perso", nom:"Session projet", emoji:"🚀", depart:null, etapes:[["Relire où j'en suis",10],["Bloc de travail",60],["Pause",10],["Bloc de travail",50],["Noter la prochaine étape",10]]},
  {cat:"Projet perso", nom:"Écriture", emoji:"📝", depart:null, etapes:[["Relire la veille",10],["Écrire sans corriger",45],["Relecture",20]]},
  {cat:"Projet perso", nom:"Création de contenu", emoji:"🎬", depart:null, etapes:[["Idées",15],["Production",60],["Montage ou mise en forme",45],["Publication",15]]},
  {cat:"Projet perso", nom:"Apprendre à coder", emoji:"💻", depart:null, etapes:[["Revoir hier",10],["Nouveau chapitre",40],["Exercice pratique",45]]},

  // ---- Maison ----
  {cat:"Maison", nom:"Ménage express", emoji:"🧺", depart:null, etapes:[["Vaisselle",10],["Sols",15],["Salle de bain",10],["Lancer une lessive",5]]},
  {cat:"Maison", nom:"Courses et repas", emoji:"🍳", depart:null, etapes:[["Faire la liste",10],["Courses",40],["Ranger",10],["Préparer le repas",30]]},
  {cat:"Maison", nom:"Papiers et factures", emoji:"💼", depart:null, etapes:[["Trier le courrier",10],["Payer ce qui est dû",15],["Classer",10]]},
  {cat:"Maison", nom:"Batch cooking", emoji:"🥘", depart:null, etapes:[["Menus de la semaine",15],["Courses",45],["Cuisiner",90],["Répartir en portions",20]]},

  // ---- Soir ----
  {cat:"Soir", nom:"Soirée calme", emoji:"🌙", depart:"21:00", etapes:[["Ranger 10 minutes",10],["Préparer les affaires de demain",10],["Lecture",20],["Écrans coupés",5]]},
  {cat:"Soir", nom:"Coupure écrans", emoji:"📵", depart:"22:00", etapes:[["Téléphone en charge loin du lit",5],["Lumières basses",5],["Lecture papier",25]]},
  {cat:"Soir", nom:"Bilan du jour", emoji:"⭐️", depart:"21:30", etapes:[["Relire la journée",10],["Une bonne chose",5],["Trois priorités de demain",10]]},
  {cat:"Soir", nom:"Coucher des enfants", emoji:"🧸", depart:"19:30", etapes:[["Bain",20],["Pyjama et dents",10],["Histoire",15],["Lumière éteinte",5]]},

  // ---- Études ----
  {cat:"Études", nom:"Révisions", emoji:"📚", depart:null, etapes:[["Relire les notes",15],["Exercices",40],["Pause",10],["Résumé écrit",15]]},
  {cat:"Études", nom:"Fiches de cours", emoji:"🗂", depart:null, etapes:[["Trier le chapitre",15],["Écrire la fiche",40],["Réciter à voix haute",15]]},
  {cat:"Études", nom:"Veille d'examen", emoji:"🎯", depart:null, etapes:[["Relire les fiches",45],["Annales",60],["Préparer les affaires",15],["Coucher tôt",15]]},
  {cat:"Études", nom:"Rédiger un devoir", emoji:"🖊", depart:null, etapes:[["Relire la consigne",10],["Plan",25],["Rédaction",90],["Relecture",30],["Mise en forme",20]]},

  // ---- Santé et énergie ----
  {cat:"Santé", nom:"Pauses au bureau", emoji:"🪑", depart:null, etapes:[["Se lever et marcher",5],["Épaules et nuque",5],["Reposer les yeux",5]]},
  {cat:"Santé", nom:"Rituel de sommeil", emoji:"😴", depart:"22:00", etapes:[["Lumières basses",5],["Téléphone loin du lit",5],["Respiration lente",10],["Lecture papier",25]]},
  {cat:"Santé", nom:"Préparer un rendez-vous médical", emoji:"🩺", depart:null, etapes:[["Noter les questions",10],["Rassembler les documents",10],["Trajet",30]]},
  {cat:"Santé", nom:"Réveil du dos", emoji:"🧍", depart:null, etapes:[["Mobilité douce",10],["Gainage",10],["Étirements",10]]},
  {cat:"Santé", nom:"Grand air", emoji:"🌤", depart:null, etapes:[["Sortir sans téléphone",5],["Marche",40],["Observer et respirer",10]]},

  // ---- Argent et administratif ----
  {cat:"Argent", nom:"Point budget mensuel", emoji:"💶", depart:null, etapes:[["Relever les comptes",20],["Classer les dépenses",25],["Comparer au prévu",15],["Ajuster le mois suivant",20]]},
  {cat:"Argent", nom:"Chasse aux abonnements", emoji:"✂️", depart:null, etapes:[["Lister les prélèvements",20],["Repérer l'inutile",15],["Résilier",25]]},
  {cat:"Argent", nom:"Déclaration et papiers", emoji:"🗃", depart:null, etapes:[["Rassembler les justificatifs",30],["Remplir",60],["Vérifier",20],["Archiver",15]]},

  // ---- Social et relations ----
  {cat:"Social", nom:"Prendre des nouvelles", emoji:"📞", depart:null, etapes:[["Lister trois personnes",5],["Premier appel",20],["Deuxième appel",20],["Message aux autres",10]]},
  {cat:"Social", nom:"Préparer une soirée", emoji:"🎉", depart:null, etapes:[["Menu et liste",20],["Courses",45],["Ranger",30],["Cuisiner",60],["Se préparer",30]]},
  {cat:"Social", nom:"Réseau professionnel", emoji:"🤝", depart:null, etapes:[["Relancer deux contacts",20],["Publier ou commenter",20],["Noter les suites",10]]},

  // ---- Créativité ----
  {cat:"Créativité", nom:"Séance musique", emoji:"🎸", depart:null, etapes:[["Gammes et échauffement",15],["Travail d'un morceau",35],["Jouer pour le plaisir",20]]},
  {cat:"Créativité", nom:"Dessin ou peinture", emoji:"🎨", depart:null, etapes:[["Croquis rapides",15],["Travail principal",60],["Ranger le matériel",10]]},
  {cat:"Créativité", nom:"Photo", emoji:"📷", depart:null, etapes:[["Repérage",30],["Prises de vue",60],["Tri",30],["Retouche",45]]},
  {cat:"Créativité", nom:"Cuisine plaisir", emoji:"👨‍🍳", depart:null, etapes:[["Choisir la recette",15],["Courses",40],["Cuisiner",75],["Manger et ranger",60]]},

  // ---- Vie numérique ----
  {cat:"Numérique", nom:"Boîte mail à zéro", emoji:"📥", depart:null, etapes:[["Supprimer et désabonner",20],["Répondre en deux minutes",25],["Classer le reste",20]]},
  {cat:"Numérique", nom:"Rangement du téléphone", emoji:"📱", depart:null, etapes:[["Supprimer les applis inutiles",15],["Trier les photos",30],["Couper les notifications",15]]},
  {cat:"Numérique", nom:"Sauvegardes", emoji:"💾", depart:null, etapes:[["Sauvegarder le téléphone",20],["Copier les documents",20],["Vérifier les mots de passe",20]]},
  {cat:"Numérique", nom:"Détox écrans", emoji:"🌵", depart:null, etapes:[["Téléphone en mode avion",5],["Activité sans écran",90],["Noter ce que ça change",10]]},

  // ---- Déplacements ----
  {cat:"Déplacement", nom:"Préparer un voyage", emoji:"🧳", depart:null, etapes:[["Liste des affaires",20],["Valise",45],["Papiers et billets",15],["Vérifier la maison",15]]},
  {cat:"Déplacement", nom:"Veille de départ", emoji:"🚉", depart:"19:00", etapes:[["Dernières affaires",20],["Repas simple",40],["Alarmes et trajet",10],["Coucher tôt",15]]},
  {cat:"Déplacement", nom:"Retour de voyage", emoji:"🏡", depart:null, etapes:[["Défaire la valise",25],["Lessive",15],["Courses de base",40],["Repos",45]]},

  // ---- Compléments ----
  {cat:"Matin", nom:"Matin avec enfants", emoji:"🧒", depart:"06:45", etapes:[["Se préparer avant eux",30],["Réveil des enfants",15],["Petit déjeuner",25],["Habillage et cartables",20],["Départ école",25]]},
  {cat:"Travail", nom:"Rattrapage du lundi", emoji:"🗓", depart:"09:00", etapes:[["Vider la boîte mail",40],["Relire l'agenda de la semaine",20],["Choisir les 3 priorités",20],["Premier bloc",60]]},
  {cat:"Travail", nom:"Journée de réunions", emoji:"👥", depart:null, etapes:[["Relire les ordres du jour",25],["Bloc de notes après réunion",15],["Envoyer les suites",25]]},
  {cat:"Projet perso", nom:"Lancer une idée", emoji:"💡", depart:null, etapes:[["Écrire l'idée en une phrase",10],["Chercher ce qui existe",30],["Première version minuscule",60],["Montrer à une personne",15]]},
  {cat:"Maison", nom:"Grand tri", emoji:"📦", depart:null, etapes:[["Choisir une pièce",10],["Vider et trier",60],["Donner ou jeter",30],["Ranger",30]]},
  {cat:"Maison", nom:"Jardin et plantes", emoji:"🪴", depart:null, etapes:[["Arroser",15],["Tailler",30],["Rempoter",25]]},
  {cat:"Soir", nom:"Soirée à deux", emoji:"🕯", depart:"20:00", etapes:[["Téléphones rangés",5],["Repas ensemble",60],["Discussion ou film",75]]},
  {cat:"Développement perso", nom:"Objectifs du mois", emoji:"🎯", depart:null, etapes:[["Relire le mois passé",20],["Choisir trois objectifs",25],["Découper en actions",30],["Noter dans l'agenda",15]]},
  {cat:"Sport", nom:"Vélo", emoji:"🚴", depart:null, etapes:[["Préparer le vélo",10],["Sortie",75],["Étirements",15]]},
  {cat:"Sport", nom:"Natation", emoji:"🏊", depart:null, etapes:[["Trajet",20],["Nage",45],["Douche",20]]},
  {cat:"Sport co", nom:"Entraînement football", emoji:"⚽️", depart:null, etapes:[["Préparer le sac",10],["Trajet",25],["Échauffement",20],["Technique",30],["Opposition",40],["Retour au calme",10],["Douche et retour",35]]},
  {cat:"Sport co", nom:"Jour de match", emoji:"🏆", depart:null, etapes:[["Repas d'avant-match",45],["Préparer le sac",15],["Trajet",40],["Causerie",20],["Échauffement",25],["Match",100],["Récupération et étirements",20],["Troisième mi-temps",60]]},
  {cat:"Sport co", nom:"Basket", emoji:"🏀", depart:null, etapes:[["Trajet",20],["Échauffement et tirs",25],["Exercices collectifs",35],["Match",45],["Étirements",15]]},
  {cat:"Sport co", nom:"Handball", emoji:"🤾", depart:null, etapes:[["Trajet",20],["Échauffement",20],["Travail de gestes",35],["Opposition",40],["Étirements",15]]},
  {cat:"Sport co", nom:"Volley", emoji:"🏐", depart:null, etapes:[["Trajet",20],["Échauffement",15],["Passes et services",30],["Matchs",50],["Rangement du filet",10]]},
  {cat:"Sport co", nom:"Rugby", emoji:"🏉", depart:null, etapes:[["Trajet",25],["Échauffement",25],["Travail en groupe",40],["Opposition",40],["Étirements et douche",30]]},
  {cat:"Sport co", nom:"Padel ou tennis à deux", emoji:"🎾", depart:null, etapes:[["Réserver le terrain",10],["Trajet",20],["Échauffement",15],["Jeu",75],["Verre ensemble",30]]},
  {cat:"Sport co", nom:"Futsal du soir", emoji:"🥅", depart:"20:00", etapes:[["Trajet",20],["Échauffement",15],["Matchs",60],["Retour",20]]},
  {cat:"Sport co", nom:"Course en groupe", emoji:"🏃‍♂️", depart:null, etapes:[["Rendez-vous",10],["Échauffement collectif",15],["Sortie",50],["Étirements ensemble",15]]},
  {cat:"Sport co", nom:"Sport en salle collective", emoji:"🧑‍🤝‍🧑", depart:null, etapes:[["Trajet",20],["Cours collectif",55],["Étirements",15],["Douche",15]]},
  {cat:"Sport co", nom:"Tournoi", emoji:"🥇", depart:"08:30", etapes:[["Petit déjeuner solide",30],["Trajet",45],["Échauffement",30],["Phase de poules",180],["Repas et repos",60],["Phase finale",120],["Retour et récupération",60]]},
  {cat:"Sport co", nom:"Organiser l'équipe", emoji:"📋", depart:null, etapes:[["Confirmer les présents",15],["Réserver le terrain",10],["Prévenir le groupe",10]]},
  {cat:"Sport", nom:"Sport collectif", emoji:"⚽️", depart:null, etapes:[["Préparer le sac",10],["Trajet",25],["Échauffement",20],["Match ou entraînement",90],["Douche et retour",40]]},
  {cat:"Sport", nom:"Escalade", emoji:"🧗", depart:null, etapes:[["Trajet",25],["Échauffement",15],["Voies ou blocs",75],["Étirements",15]]},
  {cat:"Sport", nom:"Récupération active", emoji:"🌊", depart:null, etapes:[["Marche lente",25],["Mobilité",20],["Automassage",15]]},
  {cat:"Sport", nom:"Séance courte et intense", emoji:"🔥", depart:null, etapes:[["Échauffement",8],["Circuit intense",20],["Retour au calme",12]]},

  // ---- Matin ----
  {cat:"Matin", nom:"Matin de week-end", emoji:"🥐", depart:"08:30", etapes:[["Réveil sans alarme",20],["Petit déjeuner long",45],["Marche ou lecture",45]]},
  {cat:"Matin", nom:"Matin sans écran", emoji:"🚫", depart:"07:00", etapes:[["Téléphone laissé de côté",5],["Douche",15],["Petit déjeuner en conscience",25],["Écrire trois lignes",10]]},
  {cat:"Matin", nom:"Matin en quinze minutes", emoji:"⏱", depart:"07:45", etapes:[["Habillage",5],["Café rapide",5],["Affaires et départ",5]]},

  // ---- Travail ----
  {cat:"Travail", nom:"Point d'équipe", emoji:"📣", depart:null, etapes:[["Préparer ce que je dis",15],["Réunion",30],["Noter les décisions",10],["Répercuter aux concernés",15]]},
  {cat:"Travail", nom:"Attaquer une grosse tâche", emoji:"🪨", depart:null, etapes:[["Découper en trois morceaux",15],["Premier morceau",60],["Pause",10],["Deuxième morceau",60],["Noter où j'en suis",10]]},
  {cat:"Travail", nom:"Rapport mensuel", emoji:"📊", depart:null, etapes:[["Rassembler les chiffres",30],["Analyser",45],["Rédiger",60],["Relire et envoyer",25]]},
  {cat:"Travail", nom:"Se former au travail", emoji:"🎧", depart:null, etapes:[["Choisir le sujet",10],["Suivre la formation",60],["Appliquer sur un cas réel",45]]},
  {cat:"Travail", nom:"Nouveau poste, premiers jours", emoji:"🆕", depart:null, etapes:[["Lire la documentation",60],["Rencontrer une personne",30],["Noter les questions",20],["Petite contribution",60]]},

  // ---- Développement perso ----
  {cat:"Développement perso", nom:"Podcast et notes", emoji:"🎙", depart:null, etapes:[["Écoute",45],["Noter trois idées",10],["Une action à tester",5]]},
  {cat:"Développement perso", nom:"Gratitude du soir", emoji:"🙏", depart:"22:00", etapes:[["Trois choses notées",10],["Relire la semaine passée",10]]},
  {cat:"Développement perso", nom:"Cours du soir", emoji:"🌆", depart:"19:00", etapes:[["Dîner léger",30],["Trajet",25],["Cours",90],["Relire les notes",20]]},
  {cat:"Développement perso", nom:"Prendre du recul", emoji:"🪞", depart:null, etapes:[["Marche sans musique",40],["Écrire ce qui est venu",20]]},
  {cat:"Développement perso", nom:"Parler à un mentor", emoji:"🧭", depart:null, etapes:[["Préparer mes questions",20],["Échange",45],["Noter et décider",20]]},

  // ---- Projet perso ----
  {cat:"Projet perso", nom:"Site ou page personnelle", emoji:"🌐", depart:null, etapes:[["Choisir ce qu'on montre",20],["Écrire les textes",60],["Mise en ligne",45],["Vérifier sur téléphone",15]]},
  {cat:"Projet perso", nom:"Vendre en ligne", emoji:"🛒", depart:null, etapes:[["Photographier les articles",45],["Rédiger les annonces",45],["Publier",20],["Répondre aux messages",20]]},
  {cat:"Projet perso", nom:"Chercher des idées", emoji:"🌀", depart:null, etapes:[["Écrire vingt idées sans filtre",25],["Garder les trois meilleures",15],["Tester la première",45]]},
  {cat:"Projet perso", nom:"Chaîne ou podcast", emoji:"🎥", depart:null, etapes:[["Écrire le déroulé",30],["Enregistrer",60],["Montage",90],["Publication",25]]},

  // ---- Maison ----
  {cat:"Maison", nom:"Cuisine du dimanche", emoji:"🍲", depart:null, etapes:[["Choisir les plats",20],["Préparer les ingrédients",30],["Cuisson",75],["Ranger et répartir",30]]},
  {cat:"Maison", nom:"Réparer ce qui traîne", emoji:"🔧", depart:null, etapes:[["Lister ce qui cloche",15],["Réunir les outils",15],["Réparations",75],["Ranger",15]]},
  {cat:"Maison", nom:"Changer une pièce de place", emoji:"🛋", depart:null, etapes:[["Imaginer le nouveau plan",20],["Vider",30],["Déplacer",60],["Nettoyer et réinstaller",45]]},
  {cat:"Maison", nom:"Préparer la rentrée", emoji:"🎒", depart:null, etapes:[["Liste des fournitures",20],["Courses",60],["Étiqueter et ranger",45],["Vérifier les papiers",25]]},

  // ---- Soir ----
  {cat:"Soir", nom:"Sas de décompression", emoji:"🫧", depart:"18:30", etapes:[["Se changer",10],["Marche ou musique",20],["Ne rien faire",10]]},
  {cat:"Soir", nom:"Soirée jeux", emoji:"🎲", depart:"20:30", etapes:[["Installer",10],["Jouer",90],["Ranger",10]]},
  {cat:"Soir", nom:"Préparer le lendemain", emoji:"📌", depart:"21:00", etapes:[["Affaires et sac",10],["Repas de midi",20],["Trois priorités écrites",10]]},

  // ---- Santé ----
  {cat:"Santé", nom:"Boire régulièrement", emoji:"🥤", depart:null, etapes:[["Remplir la bouteille",5],["Pause boisson",5],["Deuxième pause",5]]},
  {cat:"Santé", nom:"Marche après le repas", emoji:"🚶‍♀️", depart:null, etapes:[["Sortir",5],["Marche tranquille",20]]},
  {cat:"Santé", nom:"Après l'effort", emoji:"🧊", depart:null, etapes:[["Étirements",15],["Douche",15],["Repas et repos",45]]},
  {cat:"Santé", nom:"Soins du corps", emoji:"🛁", depart:null, etapes:[["Bain ou douche longue",30],["Soins",20],["Repos au calme",20]]},

  // ---- Argent ----
  {cat:"Argent", nom:"Comparer ses contrats", emoji:"📑", depart:null, etapes:[["Retrouver les contrats",25],["Comparer les offres",45],["Changer ce qui vaut le coup",30]]},
  {cat:"Argent", nom:"Mettre de côté", emoji:"🏦", depart:null, etapes:[["Regarder ce qui reste",15],["Programmer un virement",10],["Noter l'objectif",10]]},

  // ---- Social ----
  {cat:"Social", nom:"Préparer un anniversaire", emoji:"🎁", depart:null, etapes:[["Trouver l'idée",20],["Acheter",45],["Emballer et écrire un mot",20]]},
  {cat:"Social", nom:"Écrire à quelqu'un", emoji:"💌", depart:null, etapes:[["Choisir la personne",5],["Écrire vraiment",25],["Envoyer",5]]},
  {cat:"Social", nom:"Voir du monde", emoji:"☕️", depart:null, etapes:[["Proposer un créneau",10],["Trajet",25],["Moment ensemble",90]]},

  // ---- Créativité ----
  {cat:"Créativité", nom:"Écriture libre", emoji:"🪶", depart:null, etapes:[["Écrire sans s'arrêter",25],["Relire et souligner",15]]},
  {cat:"Créativité", nom:"Danse", emoji:"💃", depart:null, etapes:[["Échauffement",10],["Enchaînements",40],["Improvisation",15]]},
  {cat:"Créativité", nom:"Travaux manuels", emoji:"🧶", depart:null, etapes:[["Sortir le matériel",10],["Créer",75],["Ranger",15]]},

  // ---- Numérique ----
  {cat:"Numérique", nom:"Ranger l'ordinateur", emoji:"🖥", depart:null, etapes:[["Vider le bureau",20],["Classer les dossiers",40],["Supprimer les doublons",25]]},
  {cat:"Numérique", nom:"Mises à jour et sécurité", emoji:"🔐", depart:null, etapes:[["Mettre à jour les appareils",25],["Changer les mots de passe faibles",30],["Vérifier les sauvegardes",15]]},
  {cat:"Numérique", nom:"Trier les photos", emoji:"🖼", depart:null, etapes:[["Supprimer les ratées",30],["Créer des albums",30],["Sauvegarder",20]]},

  // ---- Animaux ----
  {cat:"Animaux", nom:"Promenade du chien", emoji:"🐕", depart:null, etapes:[["Préparer laisse et eau",5],["Promenade",45],["Pattes et gamelle",15]]},
  {cat:"Animaux", nom:"Soins de l'animal", emoji:"🐾", depart:null, etapes:[["Brossage",15],["Nettoyer l'espace",20],["Jeu",20]]},
  {cat:"Animaux", nom:"Visite chez le vétérinaire", emoji:"🩹", depart:null, etapes:[["Préparer le carnet",10],["Trajet",25],["Consultation",30],["Retour et repos",20]]},

  // ---- Bricolage ----
  {cat:"Bricolage", nom:"Petit chantier", emoji:"🪛", depart:null, etapes:[["Préparer le matériel",20],["Protéger la zone",15],["Travaux",120],["Nettoyage",30]]},
  {cat:"Bricolage", nom:"Peindre une pièce", emoji:"🖌", depart:null, etapes:[["Vider et protéger",45],["Préparer les murs",45],["Première couche",90],["Séchage",120],["Deuxième couche",75],["Remettre en place",45]]},
  {cat:"Bricolage", nom:"Monter un meuble", emoji:"🪑", depart:null, etapes:[["Lire la notice",15],["Trier les pièces",15],["Montage",75],["Ranger les cartons",15]]},
  {cat:"Bricolage", nom:"Entretien de la voiture", emoji:"🚗", depart:null, etapes:[["Vérifier niveaux et pneus",25],["Nettoyage",45],["Papiers et rendez-vous",20]]}
];

const JOURNEES = [
  {nom:"Bureau puis sport le soir", emoji:"🏢", depart:"06:45", resume:"Journée de travail classique, séance en fin d'après-midi",
   etapes:[["Réveil, douche",30],["Petit déjeuner",20],["Trajet",40],["Priorité numéro un",120],["Messages et réunions",90],["Déjeuner",60],["Travail de fond",210],["Fin de journée propre",30],["Trajet retour",40],["Séance de sport",75],["Douche",20],["Dîner",60],["Soirée libre",60],["Lecture et coucher",30]]},

  {nom:"Télétravail concentré", emoji:"🏠", depart:"07:30", resume:"Sans trajet, avec de vraies coupures",
   etapes:[["Réveil, douche",30],["Petit déjeuner",20],["Marche de réveil",15],["Bloc profond 1",90],["Pause",15],["Bloc profond 2",90],["Déjeuner",60],["Messages et réunions",90],["Travail de fond",150],["Fin de journée propre",25],["Renforcement à la maison",40],["Douche",20],["Dîner",60],["Soirée libre",120],["Lecture et coucher",30]]},

  {nom:"Équilibre : boulot, sport, perso", emoji:"⚖️", depart:"06:15", resume:"Sport le matin, projet personnel le soir",
   etapes:[["Réveil, verre d'eau",10],["Séance de sport",50],["Douche",20],["Petit déjeuner",25],["Trajet",40],["Priorité numéro un",120],["Messages",60],["Déjeuner",60],["Travail de fond",240],["Trajet retour",40],["Dîner",60],["Projet personnel",90],["Lecture et bilan",30],["Coucher",20]]},

  {nom:"Projet personnel à fond", emoji:"🚀", depart:"08:00", resume:"Une journée entière pour ton projet",
   etapes:[["Réveil et petit déjeuner",45],["Relire où j'en suis",15],["Bloc de création 1",120],["Pause et marche",30],["Bloc de création 2",120],["Déjeuner",60],["Tâches secondaires",60],["Bloc de création 3",120],["Noter la prochaine étape",15],["Sport léger",45],["Dîner",60],["Soirée libre",120],["Coucher",30]]},

  {nom:"Développement personnel", emoji:"🌱", depart:"06:30", resume:"Méditation, lecture, apprentissage, bilan",
   etapes:[["Réveil sans téléphone",10],["Méditation",20],["Journal du matin",15],["Sport",45],["Douche et petit déjeuner",40],["Cours en ligne",90],["Lecture et notes",60],["Déjeuner",60],["Langue étrangère",45],["Marche",45],["Travail sur un objectif",150],["Temps libre",120],["Dîner",60],["Bilan de la journée",20],["Coucher",30]]},

  {nom:"Deep work, création", emoji:"🧠", depart:"07:00", resume:"Quatre blocs profonds, peu de sollicitations",
   etapes:[["Réveil et café",30],["Bloc profond 1",90],["Pause complète",30],["Bloc profond 2",90],["Déjeuner et marche",75],["Bloc profond 3",90],["Pause",30],["Bloc profond 4",90],["Arrêt net",15],["Sport ou marche",45],["Dîner",60],["Soirée sans écran",150],["Coucher",30]]},

  {nom:"Études et révisions", emoji:"📚", depart:"08:00", resume:"Alternance révisions, exercices et pauses",
   etapes:[["Réveil et petit déjeuner",45],["Relire les notes",30],["Exercices",60],["Pause",15],["Fiches",60],["Déjeuner",60],["Révisions actives",60],["Pause",20],["Exercices difficiles",60],["Réciter à voix haute",30],["Sport",45],["Dîner",60],["Temps libre",90],["Révision légère",30],["Coucher",30]]},

  {nom:"Samedi actif", emoji:"🏃", depart:"08:00", resume:"Sport, maison, et du temps pour soi",
   etapes:[["Réveil tranquille",30],["Petit déjeuner",30],["Sport",75],["Douche",20],["Courses",60],["Déjeuner",60],["Ménage express",45],["Projet personnel",90],["Temps libre",120],["Dîner",60],["Sortie ou film",120],["Coucher",30]]},

  {nom:"Dimanche préparation", emoji:"📋", depart:"09:00", resume:"Bilan, cuisine, semaine prête",
   etapes:[["Réveil sans réveil",30],["Petit déjeuner long",45],["Marche",45],["Bilan de la semaine",45],["Menus et courses",75],["Déjeuner",60],["Batch cooking",120],["Papiers et factures",35],["Préparer la semaine",30],["Temps libre",90],["Dîner",60],["Lecture et coucher",45]]},

  {nom:"Journée légère", emoji:"🌿", depart:"09:00", resume:"Pour souffler sans culpabiliser",
   etapes:[["Réveil sans alarme",30],["Petit déjeuner",30],["Marche",45],["Lecture",60],["Déjeuner",60],["Sieste ou repos",60],["Une seule tâche utile",45],["Temps libre",150],["Sortie",90],["Dîner",60],["Soirée calme",90],["Coucher tôt",30]]},

  {nom:"Démarrage à 5h", emoji:"🌄", depart:"05:00", resume:"Trois heures à soi avant que le monde se lève",
   etapes:[["Réveil et eau",10],["Méditation",15],["Sport",45],["Douche",15],["Projet personnel",90],["Petit déjeuner",30],["Trajet",40],["Travail, première partie",180],["Déjeuner",60],["Travail, seconde partie",180],["Trajet retour",40],["Dîner",60],["Soirée calme",90],["Coucher tôt",30]]},

  {nom:"Journée en famille", emoji:"👨‍👩‍👧", depart:"08:00", resume:"Rythme partagé, sortie et repas ensemble",
   etapes:[["Réveil et petit déjeuner",60],["Rangement à plusieurs",30],["Sortie",180],["Déjeuner",75],["Temps calme",60],["Activité ensemble",120],["Préparer le dîner",45],["Dîner",75],["Coucher des enfants",50],["Soirée à deux",60],["Coucher",30]]},

  {nom:"Indépendant : produire et vendre", emoji:"💼", depart:"07:30", resume:"Moitié production, moitié prospection",
   etapes:[["Réveil et petit déjeuner",45],["Relire les priorités",15],["Production, bloc 1",120],["Pause",20],["Prospection et relances",90],["Déjeuner",60],["Production, bloc 2",120],["Devis et factures",45],["Réseau et publications",45],["Fin de journée propre",20],["Sport",60],["Dîner",60],["Soirée libre",90],["Coucher",30]]},

  {nom:"Télétravail avec enfants", emoji:"🧸", depart:"06:30", resume:"Blocs courts, école, relais le soir",
   etapes:[["Se préparer avant eux",30],["Réveil et petit déjeuner des enfants",45],["Départ école",30],["Bloc profond",90],["Messages",45],["Déjeuner rapide",40],["Bloc de travail",120],["Sortie d'école",45],["Goûter et devoirs",60],["Fin de travail",45],["Dîner",60],["Bain et coucher des enfants",60],["Soirée à soi",75],["Coucher",30]]},

  {nom:"Journée créative", emoji:"🎨", depart:"08:30", resume:"Musique, dessin, écriture : produire sans juger",
   etapes:[["Réveil et café",45],["Échauffement créatif",30],["Création, bloc 1",120],["Marche",45],["Déjeuner",60],["Création, bloc 2",120],["Pause et recul",30],["Finitions",90],["Partager le travail",20],["Dîner",60],["Inspiration : lecture ou film",120],["Coucher",30]]},

  {nom:"Recherche d'emploi", emoji:"🔎", depart:"08:00", resume:"Candidatures, relances, préparation d'entretien",
   etapes:[["Réveil et petit déjeuner",45],["Trier les offres",45],["Adapter le CV et la lettre",75],["Envoyer les candidatures",45],["Déjeuner",60],["Relancer les contacts",45],["Préparer un entretien",60],["Se former",60],["Marche ou sport",45],["Dîner",60],["Soirée libre",90],["Coucher",30]]},

  {nom:"Grand ménage", emoji:"🧽", depart:"09:00", resume:"La maison remise à neuf en une journée",
   etapes:[["Petit déjeuner",30],["Lancer les lessives",15],["Cuisine à fond",75],["Salle de bain",45],["Pause",20],["Chambres",60],["Déjeuner",60],["Sols et vitres",75],["Tri et poubelles",45],["Ranger le linge",30],["Dîner mérité",60],["Soirée calme",90],["Coucher",30]]},

  {nom:"Jour de déplacement", emoji:"✈️", depart:"05:30", resume:"Trajet long, travail nomade, arrivée",
   etapes:[["Réveil et douche",30],["Vérifier les affaires",20],["Trajet vers la gare ou l'aéroport",60],["Attente et embarquement",60],["Trajet, travail au calme",210],["Arrivée et installation",60],["Déjeuner",60],["Rendez-vous ou travail",210],["Marche pour découvrir",45],["Dîner",60],["Préparer demain",20],["Coucher",30]]},

  {nom:"Randonnée ou grande sortie", emoji:"🥾", depart:"06:00", resume:"Départ tôt, effort long, retour tranquille",
   etapes:[["Petit déjeuner solide",30],["Préparer le sac",20],["Trajet",60],["Marche, première partie",210],["Pause repas",60],["Marche, seconde partie",180],["Retour",75],["Douche et étirements",40],["Dîner",60],["Repos",60],["Coucher tôt",30]]},

  {nom:"Journée pluvieuse à la maison", emoji:"🌧", depart:"09:00", resume:"Cocon, lecture, cuisine, petits chantiers",
   etapes:[["Réveil lent",45],["Petit déjeuner",45],["Lecture",75],["Petit chantier intérieur",90],["Déjeuner mijoté",90],["Sieste ou musique",60],["Projet personnel",90],["Jeu ou film",120],["Dîner",60],["Soirée calme",60],["Coucher",30]]},

  {nom:"Retour de congés", emoji:"🔄", depart:"08:00", resume:"Reprendre sans se noyer",
   etapes:[["Réveil et petit déjeuner",45],["Vider la boîte mail",90],["Relire l'agenda",30],["Trois priorités seulement",20],["Déjeuner",60],["Première priorité",120],["Prendre des nouvelles de l'équipe",45],["Courses de base",45],["Lessive et rangement",45],["Dîner",60],["Soirée calme",120],["Coucher tôt",30]]},

  {nom:"Travail de nuit", emoji:"🌃", depart:"20:00", resume:"Poste de nuit, repas décalés, sommeil de jour",
   etapes:[["Réveil et repas",60],["Trajet",40],["Poste, première partie",240],["Pause repas",45],["Poste, seconde partie",240],["Trajet retour",40],["Repas léger",30],["Rideaux tirés, coucher",30]]},

  {nom:"Journée bilan et cap", emoji:"🧭", depart:"09:00", resume:"Prendre du recul sur les mois qui viennent",
   etapes:[["Marche pour réfléchir",60],["Petit déjeuner",30],["Relire l'année écoulée",60],["Ce qui compte vraiment",45],["Déjeuner",60],["Choisir trois caps",60],["Découper en actions",60],["Poser les échéances",45],["Sport",45],["Dîner",60],["Écrire le plan au propre",45],["Coucher",30]]}
];

const HABITUDES = [
  ["Corps", [["🚶","Marcher 30 minutes"],["🏃","Bouger 20 minutes"],["🧘","S'étirer le matin"],["💪","Renforcement musculaire"],["🚴","Vélo"],["🏊","Nager"],["⚽️","Entraînement de l'équipe"],["🪜","Prendre les escaliers"],["🧍","Se lever toutes les heures"],["🤸","Étirements du soir"]]],
  ["Santé", [["💧","Boire assez d'eau"],["🍎","Un fruit dans la journée"],["🥗","Des légumes à chaque repas"],["🍳","Cuisiner maison"],["🦷","Se brosser les dents deux fois"],["💊","Prendre son traitement"],["🌞","Sortir à la lumière du jour"],["🚭","Journée sans tabac"],["🍷","Journée sans alcool"],["🧴","Prendre soin de sa peau"]]],
  ["Sommeil", [["🌙","Au lit avant 23h"],["⏰","Se lever à heure fixe"],["📵","Pas d'écran une heure avant"],["☕️","Pas de café après 16h"],["🛏","Faire son lit"],["🕯","Rituel du coucher"]]],
  ["Esprit", [["🧘","Méditer"],["✍️","Écrire dans son journal"],["🙏","Noter trois gratitudes"],["🌬","Respiration profonde"],["🤫","Dix minutes de silence"],["🧠","Une chose apprise aujourd'hui"]]],
  ["Travail", [["🎯","Trois priorités écrites"],["📥","Boîte mail traitée"],["🍅","Deux blocs concentrés"],["📴","Notifications coupées"],["🧹","Bureau rangé le soir"],["📝","Noter où j'en suis"]]],
  ["Apprentissage", [["📖","Lire"],["🗺","Réviser une langue"],["🎓","Une leçon suivie"],["💻","Coder un peu"],["🎙","Écouter un podcast utile"],["🗂","Faire une fiche"]]],
  ["Projet perso", [["🚀","Avancer sur mon projet"],["📝","Écrire 500 mots"],["🎨","Créer quelque chose"],["📷","Prendre une photo"],["🎸","Pratiquer un instrument"]]],
  ["Maison", [["🍽","Vaisselle faite"],["🧺","Une lessive ou du linge plié"],["🧹","Dix minutes de rangement"],["🪴","Arroser les plantes"],["🗑","Sortir les poubelles"],["🛒","Repas de demain prévu"]]],
  ["Relations", [["📞","Prendre des nouvelles"],["💌","Écrire à un proche"],["👨‍👩‍👧","Temps sans téléphone en famille"],["🤝","Rendre un service"],["😊","Un compliment sincère"]]],
  ["Écrans", [["📱","Moins de deux heures de téléphone"],["🚫","Pas de réseaux le matin"],["🌵","Une heure sans écran"],["📺","Soirée sans série"]]],
  ["Argent", [["💶","Noter mes dépenses"],["🚯","Aucun achat impulsif"],["🏦","Mettre de côté"],["🥡","Repas préparé plutôt qu'acheté"]]],
  ["Extérieur", [["🌳","Passer du temps dehors"],["🐕","Promener le chien"],["🚲","Trajet sans voiture"],["🥾","Explorer un endroit nouveau"]]]
];

window.CATALOGUE = {BIBLIO, JOURNEES, HABITUDES};
})();
