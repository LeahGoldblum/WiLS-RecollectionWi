import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';

export function Hosting() {
  return (
    <>
      <Breadcrumb items={[
        { label: 'Partner With Us', href: '/organizations' },
        { label: 'Hosting' },
      ]} />

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-3">Pathway</p>
          <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-4">Hosting</h1>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
            Recollection Wisconsin hosts your collection directly on the RW platform. We provide the infrastructure — you provide the content.
          </p>
          <div className="mt-6">
            <Link
              to="/organizations/get-started?pathway=hosting"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3 text-sm hover:bg-neutral-700 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900"
            >
              Get Started — Hosting
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-10">

            {/* What is Hosting */}
            <div>
              <h2 className="font-display text-xl md:text-2xl text-neutral-900 mb-3">What is Hosting?</h2>
              <div className="border-l-2 border-neutral-200 pl-5 space-y-3">
                <p className="text-sm text-neutral-700 leading-relaxed">
                  When RW hosts your collection, your digitized materials live on the Recollection Wisconsin CONTENTdm platform. RW staff work with you to upload items, apply metadata standards, and publish your collection — making it discoverable through the RW site and national aggregators like DPLA.
                </p>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  This is the right pathway for organizations that don't have — or don't want to maintain — their own digital repository.
                </p>
              </div>
            </div>

            {/* Best for you if */}
            <div>
              <h2 className="font-display text-xl md:text-2xl text-neutral-900 mb-4">Best for you if…</h2>
              <ul className="space-y-3">
                {[
                  'You have digitized files ready to share (images, documents, audio, video)',
                  'Your organization does not currently use a digital repository platform',
                  'You want RW to manage long-term technical maintenance',
                  'You have the capacity to provide metadata for your materials',
                  'You want your collection discoverable via DPLA and national networks',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-neutral-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What you'll need */}
            <div>
              <h2 className="font-display text-xl md:text-2xl text-neutral-900 mb-4">What you'll need</h2>
              <div className="border border-neutral-200 divide-y divide-neutral-100">
                {[
                  { label: 'Digitized files', detail: 'High-resolution scans or digital-born files in standard formats (TIFF, JPEG, PDF, MP3, MP4)' },
                  { label: 'Basic metadata', detail: 'Title, date, description, rights statement, and subject tags for each item or batch' },
                  { label: 'Rights confirmation', detail: 'Documentation that your organization has the right to publish — or a clear rights statement' },
                  { label: 'CC0 metadata agreement', detail: 'RW metadata is published as CC0. You must acknowledge this before onboarding.' },
                  { label: 'Staff contact', detail: 'A point person to coordinate with RW/WiLS staff during onboarding' },
                ].map(item => (
                  <div key={item.label} className="flex gap-4 px-4 py-3">
                    <span className="text-sm font-medium text-neutral-800 w-44 flex-shrink-0">{item.label}</span>
                    <span className="text-sm text-neutral-600">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process overview */}
            <div>
              <h2 className="font-display text-xl md:text-2xl text-neutral-900 mb-4">What happens after you apply</h2>
              <ol className="space-y-4">
                {[
                  'RW reviews your Get Started intake and follows up within 2–4 weeks.',
                  'A WiLS staff member schedules a discovery call to assess fit and readiness.',
                  'You complete a detailed collection agreement and transfer digitized files.',
                  'RW staff upload, describe, and quality-check your collection.',
                  'Your collection is published on RW and propagated to DPLA.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 border border-neutral-300 flex items-center justify-center flex-shrink-0 text-sm text-neutral-600 font-mono">
                      {i + 1}
                    </div>
                    <span className="text-sm text-neutral-700 mt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Not sure callout */}
            <div className="border border-neutral-200 bg-neutral-50 p-5 flex items-start gap-3">
              <HelpCircle className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-neutral-700 mb-2">Not sure if Hosting is right for you?</p>
                <div className="flex gap-3 flex-wrap">
                  <Link to="/organizations/harvesting" className="text-sm text-neutral-700 hover:underline">Compare with Harvesting →</Link>
                  <Link to="/organizations/contributor-faq" className="text-sm text-neutral-700 hover:underline">Read the FAQ →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-10">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="font-display text-2xl text-neutral-900 mb-3">Ready to share your collection?</h2>
          <p className="text-sm text-neutral-600 mb-6">The Get Started wizard takes about 10 minutes and pre-selects Hosting for you.</p>
          <Link
            to="/organizations/get-started?pathway=hosting"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-3 text-sm hover:bg-neutral-700 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900"
          >
            Start the Wizard — Hosting
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
