import React from 'react'
import ArticlePreview from './ArticlePreview'
import articleData from '../fixtures/sample-article.json'

function App() {
  // Convert ISO date string to Date object
  const article = {
    ...articleData,
    publishedDate: new Date(articleData.publishedDate)
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Article Preview Exercise</h1>
      <ArticlePreview {...article} />
    </div>
  )
}

export default App
