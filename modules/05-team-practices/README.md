# Module 5: Team Practices & Responsible Use

**Duration:** 75 minutes

## Learning Objectives

By the end of this module, you'll be able to:
- ✓ Create practical team guidelines for AI tool usage
- ✓ Define code review standards for AI-assisted work
- ✓ Establish security and compliance requirements
- ✓ Support junior developer learning with AI tools
- ✓ Measure the impact of AI tools on your team
- ✓ Balance productivity gains with responsible use

## Core Question

**How do we adopt AI coding tools without:**
- Compromising code quality?
- Creating security vulnerabilities?
- Hindering junior developer growth?
- Losing human judgment and oversight?
- Violating compliance or privacy rules?

## Structure

### Activity 5A: Create Team Guidelines (30 min)
Collaboratively develop practical, actionable guidelines for your team.

### Activity 5B: Responsible Use Discussion (25 min)
Structured discussion on ethical and practical considerations.

### Activity 5C: Measuring Impact (Optional, 10 min)
Learn to track AI tool effectiveness on your team.

### Synthesis & Action Planning (10 min)
Commit to specific practices you'll try.

## Prerequisites

- Completed Modules 1-4
- Experienced the benefits AND limitations of AI tools
- Ready to think critically about adoption

## Key Topics

### 1. When to Use (and Not Use) AI Tools

**Good use cases:**
- ✅ Boilerplate code generation
- ✅ Converting between formats (JSON → TypeScript interfaces)
- ✅ Writing tests for existing code
- ✅ Explaining unfamiliar code
- ✅ Exploring architectural options
- ✅ Generating documentation drafts
- ✅ Refactoring with clear requirements

**Poor use cases:**
- ❌ Security-critical code (without extensive review)
- ❌ Complex business logic you don't understand
- ❌ Learning fundamental concepts (for juniors)
- ❌ Code you can't explain or debug
- ❌ Compliance-sensitive operations
- ❌ Architecture decisions
- ❌ Production hotfixes under pressure

### 2. Code Review Standards

**For AI-assisted code, always check:**
- [ ] Developer understands every line
- [ ] Security checklist passed
- [ ] Input validation present
- [ ] Error handling comprehensive
- [ ] Tests cover edge cases
- [ ] No hardcoded secrets
- [ ] Accessibility considered (frontend)
- [ ] Performance implications understood
- [ ] Documentation explains "why" not just "what"

**Review questions:**
- "Can you explain this approach?"
- "What edge cases does this handle?"
- "Why did you choose this pattern?"
- "What happens if this fails?"
- "Did you run the security checklist?"

### 3. Supporting Junior Developers

**The learning dilemma:**
Juniors need to build fundamentals through struggle. AI can rob them of this if misused.

**Healthy junior dev + AI:**
- ✅ Try implementing first, then compare with AI
- ✅ Use AI to explain concepts, not just generate code
- ✅ Ask AI to explain its decisions
- ✅ Focus on understanding over speed
- ✅ Get human mentorship, not just AI guidance

**Unhealthy patterns:**
- ❌ Copy AI code without understanding
- ❌ Skip learning fundamentals
- ❌ Can't debug without AI
- ❌ No human code review
- ❌ Can't explain their own code

**Senior dev responsibilities:**
- Teach juniors HOW to use AI effectively
- Review AI-assisted code extra carefully
- Ensure fundamentals are being learned
- Model good AI usage patterns
- Create safe learning opportunities

### 4. Security & Compliance

**Non-negotiable rules:**
- 🚫 Never send proprietary code to public AI services
- 🚫 Never send customer PII to AI tools
- 🚫 Never send API keys or credentials to AI
- 🚫 Never send security-sensitive algorithms
- 🚫 Never blindly trust AI for security-critical code

**Acceptable with safeguards:**
- ✅ Anonymized/sanitized code snippets
- ✅ Public open-source code
- ✅ General algorithmic patterns
- ✅ Documentation and comments
- ✅ Test data (non-sensitive)

**Company policies needed:**
- Which AI tools are approved?
- What data can be shared?
- How to handle sensitive code?
- Code review requirements?
- Incident response for AI-related issues?

### 5. Transparency About AI Usage

**Debate: Should you disclose AI usage?**

**Arguments for disclosure:**
- Reviewers can scrutinize more carefully
- Honest about development process
- Helps track quality patterns
- Sets expectations for review depth

**Arguments against:**
- Irrelevant if code quality is good
- Could bias reviewers
- Every PR should be reviewed equally
- Stigmatizes AI usage

**Practical middle ground:**
- Mention AI assistance in commit messages for context
- Mark areas that need extra scrutiny
- Don't hide AI usage, but don't over-emphasize it
- Focus on code quality, not origin

**Example commit message:**
```
feat: implement user search with filters

Implement search with autocomplete, filtering by role/status,
and pagination. AI-assisted for boilerplate and test scaffolding.

- Added input debouncing (300ms)
- Handles empty results gracefully
- Includes loading states
- Extensive edge case testing

Note: Extra review attention on input sanitization (lines 42-58)
```

## Activity 5A: Team Guidelines Exercise

### Setup
Break into groups focused on different areas:
- **Group 1:** When to use/not use AI tools
- **Group 2:** Code review standards for AI code
- **Group 3:** Security and compliance requirements
- **Group 4:** Supporting junior developer learning

### Task (20 min)
Each group drafts **specific, actionable guidelines** for their area.

**NOT this (too vague):**
> "Use AI responsibly"

**This (specific and actionable):**
> "Before merging AI-generated authentication code, run the security checklist (docs/security-checklist.md) and get review from a senior developer"

### Share & Synthesize (10 min)
- Each group presents (2 min)
- Collect into unified guideline document
- Discuss conflicts or gaps

### Deliverable
A real document your team can use. Template provided in `templates/team-guidelines.md`.

## Activity 5B: Responsible Use Discussion

### Format: Fishbowl Discussion
- Inner circle (4-5 volunteers) discusses topic
- Outer circle observes and can "tap in"
- Rotate topics every 7-8 minutes

### Topics

**Topic 1: Junior Developer Learning**
- If AI writes code for you, what are you actually learning?
- How do juniors maintain fundamentals while using AI?
- What's the senior developer's responsibility?
- Is there a "new path" to learning with AI?

**Topic 2: Human Judgment Override**
- When should you ignore AI suggestions?
- How do you know when AI is confidently wrong?
- What decisions should never be delegated to AI?
- Where is human judgment irreplaceable?

**Topic 3: Transparency & Trust**
- Should teams know which code was AI-assisted?
- How much AI assistance is "too much" for one PR?
- Do code review standards change for AI code?
- How do you build trust in AI-assisted work?

## Activity 5C: Measuring Impact (Optional)

### The DX Core 4 Framework

Track these dimensions:
1. **Speed:** Cycle time, PR velocity
2. **Effectiveness:** Output per engineer
3. **Quality:** Bug rates, security issues
4. **Impact:** Developer satisfaction

### Simple Weekly Tracking

```markdown
## AI Tool Impact - Week of [date]

**Time Saved:**
- Estimated hours saved: ___ hours
- Primarily on: [boilerplate / tests / debugging / exploration]

**Code Statistics:**
- PRs merged: ___ (AI-assisted) / ___ (manual)
- Bugs introduced: ___ (AI code) / ___ (manual code)
- Security issues found in review: ___

**Developer Experience:**
- Productivity feeling (1-5): ___
- Confidence in AI code (1-5): ___
- Would recommend to teammates: Yes / No / Maybe

**Learnings:**
- What worked well this week:
- What didn't work:
- Will change next week:
```

### Calculate Your Personal ROI

```
Hours saved per week: [X]
× 52 weeks
× Your hourly rate
= Annual value

Compare to tool cost = ROI
```

**Be realistic:** Not every task gets 45% faster. Some tasks AI doesn't help with at all.

## Common Adoption Challenges

### Challenge 1: "AI generates bad code"
**Response:** Define clear standards, use checklists, enforce reviews

### Challenge 2: "Juniors aren't learning"
**Response:** Create guidelines for junior AI usage, ensure mentorship continues

### Challenge 3: "Security vulnerabilities increasing"
**Response:** Make security checklist mandatory, add automated scanning

### Challenge 4: "Code quality decreasing"
**Response:** Enforce understanding requirement ("explain your code"), strengthen reviews

### Challenge 5: "Inconsistent patterns"
**Response:** Create team-specific prompts, document preferred patterns

## Team Guidelines Template

```markdown
# [Team Name] AI Coding Tool Guidelines

## Approved Tools
- [List approved tools]
- Request approval for new tools via [process]

## When to Use AI
- ✅ [Specific use case]
- ✅ [Specific use case]
- ❌ [Specific restriction]
- ❌ [Specific restriction]

## Code Review Requirements
For AI-assisted code:
- [ ] [Specific requirement]
- [ ] [Specific requirement]

## Security Standards
- All AI-generated code must pass security checklist
- [Specific security requirement]

## Junior Developer Guidelines
- [Specific guidance]
- [Specific guidance]

## Data Sharing Policy
- ✅ OK to share: [types of data]
- 🚫 Never share: [types of data]

## Transparency
- [Your team's policy on disclosing AI usage]

## Review & Update
- Guidelines reviewed: [frequency]
- Last updated: [date]
- Owner: [person/team]
```

## Synthesis & Action Planning (10 min)

### Individual Reflection
Write down:
1. **One specific practice I'll try next week:**
2. **One thing I'll stop doing:**
3. **One thing I'll discuss with my team:**

### Accountability Partners
- Pair up with someone
- Share your commitments
- Exchange contact info
- Check in with each other in 1 week

## Key Takeaways

- ✅ AI tools need team guidelines, not just individual judgment
- ❌ "Just be responsible" isn't enough guidance
- ✅ Junior developer learning must be protected
- ❌ Productivity gains don't justify security compromises
- ✅ Measure impact to justify continued investment
- ❌ Adoption without standards creates technical debt
- 📝 The best time to set guidelines is NOW

## Resources

- [Team Guidelines Template](templates/team-guidelines.md)
- [ROI Measurement Guide](../../docs/roi-measurement.md)
- [Junior Developer Guide](docs/junior-dev-guide.md)
- [Security Policy Template](templates/security-policy.md)

## Next Steps

After completing this module:
1. Draft guidelines for your actual team
2. Discuss with your tech lead/manager
3. Move on to [Module 6: Capstone Challenge](../06-capstone/)

---

**Remember: The goal isn't maximum AI usage. It's sustainable, responsible AI usage that makes your team better.**
