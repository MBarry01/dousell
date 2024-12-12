import React from 'react';
import { Brain, MessageSquare, Globe2, Search } from 'lucide-react';

export default function AIFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technologies IA Intégrées</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Recherche Intelligente</h3>
            <p className="text-gray-600">
              Notre IA analyse vos critères pour trouver les propriétés parfaitement adaptées à vos besoins
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Globe2 className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Traduction Automatique</h3>
            <p className="text-gray-600">
              Accédez au contenu dans votre langue préférée grâce à notre système de traduction IA
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Assistant Virtuel</h3>
            <p className="text-gray-600">
              Notre chatbot répond à vos questions et vous guide 24/7 dans votre recherche
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Recommandations IA</h3>
            <p className="text-gray-600">
              Recevez des suggestions personnalisées basées sur vos préférences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}