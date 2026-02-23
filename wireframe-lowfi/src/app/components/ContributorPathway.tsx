import React from 'react';
import { Annotation } from './Annotation';

export function ContributorPathway() {
  const steps = [
    { number: '1', title: 'Prepare', desc: 'Organize your digital materials' },
    { number: '2', title: 'Contact', desc: 'Reach out to discuss your collection' },
    { number: '3', title: 'Metadata', desc: 'Work with us to describe items' },
    { number: '4', title: 'Publish', desc: 'Go live and share with Wisconsin' }
  ];

  return (
    <section className="relative bg-white border-b-2 border-gray-300 py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Call to Action Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block border-2 border-gray-400 bg-gray-100 shadow-sm px-8 md:px-12 py-6 md:py-8 hover:shadow-md transition-shadow">
            <h2 className="text-2xl md:text-3xl font-mono text-gray-900 mb-3">
              Partner With Us / Share Your Collection
            </h2>
            <p className="text-xs md:text-sm font-mono text-gray-600 max-w-2xl">
              Cultural institutions and organizations are invited to contribute to Wisconsin's digital heritage
            </p>
          </div>
        </div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Step Number */}
              <div className="w-16 h-16 border-2 border-gray-400 bg-white shadow-sm flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-mono text-gray-800 font-bold">{step.number}</span>
              </div>
              
              {/* Arrow (except for last item, and hidden on mobile) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 -z-10">
                  <div className="absolute right-0 top-[-4px] w-0 h-0 border-l-8 border-l-gray-300 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              )}
              
              {/* Step Content */}
              <div className="border-2 border-gray-300 bg-gray-50 p-4 md:p-5 min-h-32 hover:bg-white hover:shadow-md hover:border-gray-400 transition-all cursor-pointer">
                <h3 className="text-sm font-mono text-gray-900 font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-gray-600">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-10 md:mt-14">
          <div className="inline-block px-8 md:px-12 py-3 md:py-4 border-2 border-gray-800 bg-gray-800 hover:bg-gray-900 hover:shadow-lg transition-all cursor-pointer">
            <span className="text-sm md:text-base font-mono text-white">Get Started as a Contributor</span>
          </div>
        </div>
      </div>
      
      {/* Annotation */}
      <Annotation
        position="right"
        className="hidden xl:block absolute -right-72 top-32"
      >
        <strong>CONTRIBUTOR VISIBILITY & AFFORDANCES</strong>
        <br /><br />
        Border highlight on the header CTA and hover states on step cards improve visibility for 
        partner organizations. Subtle shadows signal interactivity without creating a polished UI.
        <br /><br />
        Step-by-step visualization (Prepare → Contact → Metadata → Publish) reduces onboarding 
        friction by clearly outlining the contribution process and setting realistic expectations.
        <br /><br />
        Prominent placement signals that contributions are valued and actively encouraged.
      </Annotation>
    </section>
  );
}