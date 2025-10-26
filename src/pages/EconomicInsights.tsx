import React, { useState, useEffect } from 'react';
import { economicDataService } from '../services/economicDataService';
import type { EconomicTrend } from '../types/economic';
import { EconomicIndicators } from '../components/Charts/EconomicIndicators';
import { TrendingUp, DollarSign, Briefcase } from 'lucide-react';

export const EconomicInsights: React.FC = () => {
  const [inflationData, setInflationData] = useState<EconomicTrend[]>([]);
  const [gdpData, setGdpData] = useState<EconomicTrend[]>([]);
  const [unemploymentData, setUnemploymentData] = useState<EconomicTrend[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [inflation, gdp, unemployment] = await Promise.all([
          economicDataService.getInflationRate(),
          economicDataService.getGDPGrowth(),
          economicDataService.getUnemploymentRate(),
        ]);

        setInflationData(inflation);
        setGdpData(gdp);
        setUnemploymentData(unemployment);
      } catch (error) {
        console.error('Error fetching economic data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <p className="text-gray-600">Loading economic insights...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Economic Insights
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Understand how economic indicators impact salary trends and negotiations
        </p>

        <div className="space-y-6">
          {inflationData.length > 0 && (
            <EconomicIndicators
              title="Inflation Rate (CPI)"
              data={inflationData}
              color="#F97316"
            />
          )}

          {gdpData.length > 0 && (
            <EconomicIndicators
              title="GDP Growth Rate"
              data={gdpData}
              color="#10B981"
            />
          )}

          {unemploymentData.length > 0 && (
            <EconomicIndicators
              title="Unemployment Rate"
              data={unemploymentData}
              color="#EF4444"
            />
          )}

          {/* Explanatory Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              How Economic Indicators Affect Your Salary
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Inflation Rate
                  </h3>
                  <p className="text-gray-600">
                    Inflation directly affects your purchasing power and cost of living. 
                    Higher inflation typically leads to salary adjustments and stronger 
                    wage negotiations as employees seek to maintain their real income.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    GDP Growth
                  </h3>
                  <p className="text-gray-600">
                    GDP growth indicates overall economic health. Strong GDP growth often 
                    correlates with business expansion, increased hiring, and better salary 
                    opportunities as companies compete for talent.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Unemployment Rate
                  </h3>
                  <p className="text-gray-600">
                    Low unemployment strengthens employee bargaining power. When jobs are 
                    plentiful and talent is scarce, employers must offer competitive salaries 
                    to attract and retain employees.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Source Attribution */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Data Sources:</strong> Economic data provided by Federal Reserve Economic Data (FRED), 
              Alpha Vantage, and ExchangeRate-API. Data is updated regularly to reflect current economic conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
