import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import PropertyModel from '../3d/PropertyModel';
import LoadingSpinner from '../3d/LoadingSpinner';

interface PropertySectionProps {
  title: string;
  description: string;
  modelUrl: string;
  backgroundColor?: string;
}

export default function PropertySection({ 
  title, 
  description, 
  modelUrl,
  backgroundColor = 'bg-white'
}: PropertySectionProps) {
  return (
    <section className={`h-screen ${backgroundColor} relative overflow-hidden`}>
      <div className="absolute inset-0">
        <Suspense fallback={<LoadingSpinner />}>
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 2, 5]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <PropertyModel
              modelUrl={modelUrl}
              position={[0, 0, 0]}
              scale={1.5}
            />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </Canvas>
        </Suspense>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 mb-8">{description}</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Explorer
          </button>
        </div>
      </div>
    </section>
  );
}