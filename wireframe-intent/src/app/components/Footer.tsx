export function Footer() {
  return (
    <footer className="border-t border-neutral-300 bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8">
          {/* Institutional Logos */}
          <div>
            <div className="border border-neutral-400 bg-neutral-50 h-16 md:h-20 flex items-center justify-center mb-2">
              <span className="font-mono text-xs text-neutral-600">LOGO</span>
            </div>
            <p className="font-mono text-xs text-neutral-500 text-center">Partner Institution</p>
          </div>
          <div>
            <div className="border border-neutral-400 bg-neutral-50 h-16 md:h-20 flex items-center justify-center mb-2">
              <span className="font-mono text-xs text-neutral-600">LOGO</span>
            </div>
            <p className="font-mono text-xs text-neutral-500 text-center">Partner Institution</p>
          </div>
          <div>
            <div className="border border-neutral-400 bg-neutral-50 h-16 md:h-20 flex items-center justify-center mb-2">
              <span className="font-mono text-xs text-neutral-600">LOGO</span>
            </div>
            <p className="font-mono text-xs text-neutral-500 text-center">Partner Institution</p>
          </div>
          <div>
            <div className="border border-neutral-400 bg-neutral-50 h-16 md:h-20 flex items-center justify-center mb-2">
              <span className="font-mono text-xs text-neutral-600">LOGO</span>
            </div>
            <p className="font-mono text-xs text-neutral-500 text-center">Partner Institution</p>
          </div>
        </div>

        {/* Site Map */}
        <div className="border-t border-neutral-300 pt-6 md:pt-8 mb-4 md:mb-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-12">
            <a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Privacy Policy</a>
            <a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Terms of Use</a>
            <a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Accessibility</a>
            <a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">API Documentation</a>
            <a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Contact Support</a>
          </div>
        </div>

        {/* Attribution */}
        <div className="text-center">
          <p className="font-mono text-xs md:text-sm text-neutral-700">
            Supported by <span className="border-b border-neutral-700">WiLS</span> (Wisconsin Library Services)
          </p>
        </div>
      </div>
    </footer>
  );
}