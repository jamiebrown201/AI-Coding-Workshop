# AI Coding Anti-Patterns

**What NOT to do when using AI coding assistants**

## The Hall of Shame

These are real patterns we've seen that lead to problems. Learn from others' mistakes.

---

## Anti-Pattern #1: Blind Code Acceptance

### What it looks like:
```javascript
// Developer asks AI: "Create a user login function"
// AI generates 50 lines of code
// Developer: *copies without reading*
// Developer: *commits*
// Developer: *pushes to production*
```

### Why it's bad:
- You don't understand the code
- You can't debug it when it breaks
- You can't explain it in code review
- It might contain security vulnerabilities
- It might not meet your actual requirements

### The fix:
- **Read every single line**
- Ask yourself: "Do I understand this?"
- Test it thoroughly
- If you can't explain it, you don't own it

### Real consequence:
> "A junior dev used AI to generate authentication code. It looked great. It had SQL injection vulnerabilities. We got breached. The junior dev couldn't explain the code or fix it. Don't be this person."

---

## Anti-Pattern #2: Context Dumping

### What it looks like:
```
"Here's my entire 5000-line file. Make it better."
[Pastes massive blob of code]
```

### Why it's bad:
- AI gets worse with too much context
- Can't distinguish signal from noise
- Generic, surface-level analysis
- Misses what actually matters
- Wastes your time with useless output

### The fix:
- **Start small and focused**
- Provide just the relevant section
- Give specific context about what matters
- Build understanding incrementally

### Example:
**❌ Bad:**
> "Explain this entire codebase [dumps 50 files]"

**✅ Good:**
> "This function handles user registration [paste function].
> It integrates with Stripe [context].
> Can you review for security issues?"

---

## Anti-Pattern #3: Vibe Coding in Production

### What it looks like:
```
Developer: "Make the app faster"
AI: [Generates code]
Developer: *deploys to production without testing*
Users: "The app is broken"
```

### Why it's bad:
- No requirements definition
- No testing
- No understanding of changes
- No rollback plan
- "Faster" is vague and unmeasurable

### The fix:
- **Define specific, measurable goals**
- Test thoroughly
- Measure actual impact
- Have rollback plan
- Deploy gradually (feature flags)

### Example:
**❌ Vague:**
> "Optimize this"

**✅ Specific:**
> "Reduce this API endpoint's response time from 2s to <500ms
> by optimizing the database queries. Must maintain all
> current functionality. Will test with load testing tool."

---

## Anti-Pattern #4: Shadow AI

### What it looks like:
```
Developer: Uses unapproved AI tools
Developer: Sends company code to public AI service
Developer: Includes proprietary algorithms
Developer: Shares customer PII
Security team: "Why is our code on the internet?"
```

### Why it's bad:
- Violates company policies
- Security risk
- Compliance violation
- Legal liability
- Data leakage

### The fix:
- **Only use approved tools**
- Never send sensitive data to AI
- Follow company guidelines
- When in doubt, ask
- Use private/enterprise AI instances

### What NOT to share:
- 🚫 Customer PII
- 🚫 API keys or credentials
- 🚫 Proprietary algorithms
- 🚫 Security-sensitive code
- 🚫 Private business logic

---

## Anti-Pattern #5: Training Data Contamination

### What it looks like:
```
// Developer sends code to AI
const SECRET_KEY = 'sk_live_abc123xyz789';
const DB_PASSWORD = 'prod_password_2024';

// This code is now in AI's context
// Might appear in suggestions to others
// Credentials potentially exposed
```

### Why it's bad:
- Secrets leaked to AI service
- Might be used in training data
- Could appear in others' suggestions
- Compliance nightmare
- Actual security breach

### The fix:
- **Never include secrets in AI prompts**
- Sanitize code before sharing
- Use placeholders
- Assume AI remembers everything

### How to sanitize:
```javascript
// ❌ Don't send this:
const stripe = require('stripe')('sk_live_abc123xyz789');

// ✅ Send this:
const stripe = require('stripe')(process.env.STRIPE_KEY);

// Or use placeholders:
const stripe = require('stripe')('PLACEHOLDER_API_KEY');
```

---

## Anti-Pattern #6: AI as Architect

### What it looks like:
```
Developer: "Design my entire application architecture"
AI: [Generates complex microservices architecture]
Developer: *starts building without questioning*
3 months later: "This is overly complex and unmaintainable"
```

### Why it's bad:
- AI doesn't understand your context
- AI doesn't know your scale
- AI doesn't know your team's skills
- AI often overengineers
- You're responsible for maintainability

### The fix:
- **You make architecture decisions**
- AI can suggest options
- You evaluate trade-offs
- Consider your team, scale, timeline
- Start simple, evolve as needed

### Remember:
- Architecture is a human decision
- AI doesn't face consequences of bad architecture
- You will maintain this
- Your team needs to understand it

---

## Anti-Pattern #7: Copy-Paste Debugging

### What it looks like:
```
Code breaks → Copy error to AI → AI suggests fix →
Paste fix → Code still broken → Copy new error to AI →
AI suggests another fix → Paste fix → Repeat 10 times
```

### Why it's bad:
- You're not learning
- Not understanding root cause
- Wasting time
- Building on shaky foundation
- Can't fix it yourself next time

### The fix:
- **Understand the error first**
- Use AI to explain, not just fix
- Learn the underlying concept
- Fix properly, not with band-aids
- Build real understanding

### Better approach:
1. Read the error message carefully
2. Understand what it means
3. Identify root cause
4. Ask AI to explain the cause
5. Implement fix with understanding
6. Learn for next time

---

## Anti-Pattern #8: Test-Last (or Never)

### What it looks like:
```
Developer: Generates feature code with AI
Developer: "It works on my machine!"
Developer: Merges to main
Production: *catches fire*
Developer: "But it worked locally..."
```

### Why it's bad:
- No confidence in changes
- Regressions go unnoticed
- Can't refactor safely
- "Works on my machine" syndrome
- Production becomes your test environment

### The fix:
- **Write tests as you code**
- AI can generate test scaffolding
- Test edge cases explicitly
- CI/CD catches issues
- Tests are documentation

---

## Anti-Pattern #9: Documentation Procrastination

### What it looks like:
```
Developer: Builds complex feature with AI
Developer: "I'll document it later"
Later: [Never comes]
6 months later: Nobody understands the code
```

### Why it's bad:
- Future you won't remember
- Teammates can't maintain it
- Onboarding is painful
- Technical debt accumulates
- "Later" means "never"

### The fix:
- **Document as you build**
- AI can draft documentation
- But you make it accurate and useful
- Explain WHY, not just WHAT
- Include examples and edge cases

---

## Anti-Pattern #10: The Rewrite Trap

### What it looks like:
```
Developer: "This legacy code is ugly"
AI: "Let me rewrite everything in a modern framework"
Developer: *rewrites entire system*
New code: Missing edge cases, new bugs, doesn't handle production load
```

### Why it's bad:
- Legacy code handles cases you forgot
- Rewrites introduce new bugs
- "Ugly" code might be "battle-tested"
- You lose institutional knowledge
- Expensive and risky

### The fix:
- **Understand before rewriting**
- Refactor incrementally
- Keep tests passing
- Maintain backward compatibility
- Document why code is "weird"

### The rule:
> "Never rewrite code you don't understand, even if AI says it's better."

---

## Anti-Pattern #11: Feature Creep via AI

### What it looks like:
```
Task: "Add a simple login button"
AI: "Here's a complete authentication system with OAuth, 2FA,
     biometric auth, blockchain verification, and AI-powered
     behavior analysis!"
Developer: "Ooh, fancy!" *implements everything*
```

### Why it's bad:
- Overengineering
- Increased complexity
- More bugs
- Harder maintenance
- Scope creep
- Never ships

### The fix:
- **Start with MVP**
- Add complexity only when needed
- AI suggests options, you choose scope
- Simplicity is a feature
- You can always add more later

---

## Anti-Pattern #12: Prompt Engineering Obsession

### What it looks like:
```
Developer: Spends 30 minutes crafting perfect prompt
Developer: Uses advanced prompting techniques
Developer: Still gets mediocre results
Developer: Could have written code in 15 minutes
```

### Why it's bad:
- Diminishing returns
- Time wasted on prompt optimization
- Context quality matters more
- Sometimes writing code is faster
- Don't optimize the wrong thing

### The fix:
- **Focus on context quality > prompt tricks**
- Write clear, specific requirements
- Sometimes just write the code
- AI is a tool, not always the right tool

---

## Anti-Pattern #13: The Junior Dev Speedrun

### What it looks like:
```
Junior dev: Uses AI for everything
Junior dev: Never learns fundamentals
Junior dev: Can't debug without AI
Junior dev: Can't pass technical interviews
Junior dev: "But I'm so productive!"
```

### Why it's bad:
- Missed foundational learning
- Can't work without AI
- Can't debug own code
- Career growth stunted
- Technical debt in skills

### The fix (for juniors):
- **Learn fundamentals first**
- Try implementing before using AI
- Use AI to explain, not just generate
- Build debugging skills
- Understand before moving forward

### The fix (for seniors):
- **Mentor juniors properly**
- Don't let them skip fundamentals
- Review AI-assisted work carefully
- Ensure learning is happening
- Create safe learning opportunities

---

## Anti-Pattern #14: Security Theatre

### What it looks like:
```
Developer: *runs AI security scan*
AI: "No issues found!"
Developer: "Great! Ship it!"
Security team: "This has 5 SQL injection vulnerabilities"
Developer: "But AI said it was fine!"
```

### Why it's bad:
- False sense of security
- AI misses nuanced vulnerabilities
- 45% of AI code has security issues
- Compliance violations
- Actual breaches

### The fix:
- **Use security checklist manually**
- AI scanning is one tool, not the only tool
- Human review is essential
- Test security explicitly
- When in doubt, get security review

---

## Anti-Pattern #15: The Lone Wolf

### What it looks like:
```
Developer: Uses AI exclusively
Developer: Doesn't ask teammates
Developer: Doesn't share knowledge
Developer: Builds in isolation
Team: Has no idea what's being built
```

### Why it's bad:
- Knowledge silos
- No shared understanding
- Code reviews are painful
- Team can't maintain code
- Bus factor = 1

### The fix:
- **Collaborate with humans**
- Share AI-assisted approaches
- Get code reviews
- Document decisions
- AI augments team, doesn't replace it

---

## How to Spot Anti-Patterns in Your Work

### Daily checklist:
- [ ] Can I explain every line of code I committed?
- [ ] Did I run the security checklist?
- [ ] Are there tests?
- [ ] Would my team understand this?
- [ ] Did I consider alternatives?
- [ ] Is this the simplest solution?
- [ ] Would this work in production?

### Warning signs:
- "I'm not sure how this works, but it runs"
- "AI said so" (as justification)
- "I'll document/test it later"
- "Let's just rewrite everything"
- "This is too complex but whatever"
- "I didn't have time to review it properly"

---

## The Meta Anti-Pattern

### AI Dependency
**The ultimate anti-pattern:**
Becoming unable to code without AI assistance.

**Symptoms:**
- Panic when AI is down
- Can't solve problems manually
- Lost fundamental skills
- AI is a crutch, not a tool

**Prevention:**
- Regular "AI-free" coding
- Maintain fundamental skills
- Use AI strategically, not universally
- Remember: AI augments, doesn't replace

---

## Remember

**AI is a powerful tool. Like any powerful tool, it can be misused.**

The difference between effective and ineffective AI usage isn't the tool—it's **how you use it**.

Avoid these anti-patterns, and you'll be in the top 10% of AI-assisted developers.

---

**"The best tool, used poorly, produces the worst results."**
