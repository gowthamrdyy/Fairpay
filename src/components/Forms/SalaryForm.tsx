import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { salaryService } from '../../services/salaryService';
import { useAuth } from '../../context/AuthContext';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface SalaryFormData {
  role: string;
  company: string;
  salary: number;
  experience: number;
  education: string;
  location: string;
  industry: string;
  jobType: string;
  companySize: string;
  gender: string;
  bonus?: number;
}

interface SalaryFormProps {
  onSuccess?: () => void;
}

export const SalaryForm: React.FC<SalaryFormProps> = ({ onSuccess }) => {
  const { register, handleSubmit } = useForm<SalaryFormData>();
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const onSubmit = async (data: SalaryFormData) => {
    if (!user) return;
    setIsSubmitting(true);

    try {
      await salaryService.addSalary({
        ...data,
        userId: user.uid,
        currency: 'INR',
        startDate: new Date(),
        verified: false,
        skills: [],
      });
      setSubmitStatus('success');
      setTimeout(() => {
        setStep(1);
        setSubmitStatus(null);
        onSuccess?.();
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Success!</h3>
        <p className="text-gray-600 dark:text-gray-400">Your salary data has been added anonymously.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Add Your Salary</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">Step {step} of 3</span>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full ${
                s <= step ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Role *
              </label>
              <input
                {...register('role', { required: true })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g. Software Engineer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Company *
              </label>
              <input
                {...register('company', { required: true })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g. Google"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Annual Salary (₹ per year) *
              </label>
              <input
                {...register('salary', { required: true, valueAsNumber: true })}
                type="number"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g. 1200000 (12 lakhs per year)"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Enter your total yearly salary (CTC)
              </p>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              Next <ArrowRight size={18} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Experience (years) *
                </label>
                <input
                  {...register('experience', { required: true, valueAsNumber: true })}
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g. 3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location *
                </label>
                <input
                  {...register('location', { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g. Bangalore"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Education *
              </label>
              <select
                {...register('education', { required: true })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="High School">High School</option>
                <option value="Bachelor">Bachelor's</option>
                <option value="Master">Master's</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Industry *
              </label>
              <select
                {...register('industry', { required: true })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Consulting">Consulting</option>
              </select>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <ArrowLeft size={18} /> Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Next <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Job Type *
              </label>
              <select
                {...register('jobType', { required: true })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="Full-time">Full-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Company Size
              </label>
              <select
                {...register('companySize')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="Startup">Startup (1-50)</option>
                <option value="Small">Small (51-200)</option>
                <option value="Medium">Medium (201-1000)</option>
                <option value="Large">Large (1000+)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Gender (Optional - for wage gap analysis)
              </label>
              <select
                {...register('gender')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Prefer not to say</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <ArrowLeft size={18} /> Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
