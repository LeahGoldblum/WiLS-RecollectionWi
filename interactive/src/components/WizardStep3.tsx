import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Database, Tag } from 'lucide-react';

interface WizardStep3Props {
  collectionSize: string;
  contentSubject: string;
  onNext: (collectionSize: string, contentSubject: string) => void;
  onBack: () => void;
}

export function WizardStep3({ collectionSize, contentSubject, onNext, onBack }: WizardStep3Props) {
  const [localSize, setLocalSize] = useState(collectionSize);
  const [localSubject, setLocalSubject] = useState(contentSubject);

  const handleNext = () => {
    if (localSize && localSubject) {
      onNext(localSize, localSubject);
    }
  };

  const isValid = localSize && localSubject;

  const sizeOptions = [
    'Less than 100 items',
    '100-500 items',
    '500-1,000 items',
    '1,000-5,000 items',
    'More than 5,000 items',
    'Not sure yet'
  ];

  const subjectOptions = [
    'Local History',
    'Indigenous Culture & Heritage',
    'Agriculture & Rural Life',
    'Industrial History',
    'Arts & Literature',
    'Education',
    'Government & Politics',
    'Other/Multiple Topics'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="border-4 border-black p-12 bg-white">
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2">[WIZARD STEP 3 OF 4]</p>
            <h1 className="text-4xl font-bold mb-4">Resource Assessment</h1>
            <p className="text-lg text-gray-700">
              Tell us about your collection so we can estimate timeline and resources needed.
            </p>
          </div>

          <div className="space-y-8">
            {/* Collection Size */}
            <div>
              <label className="flex items-center gap-2 text-xl font-bold mb-4">
                <Database className="w-6 h-6" />
                Estimated Collection Size
              </label>
              <p className="text-sm text-gray-600 mb-4">
                Approximate number of items (photos, documents, objects, etc.)
              </p>
              <select
                value={localSize}
                onChange={(e) => setLocalSize(e.target.value)}
                className="w-full border-2 border-gray-300 p-4 text-lg focus:border-black focus:outline-none"
              >
                <option value="">Select an estimate...</option>
                {sizeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Content Subject */}
            <div>
              <label className="flex items-center gap-2 text-xl font-bold mb-4">
                <Tag className="w-6 h-6" />
                Primary Content Subject
              </label>
              <p className="text-sm text-gray-600 mb-4">
                What topic area best describes your collection?
              </p>
              <select
                value={localSubject}
                onChange={(e) => setLocalSubject(e.target.value)}
                className="w-full border-2 border-gray-300 p-4 text-lg focus:border-black focus:outline-none"
              >
                <option value="">Select a subject...</option>
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-100 border-2 border-gray-300">
            <h3 className="font-bold mb-2">Why we ask:</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Collection size</strong> helps us estimate project timeline (typical range: 6-18 months)</li>
              <li>• <strong>Subject area</strong> connects you with relevant metadata standards and subject experts</li>
              <li>• This information helps WiLS staff prepare for your consultation</li>
            </ul>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNext}
              disabled={!isValid}
              className={`px-8 py-4 font-semibold text-lg inline-flex items-center gap-2 ${
                isValid
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue to Commitment
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
