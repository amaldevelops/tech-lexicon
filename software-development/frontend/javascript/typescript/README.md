# Typescript

## Setup

- [Official Microsoft download TypeScript instructions](https://www.typescriptlang.org/download/)
- TypeScript can be installed through three installation routes depending on how you intend to use it: an npm module, a NuGet package or a Visual Studio Extension.
- If you are using Node.js, you want the npm version.
- Having TypeScript set up on a per-project basis lets you have many projects with many different versions of TypeScript, this keeps each project working consistently.
- TypeScript is available as a package on the npm registry available as "typescript".
- `npm init -y` : Initialize an empty package.json
- You will need a copy of Node.js as an environment to run the package. Then you use a dependency manager like npm, yarn or pnpm to download TypeScript into your project. - `npm install typescript --save-dev`
- All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands: `npx tsc`