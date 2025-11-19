# Workshop Data & Fixtures

**Mock data for all workshop exercises**

## ⚠️ Important: This is All Fake Data

All data in this directory is completely fictional and generated for workshop purposes only. Never use real customer data, PII, or production data in workshop exercises.

## Directory Structure

```
data/
├── articles/           # FT article samples
├── users/             # Fake user profiles
├── analytics/         # Engagement metrics
├── comments/          # Comment system data
├── subscriptions/     # Subscription data
└── trending/          # Trending topics data
```

## Usage

### In Exercises

Each module references specific data files:

**Module 1:** `articles/sample-articles.json`
**Module 2:** `subscriptions/`, `users/`
**Module 3:** `analytics/real-time-metrics.json`
**Module 4:** `comments/vulnerable-data.json`
**Module 6:** `trending/engagement-data.json`

### Loading Data in Code

```javascript
// Node.js
const articles = require('../data/articles/sample-articles.json');

// ES Modules
import articles from '../data/articles/sample-articles.json' assert { type: 'json' };

// Fetch in browser
const response = await fetch('/data/articles/sample-articles.json');
const articles = await response.json();
```

## Data Generation

Fresh data can be generated using:

```bash
npm run generate-fixtures
```

This creates new randomized data while maintaining schema compatibility.

## Data Dictionary

### Articles

```typescript
interface Article {
  id: string;
  headline: string;
  summary: string;
  author: string;
  publishedDate: string; // ISO 8601
  category: 'markets' | 'technology' | 'opinion' | 'news' | 'climate' | 'business';
  imageUrl?: string;
  imageAlt?: string;
  articleUrl: string;
  tags: string[];
  views: number;
  engagement: {
    views: number;
    shares: number;
    comments: number;
    readTime: number; // minutes
  };
}
```

### Users

```typescript
interface User {
  id: string;
  email: string;
  name: string;
  subscriptionTier: 'free' | 'digital' | 'premium';
  createdAt: string; // ISO 8601
  region: 'UK' | 'US' | 'EU' | 'APAC';
}
```

### Analytics

```typescript
interface AnalyticsEvent {
  timestamp: string; // ISO 8601
  articleId: string;
  userId: string;
  eventType: 'view' | 'share' | 'comment';
  region: string;
  device: 'mobile' | 'tablet' | 'desktop';
}
```

### Comments

```typescript
interface Comment {
  id: string;
  articleId: string;
  userId: string;
  text: string;
  createdAt: string; // ISO 8601
  flagged: boolean;
}
```

## Privacy & Security

- ✅ All data is synthetic/fake
- ✅ No real email addresses
- ✅ No real names
- ✅ No actual user data
- ✅ Safe for public repositories

**Never commit:**
- ❌ Real customer data
- ❌ Production database dumps
- ❌ API keys or secrets
- ❌ PII of any kind

## Updating Data

To add new data:

1. Follow existing schema patterns
2. Ensure data is obviously fake
3. Update this README with schema changes
4. Run tests to verify compatibility

## Questions?

Check the main workshop README or open an issue.
