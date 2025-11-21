# Module 3 Challenge: Build a Real-Time Analytics Dashboard

## The Mission

**Build a complete full-stack feature from scratch with AI assistance.**

You've learned to debug code (Module 1) and understand existing systems (Module 2). Now it's time to **create something new**. This module tests whether you can:

- Break down a large problem into manageable pieces
- Make architectural decisions AI can't make for you
- Guide AI to implement your vision
- Build quality features under time pressure

---

## Product Requirements

```
As an editorial team member
I want to see real-time engagement metrics for our content
So that I can make data-driven decisions about what to promote

User Stories:
1. As a user, I can see live metrics updating in real-time
2. As a user, I can filter content by type (news, opinion, analysis)
3. As a user, I can see the most engaging topics ranked by activity
4. As a user, I see helpful feedback when things go wrong
5. As a user, I can use this on desktop and tablet

Technical Requirements:
- Real-time updates (WebSocket or polling - you decide!)
- Backend API serving metrics data
- React frontend with TypeScript
- Graceful error handling
- Loading states
- Fast page loads (<2s)
- Responsive design

Out of Scope (for now):
- User authentication
- Data persistence (in-memory is fine)
- Historical data / charts
- Mobile phone support
```

**Design Discretion**: You have full creative control over the UI/UX. We're focused on functionality and best practices, not pixel-perfect design. _(Future versions of this workshop may include design mockups)_

---

## Time Budget: 90-120 Minutes

- **Planning**: 20-30 min
- **Backend**: 20-30 min
- **Frontend**: 30-40 min
- **Integration & Testing**: 15-20 min
- **Buffer**: 10 min

**This is tight!** You won't have time to gold-plate. Ship something that works.

---

## Phase 1: Planning (20-30 min)

### ⚠️ Critical: Don't Skip This Phase

**"I'll figure it out as I code"** is how you end up with spaghetti architecture that takes 3x longer to fix.

### What You Need to Decide (AI Cannot Decide This For You)

#### 1. **Real-Time Strategy**

Option A: **WebSocket (Server Push)**
- ✅ True real-time, instant updates
- ✅ Efficient (server pushes only when data changes)
- ❌ More complex to implement
- ❌ Needs WebSocket library

Option B: **Polling (Client Pull)**
- ✅ Simple to implement (just `setInterval`)
- ✅ Uses standard HTTP (no special libraries)
- ❌ Less efficient (constant requests)
- ❌ Not "true" real-time (delays between polls)

**Your Decision**: _________

**Why this choice?**: _________

**AI Prompt to Try**:
```
I'm building a real-time dashboard. Should I use WebSockets or polling?

Context:
- 90 minute time budget
- Need something working quickly
- 5-10 concurrent users (workshop demo)
- Data updates every few seconds

Give me pros/cons for each approach in THIS specific context.
```

<details>
<summary>💡 Hint: What Would I Choose?</summary>

For a 90-minute workshop? **Polling**. It's simpler, faster to implement, and works fine for small scale. WebSockets are great for production, but add complexity you don't need right now.

Focus on shipping first, optimizing later.
</details>

---

#### 2. **API Contract**

Define your API **before** writing any code. This is your contract between frontend and backend.

**Example API Design**:

```typescript
// GET /metrics/snapshot
{
  generatedAt: string;  // ISO timestamp
  totalViews: number;
  activeUsers: number;
  topArticles: Array<{
    title: string;
    views: number;
    category: 'news' | 'opinion' | 'analysis';
  }>;
}

// GET /metrics/topics
{
  topics: Array<{
    name: string;
    mentions: number;
    trend: 'up' | 'down' | 'stable';
  }>;
}
```

**Your API Design**:

```
// Write your API contract here
// What endpoints?
// What data shape?
// What error responses?
```

**Questions to Answer**:
- How many endpoints do you need?
- Should data be nested or flat?
- What happens when there's no data yet?
- What HTTP status codes will you use?

**AI Prompt to Try**:
```
I need to design a REST API for an analytics dashboard.

Requirements:
- Show overall metrics (views, users)
- Show top content by engagement
- Filter by content type
- Support real-time updates

What endpoints should I create?
What should the response data structure look like?
```

<details>
<summary>⚠️ Watch Out For</summary>

AI might over-engineer this! You don't need:
- Pagination (small dataset)
- Complex filtering (keep it simple)
- Versioning (/v1/metrics)
- Authentication (not in scope)

Push back if AI suggests these. You have 90 minutes!
</details>

---

#### 3. **Component Tree**

Sketch your React component structure. Don't let AI decide this—this is **architecture**, which is human work.

**Example Component Tree**:

```
<App>
  ├─ <Header>
  │   ├─ Title
  │   └─ RefreshIndicator
  │
  ├─ <MetricsOverview>
  │   ├─ <MetricCard> (total views)
  │   ├─ <MetricCard> (active users)
  │   └─ <MetricCard> (engagement rate)
  │
  ├─ <ContentFilter>
  │   └─ Filter buttons (all, news, opinion, analysis)
  │
  └─ <TopContentList>
      └─ <ContentItem> (repeated)
```

**Your Component Tree**:

```
// Draw your component tree here
// Which components?
// What props do they receive?
// Which components manage state?
```

**Questions to Ask Yourself**:
- Which component should fetch data? (Hint: Usually top-level)
- Which components are "dumb" (just display props)?
- Which components are "smart" (manage state)?
- Where does filtering logic live?

---

#### 4. **Risk Assessment**

What are the riskiest parts of this feature? Where will you most likely get stuck?

**Common Risks**:
- [ ] Real-time updates not working
- [ ] CORS errors (backend/frontend on different ports)
- [ ] TypeScript type errors in frontend
- [ ] Error handling (network failures)
- [ ] State management (multiple sources of data)
- [ ] Performance (too many re-renders)

**Your Top 3 Risks**:

1. _______________
2. _______________
3. _______________

**Mitigation Plan**: For each risk, how will you tackle it?

---

### Planning Deliverable: Create PLAN.md

Before writing ANY code, create a `PLAN.md` file with:

1. ✅ Real-time strategy chosen (and why)
2. ✅ API contract defined (endpoints + data shapes)
3. ✅ Component tree sketched
4. ✅ Risk assessment + mitigation
5. ✅ Task breakdown (what order will you build things?)

**AI Can Help With**: Brainstorming options, suggesting patterns, spotting edge cases

**AI Cannot Help With**: Making the final decisions (that's your job!)

**Example Task Breakdown**:
```
Phase 2: Backend (20-30 min)
  ☐ Set up Express server with CORS
  ☐ Create /metrics/snapshot endpoint
  ☐ Create /metrics/topics endpoint
  ☐ Add mock data generator
  ☐ Test with curl/Postman

Phase 3: Frontend (30-40 min)
  ☐ Create useMetrics hook for data fetching
  ☐ Build MetricCard component
  ☐ Build Dashboard layout
  ☐ Add filtering logic
  ☐ Add loading states
  ☐ Add error handling

Phase 4: Integration (15-20 min)
  ☐ Connect frontend to backend
  ☐ Test real-time updates
  ☐ Fix CORS if needed
  ☐ Test error scenarios
  ☐ Manual smoke test
```

---

## Phase 2: Backend Development (20-30 min)

You have a starter server in `dashboard-starter/backend/`. It's minimal—just Express with CORS.

### Your Tasks

1. **Implement API endpoints** from your contract
2. **Generate mock data** (you don't need a real database)
3. **Handle errors** gracefully
4. **Test each endpoint** (use curl, Postman, or browser)

### Working with AI: Backend Edition

**Good Prompts**:

```
I need to create a GET /metrics/snapshot endpoint in Express.

It should return:
- generatedAt: current timestamp
- totalViews: random number 1000-5000
- activeUsers: random number 50-200
- topArticles: array of 5 articles with title, views, category

The data should be randomly generated (no database needed).
```

```
My /metrics/snapshot endpoint should return different data each time it's called
to simulate real-time changes. How can I generate realistic random data?
```

**Watch Out For**:

❌ **AI suggests adding a database**: You don't need one! In-memory data is fine.
- Push back: "I only have 30 minutes. In-memory mock data is sufficient."

❌ **AI suggests complex authentication**: Not in scope.
- Push back: "No auth needed for this workshop. Skip it."

❌ **AI creates too many files**: Keep it simple.
- Push back: "Can we keep this in one file for now? I want to ship quickly."

### Testing Your Backend

Before moving to frontend, verify your API works:

```bash
# Test health check
curl http://localhost:4000/health

# Test metrics endpoint
curl http://localhost:4000/metrics/snapshot

# Test topics endpoint
curl http://localhost:4000/metrics/topics
```

**Success Criteria**:
- ✅ Server starts without errors
- ✅ All endpoints return 200 OK
- ✅ Data shape matches your API contract
- ✅ Data changes on each request (if using mock data)
- ✅ CORS headers present

---

## Phase 3: Frontend Development (30-40 min)

You have a starter React + TypeScript app in `dashboard-starter/frontend/`. It has Vite set up and basic styling.

### Your Tasks

1. **Create data fetching logic** (hook or service)
2. **Build components** from your component tree
3. **Implement filtering** (by content type)
4. **Add loading states** ("Loading...")
5. **Add error states** ("Failed to load data")
6. **Make it responsive** (desktop + tablet)

### Working with AI: Frontend Edition

**Good Prompts**:

```
I need a React hook called useMetrics that:
- Fetches data from http://localhost:4000/metrics/snapshot
- Polls every 3 seconds for updates
- Returns { data, loading, error }
- Handles network errors gracefully

Use TypeScript. Show me the full implementation.
```

```
I need a MetricCard component that displays:
- A label (e.g., "Total Views")
- A large number value
- An optional trend indicator (up/down arrow)

It should be styled with CSS to look like a card with shadow and padding.
Make it responsive (stack on mobile, row on desktop).
```

**Watch Out For**:

❌ **AI suggests complex state management** (Redux, Zustand, etc.): You don't need it!
- Push back: "React's useState is sufficient for this simple app."

❌ **AI uses class components**: You want functional components with hooks.
- Push back: "Use functional components with hooks, not class components."

❌ **AI suggests UI libraries** (Material-UI, Ant Design, etc.): Adds complexity.
- Push back: "Write plain CSS. No UI library needed."

❌ **AI writes tests for every component**: You don't have time!
- Push back: "Skip tests for now. Focus on making it work first."

### Component Implementation Order

**Build components in this order** (bottom-up):

1. **Dumb components first** (MetricCard, ContentItem)
   - No state, just props
   - Easy to build and test
   - AI is great at these

2. **Smart components next** (Dashboard, App)
   - Manage state
   - Handle data fetching
   - Coordinate dumb components

3. **Add interactions last** (filtering, sorting)
   - Once display is working
   - Easier to debug when basics work

### Debugging Frontend Issues

**Common Problems**:

| Problem | Solution |
|---------|----------|
| "CORS error" | Check backend has `cors()` middleware |
| "Cannot read property of undefined" | Add optional chaining: `data?.field` |
| "Too many re-renders" | Check useEffect dependencies |
| "Data not updating" | Check polling interval is working |
| "TypeScript errors" | Define interfaces for your data shapes |

---

## Phase 4: Integration & Testing (15-20 min)

Now connect everything and make sure it works end-to-end.

### Integration Checklist

- [ ] **Start both servers** (backend on 4000, frontend on 5173)
- [ ] **Verify connection** (open browser, check Network tab)
- [ ] **Test real-time updates** (data should change automatically)
- [ ] **Test filtering** (click filter buttons, verify results)
- [ ] **Test error handling** (stop backend, see error message)
- [ ] **Test loading states** (refresh page, see loading indicator)
- [ ] **Test responsive design** (resize browser window)

### Manual Testing Scenarios

**Scenario 1: Happy Path**
1. Start backend and frontend
2. Open http://localhost:5173
3. ✅ Dashboard loads and shows metrics
4. ✅ Metrics update every few seconds
5. ✅ Filtering works correctly

**Scenario 2: Backend Failure**
1. Frontend is running
2. Stop the backend server
3. ✅ Frontend shows error message (not a crash!)
4. ✅ Error message is user-friendly
5. Start backend again
6. ✅ Frontend recovers automatically

**Scenario 3: Slow Network**
1. Open Chrome DevTools → Network tab
2. Throttle to "Slow 3G"
3. ✅ Loading states show correctly
4. ✅ App doesn't freeze while loading
5. ✅ App is still usable (doesn't block user)

### Working with AI: Debugging Edition

**Good Prompts**:

```
I'm getting a CORS error when my React app calls my Express backend.

Frontend: http://localhost:5173
Backend: http://localhost:4000

The error is: "Access to fetch has been blocked by CORS policy"

What's wrong and how do I fix it?
```

```
My useEffect hook is causing infinite re-renders. Here's the code:
[paste code]

What's wrong with the dependency array?
```

**Watch Out For**:

❌ **AI suggests complex debugging tools**: You need simple fixes fast.
- Push back: "Give me the simplest solution first."

❌ **AI wants to refactor working code**: Don't fix what ain't broke!
- Push back: "It works now. Let's move on to the next task."

---

## Success Criteria

Before you consider this module complete, verify:

### Functionality
- [ ] Backend API returns metrics data
- [ ] Frontend displays metrics correctly
- [ ] Real-time updates work (data changes automatically)
- [ ] Filtering works (can filter by content type)
- [ ] Loading states show when fetching data
- [ ] Error states show when backend is down
- [ ] App recovers when backend comes back online

### Code Quality
- [ ] Code is readable (clear variable names, logical structure)
- [ ] No TypeScript errors
- [ ] No console errors in browser
- [ ] Components are reasonably sized (not 500-line monsters)
- [ ] API contract is documented (in PLAN.md or README)

### Understanding
- [ ] You can explain how real-time updates work
- [ ] You can explain how data flows from backend to frontend
- [ ] You can explain what each component does
- [ ] You could add a new feature without AI's help
- [ ] You understand every line of code (no "magic")

### Demo-Ready
- [ ] You can start both servers with one command
- [ ] README explains how to run the project
- [ ] You can demo the feature in 2 minutes
- [ ] It works on someone else's machine (not just yours!)

---

## Common Pitfalls & How to Avoid Them

### Pitfall 1: "I'll design as I code"

**Why it's bad**: You'll write code, realize the architecture is wrong, delete it, start over. Waste of time.

**Solution**: Spend 20 minutes planning. It saves 40 minutes of refactoring.

---

### Pitfall 2: "AI will figure out the architecture"

**Why it's bad**: AI is great at implementation, terrible at architecture. It will suggest patterns without understanding your constraints (time, complexity, team skill).

**Solution**: You make architectural decisions. AI helps implement them.

---

### Pitfall 3: "Error handling later"

**Why it's bad**: "Later" never comes. You'll demo your project and it crashes when the backend is down.

**Solution**: Add error states as you build each component. It takes 2 minutes per component.

---

### Pitfall 4: "Tests at the end"

**Why it's bad**: You'll run out of time and ship untested code.

**Solution**: Do manual testing as you build. You don't need automated tests yet, but verify each piece works before moving on.

---

### Pitfall 5: "Let AI write everything"

**Why it's bad**: You won't understand the code. You can't fix bugs or add features later.

**Solution**: Read every line AI writes. Ask "why this approach?" If you don't understand, ask AI to explain or simplify.

---

### Pitfall 6: "Make it perfect"

**Why it's bad**: Perfect is the enemy of done. You have 90 minutes.

**Solution**: Ship something that works, not something perfect. You can refactor later.

---

## Reflection Questions

After completing the challenge, answer these:

### 1. Planning
- **Did your API contract change during implementation?** Why?
- **Did your component tree match what you actually built?** What changed?
- **What risks did you identify correctly?** What surprised you?

### 2. Working with AI
- **Where did AI help the most?** (e.g., boilerplate code, fixing TypeScript errors)
- **Where did AI struggle?** (e.g., architecture decisions, debugging)
- **How many times did you push back on AI's suggestions?** Why?
- **Did AI suggest any "clever" solutions that were actually bad ideas?**

### 3. Technical Decisions
- **Real-time strategy: Would you make the same choice again?** Why or why not?
- **What would you do differently if you had 3 hours instead of 90 minutes?**
- **What would you do differently for 1000 concurrent users?**

### 4. Code Quality
- **Is there any code you don't understand?** What is it and why?
- **What's the messiest part of your code?** How would you refactor it?
- **Did you skip any error handling?** Where and why?

### 5. Process
- **Did you finish in 90 minutes?** If not, what took longer than expected?
- **What was the hardest part?** The easiest?
- **If you did this again, what would you do differently?**

---

## Stretch Goals (If You Finish Early)

### Easy Wins (5-10 min each)
- [ ] Add a "last updated" timestamp
- [ ] Add keyboard shortcuts (press 'r' to refresh)
- [ ] Add a favicon
- [ ] Improve the styling (make it prettier)

### Medium Challenges (15-20 min each)
- [ ] Add sorting (sort content by views, title, category)
- [ ] Add a search box (filter by article title)
- [ ] Add chart/visualization (simple bar chart of top articles)
- [ ] Switch from polling to WebSockets (if you used polling)

### Hard Challenges (30+ min)
- [ ] Add unit tests (for one component or hook)
- [ ] Add E2E tests (Cypress or Playwright)
- [ ] Deploy to production (Vercel + Railway/Render)
- [ ] Add historical data (store metrics over time)

---

## Resources

### Documentation
- [Express.js Docs](https://expressjs.com/)
- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### Patterns to Research
- **Polling Pattern**: `setInterval` + `fetch`
- **Error Boundaries**: Catch React errors gracefully
- **Loading States**: Show spinners while fetching
- **Optimistic Updates**: Update UI before API responds

### Example AI Prompts (Collection)

**When planning**:
- "What are pros/cons of WebSocket vs polling for [specific use case]?"
- "Suggest 3 different API designs for [specific feature]"
- "What edge cases should I handle in [specific feature]?"

**When building**:
- "Implement [component] with [specific requirements]"
- "Fix this TypeScript error: [error message]"
- "Explain why this code causes infinite re-renders: [code]"

**When debugging**:
- "I'm getting this error: [error]. Here's my code: [code]. What's wrong?"
- "My component re-renders too often. How do I optimize it?"
- "This works in development but breaks in production. Why?"

---

## Deliverables

Submit (or demo) these artifacts:

### Required
1. **PLAN.md** - Your planning document
   - API contract
   - Component tree
   - Risk assessment
   - Task breakdown

2. **Working Application**
   - Backend running on port 4000
   - Frontend running on port 5173
   - Can demonstrate all requirements

3. **README.md** - How to run your project
   ```
   # How to Run

   ## Backend
   cd backend
   npm install
   npm start

   ## Frontend
   cd frontend
   npm install
   npm run dev

   ## Access
   Open http://localhost:5173
   ```

4. **REFLECTION.md** - Answer reflection questions
   - What went well
   - What was hard
   - What you learned
   - How you used AI

### Optional (Stretch)
5. **Tests** - If you wrote any
6. **Deployment URL** - If you deployed it

---

## Evaluation Rubric

### Does It Work? (50%)
- ✅ Backend API functional
- ✅ Frontend displays data correctly
- ✅ Real-time updates work
- ✅ Filtering works
- ✅ Error handling present
- ✅ Loading states present

### Code Quality (25%)
- ✅ Code is readable
- ✅ Components are reasonably sized
- ✅ No major code smells
- ✅ TypeScript types used correctly
- ✅ Logical file structure

### Understanding (15%)
- ✅ Can explain architectural decisions
- ✅ Can explain how data flows
- ✅ Understands trade-offs made
- ✅ Documented in PLAN.md

### Process (10%)
- ✅ Did planning before coding
- ✅ Used AI effectively (not blindly)
- ✅ Completed in time budget
- ✅ Reflection shows learning

---

## Tips for Success

### Time Management
⏱️ **Set a timer for each phase**. If you're over time, move on anyway. Better to have something half-finished than nothing at all.

### AI Collaboration
🤖 **Treat AI like a junior developer**: Good at implementation, needs guidance on architecture. You're the senior engineer making decisions.

### Scope Management
✂️ **Cut features ruthlessly**. If you're behind schedule, drop the least important feature. Filtering can wait. Error handling cannot.

### Debugging Strategy
🐛 **Console.log is your friend**. When something doesn't work, log everything. Where is data undefined? Where does the flow break?

### Ask for Help
🙋 **Stuck for >15 minutes?** Ask a facilitator, classmate, or try a different approach. Don't waste time being stuck.

---

## Next Steps

After completing this challenge:

1. **Do a code review** with a peer (Module 4 practice!)
2. **Compare approaches** - Did others choose WebSocket or polling? Why?
3. **Refactor one thing** - Pick the messiest code and clean it up
4. **Move to Module 4** - Code Review & Security

---

**Remember: The goal isn't perfect code. The goal is learning to build real features with AI assistance in realistic time constraints.**

**Ship it. Learn from it. Iterate on it.**

🚀 **Good luck!**
