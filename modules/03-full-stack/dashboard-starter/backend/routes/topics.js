const express = require('express');
const TopicsService = require('../services/TopicsService');

const router = express.Router();

router.get('/', (req, res) => {
  const limit = Number(req.query.limit) || 5;
  const topics = TopicsService.getTrending(limit);
  res.json({ data: topics });
});

module.exports = router;
