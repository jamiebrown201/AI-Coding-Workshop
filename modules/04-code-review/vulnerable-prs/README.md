# Activity 4A: Reviewing AI-Generated Code

## 🚨 The Case of the AI-Assisted Comment System

**PR #847:** Add comment system for articles
**Author:** @new-dev
**Status:** 🟡 Awaiting your review

## The Scenario

A colleague has submitted a PR for a new comment system. They were transparent about using AI to generate most of the code and have documented their process in `AI_USAGE.md`.

**Read these files before reviewing:**
1. [PR_DESCRIPTION.md](./PR_DESCRIPTION.md) - The pull request description
2. [AI_USAGE.md](./AI_USAGE.md) - How AI was used and what the developer reviewed
3. [CommentSystem.js](./CommentSystem.js) - The actual code to review

## Your Mission

Review this **AI-generated code** with a focus on:

1. **Security vulnerabilities** - Find at least 5 critical issues
2. **AI transparency** - Evaluate how well the developer documented AI usage
3. **Developer responsibility** - Assess whether the developer properly reviewed the AI output
4. **Review burden** - Consider if the developer unfairly shifted work to reviewers

## Setup

### Option 1: Review from Branch (Realistic)

```bash
# Checkout the feature branch like you would in a real PR review
git checkout feature/comment-system-ai-assisted

cd modules/04-code-review/vulnerable-prs

# Read the PR description and AI usage docs first
cat PR_DESCRIPTION.md
cat AI_USAGE.md

# Then review the code
cat CommentSystem.js
```

### Option 2: Review from Main Branch

```bash
cd modules/04-code-review/vulnerable-prs

# All files are available here too
ls -la
```

## Review Process

### Step 1: Read the Context (5 min)

Before looking at code, understand what you're reviewing:

1. **Read [PR_DESCRIPTION.md](./PR_DESCRIPTION.md)**
   - What does the author say they built?
   - What did they test?
   - What are they unsure about?

2. **Read [AI_USAGE.md](./AI_USAGE.md)**
   - What prompts did they use?
   - What did AI generate vs. what did they write?
   - What did they review vs. what did they skip?
   - What assumptions did they make?

3. **Form initial impressions:**
   - Did the developer properly review AI output?
   - Are they being transparent about AI usage?
   - Did they offload responsibility to reviewers?

### Step 2: Review the Code (20 min)

Now review [CommentSystem.js](./CommentSystem.js) for:

- [ ] **Security vulnerabilities** (SQL injection, XSS, auth bypass, etc.)
- [ ] **Missing authentication/authorization**
- [ ] **Input validation issues**
- [ ] **Information leakage in errors**
- [ ] **Data privacy concerns**
- [ ] **Missing rate limiting/abuse prevention**

### Step 3: Document Your Findings

Create a file called `review-findings.md` with:

- [ ] Each security issue you found
- [ ] Severity rating (Critical/High/Medium/Low)
- [ ] Explanation of why it's a problem
- [ ] Suggested fix
- [ ] Whether the developer should have caught this themselves

## Ground Rules

### For Using AI in Your Review:

- ✅ You can use AI to help scan for issues
- ✅ You must understand and explain every issue you report
- ❌ Don't just copy-paste AI findings - verify them
- ❌ Don't blame "AI flagged it" - own your review comments

### For Your Review Comments:

- [ ] Rate severity: Critical, High, Medium, or Low
- [ ] Explain *why* it's a problem, not just *what* is wrong
- [ ] Suggest a fix (can use AI to help generate examples)
- [ ] Be constructive - this is a learning opportunity

## Gamification: Bug Bounty

**Scoring:**
- 10 points per Critical issue found
- 5 points per High
- 2 points per Medium
- 1 point per Low
- **Bonus:** +5 points if you find something an automated AI scanner might miss (e.g., a logic flaw).
- **Penalty:** -3 points for false positives.

**Winner gets the "Bug Bounty Hunter" badge!**

## Hints

Look for common vulnerabilities like:
- SQL Injection
- Cross-Site Scripting (XSS)
- Authentication/Authorization issues
- Insecure Direct Object References
- Information leakage in error messages
- Missing input validation
- Hardcoded secrets

## Additional Questions to Answer

Beyond finding bugs, consider these broader questions:

### About AI Transparency:

1. **Was the developer transparent enough about AI usage?**
   - Did AI_USAGE.md provide helpful context?
   - Should all AI-assisted PRs include this documentation?
   - What information was missing?

2. **Did the transparency change how you reviewed?**
   - Did knowing it was AI-generated make you more suspicious?
   - Did it help you focus your review?
   - Would you have found the same issues without knowing?

### About Developer Responsibility:

3. **Did the developer properly review the AI output?**
   - What should they have caught before submitting?
   - Did they unfairly shift work to reviewers?
   - Were their assumptions reasonable?

4. **Is "AI wrote it" a valid excuse?**
   - Should developers be held accountable for AI-generated bugs?
   - Does using AI change the developer's responsibility?
   - What's the difference between AI assistance and offloading work?

### About Review Process:

5. **Should AI-generated code be reviewed differently?**
   - Does it need extra scrutiny?
   - Should it require specific checks?
   - How does this scale as AI becomes more common?

6. **Who owns the quality of AI-generated code?**
   - The developer who prompted it?
   - The reviewer who approves it?
   - The team that merges it?
   - The AI company that made the tool?

## Reflection Questions

After completing your review:

### Technical Questions:

1. **Which vulnerabilities were hardest to spot? Why?**
2. **Did you use AI to help? How effective was it? Did it miss anything?**
3. **Would you have found these issues without reading AI_USAGE.md?**
4. **What's the most critical issue you found?**

### Process Questions:

5. **Did the developer do enough due diligence before submitting?**
6. **Should they have caught these issues themselves?**
7. **Is it fair to expect reviewers to catch all AI-generated issues?**
8. **How would you change your code review process for AI-assisted PRs?**

### Responsibility Questions:

9. **If this code shipped with vulnerabilities, who's at fault?**
10. **Should developers who use AI be held to higher review standards?**
11. **What's the right balance between AI productivity and code quality?**
12. **How do we prevent AI from becoming a "blame shield"?**

## Group Discussion

### Security Discussion:

- Compare findings - which vulnerabilities did everyone find vs. miss?
- If you used AI to review: what did it catch vs. miss?
- How did knowing the code was AI-generated affect your review?

### Responsibility Discussion:

- **Who is ultimately responsible** for security vulnerabilities in AI-generated code?
  - The developer who prompted the AI?
  - The AI tool company?
  - The code reviewer who approved it?
  - The team that merged it?

- **Is it ethical** to submit minimally-reviewed AI code expecting reviewers to catch issues?

- **Should AI usage be disclosed** in all PRs? Why or why not?

### Process Discussion:

- **How should review process change** for AI-assisted code?
- **What documentation** should developers provide when using AI?
- **How do we balance** AI productivity gains with quality/security?
- **What would you do differently** if you were the developer in this scenario?

## Next Steps

After completing this exercise, move on to **Activity 4B: Refactoring Challenge**.
