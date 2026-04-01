import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { Map, BookOpen, Search, Zap, Clock, ArrowRight, ChevronRight } from 'lucide-react';

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
                  Browse primary sources by <strong>region</strong>. Find images and documents connected to local communities.
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
                  Curated, visual-first exhibits. Fast access to images with short context snippets.
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

      {/* Quick Find CTA + embedded preview */}
      <section className="py-8 bg-neutral-50 border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 border border-neutral-300 bg-white p-5">
              <div className="w-10 h-10 border border-neutral-200 bg-neutral-50 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-neutral-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-800">Quick Find (under 60 seconds)</p>
                <p className="text-sm text-neutral-500 mt-0.5">
                  Tell us your grade level, time available, and topic. We will suggest 3 starting points.
                </p>
                <Link
                  to="/educators/quick-find"
                  className="inline-flex items-center gap-2 mt-3 bg-neutral-900 text-white px-5 py-2.5 text-sm hover:bg-neutral-700 transition-colors"
                >
                  Open Quick Find <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="border border-neutral-300 bg-white p-5">
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wide mb-2">Teacher-first design</p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Educators often need images immediately. This pathway prioritizes <strong>curated exhibits</strong>, <strong>map browsing</strong>, and <strong>search starters</strong> so teachers don’t have to sift through broad collection tags.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs font-mono text-neutral-500 border border-neutral-200 bg-neutral-50 px-2 py-1">Fast visuals</span>
                <span className="text-xs font-mono text-neutral-500 border border-neutral-200 bg-neutral-50 px-2 py-1">Place-based</span>
                <span className="text-xs font-mono text-neutral-500 border border-neutral-200 bg-neutral-50 px-2 py-1">Canned searches</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Street Mondays carousel */}
      <section className="py-10 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="font-display text-xl text-neutral-900 mb-1">Main Street Mondays</h2>
                <p className="text-sm text-neutral-500">
                  A recurring, teacher-friendly series: one community, one image set, quick context.
                </p>
              </div>
              <Link
                to="/educators/exhibits"
                className="text-sm font-mono text-neutral-600 hover:text-neutral-900 hover:underline whitespace-nowrap"
              >
                View series index →
              </Link>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2">
              {[
                { town: 'Mineral Point', hook: 'Mining-town streetscape photo set' },
                { town: 'Wausau', hook: 'Downtown storefronts and signage' },
                { town: 'Sheboygan', hook: 'Lakefront community life' },
                { town: 'La Crosse', hook: 'Riverfront commerce and transport' },
                { town: 'Ashland', hook: 'Northwoods industry + harbor views' },
              ].map((m) => (
                <div
                  key={m.town}
                  className="min-w-[260px] max-w-[260px] border border-neutral-200 bg-neutral-50 p-5 hover:border-neutral-400 hover:bg-white transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 border border-neutral-200 bg-white flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-neutral-500" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-neutral-400 uppercase tracking-wide">Weekly Feature</p>
                      <p className="font-display text-base text-neutral-800">{m.town}</p>
                      <p className="text-sm text-neutral-600 mt-1">{m.hook}</p>
                      <p className="text-xs text-neutral-400 mt-3 font-mono italic">[Wireframe — links to exhibit/series page]</p>
                    </div>
                  </div>
                </div>
              ))}
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
              Subject tags apply to <strong>collections</strong>, not necessarily every individual item inside a collection. For speed, start with exhibits, Main Street Mondays, map browsing, or search starters.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
