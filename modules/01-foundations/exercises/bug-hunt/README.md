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

## Hints (Read These First!)

- Open the browser dev tools Console tab - any errors?
- Try typing in the search box and clicking Search
- Check the React DevTools - is state updating?
- Look at the search handler function - is it being called?
- The bug might be in the event handler, state management, or filtering logic
- Sometimes the simplest bugs are the hardest to spot

## Things You Have At Your Disposal

- Browser dev tools (Console, React DevTools)
- AI debugging assistance
- The codebase in this directory
- `fixtures/articles.json` with sample data
- Your debugging skills

## Debugging Strategy

### Step 1: Reproduce & Observe
1. Run `npm run dev`
2. Open http://localhost:3000 in your browser
3. Try searching for a keyword (e.g., "technology", "markets")
4. What happens? Anything in the Console?
5. Open React DevTools - does state change when you search?

### Step 2: Investigate the Code
1. Look at `src/SearchBar.tsx` - how does the search handler work?
2. Look at the parent component - how is search state managed?
3. Check the filter logic - is it correct?
4. Add console.logs to trace the flow
5. Use AI to help spot issues

### Step 3: Form a Hypothesis
Based on your investigation, what do you think is broken?
- Is the event handler attached correctly?
- Is the state updating?
- Is the filter logic wrong?
- Is there a typo in a prop name?

### Step 4: Fix & Test
1. Make ONE change at a time
2. Test after each change
3. Try different search terms
4. Verify both matches and no-matches work

### Step 5: Verify & Clean Up
1. Run `npm test` to ensure tests pass
2. Remove any debug console.logs you added
3. Test edge cases (empty search, special characters)

## Example AI Prompts

**❌ Vague:**
> "My search isn't working"

**✅ Better:**
> "I'm working on the Bug Hunt exercise in modules/01-foundations/exercises/bug-hunt/
>
> I have a search bar component that should filter a list of articles. When I click the search button, nothing happens - the list doesn't filter. There are no console errors. What are common issues with search/filter functionality in React?"

**✅ Even better (with specifics):**
> "I'm working on the Bug Hunt exercise in modules/01-foundations/exercises/bug-hunt/
>
> In SearchBar.tsx, I have a form with an input and button. The handleSearch function should update state, but when I add console.logs, I see [what you see]. The state is [describe state]. What could prevent the search handler from working correctly?"

## Success Criteria

- [ ] Search filters articles by title/summary
- [ ] Typing "technology" shows only tech articles
- [ ] Typing "markets" shows only market articles  
- [ ] Empty search shows all articles
- [ ] "No results" shows when no matches
- [ ] No console errors
- [ ] Tests pass (`npm test`)
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
# - "technology" should show tech articles
# - "markets" should show market articles
# - "zzz" should show "No results found"
# - Empty search should show all articles

# Run tests
npm test
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
3. **How long did it take to find vs. fix?**
4. **What debugging technique was most useful?**
5. **How could this bug have been prevented?**

## Group Discussion

- What different approaches did people take to find the bug?
- Did anyone find it without AI? How?
- What "obvious in hindsight" mistakes did we all miss initially?
- How do you balance traditional debugging (console.log, debugger) with AI assistance?

## Next Steps

After completing this exercise:
1. Review your debugging process
2. Move on to [Module 2: Understanding Codebases](../../02-codebase-understanding/README.md)

---

**Remember: Good debugging is methodical. Check the simple things first, then get creative.**
