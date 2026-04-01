import { useState } from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { CheckCircle, Map, BookOpen, Search, ChevronRight } from 'lucide-react';

const GRADE_BANDS = [
  { value: 'k2', label: 'K-2' },
  { value: '35', label: '3-5' },
  { value: '68', label: '6-8' },
  { value: '912', label: '9-12' },
  { value: 'post', label: 'Post-secondary / Adult' },
];

const TIME_OPTIONS = [
  { value: '10', label: 'Under 10 minutes' },
  { value: '30', label: 'About 30 minutes' },
  { value: '60', label: 'A full class period (50-60 min)' },
  { value: 'multi', label: 'Multiple class sessions' },
];

const TOPICS = [
  'Agriculture and Farm Life',
  'Civil Rights and Social Movements',
  'Immigration and Ethnic Communities',
  'Industry and Labor',
  'Military and War',
  'Native Nations of Wisconsin',
  'Natural Environment and Land Use',
  'Transportation and Commerce',
  'Urban Life',
  'Women\'s History',
];

interface Recommendation {
  type: 'exhibit' | 'map' | 'search';
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

function getRecommendations(grade: string, time: string, topic: string): Recommendation[] {
  const recs: Recommendation[] = [];

  // Always include one exhibit, one map, one search starter
  const exhibitMap: Record<string, { title: string; description: string }> = {
    k2:   { title: 'Main Street Mondays: Small-Town Wisconsin', description: 'Visual, accessible images from Wisconsin towns. Good for community discussion with younger learners.' },
    35:   { title: 'Wisconsin Through the Lens: Farm Life', description: 'Photographs of rural life with strong visual storytelling. Links to agriculture standards.' },
    68:   { title: "Milwaukee's Industrial Heritage", description: 'Factory photographs and worker portraits ideal for inquiry-based economics or labor history units.' },
    912:  { title: 'Immigration and Settlement in the Fox River Valley', description: 'Letters and portraits supporting primary source analysis and argument writing.' },
    post: { title: 'Wisconsin Women and the Vote', description: 'Suffrage pamphlets and organizing records suitable for critical analysis and historical context.' },
  };

  const mapDesc: Record<string, string> = {
    k2:   'Click on a region to see photographs. Use as a whole-class discussion anchor.',
    35:   'Select a region to find local images. Good for place-based inquiry starters.',
    68:   'Geographic context for regional comparison activities or map-based analysis.',
    912:  'Use region-specific records for document-based investigation tasks.',
    post: 'Start with geographic framing for regional case studies.',
  };

  const searchTopicMap: Record<string, string> = {
    'Agriculture and Farm Life': 'dairy farming wisconsin cheese',
    'Civil Rights and Social Movements': 'civil rights wisconsin',
    'Immigration and Ethnic Communities': 'immigration settlement wisconsin',
    'Industry and Labor': 'labor movement milwaukee union',
    'Military and War': 'world war II wisconsin home front',
    'Native Nations of Wisconsin': 'native nations ojibwe wisconsin',
    'Natural Environment and Land Use': 'logging wisconsin lumber',
    'Transportation and Commerce': 'fox river valley appleton',
    'Urban Life': 'milwaukee',
    "Women's History": 'suffrage women wisconsin vote',
  };

  const searchQuery = topic && searchTopicMap[topic]
    ? searchTopicMap[topic]
    : 'wisconsin history';

  const searchLabel = topic || 'Wisconsin History (general)';

  recs.push({
    type: 'exhibit',
    title: (exhibitMap[grade] || exhibitMap['68']).title,
    description: (exhibitMap[grade] || exhibitMap['68']).description,
    href: '/for-educators/featured-series',
    linkLabel: 'View in Online Exhibits',
  });

  recs.push({
    type: 'map',
    title: 'Map Explorer: Browse by Region',
    description: (mapDesc[grade] || mapDesc['68']) + (time === '10' ? ' Can be completed in under 10 minutes as a warm-up.' : ''),
    href: '/for-educators/explore-place',
    linkLabel: 'Open Map Explorer',
  });

  recs.push({
    type: 'search',
    title: `Search Starter: ${searchLabel}`,
    description: `A pre-built search to jump directly into images and documents related to ${searchLabel.toLowerCase()}. No browsing required.`,
    href: `/for-educators/search-starters`,
    linkLabel: 'View Search Starters',
  });

  return recs;
}

const typeIcons = {
  exhibit: <BookOpen className="w-5 h-5 text-neutral-600" />,
  map: <Map className="w-5 h-5 text-neutral-600" />,
  search: <Search className="w-5 h-5 text-neutral-600" />,
};

const typeLabels = {
  exhibit: 'Online Exhibit',
  map: 'Map Exploration',
  search: 'Search Starter',
};

export function QuickFind() {
  const [step, setStep] = useState(1);
  const [grade, setGrade] = useState('');
  const [time, setTime] = useState('');
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<Recommendation[] | null>(null);

  const canAdvance = () => {
    if (step === 1) return grade !== '';
    if (step === 2) return time !== '';
    return true; // step 3 topic is optional
  };

  const handleSubmit = () => {
    setResults(getRecommendations(grade, time, topic));
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setGrade('');
    setTime('');
    setTopic('');
    setResults(null);
  };

  return (
    <>
      <Breadcrumb items={[
        { label: 'For Educators', href: '/for-educators' },
        { label: 'Quick Find' },
      ]} />

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl">
            <h1 className="font-display text-2xl md:text-3xl text-neutral-900 mb-2">Quick Find</h1>
            <p className="text-base text-neutral-600">
              Answer 3 short questions. Get 3 recommended starting points in under 60 seconds.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto">

            {/* Step indicator */}
            {step < 4 && (
              <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-6 h-6 border flex items-center justify-center text-xs font-mono transition-colors ${
                      s === step ? 'border-neutral-900 bg-neutral-900 text-white' :
                      s < step ? 'border-neutral-400 bg-neutral-100 text-neutral-600' :
                      'border-neutral-200 text-neutral-400'
                    }`}>
                      {s < step ? <CheckCircle className="w-3.5 h-3.5" /> : s}
                    </div>
                    {s < 3 && <div className={`h-px w-8 ${s < step ? 'bg-neutral-400' : 'bg-neutral-200'}`} />}
                  </div>
                ))}
                <span className="ml-3 text-xs font-mono text-neutral-400">Step {step} of 3</span>
              </div>
            )}

            {/* Step 1: Grade band */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <h2 className="font-display text-xl text-neutral-900 mb-1">What grade band are you teaching?</h2>
                  <p className="text-sm text-neutral-500">We will tailor exhibit recommendations to the right complexity level.</p>
                </div>
                <div className="space-y-2">
                  {GRADE_BANDS.map((band) => (
                    <label key={band.value} className={`flex items-center gap-3 p-3 border cursor-pointer transition-colors ${
                      grade === band.value ? 'border-neutral-900 bg-neutral-50' : 'border-neutral-200 hover:border-neutral-400'
                    }`}>
                      <input
                        type="radio"
                        name="grade"
                        value={band.value}
                        checked={grade === band.value}
                        onChange={() => setGrade(band.value)}
                        className="accent-neutral-800"
                      />
                      <span className="text-sm text-neutral-800">{band.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Time */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h2 className="font-display text-xl text-neutral-900 mb-1">How much time do you have?</h2>
                  <p className="text-sm text-neutral-500">We will prioritize resources that fit your session length.</p>
                </div>
                <div className="space-y-2">
                  {TIME_OPTIONS.map((opt) => (
                    <label key={opt.value} className={`flex items-center gap-3 p-3 border cursor-pointer transition-colors ${
                      time === opt.value ? 'border-neutral-900 bg-neutral-50' : 'border-neutral-200 hover:border-neutral-400'
                    }`}>
                      <input
                        type="radio"
                        name="time"
                        value={opt.value}
                        checked={time === opt.value}
                        onChange={() => setTime(opt.value)}
                        className="accent-neutral-800"
                      />
                      <span className="text-sm text-neutral-800">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Topic */}
            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <h2 className="font-display text-xl text-neutral-900 mb-1">Do you have a topic in mind?</h2>
                  <p className="text-sm text-neutral-500">Optional. If you skip this, we will suggest general starting points.</p>
                </div>
                <div className="space-y-2">
                  {TOPICS.map((t) => (
                    <label key={t} className={`flex items-center gap-3 p-3 border cursor-pointer transition-colors ${
                      topic === t ? 'border-neutral-900 bg-neutral-50' : 'border-neutral-200 hover:border-neutral-400'
                    }`}>
                      <input
                        type="radio"
                        name="topic"
                        value={t}
                        checked={topic === t}
                        onChange={() => setTopic(t)}
                        className="accent-neutral-800"
                      />
                      <span className="text-sm text-neutral-800">{t}</span>
                    </label>
                  ))}
                  <label className={`flex items-center gap-3 p-3 border cursor-pointer transition-colors ${
                    topic === '' && step === 3 ? 'border-neutral-900 bg-neutral-50' : 'border-neutral-200 hover:border-neutral-400'
                  }`}>
                    <input
                      type="radio"
                      name="topic"
                      value=""
                      checked={topic === ''}
                      onChange={() => setTopic('')}
                      className="accent-neutral-800"
                    />
                    <span className="text-sm text-neutral-800 italic">No preference -- show me general starters</span>
                  </label>
                </div>
              </div>
            )}

            {/* Results */}
            {step === 4 && results && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-5 h-5 text-neutral-700" />
                    <h2 className="font-display text-xl text-neutral-900">3 recommended starting points</h2>
                  </div>
                  <p className="text-sm text-neutral-500">
                    Based on: {GRADE_BANDS.find(b => b.value === grade)?.label},{' '}
                    {TIME_OPTIONS.find(t => t.value === time)?.label.toLowerCase()},{' '}
                    {topic || 'no specific topic'}.
                  </p>
                </div>

                <div className="space-y-4">
                  {results.map((rec, i) => (
                    <div key={i} className="border border-neutral-200 p-5 hover:shadow-sm transition-all">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 border border-neutral-200 bg-neutral-50 flex items-center justify-center flex-shrink-0">
                          {typeIcons[rec.type]}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-mono text-neutral-400 uppercase tracking-wide mb-1">{typeLabels[rec.type]}</p>
                          <p className="text-sm font-medium text-neutral-900 mb-1">{rec.title}</p>
                          <p className="text-sm text-neutral-600 leading-relaxed">{rec.description}</p>
                          <Link
                            to={rec.href}
                            className="inline-flex items-center gap-1 mt-3 text-sm text-neutral-700 hover:text-neutral-900 hover:underline transition-colors"
                          >
                            {rec.linkLabel} <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleReset}
                  className="text-sm text-neutral-500 hover:text-neutral-800 hover:underline transition-colors"
                >
                  Start over
                </button>
              </div>
            )}

            {/* Navigation buttons */}
            {step < 4 && (
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={() => setStep(s => Math.max(1, s - 1))}
                  disabled={step === 1}
                  className="border border-neutral-300 px-6 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Back
                </button>
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(s => s + 1)}
                    disabled={!canAdvance()}
                    className="inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-2.5 text-sm hover:bg-neutral-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-2.5 text-sm hover:bg-neutral-700 transition-colors"
                  >
                    Show my results <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
