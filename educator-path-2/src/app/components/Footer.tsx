import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="border-t border-neutral-300 bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Institutional Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8">
          {['Partner Institution', 'Partner Institution', 'Partner Institution', 'Partner Institution'].map((label, i) => (
            <div key={i}>
              <div className="border border-neutral-400 bg-neutral-50 h-16 md:h-20 flex items-center justify-center mb-2">
                <span className="font-mono text-xs text-neutral-600">LOGO</span>
              </div>
              <p className="font-mono text-xs text-neutral-500 text-center">{label}</p>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div className="border-t border-neutral-300 pt-6 md:pt-8 mb-4 md:mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-3">Discover</p>
              <ul className="space-y-2">
                <li><a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Search Collections</a></li>
                <li><a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Browse by Topic</a></li>
                <li><a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Featured Collections</a></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-3">Partner</p>
              <ul className="space-y-2">
                <li><Link to="/organizations" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Partner Overview</Link></li>
                <li><Link to="/organizations/hosting" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Hosting</Link></li>
                <li><Link to="/organizations/harvesting" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Harvesting</Link></li>
                <li><Link to="/organizations/get-started" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Get Started</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-3">Resources</p>
              <ul className="space-y-2">
                <li><Link to="/organizations/resources" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Resource Library</Link></li>
                <li><Link to="/organizations/contributor-faq" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Contributor FAQ</Link></li>
                <li><a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Educators</a></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-3">About</p>
              <ul className="space-y-2">
                <li><a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">About RW</a></li>
                <li><a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Contact Us</a></li>
                <li><a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">API Documentation</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-t border-neutral-200 pt-5">
            <a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Privacy Policy</a>
            <a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Terms of Use</a>
            <a href="#" className="font-mono text-xs text-neutral-600 hover:text-neutral-800 hover:underline transition-all">Accessibility</a>
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
