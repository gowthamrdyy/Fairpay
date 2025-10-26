import React, { useState } from 'react';
import { Brain, TrendingUp, Zap } from 'lucide-react';
import { useSalaryData } from '../hooks/useSalaryData';
import { predictionService } from '../services/predictionService';
import { formatCurrency } from '../utils/calculations';
import { Button } from '../components/Common/Button';
import { Input } from '../components/Common/Input';

export const SalaryPredictor: React.FC = () => {
  const { salaries } = useSalaryData();
  const [formData, setFormData] = useState({
    role: '',
    experience: '',
    education: 'Bachelor',
    location: 'Bangalore',
    industry: 'IT',
    skills: '',
  });
  const [prediction, setPrediction] = useState<any>(null);
  const [scenarios, setScenarios] = useState<any[]>([]);

  const handlePredict = () => {
    const input = {
      ...formData,
      experience: parseInt(formData.experience),
      skills: formData.skills.split(',').map((s) => s.trim()).filter(Boolean),
    };

    const pred = predictionService.predictSalary(input, salaries);
    setPrediction(pred);

    const whatIf = predictionService.generateWhatIfScenarios(
      pred.predictedSalary
    );
    setScenarios(whatIf);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Brain className="text-purple-600 dark:text-purple-400" size={20} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                AI Salary Predictor
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Get data-driven salary predictions
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-5 border border-slate-200 dark:border-slate-700">
            <h2 className="text-base font-bold mb-4 text-slate-900 dark:text-white">Your Profile</h2>
            <div className="space-y-3">
              <Input
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="e.g. Software Engineer"
              />
              <Input
                label="Years of Experience"
                name="experience"
                type="number"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g. 5"
              />
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Education
                </label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm"
                >
                  <option value="High School">High School</option>
                  <option value="Bachelor">Bachelor's</option>
                  <option value="Master">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm"
                >
                  <option value="Bangalore">Bangalore</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Pune">Pune</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Gurgaon">Gurgaon</option>
                  <option value="Noida">Noida</option>
                  <option value="Kochi">Kochi</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Industry
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm"
                >
                  <option value="IT">IT</option>
                  <option value="Finance">Finance</option>
                  <option value="FinTech">FinTech</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="EdTech">EdTech</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Logistics">Logistics</option>
                  <option value="InsurTech">InsurTech</option>
                  <option value="Travel & Hospitality">Travel & Hospitality</option>
                </select>
              </div>
              <Input
                label="Skills (comma-separated)"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g. React, Node.js, AWS"
              />
              <Button onClick={handlePredict} className="w-full text-sm py-2">
                <Brain size={16} className="mr-2" />
                Predict My Salary
              </Button>
            </div>
          </div>

          {prediction && (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg shadow-sm p-6 text-white border border-purple-500">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={20} />
                  <span className="text-xs opacity-90">Predicted Salary</span>
                </div>
                <div className="text-4xl font-bold mb-2">
                  {formatCurrency(prediction.predictedSalary)}
                </div>
                <div className="text-xs opacity-90">
                  Confidence: {prediction.confidence}%
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="text-xs opacity-90">Expected Range</div>
                  <div className="text-base font-semibold">
                    {formatCurrency(prediction.range.min)} - {formatCurrency(prediction.range.max)}
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-5 border border-slate-200 dark:border-slate-700">
                <h3 className="text-base font-bold mb-3 text-slate-900 dark:text-white flex items-center gap-2">
                  <Zap className="text-yellow-500" size={18} />
                  What-If Scenarios
                </h3>
                <div className="space-y-2">
                  {scenarios.map((scenario, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:shadow-sm transition-shadow border border-slate-200 dark:border-slate-600"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white text-sm">
                            {scenario.scenario}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-300">
                            {formatCurrency(scenario.projectedSalary)}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-600 dark:text-green-400 font-bold text-sm">
                            +{scenario.increasePercentage}%
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            +{formatCurrency(scenario.increase)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
