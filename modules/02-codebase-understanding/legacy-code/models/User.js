class User {
  constructor({ id, name, email, subscriptionTier, region, createdAt }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.subscriptionTier = subscriptionTier;
    this.region = region;
    this.createdAt = createdAt;
  }
}

module.exports = User;
