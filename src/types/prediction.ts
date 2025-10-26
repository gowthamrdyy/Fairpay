export interface SalaryPrediction {
  predictedSalary: number;
  confidence: number;
  range: {
    min: number;
    max: number;
  };
  factors: {
    experience: number;
    education: number;
    location: number;
    industry: number;
    skills: number;
  };
}

export interface WhatIfScenario {
  scenario: string;
  currentSalary: number;
  projectedSalary: number;
  increase: number;
  increasePercentage: number;
}

export interface CareerPath {
  role: string;
  yearsExperience: number;
  averageSalary: number;
  skills: string[];
  nextRole?: string;
}
