import React, { useState } from 'react';
import { Annotation } from './Annotation';
import { ResourcesDropdown } from './ResourcesDropdown';
import { SearchPreview } from './nav-previews/SearchPreview';
import { CollectionsPreview } from './nav-previews/CollectionsPreview';
import { EducatorsPreview } from './nav-previews/EducatorsPreview';
import { ContributePreview } from './nav-previews/ContributePreview';
import { AboutPreview } from './nav-previews/AboutPreview';

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="relative bg-white border-b-2 border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">
        <div className="flex items-center justify-between gap-4 md:gap-6">
          {/* Logo Placeholder - Left */}
          <div className="w-40 md:w-48 h-10 md:h-12 border-2 border-gray-400 bg-gray-50 flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-mono text-gray-500 tracking-wider">RECOLLECTION WI</span>
          </div>
          
          {/* Center Navigation - Always Visible */}
          <nav className="flex items-center justify-center gap-3 md:gap-4 lg:gap-6 flex-1 flex-wrap">
            {/* Search */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('search')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="text-xs md:text-sm font-mono text-gray-700 hover:text-gray-900 cursor-pointer transition-all px-2 py-1">
                Search
              </div>
              {activeDropdown === 'search' && <SearchPreview />}
            </div>
            
            {/* Collections */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('collections')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="text-xs md:text-sm font-mono text-gray-700 hover:text-gray-900 cursor-pointer transition-all px-2 py-1">
                Collections
              </div>
              {activeDropdown === 'collections' && <CollectionsPreview />}
            </div>
            
            {/* Resources Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="text-xs md:text-sm font-mono text-gray-700 hover:text-gray-900 cursor-pointer transition-all flex items-center gap-1 px-2 py-1">
                Resources
                <span className="text-xs">▼</span>
              </div>
              {activeDropdown === 'resources' && <ResourcesDropdown />}
            </div>
            
            {/* Educators */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('educators')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="text-xs md:text-sm font-mono text-gray-700 hover:text-gray-900 cursor-pointer transition-all px-2 py-1">
                Educators
              </div>
              {activeDropdown === 'educators' && <EducatorsPreview />}
            </div>
            
            {/* Contribute */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('contribute')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="text-xs md:text-sm font-mono text-gray-700 hover:text-gray-900 cursor-pointer transition-all px-2 py-1 whitespace-nowrap">
                Partner With Us
              </div>
              {activeDropdown === 'contribute' && <ContributePreview />}
            </div>
            
            {/* About */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="text-xs md:text-sm font-mono text-gray-700 hover:text-gray-900 cursor-pointer transition-all px-2 py-1">
                About
              </div>
              {activeDropdown === 'about' && <AboutPreview />}
            </div>
          </nav>
          
          {/* Right - Search Icon & CTA */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <div className="w-8 h-8 md:w-9 md:h-9 border-2 border-gray-400 bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="text-xs font-mono text-gray-500">🔍</span>
            </div>
            <div className="hidden sm:block px-3 md:px-4 py-1.5 md:py-2 border-2 border-gray-800 bg-gray-800 text-white hover:bg-gray-900 cursor-pointer transition-all">
              <span className="text-xs font-mono">Contribute</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Annotation */}
      <Annotation
        position="right"
        className="hidden xl:block absolute -right-72 top-4"
      >
        <strong>FULLY VISIBLE NAVIGATION</strong>
        <br /><br />
        All primary navigation items remain visible at all times, creating a professional 
        institutional navigation bar. No content is hidden or collapsed.
        <br /><br />
        Each menu item features a hover preview panel that provides quick context and example 
        links without replacing the main navigation. Resources section uses a larger mega menu 
        style for comprehensive taxonomy.
        <br /><br />
        Clear spacing and typography hierarchy improve scannability. Predictable hover interactions 
        maintain professional tone suitable for cultural heritage platforms.
      </Annotation>
    </header>
  );
}
