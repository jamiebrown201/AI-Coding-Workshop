const path = require('path');
const fs = require('fs');

const fixturePath = path.join(__dirname, '..', '..', 'fixtures', 'mock-metrics.json');
const baseMetrics = JSON.parse(fs.readFileSync(fixturePath, 'utf-8'));

function jitter(value, delta = 0.05) {
  const noise = 1 + (Math.random() * 2 - 1) * delta;
  return Math.max(value * noise, 0);
}

class MetricsService {
  getSnapshot() {
    return {
      generatedAt: new Date().toISOString(),
      articleViewsLastFiveMinutes: Math.floor(jitter(4200, 0.15)),
      activeReaders: Math.floor(jitter(1800, 0.2)),
      conversionRate: Number(jitter(0.034, 0.1).toFixed(3)),
      avgEngagementSeconds: Math.floor(jitter(210, 0.1)),
      articles: baseMetrics.articles.map((article) => ({
        ...article,
        views: Math.floor(jitter(article.views, 0.2))
      })),
      geo: baseMetrics.geo.map((region) => ({
        ...region,
        percentage: Number(jitter(region.percentage, 0.05).toFixed(2))
      }))
    };
  }
}

module.exports = new MetricsService();
