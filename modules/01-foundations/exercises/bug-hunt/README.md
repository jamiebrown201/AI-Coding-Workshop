# Exercise 1B: Bug Hunt

## 🐛 The Case of the Broken Article List

**Current status:** 🔥 Users can't read articles

## Product Context / Bug Report

```
As a FT reader
I want to see the list of articles load correctly
So that I can browse and read content

Bug Report from QA:
"The article list page isn't working. When you visit the page,
articles should load and display, but instead nothing appears.
The page just shows 'No articles found' even though we know
there are articles in the data file. The loading spinner shows
briefly, then disappears and shows the empty state."

Priority: HIGH (users can't access content)
Reproducible: Yes, every time
Expected: Article list displays 10 articles from fixtures/articles.json
Actual: "No articles found" message shows instead
```

## Your Mission

Find the bug, fix it, don't break anything else.

Use AI to help investigate, but remember: **AI might confidently suggest the wrong thing. Use your debugging skills to verify.**

## Setup

```bash
cd modules/01-foundations/exercises/bug-hunt
git checkout -b workshop/your-name/article-list-bug
npm install
npm run dev  # Should start local server at http://localhost:3000
```

## The Scenario

You've been given a simple article list page that should:
1. Fetch articles from `fixtures/articles.json`
2. Display them in a list
3. Show loading state while fetching
4. Show empty state if no articles found

The code looks fine at first glance, but something's broken.

## Hints (Read These First!)

- Open the browser dev tools Console tab - what do you see?
- Check the Network tab - is the fetch request happening?
- Look at the component code - is there a logic error?
- The bug is subtle but common in React/async code
- AI might suggest adding more code, but the fix is simpler than that

## Things You Have At Your Disposal

- Browser dev tools (Console, Network, Elements tabs)
- AI debugging assistance
- The codebase in this directory
- `fixtures/articles.json` with sample data
- Your debugging skills

## Debugging Strategy

### Step 1: Reproduce & Observe
1. Run `npm run dev`
2. Open http://localhost:3000 in your browser
3. Open DevTools Console tab
4. What do you see? Any errors? Any logs?
5. Check the Network tab - is `articles.json` being fetched?

### Step 2: Investigate the Code
1. Look at `src/ArticleList.tsx` - how does it fetch data?
2. Look at `src/App.tsx` - how is ArticleList used?
3. Check `fixtures/articles.json` - is the data there?
4. Use AI to help understand what might be wrong

### Step 3: Form a Hypothesis
Based on console errors or logs, what do you think is broken?
- Is it a fetch error?
- Is it a parsing error?
- Is it a state management issue?
- Is it a conditional rendering issue?

### Step 4: Fix & Test
1. Make ONE change at a time
2. Test after each change
3. Check both the browser and console
4. Verify the fix actually works

### Step 5: Verify & Clean Up
1. Run `npm test` to ensure tests pass
2. Remove any debug console.logs you added
3. Make sure the fix doesn't break anything else

## Example AI Prompts

**❌ Vague:**
> "Fix my broken React component"

**✅ Better:**
> "I'm working on the Bug Hunt exercise in modules/01-foundations/exercises/bug-hunt/
>
> I have a React component that fetches articles from a JSON file. The fetch seems to work (I see it in Network tab) but the articles don't display. The component shows 'No articles found' instead. What are common issues with async data fetching in React?"

**✅ Even better (with specifics):**
> "I'm working on the Bug Hunt exercise in modules/01-foundations/exercises/bug-hunt/
>
> In ArticleList.tsx, I'm using useState and useEffect to fetch articles. The console shows '[error message]'. The Network tab shows the fetch succeeded with 200 status. What could cause the articles array to be empty even though the fetch succeeded?"

## Success Criteria

- [ ] Article list displays all 10 articles from the fixture
- [ ] No console errors
- [ ] Loading state shows briefly while fetching
- [ ] Tests pass (`npm test`)
- [ ] You understand WHY it was broken
- [ ] You can explain the fix to someone else
- [ ] You removed any debug code you added

## Common Mistakes to Avoid

When using AI for debugging:
- ❌ Don't paste the entire codebase
- ❌ Don't blindly apply suggestions without understanding them
- ❌ Don't add more complexity to "fix" something
- ✅ Start with the error message
- ✅ Form your own hypothesis first
- ✅ Use AI to validate or expand your thinking

## Testing Your Fix

```bash
# Run the dev server
npm run dev

# Open browser, should see 10 articles

# Run tests
npm test

# Check there are no console errors
```

## Commit Your Fix

```bash
git add .
git commit -m "fix: article list not displaying data

Root cause: [explain what was broken]
Solution: [explain what you changed]

The bug was caused by [your explanation].
Fixed by [your solution].

AI assistance: [where it helped/didn't help]"

git push origin workshop/your-name/article-list-bug
```

## Reflection Questions

After fixing the bug:

1. **How long did it take you to find the bug?**
2. **Did you use AI? How did it help or mislead you?**
3. **What would you do differently next time?**
4. **How could this bug have been caught earlier?**
5. **What did you learn about debugging with AI?**

## Group Discussion

- What was the first thing each of you checked?
- Did AI give you the right answer immediately, or did it take iteration?
- How do you balance using AI for debugging vs. traditional debugging techniques?
- What debugging skills did you use that AI couldn't replace?

## Next Steps

After completing this exercise:
1. Review your debugging process
2. Move on to [Module 2: Understanding Codebases](../../02-codebase-understanding/README.md)

---

**Remember: The best debugging tool is a systematic approach. AI is a helper, not a replacement for thinking.**
