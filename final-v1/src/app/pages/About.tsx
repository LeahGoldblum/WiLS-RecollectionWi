import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <>
      <Breadcrumb items={[{ label: 'About' }]} />

      <section className="border-b border-[var(--card-border)] bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl text-[var(--primary)] mb-5 leading-tight">
              About Recollection Wisconsin
            </h1>
            <p className="text-base md:text-lg text-[var(--foreground)] leading-relaxed">
              Recollection Wisconsin is a statewide network that helps libraries, archives, museums,
              historical societies, and other cultural heritage institutions share Wisconsin history
              collections online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--muted)] border-b border-[var(--card-border)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white border-2 border-[var(--card-border)] rounded-lg p-6">
              <p className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-2">Mission</p>
              <p className="text-sm text-[var(--foreground)] leading-relaxed">
                Increase access to Wisconsin primary sources for education, research, and public
                history.
              </p>
            </div>
            <div className="bg-white border-2 border-[var(--card-border)] rounded-lg p-6">
              <p className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-2">Network</p>
              <p className="text-sm text-[var(--foreground)] leading-relaxed">
                Content partners across Wisconsin contribute metadata and collection records.
              </p>
            </div>
            <div className="bg-white border-2 border-[var(--card-border)] rounded-lg p-6">
              <p className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-2">Reach</p>
              <p className="text-sm text-[var(--foreground)] leading-relaxed">
                Collections are discoverable through Recollection Wisconsin and the Digital Public
                Library of America.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto border-2 border-[var(--card-border)] rounded-lg p-7">
            <h2 className="font-display text-2xl text-[var(--primary)] mb-3">Interested in becoming a content partner?</h2>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
              Learn how Hosting and Harvesting pathways work, then submit your organization details
              through the contributor intake flow.
            </p>
            <Link
              to="/contribute"
              className="inline-flex items-center gap-2 bg-[var(--accent-warm)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--accent-warm-hover)] transition-colors"
            >
              Explore Contribute Pathways
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
