# HTTP request

An **HTTP request** is the foundational mechanism by which web browsers and other clients communicate with web servers to request resources or perform actions. Here’s how it works, step by step:

### 1. Initiation by the Client

- When you enter a URL in your browser or your code makes a fetch call, the client (browser or application) prepares an HTTP request[^1] [^4].

### 2. DNS Resolution

- The client resolves the domain name (e.g., www.example.com) to an IP address using the Domain Name System (DNS)[^1] [^3] [^4].

### 3. TCP Connection (and TLS for HTTPS)

- The client establishes a TCP connection to the server, typically on port 80 for HTTP or port 443 for HTTPS.
- For HTTPS, an SSL/TLS handshake occurs to secure the connection[^1] [^3].

### 4. Sending the HTTP Request

The request consists of several components:

- **Request Line**: Specifies the HTTP method (GET, POST, etc.), the resource path (e.g., /index.html), and the HTTP version (e.g., HTTP/1.1)[^1] [^2] [^3] [^4].
- **Headers**: Provide metadata such as content type, user agent, and authorization[^1] [^2] [^3] [^4].
- **Body**: Optional; contains data sent to the server (e.g., form data in a POST request)[^1] [^2] [^3].
- **Query Parameters**: Optional; appended to the URL for sending data in GET requests[^1].

Example:

```
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
```

### 5. Server Processing

- The server receives the request, processes it (which may involve querying a database or running application logic), and prepares a response[^1] [^2] [^7] [^10].

### 6. Server Sends HTTP Response

- The server responds with:
  - **Status Line**: HTTP version and status code (e.g., 200 OK, 404 Not Found)[^4].
  - **Headers**: Metadata about the response (e.g., content type, cookies).
  - **Body**: The requested resource or data (e.g., HTML, JSON, images)[^4] [^7].

### 7. Client Receives and Processes Response

- The client (browser) reads the response, interprets headers and status codes, and renders the content or processes the data as needed[^1] [^4] [^5].

### 8. Connection Closure

- The TCP connection is closed unless kept alive for reuse (persistent connections in HTTP/1.1 and multiplexing in HTTP/2)[^1].

**Summary Table: HTTP Request Lifecycle**

| Step               | Description                                        |
| :----------------- | :------------------------------------------------- |
| Initiation         | Client triggers request (URL, API call)            |
| DNS Resolution     | Domain resolved to server IP address               |
| TCP Connection     | Connection established (with SSL/TLS for HTTPS)    |
| Send Request       | Request line, headers, body sent to server         |
| Server Processing  | Server handles request, prepares response          |
| Response Sent      | Server sends status, headers, body                 |
| Client Processing  | Client processes response, renders or acts on data |
| Connection Closure | Connection closed or reused                        |

This cycle repeats for each resource (HTML, CSS, JS, images) needed to render a web page[^1][^4].

[^1]: https://www.browserstack.com/guide/http-request
[^2]: https://webdock.io/en/docs/mastering-web-fundamentals/web-server-setup-management/understanding-lifecycle-http-request
[^3]: https://requestly.com/blog/life-cycle-of-a-http-request/
[^4]: https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:web-protocols/a/hypertext-transfer-protocol-http
[^5]: https://dev.to/ashevelyov/the-step-by-step-journey-of-a-network-request-1d10
[^6]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview
[^7]: https://www.catchpoint.com/blog/http-transaction-steps
[^8]: https://sematext.com/glossary/http-requests/
[^9]: https://cloud.theodo.com/en/blog/http-request
[^10]: https://www.w3schools.com/whatis/whatis_http.asp
