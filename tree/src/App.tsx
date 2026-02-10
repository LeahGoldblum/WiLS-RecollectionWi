import { useState } from 'react';
import { WireflowDiagram } from './components/wireflow-diagram';

type ViewType = 'diagram' | 'prototype';

export default function App() {
  const [activeView, setActiveView] = useState<ViewType>('diagram');

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-neutral-900 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-xl font-bold">Recollection Wisconsin Redesign</h1>
              <p className="text-sm text-neutral-600">UX Research & Design Capstone | Wireflow Documentation</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveView('diagram')}
                className={`px-4 py-2 border-2 border-neutral-900 font-bold text-sm ${
                  activeView === 'diagram' ? 'bg-neutral-900 text-white' : 'bg-white'
                }`}
              >
                WIREFLOW VIEW
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <WireflowDiagram />
      </main>
    </div>
  );
}
