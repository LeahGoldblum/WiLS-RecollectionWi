interface ResourceLink {
  label: string;
}

interface ResourceColumn {
  heading: string;
  links: ResourceLink[];
}

const resourceColumns: ResourceColumn[] = [
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

interface ResourcesDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function ResourcesDropdown({ isOpen, onMouseEnter, onMouseLeave }: ResourcesDropdownProps) {
  if (!isOpen) return null;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="hidden md:block absolute left-0 right-0 top-full mt-0 bg-white border-t border-neutral-300 shadow-lg z-50"
    >
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {resourceColumns.map((column, index) => (
            <div key={index} className="space-y-4">
              {/* Column Heading */}
              <h3 className="font-mono text-sm text-neutral-800 border-b border-neutral-300 pb-2">
                {column.heading}
              </h3>
              
              {/* Links */}
              <ul className="space-y-2.5">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="block font-mono text-xs text-neutral-700 hover:text-neutral-900 hover:underline transition-colors py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
