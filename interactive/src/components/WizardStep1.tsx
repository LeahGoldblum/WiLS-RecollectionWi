import React from 'react';
import { Building2, Users, User, ArrowLeft } from 'lucide-react';
import { OrgType } from '../App';

interface WizardStep1Props {
  selectedOrgType: OrgType;
  onSelect: (orgType: OrgType) => void;
  onBack: () => void;
}

export function WizardStep1({ selectedOrgType, onSelect, onBack }: WizardStep1Props) {
  const options = [
    {
      id: 'tribal' as OrgType,
      icon: Building2,
      title: 'Tribal Organization',
      description: 'Federally recognized tribe or tribal organization with cultural materials'
    },
    {
      id: 'nonprofit' as OrgType,
      icon: Users,
      title: 'Community Nonprofit',
      description: 'Historical society, museum, library, or community organization'
    },
    {
      id: 'individual' as OrgType,
      icon: User,
      title: 'Individual Collector',
      description: 'Private collector or individual with historical materials to share'
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
          Back to Home
        </button>

        <div className="border-4 border-black p-12 bg-white">
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2">[WIZARD STEP 1 OF 4]</p>
            <h1 className="text-4xl font-bold mb-4">Organization Type</h1>
            <p className="text-lg text-gray-700">
              Help us understand your organization so we can provide the right support.
            </p>
          </div>

          <div className="space-y-4">
            {options.map((option) => {
              const Icon = option.icon;
              const isSelected = selectedOrgType === option.id;

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
                      <p className="text-gray-700">{option.description}</p>
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

          <div className="mt-8 p-4 bg-gray-100 border-2 border-gray-300">
            <p className="text-sm">
              <strong>Note:</strong> Your selection helps us tailor resources and support. 
              All organization types are welcome to contribute to Recollection Wisconsin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
