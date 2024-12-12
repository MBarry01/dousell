import React from 'react';
import { RentalListing } from '../../types/property';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

interface ListingCardProps {
  listing: RentalListing;
  onClick: (listing: RentalListing) => void;
}

export default function ListingCard({ listing, onClick }: ListingCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={() => onClick(listing)}
    >
      <div className="relative h-48">
        <img
          src={listing.images[0]}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
          {listing.price.toLocaleString()} XOF/mois
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{listing.location}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{listing.bedrooms} Ch.</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{listing.bathrooms} SdB</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{listing.area} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
}