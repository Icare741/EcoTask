import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FolderIcon from '@mui/icons-material/Folder';
import PeopleIcon from '@mui/icons-material/People';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EcoTask
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            startIcon={<DashboardIcon />}
          >
            Tableau de bord
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/tasks"
            startIcon={<AssignmentIcon />}
          >
            Tâches
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/projects"
            startIcon={<FolderIcon />}
          >
            Projets
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/users"
            startIcon={<PeopleIcon />}
          >
            Utilisateurs
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 