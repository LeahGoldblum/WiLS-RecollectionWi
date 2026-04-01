import { Tag } from 'lucide-react';
import { useState } from 'react';

const categories = [
  'K-4 Standards',
  'Native American History',
  'Industry & Labor',
  'Civil War Era',
  'Women\'s Suffrage',
  'Agricultural Heritage',
  'Immigration Stories',
  'Environmental History',
];

export function MetadataGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="border-b border-[var(--card-border)] bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-[var(--primary)] mb-3">
            Browse by Category & Social Studies Standards
          </h2>
          <p className="text-sm text-[var(--muted-foreground)]">
            Curated entry points organized by topic and Wisconsin educational standards
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="border-2 border-[var(--card-border)] bg-white rounded-lg p-6 md:p-8 cursor-pointer transition-all hover:shadow-lg hover:border-[var(--primary)] hover:-translate-y-1 relative group"
            >
              <div className="flex flex-col items-center text-center gap-4 md:gap-5">
                {/* Tag Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-[var(--primary-light)] flex items-center justify-center transition-all group-hover:bg-[var(--primary)]">
                  <Tag className="w-7 h-7 md:w-8 md:h-8 text-[var(--primary)] group-hover:text-white transition-colors" />
                </div>
                {/* Category Label */}
                <p className="text-sm text-[var(--foreground)] font-medium leading-tight">
                  {category}
                </p>
                
                {/* Hover Label */}
                {hoveredIndex === index && (
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-[var(--primary)] bg-[var(--primary-light)] px-3 py-1.5 rounded-full font-medium whitespace-nowrap">
                    Explore →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p className="text-center text-sm text-[var(--muted-foreground)] mt-8 md:mt-10">
          Each tag represents a curated search entry point designed to bypass common search difficulties
        </p>
      </div>
    </section>
  );
}