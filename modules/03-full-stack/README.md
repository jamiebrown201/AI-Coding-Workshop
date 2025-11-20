# Module 3: Full-Stack Features

**Duration:** 90 minutes

In this module, we move beyond isolated components and bug fixes to building complete, end-to-end features with AI assistance. You'll tackle the exciting challenge of shipping a full-stack application, integrating frontend and backend, handling real-time data, and making critical architectural decisions that AI can't make for you. It's time to truly "Ship It!" with your AI co-pilot.

## Learning Objectives

By the end of this module, you'll be able to:
- ✓ Build full-stack features from scratch with AI assistance
- ✓ Make architectural decisions AI can't make for you
- ✓ Integrate frontend and backend components
- ✓ Implement real-time data updates
- ✓ Handle errors and edge cases AI commonly forgets
- ✓ Write documentation as you build (not after)
- ✓ Balance speed with quality under time pressure

## Introduction/Scenario

**The Challenge: "Ship It!"**

**Product Context:**
```
As an editorial team member
I want to see real-time engagement metrics for our content
So that I can make data-driven decisions about what to promote

Requirements:
- Real-time updates (via WebSocket or polling)
- Shows last 5 minutes of activity
- Filters by content type (news, opinion, analysis)
- Works on desktop and tablet
- Loads in under 2 seconds
- Gracefully handles API failures
```

## Structure/Activities

- **Phase 1: Planning (10 min)**
- **Phase 2: Backend (20 min)**
- **Phase 3: Frontend (25 min)**
- **Phase 4: Integration & Polish (20 min)**
- **Phase 5: Demo Prep (10 min)**

## Prerequisites

- Completed Modules 1 and 2
- Your AI tool ready to go

## Getting Started

```bash
cd modules/03-full-stack/dashboard-starter
npm install
```

## Key Concepts

- **API Contract:** Define your API contract before writing any code.
- **Component Tree:** Sketch the component tree.
- **Identify Risky Parts:** Identify risky parts of the feature.

## Success Criteria

- [ ] Backend API returns metrics data
- [ ] Frontend displays metrics correctly
- [ ] Real-time updates work
- [ ] Loading states shown
- [ ] Error states handled
- [ ] Basic tests pass
- [ ] README explains how to run
- [ ] You can demo it in 3 minutes
- [ ] Code is readable
- [ ] You understand every line

## Common Pitfalls

**"I'll design as I code"**
- Leads to messy architecture

**"AI will figure out the architecture"**
- AI can't make these decisions

**"Error handling later"**
- "Later" never comes

**"Tests at the end"**
- You'll run out of time

## Resources

- [Architecture Decisions Guide](../../docs/architecture-decisions.md)
- [Error Handling Patterns](../../docs/error-handling-patterns.md)
- [Real-Time Data Guide](../../docs/real-time-data-guide.md)
- [Testing Strategies](../../docs/testing-strategies.md)

## Next Steps

After completing this module:
1. Review your architecture decisions
2. Compare with reference implementation
3. Move on to [Module 4: Code Review & Security](../04-code-review/README.md)

---

**Remember: Architecture is human work. Implementation can be AI-assisted.**
