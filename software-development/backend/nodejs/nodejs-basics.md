# node.js basics

```markdown
# Node.js

## What is Node.js?

Node.js is a free, open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript code outside the web browser. It is built on Chrome's V8 JavaScript engine and is designed for building fast, scalable network applications [^1] [^4] [^7].

## Key Features

- **Event-driven and non-blocking:** Handles many connections simultaneously without waiting for one operation to finish before starting another[^1].
- **Asynchronous I/O:** Ideal for real-time applications and high-traffic websites.
- **Cross-platform:** Runs on Windows, macOS, and Linux.
- **Rich standard library:** Includes modules for HTTP, file system, path, operating system, streams, and more [^5].
- **NPM (Node Package Manager):** Provides access to thousands of reusable packages.

## Common Use Cases

- Web servers and REST APIs
- Real-time applications (e.g., chat apps)
- Command-line tools
- File and database operations
- IoT and hardware control[^1]

## Example: Hello World Web Server

```

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World');
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});

```
Save this code as `server.js` and run it using:
```

node server.js

```
Visit `http://127.0.0.1:3000/` in your browser to see the output [^3] [^4].

## How to Run Node.js Code

1. Write your JavaScript code in a `.js` file (e.g., `app.js`).
2. Open a terminal and run:
```

node app.js

```
The output will appear in your terminal [^1] [^3].

## Built-in Modules

Node.js provides several core modules, including:
- **http**: Create web servers.
- **fs**: Work with the file system.
- **path**: Handle file paths.
- **os**: Interact with the operating system.
- **process**: Access process information[^5].

## Summary

Node.js enables JavaScript to be used for server-side development, offering high performance for scalable network applications using an event-driven, non-blocking architecture [^1] [^4] [^7].
```

[^1]: https://www.w3schools.com/nodejs/

[^2]: https://www.youtube.com/watch?v=gyQyk80_upM

[^3]: https://www.tutorialspoint.com/nodejs/index.htm

[^4]: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

[^5]: https://www.youtube.com/watch?v=TlB_eWDSMt4

[^6]: https://www.youtube.com/watch?v=f2EqECiTBL8

[^7]: https://www.geeksforgeeks.org/node-js/nodejs/

[^8]: https://www.simplilearn.com/tutorials/nodejs-tutorial

[^9]: https://www.youtube.com/watch?v=JZXQ455OT3A

[^10]: https://www.reddit.com/r/node/comments/uozxa8/how_should_i_start_learning_the_node_js/

