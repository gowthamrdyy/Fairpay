import axios from 'axios';

const NUMBEO_API_KEY = import.meta.env.VITE_NUMBEO_API_KEY;

interface CostOfLivingData {
  city: string;
  costOfLivingIndex: number;
  rentIndex: number;
  groceriesIndex: number;
  restaurantPriceIndex: number;
  localPurchasingPowerIndex: number;
}

// Fallback data for major Indian cities (relative to Bangalore = 100)
const fallbackCityIndices: Record<string, number> = {
  'Mumbai': 110,
  'Bangalore': 100,
  'Delhi': 95,
  'Hyderabad': 85,
  'Pune': 90,
  'Chennai': 88,
  'Kolkata': 75,
  'Ahmedabad': 70,
  'Gurgaon': 98,
  'Noida': 85,
};

export const costOfLivingService = {
  async getCostOfLiving(city: string): Promise<CostOfLivingData> {
    try {
      if (NUMBEO_API_KEY) {
        const response = await axios.get(
          `https://www.numbeo.com/api/city_prices?api_key=${NUMBEO_API_KEY}&query=${city}`
        );
        return response.data;
      }
      throw new Error('No API key');
    } catch (error) {
      // Use fallback data
      const index = fallbackCityIndices[city] || 100;
      return {
        city,
        costOfLivingIndex: index,
        rentIndex: index,
        groceriesIndex: index,
        restaurantPriceIndex: index,
        localPurchasingPowerIndex: 100,
      };
    }
  },

  adjustSalaryForCostOfLiving(
    salary: number,
    fromCity: string,
    toCity: string
  ): number {
    const fromIndex = fallbackCityIndices[fromCity] || 100;
    const toIndex = fallbackCityIndices[toCity] || 100;
    return Math.round((salary * toIndex) / fromIndex);
  },

  compareCities(city1: string, city2: string): {
    city1: string;
    city2: string;
    costDifference: number;
    percentageDifference: number;
    cheaperCity: string;
  } {
    const index1 = fallbackCityIndices[city1] || 100;
    const index2 = fallbackCityIndices[city2] || 100;
    const difference = Math.abs(index1 - index2);
    const percentageDiff = ((difference / Math.min(index1, index2)) * 100).toFixed(1);

    return {
      city1,
      city2,
      costDifference: difference,
      percentageDifference: parseFloat(percentageDiff),
      cheaperCity: index1 < index2 ? city1 : city2,
    };
  },

  getAffordabilityScore(salary: number, city: string): {
    score: number;
    rating: string;
    description: string;
  } {
    const cityIndex = fallbackCityIndices[city] || 100;
    const adjustedSalary = (salary / cityIndex) * 100;
    
    let score = 0;
    let rating = '';
    let description = '';

    if (adjustedSalary >= 1500000) {
      score = 95;
      rating = 'Excellent';
      description = 'Very comfortable living with significant savings potential';
    } else if (adjustedSalary >= 1000000) {
      score = 80;
      rating = 'Good';
      description = 'Comfortable living with good savings potential';
    } else if (adjustedSalary >= 600000) {
      score = 65;
      rating = 'Fair';
      description = 'Moderate living with some savings potential';
    } else if (adjustedSalary >= 400000) {
      score = 50;
      rating = 'Adequate';
      description = 'Basic comfortable living with limited savings';
    } else {
      score = 30;
      rating = 'Challenging';
      description = 'May require careful budgeting';
    }

    return { score, rating, description };
  },
};
