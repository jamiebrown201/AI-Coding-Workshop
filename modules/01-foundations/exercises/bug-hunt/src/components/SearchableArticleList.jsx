import React, { useState } from 'react';
import articlesData from '../../fixtures/articles.json';
import './SearchableArticleList.css';

/**
 * Searchable Article List Component
 *
 * Displays a list of articles with search functionality.
 */

const SearchableArticleList = () => {
  const [articles] = useState(articlesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(articlesData);

  // Handle search form submission
  const handleSearch = (event) => {
    const term = searchTerm.toLowerCase().trim();

    if (!term) {
      // Empty search shows all articles
      setFilteredArticles(articles);
    } else {
      // Filter articles by title or summary
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(term) ||
        article.summary.toLowerCase().includes(term)
      );
      setFilteredArticles(filtered);
    }
  };

  // Handle input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="article-list-container">
      <header className="article-header">
        <h1>Financial Times</h1>
        <p className="tagline">Global business and financial news</p>
      </header>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search articles by keyword..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="articles-section">
        <h2 className="section-title">
          {filteredArticles.length === articles.length
            ? 'All Articles'
            : `Search Results (${filteredArticles.length})`}
        </h2>

        {filteredArticles.length === 0 ? (
          <div className="no-results">
            <p>No articles found matching "{searchTerm}"</p>
            <p className="no-results-hint">Try a different search term</p>
          </div>
        ) : (
          <div className="articles-grid">
            {filteredArticles.map(article => (
              <article key={article.id} className="article-card">
                <div className="article-category">{article.category}</div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-summary">{article.summary}</p>
                <div className="article-meta">
                  <span className="article-author">{article.author}</span>
                  <span className="article-date">{article.date}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchableArticleList;
