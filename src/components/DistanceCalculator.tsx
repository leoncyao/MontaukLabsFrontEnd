import React, { useState } from 'react';
import Autocomplete from './AirportAutocomplete'; // Update with the correct import path
import { Box, Button } from '@mui/material';
import { calculateDistance } from '../utils/distanceUtils'; // Update with the correct import path
import { Airport } from '../types/Airport';

const DistanceCalculator: React.FC = () => {
  const [airport1, setAirport1] = useState<Airport | null>(null);
  const [airport2, setAirport2] = useState<Airport | null>(null);
  const [distance, setDistance] = useState<number | null>(null);

  const handleSelectAirport = (from: Airport | null, to: Airport | null) => {
    setAirport1(from);
    setAirport2(to);
  };

  const calculate = () => {
    if (airport1 && airport2) {
      const dist = calculateDistance(airport1, airport2);
      setDistance(dist);
    }
  };

  return (
    <Box>
      <Autocomplete onSelect={handleSelectAirport} />
      <Button onClick={calculate} variant="contained" color="primary" disabled={!airport1 || !airport2}>
        Calculate Distance
      </Button>
      {distance !== null && <div>Distance: {distance} nautical miles</div>}
    </Box>
  );
};

export default DistanceCalculator;
