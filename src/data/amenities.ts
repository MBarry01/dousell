import { PropertyAmenity } from '../types/property';
import {
  Wifi,
  ParkingCircle,
  Waves,
  Tv,
  Fan,
  AirVent,
  Utensils,
  Lock,
} from 'lucide-react';

export const amenities: PropertyAmenity[] = [
  { id: 'wifi', name: 'Wi-Fi', icon: Wifi },
  { id: 'parking', name: 'Parking', icon: ParkingCircle },
  { id: 'pool', name: 'Piscine', icon: Waves },
  { id: 'tv', name: 'TV', icon: Tv },
  { id: 'fan', name: 'Ventilateur', icon: Fan },
  { id: 'ac', name: 'Climatisation', icon: AirVent },
  { id: 'kitchen', name: 'Cuisine équipée', icon: Utensils },
  { id: 'security', name: 'Sécurité 24/7', icon: Lock },
];