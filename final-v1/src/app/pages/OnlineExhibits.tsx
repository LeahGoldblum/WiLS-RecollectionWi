import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { ExternalLink, Search } from 'lucide-react';

interface Exhibit {
  id: string;
  title: string;
  description: string;
  topic: string;
  period: string;
  itemCount: string;
  series?: string;
}

const EXHIBITS: Exhibit[] = [
  {
    id: 'farm-life',
    title: 'Wisconsin Through the Lens: Farm Life, 1890-1940',
    description: 'Photographs documenting everyday rural life across Wisconsin dairy and grain farms, from barn raising to harvest seasons.',
    topic: 'Agriculture',
    period: '1890-1940',
    itemCount: '~180 items',
  },
  {
    id: 'main-street',
    title: 'Main Street Mondays: Small-Town Wisconsin',
    description: 'A weekly primary source series featuring storefronts, civic events, and community life from Wisconsin\'s small towns and villages.',
    topic: 'Community History',
    period: '1880-1960',
    itemCount: '~240 items',
    series: 'Main Street Mondays',
  },
  {
    id: 'immigration',
    title: 'Immigration and Settlement in the Fox River Valley',
    description: 'Documents, portraits, and letters tracing the settlement of German, Polish, and Norwegian immigrants in central Wisconsin.',
    topic: 'Immigration',
    period: '1845-1920',
    itemCount: '~130 items',
  },
  {
    id: 'milwaukee-industry',
    title: "Milwaukee's Industrial Heritage",
    description: 'Factory photographs, labor union records, and worker portraits capturing Milwaukee\'s role as a manufacturing center.',
    topic: 'Labor / Industry',
    period: '1880-1950',
    itemCount: '~210 items',
  },
  {
    id: 'civil-war',
    title: 'Wisconsin\'s Civil War Soldiers',
    description: 'Portraits, muster rolls, and letters from Wisconsin men and women who served during the Civil War.',
    topic: 'Military History',
    period: '1861-1865',
    itemCount: '~95 items',
  },
  {
    id: 'great-lakes',
    title: 'Life on the Great Lakes: Fishing Communities',
    description: 'Images and oral histories from commercial fishing families on Lake Michigan and Lake Superior shores.',
    topic: 'Maritime / Environment',
    period: '1870-1940',
    itemCount: '~115 items',
  },
  {
    id: 'logging',
    title: 'The Logging Era in Northern Wisconsin',
    description: 'Dramatic photographs and camp records documenting the lumber boom that shaped the north woods landscape and economy.',
    topic: 'Industry / Environment',
    period: '1860-1910',
    itemCount: '~165 items',
  },
  {
    id: 'suffrage',
    title: 'Wisconsin Women and the Vote',
    description: 'Photographs, pamphlets, and newspaper clippings documenting Wisconsin\'s suffrage movement and women\'s civic participation.',
    topic: 'Women\'s History',
    period: '1880-1920',
    itemCount: '~80 items',
  },
];

export function OnlineExhibits() {
  return (
    <>
      <Breadcrumb items={[
        { label: 'For Educators', href: '/for-educators' },
        { label: 'Featured Series' },
      ]} />

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="font-display text-2xl md:text-3xl text-neutral-900 mb-3">Online Exhibits</h1>
            <p className="text-base text-neutral-600 leading-relaxed">
              Curated, visual-first exhibits on Wisconsin history. Each exhibit brings together photographs, documents, and context around a single theme. A good starting point when you want images fast.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibits grid */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-6">
              {EXHIBITS.length} exhibits available
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EXHIBITS.map((exhibit) => (
                <div
                  key={exhibit.id}
                  className="border border-neutral-200 bg-white flex flex-col hover:shadow-md hover:border-neutral-400 transition-all"
                >
                  <div className="h-36 bg-gradient-to-br from-[var(--primary-light)] to-[var(--accent-sage-light)] border-b border-neutral-200 flex items-end justify-start flex-shrink-0 p-4">
                    <p className="text-xs font-mono text-[var(--primary)] uppercase tracking-wider">Featured Exhibit</p>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    {exhibit.series && (
                      <p className="text-xs font-mono text-neutral-400 uppercase tracking-wide mb-2">{exhibit.series}</p>
                    )}
                    <h3 className="font-display text-base text-neutral-900 mb-2 leading-snug">{exhibit.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed flex-1">{exhibit.description}</p>

                    <div className="flex items-center gap-2 flex-wrap mt-3">
                      <span className="text-xs font-mono text-neutral-500 border border-neutral-200 px-1.5 py-0.5 bg-neutral-50">
                        {exhibit.topic}
                      </span>
                      <span className="text-xs text-neutral-400">{exhibit.period}</span>
                      <span className="text-xs text-neutral-400">{exhibit.itemCount}</span>
                    </div>

                    <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <Link to="/explore" className="inline-flex items-center gap-1.5 text-sm text-neutral-700 hover:text-neutral-900 hover:underline transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Open exhibit
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bridge callout */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto border border-neutral-300 bg-white p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 border border-neutral-200 bg-neutral-50 flex items-center justify-center flex-shrink-0">
              <Search className="w-5 h-5 text-neutral-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-800">Want more images on a specific topic?</p>
              <p className="text-sm text-neutral-500 mt-0.5">
                Exhibits show curated selections. Search starters give you quick links into the full collection.
              </p>
            </div>
            <Link
              to="/for-educators/search-starters"
              className="flex-shrink-0 bg-neutral-900 text-white px-5 py-2.5 text-sm hover:bg-neutral-700 transition-colors whitespace-nowrap"
            >
              Search Starters
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
