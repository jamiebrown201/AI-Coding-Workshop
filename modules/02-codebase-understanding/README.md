# Module 2: Understanding Codebases

After getting your feet wet with basic AI interactions, this module takes you into the trenches of real-world development: deciphering unfamiliar codebases. You'll learn how AI can be an invaluable assistant in understanding legacy systems, mapping architectures, and planning safe refactoring strategies. Get ready to put on your archaeologist hat and dig into some "historical decisions."

## Learning Objectives

By the end of this module, you'll be able to:
- ✓ Use AI to explore and document unfamiliar codebases
- ✓ Create architectural diagrams from code
- ✓ Identify key components and their relationships
- ✓ Recognize when AI makes incorrect assumptions about your code
- ✓ Ask effective questions to understand legacy systems
- ✓ Plan safe refactoring strategies
- ✓ Understand the importance of context quality over quantity

## Introduction/Scenario

This module has two hands-on exercises:

### Activity 2A: Architecture Analysis
Explore a complex legacy backend system and document its architecture.

**Location:** `legacy-code/`

**What you're exploring:** A subscription management system that's been through 5 years and 3 teams. It works, but nobody remembers exactly how.

### Activity 2B: Refactoring Planning
Plan a safe migration strategy for modernizing the legacy jQuery admin interface.

**Location:** `legacy-code/ACTIVITY_2B_REFACTORING.md`

**What you're planning:** Migrating the jQuery-based admin interface (public/admin.html) to React without breaking production. Build on your understanding from Activity 2A.

## Structure/Activities

- **Activity 2A: Architecture Analysis**
- **Activity 2B: Refactoring Planning**

## Getting Started

```bash
cd modules/02-codebase-understanding
```

Start with **Activity 2A** (Architecture Analysis), then move to **Activity 2B** (Refactoring Planning).

### Starting This Module

Tell your AI agent which module you're working on:

```
I'm working on Module 2: Codebase Understanding
The module is in modules/02-codebase-understanding/

I need to analyze the legacy subscription system in the legacy-code/ directory.
```

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

## Success Criteria

You'll know you've succeeded when:
- [ ] You can explain the system architecture to someone else
- [ ] You've identified the key components and their relationships
- [ ] You understand where AI made wrong assumptions
- [ ] You've documented enough for the next person
- [ ] You can plan changes without breaking things

## Common Pitfalls

**"AI said this is how it works"**
- AI makes educated guesses based on patterns

**"This code is bad, let's rewrite it"**
- That "ugly" code might handle critical edge cases

**"I'll skip the documentation"**
- Future you will curse past you

## Resources

- [Exploration Strategies](../../docs/exploration-strategies.md)
- [Context Management Guide](../../docs/context-management.md)
- [Backend Systems Guide](../../docs/backend-systems-guide.md)
- [Refactoring Strategies](../../docs/refactoring-strategies.md)
- [Safe Migrations](../../docs/safe-migrations.md)
- [Testing Legacy Code](../../docs/testing-legacy-code.md)

## Next Steps

After completing this module:
1. Review your architecture diagrams
2. Compare your understanding with the reference docs
3. Reflect on how context quality affected AI's usefulness
4. Move on to [Module 3: Full-Stack Features](../03-full-stack/README.md)

---

**Remember: Understanding messy code is a superpower. AI helps, but you're the archaeologist.**
