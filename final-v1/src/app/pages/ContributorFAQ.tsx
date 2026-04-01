import { useState } from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const faqData: { category: string; items: FAQItem[] }[] = [
  {
    category: 'Eligibility',
    items: [
      {
        q: 'Can an individual contribute to Recollection Wisconsin?',
        a: 'Recollection Wisconsin works with institutions, not individuals. Eligible partners include libraries, museums, historical societies, archives, and similar nonprofit cultural heritage organizations based in Wisconsin. If you are an individual with materials of historical significance, we recommend connecting with a local institution such as your county historical society or public library.',
      },
      {
        q: 'Does my organization need to be a 501(c)(3)?',
        a: 'You do not need to be a 501(c)(3), but you must be an established cultural heritage institution — a library, museum, historical society, archive, or similar organization — with a mandate to preserve and share public historical materials.',
      },
      {
        q: 'Are there costs involved?',
        a: 'No. Onboarding, hosting, and harvesting through Recollection Wisconsin are free to qualifying institutions. There are no subscription fees, setup fees, or ongoing charges for participation.',
      },
    ],
  },
  {
    category: 'Formats & Collection Requirements',
    items: [
      {
        q: 'What types of materials can I contribute?',
        a: 'We accept a wide range of formats: photographs, maps, manuscripts, documents, newspapers, oral histories, audio recordings, video, and digital-born materials. All materials must be related to Wisconsin history, culture, or community.',
      },
      {
        q: 'Do my materials need to already be digitized?',
        a: 'For Hosting and Harvesting pathways, yes — your materials should already be digitized or in digital form. If you have undigitized physical materials you\'d like to contribute, you may apply to the RW Digitization Initiative (RWDI), which supports select organizations with scanning and metadata creation.',
      },
      {
        q: 'What file formats are accepted?',
        a: 'For images: TIFF (preferred) or high-resolution JPEG. For documents: PDF. For audio: WAV or MP3. For video: MP4. Master files should meet minimum resolution standards; RW staff can share technical guidelines during onboarding.',
      },
    ],
  },
  {
    category: 'Ownership, Rights & CC0',
    items: [
      {
        q: 'Do I retain ownership of my collection?',
        a: 'Yes. Your organization retains full ownership and copyright of your original materials. Contributing to Recollection Wisconsin does not transfer ownership or copyright to RW. You grant RW a non-exclusive license to display and aggregate your materials for public access.',
      },
      {
        q: 'What does CC0 metadata mean?',
        a: 'Recollection Wisconsin publishes the descriptive metadata records (title, description, date, subject tags, etc.) about each item as CC0 — meaning those records are placed in the public domain and can be freely reused by anyone. This applies to the metadata record only, not to the original image or document itself. You must acknowledge this policy before onboarding.',
      },
      {
        q: 'What if I\'m unsure about the rights to my materials?',
        a: 'You can indicate "unsure" during the intake process — there\'s no penalty for uncertainty. A Recollection Wisconsin staff member will review your situation and help you navigate rights assessment. We recommend reviewing the RightsStatements.org vocabulary before your discovery call.',
      },
    ],
  },
  {
    category: 'OAI-PMH & Harvesting',
    items: [
      {
        q: 'What is OAI-PMH and does my platform support it?',
        a: 'OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting) is a standard protocol that allows systems to exchange structured metadata automatically. Most major digital repository platforms support it — including CONTENTdm, Omeka, DSpace, ArchivesSpace, and Islandora. To check, look for an OAI endpoint URL in your platform\'s settings, or ask your IT staff or software vendor.',
      },
      {
        q: 'How often does Recollection Wisconsin harvest metadata?',
        a: 'RW runs harvests every three months. This means new items, updated metadata, or removed items may take up to three months to be reflected in the RW portal and DPLA. If you need a specific publication date, plan your submission accordingly.',
      },
    ],
  },
  {
    category: 'Timeline & Process',
    items: [
      {
        q: 'How long does onboarding take?',
        a: 'Timelines vary. After submitting the Get Started intake, expect an initial response from RW staff within 2–4 weeks. Full onboarding — including a discovery call, agreement, file transfer, and metadata review — typically takes 1–4 months depending on collection size and readiness.',
      },
      {
        q: 'What happens after I submit the intake wizard?',
        a: 'A Recollection Wisconsin staff member will review your submission and follow up by email to schedule a discovery call. This call helps us confirm pathway fit, discuss technical requirements, and plan next steps. No commitment is made at the wizard stage.',
      },
    ],
  },
];

function AccordionItem({ q, a }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-4 px-5 text-left hover:bg-neutral-50 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900"
      >
        <span className="text-sm text-neutral-800 pr-4">{q}</span>
        <ChevronDown className={`w-4 h-4 text-neutral-500 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-neutral-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function ContributorFAQ() {
  return (
    <>
      <Breadcrumb items={[
        { label: 'Contribute', href: '/contribute' },
        { label: 'Contributor FAQ' },
      ]} />

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-3">Contributor FAQ</h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Answers to the most common questions from organizations considering partnership with Recollection Wisconsin.
          </p>
        </div>
      </section>

      {/* FAQ body */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            {faqData.map((section) => (
              <div key={section.category}>
                <h2 className="font-display text-lg text-neutral-800 mb-3 pb-2 border-b border-neutral-200">
                  {section.category}
                </h2>
                <div className="border border-neutral-200">
                  {section.items.map((item) => (
                    <AccordionItem key={item.q} {...item} />
                  ))}
                </div>
              </div>
            ))}

            {/* Still unsure section */}
            <div className="border border-neutral-200 bg-neutral-50 p-6">
              <h2 className="font-display text-lg text-neutral-900 mb-2">Still unsure? Start here.</h2>
              <p className="text-sm text-neutral-600 mb-5 leading-relaxed">
                The Get Started wizard is designed to work even if you're not sure which pathway fits or whether you meet requirements. You can answer "unsure" for any technical question — no dead ends. A Recollection Wisconsin staff member reviews every submission personally.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contribute/get-started"
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-7 py-2.5 text-sm hover:bg-neutral-700 transition-colors"
                >
                  Start the Wizard
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contribute"
                  className="inline-flex items-center justify-center gap-2 border border-neutral-300 px-7 py-2.5 text-sm text-neutral-700 hover:bg-white transition-colors"
                >
                  Back to Contribute Hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
