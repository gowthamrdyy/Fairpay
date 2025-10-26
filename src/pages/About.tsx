import React from 'react';
import { Shield, Lock, Code, Database, TrendingUp, Users, Github, Linkedin, Mail, Sparkles, Target, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            About FairPay
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Empowering professionals with transparent salary insights
          </p>
        </div>

        {/* Meet the Team */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6 mb-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gowtham Reddy */}
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-5 border border-slate-200 dark:border-slate-600">
              <div className="flex items-start gap-4">
                <img
                  src="https://avatars.githubusercontent.com/u/115145278?v=4"
                  alt="Gowtham Reddy"
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0 border-2 border-blue-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 hidden">
                  GR
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Gowtham Reddy</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Founder & ML Engineer</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                    Passionate about leveraging machine learning and data science to solve real-world problems.
                    Specializes in building intelligent systems that empower users with actionable insights.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">Machine Learning</span>
                    <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">React</span>
                    <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">TypeScript</span>
                    <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs">Firebase</span>
                    <span className="px-2 py-0.5 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded text-xs">Python</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/gowthamrdyy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="https://github.com/gowthamrdyy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-slate-800 hover:bg-slate-900 rounded transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="mailto:iamgowthamsree@gmail.com"
                      className="p-1.5 bg-red-600 hover:bg-red-700 rounded transition-colors"
                      title="Email"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hari Prasanna */}
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-5 border border-slate-200 dark:border-slate-600">
              <div className="flex items-start gap-4">
                <img
                  src="https://avatars.githubusercontent.com/u/221589262?v=4"
                  alt="Hari Prasanna"
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0 border-2 border-purple-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 hidden">
                  HP
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Hari Prasanna</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Co-Founder & ML Engineer</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                    Expert in machine learning and full-stack development. Focused on creating scalable
                    solutions that deliver meaningful impact through data-driven decision making.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">Machine Learning</span>
                    <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">React</span>
                    <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">TypeScript</span>
                    <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs">Firebase</span>
                    <span className="px-2 py-0.5 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded text-xs">Python</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/prasannardyy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="https://github.com/prasannardyy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-slate-800 hover:bg-slate-900 rounded transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="mailto:pkr6301021313@gmail.com"
                      className="p-1.5 bg-red-600 hover:bg-red-700 rounded transition-colors"
                      title="Email"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-sm p-6 mb-6 text-white">
          <h2 className="text-xl font-bold mb-3 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Our Story
          </h2>
          <p className="text-sm mb-3 opacity-90">
            FairPay was born from a simple observation: salary negotiations are often one-sided,
            with employers holding all the cards. We experienced firsthand how lack of transparency
            leads to unfair compensation and perpetuates wage gaps.
          </p>
          <p className="text-sm opacity-90">
            As ML engineers and developers, we decided to build a solution that democratizes salary
            information. By combining crowdsourced data with machine learning predictions, we're
            empowering professionals to negotiate fair compensation and make informed career decisions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-5 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Our Mission</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              To create a transparent salary ecosystem where every professional has access to
              real-time market data, enabling fair negotiations and closing wage gaps across
              industries, genders, and demographics.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-5 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Our Vision</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              A world where salary transparency is the norm, not the exception. Where AI-powered
              insights help professionals understand their worth and companies compete on fair
              compensation rather than information asymmetry.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-5 mb-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-xs text-slate-600 dark:text-slate-300">Real-time salary benchmarks across 5000+ data points</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-xs text-slate-600 dark:text-slate-300">AI-powered salary predictions using machine learning</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-xs text-slate-600 dark:text-slate-300">Gender wage gap analysis and insights</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-xs text-slate-600 dark:text-slate-300">Anonymous company reviews and culture ratings</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-xs text-slate-600 dark:text-slate-300">Career path visualization and growth planning</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-xs text-slate-600 dark:text-slate-300">AI negotiation assistant for salary discussions</p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-5 mb-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
            <Code className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/30">
              <p className="font-semibold text-blue-900 dark:text-blue-300 text-sm">React 19</p>
              <p className="text-xs text-blue-700 dark:text-blue-400">Frontend</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/30">
              <p className="font-semibold text-blue-900 dark:text-blue-300 text-sm">TypeScript</p>
              <p className="text-xs text-blue-700 dark:text-blue-400">Type Safety</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-100 dark:border-orange-900/30">
              <p className="font-semibold text-orange-900 dark:text-orange-300 text-sm">Firebase</p>
              <p className="text-xs text-orange-700 dark:text-orange-400">Backend</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-100 dark:border-orange-900/30">
              <p className="font-semibold text-orange-900 dark:text-orange-300 text-sm">Firestore</p>
              <p className="text-xs text-orange-700 dark:text-orange-400">Database</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-100 dark:border-purple-900/30">
              <p className="font-semibold text-purple-900 dark:text-purple-300 text-sm">Recharts</p>
              <p className="text-xs text-purple-700 dark:text-purple-400">Charts</p>
            </div>
            <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg border border-cyan-100 dark:border-cyan-900/30">
              <p className="font-semibold text-cyan-900 dark:text-cyan-300 text-sm">Tailwind CSS</p>
              <p className="text-xs text-cyan-700 dark:text-cyan-400">Styling</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
              <p className="font-semibold text-green-900 dark:text-green-300 text-sm">Vite</p>
              <p className="text-xs text-green-700 dark:text-green-400">Build Tool</p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg border border-pink-100 dark:border-pink-900/30">
              <p className="font-semibold text-pink-900 dark:text-pink-300 text-sm">React Router</p>
              <p className="text-xs text-pink-700 dark:text-pink-400">Navigation</p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border border-indigo-100 dark:border-indigo-900/30">
              <p className="font-semibold text-indigo-900 dark:text-indigo-300 text-sm">Axios</p>
              <p className="text-xs text-indigo-700 dark:text-indigo-400">HTTP Client</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-100 dark:border-yellow-900/30">
              <p className="font-semibold text-yellow-900 dark:text-yellow-300 text-sm">Lucide Icons</p>
              <p className="text-xs text-yellow-700 dark:text-yellow-400">Icons</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-900/30">
              <p className="font-semibold text-red-900 dark:text-red-300 text-sm">Zod</p>
              <p className="text-xs text-red-700 dark:text-red-400">Validation</p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg border border-teal-100 dark:border-teal-900/30">
              <p className="font-semibold text-teal-900 dark:text-teal-300 text-sm">React Hook Form</p>
              <p className="text-xs text-teal-700 dark:text-teal-400">Forms</p>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-5 mb-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-red-600 dark:text-red-400" />
            Data Security & Privacy
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">Anonymous Authentication</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  No email or personal information required. All data is anonymized through Firebase.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">Secure Database</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Firebase security rules protect user data while maintaining transparency.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">Data Confidentiality</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  All submissions are aggregated and cannot be traced to individuals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-5 border border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
            Get in Touch
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">
            We'd love to hear your feedback and suggestions for improving FairPay.
            Have questions or want to collaborate? Reach out to us!
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="mailto:contact@fairpay.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg transition-colors text-sm">
              <Github className="w-4 h-4" />
              GitHub
            </button>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
            Built with ❤️ in 2025 | Empowering professionals with transparent salary insights
          </p>
        </div>
      </div>
    </div>
  );
};
