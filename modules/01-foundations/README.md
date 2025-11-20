# Module 1: Foundations & First Steps

**Duration:** 90 minutes

Welcome to the start of your AI coding assistant journey! In this module, we'll dive into the absolute basics of working with AI tools. You'll get hands-on experience generating code, identifying common AI pitfalls (especially around accessibility), and learning how to effectively debug with AI. This is where you'll build the critical foundational skills for interacting with AI confidently and critically.

## Learning Objectives

By the end of this module, you'll be able to:
- ✓ Use AI to generate component boilerplate
- ✓ Identify accessibility issues AI commonly misses
- ✓ Verify AI-generated code against requirements
- ✓ Write effective prompts with clear specifications
- ✓ Recognize when to trust vs. question AI suggestions
- ✓ Use AI tools for debugging assistance
- ✓ Know when AI helps vs. when it confidently misleads

## Introduction/Scenario

This module has two hands-on exercises:

### Exercise 1A: Article Preview Component (35 min)
Build a React component with AI assistance, focusing on accessibility and requirements verification.

**Location:** `exercises/article-preview/`

**What you're building:** An FT article preview component that's accessible, responsive, and follows design standards.

### Exercise 1B: Safari Bug Hunt (35 min)
Debug a browser-specific issue with AI assistance.

**Location:** `exercises/bug-hunt/`

**What you're fixing:** A paywall that mysteriously doesn't work in Safari (but works everywhere else, naturally).

## Structure/Activities

- **Exercise 1A: Article Preview Component (35 min)**
- **Exercise 1B: Safari Bug Hunt (35 min)**

## Prerequisites

- Node.js 18+ installed
- AI coding tool set up
- Repository cloned
- Dependencies installed (`npm install`)

## Getting Started

```bash
cd modules/01-foundations
```

Start with **Exercise 1A** (Article Preview), then move to **Exercise 1B** (Bug Hunt).

Each exercise directory has its own README with detailed instructions.

## Key Concepts

### Context Over Prompts
The most important lesson in this module:

> **More context ≠ Better results**

AI often gets *worse* when given too much context. Your job isn't to give AI everything—it's to give AI the *right* things.

Think about explaining code to a new teammate. You wouldn't show them every file on day one. Same with AI.

**Context engineering > Prompt engineering**

### What AI Does Well
- Boilerplate code generation
- Common patterns and structures
- Syntax and basic logic
- Suggesting debugging approaches

### What AI Misses
- Accessibility requirements (WCAG compliance)
- Edge cases and error handling
- Browser-specific quirks
- Business logic nuances
- Security vulnerabilities

## Success Criteria

You'll know you've succeeded when:
- [ ] You can generate code with AI and explain every line
- [ ] You catch accessibility issues AI missed
- [ ] You understand when to trust AI vs. verify manually
- [ ] You can debug with AI assistance without blind trust
- [ ] You commit code you actually understand

## Common Pitfalls

**"It compiles, ship it!"**
- Just because code runs doesn't mean it's correct
- AI loves to generate code that *looks* right but misses requirements

**"AI said so"**
- AI makes confident mistakes
- Always verify against actual requirements

**"I'll figure it out later"**
- If you don't understand the code now, you won't later
- Commit only code you can explain

**"The whole file"**
- Feeding AI entire files usually makes results worse
- Give focused, relevant context

## Resources

- [Accessibility Checklist](../../docs/accessibility-checklist.md)
- [Effective Prompting Guide](../../docs/effective-prompting.md)
- [Debugging with AI](../../docs/debugging-with-ai.md)
- [Browser-Specific Issues](../../docs/browser-specific-issues.md)

## Next Steps

After completing this module:
1. Review your commit history - can you explain each change?
2. Compare your code with the solutions (no cheating before trying!)
3. Move on to [Module 2: Understanding Codebases](../02-codebase-understanding/README.md)

---

**Remember: Understanding > Speed**
