# JavaScript: Setup for static site

* You can place any number of scripts in an HTML document.

* Recommended to put JavaScript in external JavaScript file and link to the HTML document.  

* Internal scripts can be placed in the &lt;body&gt;, or in the &lt;head&gt; section of an HTML page, or in both.

External JavaScript: JavaScript files have the file extension .js. To use an external script, put the name of the script file in the src (source) attribute of &lt;script&gt; tag as for the following example:

    
    <script src="myScript.js"> </script>

Example for &lt;head&gt; section of an HTML page.

    <!DOCTYPE html>
    <html>
    <head>
    <script>
    function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    </script>
    </head>
    <body>
    </body>
    </html>

Example for &lt;body&gt; section of an HTML page.

    <!DOCTYPE html>
    <html>
    <body>
    <h2>Demo JavaScript in Body </h2>
    <script>
    function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    </script>
    </body>
    </html>