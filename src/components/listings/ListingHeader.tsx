import React from 'react';
import { Plus } from 'lucide-react';

interface ListingHeaderProps {
  onCreateClick: () => void;
}

export default function ListingHeader({ onCreateClick }: ListingHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Annonces de Location</h1>
      <button
        onClick={onCreateClick}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
      >
        <Plus className="w-5 h-5 mr-2" />
        Publier une annonce
      </button>
    </div>
  );
}