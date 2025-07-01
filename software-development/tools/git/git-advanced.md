# Advanced Topics

## How to connect local folder to new/existing GitHub repository:

- First register a project as a local Git repository the first thing you need to do is perform the following command at your project root: `git init`
- Above will create a .git folder at your project root and will allow you to start using Git in that repository.You can call origin whatever you like, really, but origin is the standard name for Git remote repositories. [Repository_Location] is the URL to your remote repository. For example, if I had a new project called reactResumeCVWebApp which I want `git remote add origin git@github.com:1Amal/reactResumeCVWebApp.git` Then `git push --set-upstream origin main` to set the default upstream branch
- Then git pull to download the github repo to local folder `git pull origin main` Most of the time you will get an error as you have different files on Github (initial repository files such as .gitignore) and different files in your local repo i.e. Vite created src, public folders and other files if so use `git pull origin main --allow-unrelated-histories`

## Renaming a GitHub Repo

- After renaming a Github repo make sure to update the Local clone to direct to correct repo URLgit remote set-url origin git@github.com:1Amal/TechLexicon.git

## Public e-mail address change

- If you get this error ! [remote rejected] main -> main (push declined due to email privacy restrictions) You can see your personal e-mail address, which is used by default for your commits in Git:
- `git config --global user.email` Find your GitHub noreply address in your GitHub's Personal Settings → Emails. It's mentioned in the description of the Keep my email address private checkbox. Usually, it starts with a unique identifier, plus your username:{ID}+{username}@users.noreply.github.com
- Change the global user e-mail address setting to be your GitHub noreply address: git config --global user.email {ID}+{username}@users.noreply.github.com
- Reset the author information on your last commit: git commit --amend --reset-author If you have multiple commits with your private e-mail address, see this answer. Now you can push the commit with the noreply e-mail address, and future commits will have the noreply e-mail address as well.

## Setting up GitHub on a new Linux installation

- `git config --global user.name "Amal K"` : Use this command for adding a user name and confirm that you have set the Git username correctly:
- `git config user.name`
- `git config --global user.email "email@example.com"`: To set an email address in Git. - You can use your GitHub-provided noreply email address or any email address.
- To confirm that you have set the email address correctly in Git:
- `git config --global user.email ssh-keygen -t ed25519 -C "your_email@example.com"` : Generating a new SSH key, for further information Visit here
- `eval "$(ssh-agent -s)" ssh-add ~/.ssh/id_ed25519` : Adding your SSH key to the ssh-agent
- `cat ~/.ssh/id_ed25519.pub` : Adding a new SSH key to your GitHub account Visit here
  Then select and copy the contents of the id_ed25519.pub file displayed in the terminal to your clipboard In the upper-right corner of any GitHub page, click your profile photo, then click Settings.
- Settings icon in the user bar, In the "Access" section of the sidebar, click SSH and GPG keys. Click New SSH key or Add SSH key. These steps should set your new Linux machine with Github
- `git remote set-url origin [updated link url https://........git]` : Update renamed repository address
