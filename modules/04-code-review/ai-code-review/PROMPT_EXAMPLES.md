# Prompt Examples: AI-Assisted Code Review

This file contains example prompts for the AI-Assisted Code Review exercise. **Use these if you get stuck** or after completing to compare your approach.

---

## Philosophy: Targeted Checks, Not Generic Reviews

**❌ Don't ask:** "Review this code"
**✅ Do ask:** "Check this code for [specific thing]"

AI is best at **targeted scans** for specific issue types. Generic "review everything" prompts give surface-level feedback.

---

## Example 1: Performance Check

```
I'm working on the AI-Assisted Code Review exercise in
modules/04-code-review/ai-code-review/

I'm reviewing ArticleRecommendations.jsx. Can you identify any performance
issues, especially:
- Unnecessary re-renders
- Expensive calculations in render methods
- Missing memoization opportunities
- Operations that should be optimized for large lists
```

**What makes this good:**
- ✅ States which exercise (context)
- ✅ Specifies exact component
- ✅ Focuses on one concern (performance)
- ✅ Lists specific patterns to look for
- ✅ Considers scale (large lists)

**Why this approach works:**
Performance issues follow patterns. Asking AI to find specific patterns is more effective than generic review.

---

## Example 2: Accessibility Check

```
I'm working on the AI-Assisted Code Review exercise in
modules/04-code-review/ai-code-review/

Can you review ArticleRecommendations.jsx for accessibility issues?
Focus on:
- Semantic HTML (are the right elements being used?)
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Alt text for images

Check against WCAG 2.1 AA standards.
```

**What makes this good:**
- ✅ Focused on accessibility only
- ✅ Lists specific accessibility concerns
- ✅ References specific standard (WCAG 2.1 AA)
- ✅ Covers different accessibility aspects

**Why this approach works:**
AI can pattern-match against accessibility best practices when given specific criteria.

---

## Example 3: Error Handling Check

```
I'm working on the AI-Assisted Code Review exercise in
modules/04-code-review/ai-code-review/

Review the error handling in ArticleRecommendations.jsx.

Questions:
- Are API errors handled gracefully?
- Are error messages user-friendly (not exposing technical details)?
- What happens if the API is slow or times out?
- Are loading states handled properly?
- What edge cases might be missing?
```

**What makes this good:**
- ✅ Focuses on error handling
- ✅ Asks specific questions
- ✅ Considers user experience (friendly messages)
- ✅ Thinks about edge cases (slow API, timeouts)
- ✅ Checks for completeness (loading states)

**Why this approach works:**
AI can evaluate code against error handling best practices when you specify what to look for.

---

## Example 4: React Hooks Issues

```
I'm working on the AI-Assisted Code Review exercise in
modules/04-code-review/ai-code-review/

Check ArticleRecommendations.jsx for React hooks issues:
- Are useEffect dependencies complete?
- Could there be race conditions with async operations?
- Are there missing cleanup functions?
- Is state being updated correctly in async callbacks?

What happens if userId or currentArticleId changes while a fetch is in progress?
```

**What makes this good:**
- ✅ Focused on React hooks specifically
- ✅ Lists common hooks pitfalls
- ✅ Asks about race conditions (subtle issue)
- ✅ Poses specific scenario to analyze

**Why this approach works:**
Hooks have well-known pitfalls. AI can identify these patterns when directed to look for them.

---

## Example 5: Code Quality & Maintainability

```
I'm working on the AI-Assisted Code Review exercise in
modules/04-code-review/ai-code-review/

Review ArticleRecommendations.jsx for code quality issues:
- Are there any console.log statements left in?
- Is there commented-out code that should be removed?
- Are there TODO comments indicating incomplete work?
- Are there magic numbers that should be constants?
- Is the component doing too much (separation of concerns)?
```

**What makes this good:**
- ✅ Focuses on code quality
- ✅ Lists specific code smells
- ✅ Includes "hidden" issues (console.log, TODOs)
- ✅ Considers architecture (separation of concerns)

**Why this approach works:**
These are pattern-matchable issues AI can find reliably.

---

## Example 6: Security & Privacy Check

```
I'm working on the AI-Assisted Code Review exercise in
modules/04-code-review/ai-code-review/

Review ArticleRecommendations.jsx for security and privacy concerns:
- Is user data being tracked? What's being logged?
- Are there any security vulnerabilities (XSS, injection)?
- Is sensitive data exposed in error messages?
- Are API calls properly secured?
- Could PII (personally identifiable information) be leaked?
```

**What makes this good:**
- ✅ Focuses on security and privacy
- ✅ Lists specific concerns
- ✅ Considers data tracking (privacy issue)
- ✅ Looks for common vulnerabilities
- ✅ Checks for data leakage

**Why this approach works:**
Security has known patterns. AI can find common vulnerabilities when asked to look for them.

---

## Example 7: User Experience Check

```
I'm working on the AI-Assisted Code Review exercise in
modules/04-code-review/ai-code-review/

What UX improvements would you suggest for ArticleRecommendations.jsx?
Consider:
- Loading states (what does the user see while data loads?)
- Empty states (what if there are no recommendations?)
- Error states (what if the API fails?)
- Feedback for user actions (clicking, refreshing)
- Does the UI clearly communicate what's happening?
```

**What makes this good:**
- ✅ Focuses on user experience
- ✅ Considers all UI states
- ✅ Thinks about user feedback
- ✅ Asks about clarity of communication

**Why this approach works:**
While AI can't judge "good" UX, it can identify missing states and patterns.

---

## Example 8: Verifying AI's Findings

```
I'm working on the AI-Assisted Code Review exercise in
modules/04-code-review/ai-code-review/

You mentioned that there's a performance issue with the calculateRelevanceScore
function being called on every render.

Can you show me:
1. Exactly where this happens (line number)?
2. How I can verify this is actually a problem?
3. How significant the performance impact would be with 100 recommendations?

I want to understand before adding this to my review.
```

**What makes this good:**
- ✅ Questions AI's claim
- ✅ Asks for specific evidence (line number)
- ✅ Asks how to verify the issue
- ✅ Asks about severity/impact
- ✅ Shows critical thinking

**Why this approach works:**
AI can be wrong. Always verify before using AI's findings in your review.

---

## Example 9: Asking for Fix Suggestions

```
I'm working on the AI-Assisted Code Review exercise in
modules/04-code-review/ai-code-review/

I've identified that the component is missing proper keyboard navigation.

Can you:
1. Show me what specific keyboard interactions are missing?
2. Provide a code example of how to fix it?
3. Explain why this matters for accessibility?

I want to include a constructive suggestion in my review comment.
```

**What makes this good:**
- ✅ Starts with identified issue
- ✅ Asks for specifics
- ✅ Requests code example
- ✅ Asks for explanation (helps you learn and write better review)
- ✅ Focused on constructive feedback

**Why this approach works:**
AI is good at providing examples once you've identified the issue.

---

## Example 10: Pushing Back on AI Suggestions

```
I'm working on the AI-Assisted Code Review exercise in
modules/04-code-review/ai-code-review/

You suggested refactoring this component to use Redux for state management.

However, this component only manages local UI state for recommendations.
Redux seems like overkill for this use case.

Can you suggest a simpler approach that keeps state management proportional
to the actual complexity? Consider:
- This is local component state
- No sharing needed across components
- Want to keep it simple for team maintenance
```

**What makes this good:**
- ✅ Challenges AI's over-engineering
- ✅ Explains context AI missed
- ✅ Provides constraints for better suggestion
- ✅ Focuses on appropriate complexity
- ✅ Considers team maintenance

**Why this approach works:**
AI often suggests over-engineered solutions. Guide it to context-appropriate answers.

---

## Common Patterns for Effective Code Review Prompts

### Pattern 1: One Concern at a Time
Don't ask AI to check everything at once. Ask separate prompts for:
- Performance
- Accessibility
- Security
- Error handling
- Code quality

This gets more detailed, useful feedback.

### Pattern 2: Provide Context About Your Codebase
Help AI understand your constraints:
- "Our team prefers simple solutions over clever ones"
- "We prioritize accessibility compliance"
- "Performance matters - we have large datasets"

### Pattern 3: Ask for Evidence
When AI finds an issue:
- "Show me the line number"
- "How can I verify this?"
- "What's the severity?"

Don't blindly trust AI's findings.

### Pattern 4: Request Constructive Feedback Format
Ask AI to help you write helpful review comments:
- "Help me write a constructive review comment explaining this issue"
- "Provide a code example of how to fix this"
- "Explain why this is a problem, not just what's wrong"

### Pattern 5: Think About The Author
Remember you're reviewing a colleague's work:
- Ask AI to help identify what was done well
- Request suggestions, not demands
- Focus on learning opportunities, not just problems

---

## Anti-Patterns to Avoid

### ❌ Anti-Pattern 1: "Review This Code"
Too generic. You'll get surface-level feedback.

**Instead:** Ask targeted questions about specific concerns.

### ❌ Anti-Pattern 2: Copying AI's Response Directly
AI's output isn't ready for human consumption.

**Instead:** Understand the issue, verify it, then write your own review comment.

### ❌ Anti-Pattern 3: Trusting AI Blindly
AI confidently makes mistakes.

**Instead:** Verify every issue AI identifies before including it in your review.

### ❌ Anti-Pattern 4: Only Using AI
AI misses business logic, UX issues, and context.

**Instead:** Use AI for targeted scans, but also review manually for logic and experience.

### ❌ Anti-Pattern 5: Asking AI to Judge "Good" vs "Bad"
AI doesn't understand your team's conventions or product goals.

**Instead:** Use AI to identify patterns, but YOU judge appropriateness.

---

## Reflection Questions

After comparing your prompts with these examples:

1. **Targeting:** Were your prompts focused on specific concerns, or too generic?
2. **Verification:** Did you verify AI's findings, or trust them blindly?
3. **Constructiveness:** Did you use AI to help write helpful review comments?
4. **Balance:** Did you combine AI assistance with manual judgment?
5. **Context:** Did you provide enough context about your codebase and team?

---

## The Review Workflow

**Recommended approach:**

1. **Skim code yourself** - Get context before using AI
2. **Ask targeted AI prompts** - Performance, accessibility, security, etc.
3. **Verify AI's findings** - Check every issue AI reports
4. **Manual review** - Business logic, UX, team conventions
5. **Write constructive comments** - Use AI to help format, but verify everything
6. **Positive feedback** - Note what was done well (AI can help identify this too!)

---

**Remember:** AI is a review assistant, not a reviewer. The final judgment is always yours!
