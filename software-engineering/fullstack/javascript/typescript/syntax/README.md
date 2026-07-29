# Typescript syntax

## Introduction to TypeScript for Javascript developers

This is a quick refresher to setup a typescript project and usage of typescript.

- TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- Apply types to your JavaScript project incrementally.
- Describe the shape of objects and functions code
- `//@ts-check` : By adding to start of the JavaScript file, enables TypeScript type checking in plain JavaScript files.
- There are two syntaxes for building types: Interfaces and Types. You should prefer interface. Use type when you need specific features.
- There is already a small set of primitive types available in JavaScript: boolean, bigint, null, number, string, symbol, and undefined, which you can use in an interface. TypeScript extends this list with a few more, such as any (allow anything), unknown (ensure someone using this type declares what the type is), never (it’s not possible that this type could happen), and void (a function which returns undefined or has no return value).

## Setup

- `npx tsc --init` : Create tsconfig.json

## Compiling

- `npx tsc <typescriptfilename.ts>` : TypeScript compiler

## External resources

- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Migrating from JavaScript](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)
- [TypeScript React Conversion Guide](https://github.com/Microsoft/TypeScript-React-Conversion-Guide#typescript-react-conversion-guide)
- [Webpack TypeScript setup](https://webpack.js.org/guides/typescript/)
- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
