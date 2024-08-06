// components/Autocomplete.tsx
import React, { useState, useEffect } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Airport } from '../types/Airport';

interface AutocompleteProps {
  onSelect: (airport: Airport) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ onSelect }) => {
  const [airports, setAirports] = useState<Airport[]>([]);

  useEffect(() => {
    fetch('/airports.json')
      .then((response) => response.json())
      .then((data: Airport[]) => setAirports(data))
      .catch((error) => console.error('Error fetching airport data:', error));
  }, []);

  const handleOnSearch = (string: string, results: Airport[]) => {
    // On search action
  };

  const handleOnHover = (result: Airport) => {
    // On hover action
  };

  const handleOnSelect = (item: Airport) => {
    onSelect(item);
  };

  const handleOnFocus = () => {
    // On focus action
  };

  return (
    <div style={{ width: 400 }}>
      <ReactSearchAutocomplete
        items={airports.map((airport) => ({
          id: airport.code,
          // name: `${airport.code} - ${airport.name}`,
          ...airport,
        }))}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={(item: any) => (
          <span>{item.name} - {item.code}</span>
        )}
        fuseOptions={{
          keys: ['name', 'code'],  // Search in both 'name' and 'code'
          threshold: 0.6,           // Adjust as needed
          shouldSort: true,
          location: 0,
          distance: 100,
          minMatchCharLength: 1
        }}
      />
    </div>
  );
};

export default Autocomplete;
