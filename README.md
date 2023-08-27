# List Product
1. Create Product Array
2. Add product images
3. Render Products
4. Style Products


# Add Routing:
1. npm i react-router-dom
2. create router for home screen
3. create router for product screen

# Create Node.JS Server:
1. run npm init in root folder
2. update package.json set type: module
3. add .js to imports
4. npm install express
5. create server.js
6. add start command as node backend/server.js
7. require express
8. create route for / return backend is ready.
9. move product.js from frontend to backend
10. create route for /api/products
11. return products
12. run npm start

# Fetch Products From Backend:
1. set proxy in package.json
> set the proxy ` "proxy: http://localhost:5050" ` in the `package.json` file is used to set up a proxy for development purpose in the React project.
>
> when we include the `proxy` field in our `package.json` file, it tells the development server to forward requests that are not handled by our React app to the specified URL. This is particular useful when we have a separate backend server running on a different port or domain.
### scenarios and example:
> For example, let's say we have a backend server running at `http://localhost:5050` and we create React App is running at its default port 3000. If we include ` "proxy": "htpp://localhost:5050" ` in our `package.json`:
* when we make an API request like `/api/data` in our React code, the development server will forward the request to `http://localhost:5050/api/data`.
* This helps avoid cross-origin issues since the request appears to come from the same origin (domain and port) as our frontend.
* We can write our API requests using relative URLs(`/api/data`)
rather than hardcoding the full URL (`http://localhost:5050/api/data`)
* Our backend server should handle the API requests at the specified URL (`/api/data`), and the proxy will take care of forwarding those requests during development.
2. npm install axios
3. use state hook
4. use effect hook
5. use reducer hook