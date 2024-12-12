import { RentalListing } from '../types/property';

export const mockListings: RentalListing[] = [
  {
    id: '1',
    title: 'Appartement Moderne aux Almadies',
    type: 'apartment',
    status: 'available',
    price: 450000,
    location: 'Almadies, Dakar',
    description: 'Magnifique appartement avec vue sur mer...',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    amenities: ['wifi', 'parking', 'ac'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
