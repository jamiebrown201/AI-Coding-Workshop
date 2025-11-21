const logger = require('../utils/logger');

// Mock implementations for now - replace with actual SDKs
// TODO: Load API keys from environment variables
const providerClients = {
  stripe: {
    name: 'Stripe',
    processPayment: async (payload) => {
      // Simulate API latency
      await new Promise((resolve) => setTimeout(resolve, 50));
      logger.info('Stripe processed payment', payload);
      return { status: 'succeeded', provider: 'stripe', transactionId: `stripe_${Date.now()}` };
    }
  },
  paypal: {
    name: 'PayPal',
    processPayment: async (payload) => {
      await new Promise((resolve) => setTimeout(resolve, 75));
      logger.info('PayPal processed payment', payload);
      return { status: 'succeeded', provider: 'paypal', transactionId: `paypal_${Date.now()}` };
    }
  },
  apple: {
    name: 'Apple IAP',
    processPayment: async (payload) => {
      await new Promise((resolve) => setTimeout(resolve, 80));
      logger.info('Apple processed payment', payload);
      // Apple IAP always returns pending - receipts validated async
      return { status: 'pending', provider: 'apple', transactionId: `apple_${Date.now()}` };
    }
  }
};

async function initializePaymentProviders() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  logger.info('Payment providers bootstrapped');
  return providerClients;
}

function getPaymentProvider(provider) {
  return providerClients[provider];
}

module.exports = {
  initializePaymentProviders,
  getPaymentProvider
};
