import React from 'react';
import { CheckCircle, Mail, Calendar, FileText, Home } from 'lucide-react';
import { WizardData } from '../App';

interface SuccessScreenProps {
  wizardData: WizardData;
  onReset: () => void;
}

export function SuccessScreen({ wizardData, onReset }: SuccessScreenProps) {
  const orgTypeLabels = {
    tribal: 'Tribal Organization',
    nonprofit: 'Community Nonprofit',
    individual: 'Individual Collector'
  };

  const serviceTypeLabels = {
    digitization: 'Digitization Support',
    metadata: 'Metadata Only'
  };

  const isDigitization = wizardData.serviceType === 'digitization';

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-4 border-black p-12 bg-white">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 border-4 border-green-500 mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              {isDigitization ? 'Consultation Requested!' : 'Upload Guide on the Way!'}
            </h1>
            <p className="text-xl text-gray-700">
              Thank you for your interest in partnering with Recollection Wisconsin.
            </p>
          </div>

          {/* What happens next */}
          <div className="mb-8 p-6 bg-yellow-50 border-2 border-yellow-300">
            <h2 className="text-2xl font-bold mb-4">What Happens Next</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email Confirmation</p>
                  <p className="text-sm text-gray-700">
                    You'll receive a confirmation email within 1 business day from the WiLS team at partnerships@recollectionwisconsin.org
                  </p>
                </div>
              </div>

              {isDigitization ? (
                <>
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Initial Consultation Scheduled</p>
                      <p className="text-sm text-gray-700">
                        Your first check-in on {new Date(wizardData.selectedDate).toLocaleDateString()} will be confirmed. 
                        A calendar invite will be sent with Microsoft Teams link.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FileText className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Pre-Meeting Materials</p>
                      <p className="text-sm text-gray-700">
                        You'll receive a project intake form and digitization readiness checklist to complete before your first meeting.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Metadata Upload Guide</p>
                    <p className="text-sm text-gray-700">
                      You'll receive detailed instructions for preparing and uploading your digital files and metadata. 
                      Our team will contact you to schedule your first check-in.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Summary of responses */}
          <div className="mb-8 p-6 bg-gray-100 border-2 border-gray-300">
            <h3 className="font-bold mb-4">Your Submission Summary</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Organization Type:</strong> {wizardData.orgType ? orgTypeLabels[wizardData.orgType] : 'N/A'}</p>
              <p><strong>Service Type:</strong> {wizardData.serviceType ? serviceTypeLabels[wizardData.serviceType] : 'N/A'}</p>
              <p><strong>Collection Size:</strong> {wizardData.collectionSize}</p>
              <p><strong>Content Subject:</strong> {wizardData.contentSubject}</p>
              <p><strong>First Check-in:</strong> {new Date(wizardData.selectedDate).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Contact info */}
          <div className="mb-8 p-4 bg-blue-50 border-2 border-blue-300">
            <p className="text-sm">
              <strong>Questions?</strong> Contact the WiLS Recollection Wisconsin team at{' '}
              <a href="mailto:partnerships@recollectionwisconsin.org" className="underline">
                partnerships@recollectionwisconsin.org
              </a>{' '}
              or call (608) 555-0123
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={onReset}
              className="border-2 border-black px-8 py-4 bg-white hover:bg-gray-100 font-semibold inline-flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Return to Home
            </button>
          </div>

          {/* Wireframe note */}
          <div className="mt-8 pt-8 border-t-2 border-gray-300 text-center text-sm text-gray-600">
            <p>[END OF WIREFLOW - This would trigger an automated email to WiLS staff with form data]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
