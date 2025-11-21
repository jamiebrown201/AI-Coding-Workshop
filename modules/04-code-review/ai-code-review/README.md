# Activity 4B: AI-Assisted Code Review

## 📋 The Scenario: Reviewing a Colleague's PR

**PR #847: Add article recommendations feature**

```
Author: @new-dev
Branch: feature/article-recommendations
Files changed: 1 file (ArticleRecommendations.jsx)
Lines: +120 / -0

Description:
"Added recommendations based on user reading history.
Works great on my machine! Ready for review."

Reviewer: YOU
Status: Needs review before merge
```

## Your Mission

You're reviewing a PR from a colleague who's new to the team. The feature **works**, but you need to review it for:
- Logic bugs
- Performance issues
- Accessibility problems
- User experience issues
- Code maintainability

**Important:** This is NOT about doing a full comprehensive review. This exercise teaches you **how to use AI effectively for specific parts of code review**.

## Setup

```bash
cd modules/04-code-review/ai-code-review
```

**What you have:**
- `ArticleRecommendations.jsx` - The PR code to review
- Your AI coding assistant
- This guide on AI-assisted code review

## Learning Objectives

By the end of this exercise, you'll be able to:
- ✓ Use AI to identify specific types of issues (performance, accessibility, etc.)
- ✓ Ask targeted questions rather than "review this code"
- ✓ Verify AI suggestions before adding them to your review
- ✓ Understand when AI helps vs. when manual review is better
- ✓ Write constructive review comments based on AI findings

## How AI Can Help in Code Reviews

### ✅ What AI is Good At:
- **Pattern matching** - Spotting common anti-patterns
- **Performance checks** - Identifying expensive operations in loops
- **Accessibility scanning** - Finding missing ARIA labels, semantic HTML issues
- **Best practices** - Suggesting modern approaches
- **Generating examples** - Showing how to fix issues

### ❌ What AI Misses:
- **Business logic** - AI doesn't know your requirements
- **User experience** - AI can't judge if UX is good
- **Context** - AI doesn't know why code is written a certain way
- **Team conventions** - AI doesn't know your team's style
- **Integration issues** - AI doesn't see the whole system

## AI-Assisted Code Review Strategy

### Step 1: Skim the Code Yourself First

**Before using AI, spend 2-3 minutes scanning the code:**
- What's the purpose of this component?
- Does it look complete?
- Are there any obvious red flags?
- What areas should you focus your review on?

**Why this matters:** You need context to ask AI good questions. Don't blindly ask "review this code."

### Step 2: Use AI for Targeted Scans

**Don't ask AI to do a full review. Instead, ask it to check specific things:**

#### Example: Performance Check

```
"I'm working on the AI-Assisted Code Review exercise in modules/04-code-review/ai-code-review/

I'm reviewing ArticleRecommendations.jsx. Can you identify any performance
issues, especially:
- Unnecessary re-renders
- Expensive calculations in render methods
- Missing memoization opportunities"
```

#### Example: Accessibility Check

```
"I'm working on the AI-Assisted Code Review exercise in modules/04-code-review/ai-code-review/

Can you review ArticleRecommendations.jsx for accessibility issues?
Focus on:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader compatibility"
```

#### Example: Error Handling Check

```
"I'm working on the AI-Assisted Code Review exercise in modules/04-code-review/ai-code-review/

Review the error handling in ArticleRecommendations.jsx.
Are errors handled properly? What edge cases might be missing?"
```

### Step 3: Verify AI's Findings

**AI might be wrong! For each issue AI identifies:**

1. **Understand it** - Read the code yourself to verify
2. **Test it** - Can you reproduce the problem?
3. **Consider context** - Is this actually an issue in your codebase?
4. **Check severity** - Is this critical, important, or nice-to-have?

### Step 4: Write Constructive Review Comments

**Based on verified AI findings, write helpful comments:**

**❌ Bad review comment:**
> "AI said this is a performance issue. Fix it."

**✅ Good review comment:**
> "The `calculateRelevanceScore` function is being called for every article on every render, which could cause performance issues with large lists. Consider using `useMemo` to cache the calculation:
>
> ```javascript
> const scoredRecommendations = useMemo(() => {
>   return recommendations.map(article => ({
>     ...article,
>     score: calculateRelevanceScore(article)
>   }));
> }, [recommendations]);
> ```
>
> This way the scores are only recalculated when the recommendations array changes."

### Step 5: Manual Review for Logic and UX

**Some things AI can't check - you need to use your judgment:**

- Does this meet the business requirements?
- Is the user experience good?
- Does it handle edge cases specific to your domain?
- Is the code maintainable by the team?

## The Review Checklist

Use AI to help with these specific checks:

### Performance ⚡
- [ ] Are there expensive operations in render methods?
- [ ] Is data being fetched efficiently?
- [ ] Are there unnecessary re-renders?
- [ ] Is list rendering optimized for large datasets?

### Accessibility ♿
- [ ] Is semantic HTML used appropriately?
- [ ] Are there proper ARIA labels?
- [ ] Can users navigate with keyboard only?
- [ ] Do interactive elements have proper roles?

### Error Handling 🚨
- [ ] Are API errors handled gracefully?
- [ ] Are error messages user-friendly (not exposing internals)?
- [ ] Are loading states handled?
- [ ] Are empty states handled?

### Code Quality 🧹
- [ ] Are there any race conditions?
- [ ] Is the component doing too much?
- [ ] Are there magic numbers that should be constants?
- [ ] Is the code readable and maintainable?

## Example Prompts for Different Review Areas

### For Performance Issues:
```
"I'm working on the AI-Assisted Code Review exercise in modules/04-code-review/ai-code-review/

In ArticleRecommendations.jsx, I'm concerned about performance with large
lists. What optimizations would you suggest? Consider:
- React rendering optimization
- Expensive computations
- List virtualization"
```

### For Accessibility:
```
"I'm working on the AI-Assisted Code Review exercise in modules/04-code-review/ai-code-review/

Review ArticleRecommendations.jsx for WCAG 2.1 AA accessibility compliance.
What issues do you find?"
```

### For Race Conditions:
```
"I'm working on the AI-Assisted Code Review exercise in modules/04-code-review/ai-code-review/

In ArticleRecommendations.jsx, could there be race conditions with the
fetchRecommendations function? What happens if userId or currentArticleId
changes during a fetch?"
```

### For User Experience:
```
"I'm working on the AI-Assisted Code Review exercise in modules/04-code-review/ai-code-review/

What UX improvements would you suggest for ArticleRecommendations.jsx?
Consider loading states, empty states, and error handling."
```

## Your Task

1. **Review the ArticleRecommendations.jsx component**
2. **Use AI to help identify issues in these categories:**
   - Performance
   - Accessibility
   - Error handling
   - Code quality
3. **Create a review document** (`review-comments.md`) with your findings
4. **For each issue:**
   - Describe the problem
   - Explain why it's a problem
   - Suggest a fix (can use AI to help generate code examples)
   - Rate severity: Critical / High / Medium / Low

## Expected Issues to Find

There are **at least 9 issues** in this code. Can you find them all?

**Hint categories:**
- 2-3 performance issues
- 2-3 accessibility issues
- 2-3 error handling issues
- 1-2 race condition issues

## Success Criteria

- [ ] You've identified at least 6 of the 9 issues
- [ ] You understand WHY each is a problem
- [ ] You've written constructive review comments
- [ ] You've verified AI's suggestions (not blindly copied)
- [ ] You can explain how AI helped vs. where you used manual judgment
- [ ] You have a `review-comments.md` file with your findings

## Template: review-comments.md

```markdown
# Code Review: PR #847 - Article Recommendations

**Reviewer:** [Your Name]
**Date:** [Today's Date]

## Summary

[Brief 2-3 sentence overview of the PR and your general thoughts]

## Issues Found

### 🔴 Critical Issues

#### Issue 1: [Title]
**Location:** Line X
**Problem:** [Description]
**Why it matters:** [Explanation]
**Suggested fix:** [Code example or explanation]
**AI helped:** [Yes/No - How?]

### 🟡 Medium Issues

[Same format]

### 🟢 Low Priority / Suggestions

[Same format]

## Positive Feedback

[What did the developer do well? Be specific.]

## General Comments

[Any overall observations or suggestions]

## Recommendation

- [ ] Approve
- [ ] Request changes
- [ ] Comment only
```

## Group Discussion

After completing your review:

1. **How did AI help speed up your review? Where did it slow you down?**
2. **Did AI miss any issues that you caught manually? Why do you think it missed them?**
3. **Did AI flag anything that wasn't actually a problem? (False positives)**
4. **What percentage of your review time was AI-assisted vs. manual judgment?**
5. **How would you use AI differently in a real code review now?**
6. **What's the risk of relying too heavily on AI for code reviews?**

## Reflection Questions

1. **Could you have done this review quicker without AI? Why or why not?**
2. **What was the most valuable way AI helped in this review?**
3. **When should you NOT use AI in a code review?**
4. **How do you balance AI assistance with your own critical thinking?**

## Best Practices for AI-Assisted Code Review

### Do ✅
- Use AI for **targeted** checks (performance, accessibility, etc.)
- **Verify** AI's findings before adding to review
- Ask AI to **explain** why something is an issue
- Use AI to **generate examples** of fixes
- Combine AI assistance with **manual judgment**

### Don't ❌
- Don't ask AI to "review everything"
- Don't blindly copy AI suggestions to your review
- Don't let AI replace understanding the code yourself
- Don't skip manual checks for business logic and UX
- Don't assume AI caught everything

## Next Steps

After completing this exercise:
1. Compare your findings with others
2. Discuss which issues were hardest to spot
3. Move on to **Activity 4C: AI-Powered Test Generation**

---

**Remember: AI is a review assistant, not a replacement for your judgment.**
