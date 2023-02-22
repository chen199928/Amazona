import express from 'express'
import data from './data.js'
const app = express() // this is a new express application
/*
It defines a route for handling HTTP GET requests to the `/api/products` path.
`data.products` is the data object that will be sent as a JSON response when 
the `/api/products` route is requested.
*/
app.get('/api/products', (req, res) => {
  res.send(data.products)
})

const port = process.env.PORT || 5100

/**
 `app.listen()` method starts the server listening on the specified port.
 */
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`)
})
