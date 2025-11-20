# 🤖 AI Coding Workshop: Learn to Use AI Tools Effectively

**Learn to work with AI coding assistants without losing your mind, your job, or your ability to think critically.**

This is a hands-on workshop with **7 real coding challenges** that teach you to use AI tools like Claude Code, GitHub Copilot, and Codex effectively and safely.

**📖 [Full Setup Guide (GETTING_STARTED.md)](GETTING_STARTED.md)** - Detailed instructions for all setup steps

---

## 🚀 Quick Start (5 Minutes)

### 1. Set Up Your AI Coding Tool

**You'll need an AI coding assistant** - either a code editor extension (like GitHub Copilot) or CLI tool (like Codex).

Popular options with setup guides:
- **Claude Code** - [Setup instructions](GETTING_STARTED.md#option-1-claude-code-recommended-for-this-workshop)
- **GitHub Copilot** - [Setup instructions](GETTING_STARTED.md#option-2-github-copilot)
- **OpenAI Codex** - [Setup instructions](GETTING_STARTED.md#option-3-openai-codex)
- **Or any other AI coding assistant** - The principles apply to all tools

### 2. Clone This Repository
```bash
git clone https://github.com/jamiebrown201/AI-Coding-Workshop.git
cd AI-Coding-Workshop
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Verify Everything Works
```bash
npm run verify
```

✅ If you see green checkmarks, you're ready to start!
❌ If not, check [GETTING_STARTED.md](GETTING_STARTED.md) for troubleshooting.

---

## 📚 The 7 Challenges

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

👉 **[Start Challenge 4](modules/04-code-review/refactoring-challenge/README.md)**

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

👉 **[Start Challenge 6](modules/04-code-review/vulnerable-prs/README.md)**

---

### Capstone Challenge (60 min)
**What you'll do:** Build a trending topics feature with real-time data
**What you'll learn:** Everything from the previous challenges under time pressure
**The catch:** You have 60 minutes and must pass a security checklist

👉 **[Start Capstone Challenge](modules/06-capstone/README.md)**

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

**Setup Instructions:** See [GETTING_STARTED.md](GETTING_STARTED.md) for detailed setup instructions for all AI tools.

---

## 📖 Two Ways to Learn

### Option 1: Self-Paced (Recommended for Solo Learners)
Work through challenges at your own speed. Each challenge has:
- Clear instructions in its README
- Starter code to begin with
- Complete solutions in a `solutions` directory to check against
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

### 1. Understanding > Speed
Fast code you don't understand is a liability. Every challenge requires you to explain what AI generated.

### 2. Security is Non-Negotiable
45% of AI-generated code has vulnerabilities. Challenge 6 will show you why code review is essential.

### 3. Skepticism is Healthy
Question everything AI suggests. Challenge 2 will teach you this when AI confidently suggests the wrong fix.

### 4. AI Augments, Doesn't Replace
AI handles boilerplate. You handle thinking. This distinction becomes clear by Challenge 5.

### 5. Context Quality > Prompt Quality
Giving AI the *right* 50 lines beats dumping 5000 lines. You'll learn this the hard way in Challenge 3.

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
│   └── 06-capstone/             # Capstone Challenge
├── docs/
│   ├── security-checklist.md    # Run before committing AI code
│   ├── prompting-guide.md       # Write better prompts
│   └── anti-patterns.md         # Common mistakes to avoid
├── data/
│   ├── articles/                # Article fixtures + schema
│   ├── analytics/               # Engagement + time-series data
│   ├── comments/                # Moderation samples
│   ├── subscriptions/           # Tier & entitlement data
│   ├── trending/                # Capstone datasets
│   └── users/                   # Fake user profiles
└── scripts/
    ├── verify-setup.js          # Cross-platform environment check
    ├── verify-setup.sh          # Shell version of the same check
    ├── generate-fixtures.js     # Refreshes all synthetic data
    ├── dev-server.js            # Boots sample APIs + dashboard
    └── security-scan.sh         # Scan for vulnerabilities
```

Need a fresh dataset? Run `npm run generate-fixtures` to recreate everything under `data/` and the legacy fixtures.

---

## 🏃 Get Started Now

### Beginner? Start Here:
1. Read [GETTING_STARTED.md](GETTING_STARTED.md)
2. Do [Challenge 1](modules/01-foundations/exercises/article-preview/README.md)
3. Then [Challenge 2](modules/01-foundations/exercises/bug-hunt/README.md)

### Experienced? Jump In:
1. Run `npm run verify`
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
- 👥 [Facilitator Guide](WORKSHOP_FACILITATOR_G
