# Module 4: Code Review & Security

This module brings a crucial reality check to working with AI: the significant risk of security vulnerabilities in AI-generated code. You'll switch roles from builder to auditor, learning to critically review AI-assisted work for common security pitfalls. Understanding *why* AI makes these mistakes and how to catch them is paramount to safely integrating AI into your development workflow. Get ready to hunt for bugs that bite!

## Learning Objectives

By the end of this module, you'll be able to:
- ✓ Identify common security vulnerabilities in AI-generated code
- ✓ Conduct effective code reviews on AI-assisted work
- ✓ Use AI tools to help scan for issues (but verify results)
- ✓ Understand the 45% vulnerability statistic and why it matters
- ✓ Plan safe refactoring strategies
- ✓ Know when to reject AI suggestions outright

## Introduction/Scenario

**The Reality Check:** AI-generated code has a 45% chance of containing security vulnerabilities.

This module has two activities:

### Activity 4A: Security Review Challenge
Hunt for vulnerabilities in AI-generated code.

**Location:** `vulnerable-prs/`

**What you're reviewing:** A comment system PR that "works great" but has at least 5 security issues.

### Activity 4B: Refactoring Challenge
Safely modernize legacy code without breaking it.

**Location:** `refactoring-challenge/`

**What you're refactoring:** jQuery search code → React, maintaining all functionality.

## Structure/Activities

- **Activity 4A: Security Review Challenge**
- **Activity 4B: Refactoring Challenge**
- **Activity 4C: AI-Powered Test Generation**

## Getting Started

```bash
cd modules/04-code-review
```

Start with **Activity 4A** (Security Review), then move to **Activity 4B** (Refactoring).

### Starting This Module

Tell your AI agent which module you're working on:

```
I'm working on Module 4: Code Review & Security
The module is in modules/04-code-review/

I need to review AI-generated code for security vulnerabilities in the vulnerable-prs/ directory.
```

**Important:** Read the [Security Checklist](../../docs/security-checklist.md) before starting.

## Key Concepts

### The Security Mindset
When reviewing AI-generated code, ask:
1. **"What could go wrong?"**
2. **"What did AI forget?"**
3. **"What assumptions did AI make?"**

### Common Vulnerability Patterns
- SQL Injection
- XSS - Cross-Site Scripting
- Missing Authentication
- Insecure Direct Object References
- Hardcoded Secrets

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

**"It works, so it's fine"**
- Working ≠ Secure

**"Big bang refactoring"**
- AI loves to suggest "rewrite everything"

**"The old code is ugly, delete it"**
- That "ugly" code might handle critical cases

## Resources

- [Security Checklist](../../docs/security-checklist.md) - Your bible
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Security Review Template](../../docs/review-template.md)

## Next Steps

After completing this module:
1. Review your findings against the solution
2. Practice explaining vulnerabilities to others
3. Move on to [Module 5: Team Practices](../05-team-practices/README.md)

---

**Remember: Security is not optional. Every. Single. Time.**
