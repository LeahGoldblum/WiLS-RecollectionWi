import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { Search } from 'lucide-react';

export function GenealogistsHub() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate(`/genealogists/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <>
      <Breadcrumb items={[{ label: 'Genealogists' }]} />

      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-3">Genealogy / Family History</h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Start with a surname and place, then refine as needed.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <form onSubmit={handleSubmit} className="border border-neutral-200 p-5 bg-white mb-6">
            <label htmlFor="genealogy-search" className="block text-sm font-medium text-neutral-800 mb-2">
              Search
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                id="genealogy-search"
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Try last name + place (e.g., Coffin Platteville)"
                className="flex-1 border border-neutral-300 px-3 py-2.5 text-sm text-neutral-800 bg-white placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-800"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-5 py-2.5 text-sm hover:bg-neutral-700 transition-colors"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </form>

          <div className="border border-neutral-200 bg-neutral-50 p-5 mb-6">
            <h2 className="font-display text-lg text-neutral-900 mb-2">Search tips</h2>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>Use surname + town/county</li>
              <li>Try alternate spellings</li>
              <li>Try fewer terms if no results</li>
              <li>No results is common</li>
            </ul>
          </div>

          <Link to="/genealogists/search" className="text-sm text-neutral-700 hover:underline">
            Open search page →
          </Link>
        </div>
      </section>
    </>
  );
}
