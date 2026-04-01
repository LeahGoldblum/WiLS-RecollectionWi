import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArrowRight, Compass, Image, Search } from 'lucide-react';

export function EducatorsHub() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Educators' }]} />

      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-3">Teaching Resources</h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Use primary sources to support Wisconsin history instruction.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <Link
              to="/educators/map"
              className="border border-neutral-200 bg-white p-5 hover:border-neutral-400 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-neutral-600 mt-0.5" />
                <div>
                  <h2 className="font-display text-lg text-neutral-900 mb-1">Explore by Map</h2>
                  <p className="text-sm text-neutral-600">Find visuals by Wisconsin place and community.</p>
                </div>
              </div>
            </Link>

            <Link
              to="/educators/exhibits"
              className="border border-neutral-200 bg-white p-5 hover:border-neutral-400 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-3">
                <Image className="w-5 h-5 text-neutral-600 mt-0.5" />
                <div>
                  <h2 className="font-display text-lg text-neutral-900 mb-1">Online Exhibits</h2>
                  <p className="text-sm text-neutral-600">Visual, curated entry points for classroom use.</p>
                </div>
              </div>
            </Link>

            <Link
              to="/educators/search-starters"
              className="border border-neutral-200 bg-white p-5 hover:border-neutral-400 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-neutral-600 mt-0.5" />
                <div>
                  <h2 className="font-display text-lg text-neutral-900 mb-1">Search Starters</h2>
                  <p className="text-sm text-neutral-600">Jump into topic-based links and canned searches.</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="border border-neutral-200 bg-neutral-50 p-5 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-display text-lg text-neutral-900 mb-1">Need something in 60 seconds?</h3>
              <p className="text-sm text-neutral-600">Use a quick selector to get three starter resources.</p>
            </div>
            <Link
              to="/educators/quick-find"
              className="inline-flex items-center gap-2 border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              Quick Find in 60 seconds
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="border border-neutral-200 bg-white p-5">
            <h3 className="font-display text-lg text-neutral-900 mb-1">Series</h3>
            <p className="text-sm text-neutral-600 mb-3">Main Street Mondays offers quick visual framing for local history topics.</p>
            <Link to="/educators/exhibits" className="text-sm text-neutral-700 hover:underline">
              View Main Street Mondays in Online Exhibits →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
