const express = require('express');
const SubscriptionService = require('../services/SubscriptionService');
const PaymentService = require('../services/PaymentService');
const EntitlementService = require('../services/EntitlementService');

const router = express.Router();

router.get('/', (req, res) => {
  const { status, plan, userId } = req.query;
  const subscriptions = SubscriptionService.getAll({ status, plan, userId });
  res.json({ data: subscriptions });
});

router.get('/:id', (req, res) => {
  const subscription = SubscriptionService.getById(req.params.id);
  if (!subscription) {
    return res.status(404).json({ error: 'Subscription not found' });
  }

  const entitlements = EntitlementService.getEntitlements(subscription.plan);
  return res.json({ data: { ...subscription, entitlements } });
});

router.get('/:id/payments', (req, res) => {
  const subscription = SubscriptionService.getById(req.params.id);
  if (!subscription) {
    return res.status(404).json({ error: 'Subscription not found' });
  }
  const history = PaymentService.getPaymentHistory(subscription.id);
  return res.json({ data: history });
});

router.post('/', (req, res, next) => {
  try {
    const subscription = SubscriptionService.create(req.body);
    res.status(201).json({ data: subscription });
  } catch (error) {
    next(error);
  }
});

router.post('/:id/cancel', (req, res, next) => {
  try {
    const subscription = SubscriptionService.cancel(req.params.id);
    res.json({ data: subscription });
  } catch (error) {
    next(error);
  }
});

router.post('/:id/payments', async (req, res, next) => {
  try {
    const subscription = SubscriptionService.getById(req.params.id);
    if (!subscription) {
      return res.status(404).json({ error: 'Subscription not found' });
    }
    // Why is default 20? Plan prices are different. Need to investigate.
    const payment = await PaymentService.processPayment(subscription, req.body.amount || 20);
    res.status(201).json({ data: payment });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
