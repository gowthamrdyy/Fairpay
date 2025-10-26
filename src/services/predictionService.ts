import type { SalaryEntry } from '../types/salary';
import type { SalaryPrediction, WhatIfScenario, CareerPath } from '../types/prediction';

export const predictionService = {
  predictSalary(input: {
    role: string;
    experience: number;
    education: string;
    location: string;
    industry: string;
    skills: string[];
  }, historicalData: SalaryEntry[]): SalaryPrediction {
    // Filter relevant data
    const relevantData = historicalData.filter(
      (entry) =>
        entry.role.toLowerCase().includes(input.role.toLowerCase()) ||
        entry.industry === input.industry
    );

    if (relevantData.length === 0) {
      return this.getDefaultPrediction(input);
    }

    // Calculate base salary from similar roles
    const baseSalary = relevantData.reduce((sum, entry) => sum + entry.salary, 0) / relevantData.length;

    // Apply multipliers
    const experienceMultiplier = 1 + (input.experience * 0.05); // 5% per year
    const educationMultiplier = this.getEducationMultiplier(input.education);
    const locationMultiplier = this.getLocationMultiplier(input.location);
    const skillsMultiplier = 1 + (input.skills.length * 0.02); // 2% per skill

    const predictedSalary = Math.round(
      baseSalary * experienceMultiplier * educationMultiplier * locationMultiplier * skillsMultiplier
    );

    const confidence = Math.min(95, 50 + (relevantData.length * 2));

    return {
      predictedSalary,
      confidence,
      range: {
        min: Math.round(predictedSalary * 0.85),
        max: Math.round(predictedSalary * 1.15),
      },
      factors: {
        experience: experienceMultiplier,
        education: educationMultiplier,
        location: locationMultiplier,
        industry: 1.0,
        skills: skillsMultiplier,
      },
    };
  },

  generateWhatIfScenarios(
    currentSalary: number
  ): WhatIfScenario[] {
    return [
      {
        scenario: '+2 years experience',
        currentSalary,
        projectedSalary: Math.round(currentSalary * 1.1),
        increase: Math.round(currentSalary * 0.1),
        increasePercentage: 10,
      },
      {
        scenario: 'Switch to Bangalore',
        currentSalary,
        projectedSalary: Math.round(currentSalary * 1.15),
        increase: Math.round(currentSalary * 0.15),
        increasePercentage: 15,
      },
      {
        scenario: 'Learn 3 new skills',
        currentSalary,
        projectedSalary: Math.round(currentSalary * 1.08),
        increase: Math.round(currentSalary * 0.08),
        increasePercentage: 8,
      },
      {
        scenario: 'Get Master\'s degree',
        currentSalary,
        projectedSalary: Math.round(currentSalary * 1.2),
        increase: Math.round(currentSalary * 0.2),
        increasePercentage: 20,
      },
      {
        scenario: 'Move to management',
        currentSalary,
        projectedSalary: Math.round(currentSalary * 1.25),
        increase: Math.round(currentSalary * 0.25),
        increasePercentage: 25,
      },
    ];
  },

  getCareerPath(role: string): CareerPath[] {
    const paths: Record<string, CareerPath[]> = {
      'Software Engineer': [
        { role: 'Junior Software Engineer', yearsExperience: 0, averageSalary: 500000, skills: ['JavaScript', 'React', 'Git'] },
        { role: 'Software Engineer', yearsExperience: 2, averageSalary: 800000, skills: ['Node.js', 'Database', 'API Design'], nextRole: 'Senior Software Engineer' },
        { role: 'Senior Software Engineer', yearsExperience: 5, averageSalary: 1500000, skills: ['System Design', 'Microservices', 'Cloud'], nextRole: 'Tech Lead' },
        { role: 'Tech Lead', yearsExperience: 8, averageSalary: 2500000, skills: ['Architecture', 'Team Management', 'Strategy'], nextRole: 'Engineering Manager' },
        { role: 'Engineering Manager', yearsExperience: 10, averageSalary: 3500000, skills: ['Leadership', 'Hiring', 'Product Strategy'] },
      ],
      'Data Scientist': [
        { role: 'Junior Data Analyst', yearsExperience: 0, averageSalary: 450000, skills: ['Python', 'SQL', 'Excel'] },
        { role: 'Data Scientist', yearsExperience: 2, averageSalary: 900000, skills: ['Machine Learning', 'Statistics', 'Visualization'], nextRole: 'Senior Data Scientist' },
        { role: 'Senior Data Scientist', yearsExperience: 5, averageSalary: 1800000, skills: ['Deep Learning', 'MLOps', 'Big Data'], nextRole: 'Lead Data Scientist' },
        { role: 'Lead Data Scientist', yearsExperience: 8, averageSalary: 2800000, skills: ['AI Strategy', 'Team Leadership', 'Research'] },
      ],
    };

    return paths[role] || paths['Software Engineer'];
  },

  getEducationMultiplier(education: string): number {
    const multipliers: Record<string, number> = {
      'High School': 0.8,
      'Bachelor': 1.0,
      'Master': 1.2,
      'PhD': 1.35,
    };
    return multipliers[education] || 1.0;
  },

  getLocationMultiplier(location: string): number {
    const multipliers: Record<string, number> = {
      'Bangalore': 1.15,
      'Mumbai': 1.2,
      'Delhi': 1.1,
      'Hyderabad': 1.05,
      'Pune': 1.08,
      'Chennai': 1.0,
      'Gurgaon': 1.12,
    };
    return multipliers[location] || 1.0;
  },

  getDefaultPrediction(input: any): SalaryPrediction {
    const baseSalary = 600000;
    const predictedSalary = Math.round(
      baseSalary * (1 + input.experience * 0.05) * this.getEducationMultiplier(input.education)
    );

    return {
      predictedSalary,
      confidence: 60,
      range: {
        min: Math.round(predictedSalary * 0.8),
        max: Math.round(predictedSalary * 1.2),
      },
      factors: {
        experience: 1 + input.experience * 0.05,
        education: this.getEducationMultiplier(input.education),
        location: 1.0,
        industry: 1.0,
        skills: 1.0,
      },
    };
  },

  calculatePercentile(salary: number, allSalaries: number[]): number {
    if (allSalaries.length === 0) return 50;
    const sorted = [...allSalaries].sort((a, b) => a - b);
    const index = sorted.findIndex((s) => s >= salary);
    if (index === -1) return 100;
    return Math.round((index / sorted.length) * 100);
  },
};
