# t11mobiwa
An experimental mobile warehousing solution for SAP B1 using Design1st TDD on React/Redux/TypeScript/Material-UI/PWA

## React JSX Supports Type Validation
For [TypeScript](https://www.typescriptlang.org/samples/index.html) integration anterribly important feature of React is that its JSX you will have full support for type validation; Vue templates type checking doesn't work at all, which definitely a deal breaker. I hev worked a lot with Flow, but the checking process of Flow is terrby slow. 

Here is a list of guidelines to start with React/TypeScript:
- [Microsoft TypeScript React Starter with create-react-app my-app --scripts-version=react-scripts-ts](https://github.com/Microsoft/TypeScript-React-Starter)
- [Best Practices for Using TypeScript with React by Christopher Diggins (Clemex)](https://medium.freecodecamp.org/effective-use-of-typescript-with-react-3a1389b6072a) - This was a migration project from JavaScript, so some of their recommendations may not be applicable for a Design-1st TypeScript project. They have published a template project on GitHub, too; see below.
- [A Template for TypeScript Projects using React and Redux by by Christopher Diggins (Clemex)](https://github.com/Clemex/typescript-react-template) Unfortunately, this template project doesn't compile, so I had no chance to experiment with it. The issue (including me) has been reported on GitHub by multiple users. 
- [React & Redux in TypeScript - Static Typing Guide by Piotr Witek](https://github.com/piotrwitek/react-redux-typescript-guide) This is quite actively maintained project
- [React Higher-Order Components in TypeScript by James Ravenscroft](https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb)
- [How to improve the build speed in React-Typescript, when using Material UI](https://dev.to/janpauldahlke/how-to-improve-material-ui-speed-in-react-typescript-1199)
- [Material UI Admin (anything/anything)](https://material-ui-admin.herokuapp.com/account/login?redirect=%2F) The GitHub project is [A boilerplate for React using Typescript, Material UI and Redux, React Router](https://github.com/goemen/react-material-ui-typescript); it compiles and runs fine on my system, too. However, after npm update, it stops compiling. 
- [Material UI Guide for TypeScript](https://material-ui.com/guides/typescript/)
- [Material UI Type Definitions on NPM](https://www.npmjs.com/package/@types/material-ui)  
- [Getting Started With React, TypeScript MobX, and Webpack 4](https://medium.com/teachable/getting-started-with-react-typescript-mobx-and-webpack-4-8c680517c030) MobX is said to be written in TypeScript.

## Installation
- npx create-react-app t11mobiwa --scripts-version=**react-scripts-ts**
- cd t11mobiwa && npm start

Create React App with React Scripts TS created a project initialized for TS, and unlike Vue/TS it compiled cleanly. Instead of js/jsx, tsx files were created along with a gigantic README, which I renamed to README.react-scripts.md

```
c:\Users\nemet\tiva11\t11mobiwa>npm start
> t11mobiwa@0.1.0 start c:\Users\nemet\tiva11\t11mobiwa
> react-scripts-ts start
Starting type checking and linting service...
Using 1 worker with 2048MB memory limit
Watching: c:\Users\nemet\tiva11\t11mobiwa\src
Starting the development server...
ts-loader: Using typescript@3.2.2 and c:\Users\nemet\tiva11\t11mobiwa\tsconfig.json
Compiled successfully!
You can now view t11mobiwa in the browser.
  Local:            http://localhost:3000/
  On Your Network:  http://192.168.50.36:3000/
Note that the development build is not optimized.
To create a production build, use npm run build.
```
## Getting Started
### TSLint and Hello Components
I created a new branch for experimenting with TypeScript following the instructions [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter).
After I modified some of the files, I received a couple of error messages from TSLint
- [interface name must start with a capitalized I](https://palantir.github.io/tslint/rules/interface-name)
- [comment must start with a space](https://palantir.github.io/tslint/rules/comment-format)
- [The class method 'render' must be marked either 'private', 'public', or 'protected'](https://palantir.github.io/tslint/rules/member-access/)
- [A maximum of 1 class per file is allowed](https://palantir.github.io/tslint/rules/max-classes-per-file/)
- [Declaration of public instance method not allowed after declaration of private instance method. Instead, this should come after constructors](https://palantir.github.io/tslint/rules/member-ordering/)
- [Import sources within a group must be alphabetized](https://palantir.github.io/tslint/rules/ordered-imports/)

Instead of disabling these globally, I have disabled some of them in the header part of the file:
/* tslint:disable:max-classes-per-file comment-format */
So, my first impressions with TS are really great, the compilation is absolutely fast and integrated into the save/recompile/automated-rerender-in-browser process
It's a pity, I spent so much time on Flow, TypeScript is a lot more mature.
### Testing Hello Components
The instructions came from [Testing with Jest](https://github.com/Microsoft/TypeScript-React-Starter#writing-tests-with-jest)
- **npm install --save-dev enzyme @types/enzyme enzyme-adapter-react-16 @types/enzyme-adapter-react-16 react-test-renderer**
- npm run test

Since we use Create React App, we can create a src/setupTests.js and put inside it the Enzyme initialization code. CRA will tell Jest to load it before each of your tests automatically.
Everything worked amazingly.
<br/><img src="./public/runninghellotestswithjestenzyme.png" width="50%"/>

### Redux
- **npm install redux react-redux @types/react-redux**  In this case we didn't need to install @types/redux because Redux already comes with its own definition files (.d.ts files).

Dispatch is no longer part of the react-redux library. Replace import { connect, Dispatch } from 'react-redux' with
```
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
```
I have completed the entire React/TypeScript getting started tutorial, and I am really impressed. I'd never go back to Flow and especially not to bare-bones JavaScript.

## Adding Material UI
We have two starter/template projects on GitHUb to use as samples. I'd simply add Material UI as a regular package along with TypeScript type definitions, and then simply copy pasting blocks from these templates, I'll elaborate a working Material UI version. 