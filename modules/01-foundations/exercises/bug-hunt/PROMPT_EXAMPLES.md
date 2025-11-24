# Prompt Examples for Bug Hunt Exercise

**⚠️ Only look at this file AFTER you've tried writing your own prompts!**

These examples show effective prompts for this debugging exercise. Compare them with what you wrote to learn what works well.

---

## Example 1: Analyzing the Component

```
I'm working on the Bug Hunt exercise in modules/01-foundations/exercises/bug-hunt/

The search feature filters articles as I type, but when I press Enter or
click the Search button, the page reloads and I lose my filtered results.

Can you analyze the SearchableArticleList component in
src/components/SearchableArticleList.jsx and explain what might be
causing the page reload?
```

**What makes this good:**
- ✅ States which exercise (context)
- ✅ Describes expected vs actual behavior
- ✅ Points to specific file
- ✅ Asks a clear question

---

## Example 2: Asking for Multiple Hypotheses

```
I'm working on the Bug Hunt exercise in modules/01-foundations/exercises/bug-hunt/

You suggested that the form submission is causing the reload. What are
2-3 other possible causes for a search button that causes page reloads?
I want to check each possibility systematically before implementing a fix.
```

**What makes this good:**
- ✅ References AI's previous answer
- ✅ Requests multiple alternatives (not just accepting first answer)
- ✅ Explains reasoning (systematic debugging)
- ✅ Shows critical thinking

---

## Example 3: Generating Debugging Code

```
I'm working on the Bug Hunt exercise in modules/01-foundations/exercises/bug-hunt/

I think the issue might be the form submission behavior. Can you show me
how to add console.logs to the handleSearch function to verify:
1. When the function is called
2. What triggers it (Enter key vs button click)
3. Whether preventDefault is being called
```

**What makes this good:**
- ✅ States hypothesis clearly
- ✅ Requests specific debugging approach
- ✅ Lists exactly what to verify
- ✅ Focused request (not "add logs everywhere")

---

## Example 4: Implementing the Fix

```
I'm working on the Bug Hunt exercise in modules/01-foundations/exercises/bug-hunt/

I've confirmed the bug: the form submits when I press Enter or click the
button, causing a page reload.

Show me how to prevent the default form submission behavior in the
handleSearch function. Explain why this fix works.
```

**What makes this good:**
- ✅ Confirms bug found (shows you verified it)
- ✅ Specific request (prevent form submission)
- ✅ Points to exact function
- ✅ Asks for explanation (understanding, not just copy/paste)

---

## Example 5: Asking AI to Explain Its Solution

```
I'm working on the Bug Hunt exercise in modules/01-foundations/exercises/bug-hunt/

You suggested adding event.preventDefault() in handleSearch. Can you explain:
1. Why does a form submit by default?
2. What does preventDefault() actually do?
3. Are there other ways to solve this (like not using a <form> tag)?
4. What are the pros/cons of each approach?
```

**What makes this good:**
- ✅ Asks for deeper understanding
- ✅ Questions the "why" behind the solution
- ✅ Explores alternatives
- ✅ Weighs trade-offs
- ✅ Shows you want to learn, not just get the answer

---

## Common Patterns You'll Notice

All good prompts:
1. **Provide context** - Which exercise, what file
2. **State the problem clearly** - Expected vs actual
3. **Ask specific questions** - Not "fix this" but "how do I prevent X"
4. **Show your thinking** - What you've tried, what you believe
5. **Request explanations** - Not just code, but understanding

---

## Now Compare With Your Prompts

**Reflection questions:**
- How did your prompts compare?
- What context did you include that these didn't?
- What did these include that you missed?
- Which of your prompts got the best AI responses? Why?
- What will you do differently next time?

---

**Remember:** There's no single "perfect" prompt. These are examples of what works well, but your prompts might be just as effective if they follow the core principles!
