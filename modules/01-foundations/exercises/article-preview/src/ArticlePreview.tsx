import React from 'react';
import styles from './ArticlePreview.module.css';

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
  // Format the date for display
  const formattedDate = publishedDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  // ISO format for time element
  const isoDate = publishedDate.toISOString();

  // Use headline as fallback alt text if not provided
  const altText = imageAlt || headline;

  return (
    <article className={styles.articlePreview}>
      <a
        href={articleUrl}
        className={styles.link}
        aria-label={`Read article: ${headline}`}
      >
        {imageUrl && (
          <div className={styles.imageContainer}>
            <img
              src={imageUrl}
              alt={altText}
              className={styles.image}
            />
          </div>
        )}

        <div className={styles.content}>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.summary}>{summary}</p>

          <div className={styles.metadata}>
            <span className={styles.author}>{author}</span>
            <time dateTime={isoDate} className={styles.date}>
              {formattedDate}
            </time>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ArticlePreview;
