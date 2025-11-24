import React from "react";

interface ArticlePreviewProps {
  headline: string;
  summary: string;
  author: string;
  publishedDate: Date;
  imageUrl?: string;
  imageAlt?: string;
  articleUrl: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = () => {
  return <div></div>;
};

export default ArticlePreview;
