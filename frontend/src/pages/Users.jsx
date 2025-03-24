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
  Avatar,
  Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// Données de démonstration
const initialUsers = [
  {
    id: 1,
    name: 'Jean Dupont',
    email: 'jean.dupont@ecotask.com',
    role: 'Admin',
    tasksCompleted: 25,
    totalEmissions: 1500,
    status: 'Actif',
  },
  {
    id: 2,
    name: 'Marie Martin',
    email: 'marie.martin@ecotask.com',
    role: 'Développeur',
    tasksCompleted: 18,
    totalEmissions: 1200,
    status: 'Actif',
  },
  {
    id: 3,
    name: 'Pierre Durand',
    email: 'pierre.durand@ecotask.com',
    role: 'Designer',
    tasksCompleted: 12,
    totalEmissions: 800,
    status: 'Inactif',
  },
];

function Users() {
  const [users, setUsers] = useState(initialUsers);
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'Utilisateur',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    const user = {
      ...newUser,
      id: users.length + 1,
      tasksCompleted: 0,
      totalEmissions: 0,
      status: 'Actif',
    };
    setUsers([...users, user]);
    handleClose();
    setNewUser({
      name: '',
      email: '',
      role: 'Utilisateur',
    });
  };

  const getStatusColor = (status) => {
    return status === 'Actif' ? 'success' : 'error';
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Utilisateurs</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          Nouvel utilisateur
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Utilisateur</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rôle</TableCell>
              <TableCell>Tâches terminées</TableCell>
              <TableCell>Émissions totales</TableCell>
              <TableCell>Statut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar>{user.name[0]}</Avatar>
                    {user.name}
                  </Box>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.tasksCompleted}</TableCell>
                <TableCell>{user.totalEmissions} kg CO₂</TableCell>
                <TableCell>
                  <Chip
                    label={user.status}
                    color={getStatusColor(user.status)}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nouvel utilisateur</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Nom"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              fullWidth
            />
            <TextField
              label="Email"
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              fullWidth
            />
            <TextField
              select
              label="Rôle"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              fullWidth
            >
              <option value="Admin">Admin</option>
              <option value="Développeur">Développeur</option>
              <option value="Designer">Designer</option>
              <option value="Utilisateur">Utilisateur</option>
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

export default Users; 