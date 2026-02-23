import React from 'react';
import { Annotation } from './Annotation';

export function ResourcesDropdown() {
  const columns = [
    {
      title: 'Practitioner Resources',
      description: 'For institutions and professionals',
      links: [
        'Metadata Guidelines',
        'Digitization Best Practices',
        'Contributor Onboarding',
        'Templates & Toolkits',
        'Copyright & Rights Management',
        'Technical Documentation'
      ]
    },
    {
      title: 'Research & Teaching',
      description: 'For educators and students',
      links: [
        'Educator Materials',
        'Curriculum Resources',
        'Research Guides',
        'Digital Exhibits',
        'Lesson Plans',
        'Primary Source Sets'
      ]
    },
    {
      title: 'Discovery Tools',
      description: 'Explore the collection',
      links: [
        'Browse by Topic',
        'Featured Collections',
        'Popular Searches',
        'Community Stories',
        'Timeline Explorer',
        'Map Browser'
      ]
    },
    {
      title: 'Support & Community',
      description: 'Get help and stay connected',
      links: [
        'Contact Support',
        'Help Documentation',
        'Community Initiatives',
        'Events & Webinars',
        'Newsletter Signup',
        'Partner Network'
      ]
    }
  ];

  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[90vw] max-w-[920px] bg-white border-2 border-gray-300 shadow-xl z-50 p-6 md:p-8">
        {/* Dropdown Header */}
        <div className="mb-5 md:mb-6 pb-3 md:pb-4 border-b border-gray-200">
          <h3 className="text-base md:text-lg font-mono text-gray-900 mb-1 font-bold">Resources</h3>
          <p className="text-xs font-mono text-gray-600">
            Tools, guides, and materials for all audiences
          </p>
        </div>
        
        {/* Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {columns.map((column, idx) => (
            <div key={idx} className="space-y-3">
              {/* Column Header */}
              <div className="pb-2 md:pb-3 border-b border-gray-200">
                <h4 className="text-xs md:text-sm font-mono text-gray-900 font-bold mb-1">
                  {column.title}
                </h4>
                <p className="text-xs font-mono text-gray-500">
                  {column.description}
                </p>
              </div>
              
              {/* Column Links */}
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <div className="text-xs font-mono text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition-colors py-1">
                      {link}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Dropdown Footer */}
        <div className="mt-5 md:mt-6 pt-3 md:pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-mono text-gray-500">
            Not sure where to start?
          </p>
          <div className="px-4 py-2 border-2 border-gray-400 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
            <span className="text-xs font-mono text-gray-800">View All Resources →</span>
          </div>
        </div>
      </div>
      
      {/* Annotation positioned to the right of dropdown */}
      <Annotation
        position="right"
        className="hidden 2xl:block fixed right-4 top-44 z-50"
      >
        <strong>RESOURCES MEGA MENU</strong>
        <br /><br />
        <strong>Column 1 - Practitioner Resources:</strong> Technical materials for contributing 
        institutions, archivists, and digital collection managers.
        <br /><br />
        <strong>Column 2 - Research & Teaching:</strong> Curriculum materials and research guides 
        for educators, students, and researchers.
        <br /><br />
        <strong>Column 3 - Discovery Tools:</strong> Entry points for exploratory users who lack 
        search specificity.
        <br /><br />
        <strong>Column 4 - Support & Community:</strong> Help documentation and engagement opportunities.
        <br /><br />
        Multi-column structure improves discoverability while maintaining clean main navigation.
      </Annotation>
    </>
  );
}