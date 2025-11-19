# Module 6: Capstone Challenge

**Duration:** 60 minutes

## The Final Challenge

You've learned the fundamentals, explored codebases, built features, reviewed for security, and discussed team practices. Now it's time to put it all together.

## Product Context

```
As an FT editorial team member
I want to see trending topics based on reader engagement
So that I can make informed decisions about content promotion

Requirements:
- Analyze last 24 hours of article data
- Identify trending topics (rising engagement)
- Show geographic distribution of interest
- Filter by content category (news, opinion, lex, etc.)
- Update every 5 minutes
- Export data for editorial meetings
- Mobile and desktop responsive
```

## Your Mission

Build a complete trending topics feature:
- **Backend:** Data aggregation and analysis
- **Frontend:** Dashboard with visualizations
- **Real-time:** Auto-refresh or WebSocket updates
- **Export:** CSV or JSON download
- **Security:** Proper authentication and authorization
- **Tests:** Comprehensive coverage
- **Documentation:** Production-ready docs

**Time limit:** 60 minutes

**Success = shipped feature** that works, is secure, and someone else can maintain.

## Setup

```bash
cd modules/06-capstone
npm install
```

## What You're Provided

```
06-capstone/
├── data/
│   └── fixtures/
│       ├── article-engagement.json  # Last 24h of data
│       └── topics-dictionary.json   # Topic taxonomy
├── starter/
│   ├── backend/
│   │   └── server.js              # Basic Express setup
│   └── frontend/
│       └── src/
│           └── App.tsx             # Basic React setup
├── requirements.md                 # Detailed requirements
└── README.md                       # This file
```

## Detailed Requirements

### Data Analysis (Backend)

**Must calculate:**
- Article views per topic (last 24h)
- Trending score: `(current_hour_views / previous_hour_views) * weight`
- Geographic distribution by topic
- Top 10 trending topics
- Category breakdown

**API Endpoints needed:**
```
GET  /api/topics/trending
  - Returns top trending topics
  - Query params: ?category=news&limit=10

GET  /api/topics/:topicId
  - Returns detailed analytics for a topic

GET  /api/topics/export
  - Returns CSV or JSON download
  - Includes all trending data
```

**Data structure:**
```typescript
interface TrendingTopic {
  id: string;
  name: string;
  category: string;
  viewsLast24h: number;
  viewsLastHour: number;
  trendingScore: number;
  percentChange: number;
  geographicDistribution: {
    region: string;
    percentage: number;
  }[];
  topArticles: {
    id: string;
    title: string;
    views: number;
  }[];
}
```

### Dashboard (Frontend)

**Must include:**
- **Summary cards:** Total topics tracked, trending topics count
- **Trending list:** Top 10 with change indicators (↑ ↓)
- **Category filter:** Dropdown or tabs
- **Geographic visualization:** Chart or map
- **Article drill-down:** Click topic to see articles
- **Export button:** Download data
- **Auto-refresh:** Update every 5 minutes
- **Loading states:** Skeletons or spinners
- **Error handling:** Graceful failures

**Responsive:**
- Mobile: Stacked cards, scrollable list
- Tablet: 2-column grid
- Desktop: Full dashboard layout

**Accessibility:**
- Keyboard navigation
- Screen reader support
- Color contrast (WCAG AA)
- Focus indicators

### Security Requirements

**Must implement:**
- [ ] Input validation on all endpoints
- [ ] Rate limiting (10 req/min per IP)
- [ ] Authentication (JWT or session)
- [ ] Authorization (only editorial team access)
- [ ] CORS configured properly
- [ ] No SQL injection vulnerabilities
- [ ] No XSS vulnerabilities
- [ ] Error messages don't leak info
- [ ] Security headers set

**Run security checklist before submitting!**

### Testing Requirements

**Backend tests:**
- [ ] Trending score calculation
- [ ] Geographic aggregation
- [ ] Category filtering
- [ ] API endpoint responses
- [ ] Error handling

**Frontend tests:**
- [ ] Topic list renders
- [ ] Filtering works
- [ ] Export function
- [ ] Loading states
- [ ] Error boundaries

**Minimum coverage:** 70%

### Documentation Requirements

**README.md must include:**
- What the feature does
- How to run it locally
- API endpoints and examples
- Environment variables needed
- Testing instructions
- Known limitations
- Future improvements

## Checkpoints

### Checkpoint 1 (20 min): Backend Working
- [ ] Server runs
- [ ] Trending calculation works
- [ ] API returns data
- [ ] Basic tests pass

### Checkpoint 2 (40 min): Full Integration
- [ ] Frontend fetches data
- [ ] Dashboard displays correctly
- [ ] Filtering works
- [ ] Auto-refresh implemented

### Checkpoint 3 (55 min): Polish & Security
- [ ] Security checklist passed
- [ ] Tests comprehensive
- [ ] Documentation complete
- [ ] Ready to demo

## Working Approach

### Strategy 1: Feature-First
1. Get basic functionality working end-to-end
2. Add security and error handling
3. Write tests
4. Polish and document

### Strategy 2: Layer-First
1. Build and test backend completely
2. Build and test frontend completely
3. Integrate
4. Polish

### Strategy 3: Critical Path
1. Identify MVP (minimum viable product)
2. Build only what's essential
3. Get it working and secure
4. Add nice-to-haves if time permits

**Choose your strategy based on your strengths and working style.**

## Using AI Effectively

### Good AI Usage
- ✅ Generate calculation algorithms
- ✅ Create boilerplate API endpoints
- ✅ Scaffold React components
- ✅ Write test cases
- ✅ Generate data transformation code
- ✅ Create documentation templates

### Where You Decide
- ❌ Architecture choices
- ❌ Data structures
- ❌ Security approach
- ❌ What to build vs. skip
- ❌ Trade-offs and priorities

### Remember
- **Context quality matters:** Don't dump everything into AI
- **Understand every line:** You'll need to explain it
- **Security checklist:** Use it religiously
- **Test as you go:** Don't wait until the end

## Evaluation Criteria

**Functionality (30%):**
- Works end-to-end
- Trending calculation correct
- Real-time updates work
- Export feature functions

**Security (25%):**
- Passes security checklist
- No obvious vulnerabilities
- Proper authentication
- Input validation present

**Code Quality (20%):**
- Readable and maintainable
- Proper error handling
- Reasonable architecture
- Team could maintain this

**Testing (15%):**
- Key functionality tested
- Tests actually pass
- Edge cases considered

**Documentation (10%):**
- Clear README
- API documented
- Can someone else run this?

## Demo Format

**3 minutes to present:**
1. **Show it working (90 seconds)**
   - Walk through key features
   - Show it handling errors gracefully

2. **Explain one interesting decision (60 seconds)**
   - Architecture choice
   - Security implementation
   - Performance optimization

3. **What you'd improve (30 seconds)**
   - Given more time
   - In production
   - Lessons learned

## Badges & Recognition

**Awards for:**
- 🏆 **Best Overall Implementation**
- 🔒 **Most Secure**
- 🧪 **Best Test Coverage**
- 🎨 **Best UX**
- 📊 **Most Insightful Algorithm**
- 📚 **Best Documentation**
- ⚡ **Best Performance**
- 🤝 **Best Team Collaboration**

## Collaboration Options

**Solo:** Build it yourself, full control

**Pair:** Split work, pair on complex parts

**Trio:** Divide responsibilities:
- Backend engineer
- Frontend engineer
- QA/documentation/security

**Choose what works for you!**

## Hints

### Trending Algorithm Options

**Simple approach:**
```javascript
trendingScore = (currentHourViews / previousHourViews) * 100
```

**Better approach (considers time decay):**
```javascript
trendingScore = (
  (currentHourViews - previousHourViews) /
  Math.max(previousHourViews, 1)
) * timeDecayFactor
```

**Advanced (considers momentum):**
```javascript
// Calculate velocity and acceleration
velocity = currentHourViews - previousHourViews
acceleration = velocity - previousVelocity
trendingScore = velocity * 0.7 + acceleration * 0.3
```

### Geographic Aggregation

**Use the provided fixture data structure:**
```json
{
  "article_id": "123",
  "views": 1000,
  "regions": {
    "UK": 450,
    "US": 300,
    "EU": 150,
    "APAC": 100
  }
}
```

### Real-time Updates

**Polling (simpler):**
```javascript
useEffect(() => {
  const interval = setInterval(() => {
    fetchTrendingTopics();
  }, 5 * 60 * 1000); // 5 minutes
  return () => clearInterval(interval);
}, []);
```

**WebSocket (better UX):**
```javascript
const ws = new WebSocket('ws://localhost:3000');
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  setTrendingTopics(data);
};
```

## Common Pitfalls

**"I'll perfect one part first"**
- Time runs out before integration
- Get it working end-to-end first

**"Security later"**
- You'll forget
- Build it in from the start

**"AI will handle complexity"**
- AI can't make strategic decisions
- You need to architect, AI implements

**"Tests at the end"**
- No time left
- Tests catch issues early

## Emergency Shortcuts (If Running Out of Time)

**Skip these if needed:**
- WebSocket (use polling)
- Advanced visualizations (use simple charts)
- CSV export (JSON is fine)
- Mobile optimization (desktop only)

**Never skip:**
- Security checklist
- Basic error handling
- Input validation
- Authentication
- Core functionality

## Reference Implementation

**After you finish**, check `solutions/` for a reference implementation.

**Don't cheat yourself!** The struggle is where learning happens.

## Reflection Questions

After completing the capstone:
1. **What went well?**
2. **What was harder than expected?**
3. **How did AI help?**
4. **Where did AI struggle?**
5. **What would you do differently?**
6. **Are you ready to use AI tools in production?**
7. **What will you change about how you work?**

## Key Takeaways

- ✅ You can build complete features with AI assistance
- ❌ But you need to make the important decisions
- ✅ Security and testing are non-negotiable
- ❌ Speed doesn't matter if the code is broken
- ✅ Good planning reduces wasted time
- ❌ AI can't replace understanding
- 📝 The best code is code you can explain and maintain

## Final Thoughts

This capstone is designed to simulate real-world constraints:
- Time pressure
- Unclear requirements
- Multiple concerns (functionality, security, UX)
- Need to make trade-offs
- Balance speed with quality

**You won't finish everything perfectly.** That's realistic. The goal is to deliver something **working, secure, and maintainable** within the time box.

## Next Steps

After the workshop:
1. Review your code against the reference solution
2. Complete anything you didn't finish
3. Apply these practices in your daily work
4. Share learnings with your team
5. Draft team guidelines
6. Measure your actual productivity gains

---

**Good luck! You've got this. 🚀**
