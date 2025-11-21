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

This challenge teaches you to **break down problems and use AI at each step**:

### 1. Planning Phase (20-30 min)
**Before writing any code**, make these decisions:

- **Real-time strategy**: WebSocket or polling?
- **API contract**: What endpoints? What data shape?
- **Component tree**: What components do you need?

**Using AI for planning:**
```
Prompt: "I'm building a real-time dashboard. Should I use WebSocket or polling?

Context:
- 90 minute time budget
- 5-10 concurrent users
- Data updates every few seconds

Give me pros/cons for THIS specific context."
```

### 2. Backend Phase (20-30 min)
**Build your API** from the contract you designed:

**Using AI for implementation:**
```
Prompt: "Create a GET /metrics/snapshot endpoint in Express.

It should return:
- generatedAt: current timestamp
- totalViews: random number 1000-5000
- topArticles: array of 5 articles

Use mock data (no database needed)."
```

### 3. Frontend Phase (30-40 min)
**Build React components** from your component tree:

**Using AI for components:**
```
Prompt: "Create a React hook called useMetrics that:
- Fetches from http://localhost:4000/metrics/snapshot
- Polls every 3 seconds
- Returns { data, loading, error }
- Handles network errors gracefully"
```

### 4. Integration & Testing (15-20 min)
**Connect everything and verify it works**

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
