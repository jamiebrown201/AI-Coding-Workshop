#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const firstNames = ['Ava', 'Noah', 'Maya', 'Leo', 'Imani', 'Theo', 'Mina', 'Jonah'];
const lastNames = ['Patel', 'Clarke', 'Okafor', 'Hernández', 'Ito', 'Velasquez', 'Singh', 'Baker'];
const categories = ['news', 'analysis', 'markets', 'opinion', 'technology'];
const tiers = ['basic', 'digital', 'premium'];
const regions = ['UK', 'US', 'EU', 'APAC'];
const paymentProviders = ['stripe', 'paypal', 'apple'];

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function writeJSON(relativePath, payload) {
  const absolutePath = path.join(root, relativePath);
  ensureDir(absolutePath);
  fs.writeFileSync(absolutePath, JSON.stringify(payload, null, 2));
  console.log(`📝 Wrote ${relativePath}`);
}

function createArticles(count = 6) {
  return Array.from({ length: count }).map((_, index) => {
    const id = `ft-2024${String(index + 1).padStart(3, '0')}`;
    return {
      id,
      headline: `Synthetic headline ${index + 1}`,
      summary: 'Generated story about AI adoption and newsroom workflows.',
      author: `${randomItem(firstNames)} ${randomItem(lastNames)}`,
      publishedDate: new Date(Date.now() - index * 3600 * 1000).toISOString(),
      category: randomItem(categories),
      imageUrl: `https://picsum.photos/seed/${id}/600/400`,
      imageAlt: 'Illustrative placeholder image',
      articleUrl: `https://ft.com/content/${id}`,
      tags: ['workshop', 'synthetic'],
      views: Math.floor(Math.random() * 15000) + 1500,
      engagement: {
        views: Math.floor(Math.random() * 15000) + 1500,
        shares: Math.floor(Math.random() * 600),
        comments: Math.floor(Math.random() * 180),
        readTime: 4 + Math.floor(Math.random() * 6)
      }
    };
  });
}

function createUsers(count = 5) {
  return Array.from({ length: count }).map((_, index) => {
    const first = randomItem(firstNames);
    const last = randomItem(lastNames);
    const username = `${first}.${last}`.toLowerCase().replace(/[^a-z.]/g, '');
    return {
      id: `user_${String(1000 + index)}`,
      email: `${username}@example.com`,
      name: `${first} ${last}`,
      subscriptionTier: randomItem(tiers),
      region: randomItem(regions),
      createdAt: new Date(2020, index, 12).toISOString()
    };
  });
}

function createSubscriptions(users) {
  return users.map((user, index) => {
    const started = new Date(Date.now() - (index + 1) * 30 * 24 * 3600 * 1000);
    return {
      id: `sub_${user.id}`,
      userId: user.id,
      plan: user.subscriptionTier,
      status: Math.random() > 0.85 ? 'past_due' : 'active',
      startedAt: started.toISOString(),
      expiresAt: new Date(started.getTime() + 90 * 24 * 3600 * 1000).toISOString(),
      paymentProvider: randomItem(paymentProviders),
      lastPaymentStatus: 'succeeded'
    };
  });
}

function createPayments(subscriptions) {
  return subscriptions.map((subscription) => ({
    id: `pay_${subscription.id}`,
    subscriptionId: subscription.id,
    provider: subscription.paymentProvider,
    amount: subscription.plan === 'premium' ? 45 : subscription.plan === 'digital' ? 28 : 12,
    currency: 'GBP',
    status: subscription.status === 'past_due' ? 'failed' : 'succeeded',
    processedAt: new Date().toISOString()
  }));
}

function createAnalytics(articles, users) {
  const now = Date.now();
  const pageViews = articles.slice(0, 3).map((article, idx) => ({
    timestamp: new Date(now - idx * 5 * 60 * 1000).toISOString(),
    articleId: article.id,
    views: Math.floor(Math.random() * 700) + 200
  }));

  const timeSeries = {
    series: Array.from({ length: 6 }).map((_, idx) => ({
      timestamp: new Date(now - idx * 5 * 60 * 1000).toISOString(),
      activeReaders: 1400 + Math.floor(Math.random() * 800),
      conversionRate: Number((0.02 + Math.random() * 0.02).toFixed(3))
    }))
  };

  const trendingTopics = users.map((user) => ({
    topic: `${user.region} desk`,
    mentions: Math.floor(Math.random() * 400) + 120,
    sentiment: Number((0.5 + Math.random() * 0.4).toFixed(2))
  }));

  return { pageViews, timeSeries, trendingTopics };
}

function createComments(articles, users) {
  return users.slice(0, 3).map((user, idx) => ({
    id: `comment-${idx + 1}`,
    articleId: articles[idx % articles.length].id,
    userId: user.id,
    text: idx === 1 ? 'I have questions about this data.\n<script>alert(1)</script>' : 'Great insight, thanks for breaking it down.',
    createdAt: new Date(Date.now() - idx * 60 * 1000).toISOString(),
    flagged: idx === 1
  }));
}

function createModerationFlags(comments) {
  return comments
    .filter((comment) => comment.flagged)
    .map((comment, idx) => ({
      id: `flag-${idx + 1}`,
      commentId: comment.id,
      reason: 'Suspicious markup detected',
      status: 'review_pending'
    }));
}

function createSpamExamples() {
  return [
    { text: 'Earn $$$ fast at spam-site.biz', classification: 'spam', pattern: 'external link' },
    { text: 'Download this malware attachment', classification: 'malware', pattern: 'attachment' }
  ];
}

function createSubscriptionSummary() {
  return tiers.map((tier, idx) => ({
    tier,
    monthlyPrice: tier === 'premium' ? 45 : tier === 'digital' ? 27 : 12,
    features: tier === 'premium'
      ? ['unlimited articles', 'workspace tools', 'exclusive events']
      : tier === 'digital'
        ? ['unlimited articles', 'podcasts', 'markets data']
        : ['limited articles', 'daily newsletter'],
    activeSubscribers: 25000 - idx * 6000
  }));
}

function createTrendingEngagement(articles) {
  return {
    topics: [
      { topic: 'AI governance', score: 0.78, momentum: 'rising' },
      { topic: 'Energy security', score: 0.69, momentum: 'steady' }
    ],
    articles: articles.slice(0, 3).map((article) => ({
      articleId: article.id,
      engagementScore: Math.floor(Math.random() * 80) + 20
    }))
  };
}

function main() {
  const articles = createArticles();
  const users = createUsers();
  const subscriptions = createSubscriptions(users);
  const payments = createPayments(subscriptions);
  const analytics = createAnalytics(articles, users);
  const comments = createComments(articles, users);
  const flags = createModerationFlags(comments);
  const subscriptionSummary = createSubscriptionSummary();
  const trendingEngagement = createTrendingEngagement(articles);

  writeJSON('data/articles/articles.json', articles);
  writeJSON('data/articles/sample-articles.json', articles.slice(0, 3));
  writeJSON('data/users/users.json', users);
  writeJSON('data/analytics/page-views.json', analytics.pageViews);
  writeJSON('data/analytics/time-series.json', analytics.timeSeries);
  writeJSON('data/analytics/trending-topics.json', analytics.trendingTopics);
  writeJSON('data/comments/comments.json', comments);
  writeJSON('data/comments/moderation-flags.json', flags);
  writeJSON('data/comments/spam-examples.json', createSpamExamples());
  writeJSON('data/subscriptions/subscription-summary.json', subscriptionSummary);
  writeJSON('data/subscriptions/entitlements.json', {
    basic: ['article_preview', 'mobile_app'],
    digital: ['article_preview', 'mobile_app', 'markets_dashboard', 'podcasts'],
    premium: ['article_preview', 'mobile_app', 'markets_dashboard', 'podcasts', 'alpha_research']
  });
  writeJSON('data/trending/engagement-data.json', trendingEngagement);

  writeJSON('modules/02-codebase-understanding/legacy-code/fixtures/users.json', users);
  writeJSON('modules/02-codebase-understanding/legacy-code/fixtures/subscriptions.json', subscriptions);
  writeJSON('modules/02-codebase-understanding/legacy-code/fixtures/payments.json', payments);

  console.log('✅ Synthetic fixtures regenerated.');
}

main();
