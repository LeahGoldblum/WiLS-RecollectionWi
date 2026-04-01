interface NavigationAnnotationProps {
  title: string;
  description: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function NavigationAnnotation({ title, description, position = 'bottom-right' }: NavigationAnnotationProps) {
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-56 border-2 border-dashed border-neutral-400 bg-white p-3 shadow-sm z-50 hidden lg:block`}>
      <div className="space-y-2">
        <h4 className="font-mono text-xs text-neutral-800 border-b border-neutral-300 pb-1">
          {title}
        </h4>
        <p className="font-mono text-xs text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
