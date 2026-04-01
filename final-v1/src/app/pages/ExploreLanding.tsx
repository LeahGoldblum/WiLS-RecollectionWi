import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { MapPin, BookOpen, Compass, ArrowRight } from 'lucide-react';

export function ExploreLanding() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Explore' }]} />

      <section className="border-b border-[var(--card-border)] bg-gradient-to-br from-[var(--primary-light)] via-white to-[var(--accent-sage-light)] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl text-[var(--primary)] mb-5 leading-tight">
              Explore Wisconsin history collections
            </h1>
            <p className="text-base md:text-lg text-[var(--foreground)] leading-relaxed">
              Browse featured stories, discover partners by place, and use guided starting points to
              continue into collections.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/explore/place"
              className="border-2 border-[var(--card-border)] rounded-lg p-7 bg-white hover:shadow-lg hover:border-[var(--accent-sage)] transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-sage-light)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent-sage)] transition-colors">
                <MapPin className="w-6 h-6 text-[var(--accent-sage)] group-hover:text-white transition-colors" />
              </div>
              <h2 className="font-display text-xl text-[var(--primary)] mb-2">Explore by Place</h2>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                Discover partner collections by county, region, and Wisconsin community.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-sage)] group-hover:gap-3 transition-all">
                Open map <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/explore/featured"
              className="border-2 border-[var(--card-border)] rounded-lg p-7 bg-white hover:shadow-lg hover:border-[var(--primary)] transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--primary-light)] flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors">
                <BookOpen className="w-6 h-6 text-[var(--primary)] group-hover:text-white transition-colors" />
              </div>
              <h2 className="font-display text-xl text-[var(--primary)] mb-2">Featured Stories</h2>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                Start with curated exhibits and recurring features like Main Street Mondays.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--primary)] group-hover:gap-3 transition-all">
                Browse featured <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/explore/search-tips"
              className="border-2 border-[var(--card-border)] rounded-lg p-7 bg-white hover:shadow-lg hover:border-[var(--accent-warm)] transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-warm-light)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent-warm)] transition-colors">
                <Compass className="w-6 h-6 text-[var(--accent-warm)] group-hover:text-white transition-colors" />
              </div>
              <h2 className="font-display text-xl text-[var(--primary)] mb-2">Search Tips / Start Here</h2>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                Use guided prompts by topic, era, and place before jumping into collections.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-warm)] group-hover:gap-3 transition-all">
                Get started <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
