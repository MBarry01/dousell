import React from 'react';
import { RentalListing } from '../../types/property';
import ListingCard from './ListingCard';

interface ListingGridProps {
  listings: RentalListing[];
  onListingClick: (listing: RentalListing) => void;
}

export default function ListingGrid({ listings, onListingClick }: ListingGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {listings.map(listing => (
        <ListingCard
          key={listing.id}
          listing={listing}
          onClick={onListingClick}
        />
      ))}
    </div>
  );
}