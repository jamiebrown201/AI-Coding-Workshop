const { v4: uuid } = require('uuid');
const { state, persist } = require('./dataStore');
const { requireFields, assertEnum } = require('../utils/validators');
const logger = require('../utils/logger');

const PLAN_TYPES = ['basic', 'premium', 'family'];
const STATUSES = ['active', 'past_due', 'canceled'];

class SubscriptionService {
  getAll(filters = {}) {
    return state.subscriptions.filter((subscription) => {
      if (filters.status && subscription.status !== filters.status) {
        return false;
      }
      if (filters.plan && subscription.plan !== filters.plan) {
        return false;
      }
      if (filters.userId && subscription.userId !== filters.userId) {
        return false;
      }
      return true;
    });
  }

  getById(id) {
    return state.subscriptions.find((subscription) => subscription.id === id);
  }

  create(payload) {
    requireFields(payload, ['userId', 'plan', 'paymentProvider']);
    assertEnum(payload.plan, PLAN_TYPES, 'plan');

    const subscription = {
      id: uuid(),
      userId: payload.userId,
      plan: payload.plan,
      status: 'active',
      startedAt: new Date().toISOString(),
      expiresAt: payload.expiresAt || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      paymentProvider: payload.paymentProvider,
      lastPaymentStatus: 'pending'
    };

    state.subscriptions.push(subscription);
    persist();
    logger.info('Subscription created', { subscriptionId: subscription.id });
    return subscription;
  }

  markPastDue(subscriptionId) {
    const subscription = this.getById(subscriptionId);
    if (!subscription) {
      throw new Error('Subscription not found');
    }
    subscription.status = 'past_due';
    persist();
    logger.warn('Subscription marked past due', { subscriptionId });
    return subscription;
  }

  cancel(subscriptionId) {
    const subscription = this.getById(subscriptionId);
    if (!subscription) {
      throw new Error('Subscription not found');
    }
    subscription.status = 'canceled';
    subscription.expiresAt = new Date().toISOString();
    persist();
    logger.info('Subscription canceled', { subscriptionId });
    return subscription;
  }
}

module.exports = new SubscriptionService();
