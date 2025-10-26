import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import type { EconomicTrend } from '../../types/economic';

interface EconomicIndicatorsProps {
  title: string;
  data: EconomicTrend[];
  color: string;
}

export const EconomicIndicators: React.FC<EconomicIndicatorsProps> = ({
  title,
  data,
  color,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            name={title}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
