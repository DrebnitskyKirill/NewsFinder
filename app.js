require('dotenv').config()

// npm
const config = require('./config/config')
const express = require('express')

// routers
const mainRouter = require('./routes/main.route');
const regRouter = require('./routes/registration');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout.route');
const middleWare = require('./middleware/autoChecker');


// app && PORT (создаем сервер)
const app = express()
const PORT = process.env.PORT ?? 3000

// config
config(app)

// routes
app.use('/', mainRouter);
app.use('/registration', regRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

//middleware
app.use(middleWare);


// listen
app.listen(PORT, () => { console.log(`*** Working at PORT: ${PORT} ***`)})
