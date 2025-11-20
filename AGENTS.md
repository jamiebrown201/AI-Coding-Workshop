# AGENTS.md

AI Coding Workshop - A hands-on workshop teaching developers to work effectively with AI coding assistants.

## Project Overview

This is an educational workshop repository containing 6 modules with exercises, documentation, and facilitator guides. It's designed for internal workshops teaching developers how to use AI coding tools responsibly and effectively.

## Setup Commands

```bash
# Clone and navigate
git clone https://github.com/jamiebrown201/AI-Coding-Workshop.git
cd AI-Coding-Workshop

# Create your working branch (required format)
git checkout -b workshop/yourname

# Install dependencies
npm install

# Verify setup
npm run verify

# Generate fresh fixture data (optional)
npm run generate-fixtures

# Run security scan
npm run security-scan
```

## Repository Structure

```
AI-Coding-Workshop/
├── modules/              # 6 workshop modules
│   ├── 01-foundations/
│   ├── 02-codebase-understanding/
│   ├── 03-full-stack/
│   ├── 04-code-review/
│   ├── 05-team-practices/
│   └── 06-capstone/
├── data/                 # Generated fixture data
├── docs/                 # Supporting documentation
├── scripts/              # Setup and verification scripts
├── README.md             # Workshop overview
├── GETTING_STARTED.md    # Detailed setup guide
└── WORKSHOP_FACILITATOR_GUIDE.md  # For instructors
```

## Code Style

- All documentation is in Markdown
- No emojis unless explicitly requested
- Keep explanations concise and practical
- Avoid unnecessary commentary or fluff
- Time estimates have been removed - don't add them back

## Branch Workflow

- **Main branch**: Protected, no direct commits
- **Working branches**: Format must be `workshop/yourname` (e.g., `workshop/jamie`)
- Participants work on their own branches to share code with others

## Documentation Guidelines

### What to edit:
- Module READMEs (modules/*/README.md)
- Main documentation (README.md, GETTING_STARTED.md)
- Facilitator guide (WORKSHOP_FACILITATOR_GUIDE.md)

### What NOT to edit:
- Exercise solutions (if they exist)
- Fixture generation scripts (unless fixing bugs)
- Verification scripts (unless fixing bugs)

### Writing style:
- Direct and practical
- No cheesy icebreakers or forced humor
- No "you'll learn this the hard way" type commentary
- Remove verbose explanations (context quality over context quantity)

## Module-Specific Notes

### Module 1: Foundations
- Contains practical AI tool guidance (how to open agents, write prompts)
- Keep Key Concepts section concise

### Module 2: Codebase Understanding
- Has a runnable legacy system in `legacy-code/`
- Package.json exists for the legacy system

### Module 3: Full-Stack Features
- Dashboard starter code location: `modules/03-full-stack/dashboard-starter`

### Module 6: Capstone
- Prize categories are intentionally fun (Silliest, Most Overengineered, etc.)
- Checkpoints don't have specific time allocations

## Testing Instructions

- Run verification: `npm run verify`
- Security scan: `npm run security-scan`
- Individual module exercises have their own test instructions in their READMEs

## Commit Guidelines

- Use conventional commit format when appropriate
- Include "🤖 Generated with [Claude Code]" footer
- Include "Co-Authored-By: Claude <noreply@anthropic.com>"
- Don't commit with "authored by" Claude in the main author field

## Important Constraints

- This is an **internal workshop** - no external logistics like bathrooms/WiFi in docs
- **No time estimates** anywhere (removed from all modules, README, guides)
- **No ground rules section** in facilitator guide
- Branch format is **always** `workshop/yourname` not variations
- Icebreaker uses "desert island" question, not code-related prompts

## Security Considerations

- Workshop teaches defensive security practices only
- No offensive security content
- No credential harvesting examples
- Security module focuses on identifying vulnerabilities in AI-generated code

## Files to Reference

When making changes, these are the key files to understand:

- `README.md` - Main workshop overview and quick start
- `GETTING_STARTED.md` - Detailed setup instructions and git workflow
- `WORKSHOP_FACILITATOR_GUIDE.md` - Guide for running the workshop
- `modules/*/README.md` - Individual module instructions
- `.github/BRANCH_PROTECTION.md` - Branch protection setup for admins

## What Makes This Workshop Different

- Focus on **responsible AI usage**, not just productivity
- Emphasizes **understanding over speed**
- Teaches **context quality over prompt engineering**
- Includes **security review** of AI-generated code (45% vulnerability rate)
- Practical exercises over theoretical concepts
