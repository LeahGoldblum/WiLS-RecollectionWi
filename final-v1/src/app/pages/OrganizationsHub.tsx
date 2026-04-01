import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArrowRight, Server, Rss, HelpCircle, BookOpen, ExternalLink } from 'lucide-react';

export function OrganizationsHub() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Contribute' }]} />

      {/* Hero */}
      <section className="border-b border-[var(--card-border)] bg-gradient-to-br from-[var(--accent-warm-light)] via-white to-[var(--primary-light)] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Fee-free callout banner */}
          <div className="border-2 border-[var(--accent-sage)] bg-white rounded-lg px-6 py-4 mb-10 flex items-center gap-4 max-w-3xl mx-auto shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[var(--accent-sage-light)] flex items-center justify-center flex-shrink-0">
              <span className="w-3 h-3 bg-[var(--accent-sage)] rounded-full" />
            </div>
            <p className="text-sm text-[var(--foreground)]">
              <strong className="font-semibold text-[var(--accent-sage)]">No fees.</strong> Onboarding, hosting, and harvesting through Recollection Wisconsin are free to qualifying institutions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl text-[var(--primary)] mb-6 leading-tight">
              Partner with Us
            </h1>
            <p className="text-base md:text-lg text-[var(--foreground)] leading-relaxed mb-5">
              Recollection Wisconsin Content Partners include libraries, archives, museums, historical societies and other cultural heritage institutions from all parts of the state.
            </p>
            <p className="text-base text-[var(--muted-foreground)] leading-relaxed mb-5">
              Content Partners contribute descriptive information (metadata), URLs and thumbnail images representing their unique historical and cultural resources. We bring that information together into a single, searchable website and share it with the Digital Public Library of America.
            </p>
            <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
              Follow the links below to read more about each partnership option, or contact us to discuss which path is best for your organization.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contribute/get-started"
              className="inline-flex items-center justify-center gap-2 bg-[var(--accent-warm)] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[var(--accent-warm-hover)] transition-all hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent-warm)]"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contribute/contributor-faq"
              className="inline-flex items-center justify-center gap-2 border-2 border-[var(--card-border)] bg-white px-8 py-3.5 rounded-lg font-medium text-[var(--foreground)] hover:bg-[var(--muted)] hover:border-[var(--border-hover)] transition-all"
            >
              Contributor FAQ
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center gap-2 border-2 border-[var(--card-border)] bg-white px-8 py-3.5 rounded-lg font-medium text-[var(--foreground)] hover:bg-[var(--muted)] hover:border-[var(--border-hover)] transition-all"
            >
              Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Content truths bar */}
      <section className="border-b border-[var(--card-border)] bg-white py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[var(--primary-light)] rounded-lg p-6 text-center">
              <p className="text-xs text-[var(--primary)] font-semibold uppercase tracking-wider mb-2">Who can partner</p>
              <p className="text-sm text-[var(--foreground)] leading-relaxed">Libraries, archives, museums, historical societies and other cultural heritage institutions. Not private individuals.</p>
            </div>
            <div className="bg-[var(--accent-warm-light)] rounded-lg p-6 text-center">
              <p className="text-xs text-[var(--accent-warm)] font-semibold uppercase tracking-wider mb-2">Your ownership</p>
              <p className="text-sm text-[var(--foreground)] leading-relaxed">You retain full ownership of your materials. RW metadata records are published as CC0.</p>
            </div>
            <div className="bg-[var(--accent-sage-light)] rounded-lg p-6 text-center">
              <p className="text-xs text-[var(--accent-sage)] font-semibold uppercase tracking-wider mb-2">Cost</p>
              <p className="text-sm text-[var(--foreground)] leading-relaxed">Free. No onboarding, hosting, or harvesting fees for qualifying institutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pathway Cards */}
      <section className="py-16 md:py-20 bg-[var(--muted)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-[var(--primary)] mb-3 text-center">
              Your organization can become a Content Partner by:
            </h2>
            <p className="text-sm text-[var(--muted-foreground)] text-center mb-12">
              Choose the option that fits your organization's situation. Not sure? Contact us and we will help you decide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Collection Hosting */}
              <div className="border-2 border-[var(--card-border)] bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:border-[var(--primary)] transition-all flex flex-col">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-[var(--primary-light)]">
                  <div className="w-14 h-14 rounded-lg bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0">
                    <Server className="w-7 h-7 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-display text-xl text-[var(--primary)]">Collection Hosting</h3>
                </div>
                <p className="text-sm text-[var(--foreground)] mb-5 leading-relaxed">
                  Working with us to bring your collection online. RW hosts your materials directly on the Recollection Wisconsin platform.
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    'Best for organizations without an existing digital platform',
                    'RW manages technical infrastructure',
                    'Requires digitized files and metadata',
                    'Direct collaboration with Recollection Wisconsin staff',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--foreground)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 mt-auto">
                  <Link
                    to="/contribute/hosting"
                    className="flex-1 border-2 border-[var(--card-border)] text-center py-3 rounded-lg text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)] hover:border-[var(--border-hover)] transition-all"
                  >
                    Learn more
                  </Link>
                  <Link
                    to="/contribute/get-started?pathway=hosting"
                    className="flex-1 bg-[var(--primary)] text-white text-center py-3 rounded-lg text-sm font-medium hover:bg-[var(--primary-hover)] transition-all shadow-sm hover:shadow-md"
                  >
                    Get started
                  </Link>
                </div>
              </div>

              {/* Collection Harvesting */}
              <div className="border-2 border-[var(--card-border)] bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:border-[var(--primary)] transition-all flex flex-col">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-[var(--primary-light)]">
                  <div className="w-14 h-14 rounded-lg bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0">
                    <Rss className="w-7 h-7 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-display text-xl text-[var(--primary)]">Collection Harvesting</h3>
                </div>
                <p className="text-sm text-[var(--foreground)] mb-5 leading-relaxed">
                  Sharing metadata from an existing digital collection. RW harvests metadata and thumbnails from your platform via OAI-PMH.
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    'Best for organizations with CONTENTdm, Omeka, or similar',
                    'You maintain your own platform',
                    'Requires an OAI-PMH endpoint',
                    'Harvesting occurs every three months',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--foreground)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 mt-auto">
                  <Link
                    to="/contribute/harvesting"
                    className="flex-1 border-2 border-[var(--card-border)] text-center py-3 rounded-lg text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)] hover:border-[var(--border-hover)] transition-all"
                  >
                    Learn more
                  </Link>
                  <Link
                    to="/contribute/get-started?pathway=harvesting"
                    className="flex-1 bg-[var(--primary)] text-white text-center py-3 rounded-lg text-sm font-medium hover:bg-[var(--primary-hover)] transition-all shadow-sm hover:shadow-md"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Please note callout */}
      <section className="border-t border-[var(--card-border)] bg-white py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto border-2 border-[var(--info)] bg-[var(--primary-light)] rounded-lg p-6">
            <p className="text-sm font-semibold text-[var(--primary)] mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-xs">i</span>
              Please note:
            </p>
            <p className="text-sm text-[var(--foreground)] leading-relaxed">
              Recollection Wisconsin can partner with libraries, archives, museums, historical societies and other cultural heritage institutions, but not private individuals. If you have a personal collection of materials you wish to share, we encourage you to connect with your local library or historical society to discuss options for providing access to your content.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary CTA row */}
      <section className="border-t border-[var(--card-border)] bg-[var(--muted)] py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[var(--foreground)] font-medium mb-4">Still exploring? Start with the FAQ or browse resources.</p>
              <div className="flex gap-6 flex-wrap">
                <Link to="/contribute/contributor-faq" className="inline-flex items-center gap-2 text-sm text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium">
                  <HelpCircle className="w-4 h-4" /> Contributor FAQ
                </Link>
                <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium">
                  <BookOpen className="w-4 h-4" /> Resources library
                </Link>
                <a href="#" className="inline-flex items-center gap-2 text-sm text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium">
                  <ExternalLink className="w-4 h-4" /> Office hours
                </a>
              </div>
            </div>
            <Link
              to="/contribute/get-started"
              className="inline-flex items-center gap-2 bg-[var(--accent-warm)] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[var(--accent-warm-hover)] transition-all hover:shadow-md whitespace-nowrap focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent-warm)]"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
