import { CheckCircle, Download, FileText, Mail, Bookmark, Home } from 'lucide-react';

interface DownloadConfirmationProps {
  onBackToHome: () => void;
}

export function DownloadConfirmation({ onBackToHome }: DownloadConfirmationProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Success message */}
      <div className="bg-white border-2 border-green-600 rounded-lg p-12 text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-green-700" />
        </div>
        <h1 className="text-3xl font-semibold text-neutral-900 mb-3">
          Download Complete!
        </h1>
        <p className="text-lg text-neutral-600 mb-6">
          Your lesson pack is ready to use in your classroom.
        </p>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center gap-2 text-green-900 font-medium mb-1">
            <FileText className="w-5 h-5" />
            immigrant-voices-lesson-pack.pdf
          </div>
          <div className="text-sm text-green-700">8.4 MB • Saved to your downloads folder</div>
        </div>

        <div className="text-sm text-neutral-600 max-w-md mx-auto">
          This resource pack includes full citations for all primary sources, making it easy to 
          reference materials in your lesson plans and student handouts.
        </div>
      </div>

      {/* Next steps */}
      <div className="bg-white border border-neutral-200 rounded-lg p-8 mb-6">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">What's Next?</h2>
        
        <div className="space-y-4">
          <button className="w-full flex items-start gap-4 p-4 border border-neutral-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all text-left group">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
              <Bookmark className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="font-medium text-neutral-900 mb-1">Create a Collection</div>
              <div className="text-sm text-neutral-600">
                Save resources to custom collections for easy access across school years
              </div>
            </div>
          </button>

          <button className="w-full flex items-start gap-4 p-4 border border-neutral-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all text-left group">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
              <Mail className="w-5 h-5 text-green-700 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="font-medium text-neutral-900 mb-1">Get Resource Updates</div>
              <div className="text-sm text-neutral-600">
                Receive notifications when new immigration history materials are added
              </div>
            </div>
          </button>

          <button className="w-full flex items-start gap-4 p-4 border border-neutral-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all text-left group">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 transition-colors">
              <Download className="w-5 h-5 text-amber-700 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="font-medium text-neutral-900 mb-1">Browse Related Resources</div>
              <div className="text-sm text-neutral-600">
                Explore additional materials on Wisconsin immigration and settlement patterns
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Return home */}
      <button
        onClick={onBackToHome}
        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <Home className="w-5 h-5" />
        Return to Homepage
      </button>

      {/* Step annotation */}
      <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
        <div className="font-semibold text-neutral-900 mb-1">Step 5: Download Confirmation & Next Steps</div>
        <p className="text-sm text-neutral-600">
          The educator receives confirmation that the lesson pack is downloaded with citation-ready 
          materials. Optional next actions include creating collections, getting updates, or exploring 
          related resources.
        </p>
      </div>
    </div>
  );
}
