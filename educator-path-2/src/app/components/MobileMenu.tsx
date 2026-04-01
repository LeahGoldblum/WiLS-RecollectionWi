import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

interface PreviewLink {
  label: string;
  to?: string;
}

interface PreviewContent {
  title: string;
  description: string;
  links: PreviewLink[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  previewContent: {
    search: PreviewContent;
    collections: PreviewContent;
    educators: PreviewContent;
    genealogists: PreviewContent;
    contributors: PreviewContent;
    about: PreviewContent;
  };
}

const resourceColumns = [
  {
    heading: 'Practitioner Resources',
    links: [
      { label: 'Metadata & Description' },
      { label: 'Digitization Guidance' },
      { label: 'Templates & Toolkits' },
      { label: 'Contributor Resources' },
    ],
  },
  {
    heading: 'Teaching & Learning',
    links: [
      { label: 'Using Primary Sources' },
      { label: 'Classroom / Learning Ideas' },
      { label: 'Collections for Students' },
      { label: 'Educator Guidance' },
    ],
  },
  {
    heading: 'Discovery Support',
    links: [
      { label: 'Browse by Topic' },
      { label: 'Featured Collections' },
      { label: 'Popular Topics' },
      { label: 'Search Tips' },
    ],
  },
];

export function MobileMenu({ isOpen, onClose, previewContent }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const renderPreviewLinks = (links: PreviewLink[]) =>
    links.map((link, index) =>
      link.to ? (
        <Link
          key={index}
          to={link.to}
          onClick={onClose}
          className="block font-mono text-xs text-neutral-700 hover:text-neutral-900 py-1"
        >
          {link.label}
        </Link>
      ) : (
        <a
          key={index}
          href="#"
          className="block font-mono text-xs text-neutral-700 hover:text-neutral-900 py-1"
        >
          {link.label}
        </a>
      )
    );

  return (
    <div className="xl:hidden border-t border-neutral-300 bg-white max-h-[calc(100vh-80px)] overflow-y-auto">
      <nav className="container mx-auto px-4 py-6 space-y-4">
        {/* Search Section */}
        <div className="border-b border-neutral-200 pb-4">
          <button
            onClick={() => toggleSection('search')}
            className="w-full flex items-center justify-between font-mono text-sm text-neutral-800 mb-2"
          >
            Search
            {expandedSection === 'search' ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {expandedSection === 'search' && (
            <div className="pl-4 space-y-2 mt-3">
              <p className="font-mono text-xs text-neutral-600 mb-3">
                {previewContent.search.description}
              </p>
              {renderPreviewLinks(previewContent.search.links)}
            </div>
          )}
        </div>

        {/* Collections Section */}
        <div className="border-b border-neutral-200 pb-4">
          <button
            onClick={() => toggleSection('collections')}
            className="w-full flex items-center justify-between font-mono text-sm text-neutral-800 mb-2"
          >
            Collections
            {expandedSection === 'collections' ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {expandedSection === 'collections' && (
            <div className="pl-4 space-y-2 mt-3">
              <p className="font-mono text-xs text-neutral-600 mb-3">
                {previewContent.collections.description}
              </p>
              {renderPreviewLinks(previewContent.collections.links)}
            </div>
          )}
        </div>

        {/* Resources Section */}
        <div className="border-b border-neutral-200 pb-4">
          <button
            onClick={() => toggleSection('resources')}
            className="w-full flex items-center justify-between font-mono text-sm text-neutral-800 mb-2"
          >
            Resources
            {expandedSection === 'resources' ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {expandedSection === 'resources' && (
            <div className="pl-4 space-y-4 mt-3">
              {resourceColumns.map((column, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-mono text-xs text-neutral-800 border-b border-neutral-300 pb-1">
                    {column.heading}
                  </h4>
                  {column.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className="block font-mono text-xs text-neutral-700 hover:text-neutral-900 py-1"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Educators Section */}
        <div className="border-b border-neutral-200 pb-4">
          <button
            onClick={() => toggleSection('educators')}
            className="w-full flex items-center justify-between font-mono text-sm text-neutral-800 mb-2"
          >
            Educators
            {expandedSection === 'educators' ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {expandedSection === 'educators' && (
            <div className="pl-4 space-y-2 mt-3">
              <p className="font-mono text-xs text-neutral-600 mb-3">
                {previewContent.educators.description}
              </p>
              {renderPreviewLinks(previewContent.educators.links)}
            </div>
          )}
        </div>

        {/* Genealogists Section */}
        <div className="border-b border-neutral-200 pb-4">
          <button
            onClick={() => toggleSection('genealogists')}
            className="w-full flex items-center justify-between font-mono text-sm text-neutral-800 mb-2"
          >
            Genealogists
            {expandedSection === 'genealogists' ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {expandedSection === 'genealogists' && (
            <div className="pl-4 space-y-2 mt-3">
              <p className="font-mono text-xs text-neutral-600 mb-3">
                {previewContent.genealogists.description}
              </p>
              {renderPreviewLinks(previewContent.genealogists.links)}
            </div>
          )}
        </div>

        {/* Contributors Section */}
        <div className="border-b border-neutral-200 pb-4">
          <button
            onClick={() => toggleSection('contributors')}
            className="w-full flex items-center justify-between font-mono text-sm text-neutral-800 mb-2"
          >
            Contributors
            {expandedSection === 'contributors' ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {expandedSection === 'contributors' && (
            <div className="pl-4 space-y-2 mt-3">
              <p className="font-mono text-xs text-neutral-600 mb-3">
                {previewContent.contributors.description}
              </p>
              {renderPreviewLinks(previewContent.contributors.links)}
            </div>
          )}
        </div>

        {/* About Section */}
        <div className="pb-4">
          <button
            onClick={() => toggleSection('about')}
            className="w-full flex items-center justify-between font-mono text-sm text-neutral-800 mb-2"
          >
            About
            {expandedSection === 'about' ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {expandedSection === 'about' && (
            <div className="pl-4 space-y-2 mt-3">
              <p className="font-mono text-xs text-neutral-600 mb-3">
                {previewContent.about.description}
              </p>
              {renderPreviewLinks(previewContent.about.links)}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
