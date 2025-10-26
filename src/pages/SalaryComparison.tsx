import React, { useState } from 'react';
import { TrendingUp, Target, Award, AlertCircle, CheckCircle } from 'lucide-react';
import { useSalaryData } from '../hooks/useSalaryData';
import { predictionService } from '../services/predictionService';
import { formatCurrency } from '../utils/calculations';
import { normalizeRoleName } from '../utils/stringUtils';
import { Button } from '../components/Common/Button';

export const SalaryComparison: React.FC = () => {
  const { salaries, loading } = useSalaryData();
  const [yourSalary, setYourSalary] = useState('');
  const [role, setRole] = useState('');
  const [percentile, setPercentile] = useState<number | null>(null);
  const [comparison, setComparison] = useState<any>(null);
  const [verdict, setVerdict] = useState('');

  const handleCompare = () => {
    const salary = parseInt(yourSalary);
    if (!salary || !role) return;

    const roleSalaries = salaries
      .filter((s) => normalizeRoleName(s.role).includes(normalizeRoleName(role)))
      .map((s) => s.salary);

    if (roleSalaries.length === 0) {
      alert('No data found for this role. Try a different role name.');
      return;
    }

    const perc = predictionService.calculatePercentile(salary, roleSalaries);
    setPercentile(perc);

    const avg = roleSalaries.reduce((a, b) => a + b, 0) / roleSalaries.length;
    const sorted = [...roleSalaries].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];
    const top10 = sorted[Math.floor(sorted.length * 0.9)];

    setComparison({
      average: avg,
      median,
      top10,
      difference: salary - avg,
      percentageDiff: ((salary - avg) / avg) * 100,
    });

    // Generate verdict
    if (perc >= 75) {
      setVerdict('Excellent! You\'re earning above most professionals in your role.');
    } else if (perc >= 50) {
      setVerdict('Good! You\'re around the market average.');
    } else if (perc >= 25) {
      setVerdict('Fair. There\'s room for salary growth.');
    } else {
      setVerdict('Below average. Consider negotiating for a raise.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-3"></div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Loading salary data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-6 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
            Compare Your Salary
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            See how your compensation stacks up against the market
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-5 mb-4 border border-slate-200 dark:border-slate-700">
          <div className="space-y-3 mb-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Your Annual Salary (₹ per year) *
              </label>
              <input
                type="number"
                value={yourSalary}
                onChange={(e) => setYourSalary(e.target.value)}
                placeholder="e.g. 1200000"
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm"
              />
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Enter your total yearly salary (e.g., 12,00,000)
              </p>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Your Role *
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Software Engineer"
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm"
              />
            </div>
          </div>
          <Button onClick={handleCompare} className="w-full text-sm py-2">
            Compare Now
          </Button>
        </div>

        {percentile !== null && comparison && (
          <>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-5 mb-4 border border-slate-200 dark:border-slate-700">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-3">
                  <div className="text-white">
                    <div className="text-2xl font-bold">{percentile}%</div>
                    <div className="text-xs">Percentile</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  {percentile >= 50 ? (
                    <CheckCircle className="text-green-500" size={18} />
                  ) : (
                    <AlertCircle className="text-yellow-500" size={18} />
                  )}
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    {verdict}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-center border border-blue-100 dark:border-blue-900/30">
                  <TrendingUp className="text-blue-600 dark:text-blue-400 mx-auto mb-1.5" size={20} />
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-0.5">Average</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    {formatCurrency(comparison.average)}
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center border border-green-100 dark:border-green-900/30">
                  <Target className="text-green-600 dark:text-green-400 mx-auto mb-1.5" size={20} />
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-0.5">Median</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    {formatCurrency(comparison.median)}
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 text-center border border-purple-100 dark:border-purple-900/30">
                  <Award className="text-purple-600 dark:text-purple-400 mx-auto mb-1.5" size={20} />
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-0.5">Top 10%</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    {formatCurrency(comparison.top10)}
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30">
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" size={16} />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white text-xs">
                      Your salary is {formatCurrency(Math.abs(comparison.difference))}{' '}
                      {comparison.difference >= 0 ? 'above' : 'below'} average
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      That's {Math.abs(comparison.percentageDiff).toFixed(1)}%{' '}
                      {comparison.difference >= 0 ? 'higher' : 'lower'} than market average
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {percentile < 50 && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">💡 Next Steps</h3>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <li>• Use our <a href="/negotiation-assistant" className="text-blue-600 dark:text-blue-400 underline">Negotiation Assistant</a> for salary discussions</li>
                  <li>• Check <a href="/analytics" className="text-blue-600 dark:text-blue-400 underline">Analytics</a> to see which skills pay more</li>
                  <li>• Explore <a href="/career-path" className="text-blue-600 dark:text-blue-400 underline">Career Paths</a> to plan your growth</li>
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
