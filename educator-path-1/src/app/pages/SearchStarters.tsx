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
      className={`w-full text-left flex items-start gap-3 px-4 py-3 border transition-all ${
        active ? 'border-neutral-800 bg-neutral-50' : 'border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50'
      }`}
    >
      <ExternalLink className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-neutral-800">{starter.label}</p>
        <p className="text-xs text-neutral-500 mt-0.5">{starter.description}</p>
      </div>
      {active && (
        <span className="text-xs font-mono text-neutral-500 bg-neutral-100 px-1.5 py-0.5 border border-neutral-300 flex-shrink-0">
          selected
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
        { label: 'Educators', href: '/educators' },
        { label: 'Search Starters' },
      ]} />

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="font-display text-2xl md:text-3xl text-neutral-900 mb-3">Search Starters</h1>
            <p className="text-base text-neutral-600 leading-relaxed">
              Quick links to help you surface images fast. These pre-built searches help you jump into the larger collection without needing to browse full collections or rely on subject tags.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Selected query mock result */}
            {activeQuery && (
              <div className="border border-neutral-800 bg-neutral-900 text-white p-5">
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-wide mb-2">Wireframe mock: search launched</p>
                <p className="text-sm text-neutral-200">
                  A live implementation would open:{' '}
                  <code className="text-neutral-100 bg-neutral-700 px-1.5 py-0.5 text-xs">
                    recollectionwisconsin.org/search?q={encodeURIComponent(activeQuery)}
                  </code>
                </p>
                <p className="text-xs text-neutral-500 mt-2">Topic selected: <strong className="text-neutral-300">{activeLabel}</strong></p>
                <button
                  onClick={() => { setActiveQuery(null); setActiveLabel(null); }}
                  className="mt-3 text-xs font-mono text-neutral-400 hover:text-white underline transition-colors"
                >
                  Clear selection
                </button>
              </div>
            )}

            {/* By Place */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-neutral-600" />
                <h2 className="font-display text-xl text-neutral-900">Search by Place</h2>
              </div>
              <p className="text-sm text-neutral-500 mb-5">
                Find images, documents, and records from specific Wisconsin cities, counties, and regions.
              </p>
              <div className="space-y-2">
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
              <div className="flex items-center gap-2 mb-1">
                <Tag className="w-4 h-4 text-neutral-600" />
                <h2 className="font-display text-xl text-neutral-900">Search by Topic or Era</h2>
              </div>
              <p className="text-sm text-neutral-500 mb-5">
                Jump directly into the collection by historical theme. Good for standards-aligned units.
              </p>
              <div className="space-y-2">
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
      <section className="border-t border-neutral-200 bg-neutral-50 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto border border-neutral-300 bg-white p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center flex-shrink-0 bg-neutral-50">
              <BookOpen className="w-5 h-5 text-neutral-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-800">Want a more guided introduction?</p>
              <p className="text-sm text-neutral-500 mt-0.5">
                Online exhibits provide curated context and visual framing around each topic.
              </p>
            </div>
            <Link
              to="/educators/exhibits"
              className="flex-shrink-0 border border-neutral-400 text-neutral-700 px-5 py-2.5 text-sm hover:bg-neutral-100 transition-colors whitespace-nowrap"
            >
              Browse Exhibits
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
