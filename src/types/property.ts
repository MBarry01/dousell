import { ComponentType } from 'react';

export type PropertyType = 'house' | 'apartment' | 'studio' | 'room';

export type PropertyStatus = 'available' | 'rented' | 'pending';

export interface PropertyAmenity {
  id: string;
  name: string;
  /**
   * React component for the amenity icon
   */
  icon: ComponentType<{ className?: string }>;
}

export interface RentalListing {
  id: string;
  title: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  location: string;
  description: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  area: number;
  amenities: string[];
  createdAt: string;
  updatedAt: string;
}
