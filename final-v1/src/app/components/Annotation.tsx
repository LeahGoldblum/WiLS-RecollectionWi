interface AnnotationProps {
  number: number;
  text: string;
  position?: 'left' | 'right';
}

export function Annotation({ number, text, position = 'right' }: AnnotationProps) {
  return (
    <div
      className={`hidden lg:block absolute ${
        position === 'right' ? 'right-0 translate-x-[110%]' : 'left-0 -translate-x-[110%]'
      } top-4 md:top-8 w-56 xl:w-64 border-2 border-dashed border-neutral-400 bg-white p-3 md:p-4 shadow-sm`}
    >
      <div className="flex items-start gap-2 md:gap-3">
        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-neutral-700 bg-neutral-50 flex items-center justify-center flex-shrink-0">
          <span className="font-mono text-xs text-neutral-700">{number}</span>
        </div>
        <p className="font-mono text-xs text-neutral-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}