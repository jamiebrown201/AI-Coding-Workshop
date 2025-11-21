# Activity 2B: Refactoring Planning

## From Understanding to Improving

**Prerequisites:** Complete Activity 2A (Architecture Analysis) first!

Now that you've mapped out the subscription management system, it's time to plan some improvements. Your tech lead has flagged several areas that need refactoring.

---

## The Challenge

You've just completed your architecture analysis and discovered several issues:

- JSON file storage instead of a real database
- No authentication middleware applied
- Legacy jQuery throughout the frontend (`public/index.html` and `public/admin.html`)
- Inconsistent pricing logic
- No webhook signature validation

**Your tech lead says:** "Great analysis! Now let's plan how to fix some of this. Start with the admin interface (`admin.html`) - that jQuery code is from 2019 and it's blocking new features. The user subscription page (`index.html`) also has jQuery but that's simpler - focus on the admin panel first."

---

## Product Context

```
As the engineering team
We need to modernize the legacy admin interface
So that we can add new features without fighting jQuery spaghetti

Background:
The subscription admin panel (public/admin.html) was built in 2019 with jQuery.
It works, but:
- 300+ lines of jQuery in one HTML file
- Adding new filters requires touching global variables everywhere
- No component structure - everything is in one big soup
- New team members struggle to add features
- Testing is nearly impossible (jQuery DOM manipulation)

The team has decided to refactor to modern React incrementally.

Technical Requirements:
- Maintain all current features (filtering, sorting, pagination, CSV export)
- Make it extensible for upcoming features
- Zero downtime during migration
- Can use the existing API at /api/subscriptions
- Can't do a big-bang rewrite
```

---

## Your Mission

Create a **refactoring plan** that:

1. **Identifies what to refactor** (and what to leave alone)
2. **Proposes a safe migration strategy** (incremental, not big-bang)
3. **Defines testing approach** (how do we know nothing broke?)
4. **Assesses risks** (what could go wrong?)
5. **Plans rollback strategy** (if things go sideways)

**This is a planning exercise** - you're not writing the code yet. You're thinking through the strategy.

---

## Using AI for Refactoring Planning

### ⚠️ Critical: AI Loves "Rewrite Everything"

AI tools will often suggest:

- "Let's rewrite this from scratch!"
- "Replace all jQuery with React"
- "Modernize the entire stack"

**These are usually bad ideas.** Big-bang rewrites:

- Take longer than expected
- Break subtle behaviors users depend on
- Are hard to test comprehensively
- Have no rollback plan

**Your job:** Use AI to explore options, but make safe, incremental decisions.

### How to Use AI Effectively

**Phase 1: Understand Current State**

```
Prompt: "I'm working on the Refactoring Planning exercise in
modules/02-codebase-understanding/legacy-code/

I need to refactor this jQuery-based admin interface at public/admin.html.

Looking at this code, what are the current features and what state
management patterns is it using?"
```

**Phase 2: Explore Refactoring Approaches**

```
Prompt: "I'm working on the Refactoring Planning exercise in
modules/02-codebase-understanding/legacy-code/

What are 3 different approaches for migrating this jQuery interface
to React incrementally (not a big-bang rewrite)?

For each approach:
- What gets refactored first?
- How do we ensure nothing breaks?
- What are the risks?

Focus on INCREMENTAL migration strategies."
```

**Phase 3: Risk Assessment**

```
Prompt: "I'm working on the Refactoring Planning exercise in
modules/02-codebase-understanding/legacy-code/

For this jQuery to React migration, what are the highest-risk areas?

Consider:
- User behaviors we might break
- State management edge cases
- API integration points
- Browser compatibility
- Performance implications

What should we test most carefully?"
```

**Phase 4: Testing Strategy**

```
Prompt: "I'm working on the Refactoring Planning exercise in
modules/02-codebase-understanding/legacy-code/

Before we start refactoring this admin interface, what tests should
we write to ensure we don't break anything?

Consider:
- What behaviors should be captured in tests first?
- What's the minimum test coverage needed?
- How do we test jQuery behavior?
- What integration tests do we need?"
```

---

## What to Deliver

Create a **Refactoring Plan** document that includes:

### 1. Current State Analysis

- What does the current jQuery code do?
- What are its biggest problems?
- What's working well (don't break this!)?

### 2. Refactoring Strategy

Choose ONE approach and document:

- **Phase 1:** What gets refactored first? Why?
- **Phase 2:** What's next? How does it build on Phase 1?
- **Phase 3:** Final steps to complete migration

### 3. Testing Strategy

- **Before refactoring:** What tests do we write first?
- **During refactoring:** How do we verify each step?
- **After refactoring:** Final validation approach
- **Regression tests:** How do we catch breaking changes?

### 4. How You Used AI

Document your AI interaction process:

- **What prompts did you use?** Share the most useful prompts
- **What did AI suggest?** List AI's recommendations
- **What did you accept?** Which suggestions were good?
- **What did you reject?** Where did AI suggest risky approaches?
- **Where did you push back?** How did you guide AI to better suggestions?
- **What did you verify?** What claims did you fact-check against the code?

This reflection helps you understand how to use AI effectively for planning.

---

## Example Refactoring Strategies

### Strategy 1: Strangler Fig (Recommended)

**Phase 1: Setup (1-2 days)**

- Add React to the page alongside jQuery
- Set up build process for React components
- Write E2E tests for current jQuery behavior
- No user-facing changes yet

**Phase 2: Extract Filters Component (3-4 days)**

- Build React filters component
- Feature flag to switch between jQuery and React filters
- Test with small percentage of users
- Rollback if issues found

**Phase 3: Extract Table Component (4-5 days)**

- Build React table with sorting/pagination
- Gradually migrate users to React table
- Monitor performance and errors

**Phase 4: Final Migration (2-3 days)**

- Remove jQuery code
- Clean up feature flags
- Optimize React implementation

**Total:** ~2-3 weeks with buffer

### Strategy 2: Complete Parallel Build

**Phase 1: Build Complete React Version (2 weeks)**

- Build full admin interface in React
- Deploy behind feature flag
- Zero users see it initially

**Phase 2: Testing (1 week)**

- Internal testing with team
- Beta testing with 5% of users
- Compare behavior with jQuery version

**Phase 3: Migration (1 week)**

- Gradually increase React traffic: 10%, 25%, 50%, 100%
- Monitor metrics at each step
- Easy rollback to jQuery if needed

**Total:** ~4 weeks

---

## Common Pitfalls

**"It works on my machine"**

- Test with production data (large datasets, edge cases)
- Test with real user workflows
- Test in different browsers

**"Let's change the UI while we're at it"**

- Refactoring !== redesign
- Change behavior later, after migration complete
- Users have muscle memory

**"We don't need tests, it's just a refactor"**

- Famous last words
- Tests are your safety net
- Write tests BEFORE refactoring

**"Big-bang rewrite will be faster"**

- It never is
- Hidden complexity always appears
- No way to incrementally validate

---

## Reflection Questions

1. **What refactoring strategy did you choose? Why?**
2. **Where did AI suggest a "rewrite everything" approach?**
3. **What's the riskiest part of your plan?**
4. **How would you test that the refactored version works identically to the jQuery version?**
5. **What user behaviors might you accidentally break?**
6. **If you deploy Phase 1 and it breaks production, what's your rollback plan?**

---

## Group Discussion

- **Compare refactoring strategies:** What did different groups choose? What were the tradeoffs?
- **AI suggestions:** Did everyone get the "rewrite from scratch" suggestion? Why is AI prone to this?
- **Risk tolerance:** How do you balance speed vs. safety? When is a riskier approach justified?
- **Real world:** Have you seen refactoring go wrong? What happened?

---

## Stretch Goals (Optional)

If you finish early:

### 1. Write a Test Plan

Document specific test cases:

- User filters by status = "active" → sees only active subscriptions
- User sorts by date → data is sorted correctly
- User exports CSV → file contains correct data
- Add 20+ specific test scenarios

### 2. Identify Other Refactoring Opportunities

From your Activity 2A analysis, what else needs refactoring?

- JSON file storage → real database?
- Missing authentication → add auth middleware?
- Payment retry logic → extract to service?

Create a prioritized list with effort/impact estimates.

### 3. Create a Feature Flag Plan

How would you implement feature flags for this refactoring?

- What's the flag structure?
- How do you test both code paths?
- How do you gradually roll out?

---

## Key Takeaways

- ✅ **AI can help explore refactoring options** - Use it for brainstorming
- ❌ **AI loves big-bang rewrites** - Usually a bad idea
- ✅ **Incremental > Big-bang** - Smaller steps, easier to test, faster to rollback
- ❌ **"Rewrite from scratch" is risky** - Hidden complexity, hard to test
- ✅ **Test first, refactor second** - Tests are your safety net
- 📝 **Refactoring is about managing risk** - Not about writing code fast

---

## Next Steps

After completing this planning exercise:

1. **Review your plan** - Would you trust this plan in production?
2. **Compare with others** - Learn from different approaches
3. **Consider implementing** - (Optional) Actually build the React version
4. **Move on** - Continue to Module 3

---

**Remember: Good refactoring is boring. It changes nothing from the user's perspective while improving everything underneath.**
