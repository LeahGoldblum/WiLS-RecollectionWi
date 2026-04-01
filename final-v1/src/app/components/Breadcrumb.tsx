import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-neutral-200 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6 py-2.5">
        <ol className="flex items-center gap-1.5 flex-wrap">
          <li>
            <Link to="/" className="text-sm text-neutral-500 hover:text-neutral-800 hover:underline transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
              {item.href && i < items.length - 1 ? (
                <Link to={item.href} className="text-sm text-neutral-500 hover:text-neutral-800 hover:underline transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-sm text-neutral-800" aria-current={i === items.length - 1 ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
