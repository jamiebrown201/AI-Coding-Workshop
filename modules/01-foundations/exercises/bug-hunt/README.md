# Exercise 1B: Bug Hunt

## 🐛 The Case of the Broken Search

**Current status:** 🔥 Users can't find anything

## Product Context / Bug Report

```
As a FT reader
I want to search for articles by keyword
So that I can find relevant content quickly

Bug Report from Users:
"The search bar isn't working properly. I type in a keyword
and hit search, but nothing happens. The articles just stay
the same - no filtering is happening. I've tried different
keywords but it never filters the results."

Priority: HIGH (search is a core feature)
Reproducible: Yes, every time
Expected: Typing and searching should filter the article list
Actual: Articles remain unchanged, search appears to do nothing
```

## Your Mission

Find the bug, fix it, don't break anything else.

Use AI to help investigate, but remember: **AI might confidently suggest the wrong thing. Use your debugging skills to verify.**

## Setup

```bash
cd modules/01-foundations/exercises/bug-hunt
git checkout -b workshop/your-name/search-bug-fix
npm install
npm run dev  # Should start local server at http://localhost:3000
```

## The Scenario

You've been given a search feature that should:

1. Display a list of articles
2. Let users type a search keyword
3. Filter articles by title/summary when user clicks "Search"
4. Show "No results found" if no matches

The search bar is there, you can type in it, but clicking search does nothing.

## Using AI to Debug: Your Approach

This exercise is about learning **how to use AI effectively for debugging**, not just finding the bug.

**The Goal:**

- Use AI to help you identify and fix the bug faster
- Learn what information AI needs to be helpful
- Understand when to trust AI vs. verify yourself
- Practice iterative debugging with an AI assistant

## Debugging Strategy with AI

### Step 1: Reproduce the Bug First

**Before asking AI anything, gather evidence:**

1. Run `npm run dev` and open http://localhost:3000
2. Try searching for "technology" or "markets"
3. Observe what happens - does the page reload? Do results change?
4. Open browser Console - any errors?
5. Check Network tab - is the page refreshing?

**Why this matters:** AI needs context. "It's broken" is useless. "When I click search, the page reloads and nothing filters" is actionable.

### Step 2: Ask AI to Analyze the Component

**Prompt the AI to examine the search component:**

```
"I'm working on the Bug Hunt exercise in modules/01-foundations/exercises/bug-hunt/

I'm working on a search feature in src/components/SearchableArticleList.jsx.

When I type a keyword and click the Search button, the page appears to
reload and the articles don't filter. There are no console errors.

Can you analyze the handleSearch function and identify potential issues?"
```

**What AI might suggest:**

- Missing event.preventDefault()
- State not updating
- Form submission behavior
- Event handler not attached

**Your job:** Verify AI's suggestions by testing them

### Step 3: Ask AI for Multiple Hypotheses

**Don't accept the first answer - ask for alternatives:**

```
"I'm working on the Bug Hunt exercise in modules/01-foundations/exercises/bug-hunt/

You suggested [AI's answer]. What are 2-3 other possible causes
for a search button that doesn't filter results? I want to check
each possibility systematically."
```

**Why this works:** AI might miss the obvious. Getting multiple theories helps you debug methodically.

### Step 4: Use AI to Generate Debugging Code

**Ask AI to help you verify your hypothesis:**

```
"I'm working on the Bug Hunt exercise in modules/01-foundations/exercises/bug-hunt/

I think the issue might be [your hypothesis]. Can you show me
how to add console.logs to verify if the handleSearch function
is being called and if state is updating?"
```

**AI can generate:**

- Console.log statements
- Debugger breakpoints
- Quick test code

### Step 5: Implement the Fix with AI

**Once you've identified the bug, ask AI for the fix:**

```
"I'm working on the Bug Hunt exercise in modules/01-foundations/exercises/bug-hunt/

The bug is that the form submits and causes a page reload.
Show me how to prevent the default form submission behavior."
```

**But verify the fix yourself!** Don't just copy-paste. Understand WHY it works.

## Success Criteria

- [ ] Search filters articles by title/summary
- [ ] Typing "technology" shows only tech articles
- [ ] Typing "markets" shows only market articles
- [ ] Empty search shows all articles
- [ ] "No results" shows when no matches
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

# Test searches:
# - "technology" should show 3 tech articles
# - "markets" should show 2 market articles
# - "environment" should show 1 article about green energy
# - "zzz" should show "No results found"
# - Empty search should show all 8 articles

# Run build to check for errors
npm run build
```

## Commit Your Fix

```bash
git add .
git commit -m "fix: search functionality not filtering articles

Root cause: [explain what was broken]
Solution: [explain what you changed]

The search feature wasn't working because [your explanation].
Fixed by [your solution].

Tested with various search terms to verify filtering works correctly."

git push origin workshop/your-name/search-bug-fix
```

## Reflection Questions

After fixing the bug:

1. **What was the first clue that led you to the bug?**
2. **Did you use AI? How did it help or mislead you?**
3. **Could you have done this quicker without AI? Why or why not?**
4. **How long did it take to find vs. fix?**
5. **What debugging technique was most useful?**
6. **How could this bug have been prevented?**

## Group Discussion

- What different approaches did people take to find the bug?
- Did anyone find it without AI? How?
- **Do you think you could have solved this faster without using AI? Why or why not?**
- What "obvious in hindsight" mistakes did we all miss initially?
- How do you balance traditional debugging (console.log, debugger) with AI assistance?
- For those who used AI: Did it speed you up or slow you down? Did it find the bug or lead you astray?

## Stretch Goal (Optional)

**If you finish early:** Try adding tests for the SearchableArticleList component using AI!

```
"I'm working on the Bug Hunt exercise in modules/01-foundations/exercises/bug-hunt/

I've fixed the search bug. Now I want to add tests for the SearchableArticleList
component to prevent this bug from happening again.

Can you help me write Jest/React Testing Library tests that cover:
- Searching for articles by title
- Searching by summary text
- Empty search showing all articles
- No results state when search doesn't match anything
- The form submission behavior (making sure it doesn't reload the page!)
"
```

**Learning goals:**
- Use AI to generate test cases
- Understand what makes a good test
- Learn how to test form submission behavior
- Practice verifying AI-generated tests actually work

**Questions to consider:**
- Did AI write good tests or just tests that pass?
- What edge cases did AI miss?
- How would these tests have caught the bug you just fixed?

## Next Steps

After completing this exercise:

1. Review your debugging process
2. Move on to [Module 2: Understanding Codebases](../../02-codebase-understanding/README.md)

---

**Remember: Good debugging is methodical. Check the simple things first, then get creative.**
