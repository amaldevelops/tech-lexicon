# VS Code Config

## Getting Started

----

## Installation (Linux)

### Debian/Ubuntu (apt)
```bash
sudo apt update
sudo apt install code
```

> If `code` isn't found, add Microsoft's official repository first (see [VS Code's Linux install docs](https://code.visualstudio.com/docs/setup/linux)), or install via the **Snap Store**: `sudo snap install code --classic`.

### Verify install
```bash
code --version
```

---

## Extensions 

## Setting Up Prettier

Prettier is an opinionated code formatter — pairs well with ESLint (which handles code-quality rules; Prettier handles formatting).

### 1. Install the extension
- Open the Extensions view (`Ctrl+Shift+X`)
- Search for **Prettier – Code formatter** → **Install**

### 2. Set Prettier as the default formatter
- Open Settings (`Ctrl+,`)
- Search `formatter`
- Set **Editor: Default Formatter** → `Prettier - Code formatter`

### 3. Install Prettier locally in your project (recommended)
Keeps formatting consistent across every contributor's machine, independent of their editor version:
```bash
npm install --save-dev --save-exact prettier
```
Create a `.prettierrc` file in the project root to configure it:
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80
}
```

### 4. Enable Format On Save
- Open Settings (`Ctrl+,`)
- Search `format on save`
- Check **Editor: Format On Save**

Now every save runs Prettier automatically. You can also format manually via **Format Document** (right-click) or `Shift+Alt+F`.

---

## Setting Up ESLint

ESLint catches bugs and enforces code-quality rules in JS/TS projects.

### 1. Install the extension
- Extensions view (`Ctrl+Shift+X`) → search **ESLint** → **Install**

### 2. Install ESLint in your project
```bash
npm install --save-dev eslint
npx eslint --init
```
Follow the prompts to configure it for your stack (React, TypeScript, Node, etc.).

> **Modern note:** ESLint 9+ uses a **flat config** (`eslint.config.js`) by default instead of the legacy `.eslintrc.*` format — `npx eslint --init` will scaffold the correct one for the version you install.

### 3. Avoid Prettier/ESLint rule conflicts
If a rule set (e.g. `eslint-config-airbnb`) includes formatting rules that fight with Prettier, install `eslint-config-prettier` to disable the overlapping ones:
```bash
npm install --save-dev eslint-config-prettier
```

### Usage
Prettier and ESLint run automatically as you edit and save. To format manually: right-click → **Format Document**, or `Shift+Alt+F`.

---

## Install Extensions

- `ext install oleg-shilo.favorites` : Favorites Manager

### Prettier: Code Formatter

### 1. Install Prettier Extension

- Open VS Code.
- Click the **Extensions** icon in the sidebar or press `Ctrl+Shift+X`.
- Search for **Prettier - Code formatter**.
- Click **Install**.

### 2. Set Prettier as Default Formatter

- Go to **File > Preferences > Settings**.
- Search for `formatter`.
- Set **Editor: Default Formatter** to `Prettier - Code formatter`.
- Optional: Enable "Format On Save" so your code is auto-formatted whenever you save a file.

### 3. (Recommended) Install Prettier Locally in Your Project

- In your project root, run:

```bash
npm install --save-dev --save-exact prettier
```

- Create a `.prettierrc` file in the project root for configuration.

### 4. Format On Save (Recommended)

- To automatically format your code on save, enable **Format On Save**:
  - Go to **File > Preferences > Settings**.
  - Search for `format on save` and check **Editor: Format On Save**.
- Now every time you save a file, Prettier formats the code automatically.

### ESLint: Linter for JS/TS

### 1. Install ESLint Extension

- Open VS Code.
- Go to the **Extensions** view (`Ctrl+Shift+X`).
- Search for **ESLint** and click **Install**.

### 2. Install ESLint in Your Project

- In your project folder, run:

```bash
npm install --save-dev eslint
```

- Initialize a config:

```bash
npx eslint --init
```

- Follow the prompts and choose options suitable for your project's stack (React, TypeScript, etc.)

---

## Usage

- When you open files, Prettier and ESLint will format and check your code automatically.
- You can manually run formatting by right-clicking and selecting **Format Document**, or pressing `Shift+Alt+F`.

---
