const logger = require('../utils/logger');

class NotificationService {
  async sendEmail(to, template, data) {
    await new Promise((resolve) => setTimeout(resolve, 20));
    logger.info('Notification dispatched', { to, template, data });
  }
}

module.exports = new NotificationService();
