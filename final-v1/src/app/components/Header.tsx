import { ChevronDown, Search as SearchIcon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { ResourcesDropdown } from './ResourcesDropdown';
import { PreviewPanel } from './PreviewPanel';
import { MobileMenu } from './MobileMenu';

type MenuType = 'explore' | 'resources' | 'educators' | 'genealogists' | 'contribute' | 'about' | null;

export function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const previewContent = {
    explore: {
      title: 'Explore',
      description: 'Discover collections by story, place, and guided starters.',
      links: [
        { label: 'Explore Landing', href: '/explore' },
        { label: 'Explore by Place', href: '/explore/place' },
        { label: 'Featured Collections / Stories', href: '/explore/featured' },
        { label: 'Search Tips / Start Here', href: '/explore/search-tips' },
      ],
    },
    educators: {
      title: 'For Educators',
      description: 'Primary sources for Wisconsin history instruction',
      links: [
        { label: 'Educator Hub', href: '/for-educators' },
        { label: 'Search Starters', href: '/for-educators/search-starters' },
        { label: 'Featured Series', href: '/for-educators/featured-series' },
        { label: 'Explore Teaching Resources', href: '/for-educators/teaching-resources' },
        { label: 'Explore by Place', href: '/for-educators/explore-place' },
        { label: 'Find Something in 60 Seconds', href: '/for-educators/quick-find' },
      ],
    },
    genealogists: {
      title: 'Genealogists',
      description: 'Historical records for family research',
      links: [
        { label: 'Genealogist Hub', href: '/genealogists' },
        { label: 'Search Records', href: '/genealogists/search' },
        { label: 'Explore by Map', href: '/genealogists/map' },
        { label: 'Research Tips', href: '/genealogists#tips' },
      ],
    },
    contribute: {
      title: 'Contribute',
      description: 'Share collections with the community',
      links: [
        { label: 'Partner with Us', href: '/contribute' },
        { label: 'Hosting', href: '/contribute/hosting' },
        { label: 'Harvesting', href: '/contribute/harvesting' },
        { label: 'Contributor FAQ', href: '/contribute/contributor-faq' },
        { label: 'Get Started', href: '/contribute/get-started' },
      ],
    },
    about: {
      title: 'About',
      description: 'About Recollection Wisconsin and the statewide network',
      links: [{ label: 'About Recollection Wisconsin', href: '/about' }],
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-center" aria-label="Main navigation">
            <div className="relative">
              <Link
                to="/explore"
                onMouseEnter={() => setActiveMenu('explore')}
                onMouseLeave={() => setActiveMenu(null)}
                className="font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                Explore
              </Link>
              <PreviewPanel
                isOpen={activeMenu === 'explore'}
                onMouseEnter={() => setActiveMenu('explore')}
                onMouseLeave={() => setActiveMenu(null)}
                {...previewContent.explore}
              />
            </div>

            {/* For Educators */}
            <div className="relative">
              <Link
                to="/for-educators"
                onMouseEnter={() => setActiveMenu('educators')}
                onMouseLeave={() => setActiveMenu(null)}
                className="font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                For Educators
              </Link>
              <PreviewPanel
                isOpen={activeMenu === 'educators'}
                onMouseEnter={() => setActiveMenu('educators')}
                onMouseLeave={() => setActiveMenu(null)}
                {...previewContent.educators}
              />
            </div>

            {/* Genealogists */}
            <div className="relative">
              <Link
                to="/genealogists"
                onMouseEnter={() => setActiveMenu('genealogists')}
                onMouseLeave={() => setActiveMenu(null)}
                className="font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                Genealogists
              </Link>
              <PreviewPanel
                isOpen={activeMenu === 'genealogists'}
                onMouseEnter={() => setActiveMenu('genealogists')}
                onMouseLeave={() => setActiveMenu(null)}
                {...previewContent.genealogists}
              />
            </div>

            {/* Contribute */}
            <div className="relative">
              <Link
                to="/contribute"
                onMouseEnter={() => setActiveMenu('contribute')}
                onMouseLeave={() => setActiveMenu(null)}
                className="font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                Contribute
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
                onMouseEnter={() => setActiveMenu('resources')}
                onMouseLeave={() => setActiveMenu(null)}
                className="flex items-center gap-1 font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                Resources
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <div className="relative">
              <Link
                to="/about"
                onMouseEnter={() => setActiveMenu('about')}
                onMouseLeave={() => setActiveMenu(null)}
                className="font-mono text-sm text-neutral-700 hover:text-neutral-900 transition-colors whitespace-nowrap hover:underline"
              >
                About
              </Link>
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
              className="lg:hidden border border-neutral-400 bg-neutral-50 p-2 hover:bg-neutral-100 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900"
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
