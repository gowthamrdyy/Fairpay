import indiaSalaryData from '../data/india_salary_data.json';
import indiaCompanyReviews from '../data/india_company_reviews.json';

// Data is now loaded directly from JSON files - no database needed!
export const sampleDataService = {
  async clearAllData(): Promise<void> {
    console.log('📊 Using local JSON data - no data to clear');
  },

  async checkAndAddSampleData(): Promise<void> {
    console.log(`✅ Loaded ${indiaSalaryData.length} salary entries from local JSON`);
    console.log(`✅ Loaded ${indiaCompanyReviews.length} company reviews from local JSON`);
  },
};
