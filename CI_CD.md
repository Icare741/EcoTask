# Documentation CI/CD EcoTask

## Vue d'ensemble
Ce document décrit la configuration et le fonctionnement de la chaîne CI/CD pour le projet EcoTask. La pipeline est configurée avec GitHub Actions et utilise Docker pour la conteneurisation.

## Structure de la Pipeline

### 1. Tests
- **Frontend** :
  - Installation des dépendances avec `npm install`
  - Exécution des tests avec `npm test`
  - Tests unitaires et d'intégration

- **Backend** :
  - Installation des dépendances avec `npm install`
  - Exécution des tests avec `npm test`
  - Tests API et unitaires

### 2. Build
- Construction des images Docker pour :
  - Frontend (React)
  - Backend (Node.js)
- Push des images vers Docker Hub
- Tagging des images avec la version latest

### 3. Déploiement
- Déploiement automatique sur la branche main
- Utilisation de Docker Compose pour l'orchestration
- Configuration des variables d'environnement

## Configuration des Outils

### GitHub Actions
- Workflow déclenché sur push et pull requests
- Environnement Ubuntu latest
- Node.js version 20
- Docker Buildx pour la construction multi-architecture

### Docker
- Images multi-architecture (amd64, arm64)
- Optimisation des layers pour réduire la taille
- Configuration via Dockerfile et docker-compose.yml

### Variables d'Environnement
- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN
- Variables spécifiques à l'application

## Processus de Déploiement
1. Push sur la branche main
2. Déclenchement automatique du workflow
3. Exécution des tests
4. Construction des images Docker
5. Push vers Docker Hub
6. Déploiement avec Docker Compose

## Monitoring et Logs
- Logs GitHub Actions
- Logs Docker
- Métriques Prometheus
- Dashboard Grafana

## Bonnes Pratiques
- Tests automatisés avant chaque déploiement
- Versioning des images Docker
- Sécurisation des secrets
- Documentation des changements 