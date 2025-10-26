# FairPay - AI-Powered Salary Insights Platform

<div align="center">

![FairPay Logo](public/favicon.svg)

**Know Your Worth | Transparent Salary Intelligence**

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-12.4.0-orange.svg)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-38B2AC.svg)](https://tailwindcss.com/)

[Live Demo](#) | [Documentation](#) | [Report Bug](#) | [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Data](#-data)
- [API Integration](#-api-integration)
- [Components](#-components)
- [Services](#-services)
- [Deployment](#-deployment)
- [Team](#-team)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

FairPay is a comprehensive salary transparency platform designed to empower professionals with data-driven insights for fair compensation negotiations. Built with React 19 and TypeScript, it leverages machine learning algorithms and real-time economic data to provide accurate salary predictions and market analysis.

### Problem Statement

Wage inequality and lack of salary transparency prevent professionals from negotiating fair compensation. Without access to market data, employees are at a disadvantage during salary negotiations, perpetuating pay gaps across industries, genders, and demographics.

### Solution

FairPay addresses this by providing:
- Real-time salary benchmarks from 5000+ data points
- AI-powered salary predictions using machine learning
- Gender wage gap analysis and insights
- Anonymous company reviews and culture ratings
- Career path visualization and growth planning
- AI-powered negotiation assistance

---

## ✨ Features

### 1. Salary Comparison Tool
- **Real-time Comparison**: Compare your salary against 5000+ real market data points
- **Percentile Ranking**: See where you stand (0-100 percentile)
- **Market Statistics**: View average, median, and top 10% salaries for your role
- **Intelligent Verdict**: Get personalized feedback on your compensation
- **Next Steps**: Actionable recommendations based on your position

### 2. AI Salary Predictor
- **Machine Learning Predictions**: ML-powered salary estimates based on your profile
- **Multiple Factors**: Considers role, experience, education, location, industry, and skills
- **Confidence Score**: Shows prediction accuracy (50-95%)
- **Salary Range**: Provides min-max expected salary range
- **What-If Scenarios**: Explore salary impact of career changes:
  - +2 years experience
  - Location change
  - Learning new skills
  - Getting advanced degree
  - Moving to management

### 3. Analytics Dashboard
- **Industry Analysis**: Average salary by industry with interactive charts
- **Experience Breakdown**: Salary progression by experience level (0-2, 3-5, 6-10, 10+ years)
- **Location Insights**: Top 10 locations by average salary
- **Key Statistics**: Total entries, industries covered, average salary
- **Visual Charts**: Interactive bar charts with Recharts library
- **Real-time Updates**: Data refreshes as new entries are added

### 4. Company Reviews
- **5000+ Reviews**: Anonymous company reviews from real employees
- **Multi-dimensional Ratings**:
  - Overall rating (1-5 stars)
  - Work-life balance
  - Benefits
  - Culture
  - Management
  - Career growth
- **Pros & Cons**: Detailed feedback on company strengths and weaknesses
- **Search Functionality**: Find reviews by company name (case-insensitive)
- **Write Reviews**: Submit anonymous reviews for any company

### 5. Negotiation Assistant
- **AI-Powered Tips**: Personalized negotiation strategies
- **Email Templates**: Pre-written professional email templates
- **Market Data**: Leverage salary data in negotiations
- **Best Practices**: Industry-standard negotiation techniques

### 6. Career Path Visualization
- **Role Progression**: See typical career paths for your role
- **Salary Growth**: Visualize salary increases at each level
- **Skills Required**: Know what skills you need for the next level
- **Timeline**: Understand typical years of experience needed

### 7. Economic Insights
- **Real-time Economic Data**: Integration with FRED API
- **Market Trends**: Track economic indicators affecting salaries
- **Inflation Impact**: Understand purchasing power changes
- **Currency Conversion**: Multi-currency support via ExchangeRate-API

---

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Vite 7.1.14** - Lightning-fast build tool (Rolldown)
- **React Router 7.9.4** - Client-side routing
- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **Lucide React 0.548.0** - Beautiful icon library

### Backend & Database
- **Firebase 12.4.0** - Backend as a Service
- **Firestore** - NoSQL cloud database
- **Firebase Auth** - Anonymous authentication

### Data Visualization
- **Recharts 3.3.0** - Composable charting library
- **Interactive Charts**: Bar charts, line charts, area charts
- **Responsive Design**: Mobile-friendly visualizations

### Form Management
- **React Hook Form 7.65.0** - Performant form validation
- **Zod 4.1.12** - TypeScript-first schema validation

### HTTP & APIs
- **Axios 1.12.2** - Promise-based HTTP client
- **FRED API** - Federal Reserve Economic Data
- **Alpha Vantage API** - Stock market data
- **ExchangeRate-API** - Currency conversion
- **Gemini AI API** - Google's AI for predictions

### Utilities
- **date-fns 4.1.0** - Modern date utility library
- **lodash 4.17.21** - Utility functions
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 3.3.1** - Merge Tailwind classes

### Development Tools
- **ESLint 9.36.0** - Code linting
- **TypeScript ESLint 8.45.0** - TypeScript linting
- **Autoprefixer 10.4.21** - CSS vendor prefixing
- **PostCSS 8.5.6** - CSS transformations

---

## 📁 Project Structure

```
fairpay/
├── public/
│   └── favicon.svg                 # FairPay logo favicon
├── src/
│   ├── assets/                     # Static assets (empty, for future use)
│   ├── components/
│   │   ├── Charts/
│   │   │   ├── ExperienceProgression.tsx    # Experience vs salary chart
│   │   │   ├── GenderWageGapChart.tsx       # Gender pay gap visualization
│   │   │   └── SalaryDistributionChart.tsx  # Salary distribution histogram
│   │   ├── Common/
│   │   │   ├── Button.tsx                   # Reusable button component
│   │   │   ├── Input.tsx                    # Form input component
│   │   │   └── Modal.tsx                    # Modal dialog component
│   │   ├── Dashboard/
│   │   │   └── StatCards.tsx                # Dashboard statistics cards
│   │   ├── Forms/
│   │   │   ├── SalaryForm.tsx               # Salary submission form
│   │   │   └── SearchForm.tsx               # Search/filter form
│   │   └── Layout/
│   │       ├── Header.tsx                   # App header with navigation
│   │       └── Footer.tsx                   # App footer
│   ├── context/
│   │   ├── AuthContext.tsx                  # Firebase authentication context
│   │   └── ThemeContext.tsx                 # Dark/light theme context
│   ├── data/
│   │   ├── india_salary_data.json           # 5000 salary entries
│   │   └── india_company_reviews.json       # 5000 company reviews
│   ├── hooks/
│   │   ├── useFirebase.ts                   # Firebase operations hook
│   │   └── useSalaryData.ts                 # Salary data fetching hook
│   ├── pages/
│   │   ├── About.tsx                        # About us page
│   │   ├── Analytics.tsx                    # Analytics dashboard
│   │   ├── CareerPath.tsx                   # Career path visualization
│   │   ├── CompanyReviews.tsx               # Company reviews page
│   │   ├── Dashboard.tsx                    # Main dashboard
│   │   ├── EconomicInsights.tsx             # Economic data page
│   │   ├── Home.tsx                         # Landing page
│   │   ├── NegotiationAssistant.tsx         # Negotiation tips
│   │   ├── ResetData.tsx                    # Data management page
│   │   ├── SalaryComparison.tsx             # Salary comparison tool
│   │   └── SalaryPredictor.tsx              # AI salary predictor
│   ├── services/
│   │   ├── aiService.ts                     # Gemini AI integration
│   │   ├── authService.ts                   # Authentication service
│   │   ├── companyService.ts                # Company reviews CRUD
│   │   ├── costOfLivingService.ts           # Cost of living calculations
│   │   ├── economicDataService.ts           # FRED API integration
│   │   ├── exportService.ts                 # Data export functionality
│   │   ├── firebase.ts                      # Firebase configuration
│   │   ├── predictionService.ts             # ML prediction algorithms
│   │   ├── salaryService.ts                 # Salary data CRUD
│   │   └── sampleDataService.ts             # Sample data loader
│   ├── types/
│   │   ├── company.ts                       # Company & review types
│   │   ├── economic.ts                      # Economic data types
│   │   ├── notification.ts                  # Notification types
│   │   ├── prediction.ts                    # Prediction types
│   │   ├── salary.ts                        # Salary entry types
│   │   └── user.ts                          # User types
│   ├── utils/
│   │   ├── calculations.ts                  # Math & statistics utilities
│   │   ├── formatters.ts                    # Data formatting utilities
│   │   ├── stringUtils.ts                   # String manipulation utilities
│   │   └── validators.ts                    # Input validation utilities
│   ├── App.tsx                              # Main app component
│   ├── index.css                            # Global styles & Tailwind
│   └── main.tsx                             # App entry point
├── .env.example                             # Environment variables template
├── .env.local                               # Your environment variables (gitignored)
├── .gitignore                               # Git ignore rules
├── eslint.config.js                         # ESLint configuration
├── index.html                               # HTML entry point
├── package.json                             # Dependencies & scripts
├── postcss.config.js                        # PostCSS configuration
├── README.md                                # This file
├── tailwind.config.js                       # Tailwind CSS configuration
├── tsconfig.json                            # TypeScript configuration
├── tsconfig.app.json                        # App TypeScript config
├── tsconfig.node.json                       # Node TypeScript config
└── vite.config.ts                           # Vite configuration
```

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **Firebase Account** - [Sign up](https://firebase.google.com/)

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/your-username/fairpay.git

# Navigate to project directory
cd fairpay
```

### Step 2: Install Dependencies

```bash
# Install all dependencies
npm install

# This will install:
# - React, TypeScript, and all frontend libraries
# - Firebase SDK
# - Recharts for data visualization
# - All development dependencies
```

### Step 3: Set Up Environment Variables

```bash
# Copy the example environment file
cp .env.example .env.local
```

Now open `.env.local` and add your API keys (see Configuration section below).

### Step 4: Start Development Server

```bash
# Start the Vite development server
npm run dev

# The app will be available at:
# http://localhost:5173
```

### Step 5: Verify Installation

1. Open http://localhost:5173 in your browser
2. Check the browser console (F12) for any errors
3. You should see: "Firebase initialized successfully"
4. The app will automatically load 5000 salary entries on first run

---

## ⚙️ Configuration

### Firebase Setup

1. **Create Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Enter project name (e.g., "fairpay")
   - Disable Google Analytics (optional)
   - Click "Create project"

2. **Enable Firestore Database**:
   - In Firebase Console, go to "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode" (for development)
   - Select your region
   - Click "Enable"

3. **Enable Authentication**:
   - Go to "Authentication" → "Sign-in method"
   - Enable "Anonymous" authentication
   - Click "Save"

4. **Get Firebase Configuration**:
   - Go to Project Settings (gear icon)
   - Scroll to "Your apps" section
   - Click "Web" icon (</>) to add a web app
   - Register app with nickname "FairPay Web"
   - Copy the configuration values

5. **Add to `.env.local`**:
```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### API Keys Setup

#### 1. FRED API (Federal Reserve Economic Data)
- **Purpose**: Real-time economic data (GDP, inflation, unemployment)
- **Sign up**: https://fred.stlouisfed.org/docs/api/api_key.html
- **Free tier**: Unlimited requests
- **Add to `.env.local`**:
```env
VITE_FRED_API_KEY=your_fred_api_key
```

#### 2. Alpha Vantage API
- **Purpose**: Stock market data and financial indicators
- **Sign up**: https://www.alphavantage.co/support/#api-key
- **Free tier**: 25 requests per day
- **Add to `.env.local`**:
```env
VITE_ALPHA_VANTAGE_API_KEY=your_alpha_vantage_key
```

#### 3. ExchangeRate-API
- **Purpose**: Currency conversion rates
- **Sign up**: https://www.exchangerate-api.com/
- **Free tier**: 1,500 requests per month
- **Add to `.env.local`**:
```env
VITE_EXCHANGERATE_API_KEY=your_exchangerate_key
```

#### 4. Gemini AI API
- **Purpose**: AI-powered salary predictions and insights
- **Sign up**: https://makersuite.google.com/app/apikey
- **Free tier**: 60 requests per minute
- **Add to `.env.local`**:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

### Complete `.env.local` Example

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSyDdt7I6ZzIEyR9C7ZkLRawyAPka8Qche2c
VITE_FIREBASE_AUTH_DOMAIN=fairpay-91231.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=fairpay-91231
VITE_FIREBASE_STORAGE_BUCKET=fairpay-91231.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=269909528537
VITE_FIREBASE_APP_ID=1:269909528537:web:8d18faccf06002ff3913c8

# Economic Data APIs
VITE_FRED_API_KEY=c2a09745894a851ccde6184e917894eb
VITE_ALPHA_VANTAGE_API_KEY=S41SKROYR355ODZ3
VITE_EXCHANGERATE_API_KEY=3976ee107b827c80ac0c4446

# AI Features
VITE_GEMINI_API_KEY=AIzaSyD0VX7CmAn7e4waeWOw7g0jEKR46v806Jg
```

---

## 📖 Usage

### Running the Application

```bash
# Development mode (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Loading Sample Data

The app automatically loads 5000 salary entries and 5000 company reviews on first run. If you need to reload data:

#### Method 1: Using Reset Data Page
1. Navigate to http://localhost:5173/reset-data
2. Click "Load 5000 Entries" button
3. Wait 2-3 minutes for data to load
4. Page will auto-redirect when complete

#### Method 2: Browser Console
```javascript
// Open browser console (F12) and run:
window.forceLoad5000()

// Or reset all data:
window.resetSalaryData()
```

### Navigating the App

#### Home Page (`/`)
- Landing page with feature overview
- Quick access to all tools
- Call-to-action buttons

#### Dashboard (`/dashboard`)
- Overview of salary statistics
- Submit new salary entries
- View wage gap analysis
- Experience progression charts

#### Analytics (`/analytics`)
- Industry-wise salary breakdown
- Experience level analysis
- Location-based insights
- Interactive charts

#### Salary Comparison (`/salary-comparison`)
1. Enter your annual salary (₹)
2. Enter your role (e.g., "Software Engineer")
3. Click "Compare Now"
4. View your percentile ranking
5. See average, median, and top 10% salaries
6. Get personalized recommendations

#### AI Salary Predictor (`/salary-predictor`)
1. Fill in your profile:
   - Role
   - Years of experience
   - Education level
   - Location
   - Industry
   - Skills (comma-separated)
2. Click "Predict My Salary"
3. View predicted salary with confidence score
4. Explore what-if scenarios

#### Company Reviews (`/company-reviews`)
1. Search for a company (case-insensitive)
2. View aggregate ratings:
   - Overall rating
   - Work-life balance
   - Benefits
   - Culture
   - Management
   - Career growth
3. Read individual reviews
4. Write your own anonymous review

#### Career Path (`/career-path`)
- Select your current role
- View typical career progression
- See salary growth at each level
- Understand required skills
- Plan your career trajectory

#### About (`/about`)
- Meet the team
- Learn about the project
- View technology stack
- Contact information

---

## 📊 Data

### Salary Data (`src/data/india_salary_data.json`)

**5000 entries** with the following fields:

```typescript
{
  role: string;              // Job title (e.g., "Software Engineer")
  company: string;           // Company name (e.g., "Google")
  salary: number;            // Annual salary in INR
  experience: number;        // Years of experience (0-15)
  education: string;         // "Bachelor", "Master", or "PhD"
  location: string;          // City (e.g., "Bangalore", "Mumbai")
  industry: string;          // Industry sector
  jobType: string;           // "Full-time", "Contract", "Freelance"
  companySize: string;       // "Startup", "SME", "Large", "Enterprise"
  gender: string;            // "Male" or "Female"
}
```

**Coverage**:
- **41 Companies**: Google, Microsoft, Amazon, TCS, Infosys, Wipro, etc.
- **10+ Locations**: Bangalore, Mumbai, Delhi NCR, Hyderabad, Pune, Chennai, Kolkata, Gurgaon, Noida, Kochi
- **10+ Industries**: IT, FinTech, E-commerce, Healthcare, EdTech, Consulting, Finance, Logistics, InsurTech, Travel & Hospitality
- **20+ Roles**: Software Engineer, Data Scientist, Product Manager, DevOps Engineer, etc.

### Company Reviews Data (`src/data/india_company_reviews.json`)

**5000 reviews** with the following fields:

```typescript
{
  companyName: string;       // Company name
  userId: string;            // Anonymous user ID
  rating: number;            // Overall rating (1-5)
  workLifeBalance: number;   // Work-life balance rating (1-5)
  benefits: number;          // Benefits rating (1-5)
  culture: number;           // Culture rating (1-5)
  management: number;        // Management rating (1-5)
  careerGrowth: number;      // Career growth rating (1-5)
  review: string;            // Review text
  pros: string;              // Positive aspects
  cons: string;              // Negative aspects
  helpful: number;           // Helpful count
  createdAt: string;         // ISO date string
}
```

### Data Loading Process

1. **Automatic Loading**: On app startup, checks if Firestore has data
2. **Threshold Check**: If less than 1000 entries, clears and reloads
3. **Batch Processing**: Loads data in batches of 50 for performance
4. **Progress Tracking**: Console logs show progress every 500 entries
5. **Error Handling**: Failed entries are logged but don't stop the process

### Data Management

```javascript
// Available console commands:

// Force load 5000 entries (clears existing data)
window.forceLoad5000()

// Reset all data (clears and reloads)
window.resetSalaryData()
```

---

## 🔌 API Integration

### Firebase Firestore

**Collections**:
- `salaries`: Salary entries
- `companyReviews`: Company reviews

**Operations**:
```typescript
// Add document
await firestoreService.addDocument('salaries', data);

// Get all documents
const salaries = await firestoreService.getDocuments('salaries');

// Update document
await firestoreService.updateDocument('salaries', docId, data);

// Delete document
await firestoreService.deleteDocument('salaries', docId);

// Query documents
const results = await firestoreService.queryDocuments(
  'salaries',
  [where('role', '==', 'Software Engineer'), limit(10)]
);
```

### FRED API (Economic Data)

**Endpoints Used**:
- GDP: `https://api.stlouisfed.org/fred/series/observations?series_id=GDP`
- Inflation: `https://api.stlouisfed.org/fred/series/observations?series_id=CPIAUCSL`
- Unemployment: `https://api.stlouisfed.org/fred/series/observations?series_id=UNRATE`

**Implementation**:
```typescript
// src/services/economicDataService.ts
export const economicDataService = {
  async getGDP(): Promise<EconomicData[]> {
    const response = await axios.get(
      `https://api.stlouisfed.org/fred/series/observations`,
      {
        params: {
          series_id: 'GDP',
          api_key: import.meta.env.VITE_FRED_API_KEY,
          file_type: 'json'
        }
      }
    );
    return response.data.observations;
  }
};
```

### Alpha Vantage API (Market Data)

**Endpoints Used**:
- Stock quotes
- Market indicators
- Company fundamentals

### ExchangeRate-API (Currency Conversion)

**Endpoint**:
```
https://v6.exchangerate-api.com/v6/{API_KEY}/latest/INR
```

**Usage**:
```typescript
// Convert INR to USD
const rate = await exchangeRateService.getRate('INR', 'USD');
const usdAmount = inrAmount * rate;
```

### Gemini AI API (Predictions)

**Used For**:
- Salary predictions
- Negotiation tips
- Career advice
- Market insights

**Implementation**:
```typescript
// src/services/aiService.ts
export const aiService = {
  async predictSalary(profile: UserProfile): Promise<Prediction> {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent',
      {
        contents: [{ parts: [{ text: prompt }] }]
      },
      {
        params: { key: import.meta.env.VITE_GEMINI_API_KEY }
      }
    );
    return response.data;
  }
};
```

---

## 🧩 Components

### Common Components

#### Button (`src/components/Common/Button.tsx`)
```typescript
<Button 
  variant="primary" | "secondary" | "danger"
  onClick={handleClick}
  disabled={isLoading}
>
  Click Me
</Button>
```

#### Input (`src/components/Common/Input.tsx`)
```typescript
<Input
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={errors.email}
/>
```

#### Modal (`src/components/Common/Modal.tsx`)
```typescript
<Modal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Modal Title"
>
  <p>Modal content</p>
</Modal>
```

### Chart Components

#### SalaryDistributionChart
- Displays salary distribution histogram
- Shows count of salaries in different ranges
- Interactive tooltips with formatted currency

#### GenderWageGapChart
- Visualizes pay gap between genders
- Shows average salaries for male/female
- Calculates gap percentage

#### ExperienceProgression
- Line chart showing salary growth by experience
- Helps visualize career progression
- Interactive data points

### Layout Components

#### Header
- Sticky navigation bar
- Responsive mobile menu
- Links to all major pages
- FairPay logo

#### Footer
- Company information
- Quick links
- Social media links
- Copyright notice
- Scroll-to-top functionality

---

## 🔧 Services

### Salary Service (`src/services/salaryService.ts`)

**Methods**:
```typescript
// Add new salary entry
await salaryService.addSalary(salaryData);

// Get all salaries
const salaries = await salaryService.getAllSalaries();

// Filter by role (case-insensitive)
const engineers = await salaryService.getSalariesByRole('Software Engineer');

// Filter by company (case-insensitive)
const googleSalaries = await salaryService.getSalariesByCompany('Google');

// Filter by location
const bangaloreSalaries = await salaryService.getSalariesByLocation('Bangalore');

// Calculate statistics
const stats = salaryService.calculateStats(salaries);
// Returns: { average, median, min, max, stdDev, count }

// Calculate wage gap
const wageGap = salaryService.calculateWageGap(salaries);
// Returns: { maleAverage, femaleAverage, gapPercentage, gapAmount }

// Get trend by experience
const trend = salaryService.getTrendByExperience(salaries);
// Returns: Array<{ experience, averageSalary }>
```

### Prediction Service (`src/services/predictionService.ts`)

**Methods**:
```typescript
// Predict salary based on profile
const prediction = predictionService.predictSalary(
  {
    role: 'Software Engineer',
    experience: 5,
    education: 'Bachelor',
    location: 'Bangalore',
    industry: 'IT',
    skills: ['React', 'Node.js', 'AWS']
  },
  historicalData
);
// Returns: { predictedSalary, confidence, range, factors }

// Generate what-if scenarios
const scenarios = predictionService.generateWhatIfScenarios(currentSalary);
// Returns: Array of scenarios with projected salaries

// Get career path
const path = predictionService.getCareerPath('Software Engineer');
// Returns: Array of career progression steps

// Calculate percentile
const percentile = predictionService.calculatePercentile(salary, allSalaries);
// Returns: 0-100 percentile ranking
```

### Company Service (`src/services/companyService.ts`)

**Methods**:
```typescript
// Add review
await companyService.addReview({
  companyName: 'Google',
  userId: user.uid,
  rating: 5,
  workLifeBalance: 4,
  benefits: 5,
  culture: 5,
  management: 4,
  careerGrowth: 5,
  review: 'Great place to work!',
  pros: 'Excellent benefits',
  cons: 'High pressure'
});

// Get company reviews (case-insensitive)
const reviews = await companyService.getCompanyReviews('google');

// Get company statistics
const stats = await companyService.getCompanyStats('Google');
// Returns: { companyName, averageRating, totalReviews, workLifeBalance, benefits, culture, management, careerGrowth }

// Mark review as helpful
await companyService.markReviewHelpful(reviewId);
```

### AI Service (`src/services/aiService.ts`)

**Methods**:
```typescript
// Get salary prediction from AI
const prediction = await aiService.predictSalary(profile);

// Get negotiation tips
const tips = await aiService.getNegotiationTips(currentSalary, targetSalary);

// Generate email template
const email = await aiService.generateNegotiationEmail(context);

// Get career advice
const advice = await aiService.getCareerAdvice(profile);
```

---

## 🚢 Deployment

### Build for Production

```bash
# Create production build
npm run build

# Output will be in the 'dist' folder
# Files are optimized, minified, and ready for deployment
```

### Deploy to Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init hosting

# Select options:
# - Use existing project
# - Public directory: dist
# - Single-page app: Yes
# - Automatic builds: No

# Deploy
firebase deploy --only hosting

# Your app will be live at:
# https://your-project-id.web.app
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project or create new
# - Build command: npm run build
# - Output directory: dist

# Your app will be live at:
# https://your-app.vercel.app
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod

# Build directory: dist

# Your app will be live at:
# https://your-app.netlify.app
```

### Environment Variables in Production

Make sure to add all environment variables in your hosting platform:

**Firebase Hosting**: Use Firebase Functions config
**Vercel**: Project Settings → Environment Variables
**Netlify**: Site Settings → Build & Deploy → Environment

---

## 👥 Team

### Gowtham Reddy
**Founder & Machine Learning Engineer**

Passionate about leveraging machine learning and data science to solve real-world problems. Specializes in building intelligent systems that empower users with actionable insights.

**Skills**: Machine Learning, React, TypeScript, Firebase, Python

**Connect**:
- [LinkedIn](https://www.linkedin.com/in/gowthamrdyy/)
- [GitHub](https://github.com/gowthamrdyy)
- [Email](mailto:iamgowthamsree@gmail.com)

### Hari Prasanna
**Co-Founder & Machine Learning Engineer**

Expert in machine learning and full-stack development. Focused on creating scalable solutions that deliver meaningful impact through data-driven decision making.

**Skills**: Machine Learning, React, TypeScript, Firebase, Python

**Connect**:
- [LinkedIn](https://www.linkedin.com/in/prasannardyy/)
- [GitHub](https://github.com/prasannardyy)
- [Email](mailto:pkr6301021313@gmail.com)

---

## 🤝 Contributing

This is a private project developed by Gowtham Reddy and Hari Prasanna. We are not currently accepting external contributions.

For inquiries, suggestions, or collaboration opportunities, please contact us via:
- Email: contact@fairpay.com
- LinkedIn: See team profiles above

---

## 📄 License

© 2025 FairPay. All rights reserved.

This project is proprietary software. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited without explicit permission from the authors.

---

## 🙏 Acknowledgments

- **Firebase** - For providing excellent backend infrastructure
- **Google Gemini AI** - For AI-powered predictions
- **FRED** - For economic data
- **Alpha Vantage** - For market data
- **ExchangeRate-API** - For currency conversion
- **Recharts** - For beautiful data visualizations
- **Tailwind CSS** - For rapid UI development
- **React Team** - For the amazing framework
- **Open Source Community** - For all the amazing libraries

---

## 📞 Support

For support, email contact@fairpay.com or reach out to the team on LinkedIn.

---

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Salary comparison tool
- ✅ AI salary predictor
- ✅ Analytics dashboard
- ✅ Company reviews
- ✅ 5000+ salary data points
- ✅ 5000+ company reviews

### Phase 2 (Planned)
- 🔄 Mobile app (React Native)
- 🔄 Advanced ML models
- 🔄 More data sources
- 🔄 International markets
- 🔄 Salary negotiation simulator
- 🔄 Job matching algorithm

### Phase 3 (Future)
- 📋 Employer dashboard
- 📋 Salary benchmarking API
- 📋 Integration with job boards
- 📋 Blockchain-based verification
- 📋 Community features
- 📋 Premium features

---

## 📚 Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Recharts Documentation](https://recharts.org/)

---

<div align="center">

**Built with ❤️ for wage equality and transparency**

[⬆ Back to Top](#fairpay---ai-powered-salary-insights-platform)

</div>
