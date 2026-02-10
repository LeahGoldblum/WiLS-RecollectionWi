import React from 'react';
import { Check } from 'lucide-react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  const steps = [
    'Organization Type',
    'Service Match',
    'Resource Assessment',
    'The Commitment'
  ];

  return (
    <div className="bg-white border-b-4 border-black p-6 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center">
          {steps.map((label, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;

            return (
              <React.Fragment key={stepNumber}>
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold mb-2 ${
                      isCompleted
                        ? 'bg-black border-black text-white'
                        : isCurrent
                        ? 'bg-yellow-100 border-black'
                        : 'bg-white border-gray-300 text-gray-300'
                    }`}
                  >
                    {isCompleted ? <Check className="w-6 h-6" /> : stepNumber}
                  </div>
                  <div
                    className={`text-sm text-center font-semibold ${
                      isCompleted || isCurrent ? 'text-black' : 'text-gray-400'
                    }`}
                  >
                    {label}
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 mb-8">
                    <div
                      className={`h-1 ${
                        stepNumber < currentStep ? 'bg-black' : 'bg-gray-300'
                      }`}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
