// components/DistanceCalculator.tsx
import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
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
    <Box>
      <Box display="flex" alignItems="center" gap={2}>
        <Box flex={1}>
          <Autocomplete onSelect={handleSelectAirport1} />
        </Box>
        <Box flex={1}>
          <Autocomplete onSelect={handleSelectAirport2} />
        </Box>
        <Button
          onClick={calculate}
          variant="contained"
          color="primary"
          disabled={!airport1 || !airport2}
        >
          Calculate Distance
        </Button>
      </Box>
      {distance !== null && (
        <Box mt={2}>
          <strong>Distance: </strong>{distance.toFixed(2)} nautical miles
        </Box>
      )}
    </Box>
  );
};

export default DistanceCalculator;
