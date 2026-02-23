import React from 'react';

export function CollectionsPreview() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 bg-white border-2 border-gray-300 shadow-lg z-50 p-5">
      <h4 className="text-sm font-mono text-gray-900 font-bold mb-3 pb-2 border-b border-gray-200">
        Collections & Stories
      </h4>
      <p className="text-xs font-mono text-gray-600 mb-4 leading-relaxed">
        Explore curated collections and digital exhibits from Wisconsin institutions
      </p>
      <ul className="space-y-2">
        <li className="text-xs font-mono text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition-colors py-1">
          Featured Collections
        </li>
        <li className="text-xs font-mono text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition-colors py-1">
          Digital Exhibits
        </li>
        <li className="text-xs font-mono text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition-colors py-1">
          Community Stories
        </li>
        <li className="text-xs font-mono text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition-colors py-1">
          Browse All Collections
        </li>
      </ul>
    </div>
  );
}
