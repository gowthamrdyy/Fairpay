import React, { useState, useEffect } from 'react';
import { salaryService } from '../services/salaryService';
import type { SalaryEntry, SalaryStats, WageGap } from '../types/salary';
import { SalaryForm } from '../components/Forms/SalaryForm';
import { StatCards } from '../components/Dashboard/StatCards';
import { SalaryDistributionChart } from '../components/Charts/SalaryDistributionChart';
import { GenderWageGapChart } from '../components/Charts/GenderWageGapChart';
import { ExperienceProgression } from '../components/Charts/ExperienceProgression';

export const Dashboard: React.FC = () => {
  const [salaries, setSalaries] = useState<SalaryEntry[]>([]);
  const [stats, setStats] = useState<SalaryStats>({
    average: 0,
    median: 0,
    min: 0,
    max: 0,
    stdDev: 0,
    count: 0,
  });
  const [wageGap, setWageGap] = useState<WageGap>({
    maleAverage: 0,
    femaleAverage: 0,
    gapPercentage: 0,
    gapAmount: 0,
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await salaryService.getAllSalaries();
      console.log('📊 Fetched salaries:', data.length);
      console.log('💰 Sample salaries:', data.slice(0, 3).map(s => ({ role: s.role, salary: s.salary })));
      setSalaries(data);
      
      if (data.length > 0) {
        const calculatedStats = salaryService.calculateStats(data);
        const calculatedWageGap = salaryService.calculateWageGap(data);
        
        console.log('📈 Calculated stats:', calculatedStats);
        console.log('⚖️ Wage gap:', calculatedWageGap);
        
        setStats(calculatedStats);
        setWageGap(calculatedWageGap);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 animate-pulse shadow-lg">
            <span className="text-white font-bold text-lg">FP</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Dashboard</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">Salary insights and analytics</p>
        </div>

        <SalaryForm onSuccess={fetchData} />

        <StatCards stats={stats} wageGap={wageGap} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <SalaryDistributionChart salaries={salaries} />
          <GenderWageGapChart wageGap={wageGap} />
        </div>

        <div className="mb-4">
          <ExperienceProgression salaries={salaries} />
        </div>
      </div>
    </div>
  );
};
