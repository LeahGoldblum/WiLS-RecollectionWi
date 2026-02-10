import { FileText, Clock, Users, Award, Bookmark, Image as ImageIcon } from 'lucide-react';
import { Persona } from '../App';

interface FilteredResourcesProps {
  persona: Persona;
  filters: Record<string, string>;
  onSelectResource: (resource: any) => void;
  onBack: () => void;
}

export function FilteredResources({ persona, filters, onSelectResource, onBack }: FilteredResourcesProps) {
  // Mock resources tailored to each persona
  const getResourcesForPersona = () => {
    if (persona === 'educators') {
      return [
        {
          id: 1,
          title: 'Immigrant Voices: Wisconsin in the Late 19th Century',
          type: 'Lesson Plan with Primary Sources',
          description: 'A comprehensive lesson plan exploring immigration patterns to Wisconsin from 1870-1900. Includes letters, photographs, and census data from German, Norwegian, and Polish immigrant families.',
          metadata: {
            duration: '2-3 class periods',
            grade: 'Middle School (6-8)',
            standards: 'SS.Hist4.a.m, SS.Geog1.a.m',
            materials: '12 primary sources, teacher guide, student worksheets',
          },
          downloads: 247,
          featured: true,
        },
        {
          id: 2,
          title: 'Ellis Island to Wisconsin: Migration Routes & Stories',
          type: 'Primary Source Set',
          description: 'Curated collection of 15 historical documents tracing immigrant journeys from European ports through Ellis Island to Wisconsin communities.',
          metadata: {
            duration: '1 class period',
            grade: 'Middle School (6-8)',
            standards: 'SS.Hist4.a.m, SS.Geog2.b.m',
            materials: '15 primary sources, citation guide',
          },
          downloads: 189,
          featured: false,
        },
      ];
    } else if (persona === 'researchers') {
      return [
        {
          id: 1,
          title: 'Wisconsin Immigration Records Collection, 1850-1920',
          type: 'Manuscript Collection',
          description: 'Comprehensive collection of passenger manifests, naturalization records, and census data documenting European immigration to Wisconsin ports including Milwaukee, Green Bay, and Kenosha.',
          metadata: {
            items: '3,421 documents',
            dates: '1850-1920',
            repository: 'Wisconsin Historical Society',
            findingAid: 'Available',
          },
          downloads: 892,
          featured: true,
        },
        {
          id: 2,
          title: 'German-American Community Papers, Milwaukee County',
          type: 'Archival Collection',
          description: 'Letters, organizational records, and newspapers from German immigrant communities in Milwaukee. Includes original German-language documents with English translations.',
          metadata: {
            items: '1,247 items',
            dates: '1860-1915',
            repository: 'Milwaukee Public Library',
            findingAid: 'Available',
          },
          downloads: 634,
          featured: false,
        },
      ];
    } else if (persona === 'genealogists') {
      return [
        {
          id: 1,
          title: 'Milwaukee Port Immigration Records, 1870-1900',
          type: 'Immigration Records',
          description: 'Passenger arrival records for German, Polish, and Norwegian immigrants arriving at the Port of Milwaukee. Includes names, ages, places of origin, and destinations.',
          metadata: {
            records: '8,934 individuals',
            dates: '1870-1900',
            searchable: 'Yes',
            indexed: 'Fully indexed by name',
          },
          downloads: 1523,
          featured: true,
        },
        {
          id: 2,
          title: 'Wisconsin State Census Records, 1885',
          type: 'Census Records',
          description: 'State census enumeration including household composition, birthplaces, occupations, and property values. Particularly useful for tracking families between federal census years.',
          metadata: {
            records: '12,456 households',
            dates: '1885',
            searchable: 'Yes',
            indexed: 'By county and surname',
          },
          downloads: 2341,
          featured: false,
        },
      ];
    } else {
      return [
        {
          id: 1,
          title: 'Immigrant Neighborhoods: Then & Now',
          type: 'Digital Exhibit',
          description: 'Explore historic photographs of immigrant communities in Wisconsin cities paired with modern images showing neighborhood evolution. Interactive maps trace settlement patterns.',
          metadata: {
            format: 'Interactive exhibit',
            duration: '~20 minutes',
            items: '45 photographs',
            includes: 'Maps, stories, timeline',
          },
          downloads: 0,
          featured: true,
        },
        {
          id: 2,
          title: 'Voices from the Past: Immigration Stories',
          type: 'Story Collection',
          description: 'First-hand accounts and personal letters from immigrants describing their journey to Wisconsin and experiences building new lives in unfamiliar communities.',
          metadata: {
            format: 'Story collection',
            duration: '~15 minutes',
            items: '12 stories',
            includes: 'Original documents, transcriptions',
          },
          downloads: 0,
          featured: false,
        },
      ];
    }
  };

  const resources = getResourcesForPersona();

  const getPersonaLabel = (p: Persona) => {
    const labels = {
      educators: 'Educators',
      researchers: 'Researchers',
      genealogists: 'Genealogists',
      learners: 'Lifelong Learners',
    };
    return labels[p];
  };

  const getActiveFilters = () => {
    return Object.entries(filters)
      .filter(([_, value]) => value)
      .map(([key, value]) => ({ key, value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header with active filters */}
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
          {getPersonaLabel(persona)}
        </div>
        <h1 className="text-3xl font-semibold text-neutral-900 mb-4">Filtered Results</h1>
        
        {getActiveFilters().length > 0 && (
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-sm text-neutral-600">Active filters:</span>
            {getActiveFilters().map(({ key, value }) => (
              <span key={key} className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium">
                {value}
              </span>
            ))}
            <button
              onClick={onBack}
              className="px-3 py-1 text-blue-700 hover:text-blue-800 text-sm font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
        
        <p className="text-neutral-600 mt-2">{resources.length} results found</p>
      </div>

      {/* Resource cards */}
      <div className="space-y-6">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className={`bg-white border-2 rounded-lg p-6 hover:shadow-lg transition-all ${
              resource.featured ? 'border-amber-400 bg-amber-50/30' : 'border-neutral-200'
            }`}
          >
            {resource.featured && (
              <div className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-900 text-xs font-medium rounded mb-3">
                {persona === 'educators' ? 'Curated for Classroom Use' : 'Featured Resource'}
              </div>
            )}

            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {resource.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-neutral-100 text-neutral-700 text-sm rounded">
                    <FileText className="w-3 h-3" />
                    {resource.type}
                  </span>
                  {Object.entries(resource.metadata).slice(0, 2).map(([key, value]) => (
                    <span key={key} className="inline-flex items-center gap-1 px-2 py-1 bg-neutral-100 text-neutral-700 text-sm rounded">
                      {key === 'duration' && <Clock className="w-3 h-3" />}
                      {key === 'grade' && <Award className="w-3 h-3" />}
                      {value}
                    </span>
                  ))}
                </div>

                <p className="text-neutral-600 mb-4">{resource.description}</p>

                <div className="grid md:grid-cols-2 gap-3 text-sm mb-4">
                  {Object.entries(resource.metadata).slice(2).map(([key, value]) => (
                    <div key={key}>
                      <span className="font-medium text-neutral-700 capitalize">{key}:</span>
                      <span className="text-neutral-600 ml-2">{value}</span>
                    </div>
                  ))}
                </div>

                {resource.downloads > 0 && (
                  <div className="flex items-center gap-1 text-xs text-neutral-500">
                    <Users className="w-3 h-3" />
                    {resource.downloads.toLocaleString()} downloads
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 flex-shrink-0">
                <button
                  onClick={() => onSelectResource(resource)}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
                >
                  Preview Resource
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-2 border border-neutral-300 hover:border-blue-600 hover:bg-blue-50 text-neutral-700 hover:text-blue-700 rounded-lg transition-colors text-sm font-medium">
                  <Bookmark className="w-4 h-4" />
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Back button */}
      <button
        onClick={onBack}
        className="mt-8 px-6 py-3 border border-neutral-300 hover:border-neutral-400 text-neutral-700 font-medium rounded-lg transition-colors"
      >
        ← Back to Filters
      </button>
    </div>
  );
}
