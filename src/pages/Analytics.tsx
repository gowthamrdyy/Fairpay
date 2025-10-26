import React, { useState, useEffect } from 'react';
import { salaryService } from '../services/salaryService';
import type { SalaryEntry } from '../types/salary';
import { groupBy } from '../utils/calculations';
import { formatCurrency } from '../utils/calculations';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export const Analytics: React.FC = () => {
  const [salaries, setSalaries] = useState<SalaryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await salaryService.getAllSalaries();
        setSalaries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Group salaries by industry
  const industryData = React.useMemo(() => {
    const grouped = groupBy(salaries, 'industry');
    return Object.entries(grouped).map(([industry, entries]) => ({
      industry,
      averageSalary:
        entries.reduce((sum, e) => sum + e.salary, 0) / entries.length,
      count: entries.length,
    }));
  }, [salaries]);

  // Group salaries by experience level
  const experienceData = React.useMemo(() => {
    const levels = [
      { label: '0-2 years', min: 0, max: 2 },
      { label: '3-5 years', min: 3, max: 5 },
      { label: '6-10 years', min: 6, max: 10 },
      { label: '10+ years', min: 10, max: 100 },
    ];

    return levels.map((level) => {
      const filtered = salaries.filter(
        (s) => s.experience >= level.min && s.experience <= level.max
      );
      return {
        level: level.label,
        averageSalary:
          filtered.length > 0
            ? filtered.reduce((sum, e) => sum + e.salary, 0) / filtered.length
            : 0,
        count: filtered.length,
      };
    });
  }, [salaries]);

  // Group by location
  const locationData = React.useMemo(() => {
    const grouped = groupBy(salaries, 'location');
    return Object.entries(grouped)
      .map(([location, entries]) => ({
        location,
        averageSalary:
          entries.reduce((sum, e) => sum + e.salary, 0) / entries.length,
        count: entries.length,
      }))
      .sort((a, b) => b.averageSalary - a.averageSalary)
      .slice(0, 10);
  }, [salaries]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-3"></div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
            Salary Analytics
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Comprehensive insights from {salaries.length.toLocaleString()} salary entries
          </p>
        </div>

        {/* Key Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-3 border border-slate-200 dark:border-slate-700">
            <div className="text-xs text-slate-600 dark:text-slate-400 mb-0.5">Total Entries</div>
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{salaries.length.toLocaleString()}</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-3 border border-slate-200 dark:border-slate-700">
            <div className="text-xs text-slate-600 dark:text-slate-400 mb-0.5">Industries</div>
            <div className="text-xl font-bold text-green-600 dark:text-green-400">{industryData.length}</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-3 border border-slate-200 dark:border-slate-700">
            <div className="text-xs text-slate-600 dark:text-slate-400 mb-0.5">Locations</div>
            <div className="text-xl font-bold text-purple-600 dark:text-purple-400">{locationData.length}+</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-3 border border-slate-200 dark:border-slate-700">
            <div className="text-xs text-slate-600 dark:text-slate-400 mb-0.5">Avg Salary</div>
            <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
              {formatCurrency(salaries.reduce((sum, s) => sum + s.salary, 0) / salaries.length)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Industry Analysis */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4 border border-slate-200 dark:border-slate-700">
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-3">
              Salary by Industry
            </h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={industryData.sort((a, b) => b.averageSalary - a.averageSalary).slice(0, 8)}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="industry" 
                  tick={{ fontSize: 10 }}
                  stroke="#64748b"
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  tick={{ fontSize: 10 }}
                  stroke="#64748b"
                />
                <Tooltip 
                  formatter={(value: number) => formatCurrency(value)}
                  contentStyle={{ 
                    backgroundColor: '#1e293b',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="averageSalary" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Experience Level Analysis */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4 border border-slate-200 dark:border-slate-700">
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-3">
              Salary by Experience
            </h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={experienceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="level" 
                  tick={{ fontSize: 10 }}
                  stroke="#64748b"
                />
                <YAxis 
                  tick={{ fontSize: 10 }}
                  stroke="#64748b"
                />
                <Tooltip 
                  formatter={(value: number) => formatCurrency(value)}
                  contentStyle={{ 
                    backgroundColor: '#1e293b',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="averageSalary" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Location Analysis */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4 mb-4 border border-slate-200 dark:border-slate-700">
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-3">
            Top Locations by Salary
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={locationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="location" 
                tick={{ fontSize: 10 }}
                stroke="#64748b"
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                tick={{ fontSize: 10 }}
                stroke="#64748b"
              />
              <Tooltip 
                formatter={(value: number) => formatCurrency(value)}
                contentStyle={{ 
                  backgroundColor: '#1e293b',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="averageSalary" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Insights Section */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-sm p-4 mb-4 text-white">
          <h2 className="text-base font-bold mb-3">
            💡 Key Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {industryData.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <h3 className="font-semibold text-xs mb-1">Highest Paying Industry</h3>
                <p className="text-lg font-bold mb-0.5">
                  {industryData.sort((a, b) => b.averageSalary - a.averageSalary)[0].industry}
                </p>
                <p className="text-xs opacity-90">
                  {formatCurrency(industryData.sort((a, b) => b.averageSalary - a.averageSalary)[0].averageSalary)}
                </p>
              </div>
            )}

            {locationData.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <h3 className="font-semibold text-xs mb-1">Top Paying Location</h3>
                <p className="text-lg font-bold mb-0.5">
                  {locationData[0].location}
                </p>
                <p className="text-xs opacity-90">
                  {formatCurrency(locationData[0].averageSalary)}
                </p>
              </div>
            )}

            {experienceData.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <h3 className="font-semibold text-xs mb-1">Senior Level (10+ yrs)</h3>
                <p className="text-lg font-bold mb-0.5">
                  {experienceData[experienceData.length - 1].level}
                </p>
                <p className="text-xs opacity-90">
                  {formatCurrency(experienceData[experienceData.length - 1].averageSalary)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Data Quality Note */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-3 border border-slate-200 dark:border-slate-700">
          <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
            📊 Analytics based on {salaries.length.toLocaleString()} salary entries • Real-time data from India
          </p>
        </div>
      </div>
    </div>
  );
};
