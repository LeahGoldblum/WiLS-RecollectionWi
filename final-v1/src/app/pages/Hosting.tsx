import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';

export function Hosting() {
  return (
    <>
      <Breadcrumb items={[
        { label: 'Contribute', href: '/contribute' },
        { label: 'Hosting' },
      ]} />

      {/* Hero */}
      <section className="border-b border-[var(--card-border)] bg-gradient-to-br from-[var(--primary-light)] to-white py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="inline-block bg-[var(--primary)] text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            Pathway
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-[var(--primary)] mb-5 leading-tight">Collection Hosting</h1>
          <p className="text-lg md:text-xl text-[var(--foreground)] leading-relaxed mb-8">
            Recollection Wisconsin hosts your collection directly on the RW platform. We provide the infrastructure — you provide the content.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contribute/get-started?pathway=hosting"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-all hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-[var(--primary)]"
            >
              Get Started with Hosting
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contribute/contributor-faq"
              className="inline-flex items-center gap-2 border-2 border-[var(--card-border)] bg-white px-8 py-3.5 rounded-lg font-medium text-[var(--foreground)] hover:bg-[var(--muted)] hover:border-[var(--border-hover)] transition-all"
            >
              <HelpCircle className="w-4 h-4" />
              View FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* What is Hosting */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-[var(--primary)] mb-5">What is Hosting?</h2>
              <div className="border-l-4 border-[var(--primary)] bg-[var(--primary-light)] rounded-r-lg pl-8 pr-6 py-6 space-y-4">
                <p className="text-base text-[var(--foreground)] leading-relaxed">
                  When RW hosts your collection, your digitized materials live on the Recollection Wisconsin CONTENTdm platform. Recollection Wisconsin staff work with you to upload items, apply metadata standards, and publish your collection — making it discoverable through the RW site and national aggregators like DPLA.
                </p>
                <p className="text-base text-[var(--foreground)] leading-relaxed">
                  This is the right pathway for organizations that don't have — or don't want to maintain — their own digital repository.
                </p>
              </div>
            </div>

            {/* Best for you if */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-[var(--primary)] mb-6">Best for you if…</h2>
              <ul className="space-y-4">
                {[
                  'You have digitized files ready to share (images, documents, audio, video)',
                  'Your organization does not currently use a digital repository platform',
                  'You want RW to manage long-term technical maintenance',
                  'You have the capacity to provide metadata for your materials',
                  'You want your collection discoverable via DPLA and national networks',
                ].map(item => (
                  <li key={item} className="flex items-start gap-4 bg-[var(--muted)] rounded-lg p-5">
                    <CheckCircle className="w-6 h-6 text-[var(--accent-sage)] mt-0.5 flex-shrink-0" />
                    <span className="text-base text-[var(--foreground)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What you'll need */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-[var(--primary)] mb-6">What you'll need</h2>
              <div className="border-2 border-[var(--card-border)] rounded-lg divide-y divide-[var(--card-border)] overflow-hidden">
                {[
                  { label: 'Digitized files', detail: 'High-resolution scans or digital-born files in standard formats (TIFF, JPEG, PDF, MP3, MP4)' },
                  { label: 'Basic metadata', detail: 'Title, date, description, rights statement, and subject tags for each item or batch' },
                  { label: 'Rights confirmation', detail: 'Documentation that your organization has the right to publish — or a clear rights statement' },
                  { label: 'CC0 metadata agreement', detail: 'RW metadata is published as CC0. You must acknowledge this before onboarding.' },
                  { label: 'Staff contact', detail: 'A point person to coordinate with Recollection Wisconsin staff during onboarding' },
                ].map(item => (
                  <div key={item.label} className="bg-white px-6 py-5">
                    <div className="flex flex-col md:flex-row gap-3">
                      <span className="text-sm font-semibold text-[var(--primary)] md:w-48 flex-shrink-0">{item.label}</span>
                      <span className="text-sm text-[var(--muted-foreground)]">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process overview */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-[var(--primary)] mb-6">What happens after you apply</h2>
              <ol className="space-y-5">
                {[
                  'RW reviews your Get Started intake and follows up within 2 to 4 weeks.',
                  'A Recollection Wisconsin staff member schedules a discovery call to assess fit and readiness.',
                  'You complete a detailed collection agreement and transfer digitized files.',
                  'RW staff upload, describe, and quality-check your collection.',
                  'Your collection is published on RW and propagated to DPLA.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-5 bg-[var(--muted)] rounded-lg p-6">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center flex-shrink-0 text-base font-semibold">
                      {i + 1}
                    </div>
                    <span className="text-base text-[var(--foreground)] mt-1.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Not sure callout */}
            <div className="border-2 border-[var(--accent-warm)] bg-[var(--accent-warm-light)] rounded-lg p-6 flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-[var(--accent-warm)] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-base font-semibold text-[var(--foreground)] mb-3">Not sure if Hosting is right for you?</p>
                <div className="flex gap-6 flex-wrap">
                  <Link to="/contribute/harvesting" className="text-sm text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium">Compare with Harvesting →</Link>
                  <Link to="/contribute/contributor-faq" className="text-sm text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium">Read the FAQ →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[var(--card-border)] bg-gradient-to-br from-[var(--primary-light)] to-white py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl text-[var(--primary)] mb-4">Ready to share your collection?</h2>
          <p className="text-base text-[var(--muted-foreground)] mb-8">The Get Started wizard takes about 10 minutes and pre-selects Hosting for you.</p>
          <Link
            to="/contribute/get-started?pathway=hosting"
            className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-all hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-[var(--primary)]"
          >
            Start the Wizard with Hosting
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
