# t11mobiwa
An experimental mobile warehousing solution for SAP B1 using Design1st TDD on React/Redux/TypeScript/Material-UI/PWA

## React JSX Supports Type Validation
For TypeScript integration, an terribly important feature of React is that in its JSX you will have full support for type validation; in Vue templates this is totally missing which definitely a deal breaker. Flow is excellent but a major problem with Flow is that it is the terrby slow type checking process. Here is a list of guidelines to start with React/TypeScript:
- [Microsoft TypeScript React Starter with create-react-app my-app --scripts-version=react-scripts-ts](https://github.com/Microsoft/TypeScript-React-Starter)
- [Best Practices for Using TypeScript with React](https://medium.freecodecamp.org/effective-use-of-typescript-with-react-3a1389b6072a)
- [How to improve the build speed in React-Typescript, when using Material UI](https://dev.to/janpauldahlke/how-to-improve-material-ui-speed-in-react-typescript-1199)
- [Material UI Admin (anything/anything)](https://material-ui-admin.herokuapp.com/account/login?redirect=%2F) [A boilerplate for React using Typescript, Material UI and Redux, React Router](https://github.com/goemen/react-material-ui-typescript)
- [Material UI Guide for TypeScript](https://material-ui.com/guides/typescript/)
- [Material UI Type Definitions on NPM](https://www.npmjs.com/package/@types/material-ui)  

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