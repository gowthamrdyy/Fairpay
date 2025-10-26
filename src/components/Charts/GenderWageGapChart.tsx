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
import type { WageGap } from '../../types/salary';
import { formatCurrency } from '../../utils/calculations';

interface GenderWageGapChartProps {
  wageGap: WageGap;
}

export const GenderWageGapChart: React.FC<GenderWageGapChartProps> = ({
  wageGap,
}) => {
  const data = [
    { gender: 'Male', salary: wageGap.maleAverage },
    { gender: 'Female', salary: wageGap.femaleAverage },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Gender Wage Gap Analysis
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="gender" />
          <YAxis />
          <Tooltip formatter={(value: number) => formatCurrency(value)} />
          <Bar dataKey="salary" fill="#EF4444" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-sm text-red-800">
          <strong>Gap:</strong> {wageGap.gapPercentage.toFixed(1)}% (
          {formatCurrency(wageGap.gapAmount)})
        </p>
      </div>
    </div>
  );
};
