import React, { useState } from 'react';
import { X } from 'lucide-react';
import ListingGrid from '../components/listings/ListingGrid';
import ListingDetail from '../components/listings/ListingDetail';
import CreateListingForm from '../components/listings/CreateListingForm';
import { mockListings } from '../data/mockListings';
import CreateListingModal from '../components/listings/CreateListingModal';
import ListingHeader from '../components/listings/ListingHeader';

export default function Listings() {
  const [listings] = useState(mockListings);
  const [selectedListing, setSelectedListing] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateSubmit = (formData: FormData) => {
    console.log('Nouvelle annonce:', Object.fromEntries(formData));
    setShowCreateForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ListingHeader onCreateClick={() => setShowCreateForm(true)} />

      <ListingGrid
        listings={listings}
        onListingClick={setSelectedListing}
      />

      {selectedListing && (
        <ListingDetail
          listing={selectedListing}
          onClose={() => setSelectedListing(null)}
        />
      )}

      {showCreateForm && (
        <CreateListingModal
          onClose={() => setShowCreateForm(false)}
          onSubmit={handleCreateSubmit}
        />
      )}
    </div>
  );
}