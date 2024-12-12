import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import FeaturedProperties from './components/home/FeaturedProperties';
import VirtualTours from './components/home/VirtualTours';
import AIFeatures from './components/home/AIFeatures';
import Listings from './pages/Listings';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Listings />
        <FeaturedProperties />
        <VirtualTours />
        <AIFeatures />
      </main>
    </div>
  );
}

export default App;