import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArrowRight, Clock, SlidersHorizontal, X, Star } from 'lucide-react';
import { resourceSets, type ResourceSet } from '../data/educatorResourceSets';

const gradeBandOptions = ['Elementary', 'Middle', 'High'];
const timeOptions = ['5 min', '15 min', '45 min', '1 class period'];
const formatOptions = ['Source Set', 'Worksheet', 'Slide Deck', 'Activity'];
const topicOptions = ['Wisconsin Communities', 'Indigenous History', 'Immigration', 'Industry & Labor', 'Environment', 'Government/Civics'];

function ResultCard({ set, recommended }: { set: ResourceSet; recommended?: boolean }) {
  return (
    <Link
      to={`/for-educators/resource-set/${set.id}`}
      className="border border-[var(--card-border)] bg-white rounded-lg p-5 hover:shadow-md hover:border-[var(--border-hover)] transition-all group flex flex-col relative"
    >
      {recommended && (
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 font-mono text-xs rounded-md bg-[var(--accent-warm-light)] text-[var(--primary)]">
          <Star className="w-3 h-3" /> Recommended
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2 mb-3 pr-24">
        <span className="font-mono text-xs px-2 py-0.5 text-white rounded-sm bg-[var(--primary)]">{set.gradeBand}</span>
        <span className="font-mono text-xs px-2 py-0.5 border border-[var(--card-border)] text-[var(--muted-foreground)] rounded-sm flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {set.time}
        </span>
        <span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-[var(--accent-warm-light)]">{set.format}</span>
      </div>
      <h3 className="font-display text-base text-[var(--primary)] mb-2 group-hover:text-[var(--accent-sage)] transition-colors">{set.title}</h3>
      <p className="text-sm text-[var(--muted-foreground)] mb-4 flex-1">{set.teachingOutcome}</p>
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-[var(--muted-foreground)]">{set.topic}</span>
        <span className="font-mono text-xs text-[var(--accent-sage)] flex items-center gap-1">
          Use this set <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}

export function EducatorTeachingResources() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(true);

  const [grade, setGrade] = useState<string>(searchParams.get('grade') || '');
  const [time, setTime] = useState<string>(searchParams.get('time') || '');
  const [format, setFormat] = useState<string>(searchParams.get('format') || '');
  const [topic, setTopic] = useState<string>(searchParams.get('topic') || '');
  const [standards, setStandards] = useState(false);
  const isRecommended = searchParams.get('recommended') === '1';

  useEffect(() => {
    const params: Record<string, string> = {};
    if (grade) params.grade = grade;
    if (time) params.time = time;
    if (format) params.format = format;
    if (topic) params.topic = topic;
    if (isRecommended) params.recommended = '1';
    setSearchParams(params, { replace: true });
  }, [grade, time, format, topic, isRecommended, setSearchParams]);

  const clearAll = () => {
    setGrade('');
    setTime('');
    setFormat('');
    setTopic('');
  };

  const hasFilters = !!(grade || time || format || topic);

  const filtered = resourceSets.filter((s) => {
    if (grade && !s.gradeBand.toLowerCase().includes(grade.toLowerCase())) return false;
    if (format && s.format !== format) return false;
    if (topic && s.topic !== topic) return false;
    if (time === '5 min' && s.time !== '15 min' && s.time !== '5 min') return false;
    return true;
  });

  const recommended = isRecommended ? filtered.slice(0, 3) : [];
  const rest = isRecommended ? filtered.slice(3) : filtered;
  const activeFilterCount = [grade, time, format, topic].filter(Boolean).length;

  return (
    <>
      <Breadcrumb items={[{ label: 'For Educators', href: '/for-educators' }, { label: 'Explore Teaching Resources' }]} />

      <div className="bg-white">
        <div className="border-b border-[var(--card-border)] py-4 bg-[var(--muted)]">
          <div className="container mx-auto px-4 md:px-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="font-display text-xl text-[var(--primary)]">Explore Teaching Resources</h1>
              <p className="text-sm text-[var(--muted-foreground)]">
                {filtered.length} set{filtered.length !== 1 ? 's' : ''} available
                {hasFilters ? ' matching your filters' : ''}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {hasFilters && (
                <button onClick={clearAll} className="font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] flex items-center gap-1">
                  <X className="w-3 h-3" /> Clear filters
                </button>
              )}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-1.5 border border-[var(--card-border)] bg-white px-3 py-2 rounded-lg font-mono text-xs text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors md:hidden"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="flex gap-8 py-8">
            <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 lg:w-64 flex-shrink-0 md:sticky md:top-24 md:self-start`}>
              <div className="space-y-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-3">Grade Band</p>
                  <div className="space-y-1.5">
                    {gradeBandOptions.map((g) => (
                      <button
                        key={g}
                        onClick={() => setGrade(grade === g ? '' : g)}
                        className="w-full text-left px-3 py-2 font-mono text-sm border rounded-md transition-colors"
                        style={grade === g ? { backgroundColor: 'var(--primary)', borderColor: 'var(--primary)', color: 'white' } : { borderColor: 'var(--card-border)', color: 'var(--foreground)' }}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-3">Time Available</p>
                  <div className="space-y-1.5">
                    {timeOptions.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTime(time === t ? '' : t)}
                        className="w-full text-left px-3 py-2 font-mono text-sm border rounded-md transition-colors"
                        style={time === t ? { backgroundColor: 'var(--primary)', borderColor: 'var(--primary)', color: 'white' } : { borderColor: 'var(--card-border)', color: 'var(--foreground)' }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-3">Format</p>
                  <div className="space-y-1.5">
                    {formatOptions.map((f) => (
                      <button
                        key={f}
                        onClick={() => setFormat(format === f ? '' : f)}
                        className="w-full text-left px-3 py-2 font-mono text-sm border rounded-md transition-colors"
                        style={format === f ? { backgroundColor: 'var(--primary)', borderColor: 'var(--primary)', color: 'white' } : { borderColor: 'var(--card-border)', color: 'var(--foreground)' }}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-3">Topic</p>
                  <div className="space-y-1.5">
                    {topicOptions.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTopic(topic === t ? '' : t)}
                        className="w-full text-left px-3 py-2 font-mono text-xs border rounded-md transition-colors"
                        style={topic === t ? { backgroundColor: 'var(--primary)', borderColor: 'var(--primary)', color: 'white' } : { borderColor: 'var(--card-border)', color: 'var(--foreground)' }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[var(--card-border)] pt-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div
                      onClick={() => setStandards(!standards)}
                      className="w-9 h-5 rounded-full flex items-center transition-colors flex-shrink-0 cursor-pointer"
                      style={{ backgroundColor: standards ? 'var(--primary)' : '#d1d5db' }}
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow transition-transform" style={{ transform: standards ? 'translateX(18px)' : 'translateX(2px)' }} />
                    </div>
                    <span className="font-mono text-xs text-[var(--foreground)]">Standards aligned only</span>
                  </label>
                </div>
              </div>
            </aside>

            <main className="flex-1 min-w-0">
              {isRecommended && recommended.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 mb-4 rounded-md bg-[var(--accent-warm-light)]">
                    <Star className="w-4 h-4 text-[var(--primary)]" />
                    <span className="font-mono text-sm text-[var(--primary)]">Recommended for you based on your selections</span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                    {recommended.map((s) => (
                      <ResultCard key={s.id} set={s} recommended />
                    ))}
                  </div>
                  {rest.length > 0 && (
                    <div className="border-t border-[var(--card-border)] pt-6 mb-4">
                      <p className="font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-widest mb-4">All materials</p>
                    </div>
                  )}
                </div>
              )}

              {rest.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {rest.map((s) => (
                    <ResultCard key={s.id} set={s} />
                  ))}
                </div>
              ) : !isRecommended && filtered.length === 0 ? (
                <div className="border border-[var(--card-border)] rounded-lg p-10 text-center">
                  <p className="font-mono text-sm text-[var(--muted-foreground)] mb-2">No materials match your current filters.</p>
                  <button onClick={clearAll} className="font-mono text-xs underline text-[var(--primary)]">
                    Clear all filters
                  </button>
                </div>
              ) : null}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
