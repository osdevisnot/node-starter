# node starter

A skeleton for modern nodejs projects.

## Features

- Modern Javascript Syntax transforms
- Best Practices [Multistage Dockerfile](https://docs.docker.com/develop/develop-images/multistage-build/)
- vscode tasks to start server and test using split terminal (try ⌘+⇧+B)
- vscode settings for xo and better DX

## Powered By

- [esbuild](https://esbuild.github.io/) - An extremely fast JavaScript bundler
- [vitest](https://vitest.dev/) - A blazing fast unit-test framework powered by Vite
- [xo](https://github.com/xojs/xo) - JavaScript linter and ESLint wrapper with great defaults
- [prettier](https://prettier.io/) - An opinionated code formatter

## NPM Scripts

| Script   | Description                                  |
| -------- | -------------------------------------------- |
| clean    | cleans up local workspace                    |
| start    | runs http server based on native `node:http` |
| build    | creates a production ready deployment        |
| test     | runs vitest in watch mode                    |
| coverage | runs vitest in coverage mode                 |
| format   | formats all src and test files with prettier |
| lint     | lints code using XO in autofix mode          |

## Usage

Clone this starter using degit:

```bash
npx degit osdevisnot/node-starter my-app
```
