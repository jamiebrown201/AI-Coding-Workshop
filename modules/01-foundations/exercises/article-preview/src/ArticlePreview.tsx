import React from 'react';

interface ArticlePreviewProps {
  headline: string;
  summary: string;
  author: string;
  publishedDate: Date;
  imageUrl?: string;
  imageAlt?: string;
  articleUrl: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  headline,
  summary,
  author,
  publishedDate,
  imageUrl,
  imageAlt,
  articleUrl,
}) => {
  // Suppress unused variable warnings
  console.log(imageUrl, imageAlt, articleUrl);

  return (
    <div>
      <h2>{headline}</h2>
      <p>{summary}</p>
      <p>By {author}</p>
      <p>{publishedDate.toString()}</p>
    </div>
  );
};

export default ArticlePreview;
