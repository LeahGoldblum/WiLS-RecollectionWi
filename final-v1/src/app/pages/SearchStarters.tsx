import { useState } from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { MapPin, Tag, ExternalLink, BookOpen } from 'lucide-react';

interface Starter {
  label: string;
  description: string;
  query: string;
}

const BY_PLACE: Starter[] = [
  { label: 'Milwaukee', description: 'Photographs, maps, and documents from Wisconsin\'s largest city.', query: 'milwaukee' },
  { label: 'Madison', description: 'State capital and university city -- civic, political, and student life.', query: 'madison' },
  { label: 'Green Bay', description: 'Packing industry, Great Lakes commerce, and community history.', query: 'green bay' },
  { label: 'La Crosse', description: 'Mississippi River port city with strong immigrant community records.', query: 'la crosse' },
  { label: 'Bayfield / Apostle Islands', description: 'Fishing, shipping, and Ojibwe community records from Lake Superior.', query: 'bayfield apostle islands' },
  { label: 'Kenosha / Racine', description: 'Manufacturing communities along the Lake Michigan lakeshore.', query: 'kenosha racine' },
  { label: 'Ashland County', description: 'Logging, iron mining, and Northern Wisconsin Native communities.', query: 'ashland county' },
  { label: 'Waukesha County', description: 'Health resorts, quarry towns, and suburban development west of Milwaukee.', query: 'waukesha county' },
  { label: 'Door Peninsula', description: 'Fishing villages, orchards, and Scandinavian settlement.', query: 'door peninsula' },
  { label: 'Fox River Valley', description: 'Paper mills, immigrant settlement, and industrial landscape.', query: 'fox river valley appleton' },
];

const BY_TOPIC: Starter[] = [
  { label: 'Wisconsin Statehood (1848)', description: 'Territorial records, early settlement, and statehood celebrations.', query: 'wisconsin statehood 1848' },
  { label: 'The Logging Era (1860-1910)', description: 'Lumber camps, river drives, and the north woods timber boom.', query: 'logging wisconsin lumber' },
  { label: 'Immigration and Settlement', description: 'German, Scandinavian, Polish, and other immigrant communities.', query: 'immigration settlement wisconsin' },
  { label: 'Civil Rights in Wisconsin', description: 'NAACP activity, fair housing movement, and civil rights organizing.', query: 'civil rights wisconsin' },
  { label: 'Labor Movement in Milwaukee', description: 'Union organizing, strikes, and workers\' lives in industrial Milwaukee.', query: 'labor movement milwaukee union' },
  { label: 'World War II Home Front', description: 'War industry, rationing, military service, and community impact.', query: 'world war II wisconsin home front' },
  { label: 'Native Nations of Wisconsin', description: 'Ho-Chunk, Ojibwe, Menominee, and other tribal histories.', query: 'native nations ojibwe wisconsin' },
  { label: 'Wisconsin Suffrage Movement', description: 'Women\'s voting rights organizing and civic participation.', query: 'suffrage women wisconsin vote' },
  { label: 'The Dairy Industry', description: 'Farm life, cheese production, and agricultural cooperatives.', query: 'dairy farming wisconsin cheese' },
  { label: 'Mining in Wisconsin', description: 'Lead, iron, and copper mining communities from the 1800s.', query: 'mining lead iron wisconsin' },
];

function StarterRow({ starter, onActivate, active }: { starter: Starter; onActivate: () => void; active: boolean }) {
  return (
    <button
      type="button"
      onClick={onActivate}
      className={`w-full text-left flex items-start gap-4 px-6 py-5 border-2 rounded-lg transition-all ${
        active 
          ? 'border-[var(--primary)] bg-[var(--primary-light)] shadow-md' 
          : 'border-[var(--card-border)] hover:border-[var(--primary)] hover:bg-[var(--muted)] hover:shadow-sm'
      }`}
    >
      <ExternalLink className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
        active ? 'text-[var(--primary)]' : 'text-[var(--muted-foreground)]'
      }`} />
      <div className="flex-1 min-w-0">
        <p className={`text-base font-medium mb-1 ${active ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'}`}>
          {starter.label}
        </p>
        <p className="text-sm text-[var(--muted-foreground)]">{starter.description}</p>
      </div>
      {active && (
        <span className="text-xs font-semibold text-[var(--primary)] bg-[var(--primary-light)] px-3 py-1.5 rounded-full flex-shrink-0">
          Selected
        </span>
      )}
    </button>
  );
}

export function SearchStarters() {
  const [activeQuery, setActiveQuery] = useState<string | null>(null);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  const handleSelect = (starter: Starter) => {
    setActiveQuery(starter.query);
    setActiveLabel(starter.label);
  };

  return (
    <>
      <Breadcrumb items={[
        { label: 'For Educators', href: '/for-educators' },
        { label: 'Search Starters' },
      ]} />

      {/* Hero */}
      <section className="border-b border-[var(--card-border)] bg-gradient-to-br from-[var(--accent-warm-light)] via-white to-[var(--primary-light)] py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-[var(--accent-warm)] text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              For Educators
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-[var(--primary)] mb-5 leading-tight">Search Starters</h1>
            <p className="text-lg md:text-xl text-[var(--foreground)] leading-relaxed">
              Quick links to help you surface images fast. These pre-built searches help you jump into the larger collection without needing to browse full collections or rely on subject tags.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-14">

            {/* Selected query state */}
            {activeQuery && (
              <div className="border-2 border-[var(--primary)] bg-[var(--primary)] text-white rounded-lg p-6 shadow-lg">
                <p className="text-xs font-semibold text-white/60 uppercase tracking-wide mb-3">Search preview</p>
                <p className="text-base text-white mb-3">
                  A live implementation would open:{' '}
                  <code className="text-white bg-white/20 px-2 py-1 rounded text-sm">
                    recollectionwisconsin.org/search?q={encodeURIComponent(activeQuery)}
                  </code>
                </p>
                <p className="text-sm text-white/80">Topic selected: <strong className="text-white">{activeLabel}</strong></p>
                <button
                  onClick={() => { setActiveQuery(null); setActiveLabel(null); }}
                  className="mt-4 text-sm font-medium text-white hover:text-white/80 underline transition-colors"
                >
                  Clear selection
                </button>
              </div>
            )}

            {/* By Place */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-sage-light)] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--accent-sage)]" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-[var(--primary)]">Search by Place</h2>
              </div>
              <p className="text-base text-[var(--muted-foreground)] mb-8">
                Find images, documents, and records from specific Wisconsin cities, counties, and regions.
              </p>
              <div className="space-y-3">
                {BY_PLACE.map((starter) => (
                  <StarterRow
                    key={starter.query}
                    starter={starter}
                    onActivate={() => handleSelect(starter)}
                    active={activeQuery === starter.query}
                  />
                ))}
              </div>
            </div>

            {/* By Topic/Era */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-warm-light)] flex items-center justify-center">
                  <Tag className="w-5 h-5 text-[var(--accent-warm)]" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-[var(--primary)]">Search by Topic or Era</h2>
              </div>
              <p className="text-base text-[var(--muted-foreground)] mb-8">
                Jump directly into the collection by historical theme. Good for standards-aligned units.
              </p>
              <div className="space-y-3">
                {BY_TOPIC.map((starter) => (
                  <StarterRow
                    key={starter.query}
                    starter={starter}
                    onActivate={() => handleSelect(starter)}
                    active={activeQuery === starter.query}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bridge to exhibits */}
      <section className="border-t border-[var(--card-border)] bg-[var(--muted)] py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto border-2 border-[var(--primary)] bg-white rounded-lg p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-lg">
            <div className="w-14 h-14 rounded-lg bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-7 h-7 text-[var(--primary)]" />
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-[var(--primary)] mb-2">Want a more guided introduction?</p>
              <p className="text-sm text-[var(--muted-foreground)]">
                Online exhibits provide curated context and visual framing around each topic.
              </p>
            </div>
            <Link
              to="/for-educators/featured-series"
              className="flex-shrink-0 bg-[var(--primary)] text-white px-7 py-3 rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-all hover:shadow-md whitespace-nowrap"
            >
              Browse Exhibits
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
