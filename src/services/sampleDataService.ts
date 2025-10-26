import { firestoreService } from './firebase';
import indiaSalaryData from '../data/india_salary_data.json';
import indiaCompanyReviews from '../data/india_company_reviews.json';

// Use the imported India salary data (5000 entries)
const sampleSalaries = indiaSalaryData;
const sampleReviews = indiaCompanyReviews;

export const sampleDataService = {
  async clearAllData(): Promise<void> {
    try {
      console.log('🗑️ Clearing all salary data and reviews...');
      
      // Clear salaries
      const existingSalaries = await firestoreService.getDocuments('salaries');
      for (const salary of existingSalaries) {
        if (salary.id) {
          await firestoreService.deleteDocument('salaries', salary.id);
        }
      }
      
      // Clear reviews
      const existingReviews = await firestoreService.getDocuments('companyReviews');
      for (const review of existingReviews) {
        if (review.id) {
          await firestoreService.deleteDocument('companyReviews', review.id);
        }
      }
      
      console.log('✅ All data cleared!');
    } catch (error) {
      console.error('❌ Error clearing data:', error);
    }
  },

  async checkAndAddSampleData(): Promise<void> {
    try {
      // Check if data already exists
      const existingSalaries = await firestoreService.getDocuments('salaries');
      const existingReviews = await firestoreService.getDocuments('companyReviews');
      
      // If we have less than 1000 entries, clear and reload all 5000
      if (existingSalaries.length > 0 && existingSalaries.length < 1000) {
        console.log(`⚠️ Found only ${existingSalaries.length} entries. Clearing and loading 5000 entries...`);
        await this.clearAllData();
        // Re-fetch after clearing
        const recheck = await firestoreService.getDocuments('salaries');
        if (recheck.length === 0) {
          console.log('✅ Data cleared. Now loading 5000 entries...');
        }
      }
      
      // Load salary data
      if (existingSalaries.length === 0 || existingSalaries.length < 1000) {
        console.log(`✨ Loading ${sampleSalaries.length} salary entries...`);
        console.log('⏳ This will take 2-3 minutes...');
        
        let added = 0;
        const batchSize = 50;
        
        for (let i = 0; i < sampleSalaries.length; i += batchSize) {
          const batch = sampleSalaries.slice(i, i + batchSize);
          
          const promises = batch.map(salary => 
            firestoreService.addDocument('salaries', {
              ...salary,
              userId: 'sample-user',
              currency: 'INR',
              startDate: new Date(),
              verified: false,
              bonus: Math.floor(salary.salary * 0.1),
              stockOptions: 0,
            }).catch(err => {
              console.error('Error adding salary entry:', err);
              return null;
            })
          );
          
          const results = await Promise.all(promises);
          added += results.filter(r => r !== null).length;
          
          if ((i + batchSize) % 500 === 0 || i + batchSize >= sampleSalaries.length) {
            console.log(`📊 Salary Progress: ${Math.min(i + batchSize, sampleSalaries.length)}/${sampleSalaries.length} entries processed...`);
          }
        }
        
        console.log(`✅ Salary data added successfully! Added ${added} out of ${sampleSalaries.length} entries.`);
      } else {
        console.log(`📊 Found ${existingSalaries.length} existing salary entries.`);
      }
      
      // Load review data
      if (existingReviews.length === 0) {
        console.log(`✨ No review data found. Adding ${sampleReviews.length} sample reviews...`);
        console.log('⏳ This may take a moment...');
        
        let added = 0;
        const batchSize = 50;
        
        for (let i = 0; i < sampleReviews.length; i += batchSize) {
          const batch = sampleReviews.slice(i, i + batchSize);
          
          const promises = batch.map(review => 
            firestoreService.addDocument('companyReviews', {
              ...review,
              createdAt: new Date(review.createdAt),
            }).catch(err => {
              console.error('Error adding review entry:', err);
              return null;
            })
          );
          
          const results = await Promise.all(promises);
          added += results.filter(r => r !== null).length;
          
          if ((i + batchSize) % 500 === 0 || i + batchSize >= sampleReviews.length) {
            console.log(`📊 Review Progress: ${Math.min(i + batchSize, sampleReviews.length)}/${sampleReviews.length} entries processed...`);
          }
        }
        
        console.log(`✅ Review data added successfully! Added ${added} out of ${sampleReviews.length} entries.`);
      } else {
        console.log(`📊 Found ${existingReviews.length} existing review entries.`);
      }
    } catch (error) {
      console.error('❌ Error checking/adding sample data:', error);
    }
  },
};
