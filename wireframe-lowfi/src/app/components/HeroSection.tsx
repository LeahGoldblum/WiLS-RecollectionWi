import React from 'react';
import { Annotation } from './Annotation';

export function HeroSection() {
  const intentCards = [
    { title: 'Teach or Learn', desc: 'Educational resources and lesson plans' },
    { title: 'Research History', desc: 'Academic and genealogical research' },
    { title: 'Explore Collections', desc: 'Browse curated digital archives' },
    { title: 'Share a Collection', desc: 'Partner with us as an institution' }
  ];

  return (
    <section className="relative bg-gray-50 border-b-2 border-gray-300 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Primary Headline */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-mono text-gray-900 mb-3 tracking-tight">
            Discover Wisconsin's History.<br />Share Its Stories.
          </h1>
          <div className="w-24 h-0.5 bg-gray-400 mx-auto mb-6"></div>
          <p className="text-sm md:text-base font-mono text-gray-600">
            Connecting communities to cultural heritage across the state
          </p>
        </div>
        
        {/* Large Search Bar */}
        <div className="mb-10 md:mb-14 max-w-3xl mx-auto">
          <div className="w-full h-14 md:h-16 border-2 border-gray-400 bg-white shadow-sm hover:shadow-md hover:border-gray-500 transition-all flex items-center px-4 md:px-6 cursor-text">
            <span className="text-xs md:text-sm font-mono text-gray-400">
              Search across Wisconsin digital collections...
            </span>
          </div>
          <div className="mt-2 text-xs font-mono text-gray-500 text-center">
            Powered by Digital Public Library of America (DPLA)
          </div>
        </div>
        
        {/* Secondary Intent Question */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-mono text-gray-800 mb-1">
            What Would You Like to Discover Today?
          </h2>
        </div>
        
        {/* Intent Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {intentCards.map((card, idx) => (
            <div 
              key={idx} 
              className="border-2 border-gray-300 bg-white p-5 md:p-6 hover:shadow-lg hover:border-gray-400 hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="w-full h-20 md:h-24 border-2 border-gray-300 bg-gray-50 mb-4 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <span className="text-xs font-mono text-gray-400">ICON</span>
              </div>
              <h3 className="text-sm font-mono text-gray-900 mb-2 font-bold">
                {card.title}
              </h3>
              <p className="text-xs font-mono text-gray-600">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Annotation */}
      <Annotation
        position="right"
        className="hidden xl:block absolute -right-72 top-32"
      >
        <strong>HEADLINE HIERARCHY & INTENT</strong>
        <br /><br />
        Primary headline "Discover Wisconsin's History. Share Its Stories." clearly communicates 
        dual mission: public access and institutional contribution.
        <br /><br />
        Secondary prompt "What Would You Like to Discover Today?" shifts focus to user intent, 
        reducing homepage confusion by immediately guiding visitors toward their goals.
        <br /><br />
        Helper text on search bar clarifies external DPLA integration. Front-end guidance supports 
        usability when backend search cannot be modified.
        <br /><br />
        Hover states on intent cards (shadow, lift effect) signal clickability without overwhelming users.
      </Annotation>
    </section>
  );
}