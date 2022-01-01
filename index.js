// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.created_at = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// In this example, returned resources will be wrapped in a body property
router.render = (req, res) => {
  res.jsonp({
    success: "success",
    data: res.locals.data
  })
}

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
