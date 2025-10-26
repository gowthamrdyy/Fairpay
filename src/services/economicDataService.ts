import axios from 'axios';
import type { EconomicTrend } from '../types/economic';

const FRED_BASE_URL = 'https://api.stlouisfed.org/fred/series/observations';
const ALPHA_VANTAGE_BASE_URL = 'https://www.alphavantage.co/query';
const EXCHANGERATE_BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

const fredApiKey = import.meta.env.VITE_FRED_API_KEY;
const alphaVantageApiKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;

export const economicDataService = {
  async getInflationRate(): Promise<EconomicTrend[]> {
    try {
      const response = await axios.get(FRED_BASE_URL, {
        params: {
          series_id: 'CPIAUCSL',
          api_key: fredApiKey,
          file_type: 'json',
          limit: 12,
          sort_order: 'desc',
        },
      });
      return this.formatEconomicData(response.data.observations);
    } catch (error) {
      console.error('Error fetching inflation rate:', error);
      return [];
    }
  },

  async getGDPGrowth(): Promise<EconomicTrend[]> {
    try {
      const response = await axios.get(FRED_BASE_URL, {
        params: {
          series_id: 'A191RA1Q225SBEA',
          api_key: fredApiKey,
          file_type: 'json',
          limit: 12,
          sort_order: 'desc',
        },
      });
      return this.formatEconomicData(response.data.observations);
    } catch (error) {
      console.error('Error fetching GDP growth:', error);
      return [];
    }
  },

  async getUnemploymentRate(): Promise<EconomicTrend[]> {
    try {
      const response = await axios.get(FRED_BASE_URL, {
        params: {
          series_id: 'UNRATE',
          api_key: fredApiKey,
          file_type: 'json',
          limit: 12,
          sort_order: 'desc',
        },
      });
      return this.formatEconomicData(response.data.observations);
    } catch (error) {
      console.error('Error fetching unemployment rate:', error);
      return [];
    }
  },

  async getStockMarketData(symbol: string = 'GSPC'): Promise<EconomicTrend[]> {
    try {
      const response = await axios.get(ALPHA_VANTAGE_BASE_URL, {
        params: {
          function: 'TIME_SERIES_MONTHLY',
          symbol,
          apikey: alphaVantageApiKey,
        },
      });
      const timeSeries = response.data['Monthly Time Series'];
      if (!timeSeries) return [];
      
      return Object.entries(timeSeries)
        .slice(0, 12)
        .map(([date, data]: [string, any]) => ({
          date,
          value: parseFloat(data['4. close']),
        }));
    } catch (error) {
      console.error('Error fetching stock market data:', error);
      return [];
    }
  },

  async getCurrencyRates(baseCurrency: string = 'INR'): Promise<any> {
    try {
      const response = await axios.get(`${EXCHANGERATE_BASE_URL}/${baseCurrency}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching currency rates:', error);
      // Fallback rates
      return {
        base: 'INR',
        rates: {
          USD: 0.012,
          EUR: 0.011,
          GBP: 0.0095,
          JPY: 1.8,
          AUD: 0.018,
          CAD: 0.016,
        },
      };
    }
  },

  async convertCurrency(
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ): Promise<number> {
    try {
      const rates = await this.getCurrencyRates(fromCurrency);
      const rate = rates.rates[toCurrency];
      return Math.round(amount * rate);
    } catch (error) {
      console.error('Error converting currency:', error);
      return amount;
    }
  },

  formatEconomicData(data: any[]): EconomicTrend[] {
    if (!data || !Array.isArray(data)) return [];
    
    return data
      .filter((item) => item.value !== '.')
      .map((item) => ({
        date: item.date,
        value: parseFloat(item.value),
      }))
      .reverse();
  },
};
