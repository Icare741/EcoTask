@je ne # EcoTask

Application web de gestion de tâches avec suivi de l'empreinte carbone.

## Technologies utilisées

- Frontend : React + Vite
- Backend : Node.js + Express
- Base de données : PostgreSQL
- CI/CD : GitHub Actions
- Containerisation : Docker
- Tests : Jest (backend) + Vitest (frontend)
- Monitoring : Prometheus + Grafana

## Prérequis

- Node.js (v18+)
- Docker
- Docker Compose
- PostgreSQL

## Installation

1. Cloner le repository :
```bash
git clone https://github.com/votre-username/EcoTask.git
cd EcoTask
```

2. Installer les dépendances :
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. Configurer les variables d'environnement :
```bash
# Backend
cp .env.example .env

# Frontend
cp .env.example .env
```

4. Lancer l'application en mode développement :
```bash
# Démarrer la base de données
docker-compose up -d db

# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

## Structure du projet

```
EcoTask/
├── frontend/           # Application React
├── backend/           # API Node.js
├── docker/            # Fichiers Docker
├── .github/           # Configuration GitHub Actions
└── docs/             # Documentation
```

## Fonctionnalités

- Gestion des tâches (CRUD)
- Calcul automatique du bilan carbone
- Tableau de bord avec statistiques
- Gestion des utilisateurs et des projets
- Monitoring des performances

## Tests

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

## Déploiement

Le déploiement est automatique via GitHub Actions :
1. Push sur main -> déploiement en production
2. Push sur develop -> déploiement en développement

## CI/CD

Le projet utilise GitHub Actions pour :
- Exécuter les tests
- Analyser la qualité du code avec SonarQube
- Construire et pousser les images Docker
- Déployer sur Kubernetes 