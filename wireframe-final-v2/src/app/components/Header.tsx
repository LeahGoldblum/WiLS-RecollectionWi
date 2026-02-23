import { ChevronDown, Search as SearchIcon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ResourcesDropdown } from './ResourcesDropdown';
import { PreviewPanel } from './PreviewPanel';
import { MobileMenu } from './MobileMenu';

type MenuType = 'search' | 'collections' | 'resources' | 'educators' | 'contribute' | 'about' | null;

export function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Simple preview panel content for each navigation item (2-4 general links)
  const previewContent = {
    search: {
      title: 'Search',
      description: 'Find items across all collections',
      links: [
        { label: 'Browse' },
        { label: 'Featured' },
        { label: 'Search Tips' },
      ],
    },
    collections: {
      title: 'Collections & Stories',
      description: 'Explore digital collections',
      links: [
        { label: 'Browse Collections' },
        { label: 'Featured' },
        { label: 'Community Stories' },
      ],
    },
    educators: {
      title: 'Educators',
      description: 'Resources for teaching',
      links: [
        { label: 'Getting Started' },
        { label: 'Browse Materials' },
        { label: 'Featured Resources' },
      ],
    },
    contribute: {
      title: 'Become a Contributor',
      description: 'Share collections with Wisconsin communities',
      links: [
        { label: 'Start Contributing' },
        { label: 'Contributor Requirements' },
        { label: 'Contact Contributor Support' },
      ],
    },
    about: {
      title: 'About',
      description: 'Learn about this project',
      links: [
        { label: 'Overview' },
        { label: 'Contributors' },
        { label: 'Contact Us' },
      ],
    },
  };

  return (
    <header className="border-b border-neutral-300 bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 py-4 md:py-5">
          {/* Logo */}
          <div className="border border-neutral-400 px-3 md:px-5 py-2 bg-neutral-50 flex-shrink-0">
            <span className="font-mono text-xs md:text-sm text-neutral-700 whitespace-nowrap">
              RECOLLECTION WI
            </span>
          </div>

          {/* Desktop/Tablet Navigation - Visible md and up */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 flex-1 justify-center">
            {/* Search */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveMenu('search')}
                onMouseLeave={() => setActiveMenu(null)}
                className="font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                Search
              </button>
              <PreviewPanel
                isOpen={activeMenu === 'search'}
                onMouseEnter={() => setActiveMenu('search')}
                onMouseLeave={() => setActiveMenu(null)}
                {...previewContent.search}
              />
            </div>

            {/* Collections */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveMenu('collections')}
                onMouseLeave={() => setActiveMenu(null)}
                className="font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                Collections
              </button>
              <PreviewPanel
                isOpen={activeMenu === 'collections'}
                onMouseEnter={() => setActiveMenu('collections')}
                onMouseLeave={() => setActiveMenu(null)}
                {...previewContent.collections}
              />
            </div>

            {/* Resources - Mega Menu */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveMenu('resources')}
                onMouseLeave={() => setActiveMenu(null)}
                className="flex items-center gap-1 font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                Resources
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            {/* Educators */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveMenu('educators')}
                onMouseLeave={() => setActiveMenu(null)}
                className="font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                Educators
              </button>
              <PreviewPanel
                isOpen={activeMenu === 'educators'}
                onMouseEnter={() => setActiveMenu('educators')}
                onMouseLeave={() => setActiveMenu(null)}
                {...previewContent.educators}
              />
            </div>

            {/* Contribute */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveMenu('contribute')}
                onMouseLeave={() => setActiveMenu(null)}
                className="font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                Become a Contributor
              </button>
              <PreviewPanel
                isOpen={activeMenu === 'contribute'}
                onMouseEnter={() => setActiveMenu('contribute')}
                onMouseLeave={() => setActiveMenu(null)}
                {...previewContent.contribute}
              />
            </div>

            {/* About */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveMenu('about')}
                onMouseLeave={() => setActiveMenu(null)}
                className="font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                About
              </button>
              <PreviewPanel
                isOpen={activeMenu === 'about'}
                onMouseEnter={() => setActiveMenu('about')}
                onMouseLeave={() => setActiveMenu(null)}
                {...previewContent.about}
              />
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Search Icon */}
            <button 
              className="border border-neutral-400 bg-neutral-50 p-2 hover:bg-neutral-100 transition-colors"
              aria-label="Search"
            >
              <SearchIcon className="w-4 h-4 text-neutral-700" />
            </button>
            
            {/* Mobile Menu Toggle - Only on small screens */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden border border-neutral-400 bg-neutral-50 p-2 hover:bg-neutral-100 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-neutral-700" />
              ) : (
                <Menu className="w-4 h-4 text-neutral-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Resources Mega Menu Dropdown - Desktop/Tablet */}
      <ResourcesDropdown
        isOpen={activeMenu === 'resources'}
        onMouseEnter={() => setActiveMenu('resources')}
        onMouseLeave={() => setActiveMenu(null)}
      />

      {/* Mobile Menu - Only on small screens */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        previewContent={previewContent}
      />
    </header>
  );
}
