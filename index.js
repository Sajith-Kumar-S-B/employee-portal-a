const jsonServer = require('json-server')

const empServer = jsonServer.create()
const middlewares = jsonServer.defaults()
const router = jsonServer.router("db.json")
const PORT = 3000  || process.env.PORT

empServer.use(middlewares)
empServer.use(router)
empServer.listen(PORT,()=>{
    console.log(`Employee portal server started at ${PORT}`);
})