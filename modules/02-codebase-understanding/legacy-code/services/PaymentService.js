const { v4: uuid } = require('uuid');
const { state, persist } = require('./dataStore');
const { getPaymentProvider } = require('../config/payments');
const logger = require('../utils/logger');

class PaymentService {
  async processPayment(subscription, amount) {
    const provider = getPaymentProvider(subscription.paymentProvider);
    if (!provider) {
      throw new Error(`Payment provider ${subscription.paymentProvider} not configured`);
    }

    const transaction = await provider.processPayment({ subscriptionId: subscription.id, amount });
    const paymentRecord = {
      id: uuid(),
      subscriptionId: subscription.id,
      provider: subscription.paymentProvider,
      amount,
      currency: 'GBP',
      status: transaction.status,
      processedAt: new Date().toISOString(),
      transactionId: transaction.transactionId
    };

    state.payments.push(paymentRecord);
    subscription.lastPaymentStatus = transaction.status;
    persist();

    logger.info('Payment processed', {
      subscriptionId: subscription.id,
      provider: subscription.paymentProvider,
      status: transaction.status
    });

    return paymentRecord;
  }

  getPaymentHistory(subscriptionId) {
    return state.payments.filter((payment) => payment.subscriptionId === subscriptionId);
  }
}

module.exports = new PaymentService();
