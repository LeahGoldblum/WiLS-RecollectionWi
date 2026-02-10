import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, Lightbulb, ExternalLink, Home as HomeIcon } from 'lucide-react';
import { EducatorSearchData } from '../App';
import { SynonymModal } from './SynonymModal';
import { SearchResults } from './SearchResults';

interface EducatorSearchProps {
  educatorData: EducatorSearchData;
  onBack: () => void;
  onHome: () => void;
}

export function EducatorSearch({ educatorData, onBack, onHome }: EducatorSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSynonymModal, setShowSynonymModal] = useState(false);
  const [synonymSuggestions, setSynonymSuggestions] = useState<string[]>([]);
  const [originalQuery, setOriginalQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [optimizedQuery, setOptimizedQuery] = useState('');
  const [filters, setFilters] = useState({
    mediaType: [] as string[],
    standards: false
  });

  // Synonym mapping for search suggestions
  const synonymMap: { [key: string]: string[] } = {
    'native american': ['First Nations', 'Ho-Chunk', 'Ojibwe', 'Menominee', 'Potawatomi', 'Indigenous peoples'],
    'native americans': ['First Nations', 'Ho-Chunk', 'Ojibwe', 'Menominee', 'Potawatomi', 'Indigenous peoples'],
    'indian': ['First Nations', 'Ho-Chunk', 'Indigenous peoples', 'Native American tribes'],
    'black': ['African American', 'Black history', 'African American history'],
    'eskimo': ['Inuit', 'Arctic peoples'],
    'pioneers': ['Settlers', 'Early Wisconsin residents', 'Homesteaders']
  };

  const handleSearch = () => {
    const lowerQuery = searchQuery.toLowerCase().trim();
    
    // Check if query matches any synonym triggers
    const matchedKey = Object.keys(synonymMap).find(key => 
      lowerQuery.includes(key)
    );

    if (matchedKey && !hasSearched) {
      // Show synonym modal
      setOriginalQuery(searchQuery);
      setSynonymSuggestions(synonymMap[matchedKey]);
      setShowSynonymModal(true);
    } else {
      // Perform search
      performSearch(searchQuery);
    }
  };

  const performSearch = (query: string) => {
    setOptimizedQuery(query);
    setHasSearched(true);
    setShowSynonymModal(false);
  };

  const handleSynonymSelection = (selectedTerm: string) => {
    setSearchQuery(selectedTerm);
    performSearch(selectedTerm);
  };

  const handleKeepOriginal = () => {
    performSearch(originalQuery);
  };

  const handleMediaTypeToggle = (type: string) => {
    setFilters(prev => ({
      ...prev,
      mediaType: prev.mediaType.includes(type)
        ? prev.mediaType.filter(t => t !== type)
        : [...prev.mediaType, type]
    }));
  };

  const buildDPLAUrl = () => {
    // Build DPLA search URL with parameters
    let url = `https://dp.la/search?q=${encodeURIComponent(optimizedQuery)}`;
    
    // Add partner filter for Wisconsin
    url += '&partner=Wisconsin';
    
    // Add media type filters
    if (filters.mediaType.length > 0) {
      filters.mediaType.forEach(type => {
        url += `&type=${encodeURIComponent(type)}`;
      });
    }
    
    return url;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b-4 border-black p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">RECOLLECTION WISCONSIN - EDUCATOR SEARCH</div>
          <div className="flex gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 hover:underline"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
            <button
              onClick={onHome}
              className="inline-flex items-center gap-2 hover:underline"
            >
              <HomeIcon className="w-5 h-5" />
              Home
            </button>
          </div>
        </div>
      </nav>

      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Search Context Banner */}
          <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-300">
            <p className="text-sm">
              <strong>Your Selection:</strong> Grade Level: <span className="font-semibold">{educatorData.gradeLevel}</span> | 
              Topic: <span className="font-semibold">{educatorData.topic}</span>
            </p>
          </div>

          {/* Search Box */}
          <div className="border-4 border-black p-8 bg-white mb-6">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">[STEP 2: SEARCH WITH INTERVENTION]</p>
              <h2 className="text-3xl font-bold mb-4">Search Wisconsin Collections</h2>
            </div>

            <div className="flex gap-3 mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Try: Native American, Ho-Chunk, Fur Trade, Immigration..."
                className="flex-1 border-2 border-gray-300 p-4 text-lg focus:border-black focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="px-8 py-4 bg-black text-white hover:bg-gray-800 font-semibold inline-flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>

            {/* Search Tips */}
            <div className="p-4 bg-yellow-50 border-2 border-yellow-300 flex gap-3">
              <Lightbulb className="w-5 h-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <p className="font-bold mb-1">Search Tips:</p>
                <p>Try typing "Native American" to see our synonym-aware suggestions. 
                We'll help you use more specific terms that match cataloging standards.</p>
              </div>
            </div>
          </div>

          {/* Filters */}
          {!hasSearched && (
            <div className="border-2 border-gray-300 p-6 bg-white mb-6">
              <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                <Filter className="w-6 h-6" />
                Refine Your Search
              </h3>

              <div className="space-y-4">
                {/* Media Type Filter */}
                <div>
                  <p className="font-semibold mb-2">Media Type</p>
                  <div className="flex flex-wrap gap-2">
                    {['Image', 'Text', 'Audio', 'Video'].map((type) => (
                      <button
                        key={type}
                        onClick={() => handleMediaTypeToggle(type)}
                        className={`border-2 px-4 py-2 text-sm font-semibold ${
                          filters.mediaType.includes(type)
                            ? 'border-black bg-blue-100'
                            : 'border-gray-300 bg-white hover:border-black'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Standards Filter */}
                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.standards}
                      onChange={(e) => setFilters(prev => ({ ...prev, standards: e.target.checked }))}
                      className="w-5 h-5"
                    />
                    <span className="font-semibold">Show only {educatorData.gradeLevel} Standards-aligned materials</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Search Results */}
          {hasSearched && (
            <SearchResults
              query={optimizedQuery}
              gradeLevel={educatorData.gradeLevel}
              topic={educatorData.topic}
              filters={filters}
              dplaUrl={buildDPLAUrl()}
            />
          )}
        </div>
      </div>

      {/* Synonym Modal */}
      {showSynonymModal && (
        <SynonymModal
          originalQuery={originalQuery}
          suggestions={synonymSuggestions}
          onSelectSynonym={handleSynonymSelection}
          onKeepOriginal={handleKeepOriginal}
          onClose={() => setShowSynonymModal(false)}
        />
      )}
    </div>
  );
}
