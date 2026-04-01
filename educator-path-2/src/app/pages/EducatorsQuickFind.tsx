import { useState } from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';

const gradeBands = ['Elementary', 'Middle', 'High', 'Any'] as const;
const timeOptions = ['5 min', '15 min', '1 class', 'Flexible'] as const;

export function EducatorsQuickFind() {
  const [step, setStep] = useState(1);
  const [gradeBand, setGradeBand] = useState<string>('Any');
  const [timeAvailable, setTimeAvailable] = useState<string>('15 min');
  const [topic, setTopic] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const canContinue =
    (step === 1 && !!gradeBand) ||
    (step === 2 && !!timeAvailable) ||
    (step === 3);

  const starterQuery = `${topic || 'Wisconsin history'} ${gradeBand} ${timeAvailable}`.trim();

  return (
    <>
      <Breadcrumb items={[{ label: 'Educators', href: '/educators' }, { label: 'Quick Find' }]} />

      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-3">Quick Find in 60 seconds</h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Pick a few options and get three recommended starting points.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="border border-neutral-200 p-5 md:p-6 bg-white">
            <p className="text-xs text-neutral-500 font-mono mb-4">Step {step} of 3</p>

            {step === 1 && (
              <div>
                <h2 className="font-display text-xl text-neutral-900 mb-3">1. Grade band</h2>
                <div className="grid grid-cols-2 gap-2">
                  {gradeBands.map(option => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setGradeBand(option)}
                      className={`border px-3 py-2.5 text-sm text-left transition-colors ${
                        gradeBand === option
                          ? 'border-neutral-900 bg-neutral-100 text-neutral-900'
                          : 'border-neutral-300 hover:border-neutral-500 text-neutral-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display text-xl text-neutral-900 mb-3">2. Time available</h2>
                <div className="grid grid-cols-2 gap-2">
                  {timeOptions.map(option => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setTimeAvailable(option)}
                      className={`border px-3 py-2.5 text-sm text-left transition-colors ${
                        timeAvailable === option
                          ? 'border-neutral-900 bg-neutral-100 text-neutral-900'
                          : 'border-neutral-300 hover:border-neutral-500 text-neutral-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-display text-xl text-neutral-900 mb-3">3. Topic (optional)</h2>
                <input
                  type="text"
                  value={topic}
                  onChange={event => setTopic(event.target.value)}
                  placeholder="e.g. immigration, logging, civil rights"
                  className="w-full border border-neutral-300 px-3 py-2.5 text-sm text-neutral-800 bg-white placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-800"
                />
              </div>
            )}

            <div className="flex items-center justify-between mt-6">
              <button
                type="button"
                onClick={() => setStep(prev => Math.max(1, prev - 1))}
                disabled={step === 1}
                className="border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Back
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(prev => Math.min(3, prev + 1))}
                  disabled={!canContinue}
                  className="bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-700 transition-colors disabled:opacity-40"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-700 transition-colors"
                >
                  Show 3 recommendations
                </button>
              )}
            </div>
          </div>

          {submitted && (
            <div className="border border-neutral-200 bg-neutral-50 p-5 md:p-6 mt-6">
              <h3 className="font-display text-xl text-neutral-900 mb-3">Your 3 recommended starting points</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="border border-neutral-200 bg-white p-3">
                  <p className="text-sm text-neutral-800 mb-2">Visual exhibit entry</p>
                  <Link to="/educators/exhibits" className="text-sm text-neutral-700 hover:underline">
                    Open Online Exhibits
                  </Link>
                </div>
                <div className="border border-neutral-200 bg-white p-3">
                  <p className="text-sm text-neutral-800 mb-2">Place-first exploration</p>
                  <Link to="/educators/map" className="text-sm text-neutral-700 hover:underline">
                    Open Map Explorer
                  </Link>
                </div>
                <div className="border border-neutral-200 bg-white p-3">
                  <p className="text-sm text-neutral-800 mb-2">Starter pack for "{starterQuery}"</p>
                  <Link
                    to={`/educators/search-starters?q=${encodeURIComponent(starterQuery)}`}
                    className="text-sm text-neutral-700 hover:underline"
                  >
                    Open Search Starter
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
