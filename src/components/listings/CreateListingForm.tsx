import React, { useState } from 'react';
import { PropertyType } from '../../types/property';
import { amenities } from '../../data/amenities';
import { Upload, Plus } from 'lucide-react';

interface CreateListingFormProps {
  onSubmit: (formData: FormData) => void;
}

export default function CreateListingForm({ onSubmit }: CreateListingFormProps) {
  const [images, setImages] = useState<File[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const propertyTypes: PropertyType[] = ['house', 'apartment', 'studio', 'room'];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('amenities', JSON.stringify(selectedAmenities));
    images.forEach((image, index) => {
      formData.append(`image-${index}`, image);
    });
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Publier une Annonce</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type de Bien
          </label>
          <select
            name="type"
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          >
            {propertyTypes.map(type => (
              <option key={type} value={type}>
                {type === 'house' ? 'Maison' :
                 type === 'apartment' ? 'Appartement' :
                 type === 'studio' ? 'Studio' : 'Chambre'}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Titre de l'annonce
          </label>
          <input
            type="text"
            name="title"
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prix mensuel (XOF)
          </label>
          <input
            type="number"
            name="price"
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Localisation
          </label>
          <input
            type="text"
            name="location"
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Photos
          </label>
          <div className="flex flex-wrap gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative w-24 h-24">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setImages(images.filter((_, i) => i !== index))}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                >
                  ×
                </button>
              </div>
            ))}
            <label className="w-24 h-24 flex items-center justify-center border-2 border-dashed rounded-md cursor-pointer hover:border-blue-500">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Upload className="w-6 h-6 text-gray-400" />
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Équipements
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.map(amenity => (
              <label
                key={amenity.id}
                className={`flex items-center p-3 border rounded-md cursor-pointer ${
                  selectedAmenities.includes(amenity.id)
                    ? 'bg-blue-50 border-blue-500'
                    : 'hover:bg-gray-50'
                }`}
              >
                <input
                  type="checkbox"
                  value={amenity.id}
                  checked={selectedAmenities.includes(amenity.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedAmenities([...selectedAmenities, amenity.id]);
                    } else {
                      setSelectedAmenities(selectedAmenities.filter(id => id !== amenity.id));
                    }
                  }}
                  className="hidden"
                />
                <span className="flex items-center">
                  {React.createElement(amenity.icon, { className: 'w-5 h-5 mr-2' })}
                  {amenity.name}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Publier l'annonce
        </button>
      </div>
    </form>
  );
}
