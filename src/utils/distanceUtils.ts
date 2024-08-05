// utils/distanceUtils.ts
import { Airport } from '../types/Airport';

export const calculateDistance = (airport1: Airport, airport2: Airport): number => {
  const R = 3440; // Earth radius in nautical miles

  // Ensure lat and lon are treated as numbers
  const lat1 = Number(airport1.lat);
  const lon1 = Number(airport1.lon);
  const lat2 = Number(airport2.lat);
  const lon2 = Number(airport2.lon);

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.asin(Math.sqrt(a));
  const distance = R * c;

  // Round to the nearest nautical mile
  return Math.round(distance);
};

const toRadians = (degrees: number): number => {
  return degrees * (Math.PI / 180);
};
