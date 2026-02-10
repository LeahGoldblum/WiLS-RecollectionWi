import { useState } from 'react';
import { Filter, Sparkles, Heart, Compass, Layers } from 'lucide-react';

interface LearnersHubProps {
  onFilterApply: (filters: Record<string, string>) => void;
  onBack: () => void;
}

export function LearnersHub({ onFilterApply, onBack }: LearnersHubProps) {
  const [selectedInterest, setSelectedInterest] = useState('immigration');
  const [selectedFormat, setSelectedFormat] = useState('');

  const interests = [
    { id: 'immigration', label: 'Immigration Stories', icon: '🌍', desc: 'How people came to Wisconsin' },
    { id: 'indigenous', label: 'First Peoples', icon: '🪶', desc: 'Native nations and heritage' },
    { id: 'industry', label: 'Work & Innovation', icon: '⚙️', desc: 'Manufacturing and invention' },
    { id: 'arts', label: 'Arts & Culture', icon: '🎨', desc: 'Music, art, and literature' },
    { id: 'nature', label: 'Land & Environment', icon: '🌲', desc: 'Conservation and natural beauty' },
    { id: 'community', label: 'Community Life', icon: '🏘️', desc: 'Towns, celebrations, daily life' },
  ];

  const formats = [
    { id: 'exhibits', label: 'Digital Exhibits', desc: 'Curated visual stories' },
    { id: 'collections', label: 'Themed Collections', desc: 'Groups of related items' },
    { id: 'photos', label: 'Historic Photos', desc: 'Browse by image' },
    { id: 'stories', label: 'Personal Stories', desc: 'First-hand accounts' },
  ];

  const handleApplyFilters = () => {
    onFilterApply({
      interest: selectedInterest,
      format: selectedFormat,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
          For Lifelong Learners
        </div>
        <h1 className="text-4xl font-serif text-neutral-900 mb-4">Explore by Curiosity</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Discover Wisconsin's stories through curated exhibits, themed collections, and visual 
          explorations. No research experience needed—just curiosity and a love of history.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">47</div>
              <div className="text-sm text-neutral-600">Digital Exhibits</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Compass className="w-5 h-5 text-green-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">156</div>
              <div className="text-sm text-neutral-600">Themed Tours</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">New</div>
              <div className="text-sm text-neutral-600">Weekly Additions</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-purple-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">Save</div>
              <div className="text-sm text-neutral-600">Your Favorites</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured exhibit */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-800 rounded-lg p-8 mb-12 text-white">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-3">
              Featured Digital Exhibit
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              Wisconsin's Immigrant Neighborhoods: Then & Now
            </h3>
            <p className="text-purple-50 mb-4 max-w-2xl">
              Explore historic photographs of immigrant communities in Milwaukee, Madison, and 
              Green Bay—paired with modern images showing how these neighborhoods evolved. 
              Interactive maps and personal stories bring the past to life.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span>45 historic photos</span>
              <span>•</span>
              <span>Interactive maps</span>
              <span>•</span>
              <span>~20 minute experience</span>
            </div>
          </div>
          <button className="px-6 py-3 bg-white text-purple-800 font-medium rounded-lg hover:bg-purple-50 transition-colors flex-shrink-0">
            Explore Exhibit
          </button>
        </div>
      </div>

      {/* Browse by interest */}
      <div className="bg-white border border-neutral-200 rounded-lg p-8 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-5 h-5 text-neutral-600" />
          <h2 className="text-xl font-semibold text-neutral-900">Browse by Your Interest</h2>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 mb-3">
            What interests you most?
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {interests.map((interest) => (
              <button
                key={interest.id}
                onClick={() => setSelectedInterest(interest.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedInterest === interest.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="text-2xl mb-2">{interest.icon}</div>
                <div className={`font-medium mb-1 ${selectedInterest === interest.id ? 'text-blue-900' : 'text-neutral-900'}`}>
                  {interest.label}
                </div>
                <div className="text-xs text-neutral-600">{interest.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 mb-3">
            How do you like to explore? <span className="text-neutral-500 font-normal">(optional)</span>
          </label>
          <div className="grid md:grid-cols-4 gap-3">
            {formats.map((format) => (
              <button
                key={format.id}
                onClick={() => setSelectedFormat(format.id === selectedFormat ? '' : format.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedFormat === format.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className={`font-medium text-sm mb-1 ${selectedFormat === format.id ? 'text-blue-900' : 'text-neutral-900'}`}>
                  {format.label}
                </div>
                <div className="text-xs text-neutral-600">{format.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleApplyFilters}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Show Me Content
        </button>
      </div>

      {/* Popular topics */}
      <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-6">
        <h3 className="font-semibold text-neutral-900 mb-4">Popular This Month</h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-white border border-neutral-300 rounded-full text-sm text-neutral-700 hover:border-blue-600 hover:text-blue-700 transition-colors">
            Women's History
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-300 rounded-full text-sm text-neutral-700 hover:border-blue-600 hover:text-blue-700 transition-colors">
            Wisconsin Breweries
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-300 rounded-full text-sm text-neutral-700 hover:border-blue-600 hover:text-blue-700 transition-colors">
            Railroad History
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-300 rounded-full text-sm text-neutral-700 hover:border-blue-600 hover:text-blue-700 transition-colors">
            Great Lakes Ships
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-300 rounded-full text-sm text-neutral-700 hover:border-blue-600 hover:text-blue-700 transition-colors">
            Farm Life 1900s
          </button>
        </div>
      </div>
    </div>
  );
}
