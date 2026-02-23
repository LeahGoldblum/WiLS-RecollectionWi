import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Video, AlertCircle } from 'lucide-react';
import { ServiceType } from '../App';

interface WizardStep4Props {
  selectedDate: string;
  serviceType: ServiceType;
  onSubmit: (selectedDate: string) => void;
  onBack: () => void;
}

export function WizardStep4({ selectedDate, serviceType, onSubmit, onBack }: WizardStep4Props) {
  const [localDate, setLocalDate] = useState(selectedDate);

  const handleSubmit = () => {
    if (localDate) {
      onSubmit(localDate);
    }
  };

  const isValid = localDate;

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
            <p className="text-sm text-gray-600 mb-2">[WIZARD STEP 4 OF 4]</p>
            <h1 className="text-4xl font-bold mb-4">The Commitment</h1>
            <p className="text-lg text-gray-700">
              Partnership requires regular communication. Here's what to expect.
            </p>
          </div>

          {/* Timeline Graphic */}
          <div className="mb-8 p-6 bg-yellow-50 border-2 border-yellow-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6" />
              Required Bi-Weekly Check-ins
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Video className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">1-hour Microsoft Teams meetings</p>
                  <p className="text-sm text-gray-700">Every other week throughout the project</p>
                </div>
              </div>

              {/* Visual timeline */}
              <div className="mt-6 pt-6 border-t-2 border-yellow-400">
                <p className="text-sm font-semibold mb-4">TYPICAL PROJECT TIMELINE</p>
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-2 font-bold">
                      1
                    </div>
                    <p className="text-xs font-semibold">Kickoff</p>
                  </div>
                  <div className="flex-1 h-1 bg-gray-400"></div>
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-2 font-bold">
                      2
                    </div>
                    <p className="text-xs font-semibold">Bi-weekly<br/>Check-in</p>
                  </div>
                  <div className="flex-1 h-1 bg-gray-400"></div>
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-2 font-bold">
                      3
                    </div>
                    <p className="text-xs font-semibold">Bi-weekly<br/>Check-in</p>
                  </div>
                  <div className="flex-1 h-1 bg-gray-400"></div>
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-2 font-bold">
                      ✓
                    </div>
                    <p className="text-xs font-semibold">Launch</p>
                  </div>
                </div>
                <p className="text-center text-xs text-gray-600 mt-4">
                  6-18 months (varies by collection size)
                </p>
              </div>
            </div>
          </div>

          {/* What to expect */}
          <div className="mb-8 p-4 bg-gray-100 border-2 border-gray-300">
            <h3 className="font-bold mb-2">What we'll cover in check-ins:</h3>
            <ul className="text-sm space-y-1">
              <li>• Progress updates and troubleshooting</li>
              <li>• Technical questions and training</li>
              <li>• Quality control review</li>
              <li>• Planning next steps</li>
            </ul>
          </div>

          {/* Schedule picker */}
          <div className="mb-8">
            <label className="flex items-center gap-2 text-xl font-bold mb-4">
              <Calendar className="w-6 h-6" />
              Schedule Your First Check-in
            </label>
            <p className="text-sm text-gray-600 mb-4">
              Select a date for your initial consultation (we'll coordinate exact time via email)
            </p>
            <input
              type="date"
              value={localDate}
              onChange={(e) => setLocalDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full border-2 border-gray-300 p-4 text-lg focus:border-black focus:outline-none"
            />
          </div>

          {/* Important note */}
          <div className="mb-8 p-4 bg-red-50 border-2 border-red-300 flex gap-3">
            <AlertCircle className="w-6 h-6 flex-shrink-0 text-red-600" />
            <div>
              <p className="font-bold text-sm mb-1">Important Commitment</p>
              <p className="text-sm">
                Regular attendance at bi-weekly check-ins is required to maintain partnership status. 
                If you cannot commit to this schedule, we encourage you to apply at a later time.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5" required />
              <span className="text-sm">I understand and can commit to bi-weekly check-ins</span>
            </label>

            <button
              onClick={handleSubmit}
              disabled={!isValid}
              className={`px-8 py-4 font-semibold text-lg ${
                isValid
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {serviceType === 'digitization' ? 'Request Consultation' : 'Get Upload Guide'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
