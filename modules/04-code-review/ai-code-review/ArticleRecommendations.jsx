import React, { useState, useEffect } from 'react';

/**
 * PR #847: Add article recommendations feature
 *
 * Author: @new-dev
 * Description: "Added recommendations based on user reading history.
 *               Works great on my machine! Ready for review."
 *
 * Files changed: 1
 * Lines added: 120
 * Lines deleted: 0
 */

const ArticleRecommendations = ({ userId, currentArticleId }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecommendations();
  }, [userId]);

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/recommendations?userId=${userId}&articleId=${currentArticleId}`);
      const data = await response.json();

      // 🐛 ISSUE #1: No error handling for non-200 responses
      setRecommendations(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // 🐛 ISSUE #2: Expensive calculation runs on every render
  const calculateRelevanceScore = (article) => {
    let score = 0;

    // Simulate expensive computation
    for (let i = 0; i < 1000000; i++) {
      score += Math.random();
    }

    if (article.category === 'technology') score += 10;
    if (article.author === 'Sarah Chen') score += 5;

    return score;
  };

  // 🐛 ISSUE #3: Race condition - currentArticleId might change during fetch
  const handleRefresh = () => {
    fetchRecommendations();
  };

  // 🐛 ISSUE #4: Renders all articles even if there are hundreds
  // No virtualization or pagination
  const renderRecommendations = () => {
    return recommendations.map((article) => {
      const score = calculateRelevanceScore(article); // Called for every article on every render!

      return (
        <div key={article.id} className="recommendation-card">
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <span className="score">Relevance: {score.toFixed(2)}</span>
          {/* 🐛 ISSUE #5: Accessibility - no semantic HTML or ARIA labels */}
          <div onClick={() => window.location.href = `/articles/${article.id}`}>
            Read More →
          </div>
        </div>
      );
    });
  };

  if (loading) {
    // 🐛 ISSUE #6: No loading skeleton, just text
    return <div>Loading...</div>;
  }

  if (error) {
    // 🐛 ISSUE #7: Exposes raw error messages to users
    return <div>Error: {error}</div>;
  }

  // 🐛 ISSUE #8: No empty state handling
  return (
    <div className="recommendations-container">
      <div className="recommendations-header">
        <h2>Recommended for you</h2>
        {/* 🐛 ISSUE #9: No debouncing - user can spam refresh */}
        <button onClick={handleRefresh}>Refresh</button>
      </div>

      <div className="recommendations-list">
        {renderRecommendations()}
      </div>
    </div>
  );
};

export default ArticleRecommendations;
