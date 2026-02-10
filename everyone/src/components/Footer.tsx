import { Mail, Facebook, Twitter, Archive } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Archive className="w-5 h-5 text-neutral-400" />
              <h3 className="font-semibold text-white">Recollection Wisconsin</h3>
            </div>
            <p className="text-sm text-neutral-400">
              Preserving and sharing Wisconsin's cultural heritage through digital collections and educational resources.
            </p>
          </div>

          {/* For Users */}
          <div>
            <h4 className="font-semibold text-white mb-3">Explore By</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Educators</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Researchers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Genealogists</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lifelong Learners</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">How to Use Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Citation Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Request Materials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-3">Connect</h4>
            <ul className="space-y-2 text-sm mb-4">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Institutions</a></li>
            </ul>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-neutral-700 hover:bg-neutral-600 rounded flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-neutral-700 hover:bg-neutral-600 rounded flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-neutral-700 hover:bg-neutral-600 rounded flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <p>© 2026 Wisconsin Historical Society. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
