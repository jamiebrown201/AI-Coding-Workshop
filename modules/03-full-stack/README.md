# Module 3: Full-Stack Features

Build a complete feature from scratch with AI assistance. You'll make architectural decisions, implement frontend and backend, and ship something working under time pressure.

## The Challenge

**User Stories:**

```
As an editorial team member
I want to see real-time engagement metrics for our content
So that I can make data-driven decisions about what to promote

Acceptance Criteria:
- Real-time updates (you choose: WebSocket or polling)
- Filter by content type (news, opinion, analysis)
- Show top performing content
- Handle errors gracefully
- Works on desktop and tablet
```

**Your Mission:** Build this in 90-120 minutes.

📋 **[Full Challenge Details →](./CHALLENGE.md)**

## How to Approach This

This challenge teaches you to **break down problems and use AI at each step**.

### Breaking Down the Challenge

**1. Planning Phase (20-30 min)**
Make architectural decisions BEFORE coding:
- Real-time strategy: WebSocket or polling?
- API contract: What endpoints? What data shape?
- Component tree: What components do you need?

**2. Backend Phase (20-30 min)**
Build your API from the contract you designed.

**3. Frontend Phase (30-40 min)**
Build React components from your component tree.

**4. Integration & Testing (15-20 min)**
Connect everything and verify it works.

**How to use AI at each phase:** The [CHALLENGE.md](./CHALLENGE.md) provides guidance on working with AI for planning, implementation, and debugging. Read it carefully!

**If you get stuck:**
- Refer to the [Writing Good Prompts Guide](../../docs/writing-good-prompts.md) for help on how to structure prompts
- Check [PROMPT_EXAMPLES.md](./PROMPT_EXAMPLES.md) to see example approaches

**After you finish:** If you haven't already, review [PROMPT_EXAMPLES.md](./PROMPT_EXAMPLES.md) to compare your prompts and see what worked well.

## Getting Started

```bash
cd modules/03-full-stack/dashboard-starter

# Backend
cd backend && npm install && npm start

# Frontend (in another terminal)
cd frontend && npm install && npm run dev
```

**Before coding:** Read [CHALLENGE.md](./CHALLENGE.md) for full requirements and planning exercises.

---

**Remember: Plan first, code second. Architecture is human work.**
