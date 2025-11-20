const express = require('express');
const SubscriptionService = require('../services/SubscriptionService');
const logger = require('../utils/logger');

const router = express.Router();

router.post('/stripe', (req, res) => {
  const { subscriptionId, status } = req.body;
  const subscription = SubscriptionService.getById(subscriptionId);
  if (!subscription) {
    return res.status(404).json({ error: 'Subscription not found' });
  }

  subscription.lastPaymentStatus = status;
  if (status === 'failed') {
    SubscriptionService.markPastDue(subscriptionId);
  }

  logger.info('Stripe webhook processed', { subscriptionId, status });
  res.json({ received: true });
});

router.post('/paypal', (req, res) => {
  const { subscriptionId, dispute } = req.body;
  const subscription = SubscriptionService.getById(subscriptionId);
  if (!subscription) {
    return res.status(404).json({ error: 'Subscription not found' });
  }
  if (dispute) {
    SubscriptionService.markPastDue(subscriptionId);
  }
  logger.warn('PayPal webhook flagged', { subscriptionId, dispute });
  res.json({ received: true });
});

router.post('/apple', (req, res) => {
  logger.info('Apple webhook received', req.body);
  res.json({ received: true });
});

module.exports = router;
