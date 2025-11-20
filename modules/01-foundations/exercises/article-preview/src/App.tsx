import React from 'react'
import ArticlePreview from '../starter-code/ArticlePreview'
import articleData from '../fixtures/sample-article.json'

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Article Preview Exercise</h1>
      <ArticlePreview {...articleData} />
    </div>
  )
}

export default App
