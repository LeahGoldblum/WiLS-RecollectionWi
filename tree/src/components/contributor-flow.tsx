import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface ContributorFlowProps {
  onBack: () => void;
}

type OrgType = 'tribal' | 'nonprofit' | 'individual' | '';
type ServiceType = 'digitization' | 'metadata' | '';

export function ContributorFlow({ onBack }: ContributorFlowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [orgType, setOrgType] = useState<OrgType>('');
  const [serviceType, setServiceType] = useState<ServiceType>('');
  const [collectionSize, setCollectionSize] = useState('');
  const [contentSubject, setContentSubject] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return orgType !== '';
      case 2:
        return serviceType !== '';
      case 3:
        return collectionSize !== '' && contentSubject !== '';
      case 4:
        return selectedDate !== '';
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowConfirmation(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="bg-white border-b-4 border-neutral-900 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 border-4 border-neutral-900 px-4 py-2 bg-white hover:bg-neutral-900 hover:text-white transition-colors font-bold mb-4"
          >
            <ArrowLeft size={20} />
            BACK TO HOME
          </button>
          <div className="border-4 border-neutral-900 px-6 py-3 bg-neutral-200 inline-block">
            <h1 className="text-2xl font-bold">CONTRIBUTOR ONBOARDING</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-8">
        {/* Progress Indicator */}
        <div className="border-4 border-neutral-900 bg-white p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className={`w-12 h-12 border-4 border-neutral-900 flex items-center justify-center font-bold ${
                    step <= currentStep ? 'bg-neutral-900 text-white' : 'bg-white'
                  }`}
                >
                  {step < currentStep ? <Check size={24} /> : step}
                </div>
                {step < 4 && (
                  <div
                    className={`flex-1 h-1 ${
                      step < currentStep ? 'bg-neutral-900' : 'bg-neutral-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm font-bold">
            <span>INTENT</span>
            <span>SERVICE</span>
            <span>RESOURCES</span>
            <span>COMMITMENT</span>
          </div>
        </div>

        {/* Step 1: Intent Node */}
        {currentStep === 1 && (
          <div className="border-4 border-neutral-900 bg-white p-8">
            <h2 className="text-2xl font-bold mb-4">STEP 1: ORGANIZATION TYPE</h2>
            <p className="mb-6">Select the type that best describes your organization:</p>
            <div className="space-y-4">
              <button
                onClick={() => setOrgType('tribal')}
                className={`w-full border-4 border-neutral-900 p-6 text-left hover:bg-neutral-100 transition-colors ${
                  orgType === 'tribal' ? 'bg-neutral-900 text-white' : 'bg-white'
                }`}
              >
                <p className="font-bold text-lg mb-2">TRIBAL ORGANIZATION</p>
                <p className={orgType === 'tribal' ? 'text-neutral-200' : 'text-neutral-600'}>
                  Federally recognized tribes or tribal cultural centers
                </p>
              </button>
              <button
                onClick={() => setOrgType('nonprofit')}
                className={`w-full border-4 border-neutral-900 p-6 text-left hover:bg-neutral-100 transition-colors ${
                  orgType === 'nonprofit' ? 'bg-neutral-900 text-white' : 'bg-white'
                }`}
              >
                <p className="font-bold text-lg mb-2">NONPROFIT ORGANIZATION</p>
                <p className={orgType === 'nonprofit' ? 'text-neutral-200' : 'text-neutral-600'}>
                  Museums, historical societies, or cultural institutions
                </p>
              </button>
              <button
                onClick={() => setOrgType('individual')}
                className={`w-full border-4 border-neutral-900 p-6 text-left hover:bg-neutral-100 transition-colors ${
                  orgType === 'individual' ? 'bg-neutral-900 text-white' : 'bg-white'
                }`}
              >
                <p className="font-bold text-lg mb-2">INDIVIDUAL CONTRIBUTOR</p>
                <p className={orgType === 'individual' ? 'text-neutral-200' : 'text-neutral-600'}>
                  Independent researchers or collectors
                </p>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Service Match */}
        {currentStep === 2 && (
          <div className="border-4 border-neutral-900 bg-white p-8">
            <h2 className="text-2xl font-bold mb-4">STEP 2: SERVICE SELECTION</h2>
            <p className="mb-6">What type of support do you need?</p>
            <div className="space-y-4">
              <button
                onClick={() => setServiceType('digitization')}
                className={`w-full border-4 border-neutral-900 p-6 text-left hover:bg-neutral-100 transition-colors ${
                  serviceType === 'digitization' ? 'bg-neutral-900 text-white' : 'bg-white'
                }`}
              >
                <p className="font-bold text-lg mb-2">DIGITIZATION SUPPORT</p>
                <p className={serviceType === 'digitization' ? 'text-neutral-200' : 'text-neutral-600'}>
                  Full support including scanning, photography, and digital preservation of physical materials
                </p>
              </button>
              <button
                onClick={() => setServiceType('metadata')}
                className={`w-full border-4 border-neutral-900 p-6 text-left hover:bg-neutral-100 transition-colors ${
                  serviceType === 'metadata' ? 'bg-neutral-900 text-white' : 'bg-white'
                }`}
              >
                <p className="font-bold text-lg mb-2">METADATA ONLY</p>
                <p className={serviceType === 'metadata' ? 'text-neutral-200' : 'text-neutral-600'}>
                  Materials are already digitized; need help with cataloging and description
                </p>
              </button>
            </div>
            {serviceType === 'digitization' && (
              <div className="mt-6 border-4 border-neutral-900 bg-yellow-100 p-4">
                <p className="font-bold mb-2">⚠ NEXT STEP:</p>
                <p>You will be directed to a consultation request form after completing this wizard.</p>
              </div>
            )}
            {serviceType === 'metadata' && (
              <div className="mt-6 border-4 border-neutral-900 bg-blue-100 p-4">
                <p className="font-bold mb-2">ℹ NEXT STEP:</p>
                <p>You will receive our metadata upload guide after completing this wizard.</p>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Resource Assessment */}
        {currentStep === 3 && (
          <div className="border-4 border-neutral-900 bg-white p-8">
            <h2 className="text-2xl font-bold mb-4">STEP 3: RESOURCE ASSESSMENT</h2>
            <p className="mb-6">Tell us about your collection:</p>
            <div className="space-y-6">
              <div>
                <label className="block font-bold mb-3 text-sm uppercase">
                  Estimated Collection Size
                </label>
                <select
                  value={collectionSize}
                  onChange={(e) => setCollectionSize(e.target.value)}
                  className="w-full border-4 border-neutral-900 px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-neutral-400"
                >
                  <option value="">Select size...</option>
                  <option value="1-50">1-50 items</option>
                  <option value="51-200">51-200 items</option>
                  <option value="201-500">201-500 items</option>
                  <option value="500+">500+ items</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-3 text-sm uppercase">
                  Primary Content Subject
                </label>
                <input
                  type="text"
                  value={contentSubject}
                  onChange={(e) => setContentSubject(e.target.value)}
                  placeholder="e.g., Ho-Chunk History, Wisconsin Mining, Textile Arts"
                  className="w-full border-4 border-neutral-900 px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-neutral-400"
                />
              </div>
              <div className="border-4 border-neutral-900 bg-neutral-100 p-4">
                <p className="text-sm">
                  <span className="font-bold">Example subjects:</span> Indigenous Arts, Industrial History, Immigration Stories, Agricultural Heritage, Cultural Practices
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Commitment */}
        {currentStep === 4 && (
          <div className="border-4 border-neutral-900 bg-white p-8">
            <h2 className="text-2xl font-bold mb-4">STEP 4: SCHEDULE CHECK-IN</h2>
            <p className="mb-6">
              We require bi-weekly 1-hour Microsoft Teams check-ins to ensure project success.
              Select your preferred time:
            </p>
            <div className="space-y-6">
              <div>
                <label className="block font-bold mb-3 text-sm uppercase">
                  Preferred Meeting Time
                </label>
                <input
                  type="datetime-local"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full border-4 border-neutral-900 px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-neutral-400"
                />
              </div>
              <div className="border-4 border-neutral-900 bg-yellow-100 p-6">
                <p className="font-bold mb-2">📅 COMMITMENT SUMMARY:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Bi-weekly meetings (every 2 weeks)</li>
                  <li>1 hour per session</li>
                  <li>Microsoft Teams platform</li>
                  <li>Progress review and planning</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`border-4 border-neutral-900 px-8 py-3 font-bold flex items-center gap-2 ${
              currentStep === 1
                ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                : 'bg-white hover:bg-neutral-200 transition-colors'
            }`}
          >
            <ArrowLeft size={20} />
            PREVIOUS
          </button>
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`border-4 border-neutral-900 px-8 py-3 font-bold flex items-center gap-2 ${
              canProceed()
                ? 'bg-neutral-900 text-white hover:bg-neutral-700 transition-colors'
                : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
            }`}
          >
            {currentStep === 4 ? 'SUBMIT' : 'NEXT'}
            <ArrowRight size={20} />
          </button>
        </div>
      </main>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-neutral-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="border-4 border-neutral-900 bg-white p-8 max-w-2xl w-full">
            <div className="w-20 h-20 border-4 border-neutral-900 bg-green-300 mx-auto mb-6 flex items-center justify-center">
              <Check size={48} />
            </div>
            <h3 className="font-bold text-3xl mb-4 text-center">APPLICATION SUBMITTED!</h3>
            <div className="border-4 border-neutral-900 bg-neutral-100 p-6 mb-6">
              <p className="font-bold mb-3">YOUR SUBMISSION SUMMARY:</p>
              <div className="space-y-2 text-sm">
                <p><span className="font-bold">Organization Type:</span> {orgType?.toUpperCase()}</p>
                <p><span className="font-bold">Service Type:</span> {serviceType?.toUpperCase()}</p>
                <p><span className="font-bold">Collection Size:</span> {collectionSize}</p>
                <p><span className="font-bold">Subject:</span> {contentSubject}</p>
                <p><span className="font-bold">First Check-in:</span> {new Date(selectedDate).toLocaleString()}</p>
              </div>
            </div>
            <div className="border-4 border-neutral-900 bg-yellow-100 p-4 mb-6">
              <p className="font-bold mb-2">WHAT'S NEXT?</p>
              {serviceType === 'digitization' ? (
                <p>You will receive a consultation request form via email within 2 business days to discuss digitization logistics.</p>
              ) : (
                <p>You will receive our metadata upload guide via email within 1 business day to begin cataloging your collection.</p>
              )}
            </div>
            <div className="flex gap-4">
              <button
                onClick={onBack}
                className="flex-1 border-4 border-neutral-900 px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors font-bold"
              >
                RETURN TO HOME
              </button>
              <button
                className="flex-1 border-4 border-neutral-900 px-6 py-3 bg-white hover:bg-neutral-200 transition-colors font-bold"
              >
                PRINT CONFIRMATION
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
