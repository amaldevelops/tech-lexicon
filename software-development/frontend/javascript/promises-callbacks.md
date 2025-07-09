
# What are Promises and how do they differ from callbacks

**Promises** and **callbacks** are both mechanisms for handling asynchronous operations in JavaScript, but they differ significantly in how they work, how they handle errors, and how they affect code readability and maintainability.

### What is a Callback?

A **callback** is a function passed as an argument to another function, which is then invoked after some operation completes. Callbacks have been a core part of JavaScript for handling asynchronous tasks like reading files, making API calls, or responding to events[^4] [^5].

**Example:**

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data fetched');
  }, 1000);
}
fetchData((result) => {
  console.log(result);
});
```

**Drawbacks:**

- Can lead to **callback hell** (deeply nested, hard-to-read code) when multiple asynchronous operations are chained.
- Error handling is manual and can become cumbersome in complex scenarios[^1] [^4] [^5].


### What is a Promise?

A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner, more organized way to handle async code, with built-in methods for chaining and error handling[^1] [^3] [^4] [^5].

**States of a Promise:**

- **Pending:** Initial state, neither fulfilled nor rejected.
- **Fulfilled:** Operation completed successfully.
- **Rejected:** Operation failed.
- **Settled:** Either fulfilled or rejected [^1].

**Example:**

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data fetched');
  }, 1000);
});
promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

**Benefits:**

- **Chaining:** Promises can be chained using `.then()` and `.catch()`, making code more readable and maintainable[^1] [^3] [^4].
- **Centralized error handling:** Errors can be caught in a single `.catch()` block, simplifying error management[^1] [^3] [^4].
- **Avoids callback hell:** Promises flatten nested structures, improving readability and flow control[^1] [^3] [^4].


### Key Differences

| Aspect | Callbacks | Promises |
| :-- | :-- | :-- |
| **Syntax** | Nested functions | Chaining with `.then()` and `.catch()` |
| **Error Handling** | Manual, can be complex | Centralized, easier with `.catch()` |
| **Readability** | Can lead to callback hell | Cleaner, more readable |
| **Scalability** | Harder for complex workflows | Easier for complex workflows |
| **Execution** | Function is executed when called | Promise represents a future value |
| **Best for** | Simple, one-off async tasks | Complex async flows, modern codebases |

**In summary:**
**Promises** provide a more robust, readable, and maintainable approach for handling asynchronous operations compared to **callbacks**, especially as code complexity grows. They address the pitfalls of callback hell and offer better error handling, making them the preferred choice in modern JavaScript development[^1] [^3] [^4] [^5].

[^1]: https://www.geeksforgeeks.org/javascript/promise-vs-callback-in-javascript/

[^2]: https://www.reddit.com/r/node/comments/109xb3r/what_is_difference_between_callback_and/

[^3]: https://makimo.com/blog/callbacks-vs-promises-in-javascript/

[^4]: https://metana.io/blog/promises-vs-callbacks-in-javascript/

[^5]: https://reintech.io/blog/differences-between-callbacks-and-promises-in-javascript

[^6]: https://softwareengineering.stackexchange.com/questions/302455/is-there-really-a-fundamental-difference-between-callbacks-and-promises

[^7]: https://www.youtube.com/watch?v=ranuTFXPgbw

