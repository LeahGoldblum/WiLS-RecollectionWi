import { FormEvent, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';

type MockResult = {
  title: string;
  location: string;
  date: string;
  type: string;
};

const baseResults: MockResult[] = [
  { title: 'Family Portrait Outside General Store', location: 'Platteville, Grant County', date: '1912', type: 'Photograph' },
  { title: 'Baptism Register Excerpt', location: 'Dodgeville, Iowa County', date: '1889', type: 'Church Record' },
  { title: 'County Marriage Ledger', location: 'Green Bay, Brown County', date: '1904', type: 'Ledger' },
  { title: 'Farmstead Tax Roll', location: 'Monroe, Green County', date: '1898', type: 'Government Record' },
  { title: 'City Directory Snippet', location: 'Milwaukee, Milwaukee County', date: '1921', type: 'Directory' },
  { title: 'Cemetery Plot Card', location: 'Baraboo, Sauk County', date: '1937', type: 'Cemetery Record' },
  { title: 'Obituary Clipping Collection', location: 'Appleton, Outagamie County', date: '1915', type: 'Newspaper' },
  { title: 'School Enrollment Register', location: 'Eau Claire, Eau Claire County', date: '1909', type: 'School Record' },
];

export function GenealogistsSearch() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialQuery = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initialQuery);
  const [place, setPlace] = useState('');
  const [yearStart, setYearStart] = useState('');
  const [yearEnd, setYearEnd] = useState('');

  const normalizedQuery = initialQuery.trim().toLowerCase();
  const isNoResultsDemo = normalizedQuery === 'salmon mineral point';
  const hasValidQuery = initialQuery.trim().length >= 3;
  const showResults = hasValidQuery && !isNoResultsDemo;

  const results = useMemo(() => {
    if (!showResults) return [];

    return baseResults.filter(item => {
      const placeMatches = place
        ? item.location.toLowerCase().includes(place.trim().toLowerCase())
        : true;

      const year = Number(item.date);
      const startMatches = yearStart ? year >= Number(yearStart) : true;
      const endMatches = yearEnd ? year <= Number(yearEnd) : true;

      return placeMatches && startMatches && endMatches;
    });
  }, [endMatches, place, showResults, startMatches, yearEnd, yearStart]);

  function handleSearch(event: FormEvent) {
    event.preventDefault();
    navigate(`/genealogists/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <>
      <Breadcrumb items={[{ label: 'Genealogists', href: '/genealogists' }, { label: 'Search' }]} />

      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-3">Genealogist Search</h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Search by surname + place, then narrow by location or date.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <form onSubmit={handleSearch} className="border border-neutral-200 bg-white p-5 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="md:col-span-2">
                <label htmlFor="q" className="block text-sm font-medium text-neutral-800 mb-1.5">Search query</label>
                <input
                  id="q"
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Surname + place"
                  className="w-full border border-neutral-300 px-3 py-2.5 text-sm text-neutral-800 bg-white placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-800"
                />
              </div>

              <div>
                <label htmlFor="place" className="block text-sm font-medium text-neutral-800 mb-1.5">Place (optional)</label>
                <input
                  id="place"
                  value={place}
                  onChange={event => setPlace(event.target.value)}
                  placeholder="County or town"
                  className="w-full border border-neutral-300 px-3 py-2.5 text-sm text-neutral-800 bg-white placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-800"
                />
              </div>

              <div>
                <label htmlFor="year-start" className="block text-sm font-medium text-neutral-800 mb-1.5">Year range (optional)</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    id="year-start"
                    value={yearStart}
                    onChange={event => setYearStart(event.target.value)}
                    placeholder="From"
                    className="w-full border border-neutral-300 px-3 py-2.5 text-sm text-neutral-800 bg-white placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-800"
                  />
                  <input
                    value={yearEnd}
                    onChange={event => setYearEnd(event.target.value)}
                    placeholder="To"
                    className="w-full border border-neutral-300 px-3 py-2.5 text-sm text-neutral-800 bg-white placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-800"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 bg-neutral-900 text-white px-5 py-2.5 text-sm hover:bg-neutral-700 transition-colors"
            >
              Search
            </button>
          </form>

          {showResults ? (
            results.length > 0 ? (
              <div className="border border-neutral-200 bg-neutral-50 p-5">
                <h2 className="font-display text-xl text-neutral-900 mb-1">Results</h2>
                <p className="text-sm text-neutral-500 mb-4">Showing {results.length} mock items for "{initialQuery}".</p>
                <div className="space-y-3">
                  {results.map(item => (
                    <article key={item.title} className="border border-neutral-200 bg-white p-4">
                      <h3 className="text-sm text-neutral-900 mb-1">{item.title}</h3>
                      <p className="text-xs text-neutral-600">Location: {item.location}</p>
                      <p className="text-xs text-neutral-600">Date: {item.date}</p>
                      <p className="text-xs text-neutral-600">Type: {item.type}</p>
                    </article>
                  ))}
                </div>
              </div>
            ) : (
              <div className="border border-neutral-200 bg-neutral-50 p-5">
                <h2 className="font-display text-xl text-neutral-900 mb-2">No results found</h2>
                <ul className="space-y-1 text-sm text-neutral-600">
                  <li>Remove one term and search again.</li>
                  <li>Try county instead of city.</li>
                  <li>Expand your year range.</li>
                </ul>
              </div>
            )
          ) : (
            <div className="border border-neutral-200 bg-neutral-50 p-5">
              <h2 className="font-display text-xl text-neutral-900 mb-2">No results found</h2>
              <ul className="space-y-1 text-sm text-neutral-600">
                <li>Try surname + town/county.</li>
                <li>Try alternate spellings of surnames.</li>
                <li>Use fewer terms if your query is too narrow.</li>
                <li>The demo query "salmon mineral point" intentionally returns no results.</li>
              </ul>
            </div>
          )}

          <div className="mt-6">
            <Link to="/genealogists" className="text-sm text-neutral-700 hover:underline">
              ← Back to Genealogists
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
