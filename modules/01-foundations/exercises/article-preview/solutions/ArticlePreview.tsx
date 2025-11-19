import React, { useState } from 'react';
import styles from './ArticlePreview.module.css';

/**
 * Accessible Article Preview Component
 *
 * This component displays article metadata in a responsive, accessible format.
 * Meets WCAG 2.1 AA standards with proper keyboard navigation and screen reader support.
 */

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
  const [imageError, setImageError] = useState(false);

  // Format date in a human-readable format
  const formattedDate = publishedDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  // Handle image load errors gracefully
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article className={styles.articlePreview}>
      <a
        href={articleUrl}
        className={styles.articleLink}
        aria-label={`Read article: ${headline}`}
      >
        {/* Image section - only render if URL provided and no error */}
        {imageUrl && !imageError && (
          <div className={styles.imageContainer}>
            <img
              src={imageUrl}
              alt={imageAlt || headline}
              className={styles.image}
              onError={handleImageError}
              loading="lazy"
            />
          </div>
        )}

        {/* Content section */}
        <div className={styles.content}>
          {/* Headline - using h2 for proper heading hierarchy */}
          <h2 className={styles.headline}>{headline}</h2>

          {/* Summary/excerpt */}
          <p className={styles.summary}>{summary}</p>

          {/* Metadata - author and date */}
          <div className={styles.metadata}>
            <span className={styles.author} aria-label={`By ${author}`}>
              By {author}
            </span>
            <span className={styles.separator} aria-hidden="true">
              •
            </span>
            <time
              className={styles.date}
              dateTime={publishedDate.toISOString()}
              aria-label={`Published on ${formattedDate}`}
            >
              {formattedDate}
            </time>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ArticlePreview;
