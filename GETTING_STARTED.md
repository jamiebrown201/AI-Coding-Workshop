# Getting Started with the AI Coding Workshop

## Pre-Workshop Setup (Do This 2 Days Before!)

**Estimated time: 15-20 minutes**

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
You definitely have this, but just in case:

```bash
git --version
```

If not: [git-scm.com](https://git-scm.com/)

**Configure Git if you haven't:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@ft.com"
```

#### AI Coding Tool (Choose One or More)

**Option 1: Claude Code (Recommended for this workshop)**
```bash
npm install -g @anthropic-ai/claude-code
```

Or download from: [https://claude.ai/code](https://claude.ai/code)

**Option 2: GitHub Copilot**
Install via VS Code extensions marketplace

**Option 3: Codex (OpenAI)**
Follow OpenAI's installation instructions

**Option 4: Any other AI coding assistant**
The principles in this workshop apply to all tools

### Step 2: Clone the Repository

```bash
git clone https://github.com/ft-labs/ai-workshop-2025.git
cd ai-workshop-2025
```

### Step 3: Install Dependencies

```bash
npm install
```

**This takes 3-5 minutes.** Go get coffee. Stretch. Check your email. Do NOT watch the terminal anxiously.

### Step 4: Verify Your AI Tool Works

**In Claude Code:**
```bash
# Open a file and try a simple prompt
# Example: "Create a function that adds two numbers"
```

**In GitHub Copilot:**
Open any `.js` file in VS Code and start typing a comment. Copilot should suggest code.

**In Codex:**
Follow Codex's verification steps.

### Step 5: Run Setup Verification

```bash
./scripts/verify-setup.sh
```

**Expected output:**
```
✅ Node.js version: 18.x or higher
✅ Git configured with user details
✅ AI coding tool detected: Claude Code
✅ All dependencies installed successfully
✅ Test suite runs (may take a minute)
🎉 You're ready to rock!
```

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
Instead of `./scripts/verify-setup.sh`, run:
```powershell
node scripts/verify-setup.js
```

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
- First 15 minutes reserved for setup troubleshooting
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
