import React from 'react';
import { TrendingUp, Briefcase, Users, AlertCircle } from 'lucide-react';
import type { SalaryStats, WageGap } from '../../types/salary';
import { formatCurrency } from '../../utils/calculations';
import { formatPercentage } from '../../utils/formatters';

interface StatCardsProps {
  stats: SalaryStats;
  wageGap: WageGap;
}

export const StatCards: React.FC<StatCardsProps> = ({ stats, wageGap }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Average Salary Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Avg Annual Salary</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
            {formatCurrency(stats.average)}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">per year</p>
        </div>
        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
          <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>

      {/* Median Salary Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Median Annual Salary</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
            {formatCurrency(stats.median)}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">per year</p>
        </div>
        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
          <Briefcase className="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
      </div>

      {/* Total Entries Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Total Entries</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stats.count}</p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">salary data points</p>
        </div>
        <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
          <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        </div>
      </div>

      {/* Gender Wage Gap Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Gender Wage Gap</p>
          <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">
            {formatPercentage(wageGap.gapPercentage)}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">male vs female</p>
        </div>
        <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
          <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
        </div>
      </div>
    </div>
  );
};
