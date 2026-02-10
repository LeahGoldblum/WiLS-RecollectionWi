import { useState } from 'react';
import { Filter, Database, FileText, Calendar, MapPin } from 'lucide-react';

interface ResearchersHubProps {
  onFilterApply: (filters: Record<string, string>) => void;
  onBack: () => void;
}

export function ResearchersHub({ onFilterApply, onBack }: ResearchersHubProps) {
  const [selectedTopic, setSelectedTopic] = useState('immigration');
  const [selectedType, setSelectedType] = useState('');
  const [selectedEra, setSelectedEra] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const topics = [
    { id: 'immigration', label: 'Immigration & Migration' },
    { id: 'indigenous', label: 'Indigenous History' },
    { id: 'politics', label: 'Political History' },
    { id: 'economics', label: 'Economic History' },
    { id: 'social', label: 'Social Movements' },
  ];

  const types = [
    { id: 'manuscripts', label: 'Manuscripts & Letters' },
    { id: 'government', label: 'Government Records' },
    { id: 'newspapers', label: 'Newspapers & Periodicals' },
    { id: 'photographs', label: 'Photographs' },
    { id: 'maps', label: 'Maps & Cartography' },
  ];

  const eras = [
    { id: 'pre-1800', label: 'Before 1800' },
    { id: '1800-1860', label: '1800–1860' },
    { id: '1860-1920', label: '1860–1920' },
    { id: '1920-1970', label: '1920–1970' },
    { id: '1970-present', label: '1970–Present' },
  ];

  const regions = [
    { id: 'milwaukee', label: 'Milwaukee Area' },
    { id: 'madison', label: 'Madison Area' },
    { id: 'north', label: 'Northern Wisconsin' },
    { id: 'west', label: 'Western Wisconsin' },
    { id: 'statewide', label: 'Statewide' },
  ];

  const handleApplyFilters = () => {
    onFilterApply({
      topic: selectedTopic,
      type: selectedType,
      era: selectedEra,
      region: selectedRegion,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
          For Researchers
        </div>
        <h1 className="text-4xl font-serif text-neutral-900 mb-4">Academic Research Collections</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Access metadata-rich archival materials, manuscripts, and historical documents for 
          scholarly research. All items include detailed provenance, full citations, and 
          downloadable high-resolution files.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Database className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">12,847</div>
              <div className="text-sm text-neutral-600">Digitized Items</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-green-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">342</div>
              <div className="text-sm text-neutral-600">Collections</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">1820–2020</div>
              <div className="text-sm text-neutral-600">Date Range</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-purple-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">67</div>
              <div className="text-sm text-neutral-600">Partner Archives</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured collection */}
      <div className="bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-lg p-8 mb-12 text-white">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-3">
              Featured Collection
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              Wisconsin Immigration Records, 1850–1920
            </h3>
            <p className="text-neutral-200 mb-4 max-w-2xl">
              Comprehensive collection of passenger manifests, naturalization records, and census 
              data documenting European immigration to Wisconsin. Includes full metadata and 
              searchable transcriptions.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span>3,421 documents</span>
              <span>•</span>
              <span>Milwaukee & Green Bay ports</span>
              <span>•</span>
              <span>High-resolution scans</span>
            </div>
          </div>
          <button className="px-6 py-3 bg-white text-neutral-800 font-medium rounded-lg hover:bg-neutral-100 transition-colors flex-shrink-0">
            Browse Collection
          </button>
        </div>
      </div>

      {/* Filter section */}
      <div className="bg-white border border-neutral-200 rounded-lg p-8">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-5 h-5 text-neutral-600" />
          <h2 className="text-xl font-semibold text-neutral-900">Search Metadata-Rich Archives</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Topics */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-3">
              Research Topic
            </label>
            <div className="space-y-2">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                    selectedTopic === topic.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <span className={`font-medium text-sm ${selectedTopic === topic.id ? 'text-blue-900' : 'text-neutral-700'}`}>
                    {topic.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Collection type */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-3">
              Collection Type <span className="text-neutral-500 font-normal">(optional)</span>
            </label>
            <div className="space-y-2">
              {types.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id === selectedType ? '' : type.id)}
                  className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                    selectedType === type.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <span className={`font-medium text-sm ${selectedType === type.id ? 'text-blue-900' : 'text-neutral-700'}`}>
                    {type.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Time period */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-3">
              Time Period <span className="text-neutral-500 font-normal">(optional)</span>
            </label>
            <div className="space-y-2">
              {eras.map((era) => (
                <button
                  key={era.id}
                  onClick={() => setSelectedEra(era.id === selectedEra ? '' : era.id)}
                  className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                    selectedEra === era.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <span className={`font-medium text-sm ${selectedEra === era.id ? 'text-blue-900' : 'text-neutral-700'}`}>
                    {era.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Region */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-3">
              Region <span className="text-neutral-500 font-normal">(optional)</span>
            </label>
            <div className="space-y-2">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id === selectedRegion ? '' : region.id)}
                  className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                    selectedRegion === region.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <span className={`font-medium text-sm ${selectedRegion === region.id ? 'text-blue-900' : 'text-neutral-700'}`}>
                    {region.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleApplyFilters}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Search Archives
        </button>
      </div>
    </div>
  );
}
