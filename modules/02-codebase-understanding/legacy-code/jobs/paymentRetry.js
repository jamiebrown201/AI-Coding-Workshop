/**
 * Payment Retry Job
 *
 * Runs periodically to retry failed payments
 * Scheduled to run every 6 hours
 */

const PaymentRetryService = require('../services/PaymentRetryService');
const logger = require('../utils/logger');

module.exports = async function paymentRetryJob() {
  logger.info('Starting payment retry job');

  const subscriptionsDue = PaymentRetryService.getSubscriptionsDueForRetry();

  logger.info(`Found ${subscriptionsDue.length} subscriptions due for retry`);

  for (const subscription of subscriptionsDue) {
    try {
      const result = await PaymentRetryService.retryFailedPayment(subscription.id);
      logger.info('Retry attempt completed', {
        subscriptionId: subscription.id,
        success: result.success
      });
    } catch (error) {
      logger.error('Failed to retry payment', {
        subscriptionId: subscription.id,
        error: error.message
      });
    }
  }

  logger.info('Payment retry job completed');
};
