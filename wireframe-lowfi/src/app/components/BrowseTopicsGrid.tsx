import React from 'react';
import { Annotation } from './Annotation';

export function BrowseTopicsGrid() {
  const topics = [
    'Photos',
    'Maps',
    'Oral Histories',
    'Newspapers',
    'Exhibits',
    'Community Stories',
    'Documents',
    'Artifacts',
    'Audio Recordings',
    'Video',
    'Letters & Diaries',
    'Government Records'
  ];

  return (
    <section className="relative bg-white border-b-2 border-gray-300 py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-mono text-gray-900 mb-2">
            Browse by Topic
          </h2>
          <div className="w-20 h-1 bg-gray-800"></div>
          <p className="text-xs md:text-sm font-mono text-gray-600 mt-3">
            Explore Wisconsin's cultural heritage by material type
          </p>
        </div>
        
        {/* Topics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-300 bg-gray-50 p-3 md:p-4 hover:shadow-md hover:border-gray-400 hover:bg-white transition-all cursor-pointer aspect-square flex items-center justify-center text-center group"
            >
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-400 bg-white mx-auto mb-2 flex items-center justify-center group-hover:border-gray-500 transition-colors">
                  <span className="text-xs font-mono text-gray-400">■</span>
                </div>
                <span className="text-xs font-mono text-gray-800 block group-hover:text-gray-900 transition-colors">
                  {topic}
                </span>
                <span className="text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity mt-1 block">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Annotation */}
      <Annotation
        position="right"
        className="hidden xl:block absolute -right-72 top-20"
      >
        <strong>EXPLORATORY BROWSING AFFORDANCES</strong>
        <br /><br />
        Hover effects (border highlight, shadow, "Explore →" label) support exploratory browsing 
        behavior without overwhelming the interface. These subtle cues indicate interactivity.
        <br /><br />
        Topic-based browsing is critical for cultural heritage platforms where users may not know 
        what they're looking for initially. Categories organized by material type rather than 
        abstract themes are more intuitive for general audiences.
      </Annotation>
    </section>
  );
}