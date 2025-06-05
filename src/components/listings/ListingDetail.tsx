import React from 'react';
import { RentalListing } from '../../types/property';
import { amenities } from '../../data/amenities';
import { MapPin, Bed, Bath, Square, X } from 'lucide-react';

interface ListingDetailProps {
  listing: RentalListing;
  onClose: () => void;
}

export default function ListingDetail({ listing, onClose }: ListingDetailProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {listing.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${listing.title} - ${index + 2}`}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{listing.title}</h2>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{listing.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-lg">
                <span className="font-bold text-blue-600">
                  {listing.price.toLocaleString()} XOF/mois
                </span>
                <span className="text-sm text-gray-500">
                  Disponible {listing.status === 'available' ? 'maintenant' : 'bientôt'}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y">
                <div className="text-center">
                  <Bed className="h-6 w-6 mx-auto mb-1" />
                  <span className="block text-sm text-gray-600">{listing.bedrooms} Chambres</span>
                </div>
                <div className="text-center">
                  <Bath className="h-6 w-6 mx-auto mb-1" />
                  <span className="block text-sm text-gray-600">{listing.bathrooms} SdB</span>
                </div>
                <div className="text-center">
                  <Square className="h-6 w-6 mx-auto mb-1" />
                  <span className="block text-sm text-gray-600">{listing.area} m²</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-600">{listing.description}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Équipements</h3>
                <div className="grid grid-cols-2 gap-2">
                  {listing.amenities.map(amenityId => {
                    const amenity = amenities.find(a => a.id === amenityId);
                    if (!amenity) return null;
                    return (
                      <div key={amenity.id} className="flex items-center text-gray-600">
                        {React.createElement(amenity.icon, { className: 'w-5 h-5 mr-2' })}
                        <span>{amenity.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contacter le propriétaire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
