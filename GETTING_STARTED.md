# Getting Started with the AI Coding Workshop

## Pre-Workshop Setup

### Step 1: Install Prerequisites

#### Node.js (Required)
You need Node.js 18.x or higher.

**Check if you have it:**
```bash
node --version
```

**Don't have it? Install it:**
- **Mac:** `brew install node` or download from [nodejs.org](https://nodejs.org/)
- **Windows:** Download from [nodejs.org](https://nodejs.org/)
- **Linux:** `sudo apt install nodejs npm` or use your package manager

#### Git (Required)

```bash
git --version
```

If not installed: [git-scm.com](https://git-scm.com/)

#### AI Coding Tool (Choose One or More)

##### Option 1: Claude Code (Recommended for this workshop)

```bash
npm install -g @anthropic-ai/claude-code
```

Or download from: [https://claude.ai/code](https://claude.ai/code)

##### Option 2: GitHub Copilot

**CLI Installation:**
```bash
# Install Copilot CLI globally
npm install -g @github/copilot

# Start Copilot CLI
copilot
```

**Authentication:**
On first use, enter `/login` at the Copilot prompt, then follow the browser-based sign-in with your GitHub credentials.

**VS Code Extension:**
1. Open VS Code Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`)
2. Search for "GitHub Copilot" (official extension)
3. Click Install and sign in with your GitHub account when prompted

---

##### Option 3: OpenAI Codex

**CLI Installation:**
```bash
# Via npm (recommended)
npm install -g @openai/codex

# Or via Homebrew (macOS/Linux)
brew install codex
```

**First Run:**
```bash
# Start Codex CLI
codex
```

On first launch, sign in using your ChatGPT Plus, Pro, Team, Edu, or Enterprise account.

**VS Code Extension:**
1. Open VS Code Extensions view
2. Search for "Codex" (official OpenAI extension)
3. Click Install and authenticate with your OpenAI account

---

**Option 4: Any other AI coding assistant**
The principles in this workshop apply to all tools

### Step 2: Clone the Repository

```bash
git clone https://github.com/jamiebrown201/AI-Coding-Workshop.git
cd AI-Coding-Workshop
```

### Step 3: Install Dependencies

```bash
npm install
```

Go get coffee. Stretch. Check your email. Do NOT watch the terminal anxiously.

**Note:** Some exercises in the `modules` directory have their own dependencies and `package.json` files. The `README.md` file for each exercise will guide you if you need to run `npm install` in a specific exercise directory.

### Step 4: Run Setup Verification

```bash
npm run verify
# or ./scripts/verify-setup.sh if you prefer the shell script
```

**Expected output:**
```
✅ Node.js version: 18.x or higher
✅ Git configured with user details
✅ AI coding tool detected
✅ All dependencies installed successfully
🎉 You're ready to rock!
```

### Optional: Refresh the Fake Data

Want brand-new fixtures for the exercises? Run:

```bash
npm run generate-fixtures
```

This script repopulates everything under `data/` and the legacy system fixtures without touching your own work.

## Troubleshooting

### ❌ "Node.js version too old"

**Problem:** You have Node.js 16 or lower.

**Solution:**
```bash
# Mac
brew upgrade node

# Or use nvm (recommended)
nvm install 18
nvm use 18
```

### ❌ "Git not configured"

**Problem:** Git doesn't know who you are.

**Solution:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@ft.com"
```

### ❌ "AI coding tool not detected"

**Problem:** We can't find your AI tool.

**Solution:** This won't break the workshop. The verification just can't auto-detect your tool. If you know it's installed and working, you're fine.

### ❌ "npm install failed"

**Problem:** Dependencies didn't install.

**Common causes:**
1. **Network issues:** Try again with `npm install --verbose`
2. **Permission issues:** Don't use `sudo npm install` (that's a bad habit)
3. **Old npm:** Update npm with `npm install -g npm@latest`

**Still stuck?**
```bash
# Nuclear option: clean slate
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### ❌ "Tests are failing"

**Problem:** `npm test` shows errors.

**Solution:** This might be okay! Some tests expect you to complete exercises. But if you see errors about missing packages, try:
```bash
npm install
```

### ❌ "Permission denied on verify-setup.sh"

**Problem:** Script isn't executable.

**Solution:**
```bash
chmod +x scripts/verify-setup.sh
./scripts/verify-setup.sh
```

### ❌ "I'm on Windows and nothing works"

**Problem:** Shell scripts assume Unix-like environment.

**Solutions:**
1. **Use Git Bash** (comes with Git for Windows)
2. **Use WSL** (Windows Subsystem for Linux)
3. **Use PowerShell** (some scripts might need adaptation)

**For PowerShell users:**
Use `npm run verify` or run the Node script directly:
```powershell
node scripts/verify-setup.js
```

## Git Workflow During the Workshop

### Branch Naming Convention

**Important:** Use this format for all your work:

```
workshop/your-name/exercise-name
```

Examples:
- `workshop/jamie/article-preview`
- `workshop/jamie/safari-bug`
- `workshop/alex/legacy-code`

### Creating Branches for Each Exercise

Each exercise README will tell you when to create a branch. The pattern is:

```bash
# Create branch for the exercise
git checkout -b workshop/your-name/exercise-name

# Work on the exercise
git add .
git commit -m "Your commit message"

# Push when ready to share
git push -u origin workshop/your-name/exercise-name
```

### Seeing Others' Work

```bash
# List all branches (including others' branches)
git fetch --all
git branch -r

# Check out someone else's branch to see their code
git checkout workshop/othername/article-preview

# Go back to main to start a new exercise
git checkout main
```

### Important Notes

- ⚠️ **Never push to main** - Always use the `workshop/your-name/exercise-name` format
- ✅ **Create a new branch per exercise** - Keeps work organized
- ✅ **Commit often** - Save your progress as you go
- ✅ **Push when ready** - Share your work so others can learn from it
- ✅ **Check out others' branches** - See different approaches to the same challenges

## What to Bring to the Workshop

**Required:**
- [ ] Laptop with battery charged + charger
- [ ] AI coding tool installed and working
- [ ] Repository cloned and setup verified
- [ ] Your favorite beverage

**Optional but helpful:**
- [ ] Second monitor if you have one
- [ ] Headphones (for focus time if needed)
- [ ] Notebook for personal notes

## If You're Still Stuck

**Don't panic.** We'll have:
- Setup troubleshooting support at the start
- Facilitators available to help
- Pair programming option if your setup fails
- Backup cloud environments (limited availability)

The key is trying the setup beforehand so we know who needs help.

## Accessibility & Accommodations

We want everyone to participate fully:
- Need extra setup time? Let us know in advance
- Prefer larger text? We can adjust presentation displays
- Need breaks more frequently? Just signal the facilitator
- Working with a screen reader? Repo has accessibility considerations
- Any other needs? Email us: workshop-support@ft.com

## Next Steps

Once setup is complete:
1. Read the main [README.md](README.md)
2. Browse [Module 1](modules/01-foundations/README.md) to see what's coming
3. Check out the [Prompting Guide](docs/prompting-guide.md)
4. Get excited!

---

**See you at the workshop!**
