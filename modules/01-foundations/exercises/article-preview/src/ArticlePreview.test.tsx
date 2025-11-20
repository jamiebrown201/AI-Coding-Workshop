import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticlePreview from './ArticlePreview';
import fixtureData from '../fixtures/sample-article.json';

describe('ArticlePreview', () => {
  // Use the actual fixture data for tests
  const mockArticle = {
    ...fixtureData,
    publishedDate: new Date(fixtureData.publishedDate),
  };

  it('renders article headline', () => {
    render(<ArticlePreview {...mockArticle} />);
    expect(screen.getByText(fixtureData.headline)).toBeInTheDocument();
  });

  it('renders article summary', () => {
    render(<ArticlePreview {...mockArticle} />);
    expect(screen.getByText(new RegExp(fixtureData.summary.substring(0, 30)))).toBeInTheDocument();
  });

  it('renders author name', () => {
    render(<ArticlePreview {...mockArticle} />);
    expect(screen.getByText(new RegExp(fixtureData.author))).toBeInTheDocument();
  });

  it('renders formatted date', () => {
    render(<ArticlePreview {...mockArticle} />);
    // Should contain the date in some readable format (day, month, year)
    expect(screen.getByText(/19.*Nov.*2025|2025.*Nov.*19|Nov.*19.*2025/)).toBeInTheDocument();
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
    // Should have an aria-label that includes the headline
    const ariaLabel = link.getAttribute('aria-label');
    expect(ariaLabel).toBeTruthy();
    expect(ariaLabel).toContain(mockArticle.headline);
    expect(link).toHaveAttribute('href', mockArticle.articleUrl);
  });

  it('has proper heading hierarchy', () => {
    render(<ArticlePreview {...mockArticle} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(fixtureData.headline);
  });

  it('formats date with time element', () => {
    render(<ArticlePreview {...mockArticle} />);
    // Find the time element - should exist and contain a date
    const timeElement = document.querySelector('time');
    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveAttribute('dateTime');
    // Should display some part of the date
    expect(timeElement?.textContent).toMatch(/19|Nov|2025/);
  });
});
