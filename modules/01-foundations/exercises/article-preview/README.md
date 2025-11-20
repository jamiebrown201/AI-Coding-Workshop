# Exercise 1A: Article Preview Component

## Product Context / User Story

```
As a FT reader
I want to see article previews that are accessible and mobile-friendly
So that I can quickly scan content and decide what to read

Acceptance Criteria:
- Preview shows headline, summary, author, and publication date
- Works on mobile (320px) to desktop (1920px)
- Keyboard navigable
- Screen reader friendly
- Meets WCAG 2.1 AA standards
- Loads image with proper fallback
```

## Your Mission

Build a React component that displays FT article previews. Sounds simple? The devil (and accessibility requirements) are in the details.

Use your AI coding tool to help, but **you must be able to explain every line of code you commit.**

## Setup

```bash
cd modules/01-foundations/exercises/article-preview
git checkout -b workshop/your-name/article-preview
npm install
```

## Requirements

### Functional Requirements
1. **Display article data:**
   - Headline (required)
   - Summary/excerpt (required)
   - Author name (required)
   - Publication date (required, formatted like "19 Nov 2025")
   - Article image (optional, with fallback)

2. **Responsive design:**
   - Mobile: Single column, stacked layout
   - Tablet: Adaptive spacing
   - Desktop: Image and text side-by-side

3. **Interactive:**
   - Entire preview is clickable
   - Visual feedback on hover/focus
   - Opens article in same window

### Accessibility Requirements (AI often misses these!)
- [ ] Proper heading hierarchy (h2 for headline)
- [ ] Alt text for images (descriptive, not just "article image")
- [ ] Keyboard navigation (Tab, Enter to activate)
- [ ] Focus indicators (visible outline on focus)
- [ ] Screen reader support (semantic HTML)
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Touch targets ≥44x44 pixels

### Technical Requirements
- [ ] React functional component with TypeScript
- [ ] Styled using CSS modules or styled-components
- [ ] Props interface clearly defined
- [ ] No console errors or warnings
- [ ] Passes linting (`npm run lint`)
- [ ] Passes tests (`npm test`)

## Sample Data

**Use the provided fixture data:** `fixtures/sample-article.json`

This file contains realistic article data for testing your component:

```typescript
interface ArticlePreviewProps {
  headline: string;
  summary: string;
  author: string;
  publishedDate: Date;
  imageUrl?: string;
  imageAlt?: string;
  articleUrl: string;
}

// Import and use the fixture data:
import sampleArticle from './fixtures/sample-article.json';

// The fixture contains:
// - Realistic headline and summary
// - Author name
// - ISO date string (convert to Date object)
// - Local image path (/images/article-1.svg)
// - Descriptive alt text

// More sample images available in public/images/:
// - article-1.svg (Global Markets theme)
// - article-2.svg (Technology theme)
// - article-3.svg (Politics theme)
// - fallback.svg (No image placeholder)
```

## ⚠️ Common Pitfalls (that AI might not catch)

- **Missing alt text** - AI loves to forget this
- **Color contrast fails** - AI doesn't have eyes
- **Mobile responsive... ish** - AI's definition of "mobile-friendly" is suspect
- **Focus states** - AI thinks mice are the only input device
- **Div soup** - AI loves nested divs instead of semantic HTML
- **Magic numbers** - Hard-coded values instead of CSS variables
- **No error handling** - What if the image fails to load?

## 🎯 Success Criteria

- [ ] Passes `npm run lint`
- [ ] Passes `npm test`
- [ ] You can explain what every line does
- [ ] No console errors in browser (warnings negotiable)
- [ ] Works in Chrome, Firefox, Safari
- [ ] Keyboard navigation works perfectly
- [ ] Looks good on phone, tablet, desktop

## Working Approach

### For Junior Developers
1. Try building the component yourself first (5 min)
2. Then use AI to compare/improve
3. Ask AI to explain *why* it chose certain patterns
4. Focus question: "Can you explain this code to someone else?"

### For Mid-Level Developers
1. Write detailed requirements first
2. Give requirements to AI
3. Compare AI output to how you would have done it
4. Focus question: "What would break in edge cases?"

### For Senior Developers
1. Consider reusable patterns the team can use
2. Evaluate AI output against team conventions
3. Think about maintainability
4. Focus question: "Is this maintainable by the rest of the team?"

## Example Prompts

**❌ Vague prompt:**
> "Create a React component for article previews"

**✅ Better prompt:**
> "I'm working on the Article Preview exercise in modules/01-foundations/exercises/article-preview/
>
> Create a React TypeScript component called ArticlePreview that displays article metadata (headline, summary, author, date) with an optional image. Must be keyboard accessible, have proper ARIA labels, and be responsive from 320px to 1920px. Use semantic HTML."

**✅ Even better (with context):**
> "I'm working on the Article Preview exercise in modules/01-foundations/exercises/article-preview/
>
> Here's the interface:
> ```typescript
> interface ArticlePreviewProps {
>   headline: string;
>   // ... rest of interface
> }
> ```
>
> Create an accessible, responsive ArticlePreview component that meets WCAG 2.1 AA standards. Include proper focus states and alt text handling."

## Testing Your Component

```bash
# Run all checks
npm run lint
npm test

# Start dev server to see it in action
npm run dev
# Visit http://localhost:3000
```

## Commit Your Work

Create a branch for this exercise and push your work:

```bash
# Create branch for this exercise
git checkout -b workshop/your-name/article-preview

# For example:
# git checkout -b workshop/jamie/article-preview

git add .
git commit -m "feat: article preview component (with AI assistance)

- Implements responsive article preview
- Meets WCAG 2.1 AA accessibility standards
- Includes keyboard navigation
- Handles missing images gracefully

AI-assisted: boilerplate and styling
Human-verified: accessibility, edge cases, semantics"

# Push to your exercise branch
git push -u origin workshop/your-name/article-preview
```

## Reflection Questions

After completing the exercise, consider:

1. **What surprised you about AI's output?**
2. **What did AI do well?**
3. **What did AI miss that you had to fix?**
4. **Would you trust this code in production without review?**
5. **What would you do differently next time?**

## Group Discussion

- Discuss the trade-offs between speed and quality. How much time did you save, but how much time did you spend fixing or verifying the AI's output?
- In a real project, would it have been faster to write this component from scratch or to use the AI and then fix its mistakes?

## Next Steps

Move on to [Exercise 1B: Safari Bug Hunt](../bug-hunt/README.md)

---

**Remember: If you can't explain the code, you don't understand it yet.**
