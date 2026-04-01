import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArrowRight, Clock, Download, Copy, BookOpen, MessageSquare, List, FileText, Check } from 'lucide-react';
import { resourceSets } from '../data/educatorResourceSets';

const typeIcon = (type: string) => {
  switch (type) {
    case 'Photograph':
    case 'Photograph pair':
    case 'Photograph set':
      return '📷';
    case 'Document':
    case 'Letter':
      return '📄';
    case 'Worksheet':
      return '📝';
    case 'Guide':
    case 'Reference':
      return '📋';
    case 'Map':
      return '🗺';
    case 'Slide Deck':
      return '🖥';
    case 'Template':
      return '📐';
    case 'Infographic':
      return '📊';
    case 'Rubric':
      return '✅';
    case 'Artifact scan':
      return '🏺';
    default:
      return '📁';
  }
};

export function EducatorResourceSetDetail() {
  const { id } = useParams<{ id: string }>();
  const [copied, setCopied] = useState(false);
  const set = resourceSets.find((s) => s.id === id);

  if (!set) return <Navigate to="/for-educators/teaching-resources" replace />;

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'For Educators', href: '/for-educators' },
          { label: 'Explore Teaching Resources', href: '/for-educators/teaching-resources' },
          { label: set.title },
        ]}
      />

      <div className="sticky top-[65px] z-30 border-b border-[var(--card-border)] py-3 bg-[var(--primary)]">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-neutral-200 hidden sm:block">{set.title}</span>
            <span className="font-mono text-xs px-2 py-0.5 bg-white/20 text-white">{set.gradeBand}</span>
            <span className="font-mono text-xs text-neutral-300 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {set.time}
            </span>
          </div>
          <button className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-lg font-mono text-sm text-[var(--primary)] hover:bg-neutral-100 transition-colors">
            Use this set
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-mono text-xs px-2 py-0.5 text-white rounded-sm bg-[var(--primary)]">{set.gradeBand}</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-[var(--accent-warm-light)]">{set.format}</span>
                  <span className="font-mono text-xs px-2 py-0.5 border border-[var(--card-border)] text-[var(--muted-foreground)] rounded-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {set.time}
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 border border-[var(--card-border)] text-[var(--muted-foreground)] rounded-sm">
                    {set.topic}
                  </span>
                </div>
                <h1 className="font-display text-2xl md:text-3xl text-[var(--primary)] mb-4">{set.title}</h1>
                <div className="border-l-4 border-[var(--card-border)] pl-4 py-1">
                  <p className="font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-widest mb-1">Essential Question</p>
                  <p className="text-base text-[var(--foreground)] italic">{set.essentialQuestion}</p>
                </div>
              </div>

              <div className="border border-[var(--card-border)] rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <List className="w-4 h-4 text-[var(--muted-foreground)]" />
                  <h2 className="font-display text-lg text-[var(--primary)]">What you&apos;ll do</h2>
                </div>
                <ol className="space-y-3">
                  {set.whatYoullDo.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center font-mono text-xs text-white rounded-sm bg-[var(--primary)]">
                        {i + 1}
                      </span>
                      <p className="text-sm text-[var(--foreground)] pt-0.5">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-4 h-4 text-[var(--muted-foreground)]" />
                  <h2 className="font-display text-lg text-[var(--primary)]">Materials included</h2>
                  <span className="font-mono text-xs text-[var(--muted-foreground)]">({set.materials.length} items)</span>
                </div>
                <div className="border border-[var(--card-border)] rounded-lg divide-y divide-[var(--card-border)]">
                  {set.materials.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 px-4 py-3">
                      <span className="text-lg flex-shrink-0">{typeIcon(item.type)}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-[var(--foreground)] truncate">{item.title}</p>
                        <p className="font-mono text-xs text-[var(--muted-foreground)]">{item.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="border border-[var(--card-border)] rounded-lg p-5 space-y-3">
                <h3 className="font-display text-base text-[var(--primary)] mb-4">Get this set</h3>
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-mono text-sm text-white bg-[var(--primary)] transition-colors hover:opacity-90">
                  Use this set
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-mono text-xs border border-[var(--card-border)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors">
                  <Download className="w-3.5 h-3.5" />
                  Download printable worksheet (PDF)
                </button>
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-mono text-xs border border-[var(--card-border)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-600">Link copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy share link
                    </>
                  )}
                </button>
              </div>

              <div className="border border-[var(--card-border)] rounded-lg p-5">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-4 h-4 text-[var(--muted-foreground)]" />
                  <h3 className="font-display text-base text-[var(--primary)]">Discussion prompts</h3>
                </div>
                <ul className="space-y-3">
                  {set.discussionPrompts.map((prompt, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                      <p className="text-sm text-[var(--foreground)]">{prompt}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-[var(--card-border)] rounded-lg p-5">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-[var(--muted-foreground)]" />
                  <h3 className="font-display text-base text-[var(--primary)]">Vocabulary</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {set.vocabulary.map((word) => (
                    <span key={word} className="font-mono text-xs px-2 py-1 border border-[var(--card-border)] text-[var(--foreground)] rounded-sm">
                      {word}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[var(--muted)]">
                <p className="font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-widest mb-2">Teaching Outcome</p>
                <p className="text-sm text-[var(--foreground)]">{set.teachingOutcome}</p>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <section className="border-t border-[var(--card-border)] py-8 md:py-10 bg-[var(--muted)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-5">
            <h2 className="font-display text-xl text-[var(--primary)]">More sets you might like</h2>
            <Link
              to="/for-educators/teaching-resources"
              className="font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:underline flex items-center gap-1"
            >
              Browse all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resourceSets
              .filter((s) => s.id !== id)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/for-educators/resource-set/${s.id}`}
                  className="border border-[var(--card-border)] bg-white rounded-lg p-5 hover:shadow-md hover:border-[var(--border-hover)] transition-all group"
                >
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="font-mono text-xs px-2 py-0.5 text-white rounded-sm bg-[var(--primary)]">{s.gradeBand}</span>
                    <span className="font-mono text-xs px-2 py-0.5 border border-[var(--card-border)] text-[var(--muted-foreground)] rounded-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {s.time}
                    </span>
                  </div>
                  <h3 className="font-display text-sm text-[var(--primary)] group-hover:text-[var(--accent-sage)] transition-colors mb-1">{s.title}</h3>
                  <p className="font-mono text-xs text-[var(--muted-foreground)]">{s.format}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
