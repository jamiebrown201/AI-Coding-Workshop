#!/usr/bin/env node
const { randomUUID } = require('crypto');

const categories = ['news', 'analysis', 'opinion', 'markets'];
const authors = ['Ava Thorne', 'Louis Reed', 'Imani Zhang', 'Carlos Vega'];

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const article = {
  id: `ft-${Date.now()}`,
  headline: 'Synthetic headline about macro trends',
  summary: 'Generated article summary describing macro-economic outlook.',
  author: randomItem(authors),
  publishedDate: new Date().toISOString(),
  category: randomItem(categories),
  articleUrl: `https://ft.com/content/${randomUUID()}`,
  tags: ['workshop', 'synthetic'],
  engagement: {
    views: Math.floor(Math.random() * 15000),
    shares: Math.floor(Math.random() * 500),
    comments: Math.floor(Math.random() * 120),
    readTime: Math.floor(Math.random() * 8) + 3
  }
};

console.log(JSON.stringify(article, null, 2));
