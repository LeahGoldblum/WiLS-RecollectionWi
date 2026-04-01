import { ChevronDown, Search as SearchIcon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { ResourcesDropdown } from './ResourcesDropdown';
import { PreviewPanel } from './PreviewPanel';
import { MobileMenu } from './MobileMenu';

type MenuType =
  | 'search'
  | 'collections'
  | 'resources'
  | 'educators'
  | 'genealogists'
  | 'contributors'
  | 'about'
  | null;

export function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const previewContent = {
    search: {
      title: 'Search',
      description: 'Find items across all collections',
      links: [{ label: 'Browse' }, { label: 'Featured' }, { label: 'Search Tips' }],
    },
    collections: {
      title: 'Collections & Stories',
      description: 'Explore digital collections',
      links: [{ label: 'Browse Collections' }, { label: 'Featured' }, { label: 'Community Stories' }],
    },
    educators: {
      title: 'Educators',
      description: 'Resources for teaching',
      links: [
        { label: 'Hub', to: '/educators' },
        { label: 'Map Explorer', to: '/educators/map' },
        { label: 'Online Exhibits', to: '/educators/exhibits' },
        { label: 'Search Starters', to: '/educators/search-starters' },
        { label: 'Quick Find', to: '/educators/quick-find' },
      ],
    },
    genealogists: {
      title: 'Genealogists',
      description: 'Family history search pathway',
      links: [
        { label: 'Hub', to: '/genealogists' },
        { label: 'Search', to: '/genealogists/search' },
      ],
    },
    contributors: {
      title: 'Contributors',
      description: 'Share collections with Recollection Wisconsin',
      links: [
        { label: 'Contributor Hub', to: '/organizations' },
        { label: 'Get Started', to: '/organizations/get-started' },
        { label: 'Contributor FAQ', to: '/organizations/contributor-faq' },
      ],
    },
    about: {
      title: 'About',
      description: 'Learn about this project',
      links: [{ label: 'Overview' }, { label: 'Partners' }, { label: 'Contact Us' }],
    },
  };

  return (
    <header className="border-b border-neutral-300 bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 py-4 md:py-5">
          {/* Logo */}
          <Link to="/" className="border border-neutral-400 px-3 md:px-5 py-2 bg-neutral-50 flex-shrink-0 hover:bg-neutral-100 transition-colors">
            <span className="font-mono text-xs md:text-sm text-neutral-700 whitespace-nowrap">
              RECOLLECTION WI
            </span>
          </Link>

          {/* Desktop/Tablet Navigation */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 flex-1 justify-center" aria-label="Main navigation">
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

            <div className="relative">
              <button
                onMouseEnter={() => setActiveMenu('genealogists')}
                onMouseLeave={() => setActiveMenu(null)}
                className="font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                Genealogists
              </button>
              <PreviewPanel
                isOpen={activeMenu === 'genealogists'}
                onMouseEnter={() => setActiveMenu('genealogists')}
                onMouseLeave={() => setActiveMenu(null)}
                {...previewContent.genealogists}
              />
            </div>

            {/* Contributors */}
            <div className="relative">
              <Link
                to="/organizations"
                onMouseEnter={() => setActiveMenu('contributors')}
                onMouseLeave={() => setActiveMenu(null)}
                className="font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                Contributors
              </Link>
              <PreviewPanel
                isOpen={activeMenu === 'contributors'}
                onMouseEnter={() => setActiveMenu('contributors')}
                onMouseLeave={() => setActiveMenu(null)}
                {...previewContent.contributors}
              />
            </div>

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
            <button
              className="border border-neutral-400 bg-neutral-50 p-2 hover:bg-neutral-100 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900"
              aria-label="Search"
            >
              <SearchIcon className="w-4 h-4 text-neutral-700" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden border border-neutral-400 bg-neutral-50 p-2 hover:bg-neutral-100 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
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

      <ResourcesDropdown
        isOpen={activeMenu === 'resources'}
        onMouseEnter={() => setActiveMenu('resources')}
        onMouseLeave={() => setActiveMenu(null)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        previewContent={previewContent}
      />
    </header>
  );
}
