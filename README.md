# 🤖 AI Coding Workshop: Learn to Use AI Tools Effectively

**Learn to work with AI coding assistants without losing your mind, your job, or your ability to think critically.**

This is a hands-on workshop with **6 real coding challenges** that teach you to use AI tools like Claude Code, GitHub Copilot, and Codex effectively and safely.

---

## 🚀 Quick Start (5 Minutes)

### 1. Clone This Repository
```bash
git clone https://github.com/jamiebrown201/AI-Coding-Workshop.git
cd AI-Coding-Workshop
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Verify Everything Works
```bash
./scripts/verify-setup.sh
```

✅ If you see green checkmarks, you're ready to start!
❌ If not, check [GETTING_STARTED.md](GETTING_STARTED.md) for troubleshooting.

---

## 📚 The 6 Challenges

Each challenge is a real coding task. You'll use AI to help, but you're in control.

### Challenge 1: Build an Accessible Component (30 min)
**What you'll do:** Build a React article preview component using AI assistance
**What you'll learn:** AI is great at boilerplate but misses accessibility
**The catch:** AI will forget things like alt text and keyboard navigation

👉 **[Start Challenge 1](modules/01-foundations/exercises/article-preview/README.md)**

---

### Challenge 2: Debug a Safari Bug (30 min)
**What you'll do:** Fix a paywall that works in Chrome but not Safari
**What you'll learn:** When AI helps vs when it confidently misleads
**The catch:** AI will make confident guesses about browser bugs without real knowledge

👉 **[Start Challenge 2](modules/01-foundations/exercises/bug-hunt/README.md)**

---

### Challenge 3: Understand Legacy Code (30 min)
**What you'll do:** Map the architecture of a messy subscription system
**What you'll learn:** Context quality matters more than prompt quality
**The catch:** Feeding AI too much code makes it worse, not better

👉 **[Start Challenge 3](modules/02-codebase-understanding/legacy-code/README.md)**

---

### Challenge 4: Plan a Safe Refactor (30 min)
**What you'll do:** Plan migrating jQuery code to React without breaking production
**What you'll learn:** AI loves "rewrite everything" (which is usually a bad idea)
**The catch:** Big-bang rewrites introduce bugs; incremental is safer

👉 **[Start Challenge 4](modules/02-codebase-understanding/README.md#activity-2b-refactoring-planning-30-min)**

---

### Challenge 5: Build a Real-Time Dashboard (75 min)
**What you'll do:** Build a complete feature from scratch (frontend + backend + tests)
**What you'll learn:** Where AI helps most (boilerplate) and least (architecture)
**The catch:** AI can't make strategic decisions; you have to

👉 **[Start Challenge 5](modules/03-full-stack/README.md)**

---

### Challenge 6: Hunt for Security Bugs (30 min)
**What you'll do:** Review AI-generated code and find planted vulnerabilities
**What you'll learn:** 45% of AI code has security issues
**The catch:** AI-generated code looks right but is often dangerously wrong

👉 **[Start Challenge 6](modules/04-code-review/vulnerable-prs/CommentSystem.js)**

---

### Challenge 7: Final Project (60 min)
**What you'll do:** Build a trending topics feature with real-time data
**What you'll learn:** Everything from the previous challenges under time pressure
**The catch:** You have 60 minutes and must pass a security checklist

👉 **[Start Final Challenge](modules/06-capstone/README.md)**

---

## 🎯 What You'll Learn

By completing these challenges, you'll be able to:

✅ **Generate code faster** - Without sacrificing quality
✅ **Spot AI mistakes** - Especially security vulnerabilities
✅ **Write better prompts** - Context quality > clever wording
✅ **Review critically** - Trust but verify everything
✅ **Work safely** - Security is non-negotiable
✅ **Know the limits** - What AI can and can't do

---

## 🛠️ What You Need

**Required:**
- Node.js 18+
- Git
- An AI coding tool (Claude Code, GitHub Copilot, or Codex)
- Basic JavaScript/React knowledge

**Don't need:**
- Expert coding skills (we'll guide you)
- Prior AI tool experience (that's what you're learning!)
- AWS knowledge (we use mock data)

---

## 📖 Two Ways to Learn

### Option 1: Self-Paced (Recommended for Solo Learners)
Work through challenges at your own speed. Each challenge has:
- Clear instructions in its README
- Starter code to begin with
- Complete solutions to check against
- Estimated time to complete

**Start here:** [Self-Paced Guide](docs/self-paced-guide.md)

### Option 2: In-Person Workshop (For Teams/Groups)
Run as a facilitated full-day workshop with:
- Group activities and discussions
- Competitive elements and badges
- Peer learning opportunities
- Facilitator guidance

**Start here:** [Facilitator Guide](WORKSHOP_FACILITATOR_GUIDE.md)

---

## 🔑 Key Principles You'll Learn

### 1. Context Quality > Prompt Quality
Giving AI the *right* 50 lines beats dumping 5000 lines. You'll learn this the hard way in Challenge 3.

### 2. Understanding > Speed
Fast code you don't understand is a liability. Every challenge requires you to explain what AI generated.

### 3. Security is Non-Negotiable
45% of AI-generated code has vulnerabilities. Challenge 6 will show you why code review is essential.

### 4. AI Augments, Doesn't Replace
AI handles boilerplate. You handle thinking. This distinction becomes clear by Challenge 5.

### 5. Skepticism is Healthy
Question everything AI suggests. Challenge 2 will teach you this when AI confidently suggests the wrong fix.

---

## 📁 Repository Structure

```
AI-Coding-Workshop/
├── modules/
│   ├── 01-foundations/          # Challenges 1-2: Basic AI usage
│   ├── 02-codebase-understanding/ # Challenges 3-4: Legacy code
│   ├── 03-full-stack/           # Challenge 5: Complete feature
│   ├── 04-code-review/          # Challenge 6: Security review
│   ├── 05-team-practices/       # Team adoption guidelines
│   └── 06-capstone/             # Challenge 7: Final project
├── docs/
│   ├── security-checklist.md    # Run before committing AI code
│   ├── prompting-guide.md       # Write better prompts
│   └── anti-patterns.md         # Common mistakes to avoid
├── data/
│   └── articles/                # Mock data for exercises
└── scripts/
    ├── verify-setup.sh          # Check you're ready
    └── security-scan.sh         # Scan for vulnerabilities
```

---

## 🏃 Get Started Now

### Beginner? Start Here:
1. Read [GETTING_STARTED.md](GETTING_STARTED.md)
2. Do [Challenge 1](modules/01-foundations/exercises/article-preview/README.md)
3. Then [Challenge 2](modules/01-foundations/exercises/bug-hunt/README.md)

### Experienced? Jump In:
1. Run `./scripts/verify-setup.sh`
2. Pick any challenge that interests you
3. Work through at your own pace

### Running a Workshop? Guide Here:
1. Read [WORKSHOP_FACILITATOR_GUIDE.md](WORKSHOP_FACILITATOR_GUIDE.md)
2. Review all challenge READMEs
3. Prepare materials listed in guide

---

## ⚡ Quick Links

**For Learners:**
- 📝 [Getting Started](GETTING_STARTED.md)
- 🎯 [Self-Paced Guide](docs/self-paced-guide.md)
- 🔒 [Security Checklist](docs/security-checklist.md)
- 💡 [Prompting Guide](docs/prompting-guide.md)

**For Facilitators:**
- 👥 [Facilitator Guide](WORKSHOP_FACILITATOR_GUIDE.md)
- 📊 [Workshop Summary](WORKSHOP_SUMMARY.md)
- ✅ [Complete Audit](COMPLETE_AUDIT.md)

**Reference:**
- 🚫 [Anti-Patterns](docs/anti-patterns.md)
- 🔧 [Troubleshooting](docs/troubleshooting.md)

---

## 💬 Support

**Stuck on setup?** Check [GETTING_STARTED.md](GETTING_STARTED.md)
**Stuck on a challenge?** Each challenge README has hints
**Found a bug?** Open an issue
**Have suggestions?** PRs welcome!

---

## 📜 License

MIT License - Use freely, adapt, share, and improve.

---

**Ready? Pick a challenge and start building. Carefully.** 🚀
