import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8 mt-12 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-3">
              <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="url(#gradient-footer)"/>
                <path d="M12 28V12H24V16H16V20H22V24H16V28H12Z" fill="white"/>
                <circle cx="28" cy="20" r="4" fill="#FCD34D"/>
                <defs>
                  <linearGradient id="gradient-footer" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6"/>
                    <stop offset="1" stopColor="#8B5CF6"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold text-white">FairPay</span>
            </div>
            <p className="text-gray-400 mb-3 max-w-md text-sm">
              AI-driven salary insights and transparent compensation data for fair negotiations.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-current" />
              <span>for wage equality</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" onClick={scrollToTop} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/salary-predictor" onClick={scrollToTop} className="text-gray-400 hover:text-blue-400 transition-colors">
                  AI Predictor
                </Link>
              </li>
              <li>
                <Link to="/analytics" onClick={scrollToTop} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-base mb-3 text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/economic-insights" onClick={scrollToTop} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Data Sources
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-400">
              © 2025 FairPay. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>Data sources:</span>
              <span className="text-gray-400">FRED</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">Alpha Vantage</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">ExchangeRate-API</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
