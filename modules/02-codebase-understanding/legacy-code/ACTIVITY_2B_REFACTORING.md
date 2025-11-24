# Activity 2B: Hands-On Refactoring Challenge

## From Understanding to Improving

**Prerequisites:** Complete Activity 2A (Architecture Analysis) first!

Now that you've mapped out the subscription management system, it's time to actually improve it. Find something that needs refactoring and fix it.

---

## The Challenge

**Pick something to refactor and actually do it** with AI assistance.

**Time:** 30-45 minutes

**Your choice!** You decide what needs refactoring based on your architecture analysis.

---

## Finding What to Refactor

Look through the codebase you just analyzed and find something that could be improved.

**Some ideas if you're stuck:**
- Add authentication to unprotected endpoints
- Extract business logic from route handlers into services
- Add input validation to endpoints
- Improve error handling
- Add webhook signature validation
- Refactor jQuery code in admin.html
- Fix inconsistent patterns
- Add missing tests

**But don't limit yourself!** If you spotted something else during your analysis, refactor that instead.

---

## Your Mission

1. **Identify a refactoring** (5 min)
   - Pick something specific you want to improve
   - Understand the current code
   - Decide what "better" looks like

2. **Plan your approach** (10 min)
   - How will you make this change safely?
   - What could break?
   - How will you test it?
   - Use AI for suggestions, but YOU decide the strategy

3. **Implement it** (20-25 min)
   - Make the actual code changes
   - Use AI to help write code
   - Test as you go
   - Make sure you didn't break anything

4. **Verify it works** (5 min)
   - Test your changes
   - Check existing functionality still works
   - Be ready to explain what you did

---

## Using AI Effectively

### ⚠️ Critical: AI Loves "Rewrite Everything"

AI will often suggest:
- "Let's rewrite this from scratch!"
- "Replace the entire structure"
- "Modernize everything at once"

**Push back!** Ask for incremental, safe approaches instead.

### Good Prompts for Refactoring:

**❌ Don't ask:** "Refactor this entire file"

**✅ Do ask:**
- "How can I improve [specific thing] without breaking [existing behavior]?"
- "What's the safest way to add [feature] to this code?"
- "Show me how to refactor this one function while keeping the same API"

**If you get stuck:**
- Refer to the [Writing Good Prompts Guide](../../../docs/writing-good-prompts.md)
- Check [PROMPT_EXAMPLES.md](./PROMPT_EXAMPLES.md) for refactoring prompt ideas

---

## Success Criteria

By the end, you should have:

- [ ] Identified a specific problem in the codebase
- [ ] Made actual code changes (not just planning)
- [ ] Tested your refactoring works
- [ ] NOT broken existing functionality
- [ ] Used AI to help, but understood every change
- [ ] Can explain what you did and why

---

## Common Pitfalls

**"AI said to rewrite everything"**
- Push back! Ask for incremental changes
- Keep existing code working while you improve it

**"I'll refactor everything at once"**
- Start small, prove it works, then expand
- One change at a time reduces risk

**"No need to test, it's just a refactor"**
- Refactoring without tests is dangerous
- Verify old behavior still works

**"AI's code looks good, ship it"**
- Understand every line before committing
- If you can't explain it, you don't own it

---

## Stretch Goals

If you finish your refactoring early:

- Refactor another area
- Add tests for your changes
- Document what you changed and why

---

## Reflection Questions

After completing your refactoring:

1. **What did you refactor? Why that specifically?**
2. **Did AI suggest risky approaches you had to reject?**
3. **What was the trickiest part?**
4. **How did you verify your changes didn't break anything?**
5. **Would you feel confident deploying this to production?**
6. **What would you refactor next if you had more time?**

---

## Group Discussion

**Show and tell:**
- What did each person refactor?
- Demo your working changes
- What decisions did you make that AI couldn't?

**AI interaction:**
- Did AI try to over-engineer solutions?
- How did you keep changes incremental?
- What prompts worked best?

**Real-world application:**
- What did you learn by actually doing it (vs just planning)?
- How would you approach a larger refactoring in production?

---

## Key Takeaways

- ✅ **Refactoring is about incremental improvement**, not rewrites
- ✅ **AI can generate code, but YOU own the strategy**
- ✅ **Test as you go** - don't batch testing until the end
- ✅ **Small changes are safer** than big-bang rewrites
- ✅ **Understanding > Speed** - commit only code you understand

---

**Remember:** Good refactoring is boring. It improves code quality without changing behavior. If users notice your refactoring, you probably did it wrong!
