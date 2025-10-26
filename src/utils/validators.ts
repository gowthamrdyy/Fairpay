import { z } from 'zod';

export const salaryFormSchema = z.object({
  role: z.string().min(2, 'Role must be at least 2 characters'),
  company: z.string().min(2, 'Company must be at least 2 characters'),
  salary: z.number().min(0, 'Salary must be a positive number'),
  experience: z.number().min(0, 'Experience must be 0 or greater').max(50, 'Experience must be less than 50 years'),
  education: z.string().min(1, 'Education is required'),
  location: z.string().min(2, 'Location must be at least 2 characters'),
  industry: z.string().min(1, 'Industry is required'),
  jobType: z.string().min(1, 'Job type is required'),
  companySize: z.string().optional(),
  gender: z.string().optional(),
  bonus: z.number().optional(),
});

export type SalaryFormData = z.infer<typeof salaryFormSchema>;

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateSalaryRange = (salary: number): boolean => {
  return salary >= 0 && salary <= 100000000; // Max 10 crore
};

export const validateExperience = (experience: number): boolean => {
  return experience >= 0 && experience <= 50;
};
