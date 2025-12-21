# Git Best Practices

## Atomic Commits

Avoid the "giant commit" (e.g., one commit with 50 changed files called "finished site"). Instead, commit every time you finish a small, logical piece of work.

Bad:

`git commit -m "added everything"`

Good:

```

git commit -m "feat: add responsive navigation bar"

git commit -m "fix: mobile alignment on project cards"

git commit -m "docs: update resume link and contact info"
```

## Use Conventional Commits

Professional teams use a specific prefix for their messages.
`feat`: A new feature (e.g., adding a contact form).

`fix`: A bug fix (e.g., fixing a broken link).

`style`: Changes that don't affect code logic (e.g., CSS formatting, whitespace).

`refactor`: Changing code to make it cleaner without changing what it does.

`docs`: Changes to the README or documentation.

## Work in Branches (Even on your own)

Don't always code directly on the main branch. Use a "Feature Branch" workflow.

1. Create a branch for a new idea: git checkout -b feature/dark-mode

2. Code and commit your changes there.

3. Merge it back into main once it’s perfect.

Why? This prevents you from "breaking" your live website while you are experimenting with new code.

## Create a Professional .gitignore

Don't upload "garbage" files to your repo. Even for a static site, create a .gitignore file in your root folder and add these common entries:

```Plaintext

# OS generated files
.DS_Store
Thumbs.db

# Editor folders
.vscode/
.idea/

# Local environment files (if you use them later)
.env
```

## Leverage the README.md

The README is the "cover" of your book. For a portfolio, it should include:

- A Screenshot or GIF of the site.

- The Tech Stack: (e.g., "Built with Vanilla HTML/CSS/JS, Hosted on GitHub Pages, Managed via Cloudflare").

- Links: A clear link to the live URL (amalk.au).

- Purpose: A one-sentence summary of why you built it.

## Protect your "Main" Branch

Once your site is live, go to your GitHub repository Settings > Branches and add a protection rule for main. This prevents you from accidentally deleting your live site or force-pushing something that breaks it.

## The "GitHub Pages" Deploy Workflow

If you are using a custom domain, remember that GitHub Pages typically deploys from the main branch.

Warning: If you use a tool like Vite or a static site generator later, you will need to push the build folder (usually dist or docs) to GitHub. For a plain HTML/CSS site, your root folder is fine.
