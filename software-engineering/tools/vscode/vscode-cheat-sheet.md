# VS Code Cheat Sheet

A practical reference for Visual Studio Code — interface basics, setup/config (Prettier & ESLint), Remote-SSH, and Linux keyboard shortcuts.

---

## Table of Contents
1. [What is VS Code?](#what-is-vs-code)
2. [Main Interface Components](#main-interface-components)
3. [Basic Actions](#basic-actions)
4. [Coding Features](#coding-features)
5. [Tips](#tips)

---

## What is VS Code?

**Visual Studio Code** is a free, highly customizable code editor from Microsoft, designed for fast, efficient development across virtually any language or framework — backed by a large extension marketplace, built-in Git support, and an integrated debugger/terminal.

---

## Main Interface Components

| Component | How to Open |
|---|---|
| **File Explorer** | View and manage files/folders in your workspace |
| **Search** | Find text across files — `Ctrl+Shift+F` |
| **Source Control** | Git (and other VCS) integration — `Ctrl+Shift+G` |
| **Run and Debug** | Breakpoints, watch variables, step-through debugging — `Ctrl+Shift+D` |
| **Extensions** | Language support, themes, and tools from the marketplace — `Ctrl+Shift+X` |
| **Integrated Terminal** | Built-in command line — `` Ctrl+` `` |
| **Command Palette** | Access every command by name — `Ctrl+Shift+P` |

---

## Basic Actions

- **Start from terminal at current folder ** `code .`
- **New File:** `Ctrl+N`
- **Save:** `Ctrl+S` (or enable **Auto Save** under **File > Auto Save**)
- **Open/close tabs:** each file opens in its own tab; split the editor to view multiple files side by side (`Ctrl+\`)
- **Change theme:** `Ctrl+K Ctrl+T`, or **File > Preferences > Theme > Color Theme**
- **Adjust font size / layout:** **File > Preferences > Settings** (`Ctrl+,`)

---

## Coding Features

- **IntelliSense** — smart code completions and type-aware suggestions as you type (`Ctrl+Space`)
- **Code Actions** — quick fixes and refactors, surfaced via the lightbulb icon or `Ctrl+.`
- **Snippets** — insert common code patterns quickly (built-in or custom, via `.code-snippets` files)
- **Emmet** — write HTML/CSS faster with abbreviations, e.g. `div.card>h2+p` expands to a full nested structure
- **Debugging** — set breakpoints (`F9`) and step through code (`F10`/`F11`) via the Run and Debug panel

---

## Tips

- **Workspace Trust:** VS Code may ask if you trust a newly opened folder's code — only trust folders/code you know is safe, since untrusted workspaces run with restricted extension/feature access.
- **Profiles:** Save and sync your settings, extensions, keybindings, and UI state across devices/projects — **File > Preferences > Profiles**.
- **Settings Sync:** Sign in with a Microsoft or GitHub account to sync settings across machines automatically.
- **Multi-root workspaces:** Open several unrelated project folders in one window via **File > Add Folder to Workspace**.


## Remote Development via SSH

The **Remote - SSH** extension lets you edit files, run terminals, and debug directly on a remote server (e.g. an Ubuntu box) as if it were local.

### Step 1: Prepare the remote server
Confirm you can connect natively from your local terminal:
```bash
ssh username@your_server_ip
```
If that fails, install an SSH server on the remote machine:
```bash
sudo apt update && sudo apt install openssh-server -y
```

### Step 2: Install the extension
- Extensions view (`Ctrl+Shift+X`) → search **Remote - SSH** (by Microsoft) → **Install**

### Step 3: Configure a host (recommended over typing the IP each time)
1. `Ctrl+Shift+P` → **Remote-SSH: Open SSH Configuration File...**
2. Choose your local config file (usually `~/.ssh/config`)
3. Add an entry:
   ```text
   Host ubuntu-server
       HostName your_server_ip_or_domain
       User your_ubuntu_username
   ```
4. Save and close.

### Step 4: Connect
1. Click the green **`><`** icon in the bottom-left corner of VS Code.
2. Select **Connect to Host...**
3. Choose `ubuntu-server` (or type `username@your_server_ip`).
4. Select the remote OS (**Linux**) when prompted.
5. Enter your password.

You'll know it worked when the bottom-left corner shows `SSH: ubuntu-server`.

### Step 5: Open your remote project
**File > Open Folder** — this now browses the *remote* server's filesystem. Select your project directory (e.g. `/home/username/my-project`).

### Pro Tips
- **SSH key authentication** — skip re-entering your password every connection/save:
  ```bash
  ssh-keygen
  ssh-copy-id username@your_server_ip
  ```
- **Extensions run on the server, not locally** — language servers, linters, formatters, etc. need to be installed separately under the "Install on SSH: ubuntu-server" section of the Extensions view.
- **Automatic port forwarding** — running a dev server on the remote machine (e.g. Node/Python on port `8000`) is auto-forwarded; open `localhost:8000` locally, or manage forwards manually in the **Ports** tab.

