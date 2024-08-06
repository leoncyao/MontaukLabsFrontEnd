import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Airport } from '../types/Airport';

interface AutocompleteProps {
  onSelect: (from: Airport | null, to: Airport | null) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ onSelect }) => {
  const [airports, setAirports] = useState<Airport[]>([]);
  const [selectedFromAirport, setSelectedFromAirport] = useState<Airport | null>(null);
  const [selectedToAirport, setSelectedToAirport] = useState<Airport | null>(null);

  useEffect(() => {
    fetch('/airports.json')
      .then((response) => response.json())
      .then((data: Airport[]) => {
        setAirports(data);
      })
      .catch((error) => console.error('Error fetching airport data:', error));
  }, []);

  const handleFromAirportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = airports.find(airport => airport.code === event.target.value);
    setSelectedFromAirport(selected || null);
    onSelect(selected || null, selectedToAirport);
  };

  const handleToAirportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = airports.find(airport => airport.code === event.target.value);
    setSelectedToAirport(selected || null);
    onSelect(selectedFromAirport, selected || null);
  };

  return (
    <div>
      <TextField
        fullWidth
        variant="outlined"
        label="From Airport"
        select
        value={selectedFromAirport ? selectedFromAirport.code : ''}
        onChange={handleFromAirportChange}
        style={{ marginBottom: '16px' }} // Add margin here
      >
        {airports.map((airport) => (
          <MenuItem key={airport.code} value={airport.code}>
            {airport.code} - {airport.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        variant="outlined"
        label="To Airport"
        select
        value={selectedToAirport ? selectedToAirport.code : ''}
        onChange={handleToAirportChange}
      >
        {airports.map((airport) => (
          <MenuItem key={airport.code} value={airport.code}>
                {airport.code} - {airport.name}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default Autocomplete;
