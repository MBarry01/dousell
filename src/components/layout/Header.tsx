import React from 'react';
import { Home, Menu, X, Globe2 } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">ImmoSenegal</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Accueil</a>
            <a href="#properties" className="text-gray-600 hover:text-blue-600">Propriétés</a>
            <a href="#virtual-tours" className="text-gray-600 hover:text-blue-600">Visites Virtuelles</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Globe2 className="h-5 w-5" />
              <span>FR</span>
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">Accueil</a>
              <a href="#properties" className="text-gray-600 hover:text-blue-600">Propriétés</a>
              <a href="#virtual-tours" className="text-gray-600 hover:text-blue-600">Visites Virtuelles</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                <Globe2 className="h-5 w-5" />
                <span>FR</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}