# Workshop Facilitator Guide

**For instructors running the AI Coding Workshop**

## Pre-Workshop Preparation

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

- [ ] Send pre-workshop email
- [ ] Include setup instructions and repo link
- [ ] Pre-survey: "What's your biggest question about AI tools?"
- [ ] Remind about bringing laptops
- [ ] Share troubleshooting contact info

## Day-Of Setup

### Early Setup

- [ ] Arrive early and test AV equipment
- [ ] Set up "Hopes & Fears" boards
- [ ] Arrange materials on tables
- [ ] Test your own laptop connection
- [ ] Write schedule on whiteboard
- [ ] Set up music (optional, for breaks)

### As People Arrive

- [ ] Greet early arrivals
- [ ] Help with setup issues
- [ ] Make people feel welcome
- [ ] Light conversation, remember names
- [ ] Point to coffee/snacks

## Module-by-Module Facilitation Guide

### Opening

#### Welcome & Setup

**Your energy sets the tone. Be welcoming and enthusiastic.**

**Script:**

> "Welcome everyone! This is the AI Coding Workshop. Today is about learning to work WITH AI tools, not being replaced BY them. We're going to build real code, make real mistakes, and learn from both."

#### Icebreaker & Introductions

**Keep it casual and moving quickly.**

**Format:**
Go around the room. Each person shares:

- Name
- What you work on
- One thing you'd want on a desert island (can't be phone/laptop)

**Facilitation tips:**

- Start with yourself to set the tone
- Keep it light and moving quickly
- If someone's stuck, prompt: "Practical or fun?" or "Survival or entertainment?"

#### Hopes & Fears

**This is crucial for surfacing concerns early.**

**Instructions:**

> "Let's talk about hopes and concerns for AI tools. You can either:
>
> - Write on sticky notes and put them on the board (anonymous), OR
> - Just jot down your thoughts and we'll go around the room to share
>
> One hope you have for AI tools. One concern or fear."

**Facilitation tips:**

- Give people time to think and write
- Read the room - if people seem comfortable sharing, go around verbally
- If people prefer anonymity, use the sticky notes on boards
- Can mix both approaches
- Acknowledge both hopes AND concerns seriously
- **Key message:** "All of these are valid. We'll address both today."

**Leave boards visible all day (if using them)!**

#### Objectives

**Be clear and realistic about what they'll learn.**

### Module 1: Foundations

#### Energizer: Wild Code Challenge

**Get creative energy flowing.**

**Instructions:**

> "Create the most interesting thing you can with your AI tool. Totally open-ended. Surprise us!"

**Show 3-4 examples, keep it light and fun.**

#### Exercise 1A: Article Preview

**Setup:**

- Demo the setup commands
- Show them the requirements file
- Point out the fixtures
- Emphasize: "You must understand every line you commit"

**During exercise:**

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

**Group processing:**

- Think-Pair-Share format
- Gallery walk (quick)
- Mini-lesson: Code review essentials for AI code

**Discussion questions:**
- "What surprised you about working with AI?"
- "What went wrong? What went right?"
- "Did AI miss anything important? What?"
- "Show of hands: Who copied code without fully understanding it?"
- "What accessibility issues did AI generate?"

**If running behind:**

- Skip gallery walk
- Focus on key takeaways only

#### Processing Break

**Give them reflection time. Brains need it.**

Quick write prompt: "One thing I learned, one question I have"

#### Exercise 1B: Safari Bug

**Setup as mystery:**

- Frame as real bug report
- Intentionally vague (mimics reality)
- Gamification: "First to solve gets badge!"

**During exercise:**

- Circulate with hints (don't give answer!)
- If really stuck: "Have you checked flexbox support in Safari?"
- Watch for AI confidently suggesting wrong solutions

**Debrief:**

- Winner explains process
- Others share alternative approaches

**Discussion questions:**
- "When did AI help? When did it mislead?"
- "Show of hands: Who asked AI first before looking at the code?"
- "What did you try that didn't work?"
- "Did AI give you confident wrong answers? What were they?"
- "When did you realize you needed to look at browser dev tools instead of asking AI?"

**Key lesson:** Browser dev tools > AI guesses

### Break

#### Quick Energizer: Debug or Feature

**Keep energy up before break.**

Show code snippets, group votes: bug or feature?

**Then actual break.**

### Module 2: Codebase Understanding

#### Activity 2A: Architecture Analysis

**Setup:**

- Frame as archaeology
- No judgment on code quality
- Focus on understanding
- Use AI strategically

**During exploration:**

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

**Gallery walk:**

- Post diagrams
- Silent walk with sticky notes
- Brief discussion of patterns

**Discussion questions:**
- "Did anyone feed AI too much code at once? What happened?"
- "What did AI get wrong about the system architecture?"
- "How many of you verified what AI told you? How?"
- "What was more helpful: asking AI to explain code or reading it yourself?"
- "Show of hands: Who found AI making assumptions about business logic?"

**Key lesson:** Start at entry point, follow the path, expand deliberately

#### Processing

Pair discussion on what AI helped with vs. what it got wrong

#### Activity 2B: Refactoring Planning

**Setup:**

- jQuery → React migration scenario
- Emphasize safe, incremental approach
- **Will AI suggest "rewrite everything"?** (Spoiler: yes)

**Planning:**

- Groups create migration plans
- Must include: phases, testing, risks, rollback
- Gamification: Self-score on safety/feasibility

**Share:**

- Round-robin: Each group's #1 risk

**Discussion questions:**
- "Show of hands: How many plans did AI suggest big-bang rewrites?"
- "What risks did AI miss in the migration plan?"
- "Did anyone's AI suggest deleting the old code immediately?"
- "What's the difference between what AI suggested vs. what would actually be safe?"
- "How would you test each phase of the migration?"

**Key lesson:** Incremental > big-bang, AI loves rewrites (bad!)

### Lunch

**Optional:** Lunch & Learn Lightning Talks (volunteers share quick tips)

### Post-Lunch Energizer: Coding Pictionary

**Get blood flowing after lunch.**

Teams draw and guess coding concepts. Keep it fast and fun.

### Module 3: Full-Stack Features

#### Challenge Introduction

**Script:**

> "Build a complete feature. Real-time analytics dashboard. Frontend, backend, tests, docs.
>
> Working means: it runs, it's secure, someone else can maintain it."

**Emphasize:** Plan first!

#### Team Formation & Planning

- Self-organize into pairs/trios
- Must write plan before coding
- Quick facilitator review of plans

**Red flags in plans:**

- No mention of error handling
- No testing strategy
- Unclear architecture
- "We'll figure it out as we go"

#### Build Session

**Checkpoint 1:**

- Quick standup: "Show me your backend"
- Peer feedback
- Facilitator tips on common struggles

**Checkpoint 2:**

- Another standup: "Frontend progress"
- Intro competition: "Best error handling wins badge"

**Final push:**

- Finalize for demo
- Test everything works

**Facilitator role:**

- Circulate constantly
- Give time warnings as needed
- Keep energy high
- Help unstuck people, but don't solve for them

#### Demo Showcase

**Format:**

- Quick demos from each team
- Others provide feedback: "I like, I wish, What if"
- Awards: Best Error Handling, Cleanest Code, Best Docs, etc.

**Make awards fun and meaningful!**

#### Debrief

**Discussion questions:**
- "What was harder than expected?"
- "What did AI do well? What did it struggle with?"
- "What required human judgment that AI couldn't help with?"
- "Did you have to override AI suggestions? When and why?"
- "What would you do differently if you had more time?"
- "Show of hands: Who ended up with error handling AI forgot?"
- "Did anyone hit integration issues AI didn't anticipate?"

**Key takeaway:** Architecture is human work

### Break

#### Energizer: Tech Trivia

Quick-fire questions about today's learning

### Module 4: Code Review & Security

#### Opening: Security Fails

**Set serious tone (but not scary).**

**Script:**

> "This is where we get real. 45% of AI code has security vulnerabilities. This isn't theoretical—it's reality.
>
> This matters. Let's learn to catch these before production."

#### Activity 4A: Security Review

**Setup as bug bounty:**

- Point system explained
- At least 5 vulnerabilities planted
- Can use AI to help scan, but must verify

**Review session:**

- Work individually or pairs
- Track findings
- Score each issue

**Results:**

- Reveal all vulnerabilities
- Score teams
- Award "Bug Bounty Hunter" badge

**Discussion questions:**
- "Which vulnerabilities did AI catch? Which did it miss?"
- "Did AI give false positives? What were they?"
- "Show of hands: Who found a vulnerability AI said was fine?"
- "What types of security issues does AI seem to miss most often?"
- "Would you trust AI to do a complete security review? Why or why not?"

**Important lesson:** AI scanning is ONE tool, not the only tool

#### Activity 4B: Refactoring

**Setup:**

- Safe refactoring emphasized
- Tests must pass
- Incremental changes

**Refactoring work:**

- Modernize jQuery → React
- All tests stay green
- Commit frequently

**Share:**

- Different approaches
- Trade-offs discussed

**Discussion questions:**
- "Show of hands: Who got tricked by AI suggesting to delete critical code?"
- "What edge cases did the old jQuery code handle that AI forgot?"
- "Did anyone's tests catch issues AI introduced?"
- "How did you know when to stop trusting AI's refactoring suggestions?"

#### Security Deep Dive

- Reinforce 45% statistic
- Walk through checklist
- "Use this. Every time."

### Module 5: Team Practices

#### Opening Discussion

**Real talk format.**

**Opening prompt:** "What concerns do you have about AI tools in your work?"

Capture on whiteboard, acknowledge seriously.

**Follow-up questions:**
- "Has anyone seen AI usage causing problems on your team?"
- "What would make you feel safer using AI tools at work?"
- "What questions do you have about adopting AI as a team?"

#### Activity 5A: Guidelines

**Setup:**

- 4 groups, 4 focus areas
- Create SPECIFIC, ACTIONABLE guidelines
- Not aspirational fluff

**Guideline development:**

- Groups work on their area
- Test against scenarios
- Make it usable

**Share:**

- Quick share from each group
- Synthesize into unified document

**Discussion questions:**
- "What's missing from these guidelines?"
- "What would make these actually usable on Monday?"
- "Which guideline will be hardest to follow? Why?"
- "How would you enforce these without being the AI police?"

**Deliverable:** Real document teams can use

#### Activity 5B: Responsible Use

**Fishbowl discussion format:**

- Inner circle discusses
- Outer circle can tap in
- Rotate topics as needed

**Topics:**

1. Junior developer learning
2. When human judgment overrides AI
3. Transparency about AI usage

**Discussion questions for each topic:**

**Junior developers:**
- "How do juniors learn if AI writes all the code?"
- "What skills are we not teaching when AI is available?"
- "Should juniors use AI differently than seniors?"

**Human judgment:**
- "When have you overridden AI today? Why?"
- "What decisions should never be delegated to AI?"
- "How do you know when to stop asking AI?"

**Transparency:**
- "Should we tell teammates when we used AI?"
- "What about in code reviews or PRs?"
- "Do clients need to know?"

**Facilitation tips:**

- Keep discussion moving
- Don't let it get too abstract
- Bring it back to practical concerns

#### Synthesis

**Individual reflection:**

- "One practice I'll try next week"
- "One thing I'll stop doing"
- "One thing I'll discuss with my team"

**Accountability partners:**

- Pair up
- Exchange contact info
- Check in next week

### Final Energizer: Code Roast

Share funniest AI-generated code from the day. End on a laugh.

### Module 6: Capstone

#### Opening: Reality Check

**Script:**

> "Before the final challenge, let's be real. AI tools are impressive but limited. They hallucinate, miss context, can't make strategic decisions.
>
> This capstone simulates real work: time pressure, competing concerns, trade-offs. You won't finish everything perfectly. That's realistic."

#### Challenge Start

**Checkpoints:**

- Backend should be working
- Full integration complete
- Polish & security review
- Demo time!

**Facilitator role:**

- Circulate constantly
- Time warnings at each checkpoint
- Help with blocking issues
- Keep energy high
- Don't solve for them

**Emergency shortcuts if running low on time:**

- Provided in module README
- Emphasize: never skip security

#### Demos

**Format:**

- Show it working
- Explain one decision
- What worked/didn't work with AI
- What you'd improve with more time

**Discussion questions after demos:**
- "What AI workflow worked best for you?"
- "What would you have done differently without AI?"
- "What took longer than expected? Why?"
- "What did AI excel at in this challenge?"
- "What did you have to do completely yourself?"
- "Show of hands: Who had to throw away AI-generated code?"

**Prize Categories (Everyone votes):**

- 🏆 **Silliest Idea** - Most absurd/ridiculous feature
- ✨ **Slickest Execution** - Most polished implementation
- 🤯 **Most Overengineered** - Unnecessary tech for simple problems
- 🎨 **Most Creative** - Most original concept
- 🔥 **Actually Useful** - Would genuinely use in production
- 😱 **Best Use of AI** - Most effective AI workflow

**Make it celebratory! Winners get bragging rights.**

### Closing

#### Return to "Hopes & Fears"

**Script:**

> "Remember these from this morning? Let's revisit."

- Read a few hopes: "Did we achieve these?"
- Read a few concerns: "Did we address these?"
- Group reflection

#### Final Takeaways

**Ask group:** "What are your 3 biggest takeaways?"

**Your summary:**

- AI is a powerful tool, not a replacement
- Context quality > Prompt quality
- Security is non-negotiable
- Understanding > Speed
- Responsible adoption requires guidelines

#### Action Planning

**What happens Monday?**

- Try one new practice
- Share with your team
- Draft team guidelines
- Measure actual impact

**Thank participants.** Give them credit for engaging.
