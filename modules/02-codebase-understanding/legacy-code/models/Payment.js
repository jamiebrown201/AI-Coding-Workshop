class Payment {
  constructor({ id, subscriptionId, provider, amount, currency, status, processedAt }) {
    this.id = id;
    this.subscriptionId = subscriptionId;
    this.provider = provider;
    this.amount = amount;
    this.currency = currency;
    this.status = status;
    this.processedAt = processedAt;
  }
}

module.exports = Payment;
