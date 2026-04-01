import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArrowRight, Server, Rss, Camera, HelpCircle, BookOpen, ExternalLink } from 'lucide-react';

export function OrganizationsHub() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Partner With Us' }]} />

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Fee-free callout banner */}
          <div className="border border-neutral-300 bg-white px-4 py-2.5 mb-8 flex items-center gap-3 max-w-2xl mx-auto">
            <span className="w-2 h-2 bg-neutral-700 rounded-full flex-shrink-0" />
            <p className="text-sm text-neutral-700">
              <strong className="font-semibold">No fees.</strong> Onboarding, hosting, and harvesting through Recollection Wisconsin are free to qualifying institutions.
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-5">
              Partner with Us
            </h1>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-4">
              Recollection Wisconsin Content Partners include libraries, archives, museums, historical societies and other cultural heritage institutions from all parts of the state.
            </p>
            <p className="text-base text-neutral-600 leading-relaxed mb-4">
              Content Partners contribute descriptive information (metadata), URLs and thumbnail images representing their unique historical and cultural resources. We bring that information together into a single, searchable website and share it with the Digital Public Library of America.
            </p>
            <p className="text-base text-neutral-600 leading-relaxed">
              Follow the links below to read more about each partnership option, or contact us to discuss which path is best for your organization.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/organizations/get-started"
              className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-7 py-3 text-sm hover:bg-neutral-700 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/organizations/contributor-faq"
              className="inline-flex items-center justify-center gap-2 border border-neutral-400 px-7 py-3 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              Contributor FAQ
            </Link>
            <Link
              to="/organizations/resources"
              className="inline-flex items-center justify-center gap-2 border border-neutral-400 px-7 py-3 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Content truths bar */}
      <section className="border-b border-neutral-200 bg-white py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-center">
            <div className="py-3 px-4">
              <p className="text-sm text-neutral-500 font-mono uppercase tracking-wide mb-1">Who can partner</p>
              <p className="text-sm text-neutral-700">Libraries, archives, museums, historical societies and other cultural heritage institutions. Not private individuals.</p>
            </div>
            <div className="border-x border-neutral-200 py-3 px-4">
              <p className="text-sm text-neutral-500 font-mono uppercase tracking-wide mb-1">Your ownership</p>
              <p className="text-sm text-neutral-700">You retain full ownership of your materials. RW metadata records are published as CC0.</p>
            </div>
            <div className="py-3 px-4">
              <p className="text-sm text-neutral-500 font-mono uppercase tracking-wide mb-1">Cost</p>
              <p className="text-sm text-neutral-700">Free. No onboarding, hosting, or harvesting fees for qualifying institutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pathway Cards */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-neutral-900 mb-2 text-center">
              Your organization can become a Content Partner by:
            </h2>
            <p className="text-sm text-neutral-500 text-center mb-10">
              Choose the option that fits your organization's situation. Not sure? Contact us and we will help you decide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Collection Hosting */}
              <div className="border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-neutral-400 transition-all flex flex-col">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-100">
                  <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                    <Server className="w-5 h-5 text-neutral-600" />
                  </div>
                  <h3 className="font-display text-lg text-neutral-900">Collection Hosting</h3>
                </div>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  Working with us to bring your collection online. RW hosts your materials directly on the Recollection Wisconsin platform.
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {[
                    'Best for organizations without an existing digital platform',
                    'RW manages technical infrastructure',
                    'Requires digitized files and metadata',
                    'Direct collaboration with WiLS staff',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="text-neutral-400 mt-1 flex-shrink-0 text-xs">&#9656;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 mt-auto">
                  <Link
                    to="/organizations/hosting"
                    className="flex-1 border border-neutral-300 text-center py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
                  >
                    Learn more
                  </Link>
                  <Link
                    to="/organizations/get-started?pathway=hosting"
                    className="flex-1 bg-neutral-900 text-white text-center py-2 text-sm hover:bg-neutral-700 transition-colors"
                  >
                    Get started
                  </Link>
                </div>
              </div>

              {/* Collection Harvesting */}
              <div className="border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-neutral-400 transition-all flex flex-col">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-100">
                  <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                    <Rss className="w-5 h-5 text-neutral-600" />
                  </div>
                  <h3 className="font-display text-lg text-neutral-900">Collection Harvesting</h3>
                </div>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  Sharing metadata from an existing digital collection. RW harvests metadata and thumbnails from your platform via OAI-PMH.
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {[
                    'Best for organizations with CONTENTdm, Omeka, or similar',
                    'You maintain your own platform',
                    'Requires an OAI-PMH endpoint',
                    'Quarterly harvest cadence (approx. 3 month delay)',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="text-neutral-400 mt-1 flex-shrink-0 text-xs">&#9656;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 mt-auto">
                  <Link
                    to="/organizations/harvesting"
                    className="flex-1 border border-neutral-300 text-center py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
                  >
                    Learn more
                  </Link>
                  <Link
                    to="/organizations/get-started?pathway=harvesting"
                    className="flex-1 bg-neutral-900 text-white text-center py-2 text-sm hover:bg-neutral-700 transition-colors"
                  >
                    Get started
                  </Link>
                </div>
              </div>

              {/* RWDI */}
              <div className="border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-neutral-400 transition-all flex flex-col">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-100">
                  <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                    <Camera className="w-5 h-5 text-neutral-600" />
                  </div>
                  <h3 className="font-display text-lg text-neutral-900">RW Digitization Initiative</h3>
                </div>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  For organizations with undigitized materials. RW may assist with scanning, metadata creation, and publishing.
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {[
                    'For collections not yet digitized',
                    'Competitive selection process',
                    'Focus on underrepresented Wisconsin stories',
                    'Full technical and metadata support',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="text-neutral-400 mt-1 flex-shrink-0 text-xs">&#9656;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 mt-auto">
                  <Link
                    to="/organizations/get-started?pathway=rwdi"
                    className="w-full bg-neutral-900 text-white text-center py-2 text-sm hover:bg-neutral-700 transition-colors"
                  >
                    Express Interest
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Please note callout */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto border border-neutral-300 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-800 mb-2">Please note:</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Recollection Wisconsin can partner with libraries, archives, museums, historical societies and other cultural heritage institutions, but not private individuals. If you have a personal collection of materials you wish to share, we encourage you to connect with your local library or historical society to discuss options for providing access to your content.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary CTA row */}
      <section className="border-t border-neutral-200 bg-white py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-neutral-700 mb-2">Still exploring? Start with the FAQ or browse resources.</p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/organizations/contributor-faq" className="inline-flex items-center gap-1 text-sm text-neutral-700 hover:underline">
                  <HelpCircle className="w-4 h-4" /> Contributor FAQ
                </Link>
                <Link to="/organizations/resources" className="inline-flex items-center gap-1 text-sm text-neutral-700 hover:underline">
                  <BookOpen className="w-4 h-4" /> Resources library
                </Link>
                <a href="#" className="inline-flex items-center gap-1 text-sm text-neutral-700 hover:underline">
                  <ExternalLink className="w-4 h-4" /> Office hours (link)
                </a>
              </div>
            </div>
            <Link
              to="/organizations/get-started"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3 text-sm hover:bg-neutral-700 transition-colors whitespace-nowrap focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900"
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
