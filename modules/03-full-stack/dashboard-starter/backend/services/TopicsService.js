const path = require('path');
const fs = require('fs');

const fixturePath = path.join(__dirname, '..', '..', 'fixtures', 'mock-metrics.json');
const baseMetrics = JSON.parse(fs.readFileSync(fixturePath, 'utf-8'));

class TopicsService {
  constructor() {
    this.cache = baseMetrics.topics;
  }

  getTrending(limit = 5) {
    return this.cache
      .map((topic) => ({
        ...topic,
        mentions: Math.floor(topic.mentions * (1 + (Math.random() - 0.5) * 0.2))
      }))
      .sort((a, b) => b.mentions - a.mentions)
      .slice(0, limit);
  }
}

module.exports = new TopicsService();
