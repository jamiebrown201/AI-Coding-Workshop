# Prompt Examples for Module 3: Full-Stack Development

**⚠️ Only look at this file AFTER you've tried writing your own prompts!**

These examples show effective prompts for building a full-stack feature from scratch. Compare them with what you wrote to learn what works well.

---

## Planning Phase Examples

### Example 1: Exploring Architecture Decisions

```
I'm building a real-time analytics dashboard showing engagement metrics
for editorial content. I need to decide on the real-time update strategy.

Context:
- 90 minute time budget (need something working quickly)
- 5-10 concurrent users (small scale demo)
- Data updates every few seconds
- Using Express backend + React frontend
- First time implementing real-time features

Should I use WebSockets or polling? For THIS specific context, give me:
1. Pros and cons of each approach
2. Implementation complexity (time to build)
3. Which would you recommend and why
```

**What makes this good:**
- ✅ Provides full context (time, scale, tech stack, experience level)
- ✅ Asks for specific comparison
- ✅ Requests recommendation WITH reasoning
- ✅ Emphasizes "THIS specific context" (not generic advice)

---

### Example 2: Designing API Contract

```
I'm building a real-time dashboard backend API that serves engagement metrics.

I need to design my API endpoints. The frontend needs:
- Overall metrics (total views, active users)
- Top performing articles (title, views, category)
- Data updates every 3 seconds

What endpoints should I create? For each endpoint, suggest:
1. HTTP method and path
2. Response data structure (JSON)
3. Any query parameters needed

Keep it simple - I have 30 minutes to implement this.
```

**What makes this good:**
- ✅ Describes what the frontend needs (not just "design an API")
- ✅ Requests specific format (method, path, structure)
- ✅ States time constraint (influences complexity)
- ✅ Asks for actionable output

---

### Example 3: Planning Component Structure

```
I need to design the React component structure for a dashboard that:
- Displays metrics cards (views, users, engagement rate)
- Has a content filter (all, news, opinion, analysis)
- Shows a list of top articles
- Updates in real-time via polling

What components should I create? For each component:
1. What props does it receive?
2. Does it manage state or is it presentational?
3. Which component fetches the data?

Suggest a component tree structure.
```

**What makes this good:**
- ✅ Lists all features clearly
- ✅ Asks about architecture (props, state, data flow)
- ✅ Requests visual structure (component tree)
- ✅ Focuses on design, not implementation yet

---

## Backend Phase Examples

### Example 4: Implementing API Endpoint

```
Create a GET /metrics/snapshot endpoint in Express that returns
real-time engagement metrics.

Requirements:
- generatedAt: ISO timestamp of when data was generated
- totalViews: random number between 1000-5000
- activeUsers: random number between 50-200
- topArticles: array of 5 objects, each with:
  - id (number)
  - title (string)
  - views (number)
  - category ('news' | 'opinion' | 'analysis')

Use in-memory mock data (no database). Make the data change each
time the endpoint is called to simulate real-time updates.

Show the complete route handler code.
```

**What makes this good:**
- ✅ Specifies exact endpoint (method + path)
- ✅ Details every field in response
- ✅ Provides data types and constraints
- ✅ Clarifies mock data approach
- ✅ Explains why data should change (real-time simulation)

---

### Example 5: Adding Error Handling

```
I have an Express endpoint that generates random metrics. Add error
handling for:
1. Invalid requests (wrong HTTP method)
2. Server errors (if data generation fails)
3. CORS issues (frontend on different port)

Here's my current code:
[paste code]

Show the updated code with proper error handling and explain each
error case.
```

**What makes this good:**
- ✅ Lists specific error scenarios
- ✅ Includes current code for context
- ✅ Requests explanations (learning, not just code)

---

## Frontend Phase Examples

### Example 6: Creating Data Fetching Hook

```
Create a React custom hook called useMetrics for fetching dashboard data.

Requirements:
- Fetches from http://localhost:4000/metrics/snapshot
- Polls every 3 seconds for updates (not just fetch once)
- Returns: { data, loading, error, refetch }
- Handles network errors gracefully (doesn't crash app)
- Cleans up polling when component unmounts
- Uses TypeScript

Show the complete hook implementation with proper types.
```

**What makes this good:**
- ✅ Specifies exact hook behavior
- ✅ Lists return values explicitly
- ✅ Mentions edge cases (cleanup, errors)
- ✅ States tech requirements (TypeScript)

---

### Example 7: Building React Component

```
Create a MetricsCard React component that displays a single metric.

Props:
- label: string (e.g., "Total Views")
- value: number (e.g., 1234)
- trend?: 'up' | 'down' | 'neutral' (optional)

Styling:
- Card with shadow and padding
- Large number display for value
- Trend indicator (↑ green, ↓ red, — gray)
- Responsive (stack on mobile, row on desktop)

Use plain CSS (no UI libraries). Show complete component code.
```

**What makes this good:**
- ✅ Defines prop interface clearly
- ✅ Provides examples of prop values
- ✅ Specifies styling requirements
- ✅ States constraints (no libraries)

---

### Example 8: Implementing Filtering Logic

```
I have a dashboard showing articles. Add client-side filtering by category.

Current state:
- articles: array of {id, title, views, category}
- selectedCategory: string ('all' | 'news' | 'opinion' | 'analysis')

When selectedCategory changes:
1. Filter articles array by matching category
2. If 'all', show all articles
3. Update displayed list

Show the filtering logic and how to integrate with existing component.
```

**What makes this good:**
- ✅ Describes current state structure
- ✅ Specifies filtering behavior
- ✅ Handles edge case ('all' category)
- ✅ Asks about integration (not just isolated code)

---

## Integration & Debugging Examples

### Example 9: Debugging CORS Error

```
My React frontend (http://localhost:5173) can't fetch from my Express
backend (http://localhost:4000).

Error in browser console:
"Access to fetch at 'http://localhost:4000/metrics/snapshot' from origin
'http://localhost:5173' has been blocked by CORS policy"

I have cors() middleware in my Express app:
[paste server.js code]

What's wrong and how do I fix it?
```

**What makes this good:**
- ✅ States both frontend and backend URLs
- ✅ Includes exact error message
- ✅ Shows current CORS configuration
- ✅ Clear question

---

### Example 10: Debugging State Updates

```
My useMetrics hook fetches data, but the component doesn't re-render
when new data arrives.

Expected: Metrics update every 3 seconds
Actual: Shows initial data, then never updates

Here's my hook code:
[paste useMetrics code]

Here's how I'm using it:
[paste component code]

What's wrong with my state management?
```

**What makes this good:**
- ✅ Expected vs actual behavior
- ✅ Includes both hook and usage code
- ✅ Specific hypothesis (state management)

---

## Common Patterns in Good Prompts

Notice all these prompts:
1. **Start with context** - What you're building, tech stack, constraints
2. **Be specific about requirements** - Not "create a component" but "create X with props Y"
3. **Show current code when relevant** - Helps AI understand your setup
4. **State time/complexity constraints** - "90 minutes" or "keep it simple"
5. **Request explanations** - "Show code AND explain why"
6. **Handle edge cases** - Error states, cleanup, empty data

---

## Reflection: Compare With Your Prompts

**Questions to consider:**
- Did your prompts include enough context?
- Were your requirements specific enough?
- Did you ask for explanations or just code?
- Which of your prompts got the best AI responses?
- What will you do differently in future projects?

---

## Remember

These are **examples**, not templates to copy. Your prompts will differ based on:
- Your specific feature requirements
- Your tech stack choices
- Your architectural decisions
- Problems you encounter

The goal is to learn the **patterns** that make prompts effective, not memorize specific prompts.

Good prompting is a skill that improves with practice! 🚀
