require('dotenv').config()

// npm
const config = require('./config/config')
const express = require('express')

// routers
const mainRouter = require('./routes/main.route')

// app && PORT (создаем сервер)
const app = express()
const PORT = process.env.PORT ?? 3000

// config
config(app)

// routes
app.use('/', mainRouter)

// listen
app.listen(PORT, () => { console.log(`*** Working at PORT: ${PORT} ***`)})
