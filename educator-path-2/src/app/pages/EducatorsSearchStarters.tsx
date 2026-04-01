import { Link, useSearchParams } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';

const placeStarters = [
  'Waukesha Main Street',
  'Appleton Civil Rights',
  'Mineral Point',
  'Green Bay Harbor',
  'La Crosse Riverfront',
  'Madison Campus History',
];

const topicStarters = [
  'Early Statehood',
  'Logging',
  'Immigration',
  'Civil Rights in Wisconsin',
  'Rural Education',
  'Industrial Labor',
];

function mockResults(query: string) {
  return [
    { title: `${query}: Photo Collection`, type: 'Image Set' },
    { title: `${query}: Classroom Exhibit`, type: 'Exhibit' },
    { title: `${query}: Historic Maps`, type: 'Map' },
    { title: `${query}: Timeline Snapshot`, type: 'Teaching Set' },
    { title: `${query}: Main Street Mondays`, type: 'Series' },
    { title: `${query}: Search Expansion`, type: 'Starter Pack' },
  ];
}

function QueryLink({ value }: { value: string }) {
  return (
    <Link
      to={`/educators/search-starters?q=${encodeURIComponent(value)}`}
      className="block border border-neutral-200 px-3 py-2.5 text-sm text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 transition-colors"
    >
      {value}
    </Link>
  );
}

export function EducatorsSearchStarters() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.trim() || '';
  const results = query ? mockResults(query) : [];

  return (
    <>
      <Breadcrumb items={[{ label: 'Educators', href: '/educators' }, { label: 'Search Starters' }]} />

      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-3">Search Starters</h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Quick links to help you surface images fast.
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            These links help you jump into the larger collection without needing to browse full collections.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="border border-neutral-200 p-5 bg-white">
              <h2 className="font-display text-xl text-neutral-900 mb-3">Search by Place</h2>
              <div className="space-y-2">
                {placeStarters.map(starter => (
                  <QueryLink key={starter} value={starter} />
                ))}
              </div>
            </div>

            <div className="border border-neutral-200 p-5 bg-white">
              <h2 className="font-display text-xl text-neutral-900 mb-3">Search by Topic / Era</h2>
              <div className="space-y-2">
                {topicStarters.map(starter => (
                  <QueryLink key={starter} value={starter} />
                ))}
              </div>
            </div>
          </div>

          {query && (
            <div className="border border-neutral-200 bg-neutral-50 p-5">
              <h3 className="font-display text-lg text-neutral-900 mb-1">Results for "{query}"</h3>
              <p className="text-sm text-neutral-500 mb-4">Mock results for wireframe testing.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {results.map(result => (
                  <div key={result.title} className="border border-neutral-200 bg-white p-3">
                    <p className="text-sm text-neutral-800 mb-1">{result.title}</p>
                    <p className="text-xs text-neutral-500 mb-2">{result.type}</p>
                    <button type="button" className="text-xs text-neutral-700 hover:underline">
                      Open
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
