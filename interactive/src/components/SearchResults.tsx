import React, { useState } from 'react';
import { ExternalLink, BookmarkPlus, CheckCircle, Image as ImageIcon, FileText } from 'lucide-react';
import { SaveConfirmationModal } from './SaveConfirmationModal';

interface SearchResultsProps {
  query: string;
  gradeLevel: string;
  topic: string;
  filters: {
    mediaType: string[];
    standards: boolean;
  };
  dplaUrl: string;
}

interface MockResult {
  id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  source: string;
  thumbnailUrl: string;
  standardsAligned?: boolean;
}

export function SearchResults({ query, gradeLevel, topic, filters, dplaUrl }: SearchResultsProps) {
  const [savedItems, setSavedItems] = useState<string[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [lastSavedTitle, setLastSavedTitle] = useState('');

  // Mock search results based on query
  const getMockResults = (): MockResult[] => {
    const baseResults: MockResult[] = [
      {
        id: '1',
        title: 'Ho-Chunk Nation Powwow, Wisconsin Dells, 1952',
        description: 'Photograph of traditional Ho-Chunk dancers at annual gathering in Wisconsin Dells.',
        date: '1952',
        type: 'Image',
        source: 'Wisconsin Historical Society',
        thumbnailUrl: 'placeholder-1',
        standardsAligned: true
      },
      {
        id: '2',
        title: 'Treaty Rights and the Ho-Chunk People',
        description: 'Educational document explaining treaty relationships between Ho-Chunk Nation and U.S. government.',
        date: '1969',
        type: 'Text',
        source: 'University of Wisconsin-Madison Libraries',
        thumbnailUrl: 'placeholder-2',
        standardsAligned: true
      },
      {
        id: '3',
        title: 'First Nations Trade Routes Map, 1800s',
        description: 'Historical map showing Indigenous trade networks across Wisconsin and Great Lakes region.',
        date: '1845',
        type: 'Image',
        source: 'Milwaukee Public Museum',
        thumbnailUrl: 'placeholder-3',
        standardsAligned: true
      },
      {
        id: '4',
        title: 'Oral History: Ho-Chunk Elder Interview',
        description: 'Audio recording of community elder discussing traditional practices and history.',
        date: '1987',
        type: 'Audio',
        source: 'Wisconsin Tribal Preservation Office',
        thumbnailUrl: 'placeholder-4',
        standardsAligned: false
      },
      {
        id: '5',
        title: 'Indigenous Farming Techniques in Wisconsin',
        description: 'Illustrated guide showing traditional agricultural methods used by Wisconsin tribes.',
        date: '1923',
        type: 'Text',
        source: 'Wisconsin Agricultural Museum',
        thumbnailUrl: 'placeholder-5',
        standardsAligned: true
      },
      {
        id: '6',
        title: 'Menominee Nation Basketweaving Demonstration',
        description: 'Photograph series documenting traditional basketweaving techniques.',
        date: '1965',
        type: 'Image',
        source: 'Menominee Cultural Museum',
        thumbnailUrl: 'placeholder-6',
        standardsAligned: true
      }
    ];

    // Filter by media type if specified
    let results = baseResults;
    if (filters.mediaType.length > 0) {
      results = results.filter(r => filters.mediaType.includes(r.type));
    }

    // Filter by standards if specified
    if (filters.standards) {
      results = results.filter(r => r.standardsAligned);
    }

    return results;
  };

  const mockResults = getMockResults();

  const handleSave = (item: MockResult) => {
    setSavedItems(prev => [...prev, item.id]);
    setLastSavedTitle(item.title);
    setShowConfirmation(true);
  };

  const handleOpenDPLA = () => {
    window.open(dplaUrl, '_blank');
  };

  return (
    <div>
      {/* Results Header */}
      <div className="border-4 border-black p-6 bg-white mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">[STEP 4: HANDOFF TO DPLA]</p>
            <h2 className="text-2xl font-bold mb-2">
              Search Results: "{query}"
            </h2>
            <p className="text-gray-700">
              {mockResults.length} results found | Grade Level: {gradeLevel} | Topic: {topic}
            </p>
          </div>
        </div>

        {/* DPLA Handoff Button */}
        <div className="p-4 bg-blue-50 border-2 border-blue-300">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm mb-2">
                <strong>Ready to explore more?</strong> These results are a preview. 
                Search the full DPLA (Digital Public Library of America) database for complete Wisconsin collections.
              </p>
              <p className="text-xs text-gray-600">
                Opens in new tab with optimized search query: "{query}"
              </p>
            </div>
            <button
              onClick={handleOpenDPLA}
              className="px-6 py-3 bg-black text-white hover:bg-gray-800 font-semibold inline-flex items-center gap-2 whitespace-nowrap"
            >
              <ExternalLink className="w-5 h-5" />
              Search DPLA
            </button>
          </div>
        </div>
      </div>

      {/* Mock Results Grid */}
      <div className="space-y-4">
        <p className="text-sm text-gray-600 mb-4">
          [MOCK RESULTS - Preview of what educators would see before DPLA handoff]
        </p>

        {mockResults.map((result) => {
          const isSaved = savedItems.includes(result.id);

          return (
            <div
              key={result.id}
              className="border-2 border-gray-300 p-6 bg-white hover:border-black transition-all"
            >
              <div className="flex gap-4">
                {/* Thumbnail placeholder */}
                <div className="w-32 h-32 bg-gray-200 border-2 border-gray-300 flex-shrink-0 flex items-center justify-center">
                  {result.type === 'Image' ? (
                    <ImageIcon className="w-12 h-12 text-gray-400" />
                  ) : (
                    <FileText className="w-12 h-12 text-gray-400" />
                  )}
                  <span className="sr-only">Thumbnail</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{result.title}</h3>
                    {result.standardsAligned && (
                      <span className="px-3 py-1 bg-green-100 border border-green-400 text-xs font-semibold whitespace-nowrap ml-4">
                        {gradeLevel} Standards
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-700 mb-3">{result.description}</p>
                  
                  <div className="flex gap-4 text-sm text-gray-600 mb-4">
                    <span>📅 {result.date}</span>
                    <span>📁 {result.type}</span>
                    <span>🏛️ {result.source}</span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleSave(result)}
                      disabled={isSaved}
                      className={`px-4 py-2 font-semibold inline-flex items-center gap-2 ${
                        isSaved
                          ? 'bg-green-100 border-2 border-green-400 text-green-700'
                          : 'bg-white border-2 border-black hover:bg-gray-100'
                      }`}
                    >
                      {isSaved ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Saved to Lesson Plan
                        </>
                      ) : (
                        <>
                          <BookmarkPlus className="w-4 h-4" />
                          Save to Lesson Plan
                        </>
                      )}
                    </button>

                    <button className="px-4 py-2 border-2 border-gray-300 hover:border-black font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* No results message */}
      {mockResults.length === 0 && (
        <div className="border-2 border-gray-300 p-12 bg-white text-center">
          <p className="text-xl text-gray-600 mb-4">
            No results match your current filters.
          </p>
          <p className="text-sm text-gray-500">
            Try adjusting your media type or standards filters, or search DPLA for more options.
          </p>
        </div>
      )}

      {/* Success Modal */}
      {showConfirmation && (
        <SaveConfirmationModal
          itemTitle={lastSavedTitle}
          savedCount={savedItems.length}
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
}
