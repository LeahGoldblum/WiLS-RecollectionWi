import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { Map, BookOpen, Search, Zap, Clock, ArrowRight } from 'lucide-react';

export function EducatorHub() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Educators' }]} />

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">For Educators</p>
            <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-4">Teaching Resources</h1>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              Use primary sources to support Wisconsin history instruction.
            </p>
            <p className="text-sm text-neutral-400 mt-2">
              Curated images, maps, and documents from libraries and archives across the state.
            </p>
          </div>
        </div>
      </section>

      {/* Primary entry cards -- above fold */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-6 text-center">
              Where would you like to start?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Map */}
              <Link
                to="/educators/map"
                className="border border-neutral-200 bg-white p-6 hover:shadow-md hover:border-neutral-500 transition-all group flex flex-col"
              >
                <div className="w-12 h-12 border border-neutral-200 bg-neutral-50 flex items-center justify-center mb-4">
                  <Map className="w-6 h-6 text-neutral-600" />
                </div>
                <h3 className="font-display text-lg text-neutral-900 mb-2">Explore by Map</h3>
                <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                  Browse primary sources by Wisconsin county or region. Find images and documents from your community.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-mono text-neutral-400 group-hover:text-neutral-800 transition-colors">
                  Explore by region <ArrowRight className="w-3 h-3" />
                </span>
              </Link>

              {/* Exhibits */}
              <Link
                to="/educators/exhibits"
                className="border border-neutral-200 bg-white p-6 hover:shadow-md hover:border-neutral-500 transition-all group flex flex-col"
              >
                <div className="w-12 h-12 border border-neutral-200 bg-neutral-50 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-neutral-600" />
                </div>
                <h3 className="font-display text-lg text-neutral-900 mb-2">Online Exhibits</h3>
                <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                  Curated, visual-first exhibits on Wisconsin history. Each exhibit includes images, context, and teaching notes.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-mono text-neutral-400 group-hover:text-neutral-800 transition-colors">
                  Browse exhibits <ArrowRight className="w-3 h-3" />
                </span>
              </Link>

              {/* Search Starters */}
              <Link
                to="/educators/search-starters"
                className="border border-neutral-200 bg-white p-6 hover:shadow-md hover:border-neutral-500 transition-all group flex flex-col"
              >
                <div className="w-12 h-12 border border-neutral-200 bg-neutral-50 flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-neutral-600" />
                </div>
                <h3 className="font-display text-lg text-neutral-900 mb-2">Search Starters</h3>
                <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                  Pre-built search links organized by place and topic. Quick links into a large collection without needing to browse.
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-mono text-neutral-400 group-hover:text-neutral-800 transition-colors">
                  View starters <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Find CTA */}
      <section className="py-8 bg-neutral-50 border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-neutral-300 bg-white p-5">
            <div className="w-10 h-10 border border-neutral-200 bg-neutral-50 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-neutral-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-800">Find something in 60 seconds</p>
              <p className="text-sm text-neutral-500 mt-0.5">
                Tell us your grade level, time available, and topic. We will suggest 3 starting points.
              </p>
            </div>
            <Link
              to="/educators/quick-find"
              className="flex-shrink-0 bg-neutral-900 text-white px-5 py-2.5 text-sm hover:bg-neutral-700 transition-colors whitespace-nowrap"
            >
              Quick Find
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Series */}
      <section className="py-10 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-xl text-neutral-900 mb-2">Featured Series</h2>
            <p className="text-sm text-neutral-500 mb-6">
              Recurring primary source features organized around themes. Good for ongoing units.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/educators/exhibits"
                className="flex items-start gap-4 border border-neutral-200 bg-neutral-50 p-5 hover:border-neutral-400 hover:bg-white transition-all group"
              >
                <div className="w-10 h-10 border border-neutral-200 bg-white flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-neutral-500" />
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-wide mb-1">Recurring Series</p>
                  <p className="font-display text-base text-neutral-800 mb-1">Main Street Mondays</p>
                  <p className="text-sm text-neutral-600">
                    Weekly primary source features from small-town Wisconsin. Ideal for community history units.
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-mono text-neutral-400 group-hover:text-neutral-700 transition-colors">
                    View in Exhibits <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>

              <Link
                to="/educators/exhibits"
                className="flex items-start gap-4 border border-neutral-200 bg-neutral-50 p-5 hover:border-neutral-400 hover:bg-white transition-all group"
              >
                <div className="w-10 h-10 border border-neutral-200 bg-white flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-neutral-500" />
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-wide mb-1">Curated Exhibit</p>
                  <p className="font-display text-base text-neutral-800 mb-1">Wisconsin Through the Decades</p>
                  <p className="text-sm text-neutral-600">
                    Decade-by-decade photo essays from 1860 to 1970. Cross-disciplinary connections throughout.
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-mono text-neutral-400 group-hover:text-neutral-700 transition-colors">
                    View in Exhibits <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Note on subject tags */}
      <section className="py-8 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto border border-neutral-200 bg-white p-5">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-wide mb-2">A note on browsing</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Subject tags in Recollection Wisconsin apply to collections, not necessarily every individual item. Use the curated exhibits and search starters above to find images more reliably than browsing broad subject tags.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
