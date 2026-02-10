import { Archive, Search, BookMarked, Menu } from 'lucide-react';
import { Persona, Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  currentPersona: Persona;
  onNavigateHome: () => void;
}

export function Header({ currentPage, currentPersona, onNavigateHome }: HeaderProps) {
  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          {/* Logo and site title */}
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center">
              <Archive className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-serif text-neutral-900">Recollection Wisconsin</h1>
              <p className="text-xs text-neutral-600">Digital Archives & Collections</p>
            </div>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm text-neutral-700 hover:text-neutral-900 font-medium">
              About
            </a>
            <a href="#" className="text-sm text-neutral-700 hover:text-neutral-900 font-medium">
              Collections
            </a>
            <a href="#" className="text-sm text-neutral-700 hover:text-neutral-900 font-medium">
              Help
            </a>
            <button className="flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg transition-colors text-sm font-medium">
              <BookMarked className="w-4 h-4" />
              My Collections
            </button>
          </nav>

          <button className="md:hidden p-2 hover:bg-neutral-100 rounded">
            <Menu className="w-5 h-5 text-neutral-700" />
          </button>
        </div>

        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search archives, collections, and resources..."
            className="w-full pl-11 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Breadcrumb for current location */}
        {currentPage !== 'homepage' && (
          <div className="mt-3 flex items-center gap-2 text-sm text-neutral-600">
            <button onClick={onNavigateHome} className="hover:text-neutral-900">
              Home
            </button>
            <span>/</span>
            <span className="text-neutral-900 font-medium capitalize">
              {currentPage === 'hub' ? currentPersona : currentPage === 'filtered' ? 'Results' : 'Resource'}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
