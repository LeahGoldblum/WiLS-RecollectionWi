import React from 'react';
import { Camera, FileText, ArrowLeft } from 'lucide-react';
import { ServiceType } from '../App';

interface WizardStep2Props {
  selectedServiceType: ServiceType;
  onSelect: (serviceType: ServiceType) => void;
  onBack: () => void;
}

export function WizardStep2({ selectedServiceType, onSelect, onBack }: WizardStep2Props) {
  const options = [
    {
      id: 'digitization' as ServiceType,
      icon: Camera,
      title: 'Digitization Support',
      description: 'I need help scanning and digitizing physical materials',
      details: [
        'Access to scanning equipment',
        'Training on digitization best practices',
        'Technical support throughout the process',
        'File format and storage guidance'
      ]
    },
    {
      id: 'metadata' as ServiceType,
      icon: FileText,
      title: 'Metadata Only',
      description: 'I already have digital files, just need help with cataloging',
      details: [
        'Metadata schema training',
        'Cataloging best practices',
        'Quality control guidance',
        'Upload preparation support'
      ]
    }
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
            <p className="text-sm text-gray-600 mb-2">[WIZARD STEP 2 OF 4: DECISION NODE]</p>
            <h1 className="text-4xl font-bold mb-4">Service Match</h1>
            <p className="text-lg text-gray-700">
              What kind of support do you need? Select the service that best fits your needs.
            </p>
          </div>

          <div className="space-y-6">
            {options.map((option) => {
              const Icon = option.icon;
              const isSelected = selectedServiceType === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => onSelect(option.id)}
                  className={`w-full border-2 p-6 text-left transition-all ${
                    isSelected
                      ? 'border-black bg-yellow-100'
                      : 'border-gray-300 bg-white hover:border-black hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                      <p className="text-gray-700 mb-4">{option.description}</p>
                      
                      <div className="pl-4 border-l-2 border-gray-300">
                        <p className="text-sm font-semibold mb-2">What's included:</p>
                        <ul className="text-sm space-y-1">
                          {option.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 ${
                        isSelected ? 'bg-black border-black' : 'border-gray-300'
                      }`}
                    >
                      {isSelected && (
                        <div className="w-full h-full flex items-center justify-center text-white">
                          ✓
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-blue-50 border-2 border-blue-300">
            <p className="text-sm">
              <strong>Branching Logic:</strong> Based on your selection, you'll receive tailored guidance. 
              Digitization support leads to equipment consultation; Metadata only leads to upload guides.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
