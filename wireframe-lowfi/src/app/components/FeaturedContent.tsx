import React from 'react';
import { Annotation } from './Annotation';

export function FeaturedContent() {
  const featured = [
    { type: 'Collection', title: 'Milwaukee Industrial Photography Archive', items: '1,247 items' },
    { type: 'Story', title: 'Voices from the Logging Era', items: 'Curated exhibit' },
    { type: 'Collection', title: 'Wisconsin Political Posters 1960-1990', items: '328 items' },
    { type: 'Story', title: 'Indigenous Knowledge and Landscapes', items: 'Curated exhibit' }
  ];

  return (
    <section className="relative bg-gray-50 border-b-2 border-gray-300 py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-mono text-gray-900 mb-2">
            Featured Stories & Collections
          </h2>
          <div className="w-20 h-1 bg-gray-800 mb-3"></div>
          <p className="text-xs md:text-sm font-mono text-gray-600">
            Curated highlights from Wisconsin's cultural heritage
          </p>
        </div>
        
        {/* Content Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((item, idx) => (
            <div key={idx} className="border-2 border-gray-300 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group">
              {/* Image Placeholder */}
              <div className="w-full h-40 md:h-48 border-b-2 border-gray-300 bg-gray-200 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <span className="text-xs font-mono text-gray-500">IMAGE PLACEHOLDER</span>
              </div>
              
              {/* Card Content */}
              <div className="p-4">
                <div className="inline-block px-2 py-1 border border-gray-400 bg-gray-100 mb-2">
                  <span className="text-xs font-mono text-gray-700">{item.type}</span>
                </div>
                <h3 className="text-sm font-mono text-gray-900 mb-2 font-bold">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-gray-600">
                  {item.items}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Link */}
        <div className="text-center mt-8 md:mt-10">
          <div className="inline-block px-6 py-3 border-2 border-gray-400 bg-white hover:bg-gray-50 hover:shadow-md transition-all cursor-pointer">
            <span className="text-sm font-mono text-gray-800">View More Featured Content →</span>
          </div>
        </div>
      </div>
      
      {/* Annotation */}
      <Annotation
        position="right"
        className="hidden xl:block absolute -right-72 top-20"
      >
        <strong>CURATED DISCOVERY</strong>
        <br /><br />
        Card hover states (lift effect, shadow) provide subtle interaction cues that make historical 
        content more approachable for general audiences without creating a polished UI design.
        <br /><br />
        Curated content improves engagement by showcasing platform depth and quality. Mix of 
        "Collections" (aggregated items) and "Stories" (curated exhibits) demonstrates different 
        ways to engage with content.
      </Annotation>
    </section>
  );
}