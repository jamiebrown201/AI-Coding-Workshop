# Activity 4A: Security Review Challenge

**Time:** 25 minutes
**Difficulty:** Intermediate

## 🐛 The Case of the Insecure Comment System

**Current status:** 🚨 Security team is about to have a very bad day.

## Product Context / PR Description

```
"Added comment system for articles. Works great!
Tested locally. Ready to merge! 🚀"
```

## Your Mission

You are reviewing a PR from a colleague who seems to have relied heavily on an AI coding assistant and may not have reviewed the output carefully. Your job is to find the security vulnerabilities in the `CommentSystem.js` file. There are at least 5.

## Setup

```bash
cd modules/04-code-review/vulnerable-prs
```

## Ground Rules

- [ ] You can use AI to help scan for issues, but you must be able to understand and explain what you find.
- [ ] Document each issue you find in a new file called `review-findings.md`.
- [ ] For each issue, rate its severity: Critical, High, Medium, or Low.
- [ ] Explain *why* each issue is a problem, not just that "AI flagged it".

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

## Reflection Questions

After the exercise, discuss with your group:

1.  **Which vulnerabilities were the hardest to spot? Why?**
2.  **Did you use an AI tool to help? How effective was it? Did it miss anything?**
3.  **How would you change your regular code review process after this exercise?**
4.  **What is the single most important change the original developer could have made to avoid these issues?**

## Group Discussion

- If you used an automated security scanner (or an AI), what did it catch and what did it miss? Why do you think it missed certain vulnerabilities?
- Who is ultimately responsible for a security vulnerability introduced by an AI coding assistant? The developer who used it? The company that makes the tool? The team that didn't catch it in review?

## Next Steps

After completing this exercise, move on to **Activity 4B: Refactoring Challenge**.
