const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET /api/tasks - Récupérer toutes les tâches
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.getAll();
    res.json(tasks);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erreur lors de la récupération des tâches:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// POST /api/tasks - Créer une nouvelle tâche
router.post('/', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erreur lors de la création de la tâche:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// GET /api/tasks/:id - Récupérer une tâche spécifique
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.getById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Tâche non trouvée' });
    }
    res.json(task);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erreur lors de la récupération de la tâche:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// PUT /api/tasks/:id - Mettre à jour une tâche
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.update(req.params.id, req.body);
    if (!task) {
      return res.status(404).json({ error: 'Tâche non trouvée' });
    }
    res.json(task);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erreur lors de la mise à jour de la tâche:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// DELETE /api/tasks/:id - Supprimer une tâche
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.delete(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Tâche non trouvée' });
    }
    res.json({ message: 'Tâche supprimée avec succès' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erreur lors de la suppression de la tâche:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router; 