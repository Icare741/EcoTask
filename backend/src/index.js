require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const promBundle = require('express-prom-bundle');
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
const client = require('prom-client');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Prometheus metrics
const metricsMiddleware = promBundle({ includeMethod: true, includePath: true });
app.use(metricsMiddleware);

// Initialisation de la base de données
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://ecotask:ecotask@db:5432/ecotask'
});

const initDb = async () => {
  try {
    const sql = fs.readFileSync(path.join(__dirname, 'db/init.sql'), 'utf8');
    await pool.query(sql);
    console.log('Base de données initialisée avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de la base de données:', error);
  }
};

// Routes
const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

// Route pour les métriques Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', metricsMiddleware.metricsContentType);
  res.end(await metricsMiddleware.getMetrics());
});

// Route de base
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Gestion des erreurs
app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Une erreur est survenue!' });
});

// Démarrage du serveur
const startServer = async () => {
  await initDb();
  app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
  });
};

startServer(); 