# CSS Basics


## What is CSS?

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and layout of HTML documents. It allows developers to control the look and feel of web pages, including colors, fonts, spacing, positioning, and responsiveness.

## Key Features

- **Separation of Content and Style:** Keeps HTML structure separate from visual design.
- **Selectors:** Target HTML elements based on tag, class, ID, attributes, and more.
- **Cascading and Specificity:** Styles can be overridden based on their order and specificity rules.
- **Box Model:** Every element is treated as a box with content, padding, border, and margin.
- **Responsive Design:** Supports media queries for adapting layouts to different screen sizes.
- **Animations and Transitions:** Enables smooth visual effects and interactive feedback.
- **Flexbox and Grid:** Modern layout systems for building complex, responsive layouts easily.

## Example: Basic CSS

```

/* Selects all paragraphs and sets their text color */
p {
color: \#333;
font-size: 16px;
}

/* Selects an element with the ID 'header' */
\#header {
background-color: \#f5f5f5;
padding: 20px;
}

/* Selects all elements with the class 'button' */
.button {
background: \#007bff;
color: white;
border-radius: 4px;
padding: 10px 20px;
border: none;
cursor: pointer;
}

/* Responsive design for screens smaller than 600px */
@media (max-width: 600px) {
.container {
flex-direction: column;
padding: 10px;
}
}

```

## Common Concepts

- **Selectors:** Target elements to apply styles (e.g., `.class`, `#id`, `element`).
- **Properties and Values:** Define what aspect to style and how (e.g., `color: red;`).
- **Inheritance:** Some properties are inherited from parent elements.
- **Specificity:** Determines which styles are applied when multiple rules match.
- **Pseudo-classes and Pseudo-elements:** Style elements based on state or part (e.g., `:hover`, `::after`).
- **Units:** Use `px`, `em`, `rem`, `%`, `vw`, `vh`, etc., for sizing.
- **Variables:** CSS custom properties for reusable values (e.g., `--main-color`).

## Common Uses

- Styling text, backgrounds, borders, and spacing
- Creating layouts with Flexbox and Grid
- Making sites responsive to different devices
- Adding transitions and animations
- Theming and branding web applications

## Summary

CSS is essential for controlling the visual presentation of web pages. Its powerful features enable developers to build attractive, responsive, and interactive user interfaces across all devices.


