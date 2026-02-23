import React from 'react';
import { CheckCircle, X, BookOpen } from 'lucide-react';

interface SaveConfirmationModalProps {
  itemTitle: string;
  savedCount: number;
  onClose: () => void;
}

export function SaveConfirmationModal({ itemTitle, savedCount, onClose }: SaveConfirmationModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white border-4 border-black max-w-lg w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:bg-gray-100 p-2"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 border-4 border-green-500 mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Saved to Lesson Plan!</h2>
        </div>

        <div className="mb-6 p-4 bg-gray-50 border-2 border-gray-300">
          <p className="font-semibold mb-2">Item saved:</p>
          <p className="text-sm text-gray-700">{itemTitle}</p>
        </div>

        <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-300">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <p className="font-bold mb-1">Your Lesson Plan Collection</p>
              <p>You have saved <span className="font-semibold">{savedCount}</span> item{savedCount !== 1 ? 's' : ''} to your lesson plan.</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-black text-white hover:bg-gray-800 font-semibold"
          >
            Continue Searching
          </button>
          
          <button
            className="w-full px-6 py-3 border-2 border-black bg-white hover:bg-gray-100 font-semibold"
          >
            View My Lesson Plan ({savedCount})
          </button>
        </div>

        {/* Wireframe note */}
        <div className="mt-6 pt-4 border-t-2 border-gray-200 text-xs text-gray-600 text-center">
          [SUCCESS STATE MODAL - Low-fidelity confirmation]
        </div>
      </div>
    </div>
  );
}
