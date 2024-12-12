import React from 'react';
import { Video, Eye } from 'lucide-react';

export default function VirtualTours() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Visites Virtuelles</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Explorez les Propriétés en 3D</h3>
            <p className="text-gray-600">
              Découvrez nos propriétés comme si vous y étiez grâce à nos visites virtuelles immersives. 
              Explorez chaque pièce, visualisez les espaces et projetez-vous dans votre futur chez-vous.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Video className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Visites Virtuelles 360°</h4>
                  <p className="text-gray-600">Explorez chaque propriété en détail</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Vues Immersives</h4>
                  <p className="text-gray-600">Visualisez les espaces comme si vous y étiez</p>
                </div>
              </div>
            </div>
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Découvrir les Visites Virtuelles
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558442086-8ea5ff4c8d10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Virtual Tour Demo"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/90 p-4 rounded-full shadow-lg hover:bg-white transition-colors">
                <Video className="h-8 w-8 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}