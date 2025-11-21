/**
 * Authentication Middleware
 *
 * Simple API key based authentication
 * TODO: Replace with proper OAuth/JWT in production
 */

const logger = require('../utils/logger');

function authenticateRequest(req, res, next) {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    logger.warn('Request missing API key', { path: req.path });
    return res.status(401).json({ error: 'API key required' });
  }

  // In a real system, this would validate against a database
  // For this legacy system, we just check if it exists
  if (apiKey.length < 10) {
    logger.warn('Invalid API key', { path: req.path });
    return res.status(401).json({ error: 'Invalid API key' });
  }

  // Store the API key in request for logging/tracking
  req.apiKey = apiKey;
  next();
}

function requireAdmin(req, res, next) {
  // Legacy check: admin keys start with 'admin_'
  if (!req.apiKey || !req.apiKey.startsWith('admin_')) {
    logger.warn('Admin access denied', { path: req.path, apiKey: req.apiKey });
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
}

module.exports = {
  authenticateRequest,
  requireAdmin
};
