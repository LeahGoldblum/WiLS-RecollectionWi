import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, GraduationCap, BookOpen } from 'lucide-react';

interface EducatorPortalProps {
  gradeLevel: string;
  topic: string;
  onContinue: (gradeLevel: string, topic: string) => void;
  onBack: () => void;
}

export function EducatorPortal({ gradeLevel, topic, onContinue, onBack }: EducatorPortalProps) {
  const [localGradeLevel, setLocalGradeLevel] = useState(gradeLevel);
  const [localTopic, setLocalTopic] = useState(topic);

  const handleContinue = () => {
    if (localGradeLevel && localTopic) {
      onContinue(localGradeLevel, localTopic);
    }
  };

  const isValid = localGradeLevel && localTopic;

  const gradeLevels = [
    'K-4',
    '5-8',
    '9-12',
    'Higher Education',
    'General Public'
  ];

  const curatedTopics = [
    'Fur Trade',
    'Indigenous Wisconsin',
    'Immigration & Settlement',
    'Agriculture & Dairy Farming',
    'Industrial Revolution',
    'Civil Rights Movement',
    'Wisconsin Government',
    'Environmental History',
    'Arts & Culture'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b-4 border-black p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">RECOLLECTION WISCONSIN</div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 hover:underline"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </nav>

      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-black p-12 bg-white">
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-2">[EDUCATOR PORTAL - STEP 1: PRE-SEARCH GUIDANCE]</p>
              <h1 className="text-4xl font-bold mb-4">Welcome, Educators!</h1>
              <p className="text-lg text-gray-700">
                Let's help you find the perfect primary sources for your classroom. 
                Select your grade level and topic to get started with curated search guidance.
              </p>
            </div>

            <div className="space-y-8">
              {/* Grade Level Selection */}
              <div>
                <label className="flex items-center gap-2 text-xl font-bold mb-4">
                  <GraduationCap className="w-6 h-6" />
                  Select Grade Level
                </label>
                <p className="text-sm text-gray-600 mb-4">
                  This helps us suggest age-appropriate materials and align with educational standards.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {gradeLevels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setLocalGradeLevel(level)}
                      className={`border-2 p-4 text-center font-semibold transition-all ${
                        localGradeLevel === level
                          ? 'border-black bg-blue-100'
                          : 'border-gray-300 bg-white hover:border-black hover:bg-gray-50'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topic Selection */}
              <div>
                <label className="flex items-center gap-2 text-xl font-bold mb-4">
                  <BookOpen className="w-6 h-6" />
                  Choose a Topic
                </label>
                <p className="text-sm text-gray-600 mb-4">
                  Curated topics aligned with Wisconsin educational standards and common curriculum themes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {curatedTopics.map((topicOption) => (
                    <button
                      key={topicOption}
                      onClick={() => setLocalTopic(topicOption)}
                      className={`border-2 p-4 text-left font-semibold transition-all ${
                        localTopic === topicOption
                          ? 'border-black bg-blue-100'
                          : 'border-gray-300 bg-white hover:border-black hover:bg-gray-50'
                      }`}
                    >
                      {topicOption}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Why we ask */}
            <div className="mt-8 p-4 bg-yellow-50 border-2 border-yellow-300">
              <p className="text-sm">
                <strong>Pre-Search Guidance:</strong> Your selections help us optimize search terms 
                and suggest better keywords. The DPLA search backend can be "fuzzy" - we'll help bridge that gap!
              </p>
            </div>

            {/* Continue button */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleContinue}
                disabled={!isValid}
                className={`px-8 py-4 font-semibold text-lg inline-flex items-center gap-2 ${
                  isValid
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue to Search
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Context note */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>PERSONA: Sarah (4th Grade Teacher) | Entry Point: Educator Portal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
