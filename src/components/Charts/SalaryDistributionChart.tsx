import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { SalaryEntry } from '../../types/salary';

interface SalaryDistributionChartProps {
  salaries: SalaryEntry[];
}

export const SalaryDistributionChart: React.FC<SalaryDistributionChartProps> = ({
  salaries,
}) => {
  const ranges = [
    { label: '0-5L', min: 0, max: 500000 },
    { label: '5L-10L', min: 500000, max: 1000000 },
    { label: '10L-15L', min: 1000000, max: 1500000 },
    { label: '15L-25L', min: 1500000, max: 2500000 },
    { label: '25L+', min: 2500000, max: Infinity },
  ];

  const data = ranges.map((range) => ({
    range: range.label,
    count: salaries.filter(
      (s) => s.salary >= range.min && s.salary < range.max
    ).length,
  }));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Salary Distribution
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
