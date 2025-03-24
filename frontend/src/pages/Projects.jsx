import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// Données de démonstration
const initialProjects = [
  {
    id: 1,
    name: 'Site web EcoTask',
    description: 'Développement du site web principal',
    progress: 75,
    totalEmissions: 2500,
    tasksCompleted: 15,
    totalTasks: 20,
  },
  {
    id: 2,
    name: 'Application mobile',
    description: 'Développement de l\'application mobile',
    progress: 30,
    totalEmissions: 1200,
    tasksCompleted: 6,
    totalTasks: 20,
  },
];

function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [open, setOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    const project = {
      ...newProject,
      id: projects.length + 1,
      progress: 0,
      totalEmissions: 0,
      tasksCompleted: 0,
      totalTasks: 0,
    };
    setProjects([...projects, project]);
    handleClose();
    setNewProject({
      name: '',
      description: '',
    });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Projets</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          Nouveau projet
        </Button>
      </Box>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.name}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Progression
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={project.progress}
                    sx={{ mt: 1 }}
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {project.tasksCompleted}/{project.totalTasks} tâches terminées
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Émissions totales : {project.totalEmissions} kg CO₂
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Voir les détails</Button>
                <Button size="small">Modifier</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nouveau projet</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Nom du projet"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
              fullWidth
            />
            <TextField
              label="Description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              fullWidth
              multiline
              rows={3}
            />
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

export default Projects; 