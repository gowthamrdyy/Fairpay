import { useState, useEffect } from 'react';
import { salaryService } from '../services/salaryService';
import type { SalaryEntry } from '../types/salary';

export const useSalaryData = () => {
  const [salaries, setSalaries] = useState<SalaryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSalaries = async () => {
    setLoading(true);
    try {
      const data = await salaryService.getAllSalaries();
      setSalaries(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch salary data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalaries();
  }, []);

  return { salaries, loading, error, refetch: fetchSalaries };
};
