import { Link } from 'react-router';
import { HeroSection } from '../components/HeroSection';
import { MetadataGrid } from '../components/MetadataGrid';
import { Users, FileText, Zap, ArrowRight, BookOpen, Search } from 'lucide-react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <div>
        <HeroSection />
      </div>

      {/* Metadata Discovery Grid */}
      <div>
        <MetadataGrid />
      </div>

      {/* Three Audience Pathways */}
      <section className="border-b border-[var(--card-border)] bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-display text-3xl md:text-4xl text-[var(--primary)] mb-4">
                Share Your Collection with Wisconsin
              </h2>
              <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
                Partner with us to make your historical materials accessible to researchers and educators statewide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
              <div className="border-2 border-[var(--card-border)] bg-white rounded-lg p-8 hover:shadow-lg hover:border-[var(--accent-warm)] transition-all group">
                <div className="flex flex-col items-center text-center gap-5">
                  <div className="w-16 h-16 rounded-lg bg-[var(--accent-warm-light)] flex items-center justify-center group-hover:bg-[var(--accent-warm)] transition-colors">
                    <Users className="w-8 h-8 text-[var(--accent-warm)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-lg text-[var(--foreground)]">Connect with Partners</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    Join our network of libraries, historical societies, and cultural institutions.
                  </p>
                </div>
              </div>

              <div className="border-2 border-[var(--card-border)] bg-white rounded-lg p-8 hover:shadow-lg hover:border-[var(--accent-warm)] transition-all group">
                <div className="flex flex-col items-center text-center gap-5">
                  <div className="w-16 h-16 rounded-lg bg-[var(--accent-warm-light)] flex items-center justify-center group-hover:bg-[var(--accent-warm)] transition-colors">
                    <BookOpen className="w-8 h-8 text-[var(--accent-warm)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-lg text-[var(--foreground)]">Access Resources</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    Get digitization guides, metadata standards, and technical support.
                  </p>
                </div>
              </div>

              <div className="border-2 border-[var(--card-border)] bg-white rounded-lg p-8 hover:shadow-lg hover:border-[var(--accent-warm)] transition-all group">
                <div className="flex flex-col items-center text-center gap-5">
                  <div className="w-16 h-16 rounded-lg bg-[var(--accent-warm-light)] flex items-center justify-center group-hover:bg-[var(--accent-warm)] transition-colors">
                    <Search className="w-8 h-8 text-[var(--accent-warm)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-lg text-[var(--foreground)]">Start Contributing</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    Submit your collection proposal and explore funding opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/contribute/get-started"
                className="inline-flex items-center gap-2 bg-[var(--accent-warm)] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[var(--accent-warm-hover)] transition-all hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent-warm)]"
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
