# Module 3: Full-Stack Features

**Duration:** 90 minutes

## Learning Objectives

By the end of this module, you'll be able to:
- ✓ Build full-stack features from scratch with AI assistance
- ✓ Make architectural decisions AI can't make for you
- ✓ Integrate frontend and backend components
- ✓ Implement real-time data updates
- ✓ Handle errors and edge cases AI commonly forgets
- ✓ Write documentation as you build (not after)
- ✓ Balance speed with quality under time pressure

## The Challenge: "Ship It!"

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

## Your Mission

Build a complete feature in 75 minutes:
- **Backend:** API endpoints (Lambda + API Gateway or Express)
- **Frontend:** React dashboard with live updates
- **Data:** Mock data or DynamoDB integration
- **Tests:** At least basic happy path coverage
- **Docs:** README explaining how to run it

**"Working" means:**
- Backend runs and returns data
- Frontend displays data correctly
- Errors don't crash the app
- Someone else can run your code

## Setup

```bash
cd modules/03-full-stack/dashboard-starter
npm install
```

## Structure

```
dashboard-starter/
├── backend/
│   ├── server.js          # Express server (or Lambda handler)
│   ├── routes/
│   │   └── metrics.js     # API endpoints
│   └── services/
│       └── MetricsService.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Dashboard.tsx
│   │   ├── hooks/
│   │   │   └── useMetrics.ts
│   │   └── App.tsx
│   └── package.json
├── fixtures/
│   └── mock-metrics.json  # Sample data
└── README.md
```

## Working Approach

### Phase 1: Planning (10 min)

Before writing ANY code:

1. **Define your API contract**
   ```typescript
   // What does the API return?
   interface Metrics {
     timestamp: string;
     articleViews: number;
     topArticles: Article[];
     geographicDistribution: GeoData[];
   }
   ```

2. **Sketch the component tree**
   ```
   <Dashboard>
     <MetricsSummary />
     <TopArticles />
     <GeographicMap />
     <RealtimeUpdates />
   </Dashboard>
   ```

3. **Identify risky parts**
   - Real-time updates (polling vs WebSocket?)
   - Error handling (API failures?)
   - Performance (large datasets?)

**Submit your plan for quick facilitator review before coding!**

### Phase 2: Backend (20 min)

**Checkpoint at 20 min:** Show your backend

Focus on:
- [ ] API endpoints defined
- [ ] Data structure clear
- [ ] Basic error handling
- [ ] Returns mock data (real integration later)

### Phase 3: Frontend (25 min)

**Checkpoint at 45 min:** Show your frontend

Focus on:
- [ ] Component renders
- [ ] Fetches data from API
- [ ] Displays metrics
- [ ] Updates in real-time (polling every 5s)
- [ ] Shows loading state

### Phase 4: Integration & Polish (20 min)

- [ ] Frontend + backend working together
- [ ] Error states handled
- [ ] Basic tests pass
- [ ] README documents how to run

### Phase 5: Demo Prep (10 min)

- [ ] Test everything works
- [ ] Prepare 3-minute demo
- [ ] Note what you'd improve with more time

## Level-Specific Guidance

### Junior Developers
- Start with pseudocode or written steps
- Break the problem into very small pieces
- Ask AI to explain its architectural decisions
- Question: "Why is it suggesting this structure?"
- **Use the fixtures** - Don't worry about real data yet

### Mid-Level Developers
- Define data structures and API contracts first
- Let AI implement to your specifications
- Focus on integration between components
- Question: "How will these pieces work together?"
- Consider using WebSockets for real-time updates

### Senior Developers
- Consider scalability and extensibility from the start
- Use AI for boilerplate, own the architecture
- Think about operational concerns (monitoring, errors)
- Question: "What happens when this breaks in production?"
- Implement caching, rate limiting, proper error boundaries

## Common Pitfalls

**"I'll design as I code"**
- Leads to messy architecture
- Wasted time refactoring
- Plan first, code second

**"AI will figure out the architecture"**
- AI can't make these decisions
- You need to define structure
- AI fills in implementation

**"Error handling later"**
- "Later" never comes
- Errors are harder to add after
- Build defensive from the start

**"Tests at the end"**
- You'll run out of time
- Tests catch issues early
- Test as you build

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

## Demo Showcase

Each team gets 3 minutes to demo:
1. Show it working (2 min)
2. Explain one interesting technical decision (1 min)

**Badges awarded for:**
- 🏆 Best Error Handling
- 🎨 Most Creative Use of AI
- 🧹 Cleanest Code
- 🤝 Best Team Collaboration
- 📚 Best Documentation

## Reflection Questions

After the exercise:
1. **What was harder than expected?**
2. **What did AI do well?**
3. **What required human judgment?**
4. **Would you approach it differently next time?**
5. **What would you improve with more time?**

## Key Takeaways

- ✅ AI accelerates greenfield development significantly
- ❌ AI can't make architectural decisions
- ✅ Starting with a plan > diving straight into AI code generation
- ❌ AI-generated error handling is usually happy-path only
- ✅ Testing immediately > testing at the end
- ❌ "It works on my laptop" isn't shipped
- 📝 Time pressure reveals where AI helps most (boilerplate) and least (business logic)

## Resources

- [Architecture Decisions Guide](docs/architecture-decisions.md)
- [Error Handling Patterns](docs/error-handling-patterns.md)
- [Real-Time Data Guide](docs/real-time-data-guide.md)
- [Testing Strategies](docs/testing-strategies.md)

## Next Steps

After completing this module:
1. Review your architecture decisions
2. Compare with reference implementation
3. Move on to [Module 4: Code Review & Security](../04-code-review/)

---

**Remember: Architecture is human work. Implementation can be AI-assisted.**
