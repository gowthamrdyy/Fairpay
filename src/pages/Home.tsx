import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Target, Sparkles, Building2, Rocket, BarChart3, TrendingUp, Shield, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Know Your <span className="text-blue-200">True Worth</span>
          </h1>
          <p className="text-base mb-6 max-w-xl mx-auto opacity-90">
            Compare salaries with real market data. Get AI-powered insights instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/salary-comparison">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-lg font-medium shadow-lg transition-all text-sm">
                Compare My Salary →
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="bg-blue-800 text-white hover:bg-blue-900 px-5 py-2.5 rounded-lg font-medium transition-all text-sm border border-blue-600">
                View Dashboard
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl font-bold text-center mb-6 text-slate-900 dark:text-white">
            Everything You Need
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/salary-comparison" className="group">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 h-full">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-3">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-base font-semibold mb-1 text-slate-900 dark:text-white">Salary Comparison</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Compare your salary with market averages
                </p>
              </div>
            </Link>

            <Link to="/salary-predictor" className="group">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 h-full">
                <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-3">
                  <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-base font-semibold mb-1 text-slate-900 dark:text-white">AI Predictions</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  ML-powered salary predictions
                </p>
              </div>
            </Link>

            <Link to="/negotiation-assistant" className="group">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 h-full">
                <div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-base font-semibold mb-1 text-slate-900 dark:text-white">Negotiation Tips</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  AI-powered negotiation assistance
                </p>
              </div>
            </Link>

            <Link to="/company-reviews" className="group">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 h-full">
                <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-base font-semibold mb-1 text-slate-900 dark:text-white">Company Reviews</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Anonymous company ratings
                </p>
              </div>
            </Link>

            <Link to="/career-path" className="group">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 h-full">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mb-3">
                  <Rocket className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-base font-semibold mb-1 text-slate-900 dark:text-white">Career Path</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Visualize career progression
                </p>
              </div>
            </Link>

            <Link to="/analytics" className="group">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 h-full">
                <div className="w-10 h-10 bg-pink-50 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mb-3">
                  <BarChart3 className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-base font-semibold mb-1 text-slate-900 dark:text-white">Analytics</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Industry trends and insights
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>



      {/* Why FairPay */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-center mb-8 text-slate-900 dark:text-white">
            Why Choose FairPay?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-1 text-slate-900 dark:text-white text-sm">100% Anonymous</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Your data is private and secure
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-1 text-slate-900 dark:text-white text-sm">AI-Powered</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Smart ML predictions
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-1 text-slate-900 dark:text-white text-sm">Real-Time Data</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Up-to-date market info
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">Ready to Get Started?</h2>
          <p className="text-sm mb-6 opacity-90">
            Join thousands of professionals making informed career decisions
          </p>
          <Link to="/salary-comparison">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2.5 rounded-lg font-medium shadow-lg transition-all text-sm">
              Compare Your Salary Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
