## Tips

ctrl + shift + v to view the markdown in vscode

## Installation

npx stands for Node Package Execute. It can also be called the npm package runner that can execute packages that you want from the npm registry without installing it locally.

```bash
npx create-react-app folder_name
```

then cd to the folder, npm start. npm start is a command that is used to start a Node.js project. When we run the "npm start" command in a Node.js project, it looks for the "start" script defined in the "script" section of the package.json file. This script can be used to start the development server, compile the code, or run any other commands needed to start your application.

```bash
cd folder_name
npm start
```

## Adding routing

1. npm i react-router-dom
2. create route for home screen
3. create router for product screen

## Create Node.js Server

1. run npm init in root folder
   - `npm init` is a command used in Node.js to create a new `package.json`.
   - the `package.json` file is used to describe the metadata for a Node.js project, including information such as the project name, version, author, dependencies.
   -
2. update package.json set type: module
   - In `package.json`, the `type` field is used to specify the type of the package.
   - The `module` field indicates that the package is an ECMAScript module that can be imported using `import` statements.
3. add .js to imports
4. npm install express
   - `express` is a web framework for Node.js that makes it easier to build web applications and APIs. It provides a simple and intuitive API for creating HTTP servers, handling routes, processing requests and responses, and more.
   - Express is built on top of Node.js's built-in `http` module, which provides the low-level functionality for handling HTTP requests and responses.
5. create server.js
6. add start command as node backend/server.js
7. require express
8. create route for / return backend is ready.
9. move products.js from frontend to backend
10. create route for /api/products
11. return products
12. run npm start
