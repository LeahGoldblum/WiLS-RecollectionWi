import React from 'react';
import { AlertCircle, X } from 'lucide-react';

interface SynonymModalProps {
  originalQuery: string;
  suggestions: string[];
  onSelectSynonym: (synonym: string) => void;
  onKeepOriginal: () => void;
  onClose: () => void;
}

export function SynonymModal({
  originalQuery,
  suggestions,
  onSelectSynonym,
  onKeepOriginal,
  onClose
}: SynonymModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white border-4 border-black max-w-2xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:bg-gray-100 p-2"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Improve Your Search Results</h2>
              <p className="text-gray-700">
                We noticed you searched for "<span className="font-semibold">{originalQuery}</span>". 
                For better results, consider using more specific terms that match how materials are cataloged.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 p-4 bg-yellow-50 border-2 border-yellow-300">
          <p className="text-sm">
            <strong>Why this matters:</strong> Historical collections often use specific tribal names 
            or updated terminology. Using these terms helps you find exactly what you're looking for.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold mb-3">Suggested Search Terms:</h3>
          <div className="space-y-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => onSelectSynonym(suggestion)}
                className="w-full border-2 border-gray-300 p-4 text-left hover:border-black hover:bg-blue-50 transition-all"
              >
                <span className="font-semibold">{suggestion}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t-2 border-gray-200">
          <button
            onClick={onKeepOriginal}
            className="text-sm hover:underline text-gray-600"
          >
            Continue with "{originalQuery}"
          </button>

          <button
            onClick={onClose}
            className="border-2 border-black px-6 py-2 bg-white hover:bg-gray-100 font-semibold"
          >
            Close
          </button>
        </div>

        {/* Wireframe note */}
        <div className="mt-6 pt-4 border-t-2 border-gray-200 text-xs text-gray-600 text-center">
          [INTERVENTION MODAL - Pre-Search Guidance to optimize DPLA backend results]
        </div>
      </div>
    </div>
  );
}
