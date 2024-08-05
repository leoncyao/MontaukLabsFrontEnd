// App.tsx
import React from 'react';
import DistanceCalculator from './components/DistanceCalculator';
import { Container, CssBaseline, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h2" align="center" gutterBottom>
        Airport Distance Calculator
      </Typography>
      <DistanceCalculator />
    </Container>
  );
};

export default App;
