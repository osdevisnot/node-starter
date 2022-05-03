# node starter

A skeleton for modern nodejs projects.

## Features

- Modern Javascript Syntax transforms
- Best Practices [Multistage Dockerfile](https://docs.docker.com/develop/develop-images/multistage-build/)
- vscode tasks to start server and test using split terminal (try ⌘+⇧+B)

## Powered By

- [esbuild](https://esbuild.github.io/) - An extremely fast JavaScript bundler
- [vitest](https://vitest.dev/) - A blazing fast unit-test framework powered by Vite
- [xo](https://github.com/xojs/xo) - JavaScript linter and ESLint wrapper with great defaults
- [prettier](https://prettier.io/) - An opinionated code formatter

## NPM Scripts

| Script   | Description                                                   |
| -------- | ------------------------------------------------------------- |
| start    | runs a live reloading http server based on native `node:http` |
| build    | creates a production ready deployment                         |
| test     | runs vitest in watch mode                                     |
| coverage | creates a code coverage report                                |
| lint     | lints using XO                                                |

## Usage

Clone this starter using degit:

```bash
npx degit osdevisnot/node-starter my-app
```

## FAQs

### How to upgrade node.js version?

- First update node.js and NPM engine version in `package.json` engines field.
- Ensure all npm scripts work with new node version
- Update the node.js version in Dockerfile
- Ensure application works with updated Dockerfile
