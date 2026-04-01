import { useState } from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArrowRight, ExternalLink } from 'lucide-react';

type Category = 'All' | 'Digitization' | 'Metadata' | 'Planning' | 'Rights';

interface Resource {
  title: string;
  description: string;
  category: Exclude<Category, 'All'>;
  source: string;
  href: string;
}

const resources: Resource[] = [
  {
    title: 'Digitization Guidelines for Cultural Heritage Materials',
    description: 'Federal Agencies Digital Guidelines Initiative (FADGI) technical standards for imaging — resolution, bit depth, color profiles, and storage formats.',
    category: 'Digitization',
    source: 'FADGI',
    href: '#',
  },
  {
    title: 'Wisconsin Historical Society Digitization Standards',
    description: 'State-specific standards and best practices for scanning documents, photographs, maps, and audio-visual materials.',
    category: 'Digitization',
    source: 'WHS',
    href: '#',
  },
  {
    title: 'Dublin Core Metadata Element Set',
    description: 'The foundational 15-element vocabulary used across most digital library and aggregation systems, including RW and DPLA.',
    category: 'Metadata',
    source: 'DCMI',
    href: '#',
  },
  {
    title: 'Describing Your Collections: Metadata Best Practices',
    description: 'Practical guidance on writing effective titles, descriptions, dates, and subject headings for historical materials.',
    category: 'Metadata',
    source: 'RW / WiLS',
    href: '#',
  },
  {
    title: 'Subject Headings for Wisconsin History',
    description: 'Recommended controlled vocabulary terms for Wisconsin-specific topics, places, and communities used across RW collections.',
    category: 'Metadata',
    source: 'RW / WiLS',
    href: '#',
  },
  {
    title: 'Collection Assessment Worksheet',
    description: 'A self-guided tool to evaluate your collection\'s digitization readiness — condition, formats, volume, and rights status.',
    category: 'Planning',
    source: 'RW / WiLS',
    href: '#',
  },
  {
    title: 'Digital Preservation 101',
    description: 'Introduction to file formats, storage media, backup strategies, and long-term access planning for small institutions.',
    category: 'Planning',
    source: 'DPC',
    href: '#',
  },
  {
    title: 'Grant Opportunities for Digitization',
    description: 'Overview of IMLS, NEH, LSTA, and Wisconsin-specific grants supporting digitization and digital access projects.',
    category: 'Planning',
    source: 'RW / WiLS',
    href: '#',
  },
  {
    title: 'RightsStatements.org Vocabulary',
    description: '12 standardized rights statements for cultural heritage institutions — useful for clearly communicating copyright status online.',
    category: 'Rights',
    source: 'RightsStatements.org',
    href: '#',
  },
  {
    title: 'Creative Commons Licensing Guide',
    description: 'Explanation of CC license types and how to choose the right license for materials you want to make openly reusable.',
    category: 'Rights',
    source: 'Creative Commons',
    href: '#',
  },
  {
    title: 'Understanding CC0 for Metadata',
    description: 'Why cultural heritage aggregators like DPLA and RW require CC0 for descriptive metadata, and what this means for your institution.',
    category: 'Rights',
    source: 'DPLA / RW',
    href: '#',
  },
  {
    title: 'OAI-PMH Implementation Guide',
    description: 'Technical reference for enabling and testing OAI-PMH on CONTENTdm, Omeka, DSpace, and other common platforms.',
    category: 'Digitization',
    source: 'OAI / DLF',
    href: '#',
  },
];

const categories: Category[] = ['All', 'Digitization', 'Metadata', 'Planning', 'Rights'];

const categoryColors: Record<Exclude<Category, 'All'>, string> = {
  Digitization: 'bg-neutral-200 text-neutral-700',
  Metadata: 'bg-neutral-300 text-neutral-800',
  Planning: 'bg-neutral-100 text-neutral-600 border border-neutral-300',
  Rights: 'bg-neutral-800 text-white',
};

export function Resources() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All'
    ? resources
    : resources.filter(r => r.category === activeCategory);

  return (
    <>
      <Breadcrumb items={[
        { label: 'Partner With Us', href: '/organizations' },
        { label: 'Resources' },
      ]} />

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-3">Resources for Contributors</h1>
          <p className="text-base text-neutral-600 leading-relaxed max-w-2xl">
            Guides, standards, and tools to help your organization digitize, describe, and share your collections. Curated for Wisconsin cultural heritage institutions.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-neutral-200 bg-white py-4 sticky top-16 z-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-neutral-500 mr-1">Filter:</span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-sm border transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900 ${
                  activeCategory === cat
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'border-neutral-300 text-neutral-600 hover:border-neutral-500 hover:text-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-sm text-neutral-400">{filtered.length} resource{filtered.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </section>

      {/* Resource cards */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                className="border border-neutral-200 bg-white p-5 hover:shadow-md hover:border-neutral-400 transition-all flex flex-col group"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`text-xs px-2 py-0.5 font-mono ${categoryColors[resource.category]}`}>
                    {resource.category}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0 mt-0.5 group-hover:text-neutral-700 transition-colors" />
                </div>
                <h3 className="text-sm font-medium text-neutral-900 mb-2 leading-snug group-hover:underline">
                  {resource.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                  {resource.description}
                </p>
                <p className="text-xs text-neutral-400 font-mono mt-3 pt-3 border-t border-neutral-100">
                  {resource.source}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-10">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="font-display text-2xl text-neutral-900 mb-3">Ready to take the next step?</h2>
          <p className="text-sm text-neutral-600 mb-6">
            The Get Started wizard walks you through the onboarding intake — about 10 minutes, no commitment required.
          </p>
          <Link
            to="/organizations/get-started"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-3 text-sm hover:bg-neutral-700 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
