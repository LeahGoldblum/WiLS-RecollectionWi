import { BookOpen, Search, Upload } from 'lucide-react';
import { useState } from 'react';

export function HeroSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="border-b border-neutral-300 bg-neutral-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Dual Headline Hierarchy */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h1 className="font-mono text-3xl md:text-5xl lg:text-6xl tracking-tight text-neutral-800">
            Discover Wisconsin's History.<br />Share Its Stories.
          </h1>
          <div className="w-16 h-px bg-neutral-400 mx-auto my-6"></div>
          <h2 className="font-mono text-xl md:text-2xl text-neutral-600">
            What Would You Like to Discover Today?
          </h2>
        </div>

        {/* Intent-Driven Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Card 1: Educator */}
          <div 
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="border-2 border-neutral-400 bg-white p-6 md:p-8 cursor-pointer transition-all hover:shadow-md hover:border-neutral-600"
          >
            <div className="flex flex-col items-center text-center gap-4 md:gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 border border-neutral-400 bg-neutral-100 flex items-center justify-center transition-all">
                <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-neutral-600" />
              </div>
              <p className="font-mono text-base md:text-lg text-neutral-700">
                I want to find classroom materials.
              </p>
              {hoveredCard === 1 && (
                <span className="font-mono text-xs text-neutral-500 bg-neutral-100 px-3 py-1 border border-neutral-300">
                  View classroom materials →
                </span>
              )}
            </div>
          </div>

          {/* Card 2: Researcher */}
          <div 
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className="border-2 border-neutral-400 bg-white p-6 md:p-8 cursor-pointer transition-all hover:shadow-md hover:border-neutral-600"
          >
            <div className="flex flex-col items-center text-center gap-4 md:gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 border border-neutral-400 bg-neutral-100 flex items-center justify-center transition-all">
                <Search className="w-10 h-10 md:w-12 md:h-12 text-neutral-600" />
              </div>
              <p className="font-mono text-base md:text-lg text-neutral-700">
                I want to explore the collection.
              </p>
              {hoveredCard === 2 && (
                <span className="font-mono text-xs text-neutral-500 bg-neutral-100 px-3 py-1 border border-neutral-300">
                  Browse the collection →
                </span>
              )}
            </div>
          </div>

          {/* Card 3: Contributor */}
          <div 
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            className="border-2 border-neutral-400 bg-white p-6 md:p-8 cursor-pointer transition-all hover:shadow-md hover:border-neutral-600"
          >
            <div className="flex flex-col items-center text-center gap-4 md:gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 border border-neutral-400 bg-neutral-100 flex items-center justify-center transition-all">
                <Upload className="w-10 h-10 md:w-12 md:h-12 text-neutral-600" />
              </div>
              <p className="font-mono text-base md:text-lg text-neutral-700">
                I want to share materials from my collection.
              </p>
              {hoveredCard === 3 && (
                <span className="font-mono text-xs text-neutral-500 bg-neutral-100 px-3 py-1 border border-neutral-300">
                  Start contributing →
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Search Bridge */}
        <div className="max-w-2xl mx-auto">
          <div className="border border-neutral-400 bg-white p-2 flex items-center gap-2 shadow-sm">
            <Search className="w-5 h-5 text-neutral-500 ml-2" />
            <input
              type="text"
              placeholder="Search the digital collection..."
              className="flex-1 font-mono text-sm text-neutral-700 bg-transparent outline-none px-2 py-2"
            />
            <button className="border border-neutral-400 bg-neutral-100 px-4 md:px-6 py-2 font-mono text-sm text-neutral-700 hover:bg-neutral-200 transition-colors">
              Search
            </button>
          </div>
          <p className="text-center font-mono text-xs text-neutral-600 mt-3">
            Search across Wisconsin digital collections.
          </p>
          <p className="text-center font-mono text-xs text-neutral-400 mt-1">
            ↳ Links to external DPLA backend
          </p>
        </div>
      </div>
    </section>
  );
}
