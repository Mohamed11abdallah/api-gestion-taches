# API de Gestion de Tâches

Cette API permet de gérer des tâches via des opérations **CRUD** (Créer, Lire, Mettre à jour, Supprimer). Elle est développée avec **Express.js** et utilise **Sequelize** comme ORM pour interagir avec une base de données **MySQL**. Un validateur est utilisé pour s'assurer que les données envoyées aux endpoints respectent certaines règles.

## Fonctionnalités

- **Créer une tâche** : Ajouter une nouvelle tâche avec un titre et une description.
- **Lire toutes les tâches** : Récupérer toutes les tâches enregistrées.
- **Lire une tâche par ID** : Récupérer une tâche spécifique en fonction de son ID.
- **Mettre à jour une tâche** : Modifier les détails d'une tâche existante.
- **Supprimer une tâche** : Supprimer une tâche par son ID.

## Prérequis

- [Node.js](https://nodejs.org/en/) (version 14+ recommandée)
- [MySQL](https://www.mysql.com/)

## Installation

1. **Cloner le dépôt** :

```bash
   git clone https://github.com/ton-utilisateur/api-gestion-taches.git
   cd api-gestion-taches
```

2. **Installer les dépendances** :

```bash
   npm install
```

3. **Configurer la base de données** :

Crée un fichier .env à la racine du projet et configure ta base de données MySQL. Tu peux te baser sur le fichier .env.example :

```bash
DB_NAME=taches_db
DB_USER=root
DB_PASSWORD=ton_mot_de_passe
DB_HOST=localhost
DB_DIALECT=mysql
```

4. **Synchroniser la base de données** :

```bash
   npm run start
```

5. **Lancer le serveur** :

```bash
   npm start
```

L'API sera disponible sur http://localhost:3000.

## Utilisation de l'API

### Créer une tâche

**Endpoint** : `POST /taches`

- **Body** :
  ```json
  {
    "titre": "Ma nouvelle tâche",
    "description": "Une description de la tâche"
  }
  ```

### Lire toutes les tâches

**Endpoint** : `GET /taches`

- Response : Liste des tâches existantes.

### Lire une tâche par ID

**Endpoint** : `GET /taches/:id`

- Response : Détails de la tâche correspondante.

### Mettre à jour une tâche

**Endpoint** : `PUT /taches/:id`

- **Body** :
  ```json
  {
    "titre": "Titre mis à jour",
    "description": "Description mise à jour"
  }
  ```

### Supprimer une tâche

**Endpoint** : `DELETE /taches/:id`

- Response : Message de confirmation de la suppression.

## Technologies utilisées

- Express.js : Framework pour créer l'API.
- Sequelize : ORM pour interagir avec la base de données MySQL.
- MySQL : Base de données relationnelle.
- Express-validator : Pour la validation des données d'entrée.
- dotenv : Pour gérer les variables d'environnement.

## Auteur

[Mohamed Abdallahi M'khaitir](https://github.com/Mohamed11abdallah)