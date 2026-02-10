import { useState } from 'react';
import { ArrowLeft, Filter, BookMarked, Download, Search } from 'lucide-react';

interface EducatorsHubProps {
  onFilterApply: (topic: string, grade: string) => void;
  onBack: () => void;
}

export function EducatorsHub({ onFilterApply, onBack }: EducatorsHubProps) {
  const [selectedTopic, setSelectedTopic] = useState('immigration');
  const [selectedGrade, setSelectedGrade] = useState('middle');

  const topics = [
    { id: 'immigration', label: 'Immigration & Migration', count: 47 },
    { id: 'indigenous', label: 'Indigenous Peoples', count: 32 },
    { id: 'industry', label: 'Industry & Labor', count: 28 },
    { id: 'civil-rights', label: 'Civil Rights', count: 19 },
    { id: 'agriculture', label: 'Agriculture & Farming', count: 41 },
  ];

  const gradeLevels = [
    { id: 'elementary', label: 'Elementary (K–5)', count: 89 },
    { id: 'middle', label: 'Middle School (6–8)', count: 67 },
    { id: 'high', label: 'High School (9–12)', count: 52 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Homepage
      </button>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-semibold text-neutral-900 mb-3">Educator Resources</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          Classroom-ready lesson plans, primary source sets, and downloadable materials 
          curated for Wisconsin history education. All resources include citations and 
          educational context.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookMarked className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">208</div>
              <div className="text-sm text-neutral-600">Lesson Plans</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Download className="w-5 h-5 text-green-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">1,247</div>
              <div className="text-sm text-neutral-600">Downloadable Items</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Filter className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">23</div>
              <div className="text-sm text-neutral-600">Thematic Collections</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter section */}
      <div className="bg-white border border-neutral-200 rounded-lg p-8 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Search className="w-5 h-5 text-neutral-600" />
          <h2 className="text-xl font-semibold text-neutral-900">Find Resources by Topic & Grade Level</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                  <span className={`font-medium ${selectedTopic === topic.id ? 'text-blue-900' : 'text-neutral-700'}`}>
                    {topic.label}
                  </span>
                  <span className={`text-sm ${selectedTopic === topic.id ? 'text-blue-700' : 'text-neutral-500'}`}>
                    {topic.count} resources
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
                  className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                    selectedGrade === grade.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <span className={`font-medium ${selectedGrade === grade.id ? 'text-blue-900' : 'text-neutral-700'}`}>
                    {grade.label}
                  </span>
                  <span className={`text-sm ${selectedGrade === grade.id ? 'text-blue-700' : 'text-neutral-500'}`}>
                    {grade.count} resources
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => onFilterApply(selectedTopic, selectedGrade)}
          className="w-full mt-6 bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          View Matching Resources
        </button>
      </div>

      {/* Step annotation */}
      <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
        <div className="font-semibold text-neutral-900 mb-1">Step 2: Educators Hub & Filtering</div>
        <p className="text-sm text-neutral-600">
          The teacher selects "Immigration & Migration" topic and "Middle School" grade level. 
          Clear topic categories and grade-level filters help narrow results to relevant materials.
        </p>
      </div>
    </div>
  );
}
