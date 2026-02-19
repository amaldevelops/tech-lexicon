Tailwind CSS is a **utility-first** CSS framework. Unlike Bootstrap or Foundation, which give you pre-built components (like a `.btn` class), Tailwind gives you "atomic" classes (like `bg-blue-500`, `p-4`, `flex`) that you compose directly in your HTML to build any design.

---

### How Tailwind Works

Think of Tailwind like **LEGO blocks** for styling.

1. **Scanning:** When you run your build, Tailwind scans all your files (like `page.tsx`) to see which classes you actually used.
2. **JIT (Just-In-Time) Engine:** It generates a CSS file containing _only_ those specific classes. If you never used `bg-purple-900`, that code never makes it to your website.
3. **Utility Composition:** Instead of writing a "Card" class in a CSS file, you write a `div` with classes for shadows, borders, and padding.

---

### The "Pragmatic" Tailwind Cheat Sheet

Here are the most common classes you'll use for your agency site:

#### 1. Layout & Flexbox

| Class             | Result                                         |
| ----------------- | ---------------------------------------------- |
| `flex`            | `display: flex;`                               |
| `flex-col`        | Stack items vertically.                        |
| `items-center`    | Center items cross-axis (vertically in a row). |
| `justify-between` | Push items to opposite ends.                   |
| `grid`            | `display: grid;`                               |
| `grid-cols-3`     | Create 3 equal columns.                        |
| `gap-4`           | Add 16px space between items.                  |

#### 2. Spacing (Padding & Margin)

_Tailwind uses a scale where `1` = `0.25rem` (4px)._

- **`p-4`**: Padding on all sides (16px).
- **`px-8`**: Padding on Left & Right only.
- **`py-2`**: Padding on Top & Bottom only.
- **`mt-10`**: Margin Top (40px).
- **`mx-auto`**: Center a block element horizontally.

#### 3. Typography

- **`text-sm` / `text-base` / `text-xl**`: Font sizes.
- **`font-bold` / `font-light**`: Font weights.
- **`text-center`**: Align text.
- **`leading-tight`**: Adjust line-height.

#### 4. Responsive Design (The Magic)

Tailwind uses mobile-first prefixes.

- `text-center md:text-left`: Centered on mobile, left-aligned on tablets/desktops.
- `w-full lg:w-1/2`: Full width on mobile, half width on large screens.

---

### Why this is better for your Agency

- **No "CSS Bloat":** Your final CSS file will likely be less than 10kb, even if the site is massive.
- **Speed:** You can change the entire look of a section just by swapping classes in `Hero.tsx` without ever leaving the file.
- **Consistency:** Using `p-4` everywhere ensures your spacing is mathematically perfect throughout the site.

---
