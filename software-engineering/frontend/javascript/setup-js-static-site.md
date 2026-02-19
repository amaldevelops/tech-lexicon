# JavaScript: Setup for static site

- You can place any number of scripts in an HTML document.
- Recommended to put JavaScript in external JavaScript file and link to the HTML document.
- Internal scripts can be placed in the &lt;body&gt;, or in the &lt;head&gt; section of an HTML page, or in both.

## External JavaScript

JavaScript files have the file extension .js. To use an external script, put the name of the script file in the src (source) attribute of &lt;script&gt; tag as for the following example:

```javascript
<script src="script.js" defer></script>
```

Why use defer?

- Non-Blocking: The browser downloads the JS in the background while it keeps reading your HTML.

- Order Guaranteed: If you have multiple scripts, they will run in the order you listed them.

- DOM Ready: It waits until the HTML is completely finished before it actually "runs" the code. This means you don't need to wrap your code in window.onload.

Example for &lt;head&gt; section of an HTML page.

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }
    </script>
  </head>
  <body></body>
</html>
```

- Example for &lt;body&gt; section of an HTML page.

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>Demo JavaScript in Body</h2>
    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }
    </script>
  </body>
</html>
```
