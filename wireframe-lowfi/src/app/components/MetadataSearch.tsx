import React from 'react';
import { Annotation } from './Annotation';

export function MetadataSearch() {
  const popularSearches = [
    'Civil War',
    'Immigration',
    'Native American',
    'Agriculture',
    'Labor Movement',
    'Education',
    'Transportation',
    'Architecture',
    'Women\'s History',
    'Manufacturing',
    'German Heritage',
    'Great Depression'
  ];

  const topicTags = [
    'Milwaukee',
    'Madison',
    'Photographs',
    'Letters',
    '1900-1950',
    'Rural Life',
    'Urban Development',
    'Ethnic Communities'
  ];

  return (
    <section className="relative bg-white border-b-2 border-gray-300 py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Popular Searches */}
        <div className="mb-10 md:mb-14">
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-mono text-gray-900 mb-2">
              Popular Searches
            </h3>
            <div className="w-16 h-0.5 bg-gray-700"></div>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {popularSearches.map((search, idx) => (
              <div
                key={idx}
                className="px-4 py-2 border-2 border-gray-300 bg-gray-50 hover:bg-white hover:shadow-md hover:border-gray-400 transition-all cursor-pointer"
              >
                <span className="text-xs font-mono text-gray-800">{search}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Browse by Topic Tags */}
        <div>
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-mono text-gray-900 mb-2">
              Browse by Topic Tags
            </h3>
            <div className="w-16 h-0.5 bg-gray-700 mb-2"></div>
            <p className="text-xs md:text-sm font-mono text-gray-600">
              Filter by location, time period, and material type
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {topicTags.map((tag, idx) => (
              <div
                key={idx}
                className="px-4 py-2 border-2 border-gray-400 bg-white hover:bg-gray-800 hover:text-white hover:shadow-md transition-all cursor-pointer group"
              >
                <span className="text-xs md:text-sm font-mono text-gray-800 group-hover:text-white transition-colors">#{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Annotation */}
      <Annotation
        position="right"
        className="hidden xl:block absolute -right-72 top-20"
      >
        <strong>METADATA-GUIDED SEARCH SUPPORT</strong>
        <br /><br />
        This section compensates for limitations of external search functionality (DPLA) by 
        providing curated entry points based on common user needs and metadata structures.
        <br /><br />
        Hover states on tags and search terms provide clear interaction affordances, helping 
        users understand these are clickable pathways into the collection.
        <br /><br />
        "Topic Tags" expose the underlying metadata structure (geographic, temporal, format) 
        to help users understand how content is organized and refine their exploration.
      </Annotation>
    </section>
  );
}