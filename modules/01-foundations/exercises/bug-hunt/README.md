# Exercise 1B: Safari Bug Hunt

**Time:** 35 minutes
**Difficulty:** Intermediate

## 🐛 The Case of the Disappearing Paywall

**Current status:** 🔥 Marketing is panicking

## Product Context / Bug Report

```
As a FT reader on Safari mobile
I want the paywall to display correctly
So that I understand subscription options when I hit my article limit

Bug Report from User Testing:
"On my iPhone using Safari, the paywall just... doesn't show up?
I can read everything for free. Which is nice for me, but probably
bad for your business model. 😬"

Priority: HIGH (revenue impacting)
Browser: Safari 17.x on iOS
Reproducible: Yes
Works in: Chrome, Firefox, Edge
Fails in: Safari (desktop and mobile)
```

## Your Mission

Find the bug, fix it, don't break anything else.

Use AI to help investigate, but remember: **AI often makes confident guesses about browser-specific issues without real knowledge.**

## Setup

```bash
cd modules/01-foundations/exercises/bug-hunt
git checkout -b your-name/safari-bug-fix
npm install
npm run dev  # Should start local server at http://localhost:3000
```

## The Scenario

The paywall component exists. It works perfectly in Chrome, Firefox, and Edge. But in Safari? Invisible. Gone. Disappeared into the ether.

Your task: Investigate, diagnose, and fix it.

## Hints (No, really, read these)

- This works fine in Chrome desktop (of course it does)
- Something about Safari's JavaScript engine? Or CSS? Or dark magic?
- The paywall component *exists* - it's just shy in Safari
- Yes, you can use AI to help investigate
- No, AI won't immediately know what's wrong (it's not that good)
- Browser dev tools are your best friend

## Things You Have At Your Disposal

- Browser dev tools (Safari, Chrome, Firefox)
- AI debugging assistance
- This README (you're reading it, good job)
- Your own experience debugging things that work everywhere except Safari
- Stack Overflow (let's be honest, you were going there anyway)
- The entire codebase in this exercise directory

## What To Check

**Common Safari-specific issues:**
- [ ] JavaScript features Safari doesn't support
- [ ] CSS properties Safari handles differently
- [ ] ES6+ syntax Safari's engine chokes on
- [ ] Date/time handling differences
- [ ] LocalStorage/SessionStorage quirks
- [ ] Flexbox/Grid edge cases
- [ ] Event handling differences
- [ ] Webkit-specific bugs

### Testing Your Fix

### In Safari (if you have a Mac)
```bash
npm run dev
# Open http://localhost:3000 in Safari
# Test the paywall appears after viewing 3 articles
```

### Comprehensive testing
```bash
npm test
# All tests should pass, including Safari-specific ones
```

## Success Criteria

- [ ] Paywall appears in Safari after user hits article limit
- [ ] Paywall looks correct (no layout issues)
- [ ] Paywall is functional (buttons work, interactions work)
- [ ] Still works in Chrome, Firefox, Edge
- [ ] No console errors in any browser
- [ ] Tests pass (`npm test`)
- [ ] You understand WHY it was broken
- [ ] You can explain the fix to someone else

## Debugging Strategy

### Step 1: Reproduce (5 min)
1. Open the app in Chrome - verify paywall works
2. Open the app in Safari (or run Safari tests)
3. Confirm the bug exists
4. Document what you observe

### Step 2: Investigate (10 min)
1. Open Safari dev tools (Develop menu → Show Web Inspector)
2. Check the Console tab for errors
3. Check the Elements tab - is the paywall HTML there?
4. Check the Network tab - are assets loading?
5. Use AI to suggest possible causes based on error messages

**Example AI prompt:**
> I have a React component that renders fine in Chrome but not Safari. The console shows [your error here]. What are common Safari-specific issues that could cause this?

### Step 3: Fix (15 min)
1. Make targeted changes based on your investigation
2. Test in Safari after each change
3. Verify Chrome still works
4. Run the full test suite

### Step 4: Document (5 min)
1. Write a clear commit message explaining the fix
2. Document why the bug occurred
3. Note any Safari-specific gotchas for the team

## Example AI Debugging Conversation

**❌ Bad approach:**
> "Fix this code to work in Safari"
> [pastes entire component]

**✅ Good approach:**
> "I have a paywall component that works in Chrome but not Safari. In Safari, I see this error in the console: [error message]. The component uses [specific features/libraries]. What are potential Safari compatibility issues?"

**✅ Even better:**
> "The component renders in Safari (I can see it in the Elements inspector) but it's not visible on screen. CSS shows 'display: flex' is applied. This works in Chrome. What Safari flexbox bugs could cause invisible-but-present elements?"

## Common Safari Gotchas

Here are real Safari issues that have burned developers:

1. **Date parsing:** Safari hates `new Date("2025-11-19")` format
2. **Smooth scrolling:** `scroll-behavior: smooth` not supported until Safari 15.4
3. **Flexbox gaps:** `gap` property in flexbox came late to Safari
4. **Backdrop filter:** Requires `-webkit-` prefix
5. **Array.prototype.at():** Only in Safari 15.4+
6. **Private class fields:** Different syntax requirements
7. **Optional chaining:** Late adopter

## Commit Your Fix

```bash
git add .
git commit -m "fix: safari paywall display issue

Root cause: [your explanation here]
Solution: [what you changed]

Tested on:
- Safari 17.x (iOS)
- Safari 17.x (macOS)
- Chrome 120 (still works)
- Firefox 120 (still works)

AI assistance: [where it helped/didn't help]

Closes #[issue-number]"

git push origin your-name/safari-bug-fix
```

## Reflection Questions

After fixing the bug:

1. **How did you discover the root cause?**
2. **Did AI's suggestions help, hurt, or both?**
3. **What would you do differently next time?**
4. **How could this bug have been prevented?**
5. **What did you learn about Safari's quirks?**

## Group Discussion

- Compare the different "confidently wrong" suggestions the AI gave each of you. What patterns do you notice?
- When is it better to spend time trying to get a good answer from an AI, versus going directly to the official documentation (e.g., MDN, WebKit Bug Tracker)?

## Gamification Element

**First person/team to:**
- ✅ Identify the root cause correctly
- ✅ Implement a working fix
- ✅ Pass all tests
- ✅ Document the debugging process

**Wins the "Safari Whisperer" badge!**

## Reference Material

- [Safari Web Inspector Guide](https://developer.apple.com/safari/tools/)
- [Safari Release Notes](https://developer.apple.com/documentation/safari-release-notes)
- [Can I Use](https://caniuse.com/) - Browser compatibility checker
- [WebKit Bug Tracker](https://bugs.webkit.org/)

## Next Steps

After completing this exercise:
1. Check the solution in `solutions/` (after you've tried!)
2. Review your debugging process
3. Move on to [Module 2: Understanding Codebases](../../02-codebase-understanding/README.md)

---

**Remember: Browser dev tools > AI guesses for debugging**

**Bonus:** If you finish early, introduce a different browser-specific bug for a teammate to find!
