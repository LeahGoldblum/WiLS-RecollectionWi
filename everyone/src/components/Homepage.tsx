import { GraduationCap, BookOpen, Users, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Persona } from '../App';

interface HomepageProps {
  onSelectPersona: (persona: Persona) => void;
}

export function Homepage({ onSelectPersona }: HomepageProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">
          Explore Wisconsin's Cultural Heritage
        </h1>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          Discover digitized primary sources, curated collections, and educational resources 
          that bring Wisconsin's rich history to life.
        </p>
      </section>

      {/* Persona cards */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-2 text-center">
          Explore by Your Interest
        </h2>
        <p className="text-neutral-600 text-center mb-8">
          Choose the path that best fits your research goals
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Educators */}
          <button
            onClick={() => onSelectPersona('educators')}
            className="group relative overflow-hidden bg-white border-2 border-neutral-200 hover:border-blue-600 rounded-lg text-left transition-all hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1639414839074-51d49728c748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjB2aW50YWdlfGVufDF8fHx8MTc3MDA5NTI3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Library books"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">For Educators</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-neutral-600 mb-3">
                Find classroom-ready materials, lesson plans, and primary sources aligned with 
                Wisconsin educational standards.
              </p>
              <span className="text-blue-700 font-medium group-hover:text-blue-800">
                Browse educational resources →
              </span>
            </div>
          </button>

          {/* Researchers */}
          <button
            onClick={() => onSelectPersona('researchers')}
            className="group relative overflow-hidden bg-white border-2 border-neutral-200 hover:border-blue-600 rounded-lg text-left transition-all hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769092992803-ee97d235ba87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXZlJTIwcmVzZWFyY2glMjBkb2N1bWVudHxlbnwxfHx8fDE3NzAxMzkyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Archive research"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">For Researchers</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-neutral-600 mb-3">
                Search metadata-rich archives, manuscripts, and historical documents for academic 
                research and scholarship.
              </p>
              <span className="text-blue-700 font-medium group-hover:text-blue-800">
                Access research archives →
              </span>
            </div>
          </button>

          {/* Genealogists */}
          <button
            onClick={() => onSelectPersona('genealogists')}
            className="group relative overflow-hidden bg-white border-2 border-neutral-200 hover:border-blue-600 rounded-lg text-left transition-all hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767806109066-580a5c7a35d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB0cmVlJTIwZ2VuZWFsb2d5fGVufDF8fHx8MTc3MDEzOTI2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Family history"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">For Genealogists</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-neutral-600 mb-3">
                Trace family stories through vital records, immigration documents, census data, 
                and community archives.
              </p>
              <span className="text-blue-700 font-medium group-hover:text-blue-800">
                Explore family histories →
              </span>
            </div>
          </button>

          {/* Lifelong Learners */}
          <button
            onClick={() => onSelectPersona('learners')}
            className="group relative overflow-hidden bg-white border-2 border-neutral-200 hover:border-blue-600 rounded-lg text-left transition-all hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764253340517-9adc9a839970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBsZWFybmluZyUyMGV4cGxvcmF0aW9ufGVufDF8fHx8MTc3MDEzOTI2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Museum exploration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">For Lifelong Learners</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-neutral-600 mb-3">
                Browse by curiosity—discover Wisconsin stories, community collections, and 
                cultural heritage through curated exhibits.
              </p>
              <span className="text-blue-700 font-medium group-hover:text-blue-800">
                Start exploring →
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Featured collections */}
      <section className="bg-white border border-neutral-200 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Featured Collections</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="border border-neutral-200 rounded-lg p-4 hover:border-blue-600 transition-colors cursor-pointer">
            <div className="font-medium text-neutral-900 mb-1">Immigration & Migration</div>
            <div className="text-sm text-neutral-600 mb-2">Stories of arrival and settlement</div>
            <div className="text-xs text-neutral-500">1,247 items</div>
          </div>
          <div className="border border-neutral-200 rounded-lg p-4 hover:border-blue-600 transition-colors cursor-pointer">
            <div className="font-medium text-neutral-900 mb-1">Indigenous Wisconsin</div>
            <div className="text-sm text-neutral-600 mb-2">First peoples and nations</div>
            <div className="text-xs text-neutral-500">892 items</div>
          </div>
          <div className="border border-neutral-200 rounded-lg p-4 hover:border-blue-600 transition-colors cursor-pointer">
            <div className="font-medium text-neutral-900 mb-1">Industrial Heritage</div>
            <div className="text-sm text-neutral-600 mb-2">Manufacturing and labor history</div>
            <div className="text-xs text-neutral-500">1,056 items</div>
          </div>
          <div className="border border-neutral-200 rounded-lg p-4 hover:border-blue-600 transition-colors cursor-pointer">
            <div className="font-medium text-neutral-900 mb-1">Rural Communities</div>
            <div className="text-sm text-neutral-600 mb-2">Agriculture and small towns</div>
            <div className="text-xs text-neutral-500">734 items</div>
          </div>
        </div>
      </section>
    </div>
  );
}
