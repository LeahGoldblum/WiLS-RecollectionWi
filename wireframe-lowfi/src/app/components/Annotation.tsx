import React from 'react';

interface AnnotationProps {
  children: React.ReactNode;
  position?: 'left' | 'right';
  className?: string;
}

export function Annotation({ children, position = 'right', className = '' }: AnnotationProps) {
  return (
    <div className={`w-64 border-2 border-amber-600 bg-amber-50 p-4 shadow-sm ${className}`}>
      <div className="mb-2 flex items-center gap-2">
        <div className="w-3 h-3 border-2 border-amber-600 bg-amber-400"></div>
        <span className="text-xs font-mono text-amber-900 font-bold">UX NOTE</span>
      </div>
      <div className="text-xs font-mono text-gray-800 leading-relaxed">
        {children}
      </div>
      {/* Connector Line */}
      <div
        className={`absolute top-6 ${
          position === 'right' ? '-left-6' : '-right-6'
        } w-6 h-0.5 bg-amber-600`}
      ></div>
    </div>
  );
}