# Javascript basics

### Fundamentals

**Q: What is JavaScript and how is it used in web development?**
A: JavaScript is a high-level, interpreted programming language primarily used to add interactivity, manipulate content, and control multimedia on web pages. It runs in the browser and enables dynamic user experiences.

**Q: What are JavaScript’s primitive data types?**
A: The primitive data types are: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`.

**Q: How does JavaScript differ from Java?**
A: JavaScript is a lightweight, interpreted language mainly for web development, while Java is a compiled, object-oriented language used for a wide range of applications. They have different syntax, use cases, and runtime environments.

**Q: What is the difference between `null` and `undefined`?**
A: `undefined` means a variable has been declared but not assigned a value. `null` is an assignment value that represents no value or no object.

**Q: Explain the difference between `var`, `let`, and `const`.**
A:

- `var` is function-scoped and can be redeclared and reassigned.
- `let` is block-scoped, can be reassigned but not redeclared within the same scope.
- `const` is block-scoped and cannot be reassigned or redeclared.

**Q: What are arrays and how do you access their elements?**
A: Arrays are ordered collections of values. Elements are accessed using zero-based indexing, e.g., `arr`.

**Q: What is the purpose of the `typeof` operator?**
A: It returns a string indicating the type of the unevaluated operand, such as `"string"`, `"number"`, `"object"`, etc.

**Q: What is hoisting in JavaScript?**
A: Hoisting is JavaScript’s behavior of moving declarations to the top of their scope before code execution. `var` declarations are hoisted and initialized as `undefined`; `let` and `const` are hoisted but not initialized.

**Q: What is the difference between `==` and `===`?**
A: `==` checks for value equality with type coercion. `===` checks for both value and type equality (strict equality).

**Q: How do you check if a variable is undefined?**
A: Use `typeof variable === "undefined"` or compare directly: `variable === undefined`.

### Functions and Scope

**Q: What is a closure and how does it work?**
A: A closure is a function that retains access to its outer function’s variables even after the outer function has returned, due to lexical scoping.

**Q: What is the difference between a parameter and an argument?**
A: Parameters are variables listed in a function’s definition. Arguments are the actual values passed to the function when it’s called.

**Q: What is a higher-order function?**
A: A function that takes one or more functions as arguments, returns a function, or both.

**Q: What are callback functions and how are they used?**
A: A callback is a function passed as an argument to another function to be executed later, often after an asynchronous operation.

**Q: What is an arrow function and how does it differ from a regular function?**
A: Arrow functions have a shorter syntax and do not have their own `this`, `arguments`, or `super`. They are best suited for non-method functions.

**Q: Explain the concept of lexical scope.**
A: Lexical scope means that a variable’s accessibility is determined by its location within the source code, and nested functions have access to variables declared in their outer scope.

**Q: What is the difference between function declarations and function expressions?**
A: Function declarations are hoisted and can be called before they appear in the code. Function expressions are not hoisted and can only be called after they are defined.

**Q: What is an Immediately Invoked Function Expression (IIFE)?**
A: An IIFE is a function that runs as soon as it is defined, often used to create a private scope.

**Q: What is recursion and how is it used in JavaScript?**
A: Recursion is when a function calls itself to solve a problem. It’s used for tasks that can be broken down into similar sub-tasks.

### Objects and Prototypes

**Q: What is an object in JavaScript?**
A: An object is a collection of key-value pairs, where the values can be data or functions (methods).

**Q: What is prototypal inheritance?**
A: Objects can inherit properties and methods from other objects via the prototype chain, allowing for shared behavior.

**Q: How does the `this` keyword work?**
A: `this` refers to the object that is executing the current function. Its value depends on how the function is called.

**Q: What is the difference between `Object.freeze()` and `const`?**
A: `Object.freeze()` prevents modification of an object’s properties. `const` prevents reassignment of the variable, but the object itself can still be mutated unless frozen.

**Q: What are the differences between `Object.seal()` and `Object.freeze()`?**
A: `Object.seal()` prevents adding or removing properties but allows modifying existing ones. `Object.freeze()` makes an object completely immutable.

**Q: How do you create and use classes in JavaScript?**
A: Use the `class` keyword to define a class, and `new` to create instances. Classes support constructors, methods, and inheritance.

### Asynchronous JavaScript

**Q: What is a Promise and how does it work?**
A: A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has states: pending, fulfilled, or rejected, and supports chaining with `.then()` and `.catch()`.

**Q: What is the difference between callbacks, Promises, and async/await?**
A: Callbacks are functions passed to handle async results. Promises provide a cleaner, chainable way to handle async operations. `async/await` is syntax sugar over Promises for writing async code in a synchronous style.

**Q: How does the event loop work in JavaScript?**
A: The event loop continuously checks the call stack and message queue, executing queued callbacks when the stack is clear, enabling non-blocking asynchronous behavior.

**Q: What is the purpose of `setTimeout` and `setInterval`?**
A: `setTimeout` schedules a function to run after a delay. `setInterval` schedules a function to run repeatedly at specified intervals.

**Q: What is event delegation?**
A: Event delegation is a technique where a single event handler is added to a parent element to manage events for its child elements, improving performance and code organization.

**Q: How do you handle errors in asynchronous code?**
A: For callbacks, handle errors in the callback function. For Promises, use `.catch()`. With `async/await`, use `try...catch` blocks.

### Advanced and Practical Questions

**Q: How can you remove duplicates from an array?**
A: Use a `Set`: `const unique = [...new Set(array)];`

**Q: How can you check if an array includes a certain value?**
A: Use the `includes()` method: `array.includes(value);`

**Q: What is the difference between shallow and deep copying?**
A: Shallow copy duplicates only the top-level properties; nested objects are shared. Deep copy duplicates all levels, creating independent objects.

**Q: What are ES6 features you have used?**
A: Examples include arrow functions, template literals, destructuring, `let`/`const`, classes, modules, and Promises.

**Q: What is currying in JavaScript?**
A: Currying is transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

**Q: Explain the difference between `call`, `apply`, and `bind`.**
A: All set the `this` value of a function. `call` and `apply` invoke the function immediately (`call` takes arguments separately, `apply` as an array). `bind` returns a new function with `this` bound.

**Q: What is strict mode and how is it enabled?**
A: Strict mode enforces stricter parsing and error handling. Enable it by adding `"use strict";` at the top of a script or function.

**Q: How is JavaScript executed in the browser?**
A: JavaScript is parsed and executed by the browser’s JavaScript engine, using a call stack, event loop, callback queue, and microtask queue to manage execution order.

**Q: What happens when you enter a URL in the browser?**
A: The browser resolves the domain, sends an HTTP request, receives a response, parses HTML/CSS/JS, and renders the page.

**Q: What is functional programming and how is it used in JavaScript?**
A: Functional programming emphasizes pure functions, immutability, and higher-order functions. JavaScript supports this style with functions like `map`, `filter`, and `reduce`.

### Table: Key JavaScript Topics

| Topic | Example Question | Example Answer (Short) |
| :-- | :-- | :-- |
| Data Types | What are the different data types in JavaScript? | string, number, bigint, boolean, undefined, symbol, null |
| Variable Declarations | Difference between `var`, `let`, and `const`? | Scope, hoisting, reassignment, redeclaration rules |
| Functions \& Scope | What is a closure? | Function with access to its lexical scope |
| Objects \& Prototypes | What is prototypal inheritance? | Objects inherit from other objects via prototype chain |
| Asynchronous JS | How do Promises differ from callbacks? | Promises allow chaining, better error handling, readability |
| Array Methods | How do you remove duplicates from an array? | Use `Set`: `[...new Set(array)]` |
| ES6 Features | What are arrow functions and how do they work? | Concise syntax, no own `this`, best for non-methods |
| Error Handling | How do you handle errors in JavaScript? | Use `try...catch`, `.catch()` for Promises |
