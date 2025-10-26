import type { SalaryEntry, SalaryStats, WageGap } from '../types/salary';
import { companyNameIncludes, normalizeRoleName, normalizeLocationName } from '../utils/stringUtils';
import indiaSalaryData from '../data/india_salary_data.json';

// Local storage for any new entries added by users
let localSalaries: SalaryEntry[] = [];

export const salaryService = {
  async addSalary(salaryData: Partial<SalaryEntry>): Promise<string> {
    try {
      const newEntry: SalaryEntry = {
        id: 'local-' + Date.now(),
        ...salaryData,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as SalaryEntry;
      localSalaries.push(newEntry);
      console.log('Salary added locally:', newEntry.id);
      return newEntry.id;
    } catch (error) {
      console.error('Error adding salary:', error);
      throw error;
    }
  },

  async getAllSalaries(): Promise<SalaryEntry[]> {
    try {
      // Combine JSON data with any locally added entries
      const allData = [...(indiaSalaryData as SalaryEntry[]), ...localSalaries];
      return allData;
    } catch (error) {
      console.error('Error getting salaries:', error);
      return [];
    }
  },

  async getSalariesByRole(role: string): Promise<SalaryEntry[]> {
    const allSalaries = await this.getAllSalaries();
    return allSalaries.filter(
      (salary) => normalizeRoleName(salary.role).includes(normalizeRoleName(role))
    );
  },

  async getSalariesByCompany(company: string): Promise<SalaryEntry[]> {
    const allSalaries = await this.getAllSalaries();
    return allSalaries.filter(
      (salary) => companyNameIncludes(salary.company, company)
    );
  },

  async getSalariesByLocation(location: string): Promise<SalaryEntry[]> {
    const allSalaries = await this.getAllSalaries();
    return allSalaries.filter(
      (salary) => normalizeLocationName(salary.location).includes(normalizeLocationName(location))
    );
  },

  async getSalariesByIndustry(industry: string): Promise<SalaryEntry[]> {
    const allSalaries = await this.getAllSalaries();
    return allSalaries.filter(
      (salary) => normalizeRoleName(salary.industry) === normalizeRoleName(industry)
    );
  },

  calculateStats(salaries: SalaryEntry[]): SalaryStats {
    if (salaries.length === 0) {
      return {
        average: 0,
        median: 0,
        min: 0,
        max: 0,
        stdDev: 0,
        count: 0,
      };
    }

    const sorted = [...salaries].sort((a, b) => a.salary - b.salary);
    const sum = sorted.reduce((acc, s) => acc + s.salary, 0);
    const average = sum / sorted.length;

    const middle = Math.floor(sorted.length / 2);
    const median =
      sorted.length % 2 === 0
        ? (sorted[middle - 1].salary + sorted[middle].salary) / 2
        : sorted[middle].salary;

    const min = sorted[0].salary;
    const max = sorted[sorted.length - 1].salary;

    const variance =
      sorted.reduce((acc, s) => acc + Math.pow(s.salary - average, 2), 0) /
      sorted.length;
    const stdDev = Math.sqrt(variance);

    return {
      average,
      median,
      min,
      max,
      stdDev,
      count: sorted.length,
    };
  },

  calculateWageGap(salaries: SalaryEntry[]): WageGap {
    const maleSalaries = salaries.filter(
      (s) => s.gender?.toLowerCase() === 'male'
    );
    const femaleSalaries = salaries.filter(
      (s) => s.gender?.toLowerCase() === 'female'
    );

    if (maleSalaries.length === 0 || femaleSalaries.length === 0) {
      return {
        maleAverage: 0,
        femaleAverage: 0,
        gapPercentage: 0,
        gapAmount: 0,
      };
    }

    const maleAverage =
      maleSalaries.reduce((acc, s) => acc + s.salary, 0) / maleSalaries.length;
    const femaleAverage =
      femaleSalaries.reduce((acc, s) => acc + s.salary, 0) /
      femaleSalaries.length;

    const gapAmount = maleAverage - femaleAverage;
    const gapPercentage = (gapAmount / maleAverage) * 100;

    return {
      maleAverage,
      femaleAverage,
      gapPercentage,
      gapAmount,
    };
  },

  getTrendByExperience(salaries: SalaryEntry[]): Array<{ experience: number; averageSalary: number }> {
    const grouped = salaries.reduce((acc, salary) => {
      const exp = Math.floor(salary.experience);
      if (!acc[exp]) {
        acc[exp] = [];
      }
      acc[exp].push(salary.salary);
      return acc;
    }, {} as Record<number, number[]>);

    const trend = Object.entries(grouped).map(([exp, salaries]) => ({
      experience: parseInt(exp),
      averageSalary: salaries.reduce((a, b) => a + b, 0) / salaries.length,
    }));

    return trend.sort((a, b) => a.experience - b.experience);
  },
};
