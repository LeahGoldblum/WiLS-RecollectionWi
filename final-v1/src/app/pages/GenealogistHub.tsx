import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArrowRight, Search, Map, FileText, BookOpen, Users, Lightbulb } from 'lucide-react';

const researchTips = [
  {
    title: 'Start with what you know',
    description: 'Begin with family names, dates, and places you already have. Work backward from the known to the unknown.',
  },
  {
    title: 'Use county records',
    description: 'County-level records often contain vital statistics, land deeds, and court documents useful for family history.',
  },
  {
    title: 'Check multiple spellings',
    description: 'Surnames were often spelled inconsistently. Try variant spellings when searching.',
  },
  {
    title: 'Connect with local societies',
    description: 'Wisconsin historical societies hold unique records not found elsewhere. Contact them directly for deeper research.',
  },
];

const exampleQueries = [
  'Smith + Milwaukee',
  'Johnson family + Dane County',
  'Norwegian settlers + La Crosse',
  'Civil War veterans + Rock County',
];

export function GenealogistHub() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Genealogists' }]} />

      <section className="border-b border-[var(--card-border)] bg-[var(--primary)] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest mb-3 text-[var(--accent-warm-light)]">Family History &amp; Local Research</p>
            <h1 className="font-display text-3xl md:text-4xl text-white mb-4">
              Discover your Wisconsin roots through historical records and local collections.
            </h1>
            <p className="text-neutral-200 text-base mb-6 max-w-2xl">
              Recollection Wisconsin connects you to family history materials held by historical societies, libraries, and archives across the state. Search by surname and place, or explore collections geographically.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--card-border)] bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl text-[var(--primary)] mb-3">Two Ways to Begin Your Research</h2>
              <p className="text-base text-[var(--muted-foreground)]">Choose the approach that matches your research needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/genealogists/search"
                className="group border border-[var(--card-border)] bg-[var(--muted)] rounded-lg p-8 hover:shadow-lg hover:border-[var(--accent-sage)] hover:bg-white transition-all"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-[var(--accent-sage)]">
                  <Search className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl text-[var(--primary)] mb-3 group-hover:text-[var(--accent-sage)] transition-colors">
                  Search by Surname + Place
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-5 leading-relaxed">
                  Start with specific names, family surnames, street addresses, or community names. Best when you have concrete details to search for.
                </p>
                <div className="font-mono text-xs text-[var(--muted-foreground)] mb-5 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--border-hover)]">•</span>
                    <span>Search by family name</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--border-hover)]">•</span>
                    <span>Narrow by county or community</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--border-hover)]">•</span>
                    <span>Find specific people or addresses</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 font-mono text-sm text-[var(--accent-sage)] group-hover:gap-3 transition-all">
                  Start searching <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                to="/genealogists/map"
                className="group border border-[var(--card-border)] bg-[var(--muted)] rounded-lg p-8 hover:shadow-lg hover:border-[var(--primary)] hover:bg-white transition-all"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-[var(--primary)]">
                  <Map className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl text-[var(--primary)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                  Explore by Map
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-5 leading-relaxed">
                  Browse collections by county, region, or content partner. Best when you&apos;re exploring a geographic area or discovering what records exist locally.
                </p>
                <div className="font-mono text-xs text-[var(--muted-foreground)] mb-5 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--border-hover)]">•</span>
                    <span>Browse by county or region</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--border-hover)]">•</span>
                    <span>Discover local historical societies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--border-hover)]">•</span>
                    <span>See what collections are available</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 font-mono text-sm text-[var(--primary)] group-hover:gap-3 transition-all">
                  Explore the map <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--card-border)] py-12 md:py-14 bg-[var(--muted)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl text-[var(--primary)] mb-8">What you can find here</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white border border-[var(--card-border)] rounded-lg p-6">
                <FileText className="w-6 h-6 text-[var(--muted-foreground)] mb-3" />
                <h3 className="font-display text-base text-[var(--primary)] mb-2">Vital Records</h3>
                <p className="text-sm text-[var(--muted-foreground)]">Birth, marriage, death, and cemetery records from county archives.</p>
              </div>
              <div className="bg-white border border-[var(--card-border)] rounded-lg p-6">
                <BookOpen className="w-6 h-6 text-[var(--muted-foreground)] mb-3" />
                <h3 className="font-display text-base text-[var(--primary)] mb-2">Local Histories</h3>
                <p className="text-sm text-[var(--muted-foreground)]">County histories, community annals, and family genealogies.</p>
              </div>
              <div className="bg-white border border-[var(--card-border)] rounded-lg p-6">
                <Users className="w-6 h-6 text-[var(--muted-foreground)] mb-3" />
                <h3 className="font-display text-base text-[var(--primary)] mb-2">Immigration Records</h3>
                <p className="text-sm text-[var(--muted-foreground)]">Naturalization papers, passenger lists, and settlement records.</p>
              </div>
              <div className="bg-white border border-[var(--card-border)] rounded-lg p-6">
                <Map className="w-6 h-6 text-[var(--muted-foreground)] mb-3" />
                <h3 className="font-display text-base text-[var(--primary)] mb-2">Land &amp; Property</h3>
                <p className="text-sm text-[var(--muted-foreground)]">Deeds, plat maps, tax records, and property transfers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--card-border)] bg-white py-12 md:py-14" id="tips">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-6 h-6 text-[var(--accent-warm)]" />
              <h2 className="font-display text-2xl text-[var(--primary)]">Research Tips</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {researchTips.map((tip) => (
                <div key={tip.title} className="border border-[var(--card-border)] bg-[var(--muted)] rounded-lg p-6">
                  <h3 className="font-display text-base text-[var(--primary)] mb-2">{tip.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-[var(--card-border)] bg-[var(--muted)] rounded-lg p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-3">Example Searches</p>
              <div className="flex flex-wrap gap-2">
                {exampleQueries.map((query) => (
                  <Link
                    key={query}
                    to={`/genealogists/search?q=${encodeURIComponent(query)}`}
                    className="border border-[var(--card-border)] bg-white px-4 py-2 rounded-lg font-mono text-xs text-[var(--foreground)] hover:border-[var(--accent-sage)] hover:bg-white transition-all"
                  >
                    {query}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--card-border)] py-10 md:py-12 bg-[var(--muted)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="w-8 h-1 mb-6 bg-[var(--accent-sage)]" />
            <h2 className="font-display text-2xl text-[var(--primary)] mb-4">About these collections</h2>
            <p className="text-sm text-[var(--foreground)] mb-4 leading-relaxed">
              Family history materials in Recollection Wisconsin come from county historical societies, public libraries, university archives, and local heritage organizations across the state. These partners hold unique records that may not be available through national genealogy databases.
            </p>
            <p className="text-sm text-[var(--foreground)] mb-6 leading-relaxed">
              While Recollection Wisconsin provides access to digitized materials, many partners hold additional records available only on-site. We encourage researchers to contact institutions directly for deeper inquiries.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/genealogists/search" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm text-white bg-[var(--accent-sage)] hover:opacity-90 transition-colors">
                Search records now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/genealogists/map" className="inline-flex items-center gap-2 border border-[var(--card-border)] bg-white px-5 py-2.5 rounded-lg font-mono text-sm text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors">
                Explore by map
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
