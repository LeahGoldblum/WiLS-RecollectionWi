import { Link } from 'react-router';

interface PreviewLink {
  label: string;
  href?: string;
}

interface PreviewPanelProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  title: string;
  description: string;
  links: PreviewLink[];
}

export function PreviewPanel({ isOpen, onMouseEnter, onMouseLeave, title, description, links }: PreviewPanelProps) {
  if (!isOpen) return null;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-0 w-64 bg-white border border-neutral-300 shadow-lg z-50"
    >
      <div className="p-5">
        {/* Panel Header */}
        <div className="mb-3 pb-3 border-b border-neutral-200">
          <h3 className="font-mono text-sm text-neutral-800 mb-1.5">
            {title}
          </h3>
          <p className="font-mono text-xs text-neutral-600">
            {description}
          </p>
        </div>

        {/* Quick Links */}
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              {link.href ? (
                <Link
                  to={link.href}
                  className="block font-mono text-xs text-neutral-700 hover:text-neutral-900 hover:underline transition-colors py-1"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href="#"
                  className="block font-mono text-xs text-neutral-700 hover:text-neutral-900 hover:underline transition-colors py-1"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
