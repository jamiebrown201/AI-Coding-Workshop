# Writing Good Prompts for AI Coding Assistants

**Before you look at prompt examples in exercises:** Try writing your own first! This guide teaches you HOW to write effective prompts, not WHAT to write.

---

## Why Prompt Quality Matters

AI coding assistants are only as good as the prompts you give them. A vague prompt like "fix my code" gets you generic suggestions. A specific, well-structured prompt gets you targeted, useful help.

**The difference:**

❌ **Poor prompt**: "Why doesn't this work?"
✅ **Good prompt**: "This React component throws 'Cannot read property of undefined' when I click the button. Expected: button updates count state. Actual: crashes. Here's the code: [paste code]. What's the bug?"

---

## Core Principles

### 1. Provide Context

AI doesn't know your project. Tell it:

- **What language/framework** you're using
- **What you're trying to achieve**
- **What's currently happening** (vs what should happen)
- **Relevant code** (not your entire codebase!)

**Example:**
```
I'm working on a TypeScript React component that displays article previews.
When I pass an article without an image, it should show a fallback.
Currently it shows a broken image icon instead.
```

### 2. Be Specific About Your Goal

Don't say "make it better" - define what "better" means:

- Faster? (performance optimization)
- Cleaner? (refactoring for readability)
- More secure? (fix vulnerabilities)
- More accessible? (WCAG compliance)

**Example:**
```
Refactor this function to:
1. Reduce time complexity from O(n²) to O(n log n)
2. Add TypeScript types
3. Handle edge case when array is empty
```

### 3. Show, Don't Just Tell

Include examples of:
- Input data
- Expected output
- Current (incorrect) behavior
- Error messages (exact text!)

**Example:**
```
Input: articles = [{id: 1, title: "Test"}, {id: 2, title: "Demo"}]
Expected: Should display 2 article cards
Actual: Displays empty div
Error in console: "articles.map is not a function"
```

### 4. Break Down Complex Tasks

Don't ask for everything at once. Build incrementally:

**Instead of:** "Build a search feature with filters, sorting, and pagination"

**Do this:**
1. "Create a search input that filters articles by title"
2. "Add category filter dropdown to existing search"
3. "Implement client-side sorting by date"
4. "Add pagination with 10 items per page"

Each step is testable before moving forward.

---

## Practical Frameworks

### For Debugging

**Answer these questions in your prompt:**

1. **What should it do?** (expected behavior)
2. **What's it actually doing?** (actual behavior)
3. **What's the error?** (exact message, stack trace)
4. **What have you tried?** (shows your thinking)

**Template:**
```
[Language/Framework] - [What the code should do]

Expected: [specific behavior]
Actual: [what's happening]
Error: [exact message]

Code: [paste relevant code]

What's causing this and how do I fix it?
```

### For Learning/Exploring Code

**When you want to understand unfamiliar code:**

1. **Point to specific code** (file name, function name)
2. **Ask targeted questions**
3. **Request explanations of specific parts**

**Template:**
```
I'm exploring the [component/function] in [file].

What I understand: [your current understanding]
What I'm confused about: [specific question]

Can you explain [specific part] and how it relates to [other part]?
```

### For Implementing Features

**Step-by-step approach:**

1. **Start with requirements** (what needs to be built)
2. **Specify constraints** (framework, style guide, performance)
3. **Provide examples** (similar code in your project)

**Template:**
```
Create a [component/function] that:
- [requirement 1]
- [requirement 2]

Tech constraints:
- Using [framework version]
- Following [style guide]
- Must be [performance requirement]

Example of similar code in this project:
[paste reference]
```

### For Refactoring

**Be explicit about goals:**

1. **What's wrong with current code?**
2. **What specific improvements?**
3. **What must NOT change?** (behavior, API)

**Template:**
```
Refactor this [language] code to:
1. [specific goal]
2. [specific goal]

Current code: [paste]

Constraints:
- Keep the same API (don't break callers)
- Maintain existing tests
- Follow [style guide]
```

---

## Common Mistakes to Avoid

### ❌ Too Vague
**Bad:** "This doesn't work"
**Why:** AI needs specifics - what doesn't work? How should it work?

### ❌ Too Much Context
**Bad:** [pastes 500 lines of code] "Find the bug"
**Why:** AI gets overwhelmed. Narrow down to the relevant section.

### ❌ No Examples
**Bad:** "Validate email addresses"
**Why:** What counts as valid? Provide example inputs/outputs.

### ❌ Multiple Questions in One
**Bad:** "Fix this bug and also refactor it and add tests and explain how it works"
**Why:** One thing at a time. You'll get better results.

### ❌ Assuming AI Knows Your Project
**Bad:** "Update the cart component"
**Why:** Which cart component? What framework? What needs updating?

---

## Iteration is Normal

**You won't get perfect results on the first try.** That's okay!

Use follow-up prompts to refine:

1. **First attempt:** General request
2. **Second attempt:** "That's close, but use [different approach]"
3. **Third attempt:** "Good, now add [missing requirement]"
4. **Fourth attempt:** "Explain why you chose [approach]"

Each iteration builds on the previous, getting closer to what you need.

---

## How to Know if Your Prompt is Good

Ask yourself:

- [ ] **Could someone else understand my goal** from this prompt?
- [ ] **Have I included relevant context** (language, framework, constraints)?
- [ ] **Have I shown examples** (input, output, error messages)?
- [ ] **Is my goal specific** (not "make it better" but "reduce time complexity")?
- [ ] **Am I asking one clear thing** (not multiple unrelated questions)?
- [ ] **Have I broken down complex tasks** (not asking for entire features)?

If you answer "no" to any of these, improve your prompt before sending.

---

## Practice Makes Perfect

**The best way to learn:** Try different prompts for the same problem and compare results.

**Exercise:**
1. Write a vague prompt
2. Write a detailed prompt
3. Compare the AI responses
4. Notice the difference in quality

Over time, you'll develop intuition for what makes a good prompt.

---

## Quick Reference Card

```
✅ DO:
- Specify language/framework
- Include error messages (exact text)
- Show expected vs actual behavior
- Provide code examples
- Break tasks into steps
- Ask specific questions

❌ DON'T:
- Be vague ("fix this")
- Paste entire files
- Ask multiple questions at once
- Assume AI knows your project
- Skip examples
- Request magic ("make it perfect")
```

---

## Remember

**AI is a tool, not a magic wand.**

Good prompts = Good results
Vague prompts = Vague results

Take time to craft clear prompts. The 2 minutes you spend writing a good prompt saves 20 minutes of back-and-forth with unclear AI responses.

**Now go write some great prompts!** 🚀
