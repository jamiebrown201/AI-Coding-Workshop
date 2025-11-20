const express = require('express');
const MetricsService = require('../services/MetricsService');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ data: MetricsService.getSnapshot() });
});

router.get('/live', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();

  const pushUpdate = () => {
    res.write(`data: ${JSON.stringify(MetricsService.getSnapshot())}\n\n`);
  };

  const interval = setInterval(pushUpdate, 5000);
  pushUpdate();

  req.on('close', () => {
    clearInterval(interval);
  });
});

module.exports = router;
