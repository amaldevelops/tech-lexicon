# Ubuntu → macOS Cheat Sheet (for a Node/React dev)

You already know Unix, git, and the terminal — this is mostly relabeling, not relearning. Budget ~3-4 days to feel normal, ~2 weeks to stop noticing.

---

## 1. First 30 minutes — settings to fix immediately

- **System Settings → Trackpad**: turn on "Tap to click" (off by default, drives everyone crazy).
- **System Settings → Keyboard**: remap Caps Lock → Control (huge for terminal use, it sits right where Ctrl is on most PC keyboards).
- **System Settings → Keyboard → Keyboard Shortcuts → Modifier Keys**: same remap if you use an external non-Mac keyboard.
- **Scrolling**: macOS defaults to "natural scrolling" (content moves like a touchscreen). Keep it or flip it under Trackpad settings — your call.
- Install **Rectangle** (free, like a proper window snapping tool — macOS has nothing built-in like Ubuntu's tiling). `brew install --cask rectangle`

---

## 2. Package manager: apt → Homebrew

```bash
# Install Homebrew (one-time)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then it's basically apt with different verbs
brew install <formula>       # like apt install
brew install --cask <app>    # for GUI apps (Chrome, VSCode, Docker, etc.)
brew update && brew upgrade  # like apt update && apt upgrade
brew list                    # like dpkg -l
brew uninstall <formula>
brew search <name>
```

Almost anything you `apt install` on Ubuntu has a Homebrew formula.

---

## 3. Terminal & shell

- Default shell is **zsh**, not bash (has been since Catalina). Your config file is `~/.zshrc`, not `~/.bashrc`. Bash scripts still run fine, just your interactive shell prompt config moves.
- Built-in Terminal.app is mediocre. Install **iTerm2**: `brew install --cask iterm2`
- Install **oh-my-zsh** if you liked bash-it / a themed prompt: `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`

**Gotcha: BSD tools vs GNU tools.** macOS ships BSD versions of `sed`, `grep`, `awk`, `find`, `date` — flags differ slightly from Linux (GNU) versions you're used to. Classic bite: `sed -i 's/foo/bar/' file` works on Linux but errors on Mac (needs `sed -i '' 's/foo/bar/' file`).

Fix: install GNU versions and use those instead:
```bash
brew install coreutils gnu-sed grep findutils
# then add to PATH per brew's post-install instructions
```

---

## 4. Keyboard shortcuts — Ctrl → Cmd (mostly)

| Action | Ubuntu | macOS |
|---|---|---|
| Copy / Paste / Cut | Ctrl+C / V / X | **Cmd**+C / V / X |
| Save | Ctrl+S | Cmd+S |
| Find | Ctrl+F | Cmd+F |
| Switch app | Alt+Tab | **Cmd+Tab** |
| Switch window *within* same app | (Alt+Tab cycles windows too) | **Cmd+`** (backtick) |
| Close window | Alt+F4 | **Cmd+W** (closes tab/window, app stays running) |
| Quit app entirely | close window | **Cmd+Q** |
| Screenshot | PrtScn / Shift+PrtScn | Cmd+Shift+3 (full), Cmd+Shift+4 (select) |
| Spotlight / app launcher | Super key / Activities | **Cmd+Space** |
| Beginning/end of line (text) | Home / End | Cmd+Left / Cmd+Right |
| Force quit frozen app | xkill / System Monitor | Cmd+Option+Esc |
| Lock screen | Ctrl+Alt+L | Cmd+Ctrl+Q |

**Big mental shift**: closing the last window of an app (Cmd+W) does **not** quit the app on Mac — it keeps running in the dock. You have to Cmd+Q or it'll pile up in your dock. This trips up every Linux/Windows switcher.

In terminal/vim/CLI tools themselves, **Ctrl still works as Ctrl** (Ctrl+C to kill a process, Ctrl+R for reverse search, etc.) — it's only OS-level and GUI-app shortcuts that shift to Cmd.

---

## 5. Node/React dev environment setup

```bash
# nvm works identically
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
nvm use --lts

# or via brew if you prefer
brew install nvm

# VS Code
brew install --cask visual-studio-code

# Docker Desktop (note: historically slower on Mac than native Linux
# due to the VM layer — if you lean heavily on Docker, expect some
# performance regression vs your Ubuntu box, especially on Intel Macs.
# Apple Silicon + Docker Desktop's VirtioFS mostly closes this gap.)
brew install --cask docker

# git — already installed via Xcode Command Line Tools, or:
xcode-select --install
```

Your actual dev workflow (npm/yarn/pnpm, git, editor, terminal) is functionally identical to Ubuntu. This is the easy part.

---

## 6. Filesystem gotchas

- **Case-insensitive by default** (unlike ext4). `MyFile.js` and `myfile.js` are the same file to macOS by default. Rarely bites you in JS projects, but can cause bizarre import bugs if you ever rename a file only by changing case (`git mv` trick needed: `git mv file.js tmp && git mv tmp File.js`).
- Home directory structure differs: no `/home/username`, it's `/Users/username`.
- `.DS_Store` files — macOS Finder litters directories with these. Add to your global `.gitignore`:
  ```bash
  echo ".DS_Store" >> ~/.gitignore_global
  git config --global core.excludesfile ~/.gitignore_global
  ```

---

## 7. App equivalents

| Ubuntu | macOS |
|---|---|
| GNOME Files (Nautilus) | Finder |
| GNOME Terminal | Terminal.app / iTerm2 |
| Software/apt | Homebrew / App Store |
| htop / System Monitor | Activity Monitor (GUI) or `htop` via brew |
| Ubuntu Dock | Dock (similar, System Settings → Desktop & Dock) |
| Files search (Nautilus) | Spotlight (Cmd+Space) |
| GNOME Tweaks | System Settings (more limited, less tweakable overall — heads up, macOS is less configurable than Ubuntu) |

---

## 8. Things that will mildly annoy you (forewarned is forearmed)

- **No native window tiling** without a third-party app (Rectangle fixes this).
- **Fewer workspace/desktop customization options** than GNOME — macOS Spaces (Mission Control, Ctrl+Up) exist but are less flexible.
- **Right-click / secondary click** on trackpad isn't on by default — enable "Secondary click" in Trackpad settings (two-finger tap).
- macOS auto-updates and occasional "installing update" reboots can catch you off guard mid-work if you don't manage Software Update settings.
- Menu bar is global (top of screen, not per-window) — takes a day to stop looking in the wrong place for File/Edit menus.

---

## The honest summary

For a Node/React engineer, 90% of your day (terminal, editor, git, npm, browser devtools) will feel identical within a couple of days. The friction is entirely in OS-level muscle memory (shortcuts, window management, package manager) — not in your actual engineering tools. Do steps 1–3 above on day one and most of the awkwardness disappears fast.
