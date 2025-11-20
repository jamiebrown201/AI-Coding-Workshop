const SubscriptionService = require('../services/SubscriptionService');
const logger = require('../utils/logger');

module.exports = async function expiredSubscriptionsJob() {
  const expired = SubscriptionService.getAll().filter((subscription) => {
    const expiresAt = new Date(subscription.expiresAt);
    return expiresAt.getTime() < Date.now() && subscription.status === 'active';
  });

  expired.forEach((subscription) => {
    SubscriptionService.markPastDue(subscription.id);
  });

  logger.info('Expired subscription job completed', { updated: expired.length });
};
