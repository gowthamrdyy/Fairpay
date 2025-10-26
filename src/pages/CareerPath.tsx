import React, { useState } from 'react';
import { Rocket, ArrowRight, BookOpen } from 'lucide-react';
import { predictionService } from '../services/predictionService';
import { formatCurrency } from '../utils/calculations';

export const CareerPath: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState('Software Engineer');
  const [currentExp, setCurrentExp] = useState(2);
  const [careerPath, setCareerPath] = useState<any[]>([]);

  const roles = [
    'Software Engineer',
    'Data Scientist',
    'Product Manager',
    'DevOps Engineer',
    'UI/UX Designer',
  ];

  const handleVisualize = () => {
    const path = predictionService.getCareerPath(selectedRole);
    setCareerPath(path);
  };

  React.useEffect(() => {
    handleVisualize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRole]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
            <Rocket className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Career Path Visualizer
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Explore salary progression and skills needed for your career journey
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select Career Track
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Current Experience (years)
              </label>
              <input
                type="number"
                value={currentExp}
                onChange={(e) => setCurrentExp(parseInt(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          {careerPath.map((stage, idx) => (
            <div key={idx} className="mb-8">
              <div
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${
                  stage.yearsExperience <= currentExp
                    ? 'border-4 border-green-500'
                    : 'border-2 border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stage.role}
                      </h3>
                      {stage.yearsExperience <= currentExp && (
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-semibold rounded-full">
                          Current Level
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {stage.yearsExperience}+ years experience
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                      {formatCurrency(stage.averageSalary)}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Average Salary</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={18} className="text-blue-600" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Required Skills
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stage.skills.map((skill: string, skillIdx: number) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {stage.nextRole && (
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
                    <span>Next: {stage.nextRole}</span>
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>

              {idx < careerPath.length - 1 && (
                <div className="flex justify-center my-4">
                  <ArrowRight
                    size={32}
                    className="text-gray-400 dark:text-gray-600 rotate-90"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
