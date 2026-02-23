import React from 'react';
import { Annotation } from './Annotation';

export function ResourceLibrary() {
  const resources = [
    'Metadata Standards',
    'Digitization Guidelines',
    'Copyright & Rights',
    'Technical Documentation',
    'Training Materials',
    'Best Practices'
  ];

  return (
    <section className="relative bg-gray-100 border-b-2 border-gray-300 py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="border-2 border-gray-400 bg-white shadow-sm p-6 md:p-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 md:mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-mono text-gray-900 mb-2">
                Resource Library
              </h2>
              <div className="w-20 h-1 bg-gray-800 mb-3"></div>
              <p className="text-xs md:text-sm font-mono text-gray-600">
                For cultural institutions, librarians, archivists, and digital collection managers
              </p>
            </div>
            
            {/* Dropdown Placeholder */}
            <div className="w-full md:w-64 h-12 border-2 border-gray-400 bg-gray-50 flex items-center justify-between px-4 hover:bg-white hover:border-gray-500 transition-all cursor-pointer">
              <span className="text-xs font-mono text-gray-600">Select Resource Type</span>
              <span className="text-gray-600">▼</span>
            </div>
          </div>
          
          {/* Resource Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource, idx) => (
              <div
                key={idx}
                className="border-2 border-gray-300 bg-gray-50 p-4 hover:bg-white hover:shadow-md hover:border-gray-400 transition-all cursor-pointer"
              >
                <span className="text-xs font-mono text-gray-800">{resource}</span>
              </div>
            ))}
          </div>
          
          {/* View All Link */}
          <div className="mt-6 md:mt-8 text-center">
            <div className="inline-block px-6 py-3 border-2 border-gray-400 bg-gray-50 hover:bg-gray-100 hover:shadow-md transition-all cursor-pointer">
              <span className="text-sm font-mono text-gray-800">View All Resources →</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Annotation */}
      <Annotation
        position="right"
        className="hidden xl:block absolute -right-72 top-12"
      >
        <strong>PRACTITIONER HUB SEPARATION</strong>
        <br /><br />
        Card-based container with subtle shadow creates visual separation from general content, 
        signaling this section serves practitioners (archivists, librarians, institutions).
        <br /><br />
        Dropdown and hover states support quick navigation to specific resource types without 
        overwhelming general users. Positioning below primary discovery tools ensures casual 
        visitors aren't distracted.
      </Annotation>
    </section>
  );
}