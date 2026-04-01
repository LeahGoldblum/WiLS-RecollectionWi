import { useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { Search, ChevronDown, Lightbulb, AlertCircle } from 'lucide-react';

const counties = [
  'All Counties',
  'Adams', 'Ashland', 'Barron', 'Bayfield', 'Brown', 'Buffalo', 'Burnett', 'Calumet',
  'Chippewa', 'Clark', 'Columbia', 'Crawford', 'Dane', 'Dodge', 'Door', 'Douglas',
  'Dunn', 'Eau Claire', 'Florence', 'Fond du Lac', 'Forest', 'Grant', 'Green',
  'Green Lake', 'Iowa', 'Iron', 'Jackson', 'Jefferson', 'Juneau', 'Kenosha', 'Kewaunee',
  'La Crosse', 'Lafayette', 'Langlade', 'Lincoln', 'Manitowoc', 'Marathon', 'Marinette',
  'Marquette', 'Menominee', 'Milwaukee', 'Monroe', 'Oconto', 'Oneida', 'Outagamie',
  'Ozaukee', 'Pepin', 'Pierce', 'Polk', 'Portage', 'Price', 'Racine', 'Richland',
  'Rock', 'Rusk', 'St. Croix', 'Sauk', 'Sawyer', 'Shawano', 'Sheboygan', 'Taylor',
  'Trempealeau', 'Vernon', 'Vilas', 'Walworth', 'Washburn', 'Washington', 'Waukesha',
  'Waupaca', 'Waushara', 'Winnebago', 'Wood',
];

const recordTypes = [
  'All Types',
  'Vital Records',
  'Cemetery Records',
  'Church Records',
  'City Directories',
  'County Histories',
  'Immigration Records',
  'Land & Property Records',
  'Military Records',
  'Newspaper Articles',
  'Obituaries',
  'Photographs',
  'School Records',
];

const timePeriods = ['All Periods', 'Before 1850', '1850-1899', '1900-1949', '1950-Present'];

const searchTips = [
  'Try variant spellings of surnames (e.g., Schmidt/Smith, Mueller/Miller).',
  'Use just a surname without a first name for broader results.',
  'Combine a family name with a specific place (county, town, or community).',
  'Search for locations where your ancestors lived, worked, or owned property.',
];

export function GenealogistSearch() {
  const [searchParams] = useSearchParams();
  const [surname, setSurname] = useState(searchParams.get('q') || '');
  const [givenName, setGivenName] = useState('');
  const [place, setPlace] = useState('');
  const [county, setCounty] = useState('All Counties');
  const [recordType, setRecordType] = useState('All Types');
  const [timePeriod, setTimePeriod] = useState('All Periods');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Breadcrumb items={[{ label: 'Genealogists', href: '/genealogists' }, { label: 'Search Records' }]} />

      <section className="border-b border-[var(--card-border)] py-10 md:py-12 bg-[var(--muted)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-3">Search by Surname + Place</p>
            <h1 className="font-display text-3xl md:text-4xl text-[var(--primary)] mb-4">Find family history records</h1>
            <p className="text-base text-[var(--foreground)] mb-0">
              Start with a surname, given name, or place. Narrow your search using county, record type, and time period filters.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--card-border)] bg-white py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="border border-[var(--card-border)] bg-[var(--muted)] rounded-lg p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="surname" className="block font-mono text-xs uppercase tracking-widest text-[var(--foreground)] mb-2">
                      Surname (Last Name) *
                    </label>
                    <input
                      type="text"
                      id="surname"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      placeholder="e.g., Johnson, Kowalski, O'Brien"
                      className="w-full px-4 py-3 border border-[var(--card-border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent-sage)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="givenName" className="block font-mono text-xs uppercase tracking-widest text-[var(--foreground)] mb-2">
                      Given Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="givenName"
                      value={givenName}
                      onChange={(e) => setGivenName(e.target.value)}
                      placeholder="e.g., John, Mary, William"
                      className="w-full px-4 py-3 border border-[var(--card-border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent-sage)]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="place" className="block font-mono text-xs uppercase tracking-widest text-[var(--foreground)] mb-2">
                      Place, Community, or Address (Optional)
                    </label>
                    <input
                      type="text"
                      id="place"
                      value={place}
                      onChange={(e) => setPlace(e.target.value)}
                      placeholder="e.g., Madison, Norwegian Grove, 123 Main Street"
                      className="w-full px-4 py-3 border border-[var(--card-border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent-sage)]"
                    />
                    <p className="text-sm text-[var(--muted-foreground)] mt-2">
                      Include town name, community name, street address, or other location details.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-3">Refine your search (optional)</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="relative">
                    <label htmlFor="county" className="block font-mono text-xs text-[var(--muted-foreground)] mb-1.5">
                      County
                    </label>
                    <select
                      id="county"
                      value={county}
                      onChange={(e) => setCounty(e.target.value)}
                      className="appearance-none w-full border border-[var(--card-border)] rounded-lg bg-white pl-3 pr-8 py-2.5 font-mono text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent-sage)] cursor-pointer"
                    >
                      {counties.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-8 w-4 h-4 text-[var(--muted-foreground)] pointer-events-none" />
                  </div>

                  <div className="relative">
                    <label htmlFor="recordType" className="block font-mono text-xs text-[var(--muted-foreground)] mb-1.5">
                      Record Type
                    </label>
                    <select
                      id="recordType"
                      value={recordType}
                      onChange={(e) => setRecordType(e.target.value)}
                      className="appearance-none w-full border border-[var(--card-border)] rounded-lg bg-white pl-3 pr-8 py-2.5 font-mono text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent-sage)] cursor-pointer"
                    >
                      {recordTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-8 w-4 h-4 text-[var(--muted-foreground)] pointer-events-none" />
                  </div>

                  <div className="relative">
                    <label htmlFor="timePeriod" className="block font-mono text-xs text-[var(--muted-foreground)] mb-1.5">
                      Time Period
                    </label>
                    <select
                      id="timePeriod"
                      value={timePeriod}
                      onChange={(e) => setTimePeriod(e.target.value)}
                      className="appearance-none w-full border border-[var(--card-border)] rounded-lg bg-white pl-3 pr-8 py-2.5 font-mono text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent-sage)] cursor-pointer"
                    >
                      {timePeriods.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-8 w-4 h-4 text-[var(--muted-foreground)] pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={!surname}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-mono text-sm text-white bg-[var(--accent-sage)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
                >
                  <Search className="w-4 h-4" />
                  Search records
                </button>
                <Link to="/genealogists/map" className="font-mono text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:underline">
                  Or explore by map →
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--card-border)] py-10 md:py-12 bg-[var(--muted)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-5 h-5 text-[var(--accent-warm)]" />
              <h2 className="font-display text-xl text-[var(--primary)]">Tips for Better Results</h2>
            </div>
            <div className="bg-white border border-[var(--card-border)] rounded-lg p-6 space-y-3">
              {searchTips.map((tip) => (
                <div key={tip} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--muted-foreground)] mt-2" />
                  <p className="text-sm text-[var(--foreground)] leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--card-border)] bg-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-[var(--muted)] border border-[var(--card-border)] rounded-lg p-5">
              <AlertCircle className="w-5 h-5 text-[var(--muted-foreground)] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-[var(--foreground)] leading-relaxed mb-2">
                  <strong>What happens after you search?</strong> Your search will connect you to the existing Recollection Wisconsin collections interface, where you can view, filter, and download matching records.
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  For best results, contact the contributing institution directly if you need research assistance or access to materials not yet digitized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
