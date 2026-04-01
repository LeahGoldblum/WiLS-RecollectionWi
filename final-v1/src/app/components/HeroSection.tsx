import { BookOpen, Search, Upload } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export function HeroSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="border-b border-[var(--card-border)] bg-gradient-to-b from-[var(--primary-light)] to-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Dual Headline Hierarchy */}
        <div className="text-center mb-14 md:mb-20 space-y-5">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--primary)] leading-tight">
            Discover Wisconsin's History.<br />Share Its Stories.
          </h1>
          <div className="w-20 h-1 bg-[var(--accent-warm)] mx-auto my-6 rounded-full"></div>
          <h2 className="text-xl md:text-2xl text-[var(--muted-foreground)] font-medium">
            What Would You Like to Discover Today?
          </h2>
        </div>

        {/* Intent-Driven Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-14">
          {/* Card 1: Educator */}
          <Link
            to="/for-educators"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="border-2 border-[var(--card-border)] bg-white rounded-lg p-8 md:p-10 cursor-pointer transition-all hover:shadow-lg hover:border-[var(--accent-sage)] hover:-translate-y-1 block relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-sage)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="flex flex-col items-center text-center gap-5 md:gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-[var(--accent-sage-light)] flex items-center justify-center transition-all group-hover:bg-[var(--accent-sage)] group-hover:scale-110">
                <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-[var(--accent-sage)] group-hover:text-white transition-colors" />
              </div>
              <p className="text-base md:text-lg text-[var(--foreground)] font-medium">
                I want to find classroom materials.
              </p>
              {hoveredCard === 1 && (
                <span className="text-xs text-[var(--accent-sage)] bg-[var(--accent-sage-light)] px-4 py-2 rounded-full font-medium">
                  Explore Resources →
                </span>
              )}
            </div>
          </Link>

          {/* Card 2: Researcher/Genealogist */}
          <Link
            to="/genealogists"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className="border-2 border-[var(--card-border)] bg-white rounded-lg p-8 md:p-10 cursor-pointer transition-all hover:shadow-lg hover:border-[var(--primary)] hover:-translate-y-1 block relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="flex flex-col items-center text-center gap-5 md:gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-[var(--primary-light)] flex items-center justify-center transition-all group-hover:bg-[var(--primary)] group-hover:scale-110">
                <Search className="w-10 h-10 md:w-12 md:h-12 text-[var(--primary)] group-hover:text-white transition-colors" />
              </div>
              <p className="text-base md:text-lg text-[var(--foreground)] font-medium">
                I want to explore the archives.
              </p>
              {hoveredCard === 2 && (
                <span className="text-xs text-[var(--primary)] bg-[var(--primary-light)] px-4 py-2 rounded-full font-medium">
                  Start Searching →
                </span>
              )}
            </div>
          </Link>

          {/* Card 3: Partner */}
          <Link 
            to="/contribute"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            className="border-2 border-[var(--card-border)] bg-white rounded-lg p-8 md:p-10 cursor-pointer transition-all hover:shadow-lg hover:border-[var(--accent-warm)] hover:-translate-y-1 block relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-warm)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="flex flex-col items-center text-center gap-5 md:gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-[var(--accent-warm-light)] flex items-center justify-center transition-all group-hover:bg-[var(--accent-warm)] group-hover:scale-110">
                <Upload className="w-10 h-10 md:w-12 md:h-12 text-[var(--accent-warm)] group-hover:text-white transition-colors" />
              </div>
              <p className="text-base md:text-lg text-[var(--foreground)] font-medium">
                I want to share my collection.
              </p>
              {hoveredCard === 3 && (
                <span className="text-xs text-[var(--accent-warm)] bg-[var(--accent-warm-light)] px-4 py-2 rounded-full font-medium">
                  Partner With Us →
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* Search Bridge */}
        <div className="max-w-2xl mx-auto">
          <div className="border-2 border-[var(--card-border)] bg-white rounded-lg p-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 flex-1 w-full">
              <Search className="w-5 h-5 text-[var(--muted-foreground)] ml-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search the digital collection..."
                className="flex-1 min-w-0 text-sm text-[var(--foreground)] bg-transparent outline-none px-2 py-2.5 placeholder:text-[var(--muted-foreground)]"
              />
            </div>
            <button className="w-full sm:w-auto bg-[var(--primary)] text-white px-6 md:px-8 py-2.5 rounded-md text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[var(--primary)]">
              Search
            </button>
          </div>
          <p className="text-center text-sm text-[var(--muted-foreground)] mt-3">
            Search across Wisconsin digital collections
          </p>
          <p className="text-center text-xs text-[var(--muted-foreground)] opacity-60 mt-1">
            ↳ Links to external DPLA backend
          </p>
        </div>
      </div>
    </section>
  );
}
