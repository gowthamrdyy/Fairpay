export interface CompanyReview {
  id: string;
  companyName: string;
  userId: string;
  rating: number;
  workLifeBalance: number;
  benefits: number;
  culture: number;
  management: number;
  careerGrowth: number;
  review: string;
  pros: string;
  cons: string;
  createdAt: Date;
  helpful: number;
}

export interface CompanyStats {
  companyName: string;
  averageRating: number;
  totalReviews: number;
  averageSalary: number;
  workLifeBalance: number;
  benefits: number;
  culture: number;
  management: number;
  careerGrowth: number;
}
