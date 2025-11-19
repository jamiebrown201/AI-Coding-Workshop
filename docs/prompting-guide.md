# Effective Prompting Guide for AI Coding Assistants

## The Golden Rule

**Context quality > Prompt quality**

Giving AI the *right* information is more important than clever wording.

## Core Principles

### 1. Be Specific, Not Clever

**❌ Bad:**
> "Make this better"

**✅ Good:**
> "Refactor this function to use async/await instead of callbacks, maintain error handling, and add JSDoc comments"

### 2. Provide Just Enough Context

**❌ Too little:**
> "Create a user model"

**❌ Too much:**
> [Pastes 5000 lines of code]
> "Explain this"

**✅ Just right:**
> "Create a User model for PostgreSQL with fields: email (unique), password (hashed), subscription_tier, created_at. Use Sequelize ORM. Include validation for email format."

### 3. Specify Constraints and Requirements

**❌ Vague:**
> "Build a login form"

**✅ Specific:**
> "Build a React login form with:
> - Email and password fields
> - Client-side validation (email format, password min 8 chars)
> - Accessible (WCAG 2.1 AA)
> - Show error messages
> - Disable submit while request is pending
> - Use our design system (FT colors and spacing)"

### 4. Break Complex Tasks Into Steps

**❌ All at once:**
> "Build a complete user authentication system with OAuth, 2FA, password reset, and email verification"

**✅ Incremental:**
> Step 1: "Create a basic email/password authentication endpoint"
> Step 2: "Add password hashing using bcrypt"
> Step 3: "Implement JWT token generation"
> Step 4: "Add token refresh logic"

### 5. Ask AI to Explain, Not Just Generate

**❌ Blind acceptance:**
> "Create the code"
> [Copies without understanding]

**✅ Learn while building:**
> "Create the code and explain:
> 1. Why you chose this approach
> 2. What edge cases it handles
> 3. What could go wrong
> 4. Alternative approaches considered"

## Prompt Templates

### Code Generation

```
Task: [What you want to build]
Requirements:
- [Specific requirement 1]
- [Specific requirement 2]
- [Specific requirement 3]

Constraints:
- [Language/framework]
- [Performance needs]
- [Accessibility needs]

Context:
[Relevant code snippets or interfaces]

Please include:
- Error handling
- Input validation
- Comments explaining non-obvious decisions
```

### Debugging

```
Problem: [Specific issue]
Expected: [What should happen]
Actual: [What's happening]

Error message:
[Exact error with stack trace]

Relevant code:
[The specific function/component]

Environment:
- [Browser/Node version]
- [Framework versions]
- [OS if relevant]

What I've tried:
- [Attempt 1]
- [Attempt 2]
```

### Code Review

```
Please review this code for:
- Security vulnerabilities
- Performance issues
- Accessibility problems
- Edge cases not handled
- Code maintainability

Code:
[Paste code]

Context:
This is used in [explain usage context]
It handles [explain what it does]
Expected load: [scale/performance requirements]
```

### Refactoring

```
I want to refactor this [function/component/module]:

Current code:
[Paste code]

Goals:
- [Goal 1: e.g., improve readability]
- [Goal 2: e.g., reduce complexity]
- [Goal 3: e.g., improve testability]

Constraints:
- Must maintain backward compatibility
- Current tests must still pass
- No breaking API changes

Please explain your refactoring approach before showing code.
```

### Understanding Existing Code

```
I'm trying to understand this [function/module/pattern]:

Code:
[Paste specific section]

Questions:
1. What is the overall purpose?
2. Why was this approach used?
3. What are the edge cases being handled?
4. What could go wrong?
5. How does it fit into the larger system?

Context:
[Brief description of surrounding system]
```

## Context Management Strategies

### The Layer-by-Layer Approach

Start small, expand as needed:

```
Round 1: "Looking at this function signature, what does it do?"
Round 2: "Now with the implementation, explain the algorithm"
Round 3: "Considering this usage example, what edge cases exist?"
```

### The Entry-Point Pattern

For understanding codebases:

```
Step 1: Ask about the entry point (server.js, index.js)
Step 2: Identify main routes or component tree
Step 3: Follow one path through the system
Step 4: Expand to related components
```

### The Interface-First Pattern

For new features:

```
Step 1: "Design the interface/API for [feature]"
Step 2: "Now implement [specific part]"
Step 3: "Add error handling for [edge cases]"
Step 4: "Write tests for [scenarios]"
```

## What to Avoid

### 1. Vague Requests
❌ "Make it work"
❌ "Fix the bug"
❌ "Optimize this"

### 2. Context Dumping
❌ Pasting entire files without explanation
❌ Including irrelevant code
❌ Providing no context structure

### 3. Blind Trust
❌ Not reading generated code
❌ Not understanding suggestions
❌ Not testing outputs

### 4. Assuming AI Knows Your Business
❌ "Build our subscription system" (without details)
❌ "Handle our payment flow" (without requirements)
❌ "Implement our auth" (without security requirements)

## Advanced Techniques

### Chain of Thought Prompting

Ask AI to think through the problem:

```
"Before writing code, please:
1. Break down the problem
2. Identify edge cases
3. Suggest an approach
4. Explain trade-offs
Then implement the solution."
```

### Constraint-Based Prompting

Define what you DON'T want:

```
"Create a user registration form, but:
- NO inline styles
- NO libraries other than React
- NO localStorage for sensitive data
- NO client-side password validation only
Include server-side validation and proper security."
```

### Iterative Refinement

Build in stages:

```
Round 1: "Create a basic version"
Round 2: "Add error handling"
Round 3: "Improve performance"
Round 4: "Add comprehensive tests"
```

### Testing-First Approach

```
"I want to build [feature].
First, help me write tests that define the behavior.
Then implement code that passes those tests."
```

## Red Flags in AI Responses

Watch out for:

- 🚩 "This should work" (it doesn't know for sure)
- 🚩 Obvious security issues (SQL injection, XSS)
- 🚩 Missing error handling
- 🚩 Hard-coded values instead of configuration
- 🚩 No input validation
- 🚩 Accessibility not considered
- 🚩 Browser compatibility not addressed
- 🚩 Over-complicated solutions
- 🚩 Deprecated APIs or methods

## Quality Checklist

Before accepting AI-generated code:

- [ ] Do you understand every line?
- [ ] Are there tests?
- [ ] Is there error handling?
- [ ] Is input validated?
- [ ] Are security implications considered?
- [ ] Is it accessible?
- [ ] Does it follow your team's conventions?
- [ ] Can you explain it to someone else?
- [ ] Would you write this code yourself?

## Example: End-to-End Prompting Session

### Bad Session

```
You: "Create a blog"
AI: [Generates 500 lines of code]
You: [Copies without understanding]
Result: Code that doesn't fit your needs, full of bugs
```

### Good Session

```
You: "I'm building a blog system. First, help me design the data model.
     I need: posts with title, content, author, publish date, tags.
     What's a good PostgreSQL schema?"

AI: [Suggests schema]

You: "Good, but I also need draft/published status and slug for URLs.
     Update the schema to include these."

AI: [Updates schema]

You: "Now create a Sequelize model matching this schema.
     Include validation: title max 200 chars, slug unique, lowercase."

AI: [Creates model]

You: "Review this model for security issues and edge cases."

AI: [Provides review]

You: "Now let's write tests for this model before creating the API."

[Continues building incrementally]
```

## Remember

- **AI is a tool, not a teammate** - It doesn't understand context like humans do
- **You're responsible for the output** - Review and understand everything
- **Specific beats clever** - Clear requirements matter more than prompt engineering
- **Context is king** - But quality matters more than quantity
- **Iterate don't generate** - Build understanding step by step

---

**The best prompt is one that makes you think clearly about what you need.**
