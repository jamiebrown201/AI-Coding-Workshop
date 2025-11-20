# Branch Protection Setup

This repository requires branch protection on `main` to prevent accidental pushes from workshop participants.

## For Repository Administrators

### Enable Branch Protection

1. Go to repository Settings > Branches
2. Add branch protection rule for `main`:
   - ✅ Require pull request reviews before merging
   - ✅ Restrict who can push to matching branches (Only admins)
   - ✅ Do not allow bypassing the above settings

### Workshop Participant Access

Participants should have **Write** access so they can:
- Push their personal branches
- View others' branches
- Cannot push to main (protected)

## For Participants

**You should work on your own branch:**
```bash
git checkout -b your-name-workshop
```

**If you accidentally try to push to main:**
```
remote: error: GH006: Protected branch update failed
```

This is expected! Just push to your branch instead:
```bash
git push -u origin your-name-workshop
```
