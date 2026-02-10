import { useState } from 'react';
import { Search, ArrowLeft, Filter, X } from 'lucide-react';

interface EducatorFlowProps {
  onBack: () => void;
}

type SearchState = 'initial' | 'synonym' | 'fuzzy' | 'filtered' | 'saved';

export function EducatorFlow({ onBack }: EducatorFlowProps) {
  const [searchState, setSearchState] = useState<SearchState>('initial');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    gradeLevel: '',
    mediaType: '',
    category: ''
  });
  const [showSaveModal, setShowSaveModal] = useState(false);

  const handleSearch = () => {
    if (searchTerm.toLowerCase().includes('native american')) {
      setSearchState('synonym');
    } else if (searchTerm.toLowerCase().includes('black')) {
      setSearchState('fuzzy');
    } else {
      setSearchState('filtered');
      setShowFilters(true);
    }
  };

  const handleApplyFilters = () => {
    setSearchState('filtered');
    setShowFilters(false);
  };

  const handleSave = () => {
    setShowSaveModal(true);
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="bg-white border-b-4 border-neutral-900 p-6">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 border-4 border-neutral-900 px-4 py-2 bg-white hover:bg-neutral-900 hover:text-white transition-colors font-bold mb-4"
          >
            <ArrowLeft size={20} />
            BACK TO HOME
          </button>
          <div className="border-4 border-neutral-900 px-6 py-3 bg-neutral-200 inline-block">
            <h1 className="text-2xl font-bold">SEARCH RESULTS</h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        {/* Search Bar */}
        <div className="border-4 border-neutral-900 bg-white p-6 mb-6">
          <div className="flex gap-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search for "Ho-Chunk" or "First Nations"'
              className="flex-1 border-4 border-neutral-900 px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-neutral-400"
            />
            <button
              onClick={handleSearch}
              className="border-4 border-neutral-900 px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors font-bold flex items-center gap-2"
            >
              <Search size={20} />
              SEARCH
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="border-4 border-neutral-900 px-6 py-3 bg-white hover:bg-neutral-200 transition-colors font-bold flex items-center gap-2"
            >
              <Filter size={20} />
              FILTERS
            </button>
          </div>
        </div>

        {/* Synonym Suggestion */}
        {searchState === 'synonym' && (
          <div className="border-4 border-neutral-900 bg-yellow-100 p-6 mb-6">
            <p className="font-bold text-lg mb-2">Did you mean?</p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSearchTerm('Ho-Chunk');
                  setSearchState('filtered');
                }}
                className="border-4 border-neutral-900 px-6 py-2 bg-white hover:bg-neutral-900 hover:text-white transition-colors font-bold"
              >
                Ho-Chunk
              </button>
              <button
                onClick={() => {
                  setSearchTerm('First Nations');
                  setSearchState('filtered');
                }}
                className="border-4 border-neutral-900 px-6 py-2 bg-white hover:bg-neutral-900 hover:text-white transition-colors font-bold"
              >
                First Nations
              </button>
              <button
                onClick={() => {
                  setSearchTerm('Indigenous Peoples');
                  setSearchState('filtered');
                }}
                className="border-4 border-neutral-900 px-6 py-2 bg-white hover:bg-neutral-900 hover:text-white transition-colors font-bold"
              >
                Indigenous Peoples
              </button>
            </div>
          </div>
        )}

        {/* Fuzzy Search Categories */}
        {searchState === 'fuzzy' && (
          <div className="border-4 border-neutral-900 bg-yellow-100 p-6 mb-6">
            <p className="font-bold text-lg mb-3">Your search is broad. Please select a category:</p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSelectedFilters({ ...selectedFilters, category: 'Historical Figures' });
                  setSearchState('filtered');
                }}
                className="border-4 border-neutral-900 px-6 py-3 bg-white hover:bg-neutral-900 hover:text-white transition-colors font-bold"
              >
                HISTORICAL FIGURES
              </button>
              <button
                onClick={() => {
                  setSelectedFilters({ ...selectedFilters, category: 'General Topics' });
                  setSearchState('filtered');
                }}
                className="border-4 border-neutral-900 px-6 py-3 bg-white hover:bg-neutral-900 hover:text-white transition-colors font-bold"
              >
                GENERAL TOPICS
              </button>
            </div>
          </div>
        )}

        {/* Filters Panel */}
        {showFilters && (
          <div className="border-4 border-neutral-900 bg-white p-6 mb-6">
            <h3 className="font-bold text-lg mb-4 uppercase">Filter Your Results</h3>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block font-bold mb-2 text-sm uppercase">Grade Level</label>
                <select
                  value={selectedFilters.gradeLevel}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, gradeLevel: e.target.value })}
                  className="w-full border-4 border-neutral-900 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-neutral-400"
                >
                  <option value="">All Grades</option>
                  <option value="K-4">K-4 Standards</option>
                  <option value="5-8">5-8 Standards</option>
                  <option value="9-12">9-12 Standards</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-2 text-sm uppercase">Media Type</label>
                <select
                  value={selectedFilters.mediaType}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, mediaType: e.target.value })}
                  className="w-full border-4 border-neutral-900 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-neutral-400"
                >
                  <option value="">All Media</option>
                  <option value="Image">Image</option>
                  <option value="Video">Video</option>
                  <option value="Audio">Audio</option>
                  <option value="Document">Document</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-2 text-sm uppercase">Subject Area</label>
                <select
                  className="w-full border-4 border-neutral-900 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-neutral-400"
                >
                  <option value="">All Subjects</option>
                  <option value="History">History</option>
                  <option value="Culture">Culture</option>
                  <option value="Art">Art</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleApplyFilters}
              className="border-4 border-neutral-900 px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors font-bold"
            >
              APPLY FILTERS
            </button>
          </div>
        )}

        {/* Active Filters */}
        {(selectedFilters.gradeLevel || selectedFilters.mediaType || selectedFilters.category) && (
          <div className="border-4 border-neutral-900 bg-white p-4 mb-6">
            <p className="font-bold mb-2 text-sm uppercase">Active Filters:</p>
            <div className="flex gap-2 flex-wrap">
              {selectedFilters.gradeLevel && (
                <span className="border-2 border-neutral-900 px-3 py-1 bg-neutral-200 text-sm font-bold flex items-center gap-2">
                  {selectedFilters.gradeLevel}
                  <X size={14} className="cursor-pointer" onClick={() => setSelectedFilters({ ...selectedFilters, gradeLevel: '' })} />
                </span>
              )}
              {selectedFilters.mediaType && (
                <span className="border-2 border-neutral-900 px-3 py-1 bg-neutral-200 text-sm font-bold flex items-center gap-2">
                  {selectedFilters.mediaType}
                  <X size={14} className="cursor-pointer" onClick={() => setSelectedFilters({ ...selectedFilters, mediaType: '' })} />
                </span>
              )}
              {selectedFilters.category && (
                <span className="border-2 border-neutral-900 px-3 py-1 bg-neutral-200 text-sm font-bold flex items-center gap-2">
                  {selectedFilters.category}
                  <X size={14} className="cursor-pointer" onClick={() => setSelectedFilters({ ...selectedFilters, category: '' })} />
                </span>
              )}
            </div>
          </div>
        )}

        {/* Search Results */}
        {(searchState === 'filtered' || searchState === 'saved') && (
          <div className="space-y-4">
            <div className="border-4 border-neutral-900 bg-white p-6 mb-2">
              <p className="font-bold mb-4">SHOWING 12 RESULTS</p>
            </div>

            {[1, 2, 3].map((item) => (
              <div key={item} className="border-4 border-neutral-900 bg-white p-6 hover:bg-neutral-50 transition-colors">
                <div className="flex gap-6">
                  <div className="w-48 h-48 border-4 border-neutral-900 bg-neutral-200 flex-shrink-0 flex items-center justify-center">
                    <p className="text-neutral-500 font-bold">IMAGE</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">Ho-Chunk Cultural Artifact #{item}</h3>
                    <p className="text-sm mb-3">
                      <span className="border-2 border-neutral-900 px-2 py-1 bg-neutral-100 mr-2 inline-block">K-4 Standards</span>
                      <span className="border-2 border-neutral-900 px-2 py-1 bg-neutral-100 mr-2 inline-block">Image</span>
                      <span className="border-2 border-neutral-900 px-2 py-1 bg-neutral-100 inline-block">Cultural History</span>
                    </p>
                    <p className="mb-4">
                      Description of the cultural artifact and its historical significance to the Ho-Chunk Nation. This resource includes educational context suitable for K-4 learners.
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={handleSave}
                        className="border-4 border-neutral-900 px-6 py-2 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors font-bold"
                      >
                        SAVE TO LESSON PLAN
                      </button>
                      <button className="border-4 border-neutral-900 px-6 py-2 bg-white hover:bg-neutral-200 transition-colors font-bold">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Save Confirmation Modal */}
        {showSaveModal && (
          <div className="fixed inset-0 bg-neutral-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="border-4 border-neutral-900 bg-white p-8 max-w-md w-full">
              <div className="w-16 h-16 border-4 border-neutral-900 bg-green-300 mx-auto mb-4 flex items-center justify-center">
                <p className="text-2xl">✓</p>
              </div>
              <h3 className="font-bold text-2xl mb-3 text-center">SAVED!</h3>
              <p className="text-center mb-6">
                This resource has been added to your lesson plan. You can access it from your dashboard.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowSaveModal(false)}
                  className="flex-1 border-4 border-neutral-900 px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors font-bold"
                >
                  CONTINUE SEARCHING
                </button>
                <button
                  className="flex-1 border-4 border-neutral-900 px-6 py-3 bg-white hover:bg-neutral-200 transition-colors font-bold"
                >
                  VIEW LESSON PLAN
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
