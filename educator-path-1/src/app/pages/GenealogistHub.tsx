import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { Search, ArrowRight } from 'lucide-react';

export function GenealogistHub() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/genealogists/search?q=${encodeURIComponent(query)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <>
      <Breadcrumb items={[{ label: 'Genealogists' }]} />

      {/* Hero / Search */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3 text-center">For Genealogists and Family Researchers</p>
            <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-4 text-center">
              Search Wisconsin's Historical Records
            </h1>
            <p className="text-base text-neutral-600 text-center mb-8 leading-relaxed">
              Photographs, documents, newspapers, and community records from libraries and historical societies across the state.
            </p>

            {/* Search input */}
            <div className="border border-neutral-400 bg-white p-2 flex items-center gap-2 shadow-sm mb-3">
              <Search className="w-5 h-5 text-neutral-400 ml-2 flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Try: last name + place (e.g., Coffin Platteville)"
                className="flex-1 text-sm text-neutral-800 bg-transparent outline-none px-2 py-2 placeholder:text-neutral-400"
                aria-label="Search genealogy records"
              />
              <button
                onClick={handleSearch}
                className="border border-neutral-800 bg-neutral-900 text-white px-5 md:px-7 py-2 text-sm hover:bg-neutral-700 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900 whitespace-nowrap"
              >
                Search
              </button>
            </div>
            <p className="text-xs text-neutral-400 text-center font-mono">
              Searches across Wisconsin digital collections via the RW portal
            </p>
          </div>
        </div>
      </section>

      {/* Tips for Searching */}
      <section className="py-10 md:py-14 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-xl text-neutral-900 mb-6">Tips for Genealogy Searches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  tip: 'Use surname + place',
                  detail: 'Try "Schmidt Milwaukee" or "Larsen Stoughton" rather than a surname alone. Specificity helps narrow results.',
                },
                {
                  tip: 'Try alternate spellings',
                  detail: 'Names were often anglicized or recorded phonetically. Try Schmid, Shmidt, and Schmidt; Larson and Larsen.',
                },
                {
                  tip: 'County works better than city',
                  detail: 'Records are often cataloged at the county level. Try "Fond du Lac County" if "Fond du Lac" returns nothing.',
                },
                {
                  tip: 'Zero results is normal',
                  detail: 'This is a curated archive -- not every family or record is represented. Try fewer terms or a broader place.',
                },
                {
                  tip: 'Try a time period',
                  detail: 'Adding a decade (e.g., "Kowalski Milwaukee 1920s") can help when names are common.',
                },
                {
                  tip: 'Records vary by institution',
                  detail: 'Different partner institutions hold different record types. Try your result set with "photograph," "document," or "newspaper."',
                },
              ].map((item, i) => (
                <div key={i} className="border border-neutral-200 bg-neutral-50 p-4">
                  <p className="text-sm font-medium text-neutral-800 mb-1">{item.tip}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you might find */}
      <section className="py-10 bg-neutral-50 border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-xl text-neutral-900 mb-2">What you might find</h2>
            <p className="text-sm text-neutral-500 mb-6">
              Holdings vary by contributing institution. Common record types available through RW partner collections:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                'Portraits and family photographs',
                'Newspaper articles',
                'Immigration and naturalization documents',
                'County history books',
                'Church and parish records',
                'School records and yearbooks',
                'Land deeds and maps',
                'Business directories',
              ].map((item, i) => (
                <div key={i} className="border border-neutral-200 bg-white p-3 text-center">
                  <p className="text-xs text-neutral-600 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Go to advanced search */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-neutral-700">Ready to search with filters for place and date range?</p>
              <p className="text-xs text-neutral-400 mt-0.5">Advanced search lets you narrow by year, collection type, and more.</p>
            </div>
            <button
              onClick={() => navigate('/genealogists/search')}
              className="flex-shrink-0 bg-neutral-900 text-white px-5 py-2.5 text-sm hover:bg-neutral-700 transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              Advanced Search <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
