import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { SalaryEntry } from '../../types/salary';
import { salaryService } from '../../services/salaryService';
import { formatCurrency } from '../../utils/calculations';

interface ExperienceProgressionProps {
  salaries: SalaryEntry[];
}

export const ExperienceProgression: React.FC<ExperienceProgressionProps> = ({
  salaries,
}) => {
  const data = salaryService.getTrendByExperience(salaries);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Salary Growth by Experience
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="experience"
            label={{ value: 'Years of Experience', position: 'insideBottom', offset: -5 }}
          />
          <YAxis
            label={{ value: 'Average Salary', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip formatter={(value: number) => formatCurrency(value)} />
          <Line
            type="monotone"
            dataKey="averageSalary"
            stroke="#10B981"
            strokeWidth={2}
            name="Average Salary"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
