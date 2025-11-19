# Module 2: Understanding Codebases

**Duration:** 75 minutes

## Learning Objectives

By the end of this module, you'll be able to:
- ✓ Use AI to explore and document unfamiliar codebases
- ✓ Create architectural diagrams from code
- ✓ Identify key components and their relationships
- ✓ Recognize when AI makes incorrect assumptions about your code
- ✓ Ask effective questions to understand legacy systems
- ✓ Plan safe refactoring strategies
- ✓ Understand the importance of context quality over quantity

## The Most Important Lesson

### Context Quality > Prompt Quality

> **More context ≠ Better results**

This might be the most important thing you learn today:

AI often gets **worse** when given too much context. The model can't distinguish signal from noise. Your job isn't to give AI everything—it's to give AI the **right** things.

Think about how you'd explain a codebase to a new teammate. You wouldn't show them every file on day one. You'd start with: "Here's the entry point. This is what happens when a request comes in. Let me show you the key pieces."

**Same with AI.** Start with the entry point (index.js or main router), then expand as needed.

**Context engineering > prompt engineering**. Getting good at providing the right context is more valuable than writing clever prompts.

## Structure

This module has two hands-on exercises:

### Activity 2A: Architecture Analysis (30 min)
Explore a complex legacy backend system and document its architecture.

**Location:** `legacy-code/`

**What you're exploring:** A subscription management system that's been through 5 years and 3 teams. It works, but nobody remembers exactly how.

### Activity 2B: Refactoring Planning (30 min)
Plan a safe migration strategy for modernizing legacy code.

**Location:** `refactoring-challenge/`

**What you're planning:** Migrating a jQuery-based search feature to React without breaking production.

## Prerequisites

- Completed Module 1
- Understanding of Node.js/Express basics
- Familiarity with React (for refactoring exercise)
- Your AI tool ready to go

## Getting Started

```bash
cd modules/02-codebase-understanding
```

Start with **Activity 2A** (Architecture Analysis), then move to **Activity 2B** (Refactoring Planning).

## Key Concepts

### What AI Does Well for Codebase Understanding
- Explaining individual functions and modules
- Identifying patterns and conventions
- Generating documentation from code
- Creating initial architectural diagrams
- Suggesting how components might relate

### What AI Gets Wrong
- **Business logic assumptions** - AI doesn't know your business rules
- **Historical decisions** - AI doesn't know why code is "weird"
- **Dependencies** - AI might miss subtle coupling
- **Edge cases** - That "ugly" code might be critical
- **Context** - AI doesn't know which parts matter most

### Effective Exploration Strategy

**❌ Don't do this:**
```
"Explain this entire codebase"
[dumps 50 files into AI]
```

**✅ Do this instead:**
1. **Start at the entry point**
   - `index.js`, `server.js`, `app.js`
   - Understand the request lifecycle

2. **Follow the path**
   - Pick one feature (e.g., "user subscription")
   - Trace it from endpoint → service → database

3. **Expand deliberately**
   - Ask about specific modules as you encounter them
   - Build mental model incrementally

4. **Document as you go**
   - Don't trust your memory
   - Create diagrams that help others

## Success Criteria

You'll know you've succeeded when:
- [ ] You can explain the system architecture to someone else
- [ ] You've identified the key components and their relationships
- [ ] You understand where AI made wrong assumptions
- [ ] You've documented enough for the next person
- [ ] You can plan changes without breaking things

## Common Pitfalls

**"Just feed AI the whole repo"**
- Too much context makes AI output worse, not better
- The model can't tell what's important
- You'll get generic, surface-level analysis

**"AI said this is how it works"**
- AI makes educated guesses based on patterns
- Your specific business logic is unique
- Always verify against actual behavior

**"This code is bad, let's rewrite it"**
- That "ugly" code might handle critical edge cases
- Rewrites often introduce new bugs
- Understand before you refactor

**"I'll skip the documentation"**
- Future you will curse past you
- Your teammates need this too
- AI can draft docs, but you need to make them accurate

## Working Styles

### Solo Exploration
- Take notes as you explore
- Draw diagrams on paper or digitally
- Test your understanding by explaining it aloud
- Ask AI to challenge your assumptions

### Pair/Group Exploration
- One person navigates, others observe and question
- Rotate roles every 10 minutes
- Compare mental models
- Collaborative diagramming

## Resources

- [Exploration Strategies](docs/exploration-strategies.md)
- [Context Management Guide](docs/context-management.md)
- [Backend Systems Guide](docs/backend-systems-guide.md)
- [Refactoring Strategies](docs/refactoring-strategies.md)
- [Safe Migrations](docs/safe-migrations.md)
- [Testing Legacy Code](docs/testing-legacy-code.md)

## Next Steps

After completing this module:
1. Review your architecture diagrams
2. Compare your understanding with the reference docs
3. Reflect on how context quality affected AI's usefulness
4. Move on to [Module 3: Full-Stack Features](../03-full-stack/)

---

**Remember: Understanding messy code is a superpower. AI helps, but you're the archaeologist.**
