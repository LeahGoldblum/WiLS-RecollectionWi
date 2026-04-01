import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

interface PreviewLink {
  label: string;
  href?: string;
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
    contribute: PreviewContent;
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

function SectionLinks({ links, onClose }: { links: PreviewLink[]; onClose: () => void }) {
  return (
    <>
      {links.map((link, index) =>
        link.href ? (
          <Link
            key={index}
            to={link.href}
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
      )}
    </>
  );
}

export function MobileMenu({ isOpen, onClose, previewContent }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    { key: 'search',      label: 'Search',         content: previewContent.search },
    { key: 'collections', label: 'Collections',    content: previewContent.collections },
    { key: 'educators',   label: 'Educators',      content: previewContent.educators },
    { key: 'genealogists',label: 'Genealogists',   content: previewContent.genealogists },
    { key: 'contribute',  label: 'Partner With Us',content: previewContent.contribute },
    { key: 'about',       label: 'About',          content: previewContent.about },
  ];

  return (
    <div className="lg:hidden border-t border-neutral-300 bg-white max-h-[calc(100vh-80px)] overflow-y-auto">
      <nav className="container mx-auto px-4 py-6 space-y-4">

        {sections.map((section, idx) => (
          <div key={section.key} className={idx < sections.length - 1 ? 'border-b border-neutral-200 pb-4' : 'pb-4'}>
            <button
              onClick={() => toggleSection(section.key)}
              className="w-full flex items-center justify-between font-mono text-sm text-neutral-800 mb-2"
            >
              {section.label}
              {expandedSection === section.key ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {expandedSection === section.key && (
              <div className="pl-4 space-y-2 mt-3">
                <p className="font-mono text-xs text-neutral-600 mb-3">
                  {section.content.description}
                </p>
                <SectionLinks links={section.content.links} onClose={onClose} />
              </div>
            )}
          </div>
        ))}

        {/* Resources (special - has columns) */}
        <div className="border-t border-neutral-200 pt-4">
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

      </nav>
    </div>
  );
}
