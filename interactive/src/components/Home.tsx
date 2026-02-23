import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HomeProps {
  onStartWizard: () => void;
  onStartEducatorFlow: () => void;
}

export function Home({ onStartWizard, onStartEducatorFlow }: HomeProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Navigation */}
      <nav className="bg-white border-b-4 border-black p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">RECOLLECTION WISCONSIN</div>
          <div className="flex gap-8 items-center">
            <a href="#" className="text-lg hover:underline">About</a>
            <button
              onClick={onStartEducatorFlow}
              className="text-lg hover:underline"
            >
              Educator Portal
            </button>
            <button
              onClick={onStartWizard}
              className="border-2 border-black px-6 py-2 bg-white hover:bg-gray-100 font-semibold"
            >
              Become a Contributor
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="border-4 border-black p-12 bg-white">
            <h1 className="text-5xl font-bold mb-6">
              PRESERVING WISCONSIN'S CULTURAL HERITAGE
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              [WIREFRAME] Low-Fidelity Interactive Prototype
            </p>
            <p className="text-lg mb-12">
              A digital collection of historical materials from libraries, museums, 
              historical societies, and cultural organizations across Wisconsin.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {/* Educator CTA */}
              <div className="border-2 border-black p-8 bg-gray-50 hover:bg-gray-100 transition-colors">
                <h2 className="text-2xl font-bold mb-4">FOR EDUCATORS</h2>
                <p className="mb-6">Search thousands of primary sources for your classroom</p>
                <button 
                  onClick={onStartEducatorFlow}
                  className="border-2 border-black px-6 py-3 bg-white hover:bg-gray-200 font-semibold inline-flex items-center gap-2"
                >
                  Educator Portal
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Contributor CTA - Primary action */}
              <div className="border-4 border-black p-8 bg-yellow-100 hover:bg-yellow-200 transition-colors">
                <h2 className="text-2xl font-bold mb-4">FOR ORGANIZATIONS</h2>
                <p className="mb-6">Share your collection with educators and researchers</p>
                <button
                  onClick={onStartWizard}
                  className="border-2 border-black px-6 py-3 bg-white hover:bg-gray-200 font-semibold inline-flex items-center gap-2"
                >
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-600 mt-8">
            <p>FLOW 1: Educator Pre-Search Bridge (Persona: Sarah) | FLOW 2: Contributor Onboarding (Persona: Joseph)</p>
            <p>Click "Educator Portal" or "Become a Contributor/Partner" to begin</p>
          </div>
        </div>
      </main>
    </div>
  );
}