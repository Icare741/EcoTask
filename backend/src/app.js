const express = require('express');
const cors = require('cors');
const client = require('prom-client');
const tasksRouter = require('./routes/tasks');

const app = express();

// Création d'un registre Prometheus
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Création de métriques personnalisées
const taskCounter = new client.Counter({
  name: 'tasks_total',
  help: 'Nombre total de tâches créées',
  labelNames: ['status']
});

const taskDuration = new client.Histogram({
  name: 'task_operation_duration_seconds',
  help: 'Durée des opérations sur les tâches',
  labelNames: ['operation'],
  buckets: [0.1, 0.5, 1, 2, 5]
});

register.registerMetric(taskCounter);
register.registerMetric(taskDuration);

// Middleware pour mesurer la durée des requêtes
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    taskDuration.observe({ operation: req.method }, duration);
  });
  next();
});

// Route pour exposer les métriques Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.use(cors());
app.use(express.json());
app.use('/api/tasks', tasksRouter);

module.exports = app; 