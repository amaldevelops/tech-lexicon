
# Git & GitHub Cheat Sheet

## 1) Core Git workflow

Git tracks changes in your local repo, and GitHub stores the remote copy.

### Typical workflow
1. Check what changed.
2. Stage files.
3. Commit changes.
4. Push to GitHub.

### Essential commands

```bash
git status
git add <file>
git add -A
git commit -m "message"
git push
```

### What they do
- `git status` shows the current state of your working tree and branch.
- `git add <file>` stages a specific file.
- `git add -A` stages all changes.
- `git commit -m "message"` saves a checkpoint in history.
- `git push` sends commits to the remote repo.

***

## 2) Getting started

### Set your identity
```bash
git config --global user.email "email@example.com"
```

You can use your GitHub noreply email if you want privacy.

### Check remotes
```bash
git remote -v
```

Shows fetch and push URLs.

### Ignore files
Create a `.gitignore` file to exclude files and folders you do not want tracked.

Examples:
```gitignore
# ignore a file
.env

# ignore a folder
node_modules/

# ignore all files of a type
*.log
```

***

## 3) Working with branches

Branches let you isolate work safely.

### Create and switch to a branch
```bash
git checkout -b feature/login
```

### See branches
```bash
git branch
git branch -a
```

- `git branch` shows local branches.
- `git branch -a` shows local and remote branches.

### Push a new branch
```bash
git push -u origin feature/login
```

`-u` sets the upstream branch so future `git push` and `git pull` work without extra arguments.

### Switch branches
```bash
git checkout main
```

***

## 4) Merging work

When a feature is ready, merge it back into your target branch.

### Merge steps
```bash
git checkout main
git fetch
git merge feature/login
git push origin main
```

### What happens
- Switch to the branch you want to merge into.
- Update it first.
- Merge the feature branch.
- Push the updated branch to GitHub.

***

## 5) Pulling and fetching

### Pull
```bash
git pull
git pull origin main
```

`git pull` gets remote changes and merges them into your current branch.

### Fetch
```bash
git fetch
```

`git fetch` downloads remote updates without merging them.

Use `fetch` when you want to inspect changes first.

***

## 6) Undoing changes safely

### Revert a commit
```bash
git revert 3321844
```

This creates a new commit that undoes the selected commit. It is the safer option because it preserves history.

### When to use revert
- You already pushed the commit.
- You want to undo something without rewriting history.
- You are working with a shared branch.

***

## 7) Comparing changes

### See unstaged changes
```bash
git diff
```

### Compare a specific file
```bash
git diff index.html
```

### Cleaner word-level diff
```bash
git diff --color-words index.html
```

### See staged changes
```bash
git diff --staged
git diff --staged index.html
```

### Compare branches
```bash
git diff main feature/login
git diff main feature/login index.html
```

Useful for seeing exactly what changed between branches or in one file.

***

## 8) Commit history and logs

### Compact history
```bash
git log --oneline
```

This gives a short, easy-to-scan commit history.

***

## 9) Cloning repositories

### Clone with SSH
```bash
git clone git@github.com:username/repo.git
```

### Clone with HTTPS
```bash
git clone https://github.com/username/repo.git
```

Your notes had the SSH URL repeated for HTTPS; the HTTPS format should use `https://`.

***

## 10) File mode issues across OSes

If you clone between Windows and Linux/Unix and get annoying file permission diffs:

### Current repo only
```bash
git config core.filemode false
```

### Global
```bash
git config --global core.filemode false
```

### In `~/.gitconfig`
```ini
[core]
    filemode = false
```

***

## 11) Remote branch cleanup

### Update remote branch list
```bash
git remote update origin --prune
```

This removes stale remote-tracking branches locally.

***

## 12) GitHub Pages deploy basics

If you are deploying a frontend app to GitHub Pages and using a build output folder like `dist`:

### Steps
1. Remove `dist` from `.gitignore`.
2. Commit the build output if needed.
3. Push the subtree to `gh-pages`.

### Example
```bash
git add dist
git commit -m "Initial dist subtree commit"
git subtree push --prefix dist origin gh-pages
```

### Package script example
```json
{
  "scripts": {
    "gh-pages": "git subtree push --prefix dist origin gh-pages && git push"
  }
}
```

Then run:
```bash
npm run gh-pages
```

***

## 13) Quick everyday commands

```bash
git status                  # See repo state
git add -A                  # Stage all changes
git commit -m "msg"         # Commit
git push                    # Push current branch
git pull                    # Pull + merge
git fetch                   # Download without merging
git branch                  # List branches
git checkout -b new-branch  # Create and switch
git checkout main           # Switch branch
git merge feature-branch    # Merge branch
git revert <commit-hash>    # Safely undo a commit
git log --oneline           # Compact history
git diff                    # Show changes
git remote -v               # Show remotes
```

***

## 14) Recommended GitHub workflow

A clean feature workflow looks like this:

```bash
git checkout -b feature/navbar
# make changes
git add -A
git commit -m "Add responsive navbar"
git push -u origin feature/navbar
# open pull request on GitHub
```

Then after review:

```bash
git checkout main
git pull origin main
git merge feature/navbar
git push origin main
```

***
### Delete a branch
```bash
git branch -d feature/login
git push origin --delete feature/login
```

## 15) Best practices

- Commit small, focused changes.
- Use clear commit messages.
- Branch for each feature or fix.
- Pull before you start work.
- Revert instead of rewriting shared history.
- Keep `.gitignore` updated.
- Use GitHub branches and pull requests for collaboration.

***

## 16) Branch lifecycle
- Create branch.
- Work and commit on branch.
- Push branch to GitHub.
- Open pull request.
- Merge into `main`.
- Delete branch locally and remotely when done.



***

