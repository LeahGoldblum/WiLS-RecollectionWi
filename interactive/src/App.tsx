import React, { useState } from 'react';
import { Home } from './components/Home';
import { WizardStep1 } from './components/WizardStep1';
import { WizardStep2 } from './components/WizardStep2';
import { WizardStep3 } from './components/WizardStep3';
import { WizardStep4 } from './components/WizardStep4';
import { SuccessScreen } from './components/SuccessScreen';
import { ProgressIndicator } from './components/ProgressIndicator';
import { EducatorPortal } from './components/EducatorPortal';
import { EducatorSearch } from './components/EducatorSearch';

export type OrgType = 'tribal' | 'nonprofit' | 'individual' | null;
export type ServiceType = 'digitization' | 'metadata' | null;

export interface WizardData {
  orgType: OrgType;
  serviceType: ServiceType;
  collectionSize: string;
  contentSubject: string;
  selectedDate: string;
}

export interface EducatorSearchData {
  gradeLevel: string;
  topic: string;
  searchQuery: string;
}

function App() {
  const [currentStep, setCurrentStep] = useState<'home' | 'wizard1' | 'wizard2' | 'wizard3' | 'wizard4' | 'success' | 'educator-portal' | 'educator-search'>('home');
  const [wizardData, setWizardData] = useState<WizardData>({
    orgType: null,
    serviceType: null,
    collectionSize: '',
    contentSubject: '',
    selectedDate: ''
  });
  
  const [educatorData, setEducatorData] = useState<EducatorSearchData>({
    gradeLevel: '',
    topic: '',
    searchQuery: ''
  });

  const updateWizardData = (data: Partial<WizardData>) => {
    setWizardData(prev => ({ ...prev, ...data }));
  };
  
  const updateEducatorData = (data: Partial<EducatorSearchData>) => {
    setEducatorData(prev => ({ ...prev, ...data }));
  };

  const resetWizard = () => {
    setCurrentStep('home');
    setWizardData({
      orgType: null,
      serviceType: null,
      collectionSize: '',
      contentSubject: '',
      selectedDate: ''
    });
  };
  
  const resetEducatorFlow = () => {
    setCurrentStep('home');
    setEducatorData({
      gradeLevel: '',
      topic: '',
      searchQuery: ''
    });
  };

  const getWizardStep = () => {
    switch (currentStep) {
      case 'wizard1':
        return 1;
      case 'wizard2':
        return 2;
      case 'wizard3':
        return 3;
      case 'wizard4':
        return 4;
      default:
        return 0;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Show progress indicator when in wizard */}
      {currentStep.startsWith('wizard') && (
        <ProgressIndicator currentStep={getWizardStep()} totalSteps={4} />
      )}

      {currentStep === 'home' && (
        <Home 
          onStartWizard={() => setCurrentStep('wizard1')}
          onStartEducatorFlow={() => setCurrentStep('educator-portal')}
        />
      )}
      
      {currentStep === 'educator-portal' && (
        <EducatorPortal
          gradeLevel={educatorData.gradeLevel}
          topic={educatorData.topic}
          onContinue={(gradeLevel, topic) => {
            updateEducatorData({ gradeLevel, topic });
            setCurrentStep('educator-search');
          }}
          onBack={resetEducatorFlow}
        />
      )}
      
      {currentStep === 'educator-search' && (
        <EducatorSearch
          educatorData={educatorData}
          onBack={() => setCurrentStep('educator-portal')}
          onHome={resetEducatorFlow}
        />
      )}

      {currentStep === 'wizard1' && (
        <WizardStep1
          selectedOrgType={wizardData.orgType}
          onSelect={(orgType) => {
            updateWizardData({ orgType });
            setCurrentStep('wizard2');
          }}
          onBack={() => setCurrentStep('home')}
        />
      )}

      {currentStep === 'wizard2' && (
        <WizardStep2
          selectedServiceType={wizardData.serviceType}
          onSelect={(serviceType) => {
            updateWizardData({ serviceType });
            setCurrentStep('wizard3');
          }}
          onBack={() => setCurrentStep('wizard1')}
        />
      )}

      {currentStep === 'wizard3' && (
        <WizardStep3
          collectionSize={wizardData.collectionSize}
          contentSubject={wizardData.contentSubject}
          onNext={(collectionSize, contentSubject) => {
            updateWizardData({ collectionSize, contentSubject });
            setCurrentStep('wizard4');
          }}
          onBack={() => setCurrentStep('wizard2')}
        />
      )}

      {currentStep === 'wizard4' && (
        <WizardStep4
          selectedDate={wizardData.selectedDate}
          serviceType={wizardData.serviceType}
          onSubmit={(selectedDate) => {
            updateWizardData({ selectedDate });
            setCurrentStep('success');
          }}
          onBack={() => setCurrentStep('wizard3')}
        />
      )}

      {currentStep === 'success' && (
        <SuccessScreen
          wizardData={wizardData}
          onReset={resetWizard}
        />
      )}
    </div>
  );
}

export default App;