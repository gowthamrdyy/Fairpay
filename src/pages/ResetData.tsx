import React, { useState } from 'react';
import { RefreshCw, Trash2, CheckCircle } from 'lucide-react';
import { sampleDataService } from '../services/sampleDataService';

export const ResetData: React.FC = () => {
  const [isResetting, setIsResetting] = useState(false);
  const [isLoading5000, setIsLoading5000] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [progress, setProgress] = useState('');

  const handleLoad5000 = async () => {
    if (!window.confirm('This will CLEAR all existing data and load 5000 fresh entries from india_salary_data.json. This may take 2-3 minutes. Continue?')) {
      return;
    }

    setIsLoading5000(true);
    setStatus('idle');
    setProgress('Starting...');

    try {
      console.log('🚀 Force loading 5000 entries...');
      setProgress('Clearing existing data...');
      await sampleDataService.clearAllData();
      
      setProgress('Loading 5000 entries... (this may take 2-3 minutes)');
      await sampleDataService.checkAndAddSampleData();
      
      setStatus('success');
      setProgress('Complete! Redirecting...');
      
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    } catch (error) {
      console.error('Error loading 5000 entries:', error);
      setStatus('error');
      setProgress('Error occurred');
    } finally {
      setIsLoading5000(false);
    }
  };

  const handleReset = async () => {
    if (!window.confirm('Are you sure you want to reset all salary data? This will delete everything and add fresh sample data.')) {
      return;
    }

    setIsResetting(true);
    setStatus('idle');

    try {
      console.log('🔄 Resetting salary data...');
      await sampleDataService.clearAllData();
      await sampleDataService.checkAndAddSampleData();
      setStatus('success');
      
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    } catch (error) {
      console.error('Error resetting data:', error);
      setStatus('error');
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Reset Salary Data
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Clear all existing data and reload fresh sample entries
            </p>
          </div>

          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <CheckCircle size={20} />
                <p className="font-semibold">Success! Redirecting to dashboard...</p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-800 dark:text-red-200 font-semibold">
                Error resetting data. Check console for details.
              </p>
            </div>
          )}

          <div className="space-y-4">
            {/* Load 5000 Entries Button */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
                🚀 Load 5000 India Salary Entries
              </h3>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Clear existing data and load 5000 real salary entries from india_salary_data.json. This will take 2-3 minutes.
              </p>
              <button
                onClick={handleLoad5000}
                disabled={isLoading5000 || isResetting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                {isLoading5000 ? (
                  <>
                    <RefreshCw className="animate-spin" size={20} />
                    {progress}
                  </>
                ) : (
                  <>
                    <CheckCircle size={20} />
                    Load 5000 Entries
                  </>
                )}
              </button>
            </div>

            {/* Regular Reset Button */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Warning:</strong> This will permanently delete all salary entries and reload sample data.
              </p>
            </div>

            <button
              onClick={handleReset}
              disabled={isResetting || isLoading5000}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              {isResetting ? (
                <>
                  <RefreshCw className="animate-spin" size={20} />
                  Resetting...
                </>
              ) : (
                <>
                  <Trash2 size={20} />
                  Reset All Data
                </>
              )}
            </button>

            <a
              href="/dashboard"
              className="block text-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Cancel and go back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
