# HTML basics

## What is HTML?

HTML (HyperText Markup Language) is the standard language for creating web pages. It uses a system of tags to structure and present content in the browser.

## Basic Structure of an HTML Document

Every HTML document follows a standard structure using nested tags. Here is a basic template:

```

<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8" />
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

- `<!DOCTYPE html>`: Declares the document type and version (HTML5).
- `<html>`: The root element that wraps all content on the page.
- `<head>`: Contains metadata, links to stylesheets, and the page title.
- `<title>`: Sets the title shown in the browser tab.
- `<body>`: Contains all visible content such as headings, paragraphs, images, and links.

## Anatomy of an HTML Element

An HTML element consists of:
- **Opening tag:** Marks where the element starts (e.g., `<p>`).
- **Content:** The information inside the element (e.g., text).
- **Closing tag:** Marks where the element ends (e.g., `</p>`).

Example:
```

<p>This is a paragraph.</p>

```

Some elements are self-closing (empty elements), such as `<br>` for a line break.

## Common HTML Elements

- `<h1>` to `<h6>`: Headings, from largest (`<h1>`) to smallest (`<h6>`).
- `<p>`: Paragraph.
- `<a href="url">`: Link to another page or resource.
- `<img src="image.jpg" alt="description">`: Image.
- `<ul>`, `<ol>`, `<li>`: Unordered and ordered lists with list items.
- `<div>`: Generic container for grouping elements.
- `<span>`: Inline container for text or other elements.

## HTML Layout Elements

- `<header>`: Introductory content or navigation links.
- `<nav>`: Main navigation for the page.
- `<main>`: Main content unique to the page.
- `<section>`: Thematic grouping of content.
- `<article>`: Independent, self-contained content.
- `<aside>`: Content related indirectly to the main content.
- `<footer>`: Footer for a page or section.

## Nesting Elements

HTML elements can be nested inside each other to create complex structures. For example:

```

<body>
  <header>
    <h1>Website Title</h1>
  </header>
  <main>
    <section>
      <h2>Section Heading</h2>
      <p>Section content goes here.</p>
    </section>
  </main>
  <footer>
    <p>Copyright © 2025</p>
  </footer>
</body>
```

## Summary

HTML provides the structure for web pages using a system of tags and elements. Each page starts with a standard template, and content is organized using both basic and semantic elements for clarity and accessibility.

[^1]: https://www.codewithharry.com/tutorial/html-page-structure

[^2]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax

[^3]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents

[^4]: https://www.w3schools.com/html/html_elements.asp

[^5]: https://www.w3schools.com/html/html_intro.asp

[^6]: https://jenkov.com/tutorials/html4/element-structure.html

[^7]: https://www.w3schools.com/html/html_layout.asp

[^8]: https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/cheatsheet

[^9]: https://www.tutorialspoint.com/html/html_basic_tags.htm

[^10]: https://html.com

