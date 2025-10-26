export interface SalaryEntry {
  id: string;
  userId: string;
  role: string;
  company: string;
  salary: number;
  currency: string;
  experience: number;
  education: string;
  gender?: string;
  location: string;
  industry: string;
  jobType: string;
  startDate: Date;
  verified: boolean;
  companySize: string;
  skills: string[];
  bonus?: number;
  stockOptions?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SalaryStats {
  average: number;
  median: number;
  min: number;
  max: number;
  stdDev: number;
  count: number;
}

export interface WageGap {
  maleAverage: number;
  femaleAverage: number;
  gapPercentage: number;
  gapAmount: number;
}
