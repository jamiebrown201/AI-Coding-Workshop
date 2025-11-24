# Prompt Examples: Article Preview Component

This file contains example prompts for the Article Preview exercise. **Use these if you get stuck** or after completing the exercise to compare your approach.

## Example 1: Vague vs. Specific Prompts

### ❌ Vague Prompt (Not Effective)

```
Create a React component for article previews
```

**Why this is problematic:**
- No context about the exercise or project
- Missing technical requirements (TypeScript, accessibility)
- No information about responsive design needs
- AI doesn't know what properties the component needs
- Will likely get a basic, incomplete solution

### ✅ Better Prompt

```
I'm working on the Article Preview exercise in modules/01-foundations/exercises/article-preview/

Create a React TypeScript component called ArticlePreview that displays article
metadata (headline, summary, author, date) with an optional image. Must be keyboard
accessible, have proper ARIA labels, and be responsive from 320px to 1920px.
Use semantic HTML.
```

**What makes this better:**
- States which exercise (provides context)
- Specifies TypeScript requirement
- Lists specific data to display
- Mentions accessibility requirements
- Specifies responsive design range
- Asks for semantic HTML

## Example 2: Providing Interface Context

### ✅ Even Better Prompt (With Full Context)

```
I'm working on the Article Preview exercise in modules/01-foundations/exercises/article-preview/

Here's the interface I need to implement:

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
```

Create an accessible, responsive ArticlePreview component that meets WCAG 2.1 AA
standards. The component should:
- Be clickable as a whole (entire card is a link)
- Show proper focus states for keyboard navigation
- Handle missing images gracefully with a fallback
- Format the date in a readable way (e.g., "19 Nov 2025")
- Work from mobile (320px) to desktop (1920px)
```

**What makes this excellent:**
- Provides the exact interface definition
- Specific accessibility standard (WCAG 2.1 AA)
- Lists all functional requirements
- Mentions edge cases (missing images)
- Specifies date formatting expectations
- Clear about responsive breakpoints

## Example 3: Asking for Accessibility Improvements

```
I'm working on the Article Preview exercise in modules/01-foundations/exercises/article-preview/

I've created this ArticlePreview component, but I need to make sure it's fully
accessible. Can you review it for WCAG 2.1 AA compliance?

[Paste your component code]

Specifically check:
- Semantic HTML usage
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation
- Focus indicators
- Touch target sizes (minimum 44x44px)
- Color contrast ratios
```

**What makes this good:**
- Clear context about the exercise
- Specific accessibility standard to check against
- Includes current code for analysis
- Lists specific areas to review
- Helps AI focus on accessibility rather than general code review

## Example 4: Debugging CSS/Styling Issues

```
I'm working on the Article Preview exercise in modules/01-foundations/exercises/article-preview/

My ArticlePreview component looks good on desktop but breaks on mobile.
The image and text are supposed to stack vertically on small screens but they're
staying side-by-side.

Here's my current CSS:
[Paste your CSS]

What media query or flexbox changes do I need to make this responsive from 320px
to 1920px?
```

**What makes this good:**
- Describes the specific problem (desktop works, mobile doesn't)
- Explains expected behavior vs actual behavior
- Includes relevant code (CSS)
- Asks for specific solution type (media query/flexbox)
- Mentions the responsive range requirement

## Example 5: Asking About Best Practices

```
I'm working on the Article Preview exercise in modules/01-foundations/exercises/article-preview/

I have two options for making the entire card clickable:

Option 1: Wrap everything in an <a> tag
Option 2: Use an <article> with onClick handler

Which approach is better for accessibility and semantic HTML? Why?
```

**What makes this good:**
- Presents specific options to compare
- Asks about the reasoning (learning opportunity)
- Focuses on accessibility and semantics
- Shows you're thinking about trade-offs

## Common Patterns to Learn From

### Pattern 1: Always Provide Exercise Context
Start your prompts with:
```
I'm working on the Article Preview exercise in modules/01-foundations/exercises/article-preview/
```

This helps AI understand the broader context.

### Pattern 2: Be Specific About Requirements
Don't say: "Make it accessible"
Say: "Make it meet WCAG 2.1 AA standards with proper focus states, semantic HTML, and keyboard navigation"

### Pattern 3: Include Relevant Code Snippets
When debugging or improving, paste the specific code section you're working on, not your entire codebase.

### Pattern 4: Ask "Why" Questions
Instead of just asking for solutions, ask AI to explain:
- "Why is this approach better for accessibility?"
- "Why does this CSS cause the layout to break?"
- "Why should I use semantic HTML here?"

## Reflection Questions

After comparing your prompts with these examples:

1. **What did you do well?** Which of your prompts got good results?
2. **What could you improve?** Where did you get vague or unhelpful AI responses?
3. **Context quality:** Did you provide enough context without overwhelming with information?
4. **Specificity:** Were your requests specific enough?
5. **Learning:** Did you ask AI to explain, or just give you code?

---

**Remember:** The goal isn't to copy these prompts. It's to understand what makes a prompt effective so you can write better ones yourself!
