import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { Map, BookOpen, Search, Zap, Clock, ArrowRight } from 'lucide-react';
import { resourceSets } from '../data/educatorResourceSets';

export function EducatorHub() {
  const readyRightNow = resourceSets.slice(0, 3);
  const browseTopics = [
    'Wisconsin Communities',
    'Indigenous History',
    'Immigration',
    'Industry & Labor',
    'Environment',
    'Government/Civics',
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'For Educators' }]} />

      {/* Hero */}
      <section className="border-b border-[var(--card-border)] bg-gradient-to-br from-[var(--accent-sage-light)] via-white to-[var(--primary-light)] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--accent-sage)] text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              <BookOpen className="w-4 h-4" />
              For Educators
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-[var(--primary)] mb-5 leading-tight">Teaching Resources</h1>
            <p className="text-lg md:text-xl text-[var(--foreground)] leading-relaxed mb-3">
              Use primary sources to support Wisconsin history instruction.
            </p>
            <p className="text-sm text-[var(--muted-foreground)]">
              Curated images, maps, and documents from libraries and archives across the state.
            </p>
          </div>
        </div>
      </section>

      {/* Primary entry cards -- above fold */}
      <section className="py-16 bg-white border-b border-[var(--card-border)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold text-[var(--accent-sage)] uppercase tracking-wider mb-2">
                Where would you like to start?
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-[var(--primary)]">
                Explore Teaching Resources
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Map */}
              <Link
                to="/for-educators/explore-place"
                className="border-2 border-[var(--card-border)] bg-white rounded-lg p-8 hover:shadow-xl hover:border-[var(--accent-sage)] hover:-translate-y-1 transition-all group flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[var(--accent-sage)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-14 h-14 rounded-lg bg-[var(--accent-sage-light)] flex items-center justify-center mb-5 group-hover:bg-[var(--accent-sage)] transition-colors">
                  <Map className="w-7 h-7 text-[var(--accent-sage)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl text-[var(--primary)] mb-3">Explore by Map</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">
                  Browse primary sources by Wisconsin county or region. Find images and documents from your community.
                </p>
                <span className="inline-flex items-center gap-2 mt-5 text-xs font-semibold text-[var(--accent-sage)] group-hover:gap-3 transition-all">
                  Explore by region <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              {/* Exhibits */}
              <Link
                to="/for-educators/featured-series"
                className="border-2 border-[var(--card-border)] bg-white rounded-lg p-8 hover:shadow-xl hover:border-[var(--primary)] hover:-translate-y-1 transition-all group flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[var(--primary)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-14 h-14 rounded-lg bg-[var(--primary-light)] flex items-center justify-center mb-5 group-hover:bg-[var(--primary)] transition-colors">
                  <BookOpen className="w-7 h-7 text-[var(--primary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl text-[var(--primary)] mb-3">Online Exhibits</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">
                  Curated, visual-first exhibits on Wisconsin history. Each exhibit includes images, context, and teaching notes.
                </p>
                <span className="inline-flex items-center gap-2 mt-5 text-xs font-semibold text-[var(--primary)] group-hover:gap-3 transition-all">
                  Browse exhibits <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              {/* Search Starters */}
              <Link
                to="/for-educators/search-starters"
                className="border-2 border-[var(--card-border)] bg-white rounded-lg p-8 hover:shadow-xl hover:border-[var(--accent-warm)] hover:-translate-y-1 transition-all group flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[var(--accent-warm)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-14 h-14 rounded-lg bg-[var(--accent-warm-light)] flex items-center justify-center mb-5 group-hover:bg-[var(--accent-warm)] transition-colors">
                  <Search className="w-7 h-7 text-[var(--accent-warm)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl text-[var(--primary)] mb-3">Search Starters</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">
                  Pre-built search links organized by place and topic. Quick links into a large collection without needing to browse.
                </p>
                <span className="inline-flex items-center gap-2 mt-5 text-xs font-semibold text-[var(--accent-warm)] group-hover:gap-3 transition-all">
                  View starters <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Find CTA */}
      <section className="py-10 bg-[var(--muted)] border-b border-[var(--card-border)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6 border-2 border-[var(--accent-warm)] bg-white rounded-lg p-8 shadow-lg">
            <div className="w-14 h-14 rounded-lg bg-[var(--accent-warm-light)] flex items-center justify-center flex-shrink-0">
              <Zap className="w-7 h-7 text-[var(--accent-warm)]" />
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-[var(--primary)] mb-2">Find something in 60 seconds</p>
              <p className="text-sm text-[var(--muted-foreground)]">
                Tell us your grade level, time available, and topic. We will suggest 3 starting points.
              </p>
            </div>
            <Link
              to="/for-educators/quick-find"
              className="w-full sm:w-auto text-center flex-shrink-0 bg-[var(--accent-warm)] text-white px-7 py-3 rounded-lg font-medium hover:bg-[var(--accent-warm-hover)] transition-all hover:shadow-md whitespace-nowrap"
            >
              Quick Find
            </Link>
          </div>
        </div>
      </section>

      {/* Ready Right Now */}
      <section className="py-14 bg-white border-b border-[var(--card-border)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="font-display text-3xl text-[var(--primary)] mb-3">Ready Right Now</h2>
              <p className="text-sm text-[var(--muted-foreground)]">
                Use one of these classroom-ready sets with minimal prep time.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {readyRightNow.map((set) => (
                <Link
                  key={set.id}
                  to={`/for-educators/resource-set/${set.id}`}
                  className="border-2 border-[var(--card-border)] bg-white rounded-lg p-6 hover:border-[var(--accent-sage)] hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-[var(--primary)] text-white">
                      {set.gradeBand}
                    </span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded border border-[var(--card-border)] text-[var(--muted-foreground)]">
                      {set.time}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-[var(--primary)] mb-2 group-hover:text-[var(--accent-sage)] transition-colors">
                    {set.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] mb-4">{set.teachingOutcome}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-sage)] group-hover:gap-3 transition-all">
                    Use this set <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Topic */}
      <section className="py-12 bg-[var(--muted)] border-b border-[var(--card-border)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl text-[var(--primary)] mb-3">Browse by Topic</h2>
            <p className="text-sm text-[var(--muted-foreground)] mb-7">
              Jump directly into curated teaching sets by theme.
            </p>
            <div className="flex flex-wrap gap-3">
              {browseTopics.map((topic) => (
                <Link
                  key={topic}
                  to={`/for-educators/teaching-resources?topic=${encodeURIComponent(topic)}`}
                  className="border-2 border-[var(--card-border)] bg-white px-4 py-2 rounded-lg font-mono text-xs text-[var(--foreground)] hover:border-[var(--accent-sage)] hover:text-[var(--accent-sage)] transition-colors"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Series */}
      <section className="py-16 bg-white border-b border-[var(--card-border)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <h2 className="font-display text-3xl text-[var(--primary)] mb-3">Featured Series</h2>
              <p className="text-sm text-[var(--muted-foreground)]">
                Recurring primary source features organized around themes. Good for ongoing units.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/for-educators/featured-series"
                className="flex flex-col sm:flex-row items-start gap-6 border-2 border-[var(--card-border)] bg-white rounded-lg p-8 hover:border-[var(--primary)] hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] transition-colors">
                  <Clock className="w-7 h-7 text-[var(--primary)] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-[var(--accent-warm-light)] text-[var(--accent-warm)] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    RECURRING SERIES
                  </div>
                  <p className="font-display text-lg text-[var(--primary)] mb-2">Main Street Mondays</p>
                  <p className="text-sm text-[var(--muted-foreground)] mb-4">
                    Weekly primary source features from small-town Wisconsin. Ideal for community history units.
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--primary)] group-hover:gap-3 transition-all">
                    View in Exhibits <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              <Link
                to="/for-educators/featured-series"
                className="flex flex-col sm:flex-row items-start gap-6 border-2 border-[var(--card-border)] bg-white rounded-lg p-8 hover:border-[var(--primary)] hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-[var(--accent-sage-light)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent-sage)] transition-colors">
                  <BookOpen className="w-7 h-7 text-[var(--accent-sage)] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-[var(--accent-sage-light)] text-[var(--accent-sage)] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    CURATED EXHIBIT
                  </div>
                  <p className="font-display text-lg text-[var(--primary)] mb-2">Wisconsin Through the Decades</p>
                  <p className="text-sm text-[var(--muted-foreground)] mb-4">
                    Decade-by-decade photo essays from 1860 to 1970. Cross-disciplinary connections throughout.
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-sage)] group-hover:gap-3 transition-all">
                    View in Exhibits <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Note on subject tags */}
      <section className="py-10 bg-[var(--muted)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto border-2 border-[var(--info)] bg-white rounded-lg p-6">
            <p className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-xs">i</span>
              A note on browsing
            </p>
            <p className="text-sm text-[var(--foreground)] leading-relaxed">
              Subject tags in Recollection Wisconsin apply to collections, not necessarily every individual item. Use the curated exhibits and search starters above to find images more reliably than browsing broad subject tags.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
