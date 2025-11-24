# Exercise 1B: Bug Hunt

## 🐛 The Case of the Broken Search

**Current status:** 🔥 Users can't find anything

## Product Context / Bug Report

```
As a FT reader
I want to search for articles by keyword
So that I can find relevant content quickly

Bug Report from Users:
"The search feature is weird. When I type keywords, the results
filter correctly - that works fine. But when I press Enter or click
the 'Search' button, the page refreshes and I lose my search!

It's really annoying because I naturally press Enter after typing,
and boom - page reloads and my filtered results disappear."

Priority: HIGH (search is a core feature)
Reproducible: Yes, every time
Expected: Search should filter as you type AND allow pressing Enter/clicking button
Actual: Typing works, but pressing Enter or clicking button causes page reload
```

## Your Mission

Find the bug, fix it, don't break anything else.

Use AI to help investigate, but remember: **AI might confidently suggest the wrong thing. Use your debugging skills to verify.**

## About the Data

**The article data is fake** - it's hardcoded in `fixtures/articles.json` for this exercise. You're working with 8 mock articles covering different categories (markets, technology, economics, environment).

This is the first exercise, so we're keeping it simple with mock data rather than real APIs.

## Setup

```bash
cd modules/01-foundations/exercises/bug-hunt
git checkout -b workshop/your-name/search-bug-fix
npm install
npm run dev  # Should start local server at http://localhost:3000
```

## The Scenario

You've been given a search feature that should:

1. Display a list of articles (loaded from `fixtures/articles.json`)
2. Let users type a search keyword and see results filter live
3. Allow pressing Enter or clicking "Search" button without breaking
4. Show "No results found" if no matches

The search works as you type, but pressing Enter or clicking the button causes the page to reload!

## Using AI to Debug: Your Approach

This exercise is about learning **how to use AI effectively for debugging**, not just finding the bug as im sure for some people the bug may be slightly obvious.

**The Goal:**

- Use AI to help you identify and fix the bug faster
- Learn what information AI needs to be helpful
- Understand when to trust AI vs. verify yourself
- Practice iterative debugging with an AI assistant

## Debugging Strategy with AI

### Step 1: Reproduce the Bug First

**Before asking AI anything, gather evidence:**

1. Run `npm run dev` and open http://localhost:3000
2. Try typing "technology" in the search box
   - Notice: Results filter as you type! This works.
3. Now press Enter or click the "Search" button
   - Notice: The page reloads! Your search is lost.
4. Open browser Console - any errors?
5. Check Network tab - what happens when you press Enter?

**Why this matters:** AI needs context. "It's broken" is useless. "Typing works but pressing Enter reloads the page" is actionable.

### Step 2: Write Your Own Prompts

**Now it's your turn!** Try writing prompts to help you debug:

1. **Ask AI to analyze the component** - What context does AI need? What specific question should you ask?
2. **Ask AI for multiple hypotheses** - Don't accept the first answer. How do you request alternatives?
3. **Use AI to generate debugging code** - What information helps AI suggest useful debugging approaches?
4. **Implement the fix** - Once you identify the bug, how do you ask AI for a solution?

**If you get stuck:**
- Refer to the [Writing Good Prompts Guide](../../../docs/writing-good-prompts.md) for help on how to structure prompts
- Check [PROMPT_EXAMPLES.md](./PROMPT_EXAMPLES.md) to see example approaches

## Success Criteria

- [ ] Search filters articles as you type (title, summary, and category)
- [ ] Typing "technology" shows 3 tech articles
- [ ] Typing "markets" shows 2 market articles
- [ ] Typing "environment" shows 1 green energy article
- [ ] Typing "zzz" shows "No results found"
- [ ] Empty search shows all 8 articles
- [ ] Pressing Enter or clicking Search button does NOT reload the page
- [ ] No console errors
- [ ] Build completes without errors (`npm run build`)
- [ ] You understand WHY it was broken
- [ ] You can explain the fix to someone else

## Common Issues to Check

When debugging search functionality:

- [ ] Is the form submitting and causing a page reload?
- [ ] Is the event handler being called?
- [ ] Is state updating with the search term?
- [ ] Is the filter function correct?
- [ ] Are prop names spelled correctly?
- [ ] Is the filtered data being used for rendering?

## Testing Your Fix

```bash
# Run the dev server
npm run dev

# Test the search as you type:
# 1. Type "technology" - should show 3 tech articles as you type
# 2. Type "markets" - should show 2 market articles as you type
# 3. Type "environment" - should show 1 green energy article as you type
# 4. Type "zzz" - should show "No results found" as you type
# 5. Clear the search - should show all 8 articles

# Test the form submission (the bug you just fixed!):
# 6. Type "technology" then press Enter - should NOT reload page
# 7. Type "markets" then click Search button - should NOT reload page
# 8. The search results should remain stable

# Run build to check for errors
npm run build
```

## Reflection Questions

After fixing the bug:

1. **What was the first clue that led you to the bug?**
2. **How did AI help or mislead you?**
3. **Could you have done this quicker without AI? Why or why not?**
4. **How long did it take to find vs. fix?**
5. **What debugging technique was most useful?**
6. **How could this bug have been prevented?**

## Group Discussion

- What different approaches did people take to find the bug?
- **Do you think you could have solved this faster without using AI? Why or why not?**
- What "obvious in hindsight" mistakes did we all miss initially?
- How do you balance traditional debugging (console.log, debugger) with AI assistance?
- For those who used AI: Did it speed you up or slow you down? Did it find the bug or lead you astray?

## Stretch Goal (Optional)

**If you finish early:** This component has NO tests. Think about how testing could have prevented this bug!

**Your challenge:**

1. What tests would have caught this bug before it went to production?
2. Use AI to help you add unit tests for this component
3. Make sure your tests would FAIL with the bug, and PASS after your fix


## Next Steps

After completing this exercise:

1. Review your debugging process - what worked well?
2. **If you haven't already, check [PROMPT_EXAMPLES.md](./PROMPT_EXAMPLES.md)** - compare your prompts to see what you did well and what could improve
3. Reflect: Which prompts got the best AI responses? Why?
4. Move on to [Module 2: Understanding Codebases](../../02-codebase-understanding/README.md)
