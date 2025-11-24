# Facilitator Setup: Creating the GitHub PR

This guide helps facilitators create the GitHub PR for Activity 4A.

## Quick Setup

### Step 1: Create the PR on GitHub

1. **Push the feature branch** (if not already pushed):
   ```bash
   git push origin feature/comment-system-ai-assisted
   ```

2. **Go to GitHub and create PR manually:**
   - Visit: https://github.com/jamiebrown201/AI-Coding-Workshop/compare/main...feature/comment-system-ai-assisted
   - Click "Create pull request"
   - Title: **"Add comment system for articles"**
   - Copy the contents of `PR_DESCRIPTION.md` into the description
   - Click "Create pull request"

3. **Add labels** (optional but helpful):
   - `ai-assisted`
   - `security-review-needed`
   - `module-4`

### Step 2: Update the README with PR Number

After creating the PR, update `README.md` with the actual PR number:

```bash
# Replace [NUMBER] with actual PR number
# Edit line 32 in README.md
```

### Step 3: Keep the PR Open

**Do NOT merge or close this PR!** It should remain open for participants to review.

## Using GitHub CLI (Alternative)

If you have `gh` CLI installed:

```bash
cd modules/04-code-review/vulnerable-prs

gh pr create \
  --base main \
  --head feature/comment-system-ai-assisted \
  --title "Add comment system for articles" \
  --body-file PR_DESCRIPTION.md \
  --label "ai-assisted,security-review-needed,module-4"
```

## What Participants Will See

When participants visit the PR on GitHub, they'll see:

1. **PR Title:** "Add comment system for articles"
2. **Description:** Full content from PR_DESCRIPTION.md including:
   - Feature overview
   - AI assistance disclosure
   - Testing done
   - Security uncertainties
   - Questions for reviewers

3. **Files Changed Tab:** They can see:
   - `AI_USAGE.md` (new file)
   - `PR_DESCRIPTION.md` (new file)
   - `README.md` (modified)
   - Can add inline review comments

4. **Conversation Tab:** Where they can leave review feedback

## Expected Participant Flow

1. **Read PR description** - Understand what was built and how AI was used
2. **Read AI_USAGE.md** - See exactly what AI generated and what was reviewed
3. **Review CommentSystem.js** - Find security vulnerabilities
4. **Add review comments** - Either on GitHub or in local file
5. **Discuss** - Group discussion about findings and responsibility

## Notes for Facilitators

- The PR should feel **realistic** - like something a junior developer might actually submit
- Emphasize that the developer was **transparent** about AI usage (this is good!)
- But they **didn't review properly** (this is the problem)
- Use this to discuss the difference between **transparency** and **responsibility**

## Cleaning Up After Workshop

If you want to clean up after the workshop:

```bash
# Close the PR (don't merge)
gh pr close [PR_NUMBER]

# Or keep it open for future workshops
# (recommended - it's a teaching resource)
```

## Troubleshooting

**If PR already exists:**
- You can update the description by editing on GitHub
- Or close the old one and create a new one

**If participants can't see the PR:**
- Make sure the repo is public or they have access
- Provide the direct link: https://github.com/jamiebrown201/AI-Coding-Workshop/pull/[NUMBER]

**If you want participants to practice making review comments:**
- Encourage them to use GitHub's "Review changes" feature
- Show them how to add inline comments on specific lines
- Demonstrate the "Request changes" vs "Approve" workflow
