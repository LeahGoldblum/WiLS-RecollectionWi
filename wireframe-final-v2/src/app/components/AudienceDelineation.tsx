import { CheckCircle } from 'lucide-react';

export function AudienceDelineation() {
  return (
    <section className="border-b border-neutral-300 bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Left Column: For Educators */}
          <div className="border border-neutral-400 bg-neutral-50 p-6 md:p-8 shadow-sm">
            <h2 className="font-mono text-xl md:text-2xl text-neutral-800 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-neutral-300">
              For Educators
            </h2>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neutral-600 mt-0.5 flex-shrink-0" />
                <span className="font-mono text-xs md:text-sm text-neutral-700">
                  Pre-curated lesson plans aligned with Social Studies standards
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neutral-600 mt-0.5 flex-shrink-0" />
                <span className="font-mono text-xs md:text-sm text-neutral-700">
                  Primary source analysis worksheets and teaching guides
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neutral-600 mt-0.5 flex-shrink-0" />
                <span className="font-mono text-xs md:text-sm text-neutral-700">
                  Professional development workshops on digital literacy
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column: For Contributors */}
          <div className="border border-neutral-400 bg-neutral-50 p-6 md:p-8 shadow-sm">
            <h2 className="font-mono text-xl md:text-2xl text-neutral-800 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-neutral-300">
              For Contributors
            </h2>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 border border-neutral-600 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-mono text-xs text-neutral-700">1</span>
                </div>
                <span className="font-mono text-xs md:text-sm text-neutral-700">
                  Review digitization standards and metadata requirements
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 border border-neutral-600 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-mono text-xs text-neutral-700">2</span>
                </div>
                <span className="font-mono text-xs md:text-sm text-neutral-700">
                  Submit your collection proposal and explore grant support
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 border border-neutral-600 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-mono text-xs text-neutral-700">3</span>
                </div>
                <span className="font-mono text-xs md:text-sm text-neutral-700">
                  Work with the WiLS technical team for platform integration
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
