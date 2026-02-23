import { useState } from 'react';
import { Filter, BookMarked, Download, Award, Clock } from 'lucide-react';

interface EducatorsHubProps {
  onFilterApply: (filters: Record<string, string>) => void;
  onBack: () => void;
}

export function EducatorsHub({ onFilterApply, onBack }: EducatorsHubProps) {
  const [selectedTopic, setSelectedTopic] = useState('immigration');
  const [selectedGrade, setSelectedGrade] = useState('middle');
  const [selectedEra, setSelectedEra] = useState('');

  const topics = [
    { id: 'immigration', label: 'Immigration & Migration', count: 47 },
    { id: 'indigenous', label: 'Indigenous Peoples', count: 32 },
    { id: 'industry', label: 'Industry & Labor', count: 28 },
    { id: 'civil-rights', label: 'Civil Rights', count: 19 },
    { id: 'agriculture', label: 'Agriculture & Farming', count: 41 },
  ];

  const gradeLevels = [
    { id: 'elementary', label: 'Elementary (K–5)' },
    { id: 'middle', label: 'Middle School (6–8)' },
    { id: 'high', label: 'High School (9–12)' },
  ];

  const eras = [
    { id: 'pre-1800', label: 'Before 1800' },
    { id: '1800-1860', label: '1800–1860' },
    { id: '1860-1920', label: '1860–1920' },
    { id: '1920-1970', label: '1920–1970' },
    { id: '1970-present', label: '1970–Present' },
  ];

  const handleApplyFilters = () => {
    onFilterApply({
      topic: selectedTopic,
      grade: selectedGrade,
      era: selectedEra,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
          For Educators
        </div>
        <h1 className="text-4xl font-serif text-neutral-900 mb-4">Classroom-Ready Resources</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Discover lesson plans, primary source sets, and downloadable materials curated for 
          Wisconsin history education. All resources include citations and educational context 
          aligned with state standards.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookMarked className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">208</div>
              <div className="text-sm text-neutral-600">Lesson Plans</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Download className="w-5 h-5 text-green-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">1,247</div>
              <div className="text-sm text-neutral-600">Primary Sources</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">23</div>
              <div className="text-sm text-neutral-600">Standards Aligned</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-purple-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">Ready</div>
              <div className="text-sm text-neutral-600">Use Tomorrow</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured lesson spotlight */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 mb-12 text-white">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-3">
              Curated for Classroom Use
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              Immigrant Voices: Wisconsin in the Late 19th Century
            </h3>
            <p className="text-blue-50 mb-4 max-w-2xl">
              A comprehensive lesson plan with 12 primary sources exploring immigration patterns. 
              Includes complete teacher guide, student worksheets, and assessment rubric.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <BookMarked className="w-4 h-4" />
                Middle School
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                2–3 periods
              </span>
              <span>247 downloads this month</span>
            </div>
          </div>
          <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors flex-shrink-0">
            Preview Resource
          </button>
        </div>
      </div>

      {/* Filter section */}
      <div className="bg-white border border-neutral-200 rounded-lg p-8 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-5 h-5 text-neutral-600" />
          <h2 className="text-xl font-semibold text-neutral-900">Filter by Topic & Grade Level</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Topics */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-3">
              Historical Topic
            </label>
            <div className="space-y-2">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                    selectedTopic === topic.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <span className={`font-medium text-sm ${selectedTopic === topic.id ? 'text-blue-900' : 'text-neutral-700'}`}>
                    {topic.label}
                  </span>
                  <span className={`text-xs ${selectedTopic === topic.id ? 'text-blue-700' : 'text-neutral-500'}`}>
                    {topic.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Grade levels */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-3">
              Grade Level
            </label>
            <div className="space-y-2">
              {gradeLevels.map((grade) => (
                <button
                  key={grade.id}
                  onClick={() => setSelectedGrade(grade.id)}
                  className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                    selectedGrade === grade.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <span className={`font-medium text-sm ${selectedGrade === grade.id ? 'text-blue-900' : 'text-neutral-700'}`}>
                    {grade.label}
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

        <button
          onClick={handleApplyFilters}
          className="w-full mt-6 bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          View Matching Resources
        </button>
      </div>
    </div>
  );
}
