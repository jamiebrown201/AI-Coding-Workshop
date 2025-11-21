# Module 3 Facilitator Guide: Full-Stack Development

## Module Overview

**Goal**: Teach participants to break down problems, make architectural decisions, and use AI effectively at each step of building a full-stack feature.

**Duration**: 90-120 minutes (challenge) + 30-45 minutes (discussion)

**Key Learning Outcome**: Participants can **plan first, code second** - making decisions AI can't make, then guiding AI to implement their vision.

**Teaching Philosophy**:
- Focus on user stories and breaking down problems
- Show concrete examples of HOW to use AI at each phase
- Give frameworks, not fluff
- Let participants stand on their own two feet

---

## Pre-Module Setup

### Technical Requirements

Ensure participants have:
- [ ] Node.js 18+ installed
- [ ] npm or yarn working
- [ ] Code editor with TypeScript support
- [ ] AI coding assistant configured (Claude Code, Cursor, GitHub Copilot, etc.)
- [ ] Browser with DevTools
- [ ] curl or Postman (for API testing)

### Starter Code

The `dashboard-starter/` directory contains:
- **Backend**: Minimal Express server (server.js + package.json)
- **Frontend**: Minimal React + TypeScript + Vite setup
- **Mock data**: Sample metrics in `fixtures/` (for reference, not required)

**Important**: The starter code is intentionally minimal. Participants should build most things from scratch.

---

## Module Flow

### Introduction (10 min)

**Set the context**:

> "You've debugged existing code and explored legacy systems. Now you're building something new. The key skill: breaking down problems and using AI at each step."

**Key Message**:
- **Plan first, code second** - architectural decisions before implementation
- **AI helps at each phase** - but you make the decisions
- **Time-boxed shipping** - working code beats perfect code

**Show the user stories and approach**:
- Display the acceptance criteria from README
- Show example prompts for planning, backend, frontend
- Emphasize: "I'll show you HOW to break it down, then you do it"

---

### Phase 1: Planning (20-30 min)

**Facilitate planning session**:

1. **Ask participants**: "Before you write any code, what decisions do you need to make?"
   - Let them brainstorm for 2-3 minutes
   - Collect answers on whiteboard/shared doc

2. **Highlight key decisions**:
   - Real-time strategy (WebSocket vs polling)
   - API contract (endpoints, data shapes)
   - Component structure (what components, what props)
   - Risk areas (what could go wrong)

3. **Demo the example prompts from README**:
   - Show planning prompt (WebSocket vs polling)
   - Show backend prompt (create endpoint)
   - Show frontend prompt (create hook)
   - Emphasize: "These are templates. Adapt them to your needs."

4. **Emphasize**: AI gives options, YOU make the decision
   - Show how to push back: "That's too complex. Simpler approach?"
   - Show iteration: "Can you explain why you chose X over Y?"
   - Teach skepticism: "Does this actually solve my problem?"

**Common Issues**:

❌ **Participants want to skip planning**: "Let's just start coding!"
- ✅ **Response**: "Give me 15 minutes. I'll prove planning saves time."

❌ **Participants let AI make decisions**: "AI suggested WebSockets so I'll use that."
- ✅ **Response**: "Why did AI suggest that? Do you agree? What are the trade-offs?"

---

### Phase 2-3: Development (50-60 min)

**Set expectations**:
- "You have 60 minutes to build backend + frontend."
- "You won't have time to make it perfect. Ship something that works."
- "If you get stuck for >15 minutes, ask for help or try a different approach."

**Facilitation Tips**:

1. **Circulate and observe**:
   - Are they reading AI's code or blindly copying?
   - Are they testing as they go or waiting until the end?
   - Are they stuck on one problem too long?

2. **Intervention triggers**:
   - **Stuck >15 min**: "What have you tried? Let's debug together."
   - **Rabbit hole**: "That's interesting but not critical. Can you defer it?"
   - **Copying blindly**: "Can you explain what this code does?"

3. **Common sticking points**:

   | Problem | Solution |
   |---------|----------|
   | CORS errors | Check `cors()` middleware in Express |
   | TypeScript errors | Help define interfaces for data |
   | Infinite re-renders | Check useEffect dependencies |
   | Data not updating | Verify polling interval, check Network tab |
   | "AI suggested X" | "Do you understand X? Is it necessary?" |

---

### Phase 4: Integration & Testing (15-20 min)

**Announce**: "You have 15 minutes to connect everything and test."

**Facilitate testing**:

1. **Demonstrate manual testing**:
   - Open browser, show Network tab
   - Refresh page, observe requests
   - Stop backend, show error handling
   - Start backend, show recovery

2. **Testing checklist** (on whiteboard):
   - [ ] Dashboard loads
   - [ ] Data updates automatically
   - [ ] Filtering works
   - [ ] Error states show
   - [ ] Loading states show
   - [ ] Responsive on different screen sizes

3. **Debugging session** (if needed):
   - Pick a participant with an issue
   - Debug together, narrate your process
   - Teach debugging techniques (console.log, Network tab, React DevTools)

---

## Group Discussion (30-45 min)

### Part 1: Architecture Decisions (15 min)

**Ask participants**:

1. **"Who chose WebSockets? Who chose polling?"**
   - Why did you choose that?
   - Would you make the same choice for production?

2. **"Did AI suggest an approach you rejected?"**
   - What did AI suggest?
   - Why did you reject it?
   - How did you push back?

3. **"Show me your API contract."**
   - Pick 2-3 participants, compare designs
   - Different approaches, all valid
   - Discuss trade-offs

**Key Teaching Moment**:
> "Notice how everyone made different decisions? That's because **context matters**. AI doesn't understand your context (time, team, scale). You do. That's why architecture is human work."

---

### Part 2: Working with AI (15 min)

**Facilitate reflection**:

1. **"Where did AI help the most?"**
   - Expected: Boilerplate code, fixing syntax errors, component structure
   - Highlight: AI accelerates implementation

2. **"Where did AI struggle?"**
   - Expected: Architecture decisions, debugging, understanding requirements
   - Highlight: AI needs guidance

3. **"Did AI suggest anything that seemed clever but was actually a bad idea?"**
   - Examples: Over-engineering, premature optimization, complex patterns
   - Teaching: "Clever" often means "hard to understand later"

4. **"How many times did you have to re-prompt AI to get what you wanted?"**
   - Expected: Multiple iterations
   - Teaching: AI rarely gets it right on first try. Iteration is normal.

**Share prompting strategies**:
- Good prompt: Specific, includes context, states constraints
- Bad prompt: Vague, no context, assumes AI knows your goals

---

### Part 3: Process & Time Management (10 min)

**Ask**:

1. **"Who finished in 90 minutes?"**
   - What helped you stay on schedule?
   - What slowed you down?

2. **"Who ran out of time?"**
   - What took longer than expected?
   - What would you cut next time?

3. **"Did planning save time or waste time?"**
   - Expected: Saved time (fewer rewrites)
   - If someone disagrees, explore why

**Key Teaching Moment**:
> "In real projects, you rarely have 'enough time.' Learning to ship under constraints is a critical skill. Perfect is the enemy of done."

---

## Common Participant Questions

### "Should I write tests?"

**Answer**: Not during the 90-minute challenge. Focus on manual testing. You can add automated tests later as a stretch goal.

**Why**: Tests are important, but time-boxing forces prioritization. Manual testing is faster for initial development.

---

### "My code is messy. Should I refactor?"

**Answer**: Does it work? Then move on. You can refactor later.

**Why**: Premature optimization wastes time. Ship first, clean up later.

---

### "AI suggested using [complex library]. Should I?"

**Answer**: Do you need it? Can you build it yourself in 10 minutes?

**Teaching moment**: AI loves suggesting libraries because it's trained on open-source projects that use lots of libraries. But libraries add complexity. Use them only when they save significant time.

---

### "Can I use the starter code examples?"

**Answer**: You can reference them, but don't copy-paste. The goal is learning, not just finishing.

**Why**: If you copy without understanding, you won't be able to debug or extend later.

---

### "I'm stuck. Can you help?"

**Answer**: Yes! But first, what have you tried?

**Facilitation approach**:
1. Let them explain the problem (rubber duck debugging)
2. Ask clarifying questions ("What does the Network tab show?")
3. Guide them to the answer, don't give it directly
4. If truly stuck, show solution but explain reasoning

---

## Stretch Goals (For Fast Finishers)

If participants finish early:

### Easy Wins
- Improve styling (make it look professional)
- Add keyboard shortcuts
- Add last-updated timestamp
- Add favicon

### Medium Challenges
- Add sorting or searching
- Switch real-time strategy (polling → WebSocket or vice versa)
- Add a simple chart visualization

### Hard Challenges
- Add unit tests
- Add E2E tests
- Deploy to production
- Add historical data

---

## Evaluation Guidelines

### Does It Work? (50% weight)

**Excellent** (45-50):
- All features functional
- Error handling comprehensive
- Loading states everywhere
- No crashes

**Good** (35-44):
- Core features work
- Basic error handling
- Some loading states
- Minor bugs

**Needs Work** (0-34):
- Core features broken
- No error handling
- App crashes easily

---

### Code Quality (25% weight)

**Excellent** (23-25):
- Clean, readable code
- Logical component structure
- Good naming
- TypeScript types used well

**Good** (18-22):
- Mostly readable
- Some organization
- Decent naming
- Some TypeScript

**Needs Work** (0-17):
- Hard to read
- No structure
- Poor naming
- TypeScript ignored

---

### Understanding (15% weight)

**Excellent** (14-15):
- Can explain all decisions
- Understands trade-offs
- Documented in PLAN.md
- Critical of own code

**Good** (11-13):
- Can explain most decisions
- Understands some trade-offs
- Some documentation

**Needs Work** (0-10):
- Can't explain decisions
- No documentation
- Doesn't understand code

---

### Process (10% weight)

**Excellent** (9-10):
- Did planning first
- Used AI effectively
- Managed time well
- Good reflection

**Good** (7-8):
- Some planning
- Used AI
- Mostly on time

**Needs Work** (0-6):
- No planning
- Let AI drive
- Poor time management

---

## Post-Module: Debrief

### What Participants Should Take Away

1. **Architecture is human work**
   - AI can't make decisions for you
   - You need to understand trade-offs
   - Context matters more than "best practices"

2. **Planning saves time**
   - 20 minutes planning prevents 60 minutes of refactoring
   - API contracts prevent frontend/backend mismatches
   - Risk assessment helps prioritize

3. **AI is a tool, not a decision-maker**
   - AI accelerates implementation
   - AI needs guidance and constraints
   - Always verify, never trust blindly

4. **Shipping > Perfection**
   - Done is better than perfect
   - You can refactor later
   - Time constraints force prioritization

---

## Next Module Preview

**Module 4: Code Review & Security**

> "You built a feature. Now someone else has to review it. What will they look for? What security issues did you miss?"

---

## Facilitator Self-Reflection

After the module, consider:

- **Timing**: Did participants need more/less time?
- **Difficulty**: Was the challenge too hard/easy?
- **Engagement**: Were participants engaged or lost?
- **Learning**: Did they grasp the key concepts?
- **AI usage**: Did they use AI effectively or struggle?

**Iterate for next session!**

---

## Additional Resources for Facilitators

### Example Solutions

See `reference-implementations/` (to be created) for:
- Polling implementation
- WebSocket implementation
- Different component structures
- Different API designs

**Note**: Don't show these until AFTER the challenge. Let participants explore first.

### Troubleshooting Guide

Common technical issues and fixes:

| Issue | Fix |
|-------|-----|
| Port already in use | `lsof -ti:4000 \| xargs kill -9` |
| npm install fails | Check Node version (need 18+) |
| CORS errors | Verify `cors()` middleware |
| TypeScript errors | Help define interfaces |
| Vite won't start | Check port 5173, try different port |

---

## Workshop Materials Checklist

Before the session:

- [ ] Test starter code on fresh machine
- [ ] Prepare example prompts
- [ ] Set up projector/screen sharing
- [ ] Prepare whiteboard/digital board for notes
- [ ] Have backup examples ready
- [ ] Test internet connectivity
- [ ] Have reference implementations ready (hidden)

---

**Remember: Your role is to facilitate learning, not to provide answers. Guide participants to discover solutions themselves.**
