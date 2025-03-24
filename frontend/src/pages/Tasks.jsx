import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// Données de démonstration
const initialTasks = [
  {
    id: 1,
    title: 'Rédaction du rapport',
    description: 'Rédiger le rapport mensuel',
    responsible: 'Jean Dupont',
    deadline: '2024-03-15',
    priority: 'Haute',
    carbonFootprint: 0.5,
  },
  {
    id: 2,
    title: 'Développement frontend',
    description: 'Implémenter le tableau de bord',
    responsible: 'Marie Martin',
    deadline: '2024-03-20',
    priority: 'Moyenne',
    carbonFootprint: 1.2,
  },
];

function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    responsible: '',
    deadline: '',
    priority: 'Moyenne',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    const task = {
      ...newTask,
      id: tasks.length + 1,
      carbonFootprint: 0.5, // Valeur par défaut
    };
    setTasks([...tasks, task]);
    handleClose();
    setNewTask({
      title: '',
      description: '',
      responsible: '',
      deadline: '',
      priority: 'Moyenne',
    });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Tâches</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          Nouvelle tâche
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Titre</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Responsable</TableCell>
              <TableCell>Échéance</TableCell>
              <TableCell>Priorité</TableCell>
              <TableCell>Bilan carbone (kg CO₂)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.responsible}</TableCell>
                <TableCell>{task.deadline}</TableCell>
                <TableCell>{task.priority}</TableCell>
                <TableCell>{task.carbonFootprint}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nouvelle tâche</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Titre"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              fullWidth
            />
            <TextField
              label="Description"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              fullWidth
              multiline
              rows={3}
            />
            <TextField
              label="Responsable"
              value={newTask.responsible}
              onChange={(e) => setNewTask({ ...newTask, responsible: e.target.value })}
              fullWidth
            />
            <TextField
              label="Échéance"
              type="date"
              value={newTask.deadline}
              onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              select
              label="Priorité"
              value={newTask.priority}
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
              fullWidth
            >
              <MenuItem value="Basse">Basse</MenuItem>
              <MenuItem value="Moyenne">Moyenne</MenuItem>
              <MenuItem value="Haute">Haute</MenuItem>
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleSubmit} variant="contained">
            Créer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Tasks; 