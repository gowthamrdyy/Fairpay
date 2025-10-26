import { firestoreService } from './firebase';
import type { CompanyReview, CompanyStats } from '../types/company';
import { compareCompanyNames } from '../utils/stringUtils';

export const companyService = {
  async addReview(review: Omit<CompanyReview, 'id' | 'createdAt' | 'helpful'>): Promise<void> {
    const reviewData = {
      ...review,
      helpful: 0,
      createdAt: new Date(),
    };
    await firestoreService.addDocument('companyReviews', reviewData);
  },

  async getCompanyReviews(companyName: string): Promise<CompanyReview[]> {
    try {
      const allReviews = await firestoreService.getDocuments('companyReviews');
      // Case-insensitive company name matching
      const reviews = allReviews.filter((r: any) => 
        compareCompanyNames(r.companyName, companyName)
      );
      return reviews as CompanyReview[];
    } catch (error) {
      console.error('Error fetching company reviews:', error);
      return [];
    }
  },

  async getCompanyStats(companyName: string): Promise<CompanyStats | null> {
    try {
      const reviews = await this.getCompanyReviews(companyName);
      if (reviews.length === 0) return null;

      const totalReviews = reviews.length;
      const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;
      const avgWorkLife = reviews.reduce((sum, r) => sum + r.workLifeBalance, 0) / totalReviews;
      const avgBenefits = reviews.reduce((sum, r) => sum + r.benefits, 0) / totalReviews;
      const avgCulture = reviews.reduce((sum, r) => sum + r.culture, 0) / totalReviews;
      const avgManagement = reviews.reduce((sum, r) => sum + r.management, 0) / totalReviews;
      const avgCareerGrowth = reviews.reduce((sum, r) => sum + r.careerGrowth, 0) / totalReviews;

      return {
        companyName,
        averageRating: Math.round(avgRating * 10) / 10,
        totalReviews,
        averageSalary: 0, // Will be calculated from salary data
        workLifeBalance: Math.round(avgWorkLife * 10) / 10,
        benefits: Math.round(avgBenefits * 10) / 10,
        culture: Math.round(avgCulture * 10) / 10,
        management: Math.round(avgManagement * 10) / 10,
        careerGrowth: Math.round(avgCareerGrowth * 10) / 10,
      };
    } catch (error) {
      console.error('Error calculating company stats:', error);
      return null;
    }
  },

  async markReviewHelpful(reviewId: string): Promise<void> {
    try {
      await firestoreService.updateDocument('companyReviews', reviewId, {
        helpful: (await firestoreService.getDocuments('companyReviews')).find(
          (r: any) => r.id === reviewId
        )?.helpful + 1 || 1,
      });
    } catch (error) {
      console.error('Error marking review helpful:', error);
    }
  },
};
