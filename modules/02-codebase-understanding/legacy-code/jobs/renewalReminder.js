const SubscriptionService = require('../services/SubscriptionService');
const NotificationService = require('../services/NotificationService');
const { state } = require('../services/dataStore');

module.exports = async function renewalReminderJob() {
  const expiringSoon = SubscriptionService.getAll().filter((subscription) => {
    const expiresAt = new Date(subscription.expiresAt);
    const diffDays = (expiresAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
    return diffDays > 0 && diffDays < 7 && subscription.status === 'active';
  });

  for (const subscription of expiringSoon) {
    const user = state.users.find((item) => item.id === subscription.userId);
    if (user) {
      await NotificationService.sendEmail(user.email, 'renewalReminder', {
        plan: subscription.plan,
        expiresAt: subscription.expiresAt
      });
    }
  }
};
