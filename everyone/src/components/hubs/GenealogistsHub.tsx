import { useState } from 'react';
import { Filter, Users, FileText, Calendar, MapPin } from 'lucide-react';

interface GenealogistsHubProps {
  onFilterApply: (filters: Record<string, string>) => void;
  onBack: () => void;
}

export function GenealogistsHub({ onFilterApply, onBack }: GenealogistsHubProps) {
  const [selectedType, setSelectedType] = useState('immigration');
  const [selectedEra, setSelectedEra] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const recordTypes = [
    { id: 'immigration', label: 'Immigration & Naturalization', count: 3421 },
    { id: 'vital', label: 'Vital Records', count: 5672 },
    { id: 'census', label: 'Census Records', count: 8934 },
    { id: 'military', label: 'Military Service', count: 2156 },
    { id: 'land', label: 'Land & Property', count: 1892 },
    { id: 'church', label: 'Church Records', count: 1245 },
  ];

  const eras = [
    { id: 'pre-1850', label: 'Before 1850' },
    { id: '1850-1900', label: '1850–1900' },
    { id: '1900-1950', label: '1900–1950' },
    { id: '1950-2000', label: '1950–2000' },
  ];

  const regions = [
    { id: 'milwaukee', label: 'Milwaukee County' },
    { id: 'dane', label: 'Dane County' },
    { id: 'brown', label: 'Brown County' },
    { id: 'north', label: 'Northern Wisconsin' },
    { id: 'west', label: 'Western Wisconsin' },
    { id: 'statewide', label: 'Statewide' },
  ];

  const handleApplyFilters = () => {
    onFilterApply({
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
          For Genealogists
        </div>
        <h1 className="text-4xl font-serif text-neutral-900 mb-4">Trace Your Family Stories</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Search vital records, immigration documents, census data, and community archives to 
          discover your Wisconsin family history. All records include dates, names, locations, 
          and citation-ready references.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">23,320</div>
              <div className="text-sm text-neutral-600">Family Records</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-green-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">8,934</div>
              <div className="text-sm text-neutral-600">Census Records</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">1835–1990</div>
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
              <div className="text-2xl font-semibold text-neutral-900">72</div>
              <div className="text-sm text-neutral-600">Counties</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured resource */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-lg p-8 mb-12 text-white">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-3">
              Popular Resource
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              Getting Started with Wisconsin Family Research
            </h3>
            <p className="text-green-50 mb-4 max-w-2xl">
              A comprehensive guide to tracing your Wisconsin ancestors. Learn which records to 
              search first, how to interpret historical documents, and best practices for building 
              your family tree.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span>Free PDF guide</span>
              <span>•</span>
              <span>24 pages</span>
              <span>•</span>
              <span>Includes worksheets</span>
            </div>
          </div>
          <button className="px-6 py-3 bg-white text-green-800 font-medium rounded-lg hover:bg-green-50 transition-colors flex-shrink-0">
            Download Guide
          </button>
        </div>
      </div>

      {/* Filter section */}
      <div className="bg-white border border-neutral-200 rounded-lg p-8">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-5 h-5 text-neutral-600" />
          <h2 className="text-xl font-semibold text-neutral-900">Find Records by Name, Date & Location</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Record types */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-700 mb-3">
              Record Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {recordTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                    selectedType === type.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <span className={`font-medium text-sm ${selectedType === type.id ? 'text-blue-900' : 'text-neutral-700'}`}>
                    {type.label}
                  </span>
                  <span className={`text-xs ${selectedType === type.id ? 'text-blue-700' : 'text-neutral-500'}`}>
                    {type.count.toLocaleString()}
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
        </div>

        {/* Region */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 mb-3">
            Region or County <span className="text-neutral-500 font-normal">(optional)</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id === selectedRegion ? '' : region.id)}
                className={`p-3 rounded-lg border-2 transition-all text-left ${
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

        <button
          onClick={handleApplyFilters}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Search Family Records
        </button>

        <p className="text-sm text-neutral-600 mt-4 text-center">
          Tip: Start with census records to establish family locations, then explore vital records 
          and immigration documents.
        </p>
      </div>
    </div>
  );
}
