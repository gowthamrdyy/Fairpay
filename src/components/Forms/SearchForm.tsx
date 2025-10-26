import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '../Common/Button';
import { Input } from '../Common/Input';

interface SearchFormProps {
  onSearch: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  role?: string;
  company?: string;
  location?: string;
  industry?: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState<SearchFilters>({
    role: '',
    company: '',
    location: '',
    industry: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const activeFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value !== '')
    );
    onSearch(activeFilters);
  };

  const handleClear = () => {
    setFilters({
      role: '',
      company: '',
      location: '',
      industry: '',
    });
    onSearch({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">Search Salaries</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input
          label="Role"
          name="role"
          placeholder="e.g. Software Engineer"
          value={filters.role}
          onChange={handleChange}
        />
        <Input
          label="Company"
          name="company"
          placeholder="e.g. Google"
          value={filters.company}
          onChange={handleChange}
        />
        <Input
          label="Location"
          name="location"
          placeholder="e.g. Bangalore"
          value={filters.location}
          onChange={handleChange}
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Industry
          </label>
          <select
            name="industry"
            value={filters.industry}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Industries</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Consulting">Consulting</option>
          </select>
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <Button type="submit" className="flex items-center gap-2">
          <Search size={18} />
          Search
        </Button>
        <Button
          type="button"
          onClick={handleClear}
          className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600"
        >
          <X size={18} />
          Clear
        </Button>
      </div>
    </form>
  );
};
