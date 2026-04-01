import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { Search, Filter, X, ArrowLeft } from 'lucide-react';

interface MockResult {
  id: string;
  title: string;
  type: string;
  institution: string;
  location: string;
  date: string;
  description: string;
}

// Deterministic mock results keyed loosely by first token of query
const MOCK_RESULTS: Record<string, MockResult[]> = {
  default: [
    {
      id: '1',
      title: 'Wisconsin German Immigrant Portraits, 1880s',
      type: 'Photographs',
      institution: 'Milwaukee County Historical Society',
      location: 'Milwaukee County',
      date: '1880-1895',
      description: 'Studio portraits of German immigrant families, primarily from Milwaukee\'s Fifth Ward neighborhood.',
    },
    {
      id: '2',
      title: 'Washington County Birth Records Transcription',
      type: 'Document',
      institution: 'West Bend Public Library',
      location: 'Washington County',
      date: '1854-1910',
      description: 'Transcribed county register of birth records, indexed by surname.',
    },
    {
      id: '3',
      title: 'Waukesha County Obituaries, 1910-1930',
      type: 'Newspaper clippings',
      institution: 'Waukesha County Museum',
      location: 'Waukesha County',
      date: '1910-1930',
      description: 'Digitized newspaper obituaries from the Waukesha Freeman and Oconomowoc Enterprise.',
    },
    {
      id: '4',
      title: 'Norwegian Lutheran Church Records, Stoughton',
      type: 'Document',
      institution: 'Stoughton Historical Society',
      location: 'Dane County',
      date: '1870-1920',
      description: 'Membership, baptism, and burial records from First Norwegian Lutheran Church.',
    },
    {
      id: '5',
      title: 'Polk County Farm Directory, 1917',
      type: 'Directory',
      institution: 'Polk County Historical Society',
      location: 'Polk County',
      date: '1917',
      description: 'Township-by-township directory listing farm owners, acreage, and family size.',
    },
    {
      id: '6',
      title: 'Portage Polish Community Portraits',
      type: 'Photographs',
      institution: 'Portage County Public Library',
      location: 'Portage County',
      date: '1895-1925',
      description: 'Photographs of Polish immigrant families from the Stevens Point area.',
    },
  ],
  coffin: [
    {
      id: 'c1',
      title: 'Coffin Family of Grant County: Survey Records',
      type: 'Document',
      institution: 'Grant County Historical Society',
      location: 'Platteville, WI',
      date: '1845-1870',
      description: 'Land survey documents and homestead filings associated with the Coffin family of southwestern Wisconsin.',
    },
    {
      id: 'c2',
      title: 'Platteville Academy Enrollment Lists, 1855-1875',
      type: 'Document',
      institution: 'Platteville Historical Society',
      location: 'Grant County',
      date: '1855-1875',
      description: 'Student enrollment lists from the Platteville Academy, including surnames indexed alphabetically.',
    },
  ],
  schmidt: [
    {
      id: 's1',
      title: 'Schmidt Family Photographs, Milwaukee, 1890s',
      type: 'Photographs',
      institution: 'Milwaukee County Historical Society',
      location: 'Milwaukee',
      date: '1888-1902',
      description: 'Studio and documentary photographs of the Schmidt family, German immigrant brewers, Milwaukee.',
    },
    {
      id: 's2',
      title: 'St. Francis Xavier Parish Records (Milwaukee) 1870-1920',
      type: 'Church Records',
      institution: 'Milwaukee County Historical Society',
      location: 'Milwaukee County',
      date: '1870-1920',
      description: 'Baptism, confirmation, and burial records including numerous Schmidt, Schneider, and Schultz families.',
    },
    {
      id: 's3',
      title: 'Milwaukee City Directory Excerpt, 1900',
      type: 'Directory',
      institution: 'Milwaukee Public Library',
      location: 'Milwaukee',
      date: '1900',
      description: 'City directory listing of Milwaukee residents with occupations. Multiple Schmidt-surname entries.',
    },
  ],
  larsen: [
    {
      id: 'l1',
      title: 'Stoughton Norwegian Settler Portraits',
      type: 'Photographs',
      institution: 'Stoughton Historical Society',
      location: 'Stoughton, Dane County',
      date: '1875-1910',
      description: 'Family portraits from Stoughton\'s substantial Norwegian immigrant community, including Larsen, Larson, and Laursen variants.',
    },
  ],
};

function getResults(query: string): MockResult[] | null {
  if (!query.trim()) return null;
  const lower = query.toLowerCase();
  for (const key of Object.keys(MOCK_RESULTS)) {
    if (key !== 'default' && lower.includes(key)) {
      return MOCK_RESULTS[key];
    }
  }
  // Simulate no results for very specific obscure queries
  if (lower.length > 20 && !lower.includes('wi') && !lower.includes('wisconsin')) {
    return [];
  }
  return MOCK_RESULTS.default;
}

export function GenealogistSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('q') || '');
  const [place, setPlace] = useState('');
  const [yearFrom, setYearFrom] = useState('');
  const [yearTo, setYearTo] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const committedQuery = searchParams.get('q') || '';
  const results = committedQuery ? getResults(committedQuery) : null;

  useEffect(() => {
    setInputValue(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearch = () => {
    if (inputValue.trim()) {
      setSearchParams({ q: inputValue.trim() });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleClear = () => {
    setInputValue('');
    setSearchParams({});
  };

  return (
    <>
      <Breadcrumb items={[
        { label: 'Genealogists', href: '/genealogists' },
        { label: 'Search' },
      ]} />

      {/* Search header */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-2xl text-neutral-900 mb-4">Search Records</h1>

            {/* Main search bar */}
            <div className="border border-neutral-400 bg-white p-2 flex items-center gap-2 shadow-sm mb-3">
              <Search className="w-5 h-5 text-neutral-400 ml-2 flex-shrink-0" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Surname + place (e.g., Coffin Platteville)"
                className="flex-1 text-sm text-neutral-800 bg-transparent outline-none px-2 py-2 placeholder:text-neutral-400"
                aria-label="Search genealogy records"
              />
              {inputValue && (
                <button
                  onClick={handleClear}
                  className="p-1 text-neutral-400 hover:text-neutral-700 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={handleSearch}
                className="border border-neutral-800 bg-neutral-900 text-white px-5 py-2 text-sm hover:bg-neutral-700 transition-colors"
              >
                Search
              </button>
            </div>

            {/* Filters toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-800 transition-colors"
            >
              <Filter className="w-3.5 h-3.5" />
              {showFilters ? 'Hide filters' : 'Add filters (place, year range)'}
            </button>

            {showFilters && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-mono text-neutral-500 mb-1.5">Place (optional)</label>
                  <input
                    type="text"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    placeholder="e.g. Milwaukee, Dane County"
                    className="w-full border border-neutral-300 px-3 py-2 text-sm text-neutral-800 bg-white placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-500 mb-1.5">Year from</label>
                  <input
                    type="number"
                    value={yearFrom}
                    onChange={(e) => setYearFrom(e.target.value)}
                    placeholder="e.g. 1870"
                    min="1820"
                    max="1980"
                    className="w-full border border-neutral-300 px-3 py-2 text-sm text-neutral-800 bg-white placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-500 mb-1.5">Year to</label>
                  <input
                    type="number"
                    value={yearTo}
                    onChange={(e) => setYearTo(e.target.value)}
                    placeholder="e.g. 1920"
                    min="1820"
                    max="1980"
                    className="w-full border border-neutral-300 px-3 py-2 text-sm text-neutral-800 bg-white placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-800"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-10 bg-white min-h-64">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">

            {/* No query yet */}
            {!committedQuery && (
              <div className="text-center py-16">
                <Search className="w-10 h-10 text-neutral-300 mx-auto mb-4" />
                <p className="text-sm text-neutral-500">Enter a name and place above to start searching.</p>
                <p className="text-xs text-neutral-400 mt-1">Example: "Kowalski Stevens Point" or "Larsen Dane County"</p>
              </div>
            )}

            {/* Has results */}
            {results && results.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs font-mono text-neutral-400 uppercase tracking-wide">
                      {results.length} result{results.length !== 1 ? 's' : ''} for
                    </p>
                    <p className="text-base font-medium text-neutral-900 mt-0.5">"{committedQuery}"</p>
                  </div>
                  {(place || yearFrom || yearTo) && (
                    <p className="text-xs text-neutral-400 font-mono italic">Filters applied (wireframe)</p>
                  )}
                </div>
                <div className="space-y-4">
                  {results.map((result) => (
                    <div key={result.id} className="border border-neutral-200 bg-neutral-50 p-5 hover:border-neutral-400 hover:bg-white transition-all">
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-xs font-mono text-neutral-400 border border-neutral-200 px-1.5 py-0.5 bg-white">
                              {result.type}
                            </span>
                            <span className="text-xs text-neutral-400">{result.date}</span>
                          </div>
                          <p className="text-sm font-medium text-neutral-900 mb-1">{result.title}</p>
                          <p className="text-xs text-neutral-500 mb-2">{result.institution} &middot; {result.location}</p>
                          <p className="text-sm text-neutral-600 leading-relaxed">{result.description}</p>
                          <div className="mt-3">
                            <button className="text-xs text-neutral-500 hover:text-neutral-800 hover:underline transition-colors font-mono italic">
                              [View item -- external link stub]
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-neutral-400 font-mono mt-6 text-center italic">
                  [Wireframe: Results are mock data. A live implementation would query the RW/DPLA index.]
                </p>
              </div>
            )}

            {/* No results state */}
            {results && results.length === 0 && (
              <div className="border border-neutral-200 bg-neutral-50 p-8">
                <h2 className="font-display text-lg text-neutral-900 mb-2">No results found</h2>
                <p className="text-sm text-neutral-600 mb-6">
                  No records matched "{committedQuery}". This is common -- not all families or records are represented in the archive.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-neutral-800">Try these adjustments:</p>
                  <ul className="space-y-2">
                    {[
                      'Remove one term (try just the surname, or just the place)',
                      'Try a county name instead of a city name',
                      'Check alternate spellings of the surname',
                      'Expand the time period or remove the year filter',
                      'Search for a related community or neighboring town',
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                        <span className="text-neutral-300 mt-1 flex-shrink-0">&#9658;</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={handleClear}
                  className="mt-6 flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Start a new search
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Back to hub */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/genealogists"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900 hover:underline transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Genealogists hub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
