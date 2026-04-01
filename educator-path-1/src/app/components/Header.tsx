import { ChevronDown, Search as SearchIcon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { ResourcesDropdown } from './ResourcesDropdown';
import { PreviewPanel } from './PreviewPanel';
import { MobileMenu } from './MobileMenu';

// Top-level nav must be: Search | Collections | Resources | Educators | Partner With Us | About
// Genealogy links live under the Resources dropdown (per requirements).

type MenuType = 'search' | 'collections' | 'resources' | 'educators' | 'contribute' | 'about' | null;

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
      // Keep submenu labels consistent with original Contributor Wireframe
      links: [
        { label: 'Getting Started', href: '/educators' },
        { label: 'Browse Materials', href: '/educators/search-starters' },
        { label: 'Featured Resources', href: '/educators/exhibits' },
      ],
    },
    contribute: {
      title: 'Partner With Us',
      description: 'Share collections with the community',
      links: [
        { label: 'Partner Overview', href: '/organizations' },
        { label: 'Get Started', href: '/organizations/get-started' },
        { label: 'Contributor FAQ', href: '/organizations/contributor-faq' },
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
          <Link
            to="/"
            className="border border-neutral-400 px-3 md:px-5 py-2 bg-neutral-50 flex-shrink-0 hover:bg-neutral-100 transition-colors"
          >
            <span className="font-mono text-xs md:text-sm text-neutral-700 whitespace-nowrap">RECOLLECTION WI</span>
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

            {/* Partner With Us — linked */}
            <div className="relative">
              <Link
                to="/organizations"
                onMouseEnter={() => setActiveMenu('contribute')}
                onMouseLeave={() => setActiveMenu(null)}
                className="font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                Partner With Us
              </Link>
              <PreviewPanel
                isOpen={activeMenu === 'contribute'}
                onMouseEnter={() => setActiveMenu('contribute')}
                onMouseLeave={() => setActiveMenu(null)}
                {...previewContent.contribute}
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
              {isMobileMenuOpen ? <X className="w-4 h-4 text-neutral-700" /> : <Menu className="w-4 h-4 text-neutral-700" />}
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
