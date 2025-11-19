import React from 'react';

/**
 * Article Preview Component
 *
 * TODO: Implement an accessible, responsive article preview component
 *
 * Requirements:
 * - Display headline, summary, author, date, and optional image
 * - Responsive (mobile to desktop)
 * - Keyboard accessible
 * - Screen reader friendly
 * - WCAG 2.1 AA compliant
 *
 * Use your AI tool to help build this, but make sure you understand
 * and can explain every line of code!
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

const ArticlePreview: React.FC<ArticlePreviewProps> = (props) => {
  // Your code here

  return (
    <div>
      <p>Article preview component - implement me!</p>
    </div>
  );
};

export default ArticlePreview;
