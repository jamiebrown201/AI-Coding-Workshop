import React, { useState, useEffect } from 'react';
import './Paywall.css';

/**
 * Paywall Component
 *
 * Displays a subscription prompt when users hit their article limit.
 *
 * 🐛 BUG: This component doesn't work in Safari!
 * Works perfectly in Chrome, Firefox, Edge... but Safari? Nope.
 *
 * Your mission: Find the bug and fix it.
 */

const Paywall = ({ articlesRead, freeArticleLimit = 3 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has exceeded their free article limit
    if (articlesRead >= freeArticleLimit) {
      setIsVisible(true);
    }
  }, [articlesRead, freeArticleLimit]);

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  // Calculate days remaining in trial
  const trialEndDate = new Date('2025-12-31');
  const today = new Date();
  const daysRemaining = Math.ceil((trialEndDate - today) / (1000 * 60 * 60 * 24));

  return (
    <div className="paywall-overlay">
      <div className="paywall-modal">
        <div className="paywall-content">
          <h2>You've reached your article limit</h2>

          <p className="paywall-message">
            You've read {articlesRead} of {freeArticleLimit} free articles this month.
            Subscribe to continue reading unlimited FT content.
          </p>

          <div className="paywall-offer">
            <div className="offer-badge">Limited Time Offer</div>
            <h3>Subscribe today and save 50%</h3>
            <p className="offer-details">
              {daysRemaining} days remaining in this special offer
            </p>
          </div>

          <div className="paywall-plans">
            <div className="plan">
              <h4>Digital</h4>
              <p className="price">£29/month</p>
              <ul className="features">
                <li>Unlimited article access</li>
                <li>FT app on mobile & tablet</li>
                <li>Global news alerts</li>
              </ul>
              <button className="subscribe-btn">Subscribe</button>
            </div>

            <div className="plan plan-premium">
              <div className="popular-badge">Most Popular</div>
              <h4>Premium</h4>
              <p className="price">£59/month</p>
              <ul className="features">
                <li>Everything in Digital</li>
                <li>Exclusive newsletters</li>
                <li>FT Live events access</li>
                <li>Lex analysis column</li>
              </ul>
              <button className="subscribe-btn btn-primary">Subscribe</button>
            </div>
          </div>

          <p className="paywall-footer">
            Already a subscriber? <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Paywall;
