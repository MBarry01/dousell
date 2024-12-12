import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "Villa Moderne à Dakar",
    location: "Almadies, Dakar",
    price: "250,000,000 XOF",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    beds: 4,
    baths: 3,
    area: 250
  },
  {
    id: 2,
    title: "Appartement Vue Mer",
    location: "Ngor, Dakar",
    price: "150,000,000 XOF",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    beds: 3,
    baths: 2,
    area: 180
  },
  {
    id: 3,
    title: "Résidence de Luxe",
    location: "Saly, Mbour",
    price: "350,000,000 XOF",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    beds: 5,
    baths: 4,
    area: 300
  }
];

export default function FeaturedProperties() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Propriétés en Vedette</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                  {property.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.location}</span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.beds} Ch.</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.baths} SdB</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.area} m²</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}