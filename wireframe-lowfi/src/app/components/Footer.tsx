import React from 'react';

export function Footer() {
  const footerSections = [
    {
      title: 'About',
      links: ['Mission', 'Partners', 'Contact', 'News']
    },
    {
      title: 'Use',
      links: ['Search Tips', 'Copyright', 'Terms of Use', 'Accessibility']
    },
    {
      title: 'Contribute',
      links: ['Partner Guidelines', 'Metadata Standards', 'Technical Specs', 'Submit Content']
    },
    {
      title: 'Connect',
      links: ['Newsletter', 'Social Media', 'Events', 'Support Us']
    }
  ];

  return (
    <footer className="bg-gray-800 border-t-2 border-gray-900 py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-10">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-sm md:text-base font-mono text-white mb-3 md:mb-4 font-bold border-b border-gray-600 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <div className="inline-block text-xs font-mono text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors">
                      {link}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-48 h-10 border border-gray-600 bg-gray-700 flex items-center justify-center">
              <span className="text-xs font-mono text-gray-400">INSTITUTION LOGOS</span>
            </div>
            <div className="text-xs font-mono text-gray-400 text-center md:text-right">
              © 2026 Recollection Wisconsin | Standard institutional footer
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}