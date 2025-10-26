import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800 transition-all">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="url(#gradient)"/>
              <path d="M12 28V12H24V16H16V20H22V24H16V28H12Z" fill="white"/>
              <circle cx="28" cy="20" r="4" fill="#FCD34D"/>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3B82F6"/>
                  <stop offset="1" stopColor="#8B5CF6"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="text-xl font-bold text-gray-900 dark:text-white">FairPay</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm"
            >
              Dashboard
            </Link>
            <Link
              to="/salary-predictor"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm"
            >
              Predictor
            </Link>
            <Link
              to="/salary-comparison"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm"
            >
              Compare
            </Link>
            <Link
              to="/negotiation-assistant"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm"
            >
              Negotiate
            </Link>
            <Link
              to="/company-reviews"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm"
            >
              Reviews
            </Link>
            <Link
              to="/career-path"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm"
            >
              Career Path
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <div className="space-y-1">
                <Link
                  to="/salary-comparison"
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Compare Salary
                </Link>
                <Link
                  to="/dashboard"
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/salary-predictor"
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Predictor
                </Link>
                <Link
                  to="/negotiation-assistant"
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Negotiation
                </Link>
                <Link
                  to="/company-reviews"
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </Link>
                <Link
                  to="/career-path"
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Career Path
                </Link>
                <Link
                  to="/analytics"
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Analytics
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
