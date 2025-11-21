import React from 'react';
import ArticleRecommendations from '../ArticleRecommendations';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Financial Times</h1>
        <p className="tagline">Global business and financial news</p>
      </header>

      <main>
        <ArticleRecommendations
          userId="user_12345"
          currentArticleId="article_789"
        />
      </main>
    </div>
  );
}

export default App;
