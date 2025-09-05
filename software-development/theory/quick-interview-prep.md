# Software Developer Technical Interview Questions

## JavaScript Technical Interview Prep

## Object-Oriented Programming (OOP) in JavaScript

- **Classes/Objects**: ES6 `class` syntax creates blueprints; objects are their instances.
- **Methods**: Functions within classes or as prototype methods.
- **Properties**: State/data attached to object instances.
- **Inheritance**: Use `extends` keyword; child classes inherit parent properties and methods.
- **Polymorphism**: Method overriding in subclasses enables objects to be used via parent references.
- **Encapsulation**: Private fields (`#field`) or closure patterns protect data.
- **Abstraction**: Only expose necessary API (public interface) of classes.

## Object-Oriented Programming (OOP)

### What is the structure of object-oriented programming?

The structure, or building blocks, of OOP include:

- **Classes**: User-defined data types that act as blueprints for individual objects, attributes, and methods.
- **Objects**: Instances of a class created with specifically defined data. Objects can correspond to real-world objects or an abstract entity.
- **Methods**: Functions defined inside a class that describe the behaviors of an object. Each method references the instance object.
- **Attributes**: Defined in the class template and represent the state of an object. Class attributes belong to the class itself.

---

```js
class Animal {
  #energy = 100;
  speak() {
    console.log("Makes a sound");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}
```

## Essential JavaScript Data Structures

- **Array**: `let arr = [1, 2, 3]` — for ordered collections and most standard algorithms.
- **Object**: `let obj = { key: 'value' }` — for key-value pairs (hash maps).
- **Map**: `let map = new Map()` — for ordered, iterable key-value pairs with any data type as keys.
- **Set**: `let set = new Set([1, 2, 3])` — stores unique items.
- **Stack**: `arr.push(x), arr.pop()` — LIFO; use array methods.
- **Queue**: `arr.push(x), arr.shift()` — FIFO; use array or build a Queue class.
- **Linked List**: Custom implementation using classes and pointers.
- **Tree / Binary Tree / BST**: Node classes, recursive algorithms for traversals (DFS, BFS).
- **Graph**: Adjacency list via objects/maps.
- **Heap**: Implemented via arrays and custom functions (no built-in structure in JS).

## JavaScript Algorithms to Know

- **Search Algorithms**: Linear search, binary search (on sorted arrays), hash map lookup.
- **Sorting Algorithms**: Bubble sort, insertion sort, selection sort, quicksort, mergesort (all can be coded in JS arrays).
- **Recursion**: Essential for trees/graphs—be able to write recursive solutions.
- **Breadth-First and Depth-First Traversal**: For trees and graphs.
- **Dynamic Programming**: Use objects/arrays for memoization and tabulation.

## Language Concepts and Interview Patterns

- **Scope, Closures, Hoisting**: Understand how `let`, `const`, `var` work, and closures for encapsulation.
- **`this` Keyword**: Context binding for object methods, arrow functions.
- **Callbacks, Promises, Async/Await**: Fluency with asynchronous programming.
- **Functional Programming**: Array methods (`map`, `filter`, `reduce`), pure functions.
- **Error Handling**: Try/catch; handling edge cases.

## Interview Coding Tips

- Communicate: Ask for clarifications, talk through approach.
- Be clear: Name functions/variables meaningfully, use whitespace.
- Test: Write and run sample/edge test cases.
- Analyze: Mention time/space complexity, tradeoffs, limitations.
- Debug: Step through code, fix errors on the fly.

### What are the main principles of OOP?

Reference: [FreeCodeCamp: OOP Concepts](https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/)

#### Encapsulation (Methods)

Encapsulation is achieved when each object keeps its state private, inside a class. Other objects don’t have direct access; they use public methods only.

Example scenario: a `Cat` class encapsulating `mood`, `hungry`, and `energy` states, with public methods like `sleep()`, `play()`, and `feed()`.

#### Abstraction

Abstraction hides internal implementation details, exposing only high-level operations.  
Example: Using a coffee machine or a smartphone, you interact with a few controls without knowing internal mechanics.

#### Inheritance

Inheritance allows creating a child class from a parent class to reuse common logic while implementing unique features.

#### Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a parent class. Methods defined in the parent can be overridden in child classes.

---

### Benefits of OOP

- **Modularity**: Easier troubleshooting and collaborative development.
- **Reusability**: Reuse code through inheritance.
- **Productivity**: Faster development with reusable code.
- **Scalability**: Implement functionalities independently.
- **Interface descriptions**: Simplified communication between systems.
- **Security**: Encapsulation and abstraction protect internal logic.
- **Flexibility**: Polymorphism allows uniform interfaces across classes.

---

### Criticism of OOP

- Overemphasizes data over computation or algorithms.
- May complicate code and slow compilation.

**Alternative approaches:**

- Functional programming (Erlang, Scala)
- Structured/modular programming (PHP, C#)
- Imperative programming (C++, Java)
- Declarative programming (Prolog, Lisp)
- Logical programming (Prolog)

---

### SOLID Principles

Reference: [DigitalOcean: SOLID Principles](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)

- **S** - Single-responsibility Principle
- **O** - Open-closed Principle
- **L** - Liskov Substitution Principle
- **I** - Interface Segregation Principle
- **D** - Dependency Inversion Principle

#### Single-Responsibility Principle

A class should have only one reason to change. Example: AreaCalculator class for shapes.

#### Open-Closed Principle

Classes should be open for extension but closed for modification.

#### Liskov Substitution Principle

Derived classes should be substitutable for their base classes.

#### Interface Segregation Principle

Clients should not be forced to depend on interfaces they do not use.

#### Dependency Inversion Principle

High-level modules should depend on abstractions, not concrete implementations.

---

### YAGNI

_"You Aren’t Going to Need It"_ – only add features when required.

### Refactoring

Rewrite code efficiently: minimize work inside loops, optimize conditions, and handle common cases first.

### Writing Code in Interviews

- Keep code simple and readable.
- Use white space and comments effectively.
- Ask clarifying questions and treat the interviewer as a collaborator.
