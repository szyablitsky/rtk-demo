const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const TOKEN = 'owner-token'

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    if (req.body?.email === 'owner@example.com' && req.body?.password === 'Ab12345678') {
      res.status(200).json({ key: TOKEN })
    } else {
      res.status(400).json({ message: 'wrong password' })
    }
  } else {
    next()
  }
})
server.use((req, res, next) => {
 if (req.headers.authorization === TOKEN) {
   next()
 } else {
   res.sendStatus(401)
 }
})

server.use(router)
server.listen(3333, () => {
  console.log('JSON Server is running')
})