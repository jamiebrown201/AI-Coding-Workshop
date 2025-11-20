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

    const query = `SELECT * FROM comments WHERE article_id = ${articleId} ORDER BY created_at DESC`;
    const comments = await db.query(query);

    res.json({ comments });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      stack: error.stack,
      query: error.sql
    });
  }
});

// Create a new comment
router.post('/articles/:articleId/comments', async (req, res) => {
  const { text, author } = req.body;
  const articleId = req.params.articleId;

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

  const query = `SELECT c.*, a.title as article_title
                 FROM comments c
                 JOIN articles a ON c.article_id = a.id
                 WHERE c.user_id = ${userId}`;

  try {
    const comments = await db.query(query);

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
      password_hash: userData[0].password,
      internal_user_id: userData[0].internal_id,
      ip_addresses: userData[0].login_ips,
    };

    res.json(exportData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
