import React from 'react';
import { X } from 'lucide-react';
import CreateListingForm from './CreateListingForm';

interface CreateListingModalProps {
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

export default function CreateListingModal({ onClose, onSubmit }: CreateListingModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Nouvelle Annonce</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <CreateListingForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}