// components/DistanceCalculator.tsx
import React, { useState } from 'react';
import { Box, Button, Hidden } from '@mui/material';
import Autocomplete from './AirportAutocomplete';
import { Airport } from '../types/Airport';
import { calculateDistance } from '../utils/distanceUtils';

const DistanceCalculator: React.FC = () => {
  const [airport1, setAirport1] = useState<Airport | null>(null);
  const [airport2, setAirport2] = useState<Airport | null>(null);
  const [distance, setDistance] = useState<number | null>(null);

  const handleSelectAirport1 = (airport: Airport) => {
    setAirport1(airport);
    console.log(airport);
  };

  const handleSelectAirport2 = (airport: Airport) => {
    setAirport2(airport);
    console.log(airport);
  };

  const calculate = () => {
    if (airport1 && airport2) {
      const dist = calculateDistance(airport1, airport2);
      setDistance(dist);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh"
    maxHeight="200px"
    overflow="hidden">
      <Box mb={2} textAlign="center" width="100%" maxWidth="800px" maxHeight="150px" height="150px" overflow="hidden">
        <Button
          onClick={calculate}
          variant="contained"
          color="primary"
          disabled={!airport1 || !airport2}
        >
          Calculate Distance
        </Button>
        {distance !== null && (
          <Box mt={2}>
            <strong>Distance: </strong>{distance.toFixed(2)} nautical miles
          </Box>
        )}
      </Box>
      <Box display="flex" gap={2} width="100%" maxWidth="800px">
        <Box flex={1} minWidth="200px">
          <Autocomplete onSelect={handleSelectAirport1} />
        </Box>
        <Box flex={1} minWidth="200px">
          <Autocomplete onSelect={handleSelectAirport2} />
        </Box>
      </Box>
    </Box>
  );
};

export default DistanceCalculator;
