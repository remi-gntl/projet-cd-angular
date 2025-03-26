Projet Angular - Gestion de Catalogue de CDs
Ce projet a été développé dans le cadre du module R4.A.10 Compléments Web (Framework Angular) à l'IUT de Bayonne.

📌 Description du Projet
Application de visualisation et gestion d'un catalogue de CDs développée progressivement à travers plusieurs TD.

📂 Structure du Projet
L'application a été construite de manière incrémentale à travers les TD 1, 2, 3 et 4, chacun abordant des concepts spécifiques d'Angular.

🟢 TD1-TD2 : Principes fondamentaux, composants et directives
✅ Concepts abordés :
Installation d'Angular CLI

Structure d'un projet Angular

Création de composants

Utilisation des templates et styles (SCSS)

Données et contenu dynamique

Liaison de données (binding)

Directives structurelles (ngIf, ngFor)

Cycle de vie des composants

Communication entre composants parent-enfant (@Input())

Mise en forme des données avec les pipes

⚙ Fonctionnalités implémentées :
Structure de base de l'application avec des composants

Modèle de données CD

Affichage d'une liste de CDs

Affichage individuel des CDs avec leurs détails

Filtrage des CDs en fonction de leur quantité

🟡 TD3 : Services, injection de dépendance et routage
✅ Concepts abordés :
Services Angular

Injection de dépendance

Patron Singleton

Routage et navigation

Routes paramétrées

Navigation programmatique

ActivatedRoute pour récupérer les paramètres d'URL

⚙ Fonctionnalités implémentées :
Service centralisé pour la gestion des CDs

Menu de navigation

Plusieurs vues/pages (Accueil, Liste de CDs)

Navigation entre les pages

Affichage détaillé d'un CD en pleine page via une route paramétrée

Récupération d'un CD spécifique grâce à son id

🔵 TD4 : Observables, persistance de données et formulaires
✅ Concepts abordés :
Observables et programmation réactive

Gestion des événements asynchrones avec RxJS

Souscription aux Observables avec subscribe()

Opérateurs comme pipe(), map(), filter(), tap(), switchMap()

Formulaires réactifs

Création d'un formulaire avec FormGroup et FormBuilder

Liaison des champs via formControlName

Validation des formulaires avec Validators (required, minLength, pattern, etc.)

Affichage dynamique des erreurs de validation

Persistance des données avec une API REST simulée

Mise en place d’un backend JSON avec json-server

Envoi et récupération de données via HttpClient (GET, POST)

Stockage des CDs de manière persistante via une API REST

⚙ Fonctionnalités implémentées :
Ajout d’un formulaire réactif pour créer un nouveau CD

Mise à jour dynamique de l’aperçu du CD pendant la saisie

Validation en temps réel des champs du formulaire

Connexion à une API REST pour stocker et récupérer les CDs dynamiquement

Utilisation de json-server comme backend simulé

👤 Auteur
Rémi GENTIL

Ce projet est destiné à des fins éducatives dans le cadre du cours de Compléments Web (Framework Angular) à l'IUT de Bayonne.
