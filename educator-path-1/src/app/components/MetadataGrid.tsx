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
    <section className="border-b border-neutral-300 bg-neutral-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <h2 className="font-mono text-2xl md:text-3xl text-neutral-800 mb-8 md:mb-12 text-center">
          Browse by Category & Social Studies Standards
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="border border-neutral-400 bg-white p-4 md:p-6 cursor-pointer transition-all hover:shadow-md hover:border-neutral-600 hover:-translate-y-1 relative"
            >
              <div className="flex flex-col items-center text-center gap-3 md:gap-4">
                {/* Tag Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 border border-neutral-300 bg-neutral-50 flex items-center justify-center transition-all">
                  <Tag className="w-6 h-6 md:w-8 md:h-8 text-neutral-600" />
                </div>
                {/* Category Label */}
                <p className="font-mono text-xs text-neutral-700 leading-tight">
                  {category}
                </p>
                
                {/* Hover Label */}
                {hoveredIndex === index && (
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-xs text-neutral-500 bg-neutral-100 px-2 py-1 border border-neutral-300 whitespace-nowrap">
                    Explore →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p className="text-center font-mono text-xs text-neutral-600 mt-6 md:mt-8">
          Each tag represents a curated search entry point
        </p>
      </div>
    </section>
  );
}