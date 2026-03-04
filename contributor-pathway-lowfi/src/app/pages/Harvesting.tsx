import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArrowRight, CheckCircle, Clock, HelpCircle, Info } from 'lucide-react';

export function Harvesting() {
  return (
    <>
      <Breadcrumb items={[
        { label: 'Partner With Us', href: '/organizations' },
        { label: 'Harvesting' },
      ]} />

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-3">Pathway</p>
          <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-4">Harvesting</h1>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
            If your organization already has a digital platform, RW can harvest your collection's metadata and thumbnails using OAI-PMH — making your materials discoverable through RW and DPLA without moving them.
          </p>
          <div className="mt-6">
            <Link
              to="/organizations/get-started?pathway=harvesting"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3 text-sm hover:bg-neutral-700 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900"
            >
              Get Started — Harvesting
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-10">

            {/* What is Harvesting */}
            <div>
              <h2 className="font-display text-xl md:text-2xl text-neutral-900 mb-3">What is Harvesting?</h2>
              <div className="border-l-2 border-neutral-200 pl-5 space-y-3">
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Harvesting means RW copies (or "harvests") the descriptive metadata and thumbnail images from your existing digital collection platform — not your original files. Your content stays on your servers. RW aggregates the descriptive data so your items appear in the RW portal and DPLA alongside other Wisconsin collections.
                </p>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  This pathway preserves your organization's autonomy and is ideal for institutions already running their own CONTENTdm, Omeka, DSpace, or similar repository.
                </p>
              </div>
            </div>

            {/* OAI-PMH callout */}
            <div className="border border-neutral-300 bg-neutral-50 p-5">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-neutral-800 mb-1">What is OAI-PMH?</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting) is a standard technical protocol that allows systems to share structured metadata automatically. Most major library and museum platforms — CONTENTdm, Omeka, DSpace, ArchivesSpace, and others — support it. If you're not sure whether your platform has an OAI-PMH endpoint, your IT staff or platform vendor can confirm.
                  </p>
                </div>
              </div>
            </div>

            {/* Quarterly harvest callout */}
            <div className="border border-neutral-300 bg-neutral-50 p-5">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-neutral-800 mb-1">Harvest cadence: quarterly</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    RW runs harvests on a <strong>quarterly schedule</strong>. This means changes you make to your collection — new items, updated metadata, removed items — may take <strong>up to approximately 3 months</strong> to appear in or be removed from the RW portal and DPLA. Plan your onboarding and updates accordingly.
                  </p>
                </div>
              </div>
            </div>

            {/* Best for you if */}
            <div>
              <h2 className="font-display text-xl md:text-2xl text-neutral-900 mb-4">Best for you if…</h2>
              <ul className="space-y-3">
                {[
                  'You already have a functioning digital repository (CONTENTdm, Omeka, etc.)',
                  'Your platform supports OAI-PMH metadata export',
                  'You want your items discoverable via RW + DPLA without migrating content',
                  'Your organization has capacity to maintain your own platform long-term',
                  'You can accept a ~quarterly lag for new/updated items to appear',
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
                  { label: 'OAI-PMH endpoint', detail: 'A working OAI-PMH feed from your platform. RW will test the endpoint before harvesting begins.' },
                  { label: 'Dublin Core metadata', detail: 'Standard descriptive metadata fields: title, date, description, format, rights.' },
                  { label: 'Thumbnail images', detail: 'Representative images accessible via URL for display in the RW and DPLA portals.' },
                  { label: 'Rights statement', detail: 'A clear statement of copyright or rights status for each item or collection.' },
                  { label: 'CC0 metadata agreement', detail: 'Acknowledgement that RW metadata records are published as CC0.' },
                ].map(item => (
                  <div key={item.label} className="flex gap-4 px-4 py-3">
                    <span className="text-sm font-medium text-neutral-800 w-44 flex-shrink-0">{item.label}</span>
                    <span className="text-sm text-neutral-600">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not sure callout */}
            <div className="border border-neutral-200 bg-neutral-50 p-5 flex items-start gap-3">
              <HelpCircle className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-neutral-700 mb-2">
                  Not sure if you have an OAI-PMH endpoint? That's OK. You can indicate "unsure" in the wizard and a WiLS staff member will help assess your readiness.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link to="/organizations/hosting" className="text-sm text-neutral-700 hover:underline">Compare with Hosting →</Link>
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
          <h2 className="font-display text-2xl text-neutral-900 mb-3">Ready to connect your collection?</h2>
          <p className="text-sm text-neutral-600 mb-6">The wizard takes about 10 minutes and pre-selects Harvesting for you. You can indicate "unsure" for any technical questions.</p>
          <Link
            to="/organizations/get-started?pathway=harvesting"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-3 text-sm hover:bg-neutral-700 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900"
          >
            Start the Wizard — Harvesting
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
