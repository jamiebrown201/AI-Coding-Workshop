const express = require('express');
const { state } = require('../services/dataStore');
const SubscriptionService = require('../services/SubscriptionService');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ data: state.users });
});

router.get('/:id', (req, res) => {
  const user = state.users.find((item) => item.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const subscriptions = SubscriptionService.getAll({ userId: user.id });
  return res.json({ data: { ...user, subscriptions } });
});

module.exports = router;
