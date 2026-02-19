# Tailwind CSS cheat sheet

This is a comprehensive Tailwind CSS cheat sheet. It is organized by the properties you will use 90% of the time in modern web development.

---

### 1. The Box Model (Spacing & Sizing)

Tailwind’s scale: `1` unit = `0.25rem` (4px).

| Category      | Classes                                                 | Example / Result                 |
| ------------- | ------------------------------------------------------- | -------------------------------- |
| **Padding**   | `p-{n}`, `px-{n}`, `py-{n}`, `pt-`, `pb-`, `pl-`, `pr-` | `p-4` (16px all sides)           |
| **Margin**    | `m-{n}`, `mx-{n}`, `my-{n}`, `mt-`, `mb-`, `ml-`, `mr-` | `mx-auto` (Center block)         |
| **Width**     | `w-{n}`, `w-full`, `w-screen`, `w-1/2`, `w-max`         | `w-64` (256px)                   |
| **Height**    | `h-{n}`, `h-full`, `h-screen`, `h-px`                   | `h-screen` (100vh)               |
| **Max Width** | `max-w-xs`, `max-w-md`, `max-w-7xl`, `max-w-none`       | `max-w-7xl` (Standard container) |

---

### 2. Layout (Flexbox & Grid)

#### **Flexbox (One-Dimensional)**

- **Initialization:** `flex`
- **Direction:** `flex-row` (default), `flex-col` (stacked)
- **Alignment (Vertical):** `items-start`, `items-center`, `items-end`
- **Distribution (Horizontal):** `justify-start`, `justify-center`, `justify-between`, `justify-around`
- **Gap:** `gap-{n}` (e.g., `gap-4` adds 16px between items)

#### **Grid (Two-Dimensional)**

- **Initialization:** `grid`
- **Columns:** `grid-cols-1`, `grid-cols-2`, `grid-cols-12`
- **Spanning:** `col-span-2` (Make an item take 2 slots)
- **Flow:** `grid-flow-col`

---

### 3. Typography

| Feature        | Classes                                                       | Result                     |
| -------------- | ------------------------------------------------------------- | -------------------------- |
| **Size**       | `text-xs`, `text-base`, `text-lg`, `text-4xl`, `text-9xl`     | `text-base` is 1rem (16px) |
| **Weight**     | `font-thin`, `font-normal`, `font-semibold`, `font-bold`      | `font-bold` is 700         |
| **Color**      | `text-black`, `text-white`, `text-blue-500`, `text-gray-100`  | Blue with 500 intensity    |
| **Alignment**  | `text-left`, `text-center`, `text-right`, `text-justify`      | Horizontal alignment       |
| **Decoration** | `underline`, `italic`, `uppercase`, `lowercase`, `capitalize` | Text styling               |
| **Leading**    | `leading-tight`, `leading-normal`, `leading-loose`            | Line height                |

---

### 4. Decoration (Borders, Backgrounds, Effects)

- **Backgrounds:** `bg-current`, `bg-transparent`, `bg-white`, `bg-opacity-50`
- **Borders:** `border`, `border-2`, `border-t-4`, `border-dashed`, `border-gray-200`
- **Rounded Corners:** `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-full` (for circles)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`, `shadow-inner`
- **Opacity:** `opacity-0`, `opacity-50`, `opacity-100`

---

### 5. Responsive Design (The Breakpoints)

Tailwind is **Mobile-First**. Every class you write applies to all screens unless you add a prefix.

| Prefix   | Breakpoint | Logic                         |
| -------- | ---------- | ----------------------------- |
| _(none)_ | `0px`      | Mobile (default)              |
| `sm:`    | `640px`    | Small Tablets                 |
| `md:`    | `768px`    | Large Tablets / Small Laptops |
| `lg:`    | `1024px`   | Standard Desktops             |
| `xl:`    | `1280px`   | Large Monitors                |
| `2xl:`   | `1536px`   | Ultra-wide Monitors           |

**Example:** `className="w-full md:w-1/2 lg:w-1/3"`
_(Full width on mobile, half on tablet, one-third on desktop.)_

---

### 6. Interactive States (Hovers & Transitions)

Add these to make your site feel premium.

- **States:** `hover:`, `focus:`, `active:`, `disabled:`
- **Transitions:** `transition-all`, `transition-colors`, `transition-opacity`
- **Duration:** `duration-100`, `duration-300`, `duration-500`
- **Easing:** `ease-in`, `ease-out`, `ease-in-out`

**Example (A Button):**
`bg-blue-600 hover:bg-blue-700 transition-colors duration-300`

---

### 7. Modern "Extra" Utilities

- **Glassmorphism:** `backdrop-blur-md bg-white/30`
- **Z-Index:** `z-0`, `z-10` ... `z-50`, `z-auto`
- **Filters:** `blur-sm`, `grayscale`, `brightness-150`
- **Aspect Ratio:** `aspect-video`, `aspect-square`

### The "Golden Rule" of Tailwind

If you find yourself repeating the same 10 classes on every button, **don't** write a CSS file. Instead, create a React component (like `Button.tsx`) and use the classes there once!
