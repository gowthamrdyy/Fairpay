import React, { useState } from 'react';
import { MessageSquare, Mail, Copy, CheckCircle, Sparkles } from 'lucide-react';
import { aiService } from '../services/aiService';
import { formatCurrency } from '../utils/calculations';
import { Button } from '../components/Common/Button';
import { Input } from '../components/Common/Input';
import { exportService } from '../services/exportService';

export const NegotiationAssistant: React.FC = () => {
  const [formData, setFormData] = useState({
    currentSalary: '',
    targetSalary: '',
    role: '',
    experience: '',
    marketAverage: '',
  });
  const [tips, setTips] = useState('');
  const [emailTemplate, setEmailTemplate] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerateTips = async () => {
    setLoading(true);
    try {
      const data = {
        currentSalary: parseInt(formData.currentSalary),
        targetSalary: parseInt(formData.targetSalary),
        role: formData.role,
        experience: parseInt(formData.experience),
        marketAverage: parseInt(formData.marketAverage),
      };
      const generatedTips = await aiService.generateNegotiationTips(data);
      setTips(generatedTips);
    } catch (error) {
      console.error('Error generating tips:', error);
    }
    setLoading(false);
  };

  const handleGenerateEmail = async () => {
    setLoading(true);
    try {
      const data = {
        role: formData.role,
        targetSalary: parseInt(formData.targetSalary),
        marketData: `Market average: ${formatCurrency(parseInt(formData.marketAverage))}`,
      };
      const template = await aiService.generateEmailTemplate(data);
      setEmailTemplate(template);
    } catch (error) {
      console.error('Error generating email:', error);
    }
    setLoading(false);
  };

  const handleCopy = async (text: string) => {
    await exportService.copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
            <Sparkles className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            AI Negotiation Assistant
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Get personalized tips and email templates for your salary negotiation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Your Details</h2>
            <div className="space-y-4">
              <Input
                label="Current Salary (₹)"
                name="currentSalary"
                type="number"
                value={formData.currentSalary}
                onChange={handleChange}
                placeholder="e.g. 1000000"
              />
              <Input
                label="Target Salary (₹)"
                name="targetSalary"
                type="number"
                value={formData.targetSalary}
                onChange={handleChange}
                placeholder="e.g. 1500000"
              />
              <Input
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="e.g. Senior Software Engineer"
              />
              <Input
                label="Years of Experience"
                name="experience"
                type="number"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g. 5"
              />
              <Input
                label="Market Average (₹)"
                name="marketAverage"
                type="number"
                value={formData.marketAverage}
                onChange={handleChange}
                placeholder="e.g. 1200000"
              />
              <div className="space-y-2">
                <Button onClick={handleGenerateTips} className="w-full" disabled={loading}>
                  <MessageSquare size={18} className="mr-2" />
                  {loading ? 'Generating...' : 'Generate Negotiation Tips'}
                </Button>
                <Button
                  onClick={handleGenerateEmail}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  disabled={loading}
                >
                  <Mail size={18} className="mr-2" />
                  {loading ? 'Generating...' : 'Generate Email Template'}
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {tips && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Negotiation Tips
                  </h3>
                  <button
                    onClick={() => handleCopy(tips)}
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300 font-sans">
                    {tips}
                  </pre>
                </div>
              </div>
            )}

            {emailTemplate && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Email Template
                  </h3>
                  <button
                    onClick={() => handleCopy(emailTemplate)}
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded p-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300 font-sans">
                    {emailTemplate}
                  </pre>
                </div>
              </div>
            )}

            {!tips && !emailTemplate && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12 text-center">
                <Sparkles className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-500 dark:text-gray-400">
                  Fill in your details and generate AI-powered negotiation assistance
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
