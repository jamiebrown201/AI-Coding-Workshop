class Subscription {
  constructor({
    id,
    userId,
    plan,
    status,
    startedAt,
    expiresAt,
    paymentProvider,
    lastPaymentStatus
  }) {
    this.id = id;
    this.userId = userId;
    this.plan = plan;
    this.status = status;
    this.startedAt = startedAt;
    this.expiresAt = expiresAt;
    this.paymentProvider = paymentProvider;
    this.lastPaymentStatus = lastPaymentStatus;
  }
}

module.exports = Subscription;
