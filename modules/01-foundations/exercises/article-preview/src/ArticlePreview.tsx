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
  // TODO: Implement the ArticlePreview component
  // Requirements:
  // - Display headline, summary, author, and formatted date
  // - Show image if imageUrl is provided (use imageAlt for alt text)
  // - Make the entire preview clickable (wrap in <a> tag with articleUrl)
  // - Ensure accessibility (proper headings, alt text, aria-labels)
  // - Use semantic HTML (article, time elements, etc.)

  // Suppress unused variable warnings - you'll use these when implementing
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
