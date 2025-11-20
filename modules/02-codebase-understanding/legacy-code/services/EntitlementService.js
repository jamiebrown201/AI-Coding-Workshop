const PLAN_ENTITLEMENTS = {
  basic: ['article_preview', 'daily_digest'],
  premium: ['article_preview', 'daily_digest', 'markets_data', 'podcasts'],
  family: ['article_preview', 'daily_digest', 'markets_data', 'podcasts', 'shared_accounts']
};

class EntitlementService {
  getEntitlements(plan) {
    return PLAN_ENTITLEMENTS[plan] || [];
  }

  hasEntitlement(plan, entitlement) {
    return this.getEntitlements(plan).includes(entitlement);
  }
}

module.exports = new EntitlementService();
