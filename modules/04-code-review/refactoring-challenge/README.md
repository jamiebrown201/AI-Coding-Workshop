# Activity 2B: Refactoring Planning

**Time:** 30 minutes
**Difficulty:** Intermediate

## The Challenge: Modernize Legacy Code

**Technical Context / Scenario:**
```
Your tech lead has flagged the user search feature as technical debt
that's blocking new development. Here's the situation:

Background:
The user search was built 6 years ago with jQuery. It works, but:
- Adding new filters requires touching a 800-line monolithic file
- Performance degrades with large result sets (2-3 second delays)
- Testing is brittle (lots of jQuery DOM manipulation)
- New team members struggle to understand the code

The team has decided to refactor to React incrementally.

Technical Requirements:
- Maintain all current search features (fuzzy matching, sorting, pagination)
- Improve performance (target <500ms)
- Make it extensible for upcoming filters
- Zero downtime during migration
- All existing integration tests must pass
- Can't do a big-bang rewrite (learned that lesson before)
```

**Learning Objectives:**
By the end of this exercise, you'll be able to:
- ✓ Use AI to analyze refactoring risks
- ✓ Create safe migration strategies
- ✓ Identify what to test before/during/after refactoring
- ✓ Recognize when AI suggests risky "rewrite everything" approaches
- ✓ Plan incremental changes vs. big-bang rewrites

**Setup as "Mission Planning"**
```bash
cd modules/02-codebase-understanding/refactoring-challenge
# jQuery-based user search - 800 lines in one file 😱
```

- Scenario: jQuery → React migration for user search
- Must create a safe refactoring plan
- AI can help, but you make the decisions

**Collaborative Planning:**
**Gamification: Complexity scoring**
- Each team creates a plan with:
  - Phases of the migration (what gets refactored when?)
  - Testing strategy (how do we know nothing broke?)
  - Rollback plan (what if it goes wrong?)
  - Risk assessment (what could go sideways?)
- Self-score on: 
  - Safety (1-10): Could this break production?
  - Feasibility (1-10): Can we actually do this?
  - Test coverage (1-10): Will we catch regressions?
- Bonus points for identifying risks AI might miss

**Questions to answer in your plan:**
- Parallel implementation or gradual replacement?
- Feature flags for rollout?
- What breaks if the API changes?
- How do we test 6-year-old jQuery behavior?
- What "weird" things might users depend on?

**Share & Compare:**
- Quick round-robin: each group shares their #1 risk
- Facilitator synthesizes common themes
- Discussion: "Did AI suggest a big-bang rewrite? Why is that risky?"

## Group Discussion

- What was the most significant disagreement within your group when creating the refactoring plan? How did you resolve it?
- If an AI suggests a "big bang" rewrite, and you know it's risky, how do you get the most value out of that suggestion without following it blindly?

## Key Takeaways:
- ✅ AI can suggest refactoring approaches
- ❌ AI loves "rewrite everything" (usually a bad idea)
- ✅ Incremental migration > big-bang rewrite
- ❌ "It works on my machine with fresh data" ≠ production ready
- ✅ Test the weird edge cases, not just happy path
- 📝 Refactoring is about managing risk, not writing code fast
