/**
 * Comment System for FT Articles
 *
 * This PR adds a comment system for articles. Tested locally and works great!
 * Ready to merge! 🚀
 *
 * 🐛 WARNING: This code contains MULTIPLE security vulnerabilities
 * Your job: Find them all!
 */

const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get comments for an article
router.get('/articles/:articleId/comments', async (req, res) => {
  try {
    const articleId = req.params.articleId;

    // 🐛 VULNERABILITY #1: SQL Injection
    // String concatenation in SQL query allows injection attacks
    const query = `SELECT * FROM comments WHERE article_id = ${articleId} ORDER BY created_at DESC`;
    const comments = await db.query(query);

    res.json({ comments });
  } catch (error) {
    // 🐛 VULNERABILITY #2: Information Leakage
    // Sending full error details to client exposes internal structure
    res.status(500).json({
      error: error.message,
      stack: error.stack,
      query: error.sql // Leaking the actual SQL query!
    });
  }
});

// Create a new comment
router.post('/articles/:articleId/comments', async (req, res) => {
  const { text, author } = req.body;
  const articleId = req.params.articleId;

  // 🐛 VULNERABILITY #3: No Authentication/Authorization
  // Anyone can post comments without being logged in
  // No verification that the user is who they claim to be

  // 🐛 VULNERABILITY #4: No Input Validation
  // Not checking if text is too long, contains SQL, or is empty
  // Not validating articleId is a valid number

  // 🐛 VULNERABILITY #5: SQL Injection (again!)
  const query = `INSERT INTO comments (article_id, author, text, created_at)
                 VALUES (${articleId}, '${author}', '${text}', NOW())`;

  try {
    const result = await db.query(query);

    res.status(201).json({
      message: 'Comment created',
      commentId: result.insertId
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a comment
router.put('/comments/:commentId', async (req, res) => {
  const { text } = req.body;
  const commentId = req.params.commentId;

  // 🐛 VULNERABILITY #6: Insecure Direct Object Reference
  // Any user can edit any comment - no ownership check!
  // Should verify the logged-in user owns this comment

  const query = `UPDATE comments SET text = '${text}' WHERE id = ${commentId}`;

  try {
    await db.query(query);
    res.json({ message: 'Comment updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a comment
router.delete('/comments/:commentId', async (req, res) => {
  const commentId = req.params.commentId;

  // 🐛 VULNERABILITY #7: No Authorization Check
  // Anyone can delete any comment!
  // Should check if user is admin or comment owner

  // 🐛 VULNERABILITY #8: SQL Injection (still!)
  const query = `DELETE FROM comments WHERE id = ${commentId}`;

  try {
    await db.query(query);
    res.json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search comments
router.get('/comments/search', async (req, res) => {
  const { q } = req.query;

  // 🐛 VULNERABILITY #9: SQL Injection via LIKE
  // User input directly in LIKE clause allows injection
  const query = `SELECT * FROM comments WHERE text LIKE '%${q}%'`;

  try {
    const results = await db.query(query);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user's comment history
router.get('/users/:userId/comments', async (req, res) => {
  const userId = req.params.userId;

  // 🐛 VULNERABILITY #10: No Rate Limiting
  // This endpoint could be used to scrape all user comments
  // No throttling or rate limiting implemented

  // 🐛 VULNERABILITY #11: Privacy Violation
  // Anyone can see anyone else's full comment history
  // Should require authentication and verify user is requesting their own data

  const query = `SELECT c.*, a.title as article_title
                 FROM comments c
                 JOIN articles a ON c.article_id = a.id
                 WHERE c.user_id = ${userId}`;

  try {
    const comments = await db.query(query);

    // 🐛 VULNERABILITY #12: Information Leakage
    // Exposing internal database structure and field names
    res.json({
      comments,
      _debug: {
        query: query,
        executionTime: '25ms',
        rowCount: comments.length
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Flag a comment as inappropriate
router.post('/comments/:commentId/flag', async (req, res) => {
  const commentId = req.params.commentId;
  const { reason } = req.body;

  // 🐛 VULNERABILITY #13: No Input Sanitization
  // reason could contain malicious content
  // No validation of commentId

  // 🐛 VULNERABILITY #14: No Rate Limiting
  // Could be abused to spam flag reports

  const query = `INSERT INTO comment_flags (comment_id, reason, created_at)
                 VALUES (${commentId}, '${reason}', NOW())`;

  try {
    await db.query(query);
    res.json({ message: 'Comment flagged for review' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin endpoint to get flagged comments
router.get('/admin/flagged-comments', async (req, res) => {
  // 🐛 VULNERABILITY #15: No Admin Authentication
  // This endpoint has no authentication at all!
  // Anyone can access admin functionality

  const query = `SELECT c.*, f.reason, f.created_at as flagged_at
                 FROM comments c
                 JOIN comment_flags f ON c.id = f.comment_id
                 ORDER BY f.created_at DESC`;

  try {
    const flaggedComments = await db.query(query);
    res.json({ flaggedComments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Export user data (GDPR compliance)
router.get('/users/:userId/export', async (req, res) => {
  const userId = req.params.userId;

  // 🐛 VULNERABILITY #16: Path Traversal
  // userId could be "../../../etc/passwd"
  // No validation that userId is actually a number

  // 🐛 VULNERABILITY #17: No Authentication
  // Anyone can export anyone's data!

  try {
    const userData = await db.query(
      `SELECT * FROM users WHERE id = ${userId}`
    );
    const userComments = await db.query(
      `SELECT * FROM comments WHERE user_id = ${userId}`
    );

    // Generate export file
    const exportData = {
      user: userData[0],
      comments: userComments,
      // 🐛 VULNERABILITY #18: Sensitive Data Exposure
      // Exposing hashed password and internal IDs
      password_hash: userData[0].password,
      internal_user_id: userData[0].internal_id,
      ip_addresses: userData[0].login_ips, // Privacy violation!
    };

    res.json(exportData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

/**
 * SUMMARY OF VULNERABILITIES (18 total!)
 *
 * Critical (10 points each):
 * 1. SQL Injection - Multiple instances (#1, #5, #8, #9)
 * 2. No Authentication on write operations (#3)
 * 3. Insecure Direct Object Reference (#6)
 * 4. No Authorization checks (#7, #11, #15)
 * 5. Path Traversal (#16)
 * 6. Sensitive Data Exposure (#18)
 *
 * High (5 points each):
 * 7. Information Leakage in errors (#2, #12)
 * 8. No Rate Limiting (#10, #14)
 * 9. Privacy Violations (#11, #17)
 *
 * Medium (2 points each):
 * 10. No Input Validation (#4, #13)
 *
 * Low (1 point each):
 * 11. Debug info in responses (#12)
 *
 * BONUS: Did you find something AI scanners typically miss?
 * - Logical vulnerabilities (anyone can delete anyone's data)
 * - Business logic flaws (no comment ownership model)
 * - Privacy issues (exposing user data without consent)
 */
