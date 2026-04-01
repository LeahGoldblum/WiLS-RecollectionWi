import { Link } from 'react-router';
import { HeroSection } from '../components/HeroSection';
import { MetadataGrid } from '../components/MetadataGrid';
import { Annotation } from '../components/Annotation';
import { Users, FileText, Zap, ArrowRight, BookOpen, Search } from 'lucide-react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <HeroSection />
        <Annotation
          number={2}
          text="Dual headline hierarchy supports mission clarity (primary) and user intent (secondary). Hover affordances on cards signal clickability without overwhelming users."
          position="left"
        />
      </div>

      {/* Metadata Discovery Grid */}
      <div className="relative">
        <MetadataGrid />
        <Annotation
          number={4}
          text="Browse-by-topic grid using metadata tags to bypass search-term failures identified in 2020 report. Subtle elevation on hover supports exploratory browsing behavior."
          position="left"
        />
      </div>

      {/* Three Audience Pathways */}
      <section className="border-b border-neutral-300 bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-neutral-800 mb-3">
                Share Your Collection with Wisconsin
              </h2>
              <p className="text-sm md:text-base text-neutral-600">
                Partner with us to make your historical materials accessible to researchers and educators statewide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="border border-neutral-300 bg-neutral-50 p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 border border-neutral-300 bg-white flex items-center justify-center">
                    <Users className="w-8 h-8 text-neutral-600" />
                  </div>
                  <h3 className="font-mono text-sm text-neutral-800">Connect with Partners</h3>
                  <p className="font-mono text-xs text-neutral-600 leading-relaxed">
                    Join our network of libraries, historical societies, and cultural institutions.
                  </p>
                </div>
              </div>

              <div className="border border-neutral-300 bg-neutral-50 p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 border border-neutral-300 bg-white flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-neutral-600" />
                  </div>
                  <h3 className="font-mono text-sm text-neutral-800">Access Resources</h3>
                  <p className="font-mono text-xs text-neutral-600 leading-relaxed">
                    Get digitization guides, metadata standards, and technical support.
                  </p>
                </div>
              </div>

              <div className="border border-neutral-300 bg-neutral-50 p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 border border-neutral-300 bg-white flex items-center justify-center">
                    <Search className="w-8 h-8 text-neutral-600" />
                  </div>
                  <h3 className="font-mono text-sm text-neutral-800">Start Contributing</h3>
                  <p className="font-mono text-xs text-neutral-600 leading-relaxed">
                    Submit your collection proposal and explore funding opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/organizations/get-started"
                className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-3 font-mono text-sm hover:bg-neutral-700 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900"
              >
                Get Started as a Partner
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}