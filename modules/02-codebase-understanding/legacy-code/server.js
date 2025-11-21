/**
 * Subscription Management Server
 *
 * Entry point for the subscription service
 * Originally created: 2019
 * Last major update: 2022
 * Current maintainer: ¯\_(ツ)_/¯
 */

const express = require('express');
const cors = require('cors');
const { connectDatabase } = require('./config/database');
const { initializePaymentProviders } = require('./config/payments');
const logger = require('./utils/logger');

// Route imports
const subscriptionRoutes = require('./routes/subscriptions');
const webhookRoutes = require('./routes/webhooks');
const userRoutes = require('./routes/users');

// Job scheduler
const cron = require('node-cron');
const renewalReminderJob = require('./jobs/renewalReminder');
const expiredSubscriptionsJob = require('./jobs/expiredSubscriptions');
const paymentRetryJob = require('./jobs/paymentRetry');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend
app.use(express.static('public'));

// Request logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`, {
    ip: req.ip,
    userAgent: req.get('user-agent')
  });
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/webhooks', webhookRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('Unhandled error:', err);

  // Don't leak error details in production
  if (process.env.NODE_ENV === 'production') {
    res.status(500).json({ error: 'Internal server error' });
  } else {
    res.status(500).json({
      error: err.message,
      stack: err.stack
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Initialize and start server
async function startServer() {
  try {
    // Connect to database
    await connectDatabase();
    logger.info('Database connected');

    // Initialize payment providers
    await initializePaymentProviders();
    logger.info('Payment providers initialized');

    // Schedule background jobs
    // Run renewal reminders every day at 9 AM
    cron.schedule('0 9 * * *', renewalReminderJob);
    logger.info('Scheduled: Renewal reminder job (9 AM daily)');

    // Run expired subscriptions cleanup every day at midnight
    cron.schedule('0 0 * * *', expiredSubscriptionsJob);
    logger.info('Scheduled: Expired subscriptions job (midnight daily)');

    // Run payment retries every 6 hours
    cron.schedule('0 */6 * * *', paymentRetryJob);
    logger.info('Scheduled: Payment retry job (every 6 hours)');

    // Start the server
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
      logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  process.exit(0);
});

startServer();

module.exports = app;
