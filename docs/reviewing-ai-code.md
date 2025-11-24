# Guide: Reviewing AI-Generated Code

This guide helps you review code that was created with AI assistance, whether you're a reviewer or a developer self-reviewing your own AI-generated code.

---

## Table of Contents

1. [Why AI Code Needs Special Attention](#why-ai-code-needs-special-attention)
2. [The Responsibility Principle](#the-responsibility-principle)
3. [Review Checklist for AI Code](#review-checklist-for-ai-code)
4. [Common AI Code Smells](#common-ai-code-smells)
5. [AI Transparency Standards](#ai-transparency-standards)
6. [Questions for PR Authors](#questions-for-pr-authors)
7. [Questions for Reviewers](#questions-for-reviewers)

---

## Why AI Code Needs Special Attention

### AI's Blind Spots

AI coding assistants have systematic weaknesses:

**Security:**
- ✅ AI knows security patterns
- ❌ AI doesn't understand threat models
- ❌ AI prioritizes "working" over "secure"
- ❌ AI generates textbook vulnerabilities (SQL injection, XSS, etc.)

**Context:**
- ✅ AI recognizes common patterns
- ❌ AI doesn't know your business rules
- ❌ AI doesn't understand your system architecture
- ❌ AI makes assumptions about data, users, permissions

**Edge Cases:**
- ✅ AI handles happy paths well
- ❌ AI misses edge cases
- ❌ AI doesn't think about failure modes
- ❌ AI doesn't consider race conditions, timeouts, etc.

**Best Practices:**
- ✅ AI knows industry patterns
- ❌ AI doesn't know your team's conventions
- ❌ AI might suggest outdated approaches
- ❌ AI doesn't optimize for your specific constraints

### The 45% Problem

Studies show AI-generated code has a 45% chance of containing security vulnerabilities. This means:

- **Nearly half** of AI code has exploitable security issues
- **Most developers** don't catch these before committing
- **Reviewers become** the last line of defense
- **The burden shifts** from author to reviewer

---

## The Responsibility Principle

### Core Truth: You Own the Code You Commit

**If you write AI-generated code, you are responsible for it.**

❌ **Invalid excuses:**
- "AI wrote it, not me"
- "I assumed AI knew best practices"
- "I thought reviewers would catch issues"
- "It worked in my tests"
- "Other AI code gets merged"

✅ **Your responsibilities:**
- Review AI output like code from an untrusted source
- Understand every line before committing
- Test for security, not just functionality
- Document AI usage transparently
- Fix issues yourself, don't offload to reviewers

### The Review Burden Problem

**Using AI without proper review creates work for others:**

**Bad pattern:**
1. Developer: Prompts AI, gets code
2. Developer: Tests happy path, "it works!"
3. Developer: Commits without security review
4. Reviewer: Must catch all security issues, logic flaws, edge cases
5. **Result:** Developer saved time by shifting work to reviewer

**Good pattern:**
1. Developer: Prompts AI, gets code
2. Developer: Reviews for security, logic, edge cases
3. Developer: Tests malicious inputs, failure scenarios
4. Developer: Documents AI usage and what they reviewed
5. Reviewer: Normal review process
6. **Result:** AI saved time while maintaining quality

---

## Review Checklist for AI Code

Use this checklist whether you're self-reviewing your own AI code or reviewing someone else's.

### 1. Security Review (Critical for AI Code)

- [ ] **SQL Injection**: Are queries parameterized? Or string interpolated?
- [ ] **XSS**: Is user input sanitized? Is output encoded?
- [ ] **Authentication**: Do all endpoints require auth?
- [ ] **Authorization**: Are ownership/permissions checked?
- [ ] **Input Validation**: Is all user input validated?
- [ ] **Error Messages**: Do errors leak sensitive info?
- [ ] **Secrets**: Any hardcoded API keys, passwords, tokens?
- [ ] **Rate Limiting**: Can endpoints be abused?
- [ ] **CSRF**: Are state-changing operations protected?
- [ ] **Information Disclosure**: Is PII properly protected?

### 2. Logic & Correctness

- [ ] **Business Rules**: Does code follow domain requirements?
- [ ] **Edge Cases**: What happens with empty data, null, undefined?
- [ ] **Error Handling**: Are all failure paths handled?
- [ ] **Race Conditions**: Can concurrent requests cause issues?
- [ ] **Data Consistency**: Is data validated before persistence?
- [ ] **Assumptions**: What assumptions does the code make?

### 3. Code Quality

- [ ] **Readability**: Can the team understand and maintain this?
- [ ] **Testing**: Are there tests? Do they cover edge cases?
- [ ] **Performance**: Any obvious performance issues?
- [ ] **Debugging Code**: console.log, commented code, TODOs?
- [ ] **Dependencies**: Are new dependencies necessary and safe?
- [ ] **Conventions**: Does it follow team standards?

### 4. AI Transparency (for PRs)

- [ ] **Disclosure**: Did author disclose AI usage?
- [ ] **Documentation**: What prompts were used?
- [ ] **Review Evidence**: What did author review vs. skip?
- [ ] **Assumptions**: What did author assume was safe?
- [ ] **Testing**: Did author test security scenarios?

---

## Common AI Code Smells

These patterns indicate AI-generated code that wasn't properly reviewed:

### 🚩 Security Anti-Patterns

**String-interpolated SQL:**
```javascript
// AI loves this (VULNERABLE):
const query = `SELECT * FROM users WHERE id = ${userId}`;

// Should be:
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
```

**No authentication:**
```javascript
// AI often forgets:
router.post('/admin/delete-user', async (req, res) => {
  // No auth check!
  await deleteUser(req.body.userId);
});

// Should have:
router.post('/admin/delete-user', requireAdmin, async (req, res) => {
  // Auth middleware ensures only admins can access
});
```

**Exposing internals in errors:**
```javascript
// AI default:
catch (error) {
  res.status(500).json({
    error: error.message,
    stack: error.stack,  // Leaks internals!
    query: error.sql     // Leaks database structure!
  });
}

// Should be:
catch (error) {
  logger.error(error);  // Log internally
  res.status(500).json({ error: 'Internal server error' });
}
```

### 🚩 Logic Anti-Patterns

**No input validation:**
```javascript
// AI assumes input is valid:
router.post('/create', async (req, res) => {
  const { email, age } = req.body;
  // No validation!
  await createUser(email, age);
});

// Should validate:
const { email, age } = req.body;
if (!isValidEmail(email)) return res.status(400).json({ error: 'Invalid email' });
if (age < 0 || age > 150) return res.status(400).json({ error: 'Invalid age' });
```

**Missing error handling:**
```javascript
// AI happy path only:
const data = await fetchData();
const result = processData(data);
// What if fetchData fails? What if data is null?

// Should handle errors:
try {
  const data = await fetchData();
  if (!data) throw new Error('No data received');
  const result = processData(data);
  return result;
} catch (error) {
  // Handle appropriately
}
```

### 🚩 Quality Anti-Patterns

**Debugging artifacts:**
```javascript
// AI testing remnants:
console.log('DEBUG: User data:', user);  // Left in!
// const oldCode = () => {};              // Commented out!
// TODO: Fix this properly later         // Incomplete!
```

**Over-engineering:**
```javascript
// AI loves patterns even when unnecessary:
class UserServiceFactory {
  createUserService() {
    return new UserService(new UserRepository(new Database()));
  }
}
// For a simple CRUD app that just needs: getUserById()
```

---

## AI Transparency Standards

### What Developers Should Document

When submitting AI-assisted code, include an `AI_USAGE.md` or section in PR description:

**Required information:**
1. **What AI generated** - Which files/functions came from AI
2. **Prompts used** - What you asked for (helps reviewers understand intent)
3. **What you reviewed** - Security checks, testing, validation you did
4. **What you didn't review** - Be honest about gaps
5. **Assumptions made** - What did you assume was safe/correct?

**Example format:**
```markdown
## AI Usage

### What AI Generated:
- Lines 16-94: All CRUD endpoints (100% AI)
- Lines 122-177: Admin and export endpoints (100% AI)

### Prompts Used:
1. "Create Express router for comment CRUD"
2. "Add admin flagging and GDPR export"

### What I Reviewed:
- ✅ Tested happy paths manually
- ✅ Checked code compiles and runs
- ❌ Did not review for SQL injection
- ❌ Did not test with malicious inputs
- ❌ Did not add authentication

### Assumptions:
- Assumed AI would use parameterized queries (it didn't)
- Assumed database handles sanitization (it doesn't)
- Assumed auth would be added by middleware (it wasn't)
```

### Why Transparency Matters

**For reviewers:**
- Helps focus review on high-risk areas
- Reveals what author didn't check
- Sets expectations for review thoroughness

**For authors:**
- Forces reflection on what you didn't review
- Prevents "AI did it" excuse
- Documents due diligence

**For teams:**
- Builds trust through honesty
- Enables learning from AI usage patterns
- Provides data for improving processes

---

## Questions for PR Authors

Before submitting AI-generated code, ask yourself:

### Security:
1. **Did I test with malicious inputs?** (SQL injection, XSS, etc.)
2. **Did I verify authentication/authorization?**
3. **Did I check for information leakage in errors?**
4. **Would I feel comfortable if this shipped to production?**

### Quality:
5. **Do I understand every line of this code?**
6. **Can I explain why the AI chose this approach?**
7. **Did I test edge cases, not just happy paths?**
8. **Did I remove debugging code (console.log, comments, TODOs)?**

### Responsibility:
9. **Am I offloading work to reviewers?**
10. **If this breaks in production, could I debug it?**
11. **Did I document what AI generated and what I reviewed?**
12. **Would I be proud to put my name on this code?**

**If you answered "no" to any question, you're not ready to submit.**

---

## Questions for Reviewers

When reviewing AI-assisted code, ask:

### About the Code:
1. **What security vulnerabilities exist?**
2. **What edge cases are unhandled?**
3. **Does this follow our team conventions?**
4. **Are there obvious AI-generated anti-patterns?**

### About the Author's Process:
5. **Did the author properly review the AI output?**
6. **What did they skip or assume was safe?**
7. **Did they test security scenarios?**
8. **Are they being transparent about AI usage?**

### About Responsibility:
9. **Did the author unfairly shift work to me?**
10. **Should they have caught these issues themselves?**
11. **Is this PR demonstrating good AI usage practices?**
12. **Should I request more due diligence before reviewing?**

### Your Options:

**If author did their job:**
- Review normally, approve when satisfied

**If author skipped security review:**
- Request changes: "Please review for SQL injection, auth, etc. before re-requesting review"

**If author is learning:**
- Provide educational feedback on what to check next time

**If author is offloading work:**
- Push back: "This needs security review from the author before I review"

---

## Best Practices Summary

### For Developers Using AI:

✅ **DO:**
- Review AI code like code from an intern
- Test for security, not just functionality
- Document AI usage transparently
- Fix issues before submitting for review
- Learn from reviewers' findings

❌ **DON'T:**
- Blindly trust AI output
- Assume AI knows best practices
- Skip security testing
- Offload review work to others
- Use "AI wrote it" as an excuse

### For Code Reviewers:

✅ **DO:**
- Apply extra scrutiny to AI code
- Check for common AI anti-patterns
- Evaluate author's review process
- Provide educational feedback
- Push back on inadequate reviews

❌ **DON'T:**
- Assume AI code is correct
- Skip security review
- Accept "AI wrote it" excuses
- Do the author's job for them
- Approve without understanding

---

## The Bottom Line

**AI is a tool, not a replacement for engineering judgment.**

- AI can generate code quickly
- But YOU are responsible for its quality
- Code review is not a substitute for due diligence
- Transparency builds trust; hiding AI usage erodes it
- If you write it, you own it—regardless of how it was created

**Remember:** The fastest way to write code is to write it right the first time. AI doesn't change that truth; it just changes who does the writing.

---

## Additional Resources

- [Security Checklist](./security-checklist.md)
- [Writing Good Prompts](./writing-good-prompts.md)
- [Module 4: Code Review & Security](../modules/04-code-review/README.md)
