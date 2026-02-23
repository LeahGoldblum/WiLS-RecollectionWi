import { Users, FileText, Zap } from 'lucide-react';

export function ContributorPathway() {
  return (
    <section className="border-b border-neutral-300 bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-mono text-2xl md:text-3xl text-neutral-800 mb-3">
              Share Your Collection with Wisconsin
            </h2>
            <p className="font-mono text-sm md:text-base text-neutral-600">
              Whether you have boxes of photos, digital files on a local drive, or a ready-to-publish digital collection, we help you get online and discoverable statewide.
            </p>
          </div>

          {/* CTA Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Card 1 */}
            <div className="border border-neutral-400 bg-neutral-50 p-6 hover:shadow-md hover:border-neutral-600 hover:bg-white transition-all cursor-pointer">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 border border-neutral-400 bg-white flex items-center justify-center">
                  <Users className="w-8 h-8 text-neutral-600" />
                </div>
                <h3 className="font-mono text-sm text-neutral-800">
                  Join the Contributor Network
                </h3>
                <p className="font-mono text-xs text-neutral-600 leading-relaxed">
                  Connect with libraries, historical societies, and cultural institutions statewide.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-neutral-400 bg-neutral-50 p-6 hover:shadow-md hover:border-neutral-600 hover:bg-white transition-all cursor-pointer">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 border border-neutral-400 bg-white flex items-center justify-center">
                  <FileText className="w-8 h-8 text-neutral-600" />
                </div>
                <h3 className="font-mono text-sm text-neutral-800">
                  Contributor Resources
                </h3>
                <p className="font-mono text-xs text-neutral-600 leading-relaxed">
                  Access toolkits, digitization guidance, and metadata standards.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-neutral-400 bg-neutral-50 p-6 hover:shadow-md hover:border-neutral-600 hover:bg-white transition-all cursor-pointer">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 border border-neutral-400 bg-white flex items-center justify-center">
                  <Zap className="w-8 h-8 text-neutral-600" />
                </div>
                <h3 className="font-mono text-sm text-neutral-800">
                  Submit a Collection Proposal
                </h3>
                <p className="font-mono text-xs text-neutral-600 leading-relaxed">
                  Tell us what you have and explore funding opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Contributor Support */}
          <div className="mt-8 border border-neutral-400 bg-neutral-50 p-6 md:p-8">
            <h3 className="font-mono text-sm md:text-base text-neutral-800 mb-4 border-b border-neutral-300 pb-2">
              Contributor Support
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-neutral-300 bg-white p-4">
                <h4 className="font-mono text-xs text-neutral-800 mb-2">Digital Readiness Toolkit</h4>
                <p className="font-mono text-xs text-neutral-600">
                  Checklists and templates to prepare physical and digital materials.
                </p>
              </div>
              <div className="border border-neutral-300 bg-white p-4">
                <h4 className="font-mono text-xs text-neutral-800 mb-2">Digitization Support</h4>
                <p className="font-mono text-xs text-neutral-600">
                  Guidance on scanning, file formats, and preservation basics.
                </p>
              </div>
              <div className="border border-neutral-300 bg-white p-4">
                <h4 className="font-mono text-xs text-neutral-800 mb-2">Infrastructure provided (CONTENTdm)</h4>
                <p className="font-mono text-xs text-neutral-600">
                  Hosting and platform support to publish your digital collection.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <button className="border-2 border-neutral-700 bg-neutral-800 text-white px-8 py-3 font-mono text-sm hover:bg-neutral-700 transition-colors">
              View Contributor Requirements →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
