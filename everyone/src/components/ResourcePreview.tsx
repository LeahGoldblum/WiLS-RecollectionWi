import { Download, FileText, CheckCircle, ExternalLink, Bookmark, Link2, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Persona } from '../App';

interface ResourcePreviewProps {
  persona: Persona;
  resource: any;
  onBack: () => void;
}

export function ResourcePreview({ persona, resource, onBack }: ResourcePreviewProps) {
  const [citationCopied, setCitationCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  // Mock data - in real app this would come from resource prop
  const primarySources = [
    { id: 1, title: 'Letter from Johann Schmidt to family in Germany, 1882', type: 'Document', format: 'PDF' },
    { id: 2, title: 'Milwaukee immigration arrival records, 1875-1890', type: 'Census Data', format: 'PDF' },
    { id: 3, title: 'Norwegian immigrant family photograph, Green Bay, 1888', type: 'Photograph', format: 'JPG' },
    { id: 4, title: 'Polish community church dedication program, Stevens Point, 1891', type: 'Document', format: 'PDF' },
  ];

  const citationAPA = '"Immigrant Voices: Wisconsin in the Late 19th Century." (2024). Recollection Wisconsin, Wisconsin Historical Society. Retrieved February 3, 2026, from https://recollectionwisconsin.org/educators/immigrant-voices-1870-1900';
  
  const citationChicago = '"Immigrant Voices: Wisconsin in the Late 19th Century." Recollection Wisconsin. Wisconsin Historical Society. Accessed February 3, 2026. https://recollectionwisconsin.org/educators/immigrant-voices-1870-1900.';

  const handleCopyCitation = (text: string) => {
    navigator.clipboard.writeText(text);
    setCitationCopied(true);
    setTimeout(() => setCitationCopied(false), 2000);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const getPersonaLabel = (p: Persona) => {
    const labels = {
      educators: 'Educators',
      researchers: 'Researchers',
      genealogists: 'Genealogists',
      learners: 'Lifelong Learners',
    };
    return labels[p];
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Resource header */}
      <div className="bg-white border border-neutral-200 rounded-lg p-8 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
              {getPersonaLabel(persona)}
            </div>
            {resource?.featured && (
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-medium rounded-full mb-3 ml-2">
                Featured Resource
              </div>
            )}
          </div>
          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-4 py-2 border-2 rounded-lg transition-colors font-medium ${
              saved
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-neutral-300 hover:border-blue-600 text-neutral-700'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
            {saved ? 'Saved' : 'Save to My Collections'}
          </button>
        </div>

        <h1 className="text-3xl font-semibold text-neutral-900 mb-3">
          {resource?.title || 'Immigrant Voices: Wisconsin in the Late 19th Century'}
        </h1>
        <p className="text-lg text-neutral-600 mb-6">
          {resource?.description || 'A comprehensive lesson plan exploring immigration patterns to Wisconsin from 1870-1900. Includes letters, photographs, and census data from German, Norwegian, and Polish immigrant families.'}
        </p>

        <div className="grid md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-neutral-200">
          {resource?.metadata && Object.entries(resource.metadata).slice(0, 4).map(([key, value]) => (
            <div key={key}>
              <div className="text-sm font-medium text-neutral-700 mb-1 capitalize">{key}</div>
              <div className="text-neutral-600">{value as string}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download Complete Resource
          </button>
          <button className="px-6 py-4 border border-neutral-300 hover:border-neutral-400 text-neutral-700 font-medium rounded-lg transition-colors">
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* What's included */}
      {persona === 'educators' && (
        <div className="bg-white border border-neutral-200 rounded-lg p-8 mb-6">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            What's Included in This Lesson Pack
          </h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-neutral-900">Complete Teacher Guide (12 pages)</div>
                <div className="text-sm text-neutral-600">Lesson objectives, historical context, discussion prompts, and answer keys</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-neutral-900">Student Activity Worksheets (8 pages)</div>
                <div className="text-sm text-neutral-600">Document analysis templates, graphic organizers, and reflection prompts</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-neutral-900">12 Primary Source Documents</div>
                <div className="text-sm text-neutral-600">Letters, photographs, census records with full citations</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-neutral-900">Assessment Rubric</div>
                <div className="text-sm text-neutral-600">Standards-aligned evaluation criteria for student work</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sample materials */}
      {(persona === 'educators' || persona === 'researchers' || persona === 'genealogists') && (
        <div className="bg-white border border-neutral-200 rounded-lg p-8 mb-6">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {persona === 'educators' ? 'Sample Primary Sources' : 'Sample Materials'} (4 of 12)
          </h2>
          
          <div className="space-y-3">
            {primarySources.map((source) => (
              <div
                key={source.id}
                className="flex items-center justify-between p-3 border border-neutral-200 rounded hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded flex items-center justify-center">
                    <FileText className="w-5 h-5 text-neutral-600" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">{source.title}</div>
                    <div className="text-sm text-neutral-500">{source.type} • {source.format}</div>
                  </div>
                </div>
                <button className="text-blue-700 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                  Preview
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Citation information */}
      <div className="bg-white border border-neutral-200 rounded-lg p-8 mb-6">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
          <Link2 className="w-5 h-5 text-blue-700" />
          Cite This Resource
        </h2>
        
        <p className="text-sm text-neutral-600 mb-4">
          All primary sources include individual citations with archival references and permanent URLs.
        </p>

        <div className="space-y-4">
          {/* APA */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-neutral-700">APA Style (7th edition)</label>
              <button
                onClick={() => handleCopyCitation(citationAPA)}
                className="flex items-center gap-1 px-3 py-1 text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                {citationCopied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <div className="text-sm text-neutral-700 bg-neutral-50 p-4 rounded border border-neutral-200 font-mono">
              {citationAPA}
            </div>
          </div>

          {/* Chicago */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-neutral-700">Chicago Style (17th edition)</label>
              <button
                onClick={() => handleCopyCitation(citationChicago)}
                className="flex items-center gap-1 px-3 py-1 text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
            <div className="text-sm text-neutral-700 bg-neutral-50 p-4 rounded border border-neutral-200 font-mono">
              {citationChicago}
            </div>
          </div>
        </div>
      </div>

      {/* Metadata (for researchers) */}
      {persona === 'researchers' && (
        <div className="bg-white border border-neutral-200 rounded-lg p-8 mb-6">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">Collection Metadata</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-medium text-neutral-700 mb-1">Repository</div>
              <div className="text-neutral-600">Wisconsin Historical Society</div>
            </div>
            <div>
              <div className="font-medium text-neutral-700 mb-1">Collection ID</div>
              <div className="text-neutral-600">WHI-MSS-1247</div>
            </div>
            <div>
              <div className="font-medium text-neutral-700 mb-1">Finding Aid</div>
              <div className="text-neutral-600">
                <a href="#" className="text-blue-700 hover:underline">View full finding aid →</a>
              </div>
            </div>
            <div>
              <div className="font-medium text-neutral-700 mb-1">Rights</div>
              <div className="text-neutral-600">Public domain</div>
            </div>
          </div>
        </div>
      )}

      {/* Back button */}
      <button
        onClick={onBack}
        className="px-6 py-3 border border-neutral-300 hover:border-neutral-400 text-neutral-700 font-medium rounded-lg transition-colors"
      >
        ← Back to Results
      </button>
    </div>
  );
}
