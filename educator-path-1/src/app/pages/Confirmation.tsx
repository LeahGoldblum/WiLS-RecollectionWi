import { useLocation, Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { CheckCircle, BookOpen, HelpCircle, ArrowRight, Download } from 'lucide-react';

type Pathway = 'hosting' | 'harvesting' | '';

const nextSteps: Record<NonNullable<Pathway>, string[]> = {
  hosting: [
    'A Recollection Wisconsin staff member will review your intake and follow up within 2-4 weeks.',
    "You'll be invited to a discovery call to confirm fit and discuss your collection.",
    "We'll share a collection agreement and digitization/metadata guidelines.",
    "You'll transfer your digitized files and we'll begin the upload and QA process.",
    'Your collection will be published on RW and propagated to DPLA.',
  ],
  harvesting: [
    'A Recollection Wisconsin staff member will review your intake and follow up within 2-4 weeks.',
    "We'll schedule a technical readiness call to test your OAI-PMH endpoint.",
    'RW will configure the harvest connection and run a test harvest.',
    'Your collection will be added to the harvest schedule.',
    'Expect initial publication within one harvest cycle (every three months after setup is complete).',
  ],
  '': [
    'A Recollection Wisconsin staff member will review your intake and follow up within 2-4 weeks.',
    "We'll help you identify the right pathway during a discovery call.",
    'No commitment is required at this stage.',
  ],
};

const pathwayLabels: Record<string, string> = {
  hosting: 'Hosting',
  harvesting: 'Harvesting',
  '': 'Intake Submitted',
};

export function Confirmation() {
  const location = useLocation();
  const state = location.state as { pathway?: Pathway; orgName?: string; contactEmail?: string; emailCopy?: boolean } | null;
  const pathway = (state?.pathway || '') as Pathway;
  const orgName = state?.orgName || 'Your organization';
  const contactEmail = state?.contactEmail || '';
  const emailCopy = state?.emailCopy ?? !!contactEmail;
  const refNumber = `RW-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000) + 1000}`;

  const steps = nextSteps[pathway] || nextSteps[''];

  return (
    <>
      <Breadcrumb items={[
        { label: 'Partner With Us', href: '/organizations' },
        { label: 'Confirmation' },
      ]} />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">

          {/* Success header */}
          <div className="border border-neutral-200 bg-neutral-50 p-8 mb-8 text-center">
            <div className="w-12 h-12 border border-neutral-300 bg-white flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-neutral-700" />
            </div>
            <h1 className="font-display text-2xl md:text-3xl text-neutral-900 mb-2">
              Thank you, {orgName}!
            </h1>
            <p className="text-base text-neutral-600 mb-3">
              Your {pathwayLabels[pathway]} intake has been received.
            </p>
            {emailCopy && contactEmail && (
              <p className="text-sm text-neutral-700 mb-2">
                Copy will be sent to: <strong>{contactEmail}</strong>
              </p>
            )}
            <p className="text-xs text-neutral-400 font-mono mt-3">
              Reference: {refNumber}
            </p>
          </div>

          {/* Download mock button */}
          <div className="mb-8">
            <button
              type="button"
              onClick={() => alert('Wireframe: A real implementation would generate and download a PDF copy of your submission.')}
              className="w-full flex items-center justify-center gap-2 border border-neutral-300 bg-neutral-50 text-neutral-700 py-3 text-sm hover:bg-neutral-100 hover:border-neutral-400 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900"
            >
              <Download className="w-4 h-4" />
              Download a copy of your submission
              <span className="text-xs text-neutral-400 font-mono">[mock]</span>
            </button>
          </div>

          {/* What happens next */}
          <div className="mb-8">
            <h2 className="font-display text-xl text-neutral-900 mb-4">What happens next</h2>
            <ol className="space-y-4">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-7 h-7 border border-neutral-300 flex items-center justify-center flex-shrink-0 text-sm text-neutral-600 font-mono">
                    {i + 1}
                  </div>
                  <span className="text-sm text-neutral-700 mt-0.5 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Pathway-specific note */}
          {pathway === 'harvesting' && (
            <div className="border border-neutral-200 bg-neutral-50 p-4 mb-8 flex items-start gap-3">
              <div className="w-4 h-4 border border-neutral-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-neutral-600">i</span>
              </div>
              <p className="text-sm text-neutral-600">
                <strong>Harvesting reminder:</strong> RW runs harvests every three months. After your OAI-PMH connection is configured, your items may take up to three months to appear in the RW portal and DPLA.
              </p>
            </div>
          )}

          {/* Secondary links */}
          <div className="border border-neutral-200 p-6">
            <h3 className="font-display text-base text-neutral-800 mb-4">While you wait</h3>
            <div className="space-y-3">
              <Link
                to="/organizations/resources"
                className="flex items-center justify-between gap-3 p-3 border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-neutral-500" />
                  <div>
                    <p className="text-sm text-neutral-800">Browse the Resources library</p>
                    <p className="text-xs text-neutral-500">Digitization guides, metadata standards, rights references</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors" />
              </Link>

              <Link
                to="/organizations/contributor-faq"
                className="flex items-center justify-between gap-3 p-3 border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-neutral-500" />
                  <div>
                    <p className="text-sm text-neutral-800">Read the Contributor FAQ</p>
                    <p className="text-xs text-neutral-500">Common questions about eligibility, rights, timelines, and more</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors" />
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-neutral-500 mt-8">
            Questions? Contact <a href="mailto:info@recollectionwisconsin.org" className="underline hover:text-neutral-800">info@recollectionwisconsin.org</a> and reference your submission number.
          </p>
        </div>
      </section>
    </>
  );
}
