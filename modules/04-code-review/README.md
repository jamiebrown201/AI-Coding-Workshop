# Module 4: Code Review & Security

**Duration:** 60 minutes

## Learning Objectives

By the end of this module, you'll be able to:
- ✓ Identify common security vulnerabilities in AI-generated code
- ✓ Conduct effective code reviews on AI-assisted work
- ✓ Use AI tools to help scan for issues (but verify results)
- ✓ Understand the 45% vulnerability statistic and why it matters
- ✓ Plan safe refactoring strategies
- ✓ Know when to reject AI suggestions outright

## The Reality Check

**AI-generated code has a 45% chance of containing security vulnerabilities.**

That's almost **half** of all AI-generated code. This isn't a theoretical problem—it's a practical reality you need to handle every day.

## Why AI Makes Security Mistakes

AI models are trained on public code, which includes:
- Security vulnerabilities (from old projects)
- Outdated patterns (deprecated security practices)
- Tutorial code (that cuts corners for brevity)
- Stack Overflow answers (quick fixes, not production code)

**AI doesn't understand security context.** It generates code that *looks* right but may be dangerously wrong.

## Structure

This module has two activities:

### Activity 4A: Security Review Challenge (25 min)
Hunt for vulnerabilities in AI-generated code.

**Location:** `vulnerable-prs/`

**What you're reviewing:** A comment system PR that "works great" but has at least 5 security issues.

### Activity 4B: Refactoring Challenge (25 min)
Safely modernize legacy code without breaking it.

**Location:** `refactoring-challenge/`

**What you're refactoring:** jQuery search code → React, maintaining all functionality.

## Prerequisites

- Completed Modules 1-3
- Understanding of common security vulnerabilities
- Read the [Security Checklist](../../docs/security-checklist.md) (seriously, read it)

## Getting Started

```bash
cd modules/04-code-review
```

Start with **Activity 4A** (Security Review), then move to **Activity 4B** (Refactoring).

## Key Concepts

### The Security Mindset

When reviewing AI-generated code, ask:

1. **"What could go wrong?"**
   - User inputs malicious data
   - API calls fail
   - Database queries return unexpected results
   - Authentication tokens are forged

2. **"What did AI forget?"**
   - Input validation
   - Error handling
   - Authentication/authorization checks
   - Rate limiting
   - Logging (without leaking sensitive data)

3. **"What assumptions did AI make?"**
   - User is trustworthy
   - Network is reliable
   - Data is well-formed
   - Browser is modern

### Common Vulnerability Patterns

**Top issues in AI-generated code:**

1. **SQL Injection** (25% of vulnerabilities)
   ```javascript
   // ❌ AI loves to do this
   db.query(`SELECT * FROM users WHERE id = ${userId}`)

   // ✅ Use parameterized queries
   db.query('SELECT * FROM users WHERE id = ?', [userId])
   ```

2. **XSS - Cross-Site Scripting** (20%)
   ```javascript
   // ❌ AI often forgets to sanitize
   <div dangerouslySetInnerHTML={{ __html: userComment }} />

   // ✅ Sanitize user content
   <div>{userComment}</div> // React escapes by default
   ```

3. **Missing Authentication** (15%)
   ```javascript
   // ❌ AI might forget auth checks
   app.get('/admin/users', (req, res) => {
     res.json(users); // No auth check!
   })

   // ✅ Always verify authorization
   app.get('/admin/users', requireAdmin, (req, res) => {
     res.json(users);
   })
   ```

4. **Insecure Direct Object References** (12%)
   ```javascript
   // ❌ AI might trust user input
   app.get('/user/:id', (req, res) => {
     res.json(getUser(req.params.id)); // Any user can access any profile!
   })

   // ✅ Verify ownership
   app.get('/user/:id', auth, (req, res) => {
     if (req.user.id !== req.params.id && !req.user.isAdmin) {
       return res.status(403).json({ error: 'Forbidden' });
     }
     res.json(getUser(req.params.id));
   })
   ```

5. **Hardcoded Secrets** (10%)
   ```javascript
   // ❌ AI might hardcode credentials
   const apiKey = 'sk_live_abc123...';

   // ✅ Use environment variables
   const apiKey = process.env.API_KEY;
   ```

### Safe Refactoring Principles

1. **Understand before changing**
   - Why does the code exist?
   - What edge cases does it handle?
   - What depends on it?

2. **Tests first**
   - Write tests for current behavior
   - Tests should pass before refactoring
   - Tests should still pass after

3. **Small, incremental changes**
   - One thing at a time
   - Commit frequently
   - Easy to rollback

4. **Maintain backward compatibility**
   - Don't break existing APIs
   - Deprecate, don't delete
   - Document breaking changes

## Success Criteria

You'll know you've succeeded when:
- [ ] You've identified at least 5 vulnerabilities
- [ ] You understand *why* each is a vulnerability
- [ ] You can explain the fix to someone else
- [ ] You've refactored code without breaking tests
- [ ] You understand when AI helps vs. hurts security

## Common Pitfalls

**"AI said it's secure"**
- AI doesn't understand security
- It generates patterns, not security analysis
- Always verify with security checklist

**"It works, so it's fine"**
- Working ≠ Secure
- Security issues often don't cause visible errors
- Test security explicitly

**"Big bang refactoring"**
- AI loves to suggest "rewrite everything"
- This introduces bugs
- Incremental changes are safer

**"The old code is ugly, delete it"**
- That "ugly" code might handle critical cases
- Understand before removing
- Tests protect you

## Working Styles

### Solo Review
- Use the security checklist systematically
- Ask AI to help scan, but verify everything
- Test edge cases and malicious inputs
- Document your findings

### Pair Review
- One person navigates, one observes
- Discuss potential vulnerabilities
- Challenge each other's assumptions
- Learn from different perspectives

## Gamification: Bug Bounty

**Activity 4A scoring:**
- 10 points per Critical vulnerability found
- 5 points per High
- 2 points per Medium
- 1 point per Low
- **Bonus:** +5 points if you find something AI missed
- **Penalty:** -3 points for false positives

**Winner gets the "Bug Bounty Hunter" badge!**

## Red Flags Checklist

Immediately investigate if you see:

- 🚩 `dangerouslySetInnerHTML` without sanitization
- 🚩 String concatenation in SQL queries
- 🚩 `eval()` or `Function()` constructor
- 🚩 Hard-coded credentials or API keys
- 🚩 No input validation
- 🚩 Passwords logged or stored in plain text
- 🚩 `cors({ origin: '*' })`
- 🚩 No rate limiting on auth endpoints
- 🚩 File uploads without validation
- 🚩 User input in file paths

## Tools & Resources

**Automated scanning:**
```bash
# Run security scan
npm run security-scan

# Check dependencies
npm audit

# Lint for security issues
npm run lint
```

**Reference materials:**
- [Security Checklist](../../docs/security-checklist.md) - Your bible
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Security Review Template](docs/review-template.md)

## Reflection Questions

After completing this module:
1. **How many vulnerabilities did you find?**
2. **Were you surprised by any?**
3. **Did AI help or hurt your security review?**
4. **What will you do differently when using AI now?**
5. **Would you have caught these without the checklist?**

## Key Takeaways

- ✅ 45% of AI-generated code has vulnerabilities
- ❌ AI doesn't understand security context
- ✅ Use AI to help scan, but always verify
- ❌ "It works" doesn't mean "it's secure"
- ✅ Security checklists are essential
- ❌ Big-bang refactoring introduces bugs
- 📝 Code review is non-negotiable, especially for AI code

## Next Steps

After completing this module:
1. Review your findings against the solution
2. Practice explaining vulnerabilities to others
3. Move on to [Module 5: Team Practices](../05-team-practices/)

---

**Remember: Security is not optional. Every. Single. Time.**
