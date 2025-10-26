import React, { useState } from 'react';
import { Star, ThumbsUp, Building2 } from 'lucide-react';
import { companyService } from '../services/companyService';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Common/Button';
import { Input } from '../components/Common/Input';
import { Modal } from '../components/Common/Modal';

export const CompanyReviews: React.FC = () => {
  const { user } = useAuth();
  const [companyName, setCompanyName] = useState('');
  const [reviews, setReviews] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    workLifeBalance: 5,
    benefits: 5,
    culture: 5,
    management: 5,
    careerGrowth: 5,
    review: '',
    pros: '',
    cons: '',
  });

  const handleSearch = async () => {
    if (!companyName) return;
    const companyReviews = await companyService.getCompanyReviews(companyName);
    setReviews(companyReviews);
    const companyStats = await companyService.getCompanyStats(companyName);
    setStats(companyStats);
  };

  const handleSubmitReview = async () => {
    if (!user) return;
    await companyService.addReview({
      companyName,
      userId: user.uid,
      ...newReview,
    });
    setShowModal(false);
    handleSearch();
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
              <Building2 className="text-orange-600 dark:text-orange-400" size={20} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Company Reviews
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Read and share anonymous reviews
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4 mb-4 border border-slate-200 dark:border-slate-700">
          <div className="flex gap-2">
            <Input
              label=""
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name..."
              className="flex-1"
            />
            <Button onClick={handleSearch} className="mt-0 text-sm px-4">
              Search
            </Button>
            <Button
              onClick={() => setShowModal(true)}
              className="mt-0 bg-green-600 hover:bg-green-700 text-sm px-4"
            >
              Write Review
            </Button>
          </div>
        </div>

        {stats && (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4 mb-4 border border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
              {stats.companyName}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100 dark:border-yellow-900/30">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{stats.averageRating}</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">Overall</div>
                {renderStars(Math.round(stats.averageRating))}
              </div>
              <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.workLifeBalance}</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">Work-Life</div>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/30">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.benefits}</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">Benefits</div>
              </div>
              <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-900/30">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.culture}</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">Culture</div>
              </div>
              <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-900/30">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">{stats.management}</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">Management</div>
              </div>
              <div className="text-center p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-900/30">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.careerGrowth}</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">Career Growth</div>
              </div>
            </div>
            <p className="text-center text-slate-600 dark:text-slate-300 mt-3 text-sm">
              Based on {stats.totalReviews} reviews
            </p>
          </div>
        )}

        <div className="space-y-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  {renderStars(review.rating)}
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <button className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <ThumbsUp size={14} />
                  <span className="text-xs">{review.helpful}</span>
                </button>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-3 text-sm">{review.review}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-2.5 bg-green-50 dark:bg-green-900/20 rounded border border-green-100 dark:border-green-900/30">
                  <p className="font-semibold text-green-800 dark:text-green-300 mb-1 text-xs">Pros</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300">{review.pros}</p>
                </div>
                <div className="p-2.5 bg-red-50 dark:bg-red-900/20 rounded border border-red-100 dark:border-red-900/30">
                  <p className="font-semibold text-red-800 dark:text-red-300 mb-1 text-xs">Cons</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300">{review.cons}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Write a Review">
          <div className="space-y-3">
            <Input
              label="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">Overall Rating</label>
              <input
                type="range"
                min="1"
                max="5"
                value={newReview.rating}
                onChange={(e) =>
                  setNewReview({ ...newReview, rating: parseInt(e.target.value) })
                }
                className="w-full"
              />
              <div className="text-center">{renderStars(newReview.rating)}</div>
            </div>
            <textarea
              placeholder="Your review..."
              value={newReview.review}
              onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm"
              rows={4}
            />
            <Input
              label="Pros"
              value={newReview.pros}
              onChange={(e) => setNewReview({ ...newReview, pros: e.target.value })}
            />
            <Input
              label="Cons"
              value={newReview.cons}
              onChange={(e) => setNewReview({ ...newReview, cons: e.target.value })}
            />
            <Button onClick={handleSubmitReview} className="w-full">
              Submit Review
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
