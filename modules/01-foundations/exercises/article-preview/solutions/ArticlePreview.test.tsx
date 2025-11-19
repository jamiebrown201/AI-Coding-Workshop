import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticlePreview from './ArticlePreview';

describe('ArticlePreview', () => {
  const mockArticle = {
    headline: 'Test Article Headline',
    summary: 'This is a test summary for the article.',
    author: 'Test Author',
    publishedDate: new Date('2025-11-19'),
    imageUrl: 'https://example.com/image.jpg',
    imageAlt: 'Test image description',
    articleUrl: '/articles/test-article',
  };

  it('renders article headline', () => {
    render(<ArticlePreview {...mockArticle} />);
    expect(screen.getByText('Test Article Headline')).toBeInTheDocument();
  });

  it('renders article summary', () => {
    render(<ArticlePreview {...mockArticle} />);
    expect(screen.getByText(/This is a test summary/)).toBeInTheDocument();
  });

  it('renders author name', () => {
    render(<ArticlePreview {...mockArticle} />);
    expect(screen.getByText(/By Test Author/)).toBeInTheDocument();
  });

  it('renders formatted date', () => {
    render(<ArticlePreview {...mockArticle} />);
    expect(screen.getByText(/19 Nov 2025/)).toBeInTheDocument();
  });

  it('renders image when imageUrl provided', () => {
    render(<ArticlePreview {...mockArticle} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', mockArticle.imageUrl);
    expect(image).toHaveAttribute('alt', mockArticle.imageAlt);
  });

  it('uses headline as alt text when imageAlt not provided', () => {
    const articleWithoutAlt = { ...mockArticle, imageAlt: undefined };
    render(<ArticlePreview {...articleWithoutAlt} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', mockArticle.headline);
  });

  it('handles missing image gracefully', () => {
    const articleWithoutImage = { ...mockArticle, imageUrl: undefined };
    render(<ArticlePreview {...articleWithoutImage} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('has accessible link with proper aria-label', () => {
    render(<ArticlePreview {...mockArticle} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('aria-label', `Read article: ${mockArticle.headline}`);
    expect(link).toHaveAttribute('href', mockArticle.articleUrl);
  });

  it('has proper heading hierarchy', () => {
    render(<ArticlePreview {...mockArticle} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Test Article Headline');
  });

  it('formats date with time element', () => {
    render(<ArticlePreview {...mockArticle} />);
    const timeElement = screen.getByText(/19 Nov 2025/);
    expect(timeElement.tagName).toBe('TIME');
    expect(timeElement).toHaveAttribute('dateTime');
  });
});
