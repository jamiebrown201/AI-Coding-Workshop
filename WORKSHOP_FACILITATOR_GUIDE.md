# Workshop Facilitator Guide

**For instructors running the AI Coding Workshop**

## Pre-Workshop Preparation (2 Weeks Before)

### Technical Setup
- [ ] Test all exercises on your machine
- [ ] Verify scripts work (`npm run verify` / verify-setup.sh, security-scan.sh)
- [ ] Ensure fixture data is complete
- [ ] Test in multiple browsers (especially Safari for Module 1)
- [ ] Prepare backup solutions if exercises fail

### Materials Preparation
- [ ] Print security checklists (or ensure digital access)
- [ ] Prepare sticky notes for activities
- [ ] Set up poster boards for "Hopes & Fears" activity
- [ ] Prepare badge/award certificates
- [ ] Create name tags
- [ ] Print sign-in sheet

### Room Setup
- [ ] Tables arranged for groups of 3-4
- [ ] Power outlets accessible
- [ ] Projector/screen working
- [ ] Whiteboard and markers
- [ ] Reliable WiFi (critical!)
- [ ] Test screen mirroring for demos

### Communications
- [ ] Send pre-workshop email (2 days before)
- [ ] Include setup instructions and repo link
- [ ] Pre-survey: "What's your biggest question about AI tools?"
- [ ] Remind about bringing laptops
- [ ] Share troubleshooting contact info

## Day-Of Setup (Morning Of)

### 60 Minutes Before
- [ ] Arrive early and test AV equipment
- [ ] Set up "Hopes & Fears" boards
- [ ] Arrange materials on tables
- [ ] Test your own laptop connection
- [ ] Write schedule on whiteboard
- [ ] Set up music (optional, for breaks)

### 30 Minutes Before
- [ ] Greet early arrivals
- [ ] Help with setup issues
- [ ] Make people feel welcome
- [ ] Light conversation, remember names
- [ ] Point to coffee/snacks

## Module-by-Module Facilitation Guide

### Opening (40 min)

#### Welcome & Setup (10 min)
**Your energy sets the tone. Be welcoming and enthusiastic.**

**Script:**
> "Welcome everyone! This is the AI Coding Workshop. Today is about learning to work WITH AI tools, not being replaced BY them. We're going to build real code, make real mistakes, and learn from both."

**Ground rules (elicit from group):**
- Ask: "What ground rules would make this a good learning experience?"
- Capture on whiteboard
- Add any missing: mistakes are data, challenge claims, skepticism welcome

#### Icebreaker & Introductions (10 min)
**Keep it casual and moving quickly.**

**Format:**
Go around the room. Each person shares:
- Name
- What you work on
- One quick thing about yourself (hobby, fun fact, whatever)

**Facilitation tips:**
- Start with yourself to set the tone
- Keep it light and quick (30-45 seconds per person)
- No pressure to be clever or funny
- If someone's stuck, offer prompts: "What did you do last weekend?" or "Coffee or tea?"

#### Hopes & Fears (10 min)
**This is crucial for surfacing concerns early.**

**Instructions:**
> "Let's talk about hopes and concerns for AI tools. You can either:
> - Write on sticky notes and put them on the board (anonymous), OR
> - Just jot down your thoughts and we'll go around the room to share
>
> One hope you have for AI tools. One concern or fear."

**Facilitation tips:**
- Give people 2-3 minutes to think and write
- Read the room - if people seem comfortable sharing, go around verbally
- If people prefer anonymity, use the sticky notes on boards
- Can mix both approaches
- Acknowledge both hopes AND concerns seriously
- **Key message:** "All of these are valid. We'll address both today."

**Leave boards visible all day (if using them)!**

#### Objectives (5 min)
**Be clear and realistic about what they'll learn.**

### Module 1: Foundations (90 min)

#### Energizer: Wild Code Challenge (5 min)
**Get creative energy flowing.**

**Instructions:**
> "You have 2 minutes. Create the most interesting thing you can with your AI tool. Totally open-ended. Surprise us!"

**Show 3-4 examples, keep it light and fun.**

#### Exercise 1A: Article Preview (35 min)

**Setup (5 min):**
- Demo the setup commands
- Show them the requirements file
- Point out the fixtures
- Emphasize: "You must understand every line you commit"

**During exercise (20 min):**
- Circulate constantly
- Don't give answers, ask questions:
  - "What does this prop do?"
  - "Why did AI suggest this pattern?"
  - "What happens if the image fails?"
- Note common struggles for group discussion

**Key teaching moments to watch for:**
- AI generating inaccessible code (missing alt text)
- AI using divs instead of semantic HTML
- AI missing focus states
- Developers copying without understanding

**Group processing (10 min):**
- Think-Pair-Share format
- Ask: "What surprised you? What went wrong?"
- Gallery walk (quick)
- Mini-lesson: Code review essentials for AI code

**If running behind:**
- Skip gallery walk
- Focus on key takeaways only

#### Processing Break (5 min)
**Give them reflection time. Brains need it.**

Quick write prompt: "One thing I learned, one question I have"

#### Exercise 1B: Safari Bug (35 min)

**Setup as mystery (5 min):**
- Frame as real bug report
- Intentionally vague (mimics reality)
- Gamification: "First to solve gets badge!"

**During exercise (20 min):**
- Circulate with hints (don't give answer!)
- If really stuck after 15 min: "Have you checked flexbox support in Safari?"
- Watch for AI confidently suggesting wrong solutions

**Debrief (10 min):**
- Winner explains process (3 min)
- Others share alternative approaches
- **Critical question:** "When did AI help? When did it mislead?"
- Show of hands: "Who asked AI first before looking at the code?"

**Key lesson:** Browser dev tools > AI guesses

### Break (15 min)

#### Quick Energizer: Debug or Feature (3 min)
**Keep energy up before break.**

Show code snippets, group votes: bug or feature?

**Then actual break (12 min).**

### Module 2: Codebase Understanding (75 min)

#### Opening: Context Quality Lesson (5 min)
**This might be the most important lesson of the day.**

**Script:**
> "More context ≠ Better results.
>
> AI gets WORSE with too much context. Your job is to give the RIGHT information, not ALL information.
>
> Context engineering > Prompt engineering."

**Use analogy:** Explaining to a new teammate

#### Activity 2A: Architecture Analysis (30 min)

**Setup (5 min):**
- Frame as archaeology
- No judgment on code quality
- Focus on understanding
- Use AI strategically

**During exploration (15 min):**
- Groups work on diagrams
- Encourage visual thinking
- Ask probing questions:
  - "What's the entry point?"
  - "Where's the business logic?"
  - "What external dependencies exist?"

**Watch for:**
- Context dumping (feeding AI everything)
- AI making wrong assumptions about business logic
- Developers not verifying AI explanations

**Gallery walk (10 min):**
- Post diagrams
- Silent walk with sticky notes
- Brief discussion of patterns

**Key lesson:** Start at entry point, follow the path, expand deliberately

#### Processing (5 min)
Pair discussion on what AI helped with vs. what it got wrong

#### Activity 2B: Refactoring Planning (30 min)

**Setup (5 min):**
- jQuery → React migration scenario
- Emphasize safe, incremental approach
- **Will AI suggest "rewrite everything"?** (Spoiler: yes)

**Planning (20 min):**
- Groups create migration plans
- Must include: phases, testing, risks, rollback
- Gamification: Self-score on safety/feasibility

**Share (5 min):**
- Round-robin: Each group's #1 risk
- **Facilitator point:** "How many plans did AI suggest big-bang rewrites?"

**Key lesson:** Incremental > big-bang, AI loves rewrites (bad!)

### Lunch (60 min)

**Optional:** Lunch & Learn Lightning Talks (volunteers share 3-min tips)

### Post-Lunch Energizer: Coding Pictionary (10 min)
**Get blood flowing after lunch.**

Teams draw and guess coding concepts. Keep it fast and fun.

### Module 3: Full-Stack Features (90 min)

#### Challenge Introduction (5 min)

**Script:**
> "You have 75 minutes to build a complete feature. Real-time analytics dashboard. Frontend, backend, tests, docs.
>
> Working means: it runs, it's secure, someone else can maintain it."

**Emphasize:** Plan first!

#### Team Formation & Planning (10 min)
- Self-organize into pairs/trios
- Must write plan before coding
- Quick facilitator review of plans

**Red flags in plans:**
- No mention of error handling
- No testing strategy
- Unclear architecture
- "We'll figure it out as we go"

#### Build Session (50 min)

**Checkpoint 1 (20 min):**
- Quick standup: "Show me your backend"
- Peer feedback
- Facilitator tips on common struggles

**Checkpoint 2 (40 min):**
- Another standup: "Frontend progress"
- Intro competition: "Best error handling wins badge"

**Final push (10 min):**
- Finalize for demo
- Test everything works

**Facilitator role:**
- Circulate constantly
- Time warnings at 30 min, 15 min, 5 min remaining
- Keep energy high
- Help unstuck people, but don't solve for them

#### Demo Showcase (20 min)

**Format:**
- 3 minutes per team
- Others provide feedback: "I like, I wish, What if"
- Awards: Best Error Handling, Cleanest Code, Best Docs, etc.

**Make awards fun and meaningful!**

#### Debrief (5 min)
- "What was harder than expected?"
- "What did AI do well?"
- "What required human judgment?"

**Key takeaway:** Architecture is human work

### Break (15 min)

#### Energizer: Tech Trivia (5 min before break)
Quick-fire questions about today's learning

### Module 4: Code Review & Security (60 min)

#### Opening: Security Fails (5 min)

**Set serious tone (but not scary).**

**Script:**
> "This is where we get real. 45% of AI code has security vulnerabilities. This isn't theoretical—it's reality.
>
> This matters. Let's learn to catch these before production."

#### Activity 4A: Security Review (25 min)

**Setup as bug bounty (5 min):**
- Point system explained
- At least 5 vulnerabilities planted
- Can use AI to help scan, but must verify

**Review session (15 min):**
- Work individually or pairs
- Track findings
- Score each issue

**Results (5 min):**
- Reveal all vulnerabilities
- Score teams
- Award "Bug Bounty Hunter" badge
- **Key question:** "Which did AI catch? Which did it miss?"

**Important lesson:** AI scanning is ONE tool, not the only tool

#### Activity 4B: Refactoring (25 min)

**Setup (5 min):**
- Safe refactoring emphasized
- Tests must pass
- Incremental changes

**Refactoring work (15 min):**
- Modernize jQuery → React
- All tests stay green
- Commit frequently

**Share (5 min):**
- Different approaches
- Trade-offs discussed
- "Who got tricked by AI suggesting to delete critical code?"

#### Security Deep Dive (5 min)
- Reinforce 45% statistic
- Walk through checklist
- "Use this. Every time."

### Module 5: Team Practices (75 min)

#### Opening Discussion (10 min)

**Real talk format.**

**Prompt:** "What concerns do you have about AI tools in your work?"

Capture on whiteboard, acknowledge seriously.

#### Activity 5A: Guidelines (30 min)

**Setup (5 min):**
- 4 groups, 4 focus areas
- Create SPECIFIC, ACTIONABLE guidelines
- Not aspirational fluff

**Guideline development (20 min):**
- Groups work on their area
- Test against scenarios
- Make it usable

**Share (5 min):**
- 2 min per group
- Synthesize into unified document

**Deliverable:** Real document teams can use

#### Activity 5B: Responsible Use (25 min)

**Fishbowl discussion format:**
- Inner circle discusses
- Outer circle can tap in
- Rotate topics every 7-8 minutes

**Topics:**
1. Junior developer learning
2. When human judgment overrides AI
3. Transparency about AI usage

**Facilitation tips:**
- Keep discussion moving
- Don't let it get too abstract
- Bring it back to practical concerns
- Level-specific prompts provided in module notes

#### Synthesis (10 min)

**Individual reflection:**
- "One practice I'll try next week"
- "One thing I'll stop doing"
- "One thing I'll discuss with my team"

**Accountability partners:**
- Pair up
- Exchange contact info
- Check in next week

### Final Energizer: Code Roast (5 min)
Share funniest AI-generated code from the day. End on a laugh.

### Module 6: Capstone (60 min)

#### Opening: Reality Check (5 min)

**Script:**
> "Before the final challenge, let's be real. AI tools are impressive but limited. They hallucinate, miss context, can't make strategic decisions.
>
> This capstone simulates real work: time pressure, competing concerns, trade-offs. You won't finish everything perfectly. That's realistic."

#### Challenge Start (60 min)

**Checkpoints at 15, 30, 50, 60 minutes:**
- 15 min: Backend should be working
- 30 min: Full integration complete
- 50 min: Polish & security review
- 60 min: Demo time!

**Facilitator role:**
- Circulate constantly
- Time warnings at each checkpoint
- Help with blocking issues
- Keep energy high
- Don't solve for them

**Emergency shortcuts if running low on time:**
- Provided in module README
- Emphasize: never skip security

#### Demos (3 min each)

**Format:**
- Show it working (90 sec)
- Explain one decision (30 sec)
- What worked/didn't work with AI (30 sec)
- What you'd improve with more time (30 sec)

**Prize Categories (Everyone votes):**
- 🏆 **Silliest Idea** - Most absurd/ridiculous feature
- ✨ **Slickest Execution** - Most polished implementation
- 🤯 **Most Overengineered** - Unnecessary tech for simple problems
- 🎨 **Most Creative** - Most original concept
- 🔥 **Actually Useful** - Would genuinely use in production
- 😱 **Best Use of AI** - Most effective AI workflow

**Make it celebratory! Winners get bragging rights.**

### Closing (15 min)

#### Return to "Hopes & Fears" (5 min)

**Script:**
> "Remember these from this morning? Let's revisit."

- Read a few hopes: "Did we achieve these?"
- Read a few concerns: "Did we address these?"
- Group reflection

#### Final Takeaways (5 min)

**Ask group:** "What are your 3 biggest takeaways?"

**Your summary:**
- AI is a powerful tool, not a replacement
- Context quality > Prompt quality
- Security is non-negotiable
- Understanding > Speed
- Responsible adoption requires guidelines

#### Action Planning (5 min)

**What happens Monday?**
- Try one new practice
- Share with your team
- Draft team guidelines
- Measure actual impact

**Thank participants.** Give them credit for engaging.

## Common Facilitation Challenges

### "Someone's setup is completely broken"
- Pair them with someone whose setup works
- Or use online IDE (backup plan)
- Don't hold up entire group

### "Group is moving too fast"
- Add extra challenges
- Encourage helping others
- Go deeper on concepts

### "Group is moving too slow"
- Skip optional activities
- Reduce exercise time
- Focus on core concepts
- It's OK to not finish everything

### "Someone dominates discussion"
- "Let's hear from someone who hasn't spoken"
- Use structured turn-taking
- Private conversation during break if needed

### "Group is quiet/disengaged"
- Smaller breakout groups
- More interactive activities
- Check your energy (are YOU engaged?)
- Take a break

### "Heated debate about AI replacing jobs"
- Acknowledge concern seriously
- Bring to team practices module
- Focus on augmentation vs replacement
- Stay neutral and practical

### "Technical demo fails"
- Have backup screenshots/videos
- "This is why we test!"
- Move on quickly
- Learn for next time

## Post-Workshop

### Immediately After
- [ ] Thank participants personally
- [ ] Collect feedback forms
- [ ] Clean up space
- [ ] Note what worked/didn't work for next time

### Follow-Up (Within 1 Week)
- [ ] Send thank-you email
- [ ] Share resources and materials
- [ ] Provide access to solutions
- [ ] Send survey for detailed feedback

### Continuous Improvement
- [ ] Review feedback
- [ ] Update materials based on learnings
- [ ] Share improvements with other facilitators
- [ ] Iterate on exercises that didn't work

## Facilitator Self-Care

Running a full-day workshop is exhausting. Take care of yourself:

- Eat breakfast
- Stay hydrated (water bottle visible)
- Take your breaks seriously
- Don't skip lunch
- Move around during exercises (don't sit)
- Celebrate small wins
- Reflect after: what went well, what would you change?

## Quick Reference

### Time Allocations
- Opening: 40 min
- Module 1: 90 min
- Break: 15 min
- Module 2: 75 min
- Lunch: 60 min
- Module 3: 90 min
- Break: 15 min
- Module 4: 60 min
- Module 5: 75 min
- Module 6: 60 min
- Closing: 15 min

**Total: ~6.5 hours + breaks**

### Key Messages
1. Context quality > Prompt quality
2. Understanding > Speed
3. Security is non-negotiable
4. AI augments, doesn't replace
5. Responsible adoption requires guidelines

### Must-Have Materials
- Sticky notes (2 colors)
- Poster boards (2)
- Whiteboard markers
- Badges/awards
- Backup power strips
- Your fully-charged laptop

---

**You've got this! Create a safe learning environment, stay energized, and help them learn. 🚀**
