import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Analytics } from './pages/Analytics';
import { EconomicInsights } from './pages/EconomicInsights';
import { About } from './pages/About';
import { SalaryPredictor } from './pages/SalaryPredictor';
import { SalaryComparison } from './pages/SalaryComparison';
import { NegotiationAssistant } from './pages/NegotiationAssistant';
import { CompanyReviews } from './pages/CompanyReviews';
import { CareerPath } from './pages/CareerPath';
import { ResetData } from './pages/ResetData';
import { sampleDataService } from './services/sampleDataService';

const AppContent: React.FC = () => {
  const { loading } = useAuth();

  useEffect(() => {
    // Load sample data if needed
    sampleDataService.checkAndAddSampleData();
    
    // Expose reset function to console for debugging
    (window as any).resetSalaryData = async () => {
      console.log('🔄 Resetting salary data...');
      await sampleDataService.clearAllData();
      await sampleDataService.checkAndAddSampleData();
      console.log('✅ Data reset complete! Refresh the page.');
      window.location.reload();
    };

    // Expose force load function
    (window as any).forceLoad5000 = async () => {
      console.log('🚀 Force loading 5000 entries...');
      console.log('⚠️ This will CLEAR existing data and load fresh 5000 entries');
      const confirm = window.confirm('This will delete all existing salary data and load 5000 new entries. Continue?');
      if (!confirm) {
        console.log('❌ Cancelled');
        return;
      }
      await sampleDataService.clearAllData();
      await sampleDataService.checkAndAddSampleData();
      console.log('✅ Force load complete! Refreshing page...');
      setTimeout(() => window.location.reload(), 1000);
    };

    // Log available commands
    console.log('📋 Available commands:');
    console.log('  window.resetSalaryData() - Reset and reload data');
    console.log('  window.forceLoad5000() - Force load 5000 entries (clears existing)');
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
              <span className="text-white font-bold text-3xl">FP</span>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="loading-spinner"></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-2">FairPay</h2>
          <p className="text-gray-600 dark:text-gray-400 animate-pulse">Loading your salary insights...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/economic-insights" element={<EconomicInsights />} />
            <Route path="/salary-predictor" element={<SalaryPredictor />} />
            <Route path="/salary-comparison" element={<SalaryComparison />} />
            <Route path="/negotiation-assistant" element={<NegotiationAssistant />} />
            <Route path="/company-reviews" element={<CompanyReviews />} />
            <Route path="/career-path" element={<CareerPath />} />
            <Route path="/about" element={<About />} />
            <Route path="/reset-data" element={<ResetData />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
