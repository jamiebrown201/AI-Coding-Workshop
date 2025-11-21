import React, { useState, useEffect } from 'react';
import './ArticleRecommendations.css';

/**
 * PR #847: Add article recommendations feature
 *
 * Author: @new-dev
 * Description: "Added recommendations based on user reading history.
 *               Tested locally and works great! Ready for review."
 *
 * Files changed: 1
 * Lines: +145 / -0
 */

const ArticleRecommendations = ({ userId, currentArticleId }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching recommendations for user:', userId);
    fetchRecommendations();
  }, [userId]);

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/recommendations?userId=${userId}&articleId=${currentArticleId}`);
      const data = await response.json();

      console.log('Received data:', data);

     
      setRecommendations(data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch recommendations:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  const calculateRelevanceScore = (article) => {
   
    let score = 0;

    // Weight by category
    const categoryWeights = {
      'technology': 10,
      'business': 8,
      'politics': 6,
      'sports': 4
    };

    score += categoryWeights[article.category] || 0;

    // Boost articles from popular authors
    if (article.author === 'Sarah Chen') score += 5;
    if (article.author === 'Michael Rodriguez') score += 5;

   
    const daysOld = (new Date() - new Date(article.publishedDate)) / (1000 * 60 * 60 * 24);
    score -= daysOld * 0.1; // Penalize old articles

    return Math.max(0, score);
  };

  const handleRefresh = () => {
    console.log('Refreshing recommendations');
    fetchRecommendations();
  };

  const handleArticleClick = (articleId) => {
   
    window.location.href = `/articles/${articleId}`;
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
   
    return (
      <div className="error">
        <p>Error: {error}</p>
        <button onClick={handleRefresh}>Try Again</button>
      </div>
    );
  }

 
  return (
    <div className="recommendations-container">
      <div className="recommendations-header">
        <h2>Recommended for You</h2>
        <button onClick={handleRefresh} className="refresh-btn">
          🔄 Refresh
        </button>
      </div>

      {/* 🐛 ISSUE: Commented-out code should be removed
      <div className="filters">
        <button>Technology</button>
        <button>Business</button>
        <button>All</button>
      </div>
      */}

      <div className="recommendations-list">
        {recommendations.map((article) => {
          const score = calculateRelevanceScore(article);

          return (
           
            <div
              key={article.id}
              className="recommendation-card"
             
              onClick={() => handleArticleClick(article.id)}
            >
              {article.imageUrl && (
               
                <img src={article.imageUrl} className="article-image" />
              )}

              <div className="article-content">
                {/* 🐛 ISSUE: Using h3 in clickable div - confusing for screen readers */}
                <h3 className="article-title">{article.title}</h3>
                <p className="article-summary">{article.summary}</p>

                <div className="article-meta">
                  <span className="author">{article.author}</span>
                  <span className="date">{article.publishedDate}</span>
                  <span className="score">Score: {score.toFixed(1)}</span>
                </div>
              </div>

              {/* 🐛 ISSUE: Using inline arrow instead of proper button/link */}
              <div className="read-more">→</div>
            </div>
          );
        })}
      </div>

      {/* 🐛 ISSUE: TODO comment left in production code */}
      {/* TODO: Add pagination when we have more than 10 results */}

      {/* 🐛 ISSUE: Hardcoded user tracking - privacy concern? */}
      <img
        src={`https://analytics.example.com/track?user=${userId}&page=recommendations`}
        style={{ display: 'none' }}
        alt=""
      />
    </div>
  );
};

export default ArticleRecommendations;
