// TODO: Extract retry delays to config file
// TODO: Add metrics for retry success rate
const PaymentService = require('./PaymentService');
const NotificationService = require('./NotificationService');
const { state, persist } = require('./dataStore');
const logger = require('../utils/logger');

class PaymentRetryService {
  constructor() {
    this.MAX_RETRIES = 3;
    this.RETRY_DELAYS = [24, 72, 168]; // hours: 1 day, 3 days, 7 days
  }

  async retryFailedPayment(subscriptionId) {
    const subscription = state.subscriptions.find(s => s.id === subscriptionId);
    if (!subscription) {
      throw new Error('Subscription not found');
    }

    const retryAttempts = subscription.retryAttempts || 0;

    if (retryAttempts >= this.MAX_RETRIES) {
      logger.warn('Max retry attempts reached', { subscriptionId });
      subscription.status = 'canceled';
      subscription.cancellationReason = 'payment_failure';
      persist();

      // Notify user - Sarah added this Nov 2023
      const user = state.users.find(u => u.id === subscription.userId);
      if (user) {
        // FIXME: Should we also send SMS? Marketing wants this.
        await NotificationService.sendEmail(user.email, 'subscriptionCanceled', {
          reason: 'Payment failed after multiple attempts'
        });
      }

      return { success: false, reason: 'max_retries_exceeded' };
    }

    try {
      // Calculate amount based on plan
      const planPrices = { basic: 15, premium: 25, family: 35 };
      const amount = planPrices[subscription.plan] || 20;

      // Attempt payment
      const payment = await PaymentService.processPayment(subscription, amount);

      if (payment.status === 'succeeded') {
        subscription.retryAttempts = 0;
        subscription.status = 'active';
        subscription.lastPaymentDate = new Date().toISOString();
        persist();

        logger.info('Retry payment succeeded', { subscriptionId, attempt: retryAttempts + 1 });
        return { success: true, payment };
      } else {
        // Payment failed, schedule next retry
        subscription.retryAttempts = retryAttempts + 1;
        subscription.nextRetryDate = this.calculateNextRetryDate(subscription.retryAttempts);
        persist();

        logger.warn('Retry payment failed', {
          subscriptionId,
          attempt: subscription.retryAttempts,
          nextRetry: subscription.nextRetryDate
        });

        return { success: false, reason: 'payment_failed', nextRetry: subscription.nextRetryDate };
      }
    } catch (error) {
      logger.error('Error during payment retry', { subscriptionId, error: error.message });
      throw error;
    }
  }

  calculateNextRetryDate(attemptNumber) {
    const hoursToAdd = this.RETRY_DELAYS[attemptNumber - 1] || this.RETRY_DELAYS[this.RETRY_DELAYS.length - 1];
    const nextDate = new Date(Date.now() + hoursToAdd * 60 * 60 * 1000);
    return nextDate.toISOString();
  }

  getSubscriptionsDueForRetry() {
    const now = new Date();
    return state.subscriptions.filter(subscription => {
      if (subscription.status !== 'past_due') return false;
      if (!subscription.nextRetryDate) return false;

      const retryDate = new Date(subscription.nextRetryDate);
      return retryDate <= now;
    });
  }
}

module.exports = new PaymentRetryService();
