import React from 'react';

export function AboutPreview() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 bg-white border-2 border-gray-300 shadow-lg z-50 p-5">
      <h4 className="text-sm font-mono text-gray-900 font-bold mb-3 pb-2 border-b border-gray-200">
        About Us
      </h4>
      <p className="text-xs font-mono text-gray-600 mb-4 leading-relaxed">
        Learn about our mission to preserve and share Wisconsin's cultural heritage
      </p>
      <ul className="space-y-2">
        <li className="text-xs font-mono text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition-colors py-1">
          Our Mission
        </li>
        <li className="text-xs font-mono text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition-colors py-1">
          Partner Institutions
        </li>
        <li className="text-xs font-mono text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition-colors py-1">
          News & Updates
        </li>
        <li className="text-xs font-mono text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition-colors py-1">
          Contact Us
        </li>
      </ul>
    </div>
  );
}
