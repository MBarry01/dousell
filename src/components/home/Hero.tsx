import React from 'react';
import { Search, MapPin, Home as HomeIcon } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trouvez Votre Maison Idéale au Sénégal
          </h1>
          <p className="text-xl text-white mb-8">
            Découvrez les meilleures propriétés avec notre technologie de pointe
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Localisation"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex-1 relative">
                <HomeIcon className="absolute left-3 top-3 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Type de bien</option>
                  <option>Appartement</option>
                  <option>Maison</option>
                  <option>Villa</option>
                  <option>Terrain</option>
                </select>
              </div>
              
              <button className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Search className="mr-2" />
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}