# VS Code Config

## Getting Started

- Install VSCode

```bash
sudo apt update
sudo apt install code
```

## Install Extensions

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
