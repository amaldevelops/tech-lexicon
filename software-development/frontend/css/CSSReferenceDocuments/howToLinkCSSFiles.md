# CSS Linking

You can link CSS to your HTML document as below;

    <!DOCTYPE html>
    <html lang="en">
    <head>
    // External CSS: To use an external style sheet, add a link to it in the <head> section of each HTML page
        <link rel="stylesheet" href="styles.css">

    // Internal css An internal CSS is defined in the <head> section of an HTML page, within a <style> element.

    <style>
        body {background-color: powderblue;}
        h1 {color: blue;}
        p {color: red;}
    </style>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>

Inline CSS: An inline CSS is used to apply a unique style to a single HTML element.
An inline CSS uses the style attribute of an HTML element.
The following example sets the text color of the &lt;h1&gt; element to blue, and the text color of the &lt;p&gt; element to red:
Example:

    <h1 style="color:blue;">A Blue Heading </h1>
    <p style="color:red;">A red paragraph.</p>