import { Grid, Paper, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Données de démonstration
const data = [
  { name: 'Jan', emissions: 400 },
  { name: 'Fév', emissions: 300 },
  { name: 'Mar', emissions: 600 },
  { name: 'Avr', emissions: 800 },
  { name: 'Mai', emissions: 700 },
  { name: 'Juin', emissions: 900 },
];

function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Tableau de bord
      </Typography>
      <Grid container spacing={3}>
        {/* Statistiques */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Total des émissions CO₂</Typography>
            <Typography variant="h4">3,700 kg</Typography>
            <Typography color="text.secondary">Ce mois-ci</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Tâches en cours</Typography>
            <Typography variant="h4">12</Typography>
            <Typography color="text.secondary">Sur 20 tâches</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Projets actifs</Typography>
            <Typography variant="h4">5</Typography>
            <Typography color="text.secondary">En cours</Typography>
          </Paper>
        </Grid>

        {/* Graphique */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Évolution des émissions CO₂
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="emissions" stroke="#2e7d32" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard; 