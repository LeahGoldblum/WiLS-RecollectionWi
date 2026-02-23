import React from 'react';

export function SearchPreview() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 bg-white border-2 border-gray-300 shadow-lg z-50 p-5">
      <h4 className="text-sm font-mono text-gray-900 font-bold mb-3 pb-2 border-b border-gray-200">
        Search Collections
      </h4>
      <p className="text-xs font-mono text-gray-600 mb-4 leading-relaxed">
        Search across Wisconsin's digital cultural heritage collections powered by DPLA
      </p>
      <ul className="space-y-2">
        <li className="text-xs font-mono text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition-colors py-1">
          Advanced Search
        </li>
        <li className="text-xs font-mono text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition-colors py-1">
          Search Tips & Help
        </li>
        <li className="text-xs font-mono text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition-colors py-1">
          Popular Searches
        </li>
        <li className="text-xs font-mono text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition-colors py-1">
          Browse by Topic
        </li>
      </ul>
    </div>
  );
}
